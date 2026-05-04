// particle-field.jsx — shared particle background components
// Exposes: window.ParticleField, window.ParticleFieldEnhanced

const { useRef, useEffect } = React;

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
}

// Single-canvas variant used on all pages except index.html
function ParticleField({ mouseX, mouseY, accent='#a08cff', clipTop=0 }) {
  const [accentR, accentG, accentB] = hexToRgb(accent);
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x:0.5, y:0.5 });
  useEffect(() => { mouse.current = { x:mouseX, y:mouseY }; }, [mouseX, mouseY]);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width=canvas.offsetWidth; canvas.height=canvas.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    particles.current = Array.from({length:50}, ()=>({ x:Math.random(), y:Math.random(), r:Math.random()*2.2+1.0, vx:(Math.random()-0.5)*0.03, vy:(Math.random()-0.5)*0.03, alpha:Math.random()*0.15+0.03 }));
    const tick = () => {
      const w=canvas.width, h=canvas.height;
      const shiftX=(mouse.current.x-0.5)*-14, shiftY=(mouse.current.y-0.5)*-14;
      ctx.clearRect(0,0,w,h);
      particles.current.forEach(p => {
        p.x+=p.vx/w*60; p.y+=p.vy/h*60;
        if(p.x<0)p.x=1; if(p.x>1)p.x=0; if(p.y<0)p.y=1; if(p.y>1)p.y=0;
        ctx.beginPath(); ctx.arc(p.x*w+shiftX, p.y*h+shiftY, p.r, 0, Math.PI*2);
        ctx.fillStyle=`rgba(${accentR},${accentG},${accentB},${p.alpha})`; ctx.fill();
      });
      animRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize); };
  }, []);
  const style = { position:'fixed', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0 };
  if (clipTop) style.clipPath = `inset(${clipTop}px 0 0 0)`;
  return <canvas ref={canvasRef} style={style} />;
}

// Dual-canvas enhanced variant used on index.html
function ParticleFieldEnhanced({ mouseX, mouseY }) {
  const bgRef = useRef(null);
  const fgRef = useRef(null);
  const animRef = useRef(null);
  const bgP = useRef([]);
  const fgP = useRef([]);
  const mouse = useRef({ x:0.5, y:0.5 });
  useEffect(() => { mouse.current = { x: mouseX, y: mouseY }; }, [mouseX, mouseY]);
  useEffect(() => {
    const bg = bgRef.current, fg = fgRef.current;
    if (!bg || !fg) return;
    const bgCtx = bg.getContext('2d'), fgCtx = fg.getContext('2d');
    const resize = () => { bg.width = fg.width = bg.offsetWidth; bg.height = fg.height = bg.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    bgP.current = Array.from({length:55}, () => ({ x:Math.random(), y:Math.random(), r:Math.random()*1.4+0.6, vx:(Math.random()-0.5)*0.06, vy:(Math.random()-0.5)*0.06, alpha:Math.random()*0.25+0.06 }));
    fgP.current = Array.from({length:18}, () => ({ x:Math.random(), y:Math.random(), r:Math.random()*3+2, vx:(Math.random()-0.5)*0.1, vy:(Math.random()-0.5)*0.1, alpha:Math.random()*0.18+0.05 }));
    const tick = () => {
      const w = bg.width, h = bg.height;
      const mx = mouse.current.x, my = mouse.current.y;
      bgCtx.clearRect(0,0,w,h);
      const bsx = (mx-0.5)*-16, bsy = (my-0.5)*-16;
      bgP.current.forEach(p => {
        p.x += p.vx/w*60; p.y += p.vy/h*60;
        if(p.x<0)p.x=1; if(p.x>1)p.x=0; if(p.y<0)p.y=1; if(p.y>1)p.y=0;
        bgCtx.beginPath(); bgCtx.arc(p.x*w+bsx, p.y*h+bsy, p.r, 0, Math.PI*2);
        bgCtx.fillStyle = `rgba(160,140,255,${p.alpha})`; bgCtx.fill();
      });
      fgCtx.clearRect(0,0,w,h);
      const fsx = (mx-0.5)*28, fsy = (my-0.5)*28;
      fgP.current.forEach(p => {
        p.x += p.vx/w*55; p.y += p.vy/h*55;
        if(p.x<0)p.x=1; if(p.x>1)p.x=0; if(p.y<0)p.y=1; if(p.y>1)p.y=0;
        const px = p.x*w+fsx, py = p.y*h+fsy;
        const g = fgCtx.createRadialGradient(px,py,0,px,py,p.r*2.5);
        g.addColorStop(0,`rgba(190,170,255,${p.alpha})`);
        g.addColorStop(1,`rgba(120,100,255,0)`);
        fgCtx.beginPath(); fgCtx.arc(px,py,p.r*2.5,0,Math.PI*2); fgCtx.fillStyle=g; fgCtx.fill();
        fgCtx.beginPath(); fgCtx.arc(px,py,p.r,0,Math.PI*2);
        fgCtx.fillStyle=`rgba(220,210,255,${p.alpha*1.3})`; fgCtx.fill();
      });
      animRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize); };
  }, []);
  return (
    <>
      <canvas ref={bgRef} style={{position:'fixed',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:0}}/>
      <canvas ref={fgRef} style={{position:'fixed',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:0,opacity:0.7}}/>
    </>
  );
}

Object.assign(window, { ParticleField, ParticleFieldEnhanced });
