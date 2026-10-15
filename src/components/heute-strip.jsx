// heute-strip.jsx — Kalenderstreifen „Heute in Meruria“ (Startseite und Spiel-Seite).
// Zeigt das „Heute“ aus dem Kalender (settings.kalender_today, live), mit Sternzeichen, Monden und nächstem Fest.
// ◀ ▶ blättern nur in der Anzeige. Exposes: window.HeuteStrip, window.MoonIcon
import './meruria-kalender.jsx';
;(function () {
const K = window.MeruriaKalender;

/* ── Moon SVG (matches Kalender Interaktiv) ───── */
function MoonIcon({ phaseDay=14, cycleLen=28, vollmondDay=16, color='#d9b06b', size=26 }) {
  const D = phaseDay;
  let ill;
  if (D <= vollmondDay) ill = (D - 1) / Math.max(1, vollmondDay - 1);
  else ill = 1 - (D - vollmondDay) / (cycleLen - vollmondDay + 1);
  ill = Math.max(0, Math.min(1, ill));
  const waxing = D <= vollmondDay;
  const r = 9, cx = 11, cy = 11;
  let body;
  if (ill < 0.02) body = <circle cx={cx} cy={cy} r={r} fill="rgb(var(--panel-rgb))" stroke={color} strokeWidth="1.1"/>;
  else if (ill > 0.98) body = <circle cx={cx} cy={cy} r={r} fill={color} stroke={color} strokeWidth="1.1"/>;
  else {
    const rx = r * Math.abs(1 - 2*ill);
    const outer = waxing ? 1 : 0;
    const inner = (ill < 0.5) ? (waxing ? 0 : 1) : (waxing ? 1 : 0);
    const path = `M${cx},${cy-r} A${r},${r} 0 0,${outer} ${cx},${cy+r} A${rx},${r} 0 0,${inner} ${cx},${cy-r} Z`;
    body = <React.Fragment>
      <circle cx={cx} cy={cy} r={r} fill="rgb(var(--panel-rgb))" stroke={color} strokeWidth="1.1"/>
      <path d={path} fill={color}/>
    </React.Fragment>;
  }
  return <svg viewBox="0 0 22 22" width={size} height={size} style={{flexShrink:0,filter:`drop-shadow(0 0 6px ${color}66)`}}>{body}</svg>;
}

function HeuteStrip() {
  const [offset, setOffset] = React.useState(0);
  const heute = K.useHeute();
  if (heute == null) return <div style={{ minHeight: 96 }} aria-busy="true" />;
  const t = K.tagInfo(heute + offset);
  const fest = K.naechstesFest(heute + offset);
  const heuteFest = t.feste.find(h => h.dayOfFeast >= 1);
  const today = {
    weekday: t.weekday, day: t.day, month: t.month, sign: t.sign, vibe: t.vibe, year: t.yearLabel,
    goldDay: t.goldDay, ashDay: t.ashDay,
    nextHoliday: heuteFest ? heuteFest.name : (fest ? fest.name : '—'),
    daysUntil: heuteFest ? 0 : (fest ? fest.inTagen : 0),
  };
  const isToday = offset === 0;

  const btnBase = {
    width:30, height:30, padding:0,
    display:'inline-flex', alignItems:'center', justifyContent:'center',
    background:'rgba(var(--purple-rgb),calc(0.10*var(--kp)))',
    border:'1px solid rgba(var(--purple-rgb),calc(0.35*var(--kp)))',
    borderRadius:2,
    color:'var(--white)', fontFamily:'var(--font-mono)', fontSize:14,
    cursor:'pointer', transition:'all 0.18s',
    lineHeight:1,
  };
  const onBtnEnter = e => { e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.28*var(--kp)))'; e.currentTarget.style.borderColor='var(--lav2)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.boxShadow='0 0 14px rgba(var(--purple-rgb),calc(0.4*var(--kp)))'; };
  const onBtnLeave = e => { e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.10*var(--kp)))'; e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.35*var(--kp)))'; e.currentTarget.style.color='var(--white)'; e.currentTarget.style.boxShadow='none'; };

  return (
    <div style={{
      position:'relative', overflow:'hidden',
      display:'grid',
      gridTemplateColumns:'auto 1fr auto auto auto',
      alignItems:'center', gap:32,
      padding:'22px 28px 22px 36px',
      background:'linear-gradient(90deg, rgba(var(--panel-rgb),0.85) 0%, rgba(var(--panel-rgb),0.75) 50%, rgba(var(--panel-rgb),0.85) 100%)',
      border:'1px solid rgba(var(--purple-rgb),calc(0.22*var(--kp)))',
      borderRadius:'4px',
      boxShadow:'0 12px 36px rgba(var(--shadow-rgb),calc(0.4 * var(--shadow-k)))',
      transition:'border-color 0.3s',
    }}>
      {/* Date block */}
      <div style={{ display:'flex', alignItems:'baseline', gap:14, flexShrink:0 }}>
        <span style={{
          fontFamily:'var(--font-display)', fontWeight:300,
          fontSize:'52px', color:'var(--white)', lineHeight:1,
          textShadow:'0 0 30px rgba(var(--purple-rgb),calc(0.5*var(--kp)))',
          transition:'opacity 0.2s',
        }}>{today.day}</span>
        <div>
          <div style={{
            fontFamily:'var(--font-display)', fontSize:'16px', fontWeight:400,
            letterSpacing:'0.18em', color:'#d9b06b', textTransform:'uppercase',
          }}>{today.month}</div>
          <div style={{
            fontFamily:'var(--font-mono)', fontSize:'11.5px',
            letterSpacing:'0.25em', color:'rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))',
            textTransform:'uppercase', marginTop:3,
          }}>{today.weekday} · {today.year}</div>
        </div>
      </div>

      {/* Sign + vibe */}
      <div style={{ minWidth:0 }}>
        <div style={{
          fontFamily:'var(--font-mono)', fontSize:'11.5px',
          letterSpacing:'0.3em', color:'rgba(var(--purple-rgb),calc(0.6*var(--kp) + var(--tb)))',
          textTransform:'uppercase', marginBottom:4,
        }}>Im Zeichen</div>
        <div style={{
          fontFamily:'var(--font-display)', fontWeight:400,
          fontSize:'17px', letterSpacing:'0.14em',
          color:'rgba(var(--text-hi-rgb),calc(0.92*var(--kt) + var(--tb)))', textTransform:'uppercase',
        }}>{today.sign}</div>
        <div style={{
          fontFamily:'var(--font-body)', fontWeight:300,
          fontSize:'12.5px', letterSpacing:'0.06em',
          color:'rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))', marginTop:3,
        }}>{today.vibe}</div>
      </div>

      {/* Moons */}
      <div style={{ display:'flex', alignItems:'center', gap:18, flexShrink:0, padding:'0 16px', borderLeft:'1px solid rgba(var(--purple-rgb),calc(0.15*var(--kp)))', borderRight:'1px solid rgba(var(--purple-rgb),calc(0.15*var(--kp)))' }}>
        <div style={{ textAlign:'center' }}>
          <MoonIcon phaseDay={today.goldDay} cycleLen={28} vollmondDay={16} color="#d9b06b" size={30}/>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'0.2em', color:'color-mix(in srgb, rgba(217,176,107,0.7), rgb(var(--ink-rgb)) var(--cm))', textTransform:'uppercase', marginTop:6 }}>Goldmond</div>
        </div>
        <div style={{ textAlign:'center' }}>
          <MoonIcon phaseDay={today.ashDay} cycleLen={17} vollmondDay={12} color="#a8b6d4" size={26}/>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'0.2em', color:'color-mix(in srgb, rgba(168,182,212,0.7), rgb(var(--ink-rgb)) var(--cm))', textTransform:'uppercase', marginTop:6 }}>Aschmond</div>
        </div>
      </div>

      {/* Next holiday */}
      <div style={{ textAlign:'right', flexShrink:0 }}>
        <div style={{
          fontFamily:'var(--font-mono)', fontSize:'11.5px',
          letterSpacing:'0.3em', color:'rgba(var(--purple-rgb),calc(0.6*var(--kp) + var(--tb)))',
          textTransform:'uppercase', marginBottom:4,
        }}>{today.daysUntil === 0 ? 'Fest · heute' : `Nächstes Fest · in ${today.daysUntil} ${today.daysUntil === 1 ? 'Tag' : 'Tagen'}`}</div>
        <div style={{
          fontFamily:'var(--font-display)', fontSize:'15px', fontWeight:400,
          letterSpacing:'0.14em', color:'var(--white)', textTransform:'uppercase',
        }}>{today.nextHoliday}</div>
      </div>

      {/* Day controls */}
      <div style={{
        display:'flex', flexDirection:'column', alignItems:'center', gap:6,
        flexShrink:0, paddingLeft:18, borderLeft:'1px solid rgba(var(--purple-rgb),calc(0.15*var(--kp)))',
      }}>
        <div style={{
          fontFamily:'var(--font-mono)', fontSize:'11px',
          letterSpacing:'0.28em', color:'rgba(var(--accent-rgb),calc(0.55*var(--ka) + var(--tb)))',
          textTransform:'uppercase',
        }}>Tag steuern</div>
        <div style={{ display:'flex', alignItems:'center', gap:6 }}>
          <button
            onClick={() => setOffset(o => o - 1)}
            aria-label="Einen Tag zurück"
            title="Einen Tag zurück"
            style={btnBase}
            onMouseEnter={onBtnEnter}
            onMouseLeave={onBtnLeave}
          >◀</button>
          <button
            onClick={() => setOffset(0)}
            disabled={isToday}
            title="Zurück zu heute"
            style={{
              ...btnBase,
              width:'auto', padding:'0 12px', fontFamily:'var(--font-display)',
              fontSize:12, letterSpacing:'0.22em', textTransform:'uppercase',
              opacity: isToday ? 0.45 : 1,
              cursor: isToday ? 'default' : 'pointer',
            }}
            onMouseEnter={e => { if (!isToday) onBtnEnter(e); }}
            onMouseLeave={e => { if (!isToday) onBtnLeave(e); }}
          >Heute</button>
          <button
            onClick={() => setOffset(o => o + 1)}
            aria-label="Einen Tag weiter"
            title="Einen Tag weiter"
            style={btnBase}
            onMouseEnter={onBtnEnter}
            onMouseLeave={onBtnLeave}
          >▶</button>
        </div>
        <div style={{
          fontFamily:'var(--font-mono)', fontSize:'11px',
          letterSpacing:'0.2em', color: isToday ? 'rgba(var(--accent-rgb),calc(0.4*var(--ka)))' : '#d9b06b',
          textTransform:'uppercase', minHeight:10,
        }}>{isToday ? '— Heute —' : (offset > 0 ? `+${offset} Tag${offset===1?'':'e'}` : `${offset} Tag${offset===-1?'':'e'}`)}</div>
      </div>
    </div>
  );
}

Object.assign(window, { HeuteStrip, MoonIcon });
})();
