// dm-mode.jsx — DM-Bedienelemente direkt in den Spielerseiten (/spiel/…).
// Exposes: window.useDmMode, window.DmModeToggle, window.loadDmScripts, window.DmOverlay
//
// Die Spielerseiten zeigen der Spielleitung zusätzliche Bedienelemente (anlegen, bearbeiten, freischalten).
// Der Umschalter blendet sie aus, damit die SL jederzeit sieht, was Spieler sehen. Das ist nur Oberfläche:
// den Zugriff auf die Daten regelt RLS. window.SITE_USER gibt es erst unterhalb von <SiteGate>.

const DM_MODE_KEY = 'dm_mode';
const DM_MODE_EVENT = 'dm-mode-change';

function readDmMode() {
  try { return localStorage.getItem(DM_MODE_KEY) !== 'off'; } catch (e) { return true; }
}

// { isDm, dmOn, setDmOn } — dmOn ist nur für die Spielleitung je true
function useDmMode() {
  const isDm = window.SITE_USER?.role === 'dm';
  const [on, setOn] = React.useState(readDmMode);
  React.useEffect(() => {
    const sync = () => setOn(readDmMode());
    window.addEventListener(DM_MODE_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => { window.removeEventListener(DM_MODE_EVENT, sync); window.removeEventListener('storage', sync); };
  }, []);
  const setDmOn = React.useCallback((v) => {
    try { localStorage.setItem(DM_MODE_KEY, v ? 'on' : 'off'); } catch (e) { /* privater Modus */ }
    window.dispatchEvent(new Event(DM_MODE_EVENT));
  }, []);
  return { isDm, dmOn: isDm && on, setDmOn };
}

// Umschalter „Spielleitung ⇄ Spieleransicht“; für Spieler unsichtbar
function DmModeToggle({ style }) {
  const { isDm, dmOn, setDmOn } = useDmMode();
  if (!isDm) return null;
  return (
    <button type="button" onClick={() => setDmOn(!dmOn)} aria-pressed={dmOn}
      title={dmOn ? 'Bedienelemente der Spielleitung sind sichtbar — klicken für die Spieleransicht' : 'Spieleransicht — klicken für die Bedienelemente der Spielleitung'}
      style={{
        display:'inline-flex', alignItems:'center', gap:8, cursor:'pointer',
        fontFamily:'var(--font-mono)', fontSize:11.5, letterSpacing:'0.18em', textTransform:'uppercase',
        padding:'6px 12px', borderRadius:3, border:'1px solid',
        background: dmOn ? 'rgba(var(--purple-rgb),calc(0.22*var(--kp)))' : 'rgba(var(--accent-rgb),calc(0.05*var(--ka)))',
        borderColor: dmOn ? 'rgba(var(--accent-rgb),calc(0.7*var(--ka)))' : 'rgba(var(--accent-rgb),calc(0.25*var(--ka)))',
        color: dmOn ? 'var(--white)' : 'rgba(var(--accent-rgb),calc(0.6*var(--ka) + var(--tb)))',
        transition:'all 0.15s', ...style,
      }}>
      <span aria-hidden="true">{dmOn ? '◈' : '◇'}</span>
      {dmOn ? 'Spielleitung' : 'Spieleransicht'}
    </button>
  );
}

// Klassische Daten-Scripts nur für die Spielleitung nachladen (Reihenfolge bleibt erhalten).
const _dmScriptCache = {};
function loadDmScripts(urls) {
  return (urls || []).reduce((chain, url) => chain.then(() => {
    if (_dmScriptCache[url]) return _dmScriptCache[url];
    _dmScriptCache[url] = new Promise((resolve, reject) => {
      const el = document.createElement('script');
      el.src = url;
      el.onload = () => resolve();
      el.onerror = () => { delete _dmScriptCache[url]; reject(new Error('Script konnte nicht geladen werden: ' + url)); };
      document.head.appendChild(el);
    });
    return _dmScriptCache[url];
  }), Promise.resolve());
}

// Vollbild-Ebene für DM-Werkzeuge über einer Spielerseite; sperrt das Scrollen der Seite.
function DmOverlay({ title, onClose, children, className, padded = true }) {
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);
  // Portal: sonst läge das Overlay im Stapelkontext des Elternelements (z. B. unter der Navigation)
  return ReactDOM.createPortal(
    <div className={'dm-overlay' + (className ? ' ' + className : '')} role="dialog" aria-modal="true" aria-label={title}
      style={{ position:'fixed', inset:0, zIndex:2000, display:'flex', flexDirection:'column', background:'var(--bg)' }}>
      <div style={{ flexShrink:0, height:48, display:'flex', alignItems:'center', gap:14, padding:'0 18px',
        borderBottom:'1px solid rgba(var(--accent-rgb),calc(0.28*var(--ka)))', background:'rgba(var(--purple-rgb),calc(0.14*var(--kp)))' }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:11.5, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--white)' }}>◈ {title}</span>
        <span style={{ flex:1 }} />
        <button type="button" onClick={onClose}
          style={{ fontFamily:'var(--font-mono)', fontSize:11.5, letterSpacing:'0.2em', textTransform:'uppercase', cursor:'pointer',
            padding:'6px 14px', borderRadius:3, color:'var(--white)',
            background:'rgba(var(--purple-rgb),calc(0.25*var(--kp)))', border:'1px solid rgba(var(--accent-rgb),calc(0.6*var(--ka)))' }}>
          Schließen ×
        </button>
      </div>
      <div style={{ flex:1, minHeight:0, overflow:'auto', padding: padded ? '18px' : 0 }}>{children}</div>
    </div>,
    document.body
  );
}

window.useDmMode = useDmMode;
window.DmModeToggle = DmModeToggle;
window.loadDmScripts = loadDmScripts;
window.DmOverlay = DmOverlay;
