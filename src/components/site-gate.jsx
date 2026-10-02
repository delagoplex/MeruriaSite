// Supabase auth gate. Session persists via localStorage (Supabase default).
// Sets window.SITE_USER = { id, email, role } after successful auth.
// window.SITE_LOGOUT() triggers signOut and re-renders the login form.

function LoginForm({ onAuth }) {
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError]       = React.useState(null);
  const [loading, setLoading]   = React.useState(false);
  const [shake, setShake]       = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { data, error: err } = await window._sb.auth.signInWithPassword({ email, password });
    if (err) {
      setError('Ungültige Anmeldedaten');
      setShake(true);
      setPassword('');
      setTimeout(() => setShake(false), 400);
      setLoading(false);
      return;
    }
    const { data: profile } = await window._sb
      .from('profiles').select('role').eq('id', data.user.id).single();
    window.SITE_USER = { id: data.user.id, email: data.user.email, role: profile?.role || 'player' };
    window.dispatchEvent(new CustomEvent('site-user-ready', { detail: window.SITE_USER }));
    setLoading(false);
    onAuth();
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
          <div style={{ animation: shake ? 'pulse-glow 0.4s ease' : 'none', display:'flex', flexDirection:'column', gap:'8px' }}>
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setError(null); }}
              placeholder="E-Mail"
              autoFocus
              style={{
                fontFamily:'var(--font-mono)', fontSize:'13px', letterSpacing:'0.1em',
                padding:'10px 16px', width:'220px',
                background:'rgba(80,160,220,0.05)',
                border:'1px solid rgba(80,160,220,0.25)',
                borderRadius:'3px', color:'var(--white)', outline:'none',
                transition:'border-color 0.2s', textAlign:'center'
              }}
              onFocus={e => e.target.style.borderColor='rgba(80,160,220,0.55)'}
              onBlur={e => e.target.style.borderColor='rgba(80,160,220,0.25)'}
            />
            <input
              type="password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(null); }}
              placeholder="Passwort"
              style={{
                fontFamily:'var(--font-mono)', fontSize:'13px', letterSpacing:'0.15em',
                padding:'10px 16px', width:'220px',
                background:'rgba(80,160,220,0.05)',
                border:`1px solid ${error ? 'rgba(220,80,80,0.6)' : 'rgba(80,160,220,0.25)'}`,
                borderRadius:'3px', color:'var(--white)', outline:'none',
                transition:'border-color 0.2s', textAlign:'center'
              }}
              onFocus={e => { if (!error) e.target.style.borderColor='rgba(80,160,220,0.55)'; }}
              onBlur={e => { if (!error) e.target.style.borderColor='rgba(80,160,220,0.25)'; }}
            />
          </div>
          {error && (
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.22em', color:'rgba(220,80,80,0.8)', textTransform:'uppercase', animation:'fadeIn 0.15s ease' }}>
              {error}
            </div>
          )}
          <button type="submit" disabled={loading} style={{
            fontFamily:'var(--font-mono)', fontSize:'9px', letterSpacing:'0.28em',
            padding:'8px 24px', background:'rgba(80,160,220,0.1)',
            border:'1px solid rgba(80,160,220,0.3)', borderRadius:'3px',
            color: loading ? 'rgba(150,200,240,0.4)' : 'rgba(150,200,240,0.75)',
            cursor: loading ? 'default' : 'pointer', textTransform:'uppercase',
            transition:'all 0.15s'
          }}
            onMouseEnter={e => { if (!loading) { e.currentTarget.style.background='rgba(80,160,220,0.2)'; e.currentTarget.style.borderColor='rgba(80,160,220,0.6)'; e.currentTarget.style.color='var(--white)'; } }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(80,160,220,0.1)'; e.currentTarget.style.borderColor='rgba(80,160,220,0.3)'; e.currentTarget.style.color='rgba(150,200,240,0.75)'; }}>
            {loading ? '…' : 'Eintreten'}
          </button>
        </form>
      </div>
    </div>
  );
}

function SiteGate({ children }) {
  const [ready, setReady]   = React.useState(false);
  const [authed, setAuthed] = React.useState(false);

  React.useEffect(() => {
    async function init() {
      const { data: { session } } = await window._sb.auth.getSession();
      if (session) {
        const { data: profile } = await window._sb
          .from('profiles').select('role').eq('id', session.user.id).single();
        window.SITE_USER = { id: session.user.id, email: session.user.email, role: profile?.role || 'player' };
        window.dispatchEvent(new CustomEvent('site-user-ready', { detail: window.SITE_USER }));
        setAuthed(true);
      }
      setReady(true);
    }
    init();

    const { data: { subscription } } = window._sb.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        window.SITE_USER = null;
        setAuthed(false);
        setReady(true);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  window.SITE_LOGOUT = () => window._sb.auth.signOut();

  if (!ready) return <div style={{ position:'fixed', inset:0, background:'#05040f' }} />;
  if (!authed) return <LoginForm onAuth={() => setAuthed(true)} />;
  return children;
}

window.SiteGate = SiteGate;
