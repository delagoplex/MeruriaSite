// page-header.jsx — shared page header banner
// Exposes: window.PageHeader

function _phHexPoints(s) {
  const cx = s / 2, cy = s / 2, r = s / 2;
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 30);
    pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
  }
  return pts.join(' ');
}

function PageHeader({ height = 180, showHex = false }) {
  return (
    <div style={{ position: 'relative', zIndex: 10, width: '100%', height: `${height}px`, background: 'linear-gradient(180deg,rgba(20,10,50,0.95) 0%,rgba(10,8,30,0.98) 100%)', borderBottom: '1px solid rgba(160,140,255,0.15)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%,rgba(124,77,255,0.18) 0%,transparent 50%),radial-gradient(ellipse at 80% 50%,rgba(45,125,255,0.14) 0%,transparent 50%),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(160,140,255,0.04) 60px,rgba(160,140,255,0.04) 61px)', pointerEvents: 'none' }} />
      {showHex && (
        <React.Fragment>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(135deg,transparent,transparent 18px,rgba(124,77,255,0.03) 18px,rgba(124,77,255,0.03) 19px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', left: '3%', top: '50%', transform: 'translateY(-50%)', opacity: 0.06, pointerEvents: 'none' }}>
            <svg width="120" height="120" viewBox="0 0 120 120"><polygon points={_phHexPoints(120)} fill="none" stroke="rgba(124,77,255,0.9)" strokeWidth="1" /></svg>
          </div>
          <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', opacity: 0.04, pointerEvents: 'none' }}>
            <svg width="160" height="160" viewBox="0 0 160 160"><polygon points={_phHexPoints(160)} fill="none" stroke="rgba(124,77,255,0.9)" strokeWidth="1" /></svg>
          </div>
        </React.Fragment>
      )}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(160,140,255,0.3)', letterSpacing: '0.3em', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>Kopfbild — Artwork hier ablegen</div>
    </div>
  );
}

window.PageHeader = PageHeader;
