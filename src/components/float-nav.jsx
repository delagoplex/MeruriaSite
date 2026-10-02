// float-nav.jsx — floating scroll navigation buttons
// Exposes: window.FloatNav
// Shows scroll-to-top always; shows scroll-to-statblock when #statblock exists on the page.

const { useState, useEffect } = React;

function FloatNav() {
  const [hasStatblock, setHasStatblock] = useState(false);

  useEffect(() => {
    setHasStatblock(!!document.getElementById('statblock'));
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const toStatblock = () => {
    const el = document.getElementById('statblock');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ position: 'fixed', right: '20px', bottom: '28px', zIndex: 200, display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <button className="float-nav-btn" onClick={toTop} title="Nach oben">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 10l4-4 4 4"/>
        </svg>
      </button>
      {hasStatblock && (
        <button className="float-nav-btn" onClick={toStatblock} title="Zum Statblock">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="2" width="10" height="12" rx="1.5"/>
            <line x1="6" y1="6" x2="10" y2="6"/>
            <line x1="6" y1="9" x2="10" y2="9"/>
            <line x1="6" y1="12" x2="9" y2="12"/>
          </svg>
        </button>
      )}
    </div>
  );
}

window.FloatNav = FloatNav;
