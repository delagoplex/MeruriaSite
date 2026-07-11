window.MONSTER_DATA_AVERNUS = [
  {
    name: "Abyssalhuhn",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Winzig",
    gesinnung: "Chaotisch Böse",
    cr: 0.25,
    xp: 50,
    rk: 13, ruestungstyp: "natürliche Rüstung",
    tp: 10, tp_wuerfel: "3W4+3",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m" },
    attribute: { STR: 6, DEX: 14, CON: 13, INT: 4, WIS: 9, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Kälte", "Feuer", "Blitz"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Vergiftet"],
    sinne: ["Blindsinn 9 m (blind jenseits dieses Radius)"],
    passiveWahrnehmung: 9,
    sprachen: ["versteht Abyssal, kann es aber nicht sprechen"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/avernus/abyssalhuhn.png",
    beschreibung: [
      "Abyssalhühner sind kleine dämonische Kreaturen, die durch den Abyss streifen. Trotz ihrer Flügel sind sie miserable Flieger — sie sinken sofort ab, sobald sie aufhören aktiv zu flattern. Ihren zähen Schnäbeln und Klauen zum Trotz sind sie gierig und für unvorbereitete Reisende in den unteren Ebenen durchaus gefährlich."
    ],
    besonderheiten: [
      { name: "Schlechter Flieger", beschreibung: "Das Abyssalhuhn fällt am Ende seines Zuges herab, wenn es sich in der Luft befindet und sein Flug nur durch seine Fluggeschwindigkeit aufrechterhalten wird." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Das Abyssalhuhn führt zwei Angriffe aus: einen mit seinem Biss und einen mit seinen Klauen." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +4 zum Treffen, Reichweite 1,5 m, eine Kreatur. Treffer: 4 (1W4+2) Stichschaden." },
      { name: "Klauen", beschreibung: "Nahkampfwaffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W6+2) Hiebschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Avernus"
  },
  {
    name: "Crokek'toeck",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Gigantisch",
    gesinnung: "Chaotisch Böse",
    cr: 14,
    xp: 11500,
    rk: 15, ruestungstyp: "natürliche Rüstung",
    tp: 297, tp_wuerfel: "17W20+119",
    bewegung: { "Gehen": "18 m", "Schwimmen": "18 m" },
    attribute: { STR: 28, DEX: 10, CON: 24, INT: 6, WIS: 10, CHA: 13 },
    rettungswuerfe: { KON: 12, WEI: 5 },
    fertigkeiten: {},
    schadensresistenzen: ["Kälte", "Feuer", "Blitz", "Wucht (nichtmagisch)", "Stich (nichtmagisch)", "Hieb (nichtmagisch)"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 10,
    sprachen: ["versteht Abyssal, kann es aber nicht sprechen"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/avernus/crokek_toeck.png",
    beschreibung: [
      "Crokek'toeck ist Yeenoghu's dämonisches Haustier. Das einzigartige Wesen ähnelt einem riesigen Schlammspringer mit den Zähnen, dem Fell, den Ohren und dem Lachen einer Hyäne. Dieser einzigartige Dämon kann kleinere Dämonen in seinem Schlund halten und sie überall dort ausspeien, wo Yeenoghu es wünscht. Immun gegen die geistbrechenden Wirkungen des Styx-Flusses wird Crokek'toeck oft dazu benutzt, kleinere Dämonen (und manchmal Yeenoghu selbst) durch die schrecklichen Gewässer des Styx zu transportieren."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Crokek'toeck kann Luft und Wasser atmen." },
      { name: "Magieresistenz", beschreibung: "Crokek'toeck hat Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Magische Waffen", beschreibung: "Crokek'toecks Waffenangriffe sind magisch." },
      { name: "Gesichertes Gedächtnis", beschreibung: "Crokek'toeck ist immun gegen das Wasser des Styx sowie gegen jeden Effekt, der seine Erinnerungen stehlen oder verändern oder seine Gedanken erkennen oder lesen würde." },
      { name: "Stehender Sprung", beschreibung: "Crokek'toecks Weitsprung beträgt bis zu 18 m und sein Hochsprung bis zu 9 m, mit oder ohne Anlauf." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +14 zum Treffen, Reichweite 4,5 m, ein Ziel. Treffer: 44 (10W6+9) Stichschaden." },
      { name: "Verbündete Ausspeien (Aufladung 6)", beschreibung: "Crokek'toeck öffnet sein Maul und speit 1W4 Barlguras, 3W6 Gnolls angeführt von 1 Gnoll-Fangzahn des Yeenoghu, 6W6 Dretches oder 1W3 Vrocks aus (siehe das Monsterhandbuch für die Statusblöcke dieser Kreaturen). Jede ausgespiene Kreatur erscheint in einem freien Feld innerhalb von 9 m von Crokek'toecks Maul oder im nächstgelegenen freien Feld." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Avernus"
  },
  {
    name: "Höllenwespe",
    art: "Unhold",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Rechtschaffen Böse",
    cr: 5,
    xp: 1800,
    rk: 19, ruestungstyp: "natürliche Rüstung",
    tp: 52, tp_wuerfel: "8W10+8",
    bewegung: { "Gehen": "3 m", "Fliegen": "18 m (schwebend)" },
    attribute: { STR: 18, DEX: 15, CON: 12, INT: 10, WIS: 10, CHA: 7 },
    rettungswuerfe: { GES: 5, WEI: 3 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: ["Kälte"],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Infernalisch", "Telepathie (90 m, nur mit anderen Höllenwespen)"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/avernus/hoellenwespe.png",
    beschreibung: [
      "Eine Höllenwespe ist ein intelligentes, bösartiges Insekt, das in den Neun Höllen beheimatet ist. Sie hat einen dicken, schützenden Schuppenpanzer, dünne metallische Flügel und starke Beine, die in schwertartigen Talonen enden. Sie benutzt ihren Stachel, um ein chemisches Gemisch ähnlich dem Alchimistenfeuer in ihre Opfer zu injizieren. Diese gleiche Lösung enthält ein lähmendes Enzym, das das Opfer lange genug hilflos macht, damit die Höllenwespe ihre Beute greifen und fliehen kann.",
      "Höllenwespen gedeihen bei heißem Wetter, aber extreme Kälte lässt ihre Schalen reißen und ihren Stoffwechsel zusammenbrechen. Infolgedessen meiden sie die eisigen Schichten der Neun Höllen (Stygia und Cania).",
      "Nester. Höllenwespen speien eine goldene Galle ähnlich wie Bernstein aus, mit der sie riesige, kammer- und gangdurchzogene Nester bauen, die sie als Gemeinschaftsunterkünfte und Nahrungslager nutzen. Ein typisches Nest beherbergt eine Gemeinschaft von 1W10+10 Höllenwespen, wobei jede eine gleiche Stimme und Rolle in der Gesellschaft hat.",
      "Höllenwespen-Telepathie. Höllenwespen kommunizieren miteinander über eine Form von Telepathie, die nur ihresgleichen wahrnehmen können."
    ],
    besonderheiten: [
      { name: "Magische Waffen", beschreibung: "Die Waffenangriffe der Höllenwespe sind magisch." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Höllenwespe führt zwei Angriffe aus: einen mit ihrem Stachel und einen mit ihren Schwerttalonen." },
      { name: "Stachel", beschreibung: "Nahkampfwaffenangriff: +7 zum Treffen, Reichweite 1,5 m, eine Kreatur. Treffer: 8 (1W8+4) Stichschaden plus 7 (2W6) Feuerschaden, und das Ziel muss einen KON-Rettungswurf SG 12 bestehen oder ist 1 Minute lang vergiftet. Solange das Ziel auf diese Weise vergiftet ist, ist es auch gelähmt. Das Ziel kann den Rettungswurf am Ende jedes seiner Züge wiederholen und beendet den Effekt bei einem Erfolg für sich selbst." },
      { name: "Schwerttalonen", beschreibung: "Nahkampfwaffenangriff: +7 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Stichschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Avernus"
  },
  {
    name: "Hollyphant",
    art: "Himmlisch",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Rechtschaffen Gut",
    cr: 5,
    xp: 1800,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 36, tp_wuerfel: "8W6+8",
    bewegung: { "Gehen": "6 m", "Fliegen": "36 m" },
    attribute: { STR: 10, DEX: 11, CON: 12, INT: 16, WIS: 19, CHA: 16 },
    rettungswuerfe: { GES: 3, KON: 4, CHA: 6 },
    fertigkeiten: {},
    schadensresistenzen: ["Wucht (nichtmagisch)", "Stich (nichtmagisch)", "Hieb (nichtmagisch)"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: [],
    passiveWahrnehmung: 14,
    sprachen: ["Himmlisch", "Telepathie (36 m)"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/avernus/hollyphant.png",
    beschreibung: [
      "Hollyphants sind sanfte, unerschrockene Kreaturen, die in den Oberen Ebenen beheimatet sind. Gut-gesinnte Gottheiten und Engel benutzen sie als Boten und Helfer. Hollyphants schätzen Freundschaft und Ehrlichkeit.",
      "Ein Hollyphant sieht aus wie ein Miniaturrüsseltier mit leuchtendem Goldfell und kleinen, schnell flatternden Flügeln, die ihn nicht nur in der Luft halten, sondern ihn auch mit großer Geschwindigkeit vorwärtstreiben. Obwohl freundlich, wird ein Hollyphant keine böse Tat bezeugen, ohne den Übeltäter zu bestrafen. Seine perlmuttartigen Stoßzähne sind wenig imposant, aber er kann Trompetenstöße aus seinem Rüssel entfesseln, die Kreaturen betäuben oder Übeltäter in strahlende Funken positiver Energie hüllen."
    ],
    besonderheiten: [
      { name: "Aura der Unverwundbarkeit", beschreibung: "Eine unsichtbare Aura bildet eine 3-m-Radius-Sphäre um den Hollyphant, solange er lebt. Jeder Zauber der 5. Stufe oder niedriger, der von außerhalb der Barriere gewirkt wird, kann keine Kreaturen oder Objekte innerhalb beeinflussen, auch wenn er mit einem höherstufigen Zauberplatz gewirkt wird. Solche Zauber können Kreaturen und Objekte innerhalb der Barriere zum Ziel haben, haben aber keine Wirkung auf sie. Der Hollyphant kann eine Aktion verwenden, um dieses Merkmal zu unterdrücken, bis seine Konzentration endet." },
      { name: "Angeborenes Zauberwirken", beschreibung: "Die Zauberwirkungsfähigkeit des Hollyphants ist Weisheit (Zauberrettungswurf SG 15). Er kann folgende Zauber angeboren wirken, ohne Materialkomponenten zu benötigen: Nach Belieben: Licht. Je 2/Tag: Segen, Wunden heilen, Schutz vor Gut und Böse. Je 1/Tag: Verbannung, Heilen, Tote erwecken, Gestaltwandel (in ein goldfelliges Mammut mit Federflügeln und Fluggeschwindigkeit 36 m), Teleport (ohne Fehlerrisiko)." },
      { name: "Magische Waffen", beschreibung: "Die Waffenangriffe des Hollyphants sind magisch." }
    ],
    aktionen: [
      { name: "Stoßzähne", beschreibung: "Nahkampfwaffenangriff: +3 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 3 (1W6) Stichschaden." },
      { name: "Trompete (3/Tag)", beschreibung: "Der Hollyphant bläst Luft durch seinen Rüssel und erzeugt einen Trompetenklang, der bis zu 180 m weit gehört werden kann. Die Trompete erzeugt auch einen 9-m-Kegel aus Energie mit einem der folgenden Effekte nach Wahl des Hollyphants. Trompete des Betäubens: Jede Kreatur im Kegel muss einen KON-Rettungswurf SG 14 ablegen. Bei einem Fehlschlag erleidet die Kreatur 17 (5W6) Donnerschaden und ist 1 Minute lang taub. Bei einem Erfolg erleidet die Kreatur halb so viel Schaden und ist nicht taub. Nichtmagische Objekte im Kegel, die nicht gehalten oder getragen werden, erleiden 35 (10W6) Donnerschaden. Trompete der Funken: Kreaturen im Kegel müssen einen KON-Rettungswurf SG 14 ablegen und erleiden bei einem Fehlschlag 22 (4W8+4) Strahlenschaden, bei einem Erfolg die Hälfte. Böse Kreaturen haben Nachteil auf den Rettungswurf. Gute Kreaturen im Kegel erleiden keinen Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Avernus"
  },
  {
    name: "Tollkappe",
    art: "Feenwesen",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Chaotisch böse",
    cr: 3,
    xp: 700,
    rk: 13, ruestungstyp: "natürliche Rüstung",
    tp: 45, tp_wuerfel: "6W6+24",
    bewegung: { "Gehen": "7,5 m" },
    attribute: { STR: 18, DEX: 13, CON: 18, INT: 10, WIS: 12, CHA: 9 },
    rettungswuerfe: {},
    fertigkeiten: { "Athletik": 6, "Wahrnehmung": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Gemeinsprache", "Sylvanisch"],
    umgebung: ["Feenwildnis", "Wald"],
    bild: "assets/images/monster/avernus/tollkappe.png",
    beschreibung: [
      "Eine Tollkappe ist eine Rotkappe, die ihre Kappe in Dämonenblut statt in gewöhnliches Blut taucht. Dieser Kontakt macht das Wesen noch psychotischer und lässt irrationale Hassgefühle in ihm aufkeimen. Manchmal schließen sich mehrere Tollkappen zusammen, vereint in einem gemeinsamen Hass auf etwas Bestimmtes — sei es Musik, Kreaturen mit lockigem Haar oder eine bestimmte Farbe."
    ],
    besonderheiten: [
      { name: "Eisenstiefel", beschreibung: "Während sich die Tollkappe bewegt, hat sie Nachteil auf Geschicklichkeit (Heimlichkeit)-Proben." },
      { name: "Überdimensionale Stärke", beschreibung: "Beim Ringkampf gilt die Tollkappe als Mittelgroß. Außerdem erleidet sie keinen Nachteil auf den Angriffswurf, wenn sie eine schwere Waffe schwingt." },
      { name: "Hasserfülltes Ende", beschreibung: "Wenn die Tollkappe auf 0 Trefferpunkte sinkt, explodiert sie in Flammen und verbrennt sich selbst, ihre ichorgetränkte Kappe und ihre Hose sofort zu Asche. Ihre Waffe und die glühenden Eisenstiefel bleiben zurück." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Tollkappe führt drei Angriffe mit ihrer bösen Sichel durch." },
      { name: "Böse Sichel", beschreibung: "Nahkampfwaffenangriff: +6 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 9 (2W4+4) Hiebschaden." },
      { name: "Eisengebundene Verfolgung", beschreibung: "Die Tollkappe bewegt sich bis zu ihrer Bewegungsrate auf eine Kreatur zu, die sie sehen kann, und tritt sie mit ihren Eisenstiefeln. Das Ziel muss einen GES-Rettungswurf (SG 14) bestehen oder erleidet 20 (3W10+4) Wuchtschaden und wird niedergeworfen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Avernus"
  },
  {
    name: "Teuflischer Fleischgolem",
    art: "Konstrukt",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 8,
    xp: 3900,
    rk: 12, ruestungstyp: "natürliche Rüstung",
    tp: 210, tp_wuerfel: "20W10+100",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m (schwebend)" },
    attribute: { STR: 20, DEX: 9, CON: 20, INT: 7, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Kälte", "Feuer"],
    schadensimmunitaeten: ["Blitz", "Gift", "Wucht (nichtmagisch, nicht Adamant/Silber)", "Stich (nichtmagisch, nicht Adamant/Silber)", "Hieb (nichtmagisch, nicht Adamant/Silber)"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["versteht die Sprachen seines Erschaffers, kann aber nicht sprechen"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/avernus/teuflischer_fleischgolem.png",
    beschreibung: [
      "Ein teuflischer Fleischgolem ist ein besonders großer Fleischgolem aus zusammengenähten Körperteilen von Teufeln, Dämonen, Yugoloths und anderen Unholds. Da diese Teile von verschiedenen Kreaturen stammen und auf verschiedene Weisen kombiniert werden können, sehen keine zwei teuflischen Fleischgolems genau gleich aus. Nachtschrecksen hüten das Geheimnis der Herstellung solcher Golems und teilen es selten mit jemandem anderen.",
      "Einige teuflische Fleischgolems haben Flügel. Die Magie, die zu ihrer Erschaffung verwendet wurde, erlaubt ihnen jedoch zu fliegen und zu schweben, selbst ohne Flügel."
    ],
    besonderheiten: [
      { name: "Rasend", beschreibung: "Wann immer der Golem seinen Zug mit 100 Trefferpunkten oder weniger beginnt, wird ein W6 gewürfelt. Bei einer 6 verfällt der Golem in Raserei. In jedem seiner Züge greift er die nächste Kreatur an, die er sehen kann. Befindet sich keine Kreatur in seiner Reichweite, greift er ein Objekt an, bevorzugt eines, das kleiner als er selbst ist. Dieser Zustand hält an, bis er zerstört wird oder alle Trefferpunkte zurückgewinnt. Befindet sich der Erschaffer des Golems innerhalb von 18 m, kann er versuchen, ihn durch bestimmtes und überzeugendes Reden zu beruhigen (Aktion: CHA-Überzeugungswurf SG 15; der Golem muss ihn hören können). Bei Erfolg hört der Golem auf zu rasen. Erleidet er weiteren Schaden, könnte er erneut in Raserei verfallen." },
      { name: "Unveränderliche Form", beschreibung: "Der Golem ist immun gegen jeden Zauber oder Effekt, der seine Form verändern würde." },
      { name: "Blitzabsorption", beschreibung: "Wenn der Golem Blitzschaden erleidet, erleidet er keinen Schaden und gewinnt stattdessen Trefferpunkte in Höhe des zugefügten Blitzschadens zurück." },
      { name: "Magieresistenz", beschreibung: "Der Golem hat Vorteil bei Rettungswürfen gegen Zauber und andere magische Effekte." },
      { name: "Magische Waffen", beschreibung: "Die Waffenangriffe des Golems sind magisch." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Golem führt zwei Schlag-Angriffe aus." },
      { name: "Schlag", beschreibung: "Nahkampfwaffenangriff: +8 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 16 (2W10+5) Wuchtschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Avernus"
  },
  {
    name: "Tressym",
    art: "Monstrosität",
    unterart: null,
    groesse: "Winzig",
    gesinnung: "Chaotisch neutral",
    cr: 0,
    xp: 10,
    rk: 12, ruestungstyp: null,
    tp: 5, tp_wuerfel: "2W4",
    bewegung: { "Gehen": "12 m", "Klettern": "9 m", "Fliegen": "12 m" },
    attribute: { STR: 3, DEX: 15, CON: 10, INT: 11, WIS: 12, CHA: 12 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 5, "Heimlichkeit": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["versteht Gemein, kann es aber nicht sprechen"],
    umgebung: ["Stadt", "Wald"],
    bild: "assets/images/monster/avernus/tressym.png",
    beschreibung: [
      "Ein Tressym ist eine schelmische geflügelte Katze, ungefähr so groß wie eine Hauskatze, mit einer Flügelspannweite von etwa einem Meter.",
      "Man vermutet, dass Tressym das Ergebnis von Zaubererexperimenten an Hauskatzen sind. Diese intelligenten Felinen sind bekannt dafür, starke Freundschaften mit Humanoiden zu schließen, besonders mit Waldläufern und Zauberern. Tressym kommen gut mit anderen ihrer Art aus, suchen aber selten gemeinsam Unterschlupf oder gehen gemeinsam auf die Jagd. Fledermäuse, Feendrachen und ähnliche Wesen ignorieren sie friedlich, aber Stirges und böse fliegende Monster wie Mantikore hassen sie. Hunde reizen sie gerne.",
      "Tressym ernähren sich von kleinen Nagetieren, Vögeln und Insekten, die sie wie normale Katzen beschleichen und auf die sie sich stürzen — mit dem zusätzlichen Vorteil des Fliegens. Tressym greifen jedoch keine Nestlinge an und plündern keine Eier.",
      "Mit Erlaubnis des Spielleiters kann eine Person, die den Zauber Vertrauten finden wirkt, einen Tressym statt einer normalen Katze heraufbeschwören."
    ],
    besonderheiten: [
      { name: "Unsichtbarkeit entdecken", beschreibung: "Innerhalb von 18 m um den Tressym kann magische Unsichtbarkeit vor dem Tressym nichts verbergen." },
      { name: "Feiner Geruchssinn", beschreibung: "Der Tressym hat Vorteil auf Weisheit (Wahrnehmung)-Proben, die auf dem Geruchssinn beruhen." },
      { name: "Giftgespür", beschreibung: "Der Tressym kann durch Geschmack, Berührung oder Geruch erkennen, ob eine Substanz giftig ist." }
    ],
    aktionen: [
      { name: "Klauen", beschreibung: "Nahkampfwaffenangriff: +0 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 1 Hiebschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Avernus"
  },
];
