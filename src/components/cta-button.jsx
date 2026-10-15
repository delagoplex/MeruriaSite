// cta-button.jsx — Abschnitts-Schaltfläche „◈ Zu … →“ (Startseite, Spiel-Seite). Exposes: window.CTAButton
;(function () {
/* ─────────────────────────────────────────────────
   CTA BUTTON — reusable section nav (Missionsterminal/Kollektikon style)
   ───────────────────────────────────────────────── */
function CTAButton({ href, label, glyph='◈' }) {
  return (
    <div style={{ display:'flex', justifyContent:'center' }}>
      <a href={href} style={{
        display:'inline-flex', alignItems:'center', gap:10,
        fontFamily:'var(--font-display)', fontSize:'12.5px', fontWeight:400,
        letterSpacing:'0.28em', padding:'9px 24px',
        background:'rgba(var(--purple-rgb),calc(0.22*var(--kp)))',
        border:'1px solid rgba(var(--accent-rgb),calc(0.7*var(--ka)))',
        color:'var(--white)', textDecoration:'none',
        textTransform:'uppercase', borderRadius:'2px',
        boxShadow:'0 0 20px rgba(var(--purple-rgb),calc(0.25*var(--kp)))',
        transition:'all 0.2s',
      }}
        onMouseEnter={e=>{ e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.35*var(--kp)))'; e.currentTarget.style.borderColor='var(--lav2)'; e.currentTarget.style.boxShadow='0 0 28px rgba(var(--purple-rgb),calc(0.45*var(--kp)))'; }}
        onMouseLeave={e=>{ e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.22*var(--kp)))'; e.currentTarget.style.borderColor='rgba(var(--accent-rgb),calc(0.7*var(--ka)))'; e.currentTarget.style.boxShadow='0 0 20px rgba(var(--purple-rgb),calc(0.25*var(--kp)))'; }}
      >
        <span style={{
          width:16, height:16, borderRadius:'50%',
          border:'1px solid currentColor',
          display:'inline-flex', alignItems:'center', justifyContent:'center',
          fontSize:11.5,
        }}>{glyph}</span>
        <span>{label}</span>
        <span style={{ fontSize:13 }}>→</span>
      </a>
    </div>
  );
}

window.CTAButton = CTAButton;
})();
