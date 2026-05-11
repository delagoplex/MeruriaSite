// Site-wide auth gate — separate session from Monster gate.
// Hash of site password (SHA-256). Session lasts 30 days.
const SITE_PW_HASH = 'd7868882d5f04253d82a65c3bc9ba3cad66db245c9acd29f42eea4229cf4ef24';
const SITE_AUTH_KEY = 'site_auth';
const SITE_AUTH_TTL = 30 * 24 * 60 * 60 * 1000;

function SitePasswordForm({ onUnlock }) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [shake, setShake] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
    const hash = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    if (hash === SITE_PW_HASH) {
      localStorage.setItem(SITE_AUTH_KEY, JSON.stringify({ ts: Date.now() }));
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setValue('');
      setTimeout(() => setShake(false), 400);
    }
  }

  const hexPts = (() => {
    const cx = 20, cy = 20, r = 18;
    return Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    }).join(' ');
  })();

  return (
    <div style={{ position:'fixed', inset:0, background:'#05040f', display:'flex', alignItems:'center', justifyContent:'center', zIndex:9999 }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'28px', animation:'fadeInUp 0.4s ease' }}>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'14px' }}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <polygon points={hexPts} fill="rgba(80,160,220,0.08)" stroke="rgba(80,160,220,0.35)" strokeWidth="1.2"/>
            <text x="20" y="25" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="rgba(80,160,220,0.8)">⚔</text>
          </svg>
          <div style={{ fontFamily:'var(--font-display)', fontSize:'11px', letterSpacing:'0.45em', color:'rgba(150,190,230,0.45)', textTransform:'uppercase' }}>Meruria</div>
        </div>

        <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'12px' }}>
          <div style={{ position:'relative', animation: shake ? 'pulse-glow 0.4s ease' : 'none' }}>
            <input
              type="password"
              value={value}
              onChange={e => { setValue(e.target.value); setError(false); }}
              placeholder="Passwort"
              autoFocus
              style={{
                fontFamily:'var(--font-mono)', fontSize:'13px', letterSpacing:'0.15em',
                padding:'10px 16px', width:'220px',
                background:'rgba(80,160,220,0.05)',
                border:`1px solid ${error ? 'rgba(220,80,80,0.6)' : 'rgba(80,160,220,0.25)'}`,
                borderRadius:'3px', color:'var(--white)', outline:'none',
                transition:'border-color 0.2s', textAlign:'center'
              }}
              onFocus={e => { if (!error) e.target.style.borderColor = 'rgba(80,160,220,0.55)'; }}
              onBlur={e => { if (!error) e.target.style.borderColor = 'rgba(80,160,220,0.25)'; }}
            />
          </div>
          {error && (
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.22em', color:'rgba(220,80,80,0.8)', textTransform:'uppercase', animation:'fadeIn 0.15s ease' }}>
              Falsches Passwort
            </div>
          )}
          <button type="submit" style={{
            fontFamily:'var(--font-mono)', fontSize:'9px', letterSpacing:'0.28em',
            padding:'8px 24px', background:'rgba(80,160,220,0.1)',
            border:'1px solid rgba(80,160,220,0.3)', borderRadius:'3px',
            color:'rgba(150,200,240,0.75)', cursor:'pointer', textTransform:'uppercase',
            transition:'all 0.15s'
          }}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(80,160,220,0.2)'; e.currentTarget.style.borderColor='rgba(80,160,220,0.6)'; e.currentTarget.style.color='var(--white)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(80,160,220,0.1)'; e.currentTarget.style.borderColor='rgba(80,160,220,0.3)'; e.currentTarget.style.color='rgba(150,200,240,0.75)'; }}>
            Eintreten
          </button>
        </form>
      </div>
    </div>
  );
}

function SiteGate({ children }) {
  const [authed, setAuthed] = React.useState(() => {
    try {
      const raw = localStorage.getItem(SITE_AUTH_KEY);
      if (!raw) return false;
      const { ts } = JSON.parse(raw);
      return Date.now() - ts < SITE_AUTH_TTL;
    } catch { return false; }
  });

  if (!authed) return <SitePasswordForm onUnlock={() => setAuthed(true)} />;
  return children;
}
