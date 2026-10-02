// Shared monster stat-block detail component.
// Exposes window.MonsterDetail (and window.MonsterTypeColor).
// Loaded as <script type="text/babel"> — no module system.

(function () {
const { useState, useRef, useEffect, useLayoutEffect } = React;

function _formatCR(cr) {
  if (cr === 0) return '0';
  if (cr === 0.125) return '1/8';
  if (cr === 0.25) return '1/4';
  if (cr === 0.5) return '1/2';
  return String(cr);
}
function _mod(score) {
  const m = Math.floor((score - 10) / 2);
  return (m >= 0 ? '+' : '') + m;
}
function _rollDice(expr) {
  const m = expr.match(/^(\d+)W(\d+)([+-]\d+)?$/i);
  if (!m) return null;
  const count = parseInt(m[1]), sides = parseInt(m[2]), bonus = m[3] ? parseInt(m[3]) : 0;
  let total = bonus;
  for (let i = 0; i < count; i++) total += Math.floor(Math.random() * sides) + 1;
  return Math.max(0, total);
}

const _TYPE_COLORS = {
  'Unhold':       'oklch(0.48 0.28   8)',
  'Drache':       'oklch(0.62 0.28  32)',
  'Tier':         'oklch(0.64 0.19  57)',
  'Riese':        'oklch(0.61 0.11  78)',
  'Himmlisch':    'oklch(0.82 0.16  95)',
  'Elementar':    'oklch(0.68 0.26 120)',
  'Schlick':      'oklch(0.58 0.28 140)',
  'Pflanze':      'oklch(0.62 0.24 158)',
  'Monstrosität': 'oklch(0.48 0.20 178)',
  'Konstrukt':    'oklch(0.58 0.16 208)',
  'Humanoid':     'oklch(0.62 0.16 245)',
  'Untoter':      'oklch(0.50 0.20 278)',
  'Aberration':   'oklch(0.52 0.28 305)',
  'Feenwesen':    'oklch(0.66 0.27 345)',
};
const _typeColor = t => _TYPE_COLORS[t] || 'oklch(0.60 0.10 200)';
const _alpha = (c, a) => c.replace(')', ` / ${a})`);

const _ART_GENDER = { feminine: ['Aberration','Monstrosität','Pflanze','Fee','Ooze'], neuter: ['Konstrukt','Tier'] };
const _SIZE_DECL = {
  'Winzig':     ['Winziger',     'Winzige',     'Winziges'],
  'Klein':      ['Kleiner',      'Kleine',       'Kleines'],
  'Mittelgroß': ['Mittelgroßer', 'Mittelgroße',  'Mittelgroßes'],
  'Groß':       ['Großer',       'Große',        'Großes'],
  'Riesig':     ['Riesiger',     'Riesige',      'Riesiges'],
  'Gigantisch': ['Gigantischer', 'Gigantische',  'Gigantisches'],
};
function _declineSize(groesse, art) {
  const decl = _SIZE_DECL[groesse];
  if (!decl) return groesse;
  const idx = _ART_GENDER.feminine.includes(art) ? 1 : _ART_GENDER.neuter.includes(art) ? 2 : 0;
  return decl[idx];
}

function _OctSvg({ size = 10, color = 'currentColor', fill = 'none', strokeWidth = 1 }) {
  const cx = size / 2, cy = size / 2, r = size / 2;
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 30);
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(' ');
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display:'block', flexShrink:0 }}>
      <polygon points={pts} fill={fill} stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

function _SectionLabel({ title, color }) {
  const c = color || 'rgba(160,140,255,0.9)';
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'7px', marginBottom:'8px' }}>
      <_OctSvg size={8} color={_alpha(c, 0.6)} fill={_alpha(c, 0.12)} strokeWidth={1} />
      <span style={{ fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.28em', color:_alpha(c, 0.6), textTransform:'uppercase', flexShrink:0 }}>{title}</span>
      <div style={{ flex:1, height:'1px', background:`linear-gradient(90deg,${_alpha(c, 0.35)},transparent)` }} />
    </div>
  );
}

