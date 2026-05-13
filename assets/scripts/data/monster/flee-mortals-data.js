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
    name: "Abgrund-Hyäne",
    art: "Unhold",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 1,
    xp: 40,
    rk: 11,
    ruestungstyp: null,
    tp: 8,
    tp_wuerfel: "1W8+4",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 14, DEX: 13, CON: 12, INT: 5, WIS: 12, CHA: 7 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 11,
    sprachen: ["versteht Abyssal, kann es jedoch nicht sprechen"],
    umgebung: ["Wüste", "Grasland", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/abgrund-hyaene.png",
    beschreibung: [
      "Stärker und schlauer als ihre tierischen Pendants kriechen Abgrund-Hyänen aus der Abyssalen Ödnis, um sich an den Kadavern zu laben, die Gnolle in ihrem Gefolge hinterlassen. Werden Verstärkungen benötigt, können Gnoll-Zauberwirker mit Magie Abgrund-Hyänen in Gnolle verwandeln."
    ],
    besonderheiten: [
      { name: "Todesschnapper", beschreibung: "Wenn die Hyäne auf 0 TP reduziert wird, kann sie 1 Stichschaden an einer Kreatur innerhalb von 1,5 m verursachen (keine Aktion nötig), sofern sie nicht Kampfunfähig war, bevor sie auf 0 TP fiel." },
      { name: "Scherge", beschreibung: "Erleidet die Hyäne Schaden durch einen Angriff oder einen misslungenen Rettungswurf, sinken ihre TP sofort auf 0. Erleidet sie Schaden durch einen anderen Effekt, stirbt sie, wenn der Schaden ihrem TP-Maximum entspricht oder es überschreitet; andernfalls erleidet sie keinen Schaden." }
    ],
    aktionen: [
      { name: "Biss (Gruppenangriff)", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 1 Stichschaden. Ist das Ziel eine Kreatur und sind zwei oder mehr Hyänen am Angriff beteiligt, muss das Ziel einen STR-Rettungswurf bestehen oder wird zu Boden geworfen. Der SG entspricht 10 plus der Anzahl der am Angriff beteiligten Hyänen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
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
    name: "Atæshia",
    art: "Elementar",
    unterart: "Luft, Erde, Feuer",
    groesse: "Mittelgroß",
    gesinnung: "Neutral",
    cr: 23,
    xp: 50000,
    rk: 20, ruestungstyp: "natürliche Rüstung",
    tp: 332, tp_wuerfel: "35W8+175",
    bewegung: { "Gehen": "15 m", "Fliegen": "9 m (schwebend)" },
    attribute: { STR: 19, DEX: 21, CON: 21, INT: 22, WIS: 23, CHA: 23 },
    rettungswuerfe: { KON: 12, WEI: 13 },
    fertigkeiten: { "Arkane Kunde": 13, "Täuschen": 13, "Geschichte": 13, "Naturkunde": 13, "Wahrnehmung": 13, "Überzeugen": 13, "Religion": 13 },
    schadensresistenzen: ["Kälte", "Nekrotisch", "Gift", "Psychisch", "Gleißend"],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Vergiftet"],
    sinne: ["Blindsicht 36 m"],
    passiveWahrnehmung: 23,
    sprachen: ["Alle Sprachen"],
    umgebung: ["Gebirge", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/ataeshia.png",
    beschreibung: [
      "Atæshia (ah-TAY-shee-ah) gehörte zu den ersten Elementaren, welche die Profanwelt bewohnten, und war die Erste, die gegen die Sterblichen zurückschlug, die versuchten, die wilde Welt zu zähmen. Ihre Armee kämpfte jahrzehntelang gegen Humanoide, doch die Zahl ihrer Feinde war zu groß und ihre Verbündeten zu wenige. Als sich das Blatt des Krieges gegen die Elementare wendete, erkannte Atæshia, dass es besser wäre, wenn die Elementare überlebten, ihre Kräfte wieder aufbauten und auf einen anderen Tag warteten, um zurückzuholen, was einst ihres war.",
      "Atæshia betrachtet alle Elementare als Teil ihres Ishkrar, und viele würden im Gegenzug unter ihrem Banner kämpfen. Sie hat ihren großen Krieg nicht vergessen und sieht in den Sterblichen und den Göttern, die sie erschufen, die größte Bedrohung für die Zeitlandschaft.",
      "Geschütztes Reich: Atæshia verbringt den Großteil ihrer Zeit auf dem Tempest, einem großen Berg, dessen obere Hälfte sich in einem gewaltigen Sturm verbirgt. Mächtige Elementare am Gipfel manifestieren Blitze und Hagel von der Größe von Äpfeln, um das Reich der Aschenkönigin zu verbergen. Wer den tückischen Aufstieg wagt, findet im Zentrum des ewigen Sturms ein sonniges Bergparadies. Hier formen Elementare das Land mit ruhigen Teichen, brennenden Lava-Geysiren, Eisskulpturen, üppigen Gärten und allem anderen, was sie manifestieren wollen. Die einzige Bedingung, im Tempest zu verweilen, ist an die Sache der Aschenkönigin zu glauben und ihren Befehlen zu folgen, wenn man dazu aufgerufen wird. Auch Nicht-Elementare dürfen bleiben, sofern sie Atæshias Regeln beachten.",
      "Jährliche Reise: Einmal im Jahr reist Atæshia vom Tempest zu ihrem Reliquiar, einem Turm, der in den Ruinen ihres gescheiterten Krieges errichtet wurde. Hier nimmt sie sich Zeit, der Verstorbenen zu gedenken und sie zu ehren, indem sie wochenlange Mahnwachen hält, umgeben von elementaren Wächtern."
    ],
    besonderheiten: [
      { name: "Opfer der Erinnerung (3/Tag)", beschreibung: "Wenn Atæshia einen Rettungswurf nicht besteht, kann eine willige Kreatur innerhalb von 18 m, die sie sehen kann, ihr Leben hingeben, um sie zu schützen. Diese Kreatur stirbt sofort, und Atæshia besteht den Rettungswurf." },
      { name: "Aus dem Krieg wiedergeboren", beschreibung: "Wenn Atæshia auf 0 TP reduziert wird, zerfällt sie in einem feierlichen Wind zu Asche. In den nächsten 100 Jahren gilt: Stirbt ein Himmlischer, ein Elementar oder ein Humanoid mit Herausforderungsgrad oder Stufe 5 oder höher innerhalb von 18 m von dem Ort, an dem Atæshia starb, kehrt Atæshia an diesem Ort mit 25 TP ins Leben zurück." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Atæshia führt drei Fahle-Flamme-Angriffe aus. Sie kann einen Angriff durch einen Einsatz von Moment des Verlusts ersetzen, falls verfügbar." },
      { name: "Fahle Flamme", beschreibung: "Nahkampf- oder Distanzzauberangriff: +13, Reichweite 1,5 m oder 36 m, ein Ziel. Treffer: 20 (4W6+6) Gleißender Schaden plus 14 (4W6) Feuerschaden. Reduziert dieser Angriff eine Kreatur auf 0 TP, stirbt sie und ihre gesamten Überreste verbrennen zu nichts." },
      { name: "Moment des Verlusts (Aufladung 6)", beschreibung: "Atæshia verwandelt eine Kreatur, die sie innerhalb von 18 m sehen kann, in die Form einer lebenden Aschewolke. Während sie in Asche verwandelt ist, ist das Ziel immun gegen jeglichen Schaden, kann anderen Kreaturen keine Deckung gewähren und keine Reaktionen ausführen. Zu Beginn des nächsten Zuges des Ziels formt es sich zurück und muss einen KON-Rettungswurf SG 21 ablegen. Misslungen: Das Ziel wird auf 1 TP reduziert. Bei Erfolg: 44 (8W10) Nekrotischer Schaden. Dieser Schaden kann die TP des Ziels nicht unter 1 reduzieren." },
      { name: "Aus Tod, Leben (1/Tag)", beschreibung: "Atæshia setzt ihre Schurkenaktion Entflammtes Opfer ein, selbst wenn diese nicht verfügbar ist, um sich selbst zu opfern." }
    ],
    bonusaktionen: [
      { name: "Flackernde Flamme", beschreibung: "Atæshia formt sich zu einer Aschewolke, teleportiert sich in einen freien Raum innerhalb von 18 m, den sie sehen kann, und formt sich in ihre wahre Gestalt zurück. Jede Kreatur innerhalb von 1,5 m des Raumes, den sie verlassen hat, muss einen GES-Rettungswurf SG 21 bestehen oder erleidet 5 (1W10) Feuerschaden." }
    ],
    reaktionen: [
      { name: "Anrufung der Asche", beschreibung: "Wenn ein anderer Elementar, den Atæshia innerhalb von 18 m sehen kann, von einem Angriff getroffen wird, wird der Schaden des Angriffs halbiert und das Ziel kann sich bis zur halben Bewegungsweite bewegen, ohne Gelegenheitsangriffe auszulösen." }
    ],
    legendaere_aktionen: [
      { name: "Schurkenaktionen", beschreibung: "Atæshia verfügt über drei Schurkenaktionen. Sie kann jede Aktion einmal pro Begegnung nach dem Zug eines Gegners ausführen. Sie kann diese Aktionen in beliebiger Reihenfolge nutzen, jedoch nur eine pro Runde." },
      { name: "Aktion 1: Welle der Trauer", beschreibung: "Atæshia entfesselt einen Impuls überwältigender Traurigkeit. Jeder Feind innerhalb von 36 m, den Atæshia sehen kann, muss einen WEI-Rettungswurf SG 21 ablegen. Misslungen: Die Kreatur ist 1 Min. Benommen (Rettungswurf am Ende des Zuges erlaubt). Bei Erfolg: Die Kreatur kann bis zum Ende ihres nächsten Zuges keine Reaktionen ausführen." },
      { name: "Aktion 2: Entflammtes Opfer", beschreibung: "Atæshia wählt eine willige Kreatur innerhalb von 18 m, die stirbt, damit ihre Verbündeten leben können. Das Ziel stirbt, und bis zu zwei andere tote Kreaturen innerhalb von 18 m vom Ziel kehren ins Leben zurück. Diese wiedererweckten Kreaturen erhalten so viele Trefferpunkte zurück, wie die geopferte Kreatur hatte, bis zum TP-Maximum der wiedererweckten Kreatur." },
      { name: "Aktion 3: Finale des Lebens", beschreibung: "Atæshia entfesselt einen Strom urzeitlichen Schmerzes, um das Mark der Schöpfung um sich herum aufzulösen. Jeder Feind innerhalb von 18 m muss einen CHA-Rettungswurf SG 21 ablegen. Misslungen: 55 (10W10) Nekrotischer Schaden und das Ziel kann bis zum Ende von Atæshias nächstem Zug keine TP zurückerhalten. Bei Erfolg: halber Schaden, aber keine weiteren Effekte. Ob Erfolg oder Misserfolg: Reduziert dieser Schaden eine Kreatur auf 0 TP, scheitert sie sofort einen Todesrettungswurf." }
    ],
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
    name: "Blutkraft",
    art: "Elementar",
    unterart: "Erde, Feuer, Wasser",
    groesse: "Groß",
    gesinnung: "Beliebige Gesinnung",
    cr: 19,
    xp: 22000,
    rk: 21, ruestungstyp: "natürliche Rüstung",
    tp: 230, tp_wuerfel: "20W10+120",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 24, DEX: 20, CON: 22, INT: 19, WIS: 18, CHA: 20 },
    rettungswuerfe: { KON: 12, WEI: 10, CHA: 11 },
    fertigkeiten: { "Einschüchtern": 11, "Medizin": 10, "Überzeugen": 11 },
    schadensresistenzen: ["Feuer", "Nekrotisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpfung", "Verängstigt"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 14,
    sprachen: ["Gemein", "Zwergisch", "Elfisch", "Riesisch", "Urzeitlich"],
    umgebung: ["Andere Ebenen", "Stadt"],
    bild: "assets/images/monster/flee-mortals/blutkraft.png",
    beschreibung: [
      "Blutkräfte, auch Blutfürsten genannt, sind Kriegsherren und Diplomaten, die gleichermaßen die Geburt sterblichen Lebens und den Moment seines Endes verkörpern. Man könnte sie für massive Humanoide halten, die ganz in schwarz-rot gezackte Rüstung gehüllt sind, doch in Wahrheit ist ihre Rüstung geschwärztes, knorriges Fleisch, durchzogen von Adern aus kochendem Rot.",
      "Sterbliche Monarchen täten gut daran, achtsam zu sein, wenn sich der Scharlachlanze einer Blutkraft nähert. Diese Elementare verstehen Sterbliche tiefgreifend und treten ihnen niemals zu müßigem Zweck entgegen."
    ],
    besonderheiten: [
      { name: "Eingeweide-Sicht", beschreibung: "Die Blutkraft kann jede Kreatur innerhalb von 36 m sehen, die kein Konstrukt oder Untoter ist. Diese Sicht ignoriert Effekte, die die Sicht verschleiern." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Blutkraft führt drei Scharlachlanze-Angriffe aus. Sie kann einen Angriff durch einen Zerreißen-von-Innen-Angriff ersetzen." },
      { name: "Scharlachlanze", beschreibung: "Nahkampf- oder Distanzwaffenangriff: +13, Reichweite 4,5 m oder 9/18 m, ein Ziel. Treffer: 18 (2W10+7) Stichschaden. Ist das Ziel eine Kreatur, erhält die Blutkraft 5 Trefferpunkte zurück." },
      { name: "Zerreißen von Innen", beschreibung: "Nahkampfzauberangriff: +12, Reichweite 1,5 m, eine Kreatur. Treffer: 13 (2W6+6) Hiebschaden plus 26 (4W12) Nekrotischer Schaden, und das Ziel verbraucht 1 Trefferwürfel ohne Wirkung und kann bis zum Beginn seines nächsten Zuges keine Reaktionen ausführen. Verfehlt: 13 (2W12) Nekrotischer Schaden." }
    ],
    bonusaktionen: [
      { name: "Anrufung des Blutes", beschreibung: "Die Blutkraft verleiht sich selbst oder einem anderen Elementar, den sie innerhalb von 9 m sehen kann, die Kraft des Blutes und gewährt einen der folgenden Effekte nach Wahl dieses Elementars: Kochendes Blut – Der Elementar bringt das Blut einer Kreatur innerhalb von 1,5 m zum Kochen, die kein Konstrukt oder Untoter ist. Das Ziel muss einen KON-Rettungswurf SG 19 ablegen. Misslungen: Das Ziel muss wählen, entweder 27 (5W10) Feuerschaden zu erleiden oder einen Angriff mit einer Waffe mit Schadenswürfel 1W4 oder größer gegen eine Kreatur nach Wahl des Elementars auszuführen. Trifft der Angriff, fügt er zusätzliche 11 (2W10) Feuerschaden zu. Essenzdieb – Der Elementar stiehlt die Essenz zweier Kreaturen, die er innerhalb von 9 m sehen kann. Jedes Ziel muss einen KON-Rettungswurf SG 19 ablegen und erleidet 19 (3W12) Nekrotischen Schaden (halber Schaden bei Erfolg). Der Elementar kann sich anschließend in einen freien Raum innerhalb von 1,5 m eines der Ziele teleportieren, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Brabbler",
    art: "Aberration",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Chaotisch neutral",
    cr: 2,
    xp: 450,
    rk: 11, ruestungstyp: "natürliche Rüstung",
    tp: 60, tp_wuerfel: "8W8+24",
    bewegung: { "Gehen": "3 m", "Fliegen": "3 m (schwebend)", "Schwimmen": "3 m" },
    attribute: { STR: 12, DEX: 12, CON: 16, INT: 7, WIS: 10, CHA: 5 },
    rettungswuerfe: { KON: 5 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Liegend"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["spricht alle Sprachen, versteht jedoch keine"],
    umgebung: ["Unterirdisch", "Höhle", "Sumpf", "Ruinen", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/brabbler.png",
    beschreibung: [
      "Brabbler sind das fleischgewordene Chaos. Wenn diese Bewohner der sich ewig wandelnden Ebene Primordius reisen, nehmen sie ein Stück Heimat mit. Die Realität beugt sich ihrem Willen: Der Boden brodelt unter ihnen, die Schwerkraft ordnet sich um sie herum neu, und Abenteurer fliehen entweder vor ihnen oder werden ins Chaos gesogen.",
      "Zermürbende Taxonomie: Brabbler wuseln als ein Wirrwarr ständig wechselnder Körperteile. Ihr Name geht auf einen Entdecker zurück, der berichtete, einen Haufen brabbelnder Mäuler in bekannten und unbekannten Sprachen sprechen zu sehen — und davor zu fliehen. Andere Abenteurer beschrieben ähnliche Verschmelzungen aus Knochen, Muskeln und Gliedmaßen, eine schauerlicher als die andere. Erst kürzlich entdeckten Gelehrte, dass diese Geschöpfe eine gemeinsame chaotische Abstammung teilen, obwohl ihr Aussehen so wandelbar ist, dass sie nie zweimal gleich wahrgenommen werden.",
      "Chaos-Gourmets: Der Brabbler ernährt sich von Veränderung, wie sich die meisten Kreaturen von Nahrung und Wasser ernähren. Er kann sich allein durch den Weg in die Profanwelt einen Festschmaus gönnen, denn dort sind die Dinge köstlich wandelbar. Selbst reisen können sie nicht, doch sie ergreifen jede Gelegenheit: schleichen durch Magierportale und interdimensionale Risse, die durch Wildmagie entstehen. Manche werden von besonders bösartigen Mächten in die Profanwelt gerufen — eifrigen Kultisten, größenwahnsinnigen Magiern und anderen, die die Welt verändern oder ablenken wollen.",
      "Unverantwortliche Verwandlung: Lebende Wesen sind besonders anfällig für den realitätsverzerrenden Einfluss des Brabblers. Wer einem solchen Geschöpf ausgesetzt war, kehrt oft mit einem Andenken zurück: einem veränderten Körper. Zunächst sind die Effekte gering — der Körper flackert vielleicht stetig in die Realität hinein und aus ihr heraus, oder dem Gesicht wächst eine zusätzliche Nase. Diese Effekte verschlimmern sich stets und fügen mit der Zeit weitere Körperteile hinzu oder ordnen sie neu an. Schließlich verwandeln sich jene, die keine übernatürliche Hilfe finden, selbst in Brabbler und durchstreifen die Profanwelt auf der Suche nach einem Stück Realität zum Wandeln.",
      "Brabbel-Freund: Selten findet ein Brabbler einen Abenteurer, der das Chaos selbst verkörpert. Eine solche Verbindung kann eine unwahrscheinliche Freundschaft hervorbringen — der Brabbler dient gerne als treuer Gefährte, solange sein Pfleger ihm reichlich Gelegenheit gibt, die Realität zu verzerren. In noch einzigartigeren Fällen widersteht ein zum Brabbler gewordener Abenteurer dem Ruf des Chaos und bleibt bei seiner Gruppe."
    ],
    besonderheiten: [
      { name: "Unveränderliche Form", beschreibung: "Der Brabbler ist immun gegen jede Macht, jeden Zauber oder Effekt, der seine Form verändern würde." },
      { name: "Urzeitlicher Einfluss", beschreibung: "Ein benommener Feind, der seinen Zug innerhalb von 6 m vom Brabbler beginnt, muss einen WEI-Rettungswurf SG 13 ablegen. Misslungen: Der Körper der Kreatur wird auf eine jenseitige Weise nach Wahl der SL verändert — sie könnte in die Realität hineinflackern und herausflackern, ihr könnten winzige Finger aus den Fingern sprießen oder ihre körperliche Form könnte ähnlich fremdartig verändert werden. Diese Veränderung hat keinen Einfluss auf die Spielwerte der Kreatur. Eine Krankheit-heilen-Macht 4. Grades oder höher, ein Größere Wiederherstellung-Zauber oder ein ähnlicher übernatürlicher Effekt hebt die Veränderung auf. Solange die Kreatur derart verändert ist, muss sie den Rettungswurf nach jeder langen Rast wiederholen. Misslungen: Die vorherige Veränderung verschlimmert sich oder die Kreatur erfährt eine weitere chaotische Veränderung nach Wahl der SL. Misslingt der Rettungswurf nach der ursprünglichen Veränderung dreimal, verwandelt sich die Kreatur in einen von der SL kontrollierten Brabbler, und nur ein Wunsch-Zauber kann ihre ursprüngliche Form wiederherstellen." },
      { name: "Zähflüssige Umgebung", beschreibung: "Der Brabbler hüllt seine Umgebung in seine sich wandelnde Realität. Der Bereich innerhalb von 6 m gilt für andere Kreaturen als schwieriges Gelände." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Brabbler führt zwei Realitätsriss-Angriffe aus. Er kann einen Angriff durch einen Einsatz von Sog ersetzen." },
      { name: "Realitätsriss", beschreibung: "Nahkampf-Machtangriff: +5, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W6+3) Psychischer Schaden, und das Ziel muss einen WEI-Rettungswurf SG 13 bestehen oder ist bis zum Beginn des nächsten Zuges des Brabblers Benommen." },
      { name: "Sog", beschreibung: "Der Brabbler verzerrt die Realität um bis zu drei Kreaturen, die er innerhalb von 18 m sehen kann. Jedes Ziel muss einen STR-Rettungswurf SG 13 bestehen oder wird bis zu 9 m direkt zum Brabbler gezogen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
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
    name: "Durixaviinox",
    art: "Drache",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Rechtschaffen böse",
    cr: 16,
    xp: 15000,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 370, tp_wuerfel: "20W20+160",
    bewegung: { "Gehen": "12 m", "Graben": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 26, DEX: 10, CON: 26, INT: 18, WIS: 14, CHA: 18 },
    rettungswuerfe: { KON: 14, WEI: 8, CHA: 10 },
    fertigkeiten: { "Einschüchtern": 10, "Wahrnehmung": 8, "Überzeugen": 10 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Kälte", "Wucht"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Verängstigt", "Gelähmt", "Versteinert", "Betäubt"],
    sinne: ["Blindsicht 36 m", "Wahres Sehen 18 m"],
    passiveWahrnehmung: 18,
    sprachen: ["Gemein", "Drakonisch"],
    umgebung: ["Arktis", "Gebirge", "Ruinen"],
    bild: "assets/images/monster/flee-mortals/durixaviinox.png",
    beschreibung: [
      "In einer kalten Weite am Rand der Welt haust Durixaviinox (dur-ih-ZAH-vin-nox) unter den Ruinen der drakonischen Stadt Vexinoth. Obwohl viele ihn heute die Ruinierte Vorsehung nennen, herrschte dieser frostatmende Ruinendrache einst als wohlwollender und allmächtiger Imperator, der so viel Verehrung sammelte, dass er es mit den Göttern aufnehmen konnte.",
      "Doch Durixaviinox wurde von seiner Schwester Yserthrax verraten, die mit Qazyldrath konspirierte, um die Stadt zu zerstören. Der Konflikt tötete unzählige Drachen auf beiden Seiten, und Durixaviinox wurde für tot zurückgelassen, sein Körper unter den Trümmern einer einst mächtigen Zivilisation begraben.",
      "Doch die Vorsehung weigerte sich zu sterben und brachte sich allein durch Willenskraft vom Rand des Todes zurück. Während Durixaviinox über ein Jahrtausend des Wundenleckens langsam seine körperliche Macht zurückgewann, schwor er Racheeide gegen seine Schwester und Qazyldrath. Er plant, einen ewigen Winter über die Profanwelt zu bringen und sie zu einem Ort zu machen, der nur für jene mit frostigen Herzen geeignet ist."
    ],
    besonderheiten: [
      { name: "Frostige Resistenz (3/Tag)", beschreibung: "Wenn Durixaviinox einen Rettungswurf nicht besteht, kann er ihn stattdessen bestehen. Wenn er das tut, wird seine Bewegungsrate halbiert und er kann bis zum Ende seines nächsten Zuges keine Rückzug-Aktion ausführen." },
      { name: "Raureif", beschreibung: "Kälteschaden, den Durixaviinox verursacht, ignoriert Schadensresistenz." },
      { name: "Eiswanderung", beschreibung: "Durixaviinox kann sich über vereiste Oberflächen bewegen und sie erklimmen, ohne eine Attributsprobe ablegen zu müssen. Zusätzlich kostet ihn schwieriges Gelände aus Eis oder Schnee keine zusätzliche Bewegung." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Durixaviinox führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +14, Reichweite 4,5 m, ein Ziel. Treffer: 19 (2W10+8) Stichschaden plus 9 (2W8) Kälteschaden, und das Ziel kann bis zum Ende seines nächsten Zuges keine Reaktionen ausführen." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +14, Reichweite 3 m, ein Ziel. Treffer: 15 (2W6+8) Hiebschaden, und Durixaviinox kann das Ziel bis zu 4,5 m horizontal verschieben." },
      { name: "Erstarrender Atem (Aufladung 5-6)", beschreibung: "Durixaviinox stößt einen eisigen Schwall in einem 27-m-Kegel aus. Jede Kreatur im Bereich muss einen KON-Rettungswurf SG 22 ablegen. Misslungen: 42 (12W6) Kälteschaden und die Kreatur ist bis zum Ende ihres nächsten Zuges Festgesetzt. Bei Erfolg: halber Schaden und nicht Festgesetzt." }
    ],
    bonusaktionen: [
      { name: "Eisiger Griff", beschreibung: "Durixaviinox hüllt eine Kreatur innerhalb von 18 m, die er sehen kann, in Eis ein. Das Ziel muss einen STR-Rettungswurf SG 18 ablegen. Misslungen: 22 (4W10) Kälteschaden und die Kreatur ist Festgesetzt. Bei Erfolg: halber Schaden und nicht Festgesetzt. Eine Kreatur kann eine Aktion nutzen, um sich selbst oder eine andere Kreatur in Reichweite aus dem Eis zu befreien und so den Festgesetzt-Zustand zu beenden." }
    ],
    reaktionen: [
      { name: "Welkender Frost", beschreibung: "Wenn eine Kreatur innerhalb von 1,5 m von Durixaviinox ihn mit einem Angriff trifft, setzt Durixaviinox einen Stoß kalter Energie frei. Jede Kreatur innerhalb von 1,5 m von ihm muss einen KON-Rettungswurf SG 18 bestehen oder erleidet 10 (3W6) Kälteschaden." }
    ],
    legendaere_aktionen: [
      { name: "Schurkenaktionen", beschreibung: "Durixaviinox verfügt über drei Schurkenaktionen. Er kann jede Aktion einmal pro Begegnung nach dem Zug eines Gegners ausführen. Er kann diese Aktionen in beliebiger Reihenfolge nutzen, jedoch nur eine pro Runde." },
      { name: "Aktion 1: Tobender Blizzard", beschreibung: "Durixaviinox schlägt mit seinen Schwingen, und frostige Winde und Hagel wirbeln um ihn herum. Jede Kreatur innerhalb von 36 m muss einen STR-Rettungswurf SG 18 ablegen. Misslungen: 21 (6W6) Wuchtschaden, das Ziel wird 18 m direkt von Durixaviinox weggestoßen und zu Boden geworfen. Bei Erfolg: halber Schaden, kein Stoß und kein Sturz." },
      { name: "Aktion 2: Königliche Verteidigung", beschreibung: "Durixaviinox ruft die treue Seele eines geisterhaften Wächters herbei, der an seiner Seite kämpft. Der Wächter nutzt den Statblock des Frostriesen-Windsprinters, ist jedoch ein Untoter statt eines Riesen. Der Wächter agiert unmittelbar nach Durixaviinox und folgt dessen verbalen Befehlen. Solange sich der Wächter innerhalb von 18 m von Durixaviinox befindet, erhält dieser Resistenz gegen jeglichen Schaden. Stirbt Durixaviinox, wird der Wächter zerstört." },
      { name: "Aktion 3: Frost-Kataklysmus", beschreibung: "Durixaviinox entfesselt einen Impuls eisiger Energie, gefolgt von einer Wuchtwelle aus Kraft in einer 36-m-Radius-Sphäre um ihn herum. Jeder Feind im Bereich muss einen KON-Rettungswurf SG 18 ablegen und erleidet 45 (10W8) Kälteschaden (halber Schaden bei Erfolg). Unmittelbar danach muss jeder Feind im Bereich einen STR-Rettungswurf SG 18 ablegen und erleidet 45 (10W8) Wuchtschaden (halber Schaden bei Erfolg)." }
    ],
    source: "Flee Mortals"
  },
  {
    name: "Eisenkraft",
    art: "Elementar",
    unterart: "Erde, Feuer",
    groesse: "Groß",
    gesinnung: "Beliebige Gesinnung",
    cr: 10,
    xp: 5900,
    rk: 19, ruestungstyp: "natürliche Rüstung (22 in Schildform)",
    tp: 150, tp_wuerfel: "12W10+84",
    bewegung: { "Gehen": "18 m" },
    attribute: { STR: 21, DEX: 10, CON: 25, INT: 11, WIS: 13, CHA: 12 },
    rettungswuerfe: { STR: 9 },
    fertigkeiten: { "Athletik": 9, "Wahrnehmung": 5 },
    schadensresistenzen: ["Feuer"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Erschöpfung", "Verängstigt", "Versteinert", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m", "Zittersinn 9 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Gemein", "Ignisch", "Terranisch"],
    umgebung: ["Gebirge", "Höhle", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/eisenkraft.png",
    beschreibung: [
      "Eine Eisenkraft, auch Eisenkämpe genannt, erscheint als vierarmiger Zentaur aus formbarem Metall mit einem Kopf, der einem leeren Ritterhelm gleicht. Die meisten sind standhaft, loyal und kompromisslos.",
      "Manche Eisenkräfte erlangen sogar Ruhm, indem sie Bosheit dort entgegentreten, wo sie ihr begegnen — doch andere werden selbst zur Bosheit und nutzen ihre Stärke, um alles zu vernichten, was ihnen auch nur leicht missfällt."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Eisenkraft setzt Form-Haltung ein und führt anschließend drei Eiserne-Großklinge- oder drei Eisenstachel-Angriffe aus." },
      { name: "Eiserne Großklinge", beschreibung: "Nahkampfwaffenangriff: +9, Reichweite 1,5 m (6 m in Stangenwaffenform), ein Ziel. Treffer: 19 (4W6+5) Hiebschaden." },
      { name: "Eisenstachel", beschreibung: "Distanzwaffenangriff: +9, Reichweite 9/18 m, ein Ziel. Treffer: 14 (2W8+5) Stichschaden." },
      { name: "Form-Haltung", beschreibung: "Die Eisenkraft formt ihren Körper, um bis zum Beginn ihres nächsten Zuges einen der folgenden Vorteile zu erhalten: Stangenwaffenform – Nahkampfangriffe der Eisenkraft haben eine Reichweite von 6 m statt 1,5 m. Rücksichtslose Form – Die Eisenkraft hat Vorteil auf alle Nahkampfangriffswürfe, aber Angriffswürfe gegen sie haben ebenfalls Vorteil. Schildform – Die Eisenkraft erhält einen Bonus von +3 auf ihre RK." },
      { name: "Feuerform (1/Tag)", beschreibung: "Die Angriffe der Eisenkraft fügen bei Treffer zusätzliche 13 (2W12) Feuerschaden zu." }
    ],
    bonusaktionen: [
      { name: "Anrufung des Eisens (1/Tag)", beschreibung: "Die Eisenkraft verleiht sich selbst oder einem anderen Elementar, den sie innerhalb von 9 m sehen kann, die Kraft des Eisens und gewährt einen der folgenden Effekte nach Wahl dieses Elementars: Erd-Verstärkung – Fünf Erdfunken erscheinen in freien Räumen innerhalb von 6 m vom Elementar. Die Funken verstehen den Elementar, folgen seinen verbalen Befehlen und agieren in der Initiative-Reihenfolge unmittelbar nach ihm. Eisenhaut – Metall überzieht den Elementar und gewährt ihm 1 Min. lang oder bis seine Konzentration unterbrochen wird (wie bei einem Zauber mit Konzentration) Resistenz gegen Wucht-, Stich- und Hiebschaden." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Erdkraft",
    art: "Elementar",
    unterart: "Erde",
    groesse: "Groß",
    gesinnung: "Beliebige Gesinnung",
    cr: 5,
    xp: 1800,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 95, tp_wuerfel: "10W10+40",
    bewegung: { "Gehen": "9 m", "Graben": "6 m" },
    attribute: { STR: 19, DEX: 9, CON: 18, INT: 10, WIS: 14, CHA: 9 },
    rettungswuerfe: {},
    fertigkeiten: { "Athletik": 7, "Geschichte": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Versteinert", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m", "Zittersinn 9 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemein", "Terranisch"],
    umgebung: ["Gebirge", "Höhle", "Unterirdisch", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/erdkraft.png",
    beschreibung: [
      "Eine beschützende Erdelementar-Wesenheit, die Erdkraft, gleicht einem 2,70 m großen Menschenaffen aus rohem Stein. Sie agieren als Wächter und Chronisten ihrer Ishkrar und arbeiten unermüdlich daran, der Gruppe Unheil fernzuhalten. Diese Elementare werden manchmal Erdbollwerke genannt."
    ],
    besonderheiten: [
      { name: "Erdgleiten", beschreibung: "Die Erdkraft kann sich durch mundane, unbearbeitete Erde und Stein graben. Dabei stört sie das Material nicht, durch das sie sich bewegt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Erdkraft führt zwei Erdfessel-Schlag-Angriffe aus." },
      { name: "Erdfessel-Schlag", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W8+4) Wuchtschaden, und die Bewegungsweite des Ziels wird bis zum Beginn des nächsten Zuges der Erdkraft auf 0 reduziert." },
      { name: "Splitterstein", beschreibung: "Distanzwaffenangriff: +7, Reichweite 18/36 m, ein Ziel. Treffer: 23 (3W12+4) Wuchtschaden, oder 47 (6W12+8) Wuchtschaden, wenn das Ziel ein Objekt oder Bauwerk ist." }
    ],
    bonusaktionen: [
      { name: "Anrufung der Erde (1/Tag)", beschreibung: "Die Erdkraft verleiht sich selbst oder einem anderen Elementar, den sie innerhalb von 9 m sehen kann, die Kraft der Erde und gewährt einen der folgenden Effekte nach Wahl dieses Elementars: Erdaura – Steine wirbeln in einer 3-m-Radius-Sphäre für 1 Min. rasch um den Elementar oder bis er getötet oder kampfunfähig wird. Eine Kreatur, die kein Elementar ist, erleidet 5 Hiebschaden für je 1,5 m, die sie sich in den Bereich oder darin bewegt. Steinrüstung – Stein wächst über den Elementar als schützender Panzer und gewährt ihm 20 temporäre Trefferpunkte. Solange der Elementar diese temporären Trefferpunkte besitzt, ist er immun gegen die Zustände Benommen, Gelähmt, Versteinert und Betäubt." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Feuerkern",
    art: "Elementar",
    unterart: "Feuer",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 5,
    xp: 1800,
    rk: 14, ruestungstyp: "natürliche Rüstung",
    tp: 75, tp_wuerfel: "10W8+30",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 9, DEX: 17, CON: 16, INT: 11, WIS: 12, CHA: 16 },
    rettungswuerfe: { CHA: 6 },
    fertigkeiten: { "Wahrnehmung": 4, "Vortragen": 6 },
    schadensresistenzen: ["Gift"],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Unsichtbar", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 14,
    sprachen: ["Gemein", "Ignisch"],
    umgebung: ["Gebirge", "Höhle", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/feuerkern.png",
    beschreibung: [
      "Der Feuerkern, oft Brandbeschwörer genannt, nimmt die Gestalt einer feurigen Echse an. Sie leben oft in heißen Zonen planarer Konvergenz oder in Gebieten vulkanischer Aktivität. Diese territorialen Elementare befragen Eindringlinge meist aus der Ferne — und gefallen ihnen die Antworten nicht, lassen sie Feuer regnen, bevor ihre Feinde näher herankommen können.",
      "Während viele Elementare ihre angeborenen Gaben in mündliches Geschichtenerzählen einweben, sind Feuerkerne besonders geschickt darin, ihre Geschichten in Silhouetten aus Flammen lebendig werden zu lassen."
    ],
    besonderheiten: [
      { name: "Lodernd", beschreibung: "Der Feuerkern verströmt helles Licht in einem Radius von 6 m und dämmriges Licht für weitere 6 m und kann nicht von Unsichtbarkeit profitieren. Eine Kreatur, die ihren Zug beginnt, während sie den Feuerkern packt oder von ihm gepackt wird, erleidet 7 (2W6) Feuerschaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Feuerkern führt zwei Flammenzunge- oder zwei Schwefliger-Krallenhieb-Angriffe aus." },
      { name: "Schwefliger Krallenhieb", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W6+3) Hiebschaden, und das Ziel kann in diesem Zug keine Reaktionen ausführen." },
      { name: "Flammenzunge", beschreibung: "Distanzzauberangriff: +6, Reichweite 30 m, ein Ziel. Treffer: 13 (2W12) Feuerschaden. Ist das Ziel ein brennbares Objekt, das nicht getragen oder geführt wird, entzündet es sich." }
    ],
    bonusaktionen: [
      { name: "Anrufung des Feuers (1/Tag)", beschreibung: "Der Feuerkern verleiht sich selbst oder einem anderen Elementar, den er innerhalb von 9 m sehen kann, die Kraft des Feuers und gewährt einen der folgenden Effekte nach Wahl dieses Elementars: Flammenblüte – Der Elementar schleudert einen Flammensamen an einen sichtbaren Punkt innerhalb von 18 m. Eine 3-m-Radius-Sphäre um diesen Punkt entbrennt mit Feuer und brennt 1 Min. lang. Jede Kreatur, die den Bereich erstmals in einem Zug betritt oder dort ihren Zug beginnt, erleidet 10 (3W6) Feuerschaden. Rauchschleier – Der Elementar verströmt eine Aura aus Rauch in alle Richtungen 3 m weit für 1 Min. oder bis sie von mäßigem oder stärkerem Wind verweht wird. Der rauchige Bereich ist für alle Kreaturen, die keine Feuerelementare sind, schwer verschleiert." },
      { name: "Flammenstrahl (1/Tag)", beschreibung: "Der Feuerkern erhält bis zum Ende seines Zuges eine Fluggeschwindigkeit von 9 m und kann sich bis zu seiner Bewegungsweite bewegen." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Forzaantirilys",
    art: "Drache",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Rechtschaffen böse",
    cr: 24,
    xp: 62000,
    rk: 20, ruestungstyp: "natürliche Rüstung",
    tp: 585, tp_wuerfel: "30W20+270",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 30, DEX: 10, CON: 28, INT: 19, WIS: 16, CHA: 22 },
    rettungswuerfe: { KON: 16, WEI: 10, CHA: 13 },
    fertigkeiten: { "Athletik": 17, "Wahrnehmung": 10 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer", "Gleißend"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Verängstigt", "Gelähmt", "Versteinert", "Betäubt"],
    sinne: ["Blindsicht 36 m", "Wahres Sehen 18 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Gemein", "Drakonisch"],
    umgebung: ["Gebirge", "Höhle", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/forzaantirilys.png",
    beschreibung: [
      "Der als Aschenlied bekannte Blutdrache ist ein Geschöpf aus Asche und Glut, ihr Körper umhüllt von Flammen, die mit unirdischer Hitze brennen. Forzaantirilys (for-zan-TILL-ih-riss) haust im Herzen des größten Vulkans der Welt, und wenn die Gerüchte wahr sind, kann sie überall durch Magma- und Lavaströme sehen und hören.",
      "Forzaantirilys ist ein Inferno aus Zorn, und diese brennende Wut macht sie immun gegen alle Feuer, einschließlich des grellen Lichts der Sonne. Sie hasst Humanoide für ihren Glauben, ein Anrecht auf die Profanwelt zu haben, und sie verabscheut die Götter, die sie erschufen.",
      "Das Aschenlied verachtet auch den Wyrm Xaantikorijek, der vor fast tausend Jahren ihren Gefährten Frezzelvarax (frezz-el-VAR-ax) tötete. Sie will nichts mehr, als die Welt von ihrem Feuer verzehrt und neu geformt zu sehen, obwohl sie weiß, dass mutwillige Zerstörung zu ihrem Untergang führen würde."
    ],
    besonderheiten: [
      { name: "Höllenfeuer", beschreibung: "Feuerschaden, den Forzaantirilys verursacht, ignoriert Schadensresistenz." },
      { name: "Zornige Verteidigung (3/Tag)", beschreibung: "Wenn Forzaantirilys einen Rettungswurf nicht besteht, kann sie ihn stattdessen bestehen. Wenn sie das tut, haben Angriffswürfe gegen sie bis zum Ende ihres nächsten Zuges Vorteil." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Forzaantirilys führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +17, Reichweite 4,5 m, ein Ziel. Treffer: 21 (2W10+10) Stichschaden plus 14 (4W6) Feuerschaden, und das Ziel steht für 1 Min. in Flammen oder bis das Ziel oder eine erreichbare Kreatur eine Aktion nutzt, um die Flammen zu löschen. Eine Kreatur in Flammen erleidet zu Beginn ihres Zuges 10 (3W6) Feuerschaden. Wird eine Kreatur, die bereits in Flammen steht, in einem folgenden Zug erneut entzündet, ist der Schaden nicht kumulativ, aber die Branddauer wird auf 1 Min. zurückgesetzt." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +17, Reichweite 3 m, ein Ziel. Treffer: 17 (2W6+10) Hiebschaden, und Forzaantirilys kann das Ziel bis zu 4,5 m horizontal verschieben." },
      { name: "Sengender Atem (Aufladung 5-6)", beschreibung: "Forzaantirilys stößt Feuer in einem 27-m-Kegel aus. Jede Kreatur im Bereich muss einen GES-Rettungswurf SG 24 ablegen. Misslungen: 70 (20W6) Feuerschaden, und alle mundanen Metallgegenstände, die das Ziel trägt oder bei sich führt, werden zu Schlacke geschmolzen und zerstört. Bei Erfolg: halber Schaden und die Ausrüstung wird nicht zerstört. Zusätzlich verbleibt das Feuer im Bereich bis zum Ende von Forzaantirilys' nächstem Zug. Für die Dauer gilt der Bereich als schwieriges Gelände, und eine Kreatur, die den Bereich erstmals in einem Zug betritt oder dort ihren Zug beendet, erleidet 14 (4W6) Feuerschaden." }
    ],
    bonusaktionen: [
      { name: "Lodernder Sturm", beschreibung: "Forzaantirilys bewegt sich bis zur Hälfte ihrer Bewegungsrate. Betritt sie während dieser Bewegung den Raum einer Kreatur, erleidet diese 10 (3W6) Feuerschaden." }
    ],
    reaktionen: [
      { name: "Den Vermessenen entflammen", beschreibung: "Wenn eine Kreatur innerhalb von 36 m Forzaantirilys angreift, muss der Angreifer einen GES-Rettungswurf SG 21 ablegen. Misslungen: Der Angreifer steht für 1 Min. in Flammen oder bis er oder eine erreichbare Kreatur eine Aktion nutzt, um die Flammen zu löschen. Eine Kreatur in Flammen erleidet zu Beginn ihres Zuges 10 (3W6) Feuerschaden. Wird eine Kreatur, die bereits in Flammen steht, in einem folgenden Zug erneut entzündet, ist der Schaden nicht kumulativ, aber die Branddauer wird auf 1 Min. zurückgesetzt." }
    ],
    legendaere_aktionen: [
      { name: "Schurkenaktionen", beschreibung: "Forzaantirilys verfügt über drei Schurkenaktionen. Sie kann jede Aktion einmal pro Begegnung nach dem Zug eines Gegners ausführen. Sie kann diese Aktionen in beliebiger Reihenfolge nutzen, jedoch nur eine pro Runde." },
      { name: "Aktion 1: Aschenfall", beschreibung: "Eine Wolke aus Rauch und Glut mit 9 m Radius umgibt Forzaantirilys bis zum Ende ihres nächsten Zuges. Dieser Bereich ist für andere Kreaturen als Forzaantirilys schwer verschleiert. Ein Feind, der atmen muss und seinen Zug innerhalb der Wolke beginnt, muss einen KON-Rettungswurf SG 21 bestehen oder ist für 1 Min. Vergiftet (Rettungswurf am Ende des Zuges erlaubt)." },
      { name: "Aktion 2: Aschenrüstung", beschreibung: "Forzaantirilys' Haut härtet sich zu einer schützenden Rüstung aus aschigen Schuppen und gewährt ihr 100 temporäre Trefferpunkte. Solange diese temporären Trefferpunkte vorhanden sind, erleidet eine Kreatur innerhalb von 1,5 m von Forzaantirilys, die sie berührt oder mit einem Angriff trifft, 14 (4W6) Feuerschaden." },
      { name: "Aktion 3: Supernova", beschreibung: "Forzaantirilys entfesselt einen gewaltigen Ausbruch aus Licht und Hitze. Jede Kreatur innerhalb von 36 m muss einen KON-Rettungswurf SG 21 ablegen. Misslungen: 35 (10W6) Feuerschaden plus 35 (10W6) Gleißender Schaden und das Ziel ist Geblendet. Bei Erfolg: halber Schaden und nicht Geblendet. Die Blindheit hält an, bis sie durch eine Macht, einen Zauber oder eine vergleichbare übernatürliche Wirkung, die den Geblendet-Zustand entfernt, geheilt wird." }
    ],
    source: "Flee Mortals"
  },
  {
    name: "Frostkern",
    art: "Elementar",
    unterart: "Wasser",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 6,
    xp: 2300,
    rk: 16, ruestungstyp: "natürliche Rüstung",
    tp: 135, tp_wuerfel: "30W8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 12, DEX: 14, CON: 10, INT: 12, WIS: 16, CHA: 18 },
    rettungswuerfe: {},
    fertigkeiten: { "Täuschen": 10, "Motiv erkennen": 9, "Wahrnehmung": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Kälte", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Unsichtbar", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Aquanisch", "Gemein", "sowie die Sprachen einer durch Vereiste Spiegelung gespiegelten Kreatur"],
    umgebung: ["Arktis", "Gebirge", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/frostkern.png",
    beschreibung: [
      "Eine Wesenheit aus gespiegeltem Eis, der Frostkern ist fast immer von einer vereisten Fassade bedeckt. Sie werden gemeinhin Eisige Schimmermasken genannt, weil sie Kreaturen unvollkommen imitieren und so übernatürlichen Schrecken über jene bringen können, die sie spiegeln. Diese Furcht macht die gespiegelte Kreatur anfälliger für Schaden, ihre Gestalt und ihr Geist verkümmern unter dem prüfenden Blick des Frostkerns zu einer brüchigen Konsistenz."
    ],
    besonderheiten: [
      { name: "Funkelnd", beschreibung: "Der Frostkern kann nicht von Unsichtbarkeit profitieren." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Frostkern führt zwei Raureifglas-Berührungs-Angriffe aus und kann Vereiste Spiegelung oder Es starrt zurück einsetzen, falls verfügbar." },
      { name: "Raureifglas-Berührung", beschreibung: "Nahkampf- oder Distanzzauberangriff: +7, Reichweite 1,5 m oder 18 m, ein Ziel. Treffer: 17 (3W8+4) Kälteschaden, und das Ziel kann bis zum Beginn des nächsten Zuges des Frostkerns keine Kreaturen außer sich selbst und dem Frostkern sehen oder hören." },
      { name: "Vereiste Spiegelung", beschreibung: "Der Frostkern spiegelt das Aussehen einer bestimmten mittelgroßen oder kleinen Kreatur wider, die er innerhalb der letzten Woche gesehen hat. Dieses Aussehen ist illusorisch und unvollkommen und zeigt eine erfrorene Version der Kreatur. Die Illusion hält an, bis der Frostkern Donnerschaden erleidet, diese Aktion erneut einsetzt oder Kampfunfähig wird. Für die Dauer kennt der Frostkern zusätzlich alle Sprachen, die diese Kreatur beherrscht." },
      { name: "Es starrt zurück (Aufladung 5-6)", beschreibung: "Der Frostkern legt einer Kreatur innerhalb von 18 m Zerbrechlichkeit auf, die durch seine Vereiste Spiegelung gespiegelt wird. Kann das Ziel den Frostkern sehen, muss es einen WEI-Rettungswurf SG 15 ablegen. Misslungen: Das Ziel ist für 1 Min. vor dem Frostkern Verängstigt (Rettungswurf am Ende des Zuges erlaubt) oder bis der Frostkern aufhört, es zu spiegeln. Während es so verängstigt ist, erleidet das Ziel zusätzlich 11 (2W10) Psychischen Schaden, wann immer es Schaden erleidet. Bei Erfolg: Das Ziel ist nicht verängstigt und für 24 Stunden gegen Es starrt zurück aller Frostkerne immun." }
    ],
    bonusaktionen: [
      { name: "Anrufung des Eises (1/Tag)", beschreibung: "Der Frostkern verleiht sich selbst oder einem anderen Elementar, den er innerhalb von 9 m sehen kann, die Kraft des Eises und gewährt einen der folgenden Effekte nach Wahl dieses Elementars: Eisiger Glanz – Der Elementar erhält 1 Min. lang einen Spiegelglanz, der Schaden reflektiert. Wird der Elementar von einer Kreatur, die er innerhalb von 9 m sehen kann, mit einem Angriff getroffen, kann er als Reaktion den Angriff reflektieren. Der Elementar bleibt unbeschadet, und der Angreifer muss einen GES-Rettungswurf SG 15 ablegen. Misslungen: Schaden und Effekte des Angriffs werden auf den Angreifer zurückgeworfen, als hätte der Angriff vom Elementar ausgehend stattgefunden, und der Angreifer wird zum Ziel. Bei Erfolg: Der Angreifer erleidet halben Schaden, aber keine weiteren Effekte. Frostböe – Frost wirbelt 1 Min. lang um den Elementar. Für die Dauer wird die Bewegungsweite jeder Nicht-Elementar-Kreatur, die ihren Zug innerhalb von 4,5 m vom Elementar beginnt, auf 4,5 m reduziert, sofern sie nicht ohnehin niedriger ist, und zwar bis zum Ende ihres Zuges. Bewegt sie sich vor dem Beginn ihres nächsten Zuges erstmals freiwillig, erleidet sie 10 (3W6) Kälteschaden." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Gnoll-Abgrundbeschwörer",
    art: "Unhold",
    unterart: "Gnoll",
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 6,
    xp: 2300,
    rk: 14, ruestungstyp: "Fellrüstung",
    tp: 97, tp_wuerfel: "13W8+39",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 18, DEX: 15, CON: 16, INT: 12, WIS: 14, CHA: 16 },
    rettungswuerfe: { WEI: 5 },
    fertigkeiten: { "Wahrnehmung": 5, "Religion": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Abyssal", "Gnoll"],
    umgebung: ["Wüste", "Grasland", "Ruinen", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/gnoll-abgrundbeschwoerer.png",
    beschreibung: [
      "Der Gnoll-Abgrundbeschwörer ist ein dämonisch begabter Anführer einer Gnoll-Kriegsbande, der Hyänen aus der Abyssalen Ödnis herbeiruft und mit dunkler Magie in Gnoll-Marodeure verwandeln kann."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Beschwörer führt zwei Angriffe aus Biss, Dreischweif-Flegel oder Feuerstoß aus (auch kombiniert). Er kann einen Angriff durch einen Einsatz von Dämonisches Geheul ersetzen, falls verfügbar." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W4+4) Stichschaden plus 7 (2W6) Nekrotischer Schaden, und ist das Ziel eine Kreatur, erhält eine andere Kreatur, die der Beschwörer innerhalb von 9 m sehen kann, auf magische Weise 7 (2W6) Trefferpunkte zurück. Wird dieser Angriff gegen einen willigen Verbündeten ausgeführt, trifft er automatisch." },
      { name: "Dreischweif-Flegel", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 3 m, ein Ziel. Treffer: 11 (3W4+4) Wuchtschaden, und das Ziel wird 1,5 m vom Beschwörer weggestoßen." },
      { name: "Feuerstoß (Zaubertrick)", beschreibung: "Distanzzauberangriff: +6, Reichweite 18 m, ein Ziel. Treffer: 10 (3W6) Feuerschaden." },
      { name: "Dämonisches Geheul (Aufladung 5-6)", beschreibung: "Bis zum Beginn des nächsten Zuges des Beschwörers haben alle Verbündeten innerhalb von 9 m, die ihn hören können, Vorteil auf Angriffswürfe." },
      { name: "Erhebung (3/Tag)", beschreibung: "Der Gnoll verwandelt eine verbündete Abgrund-Hyäne auf magische Weise für 1 Stunde in einen Gnoll-Marodeur." }
    ],
    bonusaktionen: [
      { name: "Abgrund-Hyänen beschwören (3/Tag)", beschreibung: "Der Beschwörer ruft 1W4+1 Abgrund-Hyänen herbei, die in freien Räumen innerhalb von 9 m vom Beschwörer erscheinen. Die Hyänen agieren unmittelbar nach dem Zug des Beschwörers und folgen seinen Befehlen." }
    ],
    reaktionen: [
      { name: "Todesrasen", beschreibung: "Wird ein Verbündeter, den der Beschwörer innerhalb von 9 m sehen kann, auf 0 TP reduziert, bewegt sich der Beschwörer bis zur halben Bewegungsweite und führt einen Biss-Angriff aus." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Gnoll-Knochenspalter",
    art: "Unhold",
    unterart: "Gnoll",
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 4,
    xp: 1100,
    rk: 13, ruestungstyp: "Fellrüstung",
    tp: 90, tp_wuerfel: "12W8+36",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 18, DEX: 12, CON: 17, INT: 10, WIS: 12, CHA: 12 },
    rettungswuerfe: { KON: 5 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Abyssal", "Gnoll"],
    umgebung: ["Wüste", "Grasland", "Ruinen", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/gnoll-knochenspalter.png",
    beschreibung: [
      "Der Gnoll-Knochenspalter ist ein massiger Brawler einer Gnoll-Kriegsbande, ausgerüstet mit Stachelflegel und scharfen Reißzähnen. Sein blutiges Brüllen treibt Verbündete zu Mordlust an."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Knochenspalter führt zwei Angriffe aus Biss, Stachelflegel oder beidem aus. Er kann einen Angriff durch einen Einsatz von Blutiges Brüllen ersetzen, falls verfügbar." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 1,5 m, eine Kreatur. Treffer: 7 (1W6+4) Stichschaden, oder 11 (2W6+4) Stichschaden, falls das Ziel Festgesetzt ist." },
      { name: "Stachelflegel", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W8+4) Stichschaden. Ist das Ziel eine mittelgroße oder kleinere Kreatur, wird sie Gepackt (Befreiungs-SG 14). Solange das Greifen anhält, ist das Ziel Festgesetzt und der Knochenspalter kann keine Stachelflegel-Angriffe ausführen." },
      { name: "Blutiges Brüllen (Aufladung 6)", beschreibung: "Der Knochenspalter brüllt und spuckt einen Blutregen. Jeder Verbündete innerhalb von 3 m, der ihn sehen kann, darf einen Waffenangriff ausführen (keine Aktion nötig), sofern dieser Verbündete nicht Kampfunfähig ist." }
    ],
    bonusaktionen: [
      { name: "Hierher!", beschreibung: "Der Knochenspalter reißt an einer Kreatur, die er packt. Das Ziel muss einen STR-Rettungswurf SG 14 bestehen oder tauscht den Raum mit dem Knochenspalter." }
    ],
    reaktionen: [
      { name: "Todesrasen", beschreibung: "Wird ein Verbündeter, den der Knochenspalter innerhalb von 9 m sehen kann, auf 0 TP reduziert, bewegt sich der Knochenspalter bis zur halben Bewegungsweite und führt einen Biss-Angriff aus." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Gnoll-Marodeur",
    art: "Unhold",
    unterart: "Gnoll",
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 0.5,
    xp: 100,
    rk: 13, ruestungstyp: "Fellrüstung",
    tp: 22, tp_wuerfel: "4W8+4",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 14, DEX: 13, CON: 12, INT: 10, WIS: 12, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Abyssal", "Gnoll"],
    umgebung: ["Wüste", "Grasland", "Ruinen", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/gnoll-marodeur.png",
    beschreibung: [
      "Der Gnoll-Marodeur ist der Fußsoldat einer Gnoll-Kriegsbande, schnell und bissig, der sich im Sturmangriff auf seine Beute stürzt."
    ],
    besonderheiten: [
      { name: "Tobender Sturmangriff", beschreibung: "Bewegt sich der Marodeur in derselben Runde mindestens 3 m geradlinig auf eine Kreatur zu und trifft sie mit einem Flegel-Angriff, kann er als Bonusaktion einen Biss-Angriff gegen dasselbe Ziel ausführen." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Stichschaden." },
      { name: "Flegel", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W8+2) Wuchtschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Todesrasen", beschreibung: "Wird ein Verbündeter, den der Marodeur innerhalb von 9 m sehen kann, auf 0 TP reduziert, bewegt sich der Marodeur bis zur halben Bewegungsweite und führt einen Biss-Angriff aus." }
    ],
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
    name: "Qazyldrath",
    art: "Drache",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Chaotisch böse",
    cr: 22,
    xp: 41000,
    rk: 20, ruestungstyp: "natürliche Rüstung",
    tp: 402, tp_wuerfel: "23W20+161",
    bewegung: { "Gehen": "12 m", "Fliegen": "24 m", "Schwimmen": "12 m" },
    attribute: { STR: 27, DEX: 12, CON: 24, INT: 14, WIS: 16, CHA: 18 },
    rettungswuerfe: { KON: 14, WEI: 10, CHA: 11 },
    fertigkeiten: { "Arkane Kunde": 9, "Geschichte": 9, "Wahrnehmung": 10, "Heimlichkeit": 8 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Säure", "Nekrotisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet", "Betäubt"],
    sinne: ["Blindsicht 36 m", "Wahres Sehen 18 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Gemein", "Drakonisch"],
    umgebung: ["Höhle", "Ozean", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/qazyldrath.png",
    beschreibung: [
      "Qazyldrath (KAZZ-ill-drath) ist eine uralte Kreatur aus Albträumen, ein Manipulator von Säure und Schatten, ein Monster, das die Köpfe der Sterblichen heimsucht, seit die Schwingen des Drachen erstmals das Licht der Sonne verschlangen. Das ehrwürdige Alter dieses Düsterdrachen wird nur von der Furcht übertroffen, die er gebietet.",
      "Auch bekannt als Sonnenfresser und Stiller Verfall, nimmt Qazyldrath eine zentrale Rolle in der mündlichen Überlieferung drakonischer Ahnenreihen ein; er soll einer der Urväter der niederen Drachen sein und für die Boshaftigkeit der Drachenart verantwortlich gemacht werden.",
      "Obwohl Qazyldrath seit Jahrtausenden nicht mehr gesehen wurde, ist sein Einfluss in der gesamten Zeitlandschaft allgegenwärtig. Viele elfische Dialekte verwenden noch immer Abwandlungen des Drachennamens für das Wort „Sonnenfinsternis“. Manche glauben, dass Dunkelheit Qazyldraths Macht verstärkt und der Sonnenfresser eines Tages zurückkehren wird, um die Welt in ewigen Schatten zu stürzen."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Qazyldrath kann Luft und Wasser atmen." },
      { name: "Schatten verzehren (3/Tag)", beschreibung: "Wenn Qazyldrath einen Rettungswurf nicht besteht, kann er ihn stattdessen bestehen. Wenn er das tut, werden alle Bereiche magischer Dunkelheit in seinem Hort gebannt, und er kann bis zum Ende seines nächsten Zuges weder Umhüllen noch Heilung vereiteln einsetzen." },
      { name: "Schattenkraft", beschreibung: "Säure- und nekrotischer Schaden, den Qazyldrath verursacht, ignoriert Schadensresistenz." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Qazyldrath führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +15, Reichweite 4,5 m, ein Ziel. Treffer: 19 (2W10+8) Stichschaden plus 9 (2W8) Nekrotischer Schaden. Ist das Ziel eine Lichtquelle oder trägt eine solche, wird dieses Licht ausgelöscht." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +15, Reichweite 3 m, ein Ziel. Treffer: 15 (2W6+8) Hiebschaden, und Qazyldrath kann das Ziel bis zu 4,5 m horizontal verschieben." },
      { name: "Leerer Atem (Aufladung 5-6)", beschreibung: "Qazyldrath stößt dunkle Energie in einer 27 m langen und 6 m breiten Linie aus. Jede Kreatur im Bereich muss einen GES-Rettungswurf SG 22 ablegen und erleidet 24 (7W6) Säureschaden plus 24 (7W6) Nekrotischen Schaden (halber Schaden bei Erfolg). Zusätzlich wird der Bereich für 1 Min. mit magischer Dunkelheit erfüllt. Eine Kreatur mit Dunkelsicht kann diese Dunkelheit nicht durchdringen, und kein Licht außer einem Tageslicht-Zauber oder einem lichterzeugenden Zauber des 5. Grades oder höher kann sie erhellen." }
    ],
    bonusaktionen: [
      { name: "Umhüllen", beschreibung: "Schatten klammern sich an eine Kreatur, die Qazyldrath innerhalb von 36 m sehen kann. Das Ziel muss einen GES-Rettungswurf SG 19 bestehen oder ist bis zum Beginn von Qazyldraths nächstem Zug Geblendet und verwundbar gegen nekrotischen Schaden." }
    ],
    reaktionen: [
      { name: "Heilung vereiteln", beschreibung: "Wenn eine Kreatur innerhalb von 18 m von Qazyldrath Trefferpunkte zurückerhält, zwingt Qazyldrath sie zu einem KON-Rettungswurf SG 19. Misslungen: Die Kreatur erhält stattdessen nur die Hälfte der Trefferpunkte zurück." }
    ],
    legendaere_aktionen: [
      { name: "Schurkenaktionen", beschreibung: "Qazyldrath verfügt über drei Schurkenaktionen. Er kann jede Aktion einmal pro Begegnung nach dem Zug eines Gegners ausführen. Er kann diese Aktionen in beliebiger Reihenfolge nutzen, jedoch nur eine pro Runde." },
      { name: "Aktion 1: Brennende Klumpen", beschreibung: "Qazyldrath spuckt Säurekugeln auf jeden Feind, den er innerhalb von 27 m sehen kann. Jedes Ziel muss einen GES-Rettungswurf SG 19 bestehen oder bekommt eine Säurekugel an seinen Körper geheftet. Eine an einer Kugel haftende Kreatur erleidet zu Beginn ihres Zuges 14 (4W6) Säureschaden. Eine Kreatur kann eine Aktion nutzen, um eine Kugel von sich oder einer erreichbaren Kreatur zu entfernen." },
      { name: "Aktion 2: Schattengestalt", beschreibung: "Qazyldrath wird halbkörperlich und erhält bis zum Ende seines nächsten Zuges Resistenz gegen Wucht-, Stich- und Hiebschaden. Anschließend teleportiert sich Qazyldrath bis zu 36 m in einen freien Raum, den er sehen kann." },
      { name: "Aktion 3: Sinkende Finsternis", beschreibung: "Qazyldrath beschwört klebrige schwarze Säure, zentriert auf einen sichtbaren Punkt am Boden innerhalb von 36 m, und erzeugt einen 1,5 m tiefen Tümpel mit 6 m Radius. Der Tümpel gilt als schwieriges Gelände und hält 1 Min. an. Ein Feind, der seinen Zug im Tümpel beginnt, erleidet 24 (7W6) Säureschaden und muss einen STR-Rettungswurf SG 19 bestehen oder ist bis zum Beginn seines nächsten Zuges Festgesetzt. Ein Feind, der seinen Zug fliegend innerhalb von 9 m über dem Tümpel beginnt, muss einen GES-Rettungswurf SG 19 bestehen oder wird von lebendiger Säure heruntergezogen, landet im nächstgelegenen freien Raum seiner Wahl innerhalb des Tümpels, erleidet 24 (7W6) Säureschaden und ist bis zum Beginn seines nächsten Zuges Festgesetzt." }
    ],
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
    name: "Stoßzahn-Dämon",
    art: "Unhold",
    unterart: "Dämon (Kategorie 2)",
    groesse: "Riesig",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 7,
    xp: 2900,
    rk: 13, ruestungstyp: "natürliche Rüstung",
    tp: 138, tp_wuerfel: "12W12+60",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 22, DEX: 6, CON: 20, INT: 5, WIS: 10, CHA: 8 },
    rettungswuerfe: { WEI: 3, CHA: 2 },
    fertigkeiten: {},
    schadensresistenzen: ["Wucht, Stich und Hieb von mundanen Angriffen"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Taub", "Vergiftet"],
    sinne: ["Blindsicht 18 m (außerhalb blind)", "Seelensicht 9 m"],
    passiveWahrnehmung: 10,
    sprachen: ["versteht Abyssal, kann es jedoch nicht sprechen"],
    umgebung: ["Wüste", "Grasland", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/stosszahn-daemon.png",
    beschreibung: [
      "Hoch aufragend über einer Gnoll-Kriegsbande dient der elefantenartige Stoßzahn-Dämon als Lasttier und Kriegsmaschine. Stoßzahn-Dämonen haben keine Gesichtsmerkmale außer einer verdrehten Krone aus Stoßzähnen, die ihr gefräßiges Maul umringt. Obwohl Stoßzähne meist Gnoll-Befehlen folgen, stürmen sie bei besonders großem Seelenhunger ohne Rücksicht auf die Verbündeten vor, die sie womöglich zertrampeln.",
      "Seelenanzahl: 2 (1W4). Der Stoßzahn-Dämon beginnt den Kampf mit einer Reserve von Seelen, die er für bestimmte Fähigkeiten ausgeben kann. Sinkt seine Seelenanzahl auf 0, fällt er in den Lethe-Zustand und greift mit unbeherrschter Wut die nächstgelegene Kreatur an, bis er wieder eine Seele aufnimmt."
    ],
    besonderheiten: [
      { name: "Lethe", beschreibung: "Wenn die Seelenanzahl des Dämons 0 beträgt, hat er Vorteil auf Trefferwürfe, Nachteil auf Rettungswürfe, und sein INT-Wert sinkt auf 3 (-4). Zusätzlich muss er in jedem Zug seine Bewegung nutzen, um sich so nah wie möglich an die nächstgelegene Kreatur zu bewegen, die er mit seiner Seelensicht wahrnehmen kann, und – sofern möglich – seine Aktion nutzen, um diese anzugreifen und zu töten. Der Dämon kann keinem anderen Zweck dienen, bis er seine Seelenanzahl wieder um 1 erhöht." },
      { name: "Seelenverschlinger", beschreibung: "Reduziert der Dämon eine Kreatur (kein Konstrukt oder Untoter) auf 0 TP oder fügt einer sterbenden Kreatur Schaden zu, muss diese einen WEI-Rettungswurf SG 11 bestehen. Misslungen: Der Dämon verschlingt die Seele der Kreatur und erhöht seine Seelenanzahl um 1. Die Kreatur stirbt sofort und kann nur durch einen Wunsch-Zauber wiederbelebt werden." },
      { name: "Niedertrampeln", beschreibung: "Der Dämon kann sich durch die Räume von großen oder kleineren Kreaturen bewegen, als wäre es schwieriges Gelände. Wenn der Dämon den Raum einer Kreatur in seinem Zug zum ersten Mal betritt, kann er einen Stampfer-Angriff gegen diese Kreatur ausführen (keine Aktion nötig). Zusätzlich kann der Dämon seinen Zug im Raum einer liegenden Kreatur beenden, die mittelgroß oder kleiner ist, und diese Kreatur kann sich nicht erheben, solange sie im Raum des Dämons liegt." }
    ],
    aktionen: [
      { name: "Aufspießen", beschreibung: "Nahkampfwaffenangriff: +9, Reichweite 3 m, ein Ziel. Treffer: 19 (3W8+6) Stichschaden. Der Dämon kann 1 Seele verbrennen, um das Ziel bis zu 12 m direkt vom Dämon wegzustoßen." },
      { name: "Stampfer", beschreibung: "Nahkampfwaffenangriff: +9, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Wuchtschaden, und ist das Ziel eine mittelgroße oder kleinere Kreatur, muss sie einen STR-Rettungswurf SG 17 bestehen oder wird zu Boden geworfen." },
      { name: "Zunge", beschreibung: "Nahkampfwaffenangriff: +9, Reichweite 4,5 m, ein Ziel. Treffer: 16 (3W6+6) Hiebschaden, und ist das Ziel eine Kreatur, muss sie einen STR-Rettungswurf SG 17 bestehen oder wird bis zu 3 m zum Dämon gezogen." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Rachsüchtiger Ansturm (Kostet 1 Seele)", beschreibung: "Wenn ein Feind innerhalb von 12 m dem Dämon Schaden zufügt, kann sich der Dämon bis zu seiner Bewegungsweite geradlinig auf ihn zubewegen. Beendet der Dämon diese Bewegung innerhalb von 3 m des Feindes, kann er einen Aufspießen-Angriff gegen ihn ausführen." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Sturmessenz",
    art: "Elementar",
    unterart: "Luft",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 5,
    xp: 1800,
    rk: 14, ruestungstyp: "natürliche Rüstung",
    tp: 78, tp_wuerfel: "12W8+24",
    bewegung: { "Gehen": "6 m", "Fliegen": "18 m (schwebend)" },
    attribute: { STR: 12, DEX: 17, CON: 14, INT: 9, WIS: 11, CHA: 13 },
    rettungswuerfe: {},
    fertigkeiten: { "Akrobatik": 6, "Wahrnehmung": 6 },
    schadensresistenzen: ["Blitz", "Gift", "Donner"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Benommen", "Gepackt", "Gelähmt", "Vergiftet", "Festgesetzt"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Aurisch", "Gemein"],
    umgebung: ["Gebirge", "Küste", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/sturmessenz.png",
    beschreibung: [
      "Aus der Ferne würden die meisten eine Sturmessenz, auch Böenweber genannt, für einen großen Raubvogel halten. Diese majestätische Kreatur besteht aus Schlieren farbigen Wolkenstoffs, gewoben zur Silhouette eines großen Adlers oder Falken.",
      "Böenweber agieren als Späher für ihre Ishkrars und sind meist die Ersten, die Ärger erkennen. Zudem sind die Essenzen unstillbar neugierig und stürzen sich oft herab, um mit Reisenden zu sprechen, sobald sie diese erblicken."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Essenz führt zwei Windklauen-Angriffe aus. Sie kann einen Angriff durch einen Einsatz von Brausen oder Blitzböe ersetzen, falls verfügbar." },
      { name: "Windklauen", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W6+3) Stichschaden." },
      { name: "Brausen", beschreibung: "Die Essenz entfesselt einen 9-m-Kegel aus Wind. Jede Kreatur im Bereich muss einen STR-Rettungswurf SG 14 bestehen oder wird bis zu 3 m in eine beliebige Richtung verschoben." },
      { name: "Blitzböe (3/Tag)", beschreibung: "Die Essenz schleudert einen kleinen Blitzsturm auf eine Kreatur, die sie innerhalb von 9 m sehen kann. Das Ziel muss einen KON-Rettungswurf SG 14 ablegen. Misslungen: 28 (8W6) Blitzschaden und das Ziel ist 1 Min. Benommen (Rettungswurf am Ende des Zuges erlaubt). Bei Erfolg: halber Schaden und nicht Benommen." }
    ],
    bonusaktionen: [
      { name: "Anrufung der Luft (1/Tag)", beschreibung: "Die Essenz verleiht sich selbst oder einem anderen Elementar, den sie innerhalb von 9 m sehen kann, die Kraft der Luft und gewährt einen der folgenden Effekte nach Wahl dieses Elementars: Aufsteigender Wirbelsturm – Jede Kreatur nach Wahl des Elementars innerhalb von 9 m muss einen STR-Rettungswurf SG 14 gegen einen heftigen Wirbelsturm ablegen. Misslungen: Das Ziel steigt 3 m aufwärts und ist 1 Min. Festgesetzt (Rettungswurf am Ende des Zuges erlaubt). Ein so festgesetztes Ziel steigt zu Beginn jedes seiner Züge weitere 3 m auf. Eine andere Kreatur, die das Ziel erreichen kann, kann eine Aktion nutzen, um es aus dem Effekt herauszuziehen, was den Festgesetzt-Zustand für dieses Ziel beendet. Der Wirbelsturm endet, wenn der Elementar stirbt oder ihn beendet (keine Aktion nötig). Wirbelgelände – Ein Wirbel umkreist den Elementar. Für 1 Min. gilt der Bereich innerhalb von 6 m vom Elementar als schwieriges Gelände für Feinde." }
    ],
    reaktionen: [],
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
    name: "Wachstumsprinzip",
    art: "Elementar",
    unterart: "Erde, Wasser",
    groesse: "Riesig",
    gesinnung: "Beliebige Gesinnung",
    cr: 15,
    xp: 13000,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 243, tp_wuerfel: "18W12+126",
    bewegung: { "Gehen": "15 m", "Klettern": "15 m" },
    attribute: { STR: 21, DEX: 11, CON: 25, INT: 11, WIS: 16, CHA: 14 },
    rettungswuerfe: { STR: 10, WEI: 8 },
    fertigkeiten: { "Mit Tieren umgehen": 8, "Naturkunde": 10, "Überlebenskunst": 8 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Dunkelsicht 18 m", "Zittersinn 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Gemein", "Urzeitlich"],
    umgebung: ["Wald", "Dschungel", "Feenwildnis", "Sumpf"],
    bild: "assets/images/monster/flee-mortals/wachstumsprinzip.png",
    beschreibung: [
      "Das Wachstumsprinzip nimmt die Gestalt eines massiven Tausendfüßlers aus Pflanzenwerk an. Oft als Grüne Urwesen bezeichnet, kämpfen diese Hüter des natürlichen Lebens- (und Todes-) Kreislaufs gegen jene, die diesen Zyklus stören.",
      "Wachstumsprinzipien streben nicht nur danach, Untote und ihre Erschaffer zu vernichten, sondern auch göttliche Diener zu sabotieren, die leichtfertig mit Wiederbelebungsmagie hantieren."
    ],
    besonderheiten: [
      { name: "Regeneration", beschreibung: "Das Wachstumsprinzip erhält zu Beginn seines Zuges 20 Trefferpunkte zurück, sofern es nicht Kampfunfähig ist. Erleidet es Feuerschaden, erhält es zu Beginn seines nächsten Zuges nur 10 Trefferpunkte zurück." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Das Wachstumsprinzip führt zwei Behindernde-Wurzeln- oder zwei Frühlingspeitsche-Angriffe aus." },
      { name: "Behindernde Wurzeln", beschreibung: "Nahkampfwaffenangriff: +10, Reichweite 3 m, ein Ziel. Treffer: 23 (4W8+5) Wuchtschaden, und das Ziel wird Gepackt (Befreiungs-SG 15). Solange das Greifen anhält, ist das Ziel Festgesetzt." },
      { name: "Frühlingspeitsche", beschreibung: "Nahkampfwaffenangriff: +10, Reichweite 18 m, ein Ziel. Treffer: 27 (4W10+5) Hiebschaden, und das Wachstumsprinzip verschiebt das Ziel bis zu 4,5 m horizontal." },
      { name: "Aus der Erde brechen (1/Tag)", beschreibung: "Das Wachstumsprinzip lässt drei große Bäume mit peitschenden Ästen aus dem Boden sprießen, in freien Räumen, die es innerhalb von 18 m sehen kann. Jeder Baum hat RK 15, 40 Trefferpunkte und Immunität gegen Psychischen Schaden. Ein Feind, der seinen Zug innerhalb von 4,5 m eines dieser Bäume beginnt, muss einen GES-Rettungswurf SG 18 ablegen und erleidet 14 (4W6) Hiebschaden (halber Schaden bei Erfolg)." }
    ],
    bonusaktionen: [
      { name: "Anrufung des Grüns (2/Tag)", beschreibung: "Das Wachstumsprinzip verleiht sich selbst oder einem anderen Elementar, den es innerhalb von 9 m sehen kann, die Kraft der Pflanzenwelt und gewährt einen der folgenden Effekte nach Wahl dieses Elementars: Wurzeln des Geistes – Für 1 Min. kann der Elementar sich mit jedem großen oder größeren Pflanzenobjekt verbinden, das er innerhalb von 27 m sehen kann (keine Aktion nötig). Für die Dauer kann der Elementar wahrnehmen, angreifen und Aktionen ausführen, als befände er sich im Raum einer verbundenen Pflanze. Dornenausbruch – Dornige Ranken brechen aus dem Elementar hervor. Jeder Feind innerhalb von 9 m, den der Elementar sehen kann, muss einen GES-Rettungswurf SG 16 ablegen. Misslungen: 27 (6W8) Stichschaden und das Ziel ist bis zum Ende seines nächsten Zuges Festgesetzt. Bei Erfolg: halber Schaden und nicht Festgesetzt." }
    ],
    reaktionen: [],
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
    name: "Xaantikorijek",
    art: "Drache",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Neutral",
    cr: 23,
    xp: 50000,
    rk: 20, ruestungstyp: "natürliche Rüstung",
    tp: 518, tp_wuerfel: "28W20+224",
    bewegung: { "Gehen": "12 m", "Graben": "12 m", "Fliegen": "24 m" },
    attribute: { STR: 28, DEX: 10, CON: 27, INT: 24, WIS: 16, CHA: 20 },
    rettungswuerfe: { KON: 15, WEI: 10, CHA: 12 },
    fertigkeiten: { "Arkane Kunde": 21, "Geschichte": 21, "Naturkunde": 21, "Wahrnehmung": 10, "Religion": 21 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Blitz", "Donner"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Verängstigt", "Gelähmt", "Versteinert", "Betäubt"],
    sinne: ["Blindsicht 36 m", "Wahres Sehen 18 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Alle Sprachen"],
    umgebung: ["Wüste", "Unterirdisch", "Andere Ebenen"],
    bild: "assets/images/monster/flee-mortals/xaantikorijek.png",
    beschreibung: [
      "Tief unter den kargen Einöden der Welt ruht eine ihrer ältesten Kreaturen — so alt, dass er seinen eigenen Namen vergessen hat. Dieser Sturmdrache ist schlicht als die Stimme der Zeitalter bekannt — oder Xaantikorijek (zan-tih-KOR-eh-jehk) auf Drakonisch.",
      "Xaantikorijek ist ein Meister von Donner und Blitz, und als Teil der ersten Brut, die auf der Profanwelt schlüpfte, ist er älter als die meisten seiner überlebenden Artgenossen. Eine Legende besagt, dass die Stimme der Zeitalter einst ein Geheimnis kannte, das die Profanwelt in jede beliebige Form neu erschaffen konnte — doch der alternde Wyrm erinnert sich nur an sehr wenig seiner eigenen Vergangenheit. Ob dies der Preis dafür war, das Unheil zu überleben, das die Drachen von einst ereilte, eine selbst auferlegte Bedingung oder eine andere magische Beschwerde — selbst Xaantikorijek weiß es nicht.",
      "Alle paar Jahrhunderte jedoch erinnert sich Xaantikorijek an ein Detail aus seiner verlorenen Geschichte. Es heißt, wenn dies geschieht, hallt seine Stimme weltweit wider, während er die Wahrheit allen Drachenartigen mitteilt. Die Drachen hoffen inständig, er möge sich eines Tages erinnern, wie man die Welt mit Drachen als Herrschern neu schmieden kann."
    ],
    besonderheiten: [
      { name: "Statischer Schild (3/Tag)", beschreibung: "Wenn Xaantikorijek einen Rettungswurf nicht besteht, kann er ihn stattdessen bestehen. Wenn er das tut, werden seine Sicht, Blindsicht und Wahres Sehen bis zum Beginn seines nächsten Zuges auf eine Reichweite von 9 m reduziert." },
      { name: "Sturm der Götter", beschreibung: "Blitz- und Donnerschaden, den Xaantikorijek verursacht, ignoriert Schadensresistenz." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Xaantikorijek führt einen Bissangriff und zwei Klauenangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +16, Reichweite 4,5 m, ein Ziel. Treffer: 20 (2W10+9) Stichschaden plus 5 (1W10) Blitzschaden, und Xaantikorijek kann das Ziel bis zu 6 m in eine beliebige Richtung verschieben." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +16, Reichweite 3 m, ein Ziel. Treffer: 16 (2W6+9) Hiebschaden plus 7 (2W6) Donnerschaden, und das Ziel wird zu Boden geworfen." },
      { name: "Fulminanter Atem (Aufladung 5-6)", beschreibung: "Xaantikorijek stößt Blitze in einer 36 m langen und 9 m breiten Linie aus. Jede Kreatur im Bereich muss einen GES-Rettungswurf SG 23 ablegen. Misslungen: 66 (12W10) Blitzschaden und Nachteil auf Rettungswürfe bis zum Ende von Xaantikoijeks nächstem Zug. Bei Erfolg: halber Schaden und keine weiteren Effekte." }
    ],
    bonusaktionen: [
      { name: "Blitzentladung", beschreibung: "Xaantikorijek führt einen Bissangriff aus. Bei Treffer sprühen seine Zähne Energie und fügen dem Ziel sowie einem weiteren Feind innerhalb von 18 m vom Ziel zusätzliche 11 (2W10) Blitzschaden zu." }
    ],
    reaktionen: [
      { name: "Stimme der Verneinung", beschreibung: "Wenn eine Kreatur innerhalb von 18 m, die Xaantikorijek sehen kann, eine Aktion oder Bonusaktion nutzt, um einen Zauber zu wirken, spricht Xaantikorijek ein arkanes Wort und zwingt die Kreatur zu einem Rettungswurf SG 23 mit ihrem Zaubereigenschaftswert. Misslungen: Das Ziel erleidet 16 (3W10) Donnerschaden und kann bis zum Ende seines Zuges keine Zauber wirken, der Zauberplatz wird jedoch nicht verbraucht und die Aktion der Kreatur geht nicht verloren." }
    ],
    legendaere_aktionen: [
      { name: "Schurkenaktionen", beschreibung: "Xaantikorijek verfügt über drei Schurkenaktionen. Er kann jede Aktion einmal pro Begegnung nach dem Zug eines Gegners ausführen. Er kann diese Aktionen in beliebiger Reihenfolge nutzen, jedoch nur eine pro Runde." },
      { name: "Aktion 1: Stimme der Ehrfurcht", beschreibung: "Xaantikorijek spricht ein uraltes Wort der Autorität in den Geist jeder Kreatur seiner Wahl innerhalb von 18 m. Jedes Ziel muss einen WEI-Rettungswurf SG 20 bestehen oder fällt zu Boden. Eine Kreatur, die so zu Boden fällt, erleidet 22 (4W10) Donnerschaden, wenn sie vor dem Ende von Xaantikoijeks nächstem Zug wieder aufsteht." },
      { name: "Aktion 2: Fulguration", beschreibung: "Xaantikorijek streift seine körperliche Form ab und wird bis zum Ende seines nächsten Zuges zu einem Wesen aus Blitz. In dieser Form erhält Xaantikorijek folgende Vorteile: Er ist resistent gegen jeglichen Schaden. Er kann durch einen Raum von nur 2,5 cm Breite ziehen, ohne sich zu zwängen. Seine Bewegung löst keine Gelegenheitsangriffe aus. Er kann durch den Raum jeder Kreatur ziehen, und wenn er den Raum einer Kreatur zum ersten Mal in einem Zug betritt, erleidet diese Kreatur 16 (3W10) Blitzschaden." },
      { name: "Aktion 3: Stimme der Zeitalter", beschreibung: "Xaantikorijek rezitiert ein uraltes Klagelied, das in den Seelen in der Nähe widerhallt. Jeder Feind innerhalb von 18 m, der ihn hören kann, muss einen WEI-Rettungswurf SG 20 ablegen. Misslungen: 44 (8W10) Psychischer Schaden, das Ziel fällt zu Boden und kann sich für 1 Min. nicht erheben, während es unkontrolliert weint (Rettungswurf am Ende des Zuges erlaubt). Bei Erfolg: halber Schaden und keine weiteren Effekte." }
    ],
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
