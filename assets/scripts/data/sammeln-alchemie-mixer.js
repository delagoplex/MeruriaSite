/* ─────────────────────────────────────────────────────────────────
   Alchemie-Mixer — kombiniere bis zu 4 Reagenzien zu einer Konkoktion.
   Berechnet live: Effekte (Familien werden addiert bis Level IV),
   Seltenheit, Zeit, Kosten, Rettungswurf-SG, Bombenradius.
   ───────────────────────────────────────────────────────────────── */

const { useState: useStateMx, useMemo: useMemoMx, useRef: useRefMx, useEffect: useEffectMx } = React;

const KONKOKTION_TYPEN = [
  { id:'bombe', label:'Bombe',  field:'bombe',  icon:'💣',
    intro:'Wurfgeschoss; alle Kreaturen im Radius: GES-RW oder voller Schaden.' },
  { id:'gift',  label:'Gift',   field:'gift',   icon:'🜋',
    intro:'Berührung/Einnahme/Atem/Verletzung: KON-RW oder vergiftet + Zusatzeffekte.' },
  { id:'trank', label:'Trank',  field:'trank',  icon:'🜍',
    intro:'Wird getrunken; Effekte treten sofort ein. Nur ein Dauer-Trank gleichzeitig.' },
];

// Built-in creature-part shortcut presets (so users can pick "+1 Drachen-Schuppe HG 12"
// without having to enter the whole spec each time).
const KREATUR_PRESETS = [
  { id:'k_gehirn',   teil:'Gehirn',           hg:5,  variante:'Psychisch' },
  { id:'k_essenz',   teil:'Kreaturessenz',    hg:5,  variante:'Kraft' },
  { id:'k_klaue',    teil:'Klaue',            hg:5,  variante:'Schnitt' },
  { id:'k_horn',     teil:'Horn',             hg:5,  variante:'Stich' },
  { id:'k_herz',     teil:'Herz',             hg:5,  variante:null },
  { id:'k_auge',     teil:'Auge',             hg:5,  variante:null },
  { id:'k_federn',   teil:'Federn',           hg:5,  variante:null },
  { id:'k_tentakel', teil:'Tentakel',         hg:5,  variante:null },
  { id:'k_reisszahn',teil:'Reißzahn',         hg:5,  variante:'Stich' },
  { id:'k_blut',     teil:'Körperflüssigkeit',hg:5,  variante:null },
  { id:'k_schuppen', teil:'Schuppen',         hg:5,  variante:'Feuer' },
  { id:'k_fell',     teil:'Fell',             hg:5,  variante:null },
];

// ─── Compute one reagent's contribution to a given concoction type ───
function reagentContribution(item, typId) {
  const typ = KONKOKTION_TYPEN.find(t => t.id === typId);
  if (!typ) return null;
  if (item.kind === 'pflanze') {
    const raw = item.data[typ.field];
    if (!raw) return { ok:false, reason:`Keine ${typ.label}-Wirkung.` };
    const parsed = window.parseEffekt(raw);
    return { ok:true, raw, ...parsed };
  }
  if (item.kind === 'kreatur') {
    const part = window.KREATURENTEILE_REAGENZIEN.find(p => p.teil.startsWith(item.teil) || item.teil.startsWith(p.teil));
    if (!part) return { ok:false, reason:'Unbekanntes Kreaturenteil.' };
    const base = part[typ.field];
    if (!base) return { ok:false, reason:`Keine ${typ.label}-Wirkung.` };
    const level = window.hgToLevel(item.hg || 5);
    // base is e.g. "Bombe (Psychisch)" — needs level injected.
    const m = base.match(/^(.+?)\s*\(([^)]+)\)$/);
    let familie = base, variante = item.variante || null;
    if (m) { familie = m[1].trim(); variante = item.variante || m[2].trim(); }
    // Special-case: "Schwäche (Feuer)" stays a damage-type variant of Schwäche;
    // however the base string like "Bombe" needs a roman level appended.
    const FAMILY_WITH_LEVEL = ['Bombe','Schaden','Heilung','Bewegung','Anfälligkeit','Schwäche','Intensivierung','Nahkampf','Fernkampf','Resistenz','Stärkung','Wiederherstellung','Wasseratmung','Nachtsicht','Blendend','Nebel'];
    let levelTag = '';
    if (FAMILY_WITH_LEVEL.includes(familie)) levelTag = ' ' + ['I','II','III','IV'][level - 1];
    const synthRaw = `${familie}${levelTag}${variante ? ` (${variante})` : ''}`;
    const parsed = window.parseEffekt(synthRaw);
    return { ok:true, raw:synthRaw, ...parsed };
  }
  return null;
}