function _MetaRow({ label, value, accent, color }) {
  if (!value) return null;
  const lc = color ? _alpha(color, 0.5) : 'rgba(160,140,255,0.5)';
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'2px' }}>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'7.5px', letterSpacing:'0.26em', color: lc, textTransform:'uppercase' }}>{label}</div>
      <div style={{ fontFamily:'var(--font-body)', fontSize:'11.5px', fontWeight:'300', color: accent || 'rgba(var(--text-rgb),0.8)', letterSpacing:'0.02em', lineHeight:1.5, maxWidth:'80px' }}>{value}</div>
    </div>
  );
}

function _HPRow({ monster, onRoll, color }) {
  const lc  = color ? _alpha(color, 0.5)  : 'rgba(160,140,255,0.5)';
  const dc  = color ? _alpha(color, 0.4)  : 'rgba(160,140,255,0.4)';
  const bc  = color ? _alpha(color, 0.75) : 'rgba(180,160,255,0.75)';
  const bb  = color ? _alpha(color, 0.08) : 'rgba(160,140,255,0.08)';
  const bbd = color ? _alpha(color, 0.3)  : 'rgba(160,140,255,0.3)';
  const bbh = color ? _alpha(color, 0.2)  : 'rgba(160,140,255,0.2)';
  const bdh = color ? _alpha(color, 0.6)  : 'rgba(160,140,255,0.6)';
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'2px' }}>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'7.5px', letterSpacing:'0.26em', color: lc, textTransform:'uppercase' }}>Trefferpunkte</div>
      <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
        <div style={{ fontFamily:'var(--font-body)', fontSize:'11.5px', fontWeight:'300', letterSpacing:'0.02em', lineHeight:1.5, color:'rgba(var(--text-rgb),0.8)' }}>
          {monster.tp}<span style={{ color: dc, marginLeft:'5px' }}>({monster.tp_wuerfel})</span>
        </div>
        <button onClick={onRoll} title="Trefferpunkte würfeln"
          style={{ display:'flex', alignItems:'center', gap:'4px', fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.1em', padding:'0 7px', height:'18px', border:`1px solid ${bbd}`, background: bb, color: bc, cursor:'pointer', borderRadius:'2px', transition:'all 0.15s', flexShrink:0 }}
          onMouseEnter={e => { e.currentTarget.style.background=bbh; e.currentTarget.style.borderColor=bdh; e.currentTarget.style.color='var(--white)'; }}
          onMouseLeave={e => { e.currentTarget.style.background=bb; e.currentTarget.style.borderColor=bbd; e.currentTarget.style.color=bc; }}>
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none" style={{ flexShrink:0 }}>
            <rect x="0.8" y="0.8" width="8.4" height="8.4" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
            <circle cx="3.3" cy="3.3" r="0.9" fill="currentColor"/>
            <circle cx="6.7" cy="6.7" r="0.9" fill="currentColor"/>
          </svg>
          Roll
        </button>
      </div>
    </div>
  );
}

function _AbilityScore({ label, score, color }) {
  const lc = color ? _alpha(color, 0.55) : 'rgba(160,140,255,0.55)';
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'2px', flex:1 }}>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.18em', color: lc, textTransform:'uppercase' }}>{label}</div>
      <div style={{ fontFamily:'var(--font-body)', fontSize:'14px', fontWeight:'400', color:'var(--white)' }}>{score}</div>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'9px', color:'rgba(var(--text-rgb),0.7)' }}>{_mod(score)}</div>
    </div>
  );
}

