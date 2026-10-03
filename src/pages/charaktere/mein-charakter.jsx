// Page entry for /charaktere/mein-charakter.html
import '../../components/nav.jsx';
import '../../components/image-upload.jsx';
import '../../components/site-gate.jsx';
import '../../components/steckbrief-components.jsx';

;(function () {
// top-level functions were global in the old classic-script setup
Object.assign(window, { mod, fmtMod, attrKey, skillBonus, ImageSlot, SecTitle, Card, Corners, IRow, uid, extractHealingDice, isHealingSpell, SpellPicker, ZauberPreview, ZauberSection, loadCharacters, deleteChar, exportChars, importCharsFromFile, CharCard, CharSelection, EmptyState, App });

var { useState, useRef } = React;

/* ── Utilities ───────────────────────────── */
function mod(v)         { return Math.floor((v-10)/2); }
function fmtMod(n)      { return (n>=0?"+":"")+n; }
function attrKey(a)     { return {Stä:"str",Ges:"dex",Kon:"con",Int:"int",Wei:"wis",Cha:"cha"}[a]||"str"; }
function skillBonus(s,stats,pb) { return mod(stats[attrKey(s.attr)])+s.prof*pb; }

/* ── ImageSlot — Meruria-Stil, localStorage ─ */
function ImageSlot({ slotId, label, height, hue, portrait }) {
  const [src, setSrc] = useState(() => {
    try { return localStorage.getItem(`mimg-${slotId}`)||null; } catch(e) { return null; }
  });
  const [drag, setDrag] = useState(false);
  const inp = useRef(null);
  function load(file) {
    if (!file||!file.type.startsWith("image/")) return;
    const r = new FileReader();
    r.onload = ev => { setSrc(ev.target.result); try { localStorage.setItem(`mimg-${slotId}`,ev.target.result); } catch(e){} };
    r.readAsDataURL(file);
  }
  const h   = hue||270;
  const ac  = `oklch(0.65 0.18 ${h})`;
  const str = `oklch(0.65 0.18 ${h} / 0.12)`;
  const dsh = `oklch(0.65 0.18 ${h} / ${drag?0.85:0.45})`;
  const base = { width:"100%", height, borderRadius:3, overflow:"hidden", position:"relative",
    border:`1px dashed ${dsh}`, cursor:"pointer", transition:"border-color .2s", flexShrink:0 };
  const ev = { onClick:()=>inp.current.click(),
    onDragOver:e=>{e.preventDefault();setDrag(true);},
    onDragLeave:()=>setDrag(false),
    onDrop:e=>{e.preventDefault();setDrag(false);load(e.dataTransfer.files[0]);} };
  if (src) return (
    <div style={base} {...ev}>
      <img src={src} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} alt={label} />
      <div style={{position:"absolute",bottom:5,right:7,fontFamily:"var(--font-mono)",fontSize:6.5,
        color:"color-mix(in srgb, rgba(255,255,255,0.3), rgb(var(--ink-rgb)) var(--cm))",background:"rgba(0,0,0,0.6)",padding:"1px 5px",borderRadius:2,letterSpacing:".12em"}}>ersetzen</div>
      <input ref={inp} type="file" accept="image/*" style={{display:"none"}} onChange={e=>load(e.target.files[0])} />
    </div>
  );
  return (
    <div style={{...base,
      background:`repeating-linear-gradient(-45deg,transparent,transparent 8px,${str} 8px,${str} 9px),linear-gradient(160deg,rgba(var(--panel-rgb),0.97),rgba(var(--panel-rgb),0.98))`,
      display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:8}} {...ev}>
      <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 45%,oklch(0.65 0.18 ${h} / 0.17) 0%,transparent 62%)`}} />
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
      <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".22em",zIndex:1,
        color:`oklch(0.65 0.18 ${h} / 0.58)`,textTransform:"uppercase",textAlign:"center",padding:"0 10px"}}>
        {(label||"artwork").toLowerCase()}</span>
      <span style={{fontFamily:"var(--font-mono)",fontSize:6.5,letterSpacing:".1em",zIndex:1,
        color:`oklch(0.65 0.18 ${h} / ${drag?0.9:0.28})`,transition:"color .2s"}}>
        {drag?"▼ loslassen":"klicken · ziehen"}</span>
      <input ref={inp} type="file" accept="image/*" style={{display:"none"}} onChange={e=>load(e.target.files[0])} />
    </div>
  );
}

/* ── Atome ───────────────────────────────── */
function SecTitle({ label }) {
  return (
    <div style={{marginBottom:10}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".28em",color:"rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))",textTransform:"uppercase"}}>{label}</span>
      <div style={{width:24,height:1,background:"linear-gradient(90deg,rgba(var(--purple-rgb),calc(0.65*var(--kp))),transparent)",marginTop:4}} />
    </div>
  );
}
function Card({children,style}) {
  return <div style={{background:"var(--card-bg)",border:"1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))",borderRadius:4,padding:"13px 14px",position:"relative",...style}}>{children}</div>;
}
function Corners({op=0.4,sz=14}) {
  const b=`1.5px solid rgba(var(--purple-rgb),${op})`;
  return (<>
    <div style={{position:"absolute",top:0,left:0,  width:sz,height:sz,borderTop:b,borderLeft:b,  pointerEvents:"none"}}/>
    <div style={{position:"absolute",top:0,right:0, width:sz,height:sz,borderTop:b,borderRight:b, pointerEvents:"none"}}/>
    <div style={{position:"absolute",bottom:0,left:0,  width:sz,height:sz,borderBottom:b,borderLeft:b,  pointerEvents:"none"}}/>
    <div style={{position:"absolute",bottom:0,right:0, width:sz,height:sz,borderBottom:b,borderRight:b, pointerEvents:"none"}}/>
  </>);
}
function IRow({label,value,bright}) {
  return (
    <div style={{display:"flex",alignItems:"baseline",gap:6,padding:"3.5px 0",borderBottom:"1px solid rgba(var(--purple-rgb),calc(0.06*var(--kp)))"}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".12em",color:"rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))",textTransform:"uppercase",flex:"0 0 80px"}}>{label}</span>
      <span style={{fontFamily:"var(--font-body)",fontSize:11.5,fontWeight:bright?400:300,color:bright?"var(--white)":"var(--silver)",flex:1}}>{value}</span>
    </div>
  );
}

Object.assign(window, { mod, fmtMod, attrKey, skillBonus, ImageSlot, SecTitle, Card, Corners, IRow });


var { useState: useApp, useRef } = React;
var { SiteNav, SiteGate } = window;

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

var KLASSEN_SPELL = ['Barbar','Barde','Druide','Hexenmeister','Kämpfer','Kleriker','Magier','Magieschmied','Mönch','Paladin','Schurke','Waldläufer','Zauberer'];

function extractHealingDice(beschreibung) {
  const text = (beschreibung || []).filter(b => typeof b === 'string').join(' ');
  const m1 = text.match(/höhe\s+von\s+(\d+[Ww]\d+(?:[+-]\d+)?)/i);
  if (m1) return m1[1];
  const m2 = text.match(/(\d+[Ww]\d+(?:[+-]\d+)?)\s+trefferpunkte[n]?\s+wieder\s+her/i);
  if (m2) return m2[1];
  return null;
}
function isHealingSpell(z) {
  const text = (z.beschreibung || []).filter(b => typeof b === 'string').join(' ');
  return /trefferpunkte[n]?\s+zurück\s+in\s+höhe/i.test(text)
      || /\d+[Ww]\d+\s+trefferpunkte[n]?\s+wieder\s+her/i.test(text)
      || /stellt\s+\d+\s+trefferpunkt/i.test(text);
}

var TYPE_COLORS_SPELL = {
  Feuer:'#f97316', Blitz:'#a78bfa', Kälte:'#38bdf8', Eis:'#7dd3fc',
  Gift:'#4ade80', Säure:'#84cc16', Nekrotisch:'#818cf8', Psychisch:'#e879f9',
  Energie:'#fbbf24', Schall:'#fb923c', Strahlung:'#fde68a', Gleißend:'#fef08a',
  Heilig:'#fcd34d', Wucht:'#94a3b8', Stich:'#94a3b8', Hieb:'#94a3b8',
  Variabel:'#c084fc', Strahlend:'#fde68a',
};

/* ── SpellPicker Modal ──────────────────────────────────────────── */
function SpellPicker({ onAdd, onClose, defaultKlasse = '' }) {
  const [q, setQ] = useApp('');
  const [filterKlasse, setFilterKlasse] = useApp(defaultKlasse);
  const [filterGrad, setFilterGrad] = useApp('');
  const [mode, setMode] = useApp('alle');

  const allZauber = window.ZAUBER_DATA || [];

  const allDmg = React.useMemo(() => allZauber
    .filter(z => z.schaden && (z.rettungswurfAttribut || z.istAngriff))
    .sort((a, b) => a.name.localeCompare(b.name, 'de')), []);
  const allHeal = React.useMemo(() => allZauber
    .filter(z => isHealingSpell(z))
    .map(z => ({ ...z, _heilungsDice: extractHealingDice(z.beschreibung) }))
    .filter(z => z._heilungsDice)
    .sort((a, b) => a.name.localeCompare(b.name, 'de')), []);
  const allAll = React.useMemo(() => [...allZauber].sort((a, b) => a.name.localeCompare(b.name, 'de')), []);

  const base = mode === 'schaden' ? allDmg : mode === 'heilung' ? allHeal : allAll;

  const results = React.useMemo(() => {
    let list = base;
    if (filterKlasse) list = list.filter(z => z.klassen?.includes(filterKlasse));
    if (filterGrad !== '') list = list.filter(z => z.grad === Number(filterGrad));
    if (q.trim()) { const low = q.toLowerCase(); list = list.filter(z => z.name.toLowerCase().includes(low)); }
    return list.slice(0, 150);
  }, [q, filterKlasse, filterGrad, base, mode]);

  function handleAdd(z) {
    if (mode === 'heilung') {
      onAdd({ id: uid(), name: z.name, grad: z.grad, schule: z.schule,
        istHeilung: true, heilung: z._heilungsDice });
    } else if (mode === 'schaden') {
      onAdd({ id: uid(), name: z.name, grad: z.grad, schule: z.schule,
        istKampfzauber: true, schaden: z.schaden, schadenTyp: z.schadenTyp,
        istAngriff: z.istAngriff, rettungswurfAttribut: z.rettungswurfAttribut, halbiert: z.halbiert });
    } else {
      onAdd({ id: uid(), name: z.name, grad: z.grad, schule: z.schule });
    }
    onClose();
  }

  const overlayStyle = {
    position:'fixed',inset:0,zIndex:9000,background:'rgba(var(--bg-rgb),0.82)',
    display:'flex',alignItems:'center',justifyContent:'center',padding:16,backdropFilter:'blur(4px)',
  };
  const modalStyle = {
    background:'rgba(var(--panel-rgb),0.98)',border:'1px solid rgba(var(--purple-rgb),calc(0.28*var(--kp)))',borderRadius:6,
    width:'100%',maxWidth:560,maxHeight:'calc(var(--vh, 1vh) * 80)',display:'flex',flexDirection:'column',boxShadow:'0 8px 40px rgba(var(--shadow-rgb),calc(0.7 * var(--shadow-k)))',
  };
  const tabBtn = active => ({
    fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.16em',textTransform:'uppercase',
    padding:'7px 14px',background:active?'rgba(var(--purple-rgb),calc(0.18*var(--kp)))':'transparent',
    border:'none',borderBottom:active?'2px solid rgba(var(--purple-rgb),calc(0.7*var(--kp)))':'2px solid transparent',
    cursor:'pointer',color:active?'rgba(var(--text-rgb),calc(0.9*var(--kt)))':'rgba(var(--accent-rgb),calc(0.4*var(--ka)))',transition:'all .15s',
  });
  const rowStyle = {
    display:'flex',alignItems:'center',gap:10,padding:'8px 12px',cursor:'pointer',
    borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.06*var(--kp)))',transition:'background .12s',
  };

  return (
    <div style={overlayStyle} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={modalStyle}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 16px',borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.12*var(--kp)))'}}>
          <span style={{fontFamily:'var(--font-display)',fontSize:13,letterSpacing:'.2em',color:'var(--white)',textTransform:'uppercase'}}>Zauber hinzufügen</span>
          <button onClick={onClose} style={{background:'none',border:'none',cursor:'pointer',color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))',fontSize:16}}>✕</button>
        </div>
        <div style={{display:'flex',borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))'}}>
          {[['alle','Alle'],['schaden','Schaden'],['heilung','Heilung']].map(([m,l]) => (
            <button key={m} style={tabBtn(mode===m)} onClick={()=>setMode(m)}>{l}</button>
          ))}
        </div>
        <div style={{padding:'10px 12px',display:'flex',gap:8}}>
          <input value={q} onChange={e=>setQ(e.target.value)} autoFocus
            placeholder="Zauber suchen…"
            style={{flex:1,fontFamily:'var(--font-body)',fontSize:12,background:'rgba(var(--purple-rgb),calc(0.05*var(--kp)))',
              border:'1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))',borderRadius:3,padding:'6px 10px',
              color:'var(--white)',outline:'none'}} />
          <select value={filterKlasse} onChange={e=>setFilterKlasse(e.target.value)}
            style={{fontFamily:'var(--font-mono)',fontSize:9,background:'rgb(var(--panel-rgb))',
              border:'1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))',borderRadius:3,padding:'6px 8px',
              color:'rgba(var(--text-rgb),calc(0.8*var(--kt) + var(--tb)))',outline:'none',flexShrink:0,width:130}}>
            <option value="" style={{background:'rgb(var(--panel-rgb))',color:'rgba(var(--text-rgb),calc(0.85*var(--kt) + var(--tb)))'}}>Alle Klassen</option>
            {KLASSEN_SPELL.map(k => <option key={k} value={k} style={{background:'rgb(var(--panel-rgb))',color:'rgba(var(--text-rgb),calc(0.85*var(--kt) + var(--tb)))'}}>{k}</option>)}
          </select>
        </div>
        <div style={{padding:'0 12px 8px',display:'flex',gap:4,flexWrap:'wrap'}}>
          {[['','Alle'],['0','Trick'],['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9']].map(([v,l]) => {
            const active = filterGrad === v;
            return (
              <button key={v} onClick={()=>setFilterGrad(v)}
                style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.1em',
                  padding:'3px 7px',borderRadius:2,cursor:'pointer',transition:'all .12s',
                  background: active ? 'rgba(var(--purple-rgb),calc(0.25*var(--kp)))' : 'transparent',
                  border: active ? '1px solid rgba(var(--purple-rgb),calc(0.55*var(--kp)))' : '1px solid rgba(var(--purple-rgb),calc(0.15*var(--kp)))',
                  color: active ? 'rgba(var(--text-rgb),calc(0.9*var(--kt)))' : 'rgba(var(--accent-rgb),calc(0.4*var(--ka)))'}}>
                {l}
              </button>
            );
          })}
        </div>
        <div style={{fontSize:'0.65rem',color:'rgba(var(--accent-rgb),calc(0.3*var(--ka) + var(--tb)))',padding:'0 12px 6px',fontFamily:'var(--font-mono)'}}>
          {results.length} Zauber
        </div>
        <div style={{overflowY:'auto',flex:1}}>
          {results.map(z => (
            <div key={z.name+z.grad} style={rowStyle}
              onMouseEnter={e=>e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.07*var(--kp)))'}
              onMouseLeave={e=>e.currentTarget.style.background='transparent'}
              onClick={() => handleAdd(z)}>
              {mode === 'heilung'
                ? <div style={{width:26,height:26,borderRadius:'50%',background:'rgba(80,200,120,0.08)',border:'1px solid rgba(80,200,120,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.7rem',flexShrink:0}}>💚</div>
                : <div style={{width:26,height:26,borderRadius:'50%',background:'rgba(var(--accent-rgb),calc(0.06*var(--ka)))',border:'1px solid rgba(var(--accent-rgb),calc(0.12*var(--ka)))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.58rem',color:TYPE_COLORS_SPELL[z.schadenTyp]||'rgba(var(--accent-rgb),calc(0.4*var(--ka)))',flexShrink:0,fontWeight:700}}>
                    {mode==='schaden' ? (z.schadenTyp||'?').substring(0,2) : (z.schule||'?').substring(0,2)}
                  </div>
              }
              <span style={{fontFamily:'var(--font-body)',fontSize:12.5,color:'var(--white)',flex:1}}>{z.name}</span>
              <span style={{fontFamily:'var(--font-mono)',fontSize:8.5,color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))',whiteSpace:'nowrap'}}>
                {mode==='heilung' ? `Grad ${z.grad} · ${z._heilungsDice} TP`
                  : mode==='schaden' ? `Grad ${z.grad} · ${z.schaden} · ${z.schadenTyp||'?'}`
                  : `Grad ${z.grad} · ${z.schule||'?'}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Zauber-Vorschau Modal ──────────────────────────────────────── */
function ZauberPreview({ zauberEntry, onClose }) {
  const fullSpell = React.useMemo(() => {
    const all = window.ZAUBER_DATA || [];
    return all.find(z => z.name === zauberEntry.name) || zauberEntry;
  }, [zauberEntry.name]);

  const gradLabels = ['Zaubertrick','1. Grad','2. Grad','3. Grad','4. Grad','5. Grad','6. Grad','7. Grad','8. Grad','9. Grad'];
  const gradLabel = gradLabels[fullSpell.grad] || `${fullSpell.grad}. Grad`;
  const kompMap = { V: 'Verbal', G: 'Gestisch', M: 'Material' };
  const komps = (fullSpell.komponenten || []).map(k => kompMap[k] || k).join(', ');

  const isHeil = zauberEntry.istHeilung;
  const typeColor = TYPE_COLORS_SPELL[fullSpell.schadenTyp] || 'rgba(var(--accent-rgb),calc(0.6*var(--ka)))';

  const metaItems = [
    { label: 'Zeitaufwand',   value: fullSpell.zeitaufwand },
    { label: 'Wirkungsdauer', value: fullSpell.wirkungsdauer },
    { label: 'Reichweite',    value: fullSpell.reichweite },
    { label: 'Komponenten',   value: komps || null },
  ].filter(x => x.value);

  return (
    <div style={{position:'fixed',inset:0,zIndex:9100,background:'rgba(var(--bg-rgb),0.85)',
      display:'flex',alignItems:'center',justifyContent:'center',padding:16,backdropFilter:'blur(4px)'}}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{background:'rgba(var(--panel-rgb),0.98)',border:'1px solid rgba(var(--purple-rgb),calc(0.28*var(--kp)))',borderRadius:6,
        width:'100%',maxWidth:520,maxHeight:'calc(var(--vh, 1vh) * 85)',display:'flex',flexDirection:'column',
        boxShadow:'0 8px 40px rgba(var(--shadow-rgb),calc(0.7 * var(--shadow-k)))'}}>

        {/* Kopf */}
        <div style={{padding:'16px 18px 14px',borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.12*var(--kp)))',flexShrink:0,
          display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12}}>
          <div>
            <div style={{fontFamily:'var(--font-display)',fontSize:16,letterSpacing:'.18em',
              color:'var(--white)',textTransform:'uppercase',marginBottom:5}}>{fullSpell.name}</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
              <span style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.12em',
                padding:'2px 8px',background:'rgba(var(--purple-rgb),calc(0.08*var(--kp)))',border:'1px solid rgba(var(--purple-rgb),calc(0.18*var(--kp)))',
                borderRadius:2,color:'rgba(var(--accent-rgb),calc(0.65*var(--ka) + var(--tb)))'}}>{gradLabel}</span>
              {fullSpell.schule && (
                <span style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.12em',
                  padding:'2px 8px',background:'rgba(var(--purple-rgb),calc(0.08*var(--kp)))',border:'1px solid rgba(var(--purple-rgb),calc(0.18*var(--kp)))',
                  borderRadius:2,color:'rgba(var(--accent-rgb),calc(0.65*var(--ka) + var(--tb)))'}}>{fullSpell.schule}</span>
              )}
              {fullSpell.ritual && (
                <span style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.12em',
                  padding:'2px 8px',background:'rgba(94,232,208,0.06)',border:'1px solid rgba(94,232,208,0.2)',
                  borderRadius:2,color:'color-mix(in srgb, rgba(94,232,208,0.6), rgb(var(--ink-rgb)) var(--cm))'}}>Ritual</span>
              )}
              {fullSpell.konzentration && (
                <span style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.12em',
                  padding:'2px 8px',background:'rgba(251,191,36,0.06)',border:'1px solid rgba(251,191,36,0.2)',
                  borderRadius:2,color:'color-mix(in srgb, rgba(251,191,36,0.6), rgb(var(--ink-rgb)) var(--cm))'}}>Konzentration</span>
              )}
            </div>
          </div>
          <button onClick={onClose} style={{background:'none',border:'none',cursor:'pointer',
            color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))',fontSize:16,flexShrink:0,padding:'2px 4px',lineHeight:1,
            transition:'color .12s'}}
            onMouseEnter={e=>e.currentTarget.style.color='rgba(var(--text-rgb),calc(0.8*var(--kt) + var(--tb)))'}
            onMouseLeave={e=>e.currentTarget.style.color='rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))'}>✕</button>
        </div>

        {/* Body */}
        <div style={{overflowY:'auto',flex:1,padding:'14px 18px'}}>

          {/* Meta-Grid */}
          {metaItems.length > 0 && (
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginBottom:14}}>
              {metaItems.map(({label, value}) => (
                <div key={label} style={{background:'rgba(var(--purple-rgb),calc(0.04*var(--kp)))',border:'1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))',
                  borderRadius:3,padding:'8px 10px'}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:7.5,letterSpacing:'.2em',
                    color:'rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))',textTransform:'uppercase',marginBottom:3}}>{label}</div>
                  <div style={{fontFamily:'var(--font-body)',fontSize:11.5,color:'var(--white)',fontWeight:300}}>{value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Material */}
          {fullSpell.material && (
            <div style={{fontFamily:'var(--font-mono)',fontSize:8.5,color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))',
              marginBottom:12,fontStyle:'italic'}}>Material: {fullSpell.material}</div>
          )}

          {/* Kampfinfo-Chips */}
          {(fullSpell.schaden || fullSpell.rettungswurfAttribut || fullSpell.istAngriff) && (
            <div style={{display:'flex',gap:6,marginBottom:14,flexWrap:'wrap'}}>
              {fullSpell.schaden && (
                <span style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.1em',padding:'4px 10px',
                  background:'rgba(249,115,22,0.07)',border:'1px solid rgba(249,115,22,0.22)',
                  borderRadius:3,color:typeColor}}>{fullSpell.schaden} {fullSpell.schadenTyp||'Schaden'}</span>
              )}
              {fullSpell.rettungswurfAttribut && (
                <span style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.1em',padding:'4px 10px',
                  background:'rgba(var(--purple-rgb),calc(0.07*var(--kp)))',border:'1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))',
                  borderRadius:3,color:'rgba(var(--accent-rgb),calc(0.75*var(--ka) + var(--tb)))'}}>
                  RW: {fullSpell.rettungswurfAttribut}{fullSpell.halbiert ? ' · ½ bei Erfolg' : ''}
                </span>
              )}
              {fullSpell.istAngriff && (
                <span style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.1em',padding:'4px 10px',
                  background:'rgba(var(--purple-rgb),calc(0.07*var(--kp)))',border:'1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))',
                  borderRadius:3,color:'rgba(var(--accent-rgb),calc(0.75*var(--ka) + var(--tb)))'}}>Zauberangriff</span>
              )}
            </div>
          )}

          {/* Beschreibung */}
          <div style={{display:'flex',flexDirection:'column',gap:9}}>
            {(fullSpell.beschreibung || []).map((p, i) => (
              <p key={i} style={{fontFamily:'var(--font-body)',fontSize:12.5,fontWeight:300,
                color:'var(--silver)',lineHeight:1.82,margin:0}}>{p}</p>
            ))}
          </div>

          {/* Klassen */}
          {fullSpell.klassen && fullSpell.klassen.length > 0 && (
            <div style={{marginTop:16,paddingTop:12,borderTop:'1px solid rgba(var(--purple-rgb),calc(0.08*var(--kp)))'}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:7.5,letterSpacing:'.22em',
                color:'rgba(var(--purple-rgb),calc(0.3*var(--kp) + var(--tb)))',textTransform:'uppercase',marginBottom:7}}>Klassen</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:4}}>
                {fullSpell.klassen.map(k => (
                  <span key={k} style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.1em',
                    padding:'2px 8px',background:'rgba(var(--purple-rgb),calc(0.05*var(--kp)))',border:'1px solid rgba(var(--purple-rgb),calc(0.13*var(--kp)))',
                    borderRadius:2,color:'rgba(var(--accent-rgb),calc(0.45*var(--ka) + var(--tb)))'}}>{k}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Zauber-Sektion ─────────────────────────────────────────────── */
function ZauberSection({ zauber, updZauber, editing, charKlasse = '' }) {
  const [showPicker, setShowPicker] = useApp(false);
  const [preview, setPreview] = useApp(null);

  function addZauber(z) {
    updZauber([...zauber, z]);
  }
  function removeZauber(id) {
    updZauber(zauber.filter(z => z.id !== id));
  }

  const gradBadge = grad => {
    const labels = ['Zaubertrick','1. Grad','2. Grad','3. Grad','4. Grad','5. Grad','6. Grad','7. Grad','8. Grad','9. Grad'];
    return labels[grad] || `${grad}. Grad`;
  };

  return (
    <>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
        <div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'.28em',color:'rgba(var(--purple-rgb),calc(0.45*var(--kp) + var(--tb)))',textTransform:'uppercase',marginBottom:4}}>Zauber</div>
          <div style={{width:28,height:1,background:'linear-gradient(90deg,rgba(var(--purple-rgb),calc(0.65*var(--kp))),transparent)'}} />
        </div>
        {editing && (
          <button onClick={()=>setShowPicker(true)}
            style={{fontFamily:'var(--font-mono)',fontSize:8,letterSpacing:'.16em',textTransform:'uppercase',
              padding:'5px 12px',background:'transparent',border:'1px solid rgba(var(--purple-rgb),calc(0.25*var(--kp)))',
              borderRadius:3,cursor:'pointer',color:'rgba(var(--purple-rgb),calc(0.55*var(--kp) + var(--tb)))',transition:'all .15s'}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.6*var(--kp)))';e.currentTarget.style.color='rgba(var(--text-rgb),calc(0.9*var(--kt) + var(--tb)))';}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.25*var(--kp)))';e.currentTarget.style.color='rgba(var(--purple-rgb),calc(0.55*var(--kp) + var(--tb)))';}}>
            + Zauber
          </button>
        )}
      </div>
      {zauber.length === 0 && (
        <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'rgba(var(--accent-rgb),calc(0.2*var(--ka) + var(--tb)))',padding:'8px 0'}}>Keine Zauber eingetragen.</div>
      )}
      <div style={{display:'flex',flexDirection:'column',gap:5}}>
        {zauber.map(z => {
          const isHeil = z.istHeilung;
          const isKampf = z.istKampfzauber || z.schaden;
          const typeColor = TYPE_COLORS_SPELL[z.schadenTyp] || 'rgba(var(--accent-rgb),calc(0.5*var(--ka)))';
          return (
            <div key={z.id}
              onClick={() => setPreview(z)}
              style={{display:'flex',alignItems:'center',gap:10,cursor:'pointer',
                background:'rgba(var(--panel-rgb),0.8)',border:'1px solid rgba(var(--purple-rgb),calc(0.14*var(--kp)))',
                borderRadius:3,padding:'7px 11px',transition:'border-color .15s'}}
              onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.35*var(--kp)))'}
              onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.14*var(--kp)))'}>
              <div style={{width:22,height:22,borderRadius:'50%',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.55rem',fontWeight:700,
                background: isHeil ? 'rgba(80,200,120,0.08)' : 'rgba(var(--accent-rgb),calc(0.06*var(--ka)))',
                border: isHeil ? '1px solid rgba(80,200,120,0.2)' : '1px solid rgba(var(--accent-rgb),calc(0.12*var(--ka)))',
                color: isHeil ? 'color-mix(in srgb, #4ade80, rgb(var(--ink-rgb)) var(--cm))' : (isKampf ? typeColor : 'rgba(var(--accent-rgb),calc(0.4*var(--ka)))')}}>
                {isHeil ? '💚' : (z.schule||'?').substring(0,2)}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontFamily:'var(--font-body)',fontSize:12.5,color:'var(--white)',fontWeight:400}}>{z.name}</div>
                <div style={{fontFamily:'var(--font-mono)',fontSize:8,color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))',marginTop:1}}>
                  {gradBadge(z.grad)}
                  {z.schule && ` · ${z.schule}`}
                  {isHeil && z.heilung && ` · 💚 ${z.heilung} TP`}
                  {isKampf && z.schaden && ` · ${z.schaden} ${z.schadenTyp||''}`}
                </div>
              </div>
              {editing && (
                <button onClick={e=>{e.stopPropagation();removeZauber(z.id);}}
                  style={{background:'none',border:'none',cursor:'pointer',color:'rgba(200,80,80,0.35)',fontSize:13,padding:'2px 4px',lineHeight:1,transition:'color .12s',flexShrink:0}}
                  onMouseEnter={e=>e.currentTarget.style.color='color-mix(in srgb, rgba(240,110,110,0.85), rgb(var(--ink-rgb)) var(--cm))'}
                  onMouseLeave={e=>e.currentTarget.style.color='rgba(200,80,80,0.35)'}>✕</button>
              )}
            </div>
          );
        })}
      </div>
      {showPicker && <SpellPicker onAdd={addZauber} onClose={()=>setShowPicker(false)} defaultKlasse={charKlasse} />}
      {preview && <ZauberPreview zauberEntry={preview} onClose={()=>setPreview(null)} />}
    </>
  );
}

