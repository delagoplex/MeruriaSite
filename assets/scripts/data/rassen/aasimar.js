// Aasimar — Rassen-Detaildaten. Wird von /charaktererstellung/rassen-detail.html bei Bedarf geladen (siehe rassen-detail-index.js).
(window.RASSEN_DETAIL_DATA = window.RASSEN_DETAIL_DATA || {})['Aasimar'] = {
  name: 'Aasimar', accent: '#c8a84a',
  subtitle: 'Kinder des Lichts · Gesandte der Götter',
  tags: ['Humanoid','Mittelgroß','9 m Bewegung','Dunkelsicht','Meistens Gut'],
  headerImage: null, // z.B. 'assets/images/races/banner/aasimar.png'
  lebensraum: ['Aasimar tauchen überall in Meruria auf — es gibt keinen festgelegten Lebensraum.'],
  beziehungenIntro: 'Aasimar werden je nach Volk und Ort sehr unterschiedlich wahrgenommen — als Gesandte der Götter, als Kuriositäten oder als Bedrohung.',
  namenSection: {
    type: 'prose',
    label: 'Aasimar-Namen',
    absaetze: [
      'Aasimar tragen den Namen, den sie vor ihrer Verwandlung hatten — oder den Namen der jeweiligen Kultur, in der sie aufwachsen. Es gibt keinen eigenen Aasimar-Namensstil; schaue dir die Namenstabelle der jeweiligen Ursprungsrasse an.',
      'Manche Aasimar nehmen mit der Zeit einen zweiten Namen an — einen celestischen Beinamen, der ihre göttliche Natur widerspiegelt. Dieser Name ist kein offizieller Teil ihrer Identität, sondern ein innerer Name, den nur enge Vertraute kennen.',
    ],
  },
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
    introBild:        { url: null, label: 'Aasimar · Illustration', caption: 'Charakter-Illustration', position: 'right', width: 360, height: 360 },
    gesellschaftBild: { url: null, label: 'Celestisches Erbe · Illustration', caption: 'Aasimar und ihr göttlicher Beschützer', position: 'left', width: 240, height: 300 },
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
  radar: { beschreibung:'Aasimar sind sozial begabt und magisch stark — ihr celestisches Erbe macht sie zu natürlichen Anführern und Heilern.', labels:['Mobilität','Kampf','Magie','Soziales','Überleben','Weisheit'], values:[50,58,82,88,60,75] },
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
      { name:'Größenkategorie',                text:'Aasimar haben die normale Größe ihres Volkes. Deine Größenkategorie ist mittelgroß.' },
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
};
