window.ZAUBER_DATA = [
  {
    name: "Ablenkung",
    schule: "Illusion",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["G"],
    material: null,
    klassen: ["Barde", "Magier"],
    ritual: false,
    beschreibung: [
      "Du wirst unsichtbar, gleichzeitig erscheint ein illusionäres Abbild von dir selbst dort, wo du stehst. Dieses Abbild bleibt für die Wirkungsdauer bestehen, aber die Unsichtbarkeit endet, wenn du angreifst oder einen Zauber wirkst.",
      "Als Aktion kannst du dein illusionäres Abbild bis zu deiner doppelten Bewegungsrate bewegen und es gestikulieren, sprechen und auf jede Art handeln lassen, die du möchtest.",
      "Du kannst durch seine Augen sehen und durch seine Ohren hören, als würdest du dort stehen, wo es sich aufhält. In jedem deiner Züge kannst du als Bonusaktion von deinen Sinnen zu den Sinnen des Abbilds wechseln und andersherum. Solange du seine Sinne nutzt, bist du blind und taub für deine eigene Umgebung."
    ]
  },
  {
    name: "Alarm",
    schule: "Bannmagie",
    grad: 1,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "eine winzige Glocke und ein Stück feinen Silberdrahts",
    klassen: ["Waldläufer", "Magier", "Magieschmied"],
    ritual: true,
    beschreibung: [
      "Du erschaffst einen Alarm gegen unerwünschtes Eindringen. Wähle eine Tür, ein Fenster oder einen Bereich in Reichweite, der nicht größer als ein Würfel mit 6 m Kantenlänge sein darf. Bis der Zauberspruch endet, macht dich ein Alarm darauf aufmerksam, wenn eine Kreatur der Größenkategorie winzig oder größer in den geschützten Bereich eindringt. Beim Wirken des Zaubers kannst du Kreaturen festlegen, die den Alarm nicht auslösen. Lege außerdem fest, ob der Alarm geistig oder hörbar ist.",
      "Ein geistiger Alarm macht sich als Klingeln in deinem Kopf bemerkbar, wenn du dich innerhalb von 1,5 km um den geschützten Bereich aufhältst. Das Klingeln weckt dich, falls du schlafen solltest.",
      "Ein hörbarer Alarm erzeugt im Umkreis von 18 m für 10 Sekunden das Geräusch einer Handglocke."
    ]
  },
  {
    name: "Ansteckung",
    schule: "Nekromantie",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "7 Tage",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Druide"],
    ritual: false,
    beschreibung: [
      "Deine Berührung löst Krankheiten aus. Führe einen Nahkampf-Zauberangriff gegen eine Kreatur innerhalb deiner Reichweite aus. Bei einem Treffer wird das Ziel vergiftet. Am Ende eines jeden seiner Züge muss das Ziel einen Konstitutionsrettungswurf ablegen. Gelingen drei dieser Rettungswürfe, ist das Ziel nicht länger vergiftet und der Zauber endet. Misslingen drei Würfe, ist das Ziel nicht länger vergiftet, du kannst aber eine der unten beschriebenen Krankheiten wählen. Diese Krankheit gilt bis zum Ende der Zauberwirkung. Da dieser Zauber das Ziel mit einer natürlichen Krankheit ansteckt, sind alle Effekte wirksam, die Krankheiten heilen oder anderweitig lindern.",
      "• Blendendes Siechtum: Schmerzen erfassen den Verstand der Kreatur und ihre Augen werden milchig weiß. Sie ist im Nachteil bei Weisheitswürfen sowie Weisheitsrettungswürfen und gilt als blind.",
      "• Fleischfäule: Das Fleisch der Kreatur verfault. Sie ist im Nachteil bei Charismawürfen und erhält eine Anfälligkeit gegenüber jeglichem Schaden.",
      "• Gedankenfeuer: Der Verstand der Kreatur wird vom Fieber verwirrt. Sie ist im Nachteil bei Intelligenzwürfen und Intelligenzrettungswürfen. Außerdem verhält sich die Kreatur im Kampf, als würde sie unter den Auswirkungen des Zaubers Verwirrung leiden.",
      "• Krämpfe: Die Kreatur wird von Zitterkrämpfen erfasst. Sie ist im Nachteil bei Geschicklichkeitswürfen, Geschicklichkeitsrettungswürfen und Angriffswürfen, die Geschicklichkeit verwenden.",
      "• Schleimiges Verderben: Die Kreatur beginnt heftig zu bluten. Sie ist im Nachteil bei Konstitutionswürfen und Konstitutionsrettungswürfen. Außerdem ist die Kreatur, immer wenn sie Schaden erleidet, bis zum Ende ihres nächsten Zuges betäubt.",
      "• Schmutzfieber: Ein rasendes Fieber schwächt den Körper der Kreatur. Sie ist im Nachteil bei Stärkewürfen, Stärkerettungswürfen und Angriffswürfen, die Stärke verwenden."
    ]
  },
  {
    name: "Antimagisches Feld",
    schule: "Bannmagie",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Selbst (Sphäre von 3 m Radius)",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Eisenpulver oder Eisenspäne",
    klassen: ["Kleriker", "Magier"],
    ritual: false,
    beschreibung: [
      "Eine unsichtbare Kugel aus Antimagie mit 3 m Radius umgibt dich. Dieser Bereich ist von der magischen Energie abgeschnitten, die das Multiversum erfüllt. Innerhalb der Sphäre können keine Zauber gewirkt werden, beschworene Kreaturen verschwinden und selbst magische Gegenstände werden zu gewöhnlichen. Bis der Zauber endet, bewegt sich die Sphäre mit dir als Mittelpunkt fort.",
      "Zauber und andere magische Effekte, mit Ausnahme solcher, die von einem Artefakt oder einer Gottheit erschaffen wurden, werden in der Sphäre unterdrückt und können nicht in sie eindringen. Ein Zauberplatz, der zum Wirken eines unterdrückten Zaubers verwendet wird, gilt als verbraucht. Solange ein Effekt unterdrückt ist, hat er keine Auswirkung; der Zeitraum wird jedoch als Teil seiner Wirkungsdauer gezählt.",
      "Gezielte Effekte: Zauber und andere magische Effekte, die eine Kreatur oder einen Gegenstand in der Sphäre zum Ziel haben, beeinflussen ihr Ziel nicht.",
      "Magische Flächeneffekte: Der Flächeneffekt eines Zaubers oder magischen Effekts kann nicht in die Sphäre eindringen. Wenn sich die Sphäre und ein magischer Flächeneffekt überschneiden, gilt der Teil des Flächeneffekts, der von der Sphäre bedeckt wird, als unterdrückt.",
      "Zauber: Alle aktiven Zauber oder anderen magischen Effekte, die eine Kreatur oder einen Gegenstand in der Sphäre beeinflussen, werden unterdrückt, solange sich die Kreatur oder der Gegenstand in der Sphäre befindet.",
      "Magische Gegenstände: Die Eigenschaften und Kräfte von magischen Gegenständen werden in der Sphäre unterdrückt. Beispielsweise ist ein Langschwert +1 in der Sphäre nur ein gewöhnliches Langschwert. Bei einer magischen Waffe gilt dies, wenn sie gegen ein Ziel in der Sphäre verwendet oder von einem Angreifer in der Sphäre geführt wird. Verlässt eine magische Waffe oder ein magisches Projektil die Sphäre vollständig, wird die Magie des Gegenstands außerhalb nicht länger unterdrückt.",
      "Magische Bewegung: Teleportation und Reisen durch die Ebenen funktionieren in der Sphäre nicht. Ein Portal an einen anderen Ort oder außerdimensionale Räume schließen sich für die Dauer, die sie sich in der Sphäre befinden.",
      "Kreaturen und Gegenstände: Kreaturen oder Gegenstände, die auf magische Weise erschaffen oder beschworen wurden, hören in der Sphäre kurzzeitig auf zu existieren. Sie erscheinen sofort wieder, wenn der Ort, an dem sie sich zuletzt befanden, nicht mehr von der Sphäre bedeckt wird.",
      "Magie bannen: Zauber und magische Effekte wie Magie bannen haben in der Sphäre keine Auswirkungen. Gleichermaßen können sich die Sphären zweier verschiedener Antimagischer Felder nicht gegenseitig aufheben."
    ]
  },
  {
    name: "Antipathie/Sympathie",
    schule: "Verzauberung",
    grad: 8,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "10 Tage",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "entweder ein mit Essig getränkter Brocken Alaun für den Antipathie-Effekt oder ein Tropfen Honig für den Sympathie-Effekt",
    klassen: ["Druide", "Magier"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber zieht Kreaturen deiner Wahl an oder stößt sie ab. Du wirkst den Zauber auf etwas in Reichweite, entweder einen Gegenstand der Größenkategorie riesig oder kleiner oder einen Bereich, der nicht größer ist als ein Würfel mit 60 m Kantenlänge. Dann bestimmst du eine Art von intelligenter Kreatur, wie rote Drachen, Goblins oder Vampire. Wähle Antipathie oder Sympathie für den Effekt der Aura.",
      "Antipathie: Diese Verzauberung erfüllt Kreaturen der gewählten Art mit einem starken Drang, die Umgebung zu verlassen und das Ziel zu meiden. Wenn eine solche Kreatur das Ziel sehen kann oder sich in einen Umkreis von 18 m um es begibt, muss ihr ein Weisheitsrettungswurf gelingen, um nicht verängstigt zu werden. Solange sie durch das Ziel verängstigt ist, muss sie ihre Bewegung verwenden, um sich an den nächsten sicheren Ort zu begeben. Wenn sich die Kreatur mehr als 18 m vom Ziel entfernt und es nicht mehr sehen kann, ist sie nicht länger verängstigt.",
      "Sympathie: Die Verzauberung sorgt dafür, dass Kreaturen der gewählten Art einen starken Drang verspüren, sich dem Ziel zu nähern. Wenn eine solche Kreatur das Ziel sehen kann oder sich in einen Umkreis von 18 m begibt, muss sie einen Weisheitsrettungswurf ablegen. Wenn dieser misslingt, muss sie ihre Bewegung in jedem ihrer Züge verwenden, um sich in Berührungsweite des Ziels zu begeben. Wenn sie dies getan hat, kann sie sich nicht willentlich vom Ziel entfernen. Wenn das Ziel eine beeinflusste Kreatur verletzt, darf diese einen Weisheitsrettungswurf ablegen, um den Effekt zu beenden.",
      "Den Effekt beenden: Wenn sich eine beeinflusste Kreatur am Ende ihres Zuges außerhalb von 18 m um das Ziel befindet und es nicht sehen kann, legt sie einen Weisheitsrettungswurf ab. Bei einem Erfolg ist die Kreatur nicht länger vom Effekt betroffen. Außerdem darf eine Kreatur unter dem Einfluss dieses Zaubers alle 24 Stunden einen weiteren Rettungswurf ablegen. Eine Kreatur, der ein Rettungswurf gelingt, ist für 1 Minute gegen seine Auswirkungen immun."
    ]
  },
  {
    name: "Arkanes Auge",
    schule: "Erkenntnismagie",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "etwas Fledermausfell",
    klassen: ["Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du erschaffst ein unsichtbares, magisches Auge in Reichweite, das für die Wirkungsdauer in der Luft schwebt. Du erhältst auf geistige Weise visuelle Informationen von dem Auge, das über normale Sicht sowie eine Dunkelsicht von 9 m verfügt. Das Auge kann in alle Richtungen blicken.",
      "Als Aktion kannst du das Auge 9 m beliebig bewegen. Es darf sich von dir entfernen, aber nicht eine andere Ebene der Existenz betreten. Eine feste Barriere blockiert die Bewegung des Auges, es ist aber in der Lage, sich durch Öffnungen mit 2,5 cm Durchmesser zu zwängen."
    ]
  },
  {
    name: "Arkanes Schloss",
    schule: "Bannmagie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "bis der Zauber gebannt wird",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Goldstaub im Wert von mindestens 25 GM, der beim Wirken des Zaubers verbraucht wird",
    klassen: ["Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du berührst eine geschlossene Tür, ein Fenster, Tor, eine Kiste oder einen anderen Eingang, der für die Wirkungsdauer versiegelt wird. Du und andere Kreaturen, die du beim Wirken des Zaubers festlegst, können den Gegenstand normal öffnen. Du kannst auch ein Passwort festlegen, das den Zauber für 1 Minute unterdrückt, wenn es innerhalb von 1,5 m um den Gegenstand ausgesprochen wird. Ansonsten ist der Durchgang nicht zu passieren, bis er zerstört oder der Zauber gebannt wird.",
      "Den Zauber Klopfen auf den Gegenstand zu wirken, unterdrückt Arkanes Schloss für 10 Minuten. Solange der Gegenstand von diesem Zauber betroffen wird, steigt der SG eines Wurfes, um den Gegenstand zu zerbrechen oder zu knacken, um 10."
    ]
  },
  {
    name: "Arkane Spiegelung",
    schule: "Illusion",
    grad: 7,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "10 Tage",
    konzentration: false,
    reichweite: "Sicht",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Druide", "Magier"],
    ritual: false,
    beschreibung: [
      "Du lässt das Gelände in einem Gebiet von 1,5 × 1,5 km wie eine andere Art von Gelände aussehen, klingen, riechen und beeinflusst sogar, wie es sich anfühlt. Die grundsätzliche Gestalt der Landschaft bleibt aber dieselbe. Offene Felder können wie ein Sumpf, ein Hügel oder eine andere Art von schwierigem Gelände erscheinen, ein Tümpel wie eine grasige Wiese, ein Abhang wie ein sanftes Gefälle.",
      "Du bist in der Lage, das Aussehen von Bauwerken zu verändern oder sie entstehen zu lassen, wo es keine gibt. Der Zauber kann keine Kreaturen verkleiden, verbergen oder hinzufügen. Die Illusion umfasst hörbare, visuelle, berührbare und olfaktorische Elemente und kann freies Gelände in schwieriges verwandeln. Jedes Stück illusionäres Gelände, das aus dem Bereich entfernt wird, verschwindet sofort.",
      "Kreaturen unter dem Einfluss von Wahrer Blick durchschauen die Illusion und erkennen die wahre Gestalt der Landschaft, können aber dennoch physisch mit ihr interagieren."
    ]
  },
  {
    name: "Arkanes Tor",
    schule: "Beschwörung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "150 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst miteinander verbundene Teleportationsportale, die für die Wirkungsdauer geöffnet bleiben. Wähle zwei Punkte auf dem Boden, die du sehen kannst: einen innerhalb von 3 m und einen innerhalb von 150 m. Über jedem Punkt öffnet sich ein kreisförmiges Portal mit 3 m Durchmesser. Wenn sich das Portal in einem Bereich öffnen würde, in dem sich eine Kreatur aufhält, scheitert der Zauber.",
      "Bei den Portalen handelt es sich um zweidimensionale, leuchtende Ringe, die mit Nebel gefüllt sind und nur wenige Zentimeter über dem Boden schweben. Die Ringe sind nur von einer Seite aus sichtbar (deine Wahl), dies ist die Seite, die als Portal fungiert. Kreaturen oder Gegenstände, die das Portal betreten, verlassen das andere, als würden beide aneinander angrenzen. Von der Rückseite durch ein Portal zu treten, hat keinerlei Auswirkungen.",
      "In deinem Zug kannst du die Ringe als Bonusaktion rotieren lassen, sodass die aktive Seite in eine andere Richtung zeigt."
    ]
  },
  {
    name: "Arme von Hadar",
    schule: "Beschwörung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Selbst (Radius von 3 m)",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Hexenmeister"],
    ritual: false,
    beschreibung: [
      "Du berufst dich auf die Macht Hadars, des Dunklen Hungers. Tentakel aus finsterer Energie brechen aus dir hervor und schlagen auf alle Kreaturen innerhalb von 3 m ein. Jede Kreatur in diesem Bereich muss einen Stärkerettungswurf ablegen. Bei einem Misserfolg erleidet ein Ziel 2W6 nekrotischen Schaden und kann bis zu seinem nächsten Zug keine Reaktion verwenden. Bei einem erfolgreichen Rettungswurf nimmt die Kreatur halben Schaden, erleidet aber keine anderen Auswirkungen."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 1. hinaus um 1W6."
  },
  {
    name: "Astrale Projektion",
    schule: "Nekromantie",
    grad: 9,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "speziell",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V", "G", "M"],
    material: "für jede betroffene Kreatur ein roter Zirkon im Wert von mindestens 1.000 GM und ein aufwendig gravierter Silberbarren im Wert von mindestens 100 GM; alle Gegenstände werden beim Wirken des Zaubers verbraucht",
    klassen: ["Kleriker", "Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du und bis zu acht bereitwillige Kreaturen in Reichweite projizieren ihre Astralkörper auf die Astralebene (der Zauber misslingt, wenn du dich bereits auf dieser Ebene befindest). Der materielle Körper, den du zurücklässt, gilt als bewusstlos und befindet sich in einem Zustand des Scheintodes.",
      "Dein Astralkörper ähnelt deiner sterblichen Gestalt in beinahe jeder Hinsicht und verfügt über deine Spielwerte und Besitztümer. Eine silberne Kordel entspringt zwischen deinen Schulterblättern und verbindet dich mit deinem materiellen Körper. Solange sie intakt bleibt, kannst du immer deinen Weg zurückfinden. Wird die Kordel durchtrennt – was nur passieren kann, wenn ein Effekt explizit erwähnt, dass er dies tut –, werden Seele und Körper voneinander getrennt, was dich auf der Stelle tötet.",
      "Deine Astralform kann sich frei durch die Astralebene bewegen und durch Portale treten, die in andere Ebenen führen. Deine Astralform ist eine eigenständige Inkarnation. Jeglicher Schaden und andere Effekte, die ihr zugefügt werden, haben keinen Einfluss auf deinen physischen Körper.",
      "Der Zauber endet für dich und deine Gefährten, wenn du eine Aktion verwendest, um ihn aufzuheben. Der Zauber endet auch, wenn Magie bannen erfolgreich auf eine Astralform oder einen physischen Körper gewirkt wird oder wenn die Trefferpunkte des physischen Körpers oder der Astralform auf 0 sinken. Wenn der Zauberwirker vorzeitig zurückkehrt, müssen seine Gefährten einen Weg zurück in ihren Körper finden, für gewöhnlich indem sie auf 0 Trefferpunkte reduziert werden."
    ]
  },
  {
    name: "Ätherische Gestalten",
    schule: "Verwandlung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "bis zu 8 Stunden",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Kleriker", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du betrittst den Grenzbereich der Ätherebene, und zwar dort, wo sie sich mit deiner aktuellen Ebene überschneidet. Für die Wirkungsdauer oder bis du eine Aktion verwendest, um den Zauber aufzuheben, verbleibst du in der Äthergrenze. Während dieser Zeit kannst du dich in jede beliebige Richtung bewegen. Wenn du dich nach oben oder unten bewegst, musst du für jeweils 30 cm Bewegung zusätzliche 30 cm Bewegungsrate aufwenden. Du kannst die Ebene, von der du gekommen bist, hören und sehen, allerdings nur in Grautönen bis zu 18 m.",
      "Solange du dich auf der Ätherebene befindest, kannst du nur Kreaturen beeinflussen oder von ihnen beeinflusst werden, die sich ebenfalls dort aufhalten. Du ignorierst alle Gegenstände und Effekte, die sich nicht auf der Ätherebene befinden, und kannst dich durch Gegenstände hindurchbewegen.",
      "Wenn der Zauber endet, kehrst du sofort auf die Ebene zurück, von der du gekommen bist. Befindest du dich am gleichen Ort wie ein fester Gegenstand oder eine Kreatur, wirst du auf den nächsten nicht besetzten Bereich bewegt und erleidest 1 Punkt Energieschaden für jeweils 30 cm, die du bewegt wurdest. Der Zauber hat keinen Effekt, wenn du dich beim Wirken bereits auf der Ätherebene befindest."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 8. oder 9. Grades wirkst, kannst du für jeden Grad über den 7. hinaus bis zu drei bereitwillige Kreaturen als Ziel wählen (inklusive dir selbst). Beim Wirken des Zaubers müssen sich die Kreaturen innerhalb von 3 m befinden."
  },
  {
    name: "Attribut verbessern",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Fell oder Federn eines Tieres",
    klassen: ["Barde", "Kleriker", "Druide", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du berührst eine Kreatur und gewährst ihr eine magische Verbesserung. Wähle einen der folgenden Effekte. Das Ziel profitiert von diesem, bis der Zauber endet.",
      "• Ausdauer des Bären: Das Ziel ist im Vorteil bei Konstitutionswürfen. Es erhält außerdem 2W6 temporäre Trefferpunkte, die verschwinden, wenn der Zauber endet.",
      "• Stärke des Stiers: Das Ziel ist im Vorteil bei Stärkewürfen und seine Traglast wird verdoppelt.",
      "• Anmut der Katze: Das Ziel ist im Vorteil bei Geschicklichkeitswürfen. Es erleidet außerdem keinen Schaden bei Stürzen aus maximal 6 m, solange es nicht kampfunfähig ist.",
      "• Pracht des Adlers: Das Ziel ist im Vorteil bei Charismawürfen.",
      "• Gerissenheit des Fuchses: Das Ziel ist im Vorteil bei Intelligenzwürfen.",
      "• Weisheit der Eule: Das Ziel ist im Vorteil bei Weisheitswürfen."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 2. hinaus eine zusätzliche Kreatur als Ziel wählen."
  },
  {
    name: "Auferstehung",
    schule: "Nekromantie",
    grad: 7,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Diamant im Wert von mindestens 1.000 GM, der beim Wirken des Zaubers verbraucht wird",
    klassen: ["Barde", "Kleriker"],
    ritual: false,
    beschreibung: [
      "Du berührst eine verstorbene Kreatur, die nicht länger als 100 Jahre tot ist, nicht an Altersschwäche starb und nicht untot war. Wenn die Seele des Ziels frei und willig ist, kehrt die Kreatur mit allen Trefferpunkten ins Leben zurück.",
      "Der Zauber neutralisiert alle Gifte und heilt alle natürlichen Krankheiten, welche die Kreatur bei ihrem Tod plagten. Magische Krankheiten, Flüche oder ähnliche Effekte kann er nicht aufheben. Der Zauber schließt alle tödlichen Wunden und stellt alle fehlenden Gliedmaßen wieder her.",
      "Von den Toten zurückzukehren, ist eine wahre Prüfung für das Ziel. Es erleidet einen Malus von –4 auf alle Angriffs-, Rettungs- und Attributswürfe. Immer wenn es eine lange Rast beendet, reduziert sich der Malus um 1, bis er aufgehoben ist.",
      "Wirkst du den Zauber, um eine Kreatur zum Leben zu erwecken, die länger als 1 Jahr tot ist, bedeutet das eine große Anstrengung für dich. Bis du eine lange Rast beendet hast, kannst du keine weiteren Zauber wirken und bist im Nachteil bei allen Attributs-, Angriffs- und Rettungswürfen."
    ]
  },
  {
    name: "Auflösung",
    schule: "Verwandlung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Magnetstein und eine Prise Staub",
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein dünner grüner Strahl fährt aus deinem ausgestreckten Finger auf ein Ziel in Reichweite, das du sehen kannst. Das Ziel kann eine Kreatur, ein Gegenstand oder ein Gebilde aus magischer Energie sein, wie die Mauer, die durch den Zauber Energiewand erschaffen wird.",
      "Eine Kreatur, die Ziel dieses Zaubers ist, muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet sie 10W6 + 40 Energieschaden. Reduziert dieser Schaden das Ziel auf 0 Trefferpunkte, wird es aufgelöst. Eine aufgelöste Kreatur und alles, was sie trägt (mit Ausnahme von magischen Gegenständen), zerfallen zu einem Haufen feinen, grauen Staubs. Die Kreatur kann nur durch die Zauber Wahre Auferstehung oder Wunsch wieder zum Leben erweckt werden.",
      "Alle nicht-magischen Gegenstände oder Gebilde aus magischer Energie der Größenkategorie groß oder kleiner werden von diesem Zauber automatisch aufgelöst. Ist das Ziel riesig oder größer, löst der Zauber einen Teil davon auf, der einem Würfel mit 3 m Kantenlänge entspricht. Magische Gegenstände sind von diesem Zauber nicht betroffen."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 7. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 6. hinaus um 3W6."
  },
  {
    name: "Auf Wasser gehen",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Kork",
    klassen: ["Kleriker", "Druide", "Magieschmied", "Waldläufer", "Zauberer"],
    ritual: true,
    beschreibung: [
      "Dieser Zauber verleiht die Fähigkeit, sich über flüssige Oberflächen zu bewegen – wie Wasser, Säure, Schlamm, Schnee, Treibsand oder Lava –, als wären sie ungefährlicher, fester Boden (Wesen, die sich über geschmolzene Lava bewegen, erleiden allerdings aufgrund der Hitze Schaden). Bestimme bis zu zehn bereitwillige Kreaturen in Reichweite, die du sehen kannst, welche die Fähigkeit für die Wirkungsdauer erhalten.",
      "Wenn du eine Kreatur als Ziel wählst, die sich in einer Flüssigkeit befindet oder untergetaucht ist, trägt der Zauber sie mit einer Geschwindigkeit von 18 m pro Runde an die Oberfläche."
    ]
  },
  {
    name: "Aura der Gesundheit",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst (Radius von 9 m)",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Heilende Energie geht von dir aus und erschafft eine Aura mit 9 m Radius. Bis der Zauber endet, bewegt sich die Aura mit dir als Mittelpunkt fort. Du kannst eine Bonusaktion verwenden, um bei einer Kreatur innerhalb der Aura (inklusive dir selbst) 2W6 Trefferpunkte zu heilen."
    ]
  },
  {
    name: "Aura der Reinheit",
    schule: "Bannmagie",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst (Radius von 9 m)",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Reinigende Energie strahlt von dir aus und erschafft eine Aura mit 9 m Radius. Bis der Zauber endet, bewegt sich die Aura mit dir als Mittelpunkt fort. Alle nicht feindlichen Kreaturen innerhalb der Aura (inklusive dir selbst) können nicht krank werden, erhalten eine Resistenz gegen Giftschaden und sind im Vorteil bei Rettungswürfen gegen Effekte, die folgende Zustände auslösen: betäubt, bezaubert, blind, gelähmt, taub, verängstigt und vergiftet."
    ]
  },
  {
    name: "Aura des Lebens",
    schule: "Bannmagie",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst (Radius von 9 m)",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Lebenserhaltende Energie entströmt dir und erschafft eine Aura mit 9 m Radius. Bis der Zauber endet, bewegt sich die Aura mit dir als Mittelpunkt fort. Alle nicht feindlichen Kreaturen innerhalb der Aura (inklusive dir selbst) erhalten eine Resistenz gegen nekrotischen Schaden und ihre maximalen Trefferpunkte können nicht verringert werden. Zusätzlich erlangen nicht feindliche, lebende Kreaturen 1 Trefferpunkt zurück, wenn sie ihren Zug in der Aura beginnen und 0 Trefferpunkte besitzen."
    ]
  },
  {
    name: "Ausbessern",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "zwei Magnetsteine",
    klassen: ["Barde", "Kleriker", "Druide", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber repariert eine Bruchstelle oder einen Riss in einem Gegenstand, den du berührst, beispielsweise ein zerbrochenes Kettenglied, die beiden Hälften eines zerbrochenen Schlüssels, einen zerrissenen Umhang oder einen leckenden Weinschlauch. Solange der Riss oder die Bruchstelle in keiner Ausdehnung größer als 30 cm ist, kannst du sie flicken, sodass keine Spur des vorherigen Schadens übrig bleibt.",
      "Der Zauber kann einen magischen Gegenstand oder ein Konstrukt auf physische Weise reparieren, einem solchen Gegenstand jedoch nicht seine Magie wiedergeben."
    ]
  },
  {
    name: "Äußerlichkeiten",
    schule: "Illusion",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber erlaubt es dir, das Aussehen einer beliebigen Anzahl von Kreaturen zu ändern, die sich in Reichweite befinden und die du sehen kannst. Ein unwilliges Ziel kann einen Charismarettungswurf ablegen und wird bei Erfolg nicht von dem Effekt betroffen. Der Zauber verbirgt sowohl die physische Erscheinung als auch Kleidung, Rüstung, Waffen und Ausrüstung des Ziels. Du kannst jede Kreatur bis zu 30 cm kleiner oder größer erscheinen lassen sowie dick oder dünn. Der grundsätzliche Körpertyp ist nicht änderbar.",
      "Die Veränderungen halten einer körperlichen Untersuchung nicht stand. Wenn du den Spruch verwendest, um der Kleidung einer Kreatur einen Hut beizufügen, durchdringen Gegenstände diesen einfach. Jeder, der ihn berührt, würde nichts fühlen oder nur den Kopf der Kreatur spüren.",
      "Eine Kreatur kann ihre Aktion verwenden, um ein Ziel zu untersuchen. Sie legt einen Wurf auf Intelligenz (Nachforschungen) gegen den SG zum Widerstehen deiner Zauber ab. Bei Erfolg bemerkt sie, dass das Ziel auf irgendeine Art verkleidet ist."
    ]
  },
  {
    name: "Ausspähung",
    schule: "Erkenntnismagie",
    grad: 5,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "ein Fokus im Wert von mindestens 1.000 GM, wie eine Kristallkugel, ein Silberspiegel oder ein Brunnen voller Weihwasser",
    klassen: ["Barde", "Kleriker", "Druide", "Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du kannst eine bestimmte Kreatur deiner Wahl sehen und hören, wenn sie sich auf der gleichen Existenzebene befindet wie du. Das Ziel muss einen Weisheitsrettungswurf ablegen, der modifiziert wird abhängig davon, wie gut du das Ziel kennst und ob du über einen Gegenstand als physische Verbindung zu ihr verfügst. Wenn das Ziel weiß, dass du den Zauber wirkst, und es beobachtet werden will, kann es den Rettungswurf absichtlich misslingen lassen.",
      {
        typ: "tabelle",
        titel: "Wissen",
        spalten: ["Wissen", "RW-Modifikator"],
        zeilen: [
          ["Aus zweiter Hand (du hast von dem Ziel gehört)", "+5"],
          ["Aus erster Hand (du hast das Ziel getroffen)", "+0"],
          ["Vertraut (du kennst das Ziel gut)", "−5"]
        ]
      },
      {
        typ: "tabelle",
        titel: "Verbindung",
        spalten: ["Verbindung", "RW-Modifikator"],
        zeilen: [
          ["Abbild oder Portrait", "−2"],
          ["Besitztum oder Kleidungsstück", "−4"],
          ["Körperteil, Haarsträhne, Fingernagel oder dergleichen", "−10"]
        ]
      },
      "Bei einem erfolgreichen Rettungswurf kannst du das Ziel nicht ausfindig machen und darfst den Zauber für 24 Stunden nicht erneut gegen es verwenden. Bei einem misslungenen Rettungswurf erschafft der Zauber einen unsichtbaren Sensor im Umkreis von 3 m um das Ziel. Du kannst durch den Sensor sehen und hören, als wärst du anwesend. Dieser bewegt sich mit dem Ziel und bleibt für die Wirkungsdauer durchgängig im Abstand von 3 m zu ihm.",
      "Eine Kreatur, die unsichtbare Gegenstände sehen kann, nimmt den Sensor als leuchtende Kugel von der Größe einer Faust wahr. Anstatt eine Kreatur als Ziel zu bestimmen, kannst du auch einen Ort wählen, den du schon einmal gesehen hast. In diesem Fall erscheint der Sensor an dem entsprechenden Ort und bewegt sich nicht."
    ]
  },
  {
    name: "Celestische Wesen beschwören",
    schule: "Beschwörung",
    grad: 7,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Du beschwörst ein celestisches Wesen mit Herausforderungsgrad 4 oder niedriger, das in einem nicht besetzten Bereich erscheint, der sich in Reichweite befindet und den du sehen kannst. Das celestische Wesen verschwindet, wenn seine Trefferpunkte auf 0 fallen oder der Zauber endet.",
      "Für die Wirkungsdauer ist das celestische Wesen mit dir und deinen Gefährten verbündet. Würfle seine Initiative, da es eigene Züge ausführt. Es gehorcht allen verbalen Befehlen, die du ihm erteilst (dazu brauchst du keine Aktion aufwenden), solange diese nicht gegen seine Gesinnung verstoßen. Ohne Befehle verteidigt es sich gegen feindliche Kreaturen, führt aber ansonsten keine Aktionen aus. Der SL hat die Spielwerte des celestischen Wesens zur Verfügung."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 9. Grades wirkst, beschwörst du ein celestisches Wesen mit Herausforderungsgrad 5 oder niedriger."
  },
  {
    name: "Chromatische Kugel",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "ein Diamant im Wert von mindestens 50 GM",
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du schleuderst eine Sphäre aus Energie mit 10 cm Durchmesser auf eine Kreatur in Reichweite, die du sehen kannst. Beim Wirken des Zaubers wählst du Blitz, Feuer, Gift, Kälte, Säure oder Schall aus, um die Art der Kugel zu bestimmen, und führst dann einen Fernkampf-Zauberangriff gegen das Ziel aus. Trifft der Angriff, erleidet das Ziel 3W8 Schaden des gewählten Typs."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 1. hinaus um 1W8."
  },
  {
    name: "Befehl",
    schule: "Verzauberung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Runde",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Kleriker", "Paladin"],
    ritual: false,
    beschreibung: [
      "Du gibst einer Kreatur in Reichweite, die du sehen kannst, einen Befehl, bei dem es sich nur um ein einzelnes Wort handeln darf. Dem Ziel muss ein Weisheitsrettungswurf gelingen, sonst muss es den Befehl in seinem nächsten Zug befolgen. Der Zauber hat keine Auswirkungen, wenn das Ziel untot ist, es deine Sprache nicht versteht oder das Ausführen des Befehls ihm unmittelbar schaden würde. Wenn das Ziel deinem Befehl nicht folgen kann, endet der Zauber.",
      "• Komm: Das Ziel bewegt sich auf dem kürzesten und direktesten Weg auf dich zu und beendet seinen Zug, wenn es sich dir auf 1,50 m genähert hat.",
      "• Fallenlassen: Das Ziel lässt fallen, was es in den Händen hält, und beendet dann seinen Zug.",
      "• Flieh: Das Ziel verbringt seinen Zug damit, sich schnellstmöglich von dir wegzubewegen.",
      "• Kriech: Das Ziel erhält den Zustand liegend und beendet seinen Zug.",
      "• Stopp: Das Ziel bewegt sich nicht und führt keine Aktion aus. Eine fliegende Kreatur verbleibt schwebend an Ort und Stelle, wenn sie dazu imstande ist. Muss sie sich bewegen, um in der Luft zu bleiben, fliegt sie die Mindestentfernung, die notwendig ist, um nicht abzustürzen."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 1. hinaus eine zusätzliche Kreatur als Ziel wählen. Die Kreaturen dürfen nicht weiter als 9 m voneinander entfernt sein, wenn du den Zauber auf sie wirkst."
  },
  {
    name: "Beistand",
    schule: "Bannmagie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein winziger Stoffstreifen",
    klassen: ["Kleriker", "Magieschmied", "Paladin"],
    ritual: false,
    beschreibung: [
      "Dein Zauber stärkt die Entschlossenheit und Zähigkeit deiner Verbündeten. Wähle bis zu drei Kreaturen in Reichweite. Die maximalen und aktuellen Trefferpunkte aller Ziele steigen für die Wirkungsdauer um 5."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, steigen die Trefferpunkte des Ziels zusätzlich um 5 für jeden Grad über den 2. hinaus."
  },
  {
    name: "Bewegungsfreiheit",
    schule: "Bannmagie",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Lederriemen, gebunden um einen Arm oder eine ähnliche Gliedmaße",
    klassen: ["Barde", "Kleriker", "Druide", "Magieschmied", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du berührst eine bereitwillige Kreatur. Für die Wirkungsdauer ist die Bewegung des Ziels nicht durch schwieriges Gelände eingeschränkt, außerdem können Zauber und andere magische Effekte weder die Bewegungsrate der Kreatur verringern noch dafür sorgen, dass sie gelähmt oder festgesetzt wird. Zusätzlich kann das Ziel 1,50 m Bewegungsrate aufwenden, um automatisch aus nicht-magischen Behinderungen zu entkommen, wie Handschellen oder einer Kreatur, die sie festhält. Zu guter Letzt erleiden Bewegung und Angriffe des Ziels keine Abzüge, wenn es sich unter Wasser aufhält."
    ]
  },
  {
    name: "Bigbys Hand",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "eine Eierschale und ein Handschuh aus Schlangenleder",
    klassen: ["Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine große Hand aus schimmernder, durchsichtiger Energie in einem freien Bereich in Reichweite. Die Hand bleibt für die Wirkungsdauer bestehen und bewegt sich auf deinen Befehl hin. Sie ist ein Gegenstand mit RK 20 und Trefferpunkten in Höhe deiner maximalen Trefferpunkte. Wird sie auf 0 Trefferpunkte reduziert, endet der Zauber. Sie besitzt Stärke 26 (+8) und Geschicklichkeit 10 (+0). In deinen folgenden Zügen kannst du die Hand als Bonusaktion bis zu 18 m weit bewegen und dann einen der folgenden Effekte auslösen.",
      "Geschlossene Faust: Die Hand schlägt eine Kreatur oder einen Gegenstand innerhalb von 1,50 m um sich. Führe einen Nahkampf-Zauberangriff mit deinen Spielwerten durch. Bei einem Treffer erleidet das Ziel 4W8 Energieschaden.",
      "Kraftvolle Hand: Die Hand versucht, eine Kreatur im Umkreis von 1,50 m in eine Richtung deiner Wahl zu schieben. Führe einen Wettstreit zwischen dem Stärkewurf der Hand und dem Wurf auf Stärke (Athletik) des Ziels durch. Ist das Ziel mittelgroß oder kleiner, bist du im Vorteil. Bei Erfolg schiebt die Hand das Ziel bis zu 1,50 m + 1,50 m mal dem Modifikator deines zum Zaubern relevanten Attributs.",
      "Greifende Hand: Die Hand versucht, eine Kreatur der Größenkategorie riesig oder kleiner im Umkreis von 1,50 m zu greifen. Lege einen Ringenwurf ab und verwende den Stärkewert der Hand. Ist das Ziel mittelgroß oder kleiner, bist du im Vorteil. Hat die Hand das Ziel ergriffen, kannst du als Bonusaktion befehlen, dass sie es zerdrückt. Das Ziel erleidet Wuchtschaden in Höhe von 2W6 + dem Modifikator deines zum Zaubern relevanten Attributs.",
      "Blockierende Hand: Die Hand platziert sich zwischen dir und einer Kreatur deiner Wahl und gewährt dir Teildeckung gegen das Ziel. Das Ziel kann sich nicht durch den Bereich der Hand bewegen, wenn sein Stärkewert dem der Hand entspricht oder niedriger ist. Ist der Stärkewert höher, wird der Bereich der Hand als schwieriges Gelände behandelt."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 6. oder eines höheren Grades wirkst, steigt der Schaden der geschlossenen Faust um 2W8 und der Schaden der greifenden Hand um 2W6 für jeden Grad über den 5. hinaus."
  },
  {
    name: "Bindung der Ebenen",
    schule: "Bannmagie",
    grad: 5,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Edelstein im Wert von mindestens 1.000 GM, der beim Wirken des Zaubers verbraucht wird",
    klassen: ["Barde", "Kleriker", "Druide", "Magier"],
    ritual: false,
    beschreibung: [
      "Mit diesem Zauber versuchst du, ein celestisches Wesen, ein Elementar, eine Fee oder einen Unhold für einen Dienst zu binden. Die Kreatur muss für die gesamte Wirkungsdauer in Reichweite sein. Ist der Zauber vollendet, muss das Ziel einen Charismarettungswurf ablegen. Bei einem Misserfolg wird die Kreatur für die Wirkungsdauer an dich gebunden. Wurde die Kreatur durch einen anderen Zauber beschworen, verlängert sich dessen Wirkungsdauer auf die Wirkungsdauer von Bindung der Ebenen.",
      "Eine gebundene Kreatur muss nach bestem Können deine Anweisungen erfüllen. Sollte sie dir gegenüber feindlich eingestellt sein, versucht sie, deine Worte zu verdrehen, um ihre eigenen Ziele zu verfolgen. Führt die Kreatur deine Anweisungen vollständig aus, ehe der Zauber endet, kehrt sie zu dir zurück, um dies zu berichten, wenn du dich auf derselben Existenzebene befindest. Andernfalls kehrt sie an den Ort zurück, wo du sie gebunden hast, und wartet dort."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz eines höheren Grades wirkst, verlängert sich die Wirkungsdauer: auf 10 Tage bei einem Zauberplatz des 6. Grades, auf 30 Tage bei einem des 7. Grades, auf 180 Tage bei einem des 8. Grades und auf 1 Jahr und 1 Tag bei einem des 9. Grades."
  },
  {
    name: "Blendendes Niederstrecken",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Das nächste Mal, wenn du innerhalb der Wirkungsdauer des Zaubers eine Kreatur mit einer Nahkampfwaffe triffst, lodert deine Waffe in hellem Licht auf und verursacht beim Ziel zusätzlich 3W8 gleißenden Schaden. Außerdem muss ihm ein Konstitutionsrettungswurf gelingen, um nicht für die Wirkungsdauer zu erblinden.",
      "Eine Kreatur, die durch diesen Zauber geblendet wurde, darf am Ende jedes ihrer Züge einen weiteren Konstitutionsrettungswurf ablegen. Bei einem Erfolg verliert sie den Zustand blind."
    ]
  },
  {
    name: "Blindheit/Taubheit",
    schule: "Nekromantie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde", "Kleriker", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du kannst einen Feind blind oder taub werden lassen. Wähle eine Kreatur in Reichweite, die du sehen kannst. Sie muss einen Konstitutionsrettungswurf ablegen. Wenn dieser misslingt, ist das Ziel für die Wirkungsdauer entweder blind oder taub (deine Wahl). Am Ende eines jeden seiner Züge kann das Ziel einen Konstitutionsrettungswurf ablegen. Bei Erfolg endet der Zauber."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 2. hinaus eine zusätzliche Kreatur als Ziel wählen."
  },
  {
    name: "Blitz",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Selbst (Linie von 30 m)",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Fell und ein Stab aus Bernstein, Kristall oder Glas",
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein Blitz in Gestalt einer Linie mit 30 m Länge und 1,50 m Breite bricht in eine Richtung deiner Wahl aus dir hervor. Jede Kreatur innerhalb der Linie muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet das Ziel 8W6 Blitzschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "Der Blitz entzündet alle brennbaren Gegenstände im Wirkungsbereich, die nicht getragen oder in der Hand gehalten werden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 3. hinaus um 1W6."
  },
  {
    name: "Blitze herbeirufen",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine Sturmwolke in Form eines Zylinders, der 3 m hoch ist und einen Radius von 18 m besitzt, zentriert um einen Punkt in Reichweite. Der Zauber misslingt, wenn du keinen Punkt in der Luft sehen kannst, an dem die Sturmwolke erscheinen könnte.",
      "Wirkst du den Zauber, wähle einen Punkt unterhalb der Wolke, den du sehen kannst. Ein Blitz fährt von der Wolke herab und schlägt in diesen ein. Jede Kreatur im Umkreis von 1,50 m um den Punkt muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet das Ziel 3W10 Blitzschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. In jedem deiner Züge, bis der Zauber endet, kannst du deine Aktion verwenden, um auf diese Weise einen weiteren Blitz zu beschwören.",
      "Wenn du dich draußen aufhältst und ein Sturm herrscht, während du den Zauber wirkst, verleiht dieser dir die Kontrolle über den bestehenden Sturm und erschafft keinen eigenen. In diesem Fall steigt der Schaden des Zaubers um 1W10."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 3. hinaus um 1W10."
  },
  {
    name: "Blitzpfeil",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Waldläufer"],
    ritual: false,
    beschreibung: [
      "Das nächste Mal, wenn du innerhalb der Wirkungsdauer des Zaubers eine Kreatur mit einer Fernkampfwaffe angreifst, verwandelt sich das Geschoss oder die Waffe selbst in einen Blitz. Führe einen normalen Angriffswurf aus. Das Ziel erleidet bei einem Treffer 4W8 Blitzschaden oder halb so viel Schaden, wenn du verfehlst. Dies ersetzt den Waffenschaden.",
      "Gleichgültig ob du triffst oder verfehlst, muss jede Kreatur innerhalb von 3 m um das Ziel einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet die entsprechende Kreatur 2W8 Blitzschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. Das Geschoss oder die Waffe nimmt anschließend wieder seine ursprüngliche Form an."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, steigt der Schaden beider Zaubereffekte für jeden Grad über den 3. hinaus um 1W8."
  },
  {
    name: "Böser Blick",
    schule: "Nekromantie",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Für die Wirkungsdauer des Zaubers werden deine Augen zu einer tintenschwarzen Leere, die von grauenhafter Macht erfüllt ist. Eine Kreatur deiner Wahl innerhalb von 18 m, die du sehen kannst, muss einen erfolgreichen Weisheitsrettungswurf ablegen, um nicht einen der folgenden Effekte deiner Wahl zu erleiden. In jedem deiner Züge kannst du deine Aktion verwenden, um eine weitere Kreatur als Ziel zu wählen. Dabei kannst du keine Kreatur bestimmen, deren Rettungswurf bereits erfolgreich war.",
      "Schlaf: Das Ziel wird bewusstlos. Es wacht auf, wenn es Schaden erleidet oder eine andere Kreatur ihre Aktion verwendet, um den Schlafenden wachzurütteln.",
      "Panik: Das Ziel wird von dir verängstigt. In jedem ihrer Züge muss die verängstigte Kreatur die Spurtaktion verwenden und sich auf dem sichersten sowie kürzesten verfügbaren Weg von dir wegbewegen. Der Effekt endet, wenn sich das Ziel mindestens 18 m von dir entfernt befindet und dich nicht mehr sehen kann.",
      "Übelkeit: Das Ziel ist im Nachteil bei Angriffs- und Attributswürfen. Am Ende eines jeden seiner Züge darf es einen weiteren Weisheitsrettungswurf ablegen. Bei einem Erfolg endet der Effekt."
    ]
  },
  {
    name: "Botschaft",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Runde",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein kurzes Stück Kupferdraht",
    klassen: ["Barde", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du deutest mit dem Finger auf eine Kreatur in Reichweite und flüsterst eine Botschaft. Das Ziel (und nur dieses) hört die Botschaft und kann in einem Flüstern antworten, das nur du zu hören vermagst.",
      "Du darfst diesen Zauber durch feste Gegenstände wirken, wenn du mit dem Ziel vertraut bist und weißt, dass es sich hinter der Barriere befindet. Magische Stille, 30 cm Stein, 2,5 cm gewöhnliches Metall, eine dünne Schicht Blei oder 90 cm Holz blockieren den Zauber. Der Effekt muss keiner geraden Linie folgen und kann sich frei um Ecken oder durch Öffnungen bewegen."
    ]
  },
  {
    name: "Brandmarkendes Niederstrecken",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Das nächste Mal, wenn du innerhalb der Wirkungsdauer des Zaubers eine Kreatur mit einer Nahkampfwaffe triffst, leuchtet deine Waffe mit astralem Schein auf und verursacht beim Ziel zusätzlich 2W6 gleißenden Schaden.",
      "Das Ziel wird sichtbar, wenn es zuvor unsichtbar war, und gibt in einem Radius von 1,50 m dämmriges Licht ab. Es kann nicht unsichtbar werden, bis der Zauber endet."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 2. hinaus um 1W6."
  },
  {
    name: "Brennende Hände",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Selbst (Kegel von 4,50 m)",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du streckst die Hände aus, mit sich berührenden Daumen und ausgebreiteten Fingern, und eine dünne Fläche aus Feuer schießt aus deinen ausgestreckten Fingerspitzen. Jede Kreatur in einem Kegel von 4,50 m muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet das Ziel 3W6 Feuerschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "Das Feuer entzündet alle brennbaren Gegenstände im Wirkungsbereich, die nicht getragen oder in der Hand gehalten werden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 1. hinaus um 1W6."
  },
  {
    name: "Dauerhafte Flamme",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "bis der Zauber gebannt wird",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Rubinstaub im Wert von mindestens 50 GM, der beim Wirken des Zaubers verbraucht wird",
    klassen: ["Kleriker", "Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Eine Flamme mit der Helligkeit einer Fackel springt aus einem Gegenstand hervor, den du berührst. Der Effekt sieht wie eine gewöhnliche Flamme aus, erzeugt aber keine Hitze und verbraucht keinen Sauerstoff. Eine Dauerhafte Flamme kann verdeckt oder verborgen werden, aber nicht erstickt oder gelöscht."
    ]
  },
  {
    name: "Dimensionstür",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "150 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du teleportierst dich von deiner aktuellen Position zu einem beliebigen anderen Punkt in Reichweite. Du triffst genau an dem gewünschten Punkt ein. Dies kann ein Ort sein, den du sehen oder aus der Erinnerung abrufen kannst oder den du beschreibst, indem du Reichweite und Richtung angibst, wie „60 Meter direkt nach unten” oder „nordöstlich in einem Winkel von 45 Grad nach oben, und zwar 90 Meter”.",
      "Du darfst Gegenstände mitnehmen, solange ihr Gewicht deine Traglast nicht übersteigt, sowie eine bereitwillige Kreatur deiner Größe oder kleiner, die ebenfalls Ausrüstung bis zu ihrer Traglast mit sich führen kann. Die Kreatur muss sich innerhalb von 1,50 m befinden, wenn du den Zauber wirkst. Würdest du an einem Ort ankommen, an dem sich bereits ein Gegenstand oder eine Kreatur befindet, erleiden du und dein Mitreisender 4W6 Energieschaden und ihr werdet nicht teleportiert."
    ]
  },
  {
    name: "Dissonantes Flüstern",
    schule: "Verzauberung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde"],
    ritual: false,
    beschreibung: [
      "Du stimmst flüsternd eine missklingende Melodie an, die nur eine Kreatur deiner Wahl in Reichweite hören kann. Die Kreatur wird daraufhin von schrecklichen Schmerzen erfüllt. Das Ziel muss einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg erleidet es 3W6 psychischen Schaden und muss sofort seine Reaktion verwenden (falls sie noch verfügbar ist), um sich so weit von dir zu entfernen, wie es seine Bewegungsrate erlaubt. Die Kreatur bewegt sich nicht in offensichtlich gefährliches Gelände, wie Feuer oder eine Grube. Bei einem erfolgreichen Rettungswurf erleidet das Ziel nur den halben Schaden und muss sich nicht wegbewegen. Eine taube Kreatur ist bei ihrem Rettungswurf automatisch erfolgreich."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 1. hinaus um 1W6."
  },
  {
    name: "Dolchwolke",
    schule: "Beschwörung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "eine Glasscherbe",
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du füllst die Luft in einem Würfel mit 1,50 m Kantenlänge, der um einen Punkt deiner Wahl in Reichweite zentriert ist, mit wirbelnden Dolchen. Eine Kreatur erleidet 4W4 Hiebschaden, wenn sie den Bereich das erste Mal in einem Zug betritt oder ihren Zug dort beginnt."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 2. hinaus um 2W4."
  },
  {
    name: "Donnerndes Niederstrecken",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Das nächste Mal, wenn du innerhalb der Wirkungsdauer des Zaubers eine Kreatur mit einer Nahkampfwaffe triffst, hallt deine Waffe mit Donner wider und verursacht beim Ziel zusätzlich 2W6 Schallschaden. Ist das Ziel eine Kreatur, muss ihr außerdem ein Stärkerettungswurf gelingen, um nicht 3 m von dir weggestoßen zu werden und den Zustand liegend zu erhalten."
    ]
  },
  {
    name: "Donnerwoge",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Selbst (Würfel mit 4,50 m Seitenlänge)",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Druide", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Eine Woge aus donnernder Kraft geht von dir aus. Jede Kreatur in einem Würfel mit 4,50 m Kantenlänge muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 2W8 Schallschaden und wird 3 m von dir weggestoßen. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur nur den halben Schaden und wird nicht weggestoßen.",
      "Nicht gesicherte oder befestigte Gegenstände, die sich vollständig innerhalb des Wirkungsbereichs befinden, werden automatisch 3 m von dir weggestoßen. Der Zauber erzeugt ein donnerndes Dröhnen, das bis in 90 m Entfernung hörbar ist."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 1. hinaus um 1W8."
  },
  {
    name: "Dornenhagel",
    schule: "Beschwörung",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Waldläufer"],
    ritual: false,
    beschreibung: [
      "Das nächste Mal, wenn du innerhalb der Wirkungsdauer des Zaubers eine Kreatur mit einer Fernkampfwaffe triffst, verwandelt sich das Geschoss oder die Waffe selbst in einen Hagel aus Dornen. Neben dem normalen Effekt des Angriffs müssen das Ziel und alle Kreaturen innerhalb von 1,50 m um dieses einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 1W10 Stichschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 1. hinaus um 1W10 (maximal 6W10)."
  },
  {
    name: "Dornenpeitsche",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "der Stiel einer Pflanze mit Dornen",
    klassen: ["Druide", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine lange, rankenartige Peitsche, die mit Dornen bedeckt ist und die auf deinen Befehl hin nach einer Kreatur in Reichweite schlägt. Führe einen Nahkampf-Zauberangriff gegen das Ziel durch. Wenn der Angriff trifft, erleidet die Kreatur 1W6 Stichschaden. Handelt es sich um eine Kreatur der Größenkategorie groß oder kleiner, wird sie zusätzlich 3 m in deine Richtung gezogen.",
      "Der Schaden dieses Zaubers steigt jeweils um 1W6 bei Erreichen der 5. (2W6), 11. (3W6) und 17. Stufe (4W6)."
    ]
  },
  {
    name: "Dornenwand",
    schule: "Beschwörung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "eine Handvoll Dornen",
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine Barriere aus zähen, biegsamen und verworrenen Büschen, die vor nadelspitzen Dornen starren. Sie erscheint innerhalb der Reichweite auf einem festen Untergrund und bleibt für die Wirkungsdauer bestehen. Die Barriere kann gerade sein (bis zu 18 m lang, 3 m hoch und 1,50 m dick) oder ringförmig (bis zu 6 m Durchmesser, 3 m Höhe und 1,50 m Dicke). Sie blockiert die Sichtlinie.",
      "Erschaffst du die Barriere, müssen alle Kreaturen in ihrem Bereich einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 7W8 Stichschaden oder halb so viel Schaden bei einem gelungenen Rettungswurf.",
      "Eine Kreatur kann sich durch die Barriere bewegen, allerdings nur langsam und unter großen Schmerzen. Für jeweils 30 cm, die sich die Kreatur durch die Dornenbüsche bewegt, muss sie 1,20 m Bewegungsrate aufwenden. Betritt eine Kreatur die Barriere das erste Mal in einem Zug oder beendet sie ihren Zug dort, muss sie außerdem einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet sie 7W8 Hiebschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 7. oder eines höheren Grades wirkst, steigen beide Schadensarten für jeden Grad über den 6. hinaus um 1W8."
  },
  {
    name: "Dornenwuchs",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "45 m",
    komponenten: ["V", "G", "M"],
    material: "sieben scharfe Dornen oder sieben angespitzte kleine Zweige",
    klassen: ["Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Der Boden in einem Radius von 6 m, zentriert um einen Punkt in Reichweite, wird von harten Stacheln und Dornen überwuchert. Für die Wirkungsdauer gilt der Bereich als schwieriges Gelände. Bewegt sich eine Kreatur in das Gebiet hinein oder innerhalb dessen, erleidet sie 2W4 Stichschaden für jeweils 1,50 m, die sie zurücklegt.",
      "Die Verwandlung des Bodens ist so getarnt, dass dieser nicht gefährlich wirkt. Jede Kreatur, die den Bereich nicht sehen kann, wenn der Zauber gewirkt wird, muss bei dessen Betreten einen Wurf auf Weisheit (Wahrnehmung) gegen den SG zum Widerstehen deiner Zauber ablegen. Misslingt er, erkennt sie nicht, welche Gefahr von dem Gelände ausgeht."
    ]
  },
  {
    name: "Drawmijs Sofortige Herbeizauberung",
    schule: "Beschwörung",
    grad: 6,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "bis der Zauber gebannt wird",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Saphir im Wert von 1.000 GM",
    klassen: ["Magier"],
    ritual: true,
    beschreibung: [
      "Du berührst einen Gegenstand, der 10 Pfund oder weniger wiegt und dessen größte Ausdehnung maximal 1,80 m beträgt. Der Zauber hinterlässt ein unsichtbares Mal auf der Oberfläche des Gegenstands und schreibt dessen Namen auf den Saphir, den du als Materialkomponente nutzt. Für jeden verzauberten Gegenstand benötigst du einen eigenen Saphir.",
      "Anschließend kannst du zu einem beliebigen Zeitpunkt deine Aktion verwenden, um den Namen des Gegenstands auszusprechen und den Saphir zu zerschmettern. Der Gegenstand erscheint sofort in deiner Hand, unabhängig von seiner physischen oder planaren Entfernung, und der Zauber endet.",
      "Wenn eine andere Kreatur den Gegenstand trägt oder in der Hand hält, wird er nicht zu dir transportiert. Aber du erfährst, wer die Kreatur ist, die den Gegenstand in ihrem Besitz hat, und wo sie sich ungefähr aufhält. Magie bannen oder ein ähnlicher Effekt, der erfolgreich auf den Saphir gewirkt wird, beendet den Zauber."
    ]
  },
  {
    name: "Druidenkunst",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Du sprichst flüsternd mit den Geistern der Natur und erzeugst innerhalb der Reichweite einen der folgenden Effekte:",
      "• Du erschaffst einen harmlosen sensorischen Effekt, der das Wetter an deinem Aufenthaltsort für die nächsten 24 Stunden vorhersagt. Der Effekt hält 1 Runde lang an und könnte sich als goldene Kugel für einen klaren Himmel, als Wolke für Regen oder als fallende Schneeflocken manifestieren.",
      "• Du bewirkst, dass augenblicklich eine Blume erblüht, eine Samenkapsel sich öffnet oder eine Blattknospe aufblüht.",
      "• Du erschaffst einen harmlosen sensorischen Effekt, wie fallende Blätter, einen Windhauch, die Geräusche eines kleinen Tieres oder den leichten Geruch eines Stinktiers. Der Effekt muss in einen Würfel mit 1,50 m Kantenlänge passen.",
      "• Du kannst augenblicklich eine Kerze, eine Fackel oder ein kleines Lagerfeuer entzünden oder löschen."
    ]
  },
  {
    name: "Dunkelheit",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "M"],
    material: "Fledermausfell und ein Tropfen Pech oder ein Stück Kohle",
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Magische Dunkelheit breitet sich von einem Punkt deiner Wahl in Reichweite aus (auch um Ecken) und füllt für die Wirkungsdauer eine Sphäre mit einem Radius von 4,50 m. Selbst Kreaturen mit Dunkelsicht vermögen den Bereich mit Blicken nicht zu durchdringen und nicht-magisches Licht kann ihn nicht erhellen.",
      "Ist der gewählte Punkt ein Gegenstand, breitet sich die Dunkelheit von dem Gegenstand aus und bewegt sich mit ihm, falls eine Kreatur ihn trägt oder in der Hand hält. Wird die Quelle der Dunkelheit vollständig mit einem blickdichten Gegenstand bedeckt, wie einer Schüssel oder einem Helm, blockiert das die Dunkelheit.",
      "Überschneidet sich die Sphäre mit einem Bereich magischen Lichts, der mit einem Spruch des 2. oder eines niedrigeren Grades erschaffen wurde, wird der Zauber aufgehoben, der das Licht verursacht."
    ]
  },
  {
    name: "Dunkelsicht",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "eine Prise getrocknete Karotte oder ein Achat",
    klassen: ["Druide", "Waldläufer", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du berührst eine bereitwillige Kreatur und verleihst ihr die Fähigkeit, in der Dunkelheit zu sehen. Für die Wirkungsdauer verfügt das Ziel über Dunkelsicht mit einer Reichweite von 18 m."
    ]
  },
  {
    name: "Dürre",
    schule: "Nekromantie",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Nekromantische Energie ergießt sich über eine Kreatur deiner Wahl in Reichweite, die du sehen kannst, und entzieht ihr jegliche Feuchtigkeit und Vitalität. Das Ziel muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet die Kreatur 8W8 nekrotischen Schaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. Der Zauber hat keine Auswirkungen auf Untote oder Konstrukte.",
      "Wenn du den Zauber auf eine Pflanzenkreatur oder eine magische Pflanze wirkst, ist diese bei ihrem Rettungswurf im Nachteil und der Zauber verursacht den maximal möglichen Schaden. Du kannst als Ziel auch eine nicht-magische Pflanze wählen, die keine Kreatur ist. Die Pflanze legt keinen Rettungswurf ab: Sie verdorrt einfach und stirbt."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 5. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 4. hinaus um 1W8."
  },
  {
    name: "Ebenenwechsel",
    schule: "Beschwörung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein gegabelter Metallstab im Wert von mindestens 250 GM, eingestimmt auf die gewünschte Existenzebene",
    klassen: ["Kleriker", "Druide", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du und bis zu acht bereitwillige Kreaturen, die sich in einem Kreis an den Händen halten, werden auf eine andere Existenzebene transportiert. Bestimme einen allgemeinen Zielort, wie die Messingstadt auf der Elementarebene des Feuers oder den Palast von Dispater auf der zweiten Ebene der Neun Höllen, und ihr erscheint in oder nahe diesem Ziel (nach Wahl des SL). Versucht ihr beispielsweise, die Messingstadt zu erreichen, könntet ihr dort in der Straße des Stahls eintreffen, vor dem Tor der Asche oder an einem Ort, von dem aus ihr über das Feuermeer auf die Stadt blickt.",
      "Wenn du die Sigillensequenz eines Teleportationskreises zu einer anderen Existenzebene kennst, kann der Zauber euch auch zu diesem Kreis bringen. Ist der Teleportationskreis zu klein, um alle transportierten Kreaturen aufzunehmen, erscheinen sie in den nächstliegenden nicht besetzten Bereichen neben dem Kreis.",
      "Du kannst diesen Zauber auch verwenden, um eine unwillige Kreatur auf eine andere Ebene zu verbannen. Wähle eine Kreatur in Reichweite und führe einen Nahkampf-Zauberangriff gegen sie aus. Bei einem Treffer muss das Ziel einen Charismarettungswurf ablegen. Misslingt dieser, wird die Kreatur an einen zufälligen Ort einer von dir gewählten Existenzebene transportiert. Eine Kreatur, die auf diese Weise transportiert wurde, muss ihren Weg zurück auf deine aktuelle Existenzebene selbst finden."
    ]
  },
  {
    name: "Einfache Illusion",
    schule: "Illusion",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["G", "M"],
    material: "ein Stück Vlies",
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst ein Geräusch oder das Abbild eines Gegenstands, das für die Wirkungsdauer bestehen bleibt. Die Illusion endet auch, wenn du sie als Aktion aufhebst oder den Zauber erneut wirkst.",
      "Erschaffst du ein Geräusch, kann die Lautstärke von einem Flüstern bis zu einem Schrei reichen. Es kann sich um deine eigene Stimme handeln, die Stimme eines anderen, das Brüllen eines Löwen, schlagende Trommeln oder ein beliebiges anderes Geräusch. Du darfst einen einzigen Laut hervorrufen, der für die gesamte Wirkungsdauer anhält, oder mehrere einzelne Laute zu verschiedenen Zeitpunkten innerhalb der Wirkungsdauer.",
      "Erschaffst du das Abbild eines Gegenstands – wie das eines Stuhles, schlammiger Fußabdrücke oder einer kleinen Truhe –, darf dieses nicht größer als ein Würfel mit einer Kantenlänge von 1,50 m sein. Das Abbild kann weder Geräusche, Licht, Gerüche noch andere sensorische Effekte erzeugen.",
      "Körperliche Interaktion mit dem Trugbild offenbart, dass es sich um eine Illusion handelt, da Dinge es einfach durchdringen. Eine Kreatur kann ihre Aktion verwenden, um das Bildnis oder das Geräusch zu untersuchen. Gelingt ihr ein Wurf auf Intelligenz (Nachforschungen) gegen den SG zum Widerstehen deiner Zauber, kann sie erkennen, dass es sich um eine Illusion handelt. Durchschaut eine Kreatur die Illusion, verblasst diese für sie."
    ]
  },
  {
    name: "Einflüsterung",
    schule: "Verzauberung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 8 Stunden",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "M"],
    material: "eine Schlangenzunge und entweder eine Honigwabe oder ein Tropfen süßes Öl",
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du formulierst eine Handlungsweise (in maximal ein oder zwei Sätzen) und bringst eine Kreatur deiner Wahl auf magische Weise dazu, diese zu befolgen. Das Ziel muss sich in Reichweite befinden, dich hören und verstehen können und du musst in der Lage sein, es zu sehen.",
      "Kreaturen, die nicht bezaubert werden können, sind immun gegen diesen Effekt. Die Handlungsweise muss auf eine Art formuliert werden, die sinnvoll erscheint. Wenn du die Kreatur aufforderst, sich zu erstechen, sich in einen Speer zu werfen, sich anzuzünden oder etwas anderes zu tun, das ihr schadet, beendet das den Zauber automatisch.",
      "Das Ziel muss einen Weisheitsrettungswurf ablegen. Misslingt dieser, folgt es der beschriebenen Handlungsweise nach seinen Möglichkeiten. Dies macht die Kreatur entweder für die gesamte Wirkungsdauer oder bis die vorgegebene Handlungsweise abgeschlossen ist, in diesem Fall endet der Zauber vorzeitig.",
      "Du kannst auch bestimmte Bedingungen festlegen, die während der Wirkungsdauer eine bestimmte Handlung auslösen. Beispielsweise könntest du einer Ritterin einflüstern, dass sie dem ersten Bettler, dem sie begegnet, ihr Schlachtross schenkt. Wird die Bedingung nicht erfüllt, ehe der Zauber endet, führt das Ziel die Handlung nicht aus.",
      "Wenn du oder einer deiner Gefährten das Ziel verletzt, endet der Zauber."
    ]
  },
  {
    name: "Einkerkerung",
    schule: "Bannmagie",
    grad: 9,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "bis der Zauber gebannt wird",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein Bild des Ziels auf Pergament oder eine kleine geschnitzte Statue, die dem Ziel gleicht, sowie besondere Komponenten, die von der gewirkten Version des Zaubers abhängen, im Wert von mindestens 500 GM pro Trefferwürfel des Ziels",
    klassen: ["Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine magische Fessel, die eine Kreatur in Reichweite festhält, welche du sehen kannst. Dem Ziel muss ein Weisheitsrettungswurf gelingen, um nicht von dem Zauber betroffen zu werden. Bei einem Erfolg ist es immun, wenn du den Spruch erneut gegen es wirkst. Solange die Kreatur durch diesen Zauber gefesselt ist, muss sie nicht atmen, essen, trinken und altert nicht. Erkenntniszauber können das Ziel nicht ausfindig machen oder wahrnehmen. Wenn du den Zauber wirkst, wählst du eine der folgenden Formen der Einkerkerung.",
      "• Begräbnis: Das Ziel wird weit unter der Erde in einer Sphäre aus magischer Energie begraben, die gerade groß genug ist, um das Ziel aufzunehmen. Nichts kann die Sphäre durchdringen, und keine Kreatur kann sich durch Teleportation oder Ebenenreisen in die Sphäre oder heraus bewegen. Die spezielle Komponente für diese Version des Zaubers ist eine kleine Mithralkugel.",
      "• Anketten: Schwere Ketten, die fest mit dem Boden verankert sind, halten das Ziel fest. Das Ziel wird bis zum Ende des Zaubers festgesetzt und kann sich weder bewegen noch bewegt werden. Die spezielle Komponente für diese Version des Zaubers ist eine dünne Kette aus einem Edelmetall.",
      "• Eingezäuntes Gefängnis: Der Zauber transportiert das Ziel in eine winzige Halbebene, die gegen Teleportation und Ebenenreisen geschützt ist. Die Halbebene kann ein Labyrinth sein, ein Käfig, ein Turm oder ein ähnlich abgeschlossenes Bauwerk oder ein Bereich deiner Wahl. Die spezielle Komponente für diese Version des Zaubers ist eine kleine Abbildung des Gefängnisses aus Jade.",
      "• Winziges Gefängnis: Das Ziel schrumpft auf eine Größe von 2,5 cm und wird in ein Juwel oder einen ähnlichen Gegenstand gesperrt. Licht gelangt in den Edelstein auf normale Weise (sodass das Ziel nach draußen sehen kann und andere Kreaturen es sehen können), aber nichts sonst vermag ihn zu durchdringen, selbst Teleportation oder Ebenenreisen versagen. Das Juwel kann nicht geschliffen oder gebrochen werden, solange der Zauber wirksam ist. Die spezielle Komponente für diese Version des Zaubers ist ein großer, durchsichtiger Edelstein, wie ein Korund, ein Diamant oder ein Rubin.",
      "• Schlummer: Das Ziel schläft ein und kann nicht geweckt werden. Die spezielle Komponente für diese Version des Zaubers besteht aus einschläfernden Kräutern.",
      "Den Zauber beenden: Während du den Zauber wirkst, kannst du bei allen Versionen eine Bedingung festlegen, die den Zauber beendet und das Ziel befreit. Die Bedingung darf so spezifisch und kompliziert sein, wie du es möchtest, allerdings muss der SL zustimmen, dass sie vernünftig und ihr Eintreten möglich ist. Die Bedingung kann vom Namen, der Identität oder der Gottheit einer Kreatur abhängig sein, muss aber auf beobachtbaren Fähigkeiten und Eigenschaften basieren und nicht auf ungreifbaren Konzepten wie Stufe, Klasse oder Trefferpunkte.",
      "Der Zauber Magie bannen kann das Ziel nur befreien, wenn er auf dem 9. Grad gewirkt und entweder auf das Gefängnis oder die spezielle Komponente gesprochen wird, die bei der Erschaffung verwendet wurde.",
      "Du kannst eine einzelne spezielle Komponente nur zur Erschaffung eines einzelnen Gefängnisses verwenden. Wenn du den Zauber mit derselben Komponente noch einmal wirkst, wird das Ziel des ersten Zaubers sofort aus der Einkerkerung befreit."
    ]
  },
  {
    name: "Einswerden mit der Natur",
    schule: "Erkenntnismagie",
    grad: 5,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide", "Waldläufer"],
    ritual: true,
    beschreibung: [
      "Du wirst für einen Augenblick eins mit der Natur und erlangst Wissen über die Umgebung. Im Freien wirkt der Zauber auf das Land, das dich innerhalb von 4,5 km umgibt. In Höhlen und an anderen unterirdischen Plätzen sinkt der Radius auf 90 m. Der Zauber funktioniert nur an natürlichen Orten, nicht in Gebieten, die vollständig durch Bebauung entstanden sind, wie Kerker oder Städte.",
      "Du erlangst sofort Wissen über bis zu drei Fakten deiner Wahl zu einem der folgenden Themen bezüglich der Umgebung:",
      "• Gelände und Gewässer",
      "• vorherrschende Pflanzen, Mineralien, Tiere oder Bewohner",
      "• mächtige celestische Wesen, Feen, Unholde, Elementare oder Untote",
      "• Einflussnahmen von anderen Existenzebenen",
      "• Bauwerke",
      "Beispielsweise könntest du herausfinden, wo sich in dieser Gegend ein mächtiger Untoter aufhält, sich wichtige Quellen von Trinkwasser befinden und nahe Städte liegen."
    ]
  },
  {
    name: "Eissturm",
    schule: "Hervorrufung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "90 m",
    komponenten: ["V", "G", "M"],
    material: "einige Tropfen Wasser und eine Prise Staub",
    klassen: ["Druide", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein Hagel aus felsharten Eisbrocken regnet in einem Zylinder mit 6 m Radius und 12 m Höhe auf die Erde. Der Zylinder ist um einen Punkt in Reichweite zentriert. Jede Kreatur innerhalb des Zylinders muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet das Ziel 2W8 Wuchtschaden und 4W6 Kälteschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. Durch den Sturm gilt der Bereich des Zaubers bis zum Ende deines nächsten Zuges als schwieriges Gelände."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 5. oder eines höheren Grades wirkst, steigt der Wuchtschaden für jeden Grad über den 4. hinaus um 1W8."
  },
  {
    name: "Eiswand",
    schule: "Hervorrufung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein kleines Stück Quarz",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine Barriere aus Eis auf einem festen Untergrund in Reichweite. Du kannst sie zu einer halbkugelförmigen Kuppel oder einer Sphäre mit einem Radius von 3 m formen, oder du kannst eine flache Oberfläche aus zehn Platten erschaffen, die jeweils 3 × 3 m groß sind. Jede Platte muss an eine andere angrenzen. In jeder Gestalt ist die Eiswand 30 cm dick und bleibt für die Wirkungsdauer bestehen. Erschaffst du die Barriere, wird jede Kreatur in ihrem Bereich auf eine Seite der Wand gestoßen und muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 10W6 Kälteschaden oder halb so viel Schaden bei einem gelungenen Rettungswurf.",
      "Die Eiswand ist ein Gegenstand, der beschädigt und somit auch durchbrochen werden kann. Sie hat RK 12, verfügt über 30 Trefferpunkte pro Abschnitt von 3 m und besitzt eine Anfälligkeit gegenüber Feuerschaden. Werden die Trefferpunkte eines 3-m-Abschnitts der Barriere auf 0 reduziert, ist dieser zerstört und hinterlässt einen Bereich eisiger Luft. Eine Kreatur, die sich das erste Mal in einem Zug durch die eisige Luft bewegt, muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet sie 5W6 Kälteschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 7. oder eines höheren Grades wirkst, steigt der Schaden, den die Eiswand bei ihrer Erschaffung verursacht, um 2W6 und der Schaden für das Passieren der eisigen Luft um 1W6 für jeden Grad über den 6. hinaus."
  },
  {
    name: "Elementar beschwören",
    schule: "Beschwörung",
    grad: 5,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "brennender Weihrauch für Luft, weicher Lehm für Erde, Schwefel und Phosphor für Feuer oder Wasser und Sand für Wasser",
    klassen: ["Druide", "Magier"],
    ritual: false,
    beschreibung: [
      "Du rufst einen elementaren Diener herbei. Wähle einen Bereich von Luft, Erde, Feuer oder Wasser in Reichweite, der einen Würfel mit 3 m Kantenlänge füllt. Ein Elementar mit Herausforderungsgrad 5 oder niedriger, welcher der Art des gewählten Bereichs entspricht, erscheint an einer nicht besetzten Stelle im Umkreis von 3 m zu diesem Bereich. Beispielsweise könnte ein Feuerelementar aus einem Freudenfeuer hervortreten oder ein Erdelementar aus dem Boden aufsteigen. Der Elementar verschwindet, wenn seine Trefferpunkte auf 0 reduziert werden oder der Zauber endet.",
      "Der Elementar ist für die Wirkungsdauer mit dir und deinen Gefährten verbündet. Würfle die Initiative für den Elementar, da er eigene Züge ausführt. Dein elementarer Diener folgt allen verbalen Befehlen, die du ihm erteilst (dazu musst du keine Aktion aufwenden). Ohne Befehl verteidigt er sich gegen feindliche Kreaturen, führt aber ansonsten keine Aktionen aus.",
      "Wenn deine Konzentration unterbrochen wird, verschwindet der Elementar nicht, sondern du verlierst die Kontrolle über ihn. Er wird dir und deinen Gefährten gegenüber feindlich und könnte angreifen. Ein unkontrollierter Elementar kann von dir nicht fortgeschickt werden und verschwindet 1 Stunde, nachdem du ihn beschworen hast. Der SL hat die Spielwerte des Elementars zur Verfügung."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 6. oder eines höheren Grades wirkst, steigt der Herausforderungsgrad des Elementars für jeden Grad über den 5. hinaus um 1."
  },
  {
    name: "Elementare Waffe",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magieschmied", "Paladin"],
    ritual: false,
    beschreibung: [
      "Eine nicht-magische Waffe, die du berührst, wird zu einer magischen Waffe. Wähle eine der folgenden Schadensarten: Blitz, Feuer, Kälte, Säure oder Schall. Für die Wirkungsdauer erhält die Waffe einen Bonus von +1 auf Angriffswürfe und fügt bei einem Treffer zusätzlich 1W4 Punkte Schaden des gewählten Typs zu."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz eines höheren Grades wirkst, steigen der Angriffsbonus und der Zusatzschaden: bei einem Zauberplatz des 5. oder 6. Grades auf +2 und 2W4, bei einem des 7. oder eines höheren Grades auf +3 und 3W4."
  },
  {
    name: "Energiekäfig",
    schule: "Hervorrufung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "30 m",
    komponenten: ["V", "G", "M"],
    material: "Rubinstaub im Wert von 1.500 GM",
    klassen: ["Barde", "Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Ein unbewegliches, unsichtbares würfelförmiges Gefängnis aus magischer Energie bildet sich um einen Bereich deiner Wahl in Reichweite. Das Gefängnis kann ein Käfig oder eine geschlossene Kiste sein, wie du möchtest.",
      "Ein Gefängnis in Form einer Kiste hat eine Kantenlänge von bis zu 3 m und erschafft eine feste Barriere, durch die keinerlei Materie dringen kann und die Zauber blockiert, die in den oder aus dem Bereich gewirkt werden.",
      "Ein Gefängnis in Form eines Käfigs besitzt eine Kantenlänge von 6 m und besteht aus 1,25 cm dicken Stäben, die jeweils 1,25 cm voneinander entfernt sind. Wenn du den Zauber wirkst, wird jede Kreatur in dem Energiekäfig gefangen, die vollständig von ihm umschlossen ist. Kreaturen, die sich nur zum Teil in dem Bereich aufhalten oder die zu groß für den Käfig sind, werden von der Mitte des Bereichs weggestoßen, bis sie sich vollständig außerhalb befinden.",
      "Eine Kreatur im Energiekäfig kann diesen nur auf magische Art verlassen. Wenn der Gefangene versucht, mittels Teleportation oder Ebenenreisen zu entfliehen, muss er zunächst einen Charismarettungswurf ablegen. Bei einem Erfolg kann die Kreatur diese Art von Magie verwenden, um den Energiekäfig zu verlassen. Bei einem Misserfolg kann sie dies nicht und der gewirkte Zauber ist vergeudet. Der Energiekäfig erstreckt sich auch in die Ätherebene, was eine Flucht über diese Ebene verhindert.",
      "Der Zauber kann nicht durch Magie bannen aufgehoben werden."
    ]
  },
  {
    name: "Energiewand",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Pulver eines zermahlenen klaren Edelsteins",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine unsichtbare Barriere aus magischer Energie an einem Punkt deiner Wahl in Reichweite. Sie erscheint in jeder Ausrichtung, die du willst, und kann eine senkrechte oder waagerechte Wand oder abgewinkelt sein. Sie kann freischwebend sein oder auf einem festen Untergrund stehen. Du kannst sie auch zu einer halbkugelförmigen Kuppel oder einer Sphäre mit einem Radius von 3 m formen, oder du kannst eine flache Oberfläche aus zehn Platten erschaffen, die jeweils 3 x 3 m groß sind. Jede Platte muss an eine andere angrenzen. In jeder Form ist die Energiewand unter 1 cm dick und bleibt für die Wirkungsdauer bestehen. Erschaffst du die Barriere, wird jede Kreatur in ihrem Bereich auf eine Seite der Wand gestoßen (du entscheidest, welche).",
      "Die Barriere kann physisch nicht durchdrungen werden. Sie ist immun gegen Schaden und kann nicht mit Magie bannen aufgehoben werden. Der Zauber Auflösen zerstört die Energiewand allerdings sofort. Sie erstreckt sich auch in die Ätherebene, was Ätherreisen durch die Wand verhindert."
    ]
  },
  {
    name: "Erdbeben",
    schule: "Hervorrufung",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "150 m",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Erde, ein Stück Fels und ein Klumpen Lehm",
    klassen: ["Kleriker", "Druide", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine seismische Störung an einem Punkt auf dem Boden, der sich in Reichweite befindet und den du sehen kannst. Für die Wirkungsdauer reißt ein gewaltiges Beben die Erde in einem Radius von 30 m um diesen Punkt auf.",
      "Der Boden in diesem Bereich wird schwieriges Gelände. Jede Kreatur, die in Kontakt mit dem Boden ist und sich konzentriert, muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg wird die Konzentration der Kreatur unterbrochen.",
      "Wenn du diesen Zauber wirkst sowie am Ende eines jeden Zuges, den du damit verbringst, dich darauf zu konzentrieren, müssen alle Kreaturen, die von dem Beben betroffen sind, einen Geschicklichkeitsrettungswurf ablegen. Misslingt er, stürzt die Kreatur und erhält den Zustand liegend.",
      "Dieser Zauber kann nach Wahl des SL zusätzliche Auswirkungen abhängig vom Gelände in der Umgebung haben.",
      "Erdspalten: Erdspalten öffnen sich zu Beginn deines nächsten Zuges im Bereich des Zaubers. Insgesamt 1W6 tun sich an Orten auf, die der SL bestimmt. Jede Erdspalte ist 1W10 × 3 m tief, 3 m breit und zieht sich von der einen Seite des Zauberbereichs zur anderen. Eine Kreatur, die an einem Punkt steht, an dem sich eine Erdspalte öffnet, muss einen Geschicklichkeitsrettungswurf ablegen. Gelingt er, fällt die Kreatur nicht hinein und bewegt sich mit dem Rand der Erdspalte, während sich diese auftut. Eine Erdspalte, die sich unter einem Bauwerk öffnet, führt zu einem automatischen Einsturz.",
      "Bauwerke: Wenn du den Zauber wirkst sowie zu Beginn eines jeden deiner Züge, bis der Zauber endet, fügt das Beben allen Bauwerken in Kontakt mit dem Boden 50 Punkte Wuchtschaden zu. Sinken die Trefferpunkte eines Bauwerks auf 0, stürzt es ein. Eine Kreatur innerhalb eines Radius, der der halben Höhe des Bauwerks entspricht, muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet sie 5W6 Wuchtschaden, fällt zu Boden und wird von Schutt begraben. Um sich zu befreien, muss ihr ein Wurf auf Stärke (Athletik) gegen SG 20 gelingen. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur nur den halben Schaden und fällt nicht zu Boden."
    ]
  },
  {
    name: "Erde bewegen",
    schule: "Verwandlung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 2 Stunden",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "eine Eisenklinge und ein kleiner Beutel mit einer Mischung aus Erden – Ton, Lehm und Sand",
    klassen: ["Druide", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Wähle einen Geländebereich mit einer Seitenlänge von maximal 12 m in Reichweite. Du kannst Erde, Sand oder Lehm in diesem für die Wirkungsdauer beliebig umformen.",
      "Du bist in der Lage, die Bodenhöhe des Bereichs anzuheben oder zu senken, einen Graben zu erschaffen oder aufzuschütten, eine Wand zu erbauen oder niederzureißen oder eine Säule zu errichten. Das Ausmaß dieser Veränderungen darf die Hälfte der größten Ausdehnung des Bereichs nicht übersteigen. Es dauert 10 Minuten, solche Änderungen vorzunehmen.",
      "Am Ende jeder Zeitspanne von 10 Minuten, die du dich auf den Zauber konzentrierst, kannst du einen neuen Geländebereich auswählen. Weil die Umwandlung langsam vonstatten geht, können Kreaturen in dem Bereich für gewöhnlich nicht von den Bewegungen des Bodens gefangen oder verletzt werden.",
      "Natürliche Steine oder steinerne Bauwerke vermag der Zauber nicht zu beeinflussen. Felsen und Bauwerke verschieben sich, um dem neuen Gelände zu entsprechen. Der Zauber hat keinen direkten Einfluss auf das Pflanzenwachstum. Die bewegte Erde trägt Pflanzen mit sich."
    ]
  },
  {
    name: "Erinnerung verändern",
    schule: "Verzauberung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Magier"],
    ritual: false,
    beschreibung: [
      "Du versuchst die Erinnerungen einer anderen Kreatur umzuformen. Eine Kreatur in Reichweite, die du sehen kannst, muss einen Weisheitsrettungswurf ablegen. Kämpfst du gerade gegen das Ziel, ist es bei diesem im Vorteil. Bei einem Misserfolg wird die Kreatur für die Wirkungsdauer von dir bezaubert. Eine bezauberte Kreatur ist kampfunfähig und sich ihrer Umgebung nicht bewusst, kann dich aber noch hören. Wenn sie Schaden erleidet oder von einem anderen Zaubereffekt betroffen wird, endet der Zauberspruch und keine Erinnerungen des Ziels werden verändert.",
      "Solange die Bezauberung anhält, kannst du die Erinnerungen des Ziels an ein Ereignis verändern, das sich in den letzten 24 Stunden zugetragen hat und nicht länger als 10 Minuten dauerte. Du kannst die Erinnerungen dauerhaft löschen, dem Ziel erlauben, sich mit perfekter Klarheit daran zu erinnern, die Erinnerungen im Detail verändern oder eine Erinnerung an ein anderes Ereignis erschaffen.",
      "Du musst mit dem Ziel sprechen und ihm beschreiben, wie seine Erinnerungen beeinflusst werden, und es muss deine Sprache verstehen können. Wenn der Zauber endet, ehe du die veränderten Erinnerungen vollständig beschrieben hast, hat der Zauber keine Auswirkungen. Ansonsten setzen sich die veränderten Erinnerungen mit dem Ende des Zaubers fest.",
      "Eine modifizierte Erinnerung beeinflusst nicht unbedingt, wie sich eine Kreatur verhält, besonders wenn die Erinnerung den natürlichen Neigungen oder der Gesinnung der Kreatur widerspricht. Ist eine veränderte Erinnerung völlig unlogisch, wird sie als schlechter Traum abgetan.",
      "Die Zauber Fluch bannen und Vollständige Genesung können Erinnerungen wiederherstellen, wenn sie auf das Ziel gewirkt werden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz eines höheren Grades wirkst, kannst du die Erinnerungen des Ziels an ein Ereignis verändern, das bis zu 7 Tage (6. Grad), 30 Tage (7. Grad) oder 1 Jahr (8. Grad) zurückliegt oder sogar an einem beliebigen Zeitpunkt in der Vergangenheit stattgefunden hat (9. Grad)."
  },
  {
    name: "Erschaffung",
    schule: "Illusion",
    grad: 5,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "speziell",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein winziges Stück Materie des gleichen Typs, die du erschaffen willst",
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du ziehst Fäden schattenartigen Materials aus dem Schattensaum und erschaffst mit diesen innerhalb der Reichweite nicht lebendige Gegenstände aus pflanzlichem Material: weiche Dinge, Seile, Holz oder Ähnliches. Du kannst diesen Zauber auch nutzen, um mineralische Gegenstände wie Stein, Kristall oder Metall zu erschaffen. Der erschaffene Gegenstand darf nicht größer sein als ein Würfel mit 1,50 m Kantenlänge und muss eine Form besitzen und aus einem Material bestehen, das du schon einmal gesehen hast.",
      {
        typ: "tabelle",
        titel: "Wirkungsdauer nach Material",
        spalten: ["Material", "Wirkungsdauer"],
        zeilen: [
          ["Pflanzliche Materie", "1 Tag"],
          ["Stein oder Kristall", "12 Stunden"],
          ["Edelmetalle",         "1 Stunde"],
          ["Juwelen",             "10 Minuten"],
          ["Adamant oder Mithral","1 Minute"]
        ]
      },
      "Wenn Material, das du auf diese Weise magisch erschaffst, verwendet werden soll, um die Materialkomponenten eines anderen Zaubers zu erfüllen, misslingt dieser automatisch."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 6. oder eines höheren Grades wirkst, vergrößert sich die Kantenlänge des Würfels pro Grad über den 5. hinaus um 1,50 m."
  },
  {
    name: "Erwecken",
    schule: "Verwandlung",
    grad: 5,
    zeitaufwand: "8 Stunden",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Achat im Wert von mindestens 1.000 GM, der beim Wirken des Zaubers verbraucht wird",
    klassen: ["Barde", "Druide"],
    ritual: false,
    beschreibung: [
      "Du verbringst die Wirkungszeit damit, magische Pfade in einem kostbaren Edelstein nachzuziehen, und berührst anschließend ein Tier oder eine Pflanze der Größenkategorie riesig oder kleiner. Das Ziel darf entweder überhaupt keinen Intelligenzwert besitzen oder muss einen von 3 oder weniger aufweisen. Der Zauber verleiht dem Ziel eine Intelligenz von 10 und die Fähigkeit, eine Sprache zu sprechen, die du beherrschst.",
      "Ist das Ziel eine Pflanze, kann diese nun ihre Wurzeln, Ranken, Schlinggewächse oder Ähnliches willentlich bewegen und erhält Sinne, die denen eines Menschen ähneln.",
      "Das erwachte Tier oder die erwachte Pflanze ist für 30 Tage von dir bezaubert oder so lange, bis du oder einer deiner Gefährten ihm schadet. Wenn die Bezauberung endet, kann die erwachte Kreatur entscheiden, ob sie dir freundlich gesonnen bleiben möchte."
    ]
  },
  {
    name: "Erzwungenes Duell",
    schule: "Verzauberung",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Du versuchst, eine Kreatur in ein Duell zu zwingen. Wähle eine Kreatur in Reichweite, die du sehen kannst: Sie muss einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg wird das Ziel von dir angezogen. Für die Wirkungsdauer ist das Ziel im Nachteil bei Angriffswürfen gegen Kreaturen mit Ausnahme von dir. Zusätzlich muss es einen Weisheitsrettungswurf ablegen, wenn es sich weiter als 9 m von dir entfernen möchte. Gelingt dieser, schränkt der Zauber die Bewegung des Ziels für diesen Zug nicht ein.",
      "Der Zauber endet, wenn du eine andere Kreatur angreifst, du einen Spruch auf eine andere feindliche Kreatur wirkst, wenn eine mit dir verbündete Kreatur das Ziel verletzt oder einen schädigenden Zauber auf es wirkt oder wenn du deinen Zug weiter als 9 m vom Ziel entfernt beendest."
    ]
  },
  {
    name: "Evards Schwarze Tentakel",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stück eines Tentakels von einem riesigen Oktopus oder Riesenkalmars",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Zuckende nachtschwarze Tentakel winden sich aus dem Boden in einem quadratischen Bereich mit 6 m Seitenlänge, der sich in Reichweite befindet und den du sehen kannst. Für die Wirkungsdauer verwandeln diese Tentakel den Boden in schwieriges Gelände.",
      "Wenn eine Kreatur das erste Mal in einem Zug den betroffenen Bereich betritt oder ihren Zug dort beginnt, muss ihr ein Geschicklichkeitsrettungswurf gelingen, um nicht 3W6 Wuchtschaden zu erleiden und bis zum Ende des Zaubers von den Tentakeln festgesetzt zu werden. Eine Kreatur, die ihren Zug in diesem Bereich beginnt und bereits von den Tentakeln festgesetzt ist, erleidet 3W6 Wuchtschaden.",
      "Ist eine Kreatur von den Tentakeln festgesetzt, darf sie einen Stärke- oder Geschicklichkeitswurf (ihre Wahl) gegen den SG zum Widerstehen deiner Zauber ablegen. Bei einem Erfolg kann sie sich befreien."
    ]
  },
  {
    name: "Fallen finden",
    schule: "Erkenntnismagie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du spürst die Präsenz von Fallen, die sich in Reichweite und in deiner Sichtlinie befinden. Als Falle zählt für diesen Zauber alles, was einen plötzlichen oder unerwarteten Effekt auslösen könnte (der vom Erschaffer vorgesehen war), den du als schädigend oder nicht wünschenswert erachtest.",
      "Somit nimmt der Spruch einen Bereich wahr, auf dem der Zauber Alarm liegt, eine Glyphe des Schutzes wirkt oder in dem sich eine mechanische Grubenfalle befindet. Im Gegensatz dazu würde er nicht auf eine natürliche Schwachstelle im Boden oder eine instabile Decke hinweisen.",
      "Der Zauber zeigt nur, dass eine Falle anwesend ist. Du erfährst nicht, wo genau sie sich befindet, aber sehr wohl die grundsätzliche Art der Gefahr."
    ]
  },
  {
    name: "Falsches Leben",
    schule: "Nekromantie",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "eine kleine Menge reiner Alkohol oder eines gebrannten alkoholischen Getränks",
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du stärkst dich mit einer nekromantischen Nachahmung von Leben, sodass du für die Wirkungsdauer 1W4 + 4 temporäre Trefferpunkte erhältst."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, erhältst du für jeden Grad über den 1. hinaus 5 zusätzliche temporäre Trefferpunkte."
  },
  {
    name: "Federfall",
    schule: "Verwandlung",
    grad: 1,
    zeitaufwand: "1 Reaktion, ausgeführt wenn eine Kreatur im Umkreis von 18 m um dich fällt",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "M"],
    material: "eine kleine Feder oder Daune",
    klassen: ["Barde", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Wähle bis zu fünf fallende Kreaturen in Reichweite. Die Geschwindigkeit ihres Falls verlangsamt sich für die Wirkungsdauer auf 18 m pro Runde. Landet eine Kreatur, ehe der Zauber endet, erleidet sie keinen Sturzschaden und kann auf den Füßen landen. Dann endet der Zauber für die Kreatur."
    ]
  },
  {
    name: "Feenfeuer",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde", "Druide", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Jeder Gegenstand innerhalb eines Würfels mit 6 m Kantenlänge in Reichweite wird von blauem, grünem oder violettem Licht umgeben (deine Wahl). Alle Kreaturen, die sich im Wirkungsbereich aufhalten, werden ebenfalls von Licht umgeben, wenn ihnen ein Geschicklichkeitsrettungswurf misslingt. Für die Wirkungsdauer geben Gegenstände und betroffene Kreaturen dämmriges Licht in einem Radius von 3 m ab.",
      "Angriffswürfe gegen betroffene Kreaturen oder Gegenstände sind im Vorteil, wenn der Angreifer das Ziel sehen kann. Betroffene Kreaturen oder Gegenstände ziehen keinen Nutzen aus Unsichtbarkeit."
    ]
  },
  {
    name: "Feenwesen beschwören",
    schule: "Beschwörung",
    grad: 6,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide", "Hexenmeister"],
    ritual: false,
    beschreibung: [
      "Du beschwörst ein Feenwesen mit Herausforderungsgrad 6 oder niedriger oder einen Feengeist, der die Gestalt eines Tieres mit Herausforderungsgrad 6 oder niedriger annimmt. Das Wesen erscheint in einem nicht besetzten Bereich in Reichweite, den du sehen kannst. Das Feenwesen verschwindet, wenn seine Trefferpunkte auf 0 fallen oder der Zauber endet.",
      "Für die Wirkungsdauer ist das Feenwesen mit dir und deinen Gefährten verbündet. Würfle seine Initiative. Das Feenwesen gehorcht allen verbalen Befehlen, die du ihm erteilst, solange diese nicht gegen seine Gesinnung verstoßen. Ohne Befehle verteidigt es sich gegen feindliche Kreaturen, führt aber ansonsten keine Aktionen aus.",
      "Wenn deine Konzentration unterbrochen wird, verschwindet das Feenwesen nicht, sondern du verlierst die Kontrolle über es. Es wird dir und deinen Gefährten gegenüber feindlich und verschwindet 1 Stunde, nachdem du es beschworen hast."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 7. oder eines höheren Grades wirkst, steigt der Herausforderungsgrad des Feenwesens für jeden Grad über den 6. hinaus um 1."
  },
  {
    name: "Fesseln",
    schule: "Verzauberung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Hexenmeister"],
    ritual: false,
    beschreibung: [
      "Du intonierst eine ablenkende Folge von Worten, die dafür sorgt, dass Kreaturen deiner Wahl in Reichweite, die dich hören können, einen Charismarettungswurf ablegen müssen. Kreaturen, die nicht bezaubert werden können, sind automatisch erfolgreich. Kämpfen du oder deine Gefährten gegen eine Kreatur, ist diese bei ihrem Rettungswurf im Vorteil.",
      "Misslingt der Rettungswurf, ist das Ziel im Nachteil bei Würfen auf Weisheit (Wahrnehmung), um Kreaturen mit Ausnahme von dir wahrzunehmen, bis der Zauber endet oder bis das Ziel dich nicht mehr hören kann. Der Zauber endet auch, wenn du kampfunfähig wirst oder nicht mehr sprechen kannst."
    ]
  },
  {
    name: "Fesselnder Schlag",
    schule: "Beschwörung",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Waldläufer"],
    ritual: false,
    beschreibung: [
      "Das nächste Mal, wenn du innerhalb der Wirkungsdauer eine Kreatur mit einem Waffenangriff triffst, erscheint eine sich windende Masse dorniger Ranken am Einschlagspunkt. Das Ziel muss einen Stärkerettungswurf ablegen, um nicht bis zum Ende des Zaubers von den magischen Ranken festgesetzt zu werden. Eine Kreatur der Größenkategorie groß oder größer ist im Vorteil bei diesem Rettungswurf. Bei einem Erfolg verdorren die Ranken sofort.",
      "Solange das Ziel von diesem Zauber festgesetzt ist, erleidet es zu Beginn eines jeden seiner Züge 1W6 Stichschaden. Eine Kreatur, die von den Ranken festgesetzt ist oder die eine betroffene Kreatur berühren kann, darf einen Stärkewurf gegen den SG zum Widerstehen deiner Zauber ablegen. Bei einem Erfolg wird das Ziel befreit."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 1. hinaus um 1W6."
  },
  {
    name: "Feuerball",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "45 m",
    komponenten: ["V", "G", "M"],
    material: "eine winzige Kugel aus Fledermauskot und Schwefel",
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein gleißender Lichtblitz schießt aus einem deiner Finger zu einem Punkt deiner Wahl in Reichweite und erblüht mit einem dunklen Grollen zu einer feurigen Explosion aus Flammen. Alle Kreaturen in einem Radius von 6 m um diesen Punkt müssen einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet ein Ziel 8W6 Feuerschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "Das Feuer kann sich um Ecken ausbreiten. Es entzündet alle brennbaren Gegenstände im Bereich, die nicht getragen oder in der Hand gehalten werden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 3. hinaus um 1W6."
  },
  {
    name: "Feuerpfeil",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du schleuderst einen Splitter aus Feuer auf eine Kreatur in Reichweite. Führe einen Fernkampf-Zauberangriff gegen das Ziel aus. Bei einem Treffer erleidet es 1W10 Feuerschaden. Ein brennbarer Gegenstand, der von diesem Zauber getroffen wird, geht in Flammen auf, falls er nicht getragen oder in der Hand gehalten wird.",
      "Der Schaden dieses Zaubers steigt jeweils um 1W10 bei Erreichen der 5. (2W10), 11. (3W10) und 17. Stufe (4W10)."
    ]
  },
  {
    name: "Feuerschild",
    schule: "Hervorrufung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "10 Minuten",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Phosphor oder ein Glühwürmchen",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Winzige dünne Flammen umgeben deinen Körper für die Wirkungsdauer und strahlen innerhalb von 3 m helles Licht sowie im Radius von weiteren 3 m dämmriges Licht aus. Du kannst den Zauber vorzeitig beenden, indem du eine Aktion dazu verwendest.",
      "Die Flammen verleihen dir einen Wärme- oder einen Kälteschild (deine Wahl). Der Wärmeschild bietet dir eine Resistenz gegen Kälteschaden, der Kälteschild eine Resistenz gegen Feuerschaden.",
      "Trifft dich außerdem eine Kreatur im Umkreis von 1,50 m mit einem Nahkampfangriff, explodiert der Schild in einer Woge magischer Energie. Der Angreifer erleidet 2W8 Feuerschaden bei einem Wärmeschild oder 2W8 Kälteschaden bei einem Kälteschild."
    ]
  },
  {
    name: "Feuersturm",
    schule: "Hervorrufung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "45 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Druide", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein Sturm aus mehreren Wogen tosender Flammen erscheint an einem Ort deiner Wahl in Reichweite. Der Bereich des Sturms besteht aus bis zu zehn Würfeln jeweils mit einer Kantenlänge von 3 m, die du beliebig anordnen kannst. Jeder Würfel muss mit mindestens einer Seite an die Seite eines anderen Würfels angrenzen. Jede Kreatur in diesem Bereich muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet ein Ziel 7W10 Feuerschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "Das Feuer beschädigt Gegenstände im Wirkungsbereich und entzündet brennbare Gegenstände, die nicht getragen oder in der Hand gehalten werden. Du kannst festlegen, dass die Pflanzen in der Umgebung vom Effekt des Zaubers nicht betroffen werden."
    ]
  },
  {
    name: "Feuerwand",
    schule: "Hervorrufung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein kleines Stück Phosphor",
    klassen: ["Druide", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine Barriere aus Feuer auf einem festen Untergrund in Reichweite. Sie kann gerade sein (bis zu 18 m lang, 6 m hoch und 30 cm dick) oder ringförmig (bis zu 6 m Durchmesser, 6 m Höhe und 30 cm Dicke). Die Barriere ist mit Blicken nicht zu durchdringen und hält für die Wirkungsdauer an.",
      "Erschaffst du die Feuerwand, müssen alle Kreaturen in ihrem Bereich einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 5W8 Feuerschaden oder halb so viel Schaden bei einem gelungenen Rettungswurf.",
      "Eine Seite der Feuerwand, die du beim Wirken des Zaubers bestimmst, verursacht bei jeder Kreatur 5W8 Feuerschaden, die ihren Zug innerhalb von 3 m zu dieser Seite beendet oder die Barriere das erste Mal in einem Zug betritt. Die andere Seite der Feuerwand verursacht keinen Schaden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 5. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 4. hinaus um 1W8."
  },
  {
    name: "Finger des Todes",
    schule: "Nekromantie",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du lässt negative Energie durch eine Kreatur pulsieren, die sich in Reichweite befindet und die du sehen kannst, was extreme Schmerzen verursacht. Das Ziel muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet es 7W8 + 30 nekrotischen Schaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "Eine humanoide Kreatur, die durch diesen Zauber getötet wird, erhebt sich zu Beginn deines nächsten Zuges als Zombie, der dauerhaft unter deiner Kontrolle steht und deinen verbalen Befehlen nach besten Möglichkeiten folgt."
    ]
  },
  {
    name: "Flammen erzeugen",
    schule: "Beschwörung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "10 Minuten",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Eine flackernde Flamme erscheint in deiner Hand. Diese bleibt für die Wirkungsdauer bestehen und beschädigt weder dich noch deine Ausrüstung. Sie strahlt innerhalb von 3 m helles Licht und in einem Radius von weiteren 3 m dämmriges Licht aus. Der Zauber endet, wenn du ihn als Aktion aufhebst oder noch einmal wirkst.",
      "Du kannst mit der Flamme auch angreifen, dies beendet jedoch den Zauber. Beim Wirken des Zaubers oder als Aktion in einem späteren Zug kannst du die Flamme auf eine Kreatur innerhalb von 9 m werfen. Führe einen Fernkampf-Zauberangriff aus. Bei einem Treffer erleidet das Ziel 1W8 Feuerschaden.",
      "Der Schaden dieses Zaubers steigt jeweils um 1W8 bei Erreichen der 5. (2W8), 11. (3W8) und 17. Stufe (4W8)."
    ]
  },
  {
    name: "Flammende Wolke",
    schule: "Beschwörung",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "45 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Eine wirbelnde Wolke aus Rauch, die von weißglühender Asche durchzogen ist, erscheint als Sphäre mit einem Durchmesser von 6 m zentriert um einen Punkt in Reichweite. Die Wolke breitet sich um Ecken aus, und ihr Bereich ist komplett verschleiert. Sie bleibt für die Wirkungsdauer bestehen oder bis ein mittelstarker oder stärkerer Wind (mindestens 15 km/h) sie auflöst.",
      "Erschaffst du die Wolke, müssen alle Kreaturen in ihrem Bereich einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 10W8 Feuerschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. Eine Kreatur muss diesen Rettungswurf auch ablegen, wenn sie den Bereich das erste Mal in einem Zug betritt oder ihren Zug dort beginnt.",
      "Die Wolke bewegt sich am Ende jedes deiner Züge 3 m direkt von dir weg in eine Richtung deiner Wahl."
    ]
  },
  {
    name: "Flammenklinge",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "ein Blatt Sumach",
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine brennende Klinge in einer freien Hand. Die Klinge ähnelt in Gestalt und Größe einem Krummsäbel und bleibt für die Wirkungsdauer bestehen. Wenn du die Klinge loslässt, verschwindet sie, du kannst sie aber als Bonusaktion zurückrufen. Du kannst deine Aktion verwenden, um einen Nahkampf-Zauberangriff mit der Flammenklinge auszuführen. Bei einem Treffer erleidet das Ziel 3W6 Feuerschaden.",
      "Die Flammenklinge strahlt innerhalb von 3 m helles Licht und in einem Radius von weiteren 3 m dämmriges Licht aus."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 3. hinaus um 1W6."
  },
  {
    name: "Flammenkugel",
    schule: "Beschwörung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "etwas Talg, eine Prise Schwefel und etwas Eisenpulver",
    klassen: ["Druide", "Magier"],
    ritual: false,
    beschreibung: [
      "Eine Sphäre aus Feuer mit einem Durchmesser von 1,50 m erscheint in einem nicht besetzten Bereich deiner Wahl in Reichweite und bleibt für die Wirkungsdauer bestehen. Jede Kreatur, die ihren Zug innerhalb von 1,50 m um die Sphäre beendet, muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 2W6 Feuerschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "Als Bonusaktion kannst du die Sphäre bis zu 9 m bewegen. Wenn du eine Kreatur mit der Sphäre rammst, muss das Ziel den oben beschriebenen Rettungswurf ablegen. Du kannst die Sphäre über Hindernisse bis zu 1,50 m Höhe lenken und über Gräben bis zu 3 m Breite springen lassen.",
      "Die Sphäre entzündet brennbare Gegenstände, die nicht getragen oder in der Hand gehalten werden, und strahlt innerhalb von 6 m helles Licht und in einem Radius von weiteren 6 m dämmriges Licht aus."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 2. hinaus um 1W6."
  },
  {
    name: "Flammenschlag",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Schwefel",
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Eine senkrechte Säule aus göttlichem Feuer fährt vom Himmel auf einen Ort herab, den du bestimmst. Alle Kreaturen innerhalb eines Zylinders mit 3 m Radius und 12 m Höhe, der um einen Punkt in Reichweite zentriert ist, müssen einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet ein Ziel 4W6 Feuerschaden und 4W6 gleißenden Schaden oder jeweils halb so viel Schaden bei einem erfolgreichen Rettungswurf."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 6. oder eines höheren Grades wirkst, steigt der Feuerschaden oder der gleißende Schaden (deine Wahl) für jeden Grad über den 5. hinaus um 1W6."
  },
  {
    name: "Fleisch zu Stein",
    schule: "Verwandlung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Kalk, Wasser und Erde",
    klassen: ["Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du versuchst, eine Kreatur in Reichweite, die du sehen kannst, in Stein zu verwandeln. Wenn der Körper des Ziels aus Fleisch besteht, muss die Kreatur einen Konstitutionsrettungswurf ablegen. Misslingt dieser, wird sie festgesetzt, weil ihr Fleisch auszuhärten beginnt. Bei einem erfolgreichen Rettungswurf ist die Kreatur nicht betroffen.",
      "Eine Kreatur, die durch den Zauber festgesetzt ist, legt am Ende jedes ihrer Züge einen weiteren Konstitutionsrettungswurf ab. Bei drei erfolgreichen Rettungswürfen endet der Zauber. Misslingt der Rettungswurf dreimal, wird das Ziel versteinert. Die Erfolge und Misserfolge müssen nicht direkt aufeinanderfolgen.",
      "Wird die Kreatur physisch zerbrochen, solange sie versteinert ist, erleidet sie dieselben Verstümmelungen, wenn sie sich zurückverwandelt. Wenn du deine Konzentration für die gesamte mögliche Wirkungsdauer aufrechterhältst, wird die Kreatur in Stein verwandelt, bis der Effekt aufgehoben wird."
    ]
  },
  {
    name: "Fliegen",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "die Schwungfeder eines beliebigen Vogels",
    klassen: ["Hexenmeister", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du berührst eine bereitwillige Kreatur. Das Ziel erhält für die Wirkungsdauer eine Flugbewegungsrate von 18 m. Wenn der Zauber endet, während sich die Kreatur noch in der Luft befindet, fällt sie zu Boden, es sei denn, sie kann den Sturz verhindern."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 3. hinaus eine zusätzliche Kreatur als Ziel wählen."
  },
  {
    name: "Flimmern",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Während der Wirkungsdauer dieses Zaubers darfst du am Ende eines jeden deiner Züge mit einem W20 würfeln. Bei einem Ergebnis von 11 oder höher verschwindest du von deiner augenblicklichen Existenzebene und erscheinst auf der Ätherebene. Zu Beginn deines nächsten Zuges kehrst du in einen nicht besetzten Bereich deiner Wahl zurück, der sich innerhalb von 1,50 m zu dem Punkt befindet, von dem du verschwunden bist. Du kannst den Zauber als Aktion beenden.",
      "Solange du dich auf der Ätherebene befindest, kannst du die Ebene, von der du gekommen bist, sehen und hören, allerdings nur in Grautönen bis zu einer Reichweite von 18 m. Außerdem kannst du nur Kreaturen beeinflussen oder von ihnen beeinflusst werden, die sich ebenfalls auf der Ätherebene aufhalten."
    ]
  },
  {
    name: "Fluch",
    schule: "Nekromantie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Kleriker", "Magier"],
    ritual: false,
    beschreibung: [
      "Du berührst eine Kreatur. Dieser muss ein Weisheitsrettungswurf gelingen, um nicht für die Wirkungsdauer des Zaubers verflucht zu werden. Beim Wirken des Zaubers kannst du die Art des Fluchs aus den folgenden Möglichkeiten auswählen:",
      "• Wähle einen Attributswert. Solange das Ziel verflucht ist, ist es im Nachteil bei Attributs- und Rettungswürfen, die mit diesem Attribut in Verbindung stehen.",
      "• Solange das Ziel verflucht ist, ist es im Nachteil bei Angriffswürfen gegen dich.",
      "• Solange das Ziel verflucht ist, muss es zu Beginn eines jeden seiner Züge einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg kann es in diesem Zug seine Aktion nicht nutzen.",
      "• Solange das Ziel verflucht ist, fügen deine Angriffe und Zauber ihm zusätzliche 1W8 nekrotischen Schaden zu.",
      "Der Zauber Fluch brechen beendet diesen Effekt."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz eines höheren Grades wirkst, verändert sich die Wirkungsdauer: bei einem Zauberplatz des 4. Grades „Konzentration, bis zu 10 Minuten”, bei einem des 5. oder 6. Grades 8 Stunden, bei einem des 7. Grades 24 Stunden. Wenn du einen Zauberplatz des 9. Grades verbrauchst, hält der Zauber an, bis er gebannt wird. Die Verwendung eines Zauberplatzes des 5. oder eines höheren Grades führt zu einer Wirkungsdauer, die keine Konzentration erfordert."
  },
  {
    name: "Fluch brechen",
    schule: "Bannmagie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Magier", "Paladin", "Hexenmeister"],
    ritual: false,
    beschreibung: [
      "Auf deine Berührung hin enden alle Flüche, die eine Kreatur oder einen Gegenstand betreffen. Ist der verfluchte Gegenstand magisch, bleibt der Fluch bestehen, aber der Zauber bricht die Einstimmung des Besitzers mit dem Gegenstand, sodass dieser abgelegt oder weggeworfen werden kann."
    ]
  },
  {
    name: "Freundschaft",
    schule: "Verzauberung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["G", "M"],
    material: "eine kleine Menge Schminke, die beim Wirken des Zaubers auf das Gesicht aufgetragen wird",
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Für die Wirkungsdauer bist du im Vorteil bei allen Charismaprüfungen in Verbindung mit einer Kreatur deiner Wahl, die dir nicht feindlich gesonnen ist. Wenn der Zauber endet, begreift die Kreatur, dass du Magie angewendet hast, um ihre Stimmung zu beeinflussen, und wird feindselig. Je nach Gesinnung könnte sie dich angreifen oder auf andere Weise Rache suchen."
    ]
  },
  {
    name: "Furcht",
    schule: "Illusion",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst (Kegel von 9 m)",
    komponenten: ["V", "G", "M"],
    material: "eine weiße Feder oder das Herz einer Henne",
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du projizierst ein geisterhaftes Bild der schlimmsten Ängste einer Kreatur. Alle Kreaturen in einem Kegel von 9 m müssen einen erfolgreichen Weisheitsrettungswurf ablegen, um nicht alles fallenzulassen, was sie in Händen halten, und für die Wirkungsdauer von dir verängstigt zu werden.",
      "Solange eine Kreatur durch diesen Zauber verängstigt ist, muss sie in jedem ihrer Züge die Spurtaktion verwenden und sich auf dem sichersten und kürzesten verfügbaren Weg von dir wegbewegen. Wenn die Kreatur ihren Zug an einem Ort beendet, an dem sie dich nicht mehr sehen kann, darf sie einen Weisheitsrettungswurf ablegen. Bei einem Erfolg endet der Zauber für die Kreatur."
    ]
  },
  {
    name: "Gasförmige Gestalt",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Gaze und eine Rauchschwade",
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Eine bereitwillige Kreatur, die du berührst, sowie alles, was sie trägt und in den Händen hält, nimmt für die Wirkungsdauer eine gasförmige Gestalt an und erscheint als Nebelwolke. Der Zauber endet, wenn die Trefferpunkte der Kreatur auf 0 fallen.",
      "Solange das Ziel in dieser Gestalt ist, verfügt es als einzige Bewegungsart über eine Flugbewegungsrate von 3 m und kann den Bereich einer anderen Kreatur betreten und besetzen. Es besitzt eine Resistenz gegen nichtmagischen Schaden und ist im Vorteil bei Stärke-, Geschicklichkeits- und Konstitutionsrettungswürfen. Die verwandelte Kreatur kann durch kleine Löcher und schmale Öffnungen dringen, muss jedoch Flüssigkeiten wie feste Oberflächen behandeln.",
      "In der Gestalt einer Nebelwolke kann die Kreatur weder sprechen noch mit Gegenständen interagieren. Das Ziel kann nicht angreifen und keine Zauber wirken."
    ]
  },
  {
    name: "Geas",
    schule: "Verzauberung",
    grad: 5,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "30 Tage",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde", "Kleriker", "Druide", "Paladin", "Magier"],
    ritual: false,
    beschreibung: [
      "Du erlegst einer Kreatur in Reichweite, die du sehen kannst, einen magischen Befehl auf und zwingst sie, eine Aufgabe zu erfüllen oder eine bestimmte Handlungsweise zu vermeiden. Wenn die Kreatur dich verstehen kann, muss sie einen erfolgreichen Weisheitsrettungswurf ablegen, um nicht für die Wirkungsdauer von dir bezaubert zu werden. Solange das Ziel von dir bezaubert ist, erleidet es 5W10 psychischen Schaden, immer wenn es auf eine Weise handelt, die deinen Anweisungen widerspricht, aber nicht öfter als einmal pro Tag.",
      "Du kannst jeden Befehl erteilen, mit Ausnahme von Handlungen, die zum sicheren Tod des Ziels führen würden. Erteilst du einen selbstmörderischen Befehl, endet der Zauber sofort. Du kannst den Zauber vorzeitig abbrechen, indem du eine Aktion nutzt. Die Zauber Fluch brechen, Vollständige Genesung oder Wunsch können ihn ebenfalls beenden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 7. oder 8. Grades wirkst, beträgt die Wirkungsdauer 1 Jahr. Verbrauchst du einen Zauberplatz des 9. Grades, hält der Effekt an, bis er von einem der oben genannten Zauber beendet wird."
  },
  {
    name: "Gebet der Heilung",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Bis zu sechs Kreaturen deiner Wahl in Reichweite, die du sehen kannst, erhalten jeweils Trefferpunkte zurück in Höhe von 2W8 + den Modifikator deines zum Zaubern relevanten Attributs. Der Zauber hat keine Auswirkungen auf Untote oder Konstrukte."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, steigt die Anzahl der geheilten Trefferpunkte für jeden Grad über den 2. hinaus um 1W8."
  },
  {
    name: "Gedanken wahrnehmen",
    schule: "Erkenntnismagie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "eine Kupfermünze",
    klassen: ["Barde", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Für die Wirkungsdauer kannst du die Gedanken bestimmter Kreaturen lesen. Beim Wirken des Zaubers oder als Aktion in jedem deiner Züge kannst du deinen Verstand auf eine Kreatur im Umkreis von 9 m richten, die du sehen kannst. Besitzt die gewählte Kreatur eine Intelligenz von 3 oder weniger oder spricht sie keine Sprache, ist sie von dem Zauber nicht betroffen.",
      "Du erfährst zunächst die oberflächlichen Gedanken der Kreatur. Als Aktion kannst du entweder deine Aufmerksamkeit auf eine andere Kreatur richten oder versuchen, tiefer in den Verstand deines bisherigen Ziels einzudringen. Wenn du dich stärker konzentrierst, muss das Ziel einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg erhältst du Einsichten in seine Beweggründe und den emotionalen Zustand. Ist der Rettungswurf erfolgreich, endet der Zauber.",
      "In jedem Fall ist sich das Ziel bewusst, dass du in seinen Verstand eindringst. Das Ziel kann als Aktion einen Intelligenzwurf ablegen; ist das Ergebnis höher als deins, endet der Zauber.",
      "Du kannst diesen Zauber auch einsetzen, um die Anwesenheit denkender Wesen zu bemerken, die du nicht sehen kannst. Der Zauber durchdringt Hindernisse, wird jedoch blockiert von 60 cm Fels, 5 cm eines gewöhnlichen Metalls oder einer dünnen Schicht Blei."
    ]
  },
  {
    name: "Gedankenleere",
    schule: "Bannmagie",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Magier"],
    ritual: false,
    beschreibung: [
      "Bis der Zauber endet, ist eine bereitwillige Kreatur, die du berührst, immun gegen psychischen Schaden, jeden Effekt, der ihre Emotionen spüren oder Gedanken lesen würde, Erkenntnismagie sowie den Zustand bezaubert. Der Zauber verhindert sogar, dass der Spruch Wunsch oder Effekte ähnlicher Macht verwendet werden, um den Verstand des Ziels zu beeinflussen oder Informationen über das Ziel zu erhalten."
    ]
  },
  {
    name: "Gefühle besänftigen",
    schule: "Verzauberung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Kleriker"],
    ritual: false,
    beschreibung: [
      "Du versuchst, starke Empfindungen in einer Personengruppe zu unterdrücken. Alle humanoiden Kreaturen innerhalb einer Sphäre mit einem Radius von 6 m, zentriert um einen Punkt deiner Wahl in Reichweite, müssen einen Charismarettungswurf ablegen. Jede betroffene Kreatur kann diesen Rettungswurf freiwillig nicht bestehen. Bei einem Misserfolg wählst du einen der folgenden zwei Effekte:",
      "• Du unterdrückst jeden Effekt, der ein Ziel bezaubert oder verängstigt. Wenn dein Zauber endet, tritt der unterdrückte Effekt wieder in Kraft, vorausgesetzt seine Wirkung ist in der Zwischenzeit nicht beendet.",
      "• Du machst ein Ziel gleichgültig gegenüber Kreaturen deiner Wahl, denen es feindlich gesonnen ist. Diese Gleichgültigkeit endet, wenn das Ziel angegriffen wird, durch einen Zauber Schaden erleidet oder sieht, wie einer seiner Verbündeten verletzt wird. Endet der Zauber, wird die Kreatur wieder feindselig, wenn der SL nichts anderes festlegt."
    ]
  },
  {
    name: "Gegenstand aufspüren",
    schule: "Erkenntnismagie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "ein gegabelter Zweig",
    klassen: ["Barde", "Kleriker", "Druide", "Paladin", "Waldläufer", "Magier"],
    ritual: false,
    beschreibung: [
      "Beschreibe oder benenne einen Gegenstand, mit dem du vertraut bist. Du erspürst, in welcher Richtung sich der Gegenstand befindet, solange dieser nicht weiter als 300 m entfernt ist. Wenn sich der Gegenstand bewegt, weißt du, in welche Richtung diese Bewegung stattfindet.",
      "Der Zauber kann einen bestimmten Gegenstand aufspüren, den du kennst, solange du ihn mindestens einmal aus der Nähe gesehen hast (maximal 9 m Entfernung). Alternativ kannst du den nächsten Gegenstand einer bestimmten Art ausfindig machen, wie eine bestimmte Art von Kleidung, Schmuck, Möbel, Werkzeug oder Waffe.",
      "Der Zauber vermag den Gegenstand nicht aufzuspüren, wenn Blei, selbst eine dünne Schicht, den direkten Weg zwischen dir und der Kreatur blockiert."
    ]
  },
  {
    name: "Gegenstände beleben",
    schule: "Verwandlung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Gegenstände erwachen auf deinen Befehl hin zum Leben. Wähle bis zu zehn nicht-magische Gegenstände in Reichweite, die nicht getragen oder in der Hand gehalten werden. Mittelgroße Ziele zählen als zwei Gegenstände, große Ziele als vier und riesige als acht. Gegenstände, die größer als riesig sind, können nicht betroffen werden. Jedes Ziel wird belebt und zu einer Kreatur unter deiner Kontrolle, bis der Zauber endet oder die Trefferpunkte des Gegenstands auf 0 sinken.",
      "In jedem deiner Züge kannst du eine Bonusaktion verwenden, um geistig jegliche Kreaturen zu befehligen, die du mit diesem Zauber erschaffen hast und die sich innerhalb von 150 m befinden (mehrere Kreaturen kannst du entweder einzeln befehligen oder alle auf einmal, wobei du allen den gleichen Befehl geben musst). Entweder entscheidest du konkret, welche Aktion die Kreatur in ihrem nächsten Zug ausführt und wohin sie sich bewegt, oder du erteilst einen allgemeinen Befehl, wie das Bewachen eines Raumes oder Flurs. Ohne Befehl verteidigt sich die Kreatur nur. Sobald sie einen Befehl erhalten hat, führt sie ihn aus, bis die Aufgabe abgeschlossen ist.",
      {
        typ: "tabelle",
        titel: "Spielwerte für belebte Gegenstände",
        spalten: ["Größe", "TP", "RK", "Angriff", "STR", "GES"],
        zeilen: [
          ["Sehr klein", "20", "18", "+8 zum Treffen, 1W4 + 4 Schaden", "4", "18"],
          ["Klein", "25", "16", "+6 zum Treffen, 1W8 + 2 Schaden", "6", "14"],
          ["Mittelgroß", "40", "13", "+5 zum Treffen, 2W6 + 1 Schaden", "10", "12"],
          ["Groß", "50", "10", "+6 zum Treffen, 2W10 + 2 Schaden", "14", "10"],
          ["Riesig", "80", "10", "+8 zum Treffen, 2W12 + 4 Schaden", "18", "6"]
        ]
      },
      "Ein belebter Gegenstand ist ein Konstrukt, dessen RK, Trefferpunkte, Angriffe, Stärke und Geschicklichkeit von seiner Größe abhängen. Seine Konstitution beträgt 10, seine Intelligenz und Weisheit 3, sein Charisma 1. Der Gegenstand verfügt über eine Bewegungsrate von 9 m. Besitzt er keine Beine oder etwas Ähnliches, das er zur Fortbewegung nutzen kann, schwebt er mit einer Flugbewegungsrate von 9 m. Ist der Gegenstand fest mit einer Oberfläche oder einem größeren Gegenstand verbunden, beispielsweise durch eine in die Wand eingelassene Kette, beträgt seine Bewegungsrate 0. Der belebte Gegenstand besitzt Blindsicht mit einem Radius von 9 m und ist über diese Entfernung hinaus blind. Fallen seine Trefferpunkte auf 0, nimmt er wieder seine unbelebte Gestalt an, wobei jeglicher überzähliger Schaden auf die ursprüngliche Form übertragen wird.",
      "Wenn du einem Gegenstand einen Angriff befiehlst, führt er einen einzelnen Nahkampfangriff gegen eine Kreatur aus, die sich innerhalb von 1,50 m um ihn befindet. Der Angriffsbonus und der Wuchtschaden hängen von seiner Größe ab. Dein SL könnte festlegen, dass ein bestimmter Gegenstand Hieb- oder Stichschaden verursacht, abhängig von seiner Gestalt."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 6. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 5. hinaus zwei weitere Gegenstände beleben."
  },
  {
    name: "Gegenzauber",
    schule: "Bannmagie",
    grad: 3,
    zeitaufwand: "1 Reaktion, die du ausführst, wenn du siehst, dass eine Kreatur innerhalb von 18 m einen Zauber wirkt",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["G"],
    material: null,
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du versuchst, eine Kreatur beim Wirken eines Zaubers zu unterbrechen. Spricht die Kreatur einen Zauber des 3. oder eines niedrigeren Grades, misslingt dieser und hat keinen Effekt. Handelt es sich um einen Zauber des 4. oder eines höheren Grades, lege einen Attributswurf mit deinem Attribut zum Zauberwirken ab. Der SG beträgt 10 + den Grad des Zaubers. Bei einem Erfolg misslingt der Zauber der Kreatur und hat keinen Effekt."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, hat der unterbrochene Spruch keinen Effekt, wenn sein Grad dem des verbrauchten Zauberplatzes entspricht oder niedriger ist."
  },
  {
    name: "Gehässiger Spott",
    schule: "Verzauberung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde"],
    ritual: false,
    beschreibung: [
      "Du rufst einer Kreatur in Reichweite, die du sehen kannst, eine wahre Flut von Beleidigungen entgegen, in die subtile Verzauberungen gewebt sind. Wenn das Ziel dich hören kann (es braucht dich nicht zu verstehen), muss ihm ein Weisheitsrettungswurf gelingen, um nicht 1W4 psychischen Schaden zu erleiden und beim nächsten Angriffswurf im Nachteil zu sein, den es bis zum Ende seines nächsten Zuges ausführt.",
      "Der Schaden dieses Zaubers steigt jeweils um 1W4 bei Erreichen der 5. (2W4), 11. (3W4) und 17. Stufe (4W4)."
    ]
  },
  {
    name: "Geisterross",
    schule: "Illusion",
    grad: 3,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier"],
    ritual: true,
    beschreibung: [
      "Eine große geisterhafte und pferdeartige Kreatur erscheint auf dem Boden in einem nicht besetzten Bereich deiner Wahl, der sich in Reichweite befindet. Du entscheidest, wie die Kreatur aussieht, sie ist jedoch immer mit einem Sattel, Zaumzeug und Zügeln ausgerüstet. Diese magisch erzeugten Gegenstände verschwinden in einer Rauchwolke, wenn sie mehr als 3 m vom Ross entfernt werden.",
      "Für die Wirkungsdauer können du oder eine Kreatur deiner Wahl auf dem Geisterross reiten. Dieses verwendet die Spielwerte eines Reitpferds, verfügt aber über eine Bewegungsrate von 30 m und kann 15 km pro Stunde zurücklegen (oder 19,5 km bei schnellem Reisetempo). Wenn der Zauber endet, verschwindet das Ross langsam, sodass der Reiter 1 Minute Zeit hat, um abzusteigen. Der Zauber endet, wenn du eine Aktion verwendest, um ihn zu bannen, oder das Ross Schaden erleidet."
    ]
  },
  {
    name: "Gestalt verändern",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du nimmst eine andere Gestalt an. Wähle beim Wirken des Zaubers eine der folgenden Optionen. Der Effekt hält für die gesamte Wirkungsdauer an. Während dieser Zeit kannst du als Aktion die gewählte Option beenden und dich für eine andere entscheiden.",
      "• Aquatische Anpassung: Du passt deinen Körper für eine Unterwasserumgebung an. Kiemen öffnen sich und Schwimmhäute wachsen zwischen deinen Fingern. Du kannst unter Wasser atmen und erhältst eine Schwimmbewegungsrate gleich deiner Grundbewegungsrate.",
      "• Aussehen verändern: Du verwandelst dein Äußeres in ein beliebiges Erscheinungsbild deiner Wahl. Dabei kannst du folgende Aspekte verändern: deine Größe, dein Gewicht, deine Gesichtszüge, den Klang deiner Stimme, die Länge und Farbe deiner Haare sowie andere einzigartige Besonderheiten. Es ist dir möglich, dich als Mitglied eines anderen Volkes auszugeben, doch ändern sich deine Spielwerte nicht. Du kannst nicht als Kreatur einer anderen Größe erscheinen und deine grundlegende Form bleibt die gleiche: Wenn du zweibeinig bist, kannst du diesen Zauber nicht nutzen, um vierbeinig zu werden. Zu jedem Zeitpunkt während der Wirkungsdauer kannst du eine Aktion aufwenden, um dein Aussehen auf diese Art erneut zu verändern.",
      "• Natürliche Waffen: Dir wachsen Klauen, Reißzähne, Stacheln, Hörner oder andere natürliche Waffen deiner Wahl. Deine waffenlosen Schläge verursachen 1W6 Wucht-, Stich- oder Hiebschaden, entsprechend der Art deiner natürlichen Waffe. Außerdem bist du geübt mit waffenlosen Schlägen. Deine natürliche Waffe ist magisch und du erhältst einen Bonus von +1 auf Angriffs- und Schadenswürfe, die du mit ihr ausführst."
    ]
  },
  {
    name: "Gestaltwandel",
    schule: "Verwandlung",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "ein Jadestirnreif im Wert von mindestens 1.500 GM, den du aufsetzen musst, ehe du den Zauber wirkst",
    klassen: ["Druide", "Magier"],
    ritual: false,
    beschreibung: [
      "Du nimmst für die Wirkungsdauer die Gestalt einer anderen Kreatur an. Dies kann jede Kreatur sein, deren Herausforderungsgrad deiner Stufe entspricht oder niedriger ist. Es darf sich weder um ein Konstrukt noch einen Untoten handeln, außerdem musst du diese Art von Kreatur mindestens einmal gesehen haben. Du verwandelst dich in ein durchschnittliches Exemplar dieser Kreatur, ohne Klassenstufen oder Zauberfähigkeit.",
      "Deine Spielwerte werden durch die Spielwerte der gewählten Kreatur ersetzt, doch behältst du deine Gesinnung sowie deine Werte in Intelligenz, Weisheit und Charisma. Du bleibst auch in allen Fertigkeiten und Rettungswürfen geübt und erhältst zusätzlich jene der Kreatur. Wenn die Kreatur in einer Fertigkeit oder einem Rettungswurf geübt ist, in dem du auch geübt bist, und ihr Wert höher als deiner ist, verwende den Bonus der Kreatur. Du kannst keine legendären Aktionen oder Hortaktion der neuen Gestalt verwenden.",
      "Du erhältst die Trefferpunkte und Trefferwürfel der neuen Gestalt. Nimmst du wieder deine normale Gestalt an, besitzt du die Anzahl von Trefferpunkten, die du vor der Verwandlung hattest. Findet die Rückverwandlung statt, weil du auf 0 Trefferpunkte reduziert wirst, überträgt sich jeglicher überzähliger Schaden auf deine normale Gestalt. Solange dieser überzählige Schaden die Trefferpunkte deiner normalen Gestalt nicht auf 0 fallen lässt, wirst du nicht bewusstlos.",
      "Du behältst sämtliche Merkmale deiner Klasse, deines Volkes oder aus anderen Quellen und kannst sie verwenden, vorausgesetzt die neue Gestalt ist körperlich in der Lage, sie zu nutzen. Besondere Sinne (zum Beispiel Dunkelsicht) kannst du nicht verwenden, es sei denn, deine neue Gestalt besitzt diesen Sinn ebenfalls. Es ist dir nur möglich, zu sprechen, wenn die Kreatur auch sprechen kann.",
      "Bei deiner Verwandlung wählst du, ob deine Ausrüstung zu Boden fallen, mit der neuen Gestalt verschmelzen oder von ihr getragen werden soll. Getragene Ausrüstung funktioniert auf die normale Weise. Der SL entscheidet, ob du ein Ausrüstungsteil in der neuen Gestalt tragen kannst, abhängig von der Größe und Form der Gestalt. Deine Ausrüstung passt sich deiner neuen Gestalt nicht an, und jegliche Gegenstände, die nicht getragen werden können, müssen entweder zu Boden fallen oder mit der neuen Gestalt verschmelzen. Ausrüstung, die mit der Gestalt verschmilzt, hat keinen Effekt.",
      "Während der Wirkungsdauer dieses Zaubers kannst du deine Aktion verwenden, um eine neue Gestalt anzunehmen, wobei dieselben Einschränkungen und Regeln gelten wie oben beschrieben, mit einer Ausnahme: Wenn die neue Gestalt mehr Trefferpunkte besitzt als du im Augenblick, bleiben deine Trefferpunkte bei ihrem aktuellen Wert."
    ]
  },
  {
    name: "Gift und Krankheit entdecken",
    schule: "Erkenntnismagie",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "ein Eibenblatt",
    klassen: ["Kleriker", "Druide", "Paladin", "Waldläufer"],
    ritual: true,
    beschreibung: [
      "Für die Wirkungsdauer kannst du die Präsenz und die Position von Giften, giftigen Kreaturen und Krankheiten im Umkreis von 9 m erspüren. Außerdem bist du in der Lage, die Art des Giftes, der giftigen Kreatur oder der Krankheit zu bestimmen. Der Zauber kann die meisten Hindernisse durchdringen, wird aber blockiert von 30 cm Stein, 2,5 cm gewöhnlichem Metall, einer dünnen Schicht Blei oder 90 cm Holz oder Erde."
    ]
  },
  {
    name: "Gift versprühen",
    schule: "Beschwörung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide", "Hexenmeister", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du streckst deine Hand in Richtung einer Kreatur aus, die sich in Reichweite befindet und die du sehen kannst, und erzeugst eine Wolke ekelhaften Gases aus deiner Handfläche. Die Kreatur muss einen erfolgreichen Konstitutionsrettungswurf ablegen, sonst erleidet sie 1W12 Giftschaden.",
      "Der Schaden dieses Zaubers steigt jeweils um 1W12 bei Erreichen der 5. (2W12), 11. (3W12) und 17. Stufe (4W12)."
    ]
  },
  {
    name: "Glyphe des Schutzes",
    schule: "Bannmagie",
    grad: 3,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "bis der Zauber gebannt oder ausgelöst wird",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Weihrauch und Diamantstaub im Wert von mindestens 200 GM, die beide beim Wirken des Zaubers verbraucht werden",
    klassen: ["Barde", "Kleriker", "Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Beim Wirken dieses Zaubers schreibst du eine magische Glyphe entweder auf eine Oberfläche (wie einen Tisch oder einen Abschnitt des Fußbodens oder der Wand) oder – um sie zu verbergen – in einen Gegenstand, der verschlossen werden kann (wie ein Buch, eine Schriftrolle oder eine Schatztruhe). Wenn du eine Oberfläche wählst, kann die Glyphe maximal einen Bereich mit einem Radius von 3 m abdecken. Entscheidest du dich für einen Gegenstand, muss dieser an seinem Standort verbleiben. Wird er mehr als 3 m von dem Ort entfernt, an dem der Zauber gewirkt wurde, wird die Glyphe zerstört und der Zauber endet, ohne ausgelöst zu werden.",
      "Die Glyphe ist so gut wie unsichtbar und erfordert einen erfolgreichen Wurf auf Intelligenz (Nachforschungen) gegen den SG zum Widerstehen deiner Zauber, um entdeckt zu werden.",
      "Beim Wirken des Zaubers entscheidest du, wodurch die Glyphe ausgelöst wird. Glyphen, die auf eine Oberfläche geschrieben sind, werden am häufigsten dadurch ausgelöst, dass jemand sie berührt oder auf ihr steht, einen Gegenstand entfernt, der die Glyphe bedeckt, sich ihr auf eine bestimmte Entfernung nähert oder den Gegenstand manipuliert, auf dem sich die Glyphe befindet. Bei Glyphen, die in einem Gegenstand angebracht sind, sind die häufigsten Auslöser das Öffnen des Gegenstands, die Annäherung auf eine gewisse Entfernung zum Gegenstand oder das Sehen oder Lesen der Glyphe. Sobald eine Glyphe ausgelöst wurde, endet der Zauber.",
      "Du kannst den Auslöser noch weiter verfeinern, sodass der Zauber nur unter speziellen Umständen aktiviert wird oder die auslösende Kreatur bestimmte körperliche Eigenschaften (wie Größe oder Gewicht), einen festgelegten Typ (etwa nur Aberrationen oder Dunkelelfen) oder eine bestimmte Gesinnung aufweisen muss.",
      "Du kannst auch Bedingungen festlegen, unter denen die Glyphe nicht ausgelöst wird, beispielsweise wenn ein bestimmtes Passwort ausgesprochen wird.",
      "Beim Schreiben der Glyphe wählst du, ob es sich um explosive Runen oder eine Zauberglyphe handeln soll.",
      "• Explosive Runen: Wird diese Glyphe ausgelöst, explodiert ihre magische Energie in einer Sphäre mit einem Radius von 6 m, zentriert auf der Glyphe. Die Sphäre kann sich um Ecken ausbreiten. Jede Kreatur in diesem Bereich muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 5W8 Blitz-, Feuer-, Kälte-, Säure- oder Schallschaden (deine Wahl, wenn du die Glyphe erschaffst) oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "• Zauberglyphe: Du speicherst einen vorbereiteten Zauber des 3. oder eines niedrigeren Grades in der Glyphe, den du beim Erschaffen der Glyphe wirkst (zu diesem Zeitpunkt hat er keinen unmittelbaren Effekt). Der Zauber muss eine einzelne Kreatur oder ein Gebiet zum Ziel haben. Mit dem Auslösen der Glyphe wird der gespeicherte Zauber gewirkt. Hat der Zauber eine Kreatur zum Ziel, ist dies jene, welche die Glyphe ausgelöst hat. Beeinflusst der Zauber einen Bereich, ist dieser auf der auslösenden Kreatur zentriert. Wenn der Zauber Kreaturen beschwört oder schädigende Gegenstände oder Fallen erschafft, erscheinen sie so nahe wie möglich zum Eindringling und greifen ihn an. Erfordert der Zauber Konzentration, hält er bis zum Ende seiner vollen Wirkungsdauer an."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, steigt der Schaden der explosiven Runen für jeden Grad über den 3. hinaus um 1W8. Wenn du eine Zauberglyphe erschaffst, kannst du einen Spruch einspeichern, dessen Grad maximal dem Zauberplatz entspricht, den du zum Wirken der Glyphe des Schutzes verbraucht hast."
  },
  {
    name: "Göttliche Führung",
    schule: "Erkenntnismagie",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Druide", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du berührst eine bereitwillige Kreatur. Einmal während der Wirkungsdauer kann das Ziel mit einem W4 würfeln und das Ergebnis auf einen Attributswurf seiner Wahl addieren. Es darf sich vor oder nach dem Attributswurf dazu entscheiden, den Würfel einzusetzen. Anschließend endet der Zauber."
    ]
  },
  {
    name: "Göttliche Gunst",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Dein Gebet erfüllt dich mit göttlicher Macht. Bis der Zauber endet, verursacht deine Waffe bei jedem Treffer zusätzlich 1W4 gleißenden Schaden."
    ]
  },
  {
    name: "Göttliches Wort",
    schule: "Hervorrufung",
    grad: 7,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Du sprichst ein göttliches Wort aus, das mit der Macht erfüllt ist, welche die Welt am Anbeginn der Schöpfung geformt hat. Wähle eine beliebige Anzahl von Kreaturen in Reichweite, die du sehen kannst. Jede Kreatur, die dich hören kann, muss einen Charismarettungswurf ablegen. Bei einem Misserfolg erleidet die Kreatur einen Effekt, der von ihren aktuellen Trefferpunkten abhängt:",
      "• 50 Trefferpunkte oder weniger: taub für 1 Minute",
      "• 40 Trefferpunkte oder weniger: taub und blind für 10 Minuten",
      "• 30 Trefferpunkte oder weniger: taub, blind und betäubt für 1 Stunde",
      "• 20 Trefferpunkte oder weniger: sofortiger Tod",
      "Unabhängig von ihren aktuellen Trefferpunkten werden celestische Wesen, Feenwesen oder Unholde, denen ihr Rettungswurf nicht gelingt, auf ihre Heimatebene geschickt (wenn sie sich nicht bereits dort befinden). Zusätzlich können sie für 24 Stunden nicht in die Ebene zurückkehren, auf der der Zauber gewirkt wurde, es sei denn, sie setzen den Zauber Wunsch ein."
    ]
  },
  {
    name: "Gute Beeren",
    schule: "Verwandlung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Mistelzweig",
    klassen: ["Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Bis zu zehn Beeren erscheinen in deiner Hand und werden für die Wirkungsdauer mit Magie erfüllt. Eine Kreatur kann eine Aktion verwenden, um eine Beere zu essen. Dies stellt 1 Trefferpunkt wieder her, außerdem bietet die Beere genug Nahrung, um eine Kreatur für einen Tag zu versorgen.",
      "Die Beere verliert ihre Macht, wenn sie nicht innerhalb von 24 Stunden nach dem Wirken des Zaubers verzehrt wird."
    ]
  },
  {
    name: "Gutes und Böses bannen",
    schule: "Bannmagie",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "Weihwasser oder Silber- und Eisenpulver",
    klassen: ["Kleriker", "Paladin"],
    ritual: false,
    beschreibung: [
      "Flirrende Energie umgibt dich und beschützt dich vor Feenwesen, Untoten und anderen Kreaturen, die nicht von der Materiellen Ebene stammen. Für die Wirkungsdauer sind celestische Wesen, Elementare, Feenwesen, Unholde und Untote im Nachteil bei Angriffswürfen gegen dich.",
      "Du kannst den Zauber vorzeitig beenden, indem du einen der folgenden speziellen Effekte nutzt.",
      "• Verzauberung brechen: Als Aktion berührst du eine Kreatur, die von einem celestischen Wesen, einem Elementar, einem Feenwesen, einem Unhold oder einem Untoten bezaubert, verängstigt oder besessen ist. Die Kreatur, die du berührst, ist nicht länger bezaubert, verängstigt oder besessen.",
      "• Vertreiben: Als Aktion kannst du einen Nahkampf-Zauberangriff gegen ein celestisches Wesen, einen Elementar, ein Feenwesen, einen Unhold oder einen Untoten ausführen, den du erreichen kannst. Bei einem Treffer muss die Kreatur einen erfolgreichen Charismarettungswurf ablegen, um nicht zurück auf ihre Heimatebene geschickt zu werden (falls sie nicht bereits dort ist). Wenn sie nicht auf ihrer Heimatebene sind, werden Untote in den Schattensaum geschickt und Feenwesen in die Feenwildnis."
    ]
  },
  {
    name: "Gutes und Böses entdecken",
    schule: "Erkenntnismagie",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Paladin"],
    ritual: false,
    beschreibung: [
      "Für die Wirkungsdauer weißt du, ob sich Aberrationen, celestische Wesen, Elementare, Feenwesen, Unholde oder Untote im Umkreis von 9 m befinden. Falls sich derartige Kreaturen in deiner Nähe aufhalten, kennst du ihre genaue Position. Gleichermaßen weißt du, ob sich im Umkreis von 9 m Orte oder Gegenstände befinden, die magisch geweiht oder entweiht wurden.",
      "Der Zauber kann die meisten Hindernisse durchdringen, wird aber blockiert von 30 cm Stein, 2,5 cm gewöhnlichem Metall, einer dünnen Schicht Blei oder 90 cm Holz oder Erde."
    ]
  },
  {
    name: "Halbebene",
    schule: "Beschwörung",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["G"],
    material: null,
    klassen: ["Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine schattenhafte Tür in einer festen Oberfläche in Reichweite, die du sehen kannst. Die Tür ist groß genug, dass mittelgroße Kreaturen problemlos hindurchgehen können. Wird die Tür geöffnet, führt sie zu einer Halbebene, die ein leerer Raum mit einer Kantenlänge von 9 m zu sein scheint und aus Holz oder Stein besteht. Wenn der Zauber endet, verschwindet die Tür, und Kreaturen oder Gegenstände in der Halbebene bleiben dort gefangen, da die Tür auf ihrer Seite ebenfalls verschwindet.",
      "Immer wenn du diesen Zauber wirkst, kannst du entweder eine neue Halbebene erschaffen oder die Schattentür mit einer Halbebene verbinden, die du bei einem vorherigen Wirken des Zaubers geformt hast. Ist dir außerdem die Natur und der Inhalt einer Halbebene bekannt, die durch diesen Zauber von einer anderen Kreatur erschaffen wurde, kannst du die Schattentür stattdessen auch mit dieser Halbebene verbinden."
    ]
  },
  {
    name: "Hast",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein Span Süßholzwurzel",
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Wähle eine bereitwillige Kreatur in Reichweite, die du sehen kannst. Bis der Zauber endet, wird die Bewegungsrate des Ziels verdoppelt, es erhält einen Bonus von +2 auf seine RK, ist im Vorteil bei Geschicklichkeitsrettungswürfen und kann in jedem seiner Züge eine zusätzliche Aktion durchführen. Diese Aktion darf nur eingesetzt werden, um sich zurückzuziehen, sich zu verstecken, zu spurten, einen Gegenstand zu verwenden oder mit einer Waffe anzugreifen. Wenn der Zauber endet, kann das Ziel bis zum Ende seines nächsten Zuges keine Aktion durchführen und sich nicht bewegen, weil es von einer Welle der Erschöpfung ergriffen wird."
    ]
  },
  {
    name: "Heilendes Wort",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde", "Kleriker", "Druide"],
    ritual: false,
    beschreibung: [
      "Eine Kreatur deiner Wahl, die sich in Reichweite befindet und die du sehen kannst, erhält Trefferpunkte zurück in Höhe von 1W4 + den Modifikator deines zum Zaubern relevanten Attributs. Der Zauber hat keine Auswirkungen auf Untote oder Konstrukte."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt die Anzahl der geheilten Trefferpunkte für jeden Grad über den 1. hinaus um 1W4."
  },
  {
    name: "Heilige Aura",
    schule: "Bannmagie",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "ein winziges Relikt im Wert von 1.000 GM, das eine heilige Reliquie beinhaltet, wie einen Fetzen von der Robe eines Heiligen oder das Fragment eines heiligen Textes",
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Göttliches Licht breitet sich von dir aus und verdichtet sich in einem Radius von 9 m. Kreaturen deiner Wahl, die sich im Radius befinden, wenn du den Zauber wirkst, strahlen innerhalb von 1,50 m dämmriges Licht aus und sind im Vorteil bei allen Rettungswürfen. Außerdem sind andere Kreaturen im Nachteil bei Angriffswürfen gegen sie, bis der Zauber endet. Wenn außerdem ein Unhold oder Untoter eine betroffene Kreatur mit einem Nahkampfangriff trifft, blitzt die Aura in strahlendem Licht auf. Der Angreifer muss einen erfolgreichen Konstitutionsrettungswurf ablegen, um nicht für die Wirkungsdauer blind zu werden."
    ]
  },
  {
    name: "Heilige Flamme",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Flammengleiches Licht senkt sich auf eine Kreatur herab, die sich in Reichweite befindet und die du sehen kannst. Dem Ziel muss ein Geschicklichkeitsrettungswurf gelingen, sonst erleidet es 1W8 gleißenden Schaden. Bei diesem Rettungswurf ist das Ziel nicht im Vorteil aufgrund von Deckung.",
      "Der Schaden dieses Zaubers steigt jeweils um 1W8 bei Erreichen der 5. (2W8), 11. (3W8) und 17. Stufe (4W8)."
    ]
  },
  {
    name: "Heiliges Gespräch",
    schule: "Erkenntnismagie",
    grad: 5,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "Weihrauch und eine Phiole geweihtes oder entweihtes Wasser",
    klassen: ["Kleriker"],
    ritual: true,
    beschreibung: [
      "Du trittst in Kontakt mit deiner Gottheit oder einem göttlichen Gesandten und stellst bis zu drei Fragen, die mit Ja oder Nein beantwortet werden können. Du musst deine Fragen aussprechen, ehe der Zauber endet. Du erhältst eine korrekte Antwort auf jede Frage. Göttliche Wesen sind nicht unbedingt allwissend: Bezieht sich eine Frage auf Informationen, die das Wissen der Gottheit übersteigt, könntest du auch „unklar“ als Antwort erhalten. Falls eine Antwort von nur einem einzigen Wort irreführend sein könnte oder nicht dem Interesse der Gottheit entspricht, kann sie auch in einem kurzen Satz antworten (nach Entscheidung des SL).",
      "Wirkst du den Zauber zweimal oder öfter vor Beenden einer langen Rast, besteht eine kumulative Chance von 25 % für jeden Zauber nach dem ersten, dass du keine Antwort bekommst. Der SL führt diesen Wurf verdeckt aus."
    ]
  },
  {
    name: "Heiligtum",
    schule: "Bannmagie",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein kleiner Silberspiegel",
    klassen: ["Kleriker", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du schützt eine Kreatur in Reichweite vor Angriffen. Bis der Zauber endet, müssen alle Kreaturen, die das geschützte Ziel mit einem Angriff oder einem schädigenden Zauber attackieren wollen, zunächst einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg muss die Kreatur ein neues Ziel wählen oder der Angriff oder Zauber ist vergeudet. Der magische Schutz bewahrt das Ziel nicht vor Flächeneffekten, wie der Explosion eines Feuerballs.",
      "Wenn die geschützte Kreatur angreift oder einen Spruch wirkt, der eine gegnerische Kreatur betrifft, oder anderweitig Schaden anrichtet, endet dieser Zauber."
    ]
  },
  {
    name: "Heilung",
    schule: "Hervorrufung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Druide"],
    ritual: false,
    beschreibung: [
      "Wähle eine Kreatur, die sich in Reichweite befindet und die du sehen kannst. Eine Woge positiver Energie durchströmt das Ziel, das daraufhin 70 Trefferpunkte zurückerhält. Der Zauber beendet außerdem die Zustände blind und taub sowie alle Krankheiten, unter denen das Ziel leidet. Der Zauber hat keine Auswirkungen auf Untote oder Konstrukte."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 7. oder eines höheren Grades wirkst, steigt die Anzahl der geheilten Trefferpunkte für jeden Grad über den 6. hinaus um 10."
  },
  {
    name: "Heldenmahl",
    schule: "Beschwörung",
    grad: 6,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "eine mit Juwelen verzierte Schale im Wert von mindestens 1.000 GM, die beim Wirken des Zaubers verbraucht wird",
    klassen: ["Kleriker", "Druide"],
    ritual: false,
    beschreibung: [
      "Du erschaffst ein gewaltiges Festmahl aus prachtvollem Essen und Trinken. Das Verzehren des Festmahls dauert 1 Stunde, und es verschwindet nach dieser Zeit. Die positiven Effekte treten erst nach Ablauf dieser Stunde in Kraft. Das Festmahl bietet genug Speisen und Getränke für bis zu zwölf Kreaturen.",
      "Eine Kreatur, die an dem Festmahl teilnimmt, erhält mehrere Vorzüge. Sie wird von allen Krankheiten und Giften geheilt, wird immun gegen Gifte, kann nicht verängstigt werden und ist im Vorteil bei Weisheitsrettungswürfen. Ihre maximalen Trefferpunkte steigen um 2W10 und sie erhält ebenso viele Trefferpunkte zurück. Diese Vorzüge halten 24 Stunden lang an."
    ]
  },
  {
    name: "Heldenmut",
    schule: "Verzauberung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Paladin"],
    ritual: false,
    beschreibung: [
      "Eine bereitwillige Kreatur, die du berührst, wird mit Tapferkeit erfüllt. Bis der Zauber endet, kann die Kreatur nicht verängstigt werden und erhält zu Beginn eines jeden ihrer Züge temporäre Trefferpunkte gleich dem Modifikator deines zum Zaubern relevanten Attributs. Wenn der Zauber endet, verliert das Ziel alle verbleibenden temporären Trefferpunkte dieses Zaubers."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 1. hinaus eine zusätzliche Kreatur als Ziel wählen."
  },
  {
    name: "Hellsehen",
    schule: "Erkenntnismagie",
    grad: 3,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "1,5 km",
    komponenten: ["V", "G", "M"],
    material: "ein Fokus im Wert von mindestens 100 GM, entweder ein juwelenbesetztes Horn zum Hören oder ein Glasauge zum Sehen",
    klassen: ["Barde", "Kleriker", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst einen unsichtbaren Sensor in Reichweite, und zwar an einem Ort, der dir vertraut ist (den du entweder besucht oder schon einmal gesehen hast), oder an einem offensichtlichen Ort, der dir nicht vertraut ist (wie hinter einer Tür, um eine Ecke oder innerhalb eines Hains voller Bäume).",
      "Der Sensor verbleibt für die Wirkungsdauer an seinem Ort und kann weder angegriffen noch anderweitig beeinflusst werden.",
      "Wenn du den Zauber wirkst, wählst du entweder Sicht oder Gehör. Du kannst den gewählten Sinn durch den Sensor verwenden, als würdest du dich in seinem Bereich befinden. Als Aktion kannst du zwischen Sicht und Gehör wechseln.",
      "Eine Kreatur, die den Sensor sehen kann (weil sie beispielsweise unter dem Einfluss des Zaubers Unsichtbares sehen steht oder über wahre Sicht verfügt), nimmt ihn als leuchtende, etwa faustgroße und unberührbare Kugel wahr."
    ]
  },
  {
    name: "Hexenpfeil",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein Zweig von einem Baum, der vom Blitz getroffen worden ist",
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein Strahl knisternder, blauer Energie schießt auf eine Kreatur in Reichweite und erschafft einen anhaltenden Bogen aus Blitzen zwischen dir und dem Ziel. Führe einen Fernkampf-Zauberangriff gegen diese Kreatur aus. Bei einem Treffer erleidet sie 1W12 Blitzschaden. Außerdem kannst du für die Wirkungsdauer in jedem deiner Züge deine Aktion verwenden, um dem Ziel automatisch 1W12 Blitzschaden zuzufügen. Der Zauber endet, wenn du deine Aktion für eine andere Handlung verwendest oder sich das Ziel außerhalb der Reichweite des Zaubers oder in vollständiger Deckung befindet."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der Initialschaden für jeden Grad über den 1. hinaus um 1W12."
  },
  {
    name: "Höllischer Tadel",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Reaktion, die du ausführst, wenn du von einer Kreatur verletzt wirst, die sich innerhalb von 18 m befindet und die du sehen kannst",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Hexenmeister"],
    ritual: false,
    beschreibung: [
      "Du deutest mit einem Finger und die Kreatur, die dich verletzt hat, wird für einen kurzen Moment von höllischen Flammen eingehüllt. Die Kreatur muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet das Ziel 2W10 Feuerschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 1. hinaus um 1W10."
  },
  {
    name: "Hölzerner Weg",
    schule: "Beschwörung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du erhältst die Fähigkeit, in einen Baum zu schreiten und aus diesem oder einem anderen der gleichen Art innerhalb von 150 m wieder hinauszusteigen. Beide Bäume müssen am Leben und mindestens so groß sein wie du. Du musst 1,50 m Bewegungsrate aufwenden, um in den Baum zu schreiten. Du erfährst sofort die Position aller anderen Bäume der gleichen Art innerhalb von 150 m. Als Teil der Bewegung, mit der du den Baum betreten hast, kannst du entweder in einen dieser Bäume wechseln und aus diesem steigen oder aus dem Baum schreiten, in dem du dich befindest. Du erscheinst an einem Ort deiner Wahl innerhalb von 1,50 m zum Zielbaum, was dich weitere 1,50 m Bewegungsrate kostet. Hast du keine Bewegungsrate übrig, erscheinst du innerhalb von 1,50 m zu dem Baum, den du betreten hast. Während der Wirkungsdauer kannst du diese Transportfähigkeit einmal pro Runde verwenden. Du musst jeden Zug außerhalb eines Baumes beenden."
    ]
  },
  {
    name: "Hunger von Hadar",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "45 m",
    komponenten: ["V", "G", "M"],
    material: "ein eingelegter Oktopustentakel",
    klassen: ["Hexenmeister"],
    ritual: false,
    beschreibung: [
      "Du öffnest ein Tor zur Dunkelheit zwischen den Sternen, ein Gebiet, das von unbekannten Schrecken erfüllt ist. Eine Sphäre aus Schwärze und bitterer Kälte mit einem Radius von 6 m erscheint, zentriert an einem Punkt in Reichweite, und bleibt für die Wirkungsdauer bestehen. Diese Leere ist von einer Kakophonie leisen Flüsterns und schmatzender Geräusche erfüllt, die auf eine Entfernung von bis zu 9 m hörbar sind. Kein Licht, ob magischen oder natürlichen Ursprungs, vermag den Bereich der Sphäre zu erhellen, und Kreaturen, die sich vollständig in diesem aufhalten, sind blind.",
      "Die Leere erzeugt eine Verzerrung in der Struktur des Raums und der Bereich gilt als schwieriges Gelände. Alle Kreaturen, die ihren Zug in dem Bereich beginnen, erleiden 2W6 Kälteschaden. Alle Kreaturen, die ihren Zug in dem Bereich beenden, müssen einen erfolgreichen Geschicklichkeitsrettungswurf ablegen, um nicht 2W6 Säureschaden zu erleiden, da sie von milchigen, unweltlichen Tentakeln berührt werden."
    ]
  },
  {
    name: "Hüter des Glaubens",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Ein großer spektraler Hüter erscheint und schwebt für die Wirkungsdauer in einem nicht besetzten Bereich deiner Wahl, der sich in Reichweite befindet und den du sehen kannst. Der Hüter besetzt seinen Bereich und ist nicht klar zu erkennen, mit Ausnahme eines leuchtenden Schwertes und eines Schilds, welches das Symbol deiner Gottheit trägt.",
      "Jede dir feindlich gesonnene Kreatur, die sich zum ersten Mal in ihrem Zug dem Hüter auf weniger als 3 m nähert, muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet die Kreatur 20 Punkte gleißenden Schaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. Der Hüter verschwindet, wenn er insgesamt 60 Punkte Schaden verursacht hat."
    ]
  },
  {
    name: "Hypnotisches Muster",
    schule: "Illusion",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["G", "M"],
    material: "ein entzündetes Räucherstäbchen oder eine Kristallphiole, die mit leuchtenden Materialien gefüllt ist",
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst ein sich windendes Muster aus Farben, das sich in einem Würfel mit 9 m Kantenlänge in Reichweite durch die Luft zieht. Das Muster erscheint für wenige Augenblicke und verschwindet dann wieder. Jede Kreatur in dem Bereich, die das Muster sieht, muss einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg wird die Kreatur für die Wirkungsdauer bezaubert. Solange eine Kreatur durch diesen Zauber bezaubert ist, ist sie kampfunfähig und hat eine Bewegungsrate von 0.",
      "Der Zauber endet für eine betroffene Kreatur, wenn sie Schaden erleidet oder eine andere Kreatur eine Aktion verwendet, um sie aus ihrer Betäubung zu schütteln."
    ]
  },
  {
    name: "Identifizieren",
    schule: "Erkenntnismagie",
    grad: 1,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "eine Perle im Wert von mindestens 100 GM und eine Eulenfeder",
    klassen: ["Barde", "Magier", "Magieschmied"],
    ritual: true,
    beschreibung: [
      "Du wählst einen Gegenstand, den du berühren musst, während du den Zauber wirkst. Handelt es sich um einen magischen Gegenstand oder ein anderweitig mit Magie erfülltes Objekt, erfährst du, welche Eigenschaften es hat, wie du sie nutzen kannst, ob der Gegenstand eine Einstimmung erforderlich macht und wie viele Ladungen er hat. Du erlangst auch Kenntnis darüber, ob Zauber auf dem Gegenstand liegen und welche dies sind. Wurde der Gegenstand durch einen Zauber erschaffen, ist dir bekannt, um welchen es sich handelt.",
      "Wenn du stattdessen eine Kreatur berührst, während du den Zauber wirkst, erfährst du, welche Zauber das Ziel augenblicklich beeinflussen."
    ]
  },
  {
    name: "Illusionsschrift",
    schule: "Illusion",
    grad: 1,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "10 Tage",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["G", "M"],
    material: "Tinte auf Bleibasis im Wert von mindestens 10 GM, die beim Wirken des Zaubers verbraucht wird",
    klassen: ["Barde", "Hexenmeister", "Magier"],
    ritual: true,
    beschreibung: [
      "Du schreibst einen Text auf Pergament, Papier oder ein anderes passendes Material und erfüllst die Schrift mit einer mächtigen Illusion, die für die Wirkungsdauer anhält.",
      "Für dich und alle Kreaturen, die du beim Wirken des Zaubers bestimmst, erscheint der Text normal, verfasst in deiner Handschrift. Sein Inhalt entspricht dem, den du niedergeschrieben hast. Für alle anderen erscheint der Text, als sei er in einer unbekannten oder magischen Schrift verfasst, die unverständlich ist. Alternativ kannst du den Text als vollkommen andere Nachricht erscheinen lassen, die in einer anderen Handschrift und Sprache verfasst ist, welche dir allerdings bekannt sein muss. Sollte der Zauber gebannt werden, verschwinden sowohl die echte Schrift als auch die Illusion.",
      "Eine Kreatur mit wahrer Sicht kann die verborgene Nachricht lesen."
    ]
  },
  {
    name: "Insektenplage",
    schule: "Beschwörung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "90 m",
    komponenten: ["V", "G", "M"],
    material: "ein wenig Zucker, einige Getreidekörner und etwas Fett",
    klassen: ["Kleriker", "Druide", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Schwärmende, beißende Heuschrecken erscheinen in einer Sphäre mit einem Radius von 6 m, die um einen Punkt deiner Wahl in Reichweite zentriert ist. Die Sphäre kann sich um Ecken ausbreiten und bleibt für die Wirkungsdauer bestehen. Ihr Bereich ist leicht verschleiert und gilt als schwieriges Gelände.",
      "Wenn die Sphäre erscheint, müssen alle Kreaturen in ihrem Bereich einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 4W10 Stichschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. Eine Kreatur muss diesen Rettungswurf auch dann ablegen, wenn sie den Bereich des Zaubers das erste Mal in einem Zug betritt oder ihren Zug dort beendet."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 6. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 5. hinaus um 1W10."
  },
  {
    name: "Irrgarten",
    schule: "Beschwörung",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Du verbannst eine Kreatur, die sich in Reichweite befindet und die du sehen kannst, in eine labyrinthartige Halbebene. Das Ziel bleibt für die Wirkungsdauer dort oder bis es dem Labyrinth entkommen kann.",
      "Das Ziel kann seine Aktion für den Versuch verwenden, einen Weg aus dem Labyrinth zu finden. In diesem Fall legt es einen Intelligenzwurf gegen SG 20 ab. Wenn es erfolgreich ist, entkommt es und der Zauber endet (ein Minotaurus oder Goristro-Dämon ist automatisch erfolgreich bei diesem Wurf). Endet der Zauber, erscheint das Ziel wieder an dem Ort, den es verlassen hat, oder – falls dieser besetzt ist – dem nächsten nicht besetzten Bereich."
    ]
  },
  {
    name: "Kalte Hand",
    schule: "Nekromantie",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Runde",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine geisterhafte, skelettierte Hand im Bereich einer Kreatur in Reichweite. Führe einen Fernkampf-Zauberangriff gegen die Kreatur aus, um sie die Kälte des Grabes spüren zu lassen. Bei einem Treffer erleidet das Ziel 1W8 nekrotischen Schaden und kann bis zum Beginn deines nächsten Zuges keine Trefferpunkte zurückerlangen. Bis dahin hält sich die Hand an dem Ziel fest.",
      "Wenn du eine untote Kreatur triffst, ist sie außerdem im Nachteil bei Angriffswürfen gegen dich bis zum Ende deines nächsten Zuges.",
      "Der Schaden dieses Zaubers steigt jeweils um 1W8 bei Erreichen der 5. (2W8), 11. (3W8) und 17. Stufe (4W8)."
    ]
  },
  {
    name: "Kältekegel",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Selbst (Kegel von 18 m)",
    komponenten: ["V", "G", "M"],
    material: "ein kleiner Kegel aus Kristall oder Glas",
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein Stoß aus eiskalter Luft fährt aus deinen Händen. Jede Kreatur innerhalb eines Kegels von 18 m muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 8W8 Kälteschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. Eine Kreatur, die auf diese Weise getötet wird, wird zu einer gefrorenen Statue, bis sie taut."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 6. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 5. hinaus um 1W8."
  },
  {
    name: "Kältestrahl",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein eisiger Strahl aus blau-weißem Licht schießt auf eine Kreatur in Reichweite zu. Führe einen Fernkampf-Zauberangriff gegen das Ziel aus. Bei einem Treffer erleidet die Kreatur 1W8 Kälteschaden und ihre Bewegungsrate wird bis zum Beginn deines nächsten Zuges um 3 m verringert.",
      "Der Schaden dieses Zaubers steigt jeweils um 1W8 bei Erreichen der 5. (2W8), 11. (3W8) und 17. Stufe (4W8)."
    ]
  },
  {
    name: "Klingenbann",
    schule: "Bannmagie",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Runde",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du streckst die Hand aus und zeichnest ein Sigille des Schutzes in die Luft. Bis zum Ende deines nächsten Zuges besitzt du eine Resistenz gegen Wucht-, Hieb- und Stichschaden, der von Waffenangriffen verursacht wird."
    ]
  },
  {
    name: "Klingenbarriere",
    schule: "Hervorrufung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine senkrechte Barriere wirbelnder, rasiermesserscharfer Klingen aus magischer Energie. Sie erscheint innerhalb der Reichweite und bleibt für die Wirkungsdauer bestehen. Die Barriere kann gerade sein (bis zu 30 m lang, 6 m hoch und 1,50 m dick) oder ringförmig (bis zu 18 m Durchmesser, 6 m Höhe und 1,50 m Dicke). Alle Kreaturen, die sich hinter ihr aufhalten, befinden sich in Dreivierteldeckung. Der Bereich der Barriere gilt als schwieriges Gelände.",
      "Wenn eine Kreatur das erste Mal in einem Zug den Bereich betritt oder ihren Zug dort beginnt, muss sie einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet die Kreatur 6W10 Hiebschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf."
    ]
  },
  {
    name: "Klon",
    schule: "Nekromantie",
    grad: 8,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Diamant im Wert von mindestens 1.000 GM und mindestens 15 Kubikzentimeter Fleisch der Kreatur, die geklont werden soll, was beides beim Wirken des Zaubers verbraucht wird; außerdem ein Gefäß im Wert von mindestens 2.000 GM, das über einen verschließbaren Deckel verfügt und groß genug ist, um eine mittelgroße Kreatur aufzunehmen, etwa eine riesige Urne, ein Sarg, eine schlammgefüllte Blase im Boden oder ein Kristallgefäß voller Salzwasser",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber erschafft ein lebloses Duplikat einer lebenden Kreatur als Vorsichtsmaßnahme im Falle des Todes. Der Klon formt sich in dem beim Wirken des Zaubers verwendeten Gefäß und wächst innerhalb von 120 Tagen zu voller Größe und Reife heran. Du kannst einen Klon auch als jüngere Version derselben Kreatur erschaffen. Er bleibt leblos und überlebt unendlich lange, solange das Gefäß nicht geöffnet wird.",
      "Stirbt die ursprüngliche Kreatur zu einem beliebigen Zeitpunkt, nachdem der Klon herangereift ist, wird ihre Seele auf den Klon übertragen, vorausgesetzt die Seele ist nicht gefangen und kehrt freiwillig zurück. Der Klon ist körperlich identisch mit dem Original und besitzt die gleiche Persönlichkeit, die gleichen Erinnerungen und Fähigkeiten, aber nichts von der Ausrüstung der ursprünglichen Kreatur. Wenn deren körperliche Überreste noch existieren, werden sie leblos und können nicht mehr zum Leben erweckt werden, da die Seele der Kreatur an einem anderen Ort ist."
    ]
  },
  {
    name: "Klopfen",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Wähle einen Gegenstand in Reichweite, den du sehen kannst. Es kann sich um eine Tür, eine Kiste, ein Paar Handschellen, ein Vorhängeschloss oder einen anderen Gegenstand handeln, der über eine magische oder gewöhnliche Methode verfügt, die den Zugang verhindert.",
      "Ein Ziel, das von einem gewöhnlichen Schloss oder durch einen Riegel verschlossen ist oder klemmt, wird entriegelt, geöffnet oder gelöst. Wenn der Gegenstand mehrere Schlösser besitzt, wird nur eines von ihnen geöffnet.",
      "Wählst du ein Ziel, das mit dem Zauber Arkanes Schloss verriegelt ist, wird der Zauber für 10 Minuten unterdrückt. In dieser Zeit kann das Ziel normal geöffnet und geschlossen werden.",
      "Wenn du den Zauber wirkst, ertönt ein lautes Klopfen aus dem Gegenstand, das auf eine Entfernung von 90 m hörbar ist."
    ]
  },
  {
    name: "Kontakt zu anderen Ebenen",
    schule: "Erkenntnismagie",
    grad: 5,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Hexenmeister", "Magier"],
    ritual: true,
    beschreibung: [
      "Du trittst geistig in Kontakt mit einem Halbgott, dem Geist eines lange verstorbenen Gelehrten oder einer anderen geheimnisvollen Wesenheit einer anderen Ebene. Dieser Kontakt kann deinen Geist überfordern oder sogar brechen. Wenn du den Zauber wirkst, musst du einen Intelligenzrettungswurf gegen SG 15 ablegen. Bei einem Misserfolg erleidest du 6W6 psychischen Schaden und bist wahnsinnig, bis du eine lange Rast beendest. Solange du wahnsinnig bist, kannst du keine Aktionen ausführen, nicht verstehen, was andere Kreaturen sagen, kannst nicht lesen und sprichst nur Kauderwelsch. Wird der Zauber Vollständige Genesung auf dich gewirkt, endet dieser Effekt.",
      "Bei einem erfolgreichen Rettungswurf kannst du der Wesenheit bis zu fünf Fragen stellen. Du musst deine Fragen aussprechen, ehe der Zauber endet. Die Wesenheit beantwortet jede Frage mit einem einzigen Wort, wie „ja”, „nein”, „vielleicht”, „niemals”, „irrelevant” oder „unklar” (wenn sie die Antwort auf die Frage nicht kennt). Falls eine Antwort von nur einem einzigen Wort irreführend sein könnte, kann die Wesenheit auch in einem kurzen Satz antworten (nach Entscheidung des SL)."
    ]
  },
  {
    name: "Kreatur aufspüren",
    schule: "Erkenntnismagie",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "etwas Fell von einem Bluthund",
    klassen: ["Barde", "Kleriker", "Druide", "Paladin", "Waldläufer", "Magier"],
    ritual: false,
    beschreibung: [
      "Beschreibe oder benenne eine Kreatur, mit der du vertraut bist. Du erspürst, in welcher Richtung sich das Ziel befindet, solange es nicht weiter als 300 m entfernt ist. Wenn sich die Kreatur bewegt, dann weißt du, in welche Richtung diese Bewegung stattfindet.",
      "Der Zauber kann eine bestimmte Kreatur aufspüren, die dir bekannt ist, oder die nächste Kreatur einer bestimmten Art (wie Mensch oder Einhorn), solange du schon einmal eine solche Kreatur aus der Nähe gesehen hast (maximal aus 9 m Entfernung). Wenn die Kreatur, die du beschrieben oder benannt hast, eine andere Gestalt angenommen hat, weil sie beispielsweise unter dem Effekt des Zaubers Verwandlung steht, ist es dem Zauber nicht möglich, sie ausfindig zu machen.",
      "Der Zauber kann die Kreatur ebenfalls nicht aufspüren, wenn fließendes Wasser, das mindestens 3 m breit ist, den direkten Weg zwischen dir und der Kreatur blockiert."
    ]
  },
  {
    name: "Kreis der Macht",
    schule: "Bannmagie",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst (Radius von 9 m)",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Göttliche Energie strahlt von dir aus und verzerrt und zerstreut magische Energie innerhalb einer Sphäre mit 9 m Radius um dich herum. Bis der Zauber endet, bewegt sich die Sphäre mit dir als Mittelpunkt fort. Für die Wirkungsdauer ist jede verbündete Kreatur im Bereich der Sphäre (inklusive dir) im Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte. Gelingt einer Kreatur außerdem ein Rettungswurf gegen einen Zauber oder magischen Effekt, dessen Schaden bei einem Erfolg dieses Wurfs halbiert wird, erleidet sie durch den gelungenen Rettungswurf gar keinen Schaden."
    ]
  },
  {
    name: "Kreis der Teleportation",
    schule: "Beschwörung",
    grad: 5,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "1 Runde",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V", "M"],
    material: "seltene mit Edelsteinen angereicherte Kreiden und Tinten im Wert von 50 GM, die beim Wirken des Zaubers verbraucht werden",
    klassen: ["Barde", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Während du den Zauber wirkst, zeichnest du einen Kreis mit 3 m Durchmesser auf den Boden. In den Kreis arbeitest du Sigillen ein, die deine aktuelle Position mit einem permanenten Teleportationskreis deiner Wahl verbinden, dessen Sigillensequenz du kennst und der sich auf derselben Existenzebene befindet. Ein schimmerndes Portal öffnet sich in dem Kreis, den du gezeichnet hast, und bleibt bis zum Ende deines nächsten Zuges offen. Jede Kreatur, die in das Portal tritt, erscheint sofort innerhalb von 1,50 m um den Zielkreis oder im nächstliegenden nicht besetzten Bereich, falls kein freier Platz vorhanden ist.",
      "Viele wichtige Tempel, Gilden und andere bedeutende Orte verfügen auf ihrem Gelände über einen permanenten, eingravierten Teleportationskreis. Jeder solche Kreis besitzt eine einzigartige Sequenz von Sigillen – eine Reihe magischer Runen, die in einem bestimmten Muster angeordnet sind. Wenn du diesen Zauber lernst, erlangst du Kenntnis über die Sigillensequenz für zwei Zielorte auf der Materiellen Ebene, die der SL bestimmt. Du kannst dir während deiner Abenteuer zusätzliche Sigillensequenzen aneignen. Studierst du eine neue Sequenz für 1 Minute, prägst du sie dir dauerhaft ein.",
      "Es ist dir mit diesem Zauber auch möglich, permanente Teleportationskreise zu erschaffen, indem du ihn für 1 Jahr jeden Tag an demselben Ort wirkst. Du musst den Zirkel nicht zur Teleportation nutzen, wenn du den Zauber auf diese Weise wirkst."
    ]
  },
  {
    name: "Kreuzfahrermantel",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Heilige Macht strahlt von dir aus und verleiht dir eine Aura mit einem Radius von 9 m, die verbündete Kreaturen mit Wagemut erfüllt. Bis der Zauber endet, bewegt sich die Aura mit dir als Mittelpunkt fort. Solange sich eine nicht feindliche Kreatur in der Aura aufhält (inklusive dir), verursacht sie bei Treffern mit einer Waffe zusätzlich 1W4 gleißenden Schaden."
    ]
  },
  {
    name: "Krone des Wahnsinns",
    schule: "Verzauberung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Eine humanoide Kreatur deiner Wahl in Reichweite, die du sehen kannst, muss einen erfolgreichen Weisheitsrettungswurf ablegen, um nicht für die Wirkungsdauer von dir bezaubert zu werden. Solange das Ziel auf diese Weise bezaubert ist, erscheint eine verdrehte Krone aus zackigem Eisen auf seinem Kopf und Wahnsinn leuchtet in seinen Augen.",
      "Das bezauberte Ziel muss in jedem seiner Züge vor seiner Bewegung eine Aktion aufwenden, um einen Nahkampfangriff gegen eine von dir gewählte Kreatur auszuführen (außer sich selbst). Das Ziel kann in seinem Zug normal handeln, wenn du keine Kreatur auswählst oder sich keine in seiner Reichweite befindet.",
      "In den folgenden Zügen musst du deine Aktion aufwenden, um die Kontrolle über das Ziel zu behalten, sonst endet der Zauber. Außerdem darf die betroffene Kreatur am Ende eines jeden ihrer Züge einen Weisheitsrettungswurf ablegen. Bei Erfolg endet der Zauber."
    ]
  },
  {
    name: "Kugel der Unverwundbarkeit",
    schule: "Bannmagie",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst (Radius von 3 m)",
    komponenten: ["V", "G", "M"],
    material: "eine Glas- oder Kristallperle, die zerbirst, wenn der Zauber endet",
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Eine unbewegliche, leicht schimmernde Barriere entsteht in einem Radius von 3 m um dich und bleibt für die Wirkungsdauer bestehen.",
      "Jeder Zauber des 5. oder eines niedrigeren Grades, der von außerhalb der Barriere gewirkt wird, hat keinen Effekt auf Kreaturen und Gegenstände im Inneren, selbst wenn der Spruch mit einem Zauberplatz eines höheren Grades gewirkt wird. Ein solcher Zauber kann Kreaturen und Gegenstände innerhalb der Barriere zum Ziel haben, er hat nur keine Auswirkungen. Gleichermaßen ist das Innere der Barriere nicht von Flächeneffekten oder Bereichen eines solchen Zaubers betroffen, die auf einen Punkt außerhalb gewirkt wurden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 7. oder eines höheren Grades wirkst, werden auch Zauber blockiert, die jeweils einen Grad höher sind für jeden Grad über den 6. hinaus."
  },
  {
    name: "Kugelblitz",
    schule: "Hervorrufung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "45 m",
    komponenten: ["V", "G", "M"],
    material: "etwas Fell, ein Stück Bernstein, Glas oder ein Kristallstab und drei silberne Nadeln",
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst einen Blitz, der im Bogen auf ein Ziel deiner Wahl zuschießt, das sich in Reichweite befindet und das du sehen kannst. Drei Blitze springen von diesem Ziel auf bis zu drei weitere über, die sich innerhalb von 9 m zum ersten Ziel befinden müssen. Ein Ziel kann eine Kreatur oder ein Gegenstand sein und kann nur von einem der Blitze getroffen werden.",
      "Das Ziel muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet es 10W8 Blitzschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 7. oder eines höheren Grades wirkst, springt für jeden Grad über den 6. hinaus ein zusätzlicher Blitz vom ursprünglichen Ziel auf ein weiteres über."
  },
  {
    name: "Lange Schritte",
    schule: "Verwandlung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Erde",
    klassen: ["Barde", "Druide", "Magier", "Magieschmied", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du berührst eine Kreatur. Die Bewegungsrate des Ziels erhöht sich um 3 m, bis der Zauber endet."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 1. hinaus eine zusätzliche Kreatur als Ziel wählen."
  },
  {
    name: "Lautloses Trugbild",
    schule: "Illusion",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Vlies",
    klassen: ["Barde", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst das Trugbild eines Gegenstands, einer Kreatur oder eines anderen sichtbaren Phänomens, das nicht größer sein darf als ein Würfel mit 4,50 m Kantenlänge. Das Abbild erscheint an einem Punkt innerhalb der Reichweite und bleibt für die Wirkungsdauer bestehen. Die Illusion ist rein visuell, sie wird nicht von Geräuschen, Gerüchen oder anderen Sinneseindrücken begleitet.",
      "Du kannst deine Aktion verwenden, um das Trugbild an einen beliebigen Punkt in Reichweite zu bewegen. Wenn die Illusion ihre Position wechselt, kannst du ihr Aussehen verändern, sodass die Bewegung natürlich erscheint. Erschaffst du beispielsweise das Abbild einer Kreatur und bewegst es, kannst du es so verändern, dass es zu gehen scheint.",
      "Körperliche Interaktion mit dem Trugbild offenbart, dass es sich um eine Illusion handelt, da Dinge es einfach durchdringen können. Eine Kreatur, die ihre Aktion verwendet, um das Abbild zu untersuchen, kann einen Wurf auf Intelligenz (Nachforschungen) ablegen. Bei einem Erfolg erkennt sie, dass es sich um eine Illusion handelt. Durchschaut eine Kreatur die Täuschung, kann sie die Illusion ignorieren."
    ]
  },
  {
    name: "Leid",
    schule: "Nekromantie",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Du entfesselst eine bösartige Krankheit bei einer Kreatur in Reichweite, die du sehen kannst. Das Ziel muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet die Kreatur 14W6 nekrotischen Schaden oder halb so viel Schaden bei einem gelungenen Rettungswurf. Dieser Schaden kann die Trefferpunkte des Ziels nicht unter 1 fallen lassen. Misslingt dem Ziel der Rettungswurf, werden außerdem seine maximalen Trefferpunkte für 1 Stunde um eine Anzahl verringert, die dem erlittenen nekrotischen Schaden entspricht. Alle Effekte, die Krankheiten heilen, bringen die maximalen Trefferpunkte der Kreatur schon vor Ablauf dieser Zeit wieder auf ihren ursprünglichen Stand."
    ]
  },
  {
    name: "Lenkendes Geschoss",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Runde",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Ein Lichtblitz schießt auf eine Kreatur deiner Wahl in Reichweite zu. Führe einen Fernkampf-Zauberangriff gegen das Ziel aus. Bei einem Treffer erleidet es 4W6 gleißenden Schaden. Zusätzlich ist der nächste Angriffswurf im Vorteil, der vor Ende deines nächsten Zuges gegen das Ziel durchgeführt wird, weil es durch mystisches Licht optisch hervorgehoben wird."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 1. hinaus um 1W6."
  },
  {
    name: "Leomunds Geheime Truhe",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "eine exquisite Truhe, 90 × 60 × 60 cm, erschaffen aus seltenen Materialien im Wert von mindestens 5.000 GM und eine sehr kleine Replik der Truhe aus den gleichen Materialien im Wert von 50 GM",
    klassen: ["Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du verbirgst eine Truhe und ihren gesamten Inhalt auf der Ätherebene. Beim Wirken des Zaubers musst du die Truhe und die Replik berühren, die als Materialkomponenten dienen. Die Truhe kann bis zu 0,324 Kubikmeter nicht lebender Materialien aufnehmen (90 × 60 × 60 cm).",
      "Solange sich die Truhe auf der Ätherebene befindet, kannst du als Aktion die Replik berühren, um die Truhe herbeizurufen. Sie erscheint in einem nicht besetzten Bereich auf dem Boden innerhalb von 1,50 m. Du kannst die Truhe zurück auf die Ätherebene schicken, indem du als Aktion sowohl die Truhe als auch die Replik berührst.",
      "Nach 60 Tagen besteht eine kumulative Chance von 5 % pro Tag, dass der Zauber endet. Er endet ebenfalls, wenn du ihn erneut wirkst, die kleine Repliktruhe zerstört wird oder du den Zauber als Aktion aufhebst. Wenn der Zauber endet, während sich die größere Truhe auf der Ätherebene befindet, ist sie unwiederbringlich verloren."
    ]
  },
  {
    name: "Leomunds Winzige Hütte",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "Selbst (Halbsphäre von 3 m Radius)",
    komponenten: ["V", "G", "M"],
    material: "eine kleine Kristallperle",
    klassen: ["Barde", "Magier"],
    ritual: true,
    beschreibung: [
      "Eine unbewegliche Kuppel aus Energie mit einem Radius von 3 m entsteht um dich herum und bleibt für die Wirkungsdauer an ihrem Standort. Der Zauber endet, wenn du den Bereich verlässt. Außer dir passen neun mittelgroße oder kleinere Kreaturen in die Kuppel. Der Zauber schlägt fehl, wenn der Bereich eine größere Kreatur oder mehr als neun beinhaltet. Kreaturen und Gegenstände, die sich beim Wirken des Zaubers in der Kuppel aufhalten, können sich frei durch sie bewegen. Allen anderen Kreaturen und Gegenständen ist es nicht möglich, sie zu durchschreiten. Zauber und andere magische Effekte können weder in die Kuppel eindringen noch durch sie hindurch gesprochen werden. Die Atmosphäre innerhalb des Bereichs ist angenehm und trocken, ungeachtet des Wetters außerhalb.",
      "Bis der Zauber endet, kannst du bestimmen, ob das Innere der Kuppel dämmrig beleuchtet oder dunkel sein soll. Die Kuppel ist von außen undurchsichtig und hat eine Farbe deiner Wahl, von innen aber ist sie transparent."
    ]
  },
  {
    name: "Leuchtfeuer der Hoffnung",
    schule: "Bannmagie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber schenkt Hoffnung und Lebenskraft. Wähle eine beliebige Anzahl von Kreaturen in Reichweite. Für die Wirkungsdauer sind alle Ziele im Vorteil bei Weisheits- und Todesrettungswürfen und erhalten durch jede Heilung die maximale Anzahl von Trefferpunkten."
    ]
  },
  {
    name: "Licht",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "M"],
    material: "ein Glühwürmchen oder Leuchtmoos",
    klassen: ["Barde", "Kleriker", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du berührst einen Gegenstand, der in keiner Ausdehnung größer als 3 m ist. Bis der Zauber endet, strahlt dieser Gegenstand innerhalb von 6 m helles Licht und in einem Radius von weiteren 6 m dämmriges Licht aus. Das Licht kann jede Farbe haben, die du willst. Wenn der Gegenstand mit etwas bedeckt wird, das vollkommen blickdicht ist, wird das Licht blockiert. Der Zauber endet, wenn du ihn erneut wirkst oder als Aktion aufhebst.",
      "Wählst du einen Gegenstand als Ziel aus, den eine feindliche Kreatur trägt oder in der Hand hält, muss die Kreatur einen erfolgreichen Geschicklichkeitsrettungswurf ablegen, um dem Zauber auszuweichen."
    ]
  },
  {
    name: "Macht der Vorstellungskraft",
    schule: "Illusion",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Vlies",
    klassen: ["Barde", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine Illusion, die sich im Verstand einer Kreatur festsetzt. Befindet sich das Ziel in Reichweite und kannst du es sehen, muss die betroffene Kreatur einen Intelligenzrettungswurf ablegen. Bei einem Misserfolg erschaffst du das Trugbild eines Gegenstands, einer Kreatur oder eines anderen sichtbaren Phänomens deiner Wahl, das nicht größer sein darf als ein Würfel mit 3 m Kantenlänge und das für die Wirkungsdauer nur vom Ziel wahrgenommen werden kann. Der Zauber hat keine Auswirkungen auf Untote oder Konstrukte.",
      "Das Trugbild umfasst Geräusche, Temperatur und andere Sinneseindrücke, die ebenfalls nur von der Kreatur wahrgenommen werden können.",
      "Verwendet das Ziel seine Aktion, um das Trugbild zu untersuchen, darf es einen Wurf auf Intelligenz (Nachforschungen) gegen den SG zum Widerstehen deiner Zauber ablegen. Ist der Wurf erfolgreich, durchschaut das Ziel die Täuschung und der Zauber endet.",
      "Solange ein Ziel von diesem Zauber betroffen ist, behandelt es das Trugbild, als wäre es real. Alle unlogischen Folgen bei der Interaktion mit der Illusion erklärt sich die betroffene Kreatur verstandesmäßig. Versucht ein Ziel beispielsweise, über eine nicht reale Brücke zu gehen, die einen Abgrund überspannt, wird es fallen, sobald es die Illusion betritt. Wenn die Kreatur den Sturz überlebt, glaubt sie immer noch, dass die Brücke existiert und findet eine andere Erklärung für den Sturz - sie wurde gestoßen, ist ausgerutscht, ein starker Windstoß hat sie von der Brücke geweht oder Ähnliches.",
      "Das Ziel ist so von der Realität des Trugbilds überzeugt, dass es sogar Schaden durch die Illusion erleiden kann. Ein Trugbild, das als Kreatur erscheint, vermag das Ziel anzugreifen. Gleichermaßen verbrennt es sich an der Illusion von Feuer, Lava oder eines Säuretümpels. In jeder Runde kann das Trugbild in deinem Zug dem Ziel 1W6 psychischen Schaden zufügen, wenn sich die betroffene Kreatur im Bereich der Illusion oder innerhalb von 1,50 m zu ihr aufhält. Dies setzt voraus, dass die Illusion eine Kreatur oder Gefahr abbildet, die logischerweise Schaden verursachen könnte, beispielsweise durch einen Angriff. Das Ziel nimmt dies als Schadensart wahr, die dem Trugbild entspricht."
    ]
  },
  {
    name: "Mächtige Unsichtbarkeit",
    schule: "Illusion",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du oder eine Kreatur, die du berührst, wird für die Wirkungsdauer des Zaubers unsichtbar. Alles, was das Ziel trägt oder in der Hand hält, wird ebenfalls unsichtbar, solange es sich am Körper des Ziels befindet."
    ]
  },
  {
    name: "Mächtiges Trugbild",
    schule: "Illusion",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Vlies",
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst das Trugbild eines Gegenstands, einer Kreatur oder eines anderen sichtbaren Phänomens, das nicht größer sein darf als ein Würfel mit 6 m Kantenlänge. Das Abbild erscheint an einem Ort in Reichweite, den du sehen kannst, und bleibt für die Wirkungsdauer bestehen. Es erscheint vollständig real und umfasst passende Geräusche, Gerüche und Temperatur. Du kannst weder ein Geräusch erzeugen, das laut genug ist, um Schallschaden zu verursachen, noch schädigende Hitze oder Kälte und auch keinen Geruch, der Übelkeit auslösen könnte (wie der Gestank eines Troglodyten).",
      "Solange du dich in Reichweite der Illusion aufhältst, kannst du deine Aktion verwenden, um das Trugbild an einen anderen Punkt in Reichweite zu bewegen. Wenn die Illusion ihre Position wechselt, kannst du ihr Aussehen verändern, sodass die Bewegung natürlich erscheint. Erschaffst du beispielsweise das Abbild einer Kreatur und bewegst es, kannst du es so verändern, dass es zu gehen scheint. Gleichermaßen bist du in der Lage, die Illusion zu verschiedenen Zeiten verschiedene Geräusche machen zu lassen. Du kannst sie beispielsweise sogar ein Gespräch führen lassen.",
      "Körperliche Interaktion mit dem Trugbild offenbart, dass es sich um eine Illusion handelt, da Dinge es einfach durchdringen können. Eine Kreatur, die ihre Aktion verwendet, um das Abbild zu untersuchen, kann einen Wurf auf Intelligenz (Nachforschungen) ablegen. Bei einem Erfolg erkennt sie, dass es sich um eine Illusion handelt. Durchschaut eine Kreatur die Täuschung, kann sie das Abbild und die anderen sensorischen Merkmale ignorieren."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 6. oder eines höheren Grades wirkst, hält er an, bis er gebannt wird, und erfordert nicht länger deine Konzentration."
  },
  {
    name: "Magie bannen",
    schule: "Bannmagie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Kleriker", "Druide", "Paladin", "Hexenmeister", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Wähle eine Kreatur, einen Gegenstand oder einen magischen Effekt in Reichweite. Jeder Zauber des 3. oder eines niedrigeren Grades, der auf dem Ziel liegt, endet sofort. Lege für jeden entsprechenden Zauber des 4. oder eines höheren Grades einen Attributswurf mit deinem Attribut zum Zauberwirken ab. Der SG beträgt 10 + den Grad des Zaubers. Bei einem erfolgreichen Wurf endet der Zauber."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, wird der Effekt von auf dem Ziel liegenden Zaubern beendet, wenn ihr Grad dem des verbrauchten Zauberplatzes entspricht oder niedriger ist."
  },
  {
    name: "Magie entdecken",
    schule: "Erkenntnismagie",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Kleriker", "Druide", "Paladin", "Waldläufer", "Magier", "Magieschmied", "Zauberer"],
    ritual: true,
    beschreibung: [
      "Für die Wirkungsdauer fühlst du die Anwesenheit von Magie im Umkreis von 9 m. Verwendest du deine Aktion, wenn du Magie auf diese Weise spürst, nimmst du eine schwache Aura um jede sichtbare Kreatur und jeden Gegenstand im Wirkungsbereich wahr, der von Magie erfüllt ist. Außerdem ist dir auch die Schule der Magie bekannt, sofern es eine gibt.",
      "Der Zauber kann die meisten Hindernisse durchdringen, wird aber blockiert von 30 cm Stein, 2,5 cm gewöhnlichem Metall, einer dünnen Schicht Blei oder 90 cm Holz oder Erde."
    ]
  },
  {
    name: "Magierhand",
    schule: "Beschwörung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Hexenmeister", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Eine geisterhafte, schwebende Hand erscheint an einem Punkt deiner Wahl in Reichweite. Die Hand bleibt für die Wirkungsdauer bestehen oder bis du sie mit einer Aktion fortschickst. Sie verschwindet auch, wenn sie sich weiter als 9 m von dir entfernt oder du den Zauber erneut wirkst.",
      "Als Aktion kannst du die Hand kontrollieren und sie verwenden, um mit Gegenständen zu interagieren, geschlossene Türen oder Behälter zu öffnen, einen Gegenstand aus einem geöffneten Behälter zu holen oder ihn darin zu verstauen oder den Inhalt einer Phiole auszugießen. Immer wenn du die Hand kontrollierst, darfst du sie bis zu 9 m bewegen.",
      "Die Hand kann nicht angreifen, keine magischen Gegenstände aktivieren oder mehr als 10 Pfund tragen."
    ]
  },
  {
    name: "Magierrüstung",
    schule: "Bannmagie",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Stück gehärtetes Leder",
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du berührst eine bereitwillige Kreatur, die keine Rüstung trägt. Schützende magische Energie umgibt sie, bis der Zauber endet. Die Basis-Rüstungsklasse des Ziels entspricht nun 13 + seinem Geschicklichkeitsmodifikator. Der Zauber endet, wenn das Ziel eine Rüstung anlegt oder du den Zauber mit einer Aktion aufhebst."
    ]
  },
  {
    name: "Magische Waffe",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Paladin", "Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du berührst eine nicht-magische Waffe. Bis der Zauber endet, wird sie zu einer magischen Waffe mit einem Bonus von +1 auf Angriffs- und Schadenswürfe."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder 5. Grades wirkst, steigt der Bonus auf +2, mit einem des 6. oder eines höheren Grades auf +3."
  },
  {
    name: "Magischer Mund",
    schule: "Illusion",
    grad: 2,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "bis der Zauber gebannt wird",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein kleines Stück Honigwabe und Jadestaub im Wert von mindestens 10 GM, die beide beim Wirken des Zaubers verbraucht werden",
    klassen: ["Barde", "Magier", "Magieschmied"],
    ritual: true,
    beschreibung: [
      "Du bettest eine Botschaft in einen Gegenstand in Reichweite, die ausgesprochen wird, wenn die auslösende Bedingung erfüllt wird. Wähle einen Gegenstand, den du sehen kannst und der nicht von einer anderen Kreatur getragen oder in der Hand gehalten wird. Sprich anschließend die Botschaft, die aus 25 Wörtern oder weniger bestehen darf, auch wenn sie über einen Zeitraum von maximal 10 Minuten übermittelt werden kann. Schließlich bestimmst du den Umstand, der den Zauber auslöst, sodass er deine Botschaft übermittelt.",
      "Tritt dieser Umstand ein, erscheint ein magischer Mund auf dem Gegenstand und rezitiert die Botschaft in deiner Stimme und in der Lautstärke, in der du sie gesprochen hast. Wenn der ausgewählte Gegenstand einen Mund besitzt (wie bei einer Statue) oder etwas, das einem solchen ähnlich sieht, erscheint der magische Mund dort, sodass die Worte aus dem Mund des Gegenstands zu kommen scheinen. Beim Wirken des Zaubers kannst du entscheiden, ob dieser endet, nachdem er die Botschaft übermittelt hat, oder bestehen bleibt und die Nachricht wiederholt, wenn der Auslöser erneut eintritt.",
      "Der Auslöser kann so allgemein oder so detailliert sein, wie du willst, doch muss er auf sichtbaren und hörbaren Umständen innerhalb von 9 m um den Gegenstand basieren. Du könntest beispielsweise festlegen, dass der Mund spricht, wenn sich eine Kreatur dem Gegenstand auf 9 m nähert oder eine Silberglocke innerhalb von 9 m läutet."
    ]
  },
  {
    name: "Magisches Gefäß",
    schule: "Nekromantie",
    grad: 6,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "bis der Zauber gebannt wird",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V", "G", "M"],
    material: "ein Edelstein, ein Kristall, eine Reliquie oder ein anderes geschmücktes Gefäß im Wert von mindestens 500 GM",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Dein Körper fällt in einen katatonischen Zustand, während deine Seele ihn verlässt und in das Gefäß eindringt, das du als Materialkomponente des Zaubers verwendest. Solange sich deine Seele in dem Gefäß befindet, bist du dir deiner Umgebung bewusst, als würdest du dich im Bereich des Behälters aufhalten. Du kannst dich nicht bewegen und keine Reaktionen nutzen. Als einzig mögliche Aktion kannst du deine Seele bis zu 30 m vom Gefäß entfernt projizieren, entweder um in deinen lebenden Körper zurückzukehren (und den Zauber zu beenden) oder um den Körper einer humanoiden Kreatur in Besitz zu nehmen.",
      "Du kannst versuchen, eine beliebige humanoide Kreatur innerhalb von 30 m, die du sehen kannst, besessen zu machen (Kreaturen, die durch Schutz vor Gut und Böse oder Schutzkreis geschützt sind, können nicht besessen werden). Das Ziel muss einen Charismarettungswurf ablegen. Bei einem Misserfolg fährt deine Seele in den Körper des Ziels und dessen Seele wird im Gefäß gefangen. Ist der Rettungswurf erfolgreich, widersteht das Ziel deinem Versuch, es in Besitz zu nehmen, und du kannst es bei dieser Kreatur für 24 Stunden nicht erneut versuchen.",
      "Wenn sich deine Seele in dem Körper einer Kreatur befindet, kontrollierst du diesen. Deine Spielwerte werden durch die der Zielkreatur ersetzt, doch behältst du deine Gesinnung sowie deine Werte in Intelligenz, Weisheit und Charisma. Außerdem verfügst du weiterhin über alle Merkmale deiner eigenen Klassen. Weist das Ziel Stufen in einer Klasse auf, kannst du seine Klassenmerkmale nicht verwenden.",
      "Während ihr Körper besessen ist, kann die Seele der Kreatur die Umgebung des Gefäßes mit ihren eigenen Sinnen wahrnehmen, sie vermag sich jedoch weder zu bewegen noch Aktionen auszuführen.",
      "Solange du einen Körper in Besitz genommen hast, kannst du deine Aktion verwenden, um von deinem Wirtskörper in das Gefäß zurückzukehren, was die Seele der Kreatur in ihren Körper zurücktransportiert. Stirbt der Wirtskörper, solange du dich darin befindest, stirbt die Kreatur im Gefäß. Außerdem musst du einen Charismarettungswurf gegen den SG zum Widerstehen deiner eigenen Zauber ablegen. Bei einem Erfolg kehrst du in das Gefäß zurück, wenn sich dieses innerhalb von 30 m um den Wirtskörper befindet. Ansonsten stirbst du.",
      "Wenn das Gefäß zerstört wird oder der Zauber endet, kehrt deine Seele sofort in deinen eigentlichen Körper zurück. Ist dieser mehr als 30 m von dir entfernt oder tot, wenn du versuchst, zu ihm zurückzukehren, stirbst du. Befindet sich die Seele einer anderen Kreatur im Gefäß, wenn dieses zerstört wird, kehrt sie zurück in ihren Körper, sofern dieser am Leben ist und sich innerhalb von 30 m befindet. Ansonsten stirbt die Kreatur.",
      "Wenn der Zauber endet, wird der Behälter zerstört."
    ]
  },
  {
    name: "Magisches Geschoss",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst drei leuchtende Pfeile aus magischer Energie. Jeder Pfeil trifft eine Kreatur deiner Wahl in Reichweite, die du sehen kannst, und fügt dem Ziel 1W4 + 1 Energieschaden zu. Die Pfeile schlagen alle gleichzeitig ein und können auf eine oder mehrere Kreaturen losgeschickt werden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, erschaffst du für jeden Grad über den 1. hinaus einen weiteren Pfeil."
  },
  {
    name: "Massen-Einflüsterung",
    schule: "Verzauberung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "M"],
    material: "eine Schlangenzunge und entweder eine Honigwabe oder ein Tropfen süßes Öl",
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du formulierst eine Handlungsweise (in maximal ein oder zwei Sätzen) und bringst bis zu zwölf Kreaturen deiner Wahl auf magische Weise dazu, diese zu befolgen. Die Ziele müssen sich in Reichweite befinden, dich hören und verstehen können und du musst in der Lage sein, sie zu sehen.",
      "Kreaturen, die nicht bezaubert werden können, sind immun gegen diesen Effekt. Die Handlungsweise muss auf eine Art formuliert werden, die sinnvoll erscheint. Wenn du eine Kreatur aufforderst, sich zu erstechen, sich in einen Speer zu werfen, sich anzuzünden oder etwas anderes zu tun, das ihr schadet, beendet das den Zauber automatisch.",
      "Jedes Ziel muss einen Weisheitsrettungswurf ablegen. Misslingt dieser, folgt die betroffene Kreatur der beschriebenen Handlungsweise nach ihren Möglichkeiten. Dies macht die Kreatur entweder für die gesamte Wirkungsdauer oder bis die vorgegebene Handlungsweise abgeschlossen ist, in diesem Fall endet der Zauber vorzeitig.",
      "Du kannst auch bestimmte Bedingungen festlegen, die während der Wirkungsdauer eine bestimmte Handlung auslösen. Beispielsweise könntest du einer Gruppe von Soldaten einflüstern, dass sie dem ersten Bettler, dem sie begegnet, ihr ganzes Geld schenkt. Wird die Bedingung nicht erfüllt, ehe der Zauber endet, führen die Ziele die Handlung nicht aus.",
      "Wenn du oder einer deiner Gefährten ein Ziel verletzt, endet der Zauber für diese Kreatur."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz eines höheren Grades wirkst, verlängert sich die Wirkungsdauer: auf 10 Tage bei einem Zauberplatz des 7. Grades, auf 30 Tage bei einem des 8. Grades und auf 1 Jahr und 1 Tag bei einem des 9. Grades."
  },
  {
    name: "Massen-Heilendes Wort",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Indem du magische Worte der Wiederherstellung rufst, erhalten bis zu sechs Kreaturen deiner Wahl, die sich in Reichweite befinden und die du sehen kannst, Trefferpunkte zurück in Höhe von 1W4 + den Modifikator deines zum Zaubern relevanten Attributs. Der Zauber hat keine Auswirkungen auf Untote oder Konstrukte."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, steigen die geheilten Trefferpunkte für jeden Grad über den 3. hinaus um 1W4."
  },
  {
    name: "Massen-Heilung",
    schule: "Hervorrufung",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Eine Flutwelle heilender Energie geht von dir aus und schließt die Wunden verletzter Kreaturen in deiner Umgebung. Du stellst bis zu 700 Trefferpunkte wieder her, die du auf eine beliebige Anzahl von Kreaturen aufteilen kannst, die sich in Reichweite befinden und die du sehen kannst. Kreaturen, die von diesem Zauber betroffen sind, werden auch von allen Krankheiten geheilt sowie sämtlichen Effekten, die sie blind oder taub machen. Der Zauber hat keine Auswirkungen auf Untote oder Konstrukte."
    ]
  },
  {
    name: "Massen-Wunden heilen",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Kleriker", "Druide"],
    ritual: false,
    beschreibung: [
      "Eine Woge heilender Energie entströmt einem Punkt deiner Wahl in Reichweite. Wähle bis zu sechs Kreaturen in einer Sphäre mit einem Radius von 9 m, die um den Zielpunkt zentriert ist. Jede Kreatur erhält Trefferpunkte zurück in Höhe von 3W8 + den Modifikator deines zum Zaubern relevanten Attributs. Der Zauber hat keine Auswirkungen auf Untote oder Konstrukte."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 6. oder eines höheren Grades wirkst, steigen die geheilten Trefferpunkte für jeden Grad über den 5. hinaus um 1W8."
  },
  {
    name: "Melfs Säurepfeil",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "ein zerstoßenes Rhabarberblatt und der Magen einer Natter",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Ein schimmernder grüner Pfeil schießt auf ein Ziel in Reichweite zu und explodiert in einem Sprühregen aus Säure. Führe einen Fernkampf-Zauberangriff gegen das Ziel aus. Bei einem Treffer erleidet es sofort 4W4 Säureschaden und 2W4 Säureschaden am Ende seines nächsten Zuges. Verfehlst du, spritzt genug Säure auf das Ziel, um die Hälfte des anfänglichen Schadens zu verursachen, ohne jedoch Schaden am Ende des nächsten Zuges zuzufügen."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, steigt der Schaden (sowohl der anfängliche als auch der spätere) für jeden Grad über den 2. hinaus um 1W4."
  },
  {
    name: "Metall erhitzen",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Eisen und eine Flamme",
    klassen: ["Barde", "Druide", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Wähle einen verarbeiteten Gegenstand aus Metall, wie eine metallene Waffe oder eine schwere oder mittelschwere Rüstung, der sich in Reichweite befindet und den du sehen kannst. Du lässt den Gegenstand glühend heiß werden. Alle Kreaturen im physischen Kontakt mit dem Gegenstand erleiden 2W8 Feuerschaden, wenn du den Zauber wirkst. Bis der Zauber endet, kannst du in jedem deiner Züge eine Bonusaktion verwenden, um den Schaden erneut zu verursachen.",
      "Wenn eine Kreatur den Gegenstand trägt oder in der Hand hält und den Schaden erleidet, muss ihr ein Konstitutionsrettungswurf gelingen, damit sie ihn nicht fallenlässt (falls dies möglich ist). Lässt sie den Gegenstand nicht fallen, ist sie im Nachteil bei Angriffs- und Attributswürfen bis zum Beginn deines nächsten Zuges."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 2. hinaus um 1W8."
  },
  {
    name: "Meteoritenschwarm",
    schule: "Hervorrufung",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "1,5 km",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Lodernde Kugeln aus Feuer stürzen an vier verschiedenen Punkten zu Boden, die sich in Reichweite befinden und die du sehen kannst. Alle Kreaturen innerhalb einer Sphäre mit einem Radius von 12 m, die jeweils um einen der Punkte zentriert ist, müssen einen Geschicklichkeitswurf ablegen. Die Sphäre kann sich um Ecken ausbreiten. Bei einem Misserfolg erleidet das Ziel 20W6 Feuerschaden und 20W6 Wuchtschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. Eine Kreatur, die sich im Bereich von mehr als einer feurigen Explosion befindet, erleidet nur einmal Schaden.",
      "Das Feuer beschädigt Gegenstände im Wirkungsbereich und entzündet brennbare Gegenstände, die nicht getragen oder in der Hand gehalten werden."
    ]
  },
  {
    name: "Mit Pflanzen sprechen",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "10 Minuten",
    konzentration: false,
    reichweite: "selbst (Radius von 9 m)",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du erfüllst Pflanzen innerhalb von 9 m mit einem beschränkten Bewusstsein und Belebtheit, sodass sie in der Lage sind, mit dir zu kommunizieren und einfachen Anweisungen zu folgen.",
      "Du kannst die Pflanzen über Ereignisse im Bereich des Zaubers befragen, Informationen über Kreaturen erhalten, die vorbeigekommen sind, oder Kenntnis über das Wetter und andere Umstände erlangen.",
      "Es ist dir auch möglich, schwieriges Gelände, das durch Pflanzen bedingt ist (wie Dickicht und Unterholz), für die Wirkungsdauer in normales zu verwandeln. Gleichermaßen kannst du Pflanzen anweisen, Eindringlinge zu behindern, und so normales Gelände, in dem sich Pflanzen befinden, zu schwierigem machen.",
      "Nach Maßgabe des SL könnten die Pflanzen auch andere Aufgaben für dich erfüllen. Der Zauber erlaubt es ihnen zwar nicht, sich zu entwurzeln und umherzulaufen, aber sie sind in der Lage, ihre Zweige, Ranken und Stiele frei zu bewegen. Befindet sich eine Pflanzenkreatur in der Umgebung, kann sie mit dir kommunizieren, als würdet ihr die gleiche Sprache sprechen, es ist dir jedoch nicht möglich, sie magisch zu beeinflussen.",
      "Der Zauber kann Pflanzen, die mit Verstricken erschaffen wurden, dazu bringen, eine festgesetzte Kreatur freizugeben."
    ]
  },
  {
    name: "Mit Stein verschmelzen",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Druide"],
    ritual: true,
    beschreibung: [
      "Auf magische Weise betrittst du einen steinernen Gegenstand oder eine Oberfläche, die groß genug ist, um deinen Körper aufzunehmen, und verschmilzt mit der gesamten Ausrüstung, die du trägst, für die Wirkungsdauer mit dem Stein. Du verwendest deine Bewegung und trittst an einem Punkt, den du berühren kannst, in den Gegenstand oder die Oberfläche. Solange du mit dem Stein verschmolzen bist, ist deine Anwesenheit mit nicht-magischen Sinnen in keinster Weise wahrnehmbar. Du selbst bemerkst zwar, wie Zeit vergeht, kannst aber nicht sehen, was draußen geschieht, und bist im Nachteil bei Würfen auf Weisheit (Wahrnehmung), die du ablegst um Geräusche von außerhalb zu hören. Innerhalb des Steins bist du in der Lage, Zauber auf dich selbst zu wirken. Es ist dir nicht möglich, dich zu bewegen, außer du nutzt deine Bewegung, um den Stein zu verlassen, wo du ihn betreten hast (was den Zauber beendet).",
      "Geringer physischer Schaden am Stein verletzt dich nicht, sollte er aber zum Teil zerstört werden oder seine Form verändern (sodass du nicht mehr hineinpasst), wirst du aus dem Stein gestoßen und erleidest dabei 6W6 Wuchtschaden. Die vollständige Zerstörung des Steins (oder seine Verwandlung in eine andere Substanz) stößt dich ebenfalls aus diesem und fügt dir 50 Punkte Wuchtschaden zu. Wenn du aus dem Stein gestoßen wirst, fällst du liegend in einen nicht besetzten Bereich, der dem, wo du den Stein betreten hast, am nächsten ist."
    ]
  },
  {
    name: "Mit Tieren sprechen",
    schule: "Erkenntnismagie",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "10 Minuten",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Druide", "Waldläufer"],
    ritual: true,
    beschreibung: [
      "Für die Wirkungsdauer erhältst du die Fähigkeit, Tiere zu verstehen und verbal mit ihnen zu kommunizieren. Das Wissen und das Bewusstsein vieler Tiere wird durch ihren Intelligenzwert beschränkt, sie sind jedoch immer in der Lage, Informationen über nahe Orte und Monster zu übermitteln sowie über das, was sie wahrnehmen können oder innerhalb des letzten Tages wahrgenommen haben. Nach Maßgabe des SL könntest du ein Tier auch überzeugen, dir einen kleinen Gefallen zu erweisen."
    ]
  },
  {
    name: "Mit Toten sprechen",
    schule: "Nekromantie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "10 Minuten",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V", "G", "M"],
    material: "brennender Weihrauch",
    klassen: ["Barde", "Kleriker"],
    ritual: false,
    beschreibung: [
      "Du erfüllst einen Leichnam deiner Wahl in Reichweite mit dem Anschein von Leben und Intelligenz, sodass er Fragen beantworten kann, die du ihm stellst. Die Leiche muss noch einen Mund besitzen und darf nicht untot sein. Der Zauber scheitert, wenn die Leiche innerhalb der letzten 10 Tage bereits Ziel dieses Zaubers war.",
      "Während der Wirkungsdauer kannst du dem Leichnam bis zu fünf Fragen stellen. Dieser besitzt nur das Wissen, das er zu Lebzeiten besaß, und kennt nur die Sprachen, die er sprechen konnte. Antworten sind für gewöhnlich kurz, rätselhaft oder sich wiederholend. Außerdem muss die Leiche dir nicht wahrheitsgemäß antworten, wenn du ihr feindlich gesonnen bist oder zu Lebzeiten warst und sie dich als ihren Feind erkennt. Dieser Zauber bringt die Seele der Kreatur nicht in ihren Körper zurück, nur ihren belebenden Geist. Somit kann der Leichnam keine neuen Informationen erhalten, versteht nichts, das seit seinem Tod geschehen ist, und kann keine Spekulationen über zukünftige Ereignisse äußern."
    ]
  },
  {
    name: "Mondstrahl",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "mehrere Samen eines Mondsamengewächses und ein Stück opaleszierender Feldspat",
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Ein silbriger Strahl aus blassem Licht scheint in einem Zylinder mit 1,50 m Radius und 12 m Höhe auf die Erde. Der Zylinder ist um einen Punkt in Reichweite zentriert und für die Wirkungsdauer von dämmrigem Licht erfüllt. Wenn eine Kreatur das erste Mal in einem Zug den Bereich des Zaubers betritt oder ihren Zug dort beginnt, wird sie von geisterhaften Flammen eingehüllt, die brennende Schmerzen verursachen, und muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet das Ziel 2W10 gleißenden Schaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "Ein Gestaltwandler ist bei diesem Rettungswurf im Nachteil. Misslingt er ihm, nimmt der Gestaltwandler seine ursprüngliche Form an und kann diese nicht verändern, bis er den Bereich des Zaubers verlässt.",
      "In jedem deiner Züge, nachdem du den Zauber gewirkt hast, kannst du deine Aktion verwenden, um den Zylinder bis zu 18 m in eine beliebige Richtung zu bewegen."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 2. hinaus um 1W10."
  },
  {
    name: "Monster beherrschen",
    schule: "Verzauberung",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du versuchst eine Kreatur in Reichweite, die du sehen kannst, unter deine Kontrolle zu bringen. Dem Ziel muss ein Weisheitsrettungswurf gelingen, um nicht für die Wirkungsdauer von dir bezaubert zu sein. Kämpfen du oder deine Verbündeten gerade gegen die Kreatur, ist sie bei diesem Rettungswurf im Vorteil.",
      "Solange die Kreatur von dir bezaubert ist und ihr euch auf derselben Existenzebene aufhaltet, verfügst du über eine telepathische Verbindung mit ihr. Diese kannst du verwenden, um der Kreatur Befehle zu erteilen (dazu musst du keine Aktion aufwenden), die sie nach ihren Möglichkeiten erfüllt. Du kannst ihr eine einfache, allgemeine Handlung befehlen, wie „Greife diese Kreatur an”, „Lauf dort hinüber” oder „Hole diesen Gegenstand”. Wenn die Kreatur den Befehl erfüllt hat und keine weiteren Anweisungen von dir erhält, verteidigt sie sich nur und versucht am Leben zu bleiben.�",
      "Du kannst deine Aktion verwenden, um eine vollständige und präzise Kontrolle über das Ziel zu erlangen. Bis zum Ende deines nächsten Zuges führt die Kreatur nur die Aktionen aus, die du auswählst, und tut nichts, was du ihr nicht erlaubst. Während dieser Zeit kannst du die Kreatur auch eine Reaktion verwenden lassen, musst jedoch dazu deine eigene Reaktion verbrauchen.",
      "Immer wenn das Ziel Schaden erleidet, darf es einen neuen Weisheitsrettungswurf ablegen, um den Zauber abzuschütteln. Ist der Rettungswurf erfolgreich, endet der Zauber."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 9. Grades wirkst, beträgt die Wirkungsdauer „Konzentration, bis zu 8 Stunden”."
  },
  {
    name: "Monster festhalten",
    schule: "Verzauberung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "ein kleines, gerades Stück Eisen",
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Wähle eine Kreatur in Reichweite, die du sehen kannst. Dem Ziel muss ein Weisheitsrettungswurf gelingen, um nicht für die Wirkungsdauer gelähmt zu werden. Der Zauber hat keine Auswirkungen auf Untote. Am Ende jedes seiner Züge kann das Ziel einen weiteren Weisheitsrettungswurf ablegen. Bei einem Erfolg endet der Zauber für das Ziel."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 6. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 5. hinaus eine zusätzliche Kreatur als Ziel wählen. Beim Wirken des Zaubers dürfen die Kreaturen nicht weiter als 9 m voneinander entfernt sein."
  },
  {
    name: "Mordenkainens Herrliches Herrenhaus",
    schule: "Beschwörung",
    grad: 7,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "90 m",
    komponenten: ["V", "G", "M"],
    material: "ein Miniaturportal aus Elfenbein, ein kleines Stück polierter Marmor und ein winziger Silberlöffel, wobei jeder Gegenstand mindestens 5 GM wert sein muss",
    klassen: ["Barde", "Magier"],
    ritual: false,
    beschreibung: [
      "Du beschwörst eine extradimensionale Behausung, die sich in Reichweite befinden muss und die für die Wirkungsdauer bestehen bleibt. Du entscheidest, wo der Eingang zu der Behausung liegen soll. Dieser schimmert leicht und ist 1,50 m breit sowie 3 m hoch. Du und Kreaturen, die du beim Wirken des Zaubers festlegst, können die extradimensionale Behausung betreten, solange das als Eingang erscheinende Portal geöffnet ist. Dieses kannst du öffnen oder schließen, wenn du dich innerhalb von 9 m befindest. Solange das Portal geschlossen ist, ist es unsichtbar. Hinter dem Eingang befindet sich eine prachtvolle Vorhalle, von der zahlreiche Räume abgehen. Die Atmosphäre ist sauber, frisch und warm.",
      "Beim Wirken des Zaubers kannst du eine beliebige Raumaufteilung erschaffen, solange die Behausung aus maximal 50 Würfeln besteht, die jeweils eine Kantenlänge von 3 m besitzen. Die Behausung ist so möbliert und dekoriert, wie du es möchtest. Es ist ausreichend Nahrung vorhanden, um ein Menü von neun Gängen für bis zu 100 Personen zu servieren. Ein Stab von 100 geisterhaften Dienern kümmert sich um alle, die eintreten. Du entscheidest, wie diese Diener aussehen und was sie tragen. Sie folgen jedem deiner Befehle.",
      "Die Diener können jegliche Aufgabe erfüllen, die lebendige Diener erfüllen könnten, es ist ihnen jedoch nicht möglich, anzugreifen oder Aktionen auszuführen, die direkt einer anderen Kreatur schaden würde. Sie sind also in der Lage, Gegenstände zu holen, sauber zu machen und zu reparieren, Kleider zusammenzulegen, Feuer zu entzünden, Essen zu servieren, Wein einzuschenken und so weiter.",
      "Die Diener können sich im Herrenhaus frei bewegen, es aber nicht verlassen. Möbel und andere Gegenstände, die durch diesen Zauber erschaffen werden, lösen sich in Rauchschwaden auf, wenn sie aus dem Herrenhaus entfernt werden. Endet der Zauber, werden alle Kreaturen und Gegenstände im Inneren des extradimensionalen Raumes in einen offenen Bereich gestoßen, der dem Ausgang am nächsten ist."
    ]
  },
  {
    name: "Mordenkainens Privates Heiligtum",
    schule: "Bannmagie",
    grad: 4,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein dünnes Blech aus Blei, ein Stück undurchsichtiges Glas, ein Bausch Baumwolle oder Stoff und zerstoßener Crysolith",
    klassen: ["Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du machst einen Bereich in Reichweite auf magische Weise sicher. Der Bereich ist ein Würfel, der eine Kantenlänge zwischen 1,50 m und 30 m haben darf. Der Zauber bleibt für die Wirkungsdauer bestehen, wenn du keine Aktion verwendest, um ihn aufzuheben.",
      "Beim Wirken des Zaubers entscheidest du, welche Art von Sicherheit er bietet, wobei du beliebig viele der folgenden Eigenschaften auswählen kannst:",
      "• Geräusche können nicht durch die Barriere am Rand des geschützten Bereichs dringen.",
      "• Die Barriere des geschützten Bereichs erscheint dunkel und nebelig, sodass sie nicht mit Blicken durchdrungen werden kann (auch nicht mit Dunkelsicht).",
      "• Sensoren, die von Erkenntniszaubern erschaffen werden, können nicht im geschützten Bereich erscheinen oder die Barriere an ihrem äußeren Rand passieren.",
      "• Kreaturen in dem Bereich können nicht Ziel von Erkenntniszaubern werden.",
      "• Nichts kann in den geschützten Bereich hinein oder hinaus teleportiert werden.",
      "• Ebenenreisen sind innerhalb des geschützten Bereichs nicht möglich.",
      "Wirkst du den Zauber für 1 Jahr jeden Tag an demselben Ort, wird der Effekt permanent."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 5. oder eines höheren Grades wirkst, vergrößert sich die Kantenlänge des Würfels um 30 m für jeden Grad über den 4. hinaus. Somit könntest du einen Würfel mit einer Kantenlänge von 60 m beschützen, wenn du einen Zauberplatz des 5. Grades verbrauchst."
  },
  {
    name: "Mordenkainens Schwert",
    schule: "Hervorrufung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Miniaturschwert aus Platin mit Griff und Knauf aus Kupfer und Zinn im Wert von 250 GM",
    klassen: ["Barde", "Magier"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine schwertförmige Fläche aus magischer Energie, die in Reichweite schwebt und die für die Wirkungsdauer bestehen bleibt.",
      "Wenn das Schwert erscheint, kannst du einen Nahkampf-Zauberangriff gegen ein Ziel deiner Wahl ausführen, das sich innerhalb von 1,50 m um das Schwert befindet. Bei einem Treffer erleidet das Ziel 3W10 Energieschaden.",
      "Bis der Zauber endet, kannst du in jedem deiner Züge eine Bonusaktion verwenden, um das Schwert bis zu 6 m zu einem Punkt zu bewegen, den du sehen kannst, und ein Ziel deiner Wahl anzugreifen."
    ]
  },
  {
    name: "Mordenkainens Treuer Hund",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "eine winzige Silberpfeife, ein Stück Knochen und ein Faden",
    klassen: ["Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du beschwörst einen geisterhaften Wachhund in einem nicht besetzten Bereich, der sich in Reichweite befindet und den du sehen kannst. Der Wachhund bleibt bestehen, bis du eine Aktion verwendest, um ihn fortzuschicken, oder du dich mehr als 30 m von ihm entfernst.",
      "Der Hund ist unsichtbar für alle Kreaturen mit Ausnahme von dir selbst und kann keinen Schaden erleiden. Wenn sich eine Kreatur der Größenkategorie klein oder größer dem Hund auf 9 m nähert, ohne das Passwort auszusprechen, das du beim Wirken des Zaubers festgelegt hast, beginnt der Hund laut zu bellen. Er sieht unsichtbare Kreaturen, kann auf die Ätherebene blicken und ignoriert Illusionen.",
      "Zu Beginn eines jeden deiner Züge versucht der Hund, eine Kreatur im Umkreis von 1,50 m um sich zu beißen, die dir feindlich gesonnen ist. Der Angriffsbonus des Hundes entspricht dem Modifikator deines zum Zaubern relevanten Attributs + deinem Übungsbonus. Bei einem Treffer verursacht er 4W8 Stichschaden."
    ]
  },
  {
    name: "Nahrung und Wasser erschaffen",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Magieschmied", "Paladin"],
    ritual: false,
    beschreibung: [
      "Du erschaffst 45 Pfund Nahrung und 120 Liter Wasser auf dem Boden oder in Behältern in Reichweite. Diese Vorräte reichen aus, um fünfzehn humanoide Kreaturen oder fünf Reittiere für 24 Stunden zu ernähren. Die Nahrung ist ohne Geschmack, aber nahrhaft, und verdirbt, wenn sie nicht innerhalb von 24 Stunden gegessen wird. Das Wasser ist sauber und wird nicht verderben."
    ]
  },
  {
    name: "Nahrung und Wasser reinigen",
    schule: "Verwandlung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Druide", "Magieschmied", "Paladin"],
    ritual: true,
    beschreibung: [
      "Alle nicht-magischen Nahrungsmittel und Getränke in einer Sphäre mit einem Radius von 1,50 m, zentriert um einen Punkt deiner Wahl in Reichweite, werden gereinigt und von Giften und Krankheiten befreit."
    ]
  },
  {
    name: "Nebelschritt",
    schule: "Beschwörung",
    grad: 2,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du wirst kurz von einem silbrigen Nebel umgeben und teleportierst dich bis zu 9 m weit in einen nicht besetzten Bereich, den du sehen kannst."
    ]
  },
  {
    name: "Nebelwolke",
    schule: "Beschwörung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide", "Waldläufer", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine Sphäre aus Nebel mit einem Radius von 6 m, die um einen Punkt deiner Wahl in Reichweite zentriert ist. Die Sphäre breitet sich um Ecken aus, und ihr Bereich ist komplett verschleiert. Sie bleibt für die Wirkungsdauer bestehen oder bis ein mittelstarker oder stärkerer Wind (mindestens 15 km pro Stunde) den Nebel auflöst."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, vergrößert sich der Radius der Sphäre um 6 m für jeden Grad über den 1. hinaus."
  },
  {
    name: "Notfall",
    schule: "Hervorrufung",
    grad: 6,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "10 Tage",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V", "G", "M"],
    material: "eine kleine Statue von dir selbst aus Elfenbein und mit Edelsteinen verziert im Wert von mindestens 1.500 GM",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Wähle einen Zauber des 5. oder eines niedrigeren Grades, den du wirken kannst, der einen Zeitaufwand von einer Aktion besitzt und der dich als Ziel haben kann. Du wirkst diesen Spruch (im Folgenden Notfallzauber genannt) gemeinsam mit Notfall und verbrauchst für beide Zauberplätze, allerdings tritt der Notfallzauber nicht in Kraft. Stattdessen setzt sein Effekt ein, wenn bestimmte Umstände eintreten, die du beim Wirken der beiden Zauber festlegst. Wirkst du Notfall beispielsweise zusammen mit Wasser atmen, kannst du bestimmen, dass Wasser atmen in Kraft tritt, wenn du in Wasser oder einer ähnlichen Flüssigkeit untergetaucht wirst. Der Notfallzauber wird augenblicklich ausgelöst, wenn die Umstände das erste Mal erfüllt werden, gleichgültig ob du es willst oder nicht. Danach endet Notfall.",
      "Der Effekt des Notfallzaubers gilt ausschließlich für dich, selbst wenn er normalerweise auch andere Ziele betreffen könnte. Außerdem darf nur ein Notfallzauber auf einmal aktiv sein. Wenn du Notfall noch einmal wirkst, endet der Effekt des bisherigen Notfallzaubers. Notfall endet auch, wenn sich die Materialkomponenten nicht an deiner Person befinden."
    ]
  },
  {
    name: "Nystuls Magische Aura",
    schule: "Illusion",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein kleines Quadrat aus Seide",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Du berührst eine Kreatur oder einen Gegenstand und legst eine Illusion auf das Ziel, sodass Erkenntniszauber falsche Informationen über es vermitteln. Das Ziel kann eine bereitwillige Kreatur oder ein Gegenstand sein, der nicht von einer anderen Kreatur getragen oder in der Hand gehalten wird.",
      "Wähle beim Wirken des Zaubers einen oder beide der folgenden Effekte, die für die Wirkungsdauer anhalten. Wenn du diesen Zauber für 30 Tage jeden Tag auf dieselbe Kreatur oder denselben Gegenstand wirkst und jedes Mal den gleichen Effekt nutzt, hält die Illusion an, bis sie gebannt wird.",
      "• Falsche Aura: Du veränderst die Art, wie das Ziel für Zauber und magische Effekte erscheint, die magische Auren aufspüren (etwa Magie entdecken). Du kannst einen nicht-magischen Gegenstand als magischen erscheinen lassen, einen magischen als nicht-magischen oder die Aura eines magischen Gegenstands ändern, sodass er einer Magieschule deiner Wahl anzugehören scheint. Wenn du diesen Effekt auf einen Gegenstand wirkst, kannst du entscheiden, dass die Illusion von jeder Kreatur erkannt wird, die den Gegenstand in die Hand nimmt.",
      "• Maskierung: Du beeinflusst, wie das Ziel von Zaubern und magischen Effekten wahrgenommen wird, die Kreaturentypen aufspüren (etwa das Göttliche Gespür des Paladins oder der Auslöser des Zaubers Symbol). Bestimme einen Kreaturentyp, und Zauber und andere magische Effekte behandeln das Ziel, als wäre es eine entsprechende Kreatur oder von dieser Gesinnung."
    ]
  },
  {
    name: "Ottos Unwiderstehlicher Tanz",
    schule: "Verzauberung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde", "Magier"],
    ritual: false,
    beschreibung: [
      "Wähle eine Kreatur in Reichweite, die du sehen kannst. Das Ziel beginnt auf absurde und belustigende Weise auf der Stelle zu tanzen, für die Wirkungsdauer wiegt es sich, tippt mit den Füßen und springt umher. Kreaturen, die nicht bezaubert werden können, sind immun gegen diesen Zauber.",
      "Eine betroffene Kreatur muss ihre gesamte Bewegung zum Tanzen aufwenden, ohne sich von der Stelle zu bewegen, und ist im Nachteil bei Geschicklichkeitsrettungswürfen und Angriffswürfen. Solange das Ziel unter dem Effekt dieses Zaubers steht, sind andere Kreaturen im Vorteil bei Angriffen gegen es. Als Aktion kann eine tanzende Kreatur einen Weisheitsrettungswurf ablegen, um sich wieder unter Kontrolle zu bringen. Bei einem Erfolg endet der Zauber."
    ]
  },
  {
    name: "Otilukes Frostsphäre",
    schule: "Hervorrufung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "90 m",
    komponenten: ["V", "G", "M"],
    material: "eine kleine Kugel aus Kristall",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Eine frostklirrende Kugel aus Kälte schießt aus deinen Fingerspitzen zu einem Punkt deiner Wahl in Reichweite, wo sie als Sphäre mit einem Radius von 18 m explodiert. Jede Kreatur in diesem Bereich muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 10W6 Kälteschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "Wenn die Kugel eine Fläche aus Wasser oder einer Flüssigkeit trifft, die größtenteils aus Wasser besteht (dazu gehören keine Wasserkreaturen), lässt sie diese in einem quadratischen Bereich mit 9 m Seitenlänge und einer Tiefe von 15 cm gefrieren. Das Eis bleibt für 1 Minute bestehen. Kreaturen, die an der Oberfläche des Wassers schwimmen, werden vom Eis gefangen. Eine gefangene Kreatur kann eine Aktion verwenden, um einen Stärkewurf gegen den SG zum Widerstehen deiner Zauber abzulegen. Bei einem Erfolg gelingt es ihr, sich zu befreien.",
      "Wenn du möchtest, kannst du das Abfeuern der Kugel verzögern, nachdem du den Zauber gewirkt hast. In diesem Fall erscheint eine kleine kühle Kugel, ungefähr von der Größe eines Schleudersteins, in deiner Hand. Zu jedem späteren Zeitpunkt kannst du oder eine Kreatur, der du die Kugel gibst, diese werfen (mit einer Reichweite von 12 m) oder mit einer Schleuder verschießen (mit der normalen Reichweite der Waffe). Die Kugel zerbricht, wenn sie aufschlägt, was den gleichen Effekt wie das normale Wirken des Zaubers auslöst. Du kannst die Kugel auch ablegen, ohne sie zu zerbrechen. Ist sie nach 1 Minute nicht zerbrochen, explodiert sie."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 7. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 6. hinaus um 1W6."
  },
  {
    name: "Otilukes Unverwüstliche Sphäre",
    schule: "Hervorrufung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein halbkreisförmiges Stück klaren Kristalls und eine entsprechende Halbkugel aus Gummiarabikum",
    klassen: ["Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Eine Sphäre aus schimmernder Energie umschließt eine Kreatur oder einen Gegenstand der Größenkategorie groß oder kleiner in Reichweite. Eine unwillige Kreatur muss einen erfolgreichen Geschicklichkeitsrettungswurf ablegen, um nicht für die Wirkungsdauer von der Sphäre umschlossen zu werden.",
      "Weder physische Gegenstände noch magische Energie oder andere Zaubereffekte vermögen die Barriere zu durchdringen, nicht von außen und auch nicht von innen, eine Kreatur in der Sphäre kann jedoch normal atmen. Die Sphäre ist immun gegen alle Arten von Schaden, und Kreaturen oder Gegenstände in ihrem Inneren können von Angriffen oder Effekten, die von außerhalb kommen, nicht betroffen werden. Ebensowenig ist es der Kreatur im Inneren der Sphäre möglich, etwas außerhalb zu beeinflussen.",
      "Die Sphäre ist gewichtslos und gerade groß genug, um die Kreatur oder den Gegenstand aufzunehmen. Eine umschlossene Kreatur kann ihre Aktion verwenden, um sich gegen die Wand der Sphäre zu drücken und sich so mit ihrer halben Bewegungsrate rollend fortzubewegen. Gleichermaßen kann die Sphäre von anderen Kreaturen ins Rollen gebracht und bewegt werden, die sich außerhalb befinden.",
      "Wird der Zauber Auflösen auf die Sphäre gewirkt, zerstört er sie, ohne etwas im Inneren zu beschädigen."
    ]
  },
  {
    name: "Person beherrschen",
    schule: "Verzauberung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du versuchst eine humanoide Kreatur in Reichweite, die du sehen kannst, unter deine Kontrolle zu bringen. Dem Ziel muss ein Weisheitsrettungswurf gelingen, um nicht für die Wirkungsdauer von dir bezaubert zu werden. Kämpfen du oder deine Verbündeten gerade gegen das Ziel, ist es bei diesem Rettungswurf im Vorteil.",
      "Solange die Person von dir bezaubert ist und ihr euch auf derselben Existenzebene aufhaltet, verfügst du über eine telepathische Verbindung mit ihr. Diese kannst du verwenden, um der Person Befehle zu erteilen (dazu musst du keine Aktion aufwenden), die sie nach ihren Möglichkeiten erfüllt. Du kannst ihr eine einfache, allgemeine Handlung befehlen, wie „Greife diese Kreatur an”, „Lauf dort hinüber” oder „Hole diesen Gegenstand”. Wenn die Person den Befehl erfüllt hat und keine weiteren Anweisungen von dir erhält, verteidigt sie sich nur und versucht am Leben zu bleiben.�",
      "Du kannst deine Aktion verwenden, um eine vollständige und präzise Kontrolle über das Ziel zu erlangen. Bis zum Ende deines nächsten Zuges führt die Person nur die Aktionen aus, die du auswählst, und tut nichts, was du ihr nicht erlaubst. Während dieser Zeit kannst du die Person auch eine Reaktion verwenden lassen, musst jedoch dazu deine eigene Reaktion verbrauchen.",
      "Immer wenn das Ziel Schaden erleidet, darf es einen neuen Weisheitsrettungswurf ablegen, um den Zauber abzuschütteln. Ist der Rettungswurf erfolgreich, endet der Zauber."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz eines höheren Grades wirkst, verlängert sich die Wirkungsdauer: auf „Konzentration, bis zu 10 Minuten” bei einem Zauberplatz des 6. Grades, auf „Konzentration, bis zu 1 Stunde” bei einem des 7. Grades und auf „Konzentration, bis zu 8 Stunden” bei einem des 8. Grades."
  },
  {
    name: "Person bezaubern",
    schule: "Verzauberung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Druide", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du versuchst eine humanoide Kreatur zu bezaubern, die sich in Reichweite befindet und die du sehen kannst. Das Ziel muss einen Weisheitsrettungswurf ablegen. Kämpfen du oder deine Verbündeten gerade gegen das Ziel, ist es bei diesem Rettungswurf im Vorteil. Misslingt er, wird die betroffene Person von dir bezaubert, bis der Zauber endet oder du oder einer deiner Gefährten dem Ziel schadet. Für die Wirkungsdauer betrachtet dich die Person als freundschaftliche Bekanntschaft. Wenn der Zauber endet, wird dem Ziel bewusst, dass es von dir bezaubert wurde."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 1. hinaus eine weitere humanoide Kreatur als Ziel wählen. Beim Wirken des Zaubers dürfen die Kreaturen nicht weiter als 9 m voneinander entfernt sein."
  },
  {
    name: "Person festhalten",
    schule: "Verzauberung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein kleines, gerades Stück Eisen",
    klassen: ["Barde", "Kleriker", "Druide", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Wähle eine humanoide Kreatur in Reichweite, die du sehen kannst. Dem Ziel muss ein Weisheitsrettungswurf gelingen, um nicht für die Wirkungsdauer gelähmt zu werden. Zu Beginn eines jeden seiner Züge kann das Ziel einen weiteren Weisheitsrettungswurf ablegen. Bei einem Erfolg endet der Zauber für das Ziel."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 2. hinaus eine weitere humanoide Kreatur als Ziel wählen. Beim Wirken des Zaubers dürfen die Kreaturen nicht weiter als 9 m voneinander entfernt sein."
  },
  {
    name: "Pfeilsalve beschwören",
    schule: "Beschwörung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "45 m",
    komponenten: ["V", "G", "M"],
    material: "ein Geschoss oder eine Wurfwaffe",
    klassen: ["Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du schleuderst eine nicht-magische Wurfwaffe oder schießt ein nicht-magisches Geschoss in die Luft und bestimmst einen Punkt innerhalb der Reichweite. Hunderte magische Kopien des Gegenstands fallen in einem Hagel von oben herab und verschwinden dann. Jede Kreatur innerhalb eines Zylinders mit 12 m Radius und 6 m Höhe, zentriert um den Zielpunkt, muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 8W8 Schaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. Der Schadenstyp entspricht dem des als Materialkomponente verwendeten Gegenstands."
    ]
  },
  {
    name: "Pfeilspalier",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "1,50 m",
    komponenten: ["V", "G", "M"],
    material: "vier oder mehr Pfeile oder Bolzen",
    klassen: ["Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du steckst vier nicht-magische Pfeile oder Armbrustbolzen in Reichweite in den Boden und legst Magie auf sie, um einen Bereich zu schützen. Bewegt sich während der Wirkungsdauer eine Kreatur außer dir das erste Mal auf 9 m oder näher an die Geschosse heran oder beendet ihren Zug dort, schießt eins der Geschosse auf die Kreatur zu. Misslingt ihr ein Geschicklichkeitsrettungswurf, erleidet sie 1W6 Schaden. Der Pfeil oder Bolzen wird dabei zerstört. Der Zauber endet, wenn keine Geschosse mehr übrig sind.",
      "Wenn du den Zauber wirkst, kannst du Kreaturen festlegen, die den Effekt nicht auslösen."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 2. hinaus zwei weitere Geschosse verzaubern."
  },
  {
    name: "Pflanzentor",
    schule: "Beschwörung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Runde",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber erschafft ein magisches Band zwischen einer unbeweglichen Pflanze der Größenkategorie groß oder größer in Reichweite und einer anderen Pflanze in beliebiger Entfernung auf derselben Existenzebene. Du musst die Zielpflanze gesehen oder mindestens einmal zuvor berührt haben. Für die Wirkungsdauer kann jede Kreatur in die verzauberte Pflanze hineinsteigen und aus der Zielpflanze wieder hinaus, indem sie 1,50 m Bewegungsrate aufwendet."
    ]
  },
  {
    name: "Pflanzenwachstum",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion oder 8 Stunden",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "45 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber kanalisiert Lebenskraft in die Pflanzen eines bestimmten Bereichs. Es gibt zwei mögliche Anwendungen für diesen Zauber, die entweder unmittelbare oder langfristige Effekte haben.",
      "Wenn du diesen Zauber mit einer Aktion wirkst, wähle einen Punkt in Reichweite. Alle normalen Pflanzen in einem Radius von 30 m um diesen Punkt beginnen zu wachsen und zu wuchern. Eine Kreatur, die sich durch diesen Bereich bewegt, muss für jeweils 30 cm, die sie zurücklegen will, 1,20 m Bewegungsrate aufwenden. Du kannst bestimmen, dass ein oder mehrere Gebiete beliebiger Größe im Bereich des Zaubers nicht betroffen sind.",
      "Wenn du den Zauber über 8 Stunden wirkst, machst du das Land fruchtbar und ertragreich. Alle Pflanzen in einem Radius von 750 m um einen Punkt in Reichweite erzeugen für 1 Jahr doppelt so viel Nahrung wie gewöhnlich, wenn sie geerntet werden."
    ]
  },
  {
    name: "Rarys Telepathisches Band",
    schule: "Erkenntnismagie",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "Stücke von Eierschalen von zwei unterschiedlichen Arten von Kreaturen",
    klassen: ["Magier"],
    ritual: true,
    beschreibung: [
      "Du schaffst eine telepathische Verbindung zwischen bis zu acht willigen Kreaturen deiner Wahl in Reichweite und verbindest jede ausgewählte Kreatur für die Wirkungsdauer geistig mit allen anderen. Kreaturen mit einem Intelligenzwert von 2 oder weniger sind nicht von diesem Zauber betroffen.",
      "Bis der Zauber endet, können die Ziele über die Verbindung telepathisch miteinander kommunizieren, unabhängig davon, ob sie eine gemeinsame Sprache haben. Die Kommunikation ist über jede Entfernung möglich, kann sich aber nicht auf andere Existenzebenen erstrecken."
    ]
  },
  {
    name: "Rascher Rückzug",
    schule: "Verwandlung",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Hexenmeister", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber ermöglicht es dir, dich mit außerordentlicher Geschwindigkeit zu bewegen. Wenn du diesen Zauber wirkst und als Bonusaktion in jeder deiner nachfolgenden Runden für die Wirkungsdauer, kannst du die Aktion Stürmen nutzen."
    ]
  },
  {
    name: "Redegewandtheit",
    schule: "Verwandlung",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde", "Hexenmeister"],
    ritual: false,
    beschreibung: [
      "Bis der Zauber endet, kannst du bei Charismawürfen, die du ausführst, die gewürfelte Zahl durch 15 ersetzen. Außerdem können Lügen, die du sagst, durch Magie nicht aufgedeckt werden, und magische Mittel kommen zu dem Schluss, dass du die Wahrheit sagst, egal was du sagst."
    ]
  },
  {
    name: "Regenbogenspiel",
    schule: "Hervorrufung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "selbst (Kegel von 18 m)",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein Kegel aus schimmerndem, mehrfarbigem Licht strahlt aus deiner Hand. Jede Kreatur im Kegel muss einen Geschicklichkeitsrettungswurf ablegen. Würfle für jedes Ziel einen W8, um zu bestimmen, welche Farbe des Strahls es trifft.",
      "• 1 – Rot: Das Ziel erleidet 10W6 Feuerschaden bei einem fehlgeschlagenen Rettungswurf oder die Hälfte des Schadens bei einem gelungenen.",
      "• 2 – Orange: Das Ziel erleidet 10W6 Säureschaden bei einem fehlgeschlagenen Rettungswurf oder die Hälfte des Schadens bei einem gelungenen.",
      "• 3 – Gelb: Das Ziel erleidet 10W6 Blitzschaden bei einem fehlgeschlagenen Rettungswurf oder die Hälfte des Schadens bei einem gelungenen.",
      "• 4 – Grün: Das Ziel erleidet 10W6 Giftschaden bei einem fehlgeschlagenen Rettungswurf oder die Hälfte des Schadens bei einem gelungenen.",
      "• 5 – Blau: Das Ziel erleidet 10W6 Kälteschaden bei einem fehlgeschlagenen Rettungswurf oder die Hälfte des Schadens bei einem gelungenen.",
      "• 6 – Indigo: Das Ziel ist eingeschränkt (siehe Anhang A). Am Ende jedes seiner Züge muss es einen Konstitutionsrettungswurf ablegen. Nach drei Fehlschlägen wird es dauerhaft versteinert. Nach drei Erfolgen endet der Effekt.",
      "• 7 – Violett: Das Ziel ist geblendet. Am Beginn seines nächsten Zuges muss es einen Weisheitsrettungswurf ablegen. Bei einem Fehlschlag wird es auf eine zufällig bestimmte Existenzebene transportiert (der SL legt fest, wohin).",
      "• 8 – Sonderzahl: Das Ziel wird von zwei Strahlen getroffen. Würfle zweimal, wobei du bei einer erneuten 8 nochmals würfelst."
    ]
  },
  {
    name: "Regenbogenwand",
    schule: "Bannmagie",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "10 Minuten",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "An einem von dir gewählten Punkt in Reichweite erscheint eine schimmernde, mehrfarbige, opake Wand aus strahlendem Licht. Die Wand erscheint in einer Orientierung deiner Wahl: horizontal, vertikal oder geneigt. Sie kann bis zu 18 m lang, 9 m hoch und 2,5 cm dick sein. Alternativ kannst du eine sphärische Wand mit einem Durchmesser von bis zu 9 m erschaffen, die um einen Punkt in Reichweite zentriert ist.",
      "Die Wand bleibt für die Wirkungsdauer bestehen und gibt helles Licht in einem Umkreis von 30 m und schwaches Licht in weiteren 30 m ab. Du und alle Kreaturen, die du beim Wirken des Zaubers benennst, könnt die Wand passieren und seid von ihren Effekten nicht betroffen.",
      "Die Wand besteht aus sieben Schichten, jede in einer anderen Farbe. Wenn eine Kreatur versucht, die Wand zu durchqueren, muss sie die Schichten von außen nach innen durchwandern. Für jede Schicht muss sie einen Konstitutionsrettungswurf ablegen; misslingt dieser, erleidet sie den entsprechenden Effekt und kann für 1 Minute nicht weiter eindringen.",
      "Jede Schicht kann durch einen bestimmten Zauber vernichtet werden. Wenn eine Schicht vernichtet wird, verschwinden alle Schichten außerhalb davon ebenfalls.",
      "• Rot: Erleidet 10W6 Feuerschaden (Konstitutionsrettungswurf halbiert). Vernichtet durch Kegelkälte.",
      "• Orange: Erleidet 10W6 Säureschaden (Konstitutionsrettungswurf halbiert). Vernichtet durch einen starken Wind.",
      "• Gelb: Erleidet 10W6 Blitzschaden (Konstitutionsrettungswurf halbiert). Vernichtet durch Desintegration.",
      "• Grün: Erleidet 10W6 Giftschaden (Konstitutionsrettungswurf halbiert). Vernichtet durch Mauergang.",
      "• Blau: Erleidet 10W6 Kälteschaden (Konstitutionsrettungswurf halbiert). Vernichtet durch Feuerball.",
      "• Indigo: Eingeschränkt. Am Ende jedes Zuges Konstitutionsrettungswurf. Drei Fehlschläge: dauerhaft versteinert. Drei Erfolge: Effekt endet. Vernichtet durch Tageslicht.",
      "• Violett: Geblendet. Am Beginn des nächsten Zuges Weisheitsrettungswurf. Fehlschlag: auf zufällige Existenzebene transportiert. Vernichtet durch Magie bannen."
    ]
  },
  {
    name: "Regeneration",
    schule: "Verwandlung",
    grad: 7,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Gebetsrad und Weihwasser",
    klassen: ["Barde", "Kleriker", "Druide"],
    ritual: false,
    beschreibung: [
      "Du berührst eine Kreatur und regst ihre natürliche Heilungsfähigkeit an. Zu Beginn jedes Zuges des Ziels für die Wirkungsdauer erhält es 10 Trefferpunkte zurück.",
      "Falls das Ziel abgetrennte Körperteile besitzt – Finger, Beine, Schwänze usw. – können diese, wenn sie innerhalb von 10 Minuten nach der Abtrennung an den Stumpf gehalten werden, wieder angebracht werden. Falls eine abgetrennte Gliedmaße nicht innerhalb von 10 Minuten wieder angebracht wird, lässt der Zauber innerhalb von 1W6+1 Tagen eine neue Gliedmaße nachwachsen."
    ]
  },
  {
    name: "Reittier finden",
    schule: "Beschwörung",
    grad: 2,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Du beschwörst einen Geist, der die Form eines ungewöhnlich intelligenten, starken und loyalen Reittieres annimmt und eine dauerhafte Verbindung mit dir eingeht. Das Reittier erscheint in einem freien Raum in Reichweite und nimmt eine Form an, die du wählst: ein Streitross, ein Pony, ein Kamel, ein Elch oder ein Mastiff. Der SL kann andere für Reittiere geeignete Tiere erlauben. Das Reittier hat die Statistiken der gewählten Form, ist aber ein himmlisches, feenhaftes oder infernalisches Wesen (nach deiner Wahl) statt seines normalen Typs. Wenn das Reittier einen Intelligenzwert von 5 oder weniger hat, wird sein Intelligenzwert zu 6, und es erhält die Fähigkeit, eine von dir gesprochene Sprache zu verstehen.",
      "Das Reittier dient dir als Reittier im Kampf und außerhalb. Solange du auf ihm reitest, kannst du jeden Zauber, den du wirkst und der nur dich betrifft, auch auf das Reittier anwenden.",
      "Wenn dein Reittier auf 0 Trefferpunkte fällt, verschwindet es ohne physische Überreste. Du kannst es auch jederzeit als Aktion entlassen. In beiden Fällen erscheint dasselbe Reittier beim erneuten Wirken des Zaubers mit maximalen Trefferpunkten. Solange dein Reittier in einem Umkreis von 1,5 km ist, könnt ihr telepathisch miteinander kommunizieren.",
      "Du kannst jeweils nur ein durch diesen Zauber gebundenes Reittier haben. Als Aktion kannst du es jederzeit dauerhaft entlassen."
    ]
  },
  {
    name: "Resistenz",
    schule: "Bannmagie",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Miniaturumhang",
    klassen: ["Kleriker", "Druide", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du berührst eine willige Kreatur. Einmal vor dem Ende des Zaubers kann das Ziel einen W4 würfeln und das Ergebnis zu einem Rettungswurf seiner Wahl addieren. Die Kreatur kann warten, bis sie das Ergebnis des ursprünglichen Würfelwurfs kennt, bevor sie sich entscheidet, diesen Bonus zu addieren, verliert aber den Bonus, wenn sie ihn nicht einsetzt, bevor der Zauber endet."
    ]
  },
  {
    name: "Rieseninsekt",
    schule: "Verwandlung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Du verwandelst bis zu zehn Tausendfüßler, drei Spinnen, fünf Wespen oder einen Skorpion in Reichweite für die Wirkungsdauer in ihre riesige Form. Ein Tausendfüßler wird zu einem Riesentausendfüßler, eine Spinne zu einer Riesenspinne, eine Wespe zu einer Riesenwespe und ein Skorpion zu einem Riesenskorpion.",
      "Die verwandelten Kreaturen stehen unter deiner Kontrolle und führen deine verbalen Befehle aus (keine Aktion erforderlich). Am Ende der Wirkungsdauer kehren sie in ihre normale Form zurück, es sei denn, sie sind gestorben."
    ]
  },
  {
    name: "Rindenhaut",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "eine Handvoll Eichenrinde",
    klassen: ["Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du berührst eine willige Kreatur. Bis der Zauber endet, erhält die Haut des Ziels ein raues, rindenartiges Aussehen, und der RK des Ziels kann nicht weniger als 16 sein, unabhängig davon, welche Rüstung es trägt. Wenn der RK des Ziels bereits 16 oder höher ist, hat der Zauber keinen Effekt."
    ]
  },
  {
    name: "Rückruf",
    schule: "Beschwörung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "1,50 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Du und bis zu fünf willige Kreaturen, die du sehen kannst und sich innerhalb von 1,50 m von dir befinden, werdet sofort in ein Heiligtum teleportiert, das du zuvor bestimmt hast. Du kannst diesen Zauber in einem Tempel oder einem heiligen Ort wirken, der einer Gottheit geweiht ist, der du dienst, um diesen Ort als dein Heiligtum zu bestimmen. Wirkst du den Zauber erneut, um ein neues Heiligtum zu bestimmen, ersetzt der neue Ort den alten.",
      "Das Heiligtum muss sich auf derselben Existenzebene wie du befinden, wenn du diesen Zauber wirkst."
    ]
  },
  {
    name: "Rüstung von Agathys",
    schule: "Bannmagie",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V", "G", "M"],
    material: "ein Becher Wasser",
    klassen: ["Hexenmeister"],
    ritual: false,
    beschreibung: [
      "Eine schützende magische Kraft umhüllt dich und erscheint als spektrales Frost. Du erhältst 5 temporäre Trefferpunkte für die Wirkungsdauer. Solange du diese temporären Trefferpunkte hast und eine Kreatur dich mit einem Nahkampfangriff trifft, erleidet die Kreatur 5 Kälteschaden."
    ],
    aufhoeherenGraden: "Wenn du diesen Zauber mit einem Zauberplatz des 2. Grades oder höher wirkst, erhöhen sich sowohl die temporären Trefferpunkte als auch der Kälteschaden um 5 für jeden Grad über dem 1."
  },
  {
    name: "Sagenkunde",
    schule: "Erkenntnismagie",
    grad: 5,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V", "G", "M"],
    material: "Weihrauch im Wert von mindestens 250 GM, der beim Wirken des Zaubers verbraucht wird, und vier Elfenbeinstücke jeweils im Wert von mindestens 50 GM",
    klassen: ["Barde", "Kleriker", "Magier"],
    ritual: false,
    beschreibung: [
      "Benenne oder beschreibe eine Person, einen Ort oder einen Gegenstand. Der Zauber erfüllt deinen Verstand mit einer kurzen Zusammenfassung des bedeutenden Wissens über die ausgewählte Sache. Die Kunde könnte aus aktuellen Geschichten, vergessenen Erzählungen oder sogar geheimem Wissen bestehen, das niemals allgemein bekannt war. Wenn die Sache, die du ausgewählt hast, nicht von legendärer Bedeutung ist, erhältst du keine Informationen. Je mehr Informationen du bereits über die Sache zur Verfügung hast, umso präziser und detaillierter ist das Wissen, das du erhältst.",
      "Die Informationen, die dir zuteil werden, sind korrekt, könnten aber in bildhafte Sprache gehüllt sein. Wenn du beispielsweise eine geheimnisvolle magische Axt vor dir hast, könnte der Zauber dir Folgendes vermitteln: „Wehe dem Übeltäter, der die Axt berührt, denn selbst der Schaft zerschneidet die Hand der Bösen. Nur ein wahres Kind des Steins, Jünger und Schützling von Moradin, vermag die wahre Macht der Axt zu erwecken, und nur mit dem heiligen Wort Rudnogg auf den Lippen.”"
    ]
  },
  {
    name: "Sanfte Ruhe",
    schule: "Nekromantie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "10 Tage",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Salz und eine Kupfermünze auf jedem Auge der Leiche, die für die Wirkungsdauer dort verbleiben müssen",
    klassen: ["Kleriker", "Magier"],
    ritual: true,
    beschreibung: [
      "Du berührst einen Leichnam oder andere sterbliche Überreste. Für die Wirkungsdauer ist das Ziel vor Verfall geschützt und kann nicht untot werden. Dieser Zauber verlängert auch die Zeit, in der eine Wiederbelebung des Ziels möglich ist, da die Tage unter dem Einfluss des Effekts nicht als verstrichene Zeit gelten in Bezug auf Zauber wie Tote erwecken."
    ]
  },
  {
    name: "Säurespritzer",
    schule: "Beschwörung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du schleuderst eine Blase aus Säure. Wähle eine sichtbare Kreatur in Reichweite oder zwei sichtbare Kreaturen in Reichweite, die nicht weiter als 1,50 m voneinander entfernt sind. Ein Ziel muss einen erfolgreichen Geschicklichkeitsrettungswurf ablegen, sonst erleidet es 1W6 Säureschaden.",
      "Der Schaden dieses Zaubers steigt jeweils um 1W6 bei Erreichen der 5. (2W6), 11. (3W6) und 17. Stufe (4W6)."
    ]
  },
  {
    name: "Schauriger Strahl",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Hexenmeister"],
    ritual: false,
    beschreibung: [
      "Ein Strahl aus knisternder Energie schießt auf eine Kreatur in Reichweite zu. Führe einen Fernkampf-Zauberangriff gegen das Ziel aus. Bei einem Treffer erleidet es 1W10 Energieschaden.",
      "Der Zauber erschafft mehr als einen Strahl, wenn du höhere Stufen erreichst: zwei Strahlen auf der 5. Stufe, drei Strahlen auf der 11. Stufe und vier Strahlen auf der 17. Stufe. Du kannst die Strahlen auf dasselbe oder unterschiedliche Ziele lenken. Mache einen eigenständigen Angriffswurf für jeden Strahl."
    ]
  },
  {
    name: "Scheingelände",
    schule: "Illusion",
    grad: 4,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "90 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stein, ein Zweig und ein Stück einer grünen Pflanze",
    klassen: ["Barde", "Druide", "Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du lässt das natürliche Gelände innerhalb eines Würfels mit 45 m Kantenlänge wie eine andere Art von natürlichem Gelände aussehen, klingen und riechen. Offene Felder oder eine Straße können wirken wie ein Sumpf, ein Hügel, eine Erdspalte oder eine andere Art von schwierigem oder unpassierbarem Gelände. Ein Tümpel kann erscheinen wie eine grüne Wiese, ein Abhang wie ein sanftes Gefälle oder eine mit Felsen übersäte Schlucht wie eine breite, flache Straße.",
      "Bauwerke, Ausrüstung und Kreaturen im Bereich des Zaubers werden dabei nicht verändert. Ebenso bleiben die tastbaren Eigenschaften des Geländes gleich, sodass Kreaturen, die in den Bereich eindringen, die Illusion schnell durchschauen werden. Ist der Unterschied bei einer Berührung nicht offensichtlich, kann eine Kreatur die Illusion genau untersuchen. Legt sie einen erfolgreichen Intelligenzwurf (Nachforschungen) gegen den SG zum Widerstehen deiner Zauber ab, durchschaut sie die Täuschung. Eine Kreatur, die erkennt, dass es sich um eine Illusion handelt, sieht diese als vages Bild, das über dem eigentlichen Gelände liegt."
    ]
  },
  {
    name: "Schild",
    schule: "Bannmagie",
    grad: 1,
    zeitaufwand: "1 Reaktion, die du ausführst, wenn du von einem Angriff getroffen oder Ziel des Zaubers Magisches Geschoss wirst",
    wirkungsdauer: "1 Runde",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Eine unsichtbare Barriere aus magischer Energie erscheint und schützt dich. Bis zum Beginn deines nächsten Zuges hast du einen Bonus von +5 auf deine RK, auch gegen den auslösenden Angriff, und erleidest keinen Schaden durch den Zauber Magisches Geschoss."
    ]
  },
  {
    name: "Schild des Glaubens",
    schule: "Bannmagie",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein kleines Pergament mit heiligem Text",
    klassen: ["Kleriker", "Paladin"],
    ritual: false,
    beschreibung: [
      "Ein schimmerndes Feld erscheint und umhüllt eine Kreatur deiner Wahl in Reichweite. Es gewährt ihr für die Wirkungsdauer einen Bonus von +2 auf die RK."
    ]
  },
  {
    name: "Schlaf",
    schule: "Verzauberung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Sand, Rosenblüten oder eine Grille",
    klassen: ["Barde", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber versetzt Kreaturen in magischen Schlaf. Würfle mit 5W8; das Ergebnis ist die Gesamtzahl von Trefferpunkten an Kreaturen, die dieser Zauber beeinflussen kann. Kreaturen innerhalb von 6 m um einen Punkt deiner Wahl in Reichweite werden betroffen, in aufsteigender Reihenfolge nach ihren aktuellen Trefferpunkten (bewusstlose Kreaturen werden ignoriert).",
      "Beginnend mit der Kreatur mit den niedrigsten aktuellen Trefferpunkten werden alle Kreaturen, die von diesem Zauber betroffen werden, für die Wirkungsdauer bewusstlos. Die Bewusstlosigkeit endet auch, wenn der Schlafende Schaden erleidet oder eine andere Kreatur ihn als Aktion schüttelt oder ohrfeigt, um ihn zu wecken. Ziehe die Trefferpunkte der Kreatur von der erwürfelten Gesamtsumme ab, ehe du mit der nächsten Kreatur mit den niedrigsten Trefferpunkten fortfährst. Die Trefferpunkte einer Kreatur müssen gleich oder niedriger sein als die verbleibende Gesamtsumme, damit sie betroffen wird.",
      "Untote und Kreaturen, die nicht bezaubert werden können, sind von diesem Zauber nicht betroffen."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, würfelst du zusätzlich mit 2W8 für jeden Grad über den 1. hinaus."
  },
  {
    name: "Schlingranke",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du beschwörst eine Ranke, die aus dem Boden in einem nicht besetzten Bereich deiner Wahl wächst, der sich in Reichweite befindet und den du sehen kannst. Wenn du diesen Zauber wirkst, kannst du die Ranke eine Kreatur innerhalb von 9 m um sie angreifen lassen. Du musst die Kreatur sehen können. Dem Ziel muss ein Geschicklichkeitsrettungswurf gelingen, um nicht 6 m in Richtung der Ranke gezogen zu werden.",
      "Bis der Zauber endet, kannst du in jedem deiner Züge als Bonusaktion die Ranke dieselbe Kreatur oder eine andere angreifen lassen."
    ]
  },
  {
    name: "Schmieren",
    schule: "Beschwörung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Schweineschwarte oder Butter",
    klassen: ["Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Schmieriges Fett bedeckt den Boden in einem quadratischen Bereich mit 3 m Seitenlänge, zentriert um einen Punkt in Reichweite, und macht diesen für die Wirkungsdauer zu schwierigem Gelände.",
      "Wenn die Schmiere erscheint, muss jeder Kreatur, die in dem Bereich steht, ein Geschicklichkeitsrettungswurf gelingen, um nicht zu Boden zu fallen und den Zustand liegend zu erhalten. Eine Kreatur, die den Bereich betritt oder ihren Zug dort beendet, muss ebenfalls einen erfolgreichen Geschicklichkeitsrettungswurf ablegen oder fällt zu Boden und gilt als liegend."
    ]
  },
  {
    name: "Schneesturm",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "45 m",
    komponenten: ["V", "G", "M"],
    material: "einige Tropfen Wasser und eine Prise Staub",
    klassen: ["Druide", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Bis der Zauber endet, fallen in einem Zylinder mit 6 m Radius und 12 m Höhe eisiger Regen und Schnee vom Himmel. Der Zylinder ist um einen Punkt deiner Wahl in Reichweite zentriert. Der Bereich ist komplett verschleiert und offene Flammen erlöschen in ihm. Der Boden wird von rutschigem Schlamm bedeckt, sodass er zu schwierigem Gelände wird. Wenn eine Kreatur den Bereich das erste Mal in einem Zug betritt oder ihren Zug dort beginnt, muss sie einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg stürzt sie und erhält den Zustand liegend.",
      "Wenn eine Kreatur ihren Zug im Bereich des Sturms beginnt und sich auf einen Zauber konzentriert, muss sie einen erfolgreichen Konstitutionsrettungswurf gegen den SG zum Widerstehen deiner Zauber ablegen, um nicht die Konzentration zu verlieren."
    ]
  },
  {
    name: "Schneller Köcher",
    schule: "Verwandlung",
    grad: 5,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Köcher mit mindestens einem Geschoss",
    klassen: ["Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du erfüllst deinen Köcher mit Magie, sodass er einen endlosen Vorrat nicht-magischer Geschosse erschafft, die in deine Hand zu springen scheinen, wenn du danach greifst.",
      "Für die Wirkungsdauer kannst du in jedem deiner Züge eine Bonusaktion verwenden, um zwei Angriffe mit einer Waffe auszuführen, die Geschosse aus dem Köcher verwendet. Bei jedem solchen Fernkampfangriff ersetzt dein Köcher magisch das Geschoss, das du verbraucht hast, mit einem identischen nicht-magischen Geschoss. Jegliche Geschosse, die durch diesen Zauber erschaffen werden, zerfallen nach Beenden des Spruchs. Ist der Köcher nicht mehr in deinem Besitz, endet der Zauber."
    ]
  },
  {
    name: "Schockgriff",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Blitze springen aus deinen Händen und versetzen einer Kreatur, die du berührst, einen Schock. Führe einen Nahkampf-Zauberangriff gegen das Ziel durch. Du bist im Vorteil bei diesem Angriffswurf, wenn das Ziel eine Rüstung trägt, die aus Metall besteht. Bei einem Treffer erleidet die Kreatur 1W8 Blitzschaden und kann bis zum Beginn deines nächsten Zuges keine Reaktionen durchführen.",
      "Der Schaden dieses Zaubers steigt jeweils um 1W8 bei Erreichen der 5. (2W8), 11. (3W8) und 17. Stufe (4W8)."
    ]
  },
  {
    name: "Schusshagel beschwören",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "selbst (Kegel von 18 m)",
    komponenten: ["V", "G", "M"],
    material: "ein Geschoss oder eine Wurfwaffe",
    klassen: ["Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du wirfst eine nicht-magische Waffe oder feuerst ein nicht-magisches Geschoss ab und erschaffst auf magische Weise eine Vielzahl identischer Waffen, die in einem Kegel nach vorn schießen und dann verschwinden. Alle Kreaturen innerhalb eines Kegels von 18 m müssen einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 3W8 Schaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. Der Schadenstyp entspricht dem des als Komponente verwendeten Gegenstands."
    ]
  },
  {
    name: "Schutz vor Energie",
    schule: "Bannmagie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Druide", "Waldläufer", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Für die Wirkungsdauer besitzt die bereitwillige Kreatur, die du berührst, eine Resistenz gegen eine der folgenden Schadensarten deiner Wahl: Blitz, Feuer, Kälte, Säure oder Schall."
    ]
  },
  {
    name: "Schutz vor Gift",
    schule: "Bannmagie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Druide", "Magieschmied", "Paladin", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du berührst eine Kreatur. Wenn sie vergiftet ist, neutralisierst du das Gift. Ist das Ziel von mehr als einem Gift betroffen, neutralisierst du eins, von dessen Präsenz du weißt, oder ein zufälliges.",
      "Für die Wirkungsdauer ist das Ziel im Vorteil bei Rettungswürfen gegen den Zustand vergiftet und besitzt eine Resistenz gegen Giftschaden."
    ]
  },
  {
    name: "Schutz vor Gut und Böse",
    schule: "Bannmagie",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Weihwasser oder Silber- und Eisenpulver, das beim Wirken des Zaubers verbraucht wird",
    klassen: ["Kleriker", "Magier", "Paladin", "Hexenmeister"],
    ritual: false,
    beschreibung: [
      "Bis der Zauber endet, wird eine bereitwillige Kreatur, die du berührst, vor bestimmten Arten von Kreaturen geschützt: Aberrationen, celestische Wesen, Elementare, Feenwesen, Unholde und Untote.",
      "Der Schutz bietet mehrere Vorteile. Kreaturen der genannten Arten sind im Nachteil bei Angriffswürfen gegen das Ziel. Außerdem kann dieses nicht von ihnen bezaubert, verängstigt oder durch sie besessen werden. Wenn das Ziel bereits von einer solchen Kreatur bezaubert, verängstigt oder durch sie besessen ist, ist es im Vorteil bei jedem neuen Rettungswurf gegen den relevanten Effekt."
    ]
  },
  {
    name: "Schützendes Band",
    schule: "Bannmagie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Paar Platinringe im Wert von jeweils 50 GM, die du und das Ziel für die Wirkungsdauer tragen müssen",
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber schützt eine bereitwillige Kreatur, die du berührst, und erschafft für die Wirkungsdauer eine magische Verbindung zwischen dir und dem Ziel. Solange sich das Ziel innerhalb von 18 m befindet, erhält es einen Bonus von +1 auf die RK und Rettungswürfe sowie eine Resistenz gegen alle Schadensarten. Allerdings erleidest du jedes Mal, wenn dem Ziel Schaden zugefügt wird, die gleiche Menge an Schaden. Der Zauber endet, wenn du auf 0 Trefferpunkte reduziert wirst oder du und das Ziel weiter als 18 m voneinander entfernt seid. Er endet auch, wenn der Spruch erneut auf einen der beiden Beteiligten gewirkt wird. Du kannst den Zauber als Aktion aufheben."
    ]
  },
  {
    name: "Schutzgeister",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "selbst (Radius von 4,50 m)",
    komponenten: ["V", "G", "M"],
    material: "ein heiliges Symbol",
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Du rufst Geister herbei, die dich beschützen und für die Wirkungsdauer innerhalb von 4,50 m um dich herumhuschen. Wenn du guter oder neutraler Gesinnung bist, erscheint ihre Gestalt engelsgleich oder feenartig (deine Wahl). Wenn du böser Gesinnung bist, wirken sie wie geisterhafte Unholde.",
      "Beim Wirken des Zaubers kannst du eine beliebige Anzahl von Kreaturen wählen, die du sehen kannst. Diese werden nicht von dem Zauber betroffen. Die Bewegungsrate aller anderen Kreaturen ist im Bereich des Zaubers halbiert. Betritt eine solche Kreatur den Bereich das erste Mal in einem Zug oder beginnt ihn dort, muss sie einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg erleidet sie 3W8 gleißenden Schaden (wenn du guter oder neutraler Gesinnung bist) oder 3W8 nekrotischen Schaden (wenn du böser Gesinnung bist). Gelingt der Rettungswurf, erleidet die Kreatur den halben Schaden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 3. hinaus um 1W8."
  },
  {
    name: "Schutzhülle gegen Lebendes",
    schule: "Bannmagie",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "selbst (Radius von 3 m)",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Eine schimmernde Barriere umgibt dich für die Wirkungsdauer in einem Radius von 3 m. Sie bewegt sich mit dir als Mittelpunkt fort und hält Kreaturen mit Ausnahme von Untoten und Konstrukten auf Abstand.",
      "Die Barriere erlaubt es betroffenen Kreaturen nicht, durch sie zu schreiten oder zu greifen. Sie verhindert jedoch weder, dass Zauber durch sie gewirkt werden, noch hält sie Fernkampfangriffe oder Waffen mit Reichweite auf.",
      "Bewegst du dich auf eine Weise, die dafür sorgt, dass betroffene Kreaturen zwangsweise die Barriere passieren, endet der Zauber."
    ]
  },
  {
    name: "Schutzkreis",
    schule: "Bannmagie",
    grad: 3,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V", "G", "M"],
    material: "Weihwasser sowie Silber- und Eisenpulver im Wert von mindestens 100 GM, das beim Wirken des Zaubers verbraucht wird",
    klassen: ["Kleriker", "Paladin", "Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du erschaffst einen Zylinder aus magischer Energie mit 3 m Radius und 6 m Höhe, zentriert um einen Punkt auf dem Boden, der sich in Reichweite befindet und den du sehen kannst. Leuchtende Runen erscheinen, wo der Zylinder den Boden oder andere Oberflächen berührt.",
      "Wähle eine oder mehrere der folgenden Arten von Kreaturen: Elementare, Feenwesen, celestische Wesen, Unholde oder Untote. Der Kreis beeinflusst Kreaturen des gewählten Typs auf die folgende Weise:",
      "• Die Kreatur kann den Bereich des Zaubers nicht freiwillig auf nicht-magische Weise betreten. Versucht die Kreatur, mittels Teleportation oder Ebenenreisen in den Zylinder einzudringen, muss ihr zunächst ein Charismarettungswurf gelingen.",
      "• Die Kreatur ist im Nachteil bei Angriffswürfen gegen Ziele innerhalb des Zylinders.",
      "• Ziele innerhalb des Zylinders können von der Kreatur nicht bezaubert, verängstigt oder durch sie besessen werden.",
      "Beim Wirken dieses Zaubers kannst du festlegen, dass die Magie des Kreises umgekehrt funktioniert, sodass Kreaturen des ausgewählten Typs den Zylinder nicht verlassen können und Ziele außerhalb geschützt sind."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, verlängert sich die Wirkungsdauer für jeden Grad über den 3. hinaus um 1 Stunde."
  },
  {
    name: "Schwache Elementare beschwören",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide", "Magier"],
    ritual: false,
    beschreibung: [
      "Du beschwörst Elementare, die in nicht besetzten Bereichen in Reichweite erscheinen, die du sehen kannst. Wähle aus den folgenden Möglichkeiten, was erscheint:",
      "• ein Elementar mit Herausforderungsgrad 2 oder weniger",
      "• zwei Elementare mit Herausforderungsgrad 1 oder weniger",
      "• vier Elementare mit Herausforderungsgrad 1/2 oder weniger",
      "• acht Elementare mit Herausforderungsgrad 1/4 oder weniger",
      "Ein Elementar, der mit diesem Zauber beschworen wird, verschwindet, wenn er auf 0 Trefferpunkte reduziert wird oder der Zauber endet.",
      "Für die Wirkungsdauer sind die beschworenen Kreaturen mit dir und deinen Gefährten verbündet. Würfle die Initiative für sie als Gruppe, die eigene Züge ausführt. Sie folgen allen verbalen Befehlen, die du ihnen erteilst (dazu brauchst du keine Aktion aufwenden). Ohne Befehle verteidigen sie sich gegen feindliche Kreaturen, führen aber ansonsten keine Aktionen aus. Der SL hat die Spielwerte der Elementare zur Verfügung."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz eines höheren Grades wirkst, wählst du eine der oben beschriebenen Beschwörungsoptionen und mehr Kreaturen erscheinen: doppelt so viele bei einem Zauberplatz des 6. Grades und dreimal so viele bei einem des 8. Grades."
  },
  {
    name: "Schwache Genesung",
    schule: "Bannmagie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Kleriker", "Druide", "Magieschmied", "Paladin", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du berührst eine Kreatur und kannst entweder eine Krankheit kurieren, die sie plagt, oder einen Zustand entfernen, unter dem sie leidet. Dieser Zustand kann einer der folgenden sein: blind, gelähmt, taub oder vergiftet."
    ]
  },
  {
    name: "Schwächestrahl",
    schule: "Nekromantie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Ein schwarzer Strahl aus entkräftender Energie schießt aus deinem Finger auf eine Kreatur in Reichweite zu. Führe einen Fernkampf-Zauberangriff gegen das Ziel aus. Bei einem Treffer verursacht die Kreatur mit Waffenangriffen, die Stärke verwenden, für die Wirkungsdauer nur den halben Schaden.",
      "Am Ende eines jeden seiner Züge darf das Ziel einen Konstitutionsrettungswurf ablegen, um den Effekt abzuschütteln. Bei einem Erfolg endet der Zauber."
    ]
  },
  {
    name: "Schwachsinn",
    schule: "Verzauberung",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "45 m",
    komponenten: ["V", "G", "M"],
    material: "eine Handvoll Lehm, Kristall, Glas oder Kugeln aus Mineralien",
    klassen: ["Barde", "Druide", "Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du attackierst den Verstand einer Kreatur, die sich in Reichweite befindet und die du sehen kannst, und versuchst ihren Intellekt und ihre Persönlichkeit zu brechen. Das Ziel erleidet 4W6 psychischen Schaden und muss einen Intelligenzrettungswurf ablegen. Bei einem Misserfolg werden sowohl der Intelligenz- als auch der Charismawert der Kreatur auf 1 gesenkt. Außerdem kann sie keine Zauber wirken, keine magischen Gegenstände aktivieren, keine Sprachen verstehen und nicht auf verständliche Weise kommunizieren. Die Kreatur ist allerdings in der Lage, ihre Freunde zu erkennen, ihnen zu folgen und sie sogar zu beschützen.",
      "Am Ende von jeweils 30 Tagen darf die betroffene Kreatur den Rettungswurf gegen den Zauber wiederholen. Bei einem Erfolg endet der Zauber.",
      "Der Effekt kann auch durch die Zauber Vollständige Genesung, Heilung oder Wunsch aufgehoben werden."
    ]
  },
  {
    name: "Schweben",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "entweder eine kleine Lederschlaufe oder ein Stück Golddraht, das zu einem Becher gebogen ist, mit einem langen Schaft an einem Ende",
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Eine Kreatur oder ein loser Gegenstand deiner Wahl steigt senkrecht 6 m empor und verbleibt für die Wirkungsdauer schwebend in der Luft. Das Ziel muss sich in Reichweite befinden und du musst es sehen können. Der Zauber kann ein Ziel levitieren, das bis zu 500 Pfund wiegt. Legt eine unwillige Kreatur einen erfolgreichen Konstitutionsrettungswurf ab, ist sie nicht betroffen.",
      "Das Ziel kann sich nur bewegen, indem es sich von festen Gegenständen oder Oberflächen in Reichweite abstößt oder an diesen entlangzieht. Auf diese Weise kann es sich etwa an einer Wand oder Decke bewegen, als würde es klettern. In deinem Zug darfst du die Höhe des Ziels um bis zu 6 m nach oben oder unten verändern. Bist du selbst das Ziel, ist es dir möglich, dich als Teil deiner Bewegung in beide Richtungen zu bewegen. Ansonsten kannst du deine Aktion verwenden, um das Ziel zu bewegen, das innerhalb der Reichweite des Zaubers bleiben muss.",
      "Wenn der Zauber endet, schwebt das Ziel sanft auf den Boden, sollte es noch immer in der Luft sein."
    ]
  },
  {
    name: "Schwerkraft umkehren",
    schule: "Verwandlung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "30 m",
    komponenten: ["V", "G", "M"],
    material: "ein Magnetstein und Eisenspäne",
    klassen: ["Druide", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber kehrt die Schwerkraft im Bereich eines Zylinders mit 15 m Radius und 30 m Höhe um. Wirkst du den Zauber, fallen alle Kreaturen und Gegenstände, die nicht auf irgendeine Weise mit dem Boden verbunden sind, nach oben, bis sie die Oberseite des Zylinders erreichen. Legt eine Kreatur einen erfolgreichen Geschicklichkeitsrettungswurf ab, gelingt es ihr, sich an einem verankerten Gegenstand festzuhalten, und kann so den Sturz verhindern.",
      "Wenn ein fester Gegenstand (wie eine Zimmerdecke) bei dem umgekehrten Sturz im Weg ist, treffen fallende Gegenstände und Kreaturen diesen wie bei einem normalen Sturz. Erreicht ein Gegenstand oder eine Kreatur die Oberseite des Zylinders, ohne von etwas aufgehalten zu werden, bleibt das Ziel dort und hängt für die Wirkungsdauer leicht schwankend in der Luft.",
      "Am Ende der Wirkungsdauer fallen betroffene Gegenstände und Kreaturen wieder nach unten."
    ]
  },
  {
    name: "Segnen",
    schule: "Verzauberung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "einige Tropfen Weihwasser",
    klassen: ["Kleriker", "Paladin"],
    ritual: false,
    beschreibung: [
      "Du segnest bis zu drei Kreaturen deiner Wahl in Reichweite. Immer wenn ein Ziel während der Wirkungsdauer einen Angriffs- oder Rettungswurf ausführt, kann es mit einem W4 würfeln und das Ergebnis auf den Angriffs- oder Rettungswurf addieren."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 1. hinaus eine zusätzliche Kreatur als Ziel wählen."
  },
  {
    name: "Seiltrick",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "zerstoßener Maisextrakt und eine verdrehte Schlaufe aus Pergament",
    klassen: ["Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du berührst ein Stück Seil, das bis zu 18 m lang sein darf. Ein Ende des Seils steigt in die Luft, bis dieses in seiner ganzen Länge senkrecht zum Boden hängt. Am oberen Ende des Seils öffnet sich ein unsichtbares Portal in einen extradimensionalen Raum, das bis zum Ende des Zaubers bestehen bleibt. Der extradimensionale Raum kann erreicht werden, indem man das Seil emporklettert. Er kann bis zu acht mittelgroße oder kleinere Kreaturen aufnehmen. Es ist möglich, das Seil in den Raum zu ziehen, sodass es von außen nicht mehr zu sehen ist.",
      "Angriffe und Zauber vermögen das Portal nicht zu durchdringen, weder von außen noch von innen. Kreaturen, die sich im Raum befinden, können nach draußen sehen wie durch ein Fenster, das 90 cm × 1,50 m groß ist und um das Seil zentriert ist. Alles in dem extradimensionalen Raum fällt heraus, wenn der Zauber endet."
    ]
  },
  {
    name: "Selbstverkleidung",
    schule: "Illusion",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Mit diesem Zauber veränderst du dein Aussehen, inklusive deiner Kleidung, Rüstung, Waffen und anderen Besitztümer an deiner Person. Er bleibt für die Wirkungsdauer bestehen, wenn du keine Aktion verwendest, um ihn vorzeitig aufzuheben.",
      "Du kannst dich bis zu 30 cm kleiner oder größer erscheinen lassen sowie dick oder dünn beziehungsweise irgendetwas dazwischen. Deinen grundlegenden Körpertyp kannst du nicht ändern, du musst also eine Gestalt annehmen, welche die gleiche Anordnung von Gliedmaßen besitzt. Ansonsten bestimmst du, wie die Illusion aussieht.",
      "Die Veränderungen durch diesen Zauber halten einer körperlichen Untersuchung nicht stand. Nutzt du den Spruch beispielsweise, um deiner Kleidung einen Hut beizufügen, durchdringen Gegenstände diesen einfach. Jeder, der ihn berührt, würde nichts fühlen oder nur deinen Kopf und deine Haare spüren. Lässt du dich dünner erscheinen, als du bist, würde die Hand von jemandem, der dich berühren will, gegen dich stoßen, obwohl sie scheinbar noch in der Luft schwebt.",
      "Eine Kreatur kann ihre Aktion verwenden, um dich zu untersuchen. Sie legt einen Wurf auf Intelligenz (Nachforschungen) gegen den SG zum Widerstehen deiner Zauber ab. Bei Erfolg bemerkt sie, dass du auf irgendeine Art verkleidet bist."
    ]
  },
  {
    name: "Sengender Strahl",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst drei Strahlen aus Feuer und schleuderst sie auf ein oder mehrere Ziele in Reichweite. Führe einen Fernkampf-Zauberangriff für jeden Strahl aus. Bei einem Treffer erleidet das Ziel 2W6 Feuerschaden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, erschaffst du für jeden Grad über den 2. hinaus einen zusätzlichen Strahl."
  },
  {
    name: "Sengendes Niederstrecken",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Das nächste Mal, wenn du innerhalb der Wirkungsdauer des Zaubers eine Kreatur mit einer Nahkampfwaffe triffst, blitzt deine Waffe mit weißglühender Intensität auf. Der Angriff fügt dem Ziel zusätzlich 1W6 Feuerschaden zu und lässt es in Flammen aufgehen. Zu Beginn eines jeden seiner Züge, bis der Zauber endet, muss das Ziel einen Konstitutionsrettungswurf ablegen. Misslingt er, erleidet es 1W6 Feuerschaden. Bei einem erfolgreichen Rettungswurf endet der Zauber.",
      "Wenn das Ziel oder eine Kreatur im Umkreis von 1,50 m von ihm eine Aktion verwendet, um die Flammen zu ersticken, oder ein anderer Effekt das Feuer löscht (beispielsweise wenn die betroffene Kreatur unter Wasser getaucht wird oder es regnet), endet der Zauber."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der anfängliche Bonusschaden beim Angriff für jeden Grad über den 1. hinaus um 1W6."
  },
  {
    name: "Shillelagh",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Mistelzweig, vierblättriges Kleeblatt und eine Keule oder ein Kampfstab",
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Das Holz einer Keule oder eines Kampfstabs, den du in der Hand hältst, wird von der Macht der Natur erfüllt. Für die Wirkungsdauer kannst du dein Attribut zum Zauberwirken anstelle von Stärke verwenden, wenn du Angriffs- und Schadenswürfe für Nahkampfangriffe mit dieser Waffe durchführst. Außerdem wird der Schadenswürfel der Waffe zu einem W8 und die Waffe magisch, falls sie es nicht bereits ist. Der Zauber endet, wenn du ihn erneut wirkst oder die Waffe loslässt."
    ]
  },
  {
    name: "Simulakrum",
    schule: "Illusion",
    grad: 7,
    zeitaufwand: "12 Stunden",
    wirkungsdauer: "bis der Zauber gebannt wird",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Schnee oder Eis in einer ausreichenden Menge, um ein lebensgroßes Duplikat des Ziels anzufertigen; einige Haare, Fingernägel oder andere Stücke des Körpers des Ziels, die in dem Duplikat aus Schnee oder Eis platziert werden, sowie Rubinstaub im Wert von mindestens 1.500 GM, der über das Duplikat gestreut und beim Wirken des Zaubers verbraucht wird",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Du erschaffst ein aus Eis oder Schnee geformtes illusionäres Duplikat einer humanoiden Kreatur oder eines Tieres. Während der gesamten Zeit, in der du den Zauber wirkst, muss sich das Duplikat in Reichweite befinden. Dieses gilt als Kreatur und ist zum Teil real. Es kann Aktionen durchführen und wie eine normale Kreatur beeinflusst werden. Das Duplikat erscheint identisch zum Original, besitzt aber nur die Hälfte der maximalen Trefferpunkte der eigentlichen Kreatur und wird ohne Ausrüstung geformt. Ansonsten verwendet die Illusion alle Spielwerte der Kreatur, die sie nachahmt, außer es ist ein Konstrukt.",
      "Das Simulakrum ist dir und allen Kreaturen, die du bestimmst, freundlich gesonnen. Es befolgt deine verbalen Befehle, bewegt sich und handelt entsprechend deiner Wünsche und agiert im Kampf in deinem Zug. Das Duplikat kann sich nicht weiterentwickeln und mächtiger werden, erhält also niemals einen Stufenaufstieg oder lernt neue Fähigkeiten. Außerdem kann es verbrauchte Zauberplätze nicht auffrischen.",
      "Wird das Simulakrum beschädigt, kannst du es in einem alchemistischen Labor reparieren, wobei du seltene Kräuter und Mineralien verbrauchst, die für jeden wiederhergestellten Trefferpunkt 100 GM kosten. Das Simulakrum bleibt bestehen, bis es auf 0 Trefferpunkte reduziert wird. Dann verwandelt es sich zurück zu Schnee oder Eis und schmilzt sofort.",
      "Wenn du den Zauber erneut wirkst, werden alle aktiven Duplikate sofort zerstört, die du mit diesem erschaffen hast."
    ]
  },
  {
    name: "Sonnenfeuer",
    schule: "Hervorrufung",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "45 m",
    komponenten: ["V", "G", "M"],
    material: "Feuer und ein Stück Sonnenstein",
    klassen: ["Druide", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Gleißendes Sonnenlicht erfüllt einen Radius von 18 m, der um einen Punkt deiner Wahl in Reichweite zentriert ist. Jede Kreatur im Licht muss einen Konstitutionsrettungswurf ablegen. Misslingt er, erleidet eine Kreatur 12W6 gleißenden Schaden und wird für 1 Minute blind. Bei einem Erfolg erleidet sie nur den halben Schaden und ist nicht blind. Untote und Schleime sind im Nachteil bei diesem Rettungswurf.",
      "Eine Kreatur, die durch diesen Zauber geblendet wurde, darf am Ende jedes ihrer Züge einen weiteren Konstitutionsrettungswurf ablegen. Gelingt er, ist das Ziel nicht länger blind. Dieser Spruch bannt jede Dunkelheit in der Umgebung, die von einem Zauber erschaffen wurde."
    ]
  },
  {
    name: "Sonnenstrahl",
    schule: "Hervorrufung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "selbst (Linie von 18 m)",
    komponenten: ["V", "G", "M"],
    material: "eine Lupe",
    klassen: ["Druide", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein Strahl aus hellem Licht schießt aus deiner Hand in einer Linie mit 1,50 m Breite und 18 m Länge. Jede Kreatur innerhalb der Linie muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 6W8 gleißenden Schaden und ist bis zu deinem nächsten Zug blind. Bei einem Erfolg erleidet die Kreatur nur den halben Schaden und ist nicht blind. Untote und Schleime sind im Nachteil bei diesem Rettungswurf.",
      "Als Aktion kannst du in jedem deiner Züge, bis der Zauber endet, eine neue Linie aus Licht erschaffen.",
      "Für die Wirkungsdauer leuchtet ein Fleck aus strahlendem Licht in deiner Hand. Er strahlt innerhalb von 9 m helles Licht und in einem Radius von weiteren 9 m dämmriges Licht aus. Dieses Licht zählt als Sonnenlicht."
    ]
  },
  {
    name: "Spätzündender Feuerball",
    schule: "Hervorrufung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "45 m",
    komponenten: ["V", "G", "M"],
    material: "eine winzige Kugel aus Fledermauskot und Schwefel",
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein Strahl aus tiefgelbem Licht schießt aus deinem deutenden Finger, verdichtet sich und verweilt für die Wirkungsdauer als glühende Perle an einem Punkt deiner Wahl in Reichweite. Wenn der Zauber endet, entweder weil deine Konzentration unterbrochen wird oder weil du ihn beenden möchtest, erblüht die Perle mit einem lauten Brüllen in einer Explosion aus Flammen, die sich um Ecken ausbreiten können. Alle Kreaturen in einem Radius von 6 m, zentriert um den Zielpunkt, müssen einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg erleidet ein Ziel Feuerschaden in Höhe des angesammelten Schadens (siehe unten) oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "Der Basisschaden des Zaubers beträgt 12W6. Wenn die Perle am Ende deines Zuges noch nicht explodiert ist, steigt der Schaden jedes Mal um 1W6.",
      "Wird die glühende Perle berührt, bevor der Zauber endet, muss die entsprechende Kreatur einen Geschicklichkeitsrettungswurf ablegen. Misslingt er, endet der Zauber sofort und die Perle explodiert in Flammen. Bei einem erfolgreichen Rettungswurf kann die Kreatur die Perle bis zu 12 m weit werfen. Wenn sie eine Kreatur oder einen festen Gegenstand trifft, endet der Zauber und die Perle explodiert.",
      "Das Feuer beschädigt Gegenstände im Wirkungsbereich und entzündet brennbare Gegenstände, die nicht getragen oder in der Hand gehalten werden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 8. oder 9. Grades wirkst, steigt der Basisschaden für jeden Grad über den 7. hinaus um 1W6."
  },
  {
    name: "Spiegelbilder",
    schule: "Illusion",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Drei illusionäre Duplikate von dir erscheinen in deinem Bereich. Bis der Zauber endet, bewegen sie sich mit dir und ahmen deine Aktionen nach. Dabei verändern sie ständig ihre Position, sodass du und deine Abbilder unmöglich zu unterscheiden seid. Als Aktion kannst du die illusionären Duplikate jederzeit fortschicken.",
      "Immer wenn du während der Wirkungsdauer Ziel eines Angriffs wirst, würfle mit einem W20, um zu bestimmen, ob der Angriff dir gilt oder einem deiner Duplikate.",
      "Verfügst du über alle drei Duplikate, wird ein Angriff auf eines von ihnen übertragen, wenn du eine 6 oder höher würfelst. Bei zwei Duplikaten musst du eine 8 oder höher würfeln, bei einem Duplikat eine 11 oder höher.",
      "Die RK eines Duplikats ist 10 + den Geschicklichkeitsmodifikator. Wenn ein Angriff ein Duplikat trifft, wird es zerstört. Ein Duplikat kann einzig und allein von einem Angriff zerstört werden, der trifft; es ignoriert alle anderen Arten von Schaden und Effekten. Der Zauber endet, wenn alle drei Duplikate zerstört sind.",
      "Eine Kreatur ist nicht vom Effekt der Spiegelbilder betroffen, wenn sie nicht sehen kann, wenn sie sich auf andere Sinne als die Sicht verlässt oder wenn sie Illusionen durchschauen kann (etwa mit wahrer Sicht)."
    ]
  },
  {
    name: "Spinnenklettern",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Tropfen Bitumen und eine Spinne",
    klassen: ["Hexenmeister", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du berührst eine bereitwillige Kreatur und verleihst ihr die Fähigkeit, sich an senkrechten Oberflächen nach oben, unten oder zur Seite sowie kopfüber an Decken zu bewegen, ohne dafür die Hände einsetzen zu müssen. Das Ziel erhält außerdem eine Kletternbewegungsrate gleich ihrer normalen Bewegungsrate."
    ]
  },
  {
    name: "Spinnennetz",
    schule: "Beschwörung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "einige Spinnweben",
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du beschwörst eine Masse aus dichten, klebrigen Netzen an einem Punkt deiner Wahl in Reichweite. Die Netze füllen für die Wirkungsdauer einen Würfel mit 6 m Kantenlänge. Der Bereich gilt als schwieriges Gelände und ist leicht verschleiert.",
      "Wenn sich die Spinnweben nicht zwischen zwei festen Gegenständen befinden (wie Mauern oder Bäumen) oder über einen Fußboden, eine Wand oder die Decke gespannt sind, fällt das beschworene Netz in sich zusammen und der Zauber endet zu Beginn deines nächsten Zuges. Netze, die über eine flache Oberfläche ausgebreitet sind, besitzen eine Tiefe von 1,50 m.",
      "Alle Kreaturen, die ihren Zug in den Netzen beginnen oder diese während ihres Zuges betreten, müssen einen Geschicklichkeitsrettungswurf ablegen. Bei einem Misserfolg ist eine Kreatur festgesetzt, solange sie sich in den Netzen aufhält oder sich befreien kann. Als Aktion kann sie einen Stärkewurf gegen den SG zum Widerstehen deiner Zauber ablegen. Bei einem Erfolg ist sie nicht länger festgesetzt.",
      "Die Netze sind brennbar. Alle Netze innerhalb eines Würfels mit 1,50 m Kantenlänge verbrennen innerhalb von 1 Runde, wenn sie mit Feuer in Kontakt kommen, und verursachen dabei allen Kreaturen, die ihren Zug im Feuer beginnen, 2W4 Feuerschaden."
    ]
  },
  {
    name: "Sprachen verstehen",
    schule: "Erkenntnismagie",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Ruß und Salz",
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: true,
    beschreibung: [
      "Für die Wirkungsdauer verstehst du die wörtliche Bedeutung jeglicher gesprochener Sprache, die du hörst. Außerdem bist du in der Lage, jede geschriebene Sprache zu lesen, die du sehen kannst, musst dabei aber die Oberfläche berühren, auf der die Worte geschrieben sind. Es dauert ungefähr 1 Minute, eine Seite Text zu lesen.",
      "Der Zauber hilft nicht bei der Entschlüsselung von Geheimbotschaften in einem Text oder Glyphen, wie arkanen Sigillen, die nicht Teil einer geschriebenen Sprache sind."
    ]
  },
  {
    name: "Springen",
    schule: "Verwandlung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "das Hinterbein eines Grashüpfers",
    klassen: ["Druide", "Waldläufer", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du berührst eine Kreatur und verleihst ihr die Fähigkeit, mit Sprüngen enorme Entfernungen zu überwinden. Die Sprungdistanz des Ziels wird verdreifacht, bis der Zauber endet."
    ]
  },
  {
    name: "Sprühende Farben",
    schule: "Illusion",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Runde",
    konzentration: false,
    reichweite: "selbst (Kegel von 4,50 m)",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Pulver oder Sand in den Farben Rot, Gelb und Blau",
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Eine überwältigende Abfolge von blitzenden, bunten Lichtern springt aus deinen Händen. Würfle mit 6W10; das Ergebnis ist die Gesamtzahl von Trefferpunkten an Kreaturen, die dieser Zauber beeinflussen kann. Kreaturen innerhalb eines Kegels von 4,50 m werden in aufsteigender Reihenfolge ihrer aktuellen Trefferpunkte betroffen (dabei werden bewusstlose Kreaturen ignoriert sowie Kreaturen, die nicht sehen können).",
      "Beginnend mit der Kreatur mit den niedrigsten aktuellen Trefferpunkten werden alle von diesem Zauber betroffenen Kreaturen bis zum Ende deines nächsten Zugs blind. Ziehe die Trefferpunkte der Kreatur von der erwürfelten Gesamtsumme ab, ehe du mit der nächsten Kreatur mit den niedrigsten Trefferpunkten fortfährst. Die Trefferpunkte einer Kreatur müssen gleich oder niedriger sein als die verbleibende Gesamtsumme, damit sie betroffen wird."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, würfelst du für jeden Grad über den 1. hinaus zusätzlich mit 2W10."
  },
  {
    name: "Spurloses Gehen",
    schule: "Bannmagie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "selbst",
    komponenten: ["V", "G", "M"],
    material: "Asche eines verbrannten Mistelblatts und ein Fichtenzweig",
    klassen: ["Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Ein Schleier aus Schatten und Stille geht von dir aus und maskiert dich und deine Gefährten, sodass ihr nicht entdeckt werden könnt.",
      "Für die Wirkungsdauer erhalten alle Kreaturen deiner Wahl innerhalb von 9 m (inklusive dir) einen Bonus von +10 auf Würfe auf Geschicklichkeit (Heimlichkeit). Außerdem können ihre Spuren nur auf magische Weise gelesen werden. Eine Kreatur, die vom Effekt des Zaubers betroffen ist, hinterlässt keine Fährten oder andere Spuren ihrer Anwesenheit."
    ]
  },
  {
    name: "Stein formen",
    schule: "Verwandlung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "weicher Lehm, der grob in die gewünschte Form des steinernen Gegenstands gebracht wurde",
    klassen: ["Kleriker", "Druide", "Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du berührst einen steinernen Gegenstand der Größenkategorie mittelgroß oder kleiner oder einen Bereich aus Stein, der in keiner Ausdehnung größer als 1,50 m ist, und verformst ihn nach deinen Wünschen. Beispielsweise könntest du einen großen Felsen in eine Waffe formen, ein Götzenbild oder eine Truhe oder einen kleinen Durchgang in einer steinernen Mauer öffnen, solange diese nicht dicker als 1,50 m ist. Du könntest auch eine Steintür oder ihren Rahmen umformen, um sie zu versiegeln. Der Gegenstand, den du erschaffst, kann bis zu zwei Scharniere und einen Riegel besitzen, feinere mechanische Details sind nicht möglich."
    ]
  },
  {
    name: "Steinhaut",
    schule: "Bannmagie",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Diamantstaub im Wert von mindestens 100 GM, der beim Wirken des Zaubers verbraucht wird",
    klassen: ["Druide", "Waldläufer", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Der Zauber macht das Fleisch einer bereitwilligen Kreatur, die du berührst, so hart wie Stein. Bis der Zauber endet, verfügt das Ziel über eine Resistenz gegen nicht-magischen Wucht-, Stich- und Hiebschaden."
    ]
  },
  {
    name: "Steinwand",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein kleiner Granitblock",
    klassen: ["Druide", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Eine nicht-magische Barriere aus festem Stein erhebt sich an einem Punkt deiner Wahl in Reichweite. Sie ist 15 cm dick und besteht aus zehn Platten von 3 × 3 m Größe. Jede Platte muss an mindestens eine andere angrenzen. Alternativ kannst du Platten formen, die 3 × 6 m groß, aber nur 7,5 cm dick sind.",
      "Erschaffst du die Barriere, wird jede Kreatur in ihrem Bereich zu einer Seite der Wand gestoßen (du entscheidest, welche). Würde eine Kreatur von allen Seiten von der Steinwand eingeschlossen werden (oder der Steinwand und einem anderen festen Hindernis), darf diese Kreatur einen Geschicklichkeitsrettungswurf ablegen. Bei einem Erfolg kann sie ihre Reaktion verwenden, um sich bis zu ihrer Bewegungsrate zu bewegen, sodass sie nicht mehr von der Steinwand eingeschlossen ist.",
      "Die Barriere kann jede Form haben, die du möchtest, sie muss nicht senkrecht sein oder auf einem festen Untergrund stehen. Allerdings muss sie mit bestehendem Stein verschmelzen und fest von ihm getragen werden. Somit kannst du diesen Zauber verwenden, um eine Schlucht zu überwinden oder eine Rampe zu erschaffen.",
      "Wenn du eine Brücke von mehr als 6 m Länge erschaffen willst, musst du die halbe Größe jeder Platte für Stützpfeiler aufwenden. Du kannst die Steinwand grob formen, um Zinnen, Wehranlagen oder Ähnliches zu erschaffen.",
      "Die Barriere ist ein Gegenstand aus Stein, der beschädigt und somit auch durchbrochen werden kann. Jede Platte hat RK 15 und besitzt 40 Trefferpunkte pro 2,5 cm Dicke. Werden die Trefferpunkte einer Platte auf 0 reduziert, wird diese zerstört, was dazu führen kann, dass angrenzende Platten einstürzen (nach Entscheidung des SL). Wenn du die Konzentration auf diesen Zauber für seine gesamte Wirkungsdauer aufrechterhältst, wird die Barriere permanent und kann nicht gebannt werden. Ansonsten verschwindet sie, wenn der Zauber endet."
    ]
  },
  {
    name: "Stille",
    schule: "Illusion",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Kleriker", "Waldläufer"],
    ritual: true,
    beschreibung: [
      "Für die Wirkungsdauer kann kein Geräusch in einer Sphäre mit 6 m Radius entstehen oder sie durchdringen. Die Sphäre ist um einen Punkt deiner Wahl in Reichweite zentriert. Jede Kreatur und jeder Gegenstand, der sich vollständig in der Sphäre aufhält, ist immun gegen Schallschaden. Außerdem sind Kreaturen taub, solange sie sich im Bereich des Zaubers befinden. In der Sphäre ist es nicht möglich, einen Zauber zu wirken, der eine verbale Komponente besitzt."
    ]
  },
  {
    name: "Stinkende Wolke",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "ein verfaultes Ei oder mehrere Stinkkohlblätter",
    klassen: ["Barde", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine Sphäre mit einem Radius von 6 m, die mit einem gelben, übelkeitserregenden Gas gefüllt und um einen Punkt deiner Wahl in Reichweite zentriert ist. Die Wolke bleibt für die Wirkungsdauer bestehen, breitet sich um Ecken aus und ihr Bereich ist komplett verschleiert. Jede Kreatur, die sich zu Beginn ihres Zuges vollständig in der Wolke befindet, muss einen Konstitutionsrettungswurf gegen Gift ablegen. Bei einem Misserfolg verbringt die Kreatur ihre Aktion damit, würgend umherzutorkeln.",
      "Kreaturen, die nicht atmen müssen oder immun gegen Gift sind, gelingt dieser Rettungswurf automatisch. Ein mittelstarker Wind (mindestens 15 km pro Stunde) zerstreut die Wolke nach 4 Runden, ein starker Wind (mindestens 30 km pro Stunde) bereits nach 1 Runde."
    ]
  },
  {
    name: "Strahl der Übelkeit",
    schule: "Nekromantie",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein Strahl aus kränklich grüner Energie schießt auf eine Kreatur in Reichweite zu. Führe einen Fernkampf-Zauberangriff gegen das Ziel aus. Bei einem Treffer erleidet es 2W6 Giftschaden und muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg ist das Ziel außerdem bis zum Ende seines nächsten Zuges vergiftet."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 1. hinaus um 1W8."
  },
  {
    name: "Sturm der Vergeltung",
    schule: "Beschwörung",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Sicht",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Eine brodelnde Sturmwolke mit einem Radius von 108 m bildet sich, zentriert um einen Punkt, den du sehen kannst. Blitze zucken in dem Bereich herab, Donner grollt und starke Winde heulen. Jede Kreatur, die sich beim Erscheinen der Wolke unter dieser befindet (nicht mehr als 1.500 m), muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 2W6 Schallschaden und wird für 5 Minuten taub.",
      "In jeder Runde, in der du die Konzentration auf diesen Zauber aufrechterhältst, erzeugt der Sturm in deinem Zug einen anderen Effekt.",
      "Runde 2: Säureregen fällt aus der Wolke. Alle Kreaturen und Gegenstände unter der Wolke erleiden 1W6 Säureschaden.",
      "Runde 3: Du rufst sechs Blitze aus der Wolke hervor, die sechs Kreaturen oder Gegenstände deiner Wahl unter der Wolke treffen. Jedes Ziel kann nur von einem Blitz getroffen werden und erleidet 10W6 Blitzschaden. Eine getroffene Kreatur kann diesen Schaden bei einem erfolgreichen Geschicklichkeitsrettungswurf halbieren.",
      "Runde 4: Hagelkörner prasseln aus der Wolke herab. Alle Kreaturen und Gegenstände unter der Wolke erleiden 2W6 Wuchtschaden.",
      "Runde 5–10: Windstöße und eisiger Regen fegen durch den Bereich unter der Wolke. Dieser gilt als schwieriges Gelände und ist komplett verschleiert. Jede Kreatur innerhalb des Bereichs erleidet 1W6 Kälteschaden. Angriffe mit Fernkampfwaffen sind in ihm nicht möglich. Der Wind und der Regen zählen als starke Ablenkung, wenn eine Kreatur die Konzentration auf einen Zauber aufrechtzuerhalten versucht. Außerdem zerstreuen die starken Winde (die zwischen 30 und 75 km pro Stunde erreichen) automatisch jeden Nebel, Dunst und ähnliche Effekte in dem Bereich, gleichgültig ob es sich um gewöhnliche oder magische handelt."
    ]
  },
  {
    name: "Symbol",
    schule: "Bannmagie",
    grad: 7,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "bis der Zauber gebannt oder ausgelöst wird",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Quecksilber, Phosphor sowie Diamant- und Opalstaub im Wert von mindestens 1.000 GM, die beim Wirken des Zaubers verbraucht werden",
    klassen: ["Barde", "Kleriker", "Magier"],
    ritual: false,
    beschreibung: [
      "Beim Wirken dieses Zaubers schreibst du eine schädigende Glyphe entweder auf eine Oberfläche (wie einen Tisch oder einen Abschnitt des Fußbodens oder der Wand) oder – um sie zu verbergen – in einen Gegenstand, der verschlossen werden kann (wie ein Buch, eine Schriftrolle oder eine Schatztruhe). Wenn du eine Oberfläche wählst, kann die Glyphe maximal einen Bereich mit 3 m Durchmesser abdecken. Entscheidest du dich für einen Gegenstand, muss dieser an seinem Standort verbleiben. Wird er mehr als 3 m von dem Ort entfernt, an dem der Zauber gewirkt wurde, wird die Glyphe zerstört und der Zauber endet, ohne ausgelöst zu werden.",
      "Die Glyphe ist so gut wie unsichtbar und erfordert einen erfolgreichen Wurf auf Intelligenz (Nachforschungen) gegen den SG zum Widerstehen deiner Zauber, um entdeckt zu werden.",
      "Beim Wirken des Zaubers entscheidest du, wodurch die Glyphe ausgelöst wird. Glyphen, die auf eine Oberfläche geschrieben sind, werden am häufigsten dadurch ausgelöst, dass jemand sie berührt oder auf ihr steht, einen Gegenstand entfernt, der die Glyphe bedeckt, sich ihr auf eine bestimmte Entfernung nähert oder den Gegenstand manipuliert, auf dem sich die Glyphe befindet. Bei Glyphen, die in einen Gegenstand angebracht sind, sind die häufigsten Auslöser das Öffnen des Gegenstands, die Annäherung auf eine gewisse Entfernung zum Gegenstand oder das Sehen oder Lesen der Glyphe. Sobald eine Glyphe ausgelöst wurde, endet der Zauber.",
      "Du kannst den Auslöser noch weiter verfeinern, sodass der Zauber nur unter speziellen Umständen aktiviert wird oder die auslösende Kreatur bestimmte körperliche Eigenschaften (wie Größe oder Gewicht) oder einen festgelegten Typ aufweisen muss (etwa nur Hexen oder Gestaltwandler).",
      "Du kannst auch Bedingungen festlegen, unter denen die Glyphe nicht ausgelöst wird, beispielsweise wenn ein bestimmtes Passwort ausgesprochen wird.",
      "Beim Schreiben der Glyphe wählst du eine der unten aufgeführten Optionen als Effekt. Sobald die Glyphe ausgelöst wird, beginnt sie zu leuchten und erfüllt eine Sphäre mit einem Radius von 18 m für 10 Minuten mit dämmrigem Licht. Anschließend endet der Zauber. Jede Kreatur, die sich beim Aktivieren der Glyphe in der Sphäre aufhält, diese das erste Mal in einem Zug betritt oder ihren Zug dort beendet, wird Ziel des vorher festgelegten Effekts.",
      "• Tod: Jedes Ziel muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet ein Ziel 10W10 nekrotischen Schaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "• Zwietracht: Jedes Ziel muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg beginnt ein Ziel zu keifen und für 1 Minute mit anderen Kreaturen zu streiten. Während dieser Zeit ist die betroffene Kreatur nicht zu aussagekräftiger Kommunikation fähig und ist im Nachteil bei Angriffs- und Attributswürfen.",
      "• Furcht: Jedes Ziel muss einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg wird ein Ziel für 1 Minute verängstigt. Solange die betroffene Kreatur verängstigt ist, muss sie Gegenstände fallenlassen, die sie in den Händen hält, und sich in jedem ihrer Züge mindestens 9 m von der Glyphe entfernen, falls dies möglich ist.",
      "• Hoffnungslosigkeit: Jedes Ziel muss einen Charismarettungswurf ablegen. Bei einem Misserfolg wird ein Ziel für 1 Minute von Hoffnungslosigkeit überwältigt. Während dieser Zeit kann es weder angreifen noch Kreaturen als Ziel für schädigende Fähigkeiten, Zauber oder andere magische Effekte wählen.",
      "• Wahnsinn: Jedes Ziel muss einen Intelligenzrettungswurf ablegen. Bei einem Misserfolg wird ein Ziel für 1 Minute wahnsinnig. Eine wahnsinnige Kreatur kann keine Aktionen ausführen, nicht verstehen, was andere Kreaturen sagen, kann nicht lesen und spricht nur Kauderwelsch. Der SL kontrolliert ihre Bewegungen, die unvorhersehbar sind.",
      "• Schmerz: Jedes Ziel muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg wird ein Ziel für 1 Minute von schrecklichen Schmerzen geplagt und gilt als kampfunfähig.",
      "• Schlaf: Jedes Ziel muss einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg wird ein Ziel für 10 Minuten bewusstlos. Eine betroffene Kreatur erwacht, wenn sie Schaden erleidet oder eine andere Kreatur sie als Aktion schüttelt oder ohrfeigt, um sie zu wecken.",
      "• Betäubung: Jedes Ziel muss einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg wird ein Ziel für 1 Minute betäubt."
    ]
  },
  {
    name: "Tageslicht",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Druide", "Paladin", "Waldläufer", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine Sphäre aus Licht mit einem Radius von 18 m, zentriert um einen Punkt deiner Wahl in Reichweite. Die Sphäre ist geflutet mit hellem Licht und verbreitet dämmriges Licht in einem Radius von weiteren 18 m.",
      "Ist der gewählte Punkt ein Gegenstand, breitet sich das Licht von dem Gegenstand aus und bewegt sich mit ihm, falls eine Kreatur ihn trägt oder in der Hand hält. Wenn die Quelle des Lichts vollständig mit einem blickdichten Gegenstand bedeckt wird, wie einer Schüssel oder einem Helm, blockiert dies das Licht.",
      "Überschneidet sich die Sphäre mit einem Bereich aus Dunkelheit, der durch einen Zauber des 3. oder eines niedrigeren Grades erschaffen wurde, wird der Zauber aufgehoben, der die Dunkelheit verursacht."
    ]
  },
  {
    name: "Tanzende Lichter",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Phosphor oder Bergulmenholz oder ein Glühwürmchen",
    klassen: ["Barde", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst bis zu vier fackelgroße Lichter in Reichweite, die du wie Fackeln, Laternen oder leuchtende Kugeln erscheinen lassen kannst und die für die Wirkungsdauer in der Luft schweben. Du kannst die vier Lichter auch in einer leuchtenden, vage humanoiden mittelgroßen Gestalt vereinen. Welche Gestalt du auch wählst, jedes Licht strahlt dämmriges Licht in einem Radius von 3 m aus. Als Bonusaktion kannst du die Lichter in deinem Zug bis zu 18 m an einen Punkt innerhalb der Reichweite bewegen. Ein Licht darf sich nicht weiter als 6 m von einem anderen Licht entfernen, das mit diesem Zauber erschaffen wurde, und verschwindet, wenn es die Reichweite des Zaubers verlässt."
    ]
  },
  {
    name: "Taschenspielerei",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "bis zu 1 Stunde",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Hexenmeister", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber ist ein kleinerer magischer Trick, den Zauberlehrlinge zum Üben verwenden. Du kannst einen der folgenden magischen Effekte in Reichweite erzeugen:",
      "• Du erschaffst einen sofortigen, harmlosen sensorischen Effekt, wie einen Funkenregen, einen Windhauch, schwache Musik oder einen eigenartigen Geruch.",
      "• Du kannst augenblicklich eine Kerze, eine Fackel oder ein kleines Lagerfeuer entzünden oder löschen.",
      "• Du kannst einen Gegenstand, der nicht größer ist als ein Würfel mit 30 cm Kantenlänge, sofort reinigen oder beschmutzen.",
      "• Du kannst bis zu einem Würfel mit 30 cm Kantenlänge an Nahrung oder nicht lebender Materie für 1 Stunde abkühlen, aufwärmen oder würzen.",
      "• Du lässt einen Farbfleck, ein Mal oder ein Symbol für 1 Stunde auf einem Gegenstand oder einer Oberfläche erscheinen.",
      "• Du erschaffst einen nicht-magischen kleinen Gegenstand oder ein Trugbild, das in deine Hand passt und bis zum Ende deines nächsten Zuges bestehen bleibt.",
      "Wenn du diesen Zauber mehrmals wirkst, können bis zu drei der nicht sofortigen Effekte gleichzeitig aktiv sein. Du kannst solche Effekte als Aktion aufheben."
    ]
  },
  {
    name: "Tashas Fürchterlicher Lachanfall",
    schule: "Verzauberung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "winzige Küchlein und eine Feder, die durch die Luft geschwenkt wird",
    klassen: ["Barde", "Magier"],
    ritual: false,
    beschreibung: [
      "Eine Kreatur deiner Wahl in Reichweite, die du sehen kannst, nimmt alles als unglaublich lustig wahr und verfällt in einen Lachanfall, wenn der Zauber in Kraft tritt. Misslingt dem Ziel ein Weisheitsrettungswurf, erhält es den Zustand liegend, wird kampfunfähig und kann für die Wirkungsdauer nicht aufstehen. Kreaturen mit Intelligenz 4 oder niedriger werden von diesem Zauber nicht betroffen.",
      "Wenn das Ziel Schaden erleidet sowie am Ende eines jeden seiner Züge, darf es einen weiteren Weisheitsrettungswurf ablegen. Es ist bei dem Rettungswurf im Vorteil, wenn dieser durch Schaden ausgelöst wurde. Bei einem Erfolg endet der Zauber."
    ]
  },
  {
    name: "Telekinese",
    schule: "Verwandlung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erhältst die Fähigkeit, Kreaturen oder Gegenstände Kraft deiner Gedanken zu bewegen und mit ihnen zu interagieren. Beim Wirken des Spruchs sowie als Aktion in jedem deiner Züge, bis der Zauber endet, kannst du deinen Willen auf eine Kreatur oder einen Gegenstand konzentrieren und den unten beschriebenen Effekt auslösen. Das Ziel muss sich in Reichweite befinden und du musst es sehen können. Jede Runde darfst du entweder dasselbe Ziel beeinflussen oder ein neues wählen. Wechselst du das Ziel, wird das bisherige nicht mehr betroffen.",
      "Kreatur: Du kannst versuchen, eine Kreatur der Größenkategorie riesig oder kleiner zu bewegen. Führe einen Wettstreit mit dem Ziel aus: Du legst einen Attributswurf mit deinem Attribut zum Zauberwirken ab, dein Ziel einen Stärkewurf. Ist dein Ergebnis höher, darfst du die Kreatur bis zu 9 m in eine beliebige Richtung bewegen (auch nach oben), solange sie in der Reichweite des Zaubers bleibt. Bis zum Ende deines nächsten Zuges ist die Kreatur durch deinen telekinetischen Griff festgesetzt. Eine Kreatur, die nach oben gehoben wird, schwebt in der Luft. In den folgenden Runden kannst du deine Aktion verwenden, um den telekinetischen Griff um die Kreatur zu halten, indem du den Wettstreit wiederholst.",
      "Gegenstand: Du kannst versuchen, einen Gegenstand zu bewegen, der bis zu 1.000 Pfund wiegt. Wenn der Gegenstand nicht getragen oder in der Hand gehalten wird, darfst du ihn automatisch 9 m in eine beliebige Richtung bewegen, solange er in der Reichweite des Zaubers bleibt. Wird der Gegenstand von einer Kreatur getragen oder in der Hand gehalten, musst du einen Wettstreit mit ihr ausführen: Du legst einen Attributswurf mit deinem Attribut zum Zauberwirken ab, dein Ziel einen Stärkewurf. Ist dein Ergebnis höher, ziehst du den Gegenstand von der Kreatur weg und kannst ihn bis zu 9 m in eine beliebige Richtung bewegen, aber nicht jenseits der Reichweite des Zaubers.",
      "Du kannst mit deinem telekinetischen Griff mit Gegenständen interagieren, zum Beispiel ein einfaches Werkzeug benutzen, eine Tür oder einen Behälter öffnen, einen Gegenstand aus einem offenen Behälter holen oder ihn verstauen oder den Inhalt einer Phiole ausgießen."
    ]
  },
  {
    name: "Telepathie",
    schule: "Hervorrufung",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "unbegrenzt",
    komponenten: ["V", "G", "M"],
    material: "ein Paar verbundener Silberringe",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Du erschaffst ein telepathisches Band zwischen dir und einer bereitwilligen Kreatur, mit der du vertraut bist. Das Ziel kann sich an einem beliebigen Ort derselben Existenzebene befinden. Der Zauber endet, wenn du oder das Ziel diese Ebene verlässt.",
      "Für die Wirkungsdauer können du und das Ziel durch dieses Band augenblicklich Worte, Bilder, Geräusche und andere sensorische Nachrichten miteinander teilen. Außerdem erkennt das Ziel dich als die Kreatur, mit der es kommuniziert. Der Zauber erlaubt es einer Kreatur mit einem Intelligenzwert von 1, die Bedeutung deiner Worte zu verstehen und das Ausmaß einer sensorischen Botschaft zu begreifen, die du ihm schickst."
    ]
  },
  {
    name: "Teleportieren",
    schule: "Beschwörung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Der Zauber transportiert dich und bis zu acht bereitwillige Kreaturen deiner Wahl oder einen einzelnen Gegenstand zu einem Ort, den du auswählst. Jedes Ziel muss sich in Reichweite befinden und du musst es sehen können. Wenn du einen Gegenstand als Ziel wählst, muss er vollständig in einen Würfel mit 3 m Kantenlänge passen und kann nicht von einer unwilligen Kreatur getragen oder in der Hand gehalten werden. Der Zielort, den du auswählst, muss dir bekannt sein und sich auf derselben Existenzebene befinden wie du. Deine Vertrautheit mit dem Zielort bestimmt, wie erfolgreich du dort eintriffst. Der SL würfelt mit einem W100 und sieht in der folgenden Tabelle nach.",
      { typ: "tabelle", kopfzeile: ["Vertrautheit", "Unglück", "Ähnliches Gebiet", "Abseits des Ziels", "Im Ziel"], zeilen: [
        ["Permanenter Kreis", "—", "—", "—", "01–100"],
        ["Assoziierter Gegenstand", "—", "—", "—", "01–100"],
        ["Sehr vertraut", "01–05", "06–13", "14–24", "25–100"],
        ["Beiläufig gesehen", "01–33", "34–43", "44–53", "54–100"],
        ["Einmal gesehen", "01–43", "44–53", "54–73", "74–100"],
        ["Beschrieben", "01–43", "44–53", "54–73", "74–100"],
        ["Falscher Zielort", "01–50", "51–100", "—", "—"]
      ]},
      "Vertrautheit: „Permanenter Kreis” meint einen permanenten Teleportationskreis, dessen Sigillensequenz dir vertraut ist. „Assoziierter Gegenstand” bedeutet, dass du einen Gegenstand besitzt, der innerhalb der letzten 6 Monate vom Zielort entfernt wurde, wie ein Buch aus der Bibliothek eines Magiers, ein Bettlaken aus einer königlichen Zimmerflucht oder ein Brocken Marmor aus der geheimen Gruft eines Lichs. „Sehr vertraut” ist ein Ort, an dem du oft gewesen bist, den du genau studiert hast oder den du beim Wirken des Zaubers siehst. „Beiläufig gesehen” meint einen Ort, den du mehr als einmal gesehen hast, aber mit dem du nicht besonders vertraut bist. „Einmal gesehen” bedeutet, dass du einen Ort ein einziges Mal gesehen hast, etwa durch Magie. „Beschrieben” meint einen Ort, dessen Position und Aussehen dir durch eine Beschreibung bekannt sind, zum Beispiel durch eine Karte. „Falscher Zielort” bedeutet, dass ein Ort nicht existiert. Vielleicht hast du das Sanktum eines Gegners magisch ausgespäht, aber nur eine Illusion gesehen, oder du versuchst dich an einen vertrauten Ort zu teleportieren, der nicht mehr existiert.�",
      "Im Ziel: Du und deine Begleiter (oder der Zielgegenstand) erscheinen dort, wo du willst.",
      "Abseits des Ziels: Du und deine Begleiter (oder der Zielgegenstand) erscheinen in einer zufälligen Entfernung und einer zufälligen Richtung abseits des Zielorts. Die Entfernung beträgt 1W10 × 1W10 Prozent der teleportierten Distanz. Landest du beispielsweise bei dem Versuch, 180 km zu reisen, abseits des Ziels und würfelst eine 5 und eine 3 mit den beiden W10, befindest du dich 15 % der Distanz abseits des Ziels, also 27 km. Der SL bestimmt zufällig die Richtung, in der du entfernt vom Ziel landest, indem er mit einem W8 würfelt und die 1 als Norden annimmt, die 2 als Nordost, die 3 als Osten und so weiter. Wenn du dich also in eine Küstenstadt teleportieren wolltest und 27 km in Richtung Meer landest, könntest du in Schwierigkeiten geraten.",
      "Ähnliches Gebiet: Du und deine Begleiter (oder der Zielgegenstand) landen in einer anderen Gegend, die dem Zielgebiet visuell oder thematisch ähnlich ist. Wenn du dich beispielsweise in dein Heimatlabor teleportieren wolltest, könntest du in einem anderen Magierlabor ankommen oder in einem alchemistischen Lager, das über viele ähnliche Werkzeuge und Gerätschaften wie dein Labor verfügt. Grundsätzlich erscheinst du im nächstliegenden ähnlichen Ort, da der Zauber jedoch keine Reichweitenbegrenzung besitzt, kannst du theoretisch überall auf der Ebene landen.",
      "Unglück: Die unvorhersehbare Magie des Zaubers führt zu einem Unglück während der Reise. Du und deine Begleiter (oder der Zielgegenstand) erleiden jeweils 3W10 Energieschaden. Außerdem würfelt der SL noch einmal, um zu bestimmen, wo du landest (es kann zu mehreren Unglücken kommen, die jedes Mal Schaden verursachen)."
    ]
  },
  {
    name: "Tensers Schwebende Scheibe",
    schule: "Beschwörung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein Tropfen Quecksilber",
    klassen: ["Magier"],
    ritual: true,
    beschreibung: [
      "Der Zauber erschafft eine kreisförmige, waagerechte Fläche aus Energie mit 90 cm Durchmesser und 2,5 cm Dicke. Sie schwebt in einem nicht besetzten Bereich deiner Wahl, den du sehen kannst, in 90 cm Höhe über dem Boden. Die Scheibe bleibt für die Wirkungsdauer bestehen und kann bis zu 500 Pfund tragen. Wenn mehr Gewicht auf ihr lastet, endet der Zauber, und alles, das sich auf ihr befand, fällt zu Boden.",
      "Die Scheibe ist unbeweglich, solange du dich innerhalb von 6 m um sie befindest. Entfernst du dich mehr als 6 m, folgt dir die Scheibe, sodass sie innerhalb von 6 m zu dir bleibt. Sie ist in der Lage, sich über unebenes Gelände, Treppen, Abhänge und Ähnliches zu bewegen, kann aber keine Höhenunterschiede von 3 m oder mehr überwinden. Zum Beispiel kann sich die Scheibe nicht über eine 3 m tiefe Grube bewegen oder eine solche verlassen, wenn sie in ihr erschaffen wurde.",
      "Entfernst du dich weiter als 30 m von der Scheibe (für gewöhnlich weil sie sich nicht um ein Hindernis bewegen kann, um dir zu folgen), endet der Zauber."
    ]
  },
  {
    name: "Thaumaturgie",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "bis zu 1 Minute",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Du manifestierst ein kleines Wunder in Reichweite, ein Zeichen übernatürlicher Macht. Du kannst einen der folgenden magischen Effekte erzeugen:",
      "• Deine Stimme dröhnt für 1 Minute dreimal so laut wie normal.",
      "• Du lässt Flammen flackern, heller oder dunkler werden oder die Farbe wechseln. Der Effekt hält 1 Minute an.",
      "• Du erzeugst für 1 Minute harmlose Erschütterungen des Bodens.",
      "• Du erschaffst ein kurzes Geräusch, das von einem Punkt deiner Wahl in Reichweite ertönt, wie das Grollen von Donner, den Ruf eines Raben oder ein unheilvolles Flüstern.",
      "• Du lässt eine nicht verriegelte Tür oder ein Fenster auffliegen oder zuschlagen.",
      "• Du änderst für 1 Minute das Aussehen deiner Augen.",
      "Wenn du diesen Zauber mehrmals wirkst, können bis zu drei der nicht sofortigen Effekte gleichzeitig aktiv sein. Du kannst solche Effekte als Aktion aufheben."
    ]
  },
  {
    name: "Tier beherrschen",
    schule: "Verzauberung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du versuchst, ein Tier in Reichweite, das du sehen kannst, unter deine Kontrolle zu bringen. Dem Ziel muss ein Weisheitsrettungswurf gelingen, um nicht für die Wirkungsdauer von dir bezaubert zu werden. Kämpfen du oder deine Verbündeten gerade gegen das Tier, ist es bei diesem Rettungswurf im Vorteil.",
      "Solange das Tier von dir bezaubert ist und ihr euch auf derselben Existenzebene aufhaltet, verfügst du über eine telepathische Verbindung mit ihm. Diese kannst du verwenden, um der Kreatur Befehle zu erteilen (dazu musst du keine Aktion aufwenden), die sie nach ihren Möglichkeiten erfüllt. Du kannst ihr eine einfache, allgemeine Handlung befehlen, wie „Greife diese Kreatur an”, „Lauf dort hinüber” oder „Hole diesen Gegenstand”. Wenn die Kreatur den Befehl erfüllt hat und keine weiteren Anweisungen von dir erhält, verteidigt sie sich nur und versucht am Leben zu bleiben.�",
      "Du kannst deine Aktion verwenden, um eine vollständige und präzise Kontrolle über das Ziel zu erlangen. Bis zum Ende deines nächsten Zuges führt die Kreatur nur die Aktionen aus, die du auswählst, und tut nichts, was du ihr nicht erlaubst. Während dieser Zeit kannst du die Kreatur auch eine Reaktion verwenden lassen, musst jedoch dazu deine eigene Reaktion verbrauchen.",
      "Immer wenn das Ziel Schaden erleidet, darf es einen neuen Weisheitsrettungswurf ablegen, um den Zauber abzuschütteln. Ist der Rettungswurf erfolgreich, endet der Zauber."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz eines höheren Grades wirkst, verlängert sich die Wirkungsdauer: auf „Konzentration, bis zu 10 Minuten” bei einem Zauberplatz des 5. Grades, auf „Konzentration, bis zu 1 Stunde” bei einem des 6. Grades oder auf „Konzentration, bis zu 8 Stunden” bei einem des 7. Grades."
  },
  {
    name: "Tier- oder Pflanze aufspüren",
    schule: "Erkenntnismagie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Fell eines Bluthundes",
    klassen: ["Barde", "Druide", "Waldläufer"],
    ritual: true,
    beschreibung: [
      "Beschreibe oder benenne ein bestimmtes Tier oder eine bestimmte Pflanzenart. Du konzentrierst dich auf die Stimme der Natur in deiner Umgebung und erfährst dabei, wie weit entfernt und in welcher Richtung sich innerhalb von 7,5 km die nächste Kreatur oder Pflanze dieser Art befindet, wenn es eine solche gibt."
    ]
  },
  {
    name: "Tierbote",
    schule: "Verzauberung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein kleiner Leckerbissen",
    klassen: ["Barde", "Druide", "Waldläufer"],
    ritual: true,
    beschreibung: [
      "Durch diesen Zauber kannst du ein Tier eine Nachricht überbringen lassen. Wähle ein sehr kleines Tier in Reichweite, das du sehen kannst, wie ein Eichhörnchen, einen Blauhäher oder eine Fledermaus. Bestimme einen Ort, den du schon einmal besucht haben musst, sowie einen Empfänger, der einer allgemeinen Beschreibung entspricht, wie „ein Mann oder eine Frau in einer Uniform der Stadtgarde” oder „ein rothaariger Zwerg mit einem spitzen Hut”. Anschließend sprichst du eine Botschaft von bis zu 25 Wörtern. Das Tier reist für die Wirkungsdauer des Zaubers in Richtung des gewählten Ortes, wobei ein fliegender Bote pro 24 Stunden 75 km zurücklegt, ein anderes Tier hingegen nur 40 km.�",
      "Trifft das Tier am Zielort ein, überbringt es die Botschaft an die Kreatur, die du beschrieben hast, indem es magisch deine gesprochene Nachricht wiederholt. Der Bote überbringt die Nachricht nur einer Kreatur, die genau deiner Beschreibung entspricht. Wenn das Tier sein Ziel nicht erreicht, ehe der Zauber endet, geht die Botschaft verloren, und es kehrt an den Ort zurück, an dem du den Zauber gewirkt hast."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, verlängert sich die Wirkungsdauer des Zaubers um 48 Stunden für jeden Grad über den 2. hinaus."
  },
  {
    name: "Tiere beschwören",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du beschwörst Feengeister, welche die Gestalt von Tieren annehmen und in nicht besetzten Bereichen erscheinen, die sich in Reichweite befinden und die du sehen kannst. Wähle aus den folgenden Möglichkeiten, was erscheint:",
      "• ein Tier mit Herausforderungsgrad 2 oder weniger",
      "• zwei Tiere mit Herausforderungsgrad 1 oder weniger",
      "• vier Tiere mit Herausforderungsgrad 1/2 oder weniger",
      "• acht Tiere mit Herausforderungsgrad 1/4 oder weniger",
      "Die Tiere gelten als Feenwesen und verschwinden, wenn sie auf 0 Trefferpunkte reduziert werden oder der Zauber endet. Die beschworenen Kreaturen sind mit dir und deinen Gefährten verbündet. Würfle die Initiative für die beschworenen Kreaturen als Gruppe, die ihre eigenen Züge ausführt. Sie folgen allen verbalen Befehlen, die du ihnen erteilst (dazu brauchst du keine Aktion aufwenden). Ohne Befehle verteidigen sich die Tiere gegen feindliche Kreaturen, führen aber ansonsten keine Aktionen aus. Der SL hat die Spielwerte der Tiere zur Verfügung."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz eines höheren Grades wirkst, wählst du eine der oben beschriebenen Beschwörungsoptionen und mehr Kreaturen erscheinen: doppelt so viele Kreaturen bei einem Zauberplatz des 5. Grades, dreimal so viele bei einem des 7. Grades und viermal so viele bei einem des 9. Grades."
  },
  {
    name: "Tierform",
    schule: "Verwandlung",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 24 Stunden",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Deine Magie verwandelt andere in Tiere. Wähle eine beliebige Anzahl von bereitwilligen Kreaturen in Reichweite, die du sehen kannst. Du verleihst jedem Ziel die Gestalt eines Tieres der Größenkategorie groß oder kleiner mit Herausforderungsgrad 4 oder niedriger. Dabei kannst du für jedes Ziel eine eigene Gestalt bestimmen. In den folgenden Runden kannst du deine Aktion nutzen, um verwandelten Kreaturen eine andere Gestalt zu geben.",
      "Die Verwandlung hält für jedes Ziel für die gesamte Wirkungsdauer an, endet aber, wenn die betroffene Kreatur auf 0 Trefferpunkte reduziert wird oder stirbt. Die Spielwerte des Ziels werden durch die des gewählten Tieres ersetzt, doch behält das Ziel seine Gesinnung sowie seine Werte in Intelligenz, Weisheit und Charisma. Die betroffene Kreatur erhält die Trefferpunkte ihrer neuen Gestalt. Nimmt das Ziel wieder seine ursprüngliche Form an, besitzt es die gleiche Anzahl von Trefferpunkten wie vor der Verwandlung. Findet die Rückverwandlung statt, weil das Ziel auf 0 Trefferpunkte reduziert wird, überträgt sich jeglicher überzähliger Schaden auf die normale Gestalt. Solange dieser überzählige Schaden die Trefferpunkte der Kreatur nicht auf 0 fallen lässt, wird sie nicht bewusstlos. Die Kreatur kann nur Aktionen durchführen, die in ihrer neuen Gestalt möglich sind. Sie kann weder sprechen noch Zauber wirken.",
      "Die Ausrüstung des Ziels verschmilzt mit seiner neuen Gestalt. Die betroffene Kreatur kann keine Ausrüstung aktivieren, verwenden oder anderweitig nutzen."
    ]
  },
  {
    name: "Tierfreundschaft",
    schule: "Verzauberung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein kleiner Leckerbissen",
    klassen: ["Barde", "Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Mit diesem Zauber bist du in der Lage, ein Tier davon zu überzeugen, dass du ihm nicht schaden willst. Wähle ein Tier in Reichweite, das du sehen kannst. Es muss dich sehen und hören können. Beträgt der Intelligenzwert des Tieres 4 oder höher, schlägt der Zauber fehl. Ansonsten muss das Ziel einen erfolgreichen Weisheitsrettungswurf ablegen, um nicht für die Wirkungsdauer von dir bezaubert zu werden. Wenn du oder einer deiner Gefährten das Ziel verletzt, endet der Zauber."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 1. hinaus ein zusätzliches Tier bezaubern."
  },
  {
    name: "Tiersinn",
    schule: "Erkenntnismagie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["G"],
    material: null,
    klassen: ["Druide", "Waldläufer"],
    ritual: true,
    beschreibung: [
      "Du berührst ein bereitwilliges Tier. Für die Wirkungsdauer des Zaubers kannst du deine Aktion verwenden, um durch die Augen und Ohren des Tieres zu sehen und zu hören. Dies ist dir so lange möglich, bis du eine weitere Aktion aufwendest, um zu deinen normalen Sinnen zurückzukehren. Während du durch die Sinne des Tieres wahrnimmst, erhältst du die Vorzüge aller besonderen Sinne, welche die Kreatur besitzt, bist jedoch für deine eigene Umgebung blind und taub."
    ]
  },
  {
    name: "Todeskreis",
    schule: "Nekromantie",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "45 m",
    komponenten: ["V", "G", "M"],
    material: "der Staub einer zermahlenen schwarzen Perle im Wert von mindestens 500 GM",
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Negative Energie wogt in einer Sphäre mit einem Radius von 18 m um einen Punkt in Reichweite. Jede Kreatur in diesem Bereich muss einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet ein Ziel 8W6 nekrotischen Schaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 7. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 6. hinaus um 2W6."
  },
  {
    name: "Todesschutz",
    schule: "Bannmagie",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Paladin"],
    ritual: false,
    beschreibung: [
      "Du berührst eine Kreatur und verleihst ihr einen gewissen Schutz vor dem Tod.",
      "Das erste Mal, wenn das Ziel während der Wirkungsdauer als Folge von erlittenem Schaden auf 0 Trefferpunkte fallen würde, wird es stattdessen auf 1 Trefferpunkt reduziert und der Zauber endet.",
      "Wenn das Ziel während der Wirkungsdauer einen Effekt erleidet, der es sofort töten würde, ohne Schaden zu verursachen, wird die Kreatur stattdessen von diesem nicht betroffen und der Zauber endet."
    ]
  },
  {
    name: "Todeswolke",
    schule: "Beschwörung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine Sphäre mit einem Radius von 6 m, die mit einem giftigen, gelb-grünen Nebel erfüllt und um einen Punkt deiner Wahl in Reichweite zentriert ist.",
      "Der Nebel kann sich um Ecken ausbreiten. Er bleibt für die Wirkungsdauer bestehen oder bis ein starker Wind ihn auflöst, was den Zauber beendet. Der Bereich ist komplett verschleiert.",
      "Wenn eine Kreatur das erste Mal in einem Zug den Bereich der Sphäre betritt oder ihren Zug dort beginnt, muss sie einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet sie 5W8 Giftschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. Kreaturen werden selbst dann betroffen, wenn sie den Atem anhalten oder nicht atmen müssen.",
      "Der Nebel bewegt sich zu Beginn eines jeden deiner Züge 3 m von dir weg, wobei er wie eine zähflüssige Masse über die Oberfläche des Bodens wabert. Die Dämpfe sind schwerer als Luft, sie sinken also immer nach unten und sickern sogar Öffnungen im Boden hinab."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 6. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 5. hinaus um 1W8."
  },
  {
    name: "Tödliches Phantom",
    schule: "Illusion",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Du zapfst die Albträume einer Kreatur an, die sich in Reichweite befindet und die du sehen kannst, und erschaffst eine illusionäre Manifestation ihrer tiefsten Ängste, die nur für das Ziel sichtbar ist. Die Kreatur muss einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg wird sie für die Wirkungsdauer verängstigt. Am Ende eines jeden ihrer Züge, bis der Zauber endet, muss der Kreatur ein weiterer Weisheitsrettungswurf gelingen oder sie erleidet 4W10 psychischen Schaden. Bei einem erfolgreichen Rettungswurf endet der Zauber."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 5. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 4. hinaus um 1W10."
  },
  {
    name: "Tor",
    schule: "Beschwörung",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Diamant im Wert von mindestens 5.000 GM",
    klassen: ["Kleriker", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du beschwörst ein Portal, das einen nicht besetzten Bereich in Reichweite, den du sehen kannst, mit einem Punkt in einer anderen Existenzebene verbindet. Das Portal ist eine kreisförmige Öffnung mit einem Durchmesser zwischen 1,50 und 6 m, der du beim Wirken des Zaubers jede beliebige Ausrichtung geben kannst und die für die Wirkungsdauer bestehen bleibt. Auf jeder Ebene, auf der das Portal erscheint, hat es eine Vorder- und eine Rückseite. Reisen durch das Portal sind nur möglich, indem du dich durch die Vorderseite bewegst. Alles, was das Portal passiert, wird sofort auf die andere Ebene transportiert und erscheint im nächsten unbesetzten Bereich der Vorderseite des dortigen Portals.",
      "Gottheiten und andere Herrscher über die Ebenen können verhindern, dass sich mit diesem Zauber erschaffene Portale in ihrer Anwesenheit oder an einem Ort ihrer Domäne öffnen.",
      "Wenn du diesen Zauber wirkst, kannst du den Namen einer bestimmten Kreatur aussprechen (ein Pseudonym, Titel oder Spitzname funktioniert nicht). Befindet sich die Kreatur auf einer anderen Ebene als du, öffnet sich das Portal in unmittelbarer Nähe der benannten Kreatur und zieht sie durch das Portal hindurch zum nächsten nicht besetzten Bereich auf deiner Seite des Portals. Du erlangst keine besondere Macht über die Kreatur, und sie kann normal handeln, wie es der SL für angemessen erachtet. Sie könnte verschwinden, dich angreifen oder dir helfen."
    ]
  },
  {
    name: "Tote beleben",
    schule: "Nekromantie",
    grad: 3,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V", "G", "M"],
    material: "ein Tropfen Blut, ein Stück Fleisch und eine Prise Knochenstaub",
    klassen: ["Kleriker", "Magier"],
    ritual: false,
    beschreibung: [
      "Der Zauber erschafft einen untoten Diener. Wähle einen Knochenhaufen oder Leichnam einer humanoiden Kreatur der Größenkategorie mittelgroß oder kleiner in Reichweite. Dein Zauber erfüllt das Ziel mit einer verderbten Nachahmung des Lebens und lässt es sich als untote Kreatur erheben. Das Ziel wird ein Skelett, wenn du den Zauber auf Knochen wirkst, oder ein Zombie, wenn du ihn auf eine Leiche sprichst. (Der SL verfügt über die Spielwerte der Kreatur.)",
      "In jedem deiner Züge kannst du eine Bonusaktion verwenden, um geistig jegliche Kreatur zu befehligen, die du mit diesem Zauber erschaffen hast, solange sie sich innerhalb von 18 m befindet (kontrollierst du mehrere Kreaturen, kannst du sie entweder einzeln befehligen oder als Gruppe, wobei du ihnen allen den gleichen Befehl geben musst). Du entscheidest, welche Aktion eine Kreatur in ihrem nächsten Zug ausführt und wohin sie sich bewegt, oder du gibst ihr einen allgemeinen Befehl, wie das Bewachen eines bestimmten Raumes oder Flurs. Sobald die Kreatur einen Befehl erhalten hat, führt sie ihn aus, bis die Aufgabe abgeschlossen ist. Ohne Befehle verteidigt sich ein untoter Diener gegen feindliche Kreaturen, führt aber ansonsten keine Aktionen aus.",
      "Die Kreatur steht für 24 Stunden unter deiner Kontrolle, danach folgt sie keinem deiner Befehle mehr. Um die Kontrolle über den untoten Diener für weitere 24 Stunden zu behalten, musst du den Zauber vor Ablauf der ersten 24 Stunden erneut auf die Kreatur wirken. Setzt du den Zauber auf diese Weise ein, stellst du die Kontrolle über bis zu vier Kreaturen wieder her, die du mit diesem Zauber belebt hast, anstatt einen neuen Diener zu erschaffen."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 3. hinaus zwei zusätzliche untote Kreaturen erschaffen oder wieder unter deine Kontrolle bringen. Für jede Kreatur benötigst du eine separate Leiche oder einen separaten Knochenhaufen."
  },
  {
    name: "Tote erwecken",
    schule: "Nekromantie",
    grad: 5,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Diamant im Wert von mindestens 500 GM, der beim Wirken des Zaubers verbraucht wird",
    klassen: ["Barde", "Kleriker", "Paladin"],
    ritual: false,
    beschreibung: [
      "Du holst eine verstorbene Kreatur ins Leben zurück, vorausgesetzt sie ist nicht länger als 10 Tage tot. Wenn die Seele des Ziels frei und willig ist, wird die Kreatur mit 1 Trefferpunkt wiederbelebt. Der Zauber neutralisiert alle Gifte und heilt nicht-magische Krankheiten, unter denen das Ziel zum Zeitpunkt seines Todes litt. Er kann jedoch keine magischen Krankheiten, Flüche oder ähnlichen Effekte aufheben. Werden diese nicht vor dem Wirken des Zaubers entfernt, treten sie wieder in Kraft, wenn die Kreatur zum Leben erwacht. Untote Kreaturen können nicht als Ziel gewählt werden.",
      "Der Zauber schließt alle tödlichen Wunden, stellt aber keine abgetrennten Gliedmaßen wieder her. Fehlen der Kreatur Körperteile oder Organe, die zum Überleben notwendig sind, wie der Kopf, schlägt der Zauber automatisch fehl.",
      "Von den Toten zurückzukehren ist eine wahre Prüfung für das Ziel. Es erleidet einen Malus von -4 auf alle Angriffs-, Rettungs- und Attributswürfe. Immer wenn es eine lange Rast beendet, reduziert sich der Malus um 1, bis er aufgehoben ist."
    ]
  },
  {
    name: "Totstellen",
    schule: "Nekromantie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Graberde",
    klassen: ["Barde", "Kleriker", "Druide", "Magier"],
    ritual: true,
    beschreibung: [
      "Du berührst eine bereitwillige Kreatur und lässt sie in einen reglosen Zustand verfallen, der vom Tod nicht zu unterscheiden ist. Für die Wirkungsdauer oder bis du eine Aktion verwendest, um das Ziel zu berühren und den Zauber aufzuheben, scheint die betroffene Kreatur bei jeder äußerlichen Untersuchung tot zu sein. Der Effekt täuscht auch Zauber, die den Status des Ziels ermitteln. Das Ziel ist blind und kampfunfähig und seine Bewegungsrate sinkt auf 0.",
      "Die betroffene Kreatur erhält eine Resistenz gegen jeden Schaden außer psychischem. Ist das Ziel krank oder vergiftet, wenn du den Zauber wirkst, oder erhält es einen dieser Zustände während der Wirkungsdauer, haben das Gift oder die Krankheit keinen Effekt, bis der Zauber endet."
    ]
  },
  {
    name: "Traum",
    schule: "Illusion",
    grad: 5,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "speziell",
    komponenten: ["V", "G", "M"],
    material: "eine Handvoll Sand, ein Klecks Tinte und eine Schreibfeder, die einem schlafenden Vogel ausgerupft wurde",
    klassen: ["Barde", "Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Der Zauber formt die Träume einer Kreatur. Wähle eine Kreatur als Ziel, die du kennst und die sich auf derselben Existenzebene befindet wie du. Kreaturen, die nicht schlafen, so wie Elfen, können von diesem Zauber nicht betroffen werden. Du oder eine bereitwillige Kreatur, die du berührst, verfällt in Trance und dient als Bote.",
      "Solange sich der Bote in der Trance befindet, ist er sich seiner Umgebung bewusst, kann aber keine Aktionen ausführen und sich nicht bewegen. Wenn das Ziel schläft, erscheint der Bote für die Wirkungsdauer in seinen Träumen und kann mit dem Ziel sprechen. Der Bote vermag auch die Umgebung des Traums zu gestalten, indem er Landschaften, Gegenstände und andere Bilder formt. Er ist in der Lage, die Trance jederzeit zu verlassen, was den Zauber vorzeitig beendet. Das Ziel erinnert sich beim Erwachen perfekt an den Traum. Ist das Ziel wach, wenn du den Zauber wirkst, weiß der Bote dies und kann entweder die Trance (und den Zauber) beenden oder warten, bis das Ziel einschläft, und dann in dessen Träumen erscheinen.",
      "Es ist dir möglich, den Boten für das Ziel monströs und erschreckend aussehen zu lassen. In diesem Fall kann der Bote eine Nachricht von maximal zehn Wörtern überbringen, und das Ziel muss einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg erzeugen die Echos der gespenstischen Monstrosität einen Albtraum, der für die Dauer des Schlafs anhält und verhindert, dass das Ziel Nutzen aus der Rast ziehen kann. Wenn das Ziel erwacht, erleidet es außerdem 3W6 psychischen Schaden. Besitzt du eine Haarlocke, Fingernägel oder etwas Ähnliches vom Körper des Ziels, ist dieses bei dem Rettungswurf im Nachteil."
    ]
  },
  {
    name: "Trugbild projizieren",
    schule: "Illusion",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Tag",
    konzentration: true,
    reichweite: "750 km",
    komponenten: ["V", "G", "M"],
    material: "eine kleine Replik von dir aus Materialien, die mindestens 5 GM wert sind",
    klassen: ["Barde", "Magier"],
    ritual: false,
    beschreibung: [
      "Du erschaffst ein illusionäres Abbild von dir selbst, das für die Wirkungsdauer bestehen bleibt. Das Trugbild kann an einem beliebigen Ort in Reichweite erscheinen, den du schon einmal gesehen hast. Die Illusion sieht aus und klingt genau wie du, ist aber unberührbar. Erleidet sie Schaden, verschwindet sie und der Zauber endet. Du kannst deine Aktion verwenden, um das Trugbild bis zu deiner doppelten Bewegungsrate zu bewegen und es gestikulieren, sprechen oder auf jede andere Art handeln zu lassen. Die Illusion ahmt dein Verhalten perfekt nach.",
      "Außerdem kannst du durch die Augen und Ohren des Trugbilds sehen und hören, als würdest du dich an dessen Standort befinden. In jedem deiner Züge kannst du als Bonusaktion zwischen deinen Sinnen und denen des Trugbilds wechseln. Solange du die Sinne der Illusion nutzt, bist du blind und taub für deine eigene Umgebung.",
      "Körperliche Interaktion mit dem Trugbild offenbart, dass es sich um eine Illusion handelt, da Dinge es einfach durchdringen. Eine Kreatur kann ihre Aktion verwenden, um das Abbild zu untersuchen. Gelingt ihr ein Wurf auf Intelligenz (Nachforschungen) gegen den SG zum Widerstehen deiner Zauber, erkennt sie, dass es sich um eine Illusion handelt. Durchschaut eine Kreatur die Illusion, kann sie das Abbild und von ihm ausgehende Geräusche ignorieren."
    ]
  },
  {
    name: "Tsunami",
    schule: "Beschwörung",
    grad: 8,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "Konzentration, bis zu 6 Runden",
    konzentration: true,
    reichweite: "Sicht",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Eine gigantische Welle aus Wasser erhebt sich an einem Punkt deiner Wahl in Reichweite. Sie bleibt für die Wirkungsdauer bestehen und ist bis zu 90 m lang, 90 m hoch und 15 m dick.",
      "Erschaffst du die Welle, müssen alle Kreaturen in ihrem Bereich einen Stärkerettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 6W10 Wuchtschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "Zu Beginn eines jeden deiner Züge nach Erscheinen der Welle bewegt sich diese zusammen mit allen Kreaturen in ihr 15 m von dir weg. Jeder Kreatur der Größenkategorie riesig oder kleiner, die sich in der Welle befindet oder in deren Bereich diese eindringt, muss ein Stärkerettungswurf gelingen, um nicht 5W10 Wuchtschaden zu erleiden. Eine Kreatur kann diesen Schaden nur einmal pro Runde erleiden. Am Ende des Zuges sinkt die Höhe der Welle um 15 m und der Schaden um 1W10, den betroffene Kreaturen in den folgenden Runden erleiden. Verringert sich die Höhe der Welle auf 0 m, endet der Zauber.",
      "Eine Kreatur, die in der Wasserwand gefangen ist, kann sich schwimmend bewegen. Aufgrund der Kraft der Welle muss die Kreatur jedoch einen erfolgreichen Wurf auf Stärke (Athletik) gegen den SG zum Widerstehen deiner Zauber ablegen, um sich überhaupt bewegen zu können. Eine Kreatur, die sich aus dem Bereich des Zaubers entfernt, fällt zu Boden."
    ]
  },
  {
    name: "Unauffindbarkeit",
    schule: "Bannmagie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Diamantstaub im Wert von 25 GM, die über das Ziel gestreut und beim Wirken des Zaubers verbraucht wird",
    klassen: ["Barde", "Waldläufer", "Magier"],
    ritual: false,
    beschreibung: [
      "Für die Wirkungsdauer verbirgst du ein Ziel, das du berührst, vor Erkenntnismagie. Das Ziel kann eine bereitwillige Kreatur, ein Ort oder ein Gegenstand sein, der in keiner Ausdehnung größer als 3 m ist. Das Ziel kann weder Ziel von Erkenntnismagie werden noch durch magische Sensoren wahrgenommen werden."
    ]
  },
  {
    name: "Unheimliches Schicksal",
    schule: "Illusion",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Du zapfst die tiefsten Ängste einer Gruppe von Kreaturen an und erschaffst illusionäre Monstrositäten im Verstand jedes Ziels, die nur dieses allein sehen kann. Alle Kreaturen in einem Radius von 9 m, zentriert um einen Punkt deiner Wahl in Reichweite, müssen einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg wird ein Ziel für die Wirkungsdauer verängstigt. Die Illusion manifestiert die schlimmsten Albträume einer Kreatur als unaufhaltsame Bedrohung. Am Ende eines jeden ihrer Züge muss einer betroffenen Kreatur ein Weisheitsrettungswurf gelingen, um nicht 4W10 psychischen Schaden zu erleiden. Bei einem erfolgreichen Rettungswurf endet der Zauber für die Kreatur."
    ]
  },
  {
    name: "Unsichtbarer Diener",
    schule: "Beschwörung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Schnur und etwas Holz",
    klassen: ["Barde", "Hexenmeister", "Magier"],
    ritual: true,
    beschreibung: [
      "Der Zauber erschafft eine unsichtbare, mittelgroße geist- und formlose Kraft, die auf dein Geheiß einfache Aufgaben erfüllt, bis der Zauber endet. Dein unsichtbarer Diener erscheint in einem nicht besetzten Bereich am Boden innerhalb der Reichweite. Er hat RK 10, verfügt über 1 Trefferpunkt, besitzt eine Stärke von 2 und kann nicht angreifen. Fallen seine Trefferpunkte auf 0, endet der Zauber.",
      "Einmal in jedem deiner Züge kannst du dem Diener als Bonusaktion den geistigen Befehl geben, sich bis zu 4,50 m zu bewegen und mit einem Gegenstand zu interagieren. Der Diener ist in der Lage, einfache Aufgaben zu übernehmen, die auch ein menschlicher Diener leisten könnte. Er kann Gegenstände holen, reinigen und reparieren, Kleider zusammenlegen, Feuer anzünden, Essen servieren und Wein einschenken. Sobald du einen Befehl erteilst, erfüllt der Diener diesen nach besten Möglichkeiten, bis die Aufgabe erledigt ist. Dann wartet er auf den nächsten Befehl.",
      "Wenn du dem Diener befiehlst, eine Aufgabe zu erfüllen, für die er sich mehr als 18 m von dir entfernen müsste, endet der Zauber."
    ]
  },
  {
    name: "Unsichtbares Sehen",
    schule: "Erkenntnismagie",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "selbst",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Talkum und eine geringe Menge Silberpulver",
    klassen: ["Barde", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Für die Wirkungsdauer ist es dir möglich, unsichtbare Kreaturen und Gegenstände zu sehen, als seien sie normal sichtbar. Außerdem erhältst du die Fähigkeit, in die Ätherebene zu blicken. Ätherische Kreaturen und Gegenstände erscheinen geisterhaft und durchscheinend."
    ]
  },
  {
    name: "Unsichtbarkeit",
    schule: "Illusion",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "eine Wimper, die von Gummiarabikum umschlossen ist",
    klassen: ["Barde", "Hexenmeister", "Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Eine Kreatur, die du berührst, wird unsichtbar, bis der Zauber endet. Alles, was das Ziel trägt oder in der Hand hält, wird ebenfalls unsichtbar, solange es sich am Körper der Kreatur befindet. Der Zauber endet für das betroffene Ziel, wenn dieses angreift oder einen Zauber wirkt."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 2. hinaus eine zusätzliche Kreatur als Ziel wählen."
  },
  {
    name: "Untote erschaffen",
    schule: "Nekromantie",
    grad: 6,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V", "G", "M"],
    material: "ein Tontopf gefüllt mit Graberde und ein weiterer Tontopf gefüllt mit abgestandenem Wasser, außerdem je ein schwarzer Onyx im Wert von 150 GM für jeden Leichnam",
    klassen: ["Kleriker", "Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du kannst diesen Zauber nur bei Nacht wirken. Wähle bis zu drei Leichname von humanoiden Kreaturen der Größenkategorie mittelgroß oder kleiner in Reichweite. Jede Leiche wird ein Ghul, der unter deinem Befehl steht. (Der SL verfügt über die Spielwerte für diese Kreaturen.)",
      "In jedem deiner Züge kannst du eine Bonusaktion verwenden, um geistig jegliche Kreatur zu befehligen, die du mit diesem Zauber erschaffen hast, solange sie sich innerhalb von 36 m befindet (kontrollierst du mehrere Kreaturen, kannst du sie entweder einzeln befehligen oder als Gruppe, wobei du ihnen allen den gleichen Befehl geben musst). Du entscheidest, welche Aktion eine Kreatur in ihrem nächsten Zug ausführt und wohin sie sich bewegt, oder du gibst ihr einen allgemeinen Befehl, wie das Bewachen eines bestimmten Raumes oder Flurs. Sobald die Kreatur einen Befehl erhalten hat, führt sie ihn aus, bis die Aufgabe abgeschlossen ist. Ohne Befehle verteidigt sich ein Ghul gegen feindliche Kreaturen, führt aber ansonsten keine Aktionen aus.",
      "Die Kreatur steht für 24 Stunden unter deiner Kontrolle, danach folgt sie keinem deiner Befehle mehr. Um die Kontrolle über den Ghul für weitere 24 Stunden zu behalten, musst du den Zauber vor Ablauf der ersten 24 Stunden erneut auf die Kreatur wirken. Setzt du den Zauber auf diese Weise ein, stellst du die Kontrolle über bis zu drei Kreaturen wieder her, die du mit diesem Zauber belebt hast, anstatt einen neuen Ghul zu erschaffen."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz eines höheren Grades wirkst, kannst du mehr untote Kreaturen erschaffen und wieder unter deine Kontrolle bringen: vier Ghule bei einem Zauberplatz des 7. Grades; fünf Ghule, zwei Grule oder zwei Gruftschrecken bei einem des 8. Grades; sechs Ghule, drei Grule, drei Gruftschrecken oder zwei Mumien bei einem des 9. Grades."
  },
  {
    name: "Vampirgriff",
    schule: "Nekromantie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Die Berührung deiner in Schatten gehüllten Hand vermag anderen Kreaturen die Lebenskraft auszusaugen, um dich zu heilen. Führe einen Nahkampf-Zauberangriff gegen eine Kreatur innerhalb deiner Reichweite aus. Bei einem Treffer erleidet das Ziel 3W6 nekrotischen Schaden, während du Trefferpunkte in Höhe dieses Schadens zurückerlangst. Bis der Zauber endet, kannst du den Angriff in jedem deiner Züge als Aktion wiederholen."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 3. hinaus um 1W6."
  },
  {
    name: "Verarbeitung",
    schule: "Verwandlung",
    grad: 4,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magier", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du wandelst Rohmaterialien in ein Erzeugnis des gleichen Materials um. Beispielsweise kannst du aus einem Stück Baum eine hölzerne Brücke erschaffen, ein Seil aus einem Hanffeld und Kleider aus Flachs oder Wolle.",
      "Wähle Rohmaterialien in Reichweite, die du sehen kannst. Du bist in der Lage, aus ihnen Gegenstände der Größenkategorie groß oder kleiner zu erschaffen (die in einen Würfel mit 3 m Kantenlänge passen oder in acht verbundene Würfel mit jeweils 1,50 m Kantenlänge), solange du über ausreichend Rohmaterialien verfügst. Wenn du mit Metall, Stein oder anderen mineralischen Substanzen arbeitest, darf der gefertigte Gegenstand maximal mittelgroß sein (ein Würfel mit einer Kantenlänge von bis zu 1,50 m).",
      "Die Qualität der Gegenstände, die du mit dem Zauber erschaffst, hängt von der Qualität der Rohmaterialien ab.",
      "Kreaturen oder magische Gegenstände können durch diesen Zauber weder erschaffen noch verwandelt werden. Es ist ebenfalls nicht möglich, Gegenstände zu formen, die ein großes Ausmaß an Kunstfertigkeit erfordern, wie Schmuck, Waffen, Glas oder Rüstung – außer du bist geübt mit der Art von Handwerkszeug, die für die Herstellung solcher Gegenstände erforderlich ist."
    ]
  },
  {
    name: "Verbannendes Niederstrecken",
    schule: "Bannmagie",
    grad: 5,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Das nächste Mal, wenn du innerhalb der Wirkungsdauer des Zaubers eine Kreatur mit einer Nahkampfwaffe triffst, knistert deine Waffe vor magischer Energie und verursacht zusätzlich 5W10 Energieschaden. Sollte dieser Angriff das Ziel auf 50 Trefferpunkte oder weniger reduzieren, wird es verbannt. Ist das Ziel auf einer anderen Existenzebene heimisch als der, auf der du dich gerade befindest, kehrt es auf seine Heimatebene zurück. Wenn es hingegen auf der Ebene heimisch ist, auf der du dich befindest, verschwindet die Kreatur auf eine ungefährliche Halbebene. Das Ziel verbleibt dort und ist kampfunfähig, bis der Zauber endet. Anschließend erscheint es in dem Bereich, den es verlassen hat, oder im nächsten freien Bereich, falls dieser besetzt ist."
    ]
  },
  {
    name: "Verbannung",
    schule: "Bannmagie",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Gegenstand, der dem Ziel zuwider ist",
    klassen: ["Kleriker", "Paladin", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du versuchst eine Kreatur in Reichweite, die du sehen kannst, auf eine andere Existenzebene zu verbannen. Das Ziel muss einen erfolgreichen Charismarettungswurf ablegen, um dem Effekt des Zaubers zu widerstehen.",
      "Wenn das Ziel auf der Ebene heimisch ist, auf der du dich befindest, verbannst du die Kreatur auf eine ungefährliche Halbebene. Das Ziel verbleibt dort und ist kampfunfähig, bis der Zauber endet. Anschließend erscheint es in dem Bereich, den es verlassen hat, oder im nächsten freien Bereich, falls dieser besetzt ist.",
      "Ist das Ziel auf einer anderen Existenzebene heimisch als der, auf der du dich gerade befindest, wird es mit einem leisen Knall verbannt und kehrt auf seine Heimatebene zurück. Wenn der Zauber vor Ablauf der Wirkungsdauer endet, erscheint das Ziel wieder in dem Bereich, den es verlassen hat, oder im nächsten freien Bereich, falls dieser besetzt ist. Ansonsten kehrt das Ziel nicht zurück."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 5. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 4. hinaus eine zusätzliche Kreatur als Ziel wählen."
  },
  {
    name: "Verbergen",
    schule: "Verwandlung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "bis der Zauber gebannt wird",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Pulver aus Diamant-, Smaragd-, Rubin- und Saphirstaub im Wert von mindestens 5.000 GM, das beim Wirken des Zaubers verbraucht wird",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Mit diesem Zauber kannst du eine bereitwillige Kreatur oder einen Gegenstand verbergen, sodass das Ziel für die Wirkungsdauer nicht erkannt werden kann. Wenn du den Zauber wirkst und das Ziel berührst, wird es unsichtbar und kann weder von Erkenntniszaubern aufgespürt noch durch magische Sensoren wahrgenommen werden, die mit Erkenntniszaubern erschaffen wurden.",
      "Wenn das Ziel eine Kreatur ist, verfällt sie in einen Zustand des Scheintods. Die Zeit hört für das Ziel auf zu vergehen und es altert nicht.",
      "Du kannst eine Bedingung festlegen, die den Zauber bei Erfüllung früher enden lässt. Diese Bedingung kann jeder beliebige Umstand deiner Wahl sein, aber er muss sich innerhalb von 1,5 km um das Ziel ereignen. Beispiele sind „nach 10.000 Jahren” oder „wenn die Tarraske erwacht”. Der Zauber endet auch, wenn das Ziel Schaden erleidet."
    ]
  },
  {
    name: "Verbündeter aus den Ebenen",
    schule: "Beschwörung",
    grad: 6,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Du erflehst die Unterstützung einer außerweltlichen Wesenheit, die dir bekannt sein muss: ein Gott, eine Elementarmacht, ein Dämonenprinz oder ein anderes Wesen kosmischer Macht. Die Wesenheit schickt einen ihm gegenüber loyalen Diener (einen Elementar, einen Unhold oder ein celestisches Wesen), um dich zu unterstützen, wobei die Kreatur in einem nicht besetzten Bereich in Reichweite erscheint. Wenn du den wahren Namen einer Kreatur kennst, kannst du ihn beim Wirken des Zaubers aussprechen, um diese Kreatur zu erbitten, es ist jedoch trotzdem möglich, dass eine andere gesandt wird (nach Entscheidung des SL).",
      "Wenn die Kreatur erscheint, ist sie nicht gezwungen, sich auf eine bestimmte Weise zu verhalten. Du kannst sie bitten, einen Dienst für eine Bezahlung auszuführen, aber sie muss deinem Gesuch nicht entsprechen. Die erbetene Aufgabe könnte einfach sein („Bringe uns über diesen Abgrund”, „Unterstütze uns in einem Kampf”) oder komplex („Spioniere unsere Feinde aus”, „Schütze uns während unserer Expedition in das Gewölbe”). Du musst mit der Kreatur kommunizieren können, damit du in der Lage bist, um ihre Dienste zu feilschen.�",
      "Die Bezahlung kann verschiedene Formen annehmen. Ein celestisches Wesen fordert vielleicht eine beträchtliche Spende an Gold oder magischen Gegenständen, ein Unhold könnte ein lebendes Opfer oder einen Schatz als Gegenleistung erwarten. Andere Kreaturen bieten ihre Dienste möglicherweise für eine Queste an, die du für sie durchführen musst. Als Faustregel erfordert eine Aufgabe, die in Minuten gemessen werden kann, eine Bezahlung von 100 GM pro Minute. Eine Aufgabe, die in Stunden gemessen wird, kostet 1.000 GM pro Stunde. Eine Aufgabe, die in Tagen gemessen wird (maximal 10 Tage) kostet 10.000 GM pro Tag. Der SL kann diese Bezahlung abhängig von den Umständen anpassen, unter denen der Zauber gewirkt wird. Wenn die erbetene Aufgabe im Einklang mit den Moralvorstellungen der Kreatur steht, kann die Bezahlung halbiert werden oder sogar ganz entfallen. Ungefährliche Aufgaben erfordern für gewöhnlich nur die Hälfte der genannten Bezahlung, während besonders gefährliche ein größeres Geschenk voraussetzen könnten.",
      "Eine solche Kreatur nimmt selten Aufgaben an, die selbstmörderisch erscheinen. Wenn die Aufgabe erfüllt ist oder die abgesprochene Dauer des Dienstes endet, kehrt die Kreatur auf ihre Heimatebene zurück, nachdem sie dir Bericht erstattet hat, falls das zur Aufgabe passt und möglich ist. Gelingt es dir nicht, dich mit der Kreatur auf einen Preis für ihren Dienst zu einigen, kehrt sie sofort auf ihre Heimatebene zurück. Eine Kreatur, die verpflichtet wird, als Teil der Gruppe zu dienen, zählt als volles Mitglied und erhält ihren vollen Anteil an Erfahrungspunkten."
    ]
  },
  {
    name: "Verderben",
    schule: "Verzauberung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein Tropfen Blut",
    klassen: ["Barde", "Kleriker"],
    ritual: false,
    beschreibung: [
      "Bis zu drei Kreaturen deiner Wahl in Reichweite, die du sehen kannst, müssen einen Charismarettungswurf ablegen. Immer wenn ein Ziel, dem sein Rettungswurf nicht gelungen ist, während der Wirkungsdauer des Zaubers einen Angriffs- oder Rettungswurf ausführt, muss es mit einem W4 würfeln und das Ergebnis vom Angriffs- oder Rettungswurf abziehen."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 1. hinaus eine zusätzliche Kreatur als Ziel wählen."
  },
  {
    name: "Vergrößern/Verkleinern",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Eisenpulver",
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du lässt eine Kreatur oder einen Gegenstand, der weder getragen noch in der Hand gehalten werden darf, für die Wirkungsdauer größer oder kleiner werden. Das Ziel muss sich in Reichweite befinden und du musst es sehen können. Ist das Ziel eine unwillige Kreatur, muss es einen Konstitutionsrettungswurf ablegen. Bei einem Erfolg hat der Zauber keinen Effekt.",
      "Wirkst du den Zauber auf eine Kreatur, verändert nicht nur sie ihre Größe, sondern auch alles, was sie trägt und in der Hand hält. Jeder Gegenstand, den eine betroffene Kreatur fallen lässt, nimmt sofort wieder seine normale Gestalt an.",
      "Vergrößern: Die Größe des Ziels verdoppelt sich in jeder Ausdehnung und sein Gewicht verachtfacht sich. Dieses Wachstum lässt es um eine Größenkategorie steigen (beispielsweise von mittelgroß zu groß). Verhindert der verfügbare Raum, dass das Ziel seine Größe verdoppelt, erreicht die Kreatur oder der Gegenstand die maximale Größe, die aufgrund der Gegebenheiten möglich ist. Bis zum Ende des Zaubers ist das Ziel außerdem im Vorteil bei Stärkewürfen und Stärkerettungswürfen. Die Waffen des Ziels wachsen ebenfalls mit, um der neuen Größe zu entsprechen. Greift das Ziel mit vergrößerten Waffen an, verursacht es mit ihnen zusätzlich 1W4 Schaden.",
      "Verkleinern: Die Größe des Ziels halbiert sich in jeder Ausdehnung und sein Gewicht fällt auf ein Achtel des ursprünglichen Gewichts. Diese Verkleinerung lässt es um eine Größenkategorie schrumpfen (beispielsweise von mittelgroß zu klein). Bis zum Ende des Zaubers ist das Ziel außerdem im Nachteil bei Stärkewürfen und Stärkerettungswürfen. Die Waffen des Ziels schrumpfen ebenfalls mit, um der neuen Größe zu entsprechen. Greift das Ziel mit verkleinerten Waffen an, verursacht es mit ihnen 1W4 Schaden weniger (dies kann den Schaden nicht unter 1 fallen lassen)."
    ]
  },
  {
    name: "Verlangsamen",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein Tropfen Melasse",
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du verlangsamst den Fluss der Zeit um sechs Kreaturen deiner Wahl, die sich in einem Würfel mit 12 m Kantenlänge innerhalb der Reichweite befinden. Jedes Ziel muss einen erfolgreichen Weisheitsrettungswurf ablegen, um nicht für die Wirkungsdauer von dem Effekt des Zaubers betroffen zu werden.",
      "Die Bewegungsrate eines betroffenen Ziels wird halbiert, es erleidet einen Malus von -2 auf die RK sowie Geschicklichkeitsrettungswürfe und kann keine Reaktionen verwenden. In seinem Zug darf es entweder nur eine Aktion oder nur eine Bonusaktion nutzen, nicht beides. Unabhängig von Merkmalen und magischen Gegenständen der Kreatur, kann sie in ihrem Zug nicht mehr als einen Nahkampf- oder Fernkampfangriff ausführen.",
      "Wenn die Kreatur versucht, einen Zauber mit einem Zeitaufwand von einer Aktion zu wirken, würfle mit einem W20. Bei einer 11 oder höher tritt der Zauber erst im nächsten Zug der Kreatur in Kraft. Außerdem muss sie auch in diesem nächsten Zug ihre Aktion aufwenden, um den Spruch zu vollenden. Kann sie dies nicht, ist der Zauber vergeudet.",
      "Eine Kreatur, die von dem Zauber betroffen ist, darf am Ende jedes ihrer Züge einen weiteren Weisheitsrettungswurf ablegen. Bei einem Erfolg endet der Effekt für sie."
    ]
  },
  {
    name: "Verschonung der Sterbenden",
    schule: "Nekromantie",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du berührst eine lebende Kreatur mit 0 Trefferpunkten. Das Ziel wird stabilisiert. Der Zauber hat keine Auswirkungen auf Untote oder Konstrukte."
    ]
  },
  {
    name: "Verschwimmen",
    schule: "Illusion",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Magier", "Magieschmied", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Dein Körper wird verschwommen, wechselhaft und wabernd für alle, die dich sehen können. Für die Wirkungsdauer sind alle Kreaturen im Nachteil bei Angriffswürfen gegen dich. Ein Angreifer ist immun gegen diesen Effekt, wenn er sich nicht auf seine Sicht verlässt wie bei Blindsicht oder er Illusionen durchschauen kann wie bei wahrer Sicht."
    ]
  },
  {
    name: "Verständigung",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Runde",
    konzentration: false,
    reichweite: "unbegrenzt",
    komponenten: ["V", "G", "M"],
    material: "ein kurzes Stück feinen Kupferdrahtes",
    klassen: ["Barde", "Kleriker", "Magier"],
    ritual: false,
    beschreibung: [
      "Du schickst eine kurze Botschaft von 25 Wörtern oder weniger an eine Kreatur, mit der du vertraut bist. Die Kreatur hört die Nachricht in ihren Gedanken, erfasst dich als den Sender, sofern sie dich kennt, und kann sofort auf die gleiche Weise antworten. Der Zauber erlaubt es Kreaturen mit einem Intelligenzwert von mindestens 1, die Bedeutung der Nachricht zu verstehen. Du kannst die Nachricht über jede Entfernung und sogar auf andere Existenzebenen schicken. Befindet sich dein Ziel allerdings auf einer anderen Ebene, besteht eine Chance von 5 %, dass die Botschaft nicht ankommt."
    ]
  },
  {
    name: "Verstricken",
    schule: "Beschwörung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Umschlingende Gräser und Ranken wachsen in einem quadratischen Bereich mit 6 m Seitenlänge in Reichweite aus dem Boden. Für die Wirkungsdauer verwandeln diese Pflanzen den Boden in schwieriges Gelände.",
      "Jede Kreatur, die sich in dem Bereich aufhält, wenn du den Zauber wirkst, muss einen erfolgreichen Stärkerettungswurf ablegen, um nicht für die Wirkungsdauer von den umschlingenden Pflanzen festgesetzt zu werden. Eine Kreatur, die von den Pflanzen festgesetzt ist, kann als Aktion einen Stärkewurf gegen den SG zum Widerstehen deiner Zauber ablegen. Bei einem Erfolg kann sie sich befreien.",
      "Wenn der Zauber endet, verdorren die beschworenen Pflanzen."
    ]
  },
  {
    name: "Vertrauten finden",
    schule: "Beschwörung",
    grad: 1,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "unmittelbar",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V", "G", "M"],
    material: "Holzkohle, Weihrauch und Kräuter im Wert von 10 GM, die in einer Feuerschale aus Messing von Flammen verzehrt werden",
    klassen: ["Magier"],
    ritual: true,
    beschreibung: [
      "Du erhältst die Dienste eines Vertrauten, eines Geistes, der die Gestalt eines der folgenden Tiere deiner Wahl annimmt: Eidechse, Eule, Falke, Fisch (Quipper), Fledermaus, Frosch (Kröte), Giftschlange, Katze, Krabbe, Oktopus, Rabe, Ratte, Seepferdchen, Spinne oder Wiesel. Der Vertraute erscheint in einem nicht besetzten Bereich in Reichweite und besitzt die Spielwerte der ausgewählten Gestalt, ist jedoch ein celestisches Wesen, ein Feenwesen oder ein Unhold (deine Wahl) und kein Tier.",
      "Dein Vertrauter agiert unabhängig von dir, folgt aber immer deinen Befehlen. Im Kampf würfelt er seine eigene Initiative und handelt selbstständig. Ein Vertrauter kann nicht angreifen, aber alle anderen Aktionen ausführen.",
      "Fallen die Trefferpunkte des Vertrauten auf 0, verschwindet er und lässt keine physische Form zurück. Er erscheint wieder, wenn du den Zauber erneut wirkst. Als Aktion kannst du deinen Vertrauten kurzzeitig fortschicken. Er verschwindet in einer Taschendimension, wo er auf deinen Ruf wartet. Alternativ kannst du ihn für immer fortschicken. Solange der Vertraute fortgeschickt ist, kannst du eine Aktion verwenden, um ihn in einem nicht besetzten Bereich innerhalb von 9 m erscheinen zu lassen. Wenn die Trefferpunkte des Vertrauten auf 0 fallen oder er in der Taschendimension verschwindet, bleiben in seinem Bereich seine Kleidung und Ausrüstung zurück.",
      "Solange sich dein Vertrauter innerhalb von 30 m aufhält, bist du in der Lage, telepathisch mit ihm zu kommunizieren. Außerdem kannst du als Aktion bis zum Beginn deines nächsten Zuges durch die Augen und Ohren deines Vertrauten sehen und hören, als würdest du dich an seinem Standort befinden. Dabei stehen dir alle besonderen Sinne des Vertrauten zur Verfügung. Während dieser Zeit bist du taub und blind für deine eigene Umgebung.",
      "Du kannst nicht mehr als einen Vertrauten gleichzeitig haben. Wenn du diesen Zauber wirkst, obwohl du bereits über einen Vertrauten verfügst, lässt du ihn stattdessen eine neue Gestalt annehmen. Wähle eins der oben genannten Tiere, in das sich dein Vertrauter verwandelt.",
      "Wenn du außerdem einen Zauber mit der Reichweite Berührung wirkst, kann dein Vertrauter diesen überbringen, als hättest du ihn gewirkt. Dein Vertrauter muss sich innerhalb von 30 m von dir befinden und seine Reaktion verwenden, um den Zauber zu überbringen, wenn du ihn wirkst. Erfordert der Zauber einen Angriffswurf, verwende deinen Angriffsmodifikator für den Wurf."
    ]
  },
  {
    name: "Verwandlung",
    schule: "Verwandlung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "Kokon einer Raupe",
    klassen: ["Barde", "Druide", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber verwandelt eine Kreatur in Reichweite, die du sehen kannst, in eine neue Gestalt. Einem unwilligen Ziel muss ein Weisheitsrettungswurf gelingen, um den Effekt zu vermeiden. Der Zauber hat keine Auswirkungen auf Gestaltwandler oder Kreaturen mit 0 Trefferpunkten.",
      "Die Transformation hält für die Wirkungsdauer an oder bis das Ziel auf 0 Trefferpunkte fällt oder stirbt. Die neue Gestalt kann die eines beliebigen Tieres sein, dessen Herausforderungsgrad gleich oder niedriger ist als der des Ziels (wenn das Ziel keinen Herausforderungsgrad hat, verwende seine Stufe). Die Spielwerte des Ziels, inklusive der geistigen Attribute, werden durch die des ausgewählten Tieres ersetzt. Die betroffene Kreatur behält ihre Gesinnung und Persönlichkeit und erhält die Trefferpunkte der neuen Gestalt. Nimmt das Ziel wieder seine ursprüngliche Form an, besitzt es die gleiche Anzahl von Trefferpunkten wie vor der Verwandlung. Findet die Rückverwandlung statt, weil die Trefferpunkte des Ziels auf 0 fallen, wird jeglicher überzähliger Schaden auf die normale Gestalt übertragen. Solange dieser überzählige Schaden die Trefferpunkte der Kreatur nicht auf 0 reduziert, wird sie nicht bewusstlos.",
      "Die Kreatur kann nur die Aktionen durchführen, die in ihrer neuen Gestalt möglich sind. Es ist ihr weder möglich zu sprechen noch Zauber zu wirken. Die Ausrüstung des Ziels verschmilzt mit seiner neuen Gestalt, es kann keine Ausrüstung aktivieren, verwenden oder anderweitig nutzen."
    ]
  },
  {
    name: "Verwirrung",
    schule: "Verzauberung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "90 m",
    komponenten: ["V", "G", "M"],
    material: "drei Nussschalen",
    klassen: ["Barde", "Druide", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber greift in den Verstand von bis zu 10 Kreaturen deiner Wahl ein, die du sehen kannst und die sich innerhalb eines Bereichs mit 3 m Radius befinden, der sich innerhalb der Reichweite befindet. Jedes Ziel muss einen Weisheitsrettungswurf durchführen.",
      "Bei einem Misserfolg ist das Ziel von diesem Zauber betroffen und muss am Ende eines jeden seiner Züge einen W10 werfen, um das jeweilige Verhalten zu ermitteln:",
      {
        typ: "tabelle",
        kopfzeile: ["W10", "Verhalten"],
        zeilen: [
          ["1", "Die Kreatur greift eine zufällig ausgewählte Kreatur an, die sich in ihrer Nähe befindet."],
          ["2–6", "Die Kreatur bewegt sich nicht und unternimmt keine Aktionen."],
          ["7–8", "Die Kreatur bewegt sich zufällig."],
          ["9–10", "Die Kreatur kann sich normal verhalten."]
        ]
      },
      "Am Ende eines jeden seiner Züge kann das betroffene Ziel einen weiteren Weisheitsrettungswurf durchführen. Gelingt der Rettungswurf, endet der Effekt für dieses Ziel.",
      "Endet deine Konzentration oder läuft die Wirkungsdauer ab, enden die Auswirkungen ebenfalls."
    ],
    aufhoeherenGraden: "Wirkst du diesen Zauber mit einem Zauberplatz des 5. Grades oder höher, vergrößert sich der Radius um 3 m für jeden Grad über dem 4."
  },
  {
    name: "Verwünschen",
    schule: "Verzauberung",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "das versteinerte Auge eines Molchs",
    klassen: ["Hexenmeister"],
    ritual: false,
    beschreibung: [
      "Bis zu 3 Kreaturen deiner Wahl, die du innerhalb der Reichweite sehen kannst, werden bis zum Ende der Wirkungsdauer von dir verwünscht. Immer wenn ein betroffenes Ziel einen Angriffswurf oder Rettungswurf durchführt, muss es vorher einen W4 werfen und das Ergebnis vom Angriffs- oder Rettungswurf abziehen.",
      "Bestimme beim Wirken des Zaubers, welche Art von Rettungswürfen und welche Art von Angriffswürfen betroffen sind. Du kannst zwischen Fernangriffswürfen oder Nahkampfangriffswürfen wählen, ebenso zwischen Stärke-, Geschicklichkeits-, Konstitutions-, Intelligenz-, Weisheits- oder Charismarettungswürfen."
    ],
    aufhoeherenGraden: "Wirkst du diesen Zauber mit einem Zauberplatz des 2. Grades, beträgt die Wirkungsdauer „Konzentration, bis zu 8 Stunden”. Wirkst du diesen Zauber mit einem Zauberplatz des 3. Grades oder höher, beträgt die Wirkungsdauer „Konzentration, bis zu 24 Stunden”."
  },
  {
    name: "Vollständige Genesung",
    schule: "Bannmagie",
    grad: 5,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Diamantstaub im Wert von mindestens 100 GM, den der Zauber verbraucht",
    klassen: ["Barde", "Kleriker", "Druide", "Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du berührst eine Kreatur und belebst sie mit Magie. Die Kreatur erhält die folgenden Vorteile:",
      "• Sie erhält alle ihre verlorenen Trefferpunkte zurück.",
      "• Du beendest alle auf sie wirkenden Effekte, die ihr Trefferpunktmaximum verringern.",
      "• Du beendest alle auf sie wirkenden Krankheitseffekte.",
      "• Du beendest alle auf sie wirkenden negativen Effekte."
    ]
  },
  {
    name: "Vorahnung",
    schule: "Erkenntnismagie",
    grad: 2,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "speziell gekennzeichnete Stöckchen, Knochenwürfel oder ähnliche Gegenstände, mindestens drei im Wert von je 25 GM",
    klassen: ["Kleriker"],
    ritual: true,
    beschreibung: [
      "Indem du dir mit diesem Zauber die Dienste eines übernatürlichen Wesens sicherst — entweder eines Boten der Götter oder einer Manifestation einer kosmischen Kraft — erhältst du ein Orakel in Bezug auf das Ergebnis einer bestimmten Handlungsweise, die du in den nächsten 30 Minuten planst. Der SL gibt eines der folgenden Orakel aus:",
      "• Segen — Gutes Ergebnis",
      "• Fluch — Schlechtes Ergebnis",
      "• Gut — Gutes und schlechtes Ergebnis",
      "• Unklar — Kein besonders gutes oder schlechtes Ergebnis",
      "Der Zauber berücksichtigt keine möglichen Umstände, die das Ergebnis verändern könnten, wie z. B. den Einsatz weiterer Zauber oder den Verlust oder Gewinn eines Kameraden.",
      "Wirkst du diesen Zauber zweimal oder öfter, bevor du deine nächste Rast abschließt, besteht für jedes Wirken nach dem ersten eine kumulative Chance von 25 %, dass du ein falsches Orakel erhältst. Der SL führt diese Würfe im Verborgenen durch."
    ]
  },
  {
    name: "Voraussicht",
    schule: "Erkenntnismagie",
    grad: 9,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "eine Kolibrifeder",
    klassen: ["Barde", "Druide", "Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du berührst eine willige Kreatur und gewährst ihr ein begrenztes Vermögen, die Zukunft zu erahnen. Für die Wirkungsdauer kann das Ziel keinen Überraschungsangriff erleiden und hat Vorteil auf Angriffs-, Attributs- und Rettungswürfe. Zudem haben andere Kreaturen Nachteil auf Angriffswürfe gegen das Ziel, solange die Wirkungsdauer andauert.",
      "Endet die Wirkungsdauer, muss das Ziel eine Konstitutionsrettungswurf ablegen (SG 10). Bei einem Misserfolg leidet es für 1 Stunde an Erschöpfung."
    ]
  },
  {
    name: "Vorbestimmtes Trugbild",
    schule: "Illusion",
    grad: 6,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "Bis zu 10 Tage",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Vlies und Jadestaub im Wert von mindestens 50 GM",
    klassen: ["Barde", "Magier"],
    ritual: false,
    beschreibung: [
      "Du erschaffst die Illusion eines Objekts, einer Kreatur oder einer anderen sichtbaren Erscheinung, die in einem Würfel mit maximal 6 m Kantenlänge innerhalb der Reichweite Platz findet. Die Illusion besteht für die Wirkungsdauer oder bis du eine Aktion verwendest, um sie zu beenden. Die Illusion enthält auch entsprechende Geräusche, Gerüche und Temperaturen.",
      "Die Illusion verhält sich, wie du es möchtest, und reagiert auf die Umgebung, als wäre sie real. Die Illusion kann eine Kreatur imitieren, aber sie verhält sich nicht in einer Weise, die von dir nicht vorgesehen ist.",
      "Körperlicher Kontakt mit der Illusion entlarvt sie als solche, da die Körper durch sie hindurchgehen. Eine Kreatur, die eine Aktion verwendet, um die Illusion genau zu untersuchen, kann mit einem erfolgreichen Intelligenz-(Arkane Kunde)-Überprüfung (SG gleich deinem Zauber-SG) erkennen, dass es sich um eine Illusion handelt. Erkennt eine Kreatur die Illusion als solche, kann sie durch sie hindurchsehen und ihre Geräusche klingen hohl.",
      "Wenn du diesen Zauber wirkst, entscheidest du, wie die Illusion sich verhält, wenn bestimmte Bedingungen eintreten, die du beschreibst. Die Anweisungen können so komplex sein, wie du möchtest. Wenn die angegebenen Bedingungen eintreten, verhält sich die Illusion entsprechend deinen Anweisungen."
    ]
  },
  {
    name: "Wächter und Hüter",
    schule: "Bannmagie",
    grad: 6,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "brennender Weihrauch, etwas Schwefel und Öl, ein verknoteter Bindfaden, etwas Blut eines Erdkolosses und ein kleiner Silberstab im Wert von mindestens 10 GM",
    klassen: ["Barde", "Magier"],
    ritual: false,
    beschreibung: [
      "Du erschaffst ein Schutzzeichen, das einen Bereich von bis zu 2.500 m² (ein Bereich von 50 m × 50 m oder eine Kombination aus Bereichen in diesem Format) mit bis zu 9 m Höhe bewacht und sichert. Der Bereich kann eine Etage eines Gebäudes, eine Reihe von Räumen oder eine beliebige andere Konfiguration sein. Lege beim Wirken des Zaubers fest, welche Kreaturen sich frei in dem von dem Schutzzeichen gesicherten Bereich bewegen können, ohne den Effekten des Zaubers ausgesetzt zu sein. Wähle einen oder mehrere der folgenden Effekte:",
      "Flure: Nebel füllt alle Gänge aus. Die Kreaturen darin sind leicht verdeckt und können nicht weiter als 1,50 m sehen.",
      "Türen: Alle Türen in dem Bereich werden magisch verschlossen, als ob sie mit dem Zauber Arcanes Schloss versiegelt wären. Zudem erscheint auf jedem Türrahmen ein unsichtbares Zeichen. Eine Kreatur, die eine von einem Schutzzeichen bewachte Tür öffnet oder durch einen Türrahmen mit einem Schutzzeichen tritt, löst eine Alarmzone aus, die den Wächter darüber informiert, falls sie sich nicht frei im Bereich des Schutzzaubern bewegen darf.",
      "Treppen: Treppen werden mit Spinnweben bedeckt, die so dicht sind wie Kletternetze. Eine Treppe hinauf- oder hinunterzugehen kostet das Vierfache der normalen Bewegung.",
      "Andere Zaubereffekte: Du platzierst einen deiner Wahl aus der folgenden Liste in dem Bereich: Dauerhaftes Unsichtbares Zeichen (Magie), Magie erkennen, Permanentes Bild (auf ein für den Bereich geeignetes Bild beschränkt), Schutz vor Böses und Gutes oder Furcht einflößen.",
      "Der gesamte Bereich strahlt Magie aus. Ein Magie bannen, das auf einen bestimmten Effekt in dem Bereich gewirkt wird, hat eine Chance, diesen Effekt zu beseitigen (bei deinem Zauber-SG).",
      "Wirkst du diesen Zauber täglich für ein Jahr in demselben Bereich, wird der Zauber dauerhaft und muss nicht länger aufrechterhalten werden."
    ]
  },
  {
    name: "Waffe des Glaubens",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine schwebende, geisterhafte Waffe in der Reichweite, die für die Wirkungsdauer verbleibt oder bis du diesen Zauber erneut wirkst. Wenn du die Waffe erschaffst, kannst du einen Nahkampfangriff mit ihr gegen eine Kreatur innerhalb von 1,50 m von der Waffe durchführen. Treffer verursachen 1W8 + deinen Zauberangriffswert Strahlungsschaden.",
      "Als Bonusaktion in deinem Zug kannst du die Waffe bewegen, bis zu 6 m weit, und wieder einen Angriff mit ihr durchführen.",
      "Die Waffe kann von anderen Kreaturen nicht aufgegriffen werden und wird als magische Waffe behandelt."
    ],
    aufhoeherenGraden: "Wirkst du diesen Zauber mit einem Zauberplatz des 3. oder 4. Grades, beträgt der Schaden 2W8. Mit einem Zauberplatz des 5. oder 6. Grades ist es 3W8 und mit einem des 7. Grades oder höher 4W8."
  },
  {
    name: "Wahre Auferstehung",
    schule: "Nekromantie",
    grad: 9,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein Spritzer Weihwasser und Diamanten im Wert von mindestens 25.000 GM, die der Zauber verbraucht",
    klassen: ["Kleriker", "Druide"],
    ritual: false,
    beschreibung: [
      "Du berührst eine Kreatur, die tot ist. Wenn die Kreatur nicht länger als 200 Jahre tot ist und nicht aus Altersgründen gestorben ist, wird sie wieder lebendig mit all ihren Trefferpunkten.",
      "Dieser Zauber neutralisiert alle Gifte und heilt alle Krankheiten, die die Kreatur bei ihrem Tod befallen haben. Er hebt alle Flüche und alle Effekte auf, die die Kreatur belastet haben. Der Zauber ersetzt beschädigte oder fehlende Organe und Gliedmaßen. Wenn die Kreatur untot war, wird sie in der Form wiederbelebt, die sie vor ihrer Verwandlung in einen Untoten hatte."
    ]
  },
  {
    name: "Wahre Verwandlung",
    schule: "Verwandlung",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein Tropfen Quecksilber, ein Batzen Gummiarabikum und eine Rauchschwade",
    klassen: ["Barde", "Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du wählst eine Kreatur oder ein nichtmagisches Objekt, das du sehen kannst und das sich innerhalb der Reichweite befindet, und verwandelst es. Einem unwilligen Ziel muss ein Weisheitsrettungswurf gelingen, um den Effekt zu vermeiden. Der Zauber hat keine Auswirkungen auf Gestaltwandler oder auf Kreaturen mit 0 Trefferpunkten.",
      "Gegenstand in eine Kreatur: Du kannst ein Objekt in eine beliebige Art von Kreatur verwandeln, solange die Größe der Kreatur nicht die Größe des Objekts überschreitet und der Herausforderungsgrad der Kreatur höchstens 9 beträgt. Die Kreatur ist dir und deinen Gefährten gegenüber freundlich eingestellt. Sie handelt in jeder Runde ihres Zuges. Der SL entscheidet, welche Aktionen die Kreatur durchführt und wie sie sich verhält. Enden die Konzentration oder die Wirkungsdauer, verwandelt sich die Kreatur sofort zurück in das Objekt. Wenn du diesen Zauber täglich für ein Jahr wirkst, wird die Verwandlung dauerhaft.",
      "Kreatur in eine andere Kreatur: Wenn du diesen Zauber auf eine Kreatur oder eine Kreatur in nichtmagischer Gestalt wirkst, verwandelst du sie in eine neue Gestalt. Ein Gestaltwandler kann diesen Rettungswurf mit Vorteil ablegen. Die neue Gestalt kann ein beliebiges Tier oder ein Monstrositätswesen sein (je nach SL-Entscheidung), dessen Herausforderungsgrad gleich oder niedriger als der des Ziels ist (oder der Stufe des Ziels, wenn es keinen Herausforderungsgrad hat). Die Spielwerte des Ziels, einschließlich der geistigen Attribute, werden durch die Spielwerte der neuen Gestalt ersetzt. Das Ziel behält seine Gesinnung und Persönlichkeit.",
      "Das Ziel übernimmt die Trefferpunkte seiner neuen Gestalt. Wenn das Ziel auf 0 Trefferpunkte fällt, verwandelt es sich zurück in seine ursprüngliche Form und jeglicher überzähliger Schaden wird auf diese übertragen. Solange dieser überzählige Schaden die Trefferpunkte der ursprünglichen Form nicht auf 0 reduziert, wird das Ziel nicht bewusstlos. Die Kreatur bleibt verwandelt, bis der Effekt endet oder bis sie auf 0 Trefferpunkte fällt oder stirbt. Wenn du diesen Zauber täglich für ein Jahr wirkst, wird die Verwandlung dauerhaft.",
      "Kreatur in einen Gegenstand: Wenn du diesen Zauber auf eine Kreatur wirkst, verwandelst du sie in ein nichtmagisches Objekt. Die Verwandlung betrifft alle Gegenstände, die die Kreatur trägt und bei sich hat. Die Ausrüstung des Ziels verschmilzt mit dem Objekt. Die Kreatur bleibt verwandelt, bis der Effekt endet, und danach verwandelt sie sich wieder zurück in ihre ursprüngliche Form. Während dieser Zeit ist die Kreatur sich ihrer Umgebung nicht bewusst. Wenn du diesen Zauber täglich für ein Jahr wirkst, wird die Verwandlung dauerhaft."
    ]
  },
  {
    name: "Wahrer Blick",
    schule: "Erkenntnismagie",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "eine Salbe für die Augen, die 25 GM wert ist; sie wird aus Pilzpulver, Safran und Fett hergestellt und beim Wirken des Zaubers verbraucht",
    klassen: ["Barde", "Kleriker", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Der Zauber verleiht einer bereitwilligen Kreatur, die du berührst, die Fähigkeit, Dinge so zu sehen, wie sie wirklich sind. Für die Wirkungsdauer besitzt das Ziel wahre Sicht, bemerkt von Magie verborgene Geheimtüren und kann auf die Ätherebene blicken, alles in einem Umkreis von 36 m."
    ]
  },
  {
    name: "Wände passieren",
    schule: "Verwandlung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Sesamsaat",
    klassen: ["Magier"],
    ritual: false,
    beschreibung: [
      "Ein Durchgang erscheint an einem für dich sichtbaren Punkt in Reichweite auf einer Oberfläche aus Holz, Gips oder Stein (wie eine Mauer, eine Zimmerdecke oder ein Fußboden) und bleibt für die Wirkungsdauer bestehen. Du entscheidest, welche Ausmaße der Durchgang besitzt, bis zu einer maximalen Breite von 1,50 m, einer Höhe von 2,40 m und einer Tiefe von 6 m.",
      "Der erschaffene Durchgang macht die ihn umgebende Wand nicht instabil. Verschwindet die Öffnung, werden Kreaturen und Gegenstände, die sich noch im Durchgang befinden, unbeschadet in einen nicht besetzten Bereich geschoben, welcher der Oberfläche am nächsten ist, auf die der Zauber gewirkt wurde."
    ]
  },
  {
    name: "Wankendmachendes Niederstrecken",
    schule: "Hervorrufung",
    grad: 4,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Das nächste Mal, wenn du innerhalb der Wirkungsdauer des Zaubers eine Kreatur mit einer Nahkampfwaffe triffst, durchstößt deine Waffe nicht nur den Körper, sondern auch die Seele, und verursacht zusätzlich 4W6 psychischen Schaden. Das Ziel muss einen Weisheitsrettungswurf ablegen. Bei einem Misserfolg ist es bis zum Ende des nächsten Zuges im Nachteil bei Angriffs- und Attributswürfen und kann keine Reaktionen ausführen."
    ]
  },
  {
    name: "Wasser atmen",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein kurzes Schilfrohr oder ein Stück Stroh",
    klassen: ["Druide", "Waldläufer", "Magier", "Magieschmied", "Zauberer"],
    ritual: true,
    beschreibung: [
      "Dieser Zauber gewährt bis zu zehn bereitwilligen Kreaturen, die du sehen kannst, für die Wirkungsdauer die Fähigkeit, unter Wasser zu atmen. Betroffene Kreaturen behalten auch ihre normale Art zu atmen."
    ]
  },
  {
    name: "Wasser erschaffen oder zerstören",
    schule: "Verwandlung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein Tropfen Wasser, wenn du Wasser erschaffen willst, oder einige Sandkörner, wenn du es zerstören möchtest",
    klassen: ["Kleriker", "Druide"],
    ritual: false,
    beschreibung: [
      "Du erschaffst oder zerstörst Wasser.",
      "Wasser erschaffen: Du erschaffst bis zu 40 Liter sauberen Wassers in einem offenen Behälter in Reichweite. Alternativ fällt das Wasser als Regen in einem Würfel mit 9 m Kantenlänge in Reichweite. Flammen, die dem Regen ausgesetzt sind, erlöschen.",
      "Wasser zerstören: Du zerstörst bis zu 40 Liter Wasser in einem offenen Behälter in Reichweite. Alternativ kannst du Nebel in einem Würfel mit 9 m Kantenlänge in Reichweite zerstören."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 1. hinaus entweder zusätzlich 40 Liter Wasser erschaffen oder zerstören oder die Kantenlänge des Würfels um 1,50 m vergrößern."
  },
  {
    name: "Wasser kontrollieren",
    schule: "Verwandlung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "90 m",
    komponenten: ["V", "G", "M"],
    material: "ein Tropfen Wasser und eine Prise Staub",
    klassen: ["Kleriker", "Druide", "Magier"],
    ritual: false,
    beschreibung: [
      "Bis der Zauber endet, kontrollierst du jegliches offenes Gewässer im Bereich eines Würfels mit bis zu 30 m Kantenlänge. Wähle einen der folgenden Effekte, wenn du den Zauber wirkst. Als Aktion in deinem Zug kannst du diesen Effekt wiederholen oder einen anderen erzeugen.",
      "Flut: Du lässt den Wasserpegel aller stehenden Gewässer im Bereich um bis zu 6 m ansteigen. Ist ein Ufer Teil des Bereichs, tritt das Wasser auch auf das Land über.",
      "Wenn du den Zauber auf ein größeres Gewässer wirkst, erschaffst du stattdessen eine 6 m hohe Welle, die sich von einer Seite des Bereichs zur anderen bewegt und dann herabschmettert. Alle Fahrzeuge der Größenkategorie riesig oder kleiner, die sich im Pfad der Welle befinden, werden mit ihr zur anderen Seite getragen. Wird ein solches Fahrzeug von der herabsrechenden Welle getroffen, kentert es mit einer Chance von 25 %. Der Wasserstand bleibt erhöht, bis der Zauber endet oder du einen anderen Effekt wählst. Erzeugst du eine Welle, wiederholt sich diese zu Beginn deines nächsten Zuges, solange die Flut anhält.",
      "Wasser teilen: Du bewegst das Wasser im Bereich auseinander und erzeugst so einen Graben, der sich durch den Bereich zieht und von dem geteilten Wasser auf beiden Seiten wie eine Mauer gesäumt wird.",
      "Der Graben bleibt bestehen, bis der Zauber endet oder du einen anderen Effekt wählst. Anschließend fließt das Wasser im Verlauf der nächsten Runde langsam in den Graben zurück, bis der normale Wasserpegel wiederhergestellt ist.",
      "Fluss umlenken: Du bewirkst, dass sich fließendes Wasser im Bereich in eine Richtung deiner Wahl bewegt, selbst wenn es dafür über Hindernisse, Wände empor oder in andere unwahrscheinliche Richtungen strömen muss. Das Wasser im Bereich bewegt sich nach deinen Vorgaben, sobald es jedoch den Bereich des Zaubers verlässt, fließt es wieder nach den Bedingungen des Geländes.",
      "Das Wasser strömt in die Richtung deiner Wahl, bis der Zauber endet oder du einen anderen Effekt wählst.",
      "Strudel: Dieser Effekt erfordert ein Gewässer, das mindestens eine quadratische Fläche von 15 m Seitenlänge umfasst und 7,50 m tief ist. Du erschaffst einen Strudel in der Mitte des Bereichs. Dieser bildet einen Wirbel, der an der Basis 1,50 m breit ist und an der Spitze bis zu 15 m breit und 7,50 m hoch ist. Alle Kreaturen und Gegenstände, die sich im Umkreis von 7,50 m um den Wirbel befinden, werden 3 m in seine Richtung gezogen. Eine Kreatur kann vom Strudel wegschwimmen, wenn ihr ein Wurf auf Stärke (Athletik) gegen den SG zum Widerstehen deiner Zauber gelingt.",
      "Betritt eine Kreatur das erste Mal in einem Zug den Strudel oder beginnt ihren Zug dort, muss sie einen Stärkerettungswurf ablegen. Bei einem Misserfolg erleidet die Kreatur 2W8 Wuchtschaden und ist im Strudel gefangen, bis der Zauber endet. Bei einem erfolgreichen Rettungswurf erleidet die Kreatur nur den halben Schaden und ist nicht im Strudel gefangen. Eine Kreatur, die im Strudel gefangen ist, kann ihre Aktion verwenden, um wegzuschwimmen (siehe oben), ist aber im Nachteil bei ihrem Wurf auf Stärke (Athletik).",
      "Das erste Mal, wenn ein Gegenstand in den Bereich des Strudels gezogen wird, erleidet der Gegenstand 2W8 Wuchtschaden. Dieser Schaden wird jede Runde verursacht, den der Gegenstand im Strudel verbleibt."
    ]
  },
  {
    name: "Weg finden",
    schule: "Erkenntnismagie",
    grad: 6,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "Konzentration, bis zu 1 Tag",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "Weissagungsgegenstände — wie Knochen, Elfenbeinstäbchen, Karten, Zähne oder gravierte Runensteine — im Wert von mindestens 100 GM und ein Objekt von dem Ort, den du finden willst",
    klassen: ["Barde", "Kleriker", "Druide"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber erlaubt es dir, den kürzesten und direktesten physischen Weg zu einem Ort zu bestimmen, mit dem du vertraut bist und der sich auf derselben Existenzebene befindet. Wählst du einen Ort auf einer anderen Ebene, einen Ort, der sich bewegt (wie eine mobile Festung), oder einen, der nicht spezifisch ist (wie „die Höhle eines grünen Drachen”), misslingt der Zauber.",
      "Solange du dich auf derselben Existenzebene wie dein Ziel befindest, weißt du für die Wirkungsdauer, wie weit es entfernt ist und in welcher Richtung es liegt. Während du dorthin reist, ist dir an jeder Kreuzung automatisch bewusst, welcher Weg der kürzere und direktere zum Ziel ist (aber nicht unbedingt, welcher sicherer ist)."
    ]
  },
  {
    name: "Weihen",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "24 Stunden",
    wirkungsdauer: "Bis der Zauber gebannt wird",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Kräuter, Öle und Weihrauch im Wert von mindestens 1.000 GM, die beim Wirken des Zaubers verbraucht werden",
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Du berührst einen Punkt und erfüllst den ihn umgebenden Bereich im Radius von bis zu 18 m mit heiliger (oder unheiliger) Macht. Der Zauber misslingt, wenn der Bereich teilweise oder ganz bereits unter dem Effekt dieses Zaubers steht, also schon geweiht oder entweiht wurde. Der betroffene Bereich unterliegt den folgenden Effekten.",
      "Celestische Wesen, Feenwesen, Unholde und Untote können den Bereich nicht betreten und Kreaturen in seinem Inneren weder bezaubern und verängstigen noch besessen machen. Jede Bezauberung, Verängstigung oder Besessenheit, die von solch einer Kreatur hervorgerufen wurde, endet sofort, wenn der Betroffene den Bereich betritt. Du kannst entscheiden, dass eine oder mehrere dieser Arten von Kreaturen nicht vom Effekt des Zaubers betroffen werden.",
      "Außerdem darfst du einen zusätzlichen Effekt an den Bereich des Zaubers binden. Wähle einen der unten aufgeführten Effekte oder einen, den dein SL dir als passend anbietet. Einige dieser Effekte wirken auf Kreaturen im Bereich des Zaubers: In diesem Fall kannst du festlegen, ob sie auf alle Kreaturen wirken sollen oder nur auf jene, die einer bestimmten Gottheit dienen, einem bestimmten Anführer folgen oder von einer bestimmten Art sind (wie Orks oder Trolle). Wenn eine betroffene Kreatur das erste Mal in einem Zug den Bereich des Zaubers betritt oder ihren Zug dort beginnt, muss sie einen Charismarettungswurf ablegen. Bei einem Erfolg ignoriert die Kreatur den Zusatzeffekt, bis sie den Bereich wieder verlässt.",
      "Tapferkeit: Betroffene Kreaturen können nicht verängstigt werden, solange sie sich im Bereich aufhalten.",
      "Dunkelheit: Dunkelheit erfüllt den Bereich. Natürliches Licht kann die Umgebung nicht erhellen, ebensowenig magisches Licht, das durch einen Zauber erzeugt wurde, dessen Grad niedriger war als der, mit dem Weihen gewirkt wurde.",
      "Tageslicht: Helles Licht erfüllt den Bereich. Es durchdringt auch magische Dunkelheit, die durch einen Zauber erzeugt wurde, dessen Grad niedriger war als der, mit dem Weihen gewirkt wurde.",
      "Schutz: Betroffene Kreaturen im Bereich erhalten eine Resistenz gegen eine Schadensart deiner Wahl, mit Ausnahme von Wucht-, Stich- oder Hiebschaden.",
      "Empfindlichkeit: Betroffene Kreaturen im Bereich erhalten eine Anfälligkeit gegenüber einer Schadensart deiner Wahl, mit Ausnahme von Wucht-, Stich- oder Hiebschaden.",
      "Immerwährende Ruhe: Leichname, die innerhalb des Bereichs begraben werden, können nicht in Untote verwandelt werden.",
      "Extradimensionale Interferenz: Betroffene Kreaturen können nicht mittels Teleportation oder auf extradimensionalem oder interplanarem Weg reisen.",
      "Furcht: Betroffene Kreaturen werden verängstigt, solange sie sich im Bereich aufhalten.",
      "Stille: Aus dem Bereich können keine Geräusche dringen, ebensowenig wie in ihn hinein.",
      "Zungen: Betroffene Kreaturen können mit anderen Kreaturen im Bereich kommunizieren, selbst wenn sie keine gemeinsame Sprache sprechen."
    ]
  },
  {
    name: "Weissagung",
    schule: "Erkenntnismagie",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "Weihrauch und ein Opfer, das deinem Glauben entspricht; beides zusammen muss mindestens 25 GM wert sein und wird beim Wirken des Zaubers verbraucht",
    klassen: ["Kleriker"],
    ritual: true,
    beschreibung: [
      "Deine Magie und ein Opfer lassen dich in Kontakt treten mit einem Gott oder dem Gesandten eines Gottes. Du darfst eine einzelne Frage über ein bestimmtes Ziel, Ereignis oder eine Aktivität stellen, die in den nächsten 7 Tagen stattfinden wird. Du bekommst eine wahre Antwort. Diese könnte in Form eines kurzen Satzes, eines kryptischen Reims oder eines Omens überbracht werden. Der Zauber nimmt nicht Rücksicht auf mögliche Umstände, die das Ergebnis verändern könnten, wie das Wirken zusätzlicher Zauber oder der Verlust eines Gefährten.",
      "Wenn du den Zauber zweimal oder öfter wirkst, bevor du eine lange Rast beendest, besteht eine kumulative Chance von 25 % für jeden Zauber nach dem ersten, dass du ein zufälliges Ergebnis erhältst. Der SL macht diesen Wurf verdeckt."
    ]
  },
  {
    name: "Wesen des Waldes beschwören",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "eine Stechpalmenbeere pro beschworener Kreatur",
    klassen: ["Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du beschwörst Feenwesen, die in nicht besetzten Bereichen in Reichweite erscheinen, die du sehen kannst. Wähle aus den folgenden Möglichkeiten, was erscheint:",
      "• ein Feenwesen mit Herausforderungsgrad 2 oder weniger",
      "• zwei Feenwesen mit Herausforderungsgrad 1 oder weniger",
      "• vier Feenwesen mit Herausforderungsgrad 1/2 oder weniger",
      "• acht Feenwesen mit Herausforderungsgrad 1/4 oder weniger",
      "Die Feenwesen verschwinden, wenn sie auf 0 Trefferpunkte reduziert werden oder der Zauber endet. Sie sind mit dir und deinen Gefährten verbündet. Würfle die Initiative für die beschworenen Kreaturen als Gruppe, die ihre eigenen Züge ausführt. Sie folgen allen verbalen Befehlen, die du ihnen erteilst (dazu musst du keine Aktion aufwenden). Ohne Befehle verteidigen sie sich gegen feindliche Kreaturen, führen aber ansonsten keine Aktionen aus.",
      "Der SL hat die Spielwerte der Feenwesen zur Verfügung."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz eines höheren Grades wirkst, wählst du eine der oben beschriebenen Beschwörungsoptionen und mehr Kreaturen erscheinen: doppelt so viele bei einem Zauberplatz des 6. Grades und dreimal so viele bei einem des 8. Grades."
  },
  {
    name: "Wetterkontrolle",
    schule: "Verwandlung",
    grad: 8,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "Konzentration, bis zu 8 Stunden",
    konzentration: true,
    reichweite: "Selbst (Radius von 7,5 km)",
    komponenten: ["V", "G", "M"],
    material: "brennender Weihrauch und Stücke von Erde und Holz, die in Wasser gemischt sind",
    klassen: ["Kleriker", "Druide", "Magier"],
    ritual: false,
    beschreibung: [
      "Für die Wirkungsdauer übernimmst du die Kontrolle über das Wetter im Umkreis von 7,5 km. Du musst im Freien sein, um diesen Zauber wirken zu können. Er endet vorzeitig, sobald du von deinem Standort aus keine freie Sicht mehr zum Himmel hast.",
      "Wenn du den Zauber wirkst, veränderst du die aktuellen Wetterbedingungen, unabhängig von Klima und Jahreszeit. Du kannst Niederschlag, Temperatur und Wind beeinflussen. Es dauert 1W4 × 10 Minuten, bis die neue Bedingung in Kraft tritt. Sobald dies der Fall ist, kannst du die Wetterbedingungen erneut ändern. Endet der Zauber, normalisiert sich das Wetter langsam wieder. Wenn du die Wetterbedingungen veränderst, bestimme zusammen mit deinem SL den aktuellen Stand der Bedingung und modifiziere ihn eine Stufe nach oben oder nach unten. Wenn du den Wind änderst, kannst du auch seine Richtung festlegen.",
      {
        typ: "tabelle",
        kopfzeile: ["Stufe", "Niederschlag"],
        zeilen: [
          ["1", "Klar"],
          ["2", "Leichte Wolken"],
          ["3", "Bewölkt oder Bodennebel"],
          ["4", "Regen, Hagel oder Schnee"],
          ["5", "Regengüsse, starker Hagel oder Schneesturm"]
        ]
      },
      {
        typ: "tabelle",
        kopfzeile: ["Stufe", "Temperatur"],
        zeilen: [
          ["1", "Unerträglich heiß"],
          ["2", "Heiß"],
          ["3", "Warm"],
          ["4", "Kühl"],
          ["5", "Kalt"],
          ["6", "Arktisch kalt"]
        ]
      },
      {
        typ: "tabelle",
        kopfzeile: ["Stufe", "Wind"],
        zeilen: [
          ["1", "Flaute"],
          ["2", "Gemäßigter Wind"],
          ["3", "Starker Wind"],
          ["4", "Starke Böen"],
          ["5", "Sturm"]
        ]
      }
    ]
  },
  {
    name: "Wiederbeleben",
    schule: "Nekromantie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Diamanten im Wert von mindestens 300 GM, die beim Wirken des Zaubers verbraucht werden",
    klassen: ["Kleriker", "Magieschmied", "Paladin"],
    ritual: false,
    beschreibung: [
      "Du berührst eine Kreatur, die innerhalb der letzten Minute gestorben ist. Das Ziel kehrt mit 1 Trefferpunkt ins Leben zurück. Dieser Zauber kann keine Kreaturen zum Leben erwecken, die an Altersschwäche starben, noch kann er Körperteile regenerieren."
    ]
  },
  {
    name: "Wiedergeburt",
    schule: "Verwandlung",
    grad: 5,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "seltene Öle und Salben im Wert von mindestens 1.000 GM, die beim Wirken des Zaubers verbraucht werden",
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Du berührst eine tote humanoide Kreatur oder einen Überrest davon. Wenn die Kreatur nicht länger als 10 Tage tot war, erschafft der Zauber einen neuen, erwachsenen Körper für sie und ruft die Seele herbei, auf dass sie diesen Körper in Besitz nehmen kann. Ist die Seele nicht dazu in der Lage oder möchte dies nicht, misslingt der Zauber. Die Magie erschafft einen völlig neuen Körper, den die Seele bewohnen kann, was es wahrscheinlich macht, dass dieser nicht von der gleichen Art ist wie der vorherige. Der SL würfelt mit einem W100 und bestimmt anhand der folgenden Tabelle, welche Gestalt die Kreatur hat, wenn sie zum Leben erweckt wird — oder er wählt eine Gestalt.",
      {
        typ: "tabelle",
        kopfzeile: ["W100", "Volk"],
        zeilen: [
          ["01–04", "Drachenblütiger"],
          ["05–13", "Hügelzwerg"],
          ["14–21", "Gebirgszwerg"],
          ["22–25", "Dunkelelf"],
          ["26–34", "Hochelf"],
          ["35–42", "Waldelf"],
          ["43–46", "Waldgnom"],
          ["47–52", "Felsengnom"],
          ["53–56", "Halbelf"],
          ["57–60", "Halbork"],
          ["61–68", "Halbling, Leichtfuß"],
          ["69–76", "Halbling, Stämmiger"],
          ["77–96", "Mensch"],
          ["97–00", "Tiefling"]
        ]
      },
      "Die wiedergeborene Kreatur erinnert sich an ihr früheres Leben und ihre Erfahrungen. Sie behält die Fähigkeiten, die sie in ihrer ursprünglichen Gestalt besaß, nur dass die Volksmerkmale ihres bisherigen Volkes durch die des neuen ersetzt werden."
    ]
  },
  {
    name: "Windstoß",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst (Linie von 18 m)",
    komponenten: ["V", "G", "M"],
    material: "ein Samen einer Hülsenfrucht",
    klassen: ["Druide", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein starker Wind weht in einer Linie von 18 m Länge und 3 m Breite von dir aus in eine Richtung deiner Wahl und hält für die Wirkungsdauer an. Jede Kreatur, die ihren Zug innerhalb der Linie beginnt, muss einen erfolgreichen Stärkerettungswurf ablegen, um nicht 4,50 m entlang der Linie von dir weggestoßen zu werden. Außerdem müssen alle betroffenen Kreaturen 60 cm Bewegungsrate je 30 cm ausgeben, die sie sich innerhalb der Linie auf dich zubewegen.",
      "Der Windstoß zerstreut Gase und Dämpfe und löscht Kerzen, Fackeln oder ähnliche ungeschützte Flammen im Bereich. Geschützte Flammen, wie in Laternen, tanzen wild umher und haben eine Chance von 50 % zu erlöschen.",
      "Als Bonusaktion kannst du in jedem deiner Züge, bis der Zauber endet, die Richtung ändern, in die der Wind weht."
    ]
  },
  {
    name: "Windwall",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein winziger Fächer und eine Feder exotischer Herkunft",
    klassen: ["Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Eine Mauer aus starkem Wind erhebt sich an einem Punkt deiner Wahl in Reichweite und bleibt für die Wirkungsdauer bestehen. Der Windwall kann bis zu 15 m lang, 4,50 m hoch und 30 cm dick sein und jede Gestalt haben, die du möchtest, solange sie einen anhaltenden Pfad entlang des Bodens bildet.",
      "Erschaffst du die Mauer aus Wind, müssen alle Kreaturen in ihrem Bereich einen Stärkerettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 3W8 Wuchtschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf.",
      "Der starke Wind hält Nebel, Rauch und andere Gase auf Abstand. Fliegende Kreaturen oder Gegenstände der Größenkategorie klein oder kleiner können die Mauer nicht durchdringen. Lose, leichte Materialien, die in den Windwall eintreten, fliegen nach oben. Pfeile, Bolzen und andere gewöhnliche Geschosse, die auf Ziele hinter dem Wall abgefeuert werden, werden nach oben abgelenkt und verfehlen ihr Ziel automatisch. (Felsbrocken, die von Riesen oder Belagerungsgerät geschleudert werden, und ähnliche Geschosse sind hiervon nicht betroffen.)",
      "Kreaturen in gasförmiger Gestalt sind nicht in der Lage, die Mauer aus Wind zu durchdringen."
    ]
  },
  {
    name: "Windwandeln",
    schule: "Verwandlung",
    grad: 6,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "Feuer und Weihwasser",
    klassen: ["Druide"],
    ritual: false,
    beschreibung: [
      "Du und bis zu zehn bereitwillige Kreaturen in Reichweite, die du sehen kannst, nehmen für die Wirkungsdauer eine gasförmige Gestalt an und erscheinen als Wolkenfetzen. Solange sie diese Wolkengestalt angenommen haben, besitzen die betroffenen Ziele eine Flugbewegungsrate von 90 m sowie eine Resistenz gegen nicht-magische Waffen. Die einzigen Aktionen, die eine Kreatur in dieser Gestalt ausführen kann, sind die Spurtaktion und die Rückverwandlung in ihre normale Gestalt. Die Rückverwandlung dauert 1 Minute, während der die Kreatur kampfunfähig ist und sich nicht bewegen kann. Bis der Zauber endet, kann das Ziel erneut die Wolkengestalt annehmen, was ebenfalls eine Verwandlung von 1 Minute Dauer erfordert.",
      "Befindet sich eine Kreatur in Wolkengestalt in der Luft, wenn der Zauber endet, sinkt sie für 1 Minute 18 m pro Runde ab, bis sie sicher landet. Wenn sie nach 1 Minute nicht landen kann, stürzt sie die verbleibende Distanz."
    ]
  },
  {
    name: "Wort der Macht: Betäubung",
    schule: "Verzauberung",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du sprichst ein Wort der Macht aus, das den Verstand einer Kreatur in Reichweite, die du sehen kannst, überwältigt, sodass sie hilflos ist. Besitzt das ausgewählte Ziel 150 Trefferpunkte oder weniger, ist es betäubt. Ansonsten hat der Zauber keinen Effekt.",
      "Das betäubte Ziel kann am Ende eines jeden seiner Züge einen Konstitutionsrettungswurf ablegen. Bei einem Erfolg endet der Betäubungseffekt."
    ]
  },
  {
    name: "Wort der Macht: Heilung",
    schule: "Hervorrufung",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde"],
    ritual: false,
    beschreibung: [
      "Eine Woge heilender Energie erfasst die Kreatur, die du berührst. Das Ziel erhält alle Trefferpunkte zurück. Wenn die Kreatur betäubt, bezaubert, gelähmt oder verängstigt ist, endet dieser Zustand. Liegt die Kreatur, kann sie ihre Reaktion verwenden, um aufzustehen. Der Zauber hat keine Auswirkungen auf Untote oder Konstrukte."
    ]
  },
  {
    name: "Wort der Macht: Tod",
    schule: "Verzauberung",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du sprichst ein Wort der Macht aus, das eine Kreatur in Reichweite, die du sehen kannst, auf der Stelle tötet. Besitzt das ausgewählte Ziel 100 Trefferpunkte oder weniger, stirbt es. Ansonsten hat der Zauber keinen Effekt."
    ]
  },
  {
    name: "Wunden heilen",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Kleriker", "Druide", "Magieschmied", "Paladin", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Eine Kreatur, die du berührst, erhält eine Anzahl von Trefferpunkten zurück in Höhe von 1W8 + den Modifikator deines zum Zaubern relevanten Attributs. Der Zauber hat keine Auswirkungen auf Untote oder Konstrukte."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigen die geheilten Trefferpunkte für jeden Grad über den 1. hinaus um 1W8."
  },
  {
    name: "Wunden verursachen",
    schule: "Nekromantie",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Kleriker"],
    ritual: false,
    beschreibung: [
      "Führe einen Nahkampf-Zauberangriff gegen eine Kreatur innerhalb deiner Reichweite aus. Bei einem Treffer erleidet das Ziel 3W10 nekrotischen Schaden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 2. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 1. hinaus um 1W10."
  },
  {
    name: "Wunsch",
    schule: "Beschwörung",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Wunsch ist der mächtigste Zauber, den eine sterbliche Kreatur wirken kann. Indem du deinen Willen laut aussprichst, vermagst du das Fundament der Realität im Einklang mit deinen Wünschen zu verändern.",
      "Als grundlegende Verwendung dieses Zaubers kannst du einen beliebigen anderen Spruch des 8. oder eines niedrigeren Grades kopieren. Du musst weder dessen Voraussetzungen erfüllen noch wertvolle Materialkomponenten bezahlen. Der Zauber tritt einfach in Kraft.",
      "Alternativ kannst du einen der folgenden Effekte erzeugen:",
      "• Du erschaffst einen nicht-magischen Gegenstand im Wert von bis zu 25.000 GM. Dieser darf in jeder Ausdehnung nicht größer als 90 m sein und erscheint in einem nicht besetzten Bereich auf dem Boden, den du sehen kannst.",
      "• Du heilst bis zu zwanzig Kreaturen, die du sehen kannst, sodass sie alle Trefferpunkte zurückerhalten, und beendest alle Effekte, die auf ihnen liegen, als wenn der Zauber Vollständige Genesung auf sie gewirkt worden wäre.",
      "• Du gewährst bis zu zehn Kreaturen, die du sehen kannst, eine Resistenz gegen eine Schadensart deiner Wahl.",
      "• Du verleihst bis zu zehn Kreaturen, die du sehen kannst, für 8 Stunden eine Immunität gegen einen einzelnen Zauber oder magischen Effekt. Beispielsweise könntest du dich und deine Gruppe immun gegen den Lebensentzug-Angriff eines Lichs machen.",
      "• Du hebst ein kurz zurückliegendes Ereignis auf, indem du die Wiederholung eines beliebigen Wurfes in der letzten Runde (inklusive deines Zuges) erzwingst. Die Realität formt sich entsprechend des neuen Ergebnisses um. Beispielsweise könnte ein Wunsch den erfolgreichen Rettungswurf oder kritischen Treffer eines Gegners aufheben oder den misslungenen Rettungswurf eines Verbündeten. Du darfst bestimmen, dass die Wurfwiederholung mit Vorteil oder Nachteil durchgeführt wird, und kannst entscheiden, ob das Ergebnis der Wiederholung oder des ursprünglichen Wurfes verwendet werden soll.",
      "Du kannst auch einen Effekt erzeugen, der nicht von den obigen Beispielen abgedeckt wird. Nenne dem SL deinen Wunsch so präzise wie möglich, er entscheidet (mit großer Freiheit), was in einem solchen Fall passiert. Je größer der Wunsch ist, umso wahrscheinlicher ist es, dass etwas anders verläuft, als geplant. Der Zauber könnte einfach scheitern, der gewünschte Effekt nur zum Teil erfüllt werden oder du selbst eine unvorhersehbare Nebenwirkung erleiden, die von deiner Formulierung des Wunsches abhängt. Wenn du dir beispielsweise wünschst, dass ein Schurke tot sei, könntest du in die Zukunft katapultiert werden, in eine Zeit, in welcher der Schurke nicht mehr am Leben ist (was dich effektiv aus dem Spiel entfernen würde). Wünscht du dir einen legendären magischen Gegenstand oder ein Artefakt, könntest du zum aktuellen Besitzer des Objekts teleportiert werden.",
      "Wunsch auf eine Weise zu wirken, die nicht bloß einen anderen Zauber kopiert, bedeutet eine enorme Anstrengung und Belastung. Jedes Mal, wenn du nach dieser Belastung einen Zauber wirkst, erleidest du 1W10 nekrotischen Schaden pro Grad des Zaubers, bis du eine lange Rast abgeschlossen hast. Dieser Schaden kann auf keine Weise verringert oder verhindert werden. Außerdem fällt deine Stärke für 2W4 Tage auf 3, falls dein Attributswert nicht bereits 3 oder weniger beträgt. Für jeden dieser Tage, an dem du dich nur ausruhst oder leichten Tätigkeiten nachgehst, verringerst du die übrige Erholungszeit um 2 Tage. Schließlich besteht eine Chance von 33 %, dass du Wunsch niemals erneut wirken kannst, wenn du diese Belastung erleidest."
    ]
  },
  {
    name: "Zeichen des Jägers",
    schule: "Erkenntnismagie",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du wählst eine Kreatur in Reichweite aus, die du sehen kannst, und markierst sie auf mystische Art als deine Beute. Für die Wirkungsdauer fügst du dem Ziel bei jedem Treffer mit einem Waffenangriff zusätzlich 1W6 Schaden zu. Außerdem bist du im Vorteil bei Würfen auf Weisheit (Wahrnehmung) und Weisheit (Überleben), wenn du das Ziel suchst. Wird dieses auf 0 Trefferpunkte reduziert, ehe der Zauber endet, kannst du in einem späteren Zug eine Bonusaktion verwenden, um eine neue Kreatur zu markieren."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz eines höheren Grades wirkst, verlängert sich die Wirkungsdauer: auf „Konzentration, bis zu 8 Stunden” bei einem Zauberplatz des 3. oder 4. Grades, auf „Konzentration, bis zu 24 Stunden” bei einem des 5. oder eines höheren Grades."
  },
  {
    name: "Zeitstopp",
    schule: "Verwandlung",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du lässt kurz die Zeit für alle außer dir selbst stillstehen. Für andere Kreaturen vergeht keine einzige Sekunde, während du 1W4+1 Züge hintereinander abwickeln darfst, in denen du wie gewohnt Aktionen ausführst und dich bewegst.",
      "Der Zauber endet, wenn eine von dir ausgehende Aktion oder ein Effekt während dieser Zeit eine Kreatur außer dir selbst beeinflusst oder einen Gegenstand, den eine andere Kreatur trägt oder in Händen hält. Außerdem endet der Zauber, wenn du dich mehr als 300 m von dem Ort entfernst, an dem du ihn gewirkt hast."
    ]
  },
  {
    name: "Zerbersten",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Splitter Katzengold",
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Ein plötzliches lautes Klirren, das schmerzhaft intensiv ist, ertönt an einem Punkt deiner Wahl in Reichweite. Alle Kreaturen im Radius von 3 m um den Punkt müssen einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleidet eine Kreatur 3W8 Schallschaden oder halb so viel Schaden bei einem erfolgreichen Rettungswurf. Kreaturen, die aus anorganischen Materialien wie Stein, Kristall oder Metall bestehen, sind im Nachteil bei diesem Rettungswurf.",
      "Nicht-magische Gegenstände, die weder getragen noch in der Hand gehalten werden, erleiden den Schaden ebenfalls, wenn sie sich im Bereich des Zaubers befinden."
    ],
    aufhoeherenGraden: "Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, steigt der Schaden für jeden Grad über den 2. hinaus um 1W8."
  },
  {
    name: "Zerstörerische Woge",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Selbst (Radius von 9 m)",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Indem du auf den Boden schlägst, erschaffst du eine von dir ausgehende Woge aus göttlicher Energie. Alle Kreaturen deiner Wahl im Umkreis von 9 m müssen einen Konstitutionsrettungswurf ablegen. Bei einem Misserfolg erleiden sie 5W6 Schallschaden sowie 5W6 gleißenden oder nekrotischen Schaden (deine Wahl) und werden zu Boden geworfen (sie erhalten den Zustand liegend). Gelingt einer Kreatur der Rettungswurf, erleidet sie nur halb so viel Schaden und wird nicht zu Boden geworfen."
    ]
  },
  {
    name: "Zielsicherer Schlag",
    schule: "Erkenntnismagie",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Runde",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["G"],
    material: null,
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du deutest mit einem Finger auf das Ziel. Der Zauber gewährt dir einen kurzen Einblick in die Verteidigung des Ziels. In deinem nächsten Zug bist du im Vorteil bei deinem ersten Angriffswurf gegen das Ziel, vorausgesetzt der Zauber ist noch aktiv."
    ]
  },
  {
    name: "Zone der Wahrheit",
    schule: "Verzauberung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "10 Minuten",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde", "Kleriker", "Paladin"],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine magische Zone mit einem Radius von 4,50 m an einem Punkt deiner Wahl in Reichweite, die jede Lüge verhindert. Wenn eine Kreatur das erste Mal in einem Zug den Bereich des Zaubers betritt oder ihren Zug dort beginnt, muss sie einen Charismarettungswurf ablegen. Bei einem Misserfolg kann sie nicht bewusst lügen, solange sie sich im Bereich aufhält. Du weißt, welchen Kreaturen ihr Rettungswurf gelungen ist und welchen nicht. Eine betroffene Kreatur ist sich des Zaubers bewusst und kann es somit vermeiden, Fragen zu beantworten, auf die sie eigentlich mit einer Lüge antworten würde. Eine solche Kreatur kann eine Antwort ausweichend formulieren, solange sie noch innerhalb der Grenzen der Wahrheit bleibt."
    ]
  },
  {
    name: "Zorniges Niederstrecken",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: ["Paladin"],
    ritual: false,
    beschreibung: [
      "Das nächste Mal, wenn du innerhalb der Wirkungsdauer des Zaubers ein Ziel mit einer Nahkampfwaffe triffst, verursachst du zusätzlich 1W6 psychischen Schaden. Ist das Ziel eine Kreatur, muss ihr außerdem ein Weisheitsrettungswurf gelingen, um nicht bis zum Ende des Zaubers vor dir verängstigt zu sein. Als Aktion kann eine Kreatur einen Weisheitswurf gegen den SG zum Widerstehen deiner Zauber ablegen, um ihren Willen zu stählen und den Effekt zu beenden."
    ]
  },
  {
    name: "Zungen",
    schule: "Erkenntnismagie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "M"],
    material: "ein kleines Lehmmodell einer Zikkurat",
    klassen: ["Barde", "Kleriker", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Dieser Zauber gewährt der Kreatur, die du berührst, die Fähigkeit, jede gesprochene Sprache zu verstehen, die sie hört. Wenn das Ziel spricht, können außerdem alle Kreaturen verstehen, was es sagt, die mindestens eine Sprache beherrschen und das Ziel hören."
    ]
  },
  {
    name: "Zutritt verwehren",
    schule: "Bannmagie",
    grad: 6,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "1 Tag",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "einige Spritzer Weihwasser, seltener Weihrauch und Rubinstaub im Wert von mindestens 1.000 GM",
    klassen: ["Kleriker"],
    ritual: true,
    beschreibung: [
      "Du erschaffst einen Schutz gegen magische Reisen, der einen Bereich von bis zu 3.600 Quadratmetern auf einer Höhe von bis zu 9 m über dem Boden abdeckt. Für die Wirkungsdauer können Kreaturen nicht in den Bereich teleportieren oder Portale verwenden (etwa solche, die durch den Zauber Tor erschaffen werden), um in den Bereich einzudringen. Der Effekt schützt auch vor Ebenenreisen und verhindert somit, dass Kreaturen den Bereich aus der Astralebene, der Ätherebene, der Feenwildnis, dem Schattensaum oder mit dem Zauber Ebenenwechsel betreten.",
      "Außerdem beschädigt der Effekt Kreaturen eines Typs, den du beim Wirken des Spruchs bestimmst. Wähle eine oder mehrere der folgenden Kategorien: Elementare, Feenwesen, celestische Wesen, Unholde oder Untote. Wenn eine Kreatur der ausgewählten Art das erste Mal in einem Zug den Bereich des Zaubers betritt oder ihren Zug dort beginnt, erleidet sie 5W10 gleißenden oder nekrotischen Schaden (deine Wahl beim Wirken des Zaubers).",
      "Wenn du den Zauber wirkst, kannst du auch ein Passwort festlegen. Eine Kreatur, die das Passwort beim Betreten des Bereichs ausspricht, erleidet keinen Schaden durch den Effekt.",
      "Der Bereich von Zutritt verwehren darf sich nicht mit dem Bereich einer anderen Anwendung dieses Zaubers überschneiden. Wirkst du den Zauber 30 Tage lang in Folge an demselben Ort, hält der Effekt an, bis er gebannt wird. Die Materialkomponenten werden in diesem Fall beim letzten Wirken verbraucht."
    ]
  },
  {
    name: "Zwang",
    schule: "Verzauberung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Barde"],
    ritual: false,
    beschreibung: [
      "Du zwingst Kreaturen deiner Wahl in Reichweite, die du sehen kannst und die dich hören können, sich in eine bestimmte Richtung zu bewegen. Jede betroffene Kreatur muss einen Weisheitsrettungswurf ablegen (wenn ein Ziel nicht bezaubert werden kann, ist es bei diesem automatisch erfolgreich). Bei einem Misserfolg erleidet ein Ziel den Effekt des Zaubers. Bis der Zauber endet, kannst du in jedem deiner Züge eine Bonusaktion verwenden, um eine Richtung zu bestimmen, die horizontal zu dir ist. Jede betroffene Kreatur muss in ihrem nächsten Zug so viel ihrer Bewegung wie möglich nutzen, um sich in diese Richtung zu bewegen, darf jedoch vorher eine Aktion ausführen. Nachdem sich das Ziel auf diese Weise bewegt hat, kann es einen weiteren Weisheitsrettungswurf ablegen, um den Effekt zu beenden.",
      "Ein Ziel ist nicht gezwungen, sich in eine offensichtlich tödliche Gefahr zu bewegen, wie ein Feuer oder eine Grube. Allerdings wird es Gelegenheitsangriffe provozieren, um sich in die festgelegte Richtung zu bewegen."
    ]
  },
  {
    name: "Blitzköder",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Selbst (Radius von 4,5 Metern)",
    komponenten: ["V"],
    material: null,
    klassen: ["Hexenmeister", "Magieschmied", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du lässt einen Blitzstrahl auf eine Kreatur deiner Wahl peitschen, die du innerhalb von 4,5 Metern sehen kannst. Das Ziel muss einen erfolgreichen Rettungswurf auf Stärke durchführen, sonst ziehst du es bis zu drei Meter in gerader Linie an dich heran und es nimmt 1W8 Blitzschaden, falls es innerhalb von 1,5 Metern von dir landet.",
      "Der Schaden dieses Zaubers steigt um je 1W8, wenn du die 5. Stufe (2W8), die 11. Stufe (3W8) und die 17. Stufe (4W8) erreichst."
    ]
  },
  {
    name: "Donnerschlag",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "1,5 m",
    komponenten: ["G"],
    material: null,
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du erzeugst einen Ausbruch donnernden Klangs, den man bis zu 30 m weit hören kann. Jede andere Kreatur innerhalb der Reichweite außer dir muss einen Konstitutionsrettungswurf bestehen oder 1W6 Schallschaden erleiden.",
      "Der Schaden des Zaubers erhöht sich um 1W6 wenn du Stufe 5 erreichst (2W6), Stufe 11 (3W6) und Stufe 17 (4W6)."
    ]
  },
  {
    name: "Dröhnende Klinge",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Eine Runde",
    konzentration: false,
    reichweite: "Selbst (Radius von 1,5 Metern)",
    komponenten: ["G", "M"],
    material: "eine Nahkampfwaffe im Wert von mindestens 1 SM",
    klassen: ["Hexenmeister", "Magieschmied", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du schwingst die Klinge, die du zum Zauberwirken genutzt hast, und greifst damit eine Kreatur in 1,5 Metern Reichweite an. Bei einem Treffer erleidet das Ziel den für die Waffe üblichen Schaden. Zusätzlich wird es bis zu Beginn deines nächsten Zuges von einer dröhnenden Energie ummantelt. Bewegt sich das Ziel bis dahin absichtlich mehr als 1,5 Meter, erleidet es 1W8 Schallschaden und der Zauber endet.",
      "Erreichst du bestimmte Stufen, steigt der Schaden dieses Zaubers. Ab der 5. Stufe verursachst du mit dem Nahkampfangriff bei einem Treffer 1W8 zusätzlichen Schallschaden und der Schaden, den das Ziel erleidet wenn es sich bewegt, steigt auf 2W8. Beide Schadenswürfe steigen ab der 11. Stufe um 1W8 (2W8 und 3W8) und erneut ab der 17. Stufe (3W8 und 4W8)."
    ]
  },
  {
    name: "Erfrierung",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du rufst an einer Kreatur, welche du in der Reichweite sehen kannst, einen betäubenden Frost hervor. Das Ziel muss einen Konstitutionsrettungswurf ablegen. Bei einem Fehlschlag erleidet es 1W6 Kälteschaden und hat Nachteil bei seinem nächsten Waffenangriffswurf, den es vor dem Ende seines nächsten Zuges ablegt.",
      "Der Schaden des Zaubers erhöht sich um 1W6, wenn du die 5. Stufe (2W6), die 11. Stufe (3W6) und die 17. Stufe (4W6) erreichst."
    ]
  },
  {
    name: "Grünfeuerklinge",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Selbst (Radius von 1,5 Metern)",
    komponenten: ["G", "M"],
    material: "eine Nahkampfwaffe im Wert von mindestens 1 SM",
    klassen: ["Hexenmeister", "Magieschmied", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du schwingst die Klinge, die du zum Zauberwirken genutzt hast, und greifst damit eine Kreatur in 1,5 Metern Reichweite an. Bei einem Treffer erleidet das Ziel den für die Waffe üblichen Schaden. Zusätzlich kannst du grüne Flammen vom Ziel auf eine andere Kreatur springen lassen, die du innerhalb von 1,5 Metern deines Ziels siehst. Die zweite Kreatur erleidet Feuerschaden in Höhe deines Zauberwirken-Attributsmodifikators.",
      "Erreichst du bestimmte Stufen, steigt der Schaden dieses Zaubers. Ab der 5. Stufe verursachst du mit dem Nahkampfangriff bei einem Treffer 1W8 zusätzlichen Feuerschaden und der Feuerschaden, den die zweite Kreatur erleidet, erhöht sich auf 1W8 + deinem Zauberwirken-Attributsmodifikator. Beide Schadenswürfe steigen ab der 11. Stufe um 1W8 (2W8 und 2W8) und erneut ab der 17. Stufe (3W8 und 3W8)."
    ]
  },
  {
    name: "Lagerfeuer erschaffen",
    schule: "Beschwörung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu einer Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du erschaffst auf Untergrund, den du innerhalb der Reichweite sehen kannst, ein Lagerfeuer. Bis zum Ende des Zaubers füllt das magische Lagerfeuer einen Würfel mit 1,5 m Kantenlänge. Wenn du den Zauber wirkst, muss jede Kreatur im Bereich einen Geschicklichkeitsrettungswurf durchführen oder 1W8 Feuerschaden erleiden. Eine Kreatur muss auch einen Rettungswurf ablegen, wenn sie sich zum ersten Mal in einem Zug in den Bereich bewegt oder ihren Zug darin beendet. Das Lagerfeuer entzündet brennbare Objekte in seinem Bereich, die nicht getragen werden.",
      "Der Schaden steigt um 1W8 auf der 5. Stufe (2W8), 11. Stufe (3W8) und 17. Stufe (4W8)."
    ]
  },
  {
    name: "Magiestein",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "1 Minute",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du berührst einen bis drei Kiesel und erfüllst sie mit Magie. Du oder jemand anderes kann einen Fernkampf-Zauberangriff mit einem der Kiesel durchführen (werfen oder mit Schleuder, Reichweite 18 m). Wenn jemand anderes angreift, addiert er deinen Zauberwirken-Modifikator statt seines eigenen. Bei einem Treffer erleidet das Ziel Wuchtschaden in Höhe deines Zauberwirken-Modifikators + 1W6. Ob getroffen oder nicht, der Zauber auf dem Kiesel endet.",
      "Wenn du den Zauber erneut wirkst, endet der Zauber auf allen noch betroffenen Kieseln des vorherigen Wirkens."
    ]
  },
  {
    name: "Schwertexplosion",
    schule: "Beschwörung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Selbst (Radius von 1,5 Metern)",
    komponenten: ["V"],
    material: null,
    klassen: ["Hexenmeister", "Magieschmied", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Für einen Moment fegt eine Schar spektraler Klingen in Kreisform um dich herum. Alle Kreaturen innerhalb von 1,5 Metern müssen einen Rettungswurf auf Geschicklichkeit ausführen, ansonsten erleiden sie 1W6 Energieschaden.",
      "Der Schaden des Zaubers steigt um je 1W6, wenn du die 5. Stufe (2W6), 11. Stufe (3W6) und 17. Stufe (4W6) erreichst."
    ]
  },
  {
    name: "Elemente absorbieren",
    schule: "Bannmagie",
    grad: 1,
    zeitaufwand: "1 Reaktion, ausgelöst wenn du Säure-, Kälte-, Feuer-, Blitz- oder Schallschaden erleidest",
    wirkungsdauer: "1 Runde",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["G"],
    material: null,
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Der Zauber fängt etwas von der ankommenden Energie ein, verringert ihren Effekt und bewahrt sie für deinen nächsten Nahkampfangriff auf. Du hast Resistenz gegen die auslösende Schadensart bis zum Beginn deines nächsten Zuges. Das erste Mal, dass du in deinem nächsten Zug mit einem Nahkampfangriff triffst, nimmt das Ziel 1W6 zusätzlichen Schaden des auslösenden Typs. Danach endet der Zauber.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 2. Grades oder höher wirkst, erhöht sich der zusätzliche Schaden um 1W6 für jeden Zauberplatz-Grad über dem ersten."
    ]
  },
  {
    name: "Fangschlinge",
    schule: "Bannmagie",
    grad: 1,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["G", "M"],
    material: "Seil von 7,5 m Länge, welches vom Zauber verzehrt wird",
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Wenn du diesen Zauber wirkst, nutzt du das Seil, um einen Kreis mit 1,5 m Radius zu schaffen, welcher auf dem Boden liegt. Bei Abschluss des Wirkens verschwindet das Seil und der Kreis wird zu einer magischen Falle. Die Falle ist beinahe unsichtbar — ein erfolgreicher Wurf auf Intelligenz (Nachforschungen) gegen deinen Zauberrettungswurf-SG ist nötig, um sie zu erkennen.",
      "Die Falle löst aus, wenn eine kleine, mittelgroße oder große Kreatur sich in den Bereich bewegt. Diese Kreatur muss einen Geschicklichkeitsrettungswurf ablegen oder wird auf magische Weise kopfüber 1 m über dem Boden in die Luft gehoben und ist festgesetzt.",
      "Eine festgesetzte Kreatur kann am Ende jedes ihrer Züge einen Geschicklichkeitsrettungswurf ablegen, um den Effekt zu beenden. Alternativ kann sie oder jemand anderes eine Aktion verwenden, um einen Wurf auf Intelligenz (Arkane Kunde) gegen deinen Zauberrettungswurf-SG abzulegen. Bei einem Erfolg endet der Effekt. Nach dem Auslösen endet der Zauber, wenn keine Kreatur mehr darin gebunden ist."
    ]
  },
  {
    name: "Katapult",
    schule: "Verwandlung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["G"],
    material: null,
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Wähle ein Objekt in Reichweite, das zwischen 1 und 5 Pfund wiegt und das nicht getragen oder gehalten wird. Das Objekt fliegt bis zu 27 m in gerader Linie in eine Richtung deiner Wahl, bevor es auf den Boden fällt. Es stoppt vorher, wenn es auf einer festen Oberfläche einschlägt. Wenn es eine Kreatur treffen würde, muss diese einen Geschicklichkeitsrettungswurf durchführen. Bei einem Fehlschlag trifft das Objekt das Ziel. Wenn das Objekt aufschlägt, nehmen das Objekt und das, was es trifft, jeweils 3W8 Wuchtschaden.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 2. Grades oder höher wirkst, erhöht sich für jeden Grad über dem ersten das maximale Gewicht um 5 Pfund und der Schaden um 1W8."
    ]
  },
  {
    name: "Tashas ätzendes Gebräu",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu einer Minute",
    konzentration: true,
    reichweite: "Selbst (Linie von 9 Metern)",
    komponenten: ["V", "G", "M"],
    material: "ein Stück verfaultes Essen",
    klassen: ["Magieschmied", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Von dir aus spritzt ein neun Meter langer und 1,5 Meter breiter Säurestrahl in eine Richtung deiner Wahl. Alle Kreaturen in der Ziellinie müssen einen erfolgreichen Rettungswurf auf Geschicklichkeit ausführen, sonst sind sie für die Wirkungsdauer des Zaubers mit Säure bedeckt. Kreaturen können die Säure als Aktion von sich oder anderen abschrubben oder abwaschen. Eine mit Säure bedeckte Kreatur nimmt zu Beginn jedes ihrer Züge 2W4 Säureschaden.",
      "Auf höheren Graden: Wenn du diesen Zauber wirkst, indem du einen Zauberplatz des 2. Grades oder höher nutzt, steigt der Schaden für jeden Grad über dem 1. Grad um 2W4."
    ]
  },
  {
    name: "Feuerwerk",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Wähle einen Bereich nichtmagischer Flammen, die du innerhalb der Reichweite sehen kannst und die in einen Würfel mit 1,5 m Kantenlänge passen. Du kannst die Flammen löschen und dabei entweder Feuerwerk oder Rauch erzeugen:",
      "Feuerwerk: Das Ziel explodiert in einem grellen Farbenrausch. Jede Kreatur innerhalb von 3 m des Ziels muss erfolgreich einen Konstitutionsrettungswurf ablegen oder wird bis zum Ende seines nächsten Zuges blind.",
      "Rauch: Dichter, schwarzer Rauch breitet sich vom Ziel in einem Radius von 6 m aus und bewegt sich auch um Ecken. Das verrauchte Gebiet ist komplett verschleiert. Der Rauch bleibt für 1 Minute oder bis ein starker Wind ihn verweht."
    ]
  },
  {
    name: "Himmelsschreiben",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Sichtweite",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magieschmied"],
    ritual: true,
    beschreibung: [
      "Du kannst bis zu zehn Wörter in einem Bereich des Himmels formen, den du sehen kannst. Die Worte erscheinen, als seien sie aus Wolken gemacht, und verbleiben für die Dauer des Zaubers an ihrem Ort. Ein starker Wind kann die Wolken verwehen und den Zauber verfrüht enden lassen."
    ]
  },
  {
    name: "Flammenpfeile",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du berührst einen Köcher, der Pfeile oder Bolzen enthält. Wenn ein Ziel von einem Fernkampfangriff getroffen wird, der ein Geschoss aus diesem Köcher verwendet, nimmt das Ziel 1W6 zusätzlichen Feuerschaden. Die Magie endet bei einem Geschoss, wenn es trifft oder verfehlt. Der Zauber selbst endet, wenn zwölf Geschosse aus dem Köcher entnommen wurden.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 4. Grades oder höher verwendest, erhöht sich die Anzahl der Geschosse um zwei für jeden Zauberplatz-Grad über dem dritten."
    ]
  },
  {
    name: "Intellektfestung",
    schule: "Bannmagie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu einer Stunde",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Barde", "Hexenmeister", "Magieschmied", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du oder eine bereitwillige Kreatur, die du in Reichweite sehen kannst, ist für die Wirkungsdauer resistent gegen psychischen Schaden sowie bei Rettungswürfen auf Charisma, Intelligenz und Weisheit im Vorteil.",
      "Auf höheren Graden: Wenn du diesen Zauber wirkst, indem du einen Zauberplatz 4. Grades oder höher nutzt, kannst du für jeden Grad über dem 3. Grad eine zusätzliche Kreatur als Ziel wählen. Die Kreaturen müssen sich innerhalb von neun Metern voneinander befinden, wenn du sie als Ziel wählst."
    ]
  },
  {
    name: "Nickerchen",
    schule: "Verzauberung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "10 Minuten",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["G", "M"],
    material: "eine Prise Sand",
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du machst eine beruhigende Geste, und bis zu drei bereitwillige Kreaturen deiner Wahl, die du innerhalb der Reichweite sehen kannst, verlieren für die Wirkungsdauer des Zaubers das Bewusstsein. Der Zauber endet bei einem Ziel vorzeitig, wenn es Schaden erleidet oder jemand eine Aktion verwendet, um es wachzurütteln oder wach zu schlagen. Wenn ein Ziel für die volle Wirkungsdauer bewusstlos bleibt, erlangt es den Vorzug einer kurzen Rast und kann von diesem Zauber nicht mehr betroffen werden, bevor es nicht eine lange Rast abschließt.",
      "Auf höheren Graden. Wenn du diesen Zauber mit einem Zauberplatz des 4. Grades oder höher verwendest, kannst du für jeden Zauberplatz-Grad über dem dritten eine zusätzliche bereitwillige Kreatur als Ziel wählen."
    ]
  },
  {
    name: "Winziger Diener",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du berührst ein winziges, nichtmagisches Objekt, das kein Teil eines anderen Objektes oder einer Oberfläche ist und auch nicht von einer anderen Kreatur getragen wird. Das Ziel wird belebt, und es sprießen ihm kleine Arme und Beine. Es wird zu einer Kreatur unter deiner Kontrolle, bis der Zauber endet oder die Kreatur auf 0 Trefferpunkte reduziert wird.",
      "Als eine Bonusaktion kannst du der Kreatur Befehle erteilen, wenn sie sich innerhalb von 36 m von dir aufhält. Du entscheidest, welche Aktion die Kreatur unternehmen wird und wohin sie sich während ihres Zuges bewegen wird. Du kannst aber auch einen einfachen, allgemeinen Befehl erteilen. Wenn du keine Befehle erteilst, wird der Diener nichts tun, als sich gegen feindlich gesinnte Kreaturen zu verteidigen. Sobald ihm ein Befehl erteilt wurde, wird der Diener diesem folgen, bis die Aufgabe erfüllt ist.",
      "Wenn die Kreatur auf 0 Trefferpunkte reduziert wurde, kehrt sie in ihre ursprüngliche Form zurück und aller verbleibender Schaden wird auf diese Form übertragen.",
      "Auf höheren Graden. Wenn du diesen Zauber mit einem Zauberplatz des 4. Grades oder höher wirkst, kannst du zwei weitere Objekte für jeden Zauberplatz-Grad über dem 3. beleben.",
      "Winziger Diener — Winziges Konstrukt, gesinnungslos. RK 15 (natürliche Rüstung), TP 10 (4W4), Bewegungsrate 9 m / klettern 9 m. STR 4 (–3), GES 16 (+3), KON 10 (+0), INT 2 (–4), WEI 10 (+0), CHA 1 (–5). Schadensimmunitäten: Gift, psychisch. Zustandsimmunitäten: Blind, Bezaubert, Taub, Erschöpfung, Verängstigt, Gelähmt, Versteinert, Vergiftet. Sinne: Blindsicht 18 m (darüber hinaus blind), Passive Wahrnehmung 10. Sprachen: –. Aktion — Hieb: Nahkampf-Waffenangriff: +5 zum Treffen, Reichweite 1,50 m, ein Ziel. Treffer: 5 (1W4 + 3) Wuchtschaden."
    ]
  },
  {
    name: "Elementarverderben",
    schule: "Verwandlung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Wähle eine Kreatur, die du innerhalb der Reichweite sehen kannst, und wähle eine der folgenden Schadensarten: Säure, Kälte, Feuer, Blitz oder Schall. Das Ziel muss einen Konstitutionsrettungswurf ablegen oder wird für die Wirkungsdauer betroffen. Wenn das Ziel während eines Zuges zum ersten Mal Schaden der ausgewählten Art erleidet, erleidet es 2W6 zusätzlichen Schaden dieser Art. Zudem verliert das Ziel jede Resistenz gegen diese Schadensart bis der Zauber endet.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 5. Grades oder höher verwendest, kannst du für jeden Zauberplatz-Grad über dem vierten eine zusätzliche Kreatur als Ziel wählen. Die Kreaturen müssen innerhalb von 9 m voneinander sein."
    ]
  },
  {
    name: "Konstrukt beschwören",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu einer Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "ein verzierter Stein und eine metallene Schatulle im Wert von mindestens 400 GM",
    klassen: ["Magieschmied", "Magier"],
    ritual: false,
    beschreibung: [
      "Du rufst den Geist eines Konstrukts herbei. Er erscheint in einem freien Bereich, den du in Reichweite sehen kannst. Wenn du diesen Zauber wirkst, entscheide dich für ein Material: Lehm, Eisen oder Stein. Die Kreatur ähnelt einem Golem oder Modron aus dem gewählten Material. Die Kreatur verschwindet, wenn der Zauber endet oder ihre Trefferpunkte auf 0 sinken.",
      "Die Kreatur ist mit dir und deinen Gefährten verbündet. Im Kampf nutzt die Kreatur deine Initiative und ist unmittelbar nach dir am Zug. Sie gehorcht deinen mündlichen Befehlen (erfordert keine Aktion). Befiehlst du ihr nichts, führt sie die Ausweichaktion aus.",
      "Konstruktgeist (Mittelgroßes Konstrukt): RK 13 + Zaubergrad, TP 40 + 15 pro Grad ab dem 4. STR 18, GES 10, KON 18, INT 14, WEI 11, CHA 5. Resistenz: Gift. Immunität: Bezaubert, Erschöpfung, Kampfunfähig, Verängstigt, Vergiftet, Versteinert. Dunkelsicht 18 m. Mehrfachangriff: Hälfte des Zaubergrads. Hieb: 1W8 + 4 + Wuchtschaden des Zaubergrads. Sondermerkmale: Erhitzter Körper (Eisen: 1W10 Feuerschaden bei Berührung), Steinerne Lethargie (Stein: RW Weisheit oder Halbierung Bewegung und keine Reaktionen), Berserkerpeitsche-Reaktion (Lehm: Hiebangriff bei erlittenem Schaden).",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, verwende den höheren Zaubergrad, wo immer er im Wertekasten auftaucht."
    ]
  },
  {
    name: "Fertigkeitsermächtigung",
    schule: "Verwandlung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Deine Magie vertieft das Verständnis einer Kreatur bezüglich ihrer eigenen Talente. Du berührst eine bereitwillige Kreatur und verleihst ihr Expertise in einer Fertigkeit deiner Wahl. Bis zum Ende des Zaubers verdoppelt die Kreatur ihren Übungsbonus für Attributswürfe, die sie ablegt und welche die gewählte Fertigkeit verwenden.",
      "Du musst eine Fertigkeit wählen, in welcher das Ziel geübt ist und welche nicht bereits von einem Effekt wie Expertise profitiert, der den Übungsbonus verdoppelt."
    ]
  },
  {
    name: "Steinwandeln",
    schule: "Verwandlung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "bis gebannt",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "Lehm und Wasser",
    klassen: ["Magieschmied"],
    ritual: false,
    beschreibung: [
      "Du wählst einen Bereich aus Gestein oder Schlamm, den du sehen kannst und der in einen Würfel von 12 m Kantenlänge passt, und wählst dann einen der folgenden Effekte:",
      "Von Stein zu Schlamm wandeln. Nichtmagisches Gestein jeder Art in dem Bereich wird zu einem gleichen Volumen dicken, fließenden Schlamms, der bis zum Ende der Wirkungsdauer verbleibt. Der Untergrund im Bereich des Zaubers wird schlammig genug, dass Kreaturen darin versinken können. Jeder Meter, den sich eine Kreatur durch den Schlamm bewegt, kostet 4 m Bewegungsrate, und jede Kreatur, die sich auf dem Untergrund befindet, wenn du den Zauber wirkst, muss einen Stärkerettungswurf ablegen. Eine Kreatur muss den Rettungswurf auch ablegen, wenn sie sich zum ersten Mal in einem Zug in den Bereich bewegt oder ihren Zug darin beendet. Bei einem Fehlschlag sinkt eine Kreatur in den Schlamm und ist festgesetzt. Sie kann allerdings eine Aktion verwenden, um den Zustand bei sich selbst zu beenden, indem sie sich aus dem Schlamm befreit.",
      "Wenn du den Zauber an einer Decke anwendest, so fällt der Schlamm herunter. Jede Kreatur unter dem fallenden Schlamm muss einen Geschicklichkeitsrettungswurf ablegen. Eine Kreatur erleidet 4W8 Wuchtschaden bei einem Fehlschlag, die Hälfte davon bei einem Erfolg.",
      "Von Schlamm in Stein wandeln. Nichtmagischer Schlamm oder Treibsand in diesem Bereich, der nicht tiefer als 3 m ist, verwandelt sich für die Dauer des Zaubers in weiches Gestein. Jede Kreatur, die sich im Schlamm befindet, wenn er sich verwandelt, muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Erfolg wird die Kreatur sicher zur Oberfläche an einen unbesetzten Platz geschoben. Bei einem Fehlschlag wird eine Kreatur durch das Gestein festgesetzt. Eine festgesetzte Kreatur, oder eine andere Kreatur in Reichweite, kann eine Aktion verwenden, um zu versuchen, das Gestein zu zerbrechen. Dazu muss sie einen Wurf auf Stärke gegen SG 20 bestehen oder dem Gestein Schaden zufügen. Das Gestein hat RK 15, 25 Trefferpunkte und ist immun gegen Giftschaden und psychischen Schaden."
    ]
  },
  {
    name: "Gedankensplitter",
    schule: "Verzauberung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Eine Runde",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du treibst einen verstörenden Splitter psychischer Energie in den Geist einer Kreatur, die du in Reichweite sehen kannst. Das Ziel muss einen erfolgreichen Rettungswurf auf Intelligenz durchführen, sonst nimmt es 1W6 psychischen Schaden und muss 1W4 von seinem nächsten Rettungswurf vor Ende deines nächsten Zuges abziehen.",
      "Erreichst du bestimmte Stufen, steigt der Schaden dieses Zaubers um 1W6: 5. Stufe (2W6), 11. Stufe (3W6) und 17. Stufe (4W6)."
    ]
  },
  {
    name: "Geistwolke",
    schule: "Nekromantie",
    grad: 3,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu einer Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Hexenmeister", "Kleriker", "Magier", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du rufst Geister der Toten herbei, die für die Wirkungsdauer des Zaubers um dich herumflattern. Die Geister sind immateriell und unverwundbar.",
      "Bis der Zauber endet, fügst du Kreaturen, die du innerhalb von drei Metern mit einem Angriff triffst, 1W8 zusätzlichen Schaden zu. Die Schadensart ist gleißend, kalt oder nekrotisch (deine Wahl beim Wirken des Zaubers). Kreaturen, die diesen Schaden erleiden, können bis zu Beginn deines nächsten Zuges keine Trefferpunkte regenerieren.",
      "Außerdem kannst du die Bewegungsrate jeglicher Kreatur, die du sehen kannst und die ihren Zug innerhalb von drei Metern von dir beginnt, bis zum Beginn deines nächsten Zuges um drei Meter reduzieren.",
      "Auf höheren Graden: Wenn du diesen Zauber wirkst, indem du einen Zauberplatz des 4. Grades oder höher nutzt, steigt der Schaden alle zwei Grade über den 3. hinaus um 1W8."
    ]
  },
  {
    name: "Katastrophenklinge",
    schule: "Beschwörung",
    grad: 9,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu einer Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du erzeugst einen klingenförmigen Riss von etwa einem Meter Länge durch die planaren Ebenen in einem freien Bereich, den du in Reichweite sehen kannst. Die Klinge bleibt für die Länge der Wirkungsdauer bestehen.",
      "Wenn du diesen Zauber wirkst, kannst du mit der Klinge bis zu zwei Nahkampf-Zauberangriffe gegen Kreaturen, lose Gegenstände oder Strukturen im Radius von 1,5 Metern um die Klinge ausführen. Triffst du, erleidet das Ziel 4W12 Energieschaden. Der Angriff ist ein kritischer Treffer, wenn du mit dem W20 mindestens eine 18 wirfst. Bei einem kritischen Treffer verursacht die Klinge zusätzlichen Energieschaden in Höhe von 8W12 (insgesamt 12W12).",
      "In deinem Zug kannst du die Klinge als Bonusaktion um bis zu neun Meter in einen freien Bereich bewegen und dort zwei weitere Nahkampf-Zauberangriffe ausführen. Die Klinge kann unbedenklich jegliche Barriere passieren, sogar eine Energiewand."
    ]
  },
  {
    name: "Schattenbrut beschwören",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu einer Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "in einen Edelstein eingeschlossene Tränen im Wert von mindestens 300 GM",
    klassen: ["Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du rufst einen schattenhaften Geist herbei. Er erscheint in einem freien Bereich, den du in Reichweite sehen kannst. Wenn du diesen Zauber wirkst, entscheide dich für ein Gefühl: Furcht, Raserei oder Verzweiflung. Die Kreatur nimmt eine unförmige, zweibeinige Gestalt an, die das von dir gewählte Gefühl verkörpert. Die Kreatur verschwindet, wenn der Zauber endet oder ihre Trefferpunkte auf 0 sinken.",
      "Die Kreatur ist mit dir und deinen Gefährten verbündet. Im Kampf nutzt die Kreatur deine Initiative und ist unmittelbar nach dir am Zug. Sie gehorcht deinen mündlichen Befehlen (erfordert keine Aktion). Befiehlst du ihr nichts, führt sie die Ausweichaktion aus.",
      "Schattengeist (Mittelgroße Monstrosität): RK 11 + Zaubergrad, TP 35 + 15 pro Grad ab dem 4. STR 13, GES 16, KON 15, INT 4, WEI 10, CHA 16. Resistenz: Nekrotisch. Immunität: Verängstigt. Dunkelsicht 36 m. Mehrfachangriff: Hälfte des Zaubergrads. Schauriges Zerreißen: 1W12 + 3 + Kälteschaden des Zaubergrads. Schrecklicher Schrei (1/Tag): RW Weisheit oder 1 Minute verängstigt. Sondermerkmale: Terror-Raserei (Wut: Vorteil gegen Verängstigte), Gewicht des Kummers (Verzweiflung: Bewegung reduziert), Heimlicher Schatten (Furcht: Verstecken in Dunkelheit als Bonusaktion).",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, verwende den höheren Zaubergrad, wo immer er im Wertekasten auftaucht."
    ]
  },
  {
    name: "Tashas außerweltliche Gestalt",
    schule: "Verwandlung",
    grad: 6,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu einer Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "ein Gegenstand, in den ein Symbol der äußeren Ebenen eingraviert ist, im Wert von mindestens 500 GM",
    klassen: ["Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du sprichst eine Beschwörungsformel, um von der Magie der unteren oder oberen Ebenen zu zehren (du wählst) und um dich zu verwandeln. Bis der Zauber endet, verschaffst du dir folgende Vorzüge:",
      "• Du bist immun gegen Feuer- und Giftschaden (untere Ebenen) oder gegen gleißenden und nekrotischen Schaden (obere Ebenen).",
      "• Du bist immun gegen den Zustand Vergiftet (untere Ebenen) oder gegen den Zustand Bezaubert (obere Ebenen).",
      "• Aus deinem Rücken wachsen spektrale Flügel und geben dir eine Flugbewegungsrate von zwölf Metern. Du erhältst einen Bonus von +2 auf deine RK.",
      "• All deine Waffenangriffe werden zu magischen Angriffen. Wenn du mit einer Waffe angreifst, kannst du für Angriffs- und Schadenswürfe deinen Zauberwirken-Attributsmodifikator statt deines Stärke- oder Geschicklichkeitsmodifikators verwenden.",
      "• Wenn du in deinem Zug die Angriffsaktion wählst, kannst du zweimal statt einmal angreifen. Ignoriere diesen Vorzug, wenn du bereits ein Merkmal wie Zusätzlicher Angriff nutzt."
    ]
  },
  {
    name: "Tashas Gedankenpeitsche",
    schule: "Verzauberung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Eine Runde",
    konzentration: false,
    reichweite: "27 m",
    komponenten: ["V"],
    material: null,
    klassen: ["Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du peitschst eine andere Kreatur psychisch, die du in Reichweite sehen kannst. Das Ziel muss einen Rettungswurf auf Intelligenz ausführen. Bei Misserfolg nimmt es 3W6 psychischen Schaden und kann bis zum Ende seines nächsten Zuges keine Reaktion ausführen. Außerdem kann es in seinem nächsten Zug nur entweder eine Bewegung, eine Aktion oder eine Bonusaktion ausführen. Bei einem erfolgreichen Rettungswurf nimmt das Ziel die Hälfte des Schadens und erleidet keinen der anderen Effekte.",
      "Auf höheren Graden: Wenn du diesen Spruch mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, kannst du für jeden Grad über den 2. hinaus eine zusätzliche Kreatur als Ziel wählen. Die Kreaturen müssen sich innerhalb von neun Metern voneinander befinden."
    ]
  },
  {
    name: "Tier beschwören",
    schule: "Beschwörung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu einer Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "eine Feder, ein Fellbüschel und ein Fischschwanz in einer vergoldeten Eichel im Wert von mindestens 200 GM",
    klassen: ["Druide", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du rufst einen Tiergeist herbei. Er erscheint in einem freien Bereich, den du in Reichweite sehen kannst. Wenn du diesen Zauber wirkst, wähle eine der folgenden Umgebungen: Land, Luft oder Wasser. Die Kreatur ähnelt einem Tier, das in dieser Umgebung zu Hause ist. Die Kreatur verschwindet, wenn der Zauber endet oder ihre Trefferpunkte auf 0 sinken.",
      "Die Kreatur ist mit dir und deinen Gefährten verbündet. Im Kampf nutzt die Kreatur deine Initiative und ist unmittelbar nach dir am Zug. Sie gehorcht deinen mündlichen Befehlen (erfordert keine Aktion). Befiehlst du ihr nichts, führt sie die Ausweichaktion aus.",
      "Geist der Bestie (Kleines Tier): RK 11 + Zaubergrad, TP 20 (Luft) oder 30 (Land/Wasser) + 5 pro Grad ab dem 3. Bewegungsrate 9 m, Klettern 9 m (Land), Fliegen 18 m (Luft), Schwimmen 9 m (Wasser). STR 18, GES 11, KON 16, INT 4, WEI 14, CHA 5. Dunkelsicht 18 m. Mehrfachangriff: Hälfte des Zaubergrads. Zerfleischen: 1W8 + 4 + Stichschaden des Zaubergrads. Sondermerkmale: Rudeltaktik (Land/Wasser), Vorbeifliegen (Luft), Wasser atmen (Wasser).",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 3. oder eines höheren Grades wirkst, verwende den höheren Zaubergrad, wo immer er im Wertekasten auftaucht."
    ]
  },
  {
    name: "Traum vom blauen Schleier",
    schule: "Beschwörung",
    grad: 7,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "Sechs Stunden",
    konzentration: false,
    reichweite: "6 m",
    komponenten: ["V", "G", "M"],
    material: "ein magischer Gegenstand oder eine bereitwillige Kreatur der Zielwelt",
    klassen: ["Barde", "Hexenmeister", "Magier", "Zauberer"],
    ritual: false,
    beschreibung: [
      "Du und bis zu acht bereitwillige Kreaturen in Reichweite verlieren für die Wirkungsdauer des Zaubers das Bewusstsein und erfahren Visionen einer anderen Welt der materiellen Ebene (wie Oerth, Toril, Krynn oder Eberron). Erreicht der Zauber das Ende seiner Gesamtwirkungsdauer, schließt jede eurer Visionen damit ab, dass ihr einen geheimnisvollen blauen Vorhang findet und zur Seite zieht — ihr werdet geistig und körperlich in die Welt aus den Visionen transportiert.",
      "Um diesen Zauber wirken zu können, musst du über einen magischen Gegenstand aus der Zielwelt verfügen und dir über die Existenz der Welt bewusst sein. Euer Reiseziel befindet sich an einem sicheren Ort innerhalb 1,6 km von wo der Gegenstand hergestellt wurde. Alternativ kann eine mitreisende Kreatur, die in der Zielwelt geboren wurde, als Anker dienen.",
      "Der Zauber bricht für Kreaturen, die Schaden erleiden, früher ab. Diese werden nicht transportiert. Erleidest du Schaden, bricht der Zauber für alle beteiligten Kreaturen ab."
    ]
  },
  {
    name: "Unhold beschwören",
    schule: "Beschwörung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu einer Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "Blut eines Humanoiden in einer Rubinphiole im Wert von mindestens 600 GM",
    klassen: ["Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du rufst einen Unholdgeist herbei. Er erscheint in einem freien Bereich, den du in Reichweite sehen kannst. Wähle zwischen Dämon, Teufel und Yugoloth. Die Kreatur ähnelt einem Unhold des gewählten Typs. Die Kreatur verschwindet, wenn der Zauber endet oder ihre Trefferpunkte auf 0 sinken.",
      "Die Kreatur ist mit dir und deinen Gefährten verbündet. Im Kampf nutzt die Kreatur deine Initiative und ist unmittelbar nach dir am Zug. Sie gehorcht deinen mündlichen Befehlen (erfordert keine Aktion). Befiehlst du ihr nichts, führt sie die Ausweichaktion aus.",
      "Unholdgeist (Großer Unhold): RK 12 + Zaubergrad, TP 50 (Dämon) / 40 (Teufel) / 60 (Yugoloth) + 15 pro Grad ab dem 7. Bewegungsrate 12 m, Klettern 12 m (Dämon), Fliegen 18 m (Teufel). STR 13, GES 16, KON 15, INT 10, WEI 10, CHA 16. Resistenz: Feuer. Immunität: Gift, Vergiftet. Telepathie 18 m. Magieresistenz. Mehrfachangriff: Hälfte des Zaubergrads. Aktionen je nach Typ: Biss (Dämon, 1W12 nekrotisch), Flamme schleudern (Teufel, 2W6 Feuer, 45 m), Klauen (Yugoloth, 1W8 Hieb + Teleport). Todeskampf (Dämon): Explosion bei 0 TP.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 7. oder eines höheren Grades wirkst, verwende den höheren Zaubergrad, wo immer er im Wertekasten auftaucht."
    ]
  },
  {
    name: "Aberration beschwören",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu einer Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "ein eingelegtes Tentakel und ein Augapfel in einer Phiole mit Platinintarsie im Wert von mindestens 400 GM",
    klassen: ["Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du rufst eine geisterhafte Aberration herbei. Sie erscheint in einem freien Bereich, den du in Reichweite sehen kannst. Wenn du diesen Zauber wirkst, wähle zwischen Beobachter, Slaad und Sternengezücht. Die Kreatur ähnelt der entsprechenden Aberration. Die Kreatur verschwindet, wenn der Zauber endet oder ihre Trefferpunkte auf 0 sinken.",
      "Die Kreatur ist mit dir und deinen Gefährten verbündet. Im Kampf nutzt die Kreatur deine Initiative und ist unmittelbar nach dir am Zug. Sie gehorcht deinen mündlichen Befehlen (erfordert keine Aktion). Befiehlst du ihr nichts, führt sie die Ausweichaktion aus und vermeidet mit ihrer Bewegung Gefahren.",
      "Geisterhafte Aberration (Mittelgroße Aberration): RK 11 + Zaubergrad, TP 40 + 10 pro Grad ab dem 5. Bewegungsrate 9 m, Fliegen 9 m Schweben (nur Beobachter). STR 16, GES 10, KON 15, INT 16, WEI 10, CHA 6. Immunität: Psychisch. Dunkelsicht 18 m. Mehrfachangriff: Hälfte des Zaubergrads. Klauen (Slaad): 1W10 + 3 + Hiebschaden des Zaubergrads, Ziel kann keine TP wiederherstellen bis nächsten Zug. Augenstrahl (Beobachter): 1W8 + 3 + psychischer Schaden des Zaubergrads, Reichweite 45 m. Psychischer Hieb (Sternengezücht): 1W8 + 3 + psychischer Schaden des Zaubergrads. Sondermerkmale: Regeneration (Slaad: 5 TP pro Zug), Flüsternde Aura (Sternengezücht: RW Weisheit oder 2W6 psychischer Schaden für alle in 1,5 m).",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 5. oder eines höheren Grades wirkst, verwende den höheren Zaubergrad, wo immer er im Wertekasten auftaucht."
    ]
  },
  {
    name: "Celestisches Wesen beschwören",
    schule: "Beschwörung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu einer Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "eine goldene Reliquie im Wert von mindestens 500 GM",
    klassen: ["Kleriker", "Paladin"],
    ritual: false,
    beschreibung: [
      "Du rufst einen celestischen Geist herbei. Er erscheint in engelsgleicher Gestalt in einem freien Bereich, den du in Reichweite sehen kannst. Wenn du diesen Zauber wirkst, wähle zwischen Rächer und Verteidiger. Deine Wahl bestimmt den Angriff, den die Kreatur ausführen kann. Die Kreatur verschwindet, wenn der Zauber endet oder ihre Trefferpunkte auf 0 sinken.",
      "Die Kreatur ist mit dir und deinen Gefährten verbündet. Im Kampf nutzt die Kreatur deine Initiative und ist unmittelbar nach dir am Zug. Sie gehorcht deinen mündlichen Befehlen (erfordert keine Aktion). Befiehlst du ihr nichts, führt sie die Ausweichaktion aus und vermeidet mit ihrer Bewegung Gefahren.",
      "Celestischer Geist (Großes celestisches Wesen): RK 11 + Zaubergrad + 2 (nur Verteidiger), TP 40 + 10 pro Grad ab dem 6. Bewegungsrate 9 m, Fliegen 12 m. STR 16, GES 14, KON 16, INT 10, WEI 14, CHA 16. Resistenz: Gleißend. Immunität: Bezaubert, Verängstigt. Dunkelsicht 18 m. Mehrfachangriff: Hälfte des Zaubergrads. Gleißender Bogen (Rächer): 2W6 + 2 + gleißender Schaden des Zaubergrads, Reichweite 45/180 m. Gleißender Streitkolben (Verteidiger): 1W10 + 3 + Zaubergrad gleißender Schaden + 1W10 temporäre TP für eine Kreatur in Sichtweite. Heilende Berührung (1/Tag): 2W8 + Zaubergrad Trefferpunkte zurück.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 6. oder eines höheren Grades wirkst, verwende den höheren Zaubergrad, wo immer er im Wertekasten auftaucht."
    ]
  },
  {
    name: "Elementar beschwören",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu einer Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "Luft, ein Kiesel, Asche und Wasser in einer Phiole mit Goldintarsie im Wert von mindestens 400 GM",
    klassen: ["Druide", "Magier", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du rufst einen Elementargeist herbei. Er erscheint in einem freien Bereich, den du in Reichweite sehen kannst. Entscheide dich für ein Element: Erde, Feuer, Luft oder Wasser. Die Kreatur ähnelt einer zweibeinigen, vom gewählten Element umhüllten Gestalt. Die Kreatur verschwindet, wenn der Zauber endet oder ihre Trefferpunkte auf 0 sinken.",
      "Die Kreatur ist mit dir und deinen Gefährten verbündet. Im Kampf nutzt die Kreatur deine Initiative und ist unmittelbar nach dir am Zug. Sie gehorcht deinen mündlichen Befehlen (erfordert keine Aktion). Befiehlst du ihr nichts, führt sie die Ausweichaktion aus und vermeidet mit ihrer Bewegung Gefahren.",
      "Elementargeist (Mittelgroßer Elementar): RK 11 + Zaubergrad, TP 50 + 10 pro Grad ab dem 5. Bewegungsrate 12 m, Graben 12 m (Erde), Fliegen 12 m Schweben (Luft), Schwimmen 12 m (Wasser). STR 18, GES 15, KON 17, INT 4, WEI 10, CHA 16. Resistenzen: Säure (Wasser), Blitz und Schall (Luft), Stich und Hieb (Erde). Immunität: Gift; Feuer (nur Feuer). Zustandsimmunität: Bewusstlos, Erschöpft, Gelähmt, Vergiftet, Versteinert. Amorphe Gestalt (Feuer/Luft/Wasser): kann durch 2,5 cm breite Bereiche bewegen. Mehrfachangriff: Hälfte des Zaubergrads. Hieb: 1W10 + 4 + Wuchtschaden (Erde/Luft/Wasser) oder Feuerschaden (Feuer) des Zaubergrads.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 5. oder eines höheren Grades wirkst, verwende den höheren Zaubergrad, wo immer er im Wertekasten auftaucht."
    ]
  },
  {
    name: "Feenwesen beschwören",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu einer Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "Beschreibung folgt.",
    klassen: ["Druide", "Hexenmeister", "Magier", "Waldläufer"],
    ritual: false,
    beschreibung: [
      "Du rufst ein Feenwesen herbei. Es erscheint in einem freien Bereich, den du in Reichweite sehen kannst. Wenn du diesen Zauber wirkst, entscheide dich für eine Stimmung: Heiter, Trickreich oder Wütend. Die Kreatur verschwindet, wenn der Zauber endet oder ihre Trefferpunkte auf 0 sinken.",
      "Die Kreatur ist mit dir und deinen Gefährten verbündet. Im Kampf nutzt die Kreatur deine Initiative und ist unmittelbar nach dir am Zug. Sie gehorcht deinen mündlichen Befehlen (erfordert keine Aktion). Befiehlst du ihr nichts, führt sie die Ausweichaktion aus.",
      "Kleines Feenwesen: RK 12 + Zaubergrad, TP 30 + 10 pro Grad ab dem 4. Bewegungsrate 12 m. STR 13, GES 16, KON 14, INT 14, WEI 11, CHA 16. Immunität: Bezaubert. Dunkelsicht 18 m. Mehrfachangriff: Hälfte des Zaubergrads. Kurzschwert: 1W6 + 3 + Stichschaden des Zaubergrads + 1W6 Energieschaden. Bonusaktion — Feenschritt: Teleportation bis zu 9 m. Stimmungseffekte: Heiter (RW Weisheit oder 1 Minute bezaubert), Trickreich (magische Dunkelheit 1,5 m), Wütend (Vorteil auf nächsten Angriff).",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, verwende den höheren Zaubergrad, wo immer er im Wertekasten auftaucht."
    ]
  },
  {
    name: "Untoten beschwören",
    schule: "Nekromantie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu einer Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "ein vergoldeter Schädel im Wert von mindestens 300 GM",
    klassen: ["Hexenmeister", "Magier"],
    ritual: false,
    beschreibung: [
      "Du rufst einen untoten Geist herbei. Er erscheint in einem freien Bereich, den du in Reichweite sehen kannst. Wähle eine der folgenden Gestalten: Geisterhaft, Skelett oder Verwesend. Die Kreatur verschwindet, wenn der Zauber endet oder ihre Trefferpunkte auf 0 sinken.",
      "Die Kreatur ist mit dir und deinen Gefährten verbündet. Im Kampf nutzt die Kreatur deine Initiative und ist unmittelbar nach dir am Zug. Sie gehorcht deinen mündlichen Befehlen (erfordert keine Aktion). Befiehlst du ihr nichts, führt sie die Ausweichaktion aus.",
      "Untoter Geist (Mittelgroßer Untoter): RK 11 + Zaubergrad, TP 30 (Geisterhaft/Verwesend) / 20 (Skelett) + 10 pro Grad ab dem 4. Bewegungsrate 9 m, Fliegen 12 m Schweben (Geisterhaft). STR 12, GES 16, KON 15, INT 4, WEI 10, CHA 9. Immunität: Nekrotisch, Gift, Erschöpfung, Gelähmt, Verängstigt, Vergiftet. Dunkelsicht 18 m. Mehrfachangriff: Hälfte des Zaubergrads. Aktionen je nach Gestalt: Grabesblitz (Skelett, 2W4 nekrotisch, 45 m), Todesberührung (Geisterhaft, 1W8 nekrotisch + RW Weisheit oder verängstigt), Verrottende Klaue (Verwesend, 1W6 Hieb + RW KON oder gelähmt). Sondermerkmale: Körperloser Durchgang (Geisterhaft), Verfaulende Aura (Verwesend).",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 4. oder eines höheren Grades wirkst, verwende den höheren Zaubergrad, wo immer er im Wertekasten auftaucht."
    ]
  },
  {
    name: "Abi-Dalzims schreckliches Welken",
    schule: "Nekromantie",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "45 m",
    komponenten: ["V", "G", "M"],
    material: "ein wenig Schwamm",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du entziehst allen Kreaturen in einem Würfel mit 9 m Kantenlänge, zentriert auf einen Punkt deiner Wahl innerhalb der Reichweite, die Feuchtigkeit. Jede Kreatur in diesem Bereich muss einen Konstitutionsrettungswurf durchführen. Konstrukte und Untote sind davon nicht betroffen, und Pflanzen sowie Wasserelementare müssen diesen Rettungswurf mit Nachteil durchführen.",
      "Bei einem Fehlschlag erleidet eine Kreatur 12W8 nekrotischen Schaden, die Hälfte davon bei einem Erfolg. Nicht-magische Pflanzen im Bereich, die keine Kreaturen sind, etwa Bäume und Büsche, verwelken und sterben sofort."
    ]
  },
  {
    name: "Aganazzars Versenger",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "die Schuppe eines roten Drachen",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Eine brüllende Stichflamme von 9 m Länge und 1,5 m Breite entspringt in gerader Linie aus dir in eine Richtung deiner Wahl. Jede Kreatur auf dieser Linie muss einen Geschicklichkeitsrettungswurf durchführen. Bei einem Fehlschlag erleidet eine Kreatur 3W8 Feuerschaden, die Hälfte davon bei einem Erfolg.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 3. Grades oder höher wirkst, erhöht sich der Schaden um 1W8 für jeden Zauberplatz-Grad über dem zweiten."
    ]
  },
  {
    name: "Angst verursachen",
    schule: "Nekromantie",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du erweckst die Angst vor der Vergänglichkeit bei einer Kreatur, die du innerhalb der Reichweite sehen kannst. Ein Konstrukt oder ein Untoter ist diesem Effekt gegenüber immun. Das Ziel muss einen erfolgreichen Weisheitsrettungswurf ablegen oder wird bis zum Ende des Zaubers von dir verängstigt. Das verängstigte Ziel kann den Rettungswurf am Ende jedes seiner Züge wiederholen und den Effekt bei sich selbst mit einem Erfolg beenden.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 2. Grades oder höher wirkst, kannst du für jeden Zauberplatz-Grad über dem ersten eine zusätzliche Kreatur als Ziel wählen. Die Kreaturen müssen innerhalb von 9 m voneinander sein, wenn du sie als Ziel wählst."
    ]
  },
  {
    name: "Ätzkugel",
    schule: "Hervorrufung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "45 m",
    komponenten: ["V", "G", "M"],
    material: "ein Tropfen Riesenschnecken-Galle",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du deutest auf einen Ort innerhalb der Reichweite, und ein glühender Ball aus smaragdgrüner Säure von 30 cm Durchmesser rast dorthin und explodiert in einer Kugel von 6 m Radius. Jede Kreatur in diesem Gebiet muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Fehlschlag erleidet eine Kreatur 10W4 Säureschaden und weitere 5W4 Säureschaden am Ende ihres nächsten Zuges. Bei einem Erfolg nimmt die Kreatur nur die Hälfte des ursprünglichen Schadens und keinen weiteren Schaden am Ende ihres nächsten Zuges.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 5. Grades oder höher wirkst, wird der ursprüngliche Schaden um 2W4 für jeden Zauberplatz-Grad über dem vierten erhöht."
    ]
  },
  {
    name: "Ausbrechende Erde",
    schule: "Verwandlung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Obsidian",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Wähle einen Punkt am Boden aus, den du innerhalb der Reichweite sehen kannst. Eine Fontäne aufgewühlter Erde und Gesteins bricht in einem Würfel von 6 m Kantenlänge hervor, der auf diesen Punkt zentriert ist. Jede Kreatur in diesem Bereich muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Fehlschlag nimmt eine Kreatur 3W12 Wuchtschaden, die Hälfte davon bei einem erfolgreichen Wurf.",
      "Zusätzlich wird der Boden in diesem Bereich zu schwierigem Gelände, bis er geräumt wird. Jedes Quadrat mit 1,5 m Kantenlänge des Bereichs erfordert mindestens 1 Minute der Räumung per Hand.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 4. Grades oder höher wirkst, erhöht sich der Schaden um 1W12 für jeden Zauberplatz-Grad über dem dritten."
    ]
  },
  {
    name: "Befall",
    schule: "Beschwörung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "ein lebender Floh",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du erzeugst eine Wolke aus Milben, Flöhen und anderen Parasiten, welche augenblicklich an einer Kreatur erscheint, die du innerhalb der Reichweite sehen kannst. Das Ziel muss einen Konstitutionsrettungswurf ablegen. Scheitert dieser, erleidet das Ziel 1W6 Giftschaden und muss sich 1,5 m in eine zufällige Richtung bewegen, sofern es sich bewegen kann und seine Bewegungsrate noch mindestens 1,5 m beträgt. Werfe einen W4 für die Richtung: 1, Norden; 2, Süden; 3, Osten; oder 4, Westen. Diese Bewegung löst keine Gelegenheitsangriffe aus, und wenn die ermittelte Richtung blockiert ist, wird sich das Ziel nicht bewegen.",
      "Der Schaden dieses Zaubers erhöht sich um 1W6, wenn du die 5. Stufe (2W6), die 11. Stufe (3W6) und die 17. Stufe (4W6) erreichst."
    ]
  },
  {
    name: "Beschwörung höherer Dämonen",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "eine Phiole mit Blut von einem Humanoiden, der innerhalb der letzten 24 Stunden getötet wurde",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du sprichst schändliche Worte aus, um einen Dämon aus dem Chaos des Abyss zu beschwören. Du wählst die Art des Dämons, welcher einen HG von 5 oder geringer haben muss (wie zum Beispiel ein Schattendämon oder ein Barlgura). Der Dämon erscheint an einem unbesetzten Platz, den du innerhalb der Reichweite sehen kannst. Der Dämon verschwindet, wenn seine Trefferpunkte auf 0 reduziert werden oder wenn der Zauber endet.",
      "Würfle für den Dämon Initiative aus. Wenn du ihn beschwörst und in jedem deiner nachfolgenden Züge kannst du ihm einen verbalen Befehl erteilen (erfordert keine Aktion) und ihm sagen, was er in seinem nächsten Zug tun soll. Wenn du keinen Befehl erteilst, greift er eine Kreatur in seiner Reichweite an, die ihn angegriffen hat.",
      "Am Ende jedes Zuges des Dämons legt er einen Charismarettungswurf ab (Nachteil, wenn du seinen wahren Namen sagst). Bei einem Fehlschlag gehorcht er weiterhin. Bei einem Erfolg endet deine Kontrolle und er greift für die verbleibende Dauer die nächsten Nicht-Dämonen an.",
      "Als Bestandteil des Wirkens kannst du auf dem Boden einen Blutkreis ziehen, der groß genug ist, um deinen Bereich zu umfassen. Der beschworene Dämon kann diesen Kreis weder überschreiten noch ihm Schaden zufügen. Die Materialkomponente wird dabei aufgezehrt.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 5. Grades oder höher wirkst, erhöht sich der HG um 1 für jeden Zauberplatz-Grad über dem vierten."
    ]
  },
  {
    name: "Beschwörung schwacher Dämonen",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "eine Phiole mit Blut von einem Humanoiden, der innerhalb der letzten 24 Stunden getötet wurde",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du sprichst schändliche Worte aus, um Dämonen aus dem Chaos des Abyss zu beschwören. Würfle auf der folgenden Tabelle, um festzulegen, was passiert: W6 1-2 = Zwei Dämonen mit HG 1 oder geringer; 3-4 = Vier Dämonen mit HG 1/2 oder geringer; 5-6 = Acht Dämonen mit HG 1/4 oder geringer.",
      "Der SL wählt die Dämonen aus (z.B. Manes oder Dretchs). Ein beschworener Dämon verschwindet, wenn seine Trefferpunkte auf 0 sinken oder der Zauber endet. Die Dämonen sind allen Kreaturen gegenüber feindlich gesinnt, einschließlich dir. Würfle die Initiative für die Dämonengruppe als Ganzes. Die Dämonen verfolgen und attackieren die nächsten Nicht-Dämonen.",
      "Als Bestandteil des Wirkens kannst du auf dem Boden einen Blutkreis ziehen. Die beschworenen Dämonen können diesen Kreis weder überschreiten noch ihm Schaden zufügen. Die Materialkomponente wird dabei aufgezehrt.",
      "Auf höheren Graden: Mit einem Zauberplatz des 6. oder 7. Grades beschwörst du doppelt so viele Dämonen. Mit einem Zauberplatz des 8. oder 9. Grades dreimal so viele."
    ]
  },
  {
    name: "Besseres Reittier finden",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du beschwörst einen Geist, welcher die Form eines loyalen und majestätischen Reittieres annimmt. Er erscheint in einem unbesetzten Bereich in Reichweite als Greif, Pegasus, Peryton, Schreckenswolf, Nashorn oder Säbelzahntiger (deine Wahl). Die Kreatur ist statt ihres normalen Typs ein Himmlisches Wesen, ein Feenwesen oder ein Unhold (deine Wahl). Ihr Intelligenzwert wird mindestens 6 und sie versteht eine Sprache deiner Wahl.",
      "Du kontrollierst das Reittier im Kampf. Innerhalb von 1,5 km kannst du telepathisch mit ihm kommunizieren. Zauber, die nur dich als Ziel haben, können auch das Reittier als Ziel haben, während du auf ihm sitzt.",
      "Das Reittier verschwindet zeitweilig bei 0 Trefferpunkten oder wenn du es entlässt. Wenn du den Zauber erneut wirkst, erscheint dasselbe gebundene Reittier mit vollen Trefferpunkten und ohne Zustände. Du kannst nicht mehr als ein Reittier durch diesen Zauber oder Reittier finden gleichzeitig binden. Wenn das Reittier verschwindet, lässt es alle getragenen Gegenstände zurück."
    ]
  },
  {
    name: "Chaospfeil",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du schleuderst eine wogende Masse chaotischer Energie auf eine Kreatur in Reichweite. Führe einen Fernkampf-Zauberangriff gegen das Ziel durch. Bei einem Treffer erleidet das Ziel 2W8 + 1W6 Schaden. Wähle einen der beiden Würfel aus — die gewürfelte Zahl bestimmt die Schadensart: 1 Säure, 2 Kälte, 3 Feuer, 4 Energie, 5 Blitz, 6 Gift, 7 Psychisch, 8 Schall.",
      "Wenn du auf beiden Würfeln dieselbe Zahl erzielst, springt die chaotische Energie vom Ziel bis zu 9 m weit zu einer anderen Kreatur deiner Wahl. Führe gegen das neue Ziel einen neuen Angriffs- und Schadenswurf durch. Dies könnte die Energie erneut überspringen lassen. Eine Kreatur kann bei jedem Wirken nur einmal Ziel werden.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 2. Grades oder höher wirkst, nimmt jedes Ziel für jeden Zauberplatz-Grad über dem ersten 1W6 zusätzlichen Schaden vom erwürfelten Typ."
    ]
  },
  {
    name: "Donnerschritt",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "27 m",
    komponenten: ["V"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du teleportierst dich selbst in einen nicht besetzten Bereich, den du innerhalb der Reichweite sehen kannst. Unmittelbar nachdem du verschwindest, erklingt ein gewaltiges Donnern, und jede Kreatur innerhalb von 3 m von dem Ort, den du verlassen hast, muss einen Konstitutionsrettungswurf ablegen. Bei einem Fehlschlag erleidet sie 3W10 Schallschaden, die Hälfte davon bei einem Erfolg. Den Donner kann man bis zu 90 m weit hören.",
      "Du kannst auch Objekte mit dir nehmen, solange ihr Gewicht nicht das übersteigt, welches du tragen kannst. Du kannst auch eine bereitwillige Kreatur deiner Größe oder kleiner teleportieren, die sich innerhalb von 1,5 m von dir befindet. Es muss am Zielort einen unbesetzten Bereich innerhalb von 1,5 m geben, wo die Kreatur erscheinen kann, andernfalls wird sie zurückgelassen.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 4. Grades oder höher wirkst, erhöht sich der Schaden um 1W10 für jeden Zauberplatz-Grad über dem dritten."
    ]
  },
  {
    name: "Drachenodem",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "eine Pfefferschote",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du berührst eine bereitwillige Kreatur und verleihst ihr die Macht, magische Energie aus ihrem Mund zu speien. Wähle Säure, Kälte, Feuer, Blitz oder Gift. Bis zum Ende des Zaubers kann die Kreatur eine Aktion verwenden, um Energie des gewählten Typs in einem 4,5 m langen Kegel auszuspeien. Jede Kreatur in diesem Bereich muss einen Geschicklichkeitsrettungswurf ablegen oder erleidet 3W6 Schaden des gewählten Typs, die Hälfte davon bei einem Erfolg.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 3. Grades oder höher wirkst, erhöht sich der Schaden um 1W6 für jeden Zauberplatz-Grad über dem zweiten."
    ]
  },
  {
    name: "Eismesser",
    schule: "Beschwörung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["G", "M"],
    material: "ein Tropfen Wasser oder ein Stück Eis",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du erzeugst eine Scherbe aus Eis und schleuderst sie auf eine Kreatur innerhalb der Reichweite. Führe einen Fernkampf-Zauberangriff gegen das Ziel durch. Bei einem Treffer erleidet das Ziel 1W10 Stichschaden. Egal ob Treffer oder nicht, die Scherbe explodiert anschließend. Das Ziel und jede Kreatur innerhalb von 1,5 m von ihr muss erfolgreich einen Geschicklichkeitsrettungswurf ablegen oder 2W6 Kälteschaden erleiden.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 2. Grades oder höher wirkst, erhöht sich der Kälteschaden um 1W6 für jeden Zauberplatz-Grad über dem ersten."
    ]
  },
  {
    name: "Entkräftung",
    schule: "Nekromantie",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Ein Tentakel aus tintenschwarzer Dunkelheit streckt sich von dir aus und berührt eine Kreatur, die du innerhalb der Reichweite sehen kannst, um Lebenskraft zu stehlen. Das Ziel muss einen Geschicklichkeitsrettungswurf durchführen. Bei einem Erfolg nimmt es 2W8 nekrotischen Schaden und der Zauber endet. Bei einem Fehlschlag nimmt es 4W8 nekrotischen Schaden, und bis zum Ende des Zaubers kannst du deine Aktion in jedem deiner Züge verwenden, um automatisch 4W8 nekrotischen Schaden zu verursachen.",
      "Der Zauber endet, wenn du deine Aktion für etwas anderes verwendest, das Ziel außer Reichweite gerät oder vollständig in Deckung ist. Immer wenn der Zauber Schaden verursacht, erhältst du Trefferpunkte in Höhe der Hälfte des nekrotischen Schadens.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 6. Grades oder höher verwendest, erhöht sich der Schaden um 1W8 für jeden Zauberplatz-Grad über dem fünften."
    ]
  },
  {
    name: "Erdbindung",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "90 m",
    komponenten: ["V"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Wähle eine Kreatur, die du innerhalb der Reichweite sehen kannst. Gelbe Streifen magischer Energie kreisen um die Kreatur. Das Ziel muss einen Stärkerettungswurf ablegen oder erleidet für die Wirkungsdauer eine Verringerung ihrer Flugbewegungsrate (sofern vorhanden) auf 0 m. Eine sich in der Luft befindliche betroffene Kreatur sinkt mit 18 m pro Runde hinab, bis sie den Boden erreicht oder der Zauber endet."
    ]
  },
  {
    name: "Erde formen",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar oder 1 Stunde",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du wählst einen Abschnitt Erde oder Gesteins aus, den du innerhalb der Reichweite sehen kannst und der in einen Würfel mit 1,5 m Kantenlänge passt. Du manipulierst ihn auf eine der folgenden Weisen:",
      "Lockere Erde ausheben: Du kannst sie sofort ausheben, herumbewegen und bis zu 1,5 m entfernt abladen. Diese Bewegung verursacht keinen Schaden.",
      "Formen und Farben: Du lässt Formen, Farben oder beides auf der Erde oder dem Gestein erscheinen — Worte, Bilder oder Muster. Die Veränderungen bleiben für 1 Stunde.",
      "Gelände verändern: Boden in Reichweite wird zu schwierigem Gelände, oder du machst schwieriges Gelände wieder normal. Hält 1 Stunde an.",
      "Wenn du diesen Zauber mehrfach wirkst, kannst du nicht mehr als zwei seiner nicht sofort wirkenden Effekte gleichzeitig aktiv haben. Du kannst einen solchen Effekt als Aktion aufgeben."
    ]
  },
  {
    name: "Erdrütteln",
    schule: "Hervorrufung",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "3 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du verursachst innerhalb der Reichweite ein Rütteln in der Erde. Jede Kreatur mit Ausnahme von dir muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Fehlschlag erleidet die Kreatur 1W6 Wuchtschaden und wird zu Boden geschleudert. Wenn der Untergrund lockere Erde oder Gestein ist, wird er zu schwierigem Gelände bis er geräumt wird. Jedes Quadrat von 1,5 m erfordert mindestens 1 Minute der Räumung per Hand.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 2. Grades oder höher verwendest, erhöht sich der Schaden um 1W6 für jeden Zauberplatz-Grad über dem ersten."
    ]
  },
  {
    name: "Krankmachende Strahlung",
    schule: "Hervorrufung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Dämmriges, grünliches Licht breitet sich in einer Kugel mit 9 m Radius aus, deren Zentrum ein Punkt ist, den du innerhalb der Reichweite wählst. Das Licht dringt auch um Ecken.",
      "Wenn eine Kreatur sich zum ersten Mal in einem Zug in den Bereich bewegt oder ihren Zug darin beginnt, muss sie einen Konstitutionsrettungswurf ablegen. Bei Misserfolg erleidet sie 4W10 gleißenden Schaden und eine Erschöpfungsstufe. Außerdem strahlt sie ein dämmriges, grünliches Licht in 1,5 m Radius aus, was ihr ermöglicht, nicht von Unsichtbarkeit zu profitieren.",
      "Das Licht und alle durch diesen Zauber verursachten Erschöpfungsstufen vergehen bei Ende des Zaubers."
    ]
  },
  {
    name: "Krone der Sterne",
    schule: "Hervorrufung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Sieben sternenartige Partikel erscheinen und umkreisen deinen Kopf bis der Zauber endet. Du kannst eine Bonusaktion verwenden, um eines auf eine Kreatur oder ein Objekt innerhalb von 36 m zufliegen zu lassen. Führe einen Fernkampf-Zauberangriff durch. Bei einem Treffer erleidet das Ziel 4W12 gleißenden Schaden. Das Partikel ist danach verbraucht. Der Zauber endet vorzeitig, wenn das letzte Partikel verbraucht wird.",
      "Mit 4+ Partikeln: helles Licht 9 m, dämmrig weitere 9 m. Mit 1-3 Partikeln: dämmriges Licht 9 m.",
      "Auf höheren Graden: Jeder Grad über dem siebten fügt zwei weitere Partikel hinzu."
    ]
  },
  {
    name: "Lebenstransfer",
    schule: "Nekromantie",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du opferst ein wenig deiner Gesundheit, um die Wunden einer anderen Kreatur zu heilen. Du erleidest 4W8 nekrotischen Schaden (kann nicht verhindert werden), und eine Kreatur deiner Wahl, die du innerhalb der Reichweite sehen kannst, erhält Trefferpunkte zurück, die dem Doppelten des erlittenen nekrotischen Schadens entsprechen.",
      "Auf höheren Graden: Jeder Grad über dem dritten erhöht den Schaden um 1W8."
    ]
  },
  {
    name: "Lichtwand",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein Handspiegel",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Eine schimmernde Wand aus hellem Licht erscheint an einem Punkt innerhalb der Reichweite. Ausrichtung deiner Wahl (horizontal, vertikal, diagonal), frei schwebend oder auf Oberfläche. Bis zu 18 m lang, 3 m hoch, 1,5 m dick. Blockiert Sichtlinien, Kreaturen können sie passieren. Helles Licht 36 m, dämmrig weitere 36 m.",
      "Wenn die Wand erscheint, muss jede Kreatur in ihrem Bereich einen Konstitutionsrettungswurf ablegen. Bei Fehlschlag 4W8 gleißender Schaden und 1 Minute blind, bei Erfolg die Hälfte. Eine geblendete Kreatur kann am Ende jedes Zuges einen RW ablegen. Eine Kreatur, die ihren Zug im Wandbereich beendet, erleidet 4W8 gleißenden Schaden.",
      "Als Aktion kannst du einen gleißenden Strahl von der Wand auf eine Kreatur innerhalb von 18 m abfeuern (Fernkampf-Zauberangriff, 4W8 gleißend bei Treffer). Ob Treffer oder nicht: die Wand wird um 3 m verkürzt. Bei 0 m endet der Zauber.",
      "Auf höheren Graden: Jeder Grad über dem fünften erhöht den Schaden um 1W8."
    ]
  },
  {
    name: "Mächtige Festung",
    schule: "Beschwörung",
    grad: 8,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "1,5 km",
    komponenten: ["V", "G", "M"],
    material: "ein Diamant im Wert von mindestens 500 GM (wird verbraucht)",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Eine Festung aus Stein erhebt sich auf einem 36 m × 36 m großen Bereich ohne Gebäude. Kreaturen im Bereich werden unbeschadet emporgehoben. Die Festung hat vier quadratische Ecktürme (6 m × 6 m, 9 m hoch), verbunden durch 24 m lange Steinmauern (30 cm dick, 6 m hoch). Du kannst bis zu vier steinerne Tore platzieren.",
      "Ein Bergfried (15 m × 15 m, drei Etagen à 3 m) steht innen. Er kann nach Wunsch in Räume unterteilt werden (min. 1,5 m Seite). Treppen verbinden die Etagen. Der Bergfried ist nach deinen Vorstellungen möbliert und enthält Lebensmittel für ein neungängiges Bankett für 100 Personen täglich. Gegenstände zerfallen zu Staub, wenn sie die Festung verlassen.",
      "100 unsichtbare Diener (wie Unsichtbarer Diener) gehorchen Kreaturen, die du beim Wirken festlegst. Steinabschnitte (3 × 3 m): RK 15, 30 TP pro 2,5 cm Dicke, immun gegen Gift und Psychisch.",
      "Nach 7 Tagen oder wenn du den Zauber woanders wirkst, zerfällt die Festung harmlos. Den Zauber ein Jahr lang alle 7 Tage am selben Ort zu wirken, macht sie permanent."
    ]
  },
  {
    name: "Illusorischer Drache",
    schule: "Illusion",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Durch das Ansammeln von Schattenmaterial aus dem Shadowfell erzeugst du einen schattenhaften Drachen (riesig) in einem unbesetzten Bereich innerhalb der Reichweite. Die Illusion verbleibt für die Dauer und besetzt ihren Bereich, als ob sie eine Kreatur wäre.",
      "Wenn die Illusion erscheint, müssen alle deine Feinde, die sie sehen können, einen Weisheitsrettungswurf ablegen oder werden für 1 Minute verängstigt. Wenn eine verängstigte Kreatur ihren Zug ohne Sichtlinie zur Illusion beendet, kann sie den Rettungswurf wiederholen.",
      "Als Bonusaktion kannst du die Illusion bis zu 18 m bewegen. Während dieser Bewegung kannst du sie einen Energiestoß in einem 18 m Kegel ausstoßen lassen. Wähle die Schadensart beim Erschaffen: Säure, Kälte, Feuer, Blitz, Nekrotisch oder Gift. Jede Kreatur im Kegel macht einen Intelligenzrettungswurf und erleidet 7W6 Schaden (Hälfte bei Erfolg).",
      "Angriffe verfehlen die Illusion automatisch, sie besteht alle Rettungswürfe und ist immun gegen Schaden. Eine Kreatur kann mit einer Aktion und einem Intelligenzwurf gegen den Zauberrettungswurf-SG erkennen, dass es sich um eine Illusion handelt — danach kann sie hindurchsehen und hat Vorteil auf Rettungswürfe gegen ihren Atem."
    ]
  },
  {
    name: "Infernalisches Herbeirufen",
    schule: "Beschwörung",
    grad: 5,
    zeitaufwand: "1 Minute",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "ein Rubin im Wert von mindestens 999 GM",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du beschwörst einen Teufel (HG 6 oder niedriger, z.B. Klingenteufel oder Bartteufel) in einem unbesetzten Bereich innerhalb der Reichweite. Der Teufel ist dir und deinen Gefährten gegenüber unfreundlich und handelt unter der Kontrolle des SL gemäß seiner Natur.",
      "In jedem deiner Züge kannst du versuchen, dem Teufel einen wörtlichen Befehl zu erteilen (keine Aktion). Er folgt, wenn das Ergebnis mit seinen Begierden übereinstimmt. Andernfalls musst du einen Charisma-Wurf ablegen (Vorteil, wenn du seinen wahren Namen nennst). Bei Misserfolg wird er für die Wirkungsdauer immun gegen deine Befehle.",
      "Falls deine Konzentration endet, bevor er deinen Befehlen gegenüber immun wurde, verschwindet er nicht sofort, sondern handelt nach eigenem Willen und verschwindet nach weiteren 3W6 Minuten.",
      "Besitzt du den Talisman eines bestimmten Teufels, kannst du ihn herbeirufen (HG + 1) ohne Charismawurf.",
      "Auf höheren Graden: Jeder Grad über dem fünften erhöht den HG um 1."
    ]
  },
  {
    name: "Investitur der Flammen",
    schule: "Verwandlung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Flammen jagen über deinen Körper (helles Licht 9 m, dämmrig weitere 9 m). Die Flammen schaden dir nicht. Du erlangst: Immunität gegen Feuer, Resistenz gegen Kälte.",
      "Jede Kreatur, die ihren Zug innerhalb von 1,5 m von dir beginnt oder beendet, erleidet 1W10 Feuerschaden.",
      "Du kannst deine Aktion verwenden, um eine Feuerlinie (4,5 m lang, 1,5 m breit) in eine Richtung deiner Wahl zu erzeugen. Jede Kreatur in der Linie muss einen Geschicklichkeitsrettungswurf ablegen und erleidet 4W8 Feuerschaden (Hälfte bei Erfolg)."
    ]
  },
  {
    name: "Investitur des Eises",
    schule: "Verwandlung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Dein Körper ist von Raureif bedeckt. Du erlangst: Immunität gegen Kälte, Resistenz gegen Feuer, keine Einschränkung durch Eis- und Schneegelände.",
      "Der Untergrund in 3 m Radius um dich ist vereist und schwieriges Gelände für alle außer dir (bewegt sich mit dir).",
      "Du kannst deine Aktion verwenden, um einen 4,5 m langen Kegel aus eiskaltem Wind zu erzeugen. Jede Kreatur muss einen Konstitutionsrettungswurf ablegen und erleidet 4W6 Kälteschaden (Hälfte bei Erfolg). Bei Fehlschlag ist die Bewegungsrate bis zum Beginn deines nächsten Zuges halbiert."
    ]
  },
  {
    name: "Investitur des Gesteins",
    schule: "Verwandlung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Felsbrocken breiten sich über deinen Körper aus. Du hast Resistenz gegen Wucht-, Stich- und Hiebschaden durch nichtmagische Angriffe.",
      "Du kannst deine Aktion verwenden, um ein kleines Erdbeben in 4,5 m Radius zu erzeugen. Andere Kreaturen müssen einen Geschicklichkeitsrettungswurf bestehen oder werden zu Boden geschleudert.",
      "Du kannst dich ohne Abzug durch Erd- und Gesteinsgelände bewegen sowie durch festen Erdboden oder Gestein, als wäre es Luft — jedoch nicht darin enden. Tust du es doch, wirst du zum nächsten freien Bereich bewegt, der Zauber endet und du bist bis zum Ende deines nächsten Zuges betäubt."
    ]
  },
  {
    name: "Investitur des Windes",
    schule: "Verwandlung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Wind wirbelt um dich herum. Du erlangst: Fernkampfwaffenangriffe gegen dich haben Nachteil, Flugbewegungsrate 18 m.",
      "Du kannst deine Aktion verwenden, um einen Würfel wirbelnden Windes (4,5 m Kantenlänge) mit einem Punkt innerhalb von 18 m als Zentrum zu erzeugen. Jede Kreatur muss einen Konstitutionsrettungswurf ablegen und erleidet 2W10 Wuchtschaden (Hälfte bei Erfolg). Kreaturen bis Größe Groß werden außerdem bis zu 3 m vom Zentrum fortgeschoben."
    ]
  },
  {
    name: "Knochen der Erde",
    schule: "Verwandlung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du lässt bis zu 6 Steinsäulen aus der Erde emporsteigen. Jede Säule ist ein Zylinder mit 1,5 m Durchmesser und bis zu 9 m Höhe. Du kannst den Untergrund unter einer kleinen oder mittelgroßen Kreatur als Ziel wählen. Jede Säule hat RK 5 und 30 TP. Bei 0 TP zerfällt sie zu Geröll, das schwieriges Gelände (3 m Radius) erzeugt.",
      "Wenn eine Säule unter einer Kreatur erscheint, muss diese einen Geschicklichkeitsrettungswurf ablegen oder wird angehoben. Wenn die Säule ein Hindernis trifft, erleidet die Kreatur 6W6 Wuchtschaden und ist festgesetzt. Die festgesetzte Kreatur kann einen Stärke- oder Geschicklichkeitswurf ablegen, um sich zu befreien.",
      "Auf höheren Graden: Jeder Grad über dem sechsten fügt zwei weitere Säulen hinzu."
    ]
  },
  {
    name: "Gedankendorn",
    schule: "Erkenntniszauber",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du greifst in den Verstand einer Kreatur, die du innerhalb der Reichweite sehen kannst. Das Ziel muss einen Weisheitsrettungswurf ablegen. Bei einem Fehlschlag erleidet es 3W8 psychischen Schaden, die Hälfte davon bei einem Erfolg. Bei einem Fehlschlag kennst du jederzeit den Aufenthaltsort des Ziels, bis der Zauber endet, aber nur solange du und das Ziel auf derselben Ebene der Existenz sind. Während du dieses Wissen hast, kann sich das Ziel nicht vor dir verstecken, und wenn es unsichtbar ist, erhält es dir gegenüber keine Vorteile aus diesem Zustand.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 3. Grades oder höher wirkst, erhöht sich der Schaden um 1W8 für jeden Zauberplatz-Grad über dem zweiten."
    ]
  },
  {
    name: "Gefängnis für den Verstand",
    schule: "Illusion",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du versuchst eine Kreatur in einer illusorischen Zelle zu binden, welche nur sie wahrnehmen kann. Eine Kreatur, die du innerhalb der Reichweite sehen kannst, muss einen Intelligenzrettungswurf ablegen. Der Rettungswurf gelingt automatisch, wenn die Kreatur gegen den Zustand Bezaubert immun ist.",
      "Bei einem erfolgreichen Wurf erleidet das Ziel 5W10 psychischen Schaden und der Zauber endet. Bei einem Fehlschlag erleidet das Ziel 5W10 psychischen Schaden, und die unmittelbare Umgebung erscheint als gefährlich (z.B. von Feuer umgeben, von schwebenden Rasierklingen oder Mäulern umgeben). Das Ziel kann nichts jenseits der Illusion hören oder sehen und ist festgesetzt.",
      "Wenn das Ziel aus der Illusion herausbewegt wird, durch sie einen Nahkampfangriff durchführt oder einen Körperteil hindurchstreckt, erleidet es 10W10 psychischen Schaden und der Zauber endet."
    ]
  },
  {
    name: "Heilige Waffe",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du erfüllst eine Waffe, die du berührst, mit heiliger Macht. Bis der Zauber endet, strahlt die Waffe in einem Radius von 9 m helles Licht und in weiteren 9 m dämmriges Licht aus. Angriffe mit der Waffe verursachen zusätzlich 2W6 gleißenden Schaden. Wenn die Waffe nicht magisch ist, wird sie es für die Dauer.",
      "Als Bonusaktion in deinem Zug kannst du den Zauber aufgeben und die Waffe einen Ausbruch gleißenden Lichtes abgeben lassen. Jede Kreatur deiner Wahl innerhalb von 9 m muss einen Konstitutionsrettungswurf ablegen. Bei einem Fehlschlag erleidet sie 4W8 gleißenden Schaden und ist für 1 Minute blind. Bei einem Erfolg nimmt sie nur die Hälfte des Schadens. Am Ende jedes ihrer Züge kann eine geblendete Kreatur einen Konstitutionsrettungswurf ablegen, um den Effekt zu beenden."
    ]
  },
  {
    name: "Heilungsgeist",
    schule: "Beschwörung",
    grad: 2,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du rufst einen Naturgeist herbei, um Verwundete zu versorgen. Der körperlose Geist erscheint in einem Würfel von 1,5 m Kantenlänge in einem Bereich, den du innerhalb der Reichweite sehen kannst, als durchsichtiges Tier oder Feenwesen (deine Wahl).",
      "Bis zum Ende des Zaubers stellt der Geist bei einer Kreatur, die ihren Zug im Bereich des Geistes beginnt oder ihn zum ersten Mal betritt, 1W6 Trefferpunkte wieder her (erfordert keine Aktion). Der Geist kann weder Konstrukte noch Untote heilen. Er kann 1 + Modifikator des Zauberwirkens-Attributs Mal (mindestens 2 Mal) heilen, danach verschwindet er.",
      "Als Bonusaktion kannst du den Geist um bis zu 9 m bewegen.",
      "Auf höheren Graden: Wenn du diesen Zauber mit einem Zauberplatz des 3. Grades oder höher wirkst, erhöht sich die Heilung um 1W6 für jeden Grad über dem zweiten."
    ]
  },
  {
    name: "Homunkulus erschaffen",
    schule: "Verwandlung",
    grad: 6,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Lehm, Asche und Alraunenwurzel (alle vom Zauber verzehrt) sowie ein mit Juwelen besetzter Dolch im Wert von mindestens 1.000 GM",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Während du eine Zauberformel aufsagst, schneidest du dich mit dem Dolch und erleidest 2W4 Stichschaden (kann nicht verringert werden). Dann tröpfelst du dein Blut über die anderen Komponenten — dies erschafft ein Konstrukt namens Homunkulus.",
      "Der Homunkulus ist dein treuer Gefährte und stirbt, wenn du stirbst. Wenn du eine lange Rast beendest, kannst du bis zur Hälfte deiner Trefferwürfel aufwenden (wenn der Homunkulus auf derselben Ebene ist). Würfle jeden Würfel und addiere deinen Konstitutionsmodifikator. Deine maximalen TP werden um das Ergebnis reduziert, die des Homunkulus werden um dasselbe erhöht. Dieser Prozess kann deine TP nicht unter 1 senken. Die Änderung endet bei der nächsten langen Rast.",
      "Du kannst jeweils nur einen Homunkulus besitzen. Wenn du diesen Zauber wirkst während dein Homunkulus lebt, schlägt der Zauber fehl."
    ]
  },
  {
    name: "Hüter der Natur",
    schule: "Verwandlung",
    grad: 4,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Ein Naturgeist erhört deinen Ruf und verwandelt dich in einen mächtigen Beschützer. Du wählst eine der folgenden Formen:",
      "Urtümliches Tier: Animalisches Fell bedeckt deinen Körper. Du erhältst: +3 m Bewegungsrate, Dunkelsicht 36 m, Vorteil auf Stärke-Angriffswürfe, +1W6 Energieschaden bei Nahkampfwaffenangriffen.",
      "Großer Baum: Deine Haut erscheint borkig. Du erhältst: 10 temporäre Trefferpunkte, Vorteil auf Konstitutionsrettungswürfe, Vorteil auf Angriffswürfe mit Geschicklichkeit und Weisheit, und der Untergrund in 4,5 m Radius ist für Feinde schwieriges Gelände."
    ]
  },
  {
    name: "Feindüberschuss",
    schule: "Verzauberung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du greifst nach dem Verstand einer Kreatur, die du sehen kannst, und zwingst sie zu einem Intelligenzrettungswurf. Eine Kreatur besteht automatisch, wenn sie immun gegen den Zustand Verängstigt ist. Bei einem Fehlschlag verliert die Kreatur die Fähigkeit, zwischen Freund und Feind zu unterscheiden, und erachtet alle Kreaturen, die sie sehen kann, als Feinde. Jedes Mal, wenn die Kreatur Schaden nimmt, kann sie den Rettungswurf wiederholen und den Effekt bei sich selbst mit einem Erfolg beenden.",
      "Immer wenn die betroffene Kreatur eine andere Kreatur als Ziel wählt, muss die Auswahl zufällig unter den Kreaturen geschehen, die sie in der Reichweite ihres Angriffs oder ihrer Fähigkeit sehen kann. Wenn ein Feind einen Gelegenheitsangriff der betroffenen Kreatur provoziert, muss sie diesen Angriff durchführen, wenn sie dazu in der Lage ist."
    ]
  },
  {
    name: "Fernschritt",
    schule: "Beschwörung",
    grad: 5,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du teleportierst bis zu 18 m in einen nicht besetzten Bereich, den du sehen kannst. In jedem deiner Züge vor dem Ende des Zaubers kannst du eine Bonusaktion verwenden, um auf die gleiche Weise erneut zu teleportieren."
    ]
  },
  {
    name: "Flammen kontrollieren",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar oder 1 Stunde",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du wählst eine nichtmagische Flamme, die du innerhalb der Reichweite sehen kannst und die in einen Würfel mit 1,5 m Kantenlänge passt. Du beeinflusst sie auf eine der folgenden Weisen:",
      "Ausbreiten: Du dehnst die Flamme unmittelbar um 1,5 m in eine Richtung aus, sofern dort Brennstoff vorhanden ist.",
      "Ersticken: Du erstickst unmittelbar die Flammen im Würfel.",
      "Licht verändern: Du verdoppelst oder halbierst den Bereich von hellem und dämmrigem Licht, änderst seine Farbe oder beides. Die Änderung hält 1 Stunde an.",
      "Gestalten: Du lässt einfache Formen in den Flammen erscheinen und kannst sie animieren. Die Gestalten verbleiben für 1 Stunde.",
      "Wenn du diesen Zauber mehrfach wirkst, kannst du bis zu drei nicht-unmittelbare Effekte gleichzeitig aktiv haben. Du kannst einen solchen Effekt als Aktion beenden."
    ]
  },
  {
    name: "Flutwelle",
    schule: "Beschwörung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein Tropfen Wasser",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du beschwörst eine Welle aus Wasser, die auf ein Gebiet innerhalb der Reichweite herniederbricht. Das Gebiet kann bis zu 9 m lang, bis zu 3 m breit und bis zu 3 m hoch sein. Jede Kreatur in dem Gebiet muss einen Geschicklichkeitsrettungswurf ablegen. Bei einem Fehlschlag erleidet eine Kreatur 4W8 Wuchtschaden und wird zu Boden geschleudert. Bei einem Erfolg erleidet sie nur die Hälfte des Schadens und wird nicht zu Boden geschleudert.",
      "Das Wasser verteilt sich dann in alle Richtungen über den Untergrund, löscht ungeschützte Flammen in seinem Bereich und innerhalb von 9 m davon und verschwindet dann."
    ]
  },
  {
    name: "Druidenhain",
    schule: "Bannmagie",
    grad: 6,
    zeitaufwand: "10 Minuten",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Mistelzweig, der mit einer goldenen Sichel im Licht des Vollmondes geschnitten wurde (wird verbraucht)",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du rufst die Geister der Natur an, um einen Bereich im Freien oder unter der Erde zu beschützen (9 m bis 27 m Würfel, keine Gebäude). Wenn du den Zauber ein Jahr lang jeden Tag im selben Bereich wirkst, hält er an bis er gebannt wird. Du kannst beim Wirken Kreaturen als immun festlegen sowie ein Passwort festlegen.",
      "Der Bereich strahlt Magie aus. Magie bannen beendet nur einen Effekt nach Wahl des Wirkers. Die möglichen Effekte sind:",
      "Solider Nebel: Beliebige Bodenfelder (1,5 m) werden mit dichtem Nebel gefüllt (3 m hoch), der komplett verschleiert. Je 30 cm Bewegung darin kostet 60 cm extra. Für immune Kreaturen wirkt er wie leichter Dunst mit grünen Funken.",
      "Übergriffiges Dickicht: Nicht vernebeltes Gelände wird wie vom Zauber Verstricken befallen. Für immune Kreaturen fühlen sich Ranken weich an und formen sich zu Sitzen oder Betten.",
      "Hüter des Hains: Bis zu vier Bäume werden animiert (Werte wie erwachte Bäume, können aber nicht sprechen). Sie kämpfen gegen nicht-immune Eindringlinge und gehorchen deinen Befehlen. Sie können den Bereich nicht verlassen.",
      "Zusätzlicher Zaubereffekt: Du kannst einen konstanten Windstoß an zwei Orten, Dornenwuchs an einem Ort und/oder Windwall an zwei Orten im Bereich platzieren. Für immune Kreaturen sind Winde angenehme Brisen und Dornenwuchs harmlos."
    ]
  },
  {
    name: "Mahlstrom",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "Papier oder Blatt in Form eines Trichters",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Eine wirbelnde Masse 1,50 m tiefen Wassers erscheint in einem Radius von 9 m mit ihrem Zentrum an einem Punkt, den du innerhalb der Reichweite sehen kannst. Der Punkt muss auf dem Untergrund oder in einem Gewässer sein.",
      "Bis zum Ende des Zaubers ist dieser Bereich schwieriges Gelände, und jede Kreatur, die ihren Zug darin beginnt, muss erfolgreich einen Stärkerettungswurf ablegen oder erleidet bei einem Fehlschlag 6W6 Wuchtschaden. Zudem wird sie 3 m in Richtung Zentrum gezogen."
    ]
  },
  {
    name: "Massen-Verwandlung",
    schule: "Verwandlung",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein Raupenkokon",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du transformierst bis zu 10 Kreaturen deiner Wahl, welche du innerhalb der Reichweite sehen kannst. Ein unwilliges Ziel muss einen Weisheitsrettungswurf ablegen, um der Transformation zu widerstehen. Ein unwilliger Gestaltwandler hat automatisch Erfolg bei diesem Wurf.",
      "Jedes Ziel nimmt eine Tiergestalt deiner Wahl an, und du kannst dieselbe oder verschiedene Formen für jedes Ziel wählen. Die neue Form kann jedes Tier sein, das du gesehen hast und dessen HG niedriger oder gleich dem HG des Ziels ist (oder der Hälfte der Stufe des Ziels, wenn das Ziel keinen HG hat). Die Spielwerte der Kreatur, einschließlich ihre mentalen Attributswerte, werden durch die Werte des gewählten Tieres ersetzt. Das Ziel behält aber seine Trefferpunkte, seine Gesinnung und seine Persönlichkeit.",
      "Jedes Ziel erlangt eine Anzahl temporärer Trefferpunkte in Höhe der Trefferpunkte seiner jeweiligen neuen Form. Diese temporären Trefferpunkte können nicht durch temporäre Trefferpunkte aus einer anderen Quelle ersetzt werden. Ein Ziel kehrt zu seiner normalen Form zurück, wenn alle seine temporären Trefferpunkte aufgebraucht sind oder es stirbt. Wenn der Zauber davor endet, so verliert die Kreatur alle temporären Trefferpunkte und kehrt zu seiner normalen Form zurück.",
      "Die Kreatur ist beschränkt auf Aktionen, welche die Beschaffenheit seiner neuen Form erlauben. Sie kann nicht sprechen, Zauber wirken oder etwas anderes tun, was Hände oder Sprechfähigkeit erfordert.",
      "Die Ausrüstung des Ziels geht in die neue Form ein. Das Ziel kann seine Ausrüstung weder aktivieren, verwenden, handhaben noch in irgendeiner anderen Form davon profitieren."
    ]
  },
  {
    name: "Maximilians Erdgriff",
    schule: "Verwandlung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "9 m",
    komponenten: ["V", "G", "M"],
    material: "eine kleine, aus Lehm gefertigte Hand",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du wählst ein nicht besetztes Quadrat mit 1,50 m Seitenlänge auf dem Untergrund, das du innerhalb der Reichweite sehen kannst. Eine mittelgroße Hand aus verdichtetem Erdreich erhebt sich dort und greift nach einer Kreatur, die du innerhalb von 1,50 m davon sehen kannst. Das Ziel muss einen Stärkerettungswurf durchführen. Bei einem Fehlschlag erleidet das Ziel 2W6 Wuchtschaden und ist bis zum Ende des Zaubers festgesetzt.",
      "Als eine Aktion kannst du die Hand veranlassen, das gefesselte Ziel zu zermalmen, welches dann einen Stärkerettungswurf ablegen muss. Das Ziel erleidet 2W6 Wuchtschaden bei einem Fehlschlag, die Hälfte davon bei einem Erfolg.",
      "Um auszubrechen, kann das festgesetzte Ziel seine Aktion verwenden, um einen Wurf auf Stärke gegen deinen Zauberschwierigkeitsgrad abzulegen. Bei einem Erfolg entkommt das Ziel und ist nicht länger von der Hand festgesetzt.",
      "Als eine Aktion kannst du die Hand entweder nach einer anderen Kreatur greifen lassen oder sie zu einer anderen unbesetzten Stelle innerhalb der Reichweite bewegen. Die Hand lässt ein festgesetztes Ziel frei, wenn du eines von beidem tust."
    ]
  },
  {
    name: "Melfs Präzise Meteore",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "Salpeter, Schwefel und Holzteer, die zu einer Perle geformt wurden",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du erzeugst sechs winzige Meteore in deinem Bereich. Für die Dauer des Zaubers schweben sie in der Luft und kreisen um dich herum. Wenn du den Zauber wirkst – und als eine Bonusaktion in jedem deiner Züge danach –, kannst du einen oder zwei der Meteore aufwenden, indem du sie wie der Blitz auf einen Punkt oder Punkte deiner Wahl innerhalb von 36 m von dir zurasen lässt. Sobald ein Meteor seinen Bestimmungsort erreicht oder auf einer soliden Oberfläche einschlägt, explodiert er. Jede Kreatur innerhalb von 1,50 m von dem Punkt, wo der Meteor explodiert, muss einen Geschicklichkeitsrettungswurf ablegen. Eine Kreatur erleidet 2W6 Feuerschaden bei einem Fehlschlag, die Hälfte davon bei einem Erfolg.",
      "Auf höheren Graden. Wenn du diesen Zauber mit einem Zauberplatz des 4. Grades oder höher verwendest, erhöht sich die Anzahl der erzeugten Meteore um zwei für jeden Zauberplatz-Grad über dem dritten."
    ]
  },
  {
    name: "Monster Bezaubern",
    schule: "Verzauberung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "1 Stunde",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du versuchst eine Kreatur zu bezaubern, die du innerhalb der Reichweite sehen kannst. Sie muss einen Weisheitsrettungswurf durchführen und erhält darauf Vorteil, wenn du oder deine Gefährten sie bekämpfen. Wenn ihr Rettungswurf fehlschlägt, ist die Kreatur von dir bezaubert, bis der Zauber endet oder bis du oder deine Gefährten ihr schaden. Die bezauberte Kreatur ist dir gegenüber freundlich. Wenn der Zauber endet, weiß die Kreatur, dass sie von dir bezaubert wurde.",
      "Auf höheren Graden. Wenn du diesen Zauber mit einem Zauberplatz des 5. Grades oder höher wirkst, kannst du für jeden Zauberplatz-Grad über dem vierten eine zusätzliche Kreatur als Ziel wählen. Die Kreaturen müssen innerhalb von 9 m voneinander sein, wenn du sie als Ziel wählst."
    ]
  },
  {
    name: "Negativer Energiefluss",
    schule: "Nekromantie",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "M"],
    material: "ein zerbrochener Knochen und ein Flicken schwarzer Seide",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du sendest Bänder negativer Energie gegen eine Kreatur, die du innerhalb der Reichweite sehen kannst. Solange das Ziel nicht untot ist, muss es einen Konstitutionsrettungswurf ablegen. Es erleidet 5W12 nekrotischen Schaden bei einem Fehlschlag, die Hälfte davon bei einem Erfolg. Ein durch diesen Zauber getötetes Ziel erhebt sich zu Beginn deines nächsten Zuges als Zombie. Der Zombie verfolgt welche Kreatur auch immer ihm innerhalb seiner Sichtweite am nächsten ist. Die Spielwerte für einen Zombie findest du im Monsterhandbuch.",
      "Wenn du einen Untoten als Ziel dieses Zaubers wählst, führt das Ziel keinen Rettungswurf durch. Wirf stattdessen 5W12. Das Ziel erhält die Hälfte der Würfelsumme als temporäre Trefferpunkte."
    ]
  },
  {
    name: "Opferung",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Flammen umwickeln eine Kreatur, die du innerhalb der Reichweite sehen kannst. Das Ziel muss einen Geschicklichkeitsrettungswurf ablegen. Das Ziel nimmt 8W6 Feuerschaden bei einem Fehlschlag, die Hälfte davon bei einem Erfolg. Zudem brennt das Ziel bei einem Fehlschlag für die Wirkungsdauer des Zaubers. Das brennende Ziel verbreitet helles Licht in einem Radius von 9 m und dämmriges Licht in einem Radius von weiteren 9 m. Das Ziel wiederholt am Ende jedes seiner Züge den Rettungswurf. Bei einem Fehlschlag erleidet es 4W6 Feuerschaden. Bei einem Erfolg endet der Zauber. Die magischen Flammen können durch nichtmagische Mittel nicht gelöscht werden.",
      "Wenn der Schaden dieses Zaubers ein Ziel tötet, wird das Ziel zu Asche."
    ]
  },
  {
    name: "Psychischer Schrei",
    schule: "Verzauberung",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "27 m",
    komponenten: ["G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du entfesselst die Macht deines Verstandes, um den Intellekt von bis zu zehn Kreaturen deiner Wahl, die du innerhalb der Reichweite sehen kannst, zu sprengen. Kreaturen mit einem Intelligenzwert von 2 oder weniger werden davon nicht betroffen.",
      "Jedes Ziel muss einen Intelligenzrettungswurf ablegen. Bei einem Fehlschlag erleidet es 14W6 psychischen Schaden und ist betäubt. Bei einem Erfolg erleidet das Ziel nur die Hälfte des Schadens und ist nicht betäubt. Wenn ein Ziel durch diesen Schaden stirbt, explodiert sein Kopf, sofern vorhanden.",
      "Ein betäubtes Ziel kann am Ende jedes seiner Züge einen Intelligenzrettungswurf ablegen. Bei einem Erfolg endet der betäubende Effekt."
    ]
  },
  {
    name: "Sandwand",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "eine Handvoll Sand",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du erschaffst eine Wand aus schwirrendem Sand auf dem Untergrund an einem Punkt, den du innerhalb der Reichweite sehen kannst. Du kannst die Wand bis zu 9 m lang sein lassen, 3 m hoch und 3 m dick. Sie verschwindet, wenn der Zauber endet. Sie blockiert Sichtlinien, aber keine Bewegungen. Eine Kreatur ist blind, während sie im Bereich der Wand ist, und muss 3 m Bewegungsrate für jeweils 1 m Bewegung ausgeben."
    ]
  },
  {
    name: "Schatten der Moil",
    schule: "Nekromantie",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "ein untotes Auge, eingeschlossen in einen Edelstein von mindestens 150 GM Wert",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Schatten, die Flammen gleichen, wickeln sich um deinen Körper, bis der Zauber endet und verschleiern dich komplett gegenüber anderen. Die Schatten wandeln dämmriges Licht in 3 m Radius von dir in Dunkelheit und helles Licht im selben Bereich wird zu dämmrigem Licht.",
      "Bis zum Ende des Zaubers hast du Resistenz gegen gleißenden Schaden. Zusätzlich, wann immer dich eine Kreatur in 3 m Radius von dir mit einem Angriff trifft, schlagen die Schatten nach der Kreatur und verursachen 2W8 nekrotischen Schaden."
    ]
  },
  {
    name: "Schattenklinge",
    schule: "Illusion",
    grad: 2,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du verwebst Stränge aus Schatten, um ein Schwert aus solider Dunkelheit in deiner Hand zu erschaffen. Dieses magische Schwert verbleibt, bis der Zauber endet. Es zählt als einfache Nahkampfwaffe, mit der du geübt bist. Es verursacht 2W8 psychischen Schaden bei einem Treffer und verfügt über die Eigenschaften Finesse, leicht und Wurfwaffe (Reichweite 6/18). Zusätzlich erhältst du Vorteil auf deinen Angriffswurf, wann immer du ein Ziel angreifst, welches sich in dämmrigem Licht oder in Dunkelheit befindet.",
      "Wenn du die Waffe fallen lässt oder sie wirfst, so löst sie sich am Ende des Zuges auf. Danach und solange der Zauber noch wirkt, kannst du eine Bonusaktion verwenden, um das Schwert wieder in deiner Hand erscheinen zu lassen.",
      "Auf höheren Graden. Wenn du diesen Zauber mit einem Zauberplatz des 3. oder 4. Grades verwendest, so erhöht sich der Schaden auf 3W8. Wenn du ihn mit einem Zauberplatz des 5. oder 6. Grades wirkst, so erhöht er sich auf 4W8. Mit einem Zauberplatz des 7. Grades oder mehr erhöht sich der Schaden auf 5W8."
    ]
  },
  {
    name: "Schutzwind",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Ein starker Wind (30 km/h) weht in einem Radius von 3 m um dich herum und bewegt sich mit dir, wobei er auf dir zentriert bleibt. Der Wind verbleibt für die Wirkungsdauer des Zaubers.",
      "Der Wind hat folgende Effekte: Er macht dich und andere Kreaturen in seinem Bereich taub. Er löscht ungeschützte Feuer in seinem Bereich, die so groß sind wie Fackeln oder kleiner. Er hält Dämpfe, Gase und Nebel ab, die von starken Winden verweht werden. Der Bereich ist schwieriges Gelände für jede Kreatur außer dir. Die Angriffswürfe von Fernkampfwaffen haben Nachteil, wenn der Angriff in den Wind hinein oder aus ihm hinaus führt."
    ]
  },
  {
    name: "Seelenkäfig",
    schule: "Nekromantie",
    grad: 6,
    zeitaufwand: "1 Reaktion, die du verwendest, wenn ein Humanoider, den du innerhalb von 18 m von dir sehen kannst, stirbt",
    wirkungsdauer: "8 Stunden",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein winziger Silberkäfig im Wert von 100 GM",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Dieser Zauber fängt die Seele eines Humanoiden ein, wenn er stirbt, und hält sie in dem winzigen Käfig gefangen, den du als Materialkomponente verwendest. Eine gestohlene Seele verbleibt in dem Käfig, bis der Zauber endet oder bis du den Käfig zerstörst, was den Zauber auch beendet. Während du eine Seele im Käfig hast, kannst du sie in jeder der unten beschriebenen Weisen ausnutzen. Du kannst eine gefangene Seele bis zu sechsmal nutzen. Sobald du eine Seele zum sechsten Mal nutzt, wird sie freigelassen und der Zauber endet. Während die Seele gefangen ist, kann der Humanoide, von dem sie stammt, nicht wieder ins Leben gerufen werden.",
      "Leben stehlen. Du kannst eine Bonusaktion verwenden, um Lebenskraft aus der Seele zu ziehen. Du erhältst 2W8 Trefferpunkte zurück.",
      "Seele befragen. Du stellst der Seele eine Frage (erfordert keine Aktion) und erhältst eine kurze telepathische Antwort, welche du verstehen kannst, unabhängig davon welche Sprache verwendet wurde. Die Seele weiß nur, was sie zu Lebzeiten wusste, aber sie muss nach bestem Vermögen wahrheitsgemäß antworten. Die Antwort hat nicht mehr als einen oder zwei Sätze und könnte rätselhaft sein.",
      "Erfahrung leihen. Du kannst eine Bonusaktion verwenden, um dich der Lebenserfahrungen der Seele zu bedienen. Du führst den nächsten Angriffswurf, Attributswurf oder Rettungswurf mit Vorteil durch. Wenn du diesen Vorzug nicht vor dem Beginn deines nächsten Zuges verwendest, ist er verloren.",
      "Augen der Toten. Du kannst eine Aktion verwenden, um einen Ort zu nennen, den der Humanoide im Leben sah. Dies erzeugt einen unsichtbaren Sensor irgendwo an diesem Ort, sofern er sich auf der Ebene der Existenz befindet, auf welcher du dich gerade aufhältst. Der Sensor verbleibt, solange du dich konzentrierst, bis zu 10 Minuten (als ob du dich auf einen Zauber konzentrieren würdest). Du erhältst sichtbare und hörbare Informationen vom Sensor, als ob du an seiner Stelle wärst und deine eigenen Sinne nutztest.",
      "Eine Kreatur, die den Sensor sehen kann (etwa unter Verwendung von Unsichtbares sehen oder Wahrer Blick), erblickt das durchsichtige Abbild des gequälten Humanoiden, dessen Seele du eingesperrt hast."
    ]
  },
  {
    name: "Nillocs Schneeballschwarm",
    schule: "Hervorrufung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "ein Stück Eis oder ein kleiner weißer Steinsplitter",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Ein Hagel magischer Schneebälle bricht von einem Punkt hervor, den du innerhalb der Reichweite wählst. Jede Kreatur in einer Kugel mit 1,50 m Radius, deren Zentrum an diesem Punkt liegt, muss einen Geschicklichkeitsrettungswurf durchführen. Eine Kreatur erleidet 3W6 Kälteschaden bei einem Fehlschlag, die Hälfte davon bei einem Erfolg.",
      "Auf höheren Graden. Wenn du diesen Zauber unter Verwendung eines Zauberplatzes des 3. Grades oder höher verwendest, so erhöht sich der Schaden um 1W6 für jeden Zauberplatz-Grad über dem zweiten."
    ]
  },
  {
    name: "Sonnenaufgang",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Anhänger in Form einer leuchtenden Sonne von mindestens 100 GM Wert",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Das Licht des Sonnenaufgangs scheint auf einen von dir bestimmten Ort innerhalb der Reichweite. Bis zum Ende des Zaubers schimmert dort ein 12 m hoher Zylinder aus hellem Licht mit 9 m Radius. Dieses Licht ist Sonnenlicht.",
      "Wenn der Zylinder erscheint, muss jede Kreatur darin einen Konstitutionsrettungswurf ablegen oder erleidet 4W10 gleißenden Schaden, die Hälfte davon, wenn der Wurf gelingt. Eine Kreatur muss diesen Rettungswurf auch ablegen, wann immer sie ihren Zug im Zylinder beendet.",
      "Wenn du weniger als 18 m von dem Zylinder entfernt bist, kannst du ihn als Bonusaktion in deinem Zug bis zu 18 m weit bewegen."
    ]
  },
  {
    name: "Stahlwindschlag",
    schule: "Beschwörung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["G", "M"],
    material: "eine Nahkampfwaffe von mindestens 1 SM Wert",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du schwingst die Waffe, die beim Wirken verwendet wurde, und verschwindest dann, um wie der Wind anzugreifen. Wähle bis zu 5 Kreaturen, die du innerhalb der Reichweite sehen kannst. Führe gegen jedes Ziel einen Nahkampf-Zauberangriff durch. Bei einem Treffer nimmt ein Ziel 6W10 Energieschaden.",
      "Du kannst dich dann an einen unbesetzten Ort teleportieren, den du innerhalb von 1,50 m um eines der Ziele sehen kannst, welches du entweder getroffen oder verfehlt hast."
    ]
  },
  {
    name: "Staubteufel",
    schule: "Beschwörung",
    grad: 2,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "eine Prise Staub",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Wähle einen nicht besetzten Würfel Luft von 1,50 m Kantenlänge, den du innerhalb der Reichweite sehen kannst. Eine elementare Kraft, die einem Staubteufel ähnelt, erscheint in dem Würfel und verbleibt bis zum Ende der Wirkungsdauer des Zaubers.",
      "Jede Kreatur, die ihren Zug innerhalb von 1,50 m von dem Staubteufel beendet, muss einen Stärkerettungswurf ablegen. Bei einem Fehlschlag erleidet die Kreatur 1W8 Wuchtschaden und wird 3 m vom Staubteufel weggeschoben. Bei einem erfolgreichen Wurf erleidet die Kreatur nur halb so viel Schaden und wird nicht weggeschoben.",
      "Als Bonusaktion kannst du den Staubteufel bis zu 9 m in jede Richtung bewegen. Wenn der Staubteufel sich über Sand, Staub, loses Erdreich oder leichtes Geröll hinwegbewegt, so nimmt er das Material auf und formt eine Wolke aus Schutt mit 3 m Durchmesser um sich herum, die bis zum Beginn deines nächsten Zuges verbleibt. Die Wolke verschleiert den Bereich komplett.",
      "Auf höheren Graden. Wenn du diesen Zauber mit einem Zauberplatz des 3. Grades oder höher verwendest, so erhöht sich der Schaden um 1W8 für jeden Zauberplatz-Grad über dem zweiten."
    ]
  },
  {
    name: "Streuung",
    schule: "Beschwörung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Die Luft um bis zu fünf Kreaturen deiner Wahl, die du innerhalb der Reichweite sehen kannst, beginnt zu wabern. Eine unwillige Kreatur muss erfolgreich einen Weisheitsrettungswurf ablegen, um diesem Zauber zu widerstehen. Du teleportierst jedes betroffene Ziel an einen nicht besetzten Ort, den du innerhalb von 36 m sehen kannst. Dieser Ort muss auf dem Untergrund oder auf einem Gebäudeboden sein."
    ]
  },
  {
    name: "Sturmkugel",
    schule: "Hervorrufung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "45 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Eine Kugel wirbelnder Luft mit einem Radius von 6 m, deren Zentrum an einem von dir gewählten Punkt innerhalb der Reichweite liegt, tritt in Erscheinung.",
      "Die Kugel verbleibt für die Wirkungsdauer des Zaubers. Jede Kreatur die sich in der Kugel befindet, wenn diese erscheint, oder ihren Zug darin beendet, muss erfolgreich einen Stärkerettungswurf ablegen oder erleidet 2W6 Wuchtschaden. Der Bereich der Kugel ist schwieriges Gelände.",
      "Bis zum Ende des Zaubers kannst du in jedem deiner Züge eine Bonusaktion verwenden, um einen Blitzschlag vom Zentrum der Kugel gegen eine Kreatur zu schleudern, welche du innerhalb von 18 m um das Zentrum herum auswählst. Bei einem Treffer erleidet das Ziel 4W6 Blitzschaden.",
      "Kreaturen innerhalb von 9 m der Kugel haben Nachteil bei Würfen auf Weisheit (Wahrnehmung), um zu hören.",
      "Auf höheren Graden. Wenn du diesen Zauber mit einem Zauberplatz des 5. Grades oder höher verwendest, so erhöht sich der Schaden jedes seiner Effekte um 1W6 für jeden Zauberplatz-Grad über dem vierten."
    ]
  },
  {
    name: "Synaptisches Rauschen",
    schule: "Verzauberung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du wählst einen Punkt innerhalb der Reichweite und lässt dort psychische Energien explodieren. Jede Kreatur in einer Kugel mit 6 m Radius, deren Zentrum an diesem Punkt liegt, muss einen Intelligenzrettungswurf ablegen. Eine Kreatur mit einem Intelligenzwert von 2 oder geringer kann durch diesen Zauber nicht betroffen werden. Ein Ziel nimmt 8W6 psychischen Schaden bei einem Fehlschlag, die Hälfte davon bei einem Erfolg.",
      "Nach einem Fehlschlag hat das Ziel für 1 Minute verworrene Gedanken. Während dieser Zeit wirft es 1W6 und zieht das Ergebnis von allen Angriffswürfen und Attributswürfen ab, ebenso von Konstitutionsrettungswürfen, um Konzentration aufrechtzuerhalten. Das Ziel kann am Ende jedes seiner Züge einen Intelligenzrettungswurf durchführen, um den Effekt bei sich mit einem Erfolg zu beenden."
    ]
  },
  {
    name: "Tempel der Götter",
    schule: "Beschwörung",
    grad: 7,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "24 Stunden",
    konzentration: false,
    reichweite: "36 m",
    komponenten: ["V", "G", "M"],
    material: "ein heiliges Symbol von mindestens 5 GM Wert",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du lässt auf Untergrund, den du innerhalb der Reichweite sehen kannst, in einem Schimmern einen Tempel entstehen. Der Tempel muss in einen unbesetzten, würfelförmigen Raum passen, dessen Kantenlänge 36 m beträgt. Der Tempel verbleibt bis zum Ende des Zaubers. Er ist der Gottheit, dem Pantheon oder der Philosophie gewidmet, deren heiliges Symbol beim Wirken verwendet wurde.",
      "Du triffst alle Entscheidungen über das Erscheinungsbild des Tempels. Das Innere ist von Böden, Wänden und einem Dach umschlossen, mit einer Tür, die Einlass ins Innere gewährt, und so vielen Fenstern, wie du wünschst. Nur du und jede Kreatur, die du beim Wirken des Zaubers bestimmst, kann die Tür öffnen oder schließen.",
      "Das Innere des Tempels ist ein offener Bereich mit einem Götzenbild oder einem Altar an einem Ende. Du entscheidest, ob der Tempel beleuchtet ist und ob diese Beleuchtung hell oder dämmrig ist. Der Geruch verbrennenden Weihrauchs füllt die Luft, und die Temperatur ist mild.",
      "Der Tempel setzt sich Arten von Kreaturen entgegen, welche du beim Wirken des Zaubers wählst. Wähle eine oder mehr aus den folgenden: Himmlische, Elementare, Feenwesen, Unholde oder Untote. Wenn eine Kreatur der gewählten Art versucht, in den Tempel zu gelangen, so muss diese Kreatur einen Charismarettungswurf ablegen. Bei einem Fehlschlag kann sie den Tempel für 24 Stunden nicht betreten. Selbst wenn sie den Tempel betreten kann, so wird sie doch von der Magie dort behindert. Immer wenn sie einen Angriffswurf, einen Attributswurf oder einen Rettungswurf im Innern des Tempels ablegt, muss sie 1W4 werfen und das Ergebnis vom W20-Wurf abziehen.",
      "Zusätzlich können die Sensoren, die durch Erkenntniszauber erzeugt werden, nicht innerhalb des Tempels erscheinen, und Kreaturen im Innern können nicht zum Ziel von Erkenntniszaubern werden.",
      "Und schließlich, wann immer eine Kreatur im Tempel Trefferpunkte durch einen Zauber des 1. Grades oder höher zurückerlangt, erhält die Kreatur zusätzliche Trefferpunkte in Höhe deines Weisheitsmodifikators zurück (mindestens 1 Trefferpunkt).",
      "Der Tempel besteht aus einer blickdichten magischen Kraft, die bis in die Ätherebene reicht und daher auch ätherische Reisen in das Innere des Tempels verhindert. Nichts kann auf körperliche Weise durch das Äußere des Tempels dringen. Er kann durch Magie bannen nicht gebannt werden, und Antimagisches Feld hat keinen Effekt darauf. Der Zauber Auflösung zerstört den Tempel auf der Stelle.",
      "Wenn man diesen Zauber ein Jahr lang täglich an derselben Stelle wirkt, wird der Effekt permanent."
    ]
  },
  {
    name: "Tensers Transformation",
    schule: "Verwandlung",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "einige Haare eines Bullen",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du verleihst dir selbst Ausdauer und von magischer Kraft erfüllte Kampffertigkeit. Bis zum Ende des Zaubers kannst du keine Zauber wirken und erhältst die folgenden Vorzüge:",
      "Du erhältst 50 temporäre Trefferpunkte. Falls einige davon übrigbleiben, wenn der Zauber endet, verfallen sie. Du hast Vorteil bei Angriffswürfen, die du mit einfachen Waffen und Kriegswaffen durchführst. Wenn du ein Ziel mit einem Waffenangriff triffst, erleidet es zusätzlich 2W12 Energieschaden. Du bist mit allen Rüstungen, Schilden, einfachen Waffen und Kriegswaffen geübt. Du bist mit Stärke- und Konstitutionsrettungswürfen geübt. Du kannst, wenn du eine Angriffsaktion in deinem Zug unternimmst, zweimal angreifen anstatt einmal. Du ignorierst diesen Vorzug, falls du bereits über ein Merkmal verfügst, das dir zusätzliche Angriffe erlaubt, wie zum Beispiel Zusätzlicher Angriff.",
      "Unmittelbar nach dem Ende des Zaubers musst du einen Konstitutionsrettungswurf gegen SG 15 bestehen oder du erleidest eine Erschöpfungsstufe."
    ]
  },
  {
    name: "Tierbindung",
    schule: "Wahrsagerei",
    grad: 1,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "ein wenig Fell, in Stoff eingewickelt",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du etablierst eine telepathische Verbindung zu einem Tier, welches dir freundlich gesonnen ist oder das du bezaubert hast. Der Zauber versagt, wenn das Tier einen Intelligenzwert von 4 oder höher hat. Bis zum Ende des Zaubers bleibt die Verbindung zwischen dir und dem Tier bestehen, solange du und das Tier in Sichtweite zueinander seid. Durch die Verbindung kann das Tier deine telepathischen Nachrichten an es verstehen, und es kann einfache Emotionen und Konzepte telepathisch an dich zurück kommunizieren. Während die Verbindung aktiv ist, erhält das Tier Vorteil bei Angriffswürfen gegen jede Kreatur innerhalb von 1,50 m von dir, welche du sehen kannst."
    ]
  },
  {
    name: "Totenläuten",
    schule: "Nekromantie",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du deutest auf eine Kreatur, die du innerhalb der Reichweite sehen kannst, und der Klang einer Trauerglocke erfüllt für einen Moment die Luft um sie. Das Ziel muss einen Weisheitsrettungswurf bestehen oder erleidet 1W8 nekrotischen Schaden. Falls dem Ziel eine beliebige Menge Trefferpunkte fehlt, nimmt es stattdessen 1W12 nekrotischen Schaden.",
      "Der Schaden des Zaubers erhöht sich um einen Würfel, wenn du Stufe 5 erreichst (2W8 oder 2W12), Stufe 11 (3W8 oder 3W12) und Stufe 17 (4W8 oder 4W12)."
    ]
  },
  {
    name: "Totentanz",
    schule: "Nekromantie",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Stränge aus dunkler Macht springen aus deinen Fingern, um bis zu fünf kleine oder mittelgroße Leichen zu durchdringen, welche du innerhalb der Reichweite sehen kannst. Jede Leiche steht unverzüglich auf und wird untot. Du entscheidest, ob es sich jeweils um Zombies oder Skelette handelt. Zusätzlich erhält jeder Untote einen Bonus auf seine Angriffs- und Schadenswürfe in Höhe des Modifikators deines Attributs zum Zauberwirken.",
      "Du kannst eine Bonusaktion verwenden, um die Kreaturen, welche du mit diesem Zauber erschaffst, mental zu befehligen. Du sendest denselben Befehl an alle Kreaturen. Um den Befehl zu empfangen, muss eine Kreatur innerhalb von 18 m von dir sein. Du entscheidest, welche Aktionen die Kreaturen unternehmen und wohin sie sich während ihres nächsten Zuges bewegen. Du kannst auch einen allgemeinen Befehl ausgeben, wie zum Beispiel das Bewachen einer Kammer oder eines Gangs gegen deine Feinde. Wenn du keinen Befehl ausgibst, werden die Kreaturen nichts tun, außer sich gegen feindlich gesinnte Kreaturen zu verteidigen. Sobald ein Befehl erteilt wurde, werden die Kreaturen ihn befolgen, bis die Aufgabe ausgeführt ist.",
      "Die Kreaturen stehen unter deinem Befehl, bis der Zauber endet. Danach werden sie wieder leblos.",
      "Auf höheren Graden. Wenn du diesen Zauber mit einem Zauberplatz des 6. Grades oder höher wirkst, so belebst du bis zu zwei zusätzliche Leichen für jeden Zauberplatz-Grad über dem fünften."
    ]
  },
  {
    name: "Unverwundbarkeit",
    schule: "Bannmagie",
    grad: 9,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G", "M"],
    material: "ein kleines Stück Adamant von mindestens 500 GM Wert (wird verbraucht)",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du bist bis zum Ende des Zaubers immun gegen jeglichen Schaden."
    ]
  },
  {
    name: "Urtümliche Wildheit",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Selbst",
    komponenten: ["G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du kanalisierst urtümliche Magie, um deine Zähne oder Fingernägel zu schärfen und sie für einen ätzenden Angriff vorzubereiten. Führe einen Nahkampf-Zauberangriff gegen eine Kreatur innerhalb von 1,50 m von dir durch. Bei einem Treffer erleidet das Ziel 1W10 Säureschaden. Nach dem Ausführen des Angriffs kehren deine Zähne oder Fingernägel zu ihrem normalen Zustand zurück.",
      "Der Schaden des Zaubers erhöht sich um 1W10, wenn du die 5. Stufe (2W10), die 11. Stufe (3W10) und die 17. Stufe (4W10) erreichst."
    ]
  },
  {
    name: "Urtümlicher Schutz",
    schule: "Bannmagie",
    grad: 6,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du hast für die Dauer des Zaubers Resistenz gegen Säure-, Kälte-, Feuer-, Blitz- und Schallschaden.",
      "Wenn du Schaden einer der oben genannten Arten erleidest, so kannst du deine Reaktion nutzen, um Immunität gegen diese Schadensart zu erlangen, einschließlich des auslösenden Schadens. Wenn du das tust, enden die Resistenzen, und du hast die Immunität bis zum Ende deines nächsten Zuges. Der Zauber endet dann."
    ]
  },
  {
    name: "Verrücktmachende Finsternis",
    schule: "Hervorrufung",
    grad: 8,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "45 m",
    komponenten: ["V", "M"],
    material: "ein Tropfen Pech, vermischt mit einem Tropfen Quecksilber",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Bis zum Ende des Zaubers breitet sich von einem Punkt, den du innerhalb der Reichweite wählst, magische Dunkelheit aus, um eine Kugel mit 18 m Radius zu füllen. Die Dunkelheit fließt auch um Ecken. Eine Kreatur mit Dunkelsicht kann in dieser Dunkelheit nicht sehen. Nichtmagisches Licht und auch Licht, das von Zaubern des 8. Grades oder niedriger erzeugt wird, kann diesen Bereich nicht erleuchten.",
      "Innerhalb der Kugel kann man Schreie, Brabbeln und irres Gelächter hören. Immer wenn eine Kreatur ihren Zug in der Kugel beginnt, muss sie einen Weisheitsrettungswurf ablegen. Sie erleidet 8W8 psychischen Schaden bei einem Fehlschlag, die Hälfte davon bei einem Erfolg."
    ]
  },
  {
    name: "Wasser formen",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar oder 1 Stunde (siehe unten)",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du wählst einen Bereich mit Wasser, den du innerhalb der Reichweite sehen kannst und der in einen Würfel mit 1,50 m Kantenlänge passt. Du manipulierst das Wasser auf eine der folgenden Weisen: Du kannst unmittelbar das Wasser bewegen oder anderweitig dessen Fließrichtung ändern, bis zu 1,50 m in jede Richtung (diese Bewegung hat nicht genug Kraft, um Schaden zu verursachen). Du kannst das Wasser veranlassen, einfache Formen anzunehmen, und es nach deinem Willen animieren (hält 1 Stunde an). Du kannst die Farbe oder Lichtdurchlässigkeit des Wassers verändern, wobei das Wasser in seiner Gesamtheit auf dieselbe Weise verändert werden muss (hält 1 Stunde an). Du frierst das Wasser ein, sofern darin keine Kreaturen sind (taut nach 1 Stunde wieder auf).",
      "Wenn du diesen Zauber mehrfach wirkst, kannst du nicht mehr als zwei seiner nicht-unmittelbaren Effekte zeitgleich aktiviert haben, und du kannst einen solchen Effekt als Aktion aufgeben."
    ]
  },
  {
    name: "Wasserkugel",
    schule: "Beschwörung",
    grad: 4,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "27 m",
    komponenten: ["V", "G", "M"],
    material: "ein Tröpfchen Wasser",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du beschwörst eine Kugel aus Wasser mit einem Radius von 1,50 m an einem Punkt, den du innerhalb der Reichweite sehen kannst. Die Kugel kann schweben, aber nicht mehr als 3 m über dem Untergrund. Die Kugel verbleibt für die Wirkungsdauer des Zaubers.",
      "Jede Kreatur in der Kugel muss einen Stärkerettungswurf ablegen. Bei einem Erfolg wird eine Kreatur aus der Kugel an den nächsten unbesetzten Platz außerhalb der Kugel nach Wahl der Kreatur geschleudert. Eine riesige oder noch größere Kreatur besteht diesen Wurf automatisch, und eine große oder kleinere Kreatur kann sich entscheiden, ihn nicht zu bestehen. Bei einem Fehlschlag wird die Kreatur durch die Kugel festgesetzt und ist von Wasser eingehüllt. Am Ende jedes seiner Züge kann ein festgesetztes Ziel den Rettungswurf wiederholen und den Effekt bei sich selbst mit einem Erfolg beenden.",
      "Die Kugel kann bis zu vier mittelgroße oder kleinere Kreaturen festsetzen, oder eine große Kreatur. Falls die Kugel durch das Festsetzen einer Kreatur die maximale Kapazität überschreitet, so fällt eine zufällige Kreatur, die bereits darin festgesetzt war, aus der Kugel und wird innerhalb von 1,50 m Radius zu Boden geschleudert.",
      "Als eine Aktion kannst du die Kugel bis zu 9 m in gerader Linie bewegen. Wenn sie sich dabei über eine Grube, eine Klippe oder einen anderen Abhang im Gelände bewegt, so sinkt sie sanft hinab, bis sie wieder 3 m über dem Grund schwebt. Jede in der Kugel festgesetzte Kreatur bewegt sich mit ihr. Du kannst die Kugel in Kreaturen rammen und sie dadurch zwingen, einen Rettungswurf abzulegen.",
      "Wenn der Zauber endet, fällt die Kugel zu Boden und löscht alle normalen Flammen in einem Radius von 9 m von ihr. Jede in der Kugel festgesetzte Kreatur wird in dem Bereich, in den die Kugel fällt, zu Boden geschleudert. Das Wasser verschwindet danach."
    ]
  },
  {
    name: "Wasserwand",
    schule: "Hervorrufung",
    grad: 3,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 10 Minuten",
    konzentration: true,
    reichweite: "18 m",
    komponenten: ["V", "G", "M"],
    material: "ein Tropfen Wasser",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du erschaffst an einer Stelle, die du innerhalb der Reichweite sehen kannst, eine Wand aus Wasser auf dem Untergrund. Du kannst die Wand bis zu 9 m lang machen, 3 m hoch und 30 cm dick. Du kannst aber auch eine ringförmige Mauer mit 6 m Durchmesser erschaffen, die 6 m hoch und 30 cm dick ist. Die Wand verschwindet, wenn der Zauber endet. Der Bereich der Wand ist schwieriges Gelände.",
      "Jeder Fernkampf-Waffenangriff, der in den Bereich der Wand eintritt, hat Nachteil beim Angriffswurf, und Feuerschaden wird halbiert, wenn der Feuereffekt die Wand durchquert, um das Ziel zu erreichen. Zauber, welche Eisschaden verursachen und den Bereich der Wand durchqueren, lassen den Bereich, durch den sie sich bewegen, gefrieren (es wird mindestens ein Quadrat von 1,50 m Seitenlänge eingefroren). Jedes Quadrat mit 1,50 m Seitenlänge hat RK 5 und 15 Trefferpunkte. Einen gefrorenen Abschnitt auf 0 Trefferpunkte zu reduzieren, zerstört ihn. Wenn ein Abschnitt zerstört ist, wird das Wasser der Wand ihn nicht nachfüllen."
    ]
  },
  {
    name: "Wind kontrollieren",
    schule: "Verwandlung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Stunde",
    konzentration: true,
    reichweite: "90 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du erlangst Herrschaft über die Luft in einem Würfel von 30 m Kantenlänge, den du innerhalb der Reichweite sehen kannst. Wähle einen der folgenden zwei Effekte, wenn du den Zauber wirkst. Die Effekte verbleiben für die Wirkungsdauer des Zaubers, es sei denn, du nutzt in einem späteren Zug deine Aktion, um zu einem anderen Effekt zu wechseln. Du kannst deine Aktion auch dazu verwenden, einen Effekt zeitweilig anzuhalten oder einen angehaltenen Effekt wieder in Gang zu setzen.",
      "Windböen. Ein Wind entsteht innerhalb des Würfels und weht horizontal in eine Richtung, die du bestimmst. Du wählst die Intensität des Windes: ruhig, mittelschwer oder stark. Wenn der Wind mittelschwer oder stark ist, haben Fernkampf-Waffenangriffe, die sich in den Würfel hinein, aus ihm hinaus oder durch ihn hindurch bewegen, Nachteil bei ihren Angriffswürfen. Wenn der Wind stark ist, muss jede Kreatur, die sich gegen den Wind bewegt, für jeden Meter Bewegung einen weiteren Meter ihrer Bewegungsrate aufwenden.",
      "Abwind. Du verursachst einen anhaltenden, starken Windstoß, der vom oberen Teil des Würfels herunterbläst. Fernkampf-Waffenangriffe, die den Würfel durchqueren oder gegen Ziele gerichtet sind, die sich im Würfel befinden, erleiden Nachteil bei ihren Angriffswürfen. Eine Kreatur muss einen Stärkerettungswurf ablegen, wenn sie zum ersten Mal in ihrem Zug in den Würfel fliegt oder ihren Zug fliegend darin beginnt. Bei einem Fehlschlag wird die Kreatur zu Boden geschleudert.",
      "Aufwind. Du verursachst einen anhaltenden Aufwind im Würfel, welcher vom Boden heraufsteigt. Kreaturen, die einen Sturz innerhalb des Würfels beenden, nehmen nur halben Schaden durch den Sturz. Wenn eine Kreatur einen senkrechten Sprung unternimmt, kann sie bis zu 3 m höher springen als normal."
    ]
  },
  {
    name: "Windbö",
    schule: "Verwandlung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "9 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du ermächtigst dich der Luft und zwingst sie, einen der folgenden Effekte an einem Punkt zu erzeugen, den du innerhalb der Reichweite sehen kannst: Eine mittelgroße oder kleinere Kreatur muss einen Stärkerettungswurf bestehen oder wird bis zu 1,50 m von dir weggedrückt. Du erzeugst einen kleinen Windstoß, der fähig ist, ein Objekt, das weder in der Hand gehalten noch getragen wird und das nicht mehr als 5 Pfund wiegt, zu bewegen (das Objekt wird bis zu 3 m weggedrückt, nicht mit genug Kraft um Schaden zu verursachen). Du erzeugst einen harmlosen wahrnehmbaren Effekt unter Verwendung von Luft, wie zum Beispiel das Rascheln von Blättern, Wind der Fensterläden zuschlägt, oder Kleidung die sich in einer Brise bewegt."
    ]
  },
  {
    name: "Wirbelwind",
    schule: "Hervorrufung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "90 m",
    komponenten: ["V", "M"],
    material: "etwas Stroh",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Ein Wirbelwind geht auf einen Punkt hernieder, welchen du innerhalb der Reichweite auf dem Untergrund sehen kannst. Der Wirbelwind ist ein 9 m hoher Zylinder mit einem Radius von 3 m, dessen Zentrum am gewählten Punkt liegt. Bis der Zauber endet, kannst du eine Aktion verwenden, um den Wirbelwind bis zu 9 m in jede Richtung über den Untergrund zu bewegen. Der Wirbelwind saugt alle mittelgroßen und kleineren Objekte ein, die nicht gesichert sind oder von jemandem getragen oder in der Hand gehalten werden.",
      "Eine Kreatur muss einen Geschicklichkeitsrettungswurf ablegen, wenn sie zum ersten Mal in ihrem Zug den Wirbelwind betritt, oder der Wirbelwind zum ersten Mal ihren Bereich betritt. Das schließt das erstmalige Erscheinen des Wirbelwinds ein. Eine Kreatur erleidet 10W6 Wuchtschaden bei einem Fehlschlag, die Hälfte davon bei einem Erfolg. Zusätzlich müssen große oder kleinere Kreaturen bei einem Fehlschlag einen Stärkerettungswurf ablegen, oder werden vom Wirbelwind festgesetzt, bis der Zauber endet. Wenn eine durch den Wirbelwind festgesetzte Kreatur ihren Zug beginnt, so wird sie darin 1,50 m aufwärts gezogen, bis sie die Spitze erreicht. Eine gebundene Kreatur bewegt sich mit dem Wirbelwind und fällt, wenn der Zauber endet, sofern sie keine Möglichkeiten hat, sich in der Luft zu halten.",
      "Eine festgesetzte Kreatur kann eine Aktion verwenden, um einen Stärkerettungswurf oder Geschicklichkeitsrettungswurf gegen deinen Zauberschwierigkeitsgrad zu machen. Bei einem Erfolg ist die Kreatur nicht länger durch den Wirbelwind festgesetzt und wird 3W6 × 3 m weit in zufälliger Richtung fortgeschleudert."
    ]
  },
  {
    name: "Wort der Macht: Schmerz",
    schule: "Verzauberung",
    grad: 7,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "18 m",
    komponenten: ["V"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du sprichst ein Wort der Macht aus, das Wellen intensiven Schmerzes verursacht, um eine Kreatur zu überwältigen, die du innerhalb der Reichweite sehen kannst. Wenn das Ziel 100 oder weniger Trefferpunkte hat, so wird es lähmenden Schmerzen unterworfen. Andernfalls hat der Zauber keinen Effekt auf das Ziel. Ein Ziel ist ebenfalls nicht betroffen, wenn es gegenüber Bezauberungen immun ist.",
      "Während das Ziel unter den lähmenden Schmerzen leidet, kann keine seiner Bewegungsraten größer sein als 3 m. Das Ziel hat zudem Nachteil bei Angriffswürfen, Attributswürfen und Rettungswürfen, ausgenommen Konstitutionsrettungswürfe. Zu guter Letzt muss dem Ziel zunächst ein Konstitutionsrettungswurf gelingen, wenn es versucht, einen Zauber zu wirken. Andernfalls schlägt das Wirken fehl und der Zauber ist verschwendet.",
      "Ein Ziel, das unter diesen Schmerzen leidet, kann einen Konstitutionsrettungswurf am Ende jedes seiner Züge ablegen. Bei einem Erfolg enden die Schmerzen."
    ]
  },
  {
    name: "Wort des Strahlens",
    schule: "Hervorrufung",
    grad: 0,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "1,50 m",
    komponenten: ["V", "M"],
    material: "ein heiliges Symbol",
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du sprichst ein göttliches Wort aus, und ein brennendes Gleißen bricht aus dir heraus. Jede Kreatur deiner Wahl, welche du innerhalb der Reichweite sehen kannst, muss einen Konstitutionsrettungswurf ablegen oder erleidet 1W6 gleißenden Schaden.",
      "Der Schaden des Zaubers erhöht sich um 1W6, wenn du Stufe 5 erreichst (2W6), Stufe 11 (3W6) und Stufe 17 (4W6)."
    ]
  },
  {
    name: "Zephyrschlag",
    schule: "Verwandlung",
    grad: 1,
    zeitaufwand: "1 Bonusaktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "Selbst",
    komponenten: ["V"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du bewegst dich wie der Wind. Bis zum Ende des Zaubers provoziert deine Bewegung keine Gelegenheitsangriffe.",
      "Du kannst dir einmal vor dem Ende des Zaubers Vorteil bei einem Waffenangriffswurf in deinem Zug geben. Dieser Angriff verursacht zusätzlich 1W8 Energieschaden bei einem Treffer. Unabhängig davon, ob du triffst oder nicht, deine Bewegungsrate erhöht sich bis zum Ende dieses Zuges um 9 m."
    ]
  },
  {
    name: "Zeremonie",
    schule: "Bannmagie",
    grad: 1,
    zeitaufwand: "1 Stunde",
    wirkungsdauer: "Unmittelbar",
    konzentration: false,
    reichweite: "Berührung",
    komponenten: ["V", "G", "M"],
    material: "Silberpulver im Wert von 25 GM (wird verbraucht)",
    klassen: [],
    ritual: true,
    beschreibung: [
      "Du vollziehst eine spezielle religiöse Zeremonie, die von Magie erfüllt ist. Wenn du den Zauber wirkst, wähle eine der folgenden Riten, deren Ziel sich während des Wirkens innerhalb von 3 m von dir aufhalten muss.",
      "Begräbnisritus. Du berührst eine Leiche, und für die nächsten 7 Tage kann das Ziel unter keinen Umständen zum Untoten werden, ausgenommen durch den Zauber Wunsch.",
      "Heirat. Du berührst erwachsene Humanoide, die bereit sind, miteinander den Ehebund einzugehen. In den nächsten 7 Tagen erhalten beide Ziele einen Bonus von +2 zur RK, solange sie innerhalb von 9 m voneinander sind. Eine Kreatur kann nur dann noch einmal von diesem Ritus profitieren, wenn sie verwitwet ist.",
      "Heranreifen. Du kannst einen Humanoiden berühren, der ein junger Erwachsener ist. In den nächsten 24 Stunden kann das Ziel, wann immer es einen Attributswurf durchführt, einen W4 würfeln und das Ergebnis hinzuzählen. Eine Kreatur kann nur einmal von diesem Ritus profitieren.",
      "Hingabe. Du berührst einen Humanoiden, der wünscht, sich dem Dienst an deinen Gott hinzugeben. Für die nächsten 24 Stunden kann das Ziel, wann immer es einen Rettungswurf durchführt, einen W4 werfen und das Ergebnis hinzuzählen. Eine Kreatur kann von diesem Ritus nur einmal profitieren.",
      "Sühne. Du berührst eine bereitwillige Kreatur, deren Gesinnung sich geändert hat, und führst einen Wurf auf Weisheit (Motiv erkennen) gegen SG 20 durch. Bei Erfolg stellst du die ursprüngliche Gesinnung des Ziels wieder her.",
      "Wasser segnen. Du berührst eine Phiole mit Wasser und lässt sie so zu Weihwasser werden."
    ]
  },
  {
    name: "Zorn der Natur",
    schule: "Hervorrufung",
    grad: 5,
    zeitaufwand: "1 Aktion",
    wirkungsdauer: "Konzentration, bis zu 1 Minute",
    konzentration: true,
    reichweite: "36 m",
    komponenten: ["V", "G"],
    material: null,
    klassen: [],
    ritual: false,
    beschreibung: [
      "Du kannst die Geister der Natur anrufen und sie gegen deine Feinde aufwiegeln. Wähle einen Punkt, den du innerhalb der Reichweite sehen kannst. Die Geister werden dann in einem Würfel mit 18 m Kantenlänge, dessen Zentrum an diesem Punkt liegt, Bäume, Felsen und Gräser beleben, bis der Zauber endet.",
      "Bäume. Zu Beginn jedes deiner Züge muss jeder deiner Feinde einen Geschicklichkeitsrettungswurf ablegen, wenn er sich innerhalb von 3 m von einem Baum befindet, der sich im Würfel befindet. Bei einem Fehlschlag erleidet der Feind 4W6 Hiebschaden durch ausschlagende Äste.",
      "Felsen. Als eine Bonusaktion in deinem Zug kannst du einen losen Felsen, der sich im Würfel befindet, gegen eine Kreatur schleudern, welche du im Würfel sehen kannst. Führe einen Fernkampf-Zauberangriff gegen das Ziel durch. Bei einem Treffer erleidet es 3W8 nichtmagischen Wuchtschaden und muss einen erfolgreichen Stärkerettungswurf ablegen, um nicht zu Boden geworfen zu werden.",
      "Gräser und Gestrüpp. Jeder Bereich innerhalb des Würfels, welcher mit Gras oder Gestrüpp bedeckt ist, wird für deine Feinde zu schwierigem Gelände.",
      "Wurzeln und Lianen. Am Ende jedes deiner Züge muss eine Kreatur deiner Wahl, welche sich im Würfel auf dem Untergrund befindet, einen Stärkerettungswurf ablegen. Bei einem Fehlschlag ist sie bis zum Ende des Zaubers festgesetzt. Eine festgesetzte Kreatur kann eine Aktion nutzen, um einen Wurf auf Stärke (Athletik) gegen deinen Zauberschwierigkeitsgrad abzulegen, um den Effekt bei sich selbst mit einem Erfolg zu beenden."
    ]
  }
];
