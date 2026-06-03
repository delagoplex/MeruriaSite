// char-data.js — Meruria Charaktererstellung Daten

window.ALLE_RASSEN = [
  'Aarakocra','Aasimar','Alraunen','Autognome','Bärenvolk',
  'Chromatische Drachenblütige','Cnidaran','Darakhul','Dhampire','Dunkelelfen',
  'Echsenmenschen','Edelstein Drachenblütige','Eladrin','Erd-Genasi','Erina','Eulenleute',
  'Feen','Felsengnome','Feuer-Genasi','Firbolg',
  'Gebirgszwerge','Geppettin','Giff','Githyanki','Githzerai','Gnoll','Goblins','Goliaths',
  'Grauzwerge','Grottenschrate','Grung',
  'Hadozee','Halbelfen','Halborks','Harengons','Hexblute','Hobgoblins','Hochelfen','Hügelzwerge',
  'Kenku','Kobolde','Leichtfüße','Leonin','Locathah','Lotol','Loxodon','Luft-Genasi',
  'Meereselfen','Menschen','Metallische Drachenblütige','Minotauren','Myzelier',
  'Opteran','Orks','Plasmoid','Ratatosk','Sahuagin','Satarre','Satyrn',
  'Schattenfeen','Schattengoblin','Schattenmenschen','Schleimling','Stämmige',
  'Tabaxi','Thri-Kreen','Tiefengnome','Tieflinge','Tortels','Tritons',
  'Waldelfen','Waldgnome','Wandler','Kriegsgeschmiedete','Wasser-Genasi','Wechselbälger','Wiedergeborene',
  'Yuan-ti','Zentauren',
];

window.RASSEN_GRUPPEN = [
  { gruppe:null, rassen:[
    'Aarakocra','Aasimar','Alraunen','Autognome','Bärenvolk','Cnidaran','Darakhul','Dhampire',
    'Echsenmenschen','Erina','Eulenleute','Feen','Firbolg','Geppettin','Giff','Githyanki','Githzerai',
    'Gnoll','Goblins','Goliaths','Grottenschrate','Grung','Hadozee','Halbelfen','Halborks','Harengons',
    'Hexblute','Hobgoblins','Kenku','Kobolde','Leonin','Locathah','Lotol','Loxodon','Menschen',
    'Minotauren','Myzelier','Opteran','Orks','Plasmoid','Ratatosk','Sahuagin','Satarre','Satyrn',
    'Schattengoblin','Schattenmenschen','Schleimling','Tabaxi','Thri-Kreen','Tieflinge','Tortels',
    'Tritons','Wandler','Kriegsgeschmiedete','Wechselbälger','Wiedergeborene','Yuan-ti','Zentauren',
  ]},
  { gruppe:'Drachenblütige', rassen:['Chromatische Drachenblütige','Edelstein Drachenblütige','Metallische Drachenblütige'] },
  { gruppe:'Elfen',          rassen:['Dunkelelfen','Eladrin','Hochelfen','Meereselfen','Schattenfeen','Waldelfen'] },
  { gruppe:'Genasi',         rassen:['Erd-Genasi','Feuer-Genasi','Luft-Genasi','Wasser-Genasi'] },
  { gruppe:'Gnome',          rassen:['Felsengnome','Tiefengnome','Waldgnome'] },
  { gruppe:'Halblinge',      rassen:['Leichtfüße','Stämmige'] },
  { gruppe:'Zwerge',         rassen:['Gebirgszwerge','Grauzwerge','Hügelzwerge'] },
];

window.ALLE_KLASSEN = [
  'Barbar','Barde','Druide','Hexenmeister','Kämpfer','Kleriker',
  'Magier','Magieschmied','Mönch','Paladin','Schurke','Waldläufer','Zauberer'
];

// Klassen-ID (für KLASSEN_DETAIL) + Stufe der Unterklassenwahl
window.KLASSEN_META = {
  'Barbar':       { id: 'barbar',       subStufe: 3 },
  'Barde':        { id: 'barde',        subStufe: 3 },
  'Druide':       { id: 'druide',       subStufe: 2 },
  'Hexenmeister': { id: 'hexenmeister', subStufe: 1 },
  'Kämpfer':      { id: 'kaempfer',     subStufe: 3 },
  'Kleriker':     { id: 'kleriker',     subStufe: 1 },
  'Magier':       { id: 'magier',       subStufe: 2 },
  'Magieschmied': { id: 'magieschmied', subStufe: 3 },
  'Mönch':        { id: 'moench',       subStufe: 3 },
  'Paladin':      { id: 'paladin',      subStufe: 3 },
  'Schurke':      { id: 'schurke',      subStufe: 3 },
  'Waldläufer':   { id: 'waldlaeufer',  subStufe: 3 },
  'Zauberer':     { id: 'zauberer',     subStufe: 1 },
};

window.ALLE_HINTERGRUENDE = [
  'Adliger','Archäologe','Einsiedler','Erbe','Ermittler','Feenlost','Fraktionsagent',
  'Gemeiner','Geplagter','Gilden-/Zunfthandwerker','Höfling','Klanhandwerker',
  'Klostergelehrter','Krimineller','Ordensritter','Scharlatan','Seemann',
  'Soldat','Söldnerveteran','Sonderling','Städtischer Kopfgeldjäger','Stadtwache',
  'Stammesmitglied','Straßenkind','Tempeldiener','Unterhaltungskünstler',
  'Volksheld','Wanderer aus der Ferne','Weiser'
];

window.ALLE_DIVISIONEN = [
  'Die Kuratoren','Die Sturmritter','Die Sentinels','Die Friedenshüter',
  'Die Outfitters','Die Pathfinders','Die Quellensucher','Die Bergungsgarde'
];

window.ALLE_LEBENSSTILE = ['Jämmerlich','Ärmlich','Schlecht','Einfach','Komfortabel','Wohlhabend','Edel'];

window.ALLE_SAMEN = [
  '"Ich kann dunkle Orte nicht leiden."',
  '"Vor einem bestimmten Tier habe ich schreckliche Angst."',
  '"Tiefes Wasser wird noch mal mein Tod sein."',
  '"Ich kann Höhen nicht ertragen."',
  '"Ich hasse es, an engen Orten festzustecken."',
  '"Unter vielen Leuten verliere ich die Nerven."',
  '"Ich hasse es, mich einsam oder allein zu fühlen."',
  '"Stürme und Unwetter machen mich nervös."',
  '"Es ist mein Albtraum, verfolgt zu werden."',
  '"Plötzlicher Krach und plötzliches Erscheinen ruinieren meine Nerven."',
  '"Ich fühle mich bei größeren Kreaturen nicht wohl."',
  '"Spiegelbilder scheinen mich immer zu durchschauen."',
  '"Die Vorstellung, von einem Fluch verfolgt zu werden, lässt mich nicht schlafen."',
  '"Geisterhafte Erscheinungen bringen mich an den Rand der Panik."',
  '"Ich kann den Anblick von Blut nicht ertragen."',
  '"Die Idee, betrogen oder verraten zu werden, macht mir Angst."',
  '"Gefangen oder eingesperrt zu sein, löst in mir tiefe Panik aus."',
  '"Ich habe Angst vor Puppen und Marionetten."',
  '"Ich kann es nicht ertragen, berührt zu werden."',
  '"Der Anblick von Insekten löst extreme Angst aus."',
  '"Jede Tür könnte eine tödliche Falle verbergen."',
  '"Nadeln oder spitze Gegenstände lassen mich unwohl fühlen."',
  '"Jeder Funken könnte mein Verderben sein."',
  '"Magische Artefakte unbekannter Kräfte machen mir Angst."',
  '"Ich fürchte mich davor, von meinen Feinden verhöhnt zu werden."',
];

