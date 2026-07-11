/* ═══════════════════════════════════════════════════════════════
   steckbrief-components.jsx — Shared Steckbrief UI components
   Requires window globals: React, mod, fmtMod, attrKey, skillBonus,
                            ImageSlot, SecTitle, Card, Corners, IRow
   ═══════════════════════════════════════════════════════════════ */
const { useState: useSteckbrief, useRef: useSteckRef } = React;
const { mod, fmtMod, attrKey, skillBonus, ImageSlot, SecTitle, Card, Corners, IRow } = window;

/* ── Hilfsfunktionen ─────────────────────── */
function calcProfBonus(level) { return Math.ceil((level||1)/4)+1; }

function getTrefferwuerfel(charClass) {
  const k = (window.KLASSEN_DATA?.klassen||[]).find(k=>k.name===charClass);
  const m = (k?.trefferpunkte||'').match(/W\d+/);
  return m ? m[0] : null;
}

function getRasseGroesse(raceName) {
  const SIZES = ['Klein','Mittelgroß','Groß','Riesig','Gigantisch'];
  for (const r of (window.RASSEN_DATA||[])) {
    const check = t => SIZES.find(s=>t?.includes(s));
    if (r.name===raceName) return check(r.tags)||'Mittelgroß';
    const sub = (r.subraces||[]).find(s=>s.name===raceName);
    if (sub) return check(sub.tags)||'Mittelgroß';
  }
  return 'Mittelgroß';
}
function getGroesseMult(g) { return {Klein:0.5,Mittelgroß:1,Groß:2,Riesig:4,Gigantisch:8}[g]||1; }

/* ── Saves-Defaults (6 Attribute, kein Übungsbonus) ────────── */
const SAVES_DEFAULT = [
  {key:"str",label:"Stärke"},
  {key:"dex",label:"Geschicklichkeit"},
  {key:"con",label:"Konstitution"},
  {key:"int",label:"Intelligenz"},
  {key:"wis",label:"Weisheit"},
  {key:"cha",label:"Charisma"},
].map(s => ({...s, prof:0}));

/* ── Skill-Defaults (alle Fertigkeiten, kein Übungsbonus) ── */
const SKILLS_DEFAULT = [
  {name:"Akrobatik",         attr:"Ges",prof:0},{name:"Arkane Kunde",       attr:"Int",prof:0},
  {name:"Athletik",          attr:"Stä",prof:0},{name:"Auftreten",          attr:"Cha",prof:0},
  {name:"Einschüchtern",     attr:"Cha",prof:0},{name:"Fingerfertigkeit",   attr:"Ges",prof:0},
  {name:"Geschichte",        attr:"Int",prof:0},{name:"Heilkunde",          attr:"Wei",prof:0},
  {name:"Heimlichkeit",      attr:"Ges",prof:0},{name:"Mit Tieren umgehen", attr:"Wei",prof:0},
  {name:"Motiv erkennen",    attr:"Wei",prof:0},{name:"Nachforschungen",    attr:"Int",prof:0},
  {name:"Naturkunde",        attr:"Int",prof:0},{name:"Religion",           attr:"Int",prof:0},
  {name:"Täuschen",          attr:"Cha",prof:0},{name:"Überlebenskunst",    attr:"Wei",prof:0},
  {name:"Überzeugen",        attr:"Cha",prof:0},{name:"Wahrnehmung",        attr:"Wei",prof:0},
];

/* ── Quiz-Draft → Steckbrief-Objekt ────────────────────────────
   Erweiterung: (1) Quiz-Feld sammeln, (2) ins draft-Objekt packen,
                (3) entsprechende Zeile hier updaten.
   ─────────────────────────────────────────────────────────────── */
function buildChar(d) {
  return {
    // ── Aus Quiz ───────────────────────────────────────────────
    name:        d.name        || 'Neuer Charakter',
    race:        d.race        || '—',
    class:       d.class       || '—',
    background:  d.background  || '—',
    division:    d.division    || '—',
    divisionId:  d.divisionId  || null,
    deity:       d.deity       || '—',
    deityId:     d.deityId     || null,
    deityDomain: d.deityDomain || '—',
    deityHue:    55,
    stats:       d.stats       || {str:10,dex:10,con:10,int:10,wis:10,cha:10},

    // ── Persönlichkeit & Aussehen ──────────────────────────────
    alignment:      d.alignment      || '—',
    zodiac:         d.zodiac         || '—',
    geburtstag_doy: d.geburtstag_doy || null,
    gender:         d.gender         || '—',
    age:            d.age            || '—',
    birthplace:     d.birthplace     || '—',
    height:         d.height         || '—',
    weight:         d.weight         || '—',
    eyes:           d.eyes           || '—',
    hair:           d.hair           || '—',
    skin:           d.skin           || '—',

    // ── Festwerte / Stufe 1 ────────────────────────────────────
    subclass: d.subclass || '—', level:1, xp:0, profBonus:2,
    rank:'Neuankömmling', rankLevel:1, rankMax:5,
    hp:10, ac:10, initiative:0, speed:9,

    lebensstil: d.lebensstil || '',

    // ── Texte ──────────────────────────────────────────────────
    story:       d.story       || '',
    ersteTage:   d.ersteTage   || 'Als sich meine Träumerkapsel öffnete, ...',
    personality: d.personality || '',
    ideals:      d.ideals      || '',
    bonds:       d.bonds       || '',
    flaws:       d.flaws       || (d.samen ? `Samen der Furcht: ${d.samen}` : ''),

    // ── Leer bis selbst befüllt ────────────────────────────────
    weapons:    [],
    quests:     [],
    companions: [],
    contacts:   [],
    zauber:     [],

    // ── Freundebuch ────────────────────────────────────────────
    freundebuch: [
      {frage:'Meine Lieblingsfarbe',      antwort: d.lieblingsfarbe || '—'},
      {frage:'Mein Lieblingsessen',       antwort: '—'},
      {frage:'Lieblingsbeschäftigung',    antwort: '—'},
      {frage:'Wen ich bewundere',         antwort: '—'},
      {frage:'Mein größter Traum',        antwort: '—'},
      {frage:'Meine größte Angst',        antwort: d.samen || '—'},
      {frage:'Wenn ich ein Tier wäre...', antwort: d.tier  || '—'},
      {frage:'Mein Motto',                antwort: d.motto || '—'},
    ],

    skills: SKILLS_DEFAULT,
    saves:  d.saves || SAVES_DEFAULT,
    uebungen: d.uebungen || { ruestungen:[], waffen:[], fahrzeuge:[], sprachen:[], werkzeuge:[] },
    inventar: d.inventar || [],
  };
}

/* ── Division & Rang ──────────────────────── */
function DivisionRank({ char }) {
  const div = (window.DIVISIONS_DATA || []).find(d => d.id === char.divisionId) || null;
  const acc = div?.accent || 'rgba(124,77,255,0.7)';
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Division & Rang" />
      <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:8}}>
        {div && (
          <img src={div.logo} alt={div.name}
            style={{width:36,height:36,objectFit:"contain",flexShrink:0,
              filter:`drop-shadow(0 0 5px ${acc}) drop-shadow(0 0 10px ${acc}88)`}}/>
        )}
        <div style={{fontFamily:"var(--font-display)",fontSize:11,letterSpacing:".18em",
          color:"rgba(210,202,245,0.9)",textTransform:"uppercase"}}>{char.division}</div>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{display:"flex",gap:4}}>
          {Array.from({length:char.rankMax||5},(_,i)=>{
            const filled = i < char.rankLevel;
            return <span key={i} style={{display:"inline-block",width:9,height:9,
              transform:"rotate(45deg)",flexShrink:0,
              background:filled?`${acc}aa`:"transparent",
              border:`1px solid ${filled?acc:"rgba(124,77,255,0.2)"}`}} />;
          })}
        </div>
        <span style={{fontFamily:"var(--font-mono)",fontSize:10,color:"var(--white)"}}>
          {char.rank}
        </span>
      </div>
    </Card>
  );
}

