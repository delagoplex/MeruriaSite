/* ═══════════════════════════════════════════════════════════════
   steckbrief-components.jsx — Shared Steckbrief UI components
   Requires window globals: React, mod, fmtMod, attrKey, skillBonus,
                            ImageSlot, SecTitle, Card, Corners, IRow
   ═══════════════════════════════════════════════════════════════ */
const { useState: useSteckbrief, useRef: useSteckRef } = React;
const { mod, fmtMod, attrKey, skillBonus, ImageSlot, SecTitle, Card, Corners, IRow } = window;

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
    deity:       d.deity       || '—',
    deityDomain: '—',                    // TODO: aus Gottheitsdaten ableiten
    deityHue:    55,
    stats:       d.stats       || {str:10,dex:10,con:10,int:10,wis:10,cha:10},

    // ── TODO: Quiz-Erweiterungen ───────────────────────────────
    alignment:   d.alignment   || '—',   // TODO: quiz
    zodiac:      d.zodiac      || '—',   // TODO: quiz
    birthday:    d.birthday    || '—',   // TODO: quiz

    // ── Festwerte / Stufe 1 ────────────────────────────────────
    subclass: '—', level:1, xp:0, profBonus:2,
    rank:'Neuankömmling', rankLevel:1, rankMax:5,
    hp:10, ac:10, initiative:0, speed:9,
    gender:'—', age:'—', birthplace:'—',
    height:'—', weight:'—', eyes:'—', hair:'—', skin:'—',

    // ── Platzhalter-Texte ──────────────────────────────────────
    story:       '',
    ersteTage:   'Als sich meine Träumerkapsel öffnete, ...',
    personality: '',
    ideals:      '',
    bonds:       '',
    flaws:       d.samen ? `Samen der Furcht: ${d.samen}` : '',

    // ── Leer bis selbst befüllt ────────────────────────────────
    weapons:    [],
    quests:     [],
    companions: [],
    contacts:   [],
    zauber:     [],

    // ── Freundebuch: TODO-Felder klar markiert ─────────────────
    freundebuch: [
      {frage:'Meine Lieblingsfarbe',     antwort: d.lieblingsfarbe || '—'}, // TODO: quiz
      {frage:'Mein Lieblingsessen',      antwort: '—'},
      {frage:'Lieblingsbeschäftigung',   antwort: '—'},
      {frage:'Wen ich bewundere',        antwort: '—'},
      {frage:'Mein größter Traum',       antwort: '—'},
      {frage:'Meine größte Angst',       antwort: d.samen || '—'},          // aus Quiz
      {frage:'Wenn ich ein Tier wäre...', antwort: d.tier  || '—'},         // TODO: quiz
      {frage:'Mein Motto',               antwort: d.motto  || '—'},         // TODO: quiz
    ],

    skills: SKILLS_DEFAULT,
  };
}

/* ── Division & Rang ──────────────────────── */
function DivisionRank({ char }) {
  const roman = ["I","II","III","IV","V"];
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Division & Rang" />
      <div style={{fontFamily:"var(--font-display)",fontSize:11,letterSpacing:".18em",color:"rgba(210,202,245,0.9)",textTransform:"uppercase",marginBottom:7}}>{char.division}</div>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{display:"flex",gap:4}}>
          {Array.from({length:char.rankMax},(_,i)=>{
            const filled = i < char.rankLevel;
            return <span key={i} style={{display:"inline-block",width:9,height:9,
              transform:"rotate(45deg)",flexShrink:0,
              background:filled?"rgba(124,77,255,0.68)":"transparent",
              border:`1px solid rgba(124,77,255,${filled?0.55:0.2})`}} />;
          })}
        </div>
        <span style={{fontFamily:"var(--font-mono)",fontSize:10,color:"var(--white)"}}>{char.rank}
          <span style={{color:"rgba(124,77,255,0.6)"}}> · </span>
          <span style={{color:"rgba(124,77,255,0.85)"}}>{roman[char.rankLevel-1]}</span>
        </span>
      </div>
    </Card>
  );
}

/* ── Gottheit ─────────────────────────────── */
function DeityCard({ char }) {
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Gottheit" />
      <div style={{display:"flex",gap:12,alignItems:"center"}}>
        <div style={{width:72,height:72,flexShrink:0}}>
          <ImageSlot slotId="deity-symbol" label="Symbol" height={72} hue={char.deityHue||55} />
        </div>
        <div>
          <div style={{fontFamily:"var(--font-display)",fontSize:12,letterSpacing:".16em",color:"var(--white)",textTransform:"uppercase",marginBottom:4}}>{char.deity}</div>
          <div style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:".12em",color:"rgba(124,77,255,0.5)"}}>{char.deityDomain}</div>
        </div>
      </div>
    </Card>
  );
}

