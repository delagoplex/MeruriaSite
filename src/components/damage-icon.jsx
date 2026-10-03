// damage-icon.jsx — damage-type glyphs shared by the info page and the character sheet.
// Exposes: window.DamageIcon, window.damageColor, window.SCHADEN_GLYPHS

// SVG glyphs — simple line art, ~24x24 viewBox-friendly, all stroke="currentColor"
var SCHADEN_GLYPHS = {
  // Crossed swords (slashing)
  hieb: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2">
      <g transform="rotate(45 20 20)">
        <path d="M18 4 L22 4 L22 25 L18 25 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor"/>
        <path d="M18 4 L20 1 L22 4 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor"/>
        <path d="M13 25 L27 25 L27 28 L13 28 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor"/>
        <path d="M19 28 L21 28 L21 35 L19 35 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor"/>
        <circle cx="20" cy="37" r="1.8" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor"/>
        <line x1="20" y1="6" x2="20" y2="23" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      </g>
      <g transform="rotate(-45 20 20)">
        <path d="M18 4 L22 4 L22 25 L18 25 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor"/>
        <path d="M18 4 L20 1 L22 4 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor"/>
        <path d="M13 25 L27 25 L27 28 L13 28 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor"/>
        <path d="M19 28 L21 28 L21 35 L19 35 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor"/>
        <circle cx="20" cy="37" r="1.8" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor"/>
        <line x1="20" y1="6" x2="20" y2="23" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      </g>
      <circle cx="20" cy="20" r="1.4" fill="currentColor"/>
    </g>
  ),
  // War hammer (bludgeoning) — Mjölnir-style block head
  wucht: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
      {/* impact sparks at corners */}
      <path d="M3 10 L8 11 M4 5 L9 8" stroke="currentColor" strokeWidth="1.1" opacity="0.6"/>
      <path d="M37 10 L32 11 M36 5 L31 8" stroke="currentColor" strokeWidth="1.1" opacity="0.6"/>
      {/* hammer head — bold block */}
      <rect x="8" y="9" width="24" height="13" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.4"/>
      {/* vertical bands on head */}
      <line x1="13" y1="9"  x2="13" y2="22" stroke="currentColor" strokeWidth="0.8" opacity="0.55"/>
      <line x1="27" y1="9"  x2="27" y2="22" stroke="currentColor" strokeWidth="0.8" opacity="0.55"/>
      {/* center stud */}
      <circle cx="20" cy="15.5" r="2" fill="currentColor"/>
      <circle cx="20" cy="15.5" r="0.8" fill="rgba(var(--panel-rgb),0.95)"/>
      {/* handle */}
      <rect x="18.2" y="22" width="3.6" height="12" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      {/* grip wrap */}
      <line x1="18.2" y1="25" x2="21.8" y2="25" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <line x1="18.2" y1="28" x2="21.8" y2="28" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <line x1="18.2" y1="31" x2="21.8" y2="31" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      {/* pommel base */}
      <rect x="15.5" y="34" width="9" height="3" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
    </g>
  ),
  // Dagger pointing down (piercing)
  stich: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
      {/* drips/sparks at tip */}
      <circle cx="20" cy="38" r="0.9" fill="currentColor" opacity="0.7"/>
      <circle cx="15" cy="36" r="0.6" fill="currentColor" opacity="0.5"/>
      <circle cx="25" cy="36" r="0.6" fill="currentColor" opacity="0.5"/>
      {/* pommel */}
      <circle cx="20" cy="6" r="2.6" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="20" cy="6" r="0.9" fill="currentColor"/>
      {/* grip with binding */}
      <path d="M18 8 L22 8 L22 14 L18 14 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      <line x1="18" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <line x1="18" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      {/* crossguard */}
      <path d="M11 14 L29 14 L29 17 L11 17 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="11.5" cy="15.5" r="0.6" fill="currentColor"/>
      <circle cx="28.5" cy="15.5" r="0.6" fill="currentColor"/>
      {/* blade — tapered */}
      <path d="M16 17 L24 17 L20 34 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      {/* blood groove */}
      <path d="M20 19 L20 32" stroke="currentColor" strokeWidth="0.6" opacity="0.55"/>
    </g>
  ),
  // Sun disc with rays
  strahlend: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
      {/* rays — 8 cardinal + diagonal */}
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M20 1 L20 7"/>
        <path d="M20 33 L20 39"/>
        <path d="M1 20 L7 20"/>
        <path d="M33 20 L39 20"/>
      </g>
      <g stroke="currentColor" strokeWidth="1.1" opacity="0.7">
        <path d="M6 6 L11 11"/>
        <path d="M29 11 L34 6"/>
        <path d="M6 34 L11 29"/>
        <path d="M29 29 L34 34"/>
      </g>
      {/* outer disc */}
      <circle cx="20" cy="20" r="9" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.4"/>
      {/* inner ring */}
      <circle cx="20" cy="20" r="5.5" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.55"/>
      {/* center diamond */}
      <path d="M20 16 L23 20 L20 24 L17 20 Z" fill="currentColor"/>
    </g>
  ),
  // Skull with decay tendrils (necrotic)
  nekrotisch: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
      <path d="M10 31 L8 37 M14 32 L13 38 M20 33 L20 38 M26 32 L27 38 M30 31 L32 37" stroke="currentColor" strokeWidth="1.1" opacity="0.55"/>
      <path d="M11 14 Q11 5 20 5 Q29 5 29 14 L29 21 Q29 25 26 26 L26 31 L23 31 L23 29 L17 29 L17 31 L14 31 L14 26 Q11 25 11 21 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="16" cy="16" r="2.2" fill="currentColor"/>
      <circle cx="24" cy="16" r="2.2" fill="currentColor"/>
      <path d="M20 19 L18 23 L22 23 Z" fill="currentColor" opacity="0.85"/>
      <path d="M17 26 L17 28 M19 26 L19 28 M21 26 L21 28 M23 26 L23 28" stroke="currentColor" strokeWidth="0.8" opacity="0.75"/>
      <path d="M18 9 L16 12 L18 14" stroke="currentColor" strokeWidth="0.7" opacity="0.55"/>
    </g>
  ),
  // Crystal core snowflake (cold)
  kaelte: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
      {/* 6 bold radial arms with branches */}
      <g stroke="currentColor" strokeWidth="1.5">
        <g transform="translate(20 20)">
          {[0,60,120,180,240,300].map(a => (
            <g key={a} transform={`rotate(${a})`}>
              <line x1="0" y1="-5" x2="0" y2="-17"/>
              <line x1="0" y1="-9" x2="-3" y2="-12" strokeWidth="1.2"/>
              <line x1="0" y1="-9" x2="3" y2="-12" strokeWidth="1.2"/>
              <line x1="0" y1="-13" x2="-2" y2="-15" strokeWidth="1.1"/>
              <line x1="0" y1="-13" x2="2" y2="-15" strokeWidth="1.1"/>
            </g>
          ))}
        </g>
      </g>
      {/* tiny crystal tips */}
      <g fill="currentColor">
        {[0,60,120,180,240,300].map(a => {
          const rad = (a - 90) * Math.PI / 180;
          return <circle key={a} cx={20 + Math.cos(rad)*17} cy={20 + Math.sin(rad)*17} r="1.1"/>;
        })}
      </g>
      {/* central hexagonal crystal */}
      <polygon points="20,13 26,16.5 26,23.5 20,27 14,23.5 14,16.5" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.4"/>
      <polygon points="20,16 23.5,18 23.5,22 20,24 16.5,22 16.5,18" fill="currentColor" opacity="0.85"/>
      <polygon points="20,18 22,19 22,21 20,22 18,21 18,19" fill="rgba(var(--panel-rgb),0.95)"/>
    </g>
  ),
  // Elegant layered flame with curling tongues
  feuer: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4">
      {/* floating embers */}
      <circle cx="8"  cy="13" r="0.7" fill="currentColor" opacity="0.6"/>
      <circle cx="33" cy="9"  r="0.6" fill="currentColor" opacity="0.6"/>
      <circle cx="6"  cy="22" r="0.4" fill="currentColor" opacity="0.4"/>
      <circle cx="34" cy="20" r="0.5" fill="currentColor" opacity="0.45"/>
      <circle cx="14" cy="5"  r="0.5" fill="currentColor" opacity="0.45"/>
      {/* tiny spark crowning the flame */}
      <path d="M22 2 L23 4 L22 5 L21 4 Z" fill="currentColor"/>

      {/* OUTER flame — dark silhouette with flowing curves */}
      <path d="M20 37
               C 7 35, 4 24, 12 16
               C 13 19, 16 18, 14 11
               C 16 5, 22 4, 22 12
               C 24 10, 28 11, 26 16
               C 35 19, 34 32, 24 37
               Z"
        fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.5"/>

      {/* MIDDLE flame — accent color tongue */}
      <path d="M20 33
               C 11 31, 12 22, 17 18
               C 17 21, 20 21, 18 14
               C 20 11, 23 13, 22 18
               C 28 21, 27 29, 22 33
               Z"
        fill="currentColor" opacity="0.88"/>

      {/* INNER core — dark heart of the flame */}
      <path d="M20 28
               C 16 27, 17 23, 19 20
               C 20 22, 22 22, 22 26
               Z"
        fill="rgba(var(--panel-rgb),0.95)"/>

      {/* tiny upper-tip glint */}
      <circle cx="22" cy="9" r="0.9" fill="currentColor" opacity="0.95"/>
    </g>
  ),
  // Lightning bolt silhouette
  blitz: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
      <circle cx="6" cy="14" r="1.1" fill="currentColor" opacity="0.7"/>
      <circle cx="34" cy="26" r="1.1" fill="currentColor" opacity="0.7"/>
      <circle cx="9" cy="32" r="0.7" fill="currentColor" opacity="0.5"/>
      <circle cx="32" cy="10" r="0.7" fill="currentColor" opacity="0.5"/>
      <path d="M24 3 L11 21 L19 21 L15 37 L29 17 L21 17 L26 3 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M23 7 L15 19 L20 19 L17 30" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
    </g>
  ),
  // Skull with crossed bones
  gift: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
      <path d="M8 30 L32 8" strokeWidth="1.5" opacity="0.6"/>
      <path d="M32 30 L8 8" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="8" cy="8"  r="2" fill="rgba(255,255,255,0.16)"/>
      <circle cx="32" cy="8"  r="2" fill="rgba(255,255,255,0.16)"/>
      <circle cx="8" cy="30" r="2" fill="rgba(255,255,255,0.16)"/>
      <circle cx="32" cy="30" r="2" fill="rgba(255,255,255,0.16)"/>
      <path d="M11 19 Q11 11 20 11 Q29 11 29 19 L29 23 Q29 27 26 28 L26 31 L23 31 L23 29 L17 29 L17 31 L14 31 L14 28 Q11 27 11 23 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="16" cy="20" r="1.7" fill="currentColor"/>
      <circle cx="24" cy="20" r="1.7" fill="currentColor"/>
      <path d="M18 25 L18 27 M20 25 L20 27 M22 25 L22 27" opacity="0.7" strokeWidth="0.9"/>
    </g>
  ),
  // Ringing bell (thunder/sound)
  schall: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
      {/* vibration lines on sides */}
      <path d="M3 14 L7 15 M3 21 L7 20" stroke="currentColor" strokeWidth="1.2" opacity="0.7"/>
      <path d="M37 14 L33 15 M37 21 L33 20" stroke="currentColor" strokeWidth="1.2" opacity="0.7"/>
      <path d="M2 9 L6 11" stroke="currentColor" strokeWidth="1" opacity="0.45"/>
      <path d="M38 9 L34 11" stroke="currentColor" strokeWidth="1" opacity="0.45"/>
      {/* bell crown/loop */}
      <path d="M18 4 L22 4 L22 8 L18 8 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      {/* bell body */}
      <path d="M11 25 Q 11 10, 20 8 Q 29 10, 29 25 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.4"/>
      {/* bell rim */}
      <path d="M9 25 L31 25 L31 28 L9 28 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      {/* bell mouth shading line */}
      <line x1="13" y1="25" x2="13" y2="28" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <line x1="27" y1="25" x2="27" y2="28" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      {/* clapper */}
      <line x1="20" y1="28" x2="20" y2="31" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="20" cy="33" r="2.2" fill="currentColor"/>
    </g>
  ),
  // Bubbling vial / corrosive flask (acid)
  saeure: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
      {/* splatter drops around */}
      <circle cx="6" cy="32" r="1.4" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1"/>
      <circle cx="34" cy="30" r="1.6" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1"/>
      <circle cx="33" cy="36" r="0.8" fill="currentColor" opacity="0.7"/>
      <circle cx="7" cy="38" r="0.7" fill="currentColor" opacity="0.7"/>
      {/* steam/fumes */}
      <path d="M14 6 Q15 4 17 5" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      <path d="M23 6 Q25 4 27 5" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      <path d="M19 3 Q21 1 23 2" stroke="currentColor" strokeWidth="1" opacity="0.45"/>
      {/* flask cork */}
      <path d="M16 8 L24 8 L24 11 L16 11 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      {/* flask neck */}
      <path d="M17 11 L23 11 L23 16 L17 16 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      {/* flask body — round bulb */}
      <path d="M17 16 Q9 22 11 30 Q14 37 20 37 Q26 37 29 30 Q31 22 23 16 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.4"/>
      {/* acid fluid line */}
      <path d="M13 26 Q17 28 20 26 Q23 24 27 26" stroke="currentColor" strokeWidth="1.1" opacity="0.85"/>
      {/* bubbles inside */}
      <circle cx="16" cy="30" r="1.2" fill="currentColor" opacity="0.8"/>
      <circle cx="22" cy="32" r="0.9" fill="currentColor" opacity="0.7"/>
      <circle cx="25" cy="28" r="0.6" fill="currentColor" opacity="0.6"/>
    </g>
  ),

  // Bursting magic star (force)
  energie: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
      <path d="M5 5 L7 7 M5 7 L7 5" stroke="currentColor" strokeWidth="1.1" opacity="0.7"/>
      <path d="M33 33 L35 35 M33 35 L35 33" stroke="currentColor" strokeWidth="1.1" opacity="0.7"/>
      <path d="M5 35 L7 33 M5 33 L7 35" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      <path d="M33 5 L35 7 M33 7 L35 5" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      <path d="M20 2 L23.5 16.5 L38 20 L23.5 23.5 L20 38 L16.5 23.5 L2 20 L16.5 16.5 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M20 8 L22 18 L32 20 L22 22 L20 32 L18 22 L8 20 L18 18 Z" fill="currentColor" opacity="0.85"/>
      <circle cx="20" cy="20" r="2.2" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="0.9"/>
      <circle cx="20" cy="20" r="0.9" fill="currentColor"/>
    </g>
  ),

  // Brain silhouette with psi waves
  psychisch: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
      {/* psi waves */}
      <path d="M3 9 Q6 11 5 15" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      <path d="M37 9 Q34 11 35 15" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      <path d="M4 32 Q7 30 6 27" stroke="currentColor" strokeWidth="1" opacity="0.45"/>
      <path d="M36 32 Q33 30 34 27" stroke="currentColor" strokeWidth="1" opacity="0.45"/>
      {/* left hemisphere */}
      <path d="M19 7 Q14 5 10 9 Q6 13 9 18 Q5 22 9 27 Q11 32 16 33 L19 33 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      {/* right hemisphere */}
      <path d="M21 7 Q26 5 30 9 Q34 13 31 18 Q35 22 31 27 Q29 32 24 33 L21 33 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      {/* central fissure highlight */}
      <line x1="20" y1="7" x2="20" y2="33" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
      {/* folds — left */}
      <path d="M12 13 Q14 14 13 16" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
      <path d="M11 20 Q13 21 12 23" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
      <path d="M13 27 Q15 28 14 30" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
      {/* folds — right */}
      <path d="M28 13 Q26 14 27 16" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
      <path d="M29 20 Q27 21 28 23" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
      <path d="M27 27 Q25 28 26 30" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
      {/* brain stem */}
      <path d="M17 33 L17 36 L23 36 L23 33" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.2"/>
    </g>
  ),
  // Shifting arcane star (variable damage type)
  variabel: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 3" opacity="0.6"/>
      <path d="M20 6 L22.5 17.5 L34 20 L22.5 22.5 L20 34 L17.5 22.5 L6 20 L17.5 17.5 Z" fill="rgba(var(--panel-rgb),0.95)" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="20" cy="20" r="2" fill="currentColor"/>
      <circle cx="20" cy="3" r="1.3" fill="currentColor" opacity="0.7"/>
      <circle cx="37" cy="20" r="1.3" fill="currentColor" opacity="0.7"/>
      <circle cx="20" cy="37" r="1.3" fill="currentColor" opacity="0.7"/>
      <circle cx="3" cy="20" r="1.3" fill="currentColor" opacity="0.7"/>
      <path d="M9.5 9.5 L11.5 11.5 M30.5 9.5 L28.5 11.5 M9.5 30.5 L11.5 28.5 M30.5 30.5 L28.5 28.5" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    </g>
  ),
};

