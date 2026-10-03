// school-icon.jsx — spell-school badges shared by the spell pages and the character sheet.
// Exposes: window.SchoolIcon, window.SCHOOL_COLORS, window.schoolColor

const SCHOOL_COLORS = {
  'Illusion': 'rgb(215 123 255)',
  'Bannmagie': 'rgb(111 182 255)',
  'Nekromantie': 'rgb(127 224 122)',
  'Erkenntnismagie': 'rgb(184 166 255)',
  'Beschwörung': 'rgb(233 185 73)',
  'Verwandlung': 'rgb(255 160 74)',
  'Hervorrufung': 'rgb(255 107 74)',
  'Verzauberung': 'rgb(255 123 182)',
  'Weissagung': 'rgb(184 166 255)'
};
const schoolColor = s => SCHOOL_COLORS[s] || 'oklch(0.62 0.18 270)';
// ─── SCHOOL ICONS ─────────────────────────────────────────────────────────────
// 64×64 hexagon badge with one glyph per school; colour comes from schoolColor().
const SCHOOL_GLYPHS = {
  'Erkenntnismagie': <>
    <path d="M13 35 C19 25 45 25 51 35 C45 45 19 45 13 35 Z" />
    <circle cx="32" cy="35" r="6" />
    <circle cx="32" cy="35" r="2.2" fill="currentColor" />
    <path d="M32 13 V19 M21 16 L24 21 M43 16 L40 21" />
  </>,
  'Hervorrufung': <>
    <circle cx="23" cy="41" r="7" fill="currentColor" fillOpacity="0.3" />
    <circle cx="23" cy="41" r="2.4" fill="currentColor" />
    <path d="M28 36 L48 16" />
    <path d="M18.5 35.5 L36 18" strokeOpacity="0.75" />
    <path d="M28.5 45.5 L46 28" strokeOpacity="0.75" />
    <path d="M14 30 L22 22 M34 50 L42 42" strokeOpacity="0.45" strokeWidth="1.8" />
  </>,
  'Verwandlung': <>
    <path d="M17.5 29 A15 15 0 0 1 44.5 23" />
    <path d="M46 15.5 L45 23.5 L37 22.5" />
    <path d="M46.5 35 A15 15 0 0 1 19.5 41" />
    <path d="M18 48.5 L19 40.5 L27 41.5" />
    <path d="M32 26 L38 32 L32 38 L26 32 Z" fill="currentColor" fillOpacity="0.3" />
  </>,
  'Nekromantie': <>
    <path d="M22 48 V28 C22 21 26.5 16 32 16 C37.5 16 42 21 42 28 V48" />
    <path d="M15 48 H49" />
    <path d="M32 23 V37 M26.5 28 H37.5" />
    <path d="M18 44 C19 41 17 39 18 36 M46 44 C45 41 47 39 46 36" strokeOpacity="0.6" strokeWidth="1.6" />
  </>,
  'Illusion': <>
    <path d="M17 18 H47 V30 C47 41 40 48 32 50 C24 48 17 41 17 30 Z" />
    <path d="M22 28 C24 25.5 27 25.5 29 28 C27 30.5 24 30.5 22 28 Z M35 28 C37 25.5 40 25.5 42 28 C40 30.5 37 30.5 35 28 Z" fill="currentColor" />
    <path d="M25 39 C29 42.5 35 42.5 39 39" />
    <path d="M32 18 V50" strokeWidth="1.2" strokeDasharray="2, 2.5" strokeOpacity="0.7" />
  </>,
  'Verzauberung': <>
    <path d="M32 48 C19 40 14 32 17.5 25.5 C21 19 28.5 19 32 25.5 C35.5 19 43 19 46.5 25.5 C50 32 45 40 32 48 Z" />
    <path d="M32 34 a1.6 1.6 0 0 1 3.2 0 a3.2 3.2 0 0 1 -6.4 0 a4.8 4.8 0 0 1 9.6 0" strokeWidth="1.8" />
  </>,
  'Bannmagie': <>
    <path d="M32 14 L46 19.5 V30 C46 39.5 40 45 32 49 C24 45 18 39.5 18 30 V19.5 Z" />
    <path d="M32 22 L38 31 L32 40 L26 31 Z" fill="currentColor" fillOpacity="0.3" />
  </>,
  'Beschwörung': <>
    <ellipse cx="32" cy="45" rx="15" ry="4.5" />
    <path d="M32 12 L34.4 23.6 L45 26 L34.4 28.4 L32 40 L29.6 28.4 L19 26 L29.6 23.6 Z" fill="currentColor" fillOpacity="0.3" />
    <path d="M20 38 V41 M44 38 V41" strokeOpacity="0.6" />
  </>
};
function SchoolIcon({ school, size = 16, opacity = 1 }) {
  const glyph = SCHOOL_GLYPHS[school];
  if (!glyph) return null;
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" aria-hidden="true"
      style={{ flexShrink: 0, opacity, color: `color-mix(in srgb, ${schoolColor(school)}, rgb(var(--ink-rgb)) var(--cm))` }}>
      <path d="M32 4 L56.25 18 V46 L32 60 L7.75 46 V18 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <path d="M32 8.5 L52.4 20.25 V43.75 L32 55.5 L11.6 43.75 V20.25 Z" stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.8" />
      <g fill="currentColor" opacity="0.7">
        <circle cx="7.75" cy="18" r="1.1" /><circle cx="56.25" cy="18" r="1.1" />
        <circle cx="7.75" cy="46" r="1.1" /><circle cx="56.25" cy="46" r="1.1" />
      </g>
      <g stroke="currentColor" transform="translate(32 32) scale(.8) translate(-32 -32)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">{glyph}</g>
    </svg>
  );
}

Object.assign(window, { SchoolIcon, SCHOOL_COLORS, schoolColor });
