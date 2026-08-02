/* ─────────────────────────────────────────────────────────────────
   Crafting UI — shared visual primitives, dice button, layout helpers.
   Vocabulary: Cinzel display, Raleway body, Share Tech Mono — purple
   accent on near-black. Mirrors Realismus.html / Spielerhandbuch Light.
   ───────────────────────────────────────────────────────────────── */

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ── HEX HELPERS ────────────────────────────────────────────────────
function hexPts(size) {
  const c = size / 2, pts = [];
  for (let i = 0; i < 6; i++) {
    const a = Math.PI / 180 * (60 * i - 30);
    pts.push(`${c + c * Math.cos(a)},${c + c * Math.sin(a)}`);
  }
  return pts.join(' ');
}

function Oct({ size = 8, color = 'rgba(124,77,255,0.6)', fill = 'rgba(124,77,255,0.2)', sw = 1, style = {} }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block', flexShrink: 0, ...style }}>
      <polygon points={hexPts(size)} fill={fill} stroke={color} strokeWidth={sw} />
    </svg>
  );
}

// ── SECTION HEADER ─────────────────────────────────────────────────
function SH({ mono, title, anchorId }) {
  return (
    <div id={anchorId} style={{ marginBottom: '24px', paddingBottom: '14px', borderBottom: '1px solid rgba(124,77,255,0.15)', scrollMarginTop: '70px' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(124,77,255,0.5)', textTransform: 'uppercase', marginBottom: '6px' }}>{mono}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Oct size={9} />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 300, letterSpacing: '0.22em', color: 'rgba(232,225,255,0.94)', textTransform: 'uppercase' }}>{title}</h2>
      </div>
      <div style={{ width: '48px', height: '1px', background: 'linear-gradient(90deg,rgba(124,77,255,0.77),transparent)', marginTop: '12px', animation: 'pulse-glow 3s infinite' }} />
    </div>
  );
}

function SubH({ children, id }) {
  return (
    <h3 id={id} style={{
      fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 400, letterSpacing: '0.18em',
      color: 'rgba(170,150,255,0.88)', textTransform: 'uppercase',
      margin: '32px 0 14px', paddingBottom: '8px', borderBottom: '1px solid rgba(124,77,255,0.12)',
      scrollMarginTop: '70px',
    }}>{children}</h3>
  );
}

function Txt({ c, children, s = {} }) {
  return (
    <p style={{
      fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', lineHeight: 1.85,
      color: 'rgba(204,194,240,0.7)', letterSpacing: '0.02em', marginBottom: '12px', textWrap: 'pretty',
      ...s,
    }}>{c || children}</p>
  );
}

function Acc({ c, children }) { return <strong style={{ color: 'rgba(180,155,255,0.95)', fontWeight: 500 }}>{c || children}</strong>; }
function Hl({ c, children })  { return <strong style={{ color: 'rgba(220,210,255,0.92)', fontWeight: 500 }}>{c || children}</strong>; }

// ── CALLOUT BOX ────────────────────────────────────────────────────
function Callout({ tone = 'info', title, children }) {
  const toneMap = {
    info:    { border: 'rgba(124,77,255,0.45)',  bg: 'rgba(124,77,255,0.06)',  tag: 'rgba(160,140,255,0.85)' },
    warn:    { border: 'rgba(220,170,60,0.55)',  bg: 'rgba(220,170,60,0.07)',  tag: 'rgba(240,200,90,0.92)' },
    bad:     { border: 'rgba(220,80,80,0.55)',   bg: 'rgba(220,80,80,0.07)',   tag: 'rgba(255,120,120,0.92)' },
    good:    { border: 'rgba(80,200,150,0.5)',   bg: 'rgba(80,200,150,0.06)',  tag: 'rgba(120,230,180,0.9)' },
  };
  const t = toneMap[tone] || toneMap.info;
  return (
    <div style={{
      border: `1px solid ${t.border}`, borderLeft: `2px solid ${t.border}`,
      background: t.bg, padding: '13px 18px', borderRadius: '0 4px 4px 0',
      margin: '14px 0',
    }}>
      {title && (
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: t.tag, marginBottom: '6px' }}>{title}</div>
      )}
      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '12.5px', lineHeight: 1.75, color: 'rgba(210,200,240,0.78)', textWrap: 'pretty' }}>
        {children}
      </div>
    </div>
  );
}

