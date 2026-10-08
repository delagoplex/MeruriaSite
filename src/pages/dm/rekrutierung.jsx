// Page entry for /dm/rekrutierung.html: Rekrutierungsanfragen und -preise der SL in zwei Tabs
import '../../components/nav.jsx';
import '../../components/site-gate.jsx';
import '../../components/page-hero.jsx';
import '../parts/rekrutierung-anfragen.jsx';
import '../parts/rekrutierung-preise.jsx';

;(function () {
const { useState } = React;
const { SiteNav, SiteGate, PageHero } = window;

const TABS = [['anfragen', 'Anfragen'], ['preise', 'Preise']];
const startTab = () => {
  try { const t = new URLSearchParams(location.search).get('tab'); if (TABS.some(x => x[0] === t)) return t; } catch (e) {}
  return 'anfragen';
};

function App() {
  const [tab, setTab] = useState(startTab);
  const wechsle = k => {
    setTab(k);
    try { history.replaceState(null, '', location.pathname + '?tab=' + k); } catch (e) {}
  };
  const Anfragen = window.RekrutierungAnfragen, Preise = window.RekrutierungPreise;
  return (
    <SiteGate>
      <div style={{ minHeight:'calc(var(--vh, 1vh) * 100)', background:'var(--bg)' }}>
        <SiteNav/>
        <PageHero kicker="DM · Rekrutierung" title="Rekrutierung"
          sub={tab === 'anfragen'
            ? 'Anfragen der Spieler nach einem NSC. Nimm eine Anfrage an, gib dem NSC einen Namen, und er wird mit dem angefragten Statblock in der NSC-Verwaltung angelegt.'
            : 'Grundpreis in Hade pro Rang-Schritt — gilt für alle Divisionen gleich. Gebühr = Rangunterschied × Grundpreis des NSC-Rangs.'}/>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'32px 24px 80px' }}>
          <div style={{ display:'flex', gap:8, marginBottom:28, borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))' }}>
            {TABS.map(([k, l]) => {
              const on = tab === k;
              return (
                <button key={k} onClick={() => wechsle(k)} style={{ padding:'11px 22px', cursor:'pointer', marginBottom:-1,
                  fontFamily:'var(--font-mono)', fontSize:12, letterSpacing:'0.16em', textTransform:'uppercase',
                  background:on ? 'rgba(var(--purple-rgb),calc(0.16*var(--kp)))' : 'transparent',
                  border:'1px solid ' + (on ? 'rgba(var(--purple-rgb),calc(0.5*var(--kp)))' : 'transparent'),
                  borderBottom:on ? '1px solid var(--bg)' : '1px solid transparent', borderRadius:'4px 4px 0 0',
                  color:on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))' }}>{l}</button>
              );
            })}
          </div>
          {tab === 'anfragen' ? <Anfragen/> : <Preise/>}
        </div>
      </div>
    </SiteGate>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
})();
