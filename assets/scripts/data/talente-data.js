// talente-data.js — Meruria Talente-Kompendium
// Erweiterbar: neues Objekt in das Array einfügen, key muss eindeutig sein.

window.TALENTE_DATA = [
  {
    id: "gewoelbeforscher",
    name: "Gewölbeforscher",
    voraussetzung: null,
    kurzbeschreibung: "Meisterschaft im Aufspüren von Fallen und Geheimtüren in Gewölben.",
    beschreibung: [
      "Du bist versiert im Aufspüren von versteckten Fallen und Geheimtüren, die man in vielen Gewölben findet, und genießt folgende Vorzüge:"
    ],
    vorzuege: [
      "Du bist im Vorteil, wenn du Rettungswürfe ablegst, um Fallen auszuweichen oder ihren Effekten zu widerstehen.",
      "Du bist im Vorteil bei Würfen auf Weisheit (Wahrnehmung) und Intelligenz (Nachforschungen), um Geheimtüren zu finden beziehungsweise wahrzunehmen.",
      "Du besitzt eine Resistenz gegen Schaden, der von Fallen verursacht wird.",
      "Wenn du dich mit Reisetempo fortbewegst, leidest du nicht unter dem −5 Abzug auf deinen passiven Weisheitswert (Wahrnehmung)."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "meisterschaft-schwerer-waffen",
    name: "Meisterschaft schwerer Waffen",
    voraussetzung: null,
    kurzbeschreibung: "Nutze das Gewicht deiner Waffe, um verheerende Hiebe zu landen.",
    beschreibung: [
      "Du hast gelernt, das Gewicht von Waffen zu deinem Vorteil zu nutzen, wodurch die Wucht deiner Hiebe verstärkt wird. Du erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Wenn du in deinem Zug einen kritischen Treffer mit einer Nahkampfwaffe erzielst oder eine Kreatur mit einer Nahkampfwaffe auf 0 Trefferpunkte reduzierst, kannst du deine Bonusaktion aufwenden, um einen weiteren Nahkampfangriff durchzuführen.",
      "Bevor du einen Nahkampfangriff mit einer schweren Waffe ausführst, in deren Umgang du geübt bist, kannst du dich dazu entscheiden, einen Malus von −5 auf den Angriffswurf hinzunehmen, um den verursachten Schaden bei einem Treffer um 10 zu erhöhen."
    ],
    kategorie: "Kampf"
  },
  {
    id: "scharfer-verstand",
    name: "Scharfer Verstand",
    voraussetzung: null,
    kurzbeschreibung: "Außergewöhnliches Gedächtnis für Zeiten, Richtungen und Einzelheiten.",
    beschreibung: [
      "Du bist außergewöhnlich gut darin, dir Zeiten, Richtungen und Einzelheiten einzuprägen, und erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Intelligenz um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du weißt immer, wo Norden ist.",
      "Du weißt immer, wie viele Stunden es zum nächsten Sonnenauf- oder -untergang sind.",
      "Du kannst dich genau an alles erinnern, was du im vergangenen Monat gesehen oder gehört hast."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "abgesandter-der-luefte",
    name: "Abgesandter der Lüfte",
    voraussetzung: "Luft-Genasi",
    kurzbeschreibung: "Nutze die Schnelligkeit des Windes, um deine Bewegungen zu lenken.",
    beschreibung: [
      "Du hast erlernt, die Schnelligkeit des Windes zum Lenken deiner Bewegungen zu nutzen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Deine Bewegungsrate erhöht sich um 1,5 m.",
      "Wenn du von einem Angriff getroffen wirst, kannst du deine Reaktion nutzen, um deinen Körper in Wind zu verwandeln und sofort in einem unbesetzten Feld innerhalb von 9 m wieder aufzutauchen, wodurch der Angriff verfehlt. Du kannst diese Fähigkeit nach einer kurzen oder langen Rast wieder einsetzen."
    ],
    kategorie: "Rasse"
  },
  {
    id: "beruehrung-von-sessinek",
    name: "Berührung von Sess'inek",
    voraussetzung: "Echsenmenschen",
    kurzbeschreibung: "Der dämonische Gott der Echsen hat dich mit dämonenhafter Energie ausgestattet.",
    beschreibung: [
      "Der dämonische Gott der Echsen hat dich mit dämonenhafter Energie ausgestattet. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du lernst, Infernalisch zu sprechen, zu lesen und zu schreiben. Wenn du Infernalisch bereits kennst, lernst du eine andere Sprache deiner Wahl.",
      "Du erlangst Immunität gegen den Zustand verängstigt.",
      "Du erhältst Widerstand gegen Feuer- und Giftschaden.",
      "Du erhältst einen Vorteil bei Rettungswürfen gegen Vergiftung."
    ],
    kategorie: "Rasse"
  },
  {
    id: "armbrustexperte",
    name: "Armbrustexperte",
    voraussetzung: null,
    kurzbeschreibung: "Meisterschaft im Umgang mit Armbrüsten, auch auf engstem Raum.",
    beschreibung: [
      "Dank ausgiebiger Übung mit der Armbrust kannst du folgende Vorzüge genießen:"
    ],
    vorzuege: [
      "Du ignorierst die Eigenschaft Laden von Armbrüsten, mit denen du geübt bist.",
      "Du erleidest keinen Nachteil auf Fernkampfangriffe, wenn sich eine feindliche Kreatur innerhalb von 1,5 m von dir befindet.",
      "Wenn du die Angriffsaktion ausführst und dabei eine einhändige Waffe verwendest, kannst du deine Bonusaktion nutzen, um mit einer Handarmbrust einen zusätzlichen Angriff durchzuführen."
    ],
    kategorie: "Kampf"
  },
  {
    id: "athlet",
    name: "Athlet",
    voraussetzung: null,
    kurzbeschreibung: "Außergewöhnliche körperliche Fähigkeiten für Klettern, Springen und schnelles Aufstehen.",
    beschreibung: [
      "Du hast umfangreiche körperliche Übungen absolviert und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deinen Stärke- oder Geschicklichkeitswert um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Wenn du am Boden liegst, kostet dich das Aufstehen nur noch 1,5 m deiner Bewegung.",
      "Klettern kostet dich keine zusätzliche Bewegung.",
      "Du kannst einen weiten Sprung oder hohen Sprung ausführen, nachdem du dich nur 1,5 m weit fortbewegt hast anstatt der üblichen 3 m."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "aufmerksam",
    name: "Aufmerksam",
    voraussetzung: null,
    kurzbeschreibung: "Gesteigerte Wahrnehmung, Lippenlesen und schärfere passive Sinne.",
    beschreibung: [
      "Du bist stets auf der Hut für Gefahren in deiner Umgebung und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deinen Intelligenz- oder Weisheitswert um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du kannst Lippen lesen und verstehst den Inhalt einer Unterhaltung, die du sehen, aber nicht hören kannst, wenn du die verwendete Sprache kennst und die Sprechenden klar zu sehen sind.",
      "Du erhältst einen Bonus von +5 auf deinen passiven Weisheitswert (Wahrnehmung) und deinen passiven Intelligenzwert (Nachforschungen)."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "begabt",
    name: "Begabt",
    voraussetzung: null,
    kurzbeschreibung: "Erlange Übung in einer beliebigen Kombination aus drei Fertigkeiten und Werkzeugen.",
    beschreibung: [
      "Du bist talentiert und vielseitig ausgebildet. Du erhältst den folgenden Vorzug:"
    ],
    vorzuege: [
      "Du erlangst Übung in einer beliebigen Kombination aus drei Fertigkeiten oder Werkzeugen deiner Wahl."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "belastbar",
    name: "Belastbar",
    voraussetzung: null,
    kurzbeschreibung: "Stärke einen Attributswert und erlange Übung in dem zugehörigen Rettungswurf.",
    beschreibung: [
      "Du bist in einem Bereich besonders widerstandsfähig und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe einen Attributswert deiner Wahl um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du erlangst Übung in Rettungswürfen mit dem gewählten Attribut."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "berittener-kampf",
    name: "Berittener Kampf",
    voraussetzung: null,
    kurzbeschreibung: "Meisterschaft im Kampf zu Pferde, schützend für dein Reittier.",
    beschreibung: [
      "Du bist ein erfahrener Reiter und erhältst im Kampf zu Pferde die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Du bist im Vorteil bei Nahkampfangriffswürfen gegen eine unbewaffnete oder nicht berittene Kreatur, die kleiner als dein Reittier ist.",
      "Wenn ein Angriff, der auf dein Reittier zielt, einen Treffer erzielen würde, kannst du stattdessen dich selbst als Ziel des Angriffs bestimmen.",
      "Wenn dein Reittier einem Effekt unterworfen ist, bei dem ein erfolgreicher Geschicklichkeitsrettungswurf den Schaden halbiert, erleidet es bei einem erfolgreichen Rettungswurf keinen Schaden und bei einem misslungenen Rettungswurf nur den halben Schaden."
    ],
    kategorie: "Kampf"
  },
  {
    id: "defensiver-duellant",
    name: "Defensiver Duellant",
    voraussetzung: "Geschicklichkeit 13 oder höher",
    kurzbeschreibung: "Nutze deine Reaktion, um deine Verteidigung mit einer Finesse-Waffe zu stärken.",
    beschreibung: [
      "Du bist im Umgang mit Klingen versiert und kannst dich mit ihrer Hilfe verteidigen. Du erhältst den folgenden Vorzug:"
    ],
    vorzuege: [
      "Wenn du eine Waffe mit der Eigenschaft Finesse hältst und mit der du geübt bist, und eine andere Kreatur dich mit einem Nahkampfangriff trifft, kannst du deine Reaktion einsetzen, um deinen Rüstungsklassewert um deinen Übungsbonus zu erhöhen und den auslösenden Angriff möglicherweise verfehlen zu lassen."
    ],
    kategorie: "Kampf"
  },
  {
    id: "eingeweihter-der-magie",
    name: "Eingeweihter der Magie",
    voraussetzung: null,
    kurzbeschreibung: "Erlerne Zaubertricks und einen Zauber aus einer fremden Klassenliste.",
    beschreibung: [
      "Du hast von einem Mitglied einer magischen Klasse gelernt oder eigene Studien betrieben und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Du erlernst zwei Zaubertricks deiner Wahl aus der Zauberliste einer Klasse deiner Wahl.",
      "Du erlernst außerdem einen Zauber des 1. Grades deiner Wahl aus derselben Klassenliste. Du kannst diesen Zauber einmal einsetzen, ohne einen Zauberplatz dafür aufwenden zu müssen. Nach einer langen Rast steht dir dieser Zauber wieder zur Verfügung.",
      "Dein Zauberattribut für diese Zauber ist Intelligenz, Weisheit oder Charisma — je nachdem welche Klasse du gewählt hast (Zauberer: Intelligenz; Kleriker oder Druide: Weisheit; Barde, Hexenmeister oder Paladin: Charisma)."
    ],
    kategorie: "Magie"
  },
  {
    id: "elementarer-adept",
    name: "Elementarer Adept",
    voraussetzung: "Fähigkeit, mindestens einen Zauber zu wirken",
    kurzbeschreibung: "Lass deine Zauber Resistenzen einer gewählten Schadensart ignorieren.",
    beschreibung: [
      "Wähle eine der folgenden Schadensarten: Feuer, Kälte, Blitz, Säure oder Schall. Du erhältst folgende Vorteile:",
      "Dieses Talent kann mehrfach gewählt werden, muss jedoch jedes Mal eine andere Schadensart betreffen."
    ],
    vorzuege: [
      "Deine Zauber ignorieren Resistenzen der gewählten Schadensart.",
      "Bei Zaubern, die die entsprechende Schadensart verursachen, darfst du jede gewürfelte 1 beim Schadenswurf wie eine 2 behandeln."
    ],
    kategorie: "Magie"
  },
  {
    id: "glueckspilz",
    name: "Glückspilz",
    voraussetzung: null,
    kurzbeschreibung: "Drei Glückspunkte erlauben es dir, Würfe im richtigen Moment zu beeinflussen.",
    beschreibung: [
      "Du hast ausgesprochenes Glück, und das immer im richtigen Moment. Mit diesem Talent verfügst du über drei Glückspunkte, die nach einer langen Rast wieder aufgefrischt werden."
    ],
    vorzuege: [
      "Immer wenn du einen Angriffs-, Attributs- oder Rettungswurf ablegst, kannst du einen Glückspunkt verbrauchen, um einen zusätzlichen W20 zu würfeln. Suche dir aus, welches Ergebnis der beiden W20 verwendet werden soll. Du kannst den Glückspunkt erst nach dem Würfeln einsetzen, musst es jedoch tun, bevor die Auswirkungen in Kraft treten.",
      "Außerdem kannst du einen Glückspunkt aufwenden, wenn ein Angriffswurf gegen dich ausgeführt wird. Würfle einen W20 und wähle, ob dein Ergebnis oder das des Angreifers für den Angriffswurf verwendet wird.",
      "Wenn mehr als eine Kreatur Glückspunkte einsetzt, um denselben Wurf zu beeinflussen, heben sie sich gegenseitig auf — es wird kein zusätzlicher Würfel geworfen."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "heiler",
    name: "Heiler",
    voraussetzung: null,
    kurzbeschreibung: "Behandle Wunden schnell und halte Verbündete mit deiner Heilerausrüstung kampfbereit.",
    beschreibung: [
      "Du bist ein fähiger Mediziner, was dir erlaubt, Wunden rasch zu behandeln und deine Verbündeten schnell wieder kampfbereit zu machen. Du erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Wenn du eine Heilerausrüstung einsetzt, um eine sterbende Kreatur zu stabilisieren, erhält sie zusätzlich 1 Trefferpunkt zurück.",
      "Als Aktion kannst du eine Anwendung der Heilerausrüstung aufbrauchen, um eine Kreatur zu behandeln und bei ihr 1W6 + 4 Trefferpunkte wiederherzustellen, zuzüglich so vieler Trefferpunkte, wie es ihrer maximalen Anzahl an Trefferwürfeln entspricht. Die Kreatur kann erst erneut mit diesem Talent geheilt werden, nachdem sie eine kurze oder lange Rast beendet hat."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "inspirierender-anfuehrer",
    name: "Inspirierender Anführer",
    voraussetzung: "Charisma 13 oder höher",
    kurzbeschreibung: "Stärke bis zu sechs Verbündeten durch eine kurze Ansprache den Kampfgeist.",
    beschreibung: [
      "Verbringst du 10 Minuten damit, deine Kameraden zu inspirieren, kannst du ihre Entschlossenheit zu kämpfen stärken. Du erhältst den folgenden Vorzug:"
    ],
    vorzuege: [
      "Wähle bis zu sechs verbündete Kreaturen (du darfst auch dich selbst bestimmen), die sich innerhalb von 9 m befinden, dich hören oder sehen können und dich verstehen. Jede dieser Kreaturen erhält temporäre Trefferpunkte in Höhe deiner Stufe + deines Charismamodifikators. Eine Kreatur kann durch dieses Talent erst wieder temporäre Trefferpunkte erhalten, wenn sie eine kurze oder lange Rast beendet hat."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "kampferprobter-zauberwirker",
    name: "Kampferprobter Zauberwirker",
    voraussetzung: "Fähigkeit, mindestens einen Zauber zu wirken",
    kurzbeschreibung: "Wirke Zauber auch mitten im Kampf ohne Abzüge auf Konzentration oder Bewegungsfreiheit.",
    beschreibung: [
      "Du hast trainiert, Zauber mitten im Kampf zu wirken, wodurch du Techniken erlernt hast, die dir folgende Vorzüge gewähren:"
    ],
    vorzuege: [
      "Du bist bei Konstitutionsrettungswürfen im Vorteil, um beim Erleiden von Schaden nicht die Konzentration auf einen Zauber zu verlieren.",
      "Du kannst die Gestenkomponenten von Zaubern auch dann ausführen, wenn du eine Waffe oder einen Schild in einer oder beiden Händen hältst.",
      "Provoziert die Bewegung einer feindlichen Kreatur einen Gelegenheitsangriff von dir, kannst du als Reaktion einen Zauber auf die Kreatur wirken, anstatt einen Angriff auszuführen. Der Zauber muss einen Zeitaufwand von einer Aktion haben und darf nur diese Kreatur als Ziel haben."
    ],
    kategorie: "Magie"
  },
  {
    id: "kneipenschlaeger",
    name: "Kneipenschläger",
    voraussetzung: null,
    kurzbeschreibung: "Kämpfe mit improvisierten Waffen und nutze Treffer zum Ringen.",
    beschreibung: [
      "Du bist an Raufereien gewöhnt und fähig, mit allem zu kämpfen, was dir gerade in die Finger kommt. Du erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Stärke oder Konstitution um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du bist geübt im Umgang mit improvisierten Waffen.",
      "Deine waffenlosen Schläge verursachen 1W4 Schaden.",
      "Wenn du eine Kreatur in deinem Zug mit einer improvisierten Waffe oder einem waffenlosen Schlag triffst, kannst du deine Bonusaktion für den Versuch verwenden, mit dem Ziel zu ringen."
    ],
    kategorie: "Kampf"
  },
  {
    id: "leichtfuessig",
    name: "Leichtfüßig",
    voraussetzung: null,
    kurzbeschreibung: "Höhere Bewegungsrate und kein Gelegenheitsangriff nach Nahkampfattacken.",
    beschreibung: [
      "Du bist außergewöhnlich schnell und agil, was dir die folgenden Vorzüge verleiht:"
    ],
    vorzuege: [
      "Deine Bewegungsrate erhöht sich um 3 m.",
      "Wenn du die Rennenaktion nutzt, kostet dich schwieriges Gelände in dieser Runde keine zusätzliche Bewegungsrate.",
      "Führst du einen Nahkampfangriff gegen eine Kreatur aus, provozierst du für den Rest des Zuges von dieser keinen Gelegenheitsangriff, ob du triffst oder nicht."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "leicht-geruestet",
    name: "Leicht gerüstet",
    voraussetzung: null,
    kurzbeschreibung: "Erlange Übung im Umgang mit leichten Rüstungen.",
    beschreibung: [
      "Du hast trainiert, in leichten Rüstungen zu kämpfen, und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Stärke oder Geschicklichkeit um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du bist geübt im Umgang mit leichten Rüstungen."
    ],
    kategorie: "Kampf"
  },
  {
    id: "linguist",
    name: "Linguist",
    voraussetzung: null,
    kurzbeschreibung: "Lerne drei Sprachen und entwirf eigene Geheimschriften.",
    beschreibung: [
      "Du hast Sprachen und Geheimschriften studiert, wodurch du diese Vorzüge erhältst:"
    ],
    vorzuege: [
      "Erhöhe deine Intelligenz um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du erlernst drei Sprachen deiner Wahl.",
      "Du bist in der Lage, Geheimschriften zu entwerfen. Andere können deine Geheimschriften nicht entziffern, bis du es ihnen beigebracht hast, sie einen Intelligenzwurf bestehen (SG = dein Intelligenzwert + dein Übungsbonus) oder Magie anwenden, um die Schrift zu entschlüsseln."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "magiertoeter",
    name: "Magiertöter",
    voraussetzung: null,
    kurzbeschreibung: "Störe und bestrafe Zauberwirker im Nahkampf mit Reaktionsangriffen.",
    beschreibung: [
      "Du hast Techniken erlernt, die im Nahkampf gegen Zauberwirker hilfreich sind, und erhältst dadurch folgende Vorzüge:"
    ],
    vorzuege: [
      "Wenn eine Kreatur innerhalb von 1,50 m einen Zauber wirkt, kannst du deine Reaktion nutzen, um einen Nahkampf-Waffenangriff gegen diese Kreatur auszuführen.",
      "Kreaturen, die sich auf Zauber konzentrieren, sind beim Rettungswurf zum Aufrechterhalten der Konzentration im Nachteil, wenn du ihnen Schaden zufügst.",
      "Du bist im Vorteil bei Rettungswürfen gegen Zaubersprüche, die von Kreaturen innerhalb von 1,50 m gewirkt werden."
    ],
    kategorie: "Kampf"
  },
  {
    id: "meister-der-kampfkunst",
    name: "Meister der Kampfkunst",
    voraussetzung: null,
    kurzbeschreibung: "Lerne zwei Kampfmanöver des Kampfmeisters und erhalte einen Überlegenheitswürfel.",
    beschreibung: [
      "Du hast ein intensives Kampftraining absolviert, das dir erlaubt, spezielle Kampfmanöver auszuführen. Du erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Du lernst zwei Manöver deiner Wahl, die dem Kampfmeister-Archetypen der Kämpferklasse zur Verfügung stehen.",
      "Wenn das Kampfmanöver, das du anwendest, vom Ziel einen Rettungswurf verlangt, um Effekten des Manövers zu widerstehen, ist der SG des Rettungswurfs gleich 8 + deinem Übungsbonus + deinem Stärke- oder Geschicklichkeitsmodifikator (deine Wahl).",
      "Du erhältst einen Überlegenheitswürfel (W6). Besitzt du bereits Überlegenheitswürfel, wird dieser hinzugefügt. Der Würfel gilt nach der Anwendung als verbraucht und steht dir nach einer kurzen oder langen Rast wieder zur Verfügung."
    ],
    kategorie: "Kampf"
  },
  {
    id: "meister-der-mittelschweren-ruestungen",
    name: "Meister der mittelschweren Rüstungen",
    voraussetzung: "geübt im Umgang mit mittelschweren Rüstungen",
    kurzbeschreibung: "Kämpfe lautlos in mittelschwerer Rüstung und nutze hohe Geschicklichkeit voll aus.",
    beschreibung: [
      "Du hast den Kampf in mittelschweren Rüstungen gemeistert und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Du bist durch das Tragen von mittelschweren Rüstungen bei Würfen auf Geschicklichkeit (Heimlichkeit) nicht im Nachteil.",
      "Wenn du eine mittelschwere Rüstung trägst und eine Geschicklichkeit von 16 oder höher besitzt, darfst du 3 Punkte anstatt 2 auf deine Rüstungsklasse addieren."
    ],
    kategorie: "Kampf"
  },
  {
    id: "meister-der-schweren-ruestungen",
    name: "Meister der schweren Rüstungen",
    voraussetzung: "geübt im Umgang mit schweren Rüstungen",
    kurzbeschreibung: "Reduziere physischen Schaden nicht-magischer Waffen beim Tragen schwerer Rüstungen.",
    beschreibung: [
      "Du hast den Kampf in schweren Rüstungen gemeistert und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Stärke um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Solange du schwere Rüstungen trägst, wird der Hieb-, Stich- oder Wuchtschaden nicht-magischer Waffen um 3 Punkte reduziert."
    ],
    kategorie: "Kampf"
  },
  {
    id: "mittelschwer-geruestet",
    name: "Mittelschwer gerüstet",
    voraussetzung: "geübt im Umgang mit leichten Rüstungen",
    kurzbeschreibung: "Erlange Übung mit mittelschweren Rüstungen und Schilden.",
    beschreibung: [
      "Du hast trainiert, in mittelschweren Rüstungen und mit Schilden zu kämpfen, und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Stärke oder Geschicklichkeit um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du bist im Umgang mit mittelschweren Rüstungen und Schilden geübt."
    ],
    kategorie: "Kampf"
  },
  {
    id: "ringer",
    name: "Ringer",
    voraussetzung: "Stärke 13 oder höher",
    kurzbeschreibung: "Setze gepackte Gegner fest und greife sie im Vorteil an.",
    beschreibung: [
      "Du hast dir beigebracht, dich im Ringkampf durchzusetzen, wodurch du die folgenden Vorzüge erhältst:"
    ],
    vorzuege: [
      "Du bist bei Angriffswürfen gegen Kreaturen im Vorteil, die du gepackt hast.",
      "Du kannst deine Aktion dazu verwenden, eine Kreatur, die du gepackt hast, festzusetzen. Lege dazu einen zweiten Ringkampfwurf ab. Wenn dieser erfolgreich ist, erhaltet ihr beide den Zustand festgesetzt, bis der Zustand gepackt endet."
    ],
    kategorie: "Kampf"
  },
  {
    id: "ritualwirker",
    name: "Ritualwirker",
    voraussetzung: "Intelligenz oder Weisheit 13 oder höher",
    kurzbeschreibung: "Wirke Ritualzauber aus einem eigenen Ritualbuch, ohne Zauberplätze aufzuwenden.",
    beschreibung: [
      "Du hast dir eine Reihe von Zaubern angeeignet, die du als Rituale wirken kannst. Diese Zauber werden in einem Ritualbuch niedergeschrieben, das du in der Hand halten musst, während du eines dieser Rituale ausführst."
    ],
    vorzuege: [
      "Wenn du dieses Talent wählst, erhältst du ein Ritualbuch mit zwei Zaubern des 1. Grades deiner Wahl. Entscheide dich für eine Klasse: Barde, Druide, Kleriker, Magier, Hexenmeister oder Zauberer. Die zwei Zauber müssen aus der Spruchliste dieser Klasse stammen und als Ritual gekennzeichnet sein. Die Klasse bestimmt das Zauberattribut: Charisma (Barde, Hexenmeister, Zauberer), Weisheit (Druide, Kleriker) oder Intelligenz (Magier).",
      "Findest du einen als Ritual gekennzeichneten Zauber der gewählten Klassenliste in geschriebener Form, kannst du ihn in dein Ritualbuch übertragen. Sein Grad darf nicht mehr als die Hälfte deiner Stufe (aufgerundet) betragen. Der Vorgang dauert 2 Stunden pro Grad und kostet 50 GM pro Grad (für Materialkomponenten und spezielle Tinte)."
    ],
    kategorie: "Magie"
  },
  {
    id: "scharfschuetze",
    name: "Scharfschütze",
    voraussetzung: null,
    kurzbeschreibung: "Ignoriere Deckung und schieße über die normale Reichweite ohne Nachteil.",
    beschreibung: [
      "Du bist ein Meister im Fernkampf und kannst Schüsse ausführen, die anderen unmöglich sind. Du erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Du bist beim Angriffswurf nicht im Nachteil, wenn du ein Ziel angreifst, das sich weiter entfernt befindet als die Grundreichweite deiner Waffe.",
      "Deine Fernkampfangriffe ignorieren Teil- und Dreivierteldeckung.",
      "Bevor du einen Angriff mit einer Fernkampfwaffe ausführst, in deren Umgang du geübt bist, kannst du dich entscheiden, einen Malus von −5 auf den Angriffswurf hinzunehmen, um den verursachten Schaden bei einem Treffer um 10 zu erhöhen."
    ],
    kategorie: "Kampf"
  },
  {
    id: "schauspieler",
    name: "Schauspieler",
    voraussetzung: null,
    kurzbeschreibung: "Imitiere Stimmen täuschend echt und verkleidet dich mit Vorteil.",
    beschreibung: [
      "Da du äußerst bewandert in den Künsten der Nachahmung und der Darstellung bist, erhältst du die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe dein Charisma um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du bist bei Würfen auf Charisma (Täuschen) und Charisma (Auftreten) im Vorteil, wenn du dich als eine andere Person ausgeben willst.",
      "Du bist in der Lage, die Stimme einer anderen Person oder die Laute einer Kreatur nahezu perfekt nachzuahmen. Dazu musst du dem Ziel mindestens 1 Minute lang zugehört haben. Ein erfolgreicher Weisheitswurf (Motiv erkennen) gegen deinen Wurf auf Charisma (Täuschen) lässt den Zuhörer die Täuschung bemerken."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "schildmeister",
    name: "Schildmeister",
    voraussetzung: null,
    kurzbeschreibung: "Nutze deinen Schild offensiv und defensiv, auch gegen Zaubereffekte.",
    beschreibung: [
      "Du hast gelernt, Schilde nicht nur zur Verteidigung, sondern auch zum Angriff zu nutzen. Du erhältst die folgenden Vorzüge, solange du einen Schild führst:"
    ],
    vorzuege: [
      "Wenn du in deinem Zug die Angriffsaktion wählst, kannst du deine Bonusaktion dazu verwenden, eine Kreatur innerhalb von 1,50 m mit deinem Schild zurückzustoßen.",
      "Solange du nicht kampfunfähig bist, kannst du den Rüstungsklassebonus deines Schildes zu jedem Geschicklichkeitsrettungswurf addieren, den du aufgrund eines Zaubereffekts oder einer anderen schädlichen Quelle ablegen musst, sofern dieser Effekt nur dich betrifft.",
      "Wirst du von einem Effekt betroffen, der dir erlaubt, durch einen erfolgreichen Geschicklichkeitsrettungswurf nur den halben Schaden zu nehmen, kannst du deine Reaktion aufwenden, um bei einem gelungenen Rettungswurf keinen Schaden zu erleiden."
    ],
    kategorie: "Kampf"
  },
  {
    id: "schleicher",
    name: "Schleicher",
    voraussetzung: "Geschicklichkeit 13 oder höher",
    kurzbeschreibung: "Verstecke dich in dämmrigem Licht und verrate deine Position nicht durch verfehlte Schüsse.",
    beschreibung: [
      "Du bist ein Experte darin, durch die Schatten zu schleichen, und erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Du kannst versuchen, dich zu verstecken, auch wenn du nur leicht verschleiert bist.",
      "Wenn du vor einer Kreatur versteckt bist und mit einem Fernkampfangriff verfehlst, offenbart der Angriff nicht deine Position.",
      "Dämmriges Licht sorgt nicht dafür, dass du bei Würfen auf Weisheit (Wahrnehmung) im Nachteil bist, wenn sie von Sicht abhängen."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "schwer-gepanzert",
    name: "Schwer gepanzert",
    voraussetzung: "geübt im Umgang mit mittelschweren Rüstungen",
    kurzbeschreibung: "Erlange Übung im Umgang mit schweren Rüstungen.",
    beschreibung: [
      "Du hast trainiert, in schweren Rüstungen zu kämpfen, und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Stärke um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du bist geübt im Umgang mit schweren Rüstungen."
    ],
    kategorie: "Kampf"
  },
  {
    id: "stangenwaffenmeister",
    name: "Stangenwaffenmeister",
    voraussetzung: null,
    kurzbeschreibung: "Führe Bonusangriffe mit dem Waffenende und halte Feinde auf Distanz.",
    beschreibung: [
      "Du bist versiert im Kampf mit Stangenwaffen und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Wenn du die Angriffsaktion wählst und nur mit einer Glefe, Hellebarde, einem Kampfstab oder einem Speer angreifst, kannst du deine Bonusaktion aufwenden, um einen weiteren Angriff mit dem anderen Ende der Waffe auszuführen. Dieser Angriff verwendet denselben Attributsmodifikator wie der erste und verursacht 1W4 Wuchtschaden.",
      "Solange du eine Glefe, Hellebarde, Pike, einen Kampfstab oder einen Speer führst, provozieren andere Kreaturen einen Gelegenheitsangriff durch dich, wenn sie sich in Reichweite der Waffe begeben."
    ],
    kategorie: "Kampf"
  },
  {
    id: "stuermer",
    name: "Stürmer",
    voraussetzung: null,
    kurzbeschreibung: "Nutze die Rennaktion für kraftvolle Bonusangriffe oder Stöße.",
    beschreibung: [
      "Du erhältst den folgenden Vorzug:"
    ],
    vorzuege: [
      "Wenn du deine Aktion verwendest, um zu spurten, kannst du als Bonusaktion einen Nahkampfangriff ausführen oder eine Kreatur wegstoßen. Hast du vor dieser Bonusaktion mindestens 3 m in einer geraden Linie zurückgelegt, erhältst du entweder einen Bonus von +5 auf den Schadenswurf (wenn du den Nahkampfangriff gewählt hast und triffst) oder du stößt das Ziel bis zu 3 m von dir weg (wenn du dich entschieden hast, den Gegner wegzustoßen, und erfolgreich bist)."
    ],
    kategorie: "Kampf"
  },
  {
    id: "wachsam",
    name: "Wachsam",
    voraussetzung: null,
    kurzbeschreibung: "+5 auf Initiative, kein Überraschungsangriff, keine versteckten Angreifer im Vorteil.",
    beschreibung: [
      "Du hältst immer Ausschau nach Gefahren und erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Du erhältst einen Bonus von +5 auf Initiative.",
      "Du kannst nicht überrascht werden, solange du bei Bewusstsein bist.",
      "Kreaturen, die du nicht sehen kannst, sind nicht im Vorteil bei Angriffswürfen gegen dich."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "waechter",
    name: "Wächter",
    voraussetzung: null,
    kurzbeschreibung: "Stoppe Flüchtige, bestrafe Rückzüge und reagiere auf Angriffe gegen Verbündete.",
    beschreibung: [
      "Du hast die Technik gemeistert, jegliche Lücke in der Verteidigung deines Gegners zu nutzen, und erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Wenn du eine Kreatur mit einem Gelegenheitsangriff triffst, wird die Bewegungsrate der Kreatur für den restlichen Zug auf 0 reduziert.",
      "Kreaturen provozieren Gelegenheitsangriffe durch dich, obwohl sie die Aktion Rückzug gewählt haben, bevor sie deine Reichweite verlassen.",
      "Wenn eine Kreatur innerhalb von 1,50 m ein anderes Ziel als dich angreift (und das Ziel dieses Talent nicht besitzt), kannst du deine Reaktion aufwenden, um einen Nahkampf-Waffenangriff gegen diese Kreatur auszuführen."
    ],
    kategorie: "Kampf"
  },
  {
    id: "waffenmeister",
    name: "Waffenmeister",
    voraussetzung: null,
    kurzbeschreibung: "Erlange Übung mit vier Waffen deiner Wahl.",
    beschreibung: [
      "Du hast ausgiebig mit einer Vielzahl an Waffen geübt und erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Stärke oder Geschicklichkeit um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du bist geübt im Umgang mit vier Waffen deiner Wahl. Jede muss eine einfache Waffe oder eine Kriegswaffe sein."
    ],
    kategorie: "Kampf"
  },
  {
    id: "widerstandsfaehig",
    name: "Widerstandsfähig",
    voraussetzung: null,
    kurzbeschreibung: "Höhere Konstitution und garantierte Mindestheilung beim Einsatz von Trefferwürfeln.",
    beschreibung: [
      "Du bist hartgesotten und standhaft, wodurch du folgende Vorzüge erhältst:"
    ],
    vorzuege: [
      "Erhöhe deine Konstitution um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Wenn du mit einem Trefferwürfel Trefferpunkte regenerierst, erhältst du minimal immer so viele Trefferpunkte, wie es dem Doppelten deines Konstitutionsmodifikators entspricht (mindestens 2)."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "wilder-angreifer",
    name: "Wilder Angreifer",
    voraussetzung: null,
    kurzbeschreibung: "Würfle Nahkampfschaden einmal pro Zug doppelt und nimm das bessere Ergebnis.",
    beschreibung: [
      "Du erhältst den folgenden Vorzug:"
    ],
    vorzuege: [
      "Einmal pro Zug darfst du bei einem erfolgreichen Nahkampf-Waffenangriff den Schaden ein zweites Mal auswürfeln und wählen, welches Ergebnis angewendet wird."
    ],
    kategorie: "Kampf"
  },
  {
    id: "zaeh",
    name: "Zäh",
    voraussetzung: null,
    kurzbeschreibung: "Erhöhe dein Trefferpunktemaximum sofort und bei jedem weiteren Stufenaufstieg.",
    beschreibung: [
      "Du bist zäh wie Leder. Du erhältst den folgenden Vorzug:"
    ],
    vorzuege: [
      "Mit der Wahl dieses Talents erhöht sich dein Trefferpunktemaximum einmalig um das Doppelte deiner Stufe. Immer wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um weitere 2 Punkte."
    ],
    kategorie: "Allgemein"
  },
  {
    id: "zielgenauer-zauberschuetze",
    name: "Zielgenauer Zauberschütze",
    voraussetzung: "Fähigkeit, mindestens einen Zauber zu wirken",
    kurzbeschreibung: "Verdopple Zaubreichweiten, ignoriere Deckung und lerne einen Angriffszaubertrick.",
    beschreibung: [
      "Du hast Techniken gelernt, um die Angriffe mit bestimmten Zaubern zu verbessern, wodurch du die folgenden Vorzüge erhältst:"
    ],
    vorzuege: [
      "Wenn du einen Zauber wirkst, der einen Angriffswurf verlangt, wird dessen Reichweite verdoppelt.",
      "Deine Angriffszauber ignorieren Teil- und Dreivierteldeckung.",
      "Du lernst einen Zaubertrick, der einen Angriffswurf erfordert. Wähle einen Zaubertrick aus der Spruchliste des Barden, Druiden, Klerikers, Magiers, Hexenmeisters oder Zauberers. Dein Zauberattribut hängt von der gewählten Spruchliste ab: Charisma (Barde, Hexenmeister, Zauberer), Weisheit (Druide, Kleriker) oder Intelligenz (Magier)."
    ],
    kategorie: "Magie"
  },
  {
    id: "zwei-waffen-kaempfer",
    name: "Zwei-Waffen-Kämpfer",
    voraussetzung: null,
    kurzbeschreibung: "Kämpfe mit zwei nicht-leichten Waffen und erhalte einen Rüstungsklassebonus.",
    beschreibung: [
      "Du hast die Kunst gemeistert, mit zwei Waffen gleichzeitig zu kämpfen, und genießt folgende Vorzüge:"
    ],
    vorzuege: [
      "Du erhältst einen Bonus von +1 auf deine Rüstungsklasse, wenn du in beiden Händen je eine Nahkampfwaffe führst.",
      "Du kannst mit zwei Waffen kämpfen, auch wenn die einhändigen Nahkampfwaffen, die du führst, nicht leicht sind.",
      "Du kannst gleichzeitig zwei einhändige Waffen ziehen beziehungsweise verstauen statt nur einer."
    ],
    kategorie: "Kampf"
  }
];
