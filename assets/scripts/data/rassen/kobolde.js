// Kobolde — Rassen-Detaildaten. Wird von /charaktererstellung/rassen-detail.html bei Bedarf geladen (siehe rassen-detail-index.js).
(window.RASSEN_DETAIL_DATA = window.RASSEN_DETAIL_DATA || {})['Kobolde'] = {
  name: 'Kobolde', accent: '#c83030',
  subtitle: 'Kinder des Drachens · Hüter der Tunnel',
  tags: ['Humanoid','Klein','9 m Bewegung','Drakonischer Schrei','Meistens Rechtschaffen-Böse'],
  headerImage: 'assets/images/races/kobolde/banner.png',
  lore: {
    intro: [
      'Kobolde gehören zu den kleinsten Kreaturen drakonischer Abstammung im Multiversum. Die Überreste ihrer Drachenahnen finden sich im Glanz ihrer Schuppen und in ihrem Gebrüll. Der Legende nach stiegen die ersten Kobolde bei den Horten der frühesten Drachen aus dem Unterreich.',
      'Koboldschuppen neigen zu Rostfarben, manche erinnern an chromatische oder metallische Drachen. Ihr Schrei kann Zorn, Entschlossenheit, Begeisterung und Furcht ausdrücken — doch unabhängig davon hallt in ihm stets reine Drachenkraft wider.',
    ],
    gesellschaft: [
      'In einigen Gegenden dienen Kobolde chromatischen oder metallischen Drachen und verehren sie als heilige Wesen. Anderswo wissen Kobolde genau, wie gefährlich solche Drachen sein können — und helfen anderen gegen die Zerstörung durch sie.',
      'Kobolde sind von Natur aus gemeinschaftsorientiert. Allein sind sie gefährdet, in Gruppen überraschend wirkungsvoll. Ihre Ressourceneffizienz ist legendär: Was ein Kobold nicht braucht, wirft er nicht weg. Was er nicht versteht, baut er auseinander.',
      'In Meruria werden Kobolde oft unterschätzt. Das ist ihr größter Vorteil. Ein Kobold, der nicht unterschätzt wird, hat entweder geschrien — oder es ist schon zu spät.',
    ],
    introBild:        { url: 'assets/images/races/kobolde/charaktere.png', label: 'Kobold · Illustration', caption: 'Charakter-Illustration', position: 'right', width: 360, height: 360 },
    gesellschaftBild: { url: null, label: 'Kobold-Tunnel · Illustration', caption: 'Drakonisches Erbe unter der Erde', position: 'left', width: 240, height: 300 },
  },
  specialSection: {
    type: 'variantCards', feat1Label: 'Stammesmerkmal', feat2Label: 'Spieltipp',
    label: 'Kobold-Vermächtnis',
    beschreibung: 'Die Verbindung mit Drachen manifestiert sich bei jedem Kobold anders. Wähle dein Vermächtnis.',
    varianten: [
      {
        farbe: 'Abwehr', name: 'Abwehr', schadensart: 'Defensiv', farbeHex: '#8090a0', bild: null,
        augenfarbe: null, hautfarbe: null, haarfarbe: null,
        odemwaffe: 'Du bist bei Rettungswürfen gegen den Verängstigt-Zustand sowie zu dessen Aufhebung bei dir selbst im Vorteil.',
        resistenz: 'Beste Wahl für Kämpfer, Paladine und alle, die in vorderster Linie stehen müssen.',
      },
      {
        farbe: 'Drakonische Zauberei', name: 'Drakonische Zauberei', schadensart: 'Magisch', farbeHex: '#a040c0', bild: null,
        augenfarbe: null, hautfarbe: null, haarfarbe: null,
        odemwaffe: 'Du beherrschst einen Zaubertrick deiner Wahl aus der Zauberliste des Zauberers. Zaubermerkmal: Intelligenz, Weisheit oder Charisma (Wahl bei Rassenauswahl).',
        resistenz: 'Flexibel und aufwertbar. Ideal für alle, die arkanische Optionen wollen ohne Vollmagier zu sein.',
      },
      {
        farbe: 'Findigkeit', name: 'Findigkeit', schadensart: 'Fertigkeit', farbeHex: '#40a060', bild: null,
        augenfarbe: null, hautfarbe: null, haarfarbe: null,
        odemwaffe: 'Du bist in einer Fertigkeit deiner Wahl geübt: Arkane Kunde, Fingerfertigkeit, Heilkunde, Nachforschungen oder Überlebenskunst.',
        resistenz: 'Für Charaktere, die eine zusätzliche Schlüsselfertigkeit benötigen. Besonders stark mit Fingerfertigkeit für Schurken.',
      },
    ],
  },
  namenSection: {
    type: 'nameRoller',
    label: 'Namen der Kobolde',
    beschreibung: 'Kobold-Namen sind kurz, kratzig und oft lautmalerisch. Viele klingen wie etwas, das in einem Tunnel hallt.',
    tabellen: [
      { name:'Kobold-Namen', eintraege:['Aaryn','Bix','Daa','Darv','Dorvak','Draak','Drixx','Drull','Durp','Fixer','Gax','Gimble','Gleek','Glitch','Grux','Hack','Heff','Ixar','Jix','Kaarv','Kipp','Klax','Klitch','Knick','Krix','Lurp','Mack','Meepo','Nix','Nyx','Orm','Perp','Pix','Rax','Ripp','Sax','Skrix','Snax','Squee','Tik','Ting','Torv','Traak','Trix','Vax','Vipp','Wix','Xaarv','Yarr','Zax'] },
    ],
  },
  charakterGenerator: {
    felder: [
      { label:'Name',           type:'table',  optionen:['Aaryn','Bix','Daa','Darv','Dorvak','Draak','Drixx','Drull','Durp','Fixer','Gax','Gimble','Gleek','Glitch','Grux','Hack','Heff','Ixar','Jix','Kaarv','Kipp','Klax','Klitch','Knick','Krix','Lurp','Mack','Meepo','Nix','Nyx','Orm','Perp','Pix','Rax','Ripp','Sax','Skrix','Snax','Squee','Tik','Ting','Torv','Traak','Trix','Vax','Vipp','Wix','Xaarv','Yarr','Zax'] },
      { label:'Schuppenfarbe',  type:'table',  optionen:['rostrot','dunkelgrün','tiefblau','weiß','schwarz','bronzefarben','goldgelb','kupferfarben','messingfarben','silbern'] },
      { label:'Augenfarbe',     type:'table',  optionen:['Rottöne','Brauntöne','Blautöne','Orangetöne','Grüntöne','Grautöne'] },
      { label:'Vermächtnis',    type:'choice', optionen:['Abwehr','Drakonische Zauberei','Findigkeit'] },
      { label:'Drachen-Affinität', type:'table', optionen:['Roter Drache (Feuer)','Blauer Drache (Blitz)','Grüner Drache (Gift)','Weißer Drache (Kälte)','Schwarzer Drache (Säure)','Bronzedrache (Blitz)','Golddrache (Feuer)','Kupferdrache (Säure)','Messingdrache (Feuer)','Silberdrache (Kälte)'] },
      { label:'Talent',         type:'table',  optionen:['Segen des Drachen','Hockenstärke','Urd-Kobold'] },
    ],
  },
  beziehungen: [
    { volk:'Drachen',       relation:'Heilige Verehrung oder Respekt', text:'Manche Kobolde verehren Drachen als Götter. Andere respektieren sie als das, was sie sind: das mächtigste Raubtier weit und breit.' },
    { volk:'Menschen',      relation:'Unterschätzter Verbündeter',     text:'Menschen unterschätzen Kobolde. Das haben sie gemeinsam mit jedem anderen Volk. Die klugen Menschen lernen es rechtzeitig.' },
    { volk:'Zwerge',        relation:'Dauerkonflikt',                   text:'Tunnel, Erzadern, Wohnraum — Kobolde und Zwerge wollen dasselbe, nur von unten und oben. Das funktioniert nicht gut.' },
    { volk:'Goblins',       relation:'Pragmatische Kameradschaft',      text:'Auch klein, auch unterschätzt, auch mit Drachenschrei nein warte das ist nur bei uns. Aber die Grundlage stimmt.' },
    { volk:'Dragonborn',    relation:'Verwandtschaft auf Distanz',      text:'Größer, angesehener, arroganter. Und doch: drakonisches Blut. Kobolde respektieren das — auch wenn Dragonborn das manchmal nicht auf sich beziehen wollen.' },
    { volk:'Magier',        relation:'Gegenseitige Nützlichkeit',       text:'Kobolde kennen Tunnel, Artefakte und Drakonisch. Magier wissen das zu schätzen. Das ergibt unerwartete Partnerschaften.' },
  ],
  bekannte: [
    { bild: null, name:'Meepo', rolle:'Der Drachenhüter', beschreibung:'Wächter des Dorfdrachen Calcryx. Der wohl berühmteste Kobold der D&D-Geschichte — bekannt aus dem Abenteuer „The Sunless Citadel".' },
    { bild: null, name:'— Unbekannt —', rolle:'Name noch nicht festgelegt', beschreibung:'Dieser Eintrag ist für einen bekannten Kobold in Meruria reserviert.' },
    { bild: null, name:'— Unbekannt —', rolle:'Name noch nicht festgelegt', beschreibung:'Dieser Eintrag ist für einen bekannten Kobold in Meruria reserviert.' },
  ],
  radar: { labels:['Mobilität','Kampf','Magie','Soziales','Überleben','Weisheit'], values:[65,58,50,42,72,48] },
  quiz: {
    steps: [
      { frage:'Was treibt deinen Kobold an?', optionen:[
        { text:'Drachen — ich diene, verehre oder fürchte sie. Beides schließt sich nicht aus',  tags:['Paladin','Kleriker'] },
        { text:'Überleben — klein sein bedeutet: immer wachsam sein',                           tags:['Schurke','Waldläufer'] },
        { text:'Ruhm — ich werde beweisen, was drakonisches Erbe bedeutet',                    tags:['Kämpfer','Barbar'] },
        { text:'Wissen — Drakonisch ist die älteste Magie-Sprache. Ich will verstehen',         tags:['Magier','Kleriker'] },
      ]},
      { frage:'Wie nutzt dein Charakter den Drakonischen Schrei?', optionen:[
        { text:'Als Kampferöffnung — Vorteil für mich und alle Verbündeten in der ersten Runde', tags:['Kämpfer','Barbar'] },
        { text:'Taktisch — nur wenn ich mehrere Verbündete in Nahkampfreichweite habe',         tags:['Kämpfer','Paladin'] },
        { text:'Defensiv — der Schrei signalisiert auch Feinden, was sie erwartet',            tags:['Barbar','Kämpfer'] },
        { text:'Als Seltenheit — ich spare ihn für den richtigen Moment',                      tags:['Schurke','Magier'] },
      ]},
      { frage:'Welches Kobold-Vermächtnis passt zu dir?', optionen:[
        { text:'Abwehr — Mut vor Drachen-Einschüchterung ist mein Markenzeichen',              tags:['Paladin','Kämpfer'] },
        { text:'Drakonische Zauberei — ein Zaubertrick aus Drachenblut',                       tags:['Magier','Hexenmeister'] },
        { text:'Findigkeit — eine gezielte Fertigkeit macht den Unterschied',                  tags:['Schurke','Waldläufer'] },
        { text:'Noch nicht entschieden — ich erkunde erst, was ich bin',                       tags:['Barde','Magier'] },
      ]},
      { frage:'Welche Rolle spielt dein Charakter in einer Gruppe?', optionen:[
        { text:'Vorteilsgeber — Drakonischer Schrei für Angriffs-Vorteil aller Nahkämpfer',   tags:['Kämpfer','Barbar'] },
        { text:'Flexibler Spezialist — GES+1, STR+1, INT+1 über viele Klassen nutzbar',      tags:['Schurke','Magier'] },
        { text:'Hitzefeste Vorhut — Kaltblütig in heißen Umgebungen, Dunkelsicht unter der Erde', tags:['Kämpfer','Waldläufer'] },
        { text:'Drakonischer Unterstützer — Schrei + Vermächtnis als Synergie',               tags:['Barde','Kleriker'] },
      ]},
    ],
    klassen: {
      'Kämpfer':     'Drakonischer Schrei für Gruppen-Vorteil, STR+1 und GES+1 für Flexibilität, Abwehr gegen Angst-Effekte — klein aber effektiv.',
      'Barbar':      'Drakonischer Schrei in Rage, STR+1, Kaltblütig in Vulkangebieten — der zornigste Kobold im Raum.',
      'Schurke':     'GES+1, Findigkeit für Fingerfertigkeit, Dunkelsicht — der Kobold-Schurke ist ein natürliches Produkt der Evolution.',
      'Magier':      'INT+1, Drakonische Zauberei für Bonus-Zaubertrick, Drakonisch als Sprache — du verstehst Zauber auf einer anderen Ebene.',
      'Paladin':     'Abwehr gegen Verängstigt, Drakonischer Schrei für Verbündete, STR+1 — der Kobold-Paladin ist treu bis in den Tod.',
      'Waldläufer':  'GES+1, Dunkelsicht, Kaltblütig, Findigkeit für Überlebenskunst — der unterirdische Späher.',
      'Kleriker':    'Drakonischer Schrei als göttliches Zeichen, Findigkeit für Heilkunde, INT+1 für Wissensdomäne.',
      'Hexenmeister':'Drakonische Zauberei als Bonus-Cantrip, INT/CHA+1, Drakonisch — Hexenmeister mit Drachenblut-Pakt.',
      'Barde':       'Drakonischer Schrei für Verbündete, Findigkeit für soziale Fertigkeiten, GES+1 — der lauteste Barde.',
      'Druide':      'Kaltblütig in heißen Wildnissen, Findigkeit für Überlebenskunst oder Heilkunde, Drakonische Zauberei als Cantrip.',
    },
  },
  koerperlicherMerkmale: {
    bewegungsrate:   '9 m',
    volljaehrigkeit: '6 Jahre',
    lebenserwartung: 'bis zu 120 Jahre',
    groesse:  { kategorie:'Klein', min:'61 cm', max:'91 cm', formel:'61 cm + 2W6 · 2,5 cm' },
    gewicht:  { min:'24 Pfund', max:'44 Pfund', formel:'20 Pfund + 2 · Wurf von Größe' },
    augenfarbe: 'Rot-, Braun-, Blau-, Orange-, Grün- und Grautöne',
    hautfarbe:  'Schuppen: schwarz, grün, rot, blau, weiß, bronze, gold, kupfer, messing oder silber',
    haarfarbe:  'weiß, schwarz oder hautfarbend',
  },
  statblock: {
    features: [
      { name:'Kreaturentyp',        text:'Humanoider.' },
      { name:'Größenkategorie',               text:'Klein (61–91 cm, 24–44 Pfund).' },
      { name:'Dunkelsicht',         text:'Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen.' },
      { name:'Kaltblütig',          text:'Du bist immun gegen die Auswirkungen von heißen Temperaturen.' },
      { name:'Drakonischer Schrei', text:'Als Bonusaktion entfesselst du einen Schrei auf Gegner innerhalb von 3 m. Bis zum Beginn deines nächsten Zuges haben du und deine Verbündeten Vorteil bei Angriffswürfen gegen diese Gegner. Anwendungen pro langer Rast entsprechen deinem Übungsbonus.' },
      { name:'Kobold-Vermächtnis',  text:'Wähle eine Option: Abwehr (Vorteil gegen Verängstigt), Drakonische Zauberei (ein Zaubertrick aus der Zauberer-Liste, Merkmal wählbar), oder Findigkeit (geübt in einer von: Arkane Kunde, Fingerfertigkeit, Heilkunde, Nachforschungen, Überlebenskunst).' },
      { name:'Angeborenes Talent',  text:null, talente:['Segen des Drachen','Hockenstärke','Urd-Kobold'] },
    ],
  },
};