/* ── Editierbare Division & Rang ─────────────── */
function EditableDivisionRank({ char, upd }) {
  const [open, setOpen] = useSteckbrief(false);
  const divs = window.DIVISIONS_DATA || [];
  const div  = divs.find(d => d.id === char.divisionId) || null;
  const acc  = div?.accent || 'rgba(124,77,255,0.7)';

  function selectDiv(d) {
    const lowest = d.raenge[d.raenge.length - 1];
    upd({ division: d.name, divisionId: d.id,
          rank: lowest.titel, rankLevel: 1, rankMax: d.raenge.length });
    setOpen(false);
  }

  function selectRang(r) {
    if (!div) return;
    upd({ rank: r.titel, rankLevel: div.raenge.length - r.rang + 1 });
  }

  return (
    <Card style={{marginBottom:11}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
        <SecTitle label="Division & Rang" />
        <button onClick={()=>setOpen(v=>!v)}
          style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".14em",textTransform:"uppercase",
            padding:"3px 10px",background:open?"rgba(124,77,255,0.18)":"transparent",
            border:"1px solid rgba(124,77,255,0.3)",borderRadius:2,cursor:"pointer",
            color:"rgba(160,140,255,0.8)",transition:"all .15s"}}>
          {open ? "✕ Schließen" : "⊞ Wählen"}
        </button>
      </div>

      {/* Aktuelle Division */}
      {div ? (
        <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:10}}>
          <img src={div.logo} alt={div.name}
            style={{width:36,height:36,objectFit:"contain",
              filter:`drop-shadow(0 0 5px ${acc}) drop-shadow(0 0 10px ${acc}88)`}}/>
          <div>
            <div style={{fontFamily:"var(--font-display)",fontSize:11,letterSpacing:".16em",
              color:"rgba(210,202,245,0.9)",textTransform:"uppercase",marginBottom:2}}>{div.name}</div>
            <div style={{fontFamily:"var(--font-mono)",fontSize:8,color:acc,letterSpacing:".08em"}}>{char.rank}</div>
          </div>
        </div>
      ) : (
        <div style={{fontFamily:"var(--font-mono)",fontSize:9,color:"rgba(124,77,255,0.35)",
          letterSpacing:".12em",marginBottom:10}}>— Keine Division gewählt —</div>
      )}

      {/* Rang-Auswahl (wenn Division gewählt und Picker zu) */}
      {div && !open && (
        <div style={{display:"flex",flexDirection:"column",gap:2}}>
          {div.raenge.slice().reverse().map(r => {
            const sel = char.rank === r.titel;
            return (
              <button key={r.rang} onClick={()=>selectRang(r)}
                style={{display:"flex",alignItems:"center",gap:8,padding:"3px 6px",
                  background:sel?`${acc}22`:"transparent",
                  border:`1px solid ${sel?acc:"transparent"}`,borderRadius:2,
                  cursor:"pointer",textAlign:"left",transition:"all .12s"}}>
                <span style={{fontFamily:"var(--font-mono)",fontSize:7,color:sel?acc:"rgba(124,77,255,0.3)",
                  letterSpacing:".1em",flexShrink:0,width:14}}>
                  {r.rang === 1 ? "★" : r.rang}
                </span>
                <span style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".08em",
                  color:sel?"var(--white)":"rgba(200,190,240,0.55)",textTransform:"uppercase"}}>
                  {r.titel}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Divisions-Picker */}
      {open && (
        <div style={{borderTop:"1px solid rgba(124,77,255,0.14)",paddingTop:12}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:6}}>
            {divs.map(d => {
              const sel = char.divisionId === d.id;
              const a   = d.accent || 'rgba(124,77,255,0.7)';
              return (
                <button key={d.id} onClick={()=>selectDiv(d)} title={d.name}
                  style={{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:5,
                    background:sel?`${a}22`:"rgba(7,4,18,0.7)",
                    border:`1px solid ${sel?a:"rgba(124,77,255,0.2)"}`,
                    borderRadius:3,cursor:"pointer",transition:"all .15s"}}>
                  <img src={d.logo} alt={d.name}
                    style={{width:38,height:38,objectFit:"contain",
                      filter:`drop-shadow(0 0 4px ${a}) drop-shadow(0 0 8px ${a}${sel?"bb":"55"})`}}/>
                  <span style={{fontFamily:"var(--font-mono)",fontSize:6,letterSpacing:".07em",
                    color:sel?"var(--white)":"rgba(200,190,240,0.55)",textTransform:"uppercase",
                    textAlign:"center",lineHeight:1.3,
                    overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"}}>
                    {d.name.replace('Die ','').replace('Der ','')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
}

/* ── Gottheit ─────────────────────────────── */
function findGod(id) {
  if (!id || !window.GODS_DATA) return null;
  return (window.GODS_DATA.gods || []).find(g => g.id === id) || null;
}

function DeitySymbol({ god, size = 72 }) {
  if (!god) return null;
  const clr = god.palette?.[2] || 'rgba(124,77,255,0.7)';
  return (
    <div style={{width:size,height:size,flexShrink:0,borderRadius:3,overflow:"hidden",
      background:"rgba(7,4,18,0.9)",border:`1px solid ${clr}55`}}>
      <img src={god.insigniaSrc} alt={god.name}
        style={{width:"100%",height:"100%",objectFit:"contain",display:"block",
          filter:`drop-shadow(0 0 6px ${clr}) drop-shadow(0 0 12px ${clr}88)`}}/>
    </div>
  );
}

function DeityCard({ char }) {
  const god  = findGod(char.deityId);
  const name = god ? god.name : (char.deity || '—');
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Gottheit" />
      <div style={{display:"flex",gap:12,alignItems:"center"}}>
        {god
          ? <DeitySymbol god={god} size={72}/>
          : <div style={{width:72,height:72,flexShrink:0}}>
              <ImageSlot slotId="deity-symbol" label="Symbol" height={72} hue={char.deityHue||55}/>
            </div>
        }
        <div style={{minWidth:0}}>
          <div style={{fontFamily:"var(--font-display)",fontSize:12,letterSpacing:".16em",color:"var(--white)",textTransform:"uppercase"}}>{name}</div>
          {god?.title && <div style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".08em",color:"rgba(160,140,255,0.5)",marginTop:4,lineHeight:1.5}}>{god.title}</div>}
        </div>
      </div>
    </Card>
  );
}

/* ── Editierbare Gottheit ─────────────────── */
function EditableDeityCard({ char, upd }) {
  const [open, setOpen] = useSteckbrief(false);
  const god = findGod(char.deityId);
  const gods = window.GODS_DATA?.gods || [];

  function select(g) {
    upd({ deity: g.name, deityId: g.id, deityDomain: g.domain, deityHue: 270 });
    setOpen(false);
  }

  return (
    <Card style={{marginBottom:11,position:"relative"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
        <SecTitle label="Gottheit" />
        <button onClick={()=>setOpen(v=>!v)}
          style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".14em",textTransform:"uppercase",
            padding:"3px 10px",background:open?"rgba(124,77,255,0.18)":"transparent",
            border:"1px solid rgba(124,77,255,0.3)",borderRadius:2,cursor:"pointer",
            color:"rgba(160,140,255,0.8)",transition:"all .15s"}}>
          {open ? "✕ Schließen" : "⊞ Wählen"}
        </button>
      </div>

      {/* Aktuelle Gottheit */}
      <div style={{display:"flex",gap:12,alignItems:"center",marginBottom: open ? 14 : 0}}>
        {god
          ? <DeitySymbol god={god} size={64}/>
          : <div style={{width:64,height:64,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",
              background:"rgba(7,4,18,0.9)",border:"1px solid rgba(124,77,255,0.2)",borderRadius:3,
              fontFamily:"var(--font-mono)",fontSize:7,color:"rgba(124,77,255,0.3)",letterSpacing:".1em"}}>— —</div>
        }
        <div style={{minWidth:0}}>
          <div style={{fontFamily:"var(--font-display)",fontSize:12,letterSpacing:".16em",color:"var(--white)",textTransform:"uppercase",marginBottom:3}}>
            {god ? god.name : (char.deity || '—')}
          </div>
          {god?.title && <div style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".08em",color:"rgba(160,140,255,0.5)",lineHeight:1.5}}>{god.title}</div>}
        </div>
      </div>

      {/* Picker */}
      {open && (
        <div style={{borderTop:"1px solid rgba(124,77,255,0.14)",paddingTop:12}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(72px,1fr))",gap:6}}>
            {gods.map(g => {
              const sel = char.deityId === g.id;
              const clr = g.palette?.[2] || "rgba(124,77,255,0.7)";
              return (
                <button key={g.id} onClick={()=>select(g)} title={g.name}
                  style={{padding:"6px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,
                    background:sel?"rgba(124,77,255,0.18)":"rgba(7,4,18,0.7)",
                    border:`1px solid ${sel?clr:"rgba(124,77,255,0.2)"}`,
                    borderRadius:3,cursor:"pointer",transition:"all .15s"}}>
                  <img src={g.insigniaSrc} alt={g.name}
                    style={{width:36,height:36,objectFit:"contain",display:"block",
                      filter:`drop-shadow(0 0 4px ${clr}) drop-shadow(0 0 8px ${clr}${sel?"bb":"55"})`}}/>
                  <span style={{fontFamily:"var(--font-mono)",fontSize:6.5,letterSpacing:".07em",
                    color:sel?"var(--white)":"rgba(200,190,240,0.55)",textTransform:"uppercase",
                    whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"}}>
                    {g.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
}

/* ── Kampf-Kompakt ────────────────────────── */
function KampfStatCell({ label, value, dim }) {
  return (
    <div style={{background:"rgba(7,4,18,0.9)",border:`1px solid rgba(124,77,255,${dim?0.13:0.22})`,borderRadius:3,
      padding:dim?"5px 6px":"7px 10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:dim?11:18,color:dim?"rgba(200,190,240,0.7)":"var(--white)",lineHeight:1}}>{value}</span>
      <span style={{fontFamily:"var(--font-mono)",fontSize:6.5,letterSpacing:".18em",color:"rgba(124,77,255,0.4)",textTransform:"uppercase",marginTop:3}}>{label}</span>
    </div>
  );
}

function CombatCompact({ char }) {
  const tw = getTrefferwuerfel(char.class);
  const pb = calcProfBonus(char.level||1);
  const pw = calcPassiveWahrnehmung(char);
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Kampf" />
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:6}}>
        <KampfStatCell label="TP"   value={char.hp} />
        <KampfStatCell label="RK"   value={char.ac} />
        <KampfStatCell label="INIT" value={fmtMod(char.initiative)} />
        <KampfStatCell label="BEWG" value={char.speed+"m"} />
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6}}>
        <KampfStatCell label="Stufe"    value={char.level||1} dim />
        <KampfStatCell label={tw?"TW":"TW"} value={tw||'—'} dim />
        <KampfStatCell label="Übungsb." value={fmtMod(pb)} dim />
      </div>
      <div style={{marginTop:6}}>
        <KampfStatCell label="Passive Wahrnehmung" value={pw} dim />
      </div>
    </Card>
  );
}

/* ── Editierbare Kampfwerte ───────────────── */
function EditableCombatCompact({ char, upd }) {
  const mainFields = [
    { key:'hp',         label:'TP',   min:1  },
    { key:'ac',         label:'RK',   min:1  },
    { key:'initiative', label:'INIT', min:-5 },
    { key:'speed',      label:'BEWG', min:0  },
  ];
  const tw = getTrefferwuerfel(char.class);
  const pb = calcProfBonus(char.level||1);
  const pw = calcPassiveWahrnehmung(char);
  const autoCell = (label, value) => (
    <div style={{background:"rgba(7,4,18,0.9)",border:"1px solid rgba(124,77,255,0.13)",borderRadius:3,
      padding:"5px 6px",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"rgba(200,190,240,0.55)",lineHeight:1}}>{value}</span>
      <span style={{fontFamily:"var(--font-mono)",fontSize:6.5,letterSpacing:".18em",color:"rgba(124,77,255,0.3)",textTransform:"uppercase",marginTop:3}}>{label}</span>
    </div>
  );
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Kampf" />
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:6}}>
        {mainFields.map(({key,label,min})=>(
          <div key={key} style={{background:"rgba(7,4,18,0.9)",border:"1px solid rgba(124,77,255,0.28)",borderRadius:3,
            padding:"6px 8px",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <input type="number" min={min} value={char[key]??0}
              onChange={e=>upd({[key]:parseInt(e.target.value)||0})}
              style={{fontFamily:"var(--font-mono)",fontSize:18,color:"var(--white)",lineHeight:1,
                background:"transparent",border:"none",textAlign:"center",width:"100%",
                outline:"none",WebkitAppearance:"none",MozAppearance:"textfield"}}/>
            <span style={{fontFamily:"var(--font-mono)",fontSize:6.5,letterSpacing:".18em",
              color:"rgba(124,77,255,0.5)",textTransform:"uppercase",marginTop:2}}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:6}}>
        <div style={{background:"rgba(7,4,18,0.9)",border:"1px solid rgba(124,77,255,0.28)",borderRadius:3,
          padding:"6px 8px",display:"flex",flexDirection:"column",alignItems:"center"}}>
          <input type="number" min={1} max={20} value={char.level||1}
            onChange={e=>{const l=Math.min(20,Math.max(1,parseInt(e.target.value)||1));upd({level:l,profBonus:calcProfBonus(l)});}}
            style={{fontFamily:"var(--font-mono)",fontSize:18,color:"var(--white)",lineHeight:1,
              background:"transparent",border:"none",textAlign:"center",width:"100%",
              outline:"none",WebkitAppearance:"none",MozAppearance:"textfield"}}/>
          <span style={{fontFamily:"var(--font-mono)",fontSize:6.5,letterSpacing:".18em",color:"rgba(124,77,255,0.5)",textTransform:"uppercase",marginTop:2}}>Stufe</span>
        </div>
        {autoCell('TW', tw||'—')}
        {autoCell('Übungsb.', fmtMod(pb))}
      </div>
      {autoCell('Passive Wahrnehmung', pw)}
    </Card>
  );
}

/* ── Waffen ───────────────────────────────── */
const WAFFE_ATTR_ABBR = {str:'STÄ',dex:'GES',con:'KON',int:'INT',wis:'WEI',cha:'CHA'};
const WAFFE_ATTRS = ['str','dex','con','int','wis','cha'];
const WAFFE_EMPTY = () => ({name:'',angriffsart:'Nahkampf',uebung:false,attribut:'str',reichweite:'1,5 m',schaden:'',schadenstyp:'',notiz:''});

function WaffenStatCell({ label, value, accent }) {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",minWidth:0,
      background:"rgba(7,4,18,0.9)",border:"1px solid rgba(124,77,255,0.18)",borderRadius:3,padding:"5px 4px"}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:9,fontWeight:accent?600:400,
        color:accent?"rgba(124,77,255,0.9)":"var(--white)",lineHeight:1,marginBottom:3,
        maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{value}</span>
      <span style={{fontFamily:"var(--font-mono)",fontSize:6,letterSpacing:".1em",
        color:"rgba(124,77,255,0.38)",textTransform:"uppercase",whiteSpace:"nowrap"}}>{label}</span>
    </div>
  );
}

function WaffenCard({ char }) {
  const weapons = char.weapons || [];
  if (!weapons.length) return null;
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Waffen" />
      {weapons.map((w,i) => {
        const attr = w.attribut || 'str';
        const bonus = mod(char.stats?.[attr] ?? 10) + (w.uebung ? (char.profBonus||2) : 0);
        return (
          <div key={i} style={{borderBottom:"1px solid rgba(124,77,255,0.08)",paddingBottom:8,marginBottom:8}}>
            <div style={{fontFamily:"var(--font-display)",fontSize:11,letterSpacing:".18em",
              textTransform:"uppercase",color:"var(--white)",marginBottom:6,
              paddingBottom:5,borderBottom:"1px solid rgba(124,77,255,0.15)"}}>{w.name||'—'}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:4,marginBottom:4}}>
              <WaffenStatCell label="Art"       value={w.angriffsart==='Fernkampf'?'Fern':'Nah'} />
              <WaffenStatCell label="Attribut"  value={WAFFE_ATTR_ABBR[attr]} />
              <WaffenStatCell label="Übung"     value={w.uebung?'◆':'○'} />
              <WaffenStatCell label="RW" value={w.reichweite||'—'} />
              <WaffenStatCell label="Bonus"     value={fmtMod(bonus)} accent />
            </div>
            <div style={{display:"grid",gridTemplateColumns:w.notiz?"1fr 1fr 1.5fr":"1fr 1fr",gap:4}}>
              <WaffenStatCell label="Schaden"     value={w.schaden||'—'} />
              <WaffenStatCell label="Schadenstyp" value={w.schadenstyp||'—'} />
              {w.notiz && <WaffenStatCell label="Notiz" value={w.notiz} />}
            </div>
          </div>
        );
      })}
    </Card>
  );
}

function parseWaffeVorschlag(item, angriffsart) {
  const parts = (item.schaden || '').split(' ');
  const schaden = parts[0] || '';
  const schadenstyp = parts.slice(1).join(' ') || '';
  let reichweite = angriffsart === 'Nahkampf' ? '1,5 m' : '';
  const rwMatch = (item.eigenschaften || '').match(/Reichweite ([\d,]+\/[\d,]+)/);
  if (rwMatch) reichweite = rwMatch[1] + ' m';
  return { name: item.name, angriffsart, schaden, schadenstyp, reichweite };
}

function EditableWaffenCard({ char, upd }) {
  const weapons = char.weapons || [];
  const iStyle = {fontFamily:"var(--font-body)",fontSize:10.5,color:"var(--white)",background:"transparent",
    border:"none",borderBottom:"1px solid rgba(124,77,255,0.22)",outline:"none",padding:"1px 3px",width:"100%",minWidth:0};
  const lbl = {fontFamily:"var(--font-mono)",fontSize:6.5,letterSpacing:".1em",color:"rgba(124,77,255,0.35)",textTransform:"uppercase",marginBottom:2};
  const selStyle = {...iStyle,fontFamily:"var(--font-mono)",fontSize:9,cursor:"pointer",paddingRight:2};

  const d = window.AUSRUESTUNG_DATA || {};
  const waffenKat = [
    {label:'Einfache Nahkampfwaffen', items: d.EINFACHE_NAHKAMPF||[], art:'Nahkampf'},
    {label:'Kriegswaffen (Nah)',      items: d.KRIEGS_NAHKAMPF  ||[], art:'Nahkampf'},
    {label:'Einfache Fernkampfwaffen',items: d.EINFACHE_FERNKAMPF||[],art:'Fernkampf'},
    {label:'Kriegswaffen (Fern)',     items: d.KRIEGS_FERNKAMPF ||[], art:'Fernkampf'},
  ];

  function updW(i, patch) {
    const next = weapons.map((w,j) => j===i ? {...w,...patch} : w);
    upd({weapons:next});
  }
  function addW() { upd({weapons:[...weapons, WAFFE_EMPTY()]}); }
  function delW(i) { upd({weapons:weapons.filter((_,j)=>j!==i)}); }

  function pickVorlage(i, val) {
    if (!val) return;
    const [katIdx, itemIdx] = val.split(':').map(Number);
    const kat = waffenKat[katIdx];
    if (!kat) return;
    const item = kat.items[itemIdx];
    if (!item) return;
    updW(i, parseWaffeVorschlag(item, kat.art));
  }

  return (
    <Card style={{marginBottom:11}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
        <SecTitle label="Waffen" style={{marginBottom:0}} />
        <button onClick={addW} style={{fontFamily:"var(--font-mono)",fontSize:9,color:"rgba(124,77,255,0.7)",
          background:"rgba(124,77,255,0.1)",border:"1px solid rgba(124,77,255,0.3)",borderRadius:2,
          padding:"2px 8px",cursor:"pointer",letterSpacing:".1em"}}>+ Waffe</button>
      </div>
      {weapons.length === 0 && (
        <div style={{fontFamily:"var(--font-mono)",fontSize:8,color:"rgba(124,77,255,0.28)",letterSpacing:".1em",padding:"4px 0"}}>Keine Waffen</div>
      )}
      {weapons.map((w,i) => {
        const attr = w.attribut||'str';
        const bonus = mod(char.stats?.[attr] ?? 10) + (w.uebung ? (char.profBonus||2) : 0);
        return (
          <div key={i} style={{borderBottom:"1px solid rgba(124,77,255,0.1)",paddingBottom:8,marginBottom:8}}>
            {/* Zeile 1: Name + Vorlage-Picker + Löschen */}
            <div style={{display:"flex",gap:6,alignItems:"center",marginBottom:5}}>
              <input value={w.name||''} onChange={e=>updW(i,{name:e.target.value})} placeholder="Eigener Name"
                style={{...iStyle,fontSize:11.5,flex:1,borderBottomColor:"rgba(124,77,255,0.35)"}} />
              <select value="" onChange={e=>pickVorlage(i,e.target.value)}
                style={{...selStyle,fontSize:8,background:"rgba(7,4,18,0.8)",flexShrink:0,maxWidth:110,
                  color:"rgba(124,77,255,0.55)",borderBottomColor:"rgba(124,77,255,0.18)"}}>
                <option value="">aus Liste…</option>
                {waffenKat.map((kat,ki) => kat.items.length > 0 && (
                  <optgroup key={ki} label={kat.label}>
                    {kat.items.map((item,ii) => (
                      <option key={ii} value={`${ki}:${ii}`}>{item.name}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <button onClick={()=>delW(i)} style={{fontFamily:"var(--font-mono)",fontSize:11,color:"rgba(200,80,80,0.55)",
                background:"transparent",border:"none",cursor:"pointer",padding:"0 2px",flexShrink:0,lineHeight:1}}>×</button>
            </div>
            {/* Zeile 2: Art / Attr / Übung / Reichweite / Bonus */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 24px 1fr 40px",gap:"0 6px",marginBottom:5,alignItems:"end"}}>
              <div>
                <div style={lbl}>Art</div>
                <select value={w.angriffsart||'Nahkampf'} onChange={e=>updW(i,{angriffsart:e.target.value})}
                  style={{...selStyle,background:"rgba(7,4,18,0.8)"}}>
                  <option value="Nahkampf">Nahkampf</option>
                  <option value="Fernkampf">Fernkampf</option>
                </select>
              </div>
              <div>
                <div style={lbl}>Attribut</div>
                <select value={attr} onChange={e=>updW(i,{attribut:e.target.value})}
                  style={{...selStyle,background:"rgba(7,4,18,0.8)"}}>
                  {WAFFE_ATTRS.map(a=><option key={a} value={a}>{WAFFE_ATTR_ABBR[a]}</option>)}
                </select>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={lbl}>Üb</div>
                <button onClick={()=>updW(i,{uebung:!w.uebung})} title={w.uebung?"Übung":"Keine"}
                  style={{background:"transparent",border:"none",cursor:"pointer",padding:0,lineHeight:1,
                    color:w.uebung?"rgba(124,77,255,0.78)":"rgba(124,77,255,0.28)",fontSize:12}}>
                  {w.uebung?'◆':'○'}
                </button>
              </div>
              <div>
                <div style={lbl}>Reichweite</div>
                <input value={w.reichweite||''} onChange={e=>updW(i,{reichweite:e.target.value})} style={iStyle} />
              </div>
              <div>
                <div style={lbl}>Bonus</div>
                <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"rgba(124,77,255,0.8)",fontWeight:600,display:"block",padding:"1px 3px"}}>{fmtMod(bonus)}</span>
              </div>
            </div>
            {/* Zeile 3: Schaden / Typ / Notiz */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1.5fr",gap:"0 6px",alignItems:"end"}}>
              <div>
                <div style={lbl}>Schaden</div>
                <input value={w.schaden||''} onChange={e=>updW(i,{schaden:e.target.value})} placeholder="1W8" style={iStyle} />
              </div>
              <div>
                <div style={lbl}>Schadenstyp</div>
                <input value={w.schadenstyp||''} onChange={e=>updW(i,{schadenstyp:e.target.value})} placeholder="Hieb" style={iStyle} />
              </div>
              <div>
                <div style={lbl}>Notiz</div>
                <input value={w.notiz||''} onChange={e=>updW(i,{notiz:e.target.value})} placeholder="optional" style={iStyle} />
              </div>
            </div>
          </div>
        );
      })}
    </Card>
  );
}

/* ── Übungen & Sprachen ───────────────────── */
/* ── Übungen-Konstanten ───────────────────── */
const RUESTUNGS_OPT  = ['Leichte Rüstung','Mittelschwere Rüstung','Schwere Rüstung','Schilde'];
const WAFFEN_OPT     = ['Einfache Waffen','Kriegswaffen'];
const FAHRZEUGE_OPT  = ['Landfahrzeuge','Wasserfahrzeuge'];
const SPRACHEN_LISTE = [
  'Gemeinsprache','Zwergisch','Elfisch','Riesisch','Gnomisch','Goblinisch','Halblingisch','Orkisch',
  'Abyssisch','Celestisch','Drakonisch','Tiefensprache','Infernalisch','Sylvanisch',
  'Gemeinsprache der Unterreiche','Urtümlich',
];

function getWerkzeugListe() {
  const d = window.AUSRUESTUNG_DATA || {};
  return [
    {grp:'Werkzeuge',      items:(d.WERKZEUGE_ITEMS     ||[]).map(i=>i.name)},
    {grp:'Handwerkszeuge', items:(d.HANDWERKSZEUGE_ITEMS||[]).map(i=>i.name)},
    {grp:'Musikinstrumente',items:(d.MUSIKINSTRUMENTE_ITEMS||[]).map(i=>i.name)},
    {grp:'Spiele',         items:(d.SPIELE_ITEMS        ||[]).map(i=>i.name)},
  ];
}

function normArr(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return val.split(',').map(s=>s.trim()).filter(Boolean);
}

/* Gemeinsame Pill-Anzeige */
function UebPills({ items }) {
  if (!items.length) return <span style={{fontFamily:"var(--font-mono)",fontSize:8,color:"rgba(124,77,255,0.28)"}}>—</span>;
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:3}}>
      {items.map(v=>(
        <span key={v} style={{fontFamily:"var(--font-mono)",fontSize:7.5,padding:"2px 7px",
          background:"rgba(124,77,255,0.12)",border:"1px solid rgba(124,77,255,0.25)",borderRadius:2,
          color:"rgba(200,190,240,0.75)",letterSpacing:".06em"}}>{v}</span>
      ))}
    </div>
  );
}

const uebLbl = {fontFamily:"var(--font-mono)",fontSize:7,letterSpacing:".12em",color:"rgba(124,77,255,0.4)",
  textTransform:"uppercase",marginBottom:4};
const uebSec = {paddingBottom:8,marginBottom:8,borderBottom:"1px solid rgba(124,77,255,0.07)"};

function UebungenCard({ char }) {
  const u = char.uebungen || {};
  const rüst = normArr(u.ruestungen), waf = normArr(u.waffen);
  const fahr = normArr(u.fahrzeuge), spr = normArr(u.sprachen), werk = normArr(u.werkzeuge);
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Übungen & Sprachen" />
      <div style={uebSec}><div style={uebLbl}>Rüstungen</div><UebPills items={rüst}/></div>
      <div style={uebSec}><div style={uebLbl}>Waffen</div><UebPills items={waf}/></div>
      <div style={uebSec}><div style={uebLbl}>Fahrzeuge</div><UebPills items={fahr}/></div>
      <div style={uebSec}><div style={uebLbl}>Sprachen</div><UebPills items={spr}/></div>
      <div style={{paddingBottom:4}}><div style={uebLbl}>Werkzeuge</div><UebPills items={werk}/></div>
    </Card>
  );
}

function EditableUebungenCard({ char, upd }) {
  const u = char.uebungen || {};
  function updU(key,val) { upd({uebungen:{...u,[key]:val}}); }

  const rüst = normArr(u.ruestungen), waf = normArr(u.waffen);
  const fahr = normArr(u.fahrzeuge), spr = normArr(u.sprachen), werk = normArr(u.werkzeuge);

  const selStyle = {fontFamily:"var(--font-mono)",fontSize:9,color:"rgba(200,190,240,0.8)",width:"100%",
    background:"rgba(7,4,18,0.9)",border:"1px solid rgba(124,77,255,0.25)",borderRadius:2,
    padding:"4px 6px",cursor:"pointer",outline:"none",marginTop:3};

  function ToggleRow({label, arr, opts, field}) {
    return (
      <div style={uebSec}>
        <div style={uebLbl}>{label}</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
          {opts.map(opt=>{
            const on = arr.includes(opt);
            return (
              <button key={opt} onClick={()=>updU(field,on?arr.filter(x=>x!==opt):[...arr,opt])}
                style={{fontFamily:"var(--font-mono)",fontSize:7.5,padding:"2px 8px",borderRadius:2,
                  cursor:"pointer",letterSpacing:".06em",transition:"all .12s",
                  background:on?"rgba(124,77,255,0.22)":"rgba(124,77,255,0.06)",
                  border:`1px solid rgba(124,77,255,${on?0.55:0.18})`,
                  color:on?"rgba(200,190,240,0.92)":"rgba(160,140,255,0.45)"}}>
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function PillDropRow({label, arr, options, optgroups, field}) {
    const used = new Set(arr);
    return (
      <div style={uebSec}>
        <div style={uebLbl}>{label}</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:3,marginBottom:arr.length?5:0}}>
          {arr.map(v=>(
            <span key={v} style={{display:"inline-flex",alignItems:"center",gap:3,fontFamily:"var(--font-mono)",
              fontSize:7.5,padding:"2px 5px 2px 7px",background:"rgba(124,77,255,0.15)",
              border:"1px solid rgba(124,77,255,0.3)",borderRadius:2,color:"rgba(200,190,240,0.82)"}}>
              {v}
              <button onClick={()=>updU(field,arr.filter(x=>x!==v))}
                style={{background:"transparent",border:"none",cursor:"pointer",
                  color:"rgba(200,100,100,0.55)",fontSize:10,padding:0,lineHeight:1}}>×</button>
            </span>
          ))}
        </div>
        <select value="" onChange={e=>{if(e.target.value)updU(field,[...arr,e.target.value]);}}
          style={selStyle}>
          <option value="">+ hinzufügen…</option>
          {optgroups
            ? optgroups.map(g=>(
                <optgroup key={g.grp} label={g.grp}>
                  {g.items.filter(i=>!used.has(i)).map(i=><option key={i} value={i}>{i}</option>)}
                </optgroup>
              ))
            : (options||[]).filter(o=>!used.has(o)).map(o=><option key={o} value={o}>{o}</option>)
          }
        </select>
      </div>
    );
  }

  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Übungen & Sprachen" />
      <ToggleRow label="Rüstungen" arr={rüst} opts={RUESTUNGS_OPT} field="ruestungen" />
      <ToggleRow label="Waffen"    arr={waf}  opts={WAFFEN_OPT}    field="waffen" />
      <ToggleRow label="Fahrzeuge" arr={fahr} opts={FAHRZEUGE_OPT} field="fahrzeuge" />
      <PillDropRow label="Sprachen"  arr={spr}  options={SPRACHEN_LISTE}   field="sprachen" />
      <PillDropRow label="Werkzeuge" arr={werk} optgroups={getWerkzeugListe()} field="werkzeuge" />
    </Card>
  );
}

/* ── Lebensstil ───────────────────────────── */
const LEBENSSTILE = [
  {name:'Jämmerlich', kosten:'—',               desc:'Kein festes Dach. Leben unter unmenschlichen Bedingungen. Gewalt, Krankheit und Hunger sind ständige Begleiter.'},
  {name:'Ärmlich',    kosten:'10 Hade/Tag',      desc:'Undichte Hütte oder verseuchte Pension. Kaum rechtlicher Schutz, verzweifelte Umgebung.'},
  {name:'Schlecht',   kosten:'20 Hade/Tag',      desc:'Einfache Unterkunft in einer Absteige oder Gemeinschaftsraum. Ausreichend, aber unangenehm.'},
  {name:'Einfach',    kosten:'100 Hade/Tag',     desc:'Sauberes Zimmer in Pension oder Tempel. Kein Hunger, kein Durst. Kleidung in Ordnung.'},
  {name:'Komfortabel',kosten:'200 Hade/Tag',     desc:'Kleines Häuschen im bürgerlichen Viertel oder Privatzimmer im feinen Gasthaus.'},
  {name:'Wohlhabend', kosten:'400 Hade/Tag',     desc:'Geräumiges Haus in gutem Viertel, kleiner Mitarbeiterstab. Verbindungen zu Kaufleuten und Höflingen.'},
  {name:'Edel',       kosten:'mind. 1.000 Hade/Tag', desc:'Stadthaus oder Suite im besten Gasthaus. Verkehr mit den mächtigsten Persönlichkeiten der Gesellschaft.'},
];

function LebensstilCard({ char }) {
  const ls = LEBENSSTILE.find(l=>l.name===char.lebensstil);
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Lebensstil" />
      {ls ? (
        <>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:6}}>
            <span style={{fontFamily:"var(--font-display)",fontSize:11,letterSpacing:".18em",textTransform:"uppercase",color:"var(--white)"}}>{ls.name}</span>
            <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:"rgba(124,77,255,0.7)"}}>{ls.kosten}</span>
          </div>
          <p style={{fontFamily:"var(--font-body)",fontSize:11,fontWeight:300,color:"rgba(200,190,240,0.55)",lineHeight:1.6,margin:0}}>{ls.desc}</p>
        </>
      ) : (
        <span style={{fontFamily:"var(--font-mono)",fontSize:8,color:"rgba(124,77,255,0.28)"}}>—</span>
      )}
    </Card>
  );
}

function EditableLebensstilCard({ char, upd }) {
  const ls = LEBENSSTILE.find(l=>l.name===char.lebensstil);
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Lebensstil" />
      <select value={char.lebensstil||''} onChange={e=>upd({lebensstil:e.target.value})}
        style={{fontFamily:"var(--font-mono)",fontSize:9,color:"rgba(200,190,240,0.8)",width:"100%",
          background:"rgba(7,4,18,0.9)",border:"1px solid rgba(124,77,255,0.25)",borderRadius:2,
          padding:"4px 6px",cursor:"pointer",outline:"none",marginBottom:ls?8:0}}>
        <option value="">— wählen —</option>
        {LEBENSSTILE.map(l=>(
          <option key={l.name} value={l.name}>{l.name} — {l.kosten}</option>
        ))}
      </select>
      {ls && <p style={{fontFamily:"var(--font-body)",fontSize:10.5,fontWeight:300,
        color:"rgba(200,190,240,0.45)",lineHeight:1.55,margin:0}}>{ls.desc}</p>}
    </Card>
  );
}

/* ── Inventar ─────────────────────────────── */
function getAusruestungListe() {
  const d = window.AUSRUESTUNG_DATA || {};
  return [
    {grp:'Abenteuerausrüstung', items: d.ABENTEUER_ITEMS          || []},
    {grp:'Waffen (Einfach Nah)',items: d.EINFACHE_NAHKAMPF        || []},
    {grp:'Waffen (Einfach Fern)',items:d.EINFACHE_FERNKAMPF       || []},
    {grp:'Kriegswaffen (Nah)',  items: d.KRIEGS_NAHKAMPF          || []},
    {grp:'Kriegswaffen (Fern)', items: d.KRIEGS_FERNKAMPF         || []},
    {grp:'Leichte Rüstung',     items: d.LEICHTE_RUESTUNG         || []},
    {grp:'Mittelschwere Rüstung',items:d.MITTELSCHWERE_RUESTUNG   || []},
    {grp:'Schwere Rüstung',     items: d.SCHWERE_RUESTUNG         || []},
    {grp:'Schilde',             items: d.SCHILDE                  || []},
    {grp:'Kleidung',            items: d.KLEIDUNG                 || []},
    {grp:'Werkzeuge',           items: d.WERKZEUGE_ITEMS          || []},
    {grp:'Handwerkszeuge',      items: d.HANDWERKSZEUGE_ITEMS     || []},
    {grp:'Musikinstrumente',    items: d.MUSIKINSTRUMENTE_ITEMS   || []},
    {grp:'Spiele',              items: d.SPIELE_ITEMS             || []},
  ].filter(g => g.items.length > 0);
}

function InventarModal({ char, upd, onClose }) {
  const inv = char.inventar || [];
  const str = char.stats?.str ?? 10;
  const groesse = getRasseGroesse(char.race);
  const mult = getGroesseMult(groesse);
  const belastet     = Math.round(str * 5  * mult);
  const sehrBelastet = Math.round(str * 10 * mult);
  const ueberlastet  = Math.round(str * 15 * mult);
  const totalPfund   = inv.reduce((s,i)=>s+(parseFloat(i.pfund)||0),0);

  let status = 'Unbelastet', statusC = 'rgba(80,200,140,0.85)';
  if (totalPfund > ueberlastet)  { status='Überlastet';   statusC='rgba(220,80,80,0.9)'; }
  else if (totalPfund > sehrBelastet) { status='Sehr belastet'; statusC='rgba(220,160,60,0.9)'; }
  else if (totalPfund > belastet)     { status='Belastet';      statusC='rgba(220,160,60,0.75)'; }

  function addItem()    { upd({inventar:[...inv,{name:'',pfund:''}]}); }
  function delItem(i)   { upd({inventar:inv.filter((_,j)=>j!==i)}); }
  function updItem(i,p) { upd({inventar:inv.map((it,j)=>j===i?{...it,...p}:it)}); }

  const iStyle = {fontFamily:"var(--font-body)",fontSize:11,color:"var(--white)",background:"transparent",
    border:"none",borderBottom:"1px solid rgba(124,77,255,0.2)",outline:"none",padding:"2px 4px",minWidth:0};

  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:99990,background:"rgba(5,4,15,0.88)",
      backdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div onClick={e=>e.stopPropagation()} style={{background:"rgba(8,6,22,0.98)",border:"1px solid rgba(124,77,255,0.35)",
        borderRadius:8,width:"min(480px,92vw)",maxHeight:"80vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
        {/* Header */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",
          padding:"12px 16px",borderBottom:"1px solid rgba(124,77,255,0.15)"}}>
          <span style={{fontFamily:"var(--font-display)",fontSize:12,letterSpacing:".22em",textTransform:"uppercase",color:"var(--white)"}}>Inventar</span>
          <button onClick={onClose} style={{fontFamily:"var(--font-mono)",fontSize:14,color:"rgba(160,140,255,0.6)",
            background:"transparent",border:"none",cursor:"pointer",padding:"0 4px",lineHeight:1}}>×</button>
        </div>
        {/* Listenbereich */}
        <div style={{flex:1,overflowY:"auto",padding:"10px 16px"}}>
          {/* Spalten-Header */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 70px 20px",gap:"0 8px",marginBottom:4}}>
            {['Gegenstand','Pfund',''].map((h,i)=>(
              <span key={i} style={{fontFamily:"var(--font-mono)",fontSize:6.5,letterSpacing:".12em",
                color:"rgba(124,77,255,0.35)",textTransform:"uppercase"}}>{h}</span>
            ))}
          </div>
          {inv.length===0 && <div style={{fontFamily:"var(--font-mono)",fontSize:8,color:"rgba(124,77,255,0.28)",
            letterSpacing:".1em",padding:"8px 0"}}>Noch keine Gegenstände.</div>}
          {inv.map((item,i)=>(
            <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 70px 20px",gap:"0 8px",
              alignItems:"center",padding:"3px 0",borderBottom:"1px solid rgba(124,77,255,0.06)"}}>
              <input value={item.name||''} onChange={e=>updItem(i,{name:e.target.value})}
                placeholder="Name" style={{...iStyle,width:"100%"}} />
              <input value={item.pfund||''} onChange={e=>updItem(i,{pfund:e.target.value})}
                placeholder="0" inputMode="decimal" style={{...iStyle,width:"100%",textAlign:"right",
                fontFamily:"var(--font-mono)",fontSize:10}} />
              <button onClick={()=>delItem(i)} style={{color:"rgba(200,80,80,0.5)",background:"transparent",
                border:"none",cursor:"pointer",fontSize:11,padding:0,lineHeight:1,textAlign:"center"}}>×</button>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div style={{borderTop:"1px solid rgba(124,77,255,0.15)",padding:"10px 16px"}}>
          <div style={{display:"flex",gap:6,marginBottom:10,alignItems:"center"}}>
            <select defaultValue="" onChange={e=>{
              if (!e.target.value) return;
              const [gi,ii] = e.target.value.split(':').map(Number);
              const item = getAusruestungListe()[gi]?.items[ii];
              if (item) upd({inventar:[...inv,{name:item.name, pfund:item.pfund==='—'?'':item.pfund}]});
              e.target.value = '';
            }} style={{fontFamily:"var(--font-mono)",fontSize:8,color:"rgba(124,77,255,0.65)",flex:1,
              background:"rgba(7,4,18,0.9)",border:"1px solid rgba(124,77,255,0.25)",borderRadius:2,
              padding:"3px 6px",cursor:"pointer",outline:"none"}}>
              <option value="">Aus Ausrüstung wählen…</option>
              {getAusruestungListe().map((g,gi)=>(
                <optgroup key={gi} label={g.grp}>
                  {g.items.map((item,ii)=>(
                    <option key={ii} value={`${gi}:${ii}`}>
                      {item.name}{item.pfund && item.pfund!=='—' ? ` (${item.pfund} Pfd.)` : ''}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <button onClick={addItem} style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".1em",
              color:"rgba(124,77,255,0.7)",background:"rgba(124,77,255,0.08)",border:"1px solid rgba(124,77,255,0.28)",
              borderRadius:2,padding:"3px 10px",cursor:"pointer",flexShrink:0}}>+ Eigener</button>
          </div>
          {/* Gewicht & Traglast */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:8,color:"rgba(124,77,255,0.45)",letterSpacing:".1em",textTransform:"uppercase"}}>Getragen</span>
            <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:statusC,fontWeight:600}}>
              {totalPfund.toFixed(1)} Pfund</span>
          </div>
          <div style={{height:4,background:"rgba(124,77,255,0.1)",borderRadius:2,marginBottom:6,overflow:"hidden"}}>
            <div style={{height:"100%",borderRadius:2,background:statusC,
              width:`${Math.min(100,(totalPfund/ueberlastet)*100).toFixed(1)}%`,transition:"width .3s"}} />
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4}}>
            {[['Belastet',belastet],['Sehr belastet',sehrBelastet],['Überlastet',ueberlastet]].map(([l,v])=>(
              <div key={l} style={{textAlign:"center"}}>
                <div style={{fontFamily:"var(--font-mono)",fontSize:9,color:"rgba(200,190,240,0.6)"}}>{v}</div>
                <div style={{fontFamily:"var(--font-mono)",fontSize:6,letterSpacing:".1em",color:"rgba(124,77,255,0.35)",textTransform:"uppercase"}}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:6,fontFamily:"var(--font-mono)",fontSize:7.5,color:statusC,letterSpacing:".12em"}}>{status}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function InventarCard({ char, upd, editing }) {
  const [open, setOpen] = useSteckbrief(false);
  const inv = char.inventar || [];
  const totalPfund = inv.reduce((s,i)=>s+(parseFloat(i.pfund)||0),0);
  const str = char.stats?.str ?? 10;
  const mult = getGroesseMult(getRasseGroesse(char.race));
  const ueberlastet  = Math.round(str * 15 * mult);
  const sehrBelastet = Math.round(str * 10 * mult);
  const belastet     = Math.round(str * 5  * mult);
  let statusC = 'rgba(124,77,255,0.5)';
  if (totalPfund > ueberlastet)       statusC = 'rgba(220,80,80,0.9)';
  else if (totalPfund > sehrBelastet) statusC = 'rgba(220,160,60,0.9)';
  else if (totalPfund > belastet)     statusC = 'rgba(220,160,60,0.75)';
  return (
    <Card style={{marginBottom:11}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:inv.length?8:0}}>
        <SecTitle label="Inventar" style={{marginBottom:0}} />
        <button onClick={()=>setOpen(true)}
          style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".1em",textTransform:"uppercase",
            color:"rgba(124,77,255,0.7)",background:"rgba(124,77,255,0.08)",
            border:"1px solid rgba(124,77,255,0.28)",borderRadius:2,padding:"3px 10px",cursor:"pointer"}}>
          {inv.length ? `${inv.length} Items` : 'Öffnen'}
        </button>
      </div>
      {inv.length > 0 && (
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{flex:1,height:3,background:"rgba(124,77,255,0.1)",borderRadius:2,overflow:"hidden"}}>
            <div style={{height:"100%",background:statusC,borderRadius:2,
              width:`${Math.min(100,(totalPfund/ueberlastet)*100).toFixed(1)}%`}} />
          </div>
          <span style={{fontFamily:"var(--font-mono)",fontSize:8.5,color:statusC,flexShrink:0}}>
            {totalPfund.toFixed(1)} / {ueberlastet} Pfd.</span>
        </div>
      )}
      {open && <InventarModal char={char} upd={upd} onClose={()=>setOpen(false)} />}
    </Card>
  );
}

/* ── HabeCard ─────────────────────────────── */
function HabeCard({ char, upd, editing }) {
  const habe = char.habe ?? 0;
  const goldC = 'rgba(210,175,60,0.85)';
  const goldDim = 'rgba(210,175,60,0.45)';
  return (
    <Card>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
        <div style={{display:"flex",alignItems:"center",gap:7}}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke={goldDim} strokeWidth="1.2"/>
            <circle cx="7" cy="7" r="4" stroke={goldC} strokeWidth="0.8" opacity="0.6"/>
            <text x="7" y="10.5" textAnchor="middle" fontFamily="serif" fontSize="7" fill={goldC} opacity="0.9">H</text>
          </svg>
          <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".2em",color:"rgba(124,77,255,0.4)",textTransform:"uppercase"}}>Habe</span>
        </div>
        {editing
          ? <div style={{display:"flex",alignItems:"center",gap:5}}>
              <input
                type="number" min="0" value={habe}
                onChange={e => upd({habe: Math.max(0, parseInt(e.target.value) || 0)})}
                style={{fontFamily:"var(--font-mono)",fontSize:16,color:goldC,
                  background:"transparent",border:"none",borderBottom:`1px solid ${goldDim}`,
                  outline:"none",width:80,textAlign:"right",padding:"1px 4px"}}
              />
              <span style={{fontFamily:"var(--font-mono)",fontSize:8,color:goldDim,letterSpacing:".1em"}}>Hade</span>
            </div>
          : <div style={{display:"flex",alignItems:"baseline",gap:5}}>
              <span style={{fontFamily:"var(--font-mono)",fontSize:18,color:goldC,lineHeight:1}}>{habe.toLocaleString("de-DE")}</span>
              <span style={{fontFamily:"var(--font-mono)",fontSize:8,color:goldDim,letterSpacing:".1em"}}>Hade</span>
            </div>
        }
      </div>
    </Card>
  );
}

/* ── Attribute ────────────────────────────── */
const ATTR_DEFS = [
  {key:"str",label:"STÄRKE"},{key:"dex",label:"GESCHICK."},{key:"con",label:"KONST."},
  {key:"int",label:"INT."},{key:"wis",label:"WEISHEIT"},{key:"cha",label:"CHARISMA"},
];

function AttrBlock({ def, char, hi, lo }) {
  const score = char.stats[def.key];
  const m = mod(score);
  const borderC = hi ? "rgba(80,200,140,0.55)" : lo ? "rgba(220,80,80,0.45)" : "rgba(124,77,255,0.2)";
  const scoreC  = hi ? "rgba(80,200,140,0.95)" : lo ? "rgba(220,100,100,0.9)" : "var(--white)";
  const modC    = hi ? "rgba(80,200,140,0.85)" : lo ? "rgba(220,100,100,0.75)" : "rgba(124,77,255,0.65)";
  return (
    <div style={{ display:"flex",flexDirection:"column",alignItems:"center",flex:1,
        background:"rgba(7,4,18,0.97)", border:`1px solid ${borderC}`, borderRadius:3,
        padding:"9px 4px 8px", cursor:"default" }}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:7,letterSpacing:".16em",color:"rgba(124,77,255,0.4)",textTransform:"uppercase",marginBottom:5,textAlign:"center"}}>{def.label}</span>
      <span style={{fontFamily:"var(--font-mono)",fontSize:22,color:scoreC,lineHeight:1}}>{score}</span>
      <div style={{width:"65%",height:1,background:"rgba(124,77,255,0.15)",margin:"5px 0"}} />
      <span style={{fontFamily:"var(--font-mono)",fontSize:14,color:modC}}>{fmtMod(m)}</span>
    </div>
  );
}

function AttributeGrid({ char }) {
  const vals = ATTR_DEFS.map(d => char.stats[d.key]);
  const max = Math.max(...vals), min = Math.min(...vals);
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Attribute" />
      <div style={{display:"flex",gap:6}}>
        {ATTR_DEFS.map(d => <AttrBlock key={d.key} def={d} char={char} hi={char.stats[d.key]===max} lo={char.stats[d.key]===min} />)}
      </div>
    </Card>
  );
}

/* ── Stärken (geübte Skills als Pills) ─────── */
function mergeSkills(char) {
  return SKILLS_DEFAULT.map(def => {
    const found = (char.skills || []).find(s => s.name === def.name);
    return found ? { ...def, prof: found.prof } : { ...def };
  });
}

function calcPassiveWahrnehmung(char) {
  const pb = calcProfBonus(char.level||1);
  const wis = mod(char.stats?.wis??10);
  const wahr = mergeSkills(char).find(s=>s.name==='Wahrnehmung');
  return 10 + wis + (wahr ? skillBonus(wahr, char.stats, pb) : 0);
}

/* ── Editierbare Fertigkeiten ────────────────── */
function EditableSkillPills({ char, upd }) {
  const skills = mergeSkills(char);
  function cycle(skillName) {
    const updated = skills.map(s => s.name === skillName ? { ...s, prof: (s.prof + 1) % 3 } : s);
    upd({ skills: updated });
  }
  const icon  = ['○', '◆', '◈'];
  const iclr  = ['rgba(124,77,255,0.3)', 'rgba(124,77,255,0.75)', 'rgba(140,210,255,0.85)'];
  const bclr  = ['rgba(200,190,240,0.5)', 'rgba(124,77,255,0.85)', 'rgba(140,210,255,0.85)'];
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Fertigkeiten" />
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px 10px"}}>
        {skills.map(s => {
          const bonus = skillBonus(s, char.stats, char.profBonus);
          return (
            <div key={s.name} style={{display:"flex",alignItems:"center",gap:6,padding:"3px 0",borderBottom:"1px solid rgba(124,77,255,0.06)"}}>
              <button onClick={() => cycle(s.name)} title={["Keine","Übung","Expertise"][s.prof]}
                style={{background:"transparent",border:"none",cursor:"pointer",color:iclr[s.prof],
                  fontSize:12,padding:0,lineHeight:1,flexShrink:0,width:16,transition:"color .12s"}}>
                {icon[s.prof]}
              </button>
              <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".07em",
                color:"rgba(200,190,240,0.82)",flex:1,textTransform:"uppercase",transition:"color .12s",
                overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.name}</span>
              <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:bclr[s.prof],fontWeight:600,flexShrink:0}}>{fmtMod(bonus)}</span>
            </div>
          );
        })}
      </div>
      <div style={{fontFamily:"var(--font-mono)",fontSize:7,color:"rgba(124,77,255,0.28)",marginTop:8,letterSpacing:".1em"}}>
        ○ Keine · ◆ Übung (+{char.profBonus}) · ◈ Expertise (+{char.profBonus * 2})
      </div>
    </Card>
  );
}

