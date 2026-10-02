// page-hero.jsx — einheitlicher Seitenkopf (Variante „2a": Text links, Ornament, schlank)
// Exposes: window.PageHero
// Props:
//   kicker  — Mono-Label über dem Titel (z. B. "Spielerhandbuch")
//   title   — Seitentitel
//   sub     — kursive Subline (optional)
//   right   — optionaler Slot rechts (z. B. Kapitel-Badges), umbricht auf kleinen Screens

function PageHero({ kicker, title, sub, right = null }) {
  return (
    <div style={{position:'relative',overflow:'hidden',borderBottom:'1px solid rgba(160,140,255,0.1)',background:'linear-gradient(180deg,rgba(16,10,40,0.85) 0%,rgba(7,6,26,0.95) 100%)'}}>
      <div style={{position:'absolute',inset:0,opacity:0.035,pointerEvents:'none',backgroundImage:'linear-gradient(rgba(124,77,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(124,77,255,1) 1px,transparent 1px)',backgroundSize:'100px 100px'}}/>
      <div style={{position:'relative',zIndex:2,padding:'30px 40px 26px',display:'flex',alignItems:'flex-end',justifyContent:'space-between',flexWrap:'wrap',gap:'18px'}}>
        <div style={{maxWidth:'640px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'14px',fontFamily:'var(--font-mono)',fontSize:'8px',letterSpacing:'0.36em',color:'rgba(124,77,255,0.6)',textTransform:'uppercase',marginBottom:'9px'}}>
            {kicker}
            <span style={{display:'inline-block',width:'70px',height:'1px',background:'linear-gradient(to right,rgba(124,77,255,0.5),transparent)'}}/>
          </div>
          <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,2.9vw,34px)',fontWeight:'300',letterSpacing:'0.2em',color:'#f0eeff',textShadow:'0 0 28px rgba(124,77,255,0.28)',lineHeight:1.1,textTransform:'uppercase',margin:'0 0 9px'}}>{title}</h1>
          <div style={{display:'flex',alignItems:'center',gap:'9px',margin:'0 0 12px'}}>
            <span style={{width:'5px',height:'5px',background:'rgba(124,77,255,0.65)',transform:'rotate(45deg)',flexShrink:0}}/>
            <span style={{width:'90px',height:'1px',background:'linear-gradient(to right,rgba(124,77,255,0.45),transparent)'}}/>
          </div>
          {sub && <p style={{fontFamily:'var(--font-body)',fontWeight:300,fontStyle:'italic',fontSize:'12.5px',color:'rgba(200,190,240,0.5)',letterSpacing:'0.04em',lineHeight:1.7,margin:0,maxWidth:'560px'}}>{sub}</p>}
        </div>
        {right}
      </div>
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'32px',background:'linear-gradient(transparent,rgba(5,4,15,0.6))',pointerEvents:'none'}}/>
    </div>
  );
}

window.PageHero = PageHero;
