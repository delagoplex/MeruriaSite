// Page entry for /spiel/charaktere.html — „SC“: alle Spielercharaktere und die eigenen Charaktere in zwei Tabs.
// Die Spielleitung schaltet in der Übersicht Charaktere sichtbar/verborgen; alles Weitere liegt am Steckbrief.
import '../../components/nav.jsx';
import '../../components/site-gate.jsx';
import '../../components/char-age.jsx';
import '../../components/dm-mode.jsx';
import '../../components/image-upload.jsx';
import '../../components/steckbrief-components.jsx';
import '../../components/school-icon.jsx';
import '../../components/damage-icon.jsx';
import '../parts/sc-uebersicht.jsx';
import '../parts/sc-meine.jsx';

;(function () {
const { useState } = React;

const TABS = [['alle', 'Spielercharaktere'], ['meine', 'Meine Charaktere']];
function startTab() {
  const t = new URLSearchParams(window.location.search).get('tab');
  return TABS.some(([k]) => k === t) ? t : 'alle';
}

function Tabs() {
  const [tab, setTab] = useState(startTab);
  const pick = (k) => {
    setTab(k);
    window.history.replaceState(null, '', window.location.pathname + (k === 'alle' ? '' : '?tab=' + k));
  };
  // Globals erst beim Rendern lesen: die Parts registrieren sich beim Import
  const { SiteNav, ScUebersicht, ScMeine } = window;
  return (
    <div>
      <SiteNav />
      <div role="tablist" aria-label="Charaktere" style={{ position:'relative', zIndex:20, display:'flex', justifyContent:'center', gap:4, padding:'14px 16px 0',
        borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.18*var(--kp)))', background:'rgba(var(--bg-rgb),0.6)' }}>
        {TABS.map(([k, label]) => (
          <button key={k} type="button" role="tab" aria-selected={tab === k} onClick={() => pick(k)}
            style={{ padding:'10px 22px', cursor:'pointer', background:'transparent', border:'none',
              fontFamily:'var(--font-mono)', fontSize:12, letterSpacing:'0.24em', textTransform:'uppercase', transition:'all 0.15s',
              color: tab === k ? 'var(--white)' : 'rgba(var(--accent-rgb),calc(0.55*var(--ka) + var(--tb)))',
              borderBottom: `2px solid ${tab === k ? 'rgba(var(--accent-rgb),calc(0.85*var(--ka)))' : 'transparent'}` }}>
            {label}
          </button>
        ))}
      </div>
      {tab === 'alle' ? <ScUebersicht /> : <ScMeine />}
    </div>
  );
}

const { SiteGate } = window;
ReactDOM.createRoot(document.getElementById('root')).render(<SiteGate><Tabs /></SiteGate>);

})();
