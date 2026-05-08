window.MONSTER_DATA = [
  {
    name: "Aarakocra",
    art: "Humanoid",
    unterart: "Aarakocra",
    groesse: "Mittelgroß",
    gesinnung: "Neutral gut",
    cr: 0.25, xp: 50,
    rk: 12, ruestungstyp: null,
    tp: 13, tp_wuerfel: "3W8",
    bewegung: { "Gehen": "6 m", "Fliegen": "15 m" },
    attribute: { STR: 10, DEX: 14, CON: 10, INT: 11, WIS: 12, CHA: 11 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 5 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: [], passiveWahrnehmung: 15,
    sprachen: ["Aarakocra", "Aural"],
    umgebung: ["Gebirge", "Andere Ebenen"],
    bild: "assets/images/monster/aarakocra.png",
    beschreibung: [
      "Aarakocra durchstreifen den Heulenden Wirbel, einen endlosen Sturm aus mächtigen Winden und peitschendem Regen, der das beschauliche Reich Aaqa auf der Elementarebene der Luft umgibt. Diese vogelartigen Humanoiden fliegen auf Patrouillen aus und bewachen die stürmischen Grenzen ihrer Heimat gegen Eindringlinge aus der Elementarebene der Erde, wie ihre Erzfeinde, die Gargylen.",
      "Feinde des Elementaren Bösen. Im Dienste der Windherzöge von Aaqa erkunden die Aarakocra die Ebenen auf der Suche nach Tempeln des Elementaren Bösen. Sie spionieren bösartige elementare Kreaturen aus und bekämpfen sie dann entweder oder erstatten den Windherzögen Bericht.",
      "Auf der Materiellen Ebene errichten die Aarakocra Horste auf den höchsten Bergen, besonders den Gipfeln in der Nähe zu Portalen zur Elementarebene der Luft. Aus dieser Höhe halten die Aarakocra Ausschau nach Zeichen elementarer Eindringlinge sowie nach entstehenden Gefahren für ihre Heimatebene. Aarakocra ziehen es vor, wie der Wind zu leben – unbeladen und immer in Bewegung – doch bewachen sie Regionen jahrelang, wenn es erforderlich ist, um das Eindringen des Elementaren Bösen zu verhindern.",
      "Aarakocra haben keine Vorstellung von politischen Grenzen oder Landbesitz, und der Wert von Edelsteinen, Gold und anderen kostbaren Materialien bedeutet einem Aarakocra wenig. In ihren Augen sollte ein Wesen nutzen, was notwendig ist, und das, was übrig ist dem Wind überlassen, sodass andere es nutzen können.",
      "Suche nach den Sieben Bruchstücken. Die Windherzöge von Aaqa stammen aus einem Volk elementarer Wesen, die die Vaati genannt werden und die einst viele Welten regierten. Eine Kreatur, die als die Königin des Chaos bekannt ist, erhob sich und begann einen Krieg gegen die Herrschaft der Vaati, der sich über die Ebenen erstreckte. Um die Bedrohung zu bekämpfen, verbanden sieben Vaati-Helden ihre Macht, um das mächtige Zepter des Gesetzes zu erschaffen. In der Schlacht gegen den größten General der Königin, Miska die Wolfsspinne, tötete ein Vaati Miska, indem er ihr das Zepter wie einen Speer in den Leib rammte. Das Zepter zerbrach in sieben Bruchstücke, die über das Multiversum zerstreut wurden.",
      "Aarakocra suchen nun nach den Ruhestätten der sieben Bruchstücke, um das wieder zu vereinen, was heute als das Zepter der Sieben Teile bekannt ist."
    ],
    besonderheiten: [
      { name: "Sturzflugangriff", beschreibung: "Wenn der Aarakocra fliegt, sich in gerader Linie mindestens 9 m auf ein Ziel zubewegt und es mit einem Nahkampf-Waffenangriff trifft, fügt der Angriff dem Ziel zusätzliche 3 (1W6) Schaden zu." },
      { name: "Luftelementare beschwören", beschreibung: "Fünf Aarakocra innerhalb von 9 m zueinander können auf magische Weise einen Luftelementar beschwören. Alle fünf müssen ihre Aktion und Bewegung in drei aufeinanderfolgenden Zügen aufgeben, um einen Tanz in der Luft auszuführen, und müssen ihre Konzentration behalten (als würden sie sich auf einen Zauber konzentrieren). Wenn alle fünf ihren dritten Zug abgeschlossen haben, erscheint der Elementar in einem nicht besetzten Bereich innerhalb von 18 m. Er bleibt für eine Stunde, bis alle Beschwörer getötet wurden oder bis einer der Beschwörer ihn als Bonusaktion fortschickt. Ein Beschwörer kann den Tanz nicht wieder durchführen, bis er eine kurze Rast abschließt. Wenn der Elementar zur Elementarebene der Luft zurückkehrt, können alle Aarakocra innerhalb von 1,5 m um ihn mit ihm zurückkehren." }
    ],
    aktionen: [
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Hiebschaden." },
      { name: "Wurfspeer", beschreibung: "Nahkampf- oder Fernkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m oder 9/36 m, ein Ziel. Treffer: 5 (1W6+2) Stichschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Spielerhandbuch"
  },
  {
    name: "Aaskriecher",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 2, xp: 450,
    rk: 13, ruestungstyp: "natürliche Rüstung",
    tp: 51, tp_wuerfel: "6W10+18",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m" },
    attribute: { STR: 14, DEX: 13, CON: 16, INT: 1, WIS: 12, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 3 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"], passiveWahrnehmung: 13,
    sprachen: [],
    umgebung: ["Unterirdisch", "Sumpf"],
    bild: "assets/images/monster/carrion_crawler.png",
    beschreibung: [
      "Aaskriecher schälen verwesendes Fleisch von Kadavern und schlingen die schleimigen Knochen, die übrig bleiben, herunter. Sie greifen aggressiv jede Kreatur an, die in ihr Revier eindringt oder ihr Festmahl unterbricht.",
      "Ein Aaskriecher folgt dem Geruch des Todes zu seinem Fressen, doch zieht er es vor, sich nicht mit anderen Aasfressern messen zu müssen. Diese verdorbenen Kreaturen lassen sich daher in Gebieten nieder, in denen es zahlreiche Todesfälle gibt und andere Aasfresser in ihrer Bewegung eingeschränkt sind. Höhlen, Kanäle, Gewölbe und bewaldete Sümpfe sind ihre bevorzugten Gebiete, doch Aaskriecher werden auch von Schlachtfeldern und Friedhöfen angezogen.",
      "Ein Aaskriecher streift auf der Jagd umher. Seine Tentakel sondieren die Luft, ob sie Blut oder Verwesung riechen können. In Tunneln oder Ruinen huschen Aaskriecher über die Decke, während sie sich auf diese Weise ihrer Nahrung nähern. Sie meiden den Kontakt mit Schlicken und Otyughs und anderen gefährlichen Bewohnern der Dunkelheit, während sie potentielle Mahlzeiten überraschen, die nicht nach oben geschaut haben.",
      "Egal, ob sie in der unterirdischen Dunkelheit oder bei Nacht jagen, Licht weist immer auf eine potentielle Mahlzeit hin. Ein Aaskriecher könnte einer Lichtquelle in einiger Entfernung folgen, in der Hoffnung, den Geruch von Blut wahrzunehmen. Trotz ihrer Größe können Aaskriecher leicht Hinterhalte legen, indem sie hinter einer schwer einsehbaren Kurve auf Beute warten.",
      "Wenn sie es mit potentieller Beute oder einem Eindringling zu tun haben, lassen Aaskriecher ihr Gift die Arbeit machen. Sobald ein Opfer so sehr gelähmt ist, dass es erstarrt, umschlingt der Aaskriecher es mit seinen Tentakeln und zieht es zu einem höher gelegenen Sims oder abgelegenem Tunnel, wo er es sicher töten kann. Das Monster streift dann weiter durch sein Revier, während es wartet, dass die Mahlzeit den nötigen Reifegrad erreicht."
    ],
    besonderheiten: [
      { name: "Scharfer Geruchssinn", beschreibung: "Der Aaskriecher hat einen Vorteil bei Würfen auf Weisheit (Wahrnehmung), die mit dem Geruchssinn zusammenhängen." },
      { name: "Spinnenklettern", beschreibung: "Der Aaskriecher kann an schwierigen Oberflächen klettern, sogar kopfüber an der Decke, ohne einen Attributswurf ablegen zu müssen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Aaskriecher führt zwei Angriffe aus: einen mit seinen Tentakeln und einen mit seinem Biss." },
      { name: "Tentakel", beschreibung: "Nahkampf-Waffenangriff: +8 zum Treffen, Reichweite 3 m, eine Kreatur. Treffer: 4 (1W4+2) Giftschaden, und das Ziel muss einen Konstitutionsrettungswurf gegen SG 13 ablegen, um nicht für 1 Minute vergiftet zu werden. Solange das Ziel vergiftet ist, ist es außerdem gelähmt. Das Ziel kann den Rettungswurf am Ende eines jeden seiner Züge wiederholen und den Gifteffekt bei einem Erfolg beenden." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (2W4+2) Stichschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Aboleth",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Rechtschaffen böse",
    cr: 10, xp: 5900,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 135, tp_wuerfel: "18W10+36",
    bewegung: { "Gehen": "3 m", "Schwimmen": "12 m" },
    attribute: { STR: 21, DEX: 9, CON: 15, INT: 18, WIS: 15, CHA: 18 },
    rettungswuerfe: { "KON": 6, "INT": 8, "WEI": 6 },
    fertigkeiten: { "Geschichte": 12, "Wahrnehmung": 10 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"], passiveWahrnehmung: 20,
    sprachen: ["Tiefensprache", "Telepathie 36 m"],
    umgebung: ["Unterwasser", "Unterirdisch", "Andere Ebenen"],
    bild: "assets/images/monster/aboleth.png",
    beschreibung: [
      "Ehe die Götter kamen, hausten die Abolethen in den urtümlichen Ozeanen und unterirdischen Seen. Sie streckten ihren Geist aus und übernahmen die Kontrolle über die aufkeimenden Lebensformen der sterblichen Welt, um die Kreaturen zu ihren Sklaven zu machen. Ihre Vorherrschaft ließ sie wie Götter erscheinen. Dann kamen die wahren Götter, zerschmetterten das Imperium der Abolethen und befreiten ihre Sklaven. Die Abolethen haben das niemals vergessen.",
      "Abolethen haben ein makelloses Gedächtnis. Sie geben ihr Wissen und ihre Erfahrungen von Generation zu Generation weiter. Somit bleibt die Schmach ihrer Niederlage gegen die Götter in ihrem Geist perfekt konserviert. Die Gedanken der Abolethen sind eine Schatzkammer uralten Wissens, und sie erinnern sich mit perfekter Klarheit an Augenblicke aus der Zeit vor Anbeginn der Geschichte. Ihre geduldigen Intrigen dauern Äonen an. Wenige Kreaturen können die Pläne eines Abolethen auch nur überblicken.",
      "Abolethen leben im Wasser, zum Beispiel in Schluchten im Meer, tiefen Seen und auf der Elementarebene des Wassers. In diesen Domänen und den Ländern, die an sie angrenzen, sind die Abolethen wie Götter. Sie verlangen Anbetung und Gehorsam von ihren Untertanen. Wenn sie andere Kreaturen verschlingen, fügen Abolethen das Wissen und die Erfahrungen ihrer Beute ihrem ewigen Gedächtnis hinzu. Abolethen nutzen ihre telepathischen Fähigkeiten, um die Gedanken von Kreaturen zu lesen und ihre Begierden zu erfahren. Ein Aboleth nutzt dieses Wissen, um die Loyalität einer Kreatur zu verlangen, indem er anbietet, die Bedürfnisse zu erfüllen, wenn sie gehorsam ist.",
      "Der Sturz der Abolethen ist in absoluter Klarheit in ihr perfektes Gedächtnis geschrieben, denn Abolethen sterben niemals wirklich. Wenn der Körper eines Abolethen zerstört wird, kehrt sein Geist zur Elementarebene des Wassers zurück, wo sich über Tage oder Monate ein neuer Körper formt. Letztlich träumen Abolethen davon, die Götter zu stürzen und die Kontrolle über die Welt zurückzuerlangen. Sie hatten unzählige Äonen Zeit, um zu intrigieren und ihre Pläne für eine perfekte Hinrichtung vorzubereiten.",
      "Abolethen hausen in unterirdischen Seen oder den felsigen Tiefen des Ozeans, oft umgeben von den Ruinen einer uralten, gefallenen Abolethen-Stadt. Ein Aboleth verbringt den Großteil seiner Existenz unter Wasser und kommt nur gelegentlich an die Oberfläche, um mit Besuchern oder wahnsinnigen Anhängern zu verhandeln."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Aboleth kann Luft und Wasser atmen." },
      { name: "Schleimwolke", beschreibung: "Solange sich ein Aboleth unter Wasser befindet, ist er von einer Wolke aus verwandelndem Schleim umgeben. Eine Kreatur, die den Aboleth berührt oder ihn mit einem Nahkampfangriff trifft, solange sie sich innerhalb von 1,5 m um ihn befindet, muss einen Konstitutionsrettungswurf gegen SG 14 ablegen. Bei einem Fehlschlag ist die Kreatur für 1W4 Stunden krank. Die kranke Kreatur kann nur unter Wasser atmen." },
      { name: "Sondierende Telepathie", beschreibung: "Wenn eine Kreatur telepathisch mit dem Aboleth kommuniziert, erfährt der Aboleth, was die größte Begierde der Kreatur ist, wenn er die Kreatur sehen kann." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Aboleth führt drei Tentakel-Angriffe aus." },
      { name: "Tentakel", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 12 (2W6+5) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss sie einen Konstitutionsrettungswurf gegen SG 14 schaffen, sonst erleidet sie den Zustand krank. Die Krankheit hat für 1 Minute keinen Effekt und kann von jeder Magie entfernt werden, die Krankheiten heilt. Nach einer Minute wird die Haut der Kreatur transparent und schleimig, die Kreatur kann keine Trefferpunkte zurückerlangen, wenn sie nicht unter Wasser ist, und die Krankheit kann nur von Heilung oder anderen Zaubern, die Krankheiten heilen und den 6. Grad oder höher haben, entfernt werden. Wenn die Kreatur sich außerhalb des Wassers befindet, erleidet sie alle 10 Minuten 6 (1W12) Säureschaden, wenn vor dem Verstreichen der 10 Minuten keine Feuchtigkeit auf die Haut aufgetragen wird." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (3W6+5) Wuchtschaden." },
      { name: "Versklaven (3/Tag)", beschreibung: "Der Aboleth wählt eine Kreatur innerhalb von 9 m um sich aus, die er sehen kann. Das Ziel muss einen Weisheitsrettungswurf gegen SG 14 schaffen, um nicht magisch vom Abolethen bezaubert zu werden, bis der Aboleth stirbt oder sich auf einer anderen Existenzebene als das Ziel befindet. Das bezauberte Ziel steht unter der Kontrolle des Aboleths und kann keine Reaktionen ausführen, und der Aboleth und das Ziel können über eine beliebige Entfernung telepathisch miteinander kommunizieren. Wenn das bezauberte Ziel Schaden erleidet, kann es den Rettungswurf wiederholen. Bei einem Erfolg endet der Effekt. Nicht mehr als einmal alle 24 Stunden kann das Ziel den Rettungswurf auch wiederholen, wenn es sich mindestens 1,5 km vom Aboleth entfernt befindet." }
    ],
    bonusaktionen: [], reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Aboleth macht einen Wurf auf Weisheit (Wahrnehmung)." },
      { name: "Schwanzfeger", beschreibung: "Der Aboleth macht einen Angriff mit seinem Schwanz." },
      { name: "Psychisches Aussaugen (kostet 2 Aktionen)", beschreibung: "Eine Kreatur, die vom Aboleth bezaubert worden ist, erleidet 10 (3W6) psychischen Schaden, und der Aboleth erhält Trefferpunkte gleich dem Schaden zurück, den die Kreatur erlitten hat." }
    ],
    hortaktionen: {
      beschreibung: "Wenn ein Aboleth in seinem Hort kämpft, kann er die Umgebungsmagie nutzen, um Hortaktionen durchzuführen. Bei Initiative 20 (er verliert alle Initiative-Gleichstände) führt der Aboleth eine Hortaktion aus, um eine der folgenden Effekte zu verursachen:",
      aktionen: [
        "Der Aboleth kann Macht der Vorstellungskraft (keine Komponenten notwendig) auf eine beliebige Anzahl von Kreaturen innerhalb von 18 m, die er sehen kann, wirken. Solange sich der Aboleth auf diesen Effekt konzentriert, kann er keine anderen Hortaktionen ausführen. Wenn das Ziel den Rettungswurf schafft oder der Effekt für es endet, ist das Ziel für die nächsten 24 Stunden gegen diese Hortaktion des Abolethen immun, doch kann die Kreatur sich absichtlich dem Effekt hingeben.",
        "Alle Wasserflächen innerhalb von 27 m um den Aboleth branden in einer zupackenden Flut nach draußen. Alle Kreaturen auf dem Boden innerhalb von 6 m um eine solche Wasserfläche müssen einen Stärkerettungswurf gegen SG 14 schaffen, um nicht bis 6 m in Richtung des Wassers gezogen zu werden und den Zustand liegend zu erleiden. Der Aboleth kann diese Hortaktion erst wieder verwenden, wenn er vorher eine andere benutzt hat.",
        "Das Wasser in der Behausung des Abolethen wird auf magische Weise zu einem Kanal für den Zorn der Kreatur. Der Aboleth kann eine beliebige Anzahl von Kreaturen in solchem Wasser und innerhalb von 27 m als Ziel bestimmen. Ziele müssen einen Weisheitsrettungswurf gegen SG 14 schaffen, sonst erleiden sie 7 (2W6) psychischen Schaden. Der Aboleth kann diese Hortaktion erst wieder verwenden, wenn er vorher eine andere benutzt hat."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region, in der sich die Behausung eines Abolethen befindet, wird von der Anwesenheit der Kreatur verzerrt, was einen oder mehrere der folgenden Effekte auslöst:",
      effekte: [
        "Unterirdische Oberflächen innerhalb von 1,5 km um die Behausung des Abolethen sind schleimig und nass und zählen als schwieriges Gelände.",
        "Wasserquellen innerhalb von 1,5 km um die Behausung sind auf magische Weise verdorben. Feinde des Abolethen, die solches Wasser trinken, übergeben sich nach wenigen Minuten.",
        "Als Aktion kann der Aboleth ein illusionäres Bildnis von sich selbst innerhalb von 1,5 km um die Behausung erschaffen. Die Kopie kann an jedem Ort erscheinen, den der Aboleth schon einmal gesehen hat oder an jedem Ort, den eine Kreatur, die der Aboleth bezaubert hat, aktuell sehen kann. Sobald das Bild erschaffen ist, hält es so lange an, wie der Aboleth sich darauf konzentriert, als würde er sich auf einen Zauber konzentrieren. Auch wenn das Bild nicht greifbar ist, sieht es genauso aus wie der Aboleth, klingt und bewegt sich wie er. Der Aboleth kann von der Position des Bildes aus wahrnehmen, sprechen und Telepathie verwenden, als wäre er selbst dort anwesend. Wenn das Bildnis Schaden erleidet, verschwindet es.",
        "Wenn der Aboleth stirbt, schwinden die ersten beiden Effekte innerhalb von 3W10 Tagen."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Allosaurus",
    art: "Tier",
    unterart: "Dinosaurier",
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 2, xp: 450,
    rk: 13, ruestungstyp: "natürliche Rüstung",
    tp: 51, tp_wuerfel: "6W10+18",
    bewegung: { "Gehen": "18 m" },
    attribute: { STR: 19, DEX: 13, CON: 17, INT: 2, WIS: 12, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 5 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: [], passiveWahrnehmung: 15,
    sprachen: [],
    umgebung: ["Tropisch", "Wald", "Grasland"],
    bild: "assets/images/monster/allosaurus.png",
    beschreibung: [
      "Der Allosaurus ist ein sehr großes, starkes und schnelles Raubtier. Er kann im freien Gelände fast jede Beute verfolgen und springt, um Kreaturen mit seinen bösartigen Kiefern zu Boden zu reißen."
    ],
    besonderheiten: [
      { name: "Anspringen", beschreibung: "Wenn sich der Allosaurus mindestens 9 m in gerader Linie auf ein Ziel zu bewegt und dann im gleichen Zug mit seinen Klauen angreift, dann muss das Ziel einen Stärkerettungswurf gegen SG 13 schaffen, um nicht den Zustand liegend zu erleiden. Wenn das Ziel liegt, kann der Allosaurus gegen das Ziel einen Biss-Angriff als Bonusaktion durchführen." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 15 (2W10+4) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W8+4) Hiebschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Ankylosaurus",
    art: "Tier",
    unterart: "Dinosaurier",
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 3, xp: 700,
    rk: 15, ruestungstyp: "natürliche Rüstung",
    tp: 68, tp_wuerfel: "8W12+16",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 19, DEX: 11, CON: 15, INT: 2, WIS: 12, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: [], passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Tropisch", "Wald", "Grasland"],
    bild: "assets/images/monster/ankylosaurus.png",
    beschreibung: [
      "Dicke Panzerplatten bedecken den Körper des pflanzenfressenden Ankylosaurus, der sich gegen Raubtiere mit einem knubbeligen Schwanz verteidigt, mit dem er vernichtende Schläge austeilen kann. Einige Varianten von Ankylosauriern haben Stachelschwänze, die Stichschaden anstelle von Wuchtschaden verursachen."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 18 (4W6+4) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss sie einen Stärkerettungswurf gegen SG 14 schaffen, sonst erleidet sie den Zustand liegend." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Ankheg",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 2, xp: 450,
    rk: 14, ruestungstyp: "natürliche Rüstung; 11 wenn liegend",
    tp: 39, tp_wuerfel: "6W10+6",
    bewegung: { "Gehen": "9 m", "Graben": "3 m" },
    attribute: { STR: 17, DEX: 11, CON: 13, INT: 1, WIS: 13, CHA: 6 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m", "Erschütterungssinn 18 m"], passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Grasland", "Wald"],
    bild: "assets/images/monster/ankheg.png",
    beschreibung: [
      "Ein Ankheg erinnert an ein gewaltiges, vielbeiniges Insekt. Seine langen Fühler zucken in Reaktion auf Bewegungen in seiner Umgebung. Seine Beine enden in scharfen Haken, die perfekt dafür geeignet sind, zu graben und seine Beute zu packen, und seine mächtigen Fresswerkzeuge können einen kleinen Baum zerteilen. Der Ankheg nutzt seine mächtigen Fresswerkzeuge, um verschlungene Tunnel tief unter die Erde zu graben. Wenn er jagt, gräbt sich ein Ankheg nach oben und wartet unter der Oberfläche, bis seine Fühler Bewegungen von oben wahrnehmen. Dann bricht er aus der Erde hervor und packt seine Beute mit seinen Fresswerkzeugen, zermalmt und zerreißt sie, während er ätzende Verdauungsenzyme absondert. Diese Enzyme helfen dabei, ein Opfer schnell aufzulösen, damit es verschlungen werden kann, doch kann der Ankheg auch Säure spritzen, um seine Feinde auszuschalten.",
      "Auch wenn Ankhegs einen Teil ihrer Nährstoffe aus der Erde ziehen, durch die sie sich graben, müssen sie ihre Ernährung doch mit frischem Fleisch ergänzen. Weiden voller grasendem Vieh und Wälder voller Jagdwild sind die wichtigsten Jagdgebiete der Ankhegs. Ankhegs sind somit eine Plage für Bauern und Waldläufer überall.",
      "Wenn sich der Ankheg durch die Erde gräbt, hinterlässt er einen schmalen, zum Teil eingestürzten Tunnel hinter sich. In diesen Tunneln könnte man die Überreste von abgeworfenem Ankheg-Chitin, geschlüpfte Ankheg-Eier oder die grausigen Überreste der Opfer der Ankhegs finden, darunter auch Münzen und Schätze, die durch die Angriffe der Kreatur verstreut worden sind."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W6+3) Hiebschaden plus 3 (1W6) Säureschaden. Wenn das Ziel eine große oder kleinere Kreatur ist, wird es gepackt (SG zum Entkommen 13). Bis der Haltegriff endet, kann der Ankheg nur die gepackte Kreatur beißen und hat einen Vorteil bei seinen Angriffswürfen, wenn er es tut." },
      { name: "Sprühende Säure (Aufladung 6)", beschreibung: "Der Ankheg spuckt Säure in einer Linie, die 9 m lang und 1,5 m breit ist, vorausgesetzt, dass er keine Kreatur gepackt hat. Alle Kreaturen in der Linie müssen einen Geschicklichkeitsrettungswurf gegen SG 13 ablegen. Bei einem misslungenen Rettungswurf erleiden sie 10 (3W6) Säureschaden, halb so viel Schaden bei einem erfolgreichen Rettungswurf." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Atterkopp",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 2, xp: 450,
    rk: 13, ruestungstyp: "natürliche Rüstung",
    tp: 44, tp_wuerfel: "8W8+8",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m" },
    attribute: { STR: 14, DEX: 15, CON: 13, INT: 7, WIS: 12, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 4, "Überleben": 3, "Wahrnehmung": 3 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"], passiveWahrnehmung: 13,
    sprachen: [],
    umgebung: ["Wald"],
    bild: "assets/images/monster/atterkopp.png",
    beschreibung: [
      "Atterkopps sind humanoide Spinnen, die sich um andere Spinnen kümmern, sie füttern und im Auge behalten, so wie ein Hirte seine Schafe bewacht. Sie hausen tief in abgelegenen Wäldern. Feine Seidenfäden schießen aus Drüsen im Unterleib des Atterkopps, sodass er klebrige Netzstränge abfeuern kann, um seine Opfer zu fesseln, zu fangen oder zu erwürgen. Sie verwenden ihre Netze auch, um komplexe Schlingen und Fallen zu erschaffen, mit denen sie ihre Behausung schützen.",
      "Wenn Reisende und Entdecker in das Territorium von Atterkopps gelangen, pirschen die Atterkopps hinter ihnen her. Einige sterben, wenn sie blind in Fallen oder Bereiche des Waldes laufen, die von Netzen abgeschnitten sind. Andere strangulieren die Atterkopps mit Strängen aus Netz oder töten sie mit ihrem giftigen Biss.",
      "Auch wenn sie in der Wildnis hausen, haben Atterkopps doch kein Bedürfnis danach, im Einklang mit der Natur zu leben. Ein Wald, der mit Atterkopps verseucht ist, verwandelt sich in einen düsteren Ort, erstickt mit Netzen und ist voll von Riesenspinnen, Rieseninsekten und anderen finsteren Raubtieren. Kreaturen, die zu weit in solche Wälder vordringen, verirren sich schnell in einem Irrgarten aus Netzen, in denen die Knochen und verlorenen Schätze der Opfer der Atterkopps baumeln.",
      "Atterkopps sind die natürlichen Feinde von Feenwesen. Die verderbten Geschöpfe legen Netze aus, um Feengeister und Pixies zu fangen, die sie dann gierig verschlingen. Sie umschließen auch die Bäume von Dryaden mit Netzen, im erfolglosen Versuch, die Dryade zu fangen. Sonst eher scheue Feen suchen manchmal die Unterstützung von Fremden, wenn sie sich mit einer Atterkopp-Plage herumschlagen, da sie selbst kaum in der Lage sind, mit diesen bösartigen Wesen fertig zu werden."
    ],
    besonderheiten: [
      { name: "Spinnenklettern", beschreibung: "Der Atterkopp kann an schwierigen Oberflächen klettern und kopfüber von der Decke hängen, ohne dass er einen Attributswurf machen muss." },
      { name: "Netzsinn", beschreibung: "Solange der Atterkopp in Kontakt mit einem Netz ist, kennt er die genaue Position aller anderen Kreaturen, die in Kontakt mit demselben Netz sind." },
      { name: "Netzwandler", beschreibung: "Der Atterkopp ignoriert Bewegungseinschränkungen durch Netze." },
      { name: "Variante: Netzgarrotte", beschreibung: "Einige Atterkopps mögen es, ihre Beute mit Garrotten zu strangulieren, die sie aus Netzen herstellen. Ein derartig bewaffneter Atterkopp erhält folgende Angriffsoption anstelle seiner Klauen — Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, eine mittelgroße oder kleine Kreatur, gegen die der Atterkopp einen Vorteil beim Angriffswurf hat. Treffer: 4 (1W4+2) Wuchtschaden, und das Ziel wird gepackt (SG zum Entkommen 12). Bis der Haltegriff endet, kann das Ziel nicht atmen, und der Atterkopp hat einen Vorteil bei Angriffswürfen gegen das Ziel." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Atterkopp führt zwei Angriffe aus: einen mit seinem Biss und einen mit seinen Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, eine Kreatur. Treffer: 6 (1W8+2) Stichschaden plus 4 (1W8) Giftschaden. Das Ziel muss einen Konstitutionsrettungswurf gegen SG 11 ablegen, um nicht für 1 Minute vergiftet zu werden. Die Kreatur kann den gleichen Rettungswurf am Ende eines jeden Zuges wiederholen und den Effekt auf sich selbst bei einem Erfolg beenden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (2W4+2) Hiebschaden." },
      { name: "Netz (Aufladung 5–6)", beschreibung: "Fernkampf-Waffenangriff: +4 zum Treffen, Reichweite 9/18 m, eine große oder kleinere Kreatur. Treffer: Die Kreatur wird von den Netzen festgesetzt. Als Aktion kann die festgesetzte Kreatur einen Stärkewurf gegen SG 11 ablegen und entkommt bei einem Erfolg aus dem Netz. Der Effekt endet auch, wenn das Netz zerstört wird. Das Netz hat RK 10, 5 Trefferpunkte, Empfindlichkeit gegen Feuerschaden, und Immunität gegen Wucht- und Giftschaden sowie psychischen Schaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Azer",
    art: "Elementar",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Rechtschaffen neutral",
    cr: 2, xp: 450,
    rk: 17, ruestungstyp: "natürliche Rüstung, Schild",
    tp: 39, tp_wuerfel: "6W8+12",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 17, DEX: 12, CON: 15, INT: 12, WIS: 13, CHA: 10 },
    rettungswuerfe: { "KON": 4 },
    fertigkeiten: {},
    schadensresistenzen: [], schadensimmunitaeten: ["Feuer", "Gift"], verwundbarkeiten: [], zustandsimmunitaeten: ["Vergiftet"],
    sinne: [], passiveWahrnehmung: 11,
    sprachen: ["Ignal"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/azer.png",
    beschreibung: [
      "Azer sind in der Elementarebene des Feuers heimisch. Sie sind meisterliche Handwerker, Bergarbeiter und Erzfeinde der Ifrit. Dem Aussehen nach ähnelt ein Azer einem männlichen Zwerg, doch ist dies nur eine Fassade. Unter seiner metallisch aussehenden Haut ist ein Azer ein Wesen aus Feuer, das sich nach außen in seinem feurigen Haar und Bart manifestiert.",
      "Azer pflanzen sich nicht fort. Sie werden von einem anderen Azer aus Bronze erschaffen und mit einem Teil der inneren Flamme des Erschaffers erfüllt. Jeder Azer wird mit einzigartigen Gesichtszügen geformt. Dieser Herstellungsprozess schränkt das Wachstum der Azer-Bevölkerung ein und ist der Hauptgrund, dass diese Wesen selten bleiben.",
      "Azer leben in einem Königreich an der Grenze zwischen der Elementarebene der Erde und der Elementarebene des Feuers – ein Gebirgs- und Vulkanzug, dessen Gipfel sich als eine Reihe von Festungen erheben. Unter den Berggipfeln, unter den Vulkankratern und zwischen Flüssen aus Magma bauen die Azer in der Erde glänzende Metalle und glitzernde Juwelen ab. Trupps der Azer patrouillieren die Pässe und Tunnel ihres Reichs und wehren die Salamander-Plünderer ab, deren Ifrit-Meister Überfälle gegen das Azer-Königreich anordnen.",
      "Vor langer Zeit waren die Ifrit und die Azer Verbündete. Azer halfen dabei, die Stadt aus Messing zu bauen und die Heimat der Ifrit zu einem der wundervollsten Orte in der Schöpfung zu machen. Als die Azer ihre Arbeit abgeschlossen hatten, verrieten die Ifrit sie, indem sie erfolglos versuchten, die Azer zu versklaven und so die Geheimnisse ihrer Stadt zu beschützen. Trotz gelegentlicher Überfälle und Scharmützel haben die beiden Seiten bislang von offenen Konflikten abgesehen. Die Azer glauben, dass nur die Drohung, dass sie die verborgenen Wege in die Stadt aus Messing offenbaren könnten, die Ifrit im Zaum hält.",
      "Azer sind meisterliche Handwerker und erschaffen wunderbare Werke aus Juwelen und Edelmetallen, die sie in ihrer vulkanischen Heimat finden. Diese Schätze sind ihnen mehr wert als alle anderen Dinge, und manchmal schicken sie Gruppen durch die Ebenen, um seltene Metalle und Edelsteine zu suchen. Wenn Azer mit Magie zur Materiellen Ebene gerufen werden, dann normalerweise, um dabei zu helfen, einen ausgefeilten magischen Gegenstand oder ein Kunstwerk zu erschaffen, denn es heißt, dass ihr Können bei solchen Aufgaben nicht seinesgleichen kennt.",
      "Ein Azer braucht weder Nahrung noch Wasser oder Schlaf."
    ],
    besonderheiten: [
      { name: "Erhitzter Körper", beschreibung: "Eine Kreatur, die den Azer berührt oder ihn mit einem Nahkampfangriff trifft, solange sie sich innerhalb von 1,5 m um ihn befindet, erleidet 5 (1W10) Feuerschaden." },
      { name: "Erhitzte Waffen", beschreibung: "Wenn der Azer mit einer Waffe trifft, verursacht die Waffe zusätzlich 3 (1W6) Feuerschaden (in den Angriff bereits eingerechnet)." },
      { name: "Beleuchtung", beschreibung: "Der Azer gibt in einem Radius von 3 m helles Licht und in einem weiteren Radius von 3 m schwaches Licht ab." }
    ],
    aktionen: [
      { name: "Kriegshammer", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W8+3) Wuchtschaden, oder 8 (1W10+3) Wuchtschaden wenn die Waffe mit beiden Händen geführt wird, plus 3 (1W6) Feuerschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Basilisk",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 3, xp: 700,
    rk: 15, ruestungstyp: "natürliche Rüstung",
    tp: 52, tp_wuerfel: "8W8+16",
    bewegung: { "Gehen": "6 m" },
    attribute: { STR: 16, DEX: 8, CON: 15, INT: 2, WIS: 8, CHA: 7 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"], passiveWahrnehmung: 9,
    sprachen: [],
    umgebung: ["Unterirdisch", "Wüste", "Gebirge"],
    bild: "assets/images/monster/basilisk.png",
    beschreibung: [
      "Reisende finden manchmal Objekte, die wie bemerkenswert lebensechte Steinstatuen von wilden Tieren aussehen. Fehlende Teile scheinen abgebissen worden zu sein. Erfahrene Entdecker sehen solche Exemplare als Warnung, da sie wissen, dass der Basilisk, der sie erschaffen hat, wahrscheinlich in der Nähe ist.",
      "Basilisken gedeihen in trockenen, gemäßigten oder tropischen Umgebungen. Sie hausen in Höhlen oder anderen geschützten Orten. Meistens trifft man Basilisken unter der Erde an. Ein Basilisk, der in Gefangenschaft geboren und aufgezogen wird, kann gezähmt und ausgebildet werden. Solche zahmen Basilisken wissen, wie sie den Blick jener meiden, die ihr Meister vor ihren Augen schützen möchte, doch ist er ein bedrohliches Wachtier. Aus diesem Grund sind Basiliskeneier hoch geschätzt.",
      "Basilisken sind schwerfällig für Raubtiere, doch sie müssen ihre Beute gar nicht hetzen. Den übernatürlichen Blick eines Basilisken zu sehen, kann ausreichen, um eine schnelle Verwandlung auszulösen, bei der das Opfer zu porösem Stein wird. Basilisken können dann mit ihren starken Kiefern den Stein verzehren. Der Stein kehrt im Bauch des Basilisken wieder zu seiner organischen Form zurück. Einige Alchimisten sollen wissen, wie sie den Magen des Basilisken und die darin verarbeiteten Säfte verarbeiten können. Wenn er richtig behandelt wird, erzeugt der Magen ein Öl, das versteinerte Kreaturen wieder in Fleisch verwandelt und zum Leben erweckt. Unglücklicherweise kehren alle Teile, die solche Opfer in der Steingestalt verloren haben, nicht zurück. Die Wiederbelebung mit dem Öl ist nicht möglich, wenn ein lebenswichtiger Teil der versteinerten Kreatur, wie der Kopf, entfernt worden ist."
    ],
    besonderheiten: [
      { name: "Versteinernder Blick", beschreibung: "Wenn eine Kreatur ihren Zug innerhalb von 9 m um den Basilisken beginnt und die beiden einander sehen können, kann der Basilisk die Kreatur zwingen, einen Konstitutionsrettungswurf gegen SG 12 abzulegen, wenn er nicht kampfunfähig ist. Bei einem misslungenen Rettungswurf beginnt sich die Kreatur magisch in Stein zu verwandeln und ist festgesetzt. Sie muss den Rettungswurf am Ende ihres nächsten Zugs wiederholen. Bei einem Erfolg endet der Effekt. Bei einem Fehlschlag wird die Kreatur versteinert, bis sie mit dem Zauber Vollständige Genesung oder anderer Magie befreit wird. Eine Kreatur, die nicht überrascht ist, kann die Augen abwenden, um zu Beginn des nächsten Zuges den Rettungswurf zu vermeiden. Wenn sie dies tut, kann sie den Basilisken bis zum Beginn ihres nächsten Zuges nicht sehen, und kann dann wieder die Augen abwenden. Wenn sie in der Zwischenzeit den Basilisken anblickt, muss sie den Rettungswurf sofort ablegen. Wenn der Basilisk in hellem Licht eine Spiegelung von sich selbst innerhalb von 9 m sieht, hält er sich für einen Rivalen und greift sich selbst mit dem Blick an." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W6+3) Stichschaden plus 7 (2W6) Giftschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Baumhirte",
    art: "Pflanze",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Chaotisch gut",
    cr: 9, xp: 5000,
    rk: 16, ruestungstyp: "natürliche Rüstung",
    tp: 138, tp_wuerfel: "12W12+60",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 23, DEX: 8, CON: 21, INT: 12, WIS: 16, CHA: 12 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Stich", "Wucht"], schadensimmunitaeten: [], verwundbarkeiten: ["Feuer"], zustandsimmunitaeten: [],
    sinne: [], passiveWahrnehmung: 13,
    sprachen: ["Gemeinsprache", "Druidisch", "Elfisch", "Sylvanisch"],
    umgebung: ["Wald"],
    bild: "assets/images/monster/baumhirte.png",
    beschreibung: [
      "Baumhirten sind erwachte Bäume, die in uralten Wäldern leben. Auch wenn Baumhirten es vorziehen, ihre Tage, Monate und Jahre in stiller Kontemplation zu verbringen, beschützen sie ihre Walddomänen brutal vor Bedrohungen von außen.",
      "Ein Baum, dessen Schicksal es ist, ein Baumhirte zu werden, meditiert durch einen langen Zyklus von Jahreszeiten und lebt normalerweise für Jahrzehnte oder Jahrhunderte, ehe er sein Potential erkennt. Bäume, die erwachen, tun dies unter besonderen Umständen und an Orten, die von Magie erfüllt sind. Baumhirten und mächtige Druiden können spüren, wenn ein Baum den Funken dieses Potenzials in sich trägt, und sie schützen solche Bäume in geheimen Hainen, wenn sie sich dem Augenblick des Erwachens nähern. Während dieses langen Prozesses des Erwachens entwickelt der Baum gesichtsartige Merkmale auf seiner Rinde, der untere Stamm teilt sich zu Beinen, und lange Zweige beugen sich herab, um zu Armen zu werden. Wenn der Baum bereit ist, zieht er seine Beine aus der greifenden Erde und schließt sich seinesgleichen an, um den Wald zu schützen.",
      "Nachdem ein Baumhirte erwacht ist, wächst er genauso weiter, als sei er ein Baum. Baumhirten, die aus den mächtigsten Bäumen erschaffen werden, können sehr groß werden, während sie eine angeborene magische Macht über Pflanzen und Tiere erlangen. Solche Baumhirten können Pflanzen beleben und sie nutzen, um Eindringlinge zu umschlingen und zu fangen. Sie können wilde Kreaturen zur Unterstützung rufen oder Botschaften über große Entfernungen überbringen.",
      "Selbst nach dem Erwachen verbringt ein Baumhirte den Großteil seines Lebens als Baum. Solange er verwurzelt ist, ist sich ein Baumhirte seiner Umgebung bewusst, und er kann die Auswirkungen von Ereignissen, die Kilometer entfernt stattfinden, anhand von subtilen Veränderungen in seiner Nähe spüren. Holzfäller, die es meiden, gesunde Bäume zu schlagen, und Jäger, die nur das, was sie brauchen, vom Reichtum des Waldes nehmen, werden vermutlich nicht den Zorn eines Baumhirten erwecken. Kreaturen, die sorglos mit Feuer umgehen, die den Wald vergiften und die große Bäume zerstören, besonders Bäume, die kurz vor dem Erwachen stehen, müssen sich dem Zorn des Baumhirten stellen."
    ],
    besonderheiten: [
      { name: "Falsches Erscheinungsbild", beschreibung: "Solange der Baumhirte bewegungslos bleibt, ist er nicht von einem normalen Baum zu unterscheiden." },
      { name: "Belagerungsmonster", beschreibung: "Der Baumhirte fügt Gegenständen und Bauwerken doppelten Schaden zu." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Baumhirte führt zwei Hieb-Angriffe durch." },
      { name: "Hieb", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 16 (3W6+6) Wuchtschaden." },
      { name: "Felsbrocken", beschreibung: "Fernkampf-Waffenangriff: +10 zum Treffen, Reichweite 18/54 m, ein Ziel. Treffer: 28 (4W10+6) Wuchtschaden." },
      { name: "Bäume beleben (1/Tag)", beschreibung: "Der Baumhirte belebt magisch einen oder zwei Bäume innerhalb von 18 m, die er sehen kann. Diese Bäume haben die gleichen Spielwerte wie ein Baumhirte, allerdings mit Intelligenz und Charisma 7, sie können nicht sprechen und haben nur die Aktionsoption Hieb verfügbar. Ein belebter Baum ist ein Verbündeter des Baumhirten. Der Baum bleibt für 1 Tag aktiv, oder bis er stirbt, bis der Baumhirte stirbt oder sich mehr als 36 m vom Baum entfernt, oder bis der Baumhirte eine Bonusaktion verwendet, um ihn in einen unbelebten Baum zurückzuverwandeln. Der Baum wurzelt dann, wenn es möglich ist." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Balor",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Riesig",
    gesinnung: "Chaotisch böse",
    cr: 19, xp: 22000,
    rk: 19, ruestungstyp: "natürliche Rüstung",
    tp: 262, tp_wuerfel: "21W12+126",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 26, DEX: 15, CON: 22, INT: 20, WIS: 16, CHA: 22 },
    rettungswuerfe: { STR: 14, KON: 12, WEI: 9, CHA: 12 },
    fertigkeiten: {},
    schadensresistenzen: ["Blitz", "Kälte", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    schadensimmunitaeten: ["Feuer", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Wahre Sicht 36 m"], passiveWahrnehmung: 13,
    sprachen: ["Abyssisch", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/balor.png",
    beschreibung: [
      "Balors sind Wesen des uralten und schrecklichen Bösen. Sie befehligen als Generäle die Armeen der Dämonen und gieren nach Macht, während sie alle Kreaturen zerstören, die sich ihnen in den Weg stellen. Balors führen eine flammende Peitsche und ein Langschwert, das die Macht des Sturms kanalisiert. Ihre Kampfkraft wird von Hass und Wut angetrieben. Sie kanalisieren in ihren Todeszuckungen diesen dämonischen Zorn und fallen in einer Explosion aus Feuer, die selbst die härtesten Feinde niederstrecken kann."
    ],
    besonderheiten: [
      { name: "Todeszuckungen", beschreibung: "Wenn ein Balor stirbt, explodiert er, und alle Kreaturen innerhalb von 9 m um ihn müssen einen Geschicklichkeitsrettungswurf gegen SG 20 ablegen. Bei einem misslungenen Rettungswurf erleiden sie 70 (20W6) Feuerschaden, halb so viel Schaden bei einem erfolgreichen Rettungswurf. Die Explosion entzündet brennbare Gegenstände in diesem Bereich, die nicht getragen oder in der Hand gehalten werden, und zerstört die Waffen des Balors." },
      { name: "Feueraura", beschreibung: "Zu Beginn eines jeden Zuges des Balors erleiden alle Kreaturen innerhalb von 1,5 m um ihn 10 (3W6) Feuerschaden. Brennbare Gegenstände in der Aura, die nicht getragen oder in der Hand gehalten werden, gehen in Flammen auf. Eine Kreatur, die den Balor berührt oder ihn mit einem Nahkampfangriff trifft, solange sie sich innerhalb von 1,5 m um ihn befindet, erleidet 10 (3W6) Feuerschaden." },
      { name: "Magieresistenz", beschreibung: "Der Balor hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Magische Waffen", beschreibung: "Die Waffenangriffe des Balors sind magisch." },
      { name: "Variante: Dämonenbeschwörung", beschreibung: "Beschwöre Dämon (1/Tag): Der Dämon entscheidet, was er beschwören will und führt eine magische Beschwörung durch. Ein Balor hat eine Chance von 50%, 1W8 Vrocks, 1W6 Hezrous, 1W4 Glabrezus, 1W3 Nalfeshnees, 1W2 Mariliths oder einen Goristro zu beschwören. Ein beschworener Dämon erscheint in einem nicht besetzten Bereich innerhalb von 18 m um seinen Beschwörer, dient als Verbündeter des Beschwörers und kann selbst keine anderen Dämonen beschwören. Er bleibt für 1 Minute, bis sein Beschwörer getötet worden ist oder bis der Beschwörer ihn als Bonusaktion fortschickt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Balor führt zwei Angriffe aus: einen mit seinem Langschwert und einen mit seiner Peitsche." },
      { name: "Langschwert", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 21 (3W8+8) Hiebschaden plus 13 (3W8) Blitzschaden. Wenn der Balor einen kritischen Treffer erzielt, würfelt er die Schadenswürfel dreimal, nicht nur zweimal." },
      { name: "Peitsche", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 9 m, ein Ziel. Treffer: 15 (2W6+8) Hiebschaden plus 10 (3W6) Feuerschaden, und das Ziel muss einen Konstitutionsrettungswurf gegen SG 20 ablegen, um nicht bis zu 7,5 m in Richtung des Balors gezogen zu werden." },
      { name: "Teleportieren", beschreibung: "Der Balor teleportiert sich magisch zusammen mit der Ausrüstung, die er trägt oder in der Hand hält, bis zu 36 m in einen nicht besetzten Bereich, den er sehen kann." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Barlgura",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 5, xp: 1800,
    rk: 15, ruestungstyp: "natürliche Rüstung",
    tp: 68, tp_wuerfel: "8W10+24",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m" },
    attribute: { STR: 18, DEX: 15, CON: 16, INT: 7, WIS: 14, CHA: 9 },
    rettungswuerfe: { GES: 5, KON: 6 },
    fertigkeiten: { "Heimlichkeit": 5, "Wahrnehmung": 5 },
    schadensresistenzen: ["Blitz", "Feuer", "Kälte"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 15,
    sprachen: ["Abyssisch", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/barlgura.png",
    beschreibung: [
      "Der Barlgura verkörpert die Wildheit und Brutalität des Abyss. Barlguras versammeln sich in Rudeln, um zähere Feinde zu Fall zu bringen, behalten grausige Trophäen ihrer Siege und dekorieren ihr Revier mit solchen Gegenständen. Ein Barlgura sieht aus wie ein massiger Orang-Utan mit einem grässlichen, schlaffen Gesicht und Hauern, die aus seinem Kiefer ragen. Er ist fast 2,5 m groß, hat breite Schultern und wiegt 650 Pfund. Er bewegt sich affenartig über den Boden, klettert aber sehr schnell und geschickt."
    ],
    besonderheiten: [
      { name: "Angeborenes Zauberwirken", beschreibung: "Das Attribut zum Wirken angeborener Zauber für den Barlgura ist Weisheit (Zauberrettungswurf-SG 13). Der Barlgura kann die folgenden Zaubersprüche angeboren wirken, wobei keine Materialkomponenten notwendig sind: jeweils 1/Tag: Macht der Vorstellungskraft, Verstricken; jeweils 2/Tag: Selbstverkleidung, Unsichtbarkeit (nur selbst)." },
      { name: "Unvorsichtig", beschreibung: "Zu Beginn seines Zuges kann der Barlgura einen Vorteil auf alle Nahkampf-Waffenangriffe erhalten, die er während dieses Zuges ausführt, doch Angriffswürfe gegen ihn haben dann bis zum Beginn seines nächsten Zuges ebenfalls einen Vorteil." },
      { name: "Laufender Sprung", beschreibung: "Der Weitsprung des Barlguras reicht bis zu 12 m und sein Hochsprung bis zu 6 m, wenn er Anlauf nehmen kann." },
      { name: "Variante: Dämonenbeschwörung", beschreibung: "Beschwöre Dämon (1/Tag): Der Dämon entscheidet, was er beschwören will und führt eine magische Beschwörung durch. Ein Barlgura hat eine Chance von 30%, einen Barlgura zu beschwören. Ein beschworener Dämon erscheint in einem nicht besetzten Bereich innerhalb von 18 m um seinen Beschwörer, dient als Verbündeter des Beschwörers und kann selbst keine anderen Dämonen beschwören. Er bleibt für 1 Minute, bis sein Beschwörer getötet worden ist oder bis der Beschwörer ihn als Bonusaktion fortschickt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Barlgura führt drei Angriffe aus: einen mit seinem Biss und zwei mit seinen Fäusten." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Stichschaden." },
      { name: "Faust", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 9 (1W10+4) Wuchtschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Behir",
    art: "Monstrosität",
    groesse: "Riesig",
    gesinnung: "Neutral böse",
    cr: 11, xp: 7200,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 168, tp_wuerfel: "16W12+64",
    bewegung: { "Gehen": "15 m", "Klettern": "12 m" },
    attribute: { STR: 23, DEX: 16, CON: 18, INT: 7, WIS: 14, CHA: 12 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 7, "Wahrnehmung": 6 },
    schadensresistenzen: [], schadensimmunitaeten: ["Blitz"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 27 m"], passiveWahrnehmung: 16,
    sprachen: ["Drakonisch"],
    umgebung: ["Unterirdisch", "Gebirge"],
    bild: "assets/images/monster/behir.png",
    beschreibung: [
      "Der schlangenartige Behir kriecht an Böden entlang und erklimmt Wände, um seine Beute zu erreichen. Sein Blitzodem kann die meisten Kreaturen in Asche verwandeln, während mächtigere Feinde in seinen Windungen zerquetscht und lebendig verschlungen werden.",
      "Die monströse Gestalt des Behirs erinnert an eine Kombination aus Tausendfüßler und Krokodil. Seine Schuppenhaut reicht von ultramarin bis dunkelblau und ist an der Unterseite blasser.",
      "Raubtiere der Kavernen. Behirs hausen an Orten, die für andere Kreaturen nicht zugänglich sind. Sie ziehen Orte vor, an denen Eindringlinge eine gefährliche Kletterpartie wagen müssen, um zu ihnen zu gelangen. Tiefe Gruben, Höhlen hoch in Klippen und Kavernen, die man nur durch enge, verschlungene Tunnel erreicht, sind ideale Orte für einen Behir-Angriff. Die zwölf Beine des Behirs erlauben es ihm, ohne Schwierigkeiten durch seinen Unterschlupf zu klettern. Wenn er nicht klettert, bewegt er sich sogar noch schneller, indem er die Beine an den Körper anlegt und wie eine Schlange über den Boden schlittert.",
      "Behirs verschlucken ihre Beute am Stück, worauf eine Phase der Ruhe folgt, in der sie verdauen. Solange sie ruhen, wählen Behirs ein Versteck, wo Eindringlinge in ihren Unterschlupf sie übersehen könnten.",
      "Feinde der Drachen. In lange vergessener Zeit trugen die Riesen und die Drachen einen scheinbar endlosen Krieg aus. Die Sturmriesen erschufen die ersten Behirs als Waffe gegen die Drachen, und die Behirs haben sich einen natürlichen Hass auf die Drachenheit bewahrt. Ein Behir schlägt niemals sein Lager in einer Region auf, in der ein Drache lebt. Wenn ein Drache versucht, einen Hort innerhalb einiger Dutzend Kilometer um den Unterschlupf eines Behirs zu errichten, verspürt der Behir den Drang, den Drachen zu töten oder zu vertreiben. Nur wenn der Drache sich als zu mächtig erweist, um ihn zu bekämpfen, weicht der Behir zurück und sucht sich einen neuen Unterschlupf in größerer Entfernung."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Behir führt zwei Angriffe aus: einen mit seinem Biss und einen Umschlingungs-Angriff." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 22 (3W10+6) Stichschaden." },
      { name: "Umschlingen", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 1,5 m, eine große oder kleinere Kreatur. Treffer: 17 (2W10+6) Wuchtschaden plus 17 (2W10+6) Hiebschaden. Das Ziel wird gepackt (SG zum Entkommen 16), wenn der Behir nicht bereits eine Kreatur umschlingt, und das Ziel wird festgesetzt, bis der Haltegriff endet." },
      { name: "Blitzodem (Aufladung 5–6)", beschreibung: "Der Behir atmet eine Linie aus Blitzen aus, die 6 m lang und 1,5 m breit ist. Alle Kreaturen in der Linie müssen einen Geschicklichkeitsrettungswurf gegen SG 16 ablegen. Bei einem misslungenen Rettungswurf erleiden sie 66 (12W10) Blitzschaden, halb so viel Schaden bei einem erfolgreichen Rettungswurf." },
      { name: "Verschlucken", beschreibung: "Der Behir führt einen Biss-Angriff gegen ein mittelgroßes oder kleineres Ziel aus, das er gepackt hat. Wenn der Angriff trifft, wird das Ziel verschluckt und der Haltegriff endet. Solange ein Ziel verschluckt ist, ist es blind und festgesetzt, hat vollständige Deckung gegen Angriffe und andere Effekte von außerhalb des Behirs, und erleidet 21 (6W6) Säureschaden zu Beginn eines jeden Zugs des Behirs. Ein Behir kann nur eine Kreatur auf einmal verschlucken. Wenn ein Behir durch eine verschluckte Kreatur 30 Schaden oder mehr in einem einzelnen Zug erleidet, muss er am Ende des Zuges einen Konstitutionsrettungswurf gegen SG 14 schaffen oder die Kreatur wieder hochwürgen. Sie landet liegend innerhalb von 3 m um den Behir. Wenn der Behir stirbt, ist die verschluckte Kreatur nicht mehr festgesetzt und kann dem Leichnam entweichen, indem sie 4,5 m Bewegung verwendet. Sie verlässt die Kreatur liegend." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Belebte Rüstung",
    art: "Konstrukt",
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 1, xp: 200,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 33, tp_wuerfel: "6W8+6",
    bewegung: { "Gehen": "7,5 m" },
    attribute: { STR: 14, DEX: 11, CON: 13, INT: 1, WIS: 3, CHA: 1 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [], schadensimmunitaeten: ["Gift", "Psychisch"], verwundbarkeiten: [], zustandsimmunitaeten: ["Bezaubert", "Blind", "Erschöpft", "Gelähmt", "Taub", "Verängstigt", "Vergiftet", "Versteinert"],
    sinne: ["Blindsicht 18 m (über diesen Radius hinaus blind)"], passiveWahrnehmung: 6,
    sprachen: [],
    umgebung: ["Unterirdisch"],
    bild: "assets/images/monster/belebte_rüstung.png",
    beschreibung: [
      "Belebte Gegenstände werden mit mächtiger Magie erschaffen, damit sie den Befehlen ihres Erschaffers folgen können. Wenn sie keine Befehle erhalten, folgen sie dem letzten, den sie erhalten haben, nach besten Möglichkeiten, und können selbstständig agieren, um einfache Anweisungen zu erfüllen. Einige belebte Gegenstände könnten sich fließend unterhalten oder sich eine Persönlichkeit zulegen, die meisten sind aber einfache Automaten.",
      "Diese leere stählerne Hülle scheppert, wenn sie sich bewegt. Die schweren Platten krachen und reiben sich aneinander, wie der rachsüchtige Geist eines gefallenen Ritters. Dieser magische Wächter ist langsam, aber hartnäckig, und wird fast immer aus einer Plattenrüstung erschaffen.",
      "Um sie noch bedrohlicher zu machen, wird die belebte Rüstung oft mit vorformulierter Sprache verzaubert, sodass sie Warnungen aussprechen, Passwörter verlangen oder Rätsel stellen kann. Seltene belebte Rüstungen sind sogar dazu in der Lage, eine echte Konversation zu führen."
    ],
    besonderheiten: [
      { name: "Konstruktnatur", beschreibung: "Ein belebter Gegenstand braucht weder Nahrung noch Wasser oder Schlaf. Die Magie, die einen Gegenstand belebt, wird gebannt, wenn das Konstrukt auf 0 Trefferpunkte fällt. Ein belebter Gegenstand, der auf 0 Trefferpunkte fällt, wird unbelebt und ist zu schwer beschädigt, um noch von großem Nutzen zu sein." },
      { name: "Antimagische Empfindlichkeit", beschreibung: "Die Rüstung wird kampfunfähig, wenn sie sich im Bereich eines Antimagischen Feldes aufhält. Wenn die Rüstung Ziel von Magie bannen wird, muss sie einen Konstitutionsrettungswurf gegen den Zauberrettungswurf-SG des Zauberwirkers ablegen, um nicht für 1 Minute bewusstlos zu werden." },
      { name: "Falsches Erscheinungsbild", beschreibung: "Solange die Rüstung bewegungslos bleibt, kann man sie nicht von einer normalen Rüstung unterscheiden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Rüstung führt zwei Nahkampfangriffe durch." },
      { name: "Hieb", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W6+2) Wuchtschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Beobachter",
    art: "Aberration",
    groesse: "Mittelgroß",
    gesinnung: "Rechtschaffen böse",
    cr: 3, xp: 700,
    rk: 14, ruestungstyp: "natürliche Rüstung",
    tp: 39, tp_wuerfel: "6W8+12",
    bewegung: { "Gehen": "0 m", "Fliegend (Schweben)": "9 m" },
    attribute: { STR: 8, DEX: 14, CON: 14, INT: 13, WIS: 14, CHA: 11 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 6 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: ["Liegend"],
    sinne: ["Dunkelsicht 36 m"], passiveWahrnehmung: 16,
    sprachen: ["Tiefensprache", "Gemeinsprache der Unterreiche", "Telepathie 36 m"],
    umgebung: ["Unterirdisch"],
    bild: "assets/images/monster/beobachter.png",
    beschreibung: [
      "Ein Beobachter ist ein geringerer Betrachter, der mit einem magischen Ritual von einer anderen Existenzebene beschworen wird. Zu den Komponenten des Rituals gehören vier Betrachter-Augenstiele, die von der Magie des Rituals verbraucht werden. Entsprechend hat ein Beobachter vier Augenstiele, zwei an jeder Seite des breiten Auges in der Mitte eines Körpers mit 1,2 m Durchmesser.",
      "Magische Wächter. Ein beschworener Beobachter bewacht für 101 Jahre einen Ort oder Schatz nach Wahl des Beschwörers. Er erlaubt es keiner Kreatur außer dem Beschwörer, den Ort zu betreten oder Zugang zum Gegenstand zu erhalten, es sei denn, der Beschwörer gibt anderweitige Anweisungen. Wenn der Gegenstand gestohlen oder zerstört wird, ehe alle Jahre verstrichen sind, verschwindet der Beobachter. Ansonsten verlässt er niemals seinen Posten.",
      "Durchblitzender Wahnsinn. Auch wenn er sprechen kann, kommuniziert ein Beobachter vor allem durch Telepathie. Er ist höflich, solange er Wache hält, und diskutiert offen seine Anweisungen und seinen Beschwörer. Allerdings reicht eine kurze Unterhaltung mit einem Beobachter aus, um die Macken in seiner Persönlichkeit zu offenbaren, die den Jahren der Isolation entspringen. Er könnte imaginäre Feinde erfinden, über sich selbst in der dritten Person sprechen oder versuchen, die Stimme seines Beschwörers nachzuahmen. Wie jeder Betrachter sieht sich der Beobachter als Inbegriff seiner Art und hat einen intensiven Hass auf andere Beobachter. Wenn sich zwei Beobachter begegnen, kämpfen sie fast immer bis zum Tod.",
      "Vom Dienst befreit. Wenn ein Beobachter seinen Dienst erfüllt hat, kann er tun, was er möchte. Viele lassen sich an dem Ort nieder, den sie zuvor bewacht haben, besonders, wenn ihr Beschwörer gestorben ist. Da der Beobachter nun keinen Daseinszweck mehr hat, kann der Wahnsinn, den er schon während seiner Knechtschaft zeigte, noch weiter gedeihen."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +1 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W6-1) Stichschaden." },
      { name: "Augenstrahlen", beschreibung: "Der Beobachter schießt bis zu zwei der folgenden magischen Augenstrahlen auf eine oder zwei Kreaturen innerhalb von 27 m, die er sehen kann. Er kann jeden Augenstrahl nur einmal pro Zug verwenden. 1. Verwirrungsstrahl — Das Ziel muss einen Weisheitsrettungswurf gegen SG 13 schaffen, sonst kann es bis zum Ende seines nächsten Zugs keine Reaktionen verwenden. In seinem Zug kann sich das Ziel nicht bewegen und verwendet seine Aktion, um einen Nahkampf- oder Fernkampfangriff gegen eine zufällige Kreatur in Reichweite auszuführen. Wenn das Ziel nicht angreifen kann, tut es in seinem Zug nichts. 2. Lähmender Strahl — Die Zielkreatur muss einen Konstitutionsrettungswurf gegen SG 13 ablegen, um nicht für 1 Minute gelähmt zu werden. Das Ziel kann den Rettungswurf am Ende eines jeden seiner Züge wiederholen und den Effekt bei einem Erfolg beenden. 3. Furchtstrahl — Die Zielkreatur muss einen Weisheitsrettungswurf gegen SG 13 ablegen, um nicht für 1 Minute verängstigt zu werden. Das Ziel kann den Rettungswurf am Ende eines jeden seiner Züge wiederholen und den Effekt bei einem Erfolg beenden. Dabei erleidet es einen Nachteil, wenn der Beobachter für das Ziel noch sichtbar ist. 4. Verwundender Strahl — Das Ziel muss einen Konstitutionsrettungswurf gegen SG 13 ablegen. Bei einem misslungenen Rettungswurf erleidet es 16 (3W10) nekrotischen Schaden, halb so viel Schaden bei einem erfolgreichen Rettungswurf." },
      { name: "Nahrung und Wasser erschaffen", beschreibung: "Der Beobachter erschafft auf magische Weise genug Nahrung und Wasser, um sich selbst für 24 Stunden zu ernähren." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Zauberspiegelung", beschreibung: "Wenn der Beobachter einen erfolgreichen Rettungswurf gegen einen Zauber ausführt oder wenn ein Zauberangriff ihn verfehlt, kann der Beobachter eine Kreatur innerhalb von 9 m auswählen, die er sehen kann (auch den Zauberwirker). Der Zauber trifft die ausgewählte Kreatur anstelle des Beobachters. Wenn der Zauber einen Rettungswurf erzwungen hat, legt die Kreatur ihren eigenen Rettungswurf ab. Wenn der Zauber ein Angriff war, wird der Angriffswurf gegen die gewählte Kreatur wiederholt." }
    ],
    legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Betrachter",
    art: "Aberration",
    groesse: "Groß",
    gesinnung: "Rechtschaffen böse",
    cr: 13, xp: 10000,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 180, tp_wuerfel: "19W10+76",
    bewegung: { "Gehen": "0 m", "Fliegend (Schweben)": "6 m" },
    attribute: { STR: 10, DEX: 14, CON: 18, INT: 17, WIS: 15, CHA: 17 },
    rettungswuerfe: { "INT": 8, "WEI": 7, "CHA": 8 },
    fertigkeiten: { "Wahrnehmung": 12 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: ["Liegend"],
    sinne: ["Dunkelsicht 36 m"], passiveWahrnehmung: 22,
    sprachen: ["Tiefensprache", "Gemeinsprache der Unterreiche"],
    umgebung: ["Unterirdisch"],
    bild: "assets/images/monster/betrachter.png",
    beschreibung: [
      "Ein Blick auf einen Betrachter ist genug, um sein verdorbenes, unweltliches Wesen zu erkennen. Diese Aberrationen sind aggressiv, hasserfüllt und gierig und behandeln alle anderen Kreaturen wie niedere Geschöpfe. Sie spielen mit ihnen oder zerstören sie, wie es ihnen gefällt.",
      "Der kugelförmige Körper des Betrachters schwebt zu jedem Zeitpunkt, und sein großes, glotzendes Auge sitzt über einem breiten, zahnigen Schlund, während die kleineren Augenstiele, die seinen Körper krönen, sich drehen und winden, um Feinde zu beobachten. Wenn ein Betrachter schläft, schließt er das zentrale Auge, doch die kleineren Augen bleiben offen und wachsam.",
      "Xenophobe Isolationisten. Jeder Betrachter glaubt, dass überall Feinde zu finden sind. Betrachter sind überzeugt, dass andere Wesen sie für ihre Genialität und magische Macht verabscheuen, selbst während sie diese niederen Kreaturen als krude und abstoßend abtun. Betrachter vermuten immer, dass andere gegen sie intrigieren, selbst wenn keine anderen Kreaturen in der Nähe sind. Die Abscheu, die ein Betrachter für andere Kreaturen empfindet, bezieht sich auch auf andere Betrachter. Jeder Betrachter glaubt, dass seine Gestalt ideal ist, und dass jede Abweichung von dieser Gestalt ein Makel in der Reinheit seiner Rasse darstellt.",
      "Augentyrann. Einige Betrachter schaffen es, ihre xenophoben Tendenzen in schrecklichen Despotismus zu verwandeln. Anstatt in Isolation zu leben, versklaven die passend benannten Augentyrannen andere Kreaturen, um gewaltige Imperien zu gründen und zu beherrschen. Ein Augentyrann errichtet manchmal eine Domäne in oder unter einer großen Stadt und befehligt Netzwerke von Agenten, die auf das Geheiß ihres Meisters agieren.",
      "Fremdartige Behausungen. Weil sie sich weigern, ihr Territorium mit anderen zu teilen, ziehen sich die meisten Betrachter in eisige Hügel, verlassene Ruinen und tiefe Kavernen zurück, um von dort aus ihre Komplotte zu planen. Der Hort eines Betrachters wird mit seinem Augenstrahl der Auflösung gegraben, mit einem Schwerpunkt auf senkrechte Durchgänge, die übereinander gestapelte Kammern verbinden. Eine solche Umgebung erlaubt es einem Betrachter, sich frei zu bewegen und hindert Eindringlinge daran, zu leicht herumzuschleichen. Er schmückt seine Kammern mit Trophäen aus den Schlachten, die er gewonnen hat, darunter versteinerte Abenteurer, Stücke von anderen Betrachtern und magische Gegenstände, die er mächtigen Feinden entrissen hat."
    ],
    besonderheiten: [
      { name: "Antimagie-Kegel", beschreibung: "Das zentrale Auge des Betrachters erschafft einen Bereich der Antimagie, wie beim Zauber Antimagisches Feld in einem Kegel von 45 m. Zu Beginn eines jeden seiner Züge entscheidet der Betrachter, in welche Richtung der Kegel zeigt und ob er aktiv ist. Der Bereich funktioniert auch gegen die Augenstrahlen des Betrachters." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 14 (4W6) Stichschaden." },
      { name: "Augenstrahlen", beschreibung: "Der Betrachter feuert zufällig drei der folgenden magischen Augenstrahlen ab (würfle doppelte Ergebnisse neu) und wählt ein bis drei Ziele, die er sehen kann und die sich innerhalb von 36 m um ihn befinden. 1. Bezauberungsstrahl — Die Zielkreatur muss einen Weisheitsrettungswurf gegen SG 16 anlegen, um nicht für 1 Stunde vom Betrachter bezaubert zu werden. Der Effekt endet, wenn der Betrachter die Kreatur verletzt. 2. Lähmender Strahl — Die Zielkreatur muss einen Konstitutionsrettungswurf gegen SG 16 ablegen, um nicht für 1 Minute gelähmt zu werden. Das Ziel kann den Rettungswurf am Ende eines jeden seiner Züge wiederholen und den Effekt bei einem Erfolg beenden. 3. Furchtstrahl — Die Zielkreatur muss einen Weisheitsrettungswurf gegen SG 16 ablegen, um nicht für 1 Minute verängstigt zu werden. Das Ziel kann den Rettungswurf am Ende eines jeden seiner Züge wiederholen und den Effekt bei einem Erfolg beenden. 4. Verlangsamender Strahl — Die Zielkreatur muss einen Geschicklichkeitsrettungswurf gegen SG 16 ablegen. Bei einem misslungenen Rettungswurf wird die Bewegungsrate des Ziels für 1 Minute halbiert, kann keine Reaktionen ausführen und kann in ihrem Zug entweder eine Aktion oder eine Bonusaktion durchführen, nicht beides. Die Kreatur kann den Rettungswurf am Ende eines jeden ihrer Züge wiederholen und den Effekt bei einem Erfolg beenden. 5. Zermürbungsstrahl — Die Zielkreatur muss einen Konstitutionsrettungswurf gegen SG 16 ablegen. Bei einem misslungenen Rettungswurf erleidet sie 36 (8W8) nekrotischen Schaden, halb so viel Schaden bei einem erfolgreichen Rettungswurf. 6. Telekinetischer Strahl — Wenn das Ziel eine Kreatur ist, muss sie einen Stärkerettungswurf gegen SG 16 schaffen, sonst bewegt der Betrachter sie bis zu 9 m in eine beliebige Richtung und sie ist festgesetzt bis zum Beginn des nächsten Zugs des Betrachters. Wenn das Ziel ein Gegenstand ist, der 300 Pfund oder weniger wiegt und nicht getragen wird, wird er 9 m bewegt; der Betrachter kann auch Feinkontrolle ausüben, z. B. Werkzeuge benutzen oder Türen öffnen. 7. Schlafstrahl — Die Zielkreatur muss einen Weisheitsrettungswurf gegen SG 16 ablegen, um nicht für 1 Minute einzuschlafen und bewusstlos zu werden. Das Ziel wacht auf, wenn es Schaden erleidet oder eine Kreatur es weckt. Kein Effekt auf Konstrukte und Untote. 8. Versteinerungsstrahl — Die Zielkreatur muss einen Geschicklichkeitsrettungswurf gegen SG 16 ablegen. Bei einem Fehlschlag ist sie festgesetzt und muss den Rettungswurf am Ende ihres nächsten Zugs wiederholen. Bei Erfolg endet der Effekt; bei erneutem Fehlschlag ist sie versteinert, bis sie durch Vollständige Genesung oder andere Magie befreit wird. 9. Auflösungsstrahl — Wenn das Ziel eine Kreatur ist, muss sie einen Geschicklichkeitsrettungswurf gegen SG 16 schaffen, sonst erleidet sie 45 (10W8) Energieschaden. Wird die Kreatur dadurch auf 0 TP reduziert, wird ihr Körper ein Haufen feiner, grauer Staub. Nicht-magische Gegenstände bis Großer Größe werden ohne Rettungswurf aufgelöst; bei riesigen oder größeren Gegenständen löst der Strahl einen 3-m-Würfel auf. 10. Todesstrahl — Wenn das Ziel eine Kreatur ist, muss sie einen Geschicklichkeitsrettungswurf gegen SG 16 schaffen, sonst erleidet sie 55 (10W10) nekrotischen Schaden. Das Ziel stirbt, wenn der Strahl es auf 0 TP bringt." }
    ],
    bonusaktionen: [], reaktionen: [],
    legendaere_aktionen: [
      { name: "Augenstrahl", beschreibung: "Der Betrachter verwendet einen zufälligen Augenstrahl." }
    ],
    legendaere_aktionen_beschreibung: "Der Betrachter kann 3 legendäre Aktionen durchführen, wobei er die Option Augenstrahl verwendet. Er kann nur eine legendäre Aktion auf einmal verwenden, und nur am Ende eines Zugs eines anderen Charakters. Der Betrachter erhält verbrauchte legendäre Aktionen zu Beginn seines Zuges zurück.",
    hortaktionen: {
      beschreibung: "Wenn ein Betrachter in seiner Behausung kämpft, kann er die Umgebungsmagie nutzen, um Hortaktionen durchzuführen. Bei Initiative 20 (er verliert alle Initiative-Gleichstände) führt der Betrachter eine Hortaktion aus. Ein Betrachter, dem man in seinem Hort begegnet, hat einen Herausforderungsgrad von 14 (11.500 EP).",
      aktionen: [
        "Ein Quadrat mit 15 m Seitenlänge innerhalb von 36 m um den Betrachter wird schleimig; dieser Bereich gilt bis Initiative 20 in der nächsten Runde als schwieriges Gelände.",
        "An Mauern innerhalb von 36 m um den Betrachter wuchern Gliedmaßen, die bis Initiative 20 in der übernächsten Runde bestehen bleiben. Alle Kreaturen nach Wahl des Betrachters, die ihren Zug innerhalb von 3 m um eine solche Mauer beginnen, müssen einen Geschicklichkeitsrettungswurf gegen SG 15 schaffen, um nicht gepackt zu werden. Um zu entkommen, muss die Kreatur einen Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik) gegen SG 15 schaffen.",
        "Ein Auge öffnet sich auf einer festen Oberfläche im Umkreis von 18 m um den Betrachter. Ein zufälliger Augenstrahl schießt auf einen Gegner nach Wahl des Betrachters, den er sehen kann. Dann schließt sich das Auge und verschwindet. Der Betrachter kann einen Effekt erst dann wiederholen, wenn alle verwendet worden sind, und kann nicht zweimal hintereinander den gleichen Effekt verwenden."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region, in der sich die Behausung eines Betrachters befindet, wird von der Anwesenheit der Kreatur verzerrt, was einen oder mehrere der folgenden Effekte auslöst:",
      effekte: [
        "Kreaturen innerhalb von 1,5 km um die Behausung des Betrachters fühlen sich manchmal, als ob sie beobachtet werden, auch wenn dies nicht der Fall ist.",
        "Wenn der Betrachter schläft, kommt es innerhalb von 1,5 km um seine Behausung zu kleinen Verzerrungen der Realität, die 24 Stunden später wieder verschwinden. Zeichen auf Wänden könnten sich auf subtile Weise verändern, ein unheimlicher kleiner Gegenstand erscheint, wo es zuvor keinen gegeben hat, harmloser Schleim könnte eine Statue überziehen und so weiter. Diese Effekte erscheinen nur auf natürlichen Oberflächen und nicht-magischen Gegenständen, die nicht im Besitz einer Person sind.",
        "Wenn der Betrachter stirbt, schwinden diese Effekte innerhalb von 1W10 Tagen."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Uralter Blauer Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Gigantisch",
    gesinnung: "Rechtschaffen böse",
    cr: 23, xp: 50000,
    rk: 22, ruestungstyp: "natürliche Rüstung",
    tp: 481, tp_wuerfel: "26W20+208",
    bewegung: { "Gehen": "12 m", "Graben": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 29, DEX: 10, CON: 27, INT: 18, WIS: 17, CHA: 21 },
    rettungswuerfe: { GES: 7, KON: 15, WEI: 10, CHA: 12 },
    fertigkeiten: { "Heimlichkeit": 7, "Wahrnehmung": 17 },
    schadensresistenzen: [], schadensimmunitaeten: ["Blitz"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 27,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Wüste"],
    bild: "assets/images/monster/uralter_blauer_drache.png",
    beschreibung: [
      "Uralt Blaue Drachen sind eitle und territoriale Herrscher über weite Wüsten. Über Jahrhunderte haben sie Karawanen geplündert, Herden geraubt und Siedlungen in den fruchtbaren Ländern jenseits ihrer Wüste terrorisiert. Kein Kommentar über ihre vermeintliche Schwäche bleibt unbestraft.",
      "Geduldige Kämpfer. Blaue Drachen sind methodische Kämpfer. Sie greifen aus der Entfernung mit Blitzsalven an, fliegen dann außerhalb der Reichweite und warten, bis sich eine neue Gelegenheit bietet. Ein Kampf kann Stunden oder sogar Tage andauern.",
      "Gebieter und Schergen. Blaue Drachen begehren die begabtesten Kreaturen als Diener: Barden, Weise, Künstler, Magier und Meuchelmörder. Loyale Dienste werden großzügig belohnt. Die Behausung selbst bleibt geheim – selbst treueste Diener werden kaum hineingelassen. Ankhegs, Riesenskorpione und andere Wüstenkreaturen werden als Wachen ermutigt, in der Nähe zu leben.",
      "Sammler von Edelsteinen. Blaue Drachen schätzen Juwelen besonders, vor allem Saphire, die sie als die edelste und schönste aller Farben betrachten. Die wertvollsten Schätze vergräbt der Drache tief im Sand, während er weniger wertvolle Gegenstände offen über versteckten Sandlöchern auslegt, um Diebe zu fangen."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er sich entscheiden, ihn stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Furchterregende Präsenz einsetzen. Danach führt er drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +16 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 20 (2W10+9) Stichschaden plus 11 (2W10) Blitzschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +16 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 16 (2W6+9) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +16 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 18 (2W8+9) Wuchtschaden." },
      { name: "Furchterregende Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet und sich seiner bewusst ist, muss einen Weisheitsrettungswurf gegen SG 20 schaffen, oder sie ist für 1 Minute verängstigt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen, um den Effekt bei Erfolg zu beenden. Wenn der Rettungswurf erfolgreich ist oder der Effekt endet, ist die Kreatur für die nächsten 24 Stunden immun gegen die Furchterregende Präsenz des Drachen." },
      { name: "Blitzodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet Blitze in einer Linie von 36 m Länge und 3 m Breite. Jede Kreatur in der Linie muss einen Geschicklichkeitsrettungswurf gegen SG 23 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 88 (16W10) Blitzschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Drache schafft einen Weisheit (Wahrnehmung) Wurf." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Schwingenangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Schwingen. Jede Kreatur innerhalb von 4,5 m vom Drachen muss einen Geschicklichkeitsrettungswurf gegen SG 24 schaffen oder erleidet 16 (2W6+9) Wuchtschaden und wird zu Boden geworfen. Der Drache kann dann bis zu seiner halben Flugbewegungsrate fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative-Rang 20 (bei Gleichstand verliert er) kann der Drache eine der folgenden Hortaktionen nutzen; er kann dieselbe nicht zwei Runden in Folge nutzen:",
      aktionen: [
        "Ein Teil der Decke stürzt über einer Kreatur innerhalb von 36 m ein, die der Drache sehen kann. Die Kreatur muss einen Geschicklichkeitsrettungswurf gegen SG 15 schaffen, um nicht 10 (3W6) Wuchtschaden zu erleiden und zu Boden geworfen und festgesetzt zu werden. Eine festgesetzte Kreatur kann weder atmen noch aufstehen; sie kann ihre Aktion nutzen, um einen Stärkewurf gegen SG 10 abzulegen und den Zustand bei einem Erfolg zu beenden.",
        "Eine Wolke aus Sand füllt eine Sphäre mit einem Radius von 6 m um einen Punkt innerhalb von 36 m um den Drachen. Alle Kreaturen im Bereich müssen einen Konstitutionsrettungswurf gegen SG 15 ablegen, um nicht für 1 Minute blind zu werden. Die Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei einem Erfolg beenden.",
        "Blitze springen aus den Wänden der Behausung und bilden eine 1,5 m breite Linie zwischen zwei festen Oberflächen innerhalb von 36 m vom Drachen, die nicht weiter als 36 m voneinander entfernt sind. Alle Kreaturen in der Linie müssen einen Geschicklichkeitsrettungswurf gegen SG 15 schaffen, um nicht 10 (3W6) Blitzschaden zu erleiden."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region rund um den Hort eines legendären blauen Drachen ist von der Magie des Drachen deformiert und schafft einen oder mehrere der folgenden Effekte:",
      effekte: [
        "Gewitter toben in einem Umkreis von 9 km um die Behausung.",
        "Staubteufel ziehen durch das Land im Umkreis von 9 km um die Behausung. Ein Staubteufel hat die Spielwerte eines Luftelementars, kann aber nicht fliegen, hat eine Bewegungsrate von 15 m und Intelligenz sowie Charisma von 1 (−5).",
        "Verborgene Sandlöcher bilden sich in und um die Behausung. Ein Sandloch kann mit einem erfolgreichen Wurf auf Weisheit (Wahrnehmung) gegen SG 20 entdeckt werden. Ansonsten muss die erste Kreatur, die auf die dünne Kruste tritt, einen Geschicklichkeitsrettungswurf gegen SG 15 schaffen oder 1W6 × 3 m tief in das Loch fallen. Wenn der Drache stirbt, verschwinden die Staubteufel sofort und die Gewitter lassen innerhalb von 1W10 Tagen nach; die Sandlöcher bleiben."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Ausgewachsener Blauer Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Riesig",
    gesinnung: "Rechtschaffen böse",
    cr: 16, xp: 15000,
    rk: 19, ruestungstyp: "natürliche Rüstung",
    tp: 225, tp_wuerfel: "18W12+108",
    bewegung: { "Gehen": "12 m", "Graben": "9 m", "Fliegen": "24 m" },
    attribute: { STR: 25, DEX: 10, CON: 23, INT: 16, WIS: 15, CHA: 19 },
    rettungswuerfe: { GES: 5, KON: 11, WEI: 7, CHA: 9 },
    fertigkeiten: { "Heimlichkeit": 5, "Wahrnehmung": 12 },
    schadensresistenzen: [], schadensimmunitaeten: ["Blitz"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 22,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Wüste"],
    bild: "assets/images/monster/ausgewachsener_blauer_drache.png",
    beschreibung: [
      "Ausgewachsene Blaue Drachen haben ihr Revier über Jahrzehnte gefestigt und ihre Behausungen in kristallisierte Kavernen unter dem Wüstensand ausgegraben. Ihre Schuppen knistern mit statischer Elektrizität, besonders wenn der Drache wütend oder angriffbereit ist."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er sich entscheiden, ihn stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Furchterregende Präsenz einsetzen. Danach führt er drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 18 (2W10+7) Stichschaden plus 5 (1W10) Blitzschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 14 (2W6+7) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +12 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 16 (2W8+7) Wuchtschaden." },
      { name: "Furchterregende Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet und sich seiner bewusst ist, muss einen Weisheitsrettungswurf gegen SG 17 schaffen, oder sie ist für 1 Minute verängstigt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen, um den Effekt bei Erfolg zu beenden. Wenn der Rettungswurf erfolgreich ist oder der Effekt endet, ist die Kreatur für die nächsten 24 Stunden immun gegen die Furchterregende Präsenz des Drachen." },
      { name: "Blitzodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet Blitze in einer Linie von 27 m Länge und 1,5 m Breite. Jede Kreatur in der Linie muss einen Geschicklichkeitsrettungswurf gegen SG 19 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 66 (12W10) Blitzschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Drache schafft einen Weisheit (Wahrnehmung) Wurf." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Schwingenangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Schwingen. Jede Kreatur innerhalb von 3 m vom Drachen muss einen Geschicklichkeitsrettungswurf gegen SG 20 schaffen oder erleidet 14 (2W6+7) Wuchtschaden und wird zu Boden geworfen. Der Drache kann dann bis zu seiner halben Flugbewegungsrate fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative-Rang 20 (bei Gleichstand verliert er) kann der Drache eine der folgenden Hortaktionen nutzen; er kann dieselbe nicht zwei Runden in Folge nutzen:",
      aktionen: [
        "Ein Teil der Decke stürzt über einer Kreatur innerhalb von 36 m ein, die der Drache sehen kann. Die Kreatur muss einen Geschicklichkeitsrettungswurf gegen SG 15 schaffen, um nicht 10 (3W6) Wuchtschaden zu erleiden und zu Boden geworfen und festgesetzt zu werden. Eine festgesetzte Kreatur kann weder atmen noch aufstehen; sie kann ihre Aktion nutzen, um einen Stärkewurf gegen SG 10 abzulegen und den Zustand bei einem Erfolg zu beenden.",
        "Eine Wolke aus Sand füllt eine Sphäre mit einem Radius von 6 m um einen Punkt innerhalb von 36 m um den Drachen. Alle Kreaturen im Bereich müssen einen Konstitutionsrettungswurf gegen SG 15 ablegen, um nicht für 1 Minute blind zu werden. Die Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei einem Erfolg beenden.",
        "Blitze springen aus den Wänden der Behausung und bilden eine 1,5 m breite Linie zwischen zwei festen Oberflächen innerhalb von 36 m vom Drachen, die nicht weiter als 36 m voneinander entfernt sind. Alle Kreaturen in der Linie müssen einen Geschicklichkeitsrettungswurf gegen SG 15 schaffen, um nicht 10 (3W6) Blitzschaden zu erleiden."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region rund um den Hort eines legendären blauen Drachen ist von der Magie des Drachen deformiert und schafft einen oder mehrere der folgenden Effekte:",
      effekte: [
        "Gewitter toben in einem Umkreis von 9 km um die Behausung.",
        "Staubteufel ziehen durch das Land im Umkreis von 9 km um die Behausung. Ein Staubteufel hat die Spielwerte eines Luftelementars, kann aber nicht fliegen, hat eine Bewegungsrate von 15 m und Intelligenz sowie Charisma von 1 (−5).",
        "Verborgene Sandlöcher bilden sich in und um die Behausung. Ein Sandloch kann mit einem erfolgreichen Wurf auf Weisheit (Wahrnehmung) gegen SG 20 entdeckt werden. Ansonsten muss die erste Kreatur, die auf die dünne Kruste tritt, einen Geschicklichkeitsrettungswurf gegen SG 15 schaffen oder 1W6 × 3 m tief in das Loch fallen. Wenn der Drache stirbt, verschwinden die Staubteufel sofort und die Gewitter lassen innerhalb von 1W10 Tagen nach; die Sandlöcher bleiben."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Junger Blauer Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Groß",
    gesinnung: "Rechtschaffen böse",
    cr: 9, xp: 5000,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 152, tp_wuerfel: "16W10+64",
    bewegung: { "Gehen": "12 m", "Graben": "6 m", "Fliegen": "24 m" },
    attribute: { STR: 21, DEX: 10, CON: 19, INT: 14, WIS: 13, CHA: 17 },
    rettungswuerfe: { GES: 4, KON: 8, WEI: 5, CHA: 7 },
    fertigkeiten: { "Heimlichkeit": 4, "Wahrnehmung": 9 },
    schadensresistenzen: [], schadensimmunitaeten: ["Blitz"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 19,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Wüste"],
    bild: "assets/images/monster/junger_blauer_drache.png",
    beschreibung: [
      "Junge Blaue Drachen sind bereits arrogant und brutal. Sie graben sich im Wüstensand ein, bis nur das Horn ihrer Nase herausragt, und lauern dort auf Beute. Wenn sich ein Opfer nähert, schießen sie nach oben – Sand fließt wie eine Lawine von ihren Schwingen."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 16 (2W10+5) Stichschaden plus 5 (1W10) Blitzschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 12 (2W6+5) Hiebschaden." },
      { name: "Blitzodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet Blitze in einer Linie von 18 m Länge und 1,5 m Breite. Jede Kreatur in der Linie muss einen Geschicklichkeitsrettungswurf gegen SG 16 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 55 (10W10) Blitzschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Blauer Drachennestling",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Mittelgroß",
    gesinnung: "Rechtschaffen böse",
    cr: 3, xp: 700,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 52, tp_wuerfel: "8W8+16",
    bewegung: { "Gehen": "9 m", "Graben": "4,5 m", "Fliegen": "18 m" },
    attribute: { STR: 17, DEX: 10, CON: 15, INT: 12, WIS: 11, CHA: 15 },
    rettungswuerfe: { GES: 2, KON: 4, WEI: 2, CHA: 4 },
    fertigkeiten: { "Heimlichkeit": 2, "Wahrnehmung": 4 },
    schadensresistenzen: [], schadensimmunitaeten: ["Blitz"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 18 m"], passiveWahrnehmung: 14,
    sprachen: ["Drakonisch"],
    umgebung: ["Wüste"],
    bild: "assets/images/monster/blauer_drachennestling.png",
    beschreibung: [
      "Blaue Drachennestlinge zeigen früh die Arroganz ihrer Art. Ihr Blitzodem ist bereits gefährlich, auch wenn ihre Körpergröße noch keine Bedrohung für erfahrene Abenteurer darstellt."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W10+3) Stichschaden plus 3 (1W6) Blitzschaden." },
      { name: "Blitzodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet Blitze in einer Linie von 9 m Länge und 1,5 m Breite. Jede Kreatur in der Linie muss einen Geschicklichkeitsrettungswurf gegen SG 12 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 22 (4W10) Blitzschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Blutmücke",
    art: "Tier",
    groesse: "Winzig",
    gesinnung: "Gesinnungslos",
    cr: 0.125, xp: 25,
    rk: 14, ruestungstyp: "natürliche Rüstung",
    tp: 2, tp_wuerfel: "1W4",
    bewegung: { "Gehen": "3 m", "Fliegen": "12 m" },
    attribute: { STR: 4, DEX: 16, CON: 11, INT: 2, WIS: 8, CHA: 6 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"], passiveWahrnehmung: 9,
    sprachen: [],
    umgebung: ["Wald", "Sumpf", "Unterirdisch"],
    bild: "assets/images/monster/blutmücke.png",
    beschreibung: [
      "Diese grässlichen Kreaturen sehen aus wie eine Mischung aus einer großen Fledermaus und einem übergroßen Moskito. Ihre Beine enden in scharfen Zangen, und ihr langer, nadelartiger Saugrüssel zischt durch die Luft, wenn sie ihre nächste Mahlzeit suchen.",
      "Blutmücken ernähren sich vom Blut lebender Kreaturen, indem sie sich an ihnen anheften und sie langsam aussaugen. Auch wenn sie in kleiner Zahl nicht besonders gefährlich sind, können große Rudel von Blutmücken eine beträchtliche Bedrohung darstellen, da sie sich so schnell anhaften, wie ihre schwächer werdende Beute sie abreißen kann."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Blut aussaugen", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W4+3) Wuchtschaden, und die Blutmücke heftet sich an das Ziel an. Solange die Blutmücke angeheftet ist, greift sie nicht an. Stattdessen verliert das Ziel zu Beginn eines jeden Zugs der Blutmücke 5 (1W4+3) Trefferpunkte aufgrund des Blutverlusts. Die Blutmücke kann sich lösen, indem sie 1,5 m ihrer Bewegung verwendet. Das tut sie, nachdem sie 10 Trefferpunkte an Blut ausgesaugt hat oder wenn das Ziel stirbt. Eine Kreatur, auch das Ziel, kann eine Aktion verwenden, um die Blutmücke zu lösen." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Bullywug",
    art: "Humanoid",
    unterart: "Bullywug",
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 0.25, xp: 50,
    rk: 15, ruestungstyp: "Fellrüstung, Schild",
    tp: 11, tp_wuerfel: "2W8+2",
    bewegung: { "Gehen": "6 m", "Schwimmen": "12 m" },
    attribute: { STR: 12, DEX: 12, CON: 13, INT: 7, WIS: 10, CHA: 7 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 3 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: [], passiveWahrnehmung: 10,
    sprachen: ["Bullywug"],
    umgebung: ["Sumpf", "Wald"],
    bild: "assets/images/monster/bullywug.png",
    beschreibung: [
      "Das Leben als Bullywug ist fies, brutal und nass. Diese froschköpfigen, amphibischen Humanoiden müssen immer feucht bleiben und leben daher in Regenwäldern, Sümpfen und klammen Höhlen. Bullywugs sind immer hungrig und durch und durch böse. Sie überwältigen ihre Gegner in Überzahl, wenn sie können, doch flüchten sie vor ernsthaften Bedrohungen, um leichtere Beute zu finden.",
      "Bullywugs haben grüne, graue oder fleckig gelbe Haut, die zwischen Schattierungen von Grau, Grün und Braun wechselt, sodass sie sich an ihre Umgebung anpassen können. Sie tragen grobschlächtige Rüstung und führen einfache Waffen. Außerdem können sie böse zubeißen, wenn ein Feind zu nahe kommt.",
      "Widerliche Aristokratie. Bullywugs sehen sich selbst als die rechtmäßigen Herrscher des Sumpfes. Sie folgen einer Art Etikette, wenn sie mit Außenstehenden und einander umgehen, doch diese unterliegt den Launen und Vorlieben ihres Anführers — einem selbsternannten Fürsten des Schlamms. Bullywugs stellen einander mit grandios klingenden Titeln vor, machen eine regelrechte Darbietung daraus, wie sie sich vor ihren Vorgesetzten verbeugen und erniedrigen, und versuchen die ganze Zeit, die Gunst ihrer Vorgesetzten zu erlangen.",
      "Ungebärdige Diplomatie. Bullywugs lieben nichts mehr, als sich als Gebieter gegenüber jenen aufzuspielen, die in ihr Revier eindringen. Gefangene werden vor den König oder die Königin geschleppt und gezwungen, um Gnade zu flehen. Bestechungen, Schätze und Schmeicheleien können einen Bullywug-Herrscher davon überzeugen, seine Gefangenen gehen zu lassen — aber nicht, bevor er seine Gäste mit der Pracht seiner Schätze beeindruckt hat.",
      "Amphibische Verbündete. Bullywugs sprechen eine Sprache, die es ihnen erlaubt, über große Entfernungen zu kommunizieren, indem sie quaken wie ein Frosch. Einfache Konzepte sind auch für Frösche und Kröten verständlich. Bullywugs nutzen diese Fähigkeit, um starke Bindungen zu Riesenfröschen aufzubauen, die sie als Wach- und Jagdtiere ausbilden. Größere Exemplare werden manchmal sogar als Reittiere verwendet."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Bullywug kann Luft und Wasser atmen." },
      { name: "Mit Fröschen und Kröten sprechen", beschreibung: "Der Bullywug kann Fröschen und Kröten einfache Konzepte vermitteln, wenn er die Bullywug-Sprache spricht." },
      { name: "Sumpftarnung", beschreibung: "Der Bullywug hat einen Vorteil auf Würfe auf Geschicklichkeit (Heimlichkeit), die er ablegt, um sich in Sumpfgelände zu verstecken." },
      { name: "Stehender Sprung", beschreibung: "Der Weitsprung des Bullywugs reicht bis zu 6 m und sein Hochsprung bis zu 3 m, mit oder ohne Anlauf." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Bullywug führt zwei Nahkampfangriffe aus: einen mit seinem Biss und einen mit seinem Speer." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +3 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 3 (1W4+1) Wuchtschaden." },
      { name: "Speer", beschreibung: "Nahkampf- oder Fernkampf-Waffenangriff: +3 zum Treffen, Reichweite 1,5 m oder 6/18 m, ein Ziel. Treffer: 4 (1W6+1) Stichschaden, oder 5 (1W8+1) Wuchtschaden, wenn die Waffe mit beiden Händen geführt wird." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Cambion",
    art: "Unhold",
    groesse: "Mittelgroß",
    gesinnung: "Jegliche böse Gesinnung",
    cr: 5, xp: 1800,
    rk: 19, ruestungstyp: "Schuppenrüstung",
    tp: 82, tp_wuerfel: "11W8+33",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m" },
    attribute: { STR: 18, DEX: 18, CON: 16, INT: 14, WIS: 12, CHA: 16 },
    rettungswuerfe: { "STR": 7, "KON": 6, "INT": 5, "CHA": 6 },
    fertigkeiten: { "Einschüchtern": 6, "Heimlichkeit": 7, "Täuschen": 6, "Wahrnehmung": 4 },
    schadensresistenzen: ["Blitz", "Feuer", "Gift", "Kälte", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"], passiveWahrnehmung: 14,
    sprachen: ["Abyssisch", "Infernalisch", "Gemeinsprache"],
    umgebung: ["Andere Ebenen", "Städtisch"],
    bild: "assets/images/monster/cambion.png",
    beschreibung: [
      "Ein Cambion ist der Nachkomme eines Unholds (normalerweise eines Sukkubus oder Inkubus) und eines Humanoiden (üblicherweise ein Mensch). Cambions erben Aspekte beider Elternteile, doch ihre Hörner, ledrigen Schwingen und sehnigen Schwänze sind Zeichen ihrer andersweltlichen Abstammung.",
      "Geboren, um böse zu sein. Cambions wachsen zu ruchlosen Erwachsenen heran, deren Bösartigkeit und Perversion selbst die hingebungsvollsten sterblichen Eltern mit Schrecken erfüllt. Selbst als Kinder erkennen Cambions ihren rechtmäßigen Platz als Gebieter der Sterblichen. Sie könnten Aufstände in Siedlungen und Städten organisieren und Banden von Humanoiden und schwachen Teufeln um sich scharen, die ihnen dienen.",
      "Schergen der Mächtigen. Ein Cambion, der gezwungen ist, seinem teuflischen Elternteil zu dienen, tut dies aus Bewunderung oder Grauen, aber in der Erwartung, dass er sich eines Tages erheben wird. Cambions, die in den Neun Höllen aufgezogen werden, dienen als Soldaten, Botschafter und persönliche Assistenten von mächtigeren Teufeln.",
      "Die Brut von Graz'zt. Der Dämonenfürst Graz'zt pflanzt sich gerne mit Humanoiden fort, die Pakte mit Unholden geschlossen haben, und hat viele Cambions gezeugt. Diese Cambions zeichnen sich durch kohlrabenschwarze Haut, gespaltene Hufe, sechsfingrige Hände und unirdische Schönheit aus."
    ],
    besonderheiten: [
      { name: "Unheiliger Segen", beschreibung: "In die RK des Cambions wird auch sein Charismabonus eingerechnet." },
      { name: "Angeborenes Zauberwirken", beschreibung: "Das Zauberwirk-Attribut des Cambions ist Charisma (Zauberrettungswurf-SG 14). Er kann folgende Zauber angeboren wirken, ohne Materialkomponenten: jeweils 3/Tag: Befehl, Gestalt verändern, Magie entdecken; 1/Tag: Ebenenwechsel (nur selbst)." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Cambion führt zwei Nahkampfangriffe aus oder verwendet einmal seinen Feuerstrahl." },
      { name: "Speer", beschreibung: "Nahkampf- oder Fernkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m oder 6/18 m, ein Ziel. Treffer: 7 (1W6+4) Stichschaden, oder 8 (1W8+4) Stichschaden wenn die Waffe mit beiden Händen geführt wird, plus 3 (1W6) Feuerschaden." },
      { name: "Feuerstrahl", beschreibung: "Fernkampf-Zauberangriff: +7 zum Treffen, Reichweite 36 m, ein Ziel. Treffer: 10 (3W6) Feuerschaden." },
      { name: "Teuflischer Charme", beschreibung: "Ein Humanoid innerhalb von 9 m, den der Cambion sehen kann, muss einen Weisheitsrettungswurf gegen SG 14 ablegen, um nicht für einen Tag magisch bezaubert zu werden. Das bezauberte Ziel gehorcht den gesprochenen Befehlen des Cambions. Wenn das Ziel Schaden erleidet oder einen selbstmörderischen Befehl erhält, kann es den Rettungswurf wiederholen und den Effekt bei einem Erfolg beenden. Bei Erfolg oder Effektende ist die Kreatur für die nächsten 24 Stunden gegen den Teuflischen Charme des Cambions immun." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Chasme",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 6, xp: 2300,
    rk: 15, ruestungstyp: "natürliche Rüstung",
    tp: 84, tp_wuerfel: "13W10+13",
    bewegung: { "Gehen": "6 m", "Fliegen": "18 m" },
    attribute: { STR: 15, DEX: 15, CON: 12, INT: 11, WIS: 14, CHA: 10 },
    rettungswuerfe: { GES: 5, WEI: 5 },
    fertigkeiten: { "Wahrnehmung": 5 },
    schadensresistenzen: ["Blitz", "Feuer", "Kälte"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 15,
    sprachen: ["Abyssisch", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/chasme.png",
    beschreibung: [
      "Dieser ekelhafte Dämon erinnert an eine unaussprechliche Kreuzung von Humanoidem und Fliege. Eine Chasme huscht auf vier dürren Beinen umher, die sich auch an Wänden und Decken festhalten können. Ein Summen kündigt die Annäherung einer Chasme an und erfüllt Feinde mit einer grauenvollen Lethargie, die sie anfällig für Angriffe macht.",
      "Die niederen Chasmen dienen mächtigeren Meistern als Verhörspezialisten oder Zuchtmeister. Eine Chasme lebt, um andere als Bestrafung zu foltern und hat eine Begabung dafür, Dämonen ausfindig zu machen, die ihren Meister verlassen haben. Einen solchen Verräter zu fangen und zurückzubringen gibt der Chasme die Gelegenheit, das Opfer zu foltern, ohne Vergeltung fürchten zu müssen."
    ],
    besonderheiten: [
      { name: "Summen", beschreibung: "Die Chasme gibt ein schreckliches Summen ab, gegen das Dämonen immun sind. Alle anderen Kreaturen, die ihren Zug innerhalb von 9 m um die Chasme beginnen, müssen einen Konstitutionsrettungswurf gegen SG 12 machen, um nicht für 10 Minuten das Bewusstsein zu verlieren. Kreaturen, die das Summen nicht hören können, schaffen den Rettungswurf automatisch. Der Effekt auf die Kreatur endet, wenn sie Schaden erleidet oder eine andere Kreatur eine Aktion nutzt, um sie mit Weihwasser zu bespritzen. Wenn der Rettungswurf erfolgreich ist oder der Effekt endet, dann ist die Kreatur für die nächsten 24 Stunden gegen das Summen immun." },
      { name: "Magieresistenz", beschreibung: "Die Chasme hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Spinnenklettern", beschreibung: "Die Chasme kann an schwierigen Oberflächen klettern, sogar kopfüber an der Decke, ohne einen Attributswurf ablegen zu müssen." },
      { name: "Variante: Dämonenbeschwörung", beschreibung: "Beschwöre Dämon (1/Tag): Der Dämon entscheidet, was er beschwören will und führt eine magische Beschwörung durch. Eine Chasme hat eine Chance von 30%, eine Chasme zu beschwören. Ein beschworener Dämon erscheint in einem nicht besetzten Bereich innerhalb von 18 m um seinen Beschwörer, dient als Verbündeter des Beschwörers und kann selbst keine anderen Dämonen beschwören. Er bleibt für 1 Minute, bis sein Beschwörer getötet worden ist oder bis der Beschwörer ihn als Bonusaktion fortschickt." }
    ],
    aktionen: [
      { name: "Saugrüssel", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, eine Kreatur. Treffer: 16 (4W6+2) Stichschaden plus 24 (7W6) nekrotischer Schaden, und die maximalen Trefferpunkte des Ziels sinken um einen Betrag gleich des erlittenen nekrotischen Schadens. Wenn dieser Effekt die Trefferpunkte einer Kreatur auf 0 senkt, dann stirbt die Kreatur. Diese Verringerung der Trefferpunkte hält an, bis die Kreatur eine lange Rast abschließt oder bis sie Ziel eines Zaubers wie Vollständige Genesung wird." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Chimäre",
    art: "Monstrosität",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 6, xp: 2300,
    rk: 14, ruestungstyp: "natürliche Rüstung",
    tp: 114, tp_wuerfel: "12W10+48",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m" },
    attribute: { STR: 19, DEX: 11, CON: 19, INT: 3, WIS: 14, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 8 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"], passiveWahrnehmung: 18,
    sprachen: ["versteht Drakonisch, kann aber nicht sprechen"],
    umgebung: ["Gebirge", "Hügel"],
    bild: "assets/images/monster/chimäre.png",
    beschreibung: [
      "Chimären wurden erschaffen, nachdem die Sterblichen Demogorgon in die Welt riefen. Der Prinz der Dämonen, der von den Kreaturen, die ihn umgaben, nicht beeindruckt war, verwandelte sie in grauenvolle, mehrköpfige Monstrositäten. Dabei entstanden die ersten Chimären.",
      "Chimären sind mit dämonischer Grausamkeit gesegnet und stellen eine finstere Erinnerung daran dar, was passiert, wenn Dämonenprinzen einen Weg auf die Materielle Ebene finden. Ein typisches Exemplar hat die Hinterbeine einer riesigen Ziege, die Vorderpfoten eines Löwen und die ledrigen Schwingen eines Drachen, sowie die Köpfe aller drei dieser Kreaturen. Das Monster zieht es vor, seine Beute zu überraschen, indem es vom Himmel herabstößt und sie mit seinem Feuerodem erwischt, ehe es landet.",
      "Kreaturen im Widerstreit. Eine Chimäre verbindet die schlimmsten Aspekte ihrer drei Anteile. Der Drachenkopf treibt sie an, zu rauben, zu plündern und einen großen Hort anzuhäufen. Ihre löwenhafte Natur drängt sie, mächtige Kreaturen zu jagen und zu töten, die ihr Revier bedrohen. Der Ziegenkopf gewährt ihr eine brutale, sture Ader, die dazu führt, dass sie bis zum Tode kämpfen wird.",
      "Diener des Bösen. Auch wenn Chimären alles andere als gerissen sind, macht ihr Drachenego sie doch anfällig für Schmeicheleien und Geschenke. Wenn ihnen Nahrung oder Schätze angeboten werden, könnten Chimären einen Reisenden durchaus verschonen. Ein Bösewicht kann eine Chimäre in seine Dienste locken, indem er sie gut ernährt und ihre Schatzkammer füllt."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Chimäre führt drei Angriffe aus: einen mit ihrem Biss, einen mit ihren Hörnern und einen mit ihren Klauen. Wenn ihr Feuerodem verfügbar ist, kann sie den Atem anstelle des Bisses oder der Hörner nutzen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Stichschaden." },
      { name: "Hörner", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 10 (1W12+4) Wuchtschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Hiebschaden." },
      { name: "Feuerodem (Aufladung 5–6)", beschreibung: "Der Drachenkopf atmet in einem Kegel von 4,5 m Länge Feuer aus. Alle Kreaturen in dem Kegel müssen einen Geschicklichkeitsrettungswurf gegen SG 15 ablegen. Bei einem misslungenen Rettungswurf erleiden sie 31 (7W8) Feuerschaden, halb so viel Schaden bei einem erfolgreichen Rettungswurf." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Chuul",
    art: "Aberration",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 4, xp: 1100,
    rk: 16, ruestungstyp: "natürliche Rüstung",
    tp: 93, tp_wuerfel: "11W10+33",
    bewegung: { "Gehen": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 19, DEX: 10, CON: 16, INT: 5, WIS: 11, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 8 },
    schadensresistenzen: [], schadensimmunitaeten: ["Gift"], verwundbarkeiten: [], zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"], passiveWahrnehmung: 18,
    sprachen: ["versteht Tiefensprache, kann aber nicht sprechen"],
    umgebung: ["Unterirdisch", "Sumpf", "Küste"],
    bild: "assets/images/monster/chuul.png",
    beschreibung: [
      "Chuul sind Überlebende des uralten Aboleth-Imperiums. Sie sind Krustentiere, die die Abolethen modifiziert und mit Bewusstsein erfüllt haben. Sie folgen den implantierten Anweisungen ihrer Erschaffer, wie sie es seit Anbeginn der Zeit tun.",
      "Urtümliche Relikte. In der urtümlichen Zeit herrschten die Abolethen über ein gewaltiges Imperium, das die Ozeane der Welt umspannte. Sie waren ans Wasser gebunden und konnten ihren Willen nicht darüber hinaus erstrecken. Aus diesem Grund erschufen sie die Chuul — extrem gehorsame Kreaturen, die denkende Wesen und Magie sammelten. Chuul sind darauf ausgelegt, die Zeitalter der Welt zu überstehen und werden im Laufe von Äonen nur größer und stärker.",
      "Unermüdliche Wächter. Chuul bewachen noch immer die Ruinen des uralten Aboleth-Imperiums und halten sich schweigend an Befehle, die Äonen alt sind. Gerüchte und uralte Karten locken manchmal Schatzsucher zu diesen Ruinen, doch der Lohn für ihre Dreistigkeit ist immer der Tod. Chuul können Magie auf Entfernung spüren und erschlagen Entdecker, nehmen ihre Ausrüstung und vergraben sie an geheimen Orten.",
      "Wartende Diener. Auch wenn das Imperium der Abolethen vor langer Zeit gefallen ist, sind die geistigen Bande zwischen ihnen und ihren Dienern noch immer intakt. Chuul, die mit Abolethen in Verbindung kommen, nehmen sofort wieder ihre alte Rolle an und dienen den finsteren Plänen der Abolethen."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Chuul kann Luft und Wasser atmen." },
      { name: "Magie spüren", beschreibung: "Der Chuul kann willentlich Magie in einer Umgebung von 36 m um sich spüren. Diese Eigenschaft funktioniert identisch zum Zauber Magie entdecken, ist aber selbst nicht magisch." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Chuul führt zwei Angriffe mit seinen Zangen durch. Wenn der Chuul eine Kreatur gepackt hat, kann er auch einmal seine Tentakel verwenden." },
      { name: "Zangen", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 11 (2W6+4) Wuchtschaden. Das Ziel wird gepackt (SG zum Entkommen 14), wenn es sich um eine große oder kleinere Kreatur handelt und der Chuul nicht zwei andere Kreaturen im Haltegriff hat." },
      { name: "Tentakel", beschreibung: "Alle Kreaturen in diesem Bereich müssen einen Konstitutionsrettungswurf gegen SG 13 ablegen, um nicht für 1 Minute vergiftet zu werden. Solange das Ziel vergiftet ist, ist es außerdem gelähmt. Das Ziel kann den Rettungswurf am Ende eines jeden seiner Züge wiederholen und den Effekt bei einem Erfolg beenden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Demilich",
    art: "Untoter",
    unterart: null,
    groesse: "Winzig",
    gesinnung: "Neutral böse",
    cr: 18, xp: 20000,
    rk: 20, ruestungstyp: "natürliche Rüstung",
    tp: 80, tp_wuerfel: "20W4",
    bewegung: { "Gehen": "0 m", "Fliegen (Schweben)": "9 m" },
    attribute: { STR: 1, DEX: 20, CON: 10, INT: 20, WIS: 17, CHA: 20 },
    rettungswuerfe: { KON: 6, INT: 11, WEI: 9, CHA: 11 },
    fertigkeiten: {},
    schadensresistenzen: ["Wucht-, Stich- und Hiebschaden durch magische Angriffe"],
    schadensimmunitaeten: ["Gift", "Nekrotisch", "Psychisch", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Betäubt", "Bezaubert", "Erschöpft", "Gelähmt", "Liegend", "Taub", "Verängstigt", "Vergiftet", "Versteinert"],
    sinne: ["Wahre Sicht 36 m"], passiveWahrnehmung: 13,
    sprachen: [],
    umgebung: ["Unterirdisch"],
    bild: "assets/images/monster/demilich.png",
    beschreibung: [
      "Die Unsterblichkeit, die einem Lich gewährt wird, hält nur so lange an, wie er sein Seelengefäß mit Seelen füttert. Wenn er in dieser Aufgabe nachlässig wird oder versagt, zerfallen seine Knochen zu Staub, bis nur noch der Schädel übrig ist. Dieser »Demilich« beinhaltet nur ein Bruchstück der bösartigen Lebenskraft des Lichs – gerade genug, um die Überreste aufsteigen und eine geisterhafte Gestalt annehmen zu lassen, wenn er gestört wird. Der Schädel stößt dann ein markerschütterndes Heulen aus, das die, die schwachen Herzens sind, sofort tötet und andere vor Furcht beben lässt. Wenn er in Frieden gelassen wird, sinkt er wieder zu Boden und kehrt zum leeren Frieden seiner Existenz zurück.",
      "Wenige Lichs wollen Demilichs werden, denn dies bedeutet das Ende einer Existenz, die sie zu bewahren hofften, indem sie Untote wurden. Allerdings kann die Zeit die Vernunft und Erinnerungen eines Lichs zersetzen, sodass er sich in seine uralte Gruft zurückzieht und vergisst, sich von Seelen zu ernähren. Die Zauber, die er einst kannte, schwinden aus seinem Geist, und er kann nicht mehr die arkanen Energien lenken, die ihm als Lich zur Verfügung standen. Doch auch als bloßer Schädel ist er noch ein tödlicher und irritierender Gegner.",
      "Die Verwandlung in einen Demilich ist nicht für alle Lichs, die sie durchleben, ein bitteres Ende. Wenn er als bewusste Entscheidung getroffen wird, ist der Weg des Demilichs der nächste Schritt einer dunklen Evolution. Der Lich Acererak – ein mächtiger Magier und Dämonologe und der berüchtigte Meister der Gruft der Schrecken – sah seine eigene Verwandlung voraus und bereitete sich vor, indem er verzauberte Juwelen in die Augenhöhlen und Zähne seines Schädels einsetzte. All diese Juwelen hatten die Macht, Seelen zu fangen, von denen sich sein Seelengefäß ernähren würde.",
      "Acererak gab seinen physischen Körper auf und akzeptierte, dass er verfaulen und zu Staub zerfallen würde, während er als körperloses Bewusstsein durch die Ebenen reiste. Wenn der Schädel, der sein letzter Überrest war, jemals gestört wurde, beanspruchten die Juwelen die Seelen der unverschämten Eindringlinge in die Gruft und übertrugen sie magisch in sein Seelengefäß.",
      "Lichs, die Acereraks Weg folgen, glauben, dass sie ihre Suche nach Macht jenseits der sterblichen Welt fortsetzen können, indem sie sich ihres Körpers entledigen. Wie es ihr Vorbild tat, sichern sie ihre Überreste in gut geschützten Gruften und nutzen Seelenjuwelen, um ihre Seelengefäße zu erhalten und die Abenteurer zu töten, die ihren Frieden stören."
    ],
    besonderheiten: [
      { name: "Meiden", beschreibung: "Wenn der Demilich Ziel eines Effekts wird, der es ihm erlaubt, einen Rettungswurf abzulegen, um nur halben Schaden zu erleiden, erleidet er stattdessen bei einem gelungenen Rettungswurf gar keinen Schaden und nur halben Schaden, wenn er misslingt." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Demilich einen Rettungswurf nicht schafft, kann er sich stattdessen entscheiden, ihn zu schaffen." },
      { name: "Immun gegen Vertreibung", beschreibung: "Der Demilich ist immun gegen die Auswirkung von Untote vertreiben." },
      { name: "Anhaltende Existenz", beschreibung: "Selbst nachdem ein Lich nur noch ein Demilich ist, überlebt sein Seelengefäß. Solange das Seelengefäß noch intakt ist, kann der Demilich nicht dauerhaft zerstört werden. Der Schädel bildet sich innerhalb von 1W10 Tagen neu, sodass die Kreatur zu ihrem elenden Zustand zurückkehrt. Wenn sein Verstand noch klar genug dazu ist, kann ein Demilich seine ehemalige Macht wiedererlangen, indem er nur eine Seele in sein Seelengefäß speist. Dies macht den Demilich wieder zu einem Lich und stellt seinen untoten Körper wieder her." },
      { name: "Untote Natur", beschreibung: "Ein Demilich braucht weder Nahrung noch Wasser oder Schlaf. Der Überlebenswille eines Demilichs ist so groß, dass er immer die maximale Anzahl von Trefferpunkten für jeden Trefferwürfel erhält, keinen Durchschnittswert." },
      { name: "Variante: Acererak und seine Jünger", beschreibung: "Ein Demilich, der wie Acererak verzauberte Juwelen in seinen Schädel eingesetzt hat, erhält folgende zusätzliche Aktionsoption. Seele fangen: Der Demilich wählt eine Kreatur innerhalb von 9 m um sich aus, die er sehen kann. Die Zielkreatur muss einen Charismarettungswurf gegen SG 19 ablegen. Bei einem misslungenen Rettungswurf wird die Seele magisch in einem der Juwelen des Demilichs gefangen. Solange die Seele gefangen ist, hören der Körper des Ziels und all seine Ausrüstung auf zu existieren. Bei einem erfolgreichen Rettungswurf erleidet das Ziel 24 (7W6) nekrotischen Schaden, und wenn dieser Schaden das Ziel auf 0 TP bringt, wird seine Seele wie bei einem misslungenen Rettungswurf gefangen. Eine Seele, die für 24 Stunden in einem Juwel gefangen ist, wird verschlungen und hört auf zu existieren. Wenn der Demilich auf 0 Trefferpunkte fällt, wird er zerstört und zerfällt zu Staub. Seine Juwelen bleiben zurück. Einen Juwel zu zermalmen befreit die Seele, die darin gefangen ist. Der Körper des Ziels bildet sich in einem nicht besetzten Bereich neben dem Juwel neu und ist im gleichen Zustand wie zu dem Zeitpunkt, als er gefangen wurde. Ein solcher Demilich hat einen HG von 20 (24.500 EP) oder 23 (50.000 EP) in seiner Behausung." }
    ],
    aktionen: [
      { name: "Heulen (Aufladung 5–6)", beschreibung: "Der Demilich stößt ein Heulen aus, das das Blut gefrieren lässt. Alle Kreaturen im Umkreis von 9 m um den Demilich, die ihn hören können, müssen einen Konstitutionsrettungswurf gegen SG 15 schaffen, um nicht auf 0 Trefferpunkte zu fallen. Bei einem erfolgreichen Rettungswurf ist die Kreatur bis zum Ende ihres nächsten Zugs verängstigt." },
      { name: "Lebensentzug", beschreibung: "Der Demilich wählt bis zu drei Kreaturen innerhalb von 3 m um sich aus, die er sehen kann. Alle Ziele müssen einen Konstitutionsrettungswurf gegen SG 19 schaffen, um nicht 21 (6W6) nekrotischen Schaden zu erleiden, und der Demilich erhält Trefferpunkte gleich dem Gesamtschaden, den er den Zielen zugefügt hat, zurück." }
    ],
    bonusaktionen: [], reaktionen: [],
    legendaere_aktionen: [
      { name: "Energieentzug (kostet 2 Aktionen)", beschreibung: "Alle Kreaturen im Umkreis von 9 m um den Demilich müssen einen Konstitutionsrettungswurf gegen SG 15 ablegen. Bei einem misslungenen Rettungswurf werden die maximalen Trefferpunkte der Kreatur magisch um 10 (3W6) verringert. Wenn dieser Effekt die maximalen Trefferpunkte einer Kreatur auf 0 senkt, dann stirbt die Kreatur. Die maximalen Trefferpunkte einer Kreatur können mit dem Zauber Vollständige Genesung oder ähnlichen Effekten wieder angehoben werden." },
      { name: "Fliegen", beschreibung: "Der Demilich fliegt bis zu seine halbe Flug-Bewegungsweite weit." },
      { name: "Staubwolke", beschreibung: "Der Demilich wirbelt auf magische Weise seine zu Staub zerfallenen Überreste auf. Alle Kreaturen im Umkreis von 3 m um den Demilich, auch wenn sie sich um eine Ecke befinden, müssen einen Konstitutionsrettungswurf gegen SG 15 schaffen, um nicht bis zum Ende des nächsten Zugs des Demilichs blind zu werden. Eine Kreatur, die den Rettungswurf schafft, ist bis zum Ende des nächsten Zugs des Demilichs immun gegen diesen Effekt." },
      { name: "Verderbter Fluch (kostet 3 Aktionen)", beschreibung: "Der Demilich wählt eine Kreatur innerhalb von 9 m um sich aus, die er sehen kann. Die Zielkreatur muss einen Weisheitsrettungswurf gegen SG 15 ablegen, um nicht magisch verflucht zu werden. Bis der Fluch endet, hat das Ziel einen Nachteil bei allen Angriffswürfen und Rettungswürfen. Das Ziel kann den Rettungswurf am Ende eines jeden seiner Züge wiederholen und den Fluch bei einem Erfolg beenden." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative 20 (er verliert alle Initiative-Gleichstände) würfelt der Demilich mit einem W20. Bei einer 11 oder höher führt er eine Hortaktion aus, um eine der folgenden Effekte zu verursachen. Er kann nicht den gleichen Effekt in zwei aufeinanderfolgenden Runden verwenden.",
      aktionen: [
        "Die Gruft bebt für einen Augenblick heftig. Alle Kreaturen auf dem Boden der Gruft müssen einen Geschicklichkeitsrettungswurf gegen SG 19 schaffen, sonst erleiden sie den Zustand liegend.",
        "Der Demilich wählt eine Kreatur innerhalb von 18 m, die er sehen kann. Ein antimagisches Feld füllt den Bereich des Ziels und bewegt sich bis Initiative 20 der nächsten Runde mit ihm.",
        "Der Demilich wählt eine beliebige Anzahl von Kreaturen innerhalb von 9 m, die er sehen kann. Kein Ziel kann bis Initiative 20 der nächsten Runde Trefferpunkte zurückerhalten."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Gruft eines Demilichs könnte einen oder mehrere der folgenden Effekte haben:",
      effekte: [
        "Das erste Mal, dass eine nicht böse Kreatur den Bereich der Gruft betritt, erleidet sie 16 (3W10) nekrotischen Schaden.",
        "Monster in der Gruft haben einen Vorteil auf Rettungswürfe, wenn sie bezaubert oder verängstigt werden sollen, sowie gegen Merkmale, die Untote vertreiben.",
        "Die Gruft ist vor den magischen Reisen von Kreaturen geschützt, denen es der Demilich nicht erlaubt hat. Solche Kreaturen können sich nicht in den Bereich der Gruft oder heraus teleportieren und können keine Reisen über die Ebenen nutzen, um einzudringen oder zu verschwinden. Effekte, die Teleportation oder Ebenenreisen erlauben, funktionieren im Bereich der Gruft durchaus, wenn sie nicht verwendet werden, um in den Bereich der Gruft zu gelangen oder ihn zu verlassen.",
        "Wenn der Demilich stirbt, schwinden diese Effekte innerhalb von 1W10 Tagen."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Doppelgänger",
    art: "Monstrosität",
    unterart: "Gestaltwandler",
    groesse: "Mittelgroß",
    gesinnung: "Neutral",
    cr: 3, xp: 700,
    rk: 14, ruestungstyp: null,
    tp: 52, tp_wuerfel: "8W8+16",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 11, DEX: 18, CON: 14, INT: 11, WIS: 12, CHA: 14 },
    rettungswuerfe: {},
    fertigkeiten: { "Motiv erkennen": 3, "Täuschen": 6 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert"],
    sinne: ["Dunkelsicht 18 m"], passiveWahrnehmung: 11,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Stadt", "Unterirdisch"],
    bild: "assets/images/monster/doppelgaenger.png",
    beschreibung: [
      "Doppelgänger sind verschlagene Gestaltwandler, die das Aussehen anderer Humanoider annehmen können, um Verfolger abzuschütteln oder Opfer mit Täuschung und Verkleidung in ihren Untergang zu locken. Wenige Kreaturen sind besser darin, Furcht, Misstrauen und Verrat zu säen als Doppelgänger. Man findet sie in allen Ländern und Kulturen, und sie können das Aussehen von Personen aller Völker annehmen.",
      "Geheimnisraub. Die angenommene Form eines Doppelgängers erlaubt es ihm, sich in fast jede Gruppe oder Gemeinschaft zu mischen, doch verleiht sie ihm keine Sprachen, Manierismen, Erinnerungen oder Persönlichkeit der Person. Doppelgänger folgen oft Kreaturen, die sie nachahmen wollen, oder fangen sie, um sie zu studieren und ihren Verstand nach Geheimnissen abzusuchen. Doppelgänger können die oberflächlichen Gedanken von Kreaturen lesen, sodass sie den Namen, die Begierden und Ängste der Kreatur in Erfahrung bringen können, zusammen mit einigen zufälligen Erinnerungen.",
      "Ein Doppelgänger, der als Teil einer langfristigen Intrige eine bestimmte Kreatur nachahmt, hält manchmal sein Double für Wochen am Leben und in seiner Nähe, um täglich seine Gedanken zu sondieren und zu lernen, wie er sich authentisch benehmen und sprechen muss.",
      "Genusssüchtige Schwindler. Doppelgänger arbeiten alleine oder in kleinen Gruppen, wobei sich die Rollen in der Gruppe von Komplott zu Komplott ändern können. Während ein Doppelgänger den Platz eines ermordeten Kaufmanns oder Adeligen einnimmt, übernehmen die anderen Rollen, die die Umstände erfordern. Sie spielen die Rolle von Familienmitgliedern und Dienern, während sie von den Reichtümern des Opfers leben.",
      "Wechselbälger. Doppelgänger sind zu faul und selbstsüchtig, um ihre Kinder großzuziehen. Sie nehmen attraktive männliche Gestalten an und verführen Frauen, die sie zurücklassen, um ihre Nachkommenschaft großzuziehen. Ein Doppelgängerkind scheint ein normales Mitglied der Spezies der Mutter zu sein, bis er in die Pubertät kommt; dann erkennt er sein wahres Wesen und verspürt den Drang, andere seiner Art zu finden und sich ihnen anzuschließen."
    ],
    besonderheiten: [
      { name: "Gestaltwandler", beschreibung: "Der Doppelgänger kann seine Aktion verwenden, um sich in die Gestalt eines kleinen oder mittelgroßen Humanoiden zu verwandeln oder seine wahre Gestalt anzunehmen. Seine Spielwerte sind gleich, egal, welche Form er gerade hat. Jede Ausrüstung, die er tragen oder in der Hand halten sollte, wird mit verwandelt. Er nimmt wieder seine wahre Gestalt an, wenn er stirbt." },
      { name: "Lauerjäger", beschreibung: "In der ersten Kampfrunde hat der Doppelgänger einen Vorteil auf seine Angriffswürfe gegen jede Kreatur, die er überrascht hat." },
      { name: "Überraschungsangriff", beschreibung: "Wenn der Doppelgänger eine Kreatur überrascht und sie in der ersten Kampfrunde mit einem Angriff trifft, dann erleidet das Ziel zusätzlich 10 (3W6) Schaden durch den Angriff." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Doppelgänger führt zwei Nahkampfangriffe durch." },
      { name: "Hieb", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W6+4) Wuchtschaden." },
      { name: "Gedanken lesen", beschreibung: "Der Doppelgänger liest die oberflächlichen Gedanken einer Kreatur innerhalb von 18 m um sich. Der Effekt kann Hindernisse durchdringen, aber 90 cm Holz oder Erde, 60 cm Stein, 5 cm Metall oder eine dünne Schicht Blei blockieren ihn. Solange das Ziel in Reichweite ist, kann der Doppelgänger weiter seine Gedanken lesen, solange die Konzentration des Doppelgängers nicht gebrochen wird (als würde er sich auf einen Zauber konzentrieren). Solange der Doppelgänger die Gedanken eines Ziels liest, hat er einen Vorteil auf Würfe mit Weisheit (Motiv erkennen) und Charisma (Täuschen, Einschüchtern und Überzeugen) gegen das Ziel." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Junger Roter Schattendrache",
    art: "Drache",
    unterart: "Schattendrache",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 13, xp: 10000,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 178, tp_wuerfel: "17W10+85",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 23, DEX: 10, CON: 21, INT: 14, WIS: 11, CHA: 19 },
    rettungswuerfe: { GES: 4, KON: 9, WEI: 4, CHA: 8 },
    fertigkeiten: { "Heimlichkeit": 8, "Wahrnehmung": 8 },
    schadensresistenzen: ["Nekrotisch"],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 18,
    sprachen: ["Gemeinsprache", "Drakonisch"],
    umgebung: ["Gebirge", "Unterirdisch", "Andere Ebenen"],
    bild: "assets/images/monster/junger_roter_schattendrache.png",
    beschreibung: [
      "Ein junger roter Drache, der lange genug im Schattensaum geweilt hat, um von seiner Dunkelheit durchdrungen zu werden. Die einst leuchtend roten Schuppen haben die Farbe von Kohle angenommen, die Schwingen sind durchscheinend geworden. Sein Feueratem ist zu schattengleichem nekrotischem Feuer mutiert, das nicht nur den Körper, sondern auch die Seele verbrennt."
    ],
    besonderheiten: [
      { name: "Lebender Schatten", beschreibung: "Solange er sich in schwachem Licht oder Dunkelheit aufhält, ist der Drache resistent gegen Schaden, der nicht Energieschaden, gleißender oder psychischer Schaden ist." },
      { name: "Heimlicher Schatten", beschreibung: "Solange er sich in schwachem Licht oder Dunkelheit bewegt, kann der Drache die Aktion Verstecken als Bonusaktion nutzen." },
      { name: "Empfindlich gegenüber Sonnenlicht", beschreibung: "Solange sich der Drache im hellen Licht befindet, hat er einen Nachteil bei Angriffswürfen und Würfen auf Weisheit (Wahrnehmung), die Sicht verwenden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt drei Angriffe aus: einen mit seinem Biss und zwei mit seinen Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden plus 3 (1W6) nekrotischer Schaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Hiebschaden." },
      { name: "Schattenodem (Aufladung 5–6)", beschreibung: "Der Drache atmet in einem Kegel von 9 m Länge schattengleiches Feuer aus. Alle Kreaturen im Kegel müssen einen Geschicklichkeitsrettungswurf gegen SG 18 ablegen. Bei einem misslungenen Rettungswurf erleiden sie 56 (16W6) nekrotischen Schaden, halb so viel Schaden bei einem erfolgreichen Rettungswurf. Ein Humanoider, dessen Trefferpunkte von diesem Schaden auf 0 reduziert werden, stirbt, und ein untoter Schatten steigt aus seiner Leiche und handelt unmittelbar nach dem Drachen in der Initiativereihenfolge. Der Schatten steht unter der Kontrolle des Drachen." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Dretch",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Klein",
    gesinnung: "Chaotisch böse",
    cr: 0.25, xp: 50,
    rk: 11, ruestungstyp: "natürliche Rüstung",
    tp: 18, tp_wuerfel: "4W6+4",
    bewegung: { "Gehen": "6 m" },
    attribute: { STR: 11, DEX: 11, CON: 12, INT: 5, WIS: 8, CHA: 3 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Blitz", "Feuer", "Kälte"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"], passiveWahrnehmung: 9,
    sprachen: ["Abyssisch", "Telepathie 18 m (funktioniert nur bei Kreaturen, die Abyssisch verstehen)"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/dretch.png",
    beschreibung: [
      "Dretchs gehören zu den schwächsten Dämonen – sie sind abscheuliche Kreaturen voller Selbsthass, dazu verdammt, die Ewigkeit in einem Zustand anhaltender Unzufriedenheit zu verbringen. Ihre geringe Intelligenz bedeutet, dass Dretchs nur für die einfachsten Aufgaben geeignet sind. Was ihnen aber an Potenzial fehlt, machen sie mit schierer Bösartigkeit wett. Dretchs ziehen in Meuten umher und geben ihre Unzufriedenheit mit Johlen, Knurren und Grunzen zu erkennen."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Dretch führt zwei Angriffe aus: einen mit seinem Biss und einen mit seinen Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +2 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 3 (1W6) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +2 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (2W4) Hiebschaden." },
      { name: "Stinkende Wolke (1/Tag)", beschreibung: "Eine Wolke aus ekelhaftem grünen Gas mit 3 m Radius breitet sich um den Dretch aus. Das Gas breitet sich um Ecken aus, und der Bereich ist leicht verschleiert. Es hält für 1 Minute an oder bis ein starker Wind es zerstreut. Alle Kreaturen, die ihren Zug in diesem Bereich beginnen, müssen einen Konstitutionsrettungswurf gegen SG 11 schaffen, um nicht bis zum Beginn ihres nächsten Zuges vergiftet zu werden. Solange das Ziel auf diese Weise vergiftet ist, kann es in seinem Zug entweder eine Aktion oder eine Bonusaktion ausführen, nicht beides, und kann keine Reaktionen ausführen." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Fliegendes Schwert",
    art: "Konstrukt",
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 0.25, xp: 50,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 17, tp_wuerfel: "5W6",
    bewegung: { "Gehen": "0 m", "Fliegend (Schweben)": "15 m" },
    attribute: { STR: 12, DEX: 15, CON: 11, INT: 1, WIS: 5, CHA: 1 },
    rettungswuerfe: { "GES": 4 },
    fertigkeiten: {},
    schadensresistenzen: [], schadensimmunitaeten: ["Gift", "Psychisch"], verwundbarkeiten: [], zustandsimmunitaeten: ["Bezaubert", "Blind", "Gelähmt", "Taub", "Verängstigt", "Vergiftet", "Versteinert"],
    sinne: ["Blindsicht 18 m (über diesen Radius hinaus blind)"], passiveWahrnehmung: 7,
    sprachen: [],
    umgebung: ["Unterirdisch"],
    bild: "assets/images/monster/fliegendes_schwert.png",
    beschreibung: [
      "Belebte Gegenstände werden mit mächtiger Magie erschaffen, damit sie den Befehlen ihres Erschaffers folgen können. Wenn sie keine Befehle erhalten, folgen sie dem letzten, den sie erhalten haben, nach besten Möglichkeiten, und können selbstständig agieren, um einfache Anweisungen zu erfüllen. Einige belebte Gegenstände könnten sich fließend unterhalten oder sich eine Persönlichkeit zulegen, die meisten sind aber einfache Automaten.",
      "Ein fliegendes Schwert tanzt durch die Luft und kämpft mit der Zuversicht eines Kriegers, der nicht verwundet werden kann. Schwerter sind die Waffen, die am häufigsten mit Magie verzaubert werden. Äxte, Keulen, Dolche, Streitkolben, Speere und sogar selbstladende Armbrüste existieren ebenfalls in belebter Form."
    ],
    besonderheiten: [
      { name: "Konstruktnatur", beschreibung: "Ein belebter Gegenstand braucht weder Nahrung noch Wasser oder Schlaf. Die Magie, die einen Gegenstand belebt, wird gebannt, wenn das Konstrukt auf 0 Trefferpunkte fällt. Ein belebter Gegenstand, der auf 0 Trefferpunkte fällt, wird unbelebt und ist zu schwer beschädigt, um noch von großem Nutzen zu sein." },
      { name: "Antimagische Empfindlichkeit", beschreibung: "Das Schwert wird kampfunfähig, wenn es sich im Bereich eines Antimagischen Feldes aufhält. Wenn das Schwert Ziel von Magie bannen wird, muss es einen Konstitutionsrettungswurf gegen den Zauberrettungswurf-SG des Zauberwirkers ablegen, um nicht für 1 Minute bewusstlos zu werden." },
      { name: "Falsches Erscheinungsbild", beschreibung: "Solange das Schwert bewegungslos bleibt und nicht fliegt, ist es nicht von einem normalen Schwert zu unterscheiden." }
    ],
    aktionen: [
      { name: "Langschwert", beschreibung: "Nahkampf-Waffenangriff: +3 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W8+1) Hiebschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Glabrezu",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 9, xp: 5000,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 157, tp_wuerfel: "15W10+75",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 20, DEX: 15, CON: 21, INT: 19, WIS: 17, CHA: 16 },
    rettungswuerfe: { STR: 9, KON: 9, WEI: 7, CHA: 7 },
    fertigkeiten: {},
    schadensresistenzen: ["Blitz", "Feuer", "Kälte", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Wahre Sicht 36 m"], passiveWahrnehmung: 13,
    sprachen: ["Abyssisch", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/glabrezu.png",
    beschreibung: [
      "Ein Glabrezu hat großes Vergnügen dabei, Sterbliche durch Versuchung zu zerstören, und diese Kreaturen gehören zu den wenigen Dämonen, die ihre Dienste Kreaturen anbieten, die närrisch genug sind, sie zu beschwören.",
      "Auch wenn Glabrezus im Kampf extrem gefährlich sind, ziehen sie es vor, ihre Opfer zu verführen und in den Untergang zu leiten. Dabei verwenden sie Macht oder Wohlstand als Köder. Durch List, Tricks und böse Abmachungen häuft ein Glabrezu Reichtümer an, die er nutzt, um die Versprechungen zu erfüllen, die sie kurzsichtigen Beschwörern und willensschwachen Sterblichen gemacht haben. Wenn aber seine Versuche, das Opfer zu verführen oder zu täuschen misslingen, dann hat der Glabrezu die Stärke, um zu kämpfen und zu gewinnen."
    ],
    besonderheiten: [
      { name: "Angeborenes Zauberwirken", beschreibung: "Das Attribut zum Wirken angeborener Zauber für den Glabrezu ist Intelligenz (Zauberrettungswurf-SG 16). Der Glabrezu kann die folgenden Zaubersprüche angeboren wirken, wobei keine Materialkomponenten notwendig sind: willentlich: Dunkelheit, Magie bannen, Magie entdecken; jeweils 1/Tag: Fliegen, Verwirrung, Wort der Macht – Betäubung." },
      { name: "Magieresistenz", beschreibung: "Der Glabrezu hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Variante: Dämonenbeschwörung", beschreibung: "Beschwöre Dämon (1/Tag): Der Dämon entscheidet, was er beschwören will und führt eine magische Beschwörung durch. Ein Glabrezu hat eine Chance von 30%, 1W3 Vrocks, 1W2 Hezrous oder einen Glabrezu zu beschwören. Ein beschworener Dämon erscheint in einem nicht besetzten Bereich innerhalb von 18 m um seinen Beschwörer, dient als Verbündeter des Beschwörers und kann selbst keine anderen Dämonen beschwören. Er bleibt für 1 Minute, bis sein Beschwörer getötet worden ist oder bis der Beschwörer ihn als Bonusaktion fortschickt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Glabrezu führt vier Angriffe aus: zwei mit seinen Zangen und zwei mit seinen Fäusten. Alternativ kann er zwei Angriffe mit seinen Zangen machen und einen Zauber wirken." },
      { name: "Zangen", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 16 (2W10+5) Wuchtschaden. Wenn das Ziel eine mittelgroße oder kleinere Kreatur ist, wird es gepackt (Rettungswurf zum Entkommen 15). Der Glabrezu hat zwei Zangen, und mit jeder kann er ein Ziel packen." },
      { name: "Faust", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (2W4+2) Wuchtschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Goristro",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Riesig",
    gesinnung: "Chaotisch böse",
    cr: 17, xp: 18000,
    rk: 19, ruestungstyp: "natürliche Rüstung",
    tp: 310, tp_wuerfel: "23W12+161",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 25, DEX: 11, CON: 25, INT: 6, WIS: 13, CHA: 14 },
    rettungswuerfe: { STR: 13, GES: 6, KON: 13, WEI: 7 },
    fertigkeiten: { "Wahrnehmung": 7 },
    schadensresistenzen: ["Blitz", "Feuer", "Kälte", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 36 m"], passiveWahrnehmung: 17,
    sprachen: ["Abyssisch"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/goristro.png",
    beschreibung: [
      "Der Goristro erinnert an einen teuflischen Minotaurus, der mehr als sieben Meter groß ist. Wenn er von einem Dämonenfürsten kontrolliert wird, ist der Goristro eine eindrucksvolle lebende Belagerungsmaschine und ein geschätztes Haustier. Goristros verfügen über übernatürliche Gerissenheit, wenn sie sich in labyrinthartigen Tunneln und wechselhaften Korridoren orientieren wollen, sodass sie ihre Feinde in einer grauenvollen Jagd hetzen können.",
      "Manchmal trägt ein riesiger Goristro eine Sänfte und trägt so kleinere Dämonen auf seinen breiten Schultern, so wie ein Elefant seinen Reiter auf seinem Rücken trägt."
    ],
    besonderheiten: [
      { name: "Sturmangriff", beschreibung: "Wenn sich der Goristro mindestens 4,5 m in gerader Linie auf ein Ziel zubewegt und dann im gleichen Zug mit seinem Aufspießen angreift, dann erleidet das Ziel zusätzlich 38 (7W10) Schaden. Wenn das Ziel eine Kreatur ist, muss sie einen Stärkerettungswurf gegen SG 21 schaffen, sonst wird sie bis zu 6 m weggestoßen und erleidet den Zustand liegend." },
      { name: "Erinnerung des Labyrinths", beschreibung: "Der Goristro kann sich perfekt an jeden Weg erinnern, den er zurückgelegt hat." },
      { name: "Magieresistenz", beschreibung: "Der Goristro hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Belagerungsmonster", beschreibung: "Der Goristro verursacht doppelten Schaden gegen Gegenstände und Bauwerke." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Goristro führt drei Angriffe aus: zwei mit seinen Fäusten und einen mit seinen Hufen." },
      { name: "Faust", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 20 (3W8+7) Wuchtschaden." },
      { name: "Hufe", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 23 (3W10+7) Wuchtschaden. Wenn das Ziel eine Kreatur ist, muss sie einen Stärkerettungswurf gegen SG 21 schaffen, sonst erleidet sie den Zustand liegend." },
      { name: "Aufspießen", beschreibung: "Nahkampf-Waffenangriff: +13 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 45 (7W10+7) Stichschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Uralter Grüner Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Gigantisch",
    gesinnung: "Rechtschaffen böse",
    cr: 22, xp: 41000,
    rk: 21, ruestungstyp: "natürliche Rüstung",
    tp: 385, tp_wuerfel: "22W20+154",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 27, DEX: 12, CON: 25, INT: 20, WIS: 17, CHA: 19 },
    rettungswuerfe: { GES: 8, KON: 14, WEI: 10, CHA: 11 },
    fertigkeiten: { "Heimlichkeit": 8, "Motiv erkennen": 10, "Täuschen": 11, "Überzeugen": 11, "Wahrnehmung": 17 },
    schadensresistenzen: [], schadensimmunitaeten: ["Gift"], verwundbarkeiten: [], zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 27,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Wald"],
    bild: "assets/images/monster/uralter_gruener_drache.png",
    beschreibung: [
      "Uralte Grüne Drachen sind die verschlagensten und tückischsten der wahren Drachen. Jahrhunderte der Manipulation haben sie zu Meistern der Intrige gemacht – sie nutzen Irreführung und List, um die Oberhand zu gewinnen, ohne unnötig Kraft aufwenden zu müssen.",
      "Launische Jäger. Ein grüner Drache patrouilliert sein Revier aus der Luft und am Boden. Er frisst jede Kreatur, die er sehen kann, und verspeist Büsche und kleinere Bäume wenn er hungrig genug ist. Seine liebste Beute sind Elfen. Er verfolgt seine Beute tagelang, genießt den Schrecken, den sein Auftauchen auslöst, und tötet niemals alle Feinde – Einschüchterung ist sein bevorzugtes Werkzeug zur Kontrolle der Überlebenden.",
      "Manipulative Ränkeschmiede. Grüne Drachen unterwerfen andere ihrem Willen, indem sie deren tiefste Begierden ausnutzen. Gegenüber Schwächeren sind sie redegewandt und schmeichlerisch; untereinander laut und grobschlächtig. Sie akzeptieren die Dienste von Goblinoiden, Atterkopps, Ettins, Kobolden, Orks und Yuan-Ti, und ergötzen sich daran, Elfen zu korrumpieren.",
      "Lebende Schätze. Die Lieblingsschätze eines grünen Drachen sind die denkenden Kreaturen, die er seinem Willen unterwirft, darunter Helden, Gelehrte und Barden. Als materielle Schätze mögen grüne Drachen Smaragde, Holzschnitzereien, Musikinstrumente und Skulpturen ihrer humanoiden Untergebenen."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann sowohl Luft als auch Wasser atmen." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er sich entscheiden, ihn stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Furchterregende Präsenz einsetzen. Danach führt er drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 19 (2W10+8) Stichschaden plus 10 (3W6) Giftschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 22 (4W6+8) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 17 (2W8+8) Wuchtschaden." },
      { name: "Furchterregende Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet und sich seiner bewusst ist, muss einen Weisheitsrettungswurf gegen SG 19 schaffen, oder sie ist für 1 Minute verängstigt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen, um den Effekt bei Erfolg zu beenden. Wenn der Rettungswurf erfolgreich ist oder der Effekt endet, ist die Kreatur für die nächsten 24 Stunden immun gegen die Furchterregende Präsenz des Drachen." },
      { name: "Giftodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet giftiges Gas in einem Kegel von 27 m Länge. Jede Kreatur im Kegel muss einen Konstitutionsrettungswurf gegen SG 22 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 77 (22W6) Giftschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Drache schafft einen Weisheit (Wahrnehmung) Wurf." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Schwingenangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Schwingen. Jede Kreatur innerhalb von 4,5 m vom Drachen muss einen Geschicklichkeitsrettungswurf gegen SG 23 schaffen oder erleidet 15 (2W6+8) Wuchtschaden und wird zu Boden geworfen. Der Drache kann dann bis zu seiner halben Flugbewegungsrate fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative-Rang 20 (bei Gleichstand verliert er) kann der Drache eine der folgenden Hortaktionen nutzen; er kann dieselbe nicht zwei Runden in Folge nutzen:",
      aktionen: [
        "Schlingranken und Lianen wuchern in einem Radius von 6 m um einen Punkt auf dem Boden innerhalb von 36 m. Der Bereich wird schwieriges Gelände, und alle Kreaturen dort müssen einen Stärkerettungswurf gegen SG 15 ablegen, um nicht festgesetzt zu werden. Eine Kreatur kann befreit werden, wenn sie oder eine andere Kreatur eine Aktion aufwendet und einen Stärkewurf gegen SG 15 besteht. Die Ranken verdorren, wenn der Drache diese Hortaktion erneut nutzt oder stirbt.",
        "Eine Mauer aus dornigem Gebüsch wächst auf einer festen Oberfläche innerhalb von 36 m. Die Mauer ist bis zu 18 m lang, 3 m hoch und 1,5 m dick und blockiert Sichtlinien. Kreaturen in ihrem Bereich beim Erscheinen müssen einen Geschicklichkeitsrettungswurf gegen SG 15 schaffen oder erleiden 18 (4W8) Stichschaden und werden 1,5 m aus dem Bereich geschoben. Bewegung durch die Mauer kostet 4-fache Distanz. Kontakt mit der Mauer: einmal pro Runde GES SG 15 oder 18 (4W8) Stichschaden (halb bei Erfolg). Jeder Mauerabschnitt von 3 m hat RK 5, 15 TP, Empfindlichkeit gegen Feuer, Resistenz gegen Wucht- und Stichschaden sowie Immunität gegen psychischen Schaden. Die Mauer sinkt zurück, wenn der Drache diese Hortaktion erneut nutzt oder stirbt.",
        "Magischer Nebel wabert um eine Kreatur innerhalb von 36 m auf, die der Drache sehen kann. Die Kreatur muss einen Weisheitsrettungswurf gegen SG 15 ablegen, um nicht bis Initiative 20 der nächsten Runde vom grünen Drachen bezaubert zu werden."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region rund um den Hort eines legendären grünen Drachen ist von der Magie des Drachen deformiert und schafft einen oder mehrere der folgenden Effekte:",
      effekte: [
        "Dickichte formen labyrinthartige Durchgänge im Umkreis von 1,5 km um die Behausung. Die Dickichte sind 3 m hohe, 3 m dicke Mauern, die Sichtlinien blockieren. Bewegung durch das Dickicht kostet 4-fache Distanz. Kontakt mit dem Dickicht: einmal pro Runde GES SG 15 oder 3 (1W6) Stichschaden. Jeder Würfel von 3 m Kantenlänge hat RK 5, 30 TP, Resistenz gegen Wucht- und Stichschaden, Empfindlichkeit gegen Feuer sowie Immunität gegen psychischen Schaden und Schallschaden.",
        "Innerhalb von 1,5 km um die Behausung hinterlässt der Drache keine physischen Spuren seiner Anwesenheit, wenn er es nicht möchte. Seine Fährte ist nur mit magischen Mitteln verfolgbar. Außerdem ignoriert der Drache Bewegungseinschränkungen und Schaden durch Pflanzen in diesem Bereich, einschließlich der Dickichte.",
        "Nagetiere und Vögel innerhalb von 1,5 km um die Behausung dienen als seine Augen und Ohren. Rehe und andere große Wildtiere sind seltsam abwesend, was auf ein unnatürlich hungriges Raubtier schließen lässt. Wenn der Drache stirbt, verlieren die Nagetiere und Vögel ihre übernatürliche Verbindung. Das Dickicht wird innerhalb von 1W10 Tagen zu gewöhnlichen Pflanzen."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Ausgewachsener Grüner Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Riesig",
    gesinnung: "Rechtschaffen böse",
    cr: 15, xp: 13000,
    rk: 19, ruestungstyp: "natürliche Rüstung",
    tp: 207, tp_wuerfel: "18W12+90",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 23, DEX: 12, CON: 21, INT: 18, WIS: 15, CHA: 17 },
    rettungswuerfe: { GES: 6, KON: 10, WEI: 7, CHA: 8 },
    fertigkeiten: { "Heimlichkeit": 6, "Motiv erkennen": 7, "Täuschen": 8, "Überzeugen": 8, "Wahrnehmung": 12 },
    schadensresistenzen: [], schadensimmunitaeten: ["Gift"], verwundbarkeiten: [], zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 22,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Wald"],
    bild: "assets/images/monster/ausgewachsener_gruener_drache.png",
    beschreibung: [
      "Ausgewachsene Grüne Drachen haben ihren Wald über Jahrzehnte mit List und Einschüchterung unter Kontrolle gebracht. Ein beständiger Nebel mit dem beißenden Geruch ihres Giftatems hängt um ihre Behausung, und die Bäume wachsen zu einem labyrinthartigen Irrgarten zusammen."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann sowohl Luft als auch Wasser atmen." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er sich entscheiden, ihn stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Furchterregende Präsenz einsetzen. Danach führt er drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden plus 7 (2W6) Giftschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 15 (2W8+6) Wuchtschaden." },
      { name: "Furchterregende Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet und sich seiner bewusst ist, muss einen Weisheitsrettungswurf gegen SG 16 schaffen, oder sie ist für 1 Minute verängstigt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen, um den Effekt bei Erfolg zu beenden. Wenn der Rettungswurf erfolgreich ist oder der Effekt endet, ist die Kreatur für die nächsten 24 Stunden immun gegen die Furchterregende Präsenz des Drachen." },
      { name: "Giftodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet giftiges Gas in einem Kegel von 18 m Länge. Jede Kreatur im Kegel muss einen Konstitutionsrettungswurf gegen SG 18 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 56 (16W6) Giftschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Drache schafft einen Weisheit (Wahrnehmung) Wurf." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Schwingenangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Schwingen. Jede Kreatur innerhalb von 3 m vom Drachen muss einen Geschicklichkeitsrettungswurf gegen SG 19 schaffen oder erleidet 13 (2W6+6) Wuchtschaden und wird zu Boden geworfen. Der Drache kann dann bis zu seiner halben Flugbewegungsrate fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative-Rang 20 (bei Gleichstand verliert er) kann der Drache eine der folgenden Hortaktionen nutzen; er kann dieselbe nicht zwei Runden in Folge nutzen:",
      aktionen: [
        "Schlingranken und Lianen wuchern in einem Radius von 6 m um einen Punkt auf dem Boden innerhalb von 36 m. Der Bereich wird schwieriges Gelände, und alle Kreaturen dort müssen einen Stärkerettungswurf gegen SG 15 ablegen, um nicht festgesetzt zu werden. Eine Kreatur kann befreit werden, wenn sie oder eine andere Kreatur eine Aktion aufwendet und einen Stärkewurf gegen SG 15 besteht. Die Ranken verdorren, wenn der Drache diese Hortaktion erneut nutzt oder stirbt.",
        "Eine Mauer aus dornigem Gebüsch wächst auf einer festen Oberfläche innerhalb von 36 m. Die Mauer ist bis zu 18 m lang, 3 m hoch und 1,5 m dick und blockiert Sichtlinien. Kreaturen in ihrem Bereich beim Erscheinen müssen einen Geschicklichkeitsrettungswurf gegen SG 15 schaffen oder erleiden 18 (4W8) Stichschaden und werden 1,5 m aus dem Bereich geschoben. Bewegung durch die Mauer kostet 4-fache Distanz. Kontakt mit der Mauer: einmal pro Runde GES SG 15 oder 18 (4W8) Stichschaden (halb bei Erfolg). Jeder Mauerabschnitt von 3 m hat RK 5, 15 TP, Empfindlichkeit gegen Feuer, Resistenz gegen Wucht- und Stichschaden sowie Immunität gegen psychischen Schaden. Die Mauer sinkt zurück, wenn der Drache diese Hortaktion erneut nutzt oder stirbt.",
        "Magischer Nebel wabert um eine Kreatur innerhalb von 36 m auf, die der Drache sehen kann. Die Kreatur muss einen Weisheitsrettungswurf gegen SG 15 ablegen, um nicht bis Initiative 20 der nächsten Runde vom grünen Drachen bezaubert zu werden."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region rund um den Hort eines legendären grünen Drachen ist von der Magie des Drachen deformiert und schafft einen oder mehrere der folgenden Effekte:",
      effekte: [
        "Dickichte formen labyrinthartige Durchgänge im Umkreis von 1,5 km um die Behausung. Die Dickichte sind 3 m hohe, 3 m dicke Mauern, die Sichtlinien blockieren. Bewegung durch das Dickicht kostet 4-fache Distanz. Kontakt mit dem Dickicht: einmal pro Runde GES SG 15 oder 3 (1W6) Stichschaden. Jeder Würfel von 3 m Kantenlänge hat RK 5, 30 TP, Resistenz gegen Wucht- und Stichschaden, Empfindlichkeit gegen Feuer sowie Immunität gegen psychischen Schaden und Schallschaden.",
        "Innerhalb von 1,5 km um die Behausung hinterlässt der Drache keine physischen Spuren seiner Anwesenheit, wenn er es nicht möchte. Seine Fährte ist nur mit magischen Mitteln verfolgbar. Außerdem ignoriert der Drache Bewegungseinschränkungen und Schaden durch Pflanzen in diesem Bereich, einschließlich der Dickichte.",
        "Nagetiere und Vögel innerhalb von 1,5 km um die Behausung dienen als seine Augen und Ohren. Rehe und andere große Wildtiere sind seltsam abwesend, was auf ein unnatürlich hungriges Raubtier schließen lässt. Wenn der Drache stirbt, verlieren die Nagetiere und Vögel ihre übernatürliche Verbindung. Das Dickicht wird innerhalb von 1W10 Tagen zu gewöhnlichen Pflanzen."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Junger Grüner Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Groß",
    gesinnung: "Rechtschaffen böse",
    cr: 8, xp: 3900,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 136, tp_wuerfel: "16W10+48",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 19, DEX: 12, CON: 17, INT: 16, WIS: 13, CHA: 15 },
    rettungswuerfe: { GES: 4, KON: 6, WEI: 4, CHA: 5 },
    fertigkeiten: { "Heimlichkeit": 4, "Täuschen": 4, "Wahrnehmung": 7 },
    schadensresistenzen: [], schadensimmunitaeten: ["Gift"], verwundbarkeiten: [], zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 17,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Wald"],
    bild: "assets/images/monster/junger_gruener_drache.png",
    beschreibung: [
      "Junge Grüne Drachen sind bereits erschreckend gerissen. Sie beobachten ihre Beute tagelang, bevor sie zuschlagen, und beginnen früh damit, schwächere Kreaturen zu manipulieren und als Informanten einzusetzen."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann sowohl Luft als auch Wasser atmen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (2W10+4) Stichschaden plus 7 (2W6) Giftschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Hiebschaden." },
      { name: "Giftodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet giftiges Gas in einem Kegel von 9 m Länge. Jede Kreatur im Kegel muss einen Konstitutionsrettungswurf gegen SG 14 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 42 (12W6) Giftschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Grüner Drachennestling",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Mittelgroß",
    gesinnung: "Rechtschaffen böse",
    cr: 2, xp: 450,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 38, tp_wuerfel: "7W8+7",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m", "Schwimmen": "9 m" },
    attribute: { STR: 15, DEX: 12, CON: 13, INT: 14, WIS: 11, CHA: 13 },
    rettungswuerfe: { GES: 3, KON: 3, WEI: 2, CHA: 3 },
    fertigkeiten: { "Heimlichkeit": 3, "Wahrnehmung": 4 },
    schadensresistenzen: [], schadensimmunitaeten: ["Gift"], verwundbarkeiten: [], zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 18 m"], passiveWahrnehmung: 14,
    sprachen: ["Drakonisch"],
    umgebung: ["Wald"],
    bild: "assets/images/monster/gruener_drachennestling.png",
    beschreibung: [
      "Grüne Drachennestlinge haben fast schwarze Schuppen, die sich mit zunehmendem Alter ins Grüne aufhellen. Auch als Nestling sind sie bereits hinterlistig und beobachten neugierig alles um sie herum."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann sowohl Luft als auch Wasser atmen." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W10+2) Stichschaden plus 3 (1W6) Giftschaden." },
      { name: "Giftodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet giftiges Gas in einem Kegel von 4,5 m Länge. Jede Kreatur im Kegel muss einen Konstitutionsrettungswurf gegen SG 11 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 21 (6W6) Giftschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Hezrou",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 8, xp: 3900,
    rk: 16, ruestungstyp: "natürliche Rüstung",
    tp: 136, tp_wuerfel: "13W10+65",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 19, DEX: 17, CON: 20, INT: 5, WIS: 12, CHA: 13 },
    rettungswuerfe: { STR: 7, KON: 8, WEI: 4 },
    fertigkeiten: {},
    schadensresistenzen: ["Blitz", "Feuer", "Kälte", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 36 m"], passiveWahrnehmung: 11,
    sprachen: ["Abyssisch", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/hezrou.png",
    beschreibung: [
      "Hezrous dienen als Fußsoldaten in den Dämonenhorden des Abyss. Auch wenn sie körperlich mächtig sind, ist ihr Verstand schwach, und Hezrous können leicht von mächtigeren Dämonen dazu gebracht werden, sich zu opfern. Während sie nach vorne in das Herz der gegnerischen Truppen vorstoßen, kann ihr übler Gestank sogar die stärksten Gegner mit Übelkeit erfüllen."
    ],
    besonderheiten: [
      { name: "Magieresistenz", beschreibung: "Der Hezrou hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Gestank", beschreibung: "Alle Kreaturen, die ihren Zug innerhalb von 6 m um den Hezrou beginnen, müssen einen Konstitutionsrettungswurf gegen SG 14 schaffen, um nicht bis zum Beginn ihres nächsten Zuges vergiftet zu werden. Bei einem erfolgreichen Rettungswurf ist die Kreatur für 24 Stunden immun gegen den Gestank des Hezrous." },
      { name: "Variante: Dämonenbeschwörung", beschreibung: "Beschwöre Dämon (1/Tag): Der Dämon entscheidet, was er beschwören will und führt eine magische Beschwörung durch. Ein Hezrou hat eine Chance von 30%, 2W6 Dretchs oder einen Hezrou zu beschwören. Ein beschworener Dämon erscheint in einem nicht besetzten Bereich innerhalb von 18 m um seinen Beschwörer, dient als Verbündeter des Beschwörers und kann selbst keine anderen Dämonen beschwören. Er bleibt für 1 Minute, bis sein Beschwörer getötet worden ist oder bis der Beschwörer ihn als Bonusaktion fortschickt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Hezrou führt drei Angriffe aus: einen mit seinem Biss und zwei mit seinen Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 15 (2W10+4) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Hiebschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Manen",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Klein",
    gesinnung: "Chaotisch böse",
    cr: 0.125, xp: 25,
    rk: 9, ruestungstyp: null,
    tp: 9, tp_wuerfel: "2W6+2",
    bewegung: { "Gehen": "6 m" },
    attribute: { STR: 10, DEX: 9, CON: 13, INT: 3, WIS: 8, CHA: 4 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Blitz", "Feuer", "Kälte"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"], passiveWahrnehmung: 9,
    sprachen: ["versteht Abyssisch, kann aber nicht sprechen"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/manen.png",
    beschreibung: [
      "Seelen von bösen Kreaturen, die in die unteren Ebenen absteigen, werden in Manen verwandelt – die niederste Form von Dämon. Diese elenden Unholde greifen jeden Nicht-Dämon an, den sie sehen, und sie werden von jenen auf die Materielle Ebene gerufen, die Tod und Chaos säen wollen.",
      "Orcus, der Prinz des Untodes, hat die Macht, Manen in untote Monster zu verwandeln, vor allem in Ghule und Schatten. Andere Dämonenfürsten ernähren sich von Manen, wobei sie sie vollständig auslöschen. Ansonsten löst sich eine Mane, die getötet wird, in eine Wolke stinkender Dämpfe auf, die sich innerhalb eines Tages zu einer neuen Mane formt."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +2 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (2W4) Hiebschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Marilith",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 16, xp: 15000,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 189, tp_wuerfel: "18W10+90",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 18, DEX: 20, CON: 20, INT: 18, WIS: 16, CHA: 20 },
    rettungswuerfe: { STR: 9, KON: 10, WEI: 8, CHA: 10 },
    fertigkeiten: {},
    schadensresistenzen: ["Blitz", "Feuer", "Kälte", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Wahre Sicht 36 m"], passiveWahrnehmung: 13,
    sprachen: ["Abyssisch", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/marilith.png",
    beschreibung: [
      "Eine Marilith ist schrecklich anzusehen. Sie hat den Unterleib einer großen Schlange und den Oberkörper einer weiblichen Humanoiden mit sechs Armen. Die Marilith führt in jeder ihrer sechs Hände eine bösartige Klinge und ist ein vernichtender Gegner, mit dem sich wenige im Kampf messen können.",
      "Diese Dämonen haben einen scharfen Verstand und sind taktisch sehr geschickt. Sie können andere Dämonen anführen und unter einem Banner vereinen. Mariliths trifft man oft als die Hauptleute an der Spitze einer gewaltigen Dämonenhorde an, wo sie jede Gelegenheit nutzen, selbst in die Schlacht zu stürmen."
    ],
    besonderheiten: [
      { name: "Magieresistenz", beschreibung: "Die Marilith hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Magische Waffen", beschreibung: "Die Waffenangriffe der Marilith sind magisch." },
      { name: "Reaktiv", beschreibung: "Die Marilith kann in jedem Zug eines Kampfes eine Reaktion durchführen." },
      { name: "Variante: Dämonenbeschwörung", beschreibung: "Beschwöre Dämon (1/Tag): Der Dämon entscheidet, was er beschwören will und führt eine magische Beschwörung durch. Eine Marilith hat eine Chance von 50%, 1W6 Vrocks, 1W4 Hezrous, 1W3 Glabrezus, 1W2 Nalfeshnees oder eine Marilith zu beschwören. Ein beschworener Dämon erscheint in einem nicht besetzten Bereich innerhalb von 18 m um seinen Beschwörer, dient als Verbündeter des Beschwörers und kann selbst keine anderen Dämonen beschwören. Er bleibt für 1 Minute, bis sein Beschwörer getötet worden ist oder bis der Beschwörer ihn als Bonusaktion fortschickt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Marilith führt sieben Angriffe aus: sechs mit ihren Langschwertern und einen mit ihrem Schwanz." },
      { name: "Langschwert", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W8+4) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 3 m, eine Kreatur. Treffer: 15 (2W10+4) Wuchtschaden. Wenn das Ziel mittelgroß oder kleiner ist, wird es gepackt (Rettungswurf zum Entkommen 19). Bis der Haltegriff endet ist das Ziel festgesetzt, die Marilith kann das Ziel automatisch mit ihrem Schwanz treffen, und die Marilith kann keine Schwanzangriffe gegen andere Ziele machen." },
      { name: "Teleportieren", beschreibung: "Die Marilith teleportiert sich magisch zusammen mit der Ausrüstung, die sie trägt oder in der Hand hält, bis zu 36 m in einen nicht besetzten Bereich, den sie sehen kann." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Parade", beschreibung: "Die Marilith addiert +5 auf ihre RK gegen einen Nahkampfangriff, der sie treffen würde. Dazu muss die Marilith den Angreifer sehen und eine Nahkampfwaffe führen." }
    ],
    legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Uralter Messingdrache",
    art: "Drache",
    unterart: "Metallischer Drache",
    groesse: "Gigantisch",
    gesinnung: "Chaotisch gut",
    cr: 20, xp: 25000,
    rk: 20, ruestungstyp: "natürliche Rüstung",
    tp: 297, tp_wuerfel: "17W20+119",
    bewegung: { "Gehen": "12 m", "Graben": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 27, DEX: 10, CON: 25, INT: 16, WIS: 15, CHA: 19 },
    rettungswuerfe: { GES: 6, KON: 13, WEI: 8, CHA: 10 },
    fertigkeiten: { "Geschichte": 9, "Heimlichkeit": 6, "Überzeugen": 10, "Wahrnehmung": 14 },
    schadensresistenzen: [], schadensimmunitaeten: ["Feuer"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 24,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Wüste"],
    bild: "assets/images/monster/uralter_messingdrache.png",
    beschreibung: [
      "Uralte Messingdrachen sind die geselligsten der wahren Drachen. Über Jahrhunderte haben sie tausende Gespräche geführt und nützliche Informationen gesammelt, die sie gerne im Austausch für Schätze teilen.",
      "Dreist geschwätzig. Ein Messingdrache folgt jeder Kreatur, die seine Präsenz verlässt, ohne einen Plausch zu halten. Wenn die Kreatur versucht zu entkommen, verwendet der Drache sein Schlafgas, um sie kampfunfähig zu machen. Wenn sie erwacht, hält sie der Drache mit riesigen Klauen auf dem Boden fest oder begräbt sie bis zum Hals im Sand – und stillt dann seinen Gesprächshunger.",
      "Wertvolle Schätze. Messingdrachen begehren besonders magische Gegenstände, die ihnen interessante Gespräche ermöglichen – eine telepathische Waffe oder eine Lampe mit einem gebundenen Djinn gehören zu den größten Schätzen. Ihren Hort verbergen sie unter Sandhaufen oder an geheimen, weit entfernten Orten."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er sich entscheiden, ihn stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Furchterregende Präsenz einsetzen. Danach führt er drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 19 (2W10+8) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (2W6+8) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 17 (2W8+8) Wuchtschaden." },
      { name: "Furchterregende Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet und sich seiner bewusst ist, muss einen Weisheitsrettungswurf gegen SG 18 schaffen, oder sie ist für 1 Minute verängstigt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen, um den Effekt bei Erfolg zu beenden. Wenn der Rettungswurf erfolgreich ist oder der Effekt endet, ist die Kreatur für die nächsten 24 Stunden immun gegen die Furchterregende Präsenz des Drachen." },
      { name: "Odemwaffen (Aufladezeit 5–6)", beschreibung: "Der Drache verwendet eine der folgenden Odemwaffen." },
      { name: "Feuerodem", beschreibung: "Der Drache atmet Feuer in einer Linie von 27 m Länge und 3 m Breite. Jede Kreatur in der Linie muss einen Geschicklichkeitsrettungswurf gegen SG 21 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 56 (16W6) Feuerschaden, bei einem gelungenen nur die Hälfte." },
      { name: "Schlafodem", beschreibung: "Der Drache atmet Schlafgas in einem Kegel von 27 m Länge. Jede Kreatur in diesem Bereich muss einen Konstitutionsrettungswurf gegen SG 21 ablegen, um nicht für 10 Minuten bewusstlos zu werden. Dieser Effekt endet für eine Kreatur, wenn sie Schaden erleidet oder jemand eine Aktion aufwendet, um sie zu wecken." },
      { name: "Formändern", beschreibung: "Der Drache verwandelt sich auf magische Weise in einen Humanoiden oder ein Tier, dessen Herausforderungsgrad nicht höher als sein eigener ist, oder nimmt wieder seine wahre Gestalt an. Er nimmt wieder seine wahre Gestalt an, wenn er stirbt. In einer neuen Gestalt behält der Drache seine Gesinnung, Trefferpunkte, Trefferwürfel, Sprachfähigkeit, Übungsbonus, Legendäre Resistenz, Hortaktionen sowie seine Intelligenz, Weisheit und Charisma, und diese Aktion. Seine Spielwerte und Fähigkeiten werden ansonsten durch die der neuen Gestalt ersetzt, mit Ausnahme der Klassenmerkmale oder legendären Aktionen dieser Gestalt." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Drache schafft einen Weisheit (Wahrnehmung) Wurf." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Schwingenangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Schwingen. Jede Kreatur innerhalb von 4,5 m vom Drachen muss einen Geschicklichkeitsrettungswurf gegen SG 22 schaffen oder erleidet 15 (2W6+8) Wuchtschaden und wird zu Boden geworfen. Der Drache kann dann bis zu seiner halben Flugbewegungsrate fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative-Rang 20 (bei Gleichstand verliert er) kann der Drache eine der folgenden Hortaktionen nutzen; er kann dieselbe nicht zwei Runden in Folge nutzen:",
      aktionen: [
        "Ein starker Wind weht um den Drachen herum. Alle Kreaturen im Umkreis von 18 m müssen einen Stärkerettungswurf gegen SG 15 schaffen, um nicht 4,5 m vom Drachen weggeschoben zu werden und liegend zu landen. Gase und Dämpfe werden zerstreut, ungeschützte Flammen erlöschen. Geschützte Flammen (wie Laternen) haben eine 50%ige Chance zu erlöschen.",
        "Eine Sandwolke füllt eine Sphäre mit einem Radius von 6 m um einen Punkt innerhalb von 36 m um den Drachen, den er sehen kann. Die Wolke breitet sich um Ecken aus. Alle Kreaturen im Bereich müssen einen Konstitutionsrettungswurf gegen SG 15 ablegen, um nicht für 1 Minute blind zu werden. Die Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei einem Erfolg beenden."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region rund um den Hort eines legendären Messingdrachens ist von der Magie des Drachen deformiert und schafft einen oder mehrere der folgenden Effekte:",
      effekte: [
        "Fährten erscheinen innerhalb von 9 km um die Behausung im Sand. Sie führen immer zu sicheren Zufluchten oder verborgenen Wasserquellen, leiten aber auch von Orten weg, die der Drache ungestört lassen möchte.",
        "Trugbilder von Monstern suchen die Wüste im Umkreis von 1,5 km um die Behausung heim. Diese Illusionen bewegen sich und wirken real, können aber keinen Schaden zufügen. Eine Kreatur kann ein Trugbild mit einem Intelligenz (Nachforschung) Wurf gegen SG 20 als Illusion erkennen. Körperliche Berührung entlarvt es sofort.",
        "Wenn eine Kreatur mit Intelligenz 3 oder höher sich innerhalb von 9 m um eine Wasserquelle innerhalb von 1,5 km um die Behausung bewegt, wird der Drache ihrer Anwesenheit und Position gewahr. Wenn der Drache stirbt, schwinden die Fährten innerhalb von 1W10 Tagen; die anderen Effekte schwinden sofort."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Ausgewachsener Messingdrache",
    art: "Drache",
    unterart: "Metallischer Drache",
    groesse: "Riesig",
    gesinnung: "Chaotisch gut",
    cr: 13, xp: 10000,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 172, tp_wuerfel: "15W12+75",
    bewegung: { "Gehen": "12 m", "Graben": "9 m", "Fliegen": "24 m" },
    attribute: { STR: 23, DEX: 10, CON: 21, INT: 14, WIS: 13, CHA: 17 },
    rettungswuerfe: { GES: 5, KON: 10, WEI: 6, CHA: 8 },
    fertigkeiten: { "Geschichte": 7, "Heimlichkeit": 5, "Überzeugen": 8, "Wahrnehmung": 11 },
    schadensresistenzen: [], schadensimmunitaeten: ["Feuer"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 21,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Wüste"],
    bild: "assets/images/monster/ausgewachsener_messingdrache.png",
    beschreibung: [
      "Ausgewachsene Messingdrachen haben Jahrzehnte damit verbracht, in menschlicher Gestalt durch Städte zu wandern und Gespräche zu sammeln. Sie vertrauen Kreaturen, die ebenso gerne reden wie sie, sind aber schlau genug, Manipulation zu erkennen – und betrachten gegenseitige Beeinflussungsversuche als Spiel."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er sich entscheiden, ihn stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Furchterregende Präsenz einsetzen. Danach führt er drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 15 (2W8+6) Wuchtschaden." },
      { name: "Furchterregende Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet und sich seiner bewusst ist, muss einen Weisheitsrettungswurf gegen SG 16 schaffen, oder sie ist für 1 Minute verängstigt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen, um den Effekt bei Erfolg zu beenden. Wenn der Rettungswurf erfolgreich ist oder der Effekt endet, ist die Kreatur für die nächsten 24 Stunden immun gegen die Furchterregende Präsenz des Drachen." },
      { name: "Odemwaffen (Aufladezeit 5–6)", beschreibung: "Der Drache verwendet eine der folgenden Odemwaffen." },
      { name: "Feuerodem", beschreibung: "Der Drache atmet Feuer in einer Linie von 18 m Länge und 1,5 m Breite. Jede Kreatur in der Linie muss einen Geschicklichkeitsrettungswurf gegen SG 18 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 45 (13W6) Feuerschaden, bei einem gelungenen nur die Hälfte." },
      { name: "Schlafodem", beschreibung: "Der Drache atmet Schlafgas in einem Kegel von 18 m Länge. Jede Kreatur in diesem Bereich muss einen Konstitutionsrettungswurf gegen SG 18 ablegen, um nicht für 10 Minuten bewusstlos zu werden. Dieser Effekt endet für eine Kreatur, wenn sie Schaden erleidet oder jemand eine Aktion aufwendet, um sie zu wecken." },
      { name: "Formändern", beschreibung: "Der Drache verwandelt sich auf magische Weise in einen Humanoiden oder ein Tier, dessen Herausforderungsgrad nicht höher als sein eigener ist, oder nimmt wieder seine wahre Gestalt an. Er nimmt wieder seine wahre Gestalt an, wenn er stirbt. In einer neuen Gestalt behält der Drache seine Gesinnung, Trefferpunkte, Trefferwürfel, Sprachfähigkeit, Übungsbonus, Legendäre Resistenz, Hortaktionen sowie seine Intelligenz, Weisheit und Charisma, und diese Aktion. Seine Spielwerte und Fähigkeiten werden ansonsten durch die der neuen Gestalt ersetzt, mit Ausnahme der Klassenmerkmale oder legendären Aktionen dieser Gestalt." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Drache schafft einen Weisheit (Wahrnehmung) Wurf." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Schwingenangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Schwingen. Jede Kreatur innerhalb von 3 m vom Drachen muss einen Geschicklichkeitsrettungswurf gegen SG 19 schaffen oder erleidet 13 (2W6+6) Wuchtschaden und wird zu Boden geworfen. Der Drache kann dann bis zu seiner halben Flugbewegungsrate fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative-Rang 20 (bei Gleichstand verliert er) kann der Drache eine der folgenden Hortaktionen nutzen; er kann dieselbe nicht zwei Runden in Folge nutzen:",
      aktionen: [
        "Ein starker Wind weht um den Drachen herum. Alle Kreaturen im Umkreis von 18 m müssen einen Stärkerettungswurf gegen SG 15 schaffen, um nicht 4,5 m vom Drachen weggeschoben zu werden und liegend zu landen. Gase und Dämpfe werden zerstreut, ungeschützte Flammen erlöschen. Geschützte Flammen (wie Laternen) haben eine 50%ige Chance zu erlöschen.",
        "Eine Sandwolke füllt eine Sphäre mit einem Radius von 6 m um einen Punkt innerhalb von 36 m um den Drachen, den er sehen kann. Die Wolke breitet sich um Ecken aus. Alle Kreaturen im Bereich müssen einen Konstitutionsrettungswurf gegen SG 15 ablegen, um nicht für 1 Minute blind zu werden. Die Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und den Effekt bei einem Erfolg beenden."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region rund um den Hort eines legendären Messingdrachens ist von der Magie des Drachen deformiert und schafft einen oder mehrere der folgenden Effekte:",
      effekte: [
        "Fährten erscheinen innerhalb von 9 km um die Behausung im Sand. Sie führen immer zu sicheren Zufluchten oder verborgenen Wasserquellen, leiten aber auch von Orten weg, die der Drache ungestört lassen möchte.",
        "Trugbilder von Monstern suchen die Wüste im Umkreis von 1,5 km um die Behausung heim. Diese Illusionen bewegen sich und wirken real, können aber keinen Schaden zufügen. Eine Kreatur kann ein Trugbild mit einem Intelligenz (Nachforschung) Wurf gegen SG 20 als Illusion erkennen. Körperliche Berührung entlarvt es sofort.",
        "Wenn eine Kreatur mit Intelligenz 3 oder höher sich innerhalb von 9 m um eine Wasserquelle innerhalb von 1,5 km um die Behausung bewegt, wird der Drache ihrer Anwesenheit und Position gewahr. Wenn der Drache stirbt, schwinden die Fährten innerhalb von 1W10 Tagen; die anderen Effekte schwinden sofort."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Junger Messingdrache",
    art: "Drache",
    unterart: "Metallischer Drache",
    groesse: "Groß",
    gesinnung: "Chaotisch gut",
    cr: 6, xp: 2300,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 110, tp_wuerfel: "13W10+39",
    bewegung: { "Gehen": "12 m", "Graben": "6 m", "Fliegen": "24 m" },
    attribute: { STR: 19, DEX: 10, CON: 17, INT: 12, WIS: 11, CHA: 15 },
    rettungswuerfe: { GES: 3, KON: 6, WEI: 3, CHA: 5 },
    fertigkeiten: { "Heimlichkeit": 3, "Überzeugen": 5, "Wahrnehmung": 6 },
    schadensresistenzen: [], schadensimmunitaeten: ["Feuer"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 16,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Wüste"],
    bild: "assets/images/monster/junger_messingdrache.png",
    beschreibung: [
      "Junge Messingdrachen sind bereits gesprächsfreudig und sammeln eifrig Neuigkeiten von Reisenden. Sie folgen Karawanen oft über weite Strecken, nur um interessante Geschichten zu hören."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (2W10+4) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Hiebschaden." },
      { name: "Odemwaffen (Aufladezeit 5–6)", beschreibung: "Der Drache verwendet eine der folgenden Odemwaffen." },
      { name: "Feuerodem", beschreibung: "Der Drache atmet Feuer in einer Linie von 12 m Länge und 1,5 m Breite. Jede Kreatur in der Linie muss einen Geschicklichkeitsrettungswurf gegen SG 14 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 42 (12W6) Feuerschaden, bei einem gelungenen nur die Hälfte." },
      { name: "Schlafodem", beschreibung: "Der Drache atmet Schlafgas in einem Kegel von 9 m Länge. Jede Kreatur in diesem Bereich muss einen Konstitutionsrettungswurf gegen SG 14 ablegen, um nicht für 5 Minuten bewusstlos zu werden. Dieser Effekt endet für eine Kreatur, wenn sie Schaden erleidet oder jemand eine Aktion aufwendet, um sie zu wecken." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Messingdrachennestling",
    art: "Drache",
    unterart: "Metallischer Drache",
    groesse: "Mittel",
    gesinnung: "Chaotisch gut",
    cr: 1, xp: 200,
    rk: 16, ruestungstyp: "natürliche Rüstung",
    tp: 16, tp_wuerfel: "3W8+3",
    bewegung: { "Gehen": "9 m", "Graben": "4,5 m", "Fliegen": "18 m" },
    attribute: { STR: 15, DEX: 10, CON: 13, INT: 10, WIS: 11, CHA: 13 },
    rettungswuerfe: { GES: 2, KON: 3, WEI: 2, CHA: 3 },
    fertigkeiten: { "Heimlichkeit": 2, "Wahrnehmung": 4 },
    schadensresistenzen: [], schadensimmunitaeten: ["Feuer"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 18 m"], passiveWahrnehmung: 14,
    sprachen: ["Drakonisch"],
    umgebung: ["Wüste"],
    bild: "assets/images/monster/messingdrachennestling.png",
    beschreibung: [
      "Messingdrachennestlinge sind bereits von Natur aus neugierig und geschwätzig, auch wenn sie die Weisheit älterer Artgenossen noch nicht besitzen."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W10+2) Stichschaden." },
      { name: "Odemwaffen (Aufladezeit 5–6)", beschreibung: "Der Drache verwendet eine der folgenden Odemwaffen." },
      { name: "Feuerodem", beschreibung: "Der Drache atmet Feuer in einer Linie von 6 m Länge und 1,5 m Breite. Jede Kreatur in der Linie muss einen Geschicklichkeitsrettungswurf gegen SG 11 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 14 (4W6) Feuerschaden, bei einem gelungenen nur die Hälfte." },
      { name: "Schlafodem", beschreibung: "Der Drache atmet Schlafgas in einem Kegel von 4,5 m Länge. Jede Kreatur in diesem Bereich muss einen Konstitutionsrettungswurf gegen SG 11 ablegen, um nicht für 1 Minute bewusstlos zu werden. Dieser Effekt endet für eine Kreatur, wenn sie Schaden erleidet oder jemand eine Aktion aufwendet, um sie zu wecken." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Nalfeshnee",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 13, xp: 10000,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 184, tp_wuerfel: "16W10+96",
    bewegung: { "Gehen": "6 m", "Fliegen": "9 m" },
    attribute: { STR: 21, DEX: 10, CON: 22, INT: 19, WIS: 12, CHA: 15 },
    rettungswuerfe: { KON: 11, INT: 9, WEI: 6, CHA: 7 },
    fertigkeiten: {},
    schadensresistenzen: ["Blitz", "Feuer", "Kälte", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Wahre Sicht 36 m"], passiveWahrnehmung: 11,
    sprachen: ["Abyssisch", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/nalfeshnee.png",
    beschreibung: [
      "Der Nalfeshnee gehört zu den groteskesten Dämonen – eine korpulente Parodie von Affe und Wildschwein, doppelt so groß wie ein Mensch, mit gefiederten Schwingen, die zu klein für seinen aufgedunsenen Körper zu sein scheinen. Dieses grobschlächtige Äußere verbirgt einen bemerkenswerten Intellekt und große List.",
      "Nalfeshnees sind im Kampf vernichtend und nutzen ihre Schwingen, um über die Frontlinien zu fliegen und verwundbare Gegner in den hinteren Reihen zu erreichen. Aus der Hitze des Gefechts heraus brüllen sie telepathische Befehle an geringere Dämonen, während sie ein Gefühl des Grauens verbreiten, das andere Dämonen in die Flucht treibt.",
      "Nalfeshnees ernähren sich von Hass und Verzweiflung, doch sehnen sie sich mehr als alles andere nach dem Fleisch von Humanoiden. Ihre Speisekammern sind stets voll mit entführten Humanoiden von der Materiellen Ebene. Diese Kreaturen werden während raffinierter Festmähler lebendig gefressen. Nalfeshnees halten sich selbst für gebildet und kultiviert und nutzen besudeltes und rostiges Besteck, wenn sie speisen."
    ],
    besonderheiten: [
      { name: "Magieresistenz", beschreibung: "Der Nalfeshnee hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Variante: Dämonenbeschwörung", beschreibung: "Beschwöre Dämon (1/Tag): Der Dämon entscheidet, was er beschwören will und führt eine magische Beschwörung durch. Ein Nalfeshnee hat eine Chance von 50%, 1W4 Vrocks, 1W3 Hezrous, 1W2 Glabrezus oder einen Nalfeshnee zu beschwören. Ein beschworener Dämon erscheint in einem nicht besetzten Bereich innerhalb von 18 m um seinen Beschwörer, dient als Verbündeter des Beschwörers und kann selbst keine anderen Dämonen beschwören. Er bleibt für 1 Minute, bis sein Beschwörer getötet worden ist oder bis der Beschwörer ihn als Bonusaktion fortschickt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Nalfeshnee verwendet Grauensnimbus, wenn er kann. Danach führt er drei Angriffe aus: einen mit seinem Biss und zwei mit seinen Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 32 (5W10+5) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (3W6+5) Hiebschaden." },
      { name: "Grauensnimbus (Aufladung 5–6)", beschreibung: "Der Nalfeshnee gibt auf magische Weise ein flimmerndes, vielfarbiges Licht ab. Alle nicht untoten Kreaturen innerhalb von 4,5 m um den Nalfeshnee, die ihn sehen können, müssen einen Weisheitsrettungswurf gegen SG 15 schaffen, um nicht für 1 Minute verängstigt zu werden. Die Kreatur kann den Rettungswurf am Ende eines jeden ihrer Züge wiederholen und den Effekt bei einem Erfolg beenden. Wenn der Rettungswurf erfolgreich ist oder der Effekt endet, dann ist die Kreatur für die nächsten 24 Stunden gegen den Grauensnimbus des Nalfeshnee immun." },
      { name: "Teleportieren", beschreibung: "Der Nalfeshnee teleportiert sich magisch zusammen mit der Ausrüstung, die er trägt oder in der Hand hält, bis zu 36 m in einen nicht besetzten Bereich, den er sehen kann." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Plesiosaurus",
    art: "Tier",
    unterart: "Dinosaurier",
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 2, xp: 450,
    rk: 13, ruestungstyp: "natürliche Rüstung",
    tp: 68, tp_wuerfel: "8W10+24",
    bewegung: { "Gehen": "6 m", "Schwimmen": "12 m" },
    attribute: { STR: 18, DEX: 15, CON: 16, INT: 2, WIS: 12, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 4, "Wahrnehmung": 3 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: [], passiveWahrnehmung: 13,
    sprachen: [],
    umgebung: ["Küste", "Sumpf", "Tropisch"],
    bild: "assets/images/monster/plesiosaurus.png",
    beschreibung: [
      "Ein Plesiosaurus ist ein Wasserdinosaurier, dessen kompakter Körper von mächtigen Flossen bewegt wird. Sie sind aggressive Räuber und greifen jede Kreatur an, auf die sie treffen. Ihr flexibler Hals macht ein Drittel ihrer Gesamtlänge aus, sodass sie sich in jede Richtung drehen können, um kräftig zuzubeißen."
    ],
    besonderheiten: [
      { name: "Atem anhalten", beschreibung: "Der Plesiosaurus kann für 1 Stunde den Atem anhalten." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 14 (3W6+4) Stichschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Pteranodon",
    art: "Tier",
    unterart: "Dinosaurier",
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 0.25, xp: 50,
    rk: 13, ruestungstyp: "natürliche Rüstung",
    tp: 13, tp_wuerfel: "3W8",
    bewegung: { "Gehen": "3 m", "Fliegen": "18 m" },
    attribute: { STR: 12, DEX: 15, CON: 10, INT: 2, WIS: 9, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 1 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: [], passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Küste", "Tropisch", "Gebirge"],
    bild: "assets/images/monster/pteranodon.png",
    beschreibung: [
      "Diese fliegenden Reptilien haben eine Flügelspannweite von 4,5 bis 6 m und machen normalerweise Sturzflugangriffe auf kleinere Beute, doch sind sie Opportunisten, die jede Kreatur angreifen, die essbar erscheint. Ein Pteranodon hat keine Zähne. Vielmehr nutzt er seinen scharfen Schnabel, um Beute aufzuspießen, die zu groß ist, um sie auf einmal zu verschlucken."
    ],
    besonderheiten: [
      { name: "Vorbeifliegen", beschreibung: "Das Pteranodon provoziert keine Gelegenheitsangriffe, wenn es aus der Reichweite eines Gegners fliegt." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +3 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (2W4+1) Stichschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Quasit",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Winzig",
    gesinnung: "Chaotisch böse",
    cr: 1, xp: 200,
    rk: 13, ruestungstyp: null,
    tp: 7, tp_wuerfel: "3W4",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 5, DEX: 17, CON: 10, INT: 7, WIS: 10, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 5 },
    schadensresistenzen: ["Blitz", "Feuer", "Kälte", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 36 m"], passiveWahrnehmung: 10,
    sprachen: ["Abyssisch", "Gemeinsprache"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/quasit.png",
    beschreibung: [
      "Quasits suchen die Unteren Ebenen heim. Sie sind körperlich schwach und bleiben in den Schatten, um Unheil und Chaos zu stiften. Mächtigere Dämonen nutzen Quasits als Spione und Botschafter, wenn sie sie nicht verschlingen oder in Stücke reißen, um sich die Zeit zu vertreiben.",
      "Ein Quasit kann Tiergestalten annehmen, doch in seiner wahren Gestalt sieht er wie ein 60 Zentimeter großer, grüner Humanoider mit einem stachligen Schwanz und Hörnern aus. Quasiten haben Krallen an den Fingern und Zehen, und sie übertragen ein irritierendes Gift. Sie ziehen es vor, unsichtbar zu sein, wenn sie angreifen."
    ],
    besonderheiten: [
      { name: "Magieresistenz", beschreibung: "Der Quasit hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Vertrauter (Variante)", beschreibung: "Der Quasit kann einer anderen Kreatur als Vertrauter dienen, wobei er ein telepathisches Band mit dem bereitwilligen Monster bildet. Solange die beiden aneinander gebunden sind, kann der Meister wahrnehmen, was der Quasit wahrnimmt, solange sie sich innerhalb von 1,5 km zueinander befinden. Solange sich der Quasit innerhalb von 3 m um seinen Meister befindet, teilt der Meister das Merkmal Magieresistenz des Quasits. Der Quasit kann zu jedem Zeitpunkt und aus jedem beliebigen Grund seinen Dienst als Vertrauter aufkündigen, was das telepathische Band beendet." }
    ],
    aktionen: [
      { name: "Klauen (Biss in Tierform)", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W4+3) Stichschaden, und das Ziel muss einen Konstitutionsrettungswurf gegen SG 10 ablegen, um nicht 5 (2W4) Giftschaden zu erleiden und für 1 Minute vergiftet zu werden. Das Ziel kann den Rettungswurf am Ende eines jeden seiner Züge wiederholen und den Effekt bei einem Erfolg beenden." },
      { name: "Verängstigen (1/Tag)", beschreibung: "Eine Kreatur nach Wahl des Quasits innerhalb von 6 m muss einen Weisheitsrettungswurf gegen SG 10 ablegen, um nicht für 1 Minute verängstigt zu werden. Die Kreatur kann den Rettungswurf am Ende eines jeden Zuges wiederholen, mit Nachteil, wenn der Quasit noch immer in Sichtweite ist, und den Effekt bei einem Erfolg vorzeitig beenden." },
      { name: "Gestaltwandler", beschreibung: "Der Quasit kann seine Aktion verwenden, um die Gestalt einer Fledermaus (Geschwindigkeit 3 m, fliegen 12 m), eines Tausendfüßlers (Geschwindigkeit 12 m, klettern 12 m) oder einer Kröte (Geschwindigkeit 12 m, schwimmen 12 m) anzunehmen oder wieder zu seiner Dämonengestalt zurückzukehren. Seine Spielwerte sind in jeder Gestalt gleich, bis auf die angegebenen Unterschiede in der Bewegungsrate. Jede Ausrüstung, die der Quasit tragen oder in der Hand halten sollte, wird mit verwandelt. Er nimmt wieder seine wahre Gestalt an, wenn er stirbt." },
      { name: "Unsichtbarkeit", beschreibung: "Der Quasit kann sich magisch unsichtbar machen, bis er angreift, bis er Verängstigen verwendet oder bis seine Konzentration endet (dies wird behandelt, als würde er sich auf einen Zauber konzentrieren). Jede Ausrüstung, die der Quasit trägt oder in der Hand hält, wird mit ihm unsichtbar." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Uralter Roter Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Gigantisch",
    gesinnung: "Chaotisch böse",
    cr: 24, xp: 62000,
    rk: 22, ruestungstyp: "natürliche Rüstung",
    tp: 546, tp_wuerfel: "28W20+252",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 30, DEX: 10, CON: 29, INT: 18, WIS: 15, CHA: 23 },
    rettungswuerfe: { GES: 7, KON: 16, WEI: 9, CHA: 13 },
    fertigkeiten: { "Heimlichkeit": 7, "Wahrnehmung": 16 },
    schadensresistenzen: [], schadensimmunitaeten: ["Feuer"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 26,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Gebirge"],
    bild: "assets/images/monster/uralter_roter_drache.png",
    beschreibung: [
      "Uralte Rote Drachen sind die habgierigsten und arrogantesten der wahren Drachen. Der Gestank von Schwefel und Bimsstein umgibt sie, ihre Umrisse werden von nach hinten zeigenden Hörnern und einem charakteristischen Rückenkamm definiert. Ihre Schuppen sind im Alter dunkelrot und so dick wie Metall geworden, ihre Pupillen fast verschwunden – die ältesten haben Augen wie geschmolzene Lavakugeln.",
      "Arrogante Tyrannen. Rote Drachen betrachten sich als Könige und Kaiser. Kein anderer Drache kommt an ihre Arroganz heran – sie glauben, von Tiamat auserkoren zu sein, in ihrem Namen zu herrschen, und sehen die gesamte Welt und alle Kreaturen auf ihr als ihre Untertanen. Wenn sie gereizt werden, verfallen sie in einen zerstörerischen Zorn.",
      "Status und Sklaven. Rote Drachen fordern Lehnstreue von chaotisch bösen Humanoiden. Wer sie verweigert, wird abgeschlachtet. Ihre Diener leben in ständiger Angst, geröstet zu werden, und verbringen den Großteil ihrer Zeit damit, sich beim Drachen einzuschmeicheln.",
      "Zwanghafte Sammler. Rote Drachen kennen den Wert und die genaue Position jedes Gegenstands in ihrem Hort. Das Fehlen einer einzigen Münze erweckt ihren Zorn und treibt sie dazu, den Dieb aufzuspüren und ohne Gnade zu erschlagen."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er sich entscheiden, ihn stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Furchterregende Präsenz einsetzen. Danach führt er drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +17 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 21 (2W10+10) Stichschaden plus 14 (4W6) Feuerschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +17 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 17 (2W6+10) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +17 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 19 (2W8+10) Wuchtschaden." },
      { name: "Furchterregende Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet und sich seiner bewusst ist, muss einen Weisheitsrettungswurf gegen SG 21 schaffen, oder sie ist für 1 Minute verängstigt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen, um den Effekt bei Erfolg zu beenden. Wenn der Rettungswurf erfolgreich ist oder der Effekt endet, ist die Kreatur für die nächsten 24 Stunden immun gegen die Furchterregende Präsenz des Drachen." },
      { name: "Feuerodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet Feuer in einem Kegel von 27 m Länge. Jede Kreatur im Kegel muss einen Geschicklichkeitsrettungswurf gegen SG 24 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 91 (26W6) Feuerschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Drache schafft einen Weisheit (Wahrnehmung) Wurf." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Schwingenangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Schwingen. Jede Kreatur innerhalb von 4,5 m vom Drachen muss einen Geschicklichkeitsrettungswurf gegen SG 25 schaffen oder erleidet 17 (2W6+10) Wuchtschaden und wird zu Boden geworfen. Der Drache kann dann bis zu seiner halben Flugbewegungsrate fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative-Rang 20 (bei Gleichstand verliert er) kann der Drache eine der folgenden Hortaktionen nutzen; er kann dieselbe nicht zwei Runden in Folge nutzen:",
      aktionen: [
        "Magma bricht aus einem Punkt auf dem Boden innerhalb von 36 m auf, den der Drache sehen kann, und erschafft einen Geysir von 6 m Höhe und 1,5 m Radius. Alle Kreaturen im Bereich des Geysirs müssen einen Geschicklichkeitsrettungswurf gegen SG 15 ablegen. Bei einem misslingenden Rettungswurf erleiden sie 21 (6W6) Feuerschaden, bei einem gelungenen nur die Hälfte.",
        "Ein Beben erschüttert den Boden in einem Radius von 18 m um den Drachen. Alle Kreaturen außer dem Drachen, die sich auf dem Boden befinden, müssen einen Geschicklichkeitsrettungswurf gegen SG 15 ablegen, um nicht den Zustand liegend zu erleiden.",
        "Vulkanische Gase bilden eine Wolke in einer Sphäre mit einem Radius von 6 m um einen Punkt innerhalb von 36 m um den Drachen, den er sehen kann. Die Sphäre breitet sich um Ecken aus und ist leicht verschleiert. Sie hält bis Initiative 20 der nächsten Runde an. Alle Kreaturen, die ihren Zug in der Wolke beginnen, müssen einen Konstitutionsrettungswurf gegen SG 13 schaffen, um nicht bis zum Ende ihres nächsten Zuges vergiftet zu werden. Eine vergiftete Kreatur ist kampfunfähig."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region rund um den Hort eines legendären roten Drachen ist von der Magie des Drachen deformiert und schafft einen oder mehrere der folgenden Effekte:",
      effekte: [
        "Kleinere Erdbeben sind im Umkreis von 9 km um die Behausung des Drachen verbreitet.",
        "Wasserquellen innerhalb von 1,5 km um die Behausung sind übernatürlich warm und mit Schwefel verseucht.",
        "Steinspalten innerhalb von 1,5 km um die Behausung stellen Portale auf die Elementarebene des Feuers dar, was es Feuerkreaturen erlaubt, in die Welt zu treten und in der Nähe zu hausen. Wenn der Drache stirbt, schwinden diese Effekte innerhalb von 1W10 Tagen."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Ausgewachsener Roter Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Riesig",
    gesinnung: "Chaotisch böse",
    cr: 17, xp: 18000,
    rk: 19, ruestungstyp: "natürliche Rüstung",
    tp: 256, tp_wuerfel: "19W12+133",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 27, DEX: 10, CON: 25, INT: 16, WIS: 13, CHA: 21 },
    rettungswuerfe: { GES: 6, KON: 13, WEI: 7, CHA: 11 },
    fertigkeiten: { "Heimlichkeit": 6, "Wahrnehmung": 13 },
    schadensresistenzen: [], schadensimmunitaeten: ["Feuer"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 23,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Gebirge"],
    bild: "assets/images/monster/ausgewachsener_roter_drache.png",
    beschreibung: [
      "Ausgewachsene Rote Drachen haben sich ihr Bergreich durch Jahrzehnte der Gewalt und Einschüchterung gesichert. Sie hausen bevorzugt in Kavernen unter schneebedeckten Gipfeln oder in verlassenen Minen und zwergischen Festungen mit geothermaler Aktivität."
    ],
    besonderheiten: [
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er sich entscheiden, ihn stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Furchterregende Präsenz einsetzen. Danach führt er drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 19 (2W10+8) Stichschaden plus 7 (2W6) Feuerschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 15 (2W6+8) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 17 (2W8+8) Wuchtschaden." },
      { name: "Furchterregende Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet und sich seiner bewusst ist, muss einen Weisheitsrettungswurf gegen SG 19 schaffen, oder sie ist für 1 Minute verängstigt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen, um den Effekt bei Erfolg zu beenden. Wenn der Rettungswurf erfolgreich ist oder der Effekt endet, ist die Kreatur für die nächsten 24 Stunden immun gegen die Furchterregende Präsenz des Drachen." },
      { name: "Feuerodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet Feuer in einem Kegel von 18 m Länge. Jede Kreatur im Kegel muss einen Geschicklichkeitsrettungswurf gegen SG 21 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 63 (18W6) Feuerschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Drache schafft einen Weisheit (Wahrnehmung) Wurf." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Schwingenangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Schwingen. Jede Kreatur innerhalb von 3 m vom Drachen muss einen Geschicklichkeitsrettungswurf gegen SG 22 schaffen oder erleidet 15 (2W6+8) Wuchtschaden und wird zu Boden geworfen. Der Drache kann dann bis zu seiner halben Flugbewegungsrate fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative-Rang 20 (bei Gleichstand verliert er) kann der Drache eine der folgenden Hortaktionen nutzen; er kann dieselbe nicht zwei Runden in Folge nutzen:",
      aktionen: [
        "Magma bricht aus einem Punkt auf dem Boden innerhalb von 36 m auf, den der Drache sehen kann, und erschafft einen Geysir von 6 m Höhe und 1,5 m Radius. Alle Kreaturen im Bereich des Geysirs müssen einen Geschicklichkeitsrettungswurf gegen SG 15 ablegen. Bei einem misslingenden Rettungswurf erleiden sie 21 (6W6) Feuerschaden, bei einem gelungenen nur die Hälfte.",
        "Ein Beben erschüttert den Boden in einem Radius von 18 m um den Drachen. Alle Kreaturen außer dem Drachen, die sich auf dem Boden befinden, müssen einen Geschicklichkeitsrettungswurf gegen SG 15 ablegen, um nicht den Zustand liegend zu erleiden.",
        "Vulkanische Gase bilden eine Wolke in einer Sphäre mit einem Radius von 6 m um einen Punkt innerhalb von 36 m um den Drachen, den er sehen kann. Die Sphäre breitet sich um Ecken aus und ist leicht verschleiert. Sie hält bis Initiative 20 der nächsten Runde an. Alle Kreaturen, die ihren Zug in der Wolke beginnen, müssen einen Konstitutionsrettungswurf gegen SG 13 schaffen, um nicht bis zum Ende ihres nächsten Zuges vergiftet zu werden. Eine vergiftete Kreatur ist kampfunfähig."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region rund um den Hort eines legendären roten Drachen ist von der Magie des Drachen deformiert und schafft einen oder mehrere der folgenden Effekte:",
      effekte: [
        "Kleinere Erdbeben sind im Umkreis von 9 km um die Behausung des Drachen verbreitet.",
        "Wasserquellen innerhalb von 1,5 km um die Behausung sind übernatürlich warm und mit Schwefel verseucht.",
        "Steinspalten innerhalb von 1,5 km um die Behausung stellen Portale auf die Elementarebene des Feuers dar, was es Feuerkreaturen erlaubt, in die Welt zu treten und in der Nähe zu hausen. Wenn der Drache stirbt, schwinden diese Effekte innerhalb von 1W10 Tagen."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Junger Roter Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 10, xp: 5900,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 178, tp_wuerfel: "17W10+85",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 23, DEX: 10, CON: 21, INT: 14, WIS: 11, CHA: 19 },
    rettungswuerfe: { GES: 4, KON: 9, WEI: 4, CHA: 8 },
    fertigkeiten: { "Heimlichkeit": 4, "Wahrnehmung": 8 },
    schadensresistenzen: [], schadensimmunitaeten: ["Feuer"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 18,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Gebirge"],
    bild: "assets/images/monster/junger_roter_drache.png",
    beschreibung: [
      "Junge Rote Drachen sind bereits gefährlich arrogant. Sie beanspruchen ein Territorium in Gebirgen und beginnen, schwächere Kreaturen zu unterwerfen. Ihr Feueratem reicht schon aus, um ganze Gruppen von Abenteurern zu vernichten."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden plus 3 (1W6) Feuerschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Hiebschaden." },
      { name: "Feuerodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet Feuer in einem Kegel von 9 m Länge. Jede Kreatur im Kegel muss einen Geschicklichkeitsrettungswurf gegen SG 17 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 56 (16W6) Feuerschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Roter Drachennestling",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 4, xp: 1100,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 75, tp_wuerfel: "10W8+30",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Fliegen": "18 m" },
    attribute: { STR: 19, DEX: 10, CON: 17, INT: 12, WIS: 11, CHA: 15 },
    rettungswuerfe: { GES: 2, KON: 5, WEI: 2, CHA: 4 },
    fertigkeiten: { "Heimlichkeit": 2, "Wahrnehmung": 4 },
    schadensresistenzen: [], schadensimmunitaeten: ["Feuer"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 18 m"], passiveWahrnehmung: 14,
    sprachen: ["Drakonisch"],
    umgebung: ["Gebirge"],
    bild: "assets/images/monster/roter_drachennestling.png",
    beschreibung: [
      "Rote Drachennestlinge sind scharlachrot und glänzend. Schon als Nestling zeigen sie die Arroganz ihrer Art und bean spruchen Territorium weit über ihre tatsächliche Macht hinaus."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 9 (1W10+4) Stichschaden plus 3 (1W6) Feuerschaden." },
      { name: "Feuerodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet Feuer in einem Kegel von 4,5 m Länge. Jede Kreatur im Kegel muss einen Geschicklichkeitsrettungswurf gegen SG 13 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 24 (7W6) Feuerschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Schattendämon",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 4, xp: 1100,
    rk: 13, ruestungstyp: null,
    tp: 66, tp_wuerfel: "12W8+12",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m" },
    attribute: { STR: 1, DEX: 17, CON: 12, INT: 14, WIS: 13, CHA: 14 },
    rettungswuerfe: { GES: 5, CHA: 4 },
    fertigkeiten: { "Heimlichkeit": 7 },
    schadensresistenzen: ["Feuer", "Nekrotisch", "Säure", "Schall", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    schadensimmunitaeten: ["Blitz", "Gift", "Kälte"],
    verwundbarkeiten: ["Gleißend"],
    zustandsimmunitaeten: ["Erschöpft", "Festgesetzt", "Gelähmt", "Gepackt", "Liegend", "Vergiftet", "Versteinert"],
    sinne: ["Dunkelsicht 36 m"], passiveWahrnehmung: 11,
    sprachen: ["Abyssisch", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/schattendämon.png",
    beschreibung: [
      "Wenn der Körper eines Dämons zerstört wird, der Unhold sich aber nicht im Abyss neu formen kann, nimmt seine Essenz manchmal eine vage körperliche Gestalt an. Diese schattenhaften Dämonen existieren außerhalb der normalen Hierarchie des Abyss, da ihre Erschaffung meistens die Folge sterblicher Magie, nicht einer Verwandlung oder Beförderung ist.",
      "Schattendämonen verschwinden in der Dunkelheit fast vollständig, und sie können umher kriechen, ohne ein Geräusch zu machen. Schattendämonen nutzen ihre körperlosen Klauen, um sich von den Ängsten der Opfer zu ernähren, ihre Erinnerungen zu kosten und ihre Zweifel zu verzehren. Helles Licht schmerzt diesen Unhold und zeigt ihn als klare Gestalt – eine geflügelte humanoide Form, deren Unterkörper im Nichts verschwindet und deren Klauen den Verstand eines Opfers zerreißen können."
    ],
    besonderheiten: [
      { name: "Schattennatur", beschreibung: "Ein Schattendämon braucht weder Luft noch Nahrung, Wasser oder Schlaf." },
      { name: "Körperlose Bewegung", beschreibung: "Der Dämon kann sich durch andere Kreaturen und Gegenstände bewegen, als seien sie schwieriges Gelände. Er erleidet 5 (1W10) Energieschaden, wenn er seinen Zug in einem Gegenstand beendet." },
      { name: "Lichtempfindlich", beschreibung: "Solange sich der Dämon im hellen Licht befindet, hat er einen Nachteil bei Angriffswürfen und Würfen auf Weisheit (Wahrnehmung), die Sicht verwenden." },
      { name: "Heimlicher Schatten", beschreibung: "Solange er sich in schwachem Licht oder Dunkelheit bewegt, kann der Dämon die Aktion Verstecken als Bonusaktion nutzen." }
    ],
    aktionen: [
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, eine Kreatur. Treffer: 10 (2W6+3) psychischer Schaden, oder, wenn der Dämon einen Vorteil beim Angriffswurf hat, 17 (4W6+3) psychischer Schaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Uralter Schwarzer Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Gigantisch",
    gesinnung: "Chaotisch böse",
    cr: 21, xp: 33000,
    rk: 22, ruestungstyp: "natürliche Rüstung",
    tp: 367, tp_wuerfel: "21W20+147",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 27, DEX: 14, CON: 25, INT: 16, WIS: 15, CHA: 19 },
    rettungswuerfe: { GES: 9, KON: 14, WEI: 9, CHA: 11 },
    fertigkeiten: { "Heimlichkeit": 9, "Wahrnehmung": 16 },
    schadensresistenzen: [], schadensimmunitaeten: ["Säure"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 26,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Sumpf"],
    bild: "assets/images/monster/uralter_schwarzer_drache.png",
    beschreibung: [
      "Uralt Schwarze Drachen sind die grausamsten und bösartigsten der chromischen Drachen. Sie bewohnen seit Jahrhunderten düstere Sümpfe und modrige Ruinen und hassen alles mit krankhafter Intensität.",
      "Brutal und grausam. Schwarze Drachen sind sadistische Raubtiere, die es genießen, ihre Beute langsam leiden zu lassen. Sie legen Hinterhalte und nutzen ihre Fähigkeit, in Wasser zu tauchen, um Überraschungsangriffe zu starten. Ein schwarzer Drache verlässt eine Begegnung nur, wenn er sicher ist, dass er zurückkehren und tödliche Rache nehmen kann.",
      "Feinde und Diener. Schwarze Drachen dominieren schwache Kreaturen des Sumpfes und zwingen Trolle, Krokodile, Hydras und ähnliches Getier in ihre Dienste. Sie verabscheuen andere Drachen und werden jeden angreifen, der ihr Territorium betritt.",
      "Reichtum der Uralten. Der Hort eines uralten schwarzen Drachen liegt gewöhnlich in einer überfluteten Höhle oder unter einem Sumpfsee. Er bewacht diesen Schatz mit fanatischer Wachheit und kann die Anwesenheit jedes Eindringlings innerhalb seiner legendären Reichweite spüren."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann sowohl Luft als auch Wasser atmen." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er sich entscheiden, ihn stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Furchterregende Präsenz einsetzen. Danach führt er drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 19 (2W10+8) Stichschaden plus 9 (2W8) Säureschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 15 (2W6+8) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +15 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 17 (2W8+8) Wuchtschaden." },
      { name: "Furchterregende Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet und sich seiner bewusst ist, muss einen Weisheitsrettungswurf gegen SG 19 schaffen, oder sie ist für 1 Minute verängstigt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen, um den Effekt bei Erfolg zu beenden. Wenn der Rettungswurf einer Kreatur erfolgreich ist oder der Effekt endet, ist die Kreatur für die nächsten 24 Stunden immun gegen die Furchterregende Präsenz des Drachen." },
      { name: "Säureodem (Aufladezeit 5–6)", beschreibung: "Der Drache speit Säure in einer Linie von 27 m Länge und 3 m Breite. Jede Kreatur in dieser Linie muss einen Geschicklichkeitsrettungswurf gegen SG 22 schaffen. Bei einem misslingenden Rettungswurf erleidet sie 67 (15W8) Säureschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Drache schafft einen Weisheit (Wahrnehmung) Wurf." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Schwingenangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Schwingen. Jede Kreatur innerhalb von 4,5 m vom Drachen muss einen Geschicklichkeitsrettungswurf gegen SG 23 schaffen oder erleidet 15 (2W6+8) Wuchtschaden und wird zu Boden geworfen. Der Drache kann dann bis zu seiner Bewegungsrate fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative-Rang 20 (bei Gleichstand verliert er) kann der Drache eine der folgenden Hortaktionen nutzen; er kann dieselbe nicht zwei Runden in Folge nutzen:",
      aktionen: [
        "Schlamm und modrige Erde füllen einen 6×6 m großen Würfel innerhalb von 36 m vom Drachen. Der Bereich wird bis Initiative 20 der nächsten Runde zu schwierigem Gelände.",
        "Giftige Dämpfe steigen in einem Radius von 6 m um einen Punkt innerhalb von 36 m auf. Jede Kreatur in dem Bereich muss einen Konstitutionsrettungswurf gegen SG 15 schaffen oder bis zum Ende ihres nächsten Zuges vergiftet sein.",
        "Jedes stehende Wasser in einem Radius von 36 m um den Drachen brodelt. Kreaturen, die in diesem Wasser waten, müssen am Beginn jedes ihrer Züge einen Stärkerettungswurf gegen SG 15 schaffen oder werden am Schwimmen oder Waten gehindert."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region rund um den Hort eines legendären schwarzen Drachen ist von der Magie des Drachen deformiert und schafft einen oder mehrere der folgenden Effekte:",
      effekte: [
        "Flüsse und Bäche in einem Radius von 9 km um den Hort des Drachen werden dunkel, trüb und leicht säurehaltiger als normal.",
        "Moorige Sümpfe breiten sich in einem Radius von 9 km um den Hort des Drachen aus; in nicht sumpfigen Ebenen erschaffen Bäche und Flüsse neues Sumpfland, wenn sie über ihre Ufer treten.",
        "Der Drache ist sich bewusst über alle Kreaturen, die sein Territorium betreten. Als Bonusaktion kann der Drache die Augen und Ohren einer beliebigen Kreatur, die sich in dem Territorium befindet, übernehmen, bis er eine weitere Bonusaktion nutzt oder bis der Drache schläft."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Ausgewachsener Schwarzer Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Riesig",
    gesinnung: "Chaotisch böse",
    cr: 14, xp: 11500,
    rk: 19, ruestungstyp: "natürliche Rüstung",
    tp: 195, tp_wuerfel: "17W12+85",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 23, DEX: 14, CON: 21, INT: 14, WIS: 13, CHA: 17 },
    rettungswuerfe: { GES: 7, KON: 10, WEI: 6, CHA: 8 },
    fertigkeiten: { "Heimlichkeit": 7, "Wahrnehmung": 11 },
    schadensresistenzen: [], schadensimmunitaeten: ["Säure"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 21,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Sumpf"],
    bild: "assets/images/monster/ausgewachsener_schwarzer_drache.png",
    beschreibung: [
      "Ausgewachsene Schwarze Drachen haben bereits Jahrhunderte in ihren Sumpfrevieren verbracht und sind zu Meistern des Hinterhalts und der Grausamkeit geworden. Ihre Hörner winden sich dramatisch, und ihre Haut wirkt wie gefärbtes, gefaultes Leder."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann sowohl Luft als auch Wasser atmen." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er sich entscheiden, ihn stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Furchterregende Präsenz einsetzen. Danach führt er drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden plus 4 (1W8) Säureschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 15 (2W8+6) Wuchtschaden." },
      { name: "Furchterregende Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet und sich seiner bewusst ist, muss einen Weisheitsrettungswurf gegen SG 16 schaffen, oder sie ist für 1 Minute verängstigt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen, um den Effekt bei Erfolg zu beenden. Wenn der Rettungswurf einer Kreatur erfolgreich ist oder der Effekt endet, ist die Kreatur für die nächsten 24 Stunden immun gegen die Furchterregende Präsenz des Drachen." },
      { name: "Säureodem (Aufladezeit 5–6)", beschreibung: "Der Drache speit Säure in einer Linie von 18 m Länge und 1,5 m Breite. Jede Kreatur in dieser Linie muss einen Geschicklichkeitsrettungswurf gegen SG 18 schaffen. Bei einem misslingenden Rettungswurf erleidet sie 54 (12W8) Säureschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Drache schafft einen Weisheit (Wahrnehmung) Wurf." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Schwingenangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Schwingen. Jede Kreatur innerhalb von 4,5 m vom Drachen muss einen Geschicklichkeitsrettungswurf gegen SG 19 schaffen oder erleidet 13 (2W6+6) Wuchtschaden und wird zu Boden geworfen. Der Drache kann dann bis zu seiner Bewegungsrate fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative-Rang 20 (bei Gleichstand verliert er) kann der Drache eine der folgenden Hortaktionen nutzen; er kann dieselbe nicht zwei Runden in Folge nutzen:",
      aktionen: [
        "Schlamm und modrige Erde füllen einen 6×6 m großen Würfel innerhalb von 36 m vom Drachen. Der Bereich wird bis Initiative 20 der nächsten Runde zu schwierigem Gelände.",
        "Giftige Dämpfe steigen in einem Radius von 6 m um einen Punkt innerhalb von 36 m auf. Jede Kreatur in dem Bereich muss einen Konstitutionsrettungswurf gegen SG 15 schaffen oder bis zum Ende ihres nächsten Zuges vergiftet sein.",
        "Jedes stehende Wasser in einem Radius von 36 m um den Drachen brodelt. Kreaturen, die in diesem Wasser waten, müssen am Beginn jedes ihrer Züge einen Stärkerettungswurf gegen SG 15 schaffen oder werden am Schwimmen oder Waten gehindert."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region rund um den Hort eines legendären schwarzen Drachen ist von der Magie des Drachen deformiert und schafft einen oder mehrere der folgenden Effekte:",
      effekte: [
        "Flüsse und Bäche in einem Radius von 9 km um den Hort des Drachen werden dunkel, trüb und leicht säurehaltiger als normal.",
        "Moorige Sümpfe breiten sich in einem Radius von 9 km um den Hort des Drachen aus; in nicht sumpfigen Ebenen erschaffen Bäche und Flüsse neues Sumpfland, wenn sie über ihre Ufer treten.",
        "Der Drache ist sich bewusst über alle Kreaturen, die sein Territorium betreten. Als Bonusaktion kann der Drache die Augen und Ohren einer beliebigen Kreatur, die sich in dem Territorium befindet, übernehmen, bis er eine weitere Bonusaktion nutzt oder bis der Drache schläft."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Junger Schwarzer Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 7, xp: 2900,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 127, tp_wuerfel: "15W10+45",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 19, DEX: 14, CON: 17, INT: 12, WIS: 11, CHA: 15 },
    rettungswuerfe: { GES: 5, KON: 6, WEI: 3, CHA: 5 },
    fertigkeiten: { "Heimlichkeit": 5, "Wahrnehmung": 6 },
    schadensresistenzen: [], schadensimmunitaeten: ["Säure"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 16,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Sumpf"],
    bild: "assets/images/monster/junger_schwarzer_drache.png",
    beschreibung: [
      "Junge Schwarze Drachen sind bereits grausam und bösartig, obwohl ihre volle Macht noch nicht entfaltet ist. Sie suchen sich ein Revier in Sümpfen und anderen feuchten Gebieten und beginnen, schwächere Kreaturen zu dominieren."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann sowohl Luft als auch Wasser atmen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (2W10+4) Stichschaden plus 4 (1W8) Säureschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Hiebschaden." },
      { name: "Säureodem (Aufladezeit 5–6)", beschreibung: "Der Drache speit Säure in einer Linie von 9 m Länge und 1,5 m Breite. Jede Kreatur in dieser Linie muss einen Geschicklichkeitsrettungswurf gegen SG 14 schaffen. Bei einem misslingenden Rettungswurf erleidet sie 49 (11W8) Säureschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Schwarzer Drachennestling",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 2, xp: 450,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 33, tp_wuerfel: "6W8+6",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m", "Schwimmen": "9 m" },
    attribute: { STR: 15, DEX: 14, CON: 13, INT: 10, WIS: 11, CHA: 13 },
    rettungswuerfe: { GES: 4, KON: 3, WEI: 2, CHA: 3 },
    fertigkeiten: { "Heimlichkeit": 4, "Wahrnehmung": 4 },
    schadensresistenzen: [], schadensimmunitaeten: ["Säure"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 18 m"], passiveWahrnehmung: 14,
    sprachen: ["Drakonisch"],
    umgebung: ["Sumpf"],
    bild: "assets/images/monster/schwarzer_drachennestling.png",
    beschreibung: [
      "Schwarze Drachennestlinge sind bereits gefährlich für Unerfahrene. Ihr Instinkt zur Grausamkeit zeigt sich früh, wenn auch ihre Kräfte noch begrenzt sind."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Drache kann sowohl Luft als auch Wasser atmen." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W10+2) Stichschaden plus 2 (1W4) Säureschaden." },
      { name: "Säureodem (Aufladezeit 5–6)", beschreibung: "Der Drache speit Säure in einer Linie von 4,5 m Länge und 1,5 m Breite. Jede Kreatur in dieser Linie muss einen Geschicklichkeitsrettungswurf gegen SG 11 schaffen. Bei einem misslingenden Rettungswurf erleidet sie 22 (5W8) Säureschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Teppich des Erstickens",
    art: "Konstrukt",
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 2, xp: 450,
    rk: 12, ruestungstyp: null,
    tp: 33, tp_wuerfel: "6W10",
    bewegung: { "Gehen": "6 m" },
    attribute: { STR: 17, DEX: 14, CON: 10, INT: 1, WIS: 3, CHA: 1 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [], schadensimmunitaeten: ["Gift", "Psychisch"], verwundbarkeiten: [], zustandsimmunitaeten: ["Bezaubert", "Blind", "Gelähmt", "Taub", "Verängstigt", "Vergiftet", "Versteinert"],
    sinne: ["Blindsicht 18 m (über diesen Radius hinaus blind)"], passiveWahrnehmung: 6,
    sprachen: [],
    umgebung: ["Unterirdisch"],
    bild: "assets/images/monster/teppich_des_erstickens.png",
    beschreibung: [
      "Belebte Gegenstände werden mit mächtiger Magie erschaffen, damit sie den Befehlen ihres Erschaffers folgen können. Wenn sie keine Befehle erhalten, folgen sie dem letzten, den sie erhalten haben, nach besten Möglichkeiten, und können selbstständig agieren, um einfache Anweisungen zu erfüllen. Einige belebte Gegenstände könnten sich fließend unterhalten oder sich eine Persönlichkeit zulegen, die meisten sind aber einfache Automaten."
    ],
    besonderheiten: [
      { name: "Konstruktnatur", beschreibung: "Ein belebter Gegenstand braucht weder Nahrung noch Wasser oder Schlaf. Die Magie, die einen Gegenstand belebt, wird gebannt, wenn das Konstrukt auf 0 Trefferpunkte fällt. Ein belebter Gegenstand, der auf 0 Trefferpunkte fällt, wird unbelebt und ist zu schwer beschädigt, um noch von großem Nutzen zu sein." },
      { name: "Antimagische Empfindlichkeit", beschreibung: "Der Teppich wird kampfunfähig, wenn er sich im Bereich eines Antimagischen Feldes aufhält. Wenn der Teppich Ziel von Magie bannen wird, muss er einen Konstitutionsrettungswurf gegen den Zauberrettungswurf-SG des Zauberwirkers ablegen, um nicht für 1 Minute bewusstlos zu werden." },
      { name: "Schadensübertragung", beschreibung: "Solange der Teppich eine Kreatur gepackt hat, erleidet er selbst nur die Hälfte des Schadens, der ihm zugefügt wird, und die gepackte Kreatur erleidet die andere Hälfte." },
      { name: "Falsches Erscheinungsbild", beschreibung: "Solange der Teppich bewegungslos bleibt, kann man ihn nicht von einem normalen Teppich unterscheiden." }
    ],
    aktionen: [
      { name: "Ersticken", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, eine mittelgroße oder kleinere Kreatur. Treffer: Die Kreatur wird gepackt (SG zum Entkommen 13). Bis der Haltegriff endet, ist das Ziel festgesetzt, blind und in Gefahr zu ersticken, und der Teppich kann kein weiteres Ziel umschlingen. Außerdem erleidet das Ziel zu Beginn eines jeden seiner Züge 10 (2W6+3) Wuchtschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Todestyrann",
    art: "Untoter",
    groesse: "Groß",
    gesinnung: "Rechtschaffen böse",
    cr: 14, xp: 11500,
    rk: 19, ruestungstyp: "natürliche Rüstung",
    tp: 187, tp_wuerfel: "25W10+50",
    bewegung: { "Gehen": "0 m", "Fliegend (Schweben)": "6 m" },
    attribute: { STR: 10, DEX: 14, CON: 14, INT: 19, WIS: 15, CHA: 19 },
    rettungswuerfe: { "STR": 5, "KON": 7, "INT": 9, "WEI": 7, "CHA": 9 },
    fertigkeiten: { "Wahrnehmung": 12 },
    schadensresistenzen: [], schadensimmunitaeten: ["Gift"], verwundbarkeiten: [], zustandsimmunitaeten: ["Bezaubert", "Erschöpft", "Gelähmt", "Liegend", "Vergiftet", "Versteinert"],
    sinne: ["Dunkelsicht 36 m"], passiveWahrnehmung: 22,
    sprachen: ["Tiefensprache", "Gemeinsprache der Unterreiche"],
    umgebung: ["Unterirdisch"],
    bild: "assets/images/monster/todestyrann.png",
    beschreibung: [
      "Es kommt selten vor, aber manchmal driftet der schlafende Geist eines Betrachters jenseits seines normalen Wahnsinns und stellt sich eine Realität vor, in der er jenseits des Todes existiert. Wenn sich solche Träume festsetzen, kann sich der Betrachter verwandeln. Sein Fleisch schält sich ab, und es bleibt nur ein Todestyrann übrig. Das Monster besitzt die Gerissenheit und einen guten Teil der Magie, die es in seinem Leben hatte, wird aber von der Macht des Untodes angetrieben.",
      "Ein Todestyrann erscheint als gewaltiger, nackter Schädel, in dessen leerer Augenhöhle ein roter Lichtpunkt brennt. Da seine Augenstiele verfault sind, schweben zehn gespenstische Augen um die Kreatur und stieren in alle Richtungen.",
      "Tödlicher Despot. Wie schon als Betrachter lieben es Todestyrannen, anderen Kreaturen ihren Willen aufzuzwingen. Außerdem ist die Macht des Betrachters, magische Energie mit dem zentralen Auge zu unterdrücken, beim Todestyrannen einer weitaus finsteren Macht gewichen: Er kann ehemalige Sklaven und Feinde in untote Diener verwandeln. Zombies, die vom Todestyrannen erschaffen werden, werden benutzt und weggeworfen, wenn sie nicht mehr gebraucht werden. Sie bewachen die Eingänge zur Behausung oder schützen seine Schatzkammern.",
      "Armeen der Toten. Ein Todestyrann, der sich dem Tode hingibt, wird zu einer Maschine der Zerstörung. Er rückt gegen humanoide Siedlungen vor, verwendet seine Augenstrahlen, um alle Kreaturen zu zerstören, denen er begegnet, um dann eine Armee der Untoten zu erschaffen. Wenn der Todestyrann nicht bezwungen wird, könnte er die Bevölkerung einer Stadt innerhalb von Wochen auslöschen und dann sein untotes Auge auf größere Eroberungen richten."
    ],
    besonderheiten: [
      { name: "Untote Natur", beschreibung: "Ein Todestyrann braucht weder Nahrung noch Wasser oder Schlaf." },
      { name: "Negativer Energiekegel", beschreibung: "Das zentrale Auge des Todestyrannen gibt einen unsichtbaren Kegel negativer Energie über 45 m ab. Zu Beginn eines jeden seiner Züge entscheidet der Todestyrann, in welche Richtung der Kegel zeigt und ob er aktiv ist. Keine Kreatur in diesem Bereich kann Trefferpunkte zurückerhalten. Alle Humanoiden, die in dem Bereich sterben, werden zu einem Zombie unter dem Befehl des Todestyrannen. Der tote Humanoide behält seinen Platz in der Initiativereihenfolge und wird zu Beginn seines nächsten Zuges zum Leben erweckt, vorausgesetzt, dass der Körper nicht vollständig zerstört worden ist." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 14 (4W6) Stichschaden." },
      { name: "Augenstrahlen", beschreibung: "Der Todestyrann feuert zufällig drei der folgenden magischen Augenstrahlen ab (würfle doppelte Ergebnisse neu) und wählt ein bis drei Ziele, die er sehen kann und die sich innerhalb von 36 m um ihn befinden. 1. Bezauberungsstrahl — Die Zielkreatur muss einen Weisheitsrettungswurf gegen SG 17 anlegen, um nicht für 1 Stunde vom Todestyrannen bezaubert zu werden. Der Effekt endet, wenn der Todestyrann die Kreatur verletzt. 2. Lähmender Strahl — Die Zielkreatur muss einen Konstitutionsrettungswurf gegen SG 17 ablegen, um nicht für 1 Minute gelähmt zu werden. Das Ziel kann den Rettungswurf am Ende eines jeden seiner Züge wiederholen und den Effekt bei einem Erfolg beenden. 3. Furchtstrahl — Die Zielkreatur muss einen Weisheitsrettungswurf gegen SG 17 ablegen, um nicht für 1 Minute verängstigt zu werden. Das Ziel kann den Rettungswurf am Ende eines jeden seiner Züge wiederholen und den Effekt bei einem Erfolg beenden. 4. Verlangsamender Strahl — Die Zielkreatur muss einen Geschicklichkeitsrettungswurf gegen SG 17 ablegen. Bei einem misslungenen Rettungswurf wird die Bewegungsrate des Ziels für 1 Minute halbiert, kann keine Reaktionen ausführen und kann in ihrem Zug entweder eine Aktion oder eine Bonusaktion durchführen, nicht beides. Die Kreatur kann den Rettungswurf am Ende eines jeden ihrer Züge wiederholen und den Effekt bei einem Erfolg beenden. 5. Zermürbungsstrahl — Die Zielkreatur muss einen Konstitutionsrettungswurf gegen SG 17 ablegen. Bei einem misslungenen Rettungswurf erleidet sie 36 (8W8) nekrotischen Schaden, halb so viel Schaden bei einem erfolgreichen Rettungswurf. 6. Telekinetischer Strahl — Wenn das Ziel eine Kreatur ist, muss sie einen Stärkerettungswurf gegen SG 17 schaffen, sonst bewegt der Todestyrann sie bis zu 9 m in eine beliebige Richtung und sie ist bis zum Beginn des nächsten Zugs des Tyrannen festgesetzt. Wenn das Ziel ein Gegenstand ist, der 300 Pfund oder weniger wiegt und nicht getragen wird, wird er 9 m bewegt; der Tyrann kann auch Feinkontrolle ausüben, z. B. Werkzeuge benutzen oder Türen öffnen. 7. Schlafstrahl — Die Zielkreatur muss einen Weisheitsrettungswurf gegen SG 17 ablegen, um nicht für 1 Minute einzuschlafen und bewusstlos zu werden. Das Ziel wacht auf, wenn es Schaden erleidet oder eine Kreatur es weckt. Kein Effekt auf Konstrukte und Untote. 8. Versteinerungsstrahl — Die Zielkreatur muss einen Geschicklichkeitsrettungswurf gegen SG 17 ablegen. Bei einem Fehlschlag ist sie festgesetzt und muss den Rettungswurf am Ende ihres nächsten Zugs wiederholen. Bei Erfolg endet der Effekt; bei erneutem Fehlschlag ist sie versteinert, bis sie durch Vollständige Genesung oder andere Magie befreit wird. 9. Auflösungsstrahl — Wenn das Ziel eine Kreatur ist, muss sie einen Geschicklichkeitsrettungswurf gegen SG 17 schaffen, sonst erleidet sie 45 (10W8) Energieschaden. Wird die Kreatur dadurch auf 0 TP reduziert, wird ihr Körper ein Haufen feiner, grauer Staub. Nicht-magische Gegenstände bis Großer Größe werden ohne Rettungswurf aufgelöst; bei riesigen oder größeren Gegenständen löst der Strahl einen 3-m-Würfel auf. 10. Todesstrahl — Wenn das Ziel eine Kreatur ist, muss sie einen Geschicklichkeitsrettungswurf gegen SG 17 schaffen, sonst erleidet sie 55 (10W10) nekrotischen Schaden. Das Ziel stirbt, wenn der Strahl es auf 0 TP bringt." }
    ],
    bonusaktionen: [], reaktionen: [],
    legendaere_aktionen: [
      { name: "Augenstrahl", beschreibung: "Der Todestyrann verwendet einen zufälligen Augenstrahl." }
    ],
    legendaere_aktionen_beschreibung: "Der Todestyrann kann 3 legendäre Aktionen durchführen, wobei er die Option Augenstrahl verwendet. Er kann nur eine legendäre Aktion auf einmal verwenden, und nur am Ende eines Zugs eines anderen Charakters. Der Tyrann erhält verbrauchte legendäre Aktionen zu Beginn seines Zuges zurück.",
    hortaktionen: {
      beschreibung: "Wenn ein Todestyrann in seiner Behausung kämpft, kann er die Umgebungsmagie nutzen, um Hortaktionen durchzuführen. Bei Initiative 20 (er verliert alle Initiative-Gleichstände) führt der Todestyrann eine Hortaktion aus. Ein Todestyrann, dem man in seiner Behausung begegnet, hat einen Herausforderungsgrad von 15 (13.000 EP).",
      aktionen: [
        "Ein Bereich von 15 m Seitenlänge innerhalb von 36 m um den Tyrannen wird mit gespenstischen Augen und Tentakeln gefüllt. Für alle Kreaturen außer dem Todestyrannen ist dieser Bereich bis Initiative 20 in der nächsten Runde leicht verschleiert.",
        "An Mauern wuchern Gliedmaßen, die bis Initiative 20 in der übernächsten Runde bestehen bleiben. Alle Kreaturen — auch auf der Ätherebene — die dem Tyrannen feindlich gesonnen sind und ihren Zug innerhalb von 3 m um eine solche Mauer beginnen, müssen einen Geschicklichkeitsrettungswurf gegen SG 17 schaffen, um nicht gepackt zu werden. Um zu entkommen, muss die Kreatur einen Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik) gegen SG 17 schaffen.",
        "Ein gespenstisches Auge öffnet sich an einem Punkt innerhalb von 15 m um den Tyrannen in der Luft. Ein zufälliger Augenstrahl schießt aus dem Auge — als Quelle im Äther geltend — auf ein Ziel nach Wahl des Tyrannen. Dann schließt sich das Auge und verschwindet. Der Todestyrann kann einen Effekt erst dann wiederholen, wenn alle verwendet worden sind, und kann nicht zweimal hintereinander den gleichen Effekt verwenden."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region, in der sich die Behausung eines Todestyrannen befindet, wird von der Anwesenheit der Kreatur verzerrt, was einen oder mehrere der folgenden Effekte auslöst:",
      effekte: [
        "Kreaturen innerhalb von 1,5 km um die Behausung des Tyrannen haben manchmal das Gefühl, dass sie beobachtet werden, auch wenn es nicht der Fall ist.",
        "Wenn eine Kreatur, die dem Tyrannen feindlich gesonnen und sich seiner Existenz bewusst ist, innerhalb von 1,5 km um seine Behausung eine lange Rast abschließt, wird ein W20 für sie geworfen. Bei einem Ergebnis von 10 oder weniger erleidet die Kreatur den Effekt eines zufälligen Augenstrahls des Tyrannen.",
        "Wenn der Todestyrann stirbt, schwinden diese Effekte innerhalb von 1W10 Tagen."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Triceratops",
    art: "Tier",
    unterart: "Dinosaurier",
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 5, xp: 1800,
    rk: 13, ruestungstyp: "natürliche Rüstung",
    tp: 95, tp_wuerfel: "10W12+30",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 22, DEX: 9, CON: 17, INT: 2, WIS: 11, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: [], passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Tropisch", "Wald", "Grasland"],
    bild: "assets/images/monster/triceratops.png",
    beschreibung: [
      "Der Triceratops gehört zu den aggressivsten Pflanzenfressern. Er hat einen Schädel, der eine schützende Knochenplatte formt. Mit seinen großen Hörnern und seiner beträchtlichen Geschwindigkeit kann der Triceratops Möchtegern-Raubtiere aufspießen und niedertrampeln."
    ],
    besonderheiten: [
      { name: "Trampelnder Sturmangriff", beschreibung: "Wenn sich der Triceratops mindestens 6 m in gerader Linie auf ein Ziel zu bewegt und dann im gleichen Zug mit seinem Aufspießen trifft, dann muss das Ziel einen Stärkerettungswurf gegen SG 13 schaffen, um nicht den Zustand liegend zu erleiden. Wenn das Ziel liegt, kann der Triceratops gegen das Ziel einen Stampfen-Angriff als Bonusaktion durchführen." }
    ],
    aktionen: [
      { name: "Aufspießen", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 24 (4W8+6) Stichschaden." },
      { name: "Stampfen", beschreibung: "Nahkampf-Waffenangriff: +9 zum Treffen, Reichweite 1,5 m, eine liegende Kreatur. Treffer: 22 (3W10+6) Wuchtschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Tyrannosaurus Rex",
    art: "Tier",
    unterart: "Dinosaurier",
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 8, xp: 3900,
    rk: 13, ruestungstyp: "natürliche Rüstung",
    tp: 136, tp_wuerfel: "13W12+52",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 25, DEX: 10, CON: 19, INT: 2, WIS: 12, CHA: 9 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 4 },
    schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: [], passiveWahrnehmung: 14,
    sprachen: [],
    umgebung: ["Tropisch", "Wald", "Grasland"],
    bild: "assets/images/monster/tyrannosaurus_rex.png",
    beschreibung: [
      "Dieses gewaltige Raubtier terrorisiert alle anderen Kreaturen in seiner Umgebung. Trotz seiner Größe und seines Gewichts ist der Tyrannosaurus ein schneller Läufer. Er jagt alles, was er glaubt, fressen zu können, und es gibt wenige Wesen, bei denen er nicht versuchen wird, sie ganz zu schlucken.",
      "Während er nach richtiger Beute sucht, ernährt sich ein Tyrannosaurus von Aas und von kleineren Kreaturen, die versuchen, ihm seine Mahlzeit streitig zu machen."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Tyrannosaurus führt zwei Angriffe aus: einen mit seinem Biss und einen mit seinem Schwanz. Er kann nicht beide Angriffe gegen dasselbe Ziel richten." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 33 (4W12+7) Stichschaden. Wenn das Ziel eine mittelgroße oder kleinere Kreatur ist, wird es gepackt (Rettungswurf zum Entkommen 17). Bis der Haltegriff endet, ist das Ziel festgesetzt, und der Tyrannosaurus kann kein weiteres Ziel beißen." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +10 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 20 (3W8+7) Wuchtschaden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Vrock",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 6, xp: 2300,
    rk: 15, ruestungstyp: "natürliche Rüstung",
    tp: 104, tp_wuerfel: "11W10+44",
    bewegung: { "Gehen": "12 m", "Fliegen": "18 m" },
    attribute: { STR: 17, DEX: 15, CON: 18, INT: 8, WIS: 13, CHA: 8 },
    rettungswuerfe: { GES: 5, WEI: 4, CHA: 2 },
    fertigkeiten: {},
    schadensresistenzen: ["Blitz", "Feuer", "Kälte", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 36 m"], passiveWahrnehmung: 11,
    sprachen: ["Abyssisch", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/vrock.png",
    beschreibung: [
      "Vrocks sind einfältige, launenhafte Unholde, die nur leben, um Schmerz und Tod zu verbreiten. Ein Vrock erinnert an eine riesenhafte Mischung aus Humanoidem und Geier. Sein ausgedörrter, tierhafter Körper und seine breiten Schwingen stinken nach Fäulnis.",
      "Vrocks verschlingen humanoides Fleisch, wenn sie die Gelegenheit haben. Sie betäuben potentielle Opfer mit einem ohrenbetäubenden Schrei und tauchen dann auf sie herab, um sie mit Schnabel und Klauen anzugreifen. Vrocks können ihre Schwingen schütteln, was eine Wolke giftiger Sporen aufsteigen lässt. Sie gieren nach schönen Dingen und fallen auch übereinander her, um die Chance zu bekommen, billigen Schmuck oder Ziersteine in die Finger zu bekommen. Trotz ihrer Liebe für Schätze ist es schwer, Vrocks zu bestechen, da sie keinen Grund für eine Verhandlung sehen, wenn sie das, was sie haben wollen, einfach der Leiche des Möchtegern-Verhandelnden abnehmen können."
    ],
    besonderheiten: [
      { name: "Magieresistenz", beschreibung: "Der Vrock hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Variante: Dämonenbeschwörung", beschreibung: "Beschwöre Dämon (1/Tag): Der Dämon entscheidet, was er beschwören will und führt eine magische Beschwörung durch. Ein Vrock hat eine Chance von 30%, 2W4 Dretchs oder einen Vrock zu beschwören. Ein beschworener Dämon erscheint in einem nicht besetzten Bereich innerhalb von 18 m um seinen Beschwörer, dient als Verbündeter des Beschwörers und kann selbst keine anderen Dämonen beschwören. Er bleibt für 1 Minute, bis sein Beschwörer getötet worden ist oder bis der Beschwörer ihn als Bonusaktion fortschickt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Vrock führt zwei Angriffe aus: einen mit seinem Schnabel und einen mit seinen Klauen." },
      { name: "Schnabel", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W6+3) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 14 (2W10+3) Hiebschaden." },
      { name: "Sporen (Aufladung 6)", beschreibung: "Eine Wolke aus giftigen Sporen mit einem Radius von 4,5 m breitet sich um den Vrock aus. Die Sporen breiten sich um Ecken aus. Alle Kreaturen in diesem Bereich müssen einen Konstitutionsrettungswurf gegen SG 14 ablegen, um nicht vergiftet zu werden. Solange sie auf diese Weise vergiftet sind, erleiden Ziele zu Beginn eines jeden ihrer Züge 5 (1W10) Giftschaden. Die Kreatur kann den Rettungswurf am Ende eines jeden ihrer Züge wiederholen und den Effekt bei einem Erfolg beenden. Man kann den Effekt auch beenden, indem man eine Phiole Weihwasser über dem Ziel ausleert." },
      { name: "Betäubendes Kreischen (1/Tag)", beschreibung: "Der Vrock stößt ein grauenvolles Kreischen aus. Alle Kreaturen im Umkreis von 6 m um den Vrock, die ihn hören können und keine Dämonen sind, müssen einen Konstitutionsrettungswurf gegen SG 14 schaffen, um nicht bis zum Ende des nächsten Zugs des Vrocks betäubt zu werden." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Uralter Weißer Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Gigantisch",
    gesinnung: "Chaotisch böse",
    cr: 20, xp: 25000,
    rk: 20, ruestungstyp: "natürliche Rüstung",
    tp: 333, tp_wuerfel: "18W20+144",
    bewegung: { "Gehen": "12 m", "Graben": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 26, DEX: 10, CON: 26, INT: 10, WIS: 13, CHA: 14 },
    rettungswuerfe: { GES: 6, KON: 14, WEI: 7, CHA: 8 },
    fertigkeiten: { "Heimlichkeit": 6, "Wahrnehmung": 13 },
    schadensresistenzen: [], schadensimmunitaeten: ["Kälte"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 23,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Arktis", "Gebirge"],
    bild: "assets/images/monster/uralter_weisser_drache.png",
    beschreibung: [
      "Uralte Weiße Drachen sind die kleinsten, am wenigsten intelligenten und tierhaftesten der chromatischen Drachen. Jahrhundertelang in arktischen Einöden jagend, haben sie ein bemerkenswertes Gedächtnis entwickelt – sie erinnern sich an jede Beleidigung und Niederlage und sind für bösartige Vendettas bekannt.",
      "Urtümlich und rachsüchtig. Weiße Drachen haben nicht die Gerissenheit anderer Drachen, aber ihr tierhaftes Wesen macht sie zu den besten Jägern. Sie verschlingen nur eingefrorene Nahrung und bewahren die Leichen ihrer größten Feinde als Trophäen auf, eingefroren und sichtbar aufgestellt als Warnung an Eindringlinge.",
      "Einsame Gebieter. Weiße Drachen meiden alle anderen Drachen. Sie können keine Rivalen in der Nähe ihrer Behausung ertragen und greifen andere Kreaturen an ohne Provokation. Mächtige Kreaturen können manchmal ihren Gehorsam erlangen – Frostriesen fordern weiße Drachen heraus, und ein bezwungener Drache akzeptiert die Herrschaft der überlegenen Kreatur.",
      "Schätze unter dem Eis. Weiße Drachen lieben das Funkeln von Eis und bevorzugen Diamanten. Einzelne Münzen und Juwelen liegen verstreut wie Sterne, während größere Schätze hinter klaren Eisschichten verwahrt werden."
    ],
    besonderheiten: [
      { name: "Eiswandeln", beschreibung: "Der Drache kann sich über Eis bewegen und eisige Oberflächen erklimmen, ohne Attributswürfe ablegen zu müssen. Außerdem kostet ihn schwieriges Gelände, das aus Eis oder Schnee besteht, keine zusätzliche Bewegung." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er sich entscheiden, ihn stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Furchterregende Präsenz einsetzen. Danach führt er drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 19 (2W10+8) Stichschaden plus 9 (2W8) Kälteschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (2W6+8) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +14 zum Treffen, Reichweite 6 m, ein Ziel. Treffer: 17 (2W8+8) Wuchtschaden." },
      { name: "Furchterregende Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet und sich seiner bewusst ist, muss einen Weisheitsrettungswurf gegen SG 16 schaffen, oder sie ist für 1 Minute verängstigt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen, um den Effekt bei Erfolg zu beenden. Wenn der Rettungswurf erfolgreich ist oder der Effekt endet, ist die Kreatur für die nächsten 24 Stunden immun gegen die Furchterregende Präsenz des Drachen." },
      { name: "Kälteodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet eisige Luft in einem Kegel von 27 m Länge. Jede Kreatur im Kegel muss einen Konstitutionsrettungswurf gegen SG 22 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 72 (16W8) Kälteschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Drache schafft einen Weisheit (Wahrnehmung) Wurf." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Schwingenangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Schwingen. Jede Kreatur innerhalb von 4,5 m vom Drachen muss einen Geschicklichkeitsrettungswurf gegen SG 22 schaffen oder erleidet 15 (2W6+8) Wuchtschaden und wird zu Boden geworfen. Der Drache kann dann bis zu seiner halben Flugbewegungsrate fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative-Rang 20 (bei Gleichstand verliert er) kann der Drache eine der folgenden Hortaktionen nutzen; er kann dieselbe nicht zwei Runden in Folge nutzen:",
      aktionen: [
        "Gefrorener Nebel füllt eine Sphäre mit einem Radius von 6 m um einen Punkt innerhalb von 36 m um den Drachen. Die Sphäre breitet sich um Ecken aus und ist stark verschleiert. Kreaturen im Nebel beim Erscheinen müssen einen Konstitutionsrettungswurf gegen SG 10 ablegen, um nicht 10 (3W6) Kälteschaden zu erleiden (halb bei Erfolg). Eine Kreatur, die ihren Zug im Nebel beendet, erleidet 10 (3W6) Kälteschaden. Wind ≥ 30 km/h löst den Nebel auf; ansonsten bleibt er bis zur erneuten Verwendung dieser Hortaktion oder bis der Drache stirbt.",
        "Zackige Eisscherben fallen von der Decke auf bis zu drei Kreaturen darunter, die der Drache sehen kann und die sich nicht weiter als 36 m von ihm entfernen. Der Drache führt einen Fernkampfangriffswurf (+7 zum Treffen) gegen jedes Ziel aus. Bei einem Erfolg erleidet das Ziel 10 (3W6) Stichschaden.",
        "Der Drache erschafft eine undurchsichtige Eismauer auf einer festen Oberfläche innerhalb von 36 m, die er sehen kann. Die Mauer ist bis zu 9 m lang, 9 m hoch und 30 cm dick. Kreaturen in ihrem Bereich beim Erscheinen werden 1,5 m aus dem Bereich geschoben. Jeder 3 m Abschnitt hat RK 5, 30 TP, Empfindlichkeit gegen Feuer und Immunität gegen Gift-, Kälte-, Säure-, nekrotischen und psychischen Schaden. Die Mauer verschwindet bei erneuter Verwendung dieser Hortaktion oder wenn der Drache stirbt."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region rund um den Hort eines legendären weißen Drachen ist von der Magie des Drachen deformiert und schafft einen oder mehrere der folgenden Effekte:",
      effekte: [
        "Eisiger Nebel macht das Land im Umkreis von 9 km um die Behausung leicht verschleiert.",
        "Eisiger Niederschlag fällt innerhalb von 9 km um die Behausung, sodass es manchmal zu Schneestürmen kommt, wenn der Drache ruht.",
        "Eisige Mauern blockieren Bereiche in der Behausung. Jede Mauer ist 15 cm dick und hat RK 5, 15 TP, Empfindlichkeit gegen Feuer und Immunität gegen Gift-, Kälte-, Säure-, nekrotischen und psychischen Schaden. Der Drache kann durch diese Mauern hindurchbewegen und zerstört dabei den durchquerten Abschnitt. Wenn der Drache stirbt, lösen sich Nebel und Niederschlag innerhalb eines Tages auf; die Eismauern schmelzen innerhalb von 1W10 Tagen."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Ausgewachsener Weißer Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Riesig",
    gesinnung: "Chaotisch böse",
    cr: 13, xp: 10000,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 200, tp_wuerfel: "16W12+96",
    bewegung: { "Gehen": "12 m", "Graben": "9 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 22, DEX: 10, CON: 22, INT: 8, WIS: 12, CHA: 12 },
    rettungswuerfe: { GES: 5, KON: 11, WEI: 6, CHA: 6 },
    fertigkeiten: { "Heimlichkeit": 5, "Wahrnehmung": 11 },
    schadensresistenzen: [], schadensimmunitaeten: ["Kälte"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 21,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Arktis", "Gebirge"],
    bild: "assets/images/monster/ausgewachsener_weisser_drache.png",
    beschreibung: [
      "Ausgewachsene Weiße Drachen haben ihre arktischen Reviere durch schiere Gewalt gesichert. Gebirgskavernen werden durch ihre Anwesenheit eingefroren. Sie ruhen auf hohen Eisplateaus und lassen Eindringlinge sich durch ein tückisches Durcheinander aus Eis, Stein, verborgenen Gruben und rutschigen Abhängen abmühen, während sie von oben herab angreifen."
    ],
    besonderheiten: [
      { name: "Eiswandeln", beschreibung: "Der Drache kann sich über Eis bewegen und eisige Oberflächen erklimmen, ohne Attributswürfe ablegen zu müssen. Außerdem kostet ihn schwieriges Gelände, das aus Eis oder Schnee besteht, keine zusätzliche Bewegung." },
      { name: "Legendäre Resistenz (3/Tag)", beschreibung: "Wenn der Drache einen Rettungswurf misslingt, kann er sich entscheiden, ihn stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache kann seine Furchterregende Präsenz einsetzen. Danach führt er drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden plus 4 (1W8) Kälteschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Nahkampf-Waffenangriff: +11 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 15 (2W8+6) Wuchtschaden." },
      { name: "Furchterregende Präsenz", beschreibung: "Jede Kreatur nach Wahl des Drachen, die sich innerhalb von 36 m von ihm befindet und sich seiner bewusst ist, muss einen Weisheitsrettungswurf gegen SG 14 schaffen, oder sie ist für 1 Minute verängstigt. Eine Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen, um den Effekt bei Erfolg zu beenden. Wenn der Rettungswurf erfolgreich ist oder der Effekt endet, ist die Kreatur für die nächsten 24 Stunden immun gegen die Furchterregende Präsenz des Drachen." },
      { name: "Kälteodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet eisige Luft in einem Kegel von 18 m Länge. Jede Kreatur im Kegel muss einen Konstitutionsrettungswurf gegen SG 19 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 54 (12W8) Kälteschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Aufspüren", beschreibung: "Der Drache schafft einen Weisheit (Wahrnehmung) Wurf." },
      { name: "Schwanzangriff", beschreibung: "Der Drache führt einen Schwanzangriff durch." },
      { name: "Schwingenangriff (kostet 2 Aktionen)", beschreibung: "Der Drache schlägt mit seinen Schwingen. Jede Kreatur innerhalb von 3 m vom Drachen muss einen Geschicklichkeitsrettungswurf gegen SG 19 schaffen oder erleidet 13 (2W6+6) Wuchtschaden und wird zu Boden geworfen. Der Drache kann dann bis zu seiner halben Flugbewegungsrate fliegen." }
    ],
    hortaktionen: {
      beschreibung: "Bei Initiative-Rang 20 (bei Gleichstand verliert er) kann der Drache eine der folgenden Hortaktionen nutzen; er kann dieselbe nicht zwei Runden in Folge nutzen:",
      aktionen: [
        "Gefrorener Nebel füllt eine Sphäre mit einem Radius von 6 m um einen Punkt innerhalb von 36 m um den Drachen. Die Sphäre breitet sich um Ecken aus und ist stark verschleiert. Kreaturen im Nebel beim Erscheinen müssen einen Konstitutionsrettungswurf gegen SG 10 ablegen, um nicht 10 (3W6) Kälteschaden zu erleiden (halb bei Erfolg). Eine Kreatur, die ihren Zug im Nebel beendet, erleidet 10 (3W6) Kälteschaden. Wind ≥ 30 km/h löst den Nebel auf; ansonsten bleibt er bis zur erneuten Verwendung dieser Hortaktion oder bis der Drache stirbt.",
        "Zackige Eisscherben fallen von der Decke auf bis zu drei Kreaturen darunter, die der Drache sehen kann und die sich nicht weiter als 36 m von ihm entfernen. Der Drache führt einen Fernkampfangriffswurf (+7 zum Treffen) gegen jedes Ziel aus. Bei einem Erfolg erleidet das Ziel 10 (3W6) Stichschaden.",
        "Der Drache erschafft eine undurchsichtige Eismauer auf einer festen Oberfläche innerhalb von 36 m, die er sehen kann. Die Mauer ist bis zu 9 m lang, 9 m hoch und 30 cm dick. Kreaturen in ihrem Bereich beim Erscheinen werden 1,5 m aus dem Bereich geschoben. Jeder 3 m Abschnitt hat RK 5, 30 TP, Empfindlichkeit gegen Feuer und Immunität gegen Gift-, Kälte-, Säure-, nekrotischen und psychischen Schaden. Die Mauer verschwindet bei erneuter Verwendung dieser Hortaktion oder wenn der Drache stirbt."
      ]
    },
    regionale_effekte: {
      beschreibung: "Die Region rund um den Hort eines legendären weißen Drachen ist von der Magie des Drachen deformiert und schafft einen oder mehrere der folgenden Effekte:",
      effekte: [
        "Eisiger Nebel macht das Land im Umkreis von 9 km um die Behausung leicht verschleiert.",
        "Eisiger Niederschlag fällt innerhalb von 9 km um die Behausung, sodass es manchmal zu Schneestürmen kommt, wenn der Drache ruht.",
        "Eisige Mauern blockieren Bereiche in der Behausung. Jede Mauer ist 15 cm dick und hat RK 5, 15 TP, Empfindlichkeit gegen Feuer und Immunität gegen Gift-, Kälte-, Säure-, nekrotischen und psychischen Schaden. Der Drache kann durch diese Mauern hindurchbewegen und zerstört dabei den durchquerten Abschnitt. Wenn der Drache stirbt, lösen sich Nebel und Niederschlag innerhalb eines Tages auf; die Eismauern schmelzen innerhalb von 1W10 Tagen."
      ]
    },
    source: "Monsterhandbuch"
  },
  {
    name: "Junger Weißer Drache",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 6, xp: 2300,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 133, tp_wuerfel: "14W10+56",
    bewegung: { "Gehen": "12 m", "Graben": "6 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 18, DEX: 10, CON: 18, INT: 6, WIS: 11, CHA: 12 },
    rettungswuerfe: { GES: 3, KON: 7, WEI: 3, CHA: 4 },
    fertigkeiten: { "Heimlichkeit": 3, "Wahrnehmung": 6 },
    schadensresistenzen: [], schadensimmunitaeten: ["Kälte"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"], passiveWahrnehmung: 16,
    sprachen: ["Allgemein", "Drakonisch"],
    umgebung: ["Arktis", "Gebirge"],
    bild: "assets/images/monster/junger_weisser_drache.png",
    beschreibung: [
      "Junge Weiße Drachen sind tierhaft und unerbittlich. Bereits in jungen Jahren haben sie ein ausgeprägtes Territorium und merken sich jeden Eindringling für spätere Rache."
    ],
    besonderheiten: [
      { name: "Eiswandeln", beschreibung: "Der Drache kann sich über Eis bewegen und eisige Oberflächen erklimmen, ohne Attributswürfe ablegen zu müssen. Außerdem kostet ihn schwieriges Gelände, das aus Eis oder Schnee besteht, keine zusätzliche Bewegung." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt drei Angriffe aus: einen mit dem Biss und zwei mit den Klauen." },
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 15 (2W10+4) Stichschaden plus 4 (1W8) Kälteschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Waffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Hiebschaden." },
      { name: "Kälteodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet eisige Luft in einem Kegel von 9 m Länge. Jede Kreatur im Kegel muss einen Konstitutionsrettungswurf gegen SG 15 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 45 (10W8) Kälteschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Weißer Drachennestling",
    art: "Drache",
    unterart: "Chromatischer Drache",
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 2, xp: 450,
    rk: 16, ruestungstyp: "natürliche Rüstung",
    tp: 32, tp_wuerfel: "5W8+10",
    bewegung: { "Gehen": "9 m", "Graben": "4,5 m", "Fliegen": "18 m", "Schwimmen": "9 m" },
    attribute: { STR: 14, DEX: 10, CON: 14, INT: 5, WIS: 10, CHA: 11 },
    rettungswuerfe: { GES: 2, KON: 4, WEI: 2, CHA: 2 },
    fertigkeiten: { "Heimlichkeit": 2, "Wahrnehmung": 4 },
    schadensresistenzen: [], schadensimmunitaeten: ["Kälte"], verwundbarkeiten: [], zustandsimmunitaeten: [],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 18 m"], passiveWahrnehmung: 14,
    sprachen: ["Drakonisch"],
    umgebung: ["Arktis", "Gebirge"],
    bild: "assets/images/monster/weisser_drachennestling.png",
    beschreibung: [
      "Weiße Drachennestlinge haben rein weiße, glänzende Schuppen. Schon jetzt zeigen sie das tierhaft-impulsive Verhalten ihrer Art, wenn auch ohne jede Raffinesse."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Waffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W10+2) Stichschaden plus 2 (1W4) Kälteschaden." },
      { name: "Kälteodem (Aufladezeit 5–6)", beschreibung: "Der Drache atmet eisige Luft in einem Kegel von 4,5 m Länge. Jede Kreatur im Kegel muss einen Konstitutionsrettungswurf gegen SG 12 ablegen. Bei einem misslingenden Rettungswurf erleidet sie 22 (5W8) Kälteschaden, bei einem gelungenen nur die Hälfte." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  },
  {
    name: "Yochlol",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 10, xp: 5900,
    rk: 15, ruestungstyp: "natürliche Rüstung",
    tp: 136, tp_wuerfel: "16W8+64",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m" },
    attribute: { STR: 15, DEX: 14, CON: 18, INT: 13, WIS: 15, CHA: 15 },
    rettungswuerfe: { GES: 6, INT: 5, WEI: 6, CHA: 6 },
    fertigkeiten: { "Motiverkennen": 6, "Täuschen": 10 },
    schadensresistenzen: ["Blitz", "Feuer", "Kälte", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 36 m"], passiveWahrnehmung: 12,
    sprachen: ["Abyssisch", "Elfisch", "Gemeinsprache der Unterreiche"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/yochlol.png",
    beschreibung: [
      "Die Yochlols sind die Mägde der Lolth – Erweiterungen des Willens der Spinnenkönigin, die sich der Aufgabe verschrieben haben, ihr als Spione, Zuchtmeister und Agenten des Bösen zu dienen. Sie bedienen ihre Göttin in den Dämonennetzgruben, doch manchmal schickt Lolth Yochlols auf die Materielle Ebene, um ihre Tempel zu bewachen und ihre loyalsten Priesterinnen zu unterstützen. Yochlols bilden sich nicht außerhalb von Lolths Reich des Dämonennetzes, und sie dienen keinem Dämonenfürsten außer ihrer Königin.",
      "Außerhalb des Abyss kann eine Yochlol die Gestalt einer weiblichen Drow oder einer monströsen Spinne annehmen, um ihre dämonische Gestalt zu verbergen. In ihrer wahren Gestalt erscheint die Unholdin als Säule aus gelbem Schleim mit einem einzigen bösartigen Auge. In der Drow-Gestalt und der wahren Gestalt hat die Berührung der Yochlol den gleichen giftigen Effekt wie der Biss der Spinnengestalt."
    ],
    besonderheiten: [
      { name: "Angeborenes Zauberwirken", beschreibung: "Das Attribut zum Wirken angeborener Zauber für die Yochlol ist Charisma (Zauberrettungswurf-SG 14). Die Yochlol kann die folgenden Zaubersprüche angeboren wirken, wobei keine Materialkomponenten notwendig sind: willentlich: Gedanken entdecken, Spinnennetz; 1/Tag: Person beherrschen." },
      { name: "Netzwandler", beschreibung: "Die Yochlol ignoriert Bewegungseinschränkungen, die durch Netze ausgelöst werden." },
      { name: "Magieresistenz", beschreibung: "Die Yochlol hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Spinnenklettern", beschreibung: "Die Yochlol kann an schwierigen Oberflächen klettern, sogar kopfüber an der Decke, ohne einen Attributswurf ablegen zu müssen." },
      { name: "Variante: Dämonenbeschwörung", beschreibung: "Beschwöre Dämon (1/Tag): Der Dämon entscheidet, was er beschwören will und führt eine magische Beschwörung durch. Ein Yochlol hat eine Chance von 50%, einen Yochlol zu beschwören. Ein beschworener Dämon erscheint in einem nicht besetzten Bereich innerhalb von 18 m um seinen Beschwörer, dient als Verbündeter des Beschwörers und kann selbst keine anderen Dämonen beschwören. Er bleibt für 1 Minute, bis sein Beschwörer getötet worden ist oder bis der Beschwörer ihn als Bonusaktion fortschickt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Yochlol führt zwei Nahkampfangriffe durch." },
      { name: "Hieb (Biss in Spinnenform)", beschreibung: "Nahkampf-Waffenangriff: +6 zum Treffen, Reichweite 7,5 m (3 m in Dämonengestalt), ein Ziel. Treffer: 7 (1W10+2) Wuchtschaden (Stichschaden in Spinnenform) plus 21 (6W6) Giftschaden." },
      { name: "Nebelgestalt", beschreibung: "Die Yochlol verwandelt sich in toxischen Nebel oder nimmt wieder ihre wahre Gestalt an. Jede Ausrüstung, die sie tragen oder in der Hand halten sollte, wird mit verwandelt. Sie nimmt wieder ihre wahre Gestalt an, wenn sie stirbt. Solange sie die Nebelgestalt angenommen hat, ist die Yochlol kampfunfähig und kann nicht sprechen. Sie hat eine Flugbewegungsrate von 9 m, kann schweben und durch alle Bereiche dringen, die nicht luftdicht versiegelt sind. Sie hat einen Vorteil bei Stärke-, Geschicklichkeits- und Konstitutionsrettungswürfen und ist immun gegen nicht-magischen Schaden. Solange sie die Nebelgestalt angenommen hat, kann die Yochlol den Bereich jeder Kreatur betreten und dort anhalten. Immer wenn eine Kreatur ihren Zug beginnt, während sich die Yochlol in ihrem Bereich befindet, muss sie einen Konstitutionsrettungswurf gegen SG 14 schaffen, um nicht bis zum Beginn ihres nächsten Zuges vergiftet zu werden. Solange das Ziel auf diese Weise vergiftet ist, ist es kampfunfähig." },
      { name: "Gestaltwandler", beschreibung: "Die Yochlol kann ihre Aktion verwenden, um sich in eine Gestalt zu verwandeln, die einer weiblichen Drow oder einer Riesenspinne ähnelt, oder ihre wahre Gestalt anzunehmen. Ihre Spielwerte sind gleich, egal welche Form sie gerade hat. Jede Ausrüstung, die sie tragen oder in der Hand halten sollte, wird mit verwandelt. Sie nimmt wieder ihre wahre Gestalt an, wenn sie stirbt." }
    ],
    bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
    source: "Monsterhandbuch"
  }
];

window.UNTERART_LORE = {
  "Drache": {
    einleitung: "Wahre Drachen sind geflügelte Echsen mit uraltem Stammbaum und schrecklicher Macht. Sie sind für ihre raubtierhafte Gerissenheit und Gier bekannt, wobei die ältesten Drachen zu den mächtigsten Kreaturen in der Welt gehören. Drachen sind außerdem magische Kreaturen, deren angeborene Macht ihre gefürchteten Odemwaffen und andere übernatürliche Fähigkeiten ermöglicht.",
    abschnitte: [
      {
        titel: "Drachenalter-Kategorien",
        tabelle: {
          kopf: ["Kategorie", "Größe", "Altersspanne"],
          zeilen: [
            ["Nestling", "Mittelgroß", "5 Jahre oder weniger"],
            ["Jung", "Groß", "6–100 Jahre"],
            ["Ausgewachsen", "Riesig", "101–800 Jahre"],
            ["Uralt", "Gigantisch", "801 Jahre und mehr"]
          ]
        },
        inhalt: "Wahre Drachen durchlaufen vier verschiedene Lebensphasen, von den niederen Nestlingen bis hin zu den uralten Drachen, die über tausend Jahre alt werden können. In dieser Zeit kann ihre Macht unvergleichbar werden und ihr Hort die Grenzen der Vorstellungskraft sprengen."
      }
    ]
  },
  "Chromatischer Drache": {
    einleitung: "Chromatische Drachen sind die bösartigsten und gefährlichsten Drachen der Welt – selbstsüchtige, grausame Wesen, die Menschen und andere schwächere Geschöpfe als Beute oder als Spielzeug ansehen. Fünf Arten von chromatischen Drachen existieren – schwarz, blau, grün, rot und weiß – und jede Art ist mehr oder weniger eine andere Version derselben bösen Natur.",
    abschnitte: [
      {
        titel: "Chromatische Drachen",
        inhalt: "Chromatische Drachen sind durch ihre Arroganz und ihr böses Gemüt vereint. Alle chromatischen Drachen betrachten sich als Wesen der überlegenen Macht und halten die vernunftbegabten Rassen der Welt für nichts anderes als potenzielle Sklaven. Von Zeit zu Zeit suchen chromatische Drachen einander, aber abgesehen von der Paarungszeit und der Aufzucht von Jungen leben diese ungeselligenWesen ein solches Territorium für sich alleine."
      },
      {
        titel: "Getrieben von Gier",
        inhalt: "Chromatische Drachen lieben Gold und Schätze über alles. Ein Drache bewacht seinen Hort mit fanatischer Intensität und ist stets auf der Hut vor Eindringlingen, die seinen Schatz stehlen könnten. Wenn ein Drache einen bestimmten Gegenstand aus einem anderen Hort haben will, überfällt er einfach den anderen Hort und tötet dessen Besitzer. Selten nutzen chromatische Drachen subtilere Methoden – sie bezaubern oder terrorisieren Sterbliche, sodass diese für sie stehlen oder erpressen."
      },
      {
        titel: "Kreaturen aus purem Ego",
        inhalt: "Chromatische Drachen sind absolut egozentrisch. Sie betrachten alles und jeden nur in Bezug darauf, wie es oder er ihnen nützt. Sie schließen keine echten Freundschaften oder Allianzen, sind aber durchaus bereit, Sterbliche vorübergehend zu dulden, wenn diese ihnen etwas bieten, das sie begehren. Chromatische Drachen halten sich für die Krone der Schöpfung, und die Geschichte der Drachenwelt besteht aus einem endlosen Krieg für Territorium und Überlegenheit."
      },
      {
        titel: "Gefährliche Behausungen",
        inhalt: "Chromatische Drachen wählen Horte, die zu ihrem Element und ihrer Natur passen. Sie bevorzugen abgelegene, schwer zugängliche Orte weit entfernt von Zivilisation: tiefe Höhlen, verlassene Ruinen, einsame Gipfel oder versunkene Schiffswracks. Ein Drachenhort ist ein Abbild seiner Persönlichkeit – ein Zeugnis seiner Macht, Ausdauer und Gier über die Jahrhunderte."
      }
    ]
  },
  "Metallischer Drache": {
    einleitung: "Metallische Drachen wollen bewahren und beschützen. Sie sehen sich als ein mächtiges Volk unter den zahlreichen Völkern, die einen Platz in der Welt haben.",
    abschnitte: [
      {
        titel: "Edle Neugier",
        inhalt: "Metallische Drachen begehren Schätze wie ihre chromatischen Vettern, doch sind sie nicht so sehr von Gier dominiert. Sie verspüren den Drang nachzuforschen und zu sammeln. Sie nehmen Relikte, auf die niemand Anspruch erhebt, und bewahren sie. Manchmal verstauen sie mächtige magische Gegenstände und böse Artefakte in ihrem Hort, um andere Kreaturen vor gefährlicher Magie zu schützen."
      },
      {
        titel: "Einzelgängerische Gestaltwandler",
        inhalt: "Metallische Drachen erhalten irgendwann die Fähigkeit, die Gestalt von Humanoiden und Tieren anzunehmen. Ältere Drachen lieben es, in menschlicher Gestalt durch Städte zu wandern, die örtliche Kultur und Küche zu genießen und zu beobachten, wie die kleineren Völker leben. Einige ziehen es vor, weit von der Zivilisation weg zu bleiben, um keine Feinde anzulocken."
      },
      {
        titel: "Die Beständigkeit der Erinnerungen",
        inhalt: "Metallische Drachen haben ein langes Gedächtnis und bilden sich ihre Meinung über Humanoide basierend auf früherem Kontakt mit verwandten Personen. Gute Drachen können menschliche Abstammung nach dem Geruch erkennen und erinnern sich an Verwandte, mit denen sie im Lauf der Jahre Kontakt hatten. Dies kann zu überraschenden Vorurteilen führen – ein Drache könnte jemanden verabscheuen, weil ein Vorfahr vor Jahrhunderten aus seinem Hort gestohlen hat."
      },
      {
        titel: "König der Guten Drachen",
        inhalt: "Die Hauptgottheit der metallischen Drachen ist Bahamut, der Platindrache. Er lebt in den Sieben Himmeln von Berg Celestia, streift aber oft durch die Materielle Ebene in der Gestalt eines ehrwürdigen Mannes in bäuerlicher Gewandung – normalerweise begleitet von sieben goldenen Kanarienvögeln, die in Wirklichkeit sieben verwandelte Golddrachen sind. Bahamut mischt sich selten in die Angelegenheiten sterblicher Kreaturen ein, macht aber Ausnahmen, um die Machenschaften von Tiamat und ihrer bösen Brut zu vereiteln."
      }
    ]
  },
  "Schattendrache": {
    einleitung: "Schattendrachen sind wahre Drachen, die entweder im Schattensaum geboren worden sind oder verwandelt wurden, weil sie Jahre in ihm zugebracht haben. Einige genießen die trostlosen Landschaften des Schattensaums, andere wollen auf die Materielle Ebene zurückkehren, um Dunkelheit und Böses zu verbreiten.",
    abschnitte: [
      {
        titel: "Dunkle Portale",
        inhalt: "Portale in den Schattensaum materialisieren sich an abgelegenen Orten und in tiefer unterirdischer Düsternis. Die Drachen, die an solchen Orten hausen, entdecken oft diese Portale und werden in ein neues Reich transportiert. Uralte Drachen, die monate- oder jahrelang schlafen, werden oft hineingesogen, ohne es zu bemerken, da sich das Portal ohne ihr Wissen geformt hat."
      },
      {
        titel: "Im Schatten neu erschaffen",
        inhalt: "Die Verwandlung dauert Jahre. Die Schuppen verlieren ihren Glanz und nehmen die Farbe von Kohle an, die Schwingen werden durchscheinend, die Augen verblassen zu Tümpeln aus schillerndem Grau. Schattendrachen finden das Sonnenlicht abscheulich. Während Monate und Jahre vergehen, wird der Drache sich der Verwandlung bewusst, kann aber nichts tun, um sie zu verhindern."
      },
      {
        titel: "Zurück in der Welt",
        inhalt: "Ein Schattendrache ist so von der Macht des Schattensaums erfüllt, dass selbst eine Rückkehr auf die Materielle Ebene seine Verwandlung nicht aufheben kann. Einige locken Kreaturen in den Schattensaum, um Gesellschaft zu haben – zumindest bis sie die Gäste überdrüssig werden und sie verschlingen. Andere sind froh, den Schattensaum für immer hinter sich zu lassen."
      },
      {
        titel: "Schablone für Schattendrachen",
        inhalt: "Nur ein wahrer Drache kann sich in einen Schattendrachen verwandeln, und nur, wenn er im Schattensaum geboren wird oder dort mehrere Jahre verbringt. Ein Drakolich kann nicht verwandelt werden, da er sein Drachenwesen beim Übergang zum Untoten verliert. Schattendrachen erhalten folgende Anpassungen: Resistenz gegen Nekrotisch; doppelter Übungsbonus für Heimlichkeit; Lebender Schatten (Resistenz gegen nicht-Energie-/gleißenden/psychischen Schaden in schwachem Licht oder Dunkelheit); Heimlicher Schatten (Verstecken als Bonusaktion in schwachem Licht/Dunkelheit); Empfindlichkeit gegenüber Sonnenlicht (Nachteil auf Angriffe und WEI-Wahrnehmung im hellen Licht). Der Biss-Schaden wird zu nekrotisch. Odemwaffen verursachen nekrotischen Schaden – Humanoide, die auf 0 TP reduziert werden, sterben und beschwören einen untoter Schatten unter der Kontrolle des Drachens."
      }
    ]
  },
  "Dinosaurier": {
    einleitung: "Dinosaurier oder Behemoths gehören zu den ältesten Reptilien auf der Welt. Raubsaurier sind wilde, territoriale Jäger. Pflanzenfressende Dinosaurier sind weniger aggressiv, aber könnten angreifen, um ihre Jungen zu verteidigen oder wenn sie erschreckt oder belästigt werden.",
    abschnitte: [
      {
        titel: "Verbreitung",
        inhalt: "Dinosaurier gibt es in vielen Größen und Formen. Größere Varianten haben oft eine einfache Färbung, während kleinere Dinosaurier farbenfroh gezeichnet wie Vögel sind. Dinosaurier streifen durch raue und isolierte Gegenden, die selten von Humanoiden besucht werden, wie abgelegene Gebirgstäler, unerreichbare Plateaus, tropische Inseln und tiefe Sümpfe."
      }
    ]
  },
  "Dämon": {
    einleitung: "Dämonen, die in den Unendlichen Schichten des Abyss erschaffen werden, sind eine Verkörperung des Chaos und des Bösen – Maschinen der Zerstörung, die kaum von einer monströsen Gestalt im Zaum gehalten werden. Sie verfügen über kein Mitleid, kein Einfühlungsvermögen, keine Gnade und existieren nur, um zu zerstören.",
    abschnitte: [
      {
        titel: "Typen von Dämonen",
        inhalt: "Dämonologen organisieren die chaotische Ansammlung von Dämonen in weit gefasste Machtkategorien, die als Typen bekannt sind. Die meisten Dämonen passen in die sechs Hauptarten, wobei die schwächsten Dämonen Typ 1 und die stärksten Typ 6 sind. Dämonen außerhalb der sechs Haupttypen werden als mindere Dämonen und Dämonenfürsten kategorisiert.",
        tabelle: {
          kopf: ["Typ", "Beispiele"],
          zeilen: [
            ["1", "Barlgura, Schattendämon, Vrock"],
            ["2", "Chasme, Hezrou"],
            ["3", "Glabrezu, Yochlol"],
            ["4", "Nalfeshnee"],
            ["5", "Marilith"],
            ["6", "Balor, Goristro"]
          ]
        }
      },
      {
        titel: "Wahre Namen von Dämonen",
        inhalt: "Auch wenn alle Dämonen allgemein bekannte Namen haben, hat jeder Dämonenfürst und jeder Dämon des Typs 1 bis 6 einen wahren Namen, den er geheim hält. Ein Dämon kann gezwungen werden, seinen wahren Namen zu verraten, wenn er bezaubert wird, und es soll uralte Schriftrollen geben, auf denen die wahren Namen der mächtigsten Dämonen verzeichnet sind. Ein Sterblicher, der den wahren Namen eines Dämons in Erfahrung bringt, kann mächtige Beschwörungsmagie nutzen, um den Dämon aus dem Abyss zu rufen und eine gewisse Kontrolle über ihn auszuüben. Allerdings tun die meisten Dämonen, die auf diese Weise auf die Materielle Ebene gebracht werden, alles, was in ihrer Macht steht, um Chaos zu säen oder für Zwietracht und Streit zu sorgen."
      },
      {
        titel: "Brut des Chaos",
        inhalt: "Der Abyss erschafft Dämonen als Erweiterung seiner selbst und formt die Unholde spontan aus Schmutz und Gewalt. Einige sind einzigartige Monstren, andere stellen einheitliche Arten dar, die untereinander fast identisch sind. Andere Dämonen (wie Manen) werden aus sterblichen Seelen erschaffen, die von den Göttern abgelehnt oder verflucht wurden oder die aus anderen Gründen im Abyss gefangen worden sind."
      },
      {
        titel: "Launenhafter Aufstieg",
        inhalt: "Dämonen respektieren einzig und allein Macht. Ein mächtiger Dämon befehligt deshalb kreischende Meuten schwächerer Dämonen, weil er schwächere Dämonen, die seinen Befehlen nicht folgen wollen, einfach zerstören kann. Der Status eines Dämons wächst mit dem Blut, das er vergießt; je mehr Feinde ihm zum Opfer fallen, umso machtvoller wird er. Ein Dämon könnte als Mane in die Welt gebracht werden, dann zu einem Dretch werden und sich schließlich in einen Vrock verwandeln, nachdem er unendlich lange im Abyss gekämpft und überlebt hat. Solche Erhebungen sind allerdings selten, da die meisten Dämonen zerstört werden, ehe sie nennenswerte Macht erlangen können. Die Mächtigsten unter jenen, die überleben, sind die Dämonenfürsten, die drohen, den Abyss mit ihren endlosen Kriegen zu zerfetzen. Indem sie beträchtliche magische Macht aufwenden, können Dämonenfürsten schwächere Dämonen zu mächtigeren machen, doch sind solche Beförderungen niemals die Folge der Taten oder Leistungen des Dämons. Vielmehr verwandelt ein Dämonenfürst vielleicht einen Mane in einen Quasit, wenn er einen unsichtbaren Spion braucht, oder er verwandelt eine Armee von Dretchs in Hezrous, wenn er gegen einen feindlichen Fürsten in die Schlacht zieht. Dämonenfürsten erheben Dämonen nur selten in den höchsten Rang, da sie fürchten, Rivalen um ihre eigene Macht zu erschaffen."
      },
      {
        titel: "Invasion aus dem Abyss",
        inhalt: "Wo auch immer sie durch den Abyss wandern, suchen Dämonen nach Portalen auf andere Ebenen. Sie sehnen sich nach der Gelegenheit, ihrem Heimatreich zu entkommen und ihren dunklen Einfluss im ganzen Multiversum zu verbreiten. Sie wollen die Werke der Götter zunichte machen, Zivilisationen niederreißen und den Kosmos in Verzweiflung und Unheil stürzen. Einige der finstersten Legenden der sterblichen Welt drehen sich um die Zerstörung, die von Dämonen verursacht wird, die in die Welt losgelassen wurden. Und so werden selbst Nationen, die in bittere Auseinandersetzungen verwickelt sind, ihre Meinungsverschiedenheiten beiseite legen, um zu helfen, einen Dämonenausbruch einzudämmen oder Durchbrüche aus dem Abyss zu versiegeln, ehe diese Unholde ausbrechen können."
      },
      {
        titel: "Zeichen der Korruption",
        inhalt: "Dämonen tragen den Makel der Korruption des Abyss in sich. Ihre bloße Anwesenheit macht die Welt zu einem schlechteren Ort. Pflanzen verdorren und sterben in Gegenden, in denen es zu Durchbrüchen aus dem Abyss kommt und wo Dämonen auftauchen. Tiere meiden Orte, an denen Dämonen getötet haben. Die Stätte einer dämonischen Heimsuchung könnte von einem Gestank verdorben sein, der niemals schwindet, von Gegenden bitterer Kälte oder sengender Hitze oder von dauerhaften Schatten, die die Orte kennzeichnen, wo sich die Unholde aufgehalten haben."
      },
      {
        titel: "Ewiges Böse",
        inhalt: "Außerhalb des Abyss ist der Tod nur ein unbedeutendes Ärgernis, das kein Dämon fürchtet. Gewöhnliche Waffen können diese Unholde nicht aufhalten, und viele Dämonen sind resistent gegen die Energie der mächtigsten Zauber. Wenn ein glücklicher Held es schafft, einen Dämon im Kampf niederzustrecken, dann löst sich dieser in faulig stinkendes Blut auf. Er formt sich dann augenblicklich im Abyss neu. Sein Geist und seine Essenz sind intakt und sein Hass entflammt. Die einzige Art, einen Dämon wirklich zu töten, ist es, ihn im Abyss ausfindig zu machen und dort zu töten."
      },
      {
        titel: "Geschützte Essenz",
        inhalt: "Ein mächtiger Dämon kann Schritte einleiten, um seine Lebensessenz zu schützen. Dabei verwendet er geheime Methoden und Metalle aus dem Abyss, um ein Amulett zu erschaffen, in das ein Teil dieser Essenz eingearbeitet wird. Wenn die Gestalt des Dämons im Abyss jemals zerstört wird, erlaubt es ihm das Amulett, sich an einem Ort und einer Zeit seiner Wahl neu zu formen. Ein Dämonenamulett zu erlangen ist ein gefährliches Unterfangen, und es nur zu suchen bringt schon das Risiko, die Aufmerksamkeit des Dämons auf sich zu ziehen, der es erschaffen hat. Eine Kreatur, die ein Dämonenamulett in ihrem Besitz hat, kann dem Dämon, dessen Lebensessenz das Amulett birgt, Gefallen abtrotzen – oder große Schmerzen verursachen, wenn sich der Unhold widersetzt. Wenn das Amulett zerstört wird, ist der Dämon, der es erschaffen hat, für ein Jahr und einen Tag im Abyss gefangen."
      },
      {
        titel: "Dämonenkulte",
        inhalt: "Trotz der dunklen Risiken, die jeder Umgang mit Unholden birgt, ist das sterbliche Reich voller Kreaturen, die sich nach dämonischer Macht sehnen. Dämonenfürsten manipulieren diese sterblichen Diener, sodass sie immer verderbtere Taten ausführen und so die Pläne des Dämonenfürsten vorantreiben. Im Austausch erhalten sie Magie und andere Gaben. Allerdings betrachtet ein Dämon alle Sterblichen, die ihm dienen, als bloße Werkzeuge, die er verwenden und dann auf eine Laune hin wegwerfen kann, was ihre sterbliche Seele dem Abyss übereignet."
      },
      {
        titel: "Dämonenbeschwörung",
        inhalt: "Wenige Taten sind so gefährlich wie die Beschwörung eines Dämons. Selbst Magier, die unverhohlen mit Teufeln verhandeln, fürchten die Unholde des Abyss. Auch wenn Dämonen sich danach sehnen, Chaos auf der Materiellen Ebene zu verbreiten, zeigen sie keine Dankbarkeit, wenn sie dorthin gebracht werden. Sie zürnen gegen ihren Kerker und verlangen, freigelassen zu werden. Wer das Risiko eingeht, einen Dämonen zu beschwören, könnte dies tun, um Informationen von ihm zu erhalten, ihn in seinen Dienst zu zwingen oder ihn auf eine Mission auszuschicken, die nur eine Kreatur des absoluten Bösen vollenden kann. Vorbereitung ist der Schlüssel. Erfahrene Beschwörer wissen, welche Zauber und magischen Gegenstände sie nutzen können, um einen Dämon dazu zu zwingen, sich dem Willen eines anderen zu beugen. Wenn nur ein einzelner Fehler gemacht wird, zeigt ein Dämon, der sich losreißt, keine Gnade und macht seinen Beschwörer zum ersten Opfer seines Zorns."
      },
      {
        titel: "Gebundene Dämonen",
        inhalt: "Das Buch der niederträchtigen Dunkelheit, die Schwarzen Schriftrollen von Ahm und das Demonomicon von Iggwilv sind die wichtigsten Werke zu allen dämonischen Fragen. Diese uralten Schriften beschreiben Techniken, die die Essenz eines Dämons auf der Materiellen Ebene einsperren können, um ihn in eine Waffe, ein Götzenbild oder ein Schmuckstück zu sperren und so seine Rückkehr in den Abyss zu verhindern. Ein Gegenstand, der einen Dämon binden soll, muss speziell mit unheiligen Anrufungen und unschuldigem Blut vorbereitet werden. Er strahlt greifbares Böse aus und lässt die Luft in der Umgebung kühl und übelriechend werden. Eine Kreatur, die einen solchen Gegenstand verwendet, durchlebt verstörende Träume und bösartige Impulse, kann aber den Dämon, dessen Essenz in dem Gegenstand gefangen ist, kontrollieren. Den Gegenstand zu zerstören befreit den Dämon, der sofort Rache gegen den anstrebt, der ihn gebunden hat."
      },
      {
        titel: "Dämonische Besessenheit",
        inhalt: "Egal, wie sicher er gebunden ist, ein mächtiger Dämon findet oft eine Möglichkeit, einem Gegenstand zu entkommen, der ihn birgt. Wenn eine dämonische Essenz ihrem Behältnis entkommt, kann sie einen sterblichen Wirt in Besitz nehmen. Manchmal kann ein solcher Unhold heimlich genug sein, um diese Inbesitznahme zu verbergen. Zu anderen Zeiten entfesselt er die volle Wucht seiner unheiligen Triebe durch seine neue Gestalt. Solange der Dämon seinen Wirt in Besitz hat, ist die Seele des Wirts in Gefahr, mit dem Dämon in den Abyss gerissen zu werden, wenn dieser aus dem Fleisch ausgetrieben wird oder wenn der Wirtskörper stirbt. Wenn ein Dämon eine Kreatur in Besitz nimmt und der Gegenstand, der den Dämon bindet, zerstört wird, dann hält die Besessenheit an, bis mächtige Magie verwendet wird, um den dämonischen Geist aus seinem Wirt zu vertreiben."
      }
    ]
  }
};
