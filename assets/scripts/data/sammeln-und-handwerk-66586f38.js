/* ─────────────────────────────────────────────────────────────────
   Sammel-Simulator — Region wählen, Gebiet absuchen, Ressourcen ernten.
   Bildet die zwei Würfe aus Abschnitt IV des Handwerkerhandbuchs ab:
     1) Absuchen-Wurf (INT Naturkunde / WEI Wahrnehmung, +Kräuterkunde)
        → entscheidet SG-Stufe und Mengen je Seltenheit
     2) Ernte-Wurf (INT Naturkunde, +Kräuterkunde, 10 Min pro Versuch)
        → Anteil der gefundenen Menge, der tatsächlich geerntet wird
   ───────────────────────────────────────────────────────────────── */

const { useState: useStateSim, useMemo: useMemoSim } = React;

// Map W20-range row in REGIONEN[i].rolls → rarity tier
// (1–15 = gewöhnlich, 16–18 = ungewöhnlich, 19 = selten, 20 = sehr selten/legendär)
const REGION_TIER_MAP = [
  { range:'1–5',   tier:'gewoehnlich' },
  { range:'6–10',  tier:'gewoehnlich' },
  { range:'11–15', tier:'gewoehnlich' },
  { range:'16–18', tier:'ungewoehnlich' },
  { range:'19',    tier:'selten' },
  { range:'20',    tier:'sehr_selten' },
];

function rollSpecToString(spec) {
  const r = window.rollDice(spec);
  return { total: r.total, rolls: r.rolls };
}