// ── TABLE ──────────────────────────────────────────────────────────
function Table({ cols, rows, dense = false, accent = 'rgba(124,77,255,0.18)' }) {
  return (
    <div style={{ border: '1px solid rgba(124,77,255,0.18)', borderRadius: '3px', overflow: 'auto', margin: '14px 0 22px', background: 'rgba(10,8,28,0.55)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)' }}>
        <thead>
          <tr>
            {cols.map((c, i) => (
              <th key={i} style={{
                background: accent, color: 'rgba(240,238,255,0.92)',
                fontFamily: 'var(--font-display)', fontSize: '10.5px', fontWeight: 400,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: dense ? '7px 10px' : '10px 14px', textAlign: c.align || 'left',
                borderBottom: '1px solid rgba(124,77,255,0.35)',
                whiteSpace: 'nowrap',
              }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: '1px solid rgba(124,77,255,0.07)' }}>
              {cols.map((c, j) => {
                const v = typeof c.render === 'function' ? c.render(r, i) : r[c.key];
                return (
                  <td key={j} style={{
                    padding: dense ? '7px 10px' : '10px 14px',
                    fontSize: '12.5px', fontWeight: 300,
                    color: j === 0 ? 'rgba(190,175,255,0.88)' : 'rgba(204,194,240,0.72)',
                    lineHeight: 1.6, verticalAlign: 'top',
                    textAlign: c.align || 'left',
                    whiteSpace: c.nowrap ? 'nowrap' : 'normal',
                  }}>{v}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── RARITY PILL ────────────────────────────────────────────────────
function RarityPill({ seltenheit, size = 'sm' }) {
  const r = window.RARITY_BY[seltenheit];
  if (!r) return null;
  const pad = size === 'sm' ? '2px 8px' : '3px 11px';
  const fs  = size === 'sm' ? '9px'     : '10.5px';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontFamily: 'var(--font-mono)', fontSize: fs, letterSpacing: '0.14em',
      padding: pad, borderRadius: '2px', textTransform: 'uppercase',
      color: r.hue, background: r.glow,
      border: `1px solid ${r.hue.replace(/[\d.]+\)$/, '0.35)')}`,
      whiteSpace: 'nowrap',
    }}>
      <span style={{ opacity: 0.5 }}>{r.short}</span>
      <span>{r.label}</span>
    </span>
  );
}

// ── DICE BUTTON ────────────────────────────────────────────────────
// Rolls XdY+Z. Shows result in a popup near the button, scoped to the
// caller. Spec is either a string like "1W20" / "2W6+3" or a function
// returning a custom result. onResult(n, raw) fires after roll settles.
function parseDiceSpec(spec) {
  // returns {count, sides, bonus}
  const m = String(spec).replace(/\s+/g, '').match(/^(\d+)?[wWdD](\d+)([+\-]\d+)?$/);
  if (!m) return null;
  return {
    count: parseInt(m[1] || '1', 10),
    sides: parseInt(m[2], 10),
    bonus: m[3] ? parseInt(m[3], 10) : 0,
  };
}

function rollDice(spec) {
  const p = parseDiceSpec(spec);
  if (!p) return { total: 0, rolls: [], spec };
  const rolls = [];
  for (let i = 0; i < p.count; i++) rolls.push(1 + Math.floor(Math.random() * p.sides));
  const sum = rolls.reduce((a, b) => a + b, 0);
  return { total: sum + p.bonus, rolls, bonus: p.bonus, sides: p.sides, spec };
}

// inline button. label optional; child node optional.
function DiceButton({ spec = '1W20', label, onResult, modifier = 0, children, size = 'md', tone = 'accent' }) {
  const [state, setState] = useState(null);  // null | {rolling, result}
  const [rolling, setRolling] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  function doRoll(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (rolling) return;
    setRolling(true);
    setState(null);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const r = rollDice(spec);
      const total = r.total + modifier;
      setState({ ...r, total, modifier });
      setRolling(false);
      if (onResult) onResult(total, r);
    }, 520);
  }

  const pad     = size === 'sm' ? '4px 10px' : size === 'lg' ? '10px 18px' : '6px 14px';
  const fs      = size === 'sm' ? '10px'     : size === 'lg' ? '13px'      : '11px';
  const iconSz  = size === 'sm' ? 13         : size === 'lg' ? 19          : 15;

  const toneColor = tone === 'bad'  ? 'rgba(255,110,110,0.92)'
                   : tone === 'good' ? 'rgba(120,230,180,0.92)'
                   : 'rgba(180,155,255,0.95)';
  const toneBg    = tone === 'bad'  ? 'rgba(220,70,70,0.10)'
                   : tone === 'good' ? 'rgba(80,200,150,0.10)'
                   : 'rgba(124,77,255,0.10)';
  const toneBorder= tone === 'bad'  ? 'rgba(220,70,70,0.4)'
                   : tone === 'good' ? 'rgba(80,200,150,0.4)'
                   : 'rgba(124,77,255,0.4)';

  const showResult = !!state && !rolling;

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', verticalAlign: 'middle' }}>
      <button
        onClick={doRoll}
        disabled={rolling}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: pad, background: toneBg, border: `1px solid ${toneBorder}`,
          borderRadius: '3px', cursor: rolling ? 'wait' : 'pointer',
          fontFamily: 'var(--font-display)', fontSize: fs, fontWeight: 400,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: toneColor, transition: 'all 0.2s',
        }}
        onMouseEnter={e => { if (!rolling) { e.currentTarget.style.background = toneBorder.replace('0.4', '0.18'); e.currentTarget.style.borderColor = toneColor; } }}
        onMouseLeave={e => { e.currentTarget.style.background = toneBg; e.currentTarget.style.borderColor = toneBorder; }}
      >
        <svg width={iconSz} height={iconSz} viewBox="0 0 24 24"
             style={{ animation: rolling ? 'diceRoll 0.5s linear infinite' : 'none' }}>
          <polygon points="12,2 22,8 22,16 12,22 2,16 2,8"
                   fill="none" stroke={toneColor} strokeWidth="1.4" />
          <polygon points="12,2 22,8 12,12 2,8" fill={toneColor} opacity="0.18" />
          <text x="12" y="15" textAnchor="middle" fontFamily="var(--font-display)"
                fontSize="8" fontWeight="600" fill={toneColor}>{rolling ? '?' : (state && state.spec) || spec.replace(/W/i, 'd')}</text>
        </svg>
        <span>{rolling ? 'würfle…' : (label || 'würfeln')}</span>
      </button>

      {showResult && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontFamily: 'var(--font-mono)', fontSize: fs,
          letterSpacing: '0.12em', color: 'rgba(232,225,255,0.95)',
          padding: '3px 9px', borderRadius: '2px',
          background: 'rgba(124,77,255,0.14)',
          border: '1px solid rgba(124,77,255,0.35)',
          animation: 'resultPop 0.4s cubic-bezier(.2,.7,.3,1.1)',
          whiteSpace: 'nowrap',
        }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: toneColor }}>{state.total}</span>
          {state.rolls && state.rolls.length > 1 && (
            <span style={{ opacity: 0.5, fontSize: '9px' }}>
              [{state.rolls.join('+')}{state.bonus ? (state.bonus > 0 ? `+${state.bonus}` : state.bonus) : ''}{modifier ? (modifier > 0 ? ` +${modifier}` : ` ${modifier}`) : ''}]
            </span>
          )}
          {state.rolls && state.rolls.length === 1 && state.bonus !== 0 && (
            <span style={{ opacity: 0.5, fontSize: '9px' }}>
              [{state.rolls[0]}{state.bonus > 0 ? `+${state.bonus}` : state.bonus}]
            </span>
          )}
        </span>
      )}
    </span>
  );
}

