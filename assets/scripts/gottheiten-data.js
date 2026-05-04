const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const LOREM_SHORT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const LOREM_LORE = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

window.GODS_DATA = {
  pantheons: [
    { id: "celestial",  label: "Himmlisch"  },
    { id: "abyssal",    label: "Abyssal"    },
    { id: "primordial", label: "Uralt"      },
    { id: "machine",    label: "Maschine"   },
    { id: "void",       label: "Leere"      },
  ],
  gods: [
    // ── CELESTIAL (4) ──────────────────────────────────────────
    {
      id: "aurelia", pantheon: "himmlisch",
      name: "Aurelia", title: "The Gilded Dawn",
      domain: "CELESTISCH · Aurelia · RECHTSCHAFFEN-GUT",
      palette: ["#1a0a3e","#3b1f8c","#7c4dff","#c9b8ff"],
      insigniaSrc: "assets/images/Insignie_Aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="14" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="6" x2="40" y2="20" stroke="currentColor" stroke-width="1.2"/><line x1="40" y1="60" x2="40" y2="74" stroke="currentColor" stroke-width="1.2"/><line x1="6" y1="40" x2="20" y2="40" stroke="currentColor" stroke-width="1.2"/><line x1="60" y1="40" x2="74" y2="40" stroke="currentColor" stroke-width="1.2"/><line x1="16.7" y1="16.7" x2="26.7" y2="26.7" stroke="currentColor" stroke-width="1.2"/><line x1="53.3" y1="53.3" x2="63.3" y2="63.3" stroke="currentColor" stroke-width="1.2"/><line x1="63.3" y1="16.7" x2="53.3" y2="26.7" stroke="currentColor" stroke-width="1.2"/><line x1="26.7" y1="53.3" x2="16.7" y2="63.3" stroke="currentColor" stroke-width="1.2"/><circle cx="40" cy="40" r="5" fill="currentColor" opacity="0.6"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Solar Dominion", alignment: "Lawful Radiant", worshippers: LOREM_SHORT,
    },
    {
      id: "elysarion", pantheon: "himmlisch",
      name: "Elysarion", title: "The Silver Weaver",
      domain: "Fate · Memory · Silver Thread",
      palette: ["#0d1a3e","#1e3a7c","#4d7cff","#b8cfff"],
      insigniaSrc: "assets/images/Insignie_Elysarion.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><path d="M20 40 C20 28 32 22 40 30 C48 38 60 32 60 40 C60 48 48 54 40 50 C32 46 20 52 20 40Z" stroke="currentColor" stroke-width="1.5"/><circle cx="40" cy="40" r="3" fill="currentColor"/><circle cx="22" cy="40" r="2" stroke="currentColor" stroke-width="1"/><circle cx="58" cy="40" r="2" stroke="currentColor" stroke-width="1"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Thread of Fate", alignment: "True Neutral", worshippers: LOREM_SHORT,
    },
    {
      id: "sienna", pantheon: "himmlisch",
      name: "Sienna", title: "The Stormcaller",
      domain: "Thunder · War · Courage",
      palette: ["#0a1a2e","#1a4a7c","#4da6ff","#b8e4ff"],
      insigniaSrc: "assets/images/Insignie_Sienna.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><polygon points="44,8 28,44 40,44 36,72 52,36 40,36" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="20" x2="26" y2="26" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="60" y1="20" x2="54" y2="26" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="12" y1="40" x2="20" y2="40" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="68" y1="40" x2="60" y2="40" stroke="currentColor" stroke-width="1" opacity="0.5"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Stormwright", alignment: "Chaotic Neutral", worshippers: LOREM_SHORT,
    },
    {
      id: "avalaste", pantheon: "himmlisch",
      name: "Avalaste", title: "The Eternal Vigil",
      domain: "Protection · Stars · Silence",
      palette: ["#0a0f2e","#1a2a6c","#3a5acc","#a8c0ff"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><polygon points="40,8 47,30 70,30 52,44 59,66 40,52 21,66 28,44 10,30 33,30" stroke="currentColor" stroke-width="1.5"/><circle cx="40" cy="40" r="8" stroke="currentColor" stroke-width="1" opacity="0.5"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Astral Ward", alignment: "Lawful Good", worshippers: LOREM_SHORT,
    },

    // ── ABYSSAL (4) ────────────────────────────────────────────
    {
      id: "cecillia", pantheon: "abyssal",
      name: "Cecillia", title: "The Hollow Queen",
      domain: "Entropy · Silence · The Unmade",
      palette: ["#0f0a1e","#2a1050","#6b3fa0","#c4a0ff"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="28" stroke="currentColor" stroke-width="1"/><circle cx="40" cy="40" r="18" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><circle cx="40" cy="40" r="8" stroke="currentColor" stroke-width="1"/><circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.4"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Void Erasure", alignment: "Neutral Evil", worshippers: LOREM_SHORT,
    },
    {
      id: "lorelei", pantheon: "abyssal",
      name: "Lorelei", title: "The Dream Devourer",
      domain: "Nightmares · Illusion · Hunger",
      palette: ["#12051f","#2e0d52","#7b2fa0","#e0a0ff"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><path d="M40 12 A28 28 0 1 0 40 68 A20 20 0 1 1 40 12Z" stroke="currentColor" stroke-width="1.5"/><circle cx="40" cy="40" r="4" fill="currentColor" opacity="0.5"/><path d="M32 28 Q40 22 48 28" stroke="currentColor" stroke-width="1"/><path d="M28 36 Q40 30 52 36" stroke="currentColor" stroke-width="0.8" opacity="0.5"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Dream Consumption", alignment: "Chaotic Evil", worshippers: LOREM_SHORT,
    },
    {
      id: "vindeah", pantheon: "abyssal",
      name: "Vindeah", title: "The Crimson Tide",
      domain: "Blood · Sacrifice · Rebirth",
      palette: ["#1a0510","#501030","#a03060","#ffb0c0"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><polygon points="40,10 62,23 62,57 40,70 18,57 18,23" stroke="currentColor" stroke-width="1.5"/><polygon points="40,24 52,31 52,49 40,56 28,49 28,31" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="40" cy="40" r="6" stroke="currentColor" stroke-width="1"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Sanguine Cycle", alignment: "Lawful Neutral", worshippers: LOREM_SHORT,
    },
    {
      id: "ferys", pantheon: "abyssal",
      name: "Ferys", title: "The Ashen Mirror",
      domain: "Reflection · Deception · Shadow",
      palette: ["#100a1a","#301840","#703080","#d090ff"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><rect x="20" y="14" width="40" height="52" rx="2" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="40" x2="60" y2="40" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/><circle cx="40" cy="27" r="6" stroke="currentColor" stroke-width="1"/><circle cx="40" cy="53" r="6" stroke="currentColor" stroke-width="1" opacity="0.4"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Shadow Mirror", alignment: "Neutral Evil", worshippers: LOREM_SHORT,
    },

    // ── PRIMORDIAL (4) ─────────────────────────────────────────
    {
      id: "daramur", pantheon: "uralt",
      name: "Daramur", title: "The Deep Shaper",
      domain: "Earth · Memory · Time",
      palette: ["#0a1205","#1a3010","#4a8020","#b0e070"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><rect x="40" y="10" width="30" height="30" transform="rotate(45 40 40)" stroke="currentColor" stroke-width="1.5"/><rect x="40" y="22" width="18" height="18" transform="rotate(45 40 40)" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="40" cy="40" r="4" fill="currentColor" opacity="0.4"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Tectonic Memory", alignment: "True Neutral", worshippers: LOREM_SHORT,
    },
    {
      id: "eiritha", pantheon: "uralt",
      name: "Eiritha", title: "The Breathless Voice",
      domain: "Wind · Speech · Change",
      palette: ["#0a1525","#1a3555","#3a75b5","#a0d0f0"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><path d="M15 30 Q30 20 40 30 Q50 40 65 30" stroke="currentColor" stroke-width="1.5"/><path d="M15 40 Q30 30 40 40 Q50 50 65 40" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><path d="M15 50 Q30 40 40 50 Q50 60 65 50" stroke="currentColor" stroke-width="1" opacity="0.4"/><circle cx="15" cy="40" r="2" fill="currentColor" opacity="0.5"/><circle cx="65" cy="40" r="2" fill="currentColor" opacity="0.5"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Resonant Wind", alignment: "Chaotic Good", worshippers: LOREM_SHORT,
    },
    {
      id: "hadir", pantheon: "uralt",
      name: "Hadir", title: "The First Flame",
      domain: "Fire · Creation · Destruction",
      palette: ["#1f0a00","#5a2000","#d05000","#ffb050"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><polygon points="40,10 68,65 12,65" stroke="currentColor" stroke-width="1.5"/><polygon points="40,22 58,58 22,58" stroke="currentColor" stroke-width="1" opacity="0.6"/><polygon points="40,34 50,52 30,52" stroke="currentColor" stroke-width="1" opacity="0.3"/><circle cx="40" cy="65" r="3" stroke="currentColor" stroke-width="1"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Primal Combustion", alignment: "Chaotic Neutral", worshippers: LOREM_SHORT,
    },
    {
      id: "selunara", pantheon: "uralt",
      name: "Selunara", title: "The Tidal Mother",
      domain: "Water · Birth · Cycles",
      palette: ["#050f20","#0a2550","#0a6080","#50d0d0"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><path d="M14 50 Q20 30 40 28 Q60 26 66 50" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M14 50 Q20 62 40 64 Q60 66 66 50" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="40" cy="46" r="8" stroke="currentColor" stroke-width="1"/><line x1="40" y1="14" x2="40" y2="28" stroke="currentColor" stroke-width="1" opacity="0.5"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Tidal Resonance", alignment: "True Neutral", worshippers: LOREM_SHORT,
    },

    // ── MACHINE (4) ────────────────────────────────────────────
    {
      id: "aetherius", pantheon: "maschine",
      name: "Aetherius", title: "The Eternal Architect",
      domain: "Mathematics · Order · The Grid",
      palette: ["#050f1f","#0a2550","#0a5090","#50b0ff"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><rect x="14" y="14" width="24" height="24" stroke="currentColor" stroke-width="1.5"/><rect x="42" y="14" width="24" height="24" stroke="currentColor" stroke-width="1.5"/><rect x="14" y="42" width="24" height="24" stroke="currentColor" stroke-width="1.5"/><rect x="42" y="42" width="24" height="24" stroke="currentColor" stroke-width="1.5"/><circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.7"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Systemic Precision", alignment: "Lawful Neutral", worshippers: LOREM_SHORT,
    },
    {
      id: "serenith", pantheon: "maschine",
      name: "Serenith", title: "The Wired Oracle",
      domain: "Information · Network · Prophecy",
      palette: ["#050f20","#0a2a5e","#1a6ab5","#70d0ff"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="24" stroke="currentColor" stroke-width="1.5"/><line x1="16" y1="40" x2="64" y2="40" stroke="currentColor" stroke-width="1"/><line x1="40" y1="16" x2="40" y2="64" stroke="currentColor" stroke-width="1"/><line x1="22.9" y1="22.9" x2="57.1" y2="57.1" stroke="currentColor" stroke-width="0.8" opacity="0.6"/><line x1="57.1" y1="22.9" x2="22.9" y2="57.1" stroke="currentColor" stroke-width="0.8" opacity="0.6"/><circle cx="40" cy="40" r="5" stroke="currentColor" stroke-width="1"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Omniscient Signal", alignment: "True Neutral", worshippers: LOREM_SHORT,
    },
    {
      id: "hydea", pantheon: "maschine",
      name: "Hydea", title: "The Iron Memory",
      domain: "Metal · Time · Persistence",
      palette: ["#0a0a10","#1a1a35","#4a4a80","#c0c0e0"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="24" stroke="currentColor" stroke-width="1.5"/><line x1="16" y1="40" x2="64" y2="40" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="16" x2="40" y2="64" stroke="currentColor" stroke-width="1.5"/><circle cx="40" cy="40" r="8" stroke="currentColor" stroke-width="1"/><circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.6"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Enduring Form", alignment: "Lawful Good", worshippers: LOREM_SHORT,
    },
    {
      id: "melion", pantheon: "maschine",
      name: "Melion", title: "The Clockwork Sovereign",
      domain: "Gears · Precision · Time",
      palette: ["#0a0f18","#1a2540","#304080","#80a0e0"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="22" stroke="currentColor" stroke-width="1.5"/><circle cx="40" cy="40" r="10" stroke="currentColor" stroke-width="1"/><line x1="40" y1="18" x2="40" y2="28" stroke="currentColor" stroke-width="2"/><line x1="40" y1="52" x2="40" y2="62" stroke="currentColor" stroke-width="2"/><line x1="18" y1="40" x2="28" y2="40" stroke="currentColor" stroke-width="2"/><line x1="52" y1="40" x2="62" y2="40" stroke="currentColor" stroke-width="2"/><circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.6"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Temporal Gearing", alignment: "Lawful Neutral", worshippers: LOREM_SHORT,
    },

    // ── VOID (3) ───────────────────────────────────────────────
    {
      id: "ophelis", pantheon: "leere",
      name: "Ophelis", title: "The Nameless Between",
      domain: "Silence · The Gap · Transition",
      palette: ["#080810","#101025","#252550","#8080b0"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><line x1="10" y1="40" x2="70" y2="40" stroke="currentColor" stroke-width="1.5"/><circle cx="10" cy="40" r="2" fill="currentColor" opacity="0.5"/><circle cx="70" cy="40" r="2" fill="currentColor" opacity="0.5"/><circle cx="40" cy="40" r="3" stroke="currentColor" stroke-width="1"/><line x1="40" y1="20" x2="40" y2="34" stroke="currentColor" stroke-width="0.8" opacity="0.4"/><line x1="40" y1="46" x2="40" y2="60" stroke="currentColor" stroke-width="0.8" opacity="0.4"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Suspended Moment", alignment: "True Neutral", worshippers: LOREM_SHORT,
    },
    {
      id: "thraxis", pantheon: "leere",
      name: "Thraxis", title: "The Unwritten End",
      domain: "Endings · Completion · Release",
      palette: ["#05080f","#0a1530","#152560","#6080d0"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="26" stroke="currentColor" stroke-width="1"/><circle cx="40" cy="40" r="18" stroke="currentColor" stroke-width="0.8" opacity="0.6"/><circle cx="40" cy="40" r="10" stroke="currentColor" stroke-width="0.6" opacity="0.3"/><circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.2"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Final Culmination", alignment: "Lawful Neutral", worshippers: LOREM_SHORT,
    },
    {
      id: "maledor", pantheon: "leere",
      name: "Maledor", title: "The Paradox Sovereign",
      domain: "Contradiction · Chaos · The Impossible",
      palette: ["#100510","#301030","#702080","#e080ff"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="22" stroke="currentColor" stroke-width="1.5"/><line x1="22" y1="58" x2="58" y2="22" stroke="currentColor" stroke-width="1.5"/><circle cx="40" cy="40" r="6" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="40" cy="22" r="3" stroke="currentColor" stroke-width="0.8" opacity="0.4"/><circle cx="40" cy="58" r="3" stroke="currentColor" stroke-width="0.8" opacity="0.4"/></svg>`,
      description: LOREM, lore: LOREM_LORE,
      power: "Paradox Manifestation", alignment: "Chaotic Neutral", worshippers: LOREM_SHORT,
    },
  ],

  // ── DEMONS ─────────────────────────────────────────────────
  demons: [
    {
      id: "baalbrezan", name: "Baalbrezan", title: "Der Aschefürst",
      domain: "Feuer · Vernichtung · Herrschaft",
      palette: ["#1a0500","#5a1000","#c03000","#ff7040"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><polygon points="40,8 72,68 8,68" stroke="currentColor" stroke-width="1.5"/><polygon points="40,20 62,62 18,62" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="40" y1="8" x2="40" y2="68" stroke="currentColor" stroke-width="0.8" opacity="0.3"/><circle cx="40" cy="48" r="8" stroke="currentColor" stroke-width="1"/></svg>`,
      description: LOREM, lore: LOREM_LORE, power: "Aschenfluch", alignment: "Chaotic Evil", worshippers: LOREM_SHORT,
    },
    {
      id: "cahbri", name: "Cahbri", title: "Die Flüsternde Leere",
      domain: "Wahnsinn · Stille · Verderbnis",
      palette: ["#0a0015","#250040","#600090","#c060ff"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><path d="M40 14 C22 14 10 26 10 40 C10 54 22 66 40 66 C58 66 70 54 70 40" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M55 18 C65 24 70 32 70 40" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><circle cx="40" cy="40" r="6" stroke="currentColor" stroke-width="1"/><circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.4"/></svg>`,
      description: LOREM, lore: LOREM_LORE, power: "Gedankenkorruption", alignment: "Neutral Evil", worshippers: LOREM_SHORT,
    },
    {
      id: "grikuuth", name: "Grikuuth", title: "Der Knochen-Wandler",
      domain: "Tod · Mutation · Fleisch",
      palette: ["#0a0f05","#1a2a08","#406015","#90c030"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><path d="M30 20 Q40 10 50 20 L55 40 Q60 55 40 65 Q20 55 25 40 Z" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="40" y1="10" x2="40" y2="65" stroke="currentColor" stroke-width="0.8" opacity="0.4"/><circle cx="40" cy="38" r="7" stroke="currentColor" stroke-width="1"/><line x1="25" y1="38" x2="33" y2="38" stroke="currentColor" stroke-width="1"/><line x1="47" y1="38" x2="55" y2="38" stroke="currentColor" stroke-width="1"/></svg>`,
      description: LOREM, lore: LOREM_LORE, power: "Fleischformung", alignment: "Chaotic Evil", worshippers: LOREM_SHORT,
    },
    {
      id: "kizrovidus", name: "Kizrovidus", title: "Der Ewige Hunger",
      domain: "Gier · Konsum · Leere",
      palette: ["#100808","#301010","#702020","#e05050"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="26" stroke="currentColor" stroke-width="1.5"/><path d="M28 32 Q40 20 52 32" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M26 44 Q40 60 54 44" stroke="currentColor" stroke-width="1" fill="none"/><circle cx="32" cy="36" r="3" fill="currentColor" opacity="0.5"/><circle cx="48" cy="36" r="3" fill="currentColor" opacity="0.5"/></svg>`,
      description: LOREM, lore: LOREM_LORE, power: "Ewiger Konsum", alignment: "Neutral Evil", worshippers: LOREM_SHORT,
    },
    {
      id: "meleshor", name: "Meleshor", title: "Der Silberne Lügner",
      domain: "Täuschung · Spiegel · Doppelgänger",
      palette: ["#0a0a18","#181830","#404080","#a0a0e0"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><rect x="22" y="12" width="36" height="56" rx="2" stroke="currentColor" stroke-width="1.5"/><line x1="22" y1="40" x2="58" y2="40" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/><ellipse cx="40" cy="28" rx="8" ry="10" stroke="currentColor" stroke-width="1"/><ellipse cx="40" cy="54" rx="8" ry="10" stroke="currentColor" stroke-width="1" opacity="0.35"/></svg>`,
      description: LOREM, lore: LOREM_LORE, power: "Spiegeltäuschung", alignment: "Lawful Evil", worshippers: LOREM_SHORT,
    },
    {
      id: "nalphimex", name: "Nalphimex", title: "Der Kettengott",
      domain: "Knechtschaft · Kontrolle · Metall",
      palette: ["#080810","#151530","#303070","#7070c0"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><circle cx="26" cy="26" r="8" stroke="currentColor" stroke-width="1.5"/><circle cx="54" cy="54" r="8" stroke="currentColor" stroke-width="1.5"/><line x1="32" y1="32" x2="48" y2="48" stroke="currentColor" stroke-width="2"/><circle cx="54" cy="26" r="8" stroke="currentColor" stroke-width="1.5"/><circle cx="26" cy="54" r="8" stroke="currentColor" stroke-width="1.5"/><line x1="48" y1="32" x2="32" y2="48" stroke="currentColor" stroke-width="2"/></svg>`,
      description: LOREM, lore: LOREM_LORE, power: "Kettenzwang", alignment: "Lawful Evil", worshippers: LOREM_SHORT,
    },
    {
      id: "netrosk", name: "Netrosk", title: "Die Pesthand",
      domain: "Seuche · Verfall · Vergessen",
      palette: ["#081008","#102010","#285028","#60b060"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="20" stroke="currentColor" stroke-width="1.5"/><path d="M40 20 L40 14" stroke="currentColor" stroke-width="1"/><path d="M40 60 L40 66" stroke="currentColor" stroke-width="1"/><path d="M20 40 L14 40" stroke="currentColor" stroke-width="1"/><path d="M60 40 L66 40" stroke="currentColor" stroke-width="1"/><circle cx="40" cy="40" r="8" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/><circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.35"/></svg>`,
      description: LOREM, lore: LOREM_LORE, power: "Pesthauch", alignment: "Neutral Evil", worshippers: LOREM_SHORT,
    },
    {
      id: "vezvoriak", name: "Vezvoriak", title: "Der Zeitfresser",
      domain: "Zeit · Auslöschung · Chronos",
      palette: ["#050510","#101030","#282880","#5858e0"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="24" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="16" x2="40" y2="40" stroke="currentColor" stroke-width="2"/><line x1="40" y1="40" x2="56" y2="50" stroke="currentColor" stroke-width="1.5"/><circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.7"/><line x1="40" y1="16" x2="38" y2="22" stroke="currentColor" stroke-width="1"/><line x1="40" y1="16" x2="42" y2="22" stroke="currentColor" stroke-width="1"/></svg>`,
      description: LOREM, lore: LOREM_LORE, power: "Zeitkorruption", alignment: "Chaotic Evil", worshippers: LOREM_SHORT,
    },
    {
      id: "yxlarak", name: "Yx'larak", title: "Das Gesichtslose",
      domain: "Identität · Auflösung · Chaos",
      palette: ["#0f050f","#2a102a","#602060","#d060d0"],
      insigniaSrc: "assets/images/old_aurelia.png",

      symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="24" stroke="currentColor" stroke-width="1.5"/><line x1="16" y1="40" x2="64" y2="40" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/><line x1="40" y1="16" x2="40" y2="64" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/><circle cx="40" cy="40" r="10" stroke="currentColor" stroke-width="1" stroke-dasharray="2 4"/><circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.3"/></svg>`,
      description: LOREM, lore: LOREM_LORE, power: "Identitätsauflösung", alignment: "Chaotic Evil", worshippers: LOREM_SHORT,
    },
  ],

  // ── NATURGEISTER ───────────────────────────────────────────
  naturgeister: [
    { id: "ng-waldgeist",   name: "Waldgeist",   title: "Geist des Alten Waldes",   domain: "Wald · Wachstum · Schutz",    palette: ["#081208","#142814","#306030","#80c080"], insigniaSrc: "assets/images/old_aurelia.png",
 symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><polygon points="40,10 55,35 40,30 25,35" stroke="currentColor" stroke-width="1.5" fill="none"/><polygon points="40,28 58,55 40,48 22,55" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="40" y1="55" x2="40" y2="70" stroke="currentColor" stroke-width="2"/><line x1="32" y1="65" x2="48" y2="65" stroke="currentColor" stroke-width="1.5"/></svg>`, description: LOREM_SHORT, lore: LOREM_LORE, power: "Waldatem", alignment: "Neutral Good", worshippers: LOREM_SHORT },
    { id: "ng-steingeist",  name: "Steingeist",  title: "Stimme des Gebirges",       domain: "Stein · Ausdauer · Tiefe",    palette: ["#101010","#252525","#555555","#b0b0b0"], insigniaSrc: "assets/images/old_aurelia.png",
 symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><polygon points="40,12 68,60 12,60" stroke="currentColor" stroke-width="1.5" fill="none"/><polygon points="40,28 56,56 24,56" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/><circle cx="40" cy="46" r="5" stroke="currentColor" stroke-width="1"/></svg>`, description: LOREM_SHORT, lore: LOREM_LORE, power: "Erdgedächtnis", alignment: "True Neutral", worshippers: LOREM_SHORT },
    { id: "ng-flussgeist",  name: "Flussgeist",  title: "Stimme des fließenden Wassers", domain: "Wasser · Bewegung · Zeit", palette: ["#050f20","#0a2040","#1a5080","#60b0e0"], insigniaSrc: "assets/images/old_aurelia.png",
 symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><path d="M14 35 Q27 25 40 35 Q53 45 66 35" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M14 45 Q27 35 40 45 Q53 55 66 45" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.7"/><path d="M14 55 Q27 45 40 55 Q53 65 66 55" stroke="currentColor" stroke-width="1" fill="none" opacity="0.4"/></svg>`, description: LOREM_SHORT, lore: LOREM_LORE, power: "Strömung", alignment: "True Neutral", worshippers: LOREM_SHORT },
    { id: "ng-windgeist",   name: "Windgeist",   title: "Atem des freien Himmels",   domain: "Wind · Freiheit · Wandel",    palette: ["#080f18","#101e30","#204060","#80b0d0"], insigniaSrc: "assets/images/old_aurelia.png",
 symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><path d="M15 30 Q30 20 40 30 Q50 40 65 30" stroke="currentColor" stroke-width="1.5"/><path d="M15 40 Q30 30 40 40 Q50 50 65 40" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><path d="M15 50 Q30 40 40 50 Q50 60 65 50" stroke="currentColor" stroke-width="1" opacity="0.4"/><circle cx="15" cy="40" r="2" fill="currentColor" opacity="0.5"/></svg>`, description: LOREM_SHORT, lore: LOREM_LORE, power: "Windstimme", alignment: "Chaotic Good", worshippers: LOREM_SHORT },
    { id: "ng-feuergeist",  name: "Feuergeist",  title: "Glut der Urkraft",          domain: "Feuer · Erneuerung · Licht",  palette: ["#180800","#402000","#904010","#e08030"], insigniaSrc: "assets/images/old_aurelia.png",
 symbolSvg: `<svg viewBox="0 0 80 80" fill="none"><path d="M40 65 C25 55 18 42 26 30 C30 24 36 28 34 36 C40 28 44 16 52 22 C60 28 58 50 40 65Z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="40" cy="48" r="6" stroke="currentColor" stroke-width="1"/></svg>`, description: LOREM_SHORT, lore: LOREM_LORE, power: "Urglut", alignment: "Chaotic Neutral", worshippers: LOREM_SHORT },
  ],
};
