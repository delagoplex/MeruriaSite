// section-banner.jsx — section heading row used by all division pages
// Exposes: window.SectionBanner
// Props: label (string), accent (hex color string), style (optional style overrides)

function SectionBanner({ label, accent, style }) {
  const hex = (alpha) => `${accent}${alpha}`;
  const pts6 = (s) => {
    const c = s / 2;
    return Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 180) * (60 * i - 30);
      return `${c + c * Math.cos(a)},${c + c * Math.sin(a)}`;
    }).join(' ');
  };
  return (
    <div className="reveal-left div-section-header" style={style}>
      <svg width="8" height="8" viewBox="0 0 8 8">
        <polygon points={pts6(8)} fill={hex('44')} stroke={accent} strokeWidth="0.8" />
      </svg>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.28em', color:hex('77'), textTransform:'uppercase' }}>
        {label}
      </div>
      <div style={{ flex:1, height:'1px', background:`linear-gradient(90deg, ${hex('44')}, rgba(124,77,255,0.2), transparent)` }} />
      <svg width="5" height="5" viewBox="0 0 5 5">
        <polygon points={pts6(5)} fill="rgba(124,77,255,0.3)" stroke="rgba(124,77,255,0.5)" strokeWidth="0.6" />
      </svg>
    </div>
  );
}

window.SectionBanner = SectionBanner;
