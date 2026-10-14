// Kollektikon: Einbindung der DM-Werkzeuge in die Spielerseite /spiel/kollektikon.html.
// Exposes: window.KolDmSlot (Menge/Freigabe im Detailfenster eines Eintrags),
//          window.KolDmBar  (Umschalter + Schaltflächen Mengen / Schwellen / Randomizer als Overlay)
// Die eigentlichen Werkzeuge (parts/kollektikon-dm.jsx) lädt nur die Spielleitung nach.

;(function () {
const { useState, useEffect } = React;

// lädt den DM-Teil einmal; liefert window.KollektikonDm oder null, solange er lädt
function useKollektikonDm(enabled) {
  const [mod, setMod] = useState(() => window.KollektikonDm || null);
  useEffect(() => {
    if (!enabled || mod) return;
    let dead = false;
    import('./kollektikon-dm.jsx')
      .then(() => { if (!dead) setMod(window.KollektikonDm || null); })
      .catch(err => console.error('Kollektikon-Werkzeuge konnten nicht geladen werden', err));
    return () => { dead = true; };
  }, [enabled, mod]);
  return mod;
}

// Menge und Freigabe direkt am geöffneten Eintrag
function KolDmSlot({ entry, countsMap, thresholdsMap, onSaved }) {
  const { dmOn } = window.useDmMode();
  const dm = useKollektikonDm(dmOn && !!entry);
  if (!dmOn || !entry || !dm) return null;
  const rid = String(entry._rid != null ? entry._rid : entry.id.slice(entry.cat.length + 1));
  return (
    <div className="dm-kol-inline">
      <div className="dm-kol-inline-label">◈ Spielleitung · Menge und Freigabe</div>
      <dm.CountRow key={entry.cat + ':' + rid} catId={entry.cat}
        resource={{ id: rid, name: entry.name, rarity: entry.rarity }}
        initialData={countsMap[entry.cat + ':' + rid]} thresholdsMap={thresholdsMap} onSaved={onSaved} />
    </div>
  );
}

const TOOLS = [['mengen', 'Mengen'], ['schwellen', 'Schwellen'], ['randomizer', 'Randomizer']];

function KolDmBar({ countsMap, thresholdsMap, onCountSaved, onThresholdSaved }) {
  const { isDm, dmOn } = window.useDmMode();
  const [tool, setTool] = useState(null);
  const dm = useKollektikonDm(dmOn && !!tool);
  if (!isDm) return null;
  const btn = {
    fontFamily:'var(--font-mono)', fontSize:11.5, letterSpacing:'0.18em', textTransform:'uppercase', cursor:'pointer',
    padding:'6px 12px', borderRadius:3, color:'var(--white)',
    background:'rgba(var(--purple-rgb),calc(0.22*var(--kp)))', border:'1px solid rgba(var(--accent-rgb),calc(0.7*var(--ka)))',
  };
  return (
    <div style={{ display:'flex', gap:8, flexWrap:'wrap', justifyContent:'flex-end' }}>
      <window.DmModeToggle />
      {dmOn && TOOLS.map(([k, label]) => <button key={k} type="button" style={btn} onClick={() => setTool(k)}>{label}</button>)}
      {dmOn && tool && (
        <window.DmOverlay title={'Kollektikon · ' + TOOLS.find(t => t[0] === tool)[1]} onClose={() => setTool(null)}>
          <div className="dm-kol-wrap">
            <div className="dm-kol-tabs">
              {TOOLS.map(([k, label]) => (
                <button key={k} type="button" className={'dm-kol-tab' + (tool === k ? ' active' : '')} onClick={() => setTool(k)}>{label}</button>
              ))}
            </div>
            {!dm ? (
              <div style={{ fontFamily:'var(--font-body)', fontSize:13, color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))', padding:'24px 0' }}>Lädt…</div>
            ) : tool === 'mengen' ? (
              <dm.CountsSection countsMap={countsMap} thresholdsMap={thresholdsMap} onSaved={onCountSaved} />
            ) : tool === 'randomizer' ? (
              <dm.RandomizerSection />
            ) : (
              <dm.ThresholdsSection thresholdsMap={thresholdsMap} onThresholdSaved={onThresholdSaved} />
            )}
          </div>
        </window.DmOverlay>
      )}
    </div>
  );
}

window.KolDmSlot = KolDmSlot;
window.KolDmBar = KolDmBar;

})();