window.WERKZEUGE_LIST = [
  'Alchemistenausrüstung','Brauer-Ausrüstung','Diebeswerkzeug','Drachenschach',
  'Feldpatienten-Kit','Glasmacherausrüstung','Holzschnitzerwerkzeug',
  'Kartenzeichenwerkzeug','Kräuterkunde-Kit','Lederarbeitsausrüstung',
  'Lügenspiel','Maurer-Ausrüstung','Musikinstrument','Navigationsausrüstung',
  'Schmuckausrüstung','Schmiedewerkzeug','Schreiberset','Steinmetzausrüstung',
  'Tischler-Ausrüstung','Töpferausrüstung','Vergiftungsausrüstung',
  'Weberausrüstung','Würfelspiel'
];

window.ZAUBERWIRKER_KLASSEN = new Set([
  'Barde','Druide','Hexenmeister','Kleriker','Magier','Magieschmied','Paladin','Waldläufer','Zauberer'
]);

window.ALLE_GESINNUNGEN = [
  'Rechtschaffen gut','Neutral gut','Chaotisch gut',
  'Rechtschaffen neutral','Neutral','Chaotisch neutral',
  'Rechtschaffen böse','Neutral böse','Chaotisch böse',
];

window.ALLE_STERNZEICHEN = [
  'Die Arche','Die Böe','Die Wurzel','Die Linse',
  'Die Stille','Das Irrlicht','Die Klinge','Die Glut',
  'Die Brücke','Der Schleier','Das Labyrinth','Der Spalt',
];

window.ALLE_GESCHLECHTER = ['Männlich','Weiblich','Divers','Keine Angabe'];

// Lebensstil-Hints (statisch; Rassen/Klassen/Hintergründe/Divisionen werden
// in Neuer_Charakter.html zur Laufzeit aus den Datendateien aufgebaut)
window.OPTION_HINTS = {
  'Jämmerlich':  'Kein fester Schlafplatz — überleben ohne Komfort',
  'Ärmlich':     'Notdürftige Unterkunft, geteilte Mahlzeiten',
  'Schlecht':    'Einfachste Herberge, karge Kost',
  'Einfach':     'Solide Unterkunft & Mahlzeiten, Handwerker-Standard',
  'Komfortabel': 'Gute Unterkunft, Ausrüstung instand',
  'Wohlhabend':  'Gehobene Unterkunft, Statussymbol',
  'Edel':        'Dienerschaft, feinste Kreise, fürstliches Niveau',
};

