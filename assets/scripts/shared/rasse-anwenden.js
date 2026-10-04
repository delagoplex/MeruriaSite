/* ─────────────────────────────────────────────────────────────────
   Rasse anwenden — macht aus einem NSC-Statblock (Unterart "NPC") einen
   Statblock mit Rasse, angeborenem Talent und Waffe.

   Daten:   window.RASSEN_STRUKTUR  (assets/scripts/data/rassen-struktur-data.js)
            window.AUSRUESTUNG_DATA (Waffenlisten, assets/scripts/data/ausrüstung-data.js)
   API:     window.RasseAnwenden = {
              istRassenfaehig(m), optionen(), talente(opt), waffen(),
              anwenden(m, { rasse, linie, talent, waffe, groesse }), zufall(m, teil)
            }
   Der fertige Statblock wird immer aus Vorlage + Auswahl berechnet, nie gespeichert.
   ───────────────────────────────────────────────────────────────── */
(function () {
  var ATTRS = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
  var mod = function (s) { return Math.floor((s - 10) / 2); };
  var SKILL = {
    'Akrobatik': 'DEX', 'Arkane Kunde': 'INT', 'Athletik': 'STR', 'Auftreten': 'CHA', 'Einschüchtern': 'CHA',
    'Fingerfertigkeit': 'DEX', 'Geschichte': 'INT', 'Heilkunde': 'WIS', 'Heimlichkeit': 'DEX',
    'Mit Tieren umgehen': 'WIS', 'Motiv erkennen': 'WIS', 'Nachforschungen': 'INT', 'Naturkunde': 'INT',
    'Religion': 'INT', 'Täuschen': 'CHA', 'Überleben': 'WIS', 'Überlebenskunst': 'WIS', 'Überzeugen': 'CHA', 'Wahrnehmung': 'WIS'
  };
  var SAVE = { STR: 'STR', GES: 'DEX', DEX: 'DEX', KON: 'CON', CON: 'CON', INT: 'INT', WEI: 'WIS', WIS: 'WIS', CHA: 'CHA' };
  var FINESSE_NAMEN = /Dolch|Kurzschwert|Krummsäbel|Rapier|Peitsche|Wurfpfeil|Dolch/;

  var struktur = function () { return window.RASSEN_STRUKTUR || {}; };
  var clone = function (o) { return JSON.parse(JSON.stringify(o)); };
  var fmt = function (n) { return String(n).replace('.', ','); };

  // ── Würfelausdrücke "2W8+2" ─────────────────────────────────
  function parseDice(s) {
    var m = /^(\d+)W(\d+)(?:([+-])(\d+))?$/.exec(String(s).trim());
    if (!m) return null;
    return { n: +m[1], d: +m[2], k: m[3] ? (m[3] === '-' ? -1 : 1) * +m[4] : 0 };
  }
  function diceStr(x) { return x.n + 'W' + x.d + (x.k ? (x.k > 0 ? '+' : '') + x.k : ''); }
  function diceAvg(x) { return Math.max(1, Math.floor(x.n * (x.d / 2 + 0.5) + x.k)); }

  // ── Optionen ────────────────────────────────────────────────
  function istRassenfaehig(m) {
    return !!m && m.art === 'Humanoid' && /(^|,\s*)NPC(\s*,|$)/.test(m.unterart || '');
  }

  function optionen() {
    var out = [], s = struktur();
    Object.keys(s).sort(function (a, b) { return a.localeCompare(b, 'de'); }).forEach(function (r) {
      var o = s[r], v = o.varianten || {};
      var linien = Object.keys(v).filter(function (k) { return v[k].attribute || v[k].resistenzen || v[k].wahl; });
      // Rassen, deren Boni/Resistenzen an den Linien hängen, gibt es nur mit Linie
      if (!linien.length) out.push({ key: r, rasse: r, linie: null, label: r });
      linien.forEach(function (k) { out.push({ key: r + '|' + k, rasse: r, linie: k, label: r + ' – ' + k }); });
    });
    return out;
  }

  function talente(opt) {
    var o = struktur()[opt.rasse];
    if (!o) return [];
    var list = (o.talente || []).slice();
    if (opt.linie && o.linienTalente) {
      // Liste (Talentname enthält die Linie) oder Objekt { Linie: [Talente] }
      if (Array.isArray(o.linienTalente)) o.linienTalente.forEach(function (t) { if (t.indexOf(opt.linie) >= 0) list.push(t); });
      else (o.linienTalente[opt.linie] || []).forEach(function (t) { list.push(t); });
    }
    return list;
  }

  // Das Talent, das zur gewählten Blutlinie gehört (z. B. Tieflinge), sonst null
  function linienTalent(opt) {
    var o = struktur()[opt.rasse];
    if (!o || !opt.linie || !o.linienTalente) return null;
    if (!Array.isArray(o.linienTalente)) return (o.linienTalente[opt.linie] || [])[0] || null;
    return o.linienTalente.filter(function (t) { return t.indexOf(opt.linie) >= 0; })[0] || null;
  }

  // mögliche Größen einer Rasse bzw. Linie
  function groessen(opt) {
    var o = struktur()[opt.rasse];
    if (!o) return [];
    var lin = opt.linie && o.varianten ? o.varianten[opt.linie] : null;
    return ((lin && lin.groesse) || o.groesse || []).slice();
  }

  function waffen() {
    var d = window.AUSRUESTUNG_DATA || {};
    var out = [];
    [['EINFACHE_NAHKAMPF', 'nah', 'Einfach'], ['KRIEGS_NAHKAMPF', 'nah', 'Kriegswaffe'],
     ['EINFACHE_FERNKAMPF', 'fern', 'Einfach'], ['KRIEGS_FERNKAMPF', 'fern', 'Kriegswaffe']].forEach(function (g) {
      (d[g[0]] || []).forEach(function (w) {
        var m = /^(\d+W\d+|\d+)\s+(\p{L}+)$/u.exec(w.schaden || '');
        if (!m) return; // Netz o. Ä. ohne Schaden
        out.push({ name: w.name, typ: g[1], kategorie: g[2], wuerfel: m[1], schadensart: m[2], eigenschaften: w.eigenschaften || '' });
      });
    });
    return out;
  }

  // ── Hilfen für die Anpassung ────────────────────────────────
  function addBonus(target, b) {
    if (!b) return;
    if (b.ALLE) { ATTRS.forEach(function (a) { target[a] = (target[a] || 0) + b.ALLE; }); return; }
    Object.keys(b).forEach(function (a) { target[a] = (target[a] || 0) + b[a]; });
  }

  function ruestungsArt(typ) {
    var t = typ || '';
    if (/Kettenhemd|Ringpanzer|Schienen|Platten|Kettenrüstung/.test(t)) return 'schwer';
    if (/Fell|Schuppen|Brustharnisch|Halbplatte/.test(t)) return 'mittel';
    if (/natürliche/i.test(t)) return 'natuerlich';
    return 'leicht';
  }

  function angriffsAttribut(text, name, alt) {
    var z = null, mt = /Treffer: \d+ \((\d+W\d+)([+-]\d+)?\)/.exec(text);
    if (mt) z = mt[2] ? +mt[2] : 0; else return null;
    var passend = ATTRS.filter(function (a) { return mod(alt[a]) === z; });
    if (!passend.length) return null;
    var koerper = passend.filter(function (a) { return a === 'STR' || a === 'DEX'; });
    // Angriff mit Hauptattribut (INT/WIS/CHA/KON): das höchste der passenden
    if (!koerper.length) return passend.slice().sort(function (a, b) { return alt[b] - alt[a]; })[0];
    if (koerper.length === 1) return koerper[0];
    var nurFern = /Fernkampf-Waffenangriff/.test(text) && !/Nahkampf/.test(text);
    if (nurFern || FINESSE_NAMEN.test(name)) return 'DEX';
    return 'STR';
  }

  // Angriffs- und Schadensbonus um delta verschieben (nur der erste Schadenswurf + "oder"-Variante)
  function angriffAnpassen(text, delta) {
    var t = text.replace(/\+(-?\d+) zum Treffen/, function (m, h) { var v = +h + delta; return (v >= 0 ? '+' : '') + v + ' zum Treffen'; });
    var first = true;
    return t.replace(/(oder )?(\d+) \((\d+W\d+)([+-]\d+)?\)/g, function (m, oder, a, dice, k) {
      if (!first && !oder) return m;
      first = false;
      var x = parseDice(dice + (k || '')); if (!x) return m;
      x.k += delta;
      return (oder || '') + diceAvg(x) + ' (' + diceStr(x) + ')';
    });
  }

  function sinneParsen(list) {
    var out = {};
    (list || []).forEach(function (s) {
      var m = /^(.*?)\s+(\d+(?:,\d+)?)\s*m$/.exec(s);
      if (m) out[m[1]] = Math.max(out[m[1]] || 0, parseFloat(m[2].replace(',', '.')));
      else out[s] = out[s] || 0;
    });
    return out;
  }

  // Übungsbonus: aus einem vorhandenen Angriff der Vorlage ableiten, sonst nach Herausforderungsgrad
  function uebungsbonus(m) {
    var prof = null;
    (m.aktionen || []).forEach(function (x) {
      if (prof !== null) return;
      var mt = /\+(-?\d+) zum Treffen/.exec(x.beschreibung);
      var at = mt && angriffsAttribut(x.beschreibung, x.name, m.attribute);
      if (at) prof = +mt[1] - mod(m.attribute[at]);
    });
    if (prof === null || prof < 2 || prof > 7) prof = 2 + Math.floor((Math.max(m.cr || 0, 1) - 1) / 4);
    return prof;
  }

  // ── Waffe einsetzen ─────────────────────────────────────────
  function waffeText(w, attrMod, prof) {
    var x = w.wuerfel.indexOf('W') > 0 ? parseDice(w.wuerfel) : { n: 0, d: 0, k: +w.wuerfel };
    var dmg = function (dice) {
      var d2 = typeof dice === 'string' ? parseDice(dice) : dice;
      d2 = { n: d2.n, d: d2.d, k: d2.k + attrMod };
      return diceAvg(d2) + ' (' + diceStr(d2) + ')';
    };
    var hit = prof + attrMod;
    var hitS = (hit >= 0 ? '+' : '') + hit;
    var ei = w.eigenschaften || '';
    var wurf = /Wurfwaffe \(Reichweite ([\d,\/]+)\)/.exec(ei);
    var gesch = /Geschosse \(Reichweite ([\d,\/]+)\)/.exec(ei);
    var vielseitig = /Vielseitig \((\d+W\d+)\)/i.exec(ei);
    var art = w.schadensart + 'schaden';
    var nahR = /Weitreichend/i.test(ei) ? '3 m' : '1,5 m';
    var treffer = w.wuerfel.indexOf('W') > 0 ? dmg(w.wuerfel) : (Math.max(1, +w.wuerfel + attrMod) + '');
    var text;
    if (w.typ === 'fern') {
      text = 'Fernkampf-Waffenangriff: ' + hitS + ' zum Treffen, Reichweite ' + (gesch ? gesch[1] : '9/36') + ' m, ein Ziel. Treffer: ' + treffer + ' ' + art + '.';
    } else if (wurf) {
      text = 'Nahkampf- oder Fernkampf-Waffenangriff: ' + hitS + ' zum Treffen, Reichweite ' + nahR + ' oder Reichweite ' + wurf[1] + ' m, ein Ziel. Treffer: ' + treffer + ' ' + art
        + (vielseitig ? ', oder ' + dmg(vielseitig[1]) + ' ' + art + ' wenn die Waffe mit beiden Händen geführt wird' : '') + '.';
    } else {
      text = 'Nahkampf-Waffenangriff: ' + hitS + ' zum Treffen, Reichweite ' + nahR + ', ein Ziel. Treffer: ' + treffer + ' ' + art
        + (vielseitig ? ', oder ' + dmg(vielseitig[1]) + ' ' + art + ' wenn die Waffe mit beiden Händen geführt wird' : '') + '.';
    }
    return text;
  }

  function waffeEinsetzen(m, wname) {
    var w = waffen().filter(function (x) { return x.name === wname; })[0];
    if (!w) return;
    var prof = uebungsbonus(m);
    var finesse = /Finesse/i.test(w.eigenschaften);
    var a = w.typ === 'fern' ? 'DEX' : finesse ? (m.attribute.DEX > m.attribute.STR ? 'DEX' : 'STR') : 'STR';
    // Greift der NSC mit einem anderen Attribut an (z. B. INT bei Gelehrten), bleibt es dabei
    var urAkt = (m.aktionen || []).filter(function (x) { return /Waffenangriff/.test(x.beschreibung) && x.name !== 'Mehrfachangriff'; })[0];
    var urAt = urAkt && angriffsAttribut(urAkt.beschreibung, urAkt.name, m.attribute);
    if (urAt && urAt !== 'STR' && urAt !== 'DEX') a = urAt;
    var text = waffeText(w, mod(m.attribute[a]), prof);
    var akt = m.aktionen || (m.aktionen = []);
    var istAngriff = function (x) { return /Waffenangriff/.test(x.beschreibung) && x.name !== 'Mehrfachangriff'; };
    var passt = function (x) {
      if (!istAngriff(x)) return false;
      return w.typ === 'fern' ? /Fernkampf-Waffenangriff/.test(x.beschreibung) && !/Nahkampf/.test(x.beschreibung) : /Nahkampf/.test(x.beschreibung);
    };
    var idx = -1;
    akt.forEach(function (x, i) { if (idx < 0 && passt(x)) idx = i; });
    if (idx >= 0) {
      var alt = akt[idx].name;
      akt[idx] = { name: w.name, beschreibung: text };
      akt.forEach(function (x) { if (x.name === 'Mehrfachangriff') x.beschreibung = x.beschreibung.split(alt).join(w.name); });
    } else {
      var pos = akt.length && akt[0].name === 'Mehrfachangriff' ? 1 : 0;
      akt.splice(pos, 0, { name: w.name, beschreibung: text });
    }
  }

  // ── Herausforderungsgrad (HG) und XP an die Änderungen anpassen ─────
  // Schätzt HG nach der DMG-Tabelle (TP/RK gegen Schaden/Trefferbonus) für Vorlage und Ergebnis und
  // verschiebt den offiziellen HG der Vorlage um die Differenz. Ein stärkerer NSC zählt so mehr.
  var CR_LADDER = [0, 0.125, 0.25, 0.5];
  for (var cl = 1; cl <= 30; cl++) CR_LADDER.push(cl);
  var CR_XP = [10, 25, 50, 100, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000, 20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000];
  var CR_HP = [6, 35, 49, 70, 85, 100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 280, 295, 310, 325, 340, 355, 400, 445, 490, 535, 580, 625, 670, 715, 760, 805, 850];
  var CR_DMG = [1, 3, 5, 8, 14, 20, 26, 32, 38, 44, 50, 56, 62, 68, 74, 80, 86, 92, 98, 104, 110, 116, 122, 140, 158, 176, 194, 212, 230, 248, 266, 284, 302, 320];
  function crAc(i) { var c = CR_LADDER[i]; return c <= 3 ? 13 : c <= 4 ? 14 : c <= 7 ? 15 : c <= 9 ? 16 : c <= 12 ? 17 : c <= 16 ? 18 : 19; }
  function crAtk(i) { var c = CR_LADDER[i]; return c <= 2 ? 3 : c <= 3 ? 4 : c <= 4 ? 5 : c <= 7 ? 6 : c <= 10 ? 7 : c <= 15 ? 8 : c <= 16 ? 9 : c <= 20 ? 10 : 11; }
  // stetiger Index in der Tabelle (zwischen den Stufen interpoliert)
  function idxStetig(v, table) {
    if (v <= table[0]) return 0;
    for (var i = 1; i < table.length; i++) {
      if (v <= table[i]) return i - 1 + (v - table[i - 1]) / (table[i] - table[i - 1]);
    }
    return table.length - 1;
  }
  function hgIndex(m) {
    var best = null, n = 1;
    (m.aktionen || []).forEach(function (a) {
      var h = /\+(-?\d+) zum Treffen/.exec(a.beschreibung), d = /Treffer: (\d+) \(/.exec(a.beschreibung);
      if (h && d && (!best || +d[1] > best.dmg)) best = { hit: +h[1], dmg: +d[1] };
    });
    var mf = (m.aktionen || []).filter(function (a) { return a.name === 'Mehrfachangriff'; })[0];
    if (mf) {
      [['zwei', 2], ['drei', 3], ['vier', 4], ['fünf', 5]].forEach(function (p) { if (new RegExp(p[0], 'i').test(mf.beschreibung)) n = Math.max(n, p[1]); });
    }
    var di = idxStetig(m.tp || 0, CR_HP);
    di += ((m.rk || 10) - crAc(Math.round(di))) / 2;
    var oi = idxStetig((best ? best.dmg : 0) * n, CR_DMG);
    if (best) oi += (best.hit - crAtk(Math.round(oi))) / 2;
    return (di + oi) / 2;
  }
  function hgAnpassen(vorlage, m) {
    var i0 = CR_LADDER.indexOf(vorlage.cr);
    if (i0 < 0) return;
    var i1 = Math.max(0, Math.min(CR_LADDER.length - 1, Math.round(i0 + hgIndex(m) - hgIndex(vorlage))));
    if (i1 !== i0) { m.cr = CR_LADDER[i1]; m.xp = CR_XP[i1]; m.hgVorlage = vorlage.cr; }
  }

  // ── Hauptfunktion ───────────────────────────────────────────
  function anwenden(vorlage, opt) {
    var m = clone(vorlage);
    var r = struktur()[opt.rasse];
    if (!r) { // nur Waffe (oder keine Auswahl)
      if (opt.waffe) { waffeEinsetzen(m, opt.waffe); hgAnpassen(vorlage, m); }
      m.rasseInfo = { rasse: null, linie: null, talent: null, waffe: opt.waffe || null, vorlage: vorlage.name };
      return m;
    }
    var lin = opt.linie && r.varianten ? r.varianten[opt.linie] : null;

    // Attribute
    var bonus = {};
    addBonus(bonus, r.attribute); if (lin) addBonus(bonus, lin.attribute);
    var alt = clone(m.attribute), neu = clone(m.attribute), delta = {};
    ATTRS.forEach(function (a) { neu[a] = Math.min(30, (alt[a] || 10) + (bonus[a] || 0)); delta[a] = mod(neu[a]) - mod(alt[a] || 10); });
    m.attribute = neu;

    // Angriffe (vor Waffenwechsel, damit die Vorlagenwerte stimmen)
    (m.aktionen || []).forEach(function (a) {
      if (!/zum Treffen/.test(a.beschreibung)) return;
      var at = angriffsAttribut(a.beschreibung, a.name, alt);
      if (at && delta[at]) a.beschreibung = angriffAnpassen(a.beschreibung, delta[at]);
    });

    // TP
    if (delta.CON && m.tp_wuerfel) {
      var x = parseDice(m.tp_wuerfel);
      if (x) { x.k += x.n * delta.CON; m.tp = Math.max(1, m.tp + x.n * delta.CON); m.tp_wuerfel = diceStr(x); }
    }
    // Rettungswürfe, Fertigkeiten, passive Wahrnehmung
    Object.keys(m.rettungswuerfe || {}).forEach(function (k) { var a = SAVE[k]; if (a) m.rettungswuerfe[k] += delta[a]; });
    Object.keys(m.fertigkeiten || {}).forEach(function (k) { var a = SKILL[k]; if (a) m.fertigkeiten[k] += delta[a]; });
    if (typeof m.passiveWahrnehmung === 'number') m.passiveWahrnehmung += delta.WIS;

    // Wirkung des angeborenen Talents (nur eindeutige, unbedingte Effekte sind strukturiert hinterlegt)
    var tt = opt.talent && r.talentTexte && r.talentTexte[opt.talent];
    var tw = (tt && tt.wirkung) || {};
    var prof = uebungsbonus(m);

    // TP-Maximum-Talente: +1 je Trefferwürfel
    if (tw.tpProTW && m.tp_wuerfel) {
      var xt = parseDice(m.tp_wuerfel);
      if (xt) { xt.k += xt.n * tw.tpProTW; m.tp += xt.n * tw.tpProTW; m.tp_wuerfel = diceStr(xt); }
    }

    // Rüstungsklasse
    var art = ruestungsArt(m.ruestungstyp);
    if (art === 'leicht') m.rk += delta.DEX;
    else if (art === 'mittel') m.rk += Math.min(2, mod(neu.DEX)) - Math.min(2, mod(alt.DEX));
    // Rüstungsbasis ohne getragene Rüstung (Natürliche Rüstung, Drachenhaut …): 13 + GES
    var basen = [];
    var natuerlich = (r.merkmale || []).filter(function (f) { return f.name === 'Natürliche Rüstung'; })[0];
    var nb = natuerlich && /Basis-RK (\d+)/.exec(natuerlich.text);
    if (nb) basen.push(+nb[1]);
    if (tw.rkBasis) basen.push(tw.rkBasis);
    if (basen.length && (!m.ruestungstyp || /keine/i.test(m.ruestungstyp))) {
      var best = Math.max.apply(null, basen) + mod(neu.DEX);
      if (best > m.rk) { m.rk = best; m.ruestungstyp = 'natürliche Rüstung'; }
    }

    // Größe, Bewegung (Linien können Größe und Tempo überschreiben)
    var gl = (lin && lin.groesse) || r.groesse;
    m.groesse = (opt.groesse && gl.indexOf(opt.groesse) >= 0) ? opt.groesse : gl[0];
    m.bewegung = m.bewegung || {};
    var bw = Object.assign({}, r.bewegung, lin && lin.bewegung, tw.bewegung);
    Object.keys(bw).forEach(function (k) { m.bewegung[k] = bw[k]; });
    if (tw.bewegungPlus && m.bewegung.Gehen) {
      m.bewegung.Gehen = fmt(parseFloat(m.bewegung.Gehen.replace(',', '.')) + tw.bewegungPlus) + ' m';
    }

    // Sinne
    var sn = sinneParsen(m.sinne);
    [].concat(r.sinne || [], tw.sinne || []).forEach(function (s) {
      var p = /^(.*?)\s+(\d+(?:,\d+)?)\s*m$/.exec(s);
      if (p) sn[p[1]] = Math.max(sn[p[1]] || 0, parseFloat(p[2].replace(',', '.')));
    });
    m.sinne = Object.keys(sn).map(function (k) { return sn[k] ? k + ' ' + fmt(sn[k]) + ' m' : k; });

    // Resistenzen / Immunitäten
    var res = (m.schadensresistenzen || []).slice();
    var imm = (m.schadensimmunitaeten || []).slice();
    [].concat(imm, tw.immunitaeten || [], r.immunitaeten || []).forEach(function (x) { if (imm.indexOf(x) < 0) imm.push(x); });
    [].concat(r.resistenzen || [], lin && lin.resistenzen || [], tw.resistenzen || []).forEach(function (x) {
      if (res.indexOf(x) < 0 && imm.indexOf(x) < 0) res.push(x);
    });
    m.schadensresistenzen = res;
    m.schadensimmunitaeten = imm;
    var zus = (m.zustandsimmunitaeten || []).slice();
    (tw.zustandsimmunitaeten || []).forEach(function (x) { if (zus.indexOf(x) < 0) zus.push(x); });
    m.zustandsimmunitaeten = zus;

    // Fertigkeiten aus dem Talent (feste Übung): Attributsmodifikator + Übungsbonus
    (tw.fertigkeiten || []).forEach(function (sk) {
      var a = SKILL[sk];
      if (!a || (m.fertigkeiten || {})[sk] !== undefined) return;
      m.fertigkeiten = m.fertigkeiten || {};
      m.fertigkeiten[sk] = mod(neu[a]) + prof;
      if (sk === 'Wahrnehmung' && typeof m.passiveWahrnehmung === 'number') m.passiveWahrnehmung += prof;
    });

    // Merkmale (Rasse, Linie) + Talent
    var bes = (m.besonderheiten || []).slice();
    (r.merkmale || []).forEach(function (f) {
      if (f.stufe && (m.cr || 0) < f.stufe / 2) return;
      bes.push({ name: f.name, beschreibung: f.text });
    });
    ((lin && lin.merkmale) || []).forEach(function (f) { bes.push({ name: f.name, beschreibung: f.text }); });
    if (tt) bes.push({ name: 'Angeborenes Talent: ' + opt.talent, beschreibung: tt.text });
    m.besonderheiten = bes;

    // Waffe
    if (opt.waffe) waffeEinsetzen(m, opt.waffe);

    // HG/XP an die geänderten Werte anpassen (stärkere NSCs zählen mehr)
    hgAnpassen(vorlage, m);

    // Name und Kennzeichnung
    var label = opt.linie ? opt.rasse + ' – ' + opt.linie : opt.rasse;
    m.name = vorlage.name + ' (' + label + ')';
    m.rasseInfo = { rasse: opt.rasse, linie: opt.linie || null, talent: opt.talent || null, waffe: opt.waffe || null, vorlage: vorlage.name };
    return m;
  }

  // Zufällige Waffe, die den NSC nicht schwächer macht: gleiche Art (Nah-/Fernkampf), Schadenswürfel
  // mindestens so stark wie der beste Waffenangriff der Vorlage (sonst die stärkste ihrer Art)
  function schnittWuerfel(w) {
    var x = w.wuerfel.indexOf('W') > 0 ? parseDice(w.wuerfel) : null;
    return x ? x.n * (x.d / 2 + 0.5) : +w.wuerfel;
  }
  function zufallsWaffe(m) {
    var ws = waffen();
    var hatNah = (m.aktionen || []).some(function (a) { return /Nahkampf/.test(a.beschreibung); });
    var basis = 0;
    (m.aktionen || []).forEach(function (a) {
      var d = /Treffer: \d+ \((\d+W\d+)/.exec(a.beschreibung), x = d && /Waffenangriff/.test(a.beschreibung) ? parseDice(d[1]) : null;
      if (x) basis = Math.max(basis, x.n * (x.d / 2 + 0.5));
    });
    var pool = ws.filter(function (w) { return hatNah ? w.typ === 'nah' : w.typ === 'fern'; });
    if (!pool.length) pool = ws;
    var stark = pool.filter(function (w) { return schnittWuerfel(w) >= basis - 0.01; });
    if (!stark.length) stark = [pool.slice().sort(function (a, b) { return schnittWuerfel(b) - schnittWuerfel(a); })[0]];
    return stark[Math.floor(Math.random() * stark.length)].name;
  }

  function zufall(m, teil) {
    teil = teil || { rasse: true, talent: true, waffe: true };
    var pick = function (a) { return a[Math.floor(Math.random() * a.length)]; };
    var o = pick(optionen());
    var opt = { rasse: o.rasse, linie: o.linie };
    var gs = groessen(opt); if (gs.length > 1) opt.groesse = pick(gs);
    if (teil.talent) { var t = talente(opt); if (t.length) opt.talent = pick(t); }
    if (teil.waffe) opt.waffe = zufallsWaffe(m);
    return opt;
  }

  window.RasseAnwenden = { istRassenfaehig: istRassenfaehig, optionen: optionen, talente: talente, linienTalent: linienTalent, groessen: groessen, waffen: waffen, zufallsWaffe: zufallsWaffe, anwenden: anwenden, zufall: zufall };
})();
