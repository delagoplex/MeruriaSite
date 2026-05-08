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
      { name: "Magische Waffen", beschreibung: "Die Waffenangriffe des Balors sind magisch." }
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
      { name: "Laufender Sprung", beschreibung: "Der Weitsprung des Barlguras reicht bis zu 12 m und sein Hochsprung bis zu 6 m, wenn er Anlauf nehmen kann." }
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
      { name: "Spinnenklettern", beschreibung: "Die Chasme kann an schwierigen Oberflächen klettern, sogar kopfüber an der Decke, ohne einen Attributswurf ablegen zu müssen." }
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
      { name: "Magieresistenz", beschreibung: "Der Glabrezu hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." }
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
      { name: "Gestank", beschreibung: "Alle Kreaturen, die ihren Zug innerhalb von 6 m um den Hezrou beginnen, müssen einen Konstitutionsrettungswurf gegen SG 14 schaffen, um nicht bis zum Beginn ihres nächsten Zuges vergiftet zu werden. Bei einem erfolgreichen Rettungswurf ist die Kreatur für 24 Stunden immun gegen den Gestank des Hezrous." }
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
      { name: "Reaktiv", beschreibung: "Die Marilith kann in jedem Zug eines Kampfes eine Reaktion durchführen." }
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
      { name: "Magieresistenz", beschreibung: "Der Nalfeshnee hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." }
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
      { name: "Magieresistenz", beschreibung: "Der Vrock hat einen Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." }
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
      { name: "Spinnenklettern", beschreibung: "Die Yochlol kann an schwierigen Oberflächen klettern, sogar kopfüber an der Decke, ohne einen Attributswurf ablegen zu müssen." }
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