function SkillPills({ char }) {
  const skills = mergeSkills(char);
  const icon  = ['○', '◆', '◈'];
  const iclr  = ['rgba(124,77,255,0.3)', 'rgba(124,77,255,0.75)', 'rgba(140,210,255,0.85)'];
  const bclr  = ['rgba(200,190,240,0.5)', 'rgba(124,77,255,0.85)', 'rgba(140,210,255,0.85)'];
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Fertigkeiten" />
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px 10px"}}>
        {skills.map(s => {
          const bonus = skillBonus(s, char.stats, char.profBonus);
          return (
            <div key={s.name} style={{display:"flex",alignItems:"center",gap:6,padding:"3px 0",borderBottom:"1px solid rgba(124,77,255,0.06)"}}>
              <span style={{color:iclr[s.prof],fontSize:12,lineHeight:1,flexShrink:0,width:16}}>{icon[s.prof]}</span>
              <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".07em",
                color:"rgba(200,190,240,0.82)",flex:1,textTransform:"uppercase",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.name}</span>
              <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:bclr[s.prof],fontWeight:600,flexShrink:0}}>{fmtMod(bonus)}</span>
            </div>
          );
        })}
      </div>
      <div style={{fontFamily:"var(--font-mono)",fontSize:7,color:"rgba(124,77,255,0.28)",marginTop:8,letterSpacing:".1em"}}>
        ○ Keine · ◆ Übung (+{char.profBonus}) · ◈ Expertise (+{char.profBonus * 2})
      </div>
    </Card>
  );
}

