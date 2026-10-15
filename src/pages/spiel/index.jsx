// Page entry for /spiel/index.html — Spiel-Seite: Kalender, Kürzliche Ereignisse, Gruppenstand,
// Missionsterminal, Kollektikon und Tageskarte (die letzten drei von der Startseite verlegt).
import '../../components/nav.jsx';
import '../../components/site-gate.jsx';
import '../../components/dm-mode.jsx';
import '../../components/particle-field.jsx';
import '../../components/heute-strip.jsx';
import '../../components/cta-button.jsx';
import '../../components/footer.jsx';
import '../parts/spiel-missionsterminal.jsx';
import '../parts/spiel-kollektikon.jsx';
import '../parts/spiel-tageskarte.jsx';
import '../parts/spiel-ereignisse.jsx';
import '../parts/spiel-gruppen.jsx';

;(function () {
const { useState, useCallback } = React;

// Unterseiten des Bereichs „Spiel“ (wie das Dropdown in der Navigation)
const UNTERSEITEN = [
  { label: 'Spielercharaktere', href: '/spiel/charaktere.html' },
  { label: 'Kontakte',          href: '/spiel/kontakte.html' },
  { label: 'Kollektikon',       href: '/spiel/kollektikon.html' },
  { label: 'Karte',             href: '/spiel/karte.html' },
  { label: 'Kalender',          href: '/spiel/kalender.html' },
  { label: 'Missionsterminal',  href: '/spiel/missionsterminal.html' },
  { label: 'Rekrutierung',      href: '/spiel/rekrutierung.html' },
];

/* Abschnittsüberschrift wie auf der Startseite: Sechseck + Titel + Linie */
function SectionHead({ label, mb = 24 }) {
  return (
    <div style={{ display:'flex', alignItems:'baseline', gap:18, marginBottom:mb }}>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:'12px', letterSpacing:'0.35em',
        color:'rgba(var(--purple-rgb),calc(0.65*var(--kp) + var(--tb)))', textTransform:'uppercase', display:'inline-flex', alignItems:'center' }}>
        <svg width="8" height="8" viewBox="0 0 8 8" style={{ flexShrink:0, marginRight:10 }}><polygon points="4,0.5 7.03,2.25 7.03,5.75 4,7.5 0.97,5.75 0.97,2.25" fill="rgba(var(--purple-rgb),calc(0.35*var(--kp)))" stroke="rgba(var(--accent-rgb),calc(0.6*var(--ka)))" strokeWidth="0.8"/></svg>
        {label}
      </span>
      <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(var(--purple-rgb),calc(0.5*var(--kp))), rgba(var(--purple-rgb),calc(0.05*var(--kp))))' }}/>
    </div>
  );
}

function Abschnitt({ children, padding = '40px 48px 16px' }) {
  return <section className="spiel-abschnitt" style={{ position:'relative', zIndex:5, padding, maxWidth:'1440px', margin:'0 auto' }}>{children}</section>;
}

function App() {
  const { SiteNav, SiteFooter, ParticleField, HeuteStrip, CTAButton, MissionsterminalSection, KollektikonSection, Tageskarte,
    SpielEreignisse, SpielGruppen } = window;
  const [maus, setMaus] = useState({ x: 0.5, y: 0.5 });
  const onMove = useCallback(e => window.throttledSet(setMaus, { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }), []);
  return (
    <div onMouseMove={onMove} style={{ position:'relative', minHeight:'calc(var(--vh, 1vh) * 100)' }}>
      <ParticleField mouseX={maus.x} mouseY={maus.y} />
      <SiteNav rightLabel="SPIEL" />

      {/* Kopf */}
      <Abschnitt padding="52px 48px 8px">
        <div style={{ fontFamily:'var(--font-mono)', fontSize:'11.5px', letterSpacing:'0.35em', textTransform:'uppercase',
          color:'rgba(var(--purple-rgb),calc(0.6*var(--kp) + var(--tb)))', marginBottom:10 }}>Meruria · Spiel</div>
        <h1 className="spiel-titel">Spiel</h1>
        <nav className="spiel-unterseiten" aria-label="Bereiche des Spiels">
          {UNTERSEITEN.map(u => <a key={u.href} href={u.href}>{u.label}</a>)}
        </nav>
      </Abschnitt>

      <Abschnitt padding="28px 48px 16px">
        <SectionHead label="Heute in Meruria" mb={18} />
        <HeuteStrip />
        <div style={{ marginTop:24 }}><CTAButton href="/spiel/kalender.html" label="Zum Kalender" /></div>
      </Abschnitt>

      {SpielEreignisse && (
        <Abschnitt>
          <SectionHead label="Kürzliche Ereignisse" mb={18} />
          <SpielEreignisse />
        </Abschnitt>
      )}

      {SpielGruppen && (
        <Abschnitt>
          <SectionHead label="Gruppen unterwegs" mb={18} />
          <SpielGruppen />
        </Abschnitt>
      )}

      <Abschnitt padding="48px 48px 24px"><MissionsterminalSection /></Abschnitt>
      <Abschnitt padding="48px 48px 24px"><KollektikonSection /></Abschnitt>
      <Abschnitt padding="56px 48px 64px">
        <Tageskarte />
        {window.SITE_USER?.role === 'dm' && <div style={{ marginTop:24 }}><CTAButton href="/dm/tarot.html" label="Komplettes Tarot-Deck" /></div>}
      </Abschnitt>
      <SiteFooter />
    </div>
  );
}

const { SiteGate } = window;
ReactDOM.createRoot(document.getElementById('root')).render(<SiteGate><App /></SiteGate>);
})();