// ── SIDEBAR (chapter list) ─────────────────────────────────────────
function CraftSidebar({ chapters, activeId, onSelect }) {
  return (
    <aside style={{
      width: 'var(--sidebar-w)', flexShrink: 0,
      position: 'sticky', top: 'var(--nav-h)',
      height: 'calc(100vh - var(--nav-h))',
      borderRight: '1px solid rgba(160,140,255,0.1)',
      padding: '24px 0 40px',
      background: 'rgba(5,4,15,0.85)',
      backdropFilter: 'blur(12px)',
      zIndex: 50, overflowY: 'auto', alignSelf: 'flex-start',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.25em',
        color: 'rgba(160,140,255,0.4)', textTransform: 'uppercase',
        padding: '0 22px', marginBottom: '16px',
      }}>Handwerkerhandbuch</div>
      {chapters.map((ch) => {
        const on = ch.id === activeId;
        return (
          <button key={ch.id} onClick={() => onSelect(ch.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              width: '100%', textAlign: 'left',
              padding: '9px 22px',
              background: on ? 'rgba(124,77,255,0.13)' : 'transparent',
              border: 'none',
              borderLeft: on ? '2px solid #7c4dff' : '2px solid transparent',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontWeight: on ? 500 : 300, fontSize: '12.5px',
              letterSpacing: '0.06em',
              color: on ? '#f0eeff' : 'rgba(200,190,240,0.6)',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => { if (!on) { e.currentTarget.style.color = '#f0eeff'; e.currentTarget.style.borderLeftColor = 'rgba(124,77,255,0.55)'; e.currentTarget.style.background = 'rgba(124,77,255,0.08)'; } }}
            onMouseLeave={e => { if (!on) { e.currentTarget.style.color = 'rgba(200,190,240,0.6)'; e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.background = 'transparent'; } }}
          >
            <Oct size={7}
                 color={on ? '#7c4dff' : 'rgba(124,77,255,0.4)'}
                 fill={on ? 'rgba(124,77,255,0.44)' : 'rgba(124,77,255,0.12)'} />
            <span style={{ flex: 1 }}>{ch.label}</span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '8px', opacity: 0.45, letterSpacing: '0.15em',
            }}>{ch.roman}</span>
          </button>
        );
      })}

      <div style={{ height: '1px', background: 'rgba(124,77,255,0.12)', margin: '22px 22px 18px' }} />
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.25em',
        color: 'rgba(160,140,255,0.4)', textTransform: 'uppercase',
        padding: '0 22px', marginBottom: '12px',
      }}>Werkbank</div>
      {[
        { id:'mixer',  label:'Alchemie-Mixer' },
        { id:'rechner',label:'Handwerks-Rechner' },
        { id:'simulator', label:'Sammel-Simulator' },
      ].map(t => (
        <button key={t.id} onClick={() => onSelect(t.id)}
          style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            width: '100%', textAlign: 'left',
            padding: '9px 22px',
            background: activeId === t.id ? 'rgba(124,77,255,0.13)' : 'transparent',
            border: 'none',
            borderLeft: activeId === t.id ? '2px solid #7c4dff' : '2px solid transparent',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontWeight: activeId === t.id ? 500 : 300, fontSize: '12.5px',
            letterSpacing: '0.06em',
            color: activeId === t.id ? '#f0eeff' : 'rgba(200,190,240,0.6)',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => { if (activeId !== t.id) { e.currentTarget.style.color = '#f0eeff'; e.currentTarget.style.borderLeftColor = 'rgba(124,77,255,0.55)'; e.currentTarget.style.background = 'rgba(124,77,255,0.08)'; } }}
          onMouseLeave={e => { if (activeId !== t.id) { e.currentTarget.style.color = 'rgba(200,190,240,0.6)'; e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.background = 'transparent'; } }}
        >
          <Oct size={7}
               color={activeId === t.id ? '#7c4dff' : 'rgba(124,77,255,0.4)'}
               fill={activeId === t.id ? 'rgba(124,77,255,0.44)' : 'rgba(124,77,255,0.12)'} />
          <span>{t.label}</span>
        </button>
      ))}
    </aside>
  );
}

// ── FORMATTERS ─────────────────────────────────────────────────────
function fmtHade(n) {
  if (n == null) return '—';
  return n.toLocaleString('de-DE') + ' Hade';
}

function fmtZeit(h) {
  if (h == null) return '—';
  if (h < 1) return `${Math.round(h * 60)} Min`;
  if (h < 24) return `${h} h`;
  const tage = Math.floor(h / 8);
  return `${h} h · ${tage} Tage`;
}

// ── EXPORT TO WINDOW ───────────────────────────────────────────────
Object.assign(window, {
  Oct, SH, SubH, Txt, Acc, Hl, Callout, Table, RarityPill,
  DiceButton, rollDice, parseDiceSpec,
  CraftSidebar,
  fmtHade, fmtZeit,
});
