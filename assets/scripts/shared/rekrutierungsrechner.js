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

  // Exponentiell wachsend (Faktor ~1,5 pro Rang); Rang 1 ist der höchste Rang.
  var DEFAULT_RANG_PREISE = { 1:1920,2:1280,3:855,4:570,5:380,6:255,7:170,8:115,9:75,10:50 };

  var DAUER_PRESETS = [
    { tage: 1, label: '1 Tag' },
    { tage: 3, label: '3 Tage' },
    { tage: 7, label: '1 Woche' },
    { tage: 14, label: '2 Wochen' },
    { tage: 30, label: '1 Monat' },
  ];

  function fmtDauer(tage) { return tage === 1 ? '1 Tag' : tage + ' Tage'; }

  // allPreise = { divisionId: { rang: preis } }
  function getRangPreis(allPreise, divisionId, rang) {
    var dp = allPreise && allPreise[divisionId];
    if (dp && dp[rang] !== undefined) return dp[rang];
    return DEFAULT_RANG_PREISE[rang] || 50;
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
      border: '1px solid ' + accent, background: 'rgba(8,6,22,0.9)',
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
      background: 'rgba(8,6,22,0.8)',
      border: '1px solid ' + (color || cA(0.25)),
      borderRadius: 4, padding: '16px 18px', marginTop: 12,
    }; };

    var labelStyle = {
      fontFamily: 'var(--font-mono)', fontSize: 8.5, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: cA(0.6), display: 'block', marginBottom: 4,
    };

    var bigNumStyle = function(color) { return {
      fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400,
      letterSpacing: '0.06em', color: color || accent,
      display: 'block', lineHeight: 1.1, margin: '6px 0 2px',
    }; };

    var formulaStyle = {
      fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(160,140,255,0.45)',
      letterSpacing: '0.1em',
    };

    var infoStyle = {
      fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em',
      color: 'rgba(200,190,240,0.6)',
    };

    var noteStyle = {
      fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 300,
      color: 'rgba(200,190,240,0.55)', marginTop: 10, lineHeight: 1.5,
    };

    function pillBtn(active, onClick, label) {
      return h('button', { key: label, onClick: onClick, style: {
        padding: '5px 10px', cursor: 'pointer', borderRadius: 3,
        fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em',
        background: active ? cA(0.18) : 'rgba(10,8,28,0.5)',
        border: '1px solid ' + (active ? accent : 'rgba(124,77,255,0.15)'),
        color: active ? accent : 'rgba(180,170,220,0.6)',
      }}, label);
    }

    // ── Loading ──────────────────────────────────────────────────
    if (loading) {
      return h('div', { style: { padding: '20px 0', fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(160,140,255,0.4)', letterSpacing: '0.22em', textTransform: 'uppercase' }}, '◈ Lade…');
    }

    if (!window.SITE_USER) {
      return h('div', boxStyle(), h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(160,140,255,0.5)', letterSpacing: '0.14em' }}, 'Bitte einloggen, um den Rechner zu nutzen.'));
    }

    if (chars.length === 0) {
      return h('div', boxStyle(), h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(160,140,255,0.5)', letterSpacing: '0.14em' }}, 'Kein Spielercharakter gefunden.'));
    }

    // Dauer-Auswahl (gilt für beide Richtungen)
    var dauerPicker = h('div', { style: { marginBottom: 12 } },
      h('label', { style: labelStyle }, 'Dauer der Rekrutierung'),
      h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' } },
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
            width: 60, padding: '5px 8px', background: 'rgba(8,6,22,0.9)',
            border: '1px solid ' + cA(0.3), color: '#f0eeff', borderRadius: 3,
            fontFamily: 'var(--font-mono)', fontSize: 10,
          },
        }),
        h('span', { style: infoStyle }, 'Tage')
      )
    );

    var modeToggle = isDM && h('div', { style: { display: 'flex', gap: 6, marginBottom: 14 } },
      pillBtn(mode === 'player', function() { setMode('player'); }, 'Spieler rekrutiert NSC'),
      pillBtn(mode === 'nsc', function() { setMode('nsc'); }, 'NSC rekrutiert Spielercharaktere')
    );

    var nscInfo = h('div', { style: Object.assign({ marginBottom: 12 }, infoStyle) },
      'Ausgewählter NSC: ',
      h('span', { style: { color: accent }}, 'Rang ' + nscRang + ' — ' + nscTitel),
      ' · ',
      division.name
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
        h('label', { style: labelStyle }, 'Mitgenommene Spielercharaktere'),
        h('div', { style: { display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 360, overflowY: 'auto' } },
          chars.map(function(c) {
            var e = evaluate(c, division, nscRang, allPreise, tage);
            var on = !!party[c.id];
            var res = e.scenario === 'PAY' ? { t: '+ ' + fmtHade(e.fee), col: '#80dfb0' }
                    : e.scenario === 'MENTOR' ? { t: '− ' + fmtHade(e.mentorFee), col: '#ff9980' }
                    : e.scenario ? { t: 'kostenlos', col: 'rgba(200,190,240,0.6)' }
                    : { t: 'kein Rang', col: 'rgba(200,170,130,0.8)' };
            return h('label', { key: c.id, style: {
              display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', padding: '6px 8px',
              borderRadius: 4, border: '1px solid ' + (on ? accent : 'rgba(124,77,255,0.15)'),
              background: on ? cA(0.1) : 'rgba(10,8,28,0.5)',
            }},
              h('input', {
                type: 'checkbox', checked: on,
                onChange: function(ev2) {
                  var next = Object.assign({}, party);
                  next[c.id] = ev2.target.checked;
                  setParty(next);
                },
                style: { accentColor: accent, width: 14, height: 14, flexShrink: 0 },
              }),
              h(Portrait, { char: c, size: 40, accent: cA(0.5) }),
              h('div', { style: { flex: 1, minWidth: 0 } },
                h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: '#f0eeff', letterSpacing: '0.08em' } }, charName(c)),
                h('div', { style: infoStyle },
                  ((c.char_data && c.char_data.rank) || '—') + (e.rangNr ? ' (Rang ' + e.rangNr + ')' : '') + ' · ' + (e.playerDiv || '—').replace(/^Die\s+/, ''))
              ),
              h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: res.col, whiteSpace: 'nowrap' } }, res.t)
            );
          })
        ),

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

    return h('div', null,

      modeToggle,
      nscInfo,

      // Charakter-Picker (nur wenn > 1)
      chars.length > 1 && h('div', { style: { marginBottom: 12 } },
        h('label', { style: labelStyle }, 'Dein Charakter'),
        h('select', {
          value: selId || '',
          onChange: function(e) { setSelId(e.target.value); },
          style: {
            width: '100%', padding: '7px 10px',
            background: 'rgba(8,6,22,0.9)', border: '1px solid ' + cA(0.3),
            color: '#f0eeff', fontFamily: 'var(--font-mono)', fontSize: 10,
            letterSpacing: '0.08em', borderRadius: 3, cursor: 'pointer',
          },
        },
          chars.map(function(c) {
            var rankTitle = c.char_data && c.char_data.rank ? c.char_data.rank : '—';
            var div = c.char_data && c.char_data.division ? c.char_data.division.replace(/^Die\s+/, '') : '—';
            return h('option', { key: c.id, value: c.id }, charName(c), ' · ', rankTitle, ' · ', div);
          })
        )
      ),

      // Gewählter Charakter mit Bild
      selChar && h('div', { style: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 } },
        h(Portrait, { char: selChar, size: 72, accent: cA(0.5) }),
        h('div', { style: infoStyle },
          h('div', { style: { color: '#f0eeff', fontSize: 11, marginBottom: 3 } }, charName(selChar)),
          (playerRank || '—') + (playerRangNr ? ' (Rang ' + playerRangNr + ')' : '') +
          (playerDiv ? ' · ' + playerDiv.replace(/^Die\s+/, '') : '')
        )
      ),

      dauerPicker,

      // Kein Rang gesetzt
      selChar && playerRangNr === null && h('div', boxStyle('rgba(200,120,80,0.3)'),
        h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(200,170,130,0.8)', letterSpacing: '0.12em' }},
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
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em',
            color: checks[key] ? '#f0eeff' : 'rgba(180,170,220,0.55)',
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
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em',
          color: accent,
        }},
          '✓ Alle Bedingungen erfüllt — Honorar: ' + fmtHade(mentorFee)
        )
      )
    );
  };
})();
