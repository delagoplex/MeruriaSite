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
      5%  { opacity:1; clip-path:inset(0% 0 72% 0);  transform:translateX(-8px);  background:rgba(var(--purple-rgb),calc(0.45*var(--kp))); }
      15% { clip-path:inset(55% 0 8% 0);             transform:translateX(10px);  background:rgba(var(--accent-rgb),calc(0.50*var(--ka))); }
      25% { clip-path:inset(18% 0 48% 0);            transform:translateX(-6px);  background:rgba(80,50,200,0.40); }
      35% { clip-path:inset(68% 0 4% 0);             transform:translateX(8px);   background:rgba(var(--accent-rgb),calc(0.45*var(--ka))); }
      45% { clip-path:inset(8% 0 62% 0);             transform:translateX(-5px);  background:rgba(var(--purple-rgb),calc(0.35*var(--kp))); }
      55% { clip-path:inset(40% 0 20% 0);            transform:translateX(6px);   background:rgba(80,50,200,0.30); }
      70% { opacity:0.4; }
      100%{ opacity:0; }
    }
    @keyframes neu-bg-glitch2 {
      0%  { opacity:0; clip-path:inset(50% 0 50% 0); background:transparent; }
      8%  { opacity:1; clip-path:inset(58% 0 0% 0);  transform:translateX(12px) scaleX(1.03); background:rgba(var(--accent-rgb),calc(0.55*var(--ka))); }
      18% { clip-path:inset(4% 0 58% 0);             transform:translateX(-10px);             background:rgba(var(--purple-rgb),calc(0.48*var(--kp))); }
      28% { clip-path:inset(32% 0 28% 0);            transform:translateX(8px);               background:rgba(80,50,200,0.45); }
      38% { clip-path:inset(78% 0 0% 0);             transform:translateX(-7px);              background:rgba(var(--accent-rgb),calc(0.40*var(--ka))); }
      50% { clip-path:inset(12% 0 45% 0);            transform:translateX(6px);               background:rgba(var(--purple-rgb),calc(0.32*var(--kp))); }
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
    .meruria-hamburger { display: none; }
    @media (max-width: 1024px) {
      .meruria-logo { margin-right: auto !important; }
      .meruria-desktop-nav { display: none !important; }
      .meruria-hamburger { display: inline-flex !important; align-items: center; justify-content: center; }
    }
    @media (max-width: 768px) {
      .meruria-nav-label { display: none !important; }
    }
    @media (max-width: 480px) {
      .meruria-nav-row { padding: 0 12px !important; }
      .meruria-logo span { font-size: 17px !important; letter-spacing: 0.22em !important; }
    }
  `;
  document.head.appendChild(s);
})();

(function() {
  const saved = localStorage.getItem('theme');
  document.documentElement.dataset.theme = (saved === 'light') ? 'light' : 'dark';
})();

const { useState, useEffect, useRef } = React;

const NAV = [
  {
    id: 'spielerhandbuch', label: 'Spielerhandbuch', href: '/spielerhandbuch/index.html',
    items: [
      { label: 'Informationen', href: '/spielerhandbuch/informationen.html' },
      { label: 'Vorgeschichte', href: '/spielerhandbuch/vorgeschichte.html' },
      { label: 'Sitzung Null', href: '#', dividerAfter: true, glitch: false },
      { label: 'Realismus', href: '/spielerhandbuch/realismus.html' },
      { label: 'Sammeln & Handwerk', href: '/spielerhandbuch/sammeln-und-handwerk.html' },
      { label: 'Schutzherren', href: '/spielerhandbuch/schutzherren.html' },
      { label: 'Gesinnungen', href: '#' },
      { label: 'Regierungsformen', href: '#' },
    ],
  },
  {
    id: 'charaktererstellung', label: 'Charaktererstellung', href: '/charaktererstellung/index.html',
    items: [
      { label: 'Neuer Charakter', href: '/charaktererstellung/neuer-charakter.html', dividerAfter: true },
      { label: 'Rassen', href: '/charaktererstellung/rassen.html' },
      { label: 'Klassen', href: '/charaktererstellung/klassen.html' },
      { label: 'Talente', href: '/charaktererstellung/talente.html' },
      { label: 'Hintergründe', href: '/charaktererstellung/hintergruende.html' },
      { label: 'Zauber', href: '/charaktererstellung/zauber.html' },
      { label: 'Ausrüstung', href: '/charaktererstellung/ausruestung.html' },
    ],
  },
  {
    id: 'enzyklopaedie', label: 'Enzyklopädie', href: '/enzyklopaedie/index.html',
    items: [
      { label: 'Völker', href: '#' },
      { label: 'Orte', href: '#' },
      { label: 'Organisationen', href: '#' },
      { label: 'Gottheiten', href: '/enzyklopaedie/gottheiten.html' },
      { label: 'Religionen', href: '#' },
      { label: 'Galerie', href: '/enzyklopaedie/galerie.html', highlight: true },
    ],
  },
  {
    id: 'divisionen', label: 'Divisionen', href: '/divisionen/index.html',
    items: [
      { label: 'I — Die Kuratoren', href: '/divisionen/kuratoren.html' },
      { label: 'II — Die Sturmritter', href: '/divisionen/sturmritter.html' },
      { label: 'III — Die Sentinels', href: '/divisionen/sentinels.html' },
      { label: 'IV — Die Friedenshüter', href: '/divisionen/friedenshueter.html' },
      { label: 'V — Die Outfitters', href: '/divisionen/outfitters.html' },
      { label: 'VI — Die Pathfinders', href: '/divisionen/pathfinders.html' },
      { label: 'VII — Die Quellensucher', href: '/divisionen/quellensucher.html' },
      { label: 'VIII — Die Bergungsgarde', href: '/divisionen/bergungsgarde.html' },
    ],
  },
  {
    id: 'charaktere', label: 'Charaktere', href: '/charaktere/index.html',
    items: [
      { label: 'Meine Charaktere', href: '/charaktere/mein-charakter.html' },
      { label: 'Spielercharaktere', href: '/charaktere/spielercharaktere.html' },
      { label: 'NSC', href: '/charaktere/nsc.html' },
    ],
  },
  {
    id: 'tools', label: 'Spiel',
    items: [
      { label: 'Kollektikon', href: '/spiel/kollektikon.html' },
      { label: 'Karte', href: '/spiel/karte.html' },
      { label: 'Kalender', href: '/spiel/kalender.html' },
      { label: 'Missionsterminal', href: '/spiel/missionsterminal.html' },
      { label: 'Rekrutierung', href: '/spiel/rekrutierung.html' },
    ],
  },
  {
    id: 'dm-bereich', label: 'DM-Bereich',
    items: [
      { label: 'Monster', href: '/dm/monster.html', locked: true },
      { label: 'Ressourcen', href: '/dm/ressourcen.html', locked: true },
      { label: 'Kollektikon-Verwaltung', href: '/dm/kollektikon.html', locked: true },
      { label: 'Tarot', href: '/dm/tarot.html', locked: true },
      { label: 'Kampfsimulation', href: '/dm/kampfsimulation.html', locked: true },
      { label: 'Missionen', href: '/dm/missionen.html', locked: true },
      { label: 'NSC-Verwaltung', href: '/dm/nsc-verwaltung.html', locked: true },
      { label: 'Charakterverwaltung', href: '/dm/charakterverwaltung.html', locked: true },
      { label: 'Kartenmanagement', href: '/dm/kartenmanagement.html', locked: true },
      { label: 'Kolonisierung & Bau', href: '/dm/kolonisierung-und-bau.html', locked: true },
      { label: 'Rekrutierung', href: '/dm/rekrutierung.html', locked: true },
      { label: 'Rezeptverwaltung', href: '/dm/rezeptverwaltung.html', locked: true },
      { label: 'Segen & Flüche', href: '/dm/segen-und-flueche.html', locked: true },
    ],
  },
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

  const triggerStyle = { fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: '400', letterSpacing: '0.18em', padding: '10px 20px', background: 'transparent', border: '1px solid var(--nav-btn-border)', color: 'var(--nav-text)', borderRadius: '3px', transition: 'all 0.2s', textTransform: 'uppercase', whiteSpace: 'nowrap', textDecoration: 'none', display: 'inline-block', cursor: 'pointer' };
  const triggerHoverOn  = (e) => { e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.borderColor = 'var(--nav-btn-hover-border)'; e.currentTarget.style.background = 'var(--nav-btn-hover-bg)'; };
  const triggerHoverOff = (e) => { e.currentTarget.style.color = 'var(--nav-text)'; e.currentTarget.style.borderColor = 'var(--nav-btn-border)'; e.currentTarget.style.background = 'transparent'; };

  if (tab.href && !tab.items) {
    return (
      <a href={tab.href} style={triggerStyle} onMouseEnter={triggerHoverOn} onMouseLeave={triggerHoverOff}>
        {tab.label}
      </a>
    );
  }

  return (
    <div onMouseEnter={show} onMouseLeave={hide} style={{ position: 'relative' }}>
      {tab.href
        ? <a href={tab.href} style={triggerStyle} onMouseEnter={triggerHoverOn} onMouseLeave={triggerHoverOff}>{tab.label}</a>
        : <button style={triggerStyle} onMouseEnter={triggerHoverOn} onMouseLeave={triggerHoverOff}>{tab.label}</button>
      }
      {open &&
        <div onMouseEnter={show} onMouseLeave={hide} style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, minWidth: '180px', background: 'var(--nav-dropdown-bg)', border: '1px solid var(--nav-dropdown-border)', borderRadius: '4px', boxShadow: '0 8px 32px rgba(var(--shadow-rgb),calc(0.35 * var(--shadow-k)))', animation: 'slideDown 0.18s ease forwards', zIndex: 200, backdropFilter: 'blur(12px)' }}>
          {tab.items.map((item, i) =>
            <React.Fragment key={i}>
              {item.highlight ? (
                <a href={item.href} style={{ display:'block', padding:'10px 18px', fontFamily:'var(--font-body)', fontWeight:'500', fontSize:'12px', letterSpacing:'0.1em', color:'var(--lav)', textDecoration:'none', transition:'color 0.15s, padding-left 0.15s, background 0.15s', textShadow:'0 0 10px rgba(var(--purple-rgb),calc(0.7*var(--kp))), 0 0 20px rgba(var(--purple-rgb),calc(0.35*var(--kp)))', background:'rgba(var(--purple-rgb),calc(0.18*var(--kp)))' }}
                  onMouseEnter={e => { e.currentTarget.style.color='var(--white)'; e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.18*var(--kp)))'; e.currentTarget.style.paddingLeft='24px'; e.currentTarget.style.textShadow='0 0 14px rgba(var(--purple-rgb),calc(1*var(--kp))), 0 0 28px rgba(var(--purple-rgb),calc(0.6*var(--kp)))'; }}
                  onMouseLeave={e => { e.currentTarget.style.color='var(--lav)'; e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.18*var(--kp)))'; e.currentTarget.style.paddingLeft='18px'; e.currentTarget.style.textShadow='0 0 10px rgba(var(--purple-rgb),calc(0.7*var(--kp))), 0 0 20px rgba(var(--purple-rgb),calc(0.35*var(--kp)))'; }}>
                  {item.label}
                </a>
              ) : item.dividerAfter && item.glitch !== false ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  {glitchActive && <div key={`bga-${glitchKey}`} aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, animation: `neu-bg-glitch ${dur} ease forwards` }} />}
                  {glitchActive && <div key={`bgb-${glitchKey}`} aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, animation: `neu-bg-glitch2 ${dur} ease forwards` }} />}
                  {glitchActive && <div key={`sc-${glitchKey}`} aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, height: '2px', background: 'rgba(200,185,255,0.7)', pointerEvents: 'none', zIndex: 1, animation: `neu-scanline ${dur} ease forwards` }} />}
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    {glitchActive && <div key={`txa-${glitchKey}`} aria-hidden="true" style={{ position: 'absolute', inset: 0, padding: '10px 18px', fontFamily: 'var(--font-body)', fontWeight: '500', fontSize: '12px', letterSpacing: '0.1em', color: 'var(--lav)', pointerEvents: 'none', zIndex: 1, animation: `neu-txt-a ${dur} ease forwards` }}>{item.label}</div>}
                    {glitchActive && <div key={`txb-${glitchKey}`} aria-hidden="true" style={{ position: 'absolute', inset: 0, padding: '10px 18px', fontFamily: 'var(--font-body)', fontWeight: '500', fontSize: '12px', letterSpacing: '0.1em', color: '#7c4dff', pointerEvents: 'none', zIndex: 1, animation: `neu-txt-b ${dur} ease forwards` }}>{item.label}</div>}
                    <a key={`lnk-${glitchKey}`} href={item.href} style={{ display: 'block', padding: '10px 18px', fontFamily: 'var(--font-body)', fontWeight: '500', fontSize: '12px', letterSpacing: '0.1em', color: 'var(--lav)', textDecoration: 'none', transition: 'color 0.15s, padding-left 0.15s', textShadow: '0 0 10px rgba(var(--purple-rgb),calc(0.8*var(--kp))), 0 0 20px rgba(var(--purple-rgb),calc(0.4*var(--kp)))', background: 'rgba(var(--purple-rgb),calc(0.08*var(--kp)))', position: 'relative', zIndex: 2, ...(glitchActive ? { animation: `neu-txt-main ${dur} ease forwards` } : {}) }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.background = 'rgba(var(--purple-rgb),calc(0.18*var(--kp)))'; e.currentTarget.style.paddingLeft = '24px'; e.currentTarget.style.textShadow = '0 0 14px rgba(var(--accent-rgb),calc(1*var(--ka))), 0 0 28px rgba(var(--purple-rgb),calc(0.6*var(--kp)))'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--lav)'; e.currentTarget.style.background = 'rgba(var(--purple-rgb),calc(0.08*var(--kp)))'; e.currentTarget.style.paddingLeft = '18px'; e.currentTarget.style.textShadow = '0 0 10px rgba(var(--purple-rgb),calc(0.8*var(--kp))), 0 0 20px rgba(var(--purple-rgb),calc(0.4*var(--kp)))'; }}>
                      {item.label}
                    </a>
                  </div>
                </div>
              ) : (
                <a href={item.href} style={{ display: 'block', padding: '10px 18px', fontFamily: 'var(--font-body)', fontWeight: '300', fontSize: '12px', letterSpacing: '0.1em', color: 'var(--nav-item-text)', textDecoration: 'none', borderBottom: i < tab.items.length - 1 ? '1px solid var(--nav-item-border)' : 'none', transition: 'all 0.15s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.background = 'var(--nav-item-hover-bg)'; e.currentTarget.style.paddingLeft = '24px'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--nav-item-text)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '18px'; }}>
                  <span style={{ display:'flex', alignItems:'center', gap:'5px' }}>
                    {item.label}
                    {item.locked && (
                      <svg width="8" height="10" viewBox="0 0 8 10" fill="none" style={{ flexShrink:0, opacity:0.5 }}>
                        <rect x="0.5" y="4" width="7" height="5.5" rx="1" fill="currentColor"/>
                        <path d="M1.5 4V2.8a2.5 2.5 0 0 1 5 0V4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                      </svg>
                    )}
                  </span>
                </a>
              )}
              {item.dividerAfter && <div style={{ height: '1px', background: 'rgba(var(--accent-rgb),calc(0.2*var(--ka)))', margin: '2px 0 0' }} />}
            </React.Fragment>
          )}
        </div>
      }
    </div>
  );
}

/* ── Account-Modal ──────────────────────────────────────────── */
function AccountModal({ onClose }) {
  const user = window.SITE_USER;
  const [displayName, setDisplayName] = useState('');
  const [draft, setDraft]             = useState('');
  const [saving, setSaving]           = useState(false);
  const [saved,  setSaved]            = useState(false);
  const inputRef = useRef(null);

  const [pwOpen,    setPwOpen]    = useState(false);
  const [pwCurrent, setPwCurrent] = useState('');
  const [pwNew,     setPwNew]     = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [pwSaving,  setPwSaving]  = useState(false);
  const [pwError,   setPwError]   = useState('');
  const [pwSaved,   setPwSaved]   = useState(false);

  useEffect(() => {
    async function load() {
      const { data } = await window._sb.from('profiles').select('display_name').eq('id', user.id).single();
      const name = data?.display_name || '';
      setDisplayName(name);
      setDraft(name);
    }
    if (window._sb && user) load();
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  async function handleSave() {
    if (!draft.trim() || saving) return;
    setSaving(true);
    await window._sb.from('profiles').update({ display_name: draft.trim() }).eq('id', user.id);
    setDisplayName(draft.trim());
    window.SITE_USER = { ...window.SITE_USER, display_name: draft.trim() };
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  async function handlePasswordChange() {
    setPwError('');
    if (!pwCurrent) { setPwError('Bitte aktuelles Passwort eingeben.'); return; }
    if (pwNew.length < 6) { setPwError('Neues Passwort muss mindestens 6 Zeichen haben.'); return; }
    if (pwNew !== pwConfirm) { setPwError('Passwörter stimmen nicht überein.'); return; }
    setPwSaving(true);
    const { error: signInErr } = await window._sb.auth.signInWithPassword({ email: user.email, password: pwCurrent });
    if (signInErr) { setPwError('Aktuelles Passwort ist falsch.'); setPwSaving(false); return; }
    const { error: updateErr } = await window._sb.auth.updateUser({ password: pwNew });
    if (updateErr) { setPwError('Fehler: ' + updateErr.message); setPwSaving(false); return; }
    setPwSaving(false);
    setPwSaved(true);
    setPwCurrent(''); setPwNew(''); setPwConfirm('');
    setTimeout(() => { setPwSaved(false); setPwOpen(false); }, 2500);
  }

  const inputStyle = {
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
    color: 'var(--white)', background: 'transparent',
    border: 'none', borderBottom: '1px solid rgba(var(--purple-rgb),calc(0.35*var(--kp)))',
    outline: 'none', padding: '4px 0', width: '100%',
  };
  const labelStyle = {
    fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '.22em',
    color: 'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))', textTransform: 'uppercase', display: 'block', marginBottom: 6,
  };

  return (
    <div onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(var(--bg-rgb),0.82)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 400, margin: '0 16px',
        background: 'rgba(var(--panel-rgb),0.98)', border: '1px solid rgba(var(--purple-rgb),calc(0.4*var(--kp)))',
        borderRadius: 6, padding: '32px 32px 28px', position: 'relative' }}>

        {/* corner brackets */}
        {[['top:0,left:0','borderTop,borderLeft'],['top:0,right:0','borderTop,borderRight'],
          ['bottom:0,left:0','borderBottom,borderLeft'],['bottom:0,right:0','borderBottom,borderRight']
        ].map(([pos, sides], i) => {
          const p = Object.fromEntries(pos.split(',').map(s => s.split(':')));
          const b = Object.fromEntries(sides.split(',').map(s => [s, '1.5px solid rgba(var(--purple-rgb),calc(0.55*var(--kp)))']));
          return <div key={i} style={{ position:'absolute', width:14, height:14, pointerEvents:'none', ...p, ...b }} />;
        })}

        {/* Close */}
        <button onClick={onClose}
          style={{ position:'absolute', top:12, right:14, background:'transparent', border:'none',
            cursor:'pointer', fontFamily:'var(--font-mono)', fontSize:18, lineHeight:1,
            color:'rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))', padding:'2px 6px', transition:'color .15s' }}
          onMouseEnter={e => e.currentTarget.style.color='rgba(var(--text-rgb),calc(0.8*var(--kt) + var(--tb)))'}
          onMouseLeave={e => e.currentTarget.style.color='rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))'}>×</button>

        <div style={{ fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'.32em',
          color:'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))', textTransform:'uppercase', marginBottom:6 }}>
          Konto · Meruria
        </div>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:300,
          letterSpacing:'.2em', color:'var(--white)', textTransform:'uppercase',
          margin:'0 0 24px' }}>Einstellungen</h2>

        {/* Email (read-only) */}
        <div style={{ marginBottom:20 }}>
          <label style={labelStyle}>E-Mail-Adresse</label>
          <div style={{ fontFamily:'var(--font-body)', fontSize:13, fontWeight:300,
            color:'rgba(var(--text-rgb),calc(0.45*var(--kt) + var(--tb)))' }}>{user?.email || '—'}</div>
        </div>

        {/* Display name */}
        <div style={{ marginBottom:24 }}>
          <label style={labelStyle}>Anzeigename</label>
          <input
            ref={inputRef}
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleSave(); }}
            placeholder="Name eingeben …"
            style={inputStyle}
          />
          <div style={{ fontFamily:'var(--font-mono)', fontSize:7.5, color:'rgba(var(--purple-rgb),calc(0.3*var(--kp) + var(--tb)))',
            letterSpacing:'.1em', marginTop:6 }}>
            Wird auf der Spielercharaktere-Seite als Gruppenüberschrift angezeigt.
          </div>
        </div>

        {/* Password change section */}
        <div style={{ marginBottom:28, borderTop:'1px solid rgba(var(--purple-rgb),calc(0.15*var(--kp)))', paddingTop:20 }}>
          <button onClick={() => { setPwOpen(o => !o); setPwError(''); }}
            style={{ display:'flex', alignItems:'center', gap:8, background:'transparent', border:'none',
              cursor:'pointer', padding:0, width:'100%', textAlign:'left' }}>
            <span style={{ ...labelStyle, marginBottom:0, flex:1 }}>Passwort ändern</span>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))',
              transition:'transform .2s', display:'inline-block',
              transform: pwOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
          </button>

          {pwOpen && (
            <div style={{ marginTop:16, display:'flex', flexDirection:'column', gap:14 }}>
              {['Aktuelles Passwort', 'Neues Passwort', 'Neues Passwort bestätigen'].map((lbl, i) => {
                const val  = [pwCurrent, pwNew, pwConfirm][i];
                const setter = [setPwCurrent, setPwNew, setPwConfirm][i];
                return (
                  <div key={i}>
                    <label style={labelStyle}>{lbl}</label>
                    <input
                      type="password"
                      value={val}
                      onChange={e => { setter(e.target.value); setPwError(''); }}
                      onKeyDown={e => { if (e.key === 'Enter') handlePasswordChange(); }}
                      style={inputStyle}
                      autoComplete={i === 0 ? 'current-password' : 'new-password'}
                    />
                  </div>
                );
              })}

              {pwError && (
                <div style={{ fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'.1em',
                  color:'color-mix(in srgb, rgba(240,100,100,0.85), rgb(var(--ink-rgb)) var(--cm))', marginTop:-4 }}>{pwError}</div>
              )}

              <button onClick={handlePasswordChange} disabled={pwSaving}
                style={{ fontFamily:'var(--font-display)', fontSize:11, letterSpacing:'.18em',
                  textTransform:'uppercase', padding:'9px 16px', cursor: pwSaving ? 'not-allowed' : 'pointer',
                  background: pwSaved ? 'rgba(80,200,140,0.18)' : 'rgba(var(--purple-rgb),calc(0.12*var(--kp)))',
                  border: `1px solid ${pwSaved ? 'rgba(80,200,140,0.55)' : 'rgba(var(--purple-rgb),calc(0.4*var(--kp)))'}`,
                  borderRadius:3, color: pwSaved ? 'color-mix(in srgb, rgba(80,200,140,0.9), rgb(var(--ink-rgb)) var(--cm))' : 'rgba(var(--text-rgb),calc(0.75*var(--kt)))',
                  transition:'all .2s', opacity: pwSaving ? 0.6 : 1 }}>
                {pwSaved ? '✓ Passwort geändert' : pwSaving ? 'Speichern…' : 'Passwort ändern'}
              </button>
            </div>
          )}
        </div>

        <div style={{ display:'flex', gap:10 }}>
          <button onClick={handleSave} disabled={saving || !draft.trim()}
            style={{ flex:1, fontFamily:'var(--font-display)', fontSize:11, letterSpacing:'.18em',
              textTransform:'uppercase', padding:'10px 20px', cursor: saving ? 'not-allowed' : 'pointer',
              background: saved ? 'rgba(80,200,140,0.18)' : 'rgba(var(--purple-rgb),calc(0.18*var(--kp)))',
              border: `1px solid ${saved ? 'rgba(80,200,140,0.55)' : 'rgba(var(--purple-rgb),calc(0.55*var(--kp)))'}`,
              borderRadius:3, color: saved ? 'color-mix(in srgb, rgba(80,200,140,0.9), rgb(var(--ink-rgb)) var(--cm))' : 'rgba(var(--text-rgb),calc(0.9*var(--kt)))',
              transition:'all .2s', opacity: (!draft.trim() || saving) ? 0.5 : 1 }}>
            {saved ? '✓ Gespeichert' : saving ? 'Speichern…' : 'Speichern'}
          </button>
          <button onClick={onClose}
            style={{ fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'.18em',
              textTransform:'uppercase', padding:'10px 18px', cursor:'pointer',
              background:'transparent', border:'1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))',
              borderRadius:3, color:'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))', transition:'all .2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.45*var(--kp)))'; e.currentTarget.style.color='rgba(var(--accent-rgb),calc(0.75*var(--ka) + var(--tb)))'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.2*var(--kp)))'; e.currentTarget.style.color='rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))'; }}>
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── User-Menü (Dropdown) ───────────────────────────────────── */
function UserMenu() {
  const user = window.SITE_USER;
  const [open, setOpen]             = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [displayName, setDisplayName]   = useState('');
  const ref = useRef(null);

  useEffect(() => {
    async function load() {
      const { data } = await window._sb.from('profiles').select('display_name').eq('id', user.id).single();
      if (data?.display_name) setDisplayName(data.display_name);
    }
    if (window._sb && user) load();
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  if (!window._sb || !user) return null;

  async function handleLogout() {
    await window._sb.auth.signOut();
    window.location.reload();
  }

  const label = displayName || user.email?.split('@')[0] || 'Konto';
  const truncated = label.length > 16 ? label.slice(0, 14) + '…' : label;

  const dropItemStyle = {
    display:'block', width:'100%', padding:'9px 16px',
    fontFamily:'var(--font-body)', fontSize:12, fontWeight:300,
    letterSpacing:'.06em', color:'var(--nav-item-text)', textAlign:'left',
    background:'transparent', border:'none', cursor:'pointer', transition:'all .15s',
  };

  return (
    <div ref={ref} style={{ position:'relative', alignSelf:'stretch', display:'flex', alignItems:'center' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'.18em',
          textTransform:'uppercase', padding:'5px 11px',
          background: open ? 'var(--nav-btn-hover-bg)' : 'transparent',
          border:'1px solid var(--nav-btn-border)', borderRadius:3,
          color: open ? 'var(--white)' : 'var(--nav-text)',
          cursor:'pointer', transition:'all .15s', whiteSpace:'nowrap' }}
        onMouseEnter={e => { e.currentTarget.style.background='var(--nav-btn-hover-bg)'; e.currentTarget.style.color='var(--white)'; e.currentTarget.style.borderColor='var(--nav-btn-hover-border)'; }}
        onMouseLeave={e => { if (!open) { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='var(--nav-text)'; e.currentTarget.style.borderColor='var(--nav-btn-border)'; } }}>
        ⬡ {truncated}
      </button>

      {open && (
        <div style={{ position:'absolute', top:'calc(100% + 6px)', right:0, minWidth:200,
          background:'var(--nav-dropdown-bg)', border:'1px solid var(--nav-dropdown-border)',
          borderRadius:4, boxShadow:'0 8px 32px rgba(var(--shadow-rgb),calc(0.4 * var(--shadow-k)))',
          animation:'slideDown 0.18s ease forwards', zIndex:200,
          backdropFilter:'blur(12px)', overflow:'hidden' }}>

          {/* User info header */}
          <div style={{ padding:'12px 16px 10px', borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.12*var(--kp)))' }}>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:7.5, letterSpacing:'.22em',
              color:'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))', textTransform:'uppercase', marginBottom:3 }}>
              {user.role === 'dm' ? 'Spielleitung' : 'Spieler'}
            </div>
            <div style={{ fontFamily:'var(--font-body)', fontSize:11.5, fontWeight:300,
              color:'rgba(var(--text-rgb),calc(0.7*var(--kt) + var(--tb)))', overflow:'hidden', textOverflow:'ellipsis',
              whiteSpace:'nowrap', maxWidth:168 }}>
              {user.email}
            </div>
          </div>

          {/* Settings */}
          <button style={dropItemStyle}
            onClick={() => { setOpen(false); setShowSettings(true); }}
            onMouseEnter={e => { e.currentTarget.style.color='var(--white)'; e.currentTarget.style.background='var(--nav-item-hover-bg)'; e.currentTarget.style.paddingLeft='22px'; }}
            onMouseLeave={e => { e.currentTarget.style.color='var(--nav-item-text)'; e.currentTarget.style.background='transparent'; e.currentTarget.style.paddingLeft='16px'; }}>
            Einstellungen
          </button>

          {/* Divider */}
          <div style={{ height:1, background:'rgba(var(--purple-rgb),calc(0.12*var(--kp)))' }} />

          {/* Logout */}
          <button style={{ ...dropItemStyle, color:'rgba(220,100,100,0.65)' }}
            onClick={handleLogout}
            onMouseEnter={e => { e.currentTarget.style.color='color-mix(in srgb, rgba(240,130,130,0.9), rgb(var(--ink-rgb)) var(--cm))'; e.currentTarget.style.background='rgba(200,60,60,0.1)'; e.currentTarget.style.paddingLeft='22px'; }}
            onMouseLeave={e => { e.currentTarget.style.color='rgba(220,100,100,0.65)'; e.currentTarget.style.background='transparent'; e.currentTarget.style.paddingLeft='16px'; }}>
            Abmelden
          </button>
        </div>
      )}

      {showSettings && ReactDOM.createPortal(
        <AccountModal onClose={() => setShowSettings(false)} />,
        document.body
      )}
    </div>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light');

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggle}
      title={dark ? 'Lichtmodus' : 'Dunkelmodus'}
      style={{ background: 'transparent', border: '1px solid var(--nav-btn-border)', borderRadius: '3px', color: 'var(--nav-text)', cursor: 'pointer', padding: '5px 9px', fontSize: '15px', lineHeight: 1, flexShrink: 0, transition: 'all 0.15s' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--nav-btn-hover-border)'; e.currentTarget.style.background = 'var(--nav-btn-hover-bg)'; e.currentTarget.style.color = 'var(--white)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--nav-btn-border)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--nav-text)'; }}
    >
      {dark ? '☀' : '☽'}
    </button>
  );
}

function MobileNavSection({ tab, onClose, open, onToggle }) {

  if (tab.href && !tab.items) {
    return (
      <a href={tab.href} onClick={onClose} style={{ display: 'block', padding: '14px 24px', fontFamily: 'var(--font-display)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--nav-text)', textDecoration: 'none', borderBottom: '1px solid var(--nav-item-border)', transition: 'color 0.15s' }}>
        {tab.label}
      </a>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'stretch', borderBottom: '1px solid var(--nav-item-border)', background: 'linear-gradient(90deg, rgba(var(--purple-rgb),calc(0.42*var(--kp))) 0%, rgba(var(--purple-rgb),calc(0.04*var(--kp))) 100%)' }}>
        {tab.href
          ? <a href={tab.href} onClick={onClose} style={{ flex: 1, padding: '14px 24px', fontFamily: 'var(--font-display)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--nav-text)', textDecoration: 'none', transition: 'color 0.15s' }}>{tab.label}</a>
          : <span style={{ flex: 1, padding: '14px 24px', fontFamily: 'var(--font-display)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--nav-text)' }}>{tab.label}</span>
        }
        <button onClick={onToggle} aria-expanded={open} style={{ padding: '14px 20px', fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--nav-text)', opacity: 0.5, background: 'transparent', border: 'none', borderLeft: '1px solid var(--nav-item-border)', cursor: 'pointer' }}>
          {open ? '▲' : '▼'}
        </button>
      </div>
      {open && (
        <div style={{ background: 'rgba(var(--accent-rgb),calc(0.05*var(--ka)))' }}>
          {tab.items.map((item, i) => (
            <a key={i} href={item.href} onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '11px 24px 11px 36px', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', letterSpacing: '0.1em', color: 'var(--nav-item-text)', textDecoration: 'none', borderBottom: i < tab.items.length - 1 ? '1px solid var(--nav-item-border)' : 'none', transition: 'color 0.15s' }}>
              {item.label}
              {item.locked && (
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" style={{ flexShrink: 0, opacity: 0.5 }}>
                  <rect x="0.5" y="4" width="7" height="5.5" rx="1" fill="currentColor"/>
                  <path d="M1.5 4V2.8a2.5 2.5 0 0 1 5 0V4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                </svg>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// Mobile drawer for page sidebars (TOCs, filter panels). Below 768px base.css hides every
// `aside`; this button opens it as an off-canvas panel via `html.sidebar-open`.
const SIDEBAR_SELECTOR = '.page-root aside, .div-aside, aside[style*="--sidebar-w"], [data-mobile-drawer]';

function SidebarToggle() {
  const [hasSidebar, setHasSidebar] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => setHasSidebar(!!document.querySelector(SIDEBAR_SELECTOR));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('sidebar-open', open);
    if (!open) return;
    const onClick = (e) => {
      const aside = e.target.closest && e.target.closest(SIDEBAR_SELECTOR);
      if (!aside) { setOpen(false); return; }
      if (e.target.closest('input, select, textarea, label, [data-keep-open]')) return;
      if (aside.hasAttribute('data-mobile-drawer')) return; // filter panels: stay open while picking several filters
      if (e.target.closest('a, button, [role="button"], li')) setOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => () => document.documentElement.classList.remove('sidebar-open'), []);

  if (!hasSidebar) return null;
  // Portal to <body>: a fixed button inside the page tree can be shifted by transformed ancestors
  return ReactDOM.createPortal(
    <button
      className="meruria-sidebar-toggle"
      onClick={(e) => { e.stopPropagation(); setOpen(o => !o); }}
      aria-label={open ? 'Seitenmenü schließen' : 'Seitenmenü öffnen'}
      aria-expanded={open}
    >
      {open ? '✕' : '☰'}
    </button>,
    document.body
  );
}

// Master/detail pages (talente, zauber, hintergruende, monster …) mark their panes with `.md-body`,
// `.md-list` and `.md-detail`. Below 768px only one of list/detail is visible (base.css, [data-pane]):
// tapping a list row opens the detail, this button returns to the list.
function MasterDetailMobile() {
  const [active, setActive] = useState(false);
  const [pane, setPane] = useState('list');

  useEffect(() => {
    const body = () => document.querySelector('.md-body');
    const sync = () => {
      const b = body();
      setActive(!!b);
      setPane(b && b.dataset.pane === 'detail' ? 'detail' : 'list');
    };
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-pane'] });
    const mq = window.matchMedia('(max-width: 768px)');
    const onClick = (e) => {
      const b = body();
      const list = e.target.closest && e.target.closest('.md-list');
      if (!mq.matches || !b || !list) return;
      // lists that mark their rows with [data-md-row] open the detail only from those (filters/buttons in the same list don't)
      if (list.querySelector('[data-md-row]')) {
        if (e.target.closest('[data-md-row]')) { b.dataset.pane = 'detail'; window.scrollTo(0, 0); }
        return;
      }
      // otherwise every cursor:pointer row opens it, not group headings or empty space
      for (let el = e.target; el && el !== list.parentElement; el = el.parentElement) {
        if (getComputedStyle(el).cursor === 'pointer') { b.dataset.pane = 'detail'; window.scrollTo(0, 0); return; }
      }
    };
    document.addEventListener('click', onClick);
    return () => { obs.disconnect(); document.removeEventListener('click', onClick); };
  }, []);

  if (!active || pane !== 'detail') return null;
  return ReactDOM.createPortal(
    <button
      className="meruria-pane-back"
      onClick={() => { const b = document.querySelector('.md-body'); if (b) b.dataset.pane = 'list'; }}
    >
      ← Liste
    </button>,
    document.body
  );
}

// Plain <table>s with 5+ columns cannot fit a phone. This tags them `rt-stack` and copies each header
// label into the cells (data-label), so base.css can show every row as a label/value card below 768px.
// Cells are (re)labelled on every DOM change because React re-renders rows. Tables that already have
// the class (the sammeln `Table` component) are left alone.
function TableStacker() {
  useEffect(() => {
    let timer = 0; // setTimeout, not requestAnimationFrame: rAF is paused while the tab is hidden
    const phone = window.matchMedia('(max-width: 768px)');
    const process = () => {
      timer = 0;
      document.querySelectorAll('table').forEach((t) => {
        if (t.dataset.rtDone === 'skip') return;
        if (!t.dataset.rtDone) {
          const heads = t.querySelectorAll('thead th, tr:first-child > th');
          // 5+ columns always; 3-4 columns only if they really overflow on a phone
          const tooWide = phone.matches && t.getBoundingClientRect().width > (t.parentElement ? t.parentElement.clientWidth : 0) + 1;
          const wide = heads.length >= 5 || (heads.length >= 3 && tooWide);
          if (t.classList.contains('rt-stack')) { t.dataset.rtDone = 'skip'; return; }
          if (!wide) { if (tooWide) t.classList.add('rt-scroll'); t.dataset.rtDone = 'skip'; return; }
          t._rtLabels = [...heads].map(h => h.innerText.replace(/\s+/g, ' ').trim());
          t.classList.add('rt-stack');
          t.dataset.rtDone = '1';
        }
        t.querySelectorAll('tbody tr').forEach((tr) => {
          [...tr.children].forEach((td, i) => {
            if (td.tagName === 'TD' && td.colSpan === 1 && !td.hasAttribute('data-label')) td.setAttribute('data-label', t._rtLabels[i] || '');
          });
        });
      });
    };
    const schedule = () => { if (!timer) timer = setTimeout(process, 30); };
    schedule();
    const obs = new MutationObserver(schedule);
    obs.observe(document.body, { childList: true, subtree: true });
    // crossing the phone breakpoint: re-check tables that were judged "fits" at the other width
    const onBreakpoint = () => { document.querySelectorAll('table[data-rt-done="skip"]').forEach(t => delete t.dataset.rtDone); schedule(); };
    phone.addEventListener('change', onBreakpoint);
    return () => { obs.disconnect(); phone.removeEventListener('change', onBreakpoint); if (timer) clearTimeout(timer); };
  }, []);
  return null;
}

function SiteNav({ rightLabel }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null); // accordion: one mobile section open at a time

  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [mobileOpen]);

  return (
    <>
    <div style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%', background: 'var(--nav-bg)', borderBottom: '1px solid var(--nav-border)', backdropFilter: 'blur(16px)' }}>
      <div className="meruria-nav-row" style={{ display: 'flex', alignItems: 'center', padding: '0 24px', height: '52px' }}>
        <a href="/index.html" className="meruria-logo" style={{ marginRight: '70px', whiteSpace: 'nowrap', flexShrink: 0, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '300', letterSpacing: '0.3em', color: 'var(--white)', textShadow: '0 0 28px rgba(var(--purple-rgb),calc(0.55*var(--kp)))', animation: 'flicker-mid 9s infinite' }}>MERURIA</span>
        </a>
        <nav className="meruria-desktop-nav" style={{ display: 'flex', gap: '6px', alignItems: 'center', flex: 1 }}>
          {NAV.map((tab) => <NavItem key={tab.id} tab={tab} />)}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {rightLabel && (
            <div className="meruria-nav-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'rgba(var(--accent-rgb),calc(0.35*var(--ka) + var(--tb)))', letterSpacing: '0.15em' }}>{rightLabel}</div>
          )}
          <UserMenu />
          <ThemeToggle />
          <button
            className="meruria-hamburger"
            onClick={(e) => { e.stopPropagation(); setMobileOpen(prev => !prev); }}
            title="Navigation"
            style={{ background: 'transparent', border: '1px solid var(--nav-btn-border)', borderRadius: '3px', color: 'var(--nav-text)', cursor: 'pointer', padding: '5px 9px', fontSize: '16px', lineHeight: 1, flexShrink: 0, transition: 'all 0.15s' }}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div onClick={(e) => e.stopPropagation()} style={{ borderTop: '1px solid var(--nav-border)', background: 'var(--nav-dropdown-bg)', backdropFilter: 'blur(16px)', overflowY: 'auto', maxHeight: 'calc(100dvh - 52px)' }}>
          {NAV.map(tab => <MobileNavSection key={tab.id} tab={tab} open={openSection === tab.id} onToggle={() => setOpenSection(o => o === tab.id ? null : tab.id)} onClose={() => setMobileOpen(false)} />)}
        </div>
      )}
    </div>
    <SidebarToggle />
    <MasterDetailMobile />
    <TableStacker />
    </>
  );
}

window.SiteNav = SiteNav;
