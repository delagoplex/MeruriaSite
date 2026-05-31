// rassen-detail-data.js — Detaildaten für alle Rassen
// Keyed by race name (matches ?rasse= URL param und gebaeude-data.js names)
//
// headerImage: Pfad zum Banner-Bild der Rassen-Detailseite (Header-Bereich).
//   Solange kein Bild vorhanden: null lassen.
//   Sobald das Artwork fertig ist, einfach den Pfad eintragen, z.B.:
//     headerImage: 'assets/images/races/banner/aarakocra.png',
//   Empfohlenes Format: PNG oder JPG, Querformat (ca. 1200×400 px), Fokus oben.
window.RASSEN_DETAIL_DATA = {

// ══════════════════════════════════════════════════════════════════════
// AARAKOCRA — vollständige Daten
// ══════════════════════════════════════════════════════════════════════
'Aarakocra': {
  name: 'Aarakocra', accent: '#1ab8a0',
  subtitle: 'Kinder des Himmels · Diener der Winde',
  tags: ['Humanoid','Mittelgroß','9 m Bewegung','Flug','Meistens Gut'],
  headerImage: null, // z.B. 'assets/images/races/banner/aarakocra.png'
  lore: {
    intro: [
      'Diese geflügelten Wesen stammen ursprünglich von der Elementarebene der Luft und bewegen sich stets fliegend fort. Die ersten Aarakocra dienten den Windherzögen — mächtigen Luftwesen — und verfügten über eine Spur der Macht ihrer Meister über die Winde. Auch ihre Nachkommen weisen noch einen Schatten dieser Macht auf.',
      'Aarakocra sehen von unten wie große Vögel aus, weswegen sie manchmal auch als Vogelleute bezeichnet werden. Erst wenn sie auf Ästen hocken oder auf dem Boden gehen, wird ihre humanoide Natur deutlich. Aarakocra sind etwa 1,5 Meter groß und haben lange schmale Beine, die in scharfen Klauen münden. Ihr Körper ist gefiedert — normalerweise rot, orange, gelb, braun oder grau. Auch haben sie Vogelköpfe, oft denen von Papageien oder Adlern ähnlich.',
    ],
    gesellschaft: [
      'Aarakocra leben in kleinen, eng verbundenen Stämmen hoch in den Bergen oder auf den Klippen der Elementarebene der Luft. Ihr Leben ist geprägt von der ständigen Bewegung — sie bauen keine Städte, sondern tragen ihre Heimat in sich. Ihre Gemeinschaften sind flach strukturiert: Wer am weitesten geflogen ist, gilt als der Weiseste.',
      'Die Bindung an die Windherzöge ist nicht vergessen, auch wenn sie schwächer geworden ist. Viele Aarakocra praktizieren noch immer Rituale zu Ehren der alten Luftgeister, singen bei Sonnenaufgang und veranstalten kunstvolle Flugzeremonieen bei bedeutenden Ereignissen.',
      'Namen bei den Aarakocra sind Klänge — kurze, scharfe Silben oder lang gezogene Rufe, die in der Luft tragen. Ein Name ist kein Etikett; er ist eine Melodie, die andere erkennen sollen, noch bevor sie die Figur sehen.',
    ],
  },
  specialSection: {
    type: 'nameRoller',
    label: 'Aarakocra-Namen',
    beschreibung: 'Namen der Aarakocra sind phonetisch geprägt von scharfen Konsonanten und kurzen Vokalen — Klänge, die sich in der Luft tragen. Es gibt kein Geschlecht in Aarakocra-Namen — alle Namen gelten für alle.',
    namen: ['Yaec','Grick','Rirr','Sur','Ged','Kherirrk','Yakkeahk','Krellieg','Hiccik','Cra','Kil','Qess','Cuass','Reed','Khikkic','Iriss','Ukkehk','Kikkel','Eccirrk','Rhe','Ooss','Rhehk','Crarr','Oug','Calli','Kluakkeer','Daekess','Zakias','Gruss','Yerr','Gu','Eck','Cla','Ciccess','Rhirac','Krelir','Cluierre','Zaec','Khal','Qhug','Suiehk','Krirre','Eccack','Keqak','Diccark','Icce','Claf','Zuie','Qlarr','Ig','Dirc','Yooras','Zooqes','Krece','Qhaeqa','Riliac','Dae','Qhuieg','Gaf','Qir','Irc','Eellas','Qiqi','Sekke','Crilirrk','Qellerc','As','Urr','Duierc','Qle','Ook','Gacarc','Uielli','Accil','Deqiark','Ikiaf','Suk','Err','Kherc','Kral','Da','Curark','Krelas','Qlalil','Qrurek','Iss','Qhoos','Kle','Yuf','Krurr','Allieck','Gaecceck','Ulak','Crallearc','Eg','Crug','Garrk','Iqeck','Heqi','Kha'],
  },
  charakterGenerator: {
    felder: [
      { label: 'Geschlecht',    type: 'choice', optionen: ['männlich','weiblich'] },
      { label: 'Alter',         type: 'range',  min: 3,   max: 62,  suffix: ' Jahre' },
      { label: 'Augenfarbe',    type: 'table',  optionen: ['blau','rot','braun','grau'] },
      { label: 'Hauptgefieder', type: 'table',  optionen: ['rot','orange','gelb','braun','grau'] },
      { label: 'Akzentgefieder',type: 'table',  optionen: ['weiß','schwarz','gold','dunkelbraun','cremeweiß'] },
    ],
  },
  beziehungen: [
    { volk:'Menschen',  relation:'Neugier',     text:'Menschen fasziniert alles Fremde — und Aarakocra sind das Fremdeste, was viele je gesehen haben. Die Beziehung ist herzlich, aber von gegenseitigem Unverständnis geprägt.' },
    { volk:'Elfen',     relation:'Respekt',     text:'Elfen sehen in den Aarakocra alte Seelen, die den Wind ebenso gut kennen wie sie die Bäume. Es gibt eine stille gegenseitige Anerkennung.' },
    { volk:'Zwerge',    relation:'Skepsis',     text:'Für Zwerge, die tief in der Erde leben, sind die Vogelleute unbegreiflich. Zu leicht, zu frei, zu unbeständig. Sie respektieren ihre Klauenkämpfe, aber verstehen sie nicht.' },
    { volk:'Gnome',     relation:'Begeisterung',text:'Gnome sind begeistert von der Mechanik des Flugs. Aarakocra finden diese Neugier amüsant, manchmal lästig.' },
    { volk:'Tieflinge', relation:'Solidarität', text:'Auch Tieflinge kennen das Gefühl, aufgrund ihres Äußeren bewertet zu werden. Es gibt eine unausgesprochene Solidarität zwischen diesen beiden Außenseitern.' },
    { volk:'Halblinge', relation:'Wärme',       text:'Halblinge sehen in Aarakocra abenteuerlustige Seelen, die Geschichten mitbringen. Diese Begegnungen enden oft mit stundenlangen Erzählungen.' },
  ],
  bekannte: [
    { name:'Aerie Sturmfeder',          rolle:'Späher der Pathfinder-Division',  beschreibung:'Eine der ersten Aarakocra, die sich einer der großen Divisionen von Meruria anschloss. Bekannt für ihre Fähigkeit, Strömungen zu lesen, die andere nicht einmal ahnen.' },
    { name:'Kress von den Hohen Winden',rolle:'Windrufer und Wanderprediger',    beschreibung:'Reist seit Jahrzehnten durch die Reiche und predigt die Botschaft der Windherzöge. Seine Federn tragen Tintenmarkierungen von jedem Ort, den er besucht hat.' },
    { name:'Yael Eisflügel',             rolle:'Händlerin und Botschafterin',     beschreibung:'Betreibt ein kleines Botennetzwerk zwischen den Bergstädten. Sie ist dafür bekannt, Nachrichten schneller zu überbringen als jede andere Botin — selbst bei Gegenwinden.' },
    { name:'— Unbekannt —',              rolle:'Name noch nicht festgelegt',      beschreibung:'Dieser Eintrag ist für einen weiteren bekannten Aarakocra reserviert.' },
    { name:'— Unbekannt —',              rolle:'Name noch nicht festgelegt',      beschreibung:'Dieser Eintrag ist für einen weiteren bekannten Aarakocra reserviert.' },
  ],
  radar: { labels:['Mobilität','Kampf','Magie','Soziales','Überleben','Weisheit'], values:[95,62,55,48,70,72] },
  quiz: {
    steps: [
      { frage:'Wie geht dein Charakter mit Konflikten um?', optionen:[
        { text:'Direkt und offen — ich stelle mich dem Problem',       tags:['Krieger','Paladin'] },
        { text:'Mit Klugheit und Planung',                              tags:['Magier','Waldläufer'] },
        { text:'Durch Vermittlung und Diplomatie',                      tags:['Barde','Kleriker'] },
        { text:'Ich beobachte lieber erst, bevor ich handle',           tags:['Schurke','Waldläufer'] },
      ]},
      { frage:'Was treibt deinen Charakter an?', optionen:[
        { text:'Freiheit und Abenteuer',                                tags:['Barbar','Waldläufer'] },
        { text:'Wissen und Verständnis',                                tags:['Magier','Druide'] },
        { text:'Schutz der Schwachen',                                  tags:['Paladin','Kleriker'] },
        { text:'Ruhm und Anerkennung',                                  tags:['Barde','Kämpfer'] },
      ]},
      { frage:'Wie nutzt dein Charakter seinen Flug?', optionen:[
        { text:'Als Waffe — ich greife von oben an',                    tags:['Kämpfer','Barbar'] },
        { text:'Als Flucht und Überraschung',                           tags:['Schurke','Waldläufer'] },
        { text:'Um Verbündete zu unterstützen',                         tags:['Kleriker','Barde'] },
        { text:'Um alles zu überblicken und zu planen',                 tags:['Magier','Waldläufer'] },
      ]},
      { frage:'Welche Verbindung hat dein Charakter zu den Windherzögen?', optionen:[
        { text:'Tiefe spirituelle Verbindung',                          tags:['Kleriker','Druide'] },
        { text:'Neugierig, aber skeptisch',                             tags:['Magier','Schurke'] },
        { text:'Sie sind Legende — ich will sie kennenlernen',          tags:['Barde','Waldläufer'] },
        { text:'Ihre Macht interessiert mich mehr als ihre Geschichte', tags:['Hexenmeister','Zauberer'] },
      ]},
    ],
    klassen: {
      'Krieger':'Du kämpfst mit Präzision und Ausdauer. Deine Krallen sind deine verlässlichste Waffe.',
      'Paladin':'Dein Schwur trägt dich höher als jeder Wind. Du bist Schutzschild und Schwert zugleich.',
      'Magier':'Der Himmel ist nicht Grenze, sondern Perspektive. Du siehst Muster, wo andere nur Chaos sehen.',
      'Waldläufer':'Du kennst jeden Luftstrom, jede Thermik. Die Wildnis ist dein Zuhause — von oben und unten.',
      'Barde':'Deine Stimme trägt weiter als der Wind. Du sammelst Geschichten so wie andere Federn.',
      'Kleriker':'Die Windherzöge haben dich nicht vergessen. Ihre Stimme spricht durch dich.',
      'Schurke':'Du bist da, bevor dein Feind dich sieht. Und weg, bevor er begreift, was passiert ist.',
      'Barbar':'Die Raserei trägt dich höher als Flügel. Im Kampf bist du der Sturm selbst.',
      'Druide':'Die Elementarebene der Luft ist nicht fern — sie lebt in dir.',
      'Hexenmeister':'Dein Pakt verleiht dir Macht, die über Wind und Schwinge hinausgeht.',
      'Zauberer':'Magie fließt durch dein Blut. Jede Feder leuchtet, wenn du sie entfesselst.',
      'Kämpfer':'Technik und Disziplin. Du hast gelernt, deinen Flug als taktischen Vorteil zu nutzen.',
    },
  },
  statblock: {
    features: [
      { name:'Kreaturtyp',   text:'Humanoider.' },
      { name:'Größe',        text:'Aarakocra sind im Durchschnitt 150 cm groß. Deine Größenkategorie ist mittelgroß.' },
      { name:'Flug',         text:'Deine Flugbewegungsrate entspricht deiner Schrittbewegungsrate. Du kannst die Flugbewegungsrate nicht benutzen, wenn du mittelschwere oder schwere Rüstung trägst.' },
      { name:'Krallen',      text:'Du hast Krallen, mit denen du waffenlose Angriffe ausführen kannst. Treffst du, bewirkt der Treffer 1W6 + Stärkemodifikator an Hiebschaden.' },
      { name:'Windrufer',    text:'Ab der 3. Stufe kannst du den Zauber Windstoß wirken, ohne Materialkomponenten. Einmal pro langer Rast. Dein Attribut zum Wirken ist Intelligenz, Weisheit oder Charisma — wähle beim Erwerb.' },
      { name:'Angeborenes Talent', text:null, talente:['Wächter der Winde','Aarakocra-Elementarmagie','Kormorani'] },
    ],
  },
},

// ══════════════════════════════════════════════════════════════════════
// AASIMAR — vollständige Daten
// ══════════════════════════════════════════════════════════════════════
'Aasimar': {
  name: 'Aasimar', accent: '#c8a84a',
  subtitle: 'Kinder des Lichts · Gesandte der Götter',
  tags: ['Humanoid','Mittelgroß','9 m Bewegung','Dunkelsicht','Meistens Gut'],
  headerImage: null, // z.B. 'assets/images/races/banner/aasimar.png'
  lore: {
    intro: [
      'Ob sie von celestischen Wesen abstammen oder mit göttlicher Macht ausgestattet sind — Aasimar sind Sterbliche, die in ihren Seelen einen Funken der Oberen Ebenen tragen. Diese können sie nutzen, um Licht zu erzeugen, Wunden zu heilen und den Zorn der Götter zu entfesseln.',
      'Aasimar können aus jeder sterblichen Bevölkerung hervorgehen. Sie sehen ihren Eltern ähnlich, können jedoch älter werden und weisen oft äußere Merkmale auf, die auf ihr göttliches Erbe schließen lassen. Diese Merkmale sind häufig zunächst unauffällig. Wenn die Aasimar ihre celestische Natur zeigen können, treten sie umso deutlicher zutage.',
    ],
    gesellschaft: [
      'Aasimar wachsen meist unter anderen Völkern auf — sie haben keine eigene Kultur oder Heimat. Ihre Identität wird durch die Spannung zwischen ihrer sterblichen Herkunft und ihrer göttlichen Natur geprägt. Manche umarmen ihr Erbe, andere versuchen es zu verbergen.',
      'Viele Aasimar berichten von einem göttlichen Beschützer — einem celestischen Wesen, das ihnen in Träumen erscheint und sie leitet. Dieser Beschützer gibt keine direkten Befehle, sondern spricht in Bildern und Gefühlen.',
      'In Meruria sind Aasimar selten genug, um Aufmerksamkeit zu erregen, aber häufig genug, um nicht als Mysterium zu gelten. Manche werden als Propheten oder Heiler verehrt — andere misstrauisch beäugt.',
    ],
  },
  specialSection: {
    type: 'traitRoller',
    label: 'Celestische Merkmale',
    beschreibung: 'Lass dir die körperlichen Merkmale deines Aasimar-Charakters auswürfeln.',
    merkmale: [
      'Metallische, weiße oder kohlschwarze Sommersprossen',
      'Metallische, leuchtende oder dunkle Augen',
      'Haar von intensiver Farbe',
      'Ungewöhnlicher Farbton im Schatten',
      'Geisterhafter Heiligenschein',
      'Regenbogenfarben, die auf der Haut leuchten',
    ],
  },
  charakterGenerator: {
    felder: [
      { label:'Geschlecht',    type:'choice', optionen:['männlich','weiblich'] },
      { label:'Alter',         type:'range',  min:18, max:157, suffix:' Jahre' },
      { label:'Augenfarbe',    type:'table',  optionen:['leuchtend blau','golden','silbern','violett','perlweiß','tiefschwarz'] },
      { label:'Hautfarbe',     type:'table',  optionen:['hell mit Goldschimmer','dunkel mit Silberglanz','blass mit Perlmutt','bronzefarben','obsidianfarben','opalschimmernd'] },
      { label:'Haarfarbe',     type:'table',  optionen:['weißblond','silbern','goldblond','schwarz mit Glanz','leuchtend kupfer','tintenschwarz'] },
      { label:'Celestisch. Merkmal', type:'table', optionen:['Metallische Sommersprossen','Leuchtende Augen','Intensives Haar','Farbton im Schatten','Geisterhafter Heiligenschein','Regenbogenfarben auf der Haut'] },
      { label:'Offenbarung',   type:'table',  optionen:['Gleißende Seele','Gleißendes Verzehren','Nekrotische Spukgestalt'] },
    ],
  },
  beziehungen: [
    { volk:'Menschen',  relation:'Ehrfurcht',   text:'Viele Menschen sehen in Aasimar Gesandte der Götter. Das bringt Erwartungen mit sich, die manchem Aasimar schwer werden.' },
    { volk:'Elfen',     relation:'Neugier',     text:'Elfen interessiert die Frage, ob das celestische Erbe eines Aasimar über den Tod hinaus wirkt. Philosophische Gespräche sind garantiert.' },
    { volk:'Zwerge',    relation:'Respekt',     text:'Zwerge respektieren Stärke — und ein Aasimar, der kämpft oder heilt, verdient sich diesen Respekt schnell.' },
    { volk:'Tieflinge', relation:'Ambivalenz',  text:'Die Beziehung zwischen Aasimar und Tieflinge ist komplex: Beide tragen ein übernatürliches Erbe, aber in entgegengesetzte Richtungen.' },
    { volk:'Kleriker',  relation:'Verbundenheit',text:'Kleriker jeder Gottheit fühlen eine natürliche Verbindung zu Aasimar — unabhängig davon, welcher Gottheit der Aasimar dient.' },
    { volk:'Druiden',   relation:'Skepsis',     text:'Das Celestische ist weit vom Natürlichen entfernt. Druiden sind neugierig, aber vorsichtig.' },
  ],
  bekannte: [
    { name:'— Unbekannt —', rolle:'Name noch nicht festgelegt', beschreibung:'Dieser Eintrag ist für einen bekannten Aasimar in Meruria reserviert.' },
    { name:'— Unbekannt —', rolle:'Name noch nicht festgelegt', beschreibung:'Dieser Eintrag ist für einen bekannten Aasimar in Meruria reserviert.' },
    { name:'— Unbekannt —', rolle:'Name noch nicht festgelegt', beschreibung:'Dieser Eintrag ist für einen bekannten Aasimar in Meruria reserviert.' },
  ],
  radar: { labels:['Mobilität','Kampf','Magie','Soziales','Überleben','Weisheit'], values:[50,58,82,88,60,75] },
  quiz: {
    steps: [
      { frage:'Wie geht dein Charakter mit seiner celestischen Natur um?', optionen:[
        { text:'Ich umarme sie — sie ist meine Stärke',                     tags:['Paladin','Kleriker'] },
        { text:'Ich nutze sie, aber halte sie verborgen',                    tags:['Schurke','Hexenmeister'] },
        { text:'Ich studiere sie — ich will verstehen, was ich bin',         tags:['Magier','Zauberer'] },
        { text:'Sie ist einfach da — ich denke nicht viel darüber nach',     tags:['Kämpfer','Waldläufer'] },
      ]},
      { frage:'Was bedeutet dein göttlicher Beschützer für dich?', optionen:[
        { text:'Eine Führung, der ich folge',                                tags:['Kleriker','Paladin'] },
        { text:'Eine Last, die ich trage',                                   tags:['Hexenmeister','Schurke'] },
        { text:'Eine Inspiration für meine Kunst und Worte',                 tags:['Barde','Zauberer'] },
        { text:'Eine Stimme, die ich manchmal höre — manchmal nicht',        tags:['Druide','Waldläufer'] },
      ]},
      { frage:'Wie setzt dein Charakter seine celestische Offenbarung ein?', optionen:[
        { text:'Als Waffe — gleißendes Licht gegen meine Feinde',            tags:['Paladin','Kämpfer'] },
        { text:'Als Schutz — um andere zu bewahren',                         tags:['Kleriker','Paladin'] },
        { text:'Als Furcht — nekrotische Dunkelheit, die erschreckt',        tags:['Hexenmeister','Schurke'] },
        { text:'Selten — nur wenn es wirklich nötig ist',                    tags:['Magier','Waldläufer'] },
      ]},
      { frage:'Welche Rolle spielt dein Charakter in einer Gruppe?', optionen:[
        { text:'Ich führe — meine Aura gibt anderen Stärke',                 tags:['Paladin','Barde'] },
        { text:'Ich heile und schütze aus dem Hintergrund',                  tags:['Kleriker','Druide'] },
        { text:'Ich handle im Verborgenen und treffe präzise',               tags:['Schurke','Waldläufer'] },
        { text:'Ich entscheide die Situation mit roher Macht',               tags:['Magier','Zauberer'] },
      ]},
    ],
    klassen: {
      'Paladin':'Dein Schwur und dein celestisches Blut sind eins. Du bist nicht nur ein Krieger — du bist ein Zeichen.',
      'Kleriker':'Du bist der Kanal, durch den Göttliches in die Welt fließt. Heilung ist deine Sprache, Licht deine Waffe.',
      'Schurke':'Celestisches Erbe trifft Schatten. Du weißt, dass Licht am hellsten leuchtet, wenn es aus der Dunkelheit kommt.',
      'Hexenmeister':'Dein Pakt ergänzt dein Erbe — oder widerspricht ihm. Die Spannung macht dich gefährlich.',
      'Magier':'Du willst verstehen, was du bist. Die Antworten liegen in den Büchern — und in dir selbst.',
      'Zauberer':'Die celestische Energie in deinem Blut und die arkane Kraft in deinen Adern verstärken sich gegenseitig.',
      'Kämpfer':'Du kämpfst. Das celestische Erbe ist ein Bonus — aber deine Disziplin ist die echte Stärke.',
      'Waldläufer':'Du schützt die Grenze zwischen Welten — sowohl die äußere als auch die in dir.',
      'Barde':'Deine Stimme trägt etwas Übernatürliches. Wenn du sprichst, hören Menschen wirklich zu.',
      'Druide':'Das Natürliche und das Celestische sind nicht so verschieden, wie man denkt. Du lebst an der Kreuzung.',
    },
  },
  statblock: {
    features: [
      { name:'Kreaturentyp',         text:'Humanoider.' },
      { name:'Größe',                text:'Aasimar haben die normale Größe ihres Volkes. Deine Größenkategorie ist mittelgroß.' },
      { name:'Celestische Resistenz',text:'Du bist gegen nekrotischen und gleißenden Schaden resistent.' },
      { name:'Dunkelsicht',          text:'Im Radius von 18 Metern kannst du in dämmrigem Licht wie in hellem Licht sehen.' },
      { name:'Heilende Hände',       text:'Als Aktion kannst du eine Kreatur berühren und Würfel in Höhe deines Übungsbonus werfen (W4). Die Kreatur gewinnt Trefferpunkte zurück. Einmal pro langer Rast.' },
      { name:'Lichtträger',          text:'Du kennst den Zaubertrick Licht. Dein Attribut zum Zauberwirken ist Charisma.' },
      { name:'Celestische Offenbarung (ab Stufe 3)', text:'Wähle eine Option. Als Bonusaktion entfesselst du die celestische Energie für bis zu 1 Minute.', subfeatures:[
        { name:'Gleißende Seele',        text:'Geisterflügel wachsen dir. Du erhältst Flugbewegungsrate und kannst einmal pro Zug zusätzlich gleißenden Schaden (= Übungsbonus) wirken.' },
        { name:'Gleißendes Verzehren',   text:'Intensives Licht aus Augen und Mund. Erhellt 3 m. Kreaturen in 3 m erleiden am Ende jedes deiner Züge gleißenden Schaden (= Übungsbonus).' },
        { name:'Nekrotische Spukgestalt',text:'Augen werden zu Tümpeln der Finsternis. Nahe Feinde müssen Charismarettungswurf bestehen oder sind verängstigt. Zusätzlich nekrotischer Schaden (= Übungsbonus).' },
      ]},
      { name:'Angeborenes Talent', text:null, talente:['Göttlicher Krieger','Verbesserte Celestische Offenbarung','Göttliche Gesundheit'] },
    ],
  },
},

// ══════════════════════════════════════════════════════════════════════
// DHAMPIRE — vollständige Daten
// ══════════════════════════════════════════════════════════════════════
'Dhampire': {
  name: 'Dhampire', accent: '#c0394f',
  subtitle: 'Kinder der Dunkelheit · Zwischen Leben und Tod',
  tags: ['Humanoid','Mittel oder Klein','12 m Bewegung','Dunkelsicht','Chaotisch-Neutral'],
  headerImage: null, // z.B. 'assets/images/races/banner/dhampire.png'
  lore: {
    intro: [
      'Dhampire sind zwischen der Welt der Lebenden und der Welt der Toten gefangen. Sie halten zwar an ihrem Leben fest, werden aber doch endlos von üblen Gelüsten geplagt. Ihre Bande mit Untoten gewähren ihnen einen Hauch der Fähigkeiten von Vampiren.',
      'Mit den besonderen Einsichten, die Untote in die Natur haben, werden viele Dhampire Abenteurer und Monsterjäger. Ihre Gründe sind dabei oft sehr persönlich. Manche suchen die Gefahr und stellen sich die Monster als Personifizierung ihrer eigenen Gelüste vor.',
    ],
    gesellschaft: [
      'Dhampire haben keine eigene Kultur — sie entstammen allen Völkern und Regionen. Was sie verbindet, ist nicht Herkunft oder Tradition, sondern die gemeinsame Last des Hungers und die Frage, wie weit man ihm nachgeben darf.',
      'Die meisten Dhampire lernen früh, ihren wahren Charakter zu verbergen. Nicht weil sie sich schämen — sondern weil die Welt der Lebenden selten bereit ist, etwas zu akzeptieren, das gleichzeitig zu ihr gehört und außerhalb von ihr steht.',
      'In Meruria sind Dhampire furchterregend und faszinierend zugleich. Gerüchte, Legenden und Halbwahrheiten umgeben sie. Mancher Dhampir nutzt diese Mystik bewusst — andere bekämpfen sie ihr ganzes Leben lang.',
    ],
  },
  specialSection: {
    type: 'tables',
    label: 'Dhampir-Gelüste & Ursprünge',
    beschreibung: 'Jeder Dhampir kennt einen Durst, den nur die Lebenden stillen können. Und jeder kam auf seine eigene Weise zu dieser Natur. Würfle oder wähle aus den Tabellen.',
    tabellen: [
      {
        name: 'Dhampir-Gelüste',
        eintraege: ['Blut','Rohes Fleisch','Rückenmark','Hirnflüssigkeit','Psychische Energie','Träume','Lebensenergie'],
      },
      {
        name: 'Dhampir-Ursprünge',
        eintraege: [
          'Du bist die Reinkarnation eines Ahnen, der ein vampirischer Tyrann war.',
          'Dein Pakt mit einer räuberischen Gottheit bewirkt, dass du deren Hunger teilst.',
          'Du hast den Angriff eines Vampirs überlebt, wurdest aber für immer verwandelt.',
          'Ein Parasit lebt in dir. Du genießt seinen Hunger.',
          'Deine Transformation in ein unsterbliches Wesen wurde von einer Tragödie unterbrochen.',
          'Du bist die verkleinerte Form eines außerweltlichen Wesens. Hunger beschleunigt deine Erneuerung.',
          'Einer deiner Eltern war ein Vampir.',
          'Ein radikales Experiment hat deinen Körper verändert. Seitdem brauchst du die Lebenssäfte anderer.',
        ],
      },
    ],
  },
  charakterGenerator: {
    felder: [
      { label:'Geschlecht', type:'choice', optionen:['männlich','weiblich'] },
      { label:'Augenfarbe', type:'table',  optionen:['blutrot','tiefschwarz','orange glühend','silbern','violett'] },
      { label:'Hautfarbe',  type:'table',  optionen:['aschfahl','totenblass','alabasterweiß','blassgrau','porzellanweiß'] },
      { label:'Gelüst',     type:'table',  optionen:['Blut','Rohes Fleisch','Rückenmark','Hirnflüssigkeit','Psychische Energie','Träume','Lebensenergie'] },
      { label:'Ursprung',   type:'table',  optionen:['Reinkarnation','Pakt','Vampirangriff','Parasit','Unterbrochene Transformation','Außerweltliches Wesen','Vampirelternteil','Experiment'] },
      { label:'Talent',     type:'table',  optionen:['Fledermausflug','Traumfresser','Vampirisches Charisma'] },
    ],
  },
  beziehungen: [
    { volk:'Menschen',   relation:'Furcht',      text:'Menschen wissen genug über Vampire, um zu wissen, dass ein Dhampir gefährlich sein könnte. Und nicht genug, um zu verstehen, dass er es vielleicht nicht ist.' },
    { volk:'Elfen',      relation:'Distanz',     text:'Elfen, die Jahrhunderte leben, haben Dhampire kommen und gehen sehen. Ihre Unberechenbarkeit beunruhigt sie.' },
    { volk:'Zwerge',     relation:'Pragmatismus',text:'Ein Dhampir, der kämpft und seinen Teil beiträgt, ist ein nützlicher Verbündeter. Zwerge urteilen nach Taten, nicht nach Natur.' },
    { volk:'Tieflinge',  relation:'Empathie',    text:'Tieflinge kennen das Stigma. Sie urteilen nicht über die dunkle Natur eines anderen.' },
    { volk:'Kleriker',   relation:'Ambivalenz',  text:'Ist ein Dhampir gesegnet oder verflucht? Diese Frage beschäftigt Kleriker mehr als den Dhampir selbst.' },
    { volk:'Nekromanten',relation:'Interesse',   text:'Nekromanten sehen in Dhampiren lebende Beweise ihrer Theorien. Das Interesse ist gegenseitig — und nicht immer angenehm.' },
  ],
  bekannte: [
    { name:'— Unbekannt —', rolle:'Name noch nicht festgelegt', beschreibung:'Dieser Eintrag ist für einen bekannten Dhampir in Meruria reserviert.' },
    { name:'— Unbekannt —', rolle:'Name noch nicht festgelegt', beschreibung:'Dieser Eintrag ist für einen bekannten Dhampir in Meruria reserviert.' },
    { name:'— Unbekannt —', rolle:'Name noch nicht festgelegt', beschreibung:'Dieser Eintrag ist für einen bekannten Dhampir in Meruria reserviert.' },
  ],
  radar: { labels:['Mobilität','Kampf','Magie','Soziales','Überleben','Weisheit'], values:[88,78,45,55,92,50] },
  quiz: {
    steps: [
      { frage:'Wie geht dein Charakter mit seinem Hunger um?', optionen:[
        { text:'Ich kontrolliere ihn eisern — er beherrscht mich nicht', tags:['Paladin','Kämpfer'] },
        { text:'Ich nutze ihn als Waffe — Hunger macht mich schärfer',   tags:['Schurke','Barbar'] },
        { text:'Ich suche Wege, ihn zu verstehen und zu zähmen',         tags:['Magier','Druide'] },
        { text:'Er ist eine Last, die ich schweigend trage',              tags:['Kleriker','Waldläufer'] },
      ]},
      { frage:'Was war der Auslöser für deine Transformation?', optionen:[
        { text:'Ein Angriff oder eine Begegnung mit Untoten',            tags:['Krieger','Schurke'] },
        { text:'Ein Pakt oder ein Experiment',                           tags:['Hexenmeister','Magier'] },
        { text:'Geburt oder Abstammung',                                 tags:['Zauberer','Barde'] },
        { text:'Eine Tragödie, die alles verändert hat',                 tags:['Paladin','Kleriker'] },
      ]},
      { frage:'Wie bewegt sich dein Charakter durch die Welt?', optionen:[
        { text:'Im Verborgenen — Schatten sind mein Zuhause',            tags:['Schurke','Hexenmeister'] },
        { text:'Offen und direkt — ich habe nichts zu verbergen',        tags:['Paladin','Kämpfer'] },
        { text:'Als Beobachter — ich lerne zuerst, dann handle ich',     tags:['Waldläufer','Magier'] },
        { text:'Wo die Musik spielt — ich lebe in jedem Moment',         tags:['Barde','Zauberer'] },
      ]},
      { frage:'Was ist dein größtes Ziel?', optionen:[
        { text:'Meinen Fluch zu brechen oder zu beherrschen',            tags:['Paladin','Magier'] },
        { text:'Rache an denen, die mich zu dem gemacht haben, was ich bin', tags:['Krieger','Schurke'] },
        { text:'Meinen Hunger stillen und in Ruhe leben',                tags:['Druide','Waldläufer'] },
        { text:'Die Grenzen zwischen Leben und Tod verstehen',           tags:['Hexenmeister','Zauberer'] },
      ]},
    ],
    klassen: {
      'Paladin':'Dein Schwur ist das Einzige, das dich von deiner dunklen Natur trennt. Oder hast du sie akzeptiert — als Werkzeug des Lichts?',
      'Kämpfer':'Du kämpfst mit vampirischer Effizienz. Dein Körper ist eine Waffe, dein Hunger ein Treibstoff.',
      'Schurke':'Schatten, Stille, Fangzähne. Du warst schon immer jemand, der von hinten zuschlägt.',
      'Barbar':'Im Kampf entfesselst du die untote Kraft in dir. Der Hunger wird zur Raserei.',
      'Magier':'Du studierst deine eigene Natur wie ein Experiment. Was bist du wirklich?',
      'Druide':'Selbst die Natur hat ihre dunkle Seite. Du bist der Beweis.',
      'Krieger':'Disziplin, Stärke, Kontrolle. Du hast gelernt, deinen Hunger in Kampfkraft zu verwandeln.',
      'Kleriker':'Du dienst einem Gott — aber welchem? Und wie erklärt man ihm den Hunger?',
      'Hexenmeister':'Dein Pakt und deine vampirische Natur ergänzen sich auf beunruhigende Weise.',
      'Waldläufer':'Du jagst, weil du weißt, wie es ist, gejagt zu werden.',
      'Barde':'Du hast Jahrhunderte, um Lieder zu lernen. Und Hunger macht kreativ.',
      'Zauberer':'Die Magie in deinem Blut und die Dunkelheit in deiner Seele sind zwei Seiten derselben Münze.',
    },
  },
  statblock: {
    features: [
      { name:'Kreaturentyp', text:'Humanoider.' },
      { name:'Größe',        text:'Deine Größenkategorie ist mittelgroß oder klein. Du wählst die Größe, wenn du dieses Volk wählst.' },
      { name:'Dunkelsicht',  text:'Im Radius von 18 Metern kannst du in dämmrigem Licht wie in hellem Licht sehen.' },
      { name:'Erbe',         text:'Du behältst alle Fertigkeiten, in denen deine vorherige Rasse geübt ist, und besondere Bewegungsraten.' },
      { name:'Untote Natur', text:'Du brauchst nicht zu atmen.' },
      { name:'Spinnenklettern',text:'Deine Kletterbewegungsrate ist gleich deiner Schrittbewegungsrate. Ab Stufe 3 kannst du kopfüber an Decken und Wänden klettern.' },
      { name:'Vampirbiss',   text:'Deine Fangzähne sind eine natürliche Waffe (einfach, Nahkampf). Konstitutionsmodifikator statt Stärke. Treffer: 1W4 Stichschaden. Bei ≤ halben TP: Vorteil auf Angriffswürfe. Trifft du eine lebende Kreatur: gewinne TP oder erhalte Bonus auf nächsten Wurf.' },
      { name:'Angeborenes Talent', text:null, talente:['Fledermausflug','Traumfresser','Vampirisches Charisma'] },
    ],
  },
},

// ══════════════════════════════════════════════════════════════════════
// PLACEHOLDER-RASSEN — alle übrigen 76 Rassen
// ══════════════════════════════════════════════════════════════════════

'Autognome':                { name:'Autognome',                accent:'#8090a0', subtitle:'Selbsterschaffene Wesen · Meister ihrer eigenen Existenz', tags:['Konstrukt','Klein','9 m Bewegung','Maschinenkörper','Neutral'],                  headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Bearfolk':                 { name:'Bearfolk',                 accent:'#8b5e3c', subtitle:'Kinder der Natur · Träger des Bärenmutes',                tags:['Humanoid','Groß','9 m Bewegung','Natursinn','Neutral'],                            headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Cnidaran':                 { name:'Cnidaran',                 accent:'#40b8e0', subtitle:'Wesen des Tiefsees · Träger des Giftstachels',            tags:['Monstrosity','Mittelgroß','Schwimmen','Giftangriff','Neutral'],                    headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Darakhul':                 { name:'Darakhul',                 accent:'#6040a0', subtitle:'Untote mit Bewusstsein · Träger des Todes',               tags:['Untoter','Mittelgroß','9 m Bewegung','Dunkelsicht','Chaotisch Böse'],            headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Chromatische Drachenblütige': { name:'Chromatische Drachenblütige', accent:'#c84030', subtitle:'Erben der Chromatischen · Kinder des Bösen',      tags:['Humanoid','Mittelgroß','9 m Bewegung','Atemwaffe','Flexibel'],                    headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Edelstein Drachenblütige': { name:'Edelstein Drachenblütige', accent:'#9060e0', subtitle:'Erben der Edelstein · Kinder der Psionik',               tags:['Humanoid','Mittelgroß','9 m Bewegung','Psionik','Neutral'],                       headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Metallische Drachenblütige':{ name:'Metallische Drachenblütige',accent:'#d4af50',subtitle:'Erben der Metallischen · Kinder des Guten',             tags:['Humanoid','Mittelgroß','9 m Bewegung','Atemwaffe','Meistens Gut'],               headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Dunkelelfen':              { name:'Dunkelelfen',              accent:'#b040e0', subtitle:'Verbannte des Lichts · Kinder der Unterwelt',             tags:['Humanoid','Mittelgroß','9 m Bewegung','Überl. Dunkelsicht','Chaotisch Böse'],   headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Echsenmenschen':           { name:'Echsenmenschen',           accent:'#5ab878', subtitle:'Erben der Urzeit · Krieger des Sumpfes',                  tags:['Humanoid','Mittelgroß','9 m Bewegung','Schwimmen','Neutral'],                     headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Eladrin':                  { name:'Eladrin',                  accent:'#50d0f0', subtitle:'Kinder der Feywild · Wesen des ewigen Wandels',           tags:['Humanoid','Mittelgroß','9 m Bewegung','Feensprung','Flexibel'],                   headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Erd-Genasi':               { name:'Erd-Genasi',               accent:'#c09050', subtitle:'Kinder der Erde · Träger des lebendigen Steins',          tags:['Humanoid','Mittelgroß','9 m Bewegung','Erdgang','Neutral'],                       headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Erina':                    { name:'Erina',                    accent:'#a87060', subtitle:'Stachelbewehrte Wanderer · Kinder des Waldes',            tags:['Humanoid','Klein','7,5 m Bewegung','Stachelrüstung','Neutral Gut'],             headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Feen':                     { name:'Feen',                     accent:'#e870d8', subtitle:'Geister des Waldes · Hüter des Lichts',                   tags:['Fee','Klein','9 m Bewegung','Magie','Chaotisch Gut'],                             headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Felsengnome':              { name:'Felsengnome',              accent:'#8090a0', subtitle:'Erfindergeister · Meister von Mechanik und Illusion',     tags:['Humanoid','Klein','9 m Bewegung','Illusion','Meistens Gut'],                     headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Feuer-Genasi':             { name:'Feuer-Genasi',             accent:'#e05020', subtitle:'Kinder des Feuers · Träger der ewigen Flamme',            tags:['Humanoid','Mittelgroß','9 m Bewegung','Feuerresistenz','Neutral'],               headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Firbolg':                  { name:'Firbolg',                  accent:'#72a860', subtitle:'Riesen des Waldes · Wächter der Natur',                   tags:['Humanoid','Groß','9 m Bewegung','Naturmagie','Neutral Gut'],                     headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Gebirgszwerge':            { name:'Gebirgszwerge',            accent:'#9890a8', subtitle:'Krieger des Steins · Hüter der Bergfestungen',            tags:['Humanoid','Mittelgroß','7,5 m Bewegung','Rüstungskundigkeit','Meistens Gut'],   headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Geppettin':                { name:'Geppettin',                accent:'#b0a060', subtitle:'Lebendige Puppen · Kinder des Handwerks',                 tags:['Konstrukt','Klein','9 m Bewegung','Unsterblicher Körper','Neutral'],            headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Giff':                     { name:'Giff',                     accent:'#8890a0', subtitle:'Hippomorphe Soldaten · Meister des Schwarzpulvers',       tags:['Humanoid','Groß','9 m Bewegung','Schusswaffe','Meistens Neutral'],              headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Githyanki':                { name:'Githyanki',                accent:'#d0b030', subtitle:'Krieger der Astralmeere · Jäger der Gedankenschnitter',   tags:['Humanoid','Mittelgroß','9 m Bewegung','Psionik','Meistens Böse'],              headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Githzerai':                { name:'Githzerai',                accent:'#6090c8', subtitle:'Mönche der Leere · Meister des eigenen Geistes',          tags:['Humanoid','Mittelgroß','9 m Bewegung','Psionik','Meistens Neutral'],            headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Gnoll':                    { name:'Gnoll',                    accent:'#a07040', subtitle:'Kinder der Hyäne · Diener der Blutgöttin',                tags:['Humanoid','Mittelgroß','9 m Bewegung','Aasfressen','Chaotisch Böse'],           headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Goblins':                  { name:'Goblins',                  accent:'#78b828', subtitle:'Überlebenskünstler · Kinder des Chaos',                  tags:['Humanoid','Klein','9 m Bewegung','Dunkelsicht','Neutral Böse'],                 headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Goliaths':                 { name:'Goliaths',                 accent:'#9898b0', subtitle:'Kinder des Berges · Krieger der Hochlande',               tags:['Humanoid','Mittelgroß','9 m Bewegung','Bergsteigen','Neutral'],                  headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Grauzwerge':               { name:'Grauzwerge',               accent:'#7060a8', subtitle:'Exilanten der Unterwelt · Düstere Handwerker',            tags:['Humanoid','Mittelgroß','7,5 m Bewegung','Überl. Dunkelsicht','Meistens Böse'], headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Grottenschrate':           { name:'Grottenschrate',           accent:'#907050', subtitle:'Unterirdische Jäger · Meister der Schatten',              tags:['Humanoid','Klein','9 m Bewegung','Dunkelsicht','Böse'],                         headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Grung':                    { name:'Grung',                    accent:'#50c040', subtitle:'Leuchtfarbige Jäger · Giftige Waldbewohner',              tags:['Humanoid','Klein','7,5 m Bewegung','Giftkörper','Neutral Böse'],               headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Hadozee':                  { name:'Hadozee',                  accent:'#907850', subtitle:'Segelflieger der Wälder · Affenähnliche Abenteurer',      tags:['Humanoid','Mittelgroß','9 m Bewegung','Gleitflug','Neutral'],                   headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Halbelfen':                { name:'Halbelfen',                accent:'#98d080', subtitle:'Zwischen den Welten · Träger zweier Erbe',                tags:['Humanoid','Mittelgroß','9 m Bewegung','Dunkelsicht','Flexibel'],                headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Halborks':                 { name:'Halborks',                 accent:'#70a840', subtitle:'Kinder des Krieges · Gezeichnete des Blutes',             tags:['Humanoid','Mittelgroß','9 m Bewegung','Dunkelsicht','Flexibel'],                headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Harengons':                { name:'Harengons',                accent:'#e090a0', subtitle:'Hasenartige Wanderer · Flinke Glücksbringer',             tags:['Humanoid','Mittelgroß','9 m Bewegung','Sprung','Neutral'],                      headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Hexblute':                 { name:'Hexblute',                 accent:'#c050c8', subtitle:'Träger dunkler Pakte · Kinder der Hexen',                 tags:['Humanoid','Mittelgroß','9 m Bewegung','Widerstand','Flexibel'],                 headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Hobgoblins':               { name:'Hobgoblins',               accent:'#c04040', subtitle:'Krieger des Blutvolks · Disziplinierte Soldaten',         tags:['Humanoid','Mittelgroß','9 m Bewegung','Dunkelsicht','Meistens Böse'],          headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Hochelfen':                { name:'Hochelfen',                accent:'#80c8a0', subtitle:'Hüter alten Wissens · Meister der Arkankunst',            tags:['Humanoid','Mittelgroß','9 m Bewegung','Magie','Meistens Gut'],                 headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Hügelzwerge':              { name:'Hügelzwerge',              accent:'#b07850', subtitle:'Gütige Handwerker · Hüter des Heilwissens',               tags:['Humanoid','Mittelgroß','7,5 m Bewegung','Heilkunde','Meistens Gut'],           headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Kenku':                    { name:'Kenku',                    accent:'#606878', subtitle:'Diebe des Himmels · Vogelwesen ohne Flug',                tags:['Humanoid','Mittelgroß','9 m Bewegung','Mimikry','Chaotisch-Neutral'],          headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Kobolde':                  { name:'Kobolde',                  accent:'#c83030', subtitle:'Kinder des Drachens · Hüter der Tunnel',                  tags:['Humanoid','Klein','9 m Bewegung','Dunkelsicht','Meistens Böse'],               headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Leichtfüße':               { name:'Leichtfüße',               accent:'#e8a830', subtitle:'Wandervolk der Straßen · Meister des Versteckens',        tags:['Humanoid','Klein','7,5 m Bewegung','Tapferkeit','Meistens Gut'],              headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Leonin':                   { name:'Leonin',                   accent:'#d0a840', subtitle:'Kinder der Savanne · Krieger mit Löwenmut',               tags:['Humanoid','Mittelgroß','9,5 m Bewegung','Löwenbrüllen','Meistens Gut'],       headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Loxodon':                  { name:'Loxodon',                  accent:'#9090a8', subtitle:'Weisheitshüter mit Rüssel · Gedächtnisträger der Ewigkeit',tags:['Humanoid','Groß','9 m Bewegung','Rüsselsinn','Meistens Gut'],                headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Locathah':                 { name:'Locathah',                 accent:'#3090b0', subtitle:'Wiedergeborene des Meeres · Krieger der Strömungen',      tags:['Humanoid','Mittelgroß','Schwimmen','Wiedergeburt','Neutral'],                  headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Lotol':                    { name:'Lotol',                    accent:'#60a880', subtitle:'Geheimnisvolle Wanderer · Kinder der Tiefe',              tags:['Humanoid','Mittelgroß','9 m Bewegung','Dunkelsicht','Neutral'],                 headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Luft-Genasi':              { name:'Luft-Genasi',              accent:'#90d0e8', subtitle:'Kinder des Windes · Träger der freien Lüfte',             tags:['Humanoid','Mittelgroß','9 m Bewegung','Levitation','Neutral'],                  headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Mandrake':                 { name:'Mandrake',                 accent:'#90b840', subtitle:'Tönendes Pflanzenfolk · Kinder des Waldes',               tags:['Pflanze','Klein','9 m Bewegung','Betäubungsruf','Neutral'],                    headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Meereselfen':              { name:'Meereselfen',              accent:'#1890c0', subtitle:'Kinder des Ozeans · Wächter der Tiefen',                  tags:['Humanoid','Mittelgroß','9 m Bewegung','Schwimmen','Meistens Gut'],             headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Menschen':                 { name:'Menschen',                 accent:'#c8a870', subtitle:'Herrscher der Welt · Anpassungsfähige Pioniere',          tags:['Humanoid','Mittelgroß','9 m Bewegung','Vielseitig','Flexibel'],                headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Minotauren':               { name:'Minotauren',               accent:'#b06840', subtitle:'Kinder des Labyrinths · Krieger mit Hörnern',             tags:['Humanoid','Mittelgroß','9 m Bewegung','Sturmangriff','Neutral'],               headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Mycelian':                 { name:'Mycelian',                 accent:'#c0a030', subtitle:'Hüter des Pilznetzwerks · Weise Pilzwesen',               tags:['Pflanze','Mittelgroß','9 m Bewegung','Pilznetz','Neutral'],                    headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Oozekin':                  { name:'Oozekin',                  accent:'#70c080', subtitle:'Formloser Schleimling · Anpassungskünstler der Materie',  tags:['Schlick','Mittelgroß','9 m Bewegung','Formlosigkeit','Neutral'],               headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Opteran':                  { name:'Opteran',                  accent:'#70a870', subtitle:'Geflügelte Insektenwesen · Krieger der Schwärme',         tags:['Monstrosity','Mittelgroß','9 m Bewegung','Insektenflug','Neutral'],            headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Orks':                     { name:'Orks',                     accent:'#709040', subtitle:'Kinder des Donners · Stamm der Stärke',                   tags:['Humanoid','Mittelgroß','9 m Bewegung','Ausdauer','Flexibel'],                   headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Owlin':                    { name:'Owlin',                    accent:'#a89060', subtitle:'Weise Eulenwesen · Lautlose Jäger der Nacht',             tags:['Humanoid','Mittelgroß','9 m Bewegung','Flug','Neutral'],                       headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Plasmoid':                 { name:'Plasmoid',                 accent:'#80d0c0', subtitle:'Gestaltloser Wandler · Wesen ohne feste Form',            tags:['Ooze','Mittelgroß','9 m Bewegung','Formlosigkeit','Neutral'],                  headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Ratatosk':                 { name:'Ratatosk',                 accent:'#c87840', subtitle:'Kosmische Eichhörnchenwesen · Boten zwischen den Welten', tags:['Fee','Klein','7,5 m Bewegung','Telepathie','Chaotisch Neutral'],               headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Sahuagin':                 { name:'Sahuagin',                 accent:'#2070a0', subtitle:'Haifischmensch · Teufel der Tiefsee',                     tags:['Humanoid','Mittelgroß','Schwimmen','Blutgier','Meistens Böse'],                headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Satarre':                  { name:'Satarre',                  accent:'#6040a8', subtitle:'Spinnenarachnoiden · Diener der Finsternis',              tags:['Monstrosity','Mittelgroß','9 m Bewegung','Spinnenklettern','Böse'],            headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Satyrn':                   { name:'Satyrn',                   accent:'#d0a830', subtitle:'Kinder des Festes · Wanderer zwischen Welten',            tags:['Fee','Mittelgroß','9 m Bewegung','Magieschutz','Chaotisch Neutral'],          headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Schattenfeen':             { name:'Schattenfeen',             accent:'#8070b0', subtitle:'Kinder der Schatten · Wandler des Halblichts',            tags:['Humanoid','Mittelgroß','9 m Bewegung','Dunkelsicht','Neutral'],                headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Shadow Goblin':            { name:'Shadow Goblin',            accent:'#504868', subtitle:'Schattendurchdrungene Goblins · Kinder der Dunkelheit',   tags:['Humanoid','Klein','9 m Bewegung','Überl. Dunkelsicht','Chaotisch Neutral'],  headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Stämmige':                 { name:'Stämmige',                 accent:'#c07050', subtitle:'Robuste Hüter · Wächter ihrer Gemeinschaft',              tags:['Humanoid','Klein','7,5 m Bewegung','Giftwiderstand','Meistens Neutral'],      headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Tabaxi':                   { name:'Tabaxi',                   accent:'#d89858', subtitle:'Kinder der Tigerflecken · Wanderer der Welt',             tags:['Humanoid','Mittelgroß','9 m Bewegung','Klettern','Chaotisch Neutral'],        headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Thri-Kreen':               { name:'Thri-Kreen',               accent:'#a8a840', subtitle:'Sechs-gliedrige Jäger · Nomaden der Wüste',               tags:['Monstrosity','Mittelgroß','9 m Bewegung','Dunkelsicht','Neutral'],             headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Tiefengnome':              { name:'Tiefengnome',              accent:'#7060a8', subtitle:'Graue Gnome · Kinder der tiefen Erde',                    tags:['Humanoid','Klein','9 m Bewegung','Überl. Dunkelsicht','Neutral'],             headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Tieflinge':                { name:'Tieflinge',                accent:'#c82860', subtitle:'Kinder der Hölle · Träger des Fluchs',                    tags:['Humanoid','Mittelgroß','9 m Bewegung','Dunkelsicht','Flexibel'],               headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Tortels':                  { name:'Tortels',                  accent:'#509868', subtitle:'Weise des Meeres · Wandler der Jahrtausende',             tags:['Humanoid','Mittelgroß','9 m Bewegung','Naturrüstung','Meistens Gut'],         headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Tritons':                  { name:'Tritons',                  accent:'#3098c0', subtitle:'Wächter der Tiefen · Krieger des Meeres',                 tags:['Humanoid','Mittelgroß','9 m Bewegung','Schwimmen','Meistens Gut'],            headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Umbral Human':             { name:'Umbral Human',             accent:'#606888', subtitle:'Schattengetränkte Menschen · Wandler des Halblichts',     tags:['Humanoid','Mittelgroß','9 m Bewegung','Dunkelsicht','Neutral'],               headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Waldelfen':                { name:'Waldelfen',                accent:'#60a840', subtitle:'Kinder des Waldes · Hüter der grünen Wildnis',            tags:['Humanoid','Mittelgroß','10,5 m Bewegung','Tarnung','Meistens Gut'],           headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Waldgnome':                { name:'Waldgnome',                accent:'#70a850', subtitle:'Kinder des Waldes · Freunde der kleinen Tiere',           tags:['Humanoid','Klein','9 m Bewegung','Illusion','Meistens Gut'],                  headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Wandler':                  { name:'Wandler',                  accent:'#b08030', subtitle:'Geister des Wandels · Meister der Verwandlung',           tags:['Humanoid','Mittelgroß','9 m Bewegung','Formwandel','Neutral'],                 headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Warforged':                { name:'Warforged',                accent:'#7090a8', subtitle:'Lebende Konstrukte · Krieger aus Stahl und Magie',         tags:['Humanoid','Mittelgroß','9 m Bewegung','Konstrukt','Neutral'],                  headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Wasser-Genasi':            { name:'Wasser-Genasi',            accent:'#2090c8', subtitle:'Kinder des Wassers · Träger der ewigen Wellen',           tags:['Humanoid','Mittelgroß','9 m Bewegung','Schwimmen','Neutral'],                  headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Wechselbälger':            { name:'Wechselbälger',            accent:'#a890c8', subtitle:'Meister der Täuschung · Gestaltwandler',                  tags:['Humanoid','Mittelgroß','9 m Bewegung','Gestaltenwandel','Neutral'],            headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Wiedergeborene':           { name:'Wiedergeborene',           accent:'#6878a8', subtitle:'Rückkehrer vom Tod · Träger alter Erinnerungen',          tags:['Humanoid','Mittelgroß','9 m Bewegung','Untot-Widerstand','Neutral'],          headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Yuan-ti':                  { name:'Yuan-ti',                  accent:'#60a850', subtitle:'Kinder der Schlange · Diener der Schlangengötter',        tags:['Humanoid','Mittelgroß','9 m Bewegung','Giftimmunität','Neutral Böse'],        headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },
'Zentauren':                { name:'Zentauren',                accent:'#b09040', subtitle:'Freie Krieger der Ebene · Halbtier-Halbmensch',           tags:['Fee','Groß','12 m Bewegung','Sturmangriff','Neutral'],                         headerImage: null, lore:null, bekannte:[], radar:null, quiz:null, statblock:null },

}; // end RASSEN_DETAIL_DATA
