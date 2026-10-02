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

  var DEFAULT_RANG_PREISE = { 1:500,2:450,3:400,4:350,5:300,6:250,7:200,8:150,9:100,10:50 };

  // allPreise = { divisionId: { rang: preis } }
  function getRangPreis(allPreise, divisionId, rang) {
    var dp = allPreise && allPreise[divisionId];
    if (dp && dp[rang] !== undefined) return dp[rang];
    return DEFAULT_RANG_PREISE[rang] || 50;
  }

  function calcFee(playerRang, nscRang, allPreise, nscDivId) {
    var preis = getRangPreis(allPreise, nscDivId, nscRang);
    return (playerRang - nscRang) * preis;
  }
  function calcMentorFee(playerRang, nscRang, allPreise, playerDivId) {
    var preis = getRangPreis(allPreise, playerDivId, playerRang);
    return (nscRang - playerRang) * preis;
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

    var _chars   = useState([]);              var chars = _chars[0]; var setChars = _chars[1];
    var _selId   = useState(null);            var selId = _selId[0]; var setSelId = _selId[1];
    var _loading = useState(true);            var loading = _loading[0]; var setLoading = _loading[1];
    var _preise  = useState(null);  var allPreise = _preise[0]; var setPreise = _preise[1];
    var _checks  = useState({ erfolg: false, beschuetzt: false, keinTrauma: false });
    var checks = _checks[0]; var setChecks = _checks[1];

    useEffect(function() {
      var user = window.SITE_USER;
      if (!user || !window._sb) { setLoading(false); return; }
      Promise.all([
        window._sb.from('characters').select('id, name, division, char_data')
          .eq('type', 'spieler').eq('owner_id', user.id).order('name'),
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

    // Ausgewählter Charakter
    var selChar = chars.find(function(c) { return c.id === selId; }) || null;
    var playerDiv   = selChar ? (selChar.char_data && selChar.char_data.division ? selChar.char_data.division : selChar.division || null) : null;
    var playerRank  = selChar ? (selChar.char_data && selChar.char_data.rank ? selChar.char_data.rank : null) : null;
    var playerRangNr = rankTitleToNumber(playerRank);

    // Szenario bestimmen
    var scenario = null;
    if (playerRangNr !== null) {
      if (nscRang < playerRangNr) {
        scenario = 'PAY';           // NSC hat höheren Rang → Spieler zahlt
      } else if (playerDiv !== division.name) {
        scenario = 'FREE';          // NSC gleich/niedriger + andere Division → kostenlos
      } else {
        scenario = nscRang === playerRangNr ? 'SAME_FREE' : 'MENTOR'; // gleicher Rang = kostenlos, niedriger = Mentor
      }
    }

    var playerDivId = (window.DIVISIONS_DATA || []).find(function(d) { return d.name === playerDiv; });
    playerDivId = playerDivId ? playerDivId.id : null;
    var fee       = (scenario === 'PAY')    ? calcFee(playerRangNr, nscRang, allPreise, division.id)     : 0;
    var mentorFee = (scenario === 'MENTOR') ? calcMentorFee(playerRangNr, nscRang, allPreise, playerDivId || division.id) : 0;
    var nscPreis      = getRangPreis(allPreise, division.id, nscRang);
    var playerPreis   = getRangPreis(allPreise, playerDivId || division.id, playerRangNr || 5);
    var allChecked = checks.erfolg && checks.beschuetzt && checks.keinTrauma;

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

    return h('div', null,

      // NSC-Info
      h('div', { style: {
        fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em',
        color: 'rgba(200,190,240,0.6)', marginBottom: 12,
      }},
        'Ausgewählter NSC: ',
        h('span', { style: { color: accent }}, 'Rang ' + nscRang + ' — ' + nscTitel),
        ' · ',
        division.name
      ),

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
            return h('option', { key: c.id, value: c.id }, c.char_data && c.char_data.name ? c.char_data.name : c.name, ' · ', rankTitle, ' · ', div);
          })
        )
      ),

      // Charakter-Info (single)
      chars.length === 1 && selChar && h('div', { style: {
        fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em',
        color: 'rgba(200,190,240,0.6)', marginBottom: 12,
      }},
        'Dein Charakter: ',
        h('span', { style: { color: '#f0eeff' }},
          (selChar.char_data && selChar.char_data.name ? selChar.char_data.name : selChar.name) +
          (playerRank ? ' · ' + playerRank : '') +
          (playerRangNr ? ' (Rang ' + playerRangNr + ')' : '') +
          (playerDiv ? ' · ' + playerDiv.replace(/^Die\s+/, '') : '')
        )
      ),

      // Kein Rang gesetzt
      selChar && playerRangNr === null && h('div', boxStyle('rgba(200,120,80,0.3)'),
        h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(200,170,130,0.8)', letterSpacing: '0.12em' }},
          'Deinem Charakter ist noch kein Divisionsrang zugewiesen. Bitte im Steckbrief eintragen.'
        )
      ),

      // Szenario A: Spieler zahlt
      scenario === 'PAY' && h('div', boxStyle('rgba(200,80,80,0.35)'),
        h('span', { style: labelStyle }, 'NSC hat höheren Rang · Du zahlst'),
        h('span', { style: bigNumStyle('#ff9980') }, fee.toLocaleString('de-DE') + ' Hade'),
        h('span', { style: formulaStyle },
          '(' + playerRangNr + ' − ' + nscRang + ') × ' + nscPreis + ' Hade/Schritt = ' + fee
        ),
        h('div', { style: {
          fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 300,
          color: 'rgba(200,190,240,0.55)', marginTop: 10, lineHeight: 1.5,
        }}, 'Der NSC nimmt die Mission an und leistet sein Bestes.')
      ),

      // Szenario B: Kostenlos, andere Division
      scenario === 'FREE' && h('div', boxStyle('rgba(80,180,130,0.3)'),
        h('span', { style: labelStyle }, 'Andere Division · Kostenlos'),
        h('span', { style: bigNumStyle('#80dfb0') }, 'Kostenlos'),
        h('div', { style: {
          fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 300,
          color: 'rgba(200,190,240,0.55)', marginTop: 10, lineHeight: 1.5,
        }}, 'NSC und Spieler befinden sich auf gleichem oder ähnlichem Niveau. Der NSC schließt sich der Mission an und gibt sein Bestes.')
      ),

      // Szenario: Gleicher Rang, gleiche Division
      scenario === 'SAME_FREE' && h('div', boxStyle('rgba(80,180,130,0.3)'),
        h('span', { style: labelStyle }, 'Gleiche Division · Gleicher Rang · Kostenlos'),
        h('span', { style: bigNumStyle('#80dfb0') }, 'Kostenlos'),
        h('div', { style: {
          fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 300,
          color: 'rgba(200,190,240,0.55)', marginTop: 10, lineHeight: 1.5,
        }}, 'Gleichrangige Kameraden unterstützen sich gegenseitig ohne Gebühr.')
      ),

      // Szenario C: Mentor-Honorar
      scenario === 'MENTOR' && h('div', boxStyle(cA(0.35)),
        h('span', { style: labelStyle }, 'Gleiche Division · Du bist Mentor · Mögliches Honorar'),
        h('span', { style: bigNumStyle(accent) }, mentorFee.toLocaleString('de-DE') + ' Hade'),
        h('span', { style: formulaStyle },
          '(' + nscRang + ' − ' + playerRangNr + ') × ' + playerPreis + ' Hade/Schritt = ' + mentorFee
        ),
        h('div', { style: {
          fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 300,
          color: 'rgba(200,190,240,0.6)', marginTop: 10, marginBottom: 12, lineHeight: 1.5,
        }}, 'Der NSC zahlt dir das Honorar, wenn alle drei Bedingungen nach der Mission erfüllt sind:'),

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
          '✓ Alle Bedingungen erfüllt — Honorar: ' + mentorFee.toLocaleString('de-DE') + ' Hade'
        )
      )
    );
  };
})();
