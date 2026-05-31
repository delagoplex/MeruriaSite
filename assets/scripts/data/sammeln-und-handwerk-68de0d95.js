/* ─────────────────────────────────────────────────────────────────
   Handwerks-Rechner — wähle Typ + Parameter, sieh sofort:
   Handwerks-SG, Zeit total, Anzahl 2-h-Blöcke, Kosten.
   Modifikatoren: Sicher arbeiten, Helfer (Vorteil), Konsumierbar (halbiert),
   Handschuhe des Handwerkers (Zeit ÷2).
   ───────────────────────────────────────────────────────────────── */

const { useState: useStateCalc, useMemo: useMemoCalc } = React;

const RECHNER_TYPEN = [
  { id:'bombe',     label:'Bombe',                table:'HANDWERK_KOSTEN', sub:'reagenz' },
  { id:'gift',      label:'Gift',                 table:'HANDWERK_KOSTEN', sub:'reagenz' },
  { id:'trank',     label:'Trank',                table:'HANDWERK_KOSTEN', sub:'reagenz' },
  { id:'mahlzeit',  label:'Mahlzeit',             table:'HANDWERK_KOSTEN', sub:'reagenz' },
  { id:'schrift',   label:'Schriftrolle',         table:'SCHRIFTROLLE',    sub:'grad' },
  { id:'magisch',   label:'Magischer Gegenstand', table:'MAGISCHE',        sub:'seltenheit' },
];