/* ── Rettungswürfe ────────────────────────── */
function mergeSaves(char) {
  return SAVES_DEFAULT.map(def => {
    const found = (char.saves || []).find(s => s.key === def.key);
    return found ? { ...def, prof: found.prof } : { ...def };
  });
}

function EditableSavingThrows({ char, upd }) {
  const saves = mergeSaves(char);
  function toggle(key) {
    const updated = saves.map(s => s.key === key ? { ...s, prof: s.prof ? 0 : 1 } : s);
    upd({ saves: updated });
  }
  const iclr = ['rgba(124,77,255,0.3)', 'rgba(124,77,255,0.75)'];
  const bclr = ['rgba(200,190,240,0.5)', 'rgba(124,77,255,0.85)'];
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Rettungswürfe" />
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px 10px"}}>
        {saves.map(s => {
          const bonus = mod(char.stats[s.key]) + (s.prof ? char.profBonus : 0);
          return (
            <div key={s.key} style={{display:"flex",alignItems:"center",gap:6,padding:"3px 0",borderBottom:"1px solid rgba(124,77,255,0.06)"}}>
              <button onClick={() => toggle(s.key)} title={s.prof ? "Übung" : "Keine"}
                style={{background:"transparent",border:"none",cursor:"pointer",color:iclr[s.prof],
                  fontSize:12,padding:0,lineHeight:1,flexShrink:0,width:16,transition:"color .12s"}}>
                {s.prof ? '◆' : '○'}
              </button>
              <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".07em",
                color:"rgba(200,190,240,0.82)",flex:1,textTransform:"uppercase",
                overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.label}</span>
              <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:bclr[s.prof],fontWeight:600,flexShrink:0}}>{fmtMod(bonus)}</span>
            </div>
          );
        })}
      </div>
      <div style={{fontFamily:"var(--font-mono)",fontSize:7,color:"rgba(124,77,255,0.28)",marginTop:8,letterSpacing:".1em"}}>
        ○ Keine · ◆ Übung (+{char.profBonus})
      </div>
    </Card>
  );
}

