(function () {
  var h = React.createElement;
  var useState = React.useState;

  // ── Stat computation ─────────────────────────────────────────
  function computeNscStats(division, rang) {
    var tier = 10 - rang; // tier 0 (rang 10, schwach) bis tier 9 (rang 1, stark)
    var cfg  = division.nscConfig;
    var prof = 2 + Math.floor(tier / 3); // +2 bis +5

    var STATS = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
    function attrScore(stat) {
      if (cfg.primaryStats.includes(stat))   return 14 + Math.floor(tier * 0.8);
      if (cfg.secondaryStats.includes(stat)) return 12 + Math.floor(tier * 0.5);
      return 10 + Math.floor(tier * 0.3);
    }
    function mod(score) { return Math.floor((score - 10) / 2); }
    function fmtMod(m) { return (m >= 0 ? '+' : '') + m; }

    var attr = {};
    STATS.forEach(function(s) { attr[s] = attrScore(s); });

    // TP
    var diceCount = 2 + Math.floor(tier * 1.2);
    var cappedDie = Math.min(6 + tier * 2, 12);
    var conMod    = mod(attr.CON);
    var tp        = Math.floor(diceCount * (cappedDie / 2 + 0.5)) + diceCount * conMod;
    var tpBonus   = diceCount * conMod;
    var tp_wuerfel = diceCount + 'W' + cappedDie + (tpBonus !== 0 ? (tpBonus > 0 ? '+' : '') + tpBonus : '');

    // RK
    var rk = cfg.baseAC + Math.floor(tier / 2);
    var ruestungstyp = tier >= 6 ? cfg.armorTypeHigh : cfg.armorType;

    // Rettungswürfe (ab tier >= 3 = rang 1-7)
    var saves = {};
    if (tier >= 3) {
      cfg.savingThrows.forEach(function(s) { saves[s] = mod(attr[s]) + prof; });
    }

    // Fertigkeiten
    var skills = {};
    cfg.skills.forEach(function(sk) { skills[sk.name] = mod(attr[sk.stat]) + prof; });

    // Attackwerte
    var primaryStat  = attr[cfg.primaryStats[0]];
    var attackBonus  = mod(primaryStat) + prof;
    var dmgDie       = 4 + Math.floor(tier / 2) * 2;
    var dmgMod       = mod(primaryStat);
    var damageDice   = '1W' + dmgDie + (dmgMod !== 0 ? (dmgMod > 0 ? '+' : '') + dmgMod : '');
    var dcSG         = 8 + prof + mod(attr[cfg.primaryStats[1]]);

    var titelObj = division.raenge.find(function(r) { return r.rang === rang; });
    var titel    = titelObj ? titelObj.titel : 'Rang ' + rang;

    function fill(s) {
      return s
        .replace(/\{titel\}/g, titel)
        .replace(/\+?\{attackBonus\}/g, fmtMod(attackBonus))
        .replace(/\{damageDice\}/g, damageDice)
        .replace(/\{DC\}/g, dcSG)
        .replace(/\{prof\}/g, prof);
    }

    // Fähigkeiten nach Art sortiert; Fähigkeiten mit minTier kommen erst ab dieser Stufe dazu
    var KEY = { besonderheit: 'besonderheiten', aktion: 'aktionen', bonusaktion: 'bonusaktionen', reaktion: 'reaktionen' };
    var fae = { besonderheiten: [], aktionen: [], bonusaktionen: [], reaktionen: [] };
    var basis = fill(cfg.besonderheit), schnitt = basis.indexOf('. ');
    fae[KEY[cfg.besonderheitTyp || 'besonderheit']].push({ name: basis.slice(0, schnitt), beschreibung: basis.slice(schnitt + 2) });
    cfg.aktionen.forEach(function(a) {
      if (!a.minTier || tier >= a.minTier) fae.aktionen.push({ name: a.name, beschreibung: fill(a.beschreibung) });
    });
    // hgMod: Wirkung der Fähigkeiten auf die HG-Schätzung (effektive TP, RK, Schaden pro Runde)
    var hgMod = { tp: 0, rk: 0, dmg: 0 };
    (cfg.faehigkeiten || []).forEach(function(f) {
      if (f.minTier && tier < f.minTier) return;
      fae[KEY[f.typ]].push({ name: f.name, beschreibung: fill(f.beschreibung) });
      if (f.hg) { hgMod.tp += f.hg.tp || 0; hgMod.rk += f.hg.rk || 0; hgMod.dmg += f.hg.dmg || 0; }
    });

    var passiveWahrnehm = 10 + mod(attr.WIS) + (skills['Wahrnehmung'] !== undefined ? prof : 0);

    return {
      rang: rang, titel: titel,
      tp: tp, tp_wuerfel: tp_wuerfel,
      rk: rk, ruestungstyp: ruestungstyp,
      bewegung: '9 m',
      attribute: attr, prof: prof, mod: mod, fmtMod: fmtMod,
      rettungswuerfe: saves,
      fertigkeiten: skills,
      passiveWahrnehmung: passiveWahrnehm,
      besonderheit: { name: 'Besonderheit', beschreibung: fill(cfg.besonderheit) },
      besonderheiten: fae.besonderheiten,
      aktionen: fae.aktionen,
      bonusaktionen: fae.bonusaktionen,
      reaktionen: fae.reaktionen,
      hgMod: hgMod,
    };
  }

  window.computeNscStats = computeNscStats;

  // ── Umrechnung ins Monster-Format (Monsterliste, Rasse anwenden) ──
  // Herausforderungsgrad als Näherung nach der DMG-Tabelle (TP/RK gegen Schaden/Trefferbonus)
  var LADDER = [0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var XP = { 0: 10, 0.125: 25, 0.25: 50, 0.5: 100, 1: 200, 2: 450, 3: 700, 4: 1100, 5: 1800, 6: 2300, 7: 2900, 8: 3900, 9: 5000, 10: 5900 };
  var HP_MAX = [6, 35, 49, 70, 85, 100, 115, 130, 145, 160, 175, 190, 205, 220];
  var DMG_MAX = [1, 3, 5, 8, 14, 20, 26, 32, 38, 44, 50, 56, 62, 68];
  function idxFor(v, table) { for (var i = 0; i < table.length; i++) if (v <= table[i]) return i; return table.length - 1; }
  function expAC(c) { return c <= 3 ? 13 : c <= 4 ? 14 : c <= 7 ? 15 : 16; }
  function expAtk(c) { return c <= 2 ? 3 : c <= 4 ? 4 : c <= 7 ? 6 : 7; }
  function diceAvg(spec) {
    var m = /^(\d+)W(\d+)(?:([+-])(\d+))?$/.exec(spec);
    if (!m) return 0;
    return +m[1] * (+m[2] / 2 + 0.5) + (m[3] ? (m[3] === '-' ? -1 : 1) * +m[4] : 0);
  }
  function crFor(s) {
    var mod = s.hgMod || { tp: 0, rk: 0, dmg: 0 };
    var di = idxFor(s.tp + mod.tp, HP_MAX);
    di += Math.trunc((s.rk + mod.rk - expAC(LADDER[di])) / 2);
    var atk = s.aktionen.filter(function (a) { return /Trefferwurf/.test(a.beschreibung); })[0];
    var hit = atk ? +/\+(\d+) auf den Trefferwurf/.exec(atk.beschreibung)[1] : 0;
    var dmg = atk ? diceAvg(/Treffer: (\S+)/.exec(atk.beschreibung)[1]) : 0;
    var attacks = s.aktionen.some(function (a) { return /greift zweimal an/.test(a.beschreibung); }) ? 2 : 1;
    var oi = idxFor(dmg * attacks + mod.dmg, DMG_MAX);
    oi += Math.trunc((hit - expAtk(LADDER[oi])) / 2);
    var i = Math.max(0, Math.min(LADDER.length - 1, Math.round((di + oi) / 2)));
    return LADDER[i];
  }
  // Angriffstext im Format der Bücher: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W6+2) Hiebschaden."
  function buchFormat(a) {
    var m = /^(Nah|Fern)kampfwaffenangriff: \+(\d+) auf den Trefferwurf, Reichweite ([^.]+)\. Treffer: (\S+) (\S+schaden)\.$/.exec(a.beschreibung);
    if (!m) return a;
    return { name: a.name, beschreibung: m[1] + 'kampf-Waffenangriff: +' + m[2] + ' zum Treffen, Reichweite ' + m[3] + ', ein Ziel. Treffer: ' + Math.floor(diceAvg(m[4])) + ' (' + m[4] + ') ' + m[5] + '.' };
  }
  var SAVE_KEY = { DEX: 'GES', CON: 'KON', WIS: 'WEI' };
  function nscToMonster(division, rang) {
    var s = computeNscStats(division, rang);
    var cr = crFor(s);
    var saves = {};
    Object.keys(s.rettungswuerfe).forEach(function (k) { saves[SAVE_KEY[k] || k] = s.rettungswuerfe[k]; });
    return {
      titel: s.titel, prof: s.prof,
      art: 'Humanoid', unterart: 'NPC', groesse: 'Mittelgroß', gesinnung: 'Jede Gesinnung',
      cr: cr, xp: XP[cr],
      rk: s.rk, ruestungstyp: s.ruestungstyp, tp: s.tp, tp_wuerfel: s.tp_wuerfel,
      bewegung: { Gehen: s.bewegung },
      attribute: s.attribute, rettungswuerfe: saves, fertigkeiten: s.fertigkeiten,
      schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
      sinne: [], passiveWahrnehmung: s.passiveWahrnehmung, sprachen: ['Gemein'], umgebung: [],
      besonderheiten: s.besonderheiten,
      aktionen: s.aktionen.map(buchFormat),
      bonusaktionen: s.bonusaktionen, reaktionen: s.reaktionen, legendaere_aktionen: null,
    };
  }
  window.nscToMonster = nscToMonster;

  // ── Sub-components ───────────────────────────────────────────
  function Divider(accent) {
    return h('div', { style: {
      height: 1, background: 'linear-gradient(to right, ' + accent + '60, transparent)',
      margin: '8px 0',
    }});
  }

  function SBLabel(text, accent) {
    return h('div', { style: {
      fontFamily: 'var(--font-mono)', fontSize: 8.5, letterSpacing: '0.22em',
      textTransform: 'uppercase', color: accent, marginBottom: 4, marginTop: 10,
    }}, text);
  }

  // ── NscStatblock component ────────────────────────────────────
  window.NscStatblock = function NscStatblock(props) {
    var division     = props.division;
    var selectedRang = props.selectedRang;
    var onRangChange = props.onRangChange;
    var accent       = division.accent;
    var cA           = function(a) {
      // accent with alpha — derive from hex
      var r = parseInt(accent.slice(1,3), 16);
      var g = parseInt(accent.slice(3,5), 16);
      var b = parseInt(accent.slice(5,7), 16);
      return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    };

    var stats = computeNscStats(division, selectedRang);
    // Rasse anwenden: aus Rang-Statblock + Auswahl wird der angezeigte Statblock berechnet
    var R = window.RasseAnwenden, opt = props.rasse || null;
    var mon = nscToMonster(division, selectedRang);
    var shown = (opt && R) ? R.anwenden(mon, opt) : mon;
    var ADJ = { 'Winzig': 'Winziger', 'Klein': 'Kleiner', 'Mittelgroß': 'Mittelgroßer', 'Groß': 'Großer', 'Riesig': 'Riesiger' };
    var rasseLabel = opt && opt.rasse ? (opt.linie ? opt.rasse + ' – ' + opt.linie : opt.rasse) : null;
    var bewegungText = Object.keys(shown.bewegung).map(function(k) { return k === 'Gehen' ? shown.bewegung[k] : k + ' ' + shown.bewegung[k]; }).join(', ');
    function Row(label, text) {
      return h('div', { key: label, style: {
        fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(var(--text-rgb),calc(0.75*var(--kt) + var(--tb)))',
        letterSpacing: '0.06em', marginBottom: 4,
      }},
        h('span', { style: { color: cA(0.7), marginRight: 6 }}, label),
        text
      );
    }
    var ATTRS = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
    var ATTR_DE = { STR: 'STÄ', DEX: 'GES', CON: 'KON', INT: 'INT', WIS: 'WEI', CHA: 'CHA' };

    // Rang picker
    var picker = h('div', { style: { display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 16 } },
      division.raenge.map(function(r) {
        var active = r.rang === selectedRang;
        return h('button', {
          key: r.rang,
          onClick: function() { onRangChange(r.rang); },
          title: r.titel,
          style: {
            width: 32, height: 32, flexShrink: 0,
            border: '1px solid ' + (active ? accent : cA(0.25)),
            background: active ? cA(0.22) : 'rgba(var(--panel-rgb),0.6)',
            color: active ? accent : 'color-mix(in srgb, rgba(180,170,220,0.55), rgb(var(--ink-rgb)) var(--cm))',
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: active ? 600 : 400,
            borderRadius: 3, cursor: 'pointer',
            boxShadow: active ? '0 0 10px ' + cA(0.35) : 'none',
            transition: 'all 0.15s',
          },
        }, r.rang);
      })
    );

    // Selected rank label
    var rankLabel = h('div', { style: {
      fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em',
      color: cA(0.7), textTransform: 'uppercase', marginBottom: 14,
    }}, 'Rang ' + selectedRang + ' · ' + stats.titel);

    // Statblock panel
    var panel = h('div', { style: {
      background: 'rgba(var(--panel-rgb),0.85)',
      border: '1px solid ' + cA(0.28),
      borderRadius: 4,
      padding: '18px 20px',
      boxShadow: '0 4px 24px rgba(var(--shadow-rgb),calc(0.55 * var(--shadow-k)))',
    }},
      // Header
      h('div', { style: { marginBottom: 12 } },
        h('div', { style: {
          fontFamily: 'var(--font-display)', fontSize: 16, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--white)', fontWeight: 400,
        }}, stats.titel),
        h('div', { style: {
          fontFamily: 'var(--font-mono)', fontSize: 9, color: 'color-mix(in srgb, rgba(180,170,220,0.55), rgb(var(--ink-rgb)) var(--cm))',
          letterSpacing: '0.12em', marginTop: 2,
        }}, (ADJ[shown.groesse] || shown.groesse) + ' Humanoid · ' + division.name.replace(/^Die\s+/, '') + (rasseLabel ? ' · ' + rasseLabel : ''))
      ),

      Divider(accent),

      // Meta grid: RK, TP, Bewegung, Übungsbonus
      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, margin: '10px 0' } },
        [
          { label: 'RK',         value: shown.rk + (shown.ruestungstyp ? ' (' + shown.ruestungstyp + ')' : '') },
          { label: 'TP',         value: shown.tp + ' (' + shown.tp_wuerfel + ')' },
          { label: 'Bewegung',   value: bewegungText },
          { label: 'Übungsbonus',value: stats.fmtMod(stats.prof) },
        ].map(function(item) {
          return h('div', { key: item.label, style: {
            background: 'rgba(var(--purple-rgb),calc(0.06*var(--kp)))', border: '1px solid ' + cA(0.15),
            borderRadius: 3, padding: '6px 8px',
          }},
            h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 7.5, letterSpacing: '0.18em', color: cA(0.65), textTransform: 'uppercase', marginBottom: 2 }}, item.label),
            h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--white)', fontWeight: 500 }}, item.value)
          );
        })
      ),

      Divider(accent),

      // Ability scores
      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 4, margin: '10px 0' } },
        ATTRS.map(function(s) {
          var score = shown.attribute[s];
          var m     = stats.mod(score);
          return h('div', { key: s, style: {
            textAlign: 'center', padding: '6px 4px',
            background: 'rgba(var(--purple-rgb),calc(0.05*var(--kp)))', borderRadius: 3,
            border: '1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))',
          }},
            h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 7, letterSpacing: '0.14em', color: cA(0.55), textTransform: 'uppercase', marginBottom: 2 }}, ATTR_DE[s]),
            h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--white)', fontWeight: 600, lineHeight: 1.1 }}, score),
            h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: cA(0.8) }}, stats.fmtMod(m))
          );
        })
      ),

      Divider(accent),

      // Saves, Skills, Passive
      (Object.keys(shown.rettungswuerfe).length > 0) && h('div', { style: {
        fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(var(--text-rgb),calc(0.75*var(--kt) + var(--tb)))',
        letterSpacing: '0.06em', marginBottom: 4,
      }},
        h('span', { style: { color: cA(0.7), marginRight: 6 }}, 'Rettungswürfe'),
        Object.entries(shown.rettungswuerfe).map(function(kv) { return kv[0] + ' ' + stats.fmtMod(kv[1]); }).join(', ')
      ),

      (Object.keys(shown.fertigkeiten).length > 0) && h('div', { style: {
        fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(var(--text-rgb),calc(0.75*var(--kt) + var(--tb)))',
        letterSpacing: '0.06em', marginBottom: 4,
      }},
        h('span', { style: { color: cA(0.7), marginRight: 6 }}, 'Fertigkeiten'),
        Object.entries(shown.fertigkeiten).map(function(kv) { return kv[0] + ' ' + stats.fmtMod(kv[1]); }).join(', ')
      ),

      h('div', { style: {
        fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(var(--text-rgb),calc(0.75*var(--kt) + var(--tb)))',
        letterSpacing: '0.06em', marginBottom: 4,
      }},
        h('span', { style: { color: cA(0.7), marginRight: 6 }}, 'Passive Wahrnehmung'),
        shown.passiveWahrnehmung
      ),

      (shown.sinne && shown.sinne.length > 0) && Row('Sinne', shown.sinne.join(', ')),
      (shown.schadensresistenzen && shown.schadensresistenzen.length > 0) && Row('Schadensresistenzen', shown.schadensresistenzen.join(', ')),

      h('div', { style: {
        fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(var(--text-rgb),calc(0.75*var(--kt) + var(--tb)))',
        letterSpacing: '0.06em', marginBottom: 4,
      }},
        h('span', { style: { color: cA(0.7), marginRight: 6 }}, 'Sprachen'),
        'Gemein'
      ),

      Divider(accent),

      // Besonderheiten, Aktionen, Bonusaktionen, Reaktionen
      [['Besonderheit', 'Besonderheiten', shown.besonderheiten], ['Aktion', 'Aktionen', shown.aktionen],
       ['Bonusaktion', 'Bonusaktionen', shown.bonusaktionen], ['Reaktion', 'Reaktionen', shown.reaktionen]].map(function(g) {
        var list = g[2] || [];
        if (!list.length) return null;
        return h('div', { key: g[1] },
          SBLabel(list.length > 1 ? g[1] : g[0], cA(0.65)),
          list.map(function(b, i) {
            return h('div', { key: i, style: { marginBottom: 8 } },
              h('span', { style: {
                fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
                color: 'var(--white)', marginRight: 4,
              }}, b.name + '.'),
              h('span', { style: {
                fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 300,
                color: 'color-mix(in srgb, rgba(210,200,240,0.8), rgb(var(--ink-rgb)) var(--cm))', lineHeight: 1.55,
              }}, b.beschreibung)
            );
          })
        );
      })
    );

    var rasseLeiste = (props.onRasseChange && window.RassePicker)
      ? h(window.RassePicker, { monster: mon, value: opt, onChange: props.onRasseChange, compact: true })
      : null;
    return h('div', null, picker, rankLabel, rasseLeiste && h('div', { style: { marginBottom: 14, border: '1px solid ' + cA(0.2), borderRadius: 3 } }, rasseLeiste), panel);
  };
})();
