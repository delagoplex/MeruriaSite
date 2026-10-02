// filter-utils.jsx
// Exposes: window.useDragScroll, window.XBtn, window.FilterGroup

const { useState, useMemo, useRef, useCallback, useEffect } = React;

const FRICTION = 0.88;
const MIN_V = 0.4;

function useDragScroll({ horizontal = false, vertical = false } = {}) {
  const ref = useRef(null);
  const drag = useRef({ active: false, moved: false, startX: 0, startY: 0, scrollLeft: 0, scrollTop: 0, vx: 0, vy: 0, lastX: 0, lastY: 0 });
  const rafRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true); // assume no overflow until measured

  const onMouseDown = useCallback((e) => {
    if (!ref.current) return;
    cancelAnimationFrame(rafRef.current);
    const d = drag.current;
    d.active = true;
    d.moved = false;
    d.startX = e.pageX;
    d.startY = e.pageY;
    d.scrollLeft = ref.current.scrollLeft;
    d.scrollTop = ref.current.scrollTop;
    d.vx = 0;
    d.vy = 0;
    d.lastX = e.pageX;
    d.lastY = e.pageY;
  }, []);

  const onClickCapture = useCallback((e) => {
    if (drag.current.moved) { e.stopPropagation(); e.preventDefault(); }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateFade = () => {
      if (vertical) {
        setAtStart(el.scrollTop <= 0);
        setAtEnd(el.scrollTop + el.clientHeight >= el.scrollHeight - 2);
      } else if (horizontal) {
        setAtStart(el.scrollLeft <= 0);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
      }
    };

    const onMove = (e) => {
      const d = drag.current;
      if (!d.active) return;
      const dx = e.pageX - d.startX;
      const dy = e.pageY - d.startY;
      if (!d.moved && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
        d.moved = true;
        el.style.cursor = 'grabbing';
        el.style.userSelect = 'none';
      }
      if (!d.moved) return;
      // smooth velocity via exponential moving average
      d.vx = 0.6 * (e.pageX - d.lastX) + 0.4 * d.vx;
      d.vy = 0.6 * (e.pageY - d.lastY) + 0.4 * d.vy;
      d.lastX = e.pageX;
      d.lastY = e.pageY;
      if (horizontal) el.scrollLeft = d.scrollLeft - dx;
      if (vertical) el.scrollTop = d.scrollTop - dy;
    };

    const onUp = () => {
      const d = drag.current;
      if (!d.active) return;
      d.active = false;
      el.style.cursor = '';
      el.style.userSelect = '';
      if (!d.moved) return;
      let vx = d.vx;
      let vy = d.vy;
      const coast = () => {
        vx *= FRICTION;
        vy *= FRICTION;
        if (Math.abs(vx) < MIN_V && Math.abs(vy) < MIN_V) return;
        if (horizontal) el.scrollLeft -= vx;
        if (vertical) el.scrollTop -= vy;
        rafRef.current = requestAnimationFrame(coast);
      };
      rafRef.current = requestAnimationFrame(coast);
    };

    updateFade();
    el.addEventListener('scroll', updateFade);
    const ro = new ResizeObserver(updateFade);
    ro.observe(el);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      cancelAnimationFrame(rafRef.current);
      el.removeEventListener('scroll', updateFade);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [horizontal, vertical]);

  const fadeStyle = useMemo(() => {
    const px = 40;
    let g;
    if (vertical) {
      if (!atStart && !atEnd) g = `linear-gradient(to bottom, transparent, black ${px}px, black calc(100% - ${px}px), transparent)`;
      else if (!atStart)      g = `linear-gradient(to bottom, transparent, black ${px}px)`;
      else if (!atEnd)        g = `linear-gradient(to bottom, black calc(100% - ${px}px), transparent)`;
    } else if (horizontal) {
      if (!atStart && !atEnd) g = `linear-gradient(to right, transparent, black ${px}px, black calc(100% - ${px}px), transparent)`;
      else if (!atStart)      g = `linear-gradient(to right, transparent, black ${px}px)`;
      else if (!atEnd)        g = `linear-gradient(to right, black calc(100% - ${px}px), transparent)`;
    }
    return g ? { maskImage: g, WebkitMaskImage: g } : {};
  }, [atStart, atEnd, vertical, horizontal]);

  return { ref, onMouseDown, onClickCapture, fadeStyle };
}

function XBtn({ onClick }) {
  return (
    <button onClick={onClick} style={{ width:'16px', height:'16px', fontFamily:'var(--font-mono)', fontSize:'8px', color:'rgba(230,90,90,0.9)', background:'rgba(200,60,60,0.15)', border:'1px solid rgba(220,80,80,0.5)', borderRadius:'2px', cursor:'pointer', padding:0, lineHeight:1, transition:'all 0.15s', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }}
      onMouseEnter={e => { e.currentTarget.style.color='#fff'; e.currentTarget.style.background='rgba(200,60,60,0.35)'; e.currentTarget.style.borderColor='rgba(230,90,90,0.8)'; }}
      onMouseLeave={e => { e.currentTarget.style.color='rgba(230,90,90,0.9)'; e.currentTarget.style.background='rgba(200,60,60,0.15)'; e.currentTarget.style.borderColor='rgba(220,80,80,0.5)'; }}>
      ✕
    </button>
  );
}

function FilterGroup({ title, active, onReset, children, collapsible }) {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ marginBottom:'20px' }}>
      <div
        onClick={collapsible ? () => setOpen(o => !o) : undefined}
        style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: open ? '8px' : '0', paddingBottom:'5px', borderBottom:'1px solid rgba(var(--accent-rgb),0.08)', cursor: collapsible ? 'pointer' : 'default', userSelect:'none' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
          {collapsible && (
            <svg width="8" height="8" viewBox="0 0 8 8" style={{ flexShrink:0, transition:'transform 0.18s', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', opacity:0.45 }}>
              <polygon points="1,1 7,4 1,7" fill="rgba(var(--accent-rgb),1)" />
            </svg>
          )}
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.28em', color:'rgba(var(--accent-rgb),0.5)', textTransform:'uppercase' }}>{title}</div>
        </div>
        {active && onReset && <XBtn onClick={e => { e.stopPropagation(); onReset(); }} />}
      </div>
      {(!collapsible || open) && <div style={{ animation: collapsible ? 'fadeIn 0.15s ease' : 'none' }}>{children}</div>}
    </div>
  );
}

Object.assign(window, { useDragScroll, XBtn, FilterGroup });
