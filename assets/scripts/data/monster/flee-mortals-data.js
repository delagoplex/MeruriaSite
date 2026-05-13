// Flee Mortals — Monster aus dem gleichnamigen MCDM-Buch.
//
// Neue Einträge:
//   - source: "Flee Mortals"
//   - bild:   "assets/images/monster/flee-mortals/<dateiname>.png"
//   - Schema identisch zu den anderen Monster-Datenquellen
//
// Alphabetisch nach name einsortieren (Deutsch-Sortierung).

window.MONSTER_DATA_FLEE_MORTALS = [
  {
    name: "Angulotl-Ganove",
    art: "Humanoid",
    unterart: "Angulotl",
    groesse: "Klein",
    gesinnung: "Beliebige Gesinnung",
    cr: 0.25,
    xp: 50,
    rk: 13,
    ruestungstyp: "leichte Rüstung",
    tp: 7,
    tp_wuerfel: "1W8 (skaliert: TP = 7 × Stufe; Trefferwürfel-Anzahl = Stufe)",
    bewegung: { "Gehen": "7,5 m", "Klettern": "6 m", "Schwimmen": "9 m" },
    attribute: { STR: 10, DEX: 16, CON: 10, INT: 10, WIS: 14, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Akrobatik": 3, "Athletik": 0, "Heimlichkeit": 3, "Überleben": 2 },
    schadensresistenzen: ["Gift"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Angulotl", "Gemein"],
    umgebung: ["Sumpf", "Dschungel", "Küste"],
    bild: "assets/images/monster/flee-mortals/angulotl-ganove.png",
    beschreibung: [
      "Retainer (Gefolgsmann) – ein Begleiter-NSC, dessen Werte mit dem Übungsbonus (PB) des Mentors skalieren. Alle Rettungswürfe erhalten +PB; Fertigkeitsboni erhalten +PB zum Grundwert. Der Signaturangriff schlägt mit +3+PB und richtet 1W4+PB Stichschaden plus 2W6 Giftschaden an. Ab Stufe 7 darf der Yegg den Signaturangriff bei einer Angriffsaktion zweimal statt einmal ausführen."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Angulotl-Ganove kann Luft und Wasser atmen." },
      { name: "Stufe 3: Tod von oben! (3/Tag)", beschreibung: "Als Bonusaktion springt der Ganove bis zu seiner Bewegungsweite, ohne Gelegenheitsangriffe auszulösen. Springt er dabei über einen Gegner, kann er einen Signaturangriff mit Vorteil gegen ihn ausführen. Bei Treffer +PB Stichschaden." },
      { name: "Stufe 5: Niederlegen (3/Tag)", beschreibung: "Trifft der Ganove eine Kreatur mit einem Signaturangriff, während er verborgen ist, kann er als Reaktion verborgen bleiben." },
      { name: "Stufe 7: Ätzende Säure (3/Tag)", beschreibung: "Als Aktion wirft der Ganove eine Säureflasche auf einen sichtbaren Punkt innerhalb von 6 m. Die Flasche zerbricht und jede Kreatur innerhalb von 3 m muss einen GES-Rettungswurf SG 10+PB bestehen oder erleidet PB×W10 Säureschaden (halber Schaden bei Erfolg)." }
    ],
    aktionen: [
      { name: "Signaturangriff (Giftmesser)", beschreibung: "Nahkampf- oder Distanzangriff: +3+PB, Reichweite 1,5 m oder 6/18 m. Treffer: 1W4+PB Stichschaden plus 7 (2W6) Giftschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Angulotl-Kaulquappe",
    art: "Humanoid",
    unterart: "Angulotl",
    groesse: "Klein",
    gesinnung: "Beliebige Gesinnung",
    cr: 0.25,
    xp: 10,
    rk: 11,
    ruestungstyp: null,
    tp: 6,
    tp_wuerfel: "—",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 5, DEX: 12, CON: 9, INT: 8, WIS: 8, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 9,
    sprachen: [],
    umgebung: ["Sumpf", "Dschungel", "Küste"],
    bild: "assets/images/monster/flee-mortals/angulotl-kaulquappe.png",
    beschreibung: [
      "Minion-Variante: Erleidet die Kaulquappe Schaden durch einen Angriff oder einen misslungenen RW, sinken ihre TP sofort auf 0. Erleidet sie Schaden aus einer anderen Quelle, stirbt sie nur, wenn der Schaden ihr TP-Maximum erreicht oder übersteigt; andernfalls bleibt sie unverletzt."
    ],
    besonderheiten: [
      { name: "Säureplatzen", beschreibung: "Wird die Kaulquappe auf 0 TP reduziert, platzt ihr Körper und sprüht Säure: Jede Kreatur innerhalb von 1,5 m erleidet 1 Säureschaden." },
      { name: "Amphibisch", beschreibung: "Die Kaulquappe kann Luft und Wasser atmen." },
      { name: "Schergen", beschreibung: "Bei Schaden durch einen Angriff oder misslungenen RW sinken die TP sofort auf 0. Andernfalls: Schaden tötet nur, wenn er das TP-Maximum erreicht." },
      { name: "Giftige Haut", beschreibung: "Beginnt eine Kreatur ihren Zug innerhalb von 1,5 m von drei oder mehr Kaulquappen, muss sie einen KON-Rettungswurf bestehen oder ist bis zum Beginn ihres nächsten Zuges Vergiftet. SG = 10 + Anzahl der Kaulquappen innerhalb von 1,5 m." }
    ],
    aktionen: [
      { name: "Biss (Gruppenangriff)", beschreibung: "Nahkampfwaffenangriff: +3, ein Ziel. Treffer: 1 Stichschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Angulotl-Klinge",
    art: "Humanoid",
    unterart: "Angulotl",
    groesse: "Klein",
    gesinnung: "Beliebige Gesinnung",
    cr: 0.25,
    xp: 50,
    rk: 12,
    ruestungstyp: null,
    tp: 14,
    tp_wuerfel: "4W6",
    bewegung: { "Gehen": "6 m", "Klettern": "6 m", "Schwimmen": "9 m" },
    attribute: { STR: 7, DEX: 15, CON: 11, INT: 10, WIS: 14, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 4, "Heimlichkeit": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 14,
    sprachen: ["Angulotl"],
    umgebung: ["Sumpf", "Dschungel", "Küste"],
    bild: "assets/images/monster/flee-mortals/angulotl-klinge.png",
    beschreibung: [
      "Angulotls (ang gwa LAH tulls) sind winzige, leuchtend gefärbte amphibische Humanoide aus Süßwassersümpfen, Flüssen und Regenwäldern. Diese giftigen Froschwesen meiden Konfrontation und siedeln in unterirdischen Höhlen oder Verstecken, die für andere Humanoide nahezu unzugänglich sind. Bedroht werden sie jedoch tödlich. Ihr Hautsekret ist ein Kontaktgift, das sie zudem in stärkere Formen destillieren, um Klingen zu vergiften oder Wurfpfeile zu präparieren."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Die Klinge kann Luft und Wasser atmen." },
      { name: "Schlüpfrig", beschreibung: "Gelegenheitsangriffe gegen die Klinge werden mit Nachteil ausgeführt." },
      { name: "Gifttragend", beschreibung: "Trifft eine Kreatur die Klinge mit einem Nahkampfangriff innerhalb von 1,5 m oder berührt sie, erleidet diese Kreatur 2 (1W4) Giftschaden." }
    ],
    aktionen: [
      { name: "Machete", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W6+2) Hiebschaden." },
      { name: "Wurfpfeil", beschreibung: "Distanzwaffenangriff: +4, Reichweite 6/18 m, ein Ziel. Treffer: 4 (1W4+2) Stichschaden." }
    ],
    bonusaktionen: [
      { name: "Wilder Hüpfer", beschreibung: "Die Klinge springt bis zu ihrer Bewegungsweite. Springt sie damit mindestens 3 m gerade auf eine Kreatur zu, wird der nächste Macheten-Angriff im selben Zug gegen diese Kreatur mit Vorteil ausgeführt." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Angulotl-Nadelschütze",
    art: "Humanoid",
    unterart: "Angulotl",
    groesse: "Klein",
    gesinnung: "Beliebige Gesinnung",
    cr: 4,
    xp: 1100,
    rk: 14,
    ruestungstyp: null,
    tp: 54,
    tp_wuerfel: "12W6+12",
    bewegung: { "Gehen": "6 m", "Klettern": "6 m", "Schwimmen": "9 m" },
    attribute: { STR: 7, DEX: 18, CON: 12, INT: 11, WIS: 16, CHA: 8 },
    rettungswuerfe: { GES: 6 },
    fertigkeiten: { "Akrobatik": 6, "Wahrnehmung": 5, "Heimlichkeit": 8, "Überleben": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Angulotl"],
    umgebung: ["Sumpf", "Dschungel", "Küste"],
    bild: "assets/images/monster/flee-mortals/angulotl-nadelschuetze.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Nadelschütze kann Luft und Wasser atmen." },
      { name: "Scharfschütze", beschreibung: "Verfehlt der Nadelschütze einen Distanzwaffenangriff, während er verborgen ist, bleibt er verborgen. Trifft er mit einem Distanzwaffenangriff mit Vorteil, fügt der Angriff zusätzlich 3 (1W6) Schaden zu." },
      { name: "Gifttragend", beschreibung: "Trifft eine Kreatur den Nadelschützen mit einem Nahkampfangriff innerhalb von 1,5 m oder berührt sie ihn, erleidet sie 2 (1W4) Giftschaden." }
    ],
    aktionen: [
      { name: "Giftkurzschwert", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W6+4) Stichschaden plus 7 (2W6) Giftschaden." },
      { name: "Blasrohr", beschreibung: "Distanzwaffenangriff: +6, Reichweite 7,5/30 m, ein Ziel. Treffer: 1 Stichschaden, und das Ziel muss einen KON-Rettungswurf SG 15 bestehen oder ist 1 Min. Vergiftet (Rettungswurf am Ende des Zuges, beendet bei Erfolg). Während so vergiftet, erleidet das Ziel zu Beginn jedes seiner Züge 14 (4W6) Giftschaden." }
    ],
    bonusaktionen: [
      { name: "Hüpfen und Verstecken", beschreibung: "Der Nadelschütze springt bis zu seiner Bewegungsweite, dann nimmt er die Verbergen-Aktion." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Angulotl-Schleicher",
    art: "Humanoid",
    unterart: "Angulotl",
    groesse: "Klein",
    gesinnung: "Beliebige Gesinnung",
    cr: 2,
    xp: 450,
    rk: 13,
    ruestungstyp: null,
    tp: 45,
    tp_wuerfel: "10W6+10",
    bewegung: { "Gehen": "6 m", "Klettern": "6 m", "Schwimmen": "9 m" },
    attribute: { STR: 7, DEX: 17, CON: 12, INT: 10, WIS: 14, CHA: 8 },
    rettungswuerfe: { GES: 5 },
    fertigkeiten: { "Wahrnehmung": 4, "Heimlichkeit": 7, "Überleben": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 14,
    sprachen: ["Angulotl"],
    umgebung: ["Sumpf", "Dschungel", "Küste"],
    bild: "assets/images/monster/flee-mortals/angulotl-schleicher.png",
    beschreibung: [
      "Schleicher sind diebische Spezialisten der Angulotls: Mit ihren langen Zungen schnappen sie Magie-Gegenstände aus den Händen unaufmerksamer Abenteurer und ziehen sich in das Sumpfwasser zurück, um eine Konfrontation in eine Verfolgungsjagd zu verwandeln."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Schleicher kann Luft und Wasser atmen." },
      { name: "Spinnenklettern", beschreibung: "Der Schleicher kann an schwierigen Oberflächen klettern, einschließlich kopfüber an Decken, ohne eine Fertigkeitsprobe abzulegen." },
      { name: "Gifttragend", beschreibung: "Trifft eine Kreatur den Schleicher mit einem Nahkampfangriff innerhalb von 1,5 m oder berührt sie ihn, erleidet sie 2 (1W4) Giftschaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Schleicher führt einen Giftdolch-Angriff und einen Zungenraub-Angriff aus." },
      { name: "Giftdolch", beschreibung: "Nahkampf- oder Distanzangriff: +5, Reichweite 1,5 m oder 6/18 m, ein Ziel. Treffer: 5 (1W4+3) Stichschaden plus 10 (3W6) Giftschaden, und das Ziel kann bis zum Beginn seines nächsten Zuges keine Reaktionen ausführen." },
      { name: "Zungenraub", beschreibung: "Nahkampfwaffenangriff: +5, Reichweite 3 m, eine mittelgroße oder kleinere Kreatur. Treffer: Der Schleicher schnappt sich ein kleines oder winziges Objekt, das die Kreatur hält oder trägt und das der Schleicher sehen kann. Hat der Schleicher eine Hand frei, fängt er das Objekt auf; sonst landet es zu seinen Füßen." }
    ],
    bonusaktionen: [
      { name: "Hüpfen und Verstecken", beschreibung: "Der Schleicher springt bis zu seiner Bewegungsweite, dann nimmt er die Verbergen-Aktion." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Angulotl-Seher",
    art: "Humanoid",
    unterart: "Angulotl",
    groesse: "Klein",
    gesinnung: "Beliebige Gesinnung",
    cr: 6,
    xp: 2300,
    rk: 13,
    ruestungstyp: null,
    tp: 81,
    tp_wuerfel: "18W6+18",
    bewegung: { "Gehen": "6 m", "Klettern": "6 m", "Schwimmen": "9 m" },
    attribute: { STR: 7, DEX: 17, CON: 12, INT: 12, WIS: 18, CHA: 10 },
    rettungswuerfe: { GES: 6, WEI: 7 },
    fertigkeiten: { "Akrobatik": 6, "Wahrnehmung": 10, "Heimlichkeit": 6, "Überleben": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m", "Wahres Sehen 18 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Angulotl"],
    umgebung: ["Sumpf", "Dschungel", "Küste"],
    bild: "assets/images/monster/flee-mortals/angulotl-seher.png",
    beschreibung: [],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Seher kann Luft und Wasser atmen." },
      { name: "Drittes Auge", beschreibung: "Kreaturen innerhalb von 9 m können sich nicht vor dem Seher verbergen. Kreaturen, die nicht von Wahrsage-Magie anvisiert werden können, sind immun gegen diesen Effekt." },
      { name: "Gifttragend", beschreibung: "Trifft eine Kreatur den Seher mit einem Nahkampfangriff innerhalb von 1,5 m oder berührt sie ihn, erleidet sie 2 (1W4) Giftschaden." }
    ],
    aktionen: [
      { name: "Säuregriff", beschreibung: "Nahkampfzauberangriff: +7, Reichweite 1,5 m, ein Ziel. Treffer: 14 (4W6) Säureschaden. Greift das Ziel den Seher vor Beginn von dessen nächstem Zug an, erleidet das Ziel 14 (4W6) Säureschaden." },
      { name: "Strahlender Strahl", beschreibung: "Der Seher feuert zwei magische Strahlen strahlender Energie ab; jeder Strahl zielt auf eine Kreatur, die der Seher innerhalb von 36 m sehen kann. Jedes Ziel muss einen GES-Rettungswurf SG 15 bestehen oder erleidet 13 (3W8) Strahlenschaden und gibt 1 Min. dämmriges Licht in einem 3-m-Radius ab (Rettungswurf am Ende des Zuges, beendet bei Erfolg). Während das Ziel so leuchtet, haben Angriffe gegen es Vorteil; es kann nicht von Unsichtbarkeit profitieren und keine Verbergen-Aktion ausführen." },
      { name: "Giftblase (1/Tag)", beschreibung: "Der Seher erschafft eine 1,5-m-Radius-Sphäre toxischen Gases in einem freien Raum, den er innerhalb von 18 m sehen kann. Ungestört vergeht die Blase nach 1 Min. harmlos. Wird sie angegriffen, berührt, betreten oder anderweitig gestört, platzt sie und jede Kreatur innerhalb von 4,5 m muss einen KON-Rettungswurf SG 15 bestehen oder erleidet 27 (6W8) Giftschaden (halber Schaden bei Erfolg)." },
      { name: "Psychedelisches Dröhnen (1/Tag)", beschreibung: "Jeder Feind innerhalb von 18 m, der den Seher hören kann, muss einen WEI-Rettungswurf SG 15 bestehen oder erleidet 10 (3W6) Psychischer Schaden und ist 1 Min. Benommen (Rettungswurf am Ende des Zuges, beendet bei Erfolg)." }
    ],
    bonusaktionen: [
      { name: "Hüpfer", beschreibung: "Der Seher springt bis zu seiner Bewegungsweite." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Aurumvas",
    art: "Unhold",
    unterart: "Dämon (Kategorie 6)",
    groesse: "Riesig",
    gesinnung: "Chaotisch böse",
    cr: 15,
    xp: 13000,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 273,
    tp_wuerfel: "26W12+104",
    bewegung: { "Gehen": "12 m", "Fliegen": "12 m" },
    attribute: { STR: 25, DEX: 15, CON: 18, INT: 22, WIS: 20, CHA: 21 },
    rettungswuerfe: { GES: 7, WEI: 10, CHA: 10 },
    fertigkeiten: { "Arkana": 11, "Athletik": 12, "Täuschen": 10, "Geschichte": 11, "Motiv erkennen": 10, "Wahrnehmung": 10, "Überzeugung": 10 },
    schadensresistenzen: ["Nekrotisch", "Psychisch", "Hieb, Stich und Wucht von nichtmagischen Angriffen"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Erschöpfung", "Verängstigt", "Gelähmt", "Betäubt"],
    sinne: ["Dunkelsicht 36 m", "Seelensicht 9 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Alle Sprachen", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/aurumvas.png",
    beschreibung: [
      "Seelenanzahl: 5 (2W4). Aurumvas beginnt den Kampf mit einer hohen Seelenreserve, die er für mächtige Fähigkeiten ausgibt. Sinkt seine Seelenanzahl auf 0, fällt er in den Lethe-Zustand und greift mit unbeherrschter Wut die nächstgelegene Kreatur an, bis er wieder eine Seele aufnimmt.",
      "Schurken-Aktionen: Aurumvas verfügt über drei Schurken-Aktionen (MCDM-Konzept). Jede kann einmal pro Begegnung nach dem Zug eines Feindes eingesetzt werden – in beliebiger Reihenfolge, aber maximal eine pro Runde."
    ],
    besonderheiten: [
      { name: "Abyssale Resistenz (Kostet 2 Seelen)", beschreibung: "Misslingt Aurumvas ein Rettungswurf, besteht er stattdessen." },
      { name: "Lethe", beschreibung: "Wenn die Seelenanzahl von Aurumvas 0 beträgt, hat er Vorteil auf Trefferwürfe, Nachteil auf Rettungswürfe, und sein INT-Wert sinkt auf 3 (-4). Zusätzlich muss er in jedem Zug seine Bewegung nutzen, um sich so nah wie möglich an die nächstgelegene Kreatur zu bewegen, die er mit seiner Seelensicht wahrnehmen kann, und – sofern möglich – seine Aktion nutzen, um diese anzugreifen und zu töten. Aurumvas kann keinem anderen Zweck dienen, bis er seine Seelenanzahl wieder um 1 erhöht." },
      { name: "Seelenverschlinger", beschreibung: "Reduziert Aurumvas eine Kreatur (kein Konstrukt oder Untoter) auf 0 TP oder fügt einer sterbenden Kreatur Schaden zu, muss diese einen WEI-Rettungswurf SG 11 bestehen. Misslungen: Aurumvas verschlingt die Seele der Kreatur und erhöht seine Seelenanzahl um 1. Die Kreatur stirbt sofort und kann nur durch einen Wunsch-Zauber wiederbelebt werden." },
      { name: "Seelenwaffen", beschreibung: "Solange Aurumvas' Seelenanzahl 2 oder höher ist, sind seine Waffenangriffe magisch, und Verbündete innerhalb von 18 m fügen mit Waffenangriffen zusätzlich 5 (1W10) Psychischer Schaden zu." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Aurumvas führt drei Angriffe aus – Gierige Hände, Habgieriger Blitz oder eine Kombination beider." },
      { name: "Gierige Hände", beschreibung: "Nahkampfwaffenangriff: +12, Reichweite 3 m, eine Kreatur. Treffer: 14 (2W6+7) Wuchtschaden plus 10 (3W6) Psychischer Schaden. Aurumvas kann 1 Seele verbrennen, um temporäre Trefferpunkte in Höhe des verursachten psychischen Schadens zu erhalten." },
      { name: "Habgieriger Blitz", beschreibung: "Distanzzauberangriff: +11, Reichweite 36 m, ein Ziel. Treffer: 22 (5W8) Wuchtschaden (Force). Hat das Ziel Zauberplätze, kann Aurumvas 2 Seelen verbrennen, um das Ziel zu zwingen, seinen höchstgradigen verfügbaren Zauberplatz wirkungslos zu verbrauchen." }
    ],
    bonusaktionen: [
      { name: "Gier ist gut", beschreibung: "Aurumvas wählt ein Objekt innerhalb von 9 m, das er sehen kann und das mindestens 100 GM wert ist. Er teleportiert sich in einen freien Raum innerhalb von 1,5 m dieses Objekts." }
    ],
    reaktionen: [
      { name: "Seele absorbieren", beschreibung: "Stirbt ein Dämon mit einer Seelenanzahl von 1 oder höher innerhalb von 18 m, den Aurumvas sehen kann, erhält Aurumvas 1 Seele." }
    ],
    legendaere_aktionen: [
      { name: "Schurken-Aktion 1: Zeit ist Geld", beschreibung: "Aurumvas verzerrt die Zeit mit seiner übernatürlichen Gier. Jeder Verbündete, den er innerhalb von 36 m sehen kann, bewegt sich bis zu seiner Bewegungsweite. Am Ende dieser Kampfrunde ordnet Aurumvas die Initiative-Reihenfolge nach Belieben neu an." },
      { name: "Schurken-Aktion 2: Das gehört uns", beschreibung: "Aurumvas wählt bis zu drei magische Gegenstände innerhalb von 9 m, die er sehen kann, die keine Artefakte oder von legendärer Seltenheit sind und keine Einstimmung benötigen. Er teleportiert jedes Objekt zu einem Verbündeten, den er innerhalb von 9 m sehen kann – in dessen Hände oder zu dessen Füßen. Wird ein Objekt von einem Feind getragen oder mitgeführt, kann dieser einen CHA-Rettungswurf SG 19 ablegen, um die Teleportation zu verhindern." },
      { name: "Schurken-Aktion 3: Um jeden Preis", beschreibung: "Aurumvas teleportiert winzige explosive Schätze aus seinem Hort an vier verschiedene Punkte innerhalb von 36 m, die er sehen kann. Jede Kreatur innerhalb von 3 m eines oder mehrerer dieser Punkte muss einen GES-Rettungswurf SG 19 bestehen oder erleidet 33 (6W10) Wuchtschaden (Force) (halber Schaden bei Erfolg)." }
    ],
    source: "Flee Mortals"
  },
  {
    name: "Drachling",
    art: "Drache",
    unterart: null,
    groesse: "Winzig",
    gesinnung: "Typischerweise Neutral gut",
    cr: 0.5,
    xp: 100,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 14,
    tp_wuerfel: "4W4+4",
    bewegung: { "Gehen": "3 m", "Fliegen": "9 m", "Schwimmen": "6 m" },
    attribute: { STR: 5, DEX: 16, CON: 12, INT: 15, WIS: 12, CHA: 13 },
    rettungswuerfe: {},
    fertigkeiten: { "Arkana": 4, "Motiv erkennen": 3, "Wahrnehmung": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Drakonisch"],
    umgebung: ["Wald", "Gebirge"],
    bild: "assets/images/monster/flee-mortals/drachling.png",
    beschreibung: [
      "Die winzigen Vettern majestätischer Echtdrachen, Drachlinge sind weit weniger mächtig – und stolz – als ihre größeren Verwandten. Während Echtdrachen im Wesentlichen unsterblich sind, sind Drachlinge Omnivoren, die nur etwa ein Jahrhundert leben und Nahrung zum Überleben benötigen.",
      "Jeder Drachling trägt einen traditionellen drakonischen Namen, wählt jedoch zusätzlich einen Spitznamen, der Geschwistern aus demselben Gelege, engen Freunden und seinem Partner oder seinen Partnern vorbehalten ist (viele Drachlinge gehen mit einem oder mehreren Partnern lebenslange Verbindungen ein). Ein Abenteurer, der sich mit einem Drachling anfreundet, erhält möglicherweise einen eigenen Spitznamen.",
      "Obwohl Drachlinge selbst selten Zauberei betreiben, sind sie auf arkane Kräfte abgestimmt. Sie besitzen ein angeborenes Verständnis für Zauber und übernatürliche Effekte sowie ein scharfes Gespür dafür, Wahrheit von Lüge zu unterscheiden. Drachlinge meiden Täuschung unter Freunden und scheuen sich nicht, Unwahrheiten mit unterschiedlicher Diplomatie anzusprechen – verstehen aber die Notwendigkeit, Feinde zu belügen.",
      "Familienbande: Echtdrachen erkennen Drachlinge als Verwandte an und versuchen meist, sie aus Gefahren herauszuhalten – oder zumindest, sie nicht in eigenen Konflikten zu töten. Viele glauben, Drachlinge seien einst von Drachen erschaffen worden, ähnlich wie die Drachen vom Drachengott.",
      "Variante – Drachling-Vertrauter: Besonders abenteuerlustige Drachlinge dienen Zauberwirkern als Vertraute. Sie sind neugierig, gesellig und ihren Gefährten unerschütterlich treu. Bevorzugte Speisen: frisches Obst und Fisch (roh, angebraten oder geräuchert). Während der telepathischen Bindung kann der Gefährte wahrnehmen, was der Drachling wahrnimmt (innerhalb von 1,6 km), und teilt bei Körperkontakt dessen Wahres Sehen."
    ],
    besonderheiten: [
      { name: "Arkanes Gespür", beschreibung: "Der Drachling hat Vorteil auf INT(Arkana)-Proben, um Informationen über übernatürliche Effekte und Objekte zu enthüllen, die er sehen kann. Zusätzlich weiß er stets, wenn seine Emotionen erspürt, seine Gedanken gelesen oder er von Wahrsage-Zaubern anvisiert oder wahrgenommen wird." },
      { name: "Wahre Worte", beschreibung: "Wenn eine Kreatur Drakonisch spricht, hat der Drachling Vorteil auf WIS(Motiv erkennen)-Proben, um festzustellen, ob sie lügt." }
    ],
    aktionen: [
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +5, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W4+3) Hiebschaden." },
      { name: "Enthüllender Atem (Lädt sich nach kurzer oder langer Rast wieder auf)", beschreibung: "Der Drachling atmet funkelndes Licht in einem 4,5-m-Kegel aus. Jedes Objekt im Bereich wird 1 Min. von Licht umrissen, und jede Kreatur im Bereich muss einen GES-Rettungswurf SG 13 bestehen oder wird ebenfalls für die Dauer umrissen. Umrissene Kreaturen und Objekte geben in einem 1,5-m-Radius dämmriges Licht ab. Tragen umrissene Kreaturen oder Objekte Magie, erfährt der Drachling beim Hinsehen die Magieschule. Angriffswürfe gegen umrissene Ziele haben Vorteil (sofern der Angreifer das Ziel sieht), und das Ziel kann nicht von Unsichtbarkeit profitieren." },
      { name: "Wahres Sehen (Lädt sich nach langer Rast wieder auf)", beschreibung: "Für 1 Min. erhält der Drachling Wahres Sehen mit 18 m Reichweite." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Krallenfisch",
    art: "Tier",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 0.125,
    xp: 25,
    rk: 11,
    ruestungstyp: null,
    tp: 9,
    tp_wuerfel: "2W6+2",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Schwimmen": "12 m" },
    attribute: { STR: 15, DEX: 13, CON: 12, INT: 4, WIS: 10, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 2 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Blitz", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Sumpf", "Dschungel", "Küste"],
    bild: "assets/images/monster/flee-mortals/krallenfisch.png",
    beschreibung: [
      "Den Angulotls als q'ukutxal (koo OOK oot shaal) bekannt, ähnelt der Krallenfisch einer Muräne mit acht reptilienartigen Beinen. Diese kleinen Bestien gleiten durch Flussströmungen ebenso geschickt wie sie durch Gras schlängeln oder Bäume erklimmen. Angulotls trainieren sie, Flöße zu ziehen und durch Würgen oder Stromschläge zu kämpfen."
    ],
    besonderheiten: [
      { name: "Atem anhalten", beschreibung: "Der Krallenfisch kann den Atem 15 Min. anhalten." }
    ],
    aktionen: [
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Hiebschaden. Ist das Ziel eine kleine oder größere Kreatur, kann der Krallenfisch sich in deren Raum ziehen und sich an ihr festheften. Während er festgeheftet ist, bewegt er sich mit dem Ziel ohne Gelegenheitsangriffe auszulösen und kann keine Klauen-Angriffe ausführen. Eine Kreatur, die den Krallenfisch erreichen kann, kann mit einer Aktion eine STR(Athletik)- oder GES(Akrobatik)-Probe SG 12 ablegen: bei Erfolg wird der Krallenfisch losgelöst und in einen freien Raum seiner Wahl innerhalb von 1,5 m versetzt. Wird der Krallenfisch Gepackt, Kampfunfähig, Liegend oder Festgesetzt – oder verwendet 1,5 m Bewegung – löst er sich ebenfalls." },
      { name: "Elektrokution (Aufladung 6)", beschreibung: "Jede Kreatur, die den Krallenfisch berührt, erleidet 7 (2W6) Blitzschaden. Ist der Krallenfisch in Wasser getaucht, muss jede andere Kreatur innerhalb von 3 m, die dasselbe Wasser berührt, einen GES-Rettungswurf SG 11 bestehen oder erleidet denselben Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Krallenfisch-Begleiter",
    art: "Tier",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 0.125,
    xp: 25,
    rk: 13,
    ruestungstyp: "natürliche Rüstung (+PB)",
    tp: 14,
    tp_wuerfel: "1W8 (skaliert: TP = 7 + 7 × Pfleger-Stufe; Trefferwürfel = Pfleger-Stufe)",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m", "Schwimmen": "12 m" },
    attribute: { STR: 16, DEX: 13, CON: 12, INT: 4, WIS: 10, CHA: 5 },
    rettungswuerfe: { STR: 3, GES: 1 },
    fertigkeiten: { "Wahrnehmung": 0, "Heimlichkeit": 1 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Sumpf", "Dschungel", "Küste"],
    bild: "assets/images/monster/flee-mortals/krallenfisch-begleiter.png",
    beschreibung: [
      "Begleiter-Tier (Companion) – Werte skalieren mit dem Übungsbonus (PB) und der Stufe des Pflegers. RK 13+PB, TP 7 + 7×Pfleger-Stufe; Rettungswürfe und Fertigkeiten erhalten zusätzlich +PB. Bestimmte Aktionen kosten 'Wildheits-Punkte' (Ferocity) – ein RPG-spezifisches Companion-Ressourcensystem."
    ],
    besonderheiten: [
      { name: "Atem anhalten", beschreibung: "Der Krallenfisch kann den Atem 15 Min. anhalten." }
    ],
    aktionen: [
      { name: "Signaturangriff (Biss)", beschreibung: "Nahkampfwaffenangriff: +3+PB, Reichweite 1,5 m, ein Ziel. Treffer: 1W6+PB Stichschaden." },
      { name: "Stufe 1: Überwältigender Angriff (2 Wildheit)", beschreibung: "Der Krallenfisch führt einen Signaturangriff aus. Trifft er, fügt der Angriff +PB Blitzschaden zu, und das Ziel kann bis zum Beginn des nächsten Zuges des Krallenfischs keine Reaktionen ausführen." },
      { name: "Stufe 3: Schlingende Klauen (5 Wildheit)", beschreibung: "Der Krallenfisch führt einen Signaturangriff gegen eine mittelgroße oder kleinere Kreatur aus. Bei Treffer wird das Ziel Gepackt (Befreiungs-SG 10+PB). Solange das Greifen anhält, ist das Ziel Festgesetzt und der Krallenfisch kann keinen Signaturangriff gegen ein anderes Ziel ausführen." },
      { name: "Stufe 5: Blitzbombe (8 Wildheit)", beschreibung: "Jede Kreatur innerhalb von 3 m muss einen GES-Rettungswurf SG 10+PB bestehen oder erleidet PB×W8 Blitzschaden (halber Schaden bei Erfolg)." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Blitzvergeltung (Lädt sich nach kurzer oder langer Rast wieder auf)", beschreibung: "Wird der Krallenfisch oder sein Pfleger von einer Kreatur angegriffen, die der Krallenfisch innerhalb von 1,5 m sehen kann, schockiert er den Angreifer. Der Angreifer muss einen GES-Rettungswurf SG 10+PB bestehen oder erleidet PB×W6 Blitzschaden (halber Schaden bei Erfolg)." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Ruinant",
    art: "Unhold",
    unterart: "Dämon (Kategorie 2)",
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 105,
    tp_wuerfel: "14W8+42",
    bewegung: { "Gehen": "18 m" },
    attribute: { STR: 15, DEX: 18, CON: 16, INT: 14, WIS: 18, CHA: 16 },
    rettungswuerfe: { WEI: 7, CHA: 6 },
    fertigkeiten: { "Täuschen": 6, "Wahrnehmung": 7 },
    schadensresistenzen: ["Nekrotisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m", "Seelensicht 9 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Abyssal", "Gemein", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/ruinant.png",
    beschreibung: [
      "Seelenanzahl: 2 (1W4). Der Ruinant beginnt den Kampf mit einer Reserve von Seelen, die er für bestimmte Fähigkeiten ausgeben kann. Sinkt seine Seelenanzahl auf 0, fällt er in den Lethe-Zustand und greift mit unbeherrschter Wut die nächstgelegene Kreatur an, bis er wieder eine Seele aufnimmt."
    ],
    besonderheiten: [
      { name: "Lethe", beschreibung: "Wenn die Seelenanzahl des Ruinants 0 beträgt, hat er Vorteil auf Trefferwürfe, Nachteil auf Rettungswürfe, und sein INT-Wert sinkt auf 3 (-4). Zusätzlich muss er in jedem Zug seine Bewegung nutzen, um sich so nah wie möglich an die nächstgelegene Kreatur zu bewegen, die er mit seiner Seelensicht wahrnehmen kann, und – sofern möglich – seine Aktion nutzen, um diese anzugreifen und zu töten. Der Ruinant kann keinem anderen Zweck dienen, bis er seine Seelenanzahl wieder um 1 erhöht." },
      { name: "Seelenverschlinger", beschreibung: "Reduziert der Ruinant eine Kreatur (kein Konstrukt oder Untoter) auf 0 TP oder fügt einer sterbenden Kreatur Schaden zu, muss diese einen WEI-Rettungswurf SG 11 bestehen. Misslungen: Der Ruinant verschlingt die Seele der Kreatur und erhöht seine Seelenanzahl um 1. Die Kreatur stirbt sofort und kann nur durch einen Wunsch-Zauber wiederbelebt werden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Ruinant führt drei Aderlass-Klauen-Angriffe aus." },
      { name: "Aderlass-Klauen", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 1,5 m, eine Kreatur. Treffer: 7 (1W6+4) Stichschaden plus 7 (2W6) Nekrotischer Schaden, und das Ziel kann in diesem Zug keine Reaktionen ausführen." },
      { name: "Salz in die Wunden (Kostet 1 Seele)", beschreibung: "Der Ruinant wählt bis zu drei Kreaturen innerhalb von 18 m, die er sehen kann und die nicht volle Trefferpunkte haben. Jedes Ziel muss einen KON-Rettungswurf SG 15 bestehen oder erleidet 16 (3W10) Nekrotischer Schaden (halber Schaden bei Erfolg)." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Korrumpierende Heilung (Kostet 1 Seele)", beschreibung: "Erhält eine Kreatur innerhalb von 18 m vom Ruinant Trefferpunkte zurück durch eine Macht, einen Zauber oder einen ähnlichen übernatürlichen Effekt, korrumpiert der Ruinant den Effekt. Das Ziel erhält keine TP zurück, und das Ziel sowie jeder Feind des Ruinants innerhalb von 1,5 m müssen einen KON-Rettungswurf SG 15 bestehen oder erleiden Nekrotischen Schaden in Höhe der halben TP-Menge, die der Effekt zurückgegeben hätte." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Teufelsjurist",
    art: "Unhold",
    unterart: "Teufel",
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Rechtschaffen böse",
    cr: 10,
    xp: 5900,
    rk: 16,
    ruestungstyp: "Lederrüstung mit Nieten",
    tp: 156,
    tp_wuerfel: "24W8+48",
    bewegung: { "Gehen": "9 m", "Fliegen": "12 m" },
    attribute: { STR: 11, DEX: 18, CON: 15, INT: 16, WIS: 14, CHA: 19 },
    rettungswuerfe: { INT: 7, WEI: 6, CHA: 8 },
    fertigkeiten: { "Arkana": 7, "Täuschen": 8, "Wahrnehmung": 6, "Überzeugung": 8 },
    schadensresistenzen: ["Hieb, Stich und Wucht von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Gemein", "Infernal"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/teufelsjurist.png",
    beschreibung: [
      "Artillerie-Rolle: Der Teufelsjurist greift mit Feuerformeln aus der Entfernung an und versetzt seine Ziele mit eiternden Wunden in qualvolle Dauerleiden."
    ],
    besonderheiten: [
      { name: "Höllenfeuer", beschreibung: "Feuerschaden, den der Jurist verursacht, ignoriert Schadensresistenz." },
      { name: "Wahrer Name", beschreibung: "Wenn eine Kreatur, die der Jurist innerhalb von 18 m hören kann, seinen wahren Namen laut ausspricht, verliert der Jurist für 24 Stunden seine Schadensresistenzen, Schadensimmunitäten und die Teuflischer-Charme-Reaktion." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Jurist führt zwei Feuer-und-Schwefel-Angriffe aus." },
      { name: "Feuer und Schwefel", beschreibung: "Nahkampf- oder Distanzzauberangriff: +8, Reichweite 1,5 m oder 36 m, ein Ziel. Treffer: 17 (3W8+4) Feuerschaden, und das Ziel muss einen KON-Rettungswurf SG 16 bestehen oder erhält eine eiternde Wunde. Eine Kreatur erleidet zu Beginn jedes Zuges 4 (1W8) Feuerschaden pro eiternder Wunde. Erhält die Kreatur übernatürliche Heilung, verliert sie alle eiternden Wunden." },
      { name: "Inferno (Aufladung 5–6)", beschreibung: "Der Jurist führt einen Feuer-und-Schwefel-Angriff gegen jeden Feind aus, den er innerhalb von 18 m sehen kann." }
    ],
    bonusaktionen: [
      { name: "Asche zu Asche", beschreibung: "Der Jurist wählt eine Kreatur innerhalb von 36 m, die er sehen kann und die mindestens eine eiternde Wunde hat. Eine der Wunden entzündet sich und das Ziel erleidet 9 (2W8) Feuerschaden." }
    ],
    reaktionen: [
      { name: "Teuflischer Charme (1/Tag)", beschreibung: "Wird der Jurist von einer Kreatur innerhalb von 18 m mit einem Angriff, einer Macht, einem Zauber oder einem anderen übernatürlichen Effekt anvisiert, muss diese einen CHA-Rettungswurf SG 16 bestehen. Misslungen: Bezaubert vom Jurist bis Beginn ihres nächsten Zuges; der Jurist wählt ein neues Ziel innerhalb der Reichweite des auslösenden Effekts." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Teufelslegat",
    art: "Unhold",
    unterart: "Teufel",
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Rechtschaffen böse",
    cr: 8,
    xp: 3900,
    rk: 17,
    ruestungstyp: "Halbplatte",
    tp: 127,
    tp_wuerfel: "15W8+60",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 18, DEX: 15, CON: 18, INT: 11, WIS: 14, CHA: 18 },
    rettungswuerfe: { STR: 7, WEI: 5, CHA: 7 },
    fertigkeiten: { "Athletik": 7, "Täuschen": 7, "Überzeugung": 7 },
    schadensresistenzen: ["Hieb, Stich und Wucht von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemein", "Infernal"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/teufelslegat.png",
    beschreibung: [
      "Soldat-Rolle: Der Teufelslegat ist der Frontkämpfer der höllischen Hierarchie – ein bewaffneter Vollstrecker mit Höllischer Pike, der mehrere taktische Treffer-Effekte aus dem Stand austeilt."
    ],
    besonderheiten: [
      { name: "Höllische Resistenz", beschreibung: "Solange der Legat sich in der Hölle oder innerhalb von 18 m eines Teufels mit HG 9 oder höher befindet, hat er Vorteil auf Rettungswürfe gegen Mächte, Zauber und andere übernatürliche Effekte." },
      { name: "Wahrer Name", beschreibung: "Wenn eine Kreatur, die der Legat innerhalb von 18 m hören kann, seinen wahren Namen laut ausspricht, verliert der Legat für 24 Stunden seine Schadensresistenzen, Schadensimmunitäten und die Teuflischer-Charme-Reaktion." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Legat führt zwei Höllische-Pike-Angriffe aus." },
      { name: "Höllische Pike", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 3 m, ein Ziel. Treffer: 9 (1W10+4) Stichschaden plus 11 (2W10) Feuerschaden, und der Legat wählt einen der folgenden Effekte: Konzentrierter Hass – Das Ziel hat bis zum Ende des nächsten Zuges des Legats Nachteil auf Trefferwürfe gegen andere Kreaturen als den Legat. Höllenbiss – Das Ziel erleidet zusätzlich 5 (2W4) Feuerschaden. Durchspießen – Der Legat fügt einer weiteren Kreatur innerhalb von 1,5 m vom Ziel 5 (1W10) Stichschaden plus 5 (1W10) Feuerschaden zu." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Teuflischer Charme (1/Tag)", beschreibung: "Wird der Legat von einer Kreatur innerhalb von 18 m angegriffen oder mit einem Effekt anvisiert, muss diese einen CHA-Rettungswurf SG 15 bestehen oder ist bis Beginn ihres nächsten Zuges Bezaubert; der Legat wählt ein neues Ziel innerhalb der Reichweite des auslösenden Effekts." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Teufelsmagistrat",
    art: "Unhold",
    unterart: "Teufel",
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Rechtschaffen böse",
    cr: 12,
    xp: 8400,
    rk: 18,
    ruestungstyp: "Lederrüstung mit Nieten",
    tp: 182,
    tp_wuerfel: "28W8+56",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 12, DEX: 22, CON: 14, INT: 11, WIS: 16, CHA: 19 },
    rettungswuerfe: { GES: 10, WEI: 7, CHA: 8 },
    fertigkeiten: { "Akrobatik": 10, "Täuschen": 8, "Motiv erkennen": 7, "Überzeugung": 8, "Heimlichkeit": 10 },
    schadensresistenzen: ["Hieb, Stich und Wucht von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Gemein", "Infernal"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/teufelsmagistrat.png",
    beschreibung: [
      "Plänkler-Rolle: Der Teufelsmagistrat ist ein blitzschneller Attentäter mit Doppelmessern und der Fähigkeit, Opfer gegen ihre eigenen Verbündeten in Furcht zu versetzen."
    ],
    besonderheiten: [
      { name: "Wahrer Name", beschreibung: "Wenn eine Kreatur, die der Magistrat innerhalb von 18 m hören kann, seinen wahren Namen laut ausspricht, verliert der Magistrat für 24 Stunden seine Schadensresistenzen, Schadensimmunitäten und die Teuflischer-Charme-Reaktion." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Magistrat führt zwei Höllisches-Messer-Angriffe und einen Obsidian-Kris-Angriff aus." },
      { name: "Höllisches Messer", beschreibung: "Nahkampf- oder Distanzwaffenangriff: +10, Reichweite 1,5 m oder 6/18 m, ein Ziel. Treffer: 15 (2W8+6) Stichschaden plus 9 (2W8) Feuerschaden, und das Ziel ist bis zum Ende seines nächsten Zuges vor seinen eigenen Verbündeten Verängstigt." },
      { name: "Obsidian-Kris", beschreibung: "Nahkampfwaffenangriff: +10, Reichweite 1,5 m, ein Ziel. Treffer: 15 (2W8+6) Stichschaden, und ist das Ziel Verängstigt, kann es keine Reaktionen ausführen, bis der Verängstigt-Zustand endet." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Teuflischer Charme (2/Tag)", beschreibung: "Wird der Magistrat von einer Kreatur innerhalb von 18 m angegriffen oder mit einem Effekt anvisiert, muss diese einen CHA-Rettungswurf SG 16 bestehen oder ist bis Beginn ihres nächsten Zuges Bezaubert; der Magistrat wählt ein neues Ziel innerhalb der Reichweite des auslösenden Effekts." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Teufelsnotar",
    art: "Unhold",
    unterart: "Teufel",
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Rechtschaffen böse",
    cr: 1,
    xp: 200,
    rk: 15,
    ruestungstyp: "Kettenhemd",
    tp: 13,
    tp_wuerfel: "—",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 11, DEX: 15, CON: 14, INT: 12, WIS: 14, CHA: 16 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemein", "Infernal"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/teufelsnotar.png",
    beschreibung: [
      "Minion-Variante: Der Notar ist ein niederrangiger Verwaltungs-Teufel, der höhere Teufel buffet. Er fällt bei Schaden durch einen Angriff oder misslungenen RW sofort auf 0 TP."
    ],
    besonderheiten: [
      { name: "Eindringlichkeit", beschreibung: "Zu Beginn seines Zuges kann der Notar einem Nicht-Schergen-Verbündeten innerhalb von 18 m, den er sehen kann, einen infernalen Segen gewähren (keine Aktion erforderlich). Beim nächsten Trefferwurf oder Rettungswurf vor Beginn des nächsten Zuges des Notars kann der Verbündete +1 hinzufügen. Dieser Bonus erhöht sich um 1 (max. +5) für jeden weiteren Notar, der der Kreatur einen infernalen Segen gewährt." },
      { name: "Schergen", beschreibung: "Erleidet der Notar Schaden durch einen Angriff oder misslungenen Rettungswurf, sinken seine TP sofort auf 0. Erleidet er Schaden aus einer anderen Quelle, stirbt er nur, wenn der Schaden sein TP-Maximum erreicht; sonst nimmt er keinen Schaden." },
      { name: "Wahrer Name", beschreibung: "Wenn eine Kreatur, die der Notar innerhalb von 18 m hören kann, seinen wahren Namen laut ausspricht, verliert der Notar für 24 Stunden seine Schadensimmunitäten und das Eindringlichkeits-Merkmal." }
    ],
    aktionen: [
      { name: "Schwefel (Gruppenangriff)", beschreibung: "Nahkampf- oder Distanzzauberangriff: +6, Reichweite 1,5 m oder 9 m, ein Ziel. Treffer: 4 Feuerschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Teufelsrichter",
    art: "Unhold",
    unterart: "Teufel",
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Rechtschaffen böse",
    cr: 14,
    xp: 11500,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 204,
    tp_wuerfel: "24W8+96",
    bewegung: { "Gehen": "9 m", "Fliegen": "12 m" },
    attribute: { STR: 12, DEX: 16, CON: 18, INT: 16, WIS: 14, CHA: 20 },
    rettungswuerfe: { KON: 9, WEI: 7, CHA: 10 },
    fertigkeiten: { "Täuschen": 10, "Motiv erkennen": 7, "Wahrnehmung": 7, "Überzeugung": 10, "Religion": 8 },
    schadensresistenzen: ["Hieb, Stich und Wucht von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Gemein", "Infernal"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/teufelsrichter.png",
    beschreibung: [
      "Controller-Rolle: Der Teufelsrichter zwingt seinen Feinden infernale Pakte und Verfügungen auf, schwächt sie systematisch und lenkt Angriffe um."
    ],
    besonderheiten: [
      { name: "Wahrer Name", beschreibung: "Wenn eine Kreatur, die der Teufelsrichter innerhalb von 18 m hören kann, seinen wahren Namen laut ausspricht, verliert der Teufelsrichter für 24 Stunden seine Schadensresistenzen, Schadensimmunitäten und die Teuflischer-Charme-Reaktion." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Teufelsrichter führt zwei Höllische-Verfügung-Angriffe aus und setzt Untersagung des Richters ein, sofern verfügbar." },
      { name: "Höllische Verfügung", beschreibung: "Nahkampf- oder Distanzzauberangriff: +10, Reichweite 1,5 m oder 36 m, ein Ziel. Treffer: 27 (5W8+5) Feuerschaden, und das Ziel muss einen WEI-Rettungswurf SG 18 bestehen. Misslungen: Der Teufelsrichter wählt, ob das Ziel bis zum Ende seines nächsten Zuges Bezaubert von ihm oder Verängstigt vor ihm wird." },
      { name: "Untersagung des Richters (Aufladung 5–6)", beschreibung: "Der Teufelsrichter setzt einer Kreatur innerhalb von 36 m, die er sehen kann, ein infernales Siegel auf. Das Ziel muss einen CHA-Rettungswurf SG 18 bestehen oder ist Untersagt, bis der Teufelsrichter stirbt. Während der Untersagung ist die Bewegungsweite halbiert, das Ziel kann keine Reaktionen ausführen und keine Trefferpunkte zurückerlangen. Eine Macht 'Leiden heilen', die Zauber 'Geringere Wiederherstellung' oder 'Fluch entfernen' oder ein ähnlicher übernatürlicher Effekt beenden die Wirkung vorzeitig." },
      { name: "Schlechtes Geschäft (1/Tag)", beschreibung: "Drei Kreaturen innerhalb von 18 m, die der Teufelsrichter sehen kann, müssen einen CHA-Rettungswurf SG 18 bestehen. Misslungen: Das Ziel muss wählen, ob es -5 auf RK oder -5 auf Fertigkeitsproben und Trefferwürfe erhält. Die Strafe hält 10 Min. an (Rettungswurf am Ende des Zuges, beendet bei Erfolg)." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Teuflischer Charme (2/Tag)", beschreibung: "Wird der Teufelsrichter von einer Kreatur innerhalb von 18 m, die er sehen kann, mit einem Angriff, einer Macht, einem Zauber oder einem anderen übernatürlichen Effekt anvisiert, muss diese Kreatur einen CHA-Rettungswurf SG 18 bestehen. Misslungen: Die Kreatur ist bis zum Beginn ihres nächsten Zuges Bezaubert vom Teufelsrichter, und dieser wählt ein neues Ziel innerhalb der Reichweite des auslösenden Effekts." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Tormenauk",
    art: "Unhold",
    unterart: "Dämon (Kategorie 3)",
    groesse: "Groß",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 7,
    xp: 2900,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 136,
    tp_wuerfel: "13W10+65",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 20, DEX: 10, CON: 20, INT: 15, WIS: 15, CHA: 18 },
    rettungswuerfe: { KON: 8, WEI: 5, CHA: 7 },
    fertigkeiten: { "Einschüchtern": 7, "Wahrnehmung": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m", "Seelensicht 9 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Abyssal", "Gemein", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/tormenauk.png",
    beschreibung: [
      "Seelenanzahl: 2 (1W4). Der Tormenauk beginnt den Kampf mit einer Reserve von Seelen, die er für bestimmte Fähigkeiten ausgeben kann. Sinkt seine Seelenanzahl auf 0, fällt er in den Lethe-Zustand und greift mit unbeherrschter Wut die nächstgelegene Kreatur an, bis er wieder eine Seele aufnimmt."
    ],
    besonderheiten: [
      { name: "Lethe", beschreibung: "Wenn die Seelenanzahl des Tormenauk 0 beträgt, hat er Vorteil auf Trefferwürfe, Nachteil auf Rettungswürfe, und sein INT-Wert sinkt auf 3 (-4). Zusätzlich muss er in jedem Zug seine Bewegung nutzen, um sich so nah wie möglich an die nächstgelegene Kreatur zu bewegen, die er mit seiner Seelensicht wahrnehmen kann, und – sofern möglich – seine Aktion nutzen, um diese anzugreifen und zu töten. Der Tormenauk kann keinem anderen Zweck dienen, bis er seine Seelenanzahl wieder um 1 erhöht." },
      { name: "Seelenverschlinger", beschreibung: "Reduziert der Tormenauk eine Kreatur (kein Konstrukt oder Untoter) auf 0 TP oder fügt einer sterbenden Kreatur Schaden zu, muss diese einen WEI-Rettungswurf SG 11 bestehen. Misslungen: Der Tormenauk verschlingt die Seele der Kreatur und erhöht seine Seelenanzahl um 1. Die Kreatur stirbt sofort und kann nur durch einen Wunsch-Zauber wiederbelebt werden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Tormenauk führt zwei Schlag-Angriffe und einen Vielmäuler-Angriff aus." },
      { name: "Schlag", beschreibung: "Nahkampfwaffenangriff: +8, Reichweite 1,5 m, ein Ziel. Treffer: 14 (2W8+5) Wuchtschaden. Ist das Ziel Groß oder kleiner, wird es Gepackt (Befreiungs-SG 15) und Festgesetzt, solange das Greifen anhält. Der Tormenauk kann bis zu zwei Ziele gleichzeitig packen." },
      { name: "Vielmäuler", beschreibung: "Nahkampfwaffenangriff: +8, Reichweite 1,5 m, ein vom Tormenauk gepacktes Ziel. Treffer: 21 (3W10+5) Stichschaden." },
      { name: "Qualgeheul (Kostet 1 Seele)", beschreibung: "Der Tormenauk kreischt und überträgt den lebenslangen Schmerz einer verschlungenen Seele. Jede Kreatur innerhalb von 9 m, die ihn hören kann, muss einen WEI-Rettungswurf SG 15 bestehen oder erleidet 35 (10W6) Psychischer Schaden (halber Schaden bei Erfolg). Kreaturen, die den Besitzer der verbrannten Seele kannten, haben Nachteil auf den Rettungswurf." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Qual teilen (Kostet 1 Seele)", beschreibung: "Erleidet der Tormenauk Schaden, wählt er eine Kreatur innerhalb von 9 m, die er sehen kann, um den Schmerz zu teilen. Das Ziel muss einen WEI-Rettungswurf SG 15 bestehen oder erleidet Psychischen Schaden in Höhe des auslösenden Schadens (halber Schaden bei Erfolg)." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Wobalas",
    art: "Unhold",
    unterart: "Dämon (Kategorie 4)",
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 10,
    xp: 5900,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 156,
    tp_wuerfel: "24W8+48",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 14, DEX: 22, CON: 14, INT: 16, WIS: 18, CHA: 18 },
    rettungswuerfe: { GES: 10, WEI: 8, CHA: 8 },
    fertigkeiten: { "Täuschen": 8, "Einschüchtern": 8, "Wahrnehmung": 8 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m", "Seelensicht 9 m"],
    passiveWahrnehmung: 18,
    sprachen: ["Abyssal", "Gemein", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/wobalas.png",
    beschreibung: [
      "Seelenanzahl: 2 (1W4). Der Wobalas beginnt den Kampf mit einer Reserve von Seelen, die er für bestimmte Fähigkeiten ausgeben kann. Sinkt seine Seelenanzahl auf 0, fällt er in den Lethe-Zustand und greift mit unbeherrschter Wut die nächstgelegene Kreatur an, bis er wieder eine Seele aufnimmt."
    ],
    besonderheiten: [
      { name: "Lethe", beschreibung: "Wenn die Seelenanzahl des Wobalas 0 beträgt, hat er Vorteil auf Trefferwürfe, Nachteil auf Rettungswürfe, und sein INT-Wert sinkt auf 3 (-4). Zusätzlich muss er in jedem Zug seine Bewegung nutzen, um sich so nah wie möglich an die nächstgelegene Kreatur zu bewegen, die er mit seiner Seelensicht wahrnehmen kann, und – sofern möglich – seine Aktion nutzen, um diese anzugreifen und zu töten. Der Wobalas kann keinem anderen Zweck dienen, bis er seine Seelenanzahl wieder um 1 erhöht." },
      { name: "Seelenverschlinger", beschreibung: "Reduziert der Wobalas eine Kreatur (kein Konstrukt oder Untoter) auf 0 TP oder fügt einer sterbenden Kreatur Schaden zu, muss diese einen WEI-Rettungswurf SG 11 bestehen. Misslungen: Der Wobalas verschlingt die Seele der Kreatur und erhöht seine Seelenanzahl um 1. Die Kreatur stirbt sofort und kann nur durch einen Wunsch-Zauber wiederbelebt werden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Wobalas führt drei Verzweiflungsblitz-Angriffe aus." },
      { name: "Verzweiflungsblitz", beschreibung: "Distanzwaffenangriff: +10, Reichweite 45/180 m, eine Kreatur. Treffer: 16 (3W6+6) Stichschaden plus 10 (3W6) Psychischer Schaden. Der Wobalas kann 1 Seele verbrennen, um das Ziel für 1 Min. vor ihm zu Verängstigen. Ist das Ziel immun gegen Verängstigt, erhält der Wobalas die verbrannte Seele zurück." },
      { name: "Verbannungsberührung", beschreibung: "Nahkampfzauberangriff: +8, Reichweite 1,5 m, eine Kreatur. Treffer: 22 (4W10) Psychischer Schaden, und das Ziel wird bis zu 9 m in einen freien Raum teleportiert, den der Wobalas sehen kann." }
    ],
    bonusaktionen: [
      { name: "Flieh, Sterblicher (Kostet 1 Seele)", beschreibung: "Der Wobalas wählt eine Kreatur innerhalb von 18 m, die er sehen kann. Das Ziel muss einen CHA-Rettungswurf SG 16 bestehen oder nutzt seine Reaktion (falls verfügbar), um sich auf dem direktesten Weg mit voller Bewegung vom Wobalas zu entfernen – ohne Rücksicht auf die eigene Sicherheit. Kreaturen, die nicht verängstigt werden können, bestehen den Rettungswurf automatisch." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Yserthrax",
    art: "Drache",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Neutral böse",
    cr: 20,
    xp: 25000,
    rk: 19, ruestungstyp: "natürliche Rüstung",
    tp: 420, tp_wuerfel: "24W20+168",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 28, DEX: 10, CON: 25, INT: 22, WIS: 17, CHA: 18 },
    rettungswuerfe: { KON: 14, WEI: 10, CHA: 11 },
    fertigkeiten: { "Arkane Kunde": 13, "Täuschen": 11, "Motiv erkennen": 17, "Wahrnehmung": 17, "Überzeugen": 11, "Heimlichkeit": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift", "Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Benommen", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet", "Betäubt"],
    sinne: ["Blindsicht 36 m", "Wahres Sehen 18 m"],
    passiveWahrnehmung: 27,
    sprachen: ["Gemein", "Tiefensprache", "Drakonisch"],
    umgebung: ["Andere Ebenen", "Ozean", "Höhle"],
    bild: "assets/images/monster/flee-mortals/yserthrax.png",
    beschreibung: [
      "In den tiefsten und dunkelsten Bereichen der Zeitlandschaft existieren Wesen, die nicht sein sollten, berührt von einer Verderbnis jenseits aller Welten. Eines dieser Geschöpfe ist Yserthrax (EE-sur-thracks), eine drakonische Abscheulichkeit, deren Schwingen von Hunderten smaragdgrüner Augen gesäumt sind.",
      "Yserthrax wurde einst als Giftdrache geboren und für ihre Meisterschaft in Zauberkunst und okkultem Wissen verehrt. Nun jedoch wurde sie durch die Machenschaften älterer Übel verwandelt: Ihr Körper ist aufgedunsen und mit seltsamen Auswüchsen bedeckt.",
      "Die Vieläugige verdankt ihren Namen nicht nur ihrer augenübersäten Gestalt. Sie gilt weithin als eine der gerissensten und hinterhältigsten unter ihresgleichen und wird für ihre arkanen Talente, Spionagekünste und Intrigen aufgesucht. Wenig geschieht unter den Drachen, das Yserthrax nicht sieht; sie kennt die Begierden jedes großen Wyrms und könnte sie dazu manipulieren, den Willen der älteren Übel zu vollstrecken, die sie binden."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Yserthrax kann Luft und Wasser atmen." },
      { name: "Verderbnis", beschreibung: "Giftschaden, den Yserthrax verursacht, ignoriert Schadensresistenz und behandelt Schadensimmunität als Schadensresistenz. Wann immer Yserthrax einer Kreatur Giftschaden zufügt, die kein Konstrukt oder Untoter ist, muss diese Kreatur einen KON-Rettungswurf SG 19 bestehen oder wird verdorben (Rettungswurf am Ende ihres Zuges erlaubt). Die Verderbnis hält an, bis sie durch einen Krankheit-heilen-Effekt, einen Geringere Wiederherstellung-Zauber oder eine vergleichbare übernatürliche Wirkung kuriert wird. Während eine Kreatur verdorben ist, erleidet sie zu Beginn jedes ihrer Züge 14 (4W6) Psychischen Schaden, da realitätsverzerrende Anomalien ihren Geist und Körper zermürben. Stirbt eine verdorbene Kreatur, zerfließt ihr Körper zu einer grausigen Pfütze und wird zu einem Brabbler unter Yserthrax' Kontrolle." },
      { name: "Schwindende Resistenz (3/Tag)", beschreibung: "Wenn Yserthrax einen Rettungswurf nicht besteht, kann sie 16 (3W10) Nekrotischen Schaden erleiden, um den Rettungswurf stattdessen zu bestehen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Yserthrax führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +16, Reichweite 4,5 m, ein Ziel. Treffer: 20 (2W10+9) Stichschaden plus 11 (2W10) Giftschaden." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +16, Reichweite 3 m, ein Ziel. Treffer: 16 (2W6+9) Hiebschaden, und Yserthrax kann das Ziel bis zu 4,5 m horizontal verschieben." },
      { name: "Verderbender Atem (Aufladung 5-6)", beschreibung: "Yserthrax stößt Gift in einem 27-m-Kegel aus. Jede Kreatur im Bereich muss einen KON-Rettungswurf SG 22 ablegen. Misslungen: 56 (16W6) Giftschaden und das Ziel ist bis zum Ende seines nächsten Zuges Vergiftet. Bei Erfolg: halber Schaden und nicht Vergiftet." }
    ],
    bonusaktionen: [
      { name: "Ulzerieren", beschreibung: "Yserthrax verstärkt magisch das Leiden einer Kreatur innerhalb von 18 m, die sie sehen kann und die durch ihre Verderbnis-Eigenschaft verdorben ist. Das Ziel muss einen KON-Rettungswurf SG 19 bestehen oder ist bis zum Ende seines nächsten Zuges Benommen." }
    ],
    reaktionen: [
      { name: "Eldritsche Disruption", beschreibung: "Wenn eine Kreatur, die Yserthrax sehen kann, innerhalb von 18 m sie mit einem Angriff trifft oder einen Rettungswurf gegen sie besteht, beschwört Yserthrax eine realitätsverzerrende Anomalie um diese herum. Die Kreatur muss wählen: entweder 10 (3W6) Psychischen Schaden erleiden oder den Angriffs- bzw. Rettungswurf neu würfeln und das neue Ergebnis verwenden." }
    ],
    legendaere_aktionen: [
      { name: "Schurkenaktionen", beschreibung: "Yserthrax verfügt über drei Schurkenaktionen. Sie kann jede Aktion einmal pro Begegnung nach dem Zug eines Gegners ausführen. Sie kann diese Aktionen in beliebiger Reihenfolge nutzen, jedoch nur eine pro Runde." },
      { name: "Aktion 1: Monolithen beschwören", beschreibung: "Yserthrax beschwört drei Monolithen aus jenseitigem grünem Kristall, die aus dem Boden wachsen, zentriert auf drei sichtbaren Punkten innerhalb von 150 m. Jeder Monolith ist ein Zylinder mit 3 m Radius und 18 m Höhe, RK 19, 100 TP und Immunität gegen Gift- und Psychischen Schaden. Die Monolithen blockieren Yserthrax' Sicht nicht. Jede Kreatur innerhalb von 3 m eines Monolithen (außer Yserthrax) ist verwundbar gegen Psychischen Schaden. Wird ein Monolith zerstört, muss jede Kreatur innerhalb von 9 m einen WEI-Rettungswurf SG 19 ablegen und erleidet 21 (6W6) Psychischen Schaden (halber Schaden bei Erfolg)." },
      { name: "Aktion 2: Räumliche Verzerrung", beschreibung: "Yserthrax schlägt erratisch mit ihren Flügeln und entfesselt unheilvolle Energie, die den Raum um sie herum verzerrt. Jede Kreatur innerhalb von 18 m muss einen CHA-Rettungswurf SG 19 bestehen oder wird bis zu 36 m in einen freien Raum teleportiert, den Yserthrax sehen kann." },
      { name: "Aktion 3: Uralter Schrei", beschreibung: "Yserthrax stößt einen eldritschen Schrei aus, der den Geist jedes Feindes durchbohrt, den sie innerhalb von 36 m sehen kann. Jedes Ziel muss einen WEI-Rettungswurf SG 19 ablegen und erleidet 77 (14W10) Psychischen Schaden (halber Schaden bei Erfolg)." }
    ],
    source: "Flee Mortals"
  }
];
