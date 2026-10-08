// Page entry for /enzyklopaedie/galerie.html
import '../../components/nav.jsx';
import '../../components/page-header.jsx';
import '../../components/site-gate.jsx';
import '../../components/carousel.jsx';

;(function () {
// top-level functions were global in the old classic-script setup
Object.assign(window, { fmtDate, mkBg, Tag, ImgPlaceholder, FeaturedDisplay, CollectionCard, OverlayImageCard, CollectionOverlay, ImageModal, _monsterKolId, GalleryPage });

var { useState, useEffect, useRef } = React;

/* YYYY-MM-DD → DD-MM-YYYY */
function fmtDate(d) { if (!d) return ''; const [y,m,day] = d.split('-'); return `${day}-${m}-${y}`; }

/* Striped bg per hue */
function mkBg(hue) {
  return `repeating-linear-gradient(-45deg,oklch(0.14 0.05 ${hue}),oklch(0.14 0.05 ${hue}) 12px,oklch(0.105 0.025 ${hue}) 12px,oklch(0.105 0.025 ${hue}) 24px)`;
}

var COLLECTIONS     = window.GALERIE_COLLECTIONS;
var ALL_IMAGES      = window.GALERIE_ALL_IMAGES;
var DEFAULT_FEATURED = window.GALERIE_DEFAULT_FEATURED;

/* ── Tag chip ─────────────────────────────────── */
function Tag({ label, small }) {
  return (
    <span style={{
      fontFamily:'var(--font-mono)', fontSize: small ? 7 : 9,
      padding: small ? '1px 4px' : '2px 7px',
      background:'rgba(var(--purple-rgb),calc(0.13*var(--kp)))',
      border:'1px solid rgba(var(--purple-rgb),calc(0.3*var(--kp)))',
      borderRadius:2, color:'rgba(var(--text-rgb),calc(0.82*var(--kt) + var(--tb)))',
      letterSpacing:'0.05em', flexShrink:0, lineHeight:1.5,
    }}>{label}</span>
  );
}

/* ── Image placeholder — Aarakocra / race-detail style ── */
/* fill=true → position:absolute inset:0, stretches to a parent with defined size */
function ImgPlaceholder({ label, height, hue, img, fill, fit }) {
  if (img) {
    return (
      <div style={ fill
        ? { position:'absolute', inset:0, overflow:'hidden' }
        : { width:'100%', height: height || 300, position:'relative', overflow:'hidden', borderRadius:'3px', flexShrink:0 }
      }>
        <img src={img} alt={label || 'artwork'} loading="lazy" style={{ width:'100%', height:'100%', objectFit: fit || 'cover', display:'block' }} />
      </div>
    );
  }
  const h = hue || 270;
  const ac = `oklch(0.65 0.18 ${h})`;
  const acStripe = `oklch(0.65 0.18 ${h} / 0.14)`;
  const acDash   = `oklch(0.65 0.18 ${h} / 0.52)`;
  return (
    <div style={{
      ...(fill
        ? { position:'absolute', inset:0 }
        : { position:'relative', width:'100%', height: height || 300, flexShrink:0 }
      ),
      background:`repeating-linear-gradient(-45deg,transparent,transparent 8px,${acStripe} 8px,${acStripe} 9px),linear-gradient(160deg,rgba(var(--panel-rgb),0.97) 0%,rgba(var(--panel-rgb),0.98) 100%)`,
      border:`1px dashed ${acDash}`,
      borderRadius:'3px',
      display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:10,
      overflow:'hidden',
    }}>
      <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 50% 45%,oklch(0.65 0.18 ${h} / 0.22) 0%,transparent 60%)` }} />
      {/* Landscape image icon */}
      <svg viewBox="0 0 40 30" width="34" height="26" fill="none" style={{ opacity:0.6, zIndex:1 }}>
        <rect x="1" y="1" width="38" height="28" rx="2" stroke={ac} strokeWidth="1.2"/>
        <circle cx="12" cy="11" r="4" stroke={ac} strokeWidth="1" opacity="0.8"/>
        <path d="M1 22 L10 15 L18 20 L26 13 L39 22" stroke={ac} strokeWidth="1.1" opacity="0.8"/>
      </svg>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'0.22em', color:`oklch(0.65 0.18 ${h} / 0.65)`, textTransform:'uppercase', zIndex:1, textAlign:'center', padding:'0 16px' }}>
        artwork — {label ? label.toLowerCase() : 'bild'}
      </span>
    </div>
  );
}

/* ── FeaturedDisplay (A + B) ──────────────────── */
function FeaturedDisplay({ image }) {
  const accent = 'rgba(var(--purple-rgb),';
  return (
    <div key={image.id} style={{ display:'flex', flexDirection:'column', animation:'fadeInUp 0.32s ease' }}>
      {/* A — main image */}
      <div style={{ position:'relative', borderRadius:'4px 4px 0 0', overflow:'hidden', border:`1px solid ${accent}0.45)` }}>
        <ImgPlaceholder label={image.title} height={640} hue={image.hue} img={image.img} fit="contain" />
        {/* Corner accents */}
        <div style={{ position:'absolute',top:0,left:0,width:18,height:18,borderTop:`2px solid ${accent}0.62)`,borderLeft:`2px solid ${accent}0.62)`,pointerEvents:'none' }} />
        <div style={{ position:'absolute',top:0,right:0,width:18,height:18,borderTop:`2px solid ${accent}0.62)`,borderRight:`2px solid ${accent}0.62)`,pointerEvents:'none' }} />
        <div style={{ position:'absolute',bottom:0,left:0,width:18,height:18,borderBottom:`2px solid ${accent}0.35)`,borderLeft:`2px solid ${accent}0.35)`,pointerEvents:'none' }} />
        <div style={{ position:'absolute',bottom:0,right:0,width:18,height:18,borderBottom:`2px solid ${accent}0.35)`,borderRight:`2px solid ${accent}0.35)`,pointerEvents:'none' }} />
        {/* Collection badge */}
        <div style={{ position:'absolute',top:12,left:12, fontFamily:'var(--font-mono)',fontSize:8, padding:'3px 9px', background:'rgba(var(--purple-rgb),calc(0.18*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.42*var(--kp)))', borderRadius:2, color:'rgba(var(--text-rgb),calc(0.88*var(--kt) + var(--tb)))', letterSpacing:'0.14em', textTransform:'uppercase', animation:'pulseGlow 3s ease-in-out infinite' }}>
          {image.collectionName}
        </div>
      </div>
      {/* B — info */}
      <div style={{ padding:'14px 17px 13px', background:'rgba(var(--panel-rgb),0.97)', border:'1px solid rgba(var(--purple-rgb),calc(0.32*var(--kp)))', borderTop:'none', borderRadius:'0 0 4px 4px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:10, marginBottom:7 }}>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, fontSize:16, letterSpacing:'0.16em', color:'var(--white)', textTransform:'uppercase' }}>
            {image.title}
          </h2>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'rgba(var(--purple-rgb),calc(0.62*var(--kp) + var(--tb)))', whiteSpace:'nowrap', paddingTop:3 }}>
            {fmtDate(image.date)}
          </span>
        </div>
        <p style={{ fontFamily:'var(--font-body)', fontSize:12, fontWeight:300, color:'var(--silver)', lineHeight:1.7, marginBottom:10 }}>
          {image.desc}
        </p>
        <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
          {image.tags && image.tags.map(t => <Tag key={t} label={t} />)}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { COLLECTIONS, ALL_IMAGES, DEFAULT_FEATURED, mkBg, fmtDate, Tag, ImgPlaceholder, FeaturedDisplay });


var { useState: useS2, useEffect: useE2, useRef: useR2 } = React;
var { mkBg: mkB2, fmtDate, Tag: TagC, ImgPlaceholder: ImgPH } = window;

/* ── CollectionCard — race-card-inspired ──────── */
function CollectionCard({ collection, onClick }) {
  const [hov, setHov] = useS2(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position:'relative', height:240, borderRadius:4,
        cursor:'pointer', overflow:'hidden',
        border: hov ? '1px solid rgba(var(--purple-rgb),calc(0.65*var(--kp)))' : '1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))',
        boxShadow: hov ? '0 10px 40px rgba(var(--shadow-rgb),calc(0.65 * var(--shadow-k))),0 0 22px rgba(var(--purple-rgb),calc(0.18*var(--kp)))' : '0 2px 14px rgba(var(--shadow-rgb),calc(0.45 * var(--shadow-k)))',
        transform: hov ? 'translateY(-3px) scale(1.01)' : 'translateY(0) scale(1)',
        transition: hov ? 'all 0.09s linear' : 'all 0.45s cubic-bezier(0.23,1,0.32,1)',
      }}
    >
      {/* BG pattern */}
      <div style={{ position:'absolute', inset:0, background: mkB2(collection.hue), filter: hov ? 'brightness(0.6)' : 'brightness(0.38)', transition:'filter 0.4s ease' }} />
      {/* Bottom gradient */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(var(--bg-rgb),0.92) 0%,rgba(var(--bg-rgb),0.5) 55%,rgba(var(--bg-rgb),0.1) 100%)', opacity: hov ? 0.6 : 1, transition:'opacity 0.4s ease' }} />
      {/* Radial glow on hover */}
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 40%,rgba(var(--purple-rgb),calc(0.18*var(--kp))) 0%,transparent 65%)', opacity: hov ? 1 : 0, transition:'opacity 0.3s ease', pointerEvents:'none' }} />
      {/* Wedge */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:50, background:'linear-gradient(to top,rgba(var(--bg-rgb),0.9) 0%,transparent 100%)', clipPath:'polygon(0% 45%,100% 0%,100% 100%,0% 100%)', opacity: hov ? 1 : 0, transition:'opacity 0.3s ease', pointerEvents:'none' }} />
      {/* Content */}
      <div style={{ position:'absolute', inset:0, padding:'12px 15px', display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontFamily:'var(--font-display)', fontSize:12, fontWeight:400, letterSpacing:'0.16em', color:'var(--white)', textTransform:'uppercase', textShadow:'0 2px 12px rgba(0,0,0,0.8)' }}>
              {collection.name}
            </div>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:8, color: hov ? 'color-mix(in srgb, rgba(180,155,255,0.9), rgb(var(--ink-rgb)) var(--cm))' : 'rgba(var(--purple-rgb),calc(0.55*var(--kp)))', marginTop:3, letterSpacing:'0.12em', transition:'color 0.2s' }}>
              {collection.images.length} Bilder
            </div>
          </div>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:13, color:'rgba(var(--purple-rgb),calc(0.85*var(--kp) + var(--tb)))', opacity: hov ? 1 : 0, transform: hov ? 'translateX(0)' : 'translateX(6px)', transition:'all 0.2s ease' }}>→</div>
        </div>
      </div>
    </div>
  );
}

/* ── Image card inside overlay ────────────────── */
function OverlayImageCard({ image, onSelect }) {
  const [hov, setHov] = useS2(false);
  const hidden = image.hidden;
  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position:'relative', borderRadius:4, overflow:'hidden', cursor:'pointer',
        border: hov ? '1px solid rgba(var(--purple-rgb),calc(0.55*var(--kp)))' : hidden ? '1px solid rgba(var(--accent-rgb),calc(0.12*var(--ka)))' : '1px solid rgba(var(--purple-rgb),calc(0.16*var(--kp)))',
        boxShadow: hov ? '0 8px 32px rgba(var(--shadow-rgb),calc(0.6 * var(--shadow-k))),0 0 16px rgba(var(--purple-rgb),calc(0.12*var(--kp)))' : '0 2px 12px rgba(var(--shadow-rgb),calc(0.4 * var(--shadow-k)))',
        transform: hov ? 'translateY(-2px)' : 'none',
        transition: hov ? 'all 0.1s linear' : 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
        background:'rgba(var(--panel-rgb),0.9)',
        filter: hidden ? 'grayscale(0.7) brightness(0.7)' : 'none',
        opacity: hidden ? 0.72 : 1,
      }}
    >
      <ImgPH label={image.title} height={175} hue={image.hue} img={image.img} />
      {hidden && (
        <div style={{
          position:'absolute', top:8, right:8, zIndex:2,
          fontFamily:'var(--font-mono)', fontSize:7.5, letterSpacing:'0.18em',
          padding:'2px 7px', borderRadius:2, textTransform:'uppercase',
          background:'rgba(var(--bg-rgb),0.75)', border:'1px solid rgba(var(--accent-rgb),calc(0.25*var(--ka)))',
          color:'rgba(var(--accent-rgb),calc(0.55*var(--ka) + var(--tb)))',
        }}>○ Verborgen</div>
      )}
      <div style={{ padding:'12px 14px 13px' }}>
        <div style={{ fontFamily:'var(--font-display)', fontSize:11, fontWeight:400, letterSpacing:'0.14em', color: hidden ? 'rgba(var(--text-rgb),calc(0.5*var(--kt)))' : 'rgba(var(--text-hi-rgb),calc(0.92*var(--kt)))', textTransform:'uppercase', marginBottom:4 }}>
          {image.title}
        </div>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'rgba(var(--purple-rgb),calc(0.6*var(--kp) + var(--tb)))', marginBottom:7 }}>
          {fmtDate(image.date)}
        </div>
        <p style={{ fontFamily:'var(--font-body)', fontSize:11, fontWeight:300, color:'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))', lineHeight:1.65, marginBottom:8, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>
          {image.desc}
        </p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
          {image.tags && image.tags.map(t => <TagC key={t} label={t} small />)}
        </div>
      </div>
    </div>
  );
}

/* ── CollectionOverlay — full-screen panel ────── */
function CollectionOverlay({ collection, onClose, onSelectImage }) {
  useE2(() => {
    document.body.style.overflow = 'hidden';
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, []);

  return (
    <div style={{ position:'fixed', inset:0, zIndex:600, overflowY:'auto', background:'rgba(var(--bg-rgb),0.98)', backdropFilter:'blur(6px)', animation:'overlayIn 0.22s ease' }}>
      {/* Sticky header */}
      <div className="gal-head" style={{ position:'sticky', top:0, zIndex:10, display:'flex', alignItems:'center', gap:18, padding:'13px 28px', background:'rgba(var(--bg-rgb),0.97)', borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.14*var(--kp)))', backdropFilter:'blur(12px)' }}>
        <button
          onClick={onClose}
          style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'var(--font-body)', fontWeight:300, fontSize:11, letterSpacing:'0.12em', color:'rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))', background:'rgba(var(--purple-rgb),calc(0.07*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))', padding:'7px 14px', borderRadius:3, cursor:'pointer', transition:'all 0.2s', textDecoration:'none', flexShrink:0 }}
          onMouseEnter={e => { e.currentTarget.style.color='var(--white)'; e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.15*var(--kp)))'; e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.48*var(--kp)))'; }}
          onMouseLeave={e => { e.currentTarget.style.color='rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))'; e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.07*var(--kp)))'; e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.2*var(--kp)))'; }}
        >
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" style={{ opacity:0.7 }}>
            <path d="M11 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          Zurück zur Galerie
        </button>
        <div className="gal-head-title" style={{ flex:1 }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'0.25em', color:'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))', textTransform:'uppercase', marginBottom:3 }}>
            Sammlung
          </div>
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:16, fontWeight:300, letterSpacing:'0.22em', color:'var(--white)', textTransform:'uppercase' }}>
            {collection.name}
          </h2>
        </div>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))' }}>
          {collection.images.length} Bilder
        </span>
      </div>

      {/* Breadcrumb / divider */}
      <div style={{ padding:'20px 28px 4px' }}>
        <div style={{ width:40, height:1, background:'linear-gradient(90deg,rgba(var(--purple-rgb),calc(0.7*var(--kp))),transparent)' }} />
      </div>

      {/* Image grid */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:18, padding:'12px 28px 48px' }}>
        {collection.images.map(img => (
          <OverlayImageCard
            key={img.id}
            image={img}
            onSelect={() => onSelectImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

// Carousel loaded from assets/components/carousel.jsx

/* ── ImageModal ───────────────────────────────── */
function ImageModal({ image, onClose }) {
  useE2(() => {
    document.body.style.overflow = 'hidden';
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, []);

  return (
    <div
      onClick={onClose}
      style={{ position:'fixed', inset:0, zIndex:700, display:'flex', alignItems:'center', justifyContent:'center', padding:24, background:'rgba(var(--bg-rgb),0.82)', backdropFilter:'blur(10px)', animation:'overlayIn 0.18s ease' }}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="gal-modal"
        style={{ display:'flex', width:'100%', maxWidth:940, maxHeight:'calc(var(--vh, 1vh) * 88)', borderRadius:6, overflow:'hidden', border:'1px solid rgba(var(--purple-rgb),calc(0.38*var(--kp)))', boxShadow:'0 28px 90px rgba(var(--shadow-rgb),calc(0.85 * var(--shadow-k)))', background:'rgba(var(--panel-rgb),0.99)' }}
      >
        {/* Image panel */}
        <div className="gal-modal-img" style={{ flex:'0 0 58%', minHeight:400, position:'relative', background:'#000' }}>
          {image.img
            ? <img src={image.img} alt={image.title} loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
            : <ImgPH label={image.title} height="100%" hue={image.hue} />
          }
        </div>

        {/* Info panel */}
        <div className="gal-modal-info" style={{ flex:1, display:'flex', flexDirection:'column', overflowY:'auto', padding:'28px 26px 28px' }}>
          {/* Close */}
          <button
            className="gal-modal-close"
            onClick={onClose}
            style={{ alignSelf:'flex-end', background:'rgba(var(--purple-rgb),calc(0.08*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.22*var(--kp)))', borderRadius:3, color:'rgba(var(--text-rgb),calc(0.5*var(--kt) + var(--tb)))', cursor:'pointer', fontFamily:'var(--font-mono)', fontSize:12, lineHeight:1, padding:'6px 9px', marginBottom:20, transition:'all 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.color='var(--white)'; e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.18*var(--kp)))'; e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.5*var(--kp)))'; }}
            onMouseLeave={e => { e.currentTarget.style.color='rgba(var(--text-rgb),calc(0.5*var(--kt) + var(--tb)))'; e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.08*var(--kp)))'; e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.22*var(--kp)))'; }}
          >✕</button>

          {/* Collection badge */}
          <span style={{ fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'0.22em', color:'rgba(var(--purple-rgb),calc(0.55*var(--kp) + var(--tb)))', textTransform:'uppercase', marginBottom:10 }}>
            {image.collectionName}
          </span>

          {/* Title */}
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, fontSize:18, letterSpacing:'0.18em', color:'var(--white)', textTransform:'uppercase', marginBottom:8, lineHeight:1.3 }}>
            {image.title}
          </h2>

          {/* Date */}
          <span style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))', marginBottom:18 }}>
            {fmtDate(image.date)}
          </span>

          {/* Divider */}
          <div style={{ width:32, height:1, background:'rgba(var(--purple-rgb),calc(0.4*var(--kp)))', marginBottom:18 }} />

          {/* Description */}
          <p style={{ fontFamily:'var(--font-body)', fontSize:13, fontWeight:300, color:'var(--silver)', lineHeight:1.75, marginBottom:22, flex:1 }}>
            {image.desc}
          </p>

          {/* Tags */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
            {image.tags && image.tags.map(t => <TagC key={t} label={t} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CollectionCard, CollectionOverlay, ImageModal });


var { useState: useS3, useEffect: useE3, useRef: useR3, useMemo: useMemo3 } = React;
var { COLLECTIONS:COLS, ALL_IMAGES:ALL_IMGS, DEFAULT_FEATURED, FeaturedDisplay:FeatDisp, CollectionCard:ColCard, CollectionOverlay:ColOverlay, Carousel:Car, ImageModal } = window;
var { SiteNav, PageHeader } = window;

var TWEAK_DEFAULTS = {"carouselReverse":false,"headerHeight":180};

function _monsterKolId(name) {
  let h = 5381;
  for (let i = 0; i < name.length; i++) h = (Math.imul(h, 33) ^ name.charCodeAt(i)) >>> 0;
  return h % 2000000000;
}

/* ── GalleryPage ──────────────────────────────── */
function GalleryPage() {
  const [featured,   setFeatured] = useS3(DEFAULT_FEATURED);
  const [openCol,    setOpenCol]  = useS3(null);
  const [modalImg,   setModalImg] = useS3(null);
  const tweaks = TWEAK_DEFAULTS;
  const [cols, setCols] = useS3(COLS.filter(col => col.id !== 'monster'));

  useE3(() => {
    const isDM = window.SITE_USER?.role === 'dm';
    async function loadChars() {
      const [{ data: chars }, { data: nscs }] = await Promise.all([
        window._sb.from('characters').select('id,name,char_data,created_at,visible').eq('type', 'spieler').order('created_at', { ascending: false }),
        window._sb.from('nsc_public_directory').select('id,name,bild,created_at,visible').not('bild', 'is', null).order('name'),
      ]);

      const charImgs = (chars || [])
        .filter(c => c.char_data?.bild && (isDM || c.visible !== false))
        .map(c => ({
          id:     'char_' + c.id,
          title:  c.name,
          hue:    150,
          date:   c.created_at?.slice(0, 10) ?? '',
          img:    c.char_data.bild,
          hidden: isDM && c.visible === false,
          collectionName: 'Charaktere & NSCs',
        }));

      const nscImgs = (nscs || [])
        .filter(n => isDM || n.visible)
        .map(n => ({
          id:     'nsc_' + n.id,
          title:  n.name,
          hue:    200,
          date:   n.created_at?.slice(0, 10) ?? '',
          img:    n.bild,
          hidden: isDM && !n.visible,
          collectionName: 'Charaktere & NSCs',
        }));

      const images = [...charImgs, ...nscImgs];
      if (!images.length) return;
      setCols(prev => prev.map(col =>
        col.id === 'charaktere' ? { ...col, images } : col
      ));
      setFeatured(f => f === DEFAULT_FEATURED ? images[0] : f);
    }
    loadChars();
  }, []);

  const allImgs = cols.flatMap(c => c.images.map(img => ({ ...img, collectionName: c.name })));
  // Carousel uses a shuffled sample — rendering 800×3 img tags burns bandwidth needlessly
  const carouselImgs = useMemo3(() => {
    const shuffled = [...allImgs].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 80);
  }, [cols]);
  const leftCols  = cols.slice(0, 3);
  const rightCols = cols.slice(3, 6);

  return (
    <div style={{ minHeight:'calc(var(--vh, 1vh) * 100)' }}>
      <PageHeader height={tweaks.headerHeight} />
      <SiteNav />

      {/* Collection overlay */}
      {openCol && (
        <ColOverlay
          collection={openCol}
          onClose={() => setOpenCol(null)}
          onSelectImage={img => setModalImg({...img, collectionName: openCol.name})}
        />
      )}

      {/* Image modal */}
      {modalImg && <ImageModal image={modalImg} onClose={() => setModalImg(null)} />}

      {/* Page title */}
      <div style={{ padding:'18px 28px 14px', borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))' }}>
        <h1 style={{ fontFamily:'var(--font-display)', fontWeight:300, fontSize:22, letterSpacing:'0.28em', color:'var(--white)', textTransform:'uppercase' }}>
          Galerie
        </h1>
        <div style={{ marginTop:8, width:36, height:1, background:'rgba(var(--purple-rgb),calc(0.55*var(--kp)))' }} />
      </div>

      {/* 3-column layout */}
      <div style={{ display:'grid', gridTemplateColumns:'240px 1fr 240px', gap:18, padding:'18px 24px', alignItems:'start' }}>

        {/* Left C */}
        <div style={{ display:'flex', flexDirection:'column', gap:11 }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'0.2em', color:'rgba(var(--purple-rgb),calc(0.38*var(--kp) + var(--tb)))', textTransform:'uppercase', padding:'0 2px 6px', borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))' }}>
            Sammlungen
          </div>
          {leftCols.map(col => (
            <ColCard key={col.id} collection={col} onClick={() => setOpenCol(col)} />
          ))}
        </div>

        {/* Center A + B */}
        <FeatDisp image={featured} />

        {/* Right C */}
        <div style={{ display:'flex', flexDirection:'column', gap:11 }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'0.2em', color:'rgba(var(--purple-rgb),calc(0.38*var(--kp) + var(--tb)))', textTransform:'uppercase', padding:'0 2px 6px', borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))' }}>
            Sammlungen
          </div>
          {rightCols.map(col => (
            <ColCard key={col.id} collection={col} onClick={() => setOpenCol(col)} />
          ))}
        </div>
      </div>

      {/* Carousel D */}
      <div style={{ marginTop:16, borderTop:'1px solid rgba(var(--purple-rgb),calc(0.12*var(--kp)))' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, padding:'13px 28px 6px' }}>
          <span style={{ fontFamily:'var(--font-display)', fontSize:9, letterSpacing:'0.35em', color:'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))', textTransform:'uppercase' }}>Alle Bilder</span>
          <div style={{ flex:1, height:1, background:'rgba(var(--purple-rgb),calc(0.12*var(--kp)))' }} />
          <span style={{ fontFamily:'var(--font-mono)', fontSize:8, color:'rgba(var(--purple-rgb),calc(0.3*var(--kp) + var(--tb)))' }}>
            {allImgs.length} Einträge · Klicken &amp; Ziehen zum Drehen
          </span>
        </div>
        <Car images={carouselImgs} reverse={tweaks.carouselReverse} />
      </div>

      {/* Footer */}
      <div style={{ borderTop:'1px solid rgba(var(--purple-rgb),calc(0.07*var(--kp)))', padding:'13px 28px', display:'flex', justifyContent:'space-between' }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'rgba(var(--purple-rgb),calc(0.26*var(--kp) + var(--tb)))', letterSpacing:'0.1em' }}>Meruria — Galerie</span>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:8, color:'rgba(var(--purple-rgb),calc(0.22*var(--kp) + var(--tb)))' }}>{cols.length} Sammlungen · {allImgs.length} Bilder</span>
      </div>
    </div>
  );
}

var { SiteGate } = window;
ReactDOM.createRoot(document.getElementById('root')).render(<SiteGate><GalleryPage /></SiteGate>);

})();