window.CHAR_QUIZ = [
  { id:'r1', kat:'rasse',
    frage:'Wie beschreibst du das äußere Erscheinungsbild deines Charakters?',
    optionen:[
      { text:'Weitgehend menschlich',
        behalte:['Menschen','Halbelfen','Halborks','Aasimar','Tieflinge','Dhampire','Wechselbälger','Wiedergeborene','Hexblute','Schattenmenschen'] },
      { text:'Klein und zierlich — deutlich kleiner als Menschen',
        behalte:['Leichtfüße','Stämmige','Felsengnome','Tiefengnome','Waldgnome','Kobolde','Goblins','Grottenschrate','Feen','Grung','Ratatosk','Schattengoblin','Autognome','Gebirgszwerge','Grauzwerge','Hügelzwerge'] },
      { text:'Elfengleich — schlank, übernatürliche Ausstrahlung',
        behalte:['Dunkelelfen','Eladrin','Hochelfen','Meereselfen','Schattenfeen','Waldelfen'] },
      { text:'Tierische Züge — Fell, Federn oder Schuppen',
        behalte:['Aarakocra','Tabaxi','Kenku','Harengons','Echsenmenschen','Yuan-ti','Satyrn','Tortels','Tritons','Wandler',
                 'Bärenvolk','Cnidaran','Erina','Eulenleute','Giff','Gnoll','Hadozee','Leonin','Locathah','Loxodon','Myzelier','Opteran','Ratatosk','Sahuagin','Satarre','Thri-Kreen'] },
      { text:'Massig und einschüchternd — Ork- oder Riesenstatur',
        behalte:['Orks','Halborks','Goliaths','Firbolg','Minotauren','Zentauren','Hobgoblins','Gnoll','Loxodon','Giff','Leonin','Bärenvolk'] },
      { text:'Elementar, konstruiert oder formlos',
        behalte:['Chromatische Drachenblütige','Edelstein Drachenblütige','Metallische Drachenblütige',
                 'Erd-Genasi','Feuer-Genasi','Luft-Genasi','Wasser-Genasi','Githyanki','Githzerai',
                 'Autognome','Kriegsgeschmiedete','Plasmoid','Schleimling','Geppettin','Darakhul','Alraunen','Lotol'] },
    ]
  },
  { id:'r2', kat:'rasse',
    frage:'Was liegt an der Wurzel deiner Herkunft?',
    optionen:[
      { text:'Rein menschliches Erbe, keine übernatürliche Abstammung',
        behalte:['Menschen','Schattenmenschen'] },
      { text:'Gemischtes Blut — zwei Welten in einer Gestalt',
        behalte:['Halbelfen','Halborks','Wechselbälger','Hexblute'] },
      { text:'Himmlische oder göttliche Abstammung',
        behalte:['Aasimar','Hochelfen','Eladrin','Meereselfen','Halbelfen'] },
      { text:'Höllische, dämonische oder arkane Abstammung',
        behalte:['Tieflinge','Hexblute','Chromatische Drachenblütige','Metallische Drachenblütige','Gnoll','Satarre'] },
      { text:'Verbindung zu Tod, Schatten oder dem Jenseits',
        behalte:['Dhampire','Wiedergeborene','Dunkelelfen','Schattenfeen','Grottenschrate','Darakhul','Schattenmenschen','Schattengoblin'] },
      { text:'Uraltes Naturerbe — Geister, Wildnis, Magie',
        behalte:['Firbolg','Waldgnome','Feen','Waldelfen','Satyrn','Zentauren','Wandler','Harengons',
                 'Bärenvolk','Erina','Hadozee','Leonin','Eulenleute','Alraunen','Myzelier',
                 'Leichtfüße','Stämmige'] },
      { text:'Handwerk, Konstruktion oder Tiefen der Erde',
        behalte:['Gebirgszwerge','Grauzwerge','Hügelzwerge','Felsengnome','Tiefengnome','Kobolde','Goblins','Hobgoblins',
                 'Autognome','Kriegsgeschmiedete','Geppettin'] },
      { text:'Tierischer oder stammesgeschichtlicher Ursprung',
        behalte:['Tabaxi','Kenku','Aarakocra','Yuan-ti','Echsenmenschen','Tortels','Tritons','Minotauren','Orks','Halborks','Goliaths','Grottenschrate',
                 'Cnidaran','Giff','Gnoll','Grung','Hadozee','Leonin','Locathah','Loxodon','Opteran','Ratatosk','Sahuagin','Satarre','Thri-Kreen'] },
      { text:'Elementarer, psionischer oder Ebenenursprung',
        behalte:['Erd-Genasi','Feuer-Genasi','Luft-Genasi','Wasser-Genasi','Githyanki','Githzerai','Edelstein Drachenblütige',
                 'Plasmoid','Schleimling','Lotol'] },
    ]
  },
  { id:'k1', kat:'klasse',
    frage:'Was ist deine bevorzugte Rolle in Kampf und Gruppe?',
    optionen:[
      { text:'Frontlinie — roh, direkt, maximaler Druck auf den Feind',
        behalte:['Barbar','Kämpfer','Paladin'] },
      { text:'Heimlich agieren — aus dem Schatten, präzise und tödlich',
        behalte:['Schurke','Waldläufer'] },
      { text:'Offensive Magie — Feinde vernichten oder kontrollieren',
        behalte:['Magier','Zauberer','Hexenmeister','Barde'] },
      { text:'Naturmagie — Tiere, Elemente, Wildniskräfte',
        behalte:['Druide','Waldläufer'] },
      { text:'Heilend und unterstützend — die Gruppe am Leben halten',
        behalte:['Kleriker','Barde','Druide','Paladin','Hexenmeister','Zauberer'] },
      { text:'Technik und Handwerkskunst im Kampf',
        behalte:['Magieschmied','Kämpfer'] },
      { text:'Körper als Waffe — Ki und jahrelange Disziplin',
        behalte:['Mönch'] },
    ]
  },
  { id:'k2', kat:'klasse',
    frage:'Woher schöpft dein Charakter seine Kraft?',
    optionen:[
      { text:'Aus Raserei und körperlicher Überlegenheit', behalte:['Barbar'] },
      { text:'Aus göttlicher Berufung oder einem heiligen Schwur', behalte:['Kleriker','Paladin'] },
      { text:'Aus einem Pakt mit einer übernatürlichen Macht', behalte:['Hexenmeister'] },
      { text:'Aus angeborenem magischen Blut', behalte:['Zauberer'] },
      { text:'Aus jahrelangem arkanen Studium', behalte:['Magier','Magieschmied'] },
      { text:'Aus der Natur, Wildnis oder den Elementen', behalte:['Druide','Waldläufer'] },
      { text:'Aus Ki und Körper-Geist-Disziplin', behalte:['Mönch'] },
      { text:'Aus Kunst, Musik und der Kraft von Worten', behalte:['Barde'] },
      { text:'Aus Kampferfahrung und militärischem Training', behalte:['Kämpfer','Schurke'] },
    ]
  },
  { id:'h1', kat:'hintergrund',
    frage:'Welches Milieu hat deinen Charakter vor dem Abenteuer am stärksten geprägt?',
    optionen:[
      { text:'Adel, Hof und hohe Gesellschaft', behalte:['Adliger','Höfling','Ordensritter','Fraktionsagent','Erbe'] },
      { text:'Akademie, Forschung und Gelehrsamkeit', behalte:['Weiser','Archäologe','Klostergelehrter','Ermittler'] },
      { text:'Militär, Krieg und strenge Disziplin', behalte:['Soldat','Söldnerveteran','Stadtwache','Ordensritter'] },
      { text:'Kriminalität, Schatten und Täuschung', behalte:['Krimineller','Scharlatan','Städtischer Kopfgeldjäger','Ermittler'] },
      { text:'Handwerk, Handel und normales Volk', behalte:['Gilden-/Zunfthandwerker','Gemeiner','Volksheld','Klanhandwerker','Unterhaltungskünstler'] },
      { text:'Religion, Spiritualität und Naturverbundenheit', behalte:['Tempeldiener','Einsiedler','Stammesmitglied','Feenlost','Geplagter'] },
      { text:'Straße, Überleben und Armut', behalte:['Straßenkind','Gemeiner','Sonderling','Wanderer aus der Ferne','Seemann'] },
    ]
  },
  { id:'d1', kat:'division',
    frage:'Welchem Auftrag würdest du deinen Eid schwören?',
    optionen:[
      { text:'Wissen hüten, Artefakte sichern, Geheimnisse bewahren', behalte:['Die Kuratoren'] },
      { text:'In vorderster Reihe kämpfen und Feinde zurückdrängen', behalte:['Die Sturmritter'] },
      { text:'Im Verborgenen wachen — sehen ohne gesehen zu werden', behalte:['Die Sentinels'] },
      { text:'Frieden schaffen, Konflikte durch Verhandlung lösen', behalte:['Die Friedenshüter'] },
      { text:'Ausrüsten, versorgen und die Anderen einsatzbereit halten', behalte:['Die Outfitters'] },
      { text:'Erkunden, kartografieren und neue Wege schaffen', behalte:['Die Pathfinders'] },
      { text:'Ressourcen aufspüren und strategische Quellen sichern', behalte:['Die Quellensucher'] },
      { text:'Niemanden zurücklassen — retten, bergen, schützen', behalte:['Die Bergungsgarde'] },
    ]
  },
  { id:'l1', kat:'lebensstil',
    frage:'Wie lebst du zwischen deinen Abenteuern?',
    optionen:[
      { text:'Auf der Straße — kaum ein Dach über dem Kopf', behalte:['Jämmerlich','Ärmlich'] },
      { text:'Bescheiden — ein Bett und genug zu essen, mehr nicht', behalte:['Schlecht','Einfach'] },
      { text:'Komfortabel — mit Mitteln, Ausrüstung instand', behalte:['Komfortabel','Wohlhabend'] },
      { text:'Im Luxus — nur das Beste, feinste Kreise', behalte:['Edel'] },
    ]
  },
  { id:'s1', kat:'samen',
    frage:'Welche Art von Bedrohung trifft deinen Charakter am tiefsten?',
    optionen:[
      { text:'Orte und Umgebungen — Dunkelheit, Enge, Höhen, Wasser',
        behalte:[
          '"Ich kann dunkle Orte nicht leiden."',
          '"Tiefes Wasser wird noch mal mein Tod sein."',
          '"Ich kann Höhen nicht ertragen."',
          '"Ich hasse es, an engen Orten festzustecken."',
          '"Gefangen oder eingesperrt zu sein, löst in mir tiefe Panik aus."',
        ]},
      { text:'Kreaturen und Berührung — Tiere, Insekten, körperliche Nähe',
        behalte:[
          '"Vor einem bestimmten Tier habe ich schreckliche Angst."',
          '"Ich fühle mich bei größeren Kreaturen nicht wohl."',
          '"Ich kann es nicht ertragen, berührt zu werden."',
          '"Der Anblick von Insekten löst extreme Angst aus."',
        ]},
      { text:'Soziales und Psychisches — Massen, Einsamkeit, Verrat',
        behalte:[
          '"Unter vielen Leuten verliere ich die Nerven."',
          '"Ich hasse es, mich einsam oder allein zu fühlen."',
          '"Die Idee, betrogen oder verraten zu werden, macht mir Angst."',
          '"Es ist mein Albtraum, verfolgt zu werden."',
          '"Ich fürchte mich davor, von meinen Feinden verhöhnt zu werden."',
        ]},
      { text:'Übernatürliches — Geister, Flüche, Artefakte, Puppen',
        behalte:[
          '"Die Vorstellung, von einem Fluch verfolgt zu werden, lässt mich nicht schlafen."',
          '"Geisterhafte Erscheinungen bringen mich an den Rand der Panik."',
          '"Spiegelbilder scheinen mich immer zu durchschauen."',
          '"Magische Artefakte unbekannter Kräfte machen mir Angst."',
          '"Ich habe Angst vor Puppen und Marionetten."',
        ]},
      { text:'Gewalt und physische Gefahr — Blut, Fallen, Feuer, Lärm',
        behalte:[
          '"Ich kann den Anblick von Blut nicht ertragen."',
          '"Plötzlicher Krach und plötzliches Erscheinen ruinieren meine Nerven."',
          '"Stürme und Unwetter machen mich nervös."',
          '"Jede Tür könnte eine tödliche Falle verbergen."',
          '"Nadeln oder spitze Gegenstände lassen mich unwohl fühlen."',
          '"Jeder Funken könnte mein Verderben sein."',
        ]},
    ]
  },
  { id:'g1', kat:'gottheit',
    frage:'Welche Domäne verkörpert deinen Glauben am stärksten?',
    optionen:[
      { text:'Licht, Ehre, Schutz und göttliche Ordnung', behalte:['Aurelia','Elysarion','Avalaste'] },
      { text:'Sturm, Krieg, Feuer und Schöpfung', behalte:['Sienna','Hadir','Feuergeist'] },
      { text:'Zeit, Maschinen, Wissen und kosmische Struktur', behalte:['Aetherius','Serenith','Hydea','Melion','Vezvoriak'] },
      { text:'Natur, Erde, Wasser, Wind und Wachstum', behalte:['Daramur','Eiritha','Selunara','Waldgeist','Steingeist','Flussgeist','Windgeist'] },
      { text:'Dunkelheit, Stille, Albträume und das Verborgene', behalte:['Cecillia','Lorelei','Ferys','Ophelis','Thraxis','Maledor'] },
      { text:'Blut, Opfer, Wahnsinn und dunkle Macht', behalte:["Vindeah","Baalbrezan","Cahbri","Grikuuth","Kizrovidus","Meleshor","Nalphimex","Netrosk","Yx'larak"] },
    ]
  },

  // ── Rassen ── r3/r4/r5 ─────────────────────────────────────────────────
  { id:'r3', kat:'rasse',
    frage:'Wo fühlt sich dein Charakter am wohlsten?',
    optionen:[
      { text:'Im oder am Wasser — Schwimmen ist zweite Natur',
        behalte:['Meereselfen','Wasser-Genasi','Tritons','Locathah','Sahuagin','Cnidaran','Tortels','Echsenmenschen'] },
      { text:'Hoch oben — Fliegen, Gleiten oder Baumwipfel',
        behalte:['Aarakocra','Opteran','Feen','Hadozee','Eulenleute','Luft-Genasi','Ratatosk'] },
      { text:'Tief unten — Höhlen, Minen, Unterreich',
        behalte:['Dunkelelfen','Tiefengnome','Grauzwerge','Darakhul','Schattengoblin','Erd-Genasi','Schattenmenschen'] },
      { text:'Wilde Natur — Wälder, Savannen, Ebenen',
        behalte:['Waldelfen','Waldgnome','Firbolg','Satyrn','Bärenvolk','Erina','Wandler','Harengons','Leonin','Tabaxi','Gnoll','Alraunen','Myzelier','Eulenleute'] },
      { text:'Städte und Zivilisation — Märkte, Gemeinschaften',
        behalte:['Menschen','Schattenmenschen','Hobgoblins','Loxodon','Giff','Yuan-ti','Kriegsgeschmiedete','Autognome','Geppettin','Wechselbälger','Aasimar','Tieflinge'] },
      { text:'Überall — kosmisch, planar oder formlos',
        behalte:['Plasmoid','Schleimling','Ratatosk','Autognome','Kriegsgeschmiedete','Geppettin','Lotol','Githyanki','Githzerai'] },
    ]
  },
  { id:'r4', kat:'rasse',
    frage:'Was ist das auffälligste körperliche Merkmal deines Charakters?',
    optionen:[
      { text:'Flügel oder Federn — echter Flug oder Gleiten',
        behalte:['Aarakocra','Kenku','Eulenleute','Hadozee','Opteran','Feen'] },
      { text:'Fell, Mähne oder Schwanz',
        behalte:['Bärenvolk','Harengons','Leonin','Tabaxi','Gnoll','Wandler','Ratatosk','Satyrn'] },
      { text:'Schuppen, Panzer oder Chitinhülle',
        behalte:['Echsenmenschen','Yuan-ti','Tortels','Thri-Kreen','Satarre','Chromatische Drachenblütige','Edelstein Drachenblütige','Metallische Drachenblütige'] },
      { text:'Rüssel, Hörner, Tentakel oder extreme Gliedmaßen',
        behalte:['Loxodon','Minotauren','Cnidaran','Erina','Thri-Kreen'] },
      { text:'Pflanzlich, pilzartig oder elementar',
        behalte:['Alraunen','Myzelier','Erd-Genasi','Feuer-Genasi','Luft-Genasi','Wasser-Genasi'] },
      { text:'Kaum tierisch — weitgehend humanoid',
        behalte:['Giff','Loxodon','Menschen','Halbelfen','Aasimar','Tieflinge','Dhampire','Wechselbälger','Halborks','Hobgoblins','Schattenmenschen','Kriegsgeschmiedete','Autognome','Geppettin'] },
    ]
  },
  { id:'r5', kat:'rasse',
    frage:'Wie lebt deine Rasse gesellschaftlich?',
    optionen:[
      { text:'Stammes- oder Rudelwesen — enge Clans, klare Hierarchie',
        behalte:['Gnoll','Leonin','Bärenvolk','Echsenmenschen','Tritons','Yuan-ti','Hobgoblins','Goliaths','Orks','Halborks','Satarre'] },
      { text:'Nomaden oder Einzelgänger — ständig in Bewegung',
        behalte:['Tabaxi','Thri-Kreen','Wandler','Ratatosk','Harengons','Kenku','Hadozee','Erina','Locathah'] },
      { text:'Gelehrte oder weise Gemeinschaften',
        behalte:['Loxodon','Eulenleute','Myzelier','Tortels','Githzerai','Hochelfen'] },
      { text:'Militärisch und diszipliniert organisiert',
        behalte:['Githyanki','Giff','Hobgoblins','Kriegsgeschmiedete','Thri-Kreen','Hobgoblins'] },
      { text:'Verborgene oder isolierte Kulturen',
        behalte:['Sahuagin','Locathah','Satarre','Dunkelelfen','Yuan-ti','Cnidaran','Darakhul','Tiefengnome'] },
      { text:'Integriert in größere Gesellschaften',
        behalte:['Aasimar','Tieflinge','Halbelfen','Menschen','Schattenmenschen','Wechselbälger','Dhampire','Wiedergeborene','Halborks'] },
    ]
  },

  // ── Hintergründe ── h2/h3 ──────────────────────────────────────────────
  { id:'h2', kat:'hintergrund',
    frage:'Was war deine Hauptmotivation, diesen Lebensweg einzuschlagen?',
    optionen:[
      { text:'Pflicht und Ehre — einem Auftrag oder Kodex folgen',
        behalte:['Soldat','Ordensritter','Tempeldiener','Fraktionsagent','Volksheld','Stadtwache'] },
      { text:'Überleben und Not — keine andere Wahl gehabt',
        behalte:['Straßenkind','Gemeiner','Geplagter','Söldnerveteran','Krimineller','Seemann'] },
      { text:'Wissensdrang — Neugier und Entdeckergeist',
        behalte:['Weiser','Archäologe','Klostergelehrter','Ermittler','Sonderling','Feenlost'] },
      { text:'Wohlstand und Verbindungen aufbauen',
        behalte:['Adliger','Erbe','Höfling','Gilden-/Zunfthandwerker','Scharlatan','Fraktionsagent'] },
      { text:'Freiheit — die Welt erkunden, kein fester Platz',
        behalte:['Wanderer aus der Ferne','Seemann','Feenlost','Stammesmitglied','Einsiedler'] },
      { text:'Gemeinschaft — für andere da sein',
        behalte:['Stammesmitglied','Klanhandwerker','Unterhaltungskünstler','Tempeldiener','Volksheld','Gemeiner'] },
    ]
  },
  { id:'h3', kat:'hintergrund',
    frage:'Welche Fähigkeit hat dich am weitesten gebracht?',
    optionen:[
      { text:'Feder und Analyse — Forschen, Dokumentieren',
        behalte:['Weiser','Klostergelehrter','Ermittler','Fraktionsagent','Städtischer Kopfgeldjäger','Archäologe'] },
      { text:'Klinge und Disziplin — Kampf und Durchsetzung',
        behalte:['Soldat','Söldnerveteran','Ordensritter','Stadtwache','Städtischer Kopfgeldjäger'] },
      { text:'Hände und Handwerk — Bauen und Erschaffen',
        behalte:['Gilden-/Zunfthandwerker','Klanhandwerker','Archäologe','Stammesmitglied'] },
      { text:'Zunge und Auftreten — Reden, Täuschen, Unterhalten',
        behalte:['Scharlatan','Unterhaltungskünstler','Höfling','Adliger','Erbe','Barde'] },
      { text:'Instinkt und Anpassung — Überleben und Improvisation',
        behalte:['Straßenkind','Wanderer aus der Ferne','Seemann','Geplagter','Gemeiner','Einsiedler','Stammesmitglied','Feenlost','Sonderling'] },
    ]
  },

  // ── Lebensstil ── l2 ────────────────────────────────────────────────────
  { id:'l2', kat:'lebensstil',
    frage:'Denkst du bei Ausgaben eher an Nutzen oder an Eindruck?',
    optionen:[
      { text:'Nutzen — gute Ausrüstung, zuverlässige Unterkünfte, nüchtern',
        behalte:['Jämmerlich','Ärmlich','Schlecht','Einfach','Komfortabel'] },
      { text:'Eindruck — Repräsentation, Status, Außenwirkung',
        behalte:['Wohlhabend','Edel'] },
    ]
  },
  { id:'l3', kat:'lebensstil',
    frage:'Kannst du dir regelmäßige Mahlzeiten und ein eigenes Bett leisten?',
    optionen:[
      { text:'Kaum — ich überlebe von Tag zu Tag',
        behalte:['Jämmerlich','Ärmlich'] },
      { text:'Ja, aber bescheiden — kein Luxus',
        behalte:['Schlecht','Einfach'] },
      { text:'Ja, komfortabel — ich lebe gut',
        behalte:['Komfortabel'] },
    ]
  },

  // ── Same der Furcht ── s2–s8 ────────────────────────────────────────────
  { id:'s2', kat:'samen',
    frage:'Ist die Angst eher körperlich-räumlich oder mental-sozial?',
    optionen:[
      { text:'Körperlich oder räumlich — Umgebung, Sinne, Substanzen',
        behalte:[
          '"Ich kann dunkle Orte nicht leiden."','"Tiefes Wasser wird noch mal mein Tod sein."',
          '"Ich kann Höhen nicht ertragen."','"Ich hasse es, an engen Orten festzustecken."',
          '"Gefangen oder eingesperrt zu sein, löst in mir tiefe Panik aus."',
          '"Ich kann den Anblick von Blut nicht ertragen."',
          '"Plötzlicher Krach und plötzliches Erscheinen ruinieren meine Nerven."',
          '"Stürme und Unwetter machen mich nervös."','"Jede Tür könnte eine tödliche Falle verbergen."',
          '"Nadeln oder spitze Gegenstände lassen mich unwohl fühlen."','"Jeder Funken könnte mein Verderben sein."',
          '"Vor einem bestimmten Tier habe ich schreckliche Angst."',
          '"Ich fühle mich bei größeren Kreaturen nicht wohl."',
          '"Ich kann es nicht ertragen, berührt zu werden."',
          '"Der Anblick von Insekten löst extreme Angst aus."',
        ]},
      { text:'Mental oder sozial — Gedanken, Beziehungen, das Verborgene',
        behalte:[
          '"Unter vielen Leuten verliere ich die Nerven."','"Ich hasse es, mich einsam oder allein zu fühlen."',
          '"Es ist mein Albtraum, verfolgt zu werden."',
          '"Die Idee, betrogen oder verraten zu werden, macht mir Angst."',
          '"Ich fürchte mich davor, von meinen Feinden verhöhnt zu werden."',
          '"Die Vorstellung, von einem Fluch verfolgt zu werden, lässt mich nicht schlafen."',
          '"Geisterhafte Erscheinungen bringen mich an den Rand der Panik."',
          '"Spiegelbilder scheinen mich immer zu durchschauen."',
          '"Magische Artefakte unbekannter Kräfte machen mir Angst."',
          '"Ich habe Angst vor Puppen und Marionetten."',
        ]},
    ]
  },
  { id:'s3', kat:'samen',
    frage:'Geht es um Einschränkung des Raums, Sinnesreize, oder Lebewesen?',
    optionen:[
      { text:'Einschränkung — Enge, Gefangenschaft',
        behalte:['"Ich hasse es, an engen Orten festzustecken."','"Gefangen oder eingesperrt zu sein, löst in mir tiefe Panik aus."'] },
      { text:'Elementare Sinnesreize — Dunkel, Wasser, Höhen, Lärm, Feuer',
        behalte:[
          '"Ich kann dunkle Orte nicht leiden."','"Tiefes Wasser wird noch mal mein Tod sein."',
          '"Ich kann Höhen nicht ertragen."','"Plötzlicher Krach und plötzliches Erscheinen ruinieren meine Nerven."',
          '"Stürme und Unwetter machen mich nervös."','"Jede Tür könnte eine tödliche Falle verbergen."',
          '"Nadeln oder spitze Gegenstände lassen mich unwohl fühlen."','"Jeder Funken könnte mein Verderben sein."',
        ]},
      { text:'Lebewesen oder körperliche Präsenz',
        behalte:[
          '"Vor einem bestimmten Tier habe ich schreckliche Angst."',
          '"Ich fühle mich bei größeren Kreaturen nicht wohl."',
          '"Ich kann es nicht ertragen, berührt zu werden."',
          '"Der Anblick von Insekten löst extreme Angst aus."',
          '"Ich kann den Anblick von Blut nicht ertragen."',
        ]},
    ]
  },
  { id:'s4', kat:'samen',
    frage:'Was genau macht die Umgebung so bedrohlich?',
    optionen:[
      { text:'Dunkelheit, Tiefe oder das Fallen',
        behalte:['"Ich kann dunkle Orte nicht leiden."','"Tiefes Wasser wird noch mal mein Tod sein."','"Ich kann Höhen nicht ertragen."'] },
      { text:'Plötzlichkeit oder unkontrollierbare Naturgewalt',
        behalte:['"Plötzlicher Krach und plötzliches Erscheinen ruinieren meine Nerven."','"Stürme und Unwetter machen mich nervös."','"Jede Tür könnte eine tödliche Falle verbergen."'] },
      { text:'Scharfes, Stechendes oder Verbrennendes',
        behalte:['"Nadeln oder spitze Gegenstände lassen mich unwohl fühlen."','"Jeder Funken könnte mein Verderben sein."','"Ich kann den Anblick von Blut nicht ertragen."'] },
    ]
  },
  { id:'s5', kat:'samen',
    frage:'Handelt es sich um ein Tier, körperliche Nähe, oder den Anblick von Verletzung?',
    optionen:[
      { text:'Ein bestimmtes Tier', behalte:['"Vor einem bestimmten Tier habe ich schreckliche Angst."'] },
      { text:'Größere Kreaturen generell', behalte:['"Ich fühle mich bei größeren Kreaturen nicht wohl."'] },
      { text:'Insekten speziell', behalte:['"Der Anblick von Insekten löst extreme Angst aus."'] },
      { text:'Körperliche Berührung', behalte:['"Ich kann es nicht ertragen, berührt zu werden."'] },
      { text:'Blut und Verletzungen', behalte:['"Ich kann den Anblick von Blut nicht ertragen."'] },
    ]
  },
  { id:'s6', kat:'samen',
    frage:'Handelt es sich um eine soziale Angst oder etwas Übernatürliches?',
    optionen:[
      { text:'Sozial — Massen, Einsamkeit, Verrat, Verfolgung',
        behalte:[
          '"Unter vielen Leuten verliere ich die Nerven."','"Ich hasse es, mich einsam oder allein zu fühlen."',
          '"Es ist mein Albtraum, verfolgt zu werden."','"Die Idee, betrogen oder verraten zu werden, macht mir Angst."',
          '"Ich fürchte mich davor, von meinen Feinden verhöhnt zu werden."',
        ]},
      { text:'Übernatürlich — Geister, Flüche, unerklärliche Dinge',
        behalte:[
          '"Die Vorstellung, von einem Fluch verfolgt zu werden, lässt mich nicht schlafen."',
          '"Geisterhafte Erscheinungen bringen mich an den Rand der Panik."',
          '"Spiegelbilder scheinen mich immer zu durchschauen."',
          '"Magische Artefakte unbekannter Kräfte machen mir Angst."','"Ich habe Angst vor Puppen und Marionetten."',
        ]},
    ]
  },
  { id:'s7', kat:'samen',
    frage:'Ist es eher das Soziale nach innen (Kontrollverlust) oder nach außen (Bedrohung durch andere)?',
    optionen:[
      { text:'Nach innen — Kontrollverlust, Überwältigung oder Isolation',
        behalte:['"Unter vielen Leuten verliere ich die Nerven."','"Ich hasse es, mich einsam oder allein zu fühlen."'] },
      { text:'Nach außen — verfolgt, verraten oder verhöhnt werden',
        behalte:['"Es ist mein Albtraum, verfolgt zu werden."','"Die Idee, betrogen oder verraten zu werden, macht mir Angst."','"Ich fürchte mich davor, von meinen Feinden verhöhnt zu werden."'] },
    ]
  },
  { id:'s8', kat:'samen',
    frage:'Ist es eine aktive übernatürliche Bedrohung oder das Unbegreifliche?',
    optionen:[
      { text:'Aktiv verfolgende Bedrohung — Geister, Flüche',
        behalte:['"Die Vorstellung, von einem Fluch verfolgt zu werden, lässt mich nicht schlafen."','"Geisterhafte Erscheinungen bringen mich an den Rand der Panik."'] },
      { text:'Das Unbegreifliche — Dinge die mich durchschauen oder verwandeln',
        behalte:['"Spiegelbilder scheinen mich immer zu durchschauen."','"Magische Artefakte unbekannter Kräfte machen mir Angst."','"Ich habe Angst vor Puppen und Marionetten."'] },
    ]
  },

  // ── Same ── s9/s10/s11 (letzte Paare) ──────────────────────────────────
  { id:'s9', kat:'samen',
    frage:'Geht es um Enge im Raum oder um Freiheitsentzug?',
    optionen:[
      { text:'Enge Räume — Höhlen, Schränke, enge Gänge',
        behalte:['"Ich hasse es, an engen Orten festzustecken."'] },
      { text:'Gefangenschaft — Ketten, Zellen, Kontrollverlust',
        behalte:['"Gefangen oder eingesperrt zu sein, löst in mir tiefe Panik aus."'] },
    ]
  },
  { id:'s10', kat:'samen',
    frage:'Was genau in der Umgebung macht dir Angst?',
    optionen:[
      { text:'Die Dunkelheit — was sie verbirgt',
        behalte:['"Ich kann dunkle Orte nicht leiden."'] },
      { text:'Das Wasser — die Tiefe, das Ertrinken',
        behalte:['"Tiefes Wasser wird noch mal mein Tod sein."'] },
      { text:'Die Höhe — das Fallen',
        behalte:['"Ich kann Höhen nicht ertragen."'] },
    ]
  },
  { id:'s11', kat:'samen',
    frage:'Ist es die soziale Überwältigung oder die Einsamkeit?',
    optionen:[
      { text:'Zu viele Menschen — der Lärm, die Menge, der Kontrollverlust',
        behalte:['"Unter vielen Leuten verliere ich die Nerven."'] },
      { text:'Zu wenige — das Alleinsein, die Stille, die Isolation',
        behalte:['"Ich hasse es, mich einsam oder allein zu fühlen."'] },
    ]
  },
  { id:'s12', kat:'samen',
    frage:'Fürchtest du eher verfolgt oder aktiv bedroht zu werden, oder verhöhnt?',
    optionen:[
      { text:'Verfolgt — jemand oder etwas ist hinter mir her',
        behalte:['"Es ist mein Albtraum, verfolgt zu werden."','"Die Vorstellung, von einem Fluch verfolgt zu werden, lässt mich nicht schlafen."'] },
      { text:'Verraten — von Vertrauten hintergangen',
        behalte:['"Die Idee, betrogen oder verraten zu werden, macht mir Angst."'] },
      { text:'Verhöhnt — von Feinden gedemütigt',
        behalte:['"Ich fürchte mich davor, von meinen Feinden verhöhnt zu werden."'] },
      { text:'Geisterhafte Erscheinungen — das Übernatürliche taucht auf',
        behalte:['"Geisterhafte Erscheinungen bringen mich an den Rand der Panik."'] },
    ]
  },
  { id:'s13', kat:'samen',
    frage:'Ist es Verfolgung durch Menschen oder durch Übernatürliches?',
    optionen:[
      { text:'Durch Menschen — Feinde, Verräter, Jäger',
        behalte:['"Es ist mein Albtraum, verfolgt zu werden."'] },
      { text:'Durch Übernatürliches — Fluch, Geist, dunkle Macht',
        behalte:['"Die Vorstellung, von einem Fluch verfolgt zu werden, lässt mich nicht schlafen."'] },
    ]
  },

  // ── Same ── s14/s15/s16 (letzte Dreier und Paare) ──────────────────────
  { id:'s14', kat:'samen',
    frage:'Was trifft dich tiefer — das Unbegreifliche oder das Plötzliche?',
    optionen:[
      { text:'Spiegelbilder — mein Spiegelbild scheint ein Eigenleben zu führen',
        behalte:['"Spiegelbilder scheinen mich immer zu durchschauen."'] },
      { text:'Puppen — reglose Wesen, die sich bewegen könnten',
        behalte:['"Ich habe Angst vor Puppen und Marionetten."'] },
      { text:'Artefakte — magische Dinge mit unbekannten Kräften',
        behalte:['"Magische Artefakte unbekannter Kräfte machen mir Angst."'] },
    ]
  },
  { id:'s15', kat:'samen',
    frage:'Was löst die körperliche Gefahr aus?',
    optionen:[
      { text:'Naturgewalt — Stürme, Donner, unkontrollierbares Wetter',
        behalte:['"Stürme und Unwetter machen mich nervös."'] },
      { text:'Plötzliche Reize — laute Geräusche oder unerwartetes Erscheinen',
        behalte:['"Plötzlicher Krach und plötzliches Erscheinen ruinieren meine Nerven."'] },
      { text:'Fallen und Hinterhalte — jede Tür könnte tödlich sein',
        behalte:['"Jede Tür könnte eine tödliche Falle verbergen."'] },
    ]
  },
  { id:'s16', kat:'samen',
    frage:'Stichend oder brennend?',
    optionen:[
      { text:'Nadeln, Dornen, spitze Gegenstände', behalte:['"Nadeln oder spitze Gegenstände lassen mich unwohl fühlen."'] },
      { text:'Funken, Flammen, Verbrennungsgefahr', behalte:['"Jeder Funken könnte mein Verderben sein."'] },
    ]
  },

  // ── Götter ── g2/g3 ─────────────────────────────────────────────────────
  { id:'g2', kat:'gottheit',
    frage:'Was beschreibt deine göttliche Verbindung am besten?',
    optionen:[
      { text:'Ordnung, Mathematik, Mechanismen und Präzision',
        behalte:['Aetherius','Melion','Nalphimex'] },
      { text:'Wissen, Information, Prophezeiung und Vernetzung',
        behalte:['Serenith','Hydea'] },
      { text:'Zeit — Bewahrung, Beständigkeit oder Auslöschung',
        behalte:['Aetherius','Hydea','Melion','Vezvoriak','Daramur','Flussgeist'] },
      { text:'Erde oder Stein — das Fundament',
        behalte:['Daramur','Steingeist','Erd-Genasi'] },
      { text:'Wind, Wasser oder lebendige Natur',
        behalte:['Eiritha','Windgeist','Selunara','Flussgeist','Waldgeist'] },
      { text:'Feuer, Schöpfung oder Vernichtung',
        behalte:['Hadir','Baalbrezan','Feuergeist'] },
      { text:'Dunkelheit, Stille, Entropie oder Übergänge',
        behalte:['Cecillia','Ophelis','Thraxis','Ferys'] },
      { text:'Albträume, Illusionen oder Chaos',
        behalte:['Lorelei','Ferys','Maledor','Cahbri',"Yx'larak"] },
      { text:'Blut, Fleisch, Seuche oder rohe Macht',
        behalte:['Vindeah','Grikuuth','Netrosk','Kizrovidus'] },
      { text:'Kontrolle, Täuschung, Knechtschaft',
        behalte:['Meleshor','Nalphimex'] },
    ]
  },
  { id:'g3', kat:'gottheit',
    frage:'Was treibt deinen Charakter in seinem Glauben an?',
    optionen:[
      { text:'Das perfekte System — alles hat seinen Platz',    behalte:['Aetherius'] },
      { text:'Netzwerke und verborgenes Wissen',                behalte:['Serenith'] },
      { text:'Metall, Ausdauer und Beständigkeit',              behalte:['Hydea'] },
      { text:'Zahnräder und mechanische Präzision',             behalte:['Melion'] },
      { text:'Zeit als Waffe — Chronos, Auslöschung',           behalte:['Vezvoriak'] },
      { text:'Erde und Erinnerung — das Fundament der Zeit',    behalte:['Daramur'] },
      { text:'Sprache, Wandel und der Wind',                    behalte:['Eiritha'] },
      { text:'Wasser, Geburt und Zyklen',                       behalte:['Selunara'] },
      { text:'Wald, Wachstum und Schutz',                       behalte:['Waldgeist'] },
      { text:'Stein, Tiefe und Ausdauer',                       behalte:['Steingeist'] },
      { text:'Fließendes Wasser und Bewegung',                  behalte:['Flussgeist'] },
      { text:'Freiheit und Wandel des Windes',                  behalte:['Windgeist'] },
      { text:'Ehre, göttliches Recht und Schutz',               behalte:['Aurelia'] },
      { text:'Schicksal und das silberne Band der Erinnerung',  behalte:['Elysarion'] },
      { text:'Sterne, Stille und Schutz im Verborgenen',        behalte:['Avalaste'] },
      { text:'Donner, Krieg und Mut',                           behalte:['Sienna'] },
      { text:'Feuer, Schöpfung und Zerstörung',                 behalte:['Hadir'] },
      { text:'Feuer als Erneuerung und Licht',                  behalte:['Feuergeist'] },
      { text:'Entropie und das Nicht-Sein',                     behalte:['Cecillia'] },
      { text:'Albträume, Illusion und Hunger',                  behalte:['Lorelei'] },
      { text:'Spiegelung und Täuschung der Realität',           behalte:['Ferys'] },
      { text:'Stille, der Übergang und das Dazwischen',         behalte:['Ophelis'] },
      { text:'Enden, Abschluss und Loslassen',                  behalte:['Thraxis'] },
      { text:'Widerspruch, Chaos und das Unmögliche',           behalte:['Maledor'] },
      { text:'Blut, Opfer und Wiedergeburt',                    behalte:['Vindeah'] },
      { text:'Feuer, Vernichtung und Herrschaft über andere',   behalte:['Baalbrezan'] },
      { text:'Wahnsinn, Stille und Verderbnis',                 behalte:['Cahbri'] },
      { text:'Tod, Mutation und das Fleisch',                   behalte:['Grikuuth'] },
      { text:'Gier, Konsum und die innere Leere',               behalte:['Kizrovidus'] },
      { text:'Täuschung, Doppelgänger und Spiegel',             behalte:['Meleshor'] },
      { text:'Knechtschaft, Kontrolle und Metall',              behalte:['Nalphimex'] },
      { text:'Seuche, Verfall und das Vergessen',               behalte:['Netrosk'] },
      { text:"Identität, Auflösung und Chaos",                  behalte:["Yx'larak"] },
    ]
  },

  // ── Werkzeugübungen ── w1–w4 ────────────────────────────────────────────
  { id:'w1', kat:'werkzeuge',
    frage:'Zu welchem Bereich gehört deine Werkzeugübung?',
    optionen:[
      { text:'Alchemie, Kräuter und Heilung',
        behalte:['Alchemistenausrüstung','Brauer-Ausrüstung','Kräuterkunde-Kit','Vergiftungsausrüstung','Feldpatienten-Kit'] },
      { text:'Bauen, Formen und Handwerkskunst',
        behalte:['Glasmacherausrüstung','Holzschnitzerwerkzeug','Lederarbeitsausrüstung','Maurer-Ausrüstung','Schmiedewerkzeug','Steinmetzausrüstung','Tischler-Ausrüstung','Töpferausrüstung','Weberausrüstung','Schmuckausrüstung'] },
      { text:'Wissen, Navigation und Spionage',
        behalte:['Kartenzeichenwerkzeug','Navigationsausrüstung','Schreiberset','Diebeswerkzeug'] },
      { text:'Spiele und Musik',
        behalte:['Drachenschach','Lügenspiel','Musikinstrument','Würfelspiel'] },
    ]
  },
  { id:'w2', kat:'werkzeuge',
    frage:'Mit welchem Material arbeitest du vorrangig?',
    optionen:[
      { text:'Metall — Schmieden, Formen, Verzieren',    behalte:['Schmiedewerkzeug','Schmuckausrüstung'] },
      { text:'Holz — Schnitzen, Tischlern',              behalte:['Holzschnitzerwerkzeug','Tischler-Ausrüstung'] },
      { text:'Stein und Mörtel — Mauerwerk und Bildhauerei', behalte:['Maurer-Ausrüstung','Steinmetzausrüstung'] },
      { text:'Weiche Materialien — Leder, Textilien',    behalte:['Lederarbeitsausrüstung','Weberausrüstung'] },
      { text:'Glas oder Ton — Brennen und Formen',       behalte:['Glasmacherausrüstung','Töpferausrüstung'] },
    ]
  },
  { id:'w3', kat:'werkzeuge',
    frage:'Wofür verwendest du dein alchemistisches Wissen?',
    optionen:[
      { text:'Heilen und stabilisieren — Verbände, Tränke', behalte:['Feldpatienten-Kit','Kräuterkunde-Kit'] },
      { text:'Brauen, Destillieren oder Transmutieren',    behalte:['Brauer-Ausrüstung','Alchemistenausrüstung'] },
      { text:'Gift, Gifte und gefährliche Substanzen',     behalte:['Vergiftungsausrüstung'] },
    ]
  },
  { id:'w4', kat:'werkzeuge',
    frage:'Was ist der Schwerpunkt deines Wissens?',
    optionen:[
      { text:'Karten zeichnen und Landschaften erfassen', behalte:['Kartenzeichenwerkzeug'] },
      { text:'Navigation — Sterne, Kompass, Routen',      behalte:['Navigationsausrüstung'] },
      { text:'Schreiben, Dokumente und Schriften',         behalte:['Schreiberset'] },
      { text:'Schlösser, Fallen und Diebstahl',            behalte:['Diebeswerkzeug'] },
    ]
  },
  { id:'w6', kat:'werkzeuge',
    frage:'Behandelst du eher direkt oder mit natürlichen Mitteln?',
    optionen:[
      { text:'Direkt am Patienten — Verbände, Schienen, Wunden versorgen', behalte:['Feldpatienten-Kit'] },
      { text:'Mit Kräutern und Pflanzenextrakten', behalte:['Kräuterkunde-Kit'] },
    ]
  },
  { id:'w7', kat:'werkzeuge',
    frage:'Arbeitest du eher mit arkaner Chemie oder mit Fermentation?',
    optionen:[
      { text:'Arkane Alchemie — Tränke, Explosiva, Transmutation', behalte:['Alchemistenausrüstung'] },
      { text:'Brauen, Destillieren, Gären — Bier, Mede, Spirituosen',  behalte:['Brauer-Ausrüstung'] },
    ]
  },
  { id:'w8', kat:'werkzeuge',
    frage:'Was formst du aus Metall?',
    optionen:[
      { text:'Klingen, Rüstungen und schwere Metallarbeit', behalte:['Schmiedewerkzeug'] },
      { text:'Schmuck, Ringe und Edelsteinfassungen', behalte:['Schmuckausrüstung'] },
    ]
  },
  { id:'w10', kat:'werkzeuge',
    frage:'Arbeitest du mit weichen Materialien — Tier oder Pflanze?',
    optionen:[
      { text:'Leder — Tierhäute gerben, formen, nähen', behalte:['Lederarbeitsausrüstung'] },
      { text:'Textilien — Weben, Spinnen, Stoffe',      behalte:['Weberausrüstung'] },
    ]
  },
  { id:'w11', kat:'werkzeuge',
    frage:'Arbeitest du mit Hitze und formbaren Materialien — welches?',
    optionen:[
      { text:'Glas — Schmelzen und Blasen von Glas', behalte:['Glasmacherausrüstung'] },
      { text:'Ton — Formen, Brennen, Töpfern',       behalte:['Töpferausrüstung'] },
    ]
  },
  { id:'w9', kat:'werkzeuge',
    frage:'Arbeitest du eher mit Holz oder mit Stein?',
    optionen:[
      { text:'Holz — Figuren schnitzen, feine Holzarbeit', behalte:['Holzschnitzerwerkzeug'] },
      { text:'Holz — Möbel, Strukturen, Tischlerarbeit',  behalte:['Tischler-Ausrüstung'] },
      { text:'Stein — Mauerwerk und Baustrukturen',        behalte:['Maurer-Ausrüstung'] },
      { text:'Stein — Bildhauerei und Steinmetzarbeit',    behalte:['Steinmetzausrüstung'] },
    ]
  },
  { id:'w5', kat:'werkzeuge',
    frage:'Was spielst du?',
    optionen:[
      { text:'Ein Musikinstrument', behalte:['Musikinstrument'] },
      { text:'Strategische Brettspiele — z.B. Drachenschach', behalte:['Drachenschach'] },
      { text:'Würfelspiele und Glück', behalte:['Würfelspiel'] },
      { text:'Karten- und Bluffspiele', behalte:['Lügenspiel'] },
    ]
  },

  // ── Rassen ── r6/r7 (gezielte Einzelpaare) ─────────────────────────────
  { id:'r6', kat:'rasse',
    frage:'Welches Tier verkörpert deinen Charakter am besten?',
    optionen:[
      { text:'Bär — mächtig, ausdauernd, territorial',     behalte:['Bärenvolk'] },
      { text:'Löwe — stolz, anführend, mutig',              behalte:['Leonin'] },
      { text:'Hase — flink, sprunghaft, aufmerksam',        behalte:['Harengons'] },
      { text:'Hyäne — opportunistisch, ausdauernd',         behalte:['Gnoll'] },
      { text:'Fuchs oder Katze — geschmeidig, neugierig',   behalte:['Tabaxi','Wandler'] },
      { text:'Kein bestimmtes Tier — eher adaptiv',         behalte:['Wandler','Wechselbälger'] },
    ]
  },
  { id:'r7', kat:'rasse',
    frage:'Lebt dein Charakter in Licht oder im Schatten?',
    optionen:[
      { text:'Im normalen Tageslicht — keine besondere Verbindung zur Dunkelheit',
        behalte:['Menschen','Aasimar','Halbelfen','Harengons','Leonin','Tabaxi','Bärenvolk'] },
      { text:'Im Schatten — Nacht und Dunkelheit sind heimisch',
        behalte:['Schattenmenschen','Schattengoblin','Darakhul','Dunkelelfen','Schattenfeen'] },
    ]
  },

  // ── Klassen ── k3 ───────────────────────────────────────────────────────
  { id:'k3', kat:'klasse',
    frage:'Was steht im Vordergrund deiner Fähigkeiten?',
    optionen:[
      { text:'Mächtige Naturmagie — Wildgestalt, Flächenzauber, Elemente',
        behalte:['Druide'] },
      { text:'Praktischer Kämpfer der Wildnis — Bogen, Fährten, Tierbegleiter',
        behalte:['Waldläufer'] },
      { text:'Heiliger Krieger — Nahkampf, Schwur, Auren und Heilung',
        behalte:['Paladin'] },
      { text:'Gottesdiener und Heiler — breite Domänenzauber, Leitung',
        behalte:['Kleriker'] },
      { text:'Arkaner Meister — größtes Zauberbuch, reines Studium',
        behalte:['Magier'] },
      { text:'Magie trifft Handwerk — verzauberte Rüstung und Waffen erschaffen',
        behalte:['Magieschmied'] },
    ]
  },

  // ── Hintergründe ── h4/h5 ──────────────────────────────────────────────
  { id:'h4', kat:'hintergrund',
    frage:'Wie erforschst oder erarbeitest du dein Wissen?',
    optionen:[
      { text:'Im Feld — Ausgrabungen, Ruinen, direkte Erkundung',
        behalte:['Archäologe','Ermittler','Städtischer Kopfgeldjäger','Wanderer aus der Ferne'] },
      { text:'In Bibliothek und Scriptorium — Texte und religiöse Werke',
        behalte:['Klostergelehrter','Weiser','Fraktionsagent'] },
      { text:'Durch Befragungen und Spurensuche — aktuelle Fälle lösen',
        behalte:['Ermittler','Städtischer Kopfgeldjäger','Krimineller'] },
      { text:'Durch Privilegien und soziale Stellung',
        behalte:['Adliger','Höfling','Erbe','Ordensritter'] },
      { text:'In der Gemeinschaft — Dorf, Tempel, Stamm',
        behalte:['Stammesmitglied','Tempeldiener','Gemeiner','Klanhandwerker','Einsiedler'] },
    ]
  },
  { id:'h5', kat:'hintergrund',
    frage:'Kommt dein Hintergrund eher aus Geburt, eigenem Verdienst oder Schicksal?',
    optionen:[
      { text:'Geburt — Familie, Blutlinie, Stand',
        behalte:['Adliger','Erbe','Klanhandwerker','Stammesmitglied'] },
      { text:'Eigener Verdienst — erarbeitet, erkämpft, gelernt',
        behalte:['Gilden-/Zunfthandwerker','Soldat','Söldnerveteran','Weiser','Klostergelehrter','Unterhaltungskünstler','Stadtwache','Archäologe','Volksheld'] },
      { text:'Dienst — für jemand anderen oder etwas Größeres',
        behalte:['Höfling','Ordensritter','Tempeldiener','Fraktionsagent','Stadtwache'] },
      { text:'Schicksal oder Zufall — nicht selbst gewählt',
        behalte:['Geplagter','Feenlost','Sonderling','Erbe','Wiedergeborene'] },
      { text:'Straße und Notwendigkeit — Überleben prägt alles',
        behalte:['Straßenkind','Krimineller','Scharlatan','Seemann','Gemeiner','Wanderer aus der Ferne'] },
    ]
  },
  { id:'h6', kat:'hintergrund',
    frage:'Hat dein Wissen einen spirituellen oder weltlichen Fokus?',
    optionen:[
      { text:'Spirituell — religiöse Texte, Theologie, Kloster',
        behalte:['Klostergelehrter','Tempeldiener','Einsiedler'] },
      { text:'Weltlich — Geschichte, Natur, Wissenschaft, Magie',
        behalte:['Weiser','Archäologe','Ermittler','Sonderling'] },
    ]
  },
  { id:'h7', kat:'hintergrund',
    frage:'Dienst für wen?',
    optionen:[
      { text:'Einem Ritterorden oder einer ehrenhaften Sache',
        behalte:['Ordensritter'] },
      { text:'Einer Stadt oder dem Gesetz',
        behalte:['Stadtwache','Fraktionsagent'] },
      { text:'Einem Adeligen oder Hof',
        behalte:['Höfling','Adliger'] },
      { text:'Niemandem — für mich selbst',
        behalte:['Soldat','Söldnerveteran','Volksheld','Seemann','Wanderer aus der Ferne'] },
    ]
  },

  // ── Lebensstile ── l4/l5 ────────────────────────────────────────────────
  { id:'l4', kat:'lebensstil',
    frage:'Hast du in der Regel ein festes Dach über dem Kopf?',
    optionen:[
      { text:'Selten — ich schlafe wo ich kann, oft draußen oder in Abbruchhäusern',
        behalte:['Jämmerlich'] },
      { text:'Meist — ein geteiltes Lager, eine billige Herberge',
        behalte:['Ärmlich','Schlecht'] },
      { text:'Ja, regelmäßig — eigenes Zimmer oder bescheidene Unterkunft',
        behalte:['Einfach','Komfortabel'] },
    ]
  },
  // ── Rasse ── r8 (Drachenblütige) ──────────────────────────────────────
  { id:'r8', kat:'rasse',
    frage:'Welcher Drachentypus prägt dein Erbe?',
    optionen:[
      { text:'Chromatisch — böses Drachenerbe (Säure, Gift, Feuer, Eis, Blitz)',
        behalte:['Chromatische Drachenblütige'] },
      { text:'Metallisch — edles Drachenerbe (Gold, Silber, Bronze, Kupfer, Messing)',
        behalte:['Metallische Drachenblütige'] },
      { text:'Edelstein — psionisches Drachenerbe (Saphir, Smaragd, Rubin…)',
        behalte:['Edelstein Drachenblütige'] },
    ]
  },

  { id:'l5', kat:'lebensstil',
    frage:'Sind deine Mahlzeiten täglich gesichert?',
    optionen:[
      { text:'Nicht immer — ich esse was ich finde oder leisten kann',
        behalte:['Ärmlich','Schlecht'] },
      { text:'Ja, einfach aber täglich',
        behalte:['Einfach'] },
    ]
  },
];
