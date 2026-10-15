// Tarot-Tageskarte (Spiel-Seite)
// Verlegt von der Startseite (src/pages/index.jsx) auf die Spiel-Seite (/spiel/index.html).
;(function () {
var { useState:uSx, useEffect:uEx, useRef:uRx, useMemo:uMx } = React;
var { CTAButton } = window; // components/cta-button.jsx
var TAGESKARTE_MAJORS = [
  ['0','Der Narr','Neue Anfänge · Unschuld · Spontaneität'],
  ['I','Der Magier','Manifestation · Kreativität · Potenzial'],
  ['II','Die Hohepriesterin','Intuition · Geheimnisse · Weisheit'],
  ['III','Die Herrscherin','Fülle · Fruchtbarkeit · Schöpfung'],
  ['IV','Der Herrscher','Autorität · Struktur · Stabilität'],
  ['V','Der Hierophant','Tradition · Lehre · Glaube'],
  ['VI','Die Liebenden','Wahl · Vereinigung · Werte'],
  ['VII','Der Wagen','Willenskraft · Triumph · Kontrolle'],
  ['VIII','Die Gerechtigkeit','Wahrheit · Gleichgewicht · Ursache'],
  ['IX','Der Eremit','Rückzug · Innere Suche · Erkenntnis'],
  ['X','Das Rad','Schicksal · Wandel · Zyklen'],
  ['XI','Die Kraft','Mut · Geduld · Innere Stärke'],
  ['XII','Der Gehängte','Hingabe · Perspektive · Pause'],
  ['XIII','Der Tod','Wandel · Übergang · Ende'],
  ['XIV','Die Mäßigung','Balance · Harmonie · Geduld'],
  ['XV','Der Teufel','Versuchung · Bindung · Schatten'],
  ['XVI','Der Turm','Umbruch · Erschütterung · Befreiung'],
  ['XVII','Der Stern','Hoffnung · Heilung · Inspiration'],
  ['XVIII','Der Mond','Träume · Unbewusstes · Illusion'],
  ['XIX','Die Sonne','Klarheit · Freude · Vitalität'],
  ['XX','Das Gericht','Erwachen · Berufung · Wiedergeburt'],
  ['XXI','Die Welt','Vollendung · Ganzheit · Erfüllung'],
];

/* Major arcana SVG glyphs — matched to /dm/tarot.html */
var MAJOR_SVGS = [
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><path d="M 24 52 L 18 22 L 32 38 L 50 14 L 68 38 L 82 22 L 76 52 Z" fill="rgba(var(--purple-rgb),calc(0.35*var(--kp)))"/><rect x="22" y="52" width="56" height="8" fill="rgba(var(--purple-rgb),calc(0.45*var(--kp)))"/><circle cx="18" cy="22" r="3.5" fill="rgba(var(--text-rgb),calc(0.9*var(--kt)))" stroke-width="1.1"/><circle cx="50" cy="14" r="3.5" fill="rgba(var(--text-rgb),calc(0.9*var(--kt)))" stroke-width="1.1"/><circle cx="82" cy="22" r="3.5" fill="rgba(var(--text-rgb),calc(0.9*var(--kt)))" stroke-width="1.1"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><path d="M 50 10 L 78 70 L 22 70 Z" fill="rgba(var(--purple-rgb),calc(0.4*var(--kp)))"/><ellipse cx="50" cy="72" rx="36" ry="6" fill="rgba(var(--purple-rgb),calc(0.5*var(--kp)))"/><polygon points="50,34 53,42 62,42 55,48 58,56 50,50 42,56 45,48 38,42 47,42" fill="rgba(var(--text-rgb),calc(0.95*var(--kt)))" stroke-width="0.4"/><circle cx="50" cy="10" r="2.5" fill="rgba(var(--text-rgb),calc(0.95*var(--kt)))" stroke="none"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><polygon points="50,12 86,80 14,80" fill="rgba(var(--purple-rgb),calc(0.22*var(--kp)))"/><polygon points="50,28 70,68 30,68" fill="rgba(var(--purple-rgb),calc(0.4*var(--kp)))"/><circle cx="50" cy="54" r="3" fill="rgba(var(--text-rgb),calc(0.95*var(--kt)))" stroke="none"/><g stroke-width="0.9" stroke="rgba(var(--accent-rgb),calc(0.7*var(--ka)))"><line x1="50" y1="4" x2="50" y2="10"/><line x1="30" y1="8" x2="36" y2="14"/><line x1="70" y1="8" x2="64" y2="14"/></g></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><path d="M 24 36 L 32 22 L 40 32 L 50 16 L 60 32 L 68 22 L 76 36 L 70 42 L 30 42 Z" fill="rgba(var(--purple-rgb),calc(0.35*var(--kp)))"/><circle cx="50" cy="16" r="2" fill="rgba(var(--text-rgb),calc(0.9*var(--kt)))" stroke="none"/><path d="M 50,86 C 32,72 26,58 38,52 C 44,49 50,54 50,58 C 50,54 56,49 62,52 C 74,58 68,72 50,86 Z" fill="rgba(var(--purple-rgb),calc(0.5*var(--kp)))"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><path d="M 22 48 L 26 26 L 36 34 L 50 14 L 64 34 L 74 26 L 78 48 Z" fill="rgba(var(--purple-rgb),calc(0.42*var(--kp)))"/><line x1="22" y1="48" x2="78" y2="48" stroke-width="1.5"/><circle cx="50" cy="14" r="2" fill="rgba(var(--text-rgb),calc(0.95*var(--kt)))" stroke="none"/><path d="M 30 58 L 22 86 L 78 86 L 70 58 Z" fill="rgba(var(--purple-rgb),calc(0.22*var(--kp)))"/><line x1="50" y1="58" x2="50" y2="86" stroke-width="1.4"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><path d="M 30 78 L 38 30 L 50 18 L 62 30 L 70 78 Z" fill="rgba(var(--purple-rgb),calc(0.32*var(--kp)))"/><polygon points="50,8 54,18 64,18 56,24 60,34 50,28 40,34 44,24 36,18 46,18" fill="rgba(var(--purple-rgb),calc(0.55*var(--kp)))"/><line x1="36" y1="50" x2="64" y2="50" stroke-width="1.1"/><line x1="30" y1="78" x2="70" y2="78" stroke-width="1.4"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><path d="M 38,80 C 38,68 14,60 14,42 C 14,32 24,26 32,32 C 35,35 38,38 38,42 C 38,38 41,35 44,32 C 52,26 62,32 62,42 C 62,60 38,68 38,80 Z" fill="rgba(var(--purple-rgb),calc(0.42*var(--kp)))"/><path d="M 62,80 C 62,68 38,60 38,42 C 38,32 48,26 56,32 C 59,35 62,38 62,42 C 62,38 65,35 68,32 C 76,26 86,32 86,42 C 86,60 62,68 62,80 Z" fill="rgba(var(--purple-rgb),calc(0.55*var(--kp)))"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><path d="M 18 58 L 78 58 L 84 38 L 22 38 Z" fill="rgba(var(--purple-rgb),calc(0.38*var(--kp)))"/><polygon points="50,16 54,28 64,28 56,34 60,46 50,38 40,46 44,34 36,28 46,28" fill="rgba(var(--purple-rgb),calc(0.5*var(--kp)))"/><circle cx="34" cy="68" r="11" fill="rgba(var(--purple-rgb),calc(0.2*var(--kp)))"/><circle cx="66" cy="68" r="11" fill="rgba(var(--purple-rgb),calc(0.2*var(--kp)))"/><circle cx="34" cy="68" r="2" fill="rgba(var(--text-rgb),calc(0.85*var(--kt)))" stroke="none"/><circle cx="66" cy="68" r="2" fill="rgba(var(--text-rgb),calc(0.85*var(--kt)))" stroke="none"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linecap="round"><line x1="50" y1="22" x2="50" y2="82" stroke-width="1.6"/><line x1="42" y1="82" x2="58" y2="82"/><line x1="20" y1="32" x2="80" y2="32" stroke-width="1.4"/><line x1="28" y1="32" x2="28" y2="46"/><line x1="72" y1="32" x2="72" y2="46"/><path d="M 18 46 A 10 6 0 0 0 38 46 Z" fill="rgba(var(--purple-rgb),calc(0.35*var(--kp)))"/><path d="M 62 46 A 10 6 0 0 0 82 46 Z" fill="rgba(var(--purple-rgb),calc(0.35*var(--kp)))"/><circle cx="50" cy="32" r="3" fill="rgba(var(--text-rgb),calc(0.95*var(--kt)))" stroke="none"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round"><path d="M 42 22 Q 50 12 58 22" stroke-linecap="round"/><polygon points="50,22 68,32 68,56 50,66 32,56 32,32" fill="rgba(var(--purple-rgb),calc(0.25*var(--kp)))"/><circle cx="50" cy="44" r="6" fill="rgba(var(--text-rgb),calc(0.9*var(--kt)))" stroke-width="1.2"/><line x1="18" y1="44" x2="28" y2="44" stroke-width="0.9"/><line x1="72" y1="44" x2="82" y2="44" stroke-width="0.9"/><line x1="50" y1="74" x2="50" y2="84" stroke-width="0.9"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4"><circle cx="50" cy="50" r="28"/><circle cx="50" cy="50" r="20" stroke-dasharray="3 2"/><circle cx="50" cy="50" r="6" fill="rgba(var(--purple-rgb),calc(0.5*var(--kp)))" stroke-width="1.2"/><line x1="50" y1="22" x2="50" y2="78" stroke-width="1.1"/><line x1="22" y1="50" x2="78" y2="50" stroke-width="1.1"/><line x1="30" y1="30" x2="70" y2="70" stroke-width="1.1"/><line x1="70" y1="30" x2="30" y2="70" stroke-width="1.1"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><circle cx="50" cy="50" r="34" stroke-dasharray="2 4" stroke-width="0.8"/><path d="M 50,76 C 50,66 30,58 30,42 C 30,34 38,30 44,34 C 47,37 50,40 50,42 C 50,40 53,37 56,34 C 62,30 70,34 70,42 C 70,58 50,66 50,76 Z" fill="rgba(var(--purple-rgb),calc(0.5*var(--kp)))"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><line x1="14" y1="26" x2="86" y2="26" stroke-width="1.6"/><line x1="50" y1="14" x2="50" y2="26"/><circle cx="50" cy="14" r="2.5" fill="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke="none"/><polygon points="22,30 78,30 50,82" fill="rgba(var(--purple-rgb),calc(0.3*var(--kp)))"/><circle cx="50" cy="54" r="4" fill="rgba(var(--accent-rgb),calc(0.95*var(--ka)))" stroke="none"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><line x1="34" y1="20" x2="68" y2="84" stroke-width="1.6"/><path d="M 32 22 Q 64 16 72 38 Q 58 32 36 32 Z" fill="rgba(var(--purple-rgb),calc(0.4*var(--kp)))"/><line x1="62" y1="70" x2="50" y2="78"/><circle cx="34" cy="20" r="2.5" fill="rgba(var(--accent-rgb),calc(0.9*var(--ka)))" stroke="none"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M 28 20 Q 18 38 28 46 Q 38 38 28 20 Z" fill="rgba(var(--purple-rgb),calc(0.45*var(--kp)))"/><path d="M 72 54 Q 62 72 72 80 Q 82 72 72 54 Z" fill="rgba(var(--purple-rgb),calc(0.45*var(--kp)))"/><path d="M 30 46 Q 50 50 70 54" stroke-dasharray="2 2"/><circle cx="50" cy="50" r="2" fill="rgba(var(--text-rgb),calc(0.9*var(--kt)))" stroke="none"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round"><polygon points="50,84 66,40 22,68 78,68 34,40" fill="rgba(var(--purple-rgb),calc(0.3*var(--kp)))"/><circle cx="50" cy="62" r="2.5" fill="rgba(var(--accent-rgb),calc(0.95*var(--ka)))" stroke="none"/><path d="M 32 14 L 28 28 L 38 26 Z" fill="rgba(var(--purple-rgb),calc(0.45*var(--kp)))"/><path d="M 68 14 L 72 28 L 62 26 Z" fill="rgba(var(--purple-rgb),calc(0.45*var(--kp)))"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><path d="M 36 86 L 36 38 L 64 38 L 64 86 Z" fill="rgba(var(--purple-rgb),calc(0.22*var(--kp)))"/><path d="M 30 38 L 30 28 L 70 28 L 70 38 Z" fill="rgba(var(--purple-rgb),calc(0.42*var(--kp)))"/><rect x="45" y="50" width="10" height="14" fill="rgba(255,200,100,0.55)" stroke-width="1.1"/><path d="M 84 8 L 70 30 L 78 32 L 60 54" stroke="rgba(255,235,180,0.95)" stroke-width="1.8" fill="rgba(255,200,100,0.4)"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round"><polygon points="50,8 56,32 80,30 64,46 76,68 56,60 50,82 44,60 24,68 36,46 20,30 44,32" fill="rgba(var(--purple-rgb),calc(0.5*var(--kp)))"/><circle cx="50" cy="46" r="3" fill="rgba(var(--text-rgb),calc(0.95*var(--kt)))" stroke="none"/><path d="M 12 88 Q 22 82 32 88 T 52 88 T 72 88 T 92 88" stroke-width="1.1"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><path d="M 60 14 Q 26 18 22 50 Q 26 82 60 86 Q 36 78 36 50 Q 36 22 60 14 Z" fill="rgba(var(--purple-rgb),calc(0.4*var(--kp)))"/><circle cx="34" cy="40" r="2" fill="rgba(var(--accent-rgb),calc(0.55*var(--ka)))" stroke="none"/><circle cx="28" cy="56" r="2.5" fill="rgba(var(--accent-rgb),calc(0.55*var(--ka)))" stroke="none"/><polygon points="80,22 82,28 88,28 83,32 85,38 80,34 75,38 77,32 72,28 78,28" fill="rgba(var(--text-rgb),calc(0.85*var(--kt)))" stroke-width="0.4"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.2" stroke-linecap="round"><circle cx="50" cy="50" r="14" fill="rgba(var(--purple-rgb),calc(0.55*var(--kp)))"/><line x1="50" y1="12" x2="50" y2="22"/><line x1="50" y1="78" x2="50" y2="88"/><line x1="12" y1="50" x2="22" y2="50"/><line x1="78" y1="50" x2="88" y2="50"/><line x1="22" y1="22" x2="30" y2="30"/><line x1="78" y1="22" x2="70" y2="30"/><line x1="22" y1="78" x2="30" y2="70"/><line x1="78" y1="78" x2="70" y2="70"/><circle cx="50" cy="50" r="3" fill="rgba(var(--text-rgb),calc(0.95*var(--kt)))" stroke="none"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"><rect x="22" y="18" width="56" height="22" fill="rgba(var(--purple-rgb),calc(0.45*var(--kp)))" rx="3"/><rect x="46" y="40" width="8" height="28" fill="rgba(var(--purple-rgb),calc(0.4*var(--kp)))" rx="2"/><path d="M 14 84 L 22 74 L 78 74 L 86 84 Z" fill="rgba(var(--purple-rgb),calc(0.32*var(--kp)))"/></svg>`,
  `<svg viewBox="0 0 100 100" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.3" stroke-linecap="round"><circle cx="50" cy="50" r="30" stroke-dasharray="6 3"/><circle cx="50" cy="50" r="22" fill="rgba(var(--purple-rgb),calc(0.3*var(--kp)))" stroke-width="1.4"/><line x1="50" y1="34" x2="50" y2="66" stroke-width="1.4"/><line x1="34" y1="50" x2="66" y2="50" stroke-width="1.4"/><circle cx="50" cy="50" r="3.5" fill="rgba(var(--text-rgb),calc(0.95*var(--kt)))" stroke="none"/></svg>`,
];

var TAROT_BACK_SVG = `
  <svg viewBox="0 0 100 170" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="tb-bg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="rgb(var(--panel-rgb))"/>
        <stop offset="100%" stop-color="rgb(var(--panel-rgb))"/>
      </radialGradient>
      <pattern id="tb-grid" width="8" height="8" patternUnits="userSpaceOnUse">
        <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(var(--accent-rgb),calc(0.12*var(--ka)))" stroke-width="0.4"/>
      </pattern>
    </defs>
    <rect width="100" height="170" fill="url(#tb-bg)"/>
    <rect width="100" height="170" fill="url(#tb-grid)"/>
    <rect x="4" y="4" width="92" height="162" fill="none" stroke="rgba(var(--accent-rgb),calc(0.65*var(--ka)))" stroke-width="0.6"/>
    <rect x="8" y="8" width="84" height="154" fill="none" stroke="rgba(var(--purple-rgb),calc(0.35*var(--kp)))" stroke-width="0.3"/>
    <g fill="none" stroke="rgba(var(--accent-rgb),calc(0.7*var(--ka)))" stroke-width="0.55">
      <polygon points="50,55 64,63 64,77 50,85 36,77 36,63"/>
      <polygon points="50,85 64,93 64,107 50,115 36,107 36,93"/>
      <polygon points="50,40 60,46 60,58 50,64 40,58 40,46"/>
      <polygon points="50,106 60,112 60,124 50,130 40,124 40,112"/>
    </g>
    <g fill="none" stroke="rgba(var(--purple-rgb),calc(0.55*var(--kp)))" stroke-width="0.45">
      <circle cx="50" cy="85" r="28"/>
      <circle cx="50" cy="85" r="20" stroke-dasharray="2 2"/>
    </g>
    <g fill="rgba(var(--accent-rgb),calc(0.9*var(--ka)))">
      <circle cx="50" cy="85" r="2"/>
      <circle cx="14" cy="14" r="1.5"/>
      <circle cx="86" cy="14" r="1.5"/>
      <circle cx="14" cy="156" r="1.5"/>
      <circle cx="86" cy="156" r="1.5"/>
    </g>
    <g fill="none" stroke="rgba(var(--accent-rgb),calc(0.5*var(--ka)))" stroke-width="0.4">
      <path d="M50,18 L50,32"/>
      <path d="M50,138 L50,152"/>
    </g>
  </svg>`;

var TAROT_CORNER_SVG = `<svg viewBox="0 0 20 20" fill="none" stroke="rgba(var(--accent-rgb),calc(0.85*var(--ka)))" stroke-width="1.2"><polygon points="10,2 17,6 17,14 10,18 3,14 3,6"/><circle cx="10" cy="10" r="2" fill="rgba(var(--accent-rgb),calc(0.7*var(--ka)))"/></svg>`;

function Tageskarte() {
  const [flipped, setFlipped] = uSx(false);
  const [cardIdx, setCardIdx] = uSx(() => Math.floor(Math.random()*TAGESKARTE_MAJORS.length));
  const cardRef = uRx(null);
  const card = TAGESKARTE_MAJORS[cardIdx];

  // ── Star burst (ported from /dm/tarot.html spawnStarBurst) ──
  const spawnStarBurst = (cx, cy) => {
    // Central flash
    const flash = document.createElement('div');
    flash.className = 'tk-burst-flash';
    flash.style.left = cx + 'px';
    flash.style.top  = cy + 'px';
    flash.style.transform = 'translate(-50%, -50%) scale(0.2)';
    document.body.appendChild(flash);
    flash.animate([
      { transform:'translate(-50%, -50%) scale(0.2)', opacity:0 },
      { transform:'translate(-50%, -50%) scale(1.0)', opacity:1, offset:0.2 },
      { transform:'translate(-50%, -50%) scale(2.4)', opacity:0 }
    ], { duration:750, easing:'cubic-bezier(.2,.7,.3,1)', fill:'forwards' }).onfinish = () => flash.remove();

    // Two expanding rings
    [0, 220].forEach((delay, k) => {
      setTimeout(() => {
        const ring = document.createElement('div');
        ring.className = 'tk-burst-ring';
        ring.style.left = cx + 'px';
        ring.style.top  = cy + 'px';
        document.body.appendChild(ring);
        ring.animate([
          { transform:'translate(-50%, -50%) scale(0.1)', opacity:0.95, borderWidth:'3px' },
          { transform:`translate(-50%, -50%) scale(${k===0?4:6})`, opacity:0, borderWidth:'1px' }
        ], { duration:1100, easing:'cubic-bezier(.2,.8,.3,1)', fill:'forwards' }).onfinish = () => ring.remove();
      }, delay);
    });

    // Particle storm
    const N = 64;
    for (let i = 0; i < N; i++) {
      const angle = (i/N)*Math.PI*2 + (Math.random()-0.5)*0.45;
      const dist  = 110 + Math.random()*280;
      const dx = Math.cos(angle)*dist;
      const dy = Math.sin(angle)*dist*0.85;
      const dur = 1000 + Math.random()*1100;
      const r = Math.random();
      let cls = 'tk-spark';
      if (r < 0.14) cls += ' cross';
      else if (r < 0.32) cls += ' big';
      if (Math.random() < 0.32) cls += ' alt';
      const el = document.createElement('div');
      el.className = cls;
      el.style.left = cx + 'px';
      el.style.top  = cy + 'px';
      document.body.appendChild(el);
      const swirl = angle + (Math.random()-0.5)*0.7;
      const mx = Math.cos(swirl)*dist*0.45;
      const my = Math.sin(swirl)*dist*0.4;
      const peakScale = cls.includes('big') ? 1.9 : (cls.includes('cross') ? 1.6 : 1.3);
      el.animate([
        { transform:'translate(-50%, -50%) scale(0.1) rotate(0deg)', opacity:0 },
        { transform:`translate(calc(-50% + ${mx}px), calc(-50% + ${my}px)) scale(${peakScale}) rotate(180deg)`, opacity:1, offset:0.28 },
        { transform:`translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0) rotate(420deg)`, opacity:0, offset:1 }
      ], { duration:dur, easing:'cubic-bezier(.15,.85,.3,1)', fill:'forwards' }).onfinish = () => el.remove();
    }
  };

  const burstAtCard = () => {
    const el = cardRef.current; if (!el) return;
    const r = window.uiRect(el);
    spawnStarBurst(r.left + r.width/2, r.top + r.height/2);
  };

  const draw = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (!flipped) {
      burstAtCard();
      setFlipped(true);
      return;
    }
    setCardIdx((idx) => {
      let next = Math.floor(Math.random()*TAGESKARTE_MAJORS.length);
      if (next === idx) next = (next+1) % TAGESKARTE_MAJORS.length;
      return next;
    });
    burstAtCard();
  };

  const clear = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    setFlipped(false);
  };

  return (
    <div>
      <div style={{ display:'flex', alignItems:'baseline', gap:18, marginBottom:24 }}>
        <span style={{
          fontFamily:'var(--font-mono)', fontSize:'12px',
          letterSpacing:'0.35em', color:'rgba(var(--purple-rgb),calc(0.65*var(--kp) + var(--tb)))',
          textTransform:'uppercase',
        }}>◈ Tageskarte</span>
        <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(var(--purple-rgb),calc(0.5*var(--kp))), rgba(var(--purple-rgb),calc(0.05*var(--kp))))' }}/>
        <span style={{
          fontFamily:'var(--font-mono)', fontSize:'11.5px',
          letterSpacing:'0.28em', color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))',
          textTransform:'uppercase',
        }}>Große Arkana · 22 Karten</span>
      </div>

      <div className="tk-raster" style={{
        display:'grid', gridTemplateColumns:'1fr auto 1fr', gap:56,
        alignItems:'center', padding:'30px 36px',
        background:'radial-gradient(ellipse at center, rgba(var(--panel-rgb),0.55) 0%, transparent 70%)',
      }}>
        {/* Left text */}
        <div style={{ textAlign:'right' }}>
          <h3 style={{
            fontFamily:'var(--font-display)', fontWeight:400,
            fontSize:'34px', letterSpacing:'0.1em',
            color:'var(--white)', textTransform:'uppercase',
            lineHeight:1.05, marginBottom:14,
            textShadow:'0 0 28px rgba(var(--purple-rgb),calc(0.35*var(--kp)))',
          }}>Was hält<br/>der Tag<br/>bereit?</h3>
          <div style={{ width:42, height:1, background:'rgba(var(--purple-rgb),calc(0.6*var(--kp)))', marginLeft:'auto', marginBottom:18 }}/>
          <p style={{
            fontFamily:'var(--font-body)', fontWeight:300,
            fontSize:'13px', lineHeight:1.85,
            color:'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))',
            maxWidth:'280px', marginLeft:'auto',
            textWrap:'pretty',
          }}>
            Ziehe eine Karte aus der großen Arkana. Lass sie auf dich wirken,
            bevor du das volle Deck erkundest.
          </p>
        </div>

        {/* Card */}
        <div style={{ perspective:1400 }}>
          <div ref={cardRef} className={`tarot-card-3d${flipped ? ' flipped' : ''}`} onClick={draw}>
            {/* Back */}
            <div className="tarot-card-face tarot-card-back"
                 dangerouslySetInnerHTML={{ __html: TAROT_BACK_SVG }}/>
            {/* Front */}
            <div className="tarot-card-face tarot-card-front">
              <div className="tarot-cf-frame"/>
              <div className="tarot-cf-corner tl" dangerouslySetInnerHTML={{ __html: TAROT_CORNER_SVG }}/>
              <div className="tarot-cf-corner br" dangerouslySetInnerHTML={{ __html: TAROT_CORNER_SVG }}/>
              <div className="tarot-cf-symbol" dangerouslySetInnerHTML={{ __html: MAJOR_SVGS[cardIdx] || '' }}/>
              <div className="tarot-cf-name">{card[1]}</div>
              <div className="tarot-cf-divider"/>
              <div className="tarot-cf-keywords">{card[2]}</div>
            </div>
          </div>
        </div>

        {/* Right meta + buttons */}
        <div style={{ textAlign:'left' }}>
          <div style={{
            fontFamily:'var(--font-mono)', fontSize:'11.5px',
            letterSpacing:'0.32em', color:'rgba(var(--purple-rgb),calc(0.6*var(--kp) + var(--tb)))',
            textTransform:'uppercase', marginBottom:14,
          }}>{flipped ? 'Gezogen · ' + card[0] : 'Verdeckt'}</div>
          {flipped && (
            <div style={{
              fontFamily:'var(--font-display)', fontWeight:400,
              fontSize:'22px', letterSpacing:'0.1em',
              color:'var(--white)', textTransform:'uppercase',
              lineHeight:1.1, marginBottom:10,
              textShadow:'0 0 18px rgba(var(--purple-rgb),calc(0.35*var(--kp)))',
            }}>{card[1]}</div>
          )}
          <button onClick={draw} style={{
            fontFamily:'var(--font-display)', fontSize:'12.5px', fontWeight:400,
            letterSpacing:'0.22em', padding:'12px 22px',
            background:'rgba(var(--purple-rgb),calc(0.1*var(--kp)))',
            border:'1px solid rgba(var(--accent-rgb),calc(0.45*var(--ka)))',
            color:'var(--white)', textTransform:'uppercase',
            borderRadius:3, cursor:'pointer',
            transition:'all 0.2s', marginBottom:10, display:'block',
          }}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.22*var(--kp)))'; e.currentTarget.style.borderColor='rgba(var(--accent-rgb),calc(0.8*var(--ka)))'; e.currentTarget.style.color='#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(var(--purple-rgb),calc(0.1*var(--kp)))'; e.currentTarget.style.borderColor='rgba(var(--accent-rgb),calc(0.45*var(--ka)))'; e.currentTarget.style.color='var(--white)'; }}
          >
            {flipped ? 'Neue Karte ziehen' : 'Karte aufdecken'}
          </button>
          <button onClick={clear} disabled={!flipped} style={{
            fontFamily:'var(--font-display)', fontSize:'12px', fontWeight:400,
            letterSpacing:'0.22em', padding:'10px 20px',
            background:'transparent',
            border:'1px solid rgba(var(--accent-rgb),calc(0.22*var(--ka)))',
            color: flipped ? 'rgba(var(--text-rgb),calc(0.7*var(--kt)))' : 'rgba(var(--accent-rgb),calc(0.25*var(--ka)))',
            textTransform:'uppercase',
            borderRadius:3, cursor: flipped ? 'pointer' : 'not-allowed',
            transition:'all 0.2s', marginBottom:18, display:'block',
          }}
            onMouseEnter={e => { if (flipped) { e.currentTarget.style.color='var(--white)'; e.currentTarget.style.borderColor='rgba(var(--accent-rgb),calc(0.5*var(--ka)))'; } }}
            onMouseLeave={e => { if (flipped) { e.currentTarget.style.color='rgba(var(--text-rgb),calc(0.7*var(--kt) + var(--tb)))'; e.currentTarget.style.borderColor='rgba(var(--accent-rgb),calc(0.22*var(--ka)))'; } }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Tageskarte });
})();