async function loadCharacters() {
  const uid = window.SITE_USER?.id;
  const { data } = await window._sb.from('characters').select('*').eq('owner_id', uid).order('created_at');
  return (data || []).map(row => ({
    id: row.id,
    name: row.name,
    race: row.race,
    class: row.class,
    division: row.division,
    type: row.type || 'spieler',
    createdAt: row.created_at,
    _char: row.char_data && Object.keys(row.char_data).length > 0 ? row.char_data : null,
  }));
}


window.ZauberSection = ZauberSection;

async function deleteChar(id) {
  await window._sb.from('characters').delete().eq('id', id);
}

function exportChars(chars, filename) {
  const blob = new Blob([JSON.stringify(chars, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'meruria-charaktere.json';
  a.click();
  URL.revokeObjectURL(url);
}

async function importCharsFromFile(file) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = async e => {
      try {
        const data = JSON.parse(e.target.result);
        if (!Array.isArray(data)) { resolve(); return; }
        const inserts = data.map(c => {
          const char = c._char || c;
          return {
            owner_id: window.SITE_USER?.id || null,
            name: char.name || c.name || 'Importiert',
            race: char.race || c.race || null,
            class: char.class || c.class || null,
            division: char.division || c.division || null,
            char_data: char,
            type: 'spieler',
          };
        });
        await window._sb.from('characters').insert(inserts);
        resolve();
      } catch(err) { console.error(err); resolve(); }
    };
    reader.readAsText(file);
  });
}

