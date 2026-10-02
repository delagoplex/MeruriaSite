/* Shared Carousel component — used by index.html and Galerie.html */
(function() {
const { useState, useEffect, useRef } = React;

const CP_W=152, CP_H=196;
const CL_W=272, CL_H=196;
const CS_W=CP_H;
const CGAP=28;
const BASE_SPD=0.036, CFRIC=0.9984;

function Carousel({ images, reverse }) {
  const trackRef   = useRef(null);
  const revRef     = useRef(reverse);
  revRef.current   = reverse;
  const phys       = useRef({ offset:0, vel:0, drag:false, lx:0, lt:0 }).current;
  const [hovIdx,      setHovIdx]   = useState(null);
  const [lightbox,    setLightbox] = useState(null);
  const aspectsRef = useRef({});
  const singleWRef = useRef(0);
  const [, setAspectVer] = useState(0);
  const didDragRef = useRef(false);
  const downXRef   = useRef(0);
  const n = images.length;

  function imgDims(img) {
    const fmt = aspectsRef.current[img.id] || (img.landscape ? 'landscape' : 'portrait');
    if (fmt === 'square')    return { w:CS_W, h:CP_H };
    if (fmt === 'landscape') return { w:CL_W, h:CL_H };
    return { w:CP_W, h:CP_H };
  }

  function handleAspect(id, e) {
    const el = e.currentTarget;
    if (!el.naturalWidth) return;
    const fmt = el.naturalWidth === el.naturalHeight ? 'square'
              : el.naturalWidth > el.naturalHeight   ? 'landscape' : 'portrait';
    if (aspectsRef.current[id] !== fmt) {
      aspectsRef.current[id] = fmt;
      setAspectVer(v => v + 1);
    }
  }

  const singleW = images.reduce((s, img) => s + imgDims(img).w + CGAP, 0);
  singleWRef.current = singleW;
  const tripled = [...images, ...images, ...images];

  useEffect(() => {
    phys.offset = singleWRef.current;
    let raf, last = performance.now();
    function tick(now) {
      const dt = Math.min(now - last, 50); last = now;
      const sw = singleWRef.current;
      if (!phys.drag) {
        if (Math.abs(phys.vel) > 0.002) phys.vel *= Math.pow(CFRIC, dt); else phys.vel = 0;
        phys.offset += ((revRef.current ? -1 : 1) * BASE_SPD + phys.vel) * dt;
        while (phys.offset >= sw * 2) phys.offset -= sw;
        while (phys.offset < sw)     phys.offset += sw;
        if (trackRef.current) trackRef.current.style.transform = `translateX(${-phys.offset}px)`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    function onMove(e) {
      if (!phys.drag) return;
      if (Math.abs(e.clientX - downXRef.current) > 5) didDragRef.current = true;
      const now = performance.now(), dx = e.clientX - phys.lx, dt = now - phys.lt;
      if (dt > 0) phys.vel = -dx / dt;
      phys.offset -= dx;
      const sw = singleWRef.current;
      while (phys.offset >= sw * 2) phys.offset -= sw;
      while (phys.offset < sw)     phys.offset += sw;
      if (trackRef.current) trackRef.current.style.transform = `translateX(${-phys.offset}px)`;
      phys.lx = e.clientX; phys.lt = now;
    }
    function onUp() { phys.drag = false; }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup',   onUp);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
  }, []);

  function onDown(e) {
    e.preventDefault();
    phys.drag = true; phys.lx = e.clientX; phys.lt = performance.now(); phys.vel = 0;
    didDragRef.current = false; downXRef.current = e.clientX;
  }

  function iStyle(ii) {
    const hov = hovIdx === ii;
    const { w, h } = imgDims(images[ii]);
    let tx = 0;
    if (hovIdx !== null && !hov) {
      let d = ii - hovIdx; if (d > n/2) d -= n; if (d < -n/2) d += n;
      if (Math.abs(d) <= 3) tx = (d > 0 ? 1 : -1) * 28 / Math.abs(d);
    }
    return {
      width:w, height:h, flexShrink:0, borderRadius:4, overflow:'hidden', position:'relative', cursor:'pointer',
      alignSelf:'flex-end',
      transform: hov ? 'scale(1.18) translateY(-12px)' : (tx ? `translateX(${tx}px)` : undefined),
      boxShadow: hov ? '0 0 26px rgba(124,77,255,0.88),0 0 52px rgba(124,77,255,0.28)' : 'none',
      border: hov ? '1.5px solid rgba(124,77,255,0.88)' : '1.5px solid rgba(124,77,255,0.12)',
      zIndex: hov ? 20 : 1,
      transition: 'transform 0.22s ease,box-shadow 0.2s ease,border-color 0.2s ease',
    };
  }

  return (
    <>
      <div onMouseDown={onDown} style={{ position:'relative', overflow:'visible', height:CP_H+52, userSelect:'none', cursor:'grab' }}>
        <div ref={trackRef} style={{ position:'absolute', top:26, left:0, display:'flex', gap:CGAP, alignItems:'flex-start', height:CP_H, willChange:'transform' }}>
          {tripled.map((img, gi) => {
            const ii = gi % n;
            const im = images[ii];
            return (
              <div key={gi} style={iStyle(ii)}
                   onMouseEnter={() => setHovIdx(ii)}
                   onMouseLeave={() => setHovIdx(null)}
                   onClick={() => { if (!didDragRef.current && im.img) setLightbox(im); }}>
                {im.img ? (
                  <img src={im.img} alt={im.title} loading="lazy" onLoad={e => handleAspect(im.id, e)}
                    style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
                ) : (
                  <div style={{ width:'100%', height:'100%', position:'relative', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:6,
                    background:`repeating-linear-gradient(-45deg,transparent,transparent 8px,oklch(0.65 0.18 ${im.hue||270} / 0.13) 8px,oklch(0.65 0.18 ${im.hue||270} / 0.13) 9px),linear-gradient(160deg,rgba(28,16,62,0.97) 0%,rgba(14,9,36,0.98) 100%)`,
                  }}>
                    <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 50% 45%,oklch(0.65 0.18 ${im.hue||270} / 0.2) 0%,transparent 60%)` }}/>
                    <svg viewBox="0 0 40 30" width={im.landscape?22:18} height={im.landscape?16:13} fill="none" style={{ opacity:0.55, zIndex:1, flexShrink:0 }}>
                      <rect x="1" y="1" width="38" height="28" rx="2" stroke={`oklch(0.65 0.18 ${im.hue||270})`} strokeWidth="1.3"/>
                      <circle cx="12" cy="11" r="4" stroke={`oklch(0.65 0.18 ${im.hue||270})`} strokeWidth="1" opacity="0.8"/>
                      <path d="M1 22 L10 15 L18 20 L26 13 L39 22" stroke={`oklch(0.65 0.18 ${im.hue||270})`} strokeWidth="1.1" opacity="0.8"/>
                    </svg>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:7, letterSpacing:'0.18em', color:`oklch(0.65 0.18 ${im.hue||270} / 0.52)`, textTransform:'uppercase', zIndex:1, textAlign:'center', padding:'0 6px', lineHeight:1.3 }}>artwork</span>
                  </div>
                )}
                <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'5px 7px', background:'rgba(5,4,15,0.83)', borderTop:'1px solid rgba(124,77,255,0.12)' }}>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'rgba(240,238,255,0.6)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{im.title}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ position:'absolute', top:0, left:0, bottom:0, width:100, background:'linear-gradient(to right,#05040f 40%,transparent)', pointerEvents:'none', zIndex:10 }}/>
        <div style={{ position:'absolute', top:0, right:0, bottom:0, width:100, background:'linear-gradient(to left,#05040f 40%,transparent)', pointerEvents:'none', zIndex:10 }}/>
      </div>

      {lightbox && ReactDOM.createPortal(
        <div onClick={() => setLightbox(null)} style={{
          position:'fixed', inset:0, zIndex:99999,
          background:'rgba(5,4,15,0.92)', backdropFilter:'blur(14px)',
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
          cursor:'zoom-out',
        }}>
          <img src={lightbox.img} alt={lightbox.title} loading="eager" onClick={e => e.stopPropagation()} style={{
            maxWidth:'90vw', maxHeight:'86vh', objectFit:'contain',
            borderRadius:5, boxShadow:'0 0 80px rgba(124,77,255,0.3), 0 0 0 1px rgba(124,77,255,0.2)',
          }}/>
          {lightbox.title && (
            <div style={{ marginTop:16, fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.2em', color:'rgba(200,190,240,0.5)', textTransform:'uppercase' }}>
              {lightbox.title}
            </div>
          )}
          <button onClick={() => setLightbox(null)} style={{
            position:'absolute', top:20, right:24, background:'transparent',
            border:'1px solid rgba(160,140,255,0.25)', color:'rgba(200,190,240,0.6)',
            borderRadius:3, fontFamily:'var(--font-mono)', fontSize:16, lineHeight:1,
            width:34, height:34, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
          }}>×</button>
        </div>,
        document.body
      )}
    </>
  );
}

Object.assign(window, { Carousel });
})();