function _SizeGrid({ groesse, color }) {
  const steps = { 'Winzig':1, 'Klein':1, 'Mittel':1, 'Mittelgroß':1, 'Groß':2, 'Riesig':3, 'Gigantisch':4 };
  const n = steps[groesse] || 1;
  const GRID = 4, CELL = 17, GAP = 3;
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:`${GAP}px` }}>
      {Array.from({ length: GRID }, (_, row) => (
        <div key={row} style={{ display:'flex', gap:`${GAP}px` }}>
          {Array.from({ length: GRID }, (_, col) => {
            const lit = row >= GRID - n && col < n;
            return <div key={col} style={{ width:`${CELL}px`, height:`${CELL}px`, background: lit ? _alpha(color, 0.45) : 'rgba(255,255,255,0.05)', border:`0.5px solid ${lit ? _alpha(color, 0.6) : 'rgba(255,255,255,0.12)'}` }} />;
          })}
        </div>
      ))}
    </div>
  );
}

function _TagList({ items, color }) {
  if (!items || items.length === 0) return null;
  const bg  = color ? _alpha(color, 0.08) : 'rgba(160,140,255,0.08)';
  const bdr = color ? _alpha(color, 0.2)  : 'rgba(160,140,255,0.2)';
  return (
    <div style={{ display:'flex', flexWrap:'wrap', gap:'4px' }}>
      {items.map((item, i) => (
        <span key={i} style={{ fontFamily:'var(--font-body)', fontSize:'10.5px', fontWeight:'300', padding:'2px 8px', background: bg, border:`1px solid ${bdr}`, borderRadius:'2px', color:'rgba(210,200,255,0.8)', letterSpacing:'0.03em' }}>{item}</span>
      ))}
    </div>
  );
}

function _MonsterRollTable({ tabelle, accentColor }) {
  const [rolling, setRolling] = useState(false);
  const [highlight, setHighlight] = useState(null);
  const rows = tabelle.rows;
  const ac = accentColor || 'rgba(160,140,255,0.9)';
  const a = (opacity) => {
    const m = ac.match(/oklch\(([^)]+)\)/);
    if (m) return `oklch(${m[1].replace(/\s+\d*\.?\d+\s*$/, '')} / ${opacity})`;
    return ac.replace(/[\d.]+\)$/, `${opacity})`);
  };
  const roll = () => {
    if (rolling) return;
    setRolling(true); setHighlight(null);
    let count = 0;
    const iv = setInterval(() => {
      setHighlight(Math.floor(Math.random() * rows.length));
      count++;
      if (count > 14) { clearInterval(iv); setHighlight(Math.floor(Math.random() * rows.length)); setRolling(false); }
    }, 60);
  };
  return (
    <div style={{ marginTop:'10px' }}>
      <button onClick={roll} style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'5px 14px', background:a(0.1), border:`1px solid ${a(0.3)}`, borderRadius:'4px', color:ac, fontFamily:'var(--font-display)', fontSize:'10px', letterSpacing:'0.14em', textTransform:'uppercase', cursor:'pointer', marginBottom:'10px', transition:'all 0.2s' }}>
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="8.5" cy="15.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>
        Würfeln
      </button>
      <div style={{ border:`1px solid ${a(0.15)}`, borderRadius:'4px', overflow:'hidden' }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontFamily:'var(--font-body)', fontSize:'11px' }}>
          <thead><tr>{tabelle.header.map((h, j) => <th key={j} style={{ textAlign:'left', padding:'6px 10px', background:a(0.12), color:ac, fontFamily:'var(--font-display)', fontWeight:'400', fontSize:'10px', letterSpacing:'0.14em', textTransform:'uppercase', borderBottom:`1px solid ${a(0.3)}` }}>{h}</th>)}</tr></thead>
          <tbody>{rows.map((row, k) => (
            <tr key={k} onClick={() => setHighlight(k)} style={{ cursor:'pointer', background: highlight === k ? a(0.1) : 'transparent', transition:'background 0.15s' }}>
              {row.map((cell, j) => <td key={j} style={{ padding:'5px 10px', color: highlight === k ? 'rgba(var(--text-rgb),0.95)' : (j === 0 ? a(0.75) : 'rgba(var(--text-rgb),0.75)'), fontFamily: j === 0 ? 'var(--font-mono)' : 'var(--font-body)', fontSize: j === 0 ? '10px' : '11px', borderBottom:'1px solid rgba(255,255,255,0.04)', verticalAlign:'top' }}>{cell}</td>)}
            </tr>
          ))}</tbody>
        </table>
      </div>
      {highlight !== null && (
        <div style={{ marginTop:'10px', padding:'10px 14px', background:a(0.08), border:`1px solid ${a(0.25)}`, borderRadius:'4px' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:a(0.8), letterSpacing:'0.1em', marginRight:'10px' }}>{rows[highlight][0]}</span>
          <span style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--white)', fontWeight:'300', lineHeight:'1.6' }}>{rows[highlight][1]}</span>
        </div>
      )}
    </div>
  );
}

