// footer.jsx — shared site footer
// Exposes: window.SiteFooter
// Props: accent (optional hex color), left (optional left text), right (optional right text)

function SiteFooter({ accent, left, right }) {
  const textColor = accent ? `${accent}22` : 'rgba(160,140,255,0.22)';
  const borderColor = accent ? `${accent}0a` : 'rgba(160,140,255,0.07)';
  return (
    <div style={{ position:'relative', zIndex:10, padding:'10px 32px', borderTop:`1px solid ${borderColor}`, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'7px', color:textColor, letterSpacing:'0.2em' }}>
        {left || '◈ ARCHIV-STATUS: NOMINAL ◈ EPOCHE: UNBEKANNT'}
      </div>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'7px', color:textColor, letterSpacing:'0.2em' }}>
        {right || 'MERURIA // DIE VERWOBENEN REICHE'}
      </div>
    </div>
  );
}
window.SiteFooter = SiteFooter;