// type name (as stored in the spell data) -> glyph id + hue
const DAMAGE_TYPES = {
  'Hieb': ['hieb', 200], 'Wucht': ['wucht', 50], 'Stich': ['stich', 280],
  'Feuer': ['feuer', 30], 'Kälte': ['kaelte', 210], 'Eis': ['kaelte', 210],
  'Blitz': ['blitz', 230], 'Schall': ['schall', 70], 'Säure': ['saeure', 140],
  'Energie': ['energie', 0], 'Strahlend': ['strahlend', 80], 'Strahlung': ['strahlend', 80],
  'Gleißend': ['strahlend', 80], 'Heilig': ['strahlend', 80],
  'Nekrotisch': ['nekrotisch', 320], 'Gift': ['gift', 295], 'Psychisch': ['psychisch', 340],
  'Variabel': ['variabel', 270]
};
const damageColor = (type) => {
  const t = DAMAGE_TYPES[type];
  return t ? `color-mix(in srgb, oklch(0.78 0.15 ${t[1]}), rgb(var(--ink-rgb)) var(--cm))` : null;
};
function DamageIcon({ type, size = 16, style }) {
  const t = DAMAGE_TYPES[type];
  if (!t) return null;
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true"
      style={{ flexShrink: 0, color: damageColor(type), verticalAlign: 'middle', ...style }}>
      {SCHADEN_GLYPHS[t[0]]}
    </svg>
  );
}
// the 13 concrete damage types, in display order
const SCHADENSARTEN = ['Hieb', 'Wucht', 'Stich', 'Feuer', 'Kälte', 'Blitz', 'Schall', 'Säure', 'Energie', 'Strahlend', 'Nekrotisch', 'Gift', 'Psychisch'];
// damage types a spell can deal; "Variabel" spells list theirs in schadenTypen
const spellDamageTypes = z => z.schadenTyp === 'Variabel' ? (z.schadenTypen || []) : z.schadenTyp ? [z.schadenTyp] : [];
Object.assign(window, { DamageIcon, damageColor, SCHADEN_GLYPHS, SCHADENSARTEN, spellDamageTypes });
