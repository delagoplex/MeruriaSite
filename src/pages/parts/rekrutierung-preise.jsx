// Tab "Preise" von /dm/rekrutierung.html (window.RekrutierungPreise)

;(function () {
(function () {
const h         = React.createElement;
const useState  = React.useState;
const useEffect = React.useEffect;


const DEFAULT_RANG_PREISE = {1:1920,2:1280,3:855,4:570,5:380,6:255,7:170,8:115,9:75,10:50};

// Ein Preissatz für alle Divisionen; gespeichert unter der Division 'kuratoren'.
const PREIS_DIVISION = 'kuratoren';
const PREIS_DIV = { id: PREIS_DIVISION, name: 'Alle Divisionen', accent: '#a08cff', raenge: [] };

function getRangPreis(allPreise, divId, rang) {
  var dp = allPreise && allPreise[PREIS_DIVISION];
  if (dp && dp[rang] !== undefined) return dp[rang];
  return DEFAULT_RANG_PREISE[rang] || 50;
}

// ── Preistabelle für eine Division ──────────────────────────
function PreisTabelle(props) {
  var div      = props.div;
  var allPreise= props.allPreise;
  var onSave   = props.onSave;
  var saving   = props.saving || {};
  var saved    = props.saved  || {};

  var _local = useState(function() {
    var init = {};
    for (var r=1; r<=10; r++) init[r] = getRangPreis(allPreise, div.id, r);
    return init;
  });
  var local = _local[0]; var setLocal = _local[1];

  // Sync wenn Division wechselt oder allPreise geladen werden
  useEffect(function() {
    var init = {};
    for (var r=1; r<=10; r++) init[r] = getRangPreis(allPreise, div.id, r);
    setLocal(init);
  }, [div.id, allPreise]);

  var r2 = parseInt(div.accent.slice(1,3),16), g2 = parseInt(div.accent.slice(3,5),16), b2 = parseInt(div.accent.slice(5,7),16);
  var cA = function(a) { return 'rgba('+r2+','+g2+','+b2+','+a+')'; };

  return h('div', { style: {
    background: 'rgba(var(--panel-rgb),0.85)',
    border: '1px solid ' + cA(0.2),
    borderRadius: 4, overflow: 'hidden', marginBottom: 20,
  }},
    h('table', { style: { width:'100%', borderCollapse:'collapse' } },
      h('thead', null,
        h('tr', { style: { background: cA(0.07), borderBottom: '1px solid '+cA(0.15) } },
          ['Rang','Titel','Grundpreis','Beispiel',''].map(function(lbl) {
            return h('th', { key: lbl, style: {
              padding: '10px 16px', textAlign: 'left', fontWeight: 400,
              fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.22em',
              color: cA(0.55), textTransform: 'uppercase',
            }}, lbl);
          })
        )
      ),
      h('tbody', null,
        [1,2,3,4,5,6,7,8,9,10].map(function(rang) {
          var titel = 'Rang ' + rang;
          var preis = local[rang];
          var isSaving = saving[div.id+':'+rang];
          var isSaved  = saved[div.id+':'+rang];
          return h('tr', { key: rang, style: { borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.07*var(--kp)))' } },
            // Rang-Badge
            h('td', { style: { padding:'11px 16px', width:60 } },
              h('div', { style: {
                display:'inline-flex', alignItems:'center', justifyContent:'center',
                width:28, height:28, border:'1px solid '+cA(0.3), borderRadius:3,
                fontFamily:'var(--font-mono)', fontSize:12, fontWeight:600,
                color:cA(0.85),
              }}, rang)
            ),
            // Titel
            h('td', { style: { padding:'11px 16px' } },
              h('span', { style: {
                fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.12em',
                textTransform:'uppercase', color:'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))',
              }}, titel)
            ),
            // Preis-Input
            h('td', { style: { padding:'11px 16px', width:180 } },
              h('div', { style: { display:'flex', alignItems:'center', gap:8 } },
                h('input', {
                  type:'number', min:0, step:10, value:preis,
                  onChange: function(e) {
                    var v = parseInt(e.target.value)||0;
                    setLocal(function(p){ var n=Object.assign({},p); n[rang]=v; return n; });
                  },
                }),
                h('span', { style: { fontFamily:'var(--font-mono)', fontSize:9, color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', whiteSpace:'nowrap' }}, 'Hade')
              )
            ),
            // Beispiel
            h('td', { style: { padding:'11px 16px', width:200 } },
              h('span', { style: { fontFamily:'var(--font-mono)', fontSize:9, color:'rgba(var(--accent-rgb),calc(0.35*var(--ka) + var(--tb)))', letterSpacing:'0.08em' }},
                '1 Schritt = ', preis, ' Hade'
              )
            ),
            // Speichern
            h('td', { style: { padding:'11px 16px', width:120 } },
              h('button', {
                onClick: function() { onSave(div.id, rang, preis); },
                disabled: isSaving || isSaved,
                style: {
                  padding:'5px 12px',
                  fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase',
                  color: isSaved ? '#80dfb0' : cA(0.8),
                  background: isSaved ? 'rgba(80,180,130,0.12)' : cA(0.1),
                  border: '1px solid ' + (isSaved ? 'rgba(80,180,130,0.4)' : cA(0.25)),
                  borderRadius:3, cursor: isSaving||isSaved ? 'default' : 'pointer', transition:'all 0.2s',
                },
              }, isSaved ? '✓' : isSaving ? '…' : 'Speichern')
            )
          );
        })
      )
    ),
    // Alle speichern für diese Division
    h('div', { style: { padding:'12px 16px', borderTop:'1px solid '+cA(0.1), display:'flex', justifyContent:'flex-end' } },
      h('button', {
        onClick: function() { for(var r=1;r<=10;r++) onSave(div.id, r, local[r]); },
        style: {
          padding:'7px 18px',
          fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase',
          color: cA(0.85), background: cA(0.1), border: '1px solid '+cA(0.3),
          borderRadius:3, cursor:'pointer', transition:'all 0.15s',
        },
      }, 'Alle speichern')
    )
  );
}

// ── App ──────────────────────────────────────────────────────
function App() {
  var _loading = useState(true);      var loading=_loading[0]; var setLoading=_loading[1];
  var _all     = useState(null);      var allPreise=_all[0]; var setAll=_all[1];
  var _saving  = useState({});        var saving=_saving[0]; var setSaving=_saving[1];
  var _saved   = useState({});        var saved=_saved[0]; var setSaved=_saved[1];

  useEffect(function() {
    if (!window._sb) { setLoading(false); return; }
    window._sb.from('rekrutierung_preise').select('division_id, rang, preis').then(function(res) {
      var rows = res.data || [];
      var map = {};
      rows.forEach(function(r) {
        if (!map[r.division_id]) map[r.division_id] = {};
        map[r.division_id][r.rang] = r.preis;
      });
      setAll(map);
      setLoading(false);
    });
  }, []);

  function handleSave(divId, rang, preis) {
    var key = divId+':'+rang;
    setSaving(function(p){ var n=Object.assign({},p); n[key]=true; return n; });
    window._sb.from('rekrutierung_preise')
      .upsert({ division_id: divId, rang: rang, preis: preis }, { onConflict: 'division_id,rang' })
      .then(function() {
        setSaving(function(p){ var n=Object.assign({},p); n[key]=false; return n; });
        setSaved(function(p){ var n=Object.assign({},p); n[key]=true; return n; });
        setAll(function(prev) {
          var next = Object.assign({}, prev||{});
          next[divId] = Object.assign({}, next[divId]||{});
          next[divId][rang] = preis;
          return next;
        });
        setTimeout(function() {
          setSaved(function(p){ var n=Object.assign({},p); n[key]=false; return n; });
        }, 2500);
      });
  }

  return h('div', { style: { maxWidth:900 } },

    loading
      ? h('div', { style: { fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.22em', color:'rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))', textTransform:'uppercase', padding:'24px 0' }}, '◈ Lade…')
      : h(PreisTabelle, { div:PREIS_DIV, allPreise:allPreise, onSave:handleSave, saving:saving, saved:saved }),

    // Formel-Erklärung
    h('div', { style: { padding:'12px 16px', background:'rgba(var(--purple-rgb),calc(0.04*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))', borderRadius:3 } },
      h('span', { style: { fontFamily:'var(--font-body)', fontSize:12, fontWeight:300, color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', lineHeight:1.6 } },
        h('strong', { style: { color:'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))', fontWeight:500 } }, 'Gebühr: '),
        '(Spieler-Rang − NSC-Rang) × Grundpreis des NSC-Rangs × Tage  ·  ',
        h('strong', { style: { color:'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))', fontWeight:500 } }, 'Honorar: '),
        '(NSC-Rang − Spieler-Rang) × Grundpreis des Spieler-Rangs × Tage'
      )
    )
  );
}

window.RekrutierungPreise = App;
})();

})();
