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

const _insignia = 'assets/images/gods/insignia/Insignie_Aurelia.png';

window.RASSEN_DATA = [
  { type:'race',  id:'aarakocra',      name:'Aarakocra',      insigniaSrc: _insignia },
  { type:'race',  id:'aasimar',        name:'Aasimar',        insigniaSrc: _insignia },
  { type:'race',  id:'dhampire',       name:'Dhampire',       insigniaSrc: _insignia },
  { type:'group', id:'drachenbluetige', name:'Drachenblütige', subraces:[
    { id:'chromatische', name:'Chromatische Drachenblütige', insigniaSrc: _insignia },
    { id:'edelstein',    name:'Edelstein Drachenblütige',    insigniaSrc: _insignia },
    { id:'metallische',  name:'Metallische Drachenblütige',  insigniaSrc: _insignia }
  ]},
  { type:'race',  id:'echsenmenschen', name:'Echsenmenschen', insigniaSrc: _insignia },
  { type:'group', id:'elfen',          name:'Elfen', subraces:[
    { id:'dunkelelfen',  name:'Dunkelelfen',  insigniaSrc: _insignia },
    { id:'eladrin',      name:'Eladrin',      insigniaSrc: _insignia },
    { id:'hochelfen',    name:'Hochelfen',    insigniaSrc: _insignia },
    { id:'meereselfen',  name:'Meereselfen',  insigniaSrc: _insignia },
    { id:'schattenfeen', name:'Schattenfeen', insigniaSrc: _insignia },
    { id:'waldelfen',    name:'Waldelfen',    insigniaSrc: _insignia }
  ]},
  { type:'race',  id:'feen',           name:'Feen',           insigniaSrc: _insignia },
  { type:'race',  id:'firbolg',        name:'Firbolg',        insigniaSrc: _insignia },
  { type:'group', id:'genasi',         name:'Genasi', subraces:[
    { id:'erd-genasi',    name:'Erd-Genasi',    insigniaSrc: _insignia },
    { id:'feuer-genasi',  name:'Feuer-Genasi',  insigniaSrc: _insignia },
    { id:'luft-genasi',   name:'Luft-Genasi',   insigniaSrc: _insignia },
    { id:'wasser-genasi', name:'Wasser-Genasi', insigniaSrc: _insignia }
  ]},
  { type:'race',  id:'githyanki',      name:'Githyanki',      insigniaSrc: _insignia },
  { type:'race',  id:'githzerai',      name:'Githzerai',      insigniaSrc: _insignia },
  { type:'group', id:'gnome',          name:'Gnome', subraces:[
    { id:'felsengnome',  name:'Felsengnome',  insigniaSrc: _insignia },
    { id:'tiefengnome',  name:'Tiefengnome',  insigniaSrc: _insignia },
    { id:'waldgnome',    name:'Waldgnome',    insigniaSrc: _insignia }
  ]},
  { type:'race',  id:'goblins',        name:'Goblins',        insigniaSrc: _insignia },
  { type:'race',  id:'goliaths',       name:'Goliaths',       insigniaSrc: _insignia },
  { type:'race',  id:'grottenschrate', name:'Grottenschrate', insigniaSrc: _insignia },
  { type:'race',  id:'halbelfen',      name:'Halbelfen',      insigniaSrc: _insignia },
  { type:'group', id:'halblinge',      name:'Halblinge', subraces:[
    { id:'leichtfuesse', name:'Leichtfüße', insigniaSrc: _insignia },
    { id:'staemmige',    name:'Stämmige',   insigniaSrc: _insignia }
  ]},
  { type:'race',  id:'halborks',       name:'Halborks',       insigniaSrc: _insignia },
  { type:'race',  id:'harengons',      name:'Harengons',      insigniaSrc: _insignia },
  { type:'race',  id:'hexblute',       name:'Hexblute',       insigniaSrc: _insignia },
  { type:'race',  id:'hobgoblins',     name:'Hobgoblins',     insigniaSrc: _insignia },
  { type:'race',  id:'kenku',          name:'Kenku',          insigniaSrc: _insignia },
  { type:'race',  id:'kobolde',        name:'Kobolde',        insigniaSrc: _insignia },
  { type:'race',  id:'menschen',       name:'Menschen',       insigniaSrc: _insignia },
  { type:'race',  id:'minotauren',     name:'Minotauren',     insigniaSrc: _insignia },
  { type:'race',  id:'orks',           name:'Orks',           insigniaSrc: _insignia },
  { type:'race',  id:'satyrn',         name:'Satyrn',         insigniaSrc: _insignia },
  { type:'race',  id:'tabaxi',         name:'Tabaxi',         insigniaSrc: _insignia },
  { type:'race',  id:'tieflinge',      name:'Tieflinge',      insigniaSrc: _insignia },
  { type:'race',  id:'tortels',        name:'Tortels',        insigniaSrc: _insignia },
  { type:'race',  id:'tritons',        name:'Tritons',        insigniaSrc: _insignia },
  { type:'race',  id:'wandler',        name:'Wandler',        insigniaSrc: _insignia },
  { type:'race',  id:'wechselbälger',  name:'Wechselbälger',  insigniaSrc: _insignia },
  { type:'race',  id:'wiedergeborene', name:'Wiedergeborene', insigniaSrc: _insignia },
  { type:'race',  id:'yuan-ti',        name:'Yuan-ti',        insigniaSrc: _insignia },
  { type:'race',  id:'zentauren',      name:'Zentauren',      insigniaSrc: _insignia },
  { type:'group', id:'zwerge',         name:'Zwerge', subraces:[
    { id:'gebirgszwerge', name:'Gebirgszwerge', insigniaSrc: _insignia },
    { id:'grauzwerge',    name:'Grauzwerge',    insigniaSrc: _insignia },
    { id:'huegelzwerge',  name:'Hügelzwerge',   insigniaSrc: _insignia }
  ]}
];
