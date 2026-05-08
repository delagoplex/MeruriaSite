// nav.jsx — shared site navigation bar
// Exposes: window.SiteNav

(function injectNavStyles() {
  if (document.getElementById('meruria-nav-styles')) return;
  const s = document.createElement('style');
  s.id = 'meruria-nav-styles';
  s.textContent = `
    @keyframes flicker-mid { 0%,80%,100%{opacity:1} 82%{opacity:0.55} 84%{opacity:1} 87%{opacity:0.7} 89%{opacity:1} 91%{opacity:0.4} 93%{opacity:1} }
    @keyframes slideDown { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
    @keyframes neu-bg-glitch {
      0%  { opacity:0; clip-path:inset(50% 0 50% 0); background:transparent; }
      5%  { opacity:1; clip-path:inset(0% 0 72% 0);  transform:translateX(-8px);  background:rgba(124,77,255,0.45); }
      15% { clip-path:inset(55% 0 8% 0);             transform:translateX(10px);  background:rgba(180,140,255,0.50); }
      25% { clip-path:inset(18% 0 48% 0);            transform:translateX(-6px);  background:rgba(80,50,200,0.40); }
      35% { clip-path:inset(68% 0 4% 0);             transform:translateX(8px);   background:rgba(180,140,255,0.45); }
      45% { clip-path:inset(8% 0 62% 0);             transform:translateX(-5px);  background:rgba(124,77,255,0.35); }
      55% { clip-path:inset(40% 0 20% 0);            transform:translateX(6px);   background:rgba(80,50,200,0.30); }
      70% { opacity:0.4; }
      100%{ opacity:0; }
    }
    @keyframes neu-bg-glitch2 {
      0%  { opacity:0; clip-path:inset(50% 0 50% 0); background:transparent; }
      8%  { opacity:1; clip-path:inset(58% 0 0% 0);  transform:translateX(12px) scaleX(1.03); background:rgba(180,140,255,0.55); }
      18% { clip-path:inset(4% 0 58% 0);             transform:translateX(-10px);             background:rgba(124,77,255,0.48); }
      28% { clip-path:inset(32% 0 28% 0);            transform:translateX(8px);               background:rgba(80,50,200,0.45); }
      38% { clip-path:inset(78% 0 0% 0);             transform:translateX(-7px);              background:rgba(180,140,255,0.40); }
      50% { clip-path:inset(12% 0 45% 0);            transform:translateX(6px);               background:rgba(124,77,255,0.32); }
      70% { opacity:0.3; }
      100%{ opacity:0; }
    }
    @keyframes neu-scanline {
      0%  { opacity:0;   top:0%; }
      5%  { opacity:0.9; top:10%; }
      15% { top:75%; }
      25% { top:35%; }
      35% { top:90%; }
      45% { top:20%; }
      55% { top:60%; }
      70% { opacity:0.3; top:50%; }
      100%{ opacity:0; }
    }
    @keyframes neu-txt-main {
      0%  { transform:translate(0,0) skewX(0); }
      8%  { transform:translate(-5px,0) skewX(-1deg); }
      16% { transform:translate(5px,0)  skewX(1deg); }
      24% { transform:translate(-4px,0) skewX(-0.6deg); }
      32% { transform:translate(4px,0)  skewX(0.6deg); }
      40% { transform:translate(-2px,0); }
      50% { transform:translate(2px,0)  skewX(-0.3deg); }
      65% { transform:translate(0,0); }
      100%{ transform:translate(0,0) skewX(0); }
    }
    @keyframes neu-txt-a {
      0%  { opacity:0;   clip-path:inset(50% 0 50% 0); transform:translate(0,0); }
      5%  { opacity:0.9; clip-path:inset(10% 0 50% 0); transform:translate(-6px,0); }
      15% { clip-path:inset(60% 0 5% 0);  transform:translate(7px,0); }
      25% { clip-path:inset(25% 0 38% 0); transform:translate(-5px,0); }
      35% { clip-path:inset(75% 0 0% 0);  transform:translate(6px,0); }
      45% { clip-path:inset(5% 0 55% 0);  transform:translate(-4px,0); }
      60% { opacity:0.5; clip-path:inset(40% 0 20% 0); }
      80% { opacity:0; }
      100%{ opacity:0; }
    }
    @keyframes neu-txt-b {
      0%  { opacity:0;    clip-path:inset(50% 0 50% 0); transform:translate(0,0); }
      8%  { opacity:0.75; clip-path:inset(38% 0 22% 0); transform:translate(7px,0); }
      18% { clip-path:inset(4% 0 65% 0);  transform:translate(-6px,0); }
      28% { clip-path:inset(52% 0 12% 0); transform:translate(5px,0); }
      38% { clip-path:inset(15% 0 45% 0); transform:translate(-5px,0); }
      50% { clip-path:inset(70% 0 5% 0);  transform:translate(4px,0); }
      65% { opacity:0.4; }
      85% { opacity:0; }
      100%{ opacity:0; }
    }
  `;
  document.head.appendChild(s);
})();

const { useState, useEffect, useRef } = React;

