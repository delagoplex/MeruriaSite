// Page entry for /spielerhandbuch/rezeptkodex.html


;(function () {
// top-level functions were global in the old classic-script setup
Object.assign(window, { hexPts, Oct, Scramble, SH, RecipeCard, App });

const { useState, useEffect, useRef } = React;

/* ── hexagon ── */
function hexPts(size){ const c=size/2, p=[]; for(let i=0;i<6;i++){ const a=Math.PI/180*(60*i-30); p.push(`${c+c*Math.cos(a)},${c+c*Math.sin(a)}`);} return p.join(' '); }
function Oct({ size=10, color='rgba(var(--purple-rgb),calc(0.6*var(--kp) + var(--tb)))', fill='rgba(var(--purple-rgb),calc(0.18*var(--kp)))', sw=1, style={} }){
  return <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{display:'block',flexShrink:0,...style}}><polygon points={hexPts(size)} fill={fill} stroke={color} strokeWidth={sw}/></svg>;
}

/* ── glyph scrambler ── */
const GLYPHS = '▪▫□■◇◆▮▯•◦▬│┃⬚'.split('');
const randGlyph = () => GLYPHS[(Math.random()*GLYPHS.length)|0];
const scrambleString = (t) => { let o=''; for(const c of t) o += (c===' '||c==='\n') ? c : randGlyph(); return o; };

function Scramble({ text, revealed, onReveal, tag='span', className='', style }){
  const Tag = tag;
  const [display, setDisplay] = useState(() => revealed ? text : scrambleString(text));
  const [phase, setPhase] = useState(revealed ? 'revealed' : 'locked');
  const rafRef = useRef(null);
  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);
  useEffect(() => {
    if (revealed && phase!=='revealed' && phase!=='decoding') runDecode();
    else if (!revealed && phase==='revealed'){ cancelAnimationFrame(rafRef.current); setDisplay(scrambleString(text)); setPhase('locked'); }
    // eslint-disable-next-line
  }, [revealed]);
  function runDecode(){
    setPhase('decoding');
    const chars=[...text]; const total=460+Math.min(chars.length*20,760); const start=performance.now(); let last=0;
    const step=(now)=>{ const t=now-start;
      if (now-last>32 || t>=total){ last=now; let o='';
        for(let i=0;i<chars.length;i++){ const c=chars[i]; if(c===' '||c==='\n'){o+=c;continue;} const settle=(i/chars.length)*total*0.62+total*0.32; o += (t>=settle)?c:randGlyph(); }
        setDisplay(o);
      }
      if (t<total) rafRef.current=requestAnimationFrame(step); else { setDisplay(text); setPhase('revealed'); }
    };
    rafRef.current=requestAnimationFrame(step);
  }
  const cls = 'scr '+(phase==='revealed'?'revealed':phase)+(className?' '+className:'');
  return <Tag className={cls} style={style}
    role={phase==='locked'?'button':undefined} tabIndex={phase==='locked'?0:undefined}
    title={phase==='locked'?'Klicken zum Entschlüsseln':undefined}
    onClick={phase==='locked'?onReveal:undefined}
    onKeyDown={phase==='locked'?(e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();onReveal();}}:undefined}
  >{display}</Tag>;
}

/* ── category colors ── */
const CAT = {
  Fisch:   { c:'rgba(110,170,255,0.92)', bg:'rgba(110,170,255,0.08)', bd:'rgba(110,170,255,0.32)' },
  Pflanze: { c:'rgba(120,220,160,0.9)',  bg:'rgba(120,220,160,0.07)', bd:'rgba(120,220,160,0.3)' },
  Mineral: { c:'rgba(190,190,210,0.9)',  bg:'rgba(190,190,210,0.07)', bd:'rgba(190,190,210,0.3)' },
};

