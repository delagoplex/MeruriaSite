window.MONSTER_DATA_DRAKKENHEIM = [
  {
    name: "Agog",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 1,
    xp: 200,
    rk: 13,
    ruestungstyp: null,
    tp: 30,
    tp_wuerfel: "4W8+12",
    bewegung: { "Gehen": "3 m", "Klettern": "3 m" },
    attribute: { STR: 15, DEX: 6, CON: 16, INT: 3, WIS: 11, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Versteht Tiefensprache, kann aber nicht sprechen"],
    umgebung: ["Andere Ebenen", "Wüste"],
    bild: "drakkenheim/agog.png",
    beschreibung: [
      "Dieses schreckliche Wesen hat weder Form noch Körper, der an irgendetwas aus der Sterblichen Welt erinnert. Es ähnelt grob einem Baumstumpf mit vier wurzelartigen Beinen, die jeweils in einem missgebildeten Huf enden. Es hat eine feuchte, gefleckte, rindenähnliche Haut, und aus seiner Seite ragen wie Äste knubbelige Arme mit scharfen Klauen hervor. Die Oberseite seines Körpers ist ein klaffendes, zahnbestücktes Maul. Auf den Innenseiten seiner Handflächen, was auch immer bei ihm als Arme gilt, befinden sich gelbe Augen.",
      "Der Agog ähnelt dem, was Sterbliche als Baumstumpf begreifen könnten, und wenn die Kreatur reglos dasteht, kann man an ihr vorbeigehen, ohne sie zu bemerken. Wenn sie jedoch zum Leben erwacht, offenbart sich ihre wahre Gestalt als etwas völlig Bizarres. Diese Kreaturen wackeln durch Wüstenlandschaften im Raum zwischen den Welten oder rasten im Schlamm rund um die schreienden Köpfe. Sie ernähren sich von Leichen und haben einen scheinbar endlosen Appetit und den Drang, ihn zu stillen."
    ],
    besonderheiten: [
      { name: "Aberrante Eigenschaften", beschreibung: "Der Agog besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Agog führt einen Klauenangriff und einen Bissangriff aus." },
      { name: "Biss", beschreibung: "Nahkampfangriffswurf: +4, Reichweite 1,5 m. Treffer: 6 (1W8+2) Stichschaden plus 3 (1W6) Säureschaden." },
      { name: "Klaue", beschreibung: "Nahkampfangriffswurf: +4, Reichweite 1,5 m. Treffer: 7 (2W4+2) Hiebschaden, und wenn das Ziel Mittelgroß oder kleiner ist, erhält es den Zustand Liegend." }
    ],
    bonusaktionen: [
      { name: "Verschlingen", beschreibung: "Der Agog führt einen Bissangriff gegen eine liegende Kreatur aus." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Allopine",
    art: "Aberration",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 1,
    xp: 200,
    rk: 12,
    ruestungstyp: null,
    tp: 21,
    tp_wuerfel: "6W6",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m" },
    attribute: { STR: 6, DEX: 15, CON: 10, INT: 8, WIS: 13, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 3, "Heimlichkeit": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Versteht Tiefensprache, kann aber nicht sprechen"],
    umgebung: ["Andere Ebenen", "Höhle", "Ruinen"],
    bild: "drakkenheim/allopine.png",
    beschreibung: [
      "Diese Kreatur hat eine hagere und missgestaltete Form mit dem schuppigen Körper, dem Schwanz und dem Kopf eines Alligators, knöchernen Stacheln, die seinen Körper wie bei einem Stachelschwein bedecken, fledermausartigen Flügeln und langen, spindeldürren Gliedmaßen.",
      "Die Allopine ist eine Kreatur, die jeder Logik trotzt – scheinbar ein wechselndes und verworrenes Konglomerat verschiedener Tiere. Ihre unzusammenhängende und bizarre Gestalt macht sie zu einem Rätsel für jeden, der sie betrachtet. Die Kreaturen fliegen durch den Raum zwischen den Welten in Schwärmen und bewohnen die dunklen Höhlen und Ruinen in den Nicht-Orten. Wenn sie ihren Weg in die Sterbliche Welt finden, verstecken sie sich in alten Scheunen oder Höhlen."
    ],
    besonderheiten: [
      { name: "Aberrante Eigenschaften", beschreibung: "Die Allopine besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Allopine führt drei Stachelangriffe aus." },
      { name: "Stachel", beschreibung: "Nahkampf- oder Fernkampfangriffswurf: +4, Reichweite 1,5 m oder Reichweite 6 m/18 m. Treffer: 5 (1W6+2) Stichschaden." }
    ],
    bonusaktionen: [
      { name: "Behände Flucht", beschreibung: "Die Allopine ergreift die Aktion Ausweichen oder Verstecken." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Amalgamation",
    art: "Aberration",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Chaotisch böse",
    cr: 23,
    xp: 50000,
    rk: 18,
    ruestungstyp: null,
    tp: 175,
    tp_wuerfel: "10W20+70",
    bewegung: { "Gehen": "1,5 m" },
    attribute: { STR: 30, DEX: 11, CON: 27, INT: 22, WIS: 18, CHA: 20 },
    rettungswuerfe: { STR: 17, GES: 7, KON: 14, INT: 13, WEI: 11, CHA: 5 },
    fertigkeiten: { "Arkane Kunde": 13, "Täuschen": 12, "Motiv erkennen": 11, "Wahrnehmung": 11 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend", "Betäubt"],
    sinne: ["Wahre Sicht 18 m"],
    passiveWahrnehmung: 21,
    sprachen: ["Alle Sprachen", "Telepathie 1,6 km"],
    umgebung: ["Ruinen"],
    bild: "drakkenheim/amalgamation.png",
    beschreibung: [
      "Vor dem Thron befindet sich eine gibbernde Amalgamation aus fleischigen Tumoren, faulenden Knochen und ranzigen Schichten aufgeblähten Fetts, das zwischen Decke und Boden durch stielige Stränge aus verschrungenem Gewebe aufgehängt ist. Eine spürbare Aura der Kontamination geht von dem Biest aus. Die Masse ist bedeckt mit platzenden Geschwüren und zuckenden Schleimknoten, die Galle und Deliriumschlamm verströmen. Die Kreatur murmelt in fremden Zungen aus sechs weit aufgesperrten Mäulern, pfeift und sprudelt in dissonanten musikalischen Tönen, und träge wandernde Augen enormer Größe öffnen und schließen sich über ihren gesamten Körper. Dicke, stammähnliche Tentakel reichen aus ihrer abscheulichen, stinkenden Form heraus und winden und krümmen sich durch das Gemach. Mehrere Gliedmaßen sind um pulsierende menschliche Organe gewickelt: Lungen, Leber, Nieren, ein Herz, ein Gehirn – und dazwischen hängt die juwelenbesetzte Krone von Westemär.",
      "Die Amalgamation, das Ergebnis einer kaskadierenden Katastrophe aus Kontamination und Mutation, haust im Thronsaal von Schloss Drakken.",
      "Als der Meteor einschlug, geschahen fast augenblicklich mehrere magische Ereignisse in der gesamten Stadt. Das Zersplittern des Unergründlichen Turms löste außer Kontrolle geratene arkane Anomalien durch die Stadt aus, während der Aufprall des Meteors eine Schockwelle magischer Verwüstung aussandte, die Glas zertrümmerte, durch Stein und Holz brach und die meisten lebenden Kreaturen zu Asche reduzierte. Andere, die im Explosionsbereich gefangen waren, wurden sofort in Monster verwandelt, und Gebäude und Straßen wurden zu empfindungsfähigen Wucherungen und missgebildeten Schrecken.",
      "Schloss Drakken war ein Epizentrum magischer Wände, Schutzsprüche, Weissagungen und allerlei inhärent magischer Kleinodien und Artefakte. Der Thronsaal, in dem König Ulrich saß, beherbergte mehrere der mächtigsten magischen Relikte in Westemär. Die Krone von Westemär war das prominenteste Stück, obwohl König Ulrich selbst ein magisches Zepter hielt, vier magische Ringe trug und ein schützendes Amulett besaß. Außerdem war das große runde Buntglasfenster hinter dem Thron mit Magie imbiert, die es ermöglichte, die Farben zu wechseln und im Laufe der Jahreszeiten verschiedene Bilder darzustellen.",
      "Als die Wellen der arkanen Zerstörung durch den Thronsaal fegten, zersplitterten sie die reichliche magische Energie im Raum, öffneten sofort einen Riss in den Raum zwischen den Welten und verschmolzen all des Königs Männer zu einem massiven Haufen zitternden Fettfleisches. König Ulrich versuchte zu fliehen, doch das magische Chaos verschmolz ihn mit seinem Thron. Als der König schmolz, wurde er von dem sich ausdehnenden Fleisch absorbiert, und sein Gesicht kam als entstelltes Grimassen in der Mitte der schrecklichen Amalgamation zur Ruhe.",
      "Die Kreatur wuchs in den vergangenen Jahren weiter, und jene, die nach dem verlorenen König suchten, wurden bald selbst eins mit der Amalgamation. Stränge seltsamen Fleisches breiten sich nun wie ein Netz aus Sehnen und Haut über den Thronsaal aus, während pulsierende Kontamination aus der grotesken Masse strömt. Ein massiges Maul erstreckt sich über die gesamte Länge der Kreatur, wobei verschiedene menschliche Knochen als gezackte und scharfe Zähne dienen. Seine Zunge ist eine wimmelnde Masse aus Eingeweiden und Blut. Kein Anzeichen jener, die der Amalgamation zum Opfer gefallen sind, ist mehr zu finden. Das Gesicht des Königs sitzt noch immer prominent über dem massigen Maul der Kreatur – eine spöttische Zurschaustellung der Gebrechlichkeit der Reiche einer Welt, die nicht bereit ist, Schrecken jenseits ihrer Vorstellungskraft zu begegnen.",
      "Die Amalgamation hat eine multidimensionale Form, die die Materielle Ebene und den Raum zwischen den Welten überbrückt. Ihre bloße Anwesenheit wirkt als Anker für den dimensionalen Riss, der immer mehr Kontamination nach Drakkenheim zieht."
    ],
    besonderheiten: [
      {
        name: "Epische Trefferpunkte",
        beschreibung: "Die Amalgamation hat 175 (10W20 + 70) Trefferpunkte plus weitere 175 (10W20 + 70) Trefferpunkte pro Spielercharakter in der Gruppe."
      },
      {
        name: "Verseuchende Präsenz",
        beschreibung: "Eine Kreatur, die ihren Zug in einem Umkreis von 36 m um die Amalgamation beginnt, ist folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 20. Misserfolg: Das Ziel erhält eine Kontaminationsstufe. Misserfolg oder Erfolg: 14 (4W6) nekrotischer Schaden."
      },
      {
        name: "Unveränderliche Form",
        beschreibung: "Die Amalgamation ist immun gegen jeden Zauber oder Effekt, der ihre Form verändern würde."
      },
      {
        name: "Bösartigkeit",
        beschreibung: "Die Amalgamation kann nicht gegen ihren Willen teleportiert werden oder auf eine andere Ebene reisen."
      },
      {
        name: "Verjüngung",
        beschreibung: "Wenn die Amalgamation in der Sterblichen Welt vernichtet wird, erscheint sie 1W10 Tage später mit all ihren Trefferpunkten erneut, es sei denn, ihre Wurzeln im Raum zwischen den Welten werden ebenfalls vernichtet."
      },
      {
        name: "Ultimative Korruption",
        beschreibung: "Nekrotischer Schaden, den die Amalgamation verursacht, ignoriert Resistenz und behandelt Immunität stattdessen als Resistenz."
      }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      {
        name: "Epische Aktionen",
        beschreibung: "Die Amalgamation handelt immer bei Initiative 20. In ihrem Zug kann sie ihre Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt sie dazu. Stattdessen führt die Amalgamation am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus."
      },
      {
        name: "Biss",
        beschreibung: "Nahkampf-Angriffswurf: +17, Reichweite 3 m. Treffer: 36 (4W12 + 10) Wuchtschaden. Wenn das Ziel eine Große oder kleinere Kreatur ist, die von der Amalgamation gepackt wird, endet der Gepackt-Zustand und das Ziel wird verschluckt. Solange es verschluckt ist, hat das Ziel die Zustände Geblendet und Festgehalten, genießt vollständige Deckung vor Effekten von außerhalb der Amalgamation und erleidet zu Beginn jedes Zuges der Amalgamation 42 (12W6) nekrotischen Schaden sowie eine Kontaminationsstufe. Wenn die Amalgamation in einem einzigen Zug 50 oder mehr Schaden von einer Kreatur in ihrem Inneren erleidet, muss sie am Ende dieses Zuges einen Konstitutions-Rettungswurf (SG 25) bestehen oder alle verschluckten Kreaturen herauswürgen, die in Feldern innerhalb von 3 m der Amalgamation landen und den Zustand Liegend erhalten. Wenn die Amalgamation stirbt, hat eine verschluckte Kreatur nicht mehr den Zustand Festgehalten und kann den Leichnam mit 4,5 m ihrer Bewegung verlassen, wobei sie den Zustand Liegend erhält."
      },
      {
        name: "Tentakel",
        beschreibung: "Nahkampf-Angriffswurf: +17, Reichweite 18 m. Treffer: 28 (4W8 + 10) Wuchtschaden, und das Ziel erhält den Zustand Gepackt (Entkommen SG 25). Solange es Gepackt ist, hat das Ziel den Zustand Festgehalten. Die Amalgamation hat zwölf Tentakel, von denen jeder eine Kreatur packen kann."
      },
      {
        name: "Schleudern",
        beschreibung: "Ein Großes oder kleineres Objekt, das die Amalgamation hält, oder eine von ihr gepackte Kreatur wird bis zu 18 m weit geworfen und landet mit dem Zustand Liegend. Wenn das Ziel auf eine feste Oberfläche trifft, erleidet es 35 (10W6) Wuchtschaden. Wenn das Ziel auf eine andere Kreatur geworfen wird, muss diese einen Geschicklichkeits-Rettungswurf (SG 25) bestehen oder denselben Schaden erleiden und den Zustand Liegend erhalten."
      },
      {
        name: "Geistzermalmendes Flüstern (Aufladen 5–6)",
        beschreibung: "Intelligenz-Rettungswurf: SG 25, eine Kreatur innerhalb von 36 m der Amalgamation. Misserfolg: Das Ziel wird wahnsinnig, bis es eine Lange Rast abschließt. Solange es wahnsinnig ist, kann das Ziel keine Aktionen ausführen, andere Kreaturen nicht verstehen, nicht lesen und nicht sprechen außer sinnlosem Kauderwelsch. Der Zauber Höhere Restauration oder Heilen beendet den Effekt vorzeitig. Misserfolg oder Erfolg: 70 (20W6) psychischer Schaden."
      },
      {
        name: "Erzwungene Mutation (1/Runde)",
        beschreibung: "Jede Kreatur innerhalb von 36 m der Amalgamation mit einer oder mehreren Kontaminationsstufen erleidet 10 (3W6) nekrotischen Schaden und erhält eine zufällig bestimmte Mutation."
      },
      {
        name: "Pfeifer am Tor (1/Runde)",
        beschreibung: "Ein Pyknischer Mäanderer erscheint in einem unbesetzten Feld innerhalb von 9 m der Amalgamation und handelt nach der Amalgamation bei Initiative 20 unter ihrer direkten Kontrolle. Die Amalgamation kann bis zu zehn Pyknische Mäanderer gleichzeitig unter ihrer Kontrolle haben."
      },
      {
        name: "Epische Resistenz",
        beschreibung: "Die Amalgamation wählt einen Zustand, Zauber oder anderen Effekt, der sie derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihr. Die Amalgamation kann diese Epische Aktion auch dann verwenden, wenn sie anderweitig keine Aktionen ausführen kann, ihre Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt ihre Spielwerte verändert."
      }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Anomolluske",
    art: "Monstrosität",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 8,
    xp: 3900,
    rk: 18,
    ruestungstyp: null,
    tp: 125,
    tp_wuerfel: "10W12+60",
    bewegung: { "Gehen": "6 m", "Klettern": "3 m" },
    attribute: { STR: 21, DEX: 6, CON: 23, INT: 5, WIS: 8, CHA: 6 },
    rettungswuerfe: { INT: 0, WEI: 2, CHA: 1 },
    fertigkeiten: { "Wahrnehmung": 2, "Heimlichkeit": 5 },
    schadensresistenzen: ["Zauberschaden", "Wucht, Stich und Hieb von magischen Angriffen"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt", "Wald"],
    bild: "drakkenheim/anomolluske.png",
    beschreibung: [
      "Eine kolossale Schnecke, so breit wie eine Stadtstraße, mit einem Gehäuse von der Größe eines kleinen Hauses gleitet langsam ins Blickfeld. Ihr Gehäuse hat einen kaleidoskopischen fraktalen Schimmer und projiziert Farbtöne unbekannter Farben, die sich in unbegreiflichen Mustern winden. Wenn sie sich bewegt, scheint ihr Gehäuse das Licht auf eine Weise zu brechen, die unsinnig oder falsch wirkt. Man muss die Augen anstrengen, um zu beobachten, wie sie sich heranwälzt. Ihr kugelförmiger Kopf endet in zwei langen Antennen, von denen jede ein kleines oktarinfarbenes Auge trägt. Schleimiger Schleim tropft von ihrem Fleisch, hinterlässt zischende Spuren und korrodiert alles, was er berührt.",
      "Wenn sich eine gewöhnliche Schnecke an einem Delirium-Splitter festsetzt, besteht eine geringe Chance, dass sie mit ihrem Gehäuse verschmilzt. Diese bescheidenen Kreaturen können zu massiven Ausmaßen anwachsen, wenn sie die Kontamination überleben. Mit der Zeit verschmelzen die Gehäuse mit weiterem Delirium und mutieren die Schnecken zu chaotischen Leitungen für erratische Magie – sogenannte Anomollusken.",
      "Ihre kristallinen Schutzgehäuse können auch arkane Energie absorbieren. Diese Anpassung stört die nahegelegene Magie und macht Zauber und magische Waffen unzuverlässig. Angriffe auf eine Anomollusk mit Magie sind gefährlich, da sie Wildmagie-Ausbrüche und arkane Anomalien verursachen – womit sich der Name der Kreatur erklärt. Vom Drang getrieben, kontaminierte Flora zu fressen, sammeln Anomollusken unwissentlich magische Energie an und sind daher besonders wertvoll für die Herstellung magischer Gegenstände.",
      "Anomollusken sind hauptsächlich in Gebieten wie dem Königinnenpark-Garten zu finden, wo die Flora reich mit Magie durchwirkt ist. Obwohl sie gelegentlich am Stadtrand gesehen werden, bevorzugen sie stark kontaminierte Gebiete wie die Umgebung des Kraterrandes. Diese Kreaturen absorbieren gelegentlich magische Energie aus der Umgebung und setzen sie in sporadischen Ausbrüchen chaotischer Magie wieder frei.",
      "In ihrem Kielwasser hinterlassen Anomollusken Spuren ätzenden Verfalls – Sekrete, die selbst für ihre Körper auf Dauer zu giftig sind. Mit träger Laune ziehen sie unheimliche Muster in Stein und Metall, die von oben betrachtet gelegentlich an arkane Runen erinnern. Ob es hinter diesen Markierungen eine Bedeutung oder einen Zweck gibt, kann niemand mit Sicherheit sagen."
    ],
    besonderheiten: [
      {
        name: "Schneckenspur",
        beschreibung: "Wenn die Anomollusk durch ein Feld bewegt, füllt sie es mit kontaminiertem Schleim, der 10 Minuten lang verbleibt. Eine Kreatur, die ihren Zug im Schleim beendet, ist mit Schleim bedeckt und folgendem Effekt ausgesetzt. Geschicklichkeits-Rettungswurf: SG 17. Misserfolg: 20 (8W4) Säureschaden, und das Ziel erhält den Zustand Verlangsamt. Jedes Mal, wenn die Kreatur ihren Zug mit dem Zustand Verlangsamt beendet, erhält sie eine Kontaminationsstufe. Eine Kreatur innerhalb von 1,5 m kann eine Aktion verwenden, um den Schleim abzuwischen und den Zustand Verlangsamt zu beenden."
      }
    ],
    aktionen: [
      {
        name: "Geifern",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 1,5 m. Treffer: 20 (8W4) Säureschaden."
      },
      {
        name: "Kriechen",
        beschreibung: "Die Anomollusk bewegt sich bis zu ihrer Bewegungsrate und kann dabei die Felder Großer oder kleinerer Kreaturen betreten. Jede Kreatur, deren Feld sie betritt, ist einmal folgendem Effekt ausgesetzt. Stärke-Rettungswurf: SG 17. Erfolg: Das Ziel wird 1,5 m von der Anomollusk weg in ein Feld seiner Wahl geschoben. Entscheidet es sich, sich nicht zu bewegen, erleidet es die Folgen eines Misserfolgs. Misserfolg: Das Ziel erhält den Zustand Liegend und ist der Schneckenspur ausgesetzt."
      }
    ],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Schalenreflexion",
        beschreibung: "Auslöser: Die Anomollusk erleidet Schaden durch einen Zauber oder einen magischen Angriff. Reaktion: Der Angreifer erleidet strahlenden Schaden in Höhe des auslösenden Schadens und löst eine Arkane Anomalie aus."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Arkangeist",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 6,
    xp: 2300,
    rk: 13,
    ruestungstyp: null,
    tp: 67,
    tp_wuerfel: "9W8+27",
    bewegung: { "Fliegen": "18 m" },
    attribute: { STR: 6, DEX: 16, CON: 16, INT: 17, WIS: 10, CHA: 15 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Säure", "Kälte", "Feuer", "Blitz", "Donner", "Wucht, Stich und Hieb von nicht-silbernen Angriffen"],
    schadensimmunitaeten: ["Nekrotisch", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend", "Festgehalten"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Die Sprachen, die er im Leben kannte"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/arkangeist.png",
    beschreibung: [
      "Zerfetzte violette Roben hängen von dem ätherischen Skelett, das lautlos durch die Luft gleitet. Der runenbedeckte Schädel skandiert bedrohlich arkane Worte, während aus den dunklen Höhlen seiner Augen oktarinfarbene Lichtpunkte aufflackern. Geisterhafte Tentakel flackern auf, und fünf Akademieringe klimpern, als er eine knöcherne Hand hebt und die arkanen Gesten seines ersten Zaubers vollführt.",
      "Ein Arkangeist ist der körperlose, korrumpierte, untote Geist eines arkanen Zauberwirkers, der in Drakkenheim einen gewaltsamen Tod erlitt. Delirium beeinflusst Menschen mit magischer Begabung auf unvorhersehbare Weise. In ihren letzten Zügen können jene mit mageborenem Blut in böse Untote verwandelt werden, die ewig an den Dunst gebunden sind und dabei einen Teil ihrer arkanen Macht behalten – verdreht in bösartige, schattenhafte Formen. Arkangeister hungern unerbittlich sowohl nach magischer Essenz als auch nach Lebensenergie. Sie sind besonders aggressiv gegenüber lebenden Zauberwirkern, greifen aber bereitwillig jeden an, der magische Gegenstände, Zauberkomponenten oder Delirium-Kristalle bei sich trägt.",
      "Diese Geister werden am häufigsten in der Nähe hochmagischer Orte gesichtet, wie dem Unergründlichen Turm, wurden jedoch auch anderswo in der Innenstadt und selten außerhalb der Stadtmauern beobachtet. Orte wie Tränkeläden und die ehemalige Residenz eines Magiers sind ebenfalls häufige Aufenthaltsorte eines Arkangeists.",
      "Wenn man sie in Ruhe lässt, studieren diese Geister bedächtig arkane Phänomene und ziehen oft paradoxe Schlüsse. Sie sammeln Schriftrollen und Zauberbücher und kritzeln weitschweifige Notizen. Gelegentlich mag ihre wahnsinnige Forschung eine echte Erkenntnis zutage fördern, doch ist es schwierig, Entdeckungen von Wahnvorstellungen in ihren zerfetzten Aufzeichnungen zu unterscheiden. Ein behutsamer Ansatz mag es einem erlauben, mit diesen Untoten zu sprechen. Ihre Sprache ist jedoch ein verworrenes Gemisch aus halb erinnerten Beschwörungsformeln, weitschweifigen Postulationen und inkohärentem Kauderwelsch. Sie werden schnell frustriert, wenn Gesprächspartner die Brillanz ihrer Arbeit nicht erfassen."
    ],
    besonderheiten: [
      {
        name: "Unkörperliche Bewegung",
        beschreibung: "Der Arkangeist kann sich durch andere Kreaturen und Objekte bewegen, als wären sie schwieriges Gelände. Er erleidet 5 (1W10) Wuchtschaden, wenn er seinen Zug in einem Objekt beendet."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Arkangeist führt drei Kometensplitter-Angriffe aus."
      },
      {
        name: "Kometensplitter",
        beschreibung: "Nah- oder Fernkampf-Angriffswurf: +6, Reichweite 1,5 m oder Fernkampfreichweite 36 m. Treffer: 21 (4W8 + 3) Wuchtschaden, und das Ziel wird 3 m vom Arkangeist weggestoßen."
      },
      {
        name: "Alptraumuster (Aufladen 5–6)",
        beschreibung: "Intelligenz-Rettungswurf: SG 14, jede Kreatur in einem 9 m großen Würfel, zentriert auf einen Punkt im Sichtfeld des Arkangeists. Misserfolg: Das Ziel erhält den Zustand Geblendet (Rettungswurf beendet den Effekt). Solange es geblendet ist, hat das Ziel den Zustand Bewegungsunfähig. Der Effekt endet für das Ziel, wenn es Schaden erleidet oder eine andere Kreatur eine Aktion verwendet, um es aus dem Alptraum zu reißen. Wenn der Effekt endet, erleidet das Ziel 14 (4W6) psychischen Schaden."
      },
      {
        name: "Zaubersprüche",
        beschreibung: "Der Arkangeist wirkt einen der folgenden Zauber, benötigt dafür keine Materialkomponenten und verwendet Intelligenz als Zauberfähigkeit (Zauber-SG 14). Nach Belieben: Magiehände (unsichtbar), Kleine Illusion."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Aufgedunsener Bienenstock",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral",
    cr: 4,
    xp: 1100,
    rk: 15,
    ruestungstyp: null,
    tp: 82,
    tp_wuerfel: "11W8+33",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 11, DEX: 16, CON: 16, INT: 11, WIS: 12, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Verängstigt"],
    sinne: ["Zittersinn 18 m"],
    passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt", "Gewässer"],
    bild: "drakkenheim/aufgedunsener_bienenstock.png",
    beschreibung: [
      "Triefend vor süßlich riechendem Eiter und Schleim schlurft die Kreatur auf spindeldürren Gliedmaßen wie ein schlaksiger Affe umher. Sie hat lange, knorrige Finger und einen ausgemergelten, fadenförmig dünnen Rahmen. Wo sich ein Kopf befinden sollte, befindet sich stattdessen eine Masse pulsierenden Fleisches, bedeckt mit gähnenden Poren, die sich an ihrem Hals hinunter und über ihre Schultern erstrecken. Ihr Körper wimmelt von Tausenden von Insekten, die unter ihrer Haut krabbeln und um ihren Kopf schwirren. Sie graben sich durch offene Wunden und Geschwüre und summen durch ihre Poren. Es riecht schwach nach Honig und Schweiß, und gurgelt schmerzhaft inmitten des Chors aus Summen und Klicken der Insekten, als wäre sich das Ding schmerzhaft seines elenden Zustands bewusst.",
      "Der Aufgedunsene Bienenstock ist ein Produkt der Kontamination, die Menschen scheinbar in wandelnde Bienenstöcke verwandelt hat. Einige vermuten, dass die Honigfarmen am Stadtrand die Hauptquelle dieser seltsamen Mutationen waren und dazu führten, dass die Imker und ihre Stöcke sich zu grotesken und gequälten Kreaturen vereinten. Ihr Oberkörper und ihr Kopf sind nun eine wimmelnde Masse offener Poren wie ein Bienenstock, mit Insekten, die ein- und ausschwirren. Sie trampeln durch die Ruinen auf der Suche nach Nistplätzen. Viele Aufgedunsene Bienenstöcke agieren allein, aber manchmal beginnt ein einziges Volk mehrere Stöcke zu besiedeln und ein schauriges Netzwerk zu bilden.",
      "Der Aufgedunsene Bienenstock neigt dazu, sich in dunklen Ecken von Ruinen zu verstecken und sucht die feuchtesten und wärmsten Orte der Stadt. Viele Stöcke wurden entlang des Drann-Flusses in der Innenstadt gefunden, eine große Gruppe lebt unter der Championbrücke, und noch mehr in den Abwasserkanälen, dem Königinnenpark-Garten und vereinzelt in den Wäldern nördlich von Drakkenheim. Beim Durchqueren dunkler und feuchter Bereiche sollte man auf zunehmende Insektenaktivität und das Summen achten.",
      "Ein Aufgedunsener Bienenstock kann nicht sprechen und handelt mehr nach den Launen seiner Bewohner als nach eigenem Willen. Sein Verstand ist nun ein zerbrochenes Ding, das mit dem Schwarmgeist einer Insektenkolonie verbunden ist – doch darin kämpft ein gequälter Mensch um Bewusstsein. Es ist bekannt, dass manche Aufgedunsene Bienenstöcke auf freundliche Worte, Erinnerungsstücke aus ihrer Vergangenheit oder vertraute Melodien reagieren. Solche Momente flüchtiger Bewusstheit können jedoch jäh enden, wenn der Schwarmgeist die fremde Psyche bemerkt und in einen rasenden Ausbruch verfällt."
    ],
    besonderheiten: [
      {
        name: "Insektenschwarm",
        beschreibung: "Der Aufgedunsene Bienenstock erzeugt einen Ausstrahlungsbereich von 3 m mit summenden Insekten. Eine Kreatur, die ihren Zug in dem Ausstrahlungsbereich beginnt, erleidet 10 (3W6) nekrotischen Schaden."
      },
      {
        name: "Stockzerfall",
        beschreibung: "Wenn der Aufgedunsene Bienenstock stirbt, erschafft er sofort einen Schwarm kontaminierter Insekten in seinem Feld."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Aufgedunsene Bienenstock führt zwei Angriffe aus."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m. Treffer: 12 (2W8 + 3) Hiebschaden."
      },
      {
        name: "Schwarm herbeirufen (Aufladen 5–6)",
        beschreibung: "Der Aufgedunsene Bienenstock erschafft einen Schwarm kontaminierter Insekten, der in einem unbesetzten Feld innerhalb von 1,5 m erscheint. Der Schwarm handelt unmittelbar nach dem Aufgedunsenen Bienenstock."
      }
    ],
    bonusaktionen: [
      {
        name: "Ablenkender Schwarm",
        beschreibung: "Der Aufgedunsene Bienenstock lässt seinen Insektenschwarm einer Kreatur innerhalb von 1,5 m ins Gesicht fliegen. Das Ziel kann bis zum Ende des Zuges des Aufgedunsenen Bienenstocks keine Reaktionen ausführen."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Aufgedunsener Elender",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 1,
    xp: 200,
    rk: 13,
    ruestungstyp: null,
    tp: 33,
    tp_wuerfel: "6W8+6",
    bewegung: { "Gehen": "6 m", "Schwimmen": "6 m" },
    attribute: { STR: 17, DEX: 7, CON: 13, INT: 7, WIS: 13, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Gewässer"],
    bild: "drakkenheim/aufgedunsener_elender.png",
    beschreibung: [
      "Ein gurgelndes Stöhnen dringt aus dem Dunkel, während die schlurfenden Schritte einer aufgedunsenen Gestalt näherkommen. Ihr wellenförmiges, durchhängendes Fleisch ist nass und triefend. Das runde Gesicht und die feuchte Haut sind übersät mit Pusteln, Blasen und sickernden Wunden. Nasser, säurehaltiger Speichel tropft vom Kinn und hinterlässt Spuren verbrannten Fleisches. Ein Arm ist zu einer Masse wimmelnder, glitschiger Tentakel geworden. Wenn sich der Mund öffnet, baut sich ein tiefes, gurgelndes Geräusch auf.",
      "Menschen, die in kontaminiertem Wasser untergetaucht wurden, werden häufig zu Aufgedunsenen Elenden. Diese halb ertrunkenen Unglücklichen sind in der Nähe von Gewässern in der ganzen Stadt anzutreffen – in den Kanälen, den Abwässern oder am Drann-Fluss. Sie haben so viel kontaminiertes Wasser in sich aufgenommen, dass es gärt und sich mit ihrer Magensäure vermischt und eine korrosive Galle erzeugt, die sie auf ihre Feinde schleudern. Ein Aufgedunsener Elender verlässt das Wasser meist nur für wenige Stunden, bevor er eine neue Schlammpfütze oder einen kontaminierten Tümpel aufsucht, um sich darin auszuruhen."
    ],
    besonderheiten: [
      {
        name: "Amphibisch",
        beschreibung: "Der Aufgedunsene Elende kann sowohl Luft als auch Wasser atmen."
      }
    ],
    aktionen: [
      {
        name: "Schlag",
        beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m. Treffer: 10 (2W6 + 3) Wuchtschaden."
      },
      {
        name: "Säurespray (Aufladen 5–6)",
        beschreibung: "Geschicklichkeits-Rettungswurf: SG 11 für jede Kreatur in einem 4,5-Meter-Kegel. Misserfolg: 5 (2W4) Säureschaden, und das Ziel erhält den Zustand Brennend (2W4 Säureschaden)."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Ausgewachsener Dunstfalter",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: null,
    tp: 91,
    tp_wuerfel: "14W8+28",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m" },
    attribute: { STR: 8, DEX: 20, CON: 15, INT: 3, WIS: 12, CHA: 7 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/ausgewachsener_dunstfalter.png",
    beschreibung: [
      "Ausgewachsene Dunstfalter sind große Motten mit schillernd gemusterten Flügeln in Lila und Grün. Hypnotische Muster, die schreienden Menschengesichtern ähneln, zieren die Flügelmembranen. Ihr groteskes fledermausartiges Gesicht trägt eine gebogene Antenne mit einer biolumineszenten Laterne, und Delerium-Staub driftet um sie herum, während sie flattern.",
      "Ausgewachsene Dunstfalter konsumieren keine Delerium-Kristalle mehr. Stattdessen suchen sie nach Gefährten und psychischen Kräften. Sie hypnotisieren ihre Opfer und trinken deren Persönlichkeiten und Erinnerungen – die Erinnerungen und Albträume der Getöteten erscheinen auf den Flügeln und Kokons der nächsten Generation.",
      "Die Motten beschützen die Eier, Raupen und Kokons ihrer Art. Sie setzen ihren Hypnotischen Flatterflug und Delerium-Staub ein, um Ziele in einen nahezu katatonischen Zustand zu versetzen, bevor sie sich niederlassen und die psychische Energie mit ihrem Saugrüssel trinken."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Saugrüssel", beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 1,5 m. Treffer: 14 (4W6) Psychischer Schaden. Wenn das Ziel den Zustand Kampfunfähig hat, wird sein Intelligenzwert um 1W4 reduziert, bis es eine Kurze oder Lange Rast beendet. Das Ziel stirbt, wenn dieser Effekt seinen Intelligenzwert auf 0 reduziert." },
      { name: "Delerium-Staub (Aufladen 5–6)", beschreibung: "Weisheits-Rettungswurf: SG 13 für jede Kreatur in einer 9-Meter-Ausstrahlung des Ausgewachsenen Dunstfalters. Fehlschlag: 14 (4W6) Strahlungsschaden, und das Ziel erhält den Zustand Benebelt (Rettungswurf zum Beenden)." }
    ],
    bonusaktionen: [
      { name: "Hypnotisches Flattern", beschreibung: "Intelligenz-Rettungswurf: SG 13 für jede Kreatur in einer 18-Meter-Ausstrahlung des Ausgewachsenen Dunstfalters, die ihn sehen kann (Ausgewachsene Dunstfalter bestehen automatisch). Fehlschlag: Das Ziel erhält den Zustand Verlangsamt (Rettungswurf zum Beenden). Ist das Ziel bereits Verlangsamt, erhält es stattdessen den Zustand Bewegungsunfähig (Rettungswurf zum Beenden). Ist das Ziel bereits Bewegungsunfähig, erhält es zusätzlich den Zustand Kampfunfähig (beide Zustände enden mit einem erfolgreichen Rettungswurf)." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Belebter Delerium-Schlamm",
    art: "Elementar",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 14,
    ruestungstyp: null,
    tp: 114,
    tp_wuerfel: "12W10+48",
    bewegung: { "Gehen": "9 m", "Schwimmen": "27 m" },
    attribute: { STR: 18, DEX: 14, CON: 18, INT: 5, WIS: 10, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Nekrotisch", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Erschöpfung", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend", "Festgehalten", "Bewusstlos"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Gewässer", "Ruinen", "Unterirdisch"],
    bild: "drakkenheim/belebter_delerium_schlamm.png",
    beschreibung: [
      "Ein Hügel aus irisierend gestreiftem schwarzem Schlamm stapft durch die Ruinen und platscht bei jedem schwerfälligen Schritt. Der Schlamm formt sich zu einer turmhohen, beinahe menschenähnlichen Gestalt mit schleimigen Armen und dicken, wackligen Beinen. Ein Kopf blubbert oben auf seinem viskosen Körper und offenbart einen triefenden Rachen und zwei Höhlungen als Augen. Dennoch trägt er einen merkwürdig fröhlichen Ausdruck, als würde er Freude an seiner grotesken Existenz finden. Der Hügel stößt ein tiefes Grollen aus, voller sinisterer Wonne, und poltert auf einen zu, unbeeindruckt von den Trümmern in seinem Weg.",
      "Einige glauben fälschlicherweise, dass die arkane Kontamination nur organische Kreaturen befällt, doch ihr verformender Einfluss kann das Gewebe der Realität selbst berühren. Delirium vergiftet die Erde, beschmutzt das Wasser, korrumpiert den Wind und durchdringt das Feuer – und erschafft dabei Kontaminierte Elementare. Diese kontaminierten Wasserelementare sind häufig in den Zisternen, Abwasserkanälen und anderen aquatischen Orten Drakkenheims anzutreffen."
    ],
    besonderheiten: [
      {
        name: "Unsichtbar im Schlamm",
        beschreibung: "Der Elementar hat den Zustand Unsichtbar, solange er vollständig in Delerium-Schlamm eingetaucht ist."
      },
      {
        name: "Schlammgestalt",
        beschreibung: "Der Elementar kann den Raum einer feindseligen Kreatur betreten und dort verweilen. Er kann sich durch einen Spalt bewegen, der nur 2,5 cm breit ist, ohne sich zu quetschen."
      }
    ],
    aktionen: [
      {
        name: "Kontaminierte Berührung",
        beschreibung: "Nahkampf-Angriffswurf: +7, Reichweite 1,5 m. Treffer: 10 (3W6) nekrotischer Schaden. Konstitutions-Rettungswurf: SG 15. Misserfolg: Das Ziel erhält eine Kontaminationsstufe."
      },
      {
        name: "Verschlingen",
        beschreibung: "Stärke-Rettungswurf: SG 15, jede Große oder kleinere Kreatur im Raum des Elementars. Erfolg: Das Ziel wird aus dem Raum des Elementars gestoßen. Misserfolg: Das Ziel erhält den Zustand Gepackt (Entkommen SG 15). Solange es Gepackt ist, hat das Ziel den Zustand Festgehalten. Der Elementar kann gleichzeitig eine Große Kreatur oder zwei Mittelgroße oder kleinere Kreaturen packen. Zu Beginn jedes Zuges des Elementars erleidet das Ziel 28 (8W6) nekrotischen Schaden und ist folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 15. Misserfolg: Das Ziel erhält eine Kontaminationsstufe. Eine Kreatur innerhalb von 1,5 m des Elementars kann eine Aktion verwenden, um eine Kreatur oder ein Objekt mit einem erfolgreichen Stärke-Athletik-Wurf (SG 15) herauszuziehen."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Berstgaul",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: null,
    tp: 93,
    tp_wuerfel: "11W10+33",
    bewegung: { "Gehen": "18 m", "Klettern": "9 m" },
    attribute: { STR: 15, DEX: 18, CON: 16, INT: 3, WIS: 12, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 10 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Blindsicht 36 m"],
    passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/berstgaul.png",
    beschreibung: [
      "Diese Kreatur, die wie ein totes, auf dem Rücken liegendes Pferd aussieht, zuckt convulsivisch, und ihr Bauch reißt plötzlich auf, wobei Eingeweide und Organe freigelegt werden. Lange, spinnenartige Beine schießen gewaltsam aus ihrem Rumpf hervor, während sich der Bauch zu einem Rachen öffnet, der mit scharfen, zackigen Zähnen gefüllt ist – gebildet aus dem gespreizten Brustkorb des Tieres. Die Pferdbeine hängen schlaff in der Luft, während die Kreatur mit schwindelerregender Geschwindigkeit auf einen zuschurrt, wobei Eingeweide wie eine widerliche Zunge um den Rachen flattern. Der Pferdekopf baumelt leblos herab, doch sein Maul schnappt noch immer und sabbert Säuregalle.",
      "Viele tapfere Krieger sind auf treuen Rössern in Drakkenheim eingeritten, ohne zu bemerken, dass Schutt und Trümmer die Straßen zu einem ungeeigneten Terrain für Pferde machen. Oft müssen diese armen Tiere kurz nach dem Einzug in die Ruinen zurückgelassen werden, verletzt vom unstabilen Untergrund. Als leichte Beute für andere Raubtiere werden sie häufig tragisch niedergestreckt. Wenn ihre Leichname zurückbleiben, wuchert eine parasitenähnliche Mutation in ihnen und lässt ihre Haut mit spinnenartigen Gliedmaßen, Zangen und Rachen aufbrechen.",
      "Indem sie sich als bloße Kadaver auf den dunklen und nebligen Straßen der Ruinenstadt tarnen, kann man einen Berstgaul kaum von einem toten Pferd unterscheiden. Mit ihren Spinnenbeinen können sie mühelos an Wänden und Decken entlangkrabbeln und machen dabei kaum ein Geräusch. Sie bewegen sich mit blitzschneller Geschwindigkeit und können in Sekundenschnelle eine Stadtstraße durchqueren. Diese erschreckende Geschwindigkeit, die Leichtigkeit beim Durchqueren des Geländes und die Fähigkeit zur Tarnung machen sie zu einer tödlichen Bedrohung für Abenteurer in der Stadt.",
      "Einer der erschreckendsten aufgezeichneten Begegnungen mit Berstgaulen in Drakkenheim stammte aus einem frühen Bericht von Kapuzenlichterspähern, die alte Ställe südlich des Championentors am Stadtrand untersuchten. Sie berichteten, „Haufen toter Pferde zu finden, die von großen, mutierten Fliegen geschwärmt wurden, die das Fleisch fraßen“. Der Bericht schildert weiter, wie mehrere der Pferdeleichname plötzlich mit „insektenartigen Beinen und einem schrecklichen Rachen, gebildet aus dem gespreizten Brustkorb der toten Tiere“ aufgeplatzt seien. Die sofortige Attacke riss fast einen gesamten Trupp von acht Kapuzenlichterspähern in Sekundenschnelle in Fetzen, während die übrigen Laternen aus der Stadt flohen.",
      "Einer der Überlebenden, Sten Livingston d.Ä., führte tapfer die folgende Expedition an. Auf dem Weg in die Stadt lag ein toter und aufgedunsener Pferdekadaver am Straßenrand. Livingston hielt seine Truppen an und trat den Kadaver mit gezogenen Waffen, um zu prüfen, ob er zum Leben erwachen würde. Der Kadaver blieb reglos. Seitdem hat sich dieser Brauch unter den Kapuzenlichtern und sogar in neue Abenteuergruppen verbreitet – auf dem Weg nach Drakkenheim das Pferd zu treten. Viele halten es für ein Glückszeichen, ohne die erschreckende Geschichte dahinter zu kennen."
    ],
    besonderheiten: [
      {
        name: "Spinnenkletter",
        beschreibung: "Der Berstgaul kann schwierige Oberflächen erklimmen, einschließlich kopfüber an Decken, ohne einen Fähigkeitswurf ablegen zu müssen."
      },
      {
        name: "Falsche Erscheinung",
        beschreibung: "Solange der Berstgaul reglos verharrt, ist er von einem gewöhnlichen Tierkadaver nicht zu unterscheiden."
      },
      {
        name: "Plötzlicher Tod",
        beschreibung: "Kreaturen, die in einem Kampf noch keinen Zug gemacht haben, sind gegen Angriffe des Berstgauls Hilflos."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Berstgaul führt zwei Angriffe aus und kann dabei Aufspießende Gliedmaßen und Korrosiven Schleim in beliebiger Kombination einsetzen."
      },
      {
        name: "Aufspießende Gliedmaßen",
        beschreibung: "Nahkampf-Angriffswurf: +7, Reichweite 3 m. Treffer: 18 (4W6 + 4) Stichschaden, und das Ziel erleidet den Zustand Blutend (2W6). Solange es auf diese Weise blutet, hat das Ziel außerdem den Zustand Verlangsamt."
      },
      {
        name: "Korrosiver Schleim",
        beschreibung: "Fernkampf-Angriffswurf: +7, Reichweite 9 m/18 m. Treffer: 14 (4W4 + 4) Säureschaden, und das Ziel erleidet den Zustand Brennend (2W4 Säure). Solange das Ziel auf diese Weise brennt, wird seine RK zu 10 + seinem Geschicklichkeitsmodifikator."
      }
    ],
    bonusaktionen: [
      {
        name: "Räuberische List",
        beschreibung: "Der Berstgaul verwendet die Aktion Rasen, Ausweichen oder Verstecken."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Blutegel",
    art: "Monstrosität",
    unterart: null,
    groesse: "Winzig",
    gesinnung: "Gesinnungslos",
    cr: 1,
    xp: 200,
    rk: 10,
    ruestungstyp: null,
    tp: 20,
    tp_wuerfel: "8W4",
    bewegung: { "Gehen": "6 m", "Klettern": "6 m", "Schwimmen": "9 m" },
    attribute: { STR: 13, DEX: 10, CON: 10, INT: 10, WIS: 12, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Zittersinn 18 m"],
    passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Gewässer", "Stadt"],
    bild: "drakkenheim/blutegel.png",
    beschreibung: [
      "Obwohl die Praxis des Aderlasses längst als Heilmethode widerlegt ist, schätzen viele Apotheker den Wert von Bluttransfusionen bei chirurgischen Eingriffen. Die Langzeitlagerung von Blut stellt dabei jedoch ein Problem dar. Drakkenheimer Apotheker haben dieses Problem gelöst, indem sie gewöhnliche Egel mit okkulter Wissenschaft modifizierten und die Kreaturen in lebende Blutbeutel verwandelten.",
      "Obwohl diese Blutegel von Natur aus zumeist harmlos sind, können sie von einem entschlossenen Apotheker zu gewaltsamen Zwecken eingesetzt werden. Im Kampf schickt ein Apotheker die Egel gegen seine Feinde und ruft sie anschließend zurück, um sich mit dem Blut seiner Gegner zu heilen. Die widerlichen Tiere eignen sich außerdem hervorragend zum Sammeln von Proben von wenig kooperativen Versuchspersonen."
    ],
    besonderheiten: [
      { name: "Aquatische Tarnung", beschreibung: "Der Blutegel hat Vorteil auf Geschicklichkeit (Heimlichkeit)-Würfe, die darauf abzielen, sich in aquatischem Gelände zu verbergen." },
      { name: "Blutbeutel", beschreibung: "Der Blutegel hat drei Blutbeutel in seinem Körper. Wenn er angetroffen wird, würfele 1W3, um zu bestimmen, wie viele Blutbeutel mit Blut gefüllt sind. Die übrigen sind leer." }
    ],
    aktionen: [
      { name: "Anheften", beschreibung: "Nahkampfangriff: +3 auf den Trefferwurf, Reichweite 0 m (Berührung). Treffer: Der Egel heftet sich an das Ziel. Solange er angeheftet ist, greift er nicht an und bewegt sich mit dem Ziel, ohne eigene Bewegungsrate zu verbrauchen. Der Egel kann sich mit 1,5 m Bewegung selbst lösen und löst sich sofort, wenn seine Blutbeutel gefüllt sind oder das Ziel stirbt. Eine Kreatur innerhalb von 1,5 m kann als Aktion einen Weisheit (Heilkunde)-Wurf (SG 13) versuchen, um den Egel zu entfernen. Misserfolg: Der Egel löst sich zwar ab, aber das Ziel erhält die Blutend-Bedingung (2W4). Misserfolg um 5 oder mehr: Der Egel bleibt angeheftet, und das Ziel erleidet 8 (2W4+3) Stichschaden." }
    ],
    bonusaktionen: [
      { name: "Blut aussaugen", beschreibung: "Der Egel kann diese Bonusaktion nur verwenden, wenn er an einer Kreatur angeheftet ist. Die angeheftete Kreatur verliert 10 (3W6) Trefferpunkte durch Blutverlust, und der Blutegel füllt einen seiner leeren Blutbeutel mit einem Teil des Blutes des Ziels." },
      { name: "Bluttransfusion", beschreibung: "Der Egel kann diese Bonusaktion nur verwenden, wenn er an einer Kreatur angeheftet ist und mindestens einen gefüllten Blutbeutel hat. Die angeheftete Kreatur regeneriert 10 (3W6) Trefferpunkte, und der Egel leert einen seiner gefüllten Blutbeutel." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Bluthexe",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 8,
    xp: 3900,
    rk: 15,
    ruestungstyp: "Magierüstung",
    tp: 136,
    tp_wuerfel: "16W8+64",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 16, DEX: 14, CON: 18, INT: 12, WIS: 14, CHA: 19 },
    rettungswuerfe: { WEI: 5, CHA: 7 },
    fertigkeiten: { "Arkana": 4, "Wahrnehmung": 5, "Täuschung": 7 },
    schadensresistenzen: ["Kälte", "Nekrotisch", "Gift", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Dunkelsicht 36 m (auch in magischer Dunkelheit)"],
    passiveWahrnehmung: 15,
    sprachen: ["Gemeinsprache sowie eine weitere Sprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/bluthexe.png",
    beschreibung: [
      "Wenn ein Magiegeborener von einem Vampir gebissen wird, erzeugen die magischen Energien in seinem nun vergifteten Blut eine Bluthexe – ein Wesen aus vampirischem Blutdurst und arkanem Können. Diese Hexen dienen Vampiradligen als rechte Hand und als Generäle und Leutnants in Vampirarmeen. Sie sind gerissene und manipulative Kreaturen, die ihre Opfer mit Täuschung und Gerissenheit anlocken.",
      "Die Magie der Bluthexen ist gestutzt und verdreht; sie können Magie nutzen, um Lebensessenz aus ihren Opfern zu saugen und ein unnatürliches Leben zu führen. Je mehr eine Bluthexe sich ernährt, desto mehr mutiert die vampirische Essenz mit ihrem arkanen Blut. Viele Bluthexen entwickeln dabei groteske Mutationen wie blutrote leuchtende Augen und tierische Schnauzen mit Fangzähnen.",
      "Bluthexen stehen als auserwählte Hofmagier zu Vampirherren. Ihre Beherrschung des Untoten und ihre Fähigkeit, Opfer in vampirische Hörige zu verwandeln, macht sie zu furchterregenden Kreaturen."
    ],
    besonderheiten: [
      {
        name: "Regeneration",
        beschreibung: "Die Vampirin regeneriert zu Beginn jedes ihrer Züge 10 Trefferpunkte, sofern sie mindestens 1 Trefferpunkt hat und sich nicht im Sonnenlicht oder in fließendem Wasser befindet. Erleidet sie Strahlungsschaden oder Schaden durch Weihwasser, setzt diese Regeneration bis zum Beginn ihres nächsten Zuges aus."
      },
      {
        name: "Spinnenklettern",
        beschreibung: "Die Vampirin kann schwierige Oberflächen erklimmen, einschließlich kopfüber an Decken, ohne einen Fertigkeitswurf ablegen zu müssen."
      },
      {
        name: "Vampirschwächen",
        beschreibung: "Die Vampirin hat folgende Schwächen: Fließendes Wasser – Sie erleidet 20 Säureschaden, wenn sie ihren Zug in fließendem Wasser endet. Sonnenlicht – Sie hat Nachteil auf Angriffswürfe und Weisheitswürfe (Wahrnehmung), während sie im Sonnenlicht steht, und erleidet 20 Strahlungsschaden, wenn sie ihren Zug im Sonnenlicht endet."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Die Vampirin führt zwei Angriffe durch und setzt Festmahl ein, sofern verfügbar. Sie kann einen dieser Angriffe durch Zauberei ersetzen."
      },
      {
        name: "Blutaussaugung",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +7, Reichweite 1,5 m oder 18 m, ein Ziel. Treffer: 21 (5W6+4) Nekrotischer Schaden. Die Vampirin regeneriert Trefferpunkte in Höhe des verursachten Schadens. Das Ziel erhält den Zustand Geschwächt (Konstitutions-Rettungswurf SG 15, Rettungswurf zum Beenden)."
      },
      {
        name: "Festmahl (Aufladen 5–6)",
        beschreibung: "Weisheits-Rettungswurf: SG 15 für jede Kreatur in einer 9-Meter-Ausstrahlung, die von der Vampirin ausgeht. Misserfolg: 14 (4W6) Nekrotischer Schaden plus 14 (4W6) Psychischer Schaden. Erfolg: Nur halber Schaden. Misserfolg oder Erfolg: Die Vampirin regeneriert Trefferpunkte in Höhe des verursachten nekrotischen Schadens."
      },
      {
        name: "Zauberei",
        beschreibung: "Die Vampirin wirkt einen ihrer vorbereiteten Zauber. Zauberwirk-Eigenschaft: Charisma (SG 15, +7 zum Treffen). Beliebig: Magierüstung (bereits berücksichtigt). 2/Tag: Dunkelheit, Furcht, Person festhalten, Wunden verursachen, Schwächungsstrahl, Anregung. 1/Tag: Fluch auferlegen, Person beherrschen, Hypnotisches Muster, Vampirberührung."
      }
    ],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Arkane Verneinung",
        beschreibung: "Auslöser: Eine Kreatur, die die Vampirin sehen kann, innerhalb von 18 m wirkt einen Zauber der Stufe 3 oder niedriger. Reaktion – Konstitutions-Rettungswurf: SG 15 für den Zauberwirker. Misserfolg: Der Zauber misslingt, verbraucht jedoch keine Ressourcen."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Chemystral",
    art: "Schlick",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 12,
    xp: 8400,
    rk: 15,
    ruestungstyp: null,
    tp: 168,
    tp_wuerfel: "16W10+80",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Fliegen": "9 m" },
    attribute: { STR: 18, DEX: 7, CON: 20, INT: 1, WIS: 6, CHA: 2 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Säure", "Feuer", "Kraft", "Blitz", "Nekrotisch", "Gift", "Psychisch", "Strahlend"],
    schadensimmunitaeten: ["Wucht", "Stich", "Hieb"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Taub", "Erschöpfung", "Verängstigt", "Liegend"],
    sinne: ["Blindsicht 18 m"],
    passiveWahrnehmung: 8,
    sprachen: [],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/chemystral.png",
    beschreibung: [
      "Ein Chemystral ist eine schimmernde, formlose Masse aus konzentriertem Delirium, das mit chemischen Substanzen aus verlassenen Laboratorien verschmolzen ist. Diese rätselhaften Kreaturen treiben durch die Trümmer Drakkenheims und absorbieren alles, was ihnen begegnet – Magie, organisches Material und chemische Verbindungen gleichermaßen.",
      "Der Körper eines Chemystrals wechselt ständig seine Farbe und Konsistenz, ein Zeichen der verschiedenen Energiequellen, die er in sich trägt. Versuche, einen Chemystral mit physischer Gewalt zu bekämpfen, sind meist sinnlos – Klingen und Pfeile gleiten durch seine formlose Masse hindurch. Einzig extreme Kälte kann seinen flüssigen Körper kurzzeitig festigen und ihn verwundbar machen."
    ],
    besonderheiten: [
      { name: "Amorpher Körper", beschreibung: "Der Chemystral kann sich durch eine Öffnung quetschen, die so schmal wie 1 Zentimeter ist, ohne dabei Schaden zu nehmen." },
      { name: "Kälte-Anfälligkeit", beschreibung: "Wenn der Chemystral Kälteschaden erleidet, muss er einen Konstitutionsrettungswurf (SG 15) bestehen oder er wird bis zum Ende seines nächsten Zuges gefroren (Gefroren). Solange er gefroren ist, verliert er seine Schadensimmunitäten gegen Wucht-, Stich- und Hiebangriffe und erhält Verwundbarkeit gegenüber Donnerschaden." },
      { name: "Elementarreaktion", beschreibung: "Wenn der Chemystral Schaden durch einen Typ erleidet, gegen den er resistent ist, absorbiert er diese Energie. Bis zum Ende seines nächsten Zuges verursacht sein Chemischer Sprüh-Angriff zusätzlich 1W6 Schaden dieses absorbierten Typs." },
      { name: "Regeneration", beschreibung: "Der Chemystral regeneriert zu Beginn jedes seiner Züge 25 Trefferpunkte, sofern er mindestens 1 Trefferpunkt hat. Erleidet er Kälte- oder Donnerschaden, setzt diese Regeneration bis zum Beginn seines nächsten Zuges aus." },
      { name: "Schallneutralisierung", beschreibung: "Der Chemystral erzeugt ein Feld aus chemischen Dämpfen, das Schallwellen in einem Radius von 9 Metern um ihn herum absorbiert. Kreaturen in diesem Bereich haben Nachteil auf Konstitutionsrettungswürfe gegen Donnerzauber und -effekte." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Chemystral führt zwei Chemische Sprüh-Angriffe aus. Er kann einen dieser Angriffe durch Verschlingen ersetzen." },
      { name: "Chemischer Sprüh", beschreibung: "Fernkampfangriff: +9 auf den Trefferwurf, Reichweite 9 m / 36 m. Treffer: 35 (10W6) Säureschaden." },
      { name: "Verschlingen", beschreibung: "Nahkampfangriff: +9 auf den Trefferwurf, Reichweite 1,5 m. Das Ziel muss einen Geschicklichkeitsrettungswurf (SG 17) bestehen oder wird vom Chemystral umschlossen (Festgehalten, Entkommen SG 17) und erleidet sofort 35 (10W6) Säureschaden. Solange das Ziel festgehalten wird, erleidet es zu Beginn jedes seiner Züge weitere 35 (10W6) Säureschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Chitinöser Elender",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 4,
    xp: 1100,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 75,
    tp_wuerfel: "10W8+30",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 19, DEX: 10, CON: 17, INT: 8, WIS: 13, CHA: 7 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/chitinoser_elender.png",
    beschreibung: [
      "Körper und Gesicht dieses mutierten Elenden sind mit dicken, knotigen Knochenplatten bedeckt, die sich gewaltsam durch das Fleisch nach außen gebohrt haben. Die freiliegenden Rippen der Brust sind zu einer einzigen Platte zusammengewachsen und verleihen dem Torso ein rüstungsartiges Aussehen. Unterhalb der Ellbogen hängen Muskel und Sehnen schlaff von den hervorstehenden Knochen herab, die zu langen, gezackten Knochenblättern mit verkrusteten Blutspuren umgeformt wurden.",
      "Diese Elenden haben schwere Mutationen ihrer Knochenstruktur erlitten, die sie mit einem gepanzerten Exoskelett bedecken. Kaum durch Angriffe zu beeindrucken, stürmen Chitinöse Elende in den Kampf und schlagen in einem Anfall wilder Ferocität mit ihren gezackten Knochenblättern auf ihre Beute ein. Sie drängen sich stets zwischen andere Elende und deren Feinde, fast als würden sie ihre Verbündeten verteidigen, und lassen Gegner, die ihnen gegenüberstehen, nicht entkommen."
    ],
    besonderheiten: [
      {
        name: "Kein Entkommen",
        beschreibung: "Wenn der Chitinöse Elende eine Kreatur mit einem Gelegenheitsangriff trifft, wird die Bewegungsrate dieser Kreatur bis zum Ende ihres Zuges auf 0 reduziert."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Chitinöse Elende führt zwei Knochenklinge-Angriffe aus."
      },
      {
        name: "Knochenklinge",
        beschreibung: "Nahkampf-Angriffswurf: +6, Reichweite 1,5 m. Treffer: 14 (3W6 + 4) Wuchtschaden, und das Ziel hat bis zum Ende seines nächsten Zuges Nachteil auf Angriffswürfe gegen jede Kreatur außer dem Chitinösen Elenden."
      }
    ],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Wächterschlag",
        beschreibung: "Auslöser: Eine Kreatur innerhalb von 1,5 m vom Chitinösen Elenden führt die Aktion Zurückweichen aus oder macht einen Nahkampf-Angriffswurf gegen ein anderes Ziel als den Chitinösen Elenden. Reaktion – Der Chitinöse Elende führt einen Gelegenheitsangriff gegen diese Kreatur aus."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Das Ding mit dem Windenden Schwanz",
    art: "Aberration",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Chaotisch neutral",
    cr: 24,
    xp: 62000,
    rk: 20,
    ruestungstyp: null,
    tp: 125,
    tp_wuerfel: "7W20+49",
    bewegung: { "Gehen": "18 m", "Fliegen": "36 m (Schweben)" },
    attribute: { STR: 20, DEX: 27, CON: 21, INT: 29, WIS: 25, CHA: 23 },
    rettungswuerfe: { KON: 12, INT: 16, WEI: 14, CHA: 13 },
    fertigkeiten: { "Täuschung": 20, "Einsicht": 14, "Wahrnehmung": 14, "Überredung": 13 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Psychisch", "Nekrotisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpft", "Verängstigt"],
    sinne: ["Wahre Sicht 36 m"],
    passiveWahrnehmung: 24,
    sprachen: ["Alle", "Telepathie 1,6 km"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/das_ding_mit_dem_windenden_schwanz.png",
    beschreibung: [
      "Diese esoterische katzenartige Wesenheit ist unter vielen Namen bekannt und wandert durch die Reiche des Traumlandes und den Zwischenraum der Welten. Es war der Gelehrte Killgar Copperpot, der erkannte, dass ihre zahllosen Identitäten ein und dasselbe waren, und ihr den Namen 'Das Ding mit dem Windenden Schwanz' gab.",
      "Fast jeder Hexenmeister des Dings wurde als Kind von der Kreatur aufgesucht – in der Gestalt einer gewöhnlichen Hauskatze, die durch eine seltsame Färbung, ein ungewöhnliches Verhalten oder einen merkwürdigen Geruch auffiel. Es bevorzugt scheinbar jene in unglücklichen, vernachlässigten oder machtlosen Verhältnissen: umherstreifende Waisenkinder oder misshandelte Nachkommen narzisstischer Aristokraten. Es spielt die Rolle ihres imaginären Freundes und Vertrauten.",
      "Der eldrische Pakt vollzieht sich durch ein scheinbar harmloses Versprechen, ihre Verbindung geheim zu halten. Im Gegenzug gewährt das Ding seinen Hexenmeistern einen besonderen Vertrauten in Form einer Katze, die als direkter Stellvertreter des Wesens agiert.",
      "Obwohl es im Laufe der Geschichte unzähligen Sterblichen erschienen ist, sind die Beweggründe dieser Kreatur selbst für ihre Hexenmeister ungewiss. Es schwankt zwischen Chaos-Agenten und Hüter des Geheimwissens – nur Katzen wissen mehr. Das Ding mit dem Windenden Schwanz ist vollkommen gleichgültig gegenüber menschlichen Vorstellungen von Moral oder Pflicht und beobachtet die Sterblichenwelt mit distanzierter Neugier und gelegentlicher Langeweile."
    ],
    besonderheiten: [
      {
        name: "Epische Trefferpunkte",
        beschreibung: "Das Ding hat 125 (7W20+49) Trefferpunkte plus weitere 125 (7W20+49) pro Spielercharakter in der Gruppe."
      },
      {
        name: "Ausweichen",
        beschreibung: "Wenn das Ding einem Effekt ausgesetzt ist, der einen Rettungswurf erlaubt, um nur halben Schaden zu erleiden, erleidet es bei einem erfolgreichen Rettungswurf keinen Schaden und bei einem misslungenen nur halben Schaden."
      },
      {
        name: "Körperloses Bewegen",
        beschreibung: "Das Ding kann sich durch andere Kreaturen und Gegenstände bewegen, als wäre es schwieriges Gelände. Es erleidet 5 (1W10) Kraftschaden, wenn es seinen Zug innerhalb eines Gegenstands beendet."
      },
      {
        name: "Unergründlich",
        beschreibung: "Das Ding ist immun gegen jeden Effekt, der seine Emotionen wahrnehmen oder seine Gedanken lesen würde, sowie gegen jeden Weissagungszauber, den es ablehnt. WEI (Einsicht)-Proben, die die Absichten oder Aufrichtigkeit des Wesens einschätzen sollen, haben Nachteil."
      },
      {
        name: "Schnurrende Aura",
        beschreibung: "Das Ding erzeugt eine 9 m Ausstrahlung aus Wahnsinn und Grauen. Eine Kreatur, die ihren Zug in der Ausstrahlung beendet, erhält den Zustand Verängstigt für 1 Stunde. Eine Kreatur kann eine Aktion aufwenden, um ihre Angst zu überwinden: Weisheits-Rettungswurf SG 25. Fehlschlag: Das Ziel erleidet 27 (5W10) psychischen Schaden. Erfolg: Der Zustand Verängstigt endet für diese Kreatur, und sie wird für 24 Stunden immun gegen die Schnurrende Aura."
      },
      {
        name: "Quantenverschiebung",
        beschreibung: "Das Ding verschiebt sich zwischen Realitäten und Zeitlinien. Angriffswürfe gegen es haben Nachteil, und es hat Vorteil auf Rettungswürfe. Wird es von einem Angriff getroffen oder misslingt ihm ein Rettungswurf, ist dieses Merkmal unterbrochen, bis es Phasenverschiebung verwendet. Das Merkmal ist ebenfalls unterbrochen, wenn das Ding den Zustand Handlungsunfähig hat oder eine Bewegungsrate von 0."
      }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      {
        name: "Epische Aktionen",
        beschreibung: "Das Ding mit dem Windenden Schwanz handelt immer bei Initiative 20. In seinem Zug kann es seine Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt es dazu. Stattdessen führt es am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus."
      },
      {
        name: "Kosmische Klaue",
        beschreibung: "Nahkampfangriffswurf +15, Reichweite 3 m. Treffer: 29 (4W10+8) Kraftschaden."
      },
      {
        name: "Schwanzpeitsche",
        beschreibung: "Intelligenz-Rettungswurf SG 26, eine Kreatur, die das Ding in 9 m sehen kann. Fehlschlag: 35 (10W6) psychischer Schaden, und das Ziel erhält den Zustand Benommen (Rettungswurf beendet den Zustand). Fehlschlag um 5 oder mehr: 70 (20W6) psychischer Schaden, und das Ziel erhält stattdessen den Zustand Betäubt (Rettungswurf beendet den Zustand). Erfolg: Halber Schaden."
      },
      {
        name: "Duplikat manifestieren (1/Runde)",
        beschreibung: "Das Ding erschafft eine perfekte visuelle Illusion seiner selbst in einem unbesetzten Feld, das es in 90 m sehen kann. Die Illusion ist immateriell und nimmt keinen Raum ein. Das Duplikat hält 1 Minute an, endet aber früher, wenn das Ding es entlässt (keine Aktion erforderlich) oder es den Zustand Handlungsunfähig erhält. Das Ding kann bis zu acht illusorische Duplikate gleichzeitig haben. Solange es ein oder mehrere Duplikate hat, gelten folgende Vorteile – Angriffe und Zauber: Das Ding kann Zauber wirken, Schwanzpeitsche nutzen und Klauangriffe ausführen, als wäre es im Raum eines Duplikats. Aurenerweiterung: Jedes Duplikat strahlt eine Schnurrende Aura aus; mehrere überlappende Auren stapeln sich nicht. Bewegen: Bei jeder Nutzung dieser Aktion kann das Ding beliebig viele Illusionen bis zu 18 m zu unbesetzten Feldern in 90 m bewegen. Ablenken: Wenn sowohl das Ding als auch ein Duplikat in 3 m einer Kreatur sind, die sie sehen kann, hat das Ding Vorteil auf Angriffswürfe gegen diese Kreatur. Wahrnehmen: Das Ding kann durch jedes seiner Duplikate sehen und hören."
      },
      {
        name: "Phasenverschiebung",
        beschreibung: "Das Ding teleportiert sich und tauscht den Platz mit einem seiner illusorischen Duplikate. Falls sein Merkmal Quantenverschiebung unterbrochen war, ist es nicht mehr unterbrochen."
      },
      {
        name: "Zauberei (Psionik; 1/Runde)",
        beschreibung: "Das Ding wirkt einen der folgenden Zauber ohne Materialkomponenten; Intelligenz ist die Zauberwirkungseigenschaft (Zauber-SG 26). Beliebig: Gedanken lesen, Tier beherrschen, Suggestion. 3/Tag: Schwarze Tentakel, Traum, Größere Unsichtbarkeit, Großes Bild (Stufe 4), Spiegelbild, Bildprojektion, Hellsehen, Botschaft, Telekinese. 1/Tag: Labyrinth, Teleportation. 1/Jahr: Tor, Wunsch."
      },
      {
        name: "Epische Resistenz",
        beschreibung: "Das Ding wählt einen Zustand, Zauber oder anderen Effekt, der es derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihm. Das Ding kann diese Epische Aktion auch dann verwenden, wenn es anderweitig keine Aktionen ausführen kann, seine Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt seine Spielwerte verändert."
      }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Das Geflüsterte Versprechen",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 21,
    xp: 33000,
    rk: 20,
    ruestungstyp: null,
    tp: 125,
    tp_wuerfel: "7W20+49",
    bewegung: { "Gehen": "18 m" },
    attribute: { STR: 20, DEX: 27, CON: 21, INT: 25, WIS: 21, CHA: 30 },
    rettungswuerfe: { KON: 12, INT: 14, WEI: 12, CHA: 17 },
    fertigkeiten: { "Täuschung": 17, "Einsicht": 12, "Wahrnehmung": 12, "Überredung": 24 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Psychisch", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpft", "Verängstigt", "Vergiftet"],
    sinne: ["Wahre Sicht 36 m"],
    passiveWahrnehmung: 22,
    sprachen: ["Alle", "Telepathie 1,6 km"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/das_gefluesterte_versprechen.png",
    beschreibung: [
      "Das Geflüsterte Versprechen ist eine dämonische Wesenheit, die Sterblichen von großem Potenzial erscheint und ihnen verspricht, all ihre Ambitionen und Wünsche zu erfüllen. Es ist ein Gedankenleser und Gestaltwandler, der Sterblichen als ihre eigenen Spiegelbilder erscheint – aber in grandioser und idealisierter Form. Auf diese Weise nutzt es gleichzeitig deren Unsicherheiten und Träume aus.",
      "Das Geflüsterte Versprechen lauert hinter den großen Helden und Schurken der Geschichte und hat ihre Ambitionen angestachelt und ihre Begierden verstärkt. Insbesondere die Zauberkönige des Arkanischen Imperiums suchten das Geflüsterte Versprechen auf und schlossen unzählige Pakte, um Reichtum und Macht zu erlangen.",
      "Es gibt wenig, was das Geflüsterte Versprechen nicht anbieten kann. Wissen und Informationen sind seine häufigste Währung: vergessene Magie lehren, tiefgehütete Geheimnisse teilen, mächtige magische Gegenstände gewähren oder schlichter materieller Reichtum. Im Austausch fordert es ein Versprechen künftiger Dienste – ein Versprechen für ein Versprechen. Es lügt nicht und hält stets seine Versprechen ein, während es ein Netz aus Schulden und gegenseitigen Verpflichtungen aufbaut, immer im Zentrum jedes Geflechts."
    ],
    besonderheiten: [
      {
        name: "Epische Trefferpunkte",
        beschreibung: "Das Geflüsterte Versprechen hat 125 (7W20+49) Trefferpunkte plus weitere 125 (7W20+49) pro Spielercharakter in der Gruppe."
      },
      {
        name: "Verführerische Aura",
        beschreibung: "Das Geflüsterte Versprechen erzeugt eine 9 m Ausstrahlung bezaubernder Verzauberung. Eine Kreatur, die ihren Zug in der Ausstrahlung beendet, erhält den Zustand Bezaubert für 1 Stunde. Jedes Mal, wenn die Kreatur Schaden erleidet, der kein psychischer Schaden ist, legt sie einen Weisheits-Rettungswurf SG 25 ab. Bei einem Erfolg endet der Zustand Bezaubert für diese Kreatur, und sie wird für 24 Stunden immun gegen die Verführerische Aura."
      },
      {
        name: "Gestaltwandel",
        beschreibung: "Das Geflüsterte Versprechen hat keine wahre Form und wählt, wie es sich jeder Kreatur gegenüber manifestiert (keine Aktion erforderlich). Seine Form kann alles sein: eine Kreatur, ein Gegenstand oder sogar eine multisensorische Darstellung eines abstrakten Konzepts. Es kann jede Form annehmen, die Groß oder kleiner ist, aber seine Spielwerte bleiben in jeder Form gleich."
      },
      {
        name: "Unergründlich",
        beschreibung: "Das Geflüsterte Versprechen ist immun gegen jeden Effekt, der seine Emotionen wahrnehmen oder seine Gedanken lesen würde, sowie gegen jeden Weissagungszauber, den es ablehnt. WEI (Einsicht)-Proben, um die Absichten oder Aufrichtigkeit des Wesens einzuschätzen, haben Nachteil."
      },
      {
        name: "Zungengewandtheit",
        beschreibung: "Wenn das Geflüsterte Versprechen eine Charisma (Täuschung)-Probe ablegt, behandelt es jedes Würfelergebnis von 14 oder weniger auf dem W20 als 15."
      },
      {
        name: "Zerbrechende Entschlossenheit",
        beschreibung: "Kreaturen, die vom Geflüsterten Versprechen gepackt werden, können nicht von Resistenz oder Immunität gegen psychischen Schaden oder den Zustand Bezaubert profitieren."
      }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      {
        name: "Epische Aktionen",
        beschreibung: "Das Geflüsterte Versprechen handelt immer bei Initiative 20. In seinem Zug kann es seine Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt es dazu. Stattdessen führt es am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus."
      },
      {
        name: "Tentakel",
        beschreibung: "Nahkampfangriffswurf +17, Reichweite 3 m. Treffer: 28 (4W8+10) Kraftschaden, und das Ziel erhält den Zustand Gepackt (Entkommen SG 25). Solange es gepackt ist, hat das Ziel den Zustand Gefesselt."
      },
      {
        name: "Flüstern (1/Runde)",
        beschreibung: "Intelligenz-Rettungswurf SG 25, eine Kreatur, die das Geflüsterte Versprechen in 90 m sehen kann. Fehlschlag: 35 (10W6) psychischer Schaden, und das Ziel erhält den Zustand Benommen (Rettungswurf beendet den Zustand). Fehlschlag um 5 oder mehr: Doppelter Schaden, und das Ziel erhält den Zustand Betäubt bis Ende seines nächsten Zuges. Erfolg: Halber Schaden."
      },
      {
        name: "Versprechen (1/Runde)",
        beschreibung: "Charisma-Rettungswurf SG 25, eine Kreatur, die das Geflüsterte Versprechen in 90 m sehen kann. Fehlschlag: 35 (10W6) psychischer Schaden, und das Ziel erhält den Zustand Verhext (1W10) (Rettungswurf beendet den Zustand). Fehlschlag um 5 oder mehr: Doppelter Schaden, und das Ziel wird verflucht. Solange es verflucht ist, kann das Ziel keine Trefferpunkte wiedergewinnen und erhält keine Vorteile aus einer Kurzen oder Langen Rast. Erfolg: Halber Schaden."
      },
      {
        name: "Ungehindertes Gleiten",
        beschreibung: "Das Geflüsterte Versprechen bewegt sich bis zu seiner Bewegungsrate, ohne Gelegenheitsangriffe zu provozieren."
      },
      {
        name: "Beherrschen (1/Runde)",
        beschreibung: "Weisheits-Rettungswurf SG 25, eine Kreatur, die das Geflüsterte Versprechen in 90 m sehen kann. Fehlschlag: Die Kreatur erhält den Zustand Bezaubert bis Ende ihres nächsten Zuges. Solange sie bezaubert ist, gehorcht sie den Befehlen des Geflüsterten Versprechens und kann keine Reaktionen ausführen. Fehlschlag um 5 oder mehr: Der Zustand Bezaubert hält stattdessen 24 Stunden an oder bis das Geflüsterte Versprechen auf 0 TP reduziert wird. Jedes Mal, wenn das Ziel Schaden erleidet, wiederholt es den Rettungswurf; bei einem Erfolg endet der Effekt. Erfolg: Das Ziel hat Nachteil auf seinen nächsten Angriffswurf gegen das Geflüsterte Versprechen."
      },
      {
        name: "Zauberei (Psionik; 1/Runde)",
        beschreibung: "Das Geflüsterte Versprechen wirkt einen der folgenden Zauber ohne Materialkomponenten; Charisma ist die Zauberwirkungseigenschaft (Zauber-SG 25). Beliebig: Gedanken lesen, Suggestion. 3/Tag: Dimensionstor, Traum, Unsichtbarkeit, Großes Bild (Stufe 4), Botschaft. 1/Tag: Monsterkontrolle, Massensuggestion, Bildprojektion, Hellsehen. 1/Jahr: Wunsch."
      },
      {
        name: "Epische Resistenz",
        beschreibung: "Das Geflüsterte Versprechen wählt einen Zustand, Zauber oder anderen Effekt, der es derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihm. Es kann diese Epische Aktion auch dann verwenden, wenn es anderweitig keine Aktionen ausführen kann, seine Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt seine Spielwerte verändert."
      }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Delerium-Drachennestling",
    art: "Drache",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch neutral",
    cr: 5,
    xp: 1800,
    rk: 18,
    ruestungstyp: null,
    tp: 90,
    tp_wuerfel: "12W8+36",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Fliegen": "18 m (Schweben)" },
    attribute: { STR: 19, DEX: 15, CON: 17, INT: 16, WIS: 13, CHA: 15 },
    rettungswuerfe: { GES: 5, KON: 6, WEI: 4, CHA: 5 },
    fertigkeiten: { "Arkane Kunde": 6, "Wahrnehmung": 7, "Heimlichkeit": 5 },
    schadensresistenzen: ["Nekrotisch", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Gemeinsprache", "Drakonisch", "Telepathie 9 m"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/delerium_drachennestling.png",
    beschreibung: [
      "Dieses jenseitige Wesen ist ein kristalliner Schrecken, sein Körper aus kantigen, edelsteinartigen Schuppen geformt, die mit oktarinem Licht pulsieren. Seine Gestalt ist roh konzentriertes Delerium. Jede Schuppe ist ein gleißender Kristall, der Licht in unheimliche Violett-, Gelb- und Grüntöne bricht, mit einer übernatürlichen Schärfe, die sich zugleich zerbrechlich und unmöglich dauerhaft anfühlt.",
      "Die Flügel des Drachen sind durchscheinend und mit leuchtenden Kristallvenen durchzogen, die schimmern und beim Bewegen kaleidoskopische Muster werfen. Jeder Flügelschlag lässt die Luft summen und vibriert mit chaotischer Energie, die die Sinne überwältigt und verzerrt. Jeder Schritt des Drachen hinterlässt zarte Kristallmoten, die zu gezackten Formationen heranwachsen und die Landschaft verseuchen.",
      "Unergründliche Wesen des Raums zwischen den Welten, Delerium-Drachen sind Ordnung aus dem Chaos in Person. Wie solche Kreaturen entstanden, ist unbekannt, und nur wenige kennen ihre Existenz. Manche vermuten, dass sie spontan entstanden sind und aus kristallinen Eiern mit oktarinfarbenen Schalen schlüpften.",
      "Ein Delerium-Drache ist nicht einfach kontaminiert, sondern ein einzigartiger Edelsteindrache mit einer jenseitigen Physiologie. Diese Drachen sind buchstäblich aus den Kristallen gemacht: ihre Klauen, Knochen und Schuppen sind brechende Delerium-Splitter. Ihr Fleisch und ihre Organe sind unbegreifliche organische Materie, und ihr Blut ist Deliriumschlamm. Wenn sie ihre Odemwaffe einsetzen, atmen sie einen Sturm glitzernder Splitter aus, die explodieren und Wahnsinn, Mutationen und wilde Magie im Bereich ausbrechen lassen.",
      "Delerium-Drachen gehören zu den mächtigsten Wesen, die im Raum zwischen den Welten entstanden sind. Da sie Dimensionen wahrnehmen können, die Sterblichen unbegreiflich sind, wirken diese Drachen oft flatterhaft oder abgelenkt – aber das liegt daran, dass sie Schichten der Realität erleben, die Menschen nicht können. Viele sind nihilistische Solipsisten, die glauben, dass nichts tatsächlich existiert außer ihnen selbst. Andere hingegen schwelgen in ihrer chaotischen Existenz und suchen nach neuen Kunstformen und ungezähmter Schöpfung.",
      "Verspielt und voller Neugier, streifen Delerium-Drachennestlinge nicht weit von dem Ort weg, an dem sie schlüpften, da sie noch mit ihrer multidimensionalen Existenz zurechtkommen müssen. Ein Nestling versteht seine transzeitlichen Sinne meist noch nicht vollständig und erlebt Erinnerungen an sein Erwachsenenleben und seine Zukunft in Träumen und Visionen."
    ],
    besonderheiten: [
      { name: "Aberrante Eigenschaften", beschreibung: "Der Drache besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Drache führt einen Bissangriff aus und verwendet Kontaminiertes Reißen zweimal." },
      { name: "Biss", beschreibung: "Nahkampfangriffswurf: +7, Reichweite 3 m. Treffer: 15 (2W10+4) Kraftschaden." },
      { name: "Kontaminiertes Reißen", beschreibung: "Konstitutions-Rettungswurf: SG 15, eine Kreatur innerhalb von 1,5 m des Drachen. Misserfolg: 14 (4W6) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe." },
      { name: "Oktariner Atem (Aufladen 5-6)", beschreibung: "Geschicklichkeits-Rettungswurf: SG 15, alle Kreaturen in einem 9-m-Kegel. Misserfolg: 10 (3W6) nekrotischer Schaden plus 10 (3W6) psychischer Schaden plus 10 (3W6) strahlender Schaden. Erfolg: Halber Schaden." }
    ],
    bonusaktionen: [
      { name: "Dimensionssprung", beschreibung: "Der Drache teleportiert sich in ein unbesetztes Feld innerhalb von 9 m, das er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Delerium-Drache (Jung)",
    art: "Drache",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch neutral",
    cr: 11,
    xp: 7200,
    rk: 19,
    ruestungstyp: null,
    tp: 52,
    tp_wuerfel: "5W10+25",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 23, DEX: 15, CON: 21, INT: 18, WIS: 15, CHA: 18 },
    rettungswuerfe: { GES: 6, KON: 9, WEI: 6, CHA: 8 },
    fertigkeiten: { "Arkane Kunde": 8, "Wahrnehmung": 10, "Heimlichkeit": 6 },
    schadensresistenzen: ["Nekrotisch", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Gemeinsprache", "Drakonisch", "Telepathie 18 m"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/junger_delerium_drache.png",
    beschreibung: [
      "Entdecker vieler Welten und Aussichten, Junge Delerium-Drachen streifen durch den Raum zwischen den Welten und begeben sich weit und breit auf die Suche nach Sinn in der Sinnlosigkeit, nach Form in der Formlosigkeit."
    ],
    besonderheiten: [
      { name: "Epische Trefferpunkte", beschreibung: "Der Drache hat 52 (5W10+25) Trefferpunkte plus weitere 52 (5W10+25) pro Spielercharakter in der Gruppe." },
      { name: "Aberrante Eigenschaften", beschreibung: "Der Drache besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." },
      { name: "Dunstaura", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 m um den Drachen beginnt, erleidet 10 (3W6) nekrotischen Schaden." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Der Drache handelt immer bei Initiative 20. In seinem Zug kann er seine Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt ihn dazu. Stattdessen führt der Drache am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus." },
      { name: "Biss", beschreibung: "Nahkampfangriffswurf: +10, Reichweite 3 m. Treffer: 17 (2W10+6) Kraftschaden, und wenn das Ziel eine Mittelgroße oder kleinere Kreatur ist, erhält es den Zustand Gepackt (Entkommen SG 18). Solange es Gepackt ist, hat das Ziel den Zustand Festgehalten." },
      { name: "Kontaminiertes Reißen", beschreibung: "Konstitutions-Rettungswurf: SG 18, eine Kreatur innerhalb von 1,5 m des Drachen. Misserfolg: 14 (4W6) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe." },
      { name: "Schwanz", beschreibung: "Stärke-Rettungswurf: SG 18, eine Kreatur innerhalb von 6 m des Drachen. Misserfolg: 14 (4W6) Kraftschaden, und wenn das Ziel eine Mittelgroße oder kleinere Kreatur ist, erhält es den Zustand Liegend." },
      { name: "Oktariner Atem (Aufladen 5-6)", beschreibung: "Geschicklichkeits-Rettungswurf: SG 18, alle Kreaturen in einem 9-m-Kegel. Misserfolg: 14 (4W6) nekrotischer Schaden plus 14 (4W6) psychischer Schaden plus 14 (4W6) strahlender Schaden. Erfolg: Halber Schaden." },
      { name: "Dimensionssprung (1/Runde)", beschreibung: "Der Drache teleportiert sich in ein unbesetztes Feld innerhalb von 9 m, das er sehen kann." },
      { name: "Mage Hand", beschreibung: "Der Drache wirkt Mage Hand mit Charisma als Zauberwirkungseigenschaft. Die durch den Zauber erzeugte Hand ist unsichtbar." },
      { name: "Epische Resistenz", beschreibung: "Der Drache wählt einen Zustand, Zauber oder anderen Effekt, der ihn derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihm. Der Drache kann diese Epische Aktion auch dann verwenden, wenn er anderweitig keine Aktionen ausführen kann, seine Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt seine Spielwerte verändert." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Delerium-Drache (Ausgewachsen)",
    art: "Drache",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Chaotisch neutral",
    cr: 18,
    xp: 20000,
    rk: 20,
    ruestungstyp: null,
    tp: 95,
    tp_wuerfel: "7W12+49",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 27, DEX: 14, CON: 25, INT: 23, WIS: 17, CHA: 23 },
    rettungswuerfe: { GES: 8, KON: 13, WEI: 9, CHA: 12 },
    fertigkeiten: { "Arkane Kunde": 12, "Wahrnehmung": 15, "Heimlichkeit": 8 },
    schadensresistenzen: ["Kraft", "Nekrotisch", "Psychisch", "Strahlend"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 25,
    sprachen: ["Gemeinsprache", "Drakonisch", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/ausgewachsener_delerium_drache.png",
    beschreibung: [
      "Ein vollständig ausgewachsener Delerium-Drache etabliert seine eigene Domäne innerhalb des Raums zwischen den Welten und findet einen Ort, der seinem Temperament entspricht. Dort versucht er, sich selbst und die Welt um sich herum zu verstehen."
    ],
    besonderheiten: [
      { name: "Epische Trefferpunkte", beschreibung: "Der Drache hat 95 (7W12+49) Trefferpunkte plus weitere 95 (7W12+49) pro Spielercharakter in der Gruppe." },
      { name: "Aberrante Eigenschaften", beschreibung: "Der Drache besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." },
      { name: "Dunstaura", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 m um den Drachen beginnt, erleidet 14 (4W6) nekrotischen Schaden." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [
      { name: "Drakonische Vergeltung", beschreibung: "Auslöser: Der Drache wird Blutend. Der Drache kann diese Reaktion auch dann verwenden, wenn er den Zustand Handlungsunfähig hat oder anderweitig keine Reaktionen ausführen kann. Reaktion: Alle Zustände und Zauber auf dem Drachen enden sofort, es sei denn, er entscheidet sich, von ihnen beeinflusst zu werden, und er kann sich bis zu seiner Fluggeschwindigkeit bewegen, ohne Gelegenheitsangriffe zu provozieren und schwieriges Gelände zu ignorieren. Der Drache lädt seinen Furcht einflößenden Ruf auf und verwendet ihn sofort." }
    ],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Der Drache handelt immer bei Initiative 20. In seinem Zug kann er seine Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt ihn dazu. Stattdessen führt der Drache am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus." },
      { name: "Biss", beschreibung: "Nahkampfangriffswurf: +14, Reichweite 3 m. Treffer: 34 (4W12+8) Kraftschaden, und wenn das Ziel eine Große oder kleinere Kreatur ist, erhält es den Zustand Gepackt (Entkommen SG 22). Solange es Gepackt ist, hat das Ziel den Zustand Festgehalten." },
      { name: "Klaue", beschreibung: "Nahkampfangriffswurf: +14, Reichweite 3 m. Treffer: 15 (2W6+8) Kraftschaden." },
      { name: "Schwanz", beschreibung: "Stärke-Rettungswurf: SG 22, eine Kreatur innerhalb von 6 m des Drachen. Misserfolg: 14 (4W6) Kraftschaden, und wenn das Ziel eine Große oder kleinere Kreatur ist, erhält es den Zustand Liegend." },
      { name: "Gedankenfeuer", beschreibung: "Weisheits-Rettungswurf: SG 20, eine Kreatur innerhalb von 36 m, die der Drache sehen kann. Misserfolg: Das Ziel erleidet 22 (4W10) psychischen Schaden und erhält den Zustand Brennend (2W8 psychisch). Erfolg: Nur halber Schaden." },
      { name: "Furcht einflößender Ruf (Aufladen nach Kurzer Rast)", beschreibung: "Weisheits-Rettungswurf: SG 21, alle Kreaturen in einer 36-m-Ausstrahlung um den Drachen, die ihn hören können. Misserfolg: 18 (4W8) Donnerschaden, und das Ziel erhält den Zustand Verängstigt (Rettungswurf zum Beenden). Erfolg: Halber Schaden." },
      { name: "Tief einatmen (1/Runde)", beschreibung: "Die Odemwaffe des Drachen wird aufgeladen. Der Drache kann diese Epische Aktion nur verwenden, wenn sie die erste Epische Aktion ist, die er in dieser Runde ausführt." },
      { name: "Odemwaffe (Sonderaufladen)", beschreibung: "Der Drache kann diese Epische Aktion nur verwenden, wenn sie die letzte Epische Aktion ist, die er in dieser Runde ausführt. Er wählt einen der folgenden Effekte: Mutationsatem – Konstitutions-Rettungswurf: SG 21, alle Kreaturen in einem 36-m-Kegel. Misserfolg: 72 (16W8) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe und erhält automatisch eine Mutation. Erfolg: Halber Schaden. Wahnsinnsatem – Intelligenz-Rettungswurf: SG 21, alle Kreaturen in einem 36-m-Kegel. Misserfolg: 66 (12W10) psychischer Schaden, und das Ziel erhält den Zustand Benebelt (Rettungswurf zum Beenden). Misserfolg um 5 oder mehr: 132 (24W10) psychischer Schaden, und das Ziel erhält stattdessen den Zustand Handlungsunfähig (Rettungswurf zum Beenden). Erfolg: Halber Schaden. Wilde-Magie-Atem – Geschicklichkeits-Rettungswurf: SG 21, alle Kreaturen in einer 30,5 m langen und 1,5 m breiten Linie. Misserfolg: 55 (10W10) strahlender Schaden, und das Ziel loest eine Arkane Anomalie aus, die auf ihm zentriert ist. Erfolg: Halber Schaden." },
      { name: "Zauberwirken (1/Runde)", beschreibung: "Der Drache wirkt einen der folgenden Zauber, wobei keine Materialkomponenten benötigt werden und Charisma als Zauberwirkungseigenschaft dient (Zauberrettungswurf-SG 20): Nach Belieben: Dimensionstor, Telekinese. 2/Tag: Magie auflösen. 1/Tag: Kontakt zu anderen Ebenen, Ebenenreise (nur auf sich selbst), Hellsehen." },
      { name: "Epische Resistenz", beschreibung: "Der Drache wählt einen Zustand, Zauber oder anderen Effekt, der ihn derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihm. Der Drache kann diese Epische Aktion auch dann verwenden, wenn er anderweitig keine Aktionen ausführen kann, seine Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt seine Spielwerte verändert." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Delerium-Drache (Uralt)",
    art: "Drache",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Chaotisch neutral",
    cr: 25,
    xp: 75000,
    rk: 23,
    ruestungstyp: null,
    tp: 136,
    tp_wuerfel: "7W20+63",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 30, DEX: 15, CON: 29, INT: 26, WIS: 19, CHA: 23 },
    rettungswuerfe: { GES: 10, KON: 17, WEI: 12, CHA: 14 },
    fertigkeiten: { "Arkane Kunde": 16, "Wahrnehmung": 20, "Heimlichkeit": 10 },
    schadensresistenzen: ["Kraft", "Nekrotisch", "Psychisch", "Strahlend"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 30,
    sprachen: ["Gemeinsprache", "Drakonisch", "Telepathie 1,6 km"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/uralter_delerium_drache.png",
    beschreibung: [
      "Delerium-Drachen üben ihre Willenskraft über den Raum zwischen den Welten aus und machen ihre Behausungen zu Reichen für sich selbst. Diese Behausungen können in einen Dünnen Ort münden, wobei die gähnende Höhle einer normalen Drachenbehausung stattdessen in den Wahnsinn der Heimat des Delerium-Drachen führt. Diese Drachen füllen ihre Behausungen mit Schätzen und Geheimnissen von mysteriöser Bedeutung und anachronistischem Ursprung und horten Gegenstände, die in der fernen Vergangenheit wertvoll waren oder von entscheidender Bedeutung für die ferne Zukunft sind."
    ],
    besonderheiten: [
      { name: "Epische Trefferpunkte", beschreibung: "Der Drache hat 136 (7W20+63) Trefferpunkte plus weitere 136 (7W20+63) pro Spielercharakter in der Gruppe." },
      { name: "Aberrante Eigenschaften", beschreibung: "Der Drache besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." },
      { name: "Dunstaura", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 m um den Drachen beginnt, erleidet 21 (6W6) nekrotischen Schaden." },
      { name: "Ordnung über Chaos", beschreibung: "Wenn der Drache anwesend ist, wenn ein Wurf auf der Tabelle Arkane Anomalie, Drakkenheimer Wahnsinn oder Mutationen gemacht wird, macht der Drache einen zusätzlichen Wurf auf derselben Tabelle und wählt aus, welches Ergebnis zutrifft." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [
      { name: "Drakonische Vergeltung", beschreibung: "Auslöser: Der Drache wird Blutend. Der Drache kann diese Reaktion auch dann verwenden, wenn er den Zustand Handlungsunfähig hat oder anderweitig keine Reaktionen ausführen kann. Reaktion: Alle Zustände und Zauber auf dem Drachen enden sofort, es sei denn, er entscheidet sich, von ihnen beeinflusst zu werden, und er kann sich bis zu seiner Fluggeschwindigkeit bewegen, ohne Gelegenheitsangriffe zu provozieren und schwieriges Gelände zu ignorieren. Der Drache lädt seinen Furcht einflößenden Ruf auf und verwendet ihn sofort." }
    ],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Der Drache handelt immer bei Initiative 20. In seinem Zug kann er seine Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt ihn dazu. Stattdessen führt der Drache am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus." },
      { name: "Biss", beschreibung: "Nahkampfangriffswurf: +18, Reichweite 3 m. Treffer: 36 (4W12+10) Kraftschaden, und wenn das Ziel eine Riesige oder kleinere Kreatur ist, erhält es den Zustand Gepackt (Entkommen SG 26). Solange es Gepackt ist, hat das Ziel den Zustand Festgehalten." },
      { name: "Klaue", beschreibung: "Nahkampfangriffswurf: +18, Reichweite 3 m. Treffer: 17 (2W6+10) Kraftschaden." },
      { name: "Schwanz", beschreibung: "Stärke-Rettungswurf: SG 26, eine Kreatur innerhalb von 6 m des Drachen. Misserfolg: 24 (4W6+10) Kraftschaden, und wenn das Ziel eine Riesige oder kleinere Kreatur ist, erhält es den Zustand Liegend." },
      { name: "Gedankenfeuer", beschreibung: "Weisheits-Rettungswurf: SG 25, eine Kreatur innerhalb von 36 m, die der Drache sehen kann. Misserfolg: Das Ziel erleidet 22 (4W10) psychischen Schaden und erhält den Zustand Brennend (2W8 psychisch). Erfolg: Nur halber Schaden." },
      { name: "Flügelschlag (1/Runde)", beschreibung: "Stärke-Rettungswurf: SG 25, alle Kreaturen in einem 9-m-Kegel. Misserfolg: 20 (3W6+10) Wuchtschaden, und das Ziel wird bis zu 6 m vom Drachen weggestoßen. Erfolg: Halber Schaden." },
      { name: "Furcht einflößender Ruf (Aufladen nach Kurzer Rast)", beschreibung: "Weisheits-Rettungswurf: SG 25, alle Kreaturen in einer 36-m-Ausstrahlung um den Drachen, die ihn hören können. Misserfolg: 18 (4W8) Donnerschaden, und das Ziel erhält den Zustand Verängstigt (Rettungswurf zum Beenden). Erfolg: Halber Schaden." },
      { name: "Tief einatmen (1/Runde)", beschreibung: "Die Odemwaffe des Drachen wird aufgeladen. Der Drache kann diese Epische Aktion nur verwenden, wenn sie die erste Epische Aktion ist, die er in dieser Runde ausführt. Nach Verwendung dieser Epischen Aktion kann der Drache seinen Biss oder seinen Furcht einflößenden Ruf bis zum Beginn der nächsten Runde nicht verwenden." },
      { name: "Odemwaffe (Sonderaufladen)", beschreibung: "Der Drache kann diese Epische Aktion nur verwenden, wenn sie die letzte Epische Aktion ist, die er in dieser Runde ausführt. Er wählt einen der folgenden Effekte: Oktariner Atem – Der Drache atmet einen 36-m-Kegel prismatischer Strahlen. Jeder Strahl hat eine andere Farbe und Wirkung. Wähle einen Attributswert, dann Kälte-, Feuer-, Blitz-, Nekrotisch-, Psychisch- oder Strahlenden Schaden. Jedes Ziel muss einen Rettungswurf mit dem gewählten Attribut (SG 25) bestehen; bei einem Misserfolg erleidet es 105 (30W6) Schaden des gewählten Typs, bei einem Erfolg nur halb so viel. Mutationsatem – Konstitutions-Rettungswurf: SG 25, alle Kreaturen in einem 36-m-Kegel. Misserfolg: 90 (20W8) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe und erhält automatisch eine Mutation. Erfolg: Halber Schaden. Wahnsinnsatem – Intelligenz-Rettungswurf: SG 25, alle Kreaturen in einem 36-m-Kegel. Misserfolg: 83 (15W10) psychischer Schaden, und das Ziel erhält den Zustand Benebelt (Rettungswurf zum Beenden). Misserfolg um 5 oder mehr: 165 (30W10) psychischer Schaden, und das Ziel erhält stattdessen den Zustand Handlungsunfähig (Rettungswurf zum Beenden). Erfolg: Halber Schaden. Wilde-Magie-Atem – Geschicklichkeits-Rettungswurf: SG 25, alle Kreaturen in einer 36 m langen und 1,5 m breiten Linie. Misserfolg: 83 (15W10) strahlender Schaden, und das Ziel loest eine Arkane Anomalie aus, die auf ihm zentriert ist. Erfolg: Halber Schaden." },
      { name: "Zauberwirken (1/Runde)", beschreibung: "Der Drache wirkt einen der folgenden Zauber, wobei keine Materialkomponenten benötigt werden und Charisma als Zauberwirkungseigenschaft dient (Zauberrettungswurf-SG 22, +14 auf Zauberangriffswürfe): Nach Belieben: Dimensionstor, Telekinese. 2/Tag: Magie auflösen. 1/Tag: Kontakt zu anderen Ebenen, Ebenenreise (nur auf sich selbst), Hellsehen, Wunsch." },
      { name: "Epische Resistenz", beschreibung: "Der Drache wählt einen Zustand, Zauber oder anderen Effekt, der ihn derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihm. Der Drache kann diese Epische Aktion auch dann verwenden, wenn er anderweitig keine Aktionen ausführen kann, seine Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt seine Spielwerte verändert." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Delerium-Elender",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 0.5,
    xp: 100,
    rk: 12,
    ruestungstyp: null,
    tp: 9,
    tp_wuerfel: "2W8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 13, DEX: 15, CON: 10, INT: 7, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/delerium-elender.png",
    beschreibung: [
      "Diese erbärmliche Gestalt ist von eldritscher Kontamination verzerrt und entstellt. Unter zerfetzter und zerrissener Kleidung sind Wunden, Läsionen und vorspringende Blutgefäße auf ihrem violett-grauen Fleisch zu sehen, und ihre Glieder und Gelenke biegen sich in unnatürlichen Winkeln. Die Gesichtszüge sind widernatürlich zu einem dauerhaften Ausdruck verwirrter Qual verformt, und ein oktarines Leuchten erfüllt die tiefliegenden Augen. Kleine aberrante Mutationen zeigen sich über den gesamten Körper: kristalline Knochenauswüchse und kleine Tentakel, die durch die Haut brechen, ein gelbes Auge, das sich am Hals öffnet und schließt, und eine beunruhigend verlängerte Zunge.",
      "Der typische Delerium-Elende ist eine zerzauste und bemitleidenswerte Kreatur, die die Ruinen in einem quasi-vernebelten Zustand durchstreift. Die meisten haben gutartige Mutationen, die keine besonderen Eigenschaften oder einzigartigen Fähigkeiten verleihen. Sie sind gegen weitere Kontamination durch Delerium immun. Delerium-Elende sind verzweifelte und verwirrte Kämpfer, die zu keiner komplexen Taktik fähig sind und sich einfach auf alle nicht-kontaminierten Kreaturen stürzen, die sie wahrnehmen. Häufig schließen sie sich zu kleinen Gruppen zusammen und durchstreifen gemeinsam die Ruinen."
    ],
    besonderheiten: [
      {
        name: "Nebeltarnung",
        beschreibung: "Der Delerium-Elende hat Vorteil auf Geschicklichkeit (Heimlichkeit)-Würfe bei der Aktion Verstecken in jedem Bereich, der von Nebel oder Dunst verdeckt wird, einschließlich des Dunsts von Drakkenheim."
      }
    ],
    aktionen: [
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +4, Reichweite 1,5 m. Treffer: 4 (1W4 + 2) Hiebschaden plus 10 (3W6) nekrotischer Schaden. Kritischer Treffer: Konstitutions-Rettungswurf: SG 10. Misserfolg: Das Ziel erhält eine Kontaminationsstufe."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Der Algorithmus",
    art: "Konstrukt",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Gesetzlich neutral",
    cr: 30,
    xp: 155000,
    rk: 25,
    ruestungstyp: null,
    tp: 305,
    tp_wuerfel: "15W20+150",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 30, DEX: 15, CON: 30, INT: 30, WIS: 20, CHA: 10 },
    rettungswuerfe: { GES: 11, KON: 19, INT: 19, CHA: 9 },
    fertigkeiten: { "Geschichte": 19, "Einschüchterung": 9, "Einsicht": 14, "Wahrnehmung": 23 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Kälte", "Feuer", "Blitz", "Nekrotisch", "Psychisch", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Ertaubt", "Erschöpft", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet", "Betäubt"],
    sinne: ["Wahre Sicht 75 m"],
    passiveWahrnehmung: 33,
    sprachen: ["Alle"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/der_algorithmus.png",
    beschreibung: [
      "Es ist ein riesiges Netzwerk aus Drähten, Röhren und Metallplatten in einer sich ständig verschiebenden und formbaren Gestalt. Dieses massive Konstrukt erscheint oft als gigantisches robotisches Gesicht, das durch die Leere schwebt, mit einem Schweif aus sich windenden mechanischen Tentakeln dahinter – wie ein gewaltiger, anorganischer Tintenfisch. Es nutzt die Platten und Klumpen flüssigen Metalls, die es umkreisen, um sich umzuformen.",
      "Der Algorithmus ist die berechnende Wesenheit schlechthin – ein massives Wesen aus sich ständig reformierender Technologie. Seine Form ist eine Masse aus Drähten, Röhren, Metall und Elektrizität. Sehr wenig ist über seine Herkunft oder seinen Zweck bekannt. Spekulationen zufolge ist er besessen von Perfektion und Erwartung und hält das Universum für ein defektes und unvollkommenes Ding, das repariert und reformiert werden muss.",
      "Der Algorithmus kann jeden möglichen Ausgang eines Handelsverlaufs in einem Augenblick vorhersagen und bewerten und hat die Fähigkeit, Zeit und Raum zu verschieben und zu manipulieren, um sein günstigstes Ergebnis zu ermöglichen. Ganze Planeten im Zwischenraum wurden von ihm zu mechanischen Knotenpunkten, Quantensphären, Zeitparadoxen und Maschinenfabriken umfunktioniert."
    ],
    besonderheiten: [
      {
        name: "Epische Trefferpunkte",
        beschreibung: "Der Algorithmus hat 305 (15W20+150) Trefferpunkte plus weitere 300 (15W20+150) pro Spielercharakter in der Gruppe."
      },
      {
        name: "Elektronisches Datennetzwerk",
        beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 18 m des Algorithmus beginnt, erleidet 21 (6W6) Blitzschaden."
      },
      {
        name: "Unveränderliche Form",
        beschreibung: "Der Algorithmus ist immun gegen jeden Zauber oder Effekt, der seine Form verändern würde."
      },
      {
        name: "Prädiktive Analysen",
        beschreibung: "Am Ende jedes Zuges des Algorithmus würfelt er einen W20 für jeden Spielercharakter, der gegen ihn kämpft. Der Algorithmus kann jeden W20-Test von sich selbst oder einer Kreatur, die er sehen kann, durch einen dieser Vorhersagewürfe ersetzen. Er muss sich dazu entschließen, bevor der Wurf erfolgt, und kann einen Wurf auf diese Weise nur einmal pro Zug ersetzen. Jeder Vorhersagewurf kann nur einmal verwendet werden. Nicht verwendete Vorhersagewürfe gehen zu Beginn des nächsten Zuges des Algorithmus verloren."
      }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      {
        name: "Epische Aktionen",
        beschreibung: "Der Algorithmus handelt immer bei Initiative 20. In seinem Zug kann er seine Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt ihn dazu. Stattdessen führt er am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus."
      },
      {
        name: "Draht",
        beschreibung: "Geschicklichkeits-Rettungswurf SG 26, eine Kreatur, die der Algorithmus in 18 m sehen kann. Fehlschlag: 21 (2W10+10) Kraftschaden. Ist das Ziel Riesig oder kleiner, erhält es zusätzlich den Zustand Gepackt (Entkommen SG 20). Der Algorithmus kann bis zu sechs Kreaturen gleichzeitig packen."
      },
      {
        name: "Algorithmische Manipulation",
        beschreibung: "Stärke-Rettungswurf SG 26, eine Riesige oder kleinere Kreatur oder ein Objekt, das der Algorithmus in 36 m sehen kann. Fehlschlag: Der Algorithmus bewegt das Ziel bis zu 9 m in eine beliebige Richtung, und das Ziel erhält den Zustand Gefesselt. Hebt der Algorithmus das Ziel in die Luft, schwebt es dort. Das Ziel bleibt gehalten, bis der Algorithmus es freilässt (keine Aktion erforderlich), diese Epische Aktion erneut einsetzt oder den Zustand Handlungsunfähig erhält."
      },
      {
        name: "Deatomisierung",
        beschreibung: "Konstitutions-Rettungswurf SG 26, eine Kreatur oder ein Objekt, das der Algorithmus in 90 m sehen kann. Fehlschlag: 65 (10W12) nekrotischer Schaden. Wird das Ziel auf 0 Trefferpunkte reduziert, stirbt es und sein Körper wird zu Atomen zerstört. Erfolg: Halber Schaden."
      },
      {
        name: "Umprogrammierung (1/Runde)",
        beschreibung: "Intelligenz-Rettungswurf SG 26, eine vom Algorithmus gepackte Kreatur. Fehlschlag: 55 (10W10) Stichschaden. Wird das Ziel auf 0 Trefferpunkte reduziert, stirbt es und sein Gehirn wird durch mechanische Komponenten ersetzt. Das Ziel erwacht zu Beginn seines nächsten Zuges als Konstrukt unter der Kontrolle des Algorithmus wieder. Es ähnelt der ursprünglichen Kreatur, aber seine Augen leuchten in synthetischem Grün, und sein Körper ist mit hervorstehenden Drähten, Metallschrott und leuchtenden Röhren bedeckt."
      },
      {
        name: "Direktkontrolle übernehmen (1/Runde)",
        beschreibung: "Der Algorithmus visiert ein Konstrukt in 36 m an und tritt sofort in es ein und übernimmt die Kontrolle. Er kann seine Epischen Aktionen wie gewohnt weiter einsetzen und ersetzt die Spielwerte des Konstrukts durch seine eigenen, mit Ausnahme der Trefferpunkte des Konstrukts. Wird das Konstrukt auf 0 Trefferpunkte reduziert, taucht der Algorithmus in einem unbesetzten Feld in 4,5 m Entfernung wieder auf."
      },
      {
        name: "Zauberei (1/Runde)",
        beschreibung: "Der Algorithmus wirkt einen der folgenden Zauber ohne Materialkomponenten; Intelligenz ist die Zauberwirkungseigenschaft (Zauber-SG 27). Beliebig: Magie bannen, Erschaffen. 3/Tag: Hellsehen, Botschaft, Kraftwand. 1/Tag: Antimagie-Feld, Prismatische Wand, Schwerkraft umkehren. 1/Jahr: Wunsch."
      },
      {
        name: "Epische Resistenz",
        beschreibung: "Der Algorithmus wählt einen Zustand, Zauber oder anderen Effekt, der ihn derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihm. Er kann diese Epische Aktion auch dann verwenden, wenn er anderweitig keine Aktionen ausführen kann, seine Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt seine Spielwerte verändert."
      }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Die Herzogin",
    art: "Aberration",
    unterart: "NPC",
    groesse: "Gigantisch",
    gesinnung: "Neutral böse",
    cr: 18,
    xp: 20000,
    rk: 19,
    ruestungstyp: "natürliche Rüstung",
    tp: 87,
    tp_wuerfel: "6W20+24",
    bewegung: { "Gehen": "3 m", "Schwimmen": "18 m" },
    attribute: { STR: 22, DEX: 10, CON: 18, INT: 21, WIS: 17, CHA: 24 },
    rettungswuerfe: { KON: 9, INT: 10, WEI: 8, CHA: 12 },
    fertigkeiten: {},
    schadensresistenzen: ["Säure", "Nekrotisch", "Gift", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert"],
    sinne: ["Wahres Sehen 36 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Telepathie 36 m"],
    umgebung: ["Gewässer", "Unterirdisch"],
    bild: "drakkenheim/die_herzogin.png",
    beschreibung: [
      "Die Herzogin ist das uralte Herz der Tiefen-Elenden, ein gewaltiges aberrantes Wesen, das in den versunkenen Ruinen unter Drakkenheim thront. Sie zieht die vom Dunst korrumpierten Kreaturen durch Telepathie in ihren Dienst und formt sie zu ihrer persönlichen Armee.",
      "Legenden besagen, sie sei einst eine mächtige Adelige der Stadt gewesen, die sich dem Dunst freiwillig ergab, um Macht zu gewinnen. Was auch immer ihre Vergangenheit gewesen sein mag, das Wesen, das heute als Herzogin bekannt ist, hat nichts Menschliches mehr an sich. Ihre Trefferpunkte erhöhen sich um 87 (6W20+24) für jeden anwesenden Spielercharakter."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Die Herzogin kann sowohl Luft als auch Wasser atmen." },
      { name: "Allwissende Telepathie", beschreibung: "Die Herzogin kann telepathisch mit jeder Kreatur kommunizieren, die sie innerhalb von 36 m sehen kann, in jeder Sprache, die sie kennt." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [
      { name: "Bauernopfer", beschreibung: "Auslöser: Die Herzogin wird von einem Angriff getroffen. Reaktion – Sie wählt einen Tiefen-Elender innerhalb von 9 m, den sie sehen kann. Diese Kreatur erleidet den gesamten Schaden anstelle der Herzogin." }
    ],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Die Herzogin agiert immer bei Initiativewert 20. In ihrem Zug bewegt sie sich normal und interagiert mit Gegenständen, führt aber weder Aktion noch Bonusaktion aus, außer sie wird durch einen Effekt dazu gezwungen. Stattdessen führt sie am Ende jedes Zuges eines Spielercharakters eine der folgenden epischen Aktionen aus." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +11 zum Treffen, Reichweite 3 m. Treffer: 28 (4W10+6) Stichschaden, und das Ziel erhält den Zustand Gepackt (Entkommen SG 18)." },
      { name: "Tentakel", beschreibung: "Nahkampf-Angriffswurf: +11 zum Treffen, Reichweite 9 m. Treffer: 19 (3W8+6) Wuchtschaden, und das Ziel erhält den Zustand Gepackt (Entkommen SG 18). Die Herzogin kann bis zu vier Kreaturen gleichzeitig mit Tentakeln packen." },
      { name: "Schleudern", beschreibung: "Die Herzogin schleudert eine von ihr gepackte Kreatur auf einen Punkt innerhalb von 18 m. Das Packen endet. Geschicklichkeits-Rettungswurf: SG 19 für jede Kreatur in einer 3-Meter-Ausstrahlung um den Aufprallpunkt (die geschleuderte Kreatur scheitert automatisch). Misserfolg: 28 (4W10+6) Wuchtschaden und der Zustand Liegend." },
      { name: "Zaubersprüche", beschreibung: "Die Herzogin wirkt einen der folgenden Zauber, benötigt keine Materialkomponenten und verwendet Charisma als Zauberfähigkeit (Zauberrettungswurf-SG 20, +12 auf Zauberangriffe): Nach Belieben: Gedanken lesen. 3/Tag: Telekinese. 1/Tag: Massensuggestion." },
      { name: "Tiefen-Herrschaft (1/Runde)", beschreibung: "Weisheits-Rettungswurf: SG 20 für eine Kreatur, die die Herzogin innerhalb von 36 m sehen kann. Misserfolg: Die Kreatur ist für 1 Minute bezaubert und muss die Befehle der Herzogin befolgen. Erfolg: Die Kreatur ist für 24 Stunden immun gegen diese Fähigkeit." },
      { name: "Ruf der Tiefe (1/Runde)", beschreibung: "Die Herzogin sendet einen psychischen Ruf aus. Alle Tiefen-Elender innerhalb von 36 m, die sie wahrnehmen können, können ihre Reaktion einsetzen, um sich bis zu ihrer Bewegungsrate zu bewegen und einen Angriff mit Vorteil auszuführen." },
      { name: "Epische Resistenz", beschreibung: "Die Herzogin wählt einen Zustand, Zauber oder Effekt, der sie gerade betrifft, und würfelt 1W20. Bei 11+ endet dieser Effekt bei ihr. Diese Aktion kann auch eingesetzt werden, wenn sie normalerweise keine Aktionen durchführen könnte." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Drakkenheimer Kanalkrokodil",
    art: "Monstrosität",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 12,
    xp: 8400,
    rk: 18,
    ruestungstyp: null,
    tp: 195,
    tp_wuerfel: "17W12+85",
    bewegung: { "Gehen": "12 m", "Schwimmen": "24 m" },
    attribute: { STR: 25, DEX: 18, CON: 21, INT: 8, WIS: 15, CHA: 5 },
    rettungswuerfe: { STR: 11, KON: 9, WEI: 6 },
    fertigkeiten: { "Wahrnehmung": 10, "Heimlichkeit": 12 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 20,
    sprachen: [],
    umgebung: ["Gewässer", "Ruinen", "Stadt"],
    bild: "drakkenheim/drakkenheimer_kanalkrokodil.png",
    beschreibung: [
      "Aus den stinkenden Kanalwässern taucht ein schrecklicher Alligator auf, der beinahe fünfzehn Meter lang ist. Ein gezackter Kamm aus Delirium verläuft seinen Rücken entlang und endet in einer unheilsamen Krone auf seinem Kopf, während fahle Haut seine oktarinfarbenen Leuchtaugen einfasst. Eine dicke, purpurne, tentakelartige Zunge wellt sich aus dem zahnbestückten Rachen. Starke, stämmige Beine tragen seinen narbigen Körper, Zeuge unzähliger Kämpfe in den Ruinen.",
      "Einige Kreaturen scheinen weniger von der Kontamination betroffen zu sein, oder haben schlicht das Glück gehabt, nur an Größe und Wildheit zuzunehmen. Es wird vermutet, dass Reptilien widerstandsfähiger gegen unkontrollierbare Mutationen sind als andere Kreaturen. Der gelegentliche Alligator, der den Drann-Fluss hochkommt, war schon immer ein Problem, doch nun werden Berichte über bösartige Reptilien immer bizarrer und erschreckender.",
      "Gerüchte sprechen von einem massigen Krokodil, das in den Abwasserkanälen lebt, mit Sichtungen im Drann-Fluss oder hallenden Brüllen aus Kanalrosten. Niemand, der nah genug herangekommen war, um seine Existenz zu bestätigen, hat bisher überlebt. Einige berichten von halb eingetauchten Formen, die durch Kanaleinlässe gleiten und manchmal für große Schildkröten gehalten werden. Andere erzählen von einem großen Biest, das durch Rohre unter ihren Füßen grollt. In den Tavernen von Emberwood hat die Kreatur den Spitznamen 'die Graue Königin' erhalten, aufgrund ihrer blassen Haut und der Delirium-Krone. Andere nennen sie den Teufel des Drann oder das Große Krokodil. Einige vermuten sogar, dass mehrere riesige Krokodile in den schmutzigen Gewässern leben."
    ],
    besonderheiten: [
      {
        name: "Kontaminierte Regeneration",
        beschreibung: "Das Kanalkrokodil regeneriert zu Beginn seines Zuges 10 Trefferpunkte, solange es sich in kontaminiertem Wasser befindet. Das Kanalkrokodil stirbt nur, wenn es seinen Zug mit 0 Trefferpunkten beginnt und nicht regeneriert."
      },
      {
        name: "Amphibischer Sprung",
        beschreibung: "Wenn das Kanalkrokodil in seinem Zug mindestens 6 m schwimmt, kann es bis zu 18 m weit- oder hochspringen. Wenn es diesen Sprung innerhalb von 1,5 m einer Kreatur beendet, hat es Vorteil auf seinen nächsten Zermalmenden-Biss-Angriff gegen diese Kreatur, und dieser Angriff verursacht zusätzlich 40 (9W8) Stichschaden."
      },
      {
        name: "Räuberische Tarnung",
        beschreibung: "Das Kanalkrokodil hat Vorteil auf Geschicklichkeits-Heimlichkeitswürfe, um sich im Wasser zu verstecken."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Das Kanalkrokodil führt zwei Angriffe aus. Es kann nicht gleichzeitig einen Zermalmenden-Biss-Angriff und einen Schwanzschlag-Angriff gegen dasselbe Ziel einsetzen."
      },
      {
        name: "Zermalmender Biss",
        beschreibung: "Nahkampf-Angriffswurf: +11, Reichweite 4,5 m. Treffer: 33 (4W12 + 7) Stichschaden. Wenn das Ziel Groß oder kleiner ist, erhält es den Zustand Gepackt (Entkommen SG 19). Solange es Gepackt ist, hat das Ziel den Zustand Festgehalten, und das Kanalkrokodil kann seinen Zermalmenden Biss nicht gegen ein anderes Ziel einsetzen."
      },
      {
        name: "Schwanzschlag",
        beschreibung: "Nahkampf-Angriffswurf: +11, Reichweite 4,5 m. Treffer: 25 (4W8 + 7) Wuchtschaden, und das Ziel wird 6 m vom Kanalkrokodil weggestoßen und erhält den Zustand Liegend."
      },
      {
        name: "Todesrolle",
        beschreibung: "Nahkampf-Angriffswurf: +11, Reichweite 4,5 m, eine vom Kanalkrokodil gepackte Kreatur. Treffer: 33 (4W12 + 7) Stichschaden. Stärke-Rettungswurf: SG 19. Misserfolg: Das Ziel erhält die Zustände Getaumelt und Hilflos, bis es dem Griff des Kanalkrokodils entkommen ist."
      }
    ],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Untertauchen",
        beschreibung: "Auslöser: Das Kanalkrokodil erleidet Schaden, während es sich im Wasser befindet. Reaktion: Das Kanalkrokodil schwimmt die Hälfte seiner Bewegungsrate und verwendet die Verstecken-Aktion."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Druide des Blutigen Ritus",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 12,
    xp: 8400,
    rk: 17,
    ruestungstyp: "Fellrüstung und Schild",
    tp: 187,
    tp_wuerfel: "25W8+75",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 14, DEX: 16, CON: 16, INT: 15, WIS: 20, CHA: 15 },
    rettungswuerfe: { GES: 7, KON: 7, WEI: 9 },
    fertigkeiten: { "Naturkunde": 6, "Überleben": 9 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 15,
    sprachen: ["Druidisch sowie drei weitere Sprachen"],
    umgebung: ["Wald", "Ruinen", "Höhle"],
    bild: "drakkenheim/druide_des_blutigen_ritus.png",
    beschreibung: [
      "Diese Druiden sind älter als selbst die Vampirfamilien. Die wenigen, die noch existieren, stammen aus keiner vampirischen Blutlinie – sie sind die uralten Blutdruiden, die die Rituale durchführten, durch die Vladimir von Drakken erschaffen wurde. Nur wenige sind noch am Leben, und jene, die es sind, leben zurückgezogen und verborgen.",
      "Ihre alten Blutriten verliehen ihnen ein verfluchtes ewiges Leben, und jene, die noch durch die Welt wandern, haben sich in etwas halb Lebendes verwandelt. Sie sind nicht dasselbe wie Vampire und nicht an deren Schwächen gebunden; sie sind der Dunkelheit verpflichtet, die sie nährt, und nutzen Blut, um ihre Rituale und Magie zu befeuern. Ihre Kräfte sind ein streng gehütetes Geheimnis, das nur wenige je bezeugt haben.",
      "Manche dieser dunklen Druiden sahen Vladimir als Propheten, eine erfüllte Bestimmung. Andere leben in ewiger Reue darüber, ihn verwandelt zu haben, und sehen sich selbst als zu einer Ewigkeit des Versteckens in der Dunkelheit Verdammte."
    ],
    besonderheiten: [
      {
        name: "Blutopfer",
        beschreibung: "Eine Kreatur mit dem Zustand Festgehalten erhält außerdem den Zustand Hilflos gegenüber den Angriffen des Druiden."
      },
      {
        name: "Plasma-Aufnahme",
        beschreibung: "Jedes Mal, wenn eine Kreatur innerhalb von 9 m des Druiden Schaden durch den Zustand Blutend erleidet, regeneriert der Druide Trefferpunkte in Höhe des verursachten Schadens."
      },
      {
        name: "Regeneration",
        beschreibung: "Der Druide regeneriert zu Beginn jedes seiner Züge 10 Trefferpunkte, sofern er mindestens 1 Trefferpunkt hat und sich nicht im Sonnenlicht oder in fließendem Wasser befindet. Erleidet er Strahlungsschaden oder Schaden durch Weihwasser, setzt diese Regeneration bis zum Beginn seines nächsten Zuges aus."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Der Druide führt drei Angriffe durch. Er kann einen dieser Angriffe durch Entkräftender Biss oder Zauberei ersetzen."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +7, Reichweite 1,5 m, ein Ziel. Treffer: 9 (2W4+4) Hiebschaden. Ist das Ziel Mittelgroß oder kleiner, erhält es den Zustand Gepackt (Entkommen SG 15)."
      },
      {
        name: "Blutdornpeitsche",
        beschreibung: "Nahkampf-Angriffswurf: +9, Reichweite 9 m, ein Ziel. Treffer: 17 (3W8+5) Nekrotischer Schaden, und das Ziel erhält den Zustand Blutend (4W4)."
      },
      {
        name: "Entkräftender Biss",
        beschreibung: "Konstitutions-Rettungswurf: SG 17, eine Kreatur innerhalb von 1,5 m, die willig ist oder den Zustand Gepackt, Bewegungsunfähig oder Festgehalten hat. Misserfolg: 14 (3W6+4) Nekrotischer Schaden, und das Ziel erhält den Zustand Geschwächt (Rettungswurf zum Beenden)."
      },
      {
        name: "Blutwurzeln (Aufladen 5–6)",
        beschreibung: "Geschicklichkeits-Rettungswurf: SG 17 für jede Kreatur in einer 9-Meter-Ausstrahlung, die vom Druiden ausgeht. Misserfolg: 21 (6W6) Stichschaden, und das Ziel erhält den Zustand Festgehalten (Rettungswurf zum Beenden). Erfolg: Nur halber Schaden."
      },
      {
        name: "Zauberei",
        beschreibung: "Der Druide wirkt einen seiner vorbereiteten Zauber. Zauberwirk-Eigenschaft: Weisheit (SG 17, +9 zum Treffen). Beliebig: Druidenzauber. 2/Tag: Magie brechen, Tier beherrschen, Verstricken, Feenlicht, Spurlos gehen, Dornenfeld. 1/Tag: Antilebens-Hülle, Seuche, Untote erschaffen."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Dunkler Beichtvater",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 9,
    xp: 5000,
    rk: 18,
    ruestungstyp: "Plattenrüstung",
    tp: 153,
    tp_wuerfel: "18W8+72",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 13, DEX: 15, CON: 18, INT: 13, WIS: 18, CHA: 15 },
    rettungswuerfe: { KON: 8, WEI: 8 },
    fertigkeiten: { "Täuschung": 6, "Einsicht": 8, "Überzeugung": 6, "Religion": 5 },
    schadensresistenzen: ["Nekrotisch", "Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 14,
    sprachen: ["Gemeinsprache", "eine weitere Sprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/dunkler_beichtvater.png",
    beschreibung: [
      "Dunkle Beichtväter sind die unheiligen Priester eines verderbten Glaubens, der sich in den Ruinen Drakkenheims ausbreitet. Einst waren sie Geistliche einer rechtschaffenen Gottheit, doch das Delirium korrumpierte ihren Glauben und verwandelte sie in vampirische Untoter, die lebendiges Blut verzehren.",
      "Diese düsteren Gestalten bewahren äußerlich die Form ihrer früheren Identität – Plattenrüstung, Heilige Symbole, feierliche Gesten – doch dienen sie nun einer Dunkelheit, die ihr Fleisch aufgezehrt und ihren Geist zersetzt hat. Sie suchen Anhänger unter den Verzweifelten und Verlorenen der Stadt und bieten falsche Heilung und Schutz im Austausch für blinde Ergebenheit.",
      "Der Dunkle Beichtvater verfügt über vampirische Regeneration und kann Wunden durch das Aussaugen von Blut heilen. Er ist ein mächtiger Zauberwirker und nutzt seine übernatürlichen Kräfte, um Feinde zu blenden und zu bestrafen."
    ],
    besonderheiten: [
      {
        name: "Regeneration",
        beschreibung: "Der Dunkle Beichtvater regeneriert zu Beginn jedes seiner Züge 10 Trefferpunkte, sofern er mindestens 1 Trefferpunkt hat. Erleidet er Strahlungsschaden, setzt diese Regeneration bis zum Beginn seines nächsten Zuges aus. Stirbt der Dunkle Beichtvater, steht er nicht wieder auf."
      },
      {
        name: "Spinnenklettern",
        beschreibung: "Der Dunkle Beichtvater kann schwierige Oberflächen erklimmen, einschließlich kopfüber an Decken, ohne einen Fertigkeitswurf ablegen zu müssen."
      },
      {
        name: "Vampirschwächen",
        beschreibung: "Der Dunkle Beichtvater hat folgende Schwächen: Fließendes Wasser – Er erleidet 20 Säureschaden, wenn er seinen Zug in fließendem Wasser endet. Sonnenlicht – Er hat Nachteil auf Angriffswürfe und Weisheitswürfe (Wahrnehmung), während er im Sonnenlicht steht, und erleidet 20 Strahlungsschaden, wenn er seinen Zug im Sonnenlicht endet."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Der Dunkle Beichtvater führt drei Angriffe durch. Er kann einen dieser Angriffe durch Biss, Unheiliges Licht oder Zauberei ersetzen."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +6, Reichweite 1,5 m, ein Ziel. Treffer: 7 (2W4+2) Hiebschaden. Ist das Ziel Mittelgroß oder kleiner, erhält es den Zustand Gepackt (Entkommen SG 15)."
      },
      {
        name: "Geisterhammer",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +8, Reichweite 1,5 m oder 36 m, ein Ziel. Treffer: 17 (3W8+4) Kraftschaden, und das Ziel wird 3 m in eine Richtung nach Wahl des Dunklen Beichtvaters zurückgestoßen."
      },
      {
        name: "Unheiliges Licht (Aufladen 5–6)",
        beschreibung: "Geschicklichkeits-Rettungswurf: SG 16 für jede Kreatur in einem Zylinder mit 3 m Radius und 12 m Höhe, zentriert auf einen Punkt innerhalb von 36 m. Misserfolg: 14 (4W6) Nekrotischer Schaden plus 14 (4W6) Feuerschaden, und das Ziel erhält den Zustand Erschüttert bis zum Ende seines nächsten Zuges. Erfolg: Nur halber Schaden, kein Erschüttert."
      },
      {
        name: "Zauberei",
        beschreibung: "Der Dunkle Beichtvater wirkt einen seiner vorbereiteten Zauber. Zauberwirk-Eigenschaft: Weisheit (SG 17, +9 zum Treffen). Beliebig: Führung, Thaumaturgie. 2/Tag: Bann, Dunkelheit, Verkleidung selbst. 1/Tag: Magie brechen, Geisterwächter."
      },
      {
        name: "Biss",
        beschreibung: "Nahkampf-Angriffswurf: +6, Reichweite 1,5 m, eine willige Kreatur oder eine Kreatur, die gepackt, bewegungsunfähig oder bewusstlos ist. Konstitutions-Rettungswurf: SG 16. Misserfolg: 14 (3W6+2) Nekrotischer Schaden. Erfolg: Halber Schaden. Der Dunkle Beichtvater regeneriert Trefferpunkte in Höhe des verursachten nekrotischen Schadens."
      }
    ],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Blutiger Tadel",
        beschreibung: "Auslöser: Eine Kreatur innerhalb von 9 m trifft den Dunklen Beichtvater mit einem Angriff. Reaktion: Konstitutions-Rettungswurf: SG 17 für den Angreifer. Misserfolg: 18 (4W8) Nekrotischer Schaden, und das Ziel erhält den Zustand Blutend (4W4)."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Dunkler Gewächs-Taumler",
    art: "Pflanze",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: null,
    tp: 90,
    tp_wuerfel: "12W8+36",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 17, DEX: 13, CON: 16, INT: 5, WIS: 13, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: ["Feuer"],
    zustandsimmunitaeten: ["Geblendet", "Vergiftet"],
    sinne: ["Blindsicht 9 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Wald"],
    bild: "drakkenheim/dunkler_gewaechs_taumler.png",
    beschreibung: [
      "Aus den Schatten taumelt ein hagerer Humanoid mit blassem Fleisch und gebeugter Gestalt. Ranken und Äste ragen aus seinem weit aufgerissenen Mund und durchbohren sein Fleisch am gesamten Körper. Blüten entsprießen diesen Auswüchsen und erblühen in irisierendem Neonglanz. Ein Geruch nach süßem Zucker und verwesendem Fleisch erfüllt die Luft, und Flüstern beginnen von ihm auszugehen, obwohl der Mund der Kreatur sich nicht bewegt.",
      "Manchmal, wenn der Körper eines mit Dunklem Gewächs Infizierten im Moment seines Todes aufbricht, kollabiert der Körper nicht sofort und verwest nicht. Stattdessen taumelt die Kreatur weiter umher, ihr Körper noch intakt, aber mit Ranken und dornigen schwarzen Ästen, die aus ihren Augenhöhlen, ihrem Mund und ihrem Fleisch hervorbrechen – ihr Körper nun eine schützende Hülle für die Pflanze im Inneren."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Dunkle Gewächs-Taumler führt zwei Klauen-Angriffe und einen Infektiösen-Biss-Angriff aus."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +6, Reichweite 1,5 m. Treffer: 10 (2W6 + 3) Hiebschaden."
      },
      {
        name: "Infektiöser Biss",
        beschreibung: "Nahkampf-Angriffswurf: +6, Reichweite 1,5 m. Treffer: 10 (2W6 + 3) nekrotischer Schaden. Wenn das Ziel eine Kreatur ist, ist es folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 14. Misserfolg: Das Ziel wird mit einer Krankheit namens Dunkler Verfall infiziert. Anstatt in seinem Zug normal zu handeln, muss das Ziel sich auf die nächste Kreatur zubewegen, die nicht mit Dunklem Verfall infiziert ist, und einen Nahkampfangriff gegen sie ausführen. Wenn der Angriff trifft, muss das Ziel dieses Angriffs ebenfalls einen Rettungswurf gegen Dunklen Verfall ablegen. Am Ende jedes seiner Züge wiederholt das Ziel den Rettungswurf. Bei weiteren Misserfolgen erhält das Ziel eine Kontaminationsstufe. Beim dritten Erfolg endet die Krankheit. Eine infizierte Kreatur, die stirbt oder eine Monströse Verwandlung durchläuft, wird zu einem Dunklen Gewächs-Taumler. Ein Geringerer-Wiederherstellungs-Zauber oder ähnliche Magie, die Krankheiten entfernt, beendet den Dunklen Verfall, ebenso wie Magie, die Kontaminationsstufen entfernt."
      }
    ],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Jäher Verfall",
        beschreibung: "Auslöser: Der Dunkle Gewächs-Taumler fällt auf 0 Trefferpunkte und hat in dieser Runde keinen Feuerschaden erlitten. Reaktion: Der Dunkle Gewächs-Taumler erschafft ein Dunkles Gewächs in seinem Feld."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Dunkles Gewächs",
    art: "Pflanze",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 13,
    ruestungstyp: null,
    tp: 120,
    tp_wuerfel: "16W8+48",
    bewegung: { "Gehen": "0 m" },
    attribute: { STR: 19, DEX: 8, CON: 17, INT: 3, WIS: 11, CHA: 3 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Kälte", "Nekrotisch"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: ["Feuer"],
    zustandsimmunitaeten: ["Gepackt", "Vergiftet", "Liegend", "Festgehalten"],
    sinne: ["Zittersinn 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt", "Wald"],
    bild: "drakkenheim/dunkles_gewaechs.png",
    beschreibung: [
      "Auf einer Ruinenmauer liegt eine ausgebreitete Leiche. Eine chaotische Masse pechschwarzer Dornen und Ranken strömt aus ihrem Torso und klammert sich an das nahe Mauerwerk. Äste haben ihre Form gesprengt, und ihr Hals bricht in eine weitere Masse pflanzlicher Substanz aus. Der Schädel ist vom Körper getrennt, der Kiefer aufgehängt und hängt in einem schrecklichen Ausdruck herab, festgehalten von den sich windenden Ranken. Überall in diesem Dunklen Gewächs erblühen Blumen in irisierendem Neonglanz, und der Geruch von süßem Pollen und verwesendem Fleisch erfüllt die Luft. Sanfte Flüstern einer fernen, seltsam vertrauten und lockenden Stimme sind zu hören.",
      "Kontamination lässt die meisten Pflanzen verwelken und absterben, doch einige gedeihen darin, indem sie Wasser und Delirium aus dem Boden aufnehmen und sich zu tödlicher Flora mutieren. In Drakkenheims städtischer Einöde sind geeignete fruchtbare Bodenflecken außerhalb des Königinnenpark-Gartens rar, was eine kreative Anpassung zur Verbreitung notwendig macht. Diese Dunklen Gewächse wurzeln in den Körpern von Kreaturen durch ihre infektiösen, Delirium-durchtränkten Sporen. Die Sporen werden von ihren blühenden Blüten ausgestoßen und treiben lautlos durch die Luft, bis sie durch die Ohren, den Mund oder die Nase in den Körper einer anderen Kreatur eindringen. Einmal im Inneren können diese Sporen eine Zeit lang ruhend bleiben und ihren Wirt langsam mit inneren Mutationen kontaminieren, die Fleisch und Knochen von innen heraus zersetzen. Wenn die Kreatur der Kontamination erliegt oder mit den Sporen in ihr stirbt, erwacht die Pflanze, verzehrt die inneren Organe und sproßt plötzlich und gewaltsam.",
      "Ein Apotheker berichtet von einem Fall, in dem ein Ritter, der von einer Mission in die Innenstadt zurückgekehrt war, relativ unversehrt ankam – abgesehen von einem Ausflug in die Gärten, bei dem ein Hauch von etwas, das er für Pollen seltsamer, irisierender Blumen hielt, in seine Augen geraten war. Nach seiner Rückkehr klagte der Ritter über Magenkrämpfe, Übelkeit und Kopfschmerzen, bevor er schließlich vor Schmerzen das Bewusstsein verlor. Der Apotheker führte eine Notoperation durch – und musste erleben, wie ihm die Eingeweide wie eine Salve fleischiger, dornenbedeckter Ranken entgegenbrachen, die ihn zu erwürgen versuchten. Die Eingeweide des Ritters waren vollständig durch pflanzliche Substanz ersetzt worden, die sich mit seinem Darm verschmolzen hatte."
    ],
    besonderheiten: [
      {
        name: "Mimikry",
        beschreibung: "Das Dunkle Gewächs kann alle Geräusche imitieren, die es gehört hat, einschließlich Stimmen. Eine Kreatur, die die Geräusche hört, kann mit einem erfolgreichen Weisheits-Einsichtswurf (SG 14) erkennen, dass es sich um Imitationen handelt."
      },
      {
        name: "Regeneration",
        beschreibung: "Das Dunkle Gewächs regeneriert zu Beginn seines Zuges 10 Trefferpunkte. Wenn das Dunkle Gewächs Feuer- oder Strahlenschaden erleidet, funktioniert dieses Merkmal zu Beginn des nächsten Zuges des Dunklen Gewächses nicht. Das Dunkle Gewächs stirbt nur, wenn es seinen Zug mit 0 Trefferpunkten beginnt und nicht regeneriert."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Das Dunkle Gewächs führt drei Angriffe aus: zwei mit Fesselnden Ranken und einen mit Infektionssporen."
      },
      {
        name: "Fesselnde Ranken",
        beschreibung: "Nahkampf-Angriffswurf: +7, Reichweite 9 m. Treffer: 8 (1W8 + 4) Stichschaden, und das Ziel erhält den Zustand Gepackt (Entkommen SG 15) sowie den Zustand Festgehalten, bis das Packen endet."
      },
      {
        name: "Infektionssporen",
        beschreibung: "Fernkampf-Angriffswurf: +7, Reichweite 18 m. Treffer: 18 (4W6 + 4) nekrotischer Schaden. Wenn das Ziel eine Kreatur ist, ist es folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 14. Misserfolg: Das Ziel wird mit einer Krankheit namens Dunkler Verfall infiziert. Anstatt in seinem Zug normal zu handeln, muss das Ziel sich auf die nächste Kreatur zubewegen, die nicht mit Dunklem Verfall infiziert ist, und einen Nahkampfangriff gegen sie ausführen. Wenn der Angriff trifft, muss das Ziel dieses Angriffs ebenfalls einen Rettungswurf gegen Dunklen Verfall ablegen. Am Ende jedes seiner Züge wiederholt das Ziel den Rettungswurf. Bei weiteren Misserfolgen erhält das Ziel eine Kontaminationsstufe. Beim dritten Erfolg endet die Krankheit. Eine infizierte Kreatur, die stirbt oder eine Monströse Verwandlung durchläuft, wird zu einem Dunklen Gewächs-Taumler. Ein Geringerer-Wiederherstellungs-Zauber oder ähnliche Magie, die Krankheiten entfernt, beendet den Dunklen Verfall, ebenso wie Magie, die Kontaminationsstufen entfernt."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Dunstblut-Vampir",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 3,
    xp: 700,
    rk: 14,
    ruestungstyp: null,
    tp: 45,
    tp_wuerfel: "6W8+18",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m" },
    attribute: { STR: 16, DEX: 15, CON: 16, INT: 8, WIS: 8, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Nekrotisch", "Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 9,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/dunstblut_vampir.png",
    beschreibung: [
      "Vampire besitzen eine angeborene Fähigkeit, Delirium-Kontamination durch das Trinken von Blut aufzunehmen und wieder abzugeben. Wenn ein Vampir das Blut einer kontaminierten Kreatur trinkt, nimmt er deren Kontamination in sich auf. Doch wenn ein kontaminierter Vampir genug Kontamination ansammelt, um eine Monströse Verwandlung auszulösen, wird er zum entarteten vampirischen Delirium-Bodensatz: einem Dunstblut-Vampir.",
      "Diese seltsame Wechselwirkung hat einige Vampire dazu verleitet, mit kontaminierter Magie zu experimentieren – vielleicht als Abkürzung zur Macht eines aufgestiegenen Vampirs. Gräfin Constance Kleinkessel hat die Forschung ihres Apothekers Deidrick Mors gefördert und zählt zahllose Versuchspersonen zu ihrem Bestand, die sie in Kesselholm in Vampirbrut verwandelte und in Särgen unter ihrem Schloss kettete.",
      "Dunstblut-Vampire sind mit Kontamination durchdrungen und greifen blindlings jede Kreatur an, auf die sie gelenkt werden. Ihr Biss kann Kontamination auf Feinde übertragen, während sie diese zerfleischen. Sie haben nicht die Vernunft, aus einem Kampf zu fliehen."
    ],
    besonderheiten: [
      {
        name: "Vollständig Kontaminiert",
        beschreibung: "Der Vampir ist immun gegen Kontamination und hat Vorteil auf Rettungswürfe gegen kontaminierte Zauber. Er kann kontaminierte Zauber wirken, ohne dabei Kontaminationsstufen zu erlangen."
      },
      {
        name: "Rudeltaktik",
        beschreibung: "Der Vampir hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn sich mindestens ein Verbündeter des Vampirs innerhalb von 1,5 m der Kreatur befindet und der Verbündete nicht den Zustand Bewegungsunfähig hat."
      },
      {
        name: "Spinnenklettern",
        beschreibung: "Der Vampir kann schwierige Oberflächen erklimmen, einschließlich kopfüber an Decken, ohne einen Fertigkeitswurf ablegen zu müssen."
      },
      {
        name: "Vampirschwächen",
        beschreibung: "Der Vampir hat folgende Schwächen: Fließendes Wasser – Er erleidet 20 Säureschaden, wenn er seinen Zug in fließendem Wasser endet. Sonnenlicht – Er hat Nachteil auf Angriffswürfe und Weisheitswürfe (Wahrnehmung), während er im Sonnenlicht steht, und erleidet 20 Strahlungsschaden, wenn er seinen Zug im Sonnenlicht endet."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Der Vampir führt zwei Angriffe durch. Er kann einen dieser Angriffe durch Kontaminierter Biss ersetzen."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W4+5) Hiebschaden. Ist das Ziel Mittelgroß oder kleiner, erhält es den Zustand Gepackt (Entkommen SG 13)."
      },
      {
        name: "Kontaminierter Biss",
        beschreibung: "Konstitutions-Rettungswurf: SG 13, eine Kreatur innerhalb von 1,5 m, die willig ist oder den Zustand Gepackt, Bewegungsunfähig oder Festgehalten hat. Misserfolg: 17 (4W6+3) Nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Nur halber Schaden."
      },
      {
        name: "Delirium-Heilung",
        beschreibung: "Der Vampir berührt einen Delirium-Splitter und regeneriert 10 (3W6) Trefferpunkte. Nachdem der Vampir einen Delirium-Splitter auf diese Weise verwendet hat, kann er ihn für 24 Stunden nicht erneut auf diese Weise nutzen."
      }
    ],
    bonusaktionen: [
      {
        name: "Aggressiv",
        beschreibung: "Der Vampir bewegt sich bis zu seiner Bewegungsrate auf eine feindliche Kreatur zu, die er sehen kann."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Dunstfalter-Chrysalis",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 1,
    xp: 200,
    rk: 20,
    ruestungstyp: null,
    tp: 28,
    tp_wuerfel: "3W8+15",
    bewegung: { "Gehen": "0 m", "Klettern": "1,5 m" },
    attribute: { STR: 13, DEX: 1, CON: 20, INT: 1, WIS: 5, CHA: 3 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Gepackt", "Gelähmt", "Versteinert", "Liegend", "Festgehalten"],
    sinne: ["Blindsicht 9 m"],
    passiveWahrnehmung: 7,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/dunstfalter-chrysalis.png",
    beschreibung: [
      "Dicke silberne Fäden befestigen diesen wulstigen, leuchtenden Kokon an der Wand. Innerhalb seiner kristallinen Hülle pulsiert etwas mit unheimlichen, gesichtshaften Mustern – spektrale Visagen, die scheinbar schweigend keuchen und stöhnen.",
      "Sobald eine Dunstfalter-Raupe genug Delerium gefressen hat, sucht sie einen sicheren Ort, um sich in einen Schutzkokon einzuspinnen und die Verwandlung zum Erwachsenen zu beginnen. Gefüllt mit verdauten Kristallen, verstärken diese Kokons die Präsenz des Dunsts in der Nähe und schaffen eine wirksame natürliche Verteidigung für die sonst unbeweglichen und verletzlichen Kreaturen."
    ],
    besonderheiten: [
      { name: "Verankert", beschreibung: "Der Kokon ist fest verankert. Er kann nicht gezwungen werden, sich zu bewegen oder zu teleportieren, es sei denn, er wählt es." },
      { name: "Dunst-Aura", beschreibung: "Der Kokon erzeugt Tiefen Dunst in einer 9-Meter-Ausstrahlung, die das Gebiet leicht verdeckt. Eine Kreatur, die ihren Zug in diesem Bereich beginnt, ist folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 10. Fehlschlag: Das Ziel erhält eine Kontaminationsstufe. Fehlschlag oder Erfolg: 10 (3W6) Nekrotischer Schaden." }
    ],
    aktionen: [
      { name: "Verhärten", beschreibung: "Der Kokon erhält 7 (2W6) Trefferpunkte zurück und erhält etwaige überschüssige Heilung als temporäre Trefferpunkte." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Plötzliches Schlüpfen", beschreibung: "Auslöser: Der Kokon wird auf 0 Trefferpunkte reduziert. Reaktion – Würfele 1W6. Bei einer 6 schlüpft ein Ausgewachsener Dunstfalter aus dem Kokon und teilt dessen Initiativewert. Bei 1–5 ergießt sich widerliches Sekret aus dem Kokon, und jede Kreatur innerhalb von 1,5 m ist folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 15. Fehlschlag: Das Ziel erhält eine Kontaminationsstufe. Fehlschlag oder Erfolg: 10 (3W6) Säureschaden plus 10 (3W6) Nekrotischer Schaden." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Dunstfalter-Raupe",
    art: "Aberration",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 1,
    xp: 200,
    rk: 11,
    ruestungstyp: null,
    tp: 27,
    tp_wuerfel: "6W6+6",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m" },
    attribute: { STR: 13, DEX: 8, CON: 13, INT: 1, WIS: 10, CHA: 3 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/dunstfalter-raupe.png",
    beschreibung: [
      "Der undulerende Körper dieser monströsen Raupe ist mit scharfen, lumineszenten Stacheln besetzt. Die Haut zeigt ein verstörendes Muster aus Lila und Grün, das von einem unheimlichen biolumineszenten Leuchten durchpulst wird.",
      "Die Larvenform des Dunstfalters ist eine widerliche, haarige Raupe. Mit ihren merkwürdigen Mundwerkzeugen fressen Dunstfalter-Raupen langsam Delerium-Kristalle, indem sie einen speziell angepassten Speichel absondern, der kristallisiertes Delerium in Schlamm verwandelt. Diesen Schlamm trinken die Raupen und metabolisieren ihn zu einem Staub, der im Erwachsenenstadium ihre Flügel bedeckt."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +3, Reichweite 1,5 m. Treffer: 3 (1W4+1) Stichschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Dunst-Koloss",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 5,
    xp: 1100,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 95,
    tp_wuerfel: "10W10+40",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 21, DEX: 10, CON: 18, INT: 3, WIS: 6, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 8,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/dunst-koloss.png",
    beschreibung: [
      "Dieser massige Mutant überragt drei Meter Körpergröße, sein geschwollener Leib weit jenseits normaler menschlicher Proportionen aufgebläht. Wulstige Muskeln und geschwollene Venen pulsieren unter dünner, verfärbter Haut. Das Fleisch des Kolosses hat sich an mehreren Stellen aufgerissen, kaum in der Lage, die ausufernde Muskulatur seiner baumstammdicken Gliedmaßen und des breiten Torsos zu fassen. Der Kopf wirkt angesichts der Körpergröße seltsam klein, doch sein breites, flaches Gesicht trägt einen rasenden Ausdruck. Mit dumpfem Stampfen schreitet er auf euch zu, ballt seine riesigen Hände zur Kanonenkugelfaust und lässt ein grimmiges Brüllen hören, das seine gezackten Zahnreihen und die verlängerte Zunge enthüllt.",
      "Kontamination lässt Kreaturen oft drastisch an Größe und Muskelmasse zunehmen, bis sie eher an schwerfällige Oger oder Riesen erinnern. Delirium-Elende, die über normale menschliche Proportionen hinauswachsen, werden gemeinhin als Dunst-Kolosse bezeichnet. Diese schwerfälligen Gestalten können wie ihre elenden Artgenossen viele Variationen von Mutationen und Wucherungen aufweisen. Dunst-Kolosse sind weitaus gefährlicher und weit wilder als ein gewöhnlicher Elender."
    ],
    besonderheiten: [
      {
        name: "Mutantenresistenz",
        beschreibung: "Wenn Schaden den Koloss auf 0 Trefferpunkte reduziert, führt er einen Konstitutions-Rettungswurf (SG 5 plus erlittener Schaden) durch, sofern der Schaden kein Strahlungsschaden ist und kein kritischer Treffer war. Bei einem erfolgreichen Rettungswurf fällt der Koloss stattdessen auf 1 Trefferpunkt."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Dunst-Koloss führt zwei Schlag-Angriffe aus."
      },
      {
        name: "Schlag",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 1,5 m. Treffer: 18 (3W8 + 5) Wuchtschaden."
      },
      {
        name: "Niedertrampeln (Aufladen 5–6)",
        beschreibung: "Der Koloss bewegt sich bis zu seiner Bewegungsrate. Während dieser Bewegung kann er die Felder mittelgroßer und kleinerer Kreaturen sowie Strukturen aus Holz oder Stein mit weniger als 30 cm Dicke durchqueren. Wenn der Koloss dabei erstmals das Feld einer anderen Kreatur betritt, kann er einen Schlag-Angriff gegen diese Kreatur ausführen. Wenn das Ziel eine Kreatur ist, ist es folgendem Effekt ausgesetzt. Stärke-Rettungswurf: SG 16. Misserfolg: Das Ziel erhält den Zustand Liegend."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Dunst-Wicht",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: null,
    tp: 65,
    tp_wuerfel: "10W8+20",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 15, DEX: 14, CON: 15, INT: 10, WIS: 13, CHA: 17 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 3, "Heimlichkeit": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Erschöpfung", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Die Sprachen aus seinem früheren Leben"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/dunst-wicht.png",
    beschreibung: [
      "Die gedehnte Haut dieser untoten Krieger ist lila und blutunterlaufen. Gekleidet in zerbrochener Rüstung, markiert ein tiefer Schnitt in ihrer Brustplatte den letalen Schlag, der ihr Leben beendete. Eldrische Magie quillt aus der Wunde, und kontaminierte Magie sickert aus geschwärzten Klauen.",
      "Der Wahnsinn erwartet jene, die zu oft in die Ruinen vorwagen. Nicht einmal die Toten werden verschont, denn wer hier fällt, kann als Dunst-Wicht wiederauferstehen. Diese Untoten behalten einen Anschein ihres früheren Verstandes und ihrer Persönlichkeit – doch verzerrt durch Wahn, Verzweiflung und Bosheit. Viele glauben, große Helden zu sein, die das Gemeinvolk gegen Eindringlinge sammeln, sehen in ihrem Wahnsinn jedoch alle Humanoiden als Monster.",
      "Dunst-Wichte werden oft in Gruppen angetroffen, begleitet von einem Gefolge aus Dunstleichen und manchmal einem Arkangeist. In ihrem Wahn glauben sie, ihre Fähigkeit, Dunstleichen zu animieren, sei ein inspirierendes Schlachtkommando oder ein Ruf nach Verstärkung. Eine humanide Leiche ab Stufe 6 (oder Herausforderungsgrad 6) hat in den Ruinen täglich eine 10-prozentige Chance, als Dunst-Wicht aufzustehen."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Dunst-Wicht führt zwei Kontaminierter-Stoß-Angriffe aus." },
      { name: "Kontaminierter Stoß", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +5, Reichweite 1,5 m oder Reichweite 18 m. Treffer: 13 (3W6+3) Nekrotischer Schaden. Wenn das Ziel zum ersten Mal in einem Zug durch einen Kontaminierten Stoß getroffen wird, ist es folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 13. Fehlschlag: Das Ziel erhält eine Kontaminationsstufe." }
    ],
    bonusaktionen: [
      { name: "Dunstleiche animieren", beschreibung: "Der Dunst-Wicht belebt den Leichnam einer Dunstleiche wieder, die sie innerhalb von 18 m sehen kann. Die Dunstleiche wird mit 5 Trefferpunkten wiederbelebt und steht sofort auf." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Dunstleiche",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 0.25,
    xp: 50,
    rk: 10,
    ruestungstyp: null,
    tp: 7,
    tp_wuerfel: "1W8+3",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 13, DEX: 10, CON: 16, INT: 3, WIS: 6, CHA: 5 },
    rettungswuerfe: { WEI: 0 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 8,
    sprachen: ["Versteht die Sprachen aus seinem früheren Leben, kann aber nicht sprechen"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/dunstleiche.png",
    beschreibung: [
      "Die Toten in Drakkenheim werden durch den Dunst zu gesinnungslosen Zombies wiederbelebt. Ihre Wunden brodeln mit eldritscher Energie, und verrottetes Fleisch gleitet über ihre Knochen. Hohle schwarze Augen starren ins Leere, und klaffende Münder stöhnen in Qual, während Delerium-Scherben durch ihre Haut brechen.",
      "Die meisten Dunstleichen sind jene, die beim Einschlag des Meteors umkamen, während andere bei der Erkundung der Ruinen starben und dort verblieben. Mit der Zeit kristallisieren ihre Skelette langsam zu Delerium und brechen schließlich durch die Haut. Wenn eine Dunstleiche beschädigt wird, brechen ihre instabilen Kristalle und setzen kontaminierte Energie sowie Splitter frei.",
      "Dunstleichen ignorieren die meisten kontaminierten Monster, greifen jedoch alle anderen an. Sie essen ihre Opfer nicht, sondern warten, bis die Toten auferstehen und sich ihnen anschließen. Mächtigere Untote wie Dunst-Kreaturen und Arkangeister rekrutieren sie zu einer Art Miliz. Bleibt eine Leiche in den Ruinen ungestört, besteht täglich eine 10-prozentige Chance, dass sie als Dunstleiche aufsteht."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Schlag", beschreibung: "Nahkampf-Angriffswurf: +3, Reichweite 1,5 m. Treffer: 4 (1W6+1) Wuchtschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Todesberstung", beschreibung: "Auslöser: Die Dunstleiche wird durch Schaden, der kein Strahlungsschaden ist und kein kritischer Treffer ist, auf 0 Trefferpunkte reduziert. Reaktion – Konstitutions-Rettungswurf: SG 10 für jede Kreatur in einer 1,5-Meter-Ausstrahlung, die von der Dunstleiche ausgeht. Fehlschlag: 7 (2W6) Nekrotischer Schaden. Fehlschlag um 5 oder mehr: Das Ziel erhält eine Kontaminationsstufe." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Eichentroll",
    art: "Riese",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Neutral",
    cr: 6,
    xp: 2300,
    rk: 17,
    ruestungstyp: null,
    tp: 92,
    tp_wuerfel: "8W12+40",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 21, DEX: 15, CON: 20, INT: 11, WIS: 12, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: ["Feuer"],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 14,
    sprachen: ["Gemeinsprache", "Riesisch"],
    umgebung: ["Wald"],
    bild: "drakkenheim/eichentroll.png",
    beschreibung: [
      "Was zunächst wie ein großer Haufen Herbstlaub aussieht, erhebt sich und enthüllt ein groteskes geschnitztes Holzgesicht sowie knorrige Eichenholzklauen und -füße. Sein Körper ist in ein dichtes Blättergewand in Orangetönen, Gelb und Rot gehüllt. Wenn er sich vorwärtsbewegt, klingt es wie der Herbstwind durch einen üppigen Wald – seine Grunzer und Stöhner gleichen dem Knarren alter Äste, seine schweren Schritte dem Aufschlag hölzerner Zweige auf dem Waldboden.",
      "Die Eichentrolle durchstreifen die Wälder des Achtungwaldes, des Trowuchses und viele andere Wälder des Kontinents. Sie pflegen die Wälder und die Bäume und sprechen mit ihnen. Wenn Fremde durch ihr Territorium ziehen, verteidigen die Trolle ihre Bäume um jeden Preis."
    ],
    besonderheiten: [
      { name: "Regeneration", beschreibung: "Der Troll gewinnt zu Beginn jedes seiner Züge 10 Trefferpunkte zurück. Erleidet der Troll Feuerschaden, funktioniert diese Eigenschaft zu Beginn des nächsten Zuges des Trolls nicht. Der Troll stirbt nur, wenn er seinen Zug mit 0 Trefferpunkten beginnt und sich nicht regeneriert hat." },
      { name: "Waldsinne", beschreibung: "Der Troll kann den genauen Aufenthaltsort von Kreaturen und sich bewegenden Objekten innerhalb von 36 m orten, solange sowohl er als auch das Erkannte sich in einem natürlichen Waldgebiet befinden." },
      { name: "Blätterumhang", beschreibung: "Der Troll ist von Kopf bis Fuß in einen dichten Blätterumhang gehüllt. Solange er diesen Umhang besitzt, ist er immun gegen jeden Schaden außer Feuerschaden. Erleidet der Troll Feuerschaden, verbrennen alle Blätter und enthüllen den knorrigen Eichenholzkörper des Trolls – er verliert diese Eigenschaft." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Troll führt zwei Angriffe mit Knorriger Klaue und einen Bissangriff aus." },
      { name: "Knorrige Klaue", beschreibung: "Nahkampfangriffswurf: +8, Reichweite 3 m. Treffer: 12 (2W6+5) Hiebschaden." },
      { name: "Biss", beschreibung: "Nahkampfangriffswurf: +8, Reichweite 3 m. Treffer: 23 (4W8+5) Stichschaden, und wenn das Ziel eine Kreatur ist, erhält das Ziel den Zustand Blutend (2W8), da dicke Splitter durch das Fleisch der Kreatur stoßen und darin stecken bleiben." }
    ],
    bonusaktionen: [
      { name: "Üppiges Wachstum", beschreibung: "Der Troll erhält seinen Blätterumhang zurück." },
      { name: "Blätterausbruch", beschreibung: "Solange der Troll seinen Blätterumhang besitzt, kann er ihn in einem Ausbruch abstoßen und die Eigenschaft dabei verlieren. Geschicklichkeitsrettungswurf: SG 16, jede Kreatur innerhalb von 4,5 m des Trolls. Misserfolg: 7 (2W6) Hiebschaden und der Zustand Geblendet bis zum Ende ihres nächsten Zuges." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Eindringling",
    art: "Aberration",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Chaotisch neutral",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: null,
    tp: 70,
    tp_wuerfel: "20W6",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 8, DEX: 16, CON: 10, INT: 17, WIS: 14, CHA: 18 },
    rettungswuerfe: { GES: 6, INT: 6 },
    fertigkeiten: { "Arkane Kunde": 6, "Nachforschungen": 6, "Wahrnehmung": 5, "Heimlichkeit": 6 },
    schadensresistenzen: ["Kraft", "Nekrotisch", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Verhext"],
    sinne: ["Blindsicht 27 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Versteht alle Sprachen, kann aber nicht sprechen", "Telepathie 27 m (vermittelt einfache Emotionen)"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/eindringling.png",
    beschreibung: [
      "Eine Kreatur von schier unmöglichen Proportionen und Farben tritt durch einen Riss im Gewebe der Realität. Sie hat spindeldünne Gliedmaßen, die in drei scharfen Ziffern enden und an einem röhrenförmigen Körperstamm befestigt sind. In ihrer Form öffnet sich ein langer, zahnreicher Rachen, der mit kleinen, sich wellenden Tentakeln gesäumt ist. Ein leises gurgelndes Geräusch geht von der Kreatur aus. Du spürst Hunger – aber seltsamerweise erkennst du, dass es nicht dein eigener Hunger ist, sondern der Hunger der Kreatur, die auf dich zuklackert.",
      "Im Raum zwischen den Welten existieren Kreaturen, die sich von arkaner Macht ernähren und nach Magie jeder Art gieren, besonders nach der Macht, die überplanare Mächte ihren Sterblichen verleihen. Eine solche Kreatur, die von der Amethyst-Akademie identifiziert wurde, wird schlicht als Eindringling klassifiziert.",
      "Eindringlinge gieren nach Magie, besonders nach der arkanen Kraft von Hexenmeistern. Sie legen sich auf die Verbindung zwischen einem Hexenmeister und seiner Macht fest und versuchen, dieser Verbindung in den Materiellen Plan zu folgen, wo sie auf ihr Opfer warten. Eindringlinge erscheinen selten allein und bevorzugen Angriffe in Gruppen von drei oder mehr. Gelegentlich wurde beobachtet, wie sie untereinander zanken und um den größten Anteil der Beute kämpfen."
    ],
    besonderheiten: [
      { name: "Aberrante Eigenschaften", beschreibung: "Der Eindringling besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." },
      { name: "Vollständig kontaminiert", beschreibung: "Der Eindringling ist immun gegen Kontamination und hat Vorteil auf Rettungswürfe gegen kontaminierte Zauber. Der Eindringling kann kontaminierte Zauber wirken, obwohl er keine Kontaminationsstufen erhält." },
      { name: "Rudeltaktik", beschreibung: "Der Eindringling hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn mindestens einer seiner Verbündeten sich innerhalb von 1,5 m der Kreatur befindet und der Verbündete nicht den Zustand Handlungsunfähig hat." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Eindringling führt einen Spindeldünne-Klaue-Angriff und einen Saugmaul-Biss-Angriff aus. Wenn der Eindringling seit dem Ende seines letzten Zuges einen Zauber gesaugt hat, kann er stattdessen drei Spindeldünne-Klaue- oder Saugmaul-Biss-Angriffe ausführen." },
      { name: "Spindeldünne Klaue", beschreibung: "Konstitutions-Rettungswurf: SG 11, eine Kreatur innerhalb von 1,5 m. Misserfolg: 14 (4W6) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Nur halber Schaden." },
      { name: "Saugmaul-Biss", beschreibung: "Charisma-Rettungswurf: SG 15, eine Kreatur innerhalb von 1,5 m. Misserfolg: 14 (4W6) psychischer Schaden, und das Ziel erhält den Zustand Verwirrt (Rettungswurf zum Beenden), und der Eindringling gewinnt 10 (3W6) Trefferpunkte zurück. Erfolg: Nur halber Schaden." },
      { name: "Deliriumheilung", beschreibung: "Der Eindringling berührt einen Deliriumsplitter und gewinnt 10 (3W6) Trefferpunkte zurück. Sobald der Eindringling einen Deliriumsplitter auf diese Weise verwendet hat, kann dieser Splitter für 24 Stunden nicht erneut auf diese Weise verwendet werden." },
      { name: "Ebenenreise (1/Tag)", beschreibung: "Der Eindringling wirkt Ebenenreise nur auf sich selbst, ohne Komponenten zu benötigen, und verwendet Charisma als Zauberwirkungseigenschaft." }
    ],
    bonusaktionen: [
      { name: "Teleportieren", beschreibung: "Der Eindringling teleportiert sich in ein unbesetztes Feld innerhalb von 9 m, das er sehen kann." }
    ],
    reaktionen: [
      { name: "Zauber saugen", beschreibung: "Auslöser: Ein Zauber wird von einer Kreatur innerhalb von 18 m des Eindringlings gewirkt. Reaktion – Intelligenz-Rettungswurf: SG 14, diese Kreatur. Misserfolg: 11 (2W10) psychischer Schaden, und der Zauber schlägt fehl, aber die für den Zauber aufgewendeten Ressourcen werden nicht verbraucht." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Eingeweide-Elender",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: null,
    tp: 55,
    tp_wuerfel: "10W8+10",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 17, DEX: 15, CON: 13, INT: 12, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/eingeweide-elender.png",
    beschreibung: [
      "Der Bauch dieses Elenden ist weit aufgerissen, die Eingeweide quellen heraus und hängen frei. Inmitten der inneren Organe befinden sich mehrere Mutationen, darunter ein seltsamer Wuchs, der mit dem Darm verbunden ist und wie eine knollige Masse in Form eines mutierten, verzerrten Gesichts aussieht. Der Elende hält seine Gedärme wie einen Flegel in der Hand und bereitet sich darauf vor, sie auf dich zu schleudern.",
      "Der Eingeweide-Elende nutzt seine mutierten Organe als Waffe und hält stets Abstand zu anderen Kämpfern. Er schwenkt seinen Flegel über dem Kopf und bewacht oft andere Elende. Durch sein Reaktionsvermögen und seine schleudernden Eingeweide kann er Kreaturen abwehren, sobald sie sich nähern, und bevorzugt es stets, auf Distanz zu bleiben, um seine Feinde unaufhörlich zu bearbeiten."
    ],
    besonderheiten: [
      {
        name: "Reaktionsfreudig",
        beschreibung: "Der Eingeweide-Elende kann in jeder Runde des Kampfes eine Reaktion ausführen."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Eingeweide-Elende führt zwei Eingeweide-Flegel-Angriffe aus."
      },
      {
        name: "Eingeweide-Flegel",
        beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 4,5 m. Treffer: 12 (2W8 + 3) Wuchtschaden, und das Ziel erhält den Zustand Liegend."
      }
    ],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Schleudernde Eingeweide",
        beschreibung: "Auslöser: Eine Kreatur betritt ein Feld innerhalb von 4,5 m des Elenden. Reaktion – Der Elende führt einen Eingeweide-Flegel-Angriff gegen diese Kreatur aus."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Elender-Krieger der Tiefe",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 0.25,
    xp: 50,
    rk: 11,
    ruestungstyp: null,
    tp: 11,
    tp_wuerfel: "2W8+2",
    bewegung: { "Gehen": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 15, DEX: 12, CON: 13, INT: 10, WIS: 11, CHA: 11 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 3, "Täuschung": 2 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Gewässer", "Unterirdisch"],
    bild: "drakkenheim/elender-krieger_der_tiefe.png",
    beschreibung: [
      "Elende der Tiefe sind einstmals gewöhnliche Bewohner Drakkenheims, die vom Dunst korrumpiert und in die überfluteten Kanäle und unterirdischen Gewässer der Stadt getrieben wurden. Ihre Körper haben sich dem Wasser angepasst – Kiemen sprießen an ihren Hälsen, Schwimmhäute wachsen zwischen den Fingern, und ihre Augen starren blind und doch sehend in die Tiefe.",
      "Die Krieger bilden die breite Masse der Streitkräfte der Elenden der Tiefe. Sie stellen Fallen, hinterlegen Netze und überwältigen Eindringlinge mit schlichter Überzahl."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Krieger kann sowohl Luft als auch Wasser atmen." },
      { name: "Wässrige Tarnung", beschreibung: "Der Krieger hat Vorteil auf Geschicklichkeit (Heimlichkeit)-Proben, wenn er sich im Wasser befindet oder davon umgeben ist." },
      { name: "Fang des Tages (1/Zug)", beschreibung: "Einmal pro Zug verursacht der Krieger beim Treffen mit einem Angriff zusätzlich 3 (1W6) Schaden, wenn er Vorteil auf den Angriffswurf hat oder wenn sich ein nicht kampfunfähiger Verbündeter innerhalb von 1,5 m des Ziels befindet." }
    ],
    aktionen: [
      { name: "Speer", beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +4 zum Treffen, Reichweite 1,5 m, oder Fernkampf 6 m/18 m. Treffer: 5 (1W6+2) Stichschaden, oder 6 (1W8+2) bei beidseitigem Griff." },
      { name: "Netz", beschreibung: "Fernkampf-Angriffswurf: +3 zum Treffen, Reichweite 1,5 m/4,5 m, ein Mittelgroßes oder kleineres Ziel. Treffer: Das Ziel erhält den Zustand Festgehalten (Entkommen SG 12), bis das Netz zerrissen oder entfernt wird. Das Netz hat RK 10 und 5 Trefferpunkte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Entropische Flamme",
    art: "Elementar",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 16,
    ruestungstyp: null,
    tp: 91,
    tp_wuerfel: "14W10+14",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 10, DEX: 17, CON: 13, INT: 5, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Erschöpfung", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend", "Festgehalten", "Bewusstlos"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Tiefe Rede"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/entropische_flamme.png",
    beschreibung: [
      "Auf den öden Straßen leuchtet ein Elementar auf, der in purpurgrünen Flammen brennt. Zusammengesetzt aus oktarinfarbenen Feuerkaskaden bewegt er sich wie ein unkontrollierbares Wildfeuer. In den tanzenden Flammen sitzt ein verächtlicher Ausdruck der Wut. Er knistert und lodert, die Hitze seines Körpers verzerrt die Luft um ihn herum. Der beißende Geruch von verbranntem Ozon und Schwefel sättigt die Umgebung, und Funken sowie Asche wirbeln umher, von der Kreatur losgelöst, während sie drohend auf einen zugleitet.",
      "Die Feuer vom Tag der Zerstörung Drakkenheims sind nie wirklich erloschen. Viele wurden zu Entropischen Flammen – kontaminierten Feuerelementaren, die durch die Ruinen wandern wie lebende Glut. Unzählige sind in den Gebieten um den Krater und im südlichen Drakkenheim anzutreffen. Die Anhänger des Fallenden Feuers betrachten Entropische Flammen beinahe wie gefallene Engel – Symbole des Meteors selbst."
    ],
    besonderheiten: [
      {
        name: "Feuergestalt",
        beschreibung: "Der Elementar kann sich durch einen Spalt bewegen, der nur 2,5 cm breit ist, ohne sich zu quetschen."
      },
      {
        name: "Andauernde Flamme",
        beschreibung: "Flammen innerhalb von 3 m des Elementars können nicht gelöscht werden, und der Zustand Brennend kann für Kreaturen innerhalb von 3 m des Elementars nicht enden."
      },
      {
        name: "Erleuchtung",
        beschreibung: "Der Elementar verbreitet Helles Licht in einem Radius von 9 m und Dämmerlicht für weitere 9 m."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Elementar führt drei Tanzende-Flammen-Angriffe aus."
      },
      {
        name: "Tanzende Flamme",
        beschreibung: "Nah- oder Fernkampf-Angriffswurf: +6, Reichweite 1,5 m oder Fernkampfreichweite 36 m. Treffer: 13 (3W6 + 3) Feuerschaden, und das Ziel erhält den Zustand Brennend (3W6 Feuer)."
      }
    ],
    bonusaktionen: [
      {
        name: "Flackersprung",
        beschreibung: "Der Elementar teleportiert sich zu einem unbesetzten Feld innerhalb von 18 m, das er sehen kann."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Entropischer Wächter",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 15,
    xp: 13000,
    rk: 18,
    ruestungstyp: null,
    tp: 73,
    tp_wuerfel: "7W10+35",
    bewegung: { "Fliegen": "15 m (Schweben)" },
    attribute: { STR: 15, DEX: 20, CON: 20, INT: 17, WIS: 15, CHA: 20 },
    rettungswuerfe: { INT: 8, WEI: 7, CHA: 10 },
    fertigkeiten: { "Wahrnehmung": 12 },
    schadensresistenzen: ["Kälte", "Nekrotisch", "Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Liegend"],
    sinne: ["Dunkelsicht 36 m (wird durch magische Dunkelheit nicht beeinträchtigt)"],
    passiveWahrnehmung: 22,
    sprachen: ["Versteht alle Sprachen, kann aber nicht sprechen", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/entropischer_waechter.png",
    beschreibung: [
      "Diese schwebende Masse nasser, schlaffer Haut treibt durch die Luft, ihre vielen langen, spindeldürren Tentakel hängen herab wie eine unbegreifliche Qualle. In seltsamen Farbtönen aus blassem Rosa, Violett und Weiß erscheinend, leuchtet ihr großes einzelnes Auge in der Mitte ihrer fleischigen Masse in oktarinen Farbtönen und schwächt Körper und Geist. Das sanfte Geräusch von Brummen und Saugen folgt ihr, während sie Geister mit wahnsinnigem Geplapper in unbekannten Sprachen angreift.",
      "Viele der Kreaturen, die den Raum zwischen den Welten bewohnen, sind aberrant und urzeitlich in ihrer Natur. Der Entropische Wächter ist eine solche unbegreifliche Kreatur. Ihn zu betrachten ist wie das Betrachten eines abstrakten Gemäldes – die Formen und Gestalten seines Körpers sind für den sterblichen Geist schmerzhaft zu beobachten. Er treibt lautlos durch den Raum zwischen den Welten, von Dünnen Orten angezogen, wo er die Orte dahinter beobachtet, als würde er unbekannte Konzepte analysieren oder berechnen, wie eine Katze durch ein Fenster starrt. Aus diesem Grund sind Entropische Wächter eine der häufigeren Erscheinungen in der Sterblichen Welt, da sie sich gerne um Dünne Orte versammeln und oft hindurchschlüpfen."
    ],
    besonderheiten: [
      { name: "Epische Trefferpunkte", beschreibung: "Der Entropische Wächter hat 73 (7W10+35) Trefferpunkte plus weitere 73 (7W10+35) pro Spielercharakter in der Gruppe." },
      { name: "Aberrante Eigenschaften", beschreibung: "Der Entropische Wächter besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." },
      { name: "Verderbende Aura", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 m des Entropischen Wächters beginnt, erleidet 14 (4W6) nekrotischen Schaden." },
      { name: "Magieresistenz", beschreibung: "Der Entropische Wächter hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte." },
      { name: "Verdorrensblick", beschreibung: "Das Auge des Entropischen Wächters erzeugt eine 45 m lange und 3 m breite Linie verdorrenden Zaubers. Zu Beginn jedes seiner Züge entscheidet der Entropische Wächter, in welche Richtung die Linie zeigt und ob die Linie aktiv ist. Kreaturen in der Linie haben Verwundbarkeit gegenüber nekrotischem Schaden und können keine Trefferpunkte zurückgewinnen." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Der Entropische Wächter handelt immer bei Initiative 20. In seinem Zug kann er seine Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt ihn dazu. Stattdessen führt der Entropische Wächter am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus." },
      { name: "Tentakel", beschreibung: "Nahkampfangriffswurf: +10, Reichweite 12 m. Treffer: 17 (3W8+4) Wuchtschaden plus 9 (2W8) nekrotischer Schaden, und wenn das Ziel Riesig oder kleiner ist, erhält es den Zustand Gepackt (Entkommen SG 18). Solange es Gepackt ist, hat das Ziel den Zustand Festgehalten. Der Entropische Wächter hat zehn Tentakel, von denen jeder eine Kreatur packen kann." },
      { name: "Wahnsinnstrahl (1/Runde)", beschreibung: "Fernkampf-Angriffswurf: +10, Reichweite 18 m. Treffer: 22 (4W10) nekrotischer Schaden, und der Strahl springt zu einem anderen Ziel. Der Entropische Wächter führt einen weiteren Wahnsinnstrahlangriff gegen ein neues Ziel innerhalb von 9 m des ersten aus. Eine Kreatur kann pro Zug nur von einem Wahnsinnstrahl getroffen werden. Für jede weitere Kreatur, die der Strahl trifft, erhöht sich sein Schaden um 5 (1W10)." },
      { name: "Dimensionales Gleiten", beschreibung: "Der Entropische Wächter bewegt sich bis zu seiner Bewegungsrate, ohne Gelegenheitsangriffe zu provozieren." },
      { name: "Schatteneinschlag (Aufladen 5-6)", beschreibung: "Konstitutions-Rettungswurf: SG 18, alle Kreaturen in einer Kugel mit 9 m Radius, die auf einem Punkt zentriert ist, den der Entropische Wächter innerhalb von 45 m sehen kann. Misserfolg: 36 (8W8) nekrotischer Schaden. Erfolg: Halber Schaden. Misserfolg oder Erfolg: Der Bereich der Kugel ist für 1 Minute oder bis der Entropische Wächter Schatteneinschlag erneut verwendet mit magischer Dunkelheit erfüllt. Eine Kreatur, die ihren Zug in dem Bereich beendet, erleidet 36 (8W8) nekrotischen Schaden." },
      { name: "Kontaminierter Griff", beschreibung: "Konstitutions-Rettungswurf: SG 18, eine vom Entropischen Wächter gepackte Kreatur. Misserfolg: 16 (3W10) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Halber Schaden." },
      { name: "Kraftbarriere", beschreibung: "Der Entropische Wächter erschafft eine schimmernde, oktarinfarbene 3 m × 3 m große Kraftwand, die auf einem Punkt innerhalb von 45 m zentriert ist. Die Wand hält 1 Minute oder bis der Entropische Wächter den Zustand Handlungsunfähig erhält oder stirbt. Die Wand kann in beliebiger Ausrichtung erscheinen und frei schweben oder auf einer festen Oberfläche ruhen. Wenn die Wand beim Erscheinen den Raum einer Kreatur durchschneidet, wird die Kreatur auf eine Seite der Wand geschoben (Wahl des Entropischen Wächters). Nichts kann die Wand physisch durchdringen. Sie ist gegen jeden Schaden immun und kann nicht durch Magie auflösen aufgehoben werden. Ein Desintegrieren-Zauber zerstört die Wand jedoch sofort. Die Wand erstreckt sich auch in die Ätherische Ebene und blockiert ätherische Bewegung durch sie." },
      { name: "Epische Resistenz", beschreibung: "Der Entropische Wächter wählt einen Zustand, Zauber oder anderen Effekt, der ihn derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihm. Der Entropische Wächter kann diese Epische Aktion auch dann verwenden, wenn er anderweitig keine Aktionen ausführen kann, seine Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt seine Spielwerte verändert." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Fernbewohner",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 8,
    xp: 3900,
    rk: 16,
    ruestungstyp: null,
    tp: 113,
    tp_wuerfel: "15W8+45",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m (Schweben)" },
    attribute: { STR: 8, DEX: 19, CON: 17, INT: 21, WIS: 17, CHA: 15 },
    rettungswuerfe: { KON: 6, INT: 8, WEI: 6, CHA: 5 },
    fertigkeiten: { "Arkane Kunde": 11, "Täuschen": 5, "Wahrnehmung": 6, "Überzeugen": 5, "Heimlichkeit": 7 },
    schadensresistenzen: ["Kälte", "Nekrotisch"],
    schadensimmunitaeten: ["Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Blindsicht 36 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Versteht alle Sprachen, kann aber nicht sprechen", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/fernbewohner.png",
    beschreibung: [
      "Diese große, schlaksige Kreatur schwebt unheilvoll und levitiert wenige Zentimeter über dem Boden. Ihre Arme hängen schlaff an den Seiten herab, und dünne Beine baumeln unter ihrem Körper. Zwischen ihren langen, knorrigen Fingern tanzen wechselnde Moten übernatürlicher Energie. Ihre purpurgraue Haut spannt sich straff über ihr abgemagertes Gerippe. Statt eines Kopfes sprießt eine Masse dicker, sich windender Tentakel aus ihrem Hals und greift in die Luft. Die Atmosphäre um sie herum vibriert mit zwitschernden Flüstern, Schlürfen und dem heiseren Gemurmel wahnsinniger Wahrheiten und unbegreiflicher Realitäten.",
      "Als Fernbewohner bekannt, gehören diese rätselhaften Wesen zu den hartnäckigsten und beängstigendsten Entitäten, denen man im Raum zwischen den Welten begegnen kann. Sie durchqueren Dimensionen und Dünne Orte und entführen Opfer, um bizarre Experimente an ihnen durchzuführen. Ihre Motive und Zwecke bleiben jedoch völlig undurchsichtig, und ihre Ziele liegen jenseits menschlichen Verständnisses.",
      "Gleichwohl beweisen Fernbewohner ein unheimliches Verständnis der psychischen Kräfte und wilden Magie des Raums zwischen den Welten. Niemand beherrscht Delerium und kontaminierte Magie besser als diese Kreaturen. Sie wirken ihre Zauber, um eldrische Maschinen mit unbekannten Zwecken zu erschaffen, ihre Opfer zu dominieren, Schaden zu entgehen und ihre esoterische Forschung abzuschließen.",
      "Aus den wenigen Interaktionen, die Fernbewohner mit Sterblichen hatten, geht eindeutig hervor, dass sie eine ernsthafte Bedrohung darstellen und bösartige Absichten gegenüber Humanoiden hegen. Sie kommunizieren selten mit Sterblichen und scheinen unwillig, sich oder ihre Ziele zu erklären. Fernbewohner zeigen kaum Interesse an den verzweifelten Hilferufen ihrer Gefangenen, während sie diese auf Steinplatten festschnallen und ihre Geister mit unzähligen tastenden Tentakeln durchdringen."
    ],
    besonderheiten: [
      { name: "Aberrante Eigenschaften", beschreibung: "Der Fernbewohner besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." }
    ],
    aktionen: [
      { name: "Tentakel", beschreibung: "Nahkampfangriffswurf: +7, Reichweite 3 m. Treffer: 15 (2W10+4) Kraftschaden, und das Ziel erhält den Zustand Benebelt bis zum Ende seines nächsten Zuges." },
      { name: "Kontaminieren", beschreibung: "Konstitutions-Rettungswurf: SG 16, eine Kreatur innerhalb von 36 m des Fernbewohners. Misserfolg: 36 (8W8) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Nur halber Schaden." },
      { name: "Verstandswirrwarr (Aufladen 5-6)", beschreibung: "Intelligenz-Rettungswurf: SG 16, alle Kreaturen in einem 18-m-Kegel (Kreaturen, die Konzentration aufrechterhalten, haben Nachteil). Misserfolg: 28 (8W6) psychischer Schaden, oder 48 psychischer Schaden, wenn das Ziel Konzentration aufrechterhalten hat. Erfolg: Halber Schaden." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Fernbewohner wirkt einen der folgenden Zauber, wobei keine Komponenten benötigt werden und Intelligenz als Zauberwirkungseigenschaft dient (Zauberrettungswurf-SG 16): Nach Belieben: Magisches Geschoss. 3/Tag: Gedanken wahrnehmen, Nebelschritt. 1/Tag: Hypnotisches Muster, Irrgarten, Ebenenreise (nur auf sich selbst), Verlangsamung, Telekinese." }
    ],
    bonusaktionen: [
      { name: "An den Fäden ziehen", beschreibung: "Weisheits-Rettungswurf: SG 16, eine Kreatur innerhalb von 18 m des Fernbewohners. Misserfolg: 14 (4W6) psychischer Schaden, und das Ziel muss sofort seine Reaktion verwenden, um sich bis zu seiner Bewegungsrate auf eine Kreatur nach Wahl des Fernbewohners zuzubewegen. Wenn es diese Bewegung in Reichweite der Kreatur beendet, muss es einen Nahkampfwaffenangriff gegen die Kreatur mit Vorteil ausführen. Erfolg: Nur halber Schaden." }
    ],
    reaktionen: [
      { name: "In den Raum zwischen den Welten verschwinden (3/Tag)", beschreibung: "Auslöser: Der Fernbewohner erleidet Schaden. Reaktion: Der Fernbewohner erleidet keinen Schaden und verschwindet in den Raum zwischen den Welten. Zu Beginn seines nächsten Zuges erscheint der Fernbewohner in einem unbesetzten Feld seiner Wahl innerhalb von 18 m des Feldes, das er verlassen hat." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Fernbewohner-Entführer",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: null,
    tp: 90,
    tp_wuerfel: "12W8+36",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m (Schweben)" },
    attribute: { STR: 8, DEX: 16, CON: 17, INT: 18, WIS: 17, CHA: 15 },
    rettungswuerfe: { KON: 6, INT: 7, WEI: 6, CHA: 5 },
    fertigkeiten: { "Arkane Kunde": 10, "Täuschen": 5, "Wahrnehmung": 6, "Überzeugen": 5, "Heimlichkeit": 6 },
    schadensresistenzen: ["Kälte", "Nekrotisch"],
    schadensimmunitaeten: ["Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Blindsicht 36 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Versteht alle Sprachen, kann aber nicht sprechen", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/fernbewohner_entfuehrer.png",
    beschreibung: [
      "Das Wesen erscheint menschenähnlich in seiner Form, aber viel größer und schlanker als natürlich erscheinen würde, mit langen, spindeldürren Armen und länglichen Fingern. Sein Kopf ist groß für seinen hageren Körper, läuft dort, wo das Kinn sein würde, spitz zu und ist oben rund und kugelförmig. Das Gesicht ist merkmallos, doch während sein Kopf sich neigt und zittert, ist eine scheinbar riesige Wahrnehmung spürbar. Die Kreatur bewegt sich, ohne einen Laut zu machen, und scheint von blendendem Licht aus unbekannter Quelle umhüllt zu sein.",
      "Manche Leute erzählen Geschichten von umherstreifenden Reisenden, die nachts allein seltsame Lichter am Himmel sahen, durch die Bäume dichter Wälder oder von unbegreiflichen Wesen, die durch Risse zwischen den Welten in ihre Lager wanderten. Am erschreckendsten sind jene, die davon berichten, dass die Kreaturen mühelos in ihre Häuser eindrangen und sie woandershin brachten, nur um mit verschwommenem Gedächtnis aufzuwachen, ohne Anzeichen dafür, dass jemals jemand dort gewesen war.",
      "Ihre Motive sind völlig unbekannt, aber sie kommen aus dem Raum zwischen den Welten, um Sterbliche zu beobachten und an ihnen zu experimentieren. Wenn man einem Fernbewohner-Entführer begegnet, hat man keine Erinnerung mehr daran, die Kreatur überhaupt erlebt zu haben. Die Entführten bleiben mit seltsamen und bizarren Träumen, verwirrten Visionen und verschwommenen Vorstellungen davon zurück, was geschehen sein könnte."
    ],
    besonderheiten: [
      { name: "Aberrante Eigenschaften", beschreibung: "Der Fernbewohner besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." },
      { name: "Unergründliche Präsenz", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 36 m des Fernbewohners beginnt und ihn sehen kann, ist folgendem Effekt ausgesetzt. Intelligenz-Rettungswurf: SG 15. Misserfolg: Das Ziel erhält die Zustände Geblendet und Bewegungsunfähig bis zum Beginn seines nächsten Zuges. Erfolg: Das Ziel ist für 24 Stunden immun gegen die Unergründliche Präsenz aller Fernbewohner-Entführer. Sofern das Ziel nicht überrascht ist, kann es zu Beginn seines Zuges die Augen abwenden, um den Rettungswurf zu vermeiden. Tut es das, hat es Nachteil auf Angriffswürfe gegen den Fernbewohner bis zum Beginn seines nächsten Zuges. Schaut das Ziel zwischenzeitlich auf den Fernbewohner, muss es sofort den Rettungswurf ablegen." }
    ],
    aktionen: [
      { name: "Verstandsverzerrung", beschreibung: "Fernkampf-Angriffswurf: +7, Reichweite 36 m. Treffer: 27 (4W10+5) psychischer Schaden, und das Ziel muss 1W4 würfeln und das Ergebnis vom nächsten Rettungswurf abziehen, den es vor dem Ende des nächsten Zuges des Fernbewohners ablegt." },
      { name: "Gedanken verschlingen", beschreibung: "Intelligenz-Rettungswurf: SG 15, eine Kreatur innerhalb von 9 m des Fernbewohners. Misserfolg: 19 (4W6+5) psychischer Schaden, und der Intelligenzwert des Ziels wird um 1W4 reduziert. Wird der Intelligenzwert des Ziels dadurch auf 0 reduziert, erhält es den Zustand Gelähmt. Die Reduzierung hält an, bis das Ziel eine Kurze oder Lange Rast abschließt." },
      { name: "Entführen", beschreibung: "Der Fernbewohner wirkt Ebenenreise ohne Komponenten auf sich selbst und alle handlungsunfähigen Kreaturen innerhalb von 3 m." },
      { name: "Zauberwirken (Psionik)", beschreibung: "Der Fernbewohner wirkt einen der folgenden Zauber, wobei keine Komponenten benötigt werden und Intelligenz als Zauberwirkungseigenschaft dient (Zauberrettungswurf-SG 15, +7 auf Zauberangriffswürfe): Nach Belieben: Gedanken wahrnehmen, Magie auflösen. 2/Tag: Hellsehen, Schlaf, Telekinese. 1/Tag: Person beherrschen, Erinnerung verändern." }
    ],
    bonusaktionen: [
      { name: "Psychischer Schritt", beschreibung: "Der Fernbewohner teleportiert sich magisch in ein unbesetztes Feld innerhalb von 18 m, das er sehen kann." }
    ],
    reaktionen: [
      { name: "Gegenzauber (1/Tag)", beschreibung: "Der Fernbewohner wirkt Gegenzauber als Reaktion auf den Auslöser dieses Zaubers und verwendet dabei die Zauberwirkungseigenschaft aus Zauberwirken (Psionik)." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Fernbewohner-Meisterstratege",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 15,
    xp: 13000,
    rk: 18,
    ruestungstyp: null,
    tp: 60,
    tp_wuerfel: "8W8+24",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m (Schweben)" },
    attribute: { STR: 15, DEX: 21, CON: 17, INT: 23, WIS: 19, CHA: 19 },
    rettungswuerfe: { KON: 8, INT: 11, WEI: 9, CHA: 9 },
    fertigkeiten: { "Arkane Kunde": 16, "Täuschen": 9, "Wahrnehmung": 9, "Überzeugen": 9, "Heimlichkeit": 10 },
    schadensresistenzen: ["Kälte", "Nekrotisch"],
    schadensimmunitaeten: ["Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Blindsicht 90 m"],
    passiveWahrnehmung: 19,
    sprachen: ["Versteht alle Sprachen, kann aber nicht sprechen", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/fernbewohner_meisterstratege.png",
    beschreibung: [
      "In uralte Roben gekleidet und einen Stab aus jenseitigem Material tragend, beobachtet die Kreatur dich mit kalter Gleichgültigkeit. Sie streckt eine Hand aus und biegt das Gewebe von Raum und Zeit um sich herum. Sie schwebt über dem Boden, ihr Kopf eine Masse sich windender Tentakel, und ihr hagerbleicher Körper pulsiert mit oktariner Energie.",
      "Besonders uralt und fürchterlich, haben diese mächtigen Fernbewohner seit unzähligen Äonen durch die Existenz gewandert."
    ],
    besonderheiten: [
      { name: "Epische Trefferpunkte", beschreibung: "Der Fernbewohner hat 60 (8W8+24) Trefferpunkte plus weitere 60 (8W8+24) pro Spielercharakter in der Gruppe." },
      { name: "Aberrante Eigenschaften", beschreibung: "Der Fernbewohner besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." },
      { name: "Eldrische Aura", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 m des Fernbewohners beginnt, erleidet 10 (3W6) psychischen Schaden." },
      { name: "Magieabwehr", beschreibung: "Der Fernbewohner hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte. Wenn der Fernbewohner von einem Zauber des Grades 4 oder niedriger als Ziel ausgewählt wird, muss der Zauberwirker einen Intelligenz-Rettungswurf (SG 19) bestehen, oder der Zauber schlägt fehl und der Zauberwirker erleidet 18 (4W8) psychischen Schaden." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [
      { name: "Durch Zeit und Raum schreiten", beschreibung: "Auslöser: Der Fernbewohner erleidet Schaden. Reaktion: Der Fernbewohner erleidet keinen Schaden und teleportiert sich in ein unbesetztes Feld innerhalb von 18 m. Der nächste Angriffswurf gegen den Fernbewohner hat Nachteil." }
    ],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Der Fernbewohner handelt immer bei Initiative 20. In seinem Zug kann er seine Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt ihn dazu. Stattdessen führt der Fernbewohner am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus." },
      { name: "Tentakel", beschreibung: "Nahkampfangriffswurf: +11, Reichweite 3 m. Treffer: 22 (3W10+6) Kraftschaden, und das Ziel erhält den Zustand Benebelt bis zum Ende seines nächsten Zuges." },
      { name: "Kontaminieren", beschreibung: "Konstitutions-Rettungswurf: SG 19, eine Kreatur innerhalb von 36 m des Fernbewohners. Misserfolg: 45 (10W8) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Nur halber Schaden." },
      { name: "Verstandswirrwarr (Aufladen 5-6)", beschreibung: "Intelligenz-Rettungswurf: SG 19, alle Kreaturen in einem 18-m-Kegel (Kreaturen, die Konzentration aufrechterhalten, haben Nachteil). Misserfolg: 42 (12W6) psychischer Schaden, oder 72 psychischer Schaden, wenn das Ziel Konzentration aufrechterhalten hat. Erfolg: Halber Schaden." },
      { name: "An den Fäden ziehen (1/Runde)", beschreibung: "Weisheits-Rettungswurf: SG 19, eine Kreatur innerhalb von 36 m des Fernbewohners. Misserfolg: 28 (8W6) psychischer Schaden, und das Ziel muss sofort seine Reaktion verwenden, um sich bis zu seiner Bewegungsrate auf eine Kreatur nach Wahl des Fernbewohners zuzubewegen. Wenn es diese Bewegung in Reichweite der Kreatur beendet, muss es einen Nahkampfwaffenangriff gegen die Kreatur mit Vorteil ausführen. Erfolg: Nur halber Schaden." },
      { name: "Ausphasen (1/Runde)", beschreibung: "Der Fernbewohner teleportiert sich in ein unbesetztes Feld innerhalb von 36 m. Jede Kreatur innerhalb von 3 m des Fernbewohners bei seiner Ankunft ist folgendem Effekt ausgesetzt. Intelligenz-Rettungswurf: SG 19. Misserfolg: 21 (6W6) psychischer Schaden, und das Ziel erhält den Zustand Schutzlos bis zum Ende seines nächsten Zuges. Erfolg: Nur halber Schaden." },
      { name: "Zauberwirken (Psionik) (1/Runde)", beschreibung: "Der Fernbewohner wirkt einen der folgenden Zauber, wobei keine Komponenten benötigt werden und Intelligenz als Zauberwirkungseigenschaft dient (Zauberrettungswurf-SG 19, +11 auf Zauberangriffswürfe): Nach Belieben: Gedanken wahrnehmen, Magisches Geschoss (Grad 5). 1/Tag: Monster beherrschen, Hypnotisches Muster, Massensuggestion, Irrgarten, Ebenenreise (nur auf sich selbst), Hellsehen, Verlangsamung, Telekinese." },
      { name: "Epische Resistenz", beschreibung: "Der Fernbewohner wählt einen Zustand, Zauber oder anderen Effekt, der ihn derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihm. Der Fernbewohner kann diese Epische Aktion auch dann verwenden, wenn er anderweitig keine Aktionen ausführen kann, seine Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt seine Spielwerte verändert." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Feuerhüter",
    art: "Humanoid",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesetzlich gut",
    cr: 5,
    xp: 1800,
    rk: 13,
    ruestungstyp: "Kettenhemd",
    tp: 78,
    tp_wuerfel: "12W8+24",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 10, DEX: 10, CON: 14, INT: 12, WIS: 17, CHA: 14 },
    rettungswuerfe: {},
    fertigkeiten: { "Einsicht": 6, "Religion": 4 },
    schadensresistenzen: ["Feuer", "Strahlend"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 13,
    sprachen: ["Gemeinsprache", "eine weitere Sprache"],
    umgebung: ["Stadt", "Ruinen"],
    bild: "drakkenheim/feuerhueter.png",
    beschreibung: [
      "In weißen und goldenen Roben, verziert mit den heiligen Symbolen der Heiligen Flamme, rezitiert der Feuerhüter Gebete und hält eine brennende Kerze. Böses abwehrend und seine Verbündeten heilend, steht er als schützender Leuchtturm für die Ritter des Silberordens.",
      "Jedes Kloster, jede Kapelle, Kathedrale und jeder Schrein der Heiligen Flamme wird von einem Feuerhüter bewacht. Diese weißgekleideten Frauen, geleitet von ihrem Glauben, sind in den Nationen dafür bekannt, den Niedergedrückten zu helfen, die Unschuldigen zu schützen und religiöse Zeremonien aller Art durchzuführen. Gelegentlich schließen sich Feuerhüter Silberorden-Rittern auf heiligen Expeditionen an, als Schützer, Heiler und Symbole des Glaubens."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Speer",
        beschreibung: "Nahkampf- oder Fernkampfangriffswurf +3, Reichweite 1,5 m oder 6/18 m. Treffer: 3 (1W6) Stichschaden, oder 4 (1W8) Stichschaden wenn mit zwei Händen geführt."
      },
      {
        name: "Brennendes Licht",
        beschreibung: "Konstitutions-Rettungswurf SG 14, eine Kreatur, die der Feuerhüter in 9 m sehen kann. Fehlschlag: 14 (4W6) Strahlendschaden, und das Ziel erhält den Zustand Geblendet bis zum Beginn des nächsten Zuges des Feuerhüters. Erfolg: Halber Schaden."
      },
      {
        name: "Strahlende Flammen",
        beschreibung: "Geschicklichkeits-Rettungswurf SG 14, jede Kreatur nach Wahl des Feuerhüters in einer 9 m Ausstrahlung, die vom Feuerhüter ausgeht. Fehlschlag: 16 (3W10) Strahlendschaden. Erfolg: Halber Schaden. Fehlschlag oder Erfolg: Magische Dunkelheit im Bereich wird aufgelöst."
      },
      {
        name: "Zauberei",
        beschreibung: "Der Feuerhüter wirkt einen der folgenden Zauber; Weisheit ist die Zauberwirkungseigenschaft (Zauber-SG 14, +6 auf Zauberangriffe). Beliebig: Führung, Licht, Sterbende verschonen, Thaumaturgie. 2/Tag: Segen, Heilendes Wort, Kleine Wiederherstellung. 1/Tag: Beistand, Magie bannen, Geisterwächter."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Fingerläufer",
    art: "Monstrosität",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 8,
    xp: 3900,
    rk: 17,
    ruestungstyp: null,
    tp: 135,
    tp_wuerfel: "14W12+56",
    bewegung: { "Gehen": "15 m", "Klettern": "12 m" },
    attribute: { STR: 23, DEX: 15, CON: 18, INT: 5, WIS: 10, CHA: 6 },
    rettungswuerfe: { GES: 5, KON: 7 },
    fertigkeiten: { "Wahrnehmung": 3, "Heimlichkeit": 5 },
    schadensresistenzen: ["Blitz"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m", "Zittersinn 18 m"],
    passiveWahrnehmung: 13,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/fingerlaeufer.png",
    beschreibung: [
      "Auf Dutzenden spindeldürrer Beine huscht diese groteske Kreatur dahin und ähnelt einem mutierten Tausendfüßler, der auf schreckliche Ausmaße angewachsen ist. Ein segmentierter Körper von beinahe neun Metern Länge wellt sich auf unnatürlich biegenden Gliedmaßen fort, die an ausgemergelte Menschenfinger erinnern. Verlängerte gelbe Fingernägel knirschen und schaben drohend über den Boden, wenn er sich bewegt. Seinen runden, fetten Kopf dominiert ein einzelnes, massives, menschenähnliches Auge, das sich hektisch mit beunruhigender, unnachgiebiger Intensität dreht. Die Antenne sprießt darüber wie eine Augenbraue, während fest geschlossene Mandibeln wie Tränensäcke darunter wirken. Die vordersten Fingerbeine enden in zangenartige Klauen, die vor Elektrizität summen.",
      "Abenteurer, die die Innenstadt erkunden, lernen schnell, auf das Geräusch schabender Nägel zu achten – ein Vorbote des Fingerläufers. Als riesige Tausendfüßler verschrien, sind Fingerläufer alptraumhafte Kreaturen mit einer Neigung zur Gewalt. Anstatt ihre Beute zu verzehren, lassen sie die leblosen Körper ihrer Opfer in den öden Stadtstraßen zurück.",
      "Wie der Fingerläufer entstand, ist unbekannt. Vielleicht gingen sie aus gewöhnlichen Tausendfüßlern hervor, die durch Pfützen kontaminierten Schlamms mutierten und dabei menschenähnliche Züge entwickelten. Alternativ könnten sie das Ergebnis einer anhaltenden Metamorphose sein, ihre Formen weiter verdrehend durch die unaufhörlichen magischen Kräfte des Dunstes. Einige führen ihre Erschaffung auf einen mächtigen Zauberer zurück, der unter dem Namen des Blassen Mannes in den Ruinen versteckt sein soll und sie als Spione und Attentäter einsetze. Schließlich ist es möglich, dass die Bestien nicht das Produkt der Kontamination sind, sondern ein schreckliches Experiment, das im Unergründlichen Turm lange vor dem Fall Drakkenheims erschaffen wurde.",
      "Dennoch ist der Fingerläufer ein Einzelgänger und bevorzugt es, andere seiner Art zu meiden. Einige einfallsreiche Abenteurer haben sich diese merkwürdige Eigenschaft zunutze gemacht, indem sie das rhythmische Schaben der Kreatur imitierten und Funken statischer Elektrizität erzeugten, um sie zu vertreiben oder auf andere Bedrohungen zuzuleiten. Dieses Geheimnis ist den Vorhuten der Kapuzenlichter gut bekannt, die Fingerläufer als bizarre Form der Schädlingsbekämpfung gegen andere Bedrohungen in den Ruinen einsetzen."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Fingerläufer führt einen Biss-Angriff und zwei Klauen-Angriffe aus."
      },
      {
        name: "Biss",
        beschreibung: "Nahkampf-Angriffswurf: +9, Reichweite 1,5 m. Treffer: 22 (3W10 + 6) Stichschaden."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +9, Reichweite 1,5 m. Treffer: 16 (3W6 + 6) Hiebschaden plus 9 (2W8) Blitzschaden. Konstitutions-Rettungswurf: SG 15. Misserfolg: Das Ziel erhält den Zustand Schockiert bis zum Ende des nächsten Zuges des Fingerläufers."
      },
      {
        name: "Augenstrahl (Aufladen 5–6)",
        beschreibung: "Geschicklichkeits-Rettungswurf: SG 15, jede Kreatur in einer 18 m langen und 1,5 m breiten Linie. Misserfolg: 35 (10W6) Blitzschaden, und das Ziel erhält den Zustand Verlangsamt. Am Ende jedes seiner Züge wiederholt das Ziel den Rettungswurf und beendet bei einem Erfolg den Effekt für sich. Zweiter Misserfolg: Das Ziel erhält anstelle von Verlangsamt den Zustand Bewegungsunfähig. Dritter Misserfolg: Das Ziel erhält anstelle von Bewegungsunfähig den Zustand Gelähmt. Erfolg: Nur halber Schaden."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Finsterer Kustos",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: null,
    tp: 90,
    tp_wuerfel: "12W8+36",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 15, DEX: 18, CON: 16, INT: 18, WIS: 15, CHA: 18 },
    rettungswuerfe: { INT: 7, CHA: 7 },
    fertigkeiten: { "Täuschung": 10, "Menschenkenntnis": 5, "Wahrnehmung": 5, "Überzeugung": 10 },
    schadensresistenzen: ["Nekrotisch", "Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Gemeinsprache sowie zwei weitere Sprachen"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/finsterer_kustos.png",
    beschreibung: [
      "Der Finstere Kustos ist die rechte Hand vieler Vampirherren. Er hat sich eine unersetzliche Position im inneren Kreis des Vampirs gesichert und führt die Befehle seines Herrn aus, im Austausch für Zugang zu den feineren Aspekten des Vampirismus. Finstere Kustoden arbeiten als Buchhalter, Hüter von Geheimnissen, Informanten und Pfleger der vielen Untoten, die die Schlösser und Herrenhäuser der Vampire bewohnen.",
      "Der Finstere Kustos ist bis zu einem gewissen Grad in der Lage, an den Saiten des Todes zu zupfen. Er kann Leichen erwecken, um dem Willen seines Herrn zu dienen – man sagt, dass viele vampirische Soldaten, die auf dem Schlachtfeld fallen, sich erneut erheben, wenn ein Finsterer Kustos in der Nähe ist.",
      "Ebenso wichtig ist seine Aufgabe, die Illusion eines sterblichen Lebens rund um seinen Vampirherren aufrechtzuerhalten. Der Finstere Kustos hält diese Fassade aufrecht und vereitelt Versuche, sie zu durchschauen."
    ],
    besonderheiten: [
      {
        name: "Regeneration",
        beschreibung: "Der Vampir regeneriert zu Beginn jedes seiner Züge 10 Trefferpunkte, sofern er mindestens 1 Trefferpunkt hat und sich nicht im Sonnenlicht oder in fließendem Wasser befindet. Erleidet er Strahlungsschaden oder Schaden durch Weihwasser, setzt diese Regeneration bis zum Beginn seines nächsten Zuges aus."
      },
      {
        name: "Spinnenklettern",
        beschreibung: "Der Vampir kann schwierige Oberflächen erklimmen, einschließlich kopfüber an Decken, ohne einen Fertigkeitswurf ablegen zu müssen."
      },
      {
        name: "Vampirschwächen",
        beschreibung: "Der Vampir hat folgende Schwächen: Fließendes Wasser – Er erleidet 20 Säureschaden, wenn er seinen Zug in fließendem Wasser endet. Sonnenlicht – Er hat Nachteil auf Angriffswürfe und Weisheitswürfe (Wahrnehmung), während er im Sonnenlicht steht, und erleidet 20 Strahlungsschaden, wenn er seinen Zug im Sonnenlicht endet."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Der Vampir führt zwei Angriffe durch. Er kann einen dieser Angriffe durch Biss oder Zauberei ersetzen."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +7, Reichweite 1,5 m, ein Ziel. Treffer: 9 (2W4+4) Hiebschaden. Ist das Ziel Mittelgroß oder kleiner, erhält es den Zustand Gepackt (Entkommen SG 15)."
      },
      {
        name: "Biss",
        beschreibung: "Konstitutions-Rettungswurf: SG 15, eine Kreatur innerhalb von 1,5 m, die willig ist oder den Zustand Gepackt, Bewegungsunfähig oder Festgehalten hat. Misserfolg: 14 (3W6+4) Nekrotischer Schaden. Der Vampir regeneriert Trefferpunkte in Höhe des verursachten nekrotischen Schadens."
      },
      {
        name: "Zauberei",
        beschreibung: "Der Vampir wirkt einen seiner vorbereiteten Zauber. Zauberwirk-Eigenschaft: Intelligenz (SG 15). Beliebig: Person bezaubern, Befehl, Verkleidung selbst, Magehand, Kleine Illusion. 2/Tag: Gedanken erkennen, Unsichtbarkeit, Nystuls magische Aura, Großes Abbild (Stufe 4), Nichtentdeckung, Anregung. 1/Tag: Untote animieren, Arkanes Auge, Irreführung, Scheinbarkeit."
      }
    ],
    bonusaktionen: [
      {
        name: "Schattensprung",
        beschreibung: "Der Vampir teleportiert sich in einen unbesetzten Raum, den er innerhalb von 18 m sehen kann."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Fraktale Lepidoptera",
    art: "Elementar",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 11,
    xp: 7200,
    rk: 17,
    ruestungstyp: null,
    tp: 172,
    tp_wuerfel: "23W12+23",
    bewegung: { "Fliegen": "12 m (Schweben)" },
    attribute: { STR: 9, DEX: 25, CON: 13, INT: 16, WIS: 11, CHA: 20 },
    rettungswuerfe: { INT: 7, WEI: 4, CHA: 9 },
    fertigkeiten: {},
    schadensresistenzen: ["Säure", "Kälte", "Feuer", "Blitz", "Donner"],
    schadensimmunitaeten: ["Psychisch"],
    verwundbarkeiten: ["Kraft"],
    zustandsimmunitaeten: ["Gepackt", "Gelähmt", "Versteinert", "Liegend", "Festgehalten"],
    sinne: ["Wahre Sicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/fraktale_lepidoptera.png",
    beschreibung: [
      "Im Flug ist sie eine Kavalkade aus Farben, aus eilender Energie und undeutbarer Bewegung, ein tessellierendes Fraktal, das man unmöglich mit den Augen verfolgen kann. Mit einem Rauschen streift sie an dir vorbei und wirft dich wie ein Blatt im Wind. Während du zu Boden stürzt, ringt dein verwirrter Geist mit der unbegreiflichen Form der Kreatur. Eine sich ständig entfaltende Schmetterlingsfigur aus leuchtenden Farben ist das Beste, was dein Geist aus den unsinnigen Bildern interpretieren kann, die du siehst.",
      "Die Fraktale Lepidoptera zu betrachten verwirrt den Geist, da ihr Wesen sich in mehrere Dimensionen erstreckt und die Muster ihrer Form tessellieren und brechen. Wenn man erst von der Spirale ihrer Flügel fasziniert ist, verliert man sich in den ungeformten Reichen der Unendlichkeit des Raums zwischen den Welten. Die Lepidoptera ist gleichzeitig in der bekannten Welt und der Welt dahinter präsent und überbrückt die Grenzen zwischen ihnen, was alle auf beiden Seiten der Grenze verwirrt.",
      "Fraktale Lepidopteras entstehen an Dünnen Orten oder in Gebieten, wo Polarlichter über den Himmel flattern. Diese Orte sind ein Kokon für die Lepidoptera, in dem sie wartet, bis ihr Muster einen Bereich durchdringt, sodass sie abheben kann. Langsam dehnt sie die Reichweite ihres Musters aus, bis alles um sie herum innerhalb der Linien ihres Fraktals existiert. Und dennoch ist sie nicht wirklich böswillig – die Lepidoptera existiert einfach, lebt und wächst in mehr Dimensionen, als Menschen begreifen können. Im Tanz ihres Motivs und im Flügelschlag eines Schmetterlings werden sterbliche Leben auf einem Weg in Bewegung gesetzt, der außerhalb ihres eigenen Willens liegt.",
      "Die Anwesenheit einer Lepidoptera ist erkennbar, wenn Kreaturen beginnen, sich repetitiv und entgegen ihrer Natur zu verhalten: Eine Verschwörung von Raben singt zusammen in synkopiertem Rhythmus; Bäche fließen auf unnatürlich geraden Wegen hügel auf und ab; Kinder sprechen in Haikus; jagende Tiere umkreisen beständig ihre Beute, die längst vor Hunger gestorben ist."
    ],
    besonderheiten: [
      { name: "Aberrante Eigenschaften", beschreibung: "Die Lepidoptera besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." },
      { name: "Energiegestalt", beschreibung: "Die Lepidoptera kann sich durch einen Spalt von nur 2,5 cm Breite bewegen, ohne dafür zusätzliche Bewegung aufzuwenden, und sie kann den Raum einer Kreatur betreten und dort verweilen. Wenn sie zum ersten Mal in einem Zug den Raum einer Kreatur betritt, wird diese Kreatur in eine zufällige Richtung um 6 m bewegt." },
      { name: "Unbegreifliche Erscheinung", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 m der Lepidoptera beginnt und sie sehen kann, ist folgendem Effekt ausgesetzt. Weisheits-Rettungswurf: SG 13. Misserfolg: Das Ziel erhält den Zustand Taumelnd bis zum Beginn seines nächsten Zuges. Erfolg: Das Ziel wird in den Grenz-Ätherischen Plan transportiert. Befindet sich das Ziel bereits auf dem Grenz-Ätherischen Plan, wird es stattdessen in den Materiellen Plan transportiert. Sofern das Ziel nicht überrascht ist, kann es zu Beginn seines Zuges die Augen abwenden, um den Rettungswurf zu vermeiden. Tut es das, kann es die Lepidoptera bis zum Beginn seines nächsten Zuges nicht sehen. Schaut es zwischenzeitlich auf die Lepidoptera, muss es sofort den Rettungswurf ablegen." },
      { name: "Multidimensionale Präsenz", beschreibung: "Wenn die Lepidoptera auf 0 Trefferpunkte reduziert wird, aber in der letzten Runde keinen Schaden von einer Quelle auf dem Materiellen Plan und dem Grenz-Ätherischen Plan erlitten hat, fällt sie stattdessen auf 1 Trefferpunkt." },
      { name: "Phototaxis", beschreibung: "Wenn sich eine Quelle von hellem Licht innerhalb von 30 m der Lepidoptera befindet, versucht sie in ihrem Zug, näher an das Licht heranzukommen." },
      { name: "Realität auflösen", beschreibung: "Charisma-Rettungswurf: SG 13, alle Kreaturen in einer 18-m-Ausstrahlung, die von der Lepidoptera ausgeht, wenn sie stirbt. Erfolg: Das Ziel wird vom Materiellen Plan auf den Grenz-Ätherischen Plan transportiert, oder umgekehrt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Lepidoptera führt zwei Fraktaler-Flügel-Angriffe aus." },
      { name: "Fraktaler Flügel", beschreibung: "Nahkampfangriffswurf: +11, Reichweite 3 m. Treffer: 35 (5W10+7) Kraftschaden." },
      { name: "Tesselierung (Aufladen 5-6)", beschreibung: "Konstitutions-Rettungswurf: SG 17, alle Kreaturen in einer 9-m-Ausstrahlung, die von der Lepidoptera ausgeht und nicht vollständige Deckung haben. Misserfolg: 44 (8W10) Kraftschaden, und das Ziel beginnt seinen nächsten Zug, indem es sich bis zu seiner Bewegungsrate in eine zufällige Richtung bewegt. Wenn das Ziel den Zustand Taumelnd hat, erleidet es stattdessen keinen Schaden, dieser Zustand endet, und das Ziel erhält den Zustand Handlungsunfähig (Rettungswurf zum Beenden). Solange es handlungsunfähig ist, murmelt das Ziel Reime in einem Singsang-Tonfall und tanzt zu einem unhörbaren Rhythmus und bewegt sich zu Beginn jedes seiner Züge bis zu seiner Bewegungsrate in eine zufällige Richtung." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Kreuzung", beschreibung: "Auslöser: Eine Kreatur innerhalb von 18 m der Lepidoptera berührt sie oder trifft sie mit einem Angriff. Reaktion – Charisma-Rettungswurf: SG 17, der Angreifer. Misserfolg: Der Angriff verursacht keinen Schaden, und der Angreifer wird vom Materiellen Plan auf den Grenz-Ätherischen Plan transportiert, oder umgekehrt." }
    ],
    legendaere_aktionen: null,
    regionale_effekte: {
      beschreibung: "Fraktale Lepidopteras verwandeln die Realität um sich herum:",
      effekte: [
        "Quantenverschränkung. Kreaturen, die eine Lange Rast innerhalb von 1,6 km der Lepidoptera einlegen, müssen einen Charisma-Rettungswurf (SG 17) bestehen oder erhalten einen Mustereffekt (W6): 1 – Etwas Unsichtbares hemmt sie; sie erhalten den Zustand Taumelnd. 2 – In jedem ihrer Züge können sie sich nur in geraden Linien nach Norden, Süden, Osten oder Westen bewegen. 3 – Ihre Hände flattern unkontrollierbar; sie erhalten den Zustand Ungeschickt. 4 – Sie können nur in Haikus, Reimpaaren oder Jamben sprechen. 5 – Sie schweben einen Zentimeter über dem Boden; ihre Gehgeschwindigkeit ist unverändert und schwieriges Gelände beeinträchtigt sie nicht. 6 – Sie können polarisiertes Licht und den Ultraviolettbereich sehen, sehen unsichtbare Objekte und Kreaturen und können in die Ätherische Ebene sehen. Kreaturen können den Rettungswurf am Ende jeder Langen Rast wiederholen, sobald sie sich außerhalb des Bereichs befinden. Niedere Restauration oder ähnliche Zauber höheren Grades können den Mustereffekt aufheben."
      ]
    },
    source: "Drakkenheim"
  },
  {
    name: "Garmyr-Berserker",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 6,
    xp: 2300,
    rk: 17,
    ruestungstyp: "Halbe Plattenrüstung",
    tp: 114,
    tp_wuerfel: "12W10+48",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 21, DEX: 15, CON: 19, INT: 5, WIS: 13, CHA: 5 },
    rettungswuerfe: { STR: 8, KON: 7 },
    fertigkeiten: { "Athletik": 8, "Wahrnehmung": 8 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 18,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/garmyr-berserker.png",
    beschreibung: [
      "Auf massive Größe mutiert, werden Garmyr-Berserker so gewalttätig und mordlüstern, dass sie nicht mehr Freund von Feind unterscheiden — für sie gibt es nur noch Fleisch zum Abschlachten. Von ihren Rudeln in Ketten gehalten, werden Berserker auf der Jagd als lebende Vernichtungsmaschinen freigelassen.",
      "Sobald ein Berserker zu toben beginnt, ist er kaum noch aufzuhalten. Aufgrund seines Wahns flieht er niemals, sondern greift stets das nächste Ziel an — ob Feind oder Verbündeter."
    ],
    besonderheiten: [
      { name: "Rücksichtslos", beschreibung: "Zu Beginn seines Zuges kann der Garmyr Vorteil auf alle Nahkampf-Waffenangriffswürfe in diesem Zug erlangen, aber Angriffswürfe gegen ihn haben bis zum Beginn seines nächsten Zuges Vorteil." },
      { name: "Blutgeruch", beschreibung: "Die Nahkampfangriffe des Garmyrs verursachen einem angeschlagenen Ziel zusätzlich 7 (2W6) Schaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Garmyr führt drei Streitaxtangriffe aus. Er kann außerdem Heulen einsetzen, sofern verfügbar." },
      { name: "Streitaxt", beschreibung: "Nahkampf-Angriffswurf: +8 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 12 (2W6+5) Hiebschaden. Wenn das Ziel Groß oder kleiner ist, wird es bis zu 3 m direkt vom Garmyr weggestoßen. Kritischer Treffer: Das Ziel erhält den Zustand Liegend." },
      { name: "Heulen (Aufladen 6)", beschreibung: "Weisheits-Rettungswurf: SG 16 für jede feindliche Kreatur in einer 9-Meter-Ausstrahlung, die den Garmyr hören kann. Misserfolg: Das Ziel erhält den Zustand Verängstigt (Rettungswurf zum Beenden)." }
    ],
    bonusaktionen: [
      { name: "Aggressiv", beschreibung: "Der Garmyr führt die Aktion Rennen aus, um sich auf eine feindliche Kreatur zuzubewegen." }
    ],
    reaktionen: [
      { name: "Vergeltung", beschreibung: "Auslöser: Eine Kreatur trifft den Garmyr mit einem Nahkampfangriff. Reaktion – Der Garmyr führt einen Streitaxtangriff gegen diese Kreatur aus." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Garmyr-Krieger",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 1,
    xp: 200,
    rk: 13,
    ruestungstyp: "Tierhautrüstung",
    tp: 22,
    tp_wuerfel: "4W8+4",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 17, DEX: 13, CON: 13, INT: 7, WIS: 13, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/garmyr-krieger.png",
    beschreibung: [
      "Garmyr-Krieger bilden das Gros der Garmyr-Streitkräfte. Sie verlassen sich im Kampf aufeinander und wissen, dass Rudeljagd ihnen den entscheidenden Vorteil verschafft. Sie suchen Wege, ihre Beute zu überfallen und zu überrennen, und sind erbarmungslose Jäger, die ihre Beute kilometerweit verfolgen.",
      "Garmyr gieren nach Blut und Nahkampf. Wenn ein Feind zu Boden geht, beginnt das Rudel sofort zu fressen, anstatt weiterzukämpfen. Bewusstlose und sterbende Abenteurer sind daher für Garmyr besonders verlockend."
    ],
    besonderheiten: [
      { name: "Rudeltaktik", beschreibung: "Der Garmyr hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn sich mindestens ein Verbündeter des Garmyrs innerhalb von 1,5 m der Kreatur befindet und der Verbündete nicht den Zustand Kampfunfähig hat." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Garmyr führt zwei Angriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden." },
      { name: "Speer", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +5 zum Treffen, Reichweite 1,5 m oder 6 m/18 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden, oder 7 (1W8+3) Stichschaden im Nahkampf mit zwei Händen." }
    ],
    bonusaktionen: [
      { name: "Festmahl", beschreibung: "Der Garmyr führt einen Bissangriff gegen ein angeschlagenes Ziel aus." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Garmyr-Kriegshund",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 13,
    ruestungstyp: "natürliche Rüstung",
    tp: 45,
    tp_wuerfel: "6W10+12",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 19, DEX: 15, CON: 15, INT: 3, WIS: 11, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 14,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/garmyr-kriegshund.png",
    beschreibung: [
      "Diese großen Jagdhunde schleichen auf magerem, gebeugtem Körper vorwärts. Ihre muskulösen, haarlosen Körper sind von Narben übersät. Sie laufen auf allen vieren und sind ihren hündischen Ursprüngen näher als ihre humanoiden Artgenossen. Kleine, rote Augen starren aus tiefen Höhlen, während ein Maul voller überdimensionaler, gezackter Zähne knurrt und schnappt.",
      "Viele der einstigen Jagdhunde Drakkenheims verwandelten sich nach dem Meteoreinschlag in diese Kriegshunde. Sie streifen noch immer durch die Straßen auf der Suche nach Beute und unterstützen Garmyr-Krieger im Kampf."
    ],
    besonderheiten: [
      { name: "Rudeltaktik", beschreibung: "Der Kriegshund hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn sich mindestens ein Verbündeter des Kriegshundes innerhalb von 1,5 m der Kreatur befindet und der Verbündete nicht den Zustand Kampfunfähig hat." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Stichschaden. Wenn das Ziel Mittelgroß oder kleiner ist, erhält es den Zustand Liegend." }
    ],
    bonusaktionen: [
      { name: "Festmahl", beschreibung: "Der Kriegshund führt einen Bissangriff gegen ein angeschlagenes Ziel aus." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Garmyr-Spürhund",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 16,
    ruestungstyp: "Verstärktes Leder",
    tp: 82,
    tp_wuerfel: "11W8+33",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 17, DEX: 19, CON: 13, INT: 10, WIS: 17, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 7, "Überleben": 9, "Wahrnehmung": 9 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 19,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/garmyr-spuerhund.png",
    beschreibung: [
      "Erfahrene Garmyr werden oft geduldiger und methodischer in der Jagd. Sie greifen zu Fernkampfwaffen und durchstreifen die Straßen, häufig als Anführer kleiner eigener Rudel. Der Spürhund wählt einen Feind, konzentriert sich auf ihn und verfolgt ihn unablässig.",
      "Der Garmyr-Spürhund bevorzugt Dächer und erhöhte Positionen, von denen aus er Ziele mit Pfeilhagel eindeckt. Wenn seine Verbündeten zu unterliegen drohen, flieht er, bevor seine Feinde seinen Aussichtspunkt erreichen können."
    ],
    besonderheiten: [
      { name: "Rudeltaktik", beschreibung: "Der Garmyr hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn sich mindestens ein Verbündeter des Garmyrs innerhalb von 1,5 m der Kreatur befindet und der Verbündete nicht den Zustand Kampfunfähig hat." },
      { name: "Geübter Jäger", beschreibung: "Die Fernkampfangriffe des Garmyrs ignorieren halbe und dreiviertel-Deckung." },
      { name: "Tödlicher Schuss", beschreibung: "Die Fernkampfangriffe des Garmyrs verursachen einem angeschlagenen Ziel zusätzlich 7 (2W6) Schaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Garmyr führt drei Angriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden." },
      { name: "Speer", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m oder 6 m/18 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden, oder 7 (1W8+3) Stichschaden im Nahkampf mit zwei Händen." },
      { name: "Langbogen", beschreibung: "Fernkampf-Angriffswurf: +7 zum Treffen, Reichweite 45 m/180 m, ein Ziel. Treffer: 8 (1W8+4) Stichschaden, und das Ziel erhält den Zustand Verlangsamt bis zum Beginn des nächsten Zuges des Garmyrs." }
    ],
    bonusaktionen: [
      { name: "Jägermarkierung", beschreibung: "Der Garmyr wirkt den Zauber Jägermal und verwendet Weisheit als Zauberfähigkeit." }
    ],
    reaktionen: [
      { name: "Plänkler", beschreibung: "Auslöser: Eine feindliche Kreatur beendet ihre Bewegung innerhalb von 1,5 m des Garmyrs. Reaktion – Der Garmyr bewegt sich bis zu seiner Bewegungsrate, ohne Gelegenheitsangriffe auszulösen." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Garmyr-Thaumaturg",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 8,
    xp: 3900,
    rk: 15,
    ruestungstyp: "Magiepanzer (Zauber)",
    tp: 105,
    tp_wuerfel: "14W8+42",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 17, DEX: 15, CON: 16, INT: 11, WIS: 18, CHA: 13 },
    rettungswuerfe: {},
    fertigkeiten: { "Arkanes Wissen": 3, "Wahrnehmung": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/garmyr-thaumaturg.png",
    beschreibung: [
      "Wenige Garmyr entwickeln magische Fähigkeiten — ob durch angeborene Zauberei oder eine Verbindung zu einer überirdischen Macht ist unklar. Unabhängig von ihrer wahren Herkunft werden Garmyr-Zauberkundige zu einflussreichen Anführern im Rudel. Es wird spekuliert, dass diese Garmyr dem alten Gott Kromac lauschen oder durch Blutrituale arkane Energien anzapfen.",
      "Der Thaumaturg stürzt sich ins Getümmel seiner Verbündeten und versucht, sich so zu positionieren, dass seine Aura des Blutmonds möglichst viele Feinde erfasst. Er setzt Blutschrei ein, um Ziele aus der Distanz zu treffen, und flieht, wenn er in Bedrängnis gerät."
    ],
    besonderheiten: [
      { name: "Rudeltaktik", beschreibung: "Der Garmyr hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn sich mindestens ein Verbündeter des Garmyrs innerhalb von 1,5 m der Kreatur befindet und der Verbündete nicht den Zustand Kampfunfähig hat." },
      { name: "Aura des Blutmonds", beschreibung: "Der Garmyr strahlt eine 9-Meter-Ausstrahlung aus. Kreaturen in der Ausstrahlung erhalten den Zustand Angeschlagen, selbst wenn sie noch mehr als die Hälfte ihrer Trefferpunkte haben. Dieser Effekt endet, wenn der Garmyr den Zustand Kampfunfähig erhält." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Garmyr führt drei Angriffe aus. Er kann einen Angriff durch Zaubersprüche ersetzen." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden." },
      { name: "Speer", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m oder 6 m/18 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden, oder 7 (1W8+3) Stichschaden im Nahkampf mit zwei Händen." },
      { name: "Blutschrei", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +7 zum Treffen, Reichweite 1,5 m oder 18 m, ein Ziel. Treffer: 18 (4W8) nekrotischer Schaden, und das Ziel erhält den Zustand Blutend (2W4)." },
      { name: "Zaubersprüche", beschreibung: "Der Garmyr wirkt einen der folgenden Zauber, benötigt keine Materialkomponenten und verwendet Weisheit als Zauberfähigkeit (Zauberrettungswurf-SG 15, +7 auf Zauberangriffe): Nach Belieben: Magische Rüstung (bereits eingerechnet). 2/Tag: Bann, Kreuzfahrermantel, Segnen. 1/Tag: Magie bannen." }
    ],
    bonusaktionen: [
      { name: "Festmahl", beschreibung: "Der Garmyr führt einen Bissangriff gegen ein angeschlagenes Ziel aus." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Gedärm-Koloss",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 5,
    xp: 1100,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 85,
    tp_wuerfel: "10W10+30",
    bewegung: { "Gehen": "7,5 m" },
    attribute: { STR: 21, DEX: 10, CON: 16, INT: 3, WIS: 6, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 8,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/gedaerm-koloss.png",
    beschreibung: [
      "Die massive Kreatur schleppt sich auf zwei stämmigen Beinen mit aufgedunsenen und blutenden Füßen vorwärts. Ihr riesiger Bauch schleift am Boden entlang, mit mehreren offenen Wunden, aus denen Eiter und Gallensaft sickern. Das Gesicht verschwindet in mehreren Doppelkinnen, von denen ätzender Speichel seinen Weg den Bauch hinunter findet. Als die Kreatur ihren Mund zu einem gurgelnden Stöhnen öffnet, greift sie in eine der offenen Wunden und zieht einen eiterbedeckten, kontaminierten Fleischklumpen heraus, um ihn auf euch zu schleudern.",
      "Der Gedärm-Koloss ist eine groteske Schöpfung eldritscher Kontamination. Sein Körper ist auf massive Größe angeschwollen und mutiert kontinuierlich weiter, erzeugt immer mehr verwesendes Fleisch, das aus der Kreatur herauszusickern scheint. Er reißt sich selbst auseinander und zieht seine Eingeweide heraus, nur damit diese sofort durch neue Wucherungen ersetzt werden. Dies erzeugt ein grauenvolles Schauspiel, wenn der Koloss sein kontaminiertes Fleisch auf Feinde schleudert und Galle auf sie erbricht."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Schlag",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 1,5 m. Treffer: 18 (3W8 + 5) Wuchtschaden."
      },
      {
        name: "Galleexplosion",
        beschreibung: "Konstitutions-Rettungswurf: SG 14 für jede Kreatur in einem 3-Meter-Kegel. Misserfolg: 9 (2W8) Säureschaden, und das Ziel erhält den Zustand Brennend (2W8 Säureschaden). Erfolg: Nur halber Schaden."
      },
      {
        name: "Verfaultes Fleisch schleudern (Aufladen 5–6)",
        beschreibung: "Der Gedärm-Koloss reißt einen Brocken seines mutierten Fleisches ab und schleudert ihn auf einen Punkt innerhalb von 36 m, den er sehen kann. Konstitutions-Rettungswurf: SG 14 für jede Kreatur in einer Kugel mit 3 m Radius um diesen Punkt. Misserfolg: 28 (8W6) nekrotischer Schaden. Erfolg: Halber Schaden."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Gefräßige Flora",
    art: "Pflanze",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 8,
    xp: 3900,
    rk: 14,
    ruestungstyp: null,
    tp: 42,
    tp_wuerfel: "4W10+20",
    bewegung: { "Gehen": "4,5 m" },
    attribute: { STR: 18, DEX: 10, CON: 20, INT: 10, WIS: 15, CHA: 19 },
    rettungswuerfe: { GES: 3, INT: 3, WEI: 5 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Taub", "Vergiftet", "Liegend"],
    sinne: ["Blindsicht 18 m", "Zittersinn 90 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Wald"],
    bild: "drakkenheim/gefraessige_flora.png",
    beschreibung: [
      "Diese gewaltige Pflanze windet sich auf einer Masse aus Wurzeln und Ranken vorwärts. Ihre großen Blätter wedeln hin und her rund um ihren mächtigen Blütenkopf. Leuchtende, hypnotisierende Okktarin-Blütenblätter umgeben eine zentrale Knospe, die sich zu einem Maul öffnet, aus dem Speichelnektar trieft, während eine blattartige Zunge erwartungsvoll herausleckt. Das Gebiss ist mit hakigen, gezackten Zähnen gefüllt. Diese Kreatur wirkt, als sei sie bereit, dich im Ganzen zu verschlucken.",
      "Manche Apotheker haben sich auf das Studium von Pflanzen spezialisiert. Diese botanischen Apotheker experimentieren häufig mit Delirium, um Pflanzenwachstumszyklen zu beeinflussen. Die Gefräßige Flora ist eine unglückselige Schöpfung dieser Bemühungen – eine Pflanze, die zu unglaublicher Größe herangewachsen ist, eine primitive Empfindungsfähigkeit entwickelt hat und nur vom Fressen angetrieben wird. Berichte besagen, dass der Botaniker, der das Ungeheuer erschuf, oft selbst dem unstillbaren Hunger seiner Kreatur zum Opfer gefallen ist. Ihre Trefferpunkte betragen 42 (4W10+20) zuzüglich 42 (4W10+20) für jeden Spielercharakter in der Begegnung."
    ],
    besonderheiten: [
      { name: "Wuchernde Aura", beschreibung: "Der Boden innerhalb von 9 Metern um die Gefräßige Flora ist mit Pflanzenwurzeln und Ranken bedeckt und gilt als schwieriges Terrain. Eine Kreatur, die ihren Zug in der Aura beginnt, erleidet 7 (2W6) Giftschaden." },
      { name: "Giftefeu", beschreibung: "Wenn die Gefräßige Flora Giftschaden erleiden würde, erleidet sie stattdessen keinen Schaden und regeneriert Trefferpunkte in Höhe des verhinderten Giftschadens." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Die Gefräßige Flora handelt immer bei Initiative 20. In ihrem Zug kann sie sich wie gewohnt bewegen und eine Interaktion durchführen. Sie führt jedoch keine Aktion oder Bonusaktion in ihrem Zug aus, es sei denn, sie wird durch einen Zauber oder einen anderen Effekt dazu gezwungen. Stattdessen führt die Flora am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus." },
      { name: "Biss", beschreibung: "Nahkampfangriff: +7 auf den Trefferwurf, Reichweite 3 m. Treffer: 9 (1W10+4) Stichschaden, und das Ziel erhält die Gepackt-Bedingung (Entkommen SG 15). Solange das Packen anhält, hat das Ziel die Festgehalten-Bedingung, und die Flora kann kein anderes Ziel beißen." },
      { name: "Säurespucken", beschreibung: "Fernkampfangriff: +7 auf den Trefferwurf, Reichweite 45 m / 180 m. Treffer: 14 (3W6+4) Säureschaden, und das Ziel erhält die Brennend-Bedingung (2W4 Säure). Solange das Ziel brennt, hat es die Geblendet-Bedingung." },
      { name: "Verschlingen", beschreibung: "Die Flora führt einen Biss-Angriff gegen ein Mittelgroßes oder kleineres Ziel aus, das sie gepackt hält. Bei einem Treffer wird das Ziel verschluckt und das Packen endet. Das verschluckte Ziel hat die Geblendet- und Festgehalten-Bedingung, hat vollständige Deckung gegen Angriffe und Effekte von außerhalb der Flora und erleidet zu Beginn jedes seiner Züge 10 (3W6) Säureschaden. Die Flora kann bis zu vier Kreaturen gleichzeitig verschlucken. Wenn die Flora in einem einzigen Zug von einer Kreatur in ihrem Inneren 15 oder mehr Schaden erleidet, muss sie am Ende dieses Zuges einen Konstitutionsrettungswurf (SG 16) bestehen oder alle verschluckten Kreaturen erbrechen; sie landen mit der Liegend-Bedingung in freien Feldern innerhalb von 3 Metern. Wenn die Flora stirbt, hat eine verschluckte Kreatur nicht mehr die Festgehalten-Bedingung und kann die Leiche mit 1,5 m Bewegung verlassen, wobei sie mit der Liegend-Bedingung austritt." },
      { name: "Hypnotischer Pollen (1/Runde)", beschreibung: "Weisheitsrettungswurf SG 16 für jede Kreatur in einer 18-Meter-Ausstrahlung der Flora. Misserfolg: 9 (2W8) Psychischer Schaden, und das Ziel erhält die Geschwächt-Bedingung (Rettungswurf am Ende des Zuges beendet sie). Solange das Ziel geschwächt ist, muss es die gesamte Bewegungsrate jedes seiner Züge aufwenden, um sich direkt auf die Flora zuzubewegen, und ignoriert dabei das schwierige Terrain der Wuchernden Aura." },
      { name: "Epische Resistenz", beschreibung: "Die Gefräßige Flora wählt einen Zustand, einen Zauber oder einen anderen Effekt, der sie gerade betrifft, und würfelt 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihr. Die Flora kann diese Aktion verwenden, selbst wenn sie anderweitig keine Aktionen durchführen kann, ihre Aktionen von einer anderen Kreatur kontrolliert werden oder ein Zauber oder Effekt ihre Spielwerte verändert." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Gefräßiger Ghul",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 1,
    xp: 200,
    rk: 13,
    ruestungstyp: null,
    tp: 27,
    tp_wuerfel: "6W8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 16, DEX: 17, CON: 10, INT: 11, WIS: 10, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/gefraessiger_ghul.png",
    beschreibung: [
      "Gefräßige Ghulen bilden das Gros der untoten Streitkräfte von Vampiren. Es sind abscheuliche untote Kreaturen, die dem Willen ihrer Herren unterworfen sind und monatelang zum Verhungern gezwungen werden, um sie in einen Rausch zu versetzen, wenn sie auf die Feinde der Vampire losgelassen werden. Ihren Vampirherren ist ihr Wohlergehen gleichgültig – sie werden schlicht als Kanonenfutter eingesetzt, um Feinde zu zermürben.",
      "Ein Zauberwirker kann Untote erschaffen verwenden, um einen Gefräßigen Ghul anstelle eines gewöhnlichen Ghuls zu beleben."
    ],
    besonderheiten: [
      {
        name: "Rudeltaktik",
        beschreibung: "Der Ghul hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn sich mindestens ein Verbündeter des Ghuls innerhalb von 1,5 m der Kreatur befindet und der Verbündete nicht den Zustand Bewegungsunfähig hat."
      }
    ],
    aktionen: [
      {
        name: "Fauliger Biss",
        beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden plus 10 (3W6) Giftschaden."
      }
    ],
    bonusaktionen: [
      {
        name: "Aggressiv",
        beschreibung: "Der Ghul bewegt sich bis zu seiner Bewegungsrate auf eine feindliche Kreatur zu, die er sehen kann."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Ghulfürst",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 4,
    xp: 1100,
    rk: 16,
    ruestungstyp: "Plattenrüstung und Schild",
    tp: 75,
    tp_wuerfel: "10W8+30",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 18, DEX: 13, CON: 16, INT: 11, WIS: 16, CHA: 15 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/ghulfuerst.png",
    beschreibung: [
      "Dieser Ghul trägt eine alte, geschwärzte Rüstung und einen verrosteten Schild mit dem Symbol des Hauses von Drakken. Er schwingt einen großen Streitkolben, der vor grüner Untotenenergie knistert.",
      "Manche Ghulen dürsten ebenso nach Kampf wie nach Menschenfleisch und erheben sich über die anderen als Krieger und Anführer. Diese untoten Kreaturen sind Generäle geringerer Ghulen und führen den Angriff in Vampirarmeen an."
    ],
    besonderheiten: [
      {
        name: "Blutwitterung",
        beschreibung: "Der Ghulfürst hat Vorteil auf Weisheit (Wahrnehmung)-Würfe, um nach Kreaturen zu suchen, die weder Konstrukte noch Untote sind. Er kann automatisch jede Kreatur entdecken, die weder ein Konstrukt noch ein Untoter ist und sich innerhalb von 3 m von ihm befindet."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Der Ghulfürst führt zwei Angriffe durch."
      },
      {
        name: "Seelenklammernder Streitkolben",
        beschreibung: "Nahkampf-Angriffswurf: +6, Reichweite 1,5 m, ein Ziel. Treffer: 9 (1W10+4) Wuchtschaden plus 13 (3W8) Nekrotischer Schaden. Charisma-Rettungswurf: SG 13. Misserfolg: Das Ziel erhält den Zustand Verhext (1W6; Rettungswurf zum Beenden)."
      },
      {
        name: "Abyssaler Sog",
        beschreibung: "Fernkampf-Angriffswurf: +6, Reichweite 36 m, ein Ziel. Treffer: 10 (3W6) Nekrotischer Schaden, und das Ziel wird 4,5 m in Richtung des Ghulfürsten gezogen."
      }
    ],
    bonusaktionen: [
      {
        name: "Schildhieb",
        beschreibung: "Stärke-Rettungswurf: SG 14, eine Kreatur innerhalb von 1,5 m des Ghulfürsten. Misserfolg: Das Ziel wird 3 m vom Ghulfürsten weggestoßen und erhält den Zustand Liegend."
      }
    ],
    reaktionen: [
      {
        name: "Unnachgiebig",
        beschreibung: "Auslöser: Der Ghulfürst ist einem Effekt ausgesetzt, der ihn bewegen oder ihm den Zustand Liegend verleihen würde, oder beidem. Reaktion: Der Ghulfürst wird weder bewegt noch erhält er den Zustand Liegend."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Ghulpriester",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: "Kettenhemd",
    tp: 52,
    tp_wuerfel: "7W8+21",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 15, DEX: 13, CON: 16, INT: 11, WIS: 16, CHA: 15 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/ghulpriester.png",
    beschreibung: [
      "In einem zerrissenen Kittel und einem verrosteten Kettenhemd gekleidet, murmelt dieser Ghul vor sich hin und umklammert ein verdrehtes, aus Knochen geschnitztes Symbol von Kromac, einer Darstellung des gotteslästerlichen Gottes des Gemetzels.",
      "Der Ghulpriester ist magisch begabt und nutzt nekrotische Energien, um Ghulen vom Rand des Todes zurückzuholen."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Tödliche Zähne",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +5, Reichweite 1,5 m oder 36 m, ein Ziel. Treffer: 25 (4W10+3) Nekrotischer Schaden. Das Ziel kann bis zum Beginn des nächsten Zuges des Ghulpriesters keine Trefferpunkte wiedererlangen."
      }
    ],
    bonusaktionen: [
      {
        name: "Wiedererwecken",
        beschreibung: "Der Ghulpriester wählt die Leiche eines Ghuls, die er innerhalb von 18 m sehen kann. Der Ghul erwacht mit 5 Trefferpunkten wieder zum Leben und steht auf."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Grabwächter",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 15,
    xp: 13000,
    rk: 18,
    ruestungstyp: null,
    tp: 73,
    tp_wuerfel: "7W10+35",
    bewegung: { "Schweben": "9 m" },
    attribute: { STR: 18, DEX: 7, CON: 21, INT: 19, WIS: 17, CHA: 21 },
    rettungswuerfe: { KON: 10, INT: 9, WEI: 8, CHA: 10 },
    fertigkeiten: { "Wahrnehmung": 13 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Wahre Sicht 36 m"],
    passiveWahrnehmung: 23,
    sprachen: ["Alle Sprachen (spricht nicht)"],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/grabwaechter.png",
    beschreibung: [
      "Die einsickernde Kontamination innerhalb des Schlosses bildete eine tödliche oktarinfarbene Schlammschicht, die sich in den tiefsten Teilen der Katakomben darunter ablagerte. Das unglückliche Schicksal der königlichen Toten Drakkenheims war es, im kontaminierten Schlamm verloren zu gehen, der nun als dicke Pfütze in den Krypten ruht. Die früheren Grabwächter pflegten einst die Krypten mit beleuchteten Laternen, die den Toten den Weg wiesen. Sie kümmerten sich um die Krypten, hielten sie sauber und waren geschworen, die königlichen Toten vor Grabräubern und Eindringlingen zu schützen.",
      "Als die Katastrophe Drakkenheims Wellen kontaminierter Zerstörung durch die Stadt sandte, mutierten die Grabwächter zu einer Masse aus Gliedmaßen und schreienden Gesichtern, verschmolzen mit einigen der Toten in den Krypten – und hielten dabei ihre vielen Laternen fest. Der Verstand des Grabwächters wurde durch die Kontamination verformt, und er fungiert nun als kollektiver Geist für die Toten in den Krypten. Die Toten strecken nun aus ihren Gräbern hervor und lassen die Wände und Säulen der Drakkenheimer Krypten wie eine Masse untoter Arme wirken, die greifen und stöhnen. Der dicke Schlamm darunter blubbert und kräuselt sich, und gelegentlich schießen Fontänen kontaminierten Schleims aufwärts, scheinbar auf Befehl des Hüters der Krypta.",
      "Nun driftet die als Grabwächter bekannte Kreatur lautlos durch die Krypten, ihre Kontrolle über ihr Territorium fließt durch jeden Kadaver. Die Kreatur ist noch immer daran gebunden, die Aufgaben zu erfüllen, die sie im Leben innehatte: die Toten vor Eindringlingen schützen und die Krypten pflegen."
    ],
    besonderheiten: [
      {
        name: "Epische Trefferpunkte",
        beschreibung: "Der Grabwächter hat 73 (7W10 + 35) Trefferpunkte plus weitere 73 (7W10 + 35) Trefferpunkte pro Spielercharakter in der Gruppe."
      },
      {
        name: "Blendende Aura",
        beschreibung: "Der Grabwächter verbreitet Helles Licht in einem Radius von 18 m. Eine Kreatur, die ihren Zug im Hellen Licht beginnt, erleidet 10 (3W6) Strahlenschaden."
      }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      {
        name: "Epische Aktionen",
        beschreibung: "Der Grabwächter handelt immer bei Initiative 20. In seinem Zug kann er seine Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt ihn dazu. Stattdessen führt der Grabwächter am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus."
      },
      {
        name: "Schlag",
        beschreibung: "Nahkampf-Angriffswurf: +9, Reichweite 3 m. Treffer: 22 (4W8 + 4) Wuchtschaden plus 10 (3W6) nekrotischer Schaden."
      },
      {
        name: "Laternenstrahl",
        beschreibung: "Magische oktarinfarbene Strahlen blitzen aus einer der vielen Laternen des Grabwächters auf eine Kreatur, die er innerhalb von 36 m sehen kann und die sich nicht hinter vollständiger Deckung befindet. Er wendet einen der folgenden Effekte an; jeder Strahl kann pro Runde nur einmal eingesetzt werden. 1. Auflösungsstrahl: Intelligenz-Rettungswurf: SG 18. Misserfolg: 35 (10W6) psychischer Schaden. Alle Zauber und magischen Effekte auf dem Ziel enden, und es erhält den Zustand Verwirrt (Rettungswurf beendet den Effekt). Erfolg: Nur halber Schaden. 2. Kraftstrahl: Stärke-Rettungswurf: SG 18. Misserfolg: 35 (10W6) Kraftschaden, und das Ziel wird 6 m vom Grabwächter weggestoßen und erhält den Zustand Liegend. Erfolg: Nur halber Schaden. 3. Blendungsstrahl: Konstitutions-Rettungswurf: SG 18. Misserfolg: 35 (10W6) Strahlenschaden, und das Ziel erhält den Zustand Geblendet (Rettungswurf beendet den Effekt). Erfolg: Nur halber Schaden. 4. Kontaminationsstrahl: Konstitutions-Rettungswurf: SG 18. Misserfolg: 35 (10W6) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Nur halber Schaden. 5. Entzündungsstrahl: Geschicklichkeits-Rettungswurf: SG 18. Misserfolg: 35 (10W6) Feuerschaden, und das Ziel erhält den Zustand Brennend (10W6 Feuer). Erfolg: Nur halber Schaden. 6. Gefrierstrahl: Konstitutions-Rettungswurf: SG 18. Misserfolg: 35 (10W6) Kälteschaden, und das Ziel erhält den Zustand Gefroren (SG 18). Erfolg: Nur halber Schaden."
      },
      {
        name: "Gleiten (1/Runde)",
        beschreibung: "Der Grabwächter bewegt sich bis zu seiner Bewegungsrate, ohne Gelegenheitsangriffe zu provozieren."
      },
      {
        name: "Schlammfontäne (Aufladen 5–6)",
        beschreibung: "Konstitutions-Rettungswurf: SG 18, jede Kreatur in einem Zylinder mit 3 m Radius und 18 m Höhe, zentriert auf einem Punkt innerhalb von 36 m des Grabwächters. Misserfolg: 42 (12W6) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Nur halber Schaden."
      },
      {
        name: "Wände animieren (Aufladen 5–6)",
        beschreibung: "Geschicklichkeits-Rettungswurf: SG 18, jede Kreatur innerhalb von 3 m einer beliebigen Anzahl von Wänden innerhalb von 36 m des Grabwächters. Misserfolg: Das Ziel erhält den Zustand Gepackt (Entkommen SG 18). Die Wand sprießt Gliedmaßen, um diesen Griff zu ermöglichen, die verschwinden, wenn der Zustand endet."
      },
      {
        name: "Epische Resistenz",
        beschreibung: "Der Grabwächter wählt einen Zustand, Zauber oder anderen Effekt, der ihn derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihm. Der Grabwächter kann diese Epische Aktion auch dann verwenden, wenn er anderweitig keine Aktionen ausführen kann, seine Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt seine Spielwerte verändert."
      }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Greuelelender",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: "Magiepanzer",
    tp: 82,
    tp_wuerfel: "15W8+15",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 7, DEX: 15, CON: 13, INT: 13, WIS: 10, CHA: 17 },
    rettungswuerfe: {},
    fertigkeiten: { "Arkane Kunde": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Wahre Sicht 9 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache", "Tiefensprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/greuelelender.png",
    beschreibung: [
      "Die hager-dürre Kreatur schlurft aus den Schatten hervor, scheinbar instabil auf den Beinen und unverhältnismäßig beschwert von ihrem massiven, pulsierenden Schädel, der mit oktariner Energie vibriert. Plötzlich hebt die Kreatur vom Boden ab und ein schimmerndes Feld umhüllt sie. Ihre hohlen Augen beginnen mit kontaminierter Energie zu leuchten, während sie den Kopf auf dich richtet und eine pulsierende psychische Energie aus ihrem Blick ausströmt.",
      "Greuelelende besitzen eine verformte und entstellte Psyche. Kontaminierte Energie sammelt sich in ihrem Gehirn, lässt es zu enormer Größe anschwellen und verleiht dem Elenden arkane Kräfte, die er kaum begreift – geschweige denn beherrscht. Durch diese bizarre Mutation hat der Elenderte den Großteil seines Muskelgewebes verloren. Auf den Beinen kämpft er um sein Gleichgewicht, kann sich aber bei Bedarf in die Luft levitieren. Zauberer, die der grauenhaften Kontamination erliegen, werden besonders häufig zu Greuelelenden."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Greuelelende führt zwei Psychoexplosion-Angriffe aus."
      },
      {
        name: "Psychoexplosion",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +5, Reichweite 1,5 m oder Reichweite 18 m. Treffer: 17 (4W6 + 3) psychischer Schaden, und der Elende stößt das Ziel 3 m gerade von sich weg."
      },
      {
        name: "Synaptischer Schock (Aufladen 6)",
        beschreibung: "Der Elende entfesselt einen Sturm psychischer Energie in einer Kugel mit 3 m Radius, deren Mittelpunkt sich innerhalb von 18 m befindet. Intelligenz-Rettungswurf: SG 13 für jede Kreatur in dem Bereich. Misserfolg: 14 (4W6) psychischer Schaden, und das Ziel erhält den Zustand Benommen (Rettungswurf zum Beenden)."
      },
      {
        name: "Zaubersprüche",
        beschreibung: "Der Elende wirkt einen der folgenden Zauber, benötigt keine Materialkomponenten und verwendet Charisma als Zauberattribut (Zauber-SG 15): Beliebig: Magierschutz (bereits in der RK enthalten), Magehand, Levitieren (nur selbst)."
      }
    ],
    bonusaktionen: [
      {
        name: "Dunst-Verhexung",
        beschreibung: "Der Elende wählt eine Kreatur innerhalb von 18 m, die er sehen kann, und einen der folgenden Zustände: Benebelt, Schwerfällig, Geschwächt oder Erkrankt. Charisma-Rettungswurf: SG 13, das Ziel. Misserfolg: Das Ziel wird für eine Minute vom Elenden verflucht (oder bis der Elende stirbt oder diese Fähigkeit erneut einsetzt). Solange es so verflucht ist, wird die Kreatur anfällig für psychischen Schaden und erhält den gewählten Zustand (Rettungswurf zum Beenden). Erfolg: Das Ziel ist für 24 Stunden immun gegen die Dunst-Verhexung des Elenden."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Greuelkriecher",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 3,
    xp: 700,
    rk: 14,
    ruestungstyp: null,
    tp: 66,
    tp_wuerfel: "12W8+12",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m" },
    attribute: { STR: 16, DEX: 15, CON: 12, INT: 6, WIS: 11, CHA: 2 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 6 },
    schadensresistenzen: ["Nekrotisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Gegriffen", "Gefesselt"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/greuelkriecher.png",
    beschreibung: [
      "Inmitten eines Netzes aus gebrochenen Realitäten und erhaschten Zeitlinien sitzt eine arachnide Kreatur mit verzerrten Zügen. Ihre gestreckte Form windet und zuckt, während sie über ihr Mosaik aus zersplittertem Glas der Möglichkeiten kriecht. Ihr bezahnter Rachen schnappt und kaut. In ihren Bewegungen erkennt man feine nachhallende Widerspiegelungen möglicher Bewegungen und Reaktionen, die nie stattfanden – als würden mit jedem Schritt unzählige Geister möglicher Bewegungen aufleuchten und verblassen.",
      "Diese seltsamen, spinnenartigen Kreaturen scheinen Teilrealitäten, Parallelwelten und alternative Zeitlinien wie eine Spinne ihr Netz zu verweben. Sie besitzen Merkmale einer großen Spinne, doch ihre verzerrten Formen, gestreckten Torsi, bezahnten Rachen und stacheligen Häute verleihen ihnen eine jenseitige Erscheinung, die es schwer macht, sie als etwas aus dieser Existenzebene zu erkennen.",
      "Wer einem solchen Wesen begegnet ist, berichtet von dem zerrissenen Realitätsgefühl beim Versuch, einen Greuelkriecher anzugreifen. Als Reaktion darauf verschieben sie Realitäten, und ob der Angriff trifft oder verfehlt – ein Blick durch Zeit und Raum offenbart alle möglichen Ergebnisse des Angriffs auf einmal.",
      "Selbst wenn ein Greuelkriecher besiegt wird, ist fraglich, ob er wirklich tot ist oder ob man ihn nur in einer einzigen Zeitlinie beobachtet hat, in der er getötet wurde. Das Wesen mag in jeder anderen möglichen Realität noch existieren – was bedeuten könnte, dass Greuelkriecher menschliche Konzepte von Zeit und Raum transzendieren und nicht wirklich getötet, sondern nur aus einer Instanz von Zeit und Raum entfernt werden können."
    ],
    besonderheiten: [
      {
        name: "Aberrante Eigenschaften",
        beschreibung: "Der Greuelkriecher besitzt die in der Seitenleiste 'Aberrante Eigenschaften' beschriebenen Merkmale."
      },
      {
        name: "Insektenartige Gliedmaßen",
        beschreibung: "Der Greuelkriecher kann schwieriges Gelände beim Klettern, auch an Decken, ohne Fähigkeitsproben überwinden. Bewegungseinschränkungen durch Spinnweben ignoriert er."
      }
    ],
    aktionen: [
      {
        name: "Biss",
        beschreibung: "Konstitutions-Rettungswurf SG 12, ein Ziel in 1,5 m Reichweite. Fehlschlag: 18 (4W8) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Halber Schaden."
      },
      {
        name: "Kontaminiertes Gift",
        beschreibung: "Konstitutions-Rettungswurf SG 12, ein Ziel in 12 m Reichweite. Fehlschlag: 18 (4W8) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Halber Schaden."
      }
    ],
    bonusaktionen: [
      {
        name: "Lückenwanderer",
        beschreibung: "Der Greuelkriecher klettert durch einen Riss in der Realität und reist von der Materiellen Ebene in den Zwischenraum der Welten oder umgekehrt."
      }
    ],
    reaktionen: [
      {
        name: "Gebrochene Realität",
        beschreibung: "Auslöser: Eine Kreatur verfehlt den Greuelkriecher mit einem Angriff. Reaktion – Der Greuelkriecher teleportiert sich zu einem unbesetzten Feld, das er in 9 m Entfernung sehen kann, und hinterlässt kurzzeitig ein gebrochenes Abbild seiner selbst, das von dem Angriff getroffen wird."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Greueltroll",
    art: "Riese",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 8,
    xp: 3900,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 105,
    tp_wuerfel: "10W10+50",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 20, DEX: 13, CON: 20, INT: 7, WIS: 11, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Nekrotisch", "Gift"],
    verwundbarkeiten: ["Psychisch"],
    zustandsimmunitaeten: ["Vergiftet", "Betäubt", "Bezaubert"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Riesisch"],
    umgebung: ["Ruinen"],
    bild: "drakkenheim/greueltroll.png",
    beschreibung: [
      "Wenn die angeborene Regenerationsfähigkeit eines Trolls mit den verheerenden mutierenden Eigenschaften des Deliriums kombiniert wird, entsteht ein Greueltroll. Diese Kreaturen sind nahezu unmöglich zu töten und regenerieren sich von fast jedem Angriff. Sie scheinen auch eine gewisse Kontrolle über ihre Mutationen zu haben, die sie jederzeit verändern können, um ihre Beute zu jagen.",
      "Im Gegensatz zu den meisten anderen Trollen reisen Greueltrolle nicht in Rudeln. Sie sind korrumpierte Abscheulichkeiten, die einen Großteil ihrer Vernunft verloren haben. Sie wandern eher allein durch die Ruinen Drakkenheims und craven nach mehr Kontamination, die sie weitergeben wollen an alles, was in ihre Nähe kommt.",
      "Erleidet ein Greueltroll Psychischen Schaden, flieht er sofort und sucht einen sicheren Ort zur Erholung."
    ],
    besonderheiten: [
      {
        name: "Regeneration",
        beschreibung: "Der Troll regeneriert zu Beginn jedes seiner Züge 10 Trefferpunkte. Erleidet er Kraft- oder Psychischen Schaden, setzt diese Regeneration bis zum Beginn seines nächsten Zuges aus. Der Troll stirbt nur, wenn er seinen Zug mit 0 Trefferpunkten beginnt und sich nicht regeneriert."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Der Troll führt zwei Klauenmangriffe und einen Bissangriff durch. Er kann den Biss durch Verderbender Strahl ersetzen, sofern verfügbar."
      },
      {
        name: "Biss",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W6+5) Stichschaden plus 9 (2W8) Nekrotischer Schaden. Konstitutions-Rettungswurf: SG 16. Misserfolg: Das Ziel erhält eine Kontaminationsstufe."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 1,5 m, ein Ziel. Treffer: 12 (2W6+5) Hiebschaden plus 9 (2W8) Nekrotischer Schaden."
      },
      {
        name: "Verderbender Strahl (Aufladen 5–6)",
        beschreibung: "Der Troll feuert einen verderbenden Strahl auf einen Punkt, den er innerhalb von 90 m sehen kann. Konstitutions-Rettungswurf: SG 16 für alle Kreaturen in einer Kugel mit 3 m Radius um diesen Punkt. Misserfolg: 18 (4W8) Nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Nur halber Schaden."
      }
    ],
    bonusaktionen: [
      {
        name: "Erzwungene Mutation",
        beschreibung: "Der Troll ist so kontaminiert, dass er sich ständig verändert. Er manifestiert eine der folgenden Mutationen; sie bleibt aktiv, bis eine neue gewählt wird. 1. Groteske Flügel – Der Troll erhält eine Fluggeschwindigkeit gleich seiner Bewegungsrate, stürzt aber ab, wenn er seinen Zug in der Luft beendet. 2. Zyklopisches Auge – Verderbender Strahl lädt bei 4–6 auf, und der Troll erhält Wahre Sicht 9 m. 3. Zusätzliche Arme – Der Troll kann als Teil des Mehrangriffs zwei weitere Klauenmangriffe ausführen. 4. Spinnenbeine – Der Troll erhält eine Klettergeschwindigkeit gleich seiner Bewegungsrate und kann schwierige Oberflächen einschließlich Decken erklimmen. 5. Reflektierendes Fleisch – Der Troll erhält den Zustand Unsichtbar, bis er einen Angriff ausführt. 6. Kristallisierter Panzer – Die Rüstungsklasse des Trolls wird 20."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Greuelverhängnis",
    art: "Elementar",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Gesinnungslos",
    cr: 13,
    xp: 10000,
    rk: 20,
    ruestungstyp: null,
    tp: 210,
    tp_wuerfel: "12W20+84",
    bewegung: { "Gehen": "9 m", "Fliegen": "36 m" },
    attribute: { STR: 19, DEX: 25, CON: 25, INT: 12, WIS: 17, CHA: 20 },
    rettungswuerfe: { INT: 6, WEI: 8, CHA: 10 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Kälte", "Feuer", "Blitz", "Gift", "Donner"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Brennend", "Erschöpfung", "Gefroren", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend", "Festgehalten", "Schockiert", "Betäubt"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/greuelverhaengnis.png",
    beschreibung: [
      "Während der heftigsten oktarinfarbenen Gewitterstürme konvergieren die mächtigen Energien zu einem Mahlstrom aus kleineren Elementarkräften, die sich zu einem empfindungsfähigen Sturm verbinden – einem Greuelverhängnis. Seine Manifestation wird durch einen wirbelnden Vortex aus dunklen Wolken, Trümmern und Eissplittern markiert, alles erleuchtet vom unheilschwangeren Schein des oktarinfarbenen Blitzes. Diese rasenden Elementare werden von einem reinen Zerstörungsimpuls angetrieben, und ihre Anwesenheit ruft eine Schar anderer Kontaminierter Elementare herbei, die sich ihnen in einer Kakophonie der Vernichtung anschließen.",
      "Entropische Flammen und Lebende Tiefe Dünste werden von Greuelverhängnissen leicht angezogen, aber ihre Anwesenheit treibt sogar normalerweise ruhige Kontaminierte Elementare wie Wandelnde Delerium-Geoden und Belebte Delerium-Schlämme dazu an, sich zu erheben und zu zerstören. Fasziniert von der Zerstörungskraft dieser elementaren Kreaturen haben Magier der Amethyst-Akademie diese Phänomene rund um das Auftreten eines Greuelverhängnisses studiert. Übereinstimmende Berichte von Kapuzenlichter-Spähern deuten darauf hin, dass der Ausgangspunkt dieser Stürme der wirbelnde Vortex roher magischer Energien zu sein scheint, der über dem Krater selbst schwebt."
    ],
    besonderheiten: [
      {
        name: "Luftgestalt",
        beschreibung: "Das Greuelverhängnis kann den Raum einer feindseligen Kreatur betreten und dort verweilen. Es kann sich durch einen Spalt bewegen, der nur 2,5 cm breit ist, ohne sich zu quetschen."
      },
      {
        name: "Zyklonenwind",
        beschreibung: "Das Greuelverhängnis erzeugt einen Ausstrahlungsbereich von 36 m aus heftigen Winden, die Gase und Dämpfe zerstreuen und ungeschützte Flammen löschen. Fernkampfangriffe, die den Bereich durchqueren, haben Nachteil. Objekte, die nicht getragen oder gehalten werden, werden 1W6 × 1,5 m in eine zufällige Richtung geblasen. Eine Kreatur, die ihren Zug im Ausstrahlungsbereich beginnt, ist folgendem Effekt ausgesetzt. Stärke-Rettungswurf: SG 17 (fliegende Kreaturen haben Nachteil). Misserfolg: Das Ziel erhält den Zustand Verlangsamt bis zum Beginn seines nächsten Zuges. Misserfolg um 5 oder mehr: Das Ziel wird 1W6 × 1,5 m in eine zufällige Richtung geschleudert und landet mit dem Zustand Liegend."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Das Greuelverhängnis verwendet Kettenblitz oder Eisbolt, dann verwendet es Meteoriteneinschlag oder Beben."
      },
      {
        name: "Kettenblitz",
        beschreibung: "Nah- oder Fernkampf-Angriffswurf: +12, Reichweite 36 m. Treffer: 21 (3W8 + 7) Blitzschaden, das Ziel erhält den Zustand Schockiert bis zum Ende des nächsten Zuges des Verhängnisses, und der Blitz springt zu einer weiteren Kreatur nach Wahl des Verhängnisses innerhalb von 4,5 m des ersten Ziels über. Das Verhängnis macht einen separaten Kettenblitz-Angriff gegen dieses Ziel. Das Verhängnis kann auf diese Weise beliebig viele Kettenblitz-Angriffe ausführen, aber eine Kreatur kann pro Aktion nur einmal zum Ziel werden."
      },
      {
        name: "Eisbolt",
        beschreibung: "Nah- oder Fernkampf-Angriffswurf: +12, Reichweite 36 m. Treffer: 21 (3W8 + 7) Kälteschaden. Treffer oder Fehler: Das Ziel und jede Kreatur innerhalb von 1,5 m von ihm sind folgendem Effekt ausgesetzt. Geschicklichkeits-Rettungswurf: SG 17. Misserfolg: 18 (4W8) Kälteschaden, und das Ziel erhält den Zustand Gefroren (SG 17)."
      },
      {
        name: "Meteoriteneinschlag",
        beschreibung: "Geschicklichkeits-Rettungswurf: SG 17, jede Kreatur in einem Zylinder mit 4,5 m Radius und 12 m Höhe, zentriert auf einem Punkt, den das Verhängnis innerhalb von 36 m sehen kann. Misserfolg: 18 (4W8) Feuerschaden plus 18 (4W8) Wuchtschaden."
      },
      {
        name: "Beben",
        beschreibung: "Konstitutions-Rettungswurf: SG 17, jede Kreatur in einem Ausstrahlungsbereich von 9 m um das Greuelverhängnis. Misserfolg: 28 (8W6) Donnerschaden, und das Ziel erhält den Zustand Liegend. Erfolg: Nur halber Schaden."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Große Linda",
    art: "Monstrosität",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 9,
    xp: 5000,
    rk: 17,
    ruestungstyp: null,
    tp: 168,
    tp_wuerfel: "16W12+64",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 25, DEX: 10, CON: 19, INT: 2, WIS: 12, CHA: 9 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Säure"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m"],
    passiveWahrnehmung: 15,
    sprachen: [],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/grosse_linda.png",
    beschreibung: [
      "Der Boden bebt unter dem Herannahen eines Ungeheuers: eines bleichen, grün-weißen, zweibeinigen Reptils. Ein riesiges Maul dominiert sein schädelartiges Gesicht, während Säurespeichel zwischen Reihen rasiermesserscharfer Zähne herabtropft. Stacheln verlaufen seinen Rücken und Schwanz entlang, und sein massiger Körper wird von zwei stammartigen Beinen getragen, während seine schwächlichen Vorderarme nahezu nutzlos wirken. Es brüllt einen Laut wie splitterndes Metall, als es vorwärtsstürmt, um einen zu verschlingen.",
      "„Große Linda hat sich als mehr als wert erwiesen für die Leben, die ich aufwandte, um sie zu fangen. Sie ist die preisgekrönte Kämpferin meiner Kampfgrube und eine treue Freundin. Ich freue mich sehr, dass ihr sie kennenlernen werdet. Und bevor ihr fragt: Ja, sie beißt.“ —Die Diebeskönigin",
      "Versteckt unter den Ruinen von Drakkenheim besitzt die geheimnisvolle Diebeskönigin eine riesige Arena, in der Ehrgeizige um die Chance kämpfen, ihre Gunst zu gewinnen. Wer ihre Reihen erklimmt, muss sich schließlich dem Lieblingshaustier der Königin stellen: einer monströsen Reptilienkreatur, liebevoll „Große Linda“ genannt. Sollte jemand eine Minute in der Grube überleben – oder das Biest gar erschlagen – verspricht die Diebeskönigin alles zu gewähren, was in ihrer Macht steht. Natürlich hat noch niemand diesen Preis beansprucht.",
      "Grubenkämpfer sind oft verblüfft über das ruhige Grinsen der Königin, wenn sie glauben, ihre Gunst gewinnen zu können. Die wenigsten erkennen, dass jeder Sieg sie einem tragischen Ende in Große Lindas Kiefer näherbringt, während eine Schar von Dieben bei ihrem grausamen Tod jubelt.",
      "Große Linda wurde erstmals in den Ruinen nahe dem Königstor gesichtet, wo sie Trolle jagte. Keine vergleichbare Kreatur wurde je gesehen, und es bleibt unklar, wie die Königin das Biest fing. Es wird vermutet, dass sie selbst eine Rolle spielte, da niemand, der für diese Mission angeheuert wurde, noch am Leben ist. Selbst die Crew, die sie dafür bezahlte, das käfigte Biest zu liefern, kam kurz darauf durch eine Patrouille der Kapuzenlichter ums Leben.",
      "Es bleibt ein Rätsel, welche Kreatur sich zu Große Linda verwandelte – vielleicht ein mutierter Vogel oder eine riesig gewordene Eidechse. Die einzige Kreatur, die ihr entfernt ähnelt, ist das alte Dinosaurierskelett im Drakkenheimer Museum, doch selbst dabei wirft die Vielzahl der Unterschiede eine Reihe von Fragen über ihren Ursprung auf."
    ],
    besonderheiten: [
      {
        name: "Verjüngung",
        beschreibung: "Wenn Große Linda vernichtet wird und ihr Leichnam für 1 Stunde in einem Bereich des Tiefen Dunstes verbleibt, wird sie mit all ihren Trefferpunkten wiederbelebt."
      },
      {
        name: "Regeneration",
        beschreibung: "Wenn Große Linda ihren Zug in einem Bereich des Tiefen Dunstes beginnt, regeneriert sie 10 Trefferpunkte. Große Linda stirbt nur, wenn sie ihren Zug mit 0 Trefferpunkten beginnt und nicht regeneriert."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Große Linda führt einen Bissangriff und einen Schwanzangriff aus."
      },
      {
        name: "Biss",
        beschreibung: "Nahkampf-Angriffswurf: +11, Reichweite 3 m. Treffer: 33 (4W12 + 7) Stichschaden. Wenn das Ziel Mittelgroß oder kleiner ist, erhält es den Zustand Gepackt (Entkommen SG 19). Solange es Gepackt ist, hat das Ziel den Zustand Festgehalten, und Große Linda kann kein anderes Ziel beißen."
      },
      {
        name: "Schwanz",
        beschreibung: "Nahkampf-Angriffswurf: +11, Reichweite 3 m. Treffer: 20 (3W8 + 7) Wuchtschaden."
      },
      {
        name: "Säurespucken (Aufladen 5–6)",
        beschreibung: "Geschicklichkeits-Rettungswurf: SG 16, jede Kreatur in einem 9 m langen Kegel. Misserfolg: 63 (14W8) Säureschaden. Erfolg: Nur halber Schaden."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Größere Linda",
    art: "Aberration",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Gesinnungslos",
    cr: 20,
    xp: 25000,
    rk: 20,
    ruestungstyp: null,
    tp: 74,
    tp_wuerfel: "4W20+32",
    bewegung: { "Gehen": "18 m" },
    attribute: { STR: 29, DEX: 15, CON: 26, INT: 2, WIS: 15, CHA: 10 },
    rettungswuerfe: { GES: 8, KON: 14, WEI: 8, CHA: 6 },
    fertigkeiten: { "Athletik": 15, "Wahrnehmung": 14 },
    schadensresistenzen: ["Gift"],
    schadensimmunitaeten: ["Säure", "Nekrotisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m"],
    passiveWahrnehmung: 24,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/groessere_linda.png",
    beschreibung: [
      "Donnernd durch die Straßen Drakkenheims stürmend, ist das berüchtigte Haustier der Diebeskönigin zu unvorstellbaren Ausmaßen mutiert und gewachsen. Der Dunst wirbelt um sie herum, und oktarinfarbene Energie pulsiert in ihren eingesunkenen Augenhöhlen. Die abgebrochenen Schäfte von Waffen und alten Pfeilen stecken tief zwischen ihren Schuppen, eingebettet in ihr regeneriertes Fleisch. Ihr bestachelter Rücken leuchtet durch Netze glühender oktarinfarbener Adern; ihr breites Maul ist voller zackiger Zähne. Als sie ihr Maul weit aufreißt, beginnt die sich aufbauende kontaminierte Energie im Rachen zu glühen.",
      "Wenn Große Linda jemals die Grenzen der Diebeskönigin verlässt, wird das Biest zweifellos in die Ruinen von Drakkenheim zurückkehren und sofort neue Jagdgründe suchen. Doch Große Lindas Einkerkerung hat ihr wahres Wachstumspotenzial gehemmt. Einmal befreit, wächst sie umso mehr, je länger sie direkt den Energien des Dunstes ausgesetzt ist. Während sie wächst, beginnen sich neue Mutationen zu formen, die ihre Wildheit, ihre Raubtiersinne und ihre Widerstandsfähigkeit weiter verstärken. Unkontrolliert könnte Große Linda zum Spitzenräuber von Drakkenheim werden – Größere Linda."
    ],
    besonderheiten: [
      {
        name: "Epische Trefferpunkte",
        beschreibung: "Größere Linda hat 74 (4W20 + 32) Trefferpunkte plus weitere 74 (4W20 + 32) Trefferpunkte pro Spielercharakter in der Gruppe."
      },
      {
        name: "Verjüngung",
        beschreibung: "Wenn Größere Linda vernichtet wird und ihr Leichnam für 1 Stunde in einem Bereich des Tiefen Dunstes verbleibt, wird sie mit all ihren Trefferpunkten wiederbelebt."
      },
      {
        name: "Regeneration",
        beschreibung: "Wenn Größere Linda ihren Zug in einem Bereich des Tiefen Dunstes beginnt, regeneriert sie 20 Trefferpunkte. Größere Linda stirbt nur, wenn sie ihren Zug mit 0 Trefferpunkten beginnt und nicht regeneriert."
      },
      {
        name: "Dunstaura",
        beschreibung: "Eine Kreatur, die ihren Zug in einem Umkreis von 9 m um Größere Linda beginnt, ist folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 22. Misserfolg: Das Ziel erhält eine Kontaminationsstufe. Misserfolg oder Erfolg: 14 (4W6) nekrotischer Schaden."
      },
      {
        name: "Belagerungsmonster",
        beschreibung: "Größere Linda verursacht doppelten Schaden an Objekten und Bauwerken."
      },
      {
        name: "Unveränderliche Form",
        beschreibung: "Größere Linda ist immun gegen jeden Zauber oder Effekt, der ihre Form verändern würde."
      }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      {
        name: "Epische Aktionen",
        beschreibung: "Größere Linda handelt immer bei Initiative 20. In ihrem Zug kann sie ihre Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt sie dazu. Stattdessen führt Größere Linda am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus."
      },
      {
        name: "Biss",
        beschreibung: "Nahkampf-Angriffswurf: +15, Reichweite 3 m. Treffer: 35 (4W12 + 9) Stichschaden. Wenn das Ziel Groß oder kleiner ist, erhält es den Zustand Gepackt (Entkommen SG 23). Solange es Gepackt ist, hat das Ziel den Zustand Festgehalten, und Größere Linda kann kein anderes Ziel beißen."
      },
      {
        name: "Schwanz",
        beschreibung: "Nahkampf-Angriffswurf: +15, Reichweite 4,5 m. Treffer: 22 (3W8 + 9) Wuchtschaden. Wenn das Ziel Groß oder kleiner ist, wird es 6 m von Größere Linda weggestoßen und erhält den Zustand Liegend."
      },
      {
        name: "Trampeln",
        beschreibung: "Nahkampf-Angriffswurf: +15, Reichweite 1,5 m. Treffer: 25 (3W10 + 9) Wuchtschaden. Konstitutions-Rettungswurf: SG 23. Misserfolg: Das Ziel erhält den Zustand Getaumelt (Rettungswurf beendet den Effekt)."
      },
      {
        name: "Tief Einatmen",
        beschreibung: "Größere Lindas Odemwaffe lädt sich wieder auf. Größere Linda kann diese Epische Aktion nur als erste Epische Aktion einer Runde verwenden. Nachdem sie diese Epische Aktion verwendet hat, kann sie ihre Biss-Epische-Aktion nicht bis zum Beginn der nächsten Runde verwenden."
      },
      {
        name: "Odemwaffe (Sonderaufladen)",
        beschreibung: "Geschicklichkeits-Rettungswurf: SG 22, jede Kreatur in einer 18 m langen und 1,5 m breiten Linie. Misserfolg: 31 (7W8) nekrotischer Schaden plus 31 (7W8) Wuchtschaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Nur halber Schaden."
      },
      {
        name: "Trampelndes Rasen (lädt auf wenn verwundet)",
        beschreibung: "Größere Linda bewegt sich bis zu ihrer Bewegungsrate in gerader Linie und bewegt sich dabei durch die Felder Großer oder kleinerer Kreaturen in ihrem Weg. Sie führt einen Trampeln-Angriff gegen jede Kreatur aus, durch deren Feld sie sich bewegt."
      },
      {
        name: "Teleport (1/Runde)",
        beschreibung: "Größere Linda teleportiert sich bis zu 36 m an einen unbesetzten Ort, den sie sehen kann und der sich innerhalb des Tiefen Dunstes befindet."
      },
      {
        name: "Epische Resistenz",
        beschreibung: "Größere Linda wählt einen Zustand, Zauber oder anderen Effekt, der sie derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihr. Größere Linda kann diese Epische Aktion auch dann verwenden, wenn sie anderweitig keine Aktionen ausführen kann, ihre Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt ihre Spielwerte verändert."
      }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Groteskes Ungetüm",
    art: "Riese",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Chaotisch böse",
    cr: 9,
    xp: 3900,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 186,
    tp_wuerfel: "12W20+60",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 27, DEX: 15, CON: 20, INT: 10, WIS: 12, CHA: 9 },
    rettungswuerfe: { GES: 6, KON: 9, WEI: 5 },
    fertigkeiten: { "Athletik": 12, "Wahrnehmung": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Riesisch"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/groteskes_ungetuem.png",
    beschreibung: [
      "Ein monumentaler Koloss wirft einen Schatten auf das zerbrochene Gelände. Es ist ein Riese von über fünfzehn Metern Höhe, dessen Gestalt ein erschreckendes Schauspiel der Mutation ist – mit grotesk verlängerten und verdickten Gliedmaßen, die mit beunruhigender Energie pulsieren. Überall in seinen massigen Körper sind scharfe, leuchtende Delirium-Fragmente tief in das Fleisch eingebettet. Das kleine, scharfkantige Gesicht ist mit stechenden Augen versehen, die in einem unerbittlichen, gespenstischen Leuchten brennen, während seine massiven Beine den enormen Körper mit einem schweren, hallenden Tritt tragen, der unheilschwanger durch die verlassene Landschaft hallt. Enorme, gezackte Klauen ragen aus seinen Fingerspitzen hervor und pflügen Furchen in die Erde.",
      "Diese mutierten menschlichen Ungeheuer sind zu gewaltiger Größe herangewachsen. Delirium-Splitter sind in ihre entstellten Körper eingeschmolzen, und ihre Muskeln pulsieren mit arkaner Energie, während sie nach vorne stapfen. Wütend territorial, werden diese Kreaturen gelegentlich dabei beobachtet, wie sie massive Delirium-Kristalle aus dem Krater schleppen und sie wie Obelisken in den Ruinen aufstellen. Niemand weiß, warum diese eigentümlichen Ungetüme Delirium-Kristalle in seltsamen Mustern platzieren und Linien in den Boden ritzen, um sie zu verbinden."
    ],
    besonderheiten: [
      {
        name: "Regeneration",
        beschreibung: "Das Ungetüm erhält zu Beginn seines Zuges 10 Trefferpunkte zurück, solange es sich im Tiefen Dunst befindet. Das Ungetüm stirbt nur, wenn es seinen Zug mit 0 Trefferpunkten beginnt und sich nicht regeneriert."
      },
      {
        name: "Nebeltarnung",
        beschreibung: "Das Ungetüm hat Vorteil auf Geschicklichkeit (Heimlichkeit)-Würfe, um sich in Bereichen zu verstecken, die von Nebel oder Dunst verdeckt werden, einschließlich des Tiefen Dunsts von Drakkenheim."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Das Grotesque Ungetüm führt zwei Schlag-Angriffe aus."
      },
      {
        name: "Schlag",
        beschreibung: "Nahkampf-Angriffswurf: +12, Reichweite 4,5 m. Treffer: 40 (4W10 + 8) Wuchtschaden."
      },
      {
        name: "Delirium-Brocken schleudern",
        beschreibung: "Fernkampf-Angriffswurf: +12, Reichweite 36/90 m. Treffer: 26 (4W8 + 8) Wuchtschaden, und das Ziel erhält den Zustand Liegend. Treffer oder Fehlschlag: Der Delirium-Brocken explodiert. Konstitutions-Rettungswurf: SG 20 für das Ziel und jede Kreatur innerhalb von 3 m. Misserfolg: 36 (8W8) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Nur halber Schaden. Misserfolg oder Erfolg: Eine Arkane Anomalie tritt an dem Ort auf, an dem der Brocken explodiert ist."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Hautkriecher",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 3,
    xp: 700,
    rk: 13,
    ruestungstyp: null,
    tp: 58,
    tp_wuerfel: "9W8+18",
    bewegung: { "Gehen": "3 m" },
    attribute: { STR: 15, DEX: 6, CON: 14, INT: 10, WIS: 11, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Gepackt", "Liegend", "Festgehalten"],
    sinne: ["Blindsicht 6 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/hautkriecher.png",
    beschreibung: [
      "Wenn jemand in kürzester Zeit stark kontaminiert wird, folgen Mutationen in so rascher Folge, dass der Körper die Veränderungen nicht mehr verkraften kann. Die Organe verflüssigen sich, und die Person stirbt, indem sie eine schwarze Galle erbricht. Knochen, Augen, Gehirn und alle inneren Organe lösen sich in einen dicken schwarzen Kontaminationsschlamm auf – übrig bleibt nur ein Sack toter Haut, der in einer Lache Delerium-Schlamm auf dem Boden liegt.",
      "Der Hautsack bleibt nicht tot. Durch und durch kontaminiert, erwacht er in einem verzweifelten und ausgehungerten Zustand und sucht nach lebenden Kreaturen, um sich mit frischem Fleisch zu füllen und eine vollständigere Form anzunehmen. Hautkriecher sind dafür bekannt, eine ganze Kreatur wie eine Schlange zu verschlingen und anschließend die Form des Verschlungenen anzunehmen – allerdings mit hängender, schlaffer Haut und verzerrten Zügen.",
      "Der Hautkriecher ist ein gedankenloses Wesen: animiertes Fleisch, das nur verschlingen will. Er kriecht blind auf jede Lebendige zu und lässt sich nicht ablenken, bis entweder es oder sein Ziel tot ist."
    ],
    besonderheiten: [
      { name: "Amorphe Form", beschreibung: "Der Hautkriecher kann sich durch eine Öffnung von nur 2,5 cm Breite bewegen, ohne sich zu quetschen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Hautkriecher führt zwei Krallen-Angriffe und einen Fesseln-Angriff aus." },
      { name: "Klaue", beschreibung: "Nahkampf-Angriffswurf: +4, Reichweite 1,5 m. Treffer: 11 (2W8+2) Hiebschaden." },
      { name: "Fesseln", beschreibung: "Nahkampf-Angriffswurf: +4, Reichweite 1,5 m. Treffer: 15 (3W8+2) Wuchtschaden, und wenn das Ziel Mittelgroß oder kleiner ist, erhält es den Zustand Gepackt (Entkommen SG 12). Während des Gepackt-Zustands hat das Ziel den Zustand Festgehalten und Nachteil auf Stärke-Würfe und Stärke-Rettungswürfe, und der Hautkriecher kann kein weiteres Ziel fesseln." }
    ],
    bonusaktionen: [
      { name: "Zerquetschen und Verschlingen", beschreibung: "Stärke-Rettungswurf: SG 12 für eine Kreatur, die der Hautkriecher gepackt hat. Fehlschlag: 10 (3W6) Wuchtschaden, und der Hautkriecher erhält dieselbe Anzahl an Trefferpunkten zurück. Wenn dieser Schaden das Ziel tötet, nimmt der Hautkriecher dessen Form an. Die Spielwerte des Hautkriechers sind in jeder Form gleich. Er kehrt zu seiner wahren Form zurück, wenn er stirbt." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Hautschwinge",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 4,
    xp: 1100,
    rk: 13,
    ruestungstyp: null,
    tp: 68,
    tp_wuerfel: "8W8+32",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m" },
    attribute: { STR: 17, DEX: 10, CON: 18, INT: 3, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 2 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/hautschwinge.png",
    beschreibung: [
      "Ein Schwarm haarloser, geflügelter Kreaturen, jede etwa so groß wie ein großer Hund, kreist am Himmel. Jede ist ein groteskes Flickwerk aus verschiedenen Tieren, die durch unaussprechliche magische Experimente zusammengeschmolzen wurden. Ihre gedunsenen Körper bestehen aus Kombinationen von Schweins-, Ziegen- und Schafsrümpfen. Die federlosen Flügel sind schlecht strukturiert, mit sichtbaren Knochen und dünner, reißender Haut. Jede hat einen widderkopfartigen Kopf mit ungleich hervortretenden Augen und verdrehten Hörnern; Nase und Maul wurden durch einen gebogenen Vogelschnabel ersetzt, erschreckend gefüllt mit unregelmäßigen Zahnreihen und triefend vor übelriechender, klebriger Speichelflüssigkeit.",
      "Viele Apotheker, die sich mit den Geheimnissen der Wiederbelebung und Transmutation befassen, sind noch nicht kühn genug, um mit menschlichen Versuchspersonen zu beginnen. Stattdessen starten die meisten ihre grausamen Experimente an Tieren. Leider verlieren sie dabei nach und nach ihr moralisches Empfinden und beginnen schließlich, auch Menschen mit derselben kalten Gleichgültigkeit zu betrachten wie ihre tierischen Versuchsobjekte."
    ],
    besonderheiten: [
      { name: "Rudeltaktik", beschreibung: "Die Hautschwinge hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn sich mindestens ein Verbündeter der Hautschwinge innerhalb von 1,5 Metern der Kreatur befindet und der Verbündete nicht kampfunfähig ist." },
      { name: "Verstörendes Blöken", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 Metern der Hautschwinge beginnt, ist folgendem Effekt ausgesetzt. Weisheitsrettungswurf SG 14. Misserfolg: Das Ziel erhält die Erschüttert-Bedingung bis zum Beginn seines nächsten Zuges. Erfolg: Das Ziel ist für 24 Stunden immun gegen das Verstörende Blöken aller Hautschwingen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Hautschwinge führt einen Biss-Angriff und einen Klauen-Angriff aus." },
      { name: "Biss", beschreibung: "Nahkampfangriff: +5 auf den Trefferwurf, Reichweite 1,5 m. Treffer: 12 (2W8+3) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampfangriff: +5 auf den Trefferwurf, Reichweite 1,5 m. Treffer: 10 (2W6+3) Hiebangriff." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Herr des Festmahls",
    art: "Monstrosität",
    unterart: "NPC",
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 13,
    xp: 10000,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 66,
    tp_wuerfel: "7W10+28",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m" },
    attribute: { STR: 18, DEX: 18, CON: 18, INT: 11, WIS: 18, CHA: 13 },
    rettungswuerfe: { GES: 9, WEI: 9 },
    fertigkeiten: { "Athletik": 9, "Heimlichkeit": 14, "Überleben": 9, "Wahrnehmung": 14 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 24,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/herr_des_festmahls.png",
    beschreibung: [
      "Die Garmyr scharen sich unter einem großen Kriegsherrn, dem Herrn des Festmahls, der sich einen furchteinflößenden Ruf als Meisterjäger, Fährtenleser und Krieger erarbeitet hat. Er genießt es, zur Unterhaltung zu jagen und zu töten, und hängt seine Trophäen in seiner finsteren Kathedrale auf. Seine Lieblingsbeute sind natürlich Abenteurer — er freut sich daran, sie durch die Stadt zu verfolgen und ihre Ausrüstung auf seinen Trophäenregalen aufzuhängen.",
      "Der Herr des Festmahls erhielt seinen ersten Namen Ghost aufgrund seines blassen Fells. Er war schon in jungen Jahren größer als die meisten anderen Garmyr, aber auch listig und klug. Seine Trefferpunkte erhöhen sich um 66 (7W10+28) für jeden anwesenden Spielercharakter."
    ],
    besonderheiten: [
      { name: "Hunger-Aura", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 m des Herrn des Festmahls beginnt, erleidet 10 (3W6) nekrotischen Schaden." },
      { name: "Nahkampfjäger", beschreibung: "Das Befinden einer feindlichen Kreatur innerhalb von 1,5 m verhängt keinen Nachteil auf die Fernkampf-Angriffswürfe des Herrn des Festmahls." },
      { name: "Jägersinn", beschreibung: "Der Herr des Festmahls hat Vorteil auf Angriffswürfe gegen angeschlagene Kreaturen." },
      { name: "Raubtiersinn", beschreibung: "Der Herr des Festmahls hat Vorteil auf Weisheit-Wahrnehmung-Proben und kann die genaue Position jeder Kreatur mit dem Zustand Unsichtbar innerhalb von 36 m bestimmen." },
      { name: "Regeneration", beschreibung: "Der Herr des Festmahls erhält zu Beginn seines Zuges 20 Trefferpunkte zurück, sofern er noch mindestens 1 Trefferpunkt hat." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Der Herr des Festmahls agiert immer bei Initiativewert 20. In seinem Zug bewegt er sich normal und interagiert mit Gegenständen, führt aber weder Aktion noch Bonusaktion aus, außer er wird durch einen Effekt dazu gezwungen. Stattdessen führt er am Ende jedes Zuges eines Spielercharakters eine der folgenden epischen Aktionen aus." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +9 zum Treffen, Reichweite 1,5 m. Treffer: 15 (2W10+4) Stichschaden plus 18 (4W8) nekrotischer Schaden. Konstitutions-Rettungswurf: SG 17. Misserfolg: Das Ziel erhält eine Kontaminationsstufe." },
      { name: "Klauen", beschreibung: "Nahkampf-Angriffswurf: +9 zum Treffen, Reichweite 3 m. Treffer: 11 (2W6+4) Hiebschaden, und das Ziel erhält den Zustand Blutend (4W4)." },
      { name: "Giftpfeil", beschreibung: "Fernkampf-Angriffswurf: +9 zum Treffen, Reichweite 45 m/180 m. Treffer: 13 (2W8+4) Stichschaden plus 18 (4W8) Giftschaden. Konstitutions-Rettungswurf: SG 17. Misserfolg: Das Ziel erhält den Zustand Vergiftet (Rettungswurf zum Beenden)." },
      { name: "Fangseilpfeil", beschreibung: "Fernkampf-Angriffswurf: +9 zum Treffen, Reichweite 45 m/180 m. Treffer: 13 (2W8+4) Stichschaden, und das Ziel erhält den Zustand Festgehalten (Geschicklichkeits-Rettungswurf SG 17 beendet ihn)." },
      { name: "Harpunenpfeil", beschreibung: "Fernkampf-Angriffswurf: +9 zum Treffen, Reichweite 45 m/180 m. Treffer: 13 (2W8+4) Stichschaden. Wenn das Ziel Riesig oder kleiner ist, wird es bis zu 6 m auf den Herrn des Festmahls zugezogen." },
      { name: "Repositionieren", beschreibung: "Der Herr des Festmahls bewegt sich bis zu seiner Bewegungsrate, ohne Gelegenheitsangriffe auszulösen." },
      { name: "Ruf der Jagd (1/Runde)", beschreibung: "Der Herr des Festmahls stößt ein markerschütterndes Heulen aus, das durch ganz Drakkenheim zu hören ist. Alle Garmyr in der Stadt folgen diesem Ruf und eilen auf seine Position zu. Jeder Garmyr innerhalb von 18 m, der ihn sehen und hören kann, kann seine Reaktion einsetzen, um sich bis zur halben Bewegungsrate zu bewegen und einen Nah- oder Fernkampfangriff mit Vorteil auszuführen." },
      { name: "Epische Resistenz", beschreibung: "Der Herr des Festmahls wählt einen Zustand, Zauber oder Effekt, der ihn gerade betrifft, und würfelt 1W20. Bei 11+ endet dieser Effekt bei ihm. Diese Aktion kann auch eingesetzt werden, wenn er normalerweise keine Aktionen durchführen könnte." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Hexenmeister des Rattengottes",
    art: "Monstrosität",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: "Magiepanzer (Zauber)",
    tp: 45,
    tp_wuerfel: "10W6+10",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 7, DEX: 14, CON: 13, INT: 12, WIS: 11, CHA: 16 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 4, "Täuschung": 5 },
    schadensresistenzen: ["Nekrotisch", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/hexenmeister_des_rattengottes.png",
    beschreibung: [
      "Nur wenige Rattlings besitzen magische Kräfte, die sie als Geschenke des Rattengottes bezeichnen. Ob ihre Magie wirklich einem überirdischen Pakt entspringt oder nur ein Produkt kontaminierter Mutationen ist, bleibt ungeklärt. Diese Hexenmeister lügen und übertreiben jedes Flüstern oder jede Eingebung, um ihre Artgenossen davon zu überzeugen, dass sie direkt mit dem großen Rattengott sprechen.",
      "Die meisten Rattlings fürchten und gehorchen diesen Hexenmeistern. Selten teilen sie ihre Macht mit anderen, weshalb es ungewöhnlich ist, dass eine Kolonie mehr als einen besitzt. Oft wählt ein Hexenmeister das wildeste Riesige Rattling als Leibwächter oder hält sich einen erfahrenen Rinnenschützen als persönlichen Assassinen."
    ],
    besonderheiten: [
      { name: "Feiner Geruchssinn", beschreibung: "Das Rattling hat Vorteil auf Weisheit-Wahrnehmung-Proben, die auf dem Geruchssinn basieren." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Stichschaden." },
      { name: "Verhexungsfeuer", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +5 zum Treffen, Reichweite 1,5 m oder 36 m, ein Ziel. Treffer: 21 (4W8+3) nekrotischer Schaden, und das Ziel erhält den Zustand Brennend (2W8 Nekrotisch)." },
      { name: "Zaubersprüche", beschreibung: "Das Rattling wirkt einen der folgenden Zauber, benötigt keine Materialkomponenten und verwendet Charisma als Zauberfähigkeit (Zauberrettungswurf-SG 13): Nach Belieben: Kleine Illusion, Magische Rüstung (nur sich selbst; bereits eingerechnet), Thaumaturgie. 1/Tag: Große Illusion, Magie bannen, Unsichtbarkeit, Vorzeichen." },
      { name: "Schwärme beschwören (Aufladen nach einer Kurzen oder Langen Rast)", beschreibung: "Das Rattling beschwört zwei Rattenschwärme, die in freien Feldern innerhalb von 18 m erscheinen. Die Schwärme agieren unmittelbar nach dem Rattling in der Initiativreihenfolge und bleiben 1 Minute lang oder bis sie vernichtet werden." }
    ],
    bonusaktionen: [
      { name: "Teleport", beschreibung: "Das Rattling teleportiert sich in ein freies Feld, das es innerhalb von 18 m sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Hirnpfropf",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 9,
    xp: 5000,
    rk: 16,
    ruestungstyp: null,
    tp: 142,
    tp_wuerfel: "15W10+60",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 20, DEX: 11, CON: 19, INT: 19, WIS: 15, CHA: 17 },
    rettungswuerfe: { INT: 8, WEI: 6, CHA: 7 },
    fertigkeiten: { "Wahrnehmung": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Sprachen seines Schöpfers", "Telepathie 9 m"],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/hirnpfropf.png",
    beschreibung: [
      "Der Hirnpfropf ist ein grauenhafter Versuch, zwei Kreaturen zu einer einzigen Form zu verschmelzen – eine albtraumhafte Kombination aus Gehirn und Brawn. Durch chirurgische Implantation und Fleischverschmelzung erzwingt ein Apotheker eine Symbiose, indem er die Nervensysteme fusioniert und potente psonische Fähigkeiten freisetzt.",
      "Obwohl als Symbiose zweier Geister gedacht, übernimmt die implantierte Kreatur typischerweise die Psyche ihres Wirtes und kontrolliert die neue Form vollständig. Manchmal bilden die beiden Wesen jedoch einen gemeinsamen Geist oder sogar ein zweikammeriges Bewusstsein, in dem die Originale innerlich über die nächste Handlung debattieren. Dank ihrer psonischen Fähigkeiten sind Hirnpfropfe hervorragend geeignet, andere Versuchssubjekte zu kontrollieren – ihre präzise Telekinese ist besonders nützlich bei chirurgischen Eingriffen."
    ],
    besonderheiten: [
      { name: "Doppelter Geist", beschreibung: "Der Hirnpfropf hat Vorteil auf Rettungswürfe, um den Zustand Geblendet, Bezaubert, Taub, Verängstigt, Betäubt oder Bewusstlos zu vermeiden oder zu beenden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Hirnpfropf führt zwei Schlagangriffe aus und setzt Telekinetischen Griff ein." },
      { name: "Schlag", beschreibung: "Nahkampf-Angriffswurf: +9 zum Treffen, Reichweite 1,5 m. Treffer: 23 (4W8+5) Wuchtschaden." },
      { name: "Telekinetischer Griff", beschreibung: "Der Hirnpfropf streckt seinen Geist aus, um eine Kreatur oder ein Objekt, das er innerhalb von 36 m sehen kann, in seinem psychischen Griff zu halten. Wenn das Ziel eine Kreatur ist – Stärke-Rettungswurf: SG 16. Misserfolg: Das Ziel wird bis zu 9 m in eine beliebige Richtung bewegt und erhält den Zustand Festgehalten bis zum Beginn des nächsten Zuges des Hirnpfropfs oder bis der Hirnpfropf den Zustand Kampfunfähig erhält. Wenn das Ziel ein Objekt mit 136 kg oder weniger ist, das weder getragen noch gehalten wird, wird es telekinetisch bis zu 9 m in eine beliebige Richtung bewegt. Der Hirnpfropf kann auch feine Kontrolle ausüben, um einfache Werkzeuge zu bedienen oder Türen und Behälter zu öffnen." },
      { name: "Psychischer Zusammenbruch (Aufladen 5–6)", beschreibung: "Intelligenz-Rettungswurf: SG 16 für jede Kreatur in einer 6-Meter-Ausstrahlung. Misserfolg: 22 (4W10) psychischen Schaden und der Zustand Benommen (Rettungswurf zum Beenden). Misserfolg um 5 oder mehr: Das Ziel erhält stattdessen den Zustand Betäubt (Rettungswurf zum Beenden). Erfolg: Nur halber Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Hypnotische Schauerblüte",
    art: "Pflanze",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 1,
    xp: 200,
    rk: 5,
    ruestungstyp: null,
    tp: 18,
    tp_wuerfel: "4W8",
    bewegung: { "Gehen": "1,5 m" },
    attribute: { STR: 10, DEX: 1, CON: 10, INT: 1, WIS: 3, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Taub", "Verängstigt"],
    sinne: ["Blindsicht 9 m"],
    passiveWahrnehmung: 6,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/hypnotische_schauerbluete.png",
    beschreibung: [
      "Die mehrfarbigen Blütenblätter dieser großen, lotusähnlichen Blume öffnen sich sanft. Das Licht tanzt über ihre Blätter und schimmernde Blüte in einem seltsamen, hypnotischen Rhythmus. Die Farben scheinen sich zu verschieben, manchmal unvorstellbare Töne erzeugend. Wer sie anschaut, spürt wahnsinnige Muster, die seinen Geist erfüllen.",
      "Hypnotische Schauerblüten sind Pflanzen, die durch Mutation entstellt wurden. Sie ahmen Eldrisch-Lilien nach – magische Pflanzen, die für ihre kontaminationsresistenten Eigenschaften geschätzt werden – um Beute nah genug heranzulocken, um sie zu hypnotisieren. Oft wachsen sie in gefährlichen Umgebungen nahe Delerium-verkrusteten Gewächsen, kontaminiertem Wasser oder Delerium-Schlamm.",
      "Apotheker vermuten, dass diese Blüten Teil eines Netzwerks sein könnten, das mit dem Delerium auf eine Weise kommuniziert, die Menschen niemals verstehen könnten. Die Blüten scheinen die Lebenden korrumpieren zu wollen, sie in geeignetere Kreaturen verwandelnd, die die Ausbreitung der Kontamination vorantreiben."
    ],
    besonderheiten: [
      { name: "Falsche Erscheinung", beschreibung: "Solange die Schauerblüte reglos bleibt, ist sie von einer gewöhnlichen Blume nicht zu unterscheiden." }
    ],
    aktionen: [
      { name: "Kontaminierte Berührung", beschreibung: "Nahkampf-Angriffswurf: +2, Reichweite 1,5 m. Treffer: 10 (3W6) Nekrotischer Schaden. Konstitutions-Rettungswurf: SG 10. Fehlschlag: Das Ziel erhält eine Kontaminationsstufe. Wenn das Ziel durch die Schauerblüte bezaubert ist, wird es automatisch getroffen und hat Nachteil auf seinen Rettungswurf." },
      { name: "Hypnotischer Pollen (Aufladen nach einer Kurzen oder Langen Rast)", beschreibung: "Weisheits-Rettungswurf: SG 10 für jede Kreatur in einer 9-Meter-Ausstrahlung, die von der Schauerblüte ausgeht. Fehlschlag: Das Ziel erhält den Zustand Bezaubert für 1 Minute. Während des Bezaubert-Zustands hat das Ziel den Zustand Kampfunfähig und muss sich in seinen Zügen auf direktem Weg auf die Schauerblüte zubewegen, selbst durch Gefahren. Der Effekt endet vorzeitig, wenn eine Kreatur eine Aktion nutzt, um das Ziel aus seinem Stupor zu reißen." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Zauberreflexion", beschreibung: "Auslöser: Die Schauerblüte besteht ihren Rettungswurf gegen einen Zauber, der nur sie als Ziel hat und keinen Wirkungsbereich hat, oder ein Zauberangriff verfehlt die Schauerblüte. Reaktion – Die Schauerblüte wählt eine Kreatur, die sie innerhalb von 9 m sehen kann, als neues Ziel des Zaubers (der ursprüngliche Wirker ist ein gültiges Ziel). Wenn der Zauber einen Rettungswurf erfordert, führt das neue Ziel seinen eigenen Rettungswurf durch. Wenn der Zauber einen Angriffswurf hat, würfelt der ursprüngliche Wirker den Angriff gegen das neue Ziel neu." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Injektor",
    art: "Konstrukt",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 11,
    xp: 7200,
    rk: 17,
    ruestungstyp: null,
    tp: 150,
    tp_wuerfel: "20W8+60",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 15, DEX: 23, CON: 16, INT: 10, WIS: 17, CHA: 10 },
    rettungswuerfe: { GES: 10, INT: 4, CHA: 4 },
    fertigkeiten: { "Heilkunde": 7, "Wahrnehmung": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Versteht gelernte Sprachen, spricht aber nicht"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/injektor.png",
    beschreibung: [
      "Der Injektor ist ein heimtückisches Konstrukt, das in den Laboratorien der Haze-Alchemisten Drakkenheims erschaffen wurde. Mit seinen vielen Armen und Spritzenapparaten bewaffnet, schleicht er sich an Beute heran und infiziert sie mit einer Auswahl experimenteller Substanzen – mal heilend, mal lähmend, mal tödlich.",
      "Injektoren wurden ursprünglich als medizinische Hilfskonstrukte entwickelt, die Patienten in den überfüllten Krankenhäusern der Stadt behandeln sollten. Nach dem Fall Drakkenheims programmierten skrupellose Alchemisten diese Maschinen um, und seither wandern sie ziellos durch die Trümmer, treffen auf Lebewesen und verabreichen ihnen eine schicksalhafte Injektion."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Injektor führt vier Spritzen-Angriffe aus. Er kann einen dieser Angriffe durch Auffrischungsdosis ersetzen." },
      { name: "Spritze", beschreibung: "Nahkampfangriff: +10 auf den Trefferwurf, Reichweite 1,5 m. Treffer: 9 (1W4+6) Stichschaden. Würfele 1W4, um den Effekt der Injektion zu bestimmen: 1 – Tödliche Injektion: Das Ziel erleidet 21 (6W6) Giftschaden. 2 – Betäubungslösung: Das Ziel erleidet 9 (2W8) Kälteschaden und muss einen Konstitutionsrettungswurf (SG 16) bestehen oder wird gefroren (Gefroren). 3 – Gedämpfter Geist: Das Ziel erleidet 7 (2W6) Psychischen Schaden und muss einen Intelligenzrettungswurf (SG 16) bestehen oder wird verwirrt (Verwirrt). 4 – Induzierte Nekrose: Das Ziel erleidet 9 (2W8) Nekrotischen Schaden und muss einen Stärkerettungswurf (SG 16) bestehen oder wird geschwächt (Geschwächt)." },
      { name: "Auffrischungsdosis", beschreibung: "Der Injektor verabreicht einer Kreatur innerhalb von 1,5 m eine der folgenden Substanzen (Würfele 1W4): 1 – Adrenalinstoß: Das Ziel erhält bis zum Ende seines nächsten Zuges zusätzliche 9 m Bewegungsrate und Vorteil auf Stärke- und Geschicklichkeitswürfe. 2 – Schutzimpfung: Das Ziel erhält bis zum Ende seines nächsten Zuges Resistenz gegenüber Gift- und Nekrotischem Schaden. 3 – Heilflüssigkeit: Das Ziel regeneriert 35 (10W6) Trefferpunkte. 4 – Fokus: Das Ziel erhält die Tapferkeit-Bedingung für 1W4 Runden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Instabiler Tank", beschreibung: "Wenn der Injektor auf 0 Trefferpunkte reduziert wird, explodieren seine Substanztanks. Alle Kreaturen in einem Radius von 6 Metern müssen einen Konstitutionsrettungswurf (SG 15) bestehen oder erleiden 21 (6W6) Giftschaden und werden vergiftet. Bei einem erfolgreichen Rettungswurf erleiden sie nur die Hälfte des Schadens und werden nicht vergiftet." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Jäger-Koloss",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 5,
    xp: 1100,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 93,
    tp_wuerfel: "11W10+33",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 21, DEX: 15, CON: 16, INT: 7, WIS: 15, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 5, "Heimlichkeit": 8, "Überleben": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/jaeger-koloss.png",
    beschreibung: [
      "Eine geduckte und aufgedunsene Gestalt taumelt aus den Schatten. Sie besitzt zwei massive Tentakelarme, die in großen klauenartigen Haken enden. Der Kopf der Kreatur hat zwei große oktarinfarbene Augen, doch wo ein Mund sein sollte, befindet sich nur eine fleischige Fläche. Stattdessen hat die Kreatur ein riesiges, knurrendes Maul in ihrem Bauch mit gezackten Knochenzähnen und einer großen violetten Zunge. Sie quiekt hungrig, während ihre Arme auf euch einschlagen und bereit sind, euch in ihren offenen Mund zu ziehen. Dann verschwindet sie plötzlich vor euren Augen, doch ihr könnt noch immer ihr hungriges Quieken hören.",
      "Jäger-Kolosse durchstreifen die Straßen in einem ständigen Zustand des Hungers. Anders als andere Elende suchen sie aktiv nach Beute, doch ihr Appetit scheint nie nachzulassen. Noch grauenhafter ist die Art, wie sich ein Jäger-Koloss an die Jagd angepasst hat: Sie können sich mit einer natürlichen Tarnung, die ihre Haut mutiert hat, unsichtbar machen. Diese heimlichen Dunst-Kolosse warten in den Schatten auf ihre Beute und springen dann hervor, um sie in einem Atemzug einzusacken."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Jäger-Koloss führt zwei Peitschende-Tentakel-Angriffe und einen Bauchmaul-Angriff aus."
      },
      {
        name: "Peitschende Tentakel",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 18 m. Treffer: 14 (2W8 + 5) Stichschaden. Wenn das Ziel eine Große oder kleinere Kreatur ist, erhält es den Zustand Gepackt (Entkommen SG 16). Der Koloss kann gleichzeitig bis zu zwei Kreaturen packen."
      },
      {
        name: "Bauchmaul",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 1,5 m. Treffer: 18 (3W8 + 5) Stichschaden."
      },
      {
        name: "Unsichtbarkeit",
        beschreibung: "Der Koloss wirkt Unsichtbarkeit auf sich selbst, benötigt keine Zauberkomponenten und verwendet Weisheit als Zauberattribut."
      }
    ],
    bonusaktionen: [
      {
        name: "Einrollen",
        beschreibung: "Der Koloss zieht jede von ihm gepackte Kreatur bis zu 7,5 m gerade auf sich zu."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Juggernaut-Koloss",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 5,
    xp: 1100,
    rk: 15,
    ruestungstyp: "improvisierte Rüstung",
    tp: 85,
    tp_wuerfel: "10W10+30",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 23, DEX: 10, CON: 16, INT: 3, WIS: 6, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m"],
    passiveWahrnehmung: 8,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/juggernaut-koloss.png",
    beschreibung: [
      "Die Kreatur besteht aus wulstigen Muskeln; Lederriemen halten verrostete Rüstungsteile zusammen – einen Schulterpauldron, Armschienen und einen Gürtel. Der Kopf steckt in einer massiven Metallkuppel ohne erkennbares Gesicht. Dennoch ist das schwere Atmen der Kreatur aus dem Inneren der Kuppel zu hören, und sie scheint sich ihrer Umgebung vollständig bewusst zu sein. In jeder Hand trägt sie eine improvisierte Metallklinge aus Hausdachbalken oder Wagenresten, sorgfältig zu einer Klinge geschliffen, bedeckt mit Rost und getrocknetem Blut.",
      "Der ikonische Helm des Juggernaut-Kolosses ist ein gewisses Mysterium. Es ist unklar, ob er ihn selbst anfertigt oder ob diese Dunst-Kolosse eine Form eldritscher Experimente sind. Man hat sie in der Innenstadt nahe der Kleinberg-Güter umherstreifen sehen, was Gerüchten über den Bleichen Mann und seine ständigen Experimente mit Mutation und Kontamination Nahrung gibt. Der Juggernaut-Koloss durchstreift die Straßen wie eine Art Wächter, schließt sich anderen Elenden als Leibwächter an und kämpft stets bis zum letzten Atemzug."
    ],
    besonderheiten: [
      {
        name: "Regeneration",
        beschreibung: "Der Koloss erhält zu Beginn seines Zuges 10 Trefferpunkte zurück. Wenn der Koloss Säure- oder Kälteschaden erleidet, funktioniert dieses Merkmal in seinem nächsten Zug nicht. Der Koloss stirbt nur, wenn er seinen Zug mit 0 Trefferpunkten beginnt und sich nicht regeneriert."
      },
      {
        name: "Aus dem Weg",
        beschreibung: "Wenn sich der Koloss mehr als 3 m in gerader Linie bewegt, ist jede Kreatur innerhalb von 1,5 m seines Weges folgendem Effekt ausgesetzt. Geschicklichkeits-Rettungswurf: SG 17. Misserfolg: Das Ziel wird 1,5 m vom Koloss weggestoßen und erhält den Zustand Liegend."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Juggernaut-Koloss führt zwei Rostiges-Schwert-Angriffe aus. Er kann einen davon durch Wirbelwind ersetzen, wenn dieser verfügbar ist."
      },
      {
        name: "Rostiges Schwert",
        beschreibung: "Nahkampf-Angriffswurf: +9, Reichweite 1,5 m. Treffer: 13 (2W6 + 6) Hiebschaden, und das Ziel erhält den Zustand Blutend (2W6)."
      },
      {
        name: "Wirbelwind (Aufladen 5–6)",
        beschreibung: "Der Koloss schwingt seine Klingen in einem gewaltigen, schweren Kreisbogen um sich. Stärke-Rettungswurf: SG 17 für jede Kreatur innerhalb von 3 m des Kolosses. Misserfolg: 27 (6W6 + 6) Hiebschaden, und das Ziel erhält den Zustand Liegend. Erfolg: Nur halber Schaden."
      }
    ],
    bonusaktionen: [
      {
        name: "Reißen und Zerreißen",
        beschreibung: "Der Koloss führt einen Rostiges-Schwert-Angriff gegen eine liegende Kreatur aus."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Käferritter",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 4,
    xp: 1100,
    rk: 19,
    ruestungstyp: null,
    tp: 95,
    tp_wuerfel: "10W10+40",
    bewegung: { "Gehen": "9 m", "Klettern": "6 m", "Fliegen": "6 m" },
    attribute: { STR: 18, DEX: 6, CON: 18, INT: 3, WIS: 15, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/kaeferritter.png",
    beschreibung: [
      "Zwei insektenhafte Beine tragen die käferähnliche Kreatur und klacken rhythmisch, wenn sie umherschurrt. Zwei Klauarme kratzen unter klingenartigen Gliedmaßen, während knirschende Mandibeln unter ihren kleinen Augen schnattern. Ein massiges zangenartiges Horn ragt aus ihrem helmförmigen Kopf heraus, und eine robuste bläulich-silberne Schale schützt zarte Flügel, die darunter verborgen sind.",
      "Käferritter repräsentieren die Mutationen, die sich nach dem Meteoriteneinschlag sogar in den kleinsten Kreaturen finden. Insekten, die einst aus dem Boden, aus Wandrissen oder zwischen Dielen krochen, wurden durch den Kontakt mit Delirium und die Einwirkung des Dunstes verändert. Viele sind auf monstruöse Weise auf humanoide Größe oder sogar noch darüber hinaus gewachsen.",
      "Die Schalen der Käferritter sind dick genug, um sie vor den meisten Angriffen zu schützen. Ihr Name rührt daher, dass ihre Schalen zu etwas mutiert sind, das einer Plattenrüstung ähnelt, während sensenförmige Hände und ein massiges Horn wie ein Klingenpaar und ein verzierter Helm wirken. Auf den ersten Blick ähneln diese Kreaturen einem gepanzerten Ritter, der bereit für die Schlacht ist.",
      "Käferritter verstecken sich häufig in den Ruinen und Abwasserkanälen von Drakkenheim und ernähren sich von Tiefen Träumern und anderen kleineren Kreaturen. Gelegentlich, nachts oder nach starken Regenfällen, tauchen Käferritter in großer Zahl auf, um Unvorbereitete zu überraschen und zu überwältigen."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Käferritter führt zwei Klingenarmangriffe aus."
      },
      {
        name: "Klingenarm",
        beschreibung: "Nahkampf-Angriffswurf: +6, Reichweite 3 m. Treffer: 13 (2W8 + 4) Hiebschaden."
      },
      {
        name: "Zangenhorn",
        beschreibung: "Nahkampf-Angriffswurf: +6, Reichweite 3 m. Treffer: 15 (2W10 + 4) Stichschaden, oder 26 (4W10 + 4) Stichschaden, wenn sich der Käferritter unmittelbar vor dem Treffer mindestens 6 m geradeaus auf das Ziel zubewegt hat. Wenn das Ziel Mittelgroß oder kleiner ist, erhält es den Zustand Gepackt (Entkommen SG 14). Solange es Gepackt ist, hat das Ziel den Zustand Festgehalten, und der Käferritter kann sein Zangenhorn nicht gegen ein anderes Ziel einsetzen."
      }
    ],
    bonusaktionen: [
      {
        name: "Schleudern",
        beschreibung: "Stärke-Rettungswurf: SG 14, eine vom Käferritter gepackte Kreatur. Misserfolg: Das Ziel wird bis zu 1W6 × 3 m weit geschleudert und landet mit dem Zustand Liegend. Wenn das Ziel auf eine feste Oberfläche trifft, erleidet es 3 (1W6) Wuchtschaden für je 3 m, die es geschleudert wurde. Wenn das Ziel auf eine andere Kreatur geworfen wird, muss diese einen Geschicklichkeits-Rettungswurf (SG 14) bestehen oder denselben Schaden erleiden und den Zustand Liegend erhalten."
      }
    ],
    reaktionen: [
      {
        name: "Panzerparade",
        beschreibung: "Auslöser: Eine Kreatur, die der Käferritter sehen kann, trifft ihn mit einem Angriff. Reaktion: Der Käferritter addiert 2 zu seiner RK gegen diesen Angriff, was ihn möglicherweise verfehlen lässt."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Kakophonische Chimäre",
    art: "Monstrosität",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Chaotisch böse",
    cr: 13,
    xp: 10000,
    rk: 18,
    ruestungstyp: null,
    tp: 54,
    tp_wuerfel: "4W12+28",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m" },
    attribute: { STR: 23, DEX: 15, CON: 25, INT: 13, WIS: 17, CHA: 18 },
    rettungswuerfe: { KON: 12, INT: 6, WEI: 8, CHA: 9 },
    fertigkeiten: { "Wahrnehmung": 8 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 18,
    sprachen: ["Abyssal", "Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/kakophonische_chimaere.png",
    beschreibung: [
      "Die drei Köpfe der kakophonischen Chimäre bestehen aus einer zwitschernden Ratte, einer kreischenden Harpyie und einem heulenden Garmyr, die gemeinsam einen wahnsinnsinduzierenden Chor aufführen, während sie ihre Beute abschlachten. Ihre Vorderbeine sind rattenartige Klauen, ihre Hinterbeine sind Vogelkrallen, und der kolossale, pelzige Körper des Biests wird von riesigen Flügeln aus blutrotem Gefieder getragen – mit einem glitschigen Neunaugenaal als Schwanz.",
      "Die kakophonische Chimäre entstand aus einer katastrophalen Verschmelzung mehrerer Kreaturen – eines Garmyrs, eines Tiefen Dregs, eines Manticors, eines Rattwesens und einer Harpyie – inmitten eines erbitterten Kampfes. Gefangen in einer schrecklichen arkanen Anomalie, wurden diese Kreaturen unfreiwillig zu einer einzigen, schrecklichen Form vereint. Jeder Kopf behält die Erinnerungen und Instinkte seiner ursprünglichen Form und treibt die Chimäre in einem ständigen Kampf um Vorherrschaft an. Dieser unerbittliche innere Konflikt befeuert ihren Wahnsinn und ihre Aggressivität gegenüber allem, was sie in den Ruinen antrifft.",
      "Die kakophonische Chimäre lebt in einem ständigen Zustand innerer Zwietracht, da ihre drei Köpfe, jeder mit seinen eigenen räuberischen Instinkten, um die Kontrolle über ihren Körper wetteifern. Das ständige Streiten und Schreien unter den Köpfen erzeugt einen Klang, der schmerzhaft in den Schädeln aller widerhallt, die ihn hören, und Schrecken, Verwirrung sowie Wahnsinn auslöst. Je nachdem, welcher Kopf vorübergehend die Vorherrschaft erlangt, variieren Ton und Wirkung des kombinierten Kreischens und lassen die Beute desorientiert und wehrlos zurück.",
      "Dieses Schreckenswesen jagt durch die Außenstadt und legt Lager in den bröckelnden Ruinen der Speichenbörse der Händler an. Der Hauptturm war eines der höchsten Gebäude außerhalb der Mauern Drakkenheims. Das Bauwerk ist zu einer heruntergekommenen Ruine geworden – der schiefe Turm durch das ständige Kreischen der Chimäre geschwächt. Trotzdem bietet dieser strategische Ausguck nicht nur einen idealen Überblickspunkt; der Strukturschaden hält auch andere Monster und Abenteurer davon ab, in die Domäne der Chimäre einzudringen.",
      "Charaktereigenschaft: Das Rattwesen-Haupt drängt stets auf Konversation, bevor gefressen wird – die anderen beiden Köpfe brüllen es nieder. Bindung: Alle drei sind miteinander verschmolzen und fürchten insgeheim, was eine Trennung bedeuten würde. Ideal: Das Harpyien-Haupt liebt den Klang des gemeinsamen Orchesters und kann Stille nicht ertragen. Makel: Der ständige innere Streit lenkt die Chimäre von Gelegenheiten ab und treibt sie selbst in Fallen."
    ],
    besonderheiten: [
      {
        name: "Epische Trefferpunkte",
        beschreibung: "Die kakophonische Chimäre hat 54 (4W12 + 28) Trefferpunkte plus weitere 54 (4W12 + 28) Trefferpunkte pro Spielercharakter in der Gruppe."
      },
      {
        name: "Kakophoner Chor",
        beschreibung: "Die kakophonische Chimäre erzeugt einen Ausstrahlungsbereich von 9 m aus Lärm. Eine Kreatur, die ihren Zug in dem Ausstrahlungsbereich beginnt und sie hören kann, erleidet 10 (3W6) Donnerschaden."
      },
      {
        name: "Scharfer Seh- und Geruchssinn",
        beschreibung: "Die kakophonische Chimäre hat Vorteil auf Weisheits-Wahrnehmungswürfe, die auf dem Sehen oder Riechen basieren."
      }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Crescendo des Chaos (1/Tag)",
        beschreibung: "Auslöser: Die kakophonische Chimäre wird verwundet. Sie kann diese Reaktion auch dann verwenden, wenn sie den Zustand Handlungsunfähig hat oder anderweitig keine Reaktionen ausführen kann. Reaktion: Alle Zustände und Zauber auf der kakophonischen Chimäre enden sofort, es sei denn, sie entscheidet sich, davon betroffen zu bleiben. Sie bewegt sich bis zu ihrer Bewegungsrate, ohne Gelegenheitsangriffe zu provozieren und schwieriges Gelände zu ignorieren. Anschließend entfesselt sie einen Schall donnernder Kraft. Kreaturen innerhalb von 90 m, die sie hören können, sind folgendem Effekt ausgesetzt. Weisheits-Rettungswurf: SG 17. Misserfolg: 17 (5W6) Donnerschaden plus 17 (5W6) psychischer Schaden, und das Ziel erhält den Zustand Liegend und kann sich bis zum Ende seines nächsten Zuges nicht erheben."
      }
    ],
    legendaere_aktionen: [
      {
        name: "Epische Aktionen",
        beschreibung: "Die kakophonische Chimäre handelt immer bei Initiative 20. In ihrem Zug kann sie ihre Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt sie dazu. Stattdessen führt die kakophonische Chimäre am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus."
      },
      {
        name: "Klauen und Krallen",
        beschreibung: "Nahkampf-Angriffswurf: +11, Reichweite 3 m. Treffer: 11 (1W10 + 6) Hiebschaden. Wenn das Ziel Groß oder kleiner ist, erhält es den Zustand Liegend."
      },
      {
        name: "Kontaminierter Biss (1/Runde)",
        beschreibung: "Nahkampf-Angriffswurf: +11, Reichweite 3 m. Treffer: 17 (2W10 + 6) Stichschaden plus 10 (3W6) nekrotischer Schaden. Konstitutions-Rettungswurf: SG 17. Misserfolg: Das Ziel erhält eine Kontaminationsstufe."
      },
      {
        name: "Neunaugenschwanz",
        beschreibung: "Nahkampf-Angriffswurf: +11, Reichweite 9 m. Treffer: 13 (2W6 + 6) Stichschaden, und das Ziel erleidet den Zustand Blutend (2W4)."
      },
      {
        name: "Luftmanöver (1/Runde)",
        beschreibung: "Die kakophonische Chimäre fliegt bis zu ihrer Bewegungsrate, ohne Gelegenheitsangriffe zu provozieren."
      },
      {
        name: "Kakophonie (1/Runde)",
        beschreibung: "Die kakophonische Chimäre lässt ihre drei Köpfe ein dissonantes Lied singen. Je nachdem, welcher Kopf die Führung übernimmt, variiert der Effekt. Jedes Mal, wenn diese Epische Aktion verwendet wird, kann nicht derselbe Effekt wie in der Vorrunde gewählt werden. Verwirrendes Zwitschern (Rattwesen): Intelligenz-Rettungswurf: SG 17, jede Kreatur in einem Ausstrahlungsbereich von 90 m, die die Chimäre hören kann. Misserfolg: 10 (3W6) psychischer Schaden, und das Ziel erhält den Zustand Verwirrt (Rettungswurf beendet den Effekt). Eisiges Heulen (Garmyr): Weisheits-Rettungswurf: SG 17, jede Kreatur in einem Ausstrahlungsbereich von 90 m, die die kakophonische Chimäre hören kann. Misserfolg: 10 (3W6) Kälteschaden, und das Ziel erhält den Zustand Bewegungsunfähig (Rettungswurf beendet den Effekt). Torkelndes Kreischen (Harpyie): Charisma-Rettungswurf: SG 17, jede Kreatur in einem Ausstrahlungsbereich von 90 m, die die kakophonische Chimäre hören kann. Misserfolg: 10 (3W6) nekrotischer Schaden, und das Ziel erhält den Zustand Getaumelt (Rettungswurf beendet den Effekt)."
      },
      {
        name: "Flügelschlag",
        beschreibung: "Stärke-Rettungswurf: SG 17, jede Kreatur innerhalb von 4,5 m der kakophonischen Chimäre. Misserfolg: 13 (2W6 + 6) Donnerschaden, und das Ziel wird 3 m von der Chimäre weggestoßen. Erfolg: Nur halber Schaden."
      },
      {
        name: "Epische Resistenz",
        beschreibung: "Die kakophonische Chimäre wählt einen Zustand, Zauber oder anderen Effekt, der sie derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihr. Sie kann diese Epische Aktion auch dann verwenden, wenn sie anderweitig keine Aktionen ausführen kann, ihre Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt ihre Spielwerte verändert."
      }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Kanalwesen",
    art: "Pflanze",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 7,
    xp: 2900,
    rk: 17,
    ruestungstyp: null,
    tp: 92,
    tp_wuerfel: "8W12+40",
    bewegung: { "Gehen": "6 m", "Schwimmen": "12 m" },
    attribute: { STR: 20, DEX: 12, CON: 20, INT: 3, WIS: 11, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Säure", "Kälte", "Feuer"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Taub", "Erschöpfung", "Vergiftet"],
    sinne: ["Blindsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Versteht Gemein, spricht es aber nicht"],
    umgebung: ["Gewässer", "Unterirdisch", "Ruinen"],
    bild: "drakkenheim/kanalwesen.png",
    beschreibung: [
      "Niemand weiß, wie das Kanalwesen entstanden ist. Manche vermuten, es sei ein Mensch, der in den Kanälen ertrank, bevor die Kontamination seine Form annahm und ihn mit dem rohen Abwasser um ihn herum verschmolz. Andere glauben, es sei die Kontamination selbst, die Pflanzen und Trümmer in grauenhafte Monster verwandelt.",
      "Das Kanalwesen jagt in den Kanälen von Drakkenheim und absorbiert alles, was ihm in den Weg kommt. Es ist ein unsichtbarer Mörder, der seine Tentakel nutzt, um Opfer in die Kanalisation zu ziehen und zu absorbieren. Ratlings nutzen das Kanalwesen als Warnmärchen für ihre Jungen und sagen ihnen, sie sollen nicht alleine reisen und weglaufen, wenn das Wasser aufgewühlt wird.",
      "Das Kanalwesen wartet auf den günstigsten Augenblick zum Angriff und tarnt sich als Pflanzenmasse über Kanaltrümmern. Sobald die Beute nah genug ist, erwacht es zum Leben, peitscht mit seinen Tentakeln aus und versucht, seine Opfer zu verschlingen – bevor es ins Abwasser abtaucht und flieht."
    ],
    besonderheiten: [
      { name: "Instinktiver Hinterhalt", beschreibung: "Zu Beginn des ersten Zuges des Kanalwesens in jedem Kampf kann es, wenn es eine Kreatur angreift, als Teil seines Mehrfachangriffs einen zusätzlichen Tentakelangriff durchführen." },
      { name: "Giftabsorption", beschreibung: "Wann immer das Kanalwesen Giftschaden erleidet, erleidet es keinen Schaden und erhält stattdessen so viele Trefferpunkte zurück, wie der Giftschaden betragen hätte." },
      { name: "Giftige Aura", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 1,5 m um das Kanalwesen beginnt, ist folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 12. Fehlschlag: 5 (1W10) Giftschaden." },
      { name: "Unerwartetes Erscheinen", beschreibung: "Wenn das Kanalwesen zu Beginn des Kampfes reglos ist, hat es Vorteil auf seinen Initiativewurf. Außerdem muss eine Kreatur, die das Kanalwesen noch nicht in Bewegung oder Aktion gesehen hat, einen Intelligenz (Nachforschung)-Wurf SG 18 bestehen, um zu erkennen, dass das Kanalwesen lebendig ist." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Das Kanalwesen führt zwei Angriffe aus und setzt Verschlingen ein." },
      { name: "Tentakelangriff", beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 9 m. Treffer: 14 (2W8+5) Wuchtschaden, und das Ziel erhält den Zustand Gepackt (Entkommen SG 16)." },
      { name: "Einziehen", beschreibung: "Das Kanalwesen zieht jede von ihm gepackte Kreatur bis zu 6 Meter geradeaus auf sich zu." },
      { name: "Verschlingen", beschreibung: "Das Kanalwesen verschlingt eine Mittelgroße oder kleinere Kreatur innerhalb von 1,5 m, die von ihm gepackt ist. Das Packen endet. Das Ziel erhält die Zustände Geblendet und Festgehalten, erstickt und ist zu Beginn jedes Zuges des Kanalwesens folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 16. Fehlschlag: 11 (2W10) Giftschaden plus 11 (2W10) Säureschaden. Wenn das Kanalwesen sich bewegt, bewegt sich das Ziel mit ihm. Das Kanalwesen kann bis zu vier Kreaturen gleichzeitig verschlingen. Eine verschlungene Kreatur kann eine Aktion aufwenden, um zu entkommen: Bei einem erfolgreichen Stärke (Athletik)-Wurf SG 16 landet sie in einem unbesetzten Feld innerhalb von 1,5 m des Kanalwesens." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Kapuzenlaterne-Apotheker",
    art: "Humanoid",
    unterart: "NPC",
    groesse: "Mittelgroß",
    gesinnung: "Neutral gut",
    cr: 2,
    xp: 450,
    rk: 13,
    ruestungstyp: "Lederrüstung",
    tp: 39,
    tp_wuerfel: "6W8+12",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 10, DEX: 15, CON: 14, INT: 17, WIS: 15, CHA: 13 },
    rettungswuerfe: {},
    fertigkeiten: { "Medizin": 4, "Naturkunde": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Stadt", "Ruinen"],
    bild: "drakkenheim/kapuzenlaterne-apotheker.png",
    beschreibung: [
      "Die Kapuzenlaterne-Apotheker sind die Sanitäter der Kapuzenlaternen. Sie sind an ihrer weißen Tunika mit grünem Kapuzenlaternen-Emblem zu erkennen und tragen eine lederne Kapuze sowie eine große Arzttasche und einen Bandelier mit Fläschchen für verschiedene Beschwerden oder Gifte.",
      "Apotheker sind ausgebildete Sanitäter, die die Kapuzenlaternen im Kampf unterstützen, indem sie Verwundete kampffähig halten und schwer verletzte Soldaten in Sicherheit bringen. Obwohl ein Apotheker das Unterstützungsregiment selten verlässt, gehören sie zu den angesehensten Kapuzenlaternen überhaupt."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Kurzschwert", beschreibung: "Nahkampf-Angriffswurf: +4, Reichweite 1,5 m. Treffer: 5 (1W6+2) Stichschaden." },
      { name: "Handarmbrust", beschreibung: "Fernkampf-Angriffswurf: +4, Reichweite 9/36 m. Treffer: 4 (1W4+2) Stichschaden. Konstitutions-Rettungswurf: SG 12. Fehlschlag: 10 (3W6) Giftschaden. Erfolg: Halber Schaden." },
      { name: "Medizinische Behandlung (3/Tag)", beschreibung: "Der Apotheker berührt eine andere Kreatur. Das Ziel erhält 20 (4W8+2) Trefferpunkte zurück, und der Apotheker beendet eine Krankheit oder einen der folgenden Zustände auf dem Ziel: Geblendet, Taub, Gelähmt oder Vergiftet." },
      { name: "Zauberei", beschreibung: "Der Apotheker wirkt einen der folgenden Zauber und verwendet Weisheit als Zauberfähigkeit (Rettungswurf-SG 12, +4 auf Zauberangriffe): 1/Tag jeder: Beistand, Kleine Wiederherstellung, Schutz vor Gift, Kontamination reinigen" }
    ],
    bonusaktionen: [
      { name: "Adrenalinstoß", beschreibung: "Ein verbündetes Wesen innerhalb von 1,5 m des Apothekers kann seine Reaktion nutzen, um sich bis zu seiner Bewegungsrate zu bewegen und einen Angriff durchzuführen." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Kapuzenlaterne-Fallensteller",
    art: "Humanoid",
    unterart: "NPC",
    groesse: "Mittelgroß",
    gesinnung: "Neutral gut",
    cr: 2,
    xp: 450,
    rk: 13,
    ruestungstyp: "Lederrüstung",
    tp: 30,
    tp_wuerfel: "4W8+12",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 15, DEX: 15, CON: 16, INT: 10, WIS: 11, CHA: 8 },
    rettungswuerfe: { GES: 4 },
    fertigkeiten: { "Heimlichkeit": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Stadt", "Ruinen"],
    bild: "drakkenheim/kapuzenlaterne-fallensteller.png",
    beschreibung: [
      "Der Kapuzenlaterne-Fallensteller ist einer der Feldeinsatzbeauftragten des Unterstützungsregiments mit einer doppelten Aufgabe: Er ist sowohl Jäger, der die Kapuzenlaternen mit frischem Fleisch und Proviant aus den Wäldern versorgt, als auch legt er Fallen und Hinterhalte für Sondereinsätze innerhalb der Stadtmauern.",
      "Fallensteller sind mit allerlei Werkzeug und alchemistischen Zutaten gut ausgerüstet, um fortschrittliche Fallen gegen Monstergruppen zu bauen und dem Vorhutregiment entscheidende Vorteile zu verschaffen."
    ],
    besonderheiten: [
      { name: "Pulverfass", beschreibung: "Wenn der Fallensteller Schaden durch einen kritischen Treffer erleidet, muss er einen Geschicklichkeits-Rettungswurf SG 12 bestehen, oder der Treffer zerstört seine alchemistischen Vorräte und sein Schwarzpulver. Jede Kreatur innerhalb von 4,5 m des Fallenstellers (einschließlich des Fallenstellers selbst) ist folgendem Effekt ausgesetzt. Geschicklichkeits-Rettungswurf: SG 12. Fehlschlag: 28 (8W6) Feuerschaden. Erfolg: Halber Schaden." }
    ],
    aktionen: [
      { name: "Dolch", beschreibung: "Nahkampf-Angriffswurf: +4, Reichweite 1,5 m. Treffer: 4 (1W4+2) Stichschaden." },
      { name: "Fallensteller-Armbrust", beschreibung: "Fernkampf-Angriffswurf: +4, Reichweite 18/36 m. Treffer: 11 (2W8+2) Stichschaden, und das Ziel ist einem der folgenden Effekte nach Wahl des Fallenstellers ausgesetzt: Bolawurf. Geschicklichkeits-Rettungswurf: SG 12. Fehlschlag: Das Ziel erhält den Zustand Liegend. Betäubungsschuss. Konstitutions-Rettungswurf: SG 12. Fehlschlag: Das Ziel erhält den Zustand Benommen bis zum Ende seines nächsten Zuges. Netzschuss (1/Tag). Stärke-Rettungswurf: SG 12. Fehlschlag: Das Ziel erhält den Zustand Bewegungsunfähig (Rettung beendet)." },
      { name: "Falle aufstellen (5/Tag)", beschreibung: "Der Fallensteller stellt eine Falle in einem Bereich innerhalb von 1,5 m auf. Eine Kreatur, die sich innerhalb von 1,5 m der Falle bewegt, löst sie sofort aus und betrifft alle Kreaturen in einem Umkreis von 1,5 m. Die Falle kann eine der Optionen des Fallensteller-Armbrustbolzens sein oder eine der folgenden Optionen: Feuerfalle. Geschicklichkeits-Rettungswurf: SG 12. Fehlschlag: Das Ziel erhält den Zustand Brennend (1W8). Schockfalle. Stärke-Rettungswurf: SG 12. Fehlschlag: Das Ziel erhält den Zustand Erschüttert bis zum Ende seines nächsten Zuges. Frostfalle. Konstitutions-Rettungswurf: SG 12. Fehlschlag: Das Ziel erhält den Zustand Erstarrt (SG 10)." }
    ],
    bonusaktionen: [
      { name: "Rauchbombe (Aufladen nach einer kurzen oder langen Rast)", beschreibung: "Der Fallensteller wirkt Nebelwolke, ohne Bestandteile zu benötigen, und verwendet Weisheit als Zauberfähigkeit." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Kapuzenlaterne-Späher",
    art: "Humanoid",
    unterart: "NPC",
    groesse: "Mittelgroß",
    gesinnung: "Neutral gut",
    cr: 1,
    xp: 200,
    rk: 15,
    ruestungstyp: "Verstärkte Lederrüstung",
    tp: 32,
    tp_wuerfel: "5W8+10",
    bewegung: { "Gehen": "12 m", "Klettern": "6 m" },
    attribute: { STR: 12, DEX: 16, CON: 14, INT: 10, WIS: 13, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 5, "Heimlichkeit": 5, "Überleben": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 15,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Stadt", "Ruinen"],
    bild: "drakkenheim/kapuzenlaterne-spaeher.png",
    beschreibung: [
      "Als Vorauspatrouillen des Wachtregiments sind Späher Kapuzenlaternen-Mitglieder, die noch nicht für den intensiven Felddienst der Vorhut bereit sind, sich aber als fähig erwiesen haben, die Ruinen zu navigieren und auf den Straßen verborgen zu bleiben.",
      "Sie fungieren als Augen und Ohren der Kapuzenlaternen, behalten Monstergruppen in der Stadt im Blick und geben mit ihrer Leuchtpistole Signale, um die schwerer bewaffnete Vorhut zu alarmieren."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Späher führt zwei Angriffe aus." },
      { name: "Kurzschwert", beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m. Treffer: 6 (1W6+3) Stichschaden." },
      { name: "Langbogen", beschreibung: "Fernkampf-Angriffswurf: +5, Reichweite 45/180 m. Treffer: 7 (1W8+3) Stichschaden, und das Ziel erhält den Zustand Gehemmt bis zum Ende des nächsten Zuges des Spähers." }
    ],
    bonusaktionen: [
      { name: "Markierung", beschreibung: "Der Späher wirkt Jägermal und verwendet Weisheit als Zauberfähigkeit." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Kapuzenlaterne-Veteran",
    art: "Humanoid",
    unterart: "NPC",
    groesse: "Mittelgroß",
    gesinnung: "Neutral gut",
    cr: 4,
    xp: 1100,
    rk: 15,
    ruestungstyp: "Verstärkte Lederrüstung",
    tp: 52,
    tp_wuerfel: "7W8+21",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m" },
    attribute: { STR: 13, DEX: 17, CON: 15, INT: 11, WIS: 15, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Athletik": 5, "Wahrnehmung": 6, "Heimlichkeit": 7, "Überleben": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 16,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Stadt", "Ruinen"],
    bild: "drakkenheim/kapuzenlaterne-veteran.png",
    beschreibung: [
      "Dachschützen gehören dem Vorhutregiment an und sind außergewöhnlich präzise im Umgang mit dem Bogen. Sie tragen dunkle, rustikale Rüstungen in den Farben der Drakkenheimer Ruinen, tiefgrüne Umhänge und gut gefertigte Präzisionslangbögen.",
      "Dachschützen reisen oft in Gruppen, lokalisieren ihre Feinde, besetzen mehrere Aussichtspunkte um sie herum und warten auf den richtigen Moment zum Zuschlagen. Wer die Anzahl der gegenüberstehenden Kapuzenlaternen zu kennen glaubt, bemerkt die unsichtbaren Schützen über sich oft zu spät."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Veteran führt zwei Angriffe aus." },
      { name: "Kurzschwert", beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m. Treffer: 6 (1W6+3) Stichschaden." },
      { name: "Langbogen", beschreibung: "Fernkampf-Angriffswurf: +5, Reichweite 45/180 m. Treffer: 7 (1W8+3) Stichschaden, und das Ziel erhält den Zustand Gehemmt bis zum Ende des nächsten Zuges des Veteranen." },
      { name: "Zauberei", beschreibung: "Der Veteran wirkt einen der folgenden Zauber und verwendet Weisheit als Zauberfähigkeit (Rettungswurf-SG 12, +4 auf Zauberangriffe): 1/Tag jeder: Wunden heilen, Nebelwolke, Spurlos" }
    ],
    bonusaktionen: [
      { name: "Markierung", beschreibung: "Der Veteran wirkt Jägermal und verwendet die Zauberfähigkeit aus Zauberei." },
      { name: "Schneller Aufstieg", beschreibung: "Der Veteran bewegt sich bis zu 9 m in eine gerade Linie in eine beliebige Richtung, sofern er seinen Zug angrenzend an einer festen Oberfläche beendet." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Karmesinritter",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 6,
    xp: 2300,
    rk: 17,
    ruestungstyp: "halbe Plattenrüstung und Schild",
    tp: 102,
    tp_wuerfel: "12W8+48",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 19, DEX: 15, CON: 18, INT: 10, WIS: 14, CHA: 15 },
    rettungswuerfe: { STR: 7, KON: 7, WEI: 5 },
    fertigkeiten: { "Athletik": 7, "Einschüchtern": 5 },
    schadensresistenzen: ["Nekrotisch", "Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m (auch in magischer Dunkelheit)"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/karmesinritter.png",
    beschreibung: [
      "In geschwärzter Stahlrüstung mit roten Akzenten gekleidet, trägt dieser Ritter das Zeichen seines vampirischen Herrn auf seinem Turmschild. Er schwingt eine Axt, die von roter Energie durchzuckt wird; blutrot leuchtende Augen blicken aus dem Helm, die Fangzähne sichtbar und hungrig.",
      "Die Karmesinritter sind gewappnete Vampirbrut, penibel ausgebildet als Elitesoldaten und persönliche Leibwächter ihrer vampirischen Herren. Diese Kämpfer sind untrennbar an den Dienst an ihren Herrschern gebunden und schöpfen tiefe Befriedigung aus dem Gemetzel, das sie zu deren Ehre anrichten. Im Kampf sind sie am gefährlichsten – der Hunger nach Blut treibt sie ewig an, und jeder Kampf ist zugleich eine Mahlzeit."
    ],
    besonderheiten: [
      { name: "Regeneration", beschreibung: "Der Karmesinritter regeneriert zu Beginn seines Zuges 10 Trefferpunkte, sofern er mindestens 1 Trefferpunkt hat und sich nicht in Sonnenlicht oder fließendem Wasser befindet. Wenn er Strahlungsschaden oder Schaden durch geweihtes Wasser erleidet, funktioniert diese Eigenschaft zu Beginn seines nächsten Zuges nicht." },
      { name: "Spinnenklettern", beschreibung: "Der Karmesinritter kann schwierige Oberflächen, einschließlich verkehrt herum an Decken, erklimmen, ohne einen Fähigkeitswurf ablegen zu müssen." },
      { name: "Vampirschwächen", beschreibung: "Der Karmesinritter hat folgende Schwächen: Sonnenlichtempfindlichkeit – Beim Start seines Zuges in direktem Sonnenlicht erleidet er 20 Strahlungsschaden und hat Nachteil auf Angriffswürfe und Fähigkeitswürfe. Fließendes Wasser – Beim Start seines Zuges in fließendem Wasser erleidet er 20 Säureschaden. Einladungspflicht – Er kann eine private Unterkunft nicht betreten, ohne eingeladen zu werden. Pfahl durch das Herz – Ein hölzerner Pfahl, der während er kampfunfähig ist durch sein Herz getrieben wird, verleiht ihm die Bewegungsunfähig-Bedingung." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Karmesinritter führt drei Angriffe aus. Er kann einen Angriff durch Biss ersetzen." },
      { name: "Klauen", beschreibung: "Nahkampfangriff: +7 auf den Trefferwurf, Reichweite 1,5 m. Treffer: 9 (2W4+4) Hiebangriff. Wenn das Ziel Mittelgroß oder kleiner ist, erhält es die Gepackt-Bedingung (Entkommen SG 15)." },
      { name: "Karmesinaxt", beschreibung: "Nah- oder Fernkampfangriff: +7 auf den Trefferwurf, Reichweite 1,5 m oder 9 m / 27 m. Treffer: 11 (1W12+4) Kraftschaden. Nach dem Wurf kehrt die Axt in die Hand des Karmesinritters zurück. Der Karmesinritter wählt einen der folgenden Effekte: Krachender Hieb – Stärkerettungswurf SG 16. Misserfolg: 10 (3W6) Donnerschaden, und das Ziel erhält die Schockiert-Bedingung bis zum Ende seines nächsten Zuges. Erfolg: Nur halber Schaden. Unheiliger Hieb – Konstitutionsrettungswurf SG 16. Misserfolg: 10 (3W6) Nekrotischer Schaden, und das Ziel kann bis zum Ende des nächsten Zuges des Karmesinritters keine Trefferpunkte regenerieren. Erfolg: Nur halber Schaden. Zorniger Hieb – Weisheitsrettungswurf SG 16. Misserfolg: 10 (3W6) Psychischer Schaden, und das Ziel erhält die Verängstigt-Bedingung (Rettungswurf am Ende des Zuges beendet sie). Erfolg: Nur halber Schaden." },
      { name: "Biss", beschreibung: "Konstitutionsrettungswurf SG 15 für eine Kreatur innerhalb von 1,5 m, die sich freiwillig stellt oder die Gepackt-, Kampfunfähig- oder Festgehalten-Bedingung hat. Misserfolg: 14 (3W6+4) Nekrotischer Schaden, und der Karmesinritter regeneriert Trefferpunkte in Höhe des verursachten Schadens." }
    ],
    bonusaktionen: [
      { name: "Ansturm", beschreibung: "Der Karmesinritter bewegt sich bis zu seiner Bewegungsrate auf eine feindliche Kreatur zu, die er sehen kann. Wenn er diese Bewegung innerhalb von 1,5 Metern der Kreatur beendet, hat er Vorteil auf seinen nächsten Angriffswurf gegen diese Kreatur vor Ende seines Zuges." }
    ],
    reaktionen: [
      { name: "Ungezügelte Wut", beschreibung: "Auslöser: Eine Kreatur trifft den Karmesinritter mit einem Angriff. Reaktion: Der Karmesinritter führt einen Karmesinaxt-Angriff gegen den Angreifer aus." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Königstöter-Hydra",
    art: "Konstrukt",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Gesinnungslos",
    cr: 18,
    xp: 20000,
    rk: 19,
    ruestungstyp: null,
    tp: 92,
    tp_wuerfel: "8W12+40",
    bewegung: { "Gehen": "15 m", "Schwimmen": "15 m" },
    attribute: { STR: 26, DEX: 10, CON: 21, INT: 10, WIS: 15, CHA: 19 },
    rettungswuerfe: { GES: 6, KON: 11, WEI: 8, CHA: 10 },
    fertigkeiten: {},
    schadensresistenzen: ["Säure"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Brennend (nur durch Säure)", "Bezaubert", "Taub", "Verängstigt", "Vergiftet", "Betäubt", "Bewusstlos"],
    sinne: ["Blindsicht 18 m", "Zittersinn 90 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Versteht die Sprachen seines Schöpfers, spricht aber nicht"],
    umgebung: ["Ruinen"],
    bild: "drakkenheim/koenigstoeter_hydra.png",
    beschreibung: [
      "Die Königstöter-Hydra ist eine schauerliche Flickwerk-Kreatur, deren Körper mit Metallschrott und Körperteilen gewaltiger Ungetüme zusammengenäht wurde. Ihr Fleisch ist bleich und verfärbt, mit schillernden Schuppen, die ihren Glanz verloren haben; an vielen Stellen fehlen sie gänzlich. Die vielen Köpfe sind chirurgisch angenäht – mit milchig-weißen Augen in alten, verwesenden Höhlen. Giftige Chemikalien pumpen durch ihren Körper und lassen leuchtende Adern durch die dünnsten Schuppenstellen schimmern. Widerlicher grüner Speichel tropft aus den vielen unterschiedlichen Mäulern ihrer Eidechsenköpfe.",
      "Die Königstöter-Hydra ist eine Kreatur für einen einzigen Zweck: eine Abscheulichkeit des Apothekers, entworfen vom wahnsinnigen Geist des Dr. Everett Freed, des Wiederbelebers – dem berüchtigtsten Apotheker in der Welt von Drakkenheim. Sie wurde aus dem erschlagenen Leichnam einer gewaltigen Hydra erschaffen, mit der Absicht, sie gegen jene zu wenden, die sie ursprünglich bezwangen. Ein Werkzeug der totalen Vernichtung, losgelassen auf die Feinde des grausamen Apothekers.",
      "Die Kreatur wurde zusammengenäht; wo Teile fehlten, wurden sie durch Fleisch, Schuppen, Fänge und Klauen anderer Bestien ersetzt. Ihr Blut wurde durch eine ätzende Flüssigkeit ersetzt, die durch ihren Körper pumpt, den leblosen Kadaver belebt und ihn mit nichts als Bosheit und Schmerzenserinnerungen erfüllt. Ihre Trefferpunkte betragen 92 (8W12+40) zuzüglich 92 (8W12+40) für jeden Spielercharakter in der Begegnung."
    ],
    besonderheiten: [
      { name: "Korrosive Aura", beschreibung: "Der Bereich innerhalb von 9 Metern um die Hydra ist von ätzenden Dämpfen erfüllt und gilt als leicht verdeckt. Eine Kreatur, die ihren Zug in den Dämpfen beginnt, erleidet 20 (8W4) Säureschaden." },
      { name: "Kopfanzahl", beschreibung: "Die Hydra kann pro Runde nicht mehr Biss- oder Säurespucken-Angriffe durchführen, als sie Köpfe hat. Jeder Kopf kann pro Runde nur für einen Biss- oder Säurespucken-Angriff verwendet werden." },
      { name: "Mehrere Köpfe", beschreibung: "Die Hydra hat fünf Köpfe. Immer wenn die Hydra in einem einzigen Zug 25 oder mehr Schaden erleidet, stirbt einer ihrer Köpfe. Die Hydra stirbt, wenn alle ihre Köpfe tot sind." },
      { name: "Reaktive Köpfe", beschreibung: "Für jeden Kopf, den die Hydra über den ersten hinaus hat, erhält sie eine zusätzliche Reaktion, die nur für Gelegenheitsangriffe verwendet werden kann." },
      { name: "Wachsam", beschreibung: "Während die Hydra schläft, ist mindestens einer ihrer Köpfe wach." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Die Königstöter-Hydra handelt immer bei Initiative 20. In ihrem Zug kann sie sich wie gewohnt bewegen und eine Interaktion durchführen. Sie führt jedoch keine Aktion oder Bonusaktion in ihrem Zug aus, es sei denn, sie wird durch einen Zauber oder einen anderen Effekt dazu gezwungen. Stattdessen führt die Hydra am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus." },
      { name: "Biss", beschreibung: "Nahkampfangriff: +14 auf den Trefferwurf, Reichweite 6 m. Treffer: 26 (4W8+8) Stichschaden." },
      { name: "Säurespucken", beschreibung: "Fernkampfangriff: +14 auf den Trefferwurf, Reichweite 45 m / 180 m. Treffer: 20 (8W4) Säureschaden, und das Ziel erhält die Brennend-Bedingung (8W4 Säure). Solange das Ziel brennt, hat es die Geblendet-Bedingung." },
      { name: "Köpfe nachwachsen", beschreibung: "Die Hydra kann diese Epische Aktion nur durchführen, wenn in dieser Runde mindestens einer ihrer Köpfe gestorben ist, es sei denn, dieser Kopf wurde durch Feuerschaden getötet. Die Hydra lässt zwei neue Köpfe nachwachsen und regeneriert 20 Trefferpunkte." },
      { name: "Hydra-Raserei (1/Runde)", beschreibung: "Die Hydra führt für jeden Kopf, der in dieser Runde noch keinen Angriff durchgeführt hat, einen Biss- oder Säurespucken-Angriff aus." },
      { name: "Niedertrampeln (1/Runde)", beschreibung: "Die Hydra bewegt sich bis zu ihrer Bewegungsrate, ohne dabei Gelegenheitsangriffe zu provozieren. Während dieser Bewegung kann sie durch die Felder Riesiger oder kleinerer Kreaturen ziehen. Für jede Kreatur, über die die Hydra hinwegzieht, gilt: Geschicklichkeitsrettungswurf SG 22. Misserfolg: 35 (10W6) Wuchtschaden, und das Ziel erhält die Liegend-Bedingung." },
      { name: "Schweif (1/Runde)", beschreibung: "Nahkampfangriff: +14 auf den Trefferwurf, Reichweite 4,5 m. Treffer: 34 (4W12+8) Wuchtschaden, und das Ziel wird bis zu 6 Meter von der Hydra weggestoßen." },
      { name: "Epische Resistenz", beschreibung: "Die Hydra wählt einen Zustand, einen Zauber oder einen anderen Effekt, der sie gerade betrifft, und würfelt 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihr. Die Hydra kann diese Aktion verwenden, selbst wenn sie anderweitig keine Aktionen durchführen kann, ihre Aktionen von einer anderen Kreatur kontrolliert werden oder ein Zauber oder Effekt ihre Spielwerte verändert." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Körperdieb",
    art: "Untoter",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 8,
    xp: 3900,
    rk: 15,
    ruestungstyp: null,
    tp: 136,
    tp_wuerfel: "16W10+48",
    bewegung: { "Gehen": "9 m", "Graben": "3 m" },
    attribute: { STR: 18, DEX: 11, CON: 16, INT: 7, WIS: 14, CHA: 5 },
    rettungswuerfe: { STR: 7, KON: 6 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Verängstigt"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Versteht Sprachen seines Schöpfers (spricht nicht)"],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/koerperdieb.png",
    beschreibung: [
      "Dieses zusammengestückelte Monster aus zusammengenähten Leichen sickert schwarzes Serum aus seinen Nähten. Die Gestalt ist massig, etwa zwei Meter groß, mit breiten Schultern und einem gebuckten Rücken. Ihr Kopf scheint klein im Vergleich zum Körper, mit bleichen, weißen Augen in tiefen, dunklen Augenhöhlen. Ein lippenloser Mund zwingt die Kreatur zu einem dauerhaften, drohenden Grinsen. Gekleidet in einen dicken schwarzen Trenchcoat und breiten Hut, riecht sie nach Schwefel und Pech. Das verstörlichste Merkmal sind die vier Arme der Kreatur, die in massiven, überdimensionalen Händen enden, von denen jede acht lange, spindeldürre Finger hat.",
      "Zusammengenäht aus den Überresten zahlreicher Leichen und durch verbotene alchemistische Prozesse animiert, streift der Körperdieb durch die Dunkelheit. Von einem wahnsinnigen Doktor erschaffen, um Subjekte für grausame Experimente zu entführen, lauert er in Schatten und wartet auf unvorsichtige Wanderer, um sie zu packen und in die Nacht zu entführen. Schatten umhüllen ihn und helfen ihm, seine Opfer festzuhalten, während er mit ihnen in die dunkelsten Winkel flieht."
    ],
    besonderheiten: [
      { name: "Anhaftende Schatten", beschreibung: "Eine Kreatur in Halbdunkel oder Dunkelheit hat Nachteil auf Fähigkeitswürfe, um der Umklammerung des Körperdiebs zu entkommen. Jedes Mal, wenn eine Kreatur versucht, der Umklammerung zu entkommen, während sie sich in Halbdunkel oder Dunkelheit befindet, erleidet sie 18 (4W8) nekrotischen Schaden. Wenn dieser Schaden das Ziel auf 0 Trefferpunkte reduziert, wird es stabilisiert, erhält aber den Zustand Gelähmt für 1 Stunde, auch wenn es Trefferpunkte zurückerhält." },
      { name: "Sonnenlicht-Schwäche", beschreibung: "Der Körperdieb erleidet 10 (3W6) Strahlungsschaden, wenn er seinen Zug im Sonnenlicht beendet, und hat Nachteil auf Angriffswürfe und Fähigkeitswürfe, während er sich im Sonnenlicht befindet." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Körperdieb führt vier Greifhände-Angriffe aus." },
      { name: "Greifhände", beschreibung: "Nahkampf-Angriffswurf: +7 zum Treffen, Reichweite 3 m. Treffer: 11 (2W6+4) Wuchtschaden. Wenn das Ziel eine Mittelgroße oder kleinere Kreatur ist, erhält es den Zustand Gepackt (Entkommen SG 15). Bis dieses Packen endet, kann der Körperdieb diese Hand nicht gegen ein anderes Ziel einsetzen. Der Körperdieb hat vier Hände, von denen jede ein Ziel packen kann." }
    ],
    bonusaktionen: [
      { name: "Schattenteleport", beschreibung: "Der Körperdieb teleportiert sich bis zu 36 m in einen freien Raum, den er sehen kann und der sich in Halbdunkel oder Dunkelheit befindet. Er kann jede Mittelgroße oder kleinere Kreatur mitnehmen, die er gepackt hält, und sie in einen freien Raum teleportieren, den er innerhalb von 1,5 m seines Zielpunkts sehen kann und der sich ebenfalls in Halbdunkel oder Dunkelheit befindet. Eine unwillige Kreatur kann einen Charisma-Rettungswurf SG 13 ablegen, um dem Teleport zu widerstehen. Bei einem Erfolg teleportiert sich weder die Kreatur noch der Körperdieb." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Körperlose Psyche",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 10,
    xp: 5900,
    rk: 16,
    ruestungstyp: null,
    tp: 117,
    tp_wuerfel: "18W8+36",
    bewegung: { "Schweben": "12 m" },
    attribute: { STR: 7, DEX: 17, CON: 14, INT: 18, WIS: 16, CHA: 18 },
    rettungswuerfe: { INT: 8, WEI: 7, CHA: 8 },
    fertigkeiten: { "Täuschung": 8, "Einsicht": 7, "Wahrnehmung": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Taub", "Erschöpfung", "Verängstigt", "Liegend"],
    sinne: ["Blindsicht 18 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Gemeinsprache", "Telepathie 9 m"],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/koerperlose_psyche.png",
    beschreibung: [
      "Die Körperlose Psyche ist das geistige Überbleibsel eines Magiers oder Gelehrten, dessen physischer Körper vom Delirium zersetzt wurde, während sein Geist durch die arkane Energie erhalten blieb. Diese Wesenheit treibt durch die Überreste Drakkenheims, getrieben von dem Verlangen, sich wieder einen Körper zu nehmen.",
      "Eine Körperlose Psyche erscheint als phosphoreszierendes, humanoidal geformtes Leuchten, das von flüsternden Stimmen begleitet wird. Obwohl sie keine physische Form besitzt, vermag sie psychische Energie zu bündeln und als elektrische Entladungen zu schleudern. Ihr gefürchtetstes Merkmal ist jedoch die Fähigkeit, in den Geist eines Lebewesens einzudringen und dessen Körper zu übernehmen."
    ],
    besonderheiten: [
      { name: "Körperlose Bewegung", beschreibung: "Die Körperlose Psyche kann sich durch andere Kreaturen und Objekte bewegen, als wären sie schwieriges Terrain. Sie erleidet 5 (1W10) Kraftschaden, wenn sie ihren Zug im Inneren eines Objekts beendet." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Körperlose Psyche führt zwei Elektroschock-Angriffe aus. Falls Hypnotisieren verfügbar ist, ersetzt sie einen dieser Angriffe durch den Einsatz von Hypnotisieren." },
      { name: "Elektroschock", beschreibung: "Nahkampf- oder Fernkampfzauberangriff: +8 auf den Trefferwurf, Reichweite 1,5 m oder 18 m. Treffer: 35 (10W6) Blitzschaden. Das Ziel muss zudem einen Konstitutionsrettungswurf (SG 16) bestehen oder wird bis zum Ende seines nächsten Zuges benommen." },
      { name: "Hypnotisieren (Aufladen 5–6)", beschreibung: "Die Körperlose Psyche entfaltet ihre psychische Kraft in einer Ausstrahlung von 9 Metern. Jede Kreatur in diesem Bereich muss einen Weisheitsrettungswurf (SG 16) bestehen oder wird kampfunfähig und bewegungsunfähig bis zum Ende ihres nächsten Zuges, da sie in einen hypnotischen Trancezustand versetzt wird." },
      { name: "Geistige Besessenheit", beschreibung: "Eine Kreatur innerhalb von 1,5 m muss einen Intelligenzrettungswurf (SG 16) bestehen. Bei einem Misserfolg dringt die Körperlose Psyche in den Körper der Kreatur ein und besitzt sie. Solange sie das Ziel besitzt, verschwindet die Körperlose Psyche und kontrolliert den Körper der Kreatur vollständig." }
    ],
    bonusaktionen: [
      { name: "Teleport", beschreibung: "Die Körperlose Psyche teleportiert sich magisch auf einen freien Platz, den sie sehen kann, innerhalb von 18 Metern." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Krächzer",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 3,
    xp: 700,
    rk: 14,
    ruestungstyp: null,
    tp: 66,
    tp_wuerfel: "12W8+12",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m" },
    attribute: { STR: 15, DEX: 17, CON: 13, INT: 5, WIS: 13, CHA: 7 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt", "Gebirge"],
    bild: "drakkenheim/kraechzer.png",
    beschreibung: [
      "Krächzer sind mutierte Aasvögel mit Merkmalen verschiedener Vögel – darunter Geier, Tauben und Krähen. Diese feigen Opportunisten ernähren sich von Leichen und geschwächter Beute, meiden dabei jedoch die geschickteren Lufträuber in den Ruinen. Vom Klang des Kampfes angelockt, kreisen sie geduldig in großen Höhen, bis der Kampf endet, und fallen dann über Verwundete oder unachtsame Überlebende her.",
      "Das Verdauungssystem eines Krächzers ist ein widerlicher Sumpf aus den halb aufgelösten Überresten seiner letzten Mahlzeit. Krächzer übergießen ihre Mahlzeiten – ob Leichen oder noch lebende Ziele – mit saurem Erbrochenen und ausgeschiedenen Abfällen, die Fleisch und Knochen zu verdaulichem Brei auflösen.",
      "Krächzer halten stets große Abstände zu den Harpien in den höchsten Türmen von Drakkenheim. Sie nisten bevorzugt nahe den Stadtmauern oder an den Klippen von Schloss Drakken und folgen magisch belebten Wächtern wie Mauergargoyles auf der Suche nach Beute."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Krächzer führt zwei Angriffe aus." },
      { name: "Schnabel", beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m. Treffer: 8 (2W4+3) Stichschaden." },
      { name: "Spucken", beschreibung: "Fernkampf-Angriffswurf: +5, Reichweite 36/90 m, ein Ziel direkt unterhalb des Krächzers. Treffer: 15 (6W4) Säureschaden." },
      { name: "Abwurf (Aufladen 5–6)", beschreibung: "Geschicklichkeits-Rettungswurf: SG 13 für jede Kreatur in einer Kugel mit 3 m Radius direkt unterhalb des Krächzers. Fehlschlag: 20 (8W4) Säureschaden, und das Ziel erhält den Zustand Brennend (4W4 Säure). Jedes Mal, wenn das Ziel durch diesen Zustand Schaden erleidet, muss es einen Konstitutions-Rettungswurf SG 13 bestehen oder eine Kontaminationsstufe erhalten. Erfolg: Nur halber Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Kraterwurm",
    art: "Monstrosität",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Gesinnungslos",
    cr: 15,
    xp: 13000,
    rk: 18,
    ruestungstyp: null,
    tp: 247,
    tp_wuerfel: "15W20+90",
    bewegung: { "Gehen": "15 m", "Graben": "9 m" },
    attribute: { STR: 28, DEX: 7, CON: 22, INT: 1, WIS: 8, CHA: 4 },
    rettungswuerfe: { KON: 11, WEI: 4 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Zittersinn 18 m"],
    passiveWahrnehmung: 9,
    sprachen: [],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/kraterwurm.png",
    beschreibung: [
      "Die Erde bebt, Kieselsteine und Staub vibrieren. Ein tiefes Grollen dringt aus der Tiefe. Plötzlich bricht Stein auf und gibt einen titanischen Wurm frei. Er hebt seinen massigen Kopf und öffnet ein blütenblattartiges Maul, gefüllt mit langen, zackigen, kristallinen Zähnen, die alle in Richtung seines Rachens weisen. Sein Körper ist bedeckt mit schlammig-violetten Platten, aus denen oktarinfarbene Stacheln hervorstechen. Sein heißer Atem schleudert oktarinfarbenen Schleim davon, als er auf einen zutaucht.",
      "Jene, die es wagten, in das Kraterbecken vorzudringen, kehrten mit erschütternden Berichten über die gewaltigen Kraterwürmer zurück. Sie beschreiben, wie die Erde erzittert, kurz bevor ein gigantischer Wurm die Oberfläche durchbricht und Kreaturen auf seinem Weg verschlingt. Merkwürdigerweise werden die Würmer nur im öden Krater gesichtet. Nur wenige verstehen, wie solch gigantische Kreaturen – geschweige denn mehrere Würmer – hier überleben können, oder warum sie nicht anderswo jagen.",
      "Tatsächlich ernähren sich Kraterwürmer hauptsächlich von anorganischen Mineralien, die im Dreck, Schlamm und Gestein liegen, durch das sie sich graben, und benötigen kaum organische Substanz. Der Schlund des Wurms funktioniert wie ein kontaminierter Schmelztiegel: Mineralien, Gestein und lebende Materie werden aufgespalten und kristallisiert, während Delirium als Abfall ausgeschieden wird. Kraterwürmer verbringen den Großteil ihres Lebens unter der Erde und schaffen meilenweite, gewundene Tunnel voller glitzerndem Delirium – nur um im Kraterbecken zur Fortpflanzung aufzutauchen. Obwohl noch niemand das Ereignis bezeugt hat, soll sich die massive Form des Wurms spalten und Junge aus dem Kadaver freisetzen.",
      "Keine Kreatur in Drakkenheim ist wohl mehr für die tief verwurzelte Kontamination verantwortlich als die Kraterwürmer. Das weitere Bestehen dieser Monster könnte die Welt in eine kontaminierte Einöde verwandeln. Tunnelnd unter der Oberfläche haben sie die Kontamination tief in die Eingeweide der Erde verbreitet. In der Tat verblassen alle an der Oberfläche verstreuten Kristalle, die reichen Delirium-Adern nahe der Narbe und die großen Ablagerungen um den Krater selbst im Vergleich zur Masse des Deliriums, das die Kraterwürmer tief unter der Erde hinterlassen haben."
    ],
    besonderheiten: [
      {
        name: "Tunnelgräber",
        beschreibung: "Der Kraterwurm kann mit halber Grabgeschwindigkeit durch festen Stein graben und hinterlässt dabei einen 3 m breiten Tunnel."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Kraterwurm führt einen Biss-Angriff aus und macht dann weitere Biss-Angriffe gegen jede Kreatur, die an das erste Ziel angrenzt."
      },
      {
        name: "Biss",
        beschreibung: "Nahkampf-Angriffswurf: +14, Reichweite 3 m. Treffer: 35 (4W12 + 9) Stichschaden. Wenn das Ziel Groß oder kleiner ist, ist es folgendem Effekt ausgesetzt. Geschicklichkeits-Rettungswurf: SG 22. Misserfolg: Das Ziel wird vom Wurm verschluckt. Das Ziel hat den Zustand Geblendet und Festgehalten, genießt vollständige Deckung vor Effekten von außerhalb des Wurms und erleidet zu Beginn jedes Zuges des Wurms 36 (8W8) nekrotischen Schaden. Eine Kreatur, die diesen nekrotischen Schaden erleidet, muss zudem einen Konstitutions-Rettungswurf (SG 19) bestehen oder eine Kontaminationsstufe erhalten. Wenn der Wurm in einem einzigen Zug 30 oder mehr Schaden von einer Kreatur in seinem Inneren erleidet, muss er am Ende dieses Zuges einen Konstitutions-Rettungswurf (SG 21) bestehen oder alle verschluckten Kreaturen herauswürgen, die in Feldern innerhalb von 3 m des Wurms landen und den Zustand Liegend erhalten. Wenn der Wurm stirbt, hat eine verschluckte Kreatur nicht mehr den Zustand Festgehalten und kann den Leichnam mit 6 m ihrer Bewegung verlassen, wobei sie den Zustand Liegend erhält."
      },
      {
        name: "Durchbruch",
        beschreibung: "Der Wurm bewegt sich bis zu seiner Bewegungsrate und betritt dabei die Felder Großer oder kleinerer Kreaturen. Jede Kreatur, deren Feld er betritt, ist einmal folgendem Effekt ausgesetzt. Am Ende seiner Bewegung kann der Wurm als Bonusaktion einen Biss-Angriff gegen eine liegende Kreatur ausführen. Stärke-Rettungswurf: SG 22. Erfolg: Das Ziel wird 1,5 m von dem Wurm weg in ein Feld seiner Wahl geschoben. Entscheidet es sich, sich nicht zu bewegen, erleidet es die Folgen eines Misserfolgs. Misserfolg: 35 (10W6) Wuchtschaden, und das Ziel wird 3 m von dem Wurm weggestoßen und erhält den Zustand Liegend."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Kristalliner Elender",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 3,
    xp: 700,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 55,
    tp_wuerfel: "10W8+10",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 17, DEX: 14, CON: 13, INT: 12, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Strahlend"],
    schadensimmunitaeten: [],
    verwundbarkeiten: ["Wucht"],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/kristalliner_elender.png",
    beschreibung: [
      "Die gezackten Züge dieser Kreatur lassen sie wie aus zersplittertem Glas gefertigt erscheinen. Ihr Fleisch ist eine fraktale Anordnung aus polygonalen Kristallwinkeln, die schimmernd das Licht brechen. Überall am Körper ragen scharfe Splitter hervor und ziehen sich wieder zurück, während sich die Kreatur bewegt – der Körper zieht Licht an sich, bricht es in merkwürdigen Winkeln und gibt es mit gesteigerter Intensität weiter.",
      "Ähnlich wie manche Gebäude nahe dem Einschlagsort ihre Grundsubstanz verändert sahen – Stein und Holz, die sich in Fleisch oder Glas verwandelten – wurde das Fleisch dieser Elenden zu hartem Kristall gewandelt. Sie besitzen die angeborene Fähigkeit, Licht und Elemente aufzunehmen, kurz in ihrer Gestalt zu speichern und sie dann wieder auszustoßen, wobei ihr Körper als verstärkende Linse wirkt. Im Kampf bleiben Kristalline Elende hinter anderen Elenden und beschießen ihre Feinde aus der Ferne – doch Waffenschlag ist ihre größte Schwäche."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Kristalline Elende führt zwei Gebrochener-Strahl-Angriffe aus."
      },
      {
        name: "Gebrochener Strahl",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +5, Reichweite 1,5 m oder Reichweite 36 m. Treffer: 21 (4W8 + 3) Strahlenschaden, und das Ziel erhält den Zustand Geblendet bis zum Beginn des nächsten Zuges des Elenden. Wenn dieser Angriff aufgrund von Elementare Brechung einen anderen Schadenstyp verursacht, gelten folgende zusätzliche Effekte: Säure oder Feuer – Das Ziel erhält außerdem den Zustand Brennend (2W6) des entsprechenden Schadenstyps. Kälte – Das Ziel erhält den Zustand Gefroren (SG 13). Blitz – Das Ziel erhält den Zustand Benommen bis zum Ende seines nächsten Zuges."
      }
    ],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Elementare Brechung",
        beschreibung: "Auslöser: Der Kristalline Elende erleidet Säure-, Kälte-, Feuer- oder Blitzschaden. Reaktion – Der Elende erhält Resistenz gegen den auslösenden Schadenstyp, einschließlich des auslösenden Schadens, bis zum Ende seines nächsten Zuges. Während seines nächsten Zuges verursacht sein Gebrochener-Strahl-Angriff diesen Schadenstyp anstelle von Strahlenschaden."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Lauerer auf der Schwelle",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 10,
    xp: 5900,
    rk: 16,
    ruestungstyp: null,
    tp: 168,
    tp_wuerfel: "16W10+80",
    bewegung: { "Fliegen": "9 m (Schweben)" },
    attribute: { STR: 18, DEX: 15, CON: 20, INT: 10, WIS: 11, CHA: 8 },
    rettungswuerfe: { STR: 8, CHA: 3 },
    fertigkeiten: { "Wahrnehmung": 8 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Kälte", "Nekrotisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Liegend"],
    sinne: ["Dunkelsicht 36 m (wird durch magische Dunkelheit nicht beeinträchtigt)"],
    passiveWahrnehmung: 18,
    sprachen: ["Versteht alle Sprachen, kann aber nicht sprechen", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/lauerer_auf_der_schwelle.png",
    beschreibung: [
      "Sich an die Dünnen Orte zwischen den Realitäten klammernd, reißt ein kichernder Chor chaotischen Gelächters in hysterischen und dissonanten Tönen durch die Gedanken derer, die Zeuge des kosmischen Wesens werden. Während es mit seinen drei ungeblinzelten, dunklen Augenteichen herausschaut, beobachtet und vermisst es die Realitäten, während seine Masse fleischiger Tentakel von seiner schleimigen Form herabhängt. Es wogt in schwarzen, leereartigen Tönen und Spritzern aus tiefen Violett und Blau, als wäre sein Fleisch ein bewegtes Bild des Kosmos.",
      "Der Lauerer auf der Schwelle ist ein niederträchtiges und manisches Wesen, das durch Dünne Orte in unsere Welt driftet und in den Gedanken derer schreit, die es wahrnimmt. Er wandert durch den Raum zwischen den Welten und ernährt sich von der rohen arkanen Energie in den Rissen zwischen den Realitäten und von den zersplitterten Atomen toter Reiche. Er ist eine Kreatur, die auf der Schwelle zwischen Orten und Nicht-Orten, zwischen Zeit und Ewigkeit existiert – eine Personifizierung des brodelnden, unbegreiflichen Nichts, das die Nähte zwischen dem Gewebe aller Dinge bildet."
    ],
    besonderheiten: [
      { name: "Aberrante Eigenschaften", beschreibung: "Der Lauerer besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." },
      { name: "Eldrisches Blut", beschreibung: "Eine Kreatur, die dem Lauerer Stich- oder Hiebschaden zufügt, während sie sich innerhalb von 1,5 m von ihm befindet, erleidet 5 (1W10) nekrotischen Schaden." },
      { name: "Magieresistenz", beschreibung: "Der Lauerer hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Lauerer führt drei Tentakelangriffe aus. Er kann jeden Tentakelangriff durch einen Einsatz von Kosmische Strahlen ersetzen." },
      { name: "Tentakel", beschreibung: "Nahkampfangriffswurf: +8, Reichweite 9 m. Treffer: 13 (2W8+4) Wuchtschaden plus 9 (2W8) nekrotischer Schaden, und wenn das Ziel Riesig oder kleiner ist, erhält es den Zustand Gepackt (Entkommen SG 16). Solange es Gepackt ist, hat das Ziel den Zustand Festgehalten. Der Lauerer hat zehn Tentakel, von denen jeder eine Kreatur packen kann." },
      { name: "Kosmische Strahlen", beschreibung: "Der Lauerer schießt zufällig einen der folgenden magischen Strahlen auf ein Ziel, das er innerhalb von 36 m sehen kann (W4 würfeln; erneut würfeln, wenn der Lauerer diesen Strahl bereits in diesem Zug verwendet hat). 1: Desintegrationsstrahl – Geschicklichkeits-Rettungswurf: SG 16. Misserfolg: 27 (6W8) Kraftschaden. Wenn dieser Schaden das Ziel auf 0 Trefferpunkte reduziert, zerfällt es zu Staub. 2: Gedächtnislückenstrahl – Intelligenz-Rettungswurf: SG 16. Misserfolg: Die Erinnerungen des Ziels werden für 1 Minute trüb. Solange seine Erinnerungen trüb sind, kann das Ziel nicht die Magie-Aktion ausführen, keine Klassenmerkmale nutzen oder Sprachen verstehen, und hat Nachteil auf Attributswürfe. Am Ende jedes seiner Züge kann das Ziel den Rettungswurf wiederholen und den Effekt bei einem Erfolg beenden. 3: Kontaminierungsstrahl – Konstitutions-Rettungswurf: SG 16. Misserfolg: 16 (3W10) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Nur halber Schaden. 4: Existenzieller-Schrecken-Strahl – Im nächsten Zug des Ziels erleidet es 14 (4W6) psychischen Schaden, jedes Mal wenn es eine andere Aktion als die Ausweichen-Aktion ausführt, sich mehr als 1,5 m bewegt oder eine Bonusaktion ausführt." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Lauernder Elender",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 1,
    xp: 200,
    rk: 13,
    ruestungstyp: null,
    tp: 18,
    tp_wuerfel: "4W8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 11, DEX: 17, CON: 10, INT: 12, WIS: 10, CHA: 13 },
    rettungswuerfe: {},
    fertigkeiten: { "Täuschen": 5, "Heimlichkeit": 7, "Fingerfertigkeit": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/lauernder_elender.png",
    beschreibung: [
      "In einen dunklen Umhang gehüllt mit tief ins Gesicht gezogener Kapuze, betrachtet die Gestalt euch mit vorsichtiger Haltung. Sie geht auf und ab, beobachtet euch, antizipiert eure Handlungen und macht sich bereit für jede plötzliche Bewegung. Unter der Kapuze sind ein zahniges Grinsen und blasses Fleisch zu erkennen. Sanft leuchtende Augen spähen aus den Schatten und beobachten euch aufmerksam und gewissenhaft.",
      "Es ist nicht sofort offensichtlich, dass ein Lauernder Elender ein kontaminiertes Monster ist. Da er das Großteil seines ursprünglichen Aussehens und seiner Persönlichkeit bewahrt hat, wird er von einem wahnsinnigen Zwang angetrieben, Freunde und Geliebte in Umstände oder Orte zu locken, die sie ihrerseits kontaminieren. Hellsichtige Beobachter können subtile Anzeichen der Kontamination erkennen – verfärbte Hauttöne und ein leichtes oktarines Leuchten in den Augen. Tatsächlich ist die Täuschung nur oberflächlich: Die Eingeweide des Elenden sind vollständig kontaminiert und mutiert, fast alle inneren Organe in unkenntliche Formen verwandelt."
    ],
    besonderheiten: [
      {
        name: "Normales Erscheinungsbild",
        beschreibung: "Der Elende hat Vorteil auf Charisma (Täuschen)-Würfe, um sich als humanoide Kreatur zu verkleiden oder eine solche zu imitieren."
      }
    ],
    aktionen: [
      {
        name: "Dolch",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +5, Reichweite 1,5 m oder Reichweite 6/18 m. Treffer: 5 (1W4 + 3) Stichschaden plus 10 (3W6) Giftschaden."
      },
      {
        name: "Wütender Hinterhalt (lädt nach einer Kurzen Rast auf)",
        beschreibung: "Der Elende führt zwei Dolch-Angriffe aus."
      }
    ],
    bonusaktionen: [
      {
        name: "Gerissene Aktion",
        beschreibung: "Der Elende führt die Aktion Rasen, Zurückweichen oder Verstecken aus."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Lebende Biogefahr",
    art: "Schlick",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: null,
    tp: 60,
    tp_wuerfel: "8W10+16",
    bewegung: { "Gehen": "6 m" },
    attribute: { STR: 16, DEX: 12, CON: 15, INT: 6, WIS: 10, CHA: 4 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Säure", "Feuer", "Blitz"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Gepackt"],
    sinne: ["Blindsicht 6 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/lebende_biogefahr.png",
    beschreibung: [
      "Dieser gelatinöse Klumpen tropft und sickert über den Boden wie eine langsam fließende, zähflüssige Schmelze. Bald erscheint er flüssig, bald wie Gelee, bald nimmt er eine festere Form an. Seine Farben wechseln und schillern in abwechselnden Tönen, manchmal imitiert er seine Umgebung so vollständig, dass er sich nahezu unsichtbar macht.",
      "Lebende Biogefahren sind die misslungenen Experimente von Chemikern, die alchemistische Gebräue von weit größerer Wirksamkeit perfektionieren wollen. Dennoch liegt auch in ihrem Scheitern ein Wert: Das Wecken von Bewusstseinsfunken in chemischen Verbindungen ist keine geringe Leistung. Die Lebende Biogefahr ist ein unersättlicher Schlick, der wie eine verschüttete Flüssigkeit durch seine Umgebung gleitet, auf Kreaturen zum Auflösen wartet und an Wänden und Decken klebt, um auf ahnungslose Opfer herabzufallen."
    ],
    besonderheiten: [
      { name: "Gefährliche Dämpfe", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 3 Metern des Schlicks beginnt, erhält die Brennend-Bedingung (4W4 Säure). Solange sie brennt, hat sie zusätzlich die Verlangsamt-Bedingung. Solange die Kreatur sich innerhalb von 3 Metern des Schlicks befindet, kann die Brennend-Bedingung auf keine Weise entfernt werden." },
      { name: "Flüssige Form", beschreibung: "Der Schlick kann sich durch eine Öffnung quetschen, die so schmal wie 2,5 Zentimeter ist, und kann in den Bereich einer feindlichen Kreatur eindringen und dort verweilen. Das erste Mal, wenn er in einem Zug in den Bereich einer Kreatur eindringt, erleidet diese 10 (4W4) Säureschaden. Der Schlick hat Vorteil auf Fähigkeitswürfe, die er unternimmt, um ein Packen einzuleiten oder zu entkommen." },
      { name: "Spinnenklettern", beschreibung: "Der Schlick kann schwierige Oberflächen, einschließlich verkehrt herum an Decken, erklimmen, ohne einen Fähigkeitswurf ablegen zu müssen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Schlick führt zwei Pseudopoden-Angriffe aus." },
      { name: "Pseudopode", beschreibung: "Nahkampfangriff: +5 auf den Trefferwurf, Reichweite 3 m. Treffer: 10 (4W4) Säureschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Lebender Tiefer Dunst",
    art: "Elementar",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: null,
    tp: 90,
    tp_wuerfel: "12W10+24",
    bewegung: { "Schweben": "27 m" },
    attribute: { STR: 14, DEX: 20, CON: 14, INT: 5, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Nekrotisch", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Brennend", "Erschöpfung", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend", "Festgehalten", "Bewusstlos"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Tiefe Rede"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/lebender_tiefer_dunst.png",
    beschreibung: [
      "Ein Bereich des Dunstes verhält sich seltsam. Die Kontamination im Nebel verdichtet sich, nimmt Gestalt an und bildet eine wolkenhafte, fließende Form, die sich kaum von der trüben Atmosphäre um sie herum unterscheidet. Erst wenn eine Ranke dunklen Dunstes tödlich zuzieht, erkennt man, dass diese Wolke kein gewöhnlicher Dunst ist.",
      "Ihrem Namen treu, lauern diese kontaminierten Luftelementare in den dichtesten Teilen des Dunstes und verschmelzen nahtlos mit der tödlichen Umgebung. Sie existieren, um den kontaminierenden Nebel und Dunst durch ihre Körper zu verbreiten, und erfreuen sich daran, Mutationen und monströse Verwandlungen hervorzurufen."
    ],
    besonderheiten: [
      {
        name: "Nebelgestalt",
        beschreibung: "Der Elementar kann den Raum einer feindseligen Kreatur betreten und dort verweilen. Er kann sich durch einen Spalt bewegen, der nur 2,5 cm breit ist, ohne sich zu quetschen."
      },
      {
        name: "Tiefer Dunst",
        beschreibung: "Eine Kreatur, die in denselben Raum wie der Elementar wechselt oder ihren Zug dort beginnt, ist folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 13. Misserfolg: 10 (3W6) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Elementar führt zwei Schlag-Angriffe aus."
      },
      {
        name: "Schlag",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 1,5 m. Treffer: 14 (2W8 + 5) Wuchtschaden."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Leerraumpirat-Herold",
    art: "Humanoid",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch neutral",
    cr: 6,
    xp: 2300,
    rk: 15,
    ruestungstyp: "Magierüstung (Zauber)",
    tp: 113,
    tp_wuerfel: "15W8+45",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 8, DEX: 16, CON: 16, INT: 17, WIS: 12, CHA: 10 },
    rettungswuerfe: { KON: 6, INT: 6, WEI: 4 },
    fertigkeiten: { "Arkane Kunde": 6, "Wahrnehmung": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 14,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/leerraumpirat_herold.png",
    beschreibung: [
      "Viele Humanoide aus der Sterblichenwelt und sogar Kreaturen aus den Feenlanden und dem Traumreich sind durch Dünne Stellen in den Zwischenraum der Welten gerutscht und konnten nicht mehr zurückkehren. Manche überlebten die lang anhaltende Kontaminationsbelastung und verwandelten sich in veränderte Wesen, die ihrem früheren Ich ähneln – bleich und bläulich-lila gefärbt, mit leuchtend oktarinfarbenen Augen.",
      "Diese veränderten Überlebenden haben sich zu umherziehenden Gruppen aus Plünderern, Piraten und Banden zusammengeschlossen. Sie durchqueren die Leeersee auf zusammengestückelten Sternschiffen, die durch elementare Magie angetrieben werden, und suchen in alten Ruinen, Höhlen und Trümmerfeldern nach Überlebensressourcen.",
      "Der Leerraumpirat-Herold ist der Zauberwirker unter den Piraten – ein magischer Spezialist, der chaotische arkane Energie kanalisiert, um Feinde zu vernichten. Das Magische Chaos, das ihn umgibt, macht Zauberer besonders vorsichtig, da ihre eigenen Zauber gegen sie gewendet werden könnten."
    ],
    besonderheiten: [
      {
        name: "Von einer anderen Welt",
        beschreibung: "Der Leerraumpirat besitzt nicht die standardmäßigen Aberranten Eigenschaften anderer Kreaturen im Zwischenraum der Welten."
      },
      {
        name: "Magisches Chaos",
        beschreibung: "Wenn der Herold oder eine Kreatur in 9 m von einem Zauber anvisiert wird, würfelt der Herold einen W6. Bei 4–5: Eine Arkane Anomalie trifft den Zauberwirker. Bei 6: Der Zauber schlägt fehl und eine Arkane Anomalie trifft den Zauberwirker."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Herold führt drei Leerraumstrahl-Angriffe aus."
      },
      {
        name: "Leerraumstrahl",
        beschreibung: "Nahkampf- oder Fernkampfangriffswurf +6, Reichweite 1,5 m oder 36 m. Treffer: 19 (3W10+3) Kraftschaden, und das Ziel wird 3 m vom Herold weggestoßen."
      },
      {
        name: "Zauberei",
        beschreibung: "Der Herold wirkt einen der folgenden Zauber. Er benötigt keine Materialkomponenten und verwendet Intelligenz als Zauberwirkungseigenschaft (Zauber-SG 14, +6 auf Zauberangriffe). Beliebig: Magierüstung (bereits eingerechnet), Magische Hand, Prestidigitation. 2/Tag: Chromatische Kugel, Feenfeuer, Erhitze Metall. 1/Tag: Arkanes Auge, Schwarze Tentakel, Fliegen."
      }
    ],
    bonusaktionen: [
      {
        name: "Elementar beschwören (1/Tag)",
        beschreibung: "Der Herold beschwört magisch eine Entropische Flamme, eine Wandelnde Delerium-Geode, einen Lebenden Tiefen Dunst oder einen Animierten Delerium-Schlamm in einem unbesetzten Feld in 18 m. Die Kreatur gehorcht dem Herold, handelt unmittelbar nach ihm und bleibt 1 Stunde lang oder bis zum Tod des Herolds oder der beschworenen Kreatur, oder bis der Herold sie als Bonusaktion entlässt."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Leerraumpirat-Kapitän",
    art: "Humanoid",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch neutral",
    cr: 9,
    xp: 5000,
    rk: 17,
    ruestungstyp: null,
    tp: 150,
    tp_wuerfel: "20W8+60",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 20, DEX: 20, CON: 17, INT: 10, WIS: 11, CHA: 15 },
    rettungswuerfe: { GES: 9, INT: 4, WEI: 4 },
    fertigkeiten: { "Wahrnehmung": 8, "Fingerfertigkeit": 9, "Heimlichkeit": 9 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 18,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/leerraumpirat_kapitaen.png",
    beschreibung: [
      "Leerraumpirat-Kapitäne sind die gefürchteten Anführer der Piratenverbände im Zwischenraum der Welten. Sie haben nicht nur die Kontamination überlebt, sondern daraus Stärke gezogen und sich durch Cleverness und Brutalität an die Spitze ihrer Besatzungen gekämpft.",
      "Mit scharfem Auge und flinkem Geist führen sie ihre Schiffe durch die Gefahren der Leeersee und entscheiden kaltblütig, ob Geiseln gefangen genommen oder als Köder geopfert werden. Ihr Wort ist Gesetz an Bord – und ihre Klinge spricht für sie, wenn Worte nicht ausreichen."
    ],
    besonderheiten: [
      {
        name: "Von einer anderen Welt",
        beschreibung: "Der Leerraumpirat besitzt nicht die standardmäßigen Aberranten Eigenschaften anderer Kreaturen im Zwischenraum der Welten."
      },
      {
        name: "Scharfes Auge, flinker Geist",
        beschreibung: "Der Leerraumpirat-Kapitän hat Vorteil auf Initiative-Würfe."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Kapitän führt drei Angriffe aus."
      },
      {
        name: "Leerraum-Langschwert",
        beschreibung: "Nahkampfangriffswurf +9, Reichweite 1,5 m. Treffer: 21 (3W10+5) Kraftschaden."
      },
      {
        name: "Piratenpistole",
        beschreibung: "Fernkampfangriffswurf +9, Reichweite 9/36 m. Treffer: 14 (2W8+5) Stichschaden."
      }
    ],
    bonusaktionen: [
      {
        name: "Befehle erteilen",
        beschreibung: "Ein Leerraumpirat-Knirps oder -Quartiermeister in 18 m kann seine Reaktion nutzen, um sich bis zur halben Bewegungsrate zu bewegen oder einen Angriff auszuführen."
      }
    ],
    reaktionen: [
      {
        name: "Befehl des Kapitäns (2/Tag)",
        beschreibung: "Auslöser: Eine befreundete Kreatur in 9 m schlägt bei einem Angriffswurf fehl. Reaktion – Falls die Kreatur den Kapitän hören kann, darf sie den Angriffswurf wiederholen und das höhere Ergebnis verwenden."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Leerraumpirat-Knirps",
    art: "Humanoid",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch neutral",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: "Lederrüstung",
    tp: 66,
    tp_wuerfel: "12W8+12",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 15, DEX: 18, CON: 12, INT: 10, WIS: 11, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/leerraumpirat_knirps.png",
    beschreibung: [
      "Leerraumpirat-Knirps sind die einfachen Besatzungsmitglieder der Piratenschiffe im Zwischenraum der Welten – veränderte Humanoide, die nach Jahren der Kontaminationsbelastung bleich und mutiert sind. Sie sind das Fußvolk der Piratenverbände.",
      "Knirps kämpfen in Rudeln und gehorchen höherrangigen Piraten blindlings. Ihre Hauptaufgabe ist es, Gefangene mit Netzen einzufangen und Artilleriewaffen zu bedienen. Sie sind gefährlich in der Überzahl, aber wenig wert, wenn sie alleine sind."
    ],
    besonderheiten: [
      {
        name: "Befehle des Kapitäns",
        beschreibung: "Solange der Leerraumpirat in 18 m eines Leerraumpirat-Kapitäns ist, hat er Vorteil auf Rettungswürfe gegen Bezaubert und Verängstigt."
      },
      {
        name: "Von einer anderen Welt",
        beschreibung: "Der Leerraumpirat besitzt nicht die standardmäßigen Aberranten Eigenschaften anderer Kreaturen im Zwischenraum der Welten."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Knirps führt zwei Angriffe mit Leerraum-Krummsäbel aus oder verwendet das Robuste Netz."
      },
      {
        name: "Leerraum-Krummsäbel",
        beschreibung: "Nahkampfangriffswurf +6, Reichweite 1,5 m. Treffer: 13 (2W8+4) Hiebschaden."
      },
      {
        name: "Robustes Netz",
        beschreibung: "Nahkampf- oder Fernkampfangriffswurf +6, Reichweite 1,5 m oder 4,5/9 m. Treffer: Das Ziel erhält die Zustände Gefesselt und Wehrlos. Eine Kreatur kann eine Aktion aufwenden, um sich oder eine andere Kreatur im Netz mit einem erfolgreichen Stärke-Check SG 14 zu befreien. 10 Hiebschaden am Netz (RK 12) befreit das Ziel unbeschadet und zerstört das Netz."
      }
    ],
    bonusaktionen: [
      {
        name: "Kanonen bemannen",
        beschreibung: "Der Knirps lädt eine Artilleriewaffe wie eine Kanone oder Balliste."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Leerraumpirat-Quartiermeister",
    art: "Humanoid",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch neutral",
    cr: 5,
    xp: 1800,
    rk: 17,
    ruestungstyp: null,
    tp: 84,
    tp_wuerfel: "13W8+26",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 18, DEX: 16, CON: 14, INT: 10, WIS: 12, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 11,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/leerraumpirat_quartiermeister.png",
    beschreibung: [
      "Der Leerraumpirat-Quartiermeister ist der zweite Offizier an Bord eines Leerraumschiffes – erfahren, kampferprobt und gefürchtet von der einfachen Besatzung. Er koordiniert taktische Operationen im Kampf und erteilt den Knirps direkte Befehle.",
      "Im Einzelkampf ist der Quartiermeister besonders gefährlich, wenn er ungestört kämpfen kann – sein Duell auf Leben und Tod zeigt seine Ausbildung als persönlicher Vollstrecker des Kapitäns."
    ],
    besonderheiten: [
      {
        name: "Befehle des Kapitäns",
        beschreibung: "Solange der Leerraumpirat in 18 m eines Leerraumpirat-Kapitäns ist, hat er Vorteil auf Rettungswürfe gegen Bezaubert und Verängstigt."
      },
      {
        name: "Duell auf Leben und Tod",
        beschreibung: "Einmal pro Runde kann der Quartiermeister, wenn er in 1,5 m eines Feindes ist und keine andere Kreatur in 1,5 m von ihm, zusätzlich 10 (3W6) Hiebschaden mit seinem Leerraumklinge-Angriff verursachen."
      },
      {
        name: "Von einer anderen Welt",
        beschreibung: "Der Leerraumpirat besitzt nicht die standardmäßigen Aberranten Eigenschaften anderer Kreaturen im Zwischenraum der Welten."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Quartiermeister führt zwei Angriffe aus."
      },
      {
        name: "Leerraumklinge",
        beschreibung: "Nahkampfangriffswurf +7, Reichweite 1,5 m. Treffer: 18 (3W8+4) Kraftschaden."
      },
      {
        name: "Bolzenpistole",
        beschreibung: "Fernkampfangriffswurf +6, Reichweite 45/180 m. Treffer: 13 (3W6+3) Stichschaden, und das Ziel erhält den Zustand Verlangsamt bis Ende seines nächsten Zuges."
      }
    ],
    bonusaktionen: [
      {
        name: "Befehle erteilen",
        beschreibung: "Ein Leerraumpirat-Knirps in 18 m kann seine Reaktion nutzen, um sich bis zur halben Bewegungsrate zu bewegen oder einen Angriff auszuführen."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Leuchtende Qualle",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 9,
    xp: 5000,
    rk: 17,
    ruestungstyp: null,
    tp: 153,
    tp_wuerfel: "18W10+54",
    bewegung: { "Schweben": "6 m" },
    attribute: { STR: 8, DEX: 15, CON: 16, INT: 18, WIS: 18, CHA: 15 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Wucht", "Strahlend"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Taub", "Erschöpfung", "Verängstigt", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend", "Festgehalten", "Betäubt"],
    sinne: ["Blindsicht 18 m"],
    passiveWahrnehmung: 14,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/leuchtende_qualle.png",
    beschreibung: [
      "Eine durchsichtige, zwiebelförmige Masse schwebt sanft durch die Luft und pulsiert in Neonfarben, die über ihre Haut strahlen wie eine kosmische Nebula oder arkane Polarlichter. Eine Masse dünner Fäden hängt von der Kreatur herab und pulsiert mit biolumineszierendem Licht. Die Tentakel bewegen und gleiten umher, tasten und greifen sanft nach Gegenständen, wenn sie vorüberzieht. Die gesamte Kreatur glüht und beleuchtet die verdunkelten Stadtstraßen um sie herum. Ein ferner Chor ätherischer Summtöne erfüllt die Luft.",
      "Drakkenheim leuchtet nachts. Die bizarre, fremdartige Farbpalette des kosmischen Polarlichts, das durch den Dunst und die Delirium-Kristalle entsteht, ist ein Anblick für sich. Doch in der arkanen nächtlichen Landschaft kann man auch Lichtkugeln sehen, die seltsam hypnotisch zwischen den hohen Türmen und Ruinen schaukeln und schwanken. Bei näherer Betrachtung erweisen sich diese irrlichterartigen Lichtpunkte als eine Art luftige Qualle, deren halb-transparente Haut sich in kaleidoskopischen Farben wandelt.",
      "Diese seltsamen Quallenkreaturen beleuchten die Innenstadt Drakkenheims nachts wie bizarre Nachtlichter, die durch die Stadt treiben. Ihre Natur und was sie genau erschaffen hat, bleibt ein Rätsel. Quallen waren keine häufigen Bewohner des Drann-Flusses, und so haben Akademieforscher spekuliert, dass diese Kreaturen aus Rissen zwischen der Sterblichen Welt und dem Raum zwischen den Welten stammen, oder dass sie das Ergebnis arcanischer Energien sind, die sich zu einem empfindungsfähigen Lichtpunkt aus Magie verdichtet haben. Sie verhalten sich, als würden sie vom Leuchten des Deliriums angezogen, das die Stadt im Dämmerlicht beleuchtet. Sie summen sanft in dissonanten Tönen und verleihen den Ruinen bei Nacht eine unheimliche Präsenz."
    ],
    besonderheiten: [
      {
        name: "Veränderte Realität",
        beschreibung: "Die Leuchtende Qualle hat den Zustand Unsichtbar für Kreaturen, die von ihr bezaubert wurden."
      },
      {
        name: "Halluzinogene Biolumineszenz",
        beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 18 m der Leuchtenden Qualle beginnt und sie sehen kann, ist folgendem Effekt ausgesetzt, es sei denn, die Qualle entscheidet sich dagegen. Weisheits-Rettungswurf: SG 16. Misserfolg: Das Ziel erhält den Zustand Bezaubert (Rettungswurf beendet den Effekt). Solange es bezaubert ist, betrachtet das Ziel alle anderen Kreaturen als Feinde – ausgenommen die Qualle, die es als Verbündete betrachtet. Wann immer das Ziel einen Angriff macht oder einen schädlichen Zauber wirkt, muss es sein Ziel nach dem Zufallsprinzip aus den Kreaturen wählen, die es im Bereich sehen kann. Wenn eine Kreatur einen Gelegenheitsangriff von dem Ziel provoziert, muss es den Angriff ausführen, sofern möglich. Wenn das Ziel seinen Zug beendet, ohne eine Angriffs- oder Zauberwirkaktion ausgeführt zu haben, erleidet es 14 (4W6) psychischen Schaden. Sofern nicht überrascht, kann eine Kreatur zu Beginn ihres Zuges den Blick abwenden, um dem Rettungswurf zu entgehen. Tut sie dies, hat sie Nachteil auf Angriffswürfe gegen die Qualle bis zum Beginn ihres nächsten Zuges. Blickt die Kreatur in der Zwischenzeit auf die Qualle, muss sie sofort den Rettungswurf ablegen."
      },
      {
        name: "Neonleuchten",
        beschreibung: "Die Leuchtende Qualle verbreitet Helles Licht in einem Radius von 9 m und Dämmerlicht für weitere 9 m."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Die Leuchtende Qualle führt zwei Tentakel-Angriffe aus."
      },
      {
        name: "Tentakel",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 3 m. Treffer: 27 (6W8) nekrotischer Schaden, oder 48 nekrotischer Schaden, wenn das Ziel von der Leuchtenden Qualle bezaubert ist."
      }
    ],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Reflexiver Blitz",
        beschreibung: "Auslöser: Eine Kreatur, die die Leuchtende Qualle sehen kann, innerhalb von 9 m verursacht ihr Schaden. Reaktion – Konstitutions-Rettungswurf: SG 16, jede Kreatur in einem Ausstrahlungsbereich von 9 m um die Leuchtende Qualle, die sie sehen kann. Misserfolg: 10 (3W6) Strahlenschaden, und das Ziel erhält den Zustand Geblendet (Rettungswurf beendet den Effekt). Erfolg: Nur halber Schaden."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Leuchtender Elender",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 4,
    xp: 1100,
    rk: 16,
    ruestungstyp: null,
    tp: 55,
    tp_wuerfel: "10W8+10",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 5, DEX: 15, CON: 13, INT: 19, WIS: 15, CHA: 17 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/leuchtender_elender.png",
    beschreibung: [
      "Die Kreatur leuchtet in einem bleichen, sanften Licht. Manchmal schimmert es in Violett-, Orange- und Grüntönen, doch gelegentlich scheint die Farbe völlig unbeschreiblich zu sein. Der weit aufgerissene Mund gibt dasselbe Leuchten noch heller aus seinem Schlund frei, und die Augen scheinen wie zwei Laternen, während die Kreatur ihre Umgebung abtastet, angezogen von der kontaminierenden Energie um sie herum.",
      "Leuchtende Elende sind so stark kontaminiert, dass sie wie Delirium leuchten. Sie werden von kontaminierten Kristallen angezogen und sammeln sich in Gruppen um sie herum. Studien dieser seltsamen glühenden Elenden haben ergeben, dass sie bereits kontaminierten Kreaturen gegenüber besonders feindselig werden – irgendetwas an der Kontamination treibt sie dazu an, jeden zu verfolgen, der unter Mutationen oder Erkrankungen durch Exposition in den Ruinen leidet."
    ],
    besonderheiten: [
      {
        name: "Oktarines Leuchten",
        beschreibung: "Der Elende verbreitet helles Licht in einem Radius von 4,5 m und schwaches Licht für weitere 4,5 m."
      },
      {
        name: "Arkaner Hunger",
        beschreibung: "Der Elende hat Vorteil auf Angriffswürfe gegen Kreaturen mit einer oder mehreren Kontaminationsstufen."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Leuchtende Elende führt drei Oktarinstrahl-Angriffe aus."
      },
      {
        name: "Oktarinstrahl",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +7, Reichweite 1,5 m oder Reichweite 18 m. Treffer: 13 (3W6 + 3) Strahlenschaden. Konstitutions-Rettungswurf: SG 14. Misserfolg: Das Ziel erhält eine Kontaminationsstufe."
      },
      {
        name: "Kontaminationswelle (Aufladen 5–6)",
        beschreibung: "Konstitutions-Rettungswurf: SG 15 für jede Kreatur innerhalb von 9 m. Misserfolg: 14 (4W6) Strahlenschaden plus 14 (4W6) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Nur halber Schaden."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Liminaler Herold",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 4,
    xp: 1100,
    rk: 15,
    ruestungstyp: null,
    tp: 78,
    tp_wuerfel: "12W8+24",
    bewegung: { "Fliegen": "9 m (Schweben)" },
    attribute: { STR: 8, DEX: 16, CON: 15, INT: 13, WIS: 16, CHA: 11 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Liegend"],
    sinne: ["Dunkelsicht 36 m (wird durch magische Dunkelheit nicht beeinträchtigt)"],
    passiveWahrnehmung: 17,
    sprachen: ["Versteht alle Sprachen, kann aber nicht sprechen", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/liminaler_herold.png",
    beschreibung: [
      "Die amorphe Form des Liminalen Herolds zittert und wogt, während er durch die Luft treibt. Seine vielen spinnenartigen Augen leuchten in unbegreiflichen Farben, sein Fleisch wechselt in schwindelerregenden Darbietungen Gestalt und Farbe. Er flüstert in den Gedanken derer, die sich ihm nähern, und erzählt ihnen große Wahrheiten unbekannter Welten und kündigt das Kommen seiner namenlosen Herren an.",
      "Liminale Herolde sind die Kundschafter und Boten unbekannter uralter Entitäten, die in den entferntesten Winkeln des Raums zwischen den Welten existieren. Was auch immer ihr Zweck ist, ihre galaktische Informationssammlung bleibt ein Rätsel. Liminale Herolde enthüllen unergründliche Wahrheiten und geflüsterte Echos zersplitterter Realitäten, während sie nach Reichen suchen, um das Kommen ihrer Herren anzukündigen."
    ],
    besonderheiten: [
      { name: "Aberrante Eigenschaften", beschreibung: "Der Liminale Herold besitzt die in der Leiste 'Aberrante Eigenschaften' beschriebenen Eigenschaften." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Liminale Herold führt zwei Eldrischer-Strahl- oder Kontaminierte-Berührung-Angriffe aus. Er kann außerdem Verstandswirrwarr oder Verzerrungsruf verwenden." },
      { name: "Kontaminierte Berührung", beschreibung: "Konstitutions-Rettungswurf: SG 13, ein Ziel innerhalb von 1,5 m. Misserfolg: 10 (3W6) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Erfolg: Nur halber Schaden." },
      { name: "Eldrischer Strahl", beschreibung: "Fernkampf-Angriffswurf: +5, Reichweite 36 m. Treffer: 12 (3W6+2) Kraftschaden." },
      { name: "Verstandswirrwarr (Aufladen 5-6)", beschreibung: "Intelligenz-Rettungswurf: SG 13, alle Kreaturen in einem 9-m-Kegel (Kreaturen, die Konzentration aufrechterhalten, haben Nachteil). Misserfolg: 10 (3W6) psychischer Schaden, oder 28 (8W6) psychischer Schaden, wenn das Ziel Konzentration aufrechterhalten hat." },
      { name: "Verzerrungsruf", beschreibung: "Charisma-Rettungswurf: SG 13, eine Kreatur innerhalb von 27 m, die der Liminale Herold sehen kann. Misserfolg: 10 (3W6) psychischer Schaden, und das Ziel wird in ein unbesetztes Feld innerhalb von 18 m teleportiert, das der Liminale Herold sehen kann. Das gewählte Feld muss sich auf einer Oberfläche oder in einer Flüssigkeit befinden, die das Ziel ohne Engpass tragen kann." }
    ],
    bonusaktionen: [
      { name: "Dimensionssprung", beschreibung: "Der Liminale Herold teleportiert sich in ein unbesetztes Feld innerhalb von 9 m, das er sehen kann." }
    ],
    reaktionen: [
      { name: "Schmerz reflektieren", beschreibung: "Auslöser: Der Liminale Herold erleidet Schaden durch einen Angriff oder Zauber, der nur ihn als Ziel hat. Reaktion: Der Angreifer oder Zauberwirker erleidet psychischen Schaden in Höhe des durch den auslösenden Angriff oder Zauber verursachten Schadens." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Magmatroll",
    art: "Riese",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 7,
    xp: 2900,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 105,
    tp_wuerfel: "10W10+50",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 18, DEX: 13, CON: 20, INT: 7, WIS: 11, CHA: 6 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: ["Kälte"],
    zustandsimmunitaeten: ["Brennend"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Riesisch"],
    umgebung: ["Höhle", "Gebirge", "Wüste"],
    bild: "drakkenheim/magmatroll.png",
    beschreibung: [
      "Sein Fleisch gleicht geschmolzenen Felsen, durchzogen von glühenden Feuervenen. Seine Augen sind zwei brennende Lavaseen. Sein Brüllen klingt wie das Schürfen von Fels beim Ausbruch eines Vulkans. Seine Schritte hinterlassen Pfützen heißer flüssiger Magma, die auch aus seinen Händen und seinem Mund tropft.",
      "Magmatrolle bewohnen tiefe Erdhöhlen, die weite Witherbleach-Wüste oder die Krater von Vulkanen wie dem Drachenrachen. Sie bevorzugen Orte mit sengende Hitze und Lavaströmen und verlassen diese selten aus eigenen Stücken. Allerdings treibt sie der Hunger bisweilen aus ihren Verstecken, um Berggemeinden oder bewohnte Orte nahe Höhlen und Grotten anzugreifen."
    ],
    besonderheiten: [
      {
        name: "Regeneration",
        beschreibung: "Der Troll regeneriert zu Beginn jedes seiner Züge 10 Trefferpunkte. Erleidet er Kälteschaden, setzt diese Regeneration bis zum Beginn seines nächsten Zuges aus. Der Troll stirbt nur, wenn er seinen Zug mit 0 Trefferpunkten beginnt und sich nicht regeneriert."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Der Troll führt zwei Feuerklauangriffe und einen Vulkanischen Biss durch. Er kann den Vulkanischen Biss durch Schwefeliger Rülpser ersetzen, sofern verfügbar."
      },
      {
        name: "Vulkanischer Biss",
        beschreibung: "Nahkampf-Angriffswurf: +7, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W6+4) Stichschaden plus 10 (3W6) Feuerschaden."
      },
      {
        name: "Feuerklaue",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +7, Reichweite 1,5 m oder 36 m, ein Ziel. Treffer: 18 (4W6+4) Feuerschaden, und das Ziel erhält den Zustand Brennend (4W6 Feuer)."
      },
      {
        name: "Schwefeliger Rülpser (Aufladen 5–6)",
        beschreibung: "Konstitutions-Rettungswurf: SG 16 für jede Kreatur in einer Kugel mit 6 m Radius, zentriert auf den Troll. Misserfolg: 14 (4W6) Feuerschaden, und das Ziel erhält den Zustand Geblendet, bis es selbst oder eine Kreatur innerhalb von 1,5 m eine Aktion nutzt, um die Asche aus seinen Augen zu reinigen. Erfolg: Nur halber Schaden."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Mauer-Gargoyle",
    art: "Elementar",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 52,
    tp_wuerfel: "7W8+21",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m" },
    attribute: { STR: 15, DEX: 11, CON: 16, INT: 6, WIS: 15, CHA: 7 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Erschöpfung", "Versteinert", "Vergiftet"],
    sinne: ["Wahres Sehen 36 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/mauer_gargoyle.png",
    beschreibung: [
      "Diese geflügelten Kreaturen ähneln finsteren Fledermäusen mit grotesken, grinsenden oder fauchenden Gesichtern. Sie sind vollständig aus Stein gefertigt und verharren regungslos – doch man schwört, dass eine von ihnen einen anstarrt, obwohl sie eben noch in die andere Richtung schaute.",
      "Die Mauer-Gargoyles wurden beim Bau der Stadtmauern alle 15 Meter entlang des gesamten Mauerumfangs platziert. Durch die vereinte Handwerkskunst zwerghischer Steinmetze und Magie der Amethystakademie wurden sie als Verteidigungsmaßnahme entworfen. Die Haze, die in ihre magisch durchtränkten Körper sickert, hat ihre arkane Programmierung gestört – nun greifen sie jeden an, der die Mauern zu überqueren versucht, ohne Freund und Feind zu unterscheiden."
    ],
    besonderheiten: [
      { name: "Falsche Erscheinung", beschreibung: "Solange der Gargoyle regungslos bleibt, ist er von einer leblosen Statue nicht zu unterscheiden." },
      { name: "Unfehlbarer Fährtenleser", beschreibung: "Die Kreatur, die den Gargoyle animiert hat, wird zu seiner Beute. Der Gargoyle kennt Richtung und Entfernung zu seiner Beute, solange sie sich in Drakkenheim befindet oder bis der Gargoyle zerstört wird." },
      { name: "Verjüngung", beschreibung: "Wird der Mauer-Gargoyle zerstört, stellt er sich innerhalb einer Stunde mit allen Trefferpunkten wieder her, sofern kein Desintegrieren-Zauber auf seine Überreste gewirkt wird." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Gargoyle führt einen Biss- und einen Klauengriff aus." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +4 zum Treffen, Reichweite 1,5 m. Treffer: 5 (1W6+2) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampf-Angriffswurf: +4 zum Treffen, Reichweite 1,5 m. Treffer: 5 (1W6+2) Hiebschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Minazorond",
    art: "Drache",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 18,
    xp: 20000,
    rk: 20,
    ruestungstyp: null,
    tp: 95,
    tp_wuerfel: "7W12+49",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 27, DEX: 14, CON: 25, INT: 23, WIS: 17, CHA: 23 },
    rettungswuerfe: { GES: 8, KON: 13, WEI: 9, CHA: 12 },
    fertigkeiten: { "Arkane Kunde": 14, "Wahrnehmung": 15, "Heimlichkeit": 8 },
    schadensresistenzen: ["Kälte", "Feuer", "Kraft", "Psychisch", "Strahlend"],
    schadensimmunitaeten: ["Blitz", "Gift", "Nekrotisch", "Donner"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 25,
    sprachen: ["Gemeinsprache", "Drakonisch", "Telepathie 36 m"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/minazorond.png",
    beschreibung: [
      "Minazorond thront auf den Türmen von Schloss Drakken – ein kunstvolles Meisterwerk aus Messing und Bronze, besetzt mit glitzernden Schuppen, Diamantaugen und juwelenverzierter Flügeln. Der große Drache wurde von einem exzentrischen Künstler aus Liberio namens Nicoletti erschaffen, der für seine prächtigen Metallstatuen bekannt war.",
      "Als das Haus von Drakken eine Statue für das Schloss bestellte, lehnte Nicoletti zunächst ab. Zwei Monate später schrieb er der Königin, ein gewaltiger Drache sei ihm im Traum erschienen: Minazorond, der Drachenkaiser, habe den Wunsch geäußert, über die Stadt zu wachen. Nicoletti zog nach Drakkenheim und begann mit dem Bau. Tragischerweise riss während der Montage des letzten Stücks ein Seil – Nicoletti wurde von seiner eigenen Schöpfung begraben. Minazorond war sein letztes Werk.",
      "Nun ist Minazorond ein kontaminiertes Konstrukt, das Schloss Drakken unerbittlich verteidigt und jeden angreift, der es wagt, seine Höfe zu betreten oder seine Mauern zu erklimmen. Seine Trefferpunkte erhöhen sich um 95 (7W12+49) für jeden anwesenden Spielercharakter."
    ],
    besonderheiten: [
      { name: "Schutzaura", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 m von Minazorond beginnt, erleidet 14 (4W6) Blitzschaden." },
      { name: "Konstruktresilienz", beschreibung: "Wenn Schaden Minazorond auf 0 Trefferpunkte reduziert, muss er einen Konstitutions-Rettungswurf mit einem SG von 5 plus dem erlittenen Schaden ablegen, sofern der Schaden kein Strahlungsschaden ist und kein kritischer Treffer war. Bei einem Erfolg fällt Minazorond stattdessen auf 1 Trefferpunkt." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [
      { name: "Drachisches Gegenschlagen", beschreibung: "Auslöser: Minazorond erhält den Zustand Angeschlagen. Er kann diese Reaktion auch einsetzen, wenn er den Zustand Kampfunfähig hat oder anderweitig keine Reaktionen ausführen kann. Reaktion – Alle Zustände und Zauber bei Minazorond enden sofort, außer er entscheidet sich, von ihnen betroffen zu bleiben. Er kann bis zu seiner Fluggeschwindigkeit fliegen, ohne Gelegenheitsangriffe auszulösen, und ignoriert dabei schwieriges Gelände. Minazorond lädt sein Erschütterndes Brüllen auf und setzt es sofort ein." }
    ],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Minazorond agiert immer bei Initiativewert 20. In seinem Zug bewegt er sich normal und interagiert mit Gegenständen, führt aber weder Aktion noch Bonusaktion aus, außer er wird durch einen Effekt dazu gezwungen. Stattdessen führt er am Ende jedes Zuges eines Spielercharakters eine der folgenden epischen Aktionen aus." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +14 zum Treffen, Reichweite 3 m. Treffer: 33 (4W12+7) Stichschaden. Wenn das Ziel Mittelgroß oder kleiner ist, erhält es den Zustand Gepackt (Entkommen SG 17). Solange das Packen anhält, hat das Ziel den Zustand Festgehalten." },
      { name: "Klauen", beschreibung: "Nahkampf-Angriffswurf: +14 zum Treffen, Reichweite 3 m. Treffer: 17 (3W6+7) Hiebschaden." },
      { name: "Schwanz", beschreibung: "Stärke-Rettungswurf: SG 22 für eine Kreatur, die Minazorond innerhalb von 6 m sehen kann. Misserfolg: 14 (4W6) Kraftschaden. Wenn das Ziel Mittelgroß oder kleiner ist, erhält es zusätzlich den Zustand Liegend." },
      { name: "Schockwelle", beschreibung: "Weisheits-Rettungswurf: SG 20 für ein Ziel, das Minazorond innerhalb von 36 m sehen kann. Misserfolg: 22 (4W10) Blitzschaden und der Zustand Schockiert. Erfolg: Nur halber Schaden." },
      { name: "Erschütterndes Brüllen (Aufladen nach einer Kurzen Rast)", beschreibung: "Weisheits-Rettungswurf: SG 20 für jede Kreatur in einer 36-Meter-Ausstrahlung, die Minazorond hören kann. Misserfolg: 18 (4W8) Donnerschaden und der Zustand Verängstigt (Rettungswurf zum Beenden). Erfolg: Nur halber Schaden." },
      { name: "Tief einatmen (1/Runde)", beschreibung: "Die Atemwaffe von Minazorond lädt sich auf. Minazorond kann diese epische Aktion nur einsetzen, wenn es die erste epische Aktion ist, die er in dieser Runde ausführt." },
      { name: "Atemwaffe (Spezialaufladen)", beschreibung: "Minazorond verwendet eine der folgenden Atemwaffen. Er kann diese epische Aktion nur einsetzen, wenn es die letzte epische Aktion ist, die er in dieser Runde ausführt. Blitzatem – Geschicklichkeits-Rettungswurf: SG 22 für jede Kreatur in einem 36-Meter-Kegel. Misserfolg: 81 (16W8) Blitzschaden und der Zustand Schockiert. Erfolg: Nur halber Schaden. Donneratem – Konstitutions-Rettungswurf: SG 22 für jede Kreatur in einem 36-Meter-Kegel. Misserfolg: 66 (12W10) Donnerschaden, und das Ziel wird bis zu 6 m von Minazorond weggestoßen und erhält den Zustand Benommen (Rettungswurf zum Beenden). Misserfolg um 5 oder mehr: Doppelter Schaden, und das Ziel erhält zusätzlich den Zustand Taub (Rettungswurf zum Beenden). Erfolg: Nur halber Schaden." },
      { name: "Epische Resistenz", beschreibung: "Minazorond wählt einen Zustand, Zauber oder Effekt, der ihn gerade betrifft, und würfelt 1W20. Bei 11+ endet dieser Effekt bei ihm. Diese Aktion kann auch eingesetzt werden, wenn er normalerweise keine Aktionen durchführen könnte." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Nachtklinge",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 7,
    xp: 2900,
    rk: 17,
    ruestungstyp: "Genietete Lederrüstung",
    tp: 117,
    tp_wuerfel: "18W8+36",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m" },
    attribute: { STR: 15, DEX: 20, CON: 14, INT: 15, WIS: 18, CHA: 17 },
    rettungswuerfe: { GES: 8, KON: 5 },
    fertigkeiten: { "Akrobatik": 8, "Täuschung": 6, "Wahrnehmung": 7, "Heimlichkeit": 11 },
    schadensresistenzen: ["Nekrotisch", "Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Gemeinsprache sowie zwei weitere Sprachen"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/nachtklinge.png",
    beschreibung: [
      "Die Nachtklingen dienen als Eliteattentäter für ihre Vampirherren. Diese mächtigen Vampirbrut werden damit beauftragt, jeden zu eliminieren, der droht, die geheime Existenz der Vampire aufzudecken. Wenn jemand zu tief in ihre Angelegenheiten eindringt, handeln diese Attentäter schnell und lautlos, um Eindringlinge unschädlich zu machen.",
      "Als Meister der Schatten sind die Nachtklingen nicht nur Attentäter, sondern auch geschickte Spione für ihren nächtlichen Hof. Sie sind hervorragend darin, feindliche Festungen zu infiltrieren, entscheidende Informationen zu sammeln und unentdeckt zu bleiben. Ihre Fähigkeit, Wände zu erklimmen, sich mit Schatten zu verschmelzen und spurlos zu verschwinden, macht sie zu furchterregenden Gegnern.",
      "Innerhalb des Hofes der Nacht gibt es eine spezialisierte Fraktion, die als die Nachtschwestern bekannt ist. Die genaue Anzahl dieser vampirischen Attentäterinnen ist unbekannt, aber sie haben im Laufe der Jahrhunderte zahlreiche hochkarätige Attentate organisiert."
    ],
    besonderheiten: [
      {
        name: "Blutdürstig",
        beschreibung: "Der Vampir hat Vorteil auf Angriffswürfe gegen ein Ziel mit dem Zustand Angeschlagen oder Blutend."
      },
      {
        name: "Regeneration",
        beschreibung: "Der Vampir regeneriert zu Beginn jedes seiner Züge 10 Trefferpunkte, sofern er mindestens 1 Trefferpunkt hat und sich nicht im Sonnenlicht oder in fließendem Wasser befindet. Erleidet er Strahlungsschaden oder Schaden durch Weihwasser, setzt diese Regeneration bis zum Beginn seines nächsten Zuges aus."
      },
      {
        name: "Spinnenklettern",
        beschreibung: "Der Vampir kann schwierige Oberflächen erklimmen, einschließlich kopfüber an Decken, ohne einen Fertigkeitswurf ablegen zu müssen."
      },
      {
        name: "Vampirschwächen",
        beschreibung: "Der Vampir hat folgende Schwächen: Fließendes Wasser – Er erleidet 20 Säureschaden, wenn er seinen Zug in fließendem Wasser endet. Sonnenlicht – Er hat Nachteil auf Angriffswürfe und Weisheitswürfe (Wahrnehmung), während er im Sonnenlicht steht, und erleidet 20 Strahlungsschaden, wenn er seinen Zug im Sonnenlicht endet."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Der Vampir führt zwei Angriffe durch. Er kann einen dieser Angriffe durch Biss ersetzen."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W4+5) Hiebschaden. Ist das Ziel Mittelgroß oder kleiner, erhält es den Zustand Gepackt (Entkommen SG 16)."
      },
      {
        name: "Spektralklingen",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +8, Reichweite 1,5 m oder Reichweite 30 m/120 m. Treffer: 16 (2W10+5) Kraftschaden, und das Ziel erleidet einen der folgenden Effekte nach Wahl des Vampirs (derselbe Effekt kann höchstens einmal pro Runde gewählt werden): Gift – Das Ziel erleidet zusätzlich 9 (2W8) Giftschaden und erhält den Zustand Vergiftet (Konstitutions-Rettungswurf SG 16, Rettungswurf zum Beenden). Offene Wunden – Das Ziel erhält den Zustand Blutend (3W6). Gedankenverwirrer – Das Ziel erhält den Zustand Verwirrt (Intelligenz-Rettungswurf SG 16, Rettungswurf zum Beenden)."
      },
      {
        name: "Biss",
        beschreibung: "Konstitutions-Rettungswurf: SG 16, eine Kreatur innerhalb von 1,5 m, die willig ist oder den Zustand Gepackt, Bewegungsunfähig oder Festgehalten hat. Misserfolg: 15 (3W6+5) Nekrotischer Schaden. Der Vampir regeneriert Trefferpunkte in Höhe des verursachten nekrotischen Schadens."
      }
    ],
    bonusaktionen: [
      {
        name: "Im Schatten verschmelzen",
        beschreibung: "In dämmrigem Licht oder Dunkelheit wirkt der Vampir Unsichtbarkeit auf sich selbst, ohne Komponenten zu benötigen, und verwendet Charisma als Zauberwirk-Eigenschaft."
      }
    ],
    reaktionen: [
      {
        name: "Spektralausweichen",
        beschreibung: "Auslöser: Der Vampir erleidet Schaden. Reaktion: Der Vampir erhält Resistenz gegen diesen Schaden und bewegt sich dann bis zu seiner Bewegungsrate, ohne Gelegenheitsangriffe auszulösen."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Orakel des Rattengottes",
    art: "Monstrosität",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 9,
    xp: 5000,
    rk: 13,
    ruestungstyp: null,
    tp: 110,
    tp_wuerfel: "20W6+40",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 7, DEX: 16, CON: 14, INT: 13, WIS: 19, CHA: 17 },
    rettungswuerfe: { GES: 7, INT: 5, WEI: 8 },
    fertigkeiten: { "Arkanes Wissen": 5, "Einsicht": 8, "Religion": 5, "Wahrnehmung": 8 },
    schadensresistenzen: ["Nekrotisch", "Gift", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 18,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/orakel_des_rattengottes.png",
    beschreibung: [
      "Diese hingebungsvollen Anhänger des Rattengottes zählen zu den begabtesten und mächtigsten Rattling-Zauberkundigen. Unter den ältesten Rattlings überhaupt, existiert nur eine Handvoll von ihnen. Die meisten gehörten zu den Ersten, die am Delirium nagten und sich in den Tagen nach dem Meteoriteneinschlag verwandelten. Sie haben den Aufstieg und Fall zahlloser Rattling-Kriegsbanden und -Kolonien erlebt.",
      "Rattling-Orakel sind in jedem Bau willkommen, da man sie als Omen für Festmahl und Glück betrachtet — was ihre Gastgeber oft zu selbstzerstörerischen Ausschweifungen treibt. Obwohl die Orakel behaupten, Visionen der Zukunft zu haben, sind sie weit davon entfernt, Meisterplaner zu sein. Von wahnsinniger Gewissheit erfüllt, entfachen ihre inbrünstigen Proklamationen Wut und Blutrausch in ihren Artgenossen."
    ],
    besonderheiten: [
      { name: "Feiner Geruchssinn", beschreibung: "Das Rattling hat Vorteil auf Weisheit-Wahrnehmung-Proben, die auf dem Geruchssinn basieren." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Stichschaden." },
      { name: "Todesglocke", beschreibung: "Weisheits-Rettungswurf: SG 16 für eine Kreatur, die das Rattling innerhalb von 36 m sehen kann. Misserfolg: 45 (10W8) nekrotischer Schaden, und das Ziel erhält den Zustand Geschwächt (Rettungswurf zum Beenden). Erfolg: Nur halber Schaden." },
      { name: "Schreckensquieken (1/Tag)", beschreibung: "Charisma-Rettungswurf: SG 16 für jede feindliche Kreatur in einer 18-Meter-Ausstrahlung des Rattlings, die es hören kann. Misserfolg: 55 (10W10) psychischer Schaden. Erfolg: Nur halber Schaden." },
      { name: "Zaubersprüche", beschreibung: "Das Rattling wirkt einen der folgenden Zauber, benötigt keine Materialkomponenten und verwendet Weisheit als Zauberfähigkeit (Zauberrettungswurf-SG 16): 1/Tag: Böser Blick, Geistwächter, Hellsehen, Magie bannen, Wahrsagung." }
    ],
    bonusaktionen: [
      { name: "Rattling-Schlauheit", beschreibung: "Das Rattling führt die Aktion Rennen, Ausweichen oder Verstecken aus." }
    ],
    reaktionen: [
      { name: "Schwanzstacheln", beschreibung: "Auslöser: Eine Kreatur, die das Rattling innerhalb von 18 m sehen kann, besteht eine W20-Probe. Reaktion – Das Rattling zwingt die auslösende Kreatur, die W20-Probe erneut zu würfeln und das niedrigere Ergebnis zu verwenden." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Packender Schatten",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 1,
    xp: 200,
    rk: 10,
    ruestungstyp: null,
    tp: 1,
    tp_wuerfel: null,
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 10, DEX: 19, CON: 15, INT: 10, WIS: 13, CHA: 11 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Säure", "Kälte", "Feuer", "Blitz", "Donner"],
    schadensimmunitaeten: ["Nekrotisch", "Gift"],
    verwundbarkeiten: ["Strahlend"],
    zustandsimmunitaeten: ["Erschöpfung", "Verängstigt", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend", "Festgehalten"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Versteht gelernte Sprachen"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/packender_schatten.png",
    beschreibung: [
      "Packende Schatten sind die Geister der vom Scharfrichter Hingerichteten, die an die Maschine gebunden bleiben. Der Scharfrichter ruft sie aus den Leichen auf dem Schlachtsteinsplatz hervor, um fliehende Eindringlinge zu ergreifen und zurückzuzerren.",
      "Jeder Schatten klammert sich mit den Resten seines letzten Moments an die Sterblichen und versucht verzweifelt, sie in dasselbe schreckliche Totendasein einzuschließen, in dem er selbst gefangen ist. Sie verschwinden, wenn der Scharfrichter zerstört wird."
    ],
    besonderheiten: [
      { name: "Körperlose Bewegung", beschreibung: "Der Schatten kann sich durch andere Kreaturen und Objekte bewegen, als wären sie schwieriges Gelände. Er erleidet 5 (1W10) Kraftschaden, wenn er seinen Zug innerhalb eines Objekts beendet." }
    ],
    aktionen: [
      { name: "Spektraler Griff", beschreibung: "Der Schatten bewirkt, dass eine Kreatur, die er innerhalb von 1,5 m sehen kann, den Zustand Gepackt erhält. Ein Ziel, das eine Aktion aufwendet, um zu entkommen, beendet das Packen automatisch." },
      { name: "Todestrakt", beschreibung: "Der Schatten bewegt sich bis zu seiner Bewegungsrate und zieht eine von ihm gepackte Kreatur mit sich." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Phage",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: null,
    tp: 61,
    tp_wuerfel: "11W8+11",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 16, DEX: 14, CON: 12, INT: 2, WIS: 12, CHA: 8 },
    rettungswuerfe: { WEI: 3 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 36 m"],
    passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Andere Ebenen", "Ruinen"],
    bild: "drakkenheim/phage.png",
    beschreibung: [
      "Du erblickst eine Region des Raumes, die verzerrt erscheint, als würde hier etwas eindringen, das nicht in diese Existenz gehört. Ein Schimmer fremder Anatomie taucht auf – ein welker Fleischsack, der sich auf vier beinartigen Gliedmaßen vorwärts bewegt. Im Zentrum seiner Form öffnet sich ein großes Baleen-Maul, das fröhlich gurgelt, während es auf dich zuschlurft.",
      "Der Zwischenraum der Welten beherbergt fremdartige Bodenfresser, die als Phagen bekannt sind und jede magische Energie verschlingen, die sie finden können. Die Grenzen zwischen den Realitäten werden in der Nähe von Drakkenheims nebelerfüllten Gebieten dünn, sodass diese Kreaturen hindurchsickern können, hungrig nach sterblicher Magie. Sie verschlucken Zauber und speichern einen Teil dieser arkanen Energie für später – manchmal können Zauberwirker die arkane Energie unverdauter Zauber beim Tod einer Phage zurückgewinnen.",
      "In seltenen Fällen haben intelligente Kreaturen Phagen gezähmt und als Wächter gegen zaubernde Bedrohungen eingesetzt. Doch können sie nie vollständig kontrolliert werden und sind fast ebenso geneigt, die Zauber ihres Meisters zu verschlucken wie die eines Feindes."
    ],
    besonderheiten: [
      {
        name: "Zaubergefäß",
        beschreibung: "Nachdem die Phage ihre Reaktion 'Zauber verschlingen' eingesetzt hat, speichert sie den Zauber, bis er verdaut wird oder die Phage stirbt. Wenn die Phage stirbt, tritt der Zauber in Kraft. Falls der ursprüngliche Zauberwirker den Tod der Phage beobachtet, kann er das Ziel des Zaubers wählen, als hätte er ihn vom Standort der Phage aus gewirkt. Andernfalls trifft der Zauber ein zufälliges Ziel in Reichweite."
      },
      {
        name: "Verzerrter Raum",
        beschreibung: "Die Phage verzerrt den Raum magisch in einer Ausstrahlung von 3 m. Angriffe auf die Phage von außerhalb der Ausstrahlung haben Nachteil. Die Phage hat Vorteil auf Rettungswürfe gegen Zauber und Effekte, die von außerhalb der Ausstrahlung ausgehen."
      }
    ],
    aktionen: [
      {
        name: "Biss",
        beschreibung: "Nahkampfangriffswurf +5, Reichweite 3 m. Treffer: 10 (2W6+3) Stichschaden. Falls die Phage keinen Zauber gespeichert hat, führt sie diesen Angriff mit Vorteil aus und verursacht bei einem Treffer zusätzlich 14 (4W6) Stichschaden."
      },
      {
        name: "Spucken",
        beschreibung: "Fernkampfangriffswurf +4, Reichweite 18/36 m. Treffer: 14 (3W6+3) Säureschaden."
      },
      {
        name: "Zauber verdauen",
        beschreibung: "Die Phage verdaut den gespeicherten Zauber, teleportiert sich zu einem unbesetzten Feld, das sie in 9 m sehen kann, und führt einen Spucken-Angriff mit Vorteil aus."
      }
    ],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Zauber verschlingen",
        beschreibung: "Auslöser: Eine Kreatur in 36 m Reichweite wirkt einen Zauber, während die Phage keinen Zauber gespeichert hat. Reaktion – Der Zauber hat keine Wirkung und wird in der Phage gespeichert."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Pilztrolling",
    art: "Riese",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 1,
    xp: 200,
    rk: 13,
    ruestungstyp: "natürliche Rüstung",
    tp: 15,
    tp_wuerfel: "2W8+6",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m" },
    attribute: { STR: 16, DEX: 10, CON: 17, INT: 5, WIS: 11, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: ["Feuer"],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 9 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Riesisch"],
    umgebung: ["Sumpf", "Wald"],
    bild: "drakkenheim/pilztrolling.png",
    beschreibung: [
      "Einem großen lila-weißen Pilz ähnelnd, pulsiert und trieft das Pilztrolling vor überladener Energie. Es wirkt, als würde es jeden Moment platzen, während seine finsteren kleinen Gesichtsausdrücke wimmern und jammern.",
      "Pilztrollinge werden aus den seltsamen Gebräuen der Trollhexen gezüchtet. Eine Trollhexe kann Hunderte dieser Kreaturen in ihren Gärten in sehr kurzer Zeit heranziehen, doch die Trollinge neigen dazu zu platzen, wenn sie zu aufgeregt werden. Nur wenige wachsen je zu Riesigen Pilztrollen heran."
    ],
    besonderheiten: [
      {
        name: "Falsches Aussehen",
        beschreibung: "Solange der Trolling regungslos bleibt, ist er von einem Pilzfleck nicht zu unterscheiden."
      },
      {
        name: "Todesentladung",
        beschreibung: "Wenn der Trolling stirbt, explodiert er in einem Schwall geistig beeinflussender Sporen. Weisheits-Rettungswurf: SG 13 für jede Kreatur, die kein Troll ist, in einer 3-Meter-Ausstrahlung. Misserfolg: 9 (2W8) Psychischer Schaden, und das Ziel erhält den Zustand Geschwächt (Rettungswurf zum Beenden). Erfolg: Nur halber Schaden."
      }
    ],
    aktionen: [
      {
        name: "Sporenhieb",
        beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m, ein Ziel. Treffer: 13 (3W6+3) Nekrotischer Schaden."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Proteische Abscheulichkeit",
    art: "Aberration",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 6,
    xp: 2300,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 168,
    tp_wuerfel: "16W12+64",
    bewegung: { "Gehen": "9 m", "Klettern": "3 m" },
    attribute: { STR: 21, DEX: 8, CON: 18, INT: 5, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Liegend"],
    sinne: ["Blindsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/proteische_abscheulichkeit.png",
    beschreibung: [
      "Proteische Abscheulichkeiten sind formlose, fleischige Massen, die sich durch die verseuchten Straßen Drakkenheims schleppen. Sie entstehen, wenn das Delirium mehrere Organismen zu einem einzigen, schlimm entstellten Körper zusammenschmilzt.",
      "Diese Kreaturen besitzen keine erkennbaren Gliedmaßen oder Sinnesorgane und orientieren sich stattdessen durch ein ausgedehntes Netz von Vibrationsrezeptoren in ihrer Haut. Sie fressen alles Lebendige, das sie erfassen können, und verdauen ihre Beute langsam im Inneren ihrer gallertatigen Körpermasse."
    ],
    besonderheiten: [
      { name: "Absorption", beschreibung: "Wenn die Abscheulichkeit eine Kreatur tötet, gewinnt sie 20 Trefferpunkte." },
      { name: "Formlos", beschreibung: "Die Abscheulichkeit kann sich durch einen so engen Spalt zwängen wie 2,5 cm, ohne sich dabei zu verquetschen." },
      { name: "Spinnenkletterer", beschreibung: "Die Abscheulichkeit kann schwierige Oberflächen, einschließlich Decken, erklimmen, ohne einen Fähigkeitswurf ablegen zu müssen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Abscheulichkeit macht zwei Schlagangriffe. Wenn beide Angriffe dasselbe Ziel treffen, kann die Abscheulichkeit das Ziel packen und dann Verschlingen anwenden." },
      { name: "Schlag", beschreibung: "Nahkampf-Waffenangriff: +8 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 18 (3W8+5) Wuchtschaden." },
      { name: "Verschlingen", beschreibung: "Die Abscheulichkeit versucht, eine von ihr gepackte Kreatur zu verschlingen. Das Ziel muss einen SG-15-Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet das Ziel 18 (3W8+5) Wuchtschaden und wird verschlungen. Während es verschlungen ist, ist das Ziel blind und bewegungsunfähig, hat vollständige Deckung gegen Angriffe und Effekte von außerhalb der Abscheulichkeit, und erleidet zu Beginn jedes Zuges der Abscheulichkeit 18 (3W8+5) Säureschaden. Die Abscheulichkeit kann jeweils nur eine Kreatur verschlingen. Wenn die Abscheulichkeit Schaden erleidet, muss sie einen SG-15-Konstitutionsrettungswurf ablegen; bei einem Misserfolg erbricht sie die verschluckte Kreatur, die dann in einem angrenzenden freien Feld landet." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Psychophant",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 6,
    xp: 2300,
    rk: 15,
    ruestungstyp: null,
    tp: 117,
    tp_wuerfel: "18W8+36",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 12, DEX: 16, CON: 14, INT: 13, WIS: 14, CHA: 17 },
    rettungswuerfe: {},
    fertigkeiten: { "Täuschung": 6, "Überredung": 6 },
    schadensresistenzen: ["Nekrotisch", "Gift"],
    schadensimmunitaeten: ["Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache (wiederholt nur Sätze, die es zuvor gehört hat)"],
    umgebung: ["Stadt", "Ruinen"],
    bild: "drakkenheim/psychophant.png",
    beschreibung: [
      "Die frühesten Überlieferungen erzählen von einem großen Winter, in dem die Verzweifelten um Hilfe riefen. Diese Rufe hallten durch die Weiten des Zwischenraums der Welten und zogen die Aufmerksamkeit von Dingen jenseits des Bekannten auf sich. Psychophanten – Aasfresser, die von Elend, Angst und Verzweiflung angezogen werden – traten durch Dünne Stellen in die Sterblichenwelt ein und lernten, ihre Beute zu imitieren.",
      "Diese anpassungsfähigen Kreaturen schmuggeln sich unter die Verletzlichen, um sich von ihren Emotionen zu nähren. Veteranen des Bürgerkriegs in Westemär berichten, wie sie nach Gefallenen suchten und verzweifelten Schreien folgten, nur um von den Verwundeten selbst angegriffen zu werden. In den überfüllten Lazaretten von Toddsfeld bestanden kontaminierte Patienten darauf, von ihren Pflegern gejagt zu werden – Anschuldigungen, die als Wahnsinn abgetan wurden.",
      "Psychophanten sind Gestaltwandler, die sich mühelos tarnen können. Manche nehmen die Gestalt von Pflegern an: Kleriker der Heiligen Flamme, Apotheker und ihre Gehilfen oder Mitglieder der Kapuzenlaternen in Krankenrevieren. Keiner ist vor ihrer heimtückischen Infiltration sicher.",
      "Ein Psychophant kann ein Ziel wochenlang beschatten, seine Manierismen aufsaugen und seine Sprache erlernen, bevor er es ersetzt. Doch selbst mit Vorbereitung bleibt ihre Fähigkeit zu täuschen begrenzt: Sie können nur Sätze wiederholen, die sie von anderen gehört haben. In den Ruinen von Drakkenheim geben sie sich als unglückliche Überlebende verlorener Expeditionen aus und locken Retter in ihr Verderben – während die Schreie, die von ihnen ausgehen, in Wahrheit die Rufe ihrer jüngsten Opfer sind."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Psychophant führt zwei Angriffe mit Psychischem Griff aus."
      },
      {
        name: "Psychischer Griff",
        beschreibung: "Nahkampfangriffswurf +6, Reichweite 1,5 m. Treffer: 6 (1W6+3) Wuchtschaden plus 7 (2W6) psychischer Schaden, und das Ziel erhält den Zustand Bewegungsunfähig (Weisheits-Rettungswurf SG 14 beendet den Zustand)."
      },
      {
        name: "Letzter Schrei (Aufladen 5–6)",
        beschreibung: "Weisheits-Rettungswurf SG 14, jede Kreatur in einem 9 m Kegel. Fehlschlag: 40 (9W8) psychischer Schaden, und das Ziel erhält den Zustand Verängstigt (Rettungswurf beendet den Zustand). Erfolg: Halber Schaden, und das Ziel ist für 24 Stunden immun gegen den Letzten Schrei dieses Psychophanten."
      },
      {
        name: "Gestaltwandel",
        beschreibung: "Der Psychophant nimmt die Gestalt eines Kleinen oder Mittelgroßen Humanoiden an, den er gesehen hat, oder kehrt zu seiner wahren Form zurück. Seine Spielwerte sind in jeder Form identisch."
      }
    ],
    bonusaktionen: [
      {
        name: "Lebensabsaugung",
        beschreibung: "Der Psychophant verursacht 7 (2W6) nekrotischen Schaden an einer Kreatur, die er in diesem Zug mit Psychischem Griff getroffen hat, und regeneriert Trefferpunkte in Höhe des verursachten nekrotischen Schadens."
      },
      {
        name: "Teleport",
        beschreibung: "Der Psychophant teleportiert sich zu einem unbesetzten Feld, das er in 9 m sehen kann. Er kann eine durch Psychischen Griff bewegungsunfähig gemachte Kreatur mitbringen; diese erscheint dann in einem unbesetzten Feld in 1,5 m vom Zielort des Psychophanten."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Pyknischer Taumler",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 3,
    xp: 700,
    rk: 9,
    ruestungstyp: null,
    tp: 67,
    tp_wuerfel: "9W8+27",
    bewegung: { "Gehen": "3 m", "Schwimmen": "3 m" },
    attribute: { STR: 19, DEX: 8, CON: 16, INT: 1, WIS: 8, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Liegend"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 9,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/pyknischer_taumler.png",
    beschreibung: [
      "Eldrische Kontamination löst chaotische und zufällige Mutationen aus. Die Veränderungen lassen Fleisch schwinden, Haut schmelzen, Nägel, Zähne und Augen ausfallen, die Lippen faulen – und die Knochen werden zu Gallert. Schließlich münden die kaskadierenden Mutationen in einer völligen Auflösung zu einer brodelnden Masse aus mutiertem Fleisch, rudernden Gliedmaßen und disparaten Sinnesorganen: dem Pyknischen Taumler.",
      "Diese grässliche Kreatur ist eine amorphe Masse aus Gliedmaßen, Händen, Mündern und Augen. Manche Augen huschen in Panik umher, andere hängen schläfrig herab. Einige der vielen Münder reden und zitieren obskure Sprachen und Gedichtfragmente, während die zahllosen Hände wild gestikulieren.",
      "Taumler existieren in einem kläglichen, verwirrten Dasein und tasten sich durch Drakkenheim. Sie greifen alles an, was sie antreffen, und absorbieren Fleisch und Materie ihrer Opfer. Ein zu groß gewordener Taumler bricht schließlich in sich zusammen, und mehrere kleinere Taumler entstehen aus den Überresten."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Taumler führt einen Greifen- oder Biss-Angriff gegen jede Kreatur in seiner Reichweite aus. Alternativ führt er zwei Augenstrahl-Angriffe aus." },
      { name: "Greifen", beschreibung: "Nahkampf-Angriffswurf: +6, Reichweite 1,5 m. Treffer: 11 (2W6+4) Wuchtschaden, und wenn das Ziel Mittelgroß oder kleiner ist, erhält es den Zustand Gepackt (Entkommen SG 13). Der Taumler hat unzählige Hände und kann beliebig viele Kreaturen packen." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +6, Reichweite 1,5 m, eine vom Taumler gepackte Kreatur. Treffer: 15 (2W10+4) Stichschaden. Ein Benommenes Ziel, das vom Taumler gepackt ist, ist Wehrlos gegen diesen Angriff." },
      { name: "Augenstrahl", beschreibung: "Fernkampf-Angriffswurf: +6, Reichweite 18 m. Treffer: 13 (2W8+4) Strahlungsschaden." }
    ],
    bonusaktionen: [
      { name: "Murmeln", beschreibung: "Weisheits-Rettungswurf: SG 10 für jede Kreatur in einer 9-Meter-Ausstrahlung, die von dem Taumler ausgeht und ihn hören kann. Fehlschlag: 7 (2W6) Psychischer Schaden, und das Ziel erhält den Zustand Benommen bis zum Beginn seines nächsten Zuges." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Rasender Elender",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 2,
    xp: 450,
    rk: 12,
    ruestungstyp: null,
    tp: 27,
    tp_wuerfel: "6W8",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m" },
    attribute: { STR: 17, DEX: 15, CON: 10, INT: 7, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/rasender_elender.png",
    beschreibung: [
      "Dieser muskulöse Elende springt auf allen vieren auf dich zu, seine Hände und Füße ausgestreckt mit fast klauenartigen Fingern, sein aufgerissener Mund schäumt und tropft, seine Augen wahnsinnig vor rasender Blutgier.",
      "Der Rasende Elende ist ein schnellerer, muskulöserer Verwandter seiner schlurfenden Artgenossen. Er durchstreift die Straßen Drakkenheims und sucht aktiv nach Beute. Er lauert in dunklen Ruinen, nimmt gelegentlich die Kanalisation in Anspruch oder klettert an Gebäudefassaden empor. Wenn eine Gruppe Rasender Elender auf schwächere Elende stößt, treiben sie diese auf die Straßen und nutzen sie als Falle, um Abenteurer anzulocken und dann zuzuschlagen."
    ],
    besonderheiten: [
      {
        name: "Rücksichtslos",
        beschreibung: "Zu Beginn seines Zuges kann der Elende Vorteil auf alle Nahkampf-Angriffswürfe bis zum Beginn seines nächsten Zuges erlangen. Während dieser Zeit haben Angriffswürfe gegen ihn ebenfalls Vorteil."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Rasende Elende führt zwei Klauenangriffe aus."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m. Treffer: 6 (1W6 + 3) Hiebschaden plus 14 (4W6) nekrotischer Schaden. Kritischer Treffer: Konstitutions-Rettungswurf: SG 12. Misserfolg: Das Ziel erhält eine Kontaminationsstufe."
      }
    ],
    bonusaktionen: [
      {
        name: "Springender Satz",
        beschreibung: "Der Elende springt 6 m. Diese Bewegung zählt nicht zur gesamten Bewegungsrate der Runde."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Ratten-Kronprinz",
    art: "Monstrosität",
    unterart: "NPC",
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 10,
    xp: 5900,
    rk: 18,
    ruestungstyp: "Verstärktes Leder",
    tp: 45,
    tp_wuerfel: "6W8+24",
    bewegung: { "Gehen": "15 m", "Klettern": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 15, DEX: 23, CON: 16, INT: 9, WIS: 17, CHA: 13 },
    rettungswuerfe: {},
    fertigkeiten: { "Akrobatik": 14, "Athletik": 10, "Heimlichkeit": 14, "Wahrnehmung": 11 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 21,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/ratten-kronprinz.png",
    beschreibung: [
      "Der Ratten-Kronprinz ist die beängstigende Form, zu der der Rattenprinz heranwächst, wenn er zu lange im Delirium badet und seine eigene düstere Natur vollständig entfaltet. Schneller, stärker und gefährlicher als zuvor, treibt ihn nur noch der Hunger nach Herrschaft und Vernichtung an.",
      "Seine Trefferpunkte erhöhen sich um 45 (6W8+24) für jeden anwesenden Spielercharakter. Er agiert immer bei Initiativewert 20 und führt am Ende jedes Spielerzuges eine seiner epischen Aktionen aus."
    ],
    besonderheiten: [
      { name: "Feiner Geruchssinn", beschreibung: "Der Ratten-Kronprinz hat Vorteil auf Weisheit-Wahrnehmung-Proben, die auf dem Geruchssinn basieren." },
      { name: "Ungezieferaura", beschreibung: "Der Ratten-Kronprinz strahlt eine 9-Meter-Ausstrahlung von schädlicher Kontamination aus. Eine Kreatur, die ihren Zug in der Ausstrahlung beginnt, erleidet 10 (3W6) nekrotischen Schaden." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Der Ratten-Kronprinz agiert immer bei Initiativewert 20. In seinem Zug bewegt er sich normal und interagiert mit Gegenständen, führt aber weder Aktion noch Bonusaktion aus, außer er wird durch einen Effekt dazu gezwungen. Stattdessen führt er am Ende jedes Zuges eines Spielercharakters eine der folgenden epischen Aktionen aus." },
      { name: "Kontaminierter Biss (1/Runde)", beschreibung: "Nahkampf-Angriffswurf: +10 zum Treffen, Reichweite 1,5 m. Treffer: 8 (1W4+6) Stichschaden plus 10 (3W6) nekrotischer Schaden. Konstitutions-Rettungswurf: SG 15. Misserfolg: Das Ziel erhält eine Kontaminationsstufe." },
      { name: "Delirium-getränkte Klingen", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +10 zum Treffen, Reichweite 1,5 m oder 9 m/18 m. Treffer: 13 (2W6+6) nekrotischer Schaden, und das Ziel erleidet einen der folgenden Effekte (Wahl des Ratten-Kronprinzen, gleicher Effekt höchstens 1×/Runde): Gift – KON SG 16. Misserfolg: 18 (4W8) Giftschaden + Zustand Vergiftet 1 Minute (Rettungswurf zum Beenden). Ätzende Verbrennung – GES SG 16. Misserfolg: 10 (3W6) Säureschaden + Brennend (3W6 Säure). Gedankentöter – Konzentriert sich das Ziel auf einen Zauber, erleidet es zusätzlich 25 (5W10) psychischen Schaden, außer es beendet die Konzentration." },
      { name: "Rattlings herbeirufen (1/Runde)", beschreibung: "2W4 Rattling-Krieger graben sich aus dem Boden in freie Felder innerhalb von 18 m auf. Jeder hat 1 Trefferpunkt und bleibt bis zur Vernichtung bestehen." },
      { name: "Im Schatten verschwinden (1/Runde)", beschreibung: "Der Ratten-Kronprinz erhält den Zustand Unsichtbar, bis er einen Angriff ausführt." },
      { name: "Schnellschritt", beschreibung: "Der Ratten-Kronprinz bewegt sich bis zu seiner Bewegungsrate." },
      { name: "Epische Resistenz", beschreibung: "Der Ratten-Kronprinz wählt einen Zustand, Zauber oder Effekt, der ihn gerade betrifft, und würfelt 1W20. Bei 11+ endet dieser Effekt bei ihm. Diese Aktion kann auch eingesetzt werden, wenn er normalerweise keine Aktionen durchführen könnte." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Rattenkönig",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 8,
    xp: 3900,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 170,
    tp_wuerfel: "20W10+60",
    bewegung: { "Gehen": "9 m", "Graben": "4,5 m", "Klettern": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 21, DEX: 8, CON: 16, INT: 15, WIS: 14, CHA: 21 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/rattenkoenig.png",
    beschreibung: [
      "Nicht zu verwechseln mit dem Rattenprinzen: Ein Rattenkönig ist eine mutierte Verschmelzung mehrerer Rattlings zu einem einzigen Wesen von psionischer Macht. Oft ist er das Ergebnis einer katastrophalen arkanen Anomalie, die einen Schwarm von Rattlings betrifft und ihre Schwänze zu einem grässlichen Knoten zusammenschmiedet. Der entstehende Pfeiler aus Rattenfleisch ist eine sich windende und wabernde Abscheulichkeit.",
      "Andere Rattlings empfinden Rattenkönige als furchteinflößend und verbannen sie aus ihren Kolonien. Ein seltsamer Schwarmgeist verleiht dem Rattenkönig eine hohe Intelligenz und fast hellseherische Fähigkeiten. Im Kampf schleudert er eine Salve psionischer Angriffe und zertrümmert die Gedanken seiner Feinde."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Rattenkönig führt zwei Schwanzpeitschenangriffe aus und setzt dann Gedankenblast oder Zaubersprüche ein." },
      { name: "Schwanzpeitsche", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +8 zum Treffen, Reichweite 1,5 m oder 36 m, ein Ziel. Treffer: 33 (8W6+5) psychischer Schaden. Intelligenz-Rettungswurf: SG 16. Misserfolg: Das Ziel erhält die Zustände Benommen und Verlangsamt bis zum Ende des nächsten Zuges des Rattenkönigs." },
      { name: "Gedankenblast (Aufladen 5–6)", beschreibung: "Intelligenz-Rettungswurf: SG 16 für jede Kreatur in einem 18-Meter-Kegel. Misserfolg: 21 (6W6) psychischer Schaden, und das Ziel erhält den Zustand Verhext 1W10 (Rettungswurf zum Beenden)." },
      { name: "Zaubersprüche", beschreibung: "Der Rattenkönig wirkt einen der folgenden Zauber, benötigt keine Materialkomponenten und verwendet Charisma als Zauberfähigkeit (Zauberrettungswurf-SG 16): Nach Belieben: Magierhand, Thaumaturgie. 1/Tag: Schwarze Tentakel, Telekinese." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Rattenprinz",
    art: "Monstrosität",
    unterart: "NPC",
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: "Lederrüstung",
    tp: 66,
    tp_wuerfel: "12W8+12",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 12, DEX: 19, CON: 13, INT: 9, WIS: 15, CHA: 9 },
    rettungswuerfe: {},
    fertigkeiten: { "Akrobatik": 6, "Athletik": 5, "Heimlichkeit": 8, "Wahrnehmung": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/rattenprinz.png",
    beschreibung: [
      "Dieser furchteinflößende Rattling-Anführer hat sich selbst zum Rattenprinzen erklärt. Er residiert in der Höhle unter der Taverne „Rattennest“ und ist der Schrecken unerfahrener Abenteurer im Äußeren Ring Drakkenheims. Er herrscht, weil er der Größte und Stärkste ist und den letzten Rattling tötete, der sich Rattenprinz nannte. Er träumt davon, eines Tages alle anderen Rattling-Kolonien zu unterwerfen und sich huldigen zu lassen.",
      "Der Rattenprinz ist ein rücksichtsloser Kämpfer, der andere Rattlings als Schutzschild benutzt. Wird er in die Enge getrieben, kämpft er nicht — er flieht. Kann er das nicht, weint er und bettelt um sein Leben. Er bietet alles an, was ihm einfällt: Schätze, Geheimgänge, Mengen an „dem Glänzenden“ und seine Gunst unter den Rattlings."
    ],
    besonderheiten: [
      { name: "Feiner Geruchssinn", beschreibung: "Der Rattenprinz hat Vorteil auf Weisheit-Wahrnehmung-Proben, die auf dem Geruchssinn basieren." },
      { name: "Rudeltaktik", beschreibung: "Der Rattenprinz hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn sich mindestens ein Verbündeter innerhalb von 1,5 m der Kreatur befindet und der Verbündete nicht den Zustand Kampfunfähig hat." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Rattenprinz führt drei Angriffe aus: zwei mit dem Kurzschwert und einen mit dem Kontaminierten Biss." },
      { name: "Kurzschwert", beschreibung: "Nahkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W6+4) Stichschaden." },
      { name: "Kontaminierter Biss", beschreibung: "Nahkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W4+4) Stichschaden plus 10 (3W6) nekrotischer Schaden. Konstitutions-Rettungswurf: SG 11. Misserfolg: Das Ziel erhält eine Kontaminationsstufe." },
      { name: "Handarmbrust", beschreibung: "Fernkampf-Angriffswurf: +6 zum Treffen, Reichweite 9 m/36 m, ein Ziel. Treffer: 7 (1W6+4) Stichschaden plus 10 (3W6) Giftschaden." }
    ],
    bonusaktionen: [
      { name: "Rattling-Schlauheit", beschreibung: "Der Rattenprinz führt die Aktion Rennen, Ausweichen oder Verstecken aus." }
    ],
    reaktionen: [
      { name: "Bauernopfer", beschreibung: "Auslöser: Der Rattenprinz wird von einem Angriff oder Zauber ins Visier genommen, der nur ihn als Ziel hat. Reaktion – Der Rattenprinz leitet den Angriff oder Zauber auf ein anderes Rattling innerhalb von 1,5 m um, das stattdessen zum Ziel wird." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Rattling-Alchemist",
    art: "Monstrosität",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 16,
    ruestungstyp: "Verstärktes Leder",
    tp: 70,
    tp_wuerfel: "20W6",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 7, DEX: 18, CON: 10, INT: 17, WIS: 15, CHA: 7 },
    rettungswuerfe: {},
    fertigkeiten: { "Akrobatik": 7, "Heimlichkeit": 7, "Wahrnehmung": 5 },
    schadensresistenzen: ["Säure", "Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/rattling-alchemist.png",
    beschreibung: [
      "Alle Rattlings besitzen eine gewisse hinterlistige Schläue, aber wenige unter ihnen sind mit einem erfinderischen Geist, rücksichtsloser Neugier und explosiven Absichten gesegnet. Oft beginnt es mit einer Faszination für Feuer oder die seltsamen Effekte des Deliriums: Diese Rattlings experimentieren mit improvisierten Materialien, instabilen Zutaten und ausgeschlachteten Werkzeugen, um grobe Apparate und manchmal geniale Fallen zu bauen.",
      "Zwei von drei Rattlings, die Alchemisten werden wollen, sterben in ihren eigenen Explosionen — aber jenes eine, das überlebt, wird zu einer schrecklichen Kraft gegen seine Feinde. Ein Rattling-Alchemist kümmert sich nicht um das Wohlbefinden seiner Artgenossen und wirft seine Delirium-Bombe bedenkenlos mitten unter Verbündete, wenn der Feind sich dahinter befindet."
    ],
    besonderheiten: [
      { name: "Feiner Geruchssinn", beschreibung: "Das Rattling hat Vorteil auf Weisheit-Wahrnehmung-Proben, die auf dem Geruchssinn basieren." },
      { name: "Rudeltaktik", beschreibung: "Das Rattling hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn sich mindestens ein Verbündeter des Rattlings innerhalb von 1,5 m der Kreatur befindet und der Verbündete nicht den Zustand Kampfunfähig hat." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Das Rattling führt drei Repetierarmbrustangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W4+4) Stichschaden." },
      { name: "Repetierende Armbrust", beschreibung: "Fernkampf-Angriffswurf: +7 zum Treffen, Reichweite 9 m/36 m, ein Ziel. Treffer: 11 (1W12+4) Stichschaden plus 10 (3W6) Schaden einer der folgenden Arten (Wahl des Rattlings bei jedem Angriff): Säure, Kälte, Feuer oder Gift." },
      { name: "Delirium-Bombe (Aufladen 5–6)", beschreibung: "Geschicklichkeits-Rettungswurf: SG 15 für jede Kreatur in einer Kugel mit 3 m Radius, zentriert auf einen Punkt, den das Rattling innerhalb von 18 m sehen kann. Misserfolg: 21 (6W6) Feuerschaden plus 18 (4W8) nekrotischer Schaden. Misserfolg oder Erfolg: Eine arkane Anomalie tritt im betroffenen Bereich auf." }
    ],
    bonusaktionen: [
      { name: "Rattling-Schlauheit", beschreibung: "Das Rattling führt die Aktion Rennen, Ausweichen oder Verstecken aus." }
    ],
    reaktionen: [
      { name: "Deckungsfeuer", beschreibung: "Auslöser: Eine Kreatur reduziert einen Verbündeten, den das Rattling sehen kann, auf 0 Trefferpunkte. Reaktion – Das Rattling führt einen Fernkampfangriff gegen diese Kreatur aus." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Rattling-Bauwächter",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 1,
    xp: 200,
    rk: 16,
    ruestungstyp: "Kettenhemd und Schild",
    tp: 33,
    tp_wuerfel: "6W8+6",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 15, DEX: 13, CON: 12, INT: 10, WIS: 10, CHA: 5 },
    rettungswuerfe: { STR: 4, KON: 3 },
    fertigkeiten: { "Athletik": 4, "Wahrnehmung": 2 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/rattling-bauwaechter.png",
    beschreibung: [
      "Rattlings folgen dem Größten unter sich – den sogenannten Bauwächtern. Diese bulligen Anführer genießen mehr Essen, mehr Beute und das Vorrecht, ihre Untergebenen herumzukommandieren. Im Gegenzug müssen sie ihre Stärke und Kühnheit stets unter Beweis stellen, denn ein Rivale wartet immer auf eine Gelegenheit, sie zu stürzen.",
      "Bauwächter nehmen oft die vorderste Position im Kampf ein, um ihre Macht zur Schau zu stellen. Ihre kleinen Gefährten schätzen diese Anordnung durchaus: Es bringt den Anführer direkt in den gefährlichsten Teil jedes Gefechts – in bester Position für einen Dolch in den Rücken."
    ],
    besonderheiten: [
      { name: "Feiner Geruchssinn", beschreibung: "Das Rattling hat Vorteil auf Weisheit-Wahrnehmung-Proben, die auf dem Geruchssinn basieren." },
      { name: "Rudeltaktik", beschreibung: "Das Rattling hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn sich mindestens ein Verbündeter des Rattlings innerhalb von 1,5 m der Kreatur befindet und der Verbündete nicht den Zustand Kampfunfähig hat." }
    ],
    aktionen: [
      { name: "Vergifteter Speer", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +4 zum Treffen, Reichweite 1,5 m oder 6 m/18 m, ein Ziel. Treffer: 5 (1W6+2) Stichschaden plus 10 (3W6) Giftschaden." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Stichschaden." }
    ],
    bonusaktionen: [
      { name: "Schildstoß", beschreibung: "Stärke-Rettungswurf: SG 13 für eine Kreatur in Reichweite des Rattlings. Misserfolg: Das Ziel wird 1,5 m vom Rattling weggestoßen und erhält den Zustand Liegend." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Rattling-Krieger",
    art: "Monstrosität",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 0.125,
    xp: 25,
    rk: 12,
    ruestungstyp: null,
    tp: 5,
    tp_wuerfel: "2W6-2",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 7, DEX: 15, CON: 8, INT: 8, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/rattling-krieger.png",
    beschreibung: [
      "Rattlings sind nagetierartige Humanoide, die in großer Zahl die verseuchten Ruinen Drakkenheims bevölkern. Rattling-Krieger sind die einfachsten dieser Kreaturen – mit wenig Können und noch weniger Tapferkeit –, die ein verzweifeltes Leben aus Plündern und Gewalt fristen.",
      "Rattlings kämpfen in großen Gruppen, umzingeln ihre Feinde und überwältigen sie mit schieren Zahlen. Sie greifen mit verrosteten Waffen, Zähnen und Klauen an und schleudern manchmal alles, was sie aufsammeln können – Steine, Knochen oder sogar Delirium-Splitter. Trotz ihrer angeborenen Feigheit werden Rattlings erschreckend mutig, sobald sie ihre Feinde zahlenmäßig stark übertreffen."
    ],
    besonderheiten: [
      { name: "Feiner Geruchssinn", beschreibung: "Das Rattling hat Vorteil auf Weisheit-Wahrnehmung-Proben, die auf dem Geruchssinn basieren." },
      { name: "Rudeltaktik", beschreibung: "Das Rattling hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn sich mindestens ein Verbündeter des Rattlings innerhalb von 1,5 m der Kreatur befindet und der Verbündete nicht den Zustand Kampfunfähig hat." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Stichschaden." },
      { name: "Schleuder", beschreibung: "Fernkampf-Angriffswurf: +4 zum Treffen, Reichweite 9 m/36 m, ein Ziel. Treffer: 4 (1W4+2) Stichschaden." }
    ],
    bonusaktionen: [
      { name: "Rattling-Schlauheit", beschreibung: "Das Rattling führt die Aktion Rennen, Ausweichen oder Verstecken aus." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Rattling-Pathogenist",
    art: "Monstrosität",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 7,
    xp: 2900,
    rk: 16,
    ruestungstyp: "Verstärktes Leder",
    tp: 110,
    tp_wuerfel: "20W6+40",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 7, DEX: 19, CON: 14, INT: 17, WIS: 15, CHA: 7 },
    rettungswuerfe: {},
    fertigkeiten: { "Arkanes Wissen": 6, "Heimlichkeit": 7, "Täuschung": 1 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/rattling-pathogenist.png",
    beschreibung: [
      "Rattlings sind von Krankheiten geplagte Kreaturen, und die Klügsten unter ihnen haben die Wirkungen dieser Seuchen auf ihre Feinde beobachtet. Das Studium der tatsächlichen Ursachen von Krankheiten und das Erlernen, sie gegen ihre Feinde einzusetzen, ist eine Frage des Stolzes für einen Rattling-Pathogenisten. Diese verdrehten Doktoren halten sich für die brillantesten aller Rattlings.",
      "Der Rattling-Pathogenist trägt mehrere krankheitsbehaftete Klingen, Nadeln und Spritzen sowie eine Gasmaske. Er ist von einem Nebel aus verpesteten Gasen und beißenden Dämpfen umgeben — allein die Nähe zu einem dieser hochkontaminierten Ratten reicht aus, um jemanden krank zu machen."
    ],
    besonderheiten: [
      { name: "Feiner Geruchssinn", beschreibung: "Das Rattling hat Vorteil auf Weisheit-Wahrnehmung-Proben, die auf dem Geruchssinn basieren." },
      { name: "Seuchen-Aura", beschreibung: "Konstitutions-Rettungswurf: SG 14 für eine Kreatur, die ihren Zug innerhalb von 1,5 m des Rattlings beginnt. Misserfolg: 5 (1W10) nekrotischer Schaden." }
    ],
    aktionen: [
      { name: "Dreckige Klinge", beschreibung: "Nahkampf-Angriffswurf: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W4+4) Stichschaden plus 10 (3W6) nekrotischer Schaden." },
      { name: "Infektion (3/Tag)", beschreibung: "Das Rattling infiziert eine Kreatur, die es innerhalb von 18 m sehen kann, mit einer Krankheit. Zu Beginn jedes ihrer Züge wird das Ziel folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 14. Misserfolg: 13 (2W12) nekrotischer Schaden. Erfolg: Nur halber Schaden. Nach drei Erfolgen endet die Krankheit. Misserfolg oder Erfolg: Ein Zauber Kleines Wiederherstellen beendet die Krankheit vorzeitig." },
      { name: "Metastasieren", beschreibung: "Konstitutions-Rettungswurf: SG 14 für eine Kreatur innerhalb von 4,5 m, die mit einer Krankheit infiziert ist. Misserfolg: Das Ziel erhält einen der folgenden Zustände (Wahl des Rattlings): Verwirrt, Ungeschickt oder Geschwächt (Rettungswurf zum Beenden). Der Zustand endet sofort und wird durch einen neuen ersetzt, wenn das Rattling erneut Metastasieren auf das Ziel anwendet. Misserfolg oder Erfolg: 9 (2W8) nekrotischer Schaden." }
    ],
    bonusaktionen: [
      { name: "Unkontrollierte Seuche", beschreibung: "Das Rattling überträgt seine Infektion von einem infizierten Ziel auf eine weitere Kreatur, die sich direkt neben diesem Ziel befindet." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Rattling-Rinnenschütze",
    art: "Monstrosität",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 15,
    ruestungstyp: "Verstärktes Leder",
    tp: 35,
    tp_wuerfel: "10W6",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 7, DEX: 17, CON: 10, INT: 13, WIS: 15, CHA: 7 },
    rettungswuerfe: { GES: 5, INT: 3 },
    fertigkeiten: { "Akrobatik": 5, "Heimlichkeit": 7, "Wahrnehmung": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 14,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/rattling-rinnenschuetze.png",
    beschreibung: [
      "Die Kleinen überleben in den Ruinen durch Heimlichkeit, List und ein umfassendes Repertoire hinterhältiger Tricks. Rattling-Rinnenschützen besitzen hart erkämpfte Fertigkeiten und werden von ihren Artgenossen zu Recht respektiert und gefürchtet. Diese grimmlächelnden Rattlings haben gelernt, sorgfältige Hinterhalte zu planen, tödliche Fallen aufzustellen und ihre Beute in ungünstige Situationen zu locken.",
      "Alle Rinnenschützen führen Delirium-Waffen bei sich – einfache Konstruktionen aus einem scharfen Delirium-Splitter an einem improvisierten Griff. Neben dem Schnitt einer Klinge ist die Kontamination selbst die tödlichste Komponente. Gelegentlich schleichen sich diese geschickten Diebe außerhalb der Ruinen hervor, um Nachschub, Ausrüstung und Nahrung aus Fraktionsstützpunkten zu stehlen."
    ],
    besonderheiten: [
      { name: "Feiner Geruchssinn", beschreibung: "Das Rattling hat Vorteil auf Weisheit-Wahrnehmung-Proben, die auf dem Geruchssinn basieren." },
      { name: "Rudeltaktik", beschreibung: "Das Rattling hat Vorteil auf Angriffswürfe gegen eine Kreatur, wenn sich mindestens ein Verbündeter des Rattlings innerhalb von 1,5 m der Kreatur befindet und der Verbündete nicht den Zustand Kampfunfähig hat." }
    ],
    aktionen: [
      { name: "Kontaminierte Klinge", beschreibung: "Nahkampf-Angriffswurf: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden. Konstitutions-Rettungswurf: SG 10. Misserfolg: 14 (4W6) nekrotischer Schaden. Misserfolg um 5 oder mehr: Das Ziel erhält zusätzlich eine Kontaminationsstufe. Erfolg: Nur halber Schaden." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W4+3) Stichschaden." },
      { name: "Handarmbrust", beschreibung: "Fernkampf-Angriffswurf: +5 zum Treffen, Reichweite 9 m/36 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden plus 10 (3W6) Giftschaden." }
    ],
    bonusaktionen: [
      { name: "Rattling-Schlauheit", beschreibung: "Das Rattling führt die Aktion Rennen, Ausweichen oder Verstecken aus." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Reautomata",
    art: "Konstrukt",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 10,
    xp: 5900,
    rk: 18,
    ruestungstyp: null,
    tp: 170,
    tp_wuerfel: "20W8+80",
    bewegung: { "Gehen": "15 m", "Klettern": "15 m" },
    attribute: { STR: 21, DEX: 19, CON: 19, INT: 13, WIS: 17, CHA: 11 },
    rettungswuerfe: { GES: 8, WEI: 7 },
    fertigkeiten: { "Athletik": 9, "Wahrnehmung": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Versteht die Sprachen, die es zu Lebzeiten kannte, spricht aber nicht"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/reautomata.png",
    beschreibung: [
      "Auf dich zurasend mit ungezügelter Wut – eine schlanke menschliche Gestalt in einer massigen Vollrüstung, die ein Paar überdimensionierter Krummsäbel schwingt. Doch beim Näherkommen wird klar: Dies ist kein bloßer Krieger. Die abgezehrte Gestalt trägt die Rüstung nicht – die Platten wurden in ihre Knochen genagelt und verschraubt. Wucherndes, infiziertes Narbengewebe pulsiert, wo der Körper gegen das in Muskeln und Sehnen eingeschmolzene Metall ankämpft. Und sie hält keine Waffen: Ihre Vordergliedmaßen wurden vollständig durch scharfe Klingensicheln ersetzt. Der glatte, merkmallose Metallhelm gibt nur das krankhafte Maul mit den geschärften Zähnen frei – der Atem riecht nach stechenden Chemikalien.",
      "Reautomata wurden von Dr. Everett Freed, dem Wiederbelebeer, an der Altbruke-Universität als ultimative Schocktruppen erschaffen. Trotz ihres Äußeren sind sie Konstrukte, keine Untoten: Ihre organischen Bestandteile funktionieren eher wie Maschinen als wie Fleisch. Die Reautomata kämpfen weiter, trotz schwerster Verletzungen, ohne mit der Wimper zu zucken, selbst wenn Gliedmaßen fehlen. Sie lassen sich nur aufhalten, indem man ihren Körper über das Maß physischer Funktionsfähigkeit hinaus zerstört.",
      "Reautomata müssen von einem Meister-Wiederbeleeer mit den feinsten Komponenten erschaffen werden – und zwingend an einer lebenden, voll bewussten Person. Gliedmaßen werden entfernt und ersetzt, Metall in Fleisch getrieben und in die Knochen geschweißt. Nervenfasern werden aus dem Gehirn gezogen und im Körper verteilt, was dem Konstrukt eine nahezu perfekte propriozeptive Wahrnehmung verleiht, während überflüssige kognitive Hirngewebe entfernt werden. Das Ergebnis: vollständig gehorchend, aber nicht gedankenlos."
    ],
    besonderheiten: [
      { name: "Unerbittliche Ausdauer", beschreibung: "Wenn Schaden die Reautomata auf 0 Trefferpunkte reduziert, muss sie einen Konstitutionsrettungswurf mit einem SG von 5 plus dem erlittenen Schaden ablegen, sofern der Schaden kein kritischer Treffer war. Bei einem Erfolg fällt sie stattdessen auf 1 Trefferpunkt." },
      { name: "Gewaltiger Sprung", beschreibung: "Der Weitsprung der Reautomata beträgt bis zu 15 Meter und ihr Hochsprung bis zu 9 Meter, jeweils mit oder ohne Anlauf." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Reautomata führt zwei Armklingen-Angriffe und einen Fesselschlag-Angriff aus." },
      { name: "Armklingen", beschreibung: "Nahkampfangriff: +9 auf den Trefferwurf, Reichweite 1,5 m. Treffer: 15 (3W6+5) Hiebangriff. Wenn das Ziel Groß oder kleiner ist, wird es bis zu 1,5 Meter weggestoßen und erhält die Liegend-Bedingung." },
      { name: "Fesselschlag", beschreibung: "Nahkampfangriff: +9 auf den Trefferwurf, Reichweite 1,5 m, nur gegen ein liegendes Ziel. Treffer: 15 (3W6+5) Stichschaden. Wenn das Ziel Groß oder kleiner ist, erhält es die Gepackt-Bedingung (Entkommen SG 17). Solange das Ziel gepackt ist, hat es die Festgehalten-Bedingung, und die Reautomata kann den Fesselschlag nicht gegen ein anderes Ziel einsetzen." }
    ],
    bonusaktionen: [
      { name: "Aggressiv", beschreibung: "Die Reautomata bewegt sich bis zu ihrer Bewegungsrate auf eine feindliche Kreatur zu, die sie sehen kann. Diese Bewegung provoziert keine Gelegenheitsangriffe." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Reautomata-Verwüster",
    art: "Konstrukt",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 13,
    xp: 10000,
    rk: 20,
    ruestungstyp: null,
    tp: 190,
    tp_wuerfel: "20W8+100",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 25, DEX: 10, CON: 21, INT: 10, WIS: 17, CHA: 11 },
    rettungswuerfe: { INT: 5, WEI: 8, CHA: 5 },
    fertigkeiten: { "Athletik": 12, "Wahrnehmung": 8 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 18,
    sprachen: ["Versteht die Sprachen, die es zu Lebzeiten kannte, spricht aber nicht"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/reautomata_verwuester.png",
    beschreibung: [
      "Dieses monströse Konstrukt hat die Ausmaße eines Ogers. Es stößt ein dumpfes Grollen aus wie das dröhnende Klagen eines herannahenden Wals. Dann bricht es in einen Ansturm aus – ein donnerndes Nashorn, das trotz seiner enormen Masse mit unheimlicher Geschwindigkeit vorwärtsstürmt. Sein Körper ist mit gepanzerten Tanks bedeckt, von denen Schläuche direkt in Ohren, Nase, Mund und Hals führen und seltsame Chemikalien in seinen Körper pumpen.",
      "Seit dem Tod von Dr. Freed wurden seine Erkenntnisse und Werke dennoch verbreitet, darunter unfertige Konstruktionspläne für diesen fortgeschrittenen Reautomata-Prototyp. Eher eine lebende Belagerungsmaschine als ein Schocktrupp, ist der Reautomata-Verwüster eine wütende und zerstörerische Maschine. Er wurde aus Teilen von Trollen, Ogers und Menschen zusammengesetzt und mit gepanzerten Platten verstärkt, die die Tanks und Antriebsmaschinen tragen. Im Kern des Verwüsters sitzt ein mächtiger Antriebsmotor, der, wenn er übertaktet wird, das Konstrukt in einen Pfad der grenzenlosen Zerstörung treibt – bevor es in einem Feuerball alchemischen Untergangs explodiert."
    ],
    besonderheiten: [
      { name: "Belagerungsmonster", beschreibung: "Der Reautomata-Verwüster verursacht doppelten Schaden an Objekten und Strukturen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Reautomata-Verwüster führt einen Bohrer-Angriff und einen Abrisshammer-Angriff aus." },
      { name: "Bohrer", beschreibung: "Nahkampfangriff: +12 auf den Trefferwurf, Reichweite 1,5 m. Treffer: 21 (4W6+7) Stichschaden." },
      { name: "Abrisshammer", beschreibung: "Nahkampfangriff: +12 auf den Trefferwurf, Reichweite 6 m. Treffer: 21 (4W6+7) Wuchtschaden. Stärkerettungswurf SG 20. Misserfolg: Das Ziel erhält die Benommen-Bedingung (Rettungswurf am Ende des Zuges beendet sie) und die Liegend-Bedingung." },
      { name: "Vernichtender Ansturm (Aufladen 6)", beschreibung: "Der Reautomata-Verwüster bewegt sich bis zu seiner Bewegungsrate in einer geraden Linie und kann sich durch die Felder Mittelgroßer oder kleinerer Kreaturen bewegen. Das erste Mal, wenn er in einem Zug in das Feld einer Kreatur eindringt, kann er einen Bohrer- oder Abrisshammer-Angriff gegen diese Kreatur durchführen." }
    ],
    bonusaktionen: [
      { name: "Turboantrieb (1/Tag; nur Angeschlagen)", beschreibung: "Der Vernichtende Ansturm lädt sofort auf. Bis zum Ende seines nächsten Zuges erhält der Reautomata-Verwüster Immunität gegen allen Schaden und alle Zustände, besteht automatisch alle Rettungswürfe sowie alle Stärke-, Geschicklichkeits- und Konstitutionsfähigkeitswürfe und hat Vorteil auf Angriffswürfe. Er kann weder zu einer Bewegung gezwungen werden noch von Zaubern der Stufe 8 oder niedriger beeinflusst werden. Fähigkeiten und Effekte, die Resistenzen und Immunitäten ignorieren, wirken nicht gegen ihn, es sei denn, sie werden durch einen Zauber der Stufe 9 oder ein Artefakt verursacht. Am Ende seines nächsten Zuges stirbt der Reautomata-Verwüster und explodiert: Geschicklichkeitsrettungswurf SG 20 für jede Kreatur in einer 6-Meter-Ausstrahlung. Misserfolg: 20 (8W4) Säureschaden und 36 (8W8) Nekrotischer Schaden. Erfolg: Nur halber Schaden." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Riesiger Pilztroll",
    art: "Riese",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Neutral böse",
    cr: 10,
    xp: 5900,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 54,
    tp_wuerfel: "4W12+28",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 23, DEX: 10, CON: 25, INT: 10, WIS: 17, CHA: 13 },
    rettungswuerfe: { KON: 11, WEI: 7, CHA: 5 },
    fertigkeiten: { "Athletik": 10, "Wahrnehmung": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: ["Feuer"],
    zustandsimmunitaeten: [],
    sinne: ["Blindsinn 18 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Riesisch"],
    umgebung: ["Sumpf", "Wald"],
    bild: "drakkenheim/riesiger_pilztroll.png",
    beschreibung: [
      "Riesige Pilztrolle sind die Wächter ihrer Sümpfe. Sie dulden keine Eindringlinge und sind ihren Trollhexenmüttern gegenüber loyal, die ihre Pilzfarmen verteidigen. Wenn ein Riesiger Pilztroll durch den Sumpf stapft, erschüttern seine Schritte die Bäume, und aus ihm fallen Sporen, die zu Pilztrollingen heranwachsen.",
      "Diese massigen Pilzmonstrositäten reisen oft in Netzwerken zusammen. Wenn man einen Riesigen Pilztroll auf sich zustürzen sieht, sollte man gewarnt sein, dass wahrscheinlich noch mehr folgen.",
      "Trefferpunkte: 54 (4W12+28) plus 54 (4W12+28) für jeden Spielercharakter in der Begegnung."
    ],
    besonderheiten: [
      {
        name: "Falsches Aussehen",
        beschreibung: "Solange der Troll regungslos bleibt, ist er von einem riesigen Pilz nicht zu unterscheiden."
      },
      {
        name: "Regeneration",
        beschreibung: "Der Troll regeneriert zu Beginn jedes seiner Züge 30 Trefferpunkte. Erleidet er Säure- oder Feuerschaden, setzt diese Regeneration bis zum Beginn seines nächsten Zuges aus. Der Troll stirbt nur, wenn er seinen Zug mit 0 Trefferpunkten beginnt und sich nicht regeneriert."
      },
      {
        name: "Verwesungsaura",
        beschreibung: "Jede Kreatur, die ihren Zug in einer 9-Meter-Ausstrahlung des Trolls beginnt, erleidet 10 (3W6) Nekrotischen Schaden, sofern der Troll nicht den Zustand Bewegungsunfähig hat."
      }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Der Troll kann sich in seinem Zug normal bewegen. Er führt jedoch keine Aktion oder Bonusaktion in seinem Zug aus, es sei denn, er wird durch einen Zauber oder einen anderen Effekt dazu gezwungen. Stattdessen führt der Troll am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen nach Wahl aus." },
      { name: "Sporentreffer", beschreibung: "Nahkampf-Angriffswurf: +10, Reichweite 3 m, ein Ziel. Treffer: 33 (6W8+6) Wuchtschaden." },
      { name: "Greifende Ranken", beschreibung: "Nahkampf-Angriffswurf: +10, Reichweite 18 m, ein Ziel. Treffer: 22 (3W10+6) Hiebschaden. Ist das Ziel Riesig oder kleiner, wird es bis zu 6 m auf den Troll zugezogen." },
      { name: "Fesselnde Myzelien (Aufladen wenn Angeschlagen)", beschreibung: "Stärke-Rettungswurf: SG 15 für jede Kreatur nach Wahl des Trolls in einem 9-Meter-Radius um ihn. Misserfolg: Das Ziel erhält den Zustand Festgehalten (Rettungswurf zum Beenden)." },
      { name: "Pilztrolling erschaffen (1/Runde)", beschreibung: "Der Troll erschafft einen Pilztrolling in einem unbesetzten Raum innerhalb von 3 m. Der Pilztrolling handelt sofort nach dieser Aktion und danach nach dem Zug des Trolls in nachfolgenden Runden." },
      { name: "Epische Resistenz", beschreibung: "Der Troll wählt einen Zustand, einen Zauber oder einen anderen Effekt, der ihn gerade betrifft, und würfelt 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihm. Der Troll kann diese Aktion verwenden, selbst wenn er anderweitig keine Aktionen durchführen kann, seine Aktionen von einer anderen Kreatur kontrolliert werden oder ein Zauber oder Effekt seine Spielwerte verändert." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Riesiges Rattling",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 4,
    xp: 1100,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 75,
    tp_wuerfel: "10W10+30",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m", "Schwimmen": "12 m" },
    attribute: { STR: 19, DEX: 15, CON: 16, INT: 5, WIS: 10, CHA: 7 },
    rettungswuerfe: {},
    fertigkeiten: { "Athletik": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/riesiges_rattling.png",
    beschreibung: [
      "Gelegentlich hört ein Rattling einfach nicht auf zu wachsen. Leider halten ihre Gehirne mit dem wachsenden Körper kaum Schritt, und so sind die meisten dieser tölpelhaften Bruten ziemlich stumpfsinnig. Diese dummen Kolosse stürmen blindlings in den Kampf, ohne Rücksicht auf sich selbst oder andere Rattlings – manchmal packen sie sogar ihre Kameraden und schleudern sie auf die Feinde zu.",
      "Obwohl Riesige Rattlings oft die Größten im Rudel sind, gelten sie nicht als Anführer – ihre Unfähigkeit zu führen oder auch nur taktisch zu denken, macht sie zu nützlichen lebenden Belagerungswaffen für schlauere Rattlings. Hexenmeister und Alchemisten halten sich häufig ein oder zwei als Leibwächter oder Rammbock."
    ],
    besonderheiten: [
      { name: "Feiner Geruchssinn", beschreibung: "Das Rattling hat Vorteil auf Weisheit-Wahrnehmung-Proben, die auf dem Geruchssinn basieren." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Das riesige Rattling führt zwei Klauensangriffe und einen Bissangriff aus. Es kann bis zu zwei Angriffe durch Verwendungen von Rattling schleudern ersetzen." },
      { name: "Klauen", beschreibung: "Nahkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W8+4) Hiebschaden. Kritischer Treffer: Das Ziel erhält den Zustand Erschüttert bis zum Beginn des nächsten Zuges des riesigen Rattlings." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 17 (2W12+4) Stichschaden." },
      { name: "Rattling schleudern", beschreibung: "Das riesige Rattling greift sich ein williges Mittelgroßes oder kleineres Rattling als Verbündeten oder eine Leiche innerhalb von 1,5 m. Geschicklichkeits-Rettungswurf: SG 14 für eine Kreatur, die das riesige Rattling innerhalb von 9 m sehen kann. Misserfolg: 18 (4W8) Wuchtschaden, und das Ziel erhält den Zustand Liegend. Erfolg: Nur halber Schaden. Misserfolg oder Erfolg: Das geschleuderte Rattling erleidet denselben Schaden und landet mit dem Zustand Liegend." }
    ],
    bonusaktionen: [
      { name: "Rasen (Aufladen 5–6)", beschreibung: "Das riesige Rattling erhält 15 temporäre Trefferpunkte. Solange diese nicht verloren sind, hat es Vorteil auf stärkebasierte W20-Proben." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Ritter der Tiefe",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Neutral böse",
    cr: 3,
    xp: 700,
    rk: 18,
    ruestungstyp: "Kettenhemd und Schild",
    tp: 85,
    tp_wuerfel: "10W10+30",
    bewegung: { "Gehen": "6 m", "Schwimmen": "18 m" },
    attribute: { STR: 18, DEX: 15, CON: 17, INT: 12, WIS: 15, CHA: 12 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 4 },
    schadensresistenzen: ["Säure", "Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 14,
    sprachen: ["Gemeinsprache", "Telepathie 18 m"],
    umgebung: ["Gewässer", "Unterirdisch"],
    bild: "drakkenheim/ritter_der_tiefe.png",
    beschreibung: [
      "Die Ritter der Tiefe sind die Elitekrieger der Elenden der Tiefe. Einst waren sie Soldaten oder Stadtwachen, doch der Dunst hat ihre Körper zu massigen, amphibischen Bestien verformt. Schwer gerüstet und mit einer Harpune bewaffnet, bewachen sie die Zugänge zur versunkenen Stadt und ziehen Eindringlinge unbarmherzig in die Tiefe.",
      "Ihre Telepathie macht sie zu verlässlichen Schlachtenführern unter Wasser, wo Sprache sinnlos wird. Auf dem Trockenen sind sie langsam, doch im Wasser gleiten sie mit erschreckender Eleganz durch die Fluten."
    ],
    besonderheiten: [
      { name: "Abgrundaura", beschreibung: "Jede Kreatur außer Aberrationen, die ihren Zug innerhalb von 3 m des Ritters der Tiefe beginnt, erleidet 5 (2W4) Kälteschaden." },
      { name: "Amphibisch", beschreibung: "Der Ritter der Tiefe kann sowohl Luft als auch Wasser atmen." },
      { name: "Unerschütterlicher Wächter", beschreibung: "Der Ritter der Tiefe kann nicht gestoßen werden und ist immun gegen den Zustand Liegend." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Ritter der Tiefe führt einen Harpunenangriff und einen Bissangriff aus." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m. Treffer: 13 (2W8+4) Stichschaden." },
      { name: "Harpune", beschreibung: "Nahkampf-Angriffswurf: +6 zum Treffen, Reichweite 3 m. Treffer: 11 (2W6+4) Stichschaden. Wenn das Ziel Riesig oder kleiner ist, wird es bis zu 6 m auf den Ritter der Tiefe zugezogen." }
    ],
    bonusaktionen: [
      { name: "Schildschlag", beschreibung: "Nahkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m. Treffer: 9 (2W4+4) Wuchtschaden. Stärke-Rettungswurf: SG 14. Misserfolg: Das Ziel erhält den Zustand Liegend." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Scharfrichter",
    art: "Konstrukt",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 25,
    xp: 75000,
    rk: 22,
    ruestungstyp: null,
    tp: 250,
    tp_wuerfel: "20W12+140",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 30, DEX: 11, CON: 25, INT: 10, WIS: 19, CHA: 10 },
    rettungswuerfe: { STR: 18, KON: 15, INT: 8, CHA: 8 },
    fertigkeiten: { "Wahrnehmung": 20 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift", "Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet"],
    sinne: ["Wahres Sehen 36 m"],
    passiveWahrnehmung: 30,
    sprachen: ["Versteht Gemein (spricht nicht)"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/scharfrichter.png",
    beschreibung: [
      "Der Scharfrichter ist ein massiver Uhrwerk-Ritter, der ursprünglich öffentliche Hinrichtungen auf dem Schlachtsteinsplatz in Drakkenheim vollzog. Diese uralte Maschine wurde von den Zwergen des Glitzergipfels erschaffen, lag jahrhundertelang unter Lawinenschutt begraben und wurde vor einigen Jahrzehnten von einem Expeditionsteam ausgegraben. Der König beauftragte die Amethystakademie, das Konstrukt zu restaurieren und seine arkane Programmierung so anzupassen, dass es dem Monarchen von Westemär gehorcht.",
      "Die launische Magie des Deliriums hat die Kontrollprotokolle der Maschine jedoch durcheinandergebracht. Nun von der Haze kontaminiert, ist das Konstrukt eine Maschine der Vernichtung, die spektrale Ketten und die Geister ihrer Opfer zu Hilfe rufen kann. Es greift jeden an, der den Platz betritt, verlässt aber nie die Grenzen des Schlachtsteinsplatzes. Berge von Leichen türmen sich auf dem Platz auf – ein grausames Zeugnis der Tätigkeit des Scharfrichters. Seine Trefferpunkte erhöhen sich um 250 (20W12+140) für jeden anwesenden Spielercharakter."
    ],
    besonderheiten: [
      { name: "Dimensionsanker", beschreibung: "Der Scharfrichter kann nicht teleportiert oder auf eine andere Existenzebene geschickt werden, außer er wählt es selbst." },
      { name: "Unveränderliche Form", beschreibung: "Der Scharfrichter ist immun gegen Zauber und Effekte, die seine Form verändern würden." },
      { name: "Verjüngung", beschreibung: "Wird der Scharfrichter zerstört, stellt er sich eine Minute später mit allen Trefferpunkten wieder her, sofern kein Wunsch-Zauber verwendet wird, um ihn aufzuhalten. Ein zu diesem Zweck gewirkter Wunsch-Zauber ist immer belastend – der Wirker muss würfeln, ob er den Wunsch-Zauber jemals wieder wirken kann." },
      { name: "Nekrotische Entlüftung", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 m des Scharfrichters beginnt, erleidet 10 (3W6) nekrotischen Schaden." },
      { name: "Stoisch", beschreibung: "Der Scharfrichter kann keine Reaktionen ausführen." },
      { name: "An den Schlachtstein gebunden", beschreibung: "Wenn der Scharfrichter seinen Zug mehr als 30 m vom Schlachtsteinsplatz entfernt beginnt, verschwindet er in der Haze und erscheint eine Minute später in der Mitte des Schlachtsteinsplatzes wieder." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Der Scharfrichter agiert immer bei Initiativewert 20. In seinem Zug bewegt er sich normal und interagiert mit Gegenständen, führt aber weder Aktion noch Bonusaktion aus, außer er wird durch einen Effekt dazu gezwungen. Stattdessen führt er am Ende jedes Zuges eines Spielercharakters eine der folgenden epischen Aktionen aus." },
      { name: "Vorwärts stapfen (1/Runde)", beschreibung: "Der Scharfrichter bewegt sich bis zu seiner Bewegungsrate." },
      { name: "Todesgriff", beschreibung: "Spektralketten erscheinen um eine Kreatur innerhalb von 90 m des Scharfrichters. Das Ziel erhält den Zustand Gepackt (Entkommen SG 15) und den Zustand Festgehalten, bis das Packen endet. Der Zustand endet, wenn der Scharfrichter Todesgriff gegen ein anderes Ziel einsetzt." },
      { name: "Guillotineklinge (1/Runde)", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +18 zum Treffen, Reichweite 3 m, oder Fernkampf 18 m. Treffer: 45 (10W6+10) Hiebschaden, der jede Resistenz oder Immunität gegen Hiebschaden ignoriert. Unmittelbar nach einem Fernkampfangriff fliegt die Waffe in die Hände des Scharfrichters zurück. Kritischer Treffer: Das Ziel stirbt, sofern es nicht über die epische Aktion Epische Resistenz oder das Merkmal Legendäre Resistenz verfügt." },
      { name: "Vernichter (1/Runde)", beschreibung: "Der Scharfrichter wählt ein Riesiges oder kleineres Objekt oder Bauwerk innerhalb von 1,5 m. Alternativ kann er einen Zauber oder magischen Effekt innerhalb von 9 m wählen. Das Objekt oder Bauwerk wird zerstört, oder der Zauber oder Effekt endet." },
      { name: "Packende Schatten herbeirufen (1/Runde)", beschreibung: "Der Scharfrichter wählt 1W4 Leichen innerhalb von 90 m. Der Geist jedes Ziels erhebt sich als Packender Schatten im nächsten freien Raum. Die Geister agieren jede Runde bei Initiativewert 20 und verschwinden, wenn der Scharfrichter zerstört wird." },
      { name: "Epische Resistenz", beschreibung: "Der Scharfrichter wählt einen Zustand, Zauber oder Effekt, der ihn gerade betrifft, und würfelt 1W20. Bei 11+ endet dieser Effekt bei ihm. Diese Aktion kann auch eingesetzt werden, wenn er normalerweise keine Aktionen durchführen könnte." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Karmesin-Gräfin",
    art: "Monstrosität",
    unterart: "NPC",
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 8,
    xp: 3900,
    rk: 15,
    ruestungstyp: null,
    tp: 39,
    tp_wuerfel: "6W8+12",
    bewegung: { "Gehen": "6 m", "Fliegen": "18 m" },
    attribute: { STR: 10, DEX: 21, CON: 15, INT: 13, WIS: 11, CHA: 19 },
    rettungswuerfe: {},
    fertigkeiten: { "Täuschung": 8, "Wahrnehmung": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Blitz", "Donner"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/karmesin_graefin.png",
    beschreibung: [
      "Die Karmesin-Gräfin ist eine mächtige Harpyien-Königin. Ihre rot-gefiederten Flügel und das tiefe Karmesinrot ihres Haares heben sie von ihren vielen Gefolgsharpyien ab. Sie ist in schwarze und goldene Rüstung gekleidet und trägt einen Speer, der vor magischer Energie knistert.",
      "Die Gräfin ist eine listige Jägerin, die territorial über den Uhrturm im Herzen Drakkenheims herrscht. Sie verlässt ihren Uhrturm nur, um an Jagden mit ihren Walküren teilzunehmen. Wer es schafft, ihre Wächter zu überwinden und in ihr Hoheitsgebiet eindringt, wird schnell von einem Greifangriff gepackt und von den offenen Balkonen in die Tiefe geworfen. Ihre Trefferpunkte erhöhen sich um 39 (6W8+12) für jeden anwesenden Spielercharakter."
    ],
    besonderheiten: [
      { name: "Sturmausstrahlung", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 m der Karmesin-Gräfin beginnt, erleidet 10 (3W6) Blitzschaden." },
      { name: "Greifangriff", beschreibung: "Die Karmesin-Gräfin muss keine zusätzliche Bewegung aufwenden, um eine von ihr gepackte Mittelgroße oder kleinere Kreatur mit sich zu ziehen." }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Die Karmesin-Gräfin agiert immer bei Initiativewert 20. In ihrem Zug bewegt sie sich normal und interagiert mit Gegenständen, führt aber weder Aktion noch Bonusaktion aus, außer sie wird durch einen Effekt dazu gezwungen. Stattdessen führt sie am Ende jedes Zuges eines Spielercharakters eine der folgenden epischen Aktionen aus." },
      { name: "Packende Klauen", beschreibung: "Nahkampf-Angriffswurf: +8 zum Treffen, Reichweite 1,5 m. Treffer: 7 (1W4+5) Stichschaden. Wenn das Ziel Mittelgroß oder kleiner ist, erhält es den Zustand Gepackt (Entkommen SG 15)." },
      { name: "Blitz-Wurfspeer", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +8 zum Treffen, Reichweite 1,5 m, oder Fernkampf 9 m/18 m. Treffer: 14 (2W8+5) Blitzschaden." },
      { name: "Luftakrobatin", beschreibung: "Die Karmesin-Gräfin fliegt bis zu ihrer Bewegungsrate, ohne Gelegenheitsangriffe auszulösen." },
      { name: "Erschreckender Schrei (1/Runde)", beschreibung: "Weisheits-Rettungswurf: SG 15 für eine Kreatur innerhalb von 36 m, die die Gräfin hören kann. Misserfolg: 14 (4W6) Psychischen Schaden und der Zustand Verängstigt (Rettungswurf zum Beenden). Solange die Kreatur Verängstigt ist, muss sie jede Runde die Aktion Rennen ausführen und sich auf dem sichersten verfügbaren Weg von der Gräfin entfernen, sofern es Bewegungsraum gibt." },
      { name: "Blitzschlag (Aufladen 5–6)", beschreibung: "Geschicklichkeits-Rettungswurf: SG 15 für jede Kreatur in einer 18 m langen, 1,5 m breiten Linie. Misserfolg: 36 (8W8) Blitzschaden und der Zustand Schockiert bis zum Ende ihres nächsten Zuges. Erfolg: Nur halber Schaden." },
      { name: "Epische Resistenz", beschreibung: "Die Karmesin-Gräfin wählt einen Zustand, Zauber oder Effekt, der sie gerade betrifft, und würfelt 1W20. Bei 11+ endet dieser Effekt bei ihr. Diese Aktion kann auch eingesetzt werden, wenn sie normalerweise keine Aktionen durchführen könnte." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Schleuderfrosch",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 3,
    xp: 700,
    rk: 14,
    ruestungstyp: null,
    tp: 55,
    tp_wuerfel: "10W8+10",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 13, DEX: 15, CON: 13, INT: 12, WIS: 14, CHA: 8 },
    rettungswuerfe: { GES: 4 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Gewässer", "Ruinen"],
    bild: "drakkenheim/schleuderfrosch.png",
    beschreibung: [
      "Der Drann-Fluss fließt aus dem Kesselwald-Forst von Nordosten in Drakkenheim. Die Frösche, die einst in großer Zahl den Fluss hinab in den Norden der Stadt wanderten, wurden durch das kontaminierte Wasser auf eine groteske Größe aufgebläht und ihr Fortpflanzungszyklus vollständig verändert.",
      "Diese mutierten Monster sind nun entlang des Flusses allgegenwärtig und machen jede Überquerung gefährlich. Ihre Eier schlüpfen nicht von selbst, sondern benötigen einen Wirtskörper, um die Metamorphose abzuschließen. Aus diesem Grund setzen die Frösche ihre kontaminierten Eier als Waffe ein und schleudern sie auf vorbeiziehende Abenteurer, Kundschafter und sogar andere kontaminierte Kreaturen.",
      "Der Schleuderfrosch produziert Hunderte von Eiern und setzt auf Masse, in der Hoffnung, dass ein paar von ihnen die Möglichkeit haben, zu neuen Schleuderfrösche heranzuwachsen. Neu geformte Schleuderfrösche tragen stets ein kleines Merkmal des Wirts in sich."
    ],
    besonderheiten: [
      { name: "Sprungmeister", beschreibung: "Der Schleuderfrosch kann bis zu 9 Meter weit und bis zu 6 Meter hoch springen, mit oder ohne Anlauf." },
      { name: "Gifthaut", beschreibung: "Wenn eine Kreatur innerhalb von 1,5 m den Schleuderfrosch mit einem Nahkampfangriff trifft, erleidet diese Kreatur 3 (1W6) Giftschaden." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +4, Reichweite 1,5 m. Treffer: 4 (1W4+2) Stichschaden, und das Ziel erhält den Zustand Abgelenkt." },
      { name: "Laich werfen", beschreibung: "Fernkampf-Angriffswurf: +4, Reichweite 9/18 m. Treffer: 6 (1W8+2) Wuchtschaden plus 10 (3W6) Säureschaden. Wenn das Ziel eine Kreatur ist, klebt das Ei an ihrem Körper und verschmilzt mit ihrem Fleisch. Eine Kreatur innerhalb von 1,5 m kann eine Aktion aufwenden, um das Ei zu entfernen, wobei das Ziel dabei 10 (3W6) Säureschaden erleidet. Wenn das Ei noch am Ende des nächsten Zuges des Ziels angehaftet ist, wird das Ziel mit einer Krankheit infiziert und erhält den Zustand Erkrankt, bis die Krankheit endet. Die Krankheit kann nur durch Magie geheilt werden. Jede Stunde ist das Ziel folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 12. Fehlschlag: Das Ziel erhält eine Kontaminationsstufe. Auf diese Weise erlangte Kontaminationsstufen können nicht entfernt werden, bis die Krankheit geheilt ist. Erleidet das Ziel eine Monströse Verwandlung, stirbt es, und sein Fleisch fällt ab, wobei ein Schleuderfrosch geboren wird." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Schlund-Ungeziefer",
    art: "Monstrosität",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 10,
    xp: 5900,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 161,
    tp_wuerfel: "14W12+70",
    bewegung: { "Gehen": "6 m" },
    attribute: { STR: 23, DEX: 13, CON: 20, INT: 2, WIS: 12, CHA: 5 },
    rettungswuerfe: { STR: 10, KON: 9, WEI: 5 },
    fertigkeiten: { "Wahrnehmung": 9 },
    schadensresistenzen: ["Säure", "Nekrotisch", "Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 19,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/schlund-ungeziefer.png",
    beschreibung: [
      "Die genauen Ursprünge des Schlund-Ungeziefers sind noch immer ein Rätsel — ist es ein schrecklich mutiertes Rattling, das der Kontamination Drakkenheims erlag, oder etwas noch Unheilvolleres? Vielleicht war es einst eine Ratte, die sich an zu viel Delirium gütlich tat, oder ein kranker Aasfresser aus einer anderen Dimension.",
      "Manche Rattlings verehren das Schlund-Ungeziefer als Vorboten des Rattengottes und betrachten es als das Nächste, was ein Rattling einem Engel werden kann. Einige Rattlings fressen endlos Delirium in der Hoffnung, sich selbst in ein Schlund-Ungeziefer zu verwandeln, um ihrer Gottheit näherzukommen."
    ],
    besonderheiten: [
      { name: "Magieresistenz", beschreibung: "Das Schlund-Ungeziefer hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Das Schlund-Ungeziefer führt einen Bissangriff und drei Klauensangriffe aus und kann Greifendes Maul oder Gallert-Kanone einsetzen." },
      { name: "Biss", beschreibung: "Nahkampf-Angriffswurf: +10 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 22 (3W10+6) Stichschaden. Wenn das Ziel eine Mittelgroße oder kleinere Kreatur ist, wird es verschluckt. Eine verschluckte Kreatur hat die Zustände Geblendet und Festgehalten sowie vollständige Deckung gegen Effekte, die von außerhalb des Schlund-Ungeziefers entstammen. Zu Beginn jedes Zuges des Schlund-Ungeziefers erleidet eine verschluckte Kreatur 10 (3W6) Säureschaden und muss einen SG-15-Konstitutionsrettungswurf bestehen oder eine Kontaminationsstufe erhalten. Das Schlund-Ungeziefer kann bis zu drei Kreaturen gleichzeitig verschlucken. Wenn es in einem einzigen Zug von einer Kreatur in seinem Inneren 20 oder mehr Schaden erleidet, muss es am Ende dieses Zuges einen SG-20-Konstitutionsrettungswurf bestehen oder alle verschluckten Kreaturen erbrechen; jede landet innerhalb von 3 m des Schlund-Ungeziefers mit dem Zustand Liegend. Wenn das Schlund-Ungeziefer stirbt, hat eine verschluckte Kreatur nicht mehr den Zustand Festgehalten und kann die Leiche mit 3 m Bewegung verlassen, wobei sie mit dem Zustand Liegend austritt." },
      { name: "Klauen", beschreibung: "Nahkampf-Angriffswurf: +10 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 19 (3W8+6) Hiebschaden. Wenn das Ziel Riesig oder kleiner ist, erhält es den Zustand Gepackt (Entkommen SG 16). Solange das Packen anhält, kann das Schlund-Ungeziefer diese Klaue nicht gegen ein anderes Ziel einsetzen. Das Schlund-Ungeziefer hat drei Klauen." },
      { name: "Greifendes Maul", beschreibung: "Stärke-Rettungswurf: SG 18 für eine Mittelgroße oder kleinere Kreatur, die das Schlund-Ungeziefer innerhalb von 4,5 m sehen kann. Misserfolg: Das Ziel wird in ein freies Feld innerhalb von 1,5 m des Schlund-Ungeziefers gezogen." },
      { name: "Gallert-Kanone", beschreibung: "Das Schlund-Ungeziefer überzieht eine verschluckte Kreatur mit ätzender Gallerte und schleudert sie auf einen Punkt innerhalb von 36 m. Geschicklichkeits-Rettungswurf: SG 15 für jede Kreatur innerhalb von 3 m des Aufprallpunkts (die geschleuderte Kreatur scheitert automatisch). Misserfolg: 21 (6W6) Säureschaden, und das Ziel erhält den Zustand Brennend (4W6 Säure). Während des Zustands Brennend hat das Ziel außerdem den Zustand Festgehalten." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Schrott-Reautomata",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 17,
    ruestungstyp: null,
    tp: 55,
    tp_wuerfel: "10W8+10",
    bewegung: { "Gehen": "9 m", "Klettern": "6 m" },
    attribute: { STR: 19, DEX: 15, CON: 13, INT: 8, WIS: 7, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 8,
    sprachen: ["Versteht die Sprachen, die es zu Lebzeiten kannte, spricht aber nicht"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/schrott_reautomata.png",
    beschreibung: [
      "Dieser Untote wurde mit Schrottplatten und arkanem Gerät hastig aufgerüstet. Verrostete Waffen und willkürlich zusammengefügtes Metall wurden in seinen Körper eingearbeitet. Im Vergleich zu einer echten Reautomata ist die Ausführung grob und unfertig – doch auch dieser Schrottsodat ist zuverlässiger, widerstandsfähiger und gehorsamer als jeder normale Soldat.",
      "Die Erschaffung einer vollwertigen Reautomata ist zeitaufwendig und erfordert erstklassige Materialien. Der Schrott-Reautomata entsteht, wenn beides fehlt. Dr. Everett Freed erschuf die ersten Exemplare aus den Hausangestellten und Soldaten des Hauses von Fritz, indem er den Brunnen ihrer Burg vergiftete und die geschwächten Männer unter dem Vorwand der Heilung in Ungeheuer verwandelte. Der rohe Verfahren stützt sich stärker auf okkulte Nekromantie und lässt mehr des ursprünglichen Körpers erhalten – weshalb das Ergebnis Untoter ist, kein Konstrukt."
    ],
    besonderheiten: [
      { name: "Verbrennung", beschreibung: "Solange die Schrott-Reautomata die Brennend-Bedingung hat, beträgt ihre Bewegungsrate 15 Meter, und ihre Nahkampfwaffenangriffe verursachen zusätzlich 10 (3W6) Feuerschaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Schrott-Reautomata führt zwei Rostige Waffe-Angriffe aus." },
      { name: "Rostige Waffe", beschreibung: "Nahkampfangriff: +6 auf den Trefferwurf, Reichweite 1,5 m. Treffer: 11 (2W6+4) Hiebangriff." }
    ],
    bonusaktionen: [
      { name: "Zündung (Aufladen nach einer Kurzen Rast)", beschreibung: "Die Schrott-Reautomata zündet ihre eingebaute Verbrennungsmaschine und erhält die Brennend-Bedingung (2W6 Feuer). Diese aktiviert die Verbrennung-Eigenschaft und erhöht ihre Kampfkraft erheblich, auch wenn sie dabei selbst Schaden nimmt." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Schwarm kontaminierter Insekten",
    art: "Tier",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 1,
    xp: 200,
    rk: 12,
    ruestungstyp: null,
    tp: 22,
    tp_wuerfel: "5W8",
    bewegung: { "Fliegen": "6 m" },
    attribute: { STR: 3, DEX: 15, CON: 10, INT: 1, WIS: 7, CHA: 1 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Wucht", "Nekrotisch", "Stich", "Hieb"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Gepackt", "Gelähmt", "Versteinert", "Liegend", "Festgehalten", "Betäubt"],
    sinne: ["Blindsicht 3 m"],
    passiveWahrnehmung: 8,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/schwarm_kontaminierter_insekten.png",
    beschreibung: [
      "Ein Schwarm kontaminierter Insekten entsteht, wenn ein Aufgedunsener Bienenstock seinen Insektenschwarm herbeiruft oder beim Sterben freisetzt. Diese winzigen, von Delirium durchdrungenen Kreaturen überwältigen ihre Beute durch schiere Anzahl und hinterlassen bei jedem Biss kontaminierende Wunden."
    ],
    besonderheiten: [
      {
        name: "Schwarm",
        beschreibung: "Der Schwarm kann das Feld einer anderen Kreatur besetzen und umgekehrt, und kann sich durch jede Öffnung bewegen, die groß genug für ein winziges Insekt ist. Der Schwarm kann keine Trefferpunkte regenerieren oder temporäre Trefferpunkte erhalten."
      }
    ],
    aktionen: [
      {
        name: "Kontaminierter Biss",
        beschreibung: "Nahkampf-Angriffswurf: +4, Reichweite 0 m. Treffer: 10 (3W6) nekrotischer Schaden, oder 3 (1W6) nekrotischer Schaden, wenn der Schwarm den Zustand Verwundet hat. Konstitutions-Rettungswurf: SG 10. Misserfolg: Das Ziel erhält eine Kontaminationsstufe."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Seuchenträger",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 10,
    ruestungstyp: null,
    tp: 45,
    tp_wuerfel: "7W8+14",
    bewegung: { "Gehen": "6 m" },
    attribute: { STR: 10, DEX: 8, CON: 14, INT: 3, WIS: 11, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 10,
    sprachen: ["Versteht Gemein, spricht aber nicht"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/seuchentraeger.png",
    beschreibung: [
      "Diese entstellten und grauenerregenden Abscheulichkeiten waren einst Menschen, nun bedeckt mit Beulen und Geschwüren. Eiternde Wunden und große, blasenbedeckte Stellen überziehen ihr entblößtes Fleisch. In zerlumpte Kleidung gehüllt, ist ihr geschwollenes und sackendes Fleisch durchzogen von Krankheiten. Eiter sickert aus ihren Wunden, Augen, Ohren, Nasen und Mündern; sie stinken nach fauligen alchemistischen Wirkstoffen und Verwesung.",
      "Seuchenträger sind die unglückseligen Versuchspersonen von Pathogenisten, die ihre tödlichen Erreger in einem lebenden Gefäß inkubieren, um sie auf groteske Weise freizusetzen. Oft handelt es sich dabei um Patienten, die bereits krank zum wahnsinnigen Apotheker kamen und experimentellen Verfahren zustimmten, ohne das Kleingedruckte zu lesen. In diesem Prozess werden sie zu willenlosen Dienern reduziert.",
      "Der Pathogenist entsorgt seine gescheiterten Experimente nicht, sondern lässt sie vor sich hinfaulen. In seinem Wahnsinn kommt ihm schließlich ein kleiner, aber gefährlicher Gedanke: Was wäre, wenn ein einziger Seuchenträger in ein belebtes Gebiet geschickt würde? Die Liefermethode ist ein grausames Schauspiel – der Seuchenträger wird losgelassen und überflutet seine Umgebung mit den Krankheiten in seinem Inneren, wenn er stirbt."
    ],
    besonderheiten: [
      { name: "Seuchensymptome", beschreibung: "Der Seuchenträger beherbergt eine von einem Pathogenisten erschaffene Krankheit, gewählt aus den folgenden Optionen. Eine infizierte Kreatur ist zu Beginn jedes ihrer Züge folgendem Effekt ausgesetzt. Konstitutionsrettungswurf SG 13. Misserfolg: 18 (4W8) Nekrotischer Schaden, und das Ziel erleidet den Effekt der Krankheit. Bei drei Erfolgen endet die Krankheit. Hustenanfälle – Das Ziel kann bis zum Beginn seines nächsten Zuges nicht sprechen. Erschöpfung – Die Bewegungsrate des Ziels wird bis zum Beginn seines nächsten Zuges um 1,5 Meter verringert. Schüttelfrost – Das Ziel zittert unkontrollierbar. Jedes Mal, wenn es seinen Rettungswurf misslingt, lässt es alles fallen, was es hält." }
    ],
    aktionen: [
      { name: "Eiternder Biss", beschreibung: "Nahkampfangriff: +2 auf den Trefferwurf, Reichweite 1,5 m. Treffer: 4 (1W8) Stichschaden. Konstitutionsrettungswurf SG 13. Misserfolg: Das Ziel wird mit den Seuchensymptomen des Seuchenträgers infiziert." },
      { name: "Galleverteiler", beschreibung: "Konstitutionsrettungswurf SG 13 für jede Kreatur in einem 4,5-Meter-Kegel. Misserfolg: 9 (2W8) Nekrotischer Schaden, und das Ziel wird mit den Seuchensymptomen des Seuchenträgers infiziert. Erfolg: Nur halber Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Sirene der Tiefe",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Neutral böse",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 55,
    tp_wuerfel: "10W8+10",
    bewegung: { "Gehen": "9 m", "Schwimmen": "18 m" },
    attribute: { STR: 10, DEX: 17, CON: 13, INT: 15, WIS: 15, CHA: 18 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Kälte", "Blitz"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Gemeinsprache", "Telepathie 18 m"],
    umgebung: ["Gewässer", "Unterirdisch"],
    bild: "drakkenheim/sirene_der_tiefe.png",
    beschreibung: [
      "Sirenen der Tiefe sind die Verführerinnen und Manipulatorinnen unter den Elenden der Tiefe. Mit ihrer Fähigkeit, ein täuschend schönes Erscheinungsbild anzunehmen, locken sie Abenteurer, Händler und Soldaten in die überfluteten Ruinen, wo diese zu Beute der Elenden der Tiefe werden.",
      "Ihr disharmonischer Gesang ist kein lieblicher Klang mehr, sondern ein psychisch verstörendes Gebrüll, das Feinde in die Knie zwingt. Im Kampf flankieren sie Gegner und teleportieren sich mit ihrer Nebelschritt-Fähigkeit unentwegt neu, um maximalen Chaos zu stiften."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Die Sirene der Tiefe kann sowohl Luft als auch Wasser atmen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Sirene der Tiefe führt zwei Sturmgeißelangriffe aus." },
      { name: "Sturmgeißel", beschreibung: "Nahkampf-Angriffswurf: +7 zum Treffen, Reichweite 3 m. Treffer: 18 (4W8) Donnerschaden, und das Ziel wird bis zu 3 m von der Sirene weggestoßen." },
      { name: "Disharmonischer Gesang (Aufladen nach einer Kurzen oder Langen Rast)", beschreibung: "Die Sirene singt ein verstörendes Lied. Weisheits-Rettungswurf: SG 14 für jede Kreatur innerhalb von 9 m, die die Sirene hören kann. Misserfolg: 21 (6W6) Psychischen Schaden und der Zustand Verängstigt bis zum Ende des nächsten Zuges der Sirene. Erfolg: Nur halber Schaden." },
      { name: "Illusorisches Erscheinungsbild", beschreibung: "Die Sirene hüllt sich in eine magische Illusion, die ihr das Aussehen einer attraktiven humanoid wirkenden Kreatur verleiht. Die Illusion endet, wenn die Sirene die Aktion aufhebt oder stirbt. Nachforschung – Weisheits-Rettungswurf: SG 14 zum Erkennen der Illusion." },
      { name: "Zaubersprüche", beschreibung: "Die Sirene wirkt einen der folgenden Zauber, benötigt keine Materialkomponenten und verwendet Charisma als Zauberfähigkeit (Zauberrettungswurf-SG 14, +6 auf Zauberangriffe): Nach Belieben: Freunde, Magische Hand. 3/Tag: Person bezaubern, Phantasmale Kraft. 1/Tag: Hypnotisches Muster." }
    ],
    bonusaktionen: [
      { name: "Nebelschritt", beschreibung: "Die Sirene teleportiert sich in einen unbesetzten Bereich, den sie innerhalb von 9 m sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Silberorden-Kavalier",
    art: "Humanoid",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesetzlich gut",
    cr: 5,
    xp: 1800,
    rk: 19,
    ruestungstyp: "Lamellenpanzer mit Schild",
    tp: 90,
    tp_wuerfel: "12W8+36",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 18, DEX: 10, CON: 16, INT: 10, WIS: 12, CHA: 15 },
    rettungswuerfe: { WEI: 4, CHA: 5 },
    fertigkeiten: { "Tierführung": 4, "Athletik": 7, "Wahrnehmung": 4, "Überredung": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: [],
    passiveWahrnehmung: 14,
    sprachen: ["Gemeinsprache", "eine weitere Sprache"],
    umgebung: ["Stadt", "Ruinen"],
    bild: "drakkenheim/silberorden_kavalier.png",
    beschreibung: [
      "In schwerem Rüstzeug mit blauem, silbergesäumtem Umhang, verziert mit dem Symbol des Silberordens, trägt der Kavalier einen großen Helm mit blauem Federbusch und einen Köcher voll Wurfspeer.",
      "Die Kavaliere sind die Greif-Reiter des Silberordens, ausgebildet sowohl für den Bodenangriff als auch für den Luftkampf. Jeder Kavalier geht eine einzigartige Bindung mit einem Greif ein, den er durch göttliche Magie zu sich rufen kann. Diese Bindung hält oft ein Leben lang."
    ],
    besonderheiten: [
      {
        name: "Heilige Waffen",
        beschreibung: "Wenn der Kavalier mit einer Waffe trifft, verursacht die Waffe zusätzlich 9 (2W8) Strahlendschaden (im Angriff enthalten)."
      },
      {
        name: "Erfahrener Reiter",
        beschreibung: "Wenn der Kavalier beritten ist, kann er Angriffe, die sein Reittier zum Ziel haben, auf sich selbst umleiten."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Kavalier führt zwei Angriffe aus."
      },
      {
        name: "Lanze",
        beschreibung: "Nahkampfangriffswurf +7 (mit Nachteil gegen Ziele in 1,5 m), Reichweite 3 m. Treffer: 10 (1W12+4) Kraftschaden plus 9 (2W8) Strahlendschaden."
      },
      {
        name: "Wurfspeer",
        beschreibung: "Nahkampf- oder Fernkampfangriffswurf +7, Reichweite 1,5 m oder 9/36 m. Treffer: 7 (1W6+4) Kraftschaden plus 9 (2W8) Strahlendschaden."
      }
    ],
    bonusaktionen: [
      {
        name: "Reittier beschwören (1/Tag)",
        beschreibung: "Der Kavalier beschwört magisch einen Greif in einem unbesetzten Feld in 18 m, der seinen Befehlen gehorcht. Der Greif handelt unmittelbar vor oder nach dem Kavalier. Er bleibt bis zu seinem Tod oder dem des Kavaliers, oder bis der Kavalier ihn als Bonusaktion entlässt."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Silberorden-Knappe",
    art: "Humanoid",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesetzlich gut",
    cr: 1,
    xp: 200,
    rk: 16,
    ruestungstyp: "Verstärkte Lederrüstung mit Schild",
    tp: 22,
    tp_wuerfel: "4W8+4",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 15, DEX: 14, CON: 12, INT: 10, WIS: 15, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Stadt", "Ruinen"],
    bild: "drakkenheim/silberorden_knappe.png",
    beschreibung: [
      "In Leder gekleidet, mit Kurzschwert, Schild und Kurzbogen, trägt der junge Knappe einen kleinen Rucksack mit Ausrüstung zum Warten und Flicken von Rüstungen und Waffen, Greifpflege, Munition und anderen Notwendigkeiten.",
      "Knappen sind die Neurekruten des Silberordens. Sie werden oft einem Paladin zur Ausbildung zugeteilt. Obwohl sie im Kampf bestehen können, werden sie häufiger dazu eingesetzt, Rüstungen zu flicken, Waffen zu schärfen und die Greifen ihrer Paladine zu versorgen."
    ],
    besonderheiten: [
      {
        name: "Für die Flamme! (1/Tag)",
        beschreibung: "Der Knappe kann in seinem Zug eine zusätzliche Mehrfachangriff-Aktion ausführen."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Knappe führt zwei Angriffe aus."
      },
      {
        name: "Kurzschwert",
        beschreibung: "Nahkampfangriffswurf +4, Reichweite 1,5 m. Treffer: 5 (1W6+2) Stichschaden."
      },
      {
        name: "Kurzbogen",
        beschreibung: "Fernkampfangriffswurf +4, Reichweite 24/96 m. Treffer: 5 (1W6+2) Stichschaden."
      },
      {
        name: "Helfende Hand",
        beschreibung: "Der Knappe gewährt einer Kreatur in 1,5 m Tapferkeit (1W4) bis Ende des nächsten Zuges dieser Kreatur."
      }
    ],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Aufgepasst!",
        beschreibung: "Auslöser: Ein Verbündeter in 1,5 m des Knappen wird von einem Angriff getroffen. Reaktion – Der Knappe erleidet den Schaden des Angriffs stattdessen."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Silberorden-Paladin",
    art: "Humanoid",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesetzlich gut",
    cr: 4,
    xp: 1100,
    rk: 19,
    ruestungstyp: "Plattenpanzer",
    tp: 78,
    tp_wuerfel: "12W8+24",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 18, DEX: 10, CON: 15, INT: 10, WIS: 12, CHA: 16 },
    rettungswuerfe: {},
    fertigkeiten: { "Einsicht": 3, "Überredung": 5 },
    schadensresistenzen: ["Zauberschaden"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: [],
    passiveWahrnehmung: 11,
    sprachen: ["Gemeinsprache", "eine weitere Sprache"],
    umgebung: ["Stadt", "Ruinen"],
    bild: "drakkenheim/silberorden_paladin.png",
    beschreibung: [
      "In schwerem Rüstzeug mit blauem, silbergesäumtem Umhang, verziert mit dem Symbol des Silberordens, hält der Paladin einen großen Kite-Schild und einen leuchtenden Strahlungsstreitkolben.",
      "Die Ritter des Silberordens sind weltberühmt als Verteidiger des Glaubens der Heiligen Flamme. Sie nehmen heilige Questen und religiöse Missionen für die Göttliche Matriarchin an und sind dafür bekannt, auf Greifen in die Schlacht zu reiten oder mit Plattenrüstung, Schwert, Schild und göttlicher Magie auszurücken. Für manche sind diese Paladine göttliche Beschützer und edle Krieger des Glaubens."
    ],
    besonderheiten: [
      {
        name: "Heilige Waffen",
        beschreibung: "Wenn der Paladin mit einer Waffe trifft, verursacht die Waffe zusätzlich 9 (2W8) Strahlendschaden (im Angriff enthalten)."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Paladin führt zwei Angriffe aus."
      },
      {
        name: "Langschwert",
        beschreibung: "Nahkampfangriffswurf +6, Reichweite 1,5 m. Treffer: 8 (1W8+4) Kraftschaden plus 9 (2W8) Strahlendschaden, oder 9 (1W10+4) Kraftschaden plus 9 (2W8) Strahlendschaden wenn mit zwei Händen geführt."
      },
      {
        name: "Wurfspeer",
        beschreibung: "Nahkampf- oder Fernkampfangriffswurf +6, Reichweite 1,5 m oder 9/36 m. Treffer: 7 (1W6+4) Kraftschaden plus 9 (2W8) Strahlendschaden."
      }
    ],
    bonusaktionen: [
      {
        name: "Handauflegen (3/Tag)",
        beschreibung: "Der Paladin berührt eine andere Kreatur. Das Ziel regeneriert 11 (2W8+2) Trefferpunkte und wird von einer Krankheit oder dem Zustand Vergiftet befreit."
      }
    ],
    reaktionen: [
      {
        name: "Hexe abwehren (3/Tag)",
        beschreibung: "Auslöser: Eine Kreatur, die der Paladin in 18 m sehen kann, wirkt einen Zauber. Reaktion – Falls der Zauber Grad 3 oder niedriger ist, schlägt er fehl, aber es werden keine Ressourcen verbraucht."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Silberorden-Rekrut",
    art: "Humanoid",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesetzlich gut",
    cr: 3,
    xp: 700,
    rk: 18,
    ruestungstyp: "Brustpanzer mit Schild",
    tp: 60,
    tp_wuerfel: "8W8+24",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 16, DEX: 15, CON: 16, INT: 10, WIS: 15, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Stadt", "Ruinen"],
    bild: "drakkenheim/silberorden_rekrut.png",
    beschreibung: [
      "Diese einfachen Fußsoldaten bilden den Großteil der Bodentruppen des Silberordens. Mit guter Rüstung, Schild, Langschwert und den Emblemen des Silberordens ausgestattet, sind sie die erste Verteidigungslinie gegen übernatürliche Monster und magische Bedrohungen.",
      "Nach dem Abschluss der Knappen-Ausbildung ist ein Rekrut nun ein erfahrener Kämpfer, der einfache Missionen des Silberordens selbstständig ausführen kann. Er begleitet Paladine auf wichtigen Questen, bewacht Silberorden-Festungen und bildet die Vorhut der Armeen."
    ],
    besonderheiten: [
      {
        name: "Für die Flamme! (3/Tag)",
        beschreibung: "Der Rekrut kann in seinem Zug eine zusätzliche Mehrfachangriff-Aktion ausführen."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Rekrut führt zwei Angriffe aus und kann dabei Langschwert und Kurzbogen in beliebiger Kombination verwenden."
      },
      {
        name: "Langschwert",
        beschreibung: "Nahkampfangriffswurf +5, Reichweite 1,5 m. Treffer: 7 (1W8+3) Hiebschaden, oder 8 (1W10+3) Hiebschaden wenn mit zwei Händen geführt."
      },
      {
        name: "Kurzbogen",
        beschreibung: "Fernkampfangriffswurf +4, Reichweite 24/96 m. Treffer: 5 (1W6+2) Stichschaden."
      },
      {
        name: "Schildhieb",
        beschreibung: "Nahkampfangriffswurf +5, Reichweite 1,5 m. Treffer: Das Ziel wird 1,5 m vom Rekrut weggestoßen und erhält den Zustand Taumelnd (Rettungswurf beendet den Zustand)."
      }
    ],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Parieren",
        beschreibung: "Auslöser: Der Rekrut wird von einem Nahkampfangriff getroffen, während er eine Waffe hält. Reaktion – Der Rekrut addiert 2 zu seiner RK gegen diesen Angriff, was möglicherweise dazu führt, dass er verfehlt."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Skelettbogenschütze",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesetzlos böse",
    cr: 1,
    xp: 200,
    rk: 13,
    ruestungstyp: null,
    tp: 27,
    tp_wuerfel: "6W8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 10, DEX: 16, CON: 10, INT: 6, WIS: 8, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: ["Wucht"],
    zustandsimmunitaeten: ["Erschöpfung", "Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 9,
    sprachen: ["Versteht Gemein, kann aber nicht sprechen"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/skelettbogenschuetze.png",
    beschreibung: [
      "In den Armeen der Untoten benötigt man sowohl Nah- als auch Fernkämpfer als Rückgrat der Streitkräfte. Skelettbogenschützen sind mit Elementarmagie durchdrungen und erhalten Bögen, die die Kraft besitzen, ihre Feinde mit jedem Schuss zu frösteln.",
      "Aus den Augenöffnungen dieses Skeletts strahlt ein sanft blaues Licht. Es trägt einen aus Knochen und alten Sehnen gefertigten Bogen, und an der Pfeilspitze bilden sich Frostsplitter, während es zielt."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W6+3) Hiebschaden."
      },
      {
        name: "Froststahllangebogen",
        beschreibung: "Fernkampf-Angriffswurf: +5, Reichweite 45 m/180 m, ein Ziel. Treffer: 7 (1W8+3) Stichschaden plus 10 (3W6) Kälteschaden. Kritischer Treffer: Das Ziel erhält den Zustand Gefroren (SG 10)."
      }
    ],
    bonusaktionen: [
      {
        name: "Gezieltes Zielen",
        beschreibung: "Der Skelettbogenschütze gewährt sich selbst Vorteil auf seinen nächsten Fernkampf-Angriffswurf in diesem Zug. Er kann diese Bonusaktion nur verwenden, wenn er sich in diesem Zug noch nicht bewegt hat. Nach ihrer Verwendung wird seine Bewegungsrate 0 und kann bis zum Ende des Zuges nicht erhöht werden."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Skelettmagier",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesetzlos böse",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: null,
    tp: 45,
    tp_wuerfel: "10W8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 10, DEX: 15, CON: 10, INT: 14, WIS: 12, CHA: 17 },
    rettungswuerfe: {},
    fertigkeiten: { "Arkana": 4, "Wahrnehmung": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: ["Wucht"],
    zustandsimmunitaeten: ["Erschöpfung", "Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Versteht Gemein, kann aber nicht sprechen"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/skelettmagier.png",
    beschreibung: [
      "Die zerrissenen roten Roben dieses Skeletts verraten es als einen der gescheiterten Vasallen der Vampire. Donnernde Funken und Glutembers tanzen um seine knöchernen Fingerspitzen, während es seinen nächsten Zauber vorbereitet.",
      "Diese Magier waren oft frühere Vasallen, Akolythen oder arkane Gefangene von Vampirherren. Im Tod werden sie zu unheiligen Magiern verwandelt, die Elementarmagie gegen ihre Feinde einsetzen und ein ewiges Nachleben für die Vampire fristen, die sie erschufen."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Feuerlanze",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +5, Reichweite 1,5 m oder 36 m, ein Ziel. Treffer: 25 (4W10+3) Feuerschaden, und das Ziel erhält den Zustand Brennend (1W10 Feuer)."
      },
      {
        name: "Blitzbogen",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +5, Reichweite 1,5 m oder 9 m, ein Ziel. Treffer: 14 (2W10+3) Blitzschaden. Konstitutions-Rettungswurf: SG 13. Misserfolg: Das Ziel erhält den Zustand Schockiert (Rettungswurf zum Beenden)."
      },
      {
        name: "Donnerschlag (Aufladen 5–6)",
        beschreibung: "Konstitutions-Rettungswurf: SG 13 für jede Kreatur in einem 4,5-Meter-Würfel, der vom Skelettmagier ausgeht. Misserfolg: 13 (3W8) Donnerschaden, und das Ziel wird 3 m vom Skelettmagier weggestoßen. Erfolg: Nur halber Schaden."
      }
    ],
    bonusaktionen: [
      {
        name: "Teleportation",
        beschreibung: "Der Skelettmagier teleportiert sich in einen unbesetzten Raum, den er innerhalb von 18 m sehen kann."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Skelettsoldat",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesetzlos böse",
    cr: 1,
    xp: 200,
    rk: 15,
    ruestungstyp: "natürliche Rüstung und Schild",
    tp: 27,
    tp_wuerfel: "6W8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 16, DEX: 10, CON: 10, INT: 6, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: ["Wucht"],
    zustandsimmunitaeten: ["Erschöpfung", "Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Versteht Gemein, kann aber nicht sprechen"],
    umgebung: ["Ruinen", "Stadt", "Unterirdisch"],
    bild: "drakkenheim/skelettsoldat.png",
    beschreibung: [
      "Dieser robuste Skelettkrieger ist mit Schlamm und Moos bedeckt. Er trägt eine Schädelkappe, eine einzelne Schulterplatte und hält ein dickes verrostetes Schild mit dem arkanen Siegel des Hauses von Drakken. In einer Hand trägt er einen langen, vergifteten Speer.",
      "Die meisten Leichen auf dem Kontinent werden eingeäschert — Vampire müssen bei der Beschaffung von Dienern für ihre Armeen clever vorgehen. Überall gibt es alte Krypten heroischer Krieger und göttlicher Soldaten. Manchmal infiltrieren Vampirherren verlassene heilige Stätten und alte Krypten, um die Toten zu stehlen und sie als Skelettsoldaten zu erwecken. Außerdem halten sie oft Gefangene in ihren eigenen Verliesen, um sich von ihnen zu ernähren und die Leichen nach deren Tod eines Tages als Soldaten auferstehen zu lassen."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Vergifteter Speer",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +5, Reichweite 1,5 m oder 6 m/18 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden plus 10 (3W6) Giftschaden."
      }
    ],
    bonusaktionen: [
      {
        name: "Schildhieb",
        beschreibung: "Stärke-Rettungswurf: SG 13, eine Kreatur innerhalb von 1,5 m des Skelettsoldat. Misserfolg: Das Ziel wird 1,5 m vom Skelettsoldat weggestoßen und erhält den Zustand Liegend."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Stacheliger Elender",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 1,
    xp: 200,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 27,
    tp_wuerfel: "6W8",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m" },
    attribute: { STR: 11, DEX: 19, CON: 10, INT: 12, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/stacheliger_elender.png",
    beschreibung: [
      "Lange Widerhaken aus überwuchertem Knochen und verkrusteten Delirium-Splittern brechen aus dem ausgemergelten Körper dieses Elenden hervor und bedecken seinen Rücken sowie die dürren Gliedmaßen. Die Wangenknochen durchstoßen das Fleisch des hageren Gesichts, und die oktarinfarbenen Augen schimmern in einem unnatürlichen Leuchten. Die verlängerten Finger und Zehen enden gleichermaßen in scharfen, langen Spitzen.",
      "Die Kontamination hat verheerende Spuren am Skelettsystem dieser Elenden hinterlassen und zwingt gezackte Widerhaken dazu, aus dem Fleisch auszubrechen. Diese können sie von ihren Körpern schleudern oder als Sporne beim Klettern nutzen. Aufgrund ihrer Beweglichkeit und ihrer natürlichen Klettergeschwindigkeit bevorzugen Stachelige Elende erhöhte Positionen auf niedrigen Dächern oder in den oberen Etagen zerstörter Gebäude."
    ],
    besonderheiten: [
      {
        name: "Spinnenkletter",
        beschreibung: "Der Elende kann an schwierigen Oberflächen klettern, einschließlich Decken, ohne einen Fähigkeitswurf ablegen zu müssen."
      },
      {
        name: "Stachliger Körper",
        beschreibung: "Jede Kreatur, die den Elenden packt oder von ihm gepackt wird, erleidet am Ende ihres Zuges 5 (1W10) Stichschaden."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Stachelige Elende führt drei Stachel-Angriffe aus."
      },
      {
        name: "Stachel",
        beschreibung: "Nahkampf- oder Fernkampf-Angriffswurf: +6, Reichweite 1,5 m oder Reichweite 6/18 m. Treffer: 6 (1W4 + 4) Stichschaden plus 7 (2W6) nekrotischer Schaden. Kritischer Treffer: Konstitutions-Rettungswurf: SG 10. Misserfolg: Das Ziel erhält eine Kontaminationsstufe."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Sternenwächter",
    art: "Aberration",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Neutral",
    cr: 10,
    xp: 5900,
    rk: 15,
    ruestungstyp: null,
    tp: 189,
    tp_wuerfel: "18W12+72",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 19, DEX: 15, CON: 18, INT: 20, WIS: 18, CHA: 15 },
    rettungswuerfe: { INT: 9, WEI: 8, CHA: 6 },
    fertigkeiten: { "Arkane Kunde": 9, "Geschichte": 9, "Wahrnehmung": 12 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Wahre Sicht 36 m"],
    passiveWahrnehmung: 22,
    sprachen: ["Alle", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/sternenwaechter.png",
    beschreibung: [
      "Eine mächtige, drei Meter große Kreatur steht vor dir, in zerfetztes und zerrissenes Tuch gehüllt. Das Tuch bedeckt ihre Form bis auf vier knorrige, dürre graue Arme. Ihre verdrehten Hände enden in vier langen Fingern und umklammern einen Holzstab, der mit kosmischer Energie funkelt. Darunter ragen zwei spinnenartige Beine hervor. Die gewölbte Form stützt sich auf den Stab, und die massige Kopfbedeckung birgt windende Tentakel, die herausragen und tastend die Umgebung erkunden.",
      "Die Sternenwächter sind uralte Kreaturen, die seit Jahrhunderten den Kosmos durchstreifen. Sie kümmern sich wenig um die Querelen der verschiedenen Realitäten oder die Bedeutung eines Sterblichenlebens. Sie sind ewige Wesen, die außerhalb von Raum und Zeit existieren – für sie sind Relativität und Dimensionen brechbare Konzepte.",
      "Den wenigen, die einen Sternenwächter erblickt haben, trieb die schiere Unbegreiflichkeit seiner Existenz in den Wahnsinn. Ein Akademiemage, der den Zwischenraum über Traumlande betrat, berichtete, denselben Sternenwächter an mehreren Punkten seines Lebens gesprochen zu haben. Aus Sicht des Sternenwächters war es ein einziges Ereignis, das sich für den Sterblichen über 50 Jahre erstreckte.",
      "Sternenwächter hüten den Kosmos und beobachten den Fluss von Raum und Zeit. Sie betrachten die Realität als Wellenlänge interdimensionaler Stränge und sorgen dafür, dass keine katastrophalen Ereignisse das Universum zum Kollaps bringen."
    ],
    besonderheiten: [
      {
        name: "Aberrante Eigenschaften",
        beschreibung: "Der Sternenwächter besitzt die in der Seitenleiste 'Aberrante Eigenschaften' beschriebenen Merkmale."
      },
      {
        name: "Kosmische Aura",
        beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 m des Sternenwächters beginnt, unterliegt folgendem Effekt. Charisma-Rettungswurf SG 17. Fehlschlag: Das Ziel wird durch Zeit und Raum geschleudert und erlebt jeden Moment der Existenz in einer Sekunde. Es erleidet 17 (5W6) psychischen Schaden und wird zu einem unbesetzten Feld teleportiert, das es in 9 m sehen kann."
      },
      {
        name: "Herren von Zeit und Raum",
        beschreibung: "Wenn der Sternenwächter auf 0 Trefferpunkte reduziert wird, würfelt er einen W20. Bei einem Ergebnis von 1 oder 20 regeneriert der Sternenwächter alle seine Trefferpunkte, und eine andere Kreatur seiner Wahl in 9 m wird stattdessen auf 0 Trefferpunkte reduziert."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Sternenwächter führt zwei Angriffe aus."
      },
      {
        name: "Sternenstab",
        beschreibung: "Nahkampf- oder Fernkampfangriffswurf +8, Reichweite 1,5 m oder 18/36 m. Treffer: 22 (5W6+4) Strahlendschaden plus 10 (3W6) Kraftschaden."
      },
      {
        name: "Nebelarmer Griff",
        beschreibung: "Nahkampfangriffswurf +8, Reichweite 1,5 m. Treffer: 27 (5W8+4) Stichschaden, und der Sternenwächter kann das Ziel zu einem unbesetzten Feld teleportieren, das er in 36 m sehen kann."
      },
      {
        name: "Sternstaub",
        beschreibung: "Geschicklichkeits-Rettungswurf SG 17, jede Kreatur in einem 9 m Kegel. Fehlschlag: 18 (4W6+4) Strahlendschaden, und das Ziel erhält den Zustand Brennend (4W6 Strahlendschaden). Erfolg: Halber Schaden."
      }
    ],
    bonusaktionen: [
      {
        name: "Die Leere des Alls",
        beschreibung: "Konstitutions-Rettungswurf SG 17, eine Kreatur in 36 m, die in diesem Zug teleportiert wurde. Fehlschlag: Das Ziel erhält den Zustand Eingefroren. Erfolg: 10 (3W6) Kälteschaden."
      }
    ],
    reaktionen: [
      {
        name: "Jenseits von Zeit und Raum",
        beschreibung: "Auslöser: Eine Kreatur trifft den Sternenwächter mit einem Angriff. Reaktion – Der Sternenwächter tauscht die Plätze mit einer anderen Kreatur in 9 m, und der Angriff trifft stattdessen diese Kreatur."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Striga",
    art: "Untoter",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 11,
    xp: 7200,
    rk: 17,
    ruestungstyp: null,
    tp: 57,
    tp_wuerfel: "6W10+24",
    bewegung: { "Gehen": "12 m", "Fliegen": "18 m" },
    attribute: { STR: 23, DEX: 15, CON: 16, INT: 6, WIS: 17, CHA: 13 },
    rettungswuerfe: { GES: 6, KON: 7, WEI: 7 },
    fertigkeiten: { "Wahrnehmung": 7, "Heimlichkeit": 6 },
    schadensresistenzen: ["Kälte", "Nekrotisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 17,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/striga.png",
    beschreibung: [
      "Eine Striga ist eine kontaminierte Untote-Missgeburt, die entsteht, wenn ein echter Vampir oder eine Vampirbrut unter den richtigen Umständen der eldritschen Kontamination erliegt – meist durch eine arkane Anomalie, eine Exposition gegenüber Delirium während der Transformation oder durch das Trinken des Blutes einer mächtigen kontaminierten Kreatur.",
      "Weitaus mächtiger als ein Dunstblut-Vampir, ist eine Striga vollkommen wahnsinnig. Allerdings kann eine Striga ihre monströse Kontamination umkehren, indem sie das Blut einer Kreatur trinkt, die kürzlich Ziel eines Kontaminationsreinigungs-Zaubers war.",
      "Trefferpunkte: 57 (6W10+24) plus 57 (6W10+24) für jeden Spielercharakter in der Begegnung."
    ],
    besonderheiten: [
      {
        name: "Blutrausch",
        beschreibung: "Die Striga hat Vorteil auf Nahkampf-Angriffswürfe gegen eine Kreatur mit dem Zustand Angeschlagen."
      },
      {
        name: "Vollständig Kontaminiert",
        beschreibung: "Die Striga ist immun gegen Kontamination und hat Vorteil auf Rettungswürfe gegen kontaminierte Zauber. Sie kann kontaminierte Zauber wirken, ohne dabei Kontaminationsstufen zu erlangen."
      },
      {
        name: "Nekrotische Aura",
        beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 9 m der Striga beginnt, erleidet 10 (3W6) Nekrotischen Schaden."
      },
      {
        name: "Regeneration",
        beschreibung: "Die Striga regeneriert zu Beginn jedes ihrer Züge 10 Trefferpunkte, sofern sie mindestens 1 Trefferpunkt hat und sich nicht im Sonnenlicht oder in fließendem Wasser befindet. Erleidet sie Strahlungsschaden oder Schaden durch Weihwasser, setzt diese Regeneration bis zum Beginn ihres nächsten Zuges aus."
      },
      {
        name: "Spinnenklettern",
        beschreibung: "Die Striga kann schwierige Oberflächen erklimmen, einschließlich kopfüber an Decken, ohne einen Fertigkeitswurf ablegen zu müssen."
      },
      {
        name: "Vampirschwächen",
        beschreibung: "Die Striga hat folgende Schwächen: Fließendes Wasser – Sie erleidet 20 Säureschaden, wenn sie ihren Zug in fließendem Wasser endet. Sonnenlicht – Sie hat Nachteil auf Angriffswürfe und Weisheitswürfe (Wahrnehmung), während sie im Sonnenlicht steht, und erleidet 20 Strahlungsschaden, wenn sie ihren Zug im Sonnenlicht endet."
      }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [
      {
        name: "Vergeltung",
        beschreibung: "Auslöser: Eine Kreatur innerhalb von 4,5 m der Striga verursacht Strahlungsschaden an ihr. Reaktion: Die Striga führt einen Klauen-Angriff gegen diese Kreatur aus."
      }
    ],
    legendaere_aktionen: [
      { name: "Epische Aktionen", beschreibung: "Die Striga handelt immer bei Initiative 20. In ihrem Zug kann sie sich wie gewohnt bewegen und eine Interaktion durchführen. Sie führt jedoch keine Aktion oder Bonusaktion in ihrem Zug aus, es sei denn, sie wird durch einen Zauber oder einen anderen Effekt dazu gezwungen. Stattdessen führt die Striga am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus." },
      { name: "Nekrotischer Biss (1/Runde)", beschreibung: "Nahkampf-Angriffswurf: +10, Reichweite 3 m, ein Ziel. Treffer: 24 (4W8+6) Nekrotischer Schaden. Das Trefferpunktmaximum des Ziels wird um den verursachten nekrotischen Schaden reduziert, und die Striga regeneriert Trefferpunkte in gleicher Höhe." },
      { name: "Klauen", beschreibung: "Nahkampf-Angriffswurf: +10, Reichweite 4,5 m, ein Ziel. Treffer: 24 (4W8+6) Hiebschaden." },
      { name: "Delirium-Heilung", beschreibung: "Die Striga berührt einen Delirium-Splitter und regeneriert 10 (3W6) Trefferpunkte. Nachdem die Striga einen Delirium-Splitter auf diese Weise verwendet hat, kann sie ihn für 24 Stunden nicht erneut auf diese Weise nutzen." },
      { name: "Blutgeheul (1/Runde)", beschreibung: "Weisheits-Rettungswurf: SG 18 für jede Kreatur in einer 9-Meter-Ausstrahlung der Striga, die sie hören kann. Misserfolg: 35 (10W6) Psychischer Schaden, und das Ziel erhält die Zustände Verhext (1W6) und Bewegungsunfähig (Rettungswurf zum Beenden beider Zustände). Erfolg: Nur halber Schaden, und das Ziel ist für 24 Stunden immun gegen das Blutgeheul der Striga." },
      { name: "Ansturm", beschreibung: "Die Striga bewegt sich bis zu 12 m in einer geraden Linie und zieht dabei durch die Felder anderer Kreaturen. Jede Kreatur, deren Feld die Striga durchquert, ist folgendem Effekt ausgesetzt. Geschicklichkeits-Rettungswurf: SG 18. Misserfolg: Das Ziel wird 3 m von der Striga weggestoßen und erhält den Zustand Liegend." },
      { name: "Epische Resistenz", beschreibung: "Die Striga wählt einen Zustand, einen Zauber oder einen anderen Effekt, der sie gerade betrifft, und würfelt 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihr. Die Striga kann diese Aktion verwenden, selbst wenn sie anderweitig keine Aktionen durchführen kann, ihre Aktionen von einer anderen Kreatur kontrolliert werden oder ein Zauber oder Effekt ihre Spielwerte verändert." }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Sturmdunst-Harpyie-Jägerin",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 1,
    xp: 200,
    rk: 16,
    ruestungstyp: "Genietetes Leder",
    tp: 22,
    tp_wuerfel: "4W8+4",
    bewegung: { "Gehen": "6 m", "Fliegen": "12 m" },
    attribute: { STR: 13, DEX: 17, CON: 12, INT: 10, WIS: 15, CHA: 13 },
    rettungswuerfe: {},
    fertigkeiten: { "Akrobatik": 5, "Wahrnehmung": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/sturmdunst_harpyie_jaegerin.png",
    beschreibung: [
      "Diese mutierte Kreatur ähnelt einem Menschen, der mit einem Raubvogel gekreuzt wurde. Ihre gewaltigen Flügel enden in klauenartige Hände, ihre Vogelbeine enden in Klauen, und sie tragen ihre Waffen in den Talon-Füßen, während sie sich in die Lüfte erheben.",
      "Die typische Sturmdunst-Harpyie-Jägerin ist eine geschickte Flugkämpferin, die auf hoher Geschwindigkeit fliegen und dabei tödlich genau mit ihrem Bogen zielen kann. Sie verbringt ihre Tage damit, über die Stadtstraßen zu kreisen und sich ihre Beute von unten auszusuchen. Obwohl sie durchaus von Rattlings leben können, werden sie von der Ausrüstung und den Schätzen angezogen, die Erkundende und Fraktionsagenten mit sich führen."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Harpyie führt zwei Angriffe aus." },
      { name: "Klauen", beschreibung: "Nahkampf-Angriffswurf: +5 zum Treffen, Reichweite 1,5 m. Treffer: 5 (1W4+3) Stichschaden." },
      { name: "Langbogen", beschreibung: "Fernkampf-Angriffswurf: +5 zum Treffen, Reichweite 45 m/180 m. Treffer: 7 (1W8+3) Stichschaden." }
    ],
    bonusaktionen: [
      { name: "Luftmanöver", beschreibung: "Die Harpyie führt die Aktion Rennen oder Ausweichen aus." }
    ],
    reaktionen: [
      { name: "Chor", beschreibung: "Auslöser: Die Harpyie befindet sich im Wirkungsbereich des Liedes einer anderen Harpyie. Reaktion – Die Harpyie stimmt in das Lied ein und wählt eine Kreatur innerhalb von 9 m. Das Ziel hat Nachteil auf seinen nächsten Rettungswurf gegen das Lied." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Sturmdunst-Harpyie-Walküre",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 5,
    xp: 1800,
    rk: 18,
    ruestungstyp: "Halbplatte und Schild",
    tp: 84,
    tp_wuerfel: "13W8+26",
    bewegung: { "Gehen": "9 m", "Fliegen": "12 m" },
    attribute: { STR: 17, DEX: 19, CON: 14, INT: 11, WIS: 15, CHA: 13 },
    rettungswuerfe: { GES: 7, KON: 5 },
    fertigkeiten: { "Akrobatik": 7, "Athletik": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/sturmdunst_harpyie_walkuere.png",
    beschreibung: [
      "Geschmückt in glitzernder Halbplatte, mit Schilden und Wurfspießen bewaffnet, starren diese Elitekriegerinnen mit blutunterlaufenen Augen unter befiederten Helmen unverwandt vor sich hin. Ihr Unterkörper ist frei, damit ihre Klauen greifen und an Feinden reißen können.",
      "Walküren sind die besten Kämpferinnen unter den Sturmdunst-Harpyien. Sie haben Schlachten überstanden und ihre Kampffähigkeiten verfeinert. Sie locken Feinde gerne auf erhöhte Positionen – Dächer, Klippen oder Balkone – und heben sie dann auf, um sie in den Tod zu stürzen. Wer nicht fliegen kann, sieht sich stets mit der brutalen Realität des Sturztodes konfrontiert."
    ],
    besonderheiten: [
      { name: "Greifangriff", beschreibung: "Die Walküre muss keine zusätzliche Bewegung aufwenden, um eine von ihr gepackte Mittelgroße oder kleinere Kreatur mit sich zu ziehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Harpyie führt drei Angriffe aus." },
      { name: "Packende Klauen", beschreibung: "Nahkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m. Treffer: 5 (1W4+3) Stichschaden. Wenn das Ziel Mittelgroß oder kleiner ist, erhält es den Zustand Gepackt (Entkommen SG 15). Bis das Packen endet, kann die Walküre die Packenden Klauen nicht gegen ein anderes Ziel einsetzen." },
      { name: "Widerhaken-Wurfspeer", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +7 zum Treffen, Reichweite 1,5 m, oder Fernkampf 9 m/18 m. Treffer: 8 (1W8+4) Stichschaden plus 10 (3W6) Blitzschaden." }
    ],
    bonusaktionen: [
      { name: "Luftmanöver", beschreibung: "Die Harpyie führt die Aktion Rennen oder Ausweichen aus." }
    ],
    reaktionen: [
      { name: "Chor", beschreibung: "Auslöser: Die Harpyie befindet sich im Wirkungsbereich des Liedes einer anderen Harpyie. Reaktion – Die Harpyie stimmt in das Lied ein und wählt eine Kreatur innerhalb von 9 m. Das Ziel hat Nachteil auf seinen nächsten Rettungswurf gegen das Lied." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Sturmdunst-Harpyie-Weise",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 6,
    xp: 2300,
    rk: 15,
    ruestungstyp: null,
    tp: 90,
    tp_wuerfel: "12W8+36",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m" },
    attribute: { STR: 12, DEX: 17, CON: 17, INT: 15, WIS: 17, CHA: 19 },
    rettungswuerfe: { INT: 5, WEI: 6, CHA: 7 },
    fertigkeiten: { "Arkane Kunde": 5, "Wahrnehmung": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/sturmdunst_harpyie_weise.png",
    beschreibung: [
      "Die Weise hockt auf einem Vorsprung, ihre eleganten Flügel entfalten sich und enthüllen eine gewaltige Spannweite von fast vier Metern, die in leuchtendem Grün, Blau, Violett und Gold schimmert. Ihr langer Hals trägt ein verzerrtes Gesicht mit Hakennase, spitzem Kinn und einem zu breiten Grinsen mit zu scharfen Zähnen. Geschmückt mit Federn-Halsketten, Ohrringen und einer Krone aus goldenem Efeu, singt sie einen Chor verstörender Noten.",
      "Sturmdunst-Harpyien-Weise sind die Ältesten ihrer Gemeinschaften. Ihre Lieder erzählen von Generationen der Schlachten, Triumphe und Sorgen ihrer Brut. Harpyien betrachten sie als Orakel und Seherinnen. Für jene, die den Harpyien drohen, stehen die Weisen als Leuchtfeuer der Macht – ihre Stimmen füllen Sterbliche mit Grauen und dem Vorgefühl des Untergangs."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Klauen", beschreibung: "Nahkampf-Angriffswurf: +6 zum Treffen, Reichweite 1,5 m. Treffer: 5 (1W4+3) Stichschaden." },
      { name: "Lieder der Weisen", beschreibung: "Die Harpyie singt eine magische Melodie in einer 18-Meter-Ausstrahlung und wählt einen der folgenden Effekte. Verbündete der Weisen sind nicht betroffen. Todesbruch-Hymne – Jede Kreatur in der Ausstrahlung, die die Harpyie hören kann, hat Verwundbarkeit gegen Wuchtschaden durch Stürzen bis zum Beginn des nächsten Zuges der Harpyie. Entwaffnende Melodie – Charisma-Rettungswurf: SG 15 für jede Kreatur in der Ausstrahlung, die die Harpyie hören kann. Misserfolg: Das Ziel erhält den Zustand Geschwächt bis zum Beginn des nächsten Zuges der Harpyie. Bezaubernde Melodie – Weisheits-Rettungswurf: SG 15 für jede Kreatur in der Ausstrahlung, die die Harpyie hören kann. Misserfolg: 7 (2W6) Psychischen Schaden und der Zustand Verlangsamt bis zum Beginn des nächsten Zuges der Harpyie. Durchdringende Töne – Konstitutions-Rettungswurf: SG 15 für jede Kreatur in der Ausstrahlung, die die Harpyie hören kann. Misserfolg: 21 (6W6) Donnerschaden. Erfolg: Nur halber Schaden." }
    ],
    bonusaktionen: [
      { name: "Luftmanöver", beschreibung: "Die Harpyie führt die Aktion Rennen oder Ausweichen aus." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Sturmtroll",
    art: "Riese",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 7,
    xp: 2900,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 105,
    tp_wuerfel: "10W10+50",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 18, DEX: 13, CON: 20, INT: 7, WIS: 11, CHA: 6 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Blitz", "Donner"],
    verwundbarkeiten: ["Säure"],
    zustandsimmunitaeten: ["Schockiert"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Riesisch"],
    umgebung: ["Gebirge", "Küste", "Gewässer"],
    bild: "drakkenheim/sturmtroll.png",
    beschreibung: [
      "Seine graue und weiße Haut spannt sich straff über seine muskulöse Gestalt. Der weit aufgesperrte Mund zeigt Reihen zackiger Zähne unter kleinen, stürmischen blauschwarzen Augen, die in der Mitte seines großen kahlen Kopfes sitzen. Elektrische Ströme pulsieren durch seinen Körper, und seine Venen leuchten elektrisch-blau wie ein Netz von Blitzen unter der Haut.",
      "Sturmtrolle können überall dort gefunden werden, wo Stürme häufig sind – in den Rosteisenmountains, entlang der Küste in den Östlichen Tälern nahe Port Brynor, oder entlang der Kristallküste. Sturmtrolle gedeihen in tobenden Unwettern und halten oft Winterschlaf während sonniger Perioden. Sie sind äußerst empfindlich für Wetterveränderungen und verlassen ihre Höhlen, wenn sich der Wind dreht – sie spüren einen herannahenden Sturm ein bis zwei Tage im Voraus.",
      "Wenn ein Sturmtroll Säureschaden erleidet, flieht er sofort und versucht, einen sicheren Ort zur Erholung zu finden."
    ],
    besonderheiten: [
      {
        name: "Regeneration",
        beschreibung: "Der Troll regeneriert zu Beginn jedes seiner Züge 10 Trefferpunkte. Erleidet er Säureschaden, setzt diese Regeneration bis zum Beginn seines nächsten Zuges aus. Der Troll stirbt nur, wenn er seinen Zug mit 0 Trefferpunkten beginnt und sich nicht regeneriert."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Der Troll führt zwei Klauenmangriffe und einen Bissangriff durch. Er kann den Biss durch Blitz schleudern ersetzen, sofern verfügbar."
      },
      {
        name: "Biss",
        beschreibung: "Nahkampf-Angriffswurf: +7, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W6+4) Stichschaden plus 9 (2W8) Donnerschaden. Das Ziel erhält den Zustand Erschüttert bis zum Ende des nächsten Zuges des Trolls."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +7, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Hiebschaden plus 9 (2W8) Blitzschaden. Der Blitz springt vom Ziel auf eine zweite Kreatur nach Wahl des Trolls, die er innerhalb von 3 m des Ziels sehen kann. Die zweite Kreatur erleidet 18 (4W8) Blitzschaden."
      },
      {
        name: "Blitz schleudern (Aufladen 5–6)",
        beschreibung: "Der Troll schleudert einen magischen Blitzstrahl auf einen Punkt, den er innerhalb von 90 m sehen kann. Geschicklichkeits-Rettungswurf: SG 16 für jede Kreatur in einer Kugel mit 3 m Radius um diesen Punkt. Misserfolg: 18 (4W8) Blitzschaden, und das Ziel erhält den Zustand Schockiert bis zum Ende des nächsten Zuges des Trolls. Erfolg: Nur halber Schaden."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Tanker",
    art: "Konstrukt",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 17,
    ruestungstyp: null,
    tp: 95,
    tp_wuerfel: "10W10+40",
    bewegung: { "Gehen": "6 m" },
    attribute: { STR: 19, DEX: 8, CON: 18, INT: 6, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Säure", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Brennend (nur durch Säure)", "Verängstigt", "Vergiftet"],
    sinne: ["Blindsicht 9 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Versteht die Sprachen seines Schöpfers, spricht aber nicht"],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/tanker.png",
    beschreibung: [
      "Eine massige Abscheulichkeit aus korrodiertem Stahl und blassem Fleisch. Eine Gasmaske bedeckt ihr Gesicht, fest angeschnallt und in den Schädel verschraubt. Die Kreatur beugt sich über eine riesige Chemikalienflasche, die ihren Bauch bildet. Schläuche und Rohre spreizen sich vom Tank wie verschüttete Eingeweide und verbinden den Behälter mit Wirbelsäule und Gliedmaßen des Ungetüms. Die pumpenden Schläuche weben durch seinen Körper und enden in großen metallischen Düsen, die seine Hände ersetzt haben. Ein verwirrendes Geflecht von widerlichen Chemikaliengerüchen dringt aus ihm heraus – die verschiedenen Gerüche reizen die Sinne und brennen in Augen und Nasenschleimhaut.",
      "Der Tanker ist der bevorzugte Laborassistent von Chemikern und Pathogenisten. Er ist ein Konstrukt aus einer menschlichen Leiche, das als wandelndes Fass mit alchemistischen Reagenzien fungiert. Ursprünglich dazu gedacht, gemischte chemische Verbindungen in großen Mengen von einem Behälter in einen anderen zu transportieren, kann der Tanker auch tödlich sein: Er ist mit massiven Schläuchen ausgestattet, die Klumpen seiner Substanzen auf Ziele schleudern können, sowie mit einem Ausstoß toxischer Flüssigkeiten."
    ],
    besonderheiten: [
      { name: "Chemischer Gestank", beschreibung: "Eine Kreatur, die kein Konstrukt oder Untoter ist und ihren Zug innerhalb von 3 Metern des Tankers beginnt, ist folgendem Effekt ausgesetzt. Konstitutionsrettungswurf SG 15. Misserfolg: Das Ziel erhält die Erkrankt-Bedingung bis zum Beginn seines nächsten Zuges. Erfolg: Das Ziel ist für 1 Stunde immun gegen den Chemischen Gestank aller Tanker." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Tanker führt zwei Schlag- oder Chemischer Klumpen-Angriffe aus." },
      { name: "Schlag", beschreibung: "Nahkampfangriff: +7 auf den Trefferwurf, Reichweite 3 m. Treffer: 13 (2W8+4) Wuchtschaden." },
      { name: "Chemischer Klumpen", beschreibung: "Fernkampfangriff: +7 auf den Trefferwurf, Reichweite 18 m / 36 m. Treffer: 14 (4W6) Säure-, Kälte- oder Giftschaden (Wahl des Tankers)." },
      { name: "Chemischer Sprüh (Aufladen 5–6)", beschreibung: "Jede Kreatur in einem 9-Meter-Kegel ist einem der folgenden Effekte ausgesetzt (Wahl des Tankers). Schwefelsäure – Geschicklichkeitsrettungswurf SG 15. Misserfolg: 25 (10W4) Säureschaden, und das Ziel erhält die Brennend-Bedingung (4W4 Säure). Erfolg: Nur halber Schaden. Flüssiger Stickstoff – Konstitutionsrettungswurf SG 15. Misserfolg: 18 (4W8) Kälteschaden, und das Ziel erhält die Gefroren-Bedingung (Konstitutions-Rettungswurf SG 14 am Ende des Zuges beendet sie). Erfolg: Nur halber Schaden. Chlorgas – Konstitutionsrettungswurf SG 15. Misserfolg: 14 (4W6) Giftschaden, und das Ziel erhält die Vergiftet-Bedingung (Rettungswurf beendet sie). Solange das Ziel vergiftet ist, hat es die Geblendet-Bedingung. Erfolg: Nur halber Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Tentakel-Elender",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 2,
    xp: 450,
    rk: 13,
    ruestungstyp: null,
    tp: 27,
    tp_wuerfel: "6W8",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m", "Schwimmen": "12 m" },
    attribute: { STR: 17, DEX: 15, CON: 10, INT: 12, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt", "Gewässer"],
    bild: "drakkenheim/tentakel-elender.png",
    beschreibung: [
      "Wo die Arme der Kreatur sein sollten, winden sich stattdessen zwei zuckende Massen tiefvioletter Tentakel, während vier weitere aus ihrem Rücken hervorragen. Die Zunge hängt als langes, nasses, violettes Anhängsel heraus. Über den gesamten Körper öffnen sich weinende Wunden, aus denen kleinere Tentakel und Auswüchse hervorragen. Die Haut des Elenden wirkt nass und schlaff, und er bewegt sich mit einem merkwürdigen Wackeln, während er auf euch zuschlurft.",
      "In Drakkenheim scheinen Tentakel eine der häufigsten Mutationen zu sein. Akademieforscher konnten keinen spezifischen Grund dafür ermitteln, warum Tentakel eine so beständige Mutationsform darstellen. Theorien postulieren, dass der Dunst und die Kontamination ihren Ursprung in einer fernen, wässrigen Existenzebene haben, oder dass die Kreaturen, die im Dunst am besten überleben können, Tentakel nutzen, um sich leichter fortzubewegen. Was auch immer der Grund, Tentakel-Elende sind in den Ruinen Drakkenheims durchaus verbreitet."
    ],
    besonderheiten: [
      {
        name: "Formbar",
        beschreibung: "Der Elende kann sich durch einen Spalt bewegen, der nur etwa 15 cm breit ist, ohne dabei zusätzliche Bewegung aufwenden zu müssen."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Tentakel-Elende führt zwei Tentakelschlag-Angriffe aus."
      },
      {
        name: "Tentakelschlag",
        beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 4,5 m. Treffer: 10 (2W6 + 3) Wuchtschaden."
      },
      {
        name: "Einschnürender Tentakel",
        beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 4,5 m. Treffer: 10 (2W6 + 3) Wuchtschaden plus 7 (2W6) nekrotischer Schaden. Wenn das Ziel eine Große oder kleinere Kreatur ist, erhält es den Zustand Gepackt (Entkommen SG 13). Solange das Packen anhält, hat das Ziel den Zustand Festgehalten, erleidet zu Beginn jedes seiner Züge 10 (2W6 + 3) Wuchtschaden plus 7 (2W6) nekrotischen Schaden, und der Elende kann keine Einschnürender-Tentakel-Angriffe ausführen."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Trollhexe",
    art: "Riese",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Neutral böse",
    cr: 6,
    xp: 5000,
    rk: 13,
    ruestungstyp: "natürliche Rüstung",
    tp: 133,
    tp_wuerfel: "14W10+56",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 16, DEX: 10, CON: 19, INT: 13, WIS: 17, CHA: 15 },
    rettungswuerfe: { KON: 7, WEI: 6, CHA: 5 },
    fertigkeiten: { "Täuschung": 5, "Wahrnehmung": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Gemeinsprache", "Riesisch"],
    umgebung: ["Sumpf", "Wald"],
    bild: "drakkenheim/trollhexe.png",
    beschreibung: [
      "Massive Wülste von zitterndem, warzigem Fleisch, bedeckt mit Schimmel und Pilzwucherungen, ragen aus dem gebeugten Rücken dieses Trolls hervor. Tintenklecksendes, zerzaustes schwarzes Haar umrahmt ihr Gesicht, und kleine rote Augen durchbohren die Dunkelheit. Die Trollhexe ist in zerlumpten Sackleinen und verwesendem Laub gehüllt und schlurft auf geschwollenen, stämmigen Gliedmaßen, einen mächtigen Kessel und eine Schöpfkelle tragend.",
      "Die Trollhexen sind die Hüterinnen der Pilze im Trogrowth-Wald von Caspia und in Sümpfen überall auf dem Kontinent. Sie pflegen Pilzgärten und tragen große eiserne Kessel mit seltsamen Gebräuen, mit denen sie gewöhnliche Pilze in Trolle verwandeln. Ihre Gärten sind ihre Familie, und sie schützen sie mit ihrem Leben.",
      "In seltenen Fällen bilden drei Trollhexen einen Zirkel. Wenn drei Trollhexen einen abgelegenen Sumpf infizieren, arbeiten sie zusammen, um die Natur des Sumpfes zu verändern und Scharen von Pilztrollen in nahegelegene Dörfer zu schicken. Im Zirkel erhöht sich ihre Rüstungsklasse auf 15, und der Herausforderungsgrad steigt auf 10. Zusätzlich erhalten sie Zugang zu Zirkelsmagie (Gegenzauber, Giftstrahlen, Todeswolke, Große Unsichtbarkeit) sowie einer Pilzaura und der Fähigkeit, mächtige Pilztrolle heraufzubeschwören."
    ],
    besonderheiten: [
      {
        name: "Regeneration",
        beschreibung: "Die Trollhexe regeneriert zu Beginn jedes ihrer Züge 10 Trefferpunkte. Erleidet sie Säure- oder Feuerschaden, setzt diese Regeneration bis zum Beginn ihres nächsten Zuges aus. Die Trollhexe stirbt nur, wenn sie ihren Zug mit 0 Trefferpunkten beginnt und sich nicht regeneriert."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Die Trollhexe führt einen Pilzstabangriff und einen Schleimballangriff durch. Sie kann einen dieser Angriffe durch Zauberei ersetzen."
      },
      {
        name: "Pilzstab",
        beschreibung: "Intelligenz-Rettungswurf: SG 14, eine Kreatur innerhalb von 1,5 m. Misserfolg: 16 (3W8+3) Psychischer Schaden, und das Ziel erhält den Zustand Benebelt (Rettungswurf zum Beenden)."
      },
      {
        name: "Schleimball",
        beschreibung: "Fernkampf-Angriffswurf: +6, Reichweite 9 m/36 m, ein Ziel. Treffer: 19 (3W10+3) Säureschaden, und das Ziel erhält den Zustand Brennend (3W10 Säure)."
      },
      {
        name: "Zauberei",
        beschreibung: "Die Trollhexe wirkt einen ihrer vorbereiteten Zauber. Zauberwirk-Eigenschaft: Weisheit (SG 14). Beliebig: Druidenzauber, Magehand, Kleine Illusion. 2/Tag: Fluch auferlegen (Stufe 5), Pflanzenwuchs. 1/Tag: Kontakt zur anderen Ebene, Hellsehen."
      }
    ],
    bonusaktionen: [
      {
        name: "Sporensprung",
        beschreibung: "Die Trollhexe teleportiert sich magisch in einen unbesetzten Raum, den sie innerhalb von 18 m sehen kann."
      }
    ],
    reaktionen: [
      {
        name: "Troll gebären",
        beschreibung: "Auslöser: Die Trollhexe erleidet Schaden. Reaktion: Sie erschafft einen Pilztrolling in einem unbesetzten Raum innerhalb von 1,5 m. Der Pilztrolling handelt sofort nach dem auslösenden Zug, danach nach dem Zug der Trollhexe in nachfolgenden Runden."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Turmdrache",
    art: "Drache",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 10,
    xp: 5900,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 171,
    tp_wuerfel: "18W10+72",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 21, DEX: 10, CON: 19, INT: 14, WIS: 13, CHA: 17 },
    rettungswuerfe: { GES: 4, KON: 8, WEI: 5, CHA: 7 },
    fertigkeiten: { "Einsicht": 4, "Wahrnehmung": 7, "Heimlichkeit": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Blitz"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet"],
    sinne: ["Blindsicht 9 m", "Wahres Sehen 36 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Gemeinsprache", "Drakonisch"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/turmdrache.png",
    beschreibung: [
      "Der bronzene Drache ringelt sich um die Spitze des Turms, seinen Kopf in Richtung der Stadtränder ausgestreckt und die Straßen überwachend. Sein Körper ist sorgfältig gearbeitet und wunderschön detailliert – man meint, seinen Kopf sich kaum merklich in die eigene Richtung drehen zu sehen.",
      "Die Turmdrachen thronen auf den Türmen und Zinnen der Stadt und von Schloss Drakken. Einst edle Beschützer der Stadt, werden sie nun vom Willen der Haze kontrolliert. Jeder Turmdrache ist in einem einzigartigen Aussehen gefertigt – kein Drache gleicht dem anderen, doch alle bestehen aus Bronze und sind nach verschiedenen Drachentypen modelliert."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Turmdrache kann sowohl Luft als auch Wasser atmen." },
      { name: "Falsche Erscheinung", beschreibung: "Solange der Drache regungslos bleibt, ist er von einer leblosen Bronzestatue nicht zu unterscheiden." },
      { name: "Unfehlbarer Fährtenleser", beschreibung: "Die Kreaturen, die den Drachen animiert haben, werden zu seinen Beute-Zielen. Der Drache kennt Richtung und Entfernung zu seinen Beute-Zielen, solange sie sich in Drakkenheim befinden oder bis der Drache zerstört wird." },
      { name: "Unveränderliche Form", beschreibung: "Der Turmdrache ist immun gegen Zauber und Effekte, die seine Form verändern würden." },
      { name: "Magieresistenz", beschreibung: "Der Turmdrache hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte." },
      { name: "Verjüngung", beschreibung: "Wird der Turmdrache zerstört, stellt er sich innerhalb einer Stunde mit allen Trefferpunkten wieder her, sofern kein Desintegrieren-Zauber auf seine Überreste gewirkt wird." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Turmdrache führt drei Zerreißen-Angriffe aus." },
      { name: "Zerreißen", beschreibung: "Nahkampf-Angriffswurf: +9 zum Treffen, Reichweite 3 m. Treffer: 13 (2W6+6) Hiebschaden plus 7 (2W6) Kraftschaden." },
      { name: "Atemwaffen (Aufladen 5–6)", beschreibung: "Der Drache verwendet eine der folgenden Atemwaffen. Blitzatem – Geschicklichkeits-Rettungswurf: SG 15 für jede Kreatur in einer 18 m langen, 1,5 m breiten Linie. Misserfolg: 55 (10W10) Blitzschaden. Erfolg: Nur halber Schaden. Abstoßungsatem – Stärke-Rettungswurf: SG 15 für jede Kreatur in einem 9-Meter-Kegel. Misserfolg: Das Ziel wird bis zu 12 m vom Drachen weggestoßen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Turmfledermaus",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 6,
    xp: 2300,
    rk: 14,
    ruestungstyp: null,
    tp: 104,
    tp_wuerfel: "11W10+44",
    bewegung: { "Gehen": "6 m", "Fliegen": "18 m" },
    attribute: { STR: 13, DEX: 19, CON: 18, INT: 7, WIS: 14, CHA: 5 },
    rettungswuerfe: { GES: 7, KON: 7, WEI: 5 },
    fertigkeiten: { "Heimlichkeit": 7 },
    schadensresistenzen: ["Nekrotisch", "Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet", "Geblendet"],
    sinne: ["Blindsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/turmfledermaus.png",
    beschreibung: [
      "Ein schriller Schrei durchdringt die Luft, als eine große, missgestaltete Fledermaus über einen hinwegschwingt. Ihre ausgestreckten Flügel ähneln verlängerten menschlichen Armen, mit Haut, die straff über ihren deformierten Körper gespannt ist. Reihen gebogener Reißzähne füllen ihr Maul unter hervorquellenden roten Augen und einer schnüffelnden Schnauze.",
      "Einst ein häufiger Anblick, haben sich die Fledermäuse in Drakkenheim sowohl in Zahl als auch in Gestalt aufgebläht. Viele sind mittlerweile so groß wie Hunde, mit Flügelspannweiten von fast zwei Metern. Insekten stillen ihren Blutdurst nicht länger, und sie gieren nach Fleisch.",
      "Turmfledermäuse sind nachtaktiv und selten tagsüber anzutreffen. Selbst innerhalb des Dunstes bevorzugen sie den nächtlichen oktarinfarbenen Schimmer gegenüber den seltsam dunstigen Tagen.",
      "Wenn die Nacht hereinbricht, versammeln sich Turmfledermäuse auf alten Türmen und flattern durch die Straßen. Man kann sie an alten Laternenpfählen und im Dachgebälk verfallener Häuser hängend antreffen, wo sie darauf warten, auf vorbeiziehende Kreaturen herabzustürzen. Sie werden am häufigsten an den höchsten Orten der Stadt gefunden – an Schloss Drakken, dem Uhrenturm, dem Unergründlichen Turm und einigen der größeren Gebäude der Stadt.",
      "Turmfledermäuse ernähren sich hauptsächlich von Rattwesen, doch viele Opfer wurden von diesen Kreaturen überrascht, die aus der Dunkelheit herausschwärmen. Man sollte stets wachsam sein in feuchten und dunklen Räumen, in denen eine Handvoll Turmfledermäuse lauern könnte. Sie zu stören, könnte der letzte Fehler sein."
    ],
    besonderheiten: [
      {
        name: "Vorbeiflug",
        beschreibung: "Die Turmfledermaus provoziert keine Gelegenheitsangriffe, wenn sie aus der Reichweite eines Feindes herausfliegt."
      },
      {
        name: "Scharfes Gehör",
        beschreibung: "Die Turmfledermaus hat Vorteil auf Weisheits-Wahrnehmungswürfe, die auf dem Gehör basieren."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Die Turmfledermaus führt zwei Klauanangriffe und einen Bissangriff aus. Sie kann ihren Biss durch einen Schallstoß ersetzen, sofern verfügbar."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +7, Reichweite 3 m. Treffer: 15 (2W10 + 4) Hiebschaden."
      },
      {
        name: "Biss",
        beschreibung: "Nahkampf-Angriffswurf: +7, Reichweite 1,5 m. Treffer: 11 (2W6 + 4) Stichschaden, und das Ziel erhält den Zustand Entkräftet bis zum Ende des nächsten Zuges der Turmfledermaus. Die Turmfledermaus regeneriert Trefferpunkte in Höhe des durch ihren Biss verursachten Schadens."
      },
      {
        name: "Schallstoß (Aufladen 5–6)",
        beschreibung: "Konstitutions-Rettungswurf: SG 15, jede Kreatur in einem Ausstrahlungsbereich von 9 m um die Turmfledermaus, die sie hören kann. Misserfolg: 22 (4W8 + 4) Donnerschaden, und das Ziel erhält den Zustand Geschwächt (Rettungswurf beendet den Effekt). Erfolg: Nur halber Schaden."
      }
    ],
    bonusaktionen: [
      {
        name: "Schattenverbergung",
        beschreibung: "Während die Turmfledermaus sich in schwachem Licht oder Dunkelheit befindet, verwendet sie die Verstecken-Aktion."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Unkontrollierte Wucherung",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 8,
    xp: 3900,
    rk: 17,
    ruestungstyp: null,
    tp: 119,
    tp_wuerfel: "14W8+56",
    bewegung: { "Gehen": "6 m" },
    attribute: { STR: 21, DEX: 11, CON: 19, INT: 1, WIS: 7, CHA: 4 },
    rettungswuerfe: { STR: 8, KON: 7 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 8,
    sprachen: [],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/unkontrollierte_wucherung.png",
    beschreibung: [
      "Der wogende Hügel aus fleischigen Tentakeln verbirgt den Humanoiden, der tief in ihm begraben liegt. Mit unzusammenhängenden Anordnungen von Augen, Mündern, Armen und Beinen – und gelegentlich einem halb absorbierten Geschöpf – verändert die Unkontrollierte Wucherung unaufhörlich ihre Form, während ein gedämpfter Chor aus Wimmern, Schreien und qualvollen Schreien aus ihren Öffnungen dringt. Irgendwo in ihr sind die Überreste eines unglücklichen Versuchspatienten.",
      "Nicht alle Formeln der Mutagenisten gelingen. Oft testen sie das Metamorphose-Elixier zunächst an Patienten, bevor sie es an sich selbst versuchen. Wenn der Versuch scheitert, werden die Testpersonen zum Opfer unkontrollierter Gewebexpansion: Das Muskelgewebe wuchert ins Unermessliche und explodiert zu einem Fleischberg. Die meisten bösartigsten Mutagenisten behalten diese Wucherungen als Diener und nutzen den wahnsinnigen Angriffsdrang, den das Elixier auslöst, gegen ihre Feinde."
    ],
    besonderheiten: [
      { name: "Absorbierende Fleischmasse", beschreibung: "Eine Kreatur, die durch die Wucherung auf 0 Trefferpunkte reduziert wird, wird von ihrem Körper absorbiert und stirbt. Wenn die Wucherung eine Kreatur absorbiert, erhöht sich ihre Größenkategorie um eine Stufe. Beendet die Wucherung eine Lange Rast, ohne seit der letzten Langen Rast eine Kreatur absorbiert zu haben, sinkt ihre Größenkategorie um eine Stufe." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Wucherung führt eine Anzahl Pseudopoden-Angriffe aus, die von ihrer aktuellen Größe abhängt: 2 Angriffe (Mittelgroß), 3 Angriffe (Groß), 4 Angriffe (Riesig) oder 5 Angriffe (Gigantisch)." },
      { name: "Assimilierender Pseudopod", beschreibung: "Nahkampfangriff: +8 auf den Trefferwurf, Reichweite 3 m. Treffer: 14 (2W8+5) Nekrotischer Schaden. Wenn das Ziel kleiner als die Wucherung ist, ist es folgendem Effekt ausgesetzt: Geschicklichkeitsrettungswurf SG 16. Misserfolg: Das Ziel wird von der Wucherung verschluckt. Ein verschlucktes Ziel hat die Geblendet- und Festgehalten-Bedingung, hat vollständige Deckung gegen Angriffe und Effekte von außerhalb der Wucherung und erleidet zu Beginn jedes Zuges der Wucherung 18 (4W8) Nekrotischen Schaden. Die Wucherung regeneriert Trefferpunkte in Höhe des verursachten Nekrotischen Schadens; überschüssige Heilung erhöht ihr Trefferpunkte-Maximum. Wenn die Wucherung in einem einzigen Zug von einer Kreatur in ihrem Inneren 20 oder mehr Schaden erleidet, muss sie am Ende dieses Zuges einen Konstitutionsrettungswurf (SG 17) bestehen oder alle verschluckten Kreaturen erbrechen; sie landen mit der Liegend-Bedingung in freien Feldern innerhalb von 3 Metern. Wenn die Wucherung stirbt, hat eine verschluckte Kreatur nicht mehr die Festgehalten-Bedingung und kann die Leiche mit 6 m Bewegung verlassen, wobei sie mit der Liegend-Bedingung austritt." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Anpassungsfähiges Fleisch", beschreibung: "Auslöser: Die Wucherung erleidet Schaden durch einen Zauber oder Angriff. Reaktion: Die Wucherung halbiert den Schaden durch den auslösenden Zauber oder Angriff." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Unschuldiger Ernter",
    art: "Konstrukt",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 15,
    ruestungstyp: null,
    tp: 36,
    tp_wuerfel: "8W6+8",
    bewegung: { "Gehen": "12 m", "Klettern": "6 m" },
    attribute: { STR: 8, DEX: 17, CON: 13, INT: 10, WIS: 12, CHA: 13 },
    rettungswuerfe: {},
    fertigkeiten: { "Akrobatik": 5, "Heimlichkeit": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Gelähmt", "Versteinert", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/unschuldiger_ernter.png",
    beschreibung: [
      "Der Unschuldige Ernter ist ein kleines, bizarres Konstrukt, das auf den ersten Blick wie ein harmloses Kind oder ein kleines Humanoid wirkt. Erst aus der Nähe erkennt man die chirurgischen Klauen, die ausfahrbaren Injektionsnadeln und die leere Maske, hinter der sich kein lebendiges Gesicht verbirgt.",
      "Diese Konstrukte wurden von Drakkenheimer Alchemisten erschaffen, die Proben von Lebewesen für ihre Forschungen benötigten. Der Unschuldige Ernter schleicht sich an seine Opfer heran, täuscht sie durch sein harmloses Auftreten und entnimmt dann mit präzisen, schnellen Bewegungen biologische Proben – oder eliminiert das Ziel vollständig, falls die Situation es verlangt."
    ],
    besonderheiten: [
      { name: "Unauffällige Erscheinung", beschreibung: "Der Unschuldige Ernter hat Vorteil auf Täuschungs- und Heimlichkeitswürfe, wenn er versucht, als kleines Humanoid durchzugehen oder seine wahre Natur als Konstrukt zu verbergen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Unschuldige Ernter führt zwei Chirurgische Klauen-Angriffe aus." },
      { name: "Chirurgische Klauen", beschreibung: "Nahkampfangriff: +5 auf den Trefferwurf, Reichweite 1,5 m. Treffer: 10 (2W6+3) Hiebangriff. Das Ziel erleidet die Blutend-Bedingung und verliert zu Beginn jedes seiner Züge 7 (2W4) Trefferpunkte, bis es magisch geheilt wird oder eine Kreatur in Reichweite als Aktion einen erfolgreichen Heilkundewurf (SG 10) durchführt." },
      { name: "Spritze (1/Tag)", beschreibung: "Nahkampfangriff: +5 auf den Trefferwurf, Reichweite 1,5 m. Treffer: 10 (2W6+3) Stichschaden. Das Ziel muss einen Konstitutionsrettungswurf (SG 11) bestehen oder erleidet 28 (8W6) Giftschaden. Wird das Ziel durch diesen Angriff auf 0 Trefferpunkte reduziert, wird es stattdessen auf 1 Trefferpunkt stabilisiert und ist für 1 Stunde vergiftet und gelähmt." },
      { name: "Anheften (Aufladen 5–6)", beschreibung: "Der Unschuldige Ernter bewegt sich bis zu seiner Bewegungsrate, führt dann einen Chirurgische Klauen-Angriff durch und heftet sich, wenn er trifft, an das Ziel. Das Ziel ist festgehalten (Entkommen SG 13), solange der Unschuldige Ernter angeheftet ist." }
    ],
    bonusaktionen: [
      { name: "Listige Aktion", beschreibung: "Der Unschuldige Ernter führt eine der folgenden Aktionen aus: Rennen, Ausweichen oder Verstecken." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Verschobener Elender",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 2,
    xp: 450,
    rk: 14,
    ruestungstyp: null,
    tp: 27,
    tp_wuerfel: "6W8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 11, DEX: 19, CON: 10, INT: 12, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/verschobener_elender.png",
    beschreibung: [
      "Dieser mutierte Elende zittert heftig, als er durch die Realität zu stroboskopieren scheint. Eine undeutliche Unschärfe umhüllt seine Gestalt, wenn er sich mit einem gehemmten, unnatürlichen und fragmentierten Gang bewegt – als fehlten Momente seiner Realität, sodass er in seinem unheimlich rhythmischen Takt scheinbar Bruchteile von Zeit überspringt.",
      "Verschobene Elende entstehen häufig durch Kontamination, die aus Dünnen Stellen in den Ruinen ausströmt – wandelnden Pforten zwischen den Ebenen, die jene, die sie betreten, durch fremde Dimensionen und unbekannte Landschaften treiben. Wenn die aus diesen Wunden der Wirklichkeit strömende Kontamination eine Kreatur befällt, kann sie diese in eine fragmentierte Form aufspalten, die gleichzeitig existiert und nicht existiert, gleichzeitig präsent und auf einer fernen Ebene ist. Der Verschobene Elende ist zu keinem Zeitpunkt vollständig anwesend und nutzt diese zerrissene Realität zu seinem Vorteil."
    ],
    besonderheiten: [
      {
        name: "Verlagerung",
        beschreibung: "Angriffswürfe gegen den Elenden haben Nachteil. Wenn er von einem Angriffswurf getroffen wird, gilt dieses Merkmal bis zum Ende seines nächsten Zuges nicht. Dieses Merkmal gilt nicht, wenn der Elende den Zustand Kampfunfähig hat oder seine Bewegungsrate 0 beträgt."
      }
    ],
    aktionen: [
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +6, Reichweite 1,5 m. Treffer: 6 (1W6 + 3) Hiebschaden plus 10 (3W6) nekrotischer Schaden."
      }
    ],
    bonusaktionen: [
      {
        name: "Teleportation (Aufladen 4–6)",
        beschreibung: "Der Elende teleportiert sich bis zu 18 m zu einem unbesetzten Feld, das er sehen kann. Vor oder nach der Teleportation kann der Elende einen Nahkampfangriff ausführen. Wenn dieser Angriff trifft, verursacht er zusätzlich 10 (3W6) psychischen Schaden."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Verzerrungshexe",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 4,
    xp: 1100,
    rk: 11,
    ruestungstyp: null,
    tp: 45,
    tp_wuerfel: "10W8",
    bewegung: { "Gehen": "0 m", "Fliegen": "12 m" },
    attribute: { STR: 7, DEX: 13, CON: 10, INT: 10, WIS: 12, CHA: 17 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Wucht", "Stich", "Hieb", "Säure", "Feuer", "Blitz", "Donner"],
    schadensimmunitaeten: ["Kälte", "Nekrotisch", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Verängstigt", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend", "Festgehalten"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Die Sprachen aus ihrem früheren Leben"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/verzerrungshexe.png",
    beschreibung: [
      "Die eldrischen Energien des Dunsts schwächen und stören die metaphysischen Gefüge, die die Ebenen trennen. Diese wilde Magie zieht außerplanare Energien und Kreaturen in die Ruinen und hat eine besonders heimtückische Wechselwirkung mit dem Schattenland. Die Kräfte, die die Seelen der Toten in die Materielle Ebene ziehen, werden dadurch enorm verstärkt – und die eldrische Kontamination korrumpiert die Seele, fragmentiert den Verstand und verzerrt die Persönlichkeit, was diese Geister in Verzerrungshexen verwandelt.",
      "Verzweifelt nach einer Erinnerung an ihre frühere Identität greifend, heimsuchen die rachsüchtigen Geister jener, deren Leben der Dunst gestohlen hat, die Ruinen von Drakkenheim. Ihr Hass und ihre Missgunst gegenüber den Lebenden manifestieren sich in einem mächtigen Zwang, andere in Monster zu verwandeln.",
      "Im Kampf besitzen die Verzerrungshexen bevorzugt einen Humanoiden und versuchen, dessen Verbündete durch halbwahnsinnige Ratschläge in die Irre zu führen, während sie ihren Wirt unaufhaltsam kontaminieren und mutieren, bis dieser eine Monströse Verwandlung durchmacht."
    ],
    besonderheiten: [
      { name: "Körperlose Bewegung", beschreibung: "Die Verzerrungshexe kann sich durch andere Kreaturen und Objekte bewegen, als wären sie schwieriges Gelände. Sie erleidet 5 (1W10) Kraftschaden, wenn sie ihren Zug innerhalb eines Objekts beendet." }
    ],
    aktionen: [
      { name: "Unheilslaterne", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +5, Reichweite 1,5 m oder Reichweite 36 m. Treffer: 21 (4W8+3) Kälteschaden, und das Ziel erhält den Zustand Verlangsamt bis zum Ende des nächsten Zuges der Verzerrungshexe." },
      { name: "Psychoschrei", beschreibung: "Intelligenz-Rettungswurf: SG 13 für jede Kreatur in einem 9-Meter-Kegel. Fehlschlag: 10 (3W6) Psychischer Schaden, und das Ziel erhält den Zustand Verängstigt (Rettungswurf zum Beenden)." },
      { name: "Besessenheit", beschreibung: "Charisma-Rettungswurf: SG 13 für einen Humanoiden, den die Verzerrungshexe innerhalb von 1,5 m sehen kann. Fehlschlag: Das Ziel wird von der Verzerrungshexe besessen. Die Hexe verschwindet, und das Ziel erhält den Zustand Kampfunfähig und verliert die Kontrolle über seinen Körper. Die Hexe kontrolliert den Körper, raubt dem Ziel aber nicht das Bewusstsein. Die Hexe kann nicht von Angriffen, Zaubern oder anderen Effekten gezielt werden, außer von solchen, die Untote vertreiben. Die Hexe behält ihre Gesinnung, ihre Intelligenz-, Weisheits- und Charismawerte sowie ihre Immunität gegen die Zustände Bezaubert und Verängstigt; ansonsten verwendet sie die Spielwerte des besessenen Ziels, erhält jedoch keinen Zugang zu dessen Wissen, Klassenmerkmalen oder Übungen. Die Besessenheit endet, wenn der Körper auf 0 Trefferpunkte fällt, die Hexe sie als Bonusaktion beendet oder die Hexe durch einen Effekt wie den Zauber Böses und Gutes bannen verdrängt wird. Wenn die Besessenheit endet, erscheint die Hexe in einem unbesetzten Feld innerhalb von 1,5 m des Körpers. Bei einem bestandenen Rettungswurf ist das Ziel für 24 Stunden immun gegen die Besessenheit dieser Verzerrungshexe." }
    ],
    bonusaktionen: [
      { name: "Wirt mutieren", beschreibung: "Charisma-Rettungswurf: SG 13 für eine Kreatur, die die Verzerrungshexe besitzt. Fehlschlag: Das Ziel erhält eine Kontaminationsstufe und eine Mutation." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Wabernder Polyp",
    art: "Aberration",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 7,
    xp: 2900,
    rk: 16,
    ruestungstyp: null,
    tp: 75,
    tp_wuerfel: "10W6+40",
    bewegung: { "Gehen": "4,5 m" },
    attribute: { STR: 16, DEX: 6, CON: 18, INT: 10, WIS: 15, CHA: 5 },
    rettungswuerfe: { INT: 3, WEI: 5, CHA: 0 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Wucht", "Hieb"],
    verwundbarkeiten: ["Stich"],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Taub", "Erschöpfung", "Verängstigt", "Liegend"],
    sinne: ["Blindsicht 9 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/wabernder_polyp.png",
    beschreibung: [
      "Der Wabernde Polyp tauchte erst auf, nachdem Dünne Stellen in der ganzen Stadt Drakkenheim entstanden. Manche vermuten, diese Kreaturen werden im Raum zwischen den Welten geboren; andere glauben, es sind übermäßig kontaminierte Humanoide, die als reine Fleischmasse aus den Dünnen Stellen hervortreten.",
      "Das Wesen der Dünnen Stellen zeigt sich in der Art, wie der Polyp in Raum und Zeit existiert: vollkommen unbegreiflich und ohne Gesetzmäßigkeit. Er verschiebt sich ständig innerhalb eines Bereichs, erscheint fast gleichzeitig an mehreren Orten oder teleportiert sich fortwährend von einer Stelle zur nächsten – als ob er in einem nahezu konstanten Zustand des Wandels lebt.",
      "Wabernde Polypen wimmeln durch die Ruinen, lösen Kreaturen auf, auf die sie stoßen, und vermehren sich durch eine Art Mitose – sie spalten sich in weitere Wabernde Polypen auf, während sie endlos wachsen. Ihre Bedürfnisse und Absichten bleiben vollkommen ungeklärt."
    ],
    besonderheiten: [
      { name: "Verschiebung", beschreibung: "Die Form des Polypen verschiebt sich ständig auf übernatürliche Weise durch die Realität. Angriffswürfe gegen den Polypen haben Nachteil. Wenn der Polyp Schaden erleidet, funktioniert dieses Merkmal bis zum Beginn seines nächsten Zuges nicht mehr. Dieses Merkmal ist unterdrückt, während der Polyp den Zustand Kampfunfähig oder Festgehalten hat oder anderweitig nicht in der Lage ist, sich zu bewegen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Polyp führt zwei Schleim-Angriffe aus." },
      { name: "Schleim", beschreibung: "Nah- oder Fernkampf-Angriffswurf: +6, Reichweite 1,5 m oder Reichweite 18 m. Treffer: 13 (3W6+3) Säureschaden, und ein Bereich mit 1,5 m Radius um das Ziel ist für 1 Minute mit säurehaltigem Schleim bedeckt. Eine Kreatur außer dem Polypen, die den Bereich zum ersten Mal in einem Zug betritt oder ihren Zug dort beginnt, ist folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 15. Fehlschlag: 10 (3W6) Säureschaden, und das Ziel erhält den Zustand Brennend (3W6 Säure)." },
      { name: "Raumgleitung", beschreibung: "Der Polyp teleportiert sich in einen unbesetzten Bereich, den er innerhalb von 6 m sehen kann. Konstitutions-Rettungswurf: SG 15 für jede Kreatur in einer 3-Meter-Ausstrahlung um den Polypen, wenn er wieder erscheint. Fehlschlag: 16 (3W10) Kraftschaden. Fehlschlag um 5 oder mehr: Das Ziel löst eine Arkanomalie aus, die auf ihm zentriert ist. Erfolg: Nur halber Schaden." }
    ],
    bonusaktionen: [
      { name: "Schleichschritt", beschreibung: "Der Polyp teleportiert sich in einen unbesetzten Bereich, den er innerhalb von 18 m sehen kann." }
    ],
    reaktionen: [
      { name: "Verworrene Realitäten", beschreibung: "Auslöser: Der Polyp erleidet Schaden von einer Kreatur, die er innerhalb von 9 m sehen kann. Reaktion – Die auslösende Kreatur wird in einen unbesetzten Bereich teleportiert, den der Polyp innerhalb von 9 m von ihrem ursprünglichen Standort sehen kann. Der Zielort muss auf einer Oberfläche oder Flüssigkeit liegen, die das Ziel ohne Quetschen tragen kann." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Wandelnde Delerium-Geode",
    art: "Elementar",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 17,
    ruestungstyp: null,
    tp: 126,
    tp_wuerfel: "12W10+60",
    bewegung: { "Gehen": "9 m", "Graben": "9 m" },
    attribute: { STR: 20, DEX: 8, CON: 20, INT: 5, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: ["Strahlend", "Donner"],
    zustandsimmunitaeten: ["Erschöpfung", "Gelähmt", "Versteinert", "Vergiftet", "Bewusstlos"],
    sinne: ["Dunkelsicht 18 m", "Zittersinn 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Tiefe Rede"],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/wandelnde_delerium_geode.png",
    beschreibung: [
      "Ein reiches Delirium-Kristallgeflecht schimmert in der nahen Ruine. Als man sich nähert, beginnt der Schutt sich zu verlagern und zu bewegen. Eine gebeugte, massige Gestalt, vage menschenähnlich, erhebt sich mit einem Chor aus kristallinem Klirren und schleifendem Fels. Die zentrale Masse aus Stein und Kristall wird von zwei kurzen, stämmigen Trümmerbeinchen getragen; Arme und Schultern aus großen Steinbrocken und Holz geformt, endend in geballten Fäusten, die mit Delirium-Stacheln gespickt sind. Sein Kopf – ein länglicher Kristall – ist von Winkeln und Rissen durchzogen, die allmählich ein trauriges Gesicht formen.",
      "Mehr als einmal hat ein unachtsamer Prospektor ein reiches Delirium-Vorkommen mit einer Wandelnden Delirium-Geode verwechselt und ist dabei als roter Fleck auf den Straßen Drakkenheims geendet. Diese kontaminierten Erd-Elementare sind überall in den Ruinen anzutreffen und ärgerlich häufig in der Nähe besonders großer Delirium-Kristallvorkommen."
    ],
    besonderheiten: [
      {
        name: "Todesexplosion",
        beschreibung: "Der Elementar explodiert, wenn er stirbt und seit seinem letzten Zug keinen Kraft-, Strahlungs- oder Donnerschaden erlitten hat. Konstitutions-Rettungswurf: SG 16, jede Kreatur in einem Ausstrahlungsbereich von 9 m um den Elementar. Misserfolg: 42 (12W6) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe. Misserfolg oder Erfolg: Die Explosion löst eine zufällige Arkane Anomalie aus."
      },
      {
        name: "Erdgleiten",
        beschreibung: "Der Elementar kann durch natürliche, unbearbeitete Erde und Stein graben. Dabei stört er das Material nicht, durch das er sich bewegt."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Elementar führt zwei Splitterschlag-Angriffe aus."
      },
      {
        name: "Splitterschlag",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 3 m. Treffer: 14 (2W8 + 5) Wuchtschaden. Konstitutions-Rettungswurf: SG 16. Misserfolg: 10 (3W6) nekrotischer Schaden, und das Ziel erhält eine Kontaminationsstufe."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Warpräuber",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 5,
    xp: 1800,
    rk: 16,
    ruestungstyp: null,
    tp: 97,
    tp_wuerfel: "13W8+39",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 18, DEX: 17, CON: 16, INT: 12, WIS: 16, CHA: 15 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 9 },
    schadensresistenzen: ["Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert"],
    sinne: ["Blindsicht 36 m"],
    passiveWahrnehmung: 19,
    sprachen: [],
    umgebung: ["Andere Ebenen", "Ruinen"],
    bild: "drakkenheim/warpraeuber.png",
    beschreibung: [
      "Die Kreatur besitzt einen lupinen Körper aus wirbelnder Energie, die sich ständig verändert und einen schwindelerregenden Seheffekt auf ihr feines, scharfes Fell erzeugt. Die Energie erscheint als ein Gemisch aus Farben und Mustern, als würde sie aus der chaotischen Magie des Zwischenraums schöpfen. Das Wesen hat acht Beine und weder sichtbare Augen noch ein Maul; stattdessen entspringen seinem Körper Massen von Tentakeln. Entlang seines Rückens klafft die Wirbelsäule auf und gibt einem gewaltigen Rachen aus zersplittertem Knochen und Zähnen nach, der in einen zeitlichen Riss in Raum und Zeit mündet.",
      "Der Warpräuber ist ein furchterregender Jäger, der im Zwischenraum der Welten lauert und ahnungslose Reisende angreift, die in dieses Reich geraten. Als Kreatur des reinen Instinkts, getrieben allein durch den Wunsch zu jagen und zu fressen, nutzt er die Fähigkeit, zwischen Dimensionen zu navigieren, um seine Beute zu beschleichen und sie dann mit einem überraschenden Angriff zu überwältigen.",
      "Ein Warpräuber kann dimensionale Portale und Dünne Stellen aufspüren und wartet dort oft, bis Kreaturen hindurchtreten, bevor er zustößt. Seine Tentakel sind unglaublich stark und können Knochen zerquetschen. Er kann Beute auch in seinen außerdimensionalen Schlund verschlucken, wo sie in einem bizarren Netzwerk aus schmatzendem Fleisch gefangen ist."
    ],
    besonderheiten: [
      {
        name: "Aberrante Eigenschaften",
        beschreibung: "Der Warpräuber besitzt die in der Seitenleiste 'Aberrante Eigenschaften' beschriebenen Merkmale."
      },
      {
        name: "Außerdimensionaler Schlund",
        beschreibung: "Der Rücken des Warpräubers öffnet sich zu einem großen Maul, das zu einem außerdimensionalen Schlund führt. Alles, was er verschluckt, wird in diesen extraplanaren Raum transportiert – ein rhizomatisches Netz aus schmatzendem Fleisch und Gängen. Dieser Raum kann beliebig viele Kreaturen jeder Größe aufnehmen, und nichts im Inneren kann dem Warpräuber schaden. Eine verschluckte Kreatur kann eine Aktion aufwenden, um zu entkommen: Intelligenz-Rettungswurf SG 15. Erfolg: Die Kreatur erscheint im nächsten freien Feld in 1,5 m Entfernung vom Warpräuber. Fehlschlag: 10 (3W6) psychischer Schaden. Stirbt der Warpräuber, erscheinen alle Gefangenen in den nächsten freien Feldern bei seiner Leiche."
      },
      {
        name: "Greifende Tentakel",
        beschreibung: "Der Warpräuber kann bis zu vier Tentakel gleichzeitig einsetzen. Jeder Tentakel hat RK 20, 10 Trefferpunkte und Immunität gegen Gift- und psychischen Schaden. Das Zerstören eines Tentakels verursacht keinen Schaden am Warpräuber; er kann am nächsten Zug einen Ersatz ausstrecken. Eine angrenzende Kreatur kann eine Aktion aufwenden, um einen Tentakel mit einem erfolgreichen Stärke-Check SG 15 zu brechen."
      },
      {
        name: "Wirbelndes Farbfeld",
        beschreibung: "Ein Feld aus schimmernden Farben umgibt den Warpräuber und verzerrt die Realität. Eine Kreatur, die den Warpräuber mit einem Angriff trifft, erleidet einen der folgenden Effekte (zufällig, 1W6): 1–2 Blau: Der Angreifer wird zu einem unbesetzten Feld teleportiert, das der Warpräuber in 6 m sehen kann. Charisma-Rettungswurf SG 15. Fehlschlag: Bewegungsunfähig (Rettungswurf beendet den Zustand). 3–4 Gelb: Geschicklichkeits-Rettungswurf SG 15. Fehlschlag: 21 (6W6) Blitzschaden. Erfolg: Halber Schaden. 5–6 Rot: Weisheits-Rettungswurf SG 15. Fehlschlag: Taumelnd (Rettungswurf beendet den Zustand). Eine gepackte, angrenzende Kreatur ist vom Wirbelnden Farbfeld nicht betroffen."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Warpräuber führt vier Tentakel-Angriffe aus, nutzt Einziehen und führt dann einen Biss-Angriff aus."
      },
      {
        name: "Tentakel",
        beschreibung: "Nahkampfangriffswurf +7, Reichweite 18 m. Treffer: Das Ziel erhält den Zustand Gepackt (Entkommen SG 15). Solange es gepackt ist, hat das Ziel den Zustand Gefesselt und Nachteil auf Stärke-Checks und -Rettungswürfe. Der Warpräuber kann diesen Tentakel nicht gegen ein anderes Ziel einsetzen."
      },
      {
        name: "Biss",
        beschreibung: "Nahkampfangriffswurf +7, Reichweite 1,5 m, eine gepackte Kreatur. Treffer: 16 (2W10+5) Stichschaden, und der Warpräuber verschluckt das Ziel. Das Ziel erscheint mitsamt allem, was es trägt, im Außerdimensionalen Schlund des Warpräubers."
      },
      {
        name: "Einziehen",
        beschreibung: "Der Warpräuber zieht jede von ihm gepackte Kreatur bis zu 9 m geradewegs zu sich heran."
      }
    ],
    bonusaktionen: [
      {
        name: "Dimensionssprung",
        beschreibung: "Der Warpräuber teleportiert sich zu einem unbesetzten Feld in 36 m Entfernung. Alternativ reist er von der Materiellen Ebene in den Zwischenraum der Welten oder umgekehrt."
      }
    ],
    reaktionen: [
      {
        name: "Realitätsjäger",
        beschreibung: "Auslöser: Eine vom Warpräuber gepackte Kreatur versucht zu teleportieren. Reaktion – Intelligenz-Rettungswurf SG 15. Fehlschlag: 21 (6W6) Kraftschaden, und die Teleportation schlägt fehl. Erfolg: Die Teleportation schlägt fehl, aber es werden keine Ressourcen verbraucht."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Weltvernichter",
    art: "Aberration",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Gesinnungslos",
    cr: 30,
    xp: 155000,
    rk: 23,
    ruestungstyp: null,
    tp: 205,
    tp_wuerfel: "10W20+100",
    bewegung: { "Gehen": "18 m" },
    attribute: { STR: 30, DEX: 15, CON: 30, INT: 12, WIS: 30, CHA: 11 },
    rettungswuerfe: { STR: 10, GES: 11, KON: 10, INT: 10, WEI: 10, CHA: 9 },
    fertigkeiten: { "Athletik": 19, "Motiv erkennen": 19, "Wahrnehmung": 19 },
    schadensresistenzen: ["Säure", "Kälte", "Feuer", "Gift", "Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Gelähmt", "Vergiftet"],
    sinne: ["Wahre Sicht 36 m"],
    passiveWahrnehmung: 29,
    sprachen: [],
    umgebung: ["Ruinen", "Andere Ebenen"],
    bild: "drakkenheim/weltvernichter.png",
    beschreibung: [
      "Ein kolossaler Delirium-Kristall ruht im Zentrum des Kraters – das sogenannte „Delirium-Herz“. Es ist das Überbleibsel einer fernen, unbekannten Welt, die vollständig vom Dunst verschluckt und vernichtet wurde, und die größte Quelle der Kontamination, die sich von Drakkenheim ausbreitet. Wer das Delirium-Herz vernichtet, in der Hoffnung, der Ausbreitung des Dunsts Einhalt zu gebieten, löst stattdessen ein zerstörerisches Schrecken frei, das die Welt noch nie gesehen hat: den Weltvernichter.",
      "Keine zwei Personen, die der Entstehung des Weltvernichters beiwohnen, können seine Ankunft in denselben Worten beschreiben. Einer erlebt, wie er sich aus dem Delirium-Herz befreit wie eine Kreatur, die aus einem riesigen Ei schlüpft; ein anderer beschreibt sein plötzliches Erscheinen aus dem Nebel in einem Blitz aus Donner und Blitzen; ein dritter sieht eine kleine Kreatur in der Nähe, die sich im Zuge der freigesetzten Kräfte in ein kolossales Wesen verwandelt. Der Weltvernichter trägt viele Namen: Die Apokalypse, der Weltesser, der Herold, der Tod, der Vernichter, der letzte Alptraum, der Zorn der Götter.",
      "Der Weltvernichter kann weder beschwatzt noch verstanden werden; seine Ursprünge und Absichten bleiben in undurchdringlichem Dunkel gehüllt – er ist einfach. Die Komplexitäten menschlicher Zivilisation sind vor ihm völlig bedeutungslos. Einmal befreit, zerstampft er Städte ohne Bewusstsein oder Bedauern, vernichtet Armeen und stürzt Nationen mit derselben gleichgültigen Leichtigkeit, mit der natürliche Kräfte Landschaften umformen. Bemühungen, ihn zu verstehen oder zu beeinflussen, sind so sinnlos wie der Versuch von Ameisen, einen Fluss zu begreifen, der sie zu verschlucken droht.",
      "Die Magier der Amethyst-Akademie postulieren, dass der Weltvernichter der Überrest einer fernen, toten Welt ist. Wenn Delirium unkontrolliert in massiven Mengen belassen wird, kann es langsam in den Kern eines gesamten Planeten eindringen und ihn schließlich verrotten lassen. Wenn der Planet vollständig kontaminiert ist, explodiert er und schleudert riesige Brocken kontaminierten Gesteins durch den Kosmos. Manche dieser Meteoriten beherbergen in ihren Kernen mutierte Monstren, die in einem Zustand des Winterschlafs eingeschlossen sind und darauf warten, auf einer neuen, kontaminierten Welt auszubrechen. Wir haben die Überreste einer fernen, toten Welt empfangen – und müssen sie einschließen, bevor dasselbe mit unserer geschieht."
    ],
    besonderheiten: [
      {
        name: "Epische Trefferpunkte",
        beschreibung: "Der Weltvernichter hat 205 (10W20 + 100) Trefferpunkte plus weitere 205 (10W20 + 100) Trefferpunkte pro Spielercharakter in der Gruppe."
      },
      {
        name: "Delirium-Sturmaura",
        beschreibung: "Eine Kreatur, die ihren Zug in einem Umkreis von 36 m um den Weltvernichter beginnt, erleidet 21 (6W6) Blitzschaden und ist folgendem Effekt ausgesetzt. Konstitutions-Rettungswurf: SG 24. Misserfolg: Das Ziel erhält eine Kontaminationsstufe."
      },
      {
        name: "Unveränderliche Form",
        beschreibung: "Der Weltvernichter ist immun gegen jeden Zauber oder Effekt, der seine Form verändern würde."
      },
      {
        name: "Mutationen wuchern",
        beschreibung: "Eine Kreatur, die eine Kontaminationsstufe durch die Delirium-Sturmaura des Weltvernichters erhält, muss 2W6 würfeln und das niedrigere Ergebnis verwenden, um zu bestimmen, ob sie mutiert. Wenn eine Kreatur innerhalb der Aura eine Mutation erhält, muss sie zweimal auf der Mutationstabelle würfeln und erhält beide Mutationen."
      },
      {
        name: "Verjüngung",
        beschreibung: "Wenn der Weltvernichter vernichtet wird, erhält er alle seine Trefferpunkte innerhalb von 1 Stunde zurück, es sei denn, ein Wunsch-Zauber wird eingesetzt, um die Verjüngung zu verhindern. Dies ist eine belastende Verwendung des Wunsch-Zaubers."
      },
      {
        name: "Belagerungsmonster",
        beschreibung: "Der Weltvernichter verursacht doppelten Schaden an Objekten und Strukturen."
      },
      {
        name: "Ungebundene Arkana",
        beschreibung: "Wann immer der Weltvernichter das Ziel eines Zaubers ist, wird beim Wirker eine Arkane Anomalie ausgelöst."
      }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      {
        name: "Epische Aktionen",
        beschreibung: "Der Weltvernichter handelt immer bei Initiative 20. In seinem Zug kann er seine Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt ihn dazu. Stattdessen führt der Weltvernichter am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus."
      },
      {
        name: "Nekrotische Klaue",
        beschreibung: "Nahkampf-Angriffswurf: +19, Reichweite 4,5 m. Treffer: 37 (5W10 + 10) nekrotischer Schaden."
      },
      {
        name: "Biss (1/Runde)",
        beschreibung: "Nahkampf-Angriffswurf: +19, Reichweite 4,5 m. Treffer: 26 (3W10 + 10) Stichschaden. Wenn das Ziel eine Kreatur ist, erhält es den Zustand Gepackt (Entkommen SG 27). Solange es Gepackt ist, hat das Ziel den Zustand Festgehalten, und der Weltvernichter kann kein weiteres Ziel mit dem Biss angreifen."
      },
      {
        name: "Aufladen: Vernichtungsstrahl (Aufladen 5–6)",
        beschreibung: "Oktarinenergie pulsiert durch den Körper des Weltvernichters von seinem Schwanz bis zu seinem Kopf. Der Vernichtungsstrahl des Weltvernichters lädt auf, und er wählt die Richtung, in die er sich ausrichten wird, um seinen Vernichtungsstrahl zu entfesseln. Der Weltvernichter kann diese Epische Aktion nur verwenden, wenn es die erste Epische Aktion ist, die er in dieser Runde ausführt. Nach der Verwendung dieser Epischen Aktion kann der Weltvernichter bis zum Beginn der nächsten Runde weder Biss, Dröhnendes Gebrüll noch Verschlingen verwenden."
      },
      {
        name: "Vernichtungsstrahl (Sonderaufladen)",
        beschreibung: "Der Weltvernichter kann diese Epische Aktion nur verwenden, wenn es die letzte Epische Aktion ist, die er in dieser Runde ausführt. Konstitutions-Rettungswurf: SG 27 für jede Kreatur und jedes Objekt in einer 300 m langen und 6 m breiten Linie. Misserfolg: 110 (20W10) Wuchtschaden. Erfolg: Halber Schaden. Misserfolg oder Erfolg: Eine Kreatur wird desintegriert – zusammen mit allem, was sie trägt – wenn dieser Schaden sie auf 0 Trefferpunkte reduziert; sie kann nur durch einen Wunsch-Zauber wiederbelebt werden. Der Vernichtungsstrahl vernichtet jeden Kraftfeldwall-, Käfig-aus-Kraft- oder Prismatische-Wand-Zauber in seinem Bereich. Er beschädigt auch unbewachte magische Gegenstände in seinem Bereich, einschließlich Artefakte."
      },
      {
        name: "Oktarinblitzschlag",
        beschreibung: "Geschicklichkeits-Rettungswurf: SG 27 für jede Kreatur in einer Kugel mit 3 m Radius, deren Mittelpunkt sich innerhalb von 150 m befindet. Misserfolg: 54 (12W8) Blitzschaden, und das Ziel erhält den Zustand Benommen bis zum Beginn seines nächsten Zuges. Erfolg: Nur halber Schaden."
      },
      {
        name: "Dröhnendes Gebrüll (lädt nach einer Kurzen oder Langen Rast auf)",
        beschreibung: "Weisheits-Rettungswurf: SG 27 für jede Kreatur in einer 36-Meter-Ausstrahlung des Weltvernichters, die ihn hören kann. Misserfolg: Das Ziel erhält den Zustand Taub (Rettungswurf zum Beenden). Solange es Taub ist, hat das Ziel Nachteil auf Angriffswürfe und Fähigkeitswürfe."
      },
      {
        name: "Bodenschlag (1/Runde)",
        beschreibung: "Stärke-Rettungswurf: SG 27 für jede Kreatur auf dem Boden in einem 9-Meter-Kegel. Misserfolg: 26 (4W12) Wuchtschaden, und das Ziel wird 3 m vom Weltvernichter weggestoßen und erhält den Zustand Liegend. Misserfolg oder Erfolg: Der Kegel wird bis zum Beginn des nächsten Zuges des Weltvernichters zu schwerem Gelände."
      },
      {
        name: "Verschlingen",
        beschreibung: "Der Weltvernichter kann diese Epische Aktion nicht ausführen, wenn er in dieser Runde seine Biss-Epische-Aktion verwendet hat. Er macht einen Biss-Angriff gegen eine Große oder kleinere Kreatur, die er Gepackt hält. Wenn der Angriff trifft, erleidet das Ziel den Schaden des Bisses, das Ziel wird verschluckt und das Packen endet. Solange es verschluckt ist, hat das Ziel die Zustände Geblendet und Festgehalten, genießt vollständige Deckung vor Effekten von außerhalb des Weltvernichters und erleidet zu Beginn jedes Zuges des Weltvernichters 56 (16W6) Säureschaden sowie eine Kontaminationsstufe. Wenn der Weltvernichter in einem einzigen Zug 60 oder mehr Schaden von einer Kreatur in seinem Inneren erleidet, muss er am Ende dieses Zuges einen Konstitutions-Rettungswurf (SG 20) bestehen oder alle verschluckten Kreaturen herauswürgen, die dann in unbesetzten Feldern innerhalb von 3 m des Weltvernichters landen und den Zustand Liegend erhalten. Wenn der Weltvernichter stirbt, hat eine verschluckte Kreatur nicht mehr den Zustand Festgehalten und kann den Leichnam mit 9 m ihrer Bewegung verlassen, wobei sie den Zustand Liegend erhält."
      },
      {
        name: "Epische Resistenz",
        beschreibung: "Der Weltvernichter wählt einen Zustand, Zauber oder anderen Effekt, der ihn derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihm. Der Weltvernichter kann diese Epische Aktion auch dann verwenden, wenn er anderweitig keine Aktionen ausführen kann, seine Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt seine Spielwerte verändert."
      }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Wer Zuletzt Lacht",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Gigantisch",
    gesinnung: "Chaotisch böse",
    cr: 27,
    xp: 105000,
    rk: 21,
    ruestungstyp: null,
    tp: 125,
    tp_wuerfel: "7W20+49",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m" },
    attribute: { STR: 27, DEX: 17, CON: 25, INT: 23, WIS: 20, CHA: 27 },
    rettungswuerfe: { KON: 15, INT: 14, WEI: 13, CHA: 16 },
    fertigkeiten: { "Täuschung": 24, "Einsicht": 13, "Wahrnehmung": 13, "Überredung": 24 },
    schadensresistenzen: ["Kälte", "Feuer", "Blitz"],
    schadensimmunitaeten: ["Nekrotisch", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpft", "Verängstigt", "Vergiftet"],
    sinne: ["Wahre Sicht 36 m"],
    passiveWahrnehmung: 23,
    sprachen: ["Alle", "Telepathie 1,6 km"],
    umgebung: ["Andere Ebenen"],
    bild: "drakkenheim/wer_zuletzt_lacht.png",
    beschreibung: [
      "Wer Zuletzt Lacht ist ein urzeitlicher Dämon des Todes und der Verwesung. Tiefgründig nihilistisch und doch seltsam heiter schwelgt dieser Erzteufel in der Dramatik und Theatralik der Sterblichenexistenz und sieht das Leben selbst als kosmischen Witz. Für ihn ist jeder Moment lediglich eine bedeutungslose Szene in der großen Tragikomödie des Universums. Sein gehässiges Lachen hallt durch die Korridore von Zeit und Raum.",
      "Die Legende besagt, es werde der letzte Klang am Ende aller Dinge sein – wenn der Vorhang über die Existenz selbst fällt. Wer Zuletzt Lacht glaubt, dies sei sein perverses Schicksal, und dieses vermeintliche Wissen treibt seine Begegnungen mit den Sterblichen an, die er als machtlose Marionetten im großen Schauspiel von Leben und Tod betrachtet.",
      "Viele Untote sollen sein Werk sein – höhnische Flüche, die der Dämonenfürst zur Belustigung über die Menschheit gelegt hat. Nekromanten, Hexenmeister und andere arkane Praktiker suchen ihn als Lehrmeister oder Patron auf. Er bietet Pakte an, die Macht, Wissen und das Versprechen der Flucht aus der Sterblichkeit gewähren – doch statt der Seelen seiner Bittsteller fordert Wer Zuletzt Lacht, dass diese die Seelen anderer sammeln.",
      "Das Theater des Totentanzes ist seine Domäne – eine teuflische Zitadelle in den dunklen Tiefen des Abgrunds, die einem runden Theater aus Knochen und Blut gleicht. Dort sind die gesammelten Seelen seiner Opfer für die Ewigkeit gebunden und müssen endlos tragische Geschichten aufführen für das dunkle Schauspiel."
    ],
    besonderheiten: [
      {
        name: "Epische Trefferpunkte",
        beschreibung: "Wer Zuletzt Lacht hat 125 (7W20+49) Trefferpunkte plus weitere 125 (7W20+49) pro Spielercharakter in der Gruppe."
      },
      {
        name: "Unergründlich",
        beschreibung: "Wer Zuletzt Lacht ist immun gegen jeden Effekt, der seine Emotionen wahrnehmen oder seine Gedanken lesen würde, sowie gegen jeden Weissagungszauber, den er ablehnt. WEI (Einsicht)-Proben, die Absichten oder Aufrichtigkeit des Dämonenfürsten einschätzen sollen, haben Nachteil."
      },
      {
        name: "Sterbliche Hülle",
        beschreibung: "Wer Zuletzt Lacht erzeugt eine 45 m Ausstrahlung aus Tod und Verwesung. Eine Kreatur, die ihren Zug in der Ausstrahlung beendet, erleidet eine Erschöpfungsstufe und altert um 10 (3W6) Jahre. Die Kreatur entfernt am Ende ihres Zuges eine so erhaltene Erschöpfungsstufe, jedoch nur wenn sie ihren Zug außerhalb der Ausstrahlung beendet. Das ursprüngliche Alter einer Kreatur kann durch Große Wiederherstellung oder ähnliche Magie wiederhergestellt werden."
      }
    ],
    aktionen: [],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: [
      {
        name: "Epische Aktionen",
        beschreibung: "Wer Zuletzt Lacht handelt immer bei Initiative 20. In seinem Zug kann er seine Bewegung und Interaktion wie gewohnt nutzen, führt jedoch keine Aktion oder Bonusaktion aus, es sei denn, ein Zauber oder Effekt zwingt ihn dazu. Stattdessen führt er am Ende des Zuges jedes Spielercharakters eine der folgenden Epischen Aktionen aus."
      },
      {
        name: "Höhnische Peitsche",
        beschreibung: "Nahkampfangriffswurf +16, Reichweite 36 m. Treffer: 30 (5W8+8) Kraftschaden. Ist das Ziel Groß oder kleiner, wird es 9 m auf Wer Zuletzt Lacht zugezogen."
      },
      {
        name: "Wandelnder Schatten (1/Runde)",
        beschreibung: "Wer Zuletzt Lacht bewegt sich bis zur Hälfte seiner Bewegungsrate."
      },
      {
        name: "Schlaf nimmermehr (1/Runde)",
        beschreibung: "Wer Zuletzt Lacht wirkt Machtwort: Töten."
      },
      {
        name: "Aus, kurzes Licht (1/Runde)",
        beschreibung: "Wer Zuletzt Lacht wirkt Todesfinger (Zauber-SG 24)."
      },
      {
        name: "Staubiger Tod (1/Runde)",
        beschreibung: "Wer Zuletzt Lacht wirkt Desintegrieren (Zauber-SG 24)."
      },
      {
        name: "Zauberei (1/Runde)",
        beschreibung: "Wer Zuletzt Lacht wirkt einen der folgenden Zauber ohne Materialkomponenten; Charisma ist die Zauberwirkungseigenschaft (Zauber-SG 26). Beliebig: Untote erschaffen (Stufenäquivalent 9), Mit Toten sprechen. 3/Tag: Untote erzeugen (Stufenäquivalent 9), Magie bannen, Traum, Bildprojektion, Hellsehen, Teleportation. 1/Jahr: Wunsch."
      },
      {
        name: "Käfig der Trauer (1/Runde)",
        beschreibung: "Wer Zuletzt Lacht erschafft eine Knochenwand auf einer festen Oberfläche, die er in 36 m sehen kann. Die Wand erscheint als flache Fläche aus einem 3 m × 3 m Segment, ist 30 cm dick und hält 1 Minute lang an oder bis sie zerstört wird (RK 15, 20 TP; Immunität gegen Gift- und psychischen Schaden; Anfälligkeit gegen Wucht- und Donnerschaden). Schneidet die Wand beim Erscheinen durch den Raum einer Kreatur, wird diese auf eine Seite der Wand gestoßen (nach Wahl des Spielleiters) und unterliegt folgendem Effekt. Geschicklichkeits-Rettungswurf SG 16. Fehlschlag: 10 (3W6) Stichschaden."
      },
      {
        name: "Epische Resistenz",
        beschreibung: "Wer Zuletzt Lacht wählt einen Zustand, Zauber oder anderen Effekt, der ihn derzeit beeinflusst, und wirft 1W20. Bei einem Ergebnis von 11 oder höher endet der Effekt auf ihm. Er kann diese Epische Aktion auch dann verwenden, wenn er anderweitig keine Aktionen ausführen kann, seine Aktionen von einer anderen Kreatur kontrolliert werden oder wenn ein Zauber oder Effekt seine Spielwerte verändert."
      }
    ],
    source: "Drakkenheim"
  },
  {
    name: "Widerliche Würgfliege",
    art: "Monstrosität",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 1,
    xp: 200,
    rk: 13,
    ruestungstyp: null,
    tp: 27,
    tp_wuerfel: "5W6+10",
    bewegung: { "Gehen": "3 m", "Fliegen": "9 m" },
    attribute: { STR: 7, DEX: 16, CON: 15, INT: 3, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/widerliche_wuergfliege.png",
    beschreibung: [
      "Die Würgfliegen gedeihen prächtig in Drakkenheim. Da Leichen dort nicht verwesen, bieten sie eine reiche Nahrungsquelle. Viele aufgedunsene Leichname wimmeln von großen grünen Maden, die sich am toten, kontaminierten Fleisch laben. Wenn diese Maden zu Würgfliegen heranwachsen, umschwärmen sie Orte des Todes in der Stadt.",
      "Die Würgfliegen sind aufgedunsene, überwachsene Fliegen, deren säurehaltiger Schleim einen Beutel gebildet hat, der den größten Teil ihres riesigen Thorax einnimmt. Wie alle Fliegen nutzen sie diesen Schleim, um Nahrung aufzulösen. Aufgrund ihrer Größe führt dies zu einem fürchterlichen Erlebnis für Abenteurer, wenn ganze Gruppen dieser Fliegen brennende Säure auf ihre Beute spucken und sich dann zum Fressen niederlassen.",
      "Die Würgfliegen werden von frischen Leichen, Leichenbergen oder auch Gruppen von Dunstleichen und Dunst-Kreaturen angezogen, in der Hoffnung, an deren Fleisch zu knabbern. Die Zisterne der Stadt und der alte Brunnen auf dem Schlachtstein-Platz gelten als bekannte Brutstätten für große Nester dieser Fliegen."
    ],
    besonderheiten: [
      { name: "Verdauungsenzyme", beschreibung: "Die Würgfliege hat Vorteil auf Angriffswürfe gegen Ziele mit dem Zustand Brennend." },
      { name: "Spinnenkletterer", beschreibung: "Die Würgfliege kann schwierige Oberflächen erklimmen, einschließlich kopfüber an Decken, ohne einen Fähigkeitswurf ablegen zu müssen." }
    ],
    aktionen: [
      { name: "Saugrüssel", beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m. Treffer: 10 (2W6+3) Stichschaden." },
      { name: "Säurespray (Aufladen 6)", beschreibung: "Geschicklichkeits-Rettungswurf: SG 13 für jede Kreatur in einem 4,5-Meter-Kegel. Fehlschlag: 5 (2W4) Säureschaden, und das Ziel erhält den Zustand Brennend (2W4 Säure). Erfolg: Nur halber Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Blähplatzer", beschreibung: "Auslöser: Die Würgfliege wird auf 0 Trefferpunkte reduziert oder erleidet Schaden durch einen kritischen Treffer. Reaktion – Geschicklichkeits-Rettungswurf: SG 12 für jede Kreatur in einer 3-Meter-Ausstrahlung, die von der Würgfliege ausgeht. Fehlschlag: 5 (2W4) Säureschaden, und das Ziel erhält den Zustand Brennend (2W4 Säure)." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Wintertroll",
    art: "Riese",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 6,
    xp: 2300,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 105,
    tp_wuerfel: "10W10+50",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 18, DEX: 13, CON: 20, INT: 7, WIS: 11, CHA: 6 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Kälte"],
    verwundbarkeiten: ["Feuer"],
    zustandsimmunitaeten: ["Gefroren"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Riesisch"],
    umgebung: ["Gebirge", "Arktis"],
    bild: "drakkenheim/wintertroll.png",
    beschreibung: [
      "Seine blau-weiße Haut ist mit Eiszapfen überkrustet, die aus Ellbogen und Knien herausragen und eine Mähne aus Eis um seinen Kopf bilden. Sogar die Zähne des Wesens wirken wie spitze Eiszapfen. Sein Atem, einem kalten Winterwind gleich, ist von Frost und Schnee durchzogen.",
      "Wintertrolle bewohnen hohe Berggipfel auf dem gesamten Kontinent, sind aber besonders zahlreich in den Giantfrost-Bergen, wo sie ihr Gebiet mit ihren erbitterten Rivalen, den Stein- und Frostriesen, teilen. Sie jagen in Rudeln über die Kahle Weite und haben sich einen Teil der Ruinen von Glitter Peak angeeignet. Wintertrolle verlassen selten Schneegebiete.",
      "In den tiefsten Wintermonaten stellen sie eine erhebliche Bedrohung für besiedelte Gebiete dar, wenn sie ihre Berggipfel verlassen, um Nahrung zu suchen. Erleidet ein Wintertroll Feuerschaden, flieht er sofort und sucht einen sicheren Ort zur Erholung."
    ],
    besonderheiten: [
      {
        name: "Regeneration",
        beschreibung: "Der Troll regeneriert zu Beginn jedes seiner Züge 10 Trefferpunkte. Erleidet er Feuerschaden, setzt diese Regeneration bis zum Beginn seines nächsten Zuges aus. Der Troll stirbt nur, wenn er seinen Zug mit 0 Trefferpunkten beginnt und sich nicht regeneriert."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Der Troll führt zwei Schlagangriffe und einen Bissangriff durch. Er kann den Biss durch Gefrierender Atem ersetzen, sofern verfügbar."
      },
      {
        name: "Biss",
        beschreibung: "Nahkampf-Angriffswurf: +7, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W6+4) Stichschaden plus 9 (2W8) Kälteschaden. Das Ziel erhält den Zustand Verlangsamt bis zum Ende des nächsten Zuges des Trolls. Kritischer Treffer: Das Ziel erhält den Zustand Gefroren (Entkommen SG 16)."
      },
      {
        name: "Schlag",
        beschreibung: "Nahkampf-Angriffswurf: +7, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Wuchtschaden plus 9 (2W8) Kälteschaden."
      },
      {
        name: "Gefrierender Atem (Aufladen 5–6)",
        beschreibung: "Konstitutions-Rettungswurf: SG 16 für jede Kreatur in einem 9-Meter-Kegel. Misserfolg: 18 (4W8) Kälteschaden, und das Ziel erhält den Zustand Gefroren (Entkommen SG 16). Erfolg: Nur halber Schaden."
      }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Zelot der Morrigan",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Chaotisch böse",
    cr: 8,
    xp: 3900,
    rk: 14,
    ruestungstyp: null,
    tp: 119,
    tp_wuerfel: "14W8+56",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 20, DEX: 11, CON: 18, INT: 11, WIS: 12, CHA: 12 },
    rettungswuerfe: { STR: 8, GES: 3, KON: 7 },
    fertigkeiten: { "Athletik": 11, "Einschüchtern": 4, "Wahrnehmung": 7, "Überleben": 4 },
    schadensresistenzen: ["Nekrotisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Wald", "Ruinen", "Stadt"],
    bild: "drakkenheim/zelot_der_morrigan.png",
    beschreibung: [
      "Da Morrigan als Schöpferin der ersten Vampire gilt, gibt es unter dem Hof der Nacht jene, die ihr Leib und Seele widmen. Sie betrachten sich als Raubtiere der Spitze – alle anderen Wesen sind ihnen untergeordnet. Die Zeloten Morrigans geloben, gegen Morrigans Feinde zu kämpfen, darunter besonders die Druiden und Diener von Arwyn und Kromac.",
      "Sie geben sich der primitiven Natur ihres Vampirismus hin und sehen die Errungenschaften der Zivilisation als Schandfleck auf der Erde. Sie tun alles, um nahe Siedlungen in vollständige Trümmer zu legen. Berichte über spurlos verschwundene Dörfer deuten oft auf ihre Anwesenheit hin.",
      "Morrigan hat diese Zeloten mit immenser Kraft und Vitalität erfüllt. Das Blut ihrer Feinde umhüllt ihre Wunden wie Bandagen und bildet einen Schutzschild. Der Geruch von vergossenem Blut treibt sie in einen Rausch und reißt sie zu weiterer Wildheit fort."
    ],
    besonderheiten: [
      {
        name: "Blutrausch",
        beschreibung: "Der Vampir hat Vorteil auf Nahkampf-Angriffswürfe gegen eine Kreatur mit dem Zustand Angeschlagen."
      },
      {
        name: "Blutschild",
        beschreibung: "Wenn der Vampir einer Kreatur mit Blut Schaden zufügt, erhält er 15 vorübergehende Trefferpunkte."
      },
      {
        name: "Regeneration",
        beschreibung: "Der Vampir regeneriert zu Beginn jedes seiner Züge 10 Trefferpunkte, sofern er mindestens 1 Trefferpunkt hat und sich nicht im Sonnenlicht oder in fließendem Wasser befindet. Erleidet er Strahlungsschaden oder Schaden durch Weihwasser, setzt diese Regeneration bis zum Beginn seines nächsten Zuges aus."
      },
      {
        name: "Spinnenklettern",
        beschreibung: "Der Vampir kann schwierige Oberflächen erklimmen, einschließlich kopfüber an Decken, ohne einen Fertigkeitswurf ablegen zu müssen."
      },
      {
        name: "Vampirschwächen",
        beschreibung: "Der Vampir hat folgende Schwächen: Fließendes Wasser – Er erleidet 20 Säureschaden, wenn er seinen Zug in fließendem Wasser endet. Sonnenlicht – Er hat Nachteil auf Angriffswürfe und Weisheitswürfe (Wahrnehmung), während er im Sonnenlicht steht, und erleidet 20 Strahlungsschaden, wenn er seinen Zug im Sonnenlicht endet."
      }
    ],
    aktionen: [
      {
        name: "Mehrangriff",
        beschreibung: "Der Vampir führt drei Angriffe durch. Er kann einen dieser Angriffe durch Biss ersetzen."
      },
      {
        name: "Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W4+5) Hiebschaden. Ist das Ziel Mittelgroß oder kleiner, erhält es den Zustand Gepackt (Entkommen SG 21)."
      },
      {
        name: "Biss",
        beschreibung: "Konstitutions-Rettungswurf: SG 16, eine Kreatur innerhalb von 1,5 m, die willig ist oder den Zustand Gepackt, Bewegungsunfähig oder Festgehalten hat. Misserfolg: 15 (3W6+5) Nekrotischer Schaden. Das Trefferpunktmaximum des Ziels wird um den verursachten nekrotischen Schaden verringert, und der Vampir regeneriert Trefferpunkte in gleicher Höhe."
      }
    ],
    bonusaktionen: [
      {
        name: "Morrigans Zorn (1/Kurze Rast)",
        beschreibung: "Der Vampir heult zum Mond und erhält für 1 Minute oder bis er den Zustand Bewegungsunfähig erhält Resistenz gegen alle Schadensarten außer Säure- und Strahlungsschaden. Als Teil dieser Bonusaktion bewegt sich der Vampir bis zur Hälfte seiner Bewegungsrate auf eine feindliche Kreatur zu, ohne Gelegenheitsangriffe auszulösen."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Zerfleischer",
    art: "Konstrukt",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 15,
    xp: 13000,
    rk: 17,
    ruestungstyp: null,
    tp: 287,
    tp_wuerfel: "25W10+150",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 23, DEX: 11, CON: 23, INT: 11, WIS: 15, CHA: 11 },
    rettungswuerfe: { KON: 11, WEI: 7, CHA: 5 },
    fertigkeiten: { "Athletik": 11, "Wahrnehmung": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift", "Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Versteht die Sprachen, die es zu Lebzeiten kannte, spricht aber nicht"],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "drakkenheim/zerfleischer.png",
    beschreibung: [
      "Diese massive Kreatur besteht aus mutierten, zusammengenähten Körperteilen. Das Zusammenfügen der Teile und die gewollten Mutationen haben den ehemaligen Patienten in eine gedankenlose Bestie verwandelt, die fast von ihren eigenen Wucherungen verschluckt wird. Seine überdimensionierten Arme tragen eine große, drehende Knochensäge, die surrend und surrend vorwärtsstampft und Blut und Fleischfetzen durch die Gegend schleudert. Sie trägt eine blutgetränkte chirurgische Schürze und Maske.",
      "Ein Zerfleischer ist das Werk eines wahrhaft wahnsinnigen Apothekers, wenn auch nominell als „Chirurgischer Assistent“ für Sektionen und Obduktionen erschaffen. In Wahrheit dient der Zerfleischer nur als Schlächter, der die grausige Aufgabe übernimmt, Leichen zu zerstückeln und abgetrennte Teile zu sammeln, um frische Materialien für neue Abscheulichkeiten zu liefern. Das Vorhandensein eines Zerfleischers ermöglicht einem Apotheker, mit erschreckender Effizienz zu arbeiten.",
      "Apotheker nähen ihren Zerfleischern allerlei zusätzliche Arme, Hände und Gliedmaßen an, mit denen das Wesen abgetrennte Körperteile sammelt und Versuchspersonen festhält. Der gequälte Geist des Zerfleischers reagiert mit Adrenalin und Blutdurst, sobald er die Angst eines Opfers spürt."
    ],
    besonderheiten: [
      { name: "Zerstückelung", beschreibung: "Kreaturen, die durch Angriffe des Zerfleischers getötet werden, können nur durch einen Auferstehungszauber oder ähnliche Magie wieder zum Leben erweckt werden." },
      { name: "Von Angst zehren", beschreibung: "Erschreckte Kreaturen gelten gegenüber Angriffen des Zerfleischers als Hilflos und Wehrlos: Der Zerfleischer hat Vorteil auf Angriffswürfe gegen sie, und sie haben Nachteil auf Rettungswürfe gegen seine Fähigkeiten." },
      { name: "Schmerzunempfindlich", beschreibung: "Kritische Treffer gegen den Zerfleischer werden zu normalen Treffern." }
    ],
    aktionen: [
      { name: "Wirbelnde Knochensäge", beschreibung: "Nahkampfangriff: +11 auf den Trefferwurf, Reichweite 3 m. Treffer: 20 (4W6+6) Hiebangriff. Dieser Angriff ignoriert Resistenzen und Immunitäten gegen Hiebangriffe. Nach einem Treffer kann der Zerfleischer sofort einen weiteren Wirbelnde Knochensäge-Angriff gegen dasselbe Ziel durchführen. Er setzt diese Angriffskette fort, bis er das Ziel verfehlt." },
      { name: "Gruseliger Auftritt (Aufladen 5–6)", beschreibung: "Weisheitsrettungswurf SG 15 für jede Kreatur, die den Zerfleischer sehen kann. Misserfolg: 14 (4W6) Psychischer Schaden, und das Ziel erhält die Verängstigt-Bedingung (Rettungswurf am Ende des Zuges beendet sie). Solange das Ziel verängstigt ist, wird seine Bewegungsrate 0 und kann nicht erhöht werden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Unaufhaltsames Vorrücken", beschreibung: "Auslöser: Eine Kreatur verursacht Schaden am Zerfleischer. Reaktion: Der Zerfleischer bewegt sich bis zur Hälfte seiner Bewegungsrate auf diese Kreatur zu, ohne Gelegenheitsangriffe zu provozieren. Endet diese Bewegung in Reichweite der Kreatur, hat der Zerfleischer Vorteil auf seinen nächsten Angriffswurf gegen sie." }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Zwitscherer",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 4,
    xp: 1100,
    rk: 14,
    ruestungstyp: null,
    tp: 67,
    tp_wuerfel: "9W8+27",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m" },
    attribute: { STR: 15, DEX: 16, CON: 16, INT: 9, WIS: 12, CHA: 11 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m", "Zittersinn 18 m"],
    passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Grasland", "Ruinen", "Stadt", "Wald"],
    bild: "drakkenheim/zwitscherer.png",
    beschreibung: [
      "An einer Wand hochkletternd ist eine hundegroße Kreatur zu sehen. Sie ähnelt einem weitgehend haarlosen Eichhörnchen – abgesehen von seinem buschigen Schwanz und fleckigen Büscheln scheckigen Fells. Seine Augen sind glasig und milchweiß, und sein Mund wirkt fast menschlich, mit riesigen, perlweißen Zähnen, die wahnsinnig grinsen. Es klettert hektisch aufwärts und klappert dabei mit seinen Zähnen einen wahnsinnig machenden Chor.",
      "Der Königinnenpark-Garten ist eines der am stärksten kontaminierten Gebiete der Stadt. Seine weitläufigen Gärten und Wege waren einst ein Ort üppiger Schönheit, dicht mit Bäumen, Blumenarrangements, meisterhaften Heckenformen, stillen Hainen und einer Fülle von Wildtieren. Die Kontamination Drakkenheims hat alle Dinge verdreht und die Kreaturen darin monströs verändert. Selbst die Eichhörnchen, die die Gärten in großer Zahl bewohnten, sind nun verwildert und mutiert. Wer durch bewaldete Gebiete streift, sollte auf zwitschernde Geräusche achten, die durch die Bäume hallen. Diese Monster greifen in Gruppen an, ihre klackenden Zähne treiben diejenigen in den Wahnsinn, die sich in der Nähe befinden. Die einst freundlichen Eichhörnchen, bei denen die Einheimischen stehenblieben, um sie zu füttern, fressen nun, ob man will oder nicht.",
      "Zwitscherer werden auch entlang der dicht bewaldeten nördlichen Außenbezirke Drakkenheims und vieler umliegender Farmlande angetroffen. Diese Orte sind nicht frei von Kontamination; Zwitscherer wurden wie Rudel verwilderter Hunde durch die Felder streifend oder in der Nähe von Wäldern lauernd gesichtet. Zwitscherer streifen inzwischen gelegentlich durch die Straßen des Stadtzentrums, klettern auf Türme und Gebäude, bevor sie auf ihre Beute hinabspringen. Nicht länger auf die Gärten beschränkt, ist die gesamte Stadt ihr Jagdgebiet, und die Ruinen bieten Rudeln von Zwitscherern wunderbare Heimstätten."
    ],
    besonderheiten: [
      {
        name: "Anlaufsprung",
        beschreibung: "Solange der Zwitscherer sich in seinem Zug mindestens 6 m bewegt hat, hat er einen Hochsprung und Weitsprung von 9 m."
      }
    ],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Zwitscherer führt zwei Geschärfte-Klauen-Angriffe und einen Ätzenden-Biss-Angriff aus. Er kann zudem Zwitschern einsetzen, sofern verfügbar."
      },
      {
        name: "Ätzender Biss",
        beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m. Treffer: 7 (1W8 + 3) Stichschaden plus 14 (4W6) nekrotischer Schaden."
      },
      {
        name: "Geschärfte Klauen",
        beschreibung: "Nahkampf-Angriffswurf: +5, Reichweite 1,5 m. Treffer: 6 (1W6 + 3) Hiebschaden."
      },
      {
        name: "Zwitschern (Aufladen 5–6)",
        beschreibung: "Weisheits-Rettungswurf: SG 13, jede Kreatur innerhalb von 36 m des Zwitscherers, die ihn hören kann. Misserfolg: Das Ziel erhält den Zustand Getaumelt bis zum Ende des nächsten Zuges des Zwitscherers."
      }
    ],
    bonusaktionen: [
      {
        name: "Aggressiv",
        beschreibung: "Der Zwitscherer bewegt sich bis zu seiner Bewegungsrate auf eine feindliche Kreatur zu, die er sehen kann. Wenn er diese Bewegung angrenzend an die Kreatur beendet, hat er bis zum Ende seines Zuges Vorteil auf Angriffswürfe gegen diese Kreatur."
      }
    ],
    reaktionen: [
      {
        name: "Langsamer Fall",
        beschreibung: "Auslöser: Der Zwitscherer erleidet Fallschaden und hat nicht den Zustand Handlungsunfähig. Reaktion: Der auslösende Schaden wird auf 0 reduziert."
      }
    ],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
  {
    name: "Zyklopischer Koloss",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch böse",
    cr: 6,
    xp: 2300,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 85,
    tp_wuerfel: "10W10+30",
    bewegung: { "Gehen": "12 m", "Fliegen (Schweben)": "6 m" },
    attribute: { STR: 21, DEX: 15, CON: 16, INT: 15, WIS: 15, CHA: 13 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Ruinen", "Stadt"],
    bild: "drakkenheim/zyklopischer_koloss.png",
    beschreibung: [
      "Zyklopische Kolosse haben ein einzelnes Auge als Brennpunkt für die in ihrem Körper gespeicherte kontaminierte Energie entwickelt, die sie als vernichtenden Strahl entfesseln. Zudem besitzen sie die einzigartige Fähigkeit, ihr Auge zu schließen und vorübergehend aus ihrer Existenzebene zu verschwinden – sie lösen dabei auf irgendeine Weise einen arkanen Zeitriss mit ihrer fokussierten Magie aus.",
      "Der Zyklopische Koloss ist oft ein brutaler Beschützer für andere Elende. Er nutzt seinen Augenlaser, um Feinde zu einem feinen Delirium-Staub zu zerstreuen, und blinkt dann aus der Existenz heraus, um nach wenigen Augenblicken wieder aufzutauchen und einen verheerenden Strahl aus seinem Auge abzufeuern, bevor er erneut verschwindet. Zyklopische Kolosse kämpfen meist bis zum Ende und fliehen selten."
    ],
    besonderheiten: [],
    aktionen: [
      {
        name: "Mehrfachangriff",
        beschreibung: "Der Zyklopische Koloss führt zwei Schlag-Angriffe aus. Er kann einen davon durch seinen Augenlaser ersetzen."
      },
      {
        name: "Schlag",
        beschreibung: "Nahkampf-Angriffswurf: +8, Reichweite 1,5 m. Treffer: 18 (3W8 + 5) Wuchtschaden."
      },
      {
        name: "Augenlaser",
        beschreibung: "Geschicklichkeits-Rettungswurf: SG 14 für jede Kreatur in einer 18 m langen und 1,5 m breiten Linie. Misserfolg: 18 (4W8) Wuchtschaden. Erfolg: Halber Schaden. Misserfolg oder Erfolg: Wenn das Ziel eine Kreatur ist und dieser Schaden sie auf 0 Trefferpunkte reduziert, zerfällt sie zu einem Haufen feinen Delirium-Staubs."
      }
    ],
    bonusaktionen: [
      {
        name: "Augenzwinkern (Aufladen 4–6)",
        beschreibung: "Der Koloss verschwindet von der Materiellen Ebene und wird in den Raum zwischen den Welten transportiert. Zu Beginn seines nächsten Zuges kehrt er in einem unbesetzten Feld seiner Wahl innerhalb von 3 m des Feldes zurück, von dem aus er verschwunden ist. Wenn kein unbesetztes Feld in diesem Bereich verfügbar ist, erscheint er im nächstgelegenen unbesetzten Feld (zufällig gewählt, wenn mehrere gleich nahe sind)."
      }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Drakkenheim"
  },
];