function SammelSimulator() {
  const [regionId, setRegionId] = useStateSim('wald');
  const [bonus, setBonus]       = useStateSim(3);
  const [findRoll, setFindRoll] = useStateSim(null);
  const [pool, setPool]         = useStateSim(null);
  const [harvests, setHarvests] = useStateSim({}); // rarity → { found, harvested, roll }

  const region = window.REGIONEN.find(r => r.id === regionId);

  function rollFinden(diceTotal, diceRaw) {
    // diceTotal = W20 + bonus (DiceButton applied modifier already)
    // diceRaw = { rolls: [W20-result], total: W20-result, ... }
    const w20 = diceRaw.rolls[0];
    const total = diceTotal;
    setFindRoll({ raw:w20, total, bonus });

    // Determine SG-tier and roll quantities per rarity
    let tier = 0;
    if (total >= 30) tier = 5;
    else if (total >= 25) tier = 4;
    else if (total >= 20) tier = 3;
    else if (total >= 15) tier = 2;
    else if (total >= 10) tier = 1;

    const quantities = {};
    if (tier >= 1) quantities.gewoehnlich   = rollSpecToString('1W12');
    if (tier >= 2) quantities.gewoehnlich   = rollSpecToString('2W12+2');
    if (tier >= 3) quantities.gewoehnlich   = rollSpecToString('3W12+4');
    if (tier >= 4) quantities.gewoehnlich   = rollSpecToString('4W12+6');
    if (tier >= 5) quantities.gewoehnlich   = rollSpecToString('5W12+8');

    if (tier >= 2) quantities.ungewoehnlich = rollSpecToString('1W8');
    if (tier >= 3) quantities.ungewoehnlich = rollSpecToString('2W8+2');
    if (tier >= 4) quantities.ungewoehnlich = rollSpecToString('3W8+4');
    if (tier >= 5) quantities.ungewoehnlich = rollSpecToString('4W8+6');

    if (tier >= 3) quantities.selten        = rollSpecToString('1W6');
    if (tier >= 4) quantities.selten        = rollSpecToString('2W6+2');
    if (tier >= 5) quantities.selten        = rollSpecToString('3W6+4');

    if (tier >= 4) quantities.sehr_selten   = rollSpecToString('1W4');
    if (tier >= 5) quantities.sehr_selten   = rollSpecToString('2W4+2');

    if (tier >= 5) {
      const bonus = window.rollDice('1W6');
      quantities.legendaer = { total: 1 + (bonus.total === 6 ? 1 : 0), rolls:[1], bonusRoll: bonus.rolls[0] };
    }

    // Pick which plant from this region for each rarity
    // by rolling on the appropriate W20-range for that tier
    const plantPicks = {};
    Object.keys(quantities).forEach(rarity => {
      if (rarity === 'legendaer') return;
      // Find rows in region that match this rarity
      const rows = region.rolls.map((r, i) => ({ ...r, tier: REGION_TIER_MAP[i].tier }))
                               .filter(r => r.tier === rarity);
      if (rows.length === 0) return;
      // Pick a random row weighted by its W20-range size
      const total = rows.reduce((acc, r) => {
        const m = r.range.match(/^(\d+)(?:–(\d+))?$/);
        const lo = parseInt(m[1], 10), hi = m[2] ? parseInt(m[2], 10) : lo;
        return acc + (hi - lo + 1);
      }, 0);
      let pick = Math.floor(Math.random() * total);
      for (const r of rows) {
        const m = r.range.match(/^(\d+)(?:–(\d+))?$/);
        const lo = parseInt(m[1], 10), hi = m[2] ? parseInt(m[2], 10) : lo;
        const span = hi - lo + 1;
        if (pick < span) { plantPicks[rarity] = r; break; }
        pick -= span;
      }
    });

    setPool({ tier, quantities, plantPicks });
    setHarvests({});
  }

  function rollErnte(rarity, diceTotal, diceRaw) {
    const r = diceRaw.rolls[0];
    const found = pool.quantities[rarity];
    const foundCount = found ? found.total : 0;
    let share = 0, lost = 0, label = '';
    if (r === 1)            { share = 0;   lost = 1;   label = 'Alles zerstört.' }
    else if (r <= 4)        { share = 0.25; lost = 0.75; label = 'Ein Viertel, drei Viertel zerstört.' }
    else if (r <= 7)        { share = 0.5;  lost = 0.5;  label = 'Hälfte, andere Hälfte zerstört.' }
    else if (r <= 11)       { share = 0.25; lost = 0;    label = 'Ein Viertel.' }
    else if (r <= 15)       { share = 0.5;  lost = 0;    label = 'Hälfte.' }
    else                    { share = 1.0;  lost = 0;    label = 'Volle Menge.' }
    const harvested = Math.ceil(foundCount * share);
    setHarvests(h => ({ ...h, [rarity]: { harvested, total: foundCount, label, roll: r } }));
  }

  function reset() {
    setFindRoll(null);
    setPool(null);
    setHarvests({});
  }

  const rarityRows = ['gewoehnlich','ungewoehnlich','selten','sehr_selten','legendaer']
    .filter(rid => pool && pool.quantities[rid]);

  return (
    <div style={{margin:'10px 0 26px'}}>
      <div style={{display:'grid',gridTemplateColumns:'minmax(260px, 0.85fr) minmax(320px, 1.4fr)',gap:'22px',alignItems:'start'}}>
        {/* ── Setup / Region ── */}
        <div style={{
          background:'rgba(10,8,28,0.45)',
          border:'1px solid rgba(124,77,255,0.18)',
          borderRadius:'4px', padding:'18px 20px',
        }}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.24em',color:'rgba(124,77,255,0.6)',textTransform:'uppercase',marginBottom:'14px'}}>Setup</div>

          <FieldRow label="Region">
            <div style={{display:'flex',flexWrap:'wrap',gap:'6px'}}>
              {window.REGIONEN.map(r => {
                const on = r.id === regionId;
                return (
                  <button key={r.id} onClick={()=>{ setRegionId(r.id); reset(); }} style={{
                    padding:'7px 12px',
                    background: on ? 'rgba(124,77,255,0.2)' : 'rgba(124,77,255,0.05)',
                    border: `1px solid ${on ? 'rgba(124,77,255,0.6)' : 'rgba(124,77,255,0.2)'}`,
                    borderRadius:'2px', cursor:'pointer',
                    fontFamily:'var(--font-display)', fontSize:'11px', letterSpacing:'0.14em',
                    color: on ? '#f0eeff' : 'rgba(200,190,240,0.7)',
                    textTransform:'uppercase',
                    display:'flex',alignItems:'center',gap:'7px',
                  }}>
                    <span style={{fontSize:'14px'}}>{r.icon}</span>
                    {r.name}
                  </button>
                );
              })}
            </div>
          </FieldRow>

          <FieldRow label="Bonus" hint="WEI/INT-Modifikator + Kräuterkunde-Übungsbonus (falls geübt)">
            <input type="number" value={bonus} onChange={e=>setBonus(parseInt(e.target.value||'0',10))}
              style={{padding:'4px 8px',background:'rgba(0,0,0,0.3)',border:'1px solid rgba(124,77,255,0.3)',borderRadius:'2px',fontFamily:'var(--font-mono)',fontSize:'12px',color:'#f0eeff',width:'80px'}}/>
          </FieldRow>

          <div style={{height:'1px',background:'rgba(124,77,255,0.12)',margin:'18px 0 16px'}}/>

          <div style={{display:'flex',alignItems:'center',gap:'14px',flexWrap:'wrap'}}>
            <DiceButton spec="1W20" modifier={bonus} label="Gebiet absuchen" size="lg"
              onResult={rollFinden} />
          </div>

          <div style={{
            fontFamily:'var(--font-body)',fontWeight:300,fontSize:'11px',
            color:'rgba(160,140,255,0.5)',marginTop:'12px',fontStyle:'italic',
            letterSpacing:'0.02em',lineHeight:1.5,
          }}>
            15 Minuten pro Ressourcenart. Der Wurf bestimmt automatisch, welche Seltenheiten du erkennst, und würfelt die Mengen.
          </div>

          {findRoll && (
            <div style={{
              marginTop:'16px',padding:'12px 14px',
              background:'rgba(124,77,255,0.08)',
              border:'1px solid rgba(124,77,255,0.3)',
              borderRadius:'3px',
              animation:'resultPop 0.4s ease',
            }}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.18em',color:'rgba(160,140,255,0.6)',textTransform:'uppercase',marginBottom:'6px'}}>Absuchen-Wurf</div>
              <div style={{display:'flex',alignItems:'baseline',gap:'10px',flexWrap:'wrap'}}>
                <span style={{fontFamily:'var(--font-display)',fontSize:'22px',color:'#f0eeff',fontWeight:600}}>{findRoll.total}</span>
                <span style={{fontFamily:'var(--font-mono)',fontSize:'10.5px',color:'rgba(160,140,255,0.7)',letterSpacing:'0.06em'}}>
                  [W20: {findRoll.raw}{findRoll.bonus >= 0 ? ' + ' : ' '}{findRoll.bonus}]
                </span>
              </div>
              <div style={{fontFamily:'var(--font-body)',fontSize:'11.5px',color:'rgba(200,190,240,0.75)',marginTop:'5px',letterSpacing:'0.04em'}}>
                {findRoll.total < 10 && 'Nichts erkannt — Misserfolg.'}
                {findRoll.total >= 10 && findRoll.total < 15 && 'Gewöhnliche Ressourcen erkannt.'}
                {findRoll.total >= 15 && findRoll.total < 20 && 'Gewöhnlich + Ungewöhnlich erkannt.'}
                {findRoll.total >= 20 && findRoll.total < 25 && 'Bis Selten erkannt.'}
                {findRoll.total >= 25 && findRoll.total < 30 && 'Bis Sehr Selten erkannt.'}
                {findRoll.total >= 30 && 'Volle Identifikation — sogar Legendäres.'}
              </div>
            </div>
          )}
        </div>

        {/* ── Pool / Harvest ── */}
        <div style={{
          background:'rgba(10,8,28,0.6)',
          border:'1px solid rgba(124,77,255,0.22)',
          borderRadius:'4px', padding:'18px 20px',
          minHeight:'200px',
        }}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'14px'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.24em',color:'rgba(124,77,255,0.6)',textTransform:'uppercase'}}>Ressourcen-Pool · {region.icon} {region.name}</div>
            {pool && <button onClick={reset} style={{background:'transparent',border:'1px solid rgba(124,77,255,0.25)',borderRadius:'2px',padding:'3px 8px',cursor:'pointer',fontFamily:'var(--font-mono)',fontSize:'8.5px',letterSpacing:'0.18em',color:'rgba(180,155,255,0.7)'}}>↺ Neue Suche</button>}
          </div>

          {!pool ? (
            <div style={{
              fontFamily:'var(--font-body)',fontStyle:'italic',fontWeight:300,
              fontSize:'13px',color:'rgba(180,165,235,0.55)',lineHeight:1.7,
              padding:'40px 0',textAlign:'center',
            }}>
              Suche das Gebiet ab, um zu sehen, welche Ressourcen hier vorkommen.
            </div>
          ) : pool.tier === 0 ? (
            <div style={{
              fontFamily:'var(--font-body)',fontStyle:'italic',fontWeight:300,
              fontSize:'13px',color:'rgba(255,120,120,0.78)',lineHeight:1.7,
              padding:'40px 0',textAlign:'center',
            }}>
              Du findest nichts Verwertbares.<br/>
              <span style={{fontSize:'11px',color:'rgba(160,140,255,0.5)'}}>Mindestens 10 erforderlich.</span>
            </div>
          ) : (
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              {rarityRows.map(rid => {
                const found = pool.quantities[rid];
                const plant = pool.plantPicks[rid];
                const rarity = window.RARITY_BY[rid];
                const harvest = harvests[rid];
                return (
                  <div key={rid} style={{
                    padding:'10px 14px',
                    background:'rgba(124,77,255,0.05)',
                    border:`1px solid ${rarity.hue.replace(/[\d.]+\)$/, '0.3)')}`,
                    borderLeft:`3px solid ${rarity.hue}`,
                    borderRadius:'0 3px 3px 0',
                  }}>
                    <div style={{display:'flex',alignItems:'baseline',gap:'10px',marginBottom:'5px',flexWrap:'wrap'}}>
                      <RarityPill seltenheit={rid} size="sm" />
                      <span style={{fontFamily:'var(--font-display)',fontSize:'13px',color:'rgba(232,225,255,0.95)',letterSpacing:'0.04em'}}>
                        {plant ? plant.label : (rid === 'legendaer' ? 'Legendäre Ressource' : 'Ressource')}
                      </span>
                      <span style={{fontFamily:'var(--font-mono)',fontSize:'10px',color:'rgba(160,140,255,0.65)',marginLeft:'auto',letterSpacing:'0.04em'}}>
                        {found.total} {found.total === 1 ? 'Einheit' : 'Einheiten'} im Vorkommen
                      </span>
                    </div>

                    {harvest ? (
                      <div style={{
                        display:'flex',alignItems:'center',gap:'10px',flexWrap:'wrap',
                        marginTop:'8px',padding:'7px 10px',
                        background:'rgba(0,0,0,0.25)',borderRadius:'2px',
                        animation:'resultPop 0.4s ease',
                      }}>
                        <span style={{fontFamily:'var(--font-mono)',fontSize:'9.5px',color:'rgba(160,140,255,0.7)',letterSpacing:'0.12em',textTransform:'uppercase'}}>Ernte-Wurf</span>
                        <span style={{fontFamily:'var(--font-display)',fontSize:'15px',color: harvest.harvested > 0 ? 'rgba(120,230,180,0.95)' : 'rgba(255,120,120,0.95)',fontWeight:600}}>
                          {harvest.harvested} / {harvest.total}
                        </span>
                        <span style={{fontFamily:'var(--font-body)',fontSize:'11px',color:'rgba(200,190,240,0.72)',fontStyle:'italic'}}>
                          [W20: {harvest.roll}] {harvest.label}
                        </span>
                      </div>
                    ) : (
                      <div style={{marginTop:'7px'}}>
                        <DiceButton spec="1W20" label={`Ernten · 10 Min`} size="sm"
                          onResult={(total, raw)=>rollErnte(rid, total, raw)} />
                      </div>
                    )}
                  </div>
                );
              })}

              <div style={{
                marginTop:'8px',padding:'10px 12px',
                background:'rgba(124,77,255,0.04)',
                borderLeft:'2px solid rgba(124,77,255,0.3)',
                borderRadius:'0 2px 2px 0',
                fontFamily:'var(--font-body)',fontSize:'10.5px',fontWeight:300,
                color:'rgba(180,165,235,0.65)',lineHeight:1.6,fontStyle:'italic',
                letterSpacing:'0.02em',
              }}>
                Die welche Pflanzenart in einer Region vorkommt, hängt vom W20-Wurf auf die Regionstabelle ab — gleiche Seltenheit, aber verschiedene Spezies. Wirf neu, um andere Pflanzen aus derselben Region zu erhalten.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SammelSimulator });