// Aggregate up to 4 reagents → list of resulting effects + rarity.
function aggregate(reagenzien, typId) {
  const buckets = new Map(); // key=familie|variante → {familie, variante, level, parts:[idx]}
  const skipped = [];
  reagenzien.forEach((r, i) => {
    if (!r) return;
    const c = reagentContribution(r, typId);
    if (!c) return;
    if (!c.ok) { skipped.push({ i, reason: c.reason }); return; }
    const key = `${c.familie}|${c.variante || ''}`;
    if (buckets.has(key)) {
      const b = buckets.get(key);
      b.level = Math.min(4, b.level + c.level);
      b.parts.push(i);
    } else {
      buckets.set(key, { familie: c.familie, variante: c.variante, level: c.level, parts:[i] });
    }
  });
  const effekte = Array.from(buckets.values());
  const maxLevel = effekte.reduce((m, e) => Math.max(m, e.level), 0);
  return { effekte, maxLevel, skipped };
}

// ── Reagent slot card ──────────────────────────────────────────────
function ReagentSlot({ slot, idx, typId, onPick, onClear, onHgChange }) {
  if (!slot) {
    return (
      <button onClick={() => onPick(idx)}
        style={{
          width:'100%', minHeight:'82px',
          background:'rgba(124,77,255,0.04)',
          border:'1px dashed rgba(124,77,255,0.32)',
          borderRadius:'4px', cursor:'pointer',
          fontFamily:'var(--font-mono)', fontSize:'10px',
          letterSpacing:'0.18em', textTransform:'uppercase',
          color:'rgba(160,140,255,0.6)',
          transition:'all 0.2s',
        }}
        onMouseEnter={e=>{e.currentTarget.style.background='rgba(124,77,255,0.1)';e.currentTarget.style.borderColor='rgba(124,77,255,0.7)';e.currentTarget.style.color='rgba(220,200,255,0.95)';}}
        onMouseLeave={e=>{e.currentTarget.style.background='rgba(124,77,255,0.04)';e.currentTarget.style.borderColor='rgba(124,77,255,0.32)';e.currentTarget.style.color='rgba(160,140,255,0.6)';}}>
        <div style={{fontSize:'24px',opacity:0.5,marginBottom:'4px'}}>+</div>
        Slot {idx+1}
      </button>
    );
  }

  const c = reagentContribution(slot, typId);
  const ok = c && c.ok;
  let name = '';
  if (slot.kind === 'pflanze') name = slot.data.name;
  else if (slot.kind === 'kreatur') {
    name = `${slot.teil}${slot.variante ? ` · ${slot.variante}` : ''}`;
  }

  return (
    <div style={{
      width:'100%', position:'relative',
      background: ok ? 'rgba(124,77,255,0.09)' : 'rgba(220,80,80,0.06)',
      border: `1px solid ${ok ? 'rgba(124,77,255,0.4)' : 'rgba(220,80,80,0.32)'}`,
      borderRadius:'4px', padding:'12px 14px',
      transition:'all 0.2s',
    }}>
      <button onClick={() => onClear(idx)} style={{
        position:'absolute', top:'6px', right:'6px',
        background:'transparent', border:'none', cursor:'pointer',
        fontSize:'12px', color:'rgba(200,180,255,0.5)',
        padding:'2px 6px', borderRadius:'2px',
      }}
        onMouseEnter={e=>{e.currentTarget.style.color='rgba(255,120,120,0.9)';}}
        onMouseLeave={e=>{e.currentTarget.style.color='rgba(200,180,255,0.5)';}}
        title="Entfernen">✕</button>

      <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'8px'}}>
        <span style={{
          fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.18em',
          color:'rgba(160,140,255,0.55)', textTransform:'uppercase',
        }}>Slot {idx+1}</span>
        {slot.kind === 'pflanze' && (
          <span style={{
            fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.16em',
            color:'rgba(110,200,160,0.7)', textTransform:'uppercase',
          }}>🌿 Pflanze</span>
        )}
        {slot.kind === 'kreatur' && (
          <span style={{
            fontFamily:'var(--font-mono)', fontSize:'8px', letterSpacing:'0.16em',
            color:'rgba(220,140,90,0.78)', textTransform:'uppercase',
          }}>◈ Kreaturenteil</span>
        )}
      </div>

      <div style={{
        fontFamily:'var(--font-display)', fontSize:'13.5px', fontWeight:400,
        letterSpacing:'0.08em', color:'rgba(232,225,255,0.95)', marginBottom:'6px',
      }}>{name}</div>

      {slot.kind === 'kreatur' && (
        <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'8px'}}>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.14em',color:'rgba(160,140,255,0.7)',textTransform:'uppercase'}}>HG</span>
          <input type="number" min="0" max="30" value={slot.hg}
            onChange={e=>onHgChange(idx, parseInt(e.target.value||'0',10))}
            style={{
              width:'56px',padding:'2px 6px',background:'rgba(0,0,0,0.3)',
              border:'1px solid rgba(124,77,255,0.3)',borderRadius:'2px',
              fontFamily:'var(--font-mono)',fontSize:'11px',color:'#f0eeff',
            }}/>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.14em',color:'rgba(160,140,255,0.55)'}}>
            → Level {window.hgToLevel(slot.hg)}
          </span>
        </div>
      )}

      <div style={{
        fontFamily:'var(--font-mono)', fontSize:'10.5px', letterSpacing:'0.06em',
        color: ok ? 'rgba(180,155,255,0.9)' : 'rgba(255,120,120,0.85)',
        lineHeight:1.5,
      }}>
        {ok ? c.raw : (c && c.reason)}
      </div>
    </div>
  );
}