/* ── Auswahl-Bildschirm ────────────────────── */
function CharCard({ ch, onSelect, onDelete, onExport }) {
  const [hover, setHover] = useApp(false);
  const [delConfirm, setDelConfirm] = useApp(false);
  const bild = ch._char?.bild || null;
  const level = ch._char?.level || null;
  const subclass = ch._char?.subclass && ch._char.subclass !== '—' ? ch._char.subclass : null;

  if (delConfirm) return (
    <div style={{background:"rgba(var(--panel-rgb),0.95)",border:"1px solid rgba(200,60,60,0.45)",borderRadius:6,
      padding:"20px 16px",display:"flex",flexDirection:"column",gap:12,alignItems:"center",justifyContent:"center",
      minHeight:220}}>
      <div style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".12em",color:"color-mix(in srgb, rgba(230,110,110,0.85), rgb(var(--ink-rgb)) var(--cm))",
        textTransform:"uppercase",textAlign:"center"}}>„{ch.name}" löschen?</div>
      <div style={{display:"flex",gap:8}}>
        <button onClick={()=>{onDelete(ch.id);setDelConfirm(false);}}
          style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".12em",textTransform:"uppercase",
            padding:"6px 14px",background:"rgba(200,50,50,0.2)",border:"1px solid rgba(200,60,60,0.5)",
            borderRadius:3,cursor:"pointer",color:"color-mix(in srgb, rgba(240,140,140,0.9), rgb(var(--ink-rgb)) var(--cm))"}}>Löschen</button>
        <button onClick={()=>setDelConfirm(false)}
          style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".12em",textTransform:"uppercase",
            padding:"6px 14px",background:"transparent",border:"1px solid rgba(var(--purple-rgb),calc(0.3*var(--kp)))",
            borderRadius:3,cursor:"pointer",color:"rgba(var(--purple-rgb),calc(0.6*var(--kp) + var(--tb)))"}}>Abbrechen</button>
      </div>
    </div>
  );

  return (
    <div
      onClick={()=>onSelect(ch)}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={{position:"relative",background:"rgba(var(--panel-rgb),0.92)",
        border:`1px solid rgba(var(--purple-rgb),${hover?0.5:0.2})`,borderRadius:6,
        overflow:"hidden",transition:"border-color .18s,transform .18s",
        transform:hover?"translateY(-2px)":"none",cursor:"pointer"}}>

      {/* Bild */}
      <div style={{position:"relative",paddingBottom:"130%",background:"linear-gradient(160deg,rgba(var(--panel-rgb),0.95),rgba(var(--panel-rgb),0.98))"}}>
        {bild
          ? <img src={bild} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}} alt="" />
          : <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontFamily:"var(--font-display)",fontSize:52,color:"rgba(var(--purple-rgb),calc(0.15*var(--kp) + var(--tb)))",letterSpacing:".1em"}}>
                {ch.name?.[0]||'?'}
              </span>
            </div>
        }
        {/* Gradient-Overlay unten */}
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"55%",
          background:"linear-gradient(to top,rgba(var(--bg-rgb),0.98) 0%,transparent 100%)",pointerEvents:"none"}} />
        {/* Level-Badge */}
        {level && <div style={{position:"absolute",top:8,right:8,
          fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".16em",
          background:"rgba(var(--bg-rgb),0.82)",border:"1px solid rgba(var(--purple-rgb),calc(0.35*var(--kp)))",
          borderRadius:3,padding:"2px 7px",color:"rgba(var(--accent-rgb),calc(0.8*var(--ka) + var(--tb)))"}}>
          Stufe {level}
        </div>}
        {/* Typ-Badge für NSC */}
        {ch.type === 'nsc' && <div style={{position:"absolute",top:8,left:8,
          fontFamily:"var(--font-mono)",fontSize:7,letterSpacing:".14em",
          background:"rgba(var(--bg-rgb),0.82)",border:"1px solid rgba(180,120,60,0.4)",
          borderRadius:3,padding:"2px 7px",color:"color-mix(in srgb, rgba(220,170,100,0.75), rgb(var(--ink-rgb)) var(--cm))"}}>NSC</div>}

        {/* Hover-Aktionen */}
        {hover && <div style={{position:"absolute",top:8,left:8,display:"flex",gap:5}}>
          <button onClick={e=>{e.stopPropagation();onExport(ch);}}
            title="Exportieren"
            style={{fontFamily:"var(--font-mono)",fontSize:10,width:26,height:26,display:"flex",alignItems:"center",
              justifyContent:"center",background:"rgba(var(--bg-rgb),0.85)",border:"1px solid rgba(var(--purple-rgb),calc(0.35*var(--kp)))",
              borderRadius:3,cursor:"pointer",color:"rgba(var(--accent-rgb),calc(0.7*var(--ka) + var(--tb)))",transition:"all .15s"}}
            onMouseEnter={e=>e.currentTarget.style.color="var(--white)"}
            onMouseLeave={e=>e.currentTarget.style.color="rgba(var(--accent-rgb),calc(0.7*var(--ka) + var(--tb)))"}>↓</button>
          <button onClick={e=>{e.stopPropagation();setDelConfirm(true);}}
            title="Löschen"
            style={{fontFamily:"var(--font-mono)",fontSize:13,width:26,height:26,display:"flex",alignItems:"center",
              justifyContent:"center",background:"rgba(var(--bg-rgb),0.85)",border:"1px solid rgba(200,60,60,0.3)",
              borderRadius:3,cursor:"pointer",color:"rgba(200,80,80,0.55)",transition:"all .15s"}}
            onMouseEnter={e=>e.currentTarget.style.color="color-mix(in srgb, rgba(240,110,110,0.9), rgb(var(--ink-rgb)) var(--cm))"}
            onMouseLeave={e=>e.currentTarget.style.color="rgba(200,80,80,0.55)"}>×</button>
        </div>}
      </div>

      {/* Info-Bereich */}
      <div style={{padding:"10px 12px 12px"}}>
        <div style={{fontFamily:"var(--font-display)",fontSize:13,letterSpacing:".16em",
          color:"var(--white)",textTransform:"uppercase",marginBottom:6,
          wordBreak:"break-word",lineHeight:1.35}}>{ch.name}</div>
        <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
          {[ch.race, ch.class, subclass, ch.division].filter(Boolean).map((t,i)=>(
            <span key={i} style={{fontFamily:"var(--font-mono)",fontSize:7,padding:"1px 6px",
              background:"rgba(var(--purple-rgb),calc(0.1*var(--kp)))",border:"1px solid rgba(var(--purple-rgb),calc(0.22*var(--kp)))",borderRadius:2,
              color:"rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))",letterSpacing:".06em",whiteSpace:"nowrap"}}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CharSelection({ chars, onSelect, onNew, onReload }) {
  const [q, setQ] = useApp('');
  const [raceF, setRaceF] = useApp('');
  const [classF, setClassF] = useApp('');
  const [divF, setDivF] = useApp('');
  const [sortBy, setSortBy] = useApp('date');
  const [sortDir, setSortDir] = useApp('desc');
  const importRef = useRef(null);

  async function handleDelete(id) {
    await deleteChar(id);
    await onReload();
  }

  async function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    await importCharsFromFile(file);
    e.target.value = '';
    await onReload();
  }

  // Unique filter options derived from actual chars
  const uniq = field => [...new Set(chars.map(c=>c[field]).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'de'));
  const races = uniq('race'), classes = uniq('class'), divs = uniq('division');

  const filtered = chars.filter(ch => {
    if (raceF  && ch.race     !== raceF)  return false;
    if (classF && ch.class    !== classF) return false;
    if (divF   && ch.division !== divF)   return false;
    if (q) {
      const s = q.toLowerCase();
      return [ch.name, ch.race, ch.class, ch.division].some(v => v?.toLowerCase().includes(s));
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    let cmp = 0;
    if (sortBy === 'name') {
      cmp = (a.name || '').localeCompare(b.name || '', 'de');
    } else if (sortBy === 'level') {
      cmp = (Number(a._char?.level) || 0) - (Number(b._char?.level) || 0);
    } else {
      cmp = new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
    }
    return sortDir === 'desc' ? -cmp : cmp;
  });

  const selStyle = {
    fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".12em",textTransform:"uppercase",
    padding:"5px 10px",background:"rgb(var(--panel-rgb))",border:"1px solid rgba(var(--purple-rgb),calc(0.22*var(--kp)))",
    borderRadius:3,cursor:"pointer",color:"rgba(var(--text-rgb),calc(0.75*var(--kt) + var(--tb)))",outline:"none",colorScheme:"dark"
  };

  const toolBtn = {
    fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".16em",textTransform:"uppercase",
    padding:"6px 14px",background:"transparent",border:"1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))",borderRadius:3,
    cursor:"pointer",color:"rgba(var(--purple-rgb),calc(0.45*var(--kp) + var(--tb)))",transition:"all .18s"
  };

  const hasFilter = raceF || classF || divF || q;

  return (
    <div className="mc-page" style={{minHeight:"calc(var(--vh, 1vh) * 100)",padding:"0 32px 48px"}}>
      {/* Header */}
      <div className="mc-head" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px 0 20px",
        borderBottom:"1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))",marginBottom:24}}>
        <div className="mc-head-left" style={{display:"flex",alignItems:"center",gap:20}}>
          {/* Zurück-Button */}
          <a href="/index.html"
            style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:"var(--font-mono)",
              fontSize:8,letterSpacing:".18em",textTransform:"uppercase",color:"rgba(var(--purple-rgb),calc(0.45*var(--kp) + var(--tb)))",
              textDecoration:"none",border:"1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))",borderRadius:3,
              padding:"5px 12px",transition:"all .18s",flexShrink:0}}
            onMouseEnter={e=>{e.currentTarget.style.color="rgba(var(--accent-rgb),calc(0.8*var(--ka) + var(--tb)))";e.currentTarget.style.borderColor="rgba(var(--purple-rgb),calc(0.5*var(--kp)))";}}
            onMouseLeave={e=>{e.currentTarget.style.color="rgba(var(--purple-rgb),calc(0.45*var(--kp) + var(--tb)))";e.currentTarget.style.borderColor="rgba(var(--purple-rgb),calc(0.2*var(--kp)))";}}>
            ← Zurück
          </a>
          <div>
            <div style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".28em",color:"rgba(var(--purple-rgb),calc(0.45*var(--kp) + var(--tb)))",
              textTransform:"uppercase",marginBottom:3}}>Meruria · Charaktere</div>
            <h1 style={{fontFamily:"var(--font-display)",fontWeight:400,fontSize:22,letterSpacing:".2em",
              color:"var(--white)",textTransform:"uppercase",textShadow:"0 0 28px rgba(var(--purple-rgb),calc(0.2*var(--kp)))"}}>
              Charakter wählen
            </h1>
          </div>
        </div>
        <div className="mc-tools" style={{display:"flex",gap:8,alignItems:"center"}}>
          <button onClick={()=>exportChars(chars)} style={toolBtn}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(var(--purple-rgb),calc(0.5*var(--kp)))";e.currentTarget.style.color="rgba(var(--accent-rgb),calc(0.8*var(--ka) + var(--tb)))";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(var(--purple-rgb),calc(0.2*var(--kp)))";e.currentTarget.style.color="rgba(var(--purple-rgb),calc(0.45*var(--kp) + var(--tb)))";}}>
            ↓ Export
          </button>
          <button onClick={()=>importRef.current.click()} style={toolBtn}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(var(--purple-rgb),calc(0.5*var(--kp)))";e.currentTarget.style.color="rgba(var(--accent-rgb),calc(0.8*var(--ka) + var(--tb)))";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(var(--purple-rgb),calc(0.2*var(--kp)))";e.currentTarget.style.color="rgba(var(--purple-rgb),calc(0.45*var(--kp) + var(--tb)))";}}>
            ↑ Import
          </button>
          <input ref={importRef} type="file" accept=".json,application/json" style={{display:"none"}} onChange={handleImport} />
          <button onClick={onNew}
            style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".18em",textTransform:"uppercase",
              padding:"7px 18px",background:"rgba(var(--purple-rgb),calc(0.18*var(--kp)))",border:"1px solid rgba(var(--purple-rgb),calc(0.5*var(--kp)))",
              borderRadius:3,cursor:"pointer",color:"rgba(var(--text-rgb),calc(0.9*var(--kt) + var(--tb)))",transition:"all .18s"}}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(var(--purple-rgb),calc(0.3*var(--kp)))";e.currentTarget.style.borderColor="rgba(var(--accent-rgb),calc(0.7*var(--ka)))";}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(var(--purple-rgb),calc(0.18*var(--kp)))";e.currentTarget.style.borderColor="rgba(var(--purple-rgb),calc(0.5*var(--kp)))";}}>
            + Neu
          </button>
        </div>
      </div>

      {/* Filter-Leiste */}
      <div className="mc-filter" style={{display:"flex",gap:8,alignItems:"center",marginBottom:22,flexWrap:"wrap"}}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Suchen …"
          style={{fontFamily:"var(--font-body)",fontSize:12,color:"var(--white)",
            background:"rgba(var(--purple-rgb),calc(0.06*var(--kp)))",border:"1px solid rgba(var(--purple-rgb),calc(0.22*var(--kp)))",
            borderRadius:4,padding:"5px 11px",outline:"none",width:180,colorScheme:"dark"}} />

        {races.length > 1 && <select value={raceF} onChange={e=>setRaceF(e.target.value)} style={selStyle}>
          <option value="">Volk</option>
          {races.map(r=><option key={r} value={r}>{r}</option>)}
        </select>}

        {classes.length > 1 && <select value={classF} onChange={e=>setClassF(e.target.value)} style={selStyle}>
          <option value="">Klasse</option>
          {classes.map(c=><option key={c} value={c}>{c}</option>)}
        </select>}

        {divs.length > 1 && <select value={divF} onChange={e=>setDivF(e.target.value)} style={selStyle}>
          <option value="">Division</option>
          {divs.map(d=><option key={d} value={d}>{d}</option>)}
        </select>}

        <select value={sortBy} onChange={e=>setSortBy(e.target.value)} style={selStyle}>
          <option value="date">Erstellungsdatum</option>
          <option value="name">Name</option>
          <option value="level">Stufe</option>
        </select>

        <button onClick={()=>setSortDir(d=>d==='asc'?'desc':'asc')}
          title={sortDir==='asc'?'Aufsteigend':'Absteigend'}
          style={{...selStyle,cursor:"pointer"}}>
          {sortDir==='asc'?'↑':'↓'}
        </button>

        {hasFilter && <button onClick={()=>{setQ('');setRaceF('');setClassF('');setDivF('');}}
          style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".12em",padding:"5px 10px",
            background:"transparent",border:"1px solid rgba(var(--purple-rgb),calc(0.18*var(--kp)))",borderRadius:3,
            cursor:"pointer",color:"rgba(var(--purple-rgb),calc(0.45*var(--kp) + var(--tb)))",transition:"all .15s"}}
          onMouseEnter={e=>e.currentTarget.style.color="color-mix(in srgb, rgba(200,160,255,0.7), rgb(var(--ink-rgb)) var(--cm))"}
          onMouseLeave={e=>e.currentTarget.style.color="rgba(var(--purple-rgb),calc(0.45*var(--kp) + var(--tb)))"}>
          × Filter löschen
        </button>}

        <span style={{fontFamily:"var(--font-mono)",fontSize:8,color:"rgba(var(--purple-rgb),calc(0.35*var(--kp) + var(--tb)))",
          marginLeft:"auto",letterSpacing:".12em"}}>
          {sorted.length} Charakter{sorted.length!==1?'e':''}
        </span>
      </div>

      {/* Grid */}
      {sorted.length === 0
        ? <div style={{textAlign:"center",padding:"60px 0",fontFamily:"var(--font-mono)",fontSize:9,
            letterSpacing:".2em",color:"rgba(var(--purple-rgb),calc(0.3*var(--kp) + var(--tb)))",textTransform:"uppercase"}}>
            Keine Charaktere gefunden
          </div>
        : <div className="mc-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:14}}>
            {sorted.map(ch => (
              <CharCard key={ch.id} ch={ch}
                onSelect={onSelect}
                onDelete={handleDelete}
                onExport={c=>exportChars([c],`${c.name||'charakter'}.json`)} />
            ))}
          </div>
      }
    </div>
  );
}

