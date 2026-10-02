// Page entry for /spielerhandbuch/sammeln-und-handwerk.html
import '../../components/nav.jsx';
import '../../components/site-gate.jsx';
import '../../components/page-hero.jsx';
import '../parts/sammeln-ui.jsx';
import '../parts/sammeln-alchemie-mixer.jsx';
import '../parts/sammeln-handwerksrechner.jsx';
import '../parts/sammeln-simulator.jsx';
import '../parts/sammeln-kapitel.jsx';

;(function () {
// top-level functions were global in the old classic-script setup
Object.assign(window, { App });

const { useState: useStateApp, useEffect: useEffectApp } = React;
const { SiteNav } = window;

function App() {
  const [activeId, setActiveId] = useStateApp(() => {
    return localStorage.getItem('meruria.craft.chapter') || 'uebersicht';
  });

  useEffectApp(() => {
    localStorage.setItem('meruria.craft.chapter', activeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeId]);

  const chapter = window.CRAFT_CHAPTERS.find(c => c.id === activeId);
  const ToolView = activeId === 'mixer' ? AlchemyMixer
                 : activeId === 'rechner' ? HandwerksRechner
                 : activeId === 'simulator' ? SammelSimulator
                 : null;

  // Find prev/next within the chapter list
  const chIdx = window.CRAFT_CHAPTERS.findIndex(c => c.id === activeId);
  const prev = chIdx > 0 ? window.CRAFT_CHAPTERS[chIdx - 1] : null;
  const next = chIdx >= 0 && chIdx < window.CRAFT_CHAPTERS.length - 1 ? window.CRAFT_CHAPTERS[chIdx + 1] : null;

  return (
    <>
      <SiteNav />
      {activeId === 'uebersicht' && (
        <PageHero
          kicker="Spielerhandbuch"
          title="Sammeln & Handwerk"
          sub="Vom Wegrand zur Werkbank — wie Pflanzen, Mineralien und Kreaturenteile zu Tränken, Klingen und magischen Artefakten werden. Material schlägt Zeit, Entscheidungen schlagen Rezepte."
        />
      )}
      <div style={{ display:'flex', position:'relative', zIndex:1 }}>
        <CraftSidebar chapters={window.CRAFT_CHAPTERS} activeId={activeId} onSelect={setActiveId} />
        <main style={{
          flex: 1, padding:'0 36px 60px',
          maxWidth:'calc(100vw - var(--sidebar-w))',
          minWidth: 0,
        }}>
          <div style={{
            maxWidth:'1080px', margin:'0 auto',
            paddingTop: activeId === 'uebersicht' ? '0' : '40px',
            animation:'fadeInUp 0.4s ease',
          }} key={activeId}>
            {chapter && chapter.render({ goTo: setActiveId })}

            {ToolView && (
              <>
                <SH
                  mono={activeId === 'mixer' ? 'Werkbank · Alchemie' : activeId === 'rechner' ? 'Werkbank · Handwerk' : 'Werkbank · Sammeln'}
                  title={activeId === 'mixer' ? 'Alchemie-Mixer' : activeId === 'rechner' ? 'Handwerks-Rechner' : 'Sammel-Simulator'}
                />
                <ToolView />
              </>
            )}

            {/* Prev / next */}
            {chapter && (
              <nav style={{
                display:'flex', justifyContent:'space-between', alignItems:'stretch',
                gap:'14px', marginTop:'48px', paddingTop:'24px',
                borderTop:'1px solid rgba(124,77,255,0.15)',
              }}>
                {prev ? (
                  <button onClick={()=>setActiveId(prev.id)} style={navBtnStyle}>
                    <div style={navBtnLabelStyle}>← Vorheriges Kapitel</div>
                    <div style={navBtnTitleStyle}>{prev.roman} · {prev.label}</div>
                  </button>
                ) : <div style={{flex:1}}/>}
                {next ? (
                  <button onClick={()=>setActiveId(next.id)} style={{...navBtnStyle, textAlign:'right'}}>
                    <div style={navBtnLabelStyle}>Nächstes Kapitel →</div>
                    <div style={navBtnTitleStyle}>{next.roman} · {next.label}</div>
                  </button>
                ) : <div style={{flex:1}}/>}
              </nav>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

const navBtnStyle = {
  flex:1, padding:'12px 16px', background:'rgba(10,8,28,0.4)',
  border:'1px solid rgba(124,77,255,0.2)', borderRadius:'4px',
  cursor:'pointer', transition:'all 0.2s', textAlign:'left',
  display:'flex', flexDirection:'column', gap:'4px',
};
const navBtnLabelStyle = {
  fontFamily:'var(--font-mono)', fontSize:'9px', letterSpacing:'0.2em',
  color:'rgba(160,140,255,0.55)', textTransform:'uppercase',
};
const navBtnTitleStyle = {
  fontFamily:'var(--font-display)', fontSize:'13px', letterSpacing:'0.14em',
  color:'rgba(220,210,250,0.9)', textTransform:'uppercase',
};

ReactDOM.createRoot(document.getElementById('root')).render(<SiteGate><App /></SiteGate>);

})();