// ── Picker dialog ──────────────────────────────────────────────────
function ReagentPicker({ open, onPick, onClose, typId }) {
  const [tab, setTab] = useStateMx('pflanze'); // pflanze | kreatur
  const [search, setSearch] = useStateMx('');
  const typ = KONKOKTION_TYPEN.find(t => t.id === typId);

  const plantsFiltered = useMemoMx(() => {
    const q = search.trim().toLowerCase();
    return window.PFLANZEN
      .filter(p => p[typ.field])
      .filter(p => !q || p.name.toLowerCase().includes(q) || p.seltenheit.toLowerCase().includes(q))
      .sort((a,b) => a.name.localeCompare(b.name, 'de'));
  }, [search, typId]);

  if (!open) return null;

  return (
    <div style={{
      position:'fixed', inset:0, zIndex:500,
      background:'rgba(0,0,0,0.7)', backdropFilter:'blur(8px)',
      display:'flex', alignItems:'center', justifyContent:'center',
      padding:'40px',
      animation:'fadeInUp 0.2s ease',
    }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        width:'100%', maxWidth:'720px', maxHeight:'82vh',
        background:'rgba(10,8,28,0.97)',
        border:'1px solid rgba(124,77,255,0.4)',
        borderRadius:'6px', padding:'24px',
        display:'flex', flexDirection:'column',
        boxShadow:'0 20px 60px rgba(0,0,0,0.7)',
      }}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'18px'}}>
          <div>
            <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.28em',color:'rgba(124,77,255,0.6)',textTransform:'uppercase',marginBottom:'4px'}}>Reagenz wählen</div>
            <div style={{fontFamily:'var(--font-display)',fontSize:'16px',letterSpacing:'0.18em',color:'rgba(232,225,255,0.95)',textTransform:'uppercase'}}>{typ.label}-Wirkung</div>
          </div>
          <button onClick={onClose} style={{
            background:'transparent',border:'1px solid rgba(124,77,255,0.3)',
            borderRadius:'3px',padding:'5px 10px',cursor:'pointer',
            fontFamily:'var(--font-mono)',fontSize:'10px',color:'rgba(200,180,255,0.7)',
            letterSpacing:'0.14em',
          }}>✕ schließen</button>
        </div>

        <div style={{display:'flex',gap:'4px',marginBottom:'14px'}}>
          {[{id:'pflanze',label:'Pflanzen'},{id:'kreatur',label:'Kreaturenteile'}].map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} style={{
              padding:'8px 14px', background: tab===t.id ? 'rgba(124,77,255,0.18)' : 'transparent',
              border: `1px solid ${tab===t.id ? 'rgba(124,77,255,0.55)' : 'rgba(124,77,255,0.18)'}`,
              borderRadius:'3px', cursor:'pointer',
              fontFamily:'var(--font-display)', fontSize:'11px', letterSpacing:'0.16em',
              textTransform:'uppercase',
              color: tab===t.id ? '#f0eeff' : 'rgba(200,190,240,0.65)',
            }}>{t.label}</button>
          ))}
        </div>

        {tab === 'pflanze' && (
          <>
            <input type="text" value={search} onChange={e=>setSearch(e.target.value)}
              placeholder="Pflanze suchen…"
              style={{
                width:'100%', padding:'9px 12px', marginBottom:'14px',
                background:'rgba(0,0,0,0.35)', border:'1px solid rgba(124,77,255,0.25)',
                borderRadius:'3px', fontFamily:'var(--font-body)', fontSize:'12.5px',
                color:'#f0eeff', letterSpacing:'0.04em',
              }} />
            <div style={{flex:1, overflowY:'auto', paddingRight:'4px'}}>
              {plantsFiltered.length === 0 && (
                <div style={{padding:'30px',textAlign:'center',fontFamily:'var(--font-mono)',fontSize:'11px',color:'rgba(160,140,255,0.5)'}}>
                  Keine Pflanze mit {typ.label}-Wirkung gefunden.
                </div>
              )}
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))',gap:'8px'}}>
                {plantsFiltered.map(p => {
                  const rarity = window.RARITY_BY[p.seltenheit];
                  return (
                    <button key={p.id}
                      onClick={()=>{onPick({kind:'pflanze', data:p}); onClose();}}
                      style={{
                        textAlign:'left',
                        padding:'10px 12px',
                        background:'rgba(124,77,255,0.05)',
                        border:'1px solid rgba(124,77,255,0.18)',
                        borderRadius:'3px', cursor:'pointer',
                        transition:'all 0.15s',
                      }}
                      onMouseEnter={e=>{e.currentTarget.style.background='rgba(124,77,255,0.13)';e.currentTarget.style.borderColor='rgba(124,77,255,0.5)';}}
                      onMouseLeave={e=>{e.currentTarget.style.background='rgba(124,77,255,0.05)';e.currentTarget.style.borderColor='rgba(124,77,255,0.18)';}}>
                      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'8px',marginBottom:'4px'}}>
                        <span style={{fontFamily:'var(--font-display)',fontSize:'12px',letterSpacing:'0.04em',color:'#f0eeff'}}>{p.name}</span>
                        <span style={{fontFamily:'var(--font-mono)',fontSize:'8px',letterSpacing:'0.14em',color: rarity ? rarity.hue : 'rgba(160,140,255,0.6)',textTransform:'uppercase'}}>{rarity ? rarity.short : ''}</span>
                      </div>
                      <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',color:'rgba(180,155,255,0.78)',letterSpacing:'0.04em'}}>{p[typ.field]}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {tab === 'kreatur' && (
          <div style={{flex:1, overflowY:'auto', paddingRight:'4px'}}>
            <div style={{
              fontFamily:'var(--font-body)', fontWeight:300, fontSize:'12px',
              lineHeight:1.7, color:'rgba(200,190,240,0.6)',
              marginBottom:'14px', textWrap:'pretty',
            }}>
              Wähle einen Kreaturenteil-Typ. Die HG-Stufe der Kreatur kannst du im Slot anpassen — sie bestimmt das Reagenz-Level (1–4).
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))',gap:'8px'}}>
              {window.KREATURENTEILE_REAGENZIEN.map((part, i) => {
                const wirk = part[KONKOKTION_TYPEN.find(t=>t.id===typId).field];
                const ok = !!wirk;
                return (
                  <button key={i} disabled={!ok}
                    onClick={()=>{
                      if (!ok) return;
                      // Default variante: try to extract from base spec
                      const m = wirk.match(/^(.+?)\s*\(([^)]+)\)$/);
                      const variante = m ? m[2].trim() : null;
                      onPick({ kind:'kreatur', teil: part.teil, hg:5, variante });
                      onClose();
                    }}
                    style={{
                      textAlign:'left',
                      padding:'10px 12px',
                      background: ok ? 'rgba(220,140,90,0.06)' : 'rgba(80,80,100,0.04)',
                      border: `1px solid ${ok ? 'rgba(220,140,90,0.25)' : 'rgba(120,120,140,0.12)'}`,
                      borderRadius:'3px', cursor: ok ? 'pointer' : 'not-allowed',
                      opacity: ok ? 1 : 0.4,
                      transition:'all 0.15s',
                    }}
                    onMouseEnter={e=>{if(ok){e.currentTarget.style.background='rgba(220,140,90,0.14)';e.currentTarget.style.borderColor='rgba(220,140,90,0.55)';}}}
                    onMouseLeave={e=>{if(ok){e.currentTarget.style.background='rgba(220,140,90,0.06)';e.currentTarget.style.borderColor='rgba(220,140,90,0.25)';}}}>
                    <div style={{fontFamily:'var(--font-display)',fontSize:'12px',color:'#f0eeff',marginBottom:'4px',letterSpacing:'0.04em'}}>{part.teil}</div>
                    <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',color: ok ? 'rgba(230,180,140,0.85)' : 'rgba(160,150,180,0.5)',letterSpacing:'0.04em'}}>
                      {wirk || `Keine ${KONKOKTION_TYPEN.find(t=>t.id===typId).label}-Wirkung`}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Mixer ─────────────────────────────────────────────────────
function AlchemyMixer() {
  const [typId, setTypId] = useStateMx('trank');
  const [slots, setSlots] = useStateMx([null, null, null, null]);
  const [pickerIdx, setPickerIdx] = useStateMx(null);

  const setSlot = (i, v) => setSlots(prev => prev.map((s, idx) => idx === i ? v : s));
  const result = useMemoMx(() => aggregate(slots, typId), [slots, typId]);

  const usedCount = slots.filter(s => s).length;
  const seltenheit = result.maxLevel > 0
    ? window.KONKOKTION_SELTENHEIT[result.maxLevel]
    : null;
  const rarityData = seltenheit ? window.RARITY_BY[seltenheit] : null;

  const kosten = usedCount > 0 ? window.HANDWERK_KOSTEN[typId][usedCount] : null;
  const sgHandwerk = seltenheit ? window.RARITY_BY[seltenheit].sg : null;

  let saveInfo = null;
  if (seltenheit && typId === 'bombe') saveInfo = window.BOMBEN_SG_RADIUS[seltenheit];
  if (seltenheit && typId === 'gift')  saveInfo = { sg: window.GIFT_SG[seltenheit] };
  const dauer = seltenheit ? window.KONKOKTION_DAUER[seltenheit] : null;

  function resetMix() { setSlots([null, null, null, null]); }

  return (
    <div style={{margin:'10px 0 26px'}}>
      {/* Type selector */}
      <div style={{display:'flex',gap:'6px',marginBottom:'18px',flexWrap:'wrap'}}>
        {KONKOKTION_TYPEN.map(t => {
          const on = typId === t.id;
          return (
            <button key={t.id}
              onClick={()=>{ setTypId(t.id); }}
              style={{
                padding:'10px 18px', background: on ? 'rgba(124,77,255,0.18)' : 'rgba(10,8,28,0.4)',
                border: `1px solid ${on ? 'rgba(124,77,255,0.6)' : 'rgba(124,77,255,0.2)'}`,
                borderRadius:'4px', cursor:'pointer',
                fontFamily:'var(--font-display)', fontSize:'12px', letterSpacing:'0.2em',
                textTransform:'uppercase',
                color: on ? '#f0eeff' : 'rgba(200,190,240,0.68)',
                display:'flex',alignItems:'center',gap:'10px',
                transition:'all 0.2s',
              }}>
              <span style={{fontSize:'16px'}}>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      <div style={{
        fontFamily:'var(--font-body)',fontWeight:300,fontSize:'12.5px',
        lineHeight:1.7,color:'rgba(200,190,240,0.62)',marginBottom:'18px',
        textWrap:'pretty',fontStyle:'italic',
      }}>
        {KONKOKTION_TYPEN.find(t=>t.id===typId).intro}
      </div>

      <div style={{
        display:'grid', gridTemplateColumns:'minmax(260px, 1fr) minmax(280px, 1fr)',
        gap:'22px', alignItems:'start',
      }}>
        {/* Reagent slots */}
        <div>
          <div style={{
            fontFamily:'var(--font-mono)', fontSize:'9px', letterSpacing:'0.24em',
            color:'rgba(124,77,255,0.6)', textTransform:'uppercase', marginBottom:'10px',
            display:'flex', alignItems:'center', justifyContent:'space-between',
          }}>
            <span>Reagenzien · {usedCount} / 4</span>
            {usedCount > 0 && (
              <button onClick={resetMix} style={{
                background:'transparent', border:'1px solid rgba(124,77,255,0.25)',
                borderRadius:'2px', padding:'3px 8px', cursor:'pointer',
                fontFamily:'var(--font-mono)', fontSize:'8.5px', letterSpacing:'0.18em',
                color:'rgba(180,155,255,0.7)',
              }}>↺ leeren</button>
            )}
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px'}}>
            {[0,1,2,3].map(i => (
              <ReagentSlot key={i} slot={slots[i]} idx={i} typId={typId}
                onPick={(idx)=>setPickerIdx(idx)}
                onClear={(idx)=>setSlot(idx, null)}
                onHgChange={(idx, hg)=>setSlot(idx, { ...slots[idx], hg })} />
            ))}
          </div>
        </div>

        {/* Result */}
        <div style={{
          background:'rgba(10,8,28,0.6)',
          border:`1px solid ${rarityData ? rarityData.hue.replace(/[\d.]+\)$/, '0.4)') : 'rgba(124,77,255,0.22)'}`,
          borderRadius:'4px', padding:'18px 20px',
        }}>
          <div style={{
            fontFamily:'var(--font-mono)', fontSize:'9px', letterSpacing:'0.28em',
            color:'rgba(124,77,255,0.6)', textTransform:'uppercase', marginBottom:'8px',
          }}>Konkoktion</div>

          {result.effekte.length === 0 ? (
            <div style={{
              fontFamily:'var(--font-body)', fontStyle:'italic', fontWeight:300,
              fontSize:'13px', color:'rgba(180,165,235,0.55)', lineHeight:1.7,
              padding:'30px 0', textAlign:'center',
            }}>
              Wähle Reagenzien, um eine Konkoktion zusammenzustellen.
            </div>
          ) : (
            <>
              <div style={{display:'flex',alignItems:'baseline',gap:'10px',marginBottom:'12px',flexWrap:'wrap'}}>
                <div style={{
                  fontFamily:'var(--font-display)', fontSize:'18px', letterSpacing:'0.18em',
                  textTransform:'uppercase', color:'rgba(240,238,255,0.96)',
                }}>{KONKOKTION_TYPEN.find(t=>t.id===typId).label}</div>
                {rarityData && <RarityPill seltenheit={seltenheit} size="md" />}
              </div>

              <div style={{
                fontFamily:'var(--font-mono)', fontSize:'9px', letterSpacing:'0.18em',
                color:'rgba(160,140,255,0.55)', textTransform:'uppercase', marginBottom:'8px',
              }}>Effekte</div>
              <div style={{display:'flex', flexDirection:'column', gap:'6px', marginBottom:'18px'}}>
                {result.effekte.map((e, i) => {
                  const tag = window.RARITY_BY[window.KONKOKTION_SELTENHEIT[e.level]];
                  const eName = `${e.familie} ${['I','II','III','IV'][e.level - 1]}${e.variante ? ` (${e.variante})` : ''}`;
                  // Look up description from canonical catalog
                  const lookup = window.REAGENZ_EFFEKTE[`${e.familie} ${['I','II','III','IV'][e.level - 1]}`]
                              || window.REAGENZ_EFFEKTE[e.familie];
                  return (
                    <div key={i} style={{
                      borderLeft: `2px solid ${tag ? tag.hue : 'rgba(124,77,255,0.5)'}`,
                      paddingLeft:'10px',
                    }}>
                      <div style={{display:'flex',alignItems:'baseline',gap:'8px',justifyContent:'space-between'}}>
                        <span style={{fontFamily:'var(--font-display)',fontSize:'12.5px',color:'rgba(232,225,255,0.95)',letterSpacing:'0.06em'}}>{eName}</span>
                        <span style={{fontFamily:'var(--font-mono)',fontSize:'8px',letterSpacing:'0.16em',color:tag ? tag.hue : 'rgba(160,140,255,0.6)',textTransform:'uppercase'}}>{tag ? tag.short : ''}</span>
                      </div>
                      <div style={{fontFamily:'var(--font-body)',fontSize:'11.5px',fontWeight:300,color:'rgba(200,190,240,0.65)',lineHeight:1.5,marginTop:'2px',textWrap:'pretty'}}>
                        {lookup ? lookup.beschreibung : '—'}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{
                display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px 14px',
                paddingTop:'14px', borderTop:'1px solid rgba(124,77,255,0.15)',
              }}>
                <Spec label="Handwerks-SG" value={sgHandwerk ? `${sgHandwerk}` : '—'} />
                <Spec label="Wirkungsdauer" value={dauer || '—'} />
                <Spec label="Zeit" value={kosten ? window.fmtZeit(kosten.zeit) : '—'} />
                <Spec label="Kosten" value={kosten ? window.fmtHade(kosten.kosten) : '—'} />
                {typId === 'bombe' && (
                  <>
                    <Spec label="Rettungs-SG" value={saveInfo ? `GES SG ${saveInfo.sg}` : '—'} />
                    <Spec label="Radius" value={saveInfo ? saveInfo.radius : '—'} />
                  </>
                )}
                {typId === 'gift' && (
                  <Spec label="Rettungs-SG" value={saveInfo ? `KON SG ${saveInfo.sg}` : '—'} long />
                )}
                {typId === 'trank' && (
                  <Spec label="Anwendung" value="Wird getrunken" long />
                )}
              </div>

              <div style={{marginTop:'16px',paddingTop:'14px',borderTop:'1px solid rgba(124,77,255,0.1)',display:'flex',alignItems:'center',gap:'12px',flexWrap:'wrap'}}>
                <span style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.18em',color:'rgba(160,140,255,0.6)',textTransform:'uppercase'}}>Handwerkswurf</span>
                <DiceButton spec="1W20" label={`gegen SG ${sgHandwerk}`} size="sm" />
              </div>
            </>
          )}
        </div>
      </div>

      <ReagentPicker
        open={pickerIdx !== null}
        typId={typId}
        onPick={(item) => setSlot(pickerIdx, item)}
        onClose={() => setPickerIdx(null)} />
    </div>
  );
}

function Spec({ label, value, long }) {
  return (
    <div style={{gridColumn: long ? 'span 2' : 'auto'}}>
      <div style={{fontFamily:'var(--font-mono)',fontSize:'8.5px',letterSpacing:'0.18em',color:'rgba(160,140,255,0.55)',textTransform:'uppercase',marginBottom:'3px'}}>{label}</div>
      <div style={{fontFamily:'var(--font-display)',fontSize:'13px',letterSpacing:'0.06em',color:'rgba(232,225,255,0.9)'}}>{value}</div>
    </div>
  );
}

Object.assign(window, { AlchemyMixer });
