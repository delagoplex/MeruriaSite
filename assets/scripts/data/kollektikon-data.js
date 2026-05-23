// Shared Kollektikon data — loaded by index.html and Kollektikon.html.
// No JSX here; icons are added by each page using their local icon constants.

window.KOLLEKTIKON_CATEGORIES = [
  { id:'fische',         label:'Fische',                    labelShort:'Fische',          total:80,  hue:200 },
  { id:'insekten',       label:'Insekten',                  labelShort:'Insekten',         total:30,  hue:95  },
  { id:'pflanzen',       label:'Pflanzen',                  labelShort:'Pflanzen',         total:110, hue:140 },
  { id:'mineralien',     label:'Mineralien',                labelShort:'Mineralien',       total:60,  hue:60  },
  { id:'kreaturen',      label:'Kreaturen',                 labelShort:'Kreaturen',        total:36,  hue:285 },
  { id:'kreaturenteile', label:'Kreaturenteile',            labelShort:'Kreaturenteile',   total:48,  hue:0   },
  { id:'wal',            label:'Trümmer des Weißen Wals',   labelShort:'Trümmer d. Wals', total:20,  hue:210 },
  { id:'lebensspeicher', label:'Teile des Lebensspeichers', labelShort:'Lebensspeicher',  total:15,  hue:45  },
];

window.KOLLEKTIKON_CATALOG = [
  { id:'f-06', name:'Aalsturm',           cat:'fische',         hue:240, status:'sighted',  date:'14. Sturmwacht'  },
  { id:'f-04', name:'Ködermaul',          cat:'fische',         hue:190, status:'komplett', date:'27. Eiswinter'   },
  { id:'f-02', name:'Mondbrasse',         cat:'fische',         hue:215, status:'komplett', date:'04. Aschefall'   },
  { id:'f-01', name:'Silbersichelhecht',  cat:'fische',         hue:200, status:'komplett', date:'12. Sterne'      },
  { id:'i-05', name:'Aschgraue Hornisse', cat:'insekten',       hue:30,  status:'sighted',  date:'19. Aschefall'   },
  { id:'i-02', name:'Karminspinner',      cat:'insekten',       hue:0,   status:'komplett', date:'02. Aschefall'   },
  { id:'i-01', name:'Sumpflampe',         cat:'insekten',       hue:90,  status:'sighted',  date:'14. Blütenfest'  },
  { id:'p-05', name:'Dornenwürger',       cat:'pflanzen',       hue:25,  status:'komplett', date:'11. Aschefall'   },
  { id:'p-03', name:'Glimmerschilf',      cat:'pflanzen',       hue:150, status:'komplett', date:'25. Eiswinter'   },
  { id:'p-08', name:'Hexenhauch',         cat:'pflanzen',       hue:285, status:'sighted',  date:'01. Aschefall'   },
  { id:'p-02', name:'Wundklee',           cat:'pflanzen',       hue:140, status:'komplett', date:'18. Blütenfest'  },
  { id:'m-01', name:'Mondquarz',          cat:'mineralien',     hue:200, status:'komplett', date:'08. Eiswinter'   },
  { id:'m-02', name:'Schwarzschiefer',    cat:'mineralien',     hue:30,  status:'komplett', date:'14. Sterne'      },
  { id:'k-01', name:'Schleifender Vogel', cat:'kreaturen',      hue:280, status:'komplett', date:'19. Blütenfest'  },
  { id:'k-02', name:'Tiefenwandler',      cat:'kreaturen',      hue:260, status:'sighted',  date:'03. Sturmwacht'  },
  { id:'t-01', name:'Klauenschuppe',      cat:'kreaturenteile', hue:30,  status:'komplett', date:'21. Blütenfest'  },
  { id:'t-02', name:'Aalstein',           cat:'kreaturenteile', hue:240, status:'komplett', date:'14. Sturmwacht'  },
  { id:'w-01', name:'Schädelplatte',      cat:'wal',            hue:210, status:'sighted',  date:'09. Eiswinter'   },
  { id:'w-03', name:'Rippensplitter',     cat:'wal',            hue:200, status:'komplett', date:'23. Aschefall'   },
  { id:'w-02', name:'Walgesang-Tropfen',  cat:'wal',            hue:215, status:'sighted',  date:'17. Sturmwacht'  },
  { id:'l-01', name:'Erinnerungskern',    cat:'lebensspeicher', hue:45,  status:'sighted',  date:'11. Blütenfest'  },
  { id:'l-02', name:'Pulslinse',          cat:'lebensspeicher', hue:35,  status:'komplett', date:'02. Aschefall'   },
];

// Ordered by most-recently-discovered (newest first)
window.KOLLEKTIKON_RECENT_SIGHTED_IDS = [
  'i-05','w-02','f-06','w-01','k-02','l-02','p-08','k-01','l-01','i-01',
];

// Ordered by most-recently-completed (newest first)
window.KOLLEKTIKON_RECENT_KOMPLETT_IDS = [
  'w-03','l-02','k-01','t-02','p-05','p-02','p-03','m-01','m-02','f-01','f-02','i-02','t-01','f-04',
];
