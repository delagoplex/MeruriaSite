// Dhampire — Rassen-Detaildaten. Wird von rassen-detail.html bei Bedarf geladen (siehe rassen-detail-index.js).
(window.RASSEN_DETAIL_DATA = window.RASSEN_DETAIL_DATA || {})['Dhampire'] = {
  name: 'Dhampire', accent: '#c0394f',
  subtitle: 'Kinder der Dunkelheit · Zwischen Leben und Tod',
  tags: ['Humanoid','Mittel oder Klein','12 m Bewegung','Dunkelsicht','Chaotisch-Neutral'],
  headerImage: 'assets/images/races/dhampire/banner.png',
  lebensraum: ['Dhampire tauchen überall in Meruria auf — meist in Städten, Hafenvierteln und den Rändern der Zivilisation.'],
  beziehungenIntro: 'Dhampire polarisieren — sie werden gefürchtet, bewundert und missverstanden, oft gleichzeitig.',
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
    introBild:        { url: 'assets/images/races/dhampire/charaktere.png', label: 'Dhampir · Illustration', caption: 'Charakter-Illustration', position: 'right', width: 360, height: 360 },
    gesellschaftBild: { url: null, label: 'Vampirisches Erbe · Illustration', caption: 'Zwischen Leben und Tod', position: 'left', width: 240, height: 300 },
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
  radar: { beschreibung:'Dhampire sind außergewöhnlich beweglich und zäh — ihre vampirische Natur macht sie zu natürlichen Überlebenden und Kämpfern aus dem Hinterhalt.', labels:['Mobilität','Kampf','Magie','Soziales','Überleben','Weisheit'], values:[88,78,45,55,92,50] },
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
      { name:'Größenkategorie',        text:'Deine Größenkategorie ist mittelgroß oder klein. Du wählst die Größe, wenn du dieses Volk wählst.' },
      { name:'Dunkelsicht',  text:'Im Radius von 18 Metern kannst du in dämmrigem Licht wie in hellem Licht sehen.' },
      { name:'Erbe',         text:'Du behältst alle Fertigkeiten, in denen deine vorherige Rasse geübt ist, und besondere Bewegungsraten.' },
      { name:'Untote Natur', text:'Du brauchst nicht zu atmen.' },
      { name:'Spinnenklettern',text:'Deine Kletterbewegungsrate ist gleich deiner Schrittbewegungsrate. Ab Stufe 3 kannst du kopfüber an Decken und Wänden klettern.' },
      { name:'Vampirbiss',   text:'Deine Fangzähne sind eine natürliche Waffe (einfach, Nahkampf). Konstitutionsmodifikator statt Stärke. Treffer: 1W4 Stichschaden. Bei ≤ halben TP: Vorteil auf Angriffswürfe. Trifft du eine lebende Kreatur: gewinne TP oder erhalte Bonus auf nächsten Wurf.' },
      { name:'Angeborenes Talent', text:null, talente:['Fledermausflug','Traumfresser','Vampirisches Charisma'] },
    ],
  },
};
