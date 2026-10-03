// page-hero.jsx — einheitlicher Seitenkopf (Variante „2a": Text links, Ornament, schlank)
// Exposes: window.PageHero
// Props:
//   kicker  — Mono-Label über dem Titel (z. B. "Spielerhandbuch")
//   title   — Seitentitel
//   sub     — kursive Subline (optional)
//   right   — optionaler Slot rechts (z. B. Kapitel-Badges), umbricht auf kleinen Screens

function PageHero({ kicker, title, sub, right = null }) {
  return (
    <div style={{position:'relative',overflow:'hidden',borderBottom:'1px solid rgba(var(--accent-rgb),calc(0.1*var(--ka)))',background:'linear-gradient(180deg,rgba(var(--panel-rgb),0.85) 0%,rgba(var(--panel-rgb),0.95) 100%)'}}>
      <div style={{position:'absolute',inset:0,opacity:0.035,pointerEvents:'none',backgroundImage:'linear-gradient(rgba(var(--purple-rgb),calc(1*var(--kp))) 1px,transparent 1px),linear-gradient(90deg,rgba(var(--purple-rgb),calc(1*var(--kp))) 1px,transparent 1px)',backgroundSize:'100px 100px'}}/>
      <div style={{position:'relative',zIndex:2,padding:'30px 40px 26px',display:'flex',alignItems:'flex-end',justifyContent:'space-between',flexWrap:'wrap',gap:'18px'}}>
        <div style={{maxWidth:'640px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'14px',fontFamily:'var(--font-mono)',fontSize:'8px',letterSpacing:'0.36em',color:'rgba(var(--purple-rgb),calc(0.6*var(--kp) + var(--tb)))',textTransform:'uppercase',marginBottom:'9px'}}>
            {kicker}
            <span style={{display:'inline-block',width:'70px',height:'1px',background:'linear-gradient(to right,rgba(var(--purple-rgb),calc(0.5*var(--kp))),transparent)'}}/>
          </div>
          <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,2.9vw,34px)',fontWeight:'300',letterSpacing:'0.2em',color:'var(--white)',textShadow:'0 0 28px rgba(var(--purple-rgb),calc(0.28*var(--kp)))',lineHeight:1.1,textTransform:'uppercase',margin:'0 0 9px'}}>{title}</h1>
          <div style={{display:'flex',alignItems:'center',gap:'9px',margin:'0 0 12px'}}>
            <span style={{width:'5px',height:'5px',background:'rgba(var(--purple-rgb),calc(0.65*var(--kp)))',transform:'rotate(45deg)',flexShrink:0}}/>
            <span style={{width:'90px',height:'1px',background:'linear-gradient(to right,rgba(var(--purple-rgb),calc(0.45*var(--kp))),transparent)'}}/>
          </div>
          {sub && <p style={{fontFamily:'var(--font-body)',fontWeight:300,fontStyle:'italic',fontSize:'12.5px',color:'rgba(var(--text-rgb),calc(0.5*var(--kt) + var(--tb)))',letterSpacing:'0.04em',lineHeight:1.7,margin:0,maxWidth:'560px'}}>{sub}</p>}
        </div>
        {right}
      </div>
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'32px',background:'linear-gradient(transparent,rgba(var(--bg-rgb),0.6))',pointerEvents:'none'}}/>
    </div>
  );
}

window.PageHero = PageHero;