function SavingThrows({ char }) {
  const saves = mergeSaves(char);
  const iclr = ['rgba(124,77,255,0.3)', 'rgba(124,77,255,0.75)'];
  const bclr = ['rgba(200,190,240,0.5)', 'rgba(124,77,255,0.85)'];
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Rettungswürfe" />
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px 10px"}}>
        {saves.map(s => {
          const bonus = mod(char.stats[s.key]) + (s.prof ? char.profBonus : 0);
          return (
            <div key={s.key} style={{display:"flex",alignItems:"center",gap:6,padding:"3px 0",borderBottom:"1px solid rgba(124,77,255,0.06)"}}>
              <span style={{color:iclr[s.prof],fontSize:12,lineHeight:1,flexShrink:0,width:16}}>{s.prof ? '◆' : '○'}</span>
              <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".07em",
                color:"rgba(200,190,240,0.82)",flex:1,textTransform:"uppercase",
                overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.label}</span>
              <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:bclr[s.prof],fontWeight:600,flexShrink:0}}>{fmtMod(bonus)}</span>
            </div>
          );
        })}
      </div>
      <div style={{fontFamily:"var(--font-mono)",fontSize:7,color:"rgba(124,77,255,0.28)",marginTop:8,letterSpacing:".1em"}}>
        ○ Keine · ◆ Übung (+{char.profBonus})
      </div>
    </Card>
  );
}

/* ── Persönlichkeit ───────────────────────── */
function PersonalitySection({ char }) {
  const items=[{l:"Merkmale",t:char.personality,acc:true},{l:"Ideale",t:char.ideals},
    {l:"Bindungen",t:char.bonds},{l:"Makel",t:char.flaws}];
  return (
    <Card>
      <SecTitle label="Persönlichkeit" />
      {items.map(({l,t,acc})=>(
        <div key={l} style={{marginBottom:10}}>
          <div style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".22em",color:`rgba(124,77,255,${acc?0.65:0.38})`,textTransform:"uppercase",marginBottom:4}}>{l}</div>
          <p style={{fontFamily:"var(--font-body)",fontSize:11.5,fontWeight:300,color:"var(--silver)",lineHeight:1.72,fontStyle:"italic"}}>„{t}"</p>
        </div>
      ))}
    </Card>
  );
}

/* ── Quest-Karte ──────────────────────────── */
function QuestCard({ quest }) {
  return (
    <div style={{background:"var(--card-bg)",border:"1px solid rgba(124,77,255,0.18)",borderRadius:4,padding:"14px 16px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,marginBottom:6}}>
        <span style={{fontFamily:"var(--font-display)",fontSize:11,letterSpacing:".14em",color:"rgba(210,202,245,0.92)",textTransform:"uppercase",flex:1}}>{quest.title}</span>
      </div>
      <div style={{fontFamily:"var(--font-mono)",fontSize:7.5,color:"rgba(124,77,255,0.4)",letterSpacing:".1em",marginBottom:6}}>{quest.year}</div>
      <p style={{fontFamily:"var(--font-body)",fontSize:11.5,fontWeight:300,color:"var(--silver)",lineHeight:1.65}}>{quest.short}</p>
    </div>
  );
}

/* ── Begleiter-Karte ──────────────────────── */
function CompanionCard({ comp }) {
  return (
    <div style={{display:"flex",gap:12,background:"var(--card-bg)",border:"1px solid rgba(124,77,255,0.2)",borderRadius:4,padding:"13px 14px"}}>
      <div style={{width:88,flexShrink:0}}>
        <ImageSlot slotId={comp.id} label={comp.name} height={88} hue={comp.hue||270} portrait />
      </div>
      <div style={{flex:1}}>
        <div style={{fontFamily:"var(--font-display)",fontSize:12,letterSpacing:".16em",color:"var(--white)",textTransform:"uppercase",marginBottom:4}}>{comp.name}</div>
        <div style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".1em",color:"rgba(124,77,255,0.5)",marginBottom:8}}>{comp.type}</div>
        <p style={{fontFamily:"var(--font-body)",fontSize:11.5,fontWeight:300,color:"var(--silver)",lineHeight:1.65,fontStyle:"italic"}}>„{comp.desc}"</p>
      </div>
    </div>
  );
}

/* ── Kontakte-Tablet ─────────────────────── */
const RELATION_COL = {
  "Verbündete":  ["rgba(80,200,140,0.78)","rgba(80,200,140,0.1)"],
  "Vorgesetzter":["rgba(124,77,255,0.82)","rgba(124,77,255,0.12)"],
  "Neutral":     ["rgba(170,162,210,0.65)","rgba(170,162,210,0.08)"],
  "Unbekannt":   ["rgba(200,145,45,0.82)","rgba(200,145,45,0.1)"],
  "Feind":       ["rgba(220,65,65,0.82)","rgba(220,65,65,0.1)"],
};