const NAV = [
  { id: 'einleitung', label: 'Einleitung', items: [{ label: 'Informationen', href: '#' }, { label: 'Vorgeschichte', href: '#' }, { label: 'Sitzung Null', href: '#'}] },
  { id: 'spielerhandbuch', label: 'Spielerhandbuch', items: [{ label: 'Realismus', href: '#' }, { label: 'Handwerk', href: '#' }, { label: 'Schutzherren', href: '#'}, { label: 'Gesinnungen', href: '#'}, { label: 'Regierungsformen', href: '#'}] },
  { id: 'charaktererstellung', label: 'Charaktererstellung', items: [{ label: 'Neuer Charakter', href: '#', dividerAfter: true }, { label: 'Rassen', href: 'Rassen.html' }, { label: 'Klassen', href: 'Klassen.html' }, { label: 'Talente', href: 'Talente.html' }, { label: 'Hintergründe', href: 'Hintergruende.html' }, { label: 'Zauber', href: 'Zauber.html' }, { label: 'Ausrüstung', href: 'Ausrüstung.html' }] },
  { id: 'enzyklopaedie', label: 'Enzyklopädie', items: [{ label: 'Völker', href: '#' }, { label: 'Orte', href: '#' }, { label: 'Organisationen', href: '#' }, { label: 'Gottheiten', href: 'Gottheiten.html' }, { label: 'Religionen', href: '#' }, { label: 'Monster', href: 'Monster.html' }] },
  { id: 'divisionen', label: 'Divisionen', items: [{ label: 'I — Die Kuratoren', href: 'Die Kuratoren.html' }, { label: 'II — Die Sturmritter', href: 'Sturmritter.html' }, { label: 'III — Die Sentinels', href: 'Sentinels.html' }, { label: 'IV — Die Friedenshüter', href: 'Friedenshueter.html' }, { label: 'V — Die Outfitters', href: 'Outfitters.html' }, { label: 'VI — Die Pathfinders', href: 'Pathfinders.html' }, { label: 'VII — Die Quellensucher', href: 'Quellensucher.html' }, { label: 'VIII — Die Bergungsgarde', href: 'Bergungsgarde.html' }] },
  { id: 'charaktere', label: 'Charaktere', items: [{ label: 'Spielercharaktere', href: '#' }, { label: 'NSC', href: '#' }] },
  { id: 'galerie', label: 'Galerie', href: 'galerie.html' }
];

