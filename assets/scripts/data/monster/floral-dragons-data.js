window.MONSTER_DATA_FLORAL_DRAGONS = [
  {
    name: "Aconit-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Groß",
    gesinnung: "Neutral böse",
    cr: 9,
    xp: 5000,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 170,
    tp_wuerfel: "20W10+60",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m" },
    attribute: { STR: 20, DEX: 15, CON: 17, INT: 3, WIS: 14, CHA: 8 },
    rettungswuerfe: { GES: 6, KON: 7 },
    fertigkeiten: { "Wahrnehmung": 6, "Heimlichkeit": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 16,
    sprachen: [],
    umgebung: ["Sumpf"],
    bild: "floral-dragons/aconit-drache.png",
    beschreibung: [
      "Überlieferungen zufolge schuf die junge Sumpfhexe Lilura den ersten Aconit-Drachen durch einen Fehler. Sie wollte ihren geliebten Krötengefährten mit einem Trank aus Eisenhut-Extrakt, einem Dickungsmittel, fauligem Sumpfwasser und verbotener Magie in ein mächtigeres Wesen verwandeln. Als die Kröte an dem Gift zu sterben begann, warf Lilura hastig einen Verwandlungszauber und dachte dabei als Erstes an einen Drachen. Der Zauber wirkte, doch das Ergebnis war kein gewöhnlicher Drache: ein massiges Ungetüm mit den Blütenblättern der Eisenhut-Pflanze, enormen scharfen Zähnen aus einem Maul voller zäher Spucke und biolumineszenten Leuchtködern über Kopf und Rücken.",
      "Aconit-Drachen sind massige Geschöpfe mit breiten Mäulern und kräftigen, muskulösen Gliedmaßen. Ihre Füße sind mit Schwimmhäuten versehen, und Saugnäpfe an den Zehen erlauben es ihnen, an Bäumen haftend auf Beute zu lauern. Die Blüten des Drachen erblühen in Violetttönen. Eine dünne Schleimschicht, abgesondert aus hellgrün gefleckten Drüsen an seinem Rücken, überzieht die Haut und verhindert, dass sie austrocknet. Das zweite Herz des Aconit-Drachen sitzt in seinem wuchtigen Kopf und zirkuliert eine teerartige Substanz namens Ikvor durch seinen Körper – ein lähmender und giftiger Stoff, der über winzige Kanäle in den Zähnen ins Maul gelangt und als schwarzer Speichel unaufhörlich tropft.",
      "Aconit-Drachen bewohnen Sümpfe, Moore und Moräste und bevorzugen kühle Temperaturen sowie dicht bewachsene Gebiete. Tagsüber verharren sie unter Wasser und lassen nur ihre Leuchtköder über der Oberfläche sichtbar. Nachts klettern sie auf Bäume, hängen ihren Köder herab und locken damit Beute an. Ist die Beute nah genug, speit der Drache seinen giftigen Speichel auf sie, lähmt sie und tötet sie nach Belieben. Algae im besetzten Moor verfärbt sich langsam hellgrün, und ringsum sprießen Eisenhutblumen. Wenige Tropfen des Drachenspeichels genügen, um ein ganzes Moorgewässer zu verseuchen."
    ],
    besonderheiten: [
      { name: "Hinterhältig", beschreibung: "In der ersten Runde eines Kampfes hat der Drache Vorteil auf Angriffswürfe gegen jede Kreatur, die er überrascht hat." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn dem Drachen ein Rettungswurf misslingt, kann er sich entscheiden, ihn zu bestehen." },
      { name: "Spinnenklettern", beschreibung: "Der Drache kann schwierige Oberflächen erklimmen, darunter verkehrt herum an Decken, ohne einen Fähigkeitswurf ablegen zu müssen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache setzt seine Biolumineszente Florale Präsenz ein und führt einen Bissangriff durch." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 16 (2W10+5) Stichschaden plus 4 (1W8) Giftschaden, und das Ziel muss einen SG-15-Konstitutionsrettungswurf bestehen, oder es erleidet zu Beginn jedes seiner Züge 4 (1W8) Giftschaden, bis es oder eine andere Kreatur eine Aktion aufwendet, um das Gift abzuwischen." },
      { name: "Biolumineszente Florale Präsenz", beschreibung: "Der Leuchtköder des Drachen erstrahlt in einem verlockenden Licht. Jede Kreatur, die den Köder sehen kann, muss einen SG-15-Weisheitsrettungswurf ablegen. Eine Kreatur, die nicht weiß, dass der Köder Teil des Drachen ist, legt diesen Rettungswurf mit Nachteil ab. Bei einem Fehlschlag ist das Ziel vom Drachen bezaubert, bis es Schaden erleidet. Ein bezaubertes Ziel muss sich in seinem Zug auf dem direktesten Weg auf den Drachen zubewegen. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und beendet den Effekt bei einem Erfolg. Wenn der Rettungswurf einer Kreatur erfolgreich ist oder der Effekt für sie endet, ist die Kreatur 24 Stunden lang immun gegen die Biolumineszente Florale Präsenz des Drachen." },
      { name: "Speien", beschreibung: "Der Drache speit seinen giftigen Speichel in einem 9-m-Kegel aus. Jede Kreatur in diesem Bereich muss einen SG-15-Konstitutionsrettungswurf ablegen. Bei einem missglückten Rettungswurf erleidet ein Ziel 7 (2W6) Giftschaden und ist bis zum Beginn seines nächsten Zuges gelähmt." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Bissangriff", beschreibung: "Der Drache führt einen Bissangriff durch." },
      { name: "Erspähen", beschreibung: "Der Drache führt einen Weisheit (Wahrnehmung)-Wurf durch." },
      { name: "Beute (kostet 2 Aktionen)", beschreibung: "Der Drache frisst einen nahegelegenen Clematis-Drachen oder ein ähnliches Geschöpf und regeneriert dabei 9 (2W6+2) Trefferpunkte." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative 20 (bei Gleichstand verlierend) führt der Drache eine Hortaktion aus, um einen der folgenden Effekte zu verursachen. Der Drache kann nicht denselben Effekt zwei Runden in Folge einsetzen:",
      aktionen: [
        "Der Drache scheidet Pheromone aus, die mit dem verseuchten Wasser um ihn herum reagieren und eine 6-m-Kugelzone aus Nebel um einen Punkt erzeugen, den der Drache innerhalb von 9 m von sich wählt. Das Gebiet der Kugel ist stark verdeckt. Der Nebel löst sich zu Beginn des nächsten Zuges des Drachen auf.",
        "Der Drache nutzt das faulige Sumpfwasser seines Horts, um seine Feinde zu überwältigen. Der Drache kann eine beliebige Anzahl von Kreaturen anvisieren, die er in Sumpfwasser innerhalb von 27 m von sich sieht. Ein Ziel muss einen SG-15-Konstitutionsrettungswurf bestehen oder 7 (2W6) Giftschaden erleiden und bis zum Ende seines nächsten Zuges vergiftet sein. Ein Ziel in einem Boot oder anderweitig nicht in direktem Kontakt mit dem Wasser hat Vorteil auf diesen Rettungswurf.",
        "Korrupte Vegetation im und um den Sumpf greift alle Kreaturen in einem 6-m-Würfel innerhalb von 18 m des Drachen, den er sehen kann. Jede Kreatur in dem Bereich muss einen SG-17-Stärkerettungswurf bestehen oder bis zu 6 m ins Wasser gezogen und zu Boden geworfen werden. Ein Ziel in einem Boot oder anderweitig nicht in direktem Kontakt mit dem Wasser hat Vorteil auf diesen Rettungswurf."
      ]
    },
    regionale_effekte: {
      beschreibung: "Das Gebiet um den Hort eines Aconit-Drachen ist durch die Präsenz des Drachen vergiftet, was einen oder mehrere der folgenden Effekte erzeugt:",
      effekte: [
        "Bäume innerhalb von 1,6 km des Drachenhorts haben weißes Rindenleder und verknotete Äste.",
        "Wasserquellen innerhalb von 1,6 km des Drachenhorts sind mit giftigem Speichel verseucht und damit zum Trinken, Waschen oder Kochen ungeeignet. Sie können nicht durch Kochen gereinigt werden. Der Zauber Speise und Trank reinigen entfernt die Toxizität, aber das Wasser behält seine zähflüssige Konsistenz.",
        "Die Eisenhutblumen, die innerhalb von 1,6 km des Drachenhorts wachsen, ergeben besonders wirksame Gifte.",
        "Wenn der Drache stirbt, verblassen diese Effekte im Laufe von 1W10 Tagen."
      ]
    },
    source: "Floral Dragons"
  },
  {
    name: "Amaranth-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Mittelgroß",
    gesinnung: "Jede neutrale Gesinnung",
    cr: 2,
    xp: 450,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 65,
    tp_wuerfel: "10W8+20",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m" },
    attribute: { STR: 14, DEX: 15, CON: 15, INT: 7, WIS: 12, CHA: 15 },
    rettungswuerfe: { GES: 4, KON: 4 },
    fertigkeiten: { "Wahrnehmung": 3, "Heimlichkeit": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Versteht eine beliebige Sprache, kann aber nicht sprechen"],
    umgebung: ["Dschungel", "Wald"],
    bild: "floral-dragons/amaranth-drache.png",
    beschreibung: [
      "Überlieferungen zufolge waren die Amaranth-Drachen einst unsterblich – ihre Blüten verblassten nie, und ihre Blätter verwelkten nie. Als frühe Humanoide begannen, diese Drachen zu jagen, um ihre Unsterblichkeit auf die Probe zu stellen, änderte ein von Reue erfüllter Jäger namens Juan alles: Er pflegte einen schwer verwundeten Drachen gesund und gewann dessen Vertrauen. Die beiden wurden enge Gefährten, bis Juan im Alter zu gebrechlich für das Abenteurerleben war. In seiner Trauer versammelte der Drache seinesgleichen zu einem großen Rat und bat die Götter um ein Ende ihrer Unsterblichkeit und eine dauerhafte Freundschaft zwischen Amaranth-Drachen und Humanoiden. Der Gott des Mitgefühls erhörte das Gebet.",
      "Amaranth-Drachen können bis zu 1,8 m Länge erreichen, ohne den Schwanz, der ebenso lang sein kann wie der Körper. Ihre Blüten erblühen am häufigsten in Rot, aber hellere Rosa- und rötliche Lilatöne sind ebenfalls möglich. Trotz ihrer leuchtenden Farben sind Amaranth-Drachen hervorragend getarnt und halten sich vollkommen still, sodass Wanderer ihre blütenreichen Schwänze oft für wild wachsende Amarant-Pflanzen halten. Ihre kräftigen, wurzelartigen Klauen erlauben es ihnen, sich an Bäumen festzuhalten, und sie besitzen ausgezeichnetes Sehvermögen, auch bei Nacht.",
      "Amaranth-Drachen kommen am häufigsten in Dschungeln vor, einige leben auch in gemäßigten Wäldern. Sie bauen ihre Nester in hohen Baumkronen aus Zweigen und abgeworfenen Blättern. Dank ihres freundlichen und verspielten Wesens leben sie häufig bei Humanoiden und sind besonders nützliche Gefährten beim Aufspüren von Beute – dank ihrer ausgezeichneten Sicht und ihrer Fähigkeit zur Tarnung."
    ],
    besonderheiten: [
      { name: "Florale Erscheinung", beschreibung: "Wenn der Drache regungslos bleibt, ist er von einem gewöhnlichen Amarant-Wuchs nicht zu unterscheiden. Er hat Vorteil auf Geschicklichkeit (Heimlichkeit)-Würfe, wenn er sich in einem von ähnlichen Pflanzen bedeckten Gebiet versteckt." },
      { name: "Scharfe Sinne", beschreibung: "Der Drache hat Vorteil auf Weisheit (Wahrnehmung)-Würfe." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt zwei Nahkampfangriffe durch." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W6+3) Hiebschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Apfelbaum-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Gigantisch",
    gesinnung: "Normalerweise rechtschaffen gut",
    cr: 27,
    xp: 105000,
    rk: 22,
    ruestungstyp: "natürliche Rüstung",
    tp: 546,
    tp_wuerfel: "28W20+252",
    bewegung: { "Gehen": "15 m", "Schwimmen": "12 m" },
    attribute: { STR: 30, DEX: 15, CON: 28, INT: 30, WIS: 28, CHA: 26 },
    rettungswuerfe: { STR: 18, GES: 10, WEI: 17, CHA: 16 },
    fertigkeiten: { "Geschichte": 18, "Motiv erkennen": 17, "Naturkunde": 18, "Wahrnehmung": 17, "Überzeugung": 16, "Überleben": 17 },
    schadensresistenzen: ["Feuer", "Blitz", "Strahlend", "Donner"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m", "Erschütterungssinn 36 m"],
    passiveWahrnehmung: 27,
    sprachen: ["Gemein", "Drakonisch", "bis zu vier weitere Sprachen nach Wahl"],
    umgebung: ["Hügel", "Stadt"],
    bild: "floral-dragons/apfelbaum-drache.png",
    beschreibung: [
      "Als die Welt jung war, legte eine große Hügeldrachen zwei Eier auf einem Berggipfel ab. Eines rollte in die Wildnis und wurde zum Manchinil-Drachen. Das andere rollte in ein fruchtbares Tal zu einem Nomadenlager. Die Menschen erkannten es als Göttergabe und pflegten es hingebungsvoll. Das Nestling, das schlüpfte, war ein Apfelbaum-Drache. Die Menschen lehrten ihn die Welt, ihre Sprache und ihre Werte, legten das Wanderleben nieder und bauten dauerhaft Häuser unter seinem wachsenden Blätterdach. Als der Drache alt genug war, Früchte zu tragen, teilte er seine Ernte mit jenen, die ihn großgezogen hatten.",
      "Apfelbaum-Drachen wachsen auf über das Doppelte der Größe echter Apfelbäume und erreichen etwa 12 m Höhe. Ihre natürliche Lebensspanne ist unklar, da keine Berichte über Apfelbaum-Drachen existieren, die an Altersschwäche starben. Sie haben geweihartige Kronen aus dicken Ästen, eine laubartige Kammlinie entlang ihres Rückens und einen blattbedeckten Schwanz, den sie als Peitsche zur Verteidigung einsetzen. Ihre Vorderbeine haben wurzelartige Auswüchse, die sie im Boden vergraben, um Wasser und Nährstoffe aufzunehmen. Bei ausreichend Sonnenlicht leuchten helle Lichtlinien auf ihrem Bauch.",
      "Apfelbaum-Drachen benötigen die Gesellschaft von Humanoiden und werden als weise Berater und mächtige Hüter verehrt. Sie lehnen Führungsrollen ab und lassen die Menschen ihre eigenen Angelegenheiten regeln. Die meisten Jahre verbringen sie reglos mit im Boden vergrabenen Wurzeln. Nur in äußerster Not verlassen sie ihren Platz und kämpfen bis zum Tod für die Humanoiden unter ihrer Obhut. Ihre Früchte sind eine wichtige Nahrungsquelle für die umliegenden Gemeinschaften."
    ],
    besonderheiten: [
      { name: "Ansturm", beschreibung: "Wenn der Drache mindestens 9 m geradlinig auf ein Ziel zuläuft und es im selben Zug mit einem Rammnangriff trifft, erleidet das Ziel 18 (4W8) zusätzlichen Schaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-26-Stärkerettungswurf bestehen oder zu Boden fallen." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn dem Drachen ein Rettungswurf misslingt, kann er sich entscheiden, ihn zu bestehen." },
      { name: "Magische Waffen", beschreibung: "Die Waffenangriffe des Drachen sind magisch." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Schützende Florale Präsenz einsetzen. Dann führt er drei Angriffe durch: einen mit seinem Rammen und zwei mit seinem Schwanz." },
      { name: "Rammen", beschreibung: "Nahkampf-Waffenangriff: +18 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 41 (7W8+10) Wuchtschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +18 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 43 (6W10+10) Wuchtschaden." },
      { name: "Schützende Florale Präsenz (2/Tag)", beschreibung: "Der Drache erstreckt eine Schutzaura auf eine beliebige Anzahl von Kreaturen seiner Wahl, die ihm innerhalb von 90 m bekannt sind, sich selbst ausgeschlossen. Die Ziele erhalten Resistenz gegen eine Schadensart nach Wahl des Drachen: Feuer, Kälte, Blitz, nekrotisch, Gift, psychisch oder Donner. Außerdem regeneriert ein Ziel beim Zurückgewinnen von Trefferpunkten durch Zauber oder Tränke die höchstmögliche Anzahl für jeden Würfelwurf. Diese Effekte dauern 1 Minute lang an oder bis der Drache handlungsunfähig ist." },
      { name: "Heilendes Licht (3/Tag)", beschreibung: "Das Licht, das durch die Blätter des Drachen fällt, erhält magische Heilkraft. Jede Kreatur innerhalb von 6 m um den Drachen, einschließlich des Drachen selbst, regeneriert 27 (6W8) Trefferpunkte und wird von den Zuständen Verängstigt und Vergiftet beheilt. Der Drache kann diese Aktion nicht in Dunkelheit einsetzen." },
      { name: "Sonnenlicht-Odem (Aufladung 5–6)", beschreibung: "Der Drache atmet gleißendes Sonnenlicht in einem 27-m-Kegel aus. Jede Kreatur in diesem Bereich muss einen SG-24-Konstitutionsrettungswurf ablegen. Bei einem Fehlschlag erleidet eine Kreatur 66 (12W10) Strahlschaden und ist 1 Minute lang geblendet. Bei einem Erfolg erleidet sie die Hälfte des Schadens und ist nicht geblendet." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Beschütze die Kleinen", beschreibung: "Wenn eine mittelgroße oder kleinere Kreatur innerhalb von 6 m des Drachen von einem Angriff einer Kreatur getroffen wird, die der Drache sehen kann, kann der Drache dem Angriffswurf Nachteil auferlegen. Wenn der Angriff trifft, erleidet der Drache den Schaden anstelle der Zielkreatur." }
    ],
    legendaere_aktionen: [
      { name: "Schwanz", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Entwurzeln", beschreibung: "Der Drache bewegt sich bis zu seiner Bewegungsrate. Unbeaufsichtigte Gegenstände und Strukturen in seinem Weg erleiden 16 (3W10) Wuchtschaden." },
      { name: "Neu verwurzeln (kostet 2 Aktionen)", beschreibung: "Der Drache vergräbt seine Wurzeln im Boden, regeneriert 27 (6W8) Trefferpunkte und entfernt alle Stufen der Erschöpfung, die ihn betreffen. Bis zum Ende seines nächsten Zuges wird seine Bewegungsrate 0." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative 20 (bei Gleichstand verlierend) führt der Drache eine Hortaktion aus, um einen der folgenden Effekte zu verursachen. Der Drache kann nicht denselben Effekt zwei Runden in Folge einsetzen:",
      aktionen: [
        "Ein Verbündeter des Drachen innerhalb seines Horts erhält Inspiration.",
        "Ein Verbündeter des Drachen innerhalb seines Horts erhält 6 (2W10) temporäre Trefferpunkte.",
        "Wurzeln brechen aus dem Boden in einem Kreis mit 30 m Durchmesser um den Drachen hervor. Alle Kreaturen in diesem Bereich müssen einen SG-20-Geschicklichkeitsrettungswurf bestehen oder zu Boden fallen. Das Gebiet wird schwieriges Terrain."
      ]
    },
    regionale_effekte: {
      beschreibung: "Das Gebiet um den Hort eines Apfelbaum-Drachen wird von der Magie des Drachen beeinflusst, was einen oder mehrere der folgenden Effekte erzeugt:",
      effekte: [
        "Feldfrüchte, die innerhalb von 16 km des Horts angebaut werden, sind unnatürlich fruchtbar und gegen Krankheiten resistent.",
        "Menschen tendieren dazu, weniger streitsüchtig und kooperativer miteinander zu sein.",
        "An Regentagen ist fast immer ein Regenbogen zu sehen, der sich in Richtung des Drachen wölbt.",
        "Wenn der Drache stirbt, verblassen diese Effekte im Laufe von 1W10 Tagen."
      ]
    },
    source: "Floral Dragons"
  },
  {
    name: "Azalea-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Mittelgroß",
    gesinnung: "Jede neutrale Gesinnung",
    cr: 1,
    xp: 200,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 52,
    tp_wuerfel: "8W8+16",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 15, DEX: 15, CON: 14, INT: 10, WIS: 13, CHA: 8 },
    rettungswuerfe: { GES: 4, KON: 4, WEI: 3, CHA: 1 },
    fertigkeiten: { "Wahrnehmung": 5, "Heimlichkeit": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: ["Kälte"],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Drakonisch"],
    umgebung: ["Grasland", "Wald"],
    bild: "floral-dragons/azalea-drache.png",
    beschreibung: [
      "Legenden berichten von einer uralten Floraldrachen namens Haskra, dem Wolfsbaum. Jahrhundertelang schützte sie das Land und die Geschöpfe ihres Reiches mit gewaltiger Macht und wurde von den Waldbewohnern wie eine Gottheit verehrt. Als humanoidische Königreiche ihr Land begehrten, verbündeten sich ein menschlicher und ein elfischer Monarch und führten einen Feldzug gegen sie. Nach einem Jahr und einem Tag wurde Haskra schließlich bezwungen. Mit ihrem sterbenden Heulen erblühte sie in leuchtenden rötlich-rosa Blüten, die das Blut der Gefallenen aufsogen. Aus diesen Blüten erwuchsen die ersten Azalea-Drachen – Vollstrecker der Rache ihrer Mutter gegen jene Humanoiden, die sich als Herren der Wildnis betrachten.",
      "Azalea-Drachen sind intelligente Jäger mit einer Form, die gleichermaßen wolf- und drachenhaft ist. Sie tragen rosa, lila, rote oder kastanienbraune Blüten am Hals, am Schwanzansatz, an den Ohren und Knöcheln. Ausgewachsen erreichen sie die Größe eines großen Wolfes – etwa 1,5 m von Schnauze bis Schwanz und rund 0,9 m Schulterhöhe. Neben ihren Reihen scharfer Zähne sind sie mit außergewöhnlichem Geruchs- und Gehörsinn sowie wärmeempfindlichen Organen hinter den Nüstern ausgestattet, die ihnen erlauben, die Körperwärme ihrer Beute aufzuspüren.",
      "Azalea-Drachen leben in sozialen Rudeln unter Führung eines lebenslang gebundenen Paares. Jedes Rudel hat eigene Gesetze, Sitten und moralische Kodizes und bewacht weitläufige Territorien in Grasländern und Wäldern warmer Klimazonen. Humanoide, die in ihr Gebiet eindringen, werden wie gewöhnliche Beute gejagt – nicht als Nahrung, sondern aus Rudelschutz und uralter Feindschaft. Nur Druiden, die die humanoidische Gesellschaft vollständig zugunsten eines naturverbundenen Lebens aufgegeben haben, werden von manchen Rudeln bisweilen toleriert."
    ],
    besonderheiten: [
      { name: "Rudeltaktik", beschreibung: "Der Drache hat Vorteil auf einen Angriffswurf gegen eine Kreatur, wenn mindestens einer seiner Verbündeten innerhalb von 1,5 m der Kreatur steht und der Verbündete nicht handlungsunfähig ist." },
      { name: "Scharfes Gehör und Geruchssinn", beschreibung: "Der Drache hat Vorteil auf Weisheit (Wahrnehmung)-Würfe, die auf Gehör oder Geruch beruhen." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W10+2) Stichschaden, und wenn das Ziel eine Kreatur ist, muss es einen SG-13-Konstitutionsrettungswurf bestehen oder bis zum Ende seines nächsten Zuges vergiftet sein." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Clematis-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 0.5,
    xp: 100,
    rk: 11,
    ruestungstyp: null,
    tp: 27,
    tp_wuerfel: "5W6+10",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Schwimmen": "6 m" },
    attribute: { STR: 5, DEX: 12, CON: 15, INT: 3, WIS: 8, CHA: 6 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 3, "Einschüchtern": 2 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Blindsicht 1,5 m", "Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: [],
    umgebung: ["Sumpf", "Gewässer", "Stadt"],
    bild: "floral-dragons/clematis-drache.png",
    beschreibung: [
      "Der Clematis-Drache ist einer der jüngsten Floraldrachen und entstand erst vor weniger als einem Jahrhundert. Der junge Hofzauberer Jeor Fandor erschuf die erste Clematis-Drache mithilfe von Transmutationsmagie, indem er Drachenblut mit Blumenextrakt verband – als fehlendes Ingredient entpuppte sich ein Froschextrakt. Sein Ziel war es, ein einzigartiges und ästhetisch ansprechendes Wesen für den Garten des Prinzen zu schaffen. Der Legende nach hatte er dabei auch das Herz des Prinzen Lucian im Sinn; dass die beiden im folgenden Herbst heirateten, legt nahe, dass Jeors Bemühungen von Erfolg gekrönt waren.",
      "Clematis-Drachen sind klein und froschähnlich mit einem gedrungenen, runden, violetten Körper. Ausgewachsen erreichen sie etwa 30 cm Länge und stehen nur 10 cm an der Schulter. Sie sind kurzlebig mit einer Höchstlebensdauer von fünf Jahren, reifen aber schnell und vermehren sich rasch. Erwachsene speichern Giftstoffe in einer Drüse in ihrem Hals, die bei Verletzung platzen und Raubtiere vergiften kann. Sie lecken sich außerdem am gesamten Körper, um ihre rasiermesserscharfen Blütenblätter mit einem starken Abwehrgift zu beschichten.",
      "Clematis-Drachen sind für ihre unlenksame Natur und Reizbarkeit bekannt – sie haben kaum Angst vor größeren Kreaturen und verstehen keine Sprache. Eine kleine Population kann ein Zeichen für ein gesundes Moor sein, da die Drachen Giftstoffe passiv durch ihre poröse Haut aufnehmen und verschmutzte Sümpfe in fruchtbare Feuchtgebiete verwandeln. Größere Populationen hingegen können Ökosysteme gefährden und gelten in Städten an Flüssen oder Seen mittlerweile als lästige Schädlinge."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann sowohl Luft als auch Wasser atmen." },
      { name: "Giftige Blütenblätter", beschreibung: "Eine Kreatur, die den Drachen berührt oder ihn mit einem Nahkampfangriff aus einer Entfernung von höchstens 1,5 m trifft, erleidet 2 (1W4) Stichschaden und muss einen SG-13-Konstitutionsrettungswurf ablegen. Bei einem Fehlschlag erleidet sie 9 (2W8) Giftschaden und ist bis zum Ende ihres nächsten Zuges gelähmt (sofern sie nicht gegen den Vergiftet-Zustand immun ist). Bei einem Erfolg erleidet sie nur die Hälfte des Schadens und ist nicht gelähmt." },
      { name: "Weitsprung", beschreibung: "Der Weitsprung des Drachen beträgt bis zu 9 m und sein Hochsprung bis zu 4,5 m, mit oder ohne Anlauf." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +3 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 3 (1W4+1) Stichschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Florivore",
    art: "Monstrosität",
    unterart: null,
    groesse: "Winzig",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 27,
    tp_wuerfel: "5W4+15",
    bewegung: { "Gehen": "9 m", "Schwimmen": "12 m" },
    attribute: { STR: 17, DEX: 16, CON: 16, INT: 4, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 5 },
    schadensresistenzen: ["Wucht, Stich und Hieb von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Säure", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m", "Blindsicht 3 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Arktis", "Dschungel", "Gebirge", "Gewässer", "Grasland", "Höhle", "Sumpf", "Wald", "Wüste"],
    bild: "floral-dragons/florivore.png",
    beschreibung: [
      "Die erste schriftliche Erwähnung der Florivore stammt aus einem alten Text über Floraldrachen-Pflege: »Zeigt sich ein Drache krank, welk, fressunlustig oder verliert er seine Blüten außerhalb der Saison, so prüfe man zunächst das Wasser und den Boden. Findet man beides einwandfrei, so untersuche der Pfleger den Drachen sorgfältig nach dem grässlichen Schädling. Zeichen des Florivores sind Löcher in Haut, Rinde oder Schuppen, ein stechender Essiggeruch sowie Eiersäcke, mit Seide an der Drachenhaut befestigt. Der Schädling selbst ist feuerrot, besitzt viele Beine und trägt eine Schale wie die Weinbergschnecke.«",
      "Florivore sind winzige Geschöpfe mit Merkmalen von Insekten, Krebstieren und Schnecken. Ihre dicken, leuchtend roten Spiralschalen sind mit Stacheln besetzt. Auf einem langen Hals sitzen insektenartige Köpfe mit kräftigen Mundwerkzeugen, die selbst die dickste Borke durchkauen. Sie navigieren mit zwei großen Augen und bestachelten Antennen. Ihr Schwanz trägt segmentierte Chitinplatten und zwei Reihen kleiner Schwimmfüße, die ihnen im Wasser dienen und mit denen sie sich an Floraldrachen festkrallen. Solange sie fressen können, wachsen Florivore weiter: Sie beginnen fingernagel-groß, können aber die Größe einer Katze erreichen.",
      "Florivore infestieren nahezu jeden Lebensraum und folgen Floraldrachen überall hin – von der Wüste bis zum Gebirge, selbst in Gewässer. Sie graben sich in Blattwerk und Haut ein, saugen Saft aus und klammerath sich für Tage am Wirt fest. Für mächtige Floraldrachen sind sie kaum mehr als eine Unannehmlichkeit, doch für kleinere Arten können wenige Florivore ernste Gesundheitsschäden verursachen. Sie sind außerdem eine Bedrohung für Vespons, deren Honig sie verschlingen. In manchen Regionen gelten Florivore – gedämpft und mit Zitrone serviert – als Delikatesse."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Florivore kann Luft und Wasser atmen." },
      { name: "Schadensübertragung", beschreibung: "Während der Florivore an einer Kreatur befestigt ist, erleidet er nur die Hälfte des ihm zugefügten Schadens (abgerundet), und diese Kreatur erleidet die andere Hälfte." },
      { name: "Floraler Schädling", beschreibung: "Die Angriffe des Florivores gegen Floraldrachen und Pflanzen ignorieren Schadensresistenzen." },
      { name: "Saftsauger", beschreibung: "Jedes Mal, wenn der Florivore einen Floraldrachen oder eine Pflanze mit seinem Bissangriff trifft, regeneriert er 2 (1W4) Trefferpunkte." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 5 (1W4+3) Stichschaden." },
      { name: "Eingraben", beschreibung: "Der Florivore gräbt sich mit seinen scharfen Klauen in das Blattwerk oder die Haut einer Kreatur in 1,5 m ein. Das Ziel muss einen SG-15-Konstitutionsrettungswurf bestehen. Floraldrachen und Pflanzen haben Nachteil auf diesen Rettungswurf. Bei einem Fehlschlag erleidet das Ziel 3 (1W6) Stichschaden und der Florivore befestigt sich am Ziel. Während er befestigt ist, kann der Florivore Bissangriffe nur gegen dieses Ziel durchführen und hat Vorteil auf den Angriffswurf. Der Florivore kann sich lösen, indem er 1,5 m seiner Bewegung aufwendet. Eine Kreatur, einschließlich des Ziels, kann ihre Aktion aufwenden und einen SG-15-Stärkeprüfung bestehen, um den Florivore abzulösen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Glyzinien-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Riesig",
    gesinnung: "Jede nicht gute Gesinnung",
    cr: 17,
    xp: 18000,
    rk: 19,
    ruestungstyp: "natürliche Rüstung",
    tp: 256,
    tp_wuerfel: "19W12+133",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 24, DEX: 13, CON: 25, INT: 17, WIS: 14, CHA: 25 },
    rettungswuerfe: { GES: 7, KON: 13, WEI: 8, CHA: 13 },
    fertigkeiten: { "Arkana": 9, "Täuschung": 13, "Geschichte": 9, "Menschenkenntnis": 8, "Wahrnehmung": 14 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 24,
    sprachen: ["Drakonisch", "Sylvanisch", "sowie zwei weitere Sprachen nach Wahl"],
    umgebung: ["Dschungel", "Feenwildnis", "Wald"],
    bild: "floral-dragons/glyzinien-drache.png",
    beschreibung: [
      "Als sich vor langer Zeit Drachen im Feenreich eines uralten Zauberwalds niederließen, wehrte sich der Wald: Mächtige Ranken, bedeckt mit wunderschönen violetten Blüten, erwürgten ihre Jungtiere. Statt Früchten trugen diese Blüten die Eier der ersten Glyzinien-Drachen. Seither tragen die Glyzinien-Drachen die Feenmagie jenes alten Waldes in sich – und dessen Böswilligkeit. Trotz ihrer Schönheit zählen sie zu den gefürchtetsten aller Floraldrachen, denn sie gedeihen, indem sie anderen das Leben herauswürgen.",
      "Als einer der imposantesten Floraldrachen können Glyzinien-Drachen etwa 4,5 Meter hoch und bis zu 18 Meter lang werden, mit einer Flügelspannweite von fast 12 Metern und einem Gewicht von bis zu 8.600 Kilogramm. Harte, holzartige Schuppen und irisierend schimmernde Platten schützen ihren pferdeähnlichen Körper. Reihen zarter weißer, violetter oder blauer Blüten bilden eine kaskadenartige Mähne und einen Schwanz und sind die Quelle ihrer Magie. Glyzinien-Drachen können bis zu 800 Jahre alt werden; nach der Blüte regenerieren sie sich von nahezu jeder Verletzung und können sogar verlorene Gliedmaßen und Flügel in wenigen Wochen nachwachsen lassen. Nur Frost hemmt ihr Wachstum und treibt sie in unterirdische Winterschlafkammern.",
      "Von Natur aus Einzelgänger, verachten Glyzinien-Drachen nahezu alles Lebende. Sie sind hochintelligent, beherrschen mächtige Pflanzenkontrollmagie und setzen besonders gerne Bezauberungszauber ein, um andere Geschöpfe zu manipulieren. Ihre Eier wachsen in Nestern an dicken Holzranken, die in frisch getöteten Wesen verwurzelt sein müssen. Die Mutter versorgt den Nachwuchs nur bis zur ersten Blüte – dann jagt sie die Brut aus ihrem Revier und erwürgt das langsamste Jungtier selbst. Glyzinien-Drachen jagen mit dem betäubenden Duft ihrer Blüten: Der Geruch lockt die Beute heran, lässt sie in tiefen Schlaf fallen und der Drache fängt sie in erstickenden Ranken."
    ],
    besonderheiten: [
      { name: "Feenabstammung", beschreibung: "Der Drache hat Vorteil auf Rettungswürfe gegen Bezauberung, und Magie kann ihn nicht in den Schlaf versetzen." },
      { name: "Regeneration", beschreibung: "Der Drache regeneriert zu Beginn seines Zuges 10 Trefferpunkte. Wenn der Drache Kälte- oder Nekrotischschaden erleidet, funktioniert diese Eigenschaft zu Beginn seines nächsten Zuges nicht. Der Drache stirbt nur, wenn er am Beginn seines Zuges 0 Trefferpunkte hat und sich nicht regeneriert." },
      { name: "Zauberwirken", beschreibung: "Der Drache ist ein Zauberwirker der 9. Stufe. Sein Zaubermerkmal ist Charisma (Zauber-SG 21). Er kann die folgenden Bardenzauber wirken, ohne Materialkomponenten zu benötigen – Zaubertricks (nach Belieben): Tanzende Lichter, Magehand, Prestidigitation. 1. Grad (4 Slots): Geißel, Identifizieren, Schlaf. 2. Grad (3 Slots): Gegenstand orten, Unsichtbares sehen, Suggestion. 3. Grad (3 Slots): Magie brechen, Pflanzenwuchs, Mit Pflanzen sprechen. 4. Grad (3 Slots): Verwirrung, Bewegungsfreiheit. 5. Grad (1 Slot): Geas." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Einschläfernde Florale Präsenz einsetzen. Dann wirkt er einen Zauber oder führt drei Angriffe durch: einen mit seinem Biss und zwei mit seinem Stampfer." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 18 (2W10+7) Stichschaden." },
      { name: "Stampfer", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 14 (2W6+7) Wuchtschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 16 (2W8+7) Wuchtschaden." },
      { name: "Greifende Ranken (Aufladung 5–6)", beschreibung: "Ranken umschlingen jede Kreatur nach Wahl des Drachen in 27 m um ihn. Jedes Ziel muss einen SG-21-Geschicklichkeitsrettungswurf bestehen und erleidet bei einem Fehlschlag 18 (4W8) Stichschaden oder bei einem Erfolg den halben Schaden. Bei einem Fehlschlag ist das Ziel außerdem ergriffen und gefesselt (Entkommen-SG 19). Eine gefesselte Kreatur erleidet zu Beginn jedes ihrer Züge 18 (4W8) Stichschaden." },
      { name: "Einschläfernde Florale Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen in 36 m muss einen SG-19-Konstitutionsrettungswurf bestehen oder wird für 1 Minute bewusstlos. Dieser Effekt endet für eine Kreatur, wenn sie Schaden erleidet oder jemand eine Aktion aufwendet, um sie zu wecken. Wenn der Rettungswurf einer Kreatur erfolgreich ist oder der Effekt für sie endet, ist die Kreatur 24 Stunden lang immun gegen die Florale Präsenz des Drachen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Erspähen", beschreibung: "Der Drache führt einen Weisheit (Wahrnehmung)-Wurf durch." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Flügelangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Flügeln. Jede Kreatur in 3 m muss einen SG-21-Geschicklichkeitsrettungswurf bestehen oder erleidet 15 (2W6+8) Wuchtschaden und fällt zu Boden. Der Drache kann dann bis zur Hälfte seiner Flugbewegung fliegen." }
    ],
    source: "Floral Dragons"
  },
  {
    name: "Großer Aconit-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Riesig",
    gesinnung: "Neutral böse",
    cr: 11,
    xp: 7200,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 190,
    tp_wuerfel: "20W12+60",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m" },
    attribute: { STR: 20, DEX: 15, CON: 17, INT: 3, WIS: 14, CHA: 8 },
    rettungswuerfe: { GES: 6, KON: 7 },
    fertigkeiten: { "Wahrnehmung": 6, "Heimlichkeit": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 16,
    sprachen: [],
    umgebung: ["Sumpf"],
    bild: "floral-dragons/grosser_aconit-drache.png",
    beschreibung: [
      "Weibliche Aconit-Drachen können bis zu drei Köpfe entwickeln, indem sie mehrere andere Aconit-Drachen fressen. Diese dreiköpfigen Exemplare sind als Große Aconit-Drachen bekannt – seltene und noch furchteinflößendere Vertreter ihrer Art.",
      "Große Aconit-Drachen tragen in allen drei Köpfen ein Ikvor-Herz, das die tödliche schwarze Substanz durch den gesamten Körper pumpt. Mit drei Mäulern voller vergifteter Zähne und drei biolumineszenten Leuchtködern sind sie unter den Raubtieren des Sumpfes nahezu unübertroffen. Die drei Köpfe sind dabei keineswegs immer einer Meinung."
    ],
    besonderheiten: [
      { name: "Hinterhältig", beschreibung: "In der ersten Runde eines Kampfes hat der Drache Vorteil auf Angriffswürfe gegen jede Kreatur, die er überrascht hat." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn dem Drachen ein Rettungswurf misslingt, kann er sich entscheiden, ihn zu bestehen." },
      { name: "Scharfe Augen", beschreibung: "Der Drache hat Vorteil auf Weisheit (Wahrnehmung)-Würfe, die auf Sicht beruhen." },
      { name: "Spinnenklettern", beschreibung: "Der Drache kann schwierige Oberflächen erklimmen, darunter verkehrt herum an Decken, ohne einen Fähigkeitswurf ablegen zu müssen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache setzt seine Biolumineszente Florale Präsenz ein und führt drei Bissangriffe durch." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 21 (3W10+5) Stichschaden plus 4 (1W8) Giftschaden, und das Ziel muss einen SG-15-Konstitutionsrettungswurf bestehen, oder es erleidet zu Beginn jedes seiner Züge 4 (1W8) Giftschaden, bis es oder eine andere Kreatur eine Aktion aufwendet, um das Gift abzuwischen." },
      { name: "Biolumineszente Florale Präsenz", beschreibung: "Die Leuchtköder des Drachen erstrahlen in einem verlockenden Licht. Jede Kreatur, die die Köder sehen kann, muss einen SG-15-Weisheitsrettungswurf ablegen. Eine Kreatur, die nicht weiß, dass die Köder Teil des Drachen sind, legt diesen Rettungswurf mit Nachteil ab. Bei einem Fehlschlag ist das Ziel vom Drachen bezaubert, bis es Schaden erleidet. Ein bezaubertes Ziel muss sich in seinem Zug auf dem direktesten Weg auf den Drachen zubewegen. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und beendet den Effekt bei einem Erfolg. Wenn der Rettungswurf einer Kreatur erfolgreich ist oder der Effekt für sie endet, ist die Kreatur 24 Stunden lang immun gegen die Biolumineszente Florale Präsenz des Drachen." },
      { name: "Speien", beschreibung: "Der Drache speit seinen giftigen Speichel in einem 9-m-Kegel aus. Jede Kreatur in diesem Bereich muss einen SG-15-Konstitutionsrettungswurf ablegen. Bei einem missglückten Rettungswurf erleidet ein Ziel 7 (2W6) Giftschaden und ist bis zum Beginn seines nächsten Zuges gelähmt." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Bissangriff", beschreibung: "Der Drache führt einen Bissangriff durch." },
      { name: "Erspähen", beschreibung: "Der Drache führt einen Weisheit (Wahrnehmung)-Wurf durch." },
      { name: "Beute (kostet 2 Aktionen)", beschreibung: "Der Drache frisst einen nahegelegenen Clematis-Drachen oder ein ähnliches Geschöpf und regeneriert dabei 9 (2W6+2) Trefferpunkte." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative 20 (bei Gleichstand verlierend) führt der Drache eine Hortaktion aus, um einen der folgenden Effekte zu verursachen. Der Drache kann nicht denselben Effekt zwei Runden in Folge einsetzen:",
      aktionen: [
        "Der Drache scheidet Pheromone aus, die mit dem verseuchten Wasser um ihn herum reagieren und eine 6-m-Kugelzone aus Nebel um einen Punkt erzeugen, den der Drache innerhalb von 9 m von sich wählt. Das Gebiet der Kugel ist stark verdeckt. Der Nebel löst sich zu Beginn des nächsten Zuges des Drachen auf.",
        "Der Drache nutzt das faulige Sumpfwasser seines Horts, um seine Feinde zu überwältigen. Der Drache kann eine beliebige Anzahl von Kreaturen anvisieren, die er in Sumpfwasser innerhalb von 27 m von sich sieht. Ein Ziel muss einen SG-15-Konstitutionsrettungswurf bestehen oder 7 (2W6) Giftschaden erleiden und bis zum Ende seines nächsten Zuges vergiftet sein. Ein Ziel in einem Boot oder anderweitig nicht in direktem Kontakt mit dem Wasser hat Vorteil auf diesen Rettungswurf.",
        "Korrupte Vegetation im und um den Sumpf greift alle Kreaturen in einem 6-m-Würfel innerhalb von 18 m des Drachen, den er sehen kann. Jede Kreatur in dem Bereich muss einen SG-17-Stärkerettungswurf bestehen oder bis zu 6 m ins Wasser gezogen und zu Boden geworfen werden. Ein Ziel in einem Boot oder anderweitig nicht in direktem Kontakt mit dem Wasser hat Vorteil auf diesen Rettungswurf."
      ]
    },
    regionale_effekte: {
      beschreibung: "Das Gebiet um den Hort eines Großen Aconit-Drachen ist durch die Präsenz des Drachen vergiftet, was einen oder mehrere der folgenden Effekte erzeugt:",
      effekte: [
        "Bäume innerhalb von 1,6 km des Drachenhorts haben weißes Rindenleder und verknotete Äste.",
        "Wasserquellen innerhalb von 1,6 km des Drachenhorts sind mit giftigem Speichel verseucht und damit zum Trinken, Waschen oder Kochen ungeeignet. Sie können nicht durch Kochen gereinigt werden. Der Zauber Speise und Trank reinigen entfernt die Toxizität, aber das Wasser behält seine zähflüssige Konsistenz.",
        "Die Eisenhutblumen, die innerhalb von 1,6 km des Drachenhorts wachsen, ergeben besonders wirksame Gifte.",
        "Wenn der Drache stirbt, verblassen diese Effekte im Laufe von 1W10 Tagen."
      ]
    },
    source: "Floral Dragons"
  },
  {
    name: "Heliconia-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Klein",
    gesinnung: "Normalerweise neutral gut",
    cr: 3,
    xp: 700,
    rk: 13,
    ruestungstyp: "natürliche Rüstung",
    tp: 45,
    tp_wuerfel: "10W6+10",
    bewegung: { "Gehen": "9 m", "Fliegen": "12 m" },
    attribute: { STR: 4, DEX: 15, CON: 12, INT: 9, WIS: 14, CHA: 17 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 4, "Auftreten": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert"],
    sinne: [],
    passiveWahrnehmung: 14,
    sprachen: ["Drakonisch"],
    umgebung: ["Dschungel", "Wald"],
    bild: "floral-dragons/heliconia-drache.png",
    beschreibung: [
      "Der Legende nach war Kaisoferth ein flugunfähiger Drache, der leidenschaftlich gerne sang. Als ihre Kolibri-Freunde zur Migration aufbrachen und Kaisoferth nicht mitfliegen konnte, verstummte ihre Stimme vor Trauer. Die magischen Heliconia-Blumen und die Kolibris beschlossen gemeinsam zu helfen und verwandelten sie in der Nacht in einen Heliconia-Drachen mit den ersehnten Flügeln. Seither tragen ihre Nachkommen die Gaben ihrer Freunde: Flügel und langen Schnabel von den Kolibris, prachtvollees Blättergefieder von den Heliconia-Blumen.",
      "Heliconia-Drachen sind vogelartige Drachen mit Klauen zum Festhalten an Ästen und einem scharfen, holzigen Schnabel. Sie werden 30 bis 60 cm lang und erreichen in der Wildnis ein Alter von etwa 50 Jahren. Ihr leuchtendes Gefieder aus breiten grünen Blättern wächst aus den Flügeln und am Schwanzansatz. Sie sind in roten, orangefarbenen und gelben Varianten zu finden; in der Paarungszeit färbt sich der Kopfkamm tief rosa oder lila. Dank eines spezialisierten Organs namens Syrinx können sie mit zwei Stimmen gleichzeitig singen – ihre Gesänge gelten als herzzerreißend schön.",
      "Heliconia-Drachen ernähren sich von Früchten, Samen und kleinen Wirbellosen und leben in lichten Dschungeln und dichten Wäldern. Bei Angriffen versuchen sie zunächst, Angreifer mit ihrem Gesang zu bezaubern, bevor sie zu Schnabel und Klauen greifen. Sie leben in enger Gemeinschaft mit Jaderanken-Drachen und sind eine der wenigen Arten, die sich mit den schwierigen Rittersporn-Drachen anfreunden – beide verbindet die Liebe zum Gesang."
    ],
    besonderheiten: [
      { name: "Vorbeiflug", beschreibung: "Der Drache provoziert keine Gelegenheitsangriffe, wenn er aus der Reichweite eines Feindes herausfliegt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt drei Angriffe durch: zwei mit seinem Schnabel und einen mit seinen Klauen." },
      { name: "Schnabel", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W8+2) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 9 (2W6+2) Hiebschaden." },
      { name: "Bezaubernder Gesang (2/Tag)", beschreibung: "Jede Kreatur innerhalb von 18 m des Drachen, die ihn hören kann, muss einen SG-13-Weisheitsrettungswurf ablegen oder 1 Minute lang vom Drachen bezaubert sein. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und beendet den Effekt bei einem Erfolg." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Hortensien-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Riesig",
    gesinnung: "Jede chaotische Gesinnung",
    cr: 7,
    xp: 2900,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 123,
    tp_wuerfel: "13W12+39",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m" },
    attribute: { STR: 17, DEX: 14, CON: 16, INT: 8, WIS: 16, CHA: 14 },
    rettungswuerfe: { STR: 6, GES: 5 },
    fertigkeiten: { "Motiv erkennen": 6, "Wahrnehmung": 6 },
    schadensresistenzen: ["Säure", "Wucht, Stich und Hieb von nichtmagischen Angriffen"],
    schadensimmunitaeten: [],
    verwundbarkeiten: ["Gift"],
    zustandsimmunitaeten: [],
    sinne: ["Erschütterungssinn 9 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Drakonisch"],
    umgebung: ["Wald", "Gewässer"],
    bild: "floral-dragons/hortensien-drache.png",
    beschreibung: [
      "Die Geschichte zweier rivalisierender Gärtner am Kaiserhof zeigt, wie sorgsam Hortensien-Drachen behandelt werden müssen. Als ein Hortensien-Drache am Palastkomplex erschien, versuchten beide Gärtner ihn auf ihre Seite zu locken. Doch als einer dem anderen heimlich Salz in den Boden grub, erkrankte der Drache und floh. Der Kaiser verbannte beide Gärtner – ihr Streit hatte das unschuldige Wesen geschädigt, und das Verschwinden eines Hortensien-Drachen gilt als schweres Omen.",
      "Hortensien-Drachen sind kräftig gebaute Reptilien, die etwa 6 m von der Schnauzenspitze bis zum Schwanzende messen. Sie tragen Blüten und Blätter auf Rücken, Brust und Oberschenkeln sowie zwei Blütentrauben auf den Wangen. Die Blütenfarbe – Rosa oder Blau – wird durch den Säuregehalt des Bodens bestimmt; nur die Wangenblüten können sie willentlich umfärben, als visuelle Kommunikationsform. Hortensien-Drachen gewinnen Energie durch Photosynthese und ergänzen ihre Ernährung mit Eiern anderer Drachen oder Aas.",
      "Hortensien-Drachen sind äußerst umweltsensibel und verlassen sofort Gebiete, die sie als verschmutzt wahrnehmen – ihr Vorkommen gilt als Zeichen für eine gesunde Umgebung. Landwirte und Gärtner versuchen, sie auf ihr Land zu locken, um die Bodenqualität abzuschätzen. Obwohl sie die meiste Zeit solitär leben, versammeln sie sich einmal pro Jahrhundert in großen Blütenverbänden zur Fortpflanzung. Ein solcher Ort gilt als für immer mit Glück und Wohlstand gesegnet."
    ],
    besonderheiten: [
      { name: "Ansturm", beschreibung: "Wenn der Drache mindestens 3 m geradlinig auf ein Ziel zuläuft und es im selben Zug mit einem Hornstoßangriff trifft, erleidet das Ziel 7 (2W6) zusätzlichen Stichschaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-14-Stärkerettungswurf bestehen oder bis zu 3 m weggestoßen und zu Boden geworfen werden." },
      { name: "Gewandtes Klettern", beschreibung: "Der Drache provoziert keine Gelegenheitsangriffe, wenn er sich mit seiner Klettergeschwindigkeit aus der Reichweite eines feindlichen Geschöpfes herausbewegt." },
      { name: "Umgebungssinne", beschreibung: "Der Drache hat Vorteil auf Wahrnehmungswürfe und kann die Anwesenheit und genaue Position von Schadstoffen, Giften und giftigen Kreaturen innerhalb von 1,6 km wahrnehmen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt zwei Angriffe durch: einen Hornstoß und einen mit seinem Schwanz." },
      { name: "Hornstoß", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 21 (4W8+3) Stichschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 22 (3W12+3) Wuchtschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Jaderanken-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Winzig",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 14,
    ruestungstyp: null,
    tp: 21,
    tp_wuerfel: "6W4+6",
    bewegung: { "Gehen": "4,5 m", "Klettern": "6 m", "Fliegen": "15 m" },
    attribute: { STR: 3, DEX: 19, CON: 13, INT: 3, WIS: 14, CHA: 12 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Höhle", "Dschungel", "Wald"],
    bild: "floral-dragons/jaderanken-drache.png",
    beschreibung: [
      "Der Jaderanken-Drache ist eine bedrohte Art. Humanoidische Aktivitäten wie Holzeinschlag, Bergbau und Landerschließung haben unzähligen Drachen das Leben gekostet. Während Druiden-Zirkel ihre natürlichen Lebensräume verteidigen, entstanden Gefangenschaftsprogramme zur Arterhaltung – die jedoch schnell von Reichen missbraucht wurden, die Jaderanken-Drachen als modisches Statussymbol halten. Heute gedeiht ein florierender Schwarzmarkt, und der Lebensraum der Drachen schwindet stetig.",
      "Jaderanken-Drachen sind 5 bis 25 cm lang und werden etwa 40 Jahre alt. Ihre Ohren enthalten komplexe Innenstrukturen für Echoortung, und ihre gespaltenen Zungen helfen beim Navigieren. Trotz ihrer Winzigkeit legen sie mit ihren fledermausartigen Flügeln weite Strecken zurück. Leuchtend türkisfarbene, gezackte Blüten wachsen entlang des Rückens und am kugelförmigen Schwanz. Wenn der Drache zwitschert oder schläft, leuchten seine Blütenblätter sanft; bei Gefahr kann er dieses sanfte Glühen zu einem blendenden Licht verstärken.",
      "Jaderanken-Drachen leben in stabilen Schwärmen in warmen, feuchten Höhlen und Wäldern. Sie pflegen enge Freundschaften mit Heliconia-Drachen: die Kleinen finden Schutz unter deren breiten Flügelblättern, während sie ihrerseits lästige Insekten vertilgen. Bei Angriffen bevorzugen sie die Flucht und setzen ihre Lumineszenz ein, um Verfolger zu blenden."
    ],
    besonderheiten: [
      { name: "Echoortung", beschreibung: "Der Drache kann seine Blindsicht nicht verwenden, während er taub ist." },
      { name: "Florale Erscheinung", beschreibung: "Wenn der Drache regungslos bleibt, ist er von gewöhnlichen Jaderanken-Pflanzen nicht zu unterscheiden. Er hat Vorteil auf Geschicklichkeit (Heimlichkeit)-Würfe, wenn er sich in einem von ähnlichen Pflanzen bedeckten Gebiet versteckt." },
      { name: "Gewandter Rückzug (Bonusaktion)", beschreibung: "Der Drache kann in jedem seiner Züge als Bonusaktion die Aktion Spurten, Ausweichen oder Verstecken einsetzen." },
      { name: "Scharfe Sinne", beschreibung: "Der Drache hat Vorteil auf Weisheit (Wahrnehmung)-Würfe, die auf Gehör beruhen." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W4+4) Stichschaden." },
      { name: "Lumineszenz (Aufladung 6)", beschreibung: "Der Drache emittiert ein helles Leuchten. Jede Kreatur innerhalb von 18 m, die den Drachen sehen kann, muss einen SG-13-Konstitutionsrettungswurf ablegen. Bei einem Fehlschlag erleidet eine Kreatur 2 (1W4) Strahlschaden und ist bis zum Beginn des nächsten Zuges des Drachen geblendet. Bei einem Erfolg erleidet sie die Hälfte des Schadens und ist nicht geblendet. Der Drache kann sich dann bis zur Hälfte seiner Bewegungsrate bewegen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Kirschblüten-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Riesig",
    gesinnung: "Neutral gut",
    cr: 16,
    xp: 15000,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 256,
    tp_wuerfel: "19W12+133",
    bewegung: { "Gehen": "12 m", "Fliegen": "18 m (Schweben)" },
    attribute: { STR: 22, DEX: 14, CON: 24, INT: 18, WIS: 17, CHA: 24 },
    rettungswuerfe: { GES: 7, KON: 12, WEI: 8, CHA: 12 },
    fertigkeiten: { "Geschichte": 14, "Motiv erkennen": 8, "Naturkunde": 9, "Wahrnehmung": 8, "Auftreten": 12, "Überzeugung": 12 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 18,
    sprachen: ["Gemein", "Drakonisch", "zwei weitere Sprachen nach Wahl", "Telepathie auf 36 m"],
    umgebung: ["Gebirge"],
    bild: "floral-dragons/kirschblueten-drache.png",
    beschreibung: [
      "Es war einmal ein einsames Mädchen namens Aoi, das gerne log und Geschichten ausschmückte. Ihre Unwahrheiten brachten die anderen Dorfkinder in Schwierigkeiten, und so vertraute ihr niemand mehr. Ohne Freunde fand Aoi Trost bei den Kirschbäumen im Dorfpark. Eines Nachts träumte sie von einem Drachen aus Kirschblüten, der hoch oben in einer Berghöhle lebte und durch die Wolken flog. Als sie erwachte, eilte sie ins Dorf, um von dem Drachen zu erzählen – doch niemand glaubte ihr.",
      "Jede Nacht wurden die Träume lebhafter, bis Aoi den Drachen schließlich nach sich rufen hörte. Sie brach am nächsten Morgen auf, erklomm den Berg und fand in der Höhle aus ihren Visionen den Kirschblüten-Drachen in tiefem Schlaf. Da sie ihn nicht wecken konnte, setzte sie sich neben ihn und flüsterte ihm Geschichten zu – diesmal ohne jede Übertreibung, ehrlich über ihr einfaches Leben. Die aufrichtigen Worte weckten den Drachen. Er dankte Aoi und bat sie, ihn ins Dorf zu bringen. Als die beiden ankamen, feierte das Dorf die Ankunft des Drachen mit einem Fest, und Aoi und der Drache blieben ein Leben lang Freunde.",
      "Kirschblüten-Drachen können bis zu 9 m Länge erreichen, manche sogar bis zu 12 m. Ihr Körper ist lang und schlank, mit Blüten, die wie eine Mähne auf Kopf und Rücken wachsen und in einem Schwanz aus nachziehenden Blütenblättern enden. Ohne Flügel verlassen sie sich auf Magie und den Wind, um durch die Luft zu gleiten. Sie leben etwa 180 Jahre, manche berichten von bis zu 200. Wie ihr Namensgeber durchlaufen ihre Blüten jährliche Zyklen und erblühen im Frühling in Rosa- oder Lilatönen, manchmal so blass, dass sie fast weiß wirken.",
      "Die meisten Kirschblüten-Drachen leben in Berghöhlen in der Nähe von Siedlungen, die sie aus der Ferne bewachen. Sie können die Träume von Humanoiden beeinflussen und diese so zu sich rufen. Für Humanoide gelten sie als Symbol für Wohlstand und Glück. Viele Dörfer feiern jährliche Frühlingsfeste zum Vollblühen des Drachen, bei denen es Tradition ist, ihn mit Bändern und Girlanden zu schmücken und ihm Früchte zu bringen."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn dem Drachen ein Rettungswurf misslingt, kann er sich entscheiden, ihn zu bestehen." },
      { name: "Zauberwirken", beschreibung: "Der Drache ist ein Zauberwirker der 9. Stufe. Seine Zauberfähigkeit ist Charisma (Zauberrettungswurf-SG 20). Er benötigt keine Materialkomponenten für seine Zauber. Der Drache kennt die folgenden Zauber: Zaubertricks (beliebig oft): Druidentrubel, Kleine Illusion, Allgemeine Tricks; 1. Stufe (4 Slots): Sprachen verstehen, Heiligtum, Schlaf; 2. Stufe (3 Slots): Kleine Wiederherstellung, Mondstrahl, Unsichtbares sehen; 3. Stufe (3 Slots): Gegenzauber, Magie aufheben, Zungen; 4. Stufe (3 Slots): Magisches Auge, Phantomkiller; 5. Stufe (1 Slot): Traum." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache setzt seine Einflussreiche Florale Präsenz ein. Dann wirkt er einen Zauber oder führt drei Angriffe durch: einen mit seinem Biss und zwei mit seinen Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Hiebschaden." },
      { name: "Einflussreiche Florale Präsenz", beschreibung: "Der Drache dringt in die Gedanken einer Gruppe von Kreaturen vor, um ihre tiefsten Ängste oder größten Wünsche zu erfahren, und erschafft dann Illusionen aus dem Erlernten. Jede Kreatur in einer 9-m-Kugelzone um einen Punkt innerhalb von 60 m des Drachen muss einen SG-20-Weisheitsrettungswurf ablegen. Bei einem Fehlschlag wird eine Kreatur entweder bezaubert oder verängstigt (der Drache entscheidet, welches für die gesamte Gruppe gilt). Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und beendet den Effekt bei einem Erfolg. Wenn der Rettungswurf einer Kreatur erfolgreich ist oder der Effekt für sie endet, ist das Ziel 24 Stunden lang immun gegen die Einflussreiche Florale Präsenz dieses Drachen." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Glücksfall (2/Tag)", beschreibung: "Wenn der Drache sieht, dass eine Kreatur innerhalb von 18 m von ihm einen Rettungswurf, Angriffswurf oder Fähigkeitswurf misslingt, kann er ihr einen Glücksmoment schenken. Das Ziel kann den W20 mit Vorteil neu würfeln und darf wählen, welches Ergebnis es verwendet." }
    ],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Korrumpierter Azalea-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 2,
    xp: 450,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 39,
    tp_wuerfel: "6W8+12",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 15, DEX: 15, CON: 14, INT: 3, WIS: 12, CHA: 4 },
    rettungswuerfe: { GES: 4, KON: 4, WEI: 3, CHA: -1 },
    fertigkeiten: { "Wahrnehmung": 5, "Heimlichkeit": 4 },
    schadensresistenzen: ["Nekrotisch"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: ["Kälte"],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Taub", "Erschöpfung", "Verängstigt", "Versteinert", "Vergiftet"],
    sinne: ["Blindsicht 18 m (blind darüber hinaus)"],
    passiveWahrnehmung: 15,
    sprachen: [],
    umgebung: ["Wald"],
    bild: "floral-dragons/korrumpierter_azalea-drache.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Myzellgesteuert", beschreibung: "Der korrumpierte Drache ist Teil des Pleurossa-Pilznetzwerks. Er nimmt alles wahr, was andere korrumpierte Floraldrachen und der Pilz-Drache jederzeit wahrnehmen, und führt die Wünsche des Pleurossa aus." },
      { name: "Ausgeprägte Sinne", beschreibung: "Der korrumpierte Drache hat Vorteil auf Weisheit-(Wahrnehmung)-Würfe, die auf Hören oder Geruch beruhen." },
      { name: "Magieresistenz", beschreibung: "Der korrumpierte Drache hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte." },
      { name: "Rudelstrategie", beschreibung: "Der korrumpierte Drache hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn mindestens einer seiner Verbündeten sich in 1,5 m von der Kreatur befindet und nicht kampfunfähig ist." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W10+2) Stichschaden. Das Ziel muss einen SG-12-Konstitutionsrettungswurf bestehen oder bis zum Ende seines nächsten Zuges vergiftet sein und eine Korruptionsstufe erlangen. Floraldrachen haben Nachteil auf diesen Rettungswurf." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Korrumpierter Glyzinien-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Riesig",
    gesinnung: "Jede nicht-gute Gesinnung",
    cr: 17,
    xp: 18000,
    rk: 19,
    ruestungstyp: "natürliche Rüstung",
    tp: 256,
    tp_wuerfel: "19W12+133",
    bewegung: { "Gehen": "12 m", "Graben": "9 m", "Fliegen": "12 m" },
    attribute: { STR: 24, DEX: 13, CON: 25, INT: 3, WIS: 12, CHA: 4 },
    rettungswuerfe: { GES: 7, KON: 13, WEI: 7, CHA: 3 },
    fertigkeiten: { "Arkana": 2, "Täuschen": 3, "Geschichte": 2, "Motiv erkennen": 7, "Wahrnehmung": 7 },
    schadensresistenzen: ["Nekrotisch"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Taub", "Erschöpfung", "Verängstigt", "Versteinert", "Vergiftet"],
    sinne: ["Blindsicht 18 m (blind darüber hinaus)"],
    passiveWahrnehmung: 17,
    sprachen: [],
    umgebung: ["Wald"],
    bild: "floral-dragons/korrumpierter_glyzinien-drache.png",
    beschreibung: [
      "Selbst der mächtige, feenhafte Glyzinien-Drache ist der Infektion schutzlos ausgeliefert. Im korrumpierten Zustand welken seine üppige Mähne und sein Schwanz dahin und geben das darunter liegende Skelett frei, während seine schillernden Flügel schlaff und zerschlissen werden."
    ],
    besonderheiten: [
      { name: "Feenabstammung", beschreibung: "Der Drache hat Vorteil auf Rettungswürfe gegen Bezaubert-Werden, und Magie kann ihn nicht einschläfern." },
      { name: "Myzellgesteuert", beschreibung: "Der korrumpierte Drache ist Teil des Pleurossa-Pilznetzwerks. Er nimmt alles wahr, was andere korrumpierte Floraldrachen und der Pilz-Drache jederzeit wahrnehmen, und führt die Wünsche des Pleurossa aus." },
      { name: "Magieresistenz", beschreibung: "Der Drache hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte." },
      { name: "Regeneration", beschreibung: "Der Drache regeneriert zu Beginn seines Zuges 10 Trefferpunkte. Hat der Drache Kälteschaden erlitten, funktioniert dieses Merkmal zu Beginn des nächsten Zuges nicht. Der Drache stirbt nur, wenn er zu Beginn seines Zuges 0 Trefferpunkte hat und sich nicht regeneriert." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache setzt seine Pilzpräsenz ein. Dann führt er drei Angriffe durch: einen mit seinem Biss und zwei mit seinem Stampfangriff." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 18 (2W10+7) Stichschaden. Das Ziel muss einen SG-21-Konstitutionsrettungswurf bestehen oder eine Korruptionsstufe erlangen. Floraldrachen haben Nachteil auf diesen Rettungswurf." },
      { name: "Stampfangriff", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 14 (2W6+7) Wuchtschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 16 (2W8+7) Wuchtschaden." },
      { name: "Greifende Ranken (Aufladung 5–6)", beschreibung: "Ranken umschlingen alle Kreaturen nach Wahl des Drachen innerhalb von 27 m von ihm. Jedes Ziel muss einen SG-21-Geschicklichkeitsrettungswurf bestehen und erleidet 18 (4W8) Stichschaden bei Misslingen oder die Hälfte bei Gelingen. Bei Misslingen ist das Ziel zudem gepackt und festgehalten (Flucht-SG 19). Während das Ziel festgehalten ist, erleidet es zu Beginn jedes seiner Züge 18 (4W8) Stichschaden." },
      { name: "Pilzpräsenz", beschreibung: "Der Drache haucht Sporen in einem 18 m langen Kegel. Jede Kreatur in diesem Bereich muss einen SG-19-Geschicklichkeitsrettungswurf bestehen. Bei Misslingen erleidet eine Kreatur 16 (3W10) Giftschaden und 16 (3W10) nekrotischen Schaden und erlangt eine Korruptionsstufe. Bei Gelingen erleidet sie nur den halben Schaden. Ein Ziel, das seinen Rettungswurf besteht, ist 24 Stunden lang gegen die Pilzpräsenz dieses Drachen immun." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Korrumpierter Löwenzahn-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Winzig",
    gesinnung: "Neutral böse",
    cr: 0.5,
    xp: 100,
    rk: 12,
    ruestungstyp: null,
    tp: 31,
    tp_wuerfel: "9W4+9",
    bewegung: { "Gehen": "4,5 m", "Fliegen": "4,5 m" },
    attribute: { STR: 3, DEX: 15, CON: 13, INT: 3, WIS: 12, CHA: 4 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 3, "Heimlichkeit": 4 },
    schadensresistenzen: ["Nekrotisch"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Taub", "Erschöpfung", "Verängstigt", "Versteinert", "Vergiftet"],
    sinne: ["Blindsicht 18 m (blind darüber hinaus)"],
    passiveWahrnehmung: 13,
    sprachen: [],
    umgebung: ["Wald"],
    bild: "floral-dragons/korrumpierter_loewenzahn-drache.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Myzellgesteuert", beschreibung: "Der korrumpierte Drache ist Teil des Pleurossa-Pilznetzwerks. Er nimmt alles wahr, was andere korrumpierte Floraldrachen und der Pilz-Drache jederzeit wahrnehmen, und führt die Wünsche des Pleurossa aus." },
      { name: "Magieresistenz", beschreibung: "Der korrumpierte Drache hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte." },
      { name: "Zeitsensitivität", beschreibung: "Der korrumpierte Drache hat Vorteil auf Initiativewürfe und kann zu Beginn jeder Runde seinen Initiativewurf neu würfeln. Wenn er neu würfelt, muss er das neue Ergebnis verwenden." },
      { name: "Zeitbeschleunigung (1/Tag)", beschreibung: "Der korrumpierte Drache führt in seinem Zug eine zusätzliche Aktion durch." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Stichschaden. Das Ziel muss einen SG-11-Konstitutionsrettungswurf bestehen oder eine Korruptionsstufe erlangen. Floraldrachen haben Nachteil auf diesen Rettungswurf." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Korrumpierter Rittersporn-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Groß",
    gesinnung: "Neutral böse",
    cr: 6,
    xp: 2300,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 90,
    tp_wuerfel: "12W10+24",
    bewegung: { "Gehen": "12 m", "Fliegen": "3 m" },
    attribute: { STR: 16, DEX: 17, CON: 15, INT: 3, WIS: 12, CHA: 4 },
    rettungswuerfe: { STR: 6, GES: 6 },
    fertigkeiten: { "Wahrnehmung": 4 },
    schadensresistenzen: ["Nekrotisch"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Taub", "Erschöpfung", "Verängstigt", "Versteinert", "Vergiftet"],
    sinne: ["Blindsicht 18 m (blind darüber hinaus)"],
    passiveWahrnehmung: 14,
    sprachen: [],
    umgebung: ["Wald"],
    bild: "floral-dragons/korrumpierter_rittersporn-drache.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Schnellfüßig", beschreibung: "Der korrumpierte Drache kann in jedem seiner Züge eine Bonusaktion verwenden, um die Lauf-Aktion durchzuführen." },
      { name: "Myzellgesteuert", beschreibung: "Der korrumpierte Drache ist Teil des Pleurossa-Pilznetzwerks. Er nimmt alles wahr, was andere korrumpierte Floraldrachen und der Pilz-Drache jederzeit wahrnehmen, und führt die Wünsche des Pleurossa aus." },
      { name: "Magieresistenz", beschreibung: "Der korrumpierte Drache hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte." },
      { name: "Giftige Blütenblätter", beschreibung: "Eine Kreatur, die den korrumpierten Drachen berührt oder ihn mit einem Nahkampfangriff trifft, während sie sich in 1,5 m von ihm befindet, erleidet 7 (2W6) Giftschaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der korrumpierte Drache führt zwei Angriffe durch: einen mit seinem Schnabel und einen mit seinen Klauen." },
      { name: "Schnabel", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 7 (1W8+3) Stichschaden plus 5 (1W10) Giftschaden. Das Ziel muss einen SG-11-Konstitutionsrettungswurf bestehen oder eine Korruptionsstufe erlangen. Floraldrachen haben Nachteil auf diesen Rettungswurf." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 10 (2W6+3) Hiebschaden. Das Ziel muss einen SG-13-Konstitutionsrettungswurf bestehen oder eine Korruptionsstufe erlangen. Floraldrachen haben Nachteil auf diesen Rettungswurf." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Lamium-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Gigantisch",
    gesinnung: "Jede Gesinnung",
    cr: 15,
    xp: 13000,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 264,
    tp_wuerfel: "16W20+96",
    bewegung: { "Gehen": "6 m", "Schwimmen": "18 m" },
    attribute: { STR: 28, DEX: 8, CON: 22, INT: 18, WIS: 23, CHA: 19 },
    rettungswuerfe: { GES: 4, KON: 11, INT: 9, WEI: 11 },
    fertigkeiten: { "Geschichte": 9, "Motiv erkennen": 11, "Wahrnehmung": 16 },
    schadensresistenzen: ["Wucht, Stich und Hieb"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Taub"],
    sinne: ["Blindsicht 36 m (dahinter blind)"],
    passiveWahrnehmung: 26,
    sprachen: ["Drakonisch und drei weitere Sprachen nach Wahl"],
    umgebung: ["Gewässer", "Stadt"],
    bild: "floral-dragons/lamium-drache.png",
    beschreibung: [
      "Legenden berichten von einem gütigen König, dessen heraldisches Emblem die Taubnessel war. Er zog zwei Nestlinge eines befreundeten Flussdrachens auf, der bei der Eiablage starb. Als Eindringlinge die Nestlinge ermordeten, opferte der König Arm, Bein und ein Auge, um sie durch mächtigen Zauber ins Leben zurückzurufen. Die Drachen wurden zu seinen loyalen Wächtern. Nach seinem Tod ließen sie seinen Körper auf den Seegrund sinken und schenkten ihm durch ihre Magie neues Leben – aus seinem Körper entstanden Dutzende kleiner Nestlinge mit Taubnesselblüten: die ersten Lamium-Drachen.",
      "Lamium-Drachen ähneln riesigen, blumenbedeckten Aalen. Ihre blinden Köpfe tragen zwei aufwärts gerichtete Nüstern und Reihen nadelspitzer Zähne. Spezialisierte, gabelförmige Organe am Kopf detektieren Schall und Druck – empfindlich genug, um Herzschläge zu erspüren – und verleihen dem Drachen psychische Fähigkeiten: Er kann die Emotionen nahestehender Kreaturen wahrnehmen und starke psychische Impulse aussenden. Ausgewachsene Exemplare erreichen bis zu 24 m Länge und können über 1.000 Jahre alt werden.",
      "Lamium-Drachen sind intelligent, neugierig und freundlich. Sie horten Wissen und Erfahrungen wie andere Drachen Gold und sind äußerst gesellig. Einmal pro Jahrzehnt verlässt ein Lamium-Drache seinen Hort, um andere seiner Art im Meer zu treffen – nur kurz, da Meersalz ihre Blüten schädigt. Viele wählen Gewässer in der Nähe humanoidischer Siedlungen und werden zu deren Hütern und Freunden."
    ],
    besonderheiten: [
      { name: "Atem anhalten", beschreibung: "Der Drache kann seinen Atem 1 Stunde lang anhalten." },
      { name: "Sonnenlicht-Abhängigkeit", beschreibung: "Der Drache erhält alle 5 Tage, an denen er nicht dem Sonnenlicht ausgesetzt ist, eine Stufe Erschöpfung. Eine auf diese Weise erhaltene Erschöpfungsstufe wird entfernt, wenn der Drache 5 Stunden lang direktem Sonnenlicht ausgesetzt ist." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Aquatische Florale Präsenz oder seinen Großen Herzblick einsetzen. Dann führt er zwei Angriffe durch: einen mit seinem Biss und einen mit seinem Schwanz." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 20 (2W10+9) Stichschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 22 (2W12+9) Wuchtschaden." },
      { name: "Aquatische Florale Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen innerhalb von 36 m wird vom Vergiftet-Zustand geheilt und erhält 11 (2W10) temporäre Trefferpunkte, die 1 Minute lang andauern. Solange diese temporären Trefferpunkte bestehen, kann das Ziel nicht vergiftet werden und kann Wasser atmen. Sobald der Effekt für es endet, ist die Kreatur 24 Stunden lang immun gegen die Aquatische Florale Präsenz des Drachen." },
      { name: "Großer Herzblick", beschreibung: "Der Drache fokussiert sich auf eine Kreatur im Bereich seiner Blindsicht und erlernt magisch deren aktuellen emotionalen Zustand. Wenn das Ziel einen SG-16-Charismarettungswurf misslingt, erlernt der Drache auch die Gesinnung der Kreatur. Himmlische, Unholds und Untote scheitern automatisch." },
      { name: "Emotionswelle (Aufladung 5–6)", beschreibung: "Der Drache wählt eine der folgenden Wellen. Negative Welle: Er entlädt einen Stoß gewaltsamer psychischer Energie in einem 18-m-Kegel. Jede Kreatur muss einen SG-19-Weisheitsrettungswurf ablegen und erleidet bei einem Fehlschlag 52 (15W6) psychischen Schaden (halber bei Erfolg). Eine Kreatur, die den Wurf um 5 oder mehr verfehlt, ist bis zum Ende ihres nächsten Zuges verängstigt. Positive Welle: Er entlädt einen Schwall beglückender psychischer Energie in einem 18-m-Kegel. Jede Kreatur muss einen SG-19-Weisheitsrettungswurf bestehen oder 10 Minuten lang handlungsunfähig sein. Dieser Effekt endet vorzeitig, wenn die Kreatur Schaden erleidet. Eine betroffene Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Löwenzahn-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Winzig",
    gesinnung: "Jede Gesinnung",
    cr: 0.25,
    xp: 50,
    rk: 12,
    ruestungstyp: null,
    tp: 31,
    tp_wuerfel: "9W4+9",
    bewegung: { "Gehen": "4,5 m", "Fliegen": "9 m" },
    attribute: { STR: 3, DEX: 15, CON: 13, INT: 6, WIS: 11, CHA: 12 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 2, "Heimlichkeit": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 12,
    sprachen: ["Versteht Gemein und Drakonisch, kann aber nicht sprechen"],
    umgebung: ["Grasland", "Wald", "Stadt"],
    bild: "floral-dragons/loewenzahn-drache.png",
    beschreibung: [
      "Einst waren Löwenzahn-Drachen Zeitmesser. Die unstete Zeitpassage der Feenwildnis verwirrte die junge Magierin Bremenia so sehr, dass sie ihre Frist zur Heimkehr verpasste. Auf der Suche nach einem Rückweg freundete sie sich mit einem winzigen Löwenzahn-Drachen an, dessen gelbe Blüte am Kopf zu fluffigen Samen heranreifte und nachgenauso wie ein Uhrwerk – sie nutzte ihn als verlässlichen Zeitmesser. Der Drache führte sie zu einem Tor und half ihr, im richtigen Moment hindurchzutreten. Bei ihrer Heimkehr begleitete er Bremenia und kehrte bald mit Dutzenden Artgenossen zurück.",
      "Löwenzahn-Drachen haben lange Hinterbeine, kurze Vorderbeine und Klauen an allen vier Gliedmaßen, mit denen sie senkrecht sitzen und kleine Gegenstände festhalten können. Die Antennen auf ihrem Kopf dienen zum Riechen und Schmecken; Fühler an ihrem Rücken helfen einzuschätzen, ob eine Oberfläche stabil genug zum Landen ist. Die meisten werden 10 bis 13 Jahre alt. Eine einzelne leuchtend gelbe Blüte auf dem Hinterkopf produziert fluffige weiße Samen, die sie auf den Wind entlassen.",
      "Löwenzahn-Drachen sind lebhaft und unbeständig. Sie leben in großen Schwärmen – sogenannten Blüten – und wechseln mühelos zwischen Ebenen hin und her. Unter allen Floraldrachen sind sie am ehesten in humanoidischen Siedlungen anzutreffen, wo sie für Händler und Gilden als Botschaftsüberbringer dienen. Im Kampf bevorzugen sie die Flucht, doch ihre Bisse hinterlassen einen juckenden Ausschlag."
    ],
    besonderheiten: [
      { name: "Temporale Sensibilität", beschreibung: "Der Drache hat Vorteil auf Initiativewürfe und kann zu Beginn jeder Runde seinen Initiativewurf neu würfeln. Wenn er neu würfelt, muss er das neue Ergebnis verwenden." },
      { name: "Zeitbeschleunigung (1/Tag)", beschreibung: "Der Drache führt in seinem Zug eine zusätzliche Aktion aus." },
      { name: "Zwischenebenensprung (Bonusaktion)", beschreibung: "Der Drache wechselt magisch von der Materiellen Ebene auf eine andere Existenzebene seiner Wahl, oder umgekehrt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt zwei Bissangriffe durch." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Stichschaden, und das Ziel leidet für die nächsten 1W4 Stunden unter einem juckenden Ausschlag. Solange das Ziel betroffen ist, hat es Nachteil auf Geschicklichkeitswürfe und -rettungswürfe. Ein erfolgreicher SG-11-Weisheitswurf mit einem Kräuterkit beendet den Effekt." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Magnolien-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Groß",
    gesinnung: "Typischerweise neutral gut",
    cr: 8,
    xp: 3900,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 135,
    tp_wuerfel: "18W10+36",
    bewegung: { "Gehen": "9 m", "Fliegen": "4,5 m" },
    attribute: { STR: 18, DEX: 8, CON: 15, INT: 9, WIS: 14, CHA: 13 },
    rettungswuerfe: { STR: 7, KON: 5 },
    fertigkeiten: { "Menschenkenntnis": 5, "Wahrnehmung": 5 },
    schadensresistenzen: ["Feuer", "Wucht", "Kälte", "Donner", "Wucht und Hieb von nichtmagischen Angriffen"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Versteht Gemein und Drakonisch, kann aber nicht sprechen"],
    umgebung: ["Sumpf", "Wald"],
    bild: "floral-dragons/magnolien-drache.png",
    beschreibung: [
      "Vor langer Zeit lebte der Ältere Drache Kuldrynnyth friedlich in einem abgelegenen Wald mit seiner Familie. Als ein neuer Clan von Drachen in ihren Wald kam, hieß Kuldrynnyth ihn willkommen und bot ihm Unterkunft und eine Mahlzeit an. Doch während des Mahls griff der Clan an, um den Wald für sich zu beanspruchen. Kuldrynnyth breitete tapfer seine Flügel wie einen gewaltigen Schild aus, damit die Familie fliehen konnte, und fiel dabei im Kampf. Im folgenden Frühling entstiegen die ersten Magnolien-Drachen der Erde, wo Kuldrynnyths Körper inmitten der zertretenen Magnolienblüten verwest war. Diese Drachen hatten dicke Blütenblätter und robuste, holzartige Körper und zeigten von Beginn an schützende Instinkte, weshalb Humanoide glaubten, dass Kuldrynnyths sanftmütiger Geist in ihnen fortlebt.",
      "Der Magnolien-Drache ist einer der langlebigsten und widerstandsfähigsten Floraldrachen. Er reift um sein 150. Lebensjahr heran und kann über 1.000 Jahre alt werden. Ausgewachsen werden Magnolien-Drachen bis zu 4 Meter lang und 2,5 Meter groß und wiegen etwa 180 Kilogramm. Ihre robusten Blütenblätter wachsen in Weiß-, Creme- und Rosatönen und bieten hervorragenden Schutz vor Feinden. Der keulenförmige Schwanz trägt Früchte, die abfallen und von anderen Pflanzenfressern gefressen werden. Obwohl die größten Blütenblätter am Rücken Flügel bilden, die kurze Flüge ermöglichen, bleiben Magnolien-Drachen lieber am Boden und setzen ihre Größe und ihr Gewicht notfalls ein, um Feinde aus der Luft zu rammen.",
      "Magnolien-Drachen gedeihen in schattigen Wäldern mit reichlich Laubstreu, können dank ihrer Widerstandsfähigkeit aber überall mit zuverlässig feuchtem Boden leben. Die Früchte ihres Schwanzes ziehen eine Vielzahl von Floraldrachen und Wildtieren an – häufig suchen die kleineren Amaranth-Drachen ihren Schutz, und selbst die sonst streitsüchtigen Rittersporn-Drachen wurden schon friedlich neben anderen Geschöpfen fressend beobachtet. Magnolien-Drachen gehen lebenslange Partnerschaften ein und legen im Laufe ihres Lebens nur ein bis zwei Eier. Sie sind zutiefst beschützend: Bei Bedrohung blähen sie ihre Blütenblätter auf und lassen sie flattern, um Verbündeten Zeit zur Flucht zu verschaffen. Obwohl sie keine Gesellschaft von Humanoiden suchen, betrachten sie diese auch nicht als Feinde – einige Druiden und Waldläufer haben sogar erfolgreich Freundschaft mit ihnen geschlossen, denn der Magnolien-Drache erinnert sich lang, wer ihm Gutes oder Böses getan hat."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache greift dreimal an: einmal mit dem Biss und zweimal mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (2W10+4) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Hiebschaden." },
      { name: "Schwanzhieb", beschreibung: "Der Drache versucht mit seinem Schwanz, eine Kreatur aus dem Gleichgewicht zu bringen, und wählt eine Große oder kleinere Kreatur in 3 m, die er sehen kann. Das Ziel muss einen SG-15-Stärkerettungswurf bestehen. Bei einem missglückten Rettungswurf erleidet es 13 (2W8+4) Wuchtschaden und wird zu Boden geworfen. Bei einem erfolgreichen Rettungswurf erleidet das Ziel nur den halben Schaden und wird nicht zu Boden geworfen." }
    ],
    bonusaktionen: [
      { name: "Ablenken (2/Tag)", beschreibung: "Der Drache bläst seine Blütenblätter auf und lässt sie flattern. Jedes feindliche Geschöpf nach Wahl des Drachen in 9 m, das ihn sehen kann, muss einen SG-15-Weisheitsrettungswurf bestehen oder hat bis zum Beginn des nächsten Zuges des Drachen Nachteil auf alle Angriffswürfe gegen den Drachen und seine Verbündeten." }
    ],
    reaktionen: [
      { name: "Blütenblatt-Wächter (3/Tag)", beschreibung: "Wenn ein Angriffswurf gegen eine Kreatur in 3 m des Drachen gemacht wird, kann der Drache seine Flügel als Schutzschild ausbreiten und der Kreatur bis zum Beginn seines nächsten Zuges einen Bonus von +5 auf ihren Rüstungsklassewert gewähren." }
    ],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Manchinil-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Gigantisch",
    gesinnung: "Chaotisch böse",
    cr: 25,
    xp: 75000,
    rk: 20,
    ruestungstyp: "natürliche Rüstung",
    tp: 351,
    tp_wuerfel: "18W20+162",
    bewegung: { "Gehen": "12 m", "Graben": "12 m", "Klettern": "12 m" },
    attribute: { STR: 30, DEX: 10, CON: 29, INT: 18, WIS: 16, CHA: 23 },
    rettungswuerfe: { GES: 7, KON: 16, WEI: 10, CHA: 13 },
    fertigkeiten: { "Einschüchtern": 13, "Wahrnehmung": 17 },
    schadensresistenzen: ["Feuer", "Nekrotisch"],
    schadensimmunitaeten: ["Säure", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 27,
    sprachen: ["Gemein", "Drakonisch"],
    umgebung: ["Wald", "Unterirdisch"],
    bild: "floral-dragons/manchinil-drache.png",
    beschreibung: [
      "Als die Welt jung war, rollte eines der beiden Eier einer Hügeldrachen in eine verlassene Senke, wo niemand es fand. Vergraben unter der Erde, schlüpfte das Nestling allein und kämpfte sich an die Oberfläche. Es war vollkommen auf sich gestellt und wurde zum ersten Manchinil-Drachen – einem Wesen, das nie Liebe kannte. Aus der Bitterkeit seines einsamen Herzens entwickelte es giftigen Saft und lachte, als seine einstigen Peiniger an seiner Säure zugrunde gingen. Als es seinen Geschwister-Drachen, den Apfelbaum-Drachen, mit seiner Gemeinschaft sah, verwandelte sich sein Schmerz in rasende Wut.",
      "Manchinil-Drachen sind eine seltene Art, über die wenig gesicherte Informationen vorliegen. Die wenigen dokumentierten Sichtungen beschreiben sie als 9 bis 12 m groß, mit erdfarb igem Körper, zotteligen Wurzeln auf der Brust und weißen, verdrehten Astgebilden aus dem Kopf. Die Früchte des Manchinil-Drachen ähneln gefährlich denen des Apfelbaum-Drachen – daher ihr Beiname 'Apfel des Todes'. Der milchig-weiße, ölige Saft des Drachen verursacht selbst in kleinsten Mengen schreckliche Säureverbrennungen und verseucht ganze Wälder.",
      "Manchinil-Drachen sind bitter und zurückgezogen. Neue Exemplare entstehen, wenn ein Fragment des Horns eines Erwachsenen in blutgetränkten Boden fällt und dort zu einem Nestling heranreift. Instinktiv sind sie darauf ausgerichtet, glückliche Gemeinschaften und liebevolle Bindungen zu zerstören. Ein ausgewachsener Manchinil-Drache lernt, seinen Hass taktisch einzusetzen – und ist bereit, mit rachsüchtigen Humanoiden Pakte einzugehen, solange diese helfen, Apfelbaum-Drachen zu schaden."
    ],
    besonderheiten: [
      { name: "Gefährliche Chemikalien", beschreibung: "Wenn der Drache Feuerschaden erleidet, entzünden die Flammen die Giftstoffe auf seinen Schuppen und erzeugen eine 12-m-Kugelzone aus giftigem Rauch, die bis zum Ende des nächsten Zuges des Drachen andauert. Jede Kreatur in diesem Bereich muss einen SG-25-Konstitutionsrettungswurf ablegen. Bei einem Fehlschlag ist die Kreatur 1 Minute lang vergiftet und geblendet. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und beendet den Effekt bei einem Erfolg." },
      { name: "Giftiger Saft", beschreibung: "Eine Kreatur, die den Drachen berührt oder ihn mit einem Nahkampfangriff aus höchstens 1,5 m Entfernung trifft, erleidet 10 (3W6) Säureschaden." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn dem Drachen ein Rettungswurf misslingt, kann er sich entscheiden, ihn zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache setzt seine Rachsüchtige Florale Präsenz ein. Dann führt er drei Angriffe durch: einen mit seinem Biss und zwei mit seinen Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +18 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 32 (4W10+10) Stichschaden plus 14 (4W6) Säureschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +18 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 24 (4W6+10) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +18 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 28 (4W8+10) Wuchtschaden." },
      { name: "Rachsüchtige Florale Präsenz", beschreibung: "Der Drache verfällt in eine Kampfraserei, angetrieben von seinem uralten Zorn. Jede Kreatur nach Wahl des Drachen innerhalb von 36 m muss einen SG-21-Weisheitsrettungswurf ablegen. Bei einem Fehlschlag ist eine Kreatur anfällig für allen Schaden durch die Angriffe des Drachen und führt Nahkampfangriffe gegen den Drachen mit Vorteil durch. Diese Effekte dauern 1 Minute lang an. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und beendet die Effekte bei einem Erfolg. Wenn der Rettungswurf einer Kreatur erfolgreich ist oder der Effekt für sie endet, ist die Kreatur 24 Stunden lang immun gegen die Rachsüchtige Florale Präsenz dieses Drachen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Hörner verhaken", beschreibung: "Der Drache wählt eine Kreatur innerhalb von 4,5 m, die er sehen kann. Das Ziel muss einen Stärke (Athletik)-Wurf im Wettstreit gegen den Stärke (Athletik)-Wurf des Drachen ablegen. Gewinnt der Drache, wird das Ziel bis zu 4,5 m weggestoßen. Gewinnt der Drache mit einem Vorsprung von 10 oder mehr, fliegt die Kreatur durch die Luft und landet liegend. Gewinnt das Ziel, kann es den Drachen bis zu 4,5 m wegstoßen." },
      { name: "Schwanz", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Randale (kostet 2 Aktionen)", beschreibung: "Der Drache bewegt sich bis zu seiner Bewegungsrate in gerader Linie, ohne Gelegenheitsangriffe zu provozieren. Jede Kreatur in seinem Weg muss einen SG-26-Geschicklichkeitsrettungswurf bestehen oder 19 (3W12) Wuchtschaden erleiden und bis zum Beginn des nächsten Zuges des Drachen betäubt sein." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative 20 (bei Gleichstand verlierend) führt der Drache eine Hortaktion aus, um einen der folgenden Effekte zu verursachen. Der Drache kann nicht denselben Effekt zwei Runden in Folge einsetzen:",
      aktionen: [
        "Der Drache gräbt sich bis zu seiner Bewegungsrate in die Erde. Alle Kreaturen in seinem Weg oder an der Oberfläche über seinem Weg müssen einen SG-26-Geschicklichkeitsrettungswurf bestehen oder zu Boden fallen.",
        "Manchinil-Pflanzen im Hort triefen von giftigem Saft. Jede Kreatur im Hort muss einen SG-25-Geschicklichkeitsrettungswurf ablegen oder 21 (6W6) Säureschaden erleiden; bei einem Erfolg erleidet sie die Hälfte.",
        "Bodenflächen innerhalb von 27 m des Drachen werden instabil und brechen ein. Kreaturen in einem 6-m-Quadrat nach Wahl des Drachen müssen einen SG-25-Geschicklichkeitsrettungswurf bestehen oder in ein 6 m tiefes Loch fallen und 7 (2W6) Wuchtschaden erleiden."
      ]
    },
    regionale_effekte: {
      beschreibung: "Das Gebiet um den Hort eines Manchinil-Drachen wird von der Magie des Drachen entstellt, was einen oder mehrere der folgenden Effekte erzeugt:",
      effekte: [
        "Wenn es regnet, erlebt das Gebiet innerhalb von 1,6 km des Horts sauren Regen.",
        "Der Boden innerhalb von 1,6 km des Horts ist von großen, tiefen Grabungslöchern des Drachen durchzogen.",
        "Obst und Gemüse, das innerhalb von 32 km des Horts angebaut wird, hat einen säuerlichen Nachgeschmack, ist jedoch nicht giftig.",
        "Wenn der Drache stirbt, verblassen diese Effekte im Laufe von 1W10 Tagen."
      ]
    },
    source: "Floral Dragons"
  },
  {
    name: "Ornithogalum-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Riesig",
    gesinnung: "Typischerweise chaotisch neutral",
    cr: 17,
    xp: 18000,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 225,
    tp_wuerfel: "18W12+108",
    bewegung: { "Gehen": "9 m", "Fliegen": "36 m" },
    attribute: { STR: 23, DEX: 13, CON: 22, INT: 6, WIS: 10, CHA: 12 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Grasland"],
    bild: "floral-dragons/ornithogalum-drache.png",
    beschreibung: [
      "Als die Welt noch jung war, lebte ein Schwarm magischer Vögel, die ein Lied von solch herzzerreißender Schönheit sangen, dass nur Kinder es hören konnten, ohne zu weinen. Tagsüber nahmen sie die Form weißer Vögel an, und jede Nacht flogen sie in den Himmel und wurden zu Sternen. Als ein Mädchen, das die Sternvögel abgöttisch liebte, jede Nacht weinte, wenn die Vögel in den Himmel zurückkehrten, stellten ihre Eltern eine Falle. Viele Sternvögel wurden in einem klebrigen Netz über den Feldern gefangen und starben. Im folgenden Frühling entstiegen die ersten Ornithogalum-Drachen der Wiese, auf der die Sternvögel begraben worden waren, und brachten der Familie Verderben – sie fraßen ihre Ernte und machten ihr Vieh krank – bevor sie davonflogen. Die überlebenden Sternvögel kehrten nie zurück.",
      "Ornithogalum-Drachen stehen als Nestlinge bereits etwa 3,5 Meter groß und erreichen ihre Erwachsenengröße von 6 bis 9 Metern und einem Gewicht von etwa 6.800 Kilogramm innerhalb eines Jahres nach dem Schlüpfen. Das Alter lässt sich an der Zahl der weißen Blüten um Hals und Beine schätzen – nach einigen hundert Jahren trägt ein Ornithogalum-Drache einen prächtigen Blütenstrauß. Ihr Körper ist kräftig und muskulös, die schlanken Schwänze enden in einem schweren, keulenartigen Blütencluster. Das Maul wirkt furchterregend, doch die äußeren Blütenblätter sind weich; im Inneren haben sie flache Zähne nur zum Kauen von Pflanzenkost. Ihre Flügel sind die stärksten aller Floraldrachen – sie können tagelang fliegen, bevor sie rasten müssen, was Experten auf magische Unterstützung schließen lässt.",
      "Viehweiden und fruchtbares Ackerland sind ideale Lebensräume für Ornithogalum-Drachen. Aufgrund ihrer toxischen Aura vertragen kaum andere Arten ihre Nähe – einzig Vögel und drakonische Bestäuber namens Vespons sind immun. Ornithogalum-Drachen sind strenge Pflanzenfresser, die Nutzpflanzen wie Gerste, Reis, Weizen und Heu bevorzugen, was sie häufig in Konflikt mit Bauern bringt. Sie sind Einzelgänger und paaren sich selten; in der Regel legen sie nur ein einziges zwiebelförmiges Ei, das tief im Boden vergraben wird und so groß ist wie ein erwachsener Mensch. Im Frühling gräbt sich der Nestling selbstständig an die Oberfläche. Obwohl die Drachen keine bösen Absichten hegen, können ihre Aura und ihre Fresslust tödliche Folgen für umliegendes Vieh haben – und für Menschen, die sie zu vertreiben versuchen."
    ],
    besonderheiten: [
      { name: "Luftgewandtheit", beschreibung: "Während der Drache fliegt, legt er Stärke- und Geschicklichkeitsrettungswürfe mit Vorteil ab." },
      { name: "Magieresistenz", beschreibung: "Der Drache hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte." },
      { name: "Toxische Aura", beschreibung: "Jede Kreatur, die ihren Zug innerhalb von 6 m des Drachen beginnt, muss einen SG-19-Konstitutionsrettungswurf bestehen oder ist für 1 Minute vergiftet. Eine betroffene Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und beendet den Effekt bei einem Erfolg." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache setzt seine Toxische Florale Präsenz ein. Dann führt er vier Angriffe durch: zwei mit seinen Klauen und zwei mit seinem Schwanz. Er kann zwei Klauengriffe durch einen Stampfer ersetzen." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Wuchtschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 15 (2W8+6) Wuchtschaden." },
      { name: "Stampfer", beschreibung: "Der Drache schlägt seine Vorderpfoten in den Boden. Der Boden in einem Kreis mit einem Radius von 4,5 m um den Drachen wird schwieriges Gelände, und jede Kreatur in diesem Bereich muss einen SG-19-Geschicklichkeitsrettungswurf bestehen oder zu Boden fallen." },
      { name: "Toxische Florale Präsenz (Aufladung 5–6)", beschreibung: "Jede Kreatur in 36 m des Drachen muss einen SG-19-Konstitutionsrettungswurf bestehen oder erleidet eine Erschöpfungsstufe. Wenn der Rettungswurf einer Kreatur erfolgreich ist oder der Effekt für sie endet, ist die Kreatur 24 Stunden lang immun gegen die Toxische Florale Präsenz dieses Drachen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Pfingstrosen-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Groß",
    gesinnung: "Jede Gesinnung",
    cr: 6,
    xp: 2300,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 135,
    tp_wuerfel: "18W10+36",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 17, DEX: 15, CON: 14, INT: 6, WIS: 13, CHA: 8 },
    rettungswuerfe: { STR: 6, KON: 5 },
    fertigkeiten: { "Wahrnehmung": 7, "Heimlichkeit": 8 },
    schadensresistenzen: ["Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: [],
    passiveWahrnehmung: 17,
    sprachen: ["Versteht Drakonisch, kann aber nicht sprechen"],
    umgebung: ["Grasland", "Wald"],
    bild: "floral-dragons/pfingstrosen-drache.png",
    beschreibung: [
      "Einst war die Pfingstrose die Lieblingsblume einer kaiserlichen Dynastie. Die Herrscherfamilie glaubte, dass das Reich so lange in Schönheit und göttlicher Gnade erblühe, wie die Pfingstrose in ihrem Königreich blühe, und feierte jährlich eine Blütenschau. Diese Tradition endete, als eine ehrgeizige junge Kaiserin den Thron bestieg: Sie beorderte in der Kälte des Winteranfangs hundert Blumenarten, vor ihr aufzublühen. Alle Blumen gehorchten zitternd – nur die Pfingstrose weigerte sich. Als die Kaiserin befahl, die widerspenstigen Blüten zu verbrennen, segneten die Götter die Pfingstrosenblüten und verwandelten sie in mächtige Pfingstrosen-Drachen: mit scharfen Zähnen, kräftigen stielartigen Stacheln und beeindruckender Größe. Seither streifen diese Drachen das Land und tragen den unabhängigen Geist ihrer Blumenvorfahren in sich.",
      "Pfingstrosen-Drachen sind gedrungene Geschöpfe, die bis zu 4,5 Meter lang werden und bis zu 200 Kilogramm wiegen. Runde, flauschige Blütenblätter schützen ihren Kopf und erstrahlen in lebhaften Tönen von Rosa, Rot, Orange und Gelb; im Schlaf schließen die Drachen die Blütenblätter über dem Gesicht. Im Laufe ihres hundertjährigen Lebens häuten sie sich durchschnittlich viermal – in dieser Zeit sind sie für ein bis zwei Wochen schutzlos. Junge Pfingstrosen-Drachen schlüpfen mit weißen Blütenblättern, die sich mit etwa 15 Jahren in ihre endgültige Farbe wandeln. Als Raubtiere nutzen sie ihren massigen Schwanz, um Beute mühelos zu Boden zu schlagen. Sie leben in Gruppen namens Blütegruppen in selbst gegrabenen Erdkratern, umgeben von hohen Pfingstrosenblüten, die ihnen Tarnung beim Anschleichen bieten.",
      "Pfingstrosen-Drachen ziehen ihre Jungen kollektiv auf und bringen ihnen das Jagen bei, sobald diese laufen können. Als Hinterhaltjäger lauern sie nahezu unsichtbar in den dichten Blüten, werfen ihre Beute zu Boden und setzen dann mit Klauen und Zähnen den Todesstoß. Ihre natürlichen Feinde sind die Rittersporn-Drachen, die um dasselbe Terrain konkurrieren; als eines der wenigen Geschöpfe, das dem Gift des Rittersporns widersteht, ist der Pfingstrosen-Drache ihm ebenbürtig. Gegenüber Humanoiden sind sie territorial, können sich aber zu geduldeten Nachbarn entwickeln, wenn Menschen die Umgebung mit Respekt behandeln und bei wiederholten Besuchen beweisen, dass sie keine Bedrohung sind – der Pfingstrosen-Drache erinnert sich."
    ],
    besonderheiten: [
      { name: "Hinterhältig", beschreibung: "In der ersten Runde eines Kampfes hat der Drache Vorteil auf Angriffswürfe gegen jede Kreatur, die er überrascht hat." },
      { name: "Überraschungsangriff", beschreibung: "Wenn der Drache eine Kreatur überrascht und sie in der ersten Kampfrunde mit einem Angriff trifft, erleidet das Ziel durch den Angriff 10 (3W6) zusätzlichen Schaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache setzt seine Brüllende Florale Präsenz ein. Dann führt er drei Angriffe durch: einen mit seinem Biss und zwei mit seinen Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 14 (2W10+3) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W6+3) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 12 (2W8+3) Wuchtschaden. Das Ziel muss einen SG-14-Stärkerettungswurf bestehen oder zu Boden fallen. Liegt das Ziel am Boden, kann der Drache als Bonusaktion einen Bissangriff gegen es durchführen." },
      { name: "Brüllende Florale Präsenz", beschreibung: "Der Drache lässt ein gewaltiges Brüllen los. Jede Kreatur in 18 m, die ihn hören kann, muss einen SG-14-Konstitutionsrettungswurf bestehen. Bei einem Fehlschlag erleidet eine Kreatur 7 (2W6) Donnerschaden und ist für 1 Minute taub. Bei einem Erfolg erleidet die Kreatur nur den halben Schaden und ist nicht taub. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und beendet den Effekt bei einem Erfolg. Wenn der Rettungswurf einer Kreatur erfolgreich ist oder der Effekt für sie endet, ist die Kreatur 24 Stunden lang immun gegen die Florale Präsenz des Drachen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Erspähen", beschreibung: "Der Drache führt einen Weisheit (Wahrnehmung)-Wurf durch." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." }
    ],
    hortaktionen: {
      beschreibung: "Während der Drache in seinem Hort kämpft, kann er ab Initiative 20 (bei Gleichstand verliert er) eine der folgenden Hortaktionen einsetzen; derselbe Effekt darf nicht in zwei aufeinanderfolgenden Runden gewählt werden.",
      aktionen: [
        "Hohe Pfingstrosenblüten wachsen schnell und verbergen den Drachen vor Sicht. Um seinen Standort zu ermitteln, muss eine Kreatur ihre Aktion aufwenden und einen SG-16-Weisheit-(Wahrnehmung)-Wurf bestehen. Solange der Drache so verborgen ist, hat er halbe Deckung. Diese Effekte halten an, bis der Drache angreift oder eine andere Hortaktion einsetzt.",
        "Der Drache wirbelt eine Staubwolke aus seinem Bau auf. Eine Kreatur seiner Wahl in 1,5 m muss einen SG-13-Geschicklichkeitsrettungswurf bestehen oder ist bis zum Beginn des nächsten Zuges des Drachen geblendet.",
        "Pfingstrosenblüten winden und wälzen sich auf dem Boden und bringen die Feinde des Drachen zu Fall. Jede Kreatur in einer 9 m langen und 1,5 m breiten Linie, die vom Drachen ausgeht, muss einen SG-14-Stärkerettungswurf bestehen oder zu Boden fallen."
      ]
    },
    regionale_effekte: {
      beschreibung: "Das Gebiet in der Nähe des Horts eines Pfingstrosen-Drachen wird von seiner Anwesenheit beeinflusst.",
      effekte: [
        "Unnatürlich hohe Pfingstrosenblüten wachsen bis zu 3 m hoch in einem Radius von 9 m um den Hort und breiten sich langsam aus, um das umliegende Grasland zu übernehmen. Bereiche, in denen diese Blüten wachsen, sind schwieriges Gelände.",
        "Die Vespon-Population in der Gegend ist weit höher als normal. Andere Bestäuber fehlen merklich.",
        "Wenn alle Drachen, die den Hort teilen, sterben oder ihn verlassen, verblassen diese Effekte im Laufe von 2W6 Monaten."
      ]
    },
    source: "Floral Dragons"
  },
  {
    name: "Pilz-Drache",
    art: "Monstrosität",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Gesinnungslos",
    cr: 21,
    xp: 33000,
    rk: 19,
    ruestungstyp: "natürliche Rüstung",
    tp: 350,
    tp_wuerfel: "20W20+140",
    bewegung: { "Gehen": "18 m", "Graben": "18 m", "Fliegen": "6 m" },
    attribute: { STR: 27, DEX: 14, CON: 25, INT: 3, WIS: 12, CHA: 4 },
    rettungswuerfe: { GES: 9, KON: 14, INT: 3, CHA: 4 },
    fertigkeiten: { "Wahrnehmung": 8 },
    schadensresistenzen: ["Nekrotisch", "Schaden durch Zauber", "Wucht, Stich und Hieb von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Taub", "Erschöpfung", "Verängstigt", "Versteinert", "Vergiftet"],
    sinne: ["Blindsicht 9 m (blind darüber hinaus)"],
    passiveWahrnehmung: 18,
    sprachen: [],
    umgebung: ["Wald"],
    bild: "floral-dragons/pilz-drache.png",
    beschreibung: [
      "Als Izora und ihre Gruppe nach Peskarii zurückkehrten, wurde ihre Freude, ihre Erkenntnisse zu teilen, durch den Anblick vor ihnen zunichte gemacht. Die Knochen ihrer Freunde und Familie lagen in Glyzinienblüten verwoben in den Ruinen ihres Dorfes. Voller Trauer und einem vergifteten Hass auf den Drachen, der ihr Heim zerstört hatte, schwor Izora Rache. Ihre Freunde warnten sie, dass der Drache zu gefährlich sei, und flehten sie an, bei ihnen zu bleiben – doch Izora weigerte sich zu hören. Sie verließ die Gruppe und machte sich allein auf den Weg, einen Weg zu finden, den Glyzinien-Drachen zu töten.",
      "Izoras lange Einsamkeit und viele feindliche Begegnungen mit anderen Floraldrachen wandelten ihre Wut in schwelende Bitterkeit um, während sie nach deren Schwachstellen suchte. Sie kam zu dem Glauben, dass alle Floraldrachen vernichtet werden müssten – nicht nur der Glyzinien-Drache.",
      "Eines Tages stieß Izora auf einen sterbenden Löwenzahn-Drachen, aus dessen Kopf Pilze wuchsen. Izora erkannte den Pilz als Pleurossa, einen lokalen Pilz, der Floraldrachen-Körper nach dem Tod zersetzt – doch noch nie hatte sie ihn an einem lebenden Drachen gesehen. Noch immer auf die Tötung des Glyzinien-Drachen fixiert, fragte sie sich, ob das Pleurossa als Waffe gegen die Floraldrachen eingesetzt werden könnte.",
      "Die Zauberin begann in einem abgelegenen Lager tief im Wald mit dem Pleurossa zu experimentieren und korrumpierte den harmlosen Pilz mit Magie. Izora testete ihre Schöpfung an einem Clematis-Drachen. Als das Pleurossa den Drachen verzehrte, schlug das Opfer um sich und schnitt Izora mit seinen rasiermesserscharfen Blütenblättern. Fasziniert von der Verwandlung des Drachen in einen willenlosen Wirt, schenkte Izora ihren eigenen Wunden keine Beachtung. Pleurossa-Sporen drangen durch die Wunden in ihren Händen in ihren Blutkreislauf ein und begannen, sie zu korrumpieren.",
      "In den folgenden Wochen setzte Izora ihre Experimente fort, während sie immer schwächer wurde und das Pleurossa in ihrem Körper voranschritt. Schließlich war sie so krank, dass sie nur noch auf ihrem Feldbett liegen konnte, die Welt verfluchend, dass sie ihre Rache nicht würde vollenden können. Als sie sterbend dalag, wurden Izoras Gedanken von Hass auf Floraldrachen beherrscht. Doch das Pleurossa tötete sie nicht nur – es absorbierte sie. Als Izoras Bewusstsein mit dem Pleurossa verschmolz, wurde ihr ein riesiges, miteinander verbundenes Myzelnetz bewusst, das knapp unter dem Waldboden wuchs.",
      "Izoras Hass und Angst vor den Floraldrachen waren so stark, dass das Pleurossa, als es sie verzehrte, grundlegend verändert wurde. Es entwickelte ein rudimentäres Bewusstsein, das darauf fixiert war, Izoras Ziel zu vollenden und allen Floraldrachen ein Ende zu bereiten. Gestärkt durch Izoras arkane Macht wuchs das Pleurossa zu einem großen Fruchtkörper heran – dem furchteinflößenden Pilz-Drachen. Dieses Monster sollte die Waffe des Pleurossa sein, um Izoras unsterblichen Wunsch zu erfüllen, alle Floraldrachen auszurotten.",
      "In den folgenden Monaten etablierte sich Izoras korrumpiertes Pleurossa im Wald und verdrängte die anderen Pilze. Die in der Nähe lebenden Floraldrachen fielen bald seiner Korruption zum Opfer – darunter auch der stolze Glyzinien-Drache, der Izoras Dorf zerstört hatte. Der Fortschritt des Pleurossa ist langsam, aber verheerend, während der Pilz-Drache massive Zerstörung anrichtet und Pleurossa-Sporen verbreitet, die alle Lebewesen korrumpieren können. Alle Floraldrachen, die ihm begegnet sind, wissen: Hüte dich vor dem Pilz, der sich bewegt.",
      "Es gibt nur ein korrumpiertes Pleurossa – ein riesiges unterirdisches Myzelnetz, das sich über Meilen erstreckt. Sein Geflecht aus Myzelfäden ermöglicht dem Pilz, die Position von Kreaturen in seinem Wald zu erspüren. Neuere Beobachtungen deuten darauf hin, dass das Pleurossa sich noch ausdehnt und möglicherweise sogar einen weiteren Fruchtkörper wie den Pilz-Drachen heranzieht. Aus dem Pleurossa sprießend wie Pilze aus ihrem Myzel, ist der Pilz-Drache ein achtbeiniges Monster mit riesigen pilzartigen Wucherungen anstelle von Flügeln und einem adrigen Loch als Maul. Vier scharfe Zähne säumen den Oberrand seines Rachens, zwei weitere ragen aus seinem Unterkiefer hervor.",
      "Das Pleurossa erstreckt sich durch den Wald, in dem es von Izora korrumpiert wurde. Obwohl der Pilz-Drache über diesen Bereich hinaus reisen kann, ist er am stärksten in der Nähe des Myzelnetzes, das ihm ermöglicht, seine Umgebung weit über seine eigene bescheidene Wahrnehmung hinaus zu erspüren. Innerhalb des Waldes sind die Sporen des Pleurossa-Netzwerks und des Drachen eine allgegenwärtige Bedrohung, die der Region einen charakteristischen modrigen Geruch verleihen.",
      "Der Pilz-Drache und das Pleurossa besitzen keine Fähigkeit zu intelligentem Denken – nur einen instinktiven Drang, Floraldrachen zu vernichten. Das Pleurossa kann zwar jede Kreatur in das Myzelnetz absorbieren, doch seine natürliche Rolle als Zersetzer von Floraldrachen-Kadavern, kombiniert mit Izoras Hass, bewirkt, dass es Floraldrachen auf einzigartige Weise korrumpiert: Ihre Blütenblätter welken und sterben, ihre Formen verzerren sich und ihre Gedanken verfaulen. Ein Floraldrache, der diese Veränderungen durchmacht, wird schließlich zu einem korrumpierten Floraldrachen. Wo der Pilz-Drache gesichtet wird, ist der Rest des Pleurossa nie weit hinter ihm."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er wählen, stattdessen zu bestehen." },
      { name: "Magieresistenz", beschreibung: "Der Drache hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte." },
      { name: "Magische Waffen", beschreibung: "Die Waffenangriffe des Drachen gelten als magisch." },
      { name: "Myzelsicht", beschreibung: "Solange der Drache sich innerhalb von 30 m des Pleurossa-Netzwerks befindet, erstreckt sich seine Blindsicht so weit, wie das Netzwerk reicht, und er ist immun gegen den Zustand ‚Geblendet'." },
      { name: "Giftsporenpilze", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 6 m des Drachen beginnt, muss einen SG-22-Konstitutionsrettungswurf bestehen oder eine Korruptionsstufe erlangen. Kreaturen, die nicht atmen müssen, sind gegen diesen Effekt immun." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache setzt seine Überwältigenden Sporen ein. Dann führt er drei Angriffe durch: einen mit seinem Biss, einen mit seinen Korrumpierenden Klauen und einen mit seinem Schwanz." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 34 (4W12+8) Stichschaden." },
      { name: "Korrumpierende Klauen", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 26 (4W8+8) Hiebschaden, und das Ziel muss einen SG-22-Konstitutionsrettungswurf bestehen oder eine Korruptionsstufe erlangen. Floraldrachen haben Nachteil auf diesen Rettungswurf." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 22 (4W6+8) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss es einen SG-23-Stärkerettungswurf bestehen oder zu Boden fallen." },
      { name: "Überwältigende Sporen", beschreibung: "Der Drache setzt eine Sporenwolke frei. Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet, muss einen SG-16-Weisheitsrettungswurf bestehen oder für 1 Minute bezaubert werden. Eine bezauberte Kreatur muss sich in ihrem Zug auf dem direktesten möglichen Weg mit ihrer Bewegungsrate auf den Drachen zubewegen. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und beendet bei einem Erfolg den Effekt für sich. Wenn der Rettungswurf einer Kreatur erfolgreich ist oder der Effekt für sie endet, ist die Kreatur für die nächsten 24 Stunden gegen die Überwältigenden Sporen des Drachen immun." },
      { name: "Korrumpierender Pilzhauch (Aufladung 5–6)", beschreibung: "Der Drache haucht faulige Sporen in einem 36 m langen Kegel. Jede Kreatur in diesem Bereich muss einen SG-22-Geschicklichkeitsrettungswurf bestehen. Bei einem Misslingen erleidet eine Kreatur 32 (5W12) Giftschaden und 32 (5W12) nekrotischen Schaden und erlangt eine Korruptionsstufe. Bei einem Gelingen erleidet die Kreatur nur den halben Schaden und erlangt keine Korruption." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Sporenopfer", beschreibung: "Wenn der Drache Schaden erleiden würde, kann er mit seiner Reaktion den Schaden halbieren und eine Kreatur seiner Wahl innerhalb von 90 m, die 3 oder mehr Korruptionsstufen hat, die andere Hälfte des Schadens erleiden lassen." }
    ],
    legendaere_aktionen: [
      { name: "Erspähen", beschreibung: "Der Drache führt einen Weisheit (Wahrnehmung)-Wurf durch." },
      { name: "Bewegen", beschreibung: "Der Drache bewegt sich bis zur Hälfte seiner Bewegungsrate." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." }
    ],
    pleurossa_netzwerk: {
      beschreibung: "Das Pleurossa-Netzwerk ist im Kampf keine Kreatur, die angegriffen werden kann. Es hat eine Reserve an Trefferpunkten, die es an den Pilz-Drachen und korrumpierte Floraldrachen verteilen kann.",
      regeln: [
        { name: "Trefferpunkte-Reserve", beschreibung: "Zu Kampfbeginn hat das Netzwerk 50 TP in seiner Reserve. Dieser Betrag kann erhöht oder verringert werden, um die Schwierigkeit des Kampfes anzupassen." },
        { name: "Gewinnen und Verteilen von Trefferpunkten", beschreibung: "Wenn korrumpierte Kreaturen sterben, gewinnt das Pleurossa-Netzwerk eine Anzahl von Trefferpunkten gleich einem Wurf der Trefferwürfel der Kreatur. Bei Initiative 10 (bei Gleichstand verliert es) kann das Pleurossa eine beliebige Anzahl von Trefferpunkten an entweder einen korrumpierten Floraldrachen seiner Wahl oder den Pilz-Drachen verteilen, wobei die gleiche Anzahl aus seiner Reserve entfernt wird." },
        { name: "Geteilte Wahrnehmung", beschreibung: "Das Pleurossa kann die Welt um sich herum durch sein Netzwerk aus Pilzfasern wahrnehmen, das den Boden sowie die korrumpierten Floraldrachen und den Pilz-Drachen durchzieht. Korrumpierte Floraldrachen und der Pilz-Drache können alles wahrnehmen, was das Pleurossa wahrnimmt, solange sie sich in seinem Bereich befinden." },
        { name: "Das Pleurossa-Netzwerk zerstören", beschreibung: "Das Pleurossa-Netzwerk kann nicht direkt angegriffen, aber zerstört werden. Sobald der Pilz-Drache besiegt ist, hat das Pleurossa kaum noch Abwehrmöglichkeiten, bis es einen neuen Fruchtkörper heranziehen kann. In dieser Zeit kann es durch jede logische Methode mit ausreichend Kraft und Aufwand zerstört werden – etwa durch Feuer, Pilzgift oder Magie. Alternativ kehrt das Pleurossa in seinen früheren, harmlosen Zustand als natürlichen Teil des Ökosystems zurück, wenn Izoras korrumpierender Einfluss entfernt oder besänftigt werden kann." }
      ]
    },
    korruption: {
      beschreibung: "Der Pilz-Drache und das Pleurossa-Netzwerk können Kreaturen mit Korruption infizieren. Diese Krankheit verwandelt Kreaturen in Wirte, tötet sie langsam und absorbiert sie schließlich in das Pleurossa-Netzwerk. Die Infektion kann durch Einatmen giftiger Sporen, durch Verletzungen oder durch Aufnahme korrumpierter organischer Materialien erworben werden. Das Tragen einer Gesichtsbedeckung gewährt Vorteil auf Rettungswürfe gegen Korruption durch Einatmen; das Tragen von Adamantpanzerung gewährt Vorteil auf Rettungswürfe gegen Korruption durch Verletzung. Konstrukte und Untote sind gegen Korruption immun.",
      progression: "Einmal alle 2W12 Tage muss eine Kreatur mit mindestens 1 Korruptionsstufe einen SG-16-Konstitutionsrettungswurf ablegen. Bei einem Misslingen erlangt die Kreatur eine Korruptionsstufe. Wiederholte Exposition gegenüber Sporen oder den Angriffen korrumpierter Floraldrachen kann die Korruption schnell vorantreiben.",
      tod_effekt: "Wenn eine Kreatur mit einer oder mehreren Korruptionsstufen stirbt, wird sie in das Pleurossa absorbiert. Das Pleurossa-Netzwerk gewinnt eine Anzahl von Trefferpunkten gleich einem Wurf der Trefferwürfel der Kreatur, die Teil seiner Reserve werden.",
      heilung: "Korruption hält an, bis alle Korruptionsstufen durch einen Zauber der Großen Wiederherstellung oder ähnlicher Magie entfernt werden. Sobald alle Stufen entfernt wurden, ist die Kreatur für die nächsten 24 Stunden gegen Korruption immun.",
      stufen: [
        { stufe: 1, name: "Infiziert", beschreibung: "Die Kreatur ist vergiftet. Diese Stufe kann entfernt werden, wenn innerhalb von 8 Stunden nach der Infektion der Zauber Kleine Wiederherstellung oder ein Gegenstand, der den Zustand ‚Vergiftet' heilt, angewendet wird." },
        { stufe: 2, name: "Leicht", beschreibung: "Die Kreatur hat Nachteil auf Konstitutionsrettungswürfe." },
        { stufe: 3, name: "Mäßig", beschreibung: "Der Pilz-Drache kann durch die Augen der Kreatur sehen. Die Kreatur ist hinsichtlich ihrer eigenen Sinne geblendet und erhält Blindsicht mit einer Reichweite von 3 m." },
        { stufe: 4, name: "Fortgeschritten", beschreibung: "Jedes Mal, wenn die Kreatur Schaden erleidet, erleidet sie zusätzlich 3 nekrotischen Schaden." },
        { stufe: 5, name: "Schwerwiegend", beschreibung: "Zu Beginn jedes Zuges der Kreatur muss sie einen SG-12-Konstitutionsrettungswurf bestehen. Bei einem Misslingen kann sie sich nur bewegen, eine Aktion ausführen oder eine Bonusaktion ausführen." },
        { stufe: 6, name: "Vollständige Korruption", beschreibung: "Die Kreatur stirbt und wird eins mit dem Pleurossa. Das Pleurossa-Netzwerk gewinnt eine Anzahl von Trefferpunkten gleich einem Wurf der Trefferwürfel der Kreatur. Nur der Zauber Wahre Auferweckung, Wunsch oder göttliche Intervention kann die Kreatur wieder zum Leben erwecken. Wenn die Kreatur ein Floraldrache ist, wird sie stattdessen zu einem korrumpierten Floraldrachen." }
      ],
      pilz_praesenz_tabelle: {
        header: ["HG", "Reichweite", "Schaden", "SG"],
        rows: [
          ["0–½",   "3-m-Kegel",  "2 (1W4) Gift + 2 (1W4) Nekrotisch",    "12"],
          ["1–3",   "6-m-Kegel",  "3 (1W6) Gift + 3 (1W6) Nekrotisch",    "13"],
          ["4–7",   "9-m-Kegel",  "7 (2W6) Gift + 7 (2W6) Nekrotisch",    "15"],
          ["8–10",  "12-m-Kegel", "9 (2W8) Gift + 9 (2W8) Nekrotisch",    "16"],
          ["11–16", "15-m-Kegel", "13 (3W8) Gift + 13 (3W8) Nekrotisch",  "17"],
          ["17–20", "18-m-Kegel", "16 (3W10) Gift + 16 (3W10) Nekrotisch","19"],
          ["21–23", "21-m-Kegel", "22 (4W10) Gift + 22 (4W10) Nekrotisch","20"],
          ["24–26", "24-m-Kegel", "26 (4W12) Gift + 26 (4W12) Nekrotisch","21"],
          ["27–30", "27-m-Kegel", "32 (5W12) Gift + 32 (5W12) Nekrotisch","22"]
        ]
      }
    },
    hortaktionen: {
      beschreibung: "Solange der Pilz-Drache sich im Bereich des Pleurossa befindet, kann das Pleurossa ab Initiative 20 (bei Gleichstand verliert es) eine der folgenden Hortaktionen einsetzen; derselbe Effekt darf nicht in zwei aufeinanderfolgenden Runden gewählt werden.",
      aktionen: [
        "Das Pleurossa beschwört einen korrumpierten Floraldrachen mit HG 4 oder niedriger, um dem Pilz-Drachen im Kampf beizustehen. Wirf Initiative für den korrumpierten Floraldrachen. Das Pleurossa kann diese Hortaktion zweimal pro Tag einsetzen.",
        "Schimmernde Sporen füllen die Luft in einem 6 m großen Würfel. Jede Kreatur in diesem Bereich muss einen SG-15-Geschicklichkeitsrettungswurf bestehen oder von dem Effekt des Zauberfeuers betroffen sein.",
        "Das Pleurossa-Netzwerk gräbt sich in einem Radius von 6 m um einen Punkt auf dem Boden innerhalb von 36 m des Pilz-Drachen aus dem Erdreich. Der Bereich wird schwieriges Gelände, und jede Kreatur darin muss einen SG-19-Stärkerettungswurf bestehen oder bis zur nächsten Hortaktion des Pleurossa von Wurzeln festgehalten werden. Die Kreatur kann befreit werden, wenn sie selbst oder eine andere Kreatur eine Aktion aufwendet und einen SG-15-Stärkewurf besteht."
      ]
    },
    regionale_effekte: {
      beschreibung: "Das Gebiet, das das Pleurossa enthält, wird durch seine Anwesenheit verändert. Wenn das Pleurossa stirbt, verblassen diese Effekte im Laufe von 1W10 Tagen.",
      effekte: [
        "Wasserquellen innerhalb von 8 km des Horts sind verseucht. Eine Kreatur, die das Wasser trinkt, ist für 1W4+1 Stunden vergiftet.",
        "Pflanzen und Tiere wirken kränklich, und der Wald ist unheimlich still – hier singt kein Vogel.",
        "Die im Wald wachsenden Pilze sind korrumpiert. Eine Kreatur, die einen dieser Pilze verzehrt, muss einen SG-22-Konstitutionsrettungswurf bestehen oder eine Korruptionsstufe erlangen."
      ]
    },
    korrupte_floraldrachen_vorlage: {
      beschreibung: "Floraldrachen, die 6 Stufen Korruption erlangen, werden zu korrumpierten Floraldrachen. Sie teilen folgende Eigenschaften:",
      aenderungen: [
        { name: "Attributänderungen", beschreibung: "Intelligenz wird 3 (−4), Weisheit 12 (+1) und Charisma 4 (−3)." },
        { name: "Resistenzen", beschreibung: "Resistenz gegen nekrotischen Schaden." },
        { name: "Immunitäten", beschreibung: "Immunität gegen Giftschaden. Kann nicht geblendet, bezaubert, taubgemacht, verängstigt, versteinert oder vergiftet werden und leidet nicht unter Erschöpfung." },
        { name: "Myzellgesteuert", beschreibung: "Der korrumpierte Floraldrache ist Teil des Pleurossa-Netzwerks. Solange er sich im Bereich des Pleurossa befindet, nimmt er alles wahr, was das Pleurossa wahrnimmt. Er folgt den Wünschen des Pleurossa ohne Zögern." },
        { name: "Sinne", beschreibung: "Der korrumpierte Floraldrache erhält Blindsicht mit einer Reichweite von 18 m, sofern er diese nicht schon hatte. Er ist jenseits dieser Reichweite blind und verliert alle anderen Sinne." },
        { name: "Bewegungsrate", beschreibung: "Der korrumpierte Floraldrache erhält eine Grabengeschwindigkeit von 9 m. Hat er eine Fluggeschwindigkeit, wird diese halbiert." },
        { name: "Magieresistenz", beschreibung: "Der korrumpierte Floraldrache hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte." },
        { name: "Geschwächt", beschreibung: "Der korrumpierte Floraldrache kann keine Zauber wirken und keine legendären Aktionen durchführen." },
        { name: "Nahkampfwaffen-Sporen", beschreibung: "Hat der Drache einen Nahkampf-Waffenangriff, der Stich- oder Hiebschaden verursacht, muss das Ziel bei einem Treffer einen Konstitutionsrettungswurf (SG = 8 + Übungsbonus + KON-Modifikator des Drachen) bestehen oder eine Korruptionsstufe erlangen. Floraldrachen haben Nachteil auf diesen Rettungswurf." },
        { name: "Florale Präsenz → Pilzpräsenz (Aufladung 5–6)", beschreibung: "Falls der korrumpierte Drache ursprünglich eine Florale Präsenz hatte, wird diese ersetzt. Der Drache haucht Sporen in einem Kegel. Jede Kreatur im Bereich muss einen Konstitutionsrettungswurf bestehen. Bei Misslingen erleidet sie Gift- und Nekrotischen Schaden und erlangt eine Korruptionsstufe. Bei Gelingen erleidet sie nur halben Schaden, und ein Ziel, das seinen Rettungswurf besteht, ist 24 Stunden lang immun. Reichweite, Schaden und SG richten sich nach dem ursprünglichen HG des Drachen (Tabelle Pilzpräsenz-Stärke)." }
      ]
    },
    source: "Floral Dragons"
  },
  {
    name: "Rhododendron-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Mittelgroß",
    gesinnung: "Jede rechtschaffene Gesinnung",
    cr: 0.5,
    xp: 100,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 39,
    tp_wuerfel: "6W8+12",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 15, DEX: 13, CON: 15, INT: 10, WIS: 10, CHA: 8 },
    rettungswuerfe: { KON: 4, WEI: 2 },
    fertigkeiten: { "Wahrnehmung": 4, "Einschüchtern": 1 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 18 m"],
    passiveWahrnehmung: 14,
    sprachen: ["Drakonisch und eine weitere Sprache nach Wahl"],
    umgebung: ["Stadt", "Wald"],
    bild: "floral-dragons/rhododendron-drache.png",
    beschreibung: [
      "Rhododendron-Drachen entstanden aus einem Rudel Azalea-Drachen, das sich mit einem elfischen Königreich verbündete. Als die Azalea-Drächin Cayn von einem Schneesturm von ihrem Rudel getrennt wurde und im eisigen Winter dem Tod nahe war, rettete sie die elfische Prinzessin Helia und pflegte sie gesund. Zum Dank schwor Cayn einen Eid der Allianz und Freundschaft – und brach damit das Tabu der Azalea-Drachen gegen das Anfreunden mit Humanoiden. Diese Bindung veränderte ihre Form für immer und verwandelte sie in Rhododendron-Drachen.",
      "Rhododendron-Drachen ähneln Azalea-Drachen, haben aber massigere Körper mit kräftigen Gliedmaßen und von großen Schuppen bedeckten Schwänzen. Blüten in Rot-, Rosa-, Lila-, Gelb- oder Orangetönen umrahmen Hals und Kopf wie eine Mähne. Die dicken, lederartigen Blütenblätter verleihen dem Drachen zusätzlichen Schutz. Ausgewachsen stehen sie etwa 1,2 m an der Schulter und erreichen 1,5 m Länge. Sie reifen langsamer als ihre Azalea-Vettern und brauchen nach dem Schlüpfen fünf Jahre bis zur Reife.",
      "Rhododendron-Drachen sind tief loyal und äußerst soziale Wesen, die viel Zuneigung und Fürsorge benötigen. Sie schließen tiefe Freundschaften mit einzelnen Humanoiden und können lebenslange Gefährtenschaft eingehen – besiegelt in einer Zeremonie, die an den Eid von Cayn und Helia erinnert. Sie sehen sich als Brücke zwischen Humanoiden und Floraldrachen und glauben, dass der uralte Groll ihrer Stammmutter Haskra nicht für immer andauern sollte. Gegenüber Azalea-Drachen treten sie jedoch mit instinktiver Feindseligkeit auf."
    ],
    besonderheiten: [
      { name: "Scharfes Gehör und Geruchssinn", beschreibung: "Der Drache hat Vorteil auf Weisheit (Wahrnehmung)-Würfe, die auf Gehör oder Geruch beruhen." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W8+2) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W6+2) Hiebschaden, und wenn das Ziel eine Kreatur ist, muss es einen SG-13-Stärkerettungswurf bestehen oder 3 m vom Drachen weggestoßen werden und zu Boden fallen." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Beschützer", beschreibung: "Wenn eine Kreatur, die der Drache sehen kann, ein anderes Ziel als den Drachen angreift, das sich innerhalb von 1,5 m des Drachen befindet, kann der Drache dem Angriffswurf Nachteil auferlegen." }
    ],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Rittersporn-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Groß",
    gesinnung: "Jede chaotische Gesinnung",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 90,
    tp_wuerfel: "12W10+24",
    bewegung: { "Gehen": "12 m", "Fliegen": "6 m" },
    attribute: { STR: 16, DEX: 17, CON: 15, INT: 7, WIS: 10, CHA: 9 },
    rettungswuerfe: { STR: 6, GES: 6 },
    fertigkeiten: { "Einschüchtern": 5, "Wahrnehmung": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Drakonisch, versteht Gemein aber kann es nicht sprechen"],
    umgebung: ["Grasland", "Wald"],
    bild: "floral-dragons/rittersporn-drache.png",
    beschreibung: [
      "Der Rittersporn-Drache war nicht immer ein Floraldrache. Überlieferungen zufolge war er einst ein Aal, der von Magiern begehrt wurde, die seine Flossen als Zauberkomponente benötigten. Diese mächtigen Zauberwirker jagten die Aale an den Rand der Ausrottung, woraufhin ein Gott des Meeres ein Abkommen mit einem Gott des Waldes schloss, um die Aale zu ihrem Schutz in Landlebewesen zu verwandeln. Der Waldgott verlieh dem Aal lange, schnelle Beine zur Flucht vor Raubtieren, einen scharfen Schnabel zur Abwehr von Feinden und wunderschöne, aber giftige Blüten, um jeden zu töten, der es wagen würde, ihn erneut zu jagen. Die Verwandlung ersetzte jedoch das ängstliche Temperament des Rittersporns durch die Hochnäsigkeit und Aggressivität eines Drachen. Manche glauben, dass diese Nachkommen der Aale Erinnerungen an grausame Behandlung durch Humanoide in sich tragen, und ihre Bitterkeit äußert sich in der unangenehmen Natur des Rittersporn-Drachen.",
      "Trotz ihrer trügerisch zarten Erscheinung verfügen Rittersporn-Drachen über starke natürliche Abwehrmechanismen. Sie reifen mit 50 Jahren heran und können etwa 400 Jahre alt werden. Ausgewachsen werden sie bis zu 6 Meter lang und 3 Meter groß. Ihre Blütenblätter sind dünn und kommen in tiefen Indigo-, Violett- und Rosatönen. Sie sind zweibeinig, mit großen Klauen für sicheren Halt und geschmeidigen, wendigen Körpern, die für Distanzläufe bei hoher Geschwindigkeit gebaut sind. Dank ihrer langen Hälse und scharfen Schnäbel können sie Feinde angreifen, die sich ihrerseits nicht wehren können. Anstatt zu fliegen spreizen sie ihre flügelartigen Blütenblätter häufig aus, um größer und einschüchternder zu wirken. Alle Rittersporn-Drachen sind giftig, und ihre Blütenblätter sind beim Berühren toxisch. Die darin eingebetteten Samen weisen die höchste Giftkonzentration aller Körperteile auf – Geschöpfe, die sie verzehren, sterben innerhalb weniger Stunden.",
      "Rittersporn-Drachen bevorzugen offene, sonnige Umgebungen mit gut drainiertem Boden und häufigem Regen – Wiesen, Steppen und Grasland. Stets in Bewegung, wandern lockere Blütegruppen das ganze Jahr. Sie verhalten sich, als gehöre ihnen jeder neue Ort, und betrachten alle anderen Bewohner als Eindringlinge. Wenn ein Gebiet an Nahrung erschöpft ist, ziehen sie weiter. Als Allesfresser jagen sie kleine Säugetiere, Vögel und die viel kleineren Löwenzahn-Drachen. Obwohl anderen Geschöpfen gegenüber äußerst aggressiv, sind Rittersporn-Drachen unter sich gesellig – wenn auch kampflustig. Ihre Hauptfeinde sind Pfingstrosen-Drachen, die als eines der wenigen Geschöpfe ihren Giften widerstehen können. Unter den Floraldrachen hat sich nur der Helikonien-Drache wirklich mit dem Rittersporn angefreundet – beide teilen eine Liebe zur Musik. Wenn ein Rittersporn-Drache wenige Tage nach dem Schlüpfen auf Humanoide trifft, lässt er sich in Gefangenschaft aufziehen und als Reittier ausbilden, wobei Reiter stets Schutzausrüstung gegen die Blütengifte tragen müssen."
    ],
    besonderheiten: [
      { name: "Giftige Blütenblätter", beschreibung: "Wenn eine Kreatur den Drachen mit einem Nahkampfangriff trifft, erleidet sie 7 (2W6) Giftschaden." },
      { name: "Schnellfüßig", beschreibung: "Der Drache kann Spurten als Bonusaktion verwenden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache greift einmal mit dem Schnabel und einmal mit den Klauen an." },
      { name: "Schnabel", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 7 (1W8+3) Stichschaden plus 5 (1W10) Giftschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 10 (2W6+3) Hiebschaden plus 5 (1W10) Giftschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Seerosen-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Riesig",
    gesinnung: "Typischerweise gut gesinnt",
    cr: 4,
    xp: 1100,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 73,
    tp_wuerfel: "7W12+28",
    bewegung: { "Gehen": "1,5 m", "Schwimmen": "18 m" },
    attribute: { STR: 23, DEX: 14, CON: 18, INT: 11, WIS: 17, CHA: 16 },
    rettungswuerfe: { GES: 2, KON: 6, WEI: 3 },
    fertigkeiten: {},
    schadensresistenzen: ["Feuer", "Kälte"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Liegend"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Versteht Drakonisch und eine weitere Sprache, kann aber nicht sprechen"],
    umgebung: ["Gewässer"],
    bild: "floral-dragons/seerosen-drache.png",
    beschreibung: [
      "Überlieferungen erzählen von zwei Frauen, Callista und Rosetta, die auf entgegengesetzten Seiten eines riesigen Sees lebten – Liebende aus verfeindeten Nationen, die sich im Krieg um den See befanden. Da es gefährlich war, den See zu umrunden, warfen sie heimlich Liebesbriefe in versiegelten Glasflaschen ins Wasser. Der See brachte die Botschaften stets ans andere Ufer – ein Wunder, das sie einem großen Seerosen-Drachen zu verdanken hatten, der die Flaschen unbemerkt hin und her beförderte. Als Callista verzweifelt den See zu durchschwimmen versuchte und ihre Kräfte sie verließen, hob der Drache sie sanft auf seinen Rücken und brachte sie zu Rosetta. Gemeinsam ritten die beiden Frauen auf seinem Rücken fort, um abseits des Krieges ihr Leben zu verbringen. Wegen dieser Empathie gelten Seerosen-Drachen als die mitfühlendsten und sanftmütigsten aller Floraldrachen.",
      "Seerosen-Drachen werden bis zu 200 Jahre alt und etwa 4,5 Meter lang. Ihre weichen grünen Schuppen – je älter der Drache, desto dunkler das Grün – sind mit einem wachsartigen Glanz überzogen, der an die Blätter ihrer Namenspflanze erinnert. Ihre Blüten sind meist rosa, können aber auch gelb, rot, orange oder weiß sein. Sie benötigen große Gewässer zum Gedeihen und leben überwiegend in Süßwasserseen und breiten Flüssen. Seerosen-Drachen spielen eine wichtige ökologische Rolle: Sie fressen invasive Algen, verteilen Nährstoffe und verhindern mit den Wellen ihres Schwimmens die Ansammlung von Algenblüten. Fische sammeln sich häufig im Schatten des Drachen. Sie bauen keine Nester, sondern ruhen mit dem Kopf auf flachen Steinen, die Nüstern über dem Wasser.",
      "Seerosen-Drachen ernähren sich von Algen, Wasserinsekten und Fischen. Als eine der geselligsten Floraldrachen-Arten pflegen sie engen Kontakt zu Gemeinschaften am Seeufer: Sie lassen Humanoide von ihrem Rücken aus fischen oder transportieren sie über das Wasser. Von Natur aus sanftmütig, verteidigen sie sich eher, als dass sie angreifen – sie schlagen ihre mächtigen Flossen auf die Wasseroberfläche, um Angreifer mit Wellen zu vertreiben. Wenn es sein muss, verteidigen sie Reisende auf ihrem Rücken sogar auf Kosten des eigenen Lebens. In größeren Seen leben sie manchmal gemeinsam mit Lamium- und Clematis-Drachen, wobei Clematis-Drachen gerne auf ihnen reiten."
    ],
    besonderheiten: [
      { name: "Wasservorteil", beschreibung: "Der Drache hat Vorteil auf Angriffswürfe, wenn er sich im Wasser befindet." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +8 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (1W10+6) Stichschaden." },
      { name: "Flosse", beschreibung: "Nahkampf-Waffenangriff: +8 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 9 (1W6+6) Wuchtschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Wellenschutz (2/Tag)", beschreibung: "Wenn ein Angriff gegen eine Kreatur auf dem Rücken des Drachen gemacht wird, kann der Drache seine Reaktion einsetzen, um seine Vorderflossen gegen die Wasseroberfläche zu schlagen und dem Angriffswurf Nachteil aufzuerlegen. Unabhängig davon, ob der Angriff trifft oder verfehlt, muss der Angreifer einen SG-14-Stärkerettungswurf bestehen oder wird 4,5 m vom Drachen weggestoßen." }
    ],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Sukkulenten-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Groß",
    gesinnung: "Rechtschaffen neutral",
    cr: 12,
    xp: 8400,
    rk: 19,
    ruestungstyp: "natürliche Rüstung",
    tp: 115,
    tp_wuerfel: "10W10+60",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 23, DEX: 14, CON: 22, INT: 11, WIS: 17, CHA: 16 },
    rettungswuerfe: { GES: 6, KON: 10, WEI: 7, CHA: 7 },
    fertigkeiten: { "Naturkunde": 4, "Wahrnehmung": 11, "Überleben": 7 },
    schadensresistenzen: ["Feuer", "Blitz", "Wucht, Stich und Hieb von nichtmagischen Angriffen"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 21,
    sprachen: ["Drakonisch, sowie eine weitere Sprache nach Wahl"],
    umgebung: ["Wüste"],
    bild: "floral-dragons/sukkulenten-drache.png",
    beschreibung: [
      "Der älteste überlieferte Ursprungsmythos des Sukkulenten-Drachen besagt, dass diese Drachen einst gewöhnliche Pflanzen waren, denen die uralte Drachin Echinox Bewusstsein und Drachengestalt verlieh. Als Echinox trächtig und von dem Untoten-Drachen Mordruth verfolgt wurde, legte sie ihre Eier in einem Hain nadelstacheliger Sukkulenten ab und bat die Pflanzen, ihre Brut zu bewachen, während sie Mordruth weglockte und besiegte. Als sie zurückkehrte, fand sie die Pflanzen zu einem lebenden Zaun herangewachsen, auf dem die Körper von Raubtieren und Humanoiden aufgespießt waren – dahinter schliefen ihre frisch geschlüpften Nestlinge sicher. Um ihr Versprechen zu halten, verwandelte Echinox die treuen Pflanzen in die ersten Sukkulenten-Drachen.",
      "Sukkulenten-Drachen können bis zu 750 Jahre alt werden und etwa 4 Meter lang und 180 Kilogramm schwer werden. Am Ende ihres massigen Schwanzes trägt jeder Drache eine einzige rote, kelchartige Blüte von bis zu 60 Zentimeter Durchmesser, die Wüstenbestäuber anzieht. Robuste Flügel ermöglichen es ihnen, stundenlang über endlose Wüsten zu gleiten, ohne einen einzigen Flügelschlag – Experten vermuten magische Unterstützung. Als einer der best gepanzerten Floraldrachen sind sie mit einer dicken Schicht aus Schuppen und Nadeln bedeckt. Ihr Körper hält eine erhöhte Temperatur aufrecht und kann überschüssige Hitze als heißen Atemkegel abgeben. Trotzdem speichern Sukkulenten-Drachen enorme Wassermengen in ihrer tonnenförmigen Brust und können bis zu zwei Jahre ohne Trinken auskommen.",
      "Sukkulenten-Drachen gedeihen in ariden Wüsten auf felsigen Plateaus, wo sie Kakteennester anlegen. Ihre Behausungen sind von lebenden Kakteenzäunen umgeben, an denen sie die Skelette dreister Eindringlinge zur Schau stellen. Sie sind standorttreu und verlassen ein Gebiet nur, wenn die Ressourcen erschöpft sind. Die meisten Sukkulenten-Drachen sind Einzelgänger, aber liebevolle und schützende Eltern. Ihre Hauptraubtiere sind Humanoide, die sie wegen ihres Blutes jagen – einer dünnen, hellgrünen Flüssigkeit mit regenerativen Eigenschaften, die als begehrtes magisches Reagenz gilt. Obwohl Sukkulenten-Drachen intelligent und gesprächsbereit wären, nehmen sie Humanoiden gegenüber meist eine feindselige Haltung ein, da Wilderer ihnen selten die Chance lassen, das Gegenteil zu beweisen."
    ],
    besonderheiten: [
      { name: "Nadelhaare", beschreibung: "Eine Kreatur, die den Drachen berührt oder ihn mit einem Nahkampfangriff aus 1,5 m oder weniger trifft, erleidet 6 (1W12) Stichschaden. Dieser Schaden ignoriert Resistenzen gegen Stichschaden." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn dem Drachen ein Rettungswurf misslingt, kann er sich entscheiden, ihn zu bestehen." },
      { name: "Regeneration", beschreibung: "Der Drache regeneriert zu Beginn seines Zuges 10 Trefferpunkte. Wenn der Drache Säureschaden erleidet, funktioniert diese Eigenschaft zu Beginn seines nächsten Zuges nicht. Der Drache stirbt nur, wenn er am Beginn seines Zuges 0 Trefferpunkte hat und sich nicht regeneriert." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Verwirrende Florale Präsenz einsetzen. Dann führt er drei Angriffe durch: einen mit seinem Biss und zwei mit seinen Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 11 (1W10+6) Wuchtschaden plus 6 (1W12) Stichschaden. Dieser Schaden ignoriert Resistenzen gegen Stichschaden." },
      { name: "Verwirrende Florale Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen in 36 m muss einen SG-17-Weisheitsrettungswurf bestehen oder ist für 1 Minute handlungsunfähig oder bis sie Schaden erleidet. Eine handlungsunfähige Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und beendet den Effekt bei einem Erfolg. Wenn der Rettungswurf einer Kreatur erfolgreich ist oder der Effekt für sie endet, ist die Kreatur 24 Stunden lang immun gegen die Florale Präsenz des Drachen." },
      { name: "Hitzeodem (Aufladung 5–6)", beschreibung: "Der Drache atmet überhitzte Luft in einem 9-m-Kegel aus. Jede Kreatur in diesem Bereich muss einen SG-18-Konstitutionsrettungswurf ablegen und erleidet bei einem Fehlschlag 45 (10W8) Feuerschaden oder bei einem Erfolg den halben Schaden. Zusätzlich wird jedes Metallobjekt im Bereich rotglühend heiß und verursacht 9 (2W8) Feuerschaden an jeder Kreatur, die damit in Kontakt steht. Wenn eine Kreatur ein solches Objekt hält oder trägt und dadurch Schaden erleidet, muss sie einen SG-15-Konstitutionsrettungswurf bestehen oder das Objekt fallen lassen, sofern sie kann. Lässt sie es nicht fallen, hat sie bis zum Beginn ihres nächsten Zuges Nachteil auf Angriffswürfe und Fähigkeitswürfe." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Verteidigen", beschreibung: "Der Drache umschlingt eine andere Kreatur in 3 m mit seinem Schwanz. Angriffe gegen diese Kreatur haben bis zum Beginn des nächsten Zuges des Drachen Nachteil oder bis die Kreatur sich mehr als 3 m vom Drachen entfernt." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Flügelangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Flügeln. Jede Kreatur in 3 m muss einen SG-18-Geschicklichkeitsrettungswurf bestehen oder erleidet 15 (2W6+8) Wuchtschaden und fällt zu Boden. Der Drache kann dann bis zur Hälfte seiner Flugbewegung fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Während der Drache in seinem Hort kämpft, kann er ab Initiative 20 (bei Gleichstand verliert er) eine der folgenden Hortaktionen einsetzen; derselbe Effekt darf nicht in zwei aufeinanderfolgenden Runden gewählt werden.",
      aktionen: [
        "Der lebende Kaktuszaun schlägt aus. Jede Kreatur in 3 m des Zaunes muss einen SG-18-Stärkerettungswurf bestehen. Bei einem Fehlschlag ist sie gefesselt (Entkommen-SG 18). Eine gefesselte Kreatur erleidet zu Beginn jedes ihrer Züge 7 (2W6) Stichschaden.",
        "Kakteen brechen aus dem Boden hervor, ausgehend von einem Punkt, den der Drache in 18 m sehen kann, und bilden eine 7,5 m lange und 1,5 m breite Linie. Jede Kreatur in der Linie muss einen SG-18-Geschicklichkeitsrettungswurf bestehen und erleidet bei einem Fehlschlag 12 (5W4) Stichschaden oder bei einem Erfolg den halben Schaden.",
        "Ein Erdbeben erschüttert den Hort in einem Radius von 9 m um den Drachen. Jede Kreatur auf dem Boden in diesem Bereich – ausgenommen der Drache selbst – muss einen SG-15-Geschicklichkeitsrettungswurf bestehen oder zu Boden fallen."
      ]
    },
    regionale_effekte: {
      beschreibung: "Das Gebiet in der Nähe des Horts eines legendären Sukkulenten-Drachen wird von seiner Magie verzerrt.",
      effekte: [
        "Sukkulentenpflanzen innerhalb von 1,6 km des Horts haben regenerative Eigenschaften. Wenn sie abgetrennt oder beschädigt werden, wachsen sie innerhalb von 1W10 Minuten vollständig nach.",
        "Innerhalb von 1,6 km um den Hort kommt es häufig zu Erdbeben.",
        "Das Gebiet innerhalb von 1,6 km um den Hort ist einige Grad wärmer als die Umgebungstemperatur außerhalb dieses Bereichs, selbst nachts.",
        "Wenn der Drache stirbt, verblassen diese Effekte nach 1W10 Tagen."
      ]
    },
    source: "Floral Dragons"
  },
  {
    name: "Vampirlilien-Drache",
    art: "Drache",
    unterart: "Floral",
    groesse: "Groß",
    gesinnung: "Typischerweise chaotisch böse",
    cr: 14,
    xp: 11500,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 252,
    tp_wuerfel: "24W10+120",
    bewegung: { "Gehen": "13,5 m", "Graben": "4,5 m", "Schwimmen": "13,5 m" },
    attribute: { STR: 22, DEX: 14, CON: 21, INT: 18, WIS: 18, CHA: 16 },
    rettungswuerfe: { STR: 11, KON: 10, INT: 9 },
    fertigkeiten: { "Täuschung": 8, "Menschenkenntnis": 9, "Wahrnehmung": 9, "Heimlichkeit": 7 },
    schadensresistenzen: ["Kälte", "Nekrotisch"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet", "Bewusstlos"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 19,
    sprachen: ["Gemein", "Drakonisch", "sowie zwei weitere Sprachen nach Wahl"],
    umgebung: ["Grasland", "Sumpf", "Stadt"],
    bild: "floral-dragons/vampirlilien-drache.png",
    beschreibung: [
      "Die Vampirlilien-Drachen gelten als Schöpfung der legendären Drachennekromantin Arumathara. Nach dem Tod ihres geliebten Gefährten, des Vampirs Dracuncul, der von einem als Lilienritter bekannten Paladin erschlagen worden war, rächte sich Arumathara am Mörder – doch der Triumph linderte ihren Kummer kaum. Um Dracuncul zu ehren, mischte sie sein lang aufbewahrtes Blut mit ihrem eigenen und ließ das Gemisch auf eine weiße Lilie tropfen, während sie die Magie von Leben und Tod kanalisierte. Da die Lilien das heilige Symbol des Paladins waren, wollte Arumathara sie entstellen. Als jedes Blütenblatt das Blut aufsog, verwandelte es sich in die ersten Vampirlilien-Drachen. Noch in ihren ersten Atemzügen schnappten die Nestlinge nach ihrer Schöpferin – ein Zeichen der Blutrünstigkeit, das Arumathara als würdigen Tribut an ihren Vampirfreund erachtete.",
      "Vampirlilien-Drachen sind große Vierbeiner mit gedrungenen Körpern, die in nur zehn Jahren ihre volle Größe von etwa 3 Metern Länge erreichen. Ausgewachsene Exemplare sind kaum zu bedrohen und können bis zu 850 Jahre alt werden. Ihr glattes Fleisch schimmert in Lila- und Hellgrüntönen; ein Kamm aus dunkelvioletten Blütenblättern und schwarzen Stacheln ziert ihren Rücken. Der Schwanz, etwa die Hälfte ihrer Gesamtlänge, endet in einer tiefvioletten Blüte mit zwei schwarzen Spadices. Vampirlilien-Drachen schlafen nicht wie andere Drachen: Im Ruhezustand bleibt ihr Geist vollständig wachsam. Ein unübersehbares Merkmal ist ihr intensiver Gestank nach verwesendem Fleisch; sie können einen so starken Dunst ausatmen, dass Geschöpfe davon bewusstlos werden. Fliegenschwärme werden von dem Geruch angezogen – ihr Summen ist ein untrügliches Zeichen, dass ein Vampirlilien-Drache in der Nähe lauert.",
      "Vampirlilien-Drachen sind obligate Fleischfresser, die Aas geradezu genießen, und spüren mit ihrem scharfen Geruchssinn Verwestes und Blut über weite Entfernungen auf. Begegnungen zweier Vampirlilien-Drachen enden typischerweise mit dem Tod mindestens eines der beiden; zur Fortpflanzung vertrauen sie stattdessen auf Insekten. Aus einem Gelege von rund zwanzig Eiern frisst das erste Schlüpfling gewöhnlich seine Geschwister. Obwohl als brutale Raubtiere bekannt, sind Vampirlilien-Drachen hochintelligent – ob eine Begegnung mit einem Humanoiden gut ausgeht, hängt ganz von der Stimmung des Drachen ab: Solange er amüsiert oder neugierig ist, führt er höfliche Gespräche, kann aber jederzeit aus Langeweile oder Gereiztheit angreifen. Selbst langjährige Beziehungen können für einen Humanoiden plötzlich tödlich enden."
    ],
    besonderheiten: [
      { name: "Aggressiv", beschreibung: "Als Bonusaktion kann der Drache sich bis zu seiner Bewegungsrate auf ein feindliches Geschöpf zubewegen, das er sehen kann." },
      { name: "Scharfer Geruchssinn", beschreibung: "Der Drache hat Vorteil auf Weisheit (Wahrnehmung)-Würfe, die auf dem Geruchssinn beruhen." },
      { name: "Giftstacheln", beschreibung: "Eine Kreatur, die den Drachen berührt oder ihn mit einem Nahkampfangriff aus 1,5 m oder weniger trifft, muss einen SG-18-Geschicklichkeitsrettungswurf bestehen oder erleidet 16 (3W10) Giftschaden und ist bis zum Ende ihres nächsten Zuges vergiftet." },
      { name: "Schlaflos", beschreibung: "Der Drache kann nicht überrascht werden, muss nicht schlafen, und Magie kann ihn nicht in den Schlaf versetzen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt drei Angriffe durch: zwei mit dem Biss und einen mit dem Schwanz." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 16 (3W6+6) Stichschaden plus 10 (3W6) Giftschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 3 m, eine Kreatur. Treffer: 15 (2W8+6) Wuchtschaden plus 10 (3W6) Giftschaden, und das Ziel ist ergriffen (Entkommen-SG 19). Bis diese Umklammerung endet, ist die Kreatur gefesselt, und der Drache kann kein weiteres Ziel ergreifen." },
      { name: "Gestanksodem (Aufladung 5–6)", beschreibung: "Der Drache atmet übelriechendes Gas in einem 18-m-Kegel aus. Jede Kreatur in diesem Bereich muss einen SG-18-Konstitutionsrettungswurf bestehen. Bei einem Fehlschlag wird eine Kreatur für 1 Minute bewusstlos. Die Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und beendet den Effekt bei einem Erfolg. Der Effekt endet auch, wenn die Kreatur Schaden erleidet." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Vespon-Königin",
    art: "Monstrosität",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 0.5,
    xp: 100,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 49,
    tp_wuerfel: "9W6+18",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m" },
    attribute: { STR: 1, DEX: 15, CON: 14, INT: 3, WIS: 8, CHA: 4 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: [],
    umgebung: ["Dschungel", "Grasland", "Wald"],
    bild: "floral-dragons/vespon-koenigin.png",
    beschreibung: [
      "Einige Forscher glauben, dass Vespons für die Entstehung aller Floraldrachen verantwortlich sind, da sie sogar den ältesten Floraldrachen zeitlich vorausgehen. Die am weitesten verbreitete Erklärung für ihre Existenz ist, dass gewöhnliche Bienen in der Nähe von Drachenhorten über Jahrhunderte durch die drakonische Magie im Boden und in den Blüten verändert wurden, bis sich das erste Vespon-Volk bildete.",
      "Vespons sind stämmige, insektenartige Geschöpfe mit sechs kurzen Gliedmaßen am Thorax, einem harten Chitin-Exoskelett und einem robusten Unterleib. Beim schnellen Flügelschlagen erzeugen sie ein anhaltendes Summen, das sie etwa eine Stunde aufrechterhalten können. Ihre feinfühligen Antennen erlauben es ihnen, Blüten und Nektar über große Entfernungen zu riechen. Ihr Körper ist mit feinen gelben Haaren bedeckt, die Pollen sammeln und so die lebenswichtige Rolle der Bestäubung für Floraldrachen und Pflanzen erfüllen. Keine Stacheln besitzen Vespons – sie beißen nur, wenn ihre Königin bedroht wird.",
      "Vespons leben in hierarchischen Völkern. Die Königin ist das einzige Mitglied, das Eier legen kann, und sendet Pheromone als Nachrichten an die Arbeiterinnen. Vespons produzieren magischen Honig, wenn sie den Nektar von Floraldrachen verarbeiten, wobei die magischen Eigenschaften je nach Drachenart variieren. Vesponzüchter müssen verschiedene Honigarten sorgfältig getrennt halten, da manche – etwa der Nektar des Azalea-Drachen – giftig sind. Gegenüber Floraldrachen und Humanoiden sind Vespons freundlich, verteidigen ihr Volk bei Bedrohung jedoch mit koordinierten Schwarmangriffen."
    ],
    besonderheiten: [
      { name: "Pheromonennetzwerk", beschreibung: "Die Königin kann einfache Bilder, Ideen und Anweisungen an alle Vespon-Schwärme in 45 m übermitteln. Ein Schwarm kann auf diese Kommunikation antworten und der Königin einfache Informationen weitergeben." },
      { name: "Königlicher Befehl", beschreibung: "Die Königin kann als Bonusaktion einem Vespon-Schwarm in 45 m befehlen, einen Angriff durchzuführen. Der Schwarm muss seine Reaktion verwenden, um diesen Angriff auszuführen." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (2W4+2) Stichschaden." },
      { name: "Summen", beschreibung: "Die Königin schlägt ihre Flügel heftig und erzeugt ein Summen. Jede Kreatur in 3 m, die die Königin hören kann, muss einen SG-12-Konstitutionsrettungswurf bestehen oder erleidet 3 (1W6) Donnerschaden und ist bis zum Beginn des nächsten Zuges der Königin taub." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  },
  {
    name: "Vespon-Schwarm",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 45,
    tp_wuerfel: "7W8+14",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m" },
    attribute: { STR: 4, DEX: 15, CON: 15, INT: 3, WIS: 8, CHA: 4 },
    rettungswuerfe: { GES: 4, KON: 4 },
    fertigkeiten: { "Wahrnehmung": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: [],
    umgebung: ["Dschungel", "Grasland", "Wald"],
    bild: "floral-dragons/vespon-schwarm.png",
    beschreibung: [
      "Ein Vespon-Schwarm besteht aus Arbeiterinnen, die gemeinsam auf Bedrohungen ihres Volkes reagieren. Werden die Königin oder die Brut angegriffen, mobilisieren die Arbeiterinnen sofort und koordinieren sich, um Angreifer einzuschränken und zu überwältigen. Im Alltag sammeln sie Nektar, pflegen Larven und halten den Bienenstock sauber.",
      "Vespons sind keine Floraldrachen, aber eng mit ihnen verbunden: Sie bestäuben ihre Blüten, pflegen ihre Blütenblätter und genießen dafür reichlichen Nektar. Für Pfingstrosen-Drachen reinigen Vespons die Blütenblätter, während Vampirlilien- und Apfelbaum-Drachen auf Vespons zur Fortpflanzung angewiesen sind. Wird ein Vesponvolk bedroht, verteidigt der Schwarm seine Königin mit koordinierten, betäubenden Bissen."
    ],
    besonderheiten: [
      { name: "Schwarm", beschreibung: "Der Schwarm kann denselben Raum einnehmen wie eine andere Kreatur und umgekehrt. Er kann sich durch jede Öffnung bewegen, die groß genug für ein Winziges Insekt ist. Der Schwarm kann keine Trefferpunkte zurückgewinnen oder temporäre Trefferpunkte erhalten." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +3 zum Treffen, Reichweite 0 m, ein Ziel im Raum des Schwarms. Treffer: 10 (4W4) Stichschaden oder 5 (2W4) Stichschaden, wenn der Schwarm noch die Hälfte oder weniger seiner Trefferpunkte hat. Bei einem Treffer muss das Ziel außerdem einen SG-12-Geschicklichkeitsrettungswurf bestehen oder hat Nachteil auf den ersten Angriffswurf, den es vor Ende seines nächsten Zuges macht." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Floral Dragons"
  }
];
