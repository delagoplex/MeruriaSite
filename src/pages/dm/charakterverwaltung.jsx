// Page entry for /dm/charakterverwaltung.html
import '../../components/nav.jsx';
import '../../components/image-upload.jsx';
import '../../components/site-gate.jsx';
import '../../components/steckbrief-components.jsx';

;(function () {
// top-level functions were global in the old classic-script setup
Object.assign(window, { mod, fmtMod, attrKey, skillBonus, ImageSlot, SecTitle, Card, Corners, IRow, useIsDM, CharCardDM, SummaryBar, DMGrid, DMBar, App });

const { useState: _us, useRef: _ur } = React;
function mod(v) { return Math.floor((v - 10) / 2); }
function fmtMod(n) { return (n >= 0 ? '+' : '') + n; }
function attrKey(a) { return { Stä:'str',Ges:'dex',Kon:'con',Int:'int',Wei:'wis',Cha:'cha' }[a] || 'str'; }
function skillBonus(s, stats, pb) { return mod(stats[attrKey(s.attr)]) + s.prof * pb; }

function ImageSlot({ slotId, label, height, hue, portrait }) {
  const [src, setSrc] = _us(() => { try { return localStorage.getItem(`mimg-${slotId}`) || null; } catch(e) { return null; } });
  const [drag, setDrag] = _us(false);
  const inp = _ur(null);
  function load(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const r = new FileReader();
    r.onload = ev => { setSrc(ev.target.result); try { localStorage.setItem(`mimg-${slotId}`, ev.target.result); } catch(e){} };
    r.readAsDataURL(file);
  }
  const h = hue || 270;
  const ac = `oklch(0.65 0.18 ${h})`;
  const str = `oklch(0.65 0.18 ${h} / 0.12)`;
  const dsh = `oklch(0.65 0.18 ${h} / ${drag ? 0.85 : 0.45})`;
  const base = { width:'100%', height, borderRadius:3, overflow:'hidden', position:'relative', border:`1px dashed ${dsh}`, cursor:'pointer', transition:'border-color .2s', flexShrink:0 };
  const ev = { onClick:()=>inp.current.click(), onDragOver:e=>{e.preventDefault();setDrag(true);}, onDragLeave:()=>setDrag(false), onDrop:e=>{e.preventDefault();setDrag(false);load(e.dataTransfer.files[0]);} };
  if (src) return (
    <div style={base} {...ev}>
      <img src={src} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} alt={label} />
      <div style={{position:'absolute',bottom:5,right:7,fontFamily:'var(--font-mono)',fontSize:6.5,color:'color-mix(in srgb, rgba(255,255,255,0.3), rgb(var(--ink-rgb)) var(--cm))',background:'rgba(0,0,0,0.6)',padding:'1px 5px',borderRadius:2,letterSpacing:'.12em'}}>ersetzen</div>
      <input ref={inp} type="file" accept="image/*" style={{display:'none'}} onChange={e=>load(e.target.files[0])} />
    </div>
  );
  return (
    <div style={{...base,background:`repeating-linear-gradient(-45deg,transparent,transparent 8px,${str} 8px,${str} 9px),linear-gradient(160deg,rgba(var(--panel-rgb),0.97),rgba(var(--panel-rgb),0.98))`,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:8}} {...ev}>
      <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 50% 45%,oklch(0.65 0.18 ${h} / 0.17) 0%,transparent 62%)`}} />
      {portrait
        ? <svg viewBox="0 0 32 40" width="22" height="27" fill="none" style={{opacity:0.5,zIndex:1}}>
            <rect x="1" y="1" width="30" height="38" rx="3" stroke={ac} strokeWidth="1.2"/>
            <circle cx="16" cy="15" r="7" stroke={ac} strokeWidth="1" opacity="0.8"/>
            <path d="M2 37 Q16 26 30 37" stroke={ac} strokeWidth="1" opacity="0.7"/>
          </svg>
        : <svg viewBox="0 0 40 30" width="26" height="20" fill="none" style={{opacity:0.5,zIndex:1}}>
            <rect x="1" y="1" width="38" height="28" rx="2" stroke={ac} strokeWidth="1.2"/>
            <circle cx="12" cy="11" r="4" stroke={ac} strokeWidth="1" opacity="0.8"/>
            <path d="M1 22 L10 15 L18 20 L26 13 L39 22" stroke={ac} strokeWidth="1.1" opacity="0.8"/>
          </svg>}
      <span style={{fontFamily:'var(--font-mono)',fontSize:7.5,letterSpacing:'.22em',zIndex:1,color:`oklch(0.65 0.18 ${h} / 0.58)`,textTransform:'uppercase',textAlign:'center',padding:'0 10px'}}>{(label||'artwork').toLowerCase()}</span>
      <span style={{fontFamily:'var(--font-mono)',fontSize:6.5,letterSpacing:'.1em',zIndex:1,color:`oklch(0.65 0.18 ${h} / ${drag?0.9:0.28})`,transition:'color .2s'}}>{drag ? '▼ loslassen' : 'klicken · ziehen'}</span>
      <input ref={inp} type="file" accept="image/*" style={{display:'none'}} onChange={e=>load(e.target.files[0])} />
    </div>
  );
}
function SecTitle({ label }) {
  return (
    <div style={{marginBottom:10}}>
      <span style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.28em',color:'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))',textTransform:'uppercase'}}>{label}</span>
      <div style={{width:24,height:1,background:'linear-gradient(90deg,rgba(var(--purple-rgb),calc(0.65*var(--kp))),transparent)',marginTop:4}} />
    </div>
  );
}
function Card({ children, style }) {
  return <div style={{background:'var(--card-bg)',border:'1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))',borderRadius:4,padding:'13px 14px',position:'relative',...style}}>{children}</div>;
}
function Corners({ op=0.4, sz=14 }) {
  const b = `1.5px solid rgba(var(--purple-rgb),${op})`;
  return (<>
    <div style={{position:'absolute',top:0,left:0,width:sz,height:sz,borderTop:b,borderLeft:b,pointerEvents:'none'}}/>
    <div style={{position:'absolute',top:0,right:0,width:sz,height:sz,borderTop:b,borderRight:b,pointerEvents:'none'}}/>
    <div style={{position:'absolute',bottom:0,left:0,width:sz,height:sz,borderBottom:b,borderLeft:b,pointerEvents:'none'}}/>
    <div style={{position:'absolute',bottom:0,right:0,width:sz,height:sz,borderBottom:b,borderRight:b,pointerEvents:'none'}}/>
  </>);
}
function IRow({ label, value, bright }) {
  return (
    <div style={{display:'flex',alignItems:'baseline',gap:6,padding:'3.5px 0',borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.06*var(--kp)))'}}>
      <span style={{fontFamily:'var(--font-mono)',fontSize:7.5,letterSpacing:'.12em',color:'rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))',textTransform:'uppercase',flex:'0 0 80px'}}>{label}</span>
      <span style={{fontFamily:'var(--font-body)',fontSize:11.5,fontWeight:bright?400:300,color:bright?'var(--white)':'var(--silver)',flex:1}}>{value}</span>
    </div>
  );
}
Object.assign(window, { mod, fmtMod, attrKey, skillBonus, ImageSlot, SecTitle, Card, Corners, IRow });


const { useState, useEffect, useCallback, useMemo } = React;
const { SiteNav, SiteGate, SteckbriefView } = window;

const STATUS_OPTIONS = ['Aktiv', 'Wartend', 'Im Ruhestand', 'Gefallen'];
const STATUS_COLOR = { 'Aktiv':'#5fe39a', 'Wartend':'#d6b25c', 'Im Ruhestand':'#8aa3c4', 'Gefallen':'#e36760' };

/* ── DM-Auth ─────────────────────────────────── */
function useIsDM() {
  const [isDM, setIsDM] = useState(null);
  useEffect(() => {
    (async () => {
      const { data: { user } } = await window._sb.auth.getUser();
      if (!user) { setIsDM(false); return; }
      const { data: p } = await window._sb.from('profiles').select('role').eq('id', user.id).single();
      setIsDM(p?.role === 'dm');
    })();
  }, []);
  return isDM;
}

/* ── CharCardDM ──────────────────────────────── */
function CharCardDM({ row, playerName, onSelect }) {
  const [hover, setHover] = useState(false);
  const char   = row.char_data || {};
  const bild   = char.bild || null;
  const level  = char.level || null;
  const status = char.status || 'Aktiv';
  const sc     = STATUS_COLOR[status] || '#aaa';
  const hidden = !row.visible;

  return (
    <div onClick={() => onSelect(row)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{position:'relative',background:'rgba(var(--panel-rgb),0.93)',borderRadius:6,overflow:'hidden',cursor:'pointer',
        border:`1px solid ${hover ? sc+'88' : hidden ? 'rgba(var(--purple-rgb),calc(0.1*var(--kp)))' : 'rgba(var(--purple-rgb),calc(0.22*var(--kp)))'}`,
        transition:'border-color .18s, transform .18s',transform:hover?'translateY(-2px)':'none',opacity:hidden?0.55:1}}>

      <div style={{position:'relative',paddingBottom:'130%',background:'linear-gradient(160deg,rgba(var(--panel-rgb),0.95),rgba(var(--panel-rgb),0.98))'}}>
        {bild
          ? <img src={bild} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} alt="" />
          : <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <span style={{fontFamily:'var(--font-display)',fontSize:52,color:'rgba(var(--purple-rgb),calc(0.14*var(--kp) + var(--tb)))'}}>{(char.name||row.name||'?')[0]}</span>
            </div>}
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:'55%',background:'linear-gradient(to top,rgba(var(--bg-rgb),0.98),transparent)',pointerEvents:'none'}} />
        <div style={{position:'absolute',top:8,left:8,fontFamily:'var(--font-mono)',fontSize:7,letterSpacing:'.12em',
          background:'rgba(var(--bg-rgb),0.85)',border:`1px solid ${sc}55`,borderRadius:3,padding:'2px 7px',color:sc}}>
          {status}
        </div>
        {level && <div style={{position:'absolute',top:8,right:8,fontFamily:'var(--font-mono)',fontSize:7.5,
          background:'rgba(var(--bg-rgb),0.82)',border:'1px solid rgba(var(--purple-rgb),calc(0.35*var(--kp)))',borderRadius:3,padding:'2px 7px',color:'rgba(var(--accent-rgb),calc(0.8*var(--ka) + var(--tb)))'}}>
          Stufe {level}
        </div>}
        {hidden && <div style={{position:'absolute',bottom:8,right:8,fontFamily:'var(--font-mono)',fontSize:7,color:'rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))',letterSpacing:'.1em'}}>○ versteckt</div>}
      </div>

      <div style={{padding:'10px 12px 13px'}}>
        <div style={{fontFamily:'var(--font-display)',fontSize:13,letterSpacing:'.15em',color:'var(--white)',
          textTransform:'uppercase',marginBottom:3,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
          {char.name || row.name || 'Unbenannt'}
        </div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:7.5,color:'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))',letterSpacing:'.1em',marginBottom:6}}>
          {playerName}
        </div>
        <div style={{display:'flex',gap:4,flexWrap:'wrap'}}>
          {[row.race, row.class, row.division].filter(Boolean).map((t,i) => (
            <span key={i} style={{fontFamily:'var(--font-mono)',fontSize:7,padding:'1px 6px',
              background:'rgba(var(--purple-rgb),calc(0.08*var(--kp)))',border:'1px solid rgba(var(--purple-rgb),calc(0.18*var(--kp)))',borderRadius:2,
              color:'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))',letterSpacing:'.05em',whiteSpace:'nowrap'}}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Summary Bar ─────────────────────────────── */
function SummaryBar({ rows }) {
  const get = s => rows.filter(r => (r.char_data?.status || 'Aktiv') === s).length;
  const items = [
    { val: rows.length,                      lbl: 'Gesamt',    col: null },
    { val: rows.filter(r => r.visible).length, lbl: 'Sichtbar', col: null },
    { val: get('Aktiv'),        lbl: 'Aktiv',       col: STATUS_COLOR['Aktiv'] },
    { val: get('Wartend'),      lbl: 'Wartend',     col: STATUS_COLOR['Wartend'] },
    { val: get('Im Ruhestand'), lbl: 'Ruhestand',   col: STATUS_COLOR['Im Ruhestand'] },
    { val: get('Gefallen'),     lbl: 'Gefallen',    col: STATUS_COLOR['Gefallen'] },
  ];
  return (
    <div style={{display:'flex',gap:20,padding:'12px 18px',background:'rgba(var(--panel-rgb),0.55)',
      border:'1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))',borderRadius:4,marginBottom:20,flexWrap:'wrap'}}>
      {items.map(({ val, lbl, col }) => (
        <div key={lbl} style={{display:'flex',flexDirection:'column',gap:2}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:18,color:col||'var(--white)'}}>{val}</div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:7.5,letterSpacing:'.22em',textTransform:'uppercase',color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))'}}>{lbl}</div>
        </div>
      ))}
    </div>
  );
}

/* ── DMGrid ──────────────────────────────────── */
function DMGrid({ rows, profiles, onSelect }) {
  const [q,       setQ]       = useState('');
  const [playerF, setPlayerF] = useState('');  // speichert owner_id
  const [raceF,   setRaceF]   = useState('');
  const [classF,  setClassF]  = useState('');
  const [divF,    setDivF]    = useState('');

  const uniq = fn => [...new Set(rows.map(fn).filter(Boolean))].sort((a,b) => a.localeCompare(b,'de'));
  // playerIds: alle eindeutigen owner_ids, sortiert nach Anzeigename
  const playerIds = [...new Set(rows.map(r => r.owner_id))].filter(Boolean)
    .sort((a,b) => (profiles[a]||a).localeCompare(profiles[b]||b, 'de'));
  const races   = uniq(r => r.race);
  const classes = uniq(r => r.class);
  const divs    = uniq(r => r.division);

  const filtered = rows.filter(r => {
    const char = r.char_data || {};
    if (playerF && r.owner_id !== playerF) return false;
    if (raceF  && r.race     !== raceF)  return false;
    if (classF && r.class    !== classF) return false;
    if (divF   && r.division !== divF)   return false;
    if (q) {
      const s = q.toLowerCase();
      return [char.name||r.name, r.race, r.class, r.division, profiles[r.owner_id]].some(v => v?.toLowerCase().includes(s));
    }
    return true;
  });

  const hasFilter = q || playerF || raceF || classF || divF;
  const selSt = {
    fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.12em',textTransform:'uppercase',
    padding:'5px 10px',background:'rgb(var(--panel-rgb))',border:'1px solid rgba(var(--purple-rgb),calc(0.22*var(--kp)))',
    borderRadius:3,cursor:'pointer',color:'rgba(var(--text-rgb),calc(0.75*var(--kt) + var(--tb)))',outline:'none',colorScheme:'dark'
  };

  return (
    <div style={{padding:'0 28px 48px'}}>
      <div style={{display:'flex',alignItems:'baseline',gap:14,padding:'24px 0 20px',
        borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))',marginBottom:22}}>
        <h1 style={{fontFamily:'var(--font-display)',fontWeight:400,fontSize:22,letterSpacing:'.2em',
          color:'var(--white)',textTransform:'uppercase',textShadow:'0 0 28px rgba(var(--purple-rgb),calc(0.18*var(--kp)))'}}>
          Charakterverwaltung
        </h1>
        <span style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.28em',color:'rgba(var(--purple-rgb),calc(0.45*var(--kp) + var(--tb)))',textTransform:'uppercase'}}>
          DM-Bereich
        </span>
      </div>

      <SummaryBar rows={rows} />

      {/* Spieler-Tabs */}
      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:14}}>
        {['', ...playerIds].map(oid => {
          const active = playerF === oid;
          const label  = oid ? (profiles[oid] || `Spieler ${oid.slice(0,6)}`) : 'Alle';
          const count  = oid ? rows.filter(r => r.owner_id === oid).length : rows.length;
          return (
            <button key={oid||'alle'} onClick={() => setPlayerF(oid)}
              style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.14em',textTransform:'uppercase',
                padding:'5px 12px',cursor:'pointer',borderRadius:3,transition:'all .15s',outline:'none',
                display:'flex',alignItems:'center',gap:7,
                background: active ? 'rgba(var(--purple-rgb),calc(0.18*var(--kp)))' : 'transparent',
                border: `1px solid rgba(var(--purple-rgb),${active ? 0.5 : 0.2})`,
                color: active ? 'rgba(var(--text-rgb),calc(0.92*var(--kt)))' : 'rgba(var(--purple-rgb),calc(0.5*var(--kp)))'}}>
              {label}
              <span style={{fontFamily:'var(--font-mono)',fontSize:7,
                background: active ? 'rgba(var(--purple-rgb),calc(0.3*var(--kp)))' : 'rgba(var(--purple-rgb),calc(0.1*var(--kp)))',
                border: `1px solid rgba(var(--purple-rgb),${active ? 0.4 : 0.18})`,
                borderRadius:10,padding:'0 5px',color: active ? 'rgba(var(--text-rgb),calc(0.8*var(--kt)))' : 'rgba(var(--purple-rgb),calc(0.55*var(--kp)))',
                lineHeight:'16px',minWidth:18,textAlign:'center'}}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Weitere Filter */}
      <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:20,flexWrap:'wrap'}}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Suchen …"
          style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--white)',
            background:'rgba(var(--purple-rgb),calc(0.06*var(--kp)))',border:'1px solid rgba(var(--purple-rgb),calc(0.22*var(--kp)))',
            borderRadius:4,padding:'5px 11px',outline:'none',width:180}} />

        {races.length > 1 && <select value={raceF} onChange={e=>setRaceF(e.target.value)} style={selSt}>
          <option value="">Volk</option>
          {races.map(r => <option key={r} value={r}>{r}</option>)}
        </select>}
        {classes.length > 1 && <select value={classF} onChange={e=>setClassF(e.target.value)} style={selSt}>
          <option value="">Klasse</option>
          {classes.map(c => <option key={c} value={c}>{c}</option>)}
        </select>}
        {divs.length > 1 && <select value={divF} onChange={e=>setDivF(e.target.value)} style={selSt}>
          <option value="">Division</option>
          {divs.map(d => <option key={d} value={d}>{d}</option>)}
        </select>}

        {hasFilter && <button onClick={()=>{setQ('');setPlayerF('');setRaceF('');setClassF('');setDivF('');}}
          style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.12em',padding:'5px 10px',
            background:'transparent',border:'1px solid rgba(var(--purple-rgb),calc(0.18*var(--kp)))',borderRadius:3,
            cursor:'pointer',color:'rgba(var(--purple-rgb),calc(0.45*var(--kp) + var(--tb)))'}}>
          × Filter löschen
        </button>}

        <span style={{fontFamily:'var(--font-mono)',fontSize:8,color:'rgba(var(--purple-rgb),calc(0.35*var(--kp) + var(--tb)))',marginLeft:'auto',letterSpacing:'.12em'}}>
          {filtered.length} Charakter{filtered.length !== 1 ? 'e' : ''}
        </span>
      </div>

      {filtered.length === 0
        ? <div style={{textAlign:'center',padding:'60px 0',fontFamily:'var(--font-mono)',fontSize:9,
            letterSpacing:'.2em',color:'rgba(var(--purple-rgb),calc(0.3*var(--kp) + var(--tb)))',textTransform:'uppercase'}}>
            Keine Charaktere gefunden
          </div>
        : <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(185px,1fr))',gap:14}}>
            {filtered.map(row => (
              <CharCardDM key={row.id} row={row} playerName={profiles[row.owner_id]||'—'} onSelect={onSelect} />
            ))}
          </div>}
    </div>
  );
}

/* ── DM-Kontrollleiste (Detailansicht) ───────── */
function DMBar({ entry, playerName, visible, status, onBack, onStatusChange, onVisibilityToggle, onLevelSet, onUprank }) {
  const char      = entry._char || {};
  const level     = char.level || 1;
  const [lvlInput, setLvlInput] = useState(level);
  React.useEffect(() => setLvlInput(level), [level]);
  function commitLevel() {
    const n = parseInt(lvlInput, 10);
    if (n >= 1 && n <= 30 && n !== level) onLevelSet(n);
    else setLvlInput(level);
  }
  const div       = (window.DIVISIONS_DATA?.divisionen || []).find(d => d.name === char.division);
  const rankLvl   = char.rankLevel || 1;
  const canUp     = div && rankLvl < div.raenge.length;
  const nextRang  = div ? div.raenge.length - (rankLvl + 1) + 1 : null;
  const nextRankObj = div?.raenge.find(r => r.rang === nextRang);

  const btn = (col, bg='transparent', border='rgba(var(--purple-rgb),calc(0.25*var(--kp)))') => ({
    fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.14em',textTransform:'uppercase',
    padding:'5px 13px',background:bg,border:`1px solid ${border}`,borderRadius:3,
    cursor:'pointer',color:col,transition:'all .15s',whiteSpace:'nowrap',outline:'none',flexShrink:0
  });

  return (
    <div style={{background:'rgba(var(--bg-rgb),0.97)',borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.18*var(--kp)))',
      display:'flex',alignItems:'center',gap:8,
      padding:'7px 20px',flexWrap:'wrap'}}>

      <button style={btn('rgba(var(--accent-rgb),calc(0.7*var(--ka)))')} onClick={onBack}
        onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.5*var(--kp)))';e.currentTarget.style.color='var(--white)';}}
        onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.25*var(--kp)))';e.currentTarget.style.color='rgba(var(--accent-rgb),calc(0.7*var(--ka) + var(--tb)))';}}>
        ← Übersicht
      </button>

      <div style={{width:1,height:20,background:'rgba(var(--purple-rgb),calc(0.2*var(--kp)))',flexShrink:0}} />

      <span style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.14em',
        color:'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))',whiteSpace:'nowrap',flexShrink:0}}>
        Spieler: <span style={{color:'rgba(var(--text-rgb),calc(0.75*var(--kt) + var(--tb)))'}}>{playerName}</span>
      </span>

      <div style={{flex:1,minWidth:8}} />

      {/* Status */}
      <select value={status} onChange={e => onStatusChange(e.target.value)}
        style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.12em',textTransform:'uppercase',
          padding:'5px 10px',background:'rgb(var(--panel-rgb))',border:'1px solid rgba(var(--purple-rgb),calc(0.25*var(--kp)))',
          borderRadius:3,color:STATUS_COLOR[status]||'var(--white)',outline:'none',cursor:'pointer',colorScheme:'dark',flexShrink:0}}>
        {STATUS_OPTIONS.map(s => <option key={s} value={s} style={{color:STATUS_COLOR[s]}}>{s}</option>)}
      </select>

      {/* Sichtbarkeit */}
      <button onClick={onVisibilityToggle}
        style={btn(visible?'rgba(80,200,140,0.9)':'rgba(var(--purple-rgb),calc(0.5*var(--kp)))',
          visible?'rgba(80,200,140,0.08)':'transparent',
          visible?'rgba(80,200,140,0.4)':'rgba(var(--purple-rgb),calc(0.25*var(--kp)))')}>
        {visible ? '◆ Sichtbar' : '○ Verborgen'}
      </button>

      {/* Level direkt editierbar */}
      <div style={{display:'flex',alignItems:'center',gap:5,border:'1px solid rgba(var(--purple-rgb),calc(0.35*var(--kp)))',borderRadius:3,padding:'3px 9px',background:'rgba(var(--purple-rgb),calc(0.08*var(--kp)))'}}>
        <span style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(var(--purple-rgb),calc(0.55*var(--kp) + var(--tb)))',whiteSpace:'nowrap'}}>Stufe</span>
        <input
          type="number" min="1" max="30"
          value={lvlInput}
          onChange={e => setLvlInput(e.target.value)}
          onBlur={commitLevel}
          onKeyDown={e => e.key === 'Enter' && commitLevel()}
          style={{fontFamily:'var(--font-mono)',fontSize:11,fontWeight:600,color:'rgba(var(--text-rgb),calc(0.9*var(--kt) + var(--tb)))',
            background:'transparent',border:'none',outline:'none',width:36,textAlign:'center',colorScheme:'dark'}}
        />
      </div>

      {/* Division-Aufstieg */}
      {canUp && nextRankObj && (
        <button style={btn('rgba(213,180,90,0.85)','rgba(213,180,90,0.08)','rgba(213,180,90,0.35)')}
          onClick={onUprank}
          onMouseEnter={e=>{e.currentTarget.style.background='rgba(213,180,90,0.18)';}}
          onMouseLeave={e=>{e.currentTarget.style.background='rgba(213,180,90,0.08)';}}>
          Aufstieg → {nextRankObj.titel}
        </button>
      )}
    </div>
  );
}

/* ── Haupt-App ───────────────────────────────── */
function App() {
  const isDM       = useIsDM();
  const [rows,     setRows]    = useState([]);
  const [profiles, setProfiles]= useState({});
  const [loading,  setLoading] = useState(true);
  const [entry,    setEntry]   = useState(null);
  const [visible,  setVisible] = useState(false);
  const [status,   setStatus]  = useState('Aktiv');
  const [verKey,   setVerKey]  = useState(0);

  useEffect(() => {
    if (isDM !== true) return;
    (async () => {
      const { data } = await window._sb.from('characters').select('*').eq('type','spieler').order('created_at');
      const r = data || [];
      console.log('[DM] Charaktere geladen:', r.length, '| owner_ids:', r.map(c => c.owner_id));
      const ids = [...new Set(r.map(c => c.owner_id))].filter(Boolean);
      let pm = {};
      if (ids.length) {
        const { data: profs } = await window._sb.from('profiles').select('*').in('id', ids);
        pm = Object.fromEntries((profs||[]).map(p => {
          const name = p.display_name || p.username || p.full_name || p.name || null;
          return [p.id, name || `Spieler ${p.id.slice(0,6)}`];
        }));
        // Fallback: Supabase auth emails für unbekannte IDs
        ids.forEach(id => { if (!pm[id]) pm[id] = `Spieler ${id.slice(0,6)}`; });
      }
      setRows(r);
      setProfiles(pm);
      setLoading(false);
    })();
  }, [isDM]);

  function handleSelect(row) {
    setEntry({
      id:       row.id,
      name:     row.char_data?.name || row.name || 'Unbenannt',
      race:     row.race,
      class:    row.class,
      division: row.division,
      type:     row.type || 'spieler',
      _char:    row.char_data && Object.keys(row.char_data).length > 0 ? row.char_data : null,
    });
    setVisible(row.visible ?? false);
    setStatus(row.char_data?.status || 'Aktiv');
    setVerKey(k => k + 1);
  }

  async function patchChar(id, newChar) {
    await window._sb.from('characters').update({ char_data: newChar }).eq('id', id);
    setEntry(e => e ? { ...e, _char: newChar } : e);
    setRows(rs => rs.map(r => r.id === id ? { ...r, char_data: newChar } : r));
    setVerKey(k => k + 1);
  }

  async function handleStatusChange(newStatus) {
    if (!entry) return;
    const newChar = { ...entry._char, status: newStatus };
    await patchChar(entry.id, newChar);
    setStatus(newStatus);
  }

  async function handleVisibilityToggle() {
    if (!entry) return;
    const next = !visible;
    await window._sb.from('characters').update({ visible: next }).eq('id', entry.id);
    setVisible(next);
    setRows(rs => rs.map(r => r.id === entry.id ? { ...r, visible: next } : r));
  }

  async function handleLevelSet(n) {
    if (!entry) return;
    await patchChar(entry.id, { ...entry._char, level: n });
  }

  async function handleUprank() {
    if (!entry) return;
    const char   = entry._char || {};
    const div    = (window.DIVISIONS_DATA?.divisionen || []).find(d => d.name === char.division);
    if (!div) return;
    const newLvl = (char.rankLevel || 1) + 1;
    if (newLvl > div.raenge.length) return;
    const rankObj = div.raenge.find(r => r.rang === div.raenge.length - newLvl + 1);
    if (!rankObj) return;
    await patchChar(entry.id, { ...char, rankLevel: newLvl, rank: rankObj.titel });
  }

  if (isDM === null || loading) return (
    <SiteGate>
      <div className="page-root">
        <SiteNav active="dm-bereich" />
        <div style={{minHeight:'calc(var(--vh, 1vh) * 100)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.3em',color:'rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))',textTransform:'uppercase'}}>◈ Lade …</span>
        </div>
      </div>
    </SiteGate>
  );

  if (isDM === false) return (
    <SiteGate>
      <div className="page-root">
        <SiteNav active="dm-bereich" />
        <div style={{minHeight:'calc(var(--vh, 1vh) * 100)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.28em',color:'rgba(200,80,80,0.6)',textTransform:'uppercase'}}>◈ Kein Zugriff — DM-Konto erforderlich</span>
        </div>
      </div>
    </SiteGate>
  );

  if (entry) {
    const SV = SteckbriefView;
    const ownerRow = rows.find(r => r.id === entry.id);
    const playerName = profiles[ownerRow?.owner_id] || '—';
    return (
      <SiteGate>
        <div className="page-root">
          <SiteNav active="dm-bereich" />
          <div style={{paddingTop:'var(--nav-h)'}}>
            <DMBar
              entry={entry} playerName={playerName} visible={visible} status={status}
              onBack={() => setEntry(null)}
              onStatusChange={handleStatusChange}
              onVisibilityToggle={handleVisibilityToggle}
              onLevelSet={handleLevelSet}
              onUprank={handleUprank}
            />
            <SV key={verKey} entry={entry} onBack={() => setEntry(null)} hasMultiple={rows.length > 1} hideNav={true} />
          </div>
        </div>
      </SiteGate>
    );
  }

  return (
    <SiteGate>
      <div className="page-root">
        <SiteNav active="dm-bereich" />
        <div style={{paddingTop:'var(--nav-h)'}}>
          <DMGrid rows={rows} profiles={profiles} onSelect={handleSelect} />
        </div>
      </div>
    </SiteGate>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

})();
