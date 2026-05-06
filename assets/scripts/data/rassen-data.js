window.RACE_PAGES = {
  // ── Standalone races ────────────────────────────────────
  'aarakocra':       'Aarakocra.html',
  'aasimar':         'Aasimar.html',
  'dhampire':        'Dhampir.html',
  'echsenmenschen':  null,
  'feen':            null,
  'firbolg':         null,
  'githyanki':       null,
  'githzerai':       null,
  'goblins':         null,
  'goliaths':        null,
  'grottenschrate':  null,
  'halbelfen':       null,
  'halborks':        null,
  'harengons':       null,
  'hexblute':        null,
  'hobgoblins':      null,
  'kenku':           null,
  'kobolde':         null,
  'menschen':        null,
  'minotauren':      null,
  'orks':            null,
  'satyrn':          null,
  'tabaxi':          null,
  'tieflinge':       null,
  'tortels':         null,
  'tritons':         null,
  'wandler':         null,
  'wechselbälger':   null,
  'wiedergeborene':  null,
  'yuan-ti':         null,
  'zentauren':       null,
  // ── Drachenblütige subraces ─────────────────────────────
  'chromatische':    null,
  'edelstein':       null,
  'metallische':     null,
  // ── Elfen subraces ──────────────────────────────────────
  'dunkelelfen':     null,
  'eladrin':         null,
  'hochelfen':       null,
  'meereselfen':     null,
  'schattenfeen':    null,
  'waldelfen':       null,
  // ── Genasi subraces ─────────────────────────────────────
  'erd-genasi':      null,
  'feuer-genasi':    null,
  'luft-genasi':     null,
  'wasser-genasi':   null,
  // ── Gnome subraces ──────────────────────────────────────
  'felsengnome':     null,
  'tiefengnome':     null,
  'waldgnome':       null,
  // ── Halblinge subraces ──────────────────────────────────
  'leichtfuesse':    null,
  'staemmige':       null,
  // ── Zwerge subraces ─────────────────────────────────────
  'gebirgszwerge':   null,
  'grauzwerge':      null,
  'huegelzwerge':    null,
};

window.RASSEN_DATA = [
  { type:'race',  id:'aarakocra',      name:'Aarakocra' },
  { type:'race',  id:'aasimar',        name:'Aasimar' },
  { type:'race',  id:'dhampire',       name:'Dhampire' },
  { type:'group', id:'drachenbluetige', name:'Drachenblütige', subraces:[
    { id:'chromatische', name:'Chromatische Drachenblütige' },
    { id:'edelstein',    name:'Edelstein Drachenblütige' },
    { id:'metallische',  name:'Metallische Drachenblütige' }
  ]},
  { type:'race',  id:'echsenmenschen', name:'Echsenmenschen' },
  { type:'group', id:'elfen',          name:'Elfen', subraces:[
    { id:'dunkelelfen',  name:'Dunkelelfen' },
    { id:'eladrin',      name:'Eladrin' },
    { id:'hochelfen',    name:'Hochelfen' },
    { id:'meereselfen',  name:'Meereselfen' },
    { id:'schattenfeen', name:'Schattenfeen' },
    { id:'waldelfen',    name:'Waldelfen' }
  ]},
  { type:'race',  id:'feen',           name:'Feen' },
  { type:'race',  id:'firbolg',        name:'Firbolg' },
  { type:'group', id:'genasi',         name:'Genasi', subraces:[
    { id:'erd-genasi',   name:'Erd-Genasi' },
    { id:'feuer-genasi', name:'Feuer-Genasi' },
    { id:'luft-genasi',  name:'Luft-Genasi' },
    { id:'wasser-genasi',name:'Wasser-Genasi' }
  ]},
  { type:'race',  id:'githyanki',      name:'Githyanki' },
  { type:'race',  id:'githzerai',      name:'Githzerai' },
  { type:'group', id:'gnome',          name:'Gnome', subraces:[
    { id:'felsengnome',  name:'Felsengnome' },
    { id:'tiefengnome',  name:'Tiefengnome' },
    { id:'waldgnome',    name:'Waldgnome' }
  ]},
  { type:'race',  id:'goblins',        name:'Goblins' },
  { type:'race',  id:'goliaths',       name:'Goliaths' },
  { type:'race',  id:'grottenschrate', name:'Grottenschrate' },
  { type:'race',  id:'halbelfen',      name:'Halbelfen' },
  { type:'group', id:'halblinge',      name:'Halblinge', subraces:[
    { id:'leichtfuesse', name:'Leichtfüße' },
    { id:'staemmige',    name:'Stämmige' }
  ]},
  { type:'race',  id:'halborks',       name:'Halborks' },
  { type:'race',  id:'harengons',      name:'Harengons' },
  { type:'race',  id:'hexblute',       name:'Hexblute' },
  { type:'race',  id:'hobgoblins',     name:'Hobgoblins' },
  { type:'race',  id:'kenku',          name:'Kenku' },
  { type:'race',  id:'kobolde',        name:'Kobolde' },
  { type:'race',  id:'menschen',       name:'Menschen' },
  { type:'race',  id:'minotauren',     name:'Minotauren' },
  { type:'race',  id:'orks',           name:'Orks' },
  { type:'race',  id:'satyrn',         name:'Satyrn' },
  { type:'race',  id:'tabaxi',         name:'Tabaxi' },
  { type:'race',  id:'tieflinge',      name:'Tieflinge' },
  { type:'race',  id:'tortels',        name:'Tortels' },
  { type:'race',  id:'tritons',        name:'Tritons' },
  { type:'race',  id:'wandler',        name:'Wandler' },
  { type:'race',  id:'wechselbälger',  name:'Wechselbälger' },
  { type:'race',  id:'wiedergeborene', name:'Wiedergeborene' },
  { type:'race',  id:'yuan-ti',        name:'Yuan-ti' },
  { type:'race',  id:'zentauren',      name:'Zentauren' },
  { type:'group', id:'zwerge',         name:'Zwerge', subraces:[
    { id:'gebirgszwerge',name:'Gebirgszwerge' },
    { id:'grauzwerge',   name:'Grauzwerge' },
    { id:'huegelzwerge', name:'Hügelzwerge' }
  ]}
];
