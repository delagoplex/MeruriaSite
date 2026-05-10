window.MONSTER_DATA_SCHATZKAMMER_DER_DRACHEN = [
  {
    name: "Ältestengehirn-Drache",
    art: "Aberration",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Normalerweise rechtschaffen böse",
    cr: 22,
    xp: 41000,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 350,
    tp_wuerfel: "20W20+140",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m (Schweben)" },
    attribute: { STR: 27, DEX: 13, CON: 25, INT: 21, WIS: 19, CHA: 24 },
    rettungswuerfe: { KON: 14, INT: 12, WEI: 11, CHA: 14 },
    fertigkeiten: { "Arkane Kunde": 12, "Motiv erkennen": 18, "Wahrnehmung": 18 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Blindsicht 36 m"],
    passiveWahrnehmung: 28,
    sprachen: ["Drakonisch", "Tiefensprache", "Telepathie auf 8 km"],
    umgebung: ["Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/aeltestengehirn-drache.png",
    beschreibung: [
      "Eine Gedankenschinderkolonie in der Nachbarschaft ist keine Kleinigkeit. Trostreich ist allenfalls, dass ihr Einfluss sich nicht weiter erstreckt als der ihres Ältestengehirns. Auch dieser Umstand ist Makulatur, wenn es der Kolonie gelingt, einen Drachen zu fangen. Die Gedankenschinder arbeiten zusammen, um den Drachen zu fesseln und einer grausigen Verwandlung zu unterziehen, indem das Ältestengehirn sich auf den Drachenrücken setzt und seine Tentakel ins Drachenhirn versenkt. Das albtraumhafte Ergebnis ist ein Ältestengehirn-Drache.",
      "Befreit aus dem Gefängnis seines Hirnbads und mit der Beweglichkeit des Drachenkörpers kann das Ältestengehirn als mächtiger General in Illithidenarmeen dienen. Der Ältestengehirn-Drache ist nicht nur eine physische, sondern auch eine psychische Gefahr voller aberranter und psionischer Kraft. Auch die Odemwaffe des Drachen mutiert bei seiner Verwandlung und wird zu einem Strom von Hirnflüssigkeit voller Illithidenlarven. Diese Larven können ihre Opfer rasch töten und zu Gedankenschindern machen, sodass der Ältestengehirn-Drache nicht lange braucht, um seine eigene Kolonie zu gründen und mit sich zu führen."
    ],
    besonderheiten: [
      { name: "Belagerungsmonster", beschreibung: "Der Drache fügt Objekten und Strukturen doppelten Schaden zu." },
      { name: "Legendäre Resistenz (4/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Ungewöhnliche Natur", beschreibung: "Der Drache muss nicht atmen oder schlafen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff, zwei Klaueangriffe und einen Tentakelangriff aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 19 (2W10+8) Stichschaden plus 11 (2W10) psychischer Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 11 (1W6+8) Hiebschaden." },
      { name: "Tentakel", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 4,5 m, eine Kreatur. Treffer: 12 (1W8+8) psychischer Schaden. Wenn das Ziel eine höchstens riesige Kreatur ist, wird es gepackt (Befreiung SG 18). Der Drache kann bis zu vier Ziele zugleich gepackt halten." },
      { name: "Larvenbrühenodem", beschreibung: "Aufladung 5–6. Der Drache stößt Brühe in einer 36 Meter langen, 4,5 Meter breiten Linie aus. Jede Kreatur in dem Bereich muss einen Konstitutionsrettungswurf gegen SG 22 ausführen. Bei Misserfolg erleidet sie 55 (10W10) psychischen Schaden, andernfalls die Hälfte. Unabhängig vom Rettungswurf wird die Kreatur mit Illithidenlarven infiziert, sofern sie kein Konstrukt oder Untoter ist. Infizierte Kreaturen erleiden zu Beginn jedes ihrer Züge 16 (3W10) psychischen Schaden. Sie kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt nach dreimaligem Erfolg beenden. Wenn die Kreatur das Ziel von Magie zum Brechen von Flüchen ist oder mindestens 40 Trefferpunkte regeneriert, sterben die Larven sofort und ihre Wirkkraft endet. Wenn die Trefferpunkte eines infizierten Humanoiden auf 0 verringert werden, ist die Kreatur stabil, bleibt aber 6W12 Stunden lang bewusstlos. Endet die Bewusstlosigkeit, verwandelt sich die Kreatur in einen Gedankenschinder mit all seinen Trefferpunkten. Wird der Zauber Wunsch auf die bewusstlose Kreatur gewirkt, endet der Befall, und sie verwandelt sich nicht in einen Gedankenschinder." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Tentakel", beschreibung: "Der Drache führt einen Tentakelangriff aus." },
      { name: "Konzentration zerschmettern (kostet 2 Aktionen)", beschreibung: "Der Drache zielt auf eine Kreatur, die er gepackt hält. Die Konzentration des Ziels auf einen gewirkten Zauber oder ein Attribut endet, und das Ziel erleidet 19 (3W12) psychischen Schaden." }
    ],
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Amethystdrachennestling",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Mittelgroß",
    gesinnung: "Normalerweise neutral",
    cr: 4,
    xp: 1100,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 75,
    tp_wuerfel: "10W8+30",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m (Schweben)", "Schwimmen": "9 m" },
    attribute: { STR: 19, DEX: 10, CON: 17, INT: 16, WIS: 13, CHA: 17 },
    rettungswuerfe: { GES: 2, KON: 5, WEI: 3, CHA: 5 },
    fertigkeiten: { "Arkane Kunde": 7, "Heimlichkeit": 2, "Überzeugen": 5, "Wahrnehmung": 5 },
    schadensresistenzen: ["Energie", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Liegend", "Verängstigt"],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Drakonisch", "Telepathie auf 36 m"],
    umgebung: ["Höhle", "Gewässer"],
    bild: "assets/images/monster/schatzkammer/amethystdrachennestling.png",
    beschreibung: [
      "Amethystdrachen, die mächtigsten Edelsteindrachen, kennen die Prinzipien des Multiversums von der Schwerkraft bis zu den Ausstrahlungen der äußeren Ebenen und können sie psionisch manipulieren. Ihre natürliche Psionik gibt ihnen eine gewisse Kontrolle darüber, wie stark die physikalischen Gesetze sie betreffen. Sie trotzen der Schwerkraft nicht nur dank ihrer enormen Flügel, und die Gravitation gibt sowohl ihrer verheerenden Odemwaffe als auch den explodierenden Amethystkristallen Kraft, die sie auf ihre Gegner spucken.",
      "Beim Schlüpfen haben Amethystdrachen Schuppen von stumpfem Purpur. Je größer sie werden, desto strahlender und durchscheinender werden ihre Schuppen, Hörner und Flügelmembranen. Die Schuppen von ausgewachsenen Amethystdrachen gleichen tiefvioletten Amethystkristallen, brechen das Licht und scheinen zu leuchten. Im Laufe des Lebens verblassen die Pupillen, sodass die Augen von uralten Exemplaren wie strahlend weiße oder blassviolette Kristallkugeln wirken. Hinter ihren Köpfen schweben Kristallhörner wie Amethystbrocken. Sie werden von telekinetischer Energie gehalten und verändern ihre Position je nach Stimmung des Drachen.",
      "Viele Amethystdrachen sind von der Existenz anderer Welten auf der materiellen Ebene fasziniert, vor allem von den Echos, die manche Drachen in diesen Welten manifestieren können. Außerdem streben sie nach Wissen über die Energien, die von den äußeren Ebenen ausgehen, und studieren die Gezeiten von Gut und Böse, Chaos und Ordnung, damit sie jene beraten können, die so weise sind, auf sie zu hören.",
      "Amethystdrachen sind besonders empfindlich für Durchdringungen des Fernen Reichs mit der materiellen Ebene. Sie hassen die Verderbtheit, die dadurch in die Welt kommt, und sind erbitterte Feinde des Fernen Reichs und aller Kreaturen, die durch dessen Berührung verändert wurden. Seltsamerweise sind sie jedoch fasziniert von Flumphs und mögen sie. Diese Aberrationen stellen sich den Verwüstungen der Gedankenschinder und anderer böser Aberrationen entgegen und erinnern die Amethystdrachen daran, dass man Verbündete auch an den seltsamsten Orten finden kann.",
      "Amethystdrachen sammeln nicht nur materiellen Reichtum, sondern auch Wissen und magische Verfahrensweisen über die Natur der Ebenen der Existenz, der kosmischen Energien und ferner Welten. Sie lieben Schätze aus verschiedenen Welten der materiellen Ebene, besonders magische Gegenstände und Kunstwerke, welche die Einmaligkeit der verschiedenen Welten symbolisieren. Meist bilden magische Gegenstände, welche Teleportation oder Reisen zwischen den Ebenen gestatten, Zauberbücher voller ähnlicher Magie und Abhandlungen über die Natur des Multiversums das Herzstück eines Amethystdrachenschatzes.",
      "Amethystdrachen richten ihre Horte in Höhlen an oder in abgeschiedenen Seen ein. Sie ziehen Höhlen vor, bei denen mindestens ein Eingang unter Wasser steht. Besonders schätzen sie Orte mit einer Mischung aus offenen Bereichen, Verbindungstunneln und Sackgassen, um ihre natürliche und magische Mobilität durch Flug und Teleportation auch in ihren Horten voll zu nutzen."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann Luft und Wasser atmen." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 9 (1W10+4) Stichschaden plus 4 (1W8) Energieschaden." },
      { name: "Odem der Singularität", beschreibung: "Aufladung 5–6. Der Drache erzeugt eine Perle der Gravitation in seinem Maul und entlässt die Energie in einem Kegel von 4,5 Metern. Jede Kreatur in dem Bereich muss einen Stärkerettungswurf gegen SG 13 ausführen. Scheitert der Rettungswurf, erleidet die Kreatur 22 (5W8) Energieschaden, und ihre Bewegungsrate ist bis zum Beginn des nächsten Zugs des Drachen auf 0 verringert. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden, und ihre Bewegungsrate ist nicht verringert." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-13-Zauberrettungswurf): Je 1-mal täglich: Schutz vor Gut und Böse, Tensers schwebende Scheibe, Unsichtbarer Diener." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Aspekt von Bahamut",
    art: "Drache",
    unterart: "Metallisch",
    groesse: "Gigantisch",
    gesinnung: "Rechtschaffen gut",
    cr: 30,
    xp: 155000,
    rk: 23,
    ruestungstyp: "natürliche Rüstung",
    tp: 585,
    tp_wuerfel: "30W20+270",
    bewegung: { "Gehen": "18 m", "Fliegen": "36 m", "Graben": "18 m", "Schwimmen": "18 m" },
    attribute: { STR: 30, DEX: 18, CON: 29, INT: 25, WIS: 28, CHA: 30 },
    rettungswuerfe: { KON: 18, INT: 16, WEI: 18, CHA: 19 },
    fertigkeiten: { "Motiv erkennen": 18, "Überzeugen": 19, "Wahrnehmung": 18 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Blitz", "Feuer", "Gleißend", "Kälte", "Säure", "Hieb-, Stich- und Wuchtschaden durch nicht-magische Angriffe"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Betäubt", "Bezaubert", "Gelähmt", "Taub", "Verängstigt"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m", "Wahrer Blick 36 m"],
    passiveWahrnehmung: 28,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/schatzkammer/aspekt_von_bahamut.png",
    beschreibung: [
      "Bahamut, auch als Platindrache bekannt, ist Schutzherr und Vorfahr der metallischen Drachen. Nach seiner Flucht aus der Ersten Welt fand er in den Sieben Himmeln des Bergs Celestia eine Heimat. Oft wird er zu den Göttern dieser Ebene gezählt. Abenteurer und Drachen huldigen Bahamut, damit dieser Ehre und Gerechtigkeit bewahrt, und sie erflehen Tapferkeit in größter Gefahr. In aussichtslosen Situationen können mächtige Anhänger mit großen Opfern wie Schätzen oder dem eigenen Leben den Gott dazu bringen, einen göttlichen Aspekt zu senden, um die Welt zu retten. Der Aspekt ist eine physische Manifestation des Platindrachen mit seinen Erinnerungen und seinem Willen – und einem gerüttelt Maß seiner formidablen Stärke.",
      "Bahamuts Aspekt verfügt über die gesamte Pracht des Platindrachen und überragt selbst uralte Drachen. Er ist mit Platinschuppen bedeckt und vereint Merkmale verschiedenster Elemente der fünf Arten metallischer Drachen – mancher Gelehrte meint, sie würden bei jeder Manifestation des Aspekts neu kombiniert. Bahamut bereist aber auch oft unerkannt die materielle Ebene. Sein Aspekt könnte sich also auch als alter Zauberer, junger Mönch oder Vogel manifestieren. Bahamuts Aspekt wird unabhängig von der Form oft von sieben uralten Golddrachen begleitet, die sich gerne als Kanarienvögel tarnen.",
      "Im Kampf bekommen seine Gegner die volle Macht seines Urteils zu spüren, während seine Verbündeten von seiner Gnade profitieren. Sein Odem kann fundamentale Zerstörung wie wundersame Heilung wirken, und es gibt nicht viel in der sterblichen Welt, was ihm etwas anhaben könnte."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (5/Tag)", beschreibung: "Wenn sein Rettungswurf scheitert, kann der Aspekt den Wurf in einen Erfolg verwandeln." },
      { name: "Platinbrillanz", beschreibung: "Wird nach einer kurzen oder langen Rast aufgeladen. Wenn die Trefferpunkte des Aspekts auf 0 sinken würden, werden seine aktuellen Gesamttrefferpunkte stattdessen auf 500 zurückgesetzt, seine Odemwaffe wird aufgeladen, und er erhält alle verbrauchten Anwendungen seiner legendären Resistenz zurück. Außerdem kann der Aspekt nun eine Stunde lang die Mythischen Aktionen verwenden. Gib der Abenteuergruppe zusätzlich 155.000 EP (310.000 EP gesamt), wenn sie den Aspekt von Bahamut besiegt, nachdem seine Platinbrillanz erfolgt ist." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Aspekt führt einen Bissangriff, einen Klaueangriff und einen Schwanzangriff aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +19 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 23 (2W12+10) Stichschaden plus 22 (4W10) Energieschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +19 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 21 (2W10+10) Hiebschaden. Wenn das Ziel eine höchstens riesige Kreatur ist, wird es gepackt (Befreiung SG 20) und ist festgesetzt, solange es gepackt ist. Der Aspekt kann nur jeweils eine Kreatur packen." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +19 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 23 (2W12+10) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen Stärkerettungswurf gegen SG 27 bestehen, andernfalls wird es umgestoßen." },
      { name: "Odemwaffe", beschreibung: "Aufladung 5–6. Der Aspekt setzt eine der folgenden Odemwaffen ein: Erhöhender Odem: Der Aspekt atmet die heilenden Winde des Bergs Celestia in einem Kegel von 90 Metern aus. Jede Kreatur nach Wahl des Aspekts in dem Bereich erhält 71 (13W10) Trefferpunkte, und jede Kreatur nach Wahl des Aspekts in dem Bereich, die seit maximal einer Stunde tot ist, wird mit allen Trefferpunkten wiederbelebt. Platinodem: Der Aspekt atmet gleißende Platinflammen in einem Kegel von 90 Metern aus. Jede Kreatur in dem Bereich muss einen Geschicklichkeitsrettungswurf gegen SG 26 ausführen. Bei Misserfolg erleidet sie 66 (12W10) gleißenden Schaden, andernfalls die Hälfte." }
    ],
    bonusaktionen: [
      { name: "Form ändern", beschreibung: "Der Aspekt verwandelt sich magisch in einen beliebigen Humanoiden oder ein Tier. Dabei behält er seine Spielstatistiken abgesehen von der Größe bei. Die Verwandlung endet, wenn der Aspekt sie mit einer Bonusaktion beendet oder seine Trefferpunkte auf 0 sinken." }
    ],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Angriff", beschreibung: "Der Aspekt führt einen Klauen- oder Schwanzangriff aus." },
      { name: "Wütender Biss (kostet 2 Aktionen)", beschreibung: "Der Aspekt führt einen Bissangriff aus. Wenn der Angriff eine Kreatur trifft, muss das Ziel einen Weisheitsrettungswurf gegen SG 27 bestehen, oder es ist bis zum Ende seines nächsten Zugs vom Aspekt verängstigt." }
    ],
    mythische_aktionen: {
      beschreibung: "Wenn das Merkmal Platinbrillanz des Aspekts in der letzten Stunde aktiviert wurde, kann er die folgenden Optionen als legendäre Aktionen verwenden:",
      aktionen: [
        { name: "Celestische Lanzen (kostet 3 Aktionen)", beschreibung: "Der Aspekt beschwört vier riesige Lanzen aus magischer Energie, die an vier Stellen im Abstand von bis zu 45 Metern von ihm nach seiner Wahl zu Boden fallen und verschwinden. Jede Kreatur in einem sechs Meter breiten, 30 Meter hohen Zylinder muss einen Geschicklichkeitsrettungswurf gegen SG 27 bestehen, oder sie erleidet 24 (7W6) Energieschaden. Kreaturen im Wirkungsbereich von mehr als einer Lanze sind nur einmal betroffen." },
        { name: "Celestischer Schild (kostet 2 Aktionen)", beschreibung: "Der Aspekt manifestiert sieben spektrale uralte Golddrachen um sich, die ihn beschützen. Er erhält bis zum Beginn seines nächsten Zugs 77 temporäre Trefferpunkte." }
      ]
    },
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Aspekt von Tiamat",
    art: "Drache",
    unterart: "Chromatisch",
    groesse: "Gigantisch",
    gesinnung: "Chaotisch böse",
    cr: 30,
    xp: 155000,
    rk: 23,
    ruestungstyp: "natürliche Rüstung",
    tp: 574,
    tp_wuerfel: "28W20+280",
    bewegung: { "Gehen": "18 m", "Fliegen": "36 m", "Graben": "18 m", "Schwimmen": "18 m" },
    attribute: { STR: 30, DEX: 14, CON: 30, INT: 21, WIS: 20, CHA: 26 },
    rettungswuerfe: { GES: 11, KON: 19, WEI: 14, CHA: 17 },
    fertigkeiten: { "Einschüchtern": 26, "Wahrnehmung": 23 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Blitz", "Feuer", "Gift", "Kälte", "Säure", "Hieb-, Stich- und Wuchtschaden durch nicht-magische Angriffe"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Betäubt", "Bezaubert", "Blind", "Taub", "Verängstigt", "Vergiftet"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m", "Wahrer Blick 36 m"],
    passiveWahrnehmung: 33,
    sprachen: ["Drakonisch", "Gemeinsprache", "Infernalisch"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/schatzkammer/aspekt_von_tiamat.png",
    beschreibung: [
      "Tiamat, die Drachenmutter und Herrscherin der chromatischen Drachen, schmiedet ihre Ränke aus Avernus, der ersten Ebene der Neun Höllen. Einst eine mächtige Gottheit, wurde sie von Bahamut in eine uralte Rivalität gezwungen und schließlich verbannt. Sie empfängt die Verehrung ihrer Kultisten und der chromatischen Drachen, die ihren Namen beschwören, und sinnt unaufhörlich auf ihre Rückkehr in die Welt. In seltenen Fällen der größten Dunkelheit – durch das Wirken mächtiger Kultisten, enorme Schatzopfer oder die Ausrichtung kosmischer Kräfte – vermag sie einen Aspekt zu senden: eine physische Verkörperung ihrer vernichtenden Macht.",
      "Der Aspekt von Tiamat erscheint als kolossal fünfköpfiger Drache, dessen Schuppen in den fünf Farben der chromatischen Drachen schimmern. Ein Kopf ist schwarz wie Mitternacht und atmet ätzende Säure; ein blauer Kopf knistert vor Blitzen; ein grüner Kopf haucht giftigen Nebel; ein roter Kopf sengt mit loderndem Feuer; und ein weißer Kopf friert die Luft zu einem Hauch aus Eis. Fünf Willen und ein einziger böser Geist – die Drachenmutter höchstpersönlich.",
      "Im Kampf bekommen Tiamats Feinde die volle Wucht ihrer chromatischen Wut zu spüren. Selbst wenn es gelingt, ihre Trefferpunkte auf null zu treiben, entfesselt der Chromatische Zorn eine neue Welle der Vernichtung, während der Aspekt sich selbst wiederbelebt und mit erneuerter Kraft in den Kampf zurückkehrt. Nur die Entschlossensten können eine solche Göttin bezwingen."
    ],
    besonderheiten: [
      { name: "Chromatischer Zorn", beschreibung: "Wird nach einer kurzen oder langen Rast aufgeladen. Wenn die Trefferpunkte des Aspekts auf 0 sinken würden, werden seine aktuellen Gesamttrefferpunkte stattdessen auf 500 zurückgesetzt, seine Odemwaffe wird aufgeladen, und er erhält alle verbrauchten Anwendungen seiner legendären Resistenz zurück. Außerdem kann der Aspekt nun eine Stunde lang die Mythischen Aktionen verwenden. Gib der Abenteuergruppe zusätzlich 155.000 EP (310.000 EP gesamt), wenn sie den Aspekt von Tiamat besiegt, nachdem sein Chromatischer Zorn erfolgt ist." },
      { name: "Legendäre Resistenz (5/Tag)", beschreibung: "Wenn sein Rettungswurf scheitert, kann der Aspekt den Wurf in einen Erfolg verwandeln." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Aspekt führt einen Bissangriff, zwei Klaueangriffe und einen Schwanzangriff aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +19 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 23 (2W12+10) Stichschaden plus 19 (3W12) Schaden des folgenden Typs (nach Wahl des Aspekts): Säure, Kälte, Feuer, Blitz oder Gift." },
      { name: "Chromatische Flammen", beschreibung: "Aufladung 5–6. Der Aspekt wählt einen der folgenden Schadenstypen: Blitz, Feuer, Gift, Kälte oder Säure. Er atmet chromatische Energie in einem Kegel von 27 Metern aus. Jede Kreatur in dem Bereich muss einen Geschicklichkeitsrettungswurf gegen SG 27 ausführen. Bei Misserfolg erleidet sie 71 (11W12) Schaden des gewählten Typs, andernfalls die Hälfte." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +19 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 21 (2W10+10) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +19 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 23 (2W12+10) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen Stärkerettungswurf gegen SG 27 bestehen, andernfalls wird es umgestoßen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Angriff", beschreibung: "Der Aspekt führt einen Klauen- oder Schwanzangriff aus." },
      { name: "Wütender Biss (kostet 2 Aktionen)", beschreibung: "Der Aspekt führt einen Bissangriff aus. Wenn der Angriff eine Kreatur trifft, muss das Ziel einen Weisheitsrettungswurf gegen SG 27 bestehen, oder es ist bis zum Ende seines nächsten Zugs vom Aspekt verängstigt." }
    ],
    mythische_aktionen: {
      beschreibung: "Wenn das Merkmal Chromatischer Zorn des Aspekts in der letzten Stunde aktiviert wurde, kann er die folgenden Optionen als legendäre Aktionen verwenden:",
      aktionen: [
        { name: "Chromatisches Flackern (kostet 3 Aktionen)", beschreibung: "Jede Kreatur im Abstand von bis zu 18 Metern um den Aspekt muss einen Geschicklichkeitsrettungswurf gegen SG 27 ausführen. Bei Misserfolg erleidet sie 39 (6W12) Schaden, andernfalls die Hälfte. Der Aspekt wählt den Schadenstyp (Blitz, Feuer, Gift, Kälte oder Säure), wenn er diese Aktion verwendet." },
        { name: "Wirbel durch Avernus (kostet 2 Aktionen)", beschreibung: "Der Aspekt teleportiert sich magisch bis zu 18 Meter weit an eine Stelle, die er sehen kann. Jede Kreatur im Abstand von bis zu 9 Metern um den Zielpunkt muss einen Charismarettungswurf gegen SG 25 ausführen. Bei Misserfolg erleidet sie 44 (8W10) psychischen Schaden, andernfalls die Hälfte." }
      ]
    },
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Augendrachling",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Normalerweise rechtschaffen böse",
    cr: 8,
    xp: 3900,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 119,
    tp_wuerfel: "14W10+42",
    bewegung: { "Gehen": "0 m", "Fliegen": "9 m (Schweben)" },
    attribute: { STR: 16, DEX: 10, CON: 16, INT: 14, WIS: 14, CHA: 16 },
    rettungswuerfe: { KON: 6, WEI: 5 },
    fertigkeiten: { "Heimlichkeit": 6, "Wahrnehmung": 8 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Liegend"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 18,
    sprachen: ["Drakonisch", "Tiefensprache"],
    umgebung: ["Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/augendrachling.png",
    beschreibung: [
      "Wenn ein Betrachter mit einem Drachen um Macht und Reichtum kämpft, können seine Gedanken an seinen Drachen-Rivalen höchst obsessiv werden und schließlich sogar seine Träume beherrschen. Besteht die Rivalität lange genug, so können diese fiebrigen Träume sich als Augendrachling manifestieren – eine betrachterartige Kreatur mit drakonischen Merkmalen.",
      "Augendrachlinge sehen aus wie geflügelte drakonische Kreaturen ohne Gliedmaßen, denen immer das Maul offensteht. In diesem Maul befindet sich ein großes Auge, das eine odemartige Welle antimagischer Energie absondert. Die Flügel der Kreatur bestehen aus mehreren Augenstielen, die jeweils magische Strahlen verschießen können. Diese vereinen die Aspekte einer Odemwaffe mit denen der Augenstrahlen eines Betrachters.",
      "Sich selbst überlassen, zeigen Augendrachlinge zunehmend das typische Verhalten von Jungdrachen und versuchen, einen Hort einzurichten und einen Schatz aufzubauen. Diesen verteidigen sie instinktiv und kämpfen auf Leben und Tod, wenn sie auch nur die kleinste Kleinigkeit aus ihrem Schatz bedroht sehen."
    ],
    besonderheiten: [
      { name: "Ungewöhnliche Natur", beschreibung: "Der Augendrachling muss nicht essen oder trinken." }
    ],
    aktionen: [
      { name: "Antimagischer Odem (Aufladung 6)", beschreibung: "Der Augendrachling stößt eine Magiewelle in einem Kegel von neun Metern aus. Jede Kreatur in dem Bereich muss einen SG-14-Konstitutionsrettungswurf ausführen. Bei Misserfolg erleidet sie 39 (6W12) Energieschaden, andernfalls die Hälfte. Alle Zauber des 3. oder eines niedrigeren Grades auf Kreaturen und Gegenständen seiner Wahl in dem Bereich werden beendet." },
      { name: "Augenstrahlen", beschreibung: "Der Augendrachling verschießt zufällig drei der folgenden magischen Augenstrahlen (Dopplungen neu würfeln). Jeder Strahl zielt auf eine Kreatur im Abstand von bis zu 18 Metern, die er sehen kann. 1: Froststrahl: Das Ziel muss einen SG-14-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, erleidet es 17 (5W6) Kälteschaden, und seine Bewegungsrate ist bis zum Ende seines nächsten Zugs halbiert. Bei einem erfolgreichen Rettungswurf erleidet das Ziel halb so viel Schaden ohne zusätzliche Effekte. 2: Schwächender Strahl: Das Ziel muss einen SG-14-Konstitutionsrettungswurf bestehen, oder es erleidet 7 (2W6) Schallschaden und ist bis zum Ende seines nächsten Zugs kampfunfähig. 3: Stoßstrahl: Das Ziel muss einen SG-14-Stärkerettungswurf bestehen, oder es erleidet 14 (4W6) Energieschaden und wird bis zu 18 Meter vom Augendrachling weggestoßen. 4: Feuerstrahl: Das Ziel muss einen SG-14-Geschicklichkeitsrettungswurf ausführen. Bei Misserfolg erleidet es 21 (6W6) Feuerschaden, andernfalls die Hälfte. 5: Lähmender Strahl: Das Ziel muss einen SG-14-Konstitutionsrettungswurf bestehen, oder es ist eine Minute lang gelähmt. Das Ziel kann den Rettungswurf am Ende jedes seiner Züge wiederholen und den Effekt bei einem Erfolg beenden. 6: Todesstrahl: Das Ziel muss einen SG-14-Geschicklichkeitsrettungswurf ausführen. Bei Misserfolg erleidet es 28 (8W6) nekrotischen Schaden, andernfalls die Hälfte. Werden die Trefferpunkte durch den Strahl auf 0 verringert, stirbt das Ziel." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 13 (3W6+3) Stichschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Ausgewachsener Amethystdrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Riesig",
    gesinnung: "Normalerweise neutral",
    cr: 16,
    xp: 15000,
    rk: 19,
    ruestungstyp: "natürliche Rüstung",
    tp: 229,
    tp_wuerfel: "17W12+119",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m (Schweben)", "Schwimmen": "12 m" },
    attribute: { STR: 25, DEX: 14, CON: 25, INT: 20, WIS: 17, CHA: 21 },
    rettungswuerfe: { GES: 7, KON: 12, WEI: 8, CHA: 10 },
    fertigkeiten: { "Arkane Kunde": 15, "Heimlichkeit": 7, "Überzeugen": 10, "Wahrnehmung": 13 },
    schadensresistenzen: ["Energie", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Liegend", "Verängstigt"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 23,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Höhle", "Gewässer"],
    bild: "assets/images/monster/schatzkammer/ausgewachsener_amethystdrache.png",
    beschreibung: [
      "Amethystdrachen, die mächtigsten Edelsteindrachen, kennen die Prinzipien des Multiversums von der Schwerkraft bis zu den Ausstrahlungen der äußeren Ebenen und können sie psionisch manipulieren. Ihre natürliche Psionik gibt ihnen eine gewisse Kontrolle darüber, wie stark die physikalischen Gesetze sie betreffen. Sie trotzen der Schwerkraft nicht nur dank ihrer enormen Flügel, und die Gravitation gibt sowohl ihrer verheerenden Odemwaffe als auch den explodierenden Amethystkristallen Kraft, die sie auf ihre Gegner spucken.",
      "Beim Schlüpfen haben Amethystdrachen Schuppen von stumpfem Purpur. Je größer sie werden, desto strahlender und durchscheinender werden ihre Schuppen, Hörner und Flügelmembranen. Die Schuppen von ausgewachsenen Amethystdrachen gleichen tiefvioletten Amethystkristallen, brechen das Licht und scheinen zu leuchten. Im Laufe des Lebens verblassen die Pupillen, sodass die Augen von uralten Exemplaren wie strahlend weiße oder blassviolette Kristallkugeln wirken. Hinter ihren Köpfen schweben Kristallhörner wie Amethystbrocken. Sie werden von telekinetischer Energie gehalten und verändern ihre Position je nach Stimmung des Drachen.",
      "Viele Amethystdrachen sind von der Existenz anderer Welten auf der materiellen Ebene fasziniert, vor allem von den Echos, die manche Drachen in diesen Welten manifestieren können. Außerdem streben sie nach Wissen über die Energien, die von den äußeren Ebenen ausgehen, und studieren die Gezeiten von Gut und Böse, Chaos und Ordnung, damit sie jene beraten können, die so weise sind, auf sie zu hören.",
      "Amethystdrachen sind besonders empfindlich für Durchdringungen des Fernen Reichs mit der materiellen Ebene. Sie hassen die Verderbtheit, die dadurch in die Welt kommt, und sind erbitterte Feinde des Fernen Reichs und aller Kreaturen, die durch dessen Berührung verändert wurden. Seltsamerweise sind sie jedoch fasziniert von Flumphs und mögen sie. Diese Aberrationen stellen sich den Verwüstungen der Gedankenschinder und anderer böser Aberrationen entgegen und erinnern die Amethystdrachen daran, dass man Verbündete auch an den seltsamsten Orten finden kann.",
      "Amethystdrachen sammeln nicht nur materiellen Reichtum, sondern auch Wissen und magische Verfahrensweisen über die Natur der Ebenen der Existenz, der kosmischen Energien und ferner Welten. Sie lieben Schätze aus verschiedenen Welten der materiellen Ebene, besonders magische Gegenstände und Kunstwerke, welche die Einmaligkeit der verschiedenen Welten symbolisieren. Meist bilden magische Gegenstände, welche Teleportation oder Reisen zwischen den Ebenen gestatten, Zauberbücher voller ähnlicher Magie und Abhandlungen über die Natur des Multiversums das Herzstück eines Amethystdrachenschatzes.",
      "Amethystdrachen richten ihre Horte in Höhlen an oder in abgeschiedenen Seen ein. Sie ziehen Höhlen vor, bei denen mindestens ein Eingang unter Wasser steht. Besonders schätzen sie Orte mit einer Mischung aus offenen Bereichen, Verbindungstunneln und Sackgassen, um ihre natürliche und magische Mobilität durch Flug und Teleportation auch in ihren Horten voll zu nutzen."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann Luft und Wasser atmen." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 18 (2W10+7) Stichschaden plus 9 (2W8) Energieschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 11 (1W8+7) Hiebschaden." },
      { name: "Odem der Singularität", beschreibung: "Aufladung 5–6. Der Drache erzeugt eine Perle der Gravitation in seinem Maul und entlässt die Energie in einem Kegel von 27 Metern. Jede Kreatur in dem Bereich muss einen Stärkerettungswurf gegen SG 20 ausführen. Scheitert der Rettungswurf, erleidet die Kreatur 45 (10W8) Energieschaden, und ihre Bewegungsrate ist bis zum Beginn des nächsten Zugs des Drachen auf 0 verringert. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden, und ihre Bewegungsrate ist nicht verringert." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-18-Zauberrettungswurf): Je 1-mal täglich: Flimmern, Magie bannen, Schutz vor Gut und Böse, Verständigung, Wasser kontrollieren." }
    ],
    bonusaktionen: [
      { name: "Form ändern", beschreibung: "Der Drache verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit einer Bonusaktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." },
      { name: "Psychischer Schritt", beschreibung: "Der Drache teleportiert sich magisch in einen freien Bereich im Abstand von bis zu 18 Metern, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Klauen", beschreibung: "Der Drache führt einen Klauenangriff aus." },
      { name: "Psionik (kostet 2 Aktionen)", beschreibung: "Der Drache setzt Psychischer Schritt oder Zauberwirken ein." },
      { name: "Explosiver Kristall (kostet 3 Aktionen)", beschreibung: "Der Drache speit einen Amethysten, der an einer Stelle im Abstand von bis zu 18 Metern explodiert, die der Drache sehen kann. Jede Kreatur im Abstand von bis zu sechs Metern um den Punkt muss einen Geschicklichkeitsrettungswurf gegen SG 20 bestehen, oder sie erleidet 13 (3W8) Energieschaden und wird umgestoßen." }
    ],
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Ausgewachsener Eierdieb",
    art: "Monstrosität",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 52,
    tp_wuerfel: "8W6+24",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m" },
    attribute: { STR: 14, DEX: 20, CON: 16, INT: 3, WIS: 13, CHA: 5 },
    rettungswuerfe: { GES: 8, WEI: 4 },
    fertigkeiten: { "Heimlichkeit": 11, "Wahrnehmung": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 14,
    sprachen: [],
    umgebung: ["Gebirge", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/ausgewachsener_eierdieb.png",
    beschreibung: [
      "Ausgewachsene Exemplare sind salamanderartig und können ihren knolligen Schwanz aufblasen, der dann die Form und Textur eines Dracheneis hat. Mit dieser Mimikry richten sie sich in Nestern ein, die von Drachen oder anderen Kreaturen versorgt werden. Wenn ein Eierdieb entdeckt wird, setzt er Sporen frei, die andere Kreaturen lethargisch machen. Dies ermöglicht ihm die Flucht. In Gefahr kann der Eierdieb seine physische Form magisch verhärten und so selbst den Zorn eines Drachen überstehen."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Eierdieb kann Luft und Wasser atmen." },
      { name: "Falsches Erscheinungsbild", beschreibung: "Wenn der Eierdieb am Anfang des Kampfs bewegungslos ist, so ist er beim Initiativewurf im Vorteil. Wenn eine Kreatur außerdem nicht gesehen hat, dass sich der Eierdieb bewegt oder handelt, muss diese Kreatur einen SG-18-Intelligenzwurf (Nachforschungen) bestehen, um zu erkennen, dass der Eierdieb kein Gegenstand ist. Drachen sind bei diesem Wurf im Nachteil." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Eierdieb führt zwei Stachelrüssel-Angriffe aus und kann seine Sporen der Starre einsetzen, sofern verfügbar." },
      { name: "Sporen der Starre (Aufladung 5–6)", beschreibung: "Der Eierdieb setzt eine Wolke glitzernder blauer Sporen frei. Jede Kreatur im Radius von neun Metern um den Eierdieb muss einen SG-14-Konstitutionsrettungswurf bestehen, oder sie ist eine Minute lang vergiftet. Auf diese Art vergiftete Kreaturen können keine Reaktionen ausführen, und sie können in ihrem Zug entweder eine Aktion oder eine Bonusaktion, aber nicht beides ausführen. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei einem Erfolg beenden. Wenn eine Kreatur ihren Rettungswurf besteht oder der Effekt auf sie endet, ist sie 24 Stunden lang gegen die Sporen der Starre dieses Eierdiebs immun." },
      { name: "Stachelrüssel", beschreibung: "Nahkampf-Waffenangriff: +8 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W6+5) Stichschaden plus 9 (2W8) nekrotischer Schaden, und der Eierdieb erhält Trefferpunkte in Höhe des bewirkten nekrotischen Schadens zurück." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Rasche Anpassung", beschreibung: "Wenn der Eierdieb Schaden erleidet, macht er sich gegen diese Schadensart resistent." }
    ],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Ausgewachsener Kristalldrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Riesig",
    gesinnung: "Normalerweise chaotisch neutral",
    cr: 12,
    xp: 8400,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 172,
    tp_wuerfel: "15W12+75",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Graben": "12 m", "Klettern": "12 m" },
    attribute: { STR: 21, DEX: 12, CON: 21, INT: 18, WIS: 15, CHA: 19 },
    rettungswuerfe: { GES: 5, KON: 9, WEI: 6, CHA: 8 },
    fertigkeiten: { "Heimlichkeit": 9, "Überlebenskunst": 10, "Wahrnehmung": 10 },
    schadensresistenzen: ["Gleißend", "Kälte"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Gebirge", "Höhle"],
    bild: "assets/images/monster/schatzkammer/ausgewachsener_kristalldrache.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 16 (2W10+5) Stichschaden plus 4 (1W8) gleißender Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 9 (1W8+5) Hiebschaden." },
      { name: "Schillernder Odem", beschreibung: "Aufladung 5–6. Der Drache atmet ein brillantes Strahlen in einem Kegel von 18 Metern aus. Jede Kreatur in dem Bereich muss einen SG-17-Konstitutionsrettungswurf ausführen. Bei Misserfolg erleidet sie 40 (9W8) gleißenden Schaden, andernfalls die Hälfte. Der Drache erhält dann 15 temporäre Trefferpunkte durch Verzehr eines Teils der gleißenden Energie." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-16-Zauberrettungswurf): Beliebig oft: Göttliche Führung, Tanzende Lichter. Je 1-mal täglich: Befehl, Hypnotisches Muster, Schwache Genesung, Weissagung." }
    ],
    bonusaktionen: [
      { name: "Form ändern", beschreibung: "Der Drache verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit einer Bonusaktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." },
      { name: "Psychischer Schritt", beschreibung: "Der Drache teleportiert sich magisch in einen freien Bereich im Abstand von bis zu 18 Metern, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Klauen", beschreibung: "Der Drache führt einen Klauenangriff aus." },
      { name: "Psionik (kostet 2 Aktionen)", beschreibung: "Der Drache setzt Psychischer Schritt oder Zauberwirken ein." },
      { name: "Sternenlichtschlag (kostet 3 Aktionen)", beschreibung: "Der Drache schleudert einen sengenden Sternenlichtstrahl auf eine Kreatur im Abstand von bis zu 18 Metern, die er sehen kann. Das Ziel muss einen SG-17-Geschicklichkeitsrettungswurf bestehen, oder es erleidet 31 (9W6) gleißenden Schaden." }
    ],
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Ausgewachsener Mondsteindrache",
    art: "Drache",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Normalerweise neutral",
    cr: 15,
    xp: 13000,
    rk: 19,
    ruestungstyp: "natürliche Rüstung",
    tp: 195,
    tp_wuerfel: "17W12+85",
    bewegung: { "Gehen": "12 m", "Fliegen": "18 m" },
    attribute: { STR: 20, DEX: 18, CON: 20, INT: 22, WIS: 20, CHA: 23 },
    rettungswuerfe: { INT: 11, WEI: 10, CHA: 11 },
    fertigkeiten: { "Heimlichkeit": 9, "Überzeugen": 11, "Wahrnehmung": 10 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Drakonisch", "Elfisch", "Gemeinsprache", "Gnomisch", "Sylvanisch"],
    umgebung: ["Feenwildnis", "Gebirge", "Wald", "Gewässer"],
    bild: "assets/images/monster/schatzkammer/ausgewachsener_mondsteindrache.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 16 (2W10+5) Stichschaden plus 7 (2W6) gleißender Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 12 (2W6+5) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 9 (1W8+5) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-18-Stärkerettungswurf bestehen, andernfalls wird es umgestoßen." },
      { name: "Odemwaffe", beschreibung: "Aufladung 5–6. Der Drache setzt eine der folgenden Odemwaffen ein: Mondlichtodem: Der Drache atmet einen Strahl aus Mondlicht in einer 27 Meter langen, drei Meter breiten Linie aus. Jede Kreatur in dem Bereich muss einen SG-18-Geschicklichkeitsrettungswurf ausführen. Bei Misserfolg erleidet sie 49 (9W10) gleißenden Schaden, andernfalls die Hälfte. Traumodem: Der Drache atmet Nebel in einem Kegel von 27 Metern aus. Jede Kreatur in dem Bereich muss einen SG-18-Konstitutionsrettungswurf bestehen, oder sie ist zehn Minuten lang bewusstlos. Dieser Effekt endet bei einer Kreatur, wenn sie Schaden erleidet oder jemand sie mit einer Aktion aufweckt." },
      { name: "Zauberwirken", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Materialkomponenten und verwendet Charisma als Attribut zum Zauberwirken (SG-19-Zauberrettungswurf): Beliebig oft: Feenfeuer. Je 1-mal täglich: Gefühle besänftigen, Unsichtbarkeit, Wiederbeleben." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Schwanz", beschreibung: "Der Drache führt einen Schwanzangriff aus." },
      { name: "Zauberwirken (kostet 2 Aktionen)", beschreibung: "Der Drache setzt Zauberwirken ein." }
    ],
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Ausgewachsener Saphirdrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Riesig",
    gesinnung: "Normalerweise rechtschaffen neutral",
    cr: 15,
    xp: 13000,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 225,
    tp_wuerfel: "18W12+108",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Graben": "9 m", "Klettern": "12 m" },
    attribute: { STR: 23, DEX: 14, CON: 22, INT: 18, WIS: 17, CHA: 18 },
    rettungswuerfe: { GES: 7, KON: 11, WEI: 8, CHA: 9 },
    fertigkeiten: { "Geschichte": 9, "Heimlichkeit": 7, "Überzeugen": 14, "Wahrnehmung": 13 },
    schadensresistenzen: ["Blitz", "Schall"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 23,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Gebirge", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/ausgewachsener_saphirdrache.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Spinnenklettern", beschreibung: "Der Drache kann ohne Attributswürfe schwierige Oberflächen erklimmen und sich kopfüber an Decken entlang bewegen." },
      { name: "Tunnelbauer", beschreibung: "Der Drache kann sich mit halber Grabbewegungsrate durch massiven Fels graben. Dabei hinterlässt er einen Tunnel mit drei Metern Durchmesser." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden plus 5 (1W10) Schallschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 10 (1W8+6) Hiebschaden." },
      { name: "Schwächender Odem", beschreibung: "Aufladung 5–6. Der Drache stößt einen hohen, fast unhörbaren Tonpuls in einem Kegel von 18 Metern aus. Jede Kreatur in dem Bereich muss einen SG-19-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 44 (8W10) Schallschaden und ist bis zum Ende ihres nächsten Zugs kampfunfähig. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht kampfunfähig." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-17-Zauberrettungswurf): Je 1-mal täglich: Dissonantes Flüstern, Mit Stein verschmelzen, Monster festhalten, Telekinese." }
    ],
    bonusaktionen: [
      { name: "Form ändern", beschreibung: "Der Drache verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit einer Bonusaktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." },
      { name: "Psychischer Schritt", beschreibung: "Der Drache teleportiert sich magisch in einen freien Bereich im Abstand von bis zu 18 Metern, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Klauen", beschreibung: "Der Drache führt einen Klauenangriff aus." },
      { name: "Psionik (kostet 2 Aktionen)", beschreibung: "Der Drache setzt Psychischer Schritt oder Zauberwirken ein." },
      { name: "Telekinetischer Wurf (kostet 3 Aktionen)", beschreibung: "Der Drache wählt ein höchstens kleines Objekt aus, das nicht getragen wird und das er sehen kann, und schleudert es magisch auf eine Kreatur im Abstand von bis zu 18 Metern vom Objekt, die er sehen kann. Das Ziel muss einen SG-17-Geschicklichkeitsrettungswurf bestehen, oder es erleidet 31 (9W6) Wuchtschaden." }
    ],
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Ausgewachsener Smaragddrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Riesig",
    gesinnung: "Normalerweise rechtschaffen neutral",
    cr: 14,
    xp: 11500,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 207,
    tp_wuerfel: "18W12+90",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Graben": "9 m" },
    attribute: { STR: 23, DEX: 12, CON: 21, INT: 18, WIS: 16, CHA: 18 },
    rettungswuerfe: { GES: 6, KON: 10, WEI: 8, CHA: 9 },
    fertigkeiten: { "Arkane Kunde": 9, "Heimlichkeit": 6, "Täuschen": 9, "Wahrnehmung": 13 },
    schadensresistenzen: ["Feuer", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 23,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Gebirge", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/ausgewachsener_smaragddrache.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Tunnelbauer", beschreibung: "Der Drache kann sich mit halber Grabbewegungsrate durch massiven Fels graben. Dabei hinterlässt er einen Tunnel mit 4,5 Metern Durchmesser." },
      { name: "Wahrnehmung verschieben (1-mal täglich)", beschreibung: "Der Drache kann Scheingelände wirken. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (Zauberrettungswurf-SG 17)." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden plus 7 (2W6) psychischer Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 10 (1W8+6) Hiebschaden." },
      { name: "Desorientierender Odem", beschreibung: "Aufladung 5–6. Der Drache atmet eine Woge psychischer Dissonanz in einem Kegel von 18 Metern aus. Jede Kreatur in dem Bereich muss einen SG-18-Intelligenzrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 42 (12W6) psychischen Schaden, und bis zum Ende ihres nächsten Zugs gilt: Wenn sie einen Angriffswurf oder einen Attributswurf ausführt, muss sie einen W6 werfen und das Ergebnis vom Wurf abziehen. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und keine weiteren Effekte." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-17-Zauberrettungswurf): Beliebig oft: Einfache Illusion, Magierhand (die Hand ist unsichtbar). Je 1-mal täglich: Gedanken wahrnehmen, Mächtiges Trugbild, Magie bannen, Unsichtbarkeit." }
    ],
    bonusaktionen: [
      { name: "Form ändern", beschreibung: "Der Drache verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit einer Bonusaktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." },
      { name: "Psychischer Schritt", beschreibung: "Der Drache teleportiert sich magisch in einen freien Bereich im Abstand von bis zu 18 Metern, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Klauen", beschreibung: "Der Drache führt einen Klauenangriff aus." },
      { name: "Psionik (kostet 2 Aktionen)", beschreibung: "Der Drache setzt Psychischer Schritt oder Zauberwirken ein." },
      { name: "Smaragdfunken (kostet 3 Aktionen)", beschreibung: "Der Drache erzeugt tanzende grüne Flämmchen um eine Kreatur im Abstand von bis zu 18 Metern, die er sehen kann. Das Ziel muss einen SG-17-Geschicklichkeitsrettungswurf bestehen, oder es erleidet 31 (9W6) Feuerschaden." }
    ],
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Ausgewachsener Tiefendrache",
    art: "Drache",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Normalerweise neutral böse",
    cr: 11,
    xp: 7200,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 147,
    tp_wuerfel: "14W12+56",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Graben": "9 m", "Schwimmen": "12 m" },
    attribute: { STR: 20, DEX: 14, CON: 18, INT: 16, WIS: 16, CHA: 18 },
    rettungswuerfe: { GES: 6, KON: 8, WEI: 7, CHA: 8 },
    fertigkeiten: { "Heimlichkeit": 10, "Überzeugen": 12, "Wahrnehmung": 7 },
    schadensresistenzen: ["Gift", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 45 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Drakonisch", "Gemeinsprache", "Gemeinsprache der Unterreiche"],
    umgebung: ["Gewässer", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/ausgewachsener_tiefendrache.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 16 (2W10+5) Stichschaden plus 5 (1W10) Giftschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W6+5) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 9 (1W8+5) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-17-Stärkerettungswurf bestehen, andernfalls wird es umgestoßen." },
      { name: "Albtraumodem", beschreibung: "Aufladung 5–6. Der Drache atmet eine Sporenwolke in einem Kegel von 18 Metern aus. Jede Kreatur in dem Bereich muss einen SG-16-Weisheitsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 33 (6W10) psychischen Schaden und ist eine Minute lang vor dem Drachen verängstigt. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und keine weiteren Effekte. Eine verängstigte Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei Erfolg beenden." },
      { name: "Form ändern", beschreibung: "Der Drache verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit seiner Aktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Gebietende Sporen", beschreibung: "Der Drache setzt Sporen um eine Kreatur im Abstand von bis zu neun Metern frei, die er sehen kann. Das Ziel muss einen SG-16-Weisheitsrettungswurf bestehen oder ist gezwungen, seine Reaktion zu nutzen, um einen Nahkampf-Waffenangriff gegen eine zufällig ausgewählte Kreatur innerhalb der Reichweite auszuführen. Wenn sich keine Kreaturen in Reichweite befinden oder das Ziel nicht reagieren kann, erleidet es 5 (1W10) psychischen Schaden." },
      { name: "Schwanz", beschreibung: "Der Drache führt einen Schwanzangriff aus." },
      { name: "Sporensalve (kostet 2 Aktionen)", beschreibung: "Der Drache setzt giftige Sporen um eine Kreatur im Abstand von bis zu neun Metern frei, die er sehen kann. Das Ziel muss einen SG-16-Konstitutionsrettungswurf bestehen, oder es erleidet 17 (5W6) Giftschaden und ist eine Minute lang vergiftet. Eine vergiftete Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei Erfolg beenden." }
    ],
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Ausgewachsener Topasdrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Riesig",
    gesinnung: "Normalerweise chaotisch neutral",
    cr: 13,
    xp: 10000,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 210,
    tp_wuerfel: "20W12+80",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 19, DEX: 12, CON: 19, INT: 18, WIS: 17, CHA: 18 },
    rettungswuerfe: { GES: 6, KON: 9, WEI: 8, CHA: 9 },
    fertigkeiten: { "Einschüchtern": 14, "Heimlichkeit": 6, "Wahrnehmung": 13 },
    schadensresistenzen: ["Kälte", "Nekrotisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 23,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Gewässer", "Küste", "Ozean", "Sumpf"],
    bild: "assets/images/monster/schatzkammer/ausgewachsener_topasdrache.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann Luft und Wasser atmen." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Verarbeitung (1-mal täglich)", beschreibung: "Der Drache kann Verarbeitung wirken. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (2W10+4) Stichschaden plus 3 (1W6) nekrotischer Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W8+4) Hiebschaden." },
      { name: "Dörrender Odem", beschreibung: "Aufladung 5–6. Der Drache atmet gelbliche nekrotische Energie in einem Kegel von 18 Metern aus. Jede Kreatur in dem Bereich muss einen SG-17-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet sie 35 (10W6) nekrotischen Schaden und ist bis zum Ende ihres nächsten Zugs geschwächt. Geschwächte Kreaturen sind bei stärkebasierten Attributs- und Stärkerettungswürfen im Nachteil, und ihre stärkebasierten Waffenangriffe bewirken nur den halben Schaden. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht geschwächt." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-17-Zauberrettungswurf): Je 1-mal täglich: Verderben, Wasser erschaffen oder zerstören, Wasser kontrollieren." }
    ],
    bonusaktionen: [
      { name: "Form ändern", beschreibung: "Der Drache verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit einer Bonusaktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." },
      { name: "Psychischer Schritt", beschreibung: "Der Drache teleportiert sich magisch in einen freien Bereich im Abstand von bis zu 18 Metern, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Klauen", beschreibung: "Der Drache führt einen Klauenangriff aus." },
      { name: "Psionik (kostet 2 Aktionen)", beschreibung: "Der Drache setzt Psychischer Schritt oder Zauberwirken ein." },
      { name: "Essenzielle Reduktion (kostet 3 Aktionen)", beschreibung: "Der Drache zielt auf eine Kreatur oder ein Objekt im Abstand von bis zu 18 Metern, die er sehen kann. Wenn es ein Objekt ist, darf es nicht getragen werden. Das Ziel muss einen SG-17-Konstitutionsrettungswurf bestehen, oder es erleidet 28 (8W6) nekrotischen Schaden. Werden durch diesen Schaden die Trefferpunkte des Ziels auf 0 verringert, so zerfällt es zu Staub." }
    ],
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Belebter Odem",
    art: "Elementar",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Normalerweise neutral böse",
    cr: 6,
    xp: 2300,
    rk: 15,
    ruestungstyp: "natürliche Rüstung (17 in Kälteform)",
    tp: 95,
    tp_wuerfel: "10W10+40",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m (Schweben)" },
    attribute: { STR: 19, DEX: 11, CON: 18, INT: 6, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Blitz", "Feuer", "Gift", "Kälte", "Säure"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bewusstlos", "Erschöpft", "Festgesetzt", "Gelähmt", "Vergiftet", "Versteinert"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Versteht Drakonisch, aber kann nicht sprechen"],
    umgebung: ["Höhle", "Gebirge"],
    bild: "assets/images/monster/schatzkammer/belebter_odem.png",
    beschreibung: [
      "Die Odemwaffe eines chromatischen Drachen ist eine Manifestation der Energie, die den Drachen durchdringt. Mit ausreichend Übung können Drachen lernen, die Magie der Elementarebenen zu nutzen, um ihren Odemwaffen zweibeinige Form zu geben und Elementarkreaturen zu erschaffen – sogenannte animierte Odems. Chromatische Drachen nutzen diese Kreaturen oft als Wächter ihrer Schätze oder schicken sie aus, um Kostbarkeiten von den Territorien jenseits ihrer Horte zu sammeln.",
      "Ein animierter Odem ist eine zweibeinige Kreatur aus derselben Energie wie die Odemwaffe des Drachen, der ihn geschaffen hat. Schöpfungen roter Drachen ähneln Feuerelementaren, die schwarzer Drachen Wasserelementaren, allerdings schleimig und faulig wirkend. Der animierte Giftodem eines grünen Drachen sieht aus wie wabernde Wolken grünen Gases. Der animierte Kälteodem eines weißen Drachen wirkt wie eine wandelnde Eisskulptur, umgeben von frostiger Luft. Blaue Drachen animieren Blitzodem, der dann fortlaufend die Form eines zuckenden Blitzes ändert und auch plötzlich einfach verschwinden und anderswo wieder auftauchen und zuschlagen kann."
    ],
    besonderheiten: [
      { name: "Chromatische Form", beschreibung: "Wenn geschaffen, nimmt der animierte Odem eine von fünf Formen je nach Odemwaffe seines Schöpfers an: Blitz, Feuer, Gift, Kälte oder Säure. Diese Form bestimmt Rüstungsklasse, Schadensresistenz, Merkmale und Angriffe der Kreatur." },
      { name: "Faulige Aura (nur Säure- und Giftformen)", beschreibung: "Kreaturen, die ihren Zug im Abstand von bis zu 1,5 Metern vom animierten Odem beginnen, müssen einen SG-15-Konstitutionsrettungswurf bestehen, oder sie sind bis zum Anfang ihres nächsten Zugs vergiftet. Kreaturen, die den animierten Odem berühren oder mit einem Nahkampfangriff treffen, erleiden 3 (1W6) Säureschaden." },
      { name: "Feueraura (nur Feuerform)", beschreibung: "Zu jedem Zugbeginn des animierten Odems erleidet jede Kreatur im Abstand von bis zu 1,5 Metern 3 (1W6) Feuerschaden, und brennbare Objekte in der Aura, die nicht getragen werden, gehen in Flammen auf. Kreaturen, die den animierten Odem berühren oder mit einem Nahkampfangriff treffen, erleiden 3 (1W6) Feuerschaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der animierte Odem führt zwei Hiebangriffe aus." },
      { name: "Hieb", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W8+4) Wuchtschaden plus 11 (2W10) Schaden nach Wahl des animierten Odems: Blitz, Feuer, Gift, Kälte oder Säure." }
    ],
    bonusaktionen: [
      { name: "Blitzexplosion (nur Blitzform)", beschreibung: "Der animierte Odem teleportiert sich magisch in einen freien Bereich im Abstand von bis zu neun Metern, den er sehen kann. Jede Kreatur im Abstand von bis zu 1,5 Metern vom animierten Odem erleidet nach dessen Teleportation 3 (1W6) Blitzschaden." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Chromatischer Großwyrm",
    art: "Drache",
    unterart: "Chromatisch",
    groesse: "Gigantisch",
    gesinnung: "Normalerweise chaotisch böse",
    cr: 27,
    xp: 105000,
    rk: 22,
    ruestungstyp: "natürliche Rüstung",
    tp: 533,
    tp_wuerfel: "26W20+260",
    bewegung: { "Gehen": "18 m", "Fliegen": "36 m", "Graben": "18 m", "Schwimmen": "18 m" },
    attribute: { STR: 30, DEX: 14, CON: 30, INT: 21, WIS: 20, CHA: 26 },
    rettungswuerfe: { GES: 10, KON: 18, WEI: 13, CHA: 16 },
    fertigkeiten: { "Einschüchtern": 16, "Heimlichkeit": 10, "Wahrnehmung": 21 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Blitz (blau), Feuer (rot), Gift (grün), Kälte (weiß) oder Säure (schwarz) – je nach Farbe des Großwyrms"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m", "Wahrer Blick 36 m"],
    passiveWahrnehmung: 31,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Andere Ebenen", "Gebirge", "Höhle"],
    bild: "assets/images/monster/schatzkammer/chromatischer_grosswyrm.png",
    beschreibung: [
      "Die ältesten unter den uralten chromatischen Drachen sind über zwölfhundert Jahre alt und haben gigantische Schätze im Wert von Millionen Goldmünzen angehäuft. Sie können eine Form der Göttlichkeit erreichen und ähnlich mächtig wie Tiamats gewaltiger Aspekt werden. Doch Drachen sind untereinander ehrgeizige Rivalen, auch Abenteurer stellen ein Risiko dar, und so erreichen die wenigsten Drachen eine solche Stärke. Nur ein chromatischer Drache, der seine Rivalen überlistet und alle potentiellen Diebe aus dem Weg räumt, kann zu einem dieser mächtigsten Drachen werden.",
      "Oft bedeutet der Aufstieg eines chromatischen Großwyrms zur Göttlichkeit, dass die Macht all seiner Echos in den verschiedenen Welten der materiellen Ebene verschmolzen wird. Vom schwarzen Großwyrm Chronepsis heißt es beispielsweise, er sei durch mehrere Welten gepirscht und habe dort viele seiner Echos konsumiert, um sich dann in einen Ebenenhort in den Außenlanden zurückzuziehen. Der rote Großwyrm Ashardalon hingegen nutzte einen Balor, um die Macht seiner Echos mit einem Ritual zu schwächen und in sich aufzunehmen: Er setzte den Balor dort ein, wo sein Herz gewesen war.",
      "Chromatische Großwyrme sind größer und stärker als selbst uralte Drachen. Die Energie ihrer Odemwaffen durchzieht ihre Körper und leuchtet aus ihren Schuppen. Im Zorn werden sie von elementaren Kräften umlodert. Sie verspüren weder Hunger noch Durst, denn ihre riesigen Schätze nähren sie magisch. Ihre Gewalt kann ganze Städte, Gebäude wie Verteidiger, dem Erdboden gleichmachen."
    ],
    besonderheiten: [
      { name: "Chromatisches Erwachen", beschreibung: "Wird nach einer kurzen oder langen Rast aufgeladen. Wenn die Trefferpunkte des Großwyrms auf 0 sinken würden, werden seine aktuellen Gesamttrefferpunkte stattdessen auf 425 zurückgesetzt, seine Odemwaffe wird aufgeladen, und er erhält alle verbrauchten Anwendungen seiner legendären Resistenz zurück. Außerdem kann der Großwyrm nun eine Stunde lang die Mythischen Aktionen verwenden. Gib der Abenteuergruppe zusätzlich 105.000 EP (210.000 EP gesamt), wenn sie den Großwyrm besiegt, nachdem sein Chromatisches Erwachen erfolgt ist." },
      { name: "Legendäre Resistenz (4/Tag)", beschreibung: "Wenn der Rettungswurf des Großwyrms scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Ungewöhnliche Natur", beschreibung: "Der Großwyrm muss nicht essen oder trinken." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Großwyrm führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +18 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 21 (2W10+10) Stichschaden plus 13 (2W12) Energieschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +18 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 19 (2W8+10) Hiebschaden. Wenn das Ziel eine höchstens riesige Kreatur ist, wird es gepackt (Befreiung SG 20) und ist festgesetzt, solange es gepackt ist. Der Großwyrm kann nur jeweils eine Kreatur packen." },
      { name: "Odemwaffe (Aufladung 5–6)", beschreibung: "Der Großwyrm atmet einen Energiestrahl in einem Kegel von 90 Metern aus. Jede Kreatur in dem Bereich muss einen SG-26-Geschicklichkeitsrettungswurf ausführen. Scheitert der Rettungswurf, erleidet sie 78 (12W12) Schaden nach Art des Großwyrms: Blitz (blau), Feuer (rot), Gift (grün), Kälte (weiß) oder Säure (schwarz). Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +18 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 19 (2W8+10) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-26-Stärkerettungswurf bestehen, andernfalls wird es umgestoßen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Angriff", beschreibung: "Der Großwyrm führt einen Klauen- oder Schwanzangriff aus." },
      { name: "Flügelangriff (kostet 2 Aktionen)", beschreibung: "Der Großwyrm schlägt mit den Flügeln. Jede Kreatur im Abstand von bis zu neun Metern muss einen SG-26-Geschicklichkeitsrettungswurf bestehen, oder sie erleidet 17 (2W6+10) Wuchtschaden und wird umgestoßen. Der Großwyrm kann bis zur Hälfte seiner Flugbewegungsrate fliegend zurücklegen." },
      { name: "Arkaner Speer (kostet 3 Aktionen)", beschreibung: "Der Großwyrm erzeugt vier Speere aus magischer Energie. Jeder Speer trifft eine Kreatur im Abstand von bis zu 36 Metern nach Wahl des Großwyrms, die er sehen kann, bewirkt 12 (1W8+8) Energieschaden und verschwindet dann." }
    ],
    mythische_aktionen: {
      beschreibung: "Wenn das Merkmal Chromatisches Erwachen des Großwyrms in der letzten Stunde aktiviert wurde, kann er die folgenden Optionen als legendäre Aktionen verwenden:",
      aktionen: [
        { name: "Biss", beschreibung: "Der Großwyrm führt einen Bissangriff aus." },
        { name: "Chromatisches Flackern (kostet 2 Aktionen)", beschreibung: "Der Großwyrm flackert vor Elementarenergie. Jede Kreatur im Radius von 18 Metern muss einen SG-26-Geschicklichkeitsrettungswurf bestehen, oder sie erleidet 22 (5W8) Schaden nach Art des Großwyrms: Blitz (blau), Feuer (rot), Gift (grün), Kälte (weiß) oder Säure (schwarz)." }
      ]
    },
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drachenblutschlick",
    art: "Schlick",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 68,
    tp_wuerfel: "8W10+24",
    bewegung: { "Gehen": "6 m", "Klettern": "6 m" },
    attribute: { STR: 18, DEX: 6, CON: 17, INT: 2, WIS: 12, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 4, "Wahrnehmung": 4 },
    schadensresistenzen: ["Blitz", "Feuer", "Gift", "Kälte", "Säure"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Blind", "Erschöpft", "Festgesetzt", "Gepackt", "Liegend", "Taub", "Verängstigt"],
    sinne: ["Blindsicht 36 m (blind außerhalb des Radius)"],
    passiveWahrnehmung: 14,
    sprachen: ["Versteht Drakonisch und die Sprachen seines Schöpfers, aber kann nicht sprechen"],
    umgebung: ["Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/drachenblutschlick.png",
    beschreibung: [
      "Künstler mit magischer Neigung integrieren schon seit Urzeiten Teile von Drachenkörpern in magische Gegenstände, etwa Drachenleder in Rüstungen oder Klauen und Zähne in Waffen. Alchemisten haben nützliche Anwendungen von Drachenblut gefunden, doch entgleiste Experimente haben andererseits auch zu Drachenblutschlicken geführt.",
      "Drachenblutschlicke sind geronnenes Blut eines Drachen, beweglich und hungrig, und sie versuchen, sich eine drakonische Form zu geben. Allerdings können sie kohärente Formen nicht lange beibehalten und fallen alsbald wieder zu einem amorphen Haufen zusammen. Ebenso versuchen sie, Odemwaffen zu manifestieren, können aber nur Teile des eigenen Leibs speien, die sie umgehend wieder zu sich nehmen."
    ],
    besonderheiten: [
      { name: "Amorph", beschreibung: "Der Schlick kann sich durch einen engen Bereich mit einer Breite von nur 2,5 Zentimetern bewegen, ohne sich quetschen zu müssen." },
      { name: "Spinnenklettern", beschreibung: "Der Schlick kann ohne Attributswürfe schwierige Oberflächen erklimmen und sich kopfüber an Decken entlang bewegen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Schlick führt zwei Scheinfuß-Angriffe aus. Der Schlick kann einen Scheinfuß-Angriff mit seinem Schleimodem ersetzen, sofern verfügbar." },
      { name: "Scheinfuß", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 9 (1W10+4) Wuchtschaden plus 14 (4W6) Säureschaden. Wenn das Ziel eine höchstens große Kreatur ist, wird es gepackt (Befreiung SG 15). Ein gepacktes Ziel erleidet zu Beginn jedes seiner Züge 7 (2W6) Säureschaden." },
      { name: "Schleimodem (Aufladung 6)", beschreibung: "Der Schlick versprüht seine gelatinöse Masse in einem Kegel von neun Metern. Jede Kreatur in dem Bereich muss einen SG-14-Geschicklichkeitsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet sie 22 (4W10) Säureschaden und wird bis zu neun Meter weit geradlinig auf den Schlick zugezogen. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und wird nicht gezogen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drachenblütige von Bahamut",
    art: "Humanoid",
    unterart: "NPC",
    groesse: "Mittelgroß",
    gesinnung: "Normalerweise rechtschaffen gut",
    cr: 8,
    xp: 3900,
    rk: 20,
    ruestungstyp: "Plattenpanzer, Schild",
    tp: 93,
    tp_wuerfel: "11W8+44",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m" },
    attribute: { STR: 19, DEX: 13, CON: 18, INT: 12, WIS: 14, CHA: 17 },
    rettungswuerfe: { KON: 7, INT: 4, WEI: 5, CHA: 6 },
    fertigkeiten: { "Athletik": 7, "Überzeugen": 6, "Wahrnehmung": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: [],
    passiveWahrnehmung: 15,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Stadt", "Gebirge"],
    bild: "assets/images/monster/schatzkammer/drachenbluetige_von_bahamut.png",
    beschreibung: [
      "Drachenblütige Champions von Bahamut, oft Platinritter genannt, könnten zu einem Orden gehören, der die Welt vor dem Bösen schützen will – vor allem vor bösen Drachen. Ein Champion von Bahamut hat besondere Platinflügel und eine Odemwaffe, die mit gleißender Energie durchtränkt ist."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (1/Tag)", beschreibung: "Wenn der Rettungswurf des Drachenblütigen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drachenblütige führt drei Angriffe mit dem Langschwert aus." },
      { name: "Langschwert", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W8+4) Hiebschaden oder 9 (1W10+4) Hiebschaden, wenn beidhändig geführt, plus 13 (3W8) gleißender Schaden. Der Drachenblütige kann das Schwert dazu bringen, hell zu strahlen, und das Ziel muss einen SG-14-Konstitutionsrettungswurf bestehen, oder es ist bis zum Beginn des nächsten Zugs des Drachenblütigen geblendet. Das Schwert kann nur einmal pro Zug auf diese Art strahlen." },
      { name: "Gleißender Odem (Aufladung 6)", beschreibung: "Der Drachenblütige atmet ein feuriges Gleißen in einem Kegel von neun Metern aus. Jede Kreatur in dem Bereich muss einen SG-15-Geschicklichkeitsrettungswurf ausführen. Bei Misserfolg erleidet sie 44 (8W10) gleißenden Schaden, andernfalls die Hälfte. Wenn der Drachenblütige diese Aktion einsetzt, kann er bis zu drei Kreaturen im Kegel auswählen. Diese Kreaturen erleiden keinen gleißenden Schaden, sondern erhalten jeweils 22 (4W10) Trefferpunkte zurück." },
      { name: "Heilende Berührung (1/Tag)", beschreibung: "Der Drachenblütige berührt eine andere Kreatur im Abstand von bis zu 1,5 Metern. Das Ziel erhält magisch 40 Trefferpunkte. Außerdem werden alle Gifte und Krankheiten entfernt, die auf das Ziel wirken." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drachenblütige von Sardior",
    art: "Humanoid",
    unterart: "NPC",
    groesse: "Mittelgroß",
    gesinnung: "Normalerweise neutral",
    cr: 6,
    xp: 2300,
    rk: 17,
    ruestungstyp: "mentale Verteidigung",
    tp: 75,
    tp_wuerfel: "10W8+30",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m (Schweben)" },
    attribute: { STR: 14, DEX: 16, CON: 17, INT: 18, WIS: 14, CHA: 13 },
    rettungswuerfe: { KON: 6, INT: 7, WEI: 5, CHA: 4 },
    fertigkeiten: { "Arkane Kunde": 7, "Geschichte": 7, "Wahrnehmung": 5 },
    schadensresistenzen: ["Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: [],
    passiveWahrnehmung: 15,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Höhle", "Andere Ebenen"],
    bild: "assets/images/monster/schatzkammer/drachenbluetige_von_sardior.png",
    beschreibung: [
      "Sardior soll bei der Zerstörung der Ersten Welt gestorben sein. Doch viele glauben, dass seine göttliche Essenz in jedem Edelsteindrachen weiterlebt. Diese Philosophie ist das Kernstück der Lehren von Sardiors drachenblütigen Champions, die im Namen ihrer mysteriösen Sache über psionische Kraft gebieten. Viele von ihnen stehen mit den Erben der Ersten Welt in Zusammenhang.",
      "Sardiors Champions nutzen telekinetische Macht, um ihre Feinde und sogar sich selbst durch die Luft zu bewegen. Ihre Odemwaffe, ein Hitzestrahl, soll das Echo des verschollenen Odems von Sardior sein."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (1/Tag)", beschreibung: "Wenn der Rettungswurf des Drachenblütigen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Mentale Abwehr", beschreibung: "Solange der Drachenblütige keine Rüstung trägt und keinen Schild führt, entspricht seine RK 10 plus seinem Geschicklichkeitsmodifikator plus seinem Intelligenzmodifikator." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drachenblütige führt drei Gedankenklingen-Angriffe aus." },
      { name: "Gedankenklinge", beschreibung: "Nah- oder Fernkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m oder Reichweite 6/18 m, ein Ziel. Treffer: 6 (1W4+4) Stichschaden plus 10 (3W6) psychischer Schaden." },
      { name: "Heißer Odem (Aufladung 6)", beschreibung: "Der Drachenblütige atmet eine intensive Hitzewoge in einem Kegel von neun Metern aus. Jede Kreatur in dem Bereich muss einen SG-14-Konstitutionsrettungswurf ausführen. Bei Misserfolg erleidet sie 27 (6W8) Feuerschaden, andernfalls die Hälfte. Objekte aus Metall in dem Bereich glühen bis zum Ende des nächsten Zugs des Drachenblütigen rot. Kreaturen, die am Anfang ihres Zugs in physischen Kontakt mit einem erhitzten Objekt kommen, müssen einen SG-14-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, so erleiden sie 9 (2W8) Feuerschaden und sind bis zum Anfang ihres nächsten Zugs bei Angriffswürfen im Nachteil." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drachenblütige wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-15-Zauberrettungswurf, +7 auf Treffen mit Zauberangriffen): Je 1-mal täglich: Bigbys Hand, Hypnotisches Muster, Telekinese." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drachenblütige von Tiamat",
    art: "Humanoid",
    unterart: "NPC",
    groesse: "Mittelgroß",
    gesinnung: "Normalerweise chaotisch böse",
    cr: 7,
    xp: 2900,
    rk: 18,
    ruestungstyp: "Ritterrüstung",
    tp: 85,
    tp_wuerfel: "10W8+40",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 20, DEX: 11, CON: 18, INT: 10, WIS: 12, CHA: 16 },
    rettungswuerfe: { STR: 8, KON: 7, WEI: 4, CHA: 6 },
    fertigkeiten: { "Athletik": 8, "Einschüchtern": 6, "Wahrnehmung": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: [],
    passiveWahrnehmung: 14,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Höhle", "Gebirge"],
    bild: "assets/images/monster/schatzkammer/drachenbluetige_von_tiamat.png",
    beschreibung: [
      "Champions der Drachenkönigin werden oft Krallen Tiamats genannt. Sie arbeiten unablässig an der Befreiung ihrer Herrin aus Avernus. Tiamat gewährt ihren Schergen immense Stärke und eine vernichtende Odemwaffe. Die Champions von Tiamat werden manchmal mit dem Kult des Drachen assoziiert."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (1/Tag)", beschreibung: "Wenn der Rettungswurf des Drachenblütigen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drachenblütige führt zwei Angriffe mit der Zweihandaxt aus." },
      { name: "Zweihandaxt", beschreibung: "Nahkampf-Waffenangriff: +8 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (1W12+5) Hiebschaden plus 13 (3W8) nekrotischer Schaden." },
      { name: "Nekrotischer Odem (Aufladung 6)", beschreibung: "Der Drachenblütige atmet Schattenfeuer in einem Kegel von neun Metern aus. Jede Kreatur in dem Bereich muss einen SG-15-Weisheitsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 36 (8W8) nekrotischen Schaden und ist eine Minute lang vom Drachenblütigen verängstigt. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht verängstigt. Eine verängstigte Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei Erfolg beenden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drachenerwählte",
    art: "Humanoid",
    unterart: "NPC",
    groesse: "Mittelgroß",
    gesinnung: "Jede Gesinnung",
    cr: 3,
    xp: 700,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 45,
    tp_wuerfel: "7W8+14",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 18, DEX: 18, CON: 14, INT: 10, WIS: 13, CHA: 14 },
    rettungswuerfe: { STR: 6, GES: 6, KON: 4 },
    fertigkeiten: { "Athletik": 6, "Wahrnehmung": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: [],
    passiveWahrnehmung: 13,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Gebirge", "Höhle"],
    bild: "assets/images/monster/schatzkammer/drachenerwaehlte.png",
    beschreibung: [
      "Drachenerwählte sind mächtige Krieger, die ihren Körper als Gefäß für die Macht eines Drachen anbieten. Sie dienen als Vollstrecker des meisterlichen Willens und begleiten häufig Drachensprecher – und verteidigen sie umgehend, wenn sie auch nur die geringste Gefahr spüren. Drachenerwählte sind ausgezeichnete Nahkämpfer, die zwei Waffen führen, um ihre Gegner zu zerschmettern."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Erwählte führt einen Angriff mit dem Beil und zwei Angriffe mit dem Kurzschwert aus." },
      { name: "Beil", beschreibung: "Nah- oder Fernkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m oder Reichweite 6/18 m, ein Ziel. Treffer: 7 (1W6+4) Hiebschaden. Treffer oder Fehlschlag: Nach einem Fernkampfangriff kehrt das Beil sofort auf magische Art in die Hand des Erwählten zurück." },
      { name: "Kurzschwert", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W6+4) Stichschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Beißende Zurechtweisung", beschreibung: "Sobald der Erwählte Schaden durch eine Kreatur im Abstand von bis zu 1,5 Metern erleidet, kann er einen Kurzschwert-Angriff gegen die Kreatur ausführen, welcher im Vorteil ist." }
    ],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drachenfleisch-Scheusal",
    art: "Monstrosität",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Normalerweise neutral böse",
    cr: 6,
    xp: 2300,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 66,
    tp_wuerfel: "7W12+21",
    bewegung: { "Gehen": "9 m", "Fliegen": "12 m" },
    attribute: { STR: 18, DEX: 14, CON: 17, INT: 5, WIS: 12, CHA: 6 },
    rettungswuerfe: { STR: 7, KON: 6 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: [],
    passiveWahrnehmung: 11,
    sprachen: ["Versteht Drakonisch und Gemeinsprache, aber kann nicht sprechen"],
    umgebung: ["Höhle", "Ruinen", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/drachenfleisch-scheusal.png",
    beschreibung: [
      "Drachenfleisch-Scheusale stellen bei Drachenfleischgaunern die letzte Stufe der Verwandlung dar. Sie sind riesige Monster, in deren verderbten Hirnen nichts mehr als ihre Gier nach Schätzen aktiv ist. Die grässliche Verwandlung löscht die letzten Überreste dessen aus, was sie einst waren. Sie bekommen einen Schwanz und grobe Flügel und wachsen auf gigantische Größe an, sodass sie kaum noch wie Zweibeiner wirken.",
      "In ihrem Bauch gurgelt Säure, die ihnen giftige Dämpfe aus dem Rachen steigen lässt und eine Art ätzende Odemwaffe darstellt. Körperlich sind sie ständigen Veränderungen und fortlaufendem Wachstum unterworfen, sodass auch Wunden rasch heilen. Meist findet man diese Kreaturen in verlassenen Drachenhorten, Tempeln der Tiamat und anderen Orten, die mit den von ihnen verehrten Drachen in Zusammenhang stehen."
    ],
    besonderheiten: [
      { name: "Regeneration", beschreibung: "Das Scheusal erhält am Anfang seines Zugs 10 Trefferpunkte, wenn es mindestens 1 Trefferpunkt hat." },
      { name: "Widerlicher Brodem", beschreibung: "Das Scheusal ist von widerlichem Gestank umgeben. Zu Beginn seines Zugs müssen alle Kreaturen im Abstand von bis zu 1,5 Metern einen SG-14-Konstitutionsrettungswurf bestehen, oder sie sind bis zum Beginn des nächsten Zugs des Scheusals vergiftet." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Das Scheusal führt drei Angriffe mit Klauen, Säurespeien oder einer Kombination davon aus. Es kann einen der Angriffe durch einen Schwanzangriff ersetzen." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 8 (1W8+4) Hiebschaden plus 5 (1W10) Giftschaden." },
      { name: "Säurespeien", beschreibung: "Fernkampf-Waffenangriff: +5 zum Treffen, Reichweite 18 m, ein Ziel. Treffer: 10 (3W6) Säureschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 10 (1W12+4) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-15-Stärkerettungswurf bestehen, andernfalls wird es umgestoßen." },
      { name: "Säurerülpser (Aufladung 5–6)", beschreibung: "Das Scheusal rülpst Säuregas in einem Kegel von neun Metern aus. Jede Kreatur in dem Bereich muss einen SG-14-Konstitutionsrettungswurf ausführen. Bei Misserfolg erleidet sie 28 (8W6) Säureschaden, andernfalls die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drachenfleischgauner",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Normalerweise neutral böse",
    cr: 3,
    xp: 700,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 52,
    tp_wuerfel: "7W10+14",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 16, DEX: 11, CON: 14, INT: 10, WIS: 10, CHA: 6 },
    rettungswuerfe: { STR: 5, KON: 4 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 10,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Höhle", "Ruinen"],
    bild: "assets/images/monster/schatzkammer/drachenfleischgauner.png",
    beschreibung: [
      "Drachenfleischgauner führen üble Rituale und haarsträubende Experimente an sich selber durch, um Körper und Geist den Drachen anzugleichen, die sie so verehren. Sie sammeln Körperteile von Drachen – Schuppen, Zähne, Haut, Fleisch, Flügel und Knochen. Dazu stöbern sie bei Drachenhorten herum, stehlen Drachenkadaver oder kaufen die Teile bei Händlern und Abenteurern. Dann nähen sie sie an sich fest, implantieren sie, verschlingen sie oder versuchen auf andere Art, sie in ihre Körper zu integrieren und die latente Magie der Drachenkadaver zu absorbieren.",
      "Die meisten Möchtegerndrachen enden völlig entstellt oder tot. Ein paar wenige überleben als elende Schrecken. Magische Bosheit raubt ihnen den Verstand, und sie sind nur noch ein Schatten ihrer selbst. In den extremsten Fällen hat das entstandene Scheusal keinerlei Ähnlichkeit mehr mit der Person, die es einst war, und wird ganz und gar von drakonischer Habgier getrieben.",
      "Normale Drachenfleischgauner sind drei bis vier Meter groß und haben Merkmale sowohl von Drakoniden als auch Zweibeinern. Je weiter ihre ursprüngliche Natur zurücktritt, desto stärker werden ihre drakonischen Kräfte, und sie bekommen einen dicken Drachenschuppenpanzer, der vor allem die experimentellen Teile ihres Körpers schützt. Drachenfleischgauner können als Imitation einer Odemwaffe ätzende Säure hervorwürgen. In ihrer Habgier raffen sie alles Gold und jeden Edelstein an sich, den sie kriegen können, und versinken stundenlang im Anblick ihres funkelnden Tands."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Gauner führt einen Klauenangriff und einen Angriff mit dem Zweihandknüppel aus." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 7 (1W8+3) Hiebschaden plus 5 (1W10) Giftschaden." },
      { name: "Zweihandknüppel", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 12 (2W8+3) Wuchtschaden." },
      { name: "Säurewürgen (Aufladung 5–6)", beschreibung: "Der Gauner würgt einen Säurestrahl in einem Kegel von neun Metern heraus. Jede Kreatur in dem Bereich muss einen SG-12-Geschicklichkeitsrettungswurf ausführen. Bei Misserfolg erleidet sie 14 (4W6) Säureschaden, andernfalls die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drachengesegnete",
    art: "Humanoid",
    unterart: "NPC",
    groesse: "Mittelgroß",
    gesinnung: "Jede Gesinnung",
    cr: 5,
    xp: 1800,
    rk: 14,
    ruestungstyp: "Schuppenpanzer",
    tp: 75,
    tp_wuerfel: "10W8+30",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 12, DEX: 10, CON: 16, INT: 14, WIS: 17, CHA: 10 },
    rettungswuerfe: { KON: 6, WEI: 6 },
    fertigkeiten: { "Heilkunde": 6, "Religion": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: [],
    passiveWahrnehmung: 13,
    sprachen: ["Drakonisch", "Gemeinsprache", "Zwei beliebige Sprachen"],
    umgebung: ["Stadt", "Höhle"],
    bild: "assets/images/monster/schatzkammer/drachengesegnete.png",
    beschreibung: [
      "Drachengesegnete sind Tempeldiener von Drachen, welche sie als Götter verehren. Sie nutzen ihre Magie, um jene zu heilen und zu unterstützen, die in der Gunst ihres Drachenmeisters stehen – und um seine Gegner zu besiegen. Ihr Leben und ihre magischen Fähigkeiten betrachten sie als Gaben ihres Drachen. Wen sie als wichtig für ihren Meister betrachten, für den sind sie bereit, ihr Leben zu opfern."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Gesegnete führt zwei Angriffe mit einem Streitkolben oder Gleißendem Bolzen aus." },
      { name: "Gleißender Bolzen", beschreibung: "Fernkampf-Zauberangriff: +6 zum Treffen, Reichweite 36 m, ein Ziel. Treffer: 22 (5W8) gleißender Schaden, und der Gesegnete erhält 5 (1W10) Trefferpunkte zurück." },
      { name: "Streitkolben", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W6+1) Wuchtschaden plus 18 (4W8) gleißender Schaden." },
      { name: "Zauberwirken", beschreibung: "Der Gesegnete wirkt einen der folgenden Zauber und verwendet Weisheit als Attribut zum Zauberwirken (SG-14-Zauberrettungswurf): Beliebig oft: Licht, Thaumaturgie. Je 1-mal täglich: Attribut verbessern, Flammenschlag, Massen-Wunden heilen, Wiederbeleben, Zungen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drachenknochengolem",
    art: "Konstrukt",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 11,
    xp: 7200,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 161,
    tp_wuerfel: "19W10+57",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 20, DEX: 10, CON: 17, INT: 3, WIS: 11, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpft", "Gelähmt", "Verängstigt", "Vergiftet", "Versteinert"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Versteht Drakonisch und die Sprachen seines Schöpfers, aber kann nicht sprechen"],
    umgebung: ["Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/drachenknochengolem.png",
    beschreibung: [
      "Ein Drachenknochengolem besteht aus Drachenknochen, die mit Adamantdraht in die Form eines Drachen gebracht wurden und ihre inhärente Magie nutzen. Die meisten Drachenknochengolems wurden von mächtigen Drachen aus den Knochen überwundener Rivalen geschaffen. Jeder Knochen ist mit komplexen Glyphen versehen, die der belebenden Macht gestatten, den Golem zu durchfließen.",
      "Ihre Zähigkeit und Gehorsamkeit macht Drachenknochengolems zu vorzüglichen Hortwächtern für ihre Drachenschöpfer, und ihre übernatürlich furchteinflößende Präsenz ist ein wirksames Mittel gegen Eindringlinge."
    ],
    besonderheiten: [
      { name: "Aura der Furcht", beschreibung: "Jede Kreatur nach Wahl des Golems, die ihre Runde im Abstand von bis zu sechs Metern von ihm beginnt, muss einen SG-15-Weisheitsrettungswurf ablegen, sofern der Golem nicht kampfunfähig ist. Scheitert der Rettungswurf, so ist die Kreatur bis zum Anfang ihres nächsten Zugs verängstigt. Bei einem erfolgreichen Rettungswurf ist die Kreatur 24 Stunden lang gegen die Aura der Furcht dieses Golems immun." },
      { name: "Magieresistenz", beschreibung: "Der Golem ist bei Rettungswürfen gegen Zauber und andere magische Effekte im Vorteil." },
      { name: "Ungewöhnliche Natur", beschreibung: "Der Golem muss nicht atmen, essen, trinken oder schlafen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Golem führt einen Fittich- und zwei Zerfleischen-Angriffe aus." },
      { name: "Fittich", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 12 (2W6+5) Stichschaden. Wenn das Ziel eine höchstens große Kreatur ist, wird es unter dem knochigen Fittich eingeklemmt und ist festgesetzt. Der Golem hat zwei Fittiche, mit denen er je ein Ziel festsetzen kann. Wenn eine Kreatur mit einem Fittich festgesetzt wird, kann der Golem damit nicht angreifen. Kreaturen, die von einem Fittich festgesetzt sind, können sich am Anfang ihres Zugs mit einem erfolgreichen SG-17-Stärkewurf (Athletik) befreien." },
      { name: "Zerfleischen", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 12 (2W6+5) Stichschaden plus 5 (1W10) nekrotischer Schaden." },
      { name: "Versteinernder Odem (Aufladung 5–6)", beschreibung: "Der Golem atmet versteinerrndes Gas in einem Kegel von 18 Metern aus. Jede Kreatur in dem Bereich muss einen SG-15-Konstitutionsrettungswurf bestehen, oder sie erleidet 35 (10W6) Giftschaden und ist festgesetzt, da sie zu versteinern beginnt. Das festgesetzte Ziel muss den Rettungswurf am Ende seines nächsten Zugs wiederholen. Bei einem erfolgreichen Rettungswurf endet der Effekt auf das Ziel. Scheitert der Rettungswurf, ist das Ziel versteinert." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drachenschildkrötennestling",
    art: "Drache",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Normalerweise neutral",
    cr: 4,
    xp: 1100,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 90,
    tp_wuerfel: "12W10+24",
    bewegung: { "Gehen": "6 m", "Schwimmen": "9 m" },
    attribute: { STR: 17, DEX: 10, CON: 14, INT: 8, WIS: 10, CHA: 10 },
    rettungswuerfe: { GES: 2, KON: 4, WEI: 2 },
    fertigkeiten: {},
    schadensresistenzen: ["Feuer"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Drakonisch"],
    umgebung: ["Ozean", "Gewässer"],
    bild: "assets/images/monster/schatzkammer/drachenschildkroetennestling.png",
    beschreibung: [
      "Drachenschildkröten sind mächtige Kreaturen, deren natürliche Magie eng mit den Ozeanen der materiellen Ebene verbunden ist. Die Drachenschildkröte im Monsterhandbuch ist ein typisches ausgewachsenes Exemplar, mindestens hundert Jahre alt und stolz auf ihren wertvollen Schatz."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Die Drachenschildkröte kann Luft und Wasser atmen." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 9 (1W12+3) Stichschaden." },
      { name: "Dampfodem (Aufladung 5–6)", beschreibung: "Die Drachenschildkröte atmet kochenden Dampf in einem Kegel von 4,5 Metern aus. Jede Kreatur in dem Bereich muss einen SG-12-Geschicklichkeitsrettungswurf ausführen. Bei Misserfolg erleidet sie 17 (5W6) Feuerschaden, andernfalls die Hälfte. Unter Wasser zu sein gewährt keine Resistenz gegen diesen Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drachensprecher",
    art: "Humanoid",
    unterart: "NPC",
    groesse: "Klein",
    gesinnung: "Jede Gesinnung",
    cr: 2,
    xp: 450,
    rk: 13,
    ruestungstyp: "Lederrüstung",
    tp: 36,
    tp_wuerfel: "8W6+8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 10, DEX: 14, CON: 12, INT: 13, WIS: 11, CHA: 17 },
    rettungswuerfe: { GES: 4, CHA: 5 },
    fertigkeiten: { "Religion": 3, "Überzeugen": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Drakonisch", "Gemeinsprache", "Zwei beliebige Sprachen"],
    umgebung: ["Stadt", "Gebirge"],
    bild: "assets/images/monster/schatzkammer/drachensprecher.png",
    beschreibung: [
      "Drachensprecher sind charismatische Redner, die ihrem Drachen als Botschafter dienen. Sie lassen ihre lauten, gebieterischen Stimmen erklingen, um kostbare Ressourcen, diplomatische Kontakte, Schätze und magische Objekte für ihren Drachen zu erlangen – und auch, um subtile, aber gleichzeitig mächtige Magie zu weben. Ihre gebieterische Erscheinung verschafft ihnen Ehrfurcht bei Freund und Feind."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Sprecher führt zwei Donnerkeil-Angriffe aus." },
      { name: "Donnerkeil", beschreibung: "Nah- oder Fernkampf-Zauberangriff: +5 zum Treffen, Reichweite 1,5 m oder 18 m, ein Ziel. Treffer: 13 (3W8) Schallschaden, und das Ziel wird bis zu drei Meter weit vom Sprecher weggestoßen." },
      { name: "Zauberwirken", beschreibung: "Der Sprecher wirkt einen der folgenden Zauber und verwendet Charisma als Attribut zum Zauberwirken (SG-13-Zauberrettungswurf, +5 auf Treffen mit Zauberangriffen): Beliebig oft: Tanzende Lichter. Je 1-mal täglich: Befehl, Gefühle besänftigen, Person bezaubern, Sprachen verstehen." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Entwaffnende Worte (3/Tag)", beschreibung: "Wenn eine Kreatur, die der Sprecher sehen kann, im Abstand von bis zu 18 Metern einen Schadenswurf ausführt, kann der Sprecher mit 1W6 würfeln und das Ergebnis vom Schadenswurf abziehen." }
    ],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Dragonnel",
    art: "Drache",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Normalerweise neutral",
    cr: 2,
    xp: 450,
    rk: 13,
    ruestungstyp: "natürliche Rüstung",
    tp: 58,
    tp_wuerfel: "9W10+9",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m" },
    attribute: { STR: 16, DEX: 15, CON: 12, INT: 8, WIS: 13, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Versteht Drakonisch und Gemeinsprache, aber kann nicht sprechen"],
    umgebung: ["Grasland", "Hügel", "Gebirge"],
    bild: "assets/images/monster/schatzkammer/dragonnel.png",
    beschreibung: [
      "Dragonnel sind entfernt verwandt mit chromatischen, metallischen und Edelsteindrachen, denen sie auch ähnlich sehen. Sie sind intelligent genug, um Sprache zu verstehen, können jedoch selbst nicht sprechen. Nahrung und Unterhaltung motivieren sie enorm. In freier Wildbahn sind sie wählerische, launische Fresser, die gerne mit ihrer Beute spielen, bevor sie sie töten.",
      "In manchen Gegenden werden Dragonnel aus Eiern aufgezogen, um als flugfähige Reittiere zu dienen. Solche domestizierten Dragonnel sind ihrem Reiter gegenüber loyal bis hin zu übermäßig beschützend. Es ist jedoch nicht ratsam, wilde Dragonnel zu Reittieren zu machen, da sie ihren Widerstand oft erst damit offenbaren, dass sie den Reiter aus großer Höhe abwerfen.",
      "Dragonnel sind wendige Flieger mit Hang zu engen Manövern, bei denen sie mit Schnabel und Klauen angreifen, ehe sie außer Reichweite fliegen."
    ],
    besonderheiten: [
      { name: "Vorbeifliegen", beschreibung: "Der Dragonnel provoziert keine Gelegenheitsangriffe, wenn er die Reichweite eines Feindes verlässt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Dragonnel führt zwei Zerfleischen-Angriffe aus." },
      { name: "Zerfleischen", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W6+3) Hiebschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drakohydra",
    art: "Monstrosität",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Normalerweise chaotisch böse",
    cr: 11,
    xp: 7200,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 218,
    tp_wuerfel: "19W12+95",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 20, DEX: 12, CON: 20, INT: 6, WIS: 12, CHA: 12 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 9 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 19,
    sprachen: ["Versteht Drakonisch, aber kann nicht sprechen"],
    umgebung: ["Grasland", "Sumpf", "Gewässer"],
    bild: "assets/images/monster/schatzkammer/drakohydra.png",
    beschreibung: [
      "Die Drakohydra ist das Ergebnis arkaner Experimente zur Wiedererweckung von Tiamats Kräften. Die Mischung der Magie chromatischer Drachen mit dem Blut einer Hydra ergab ein vielköpfiges drakonisches Monster mit Flügeln und mehreren schlangenartigen Schwänzen.",
      "Die Odemwaffe der Drakohydra ist eine vielfarbige Energiemasse mit der Essenz der Elementarkraft chromatischer Drachen.",
      "Diese unersättlichen Kreaturen bedeuten Ungemach für jede Gegend, in der sie sich niederlassen, denn jeder Kopf will von den anderen getrennt fressen. Wenn nichts gegen sie unternommen wird, fressen sie die Flora und Fauna leer und wenden sich dann den Einwohnern der nächsten Siedlungen zu.",
      "Manche Drakohydra steht auch in Diensten des Zauberwirkers, der sie geschaffen und sich durch das Schöpfungsritual gehorsam gemacht hat."
    ],
    besonderheiten: [
      { name: "Mehrere Köpfe", beschreibung: "Die Drakohydra hat fünf Köpfe. Solange sie mehr als einen Kopf hat, ist die Drakohydra bei Rettungswürfen gegen betäubt, bewusstlos, bezaubert, geblendet, taub und verängstigt im Vorteil.\n\nWenn die Drakohydra 30 oder mehr Schaden in einer Runde erleidet, stirbt einer ihrer Köpfe. Sind alle Köpfe tot, stirbt die Drakohydra.\n\nAm Ende ihrer Züge wachsen der Drakohydra jeweils zwei Köpfe für jeden Kopf nach, der seit ihrem letzten Zug zerstört wurde, sofern die Drakohydra seitdem keinen gleißenden Schaden erlitten hat. Die Drakohydra erhält 10 Trefferpunkte für jeden Kopf zurück, der auf diese Art nachgewachsen ist." },
      { name: "Reaktive Köpfe", beschreibung: "Für jeden Kopf der Drakohydra über einen hinaus bekommt sie eine zusätzliche Reaktion, die sie nur zu Gelegenheitsangriffen einsetzen kann." },
      { name: "Wachsam", beschreibung: "Solange die Drakohydra schläft, ist mindestens einer ihrer Köpfe wach." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Drakohydra führt so viele Bissangriffe aus, wie sie Köpfe hat." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 10 (1W10+5) Schaden eines Typs nach Wahl der Drakohydra: Blitz, Feuer, Gift, Kälte oder Säure." },
      { name: "Prismatischer Odem (Aufladung 4–6)", beschreibung: "Die Köpfe der Drakohydra atmen einen einzelnen Odem vielfarbiger Energie in einem Kegel von 18 Metern aus. Jede Kreatur in dem Bereich muss einen SG-17-Geschicklichkeitsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet sie 33 (6W10) Schaden nach Wahl der Drakohydra: Blitz, Feuer, Gift, Kälte oder Säure. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drakonische Scherbe",
    art: "Untoter",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Normalerweise neutral",
    cr: 17,
    xp: 18000,
    rk: 17,
    ruestungstyp: "Ablenkung",
    tp: 168,
    tp_wuerfel: "16W12+64",
    bewegung: { "Fliegen": "24 m (Schweben)" },
    attribute: { STR: 1, DEX: 12, CON: 18, INT: 22, WIS: 18, CHA: 22 },
    rettungswuerfe: { GES: 7, INT: 12, WEI: 10, CHA: 12 },
    fertigkeiten: { "Arkane Kunde": 12, "Geschichte": 12, "Heimlichkeit": 7, "Wahrnehmung": 16 },
    schadensresistenzen: ["Feuer", "Säure", "Hieb-, Stich- und Wuchtschaden durch nicht-magische Angriffe"],
    schadensimmunitaeten: ["Gift", "Kälte", "Nekrotisch", "Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpft", "Gelähmt", "Gepackt", "Liegend", "Verängstigt", "Vergiftet", "Versteinert"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 26,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Andere Ebenen", "Ruinen"],
    bild: "assets/images/monster/schatzkammer/drakonische_scherbe.png",
    beschreibung: [
      "Edelsteindrachen gebieten über psionische Kraft. Wenn ein mächtiger Edelsteindrache stirbt, weigert sich die Energie von Geist und Verstand des Drachen manchmal, den Weg ins Jenseits anzutreten. Diese Essenz verbleibt in Form eines psychischen Überrests: einer drakonischen Scherbe.",
      "Eine drakonische Scherbe in ihrer wahren Form sieht aus wie ein schimmerndes Geisterbild des Drachen. Häufig fährt so eine Scherbe in ein Objekt, in das der Edelsteindrache psionische Kraft gegeben hat – meist eine Waffe oder ein anderer Gegenstand aus dem Drachenschatz. In diesem Gefäß verfolgt sie die Interessen und Kämpfe des Drachen weiter, begleitet als intelligenter magischer Gegenstand getarnt vielleicht sogar Abenteurer und manipuliert sie nach seinen Plänen.",
      "Drakonische Scherben sind schwierig zu zerstören. Wird die spektrale Form der Scherbe oder das Objekt zerstört, das sie besetzt, so muss der Geist die Form eines geborstenen Edelsteins annehmen, während der Geist langsam seine Kräfte regeneriert. Nur wenn der Stein zerstört wird, kann die Scherbe zur Ruhe gebracht werden."
    ],
    besonderheiten: [
      { name: "Ablenkung", beschreibung: "Die RK der Scherbe wird um ihren Intelligenzmodifikator erhöht." },
      { name: "Körperlose Bewegung", beschreibung: "Die Scherbe kann sich durch Kreaturen und feste Objekte wie durch schwieriges Gelände bewegen. Wenn sie ihren Zug in einem Objekt beendet, erleidet sie 5 (1W10) Energieschaden." },
      { name: "Legendäre Resistenz (3-mal täglich)", beschreibung: "Wenn der Rettungswurf der Scherbe scheitert, kann sie den Wurf in einen Erfolg verwandeln." },
      { name: "Ungewöhnliche Natur", beschreibung: "Die Scherbe muss nicht atmen, essen, trinken oder schlafen." },
      { name: "Wiederbelebung", beschreibung: "Wenn die Trefferpunkte der Scherbe auf 0 sinken, verschwindet die Scherbe und hinterlässt an ihrer Stelle einen kleinen geborstenen Edelstein. Dieser passt zur Edelsteindrachenart, die er im Leben war. Er hat RK 20, 15 Trefferpunkte und ist gegen alle Schadensarten außer Energie immun. Sofern der Edelstein nicht zerstört wird, löst er sich nach 1W20 Tagen auf, und die Scherbe entsteht mit allen Trefferpunkten an der Stelle des Edelsteins oder im nächsten freien Bereich neu." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Scherbe führt zwei Telekinetisches-Zerfleischen-Angriffe aus." },
      { name: "Objekt bewohnen", beschreibung: "Die Scherbe verschwindet, da sie ihre psychische Essenz in ein höchstens mittelgroßes unbelebtes Objekt im Abstand von bis zu neun Metern gibt, das sie sehen kann, und es damit magisch besetzt. Das Objekt nutzt die RK der Scherbe, und aller Schaden, der ihm zugefügt wird, kostet die Scherbe Trefferpunkte. Die Scherbe besetzt das Objekt, bis sie es mit einer Aktion wieder verlässt, bis sie verwandelt wird, bis ihre Trefferpunkte auf 0 verringert werden oder bis ein Effekt zum Auflösen von Besessenheit wie Gutes und Böses bannen auf das Objekt gewirkt wird. Wenn sie das Objekt verlässt, erscheint sie im nächsten Bereich.\n\nSolange das Objekt besetzt ist, wird es zu einem magischen Gegenstand, sofern es noch keiner war, und irgendwo am Objekt erscheint ein winziger geborstener Edelstein nach der Edelsteindrachenart, welche die Scherbe im Leben war. Die Scherbe kann das Objekt mit ihrer Flugbewegungsrate fliegen lassen, ihre Sinne nutzen, verbal oder telepathisch sprechen, Zauber wirken und ihre legendären Aktionen einsetzen.\n\nWenn eine Kreatur das besetzte Objekt trägt, kann die Scherbe ihr die folgenden Vorteile gewähren: Jeder Angriff der Kreatur bewirkt bei einem Treffer zusätzlich 1W8 Energieschaden. Die Kreatur ist gegen psychischen Schaden resistent." },
      { name: "Psychisches Zermalmen (Aufladung 5–6)", beschreibung: "Die Scherbe entfesselt einen Puls psychischer Macht. Jede Kreatur im Radius von 18 Metern nach Wahl der Scherbe muss einen SG-20-Intelligenzrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 55 (10W10) psychischen Schaden und ist bis zum Ende ihres nächsten Zugs betäubt. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht betäubt." },
      { name: "Telekinetisches Zerfleischen", beschreibung: "Nahkampf- oder Fernkampf-Zauberangriff: +12 zum Treffen, Reichweite 3 m oder 36 m, ein Ziel. Treffer: 15 (2W8+6) Energieschaden." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Die Scherbe wirkt einen der folgenden Zauber. Sie benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-20-Zauberrettungswurf): Beliebig oft: Gedanken wahrnehmen, Unsichtbarkeit, Telekinese." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Gebietender Gedanke (kostet 2 Aktionen)", beschreibung: "Die Scherbe zielt auf eine Kreatur im Abstand von bis zu neun Metern, die sie sehen kann. Das Ziel muss einen SG-20-Weisheitsrettungswurf bestehen, oder es ist bis zum Ende seines nächsten Zugs bezaubert. Solange es auf diese Art bezaubert ist, wird das Ziel zur Marionette der Scherbe und bewegt sich und handelt entsprechend ihrer telepathischen Befehle. Unter der Kontrolle der Scherbe kann es in seinem Zug nur die Angriffsaktion (Ziel nach Wahl der Scherbe) oder die Spurtaktion ausführen." },
      { name: "Zauberwirken (kostet 2 Aktionen)", beschreibung: "Die Scherbe setzt Zauberwirken ein." },
      { name: "Zerfleischen", beschreibung: "Die Scherbe führt einen Telekinetisches-Zerfleischen-Angriff aus." }
    ],
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drakonischer Fußsoldat",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Jede Gesinnung",
    cr: 0.5,
    xp: 100,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 22,
    tp_wuerfel: "4W8+4",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 13, DEX: 11, CON: 13, INT: 8, WIS: 8, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 9,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Stadt", "Ruinen", "Grasland"],
    bild: "assets/images/monster/schatzkammer/drakonischer_fusssoldat.png",
    beschreibung: [
      "Die meisten Drakoniden sind Fußsoldaten, die aus den Eiern von Messingdrachen, weißen Drachen oder Kristalldrachen entstehen. Sie sind die kleinsten ihrer Art und trotz ihrer schmalen Flügel nicht flugfähig – wenn auch imstande, Stürze zu kontrollieren. Die Flügel sind klein genug, um sich unter Mänteln und Roben verstecken zu lassen, weswegen die Fußsoldaten sich manchmal verkleidet in die feindlichen Reihen schleichen, um dann anzugreifen. Wenn drakonische Fußsoldaten sterben, setzen sie Gaswolken mit versteinernder Wirkung frei. Diese lassen ihre Kadaver – und alle Kreaturen in der Wolke – zu Stein werden.",
      "In der Welt von Krynn werden drakonische Fußsoldaten aus Messingdracheneiern als Baaz-Drakoniden bezeichnet."
    ],
    besonderheiten: [
      { name: "Kontrollierter Fall", beschreibung: "Wenn der Drakonide fällt und nicht kampfunfähig ist, kann er beim Berechnen des Fallschadens bis zu 27 Meter von der Fallhöhe abziehen." },
      { name: "Todeskampf", beschreibung: "Wenn die Trefferpunkte des Drakoniden auf 0 sinken, wird sein Körper zu Stein und entlässt ein Gas mit versteinernder Wirkung. Jede Kreatur im Abstand von bis zu 1,5 Metern muss einen SG-11-Konstitutionsrettungswurf bestehen, oder sie ist festgesetzt, da sie zu versteinern beginnt. Eine festgesetzte Kreatur muss den Rettungswurf am Ende ihres nächsten Zugs wiederholen. Bei einem erfolgreichen Rettungswurf endet der Effekt, anderenfalls ist die Kreatur eine Minute lang versteinert. Nach einer Minute zerfällt der Körper des Drakoniden zu Staub." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drakonide führt zwei Angriffe mit dem Kurzschwert aus." },
      { name: "Kurzschwert", beschreibung: "Nahkampf-Waffenangriff: +3 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W6+1) Stichschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drakonischer Infiltrator",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Jede Gesinnung",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 39,
    tp_wuerfel: "6W8+12",
    bewegung: { "Gehen": "12 m", "Klettern": "9 m" },
    attribute: { STR: 11, DEX: 17, CON: 14, INT: 9, WIS: 13, CHA: 11 },
    rettungswuerfe: { GES: 5 },
    fertigkeiten: { "Heimlichkeit": 7, "Wahrnehmung": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Stadt", "Ruinen", "Wald"],
    bild: "assets/images/monster/schatzkammer/drakonischer_infiltrator.png",
    beschreibung: [
      "Diese verschlagenen und verstohlenen Drakoniden entstehen aus den Eiern von Kupferdrachen, schwarzen Drachen und Topasdrachen und eignen sich vorzüglich als Späher und Spione. Sie überziehen ihre Waffen mit dem lähmenden Gift ihres Speichels, was sie auch zu gefürchteten Meuchelmördern macht. Ihre Flügel gestatten ihnen einen groben Gleitflug. Wenn sie sterben, lösen ihre Leichname sich auf und bilden Säurepfützen.",
      "In der Welt von Krynn werden drakonische Infiltratoren aus Kupferdracheneiern als Kapak-Drakoniden bezeichnet."
    ],
    besonderheiten: [
      { name: "Gleiten", beschreibung: "Wenn der Drakonide fällt und nicht kampfunfähig ist, kann er beim Berechnen des Fallschadens bis zu 27 Meter von der Fallhöhe abziehen und sich je 0,3 Meter Fallstrecke bis zu 0,6 Meter horizontal bewegen." },
      { name: "Todeskampf", beschreibung: "Wenn die Trefferpunkte des Drakoniden auf 0 sinken, verwandelt er sich in eine Säurepfütze und bespritzt umstehende Kreaturen mit Säure. Jede Kreatur im Abstand von bis zu 1,5 Metern muss einen SG-12-Geschicklichkeitsrettungswurf bestehen, oder sie ist eine Minute lang mit Säure bedeckt. Kreaturen können die Säure als Aktion von sich oder anderen abschrubben oder abwaschen. Mit Säure bedeckte Kreaturen nehmen zu Beginn jedes ihrer Züge 7 (2W6) Säureschaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drakonide führt zwei Dolchangriffe aus. Wenn beide Angriffe dieselbe Kreatur treffen, muss das Ziel einen SG-12-Konstitutionsrettungswurf bestehen, oder es ist bis zum Ende seines nächsten Zugs vergiftet. Während es auf diese Art vergiftet ist, ist das Ziel zudem gelähmt." },
      { name: "Dolch", beschreibung: "Nah- oder Fernkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m oder Reichweite 6/18 m, ein Ziel. Treffer: 5 (1W4+3) Stichschaden plus 7 (2W6) Giftschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drakonischer Magier",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Jede Gesinnung",
    cr: 2,
    xp: 450,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 40,
    tp_wuerfel: "9W8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 14, DEX: 10, CON: 11, INT: 11, WIS: 10, CHA: 14 },
    rettungswuerfe: { INT: 2, WEI: 2, CHA: 4 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Stadt", "Ruinen", "Grasland"],
    bild: "assets/images/monster/schatzkammer/drakonischer_magier.png",
    beschreibung: [
      "Drakoniden aus den Eiern von Bronzedrachen, Grünen Drachen und Smaragddrachen gebieten über ein gewisses Maß an Magie. Oft führen sie kleine Gruppen von drakonischen Fußsoldaten an, nutzen ihre Magie zum Angreifen quer über das Schlachtfeld und zum Unterstützen der Angriffe ihrer Verbündeten. Sie haben Flügel, mit denen sie in den Gleitflug übergehen können, wenn sie stürzen. Wenn sie sterben, verschrumpft ihr Fleisch, ehe ihre Knochen explodieren und einen Regen magischer Splitter ringsum niedergehen lassen.",
      "In der Welt von Krynn werden drakonische Magier aus Bronzedracheneiern als Bozak-Drakoniden bezeichnet."
    ],
    besonderheiten: [
      { name: "Gleiten", beschreibung: "Wenn der Drakonide fällt und nicht kampfunfähig ist, kann er beim Berechnen des Fallschadens bis zu 27 Meter von der Fallhöhe abziehen und sich je 0,3 Meter Fallstrecke bis zu 0,6 Meter horizontal bewegen." },
      { name: "Todeskampf", beschreibung: "Wenn die Trefferpunkte des Drakoniden auf 0 sinken, schrumpfen seine Schuppen und sein Fleisch sofort, und seine Knochen explodieren. Jede Kreatur im Abstand von bis zu drei Metern muss einen SG-10-Geschicklichkeitsrettungswurf bestehen, oder sie erleidet 9 (2W8) Energieschaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drakonide führt zwei Dreizack- oder Nekrotischer-Strahl-Angriffe aus." },
      { name: "Dreizack", beschreibung: "Nah- oder Fernkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m oder Reichweite 6/18 m, ein Ziel. Treffer: 5 (1W6+2) Stichschaden, oder 6 (1W8+2) Stichschaden, wenn beidhändig geführt, um einen Nahkampfangriff auszuführen." },
      { name: "Nekrotischer Strahl", beschreibung: "Fernkampf-Zauberangriff: +4 zum Treffen, Reichweite 18 m, ein Ziel. Treffer: 10 (3W6) nekrotischer Schaden." },
      { name: "Zauberwirken", beschreibung: "Der Drakonide wirkt einen der folgenden Zauber. Er benötigt dazu keine Materialkomponenten und verwendet Charisma als Attribut zum Zauberwirken (SG-12-Zauberrettungswurf): Je 1-mal täglich: Stinkende Wolke, Unsichtbarkeit, Vergrößern/Verkleinern." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drakonischer Schlächter",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Jede Gesinnung",
    cr: 4,
    xp: 1100,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 57,
    tp_wuerfel: "6W10+24",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m" },
    attribute: { STR: 18, DEX: 10, CON: 18, INT: 10, WIS: 10, CHA: 10 },
    rettungswuerfe: { STR: 6, WEI: 2 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Stadt", "Ruinen", "Grasland"],
    bild: "assets/images/monster/schatzkammer/drakonischer_schlaechter.png",
    beschreibung: [
      "Die größten Drakoniden sind die Schlächter, die aus Eiern von Silberdrachen, blauen Drachen oder Saphirdrachen entstehen. Ihre mächtigen Flügel tragen sie auf dem Schlachtfeld dorthin, wo der Kampf am heftigsten tobt. Ihre magische Fähigkeit, das Aussehen derer anzunehmen, die sie getötet haben, kann unter ihren Feinden für Verwirrung und Verzweiflung sorgen. Wenn Schlächter getötet werden, gehen ihre Leichname in Flammen auf und äschern alles und jeden in der Nähe mit ein.",
      "In der Welt von Krynn werden drakonische Schlächter aus Silberdracheneiern als Sivak-Drakoniden bezeichnet."
    ],
    besonderheiten: [
      { name: "Todeskampf", beschreibung: "Wenn die Trefferpunkte des Drakoniden auf 0 sinken, geht er in Flammen auf und verbrennt zu Asche. Jede Kreatur im Radius von drei Metern muss einen SG-13-Geschicklichkeitsrettungswurf bestehen, oder sie erleidet 10 (3W6) Feuerschaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drakonide führt zwei Sägeschwertangriffe und einen Schwanzangriff aus." },
      { name: "Sägeschwert", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W8+4) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W8+4) Wuchtschaden. Wenn das Ziel eine höchstens große Kreatur ist, muss es einen SG-14-Stärkerettungswurf bestehen, oder es wird umgestoßen." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Formklau", beschreibung: "Wenn der Drakonide einen mittelgroßen oder kleinen Humanoiden getötet hat, kann er sich magisch verwandeln, sodass er aussieht und sich anfühlt wie diese Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Diese Verwandlung endet, wenn der Drakonide sie mit einer Aktion beendet oder stirbt." }
    ],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Drakonischer Stratege",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Jede Gesinnung",
    cr: 6,
    xp: 2300,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 67,
    tp_wuerfel: "9W8+27",
    bewegung: { "Gehen": "10 m" },
    attribute: { STR: 13, DEX: 14, CON: 16, INT: 15, WIS: 11, CHA: 17 },
    rettungswuerfe: { INT: 5, WEI: 3, CHA: 6 },
    fertigkeiten: { "Wahrnehmung": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert"],
    sinne: ["Wahrer Blick 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Stadt", "Ruinen", "Grasland"],
    bild: "assets/images/monster/schatzkammer/drakonischer_stratege.png",
    beschreibung: [
      "Die seltensten und mächtigsten Drakoniden sind die Strategen – Zauberwirker und Denker, die meist als militärische Befehlshaber oder als Berater ihrer Schöpfer dienen. Sie entstehen aus den Eiern von Golddrachen, roten Drachen oder Amethystdrachen, sind flügellos, verfügen jedoch über ein Arsenal mystischer Kräfte. Wie ihre Drachenabnen gebieten sie über eine Odemwaffe – sie können wabernde Wolken giftiger Gase freisetzen. Auch ihre enormen Klauen und Zähne sind gerade im Nahkampf nicht zu unterschätzen.",
      "Sterbende Strategen sind ein Anblick für sich, da ihre magische Essenz gerinnt und als Kugelblitz auf Kreaturen in der Nähe springt.",
      "In der Welt von Krynn werden drakonische Strategen aus Golddracheneiern als Aurak-Drakoniden bezeichnet."
    ],
    besonderheiten: [
      { name: "Todeskampf", beschreibung: "Wenn die Trefferpunkte des Drakoniden auf 0 verringert werden, entfesselt seine magische Essenz eine Blitzkugel auf die nächste Kreatur im Abstand von bis zu neun Metern, ehe sie bis zu zwei andere Kreaturen im Abstand von bis zu 4,5 Metern von der ersten trifft. Jede Kreatur muss einen SG-14-Geschicklichkeitsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 9 (2W8) Blitzschaden und ist bis zum Ende ihres nächsten Zugs betäubt. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht betäubt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drakonide führt drei Zerfleischen- oder Energiestrahl-Angriffe aus." },
      { name: "Energiestrahl", beschreibung: "Fernkampf-Zauberangriff: +6 zum Treffen, Reichweite 18 m, ein Ziel. Treffer: 8 (1W10+3) Energieschaden." },
      { name: "Vergiftender Odem (Aufladung 5–6)", beschreibung: "Der Drakonide atmet einen 4,5 Meter langen Kegel vergiftenden Gases aus. Jede Kreatur in dem Bereich muss einen SG-14-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 21 (6W6) Giftschaden und erhält eine Erschöpfungsstufe. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden, ist nicht erschöpft und ist 24 Stunden lang gegen jeden drakonischen giftigen Odem immun." },
      { name: "Zauberwirken", beschreibung: "Der Drakonide wirkt einen der folgenden Zauber. Er benötigt dazu keine Materialkomponenten und verwendet Charisma als Attribut zum Zauberwirken (SG-14-Zauberrettungswurf): Beliebig oft: Magierhand, Unsichtbarkeit. Je 2-mal täglich: Dimensionstür, Selbstverkleidung, Verständigung." },
      { name: "Zerfleischen", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W6+2) Hiebschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Magischer Schild (3-mal täglich)", beschreibung: "Wenn der Drakonide von einem Angriffswurf getroffen wird, kann er eine unsichtbare Barriere aus magischer Energie um sich erschaffen, die ihm +5 Bonus auf seine RK gegen den Angriff gewährt, sodass dieser möglicherweise fehlschlägt." }
    ],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Edelstein-Großwyrm",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Gigantisch",
    gesinnung: "Normalerweise neutral",
    cr: 26,
    xp: 90000,
    rk: 21,
    ruestungstyp: "natürliche Rüstung",
    tp: 507,
    tp_wuerfel: "26W20+234",
    bewegung: { "Gehen": "18 m", "Fliegen": "36 m (Schweben)", "Schwimmen": "18 m" },
    attribute: { STR: 28, DEX: 14, CON: 29, INT: 30, WIS: 24, CHA: 25 },
    rettungswuerfe: { GES: 10, KON: 17, WEI: 15, CHA: 15 },
    fertigkeiten: { "Arkane Kunde": 26, "Geschichte": 18, "Wahrnehmung": 15 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Energie", "Gleißend", "Nekrotisch", "Psychisch", "Schall"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Liegend", "Verängstigt", "Vergiftet"],
    sinne: ["Wahrer Blick 36 m"],
    passiveWahrnehmung: 25,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Andere Ebenen", "Gebirge", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/edelstein-grosswyrm.png",
    beschreibung: [
      "Edelsteindrachen sind noch erpichter als ihre chromatischen und metallischen Verwandten, ihre Drachensicht zu entwickeln und das Bewusstsein ihrer Echos auf den materiellen Ebenen zu verschmelzen. Manche glauben, dass sie so auch das zerborstene Bewusstsein von Sardior dem Rubindrachen wieder zusammenfügen, und dieses Ziel verfolgen sie mit nahezu religiöser Besessenheit. Andere wollen ihr Wissen über die vielen Welten der materiellen Ebene als Machtquelle nutzen – und tatsächlich, ein Edelsteindrache, der zum Großwyrm wird, gebietet über schier unvorstellbare Macht.",
      "Beim Aufstieg von Edelstein-Großwyrmen verwandelt sich ihr Körper und erscheint wie Kristall, die Schuppen strahlen wie Diamanten. Ihre Odemwaffe wird zu einer mächtigen Welle vernichtender Energie, mit der sich praktisch jede Kreatur umstandslos besiegen lässt. Doch die mächtigste Fähigkeit von Großwyrmen besteht in ihren unvergleichlichen telekinetischen Fähigkeiten – ein Edelstein-Großwyrm kann sich ganze Volksmengen telekinetisch greifen und in den Drachenhort verschleppen."
    ],
    besonderheiten: [
      { name: "Edelstein-Erwachen (wird nach kurzer oder langer Rast aufgeladen)", beschreibung: "Wenn die Trefferpunkte des Großwyrms auf 0 sinken würden, werden seine aktuellen Gesamttrefferpunkte stattdessen auf 400 zurückgesetzt, seine Odemwaffe wird aufgeladen, und er erhält alle verbrauchten Anwendungen seiner legendären Resistenz zurück. Außerdem kann der Großwyrm nun eine Stunde lang seine Massentelekinese-Aktion verwenden. Gib der Abenteurergruppe zusätzlich 90.000 EP (180.000 EP gesamt), wenn sie den Großwyrm besiegt, nachdem sein Edelstein-Erwachen erfolgt ist." },
      { name: "Legendäre Resistenz (4-mal täglich)", beschreibung: "Wenn der Rettungswurf des Großwyrms scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Ungewöhnliche Natur", beschreibung: "Der Großwyrm muss nicht essen oder trinken." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Großwyrm führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +17 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 20 (2W10+9) Stichschaden plus 16 (3W10) Energieschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +17 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 18 (2W8+9) Hiebschaden. Wenn das Ziel eine höchstens riesige Kreatur ist, wird es gepackt (SG-19-Rettungswurf) und ist festgesetzt, solange es gepackt ist. Der Großwyrm kann nur jeweils eine Kreatur packen." },
      { name: "Massentelekinese (nur Edelstein-Erwachen, wird nach kurzer oder langer Rast aufgeladen)", beschreibung: "Der Großwyrm zielt auf beliebig viele Kreaturen und Objekte im Abstand von bis zu 36 Metern, die er sehen kann. Ziele dürfen maximal zwei Tonnen wiegen und keine Objekte sein, die getragen werden. Jedes Ziel muss einen SG-26-Stärkerettungswurf bestehen, oder es wird vom telekinetischen Griff des Großwyrms festgesetzt. Es kann den Rettungswurf am Ende jedes seiner Züge wiederholen und den Effekt bei Erfolg beenden.\n\nAm Ende des Zugs des Großwyrms kann er jede Kreatur und jedes Objekt in seinem telekinetischen Griff bis zu 18 Meter in alle Richtungen bewegen, jedoch nur innerhalb von 36 Metern von sich. Außerdem kann er beliebig viele auf diese Art festgesetzte Kreaturen auswählen und ihnen jeweils 45 (7W12) Energieschaden zufügen." },
      { name: "Odemwaffe (Aufladung 5–6)", beschreibung: "Der Großwyrm atmet vernichtende Energie in einem Kegel von 90 Metern aus. Jede Kreatur in dem Bereich muss einen SG-25-Geschicklichkeitsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 71 (11W12) Energieschaden und wird umgestoßen. Bei einem erfolgreichen Rettungswurf erleidet es halb so viel Schaden und wird nicht umgestoßen. Unabhängig vom Rettungswurf beträgt die Bewegungsrate der Kreatur bis zum Ende ihres nächsten Zugs 0." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Großwyrm wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (Zauberrettungswurf SG 26, +18 zum Treffen mit Zauberangriff): Je 1-mal täglich: Ebenenwechsel, Energiekäfig, Magie bannen, Schwerkraft umkehren, Zeitstopp." }
    ],
    bonusaktionen: [
      { name: "Form ändern", beschreibung: "Der Großwyrm verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Großwyrm sie mit einer Bonusaktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." },
      { name: "Psychischer Schritt", beschreibung: "Der Großwyrm teleportiert sich magisch in einen freien Bereich im Abstand von bis zu 18 Metern, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Klauen", beschreibung: "Der Großwyrm führt einen Klauenangriff aus." },
      { name: "Psionik (kostet 2 Aktionen)", beschreibung: "Der Großwyrm setzt Psychischer Schritt oder Zauberwirken ein." },
      { name: "Psychischer Strahl (kostet 3 Aktionen)", beschreibung: "Der Großwyrm sendet einen Strahl psychischer Energie in einer 27 Meter langen, drei Meter breiten Linie aus. Jede Kreatur in dem Bereich muss einen SG-26-Intelligenzrettungswurf ausführen. Bei Misserfolg erleidet sie 27 (5W10) psychischen Schaden, anderenfalls die Hälfte." }
    ],
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Edelsteinpirscher",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Normalerweise neutral",
    cr: 5,
    xp: 1800,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 67,
    tp_wuerfel: "9W10+18",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m" },
    attribute: { STR: 17, DEX: 15, CON: 14, INT: 15, WIS: 10, CHA: 6 },
    rettungswuerfe: { GES: 5, INT: 5 },
    fertigkeiten: { "Heimlichkeit": 5, "Wahrnehmung": 3 },
    schadensresistenzen: ["Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Versteht Drakonisch, aber kann nicht sprechen", "Telepathie auf 18 m"],
    umgebung: ["Unterirdisch", "Höhle"],
    bild: "assets/images/monster/schatzkammer/edelsteinpirscher.png",
    beschreibung: [
      "Wenn ein Edelsteindrache eine aberrante Kreatur aus dem Fernen Reich tötet, formt er sie manchmal zum Edelsteinpirscher um. Dieser ist ein schlauer Räuber, der sich im Unterreich bewegen, Aberrationen jagen und den Hort seines Meisters bewachen kann. Edelsteinpirscher sind durch die mystischen Energien des Odems des Edelsteindrachen mit Leben, Bewusstsein und Absichten erfüllt und durch nichts von ihrer Mission abzubringen.",
      "Sie haben einen vierbeinigen Körper wie ein flügelloser Drache, jedoch mit entfernt humanoidem Torso, Kopf und Armen dort, wo der Drachenkopf sein sollte. Ihre Augen sind milchweiß. Sie haben kein Maul. Ihre Haut ist mit strahlenden Kristallen übersät, die vor psychischer Energie pulsieren. Diese Kristalle geben den Edelsteinpirschern ihre telepathischen Kräfte, ihre Fähigkeit, Kristallpfeile zu verschießen und andere Kreaturen durch eine besondere Verbindung zu beschützen."
    ],
    besonderheiten: [
      { name: "Spinnenklettern", beschreibung: "Der Edelsteinpirscher kann ohne Attributswürfe schwierige Oberflächen erklimmen und sich kopfüber an Decken entlang bewegen." },
      { name: "Ungewöhnliche Natur", beschreibung: "Der Edelsteinpirscher muss nicht essen oder trinken." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Edelsteinpirscher führt vier Klauenangriffe aus." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W6+3) Hiebschaden." }
    ],
    bonusaktionen: [
      { name: "Kristallpfeil", beschreibung: "Fernkampf-Zauberangriff: +5 zum Treffen, Reichweite 9 m, ein Ziel. Treffer: 7 (1W10+2) Energieschaden, und einer der folgenden Effekte tritt abhängig von dem Drachen auf, der den Edelsteinpirscher geschaffen hat:\n\nAmethyst: Der Edelsteinpirscher kann sich magisch in einen freien Bereich im Abstand von bis zu neun Metern teleportieren, den er sehen kann.\nKristall: Der Edelsteinpirscher erhält Trefferpunkte in Höhe des zugefügten psychischen Schadens zurück.\nSaphir: Das Ziel muss einen SG-13-Stärkerettungswurf bestehen, oder es wird bis zu drei Meter horizontal vom Edelsteinpirscher weg- und umgestoßen.\nSmaragd: Das Ziel muss mit W4 würfeln und das Ergebnis vom nächsten Angriffswurf abziehen, bis der nächste Zug des Edelsteinpirschers beginnt.\nTopas: Das Ziel muss einen SG-13-Konstitutionsrettungswurf bestehen, oder es ist bis zum Beginn des nächsten Zugs des Edelsteinpirschers vergiftet." }
    ],
    reaktionen: [
      { name: "Schützende Verknüpfung", beschreibung: "Wenn einer anderen Kreatur im Abstand von bis zu neun Metern vom Edelsteinpirscher, die er sehen kann, Schaden bevorsteht, verringert der Edelsteinpirscher diesen Schaden um 10 (3W6). Der Edelsteinpirscher erleidet den Schaden in dieser Höhe dann selbst." }
    ],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Eierdiebschlüpfling",
    art: "Monstrosität",
    unterart: null,
    groesse: "Winzig",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 28,
    tp_wuerfel: "8W4+8",
    bewegung: { "Gehen": "9 m", "Graben": "3 m", "Klettern": "9 m" },
    attribute: { STR: 8, DEX: 17, CON: 13, INT: 1, WIS: 10, CHA: 5 },
    rettungswuerfe: { GES: 5, WEI: 2 },
    fertigkeiten: { "Heimlichkeit": 7, "Wahrnehmung": 2 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Gebirge", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/eierdiebschluepfling.png",
    beschreibung: [
      "Ein Drachenei, das von einem Eierdieb geleert wurde, ist mit 1W6 neuen Eiern gefüllt, die nach 1W6 Tagen im Drachenei schlüpfen. Die Eierdiebschlüpflinge befreien sich nach 1W4 weiteren Tagen mithilfe ihres nadelspitzen Eizahns und kriechen hervor. Sie sind sehr gefräßig und verschlingen alle weiteren Dracheneier, an die sie herankommen. Nach etwa zwanzig Tagen sind sie ausgewachsen."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Eierdieb kann Luft und Wasser atmen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Eierdieb führt zwei Eizahn-Angriffe aus." },
      { name: "Eizahn", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W6+3) Stichschaden oder 17 (4W6+3) Stichschaden, wenn das Ziel ein Objekt ist." }
    ],
    bonusaktionen: [
      { name: "Rasche Bewegung", beschreibung: "Der Eierdieb führt die Spurt- oder Rückzug-Aktion aus." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Geisterdrache",
    art: "Untoter",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Jede Gesinnung",
    cr: 17,
    xp: 18000,
    rk: 10,
    ruestungstyp: null,
    tp: 324,
    tp_wuerfel: "24W12+168",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m (Schweben)" },
    attribute: { STR: 20, DEX: 10, CON: 25, INT: 16, WIS: 15, CHA: 19 },
    rettungswuerfe: { KON: 13, WEI: 8, CHA: 10 },
    fertigkeiten: { "Heimlichkeit": 12, "Wahrnehmung": 14 },
    schadensresistenzen: ["Hieb-, Stich- und Wuchtschaden"],
    schadensimmunitaeten: ["Gift", "Kälte", "Nekrotisch", "Säure"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpft", "Festgesetzt", "Gelähmt", "Gepackt", "Liegend", "Verängstigt", "Vergiftet", "Versteinert"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 24,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Ruinen", "Unterirdisch", "Höhle"],
    bild: "assets/images/monster/schatzkammer/geisterdrache.png",
    beschreibung: [
      "Die Bindung eines Drachen an seinen Schatz kann stark genug sein, um den Geist des Drachen nach seinem Ableben an die weltliche Existenz zu binden. So ein Geisterdrache spukt beim Schatz und ist oft an ein bestimmtes wertvolles Objekt gebunden, das zum Fokus der untoten Existenz des Drachen wird.",
      "Geisterdrachen sind durchscheinende, körperlose Versionen der ursprünglichen Drachen. Ihre Odemwaffe scheint zwar nur geisterhafte Flammen, Blitze oder Säurespritzer zu verschießen, trägt jedoch tatsächlich einen außerweltlichen Fluch. Der schattige Nebel des Odems kann auch im Wachzustand Albträume verursachen."
    ],
    besonderheiten: [
      { name: "Körperlose Bewegung", beschreibung: "Der Geisterdrache kann sich durch andere Kreaturen und Gegenstände wie durch schwieriges Gelände bewegen. Er erleidet 5 (1W10) Energieschaden, wenn er seinen Zug in einem Objekt beendet." },
      { name: "Legendäre Resistenz (3-mal täglich)", beschreibung: "Wenn der Rettungswurf des Geisterdrachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Ungewöhnliche Natur", beschreibung: "Der Geisterdrache muss nicht atmen, essen, trinken oder schlafen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Geisterdrache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 32 (6W8+5) Kälteschaden, und die Bewegungsrate des Ziels ist bis zum Beginn des nächsten Zugs des Drachen halbiert." },
      { name: "Entsetzlicher Odem (Aufladung 6)", beschreibung: "Der Geisterdrache atmet schattigen Nebel in einem Kegel von 27 Metern aus. Jede Kreatur in dem Bereich muss einen SG-21-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 40 (9W8) Kälteschaden und ist eine Minute lang vom Geisterdrachen verängstigt. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht verängstigt.\n\nVom Geisterdrachen verängstigte Kreaturen sind gelähmt. Eine verängstigte Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei einem Erfolg beenden. Wenn eine Kreatur ihren Rettungswurf besteht oder der Effekt auf sie endet, ist sie 24 Stunden lang gegen den Entsetzlichen Odem des Geisterdrachen immun." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 14 (2W8+5) nekrotischer Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Junge Drachenschildkröte",
    art: "Drache",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Normalerweise neutral",
    cr: 10,
    xp: 5900,
    rk: 19,
    ruestungstyp: "natürliche Rüstung",
    tp: 178,
    tp_wuerfel: "17W12+68",
    bewegung: { "Gehen": "6 m", "Schwimmen": "12 m" },
    attribute: { STR: 21, DEX: 10, CON: 19, INT: 10, WIS: 12, CHA: 12 },
    rettungswuerfe: { GES: 4, KON: 8, WEI: 5 },
    fertigkeiten: {},
    schadensresistenzen: ["Feuer"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Aqual", "Drakonisch"],
    umgebung: ["Ozean", "Gewässer"],
    bild: "assets/images/monster/schatzkammer/junge_drachenschildkroete.png",
    beschreibung: [
      "Drachenschildkröten sind mächtige Kreaturen, deren natürliche Magie eng mit den Ozeanen der materiellen Ebene verbunden ist. Die Drachenschildkröte im Monsterhandbuch ist ein typisches ausgewachsenes Exemplar, mindestens hundert Jahre alt und stolz auf ihren wertvollen Schatz."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Die Drachenschildkröte kann Luft und Wasser atmen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Drachenschildkröte führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 11 (1W12+5) Stichschaden plus 6 (1W12) Blitzschaden." },
      { name: "Dampfodem (Aufladung 5–6)", beschreibung: "Die Drachenschildkröte atmet kochenden Dampf in einem Kegel von neun Metern aus. Jede Kreatur in dem Bereich muss einen SG-16-Geschicklichkeitsrettungswurf ausführen. Bei Misserfolg erleidet sie 42 (12W6) Feuerschaden, andernfalls die Hälfte. Unter Wasser zu sein gewährt keine Resistenz gegen diesen Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 9 (1W8+5) Hiebschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Junge Seeschlange",
    art: "Drache",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Normalerweise neutral",
    cr: 8,
    xp: 3900,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 123,
    tp_wuerfel: "13W12+39",
    bewegung: { "Gehen": "3 m", "Schwimmen": "12 m" },
    attribute: { STR: 19, DEX: 12, CON: 17, INT: 11, WIS: 13, CHA: 10 },
    rettungswuerfe: { STR: 7, KON: 6 },
    fertigkeiten: { "Heimlichkeit": 4, "Wahrnehmung": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Kälte"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 14,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Gewässer", "Küste", "Ozean"],
    bild: "assets/images/monster/schatzkammer/junge_seeschlange.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Die Seeschlange kann Luft und Wasser atmen." },
      { name: "Belagerungsmonster", beschreibung: "Die Seeschlange fügt Objekten und Strukturen doppelten Schaden zu." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Seeschlange führt einen Bissangriff und einen Umschlingen- oder Schwanzangriff aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (2W10+4) Stichschaden plus 5 (1W10) Kälteschaden." },
      { name: "Raureifodem", beschreibung: "Aufladung 5–6. Die Seeschlange atmet Kälte in einem neun Meter langen Kegel aus. Jede Kreatur in dem Bereich muss einen SG-14-Konstitutionsrettungswurf ausführen. Bei Misserfolg erleidet sie 38 (7W10) Kälteschaden, andernfalls die Hälfte." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 9 (1W10+4) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-15-Stärkerettungswurf bestehen, oder es wird bis zu sechs Meter weit weg- und umgestoßen." },
      { name: "Umschlingen", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 6 m, eine Kreatur. Treffer: 22 (4W8+4) Wuchtschaden. Wenn das Ziel eine höchstens große Kreatur ist, wird es gepackt (Rettungswurf-SG 15). Ein gepacktes Ziel ist festgesetzt. Die Seeschlange kann solange kein weiteres Ziel umschlingen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Junger Amethystdrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Groß",
    gesinnung: "Normalerweise neutral",
    cr: 9,
    xp: 5000,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 168,
    tp_wuerfel: "16W10+80",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m (Schweben)", "Schwimmen": "12 m" },
    attribute: { STR: 21, DEX: 12, CON: 21, INT: 18, WIS: 15, CHA: 19 },
    rettungswuerfe: { GES: 5, KON: 9, WEI: 6, CHA: 8 },
    fertigkeiten: { "Arkane Kunde": 12, "Heimlichkeit": 5, "Überzeugen": 8, "Wahrnehmung": 10 },
    schadensresistenzen: ["Energie", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Liegend", "Verängstigt"],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Höhle", "Gewässer"],
    bild: "assets/images/monster/schatzkammer/junger_amethystdrache.png",
    beschreibung: [
      "Amethystdrachen, die mächtigsten Edelsteindrachen, kennen die Prinzipien des Multiversums von der Schwerkraft bis zu den Ausstrahlungen der äußeren Ebenen und können sie psionisch manipulieren. Ihre natürliche Psionik gibt ihnen eine gewisse Kontrolle darüber, wie stark die physikalischen Gesetze sie betreffen. Sie trotzen der Schwerkraft nicht nur dank ihrer enormen Flügel, und die Gravitation gibt sowohl ihrer verheerenden Odemwaffe als auch den explodierenden Amethystkristallen Kraft, die sie auf ihre Gegner spucken.",
      "Beim Schlüpfen haben Amethystdrachen Schuppen von stumpfem Purpur. Je größer sie werden, desto strahlender und durchscheinender werden ihre Schuppen, Hörner und Flügelmembranen. Die Schuppen von ausgewachsenen Amethystdrachen gleichen tiefvioletten Amethystkristallen, brechen das Licht und scheinen zu leuchten. Im Laufe des Lebens verblassen die Pupillen, sodass die Augen von uralten Exemplaren wie strahlend weiße oder blassviolette Kristallkugeln wirken. Hinter ihren Köpfen schweben Kristallhörner wie Amethystbrocken. Sie werden von telekinetischer Energie gehalten und verändern ihre Position je nach Stimmung des Drachen.",
      "Viele Amethystdrachen sind von der Existenz anderer Welten auf der materiellen Ebene fasziniert, vor allem von den Echos, die manche Drachen in diesen Welten manifestieren können. Außerdem streben sie nach Wissen über die Energien, die von den äußeren Ebenen ausgehen, und studieren die Gezeiten von Gut und Böse, Chaos und Ordnung, damit sie jene beraten können, die so weise sind, auf sie zu hören.",
      "Amethystdrachen sind besonders empfindlich für Durchdringungen des Fernen Reichs mit der materiellen Ebene. Sie hassen die Verderbtheit, die dadurch in die Welt kommt, und sind erbitterte Feinde des Fernen Reichs und aller Kreaturen, die durch dessen Berührung verändert wurden. Seltsamerweise sind sie jedoch fasziniert von Flumphs und mögen sie. Diese Aberrationen stellen sich den Verwüstungen der Gedankenschinder und anderer böser Aberrationen entgegen und erinnern die Amethystdrachen daran, dass man Verbündete auch an den seltsamsten Orten finden kann.",
      "Amethystdrachen sammeln nicht nur materiellen Reichtum, sondern auch Wissen und magische Verfahrensweisen über die Natur der Ebenen der Existenz, der kosmischen Energien und ferner Welten. Sie lieben Schätze aus verschiedenen Welten der materiellen Ebene, besonders magische Gegenstände und Kunstwerke, welche die Einmaligkeit der verschiedenen Welten symbolisieren. Meist bilden magische Gegenstände, welche Teleportation oder Reisen zwischen den Ebenen gestatten, Zauberbücher voller ähnlicher Magie und Abhandlungen über die Natur des Multiversums das Herzstück eines Amethystdrachenschatzes.",
      "Amethystdrachen richten ihre Horte in Höhlen an oder in abgeschiedenen Seen ein. Sie ziehen Höhlen vor, bei denen mindestens ein Eingang unter Wasser steht. Besonders schätzen sie Orte mit einer Mischung aus offenen Bereichen, Verbindungstunneln und Sackgassen, um ihre natürliche und magische Mobilität durch Flug und Teleportation auch in ihren Horten voll zu nutzen."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann Luft und Wasser atmen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 16 (2W10+5) Stichschaden plus 4 (1W8) Energieschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 9 (1W8+5) Hiebschaden." },
      { name: "Odem der Singularität", beschreibung: "Aufladung 5–6. Der Drache erzeugt eine Perle der Gravitation in seinem Maul und entlässt die Energie in einem Kegel von neun Metern. Jede Kreatur in dem Bereich muss einen Stärkerettungswurf gegen SG 17 ausführen. Scheitert der Rettungswurf, erleidet die Kreatur 36 (8W8) Energieschaden, und ihre Bewegungsrate ist bis zum Beginn des nächsten Zugs des Drachen auf 0 verringert. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden, und ihre Bewegungsrate ist nicht verringert." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-16-Zauberrettungswurf): Je 1-mal täglich: Flimmern, Magie bannen, Schutz vor Gut und Böse, Verständigung." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Junger Kristalldrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Groß",
    gesinnung: "Normalerweise chaotisch neutral",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 95,
    tp_wuerfel: "10W10+40",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Graben": "6 m", "Klettern": "12 m" },
    attribute: { STR: 17, DEX: 12, CON: 18, INT: 16, WIS: 14, CHA: 17 },
    rettungswuerfe: { GES: 4, KON: 7, WEI: 5, CHA: 6 },
    fertigkeiten: { "Heimlichkeit": 7, "Überlebenskunst": 8, "Wahrnehmung": 8 },
    schadensresistenzen: ["Gleißend", "Kälte"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 18,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Gebirge", "Höhle"],
    bild: "assets/images/monster/schatzkammer/junger_kristalldrache.png",
    beschreibung: [],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 14 (2W10+3) Stichschaden plus 4 (1W8) gleißender Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W6+3) Hiebschaden." },
      { name: "Schillernder Odem", beschreibung: "Aufladung 5–6. Der Drache atmet ein brillantes Strahlen in einem Kegel von neun Metern aus. Jede Kreatur in dem Bereich muss einen SG-15-Konstitutionsrettungswurf ausführen. Bei Misserfolg erleidet sie 27 (6W8) gleißenden Schaden, andernfalls die Hälfte. Der Drache erhält dann 10 temporäre Trefferpunkte durch Verzehr eines Teils der gleißenden Energie." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-14-Zauberrettungswurf): Beliebig oft: Göttliche Führung, Tanzende Lichter. Je 1-mal täglich: Hypnotisches Muster, Schwache Genesung." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Junger Mondsteindrache",
    art: "Drache",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Normalerweise neutral",
    cr: 8,
    xp: 3900,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 144,
    tp_wuerfel: "17W10+51",
    bewegung: { "Gehen": "12 m", "Fliegen": "18 m" },
    attribute: { STR: 18, DEX: 16, CON: 17, INT: 18, WIS: 17, CHA: 19 },
    rettungswuerfe: { KON: 6, INT: 7, WEI: 6, CHA: 7 },
    fertigkeiten: { "Heimlichkeit": 6, "Überzeugen": 7, "Wahrnehmung": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert"],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Drakonisch", "Gemeinsprache", "Sylvanisch"],
    umgebung: ["Feenwildnis", "Gebirge", "Wald", "Gewässer"],
    bild: "assets/images/monster/schatzkammer/junger_mondsteindrache.png",
    beschreibung: [],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (2W10+4) Stichschaden plus 5 (1W10) gleißender Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Hiebschaden." },
      { name: "Odemwaffe", beschreibung: "Aufladung 5–6. Der Drache setzt eine der folgenden Odemwaffen ein: Mondlichtodem: Der Drache atmet einen Strahl aus Mondlicht in einer 18 Meter langen, 1,5 Meter breiten Linie aus. Jede Kreatur in dem Bereich muss einen SG-14-Geschicklichkeitsrettungswurf ausführen. Bei Misserfolg erleidet sie 38 (7W10) gleißenden Schaden, andernfalls die Hälfte. Traumodem: Der Drache atmet Nebel in einem Kegel von 27 Metern aus. Jede Kreatur in dem Bereich muss einen SG-14-Konstitutionsrettungswurf bestehen, oder sie ist zehn Minuten lang bewusstlos. Dieser Effekt endet bei einer Kreatur, wenn sie Schaden erleidet oder jemand sie mit einer Aktion aufweckt." },
      { name: "Zauberwirken", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Materialkomponenten und verwendet Charisma als Attribut zum Zauberwirken (SG-15-Zauberrettungswurf): Je 1-mal täglich: Feenfeuer, Gefühle besänftigen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Junger Saphirdrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Groß",
    gesinnung: "Normalerweise rechtschaffen neutral",
    cr: 9,
    xp: 5000,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 157,
    tp_wuerfel: "15W10+75",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Graben": "6 m", "Klettern": "12 m" },
    attribute: { STR: 21, DEX: 14, CON: 20, INT: 16, WIS: 15, CHA: 16 },
    rettungswuerfe: { GES: 6, KON: 9, WEI: 6, CHA: 7 },
    fertigkeiten: { "Geschichte": 7, "Heimlichkeit": 6, "Überzeugen": 11, "Wahrnehmung": 10 },
    schadensresistenzen: ["Blitz", "Schall"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Gebirge", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/junger_saphirdrache.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Spinnenklettern", beschreibung: "Der Drache kann ohne Attributswürfe schwierige Oberflächen erklimmen und sich kopfüber an Decken entlang bewegen." },
      { name: "Tunnelbauer", beschreibung: "Der Drache kann sich mit halber Grabbewegungsrate durch massiven Fels graben. Dabei hinterlässt er einen Tunnel mit drei Metern Durchmesser." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 16 (2W10+5) Stichschaden plus 4 (1W8) Schallschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W6+5) Hiebschaden." },
      { name: "Schwächender Odem", beschreibung: "Aufladung 5–6. Der Drache stößt einen hohen, fast unhörbaren Tonpuls in einem Kegel von neun Metern aus. Jede Kreatur in dem Bereich muss einen SG-17-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 33 (6W10) Schallschaden und ist bis zum Ende ihres nächsten Zugs kampfunfähig. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht kampfunfähig." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-15-Zauberrettungswurf): Je 1-mal täglich: Dissonantes Flüstern, Mit Stein verschmelzen, Person festhalten." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Junger Smaragddrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Groß",
    gesinnung: "Normalerweise rechtschaffen neutral",
    cr: 8,
    xp: 3900,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 142,
    tp_wuerfel: "15W10+60",
    bewegung: { "Gehen": "12 m", "Fliegen": "18 m", "Graben": "9 m" },
    attribute: { STR: 21, DEX: 12, CON: 19, INT: 16, WIS: 14, CHA: 16 },
    rettungswuerfe: { GES: 4, KON: 7, WEI: 5, CHA: 6 },
    fertigkeiten: { "Arkane Kunde": 6, "Heimlichkeit": 4, "Täuschen": 6, "Wahrnehmung": 8 },
    schadensresistenzen: ["Feuer", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 18,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Gebirge", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/junger_smaragddrache.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Tunnelbauer", beschreibung: "Der Drache kann sich mit halber Grabbewegungsrate durch massiven Fels graben. Dabei hinterlässt er einen Tunnel mit drei Metern Durchmesser." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +8 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 16 (2W10+5) Stichschaden plus 3 (1W6) psychischer Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +8 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W6+5) Hiebschaden." },
      { name: "Desorientierender Odem", beschreibung: "Aufladung 5–6. Der Drache atmet eine Woge psychischer Dissonanz in einem Kegel von neun Metern aus. Jede Kreatur in dem Bereich muss einen SG-15-Intelligenzrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 31 (9W6) psychischen Schaden, und bis zum Ende ihres nächsten Zugs gilt: Wenn sie einen Angriffswurf oder einen Attributswurf ausführt, muss sie einen W6 werfen und das Ergebnis vom Wurf abziehen. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und keine weiteren Effekte." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-14-Zauberrettungswurf): Beliebig oft: Einfache Illusion, Magierhand (die Hand ist unsichtbar). Je 1-mal täglich: Gedanken wahrnehmen, Lautloses Trugbild, Unsichtbarkeit." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Junger Tiefendrache",
    art: "Drache",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Normalerweise neutral böse",
    cr: 5,
    xp: 1800,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 93,
    tp_wuerfel: "11W10+33",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Graben": "6 m", "Schwimmen": "12 m" },
    attribute: { STR: 18, DEX: 13, CON: 16, INT: 12, WIS: 14, CHA: 16 },
    rettungswuerfe: { GES: 4, KON: 6, WEI: 5, CHA: 6 },
    fertigkeiten: { "Heimlichkeit": 7, "Überzeugen": 6, "Wahrnehmung": 5 },
    schadensresistenzen: ["Gift", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 45 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Drakonisch", "Gemeinsprache", "Gemeinsprache der Unterreiche"],
    umgebung: ["Gewässer", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/junger_tiefendrache.png",
    beschreibung: [],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 9 (1W10+4) Stichschaden plus 3 (1W6) Giftschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W6+4) Hiebschaden." },
      { name: "Albtraumodem", beschreibung: "Aufladung 5–6. Der Drache atmet eine Sporenwolke in einem Kegel von neun Metern aus. Jede Kreatur in dem Bereich muss einen SG-14-Weisheitsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 22 (4W10) psychischen Schaden und ist eine Minute lang vor dem Drachen verängstigt. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und keine weiteren Effekte. Eine verängstigte Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei Erfolg beenden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Junger Topasdrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Groß",
    gesinnung: "Normalerweise chaotisch neutral",
    cr: 7,
    xp: 2900,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 127,
    tp_wuerfel: "17W10+34",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 17, DEX: 12, CON: 15, INT: 16, WIS: 15, CHA: 16 },
    rettungswuerfe: { GES: 4, KON: 5, WEI: 5, CHA: 6 },
    fertigkeiten: { "Einschüchtern": 9, "Heimlichkeit": 4, "Wahrnehmung": 8 },
    schadensresistenzen: ["Kälte", "Nekrotisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 18,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Gewässer", "Küste", "Ozean", "Sumpf"],
    bild: "assets/images/monster/schatzkammer/junger_topasdrache.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann Luft und Wasser atmen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 14 (2W10+3) Stichschaden plus 3 (1W6) nekrotischer Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W6+3) Hiebschaden." },
      { name: "Dörrender Odem", beschreibung: "Aufladung 5–6. Der Drache atmet gelbliche nekrotische Energie in einem Kegel von neun Metern aus. Jede Kreatur in dem Bereich muss einen SG-13-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 28 (8W6) nekrotischen Schaden und ist bis zum Ende ihres nächsten Zugs geschwächt. Geschwächte Kreaturen sind bei stärkebasierten Attributs- und Stärkerettungswürfen im Nachteil, und ihre stärkebasierten Waffenangriffe bewirken nur den halben Schaden. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht geschwächt." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-14-Zauberrettungswurf): Je 1-mal täglich: Verderben, Wasser erschaffen oder zerstören." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Kristalldrachennestling",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Mittelgroß",
    gesinnung: "Normalerweise chaotisch neutral",
    cr: 2,
    xp: 450,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 32,
    tp_wuerfel: "5W8+10",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m", "Graben": "4,5 m", "Klettern": "9 m" },
    attribute: { STR: 14, DEX: 12, CON: 14, INT: 14, WIS: 13, CHA: 15 },
    rettungswuerfe: { GES: 3, KON: 4, WEI: 3, CHA: 4 },
    fertigkeiten: { "Heimlichkeit": 5, "Überlebenskunst": 3, "Wahrnehmung": 5 },
    schadensresistenzen: ["Gleißend", "Kälte"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Drakonisch", "Telepathie auf 36 m"],
    umgebung: ["Gebirge", "Höhle"],
    bild: "assets/images/monster/schatzkammer/kristalldrachennestling.png",
    beschreibung: [],
    besonderheiten: [],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 7 (1W10+2) Stichschaden plus 2 (1W4) gleißender Schaden." },
      { name: "Schillernder Odem", beschreibung: "Aufladung 5–6. Der Drache atmet ein brillantes Strahlen in einem Kegel von 4,5 Metern aus. Jede Kreatur in dem Bereich muss einen SG-12-Konstitutionsrettungswurf ausführen. Bei Misserfolg erleidet sie 18 (4W8) gleißenden Schaden, andernfalls die Hälfte. Der Drache erhält dann 5 temporäre Trefferpunkte durch Verzehr eines Teils der gleißenden Energie." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken: Beliebig oft: Göttliche Führung, Tanzende Lichter." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Leerer Drache",
    art: "Untoter",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Jede Gesinnung",
    cr: 18,
    xp: 20000,
    rk: 19,
    ruestungstyp: "natürliche Rüstung",
    tp: 241,
    tp_wuerfel: "21W12+105",
    bewegung: { "Gehen": "12 m", "Fliegen": "18 m" },
    attribute: { STR: 23, DEX: 12, CON: 21, INT: 16, WIS: 13, CHA: 21 },
    rettungswuerfe: { KON: 11, INT: 9, WEI: 7, CHA: 11 },
    fertigkeiten: { "Arkane Kunde": 9, "Geschichte": 15, "Wahrnehmung": 13 },
    schadensresistenzen: ["Nekrotisch"],
    schadensimmunitaeten: ["Gift", "Gleißend"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpft", "Gelähmt", "Taub", "Verängstigt", "Vergiftet"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 23,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Ruinen", "Unterirdisch", "Gebirge"],
    bild: "assets/images/monster/schatzkammer/leerer_drache.png",
    beschreibung: [
      "Anders als Drachen, welche die Magie des Untods zu Machtzwecken ausloten, sehen manche metallischen Drachen ihn als Mittel zu edleren Zwecken. Um ein Artefakt zu beschützen oder einen Eid zu halten, verwandeln sie sich in einen leeren Drachen und tolerieren den Untod, bis der Zweck erfüllt ist.",
      "Wie der Name schon sagt, ist ein leerer Drache die Hülle eines metallischen Drachen, gefüllt mit gleißender Energie. Je nach Drachenart kann diese Energie die Form von Flammen, Blitzen oder nebligen Dämpfen annehmen.",
      "Leere Drachen lassen sich durch nichts von ihrem unsterblichen Zweck abbringen. Ihre Motivation ist so mächtig, dass ihr Körper neu ersteht, wenn er zerstört wird.",
      "Wenn sie ihren Zweck erreicht haben, gehen die meisten leeren Drachen in den Tod, den sie so lange zurückgewiesen haben. Doch andere suchen neue Aufgaben, um sich zu erhalten – oder bleiben dem Untod aus Sturheit oder Gewohnheit treu."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des leeren Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Rekonstruktion", beschreibung: "Wenn die Trefferpunkte des leeren Drachen auf 0 verringert werden, zerbricht sein Körper in neun Stücke: zwei Arme, zwei Beine, zwei Flügel, einen Schwanz, einen Torso und einen Kopf. Jedes Stück ist ein großes Objekt, besitzt eine RK von 19 und 27 Trefferpunkte. Es ist gegen psychischen Schaden und Giftschaden immun. Befinden sich alle Stücke nach 1W6 Tagen noch im Abstand von bis zu 9,6 Kilometern voneinander, werden sie zum Kopf teleportiert und verschmelzen mit ihm. Daraufhin erhält der leere Drache alle seine Trefferpunkte zurück und wird wieder aktiv." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der leere Drache führt einen Bissangriff und zwei Klauenangriffe aus und kann Zehrende Präsenz einsetzen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden plus 9 (2W8) gleißender Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Hiebschaden." },
      { name: "Zehrende Präsenz", beschreibung: "Jede Kreatur im Abstand von bis zu 18 Metern nach Wahl des leeren Drachen muss einen SG-19-Weisheitsrettungswurf ausführen. Scheitert der Rettungswurf, ist die Bewegungsrate der Kreatur halbiert, und die Kreatur ist bis zum Ende ihres nächsten Zugs bei Angriffswürfen im Nachteil. Bei einem erfolgreichen Rettungswurf sind sie 24 Stunden lang gegen die Zehrende Präsenz dieses leeren Drachen immun." },
      { name: "Gleißender Odem", beschreibung: "Aufladung 5–6. Der leere Drache atmet gleißende Flammen in einem Kegel von 18 Metern aus. Jede Kreatur in dem Bereich muss einen SG-19-Geschicklichkeitsrettungswurf ausführen. Bei Misserfolg erleidet sie 54 (12W8) gleißenden Schaden, andernfalls die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Klauen", beschreibung: "Der leere Drache führt einen Klauenangriff aus." },
      { name: "Geisterhafte Bindung (kostet 2 Aktionen)", beschreibung: "Der leere Drache erzeugt geisterhafte Fesseln um eine Kreatur im Abstand von bis zu 18 Metern, die er sehen kann. Das Ziel muss einen SG-19-Stärkerettungswurf bestehen, oder es ist bis zum Ende des nächsten Zugs des Drachen festgesetzt." },
      { name: "Dröhnende Schuppen (kostet 3 Aktionen)", beschreibung: "Vom leeren Drachen geht ein schmerzhaft lautes Schrillen aus. Jede Kreatur im Abstand von bis zu drei Metern vom leeren Drachen muss einen SG-19-Konstitutionsrettungswurf ausführen. Bei Misserfolg erleidet sie 24 (7W6) Schallschaden, andernfalls die Hälfte." }
    ],
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Löwendrachling",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Normalerweise neutral",
    cr: 7,
    xp: 2900,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 119,
    tp_wuerfel: "14W10+42",
    bewegung: { "Gehen": "12 m", "Fliegen": "18 m" },
    attribute: { STR: 19, DEX: 15, CON: 17, INT: 6, WIS: 12, CHA: 12 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Drakonisch"],
    umgebung: ["Grasland", "Hügel", "Wüste"],
    bild: "assets/images/monster/schatzkammer/loewendrachling.png",
    beschreibung: [
      "Löwendrachlinge sind territoriale Einzelgänger mit dem langen Hals und den Flügeln von Messingdrachen und dem Kopf und Körper eines Löwen – samt üppiger Mähne bei Männchen. Sie werden auch manchmal Dragonnes genannt. Löwendrachlinge setzen auf ihre Wildheit und ihr schreckliches Brüllen, um Beute zu machen und Rivalen zu verdrängen.",
      "Sie sind gefräßige Jäger, die sich in großen Territorien bewegen. Normalerweise stellen sie keine Gefahr für Humanoide dar, doch wer auf ihr Territorium gerät, ist ihre Beute – so kommt es zum Ruf der Kreatur als Menschenfresser."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Löwendrachling führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 15 (2W10+4) Stichschaden. Ist das Ziel eine mittelgroße oder kleinere Kreatur, muss sie einen SG-15-Stärkerettungswurf bestehen oder wird umgestoßen." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Hiebschaden." },
      { name: "Haarsträubendes Brüllen", beschreibung: "Aufladung 4–6. Der Löwendrachling lässt ein fürchterliches Brüllen hören, das bis zu 90 Meter weit zu hören ist. Alle Kreaturen im Abstand von bis zu neun Metern vom Löwendrachling, die sein Brüllen hören können, müssen einen SG-14-Weisheitsrettungswurf bestehen, oder sie sind eine Minute lang vom Löwendrachling verängstigt. Verfehlt das Ziel den Rettungswurf um mindestens 5 Punkte, so ist es für die gleiche Dauer auch gelähmt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei einem Erfolg beenden. Wenn ein Ziel seinen Rettungswurf besteht oder der Effekt endet, ist es in den nächsten 24 Stunden gegen das Haarsträubende Brüllen dieses Löwendrachlings immun." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Metallischer Friedenswächter",
    art: "Konstrukt",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Normalerweise neutral gut",
    cr: 4,
    xp: 1100,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 68,
    tp_wuerfel: "8W8+32",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 17, DEX: 10, CON: 18, INT: 14, WIS: 12, CHA: 11 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpft", "Gelähmt", "Verängstigt", "Vergiftet", "Versteinert"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Stadt", "Grasland"],
    bild: "assets/images/monster/schatzkammer/metallischer_friedenswaechter.png",
    beschreibung: [
      "Wenn ein metallischer Drache Zuneigung zu einer Siedlung kleinerer Leute fasst – oft, nachdem er eine Weile in humanoider Form dort zugebracht hat –, kann er beschließen, einen metallischen Friedenswächter zu erschaffen, um den Ort zu beschützen. Dieser kann Jahrhunderte lang über die Gemeinde wachen, seinen Drachenschöpfer vertreten und für Frieden und Ordnung sorgen."
    ],
    besonderheiten: [
      { name: "Telepathische Bindung", beschreibung: "Solange sich der Friedenswächter auf derselben Existenzebene wie sein Meister befindet, kann er seine Wahrnehmungen magisch übermitteln, und die beiden können telepathisch miteinander kommunizieren." },
      { name: "Unveränderliche Gestalt", beschreibung: "Der Friedenswächter ist gegen alle Zauber und Effekte immun, die seine Form ändern würden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Friedenswächter führt zwei Hiebangriffe aus." },
      { name: "Hieb", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 16 (3W8+3) Wuchtschaden." },
      { name: "Beruhigender Nebel", beschreibung: "Aufladung 5–6. Der Friedenswächter setzt ein beruhigendes Gas im Radius von neun Metern um sich herum frei. Jede Kreatur in dem Bereich muss einen SG-14-Charismarettungswurf bestehen, oder sie ist eine Minute lang vom Friedenswächter bezaubert. Auf diese Art bezauberte Kreaturen sind kampfunfähig und haben eine Bewegungsrate von 0." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Metallischer Großwyrm",
    art: "Drache",
    unterart: "Metallisch",
    groesse: "Gigantisch",
    gesinnung: "Normalerweise rechtschaffen gut",
    cr: 28,
    xp: 120000,
    rk: 22,
    ruestungstyp: "natürliche Rüstung",
    tp: 565,
    tp_wuerfel: "29W20+261",
    bewegung: { "Gehen": "18 m", "Fliegen": "36 m", "Graben": "18 m", "Schwimmen": "18 m" },
    attribute: { STR: 30, DEX: 16, CON: 29, INT: 21, WIS: 22, CHA: 30 },
    rettungswuerfe: { GES: 11, KON: 17, INT: 13, CHA: 18 },
    fertigkeiten: { "Motiv erkennen": 14, "Überzeugen": 18, "Wahrnehmung": 22 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Blitz (Bronze), Feuer (Messing und Gold), Kälte (Silber) oder Säure (Kupfer) – je nach Art des Großwyrms"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Wahrer Blick 36 m"],
    passiveWahrnehmung: 32,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Gebirge", "Grasland", "Andere Ebenen"],
    bild: "assets/images/monster/schatzkammer/metallischer_grosswyrm.png",
    beschreibung: [
      "Manche der ältesten und weisesten metallischen Drachen unterziehen sich einer wundersamen Metamorphose und werden zum Großwyrm. Hinter dieser Verwandlung steckt meist Bahamut, der seine würdigsten Kinder in einem Status erheben will, der seiner Größe angemessen ist.",
      "Die Verwandlung umfasst meist ein Verschmelzen von Bewusstsein, Magie und manchmal sogar von den physischen Formen mehrerer Echos des Drachen in den Welten der materiellen Ebene. Viele Drachen, die als Drachengötter beschrieben werden – darunter Aasterinian (im Abschnitt „Messingdrachen\" von Kapitel 5), Lendys und Tamara –, sind metallische Großwyrme, welche die Essenzen mehrerer Formen kombiniert haben, um diesen gottgleichen Status zu erhalten.",
      "Metallische Großwyrme überragen die meisten anderen Drachen und gehören zu den größten Kreaturen im Multiversum. Sie werden von mächtigen Elementarenergien umwirbelt, die auf ihre Wünsche reagieren, und ihre Odemwaffen können ganze Armeen schwächen und Landstriche verwüsten."
    ],
    besonderheiten: [
      { name: "Metallisches Erwachen", beschreibung: "Wird nach einer kurzen oder langen Rast aufgeladen. Wenn die Trefferpunkte des Großwyrms auf 0 sinken würden, werden seine aktuellen Gesamttrefferpunkte stattdessen auf 450 zurückgesetzt, seine Odemwaffe wird aufgeladen, und er erhält alle verbrauchten Anwendungen seiner legendären Resistenz zurück. Außerdem kann der Großwyrm nun eine Stunde lang die Mythischen Aktionen verwenden. Gib der Abenteurergruppe zusätzlich 120.000 EP (240.000 EP gesamt), wenn sie den Großwyrm besiegt, nachdem sein Metallisches Erwachen erfolgt ist." },
      { name: "Legendäre Resistenz (4/Tag)", beschreibung: "Wenn der Rettungswurf des Großwyrms scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Ungewöhnliche Natur", beschreibung: "Der Großwyrm muss nicht essen oder trinken." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Großwyrm führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +18 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 21 (2W10+10) Stichschaden plus 13 (2W12) Energieschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +18 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 19 (2W8+10) Hiebschaden. Wenn das Ziel eine höchstens riesige Kreatur ist, wird es gepackt (SG-20-Rettungswurf) und ist festgesetzt, solange es gepackt ist. Der Großwyrm kann nur jeweils eine Kreatur packen." },
      { name: "Form ändern", beschreibung: "Der Großwyrm verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit seiner Aktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." },
      { name: "Odemwaffe", beschreibung: "Aufladung 5–6. Der Großwyrm setzt eine der folgenden Odemwaffen ein: Elementarodem: Der Großwyrm atmet Elementarenergie in einem Kegel von 90 Metern aus. Jede Kreatur in dem Bereich muss einen SG-25-Geschicklichkeitsrettungswurf ausführen. Bei Misserfolg erleidet sie 84 (13W12) Schaden nach Art des Großwyrms – Blitz (Bronze), Feuer (Messing und Gold), Kälte (Silber) oder Säure (Kupfer) –, andernfalls die Hälfte. Zehrender Odem: Der Großwyrm atmet Gas in einem Kegel von 90 Metern aus. Jede Kreatur in dem Bereich muss einen SG-25-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, so ist die Kreatur eine Minute lang bewusstlos. Bei einem erfolgreichen Rettungswurf ist die Kreatur bis zum Ende des nächsten Zugs des Großwyrms bei Angriffswürfen und Rettungswürfen im Nachteil. Bewusstlose Kreaturen können den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei Erfolg beenden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +18 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 21 (2W10+10) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-26-Stärkerettungswurf bestehen, andernfalls wird es umgestoßen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Angriff", beschreibung: "Der Großwyrm führt einen Klauen- oder Schwanzangriff aus." },
      { name: "Flügelangriff (kostet 2 Aktionen)", beschreibung: "Der Großwyrm schlägt mit den Flügeln. Jede Kreatur im Abstand von bis zu neun Metern muss einen SG-26-Geschicklichkeitsrettungswurf bestehen, oder sie erleidet 17 (2W6+10) Wuchtschaden und wird umgestoßen. Der Großwyrm kann bis zur Hälfte seiner Flugbewegungsrate fliegend zurücklegen." }
    ],
    mythische_aktionen: {
      beschreibung: "Wenn das Merkmal Metallisches Erwachen des Großwyrms in der letzten Stunde aktiviert wurde, kann er die folgenden Optionen als legendäre Aktionen verwenden:",
      aktionen: [
        { name: "Biss", beschreibung: "Der Großwyrm führt einen Bissangriff aus." },
        { name: "Trümmerbrüllen (kostet 2 Aktionen)", beschreibung: "Der Großwyrm entfesselt ein magisches Brüllen. Jede Kreatur im Radius von 36 Metern um den Großwyrm muss einen SG-26-Konstitutionsrettungswurf bestehen, oder sie erleidet 19 (3W12) Schallschaden und ist bis zum Ende ihres nächsten Zugs kampfunfähig." }
      ]
    },
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Metallischer Sperling",
    art: "Konstrukt",
    unterart: null,
    groesse: "Winzig",
    gesinnung: "Normalerweise neutral gut",
    cr: 0.25,
    xp: 50,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 14,
    tp_wuerfel: "4W4+4",
    bewegung: { "Gehen": "12 m", "Fliegen": "18 m" },
    attribute: { STR: 4, DEX: 15, CON: 12, INT: 9, WIS: 10, CHA: 12 },
    rettungswuerfe: { GES: 4 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpft", "Gelähmt", "Verängstigt", "Vergiftet", "Versteinert"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Versteht Drakonisch und Gemeinsprache, spricht keine Sprachen"],
    umgebung: ["Stadt", "Wald", "Grasland"],
    bild: "assets/images/monster/schatzkammer/metallischer_sperling.png",
    beschreibung: [
      "Metallische Sperlinge sehen wie Singvögel aus und dienen ihren Herren als verdeckte Agenten, indem sie in der Gegend die Augen offenhalten, ohne einzugreifen. Über ihr telepathisches Band können sie ihren Schöpfer beschwören, wenn sie in Not sind."
    ],
    besonderheiten: [
      { name: "Telepathische Bindung", beschreibung: "Solange sich der Sperling auf derselben Existenzebene wie sein Meister befindet, kann er seine Wahrnehmungen magisch übermitteln, und die beiden können telepathisch miteinander kommunizieren." },
      { name: "Unveränderliche Gestalt", beschreibung: "Der Sperling ist gegen alle Zauber und Effekte immun, die seine Form ändern würden." }
    ],
    aktionen: [
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Hiebschaden." },
      { name: "Beruhigender Nebel", beschreibung: "Aufladung 5–6. Der Sperling setzt ein beruhigendes Gas im Radius von 1,5 Metern um sich herum frei. Jede Kreatur in dem Bereich muss einen SG-11-Charismarettungswurf bestehen, oder sie ist eine Minute lang vom Sperling bezaubert. Auf diese Art bezauberte Kreaturen sind kampfunfähig und haben eine Bewegungsrate von 0." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Mondsteindrachennestling",
    art: "Drache",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Normalerweise neutral",
    cr: 2,
    xp: 450,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 39,
    tp_wuerfel: "6W8+12",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m" },
    attribute: { STR: 16, DEX: 14, CON: 14, INT: 16, WIS: 14, CHA: 17 },
    rettungswuerfe: { INT: 5, WEI: 4, CHA: 5 },
    fertigkeiten: { "Heimlichkeit": 4, "Überzeugen": 5, "Wahrnehmung": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert"],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 18 m"],
    passiveWahrnehmung: 14,
    sprachen: ["Drakonisch"],
    umgebung: ["Feenwildnis", "Gebirge", "Wald", "Gewässer"],
    bild: "assets/images/monster/schatzkammer/mondsteindrachennestling.png",
    beschreibung: [],
    besonderheiten: [],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 12 (2W8+3) Stichschaden plus 3 (1W6) gleißender Schaden." },
      { name: "Odemwaffe", beschreibung: "Aufladung 5–6. Der Drache setzt eine der folgenden Odemwaffen ein: Mondlichtodem: Der Drache atmet einen Strahl aus Mondlicht in einer neun Meter langen, 1,5 Meter breiten Linie aus. Jede Kreatur in dem Bereich muss einen SG-12-Geschicklichkeitsrettungswurf ausführen. Bei Misserfolg erleidet sie 14 (4W6) gleißenden Schaden, andernfalls die Hälfte. Traumodem: Der Drache atmet Nebel in einem Kegel von 27 Metern aus. Jede Kreatur in dem Bereich muss einen SG-12-Konstitutionsrettungswurf bestehen, oder sie ist zehn Minuten lang bewusstlos. Dieser Effekt endet bei einer Kreatur, wenn sie Schaden erleidet oder jemand sie mit einer Aktion aufweckt." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Saphirdrachennestling",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Mittelgroß",
    gesinnung: "Normalerweise rechtschaffen neutral",
    cr: 3,
    xp: 700,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 45,
    tp_wuerfel: "6W8+18",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m", "Graben": "4,5 m", "Klettern": "9 m" },
    attribute: { STR: 17, DEX: 14, CON: 16, INT: 14, WIS: 13, CHA: 14 },
    rettungswuerfe: { GES: 4, KON: 5, WEI: 3, CHA: 4 },
    fertigkeiten: { "Geschichte": 4, "Heimlichkeit": 4, "Überzeugen": 6, "Wahrnehmung": 5 },
    schadensresistenzen: ["Blitz", "Schall"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Drakonisch", "Telepathie auf 36 m"],
    umgebung: ["Gebirge", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/saphirdrachennestling.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Spinnenklettern", beschreibung: "Der Drache kann ohne Attributswürfe schwierige Oberflächen erklimmen und sich kopfüber an Decken entlang bewegen." },
      { name: "Tunnelbauer", beschreibung: "Der Drache kann sich mit halber Grabbewegungsrate durch massiven Fels graben. Dabei hinterlässt er einen Tunnel mit 1,5 Metern Durchmesser." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W10+3) Stichschaden plus 3 (1W6) Schallschaden." },
      { name: "Schwächender Odem", beschreibung: "Aufladung 5–6. Der Drache stößt einen hohen, fast unhörbaren Tonpuls in einem Kegel von 4,5 Metern aus. Jede Kreatur in dem Bereich muss einen SG-13-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 22 (4W10) Schallschaden und ist bis zum Ende ihres nächsten Zugs kampfunfähig. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht kampfunfähig." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-12-Zauberrettungswurf): Je 1-mal täglich: Alarm, Tensers schwebende Scheibe." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Schatzmimik",
    art: "Monstrosität",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Normalerweise neutral",
    cr: 8,
    xp: 3900,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 123,
    tp_wuerfel: "13W12+39",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 21, DEX: 16, CON: 17, INT: 10, WIS: 16, CHA: 10 },
    rettungswuerfe: { KON: 6, WEI: 6 },
    fertigkeiten: { "Heimlichkeit": 6, "Überzeugen": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Liegend"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Höhle", "Ruinen", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/schatzmimik.png",
    beschreibung: [
      "Verwandt mit den gewöhnlichen Mimiks, beschrieben im Monsterhandbuch, sind die Schatzmimiks die ältesten und verschlagensten ihrer Art. Dank ihrer gigantischen amorphen Gestalt und ihren gestaltwandlerischen Fähigkeiten können sie nicht nur die Form eines einzelnen Objekts, sondern riesiger Schätze annehmen. Wie kleinere Mimiks sondern auch Schatzmimiks ein klebriges Sekret ab, um Beute zu fangen. Sie können ferner einen feinen ätzenden Nebel aus den Poren sprühen, der Kreaturen verbrennt und blind macht.",
      "Schatzmimiks gehen häufig Partnerschaften mit Drachen ein, denen sie als Schatzattrappen dienen, um Eindringlinge von den wahren Reichtümern abzulenken – und ins Maul des Mimiks zu locken. Bei unerwartet heftigem Widerstand ist es auch möglich, dass sie Informationen zum wahren Schatz preisgeben, um ihr Leben zu schonen."
    ],
    besonderheiten: [
      { name: "Falsches Erscheinungsbild (nur Schatzform)", beschreibung: "Wenn der Mimik am Anfang des Kampfs bewegungslos ist, so ist er beim Initiativewurf im Vorteil. Wenn eine Kreatur außerdem nicht gesehen hat, dass sich der Mimik bewegt oder handelt, muss diese Kreatur einen SG-18-Intelligenzwurf (Nachforschungen) bestehen, um zu erkennen, dass der Mimik kein Gegenstand ist." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Mimik führt einen Bissangriff und zwei Scheinfuß-Angriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +8 zum Treffen, Reichweite 1,5 m, eine Kreatur. Treffer: 16 (2W10+5) Stichschaden plus 7 (2W6) Säureschaden." },
      { name: "Scheinfuß", beschreibung: "Nahkampf-Waffenangriff: +8 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 12 (2W6+5) Wuchtschaden, und der Mimik klammert sich ans Ziel. Kreaturen, an die der Mimik sich klammert, sind auch von ihm gepackt (Rettungswurf-SG 16). Bis das Ziel sich befreit hat, ist es festgesetzt. Attributswürfe, um diesem Haltegriff zu entkommen, sind im Nachteil." },
      { name: "Ätzender Nebel", beschreibung: "Aufladung 5–6. Der Mimik versprüht einen feinen Säurenebel in einem Kegel von neun Metern. Jede Kreatur in dem Bereich muss einen SG-14-Geschicklichkeitsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 27 (6W8) Säureschaden und ist bis zum Ende ihres nächsten Zugs blind. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht blind." },
      { name: "Gestaltwandler", beschreibung: "Der Mimik nimmt die Form eines Schatzes an oder wechselt zurück zu seiner amorphen Gestalt. Seine Spielwerte sind in beiden Formen gleich. Ausrüstung, die er trägt oder hält, wird nicht verwandelt. Wenn er stirbt, nimmt er seine wahre Gestalt an." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Schatzskarabäenschwarm",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 31,
    tp_wuerfel: "7W8",
    bewegung: { "Gehen": "6 m", "Fliegen": "6 m", "Graben": "6 m" },
    attribute: { STR: 6, DEX: 16, CON: 11, INT: 3, WIS: 8, CHA: 6 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Hieb", "Stich", "Wucht"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Betäubt", "Bezaubert", "Festgesetzt", "Gelähmt", "Gepackt", "Liegend", "Verängstigt", "Versteinert"],
    sinne: ["Erschütterungssinn 18 m", "Dunkelsicht 18 m"],
    passiveWahrnehmung: 9,
    sprachen: [],
    umgebung: ["Höhle", "Ruinen", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/schatzskarabaeenschwarm.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Falsches Erscheinungsbild", beschreibung: "Wenn der Schwarm am Anfang des Kampfs bewegungslos ist, so ist er beim Initiativewurf im Vorteil. Wenn eine Kreatur außerdem nicht gesehen hat, dass sich der Schwarm bewegt oder handelt, muss diese Kreatur einen SG-18-Intelligenzwurf (Nachforschungen) bestehen, um zu erkennen, dass der Schwarm kein Gegenstand ist." },
      { name: "Schwarm", beschreibung: "Der Schwarm kann den Raum einer anderen Kreatur besetzen und umgekehrt, und er kann sich durch jede Öffnung bewegen, die groß genug für einen winzigen Skarabäus ist. Der Schwarm kann keine Trefferpunkte zurückgewinnen und keine temporären Trefferpunkte erhalten." }
    ],
    aktionen: [
      { name: "Bissschwarm", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 0, eine Kreatur im Bereich des Schwarms. Treffer: 13 (3W6+3) Stichschaden oder 6 (1W6+3) Stichschaden, wenn der Schwarm höchstens noch die Hälfte seiner Trefferpunkte hat, und das Ziel ist bis zum Anfang seines nächsten Zugs bei Angriffswürfen im Nachteil." }
    ],
    bonusaktionen: [
      { name: "Schuppenstaub (1-mal täglich)", beschreibung: "Der Schwarm setzt magischen Glitzerstaub von seinen Flügeln frei. Jede Kreatur im Abstand von bis zu drei Metern vom Schwarm muss einen SG-13-Geschicklichkeitsrettungswurf bestehen, oder ihre Umrisse erscheinen zehn Minuten lang in blauem Licht. Während der Wirkungsdauer verbreiten betroffene Kreaturen dämmriges Licht im Radius von drei Metern und können die Vorzüge einer Unsichtbarkeit nicht nutzen. Außerdem bemerkt jeder Drache im Umkreis von 1,6 Kilometern die Kreatur und kann sie unfehlbar aufspüren. Wird Magie bannen auf die Kreatur gewirkt, endet der Effekt." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Schatzskarabäus",
    art: "Monstrosität",
    unterart: null,
    groesse: "Winzig",
    gesinnung: "Gesinnungslos",
    cr: 0.125,
    xp: 25,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 7,
    tp_wuerfel: "3W4",
    bewegung: { "Gehen": "6 m", "Fliegen": "6 m", "Graben": "6 m" },
    attribute: { STR: 4, DEX: 16, CON: 11, INT: 3, WIS: 8, CHA: 6 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Erschütterungssinn 18 m", "Dunkelsicht 18 m"],
    passiveWahrnehmung: 9,
    sprachen: [],
    umgebung: ["Höhle", "Ruinen", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/schatzskarabaeus.png",
    beschreibung: [
      "Schatzskarabäen sind käferartige Kreaturen, die durch natürliche Anpassung oder alchemistisches Genie perfekt in einen Haufen Goldmünzen passen. Sie fressen winzige Milben in den Drachenschuppen und im Hort. Ihr schmerzhafter Biss ist bei Schatzdieben gefürchtet.",
      "Schatzskarabäen setzen funkelnden Metallstaub aus ihren Flügeln frei, der Eindringlinge überzieht, die ihm zu nahe kommen. Die Magie des Staubs erlaubt dem drakonischen Eigner des Horts, den Aufenthaltsort der Eindringlinge zu erkennen."
    ],
    besonderheiten: [
      { name: "Falsches Erscheinungsbild", beschreibung: "Wenn der Skarabäus am Anfang des Kampfs bewegungslos ist, so ist er beim Initiativewurf im Vorteil. Wenn eine Kreatur außerdem nicht gesehen hat, dass sich der Skarabäus bewegt oder handelt, muss diese Kreatur einen SG-18-Intelligenzwurf (Nachforschungen) bestehen, um zu erkennen, dass der Skarabäus kein Gegenstand ist." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W4+3) Stichschaden. Wenn das Ziel eine Kreatur ist, so ist sie bis zum Beginn ihres nächsten Zugs bei Angriffswürfen im Nachteil." }
    ],
    bonusaktionen: [
      { name: "Schuppenstaub (1-mal täglich)", beschreibung: "Der Skarabäus setzt magischen Glitzerstaub von seinen Flügeln frei. Jede Kreatur im Abstand von bis zu 1,5 Metern vom Skarabäus muss einen SG-13-Geschicklichkeitsrettungswurf bestehen, oder ihre Umrisse erscheinen zehn Minuten lang in blauem Licht. Während der Wirkungsdauer verbreiten betroffene Kreaturen dämmriges Licht im Radius von drei Metern und können die Vorzüge einer Unsichtbarkeit nicht nutzen. Außerdem bemerkt jeder Drache im Umkreis von 1,6 Kilometern die Kreatur und kann sie unfehlbar aufspüren. Wird Magie bannen auf die Kreatur gewirkt, endet der Effekt." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Smaragddrachennestling",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Mittelgroß",
    gesinnung: "Normalerweise rechtschaffen neutral",
    cr: 2,
    xp: 450,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 39,
    tp_wuerfel: "6W8+12",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m", "Graben": "6 m" },
    attribute: { STR: 15, DEX: 12, CON: 15, INT: 14, WIS: 12, CHA: 14 },
    rettungswuerfe: { GES: 3, KON: 4, WEI: 3, CHA: 4 },
    fertigkeiten: { "Arkane Kunde": 4, "Heimlichkeit": 3, "Täuschen": 4, "Wahrnehmung": 5 },
    schadensresistenzen: ["Feuer", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Drakonisch", "Telepathie auf 36 m"],
    umgebung: ["Gebirge", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/smaragddrachennestling.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Tunnelbauer", beschreibung: "Der Drache kann sich mit halber Grabbewegungsrate durch massiven Fels graben. Dabei hinterlässt er einen Tunnel mit 1,5 Metern Durchmesser." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 7 (1W10+2) Stichschaden plus 3 (1W6) psychischer Schaden." },
      { name: "Desorientierender Odem", beschreibung: "Aufladung 5–6. Der Drache atmet eine Woge psychischer Dissonanz in einem Kegel von 4,5 Metern aus. Jede Kreatur in dem Bereich muss einen SG-12-Intelligenzrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 17 (5W6) psychischen Schaden, und bis zum Ende ihres nächsten Zugs gilt: Wenn sie einen Angriffswurf oder einen Attributswurf ausführt, muss sie einen W4 werfen und das Ergebnis vom Wurf abziehen. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und keine weiteren Effekte." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-12-Zauberrettungswurf): Beliebig oft: Einfache Illusion, Magierhand (die Hand ist unsichtbar)." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Tiefendrachennestling",
    art: "Drache",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Normalerweise neutral böse",
    cr: 1,
    xp: 200,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 27,
    tp_wuerfel: "5W8+5",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m", "Graben": "4,5 m", "Schwimmen": "9 m" },
    attribute: { STR: 14, DEX: 11, CON: 12, INT: 11, WIS: 12, CHA: 13 },
    rettungswuerfe: { GES: 2, KON: 3, WEI: 3, CHA: 3 },
    fertigkeiten: { "Heimlichkeit": 4, "Überzeugen": 3, "Wahrnehmung": 3 },
    schadensresistenzen: ["Gift", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 27 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Drakonisch"],
    umgebung: ["Gewässer", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/tiefendrachennestling.png",
    beschreibung: [],
    besonderheiten: [],
    aktionen: [
      { name: "Albtraumodem", beschreibung: "Aufladung 5–6. Der Drache atmet eine Sporenwolke in einem Kegel von 4,5 Metern aus. Jede Kreatur in dem Bereich muss einen SG-11-Weisheitsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 5 (1W10) psychischen Schaden und ist eine Minute lang vor dem Drachen verängstigt. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und keine weiteren Effekte. Eine verängstigte Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei Erfolg beenden." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W10+2) Stichschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Topasdrachennestling",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Mittelgroß",
    gesinnung: "Normalerweise chaotisch neutral",
    cr: 2,
    xp: 450,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 33,
    tp_wuerfel: "6W8+6",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m", "Schwimmen": "9 m" },
    attribute: { STR: 15, DEX: 12, CON: 13, INT: 14, WIS: 13, CHA: 14 },
    rettungswuerfe: { GES: 3, KON: 3, WEI: 3, CHA: 4 },
    fertigkeiten: { "Einschüchtern": 6, "Heimlichkeit": 3, "Wahrnehmung": 5 },
    schadensresistenzen: ["Kälte", "Nekrotisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Drakonisch", "Telepathie auf 36 m"],
    umgebung: ["Gewässer", "Küste", "Ozean", "Sumpf"],
    bild: "assets/images/monster/schatzkammer/topasdrachennestling.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann Luft und Wasser atmen." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W10+2) Stichschaden plus 2 (1W4) nekrotischer Schaden." },
      { name: "Dörrender Odem", beschreibung: "Aufladung 5–6. Der Drache atmet gelbliche nekrotische Energie in einem Kegel von 4,5 Metern aus. Jede Kreatur in dem Bereich muss einen SG-11-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 21 (6W6) nekrotischen Schaden und ist bis zum Ende ihres nächsten Zugs geschwächt. Geschwächte Kreaturen sind bei stärkebasierten Attributs- und Stärkerettungswürfen im Nachteil, und ihre stärkebasierten Waffenangriffe bewirken nur den halben Schaden. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht geschwächt." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-12-Zauberrettungswurf): 1-mal täglich: Verderben." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Uralte Drachenschildkröte",
    art: "Drache",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Normalerweise neutral",
    cr: 24,
    xp: 62000,
    rk: 22,
    ruestungstyp: "natürliche Rüstung",
    tp: 409,
    tp_wuerfel: "21W20+189",
    bewegung: { "Gehen": "9 m", "Schwimmen": "18 m" },
    attribute: { STR: 28, DEX: 12, CON: 29, INT: 14, WIS: 19, CHA: 15 },
    rettungswuerfe: { GES: 8, KON: 16, WEI: 11 },
    fertigkeiten: { "Wahrnehmung": 11 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer", "Kälte"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Wahrer Blick 36 m"],
    passiveWahrnehmung: 21,
    sprachen: ["Aqual", "Drakonisch"],
    umgebung: ["Ozean", "Gewässer"],
    bild: "assets/images/monster/schatzkammer/uralte_drachenschildkroete.png",
    beschreibung: [
      "Drachenschildkröten sind mächtige Kreaturen, deren natürliche Magie eng mit den Ozeanen der materiellen Ebene verbunden ist. Die Drachenschildkröte im Monsterhandbuch ist ein typisches ausgewachsenes Exemplar, mindestens hundert Jahre alt und stolz auf ihren wertvollen Schatz.",
      "Uralte Drachenschildkröten sind mythische Kreaturen wie Großwyrme mit der Macht mehrerer Echos in den Welten der materiellen Ebene. Sie können groß wie Inseln sein – und natürlich gibt es die passenden Legenden von Seeleuten, die im Nebel gestrandet sind und eine schlummernde Drachenschildkröte für festes Land gehalten haben. Uralte Drachenschildkröten können jahrzehntelang schlafen, während sie im Ozean treiben, die Sonne genießen und Vegetation auf sich wuchern lassen. Werden sie zornig, so ist das ein fürchterlicher Anblick. Ihr Panzer erhitzt sich und bringt das Wasser zum Kochen – samt allen Kreaturen darin. Und wenn ein Gegner die Abwehr der Drachenschildkröte überwunden glaubt, manifestieren sich magische Stürme, um sie zu beschützen und ihn niederzuschmettern."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Die Drachenschildkröte kann Luft und Wasser atmen." },
      { name: "Legendäre Resistenz (3-mal täglich)", beschreibung: "Wenn der Rettungswurf der Drachenschildkröte scheitert, kann sie den Wurf in einen Erfolg verwandeln." },
      { name: "Segen des Ozeans (wird nach kurzer oder langer Rast aufgeladen)", beschreibung: "Wenn die Trefferpunkte der Drachenschildkröte auf 0 sinken würden, werden ihre aktuellen Gesamttrefferpunkte stattdessen auf 350 zurückgesetzt, und ihr Dampfodem wird aufgeladen. Außerdem kann die Drachenschildkröte nun eine Stunde lang die Optionen im Abschnitt „Mythische Aktionen“ verwenden. Gib der Abenteuergruppe zusätzlich 62.000 EP (124.000 EP gesamt), wenn sie die Drachenschildkröte besiegt, nachdem ihr Segen des Meeres erfolgt ist." },
      { name: "Ungewöhnliche Natur", beschreibung: "Die Drachenschildkröte muss nicht essen oder trinken." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Drachenschildkröte führt einen Biss- oder Schwanzangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +16 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 15 (1W12+9) Stichschaden plus 13 (2W12) Blitzschaden." },
      { name: "Dampfodem (Aufladung 5–6)", beschreibung: "Die Drachenschildkröte atmet Dampf in einem Kegel von 27 Metern aus. Jede Kreatur in dem Bereich muss einen SG-24-Konstitutionsrettungswurf ausführen. Bei Misserfolg erleidet sie 67 (15W8) Feuerschaden, andernfalls die Hälfte. Unter Wasser zu sein gewährt keine Resistenz gegen diesen Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +16 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 18 (2W8+9) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +16 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 20 (2W10+9) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-24-Stärkerettungswurf bestehen, andernfalls wird es umgestoßen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Angriff", beschreibung: "Die Drachenschildkröte führt einen Klauen- oder Schwanzangriff aus." },
      { name: "Bewegung", beschreibung: "Die Drachenschildkröte nutzt ihre Bewegungsrate. Wenn die Drachenschildkröte schwimmt, löst diese Bewegung keine Gelegenheitsangriffe aus." },
      { name: "Kochende Aura (kostet 3 Aktionen)", beschreibung: "Die Drachenschildkröte strahlt intensive Hitze aus. Wenn eine Kreatur bis zum Beginn des nächsten Zugs der Drachenschildkröte ihren Zug im Abstand von bis zu sechs Metern von der Drachenschildkröte beginnt, muss sie einen SG-24-Konstitutionsrettungswurf bestehen, oder sie erleidet 40 (9W8) Feuerschaden. Unter Wasser zu sein gewährt keine Resistenz gegen diesen Schaden." }
    ],
    mythische_aktionen: {
      beschreibung: "Wenn das Merkmal „Segen des Ozeans\" der Drachenschildkröte in der letzten Stunde aktiviert wurde, kann sie die Optionen unten als legendäre Aktionen verwenden.",
      aktionen: [
        { name: "Biss", beschreibung: "Die Drachenschildkröte führt einen Bissangriff aus." },
        { name: "Rüstung der Stürme (kostet 2 Aktionen)", beschreibung: "Die Drachenschildkröte ist vorübergehend von Blitzen umgeben und erhält bis zum Anfang ihres nächsten Zugs 40 temporäre Trefferpunkte. Bis all diese temporären Trefferpunkte verbraucht sind, erleiden alle Kreaturen, welche die Drachenschildkröte berühren oder mit einem Nahkampfangriff treffen, 26 (4W12) Blitzschaden." }
      ]
    },
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Uralte Seeschlange",
    art: "Drache",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Normalerweise neutral",
    cr: 14,
    xp: 11500,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 170,
    tp_wuerfel: "11W20+55",
    bewegung: { "Gehen": "6 m", "Schwimmen": "18 m" },
    attribute: { STR: 24, DEX: 15, CON: 20, INT: 13, WIS: 16, CHA: 12 },
    rettungswuerfe: { STR: 12, KON: 10 },
    fertigkeiten: { "Heimlichkeit": 7, "Wahrnehmung": 8 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Kälte"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 18,
    sprachen: ["Drakonisch", "Gemeinsprache"],
    umgebung: ["Gewässer", "Küste", "Ozean"],
    bild: "assets/images/monster/schatzkammer/uralte_seeschlange.png",
    beschreibung: [
      "Seeschlangen gehören mit den Drachenschildkröten zu den gefürchtetsten Räubern der Tiefsee und zu den schlimmsten Albträumen von Seeleuten. Mit ihren starken Flossen können sie sich sehr schnell durchs Wasser bewegen.",
      "Junge Seeschlangen sind fähige Jäger. Sie verstecken sich in Riffen oder anderweitig, ehe sie zuschlagen und die Mitglieder einer Schiffsbesatzung einzeln niedermachen. Uralte Seeschlangen sind groß genug, um komplette Schiffe zu zerstören und die hilflosen Schiffbrüchigen dann in aller Ruhe zu verschlingen. Sie greifen mit fürchterlichen Bissen, ihrem peitschenden Schwanz, einem gnadenlosen Griff und einer Kälte-Odemwaffe an, die schon manchen Seemann gefroren mit seinem Wrack im Meer hat treiben lassen.",
      "Seeschlangen sind ebenso territorial wie alle anderen Drachen und sehen es nicht gerne, wenn Schiffe ihr Territorium ohne Erlaubnis durchkreuzen. Manchmal lassen sie sich mit Schätzen besänftigen, doch meistens muss die Besatzung mindestens eins ihrer Mitglieder opfern.",
      "Von ihren Horten in Tiefseehöhlen oder gesunkenen Schiffen aus sammeln sie die Fracht der von ihnen versenkten Schiffe und häufen große Schätze aus Handelsgütern, Seemannsstand und Piratenbeute an."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Die Seeschlange kann Luft und Wasser atmen." },
      { name: "Belagerungsmonster", beschreibung: "Die Seeschlange fügt Objekten und Strukturen doppelten Schaden zu." },
      { name: "Legendäre Resistenz (2/Tag)", beschreibung: "Wenn der Rettungswurf der Seeschlange scheitert, kann sie den Wurf in einen Erfolg verwandeln." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Seeschlange führt einen Bissangriff und einen Umschlingen- oder Schwanzangriff aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 20 (2W12+7) Stichschaden plus 6 (1W12) Kälteschaden." },
      { name: "Raureifodem", beschreibung: "Aufladung 5–6. Die Seeschlange atmet Kälte in einem 18 Meter langen Kegel aus. Jede Kreatur in dem Bereich muss einen SG-18-Konstitutionsrettungswurf ausführen. Bei Misserfolg erleidet sie 49 (9W10) Kälteschaden, andernfalls die Hälfte." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 13 (1W12+7) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-20-Stärkerettungswurf bestehen, oder es wird bis zu neun Meter weit von der Seeschlange weg- und umgestoßen." },
      { name: "Umschlingen", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 6 m, eine Kreatur. Treffer: 29 (4W10+7) Wuchtschaden, und das Ziel wird gepackt (Rettungswurf-SG 20). Ein gepacktes Ziel ist festgesetzt. Die Seeschlange kann solange kein weiteres Ziel umschlingen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Schwanz", beschreibung: "Die Seeschlange führt einen Schwanzangriff aus." },
      { name: "Biss (kostet 2 Aktionen)", beschreibung: "Die Seeschlange führt einen Bissangriff aus." }
    ],
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Uralter Amethystdrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Gigantisch",
    gesinnung: "Normalerweise neutral",
    cr: 23,
    xp: 50000,
    rk: 20,
    ruestungstyp: "natürliche Rüstung",
    tp: 444,
    tp_wuerfel: "24W20+192",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m (Schweben)", "Schwimmen": "12 m" },
    attribute: { STR: 26, DEX: 14, CON: 27, INT: 26, WIS: 19, CHA: 23 },
    rettungswuerfe: { GES: 9, KON: 15, WEI: 11, CHA: 13 },
    fertigkeiten: { "Arkane Kunde": 22, "Heimlichkeit": 9, "Überzeugen": 13, "Wahrnehmung": 18 },
    schadensresistenzen: ["Energie", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Liegend", "Verängstigt"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 28,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Höhle", "Gewässer"],
    bild: "assets/images/monster/schatzkammer/uralter_amethystdrache.png",
    beschreibung: [
      "Amethystdrachen, die mächtigsten Edelsteindrachen, kennen die Prinzipien des Multiversums von der Schwerkraft bis zu den Ausstrahlungen der äußeren Ebenen und können sie psionisch manipulieren. Ihre natürliche Psionik gibt ihnen eine gewisse Kontrolle darüber, wie stark die physikalischen Gesetze sie betreffen. Sie trotzen der Schwerkraft nicht nur dank ihrer enormen Flügel, und die Gravitation gibt sowohl ihrer verheerenden Odemwaffe als auch den explodierenden Amethystkristallen Kraft, die sie auf ihre Gegner spucken.",
      "Beim Schlüpfen haben Amethystdrachen Schuppen von stumpfem Purpur. Je größer sie werden, desto strahlender und durchscheinender werden ihre Schuppen, Hörner und Flügelmembranen. Die Schuppen von ausgewachsenen Amethystdrachen gleichen tiefvioletten Amethystkristallen, brechen das Licht und scheinen zu leuchten. Im Laufe des Lebens verblassen die Pupillen, sodass die Augen von uralten Exemplaren wie strahlend weiße oder blassviolette Kristallkugeln wirken. Hinter ihren Köpfen schweben Kristallhörner wie Amethystbrocken. Sie werden von telekinetischer Energie gehalten und verändern ihre Position je nach Stimmung des Drachen.",
      "Viele Amethystdrachen sind von der Existenz anderer Welten auf der materiellen Ebene fasziniert, vor allem von den Echos, die manche Drachen in diesen Welten manifestieren können. Außerdem streben sie nach Wissen über die Energien, die von den äußeren Ebenen ausgehen, und studieren die Gezeiten von Gut und Böse, Chaos und Ordnung, damit sie jene beraten können, die so weise sind, auf sie zu hören.",
      "Amethystdrachen sind besonders empfindlich für Durchdringungen des Fernen Reichs mit der materiellen Ebene. Sie hassen die Verderbtheit, die dadurch in die Welt kommt, und sind erbitterte Feinde des Fernen Reichs und aller Kreaturen, die durch dessen Berührung verändert wurden. Seltsamerweise sind sie jedoch fasziniert von Flumphs und mögen sie. Diese Aberrationen stellen sich den Verwüstungen der Gedankenschinder und anderer böser Aberrationen entgegen und erinnern die Amethystdrachen daran, dass man Verbündete auch an den seltsamsten Orten finden kann.",
      "Amethystdrachen sammeln nicht nur materiellen Reichtum, sondern auch Wissen und magische Verfahrensweisen über die Natur der Ebenen der Existenz, der kosmischen Energien und ferner Welten. Sie lieben Schätze aus verschiedenen Welten der materiellen Ebene, besonders magische Gegenstände und Kunstwerke, welche die Einmaligkeit der verschiedenen Welten symbolisieren. Meist bilden magische Gegenstände, welche Teleportation oder Reisen zwischen den Ebenen gestatten, Zauberbücher voller ähnlicher Magie und Abhandlungen über die Natur des Multiversums das Herzstück eines Amethystdrachenschatzes.",
      "Amethystdrachen richten ihre Horte in Höhlen an oder in abgeschiedenen Seen ein. Sie ziehen Höhlen vor, bei denen mindestens ein Eingang unter Wasser steht. Besonders schätzen sie Orte mit einer Mischung aus offenen Bereichen, Verbindungstunneln und Sackgassen, um ihre natürliche und magische Mobilität durch Flug und Teleportation auch in ihren Horten voll zu nutzen."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann Luft und Wasser atmen." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 19 (2W10+8) Stichschaden plus 13 (3W8) Energieschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (2W6+8) Hiebschaden." },
      { name: "Odem der Singularität", beschreibung: "Aufladung 5–6. Der Drache erzeugt eine Perle der Gravitation in seinem Maul und entlässt die Energie in einem Kegel von 27 Metern. Jede Kreatur in dem Bereich muss einen Stärkerettungswurf gegen SG 23 ausführen. Scheitert der Rettungswurf, erleidet die Kreatur 63 (14W8) Energieschaden, und ihre Bewegungsrate ist bis zum Beginn des nächsten Zugs des Drachen auf 0 verringert. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden, und ihre Bewegungsrate ist nicht verringert." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-23-Zauberrettungswurf, +15 zum Treffen mit Zauberangriffen): Je 1-mal täglich: Bewegungsfreiheit, Ebenenwechsel, Flimmern, Kugel der Unverwundbarkeit, Magie bannen, Schutz vor Gut und Böse, Verständigung, Wasser kontrollieren." }
    ],
    bonusaktionen: [
      { name: "Form ändern", beschreibung: "Der Drache verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit einer Bonusaktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." },
      { name: "Psychischer Schritt", beschreibung: "Der Drache teleportiert sich magisch in einen freien Bereich im Abstand von bis zu 18 Metern, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Klauen", beschreibung: "Der Drache führt einen Klauenangriff aus." },
      { name: "Psionik (kostet 2 Aktionen)", beschreibung: "Der Drache setzt Psychischer Schritt oder Zauberwirken ein." },
      { name: "Explosiver Kristall (kostet 3 Aktionen)", beschreibung: "Der Drache speit einen Amethysten, der an einer Stelle im Abstand von bis zu 18 Metern explodiert, die der Drache sehen kann. Jede Kreatur im Abstand von bis zu sechs Metern um den Punkt muss einen Geschicklichkeitsrettungswurf gegen SG 23 bestehen, oder sie erleidet 18 (4W8) Energieschaden und wird umgestoßen." }
    ],
    hortaktionen: {
      beschreibung: "Mit einer Initiative von 20 (verliert bei Gleichstand) kann der Drache eine der folgenden Hortaktionen ausführen (dieselbe Hortaktion kann nicht in zwei Runden nacheinander ausgeführt werden):",
      aktionen: [
        "Betörendes Flüstern: Der Drache flüstert einer Kreatur in Reichweite telepathisch etwas zu. Die Kreatur muss einen Weisheitsrettungswurf gegen SG 15 bestehen, oder sie ist vom Drachen bezaubert, bis die Initiative in der nächsten Runde 20 erreicht. Eine auf diese Weise bezauberte Kreatur gehorcht allen Befehlen des Drachen, so gut sie kann, sofern sie ihr nicht direkt schaden.",
        "Einkerkernde Macht: Der Drache wirkt den Zauber Energiekäfig, nutzt dabei seinen Zauberrettungswurf-SG und braucht keine Zauberkomponenten. Der Zauber endet vorzeitig, wenn der Drache diese Hortaktion erneut einsetzt oder stirbt.",
        "Raumprojektion: Der Drache wählt einen Bereich im Hort, in den er hineinpasst. Er existiert im bisherigen sowie im gewählten Bereich zugleich, bis die Initiative in der nächsten Runde 20 erreicht. Wenn er sich bewegt oder eine Aktion ausführt, kann er sich aussuchen, welche Version von ihm es tut. Wenn ein Effekt oder Angriff auf beide Drachenbereiche zugleich zielen kann, ist der Drache nur einmal betroffen."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Gegend um den Hort eines legendären Amethystdrachen wird von seiner Drachenmagie beeinflusst, was mindestens einen der folgenden Effekte erzeugt:",
      effekte: [
        "Gedeihende Wildtiere: Fisch und andere Wasserlebewesen pflanzen sich rasch fort und gedeihen in Gewässern im Abstand von bis zu 9,6 Kilometern um den Hort. Wer hier fischt, bekommt die doppelte Ausbeute.",
        "Kristallfülle: In schlammigen Ufern und Seenbetten im Abstand von bis zu 9,6 Kilometern um den Hort bilden sich Amethystkristalle und Geoden.",
        "Umfeldprüfung: Einmal täglich kann der Drache den Zauber Sagenkunde wirken, ohne Zauberkomponenten zu benötigen, und dabei eine beliebige Person, einen Ort oder ein Objekt im Abstand von bis zu 1,6 Kilometern um den Hort als Ziel benennen.",
        "Wässrige Sicht: Wasser im Abstand von bis zu 9,6 Kilometern um den Hort ist ein Medium für die psionische Anwesenheit des Drachen. Als Aktion kann der Drache den Zauber Hellsehen wirken. Dafür benötigt er keine Zauberkomponenten und kann alle Gewässer in der Gegend verwenden.",
        "Wenn der Drache stirbt, kehren die Populationen der Wasserlebewesen um den Hort im Verlauf von 1W10 Tagen auf ein normales Niveau zurück. Es sind weiterhin besonders viele Amethyste vorhanden, doch neue Kristalle und Geoden entstehen in normalem Tempo."
      ]
    },
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Uralter Kristalldrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Gigantisch",
    gesinnung: "Normalerweise chaotisch neutral",
    cr: 19,
    xp: 22000,
    rk: 20,
    ruestungstyp: "natürliche Rüstung",
    tp: 222,
    tp_wuerfel: "12W20+96",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Graben": "12 m", "Klettern": "12 m" },
    attribute: { STR: 25, DEX: 12, CON: 26, INT: 20, WIS: 16, CHA: 21 },
    rettungswuerfe: { GES: 7, KON: 14, WEI: 9, CHA: 11 },
    fertigkeiten: { "Heimlichkeit": 13, "Überlebenskunst": 15, "Wahrnehmung": 15 },
    schadensresistenzen: ["Gleißend", "Kälte"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 25,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Gebirge", "Höhle"],
    bild: "assets/images/monster/schatzkammer/uralter_kristalldrache.png",
    beschreibung: [
      "Kristalldrachen leben in kalten Gegenden, errichten Bauwerke aus Eis und Schnee, die an Schlösser erinnern, aber nach oben offen sind. Ihre Horte sind voller funkelnder Kristalle, aus denen gesammeltes Sternenlicht strahlt, und voller Höhlen und Tunneln, die ihren Schätzen Schutz bieten. Sie nutzen ihre Fähigkeit zu graben, um ihre Horte mit geheimen Passagen zu versehen und sich so einfach wie unbemerkt bewegen zu können.",
      "Der Herausforderungsgrad eines legendären Kristalldrachen wird um 1 erhöht, wenn die Begegnung in seinem Hort stattfindet."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 18 (2W10+7) Stichschaden plus 9 (2W8) gleißender Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 14 (2W6+7) Hiebschaden." },
      { name: "Schillernder Odem", beschreibung: "Aufladung 5–6. Der Drache atmet ein brillantes Strahlen in einem Kegel von 27 Metern aus. Jede Kreatur in dem Bereich muss einen SG-22-Konstitutionsrettungswurf ausführen. Bei Misserfolg erleidet sie 49 (11W8) gleißenden Schaden, andernfalls die Hälfte. Der Drache erhält dann 25 temporäre Trefferpunkte durch Verzehr eines Teils der gleißenden Energie." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-19-Zauberrettungswurf): Beliebig oft: Göttliche Führung, Tanzende Lichter. Je 1-mal täglich: Befehl, Hypnotisches Muster, Unsichtbarkeit, Vollständige Genesung, Weissagung." }
    ],
    bonusaktionen: [
      { name: "Form ändern", beschreibung: "Der Drache verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit einer Bonusaktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." },
      { name: "Psychischer Schritt", beschreibung: "Der Drache teleportiert sich magisch in einen freien Bereich im Abstand von bis zu 18 Metern, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Klauen", beschreibung: "Der Drache führt einen Klauenangriff aus." },
      { name: "Psionik (kostet 2 Aktionen)", beschreibung: "Der Drache setzt Psychischer Schritt oder Zauberwirken ein." },
      { name: "Sternenlichtschlag (kostet 3 Aktionen)", beschreibung: "Der Drache schleudert einen sengenden Sternenlichtstrahl auf eine Kreatur im Abstand von bis zu 18 Metern, die er sehen kann. Das Ziel muss einen SG-19-Geschicklichkeitsrettungswurf bestehen, oder es erleidet 38 (11W6) gleißenden Schaden." }
    ],
    hortaktionen: {
      beschreibung: "Mit einer Initiative von 20 (verliert bei Gleichstand) kann der Drache eine der folgenden Hortaktionen ausführen (dieselbe Hortaktion kann nicht in zwei Runden nacheinander ausgeführt werden):",
      aktionen: [
        "Betörendes Flüstern: Der Drache flüstert einer Kreatur in Reichweite telepathisch etwas zu. Die Kreatur muss einen SG-15-Weisheitsrettungswurf bestehen, oder sie ist vom Drachen bezaubert, bis die Initiative in der nächsten Runde 20 erreicht. Eine auf diese Weise bezauberte Kreatur gehorcht allen Befehlen des Drachen, so gut sie kann, sofern sie ihr nicht direkt schaden.",
        "Eispassage: Der Drache kann Passagen von bis zu neun Metern Durchmesser durch Wände aus Eis oder Schnee öffnen, welche bis zu 1,5 Meter dick sind.",
        "Sternenlichtschimmer: Der Drache wählt einen Ort im Hort, den er sehen kann. Von diesem Punkt geht schimmerndes Sternenlicht aus, das im Radius von drei Metern dämmriges Licht spendet. Jede Kreatur in dem Bereich außer dem Drachen muss einen SG-15-Geschicklichkeitsrettungswurf bestehen, wenn das Licht erscheint, oder sie erleidet 13 (2W12) gleißenden Schaden und ist in Umrissen sichtbar. Angriffswürfe gegen Kreaturen, deren Umrisse sichtbar sind, sind im Vorteil, die Kreatur kann sich nicht verbergen, und Unsichtbarkeit verschafft ihr keinen Vorteil. Das Sternenlicht und das Leuchten um alle Kreaturen verblasst, wenn die Initiative in der nächsten Runde 20 erreicht."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Gegend um den Hort eines legendären Kristalldrachen wird von seiner Drachenmagie beeinflusst, was mindestens einen der folgenden Effekte erzeugt:",
      effekte: [
        "Blauer Himmel: Der Himmel über dem Hort eines Kristalldrachen bleibt wolkenfrei, bis er magisch beeinflusst wird. Es weht ein leichter Wind, der für Eindringlinge ungefährlich ist, und die Sicht ist zur jeweiligen Tageszeit die bestmögliche.",
        "Eisige Sicht: Eis und Quarz im Abstand von bis zu 9,6 Kilometern um den Hort sind ein Medium für die psionische Anwesenheit des Drachen. Als Aktion kann der Drache den Zauber Hellsehen wirken. Dafür benötigt er keine Zauberkomponenten und kann alle Eis- und Quarzkristalle in der Gegend verwenden.",
        "Gedeihende Wildtiere: Tierpopulationen im Abstand von bis zu 9,6 Kilometern um den Hort gedeihen besonders gut. Attributswürfe zur Nahrungssuche durch Fallenstellen, Fischen und Jagd in dem Bereich sind im Vorteil.",
        "Kristallfülle: Zahlreiche Quarzkristalle bilden sich im Abstand von bis zu 9,6 Kilometern um den Hort, besonders an Orten, an denen sie von Sonnenlicht beschienen werden.",
        "Positive Energie: Kreaturen im Abstand von bis zu 9,6 Kilometern um den Hort, die eine lange Rast beendet haben, erhalten zwei verbrauchte Trefferwürfel zusätzlich zurück.",
        "Wenn der Drache stirbt, kehren die Populationen der Tiere um den Hort im Verlauf von 1W10 Tagen auf ein normales Niveau zurück. Die erhöhte Trefferwürfelregeneration endet sofort. Es sind weiterhin besonders viele Quarzkristalle vorhanden, doch neue Kristalle entstehen in normalem Tempo."
      ]
    },
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Uralter Mondsteindrache",
    art: "Drache",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Normalerweise neutral",
    cr: 21,
    xp: 33000,
    rk: 20,
    ruestungstyp: "natürliche Rüstung",
    tp: 330,
    tp_wuerfel: "20W20+120",
    bewegung: { "Gehen": "12 m", "Fliegen": "18 m" },
    attribute: { STR: 22, DEX: 18, CON: 23, INT: 20, WIS: 22, CHA: 26 },
    rettungswuerfe: { INT: 12, WEI: 13, CHA: 15 },
    fertigkeiten: { "Heimlichkeit": 11, "Überzeugen": 15, "Wahrnehmung": 13 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert"],
    sinne: ["Wahrer Blick 36 m"],
    passiveWahrnehmung: 23,
    sprachen: ["Alle", "Telepathie auf 36 m"],
    umgebung: ["Feenwildnis", "Gebirge", "Wald", "Gewässer"],
    bild: "assets/images/monster/schatzkammer/uralter_mondsteindrache.png",
    beschreibung: [
      "Alte Legenden sprechen davon, dass die Götter einst in die Erste Welt kamen und sie mit ihren Humanoiden bevölkern wollten, und dass ein kluger Drache ins Feywild floh, um ein Gelege von Eiern zu verstecken. Die Magie des Feenreichs durchdrang die Eier, und die ersten Mondsteindrachen schlüpften aus ihnen. Ihre Nachkommen haben sich im ganzen Feywild verbreitet.",
      "Mondsteindrachen sind anmutige, elegante Kreaturen mit opalisierenden Schuppen und einigen smaragdgrünen Fellbereichen an Kinn, Brust, Rücken und Schwanz. Ein Horn ragt ihnen aus dem Hinterkopf, ein weiteres aus der Schnauzenspitze – beide zusammen bilden die Form einer schmalen Sichel. Junge Mondsteindrachen sind verspielt und übermütig, doch die Besten unter ihnen werden zu weisen Lehrern und Geschichtenerzählern, um die sich ganze Feywild-Gesellschaften bilden. Die Übelsten von ihnen sind anmaßend und haben schlechte Manieren, aber selbst sie sind von Natur aus sanft und neugierig – besonders auf Reisende aus der Ferne.",
      "Sie können sich auf die Traumebene projizieren, um mit den Kreaturen zu kommunizieren, die in der Nähe ihrer Horte schlafen. So inspirieren sie Künstler und Dichter, ermutigen große Denker und spornen Abenteurer zu Heldentaten an. Manchmal beraten sie Leute in Not oder beauftragen Abenteurer mit Missionen, um sie zu wahrer Größe zu führen.",
      "Allgemein sind Mondsteindrachen nicht besonders an Gold oder Kupfer interessiert, lieben jedoch Silber, Platin und Mithral. Sie bevorzugen Schätze, deren Wert sich nicht benennen lässt – ein Lied von Herzen, die Haarlacke einer geliebten Person, das Gemälde eines Lieblingsorts. Die Geschichte zu einer geschätzten Erinnerung ist Mondsteindrachen wichtiger als ein Goldsack.",
      "Ihre Horte richten Mondsteindrachen an Orten ein, die der Mond bescheint: einsame Gipfel, Waldlichtungen und ruhige Seen gehören zu ihren Lieblingsorten. Ihre verspielte Natur bringt sie dazu, im Gegensatz zu anderen Arten schon als Jungdrachen mehrere Horte einzurichten. Diese abgelegenen Orte verbinden sie mit magischen Portalen und teilen ihre Zeit zwischen Feywild, materieller Ebene und Ätherebene auf.",
      "Der Herausforderungsgrad eines legendären Mondsteindrachen wird um 1 erhöht, wenn die Begegnung in seinem Hort stattfindet."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden plus 11 (2W10) gleißender Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 13 (2W6+6) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 10 (1W8+6) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-21-Stärkerettungswurf bestehen, andernfalls wird es umgestoßen." },
      { name: "Odemwaffe", beschreibung: "Aufladung 5-6. Der Drache setzt eine der folgenden Odemwaffen ein: Mondlichtodem: Der Drache atmet einen Strahl aus Mondlicht in einer 36 Meter langen, drei Meter breiten Linie aus. Jede Kreatur in dem Bereich muss einen SG-21-Geschicklichkeitsrettungswurf ausführen. Bei Misserfolg erleidet sie 60 (11W10) gleißenden Schaden, andernfalls die Hälfte. Traumodem: Der Drache atmet Nebel in einem Kegel von 27 Metern aus. Jede Kreatur in dem Bereich muss einen SG-21-Konstitutionsrettungswurf bestehen, oder sie ist zehn Minuten lang bewusstlos. Dieser Effekt endet bei einer Kreatur, wenn sie Schaden erleidet oder jemand sie mit einer Aktion aufweckt." },
      { name: "Zauberwirken", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Materialkomponenten und verwendet Charisma als Attribut zum Zauberwirken (SG-23-Zauberrettungswurf): Beliebig oft: Feenfeuer. Je 2-mal täglich: Gefühle besänftigen, Magie bannen, Unsichtbarkeit, Wiederbeleben." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Schwanz", beschreibung: "Der Drache führt einen Schwanzangriff aus." },
      { name: "Zauberwirken (kostet 2 Aktionen)", beschreibung: "Der Drache setzt Zauberwirken ein." }
    ],
    hortaktionen: {
      beschreibung: "Mit einer Initiative von 20 (verliert bei Gleichstand) kann der Drache eine der folgenden Hortaktionen ausführen (dieselbe Hortaktion kann nicht in zwei Runden nacheinander ausgeführt werden):",
      aktionen: [
        "Desorientierende Visionen: Desorientierende Illusionsbilder bewegen sich durch den Drachenhort. Jede Kreatur im Hort muss einen SG-20-Weisheitsrettungswurf bestehen, oder sie sind bei Attributswürfen im Nachteil, bis die Initiative in der nächsten Runde 20 erreicht.",
        "Traumverbannung: Der Drache zielt auf eine Kreatur im Abstand von bis zu 36 Metern, die er sehen kann, und versucht, sie auf eine Traumebene zu schicken. Das Ziel muss einen SG-15-Charismarettungswurf bestehen, oder es wird auf eine harmlose Halbebene verbannt, bis die Initiative in der nächsten Runde 20 erreicht. Solange das Ziel sich dort befindet, ist es betäubt. Wenn der Effekt endet, erscheint das Ziel am gleichen Ort oder an der nächsten freien Stelle wieder.",
        "Zwangstanz: Der Drache zielt auf eine Kreatur in seinem Lager, die er sehen kann, und ein fröhlicher Walzer erklingt, den nur das Ziel hören kann. Das Ziel muss einen SG-15-Intelligenzrettungswurf bestehen oder tanzen, bis die Initiative in der nächsten Runde 20 erreicht. Tanzende Kreaturen sind kampfunfähig und brauchen ihre gesamte Bewegungsrate auf."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Gegend um den Hort eines legendären Mondsteindrachen wird von seiner Drachenmagie beeinflusst, was mindestens einen der folgenden Effekte erzeugt:",
      effekte: [
        "Traumverständigung: Wenn eine Kreatur im Abstand von bis zu 9,6 Kilometern um den Drachenhort, die eine Sprache versteht, schläft oder sich in Trance oder Anbetung befindet, kann der Drache in ihren Träumen telepathisch mit ihr in Verbindung treten und mit ihr kommunizieren. Beim Aufwachen erinnert die Kreatur sich an das Gespräch mit dem Drachen.",
        "Übergang zwischen den Ebenen: Der Schleier zwischen den Ebenen ist beim Hort eines Mondsteindrachen besonders dünn. Im Abstand von bis zu 9,6 Kilometern um den Hort verbinden mehrere Portale die materielle Ebene, das Feywild und die Äthergrenze miteinander. Alle Kreaturen können die Portale beide Richtungen passieren, wenn sie 1,5 Meter ihrer Bewegungsrate verbraucht.",
        "Wenn der Drache stirbt, schließen sich alle Portale beim Hort augenblicklich."
      ]
    },
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Uralter Saphirdrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Gigantisch",
    gesinnung: "Normalerweise rechtschaffen neutral",
    cr: 22,
    xp: 41000,
    rk: 20,
    ruestungstyp: "natürliche Rüstung",
    tp: 370,
    tp_wuerfel: "20W20+160",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Graben": "12 m", "Klettern": "12 m" },
    attribute: { STR: 27, DEX: 14, CON: 27, INT: 21, WIS: 19, CHA: 20 },
    rettungswuerfe: { GES: 9, KON: 15, WEI: 11, CHA: 12 },
    fertigkeiten: { "Geschichte": 12, "Heimlichkeit": 9, "Überzeugen": 19, "Wahrnehmung": 18 },
    schadensresistenzen: ["Blitz", "Schall"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 28,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Gebirge", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/uralter_saphirdrache.png",
    beschreibung: [
      "Lautstarke Konflikte sind Teil der Natur von Saphirdrachen. Ihre territoriale Militanz lässt sie ihre Horte erbittert verteidigen, Eindringlinge überfallen und Angriffe auf ihre Rivalen planen. Der Schallpuls ihrer Odemwaffe schwächt ihre Gegner und macht sie kampfunfähig.",
      "Die Schuppen und Flügelmembranen von Saphirdrachen zeigen zahlreiche Blauschattierungen vom Hellblau eines Frühlingshimmels bis zum tiefen, kristallinen Azur von Saphiren und gepresstem Gletschereis. Im Licht funkeln und leuchten die Schuppen wie ein Sternenregen. Die psionische Natur der Drachen zeigt sich in den Knochen- und Hornstrukturen ihres Körpers. Ihre Hörner und Schwanzdorne sind nicht mit ihrem Körper verbunden, schweben jedoch an ihrem Ort und werden von psychischer Energie gehalten, solange der Drache lebt. Diese schwebenden Hörner und Stacheln verändern sich leicht je nach Stimmung des Drachen, hüpfen amüsiert oder flackern vor Zorn.",
      "Die kriegerischen Saphirdrachen ersinnen Strategien und Angriffspläne, die zu ihrer Fähigkeit passen, sich unterirdisch fortzubewegen. Meist schlagen sie nicht sofort zu, sondern schätzen Eindringlinge zunächst ein, um sich dann die vorteilhafteste Strategie zu überlegen. Saphirdrachen halten nach Anzeichen von Aberrationen und sonstigen Kreaturen Ausschau, die vom Fernen Reich verderbt wurden. Sie arbeiten oft mit Smaragddrachen zusammen und nutzen deren Wissen über okkulte Phänomene, um den Einfluss des Fernen Reichs aufzuspüren. Mit diesem Wissen ausgestattet löschen Saphirdrachen jeden fremden Einfluss aus, ehe er sich ausbreitet. Wer unterirdisch lebt oder sich in die Tiefen vorwagt, kann es durchaus mit einem Saphirdrachen zu tun bekommen, wenn er dessen Territorium betritt. Doch Saphirdrachen gehen auch manchmal friedliche Beziehungen mit Felsen- oder Tiefengnomen ein, um für mehr Schutz des Territoriums um ihre Horte zu sorgen.",
      "Saphirdrachen lieben Waffen und Rüstungen, militärische Aufzeichnungen und Taktiken sowie magische Gegenstände, die vor psychischem Schaden und mentaler Beeinflussung schützen. Das Herzstück eines Saphirdrachen-Schatzes ist üblicherweise eine vorzügliche katalogisierte Sammlung von Kriegsgerät, unter dem sich auch uralte Relikte von enormer Macht befinden können.",
      "Saphirdrachen leben in weitläufigen Höhlensystemen. Je älter sie werden, desto umfangreicher konstruieren sie ihre Horte, wobei sie ihre angeborenen magischen und natürlichen Grabfähigkeiten nutzen. Schließlich bewohnen sie schwindelerregende Wabensysteme aus Geheimgängen, täuschend dünnen Wänden und verborgenen Kammern und können sich durch den ganzen Hort bewegen, ohne von Eindringlingen bemerkt zu werden. Die sichersten Horte weisen gar keine Eingänge auf, und die Drachen nutzen ausschließlich den Umstand, dass sie graben und Stein formen können, um ihre Horte aufzusuchen oder zu verlassen.",
      "Der Herausforderungsgrad eines legendären Saphirdrachen wird um 1 erhöht, wenn die Begegnung in seinem Hort stattfindet."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Spinnenklettern", beschreibung: "Der Drache kann ohne Attributswürfe schwierige Oberflächen erklimmen und sich kopfüber an Decken entlang bewegen." },
      { name: "Tunnelbauer", beschreibung: "Der Drache kann sich mit halber Grabbewegungsrate durch massiven Fels graben. Dabei hinterlässt er einen Tunnel mit sechs Metern Durchmesser." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 19 (2W10+8) Stichschaden plus 11 (2W10) Schallschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (2W6+8) Hiebschaden." },
      { name: "Schwächender Odem", beschreibung: "Aufladung 5–6. Der Drache stößt einen hohen, fast unhörbaren Tonpuls in einem Kegel von 27 Metern aus. Jede Kreatur in dem Bereich muss einen SG-23-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 55 (10W10) Schallschaden und ist bis zum Ende ihres nächsten Zugs kampfunfähig. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht kampfunfähig." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-20-Zauberrettungswurf): Je 1-mal täglich: Dissonantes Flüstern, Mit Stein verschmelzen, Monster festhalten, Telekinese, Teleportieren." }
    ],
    bonusaktionen: [
      { name: "Form ändern", beschreibung: "Der Drache verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit einer Bonusaktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." },
      { name: "Psychischer Schritt", beschreibung: "Der Drache teleportiert sich magisch in einen freien Bereich im Abstand von bis zu 18 Metern, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Klauen", beschreibung: "Der Drache führt einen Klauenangriff aus." },
      { name: "Psionik (kostet 2 Aktionen)", beschreibung: "Der Drache setzt Psychischer Schritt oder Zauberwirken ein." },
      { name: "Telekinetischer Wurf (kostet 3 Aktionen)", beschreibung: "Der Drache wählt ein höchstens mittelgroßes Objekt aus, das nicht getragen wird und das er sehen kann, und schleudert es magisch auf eine Kreatur im Abstand von bis zu 18 Metern vom Objekt, die er sehen kann. Das Ziel muss einen SG-20-Geschicklichkeitsrettungswurf bestehen, oder es erleidet 42 (12W6) Wuchtschaden." }
    ],
    hortaktionen: {
      beschreibung: "Mit einer Initiative von 20 (verliert bei Gleichstand) kann der Drache eine der folgenden Hortaktionen ausführen (dieselbe Hortaktion kann nicht in zwei Runden nacheinander ausgeführt werden):",
      aktionen: [
        "Betörendes Flüstern: Der Drache flüstert einer Kreatur in Reichweite telepathisch etwas zu. Die Kreatur muss einen SG-15-Weisheitsrettungswurf bestehen, oder sie ist vom Drachen bezaubert, bis die Initiative in der nächsten Runde 20 erreicht. Eine auf diese Weise bezauberte Kreatur gehorcht allen Befehlen des Drachen, so gut sie kann, sofern sie ihr nicht direkt schaden.",
        "Großer Donner: Eine donnernde Schalldetonation, die bis zu 90 Meter weit zu hören ist, umgibt eine Kreatur im Hort, die der Drache sehen kann. Die Kreatur muss einen SG-15-Konstitutionsrettungswurf bestehen, oder sie erleidet 13 (3W8) Schallschaden und ist bis zum Ende ihres nächsten Zugs betäubt.",
        "Steinpassage: Der Drache berührt eine Steinfläche von bis zu neun Metern in alle Richtungen. Er kann den Stein formen, um Passagen zu öffnen oder zu schließen, solange die Wand nicht dicker als drei Meter ist."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Gegend um den Hort eines legendären Saphirdrachen wird von seiner Drachenmagie beeinflusst, was mindestens einen der folgenden Effekte erzeugt:",
      effekte: [
        "Gedeihende Wildtiere: Das Gebiet von bis zu 9,6 Kilometern um den Hort zieht Riesenspinnen an, die sich dort in großer Zahl ansiedeln – die Lieblingsbeute von Saphirdrachen.",
        "Kristallfülle: Natürliche Steine im Abstand von bis zu 9,6 Kilometern um den Hort bringen zahlreiche Kristallformationen und Saphiradern hervor, vor allem unterirdisch.",
        "Steinige Sicht: Naturstein im Abstand von bis zu 9,6 Kilometern um den Hort ist ein Medium für die psionische Anwesenheit des Drachen. Als Aktion kann der Drache den Zauber Hellsehen wirken. Dafür benötigt er keine Zauberkomponenten und kann jeden Stein in der Gegend verwenden.",
        "Telepathische Verbesserung: Die psionische Energie des Drachen verstärkt die mentalen Kräfte anderer Kreaturen. Die telepathische Reichweite von Kreaturen, die telepathisch kommunizieren können, ist im Abstand von bis zu 1,6 Kilometern um den Hort verdoppelt. Dazu gehören auch Kreaturen mit angeborenen telepathischen Fähigkeiten sowie magische Telepathie wie der Zauber Rarys Telepathisches Band.",
        "Wenn der Drache stirbt, kehrt die Population der Riesenspinnen in der Region im Verlauf von 1W10 Tagen auf ein normales Niveau zurück. Die Verbesserung telepathischer Fähigkeiten endet sofort. Es sind weiterhin besonders viele Kristalle und Saphire vorhanden, doch neue entstehen in normalem Tempo."
      ]
    },
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Uralter Smaragddrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Gigantisch",
    gesinnung: "Normalerweise rechtschaffen neutral",
    cr: 21,
    xp: 33000,
    rk: 20,
    ruestungstyp: "natürliche Rüstung",
    tp: 332,
    tp_wuerfel: "19W20+133",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Graben": "9 m" },
    attribute: { STR: 25, DEX: 12, CON: 25, INT: 20, WIS: 18, CHA: 20 },
    rettungswuerfe: { GES: 8, KON: 14, WEI: 11, CHA: 12 },
    fertigkeiten: { "Arkane Kunde": 12, "Heimlichkeit": 8, "Tauschen": 12, "Wahrnehmung": 18 },
    schadensresistenzen: ["Feuer", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 28,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Gebirge", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/uralter_smaragddrache.png",
    beschreibung: [
      "Smaragddrachen sind die neugierigsten, klügsten und manipulativsten unter den Edelsteindrachen. Sie gebieten über psionische Kraft und können Illusionen erzeugen, um ihre Gegner zu täuschen und zu verwirren. Ihre Anwesenheit können sie verbergen und andere Kreaturen beobachten, ohne entdeckt zu werden. Sie sammeln alle Informationen – von lokalen Kulturpraktiken bis hin zu übernatürlichen Ereignissen.",
      "Die Schuppen von Smaragddrachennestlingen sind von fahlem, trübem Grün, entwickeln im Lauf der Zeit jedoch tiefere und variantenreichere Grüntöne. Schließlich werden sie durchscheinend und schimmern im Licht, sodass der Drache zu funkeln scheint, wenn er sich bewegt. Die Drachenhörner und seine Dornen schweben um den Körper und bewegen sich je nach seiner Stimmung am Rücken und Schwanz entlang.",
      "Unter den Edelsteindrachen sind die Smaragddrachen nicht nur besonders neugierig, sondern auch sehr scheu. Sie beobachten gerne nahe Siedlungen und Gemeinschaften und nutzen ihre psionischen Fähigkeiten, um sich zu verbergen und aus der Ferne zuzusehen. Sind sie alt genug, können sie sich als andere Kreaturen tarnen, die zur örtlichen Bevölkerung passen oder jedenfalls keinen Argwohn erregen. Endlich in der Position zu beobachten, studieren sie das Alltagsleben der Leute und haben an allen magischen Phänomenen besonderes Interesse.",
      "Das Auge der Smaragddrachen für ungewöhnliche Ereignisse macht sie besonders nützlich für ihre Vettern, die Saphirdrachen, weil diese Aberrationen jagen und stets nach Spuren des Fernen Reichs auf der materiellen Ebene Ausschau halten. So kooperieren sie oft: Die Smaragddrachen spüren die Quelle solcher Einfälle auf, während die Saphirdrachen den Gegenschlag planen und ausführen – oder jemanden damit beauftragen. Smaragddrachen haben eine Vorliebe für Vulkangebiete und geraten daher bisweilen in Konflikt mit Feuerriesen. Es kommt sogar vor, dass sie erfahrene Abenteurer um Hilfe gegen die Feuerriesen bitten, obwohl sie sich Fremden nicht gerne offenbaren.",
      "Smaragddrachen lieben Wissen, besonders lokale Geschichtsverläufe mit magischen Ereignissen und Personen. Sie kennen üblicherweise die Orte der Macht um ihre Horte und verfolgen genau mit, wie deren Phänomene auf äußere Einflüsse reagieren. Außerdem sammeln sie begeistert magische Gegenstände und Zauber zum Erschaffen von Illusionen, damit sie ihre Schätze besser vor neugierigen Blicken und vor Erkenntniszaubern schützen können.",
      "Smaragddrachen hausen in riesigen Höhlen, Lavaröhren und unterirdischen Tunnelnetzwerken. Sie bevorzugen warme Bereiche, besonders vulkanische Gegenden. Im Lauf der Zeit geht ihre psychische Präsenz in das Land um ihren Hort ein, erweitert ihr Bewusstsein und lockt ihre Lieblingsbeute – Rieseneidechsen – in die Gegend, wo sie große Populationen erreichen. Smaragddrachen nutzen die Merkmale ihres Horts, um Eindringlinge zu verwirren und zu besiegen. Sie graben zusätzliche Tunnel, um mehrere Wege durch ihre Horte zu erschaffen, und legen Fallen, die in gähnende Abgründe führen oder in Lavatümpeln enden. Ihren Schatz aus Wissen und Kostbarkeiten verbergen sie mit großer Sorgfalt. Sie nutzen oft Illusionsmagie und ausgeklügelte Vorrichtungen um die natürlichen Merkmale ihres Horts, um die Hauptschatzkammern vor magischen und nichtmagischen Blicken zu schützen.",
      "Der Herausforderungsgrad eines legendären Smaragddrachen wird um 1 erhöht, wenn die Begegnung in seinem Hort stattfindet."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Tunnelbauer", beschreibung: "Der Drache kann sich mit halber Grabbewegungsrate durch massiven Fels graben. Dabei hinterlässt er einen Tunnel mit sechs Metern Durchmesser." },
      { name: "Wahrnehmung verzerren (1-mal täglich)", beschreibung: "Der Drache kann Arkane Spiegelung wirken. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 18 (2W10+7) Stichschaden plus 10 (3W6) psychischer Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 14 (2W6+7) Hiebschaden." },
      { name: "Desorientierender Odem", beschreibung: "Aufladung 5–6. Der Drache atmet eine Woge psychischer Dissonanz in einem Kegel von 27 Metern aus. Jede Kreatur in dem Bereich muss einen SG-22-Intelligenzrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 56 (16W6) psychischen Schaden, und bis zum Ende ihres nächsten Zugs gilt: Wenn sie einen Angriffswurf oder einen Attributswurf ausführt, muss sie einen W8 werfen und das Ergebnis vom Wurf abziehen. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und keine weiteren Effekte." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-20-Zauberrettungswurf): Beliebig oft: Einfache Illusion, Magierhand (die Hand ist unsichtbar). Je 1-mal täglich: Ablenkung, Gedanken wahrnehmen, Körperlosigkeit, Mächtiges Trugbild, Magie bannen." }
    ],
    bonusaktionen: [
      { name: "Form ändern", beschreibung: "Der Drache verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit einer Bonusaktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." },
      { name: "Psychischer Schritt", beschreibung: "Der Drache teleportiert sich magisch in einen freien Bereich im Abstand von bis zu 18 Metern, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Klauen", beschreibung: "Der Drache führt einen Klauenangriff aus." },
      { name: "Psionik (kostet 2 Aktionen)", beschreibung: "Der Drache setzt Psychischer Schritt oder Zauberwirken ein." },
      { name: "Smaragdfunken (kostet 3 Aktionen)", beschreibung: "Der Drache erzeugt tanzende grüne Flämmchen um eine Kreatur im Abstand von bis zu 18 Metern, die er sehen kann. Das Ziel muss einen SG-20-Geschicklichkeitsrettungswurf bestehen, oder es erleidet 42 (12W6) Feuerschaden." }
    ],
    hortaktionen: {
      beschreibung: "Mit einer Initiative von 20 (verliert bei Gleichstand) kann der Drache eine der folgenden Hortaktionen ausführen (dieselbe Hortaktion kann nicht in zwei Runden nacheinander ausgeführt werden):",
      aktionen: [
        "Betörendes Flüstern: Der Drache flüstert einer Kreatur in Reichweite telepathisch etwas zu. Die Kreatur muss einen SG-15-Weisheitsrettungswurf bestehen, oder sie ist vom Drachen bezaubert, bis die Initiative in der nächsten Runde 20 erreicht. Eine auf diese Weise bezauberte Kreatur gehorcht allen Befehlen des Drachen, so gut sie kann, sofern sie ihr nicht direkt schaden.",
        "Verschwinden: Der Drache wird unsichtbar, bis die Initiative in der nächsten Runde 20 erreicht.",
        "Wahrnehmungen verzerren: Der Drache versucht, die Wahrnehmungen einer Kreatur in seinem Hort zu verzerren, die er sehen kann. Die Kreatur muss einen SG-15-Intelligenzrettungswurf bestehen, oder sie erleidet 22 (4W10) psychischen Schaden und ist bis zum Anfang ihres nächsten Zugs bei Rettungswürfen im Nachteil."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Gegend um den Hort eines legendären Smaragddrachen wird von seiner Drachenmagie beeinflusst, was mindestens einen der folgenden Effekte erzeugt:",
      effekte: [
        "Feurige Sicht: Feuer und Lava im Abstand von bis zu 9,6 Kilometern um den Hort sind ein Medium für die psionische Anwesenheit des Drachen. Als Aktion kann der Drache den Zauber Hellsehen wirken. Dafür benötigt er keine Zauberkomponenten und kann alle Feuer- und Lavavorkommen in der Gegend verwenden.",
        "Gedeihende Wildtiere: Das Gebiet von bis zu 9,6 Kilometern um den Hort zieht Rieseneidechsen an, die sich dort in großer Zahl ansiedeln.",
        "Kristallfülle: Natürliche Steine im Abstand von bis zu 9,6 Kilometern um den Hort bringen zahlreiche Kristallformationen und Smaragdadern hervor.",
        "Subtile Hindernisse: Felsen im Abstand von bis zu 9,6 Kilometern um den Drachenhort bewegen sich manchmal von alleine, üblicherweise dann, wenn niemand hinsieht. Oft blockieren sie den Weg zum Hort des Smaragddrachen: Brocken schieben sich in schmale Passagen, Wegzeichen stürzen vom Pfad, kleinere Steine bewegen sich unter den Füßen des Reisenden, damit er in Schluchten oder Flüsse fällt.",
        "Wenn der Drache stirbt, kehrt die Population der Rieseneidechsen um den Hort im Verlauf von 1W10 Tagen auf ein normales Niveau zurück. Felsen hören sofort auf, sich von alleine zu bewegen. Es sind weiterhin besonders viele Kristalle und Smaragde vorhanden, doch neue entstehen in normalem Tempo."
      ]
    },
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Uralter Tiefendrache",
    art: "Drache",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Normalerweise neutral böse",
    cr: 18,
    xp: 20000,
    rk: 20,
    ruestungstyp: "natürliche Rüstung",
    tp: 201,
    tp_wuerfel: "13W20+65",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Graben": "12 m", "Schwimmen": "12 m" },
    attribute: { STR: 23, DEX: 16, CON: 20, INT: 19, WIS: 18, CHA: 21 },
    rettungswuerfe: { GES: 9, KON: 11, WEI: 10, CHA: 11 },
    fertigkeiten: { "Heimlichkeit": 15, "Überzeugen": 17, "Wahrnehmung": 10 },
    schadensresistenzen: ["Gift", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 90 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Drakonisch", "Gemeinsprache", "Gemeinsprache der Unterreiche"],
    umgebung: ["Gewässer", "Höhle", "Unterirdisch"],
    bild: "assets/images/monster/schatzkammer/uralter_tiefendrache.png",
    beschreibung: [
      "Tiefendrachen sind die albtraumhaften Vettern der chromatischen Drachen mit Horten in den Tiefen des Unterreichs. Dank dessen verdrehter Magie können sie magische Sporen freisetzen, die Angst und Schrecken verbreiten und dem Geist schaden.",
      "Ihr grauschwarzer Körper ist glatt wie der eines Salamanders, ihre Augen sind bleich. Wenn sie älter werden, bewirkt ihr Sporenatem Pilzwuchs auf der Haut, besonders an Kopf und Hals. Die Flügel sind mit den Vorderbeinen verbunden und können eng an den Körper gelegt werden, sodass die Tiefendrachen auch durch recht schmale Tunnel gelangen.",
      "Tiefendrachen hüten oft Geheimnisse und erfreuen sich auch an Wissen aus fernen Landen. Sie schätzen neue Einsichten und Kniffe, die sie gegen andere Bewohner des Unterreichs nutzen können, und verhandeln und manipulieren lieber, als dass sie offen kämpfen. Tiefendrachen verachten alle Kreaturen, die ihnen nichts nützen. Wissen kann allerdings ein Lockmittel sein, für das sie manchen Pakt schließen würden.",
      "Tiefendrachen errichten ihre Horte in den versteckten Höhlen und sonnenlosen Ufern des Unterreichs. Oft sind die Orte unerreichbar, wenn man weder fliegen noch tauchen kann. Die Drachen verfeinern ihre Horte mit Geheimpassagen und Verstecken, die ihnen im Notfall eine Flucht oder einen Überfall auf Eindringlinge ermöglichen. Ein gut eingerichteter Hort strotzt vor Unterreichpilzen und -pflanzen, Boden, Wände und Decke sind mit Schimmel und Moos bedeckt, größere Pilze und Pflanzen werden fein sortiert zur Schau gestellt."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden plus 11 (2W10) Giftschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 10 (1W8+6) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-20-Stärkerettungswurf bestehen, andernfalls wird es umgestoßen." },
      { name: "Albtraumodem", beschreibung: "Aufladung 5–6. Der Drache atmet eine Sporenwolke in einem Kegel von 27 Metern aus. Jede Kreatur in dem Bereich muss einen SG-19-Weisheitsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet die Kreatur 49 (9W10) psychischen Schaden und ist eine Minute lang vor dem Drachen verängstigt. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und keine weiteren Effekte. Eine verängstigte Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei Erfolg beenden." },
      { name: "Form ändern", beschreibung: "Der Drache verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit seiner Aktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Gebietende Sporen", beschreibung: "Der Drache setzt Sporen um eine Kreatur im Abstand von bis zu neun Metern frei, die er sehen kann. Das Ziel muss einen SG-19-Weisheitsrettungswurf bestehen oder ist gezwungen, seine Reaktion zu nutzen, um einen Nahkampf-Waffenangriff gegen eine zufällig ausgewählte Kreatur innerhalb der Reichweite auszuführen. Wenn sich keine Kreaturen in Reichweite befinden oder das Ziel nicht reagieren kann, erleidet es 11 (2W10) psychischen Schaden." },
      { name: "Schwanz", beschreibung: "Der Drache führt einen Schwanzangriff aus." },
      { name: "Sporensalve (kostet 2 Aktionen)", beschreibung: "Der Drache setzt giftige Sporen um eine Kreatur im Abstand von bis zu neun Metern frei, die er sehen kann. Das Ziel muss einen SG-19-Konstitutionsrettungswurf bestehen, oder es erleidet 28 (8W6) Giftschaden und ist eine Minute lang vergiftet. Eine vergiftete Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei Erfolg beenden." }
    ],
    hortaktionen: {
      beschreibung: "Mit einer Initiative von 20 (verliert bei Gleichstand) kann der Drache eine der folgenden Hortaktionen ausführen (dieselbe Hortaktion kann nicht in zwei Runden nacheinander ausgeführt werden).",
      aktionen: [
        "Giftige Sporen: Der Drache füllt einen Würfel von sechs Metern Kantenlänge an einer Stelle innerhalb von 36 Metern, die er sehen kann, mit giftigen Sporen. Jede Kreatur in dem Bereich muss einen SG-15-Konstitutionsrettungswurf bestehen, oder sie erleidet 14 (4W6) Giftschaden und ist bis zum Ende ihres nächsten Zugs vergiftet.",
        "Glitschiges Moos: Der Drache beschwört glitschiges Moos, das die Oberflächen im Hort kurz bedeckt. Boden, Wände und Decke des Horts sind schwieriges Gelände, bis die Initiative in der nächsten Runde 20 erreicht.",
        "Tiefe Starre: Der Drache wirkt den Zauber Verlangsamen, braucht dazu keine Zauberkomponenten und nutzt Charisma als Attribut zum Zauberwirken (Zauberrettungswurf-SG 16 bei ausgewachsenen, SG 19 bei uralten Drachen). Der Zauber endet vorzeitig, wenn der Drache diese Hortaktion erneut einsetzt oder stirbt."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Gegend um den Hort eines legendären Tiefendrachen wird von seiner Drachenmagie beeinflusst, was mindestens einen der folgenden Effekte erzeugt:",
      effekte: [
        "Bewahrung von Wissen: Bücher, Briefe und alle anderen Schriften im Abstand von bis zu 9,6 Kilometern um den Drachenhort werden magisch aufgeladen und können nicht mit nichtmagischen Mitteln beschädigt werden.",
        "Pflanzenwachstum: Vegetation und Pilze im Abstand von bis zu 9,6 Kilometern um den Drachenhort wachsen schneller und bedecken ein größeres Gebiet als normalerweise. Wer hier nach Nahrung sucht, bekommt die doppelte Ausbeute.",
        "Rastloser Schlaf: Wenn eine Kreatur im Abstand von bis zu 9,6 Kilometern um den Hort eine lange Rast beendet, muss sie einen SG-10-Konstitutionsrettungswurf bestehen, oder sie kann ihre Erschöpfungsstufe nicht verringern. Kreaturen, die gegen den Vergiftet-Zustand immun sind, sind auch gegen diesen Effekt immun.",
        "Stirbt der Drache, klingen diese Effekte im Verlauf von 1W10 Tagen ab."
      ]
    },
    source: "Schatzkammer der Drachen"
  },
  {
    name: "Uralter Topasdrache",
    art: "Drache",
    unterart: "Edelstein",
    groesse: "Gigantisch",
    gesinnung: "Normalerweise chaotisch neutral",
    cr: 20,
    xp: 25000,
    rk: 20,
    ruestungstyp: "natürliche Rüstung",
    tp: 280,
    tp_wuerfel: "17W20+102",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 23, DEX: 12, CON: 23, INT: 20, WIS: 19, CHA: 20 },
    rettungswuerfe: { GES: 7, KON: 12, WEI: 10, CHA: 11 },
    fertigkeiten: { "Einschüchtern": 17, "Heimlichkeit": 7, "Wahrnehmung": 16 },
    schadensresistenzen: ["Kälte", "Nekrotisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 26,
    sprachen: ["Drakonisch", "Gemeinsprache", "Telepathie auf 36 m"],
    umgebung: ["Gewässer", "Küste", "Ozean", "Sumpf"],
    bild: "assets/images/monster/schatzkammer/uralter_topasdrache.png",
    beschreibung: [
      "Beim Schlüpfen haben Topasdrachennestlinge trübe gelb-orange Schuppen, die wie mit einem Film überzogen wirken. Später härten die Schuppen aus und werden klar, durchscheinend und facettiert. Ihr Farbspektrum reicht von strahlendem Gelb bis zu tiefem Bernstein. Die Körper von Topasdrachen sind an der Hüfte am breitesten und werden zum Kopf hin keilförmig schmaler. Ihre Flügel sind geeignet, sie durch Luft sowie Wasser zu befördern. Die psionische Kraft manifestiert sich sichtbar in den edelsteinartigen Stacheln von der Krone des Kopfs bis zur Schwanzspitze. Diese Stacheln schweben über ihrem Rücken und tanzen und bewegen sich mit ihrer Stimmung.",
      "Topasdrachen sind zwar nicht an sich bösartig, verkörpern jedoch den Verfall. Sie betrachten Zerstörung als natürliches Mittel, die Bühne für eine neue Schöpfung und neues Wachstum freizumachen – so wie ein Waldbrand das Totholz tilgt, den Boden düngt und dem Wald ein gesünderes Wachstum als zuvor ermöglicht. Daher nutzen Topasdrachen ihre Macht, um zerfallende Gebäude und kranke Pflanzen zu Staub werden zu lassen und Platz für Neues zu schaffen.",
      "Sie sind zwar fähige Schwimmer und richten ihre Horte an Küsten und in Salzmarschen ein, doch tatsächlich hassen sie das Wasser. Leider fressen sie am liebsten Riesentintenfische und haben so reichlich Gelegenheit, sich nach der Jagd tief im Ozean darüber zu beklagen, wie nass sie geworden sind.",
      "Topasdrachen geraten oft mit Bronzedrachen in Konflikt, wenn sich ihre jeweiligen Territorien überschneiden, und können sich einen ganz besonderen Hass dieser metallischen Drachen zuziehen. Auch bei Druiden und anderen Wächtern der Natur sind sie nicht wohlgelitten, und ihre Neigung, ganze Landstriche zu zerstören, stößt auf wenig Verständnis. Grundsätzlich mögen Topasdrachen keine Gesellschaft und reagieren gereizt, wenn sie gestört werden. Doch wer ihr ätzendes Verhalten, ihre schneidenden Bemerkungen und morbiden Interessen ertragen kann, hat die Chance auf einen mächtigen Verbündeten.",
      "Topasdrachen schätzen Informationen über Zerstörung und Schöpfung, ob abstrakt oder als praktische Anleitung gedacht. Sie sind an Magie interessiert, die Objekte aus dem Nichts erzeugt, Untote animiert, Materie zerstört oder negative Energie manipuliert. Besonders fasziniert sind sie von Untoten, die sie manchmal als Kuriositäten bei ihren Schätzen aufbewahren.",
      "Topasdrachen leben, wo Meer und Land sich treffen, und bevorzugen Küsten, an denen die Brandung das Land allmählich zu Sand zermahlt. Sie richten ihre Horte in Klippenhöhlen oder in Salzmarschen ein, wo Süß- und Salzwasser sich mischen. Die Schutzwirkung gefluteter Tunnel müssen sie gegen ihre Abneigung gegen Wasser abwägen. Die Innenräume ihrer Horte halten sie jedenfalls staubtrocken."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann Luft und Wasser atmen." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Rettungswurf des Drachen scheitert, kann dieser den Wurf in einen Erfolg verwandeln." },
      { name: "Verarbeitung (1-mal täglich)", beschreibung: "Der Drache kann Verarbeitung wirken. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden plus 10 (3W6) nekrotischer Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 13 (2W6+6) Hiebschaden." },
      { name: "Dörrender Odem", beschreibung: "Aufladung 5–6. Der Drache atmet gelbliche nekrotische Energie in einem Kegel von 27 Metern aus. Jede Kreatur in dem Bereich muss einen SG-20-Konstitutionsrettungswurf ausführen. Scheitert der Rettungswurf, so erleidet sie 49 (14W6) nekrotischen Schaden und ist bis zum Ende ihres nächsten Zugs geschwächt. Geschwächte Kreaturen sind bei stärkebasierten Attributs- und Stärkerettungswürfen im Nachteil, und ihre stärkebasierten Waffenangriffe bewirken nur den halben Schaden. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur halb so viel Schaden und ist nicht geschwächt." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Drache wirkt einen der folgenden Zauber. Er benötigt dazu keine Zauberkomponenten und verwendet Intelligenz als Attribut zum Zauberwirken (SG-19-Zauberrettungswurf): Je 1-mal täglich: Schutzhülle gegen Lebendes, Verderben, Wasser erschaffen oder zerstören, Wasser kontrollieren." }
    ],
    bonusaktionen: [
      { name: "Form ändern", beschreibung: "Der Drache verwandelt sich magisch in eine beliebige mittelgroße oder kleine Kreatur. Dabei behält er seine Spielwerte (abgesehen von der Größe) bei. Die Verwandlung endet, wenn der Drache sie mit einer Bonusaktion beendet oder die Trefferpunkte des Drachen auf 0 sinken." },
      { name: "Psychischer Schritt", beschreibung: "Der Drache teleportiert sich magisch in einen freien Bereich im Abstand von bis zu 18 Metern, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Klauen", beschreibung: "Der Drache führt einen Klauenangriff aus." },
      { name: "Psionik (kostet 2 Aktionen)", beschreibung: "Der Drache setzt Psychischer Schritt oder Zauberwirken ein." },
      { name: "Essenzielle Reduktion (kostet 3 Aktionen)", beschreibung: "Der Drache zielt auf eine Kreatur oder ein Objekt im Abstand von bis zu 18 Metern, die er sehen kann. Wenn es ein Objekt ist, darf es nicht getragen werden. Das Ziel muss einen SG-19-Konstitutionsrettungswurf bestehen, oder es erleidet 40 (9W8) nekrotischen Schaden. Werden durch diesen Schaden die Trefferpunkte des Ziels auf 0 verringert, so zerfällt es zu Staub." }
    ],
    hortaktionen: {
      beschreibung: "Mit einer Initiative von 20 (verliert bei Gleichstand) kann der Drache eine der folgenden Hortaktionen ausführen (dieselbe Hortaktion kann nicht in zwei Runden nacheinander ausgeführt werden).",
      aktionen: [
        "Abbruch: Der Drache wählt einen aktiven Zauber der höchstens 5. Stufe aus, der im Hort aktiv ist und den er kennt, und beendet den Zauber.",
        "Betörendes Flüstern: Der Drache flüstert einer Kreatur in Reichweite telepathisch etwas zu. Die Kreatur muss einen SG-15-Weisheitsrettungswurf bestehen, oder sie ist vom Drachen bezaubert, bis die Initiative in der nächsten Runde 20 erreicht. Eine auf diese Weise bezauberte Kreatur gehorcht allen Befehlen des Drachen, so gut sie kann, sofern sie ihr nicht direkt schaden.",
        "Negative Energiedurchdringung: Bis zu zwei Kreaturen im Drachenhort, die der Drache sehen kann, müssen jeweils einen SG-15-Konstitutionsrettungswurf bestehen, oder sie erleiden 14 (4W6) nekrotischen Schaden. Negative Energie durchdringt den Hort, bis die Initiative in der nächsten Runde 20 erreicht. Solange die Durchdringung währt, kann keine Kreatur im Hort außer dem Drachen Trefferpunkte regenerieren."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Gegend um den Hort eines legendären Topasdrachen wird von seiner Drachenmagie beeinflusst, was mindestens einen der folgenden Effekte erzeugt:",
      effekte: [
        "Gedeihende Wildtiere: Das Gebiet von bis zu 9,6 Kilometern um den Hort zieht Riesentintenfische an, die dort in großer Zahl jagen und wandern.",
        "Kristallfülle: Natürliche Steine im Abstand von bis zu 9,6 Kilometern um den Hort bringen zahlreiche Kristallformationen und Topasadern hervor, vor allem unterirdisch.",
        "Negative Energie: Wenn eine Kreatur im Abstand von bis zu 9,6 Kilometern um den Hort eine lange Rast beendet, muss sie einen SG-15-Konstitutionsrettungswurf bestehen, oder sie kann ihre Erschöpfungsstufe nicht verringern, ohne Trefferwürfel zu verbrauchen. Kreaturen, die gegen nekrotischen Schaden resistent oder immun sind, sind auch gegen diesen regionalen Effekt immun.",
        "Wässrige Sicht: Wasser im Abstand von bis zu 9,6 Kilometern um den Hort ist ein Medium für die psionische Anwesenheit des Drachen. Als Aktion kann der Drache den Zauber Hellsehen wirken. Dafür benötigt er keine Zauberkomponenten und kann alle Gewässer in der Gegend verwenden.",
        "Wenn der Drache stirbt, kehrt die Population der Riesenkraken in der Region im Verlauf von 1W10 Tagen auf ein normales Niveau zurück. Es sind weiterhin besonders viele Kristalle und Topase vorhanden, doch neue entstehen in normalem Tempo."
      ]
    },
    source: "Schatzkammer der Drachen"
  },
];