/* ── Kampf-Kompakt ────────────────────────── */
function CombatCompact({ char }) {
  const stats = [["TP",char.hp],["RK",char.ac],["INIT",fmtMod(char.initiative)],["BEWG",char.speed+"m"]];
  return (
    <Card>
      <SecTitle label="Kampf" />
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:11}}>
        {stats.map(([l,v])=>(
          <div key={l} style={{background:"rgba(7,4,18,0.9)",border:"1px solid rgba(124,77,255,0.22)",borderRadius:3,
            padding:"7px 10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:18,color:"var(--white)",lineHeight:1}}>{v}</span>
            <span style={{fontFamily:"var(--font-mono)",fontSize:6.5,letterSpacing:".18em",color:"rgba(124,77,255,0.4)",textTransform:"uppercase",marginTop:3}}>{l}</span>
          </div>
        ))}
      </div>
      {char.weapons.map((w,i)=>(
        <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"3px 0",borderBottom:"1px solid rgba(124,77,255,0.06)"}}>
          <span style={{fontFamily:"var(--font-body)",fontSize:11,fontWeight:300,color:"var(--silver)",flex:1}}>{w.name}</span>
          <span style={{fontFamily:"var(--font-mono)",fontSize:10,color:"rgba(124,77,255,0.78)"}}>{w.bonus}</span>
          <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:"rgba(175,168,210,0.5)"}}>{w.damage}</span>
        </div>
      ))}
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
function SkillPills({ char }) {
  const profs = char.skills.filter(s=>s.prof>0);
  return (
    <Card style={{marginBottom:11}}>
      <SecTitle label="Stärken · Geübte Fertigkeiten" />
      <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
        {profs.map(s=>{
          const bonus = skillBonus(s,char.stats,char.profBonus);
          return (
            <span key={s.name} style={{fontFamily:"var(--font-mono)",fontSize:9,padding:"3px 10px",
              background:"rgba(124,77,255,0.12)",border:"1px solid rgba(124,77,255,0.32)",borderRadius:2,
              color:"rgba(200,190,240,0.88)",letterSpacing:".06em",display:"inline-flex",gap:7,alignItems:"center"}}>
              {s.name}<span style={{color:"rgba(124,77,255,0.92)",fontWeight:600}}>{fmtMod(bonus)}</span>
            </span>
          );
        })}
      </div>
      <div style={{fontFamily:"var(--font-mono)",fontSize:7.5,color:"rgba(124,77,255,0.28)",marginTop:8,letterSpacing:".1em"}}>
        Übungsbonus +{char.profBonus}
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
function FbCard({ item, index }) {
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
      <p style={{ fontFamily:"var(--font-body)", fontSize:13, fontWeight:300,
        lineHeight:1.78, fontStyle:"italic",
        color:hov?"var(--white)":"var(--silver)",
        transition:"color .25s ease" }}>{item.antwort}</p>
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

function SteckbriefView({ char: charProp = null, entry = null, onBack = null, hasMultiple = false }) {
  const canEdit = !!entry;
  const [char, setChar]     = useSteckbrief(() => entry ? charFromEntry(entry) : (charProp || {}));
  const [editing, setEditing] = useSteckbrief(false);
  const [zauber, setZauber] = useSteckbrief(() => entry?._char?.zauber || entry?.char_data?.zauber || []);
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
    <div style={{minHeight:"100vh",paddingTop:"var(--nav-h)"}}>
      {SiteNav && <SiteNav />}

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
              {[`${char.class} · ${char.subclass}`,`Stufe ${char.level}`,char.race,char.background,
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
              <ERow label="Volk"        field="race"       char={char} upd={upd} bright />
              <ERow label="Klasse"      field="class"      char={char} upd={upd} bright />
              <ERow label="Subklasse"   field="subclass"   char={char} upd={upd} />
              <ERow label="Hintergrund" field="background" char={char} upd={upd} />
              <ERow label="Gesinnung"   field="alignment"  char={char} upd={upd} bright />
              <ERow label="Geschlecht"  field="gender"     char={char} upd={upd} />
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
              <ERow label="Geburtstag"   field="birthday" char={char} upd={upd} />
              <ERow label="Sternzeichen" field="zodiac"   char={char} upd={upd} bright />
              <ERow label="Alter"        field="age"      char={char} upd={upd} />
              <ERow label="Größe"        field="height"   char={char} upd={upd} />
              <ERow label="Gewicht"      field="weight"   char={char} upd={upd} />
              <ERow label="Augen"        field="eyes"     char={char} upd={upd} />
              <ERow label="Haare"        field="hair"     char={char} upd={upd} />
              <ERow label="Haut"         field="skin"     char={char} upd={upd} />
            </> : <>
              <IRow label="Geburtstag"   value={char.birthday} />
              <IRow label="Sternzeichen" value={char.zodiac}   bright />
              <IRow label="Alter"        value={`${char.age} Jahre`} />
              <IRow label="Größe"        value={char.height} />
              <IRow label="Gewicht"      value={char.weight} />
              <IRow label="Augen"        value={char.eyes} />
              <IRow label="Haare"        value={char.hair} />
              <IRow label="Haut"         value={char.skin} />
            </>}
          </Card>
          <DivisionRank char={char} />
          <DeityCard    char={char} />
          <CombatCompact char={char} />
        </div>

        {/* MITTE */}
        <div style={{display:"flex",flexDirection:"column",gap:11}}>
          <Card style={{position:"relative"}}>
            <Corners op={0.28} />
            <SecTitle label="Über mich" />
            {E
              ? <textarea value={char.story||''} onChange={e=>upd({story:e.target.value})} style={{...taStyle,minHeight:120,fontStyle:"normal"}} />
              : <p style={{fontFamily:"var(--font-body)",fontSize:13,fontWeight:300,color:"var(--silver)",lineHeight:1.9,textWrap:"pretty"}}>{char.story}</p>
            }
          </Card>
          <div style={{background:"var(--card-bg)",borderLeft:"2px solid rgba(124,77,255,0.5)",
            border:"1px solid rgba(124,77,255,0.2)",borderLeftWidth:3,
            borderRadius:"0 4px 4px 0",padding:"13px 14px",position:"relative"}}>
            <SecTitle label="Meine ersten Tage auf Meruria" />
            {E
              ? <textarea value={char.ersteTage||''} onChange={e=>upd({ersteTage:e.target.value})} style={{...taStyle,fontStyle:"italic"}} />
              : <p style={{fontFamily:"var(--font-body)",fontSize:12.5,fontWeight:300,color:"var(--silver)",lineHeight:1.88,textWrap:"pretty",fontStyle:"italic"}}>„{char.ersteTage}"</p>
            }
          </div>
          {E ? <EditableStatsGrid char={char} updStat={updStat} /> : <AttributeGrid char={char} />}
          <SkillPills char={char} />
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
            {canEdit && ImageUpload
              ? <ImageUpload shape="square" imageUrl={char.bild||null}
                  onUploaded={url=>upd({bild:url})} bucket="karte-bilder"
                  pathPrefix={`charaktere/${entry.id}`} width="100%" height={310} />
              : char.bild
                ? <img src={char.bild} style={{width:"100%",height:310,objectFit:"cover",objectPosition:"top",display:"block"}} alt="" />
                : <div style={{height:310,display:"flex",alignItems:"center",justifyContent:"center",
                    background:"linear-gradient(160deg,rgba(20,12,46,0.92),rgba(10,7,28,0.96))"}}>
                    <span style={{fontFamily:"var(--font-display)",fontSize:64,color:"rgba(124,77,255,0.2)"}}>{char.name?.[0]||'?'}</span>
                  </div>
            }
          </div>
          {E ? <EditablePersonality char={char} upd={upd} taStyle={taStyle} /> : <PersonalitySection char={char} />}
        </div>
      </div>

      {/* ── Zauber (nur Edit-Modus, nur wenn ZauberSection verfügbar) ── */}
      {canEdit && ZauberSect && tweaks.showZauber && (
        <div style={{padding:"22px 22px 8px"}}>
          <ZauberSect zauber={zauber} updZauber={updZauber} editing={E} />
        </div>
      )}

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
            {char.freundebuch.map((item,i)=><FbCard key={i} item={item} index={i}/>)}
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <div style={{borderTop:"1px solid rgba(124,77,255,0.07)",margin:"22px 0 0",padding:"13px 28px",display:"flex",justifyContent:"space-between"}}>
        <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:"rgba(124,77,255,0.26)",letterSpacing:".1em"}}>Meruria — Steckbrief</span>
        <span style={{fontFamily:"var(--font-mono)",fontSize:8,color:"rgba(124,77,255,0.2)"}}>D&amp;D 5e · {char.race} {char.class} Stufe {char.level}</span>
      </div>
    </div>
  );
}

Object.assign(window, {
  SKILLS_DEFAULT, buildChar, charFromEntry, saveCharToDB,
  DivisionRank, DeityCard, CombatCompact, AttributeGrid,
  SkillPills, PersonalitySection, QuestCard, CompanionCard, FbCard, KontakteTablet,
  Divider, ERow, EditableStatsGrid, EditablePersonality, SteckbriefView,
});
