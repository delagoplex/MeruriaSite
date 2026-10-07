(function () {
  var h        = React.createElement;
  var useState = React.useState;
  var useEffect = React.useEffect;

  // Rang-Titel → Rang-Nummer (1-10) über DIVISIONS_DATA
  function rankTitleToNumber(titleString) {
    if (!titleString || titleString === 'Neuankömmling' || titleString === '—') return null;
    var data = window.DIVISIONS_DATA || [];
    for (var i = 0; i < data.length; i++) {
      var found = data[i].raenge.find(function(r) { return r.titel === titleString; });
      if (found) return found.rang;
    }
    return null;
  }

  // Nur zwei Einstellungen: Basispreis (Rang 10) und Faktor pro Rang. Rang 1 ist der höchste Rang:
  // preis(rang) = Basispreis × Faktor^(10 − rang). Gespeichert: Zeile rang 10 = Basispreis,
  // Zeile rang 0 = Faktor in Hundertsteln (150 = ×1,5).
  var DEFAULT_BASIS = 50;
  var DEFAULT_FAKTOR = 1.5;

  var DAUER_PRESETS = [
    { tage: 1, label: '1 Tag' },
    { tage: 3, label: '3 Tage' },
    { tage: 7, label: '1 Woche' },
    { tage: 14, label: '2 Wochen' },
    { tage: 30, label: '1 Monat' },
  ];

  function fmtDauer(tage) { return tage === 1 ? '1 Tag' : tage + ' Tage'; }

  // Die Preise gelten für alle Divisionen gleich; gespeichert sind sie unter der Division 'kuratoren'.
  // allPreise = { divisionId: { rang: preis } }
  var PREIS_DIVISION = 'kuratoren';
  function getRangPreis(allPreise, divisionId, rang) {
    var dp = allPreise && allPreise[PREIS_DIVISION];
    var basis = dp && dp[10] !== undefined ? dp[10] : DEFAULT_BASIS;
    var faktor = dp && dp[0] !== undefined ? dp[0] / 100 : DEFAULT_FAKTOR;
    return Math.round(basis * Math.pow(faktor, 10 - rang));
  }

  function charName(c) { return c.char_data && c.char_data.name ? c.char_data.name : c.name; }
  function charDiv(c) { return c.char_data && c.char_data.division ? c.char_data.division : c.division || null; }

  function divIdByName(name) {
    var d = (window.DIVISIONS_DATA || []).find(function(x) { return x.name === name; });
    return d ? d.id : null;
  }

  // Bewertet einen Spielercharakter gegen einen NSC (Division + Rang) für eine Dauer in Tagen.
  // fee = Spieler zahlt an NSC, mentorFee = NSC zahlt an Spieler (Honorar)
  function evaluate(c, division, nscRang, allPreise, tage) {
    var playerDiv = charDiv(c);
    var rangNr = rankTitleToNumber(c.char_data && c.char_data.rank ? c.char_data.rank : null);
    var res = { playerDiv: playerDiv, rangNr: rangNr, scenario: null, fee: 0, mentorFee: 0, nscPreis: 0, playerPreis: 0 };
    if (rangNr === null) return res;
    var playerDivId = divIdByName(playerDiv) || division.id;
    res.nscPreis = getRangPreis(allPreise, division.id, nscRang);
    res.playerPreis = getRangPreis(allPreise, playerDivId, rangNr);
    if (nscRang < rangNr) {
      res.scenario = 'PAY';
      res.fee = (rangNr - nscRang) * res.nscPreis * tage;
    } else if (playerDiv !== division.name) {
      res.scenario = 'FREE';
    } else if (nscRang === rangNr) {
      res.scenario = 'SAME_FREE';
    } else {
      res.scenario = 'MENTOR';
      res.mentorFee = (nscRang - rangNr) * res.playerPreis * tage;
    }
    return res;
  }

  function fmtHade(n) { return n.toLocaleString('de-DE') + ' Hade'; }

  function Portrait(props) {
    var c = props.char, size = props.size || 48, accent = props.accent;
    var bild = c.char_data && c.char_data.bild;
    var initials = charName(c).split(/[\s']/).filter(Boolean).slice(0, 2).map(function(w) { return w[0]; }).join('').toUpperCase();
    return h('div', { style: {
      width: size, height: size, flexShrink: 0, borderRadius: 4, overflow: 'hidden',
      border: '1px solid ' + accent, background: 'rgba(var(--panel-rgb),0.9)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-display)', fontSize: size * 0.34, color: accent,
    }},
      bild
        ? h('img', { src: bild, alt: charName(c), style: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }})
        : initials
    );
  }

  window.Rekrutierungsrechner = function Rekrutierungsrechner(props) {
    var division = props.division;
    var nscRang  = props.nscRang;
    var accent   = division.accent;

    var r = parseInt(accent.slice(1,3), 16);
    var g = parseInt(accent.slice(3,5), 16);
    var b = parseInt(accent.slice(5,7), 16);
    function cA(a) { return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'; }

    var nscTitel = (division.raenge.find(function(x) { return x.rang === nscRang; }) || {}).titel || ('Rang ' + nscRang);
    var isDM = !!(window.SITE_USER && window.SITE_USER.role === 'dm');

    var _chars   = useState([]);              var chars = _chars[0]; var setChars = _chars[1];
    var _selId   = useState(null);            var selId = _selId[0]; var setSelId = _selId[1];
    var _loading = useState(true);            var loading = _loading[0]; var setLoading = _loading[1];
    var _preise  = useState(null);  var allPreise = _preise[0]; var setPreise = _preise[1];
    var _checks  = useState({ erfolg: false, beschuetzt: false, keinTrauma: false });
    var checks = _checks[0]; var setChecks = _checks[1];
    var _tage    = useState(1);   var tage = _tage[0]; var setTage = _tage[1];
    var _mode    = useState('player'); var mode = _mode[0]; var setMode = _mode[1];
    var _party   = useState({});  var party = _party[0]; var setParty = _party[1];
    var _suche   = useState('');  var suche = _suche[0]; var setSuche = _suche[1];
    var _anf     = useState([]);  var anfragen = _anf[0]; var setAnfragen = _anf[1];
    var _nachr   = useState('');  var nachricht = _nachr[0]; var setNachricht = _nachr[1];
    var _busy    = useState(false); var busy = _busy[0]; var setBusy = _busy[1];
    var _amsg    = useState(null);  var anfMsg = _amsg[0]; var setAnfMsg = _amsg[1];

    var dmMode = isDM && mode === 'nsc';

    useEffect(function() {
      var user = window.SITE_USER;
      if (!user || !window._sb) { setLoading(false); return; }
      var q = window._sb.from('characters').select('id, name, division, char_data')
        .eq('type', 'spieler').order('name');
      if (!isDM) q = q.eq('owner_id', user.id);
      Promise.all([
        q,
        window._sb.from('rekrutierung_preise').select('division_id, rang, preis'),
      ]).then(function(results) {
        var chars = results[0].data || [];
        setChars(chars);
        if (chars.length > 0) setSelId(chars[0].id);
        var rows = results[1].data || [];
        if (rows.length > 0) {
          var map = {};
          rows.forEach(function(r) {
            if (!map[r.division_id]) map[r.division_id] = {};
            map[r.division_id][r.rang] = r.preis;
          });
          setPreise(map);
        }
        setLoading(false);
      });
    }, []);

    function ladeAnfragen() {
      var user = window.SITE_USER;
      if (!user || !window._sb) return;
      window._sb.from('rekrutierung_anfragen').select('*').eq('requester_id', user.id)
        .order('created_at', { ascending: false }).limit(20)
        .then(function(res) { if (!res.error) setAnfragen(res.data || []); });
    }
    useEffect(ladeAnfragen, []);

    var selChar = chars.find(function(c) { return c.id === selId; }) || null;
    var ev = selChar ? evaluate(selChar, division, nscRang, allPreise, tage) : null;
    var scenario = ev ? ev.scenario : null;
    var playerRangNr = ev ? ev.rangNr : null;
    var playerRank = selChar && selChar.char_data ? selChar.char_data.rank : null;
    var playerDiv = ev ? ev.playerDiv : null;
    var fee = ev ? ev.fee : 0;
    var mentorFee = ev ? ev.mentorFee : 0;
    var allChecked = checks.erfolg && checks.beschuetzt && checks.keinTrauma;
    var dauerTxt = fmtDauer(tage);

    // ── Styles ──────────────────────────────────────────────────
    var boxStyle = function(color) { return {
      background: 'rgba(var(--panel-rgb),0.8)',
      border: '1px solid ' + (color || cA(0.25)),
      borderRadius: 6, padding: '20px 22px', marginTop: 16,
    }; };

    var labelStyle = {
      fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: cA(0.8), display: 'block', marginBottom: 8,
    };

    var bigNumStyle = function(color) { return {
      fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 400,
      letterSpacing: '0.06em', color: color || accent,
      display: 'block', lineHeight: 1.1, margin: '10px 0 6px',
    }; };

    var formulaStyle = {
      fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(var(--accent-rgb),calc(0.55*var(--ka) + var(--tb)))',
      letterSpacing: '0.06em', lineHeight: 1.6,
    };

    var infoStyle = {
      fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
      color: 'rgba(var(--text-rgb),calc(0.7*var(--kt) + var(--tb)))',
    };

    var noteStyle = {
      fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
      color: 'rgba(var(--text-rgb),calc(0.75*var(--kt) + var(--tb)))', marginTop: 12, lineHeight: 1.6,
    };

    function pillBtn(active, onClick, label, extra) {
      return h('button', { key: label, onClick: onClick, style: Object.assign({
        padding: '8px 14px', cursor: 'pointer', borderRadius: 4,
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em',
        background: active ? cA(0.18) : 'rgba(var(--panel-rgb),0.5)',
        border: '1px solid ' + (active ? accent : 'rgba(var(--purple-rgb),calc(0.15*var(--kp)))'),
        color: active ? accent : 'color-mix(in srgb, rgba(180,170,220,0.75), rgb(var(--ink-rgb)) var(--cm))',
      }, extra || {}) }, label);
    }

    // Abschnitt mit Trennlinie
    function sec(label, content, first) {
      return h('div', { style: { marginTop: first ? 0 : 20, paddingTop: first ? 0 : 18, borderTop: first ? 'none' : '1px solid ' + cA(0.15) } },
        label && h('label', { style: labelStyle }, label),
        content
      );
    }

    // ── Loading ──────────────────────────────────────────────────
    if (loading) {
      return h('div', { style: { padding: '20px 0', fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))', letterSpacing: '0.22em', textTransform: 'uppercase' }}, '◈ Lade…');
    }

    if (!window.SITE_USER) {
      return h('div', boxStyle(), h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', letterSpacing: '0.14em' }}, 'Bitte einloggen, um den Rechner zu nutzen.'));
    }

    if (chars.length === 0) {
      return h('div', boxStyle(), h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', letterSpacing: '0.14em' }}, 'Kein Spielercharakter gefunden.'));
    }

    // Suchfeld + aufgeklappte Charakterliste (Einzelwahl bzw. Mehrfachwahl), für beide Richtungen
    var q = suche.trim().toLowerCase();
    var shownChars = chars.filter(function(c) {
      if (!q) return true;
      var cd = c.char_data || {};
      return (charName(c) + ' ' + (cd.rank || '') + ' ' + (charDiv(c) || '')).toLowerCase().indexOf(q) !== -1;
    });
    var searchBox = h('input', {
      type: 'search', value: suche, placeholder: 'Charakter suchen …',
      onChange: function(e) { setSuche(e.target.value); },
      style: {
        width: '100%', boxSizing: 'border-box', marginBottom: 8, padding: '9px 12px',
        background: 'rgba(var(--panel-rgb),0.9)', border: '1px solid ' + cA(0.3), color: 'var(--white)',
        borderRadius: 4, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em',
      },
    });
    function charRow(c, on, multi, onPick) {
      var e = evaluate(c, division, nscRang, allPreise, tage);
      var res = e.scenario === 'PAY' ? { t: (multi ? '+ ' : '− ') + fmtHade(e.fee), col: multi ? '#80dfb0' : '#ff9980' }
              : e.scenario === 'MENTOR' ? { t: (multi ? '− ' : '+ ') + fmtHade(e.mentorFee), col: multi ? '#ff9980' : '#80dfb0' }
              : e.scenario ? { t: 'kostenlos', col: 'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))' }
              : { t: 'kein Rang', col: 'color-mix(in srgb, rgba(200,170,130,0.8), rgb(var(--ink-rgb)) var(--cm))' };
      return h('label', { key: c.id, style: {
        display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', padding: '8px 10px',
        borderRadius: 4, border: '1px solid ' + (on ? accent : 'rgba(var(--purple-rgb),calc(0.15*var(--kp)))'),
        background: on ? cA(0.1) : 'rgba(var(--panel-rgb),0.5)',
      }},
        h('input', { type: multi ? 'checkbox' : 'radio', name: 'rekr-char', checked: on, onChange: onPick,
          style: { accentColor: accent, width: 14, height: 14, flexShrink: 0 } }),
        h(Portrait, { char: c, size: 40, accent: cA(0.5) }),
        h('div', { style: { flex: 1, minWidth: 0 } },
          h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--white)', letterSpacing: '0.06em', marginBottom: 2 } }, charName(c)),
          h('div', { style: infoStyle },
            ((c.char_data && c.char_data.rank) || '—') + (e.rangNr ? ' (Rang ' + e.rangNr + ')' : '') + ' · ' + (e.playerDiv || '—').replace(/^Die\s+/, ''))
        ),
        h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, color: res.col, whiteSpace: 'nowrap' } }, res.t)
      );
    }
    function charList(multi) {
      return h('div', null,
        chars.length > 1 && searchBox,
        h('div', { style: { display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 300, overflowY: 'auto' } },
          shownChars.length === 0 && h('div', { style: infoStyle }, 'Kein Charakter gefunden.'),
          shownChars.map(function(c) {
            if (multi) {
              return charRow(c, !!party[c.id], true, function(ev2) {
                var next = Object.assign({}, party); next[c.id] = ev2.target.checked; setParty(next);
              });
            }
            return charRow(c, c.id === selId, false, function() { setSelId(c.id); });
          })
        )
      );
    }

    // Dauer-Auswahl (gilt für beide Richtungen)
    var dauerPicker = sec('Dauer der Rekrutierung',
      h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' } },
        DAUER_PRESETS.map(function(p) {
          return pillBtn(tage === p.tage, function() { setTage(p.tage); }, p.label);
        }),
        h('input', {
          type: 'number', min: 1, max: 365, value: tage,
          onChange: function(e) {
            var n = parseInt(e.target.value, 10);
            setTage(isNaN(n) ? 1 : Math.max(1, Math.min(365, n)));
          },
          style: {
            width: 72, padding: '8px 10px', background: 'rgba(var(--panel-rgb),0.9)',
            border: '1px solid ' + cA(0.3), color: 'var(--white)', borderRadius: 4,
            fontFamily: 'var(--font-mono)', fontSize: 12,
          },
        }),
        h('span', { style: infoStyle }, 'Tage')
      )
    );

    var segStyle = { flex: 1, padding: '10px 8px', textAlign: 'center', lineHeight: 1.35 };
    var modeToggle = isDM && h('div', { style: { display: 'flex', gap: 8, marginBottom: 18 } },
      pillBtn(mode === 'player', function() { setMode('player'); }, 'Spieler rekrutiert NSC', segStyle),
      pillBtn(mode === 'nsc', function() { setMode('nsc'); }, 'NSC rekrutiert Spielercharaktere', segStyle)
    );

    var nscInfo = h('div', { style: { marginBottom: 20, padding: '12px 16px', borderRadius: 6, borderLeft: '3px solid ' + accent, background: cA(0.08) } },
      h('span', { style: Object.assign({}, labelStyle, { marginBottom: 4 }) }, 'Ausgewählter NSC'),
      h('div', { style: { fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: '0.05em', color: accent, lineHeight: 1.2 } }, nscTitel),
      h('div', { style: Object.assign({ marginTop: 4 }, infoStyle) }, 'Rang ' + nscRang + ' · ' + division.name)
    );

    // ── DM-Richtung: NSC rekrutiert Spielercharaktere ────────────
    if (dmMode) {
      var picked = chars.filter(function(c) { return party[c.id]; });
      var totalReceive = 0, totalPay = 0;
      picked.forEach(function(c) {
        var e = evaluate(c, division, nscRang, allPreise, tage);
        totalReceive += e.fee;
        totalPay += e.mentorFee;
      });
      var missingRank = picked.some(function(c) {
        return evaluate(c, division, nscRang, allPreise, tage).scenario === null;
      });

      return h('div', null,
        modeToggle, nscInfo, dauerPicker,
        sec('Mitgenommene Spielercharaktere', charList(true)),

        picked.length > 0 && h('div', { style: boxStyle(cA(0.35)) },
          h('span', { style: labelStyle }, 'Summe für ' + dauerTxt + ' · ' + picked.length + (picked.length === 1 ? ' Charakter' : ' Charaktere')),
          h('span', { style: bigNumStyle('#80dfb0') }, '+ ' + fmtHade(totalReceive)),
          h('span', { style: formulaStyle }, 'Der NSC erhält von den Spielercharakteren'),
          h('span', { style: bigNumStyle('#ff9980') }, '− ' + fmtHade(totalPay)),
          h('span', { style: formulaStyle }, 'Der NSC zahlt als Honorar an die Spielercharaktere (wenn der Auftrag gelingt, der NSC beschützt wird und niemand Trauma erleidet)'),
          missingRank && h('div', { style: noteStyle }, 'Mindestens ein Charakter hat keinen Divisionsrang und wird nicht berechnet.')
        )
      );
    }

    // ── NSC anfragen (Spieler → SL) ──────────────────────────────
    var ra = props.rasse || null;
    var rasseTxt = ra && ra.rasse ? ra.rasse + (ra.linie ? ' – ' + ra.linie : '') : null;
    function sendeAnfrage() {
      if (!selChar || busy) return;
      setBusy(true); setAnfMsg(null);
      window._sb.from('rekrutierung_anfragen').insert({
        character_id: selChar.id, division_id: division.id, rang: nscRang,
        rasse: ra && ra.rasse || null, linie: ra && ra.linie || null, talent: ra && ra.talent || null,
        groesse: ra && ra.groesse || null, waffe: ra && ra.waffe || null,
        tage: tage, gebuehr: fee, honorar: mentorFee, nachricht: nachricht.trim() || null,
      }).then(function(res) {
        setBusy(false);
        if (res.error) { setAnfMsg({ ok: false, t: 'Anfrage fehlgeschlagen: ' + res.error.message }); return; }
        setNachricht(''); setAnfMsg({ ok: true, t: 'Anfrage gesendet. Die Spielleitung meldet sich bei dir.' });
        ladeAnfragen();
      });
    }
    function zieheZurueck(id) {
      window._sb.from('rekrutierung_anfragen').delete().eq('id', id).then(function() { ladeAnfragen(); });
    }
    var anfrageBox = selChar && playerRangNr !== null && h('div', { style: { marginTop: 20, paddingTop: 18, borderTop: '1px solid ' + cA(0.15) } },
      h('label', { style: labelStyle }, 'NSC anfragen'),
      h('div', { style: Object.assign({ marginBottom: 10 }, infoStyle) },
        'Rang ' + nscRang + ' ' + nscTitel + ' · ' + division.name.replace(/^Die\s+/, '') + ' · ' + dauerTxt + ' · für ' + charName(selChar),
        h('br'), rasseTxt ? 'Rasse: ' + rasseTxt + (ra.talent ? ' · ' + ra.talent : '') + (ra.waffe ? ' · ' + ra.waffe : '') : 'Statblock wie in der Vorlage (keine Rasse gewählt)'),
      h('textarea', {
        value: nachricht, onChange: function(e) { setNachricht(e.target.value); }, rows: 2,
        placeholder: 'Nachricht an die Spielleitung (optional) …',
        style: { width: '100%', boxSizing: 'border-box', resize: 'vertical', padding: '9px 12px', marginBottom: 10,
          background: 'rgba(var(--panel-rgb),0.9)', border: '1px solid ' + cA(0.3), color: 'var(--white)',
          borderRadius: 4, fontFamily: 'var(--font-body)', fontSize: 14 },
      }),
      h('button', { onClick: sendeAnfrage, disabled: busy, style: {
        width: '100%', padding: '11px 14px', cursor: busy ? 'default' : 'pointer', borderRadius: 4,
        fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
        background: cA(0.18), border: '1px solid ' + accent, color: accent, opacity: busy ? 0.6 : 1,
      } }, busy ? '… sende' : '✉ Diesen NSC anfragen'),
      anfMsg && h('div', { style: Object.assign({}, noteStyle, { color: anfMsg.ok ? '#80dfb0' : '#ff9980', marginTop: 10 }) }, anfMsg.t)
    );

    var meineAnfragen = anfragen.length > 0 && h('div', { style: { marginTop: 20, paddingTop: 18, borderTop: '1px solid ' + cA(0.15) } },
      h('label', { style: labelStyle }, 'Deine Anfragen'),
      h('div', { style: { display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 260, overflowY: 'auto' } },
        anfragen.map(function(a) {
          var dv = (window.DIVISIONS_DATA || []).find(function(x) { return x.id === a.division_id; });
          var ch = chars.find(function(c) { return c.id === a.character_id; });
          var tt = dv && (dv.raenge.find(function(x) { return x.rang === a.rang; }) || {}).titel;
          var col = a.status === 'angenommen' ? '#80dfb0' : a.status === 'abgelehnt' ? '#ff9980' : accent;
          return h('div', { key: a.id, style: { display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 4,
            border: '1px solid rgba(var(--purple-rgb),calc(0.15*var(--kp)))', background: 'rgba(var(--panel-rgb),0.5)' } },
            h('div', { style: { flex: 1, minWidth: 0 } },
              h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--white)', letterSpacing: '0.04em' } }, (tt || 'Rang ' + a.rang) + ' · Rang ' + a.rang),
              h('div', { style: infoStyle }, (dv ? dv.name.replace(/^Die\s+/, '') : a.division_id) + (ch ? ' · für ' + charName(ch) : '') + (a.rasse ? ' · ' + a.rasse : ''))
            ),
            h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: col } }, a.status),
            a.status === 'offen' && h('button', { onClick: function() { zieheZurueck(a.id); }, title: 'Anfrage zurückziehen', style: {
              background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))', fontSize: 14 } }, '✕')
          );
        })
      )
    );

    return h('div', null,

      modeToggle,
      nscInfo,

      sec('Dein Charakter', charList(false), true),

      dauerPicker,

      // Kein Rang gesetzt
      selChar && playerRangNr === null && h('div', boxStyle('rgba(200,120,80,0.3)'),
        h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.6, color: 'color-mix(in srgb, rgba(200,170,130,0.9), rgb(var(--ink-rgb)) var(--cm))', letterSpacing: '0.06em' }},
          'Deinem Charakter ist noch kein Divisionsrang zugewiesen. Bitte im Steckbrief eintragen.'
        )
      ),

      // Szenario A: Spieler zahlt
      scenario === 'PAY' && h('div', boxStyle('rgba(200,80,80,0.35)'),
        h('span', { style: labelStyle }, 'NSC hat höheren Rang · Du zahlst für ' + dauerTxt),
        h('span', { style: bigNumStyle('#ff9980') }, fmtHade(fee)),
        h('span', { style: formulaStyle },
          '(' + playerRangNr + ' − ' + nscRang + ') × ' + ev.nscPreis + ' Hade/Schritt × ' + dauerTxt + ' = ' + fee
        ),
        h('div', { style: noteStyle }, 'Der NSC nimmt die Mission an und leistet sein Bestes.')
      ),

      // Szenario B: Kostenlos, andere Division
      scenario === 'FREE' && h('div', boxStyle('rgba(80,180,130,0.3)'),
        h('span', { style: labelStyle }, 'Andere Division · Kostenlos'),
        h('span', { style: bigNumStyle('#80dfb0') }, 'Kostenlos'),
        h('div', { style: noteStyle }, 'NSC und Spieler befinden sich auf gleichem oder ähnlichem Niveau. Der NSC schließt sich der Mission an und gibt sein Bestes.')
      ),

      // Szenario: Gleicher Rang, gleiche Division
      scenario === 'SAME_FREE' && h('div', boxStyle('rgba(80,180,130,0.3)'),
        h('span', { style: labelStyle }, 'Gleiche Division · Gleicher Rang · Kostenlos'),
        h('span', { style: bigNumStyle('#80dfb0') }, 'Kostenlos'),
        h('div', { style: noteStyle }, 'Gleichrangige Kameraden unterstützen sich gegenseitig ohne Gebühr.')
      ),

      // Szenario C: Mentor-Honorar
      scenario === 'MENTOR' && h('div', boxStyle(cA(0.35)),
        h('span', { style: labelStyle }, 'Gleiche Division · Du bist Mentor · Mögliches Honorar für ' + dauerTxt),
        h('span', { style: bigNumStyle(accent) }, fmtHade(mentorFee)),
        h('span', { style: formulaStyle },
          '(' + nscRang + ' − ' + playerRangNr + ') × ' + ev.playerPreis + ' Hade/Schritt × ' + dauerTxt + ' = ' + mentorFee
        ),
        h('div', { style: Object.assign({}, noteStyle, { marginBottom: 12 }) }, 'Der NSC zahlt dir das Honorar, wenn alle drei Bedingungen nach der Mission erfüllt sind:'),

        // Checkboxen
        ['erfolg', 'beschuetzt', 'keinTrauma'].map(function(key) {
          var labels = { erfolg: 'Auftrag erfolgreich abgeschlossen', beschuetzt: 'NSC beschützt', keinTrauma: 'Kein Trauma erlitten' };
          return h('label', { key: key, style: {
            display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em',
            color: checks[key] ? 'var(--white)' : 'color-mix(in srgb, rgba(180,170,220,0.55), rgb(var(--ink-rgb)) var(--cm))',
            marginBottom: 8, userSelect: 'none',
          }},
            h('input', {
              type: 'checkbox', checked: checks[key],
              onChange: function(e) {
                var next = Object.assign({}, checks);
                next[key] = e.target.checked;
                setChecks(next);
              },
              style: { accentColor: accent, width: 14, height: 14, cursor: 'pointer', flexShrink: 0 },
            }),
            labels[key]
          );
        }),

        allChecked && h('div', { style: {
          marginTop: 6, padding: '8px 12px',
          background: cA(0.12), border: '1px solid ' + cA(0.4), borderRadius: 3,
          fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em',
          color: accent,
        }},
          '✓ Alle Bedingungen erfüllt — Honorar: ' + fmtHade(mentorFee)
        )
      ),

      anfrageBox,
      meineAnfragen
    );
  };
})();