/* ── Leer-Zustand ──────────────────────────── */
function EmptyState() {
  return (
    <div style={{minHeight:"calc(var(--vh, 1vh) * 100)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{maxWidth:480,width:"100%",padding:"0 24px",textAlign:"center"}}>
        <div style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:".3em",color:"rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))",textTransform:"uppercase",marginBottom:16}}>
          Meruria · Charaktere
        </div>
        <div style={{fontFamily:"var(--font-display)",fontSize:20,letterSpacing:".22em",color:"rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))",textTransform:"uppercase",marginBottom:8}}>
          Noch kein Charakter
        </div>
        <p style={{fontFamily:"var(--font-body)",fontSize:13,fontWeight:300,color:"var(--silver)",lineHeight:1.8,marginBottom:28}}>
          Du hast noch keinen Charakter erstellt. Starte die Charaktererstellung, um deinen ersten Abenteurer auf Meruria zu erschaffen.
        </p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="/index.html"
            style={{display:"inline-flex",alignItems:"center",gap:8,padding:"11px 22px",
              background:"transparent",border:"1px solid rgba(var(--purple-rgb),calc(0.25*var(--kp)))",
              borderRadius:3,color:"rgba(var(--accent-rgb),calc(0.6*var(--ka) + var(--tb)))",fontFamily:"var(--font-mono)",
              fontSize:9,letterSpacing:".18em",textTransform:"uppercase",textDecoration:"none",transition:"all .2s"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(var(--purple-rgb),calc(0.5*var(--kp)))";e.currentTarget.style.color="rgba(var(--text-rgb),calc(0.9*var(--kt) + var(--tb)))";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(var(--purple-rgb),calc(0.25*var(--kp)))";e.currentTarget.style.color="rgba(var(--accent-rgb),calc(0.6*var(--ka) + var(--tb)))";}}>
            ← Zurück
          </a>
          <a href="/charaktererstellung/neuer-charakter.html"
            style={{display:"inline-flex",alignItems:"center",gap:10,padding:"12px 28px",
              background:"rgba(var(--purple-rgb),calc(0.18*var(--kp)))",border:"1px solid rgba(var(--purple-rgb),calc(0.55*var(--kp)))",
              borderRadius:3,color:"rgba(var(--text-rgb),calc(0.95*var(--kt) + var(--tb)))",fontFamily:"var(--font-display)",
              fontSize:11,letterSpacing:".18em",textTransform:"uppercase",textDecoration:"none",transition:"all .2s"}}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(var(--purple-rgb),calc(0.32*var(--kp)))";e.currentTarget.style.borderColor="rgba(var(--accent-rgb),calc(0.8*var(--ka)))";e.currentTarget.style.color="var(--white)";}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(var(--purple-rgb),calc(0.18*var(--kp)))";e.currentTarget.style.borderColor="rgba(var(--purple-rgb),calc(0.55*var(--kp)))";e.currentTarget.style.color="rgba(var(--text-rgb),calc(0.95*var(--kt) + var(--tb)))";}}>
            Charakter erstellen →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Haupt-App ─────────────────────────────── */
function App() {
  const [chars, setChars] = useApp([]);
  const [loading, setLoading] = useApp(true);
  const [entry, setEntry] = useApp(null);

  async function reload() {
    setLoading(true);
    const list = await loadCharacters();
    setChars(list);
    setLoading(false);
  }

  React.useEffect(() => { reload(); }, []);

  async function handleBack() {
    setEntry(null);
    await reload();
  }

  if (loading) return (
    <div style={{minHeight:"calc(var(--vh, 1vh) * 100)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:".3em",color:"rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))",textTransform:"uppercase"}}>
        Lade Charaktere…
      </span>
    </div>
  );
  if (chars.length === 0) return <EmptyState />;
  if (entry) { const SV = window.SteckbriefView; return <SV entry={entry} onBack={handleBack} hasMultiple={chars.length > 1} />; }

  return (
    <CharSelection
      chars={chars}
      onSelect={e => setEntry(e)}
      onNew={() => { window.location.href = '/charaktererstellung/neuer-charakter.html'; }}
      onReload={reload}
    />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <SiteGate><App /></SiteGate>
);

})();