function NavItem({ tab }) {
  const [open, setOpen] = useState(false);
  const [glitchKey, setGlitchKey] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const t = useRef(null);
  const glitchInterval = useRef(null);
  const glitchTimeout = useRef(null);

  const fireGlitch = () => {
    setGlitchActive(false);
    clearTimeout(glitchTimeout.current);
    glitchTimeout.current = setTimeout(() => {
      setGlitchKey(k => k + 1);
      setGlitchActive(true);
    }, 20);
  };

  const show = () => {
    clearTimeout(t.current);
    if (!open) {
      setOpen(true);
      clearInterval(glitchInterval.current);
      clearTimeout(glitchTimeout.current);
      glitchTimeout.current = setTimeout(() => {
        fireGlitch();
        glitchInterval.current = setInterval(fireGlitch, 2800);
      }, 400);
    }
  };
  const hide = () => {
    t.current = setTimeout(() => {
      setOpen(false);
      setGlitchActive(false);
      clearInterval(glitchInterval.current);
    }, 300);
  };

  useEffect(() => () => {
    clearTimeout(t.current);
    clearTimeout(glitchTimeout.current);
    clearInterval(glitchInterval.current);
  }, []);

  const dur = '1.4s';

  if (tab.href) {
    return (
      <a href={tab.href} style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: '400', letterSpacing: '0.18em', padding: '10px 20px', background: 'transparent', border: '1px solid rgba(160,140,255,0.15)', color: 'rgba(200,190,240,0.7)', borderRadius: '3px', transition: 'all 0.2s', textTransform: 'uppercase', whiteSpace: 'nowrap', textDecoration: 'none', display: 'inline-block' }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#f0eeff'; e.currentTarget.style.borderColor = 'rgba(160,140,255,0.45)'; e.currentTarget.style.background = 'rgba(124,77,255,0.1)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(200,190,240,0.7)'; e.currentTarget.style.borderColor = 'rgba(160,140,255,0.15)'; e.currentTarget.style.background = 'transparent'; }}>
        {tab.label}
      </a>
    );
  }

  return (
    <div onMouseEnter={show} onMouseLeave={hide} style={{ position: 'relative' }}>
      <button style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: '400', letterSpacing: '0.18em', padding: '10px 20px', background: 'transparent', border: '1px solid rgba(160,140,255,0.15)', color: 'rgba(200,190,240,0.7)', cursor: 'pointer', borderRadius: '3px', transition: 'all 0.2s', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#f0eeff'; e.currentTarget.style.borderColor = 'rgba(160,140,255,0.45)'; e.currentTarget.style.background = 'rgba(124,77,255,0.1)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(200,190,240,0.7)'; e.currentTarget.style.borderColor = 'rgba(160,140,255,0.15)'; e.currentTarget.style.background = 'transparent'; }}>
        {tab.label}
      </button>
      {open &&
        <div onMouseEnter={show} onMouseLeave={hide} style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, minWidth: '180px', background: 'rgba(8,6,22,0.96)', border: '1px solid rgba(160,140,255,0.2)', borderRadius: '4px', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', animation: 'slideDown 0.18s ease forwards', zIndex: 200, backdropFilter: 'blur(12px)' }}>
          {tab.items.map((item, i) =>
            <React.Fragment key={i}>
              {item.dividerAfter ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  {glitchActive && <div key={`bga-${glitchKey}`} aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, animation: `neu-bg-glitch ${dur} ease forwards` }} />}
                  {glitchActive && <div key={`bgb-${glitchKey}`} aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, animation: `neu-bg-glitch2 ${dur} ease forwards` }} />}
                  {glitchActive && <div key={`sc-${glitchKey}`} aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, height: '2px', background: 'rgba(200,185,255,0.7)', pointerEvents: 'none', zIndex: 1, animation: `neu-scanline ${dur} ease forwards` }} />}
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    {glitchActive && <div key={`txa-${glitchKey}`} aria-hidden="true" style={{ position: 'absolute', inset: 0, padding: '10px 18px', fontFamily: 'var(--font-body)', fontWeight: '500', fontSize: '12px', letterSpacing: '0.1em', color: '#c9b8ff', pointerEvents: 'none', zIndex: 1, animation: `neu-txt-a ${dur} ease forwards` }}>{item.label}</div>}
                    {glitchActive && <div key={`txb-${glitchKey}`} aria-hidden="true" style={{ position: 'absolute', inset: 0, padding: '10px 18px', fontFamily: 'var(--font-body)', fontWeight: '500', fontSize: '12px', letterSpacing: '0.1em', color: '#7c4dff', pointerEvents: 'none', zIndex: 1, animation: `neu-txt-b ${dur} ease forwards` }}>{item.label}</div>}
                    <a key={`lnk-${glitchKey}`} href={item.href} style={{ display: 'block', padding: '10px 18px', fontFamily: 'var(--font-body)', fontWeight: '500', fontSize: '12px', letterSpacing: '0.1em', color: '#c9b8ff', textDecoration: 'none', transition: 'color 0.15s, padding-left 0.15s', textShadow: '0 0 10px rgba(124,77,255,0.8), 0 0 20px rgba(124,77,255,0.4)', background: 'rgba(124,77,255,0.08)', position: 'relative', zIndex: 2, ...(glitchActive ? { animation: `neu-txt-main ${dur} ease forwards` } : {}) }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#f0eeff'; e.currentTarget.style.background = 'rgba(124,77,255,0.18)'; e.currentTarget.style.paddingLeft = '24px'; e.currentTarget.style.textShadow = '0 0 14px rgba(160,140,255,1), 0 0 28px rgba(124,77,255,0.6)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#c9b8ff'; e.currentTarget.style.background = 'rgba(124,77,255,0.08)'; e.currentTarget.style.paddingLeft = '18px'; e.currentTarget.style.textShadow = '0 0 10px rgba(124,77,255,0.8), 0 0 20px rgba(124,77,255,0.4)'; }}>
                      {item.label}
                    </a>
                  </div>
                </div>
              ) : (
                <a href={item.href} style={{ display: 'block', padding: '10px 18px', fontFamily: 'var(--font-body)', fontWeight: '300', fontSize: '12px', letterSpacing: '0.1em', color: 'rgba(200,190,240,0.65)', textDecoration: 'none', borderBottom: i < tab.items.length - 1 ? '1px solid rgba(160,140,255,0.08)' : 'none', transition: 'all 0.15s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#f0eeff'; e.currentTarget.style.background = 'rgba(124,77,255,0.12)'; e.currentTarget.style.paddingLeft = '24px'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(200,190,240,0.65)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '18px'; }}>
                  {item.label}
                </a>
              )}
              {item.dividerAfter && <div style={{ height: '1px', background: 'rgba(160,140,255,0.2)', margin: '2px 0' }} />}
            </React.Fragment>
          )}
        </div>
      }
    </div>
  );
}

function SiteNav({ rightLabel }) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%', background: 'rgba(5,4,15,0.92)', borderBottom: '1px solid rgba(160,140,255,0.1)', backdropFilter: 'blur(16px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 24px', height: '52px' }}>
        <a href="index.html" style={{ marginRight: '70px', whiteSpace: 'nowrap', flexShrink: 0, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '300', letterSpacing: '0.3em', color: '#f0eeff', textShadow: '0 0 28px rgba(124,77,255,0.55)', animation: 'flicker-mid 9s infinite' }}>MERURIA</span>
        </a>
        <nav style={{ display: 'flex', gap: '6px', alignItems: 'center', flex: 1 }}>
          {NAV.map((tab) => <NavItem key={tab.id} tab={tab} />)}
        </nav>
        {rightLabel && (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'rgba(160,140,255,0.35)', letterSpacing: '0.15em', flexShrink: 0 }}>{rightLabel}</div>
        )}
      </div>
    </div>
  );
}

window.SiteNav = SiteNav;
