// Missionsterminal: Bedienelemente der Spielleitung direkt im Terminal.
// Exposes: window.MissionenDmBar ({ selectedId, onChanged })
// Die Verwaltung selbst (parts/missionen-dm.jsx) lädt nur die Spielleitung nach und zeigt sie als Overlay.

;(function () {
const { useState, useEffect } = React;

function MissionenDmBar({ selectedId, onChanged }) {
  const { isDm, dmOn } = window.useDmMode();
  const [open, setOpen] = useState(null);   // null | { id, tab, create }
  const [ready, setReady] = useState(!!window.MissionenDmApp);
  useEffect(() => {
    if (!open || ready) return;
    import('./missionen-dm.jsx')
      .then(() => setReady(true))
      .catch(err => { console.error(err); alert('Die Missionsverwaltung konnte nicht geladen werden.'); setOpen(null); });
  }, [open, ready]);
  if (!isDm) return null;

  const btn = {
    fontFamily:'var(--font-mono)', fontSize:11.5, letterSpacing:'0.18em', textTransform:'uppercase', cursor:'pointer',
    padding:'6px 12px', borderRadius:3, color:'var(--white)',
    background:'rgba(var(--purple-rgb),calc(0.22*var(--kp)))', border:'1px solid rgba(var(--accent-rgb),calc(0.7*var(--ka)))',
  };
  const close = () => { setOpen(null); onChanged && onChanged(); };
  const App = window.MissionenDmApp;
  return (
    <div style={{ position:'relative', zIndex:6, flexShrink:0, display:'flex', gap:8, flexWrap:'wrap', alignItems:'center', padding:'12px 32px 0' }}>
      <window.DmModeToggle />
      {dmOn && <button type="button" style={btn} onClick={() => setOpen({ id:null, tab:'missions', create:true })}>+ Neue Mission</button>}
      {dmOn && selectedId && <button type="button" style={btn} onClick={() => setOpen({ id:selectedId, tab:'missions', create:false })}>Mission bearbeiten · Bewerbungen</button>}
      {dmOn && <button type="button" style={{ ...btn, background:'transparent' }} onClick={() => setOpen({ id:null, tab:'missions', create:false })}>Alle Missionen</button>}
      {dmOn && <button type="button" style={{ ...btn, background:'transparent' }} onClick={() => setOpen({ id:null, tab:'tokens', create:false })}>Würfelerlaubnis</button>}
      {open && (
        <window.DmOverlay title="Missionsterminal · Spielleitung" padded={false} onClose={close}>
          {ready && App
            ? <App initialId={open.id} initialTab={open.tab} startCreate={open.create} />
            : <div style={{ padding:24, fontFamily:'var(--font-mono)', fontSize:12, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))' }}>◈ Lade Verwaltung …</div>}
        </window.DmOverlay>
      )}
    </div>
  );
}

window.MissionenDmBar = MissionenDmBar;

})();