/* ── recipe data (from Bild 1) ── */
const RECIPE = {
  title: 'Geschmorter Zotteliger Seedrache auf Algenbett',
  desc: 'Ein uraltes Küstenrezept der Meereshexen – der Zottelige Seedrache gilt als scheues Wesen der Tiefsee, dessen Fleisch nach Salzwind und wildem Ozean schmeckt. Nur die geduldigen Jäger kommen in den Genuss dieser Delikatesse.',
  meta: [
    { l:'Disziplin', v:'Kochen' },
    { l:'Probe', v:'Weisheit (WEI)' },
    { l:'Zubereitung', v:'1 Stunde' },
    { l:'Portionen', v:'2 Portionen' },
  ],
  zutaten: [
    { amt:'1400 Gramm',  name:'Zotteliger Seedrache', cat:'Fisch' },
    { amt:'300 Gramm',   name:'Adamant-Alge',         cat:'Pflanze' },
    { amt:'4 Zehe',      name:'Flammenknoblauch',     cat:'Pflanze' },
    { amt:'2 Teelöffel', name:'Nordsteinsalz',        cat:'Mineral' },
    { amt:'1 Teelöffel', name:'Cachuga-Pfeffer',      cat:'Pflanze' },
  ],
  ergebnis: 'Geschmorter Zotteliger Seedrache auf Algenbett',
  sg: '14',
  effekt: 'Du erhältst für 8 Stunden +2 auf Konstitutions-Rettungswürfe.',
};
const BLOCK_IDS = ['title','desc', ...RECIPE.zutaten.map((_,i)=>'ing'+i), 'result','sg','effect'];

function SH({ kick, title }){
  return (
    <div className="sh">
      <div className="sh-kick">{kick}</div>
      <div className="sh-title-row"><Oct size={9}/><h3>{title}</h3></div>
      <div className="sh-under"></div>
    </div>
  );
}

