// filter-utils.jsx
// Exposes: window.useDragScroll, window.XBtn, window.FilterGroup

const { useState, useRef, useCallback, useEffect } = React;

function useDragScroll({ horizontal = false, vertical = false } = {}) {
  const ref = useRef(null);
  const drag = useRef({ active: false, moved: false, startX: 0, startY: 0, scrollLeft: 0, scrollTop: 0 });

  const onMouseDown = useCallback((e) => {
    if (!ref.current) return;
    const d = drag.current;
    d.active = true;
    d.moved = false;
    d.startX = e.pageX;
    d.startY = e.pageY;
    d.scrollLeft = ref.current.scrollLeft;
    d.scrollTop = ref.current.scrollTop;
  }, []);

  const onClickCapture = useCallback((e) => {
    if (drag.current.moved) { e.stopPropagation(); e.preventDefault(); }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
      if (horizontal) el.scrollLeft = d.scrollLeft - dx;
      if (vertical) el.scrollTop = d.scrollTop - dy;
    };
    const onUp = () => {
      const d = drag.current;
      if (!d.active) return;
      d.active = false;
      el.style.cursor = '';
      el.style.userSelect = '';
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
  }, [horizontal, vertical]);

  return { ref, onMouseDown, onClickCapture };
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
        style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: open ? '8px' : '0', paddingBottom:'5px', borderBottom:'1px solid rgba(160,140,255,0.08)', cursor: collapsible ? 'pointer' : 'default', userSelect:'none' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
          {collapsible && (
            <svg width="8" height="8" viewBox="0 0 8 8" style={{ flexShrink:0, transition:'transform 0.18s', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', opacity:0.45 }}>
              <polygon points="1,1 7,4 1,7" fill="rgba(160,140,255,1)" />
            </svg>
          )}
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.28em', color:'rgba(160,140,255,0.5)', textTransform:'uppercase' }}>{title}</div>
        </div>
        {active && onReset && <XBtn onClick={e => { e.stopPropagation(); onReset(); }} />}
      </div>
      {(!collapsible || open) && <div style={{ animation: collapsible ? 'fadeIn 0.15s ease' : 'none' }}>{children}</div>}
    </div>
  );
}

Object.assign(window, { useDragScroll, XBtn, FilterGroup });