function HandwerksRechner() {
  const [typ, setTyp]                 = useStateCalc('trank');
  const [reagenzAnzahl, setReagenzAnzahl] = useStateCalc(2);
  const [seltenheitId, setSeltenheitId]   = useStateCalc('ungewoehnlich');
  const [zaubergrad, setZaubergrad]   = useStateCalc('1. Grad');
  const [sicher, setSicher]           = useStateCalc(false);
  const [konsumierbar, setKonsumierbar] = useStateCalc(false);
  const [handschuhe, setHandschuhe]   = useStateCalc(false);
  const [helfer, setHelfer]           = useStateCalc(false);
  const [bonus, setBonus]             = useStateCalc(5);

  const result = useMemoCalc(() => {
    const typDef = RECHNER_TYPEN.find(t => t.id === typ);
    let zeit = 0, kosten = 0, portionen = null;
    let inferredSeltenheit = null;
    let sgInfo = '';

    if (typDef.table === 'HANDWERK_KOSTEN') {
      const row = window.HANDWERK_KOSTEN[typ][reagenzAnzahl];
      zeit = row.zeit; kosten = row.kosten; portionen = row.portionen;
      // Konkoktion-Seltenheit = Reagenzien-Level. Wir nehmen an, alle Reagenzien
      // dasselbe Level haben (= reagenzAnzahl → Level via Verschmelzung); aber
      // im Rechner zeigen wir nur die Materialkosten. Seltenheit hier ist die
      // mögliche maximale Konkoktion: ein Reagenz = Level 1 minimum.
      // Der SG hängt von der Ziel-Seltenheit ab, nicht direkt von der Reagenzienzahl.
      inferredSeltenheit = null;
      sgInfo = 'Handwerks-SG hängt von der Ziel-Seltenheit ab (siehe unten).';
    } else if (typDef.table === 'SCHRIFTROLLE') {
      const row = window.SCHRIFTROLLE_KOSTEN.find(r => r.grad === zaubergrad);
      zeit = row.zeit; kosten = row.kosten;
      // Heuristic: Zaubergrad → Seltenheit
      const m = { 'Zaubertrick':'gewoehnlich','1. Grad':'gewoehnlich','2. Grad':'ungewoehnlich','3. Grad':'ungewoehnlich','4. Grad':'selten','5. Grad':'selten','6. Grad':'sehr_selten','7. Grad':'sehr_selten','8. Grad':'sehr_selten','9. Grad':'legendaer' };
      inferredSeltenheit = m[zaubergrad];
    } else if (typDef.table === 'MAGISCHE') {
      const row = window.MAGISCHE_GEGENSTAENDE_KOSTEN.find(r => r.seltenheit === seltenheitId);
      zeit = row.stunden; kosten = row.kosten;
      inferredSeltenheit = seltenheitId;
    }

    if (konsumierbar) { zeit = Math.ceil(zeit / 2); kosten = Math.ceil(kosten / 2); }
    if (handschuhe) zeit = Math.ceil(zeit / 2);
    let zeitNote = '';
    if (sicher) { zeit = zeit * 2; zeitNote = 'doppelt (sicher arbeiten)'; }

    // Blöcke (2 h pro Block, Mahlzeit ist sofort)
    const istMahlzeit = (typ === 'mahlzeit');
    const blocks = istMahlzeit ? null : Math.ceil(zeit / 2);

    // Ziel-Seltenheit für SG
    const targetSelt = inferredSeltenheit || seltenheitId;
    const sg = window.RARITY_BY[targetSelt] ? window.RARITY_BY[targetSelt].sg : null;

    return {
      typDef, zeit, kosten, blocks, portionen,
      sg, targetSelt,
      zeitNote, sicher, sgInfo,
      istMahlzeit,
    };
  }, [typ, reagenzAnzahl, seltenheitId, zaubergrad, sicher, konsumierbar, handschuhe]);

  // For HANDWERK_KOSTEN types, let the user pick the target rarity to compute SG
  const showRaritySelector = result.typDef.table === 'HANDWERK_KOSTEN';
  const showReagenzSelector = result.typDef.sub === 'reagenz';

  return (
    <div style={{margin:'10px 0 26px'}}>
      {/* Type selector */}
      <div style={{display:'flex',gap:'6px',marginBottom:'18px',flexWrap:'wrap'}}>
        {RECHNER_TYPEN.map(t => {
          const on = typ === t.id;
          return (
            <button key={t.id} onClick={()=>setTyp(t.id)} style={{
              padding:'8px 14px', background: on ? 'rgba(124,77,255,0.18)' : 'rgba(10,8,28,0.4)',
              border: `1px solid ${on ? 'rgba(124,77,255,0.6)' : 'rgba(124,77,255,0.2)'}`,
              borderRadius:'3px', cursor:'pointer',
              fontFamily:'var(--font-display)', fontSize:'11px', letterSpacing:'0.16em',
              textTransform:'uppercase',
              color: on ? '#f0eeff' : 'rgba(200,190,240,0.68)',
            }}>{t.label}</button>
          );
        })}
      </div>

      <div style={{
        display:'grid', gridTemplateColumns:'minmax(280px, 1fr) minmax(280px, 1fr)',
        gap:'22px', alignItems:'start',
      }}>
        {/* Inputs */}
        <div style={{
          background:'rgba(10,8,28,0.45)',
          border:'1px solid rgba(124,77,255,0.18)',
          borderRadius:'4px', padding:'18px 20px',
        }}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.24em',color:'rgba(124,77,255,0.6)',textTransform:'uppercase',marginBottom:'14px'}}>Parameter</div>

          {showReagenzSelector && (
            <FieldRow label="Anzahl Reagenzien">
              <SegmentPicker value={reagenzAnzahl} onChange={setReagenzAnzahl}
                options={[1,2,3,4].map(n => ({ value:n, label:String(n) }))}/>
            </FieldRow>
          )}

          {showRaritySelector && (
            <FieldRow label="Ziel-Seltenheit (für SG)">
              <SegmentPicker value={seltenheitId} onChange={setSeltenheitId}
                options={window.SELTENHEITEN.filter(s => s.id !== 'legendaer' || typ === 'magisch')
                  .map(s => ({ value:s.id, label:s.short, hint:s.label }))}/>
            </FieldRow>
          )}

          {result.typDef.sub === 'grad' && (
            <FieldRow label="Zaubergrad">
              <select value={zaubergrad} onChange={e=>setZaubergrad(e.target.value)}
                style={selectStyle}>
                {window.SCHRIFTROLLE_KOSTEN.map(r => (
                  <option key={r.grad} value={r.grad}>{r.grad}</option>
                ))}
              </select>
            </FieldRow>
          )}

          {result.typDef.sub === 'seltenheit' && (
            <FieldRow label="Gegenstandsseltenheit">
              <SegmentPicker value={seltenheitId} onChange={setSeltenheitId}
                options={window.SELTENHEITEN.map(s => ({ value:s.id, label:s.short, hint:s.label }))}/>
            </FieldRow>
          )}

          <div style={{height:'1px',background:'rgba(124,77,255,0.12)',margin:'18px 0 16px'}}/>

          <FieldRow label="Handwerks-Bonus" hint="Werkzeug-Übungsbonus + Attributsmodifikator">
            <input type="number" value={bonus} onChange={e=>setBonus(parseInt(e.target.value||'0',10))}
              style={{...inputStyle, width:'80px'}}/>
          </FieldRow>

          <Toggle label="Sicher arbeiten" hint="Doppelte Zeit, automatisch 10 + Bonus" value={sicher} onChange={setSicher}/>
          <Toggle label="Konsumierbar (halbiert)" hint="Tränke, Schriftrollen, Bomben" value={konsumierbar} onChange={setKonsumierbar}/>
          <Toggle label="Handschuhe des Handwerkers" hint="Herstellungszeit halbiert (aufgerundet)" value={handschuhe} onChange={setHandschuhe}/>
          <Toggle label="Helfer mit gleicher Werkzeugübung" hint="Vorteil auf den Handwerkswurf" value={helfer} onChange={setHelfer}/>
        </div>

        {/* Output */}
        <div style={{
          background:'rgba(10,8,28,0.6)',
          border:`1px solid ${window.RARITY_BY[result.targetSelt] ? window.RARITY_BY[result.targetSelt].hue.replace(/[\d.]+\)$/, '0.4)') : 'rgba(124,77,255,0.22)'}`,
          borderRadius:'4px', padding:'18px 20px',
        }}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'14px',flexWrap:'wrap',gap:'8px'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.24em',color:'rgba(124,77,255,0.6)',textTransform:'uppercase'}}>Ergebnis</div>
            {window.RARITY_BY[result.targetSelt] && <RarityPill seltenheit={result.targetSelt} size="md" />}
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px 14px'}}>
            <BigSpec label="Handwerks-SG" value={result.sg ?? '—'} />
            <BigSpec label="2-h-Blöcke"   value={result.blocks ?? (result.istMahlzeit ? 'sofort' : '—')} />
            <BigSpec label="Gesamtzeit"   value={window.fmtZeit(result.zeit)} note={result.zeitNote} />
            <BigSpec label="Materialkosten" value={window.fmtHade(result.kosten)} />
            {result.portionen != null && <BigSpec label="Portionen" value={result.portionen} />}
            {result.istMahlzeit && <BigSpec label="Tagesfortschritt" value="bis 8 h" />}
          </div>

          <div style={{marginTop:'18px',paddingTop:'14px',borderTop:'1px solid rgba(124,77,255,0.12)'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.18em',color:'rgba(160,140,255,0.55)',textTransform:'uppercase',marginBottom:'10px'}}>
              Handwerkswurf {result.sg ? `(SG ${result.sg})` : ''}
            </div>
            {sicher ? (
              <div style={{
                fontFamily:'var(--font-body)',fontWeight:300,fontSize:'12.5px',
                color:'rgba(200,190,240,0.78)',lineHeight:1.6,fontStyle:'italic',
              }}>
                Sicher arbeiten: automatisch <Hl c={`${10 + bonus}`} /> · {result.sg && (10 + bonus >= result.sg ? <span style={{color:'rgba(120,230,180,0.95)'}}>Erfolg</span> : <span style={{color:'rgba(255,120,120,0.95)'}}>Fehlschlag</span>)}
              </div>
            ) : (
              <div style={{display:'flex',alignItems:'center',gap:'12px',flexWrap:'wrap'}}>
                <DiceButton spec="1W20" modifier={bonus}
                  label={`1W20${bonus >= 0 ? '+' : ''}${bonus}`}
                  onResult={(total, raw)=>{}}
                  size="md"/>
                {helfer && (
                  <DiceButton spec="1W20" modifier={bonus}
                    label="Helfer-Wurf"
                    size="sm" tone="good"/>
                )}
                <span style={{fontFamily:'var(--font-mono)',fontSize:'9.5px',letterSpacing:'0.12em',color:'rgba(160,140,255,0.55)'}}>
                  {helfer ? 'Vorteil = der höhere Wurf' : 'pro 2-h-Block'}
                </span>
              </div>
            )}
          </div>

          {result.istMahlzeit && (
            <div style={{
              marginTop:'14px',padding:'10px 12px',
              background:'rgba(124,77,255,0.06)',
              borderLeft:'2px solid rgba(124,77,255,0.4)',
              borderRadius:'0 3px 3px 0',
              fontFamily:'var(--font-body)',fontSize:'11.5px',fontWeight:300,
              color:'rgba(200,190,240,0.72)',lineHeight:1.6,
            }}>
              Mahlzeiten haben keine Materialkosten — du brauchst nur die Zutaten selbst (siehe Pflanzentabelle).
              Mit dem Koch-Talent: Zeit halbieren, Portionen = Tabellenwert oder 4 + Übungsbonus (das Höhere).
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FieldRow({ label, hint, children }) {
  return (
    <div style={{marginBottom:'14px'}}>
      <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.18em',color:'rgba(160,140,255,0.7)',textTransform:'uppercase',marginBottom:'6px'}}>{label}</div>
      {hint && (
        <div style={{fontFamily:'var(--font-body)',fontSize:'10.5px',fontWeight:300,color:'rgba(160,140,255,0.5)',marginBottom:'7px',letterSpacing:'0.03em'}}>{hint}</div>
      )}
      {children}
    </div>
  );
}

function SegmentPicker({ value, onChange, options }) {
  return (
    <div style={{display:'inline-flex', flexWrap:'wrap', gap:'4px'}}>
      {options.map(o => {
        const on = value === o.value;
        return (
          <button key={o.value} onClick={()=>onChange(o.value)} title={o.hint}
            style={{
              padding:'5px 12px',
              background: on ? 'rgba(124,77,255,0.22)' : 'rgba(124,77,255,0.05)',
              border: `1px solid ${on ? 'rgba(124,77,255,0.6)' : 'rgba(124,77,255,0.2)'}`,
              borderRadius:'2px', cursor:'pointer',
              fontFamily:'var(--font-mono)', fontSize:'10.5px', letterSpacing:'0.14em',
              color: on ? '#f0eeff' : 'rgba(200,190,240,0.7)',
              textTransform:'uppercase',
            }}>{o.label}</button>
        );
      })}
    </div>
  );
}

function Toggle({ label, hint, value, onChange }) {
  return (
    <label style={{
      display:'flex', alignItems:'flex-start', gap:'10px',
      padding:'7px 0', cursor:'pointer',
    }}>
      <span style={{
        flexShrink:0, width:'14px', height:'14px', marginTop:'2px',
        background: value ? 'rgba(124,77,255,0.4)' : 'rgba(0,0,0,0.3)',
        border: `1px solid ${value ? 'rgba(124,77,255,0.85)' : 'rgba(124,77,255,0.3)'}`,
        borderRadius:'2px',
        display:'flex',alignItems:'center',justifyContent:'center',
        transition:'all 0.15s',
      }}>
        {value && <svg width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="#f0eeff" strokeWidth="1.6"/></svg>}
      </span>
      <input type="checkbox" checked={value} onChange={e=>onChange(e.target.checked)} style={{display:'none'}}/>
      <div style={{flex:1}}>
        <div style={{fontFamily:'var(--font-body)',fontSize:'12.5px',fontWeight:400,color:'rgba(220,210,250,0.88)',letterSpacing:'0.03em'}}>{label}</div>
        {hint && <div style={{fontFamily:'var(--font-body)',fontSize:'10.5px',fontWeight:300,color:'rgba(160,140,255,0.55)',marginTop:'2px',letterSpacing:'0.02em'}}>{hint}</div>}
      </div>
    </label>
  );
}

function BigSpec({ label, value, note }) {
  return (
    <div>
      <div style={{fontFamily:'var(--font-mono)',fontSize:'8.5px',letterSpacing:'0.18em',color:'rgba(160,140,255,0.55)',textTransform:'uppercase',marginBottom:'4px'}}>{label}</div>
      <div style={{fontFamily:'var(--font-display)',fontSize:'18px',letterSpacing:'0.06em',color:'rgba(240,235,255,0.96)',fontWeight:400}}>{value}</div>
      {note && <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.12em',color:'rgba(160,140,255,0.5)',fontStyle:'italic',marginTop:'2px'}}>{note}</div>}
    </div>
  );
}

const inputStyle = {
  padding:'4px 8px', background:'rgba(0,0,0,0.3)',
  border:'1px solid rgba(124,77,255,0.3)', borderRadius:'2px',
  fontFamily:'var(--font-mono)', fontSize:'12px', color:'#f0eeff',
};
const selectStyle = {
  padding:'5px 8px', background:'rgba(0,0,0,0.4)',
  border:'1px solid rgba(124,77,255,0.3)', borderRadius:'2px',
  fontFamily:'var(--font-body)', fontSize:'12.5px', color:'#f0eeff',
  letterSpacing:'0.04em',
};

Object.assign(window, { HandwerksRechner });