function KontakteTablet({ char }) {
  const [sel, setSel] = useSteckbrief(() => (char.contacts && char.contacts[0]) || null);
  if (!char.contacts || !char.contacts.length) return null;
  return (
    <div style={{ background:"rgba(5,3,15,0.99)", border:"1px solid rgba(124,77,255,0.38)", borderRadius:8,
      overflow:"hidden", boxShadow:"0 24px 64px rgba(0,0,0,0.75), inset 0 1px 0 rgba(124,77,255,0.12)" }}>

      {/* ── header bar ── */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"10px 16px", background:"rgba(10,6,26,0.98)", borderBottom:"1px solid rgba(124,77,255,0.18)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:"rgba(124,77,255,0.7)", animation:"pulseGlow 2.5s ease-in-out infinite" }} />
          <span style={{ fontFamily:"var(--font-mono)", fontSize:8.5, letterSpacing:".25em", color:"rgba(124,77,255,0.62)", textTransform:"uppercase" }}>Kontakt-Datenbank</span>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <span style={{ fontFamily:"var(--font-mono)", fontSize:7.5, color:"rgba(124,77,255,0.3)", letterSpacing:".1em" }}>{char.name}</span>
          <button style={{ width:16, height:16, fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(160,140,255,0.7)", background:"rgba(124,77,255,0.12)", border:"1px solid rgba(124,77,255,0.4)", borderRadius:2, cursor:"pointer", padding:0, lineHeight:1, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}
            onMouseEnter={e=>{e.currentTarget.style.color="#f0eeff";e.currentTarget.style.background="rgba(124,77,255,0.28)";e.currentTarget.style.borderColor="rgba(160,140,255,0.7)";}}
            onMouseLeave={e=>{e.currentTarget.style.color="rgba(160,140,255,0.7)";e.currentTarget.style.background="rgba(124,77,255,0.12)";e.currentTarget.style.borderColor="rgba(124,77,255,0.4)";}}>
            ✕
          </button>
        </div>
      </div>

      {/* ── two-panel body ── */}
      <div style={{ display:"flex", height:380 }}>

        {/* LEFT — list */}
        <div style={{ width:236, flexShrink:0, borderRight:"1px solid rgba(124,77,255,0.14)", overflowY:"auto" }}>
          {char.contacts.map(ct => {
            const active = sel && sel.id === ct.id;
            const [rc] = RELATION_COL[ct.relation] || RELATION_COL["Neutral"];
            return (
              <div key={ct.id} onClick={()=>setSel(ct)} style={{ display:"flex", alignItems:"center", gap:10,
                padding:"10px 14px", cursor:"pointer", transition:"all .18s ease",
                background: active ? "rgba(124,77,255,0.1)" : "transparent",
                borderLeft: active ? "2.5px solid rgba(124,77,255,0.65)" : "2.5px solid transparent",
                borderBottom:"1px solid rgba(124,77,255,0.07)" }}>
                <div style={{ width:36, height:36, flexShrink:0, borderRadius:3, overflow:"hidden" }}>
                  <ImageSlot slotId={ct.id+"-av"} label="" height={36} hue={ct.hue||270} portrait />
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontFamily:"var(--font-body)", fontSize:11.5, fontWeight:active?400:300,
                    color:active?"var(--white)":"var(--silver)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{ct.name}</div>
                  <div style={{ fontFamily:"var(--font-mono)", fontSize:7.5, color:"rgba(124,77,255,0.42)", marginTop:2,
                    overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{ct.role}</div>
                </div>
                <span style={{ fontFamily:"var(--font-mono)", fontSize:6.5, padding:"1px 5px",
                  background:(RELATION_COL[ct.relation]||RELATION_COL["Neutral"])[1],
                  border:`1px solid ${rc}`, borderRadius:2, color:rc, flexShrink:0, whiteSpace:"nowrap" }}>{ct.relation}</span>
              </div>
            );
          })}
        </div>

        {/* RIGHT — detail */}
        <div style={{ flex:1, padding:"18px 20px", overflowY:"auto" }}>
          {sel ? (
            <div key={sel.id} style={{ animation:"fadeInUp .22s ease" }}>
              <div style={{ display:"flex", gap:16, marginBottom:16 }}>
                <div style={{ flex:1 }}>
                  <h3 style={{ fontFamily:"var(--font-display)", fontSize:15, fontWeight:400, letterSpacing:".18em",
                    color:"var(--white)", textTransform:"uppercase", marginBottom:5 }}>{sel.name}</h3>
                  <div style={{ fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".1em", color:"rgba(124,77,255,0.5)", marginBottom:11 }}>{sel.role}</div>
                  <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
                    {[
                      [sel.relation, RELATION_COL[sel.relation]||RELATION_COL["Neutral"]],
                      [sel.race,     ["rgba(180,172,210,0.62)","rgba(180,172,210,0.08)"]],
                      [sel.status,   ["rgba(80,200,140,0.65)","rgba(80,200,140,0.09)"]],
                    ].map(([label,[tc,bg]],i)=>(
                      <span key={i} style={{ fontFamily:"var(--font-mono)", fontSize:7.5, padding:"2px 8px",
                        background:bg, border:`1px solid ${tc}`, borderRadius:2, color:tc, letterSpacing:".08em" }}>{label}</span>
                    ))}
                  </div>
                </div>
                <div style={{ width:118, flexShrink:0 }}>
                  <ImageSlot slotId={sel.id+"-portrait"} label={sel.name} height={138} hue={sel.hue||270} portrait />
                </div>
              </div>
              <div style={{ height:1, background:"rgba(124,77,255,0.1)", marginBottom:14 }} />
              <div style={{ fontFamily:"var(--font-mono)", fontSize:7.5, letterSpacing:".22em", color:"rgba(124,77,255,0.42)",
                textTransform:"uppercase", marginBottom:8 }}>Was ich über diese Person denke:</div>
              <p style={{ fontFamily:"var(--font-body)", fontSize:12.5, fontWeight:300, color:"var(--silver)", lineHeight:1.82, fontStyle:"italic" }}>
                „{sel.note}"</p>
            </div>
          ) : (
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100%",
              fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".2em", color:"rgba(124,77,255,0.22)", textTransform:"uppercase" }}>
              ← Kontakt auswählen
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Wissenswertes-Karte ─────────────────── */
function FbCard({ item, index, onChange }) {
  const [hov, setHov] = useSteckbrief(false);
  const num = String(index+1).padStart(2,"0");
  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ background:hov?"rgba(16,10,36,0.97)":"var(--card-bg)",
        border:`1px solid rgba(124,77,255,${hov?0.38:0.15})`,
        borderRadius:4, padding:"20px 18px 18px", position:"relative",
        overflow:"hidden", cursor:"default",
        transform:hov?"translateY(-2px)":"none",
        boxShadow:hov?"0 10px 32px rgba(0,0,0,0.5),0 0 16px rgba(124,77,255,0.07)":"none",
        transition:"all .25s ease" }}>
      <div style={{ position:"absolute", top:-14, left:10,
        fontFamily:"Georgia,serif", fontSize:96, lineHeight:1,
        color:"rgba(124,77,255,0.055)", pointerEvents:"none", userSelect:"none",
        transition:"color .25s", ...(hov&&{color:"rgba(124,77,255,0.09)"}) }}>„</div>
      <div style={{ position:"absolute", top:13, right:15,
        fontFamily:"var(--font-mono)", fontSize:8.5, letterSpacing:".08em",
        color:`rgba(124,77,255,${hov?0.4:0.2})`, transition:"color .25s" }}>{num}</div>
      <div style={{ fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".22em",
        color:`rgba(124,77,255,${hov?0.72:0.5})`, textTransform:"uppercase",
        marginBottom:10, paddingRight:28, transition:"color .25s",
        lineHeight:1.5 }}>{item.frage}</div>
      <div style={{ width:22, height:1, background:`rgba(124,77,255,${hov?0.45:0.22})`,
        marginBottom:12, transition:"background .25s" }} />
      {onChange
        ? <textarea value={item.antwort||''} onChange={e=>onChange({...item,antwort:e.target.value})}
            style={{fontFamily:"var(--font-body)",fontSize:12.5,fontWeight:300,lineHeight:1.78,
              fontStyle:"italic",color:"var(--silver)",width:"100%",background:"transparent",
              border:"none",borderBottom:"1px solid rgba(124,77,255,0.2)",outline:"none",
              resize:"vertical",padding:"2px 0",minHeight:60}} />
        : <p style={{ fontFamily:"var(--font-body)", fontSize:13, fontWeight:300,
            lineHeight:1.78, fontStyle:"italic",
            color:hov?"var(--white)":"var(--silver)",
            transition:"color .25s ease" }}>{item.antwort}</p>
      }
    </div>
  );
}

/* ── charFromEntry / saveCharToDB ───────────────────────────── */
function charFromEntry(entry) {
  const d = entry._char || entry.char_data || entry;
  if (d && d.hp !== undefined) return { ...d };
  return buildChar(d || entry);
}

let _sbSaveTimer = null;
function saveCharToDB(id, char) {
  clearTimeout(_sbSaveTimer);
  _sbSaveTimer = setTimeout(async () => {
    try {
      await window._sb.from('characters').update({
        name: char.name || 'Unbenannt',
        race: char.race || null,
        class: char.class || null,
        division: char.division || null,
        char_data: char,
      }).eq('id', id);
    } catch(e) { console.error('saveCharToDB failed:', e); }
  }, 500);
}

/* ── Divider ─────────────────────────────── */
function Divider({ label }) {
  return (
    <div style={{display:"flex",alignItems:"center",gap:14,margin:"4px 22px 18px"}}>
      <div style={{flex:1,height:1,background:"rgba(124,77,255,0.1)"}} />
      {label && <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".28em",color:"rgba(124,77,255,0.3)",textTransform:"uppercase"}}>{label}</span>}
      <div style={{flex:1,height:1,background:"rgba(124,77,255,0.1)"}} />
    </div>
  );
}

/* ── Meruria calendar data for birthday picker ── */
const MONTHS_MERURIA = [
  {name:"Janvar", days:19, sign:"Die Arche"},
  {name:"Fevorn", days:18, sign:"Die Böe"},
  {name:"Mareth", days:19, sign:"Die Wurzel"},
  {name:"Aprel",  days:19, sign:"Die Linse"},
  {name:"Mairen", days:18, sign:"Die Stille"},
  {name:"Junvar", days:19, sign:"Das Irrlicht"},
  {name:"Juval",  days:19, sign:"Die Klinge"},
  {name:"Auvar",  days:19, sign:"Die Glut"},
  {name:"Septhar",days:19, sign:"Die Brücke"},
  {name:"Oktar",  days:18, sign:"Der Schleier"},
  {name:"Novren", days:18, sign:"Das Labyrinth"},
  {name:"Derath", days:19, sign:"Der Spalt"},
];
const MONTH_START_MERURIA = MONTHS_MERURIA.reduce((acc, m, i) => {
  acc.push(i === 0 ? 1 : acc[i-1] + MONTHS_MERURIA[i-1].days); return acc;
}, []);
function doyToCalText(doy) {
  for (let i = MONTHS_MERURIA.length-1; i >= 0; i--) {
    if (doy >= MONTH_START_MERURIA[i])
      return `${doy - MONTH_START_MERURIA[i] + 1}. ${MONTHS_MERURIA[i].name}`;
  }
  return '—';
}

/* ── BirthdayPickerRow ───────────────────── */
function BirthdayPickerRow({ char, upd }) {
  const doy = char.geburtstag_doy || null;

  const initMonth = () => {
    if (!doy) return 0;
    for (let i = MONTHS_MERURIA.length-1; i >= 0; i--)
      if (doy >= MONTH_START_MERURIA[i]) return i;
    return 0;
  };
  const [open, setOpen] = useSteckbrief(false);
  const [picMonth, setPicMonth] = useSteckbrief(initMonth);
  const ref = useSteckRef(null);

  React.useEffect(() => {
    if (!open) return;
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  function openPicker() {
    setPicMonth(initMonth());
    setOpen(true);
  }

  function pickDay(monthIdx, day) {
    const newDoy = MONTH_START_MERURIA[monthIdx] + day - 1;
    upd({
      birthday: `${day}. ${MONTHS_MERURIA[monthIdx].name}`,
      geburtstag_doy: newDoy,
      zodiac: MONTHS_MERURIA[monthIdx].sign,
    });
    setOpen(false);
  }

  function clearDate() {
    upd({ birthday: '—', geburtstag_doy: null, zodiac: '—' });
    setOpen(false);
  }

  const displayText = doy ? doyToCalText(doy) : (char.birthday && char.birthday !== '—' ? char.birthday : null);
  const M = MONTHS_MERURIA[picMonth];
  const selectedDay = doy && MONTH_START_MERURIA[picMonth] <= doy && doy < MONTH_START_MERURIA[picMonth] + M.days
    ? doy - MONTH_START_MERURIA[picMonth] + 1 : null;

  const rowStyle = {display:"flex",alignItems:"center",gap:6,padding:"3px 0",
    borderBottom:"1px solid rgba(124,77,255,0.06)",position:"relative"};
  const labelStyle = {fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".12em",
    color:"rgba(124,77,255,0.4)",textTransform:"uppercase",flex:"0 0 80px"};
  const btnStyle = {fontFamily:"var(--font-body)",fontSize:11.5,fontWeight:300,
    color: displayText ? "var(--white)" : "rgba(200,190,240,0.3)",
    background:"transparent",border:"none",borderBottom:"1px solid rgba(124,77,255,0.25)",
    padding:"1px 4px",flex:1,outline:"none",minWidth:0,cursor:"pointer",textAlign:"left"};
  const dropStyle = {
    position:"absolute",top:"calc(100% + 4px)",left:0,zIndex:1200,
    background:"rgba(11,8,28,0.99)",border:"1px solid rgba(124,77,255,0.35)",
    borderRadius:4,boxShadow:"0 20px 52px rgba(0,0,0,0.75)",
    width:"min(340px,92vw)",overflow:"hidden",
  };
  const tabActive  = {fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".1em",padding:"3px 7px",
    background:"rgba(124,77,255,0.25)",border:"1px solid rgba(124,77,255,0.5)",borderRadius:2,
    color:"var(--white)",cursor:"pointer",fontWeight:600};
  const tabInactive = {...tabActive, background:"transparent",
    border:"1px solid rgba(124,77,255,0.12)",color:"rgba(200,190,240,0.45)",fontWeight:300};
  const dayActive   = {fontFamily:"var(--font-display)",fontSize:12,padding:"6px 2px",
    background:"rgba(124,77,255,0.4)",border:"1px solid rgba(124,77,255,0.7)",
    borderRadius:2,color:"var(--white)",cursor:"pointer",textAlign:"center"};
  const dayInactive = {...dayActive, background:"rgba(124,77,255,0.05)",
    border:"1px solid rgba(124,77,255,0.12)",color:"rgba(200,190,240,0.8)"};

  return (
    <div style={rowStyle} ref={ref}>
      <span style={labelStyle}>Geburtstag</span>
      <button style={btnStyle} onClick={() => open ? setOpen(false) : openPicker()}>
        {displayText || 'Kein Datum'} <span style={{fontSize:9,opacity:0.45}}>▾</span>
      </button>
      {open && (
        <div style={dropStyle}>
          <div style={{display:"flex",flexWrap:"wrap",gap:2,padding:"8px 8px 6px",
            borderBottom:"1px solid rgba(124,77,255,0.12)"}}>
            {MONTHS_MERURIA.map((m,i) => (
              <button key={i} style={picMonth===i ? tabActive : tabInactive}
                onClick={() => setPicMonth(i)}>{m.name}</button>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2,padding:"8px"}}>
            {Array.from({length:M.days},(_,i)=>i+1).map(d => (
              <button key={d} style={selectedDay===d ? dayActive : dayInactive}
                onClick={() => pickDay(picMonth, d)}>{d}</button>
            ))}
          </div>
          <div style={{padding:"5px 8px 8px",borderTop:"1px solid rgba(124,77,255,0.1)"}}>
            <button onClick={clearDate}
              style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".18em",
                textTransform:"uppercase",color:"rgba(200,190,240,0.35)",
                background:"transparent",border:"none",cursor:"pointer",padding:"3px 0"}}>
              Datum entfernen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── SelectERow (generic dropdown ERow) ─── */
function SelectERow({ label, field, char, upd, options, bright }) {
  return (
    <div style={{display:"flex",alignItems:"center",gap:6,padding:"3px 0",borderBottom:"1px solid rgba(124,77,255,0.06)"}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".12em",color:"rgba(124,77,255,0.4)",textTransform:"uppercase",flex:"0 0 80px"}}>{label}</span>
      <select
        value={char[field]||''}
        onChange={e => upd({[field]: e.target.value})}
        style={{fontFamily:"var(--font-body)",fontSize:11.5,fontWeight:bright?400:300,color:"#e8e2ff",
          background:"#0e0c20",border:"none",borderBottom:"1px solid rgba(124,77,255,0.25)",
          padding:"2px 4px",flex:1,outline:"none",minWidth:0,cursor:"pointer",colorScheme:"dark"}}>
        <option value="">— wählen —</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

/* ── KlasseSelectRow ─────────────────────── */
function KlasseSelectRow({ char, upd }) {
  const klassen = window.KLASSEN_DATA?.klassen || [];
  return (
    <div style={{display:"flex",alignItems:"center",gap:6,padding:"3px 0",borderBottom:"1px solid rgba(124,77,255,0.06)"}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".12em",color:"rgba(124,77,255,0.4)",textTransform:"uppercase",flex:"0 0 80px"}}>Klasse</span>
      <select
        value={char.class||''}
        onChange={e => upd({ class: e.target.value, subclass: '—' })}
        style={{fontFamily:"var(--font-body)",fontSize:11.5,fontWeight:400,color:"#e8e2ff",
          background:"#0e0c20",border:"none",borderBottom:"1px solid rgba(124,77,255,0.25)",
          padding:"2px 4px",flex:1,outline:"none",minWidth:0,cursor:"pointer",colorScheme:"dark"}}>
        <option value="">— wählen —</option>
        {klassen.map(k => <option key={k.id} value={k.name}>{k.name}</option>)}
      </select>
    </div>
  );
}

/* ── SubklasseSelectRow ──────────────────── */
function SubklasseSelectRow({ char, upd }) {
  const klassen = window.KLASSEN_DATA?.klassen || [];
  const klasseObj = klassen.find(k => k.name === char.class);
  const detail = klasseObj ? (window.KLASSEN_DETAIL || {})[klasseObj.id] : null;
  const unterklassen = detail?.unterklassen || [];
  const baseStyle = {fontFamily:"var(--font-body)",fontSize:11.5,fontWeight:300,color:"#e8e2ff",
    background:"#0e0c20",border:"none",borderBottom:"1px solid rgba(124,77,255,0.25)",
    padding:"2px 4px",flex:1,outline:"none",minWidth:0};
  return (
    <div style={{display:"flex",alignItems:"center",gap:6,padding:"3px 0",borderBottom:"1px solid rgba(124,77,255,0.06)"}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".12em",color:"rgba(124,77,255,0.4)",textTransform:"uppercase",flex:"0 0 80px"}}>Subklasse</span>
      {unterklassen.length > 0
        ? <select value={char.subclass||'—'} onChange={e => upd({subclass: e.target.value})}
            style={{...baseStyle,cursor:"pointer",colorScheme:"dark",fontWeight:300}}>
            <option value="—">— wählen —</option>
            {unterklassen.map(uk => <option key={uk.id} value={uk.name}>{uk.name}</option>)}
          </select>
        : <input value={char.subclass??''} onChange={e => upd({subclass: e.target.value})} style={baseStyle} />
      }
    </div>
  );
}

/* ── RassentalentRow ─────────────────────── */
function rassentalentOptions(race) {
  if (!race || !window.TALENTE_DATA) return [];
  return window.TALENTE_DATA.filter(t => {
    if (!t.angeboren || !t.voraussetzung) return false;
    const parts = t.voraussetzung.split(/,| oder /).map(v => v.trim()).filter(Boolean);
    return parts.some(p => race === p || race.includes(p) || p.startsWith(race));
  });
}
function RassentalentRow({ char, upd }) {
  const opts = rassentalentOptions(char.race);
  return (
    <div style={{display:"flex",alignItems:"center",gap:6,padding:"3px 0",borderBottom:"1px solid rgba(124,77,255,0.06)"}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".12em",color:"rgba(124,77,255,0.4)",textTransform:"uppercase",flex:"0 0 80px"}}>Rassentalent</span>
      {opts.length > 0
        ? <select value={char.rassentalent||''} onChange={e => upd({rassentalent: e.target.value||null})}
            style={{fontFamily:"var(--font-body)",fontSize:11.5,fontWeight:400,color:"#e8e2ff",
              background:"#0e0c20",border:"none",borderBottom:"1px solid rgba(124,77,255,0.25)",
              padding:"2px 4px",flex:1,outline:"none",minWidth:0,cursor:"pointer",colorScheme:"dark"}}>
            <option value="">— keines —</option>
            {opts.map(t => <option key={t.id} value={t.name}>{t.name}</option>)}
          </select>
        : <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:"rgba(124,77,255,0.25)",fontStyle:"italic"}}>
            {char.race ? 'Keine angeborenen Talente für diese Rasse' : 'Erst Volk wählen'}
          </span>
      }
    </div>
  );
}

/* ── RassenmerkmaleCard ──────────────────── */
function RassenmerkmaleCard({ char, upd }) {
  const detail = (window.RASSEN_DETAIL_DATA || {})[char.race];
  const features = detail?.statblock?.features || [];
  const opts = rassentalentOptions(char.race);
  if (!char.race || features.length === 0) return null;
  const E = !!upd;
  const selectedTalent = opts.find(t => t.name === char.rassentalent);

  const rowStyle = {borderBottom:"1px solid rgba(124,77,255,0.07)",paddingBottom:8,marginBottom:8};
  const titleStyle = {fontFamily:"var(--font-display)",fontSize:11.5,color:"rgba(200,190,240,0.9)",letterSpacing:".06em"};
  const textStyle = {fontFamily:"var(--font-body)",fontSize:10.5,fontWeight:300,color:"rgba(200,190,240,0.52)",lineHeight:1.65,margin:"3px 0 0"};

  return (
    <Card>
      <SecTitle label="Rassenmerkmale" />
      <div style={{display:"flex",flexDirection:"column",gap:0}}>
        {features.map((f, i) => {
          const isLast = i === features.length - 1;
          const isTalent = f.name === 'Angeborenes Talent';
          return (
            <div key={f.name} style={{...rowStyle, ...(isLast ? {borderBottom:"none",paddingBottom:0,marginBottom:0} : {})}}>
              <span style={titleStyle}>{f.name}</span>
              {isTalent ? (
                E ? (
                  <select value={char.rassentalent||''} onChange={e => upd({rassentalent: e.target.value||null})}
                    style={{fontFamily:"var(--font-body)",fontSize:11,color:"#e8e2ff",display:"block",marginTop:5,
                      background:"#0e0c20",border:"none",borderBottom:"1px solid rgba(124,77,255,0.3)",
                      padding:"3px 4px",width:"100%",outline:"none",cursor:"pointer",colorScheme:"dark"}}>
                    <option value="">— keines —</option>
                    {opts.map(t => <option key={t.id} value={t.name}>{t.name}</option>)}
                  </select>
                ) : selectedTalent ? (
                  <>
                    <p style={{...textStyle,fontWeight:500,color:"rgba(200,190,240,0.75)"}}>{selectedTalent.name}</p>
                    {(selectedTalent.vorzuege||selectedTalent.beschreibung||[]).map((v,j) => (
                      <p key={j} style={{...textStyle,paddingLeft:8,borderLeft:"2px solid rgba(124,77,255,0.2)",marginTop:4}}>{v}</p>
                    ))}
                  </>
                ) : (
                  <p style={{...textStyle,color:"rgba(124,77,255,0.3)",fontStyle:"italic"}}>Kein Talent gewählt</p>
                )
              ) : (
                <p style={textStyle}>{f.text}</p>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

/* ── HintergrundmerkmaleCard ─────────────── */
function HintergrundmerkmaleCard({ char }) {
  const hintergruende = window.HINTERGRUENDE_DATA || [];
  const bg = hintergruende.find(h => h.name === char.background);
  if (!bg || !bg.merkmal) return null;

  const textStyle = {fontFamily:"var(--font-body)",fontSize:10.5,fontWeight:300,color:"rgba(200,190,240,0.52)",lineHeight:1.65,margin:"3px 0 0"};
  const titleStyle = {fontFamily:"var(--font-display)",fontSize:11.5,color:"rgba(200,190,240,0.9)",letterSpacing:".06em"};
  const rowStyle = {borderBottom:"1px solid rgba(124,77,255,0.07)",paddingBottom:8,marginBottom:8};

  return (
    <Card>
      <SecTitle label="Hintergrundmerkmal" />
      <div style={{display:"flex",flexDirection:"column",gap:0}}>
        <div style={bg.merkmalVariante ? rowStyle : {}}>
          <span style={titleStyle}>{bg.merkmal.name}</span>
          <p style={textStyle}>{bg.merkmal.beschreibung}</p>
        </div>
        {bg.merkmalVariante && (
          <div>
            <div style={{display:"flex",alignItems:"baseline",gap:7,marginBottom:3,flexWrap:"wrap"}}>
              <span style={titleStyle}>{bg.merkmalVariante.name}</span>
              <span style={{fontFamily:"var(--font-mono)",fontSize:7,color:"rgba(124,77,255,0.5)",border:"1px solid rgba(124,77,255,0.3)",padding:"0 4px",borderRadius:2}}>Variante</span>
            </div>
            {bg.merkmalVariante.bedingung && (
              <p style={{...textStyle,fontStyle:"italic",color:"rgba(160,140,255,0.35)",marginBottom:4}}>{bg.merkmalVariante.bedingung}</p>
            )}
            <p style={textStyle}>{bg.merkmalVariante.beschreibung}</p>
          </div>
        )}
      </div>
    </Card>
  );
}

/* ── KlassenmerkmaleCard ─────────────────── */
function KlassenmerkmaleCard({ char }) {
  const klassen = window.KLASSEN_DATA?.klassen || [];
  const klasseObj = klassen.find(k => k.name === char.class);
  if (!klasseObj) return null;
  const detail = (window.KLASSEN_DETAIL || {})[klasseObj.id];
  if (!detail) return null;

  const merkmale = window.KLASSEN_MERKMALE || {};
  const level = char.level || 1;

  // Basisklassen-Features bis aktuellem Level
  const activeIds = new Set();
  (detail.stufentabelle?.zeilen || [])
    .filter(z => z.stufe <= level)
    .forEach(z => z.merkmaleIds.forEach(id => activeIds.add(id)));

  // Subklassen-Features bis aktuellem Level
  const unterklasseObj = (detail.unterklassen || []).find(uk => uk.name === char.subclass);
  if (unterklasseObj) {
    (unterklasseObj.merkmaleIds || []).forEach(id => {
      const m = merkmale[id];
      if (m && m.stufe <= level) activeIds.add(id);
    });
    // Platzhalter-Pfadmerkmal entfernen wenn Subklasse aktiv
    activeIds.delete('barbar_pfadmerkmal');
  }

  const features = [...activeIds]
    .map(id => merkmale[id]).filter(Boolean)
    .sort((a, b) => a.stufe - b.stufe || a.name.localeCompare(b.name, 'de'));

  if (features.length === 0) return null;

  return (
    <Card>
      <SecTitle label="Klassenmerkmale" />
      <div style={{display:"flex",flexDirection:"column",gap:9}}>
        {features.map(m => (
          <div key={m.id} style={{borderBottom:"1px solid rgba(124,77,255,0.07)",paddingBottom:8}}>
            <div style={{display:"flex",alignItems:"baseline",gap:7,marginBottom:3,flexWrap:"wrap"}}>
              <span style={{fontFamily:"var(--font-display)",fontSize:11.5,color:"rgba(200,190,240,0.9)",letterSpacing:".06em"}}>{m.name}</span>
              {m.optional && <span style={{fontFamily:"var(--font-mono)",fontSize:7,color:"rgba(124,77,255,0.5)",border:"1px solid rgba(124,77,255,0.3)",padding:"0 4px",borderRadius:2}}>Optional</span>}
              <span style={{fontFamily:"var(--font-mono)",fontSize:7,color:"rgba(124,77,255,0.35)",letterSpacing:".1em"}}>Stufe {m.stufe}</span>
            </div>
            <p style={{fontFamily:"var(--font-body)",fontSize:10.5,fontWeight:300,color:"rgba(200,190,240,0.52)",lineHeight:1.65,margin:0}}>
              {(m.beschreibung?.[0] || '').slice(0, 200)}{(m.beschreibung?.[0]||'').length > 200 ? '…' : ''}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── ERow (editable IRow) ────────────────── */
function ERow({ label, field, char, upd, bright }) {
  return (
    <div style={{display:"flex",alignItems:"center",gap:6,padding:"3px 0",borderBottom:"1px solid rgba(124,77,255,0.06)"}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".12em",color:"rgba(124,77,255,0.4)",textTransform:"uppercase",flex:"0 0 80px"}}>{label}</span>
      <input value={char[field]??''} onChange={e=>upd({[field]:e.target.value})}
        style={{fontFamily:"var(--font-body)",fontSize:11.5,fontWeight:bright?400:300,color:"var(--white)",
          background:"transparent",border:"none",borderBottom:"1px solid rgba(124,77,255,0.25)",
          padding:"1px 4px",flex:1,outline:"none",minWidth:0}} />
    </div>
  );
}

/* ── UnitERow (ERow with unit suffix) ───── */
function UnitERow({ label, field, unit, char, upd }) {
  return (
    <div style={{display:"flex",alignItems:"center",gap:6,padding:"3px 0",borderBottom:"1px solid rgba(124,77,255,0.06)"}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".12em",color:"rgba(124,77,255,0.4)",textTransform:"uppercase",flex:"0 0 80px"}}>{label}</span>
      <input value={char[field]??''} onChange={e=>upd({[field]:e.target.value})} inputMode="numeric"
        style={{fontFamily:"var(--font-body)",fontSize:11.5,fontWeight:300,color:"var(--white)",
          background:"transparent",border:"none",borderBottom:"1px solid rgba(124,77,255,0.25)",
          padding:"1px 4px",flex:1,outline:"none",minWidth:0}} />
      <span style={{fontFamily:"var(--font-mono)",fontSize:8,color:"rgba(124,77,255,0.4)",letterSpacing:".08em",flexShrink:0}}>{unit}</span>
    </div>
  );
}

/* ── EditableStatsGrid ───────────────────── */
const STAT_KEYS = [
  {key:"str",label:"STÄRKE"},{key:"dex",label:"GESCHICK."},{key:"con",label:"KONST."},
  {key:"int",label:"INT."},{key:"wis",label:"WEISHEIT"},{key:"cha",label:"CHARISMA"},
];
function EditableStatsGrid({ char, updStat }) {
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Attribute" />
      <div style={{display:"flex",gap:6}}>
        {STAT_KEYS.map(({key,label}) => {
          const score = char.stats[key];
          const m = Math.floor((score-10)/2);
          return (
            <div key={key} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",
              background:"rgba(7,4,18,0.97)",border:"1px solid rgba(124,77,255,0.32)",borderRadius:3,padding:"9px 4px 8px"}}>
              <span style={{fontFamily:"var(--font-mono)",fontSize:7,letterSpacing:".16em",color:"rgba(124,77,255,0.4)",textTransform:"uppercase",marginBottom:5,textAlign:"center"}}>{label}</span>
              <input type="number" min="1" max="30" value={score} onChange={e=>updStat(key,e.target.value)}
                style={{fontFamily:"var(--font-mono)",fontSize:20,color:"var(--white)",lineHeight:1,
                  background:"transparent",border:"none",textAlign:"center",width:"100%",
                  outline:"none",padding:"2px 0",WebkitAppearance:"none",MozAppearance:"textfield"}} />
              <div style={{width:"65%",height:1,background:"rgba(124,77,255,0.15)",margin:"5px 0"}} />
              <span style={{fontFamily:"var(--font-mono)",fontSize:13,color:"rgba(124,77,255,0.6)"}}>{m>=0?"+":""}{m}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

/* ── EditablePersonality ─────────────────── */
function EditablePersonality({ char, upd, taStyle }) {
  const items = [{l:"Merkmale",f:"personality"},{l:"Ideale",f:"ideals"},{l:"Bindungen",f:"bonds"},{l:"Makel",f:"flaws"}];
  return (
    <Card>
      <SecTitle label="Persönlichkeit" />
      {items.map(({l,f})=>(
        <div key={f} style={{marginBottom:10}}>
          <div style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".22em",color:"rgba(124,77,255,0.5)",textTransform:"uppercase",marginBottom:4}}>{l}</div>
          <textarea value={char[f]||''} onChange={e=>upd({[f]:e.target.value})} style={taStyle} />
        </div>
      ))}
    </Card>
  );
}

/* ── SteckbriefView ──────────────────────────────────────────
   Read-only:  <SteckbriefView char={processedChar} />
   Edit mode:  <SteckbriefView entry={dbRow} onBack={fn} hasMultiple={bool} />
   ─────────────────────────────────────────────────────────── */
const STECKBRIEF_TWEAK_DEFAULTS = {showZauber:true,showCompanions:true,showQuests:true,showKontakte:true,showWissenswertes:true};

function SteckbriefView({ char: charProp = null, entry = null, onBack = null, hasMultiple = false, hideNav = false, extraTopPadding = 0 }) {
  const canEdit = !!entry;
  const [char, setChar]     = useSteckbrief(() => entry ? charFromEntry(entry) : (charProp || {}));
  const [editing, setEditing] = useSteckbrief(false);
  const [zauber, setZauber] = useSteckbrief(() => entry?._char?.zauber || entry?.char_data?.zauber || []);
  const [lightboxBild, setLightboxBild] = useSteckbrief(null);
  const [tweaks, setTweak]  = (window.useTweaks || (() => [STECKBRIEF_TWEAK_DEFAULTS, ()=>{}]))(STECKBRIEF_TWEAK_DEFAULTS);
  const charRef   = useSteckRef(char);   charRef.current   = char;
  const zauberRef = useSteckRef(zauber); zauberRef.current = zauber;

  const E = canEdit && editing;

  const taStyle = {
    fontFamily:"var(--font-body)",fontSize:12,fontWeight:300,color:"var(--silver)",lineHeight:1.75,
    background:"rgba(124,77,255,0.04)",border:"1px solid rgba(124,77,255,0.2)",borderRadius:2,
    padding:"7px 9px",width:"100%",resize:"vertical",outline:"none",minHeight:58,boxSizing:"border-box",
  };

  function upd(updates) {
    if (!canEdit) return;
    const next = { ...charRef.current, ...updates };
    setChar(next);
    saveCharToDB(entry.id, { ...next, zauber: zauberRef.current });
  }
  function updZauber(newZauber) {
    if (!canEdit) return;
    setZauber(newZauber);
    saveCharToDB(entry.id, { ...charRef.current, zauber: newZauber });
  }
  function updStat(key, val) {
    upd({ stats: { ...char.stats, [key]: Math.max(1, Math.min(30, parseInt(val)||1)) } });
  }

  const { SiteNav, TweaksPanel, TweakSection, TweakToggle, ImageUpload } = window;
  const ZauberSect = window.ZauberSection;

  return (
    <div style={{minHeight:"100vh"}}>
      {!hideNav && SiteNav && <SiteNav />}

      {TweaksPanel && (
        <TweaksPanel tweaks={tweaks} setTweak={setTweak}>
          <TweakSection label="Sektionen">
            {canEdit && <TweakToggle id="showZauber"       label="Zauber anzeigen" />}
            <TweakToggle id="showCompanions"  label="Begleiter anzeigen" />
            <TweakToggle id="showQuests"      label="Quests anzeigen" />
            <TweakToggle id="showKontakte"    label="Kontakte anzeigen" />
            <TweakToggle id="showWissenswertes" label="Wissenswertes anzeigen" />
          </TweakSection>
        </TweaksPanel>
      )}

      {/* ── Kopf ── */}
      <div style={{padding:"18px 28px 15px",borderBottom:"1px solid rgba(124,77,255,0.1)"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6}}>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            {hasMultiple && onBack && (
              <button onClick={onBack} style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".18em",
                color:"rgba(124,77,255,0.5)",background:"transparent",border:"none",cursor:"pointer",padding:0,
                textTransform:"uppercase",transition:"color .15s"}}
                onMouseEnter={e=>e.currentTarget.style.color="rgba(160,140,255,0.85)"}
                onMouseLeave={e=>e.currentTarget.style.color="rgba(124,77,255,0.5)"}>
                ← Auswahl
              </button>
            )}
            {!canEdit && (
              <a href="Spielercharaktere.html" style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".18em",
                color:"rgba(124,77,255,0.5)",textDecoration:"none",textTransform:"uppercase",transition:"color .15s"}}
                onMouseEnter={e=>e.currentTarget.style.color="rgba(160,140,255,0.85)"}
                onMouseLeave={e=>e.currentTarget.style.color="rgba(124,77,255,0.5)"}>
                ← Charaktere
              </a>
            )}
            <div style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:".3em",color:"rgba(124,77,255,0.5)",textTransform:"uppercase"}}>
              Meruria · Charaktere
            </div>
          </div>
          {canEdit && (
            <button onClick={()=>setEditing(!E)}
              style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".18em",textTransform:"uppercase",
                padding:"5px 14px",background:E?"rgba(124,77,255,0.22)":"transparent",
                border:`1px solid rgba(124,77,255,${E?0.6:0.3})`,borderRadius:3,cursor:"pointer",
                color:E?"rgba(200,190,240,0.95)":"rgba(124,77,255,0.55)",transition:"all .18s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(124,77,255,0.7)";e.currentTarget.style.color="rgba(200,190,240,0.9)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=E?"rgba(124,77,255,0.6)":"rgba(124,77,255,0.3)";e.currentTarget.style.color=E?"rgba(200,190,240,0.95)":"rgba(124,77,255,0.55)";}}>
              {E ? "✓ Fertig" : "✎ Bearbeiten"}
            </button>
          )}
        </div>
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
          <div style={{flex:1}}>
            {E
              ? <input value={char.name||''} onChange={e=>upd({name:e.target.value})}
                  style={{fontFamily:"var(--font-display)",fontWeight:400,fontSize:28,letterSpacing:".22em",
                    color:"var(--white)",textTransform:"uppercase",background:"transparent",border:"none",
                    borderBottom:"1px solid rgba(124,77,255,0.4)",outline:"none",padding:"0 4px",width:"100%"}} />
              : <h1 style={{fontFamily:"var(--font-display)",fontWeight:400,fontSize:28,letterSpacing:".22em",
                    color:"var(--white)",textTransform:"uppercase",textShadow:"0 0 32px rgba(124,77,255,0.2)"}}>{char.name}</h1>
            }
            <div style={{display:"flex",gap:6,marginTop:8,flexWrap:"wrap"}}>
              {[(char.subclass && char.subclass !== '—' ? `${char.class} · ${char.subclass}` : char.class),`Stufe ${char.level}`,char.race,char.background,
                `${char.division} · ${char.rank} ${["I","II","III","IV","V"][(char.rankLevel||1)-1]}`]
                .map((t,i)=>(
                  <span key={i} style={{fontFamily:"var(--font-mono)",fontSize:8.5,padding:"2px 9px",
                    background:"rgba(124,77,255,0.1)",border:"1px solid rgba(124,77,255,0.28)",borderRadius:2,
                    color:"rgba(200,190,240,0.82)",letterSpacing:".1em"}}>{t}</span>
                ))}
            </div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontFamily:"var(--font-mono)",fontSize:7.5,letterSpacing:".2em",color:"rgba(124,77,255,0.35)",textTransform:"uppercase",marginBottom:2}}>Erfahrungspunkte</div>
            <div style={{fontFamily:"var(--font-mono)",fontSize:22,color:"rgba(124,77,255,0.65)"}}>{(char.xp||0).toLocaleString("de-DE")}</div>
          </div>
        </div>
        <div style={{marginTop:10,width:36,height:1,background:"rgba(124,77,255,0.55)"}} />
      </div>

      {/* ── 3-Spalten-Grid ── */}
      <div style={{display:"grid",gridTemplateColumns:"220px 1fr 290px",gap:14,padding:"16px 22px 0",alignItems:"start"}}>

        {/* LINKS */}
        <div style={{display:"flex",flexDirection:"column",gap:11}}>
          <Card>
            <SecTitle label="Identität" />
            {E ? <>
              <SelectERow label="Volk"        field="race"       char={char} upd={upd} bright options={(window.RASSEN_DATA||[]).flatMap(r=>r.type==='group'?(r.subraces||[]).map(s=>s.name):[r.name])} />
              <KlasseSelectRow char={char} upd={upd} />
              <SubklasseSelectRow char={char} upd={upd} />
              <SelectERow label="Hintergrund" field="background" char={char} upd={upd} options={window.ALLE_HINTERGRUENDE||[]} />
              <SelectERow label="Gesinnung" field="alignment" char={char} upd={upd} bright options={["Rechtschaffen gut","Neutral gut","Chaotisch gut","Rechtschaffen neutral","Neutral","Chaotisch neutral","Rechtschaffen böse","Neutral böse","Chaotisch böse","Gesinnungslos"]} />
              <SelectERow label="Geschlecht"  field="gender"     char={char} upd={upd} options={["männlich","weiblich","divers","keine Angabe"]} />
              <ERow label="Herkunft"    field="birthplace" char={char} upd={upd} />
            </> : <>
              <IRow label="Volk"        value={char.race}       bright />
              <IRow label="Klasse"      value={char.class}      bright />
              <IRow label="Subklasse"   value={char.subclass} />
              <IRow label="Hintergrund" value={char.background} />
              <IRow label="Gesinnung"   value={char.alignment}  bright />
              <IRow label="Geschlecht"  value={char.gender} />
              <IRow label="Herkunft"    value={char.birthplace} />
            </>}
          </Card>
          <Card>
            <SecTitle label="Persönliche Daten" />
            {E ? <>
              <BirthdayPickerRow char={char} upd={upd} />
              <IRow label="Sternzeichen" value={char.zodiac || '—'} bright />
              <ERow label="Alter"        field="age"      char={char} upd={upd} />
              <UnitERow label="Größe"   field="height" unit="cm"    char={char} upd={upd} />
              <UnitERow label="Gewicht" field="weight" unit="Pfund" char={char} upd={upd} />
              <ERow label="Augen"        field="eyes"     char={char} upd={upd} />
              <ERow label="Haare"        field="hair"     char={char} upd={upd} />
              <ERow label="Haut"         field="skin"     char={char} upd={upd} />
            </> : <>
              <IRow label="Geburtstag"   value={char.birthday} />
              <IRow label="Sternzeichen" value={char.zodiac}   bright />
              <IRow label="Alter"        value={`${char.age} Jahre`} />
              <IRow label="Größe"   value={char.height && char.height !== '—' ? `${char.height} cm` : char.height} />
              <IRow label="Gewicht" value={char.weight && char.weight !== '—' ? `${char.weight} Pfund` : char.weight} />
              <IRow label="Augen"        value={char.eyes} />
              <IRow label="Haare"        value={char.hair} />
              <IRow label="Haut"         value={char.skin} />
            </>}
          </Card>
          {E ? <EditableLebensstilCard char={char} upd={upd} /> : <LebensstilCard char={char} />}
          {E ? <EditableDivisionRank char={char} upd={upd} /> : <DivisionRank char={char} />}
          {E ? <EditableDeityCard char={char} upd={upd} /> : <DeityCard char={char} />}
          {E ? <EditableCombatCompact char={char} upd={upd} /> : <CombatCompact char={char} />}
          {E ? <EditableWaffenCard char={char} upd={upd} /> : <WaffenCard char={char} />}
          {E ? <EditableUebungenCard char={char} upd={upd} /> : <UebungenCard char={char} />}
          <InventarCard char={char} upd={upd} editing={E} />
          <HabeCard char={char} upd={upd} editing={E} />
        </div>

        {/* MITTE */}
        <div style={{display:"flex",flexDirection:"column",gap:11}}>
          {E ? <EditableStatsGrid char={char} updStat={updStat} /> : <AttributeGrid char={char} />}
          {E ? <EditableSavingThrows char={char} upd={upd} /> : <SavingThrows char={char} />}
          {E ? <EditableSkillPills char={char} upd={upd} /> : <SkillPills char={char} />}
          <KlassenmerkmaleCard char={char} />
          <RassenmerkmaleCard char={char} upd={E ? upd : null} />
          <HintergrundmerkmaleCard char={char} />
          {tweaks.showCompanions && char.companions && char.companions.length > 0 && (
            <div>
              <div style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".28em",color:"rgba(124,77,255,0.45)",textTransform:"uppercase",marginBottom:8}}>Begleiter</div>
              <div style={{width:24,height:1,background:"linear-gradient(90deg,rgba(124,77,255,0.65),transparent)",marginBottom:10}} />
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {char.companions.map(comp=><CompanionCard key={comp.id} comp={comp}/>)}
              </div>
            </div>
          )}
        </div>

        {/* RECHTS */}
        <div style={{display:"flex",flexDirection:"column",gap:11}}>
          <div style={{position:"relative",borderRadius:4,overflow:"hidden",border:"1px solid rgba(124,77,255,0.38)"}}>
            <Corners op={0.58} sz={18} />
            {E && ImageUpload
              ? <ImageUpload shape="square" imageUrl={char.bild||null}
                  onUploaded={url=>upd({bild:url})} bucket="karte-bilder"
                  pathPrefix={`charaktere/${entry.id}`} width="100%" height={310} />
              : char.bild
                ? <img src={char.bild} onClick={()=>setLightboxBild(char.bild)}
                    style={{width:"100%",height:310,objectFit:"cover",objectPosition:"top",display:"block",cursor:"zoom-in"}} alt="" />
                : <div style={{height:310,display:"flex",alignItems:"center",justifyContent:"center",
                    background:"linear-gradient(160deg,rgba(20,12,46,0.92),rgba(10,7,28,0.96))"}}>
                    <span style={{fontFamily:"var(--font-display)",fontSize:64,color:"rgba(124,77,255,0.2)"}}>{char.name?.[0]||'?'}</span>
                  </div>
            }
          </div>
          {E ? <EditablePersonality char={char} upd={upd} taStyle={taStyle} /> : <PersonalitySection char={char} />}
          <div style={{background:"var(--card-bg)",borderLeft:"2px solid rgba(124,77,255,0.5)",
            border:"1px solid rgba(124,77,255,0.2)",borderLeftWidth:3,
            borderRadius:"0 4px 4px 0",padding:"13px 14px",position:"relative"}}>
            <SecTitle label="Meine ersten Tage auf Meruria" />
            {E
              ? <textarea value={char.ersteTage||''} onChange={e=>upd({ersteTage:e.target.value})} style={{...taStyle,fontStyle:"italic"}} />
              : <p style={{fontFamily:"var(--font-body)",fontSize:12.5,fontWeight:300,color:"var(--silver)",lineHeight:1.88,textWrap:"pretty",fontStyle:"italic"}}>„{char.ersteTage}"</p>
            }
          </div>
          <Card style={{position:"relative"}}>
            <Corners op={0.28} />
            <SecTitle label="Über mich" />
            {E
              ? <textarea value={char.story||''} onChange={e=>upd({story:e.target.value})} style={{...taStyle,minHeight:120,fontStyle:"normal"}} />
              : <p style={{fontFamily:"var(--font-body)",fontSize:13,fontWeight:300,color:"var(--silver)",lineHeight:1.9,textWrap:"pretty"}}>{char.story}</p>
            }
          </Card>
          {canEdit && ZauberSect && tweaks.showZauber && (
            <Card>
              <ZauberSect zauber={zauber} updZauber={updZauber} editing={E} charKlasse={char.class || ''} />
            </Card>
          )}
        </div>
      </div>

      {/* ── Quests ── */}
      {tweaks.showQuests && char.quests && char.quests.length > 0 && (
        <div style={{padding:"22px 22px 8px"}}>
          <Divider label="Erledigte Quests" />
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:12}}>
            {char.quests.map((q,i)=><QuestCard key={i} quest={q}/>)}
          </div>
        </div>
      )}

      {/* ── Kontakte ── */}
      {tweaks.showKontakte && char.contacts && char.contacts.length > 0 && (
        <div style={{padding:"22px 22px 8px"}}>
          <Divider label="Kontakte" />
          <KontakteTablet char={char} />
        </div>
      )}

      {/* ── Wissenswertes ── */}
      {tweaks.showWissenswertes && char.freundebuch && char.freundebuch.length > 0 && (
        <div style={{padding:"22px 22px 24px"}}>
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:20,marginBottom:20,flexWrap:"wrap"}}>
            <div>
              <div style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:".28em",color:"rgba(124,77,255,0.45)",textTransform:"uppercase",marginBottom:4}}>Wissenswertes</div>
              <div style={{width:28,height:1,background:"linear-gradient(90deg,rgba(124,77,255,0.65),transparent)"}} />
            </div>
            <p style={{fontFamily:"var(--font-body)",fontSize:12,fontWeight:300,fontStyle:"italic",
              color:"rgba(190,182,225,0.45)",flex:1,minWidth:220,textAlign:"right"}}>
              Was mich ausmacht — in meinen eigenen Worten.
            </p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12}}>
            {char.freundebuch.map((item,i)=>(
              <FbCard key={i} item={item} index={i}
                onChange={E ? updated => upd({freundebuch:char.freundebuch.map((x,j)=>j===i?updated:x)}) : null} />
            ))}
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <div style={{borderTop:"1px solid rgba(124,77,255,0.07)",margin:"22px 0 0",padding:"13px 28px",display:"flex",justifyContent:"space-between"}}>
        <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:"rgba(124,77,255,0.26)",letterSpacing:".1em"}}>Meruria — Steckbrief</span>
        <span style={{fontFamily:"var(--font-mono)",fontSize:8,color:"rgba(124,77,255,0.2)"}}>D&amp;D 5e · {char.race} {char.class} Stufe {char.level}</span>
      </div>

      {/* ── Bild-Lightbox ── */}
      {lightboxBild && ReactDOM.createPortal(
        <div onClick={()=>setLightboxBild(null)} style={{
          position:"fixed",inset:0,zIndex:99999,
          background:"rgba(5,4,15,0.92)",backdropFilter:"blur(14px)",
          display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
          cursor:"zoom-out",
        }}>
          <img src={lightboxBild} alt={char.name||""} onClick={e=>e.stopPropagation()} style={{
            maxWidth:"90vw",maxHeight:"86vh",objectFit:"contain",
            borderRadius:5,boxShadow:"0 0 80px rgba(124,77,255,0.3),0 0 0 1px rgba(124,77,255,0.2)",
          }}/>
          {char.name && (
            <div style={{marginTop:16,fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".2em",
              color:"rgba(200,190,240,0.5)",textTransform:"uppercase"}}>{char.name}</div>
          )}
          <button onClick={()=>setLightboxBild(null)} style={{
            position:"absolute",top:20,right:24,background:"transparent",
            border:"1px solid rgba(160,140,255,0.25)",color:"rgba(200,190,240,0.6)",
            borderRadius:3,fontFamily:"var(--font-mono)",fontSize:16,lineHeight:1,
            width:34,height:34,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
          }}>×</button>
        </div>,
        document.body
      )}
    </div>
  );
}

Object.assign(window, {
  SKILLS_DEFAULT, SAVES_DEFAULT, buildChar, charFromEntry, saveCharToDB,
  DivisionRank, DeityCard, CombatCompact, EditableCombatCompact, AttributeGrid,
  SkillPills, SavingThrows, EditableSavingThrows, PersonalitySection,
  QuestCard, CompanionCard, FbCard, KontakteTablet,
  Divider, ERow, UnitERow, EditableStatsGrid, EditableSkillPills, EditablePersonality,
  WaffenCard, EditableWaffenCard,
  UebungenCard, EditableUebungenCard, InventarCard, HabeCard,
  LebensstilCard, EditableLebensstilCard,
  EditableDivisionRank, DeitySymbol, EditableDeityCard, SteckbriefView,
});
