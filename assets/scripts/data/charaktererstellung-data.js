// char-data.js — Meruria Charaktererstellung Daten

window.ALLE_RASSEN = [
  'Aarakocra','Aasimar','Dhampire',
  'Drachenblütige (Chromatisch)','Drachenblütige (Edelstein)','Drachenblütige (Metallisch)',
  'Echsenmenschen',
  'Elfen (Dunkel)','Elfen (Eladrin)','Elfen (Hoch)','Elfen (Meer)','Elfen (Schatten)','Elfen (Wald)',
  'Feen','Firbolg',
  'Genasi (Erde)','Genasi (Feuer)','Genasi (Luft)','Genasi (Wasser)',
  'Githyanki','Githzerai',
  'Gnome (Felsen)','Gnome (Tiefen)','Gnome (Wald)',
  'Goblins','Goliaths','Grottenschrate',
  'Halbelfen','Halblinge (Leichtfüße)','Halblinge (Stämmige)',
  'Halborks','Harengons','Hexblute','Hobgoblins',
  'Kenku','Kobolde','Menschen','Minotauren','Orks',
  'Satyrn','Tabaxi','Tieflinge','Tortels','Tritons',
  'Wandler','Wechselbälger','Wiedergeborene','Yuan-ti',
  'Zentauren','Zwerge (Gebirge)','Zwerge (Grau)','Zwerge (Hügel)'
];

window.RASSEN_GRUPPEN = [
  { gruppe:null, rassen:['Aarakocra','Aasimar','Dhampire','Echsenmenschen','Feen','Firbolg','Githyanki','Githzerai','Goblins','Goliaths','Grottenschrate','Halbelfen','Halborks','Harengons','Hexblute','Hobgoblins','Kenku','Kobolde','Menschen','Minotauren','Orks','Satyrn','Tabaxi','Tieflinge','Tortels','Tritons','Wandler','Wechselbälger','Wiedergeborene','Yuan-ti','Zentauren'] },
  { gruppe:'Drachenblütige', rassen:['Drachenblütige (Chromatisch)','Drachenblütige (Edelstein)','Drachenblütige (Metallisch)'] },
  { gruppe:'Elfen',          rassen:['Elfen (Dunkel)','Elfen (Eladrin)','Elfen (Hoch)','Elfen (Meer)','Elfen (Schatten)','Elfen (Wald)'] },
  { gruppe:'Genasi',         rassen:['Genasi (Erde)','Genasi (Feuer)','Genasi (Luft)','Genasi (Wasser)'] },
  { gruppe:'Gnome',          rassen:['Gnome (Felsen)','Gnome (Tiefen)','Gnome (Wald)'] },
  { gruppe:'Halblinge',      rassen:['Halblinge (Leichtfüße)','Halblinge (Stämmige)'] },
  { gruppe:'Zwerge',         rassen:['Zwerge (Gebirge)','Zwerge (Grau)','Zwerge (Hügel)'] },
];

window.ALLE_KLASSEN = [
  'Barbar','Barde','Druide','Hexenmeister','Kämpfer','Kleriker',
  'Magier','Magieschmied','Mönch','Paladin','Schurke','Waldläufer','Zauberer'
];

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

window.CHAR_QUIZ = [
  { id:'r1', kat:'rasse',
    frage:'Wie beschreibst du das äußere Erscheinungsbild deines Charakters?',
    optionen:[
      { text:'Weitgehend menschlich',
        behalte:['Menschen','Halbelfen','Halborks','Aasimar','Tieflinge','Dhampire','Wechselbälger','Wiedergeborene','Hexblute'] },
      { text:'Klein und zierlich — deutlich kleiner als Menschen',
        behalte:['Halblinge (Leichtfüße)','Halblinge (Stämmige)','Gnome (Felsen)','Gnome (Tiefen)','Gnome (Wald)','Kobolde','Goblins','Grottenschrate','Feen'] },
      { text:'Elfengleich — schlank, übernatürliche Ausstrahlung',
        behalte:['Elfen (Dunkel)','Elfen (Eladrin)','Elfen (Hoch)','Elfen (Meer)','Elfen (Schatten)','Elfen (Wald)'] },
      { text:'Tierische Züge — Fell, Federn oder Schuppen',
        behalte:['Aarakocra','Tabaxi','Kenku','Harengons','Echsenmenschen','Yuan-ti','Satyrn','Tortels','Tritons','Wandler'] },
      { text:'Massig und einschüchternd — Ork- oder Riesenstatur',
        behalte:['Orks','Halborks','Goliaths','Firbolg','Minotauren','Zentauren','Hobgoblins'] },
      { text:'Elementar, drachenhaft oder von einer anderen Ebene',
        behalte:['Drachenblütige (Chromatisch)','Drachenblütige (Edelstein)','Drachenblütige (Metallisch)','Genasi (Erde)','Genasi (Feuer)','Genasi (Luft)','Genasi (Wasser)','Githyanki','Githzerai'] },
    ]
  },
  { id:'r2', kat:'rasse',
    frage:'Was liegt an der Wurzel deiner Herkunft?',
    optionen:[
      { text:'Rein menschliches Erbe, keine übernatürliche Abstammung',
        behalte:['Menschen'] },
      { text:'Gemischtes Blut — zwei Welten in einer Gestalt',
        behalte:['Halbelfen','Halborks','Wechselbälger','Hexblute'] },
      { text:'Himmlische oder göttliche Abstammung',
        behalte:['Aasimar','Elfen (Hoch)','Elfen (Eladrin)','Elfen (Meer)','Halbelfen'] },
      { text:'Höllische, dämonische oder arkane Abstammung',
        behalte:['Tieflinge','Hexblute','Drachenblütige (Chromatisch)','Drachenblütige (Metallisch)'] },
      { text:'Verbindung zu Tod, Schatten oder dem Jenseits',
        behalte:['Dhampire','Wiedergeborene','Elfen (Dunkel)','Elfen (Schatten)','Grottenschrate'] },
      { text:'Uraltes Naturerbe — Geister, Wildnis, Magie',
        behalte:['Firbolg','Gnome (Wald)','Feen','Elfen (Wald)','Satyrn','Zentauren','Wandler','Harengons'] },
      { text:'Handwerk und Tiefen der Erde',
        behalte:['Zwerge (Gebirge)','Zwerge (Grau)','Zwerge (Hügel)','Gnome (Felsen)','Gnome (Tiefen)','Kobolde','Goblins','Hobgoblins'] },
      { text:'Tierischer oder stammesgeschichtlicher Ursprung',
        behalte:['Tabaxi','Kenku','Aarakocra','Yuan-ti','Echsenmenschen','Tortels','Tritons','Minotauren','Orks','Halborks','Goliaths','Grottenschrate'] },
      { text:'Elementarer oder Ebenenursprung',
        behalte:['Genasi (Erde)','Genasi (Feuer)','Genasi (Luft)','Genasi (Wasser)','Githyanki','Githzerai','Drachenblütige (Edelstein)'] },
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
        behalte:['Kleriker','Barde','Druide','Paladin'] },
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
];
