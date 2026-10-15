import '../../components/cta-button.jsx';
// Kollektikon-Abschnitt (Spiel-Seite); braucht assets/scripts/shared/kollektikon-bar.js
// Verlegt von der Startseite (src/pages/index.jsx) auf die Spiel-Seite (/spiel/index.html).
;(function () {
var { useState:uSx, useEffect:uEx, useRef:uRx, useMemo:uMx } = React;
var { CTAButton } = window; // components/cta-button.jsx
/* ─────────────────────────────────────────────────
   KOLLEKTIKON — abgeleitet aus window.KOLLEKTIKON_*
   KollektikonBar + KOL_CAT_ICONS kommen aus assets/scripts/shared/kollektikon-bar.js
   ───────────────────────────────────────────────── */
// Kollektikon data is now fetched from Supabase inside KollektikonSection.
function KollektikonSection() {
  const [foundCounts, setFoundCounts] = uSx(null);
  uEx(() => {
    async function load() {
      const { data } = await window._sb
        .from('kollektikon_counts')
        .select('cat, menge')
        .gt('menge', 0);
      if (data) {
        const counts = {};
        for (const row of data) counts[row.cat] = (counts[row.cat] || 0) + 1;
        setFoundCounts(counts);
      }
    }
    load();
  }, []);

  const CATS = KOL_CATEGORIES;

  const KOLLEKTIKON_DATA = CATS.map(cat => ({
    ...cat,
    found: foundCounts ? (foundCounts[cat.id] || 0) : 0,
    komplett: 0,
    icon: KOL_CAT_ICONS[cat.id],
  }));

  const totalFound = KOLLEKTIKON_DATA.reduce((s,d) => s + d.found, 0);
  const totalAll   = KOLLEKTIKON_DATA.reduce((s,d) => s + d.total, 0);
  const overallPct = totalAll ? totalFound / totalAll : 0;

  return (
    <div>
      <div style={{ display:'flex', alignItems:'baseline', gap:18, marginBottom:24 }}>
        <span style={{
          fontFamily:'var(--font-mono)', fontSize:'12px',
          letterSpacing:'0.35em', color:'rgba(var(--purple-rgb),calc(0.65*var(--kp) + var(--tb)))',
          textTransform:'uppercase',
        }}>◈ Kollektikon</span>
        <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(var(--purple-rgb),calc(0.5*var(--kp))), rgba(var(--purple-rgb),calc(0.05*var(--kp))))' }}/>
        <span style={{
          fontFamily:'var(--font-mono)', fontSize:'11.5px',
          letterSpacing:'0.28em', color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))',
          textTransform:'uppercase',
        }}>Forschungsstatus · Planet Meruria</span>
      </div>

      <div style={{
        position:'relative', overflow:'visible',
        background:'linear-gradient(135deg, rgba(var(--panel-rgb),0.9) 0%, rgba(var(--panel-rgb),0.85) 100%)',
        border:'1px solid rgba(var(--purple-rgb),calc(0.22*var(--kp)))',
        borderRadius:'4px',
        boxShadow:'0 18px 50px rgba(var(--shadow-rgb),calc(0.5 * var(--shadow-k)))',
      }}>
        {/* corner brackets */}
        <span style={{position:'absolute',top:-1,left:-1,width:14,height:14,borderTop:'1px solid rgba(var(--purple-rgb),calc(0.65*var(--kp)))',borderLeft:'1px solid rgba(var(--purple-rgb),calc(0.65*var(--kp)))'}}/>
        <span style={{position:'absolute',top:-1,right:-1,width:14,height:14,borderTop:'1px solid rgba(var(--purple-rgb),calc(0.65*var(--kp)))',borderRight:'1px solid rgba(var(--purple-rgb),calc(0.65*var(--kp)))'}}/>
        <span style={{position:'absolute',bottom:-1,left:-1,width:14,height:14,borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.65*var(--kp)))',borderLeft:'1px solid rgba(var(--purple-rgb),calc(0.65*var(--kp)))'}}/>
        <span style={{position:'absolute',bottom:-1,right:-1,width:14,height:14,borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.65*var(--kp)))',borderRight:'1px solid rgba(var(--purple-rgb),calc(0.65*var(--kp)))'}}/>

        {/* Header — overall stats */}
        <div style={{
          display:'grid', gridTemplateColumns:'auto 1fr auto',
          gap:24, alignItems:'center',
          padding:'22px 28px',
          borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.18*var(--kp)))',
          background:'rgba(var(--panel-rgb),0.5)',
        }}>
          <div>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'11.5px', letterSpacing:'0.32em', color:'rgba(var(--purple-rgb),calc(0.65*var(--kp) + var(--tb)))', textTransform:'uppercase', marginBottom:6 }}>
              Sammlung der Ressourcen
            </div>
            <div style={{ fontFamily:'var(--font-display)', fontSize:'17px', fontWeight:400, letterSpacing:'0.22em', color:'var(--white)', textTransform:'uppercase' }}>
              Das Kollektikon
            </div>
          </div>
          <div style={{ position:'relative', height:6 }}>
            <div style={{ position:'absolute', inset:0, background:'rgba(var(--purple-rgb),calc(0.08*var(--kp)))', borderRadius:2, overflow:'hidden', border:'1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))' }}>
              <div style={{ position:'absolute', left:0, top:0, bottom:0, width:`${overallPct*100}%`,
                background:'linear-gradient(90deg, rgba(220,215,250,0.18), rgba(var(--text-hi-rgb),calc(0.28*var(--kt))))',
              }}/>
            </div>
          </div>
          <div style={{ textAlign:'right' }}>
            <div style={{ fontFamily:'var(--font-display)', fontSize:'30px', fontWeight:300, color:'var(--white)', lineHeight:1 }}>
              {totalFound}<span style={{ color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))', fontSize:'18px' }}> / {totalAll}</span>
            </div>
            <div style={{ marginTop:5, display:'flex', justifyContent:'flex-end', gap:10, fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase' }}>
              <span style={{ color:'rgba(var(--text-hi-rgb),calc(0.65*var(--kt) + var(--tb)))' }}>
                <span style={{ display:'inline-block', width:7, height:7, background:'rgba(var(--text-hi-rgb),calc(0.85*var(--kt)))', marginRight:4, verticalAlign:'middle' }}/>
                {Math.round(overallPct*100)} % Gesichtet
              </span>
            </div>
          </div>
        </div>

        {/* 4×2 grid of categories */}
        <div style={{ padding:'18px 22px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
          {KOLLEKTIKON_DATA.map((d,i) => <KollektikonBar key={d.id} d={d} i={i}/>)}
        </div>
      </div>

      {/* CTA — Zum vollständigen Kollektikon */}
      <div style={{ marginTop:32 }}>
        <CTAButton href="/spiel/kollektikon.html" label="Zum vollständigen Kollektikon"/>
      </div>
    </div>
  );
}

Object.assign(window, { KollektikonSection });
})();
