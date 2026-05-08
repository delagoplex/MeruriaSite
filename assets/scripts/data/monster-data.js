window.MONSTER_DATA = [
  {
    name: "Aarakocra",
    art: "Humanoid",
    unterart: "Aarakocra",
    groesse: "Mittel",
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
  }
];