function RecipeCard({ onClose }){
  const [revealed, setRevealed] = useState({});
  const reveal = (id) => setRevealed(r => ({ ...r, [id]:true }));
  const allRevealed = BLOCK_IDS.every(id => revealed[id]);
  const toggleAll = () => { if (allRevealed) setRevealed({}); else { const a={}; BLOCK_IDS.forEach(id=>a[id]=true); setRevealed(a); } };

  return (
    <div className="panel" onClick={(e)=>e.stopPropagation()}>
      <button className="close" onClick={onClose} aria-label="Schließen">✕</button>

      {/* header */}
      <div className="head">
        <div className="head-main">
          <div className="kicker">Rezeptkodex · Meereshexen-Küche</div>
          <div className="title-row">
            <span className="hx"><Oct size={12}/></span>
            <Scramble tag="h1" className="r-title" text={RECIPE.title} revealed={!!revealed.title} onReveal={()=>reveal('title')} />
          </div>
          <div className="cat-line">
            <span className="cat-dot" style={{background:CAT.Fisch.c}}></span>
            <span className="cat-txt" style={{color:CAT.Fisch.c}}>Fisch</span>
            <span className="cat-sep">·</span>
            <span className="cat-txt" style={{color:'rgba(var(--accent-rgb),calc(0.7*var(--ka) + var(--tb)))'}}>Geschmort</span>
            <span className="cat-sep">·</span>
            <span className="cat-txt" style={{color:'rgba(var(--accent-rgb),calc(0.7*var(--ka) + var(--tb)))'}}>Delikatesse</span>
          </div>
          <Scramble tag="p" className="desc" text={RECIPE.desc} revealed={!!revealed.desc} onReveal={()=>reveal('desc')} />
        </div>
        <div className="plate-col">
          <div className="plate">
            <image-slot id="rezept-seedrache-bild" shape="rect" fit="cover"
              placeholder="Bild ablegen" style={{ color:'color-mix(in srgb, rgba(208,198,240,0.6), rgb(var(--ink-rgb)) var(--cm))' }}></image-slot>
            <span className="ptick a"></span><span className="ptick b"></span>
            <span className="ptick c"></span><span className="ptick d"></span>
          </div>
          <div className="plate-cap">Illustration</div>
        </div>
      </div>

      <div className="body">
        {/* meta */}
        <div className="meta">
          <div className="meta-grid">
            {RECIPE.meta.map((m,i)=>(
              <div className="meta-item" key={i}>
                <div className="ml">{m.l}</div>
                <div className="mv">{m.v}</div>
              </div>
            ))}
          </div>
          <div className="meta-sg">
            <div className="sg-hex"
              role={revealed.sg?undefined:'button'} tabIndex={revealed.sg?undefined:0}
              title={revealed.sg?undefined:'Klicken zum Entschlüsseln'}
              onClick={revealed.sg?undefined:()=>reveal('sg')}
              style={{cursor:revealed.sg?'default':'pointer'}}>
              <svg viewBox="0 0 100 110">
                <polygon points="50,4 92,28 92,82 50,106 8,82 8,28" fill="rgba(var(--purple-rgb),calc(0.08*var(--kp)))" stroke="rgba(var(--purple-rgb),calc(0.5*var(--kp)))" strokeWidth="1.5"/>
                <polygon points="50,12 85,32 85,78 50,98 15,78 15,32" fill="none" stroke="rgba(var(--purple-rgb),calc(0.18*var(--kp)))" strokeWidth="1"/>
              </svg>
              <div className="sg-overlay">
                <span className="sl">SG</span>
                <Scramble tag="span" className="sn" text={RECIPE.sg} revealed={!!revealed.sg} onReveal={()=>reveal('sg')} />
              </div>
            </div>
          </div>
        </div>

        {/* Zutaten */}
        <SH kick="Bestandteile" title="Zutaten" />
        <div className="ztable">
          <div className="zhead"><span>Menge</span><span>Zutat</span><span>Kategorie</span></div>
          {RECIPE.zutaten.map((z,i)=>{
            const k = CAT[z.cat] || CAT.Mineral;
            return (
              <div className="zrow" key={i}>
                <div className="zamt">{z.amt}</div>
                <Scramble tag="div" className="zname" text={z.name} revealed={!!revealed['ing'+i]} onReveal={()=>reveal('ing'+i)} />
                <span className="zcat" style={{ color:k.c, background:k.bg, border:`1px solid ${k.bd}` }}>
                  <span className="cd" style={{background:k.c}}></span>{z.cat}
                </span>
              </div>
            );
          })}
        </div>

        {/* Ergebnis */}
        <SH kick="Resultat" title="Ergebnis" />
        <div className="result-box">
          <Scramble tag="div" className="result-name" text={RECIPE.ergebnis} revealed={!!revealed.result} onReveal={()=>reveal('result')} />
        </div>

        {/* Effekte */}
        <SH kick="Verzehr-Wirkung" title="Effekte" />
        <div className="eff">
          <div className="et">◆ Temporärer Effekt</div>
          <Scramble tag="div" className="etext" text={RECIPE.effekt} revealed={!!revealed.effect} onReveal={()=>reveal('effect')} />
        </div>
      </div>
    </div>
  );
}

function App(){
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (
    <div className="stage">
      <div className="opener">
        <div className="kick">◇ Rezeptkodex der Meereshexen ◇</div>
        <h2>Verschlüsselte Kochkunst</h2>
        <p>Ein Datenblatt aus Merurias Kochkodex. Öffne den Eintrag und entschlüssele Name, Zutaten, Resultat, Schwierigkeit und Wirkung Block für Block.</p>
        <button className="open-btn" onClick={()=>setOpen(true)}><Oct size={10}/> Eintrag öffnen</button>
      </div>
      {open && (
        <div className="backdrop" onClick={()=>setOpen(false)}>
          <RecipeCard onClose={()=>setOpen(false)} />
        </div>
      )}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

})();

