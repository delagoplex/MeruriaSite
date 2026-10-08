// Tab "Preise" von /dm/rekrutierung.html (window.RekrutierungPreise)

;(function () {
(function () {
const h         = React.createElement;
const useState  = React.useState;
const useEffect = React.useEffect;


// Nur zwei Einstellungen: Basispreis (Rang 10) und Faktor pro Rang.
// preis(rang) = Basispreis × Faktor^(10 − rang). Gespeichert: Zeile rang 10 = Basispreis,
// Zeile rang 0 = Faktor in Hundertsteln (150 = ×1,5).
const DEFAULT_BASIS = 50;
const DEFAULT_FAKTOR = 1.5;

// Ein Preissatz für alle Divisionen; gespeichert unter der Division 'kuratoren'.
const PREIS_DIVISION = 'kuratoren';

function rangPreis(basis, faktor, rang) {
  return Math.round(basis * Math.pow(faktor, 10 - rang));
}

function parseFaktor(str) {
  var f = parseFloat(String(str).replace(',', '.'));
  return isFinite(f) && f >= 1 ? f : null;
}

const cA = function(a) { return 'rgba(160,140,255,'+a+')'; };
const thStyle = {
  padding: '10px 16px', textAlign: 'left', fontWeight: 400,
  fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.22em',
  color: cA(0.55), textTransform: 'uppercase',
};
const labelStyle = {
  display: 'block', marginBottom: 6, fontFamily: 'var(--font-mono)', fontSize: 9,
  letterSpacing: '0.18em', textTransform: 'uppercase', color: cA(0.7),
};

// ── Basispreis + Faktor, mit Vorschau aller Ränge ───────────
function PreisEditor(props) {
  var allPreise = props.allPreise;
  var onSave    = props.onSave;
  var saving    = props.saving;
  var saved     = props.saved;

  function startWerte() {
    var dp = (allPreise && allPreise[PREIS_DIVISION]) || {};
    return {
      basis:  String(dp[10] !== undefined ? dp[10] : DEFAULT_BASIS),
      faktor: String(dp[0] !== undefined ? dp[0] / 100 : DEFAULT_FAKTOR).replace('.', ','),
    };
  }
  var _local = useState(startWerte);
  var local = _local[0]; var setLocal = _local[1];
  useEffect(function() { setLocal(startWerte()); }, [allPreise]);

  var basis  = Math.max(0, parseInt(local.basis, 10) || 0);
  var faktor = parseFaktor(local.faktor);
  var gueltig = faktor !== null;

  return h('div', { style: {
    background: 'rgba(var(--panel-rgb),0.85)', border: '1px solid ' + cA(0.2),
    borderRadius: 4, overflow: 'hidden', marginBottom: 20,
  }},
    h('div', { style: { padding: '16px', display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-end', borderBottom: '1px solid ' + cA(0.15) } },
      h('div', null,
        h('label', { style: labelStyle }, 'Basispreis (Rang 10)'),
        h('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
          h('input', { type: 'number', min: 0, step: 10, value: local.basis,
            onChange: function(e) { var v = e.target.value; setLocal(function(p) { return Object.assign({}, p, { basis: v }); }); } }),
          h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))' } }, 'Hade')
        )
      ),
      h('div', null,
        h('label', { style: labelStyle }, 'Faktor pro Rang'),
        h('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
          h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, color: cA(0.7) } }, '×'),
          h('input', { type: 'text', inputMode: 'decimal', value: local.faktor,
            onChange: function(e) { var v = e.target.value; setLocal(function(p) { return Object.assign({}, p, { faktor: v }); }); },
            style: gueltig ? undefined : { borderColor: '#ff9980' } })
        )
      ),
      h('button', {
        onClick: function() { if (gueltig) onSave(basis, Math.round(faktor * 100)); },
        disabled: !gueltig || saving || saved,
        style: {
          padding: '7px 18px', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: saved ? '#80dfb0' : cA(0.85),
          background: saved ? 'rgba(80,180,130,0.12)' : cA(0.1),
          border: '1px solid ' + (saved ? 'rgba(80,180,130,0.4)' : cA(0.3)),
          borderRadius: 3, cursor: !gueltig || saving || saved ? 'default' : 'pointer', transition: 'all 0.2s',
        },
      }, saved ? '✓ Gespeichert' : saving ? '…' : 'Speichern'),
      !gueltig && h('span', { style: { fontFamily: 'var(--font-body)', fontSize: 12, color: '#ff9980' } }, 'Faktor muss eine Zahl ≥ 1 sein.')
    ),
    h('table', { style: { width: '100%', borderCollapse: 'collapse' } },
      h('thead', null,
        h('tr', { style: { background: cA(0.07), borderBottom: '1px solid ' + cA(0.15) } },
          ['Rang', 'Grundpreis (Vorschau)'].map(function(lbl) { return h('th', { key: lbl, style: thStyle }, lbl); })
        )
      ),
      h('tbody', null,
        [1,2,3,4,5,6,7,8,9,10].map(function(rang) {
          return h('tr', { key: rang, style: { borderBottom: '1px solid rgba(var(--purple-rgb),calc(0.07*var(--kp)))' } },
            h('td', { style: { padding: '9px 16px', width: 90 } },
              h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, color: cA(0.85) } }, 'Rang ' + rang)
            ),
            h('td', { style: { padding: '9px 16px' } },
              h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(var(--text-rgb),calc(0.75*var(--kt) + var(--tb)))' } },
                gueltig ? rangPreis(basis, faktor, rang).toLocaleString('de-DE') + ' Hade' : '—')
            )
          );
        })
      )
    )
  );
}

// ── App ──────────────────────────────────────────────────────
function App() {
  var _loading = useState(true);      var loading=_loading[0]; var setLoading=_loading[1];
  var _all     = useState(null);      var allPreise=_all[0]; var setAll=_all[1];
  var _saving  = useState(false);     var saving=_saving[0]; var setSaving=_saving[1];
  var _saved   = useState(false);     var saved=_saved[0]; var setSaved=_saved[1];

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

  function handleSave(basis, faktor100) {
    setSaving(true);
    window._sb.from('rekrutierung_preise')
      .upsert([
        { division_id: PREIS_DIVISION, rang: 10, preis: basis },
        { division_id: PREIS_DIVISION, rang: 0,  preis: faktor100 },
      ], { onConflict: 'division_id,rang' })
      .then(function(res) {
        setSaving(false);
        if (res.error) { alert('Speichern fehlgeschlagen: ' + res.error.message); return; }
        setSaved(true);
        setAll(function(prev) {
          var next = Object.assign({}, prev||{});
          next[PREIS_DIVISION] = Object.assign({}, next[PREIS_DIVISION]||{}, { 10: basis, 0: faktor100 });
          return next;
        });
        setTimeout(function() { setSaved(false); }, 2500);
      });
  }

  return h('div', { style: { maxWidth:900 } },

    loading
      ? h('div', { style: { fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.22em', color:'rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))', textTransform:'uppercase', padding:'24px 0' }}, '◈ Lade…')
      : h(PreisEditor, { allPreise:allPreise, onSave:handleSave, saving:saving, saved:saved }),

    // Formel-Erklärung
    h('div', { style: { padding:'12px 16px', background:'rgba(var(--purple-rgb),calc(0.04*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))', borderRadius:3 } },
      h('span', { style: { fontFamily:'var(--font-body)', fontSize:12, fontWeight:300, color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', lineHeight:1.6 } },
        h('strong', { style: { color:'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))', fontWeight:500 } }, 'Grundpreis: '),
        'Basispreis × Faktor^(10 − Rang)  ·  ',
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
