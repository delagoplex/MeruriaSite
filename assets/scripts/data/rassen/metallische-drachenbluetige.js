// Metallische Drachenblütige — Rassen-Detaildaten. Wird von rassen-detail.html bei Bedarf geladen (siehe rassen-detail-index.js).
(window.RASSEN_DETAIL_DATA = window.RASSEN_DETAIL_DATA || {})['Metallische Drachenblütige'] = {
  name: 'Metallische Drachenblütige', accent: '#d4af50',
  subtitle: 'Erben der Metallischen · Kinder des Guten',
  tags: ['Humanoid','Mittelgroß','9 m Bewegung','Doppel-Odem','Meistens Gut'],
  headerImage: 'assets/images/races/metallische_drachenblütige/banner.png',
  lore: {
    intro: [
      'Drachenblütige mit metallischem Erbe erheben Anspruch auf die Zähigkeit metallischer Drachen — Messing, Bronze, Kupfer, Gold und Silber — und tragen deren Glanz in ihren Schuppen. Das Feuer von Öfen und Schmieden, die Kälte von Gebirgsluft, der Funke der Inspiration und die ätzende Läuterung der Säure sind ihre Gebiete.',
      'Anders als ihre chromatischen Geschwister gelten metallische Drachenblütige als edle, aufrechte Wesen — ein Ruf, der ihnen ebenso viele Erwartungen aufbürdet wie Türen öffnet. Ihr Glanz ist nicht nur äußerlich: Er drückt sich in Haltung, Ehrenhaftigkeit und dem Willen aus, für andere einzustehen.',
    ],
    gesellschaft: [
      'Metallische Drachenblütige leben oft in eng verwobenen Klanen mit klar definierten Ehrenkodizes. Wer seinen Klan beschämt, trägt diese Schuld buchstäblich auf der Haut — die Schuppen verlieren ihren Glanz. Es heißt, nur eine vollbrachte Heldentat kann ihn zurückbringen.',
      'Wie alle Drachenblütigen führen sie einen dreifachen Namen: Vorname, Jugendname und Klanname. Gerade die Klannamen metallischer Drachenblütiger klingen oft nach altem Gold — lang, klangvoll und schwer zu vergessen.',
      'In Meruria sind metallische Drachenblütige gefragte Verbündete. Ihr Ruf als loyale, mutige Kämpfer eilt ihnen voraus — was manche von ihnen als Fluch empfinden, da die Welt von ihnen erwartet, was gute Drachen verkörpern.',
    ],
    introBild:        { url: 'assets/images/races/metallische_drachenblütige/charaktere.png', label: 'Metallische Drachenblütige · Illustration', caption: 'Charakter-Illustration', position: 'right', width: 360, height: 360 },
    gesellschaftBild: { url: null, label: 'Klan des Glanzes · Illustration', caption: 'Metallische Drachenblütige in ihrer Gemeinschaft', position: 'left', width: 240, height: 300 },
  },
  specialSection: {
    type: 'variantCards',
    label: 'Metallische Abstammung',
    beschreibung: 'Wähle eine der fünf metallischen Abstammungen — sie bestimmt Erscheinung, Odemwaffe und Resistenz.',
    varianten: [
      { farbe:'Bronze',  name:'Bronzene Drachenblütige',      schadensart:'Blitz',  farbeHex:'#b87333', bild:'assets/images/races/metallische_drachenblütige/bronzene_drachenbluetige.png', augenfarbe:'meistens Grün, Bernstein oder Kupfer',  hautfarbe:'Bronzefarben (metallisch schimmernd)', haarfarbe:'oft kein Haar — sonst Kupfer oder Bronze', odemwaffe:'Deine Odemwaffe ist ein furchteinflößender Sturm aus elektrischer Energie, mit der du Blitzschaden verursachst.',  resistenz:'Deine angeborene Affinität zur Elektrizität gewährt dir Resistenz gegenüber Blitzschaden.' },
      { farbe:'Gold',    name:'Goldene Drachenblütige',        schadensart:'Feuer',  farbeHex:'#d4a017', bild:'assets/images/races/metallische_drachenblütige/goldene_drachenbluetige.png', augenfarbe:'meistens Goldgelb, Amber oder Kupfer',   hautfarbe:'Goldfarben (hell metallisch glänzend)', haarfarbe:'oft kein Haar — sonst Gold oder Goldblond', odemwaffe:'Deine Odemwaffe ist ein flammendes Inferno, mit der du Feuerschaden verursachst.',                               resistenz:'Deine angeborene Affinität zum Feuer gewährt dir Resistenz gegenüber Feuerschaden.' },
      { farbe:'Kupfer',  name:'Kupferne Drachenblütige',       schadensart:'Säure',  farbeHex:'#ad6f3b', bild:'assets/images/races/metallische_drachenblütige/kupferne_drachenbluetige.png', augenfarbe:'meistens Kupfer, Grün oder Bernstein',   hautfarbe:'Kupferfarben (rötlich metallic)',       haarfarbe:'oft kein Haar — sonst Kupferrot oder Rotbraun', odemwaffe:'Deine Odemwaffe ist ein Schwall aus ätzender Säure, mit der du Säureschaden verursachst.',                       resistenz:'Deine angeborene Affinität zur Säure gewährt dir Resistenz gegenüber Säureschaden.' },
      { farbe:'Messing', name:'Messingfarbige Drachenblütige', schadensart:'Feuer',  farbeHex:'#c9a84c', bild:'assets/images/races/metallische_drachenblütige/messingfarbige_drachenbluetige.png', augenfarbe:'meistens Goldgelb, Orange oder Braun',   hautfarbe:'Messingfarben (gelblich metallic)',     haarfarbe:'oft kein Haar — sonst Goldgelb oder Dunkelblond', odemwaffe:'Deine Odemwaffe ist ein Strahl aus Flammen, mit der du Feuerschaden verursachst.',                                resistenz:'Deine angeborene Affinität zum Feuer gewährt dir Resistenz gegenüber Feuerschaden.' },
      { farbe:'Silber',  name:'Silberne Drachenblütige',       schadensart:'Kälte',  farbeHex:'#a8aabb', bild:'assets/images/races/metallische_drachenblütige/silberne_drachenbluetige.png', augenfarbe:'meistens Silber, Blau oder Weiß',        hautfarbe:'Silberfarben (kühl metallisch)',        haarfarbe:'oft kein Haar — sonst Silber oder Weiß', odemwaffe:'Deine Odemwaffe ist ein eisiger Atem, mit der du Kälteschaden verursachst.',                                       resistenz:'Deine angeborene Affinität zum Eis gewährt dir Resistenz gegenüber Kälteschaden.' },
    ],
  },
  namenSection: {
    type: 'nameRoller',
    label: 'Namen der Drachenblütigen',
    beschreibung: 'Würfle oder wähle einen Vor-, Jugend- und Klannamen für deinen Drachenblütigen-Charakter.',
    tabellen: [
      { name:'Männliche Vornamen (1W50)', eintraege:['Arjhan','Balasar','Bharash','Donaar','Ghesh','Heskan','Kriv','Medrash','Mehen','Nadarr','Pandjed','Patrin','Rhogat','Shamash','Shedinn','Tarhun','Torinn','Azrak','Drazzir','Fyndar','Gornash','Haldor','Jareth','Kharik','Lirash','Marzix','Nalrak','Orvex','Pyrax','Quorin','Ralnor','Syrash','Tarkus','Urzoth','Valthor','Xandar','Yrdan','Zalthar','Drayko','Grulthor','Hrakkon','Jaxar','Kordax','Maldrax','Norik','Pyrthas','Raxthor','Skarn','Vornax','Tyndar'] },
      { name:'Weibliche Vornamen (1W50)',  eintraege:['Akra','Biri','Daar','Farideh','Harann','Jheri','Kava','Korinn','Mishann','Nala','Perra','Raiann','Sora','Surina','Thava','Uadjit','Alyra','Belara','Caelia','Deryn','Elys','Freyna','Gavara','Haelis','Ilyria','Jhara','Kalira','Lysandra','Mira','Nyara','Orla','Pyra','Raelis','Qiana','Synna','Valara','Talia','Xavia','Wrenna','Yara','Zara','Daelis','Fyra','Gryna','Hestia','Jaira','Kyra','Malina','Nysra','Zephra'] },
      { name:'Jugendnamen (1W50)',          eintraege:['Kletterer','Ohrenkrümmer','Hüpfer','Frommer','Schildbeißer','Eifriger','Funkenjäger','Himmelstänzer','Wolkenjäger','Sternengucker','Zauberer','Zitterer','Lauerer','Einmischer','Schniefer','Kuschler','Springer','Brüller','Furchtloser','Glamouröser','Bogenbrecher','Fressender','Flüsterer','Angeber','Dachkratzer','Kichernder','Faulpelz','Mauerbröckler','Holzstampfer','Träumer','Fähiger','Diebischer','Reflektierender','Greifer','Humpelnder','Trampler','Kitzelnder','Mauerknacker','Schildschnapper','Fasskratzer','Holzfäller','Krümler','Stirnrunzler','Schildschneider','Stabkratzer','Donnernder','Herumtreiber','Gefährlicher','Lächelnder'] },
      { name:'Klannamen (1W50)',            eintraege:['Clethtinthiallor','Daardendrian','Delmirev','Drachedandion','Fenkenkabradon','Kepeshkmolik','Kerrhylon','Kimbatuul','Linxakasendalor','Myastan','Nemmonis','Norixius','Ophinshtalajir','Prexijandilin','Shestendeliath','Turnuroth','Verthisathurgiesh','Yarjerit','Bromundar','Crystanax','Drimdalor','Faernesk','Grymgoroth','Helarkon','Ildrekas','Khaldros','Lythrian','Mordraxus','Obsidianth','Pyraxil','Qaldormir','Ralkorian','Scarneth','Thraxindor','Umbraskor','Valthryn','Wyrmfaxus','Xandorien','Yldryss','Zalthrokir','Drimvaxal','Fyrrinax','Galdrekir','Helvardur','Ildrixia','Khaldoria','Lythriel','Dracis','Jarkhuldir'] },
    ],
  },
  charakterGenerator: {
    felder: [
      { label:'Geschlecht',  type:'choice',         optionen:['männlich','weiblich'] },
      { label:'Abstammung',  type:'table',           optionen:['Bronze (Blitz)','Gold (Feuer)','Kupfer (Säure)','Messing (Feuer)','Silber (Kälte)'] },
      { label:'Vorname',     type:'gendered-table',  maennlich:['Arjhan','Balasar','Bharash','Donaar','Ghesh','Heskan','Kriv','Medrash','Mehen','Nadarr','Pandjed','Patrin','Rhogat','Shamash','Shedinn','Tarhun','Torinn','Azrak','Drazzir','Fyndar','Gornash','Haldor','Jareth','Kharik','Lirash','Marzix','Nalrak','Orvex','Pyrax','Quorin','Ralnor','Syrash','Tarkus','Urzoth','Valthor','Xandar','Yrdan','Zalthar','Drayko','Grulthor','Hrakkon','Jaxar','Kordax','Maldrax','Norik','Pyrthas','Raxthor','Skarn','Vornax','Tyndar'], weiblich:['Akra','Biri','Daar','Farideh','Harann','Jheri','Kava','Korinn','Mishann','Nala','Perra','Raiann','Sora','Surina','Thava','Uadjit','Alyra','Belara','Caelia','Deryn','Elys','Freyna','Gavara','Haelis','Ilyria','Jhara','Kalira','Lysandra','Mira','Nyara','Orla','Pyra','Raelis','Qiana','Synna','Valara','Talia','Xavia','Wrenna','Yara','Zara','Daelis','Fyra','Gryna','Hestia','Jaira','Kyra','Malina','Nysra','Zephra'] },
      { label:'Jugendname',  type:'table',           optionen:['Kletterer','Ohrenkrümmer','Hüpfer','Frommer','Schildbeißer','Eifriger','Funkenjäger','Himmelstänzer','Wolkenjäger','Sternengucker','Zauberer','Zitterer','Lauerer','Einmischer','Schniefer','Kuschler','Springer','Brüller','Furchtloser','Glamouröser','Bogenbrecher','Fressender','Flüsterer','Angeber','Dachkratzer','Kichernder','Faulpelz','Mauerbröckler','Holzstampfer','Träumer','Fähiger','Diebischer','Reflektierender','Greifer','Humpelnder','Trampler','Kitzelnder','Mauerknacker','Schildschnapper','Fasskratzer','Holzfäller','Krümler','Stirnrunzler','Schildschneider','Stabkratzer','Donnernder','Herumtreiber','Gefährlicher','Lächelnder'] },
      { label:'Klanname',    type:'table',           optionen:['Clethtinthiallor','Daardendrian','Delmirev','Drachedandion','Fenkenkabradon','Kepeshkmolik','Kerrhylon','Kimbatuul','Linxakasendalor','Myastan','Nemmonis','Norixius','Ophinshtalajir','Prexijandilin','Shestendeliath','Turnuroth','Verthisathurgiesh','Yarjerit','Bromundar','Crystanax','Drimdalor','Faernesk','Grymgoroth','Helarkon','Ildrekas','Khaldros','Lythrian','Mordraxus','Obsidianth','Pyraxil','Qaldormir','Ralkorian','Scarneth','Thraxindor','Umbraskor','Valthryn','Wyrmfaxus','Xandorien','Yldryss','Zalthrokir','Drimvaxal','Fyrrinax','Galdrekir','Helvardur','Ildrixia','Khaldoria','Lythriel','Dracis','Jarkhuldir'] },
      { label:'Talent',      type:'table',           optionen:['Drachenhaut','Drachensicht','Drachensegen'] },
    ],
  },
  beziehungen: [
    { volk:'Menschen',    relation:'Bewunderung',     text:'Menschen sehen in metallischen Drachenblütigen oft das Ideal des edlen Kriegers. Diese Projektion kann inspirierend sein — oder erdrückend.' },
    { volk:'Elfen',       relation:'Respekt',         text:'Elfen achten das Erbe metallischer Drachen. Die alten Verbindungen zwischen Elfen und Golddrachen sind nicht vergessen.' },
    { volk:'Zwerge',      relation:'Kollegialität',   text:'Metall verbindet. Zwerge sehen in metallischen Drachenblütigen Handwerksgeschwister — auch wenn deren "Metall" biologischer Natur ist.' },
    { volk:'Tieflinge',   relation:'Vorsicht',        text:'Beide kennen das Gewicht eines Erbes, das sie nicht gewählt haben. Die Beziehung ist nie einfach, aber oft ehrlicher als mit anderen.' },
    { volk:'Chromatische Drachenblütige', relation:'Spannung', text:'Dieselbe Abstammung, entgegengesetzte Ausrichtung. Zwischen metallischen und chromatischen Drachenblütigen liegt eine alte, unausgesprochene Spannung.' },
    { volk:'Paladine',    relation:'Verbundenheit',   text:'Metallische Drachenblütige und Paladine teilen oft denselben Ehrenkodex. Viele metallische Drachenblütige finden ihren Weg natürlich in diesen Orden.' },
  ],
  bekannte: [
    { name:'— Unbekannt —', rolle:'Name noch nicht festgelegt', beschreibung:'Dieser Eintrag ist für einen bekannten metallischen Drachenblütigen in Meruria reserviert.' },
    { name:'— Unbekannt —', rolle:'Name noch nicht festgelegt', beschreibung:'Dieser Eintrag ist für einen bekannten metallischen Drachenblütigen in Meruria reserviert.' },
    { name:'— Unbekannt —', rolle:'Name noch nicht festgelegt', beschreibung:'Dieser Eintrag ist für einen bekannten metallischen Drachenblütigen in Meruria reserviert.' },
  ],
  radar: { labels:['Mobilität','Kampf','Magie','Soziales','Überleben','Weisheit'], values:[50,82,38,70,72,58] },
  quiz: {
    steps: [
      { frage:'Welche Abstammung hat dein metallischer Drachenblütiger?', optionen:[
        { text:'Bronze — Blitz und Ehre',          tags:['Paladin','Kämpfer'] },
        { text:'Gold — Feuer und Weisheit',         tags:['Kleriker','Magier'] },
        { text:'Kupfer — Säure und Witz',           tags:['Barde','Schurke'] },
        { text:'Messing oder Silber',               tags:['Zauberer','Waldläufer'] },
      ]},
      { frage:'Wie lebt dein Charakter seinen Ehrenkodex?', optionen:[
        { text:'Absolut — Ehre über alles, auch über mein Leben',  tags:['Paladin','Kleriker'] },
        { text:'Pragmatisch — Ehre ist wichtig, aber Kontext zählt', tags:['Kämpfer','Waldläufer'] },
        { text:'Selektiv — ich wähle selbst, was ehrenwert ist',   tags:['Schurke','Barde'] },
        { text:'Philosophisch — ich hinterfrage, was Ehre bedeutet', tags:['Magier','Zauberer'] },
      ]},
      { frage:'Wie setzt dein Charakter seine zweite Odemwaffe ein?', optionen:[
        { text:'Entkräftend — Feind kampfunfähig machen',   tags:['Kämpfer','Paladin'] },
        { text:'Abstoßend — Feinde aus der Formation reißen', tags:['Barbar','Waldläufer'] },
        { text:'Situationsabhängig — was gerade passt',     tags:['Schurke','Magier'] },
        { text:'Selten — als letztes Mittel',               tags:['Kleriker','Barde'] },
      ]},
      { frage:'Welche Rolle spielt dein Charakter in einer Gruppe?', optionen:[
        { text:'Anführer — mein Glanz gibt anderen Halt',   tags:['Paladin','Barde'] },
        { text:'Frontlinie — ich halte und teile aus',      tags:['Kämpfer','Barbar'] },
        { text:'Beschützer — die anderen kommen zuerst',    tags:['Kleriker','Druide'] },
        { text:'Stratege — ich entscheide Kämpfe mit Köpfchen', tags:['Magier','Waldläufer'] },
      ]},
    ],
    klassen: {
      'Paladin':     'Metallisches Blut und heiliger Schwur — du bist das Ideal, das andere anstreben. Trag es mit Würde.',
      'Kämpfer':     'Doppel-Odem plus Kampfdisziplin: du hast mehr Werkzeuge als die meisten. Und du weißt, wie man sie nutzt.',
      'Kleriker':    'Gold und Göttlichkeit. Du verbindest drachenblütiges Erbe mit heiliger Berufung auf einzigartige Weise.',
      'Magier':      'Das Metall in deinem Blut leitet Magie anders. Du bist neugierig — was steckt wirklich hinter deiner Abstammung?',
      'Barde':       'Kupferne Drachenblütige sind für ihren Witz berühmt. Du bist der Beweis, dass Magie auch Humor hat.',
      'Schurke':     'Ehrenwert bedeutet nicht sichtbar. Du arbeitest im Schatten, aber dein innerer Kodex bleibt ungebrochen.',
      'Barbar':      'Wenn du wütest, leuchtet das Metall in dir. Deine Wut ist nicht Chaos — sie ist kontrolliertes Feuer.',
      'Waldläufer':  'Du schützt aus dem Hintergrund. Silberne Drachenblütige sind legendäre Grenzwächter.',
      'Zauberer':    'Dein Drachenblut und deine arkane Magie verstärken sich gegenseitig. Du bist mehr als die Summe beider.',
      'Druide':      'Metall und Natur — ein seltener Bund. Du fragst, ob das Glänzen deiner Schuppen auch die Erde widerspiegelt.',
    },
  },
  statblock: {
    features: [
      { name:'Kreaturentyp',            text:'Humanoider. Gilt als Drachenblütiger bei allen Voraussetzungen und Effekten.' },
      { name:'Größenkategorie',                   text:'Drachenblütige sind mit ihren über 180 cm und etwa 250 Pfund weit größer und schwerer als Menschen. Deine Größenkategorie ist mittelgroß.' },
      { name:'Metallische Abstammung',  text:'Du hast einen metallischen Drachenvorfahren. Wähle eine Abstammung: Bronze (Blitz), Gold (Feuer), Kupfer (Säure), Messing (Feuer) oder Silber (Kälte). Sie bestimmt die Schadensart deiner anderen Merkmale.' },
      { name:'Odemwaffe',               text:'Wenn du die Angreifen-Aktion ausführst, kannst du einen Angriff durch deinen Odem ersetzen: einen 4,5 m langen Kegel magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich deinem Übungsbonus.' },
      { name:'Drakonische Resistenz',   text:'Du bist gegen die Schadensart resistent, die mit deiner metallischen Abstammung assoziiert ist.' },
      { name:'Kaltblütig',              text:'Du bist immun gegen die Auswirkungen von heißen Temperaturen.' },
      { name:'Metallische Odemwaffe (ab Stufe 5)', text:'Als Bonusaktion atmest du magische Energie in einem 4,5 m langen Kegel aus (SG = 8 + KON-Mod + Übungsbonus). Wähle einen der beiden Effekte. Einmal pro langer Rast.', subfeatures: [
        { name:'Entkräftender Odem', text:'Jede Kreatur im Kegel muss einen Konstitutionsrettungswurf bestehen oder ist bis zum Beginn deines nächsten Zuges kampfesunfähig.' },
        { name:'Odem der Abstoßung', text:'Jede Kreatur im Kegel muss einen Stärkerettungswurf bestehen oder wird bis zu 6 m von dir weggestoßen und umgeworfen.' },
      ]},
      { name:'Angeborenes Talent',      text:null, talente:['Drachenhaut','Drachensicht','Drachensegen'] },
    ],
  },
};
