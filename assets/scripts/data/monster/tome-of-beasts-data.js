window.MONSTER_DATA_TOME_OF_BEASTS = [
  {
    name: "Ala",
    art: "Feenwesen",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 8,
    xp: 3900,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 127, tp_wuerfel: "15W8+60",
    bewegung: { "Gehen": "9 m", "Fliegen": "12 m" },
    attribute: { STR: 20, DEX: 16, CON: 18, INT: 10, WIS: 16, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: { "Athletik": 8, "Wahrnehmung": 9, "Heimlichkeit": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Blitz", "Gift", "Donner"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 19,
    sprachen: ["Gemein", "Drakonisch"],
    umgebung: ["Wald", "Grasland"],
    bild: "assets/images/monster/tome-of-beasts/ala.png",
    beschreibung: [
      "Alas werden aus Gallen geboren, die an den Stämmen von Baumwächtern wachsen. In diesen parasitären Taschen erkrankt der Baumwächter und wird seiner Lebenskraft beraubt. Wenn der Baumwächter stirbt, wird die Ala in einem schwarzen Wirbelwind geboren.",
      "Töchter des Wirbelwinds. Alas haben wirbelnd verwehtes Haar und tragen rauchige schwarze Fetzen, doch ihre wahre Form ist die eines Wirbelwinds, den stets die Šestaci erkennen können — jene Männer und Frauen, die an jeder Hand sechs Finger haben. Im Flug oder im Kampf nimmt eine Ala eine Form an mit dem Oberkörper einer Hexe und einem wirbelnden Luftvortex anstelle von Hüften und Beinen. Wenn eine Ala in Menschengestalt ein Haus betritt, stöhnt das gesamte Gebäude, als wäre es von einem gewaltigen Sturmstoß getroffen worden. Alas leben in den Höhlen von Bäumen, die vom Blitz getroffen wurden. Sie sind am aktivsten, wenn Donner durch die Wälder hallt, und wo immer sie reisen, entstehen Hagel- oder Gewitter um sie herum.",
      "Unermesslicher Hunger. Die weitmauldigen Alas haben einen unersättlichen Appetit. In der Wildnis fressen sie Wölfe, Bären und Dachse. Sie jagen jedoch lieber in besiedelten Gebieten, da sie den Geschmack von Unschuldigen allem anderen vorziehen. Unappetitliche Stämme von wilden Humanoiden mögen die Gunst einer Ala erbitten oder ihren Zorn abwenden, indem sie ihr gefesselte Gefangene als Geschenke anbieten.",
      "Von Stürmen gestärkt. Im Kampf ist eine Ala ständig in Bewegung und webt wie der Wind zwischen ihren Feinden hindurch. Sie reißt ihre Feinde mit Klauen und einem giftigen Biss oder schleudert aus der Ferne tückische Blitze und Hagelstürme. Wehe dem Helden, der einer Ala begegnet, während über ihm ein Sturm tobt — solche Stürme stärken die Ala und machen ihre Blitze gefährlicher."
    ],
    besonderheiten: [
      { name: "Vorbeifliegen", beschreibung: "Die Ala provoziert keinen Gelegenheitsangriff, wenn sie aus der Reichweite eines Feindes herausfliegt." },
      { name: "Giftfleisch", beschreibung: "Das Gift der Ala durchdringt ihr Fleisch. Eine Kreatur, die die Ala erfolgreich beißt, muss einen KON-Rettungswurf (SG 16) bestehen oder erleidet 10 (3W6) Giftschaden." },
      { name: "Sturmstärke", beschreibung: "Wenn ein Gewitter sowohl um die Ala als auch um ihr Ziel tobt, wird der Rettungswurf gegen den Blitzkuss mit Nachteil durchgeführt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Ala führt zwei Klauangriffe oder einen Klau- und einen Bissangriff durch." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +8 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 10 (1W10+5) Stichschaden, und das Ziel muss einen KON-Rettungswurf (SG 16) bestehen oder erleidet 10 (3W6) Giftschaden." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +8 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 14 (2W8+5) Hiebschaden." },
      { name: "Blitzkuss (Aufladung 5-6)", beschreibung: "Ein Ziel innerhalb von 15 m muss einen GES-Rettungswurf (SG 16) ablegen. Bei einem Fehlschlag erleidet es 28 (8W6) Blitzschaden, bei einem Erfolg die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Algorith",
    art: "Konstrukt",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Rechtschaffen neutral",
    cr: 10,
    xp: 5900,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 136, tp_wuerfel: "16W8+64",
    bewegung: { "Gehen": "12 m", "Fliegen": "12 m" },
    attribute: { STR: 21, DEX: 14, CON: 19, INT: 13, WIS: 16, CHA: 18 },
    rettungswuerfe: { GES: 6, KON: 8, WEI: 7, CHA: 8 },
    fertigkeiten: { "Athletik": 9, "Aufmerksamkeit": 7, "Nachforschung": 5, "Wahrnehmung": 7 },
    schadensresistenzen: ["Säure", "Kälte", "Blitz"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Gemein", "Himmlisch", "Drakonisch", "Infernalisch"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/tome-of-beasts/algorith.png",
    beschreibung: [
      "Manchmal als Faltenengel bezeichnet, sind Algorith rechtschaffene Wesen, geformt aus purer Energie, reiner Mathematik und universellen physikalischen Gesetzen.",
      "Kreaturen der reinen Vernunft. Sie sind die Grenzwächter der Konzeptuellen Reiche und bewahren subjektive Wesen vor den Reichen des Absoluten. Ewig, erbarmungslos und unaufhörlich wachsam, schützen sie vor den Monstern, die in den dunkelsten Dimensionen des Multiversums lauern, und suchen Chaos selbst in den Behausungen der Götter auf, um es zu vernichten.",
      "Feinde des Chaos. Sie besuchen die Sterblichenwelt, wenn Chaos droht, einen Ort aufzulösen, oder wenn die Fäden des Schicksals verworren sind. Gelegentlich dient ein Algorith einem Gesetz-Gott oder antwortet auf den Ruf einer Weberhexe. Algorith kämpfen mit beschworenen Kraftklingen und können universelle Energie beschwören, die Zufälligkeit abbaut — Feinde schwächend oder zu fein geordnetem Kristallstaub reduzierend.",
      "Sozial, aber geheimnisvoll. In Gruppen bewegen sie sich und kämpfen in lautloser Koordination. Nur winzige Abweichungen in den in ihre Haut geätzten Formeln unterscheiden einen Algorith vom anderen. Die Zahl Fünf ist für alle Algorith von extremer Bedeutung, aber nur wenige sind willens oder fähig, zu erklären warum. Algorith mögen Kasten, Ränge oder Anführer haben, aber kein Sterblicher hat die mathematischen Insignien auf ihrer Haut entschlüsselt.",
      "Konstruierte Natur. Ein Algorith benötigt keine Luft, Nahrung, Wasser oder Schlaf."
    ],
    besonderheiten: [
      { name: "Unveränderliche Form", beschreibung: "Der Algorith ist immun gegen jeden Zauber oder Effekt, der seine Form verändern würde." },
      { name: "Angeborenes Zauberwirken", beschreibung: "Die Zauberwirkungsfähigkeit des Algorithmus ist Charisma (Zauberrettungswurf SG 16). Er kann folgende Zauber angeboren wirken, ohne Materialkomponenten zu benötigen: Nach Belieben: Hilfe, Unschärfe, Magie entdecken, Dimensionstür. 5/Tag: Magie auflösen. 1/Tag: Kontakt aufnehmen (5 Fragen), Kraftwand." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Algorith führt zwei Logikklinge-Angriffe durch." },
      { name: "Logikklinge", beschreibung: "Nahkampfwaffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 31 (4W12+5) Kraftschaden." },
      { name: "Nullkegel (Aufladung 5-6)", beschreibung: "Der Algorith projiziert einen Kegel aus Nullenergie von 9 m Länge. Ziele im Kegel erleiden 42 (12W6) Kraftschaden und erleiden die Wirkung eines Magie-auflösen-Zaubers. Bei einem erfolgreichen GES-Rettungswurf (SG 16) wird der Schaden halbiert und die Magie-auflösen-Wirkung aufgehoben." },
      { name: "Realitätsbombe (5/Tag)", beschreibung: "Der Algorith beschwört eine winzige Gesetzesrune und wirft sie wie eine Waffe. Alle Kreaturen innerhalb von 9 m von dem Feld, auf dem die Realitätsbombe landet, erleiden 21 (6W6) Kraftschaden und sind bis zum Beginn des nächsten Zuges des Algorithmus betäubt. Bei einem erfolgreichen GES-Rettungswurf (SG 16) erleidet das Ziel nur halben Schaden und wird nicht betäubt." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Alseid",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch neutral",
    cr: 0.5,
    xp: 100,
    rk: 14, ruestungstyp: "Lederrüstung",
    tp: 49, tp_wuerfel: "9W8+9",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 13, DEX: 17, CON: 12, INT: 8, WIS: 16, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: { "Naturkunde": 3, "Wahrnehmung": 5, "Heimlichkeit": 5, "Überleben": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Gemein", "Elfisch", "Sylvanisch"],
    umgebung: ["Wald", "Feenwildnis"],
    bild: "assets/images/monster/tome-of-beasts/alseid.png",
    beschreibung: [
      "Alseid sind die anmutigen Waldverwandten der Zentauren, mit dem schlanken Oberkörper eines Elfen und dem Unterkörper eines Hirsches. Da sie selten weit von den bewaldeten Lichtungen entfernt gesehen werden, die sie Heimat nennen, werden sie manchmal als 'Hainnypmhen' bezeichnet — obwohl sie den Elfen näher verwandt sind als Nymphen.",
      "Waldhüter. Alseid sehen den Wald als Individuum und Freund. Sie sind misstrauisch gegenüber Fremden, die diese Ansicht nicht teilen. Verlorene Reisende, die tiefen Respekt vor dem Wald zeigen, können vielleicht den weißen Schwanz eines entfernten Alseid erblicken; wenn sie ihm folgen, während er davonhüpft, führt der mitfühlende Alseid sie möglicherweise zu einem Weg aus dem Wald heraus. Respektlose Fremde mögen demselben Schwanz in ihren Untergang folgen. Alseid haben keine Skrupel, Eindringlinge zu töten, die ihren Wald verbrennen oder abholzen.",
      "Geweihe zeigen Status. Alseid haben Geweihe, die aus ihren Stirnen wachsen. Diese wachsen sehr langsam und verzweigen sich alle zehn Jahre für das erste Jahrhundert des Lebens. Weitere Zacken entwickeln sich nur mit dem Segen des Waldes. Da Geweihe Status bedeuten, setzen Alseid sie niemals im Kampf ein. Die Geweihe vollständig abzuschneiden oder Zacken zu entfernen ist eine erniedrigende und schwere Strafe."
    ],
    besonderheiten: [
      { name: "Waldfreund", beschreibung: "In einem Wald hinterlässt der Alseid keine Spuren und bestimmt automatisch die wahre Nordrichtung." }
    ],
    aktionen: [
      { name: "Speer", beschreibung: "Nahkampf- oder Fernkampfwaffenangriff: +3 zum Treffen, Reichweite 1,5 m oder Wurfweite 6/18 m, ein Ziel. Treffer: 4 (1W6+1) Stichschaden, oder 5 (1W8+1) Stichschaden, wenn er für einen Nahkampfangriff mit zwei Händen geführt wird." },
      { name: "Kurzbogen", beschreibung: "Fernkampfwaffenangriff: +5 zum Treffen, Reichweite 24/96 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Alseid-Hainwächter",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch neutral",
    cr: 3,
    xp: 700,
    rk: 15, ruestungstyp: "verstärkte Lederrüstung",
    tp: 71, tp_wuerfel: "13W8+13",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 13, DEX: 17, CON: 12, INT: 8, WIS: 16, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: { "Naturkunde": 3, "Wahrnehmung": 5, "Heimlichkeit": 5, "Überleben": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Gemein", "Elfisch", "Sylvanisch", "Druidisch"],
    umgebung: ["Wald", "Feenwildnis"],
    bild: "assets/images/monster/tome-of-beasts/alseid_hainwaechter.png",
    beschreibung: [
      "Hainwächter sind die Beschützer der Alseid-Stämme und tragen den Zorn ihres urzeitlichen Waldes gegen jene, die ihn bedrohen. Als Druiden-Zauberwirker bündeln sie die Macht des Waldes in jedem Angriff und jeder Beschwörung.",
      "Hainwächter teilen alle Eigenschaften normaler Alseid — ihre Liebe zur Wildnis, ihre Abneigung gegen Eindringlinge und ihren tiefen Respekt vor den Geweihen als Symbol ihres Standes."
    ],
    besonderheiten: [
      { name: "Waldfreund", beschreibung: "In einem Wald hinterlässt der Hainwächter keine Spuren und bestimmt automatisch die wahre Nordrichtung." },
      { name: "Zauberwirken", beschreibung: "Der Hainwächter ist ein Zauberwirker der 5. Stufe. Seine Zauberwirkungsfähigkeit ist Weisheit (Zauberrettungswurf SG 13, +5 zum Treffen mit Zauberangriffen). Er hat folgende Druidenzauber vorbereitet: Zaubertricks (nach Belieben): Druidentrick, Führung, Flamme erschaffen, Shillelagh. 1. Stufe (4 Plätze): Tierfreundschaft, Wunden heilen, Feenfeuer. 2. Stufe (3 Plätze): Tierbote, Metall erhitzen, Leichte Wiederherstellung. 3. Stufe (2 Plätze): Blitz herbeirufen, Magie auflösen." }
    ],
    aktionen: [
      { name: "Quarterstaff", beschreibung: "Nahkampfwaffenangriff: +3 zum Treffen (+5 mit Shillelagh), Reichweite 1,5 m, eine Kreatur. Treffer: 4 (1W6+1) Wuchtschaden, oder 5 (1W8+1) Wuchtschaden bei Führung mit zwei Händen, oder 7 (1W8+3) Wuchtschaden mit Shillelagh." },
      { name: "Kurzbogen", beschreibung: "Fernkampfwaffenangriff: +5 zum Treffen, Reichweite 24/96 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Amphiptere",
    art: "Tier",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 3,
    xp: 700,
    rk: 15, ruestungstyp: "natürliche Rüstung",
    tp: 60, tp_wuerfel: "8W8+24",
    bewegung: { "Gehen": "6 m", "Klettern": "6 m", "Fliegen": "18 m", "Schwimmen": "6 m" },
    attribute: { STR: 11, DEX: 18, CON: 17, INT: 2, WIS: 16, CHA: 6 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsinn 3 m"],
    passiveWahrnehmung: 15,
    sprachen: [],
    umgebung: ["Wald", "Dschungel"],
    bild: "assets/images/monster/tome-of-beasts/amphiptere.png",
    beschreibung: [
      "Die Amphiptere ist am häufigsten als Schwarm goldgekrönter, fledermausflügeliger Schlangen anzutreffen, die aus dem Blattwerk hervorbrechen.",
      "Kleine Wyverne. Eine Amphiptere hat fledermausartige Flügel und einen wyvern-ähnlichen Stachel am Ende ihres Schwanzes. Ihre Reptilienkörper sind beschuppt, während ihre Flügel grünlich-gelbe Federn tragen.",
      "Sturzflug und Geschwindigkeit. Sie sind trotz ihrer Größe überraschend wendig und können plötzlich die Richtung wechseln, um tödliche Angriffs- und Rückzugsmanöver durchzuführen. Sie stürzen sich in den Kampf und heraus, schnappen mit nadelspitzen Zähnen nach Zielen und stechen mit vergifteten Stacheln zu. Sobald ein Feind vergiftet und verletzt ist, schweben sie näher heran — eine eng gepackte, flatternde Masse aus Fangzähnen, schlagenden Flügeln und Stacheln.",
      "Stärke im Schwarm. Trotz ihrer Kampffähigkeit sind Amphiptere nicht besonders mutig. Meistens lauern sie in kleinen Schwärmen in dichtem Blattwerk. In großen Gruppen zeigen sie überraschende List und Hartnäckigkeit und belästigen Feinde möglicherweise stundenlang, bevor sie für den Todesstoß herangehen."
    ],
    besonderheiten: [
      { name: "Vorbeifliegen", beschreibung: "Die Amphiptere provoziert keinen Gelegenheitsangriff, wenn sie aus der Reichweite eines Feindes herausfliegt." },
      { name: "Schwarmverhalten", beschreibung: "Bis zu zwei Amphiptere können denselben Raum gleichzeitig teilen. Die Amphiptere hat Vorteil auf Nahkampfangriffswürfe, wenn sie sich den Raum mit einer anderen, nicht handlungsunfähigen Amphiptere teilt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Amphiptere führt einen Bissangriff und einen Stachelangriff durch." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +6 zum Treffen, Reichweite 1,5 m, eine Kreatur. Treffer: 7 (1W6+4) Stichschaden." },
      { name: "Stachel", beschreibung: "Nahkampfwaffenangriff: +6 zum Treffen, Reichweite 1,5 m, eine Kreatur. Treffer: 7 (1W6+4) Stichschaden plus 10 (3W6) Giftschaden, und das Ziel muss einen erfolgreichen KON-Rettungswurf (SG 13) bestehen oder ist 1 Stunde lang vergiftet." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Andrenjinyi",
    art: "Himmlisch",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Neutral",
    cr: 15,
    xp: 13000,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 228, tp_wuerfel: "13W20+91",
    bewegung: { "Gehen": "18 m", "Graben": "6 m", "Klettern": "6 m", "Schwimmen": "18 m" },
    attribute: { STR: 30, DEX: 17, CON: 25, INT: 10, WIS: 18, CHA: 23 },
    rettungswuerfe: { KON: 12, WEI: 9, CHA: 11 },
    fertigkeiten: { "Arkanes Wissen": 5, "Wahrnehmung": 9, "Religion": 5 },
    schadensresistenzen: ["Säure", "Kälte", "Feuer", "Blitz"],
    schadensimmunitaeten: ["Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m", "Zittersinn 36 m"],
    passiveWahrnehmung: 19,
    sprachen: ["Gemein", "Himmlisch", "Riesig", "Sylvanisch"],
    umgebung: ["Gewässer", "Dschungel", "Grasland"],
    bild: "assets/images/monster/tome-of-beasts/andrenjinyi.png",
    beschreibung: [
      "Eine gigantische, schwarzköpfige Schlange von über 18 m Länge, gehüllt in leuchtende Schuppen, ist jeder Andrenjinyi mit lebhaften Mustern in jeder erdenklichen Farbe gesprenkelt. Die Luft um diese Schlangen ist schwer und riecht nach der befeuchteten roten Wüste nach einem sintflutartigen Gewitter.",
      "Andrenjinyi sind die Nachkommen der Regenbogenschlange, des ersten und größten Geistes des Weltanfangs. Die Kinder der Regenbogenschlange sind dichotome Naturgeister von Land und Himmel, Sonne und Regen, Mann und Frau sowie Geburt und Zerstörung.",
      "Letzte ihrer Art. Die Regenbogenschlange hat Andrenjinyi wie abgestreifte Schuppen während ihrer urzeitlichen Wanderungen abgeworfen, aber seit ihrer Himmelfahrt zu den Sternen keine mehr erschaffen. Obwohl Andrenjinyi alterslose Fruchtbarkeitsgeister sind, können sie sich nicht fortpflanzen; jede einzelne ist ein unersetzliches Bindeglied zur urzeitlichen Schöpfung.",
      "Jagd und Verwandlung. Andrenjinyi sind von Natur aus aquatisch und bevorzugen tiefe, frische, lebensspendende Flüsse und Seen. Sie greifen Eindringlinge normalerweise an, es sei denn, diese nähern sich mit den korrekten Riten oder Opfergaben (INT (Religion)-Wurf SG 20 erforderlich). Ihr sakraler Tümpel und seine Umgebung beherbergen oft eine Menagerie seltsamer und schöner Tiere.",
      "Gehorsamkeit und Ritual. Wenn ihnen Rituale und Ehrerbietung angeboten werden, schützen Andrenjinyi manchmal nahe Gemeinschaften mit dürrebrechenden Regenfällen, Heilungen von Leiden oder der Vernichtung von Rivalen. Doch Strafen für gebrochene Gebote sind bösartig unverhältnismäßig und treffen oft die gesamte Gemeinschaft — mit Dürre, Überschwemmungen, Versteinerung oder animalischer Gewalt. Die Bindung einer Gemeinschaft an einen Andrenjinyi ist ein zweischneidiges Schwert."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Andrenjinyi kann Luft und Wasser atmen." },
      { name: "Magieresistenz", beschreibung: "Der Andrenjinyi hat Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Magische Waffen", beschreibung: "Die Waffenangriffe des Andrenjinyi sind magisch." },
      { name: "Angeborenes Zauberwirken", beschreibung: "Die Zauberwirkungsfähigkeit des Andrenjinyi ist Charisma (Zauberrettungswurf SG 19, +11 zum Treffen mit Zauberangriffen). Er benötigt nur verbale Komponenten und kann folgende Zauber angeboren wirken: Nach Belieben: Wasser erschaffen, Mit Tieren sprechen, Stein formen. 3/Tag: Wetter beeinflussen, Magie auflösen, Reinkarnation. 1/Tag: Verblühung, Verbindung mit der Natur, Ansteckung, Fleisch zu Stein, Pflanzenwuchs." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Andrenjinyi führt zwei Angriffe durch: einen mit dem Biss und einen mit dem Umschlingen. Treffen beide Angriffe dasselbe Ziel, wird das Ziel ganz verschluckt." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +15 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 36 (4W12+10) Stichschaden." },
      { name: "Umschlingen", beschreibung: "Nahkampfwaffenangriff: +15 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 36 (4W12+10) Wuchtschaden, und das Ziel ist gepackt (Entkommen SG 20). Bis zum Ende des Ringkampfs ist das Ziel festgesetzt, und der Andrenjinyi kann kein weiteres Ziel umschlingen." },
      { name: "Regenbogenbogen", beschreibung: "Der Andrenjinyi teleportiert sich augenblicklich zwischen Süßwasserquellen innerhalb von 1,5 km. Er kann sich in dem Zug, in dem er diese Kraft einsetzt, weder normal bewegen noch andere Aktionen ausführen. Beim Einsatz erscheint ein Regenbogen zwischen Ursprung und Ziel, der 1 Minute anhält." },
      { name: "Ganz Verschlucken", beschreibung: "Wenn Biss und Umschlingen dasselbe Ziel in einem Zug treffen, wird die Kreatur ganz verschluckt. Das Ziel ist geblendet und festgesetzt und hat totale Deckung gegen Angriffe und Effekte von außerhalb. Das Ziel erleidet im Inneren keinen Schaden. Der Andrenjinyi kann bis zu drei mittelgroße oder vier kleine Kreaturen gleichzeitig verschluckt halten. Erleidet der Andrenjinyi in einem einzelnen Zug 20 oder mehr Schaden durch eine verschluckte Kreatur, muss er am Ende dieses Zuges einen KON-Rettungswurf (SG 18) bestehen oder alle verschluckten Kreaturen herauswürgen, die liegend in einem Bereich von 1,5 m um den Andrenjinyi fallen. Wird der Andrenjinyi getötet, ist eine verschluckte Kreatur nicht mehr festgesetzt und kann ihn mit 4,5 m Bewegung verlassen, dabei liegend. Der Andrenjinyi kann verschluckte Kreaturen auch freiwillig als freie Aktion herauswürgen." },
      { name: "Verwandlungsmagen", beschreibung: "Wenn eine Kreatur vom Andrenjinyi verschluckt wird, muss sie am Ende jedes ihrer Züge einen WEI-Rettungswurf (SG 19) bestehen oder wird von einem Wahre-Verwandlung-Zauber in eine neue, vom Andrenjinyi gewählte Form verwandelt. Der Effekt ist dauerhaft, bis er durch Magie auflösen oder einen Wunsch beendet wird." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Angatra",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 6,
    xp: 2300,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 85, tp_wuerfel: "10W8+40",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 14, DEX: 20, CON: 18, INT: 8, WIS: 12, CHA: 15 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 4, "Heimlichkeit": 8 },
    schadensresistenzen: ["Nekrotisch", "Wucht (nichtmagisch)", "Stich (nichtmagisch)", "Hieb (nichtmagisch)"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 14,
    sprachen: ["alle Sprachen, die er zu Lebzeiten kannte"],
    umgebung: ["Ruinen", "Höhle"],
    bild: "assets/images/monster/tome-of-beasts/angatra.png",
    beschreibung: [
      "Dieses verwitterte Wesen ist in blutbefleckte Fetzen gehüllt. Es kann eine zerfetzte Kapuze zurückziehen und glühende Augen enthüllen, die hungrig vor Blutgier sind.",
      "In bestimmten Stämmen zieht das Brechen lokaler Tabus eine schreckliche Vergeltung durch Ahnengeister nach sich, insbesondere wenn der Übertreter ein Stammesführer oder Ältester war. Der Übertreter wird verflucht, aus dem Stamm verstoßen und anschließend gejagt und hingerichtet.",
      "Gebundene Überreste. Der Leichnam wird von Kopf bis Fuß in Lamba-Tuch gewickelt, um den Geist zu besänftigen und ihn in der sterblichen Hülle zu binden. Dann wird er in einem Grab weit von traditionellen Begräbnisplätzen versiegelt. Alle zehn Jahre besucht der Stamm das Grab für das Famadihana-Ritual, erneuert die Bindungen und besänftigt das Leiden. Über Generationen sühnt dieses Ritual die Schuld, bis der einst verfluchte Vorfahre endlich ins Jenseits eingelassen wird. Verlassen die Nachkommen diese Aufgabe oder wird das Grab verletzt, wird die verfluchte Seele zum Angatra.",
      "Zorniger Geist. Die Form der Kreatur wird von einem mächtigen Ahnengeist belebt und durchläuft eine schreckliche Metamorphose. Fingernägel wachsen zu schorfigen Klauen, die Haut wird hart und lederartig, und die verwitterte Form füllt sich mit übernatürlicher Geschwindigkeit. Innerhalb von Tagen reißt der Angatra seine Bindungen in Fetzen und sucht seine Nachkommen auf, um ihnen die Qual und den Zorn zu teilen, die er in der Zwischenwelt erlitt."
    ],
    besonderheiten: [
      { name: "Quälender Blick", beschreibung: "Wenn eine Kreatur, die die Augen des Angatra sehen kann, ihren Zug innerhalb von 9 m des Angatra beginnt und dieser nicht handlungsunfähig ist, muss sie einen CHA-Rettungswurf (SG 13) ablegen. Bei einem Fehlschlag wird ihre Schmerzgrenze gesenkt und sie wird bis zum Ende ihres nächsten Zuges anfällig für alle Schadensarten. Sofern die Kreatur nicht überrascht ist, kann sie den Rettungswurf vermeiden, indem sie zu Beginn ihres Zuges die Augen abwendet. Eine Kreatur, die die Augen abwendet, kann den Angatra eine volle Runde lang nicht sehen und wählt danach neu. Schaut sie zwischenzeitlich auf den Angatra, muss sie sofort den Rettungswurf ablegen." },
      { name: "Ahnenerzorn", beschreibung: "Der Angatra erkennt sofort jeden, der von seinem Stamm abstammt. Er hat Vorteil auf Angriffswürfe gegen solche Kreaturen, und diese Kreaturen haben Nachteil auf Rettungswürfe gegen die Merkmale und Angriffe des Angatra." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Angatra führt zwei Klauangriffe durch." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +8 zum Treffen, Reichweite 1,5 m, eine Kreatur. Treffer: 10 (2W4+5) Stichschaden, und die Kreatur muss einen KON-Rettungswurf (SG 15) bestehen oder ist bis zum Ende ihres nächsten Zuges vor Schmerz gelähmt." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Angelwurm",
    art: "Monstrosität",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 4,
    xp: 1100,
    rk: 14, ruestungstyp: "natürliche Rüstung",
    tp: 133, tp_wuerfel: "14W12+42",
    bewegung: { "Gehen": "6 m", "Klettern": "6 m" },
    attribute: { STR: 14, DEX: 5, CON: 16, INT: 3, WIS: 14, CHA: 1 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Ertaubt", "Vergiftet", "Niedergeworfen"],
    sinne: ["Zittersinn 18 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Höhle", "Unterirdisch"],
    bild: "assets/images/monster/tome-of-beasts/angelwurm.png",
    beschreibung: [
      "So geduldig wie ein Angler leuchtet der Angelwurm ein Locklicht in der Dunkelheit und wartet auf seine nächste Mahlzeit.",
      "Seidenfallen. Der Angelwurm gräbt sich in die Decken von Höhlen und Tunneln und fertigt dort Schlingen aus starken Seidenfäden, die mit klebrigem Schleim bedeckt sind. Er lockt Beute in seine Schlingen, während er selbst sicher verborgen bleibt, und taucht nur auf, um zu fressen. Mit Dutzenden von Schlingen findet früher oder später immer Nahrung zum Angelwurm."
    ],
    besonderheiten: [
      { name: "Spinnenkletterei", beschreibung: "Der Angelwurm kann schwierige Oberflächen erklimmen, einschließlich kopfüber an Decken und entlang seiner eigenen Seidenfäden, ohne einen Fähigkeitswurf ablegen zu müssen. Der Angelwurm wird niemals durch seine eigenen oder die Seidenfäden anderer Angelwürmer festgesetzt." },
      { name: "Feiner Tastsinn", beschreibung: "Der Angelwurm hat Vorteil auf Weisheit (Wahrnehmung)-Proben, die auf Vibrationen beruhen." },
      { name: "Transparente Falle", beschreibung: "Um die Seidenfäden des Angelwurms zu entdecken, ist eine erfolgreiche Weisheit (Wahrnehmung)-Probe (SG 12) erforderlich; diese Probe wird stets mit Nachteil abgelegt, es sei denn, der Suchende verfügt über eine Möglichkeit, die Unsichtbarkeit der Fäden zu überwinden. Eine Kreatur, die ein Feld mit Angelwurm-Seidenfäden betritt, muss einen GES-Rettungswurf (SG 12) bestehen oder wird von den klebrigen Schlingen festgesetzt (Entkommen SG 14). Dieser Rettungswurf wird mit Nachteil abgelegt, wenn die Kreatur von den Seidenfäden nichts wusste." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Angelwurm führt einen Bissangriff durch. Außerdem führt er einen Schlingenangriff gegen jede feindliche Kreatur durch, die von seinen Fäden festgesetzt ist und sich in Reichweite seiner Schlingen befindet — sobald er sich um eine Kreatur gewickelt hat, führt er keine weiteren Schlingenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +4 zum Treffen, Reichweite 1,5 m, eine Kreatur. Treffer: 9 (2W6+2) Stichschaden plus 3 (1W6) Säureschaden." },
      { name: "Schlingen", beschreibung: "Nahkampfwaffenangriff: +4 zum Treffen, Reichweite 3 m, eine Kreatur. Treffer: 13 (3W8) Säureschaden, und das Ziel muss einen GES-Rettungswurf (SG 12) bestehen oder wird direkt neben den Angelwurm gezogen (sofern es nicht bereits dort ist) und in seinen Windungen gepackt (Entkommen SG 12). Solange es auf diese Weise gepackt ist, ist das Ziel festgesetzt, kann nicht atmen und erleidet zu Beginn jedes Zuges des Angelwurms 22 (5W8) Säureschaden. Eine Kreatur, die aus den Windungen entkommen ist, muss möglicherweise sofort einen GES-Rettungswurf (SG 12) ablegen, um nicht erneut festgesetzt zu werden, wenn sie in ein Feld mit weiteren Seidenfäden flieht." },
      { name: "Ätherisches Locklicht (Aufladung 4-6)", beschreibung: "Der Angelwurm wählt eine Stelle innerhalb von 6 m; diese leuchtet bis zum Beginn seines nächsten Zuges mit einem schwachen blauen Licht. Alle Kreaturen, die das Licht zu Beginn ihres Zuges sehen können, müssen einen WEI-Rettungswurf (SG 12) bestehen oder sind bis zum Beginn ihres nächsten Zuges bezaubert. Eine so bezauberte Kreatur muss auf dem direktesten Weg zum Licht sprinten, scheitert automatisch bei Rettungswürfen gegen das Festgesetzt-Werden durch Seidenfäden und behandelt den Angelwurm als unsichtbar." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Annelidast",
    art: "Monstrosität",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Neutral böse",
    cr: 12,
    xp: 8400,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 184, tp_wuerfel: "16W12+80",
    bewegung: { "Gehen": "12 m", "Graben": "9 m" },
    attribute: { STR: 26, DEX: 10, CON: 20, INT: 1, WIS: 10, CHA: 4 },
    rettungswuerfe: { KON: 9, WEI: 4 },
    fertigkeiten: {},
    schadensresistenzen: ["Blitz"],
    schadensimmunitaeten: ["Gift", "Wucht (nichtmagisch)"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Zittersinn 36 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Unterirdisch", "Höhle"],
    bild: "assets/images/monster/tome-of-beasts/annelidast.png",
    beschreibung: [
      "Ein Annelidast ist ein gigantischer Wurm, der jahrzehntelang in den Tiefen der Erde schlummert, wo das Gestein selbst von urzeitlicher Magie durchdrungen ist. Im Laufe der Jahrtausende haben sie bleiverkleidete Panzer entwickelt, um sich vor dieser Magie zu schützen.",
      "Einzigartige Jagdweise. Einmal pro Jahrhundert erwacht ein Annelidast und wandert an die Oberfläche, um zu fressen. Er frisst mithilfe baleenartiger Zähne, die ihm helfen, Nahrung aus der Erde zu filtern. Diese Ernährungsweise erfordert jedoch, dass er größere Beutetiere zuerst zermalmt, bevor er sie verzehren kann.",
      "Schlafende Seuche. Das Äußere des Annelidasts ist von der urzeitlichen Magie seines unterirdischen Heimatorts durchdrungen. Wenn er dem Erwachen nahe ist, gräbt er sich in einem traumwandlerischen Zustand zur Oberfläche vor. Während er dicht unter der Oberfläche liegt, strahlt die in ihn eingedrungene Magie nach außen und macht Lebewesen in der Umgebung krank — sie werden so zur leichteren Beute, wenn er vollständig erwacht."
    ],
    besonderheiten: [
      { name: "Bewohner der Tiefen Erde", beschreibung: "Der Annelidast benötigt keine Luft." },
      { name: "Urzeitliche Aura", beschreibung: "Eine Kreatur, die ihre Runde innerhalb von 9 m um den Annelidast beginnt, muss einen KON-Rettungswurf (SG 17) bestehen oder erleidet 7 (2W6) Giftschaden. Eine Kreatur, die eine lange Rast innerhalb von 300 m um den Annelidast beendet, muss einen KON-Rettungswurf (SG 17) bestehen oder entwickelt Tumore an ihrem Körper und ist bis zur Entfernung durch einen Wunscherfüllung-Zauber oder vergleichbare Magie vergiftet." },
      { name: "Tunnelgräber", beschreibung: "Der Annelidast kann mit halber Grabgeschwindigkeit durch massiven Fels graben und hinterlässt dabei einen 3 m breiten Tunnel." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Annelidast führt drei Schlagangriffe aus." },
      { name: "Schlag", beschreibung: "Nahkampfwaffenangriff: +12 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 21 (2W12+8) Wuchtschaden. Ist das Ziel eine Kreatur, muss es einen STR-Rettungswurf (SG 17) bestehen oder bis zu 4,5 m vom Annelidast weggestoßen werden. Eine vom Annelidast festgehaltene Kreatur besteht diesen Rettungswurf automatisch." },
      { name: "Zerquetschen (Aufladung 5-6)", beschreibung: "Der Annelidast schleudert seinen massiven Körper in die Luft und kracht auf einer 6 m langen und 3 m breiten Linie auf den Boden. Anschließend zieht er sich in einen Bereich entlang dieser Linie zurück und kann dabei den Platz mittelgroßer oder kleinerer Kreaturen einnehmen. Jede Kreatur in der Linie muss einen GES-Rettungswurf (SG 17) ablegen. Bei einem Fehlschlag erleidet die Kreatur 45 (7W12) Wuchtschaden, wird niedergeworfen und festgehalten, da sie unter seinem Körper eingequetscht ist. Bei einem Erfolg erleidet die Kreatur halben Schaden, wird nicht niedergeworfen und in einen freien Raum ihrer Wahl bis zu 1,5 m vom Annelidast gestoßen. Eine Kreatur kann als Aktion versuchen, eine festgehaltene Kreatur mit einer erfolgreichen STR-Probe (SG 17) zu befreien. Hat der Annelidast vor Einsatz dieser Aktion mindestens 6 m an der Erdoberfläche entlanggegraben, haben Kreaturen in der Linie Nachteil auf den Rettungswurf." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Defensive Reflexaktion", beschreibung: "Wenn der Annelidast Schaden erleidet, kann er einen Schlagangriff gegen eine von ihm festgehaltene Kreatur ausführen." }
    ],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Anubian",
    art: "Elementar",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 2,
    xp: 450,
    rk: 13, ruestungstyp: null,
    tp: 44, tp_wuerfel: "8W8+8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 12, DEX: 16, CON: 12, INT: 10, WIS: 12, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 5 },
    schadensresistenzen: ["Wucht (nichtmagisch)", "Stich (nichtmagisch)", "Hieb (nichtmagisch)"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Erschöpfung", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Niedergeworfen", "Festgesetzt", "Bewusstlos"],
    sinne: ["Dunkelsicht 18 m", "Zittersinn 9 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Urtonisch"],
    umgebung: ["Wüste", "Ruinen"],
    bild: "assets/images/monster/tome-of-beasts/anubian.png",
    beschreibung: [
      "Der wirbelnde Sand eines Anubians formt sich zu einem knurrenden, schakalsgesichtigen Humanoiden, dessen Augen mit einem unheimlichen blauen Schein leuchten. Anubians sind Elementare, die beschworen werden, um Gräber zu bewachen oder Schätze zu hüten.",
      "Sandhaufen. Ein ruhender Anubian ähnelt einem Haufen Sand oder Staub, oft verstreut an einem ohnehin staubigen Ort. Wenn er aktiv ist, erhebt er sich zu einem muskulösen Humanoiden mit dem Kopf eines Schakals. Ein zerstörter Anubian bricht in einen trägen Sandhaufen zusammen.",
      "Tod den Ungerüsteten. Im Kampf bevorzugen Anubians es, ungerüstete Feinde zu bekämpfen. Sie assoziieren ungerüstete Kreaturen mit Zauberern, und ihr angestauter Groll über Jahrhunderte des Dienstes treibt sie dazu, solche Gestalten anzugreifen, wenn sie nicht durch magische Fesseln gebunden sind.",
      "Sandsturm-Teamarbeit. Anubians kämpfen effektiv als Teams und nutzen ihre Haboob-Angriffe, um die verwundbarsten Ziele in die Enge zu treiben und zu isolieren.",
      "Elementare Natur. Ein Anubian benötigt keine Luft, Nahrung, Wasser oder Schlaf."
    ],
    besonderheiten: [
      { name: "Sandschritt", beschreibung: "Anstatt sich normal zu bewegen, kann der Anubian seine humanoide Form in losen Sand zerfallen lassen und sich sofort in einem unbesetzten Raum innerhalb von 3 m neu formen. Diese Bewegung provoziert keine Gelegenheitsangriffe. Nach Verwendung dieses Merkmals in Sandgelände kann der Anubian als Teil dieser Bewegung Verstecken nutzen, selbst unter direkter Beobachtung (Heimlichkeit +7 in Sandgelände). Anubians können durch Türspalten und ähnliche Hindernisse sandschreiten, sofern der Spalt groß genug ist, um Sand hindurchzusieben." },
      { name: "Verwundbarkeit durch Wasser", beschreibung: "Für je 1,5 m, die der Anubian zurücklegt, während er Wasser berührt, oder für jeden Liter Wasser, der auf ihn geschüttet wird, erleidet er 2 (1W4) Kälteschaden. Ein Anubian, der vollständig in Wasser eingetaucht ist, erleidet zu Beginn seines Zuges 10 (4W4) Kälteschaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Anubian führt zwei Klauangriffe durch." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W6+3) Hiebschaden." },
      { name: "Haboob (1/Tag)", beschreibung: "Der Anubian erzeugt einen Sandsturm in einem Zylinder von 9 m Höhe, der sich bis zu 1,5 m um ihn erstreckt. Der Sturm bewegt sich mit dem Anubian. Das Gebiet ist stark verdeckt. Jede Kreatur außer einem Anubian, die den Sandsturm betritt oder ihre Runde darin beendet, muss einen STR-Rettungswurf (SG 13) bestehen oder wird festgesetzt. Jede Kreatur außer einem Anubian, die ihre Runde im Sandsturm beendet, erleidet zudem 3 (1W6) Hiebschaden. Der Anubian kann den Haboob bis zu 10 Minuten lang aufrechterhalten, als würde er sich auf einen Zauber konzentrieren. Während er den Haboob aufrechthält, wird seine Bewegungsrate auf 1,5 m reduziert und er kann keinen Sandschritt nutzen. Festgesetzte Kreaturen bewegen sich mit dem Anubian. Eine Kreatur kann mit einer Aktion und einer erfolgreichen STR-Probe (SG 13) sich selbst oder eine angrenzende Kreatur befreien." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Aridni",
    art: "Feenwesen",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Neutral böse",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: null,
    tp: 82,
    tp_wuerfel: "15W6+30",
    bewegung: { "Gehen": "6 m", "Fliegen": "18 m" },
    attribute: { STR: 9, DEX: 21, CON: 14, INT: 12, WIS: 11, CHA: 16 },
    rettungswuerfe: { GES: 8 },
    fertigkeiten: { "Akrobatik": 11, "Wahrnehmung": 3, "Heimlichkeit": 11 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Gemein", "Gnoll", "Sylvisch", "Leerensprache"],
    umgebung: ["Feenwildnis", "Wald"],
    bild: "assets/images/monster/tome-of-beasts/aridni.png",
    beschreibung: [
      "Sowohl widerstandsfähiger als auch skrupelloser als gewöhnliche Pixies sind die Aridni eine besonders gierige Art von Feen-Räubern und Entführern.",
      "Blasse Bogenschützen. Diese aschfahlen Feen mit grauen Mottenflügeln schießen grün leuchtende Pfeile mit einem Grinsen und einem Fluch. Aridni bevorzugen wann immer möglich den Fernkampf und sind nur schwer in den Nahkampf zu locken. Manchmal nehmen sie eine persönliche Herausforderung an oder reagieren auf Anschuldigungen der Feigheit.",
      "Karawanenräuber. Sie haben verschiedene magische Fähigkeiten entwickelt, die ihnen beim Überfallen von Karawanen helfen, um Gefangene für die Sklaverei zu erbeuten und zu verkaufen; Feinde in die Sklaverei zu bezaubern ist eine beliebte Taktik.",
      "Reichtum für Status. Sie erfreuen sich daran, Menschen und Zwergen Beute zu rauben – nicht so sehr des Reichtums wegen, sondern als Zeichen ihrer Macht über Sterbliche und ihrer Verachtung für jene, denen das Feenblut fehlt."
    ],
    besonderheiten: [
      { name: "Vorbeifliegen", beschreibung: "Der Aridni provoziert keinen Gelegenheitsangriff, wenn er aus der Reichweite eines Feindes fliegt." },
      { name: "Magieresistenz", beschreibung: "Der Aridni hat Vorteil auf Rettungswürfe gegen Zaubersprüche und andere magische Effekte." },
      { name: "Angeborene Zauberei", beschreibung: "Die angeborene Zauberfähigkeit des Aridni ist Charisma (Zauber-SG 14). Er kann folgende Zauber angeboren wirken:\nNach Belieben: Tanzende Lichter, Magie entdecken, Unsichtbarkeit\n3/Tag: Person bezaubern, Feenfeuer, Magische Rüstung\n1/Tag: Dornenfeld" }
    ],
    aktionen: [
      { name: "Kurzschwert", beschreibung: "Nahkampfwaffenangriff: +8 auf Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W6 + 5) Stichschaden." },
      { name: "Feenbogen", beschreibung: "Fernkampfwaffenangriff: +8 auf Treffen, Reichweite 12 m/48 m, ein Ziel. Treffer: 7 (1W4 + 5) Stichschaden." },
      { name: "Versklavungspfeile", beschreibung: "Ein Aridni kann zusätzlich zum normalen Schaden seiner Pfeile einen magischen Effekt hinzufügen. Falls er dies tut, wählt er einen der folgenden Effekte:\n• Verwirrung. Das Ziel muss einen Weisheits-Rettungswurf (SG 14) bestehen oder wird für 2W4–1 Runden verwirrt (wie der Zauber).\n• Furcht. Das Ziel muss einen Weisheits-Rettungswurf (SG 14) bestehen oder wird für 2W4 Runden verängstigt.\n• Schreckliches Gelächter. Das Ziel muss einen Weisheits-Rettungswurf (SG 14) bestehen oder wird für 2W4 Runden handlungsunfähig. Während es handlungsunfähig ist, liegt es am Boden und lacht unkontrollierbar.\n• Schlaf. Das Ziel muss einen Weisheits-Rettungswurf (SG 14) bestehen oder schläft für 2W4 Minuten ein. Die Kreatur erwacht, wenn sie Schaden erleidet oder wenn eine andere Kreatur eine Aktion aufwendet, um sie zu wecken." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Arx",
    art: "Unhold",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Rechtschaffen böse",
    cr: 9,
    xp: 5000,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 171,
    tp_wuerfel: "18W10+72",
    bewegung: { "Gehen": "9 m", "Fliegen": "6 m" },
    attribute: { STR: 20, DEX: 8, CON: 19, INT: 11, WIS: 15, CHA: 8 },
    rettungswuerfe: { STR: 9 },
    fertigkeiten: { "Athletik": 9, "Wahrnehmung": 6 },
    schadensresistenzen: ["Kälte", "Feuer", "Blitz", "Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 27 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Abyssisch", "Infernalisch", "Telepathie 18 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/tome-of-beasts/arx.png",
    beschreibung: [
      "Arexe sind teuflische Kreaturen, die anderen Dämonen als mobile Feldverteidigungen dienen. Sie können ihre Elytren – die gehärteten Schalen, die ihre Flügel bedecken – ablösen, um Kommandeuren Deckung zu verschaffen, die ihre Armeen von der vorderen Linie aus befehligen möchten. Sie nutzen ihre Telepathie und ausgezeichnete Sicht, um diesen Anführern genaue Schlachtfeldübersichten zu liefern, die damit Truppen dirigieren und Angriffe von hinter der Arxmauer aus leiten.",
      "Anheuerbarer Söldner. Wenn sie nicht für Legionen von Teufeln oder Dämonen kämpfen, nehmen Arexe bereitwillig Bezahlung für ihre Dienste an. Sie sind standhafte Kämpfer, die Befehle zuverlässig befolgen, zeigen jedoch kein Interesse daran, einzelne Verbündete über größere taktische Vorteile zu stellen."
    ],
    besonderheiten: [
      { name: "Unveränderliche Gestalt", beschreibung: "Der Arx ist immun gegen Zauber oder Effekte, die seine Form verändern würden." },
      { name: "Magieresistenz", beschreibung: "Der Arx hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte." },
      { name: "Stachelige Haut", beschreibung: "Eine Kreatur, die den Arx berührt oder ihn im Nahkampf trifft, während sie sich innerhalb von 1,5 m befindet, erleidet 4 (1W8) Stichschaden. Diese Eigenschaft gilt auch für die Wände des Arx." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Arx führt zwei Klauenattacken und einen Speerwurf aus." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 18 (3W8 + 5) Hiebschaden." },
      { name: "Speer", beschreibung: "Nah- oder Fernkampfwaffenangriff: +9 zum Treffen, Reichweite 1,5 m oder Reichweite 6/18 m, ein Ziel. Treffer: 12 (2W6 + 5) Stichschaden, oder 14 (2W8 + 5) Stichschaden, wenn er mit zwei Händen als Nahkampfangriff eingesetzt wird." },
      { name: "Mauersmash", beschreibung: "Wenn der Arx seine Mauer aufgestellt hat (siehe Mauer errichten), kann er die Platten kurz aufeinanderklappen. Jede Kreatur außer dem Arx, die sich zwischen den Platten in einem 3-m-Kegel von der Ecke befindet, wo die Platten zusammentreffen, muss einen SG-16-Geschicklichkeitsrettungswurf ablegen und erleidet bei einem Fehlschlag 28 (8W6) Wuchtschaden, bei einem Erfolg die Hälfte." }
    ],
    bonusaktionen: [
      { name: "Mauer errichten (Aufladen 3–6)", beschreibung: "Der Arx streckt seine gehärteten Elytren aus und rammt sie in den Boden, wodurch eine Mauer entsteht. Die Mauer ist 7,5 cm dick und besteht aus zwei 3×3-m-Platten. Die Platten müssen senkrecht zueinander stehen und bilden so eine Ecke hinter dem Arx. Befindet sich die Mauer beim Aufstellen im Bereich einer Kreatur, muss diese einen SG-16-Geschicklichkeitsrettungswurf ablegen. Bei einem Fehlschlag erleidet die Kreatur 10 (3W6) Wuchtschaden, und der Arx bestimmt, auf welche Seite der Mauer sie gestoßen wird. Bei einem Erfolg erleidet die Kreatur die Hälfte des Schadens und entscheidet selbst, auf welche Seite sie gedrückt wird.\nJede 3-m-Platte hat RK 17 und 50 Trefferpunkte. Wird eine Platte zerstört, kann der Arx mit dieser Bonusaktion nur noch eine Platte aufstellen. Werden beide Platten zerstört, kann er diese Bonusaktion nicht mehr nutzen, bis er eine lange Rast beendet oder seine Elytren durch einen Regeneration-Zauber oder ähnliche Magie wiederhergestellt werden.\nSolange der Arx mindestens eine Mauer aufgestellt hat, muss er innerhalb von 4,5 m zu mindestens einer seiner Wände bleiben. Der Arx kann die Wände in seinen Körper zurückziehen und diesen Effekt so als Bonusaktion beenden." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Asanbosam",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 5,
    xp: 1800,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 102,
    tp_wuerfel: "12W10+36",
    bewegung: { "Gehen": "12 m", "Klettern": "4,5 m" },
    attribute: { STR: 18, DEX: 13, CON: 17, INT: 11, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Akrobatik": 4, "Wahrnehmung": 3, "Heimlichkeit": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Riesisch"],
    umgebung: ["Wald", "Dschungel"],
    bild: "assets/images/monster/tome-of-beasts/asanbosam.png",
    beschreibung: [
      "Ein Asanbosam ist ein haariger Koloss mit hervorstehenden, blutunterlaufenen Augen, der oft hoch in einem Baum sitzt und bereit ist, unvorsichtige Passanten mit Klauen wie rostige Haken zu greifen.",
      "Eisenhaken und Reißzähne. Von der Taille aufwärts ähneln sie haarigen Ogers, haben jedoch muskulöse und flexible Beine, die viel länger als die eines Ogers sind. Diese seltsamen Gliedmaßen enden in Füßen mit hakenartigen Klauen, und sowohl die Haken als auch die Reißzähne bestehen aus Eisen statt aus Knochen oder anderem organischen Material. Diese Eisenreißzähne und -klauen zeigen das Alter eines Asanbosam an – nicht nur durch ihre Größe, sondern auch durch ihre Farbe. Die jüngsten Exemplare haben glänzende graue Haken und Reißzähne, während ältere verfärbte und rostige haben.",
      "Eisenfresser. Die Ernährung des Asanbosam umfasst Eisen aus rotem Fleisch, Geflügel, Fisch und Blattgemüse – und in Zeiten der Not das Abraspeln von Eisenspänen von den eigenen Haken, um ihre Gelüste zu stillen. Die Vorliebe der Asanbosam für frisches Blut und Humanoidenfleisch führte zur Volksüberlieferung, dass sie vampirisch seien (was nicht zutrifft).",
      "Baumlager. Asanbosam verbringen den Großteil ihres Lebens in Bäumen, wo sie nistähnliche Häuser oder Plattformen aus Seilen und rauen Planken errichten. Sie fürchten keine Magie; die meisten Stämme haben mindestens einen Zauberkundigen unter ihren Mitgliedern."
    ],
    besonderheiten: [
      { name: "Spinnenkletterei", beschreibung: "Der Asanbosam kann schwierige Oberflächen erklimmen, einschließlich kopfüber an Decken, ohne einen Fähigkeitswurf ablegen zu müssen." },
      { name: "Baumartig", beschreibung: "Während er sich in Bäumen befindet, kann der Asanbosam die Aktion Lösen oder Verstecken als Bonusaktion in seinem Zug nutzen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Asanbosam führt einen Bissangriff und einen Klauangriff durch." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 15 (2W10 + 4) Stichschaden. Ist das Ziel eine Kreatur, muss es einen KON-Rettungswurf (SG 14) gegen Krankheit bestehen. Misslingt der Rettungswurf, erleidet das Ziel sofort 11 (2W10) Giftschaden und wird vergiftet, bis die Krankheit geheilt wird. Alle 24 Stunden muss die Kreatur den Rettungswurf wiederholen und bei einem Fehlschlag ihr Trefferpunktmaximum um 5 (1W10) reduzieren. Diese Reduzierung bleibt bestehen, bis die Krankheit geheilt wird. Die Kreatur stirbt, wenn die Krankheit ihr Trefferpunktmaximum auf 0 reduziert." },
      { name: "Klauen", beschreibung: "Nahkampfwaffenangriff: +7 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 20 (3W10 + 4) Stichschaden, und das Ziel ist gepackt (Entkommen SG 14). Bis zum Ende des Ringkampfs ist das Ziel festgesetzt und der Asanbosam kann kein anderes Ziel mit seinen Klauen angreifen. Ist das Ziel eine Kreatur, muss es einen KON-Rettungswurf (SG 14) gegen Krankheit bestehen oder sich die im Bissangriff beschriebene Krankheit zuziehen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Aschenläufer",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 1,
    xp: 200,
    rk: 12,
    ruestungstyp: null,
    tp: 31,
    tp_wuerfel: "7W8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 13, DEX: 15, CON: 10, INT: 7, WIS: 10, CHA: 6 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["versteht alle Sprachen, die er im Leben kannte, kann aber nicht sprechen"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "assets/images/monster/tome-of-beasts/aschenlaeufer.png",
    beschreibung: [
      "Ashwalker sind das unglückliche Ergebnis von Humanoiden, die durch den Atem eines Drachen an einem Ort voller mächtiger magischer Energie ums Leben kamen. Diese Untoten tauchen oft in Horden auf, nachdem ein Drache eine Stadt dem Erdboden gleichgemacht hat. Obwohl fast zu Asche verbrannt, können viele Aschenläufer noch einige Worte herauspressen – meist Worte des Hasses gegenüber jenen, die dem Schicksal des Aschenläufers entgingen.",
      "Der letzte Atemzug. Obwohl der Atem eines roten Drachen die häufigste Ursache für Aschenläufer ist, können sie durch jeden Drachenatem entstehen. Die magische Aufladung des Drachen, der das Individuum tötet, hinterlässt eine ähnliche Energieart in den Überresten. So verströmt etwa ein durch Giftatem getöteter Aschenläufer oft giftige Wolken, während er durch die Ödnis seiner zerstörten Heimat wandelt.",
      "Ungelebte Träume. Aschenläufer haben im Untotsein keinen Zweck und dienen selten einem Meister. Manchmal vollziehen sie eine traurige Nachahmung ihres früheren Lebens und spielen die letzten Stunden vor ihrem Tod durch – ohne sich vollständig bewusst zu sein, was geschehen ist. Manche kehren sogar zu ihren ehemaligen Häusern zurück und legen sich in den Staub schlafen, obwohl der Schlaf nie kommt."
    ],
    besonderheiten: [
      { name: "Atemgeboren", beschreibung: "Der Aschenläufer ist immun gegen einen Schadenstyp, der von der Drachenart abhängt, die ihn getötet hat: Säure (schwarz, kupfer), Kälte (silber, weiß), Feuer (messing, gold, rot), Blitz (blau, bronze) oder Gift (grün)." },
      { name: "Atemausbruch", beschreibung: "Eine Kreatur, die den Aschenläufer berührt oder ihn im Nahkampf innerhalb von 1,5 m trifft, erleidet 3 (1W6) Schaden des in der Eigenschaft 'Atemgeboren' genannten Typs." },
      { name: "Letzter Atemzug", beschreibung: "Wenn der Aschenläufer zum ersten Mal auf 0 Trefferpunkte reduziert wird, sinkt er stattdessen auf 1 TP, und sein Drachenatem lädt sich automatisch auf. Der Aschenläufer verwandelt sich in rohe Energie des in der Eigenschaft 'Atemgeboren' genannten Typs. In dieser Energieform ist er immun gegen allen Schaden und kann weder gegriffen noch festgehalten werden. Am Ende seines nächsten Zuges wird er vernichtet." },
      { name: "Natur des Untoten", beschreibung: "Der Aschenläufer benötigt keine Luft, keine Nahrung, kein Wasser und keinen Schlaf." }
    ],
    aktionen: [
      { name: "Schlag", beschreibung: "Nahkampfwaffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W6 + 2) Wuchtschaden plus 3 (1W6) Schaden des in der Eigenschaft 'Atemgeboren' genannten Typs." },
      { name: "Drachenatem (Aufladen 6)", beschreibung: "Der Aschenläufer atmet Elementarenergie in einem 4,5-m-Kegel aus. Jede Kreatur im Bereich muss einen KON-Rettungswurf (SG 12) ablegen und erleidet bei einem Fehlschlag 14 (4W6) Schaden des in der Eigenschaft 'Atemgeboren' genannten Typs, bei einem Erfolg die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Azza-Gremlin",
    art: "Feenwesen",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Neutral",
    cr: 0.25,
    xp: 50,
    rk: 14,
    ruestungstyp: null,
    tp: 7,
    tp_wuerfel: "2W6",
    bewegung: { "Gehen": "3 m", "Fliegen": "12 m (schwebend)" },
    attribute: { STR: 5, DEX: 18, CON: 10, INT: 12, WIS: 13, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Blitz", "Donner"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Gemein", "Ursprünglich"],
    umgebung: ["Feenwildnis", "Gebirge"],
    bild: "assets/images/monster/tome-of-beasts/azza-gremlin.png",
    beschreibung: [
      "Diese kleinen, haarlosen, spindeldürren Kreaturen knistern vor statischer Elektrizität. Lichtbögen aus Blitzen schnappen zwischen ihren langen Ohren hin und her.",
      "Blitzliebhaber. Azza-Gremlins leben in Gewitterwolken, blitzbasierter Maschinerie und anderen Orten mit reichlich Blitz.",
      "Magnetischer Flug. Obwohl flügellos, sind ihre leichten Körper perfekt auf elektromagnetische Felder abgestimmt und verleihen ihnen Auftrieb und Flugfähigkeit. Sie lieben es, in Gewittern zu spielen und Blitze zwischen den Wolken oder zwischen Wolken und dem Boden zu reiten. Sie ernähren sich von Blitzen und sehen gerne deren Wirkung auf andere Kreaturen.",
      "Zusammenarbeit mit Zauberkundigen. Obwohl sie für sich allein kaum mehr als gefährliche Schädlinge sind, arbeiten bösartigere Kreaturen und Zauberkundige, die Blitze als Waffe einsetzen, mit Azza-Gremlins zusammen, um ihre eigene Zerstörungskraft zu verstärken.",
      "Azza-Gremlins sind 30 bis 45 cm groß und wiegen etwa 3,5 kg."
    ],
    besonderheiten: [
      { name: "Ansteckender Blitz", beschreibung: "Eine Kreatur, die den Azza-Gremlin berührt oder ihn mit einem Nahkampfangriff mit einer Metallwaffe trifft, erhält eine Blitzentladung. Die Kreatur muss einen KON-Rettungswurf (SG 10) bestehen oder zieht für 1 Minute Blitze an. Für die Dauer haben Angriffe, die Blitzschaden verursachen, Vorteil gegen diese Kreatur, die Kreatur hat Nachteil auf Rettungswürfe gegen Blitzschaden und Blitzeffekte, und wenn die Kreatur Blitzschaden erleidet, wird sie bis zum Ende ihres nächsten Zuges gelähmt. Eine betroffene Kreatur wiederholt den Rettungswurf am Ende jedes ihrer Züge und beendet den Effekt bei einem Erfolg." }
    ],
    aktionen: [
      { name: "Blitzstoß", beschreibung: "Nah- oder Fernkampfzauberangriff: +6 zum Treffen, Reichweite 1,5 m oder Reichweite 9 m, eine Kreatur. Treffer: 3 (1W6) Blitzschaden, und das Ziel wird vom Ansteckenden Blitz betroffen." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Den Blitz reiten", beschreibung: "Der Azza-Gremlin kann sofort entlang eines Blitzstrahls reisen. Wenn er sich innerhalb von 1,5 m eines Blitzeffekts befindet, kann er zu einem beliebigen unbesetzten Ort innerhalb oder bis zu 1,5 m von diesem Blitzeffekt teleportieren." }
    ],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Bagiennik",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch neutral",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 75,
    tp_wuerfel: "10W8+30",
    bewegung: { "Gehen": "9 m", "Schwimmen": "12 m" },
    attribute: { STR: 16, DEX: 18, CON: 16, INT: 9, WIS: 16, CHA: 11 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Gemein"],
    umgebung: ["Gewässer", "Sumpf"],
    bild: "assets/images/monster/tome-of-beasts/bagiennik.png",
    beschreibung: [
      "Mit Schwimmhautklauen, hervorquellenden Augen und zwei Nasenspaltenlöchern, aus denen eine ölige schwarze Substanz sickert, ist die Kreatur nicht ganz hässlich – aber vielleicht wäre sie es, wenn der Großteil von ihr nicht unter einer dicken Schicht Schlamm und Matsch verborgen wäre.",
      "Badende Hässlichkeiten. Wenn ein Bagiennik allein ist, verbringt er seine Zeit damit, in örtlichen Quellen, Flüssen und Sümpfen zu baden. Die Kreatur siebt den Schlamm und Schlick durch und extrahiert Substanzen, die ihre öligen Absonderungen verbessern. Wenn etwas die Kreatur während ihrer trägen Badesitzungen stört, rächt sie sich wütend. Sobald ein Bagiennik vier Stunden lang gebadet hat, sucht er nach einem Ziel für Unfug oder Wohltätigkeit.",
      "Unberechenbare Launen. Man weiß nie, was man von einem Bagiennik erwarten kann. Dieselbe Kreatur könnte einem verletzten Reisenden eines Tages helfen, ihn am nächsten mit ätzend-saurem Öl beschmieren und dann dem verbrannten Opfer seines eigenen psychotischen Verhaltens liebevolle Fürsorge zukommen lassen.",
      "Wenn die Kreatur wohltätig gestimmt ist, heilt sie verletzte Tiere oder sogar kranke oder verletzte Dorfbewohner. Wenn ein Bagiennik ein Dorf besucht, nähern sich Kranke und Gebrechliche ihm vorsichtig, während sich alle anderen verstecken, um seinen Zorn nicht zu provozieren.",
      "Säureöle. Das schwarze Öl eines toten Bagiennik muss innerhalb einer Stunde nach dem Tod der Kreatur gesammelt werden. Eine erfolgreiche WEI-(Medizin)-Probe (SG 15) liefert ein Fläschchen Säure, bei einem Ergebnis von 20 oder höher zwei Fläschchen. Ein Bagiennik kann diese Chemikalien entweder zum Heilen oder zum Schaden einsetzen, aber kein Alchimist oder Heiler hat herausgefunden, wie man die heilenden Effekte reproduziert. Abgesehen von ihrer ätzenden Wirkung verlieren die Absonderungen alle Wirksamkeit, sobald sie vom Bagiennik getrennt werden.",
      "Ein Bagiennik wiegt etwa 115 kg, zuzüglich einer Schlammschicht von 9 bis 23 kg."
    ],
    besonderheiten: [
      { name: "Heilöl", beschreibung: "Ein Bagiennik kann eine sterbende Kreatur automatisch stabilisieren, indem er als Aktion etwas seiner öligen Absonderung auf ihr Fleisch schmiert. Eine ähnliche Anwendung auf eine bereits stabilisierte Kreatur oder eine mit 1 oder mehr Trefferpunkten wirkt wie ein Heiltrank und stellt 2W4 + 2 Trefferpunkte wieder her. Alternativ kann die Absonderung die Wirkung des Zaubers Geringere Wiederherstellung haben. Jede Kreatur, die das Heilöl erhält, muss jedoch einen KON-Rettungswurf (SG 13) bestehen oder wird für 1 Minute verlangsamt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Bagiennik führt zwei Klauangriffe durch." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 18 (4W6 + 4) Hiebschaden." },
      { name: "Säurespray", beschreibung: "Fernkampfwaffenangriff: +6 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 14 (2W10 + 3) Säureschaden. Das Ziel muss einen GES-Rettungswurf (SG 13) bestehen oder auf dem rutschigen Öl, das ein 1,5 m × 1,5 m großes Feld bedeckt, zu Boden stürzen. Eine Kreatur, die das ölige Feld betritt oder ihren Zug darin beendet, muss ebenfalls den Rettungswurf ablegen, um nicht zu Boden zu stürzen. Eine Kreatur muss pro Feld und Zug nur einmal den Rettungswurf ablegen, auch wenn sie das Feld betritt und ihren Zug darin beendet. Der Rutscheffekt hält 3 Runden an." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Baumgreifer",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 3,
    xp: 700,
    rk: 14, ruestungstyp: "natürliche Rüstung",
    tp: 90, tp_wuerfel: "12W8+36",
    bewegung: { "Gehen": "3 m", "Klettern": "12 m" },
    attribute: { STR: 16, DEX: 16, CON: 16, INT: 6, WIS: 10, CHA: 6 },
    rettungswuerfe: {},
    fertigkeiten: { "Akrobatik": 5, "Heimlichkeit": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Wald", "Dschungel"],
    bild: "assets/images/monster/tome-of-beasts/baumgreifer.png",
    beschreibung: [
      "Lange, affenähnliche Arme schlängeln sich wie behaarte Schlangen durch die Bäume und hängen von einem zottigen, gestreiften Affen im belaubten Blätterdach herab, um Kreaturen darunter zu packen.",
      "Ein Baumgreifer ist eine missgestaltete Schöpfung der Götter — ein Primat, dessen Beine sich in lange, muskulöse Tentakel verwandelt haben, die mit zottigem, rotem Fell bedeckt sind.",
      "Beute in die Höhe tragen. Baumgreifer nutzen ihre langen Gliedmaßen, um Beute zu schnappen und hinter sich herzuziehen, während sie mit ihren mächtigen Vorderbeine in die höchste Baumkrone aufsteigen. Ihre Opfer werden eingeschnürt, bis ihr Widerstand aufhört, und dann gefressen. Ihre flexiblen Tentakel sind für die Fortbewegung am Boden schlecht geeignet — sie müssen sich unbeholfen über freies Gelände schleppen, das zu breit ist zum Schwingen.",
      "Clans in den Baumkronen. Baumgreifer-Stämme bauen Familiennester, die mit Knochen und geschätzten Überresten vergangener Jagden dekoriert sind, hoch im Dschungeldach, typischerweise über 24 m über dem Boden. Clans von 40 oder mehr verteilen sich über primitive Dörfer in den Baumkronen; in solch großen Siedlungen ist ein Drittel der Bevölkerung Jugendliche.",
      "Fleischfressende Elfenjäger. Baumgreifer sind Fleischfresser und bevorzugen humanoide Beute, Elfen im Besonderen. Manche vermuten, dass dies ebenso aus Hass wie aus Hunger entsteht — eine grausame Kombination aus Faszination und Abscheu für die laufenden Gliedmaßen humanoider Wesen."
    ],
    besonderheiten: [
      { name: "Spinnenkletterei", beschreibung: "Der Baumgreifer kann schwierige Oberflächen erklimmen, einschließlich kopfüber an Decken, ohne einen Fähigkeitswurf ablegen zu müssen." },
      { name: "Kronenschwingen", beschreibung: "Der Baumgreifer provoziert keinen Gelegenheitsangriff, wenn er sich kletternd aus der Reichweite eines Feindes bewegt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Baumgreifer führt einen Bissangriff und zwei Tentakelangriffe durch." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +5 zum Treffen, Reichweite 1,5 m, eine Kreatur. Treffer: 6 (1W6+3) Stichschaden." },
      { name: "Tentakel", beschreibung: "Nahkampfwaffenangriff: +5 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 10 (2W6+3) Wuchtschaden, und das Ziel ist gepackt (Entkommen SG 13). Bis zum Ende des Ringkampfs ist das Ziel festgesetzt und der Tentakel kann kein anderes Ziel angreifen. Der Baumgreifer hat zwei Tentakel, von denen jeder eine Kreatur packen kann. Wenn der Baumgreifer sich bewegt, kann er ein gepacktes mittelgroßes oder kleineres Ziel mit voller Geschwindigkeit hinter sich herziehen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Grässliche Schönheit",
    art: "Feenwesen",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 11,
    xp: 7200,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 187, tp_wuerfel: "22W8+88",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 17, DEX: 18, CON: 18, INT: 17, WIS: 16, CHA: 26 },
    rettungswuerfe: { GES: 8, KON: 8, CHA: 12 },
    fertigkeiten: { "Täuschung": 12, "Wahrnehmung": 7, "Aufführung": 12, "Überzeugung": 12 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 17,
    sprachen: ["Gemein", "Drakonisch", "Elfisch", "Sylvanisch"],
    umgebung: ["Wald", "Feenwildnis"],
    bild: "assets/images/monster/tome-of-beasts/graessliche_schoenheit.png",
    beschreibung: [
      "Ein überirdisch menschenähnliches Wesen von so unbeschreiblicher Schönheit, dass es jeden schmerzt, sie anzusehen.",
      "Schönheit, die zerstört. Eine grässliche Schönheit ist so vollkommen, dass ihr Blick blendet, ihre Stimme so melodisch ist, dass kein Ohr ihr standhalten kann, und ihre Berührung so verlockend ist, dass sie wie Feuer brennt. Im Jugendalter nimmt dieses Feenwesen Merkmale an, die den oberflächlichen Idealen der nächsten humanoiden Bevölkerung entsprechen: langbeinige Eleganz in der Nähe von Elfen, eine gedrungene Figur mit glänzendem Haar in der Nähe von Zwergen, makellose oder smaragdgrüne Haut in der Nähe von Goblins.",
      "Eifersüchtig und grausam. Grässliche Schönheiten sind so besessen davon, die schönste Kreatur in der Region zu sein, dass sie fast unweigerlich eifersüchtig und paranoid gegenüber potenziellen Rivalen werden. Da eine solche grässliche Schönheit keine Konkurrenz ertragen kann, versucht sie, jeden zu töten, dessen Schönheit mit ihrer eigenen verglichen wird.",
      "Das Männliche der Art. Männliche grässliche Schönheiten sind selten, aber noch eifersüchtiger in ihren Ausbrüchen."
    ],
    besonderheiten: [
      { name: "Brennende Berührung", beschreibung: "Die Schlagangriffe der grässlichen Schönheit verursachen 28 (8W6) Feuerschaden. Eine Kreatur, die sie berührt, erleidet ebenfalls 28 (8W6) Feuerschaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die grässliche Schönheit führt zwei Schlagangriffe durch." },
      { name: "Schlag", beschreibung: "Nahkampfwaffenangriff: +8 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W8+3) Wuchtschaden plus 28 (8W6) Feuerschaden." },
      { name: "Blendender Blick (Aufladung 5-6)", beschreibung: "Eine Kreatur innerhalb von 9 m, die von diesem Angriff getroffen wird und dem Blick der grässlichen Schönheit begegnet, muss einen CHA-Rettungswurf (SG 17) bestehen oder wird dauerhaft geblendet. Wenn der Rettungswurf gelingt, ist das Ziel dauerhaft immun gegen den Blendenden Blick dieser grässlichen Schönheit." },
      { name: "Betäubende Stimme (Aufladung 5-6)", beschreibung: "Jede Kreatur innerhalb von 27 m, die ihre Stimme hören kann, muss einen KON-Rettungswurf (SG 16) bestehen oder wird dauerhaft ertaubt." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Nihileth",
    art: "Untoter",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 12,
    xp: 8400,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 135, tp_wuerfel: "18W10+36",
    bewegung: { "Gehen": "3 m", "Schwimmen": "12 m", "Fliegen": "12 m (schwebend, nur in Ätherform)" },
    attribute: { STR: 21, DEX: 9, CON: 15, INT: 18, WIS: 15, CHA: 18 },
    rettungswuerfe: { KON: 6, INT: 8, WEI: 6 },
    fertigkeiten: { "Geschichte": 12, "Wahrnehmung": 10 },
    schadensresistenzen: [
      "Säure (nur in Ätherform)", "Feuer (nur in Ätherform)", "Blitz (nur in Ätherform)", "Donner (nur in Ätherform)",
      "Wucht (nichtmagisch, nur in Materialform)", "Stich (nichtmagisch, nur in Materialform)", "Hieb (nichtmagisch, nur in Materialform)"
    ],
    schadensimmunitaeten: [
      "Kälte", "Nekrotisch", "Gift",
      "Wucht (nichtmagisch, nur in Ätherform)", "Stich (nichtmagisch, nur in Ätherform)", "Hieb (nichtmagisch, nur in Ätherform)"
    ],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Verängstigt", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Niedergeworfen", "Festgesetzt"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Leerensprache", "Telepathie (36 m)"],
    umgebung: ["Unterirdisch", "Gewässer"],
    bild: "assets/images/monster/tome-of-beasts/nihileth.png",
    beschreibung: [
      "Vor Äonen verließ eine Gruppe von Aboleth die Materielle Ebene, um durch ferne Ebenen zu wandern — sie durch magisches Wahrsagen zu beobachten genügte ihnen nicht, also nutzten diese Aboleth Astralenmagie und körperliche Reisen, um weit über die normalen Bereiche hinauszusehen.",
      "Ein vergessener Stamm. Mit den Äonen verblassten die Erinnerungen an die Abgereisten aus den Geistern der zurückgebliebenen Aboleth. Jene wenigen Aboleth, die sich noch daran erinnerten, dass vor langer Zeit einige ihrer Artgenossen die Ebenen bereist hatten, nahmen an, dass die Wanderer in fernen Höllen oder Paradiesen gestorben sein mussten.",
      "Verändert durch das Ebenenwandern. Die Ebenenwanderer waren nicht gestorben. Stattdessen hatte ihre äonenalte Exposition gegenüber fremden Reichen und dem Raum dazwischen sie verändert — ihre Lebenskraft umstrukturiert und sie zu etwas noch Albtraumhafterem gemacht, das jedoch besser geeignet war, sowohl seltsame Höllen als auch goldene Reiche eldritischen Entzückens zu überstehen.",
      "Diener der Leere. Sie kehrten noch korrupter und mächtiger zurück als sie gegangen waren, und diese wandernden Nihileth kehrten in die Sterblichenwelt zurück mit der Absicht, den Einfluss der Leere und das absolute Böse zu verbreiten, das sie in der gewaltigen Dunkelheit zwischen den Welten gefunden hatten.",
      "Untote Natur. Ein Nihileth benötigt keine Luft, Nahrung, Wasser oder Schlaf."
    ],
    besonderheiten: [
      { name: "Untote Standhaftigkeit", beschreibung: "Wenn Schaden den Nihileth auf 0 Trefferpunkte reduziert, muss er einen KON-Rettungswurf mit SG 5 + dem erlittenen Schaden ablegen, es sei denn, der Schaden ist Strahlenschaden oder stammt von einem kritischen Treffer. Bei einem Erfolg sinkt der Nihileth stattdessen auf 1 Trefferpunkt." },
      { name: "Doppelzustand", beschreibung: "Der Nihileth existiert auf der Materiellen Ebene in einer von zwei Formen und kann nach Belieben zwischen ihnen wechseln. In seiner Materialform hat er Resistenz gegen Schaden durch nichtmagische Waffen. In seiner Ätherform ist er immun gegen Schaden durch nichtmagische Waffen. Die Ätherform erscheint als dunkelviolette Kontur seiner Materialform, mit einem schwärzlich-violetten Dunst darin. Ein Nihileth in Ätherform kann sich durch die Luft bewegen, als wäre sie Wasser, mit einer Fluggeschwindigkeit von 12 m." },
      { name: "Leerenaura", beschreibung: "Der Nihileth ist von einer eisigen Wolke umgeben. Eine lebende Kreatur, die ihren Zug innerhalb von 1,5 m um den Nihileth beginnt, muss einen KON-Rettungswurf (SG 14) bestehen oder ist bis zum Beginn ihres nächsten Zuges verlangsamt. Zusätzlich erleidet jede Kreatur, die durch einen Nihileth oder einen nihiletischen Zombie erkrankt ist, 7 (2W6) Kälteschaden, wenn sie ihren Zug innerhalb der Aura beginnt." },
      { name: "Ansteckende Telepathie", beschreibung: "Wenn eine Kreatur telepathisch mit dem Nihileth kommuniziert oder einen psychischen Angriff gegen ihn einsetzt, kann der Nihileth seine Krankheit auf sie übertragen. Die Kreatur muss einen WEI-Rettungswurf (SG 14) bestehen oder wird mit derselben Krankheit infiziert, die durch den Tentakelangriff des Nihileth verursacht wird." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Nihileth führt drei Tentakelangriffe oder drei Verdorrende Berührungen durch, abhängig von seiner aktuellen Form." },
      { name: "Tentakel (nur Materialform)", beschreibung: "Nahkampfwaffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 12 (2W6+5) Wuchtschaden. Wird das Ziel getroffen, muss es einen KON-Rettungswurf (SG 14) bestehen oder wird krank. Die Krankheit zeigt 1 Minute lang keine Wirkung; in dieser Zeit kann sie durch Leichte Wiederherstellung oder vergleichbare Magie entfernt werden. Nach 1 Minute wird die Haut der erkrankten Kreatur durchscheinend und schleimig. Die Kreatur kann keine Trefferpunkte zurückgewinnen, es sei denn, sie befindet sich vollständig unter Wasser, und die Krankheit kann nur durch Heilen oder vergleichbare Magie entfernt werden. Sofern die Kreatur nicht vollständig untergetaucht oder häufig mit Wasser übergossen wird, erleidet sie alle 10 Minuten 6 (1W12) Säureschaden. Stirbt eine Kreatur, während sie erkrankt ist, erhebt sie sich nach 1W6 Runden als nihiletischer Zombie. Dieser Zombie wird dauerhaft vom Nihileth beherrscht." },
      { name: "Verdorrende Berührung (nur Ätherform)", beschreibung: "Nahkampfwaffenangriff: +8 zum Treffen, Reichweite 3 m, eine Kreatur. Treffer: 14 (3W6+4) Nekrotischer Schaden." },
      { name: "Schwanz (nur Materialform)", beschreibung: "Nahkampfwaffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (3W6+5) Wuchtschaden." },
      { name: "Versklaven (3/Tag)", beschreibung: "Der Nihileth wählt eine Kreatur, die er sehen kann und die sich innerhalb von 9 m befindet. Das Ziel muss einen WEI-Rettungswurf (SG 14) bestehen oder wird vom Nihileth magisch bezaubert, bis der Nihileth stirbt oder sich auf einer anderen Existenzebene als das Ziel befindet. Das bezauberte Ziel steht unter der Kontrolle des Nihileth, kann keine Reaktionen ausführen, und der Nihileth und das Ziel können über jede Distanz telepathisch kommunizieren. Wenn das bezauberte Ziel Schaden erleidet, kann es den Rettungswurf wiederholen. Bei einem Erfolg endet der Effekt. Nicht mehr als einmal alle 24 Stunden kann das Ziel den Rettungswurf auch dann wiederholen, wenn es sich mindestens 1,5 km vom Nihileth entfernt befindet." }
    ],
    bonusaktionen: [
      { name: "Formwechsel", beschreibung: "Der Nihileth wechselt nach Belieben zwischen seiner Materialform und seiner Ätherform." }
    ],
    reaktionen: [
      { name: "Leerenkörper", beschreibung: "Der Nihileth kann den Schaden, den er aus einer einzelnen Quelle erleidet, auf 0 reduzieren. Strahlenschaden kann nur um die Hälfte reduziert werden." }
    ],
    legendaere_aktionen: [
      { name: "Entdecken", beschreibung: "Der Nihileth führt eine Weisheit (Wahrnehmung)-Probe durch." },
      { name: "Schweifhieb", beschreibung: "Der Nihileth führt einen Schwanzangriff durch." },
      { name: "Psychische Entleerung (kostet 2 Aktionen)", beschreibung: "Eine Kreatur, die vom Nihileth bezaubert ist, erleidet 10 (3W6) Psychischen Schaden, und der Nihileth gewinnt Trefferpunkte in Höhe des erlittenen Schadens zurück." }
    ],
    hortaktionen: {
      beschreibung: "Während Aboleth ihre Höhlen unter Wasser einrichten, kann eine Nihileth-Höhle auch außerhalb des Wassers angetroffen werden — oft in einer Höhle oder einer verfallenen, verlassenen Stadt. Bei Initiativewert 20 (Gleichstand verlierend) kann der Nihileth eine Hortaktion wählen, um einen der magischen Effekte wie ein Aboleth zu erzeugen oder die folgende Leerenabsorption zu nutzen. Der Nihileth kann denselben Effekt nicht in zwei aufeinanderfolgenden Runden einsetzen.",
      aktionen: [
        "Leerenabsorption. Der Nihileth zieht die Lebenskraft nihiletischer Zombies innerhalb von 9 m ab, um sich selbst zu heilen. Diese Aktion entzieht den betroffenen Zombies insgesamt 18 (6W6) Trefferpunkte, gleichmäßig auf alle Zombies innerhalb der Reichweite verteilt, und heilt den Nihileth um denselben Betrag. Sinkt ein Zombie dadurch auf 0 Trefferpunkte, stirbt er ohne Rettungswurf für Untote Standhaftigkeit."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die regionalen Effekte einer Nihileth-Höhle entsprechen denen eines Aboleth, mit folgender Ausnahme:",
      effekte: [
        "Wasserquellen innerhalb von 1,5 km um die Höhle des Nihileth sind nicht nur übernatürlich verseucht, sondern können auch die Krankheit des Nihileth verbreiten. Eine Kreatur, die aus solchem Wasser trinkt, muss einen KON-Rettungswurf (SG 14) bestehen oder wird infiziert."
      ]
    },
    source: "Tome of Beasts"
  },
  {
    name: "Nihiletischer Zombie",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 1,
    xp: 200,
    rk: 9, ruestungstyp: "natürliche Rüstung",
    tp: 22, tp_wuerfel: "3W8+9",
    bewegung: { "Gehen": "6 m", "Schwimmen": "9 m" },
    attribute: { STR: 13, DEX: 6, CON: 16, INT: 3, WIS: 6, CHA: 5 },
    rettungswuerfe: { WEI: 0 },
    fertigkeiten: {},
    schadensresistenzen: [
      "Wucht (nichtmagisch, nur in Materialform)", "Stich (nichtmagisch, nur in Materialform)", "Hieb (nichtmagisch, nur in Materialform)"
    ],
    schadensimmunitaeten: [
      "Kälte", "Nekrotisch", "Gift",
      "Wucht (nichtmagisch, nur in Ätherform)", "Stich (nichtmagisch, nur in Ätherform)", "Hieb (nichtmagisch, nur in Ätherform)"
    ],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 8,
    sprachen: ["versteht Leerensprache und die Sprachen, die er zu Lebzeiten kannte, kann aber nicht sprechen"],
    umgebung: ["Unterirdisch", "Gewässer"],
    bild: "assets/images/monster/tome-of-beasts/nihiletischer_zombie.png",
    beschreibung: [
      "Von dem krankhaften Willen der Nihileth erschaffen, führen diese Zombies die Befehle ihres Schöpfers ohne Furcht oder Zögern aus. Obwohl ihr Erscheinungsbild von typischen Zombies abweicht, bewegen sie sich mit denselben ruckartigen Bewegungen und dem ungleichmäßigen Gang wie ihre untoten Artgenossen.",
      "Die Haut und das Fleisch nihiletischer Zombies ist durchscheinend und schleimig. Sie sind gewandte Schwimmer und haben keine Schwierigkeiten, an Land zu funktionieren — stets im Dienst ihrer Meister.",
      "Untote Natur. Ein nihiletischer Zombie benötigt keine Luft, Nahrung, Wasser oder Schlaf."
    ],
    besonderheiten: [
      { name: "Untote Standhaftigkeit", beschreibung: "Wenn Schaden den nihiletischen Zombie auf 0 Trefferpunkte reduziert, muss er einen KON-Rettungswurf mit SG 5 + dem erlittenen Schaden ablegen, es sei denn, der Schaden ist Strahlenschaden oder stammt von einem kritischen Treffer. Bei einem Erfolg sinkt der Zombie stattdessen auf 1 Trefferpunkt." },
      { name: "Doppelzustand", beschreibung: "Wie sein nihiletischer Schöpfer kann der nihiletische Zombie eine Material- oder Ätherform annehmen. In der Materialform hat er Resistenz gegen nichtmagische Waffen. In der Ätherform ist er immun gegen nichtmagische Waffen. Seine Ätherform erscheint als dunkelviolette Kontur seiner Materialform, mit einem schwärzlich-violetten Dunst darin." }
    ],
    aktionen: [
      { name: "Schlag (nur Materialform)", beschreibung: "Nahkampfwaffenangriff: +3 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W6+1) Wuchtschaden, und das Ziel muss einen KON-Rettungswurf (SG 13) bestehen oder wird krank. Die Krankheit zeigt 1 Minute lang kaum Wirkung; in dieser Zeit kann sie durch Segen, Leichte Wiederherstellung oder vergleichbare Magie entfernt werden. Nach 1 Minute wird die Haut der erkrankten Kreatur durchscheinend und schleimig. Die Kreatur kann keine Trefferpunkte zurückgewinnen, es sei denn, sie befindet sich zumindest teilweise unter Wasser, und die Krankheit kann nur durch Heilen oder vergleichbare Magie entfernt werden. Sofern die Kreatur nicht vollständig untergetaucht oder häufig mit Wasser übergossen wird, erleidet sie alle 10 Minuten 6 (1W12) Säureschaden. Stirbt eine Kreatur, während sie erkrankt ist, erhebt sie sich nach 2W6 Runden als nihiletischer Zombie. Dieser Zombie wird dauerhaft von dem Nihileth beherrscht, der den angreifenden Zombie kontrolliert." },
      { name: "Verdorrende Berührung (nur Ätherform)", beschreibung: "Nahkampfwaffenangriff: +3 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W6+1) Nekrotischer Schaden." },
      { name: "Lebensopfer", beschreibung: "Der nihiletische Zombie opfert sich, um einen Nihileth innerhalb von 9 m zu heilen. Alle verbleibenden Trefferpunkte des Zombies werden als Heilung auf den Nihileth übertragen. Der nihiletische Zombie wird auf 0 Trefferpunkte reduziert und führt keinen Rettungswurf für Untote Standhaftigkeit durch. Ein Nihileth kann auf diese Weise nicht über seine maximalen Trefferpunkte hinaus geheilt werden." }
    ],
    bonusaktionen: [
      { name: "Formwechsel", beschreibung: "Der nihiletische Zombie wechselt nach Belieben zwischen seiner Materialform und seiner Ätherform." }
    ],
    reaktionen: [
      { name: "Leerenkörper", beschreibung: "Der nihiletische Zombie kann den Schaden, den er aus einer einzelnen Quelle erleidet, um 1W12 Punkte reduzieren. Diese Reduzierung kann nicht auf Strahlenschaden angewendet werden." }
    ],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Riesige Ameise",
    art: "Tier",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 14, ruestungstyp: "natürliche Rüstung",
    tp: 52, tp_wuerfel: "7W10+14",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 15, DEX: 13, CON: 15, INT: 1, WIS: 9, CHA: 2 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsinn 18 m"],
    passiveWahrnehmung: 9,
    sprachen: [],
    umgebung: ["Wald", "Grasland", "Höhle"],
    bild: "assets/images/monster/tome-of-beasts/riesige_ameise.png",
    beschreibung: [
      "Riesige Ameisen ähneln normalen Ameisen mit sechs Beinen, einem segmentierten Körper und großen Antennen. Ihr Panzer ist mit dickem Chitin bedeckt, und sie haben große, gezackte Mundwerkzeuge und Stacheln am Schwanz. Diese Stacheln sind so groß wie ein Kurzschwert und in der Lage, einen Menschen zu erstechen und zu vergiften. Eine riesige Ameise ist fast 1,2 m groß und wiegt etwa 180 kg.",
      "Kolonieverteidiger. Riesige Ameisen bilden Kolonien unter der Kontrolle einer Königin, ähnlich wie ihre normalgroßen Verwandten. Sterile Weibchen bilden Kasten, wobei die Arbeiterinnen das Nest bauen und Larven pflegen, während Soldaten die Kolonie verteidigen und auf Nahrungssuche gehen.",
      "Beute nach Hause tragen. Riesige Ameisen sind sowohl Raubtiere als auch Aasfresser, die in organisierten Gruppen zusammenarbeiten, um große Beute zu erlegen und zum Nest zu tragen. Sie kommunizieren hauptsächlich über Pheromone, aber auch durch Berührung und Laut."
    ],
    besonderheiten: [
      { name: "Feiner Geruchssinn", beschreibung: "Die riesige Ameise hat Vorteil auf Weisheit (Wahrnehmung)-Proben, die auf dem Geruchssinn beruhen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die riesige Ameise führt einen Bissangriff und einen Stachelangriff durch." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W8+2) Wuchtschaden, und das Ziel ist gepackt (Entkommen SG 12). Bis zum Ende des Ringkampfs ist das Ziel festgesetzt und die riesige Ameise kann kein anderes Ziel beißen." },
      { name: "Stachel", beschreibung: "Nahkampfwaffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W8+2) Stichschaden plus 22 (4W10) Giftschaden, oder halb so viel Giftschaden bei einem erfolgreichen KON-Rettungswurf (SG 12)." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Riesige Ameisenkönigin",
    art: "Tier",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 4,
    xp: 1100,
    rk: 15, ruestungstyp: "natürliche Rüstung",
    tp: 85, tp_wuerfel: "10W10+30",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 17, DEX: 13, CON: 16, INT: 2, WIS: 11, CHA: 4 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsinn 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Wald", "Grasland", "Höhle"],
    bild: "assets/images/monster/tome-of-beasts/riesige_ameisenkoenigin.png",
    beschreibung: [
      "Eine riesige Ameisenkönigin ist über 1,5 m groß und wiegt über 400 kg. Sie ist das reproduktive Zentrum ihrer Kolonie und verlässt das Nest nur selten. Die Königin setzt ständig Pheromone frei, die ihre Soldaten in erhöhte Kampfbereitschaft versetzen."
    ],
    besonderheiten: [
      { name: "Feiner Geruchssinn", beschreibung: "Die riesige Ameisenkönigin hat Vorteil auf Weisheit (Wahrnehmung)-Proben, die auf dem Geruchssinn beruhen." },
      { name: "Königinnenpheromon", beschreibung: "Riesige Ameisen, die eine Königin verteidigen, erhalten Vorteil auf alle Angriffswürfe." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die riesige Ameisenkönigin führt zwei Bissangriffe und einen Stachelangriff durch." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W8+3) Wuchtschaden, und das Ziel ist gepackt (Entkommen SG 13). Bis zum Ende des Ringkampfs ist das Ziel festgesetzt und die Ameisenkönigin kann kein anderes Ziel beißen." },
      { name: "Stachel", beschreibung: "Nahkampfwaffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W8+3) Stichschaden plus 22 (4W10) Giftschaden, oder halb so viel Giftschaden bei einem erfolgreichen KON-Rettungswurf (SG 14)." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
  {
    name: "Verfluchter Schänder",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 4,
    xp: 1100,
    rk: 12, ruestungstyp: null,
    tp: 75, tp_wuerfel: "10W8+30",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 19, DEX: 14, CON: 17, INT: 6, WIS: 15, CHA: 14 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 4, "Heimlichkeit": 4 },
    schadensresistenzen: ["Nekrotisch", "Wucht (nichtmagisch)", "Stich (nichtmagisch)", "Hieb (nichtmagisch)"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 14,
    sprachen: ["versteht eine alte Sprache, kann aber nicht sprechen"],
    umgebung: ["Wüste"],
    bild: "assets/images/monster/tome-of-beasts/verfluchter_schaender.png",
    beschreibung: [
      "Eine hagere Gestalt in einem zerfetzten schwarzen Mantel, umgeben von einer wirbelnden Sandwolke. Dünne Risse durchziehen ihre pergamenttrockene Haut und umrahmen ihre hohlen, schwarzen Augen.",
      "Verflucht zum Wandern und Dürsten. Verfluchte Schänder sind die Überreste eines alten Stammes, der eine heilige Oase entweihte. Als Strafe für ihr Vergehen verfluchten die zornigen Geister den Stamm, für immer durch die Ödnis zu wandern und einen unstillbaren Durst zu stillen. Jeder Schänder trägt einen ausgedörrten Sandsturm in seinen Lungen und in seinen sandgefüllten Adern. Wo immer sie umherstreifen, hinterlassen sie nur die ausgetrockneten Hüllen ihrer Opfer im Sand.",
      "Unaufhörlicher Hass. Die Verzweifelten oder Törichten versuchen manchmal, mit diesen unglückseligen Kreaturen in ihrer archaischen Muttersprache zu sprechen, um ihre Geheimnisse zu erfahren oder ihre Dienste zu erkaufen — doch das Herz eines Schänders ist von Hass und Verzweiflung geschwärzt und lässt keinen Raum für etwas anderes als Elend.",
      "Diener des großen Bösen. In sehr seltenen Fällen dienen verfluchte Schänder bösen Hohepriestern, Fexten oder Seelenpaktmagiern als Leibwächter und eifrige Zerstörer, begierig darauf, die verdorrende Hand der Wüste in neue Länder auszubreiten.",
      "Untote Natur. Ein verfluchter Schänder benötigt keine Luft, Nahrung, Wasser oder Schlaf."
    ],
    besonderheiten: [
      { name: "Verfluchtes Dasein", beschreibung: "Wenn der verfluchte Schänder in Wüstengelände auf 0 Trefferpunkte sinkt, zerfällt sein Körper zu Sand und einem plötzlichen, ausgedörrten Windhauch. Sofern er nicht an einem geweihten Ort, durch Strahlenschaden oder durch eine gesegnete Kreatur getötet wurde, formt er sich beim nächsten Sonnenuntergang 1W100 Meilen entfernt in einer zufälligen Richtung neu." },
      { name: "Sandschleier", beschreibung: "Ein kleiner Sandsturm wirbelt ständig um den verfluchten Schänder in einem Radius von 3 m. Dieser Bereich ist für alle Kreaturen außer verfluchten Schändern leicht verdeckt. Weisheit (Überleben)-Proben, um die Spuren eines verfluchten Schänders oder anderer Kreaturen, die in seinem Sandschleier reisten, zu verfolgen, werden mit Nachteil durchgeführt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der verfluchte Schänder führt zwei Schlagangriffe durch." },
      { name: "Schlag", beschreibung: "Nahkampfwaffenangriff: +6 zum Treffen, Reichweite 1,5 m, eine Kreatur. Treffer: 11 (2W6+4) Wuchtschaden. Wird eine Kreatur in derselben Runde zweimal von diesem Angriff getroffen (durch denselben oder verschiedene verfluchte Schänder), muss das Ziel einen KON-Rettungswurf (SG 13) bestehen oder erhält eine Stufe Erschöpfung." },
      { name: "Sandhieb (Aufladung 5-6)", beschreibung: "Der verfluchte Schänder verstärkt den Sandstrudel um sich herum. Alle Kreaturen innerhalb von 3 m erleiden 21 (6W6) Hiebschaden, oder die Hälfte bei einem erfolgreichen GES-Rettungswurf (SG 14)." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Tome of Beasts"
  },
];