function _EffectBlock({ title, intro, items, color }) {
  if (!items || items.length === 0) return null;
  const c = color || 'oklch(0.60 0.10 200)';
  return (
    <div style={{ marginBottom:'18px' }}>
      <_SectionLabel title={title} color={c} />
      {intro && <p style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:'300', lineHeight:1.75, color:'rgba(var(--text-rgb),0.65)', letterSpacing:'0.015em', margin:'0 0 10px' }}>{intro}</p>}
      <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display:'flex', gap:'9px', alignItems:'flex-start' }}>
            <span style={{ color:_alpha(c, 0.45), flexShrink:0, fontFamily:'var(--font-mono)', fontSize:'8px', marginTop:'4px', lineHeight:1 }}>◆</span>
            <span style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:'300', color:'rgba(var(--text-rgb),0.78)', letterSpacing:'0.015em', lineHeight:1.75 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function _ActionBlock({ title, items, accentColor, color }) {
  if (!items || items.length === 0) return null;
  return (
    <div style={{ marginBottom:'18px' }}>
      <_SectionLabel title={title} color={color} />
      <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
        {items.map((a, i) => (
          <div key={i}>
            <span style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:'500', color: accentColor || 'rgba(180,160,255,0.9)', letterSpacing:'0.04em' }}>{a.name}. </span>
            <span style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:'300', color:'rgba(var(--text-rgb),0.78)', letterSpacing:'0.015em', lineHeight:1.75 }}>{a.beschreibung}</span>
            {a.tabelle && <_MonsterRollTable tabelle={a.tabelle} accentColor={accentColor} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function MonsterDetail({ monster }) {
  const [rolledHP, setRolledHP] = useState(null);
  const [hpKey, setHpKey] = useState(0);
  const [statH, setStatH] = useState(null);
  const [imgOpen, setImgOpen] = useState(false);
  const leftColRef = useRef(null);
  useEffect(() => { setRolledHP(null); setHpKey(0); }, [monster.name]);
  useLayoutEffect(() => {
    const el = leftColRef.current;
    if (!el) return;
    setStatH(el.offsetHeight);
    const ro = new ResizeObserver(() => setStatH(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, [monster.name]);
  function handleHPRoll() {
    const r = _rollDice(monster.tp_wuerfel);
    if (r !== null) { setRolledHP(r); setHpKey(k => k + 1); }
  }

  const HEX = 38;
  const hexPts = (() => {
    const cx = HEX/2, cy = HEX/2, r = HEX/2 - 1.5;
    return Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI/3)*i - Math.PI/6;
      return `${cx + r*Math.cos(a)},${cy + r*Math.sin(a)}`;
    }).join(' ');
  })();

  const tc = _typeColor(monster.art);
  const a  = (op) => _alpha(tc, op);
  const attrs = ['STR','DEX','CON','INT','WIS','CHA'];
  const bewegungStr = Object.entries(monster.bewegung || {}).map(([k,v]) => `${k} ${v}`).join(', ');
  const saves = Object.entries(monster.rettungswuerfe || {});
  const skills = Object.entries(monster.fertigkeiten || {});
  const typeLineUnterart = monster.unterart ? ` (${monster.unterart})` : '';

  return (
    <div key={monster.name} style={{ flex:1, overflowY:'auto' }}>
      <div style={{ display:'flex', position:'relative', alignItems:'flex-start' }}>

        {/* Left column */}
        <div ref={leftColRef} style={{ flex:1, padding:'24px 28px', minWidth:0 }}>

          {/* Header */}
          <div style={{ marginBottom:'16px', paddingBottom:'14px', borderBottom:`1px solid ${a(0.2)}` }}>
            <div style={{ display:'flex', alignItems:'flex-start', gap:'14px' }}>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', background:a(0.12), border:`1px solid ${a(0.35)}`, borderRadius:'3px', padding:'10px 18px', flexShrink:0, minWidth:'64px' }}>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.22em', color:a(0.6), textTransform:'uppercase', marginBottom:'2px' }}>HG</div>
                <div style={{ fontFamily:'var(--font-display)', fontSize:'30px', fontWeight:'400', color: tc, lineHeight:1 }}>{_formatCR(monster.cr)}</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'8px', color:a(0.5), letterSpacing:'0.05em', marginTop:'3px' }}>{(monster.xp||0).toLocaleString('de-DE')} XP</div>
              </div>
              <div style={{ flex:1 }}>
                <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(16px,2vw,24px)', fontWeight:'400', letterSpacing:'0.14em', color:'var(--white)', lineHeight:1.2, textTransform:'uppercase', marginBottom:'4px' }}>{monster.name}</h1>
                <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:'300', color:'rgba(200,185,255,0.55)', letterSpacing:'0.04em', fontStyle:'italic' }}>
                  {_declineSize(monster.groesse, monster.art)} {monster.art}{typeLineUnterart}, {monster.gesinnung}
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:'7px', marginTop:'6px' }}>
                  <div style={{ width:'8px', height:'8px', borderRadius:'50%', background: tc, flexShrink:0 }} />
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.2em', color: tc, textTransform:'uppercase', opacity:0.85 }}>{monster.art}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core stats */}
          <div style={{ display:'grid', gridTemplateColumns:'auto auto auto auto', justifyContent:'space-between', gap:'10px 0', marginBottom:'16px', padding:'12px 14px', background:a(0.04), border:`1px solid ${a(0.1)}`, borderRadius:'3px', alignItems:'start' }}>
            <_MetaRow label="Rüstungsklasse" value={monster.ruestungstyp ? `${monster.rk} (${monster.ruestungstyp})` : String(monster.rk)} color={tc} />
            <_HPRow monster={monster} onRoll={handleHPRoll} color={tc} />
            <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center', width:`${HEX}px`, height:`${HEX}px`, flexShrink:0 }}>
              <svg width={HEX} height={HEX} viewBox={`0 0 ${HEX} ${HEX}`} style={{ position:'absolute', top:0, left:0 }}>
                <polygon points={hexPts} fill={rolledHP !== null ? 'rgba(255,210,100,0.07)' : 'rgba(255,210,100,0.03)'} stroke={rolledHP !== null ? 'rgba(255,210,100,0.5)' : 'rgba(255,210,100,0.2)'} strokeWidth="1.2"/>
              </svg>
              <span key={hpKey} style={{ fontFamily:'var(--font-mono)', fontSize:'13px', fontWeight:'400', color: rolledHP !== null ? 'rgba(255,210,100,0.95)' : 'rgba(255,210,100,0.35)', position:'relative', zIndex:1, lineHeight:1 }}>
                {rolledHP !== null ? rolledHP : monster.tp}
              </span>
            </div>
            <_MetaRow label="Bewegungsrate" value={bewegungStr} color={tc} />
          </div>

          {/* Ability scores */}
          <div style={{ display:'flex', gap:'6px', marginBottom:'14px', padding:'12px 10px', background:a(0.03), border:`1px solid ${a(0.08)}`, borderRadius:'3px' }}>
            {attrs.map(attr => <_AbilityScore key={attr} label={attr} score={(monster.attribute||{})[attr] || 10} color={tc} />)}
          </div>

          {/* Secondary stats */}
          <div style={{ display:'flex', flexDirection:'column', gap:'7px', marginBottom:'14px', padding:'12px 14px', background:a(0.03), border:`1px solid ${a(0.08)}`, borderRadius:'3px' }}>
            {saves.length > 0 && (
              <div style={{ display:'flex', gap:'4px', flexWrap:'wrap', alignItems:'center' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'7.5px', letterSpacing:'0.22em', color:a(0.5), textTransform:'uppercase', marginRight:'4px' }}>Rettungswürfe</span>
                {saves.map(([attr, bonus], i) => [
                  i > 0 && <span key={`s${i}`} style={{ color:a(0.3) }}>,</span>,
                  <span key={attr} style={{ fontFamily:'var(--font-body)', fontSize:'11px', fontWeight:'300', color:'rgba(var(--text-rgb),0.8)' }}>{attr} {bonus >= 0 ? `+${bonus}` : bonus}</span>
                ])}
              </div>
            )}
            {skills.length > 0 && (
              <div style={{ display:'flex', gap:'4px', flexWrap:'wrap', alignItems:'center' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'7.5px', letterSpacing:'0.22em', color:a(0.5), textTransform:'uppercase', marginRight:'4px' }}>Fertigkeiten</span>
                {skills.map(([sk, bonus], i) => [
                  i > 0 && <span key={`f${i}`} style={{ color:a(0.3) }}>,</span>,
                  <span key={sk} style={{ fontFamily:'var(--font-body)', fontSize:'11px', fontWeight:'300', color:'rgba(var(--text-rgb),0.8)' }}>{sk} {bonus >= 0 ? `+${bonus}` : bonus}</span>
                ])}
              </div>
            )}
            {(monster.verwundbarkeiten||[]).length > 0 && (
              <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', alignItems:'center' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'7.5px', letterSpacing:'0.22em', color:a(0.5), textTransform:'uppercase' }}>Verwundbarkeiten</span>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'11px', fontWeight:'300', color:'rgba(200,180,255,0.8)' }}>{monster.verwundbarkeiten.join(', ')}</span>
              </div>
            )}
            {(monster.schadensresistenzen||[]).length > 0 && (
              <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', alignItems:'center' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'7.5px', letterSpacing:'0.22em', color:a(0.5), textTransform:'uppercase' }}>Resistenzen</span>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'11px', fontWeight:'300', color:'rgba(var(--text-rgb),0.75)' }}>{monster.schadensresistenzen.join('; ')}</span>
              </div>
            )}
            {(monster.schadensimmunitaeten||[]).length > 0 && (
              <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', alignItems:'center' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'7.5px', letterSpacing:'0.22em', color:a(0.5), textTransform:'uppercase' }}>Immunitäten</span>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'11px', fontWeight:'300', color:'rgba(var(--text-rgb),0.75)' }}>{monster.schadensimmunitaeten.join('; ')}</span>
              </div>
            )}
            {(monster.zustandsimmunitaeten||[]).length > 0 && (
              <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', alignItems:'center' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'7.5px', letterSpacing:'0.22em', color:a(0.5), textTransform:'uppercase' }}>Zustandsimmunitäten</span>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'11px', fontWeight:'300', color:'rgba(var(--text-rgb),0.75)' }}>{monster.zustandsimmunitaeten.join(', ')}</span>
              </div>
            )}
            <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', alignItems:'center' }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'7.5px', letterSpacing:'0.22em', color:a(0.5), textTransform:'uppercase' }}>Sinne</span>
              <span style={{ fontFamily:'var(--font-body)', fontSize:'11px', fontWeight:'300', color:'rgba(var(--text-rgb),0.75)' }}>{[...(monster.sinne||[]), `passive Wahrnehmung ${monster.passiveWahrnehmung}`].join(', ')}</span>
            </div>
            {(monster.sprachen||[]).length > 0 && (
              <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', alignItems:'center' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'7.5px', letterSpacing:'0.22em', color:a(0.5), textTransform:'uppercase' }}>Sprachen</span>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'11px', fontWeight:'300', color:'rgba(var(--text-rgb),0.75)' }}>{monster.sprachen.join(', ')}</span>
              </div>
            )}
            {(monster.umgebung||[]).length > 0 && (
              <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', alignItems:'baseline' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'7.5px', letterSpacing:'0.22em', color:a(0.5), textTransform:'uppercase', flexShrink:0 }}>Umgebung</span>
                <_TagList items={monster.umgebung} color={tc} />
              </div>
            )}
          </div>

        </div>{/* end left column */}

        {/* Right: sticky image */}
        {monster.bild && (
          <div style={{ width:'220px', flexShrink:0, overflow:'hidden', borderLeft:`1px solid ${a(0.15)}`, padding:'16px', display:'flex', flexDirection:'column' }}>
            <img src={monster.bild} alt={monster.name} onClick={() => setImgOpen(true)}
              style={{ width:'100%', height:'auto', maxHeight: statH ? `${Math.round(statH * 1.1)}px` : 'none', display:'block', objectFit:'contain', objectPosition:'top center', cursor:'zoom-in' }} />
            <div style={{ marginTop:'12px', display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'5px' }}>
              <_SizeGrid groesse={monster.groesse} color={tc} />
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'7px', letterSpacing:'0.18em', color:_alpha(tc, 0.55), textTransform:'uppercase' }}>{monster.groesse}</span>
            </div>
          </div>
        )}
      </div>

      {/* Full-width: actions & lore */}
      <div style={{ padding:'4px 28px 24px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'0', marginBottom:'16px', padding:'14px 14px 0', background:a(0.03), border:`1px solid ${a(0.08)}`, borderRadius:'3px' }}>
          {(monster.besonderheiten||[]).length > 0 && <_ActionBlock title="Besonderheiten" items={monster.besonderheiten} accentColor={tc} color={tc} />}
          <_ActionBlock title="Aktionen" items={monster.aktionen} accentColor={tc} color={tc} />
          <_ActionBlock title="Bonusaktionen" items={monster.bonusaktionen} accentColor={tc} color={tc} />
          <_ActionBlock title="Reaktionen" items={monster.reaktionen} accentColor={tc} color={tc} />
          {monster.legendaere_aktionen && <_ActionBlock title="Legendäre Aktionen" items={monster.legendaere_aktionen} accentColor={tc} color={tc} />}
          {monster.hortaktionen && <_EffectBlock title="Hortaktionen" intro={monster.hortaktionen.beschreibung} items={monster.hortaktionen.aktionen} color={tc} />}
          {monster.regionale_effekte && <_EffectBlock title="Regionale Effekte" intro={monster.regionale_effekte.beschreibung} items={monster.regionale_effekte.effekte} color={tc} />}
        </div>

        {monster.beschreibung && monster.beschreibung.length > 0 && (
          <div style={{ marginTop:'8px' }}>
            <_SectionLabel title="Lore" color={tc} />
            <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
              {monster.beschreibung.map((p, i) => (
                <p key={i} style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:'300', lineHeight:1.85, color:'rgba(var(--text-rgb),0.65)', letterSpacing:'0.015em', margin:0 }}>{p}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      {imgOpen && ReactDOM.createPortal(
        <div onClick={() => setImgOpen(false)} style={{ position:'fixed', inset:0, zIndex:9999, background:'rgba(0,0,0,0.85)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'zoom-out', backdropFilter:'blur(6px)' }}>
          <img src={monster.bild} alt={monster.name} onClick={e => e.stopPropagation()}
            style={{ maxWidth:'90vw', maxHeight:'90vh', objectFit:'contain', borderRadius:'3px', boxShadow:'0 0 60px rgba(0,0,0,0.8)' }} />
        </div>,
        document.body
      )}
    </div>
  );
}

window.MonsterDetail   = MonsterDetail;
window.MonsterTypeColor = _typeColor;
})();
