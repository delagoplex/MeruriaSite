// Flee Mortals — Monster aus dem gleichnamigen MCDM-Buch.
//
// Neue Einträge:
//   - source: "Flee Mortals"
//   - bild:   "flee-mortals/<dateiname>.png"
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
    bild: "flee-mortals/abgrund-hyaene.png",
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
    sprachen: ["Angulotl", "Gemeinsprache"],
    umgebung: ["Sumpf", "Dschungel", "Küste"],
    bild: "flee-mortals/angulotl-ganove.png",
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
    bild: "flee-mortals/angulotl-kaulquappe.png",
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
    bild: "flee-mortals/angulotl-klinge.png",
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
    bild: "flee-mortals/angulotl-nadelschuetze.png",
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
    bild: "flee-mortals/angulotl-schleicher.png",
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
    bild: "flee-mortals/angulotl-seher.png",
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
    name: "Arkanes Amalgam",
    art: "Schlick",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 6,
    xp: 2300,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 95,
    tp_wuerfel: "10W10+40",
    bewegung: { "Gehen": "6 m", "Klettern": "6 m", "Schwimmen": "6 m" },
    attribute: { STR: 1, DEX: 16, CON: 18, INT: 2, WIS: 12, CHA: 2 },
    rettungswuerfe: { KON: 7 },
    fertigkeiten: {},
    schadensresistenzen: ["Säure", "Wucht", "Stich", "Hieb"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Benommen", "Taub", "Erschöpft", "Flankiert", "Verängstigt", "Gepackt", "Gelähmt", "Vergiftet", "Liegend", "Fixiert", "Betäubt"],
    sinne: ["Blindsicht 36 m (blind darüber hinaus)"],
    passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Unterirdisch", "Stadt"],
    bild: "flee-mortals/arkanes_amalgam.png",
    beschreibung: [
      "Ein arkanes Amalgam entsteht, wenn die verschmutzten Abfälle magischer Experimente in Abwasserkanälen zusammenfließen. Diese Fragmente unberechenbarer Öle und verseuchter arkaner Energien bilden einen triefenden Schwarm daumengroßer Kügelchen.",
      "Arkane Amalgame versammeln sich in psychedelischen Klumpen, die reglos bleiben, wenn keine Magie in der Nähe ist, und reagieren gewaltsam, wenn neugierige Nagetiere oder Kanalarbeiter sie aufstören. Diese durchscheinenden Tropfen werden leicht übersehen, während sie in kleinen Pfützen gleiten oder in stehendem Wasser ruhen.",
      "Wenn arkanem Abfluss in die Nähe eines Amalgams gerät, zieht der Schwarm ihn an und dehnt sich weiter aus. Bei der seltenen Gelegenheit, wenn ein Amalgam einem Zauber oder einem magischen Gegenstand begegnet, erwacht jeder Tropfen mit einem gierigen Maul und versucht, alles Magische in seiner Reichweite zu verschlingen.",
      "Das Amalgam verdaut seine magische Nahrung langsam und wird wieder schlafend, nachdem es sich satt gefressen hat. Abenteurer, die ihm begegnen und überleben, finden möglicherweise wertvolle Zauberkomponenten oder magische Gegenstände unter seinen Überresten."
    ],
    besonderheiten: [
      { name: "Antimagie-Lethargie", beschreibung: "Während sich das Amalgam im Bereich eines Antimagiefeld-Zaubers befindet, wird seine Bewegungsrate halbiert und es kann keine Reaktionen nutzen. Wird es zudem vom Zauber Magie bannen getroffen, muss das Amalgam einen WEI-Rettungswurf gegen den Zauber-SG des Zauberwirkers bestehen oder kann 1 Minute lang keine Reaktionen nutzen." },
      { name: "Arkanspürer", beschreibung: "Kommt das Amalgam innerhalb von 9 m einer Kreatur oder einem Objekt, das von Magie betroffen ist, kann es dieses Ziel für die nächsten 24 Stunden unfehlbar aufspüren." },
      { name: "Explosive Verstärkung", beschreibung: "Wird das Amalgam mit einem Angriff einer normalen Nahkampfwaffe getroffen, wird diese Waffe mit vibrierender Energie aufgeladen. Für die nächste Minute erhält die Waffe einen kumulativen +1-Bonus auf Schadenswürfe. Steigt dieser Bonus auf +3, explodiert die Waffe und wird zerstört, und die Kreatur, die sie führt, erleidet 10 (3W6) Kraftschaden." },
      { name: "Falsche Erscheinung", beschreibung: "Solange das Amalgam reglos bleibt, ist es von einer Schmutzlache nicht zu unterscheiden." },
      { name: "Schwarm", beschreibung: "Das Amalgam kann den Raum einer anderen Kreatur besetzen und umgekehrt, und das Amalgam kann sich durch einen Raum so schmal wie 2,5 cm bewegen, ohne sich zusammenzuquetschen. Das Amalgam kann keine Trefferpunkte zurückgewinnen oder temporäre Trefferpunkte erhalten." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Das Arkane Amalgam führt zwei Bissangriffe aus." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 0 m, ein Ziel. Treffer: 14 (4W6) Säureschaden, oder 7 (2W6) Säureschaden, wenn das Amalgam die Hälfte seiner Trefferpunkte oder weniger hat." },
      { name: "Zufallssurge (Aufladung 5–6)", beschreibung: "Die instabilen Verbindungen, die das Amalgam bilden, reagieren heftig aufeinander. Jede Kreatur innerhalb von 3 m muss einen GES-Rettungswurf SG 15 ablegen. Misslungen: 22 (4W10) Schaden eines zufälligen Typs (für jede Kreatur einen W6 würfeln): 1 = Säure; 2 = Kälte; 3 = Feuer; 4 = Kraft; 5 = Nekrotisch; 6 = Gift. Erfolg: halber Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Zauberreflexion", beschreibung: "Wenn das Amalgam Schaden durch einen Zauber erleidet, strahlt es einen Schwall magischer Energie aus. Jede Kreatur innerhalb von 3 m muss einen GES-Rettungswurf SG 15 bestehen oder erleidet 11 (2W10) Schaden des Typs, den der auslösende Zauber dem Amalgam zugefügt hat. Hat der Zauber mehr als einen Schadenstyp verursacht, wählt das Amalgam, welchen Typ diese Reaktion verursacht." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Aschenhorter",
    art: "Konstrukt",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 10,
    xp: 5900,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 184,
    tp_wuerfel: "16W12+80",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 20, DEX: 8, CON: 20, INT: 6, WIS: 10, CHA: 1 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Nekrotisch", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Erschöpft", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["versteht die Sprachen seines Erschaffers, kann aber nicht sprechen"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "flee-mortals/aschenhorter.png",
    beschreibung: [
      "Grabraub ist gefährliches Geschäft, aber Nekromanten brauchen Körper für ihre Experimente. Um Vorräte zu beschaffen und sich aus der Gefahr herauszuhalten, bauen diese Magier Aschenhorter – wuchtige Konstrukte aus magisch verstärkten humanoiden Knochen.",
      "Der Aschenhorter bewegt sich auf vier langen Beinen aus kompakten Knochensäulen, die es ihm ermöglichen, sich schnell zu bewegen und Kreaturen auszuweichen, die versuchen könnten, seine grimmige Arbeit zu behindern. Gelenkige Arme mit angebrachten Werkzeugen und Waffen helfen beim Ausgraben von Leichen und beim Bekämpfen von Feinden.",
      "Wenn der Aschenhorter eine Leiche erlangt, spießt das Konstrukt sie auf einem der vielen scharfen Knochen auf, die aus seinem Rücken ragen. Diese Stacheln sichern die Leichen und laden sie mit nekrotischer Energie auf, damit die Fracht bereit für Experimente ist, wenn sie am Nekromanten ankommt.",
      "Falls Feinde den Aschenhorter in die Enge treiben, kann das Konstrukt die in seinen Leichen gespeicherte Energie nutzen, um sie als Zombie-Verbündete zu reanimieren oder die Überreste mit explosiver nekrotischer Energie zur Detonation zu bringen."
    ],
    besonderheiten: [
      { name: "Leichenträger", beschreibung: "Der Aschenhorter trägt 6 (1W6+3) Leichen bei sich, die er mit den Aktionen Leichenbombe und Zombies erschaffen einsetzen kann." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Aschenhorter führt zwei Armattacken aus. Treffen beide Angriffe dieselbe Kreatur, kann er Aufspießen gegen das Ziel einsetzen." },
      { name: "Arm", beschreibung: "Nahkampfwaffenangriff: +9, Reichweite 3 m, ein Ziel. Treffer: 15 (3W6+5) Wucht-, Stich- oder Hiebschaden (Wahl des Aschenhorters)." },
      { name: "Aufspießen", beschreibung: "Der Aschenhorter versucht, eine Große oder kleinere Kreatur, die er innerhalb von 3 m sehen kann, auf seinen Stacheln aufzuspießen. Das Ziel muss einen STR-Rettungswurf SG 17 bestehen oder nimmt 16 (3W10) Stichschaden und ist Festgesetzt. Eine so festgesetzte Kreatur nimmt zu Beginn jedes ihrer Züge 16 (3W10) Nekrotischschaden. Wird sie dadurch auf 0 Trefferpunkte reduziert, stirbt sie und wird zu einer zusätzlichen Leiche im Leichenträger des Aschenhorters. Eine Kreatur kann ihre Aktion nutzen, um einen STR(Athletik)-Wurf SG 17 abzulegen und sich bei Erfolg selbst oder eine Kreatur in Reichweite zu befreien, die vom Aschenhorter festgesetzt ist. Wird der Aschenhorter zerstört, wird jede von ihm festgesetzte Kreatur befreit." },
      { name: "Leichenbombe", beschreibung: "Der Aschenhorter schleudert eine Leiche aus seinem Leichenträger bis zu 18 m weit, zerstört sie und setzt nekrotische Energie in einer Kugel mit 6 m Radius frei, die um die Leiche herum zentriert ist. Jede Kreatur in diesem Bereich muss einen KON-Rettungswurf SG 17 ablegen. Misslungen: 33 (6W10) Nekrotischschaden, und die Kreatur kann bis zum Beginn des nächsten Zuges des Aschenhorters keine Trefferpunkte zurückgewinnen. Erfolg: halber Schaden, und die Kreatur kann Trefferpunkte zurückgewinnen." }
    ],
    bonusaktionen: [
      { name: "Zombies erschaffen", beschreibung: "Der Aschenhorter lässt eine beliebige Anzahl von Leichen aus seinem Leichenträger fallen. Jede fallen gelassene Leiche ersteht als Zombie in einem unbesetzten Feld innerhalb von 3 m vom Aschenhorter auf und ist unmittelbar nach dem Aschenhorter an der Reihe." }
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
    bild: "flee-mortals/ataeshia.png",
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
    bild: "flee-mortals/aurumvas.png",
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
    sprachen: ["Gemeinsprache", "Zwergisch", "Elfisch", "Riesisch", "Urzeitlich"],
    umgebung: ["Andere Ebenen", "Stadt"],
    bild: "flee-mortals/blutkraft.png",
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
    bild: "flee-mortals/brabbler.png",
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
    name: "Bredbeddle",
    art: "Riese",
    unterart: "Gestaltwandler",
    groesse: "Riesig",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 8,
    xp: 3900,
    rk: 13,
    ruestungstyp: "natürliche Rüstung",
    tp: 157,
    tp_wuerfel: "15W12+60",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 24, DEX: 10, CON: 18, INT: 12, WIS: 12, CHA: 16 },
    rettungswuerfe: {},
    fertigkeiten: { "Täuschung": 6, "Wahrnehmung": 4, "Heimlichkeit": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m (blind darüber hinaus in wahrer Form)"],
    passiveWahrnehmung: 14,
    sprachen: ["Gemeinsprache", "Riesisch (kann in wahrer Form nicht sprechen)"],
    umgebung: ["Grasland", "Wald"],
    bild: "flee-mortals/bredbeddle.png",
    beschreibung: [
      "In ihrer wahren Form sind Bredbeddles kopflose Riesen von etwa 4,5 m Größe. Auf der ewigen Suche nach ihren fehlenden Köpfen werden sie von belebten Ländern angezogen, wo sie Passanten enthaupten und magisch deren Gestalt annehmen.",
      "Obwohl Bredbeddles keine traditionellen Sinnesorgane besitzen, sind sie sich ihrer Umgebung sehr bewusst. Manche lauern auf dunklen Landstraßen in ihrer monströsen wahren Form. Andere wandeln verkleidet unter Menschenmassen und legen ihre Tarnung nur kurz ab, um einen Fremden zu überwältigen und zu enthaupten.",
      "Bredbeddles altern nicht, und selbst wenn sie erschlagen werden, formt sich ihr Körper einige Tage später wieder. Einst standen Bredbeddles hoch in der Adelsschaft der Riesenwelt, doch als sie sich zu Herrschern aller Riesen erklärten, vereitelten ihre Artgenossen den Staatsstreich und enthaupteten die Bredbeddles. Nun durchstreifen diese gefallenen Adeligen die Welt auf der Suche nach ihren fehlenden Köpfen, jeder von ihnen die Axt schwingend, die ihn enthauptet hat."
    ],
    besonderheiten: [
      { name: "Kopflos (Nur wahre Form)", beschreibung: "Der Bredbeddle kann weder Geblendet noch Taub gemacht werden." },
      { name: "Wiedergeburt", beschreibung: "Wenn der Bredbeddle stirbt, kehrt er in 1W6 Monaten mit allen Trefferpunkten ins Leben zurück. Wurde sein Körper zerstört, formt er sich in einem unbesetzten Raum nahe dem Ort, an dem er starb. Nur ein Wunschzauber oder das Finden und Vernichten des wahren Kopfes des Bredbeddles kann diese Eigenschaft unterbinden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Bredbeddle führt zwei Angriffe mit der Henkers-Axt aus." },
      { name: "Henkers-Axt", beschreibung: "Nahkampfwaffenangriff: +10, Reichweite 1,5 m, ein Ziel. Treffer: 23 (3W10+7) Hiebschaden." },
      { name: "Enthauptungsschlag (Aufladung 5–6)", beschreibung: "Nahkampfwaffenangriff: +10, Reichweite 4,5 m, ein Großer oder kleinerer Riese oder Humanoid mit einem Kopf. Treffer: 40 (6W10+7) Hiebschaden, und das Ziel muss einen KON-Rettungswurf SG 15 ablegen. Misslungen: Der Bredbeddle schlägt dem Ziel den Kopf ab, der zu dessen Füßen landet. Eine so enthauptete Kreatur bleibt am Leben, sofern sie nicht auf 0 Trefferpunkte reduziert wird, ist aber Geblendet und Taub und kann nicht sprechen. Eine Kreatur kann eine Aktion nutzen, um den Kopf einer enthaupteten Kreatur wieder aufzusetzen und den Effekt zu beenden. Eine enthauptete Kreatur stirbt, wenn sie mehr als 24 Stunden von ihrem Kopf getrennt bleibt." }
    ],
    bonusaktionen: [
      { name: "Einen Kopf nehmen", beschreibung: "Der Bredbeddle hebt einen abgetrennten Riesen- oder Humanoiden-Kopf innerhalb von 4,5 m auf und setzt ihn auf seinen Hals. Er verwandelt sich dann in jene Kreatur. Während er verwandelt ist, ändern sich seine Werte wie folgt: Er kann sprechen. Er verliert seine Eigenschaft Kopflos. Seine Größe ändert sich entsprechend der Kreatur. Er kann normal sehen und erhält alle besonderen Sinne, die der Kopf der Kreatur hatte. Mitgeführte oder getragene Ausrüstung ändert vorübergehend ihre Größe, aber ihre Spielwerte bleiben unverändert. Der Bredbeddle kehrt in seine wahre Form zurück, wenn er stirbt, sein Kopf entfernt wird oder nach 24 Stunden. Beim Zurückverwandeln fällt der Kopf ab. Eine Kreatur, die den Bredbeddle erreichen kann, kann eine Aktion nutzen, um einen STR(Athletik)-Wurf SG 18 abzulegen und den Kopf bei Erfolg zu entfernen." },
      { name: "Kopf werfen (Nur in Polymorph-Form)", beschreibung: "Der Bredbeddle entfernt seinen Kopf, kehrt in seine wahre Form zurück, und wirft den Kopf auf eine Kreatur, die er innerhalb von 18 m sehen kann. Der Kopf landet im Raum des Ziels, und das Ziel muss einen GES-Rettungswurf SG 18 bestehen oder erleidet 18 (2W10+7) Wuchtschaden." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Dornenblut",
    art: "Pflanze",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Typischerweise Neutral",
    cr: 20,
    xp: 25000,
    rk: 16,
    ruestungstyp: null,
    tp: 324,
    tp_wuerfel: "24W20+72",
    bewegung: { "Gehen": "9 m", "Klettern": "9 m" },
    attribute: { STR: 22, DEX: 23, CON: 17, INT: 11, WIS: 16, CHA: 8 },
    rettungswuerfe: { KON: 9, WEI: 9 },
    fertigkeiten: {},
    schadensresistenzen: ["Kälte", "Blitz", "Wucht (nichtmagisch)", "Stich (nichtmagisch)", "Hieb (nichtmagisch)"],
    schadensimmunitaeten: ["Gift", "Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Flankiert", "Verängstigt", "Gepackt", "Vergiftet", "Liegend", "Betäubt"],
    sinne: ["Blindsicht 36 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Sylvanisch"],
    umgebung: ["Wald", "Feenwildnis", "Grasland"],
    bild: "flee-mortals/dornenblut.png",
    beschreibung: [
      "Ein Dornenblut wächst aus fluchgestärkten Samen, die in einem Leichnam eingebettet sind. Diese enorme Masse lebendiger, dorniger Ranken ist eine Manifestation des Hasses der Natur und ein Gegenmittel gegen den Eingriff der Zivilisation.",
      "Wenn ein Steingebäude und seine Bewohner das Gebiet der Natur besetzen, kann ein sterbender Druide, eine Dryas oder eine Hexe einen tabuisierten Fluch aussprechen und Samen in das eigene Fleisch pflanzen. Im Tod verwandelt sich ein Fluchträger in einen Dornenblut, anstatt der Zivilisation einen Fuß in Feld oder Wald zu lassen.",
      "Während der Leichnam zu übernatürlichem Pflanzenleben erblüht, umschlingt der Dornenblut schnell die Umgebung, unbezähmbar durch Feuer oder Klinge. Die Pflanzen umhüllen alles in ihrem Weg, bis die Stätte von Leben befreit ist. Sie lassen die eindringenden Leichen verrotten und der Fluchträger verbleibt neben diesen Opfern, seine Knochen mit Ranken verflochten, die bereit sind erneut aufzusteigen, sollten Eindringlinge je zurückkehren."
    ],
    besonderheiten: [
      { name: "Leichenzurückziehen (1/Tag)", beschreibung: "Der Dornenblut ist eine Masse dicker, dorniger Ranken, die aus einem mittelgroßen humanoiden Leichnam wachsen. Wenn der Dornenblut auf 0 Trefferpunkte reduziert wird, wird er stattdessen auf 1 Trefferpunkt reduziert und zieht sich in den Leichnam zurück. Der Dornenblut wird bis zum Ende seines nächsten Zuges immun gegen jeden Schaden. Bis er eine lange Rast abschließt, wird seine Größe Mittelgroß, seine Geh- und Klettergeschwindigkeit werden 18 m, und er kann keine Würgeangriffe ausführen oder von der Eigenschaft Überwucherung profitieren." },
      { name: "Überwucherung", beschreibung: "Der Dornenblut kann seine Ranken durch einen Raum so schmal wie 2,5 cm bewegen, ohne sich zusammenzuquetschen. Der Dornenblut kann den Raum einer anderen Kreatur besetzen und umgekehrt." },
      { name: "Übernatürliche Resistenz", beschreibung: "Der Dornenblut hat Vorteil auf Rettungswürfe gegen Kräfte, Zauber und andere übernatürliche Effekte." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Dornenblut führt vier Angriffe mit Rankenzerfetzer, Würgen oder beidem aus." },
      { name: "Rankenzerfetzer", beschreibung: "Nahkampfwaffenangriff: +12, Reichweite 9 m, ein Ziel. Treffer: 20 (4W6+6) Wuchtschaden plus 11 (2W10) Stichschaden, und das Ziel wird bis zu 9 m auf den Dornenblut zugezogen." },
      { name: "Würgen", beschreibung: "Nahkampfwaffenangriff: +12, Reichweite 0 m, ein Ziel im Raum des Dornenbluts. Treffer: 20 (4W6+6) Stichschaden, und das Ziel ist in dornigen Ranken verstrickt. Während es verstrickt ist, ist das Ziel Festgesetzt und bewegt sich mit dem Dornenblut, kann nicht außerhalb seines Raumes sehen und nimmt zu Beginn jedes seiner Züge 20 (4W6+6) Stichschaden. Das Ziel oder eine andere Kreatur innerhalb von 1,5 m kann ihre Aktion nutzen, um 20 (4W6+6) Hiebschaden zu nehmen und einen STR-Wurf SG 20 abzulegen, wobei das Ziel bei Erfolg befreit wird." },
      { name: "Aus Leben, Blitz (2/Tag)", beschreibung: "Der Dornenblut muss mindestens eine verstrickte Kreatur haben, um diese Aktion zu nutzen. Jede vom Dornenblut verstrickte Kreatur muss einen KON-Rettungswurf SG 20 ablegen. Misslungen: 55 (10W10) Nekrotischschaden. Erfolg: halber Schaden. Dann schießt der Dornenblut einen Blitzstrahl auf jeden Feind innerhalb von 18 m, der nicht von ihm verstrickt ist. Jedes Ziel muss einen GES-Rettungswurf SG 20 ablegen. Misslungen: 55 (10W10) Blitzschaden. Erfolg: halber Schaden." }
    ],
    bonusaktionen: [
      { name: "Du gehörst mir", beschreibung: "Der Dornenblut bewegt eine verstrickte Kreatur in einen Raum, der vom Dornenblut besetzt ist und nicht auch von einer anderen Kreatur oder einem Objekt besetzt wird." }
    ],
    reaktionen: [
      { name: "Feindliche Wurzeln", beschreibung: "Wenn ein Feind seinen Zug im Raum des Dornenbluts beendet, versucht der Dornenblut, ihn zu Fall zu bringen. Das Ziel muss einen GES-Rettungswurf SG 17 bestehen oder wird Liegend." }
    ],
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
    bild: "flee-mortals/drachling.png",
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
    sprachen: ["Gemeinsprache", "Drakonisch"],
    umgebung: ["Arktis", "Gebirge", "Ruinen"],
    bild: "flee-mortals/durixaviinox.png",
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
    name: "Echsenmensch-Jäger",
    art: "Humanoid",
    unterart: "Echsenmensch",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 0,
    xp: 0,
    rk: 15,
    ruestungstyp: "mittelschwere Rüstung",
    tp: 0,
    tp_wuerfel: null,
    bewegung: { "Gehen": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 16, DEX: 10, CON: 10, INT: 10, WIS: 14, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 12,
    sprachen: ["Drakisch", "Gemeinsprache"],
    umgebung: ["Sumpf", "Dschungel", "Gewässer"],
    bild: "flee-mortals/echsenmensch-jaeger.png",
    beschreibung: ["Der Echsenmensch-Jäger ist ein Gefolgsmann (Retainer), der einem erfahrenen Helden dient. Er kämpft mit einem Großschwert und nutzt seine amphibischen Fähigkeiten, um in Sümpfen, Dschungeln und Küstengebieten zu navigieren. Mit wachsender Erfahrung seines Mentors entwickelt er sich zu einem vielseitigen Nahkämpfer."],
    besonderheiten: [
      { name: "Gefolgsmann", beschreibung: "Der Echsenmensch-Jäger ist ein Gefolgsmann. Seine Trefferpunkte betragen 8 × die Stufe seines Mentors. Er fügt allen Rettungswürfen seinen Übungsbonus (ÜB) hinzu, der dem seines Mentors entspricht. Alle mit ÜB angegebenen Angriffs- und Schadenswerte skalieren entsprechend." },
      { name: "Amphibisch", beschreibung: "Der Echsenmensch-Jäger kann Luft und Wasser atmen." },
      { name: "Stufe 3: Reißender Biss", beschreibung: "Der Echsenmensch-Jäger erhält als Bonusaktion den Reißenden Biss: Nahkampfwaffenangriff: +ÜB zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 1W6+3 Stichschaden. Hat der Jäger das Ziel in diesem Zug bereits mit dem Großschwert getroffen, hat er Vorteil auf diesen Angriffswurf." },
      { name: "Stufe 5: Peitschender Schwanz", beschreibung: "Der Echsenmensch-Jäger erhält eine Reaktion — Peitschender Schwanz: Wenn eine Kreatur innerhalb von 1,5 m den Jäger angreift, kann er mit seinem Schwanz ausschlagen. Das Ziel muss einen STR-Rettungswurf SG (8 + ÜB + STR-Mod.) ablegen. Misslungen: Das Ziel wird bis zu 3 m weggestoßen und ist bis zum Ende seines nächsten Zuges Festgesetzt." },
      { name: "Stufe 7: Hypnotischer Schlaf", beschreibung: "Der Echsenmensch-Jäger kann als Aktion eine Kreatur innerhalb von 9 m mit einer hypnotischen Wiegenbewegung seiner Augen bezaubern (Konzentration, bis zu 1 Min.). Das Ziel muss einen WEI-Rettungswurf SG (8 + ÜB + WEI-Mod.) ablegen. Misslungen: Das Ziel fällt bewusstlos. Erleidet es Schaden, endet der Effekt sofort." }
    ],
    aktionen: [
      { name: "Signaturangriff: Großschwert", beschreibung: "Nahkampfwaffenangriff: +ÜB zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 2W6+ÜB Hiebschaden. (ÜB = Übungsbonus des Mentors)" }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Echsenmensch-Schuppenzahn",
    art: "Humanoid",
    unterart: "Echsenmensch",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 0.5,
    xp: 100,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 26,
    tp_wuerfel: "4W8+8",
    bewegung: { "Gehen": "9 m", "Schwimmen": "9 m" },
    attribute: { STR: 15, DEX: 12, CON: 15, INT: 10, WIS: 10, CHA: 11 },
    rettungswuerfe: {},
    fertigkeiten: { "Athletik": 4, "Überleben": 2 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 10,
    sprachen: ["Drakisch", "Gemeinsprache"],
    umgebung: ["Sumpf", "Dschungel", "Küste"],
    bild: "flee-mortals/echsenmensch-schuppenzahn.png",
    beschreibung: ["Schuppenzähne sind die muskelbepackten Nahkämpfer der Echsenmensch-Kriegerbanden. Mit ihrem peitschenden Schwanz fixieren sie Feinde und zermahlen sie anschließend mit ihrem kräftigen Biss."],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Schuppenzahn kann Luft und Wasser atmen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Schuppenzahn führt einen Peitschenden-Schwanz-Angriff und einen Reißenden-Biss-Angriff aus." },
      { name: "Peitschender Schwanz", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W8+2) Hiebschaden, und das Ziel ist Gegriffen (Entkommen SG 12). Bis der Griff endet, kann der Schuppenzahn das Ziel einmal pro Zug bis zu 3 m in eine beliebige freie Richtung bewegen." },
      { name: "Reißender Biss", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W6+2) Stichschaden. Der Schuppenzahn hat Vorteil auf diesen Angriffswurf, wenn das Ziel Gegriffen ist." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Echsenflucht (1/Tag)", beschreibung: "Wenn der Schuppenzahn von einem Angriff getroffen wird, kann er sich bis zur Hälfte seiner Bewegungsweite bewegen, ohne dabei Gelegenheitsangriffe zu provozieren." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Echsenmensch-Terrorsaurier",
    art: "Humanoid",
    unterart: "Echsenmensch",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 4,
    xp: 1100,
    rk: 14,
    ruestungstyp: "natürliche Rüstung (RK 16 beim Fliegen)",
    tp: 75,
    tp_wuerfel: "10W8+30",
    bewegung: { "Gehen": "9 m", "Fliegen": "15 m", "Schwimmen": "9 m" },
    attribute: { STR: 18, DEX: 16, CON: 16, INT: 10, WIS: 12, CHA: 16 },
    rettungswuerfe: {},
    fertigkeiten: { "Athletik": 6, "Wahrnehmung": 3, "Heimlichkeit": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 13,
    sprachen: ["Drakisch", "Gemeinsprache"],
    umgebung: ["Sumpf", "Dschungel", "Küste", "Wald"],
    bild: "flee-mortals/echsenmensch-terrorsaurier.png",
    beschreibung: ["Terrorsaurier sind die furchterregenden fliegenden Jäger der Echsenmensch-Stämme. Sie überwältigen Feinde mit Geschwindigkeit und Überraschung — mal stoßen sie aus der Luft herab, mal tauchen sie aus dem Wasser auf. Ihre schuppige Haut wird beim Fliegen noch widerstandsfähiger, und ihr Blasrohr liefert lähmende Gifte aus sicherer Entfernung."],
    besonderheiten: [
      { name: "Luftbeweglichkeit", beschreibung: "Solange der Terrorsaurier fliegt, beträgt seine Rüstungsklasse 16." },
      { name: "Amphibisch", beschreibung: "Der Terrorsaurier kann Luft und Wasser atmen." },
      { name: "Anlaufstart", beschreibung: "Bewegt sich der Terrorsaurier mindestens 9 m gerade auf ein Ziel zu, bevor er springt, hat er Vorteil auf STR(Athletik)-Proben für diesen Sprung und die Sprungweite wird um 6 m verlängert." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Terrorsaurier führt einen Biss-Angriff und einen Glefe-Angriff aus." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W8+4) Stichschaden." },
      { name: "Glefe", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 3 m, ein Ziel. Treffer: 9 (1W10+4) Hiebschaden." },
      { name: "Blasrohr (Aufladung 6)", beschreibung: "Distanzwaffenangriff: +5, Reichweite 9/36 m, ein Ziel. Treffer: 1 Stichschaden, und das Ziel muss einen KON-Rettungswurf SG 13 ablegen. Misslungen: 7 (2W6) Giftschaden und das Ziel ist bis zum Ende seines nächsten Zuges Vergiftet. Bei Erfolg: halber Schaden und nicht Vergiftet." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Echsenflucht (1/Tag)", beschreibung: "Wenn der Terrorsaurier von einem Angriff getroffen wird, kann er sich bis zur Hälfte seiner Bewegungsweite bewegen, ohne dabei Gelegenheitsangriffe zu provozieren." },
      { name: "Verschlagener Rückzug", beschreibung: "Wenn ein Angriff den Terrorsaurier verfehlt, kann er sich bis zu seiner vollen Bewegungsweite bewegen, ohne dabei Gelegenheitsangriffe zu provozieren." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Edelsteingallert",
    art: "Schlick",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 9,
    xp: 5000,
    rk: 10, ruestungstyp: null,
    tp: 152, tp_wuerfel: "16W10+64",
    bewegung: { "Gehen": "7,5 m", "Klettern": "7,5 m" },
    attribute: { STR: 18, DEX: 10, CON: 18, INT: 6, WIS: 14, CHA: 4 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 4 },
    schadensresistenzen: ["Säure", "Wucht (nichtmagisch)", "Stich (nichtmagisch)", "Hieb (nichtmagisch)"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Taub", "Erschöpfung", "Verängstigt", "Niedergeworfen"],
    sinne: ["Blindsinn 36 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Höhle", "Unterirdisch"],
    bild: "flee-mortals/edelsteingallert.png",
    beschreibung: [
      "Häufig in Höhlen anzutreffen, in denen natürliche Kristalle wachsen, scheiden Edelsteingallerts eine Verdauungssäure ab, die Gestein abbaut und es ihnen ermöglicht, sich von den resultierenden Mineralien zu ernähren. Ihre Ernährung verleiht ihnen einen schimmernden Schein, und ihre Körper reflektieren oft die Farben der Kristalle, von denen sie sich ernähren.",
      "Obwohl sich diese Schleime nicht von anderen Kreaturen ernähren, sind Edelsteingallerts äußerst territorial und greifen Eindringlinge in ihre Reviere ohne Zögern an.",
      "Kristallmimikry. Ein ruhender Edelsteingallert ähnelt einer natürlichen Kristallformation — und erscheint Entdeckern oft wertvoll. Wenn solche Eindringlinge näher kommen, wird ihre wahre Natur schnell klar, wenn sie mit langen kristallbestückten Pseudopoden ausholen.",
      "Psionische Organismen. Edelsteingallerts sind auf psychische Energien eingestimmt und können Impulse aussenden, die mit den Gedanken anderer Kreaturen resonieren. Diese Impulse können genutzt werden, um einfache Konzepte wie 'Nahrung' oder 'Gefahr' zu kommunizieren."
    ],
    besonderheiten: [
      { name: "Formlos", beschreibung: "Der Gallert kann sich durch einen Spalt bewegen, der nur 2,5 cm breit ist, ohne sich zu quetschen." },
      { name: "Falsche Erscheinung", beschreibung: "Solange der Gallert reglos bleibt, ist er von einer natürlichen Kristallformation nicht zu unterscheiden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Gallert führt zwei Pseudopod-Angriffe aus." },
      { name: "Pseudopod (Nur Wahre Form)", beschreibung: "Nahkampfwaffenangriff: +8 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 18 (4W6+4) Stichschaden." },
      { name: "Kristalliner Splitter (Nur Kristalline Form)", beschreibung: "Der Gallert zerschmettert seine gehärtete Außenschicht, kehrt in seine wahre Form zurück und schleudert Kristallsplitter in alle Richtungen. Jede Kreatur innerhalb von 3 m muss einen GES-Rettungswurf SG 16 ablegen und erleidet bei einem Fehlschlag 36 (8W8) Stichschaden, bei einem Erfolg die Hälfte. Edelsteingallerts sind immun gegen diesen Schaden." }
    ],
    bonusaktionen: [
      { name: "Verhärten", beschreibung: "Der Gallert verwandelt sich in eine psionisch gehärtete kristalline Form oder zurück in seine wahre Form. In kristalliner Form steigt seine RK auf 20, seine Bewegungsweite wird zu 0, er kann keine Pseudopod-Angriffe ausführen, hat Nachteil bei GES-Rettungswürfen und erhält Verwundbarkeit gegen Donnerschaden." }
    ],
    reaktionen: [
      { name: "Reaktives Zersplittern (Nur Kristalline Form)", beschreibung: "Wenn der Gallert Donnerschaden erleidet, verwendet er Kristalliner Splitter." }
    ],
    legendaere_aktionen: null,
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
    sprachen: ["Gemeinsprache", "Ignisch", "Terranisch"],
    umgebung: ["Gebirge", "Höhle", "Andere Ebenen"],
    bild: "flee-mortals/eisenkraft.png",
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
    name: "Empyräischer Hirsch",
    art: "Himmlisch",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Typischerweise Neutral Gut",
    cr: 13,
    xp: 10000,
    rk: 20,
    ruestungstyp: "natürliche Rüstung",
    tp: 187,
    tp_wuerfel: "22W10+66",
    bewegung: { "Gehen": "18 m" },
    attribute: { STR: 24, DEX: 16, CON: 16, INT: 18, WIS: 20, CHA: 20 },
    rettungswuerfe: { GES: 8, WEI: 10, CHA: 10 },
    fertigkeiten: { "Athletik": 12, "Einblick": 10, "Wahrnehmung": 10 },
    schadensresistenzen: ["Nekrotisch", "Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Strahlend"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Erschöpft", "Verängstigt"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 20,
    sprachen: ["alle Sprachen", "Telepathie 36 m"],
    umgebung: ["Wald", "Feenwildnis"],
    bild: "flee-mortals/empräischer_hirsch.png",
    beschreibung: ["Als himmlische Hüter des Waldes erscheinen Empyräische Hirsche nur, um Waldbewohner vor großen Bedrohungen zu schützen oder Sterbliche vor bevorstehenden Katastrophen zu warnen. Ihr weißes Fell ist blau getupft, und ihre Augen leuchten mit der Dunkelheit der Nacht.", "Diejenigen, die einen Empyräischen Hirsch beeindrucken — typischerweise durch den Schutz des Waldes — dürfen ihm eine Frage stellen, die er nach bestem Wissen wahrheitsgemäß beantwortet. Zwischen seinen Geweihen kann er schimmernde Visionen der Gegenwart oder Ausblicke in die Zukunft zeigen. Seine Hörner leuchten golden, wenn er einem Verbündeten hilft, und weiß, wenn er Informationen empfängt."],
    besonderheiten: [
      { name: "Übernatürliche Resistenz", beschreibung: "Der Hirsch hat Vorteil auf Rettungswürfe gegen Kräfte, Zauber und andere übernatürliche Effekte." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Hirsch führt drei Rammen- oder drei Lichtausbruch-Angriffe aus." },
      { name: "Rammen", beschreibung: "Nahkampfwaffenangriff: +12, Reichweite 3 m, ein Ziel. Treffer: 25 (4W8+7) Stichschaden." },
      { name: "Lichtausbruch", beschreibung: "Distanzzauberangriff: +10, Reichweite 36 m, ein Ziel. Treffer: 18 (3W8+5) Strahlenden Schaden, und das Ziel wird von goldenem Licht umhüllt. Angriffswürfe gegen das Ziel haben Vorteil bis zum Beginn des nächsten Zuges des Hirsches." },
      { name: "Sternenruf (1/Tag)", beschreibung: "Der Hirsch ruft einen magischen Sternenschauer auf einen 18 m langen und 1,5 m breiten Bereich innerhalb von 36 m herab. Jeder Feind im Bereich muss einen GES-Rettungswurf SG 18 ablegen. Misslungen: 28 (8W6) Strahlenden Schaden. Bei Erfolg: halber Schaden. Jede andere willige Kreatur im Bereich erhält 15 TP zurück. Die Sterne bilden dann eine 3 m hohe, undurchsichtige Wand aus strahlendem Licht im Bereich. Kreaturen im Bereich der Wand werden durch den kürzesten Weg herausgeschoben (sie wählen, auf welcher Seite sie enden). Die Wand hält 1 Minute an oder bis der Hirsch Kampfunfähig wird oder stirbt. Jeder Feind, der die Lichtwand zum ersten Mal in einem Zug betritt, muss einen KON-Rettungswurf SG 18 ablegen. Misslungen: 14 (4W6) Strahlenden Schaden. Bei Erfolg: halber Schaden." }
    ],
    bonusaktionen: [
      { name: "Sternenlichteinfusion", beschreibung: "Der Hirsch infundiert strahlende Energie in eine willige Kreatur innerhalb von 18 m, die er sehen kann. Diese Kreatur fügt mit Waffenangriffen bis zum Beginn des nächsten Zuges des Hirsches zusätzlich 5 Strahlenden Schaden zu." }
    ],
    reaktionen: [
      { name: "Naturschild", beschreibung: "Wenn der Hirsch oder eine Kreatur innerhalb von 9 m, die er sehen kann, Schaden erleidet, erschafft der Hirsch magisch eine schützende Barriere um diese Kreatur. Die Barriere reduziert den erlittenen Schaden um 20 und verschwindet dann." }
    ],
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
    sprachen: ["Gemeinsprache", "Terranisch"],
    umgebung: ["Gebirge", "Höhle", "Unterirdisch", "Andere Ebenen"],
    bild: "flee-mortals/erdkraft.png",
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
    name: "Fäulnisengel",
    art: "Himmlisch",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Rechtschaffen Neutral",
    cr: 4,
    xp: 1100,
    rk: 15, ruestungstyp: "natürliche Rüstung",
    tp: 90, tp_wuerfel: "12W8+36",
    bewegung: { "Fliegen": "15 m (schwebend)" },
    attribute: { STR: 6, DEX: 16, CON: 17, INT: 8, WIS: 14, CHA: 19 },
    rettungswuerfe: { KON: 5, CHA: 6 },
    fertigkeiten: { "Wahrnehmung": 6 },
    schadensresistenzen: ["Nekrotisch", "Strahlung"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Flankiert", "Verängstigt"],
    sinne: ["Blindsinn 3 m", "Dunkelsicht 18 m"],
    passiveWahrnehmung: 16,
    sprachen: ["versteht Himmlisch, kann es aber nicht sprechen", "Telepathie (36 m)"],
    umgebung: ["Sumpf", "Ruinen", "Andere Ebenen"],
    bild: "flee-mortals/faeulnisengel.png",
    beschreibung: [
      "Fünf bis sechs Fuß groß, bewegen sich schwimmende schwarz-braune Pilze wie Quallen durch den Sumpf, ihre dreizehn beweglichen Augenstiele baumeln unter ihrem Hut. Diese Fäulnisengel sind tatsächlich Himmlische, die typischerweise Todesgöttern bei der Suche nach kürzlich Verstorbenen dienen. Die Berührung ihrer stielförmigen Rüsselfortsätze verursacht rasche Verwesung in organischem Material.",
      "Todes Reinigungskommando. Todesgötter entsenden Fäulnisengel, um alle Spuren einer Leiche aus der Welt zu entfernen, nachdem die Seele dieser Person aufgenommen wurde. Eine Leiche, die durch die Berührung eines Fäulnisengels verwest ist, kann nicht zum Leben erweckt, zu Untoten gemacht oder anderweitig übernatürlich beeinflusst werden. Die Götter erklären selten, warum eine bestimmte Leiche einen Fäulnisengel erfordert, und diese Engel fragen nicht.",
      "Ergebene Diener. Sobald ein Fäulnisengel zu einer Leiche entsandt wurde, kann ihn nichts außer dem Tod davon abbringen, seinen Auftrag zu erfüllen. Sollte ein Fäulnisengel bei seiner Arbeit unterbrochen werden, hat er freie Hand, die Unterbrechung auf jede erforderliche Weise zu behandeln, einschließlich der Vernichtung der störenden Kräfte."
    ],
    besonderheiten: [
      { name: "Vorbeifliegen", beschreibung: "Der Engel provoziert keine Gelegenheitsangriffe, wenn er aus der Reichweite eines Feindes fliegt." }
    ],
    aktionen: [
      { name: "Verwesendes Berühren", beschreibung: "Nahkampfwaffenangriff: +5 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 18 (4W8) Nekrotischer Schaden, oder wenn das Ziel eine Leiche oder ein Untoter ist, erhöht sich der Schaden auf 36 (8W8). Außerdem ist das Ziel für die nächsten 24 Stunden mit dem Tod gezeichnet. Eine Kreatur, die mit diesem Zeichen auf 0 Trefferpunkte fällt, scheitert sofort bei einem Todesrettungswurf. Dieser Effekt ist nicht kumulativ." }
    ],
    bonusaktionen: [
      { name: "Hypnotischer Strahl", beschreibung: "Eines der Augen des Engels schießt einen magischen Strahl auf eine Kreatur, die der Engel innerhalb von 18 m sehen kann. Das Ziel muss einen WEI-Rettungswurf SG 14 bestehen oder seine Reaktion verwenden, falls verfügbar, um sich so weit wie seine Bewegungsweite erlaubt auf den Engel zuzubewegen, wobei es offensichtlich gefährliches Gelände vermeidet." }
    ],
    reaktionen: [
      { name: "Strahlender Schwall", beschreibung: "Wenn der Engel von einem Angriff getroffen wird, gibt er eine Sporenwolke ab. Jede Kreatur innerhalb von 3 m des Engels muss einen KON-Rettungswurf SG 14 bestehen oder bis zum Ende des nächsten Zuges des Fäulnisengels Geblendet sein." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Faulbiest",
    art: "Tier",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 3,
    xp: 700,
    rk: 13,
    ruestungstyp: "natürliche Rüstung",
    tp: 76,
    tp_wuerfel: "9W10+27",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 19, DEX: 8, CON: 16, INT: 2, WIS: 12, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: [],
    passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Wald", "Feenwildnis"],
    bild: "flee-mortals/faulbiest.png",
    beschreibung: ["Das Faulbiest ist eine gesichtslose, pilzbedeckte Kreatur mit verschlungenen Hirschgeweihen und dem Körper eines Stiers. Im Wandern durch den Wald verdirbt es die Vegetation auf seinem Weg und schafft ein Netzwerk aus Pilzen und Verfall.", "Faulbieste leben in Herden und bevorzugen einen Teil des Waldes, solange sie ausreichend Platz haben. Pilzbasierte Pflanzenwesen koexistieren oft friedlich mit ihnen, da sie auf verfaulenden Böden gedeihen — manchmal treiben Pilze Faulbieste sogar in neue Gebiete."],
    besonderheiten: [
      { name: "Waldverfall", beschreibung: "Wenn das Faulbiest stirbt, setzt es einen Ausbruch infektiöser Luft frei. Jede Nicht-Pilz-Kreatur innerhalb von 1,5 m muss einen KON-Rettungswurf SG 13 ablegen oder erhält eine Erschöpfungsstufe und erkrankt an der Waldverfall-Krankheit. Eine infizierte Kreatur erhält bei Ausgabe von Trefferwürfeln oder nach einer langen Rast nur halb so viele TP zurück und kann ihre Erschöpfungsstufe nicht durch eine lange Rast senken. Nach jeder langen Rast muss sie einen KON-Rettungswurf SG 13 ablegen. Misslungen: weitere Erschöpfungsstufe. Erfolg: eine Erschöpfungsstufe verloren. Sinkt die Erschöpfungsstufe durch einen Erfolg unter 1, erholt sich die Kreatur von der Krankheit." },
      { name: "Faulspur", beschreibung: "Wenn das Faulbiest einen Raum verlässt, wird dieser für 24 Stunden für andere Kreaturen als Faulbieste zu schwerem Gelände. Wenn eine Nicht-Pilz-Kreatur diesen Raum zum ersten Mal in einem Zug betritt oder ihren Zug dort beginnt, muss sie einen KON-Rettungswurf SG 13 ablegen. Misslungen: 3 (1W6) Giftschaden. Bei Erfolg: halber Schaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Das Faulbiest führt zwei Angriffe aus: Schwächende Hörner, Verfaulende Hufe oder eine Kombination beider." },
      { name: "Schwächende Hörner", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W8+4) Stichschaden, und das Ziel hat bis zum Ende seines nächsten Zuges Nachteil auf KON-Rettungswürfe." },
      { name: "Verfaulende Hufe", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 3 m, ein Ziel. Treffer: 9 (2W4+4) Wuchtschaden, und das Ziel muss einen KON-Rettungswurf SG 13 bestehen oder erkrankt an der Waldverfall-Krankheit." }
    ],
    bonusaktionen: [
      { name: "Heilende Fäulnis (1/Tag)", beschreibung: "Das Faulbiest erhält 3 (1W6) TP zurück für jede Kreatur innerhalb von 18 m, die an der Waldverfall-Krankheit erkrankt ist." }
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
    sprachen: ["Gemeinsprache", "Ignisch"],
    umgebung: ["Gebirge", "Höhle", "Andere Ebenen"],
    bild: "flee-mortals/feuerkern.png",
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
    name: "Feuersteinmottenschwarm",
    art: "Elementar",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 11,
    xp: 7200,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 136,
    tp_wuerfel: "16W12+32",
    bewegung: { "Gehen": "6 m", "Klettern": "6 m", "Fliegen": "12 m" },
    attribute: { STR: 13, DEX: 20, CON: 15, INT: 1, WIS: 8, CHA: 1 },
    rettungswuerfe: { GES: 9 },
    fertigkeiten: { "Heimlichkeit": 9 },
    schadensresistenzen: ["Wucht", "Stich", "Hieb"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Flankiert", "Verängstigt", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend", "Fixiert", "Betäubt"],
    sinne: ["Blindsicht 4,5 m", "Dunkelsicht 18 m"],
    passiveWahrnehmung: 9,
    sprachen: [],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "flee-mortals/feuersteinmottenschwarm.png",
    beschreibung: [
      "Erkundet ein Abenteurer einen scheinbar verlassenen Turm und hört er ein endloses, leises Klappern wie tausende herabrieselnder Kieselsteine, könnte die Ruine von einem Feuersteinmottenschwarm bewohnt sein. Diese elementaren Insekten fressen im Laufe von Jahrhunderten Steinruinen. Ihre Flügel sind scharf und hart wie Feuerstein, und ihr Lebenszyklus wird in Jahrzehnten gemessen.",
      "Feuersteinmotten bleiben gerne monatelang nahezu reglos und ernähren sich Bissen für Bissen am Mauerwerk. Sie bewegen sich selten, wenn sie nicht gestört werden. Wenn sie jedoch auffliegen, müssen sie Stein weitaus schneller fressen, um ihre Energie zu erhalten.",
      "Der steinige Panzer der Motte bietet sowohl Schutz als auch Angriffskraft. Eine einzelne Feuersteinmotte ist für einen Humanoiden kaum eine Gefahr, doch Hunderte oder Tausende vorbeiflatternder Motten schlitzen Opfer in winzigen Schnitten in Stücke.",
      "Feuersteinmotten können natürliches Gestein fressen, bevorzugen aber konstruiertes Steinmauerwerk. Bleibt ein Befall über viele Jahre unkontrolliert, kann er ganze Gebäude zerstören. Die anpassungsfähigen Kreaturen fressen oft von unten nach oben und ruinieren langsam Steinkanäle, Verliese oder Keller, bis das gesamte Bauwerk einsturzgefährdet ist."
    ],
    besonderheiten: [
      { name: "Verdunkelnde Form", beschreibung: "Andere Kreaturen im Raum des Schwarms sind Geblendet." },
      { name: "Schrumpfen", beschreibung: "Wenn der Schwarm auf die Hälfte seiner Trefferpunkte reduziert wird, wird seine Größe Groß." },
      { name: "Steintarnung", beschreibung: "Der Schwarm hat Vorteil auf GES(Heimlichkeit)-Proben zum Verstecken in felsigem Gelände." },
      { name: "Schwarm", beschreibung: "Der Schwarm kann den Raum einer anderen Kreatur besetzen und umgekehrt, und der Schwarm kann sich durch jede Öffnung bewegen, die groß genug für ein winziges Insekt ist. Der Schwarm kann keine Trefferpunkte zurückgewinnen oder temporäre Trefferpunkte erhalten." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Schwarm führt drei Angriffe mit Flatterschneider aus." },
      { name: "Flatterschneider", beschreibung: "Nahkampfwaffenangriff: +9, Reichweite 0 m, ein Ziel im Raum des Schwarms. Treffer: 26 (6W6+5) Hiebschaden, oder 33 (8W6+5) Hiebschaden, wenn das Ziel ein aus Stein bestehendes Konstrukt ist oder ein Objekt trägt oder hält, das helles Licht ausstrahlt." }
    ],
    bonusaktionen: [
      { name: "Stein fressen", beschreibung: "Der Schwarm verzehrt ein normales Objekt oder eine Struktur innerhalb von 1,5 m, die hauptsächlich aus Stein besteht. Ist das Ziel ein Mittelgroßes oder kleineres Objekt, wird es vollständig verzehrt. Ist das Ziel eine Struktur oder ein Großes oder größeres Objekt, verzehrt der Schwarm einen 1,5-m-Würfel-Abschnitt davon." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Fleisch-Trauerling",
    art: "Untoter",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 95,
    tp_wuerfel: "10W10+40",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 18, DEX: 12, CON: 18, INT: 10, WIS: 12, CHA: 10 },
    rettungswuerfe: { STR: 7, KON: 7 },
    fertigkeiten: { "Athletik": 7, "Wahrnehmung": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Erschöpft"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 14,
    sprachen: ["versteht die Sprachen seines Schöpfers, kann aber nicht sprechen"],
    umgebung: ["Wald", "Ruinen", "Sumpf"],
    bild: "flee-mortals/fleisch_trauerling.png",
    beschreibung: [
      "Angetrieben von Trauer und Wut sind Trauerlings animierte Konglomerate aus Schmutz oder Fleisch, die die Heime ihrer Schöpfer verteidigen und Eindringlinge brutal angreifen, während sie unkontrolliert schluchzen. Sie drücken weitaus mehr Emotionen aus als viele andere untote Wächter, da ihre Erschaffer ihnen Traurigkeit und Verlust einhauchten.",
      "Vor Urzeiten schlossen sich Druiden zusammen, um der endlosen Ausbeutung der Natur durch humanoidische Expansion entgegenzuwirken. In ihrer Verzweiflung beschworen sie verbotene Riten, formten Körper aus den Überresten humanoidischer Katastrophen und hauchten ihnen nekrotische Energie ein. Fleisch, Erde und die Seelen in der Zerstörung verlorener Kreaturen verschmolzen mit der Trauer der Druiden zu den ersten Trauerlings.",
      "Ein Fleisch-Trauerling besteht aus verschiedenen Körperteilen von Tieren, Humanoiden und anderen Kreaturen — Opfer humanoidischer Expansion, sorgfältig zusammengenäht zu einer funktionalen, aber grotesken Form. Keine zwei Fleisch-Trauerlings sind gleich: Manche haben mehrere Köpfe, andere haben Arme, die aus langen Hälsen wachsen, oder Füße, die aus unpassenden Schultern herausragen."
    ],
    besonderheiten: [
      { name: "Grässliches Schluchzen", beschreibung: "Wenn ein Feind, der den Trauerling hören kann, seinen Zug innerhalb von 9 m des Trauerlings beginnt, muss er einen WEI-Rettungswurf SG 15 bestehen oder ist bis zum Beginn seines nächsten Zuges vor dem Trauerling Verängstigt. Eine Kreatur, die ihren Rettungswurf besteht, ist für 24 Stunden immun gegen das Grässliche Schluchzen aller Fleisch-Trauerlings." },
      { name: "Unveränderliche Form", beschreibung: "Der Trauerling ist immun gegen jede Macht, jeden Zauber oder Effekt, der seine Form verändern würde." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Trauerling führt zwei Schlag-Angriffe aus." },
      { name: "Schlag", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 1,5 m, ein Ziel. Treffer: 14 (3W6+4) Wuchtschaden. Ist das Ziel vor dem Trauerling Verängstigt, wird es zu Boden geworfen." },
      { name: "Qualvoller Aufschrei (Aufladung 5-6)", beschreibung: "Der Trauerling schreit mit unerträglichem Schmerz in einem 9-m-Kegel. Jede Kreatur in diesem Bereich, die ihn hören kann, muss einen KON-Rettungswurf SG 15 ablegen. Misslungen: Die Augen der Kreatur tränen unkontrollierbar; sie erleidet 16 (3W10) Psychischen Schaden und kann bis zum Ende ihres nächsten Zuges nichts sehen, das weiter als 1,5 m entfernt ist. Bei Erfolg: halber Schaden und kein weiterer Effekt." }
    ],
    bonusaktionen: [],
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
    sprachen: ["Gemeinsprache", "Drakonisch"],
    umgebung: ["Gebirge", "Höhle", "Andere Ebenen"],
    bild: "flee-mortals/forzaantirilys.png",
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
    name: "Fossiler Kryptiker",
    art: "Elementar",
    unterart: "Erde",
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Neutral",
    cr: 7,
    xp: 2900,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 127,
    tp_wuerfel: "15W8+60",
    bewegung: { "Gehen": "12 m", "Graben": "6 m" },
    attribute: { STR: 19, DEX: 14, CON: 18, INT: 12, WIS: 13, CHA: 10 },
    rettungswuerfe: { STR: 7, KON: 7 },
    fertigkeiten: {},
    schadensresistenzen: ["Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend"],
    sinne: ["Blindsicht 27 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Urtümlich"],
    umgebung: ["Höhle", "Unterirdisch"],
    bild: "flee-mortals/fossiler_kryptiker.png",
    beschreibung: ["Diese lebenden Fossil-Amalgame werden von Elementargeistern bewohnt und sind in Orten von überirdischer Schönheit mit einer Verbindung zur Elementarebene der Quintessenz zu finden — oft in Höhlen, die seit Äonen unberührt blieben oder deren Gänge von kostbaren Metalladern in exquisiten fraktalen Mustern durchzogen sind. Die Geister bewohnen die Fossilien von Kreaturen, die einst diese Stätten schützten, und setzen ihr Erbe fort.", "Fossil-Kryptiker variieren stark in ihrer gewählten Gestalt, enthalten jedoch alle ein zentrales Fossilbündel auf einer wirbelnden Stein- und Metallsäule. Mit formbaren Gliedern aus ihrem erdigen Kern bewegen sie sich mit unheimlicher Schnelligkeit. Archäologen, Bergleute und andere, die das Territorium eines Kryptikers stören, werden zu Staub gemahlen und in seine Form selbst eingearbeitet."],
    besonderheiten: [
      { name: "Drehender Rumpf", beschreibung: "Liegende Kreaturen können keine Gelegenheitsangriffe gegen den Kryptiker ausführen, und er kann sich durch Räume liegender Kreaturen bewegen. Das erste Mal pro Zug, wenn der Kryptiker den Raum eines liegenden Feindes durchquert, erleidet dieser 7 (1W6+4) Wuchtschaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Kryptiker führt zwei Rempeln-Angriffe aus und setzt Steinknochensturm ein." },
      { name: "Rempeln", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Wuchtschaden." },
      { name: "Steinknochensturm", beschreibung: "Der Kryptiker zerbricht seinen Körper und treibt einen Steinhagel in einer 1,5 m breiten und 9 m langen Linie, die von seinem Raum ausgeht. Jede Kreatur im Bereich muss einen STR-Rettungswurf SG 15 ablegen. Misslungen: 18 (4W8) Wuchtschaden und Liegend. Bei Erfolg: halber Schaden, nicht liegend. Der Kryptiker formiert sich dann in einem freien Raum innerhalb des Linienbereichs neu." },
      { name: "Splitterstein (Aufladung 6)", beschreibung: "Der Kryptiker gräbt sich bis zur Hälfte seiner Bewegungsweite. Endet diese Bewegung innerhalb von 1,5 m zur Oberfläche, kann er durch sie hindurchbrechen. Jede andere Kreatur innerhalb von 6 m muss einen GES-Rettungswurf SG 15 ablegen. Misslungen: 36 (8W8) Wuchtschaden. Bei Erfolg: halber Schaden." }
    ],
    bonusaktionen: [
      { name: "Steinverschiebung", beschreibung: "Der Kryptiker verschiebt den Boden unter einer Kreatur oder einem Objekt innerhalb von 9 m, das den Boden berührt. Das Ziel muss einen GES-Rettungswurf SG 15 bestehen oder wird bis zu 4,5 m horizontal bewegt. Objekte schlagen diesen Rettungswurf automatisch fehl." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
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
    sprachen: ["Aquanisch", "Gemeinsprache", "sowie die Sprachen einer durch Vereiste Spiegelung gespiegelten Kreatur"],
    umgebung: ["Arktis", "Gebirge", "Andere Ebenen"],
    bild: "flee-mortals/frostkern.png",
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
    name: "Gedankentöter",
    art: "Aberration",
    unterart: "Synlirii-Schöpfung",
    groesse: "Klein",
    gesinnung: "Typischerweise Rechtschaffen böse",
    cr: 2,
    xp: 450,
    rk: 12,
    ruestungstyp: null,
    tp: 45,
    tp_wuerfel: "10W6+10",
    bewegung: { "Gehen": "3 m", "Fliegen": "9 m" },
    attribute: { STR: 14, DEX: 15, CON: 12, INT: 16, WIS: 15, CHA: 14 },
    rettungswuerfe: {},
    fertigkeiten: { "Täuschung": 4, "Heimlichkeit": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Tiefensprache", "Tiefengemein", "Telepathie 36 m"],
    umgebung: ["Unterirdisch", "Stadt"],
    bild: "flee-mortals/gedankentoeter.png",
    beschreibung: ["Schwebende Klauenhirne mit einer nachgezogenen Wirbelsäule und freiliegenden Nerven, Gedankentöter dienen den Lautlosen Sprechern als Haustiere und Schergen. Diese formlosen Parasiten zwingen sich in den Körper eines Humanoiden und ersetzen sein Nervensystem durch eigenes Gewebe. Am Ende kennt der Gedankentöter alles, was das Opfer wusste, und kann den Körper steuern — ein perfekter Spion."],
    besonderheiten: [
      { name: "Formlos", beschreibung: "Der Gedankentöter kann sich durch einen Spalt von 2,5 cm Breite bewegen, ohne sich zu quetschen." },
      { name: "Psionische Immunität", beschreibung: "Der Gedankentöter wird von psionischen Kräften Lautloser Sprecher nicht beeinflusst, es sei denn, er wünscht dies." }
    ],
    aktionen: [
      { name: "Klauen", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 7 (2W4+2) Hiebschaden plus 7 (2W6) Psychischer Schaden. Ist das Ziel Mittelgroß oder kleiner, wird es Gepackt (Befreiungs-SG 12)." },
      { name: "Verdeckter Schlag", beschreibung: "Fernkraftzauberangriff: +5, Reichweite 9 m, eine Kreatur. Treffer: 13 (3W6+3) Psychischer Schaden, und der Gedankentöter ist bis zum Ende seines nächsten Zuges für das Ziel Unsichtbar." },
      { name: "Gedankenlöschung", beschreibung: "Ein Humanoid, der vom Gedankentöter gepackt wird, muss einen STR-Rettungswurf SG 12 bestehen, oder der Gedankentöter dringt in seinen Körper ein. Solange er darin ist, genießt er totale Deckung gegen Effekte von außen und kann als einzige Aktion den Körper verlassen (tritt in einem freien Raum innerhalb von 1,5 m aus). Beendet ein Humanoid seinen Zug mit dem Gedankentöter in seinem Inneren, muss er einen KON-Rettungswurf SG 13 ablegen. Misslungen: 10 Nekrotischen Schaden. Wird er auf 0 TP reduziert, stirbt er, und der Gedankentöter übernimmt den Körper, der TP in Höhe des TP-Maximums des Humanoiden zurückerhält. Der Gedankentöter behält seine INT-, WEI- und CHA-Werte, seine Sprachen und seine Telepathie; ansonsten übernimmt er alle Statistiken des Ziels und kennt sein gesamtes Wissen, Zauber, Klassenmerkmale und Sprachen. Fällt der übernommene Körper auf 0 TP, muss der Gedankentöter ihn verlassen. Eine Kreatur mit einer scharfen Waffe in Reichweite eines befallenen Humanoiden kann eine Aktion aufwenden, um den Gedankentöter zu entfernen (ggf. Angriffswurf gegen RK des Wirts bei unwilligem Wirt). Treffer: 11 (2W10) Hiebschaden am Wirt und WEI(Medizin)-Probe SG 15. Erfolg: Gedankentöter entfernt. Misslungen: Wurde der Wirt dadurch auf 0 TP gebracht, tötet der Gedankentöter ihn; andernfalls kein Effekt." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Gedankentöter-Welpe",
    art: "Aberration",
    unterart: "Synlirii-Schöpfung",
    groesse: "Klein",
    gesinnung: "Typischerweise Rechtschaffen böse",
    cr: 2,
    xp: 90,
    rk: 12,
    ruestungstyp: null,
    tp: 9,
    tp_wuerfel: null,
    bewegung: { "Gehen": "3 m", "Fliegen": "9 m" },
    attribute: { STR: 10, DEX: 14, CON: 11, INT: 14, WIS: 12, CHA: 12 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Tiefensprache", "Tiefengemein", "Telepathie 36 m"],
    umgebung: ["Unterirdisch"],
    bild: "flee-mortals/gedankentoeter_welpe.png",
    beschreibung: ["Minderkräftige Varianten des Gedankentöters, die von Lautlosen Sprechern in großer Zahl gezüchtet werden. Obwohl sie selbst keinen Körper bewohnen können, untergraben mehrere Welpen gemeinsam die psionische Widerstandskraft ihrer Feinde und machen sie für die Kräfte der Synlirii anfälliger."],
    besonderheiten: [
      { name: "Formlos", beschreibung: "Der Welpe kann sich durch einen Spalt von 2,5 cm Breite bewegen, ohne sich zu quetschen." },
      { name: "Scherge", beschreibung: "Erleidet der Welpe Schaden durch einen Angriff oder einen misslungenen Rettungswurf, sinken seine TP sofort auf 0. Erleidet er Schaden durch einen anderen Effekt, stirbt er, wenn der Schaden seinem TP-Maximum entspricht oder es überschreitet; andernfalls erleidet er keinen Schaden." },
      { name: "Psionische Immunität", beschreibung: "Der Welpe wird von psionischen Kräften Lautloser Sprecher nicht beeinflusst, es sei denn, er wünscht dies." },
      { name: "Resistenzabbau", beschreibung: "Wenn ein Feind innerhalb von 1,5 m von drei oder mehr Welpen einen Rettungswurf gegen eine psionische Kraft oder einen psionischen Effekt ablegt, erhält er einen Malus auf diesen Rettungswurf in Höhe der Anzahl der Welpen innerhalb von 1,5 m von ihm." }
    ],
    aktionen: [
      { name: "Klauen (Gruppenangriff)", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 2 Hiebschaden." }
    ],
    bonusaktionen: [],
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
    bild: "flee-mortals/gnoll_abgrundbeschwoerer.png",
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
    bild: "flee-mortals/gnoll_knochenspalter.png",
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
    bild: "flee-mortals/gnoll_marauder.png",
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
    name: "Goblin-Assassine",
    art: "Humanoid",
    unterart: "Goblin",
    groesse: "Klein",
    gesinnung: "Beliebige Gesinnung",
    cr: 0.5,
    xp: 100,
    rk: 15,
    ruestungstyp: "Nietelederpanzer",
    tp: 16,
    tp_wuerfel: "3W6+6",
    bewegung: { "Gehen": "9 m", "Klettern": "6 m" },
    attribute: { STR: 8, DEX: 16, CON: 14, INT: 10, WIS: 10, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache", "Goblinisch"],
    umgebung: ["Höhle", "Wald", "Ruinen", "Hügel"],
    bild: "flee-mortals/goblin_assasssine.png",
    beschreibung: [
      "Goblin-Assassinen operieren als Schattenjäger, die durch Dunkelheit und Verwirrung ideale Bedingungen für tödliche Meuchelangriffe schaffen. Mit ihrer Fähigkeit, magische Dunkelheit heraufzubeschwören, aus der selbst Dunkelsicht keinen Ausweg bietet, treffen sie aus dem Verborgenen – und hinterlassen Wunden, die weiterbluten, bis jemand eingreift."
    ],
    besonderheiten: [
      { name: "Meuchelangriff", beschreibung: "Wenn die Assassine Vorteil beim Angriffswurf gegen eine Kreatur hat, die kein Konstrukt oder Untoter ist, verursachen ihre Angriffe 3 (1W6) zusätzlichen Schaden und versetzen das Ziel in eine blutende Wunde, die anhält, bis die blutende Kreatur mindestens 1 TP zurückerhält. Eine blutende Kreatur verliert zu Beginn ihres Zuges 2 TP für jede blutende Wunde, die sie hat. Jede Kreatur, die das Ziel erreichen kann, kann eine Aktion verwenden, um alle Wunden des Ziels zu stillen und den Effekt zu beenden." },
      { name: "Gewandt", beschreibung: "Die Assassine löst keine Gelegenheitsangriffe aus, wenn sie sich aus der Reichweite eines Feindes herausbewegt." }
    ],
    aktionen: [
      { name: "Krummschwert", beschreibung: "Nahkampfwaffenangriff: +5, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W6+3) Hiebschaden." },
      { name: "Dolch", beschreibung: "Nahkampf- oder Distanzangriff: +5, Reichweite 1,5 m oder 6/18 m, ein Ziel. Treffer: 5 (1W4+3) Stichschaden." },
      { name: "Schatten herbeirufen (1/Tag)", beschreibung: "Eine 3-m-Radius-Sphäre magischer Dunkelheit strahlt von einem Punkt aus, den die Assassine sehen kann, für 1 Minute. Die Dunkelheit breitet sich um Ecken aus. Außer der Assassine selbst kann keine Kreatur – auch nicht mit Dunkelsicht – durch diese Dunkelheit sehen, und gewöhnliches Licht erhellt sie nicht. Zu Beginn ihres Zuges kann die Assassine die Dunkelheit bis zu 9 m zu einem Punkt bewegen, den sie sehen kann (keine Aktion nötig). Erleidet die Assassine Schaden, endet der Effekt." }
    ],
    bonusaktionen: [
      { name: "Schleichen", beschreibung: "Die Assassine ergreift die Verbergen-Aktion." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Goblin-Fluchspucker",
    art: "Humanoid",
    unterart: "Goblin",
    groesse: "Klein",
    gesinnung: "Beliebige Gesinnung",
    cr: 1,
    xp: 200,
    rk: 15,
    ruestungstyp: "Lederrüstung und Schild",
    tp: 27,
    tp_wuerfel: "5W6+10",
    bewegung: { "Gehen": "9 m", "Klettern": "6 m" },
    attribute: { STR: 8, DEX: 14, CON: 14, INT: 10, WIS: 10, CHA: 15 },
    rettungswuerfe: { WEI: 2 },
    fertigkeiten: { "Heimlichkeit": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache", "Goblinisch"],
    umgebung: ["Höhle", "Wald", "Ruinen", "Hügel"],
    bild: "flee-mortals/goblin_fluchspucker.png",
    beschreibung: [
      "Goblin-Fluchspucker sind mystisch begabte Strategen, die Feinde mit Flüchen und Bann lähmen, während sie eigene Verbündete gezielt herbeiteleportieren. Feige, aber gerissen, lenken sie im Notfall Schläge auf ihre eigenen Gefolgsleute um – Hauptsache, sie selbst bleiben unversehrt."
    ],
    besonderheiten: [
      { name: "Gewandt", beschreibung: "Der Fluchspucker löst keine Gelegenheitsangriffe aus, wenn er sich aus der Reichweite eines Feindes herausbewegt." }
    ],
    aktionen: [
      { name: "Giftige Berührung (Zaubertrick)", beschreibung: "Nahkampf- oder Distanzzauberangriff: +4, Reichweite 1,5 m oder 9 m, ein Ziel. Treffer: 7 (2W6) Giftschaden, und das Ziel muss einen KON-Rettungswurf SG 12 bestehen oder ist für 1 Minute vergiftet (Rettungswurf am Ende des Zuges erlaubt)." },
      { name: "Morschknochenbann (Zaubertrick)", beschreibung: "Der Fluchspucker wählt eine Kreatur, die er innerhalb von 18 m sehen kann. Die Knochen des Ziels werden bis zum Ende seines nächsten Zuges von Schmerzen gepeinigt. Wenn das Ziel sich das erste Mal willentlich bewegt oder eine Aktion, Bonusaktion oder Reaktion ausführt, bevor dies geschieht, muss es einen KON-Rettungswurf SG 12 bestehen oder erleidet 9 (2W8) Nekrotischen Schaden." },
      { name: "Zu mir!", beschreibung: "Der Fluchspucker wählt bis zu zwei willige Kreaturen, die er innerhalb von 9 m sehen kann. Jede Kreatur wird in einen freien Raum innerhalb von 1,5 m des Fluchspuckers teleportiert." },
      { name: "Schwindelbann (2/Tag; Zauber des 1. Grades)", beschreibung: "Der Fluchspucker wählt eine Kreatur, die er innerhalb von 18 m sehen kann. Das Ziel muss einen WEI-Rettungswurf SG 12 bestehen. Bei einem misslungenen Rettungswurf fällt das Ziel zu Boden und kann für 1 Minute nicht aufstehen (Rettungswurf am Ende des Zuges erlaubt)." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Feiger Befehlshaber", beschreibung: "Wenn eine Kreatur, die der Fluchspucker sehen kann, ihn mit einem Angriff trifft, wählt der Fluchspucker einen willigen Verbündeten innerhalb von 1,5 m. Der Angriff trifft stattdessen den Verbündeten." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Goblin-Rückenspalter",
    art: "Humanoid",
    unterart: "Goblin",
    groesse: "Klein",
    gesinnung: "Beliebige Gesinnung",
    cr: 1,
    xp: 200,
    rk: 14,
    ruestungstyp: "Tierhäute",
    tp: 33,
    tp_wuerfel: "6W6+12",
    bewegung: { "Gehen": "9 m", "Klettern": "6 m" },
    attribute: { STR: 16, DEX: 14, CON: 14, INT: 10, WIS: 10, CHA: 8 },
    rettungswuerfe: { KON: 4 },
    fertigkeiten: { "Athletik": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache", "Goblinisch"],
    umgebung: ["Höhle", "Wald", "Ruinen", "Hügel"],
    bild: "flee-mortals/goblin_rueckenspalter.png",
    beschreibung: [
      "Goblin-Rückenspalter sind für ihre Verhältnisse ungewöhnlich groß und muskulös. Mit roher Kraft schwingen sie Großäxte, als wären es Spielzeuge, und gleichen ihre geringe Statur durch schiere Brutalität aus. Wenn ein Feind einen ihrer Hiebe verfehlt, ist das für sie kein Zeichen der Niederlage – sondern eine Einladung zur Vergeltung."
    ],
    besonderheiten: [
      { name: "Gewandt", beschreibung: "Der Rückenspalter löst keine Gelegenheitsangriffe aus, wenn er sich aus der Reichweite eines Feindes herausbewegt." },
      { name: "Starker Griff", beschreibung: "Das Führen einer schweren Waffe verhängt keinen Nachteil auf die Angriffswürfe des Rückenspalters." }
    ],
    aktionen: [
      { name: "Großaxt", beschreibung: "Nahkampfwaffenangriff: +5, Reichweite 1,5 m, ein Ziel. Treffer: 9 (1W12+3) Hiebschaden." },
      { name: "Handaxt", beschreibung: "Nahkampf- oder Distanzwaffenangriff: +5, Reichweite 1,5 m oder 6/18 m, ein Ziel. Treffer: 6 (1W6+3) Hiebschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Listiger Kämpfer", beschreibung: "Verfehlt eine Kreatur innerhalb von 1,5 m den Rückenspalter mit einem Angriff, kann der Rückenspalter einen Nahkampfangriff gegen diese Kreatur mit Nachteil ausführen." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Goblin-Scharfschütze",
    art: "Humanoid",
    unterart: "Goblin",
    groesse: "Klein",
    gesinnung: "Beliebige Gesinnung",
    cr: 0.25,
    xp: 50,
    rk: 14,
    ruestungstyp: "Lederrüstung",
    tp: 13,
    tp_wuerfel: "3W6+3",
    bewegung: { "Gehen": "9 m", "Klettern": "6 m" },
    attribute: { STR: 8, DEX: 16, CON: 12, INT: 10, WIS: 12, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 3, "Heimlichkeit": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Gemeinsprache", "Goblinisch"],
    umgebung: ["Höhle", "Wald", "Ruinen", "Hügel"],
    bild: "flee-mortals/goblin_scharfschuetze.png",
    beschreibung: [
      "Goblin-Scharfschützen verschmelzen mit ihrer Umgebung, bevor sie aus dem Verborgenen präzise Pfeile abfeuern. Anders als gewöhnliche Bogenschützen verraten sie ihre Position selbst bei einem Fehlschuss nicht – und wenn sie aus dem Hinterhalt treffen, ist der Schaden verheerend."
    ],
    besonderheiten: [
      { name: "Gewandt", beschreibung: "Der Scharfschütze löst keine Gelegenheitsangriffe aus, wenn er sich aus der Reichweite eines Feindes herausbewegt." },
      { name: "Scharfschütze", beschreibung: "Verfehlt der Scharfschütze mit einem Fernkampfwaffenangriff, während er verborgen ist, bleibt er verborgen. Hat der Scharfschütze zudem Vorteil beim Angriffswurf mit einem Fernkampfangriff, verursacht der Treffer 3 (1W6) zusätzlichen Schaden." }
    ],
    aktionen: [
      { name: "Dolch", beschreibung: "Nahkampf- oder Distanzwaffenangriff: +5, Reichweite 1,5 m oder 6/18 m, ein Ziel. Treffer: 5 (1W4+3) Stichschaden." },
      { name: "Kurzbogen", beschreibung: "Distanzwaffenangriff: +5, Reichweite 24/96 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden." }
    ],
    bonusaktionen: [
      { name: "Schleichen", beschreibung: "Der Scharfschütze ergreift die Verbergen-Aktion." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Goxomoc",
    art: "Monstrosität",
    unterart: "Titan",
    groesse: "Gigantisch",
    gesinnung: "Neutral",
    cr: 30,
    xp: 155000,
    rk: 23,
    ruestungstyp: "natürliche Rüstung",
    tp: 574,
    tp_wuerfel: "28W20+280",
    bewegung: { "Gehen": "15 m", "Klettern": "15 m", "Schwimmen": "15 m" },
    attribute: { STR: 30, DEX: 11, CON: 30, INT: 22, WIS: 26, CHA: 16 },
    rettungswuerfe: { GES: 9, INT: 15, WEI: 17 },
    fertigkeiten: { "Arkana": 15, "Athletik": 19, "Geschichte": 15, "Wahrnehmung": 17 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer", "Blitz", "Gift", "Donner", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Benommen", "Flankiert", "Verängstigt", "Vergiftet", "Gelähmt", "Versteinert", "Betäubt"],
    sinne: ["Wahre Sicht 90 m"],
    passiveWahrnehmung: 27,
    sprachen: ["versteht alle Sprachen, kann aber nicht sprechen", "Telepathie 45 m"],
    umgebung: ["Gebirge", "Unterirdisch"],
    bild: "flee-mortals/goxxomoc.png",
    beschreibung: [
      "Goxomoc, der Schreckensfürst, schlummert unter dem gewaltigen Vulkan Ynixquichcauitl — zu Deutsch: das Ende aller Dinge. Das Oaxuatl-Volk von Ix glaubt, dass die unvermeidliche Eruption dieses Vulkans das Ende der Welt ankündigen wird, und beobachtet ihn, um die Stimmung des schlummernden Titanen zu deuten. Die Oaxuatl verehren ihren Beschützer in seinen Aspekten als Wesen der Erde und der Stürme, doch sie beten nicht zu ihm. Sie glauben nicht einmal, dass er sich ihrer bewusst ist — und doch sind sie unerschütterlich überzeugt: Sollte ihr Land bedroht werden, wird der Schreckensfürst erwachen und es verteidigen.",
      "Die Oaxuatl glauben, dass Goxomoc die Tetzahuitl erschaffen hat — die großen Schreckensechsen, die ihre Inselkette beherrschen. Sie betrachten diese Kinder Goxomocs als heilige Avatare des Titanen. Verliert Goxomoc im Kampf seine körperliche Form, wandelt sich seine Essenz zu Xogomoc: einem riesenhaften Schreckenssaurier aus lebendigem Blitz."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Goxomoc kann Luft und Wasser atmen." },
      { name: "Erdhalter", beschreibung: "Feinde innerhalb von 18 m von Goxomoc können nicht fliegen. Bewegt sich Goxomoc innerhalb von 18 m eines fliegenden Feindes, fällt dieser sofort." },
      { name: "Blitzherr", beschreibung: "Wenn Goxomoc auf 0 Trefferpunkte reduziert wird, streift er seine körperliche Form ab und wird zu Xogomoc. Alle Zustände und übernatürlichen Effekte, die Goxomoc betrafen, betreffen weiterhin Xogomoc." },
      { name: "Psionische Resistenz (3/Tag)", beschreibung: "Wenn Goxomoc einen Rettungswurf misslingt, kann er stattdessen bestehen. Er kann bis zum Ende seines nächsten Zuges keine Energieaugen oder Schockwelle nutzen." },
      { name: "Psionische Waffen", beschreibung: "Goxomocs Waffenangriffe sind psionisch." },
      { name: "Belagerungsmonster", beschreibung: "Goxomoc verursacht doppelten Schaden an Objekten und Bauwerken." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Goxomoc führt einen Biss-Angriff, zwei Klauen-Angriffe und einen Stampf-Angriff aus und nutzt Energieaugen." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +19, Reichweite 3 m, ein Ziel. Treffer: 36 (4W12+10) Stichschaden, und das Ziel ist Gegriffen (Entkommen SG 20). Bis der Griff endet, ist das Ziel Festgesetzt und Goxomoc kann kein anderes Ziel beißen. Reduziert dieser Schaden eine Kreatur auf 0 TP, stirbt sie, und Goxomoc verzehrt ihre Überreste." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +19, Reichweite 4,5 m, ein Ziel. Treffer: 21 (2W10+10) Hiebschaden, und Goxomoc bewegt das Ziel bis zu 3 m horizontal." },
      { name: "Stampf", beschreibung: "Nahkampfwaffenangriff: +19, Reichweite 4,5 m, ein Ziel, das nicht von Goxomoc Gegriffen ist. Treffer: 23 (2W12+10) Wuchtschaden, und wenn das Ziel Riesig oder kleiner ist, wird es zu Boden geworfen." },
      { name: "Energieaugen (Macht des 3. Grades)", beschreibung: "Goxomoc strahlt Energie aus seinen Augen auf eine Kreatur, die er innerhalb von 90 m sehen kann. Das Ziel muss einen GES-Rettungswurf SG 25 ablegen. Misslungen: 22 (4W10) Feuer- oder Blitzschaden (Goxomocs Wahl). Bei Erfolg: halber Schaden." },
      { name: "Katastrophaler Atem (Aufladung 5-6)", beschreibung: "Goxomoc atmet Energie in einem 27-m-Kegel. Jede Kreatur in diesem Bereich muss einen GES-Rettungswurf SG 27 ablegen. Misslungen: 71 (11W12) Feuer- oder Blitzschaden (Goxomocs Wahl) und die Kreatur wird in einen freien Raum nach Goxomocs Wahl innerhalb des Bereichs teleportiert. Bei Erfolg: halber Schaden und keine Teleportation." }
    ],
    bonusaktionen: [
      { name: "Schockwelle (Macht des 2. Grades)", beschreibung: "Eine psionische Schockwelle geht von Goxomoc aus. Jede Kreatur seiner Wahl innerhalb von 4,5 m muss einen STR-Rettungswurf SG 25 bestehen oder erleidet 22 (4W10) Wuchtschaden (Force) und wird bis zu 6 m direkt von ihm weggestoßen." }
    ],
    reaktionen: [
      { name: "Vulkanische Vergeltung", beschreibung: "Wenn Goxomoc Schaden erleidet, teleportiert er sich zusammen mit allen Kreaturen, die er greift, in einem Ausbruch von Lava in einen freien Raum, den er innerhalb von 9 m sehen kann. Jede Kreatur innerhalb von 3 m des verlassenen Raums muss einen GES-Rettungswurf SG 27 ablegen. Misslungen: 22 (4W10) Feuerschaden. Bei Erfolg: halber Schaden." }
    ],
    legendaere_aktionen: [
      { name: "Schurkenaktionen", beschreibung: "Goxomoc verfügt über drei Schurkenaktionen. Er kann jede Aktion einmal pro Begegnung nach dem Zug eines Gegners ausführen. Er kann diese Aktionen in beliebiger Reihenfolge nutzen, jedoch nur eine pro Runde." },
      { name: "Aktion 1: Grollen", beschreibung: "Goxomoc stampft den Boden und entfesselt eine Welle lähmender psionischer Energie. Mundane Objekte innerhalb von 27 m, die weder getragen noch gehalten werden, erleiden 55 (10W10) Wuchtschaden (Force). Kreaturen innerhalb von 27 m werden zu Boden geworfen und müssen einen GES-Rettungswurf SG 27 bestehen oder sind Festgesetzt und im Boden eingebettet. Eine Kreatur kann eine Aktion nutzen, um einen STR(Athletik)- oder GES(Akrobatik)-Wurf SG 20 abzulegen und sich selbst oder eine Kreatur in Reichweite bei Erfolg zu befreien." },
      { name: "Aktion 2: Donner", beschreibung: "Goxomoc verschwindet mit einem Donnerschlag — zusammen mit allen Kreaturen, die er greift — und erscheint in einem freien Raum, den er innerhalb von 36 m sehen kann. Jede Kreatur innerhalb von 9 m des verlassenen oder des neuen Raums muss einen KON-Rettungswurf SG 27 ablegen. Misslungen: 22 (4W10) Donnerschaden. Bei Erfolg: halber Schaden." },
      { name: "Aktion 3: Eruption", beschreibung: "Goxomoc entfesselt einen psionischen Angstschrei in den Geistern aller Feinde innerhalb von 36 m. Jedes Ziel muss einen WEI-Rettungswurf SG 25 ablegen. Misslungen: 44 (8W10) Psychischer Schaden und die Kreatur wird bis zum Ende des nächsten Zuges von Goxomoc anfällig gegen allen von Goxomoc verursachten Schaden. Bei Erfolg: halber Schaden und keine Anfälligkeit." }
    ],
    source: "Flee Mortals"
  },
  {
    name: "Grilp",
    art: "Unhold",
    unterart: "Teufel",
    groesse: "Winzig",
    gesinnung: "Typischerweise Rechtschaffen böse",
    cr: 0.25,
    xp: 50,
    rk: 13,
    ruestungstyp: "natürliche Rüstung",
    tp: 10,
    tp_wuerfel: "3W4+3",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m" },
    attribute: { STR: 6, DEX: 14, CON: 12, INT: 10, WIS: 12, CHA: 11 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 6, "Wahrnehmung": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer", "Nekrotisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Goblinisch", "Infernal"],
    umgebung: ["Andere Ebenen", "Ruinen", "Stadt"],
    bild: "flee-mortals/grilp.png",
    beschreibung: [
      "Der Grilp – ein grünhäutiger Teufel von der Größe einer Hauskatze – kann Farbe und Textur seiner Haut verändern, um sich seiner Umgebung anzupassen. Hochrangige Hobgoblins setzen ihn häufig als Kundschafter, Spion, Boten und Laufburschen ein. Doch mehr als für diese verdeckten Fähigkeiten schätzen Hobgoblins den Grilp für seinen magiedurchwirkten Speichel, der andere Kreaturen anfällig für Feuer- und Nekrotischen Schaden macht."
    ],
    besonderheiten: [
      { name: "Wandelnde Tarnung", beschreibung: "Der Grilp hat Vorteil auf GES(Heimlichkeit)-Proben und kann sich vor Kreaturen verstecken, die ihn gerade beobachten." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Stichschaden, und ist das Ziel eine Kreatur, muss es einen KON-Rettungswurf SG 11 bestehen oder wird bis zum Beginn des nächsten Zuges des Grilps anfällig gegen Feuer- und Nekrotischen Schaden." },
      { name: "Nekrotischer Funke", beschreibung: "Distanzzauberangriff: +3, Reichweite 9 m, ein Ziel. Treffer: 3 (1W6) Nekrotischen Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Heimsucher",
    art: "Untoter",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 12,
    xp: 8400,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 153,
    tp_wuerfel: "18W12+36",
    bewegung: { "Fliegen": "12 m (schwebend)" },
    attribute: { STR: 10, DEX: 16, CON: 14, INT: 8, WIS: 16, CHA: 18 },
    rettungswuerfe: { WEI: 7, CHA: 8 },
    fertigkeiten: { "Einschüchtern": 8, "Wahrnehmung": 7 },
    schadensresistenzen: ["Säure", "Feuer", "Blitz", "Donner", "Wucht (nichtmagisch)", "Stich (nichtmagisch)", "Hieb (nichtmagisch)"],
    schadensimmunitaeten: ["Kälte", "Nekrotisch", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Erschöpft", "Flankiert", "Verängstigt", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend", "Fixiert"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Telepathie 18 m"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "flee-mortals/heimsucher.png",
    beschreibung: [
      "Wenn eine Masse von Seelen einen dunklen und blutigen Tod erleidet, verschmelzen die unglücklichen Seelen gelegentlich zu einem wütenden Kollektiv, das als Heimsucher bezeichnet wird. Solche gequälten Amalgame von Geistern sind dazu verdammt, die Stätte ihres Todes zu durchstreifen, bis sie zur Ruhe gebracht werden.",
      "Diese untoten Wolken psychischer Energie sind gewöhnlich unsichtbar. Wenn man sie mit dem Zauber Unsichtbares Sehen oder ähnlicher Magie betrachtet, erscheinen sie als wirbelnder silbergrüner Nebel aus verschlungenen Gliedmaßen und schreienden Gesichtern.",
      "Seelen, die in einen Heimsucher hineingezogen werden, verlieren jeglichen Sinn für Individualität. Ihr Schmerz, ihre Erinnerungen und ihre Empörung verschmelzen zu einer verwirrten Masse, die rationales Denken nahezu unmöglich macht. Heimsucher können selten Freund von Feind unterscheiden und reagieren gewaltsam auf die Anwesenheit jeglicher Wesen in ihrem Bereich.",
      "Im Gegensatz zu anderen Geistern sind Heimsucher ausschließlich an die Mundane Welt gebunden und können die Stätte, an der sie entstanden sind, nicht verlassen. Daher kann sich ein Heimsucher nicht in die Ätherische Ebene zurückziehen, wenn er in Gefahr gerät. Seine verwurzelte Natur verleiht ihm jedoch größere Kontrolle über physische Objekte in der Umgebung, als die meisten körperlosen Kreaturen erreichen.",
      "Der dominante emotionale Zustand eines Heimsuchers ist abgrundtiefe Wut, die ihn antreibt, Rache an allen Lebewesen zu suchen. Heimsucher begnügen sich nicht damit, ihre Beute zu töten – sie wollen ihre Opfer auf sadistische Weise gefangen halten und quälen."
    ],
    besonderheiten: [
      { name: "Körperlose Wolke", beschreibung: "Der Heimsucher kann den Raum einer anderen Kreatur besetzen und umgekehrt. Zudem kann der Heimsucher durch Kreaturen und Objekte hindurchbewegen, als wären sie schwieriges Gelände. Der Heimsucher nimmt 5 (1W10) Kraftschaden, wenn er seinen Zug innerhalb eines Objekts beendet." },
      { name: "Unsichtbarkeit", beschreibung: "Der Heimsucher ist unsichtbar." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Heimsucher führt zwei Angriffe mit Gespenstischem Zorn aus." },
      { name: "Gespenstischer Zorn", beschreibung: "Nahkampfzauberangriff: +8, Reichweite 0 m, ein Ziel im Raum des Heimsuchers. Treffer: 17 (2W12+4) Kraftschaden." },
      { name: "Welle der Verzweiflung (Aufladung 5–6)", beschreibung: "Der Heimsucher entfesselt eine Welle psychischen Schmerzes. Jeder Feind innerhalb von 6 m vom Heimsucher muss einen WEI-Rettungswurf SG 16 ablegen. Misslungen: 33 (6W10) Psychischschaden. Erfolg: halber Schaden." }
    ],
    bonusaktionen: [
      { name: "Objekt besessen", beschreibung: "Der Heimsucher manipuliert magisch ein Großes oder kleineres Objekt innerhalb von 9 m von ihm, das nicht von einer anderen Kreatur getragen oder geführt wird. Der Heimsucher kann feinfühlige Kontrolle über kontrollierte Objekte ausüben, etwa Klaviertasten spielen, Türen zuschlagen, Fenster öffnen oder mit einer Feder schreiben. Als Teil dieser Bonusaktion kann der Heimsucher das Objekt bis zu 9 m in eine beliebige Richtung schleudern oder es als Fernkampfwaffe nutzen, um eine Kreatur innerhalb von 9 m vom Objekt anzugreifen. Das Objekt hat +8 auf Angriffswürfe und verursacht 15 (2W10+4) Wuchtschaden bei einem Treffer. Der Spielleiter kann entscheiden, dass ein bestimmtes Objekt aufgrund seiner Form Stich- oder Hiebschaden verursacht." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Hobgoblin-Kriegsmagier",
    art: "Humanoid",
    unterart: "Hobgoblin",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 4,
    xp: 1100,
    rk: 15,
    ruestungstyp: "Kettenhemd",
    tp: 65,
    tp_wuerfel: "10W8+20",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 10, DEX: 15, CON: 15, INT: 18, WIS: 14, CHA: 16 },
    rettungswuerfe: { INT: 6, CHA: 5 },
    fertigkeiten: { "Arkanes": 6, "Geschichte": 6 },
    schadensresistenzen: ["Feuer"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache", "Goblinisch", "Infernal"],
    umgebung: ["Andere Ebenen", "Ruinen", "Stadt"],
    bild: "flee-mortals/hobgoblin_kriegsmagier.png",
    beschreibung: [
      "Hobgoblin-Kriegsmagier sind die geheimnisumwitterten Zauberer infernaler Legionen, die das teuflische Erbe ihrer Rasse in verheerende arkane Waffen umdeuten. Mit Feuerregen und entweihtem Boden formen sie das Schlachtfeld zu Gunsten ihrer Truppen – und wer es wagt, in ihrer Gegenwart einen Zauber zu wirken, riskiert, dessen Energie zurückgeschleudert zu bekommen."
    ],
    besonderheiten: [
      { name: "Infernales Blut", beschreibung: "Wenn der Magier stirbt, versprüht seine Leiche einen Strahl brennenden orangefarbenen Blutes. Jede Kreatur innerhalb von 1,5 m des Magiers erleidet 5 Feuerschaden." }
    ],
    aktionen: [
      { name: "Infernale Teleportation", beschreibung: "Nahkampfzauberangriff: +6, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W10) Nekrotischen Schaden, und ist das Ziel eine Kreatur, muss es einen CHA-Rettungswurf SG 14 bestehen oder wird bis zu 4,5 m in einen freien Raum teleportiert, den der Magier sehen kann." },
      { name: "Höllenfeuerregen (Zauber des 2. Grades)", beschreibung: "Der Magier lässt Feuer auf einen Punkt niederregnen, den er innerhalb von 18 m sehen kann. Jede Kreatur in einer 3-m-Radius-Sphäre um diesen Punkt muss einen GES-Rettungswurf SG 14 bestehen oder erleidet 10 (3W6) Feuerschaden (halber Schaden bei Erfolg). Das Feuer breitet sich um Ecken aus und entzündet entflammbare Gegenstände in dem Bereich, die nicht getragen werden." },
      { name: "Entweihter Boden (Zauber des 3. Grades; Konzentration)", beschreibung: "Der Magier wählt einen Punkt auf dem Boden, den er innerhalb von 18 m sehen kann. Ein 6-m-Quadrat leuchtender unheiliger Energie erscheint auf dem Boden, zentriert auf diesem Punkt, und hält bis zu 1 Minute an. Jeder Feind in diesem Bereich ist anfällig gegen Feuerschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Zaubersiphon", beschreibung: "Wenn eine Kreatur, die der Magier innerhalb von 18 m sehen kann, einen Zauber wirkt, reflektiert der Magier einen Teil der magischen Energie auf den Wirker zurück. Der Wirker muss einen GES-Rettungswurf SG 14 bestehen oder erleidet 3 (1W6) Magieschaden pro Grad des auslösenden Zaubers (mindestens 1W6 Magieschaden)." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Hobgoblin-Rauchbinder",
    art: "Humanoid",
    unterart: "Hobgoblin",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 2,
    xp: 450,
    rk: 17,
    ruestungstyp: "Nietelederpanzer und Schild",
    tp: 44,
    tp_wuerfel: "8W8+8",
    bewegung: { "Gehen": "9 m", "Fliegen (Rauchform)": "9 m" },
    attribute: { STR: 12, DEX: 17, CON: 13, INT: 14, WIS: 12, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 5 },
    schadensresistenzen: ["Feuer", "Wucht, Hieb und Stich von gewöhnlichen Angriffen (nur Rauchform)"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Gepackt (nur Rauchform)", "Festgesetzt (nur Rauchform)"],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Gemeinsprache", "Goblinisch", "Infernal"],
    umgebung: ["Andere Ebenen", "Ruinen", "Stadt"],
    bild: "flee-mortals/hobgoblin_rauchbinder.png",
    beschreibung: [
      "Hobgoblin-Rauchbinder sind mysteriöse Zauberer, die das infernale Feuer in ihren Adern zu giftigem Rauch verwandeln können. In ihrer Rauchform gleiten sie ungreifbar durch Schlachtfelder, ersticken Feinde mit giftigen Feuerstößen und verschwinden, sobald die Lage brenzlig wird. Erst im Tod verraten sie ihre wahre Natur – mit einem letzten Strahl brennenden orangefarbenen Blutes."
    ],
    besonderheiten: [
      { name: "Formlos (nur Rauchform)", beschreibung: "Der Rauchbinder kann sich durch eine maximal 2,5 cm breite Öffnung bewegen, ohne sich zu quetschen." },
      { name: "Infernales Blut", beschreibung: "Wenn der Rauchbinder stirbt, versprüht seine Leiche einen Strahl brennenden orangefarbenen Blutes. Jede Kreatur innerhalb von 1,5 m des Rauchbinders erleidet 3 Feuerschaden." }
    ],
    aktionen: [
      { name: "Giftflamme", beschreibung: "Nahkampfzauberangriff: +5, Reichweite 1,5 m, ein Ziel. Treffer: 10 (3W6) Feuerschaden. Hat der Rauchbinder Vorteil beim Angriffswurf, ist das Ziel vergiftet und kann bis zum Ende seines nächsten Zuges nicht sprechen." },
      { name: "Erstickungsblitz", beschreibung: "Distanzzauberangriff: +5, Reichweite 18 m, ein Ziel. Treffer: 9 (2W8) Feuerschaden. Hat der Rauchbinder Vorteil beim Angriffswurf, kann das Ziel bis zum Ende seines nächsten Zuges nicht sprechen." }
    ],
    bonusaktionen: [
      { name: "Rauchform (1/Tag)", beschreibung: "Der Rauchbinder verwandelt sich für 1 Minute in einen magischen grauen Rauch. Ausrüstung, die er trägt oder hält, wird für die Dauer ebenfalls verwandelt. In Rauchform erhält er eine Fluggeschwindigkeit gleich seiner Gehgeschwindigkeit, Resistenz gegen Wucht-, Hieb- und Stichschaden von gewöhnlichen Angriffen sowie Immunität gegen die Zustände Gepackt und Festgesetzt. Der Rauchbinder kann als Bonusaktion in seine wahre Form zurückkehren. Wird er Kampfunfähig oder stirbt er, kehrt er sofort zurück." },
      { name: "Schleichen (nur Rauchform)", beschreibung: "Der Rauchbinder ergreift die Verbergen-Aktion." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Hobgoblin-Soldat",
    art: "Humanoid",
    unterart: "Hobgoblin",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 0.5,
    xp: 100,
    rk: 16,
    ruestungstyp: "Ringpanzer und Schild",
    tp: 18,
    tp_wuerfel: "4W8",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 14, DEX: 12, CON: 11, INT: 10, WIS: 10, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Athletik": 4, "Wahrnehmung": 2 },
    schadensresistenzen: ["Feuer"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache", "Goblinisch", "Infernal"],
    umgebung: ["Andere Ebenen", "Ruinen", "Stadt"],
    bild: "flee-mortals/hobgoblin_soldat.png",
    beschreibung: [
      "Hobgoblin-Soldaten sind das Rückgrat infernaler Legionen: diszipliniert, rücksichtslos und mit brennenden Waffen ausgerüstet. Einzeln sind sie eine handhabbare Bedrohung, doch in Formation werden ihre Fluchtaktiken zur strategischen Waffe – jeder Feind, der einen Soldaten ignoriert und stattdessen andere angreift, zahlt mit Feuer."
    ],
    besonderheiten: [
      { name: "Infernales Blut", beschreibung: "Wenn der Soldat stirbt, versprüht seine Leiche einen Strahl brennenden orangefarbenen Blutes. Jede Kreatur innerhalb von 1,5 m des Soldaten erleidet 2 Feuerschaden." }
    ],
    aktionen: [
      { name: "Feuerdresch", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W8+2) Wuchtschaden, und ein anderes Ziel innerhalb von 1,5 m des ersten Ziels erleidet 2 (1W4) Feuerschaden." },
      { name: "Schwefeldolch", beschreibung: "Nahkampf- oder Distanzwaffenangriff: +4, Reichweite 1,5 m oder 9/18 m, ein Ziel. Treffer: 4 (1W4+2) Stichschaden plus 2 (1W4) Feuerschaden." }
    ],
    bonusaktionen: [
      { name: "Stell dich, Feigling!", beschreibung: "Der Soldat belegt eine Kreatur innerhalb von 1,5 m, die noch nicht von einem anderen Soldaten belegt wurde, mit einem Fluch. Das erste Mal in einem Zug, wenn eine belegte Kreatur einer anderen Kreatur als dem Soldaten Schaden zufügt, erleidet sie 5 Feuerschaden. Der Fluch hält bis zum Beginn des nächsten Zuges des Soldaten an." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Hobgoblin-Todeshauptmann",
    art: "Humanoid",
    unterart: "Hobgoblin",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 7,
    xp: 2900,
    rk: 20,
    ruestungstyp: "Plattenrüstung und Schild",
    tp: 90,
    tp_wuerfel: "12W8+36",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 18, DEX: 12, CON: 17, INT: 15, WIS: 12, CHA: 14 },
    rettungswuerfe: { KON: 6, WEI: 4 },
    fertigkeiten: { "Athletik": 7, "Geschichte": 5, "Einschüchterung": 5, "Wahrnehmung": 4 },
    schadensresistenzen: ["Feuer"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 14,
    sprachen: ["Gemeinsprache", "Goblinisch", "Infernal"],
    umgebung: ["Andere Ebenen", "Ruinen", "Stadt"],
    bild: "flee-mortals/hobgoblin_todeshauptmann.png",
    beschreibung: [
      "Hobgoblin-Todeshauptmänner sind die gefürchteten Kriegsherren infernaler Hobgoblin-Heere. Auf dem Schlachtfeld koordinieren sie ihre Truppen mit eiserner Disziplin, befehligen Angriffe mit einem einzigen Wort und schützen Verbündete mit magischer Unsichtbarkeit. Niemand in ihrer Nähe kann überrascht werden – und wer einen Todeshauptmann fällt, wird mit einem Schwall brennenden orangefarbenen Blutes belohnt."
    ],
    besonderheiten: [
      { name: "Kampfbereit", beschreibung: "Der Hauptmann und jeder Verbündete innerhalb von 18 m, der ihn hören kann, haben Vorteil auf Initiativewürfe und können nicht überrascht werden, sofern der Hauptmann nicht Kampfunfähig ist." },
      { name: "Infernales Blut", beschreibung: "Wenn der Hauptmann stirbt, versprüht seine Leiche einen Strahl brennenden orangefarbenen Blutes. Jede Kreatur innerhalb von 1,5 m des Hauptmanns erleidet 5 Feuerschaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Hauptmann führt zwei Verderbensklinge- oder zwei Augenfeuer-Angriffe aus. Er kann einen Angriff durch einen Einsatz von Auf meinen Befehl ersetzen." },
      { name: "Verderbensklinge", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W8+4) Hiebschaden plus 7 (2W6) Nekrotischen Schaden." },
      { name: "Augenfeuer", beschreibung: "Distanzzauberangriff: +6, Reichweite 18 m, ein Ziel. Treffer: 14 (4W6) Feuerschaden." },
      { name: "Auf meinen Befehl", beschreibung: "Der Hauptmann befiehlt einem Verbündeten innerhalb von 18 m, der ihn hören kann, anzugreifen. Dieser Verbündete kann sofort einen Waffenangriff ausführen (keine Aktion nötig) und verursacht bei einem Treffer 3 (1W6) zusätzlichen Nekrotischen Schaden." }
    ],
    bonusaktionen: [
      { name: "Anführen (1/Tag)", beschreibung: "Der Hauptmann und jeder Verbündete innerhalb von 9 m, der ihn sehen kann, können sich bis zu ihrer Bewegungsweite bewegen, ohne Gelegenheitsangriffe auszulösen." }
    ],
    reaktionen: [
      { name: "Verborgenes Geschenk (3/Tag)", beschreibung: "Wenn ein Verbündeter, den der Hauptmann innerhalb von 9 m sehen kann, Schaden erleidet, macht der Hauptmann diesen Verbündeten magisch unsichtbar. Der Verbündete bleibt unsichtbar bis zum Ende seines nächsten Zuges oder bis er angreift, Schaden verursacht oder eine Kreatur zu einem Rettungswurf zwingt." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Höllenhund",
    art: "Unhold",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Neutral böse",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 76,
    tp_wuerfel: "9W8+36",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 14, DEX: 17, CON: 19, INT: 11, WIS: 8, CHA: 10 },
    rettungswuerfe: { GES: 5, KON: 6 },
    fertigkeiten: { "Wahrnehmung": 3, "Heimlichkeit": 7, "Überleben": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["versteht Gemein und Infernal, kann sie jedoch nicht sprechen"],
    umgebung: ["Andere Ebenen", "Ruinen", "Stadt"],
    bild: "flee-mortals/hoellenhund.png",
    beschreibung: [
      "Höllenhunde sind infernale Jäger aus den tiefsten Schichten der Neun Höllen. Ihr Fell verdunkelt und verhärtet sich, sobald Feuer sie berührt, was sie mit der Zeit nahezu unverwundbar macht. Mit übernatürlichem Gespür für Beute und der Fähigkeit, Höllenfeuer zu speien, sind sie ideale Wächter und Jagdgefährten für teuflische Wesen."
    ],
    besonderheiten: [
      { name: "Gehärtet durch Flammen", beschreibung: "Wird der Höllenhund Feuerschaden ausgesetzt, erleidet er keinen Schaden. Stattdessen verdunkelt und verhärtet sich seine Haut, und seine RK erhöht sich bis zum Ende seines nächsten Zuges auf 18." },
      { name: "Lautloser Jäger", beschreibung: "Der Höllenhund hat Vorteil auf WEI(Überleben)-Proben zum Verfolgen von Kreaturen und auf GES(Heimlichkeit)-Proben zum Verstecken vor Kreaturen, die sich seiner Anwesenheit nicht bewusst sind." }
    ],
    aktionen: [
      { name: "Höllenbiss", beschreibung: "Nahkampfwaffenangriff: +5, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W6+3) Stichschaden plus 4 (1W8) Feuerschaden." },
      { name: "Höllenfeueratem (Aufladen 5–6)", beschreibung: "Der Höllenhund atmet Flammen in einem 4,5-m-Kegel. Jede Kreatur in diesem Bereich muss einen GES-Rettungswurf SG 14 bestehen oder erleidet 14 (3W6+4) Feuerschaden (halber Schaden bei Erfolg). Eine Kreatur, die kein Höllenhund ist und den Rettungswurf misslingt, fängt für 1 Minute Feuer (Rettungswurf am Ende des Zuges erlaubt) oder bis das Ziel oder eine andere Kreatur, die es erreichen kann, eine Aktion verwendet, um die Flammen zu löschen. Eine brennende Kreatur erleidet zu Beginn ihres Zuges 7 (2W6) Feuerschaden. Wird eine bereits brennende Kreatur in einem späteren Zug erneut angezündet, addiert sich der Schaden nicht, aber die Dauer des Feuers setzt sich auf 1 Minute zurück." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Zerreißen", beschreibung: "Trifft ein Feind innerhalb von 1,5 m den Höllenhund mit einem Nahkampfangriff, kann der Höllenhund einen Höllenbiss-Angriff gegen diesen Feind ausführen. Trifft der Angriff des Höllenhunds, ist der Feind auch Gepackt (Entkommen SG 12). War der auslösende Angriff ein Waffenangriff, kann die verwendete Waffe keine weiteren Angriffe ausführen, solange das Ziel Gepackt ist. Der Griff endet, wenn der Höllenhund ein anderes Ziel mit Höllenbiss angreift." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Höllenhund-Köter",
    art: "Unhold",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Typischerweise Neutral böse",
    cr: 3,
    xp: 140,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 10,
    tp_wuerfel: null,
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 14, DEX: 17, CON: 19, INT: 11, WIS: 8, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: ["Feuer"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 9,
    sprachen: ["versteht Gemein und Infernal, kann sie jedoch nicht sprechen"],
    umgebung: ["Andere Ebenen", "Ruinen", "Stadt"],
    bild: "flee-mortals/hoellenhund_koeter.png",
    beschreibung: [
      "Höllenhund-Köter sind die kleineren, schwächeren Verwandten ausgewachsener Höllenhunde. Einzeln sind sie kaum eine Bedrohung, doch in Rudeln werden sie gefährlich: Ihr Kreuzfeuer kann jeden Feind in ihrer Mitte einäschern, und ihr koordinierter Biss setzt selbst hartgesottene Abenteurer in Brand."
    ],
    besonderheiten: [
      { name: "Kreuzfeuer", beschreibung: "Beginnt eine Kreatur ihren Zug innerhalb von 3 m von zwei oder mehr Kötern, erleidet sie 4 Feuerschaden." },
      { name: "Scherge", beschreibung: "Erleidet der Köter Schaden durch einen Angriff oder einen misslungenen Rettungswurf, sinken seine TP sofort auf 0. Erleidet er Schaden durch einen anderen Effekt, stirbt er, wenn der Schaden seinem TP-Maximum entspricht oder es überschreitet; andernfalls erleidet er keinen Schaden." }
    ],
    aktionen: [
      { name: "Höllenbiss (Gruppenangriff)", beschreibung: "Nahkampfwaffenangriff: +5, Reichweite 1,5 m, ein Ziel. Treffer: 3 Feuerschaden. Ist das Ziel kein Höllenhund und wurde der Angriff von mehr als einem Köter durchgeführt, muss das Ziel einen GES-Rettungswurf bestehen, dessen SG 10 plus der Anzahl der am Angriff beteiligten Köter entspricht. Bei einem misslungenen Rettungswurf fängt das Ziel für 1 Minute Feuer (Rettungswurf am Ende des Zuges erlaubt) oder bis das Ziel oder eine andere Kreatur, die es erreichen kann, eine Aktion verwendet, um die Flammen zu löschen. Eine brennende Kreatur erleidet zu Beginn ihres Zuges Feuerschaden in Höhe der Anzahl der am Angriff beteiligten Köter. Wird eine bereits brennende Kreatur in einem späteren Zug erneut angezündet, addiert sich der Schaden nicht, aber die Dauer des Feuers setzt sich auf 1 Minute zurück." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Huschling",
    art: "Tier",
    unterart: null,
    groesse: "Winzig",
    gesinnung: "Gesinnungslos",
    cr: 0,
    xp: 10,
    rk: 13,
    ruestungstyp: null,
    tp: 5,
    tp_wuerfel: "2W4",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m" },
    attribute: { STR: 4, DEX: 16, CON: 10, INT: 3, WIS: 12, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Höhle", "Wald", "Ruinen"],
    bild: "flee-mortals/huschling.png",
    beschreibung: [
      "Huschling sind kleine, fledermausartige Wesen, die häufig mit Goblin-Stämmen zusammenleben und als Wachposten oder Kundschafter dienen. Mit blitzschnellen Krallenhieben können sie Sand oder Schmutz in die Augen ihrer Opfer schleudern und so kurzfristige Blindheit verursachen, bevor sie in der Dunkelheit verschwinden."
    ],
    besonderheiten: [
      { name: "Vorbeiflug", beschreibung: "Der Huschling löst keine Gelegenheitsangriffe aus, wenn er aus der Reichweite eines Feindes herausfliegt." }
    ],
    aktionen: [
      { name: "Klauen", beschreibung: "Nahkampfwaffenangriff: +5, Reichweite 1,5 m, ein Ziel. Treffer: 1 Hiebschaden, und das Ziel muss einen KON-Rettungswurf SG 10 bestehen oder ist bis zum Beginn seines nächsten Zuges Geblendet. Kreaturen, die immun gegen Giftschaden oder den Vergifteten Zustand sind, bestehen diesen Rettungswurf automatisch." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Knochenpirscher",
    art: "Feenwesen",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 6,
    xp: 2300,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 88,
    tp_wuerfel: "16W8+16",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 10, DEX: 18, CON: 12, INT: 11, WIS: 14, CHA: 20 },
    rettungswuerfe: { WEI: 5, CHA: 8 },
    fertigkeiten: { "Einblick": 5, "Wahrnehmung": 5, "Heimlichkeit": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt"],
    sinne: ["Blindsicht 36 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Gemeinsprache", "Sylvanisch"],
    umgebung: ["Wald", "Feenwildnis"],
    bild: "flee-mortals/knochenstalker.png",
    beschreibung: [
      "Knochenpirscher sind unheimliche Feenwesen, die die Schädel besiegter Kreaturen sammeln und als Quelle ihrer Macht nutzen. Sie streifen durch dunkle Wälder und finstere Feenwildnisse und beleben die Überreste ihrer Opfer, um sie in ihren Angriffen einzusetzen.",
      "Jeder Schädel, den ein Knochenpirscher bei sich trägt, verleiht ihm Fähigkeiten, die dem Typ der Kreatur entsprechen, von der er stammt. Die Schädel zerfallen nach dem Einsatz, doch der Pirscher findet stets neue Beute."
    ],
    besonderheiten: [
      { name: "Knochen der Verlorenen", beschreibung: "Der Knochenpirscher beginnt jeden Tag mit 5 (2W4) Schädeln. Zu Beginn seines Zuges wird für jeden Schädel auf einem W4 gewürfelt, um seinen Typ zu bestimmen: 1 = Tier, 2 = Feenwesen, 3 = Humanoid, 4 = Monstrosität." },
      { name: "Schädelresistenz", beschreibung: "Solange der Knochenpirscher mindestens einen Schädel bei sich trägt, hat er Vorteil auf Rettungswürfe gegen Kräfte, Zauber und übernatürliche Effekte." },
      { name: "Hilfszauber", beschreibung: "Zauberfähigkeit: CHA, Rettungswurf-SG 16. Beliebig oft: Kleine Illusion. 3/Tag: Stilles Bild." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Knochenpirscher führt zwei Angriffe mit Berührung der Gefallenen aus ODER zwei Angriffe mit Schrei der Verlorenen und einen Angriff mit Trauer der Vergangenen." },
      { name: "Berührung der Gefallenen", beschreibung: "Nahkampfwaffenangriff: +8, Reichweite 1,5 m, ein Ziel. Treffer: 12 (2W6+5) Nekrotischschaden. Optional: Der Knochenpirscher zerstört einen Humanoid- oder Monstrosität-Schädel, um zusätzlich 10 (3W6) Psychischschaden zu verursachen." },
      { name: "Schrei der Verlorenen", beschreibung: "Fernkampfwaffenangriff: +8, Reichweite 18 m, ein Ziel. Treffer: 15 (3W6+5) Psychischschaden. Optional: Der Knochenpirscher zerstört einen Feenwesen-Schädel, um das Ziel zu zwingen, einen WEI-Rettungswurf SG 16 abzulegen. Misslungen: Das Ziel ist bis zum Beginn des nächsten Zuges des Knochenpirschers Verängstigt." },
      { name: "Trauer der Vergangenen", beschreibung: "Der Knochenpirscher zerstört zwei Schädel und erschafft eine undurchdringliche Dunkelheitssphäre mit 4,5 m Radius an einem sichtbaren Punkt innerhalb von 18 m. Die Sphäre dauert 1 Minute. Dunkelsicht kann die Dunkelheit nicht durchdringen. Der Knochenpirscher ist von der Dunkelheit nicht betroffen und hat Vorteil auf Angriffswürfe, während er sich darin befindet. Jede Kreatur, die ihren Zug in der Sphäre beginnt, muss einen WEI-Rettungswurf SG 16 ablegen. Misslungen: 14 (4W6) Psychischschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Kraft der Besiegten", beschreibung: "Wenn der Knochenpirscher von einem Angriff getroffen wird, kann er als Reaktion einen Tier-Schädel zerstören, um bis zum Ende seines nächsten Zuges Unsichtbar zu werden." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Kobold-Venator",
    art: "Humanoid",
    unterart: "Kobold",
    groesse: "Klein",
    gesinnung: "Beliebige Gesinnung",
    cr: 0.25,
    xp: 50,
    rk: 13,
    ruestungstyp: "Schild",
    tp: 14,
    tp_wuerfel: "4W6",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 14, DEX: 13, CON: 10, INT: 10, WIS: 13, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: { "Athletik": 4, "Wahrnehmung": 3, "Heimlichkeit": 3, "Überleben": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Gemeinsprache", "Drakonisch"],
    umgebung: ["Höhle", "Unterirdisch", "Hügel", "Ruinen"],
    bild: "flee-mortals/kobold_venator.png",
    beschreibung: [
      "Kobold-Venatoren sind hinterlistige Kämpfer, die ihre wahre Kampfstärke hinter der Fassade eines unerfahrenen Kriegers verbergen. Koordiniert mit ihren Schildkameraden bilden sie eine kompakte Schutzmauer, während Netze und brennendes Feuer Feinde bewegungsunfähig machen."
    ],
    besonderheiten: [
      { name: "Nicht was ich scheine", beschreibung: "Der Venator beginnt den Kampf als unerfahrener Krieger getarnt. Er hat Vorteil beim ersten Waffenangriffswurf gegen eine Kreatur, die ihn noch keinen Angriff ausführen gesehen hat." },
      { name: "Schild? Schild!", beschreibung: "Der Venator erhält +1 auf seine RK, solange er sich innerhalb von 1,5 m von mindestens einem Verbündeten befindet, der ebenfalls dieses Merkmal besitzt, einen Schild führt und weder Kampfunfähig noch Liegend ist. Der Venator selbst muss ebenfalls einen Schild führen, um von diesem Merkmal zu profitieren." }
    ],
    aktionen: [
      { name: "Dolabra", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W8+2) Hiebschaden." },
      { name: "Netz", beschreibung: "Nahkampf- oder Distanzwaffenangriff: +4, Reichweite 1,5 m oder 1,5/4,5 m, eine Große oder kleinere Kreatur. Treffer: Das Ziel ist Festgesetzt, bis es befreit wird. Eine Kreatur kann eine Aktion verwenden, um eine STR-Probe SG 10 abzulegen und sich selbst oder eine Kreatur in ihrer Reichweite bei Erfolg zu befreien. Alternativ kann das Netz befreit werden, indem man ihm 5 Hiebschaden zufügt (RK 10); dies zerstört das Netz. Der Venator trägt ein Netz." }
    ],
    bonusaktionen: [
      { name: "Im Gedränge verschwinden", beschreibung: "Der Venator ergreift die Verbergen-Aktion. Er hat Vorteil auf die GES(Heimlichkeit)-Probe, wenn er sich innerhalb von 1,5 m von zwei oder mehr verbündeten Kobolds befindet." },
      { name: "Und dann – Feuer ans Netz!", beschreibung: "Der Venator wählt eine Kreatur innerhalb von 1,5 m, die durch ein Netz Festgesetzt ist, und zündet dieses Netz an. Solange die Kreatur durch das Netz Festgesetzt ist, erleidet sie zu Beginn jedes ihrer Züge 3 (1W6) Feuerschaden. Jedes Mal, wenn das Netz Schaden verursacht, wird ein beliebiger Würfel geworfen – bei einem ungeraden Ergebnis brennt das Netz durch und wird zerstört, und die Festgesetzte Kreatur wird befreit. Eine Kreatur, die versucht, die Festgesetzte Kreatur zu befreien (wie in der Netz-Aktion beschrieben), löscht das Feuer automatisch als Teil dieser Aktion, unabhängig vom Ergebnis der Probe." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Königsspaltenwurm",
    art: "Monstrosität",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Gesinnungslos",
    cr: 17,
    xp: 18000,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 297,
    tp_wuerfel: "18W20+108",
    bewegung: { "Gehen": "18 m", "Graben": "15 m" },
    attribute: { STR: 29, DEX: 10, CON: 23, INT: 1, WIS: 10, CHA: 5 },
    rettungswuerfe: { KON: 11 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Flankiert", "Verängstigt", "Liegend"],
    sinne: ["Blindsicht 9 m", "Zittersinn 36 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Höhle", "Unterirdisch", "Hügel", "Grasland"],
    bild: "flee-mortals/koenigsspaltenwurm.png",
    beschreibung: [
      "Namensgebend für ihre berüchtigte Jagdtechnik formen Königsspaltenwürmer die Erde um, während sie sich durch sie hindurch bewegen – sie graben Tunnel und Spalten, um ihrer enormen Gestalt Platz zu schaffen. Dann lauern sie tief unter der Erde. Wenn sie die Vibrationen ihrer Beute über sich spüren, schießen sie ihre schlangenartigen Zungen durch die Spalten und reißen die Beute von der Oberfläche in ihr gewaltiges Maul. Erfahrene Abenteurer wissen: Selbst der kleinste Riss in der Erde gebietet Vorsicht.",
      "Darmbestand: Der Wurm frisst wahllos und schluckt Kreaturen, Bauwerke und kostbare Edelsteine gleichermaßen. Der Reichtum in einem Königsspaltenwurm würde jeden Drachenhort beschämen – doch der Wurm kümmert sich nicht um Schätze und ahnt nichts von den Beständen in seinem labyrinthartigen Gedärm. Nur wenige haben das Innere eines Königsspaltenwurms gesehen und überlebt, doch wer es tat, geht in der Regel mit einem wertvollen Andenken davon.",
      "Hausbauer: Die meisten Würmer legen ein Netz aus Tunneln und Spalten an und bleiben so lange darin, wie die Beute auf der Oberfläche lohnt und sie ungestört bleiben. Wenn ein Königsspaltenwurm eine neue Heimat sucht, wählt er Gebiete mit reichlich Nahrung – was gelegentlich dazu führt, dass Dorfbewohner aufwachen und ihre Umgebung über Nacht terraformiert vorfinden. Wird ein Wurm besiegt, beanspruchen alle möglichen Kreaturen seine unterirdischen Bauten: leere Höhlen, die wunderbare Kriegsbunker, abgelegene Werkstätten oder sogar gut verteidigte Siedlungen abgeben.",
      "Unaufhaltsame Kraft: Der Königsspaltenwurm ist eine Art, die entschlossen ist, jede andere Lebensform zu überholen, zu überleben und zu überfressen. Auch wenn das Monster durch eine mächtige Kraftentfaltung verlangsamt werden mag – nur der Tod stoppt ihn. Manche Gelehrten vermuten, dass die Zungen eines sterbenden Königsspaltenwurms sich ablösen und zu vollwertigen Würmern heranwachsen.",
      "Unwahrscheinliche Symbiose: Einige nomadische Gemeinschaften durchqueren gefährliche Gebiete mit Hilfe eines ungewöhnlichen Schutzbegleiters – einem jungen Königsspaltenwurm. Solange die Menschen dem Wurm eine stetige Nahrungsversorgung bieten, folgt er pflichtbewusst. Locken die Menschen Monster an, verteidigt der Wurm seine Gefährten – und genießt dabei eine zusätzliche Mahlzeit."
    ],
    besonderheiten: [
      { name: "Mehrere Zungen", beschreibung: "Der Wurm hat drei Zungen. Jede Zunge kann mit Angriffen als Ziel genommen werden (RK 20, Immunität gegen Psychischen Schaden), während sie eine Kreatur Gepackt hält. Erleidet eine Zunge in einem Zug 35 Schaden oder mehr, wird sie zerstört und lässt ein etwaiges Gepackt-Ziel frei. Der Wurm kann eine zerstörte Zunge erst nach einer langen Rast wieder mit seinem Mehrfachangriff oder dem Zungengriff einsetzen. Schaden an einer Zunge verursacht dem Wurm selbst keinen Schaden." },
      { name: "Verlangsamt, nicht gestoppt (3/Tag)", beschreibung: "Wenn dem Wurm ein Rettungswurf misslingt, kann er wählen, ihn stattdessen zu bestehen. Wenn er dies tut, werden seine Bewegungsweite und die Reichweite seines Zungengriff-Angriffs jeweils um kumulativ 3 m verringert, bis er eine lange Rast beendet. Bewegungsweite und Reichweite können auf diese Weise nicht unter 1,5 m sinken." },
      { name: "Tunnelgräber", beschreibung: "Der Wurm kann sich durch massiven Fels mit der Hälfte seiner Grabungsgeschwindigkeit graben und hinterlässt dabei einen Tunnel von 3 m Durchmesser." },
      { name: "Schurkenaktionen", beschreibung: "Der Wurm hat drei Schurkenaktionen. Er kann jede Aktion einmal während einer Begegnung nach dem Zug eines Feindes einsetzen. Die Reihenfolge ist beliebig, aber er kann nur eine pro Runde einsetzen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Wurm führt so viele Zungengriff-Angriffe aus, wie er aktuell Zungen hat (siehe Mehrere Zungen). Er kann beliebig viele dieser Angriffe durch einen Einsatz von Verschlingen ersetzen." },
      { name: "Zungengriff", beschreibung: "Nahkampfwaffenangriff: +14, Reichweite 9 m, ein Ziel. Treffer: 14 (4W6) Säureschaden, und die Kreatur ist Gepackt (Entkommen SG 19). Bis dieser Griff endet, kann der Wurm diese Zunge nicht gegen ein anderes Ziel einsetzen." },
      { name: "Schlund", beschreibung: "Nahkampfwaffenangriff: +14, Reichweite 1,5 m, ein Ziel. Treffer: 22 (3W8+9) Stichschaden. Ist das Ziel Riesig oder kleiner, muss es einen GES-Rettungswurf SG 19 bestehen oder wird verschluckt (als ob durch die Verschlingen-Aktion des Wurms)." },
      { name: "Verschlingen", beschreibung: "Der Wurm zieht eine Riesige oder kleinere gegriffene Kreatur in seinen Schlund und verschluckt sie. Die verschluckte Kreatur ist nicht mehr Gepackt, aber sie ist Geblendet und Festgesetzt, hat vollständige Deckung gegen Angriffe und Effekte von außerhalb des Wurms, und erleidet zu Beginn jedes Zuges des Wurms 28 (8W6) Säureschaden. Erleidet der Wurm in einem Zug 30 Schaden oder mehr von einer Kreatur in seinem Inneren, muss er am Ende dieses Zuges einen KON-Wurf SG 21 bestehen oder alle verschluckten Kreaturen ausspucken, die Liegend in einem freien Raum innerhalb von 3 m des Wurms landen. Stirbt der Wurm, kann eine verschluckte Kreatur durch Aufwenden von 6 m Bewegung aus dem Kadaver entkommen und landet dabei Liegend." }
    ],
    bonusaktionen: [
      { name: "Zungenpeitsche", beschreibung: "Der Wurm schwingt gewaltsam eine Kreatur, die er Gepackt hält. Die gegriffene Kreatur erleidet 10 (3W6) Wuchtschaden, und jeder Feind innerhalb von 3 m der gegriffenen Kreatur muss einen GES-Rettungswurf SG 16 bestehen oder erleidet 10 (3W6) Wuchtschaden." }
    ],
    reaktionen: [
      { name: "Zungenrückzug", beschreibung: "Wenn eine der Zungen des Wurms Schaden erleidet, der sie nicht sofort zerstört, kann der Wurm jedes Ziel, das diese Zunge Gepackt hält, loslassen und die Zunge in seinen Körper zurückziehen. Diese Zunge kann nicht als Ziel genommen werden, bis der Wurm sie erneut einsetzt, um eine Kreatur zu packen." }
    ],
    legendaere_aktionen: [
      { name: "Erde aufreißen", beschreibung: "Der Wurm windet sich und sendet Erschütterungen durch den Boden, öffnet einen 6-m-breiten, 30-m-langen, 12-m-tiefen Riss in der Erde, der vom Wurm ausgeht. Jede Kreatur in diesem Bereich muss einen GES-Rettungswurf SG 19 bestehen. Bei einem misslungenen Rettungswurf fällt eine Kreatur in den Riss, erleidet 14 (4W6) Wuchtschaden durch den Sturz und landet Liegend. Bei einem erfolgreichen Rettungswurf weicht eine Kreatur in den nächstgelegenen freien Raum außerhalb des Rissbereichs aus." },
      { name: "Erdendurchbruch", beschreibung: "Der Wurm gräbt sich bis zur halben Grabungsgeschwindigkeit und bricht dann durch die Oberfläche auf einem 3-m-Radius-Kreis durch. Riesige und kleinere Kreaturen in diesem Bereich müssen einen GES-Rettungswurf SG 19 bestehen oder werden verschluckt (als ob durch die Verschlingen-Aktion des Wurms)." },
      { name: "Besser raus als rein", beschreibung: "Der Wurm erbricht den Inhalt seines Magens in einem 18-m-Kegel. Jede Kreatur in diesem Bereich muss einen GES-Rettungswurf SG 19 bestehen oder erleidet 21 (6W6) Wuchtschaden plus 21 (6W6) Säureschaden (halber Schaden bei Erfolg). Kreaturen, die vom Wurm verschluckt wurden, werden ausgestoßen: Sie erleiden 21 (6W6) Wuchtschaden und landen Liegend in einem freien Raum nach Wahl des Wurms in dem Bereich." }
    ],
    source: "Flee Mortals"
  },
  {
    name: "Koptourok",
    art: "Untoter",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 5,
    xp: 1800,
    rk: 13,
    ruestungstyp: null,
    tp: 90,
    tp_wuerfel: "12W8+36",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 9, DEX: 16, CON: 16, INT: 10, WIS: 12, CHA: 8 },
    rettungswuerfe: { GES: 6, KON: 6 },
    fertigkeiten: { "Wahrnehmung": 4 },
    schadensresistenzen: ["Nekrotisch", "Gift", "Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Erschöpft", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet"],
    sinne: ["Blindsicht 36 m"],
    passiveWahrnehmung: 14,
    sprachen: ["versteht die Sprachen, die er zu Lebzeiten kannte, kann aber nicht sprechen"],
    umgebung: ["Unterirdisch", "Höhle"],
    bild: "flee-mortals/koptourok.png",
    beschreibung: ["Der Koptourok — aus einem archaischen Zwergendialekt, übersetzt etwa als 'toter Tourist' — ist ein Untoter, der einst in einer Welt mit Himmel lebte und seine letzten Momente an einem dunklen, atemlosen Ort verbrachte. Er erwacht als raspelnde Papierhuthülle, wie eine Kreuzung aus einer ausgewickelten Mumie und einem Akkordeonbalg, der sich unaufhörlich ausdehnt und zusammenzieht.", "Die Luft wird in Anwesenheit eines Koptourok spürbar dünner, und das Wenige, das übrig bleibt, bewegt sich auf ihn zu. Fleischfressende Untote jagen oft gemeinsam mit einem Koptourok, denn der Atemsauger nimmt das Seine und überlässt den Leichnam den Aasfressern."],
    besonderheiten: [
      { name: "Atemlose Aura", beschreibung: "Feinde innerhalb von 9 m können nicht sprechen. Müssen sie atmen, haben sie zudem Nachteil auf KON-Rettungswürfe." },
      { name: "Atemflügel", beschreibung: "Der Koptourok erhält eine Fluggeschwindigkeit, die seiner Gehgeschwindigkeit entspricht, solange sich mindestens ein Feind innerhalb von 9 m befindet. Beginnt er seinen Zug in der Luft ohne Fluggeschwindigkeit, fällt er." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Koptourok führt zwei Würgegriff-Angriffe aus." },
      { name: "Würgegriff", beschreibung: "Nahkampfzauberangriff: +6, Reichweite 9 m, eine Kreatur. Treffer: 14 (4W6) Wuchtschaden, und das Ziel wird in einen freien Raum innerhalb von 1,5 m des Koptourok gezogen und Gepackt (Befreiungs-SG 14). Solange es so gepackt ist, ist das Ziel Festgesetzt, und die Bewegungsweite des Koptourok wird durch das Greifen nicht halbiert." },
      { name: "Letzter Atemzug", beschreibung: "Der Koptourok versucht, den Atem jeder Kreatur zu stehlen, die er greift. Jedes Ziel muss einen KON-Rettungswurf SG 14 ablegen. Misslungen: 14 (4W6) Wuchtschaden. Bei Erfolg: halber Schaden. Der Koptourok erhält temporäre TP in Höhe von 5 × Anzahl der Kreaturen, die den Rettungswurf nicht bestanden haben." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Donnerndes Deflation", beschreibung: "Wenn der Koptourok auf 30 TP oder weniger fällt, lässt er einen schrillenden Schrei los. Jede Kreatur innerhalb von 9 m muss einen KON-Rettungswurf SG 14 ablegen. Misslungen: 16 (3W10) Donnerschaden und Taub bis zum Ende des nächsten Zuges. Bei Erfolg: halber Schaden, nicht Taub. Der Koptourok lässt dann alle gepackten Kreaturen los und fliegt bis zu seiner Bewegungsweite." }
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
    bild: "flee-mortals/krallenfisch.png",
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
    bild: "flee-mortals/krallenfisch-begleiter.png",
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
    name: "Kriegsspinne",
    art: "Tier",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 73,
    tp_wuerfel: "7W12+28",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m" },
    attribute: { STR: 18, DEX: 14, CON: 18, INT: 2, WIS: 11, CHA: 4 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 3 m", "Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Wald", "Unterirdisch", "Hügel"],
    bild: "flee-mortals/kriegsspinne.png",
    beschreibung: [
      "Kriegsspinnen sind gigantische Arachniden, die von erfahrenen Goblin-Stämmen als Reittiere und lebende Kriegsmaschinen eingesetzt werden. Ihr breiter Rücken bietet Platz für Scharen kleiner Reiter, ihr Spinnennetz hält Feinde fest, und im Tod werden sie selbst zur Bedrohung: Aus dem berstenden Körper bricht ein hungriger Spinnenschwarm hervor."
    ],
    besonderheiten: [
      { name: "Spinnenschwarm", beschreibung: "Wenn die Spinne stirbt, bricht ein Spinnenschwarm aus ihren Überresten hervor und handelt auf derselben Initiativezahl, auf der die Spinne zuletzt gehandelt hat." },
      { name: "Reiterkatapult", beschreibung: "Ein verbündeter Reiter, der von der Spinne springt, hat eine Weitsprungweite von 9 m und eine Hochsprungweite von 4,5 m, mit oder ohne Anlauf. Springt ein verbündeter Reiter von der Spinne, hat der erste Nahkampfwaffenangriff, den der Verbündete in demselben Zug ausführt, Vorteil." },
      { name: "Spinnenkletterei", beschreibung: "Die Spinne kann schwierige Oberflächen, einschließlich Decken, ohne Eigenschaftsprüfung erklettern." },
      { name: "Netzläufer", beschreibung: "Die Spinne ignoriert Bewegungseinschränkungen durch Spinnweben." },
      { name: "Breiter Rücken", beschreibung: "Zwei Kleine oder Winzige Kreaturen können denselben Raum teilen, während sie auf der Spinne reiten, sodass bis zu 18 Kleine oder 72 Winzige Kreaturen gleichzeitig auf ihr reiten können." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Stichschaden plus 7 (2W6) Giftschaden." },
      { name: "Klingenbein", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 3 m, ein Ziel. Treffer: 11 (2W6+4) Hiebschaden." },
      { name: "Netzsprüher", beschreibung: "Die Spinne sprüht Spinnweben aus ihrem Hinterleib in einem 4,5-m-Würfel. Jede Kreatur in diesem Bereich muss einen GES-Rettungswurf SG 14 bestehen oder ist durch die Spinnweben Festgesetzt. Eine Kreatur kann eine Aktion verwenden, um eine STR- oder GES-Probe SG 14 abzulegen und sich selbst oder eine andere Kreatur in ihrer Reichweite bei Erfolg zu befreien." },
      { name: "Niedertrampeln (Aufladen 6)", beschreibung: "Die Spinne kann sich bis zu ihrer Bewegungsweite bewegen und dabei durch die Räume anderer Kreaturen wie durch schwieriges Gelände ziehen. Sie kann gegen jede Kreatur, in deren Raum sie sich bewegt, einen Klingenbein-Angriff ausführen. Eine durch diesen Angriff getroffene Kreatur kann bis zum Beginn ihres nächsten Zuges keine Reaktionen ausführen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Lakuna",
    art: "Unhold",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 15,
    xp: 13000,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 195,
    tp_wuerfel: "26W8+78",
    bewegung: {},
    attribute: { STR: 5, DEX: 10, CON: 17, INT: 18, WIS: 16, CHA: 24 },
    rettungswuerfe: { GES: 5, WEI: 8, CHA: 12 },
    fertigkeiten: { "Arkane Kunde": 9, "Täuschung": 12, "Einblick": 8, "Überzeugung": 12 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Erschöpft", "Verängstigt", "Gepackt", "Gelähmt", "Versteinert", "Vergiftet", "Liegend", "Fixiert", "Betäubt"],
    sinne: ["Wahres Sehen 18 m"],
    passiveWahrnehmung: 13,
    sprachen: ["Abyssal", "Gemeinsprache", "Infernal"],
    umgebung: ["Ruinen"],
    bild: "flee-mortals/lakuna.png",
    beschreibung: [
      "Die Lakuna ernährt sich vom Kummer verlassener Orte. Zunächst speist dieses böse Teufelswesen von den Emotionen einsamer Bewohner oder Trauernder, die kommen, um ihren Verstorbenen Respekt zu erweisen. Der Tod dieser Opfer beginnt einen Trauerzyklus, der die Lakuna auf unbestimmte Zeit mit weiterer Beute versorgt.",
      "Eine Lakuna nimmt die Form einer rissigen und bröckelnden Statue an, deren Gesicht eine Maske unerträglichen Kummers trägt. Wann immer Abenteurer das Jagdgebiet einer Lakuna betreten, folgt das Teufelswesen ihnen eine Weile und weidet sich an jeder Gewalt, die die Eindringlinge begehen. Entdecken die Abenteurer jedoch Freude – vielleicht beim Auffinden von Schätzen oder nach dem Überleben eines schwierigen Kampfes – schlägt die Lakuna zu.",
      "Lakunen existieren halb in der Mundanen Welt und halb in welcher Unteren Ebene auch immer sie entstammen. Diese duale Existenz erlaubt es der Lakuna, sich nach Belieben zu teleportieren und Schaden zu entgehen."
    ],
    besonderheiten: [
      { name: "Ausweichen", beschreibung: "Wenn die Lakuna einem Effekt ausgesetzt ist, der ihr erlaubt, einen Rettungswurf abzulegen, um nur halben Schaden zu nehmen, nimmt sie bei Erfolg stattdessen keinen Schaden und bei Misserfolg nur halben Schaden." },
      { name: "Falsche Erscheinung", beschreibung: "Solange die Lakuna reglos bleibt, ist sie von einer normalen Statue nicht zu unterscheiden." },
      { name: "Zwischenwesen", beschreibung: "Die Lakuna hat keine Gehgeschwindigkeit und kann von keinem Bonus auf ihre Bewegungsweite profitieren." },
      { name: "Übernatürliche Resistenz", beschreibung: "Die Lakuna hat Vorteil auf Rettungswürfe gegen Kräfte, Zauber und andere übernatürliche Effekte." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Lakuna führt drei Angriffe mit Kummerfresser aus und setzt Trauer einflößen ein, falls verfügbar." },
      { name: "Kummerfresser", beschreibung: "Nah- oder Fernkampfzauberangriff: +12, Reichweite 1,5 m oder 6 m, eine Kreatur. Treffer: 29 (4W10+7) Psychischschaden, und die Bewegungsrate des Ziels wird bis zum Ende seines nächsten Zuges um 3 m reduziert." },
      { name: "Trauer einflößen (1/Tag)", beschreibung: "Jeder Feind, den die Lakuna innerhalb von 9 m sehen kann, muss einen WEI-Rettungswurf SG 20 bestehen oder ist für 1 Minute von Trauer überwältigt (Rettungswurf am Ende des Zuges erlaubt). Während eine Kreatur überwältigt ist, werden Angriffe gegen sie mit Vorteil ausgeführt." }
    ],
    bonusaktionen: [
      { name: "Zwischen-Gleiten", beschreibung: "Die Lakuna teleportiert sich bis zu 18 m in einen unbesetzten Raum, den sie sehen kann." }
    ],
    reaktionen: [
      { name: "Weggleiten", beschreibung: "Wenn eine Kreatur innerhalb von 18 m die Lakuna mit einem Angriff zum Ziel nimmt, teleportiert sich die Lakuna bis zu 18 m in einen unbesetzten Raum, den sie sehen kann. Ist die Lakuna kein gültiges Ziel mehr für den auslösenden Angriff, muss der Angreifer ein neues Ziel wählen oder der Angriff verfehlt." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Lamasombra",
    art: "Monstrosität",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 13,
    xp: 10000,
    rk: 16,
    ruestungstyp: null,
    tp: 204,
    tp_wuerfel: "24W8+96",
    bewegung: { "Gehen": "18 m", "Klettern": "18 m" },
    attribute: { STR: 18, DEX: 22, CON: 19, INT: 7, WIS: 14, CHA: 8 },
    rettungswuerfe: { GES: 11, KON: 9 },
    fertigkeiten: { "Wahrnehmung": 7, "Heimlichkeit": 16, "Überleben": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 36 m"],
    passiveWahrnehmung: 17,
    sprachen: [],
    umgebung: ["Höhle", "Unterirdisch"],
    bild: "flee-mortals/lamasombra.png",
    beschreibung: ["Die Lamasombra — ein achtbeiniges, graugeschupptes Reptil von der Größe eines Erwachsenen — ist aller Wahrscheinlichkeit nach das Werk eines fleischbiegenden Magiers oder Kults. Dieser Echsen-Arachniden-Hybrid spezialisiert sich auf das Jagen von Höhlenbewohnern.", "Die unnatürlichen Schuppen der Lamasombra beugen die Dunkelheit so, dass sie für Kreaturen mit Dunkelsicht im Dunkeln oder in dämmrigem Licht unsichtbar wird. Hat sie ihr Opfer mit ihrer krankmachenden Krankheit infiziert, verfolgt sie geduldig die Blutspur und wartet ab, bis Fieber und Schwäche ihre Beute erlegen haben."],
    besonderheiten: [
      { name: "Höhlenspitze", beschreibung: "Die Lamasombra kann nicht mit Zittersinn wahrgenommen werden. Befindet sie sich im Dunkeln oder in dämmrigem Licht, ist sie für Kreaturen mit Dunkelsicht unsichtbar, für Kreaturen ohne Dunkelsicht jedoch in dämmrigem Licht sichtbar." },
      { name: "Spinnenklettern", beschreibung: "Die Lamasombra kann an schwierigen Oberflächen klettern, einschließlich kopfüber an Decken, ohne eine Fertigkeitsprobe abzulegen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Lamasombra führt einen Biss-Angriff und einen Zungen-Angriff aus." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +11, Reichweite 1,5 m, ein Ziel. Treffer: 33 (6W8+6) Stichschaden. Ist das Ziel eine Kreatur, muss es einen KON-Rettungswurf SG 17 ablegen oder erkrankt an der Kochenden-Abfall-Seuche. Bis die Krankheit geheilt ist, kann das Ziel keine TP zurückgewinnen, und die Lamasombra kann die Richtung zu seinem Aufenthaltsort erspüren, solange sie sich auf derselben Existenzebene befinden." },
      { name: "Zunge", beschreibung: "Nahkampfwaffenangriff: +11, Reichweite 6 m, ein Ziel. Treffer: 27 (6W6+6) Wuchtschaden, oder 37 (9W6+6) Wuchtschaden, wenn das Ziel die Lamasombra nicht sehen kann. Ist das Ziel Groß oder kleiner, wird es bis zu 4,5 m in gerader Linie auf die Lamasombra zugezogen." }
    ],
    bonusaktionen: [
      { name: "Albtraumhafte List", beschreibung: "Die Lamasombra ergreift die Rasen-, Ausweichen- oder Verbergen-Aktion." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Lautloser Sprecher",
    art: "Aberration",
    unterart: "Synlirii",
    groesse: "Mittelgroß",
    gesinnung: "Typischerweise Rechtschaffen böse",
    cr: 7,
    xp: 2900,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 91,
    tp_wuerfel: "14W8+28",
    bewegung: { "Gehen": "9 m", "Fliegen": "9 m" },
    attribute: { STR: 10, DEX: 16, CON: 14, INT: 19, WIS: 15, CHA: 14 },
    rettungswuerfe: { KON: 5, INT: 7, WEI: 5 },
    fertigkeiten: { "Arkane Kunde": 7, "Täuschung": 5, "Einblick": 5, "Wahrnehmung": 5, "Überzeugung": 5, "Heimlichkeit": 6 },
    schadensresistenzen: ["Wuchtschaden"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Tiefensprache", "Tiefengemein", "Telepathie 36 m"],
    umgebung: ["Unterirdisch", "Andere Ebenen"],
    bild: "flee-mortals/lautloser_sprecher.png",
    beschreibung: ["Die Synlirii — bekannt als die Lautlosen Sprecher — gelten als die mächtigsten Psioniker des Zeitraums. Nachfahren stimmloser aquatischer Kopffüßer, sind sie Humanoiden in Denkweise und Motiven fremd. Sie bezeichnen Kreaturen, die durch Fleischlippen Luft pressen, als die Bellenden — eine Schande, die korrigiert werden muss.", "Obwohl Synlirii und Überbewusstseine Erbfeinde sind, verbindet sie eine gemeinsame Obsession mit den Bellenden zu unruhigen Allianzen. Die Lautlosen Sprecher betrachten Information als ihre größte Waffe und nutzen psionische Fähigkeiten, um Erinnerungen zu manipulieren und unentdeckt in andere Kulturen einzudringen."],
    besonderheiten: [],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Sprecher manifestiert eine psionische Kraft und führt anschließend einen Tentakel- oder Psionische-Pistole-Angriff aus." },
      { name: "Tentakel", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 3 m, ein Ziel. Treffer: 15 (2W10+4) Psychischer Schaden. Ist das Ziel Groß oder kleiner, wird es Gepackt (Befreiungs-SG 15)." },
      { name: "Psionische Pistole", beschreibung: "Distanzwaffenangriff: +7, Reichweite 24/96 m, ein Ziel. Treffer: 15 (2W10+4) Kraftschaden." },
      { name: "Gedächtnisdieb (Kraft 4. Ordnung)", beschreibung: "Der Sprecher plündert psionisch den Geist einer Kreatur innerhalb von 9 m, die er sehen kann. Das Ziel muss einen INT-Rettungswurf SG 15 ablegen. Misslungen: 22 (4W10) Psychischer Schaden, und bis zu einer langen Rast oder bis es stirbt, wird der Übungsbonus des Ziels kumulativ um 1 gesenkt, während der Sprecher einen kumulativen +2-Bonus auf seine Schadenswürfe erhält. Bei Erfolg: halber Schaden ohne Reduktion. Sinkt der Übungsbonus auf 0, kann das Ziel keine neuen Gedanken fassen oder sprechen und hat Nachteil auf alle Fertigkeits- und Eigenschaftsproben, Angriffswürfe und Rettungswürfe." },
      { name: "Zerfleischen (3/Tag; Kraft 5. Ordnung)", beschreibung: "Der Sprecher entfesselt einen 4,5-m-Kegel reiner psionischer Energie. Jede Kreatur im Bereich muss einen INT-Rettungswurf SG 15 ablegen. Misslungen: 28 (8W6) Psychischer Schaden. Bei Erfolg: halber Schaden." },
      { name: "Tarnung (Kraft 3. Ordnung)", beschreibung: "Der Sprecher projiziert ein psionisches Bild über seinen Körper und verwandelt sein Aussehen für 1 Stunde in das einer Mittelgroßen Kreatur, die er gesehen hat — einschließlich des Aussehens seiner Ausrüstung. Körperliche Untersuchung deckt die Illusion auf. Eine Kreatur kann eine Aktion verwenden und eine INT(Ermitteln)-Probe SG 15 ablegen, um die Projektion als solche zu erkennen." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Hirnentleerung", beschreibung: "Wenn eine vom Sprecher gepackte Kreatur einen Rettungswurf gegen eine seiner psionischen Kräfte ablegt, hat die Kreatur Nachteil auf diesen Rettungswurf." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Leyegel",
    art: "Monstrosität",
    unterart: null,
    groesse: "Klein",
    gesinnung: "Gesinnungslos",
    cr: 0.5,
    xp: 100,
    rk: 13, ruestungstyp: "natürliche Rüstung",
    tp: 13, tp_wuerfel: "3W6+3",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 10, DEX: 15, CON: 13, INT: 4, WIS: 12, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Niedergeworfen"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 11,
    sprachen: [],
    umgebung: ["Unterirdisch", "Höhle"],
    bild: "flee-mortals/leyegel.png",
    beschreibung: [
      "Leyegel hausen in Höhlen nahe unterirdischer Leylinien. Diese schneckenartigen Kreaturen ernähren sich von Magie; wenn sie deren Anwesenheit spüren, greifen sie mit ihren zahnbesetzten Mäulern aus, um die Energie abzuzapfen und sich mit ihrer Kraft vollzusaugen. Wenn ein Leyegel satt ist, sprühen die Stacheln an seinem Körper magische Energie.",
      "Rasende Fresslust. Wenn Leyegel sich von natürlicher Leylinienergie ernähren, bleiben sie zahm und selbstzufrieden. Jedoch versetzen die Zauber lebender Kreaturen Leyegel in einen Rausch und veranlassen zu hungrigen Angriffen mit wenig Rücksicht auf die eigene Sicherheit.",
      "Schlafende Bedrohungen. Wenn sie nicht fressen, rollen sich Leyegel zu felsartigen Kokons zusammen, die mit Felsbrocken verwechselt werden können, und unvorsichtige Reisende finden sich vielleicht neben einer Kolonie ruhend. Diese schlafenden Leyegel erwachen hungrig, wenn sie die Anwesenheit von Magie spüren.",
      "Leylinien-Anzapfer. Wenn große Kolonien von Leyegeln sich in einem einzigen Gebiet versammeln, kann ihre Ernährung eine Leylinie destabilisieren oder sogar vollständig austrocknen und das magische Verhalten in der unmittelbaren Umgebung beeinflussen. Wenn mehrere benachbarte Kolonien gleichzeitig fressen, kann das eine kilometerweit reichende Region betreffen."
    ],
    besonderheiten: [
      { name: "Übernatürliche Resistenz", beschreibung: "Der Leyegel hat Vorteil bei Rettungswürfen gegen Kräfte, Zauber und andere übernatürliche Effekte." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +4 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Stichschaden. Ist das Ziel eine Kreatur, die Zauber wirken kann, wählt der Leyegel eines der Zauberwirkungsattribute des Ziels. Dieses Attribut wird um 1 reduziert (Mindestwert 1), bis das Ziel eine kurze oder lange Rast abschließt, und die Form des Leyegels wird 1 Minute lang aufgeladen oder bis er Magiereinigung verwendet." },
      { name: "Magiereinigung (Nur Aufgeladene Form)", beschreibung: "Der Leyegel speit korrumpierte magische Energie auf eine Kreatur, die er innerhalb von 9 m sehen kann. Der Leyegel ist nicht länger aufgeladen, und das Ziel muss einen KON-Rettungswurf SG 11 ablegen und erleidet bei einem Fehlschlag 7 (2W6) Kraftschaden, bei einem Erfolg die Hälfte." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Lichtbieger",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 5,
    xp: 1800,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 102,
    tp_wuerfel: "12W10+36",
    bewegung: { "Gehen": "15 m" },
    attribute: { STR: 18, DEX: 14, CON: 16, INT: 6, WIS: 12, CHA: 8 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 4, "Heimlichkeit": 8 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 14,
    sprachen: [],
    umgebung: ["Wüste", "Grasland", "Wald"],
    bild: "flee-mortals/lichtbieger.png",
    beschreibung: [
      "Lichtbieger streifen durch Wüsten, Ebenen und Wälder – jede sonnenüberflutete Wildnis. Ihr Fell beugt und bricht das Umgebungslicht und erzeugt Fata Morganas, die ihre Beute ablenken und verwirren – daher ihr Name.",
      "Verborgene Jäger: In der Ferne ähnelt ein Lichtbieger einem gewöhnlichen Löwen, doch aus der Nähe offenbaren sich leuchtende Augen, eine schillernde Mähne und ein Paar peitschender Schweife, gespickt mit lichtbrechenden Kristallen. Das Fell verzerrt Licht auf magische Weise, um Bewegungen zu verschleiern, und ermöglicht dem Lichtbieger zu teleportieren, während er ein visuelles Nachbild hinterlässt. Ahnungslose Beute merkt selten, dass sie auf ein Abbild starrt, bis die Kreatur heranspringt.",
      "Begehrte Mähnen: Sowohl männliche als auch weibliche Lichtbieger tragen die charakteristische Mähne, die für ihre lichtverschiebenden Eigenschaften geschätzt wird und zu einem Mantel des Lichtbiegers verarbeitet werden kann – wenngleich nur wenige Magier dieses Wissen besitzen.",
      "Schützende Gefährten: Obwohl Lichtbieger typischerweise Einzelgänger sind, betreten sie manchmal das Territorium eines anderen Lichtbiegers, um Neugeborene zu schützen. Einigen Menschen ist es gelungen, sie als Wächter oder Jagdtiere zu zähmen – treue Beschützer, die ihre kleineren Begleiter oft als Ersatzkätzchen betrachten."
    ],
    besonderheiten: [
      { name: "Ausweichen", beschreibung: "Wenn der Lichtbieger einem Effekt ausgesetzt ist, der einen Rettungswurf erlaubt, um nur halben Schaden zu nehmen, erleidet er bei Erfolg keinen Schaden, und bei einem misslungenen Rettungswurf nur halben Schaden." },
      { name: "Ansprung", beschreibung: "Wenn der Lichtbieger sich mindestens 6 m geradewegs auf eine Kreatur zu bewegt und sie dann in demselben Zug mit einem Klauen-Angriff trifft, muss das Ziel einen STR-Rettungswurf SG 15 bestehen oder wird zu Boden geworfen. Ist das Ziel Liegend, kann der Lichtbieger als Bonusaktion einen Biss-Angriff gegen es ausführen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Lichtbieger führt einen Biss- und zwei Klauen-Angriffe aus, oder verwendet zweimal Schweifhieb." },
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W8+4) Stichschaden." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 1,5 m, ein Ziel. Treffer: 7 (1W6+4) Hiebschaden." },
      { name: "Schweifhieb", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 4,5 m, ein Ziel. Treffer: 7 (1W6+4) Wuchtschaden plus 7 (2W6) Strahlenschaden." },
      { name: "Hypnotische Mähne (1/Tag)", beschreibung: "Der Lichtbieger entlädt das in seiner Mähne gespeicherte Licht in einer strahlenden, betörenden Darbietung. Jede Kreatur innerhalb von 4,5 m muss einen WEI-Rettungswurf SG 14 bestehen oder wird für 1 Minute vom Lichtbieger Bezaubert. Während sie so Bezaubert ist, ist eine Kreatur Kampfunfähig und hat eine Bewegungsweite von 0. Erleidet eine so Bezauberte Kreatur Schaden oder verwendet eine andere Kreatur eine Aktion, um sie aus ihrer Betäubung zu rütteln, endet der Zustand für diese Kreatur." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Nachbild", beschreibung: "Wenn der Lichtbieger von einem Angriff getroffen wird, kann er enthüllen, dass der Angreifer ein vergangenes visuelles Abbild angreift. Der Lichtbieger erscheint in einem freien Raum innerhalb von 9 m seines Abbilds, den er sehen kann, der Angriff verfehlt, und das Abbild verschwindet. Diese Reaktion funktioniert nicht, wenn der Angreifer auf andere Sinne als Sicht angewiesen ist (z. B. Blindsicht) oder Illusionen als falsch erkennt (z. B. Wahres Sehen)." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Lichtdieb",
    art: "Unhold",
    unterart: null,
    groesse: "Winzig",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 3,
    xp: 700,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 38,
    tp_wuerfel: "11W4+11",
    bewegung: { "Gehen": "6 m", "Fliegen": "9 m" },
    attribute: { STR: 6, DEX: 17, CON: 12, INT: 6, WIS: 16, CHA: 5 },
    rettungswuerfe: {},
    fertigkeiten: { "Wahrnehmung": 5, "Heimlichkeit": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 18 m"],
    passiveWahrnehmung: 15,
    sprachen: ["versteht Abyssal, Gemein und Infernal, kann aber nicht sprechen"],
    umgebung: ["Ruinen", "Stadt"],
    bild: "flee-mortals/lichtdieb.png",
    beschreibung: [
      "Ein Lichtdieb ist ein Teufelswesen, das in die Mundane Welt kommt, um sich von Seelenenergie zu ernähren. Sie streifen durch Friedhöfe und Grüfte, wo sie wissen, dass verletzliche Trauernde in der Dunkelheit kommen, um ihren Verstorbenen Respekt zu erweisen. Diese Fledermausflügelwesen ähneln abgehäuteten humanoiden Händen mit einem blutunterlaufenen Auge, das von der Handfläche starrt – obwohl ihre Opfer kaum die Chance haben, sie zu bemerken, bevor die Dunkelheit hereinbricht.",
      "Lichtdiebe verfolgen Opfer oft in Gruppen und nutzen ihre übernatürlichen Kräfte, um Lichtquellen in der Nähe ihrer Beute zu betreten und zu löschen. Die Lichtdiebe verzehren die Energie jedes Lichts und nutzen diese Energie dann kurz vor dem Angriff, um einen Fluch anzutreiben, der Kreaturen vorübergehend ihrer Dunkelsicht beraubt.",
      "Die Strategie ist nicht ohne Schwächen. Wenn eine andere Kreatur eine Lichtquelle auslöscht, in die der Teufel eingetreten ist, wird der Lichtdieb herausgeworfen und ist kurzzeitig hilflos. Abenteurer, die in Grabstätten vordringen, wären gut beraten, solche Abwehrmechanismen zu erforschen.",
      "Während Lichtdiebe es vorziehen, Trauernde anzugreifen, werden die Friedhöfe und Grüfte, die sie heimsuchen, schließlich vergessen. Ein Lichtdieb in einer alten Grabstätte ist so ausgehungert nach Seelenenergie, dass er jeden Lebenden angreift, dem er begegnet."
    ],
    besonderheiten: [],
    aktionen: [
      { name: "Nekrotischer Entzug", beschreibung: "Nahkampfzauberangriff: +5, Reichweite 1,5 m, ein Ziel. Treffer: 10 (2W6+3) Nekrotischschaden, oder 13 (3W6+3) Nekrotischschaden, wenn das Ziel den Lichtdieb nicht sehen kann." },
      { name: "Ins Licht (Aufladung 6)", beschreibung: "Der Lichtdieb teleportiert sich in eine Lichtquelle, die er innerhalb von 4,5 m sehen kann und die helles oder dämmriges Licht ausstrahlt. Während er sich in der Lichtquelle befindet, hat der Lichtdieb volle Deckung gegen Angriffe und andere Effekte außerhalb der Lichtquelle. Wird die Lichtquelle durch andere Mittel als die Aktion Licht stehlen des Lichtdiebs gelöscht, wird er herausgeworfen, erscheint in einem unbesetzten Raum seiner Wahl innerhalb von 1,5 m der Lichtquelle und ist bis zum Ende seines nächsten Zuges Gelähmt." },
      { name: "Licht stehlen (Nur innerhalb einer Lichtquelle)", beschreibung: "Der Lichtdieb lässt das Licht, in dem er sich befindet, in einem Schwall strahlender Helligkeit aufleuchten. Jede Kreatur innerhalb von 4,5 m der Lichtquelle muss einen KON-Rettungswurf SG 13 ablegen. Misslungen: 14 (4W6) Strahlungsschaden, und die Kreatur verliert ihre Dunkelsicht für 1 Minute. Erfolg: halber Schaden, und die Kreatur verliert ihre Dunkelsicht nicht. Danach erlischt die Lichtquelle und der Lichtdieb erscheint in einem unbesetzten Raum seiner Wahl innerhalb von 1,5 m der Lichtquelle." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Marvorok",
    art: "Monstrosität",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Chaotisch Böse",
    cr: 17,
    xp: 18000,
    rk: 18, ruestungstyp: "natürliche Rüstung",
    tp: 230, tp_wuerfel: "20W10+120",
    bewegung: { "Gehen": "12 m", "Klettern": "12 m" },
    attribute: { STR: 17, DEX: 23, CON: 23, INT: 10, WIS: 18, CHA: 12 },
    rettungswuerfe: { STR: 9, GES: 12, WEI: 10 },
    fertigkeiten: { "Athletik": 9, "Wahrnehmung": 16, "Heimlichkeit": 12 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsinn 90 m"],
    passiveWahrnehmung: 26,
    sprachen: ["Tiefensprache"],
    umgebung: ["Unterirdisch", "Höhle"],
    bild: "flee-mortals/marvorok.png",
    beschreibung: [
      "Marvoroks (marr-VORR-ock) sind heimtückische Raubtiere, die in den tiefsten Schichten der Unterwelt hausen und ständig nach Beute suchen, um ihren scheinbar endlosen Hunger zu stillen. Diese monströsen zweibeinigen Wesen haben sechs Arme, von denen vier in scharfen, schwertartigen Klauen enden. Ihr Sehvermögen ist schlecht, aber sie kompensieren dies mit ihrem unglaublichen Geruchssinn, der es ihnen ermöglicht, allein durch Witterung zu jagen. Marvoroks nutzen ihre Klauen, um sich in felsige Oberflächen zu krallen und sich hochzuziehen — sie klettern so mühelos wie sie laufen.",
      "Stiller Tod. Bemerkenswert lautlos für ihre massive Größe, lauern Marvoroks ihrer Beute auf, bevor sie zum Töten vorgehen. Sie warten geduldig auf den perfekten Hinterhalt, springen aus dem Versteck hervor und zerfetzen ihre Opfer in einem ungeschützten Moment.",
      "Einzelgänger. Marvoroks führen bevorzugt ein Einzelgängerleben und kommen nur zusammen, um sich zu paaren oder besonders große oder gefährliche Beute zu jagen. In mageren Zeiten arbeiten sie zusammen, um Kreaturen in ein gemeinsames Jagdgebiet zu treiben — was gewöhnlich in Kämpfen unter ihnen endet.",
      "Fresser der Toten. Marvoroks schrecken nicht davor zurück, nach Nahrung zu aasen und verfaultes Fleisch von den Knochen längst toter Kreaturen zu reißen. Verhungernde Marvoroks graben sich sogar in Katakomben oder Gräber, um nach Überresten zu suchen."
    ],
    besonderheiten: [
      { name: "Geruchsabhängigkeit", beschreibung: "Der Marvorok kann seinen Blindsinn nicht verwenden, wenn er nicht atmen oder riechen kann." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Marvorok führt drei Klauen-Angriffe und einen Aufweiden-Angriff aus." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +12 zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: 19 (3W8+6) Hiebschaden, und wenn das Ziel Groß oder kleiner ist, wird es Gepackt (Entkommen SG 17). Solange dieses Packen anhält, ist das Ziel Festgesetzt. Der Marvorok kann bis zu zwei Kreaturen gleichzeitig packen." },
      { name: "Aufweiden", beschreibung: "Nahkampfwaffenangriff: +12 zum Treffen, Reichweite 1,5 m, eine vom Marvorok gepackte Kreatur. Treffer: 17 (2W10+6) Stichschaden plus 17 (2W10+6) Hiebschaden." }
    ],
    bonusaktionen: [
      { name: "Luft erschnüffeln", beschreibung: "Der Marvorok führt einen WEI-Wahrnehmungswurf aus." },
      { name: "Unterirdischer Pirscher", beschreibung: "Der Marvorok teleportiert zusammen mit allen von ihm gepackten Kreaturen bis zu 9 m in ein unbesetztes Feld, das er sehen kann. Teleportiert sich der Marvorok in einen Bereich mit schwachem Licht oder Dunkelheit, kann er die Aktion Verstecken als Teil dieser Bonusaktion durchführen, und alle von ihm gepackten Kreaturen können bis zum Ende des nächsten Zuges des Marvoroks nicht sprechen oder Geräusche machen." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Massiges Gehirn",
    art: "Aberration",
    unterart: "Synlirii-Schöpfung",
    groesse: "Groß",
    gesinnung: "Typischerweise Rechtschaffen böse",
    cr: 7,
    xp: 2900,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 126,
    tp_wuerfel: "12W10+60",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 21, DEX: 10, CON: 20, INT: 8, WIS: 6, CHA: 12 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Blindsicht 36 m (blind darüber hinaus)"],
    passiveWahrnehmung: 8,
    sprachen: ["Tiefensprache", "Tiefengemein", "Telepathie 36 m"],
    umgebung: ["Unterirdisch"],
    bild: "flee-mortals/massiges_gehirn.png",
    beschreibung: ["Die Thylinqa — von allen anderen als Massige Gehirne bezeichnet — sind von den Lautlosen Sprechern gezüchtete Aberrationen: humanoide Gestalten mit perlmuttfarbener Haut, vier massiven Armen und einem pulsierenden Gehirn anstelle eines Kopfes. Sie dienen als Leibwächter und psionische Batterien für ihre Synlirii-Schöpfer."],
    besonderheiten: [
      { name: "Psionische Immunität", beschreibung: "Das Gehirn wird von psionischen Kräften Lautloser Sprecher nicht beeinflusst, es sei denn, es wünscht dies." },
      { name: "Psychischer Schrei", beschreibung: "Wenn das Gehirn auf 0 TP fällt, muss jede Kreatur innerhalb von 9 m einen WEI-Rettungswurf SG 16 ablegen. Misslungen: 21 (6W6) Psychischer Schaden. Bei Erfolg: halber Schaden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Das Gehirn führt drei Rempeln-Angriffe aus." },
      { name: "Rempeln", beschreibung: "Nahkampfwaffenangriff: +8, Reichweite 3 m, ein Ziel. Treffer: 14 (2W8+5) Wuchtschaden, und das Ziel ist Gepackt (Befreiungs-SG 15). Solange das Greifen anhält, ist das Ziel Festgesetzt und hat Nachteil auf Rettungswürfe gegen psionische Kräfte. Das Gehirn kann bis zu vier Kreaturen gleichzeitig greifen." },
      { name: "Quetschen", beschreibung: "Jede vom Gehirn gepackte Kreatur muss einen STR-Rettungswurf SG 16 ablegen. Misslungen: 22 (4W10) Wuchtschaden. Bei Erfolg: halber Schaden." }
    ],
    bonusaktionen: [
      { name: "Psionische Stärkung (1/Tag)", beschreibung: "Jeder willige Lautlose Sprecher innerhalb von 18 m erhält den Einsatz einer psionischen Kraft seiner Wahl zurück und hat Vorteil auf Angriffswürfe bis zum Ende des nächsten Zuges des Gehirns." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Menschlicher Halunke",
    art: "Humanoid",
    unterart: "Mensch",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 3,
    xp: 700,
    rk: 16,
    ruestungstyp: "Brustpanzer und Schild",
    tp: 60,
    tp_wuerfel: "8W8+24",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 18, DEX: 10, CON: 16, INT: 10, WIS: 12, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Einschüchterung": 4, "Wahrnehmung": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 13,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Stadt", "Ruinen", "Hügel"],
    bild: "flee-mortals/menschlicher_halunke.png",
    beschreibung: [
      "Halunken sind kampferprobte Schläger und Söldner, die rohe Stärke mit grobschlächtigem Taktikkalkül verbinden. Einen Feind erst zu Boden zu schmettern und dann nachzutreten ist für sie kein unfairer Trick – es ist Kriegsführung."
    ],
    besonderheiten: [
      { name: "Schwachstelle ausnutzen (3/Tag)", beschreibung: "Wenn der Halunke einen Angriff ausführt, hat er Vorteil beim Angriffswurf." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Halunke führt zwei Morgenstern- oder zwei Wurfspeer-Angriffe aus. Er kann einen Angriff durch einen Schildhieb-Angriff ersetzen." },
      { name: "Morgenstern", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W8+4) Stichschaden, oder 13 (2W8+4) Stichschaden, wenn das Ziel Liegend ist." },
      { name: "Schildhieb", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 1,5 m, ein Ziel. Treffer: 6 (1W4+4) Wuchtschaden, und ist das Ziel eine Mittelgroße oder kleinere Kreatur, muss es einen STR-Rettungswurf SG 14 bestehen oder wird zu Boden geworfen." },
      { name: "Wurfspeer", beschreibung: "Distanzwaffenangriff: +6, Reichweite 9/36 m, ein Ziel. Treffer: 7 (1W6+4) Stichschaden." }
    ],
    bonusaktionen: [
      { name: "Bleib unten!", beschreibung: "Der Halunke tritt eine Liegende Kreatur innerhalb von 1,5 m. Das Ziel muss einen KON-Rettungswurf SG 14 bestehen oder seine Bewegungsweite wird bis zum Ende seines nächsten Zuges auf 0 reduziert." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Menschlicher Lehrmagier",
    art: "Humanoid",
    unterart: "Mensch",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 6,
    xp: 285,
    rk: 14,
    ruestungstyp: "Nietelederpanzer",
    tp: 13,
    tp_wuerfel: null,
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 8, DEX: 14, CON: 10, INT: 14, WIS: 11, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Arkanes": 5 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 10,
    sprachen: ["Gemeinsprache", "plus zwei weitere Sprachen"],
    umgebung: ["Stadt", "Ruinen"],
    bild: "flee-mortals/menschlicher_lehrmagier.png",
    beschreibung: [
      "Menschliche Lehrmagier stehen noch am Anfang ihrer arkanen Ausbildung, doch im Verbund werden sie zur ernstzunehmenden Bedrohung. Ihre wahre Stärke liegt nicht im Einzelangriff, sondern in der koordinierten Macht gebündelter Blitz- und Donnerzauber – und in dem Schutz, den sie ihrem gewählten Schutzherrn gewähren."
    ],
    besonderheiten: [
      { name: "Schutzherrn stärken", beschreibung: "Eine Nicht-Schergen-Kreatur dient dem Magier als Schutzherr im Austausch für seinen magischen Schutz. Zu Beginn des Zuges des Schutzherrn erhält dieser temporäre Trefferpunkte in Höhe des Doppelten der Anzahl an Lehrmagiern innerhalb von 18 m, die ihn als Schutzherrn gewählt haben und ihn sehen können." },
      { name: "Schwäche ausnutzen", beschreibung: "Wenn der Magier einen Angriff mit Vorteil ausführt oder sich einem solchen anschließt, verursacht der Angriff 1 zusätzlichen Schaden pro Magier, der den Angriff ausgeführt hat oder sich ihm angeschlossen hat." },
      { name: "Scherge", beschreibung: "Erleidet der Magier Schaden durch einen Angriff oder einen misslungenen Rettungswurf, sinken seine TP sofort auf 0. Erleidet er Schaden durch einen anderen Effekt, stirbt er, wenn der Schaden seinem TP-Maximum entspricht oder es überschreitet; andernfalls erleidet er keinen Schaden." }
    ],
    aktionen: [
      { name: "Blitzschlag (Gruppenangriff)", beschreibung: "Distanzzauberangriff: +5, Reichweite 36 m, eine Kreatur. Treffer: 2 Blitzschaden. Wurde dieser Angriff von mehr als einem Magier ausgeführt, wählt jeder beteiligte Magier eine Kreatur innerhalb von 9 m vom ursprünglichen Ziel. Jede gewählte Kreatur erleidet 2 Blitzschaden pro Magier, der sie als Ziel gewählt hat; das Merkmal Schwäche ausnutzen des Magiers erhöht diesen Schaden nicht." },
      { name: "Donnerschlag (Gruppenangriff)", beschreibung: "Nahkampfzauberangriff: +5, Reichweite 1,5 m, ein Ziel. Treffer: 4 Donnerschaden, und das Ziel kann bis zum Beginn seines nächsten Zuges keine Gelegenheitsangriffe ausführen." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Menschlicher Räuber",
    art: "Humanoid",
    unterart: "Mensch",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 0.5,
    xp: 100,
    rk: 14,
    ruestungstyp: "Wattierte Rüstung und Schild (RK 12 ohne Schild)",
    tp: 22,
    tp_wuerfel: "4W8+4",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 15, DEX: 12, CON: 12, INT: 10, WIS: 12, CHA: 10 },
    rettungswuerfe: {},
    fertigkeiten: { "Heimlichkeit": 3 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 11,
    sprachen: ["Gemeinsprache"],
    umgebung: ["Wald", "Hügel", "Küste", "Grasland"],
    bild: "flee-mortals/menschlicher_raeuber.png",
    beschreibung: [
      "Räuber sind opportunistische Kämpfer, die mit einem wilden Ansturm in den Kampf stürmen und jeden Vorteil nutzen, den sie bekommen können. Ihr Schild ist ebenso Waffe wie Schutz – und wer glaubt, an ihnen vorbeizukommen, findet sich schnell um 1,5 m weiter weg oder flach auf dem Boden wieder."
    ],
    besonderheiten: [
      { name: "Anstürmen", beschreibung: "Bewegt sich der Räuber in einem Zug mindestens 4,5 m geradewegs auf ein Ziel zu und trifft es dann mit einem Nahkampfangriff, erleidet das Ziel 3 (1W6) zusätzlichen Schaden." },
      { name: "Schwachstelle ausnutzen (3/Tag)", beschreibung: "Wenn der Räuber einen Angriff ausführt, hat er Vorteil beim Angriffswurf." }
    ],
    aktionen: [
      { name: "Handaxt", beschreibung: "Nahkampf- oder Distanzwaffenangriff: +4, Reichweite 1,5 m oder 6/18 m, ein Ziel. Treffer: 5 (1W6+2) Hiebschaden." },
      { name: "Schildstoß", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 4 (1W4+2) Wuchtschaden, und ist das Ziel eine Mittelgroße oder kleinere Kreatur, muss es einen STR-Rettungswurf SG 12 bestehen oder wird 1,5 m vom Räuber weggestoßen." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Schild zersplittern", beschreibung: "Wenn der Räuber einen Schild führt und von einem Angriff einer Kreatur getroffen wird, die er sehen kann, erhält er +4 auf seine RK gegen den auslösenden Angriff, was ihn möglicherweise verfehlen lässt. Verfehlt der Angriff dadurch, zerbricht der Schild des Räubers: bis er einen neuen erhält, sinkt seine RK um 2, und er kann diese Reaktion sowie den Schildstoß-Angriff nicht mehr einsetzen." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Menschlicher Sturmmagier",
    art: "Humanoid",
    unterart: "Mensch",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 6,
    xp: 2300,
    rk: 12,
    ruestungstyp: null,
    tp: 75,
    tp_wuerfel: "10W8+30",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 10, DEX: 14, CON: 16, INT: 18, WIS: 14, CHA: 10 },
    rettungswuerfe: { INT: 7, WEI: 5 },
    fertigkeiten: { "Arkanes": 7, "Geschichte": 7 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache", "plus zwei weitere Sprachen"],
    umgebung: ["Stadt", "Ruinen", "Gebirge"],
    bild: "flee-mortals/menschlicher_sturmmagier.png",
    beschreibung: [
      "Menschliche Sturmmagier sind mächtige Arkanisten, die die rohe Kraft von Blitz und Donner in verheerende Angriffe kanalisieren. Mit ihrem arkanen Stab entladen sie vernichtende Blitzschläge, halten Feinde mit Windböen auf Distanz und stoßen jeden Angreifer, der ihnen zu nahe kommt, mit donnernder Kraft zurück."
    ],
    besonderheiten: [
      { name: "Schwachstelle ausnutzen (3/Tag)", beschreibung: "Wenn der Magier einen Angriff ausführt, hat er Vorteil beim Angriffswurf." },
      { name: "Nutzungszauber (Zauberfähigkeit: Intelligenz, Zauber-SG 15)", beschreibung: "Jederzeit: Magiershand, Prestidigitation. 1/Tag: Hellsicht (Konzentration), Magierrüstung, Unsichtbares sehen, Botschaft." }
    ],
    aktionen: [
      { name: "Arkaner Stab", beschreibung: "Nahkampf- oder Distanzzauberangriff: +7, Reichweite 1,5 m oder 9 m, ein Ziel. Treffer: 21 (6W6) Blitzschaden." },
      { name: "Windböe (1/Tag; Zauber des 2. Grades; Konzentration)", beschreibung: "Eine 3-m-breite, 18-m-lange Linie starker Winde weht für 1 Minute vom Magier aus. Jede Kreatur, die ihren Zug in diesem Bereich beginnt, muss einen STR-Rettungswurf SG 15 bestehen oder wird 4,5 m vom Magier weggestoßen. Jede Kreatur in diesem Bereich muss für je 30 cm Bewegung auf den Magier zu 60 cm Bewegung ausgeben. Die Böe löst Gase und Dämpfe auf und löscht Kerzen, Fackeln und ähnliche ungeschützte Flammen sowie mit 50-prozentiger Wahrscheinlichkeit geschützte Flammen wie Laternen. Der Magier kann eine Bonusaktion verwenden, um die Richtung der Windböe zu ändern." },
      { name: "Blitzstrahl (3/Tag; Zauber des 3. Grades)", beschreibung: "Der Magier feuert magischen Blitz in einer 1,5-m-breiten, 30-m-langen Linie ab. Jede Kreatur in der Linie muss einen GES-Rettungswurf SG 15 bestehen oder erleidet 28 (8W6) Blitzschaden (halber Schaden bei Erfolg). Der Blitz entzündet entflammbare Gegenstände in dem Bereich, die nicht getragen werden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Arkaner Schild (3/Tag)", beschreibung: "Wenn der Magier von einem Angriff getroffen wird, erhält er magisch +5 auf seine RK gegen diesen Angriff, was ihn möglicherweise verfehlen lässt. Ist der Angreifer innerhalb von 3 m des Magiers, muss er einen KON-Rettungswurf SG 15 bestehen oder erleidet 18 (4W8) Donnerschaden und wird 3 m vom Magier weggestoßen." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Menschlicher Todeskultist",
    art: "Humanoid",
    unterart: "Mensch",
    groesse: "Mittelgroß",
    gesinnung: "Beliebige Gesinnung",
    cr: 5,
    xp: 1800,
    rk: 16,
    ruestungstyp: "Kettenrüstung",
    tp: 60,
    tp_wuerfel: "8W8+24",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 16, DEX: 10, CON: 16, INT: 14, WIS: 18, CHA: 12 },
    rettungswuerfe: { WEI: 6, CHA: 3 },
    fertigkeiten: { "Einschüchterung": 3, "Religion": 4 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: [],
    passiveWahrnehmung: 14,
    sprachen: ["Gemeinsprache", "plus eine weitere Sprache"],
    umgebung: ["Stadt", "Ruinen", "Andere Ebenen"],
    bild: "flee-mortals/menschlicher_todeskultist.png",
    beschreibung: [
      "Menschliche Todeskultisten weihen ihr Leben dem Dienst an dunklen Mächten, die über den Tod gebieten. Auf dem Schlachtfeld kanalisieren sie nekrotische Energie in verheerender Weise: Sie heilen sich an den Wunden, die sie schlagen, schwingen ihre Sense mit tödlicher Präzision und rufen Gefallene zurück ins Gefecht."
    ],
    besonderheiten: [
      { name: "Schwachstelle ausnutzen (3/Tag)", beschreibung: "Wenn der Kultist einen Angriff ausführt, hat er Vorteil beim Angriffswurf." }
    ],
    aktionen: [
      { name: "Sense", beschreibung: "Nahkampfwaffenangriff: +5, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W10+3) Hiebschaden plus 7 (2W6) Nekrotischen Schaden, und der Kultist erhält Trefferpunkte in Höhe der Hälfte des verursachten Nekrotischen Schadens zurück." },
      { name: "Todesblitz", beschreibung: "Distanzzauberangriff: +6, Reichweite 18 m, ein Ziel. Treffer: 14 (4W6) Nekrotischen Schaden, und die Waffenangriffe des Ziels verursachen bis zum Beginn des nächsten Zuges des Kultisten halben Schaden." },
      { name: "Schwarzfeuer-Segen (1/Tag)", beschreibung: "Der Kultist stärkt bis zu 10 Nicht-Schergen-Verbündete innerhalb von 9 m. Für 1 Minute oder bis der Kultist stirbt, brennen die Waffen jeder gestärkten Kreatur mit schwarzem Feuer und verursachen bei einem Treffer 2 (1W4) zusätzlichen Nekrotischen Schaden." }
    ],
    bonusaktionen: [
      { name: "Erhebt euch, meine Diener! (1/Tag)", beschreibung: "Der Kultist wählt bis zu drei Kreaturen innerhalb von 9 m, die innerhalb der letzten Minute gestorben sind. Diese Kreaturen kehren mit 1 TP ins Leben zurück, können jedoch keine TP zurückgewinnen und sterben nach 1 Minute." }
    ],
    reaktionen: [
      { name: "Leben aus dem Tod", beschreibung: "Wenn eine Kreatur, die der Kultist innerhalb von 9 m sehen kann, einen Todesrettungswurf misslingt oder stirbt, siphoniert der Kultist ihre nachlassende Lebensenergie. Der Kultist wählt eine nicht bewusstlose Kreatur innerhalb von 9 m, und diese Kreatur erhält 14 (4W6) TP zurück." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Multivok-Anführer",
    art: "Konstrukt",
    unterart: "Valok",
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 14,
    xp: 11500,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 190,
    tp_wuerfel: "20W8+100",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 21, DEX: 10, CON: 20, INT: 7, WIS: 12, CHA: 5 },
    rettungswuerfe: { STR: 10, GES: 5, KON: 10 },
    fertigkeiten: { "Athletik": 10 },
    schadensresistenzen: ["Psychisch", "Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Erschöpft", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Zwergisch"],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "flee-mortals/multivok_anfuehrer.png",
    beschreibung: ["Die Valok sind uralte Konstrukte einer längst vergessenen zwergischen Zivilisation — in Ruinen und verlassenen Festungen schlummernd, bis jemand ihren Aktivierungscode kennt. Sie kennen weder Ermüdung noch Furcht und folgen Befehlen mit maschineller Präzision.", "Als Kommandoeinheit der Valok koordiniert der Multivok-Anführer seine Untergebenen durch druckluftbetriebene Kommandosignale. Sein Zielstrahl markiert Feinde für Verbündete, und seine Druckluftfaust schleudert Gegner über das Schlachtfeld."],
    besonderheiten: [
      { name: "Unveränderliche Form", beschreibung: "Der Anführer ist immun gegen Zauber oder Effekte, die seine Form verändern würden." },
      { name: "Übernatürliche Resistenz", beschreibung: "Der Anführer hat Resistenz gegen Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Anführer führt drei Angriffe aus: Druckluftfaust, Zielstrahl oder eine Kombination beider." },
      { name: "Druckluftfaust", beschreibung: "Nahkampfwaffenangriff: +10, Reichweite 3 m, ein Ziel. Treffer: 21 (3W10+5) Wuchtschaden. Ist das Ziel Mittelgroß oder kleiner, wird es bis zu 3 m weggestoßen." },
      { name: "Zielstrahl", beschreibung: "Distanzwaffenangriff: +10, Reichweite 45 m, ein Ziel. Treffer: 26 (4W12) Kraftschaden. Das Ziel ist markiert, bis der Anführer erneut diesen Angriff ausführt oder kampfunfähig wird. Alle Angriffswürfe gegen ein markiertes Ziel haben Vorteil." }
    ],
    bonusaktionen: [
      { name: "Befehl des Anführers", beschreibung: "Der Anführer wählt einen Verbündeten innerhalb von 18 m, den er sehen kann. Dieser Verbündete kann sofort entweder seine volle Bewegungsweite zurücklegen, ohne dabei Gelegenheitsangriffe auszulösen, oder einen Nahkampfangriff ausführen, ohne dafür seine Aktion zu verbrauchen." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Multivok-Leibwächter",
    art: "Konstrukt",
    unterart: "Valok",
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 8,
    xp: 3900,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 104,
    tp_wuerfel: "11W10+44",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 21, DEX: 10, CON: 18, INT: 7, WIS: 12, CHA: 3 },
    rettungswuerfe: { STR: 8, GES: 3, KON: 7 },
    fertigkeiten: { "Athletik": 8, "Wahrnehmung": 7 },
    schadensresistenzen: ["Psychisch", "Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Erschöpft", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Zwergisch"],
    umgebung: ["Ruinen", "Unterirdisch"],
    bild: "flee-mortals/multivok_leibwaechter.png",
    beschreibung: ["Die Valok sind uralte Konstrukte einer längst vergessenen zwergischen Zivilisation — in Ruinen und verlassenen Festungen schlummernd, bis jemand ihren Aktivierungscode kennt. Sie kennen weder Ermüdung noch Furcht und folgen Befehlen mit maschineller Präzision.", "Der Multivok-Leibwächter ist die mächtigste Nahkampfvariante der Multivok-Klasse. Er ist darauf ausgelegt, wichtige Ziele zu schützen: Sein Valiar-Umhang lenkt Angriffe auf sich um, und sein magnetischer Zugmechanismus zieht metallgerüstete Feinde in Reichweite seiner Axtarme."],
    besonderheiten: [
      { name: "Unveränderliche Form", beschreibung: "Der Leibwächter ist immun gegen Zauber oder Effekte, die seine Form verändern würden." },
      { name: "Übernatürliche Resistenz", beschreibung: "Der Leibwächter hat Resistenz gegen Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Leibwächter führt drei Angriffe aus: Axtarm, Repetierende Armbrust oder eine Kombination beider." },
      { name: "Axtarm", beschreibung: "Nahkampfwaffenangriff: +8, Reichweite 1,5 m, ein Ziel. Treffer: 18 (2W12+5) Hiebschaden. Das Ziel muss einen STR-Rettungswurf SG 16 ablegen. Misslungen: Das Ziel lässt seine Waffe fallen und wird bis zu 4,5 m weggestoßen." },
      { name: "Repetierende Armbrust", beschreibung: "Distanzwaffenangriff: +3, Reichweite 24/96 m, ein Ziel. Treffer: 17 (3W10) Stichschaden." }
    ],
    bonusaktionen: [
      { name: "Magnetischer Zug", beschreibung: "Der Leibwächter aktiviert seine magnetischen Zugmechanismen. Jede Kreatur innerhalb von 9 m, die eine Metallrüstung trägt, muss einen STR-Rettungswurf SG 15 ablegen. Misslungen: Die Kreatur wird bis zu 4,5 m auf den Leibwächter zugezogen." }
    ],
    reaktionen: [
      { name: "Valiar-Umhang", beschreibung: "Wenn eine Kreatur innerhalb von 1,5 m des Leibwächters von einem Angriff getroffen wird, kann der Leibwächter sich dazwischenstellen. Der Angreifer muss seinen Angriffswurf erneut würfeln — diesmal gegen den Rüstungswert des Leibwächters." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Olothec",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 12,
    xp: 8400,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 170,
    tp_wuerfel: "20W10+60",
    bewegung: { "Gehen": "9 m", "Fliegen": "18 m (schwebend)", "Schwimmen": "18 m" },
    attribute: { STR: 21, DEX: 9, CON: 16, INT: 21, WIS: 14, CHA: 18 },
    rettungswuerfe: { KON: 7, INT: 9, WEI: 6, CHA: 8 },
    fertigkeiten: { "Geschichte": 9, "Einsicht": 10, "Einschüchterung": 8, "Wahrnehmung": 10 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Flankiert", "Verängstigt", "Liegend"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 20,
    sprachen: ["Gemeinsprache", "Tiefensprache", "Untergemein", "Telepathie 36 m"],
    umgebung: ["Ozean", "Unterirdisch", "Ruinen", "Gewässer"],
    bild: "flee-mortals/olothek.png",
    beschreibung: [
      "Protean in ihrer Form und Wesen nahezu reiner Intellekt, denken die Alten in einer fremdartig-geometrischen Logik. Ihr Name für sich selbst ist nicht überliefert, doch Gelehrte glauben, sie seien die ältesten Wesen im Zeitgefüge, und nennen sie schlicht die Alten. Synlirii bezeichnen sie als Olothec — uralte Feinde. Doch manche menschliche Gelehrte haben bemerkt, dass dieser Begriff einer anderen archaischen Synlirii-Vokabel verdächtig ähnelt, die uralte Vorfahren bedeutet.",
      "Über unzählige Kulturen und Völker hinweg erscheinen Olothec in Albträumen und auf Tempelreliefs gleichermaßen. Ihr Hass auf die Gewöhnliche Welt und jedes lebende Wesen in ihr ist gut belegt. Olothec kanalisieren psionische Energie jenseits jeglicher sterblicher Macht. Für sie ist ein Lebewesen, das seine eigene Gestalt nicht umformen kann, abstoßend — ein widernatürliches Unding, das ausgerottet oder verwandelt werden muss.",
      "Beim ersten Anblick erscheint ein Olothec wie eine wogende Masse von Tentakeln, die sich ineinander winden wie ein sich verschiebender Schleier. Kreaturen, die zu nah kommen, entdecken, dass jeder Tentakel in einem gierigen Maul mit rasiermesserscharfen Zähnen endet, das von einem Cluster aus drei Augen gekrönt wird. Stinkender Schleim bedeckt die Aberration — schützt sie vor Angreifern und dient als Kanal für ihre furchterregende psionische Macht."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Der Olothec kann Luft und Wasser atmen." },
      { name: "Unveränderliche Form", beschreibung: "Der Olothec ist immun gegen jede Macht, jeden Zauber oder Effekt, der seine Form verändern würde." },
      { name: "Übernatürliche Resistenz", beschreibung: "Der Olothec hat Vorteil auf Rettungswürfe gegen übernatürliche Effekte." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Olothec führt sechs Devolvierender-Tentakel-Angriffe aus und nutzt Fischige Verwandlung." },
      { name: "Devolvierender Tentakel", beschreibung: "Nahkampfwaffenangriff: +9, Reichweite 6 m, ein Ziel. Treffer: 12 (2W6+5) Stichschaden. Wird eine Kreatur zum ersten Mal in einem Zug von diesem Angriff getroffen, muss sie einen KON-Rettungswurf SG 17 bestehen oder wird mit einem degenerativen psionischen Schleim injiziert (Rettungswurf am Ende des Zuges des Ziels beendet den Effekt). Solange eine Kreatur verschleimt ist, muss sie bei jedem Angriffswurf und jeder Attributsprobe einen W4 würfeln und das Ergebnis vom W20-Wurf abziehen. Am Ende des Zuges einer verschleimten Kreatur vergrößert sich der abgezogene Würfel um eine Stufe: der W4 wird zu einem W6, der W6 zu einem W8, und so weiter, bis maximal zu einem W12. Die Krankheit-heilen-Macht oder ein Kleiner-Wiederherstellung-Zauber beenden diesen Effekt ebenfalls." },
      { name: "Fischige Verwandlung (Macht des 3. Grades)", beschreibung: "Der Olothec visiert einen Humanoiden, den er innerhalb von 18 m sehen kann, mit einem Impuls verwandelnder Energie an. Das Ziel muss einen WEI-Rettungswurf SG 17 bestehen oder erleidet eine der folgenden Verwandlungen nach Wahl des Olothecs: Kopf — Der Kopf des Ziels verwandelt sich in den Kopf eines Fisches, proportional zu seinem Körper; es kann nicht sprechen. Beine — Die Beine des Ziels werden zu Flossen; seine Gehgeschwindigkeit wird auf 3 m reduziert (sofern sie nicht bereits langsamer ist), und es erhält eine Schwimmgeschwindigkeit von 9 m. Torso — Der Torso des Ziels wird zum Körper eines Fisches mit Kiemen; es kann nur Wasser atmen und kann seinen Atem bis zu 1 Stunde lang anhalten (befindet sich das Ziel beim Eintreten dieser Verwandlung nicht unter Wasser, beginnt es zu ersticken). Diese Verwandlung hält an, bis das Ziel durch eine Krankheit-heilen-Macht 4. Grades oder höher oder einen Größere-Wiederherstellung-Zauber beeinflusst wird. Ein Ziel, das alle drei Verwandlungen gleichzeitig erleidet, wird dauerhaft in eine hybride fischähnliche Kreatur verwandelt und kann nur durch einen Wunsch-Zauber oder ähnliche Magie in seine ursprüngliche Form zurückgebracht werden." }
    ],
    bonusaktionen: [
      { name: "Sprung (Macht des 3. Grades)", beschreibung: "Der Olothec teleportiert sich bis zu 9 m in einen freien Raum, den er sehen kann." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    hortaktionen: {
      beschreibung: "Wenn der Olothec in seinem Hort kämpft, kann er Hortaktionen ausführen. Bei Initiative 20 (Gleichstand verliert er) kann er eine der folgenden Hortaktionen ausführen; er kann dieselbe Hortaktion nicht in zwei aufeinanderfolgenden Runden nutzen:",
      aktionen: [
        "Unheilvoller Teleport. Ein Ausbruch psionischer Energie erfasst bis zu zwei Kreaturen, die der Olothec innerhalb von 18 m sehen kann. Jede Kreatur muss einen CHA-Rettungswurf SG 15 bestehen oder wird bis zu 18 m in einen freien Raum teleportiert, den der Olothec sehen kann.",
        "Psionischer Schock. Der Olothec visiert bis zu zwei Kreaturen innerhalb von 9 m an, die unter dem Schleimeffekt seines Devolvierenden Tentakels stehen. Jedes Ziel erleidet 9 (2W8) Psychischen Schaden, und der Olothec regeneriert Trefferpunkte in Höhe des gesamten zugefügten Schadens.",
        "Schleimaustritt. Eine Welle giftigen Schleims bricht aus Tunneln oder Höhlen hervor und visiert bis zu drei Kreaturen innerhalb von 36 m des Olothecs an. Jedes Ziel muss einen KON-Rettungswurf SG 15 bestehen oder ist bis zum Ende seines nächsten Zuges Vergiftet."
      ]
    },
    source: "Flee Mortals"
  },
  {
    name: "Überbewusstsein",
    art: "Aberration",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Typischerweise Rechtschaffen böse",
    cr: 12,
    xp: 8400,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 180,
    tp_wuerfel: "19W10+76",
    bewegung: { "Fliegen": "6 m (schwebend)" },
    attribute: { STR: 10, DEX: 15, CON: 18, INT: 18, WIS: 14, CHA: 16 },
    rettungswuerfe: { INT: 8, WEI: 6, CHA: 7 },
    fertigkeiten: { "Arkana": 8, "Täuschung": 7, "Einsicht": 6, "Einschüchterung": 7, "Wahrnehmung": 6 },
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Flankiert", "Verängstigt", "Liegend"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 16,
    sprachen: ["Gemeinsprache", "Tiefensprache", "Untergemein"],
    umgebung: ["Unterirdisch", "Ruinen"],
    bild: "flee-mortals/ueberbewusstsein.png",
    beschreibung: [
      "Formal als Vaurath (Plural: Vaurathi) bekannt, planen und intrigieren Überbewusstseine gegen ihre Erzrivalen — die Synlirii und die Olothec — um die Herrschaft über die Unterwelt. Ein Überbewusstsein ist ein riesiges, schwebendes Gehirn mit einem großen zentralen Auge, umgeben von vielen kleineren eingebetteten Augen. Noch fremdartiger sind mehrere psionische Augen, die in unmittelbarer Nähe seines Kopfes schweben, jedes mit einem kleinen Gehirn verbunden, das einen einzigartigen psionischen Effekt manifestieren kann.",
      "Wie ihre Rivalen sind Überbewusstseine Meister des Wissens und von überlegenem Intellekt. Sie sind zwar keine Zauberer im klassischen Sinne, doch betrachten sie alle das Sammeln von Wissen und die arkanen Wissenschaften als wichtigstes Werkzeug für die endgültige Herrschaft. Überbewusstseine sind grausam und launisch, genießen aber Kraftproben des Intellekts. Ihre einzige Eitelkeit ist ihr unerschütterlicher Glaube an die eigene intellektuelle Überlegenheit über alle anderen.",
      "Im Gegensatz zu ihren Rivalen hegen Überbewusstseine eine intensive Feindschaft gegenüber ihresgleichen und arbeiten niemals zusammen. Stattdessen pflegen sie oft Diplomatie mit anderen Spezies, schließen Allianzen und bauen geheime Agentennetzwerke in der Unterwelt auf. Dank ihrer angeborenen Flugfähigkeit bevorzugen Überbewusstseine Türme ohne Türen oder Eingänge in Bodennähe."
    ],
    besonderheiten: [
      { name: "Detachierte Augen", beschreibung: "Sechs Augen schweben um den Überbewusstsein und erzeugen ihre Augen-Psionik-Effekte. Jedes Auge ist ein Objekt mit RK 24, 1 TP und einem psionischen Schutzschild, das es immun gegen Schaden macht. Nachdem ein Auge einen psionischen Effekt erzeugt hat, verliert es sein Schutzschild bis zum Beginn des nächsten Zuges des Überbewusstseins. Wird ein Auge zerstört, sprießt am Ende des nächsten Zuges des Überbewusstseins ein neues Auge aus seinem Gesicht hervor." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 14 (4W6) Stichschaden." },
      { name: "Augen-Psionik", beschreibung: "Der Überbewusstsein erzeugt drei der folgenden psionischen Augeneffekte. Sofern nicht anders angegeben, visiert jedes Auge eine Kreatur an, die der Überbewusstsein innerhalb von 36 m sehen kann. Er kann denselben Effekt nicht zweimal pro Zug nutzen. 1. Bezauberungsstrahl. Die anvisierte Kreatur muss einen WEI-Rettungswurf SG 16 bestehen oder ist 1 Stunde lang vom Überbewusstsein Bezaubert — oder bis der Überbewusstsein der Kreatur oder einem ihrer Verbündeten Schaden zufügt. 2. Zwangsstrahl. Die anvisierte Kreatur muss einen INT-Rettungswurf SG 16 bestehen oder nutzt ihre Reaktion, sofern verfügbar, um sich bis zu ihrer Bewegungsweite auf den nächsten sichtbaren Verbündeten zuzubewegen und einen Waffenangriff gegen ihn auszuführen. Kreaturen, die nicht bezaubert werden können, sind unberührt. 3. Giftige Daempfe. Der Überbewusstsein wählt einen Punkt innerhalb von 36 m, den er sehen kann. Jede Kreatur innerhalb von 3 m dieses Punktes muss einen KON-Rettungswurf SG 16 bestehen oder ist 1 Minute lang Vergiftet (Rettungswurf am Ende des Zuges erlaubt). 4. Telekinetischer Strahl. Die anvisierte Kreatur muss einen STR-Rettungswurf SG 16 bestehen oder wird bis zu 9 m in eine beliebige Richtung bewegt und erleidet am Ende der Bewegung 7 (2W6) Wuchtschaden (Force). Alternativ kann der Überbewusstsein ein Objekt innerhalb von 36 m, das er sehen kann, das 136 kg oder weniger wiegt und weder getragen noch gehalten wird, bis zu 9 m in eine beliebige Richtung bewegen oder damit Feinarbeit leisten (z. B. ein einfaches Werkzeug bedienen oder eine Tür bzw. einen Behälter öffnen). 5. Blitzstrahl. Der Überbewusstsein schiesst einen 1,5 m breiten, 18 m langen Blitzstrahl. Jede Kreatur in der Linie muss einen GES-Rettungswurf SG 16 ablegen. Misslungen: 21 (6W6) Blitzschaden. Bei Erfolg: halber Schaden. 6. Feuerstrahl. Die anvisierte Kreatur muss einen GES-Rettungswurf SG 16 ablegen. Misslungen: 36 (8W8) Feuerschaden und die Kreatur fängt Feuer und erleidet zu Beginn jedes ihrer Züge 9 (2W8) Feuerschaden fuer 1 Minute (Rettungswurf am Ende des Zuges erlaubt). Jede Kreatur kann ihre Aktion nutzen, um das Feuer zu löschen. Bei Erfolg: halber Schaden." }
    ],
    bonusaktionen: [
      { name: "Das Grosse Auge (Aufladung 6)", beschreibung: "Das zentrale Auge des Überbewusstseins wird tiefschwarz und projiziert einen 45-m-Kegel aus Energie. Befindet sich der Überbewusstsein selbst oder eine Kreatur in diesem Bereich unter dem Effekt eines Zaubers, enden dessen Auswirkungen fuer diese Kreatur sofort." }
    ],
    reaktionen: [
      { name: "Hinfort!", beschreibung: "Wenn eine Kreatur innerhalb von 1,5 m den Überbewusstsein mit einem Nahkampfangriff trifft, kann der Überbewusstsein den Telekinetischen Strahl seiner Augen-Psionik gegen den Angreifer einsetzen." }
    ],
    legendaere_aktionen: null,
    hortaktionen: {
      beschreibung: "Wenn der Überbewusstsein in seinem Hort kämpft, kann er Hortaktionen ausführen. Bei Initiative 20 (Gleichstand verliert er) kann er eine der folgenden Hortaktionen ausführen; er kann dieselbe Hortaktion nicht in zwei aufeinanderfolgenden Runden nutzen:",
      aktionen: [
        "Gasstoss. Eine Öffnung entsteht in Decke, Boden oder Wand an einem vom Überbewusstsein gewählten Punkt innerhalb von 18 m und belcht eine 6-m-Sphäre übelriechenden Gases aus, die bis zum Ende von Initiative 20 in der nächsten Runde anhält. Betritt eine Kreatur diesen Bereich zum ersten Mal oder beginnt dort ihren Zug, muss sie einen KON-Rettungswurf SG 15 bestehen oder ist bis zum Beginn ihres nächsten Zuges Vergiftet.",
        "Schleimschauer. Zäher Schleim fällt von der Decke auf einen Feind innerhalb von 36 m des Überbewusstseins. Die Kreatur muss einen GES-Rettungswurf SG 15 bestehen oder ist anfällig gegen Feuer- und Blitzschaden. Der Effekt endet, wenn sie Feuer- oder Blitzschaden erleidet, oder am Ende von Initiative 20 in der nächsten Runde.",
        "Telekinetischer Griff. Eine unsichtbare Kraft versucht, drei Feinde innerhalb von 18 m des Überbewusstseins zu greifen. Jede Kreatur muss einen STR-Rettungswurf SG 15 ablegen. Misslungen: Die Bewegungsweite der Kreatur wird auf 0 reduziert, und sie steigt vertikal 6 m in die Luft, wo sie bis zum Ende von Initiative 20 in der nächsten Runde schwebend verharrt — dann fällt sie."
      ]
    },
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
    sprachen: ["Gemeinsprache", "Drakonisch"],
    umgebung: ["Höhle", "Ozean", "Andere Ebenen"],
    bild: "flee-mortals/qazyldrath.png",
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
    sprachen: ["Abyssal", "Gemeinsprache", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "flee-mortals/ruinant.png",
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
    name: "Schildschuppen-Drangolin",
    art: "Drache",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 16,
    ruestungstyp: "natürliche Rüstung",
    tp: 42,
    tp_wuerfel: "5W10+15",
    bewegung: { "Gehen": "9 m", "Graben": "9 m" },
    attribute: { STR: 17, DEX: 14, CON: 16, INT: 4, WIS: 10, CHA: 6 },
    rettungswuerfe: { STR: 5, KON: 5 },
    fertigkeiten: { "Wahrnehmung": 2, "Überleben": 2 },
    schadensresistenzen: ["Feuer"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Zittersinn 18 m"],
    passiveWahrnehmung: 12,
    sprachen: [],
    umgebung: ["Höhle", "Unterirdisch", "Hügel"],
    bild: "flee-mortals/schildschuppen-drangolin.png",
    beschreibung: [
      "Kobolds trainieren Drangolines – drakonische Schuppentiere – um Wohntunnel zu graben und feindliche Befestigungen zu unterhöhlen. Zwar können Drangolines sich zu Kugeln rollen und Hindernisse einrammen, doch Kobold-Taktiker bevorzugen den Weg unter Mauern hindurch. Nach dem Graben bricht der Drangolin in die Mitte eines feindlichen Lagers ein, woraufhin Kobold-Legionäre durch den Tunnel strömen.",
      "Aus Schilden gemacht: Kobold-Legionen verzieren die Schuppen ihrer Drangolines mit den Designs ihrer eigenen Schilde, und Krieger halten es für ein gutes Omen, wenn die Schuppe, die sie bemalt haben, einen Schlag abwehrt. Verliert ein Drangolin im Kampf eine Schuppe, wird sie einem Krieger geschenkt, um als Schild zu dienen."
    ],
    besonderheiten: [
      { name: "Tunnelgräber", beschreibung: "Der Drangolin kann sich durch massiven Fels mit der Hälfte seiner Grabungsgeschwindigkeit graben und hinterlässt dabei einen Tunnel von ca. 1 m Durchmesser. Winzige und Kleine Kreaturen können ihn normal passieren; Mittelgroße und Große Kreaturen können sich hindurchquetschen. Der Tunnel bricht nach 10 Minuten zusammen." }
    ],
    aktionen: [
      { name: "Feuerklauen", beschreibung: "Nahkampfwaffenangriff: +5, Reichweite 3 m, ein Ziel. Treffer: 10 (2W6+3) Hiebschaden plus 3 (1W6) Feuerschaden." },
      { name: "Ausbrechen (1/Tag)", beschreibung: "Wenn der Drangolin innerhalb von 3 m der Oberfläche gräbt, kann er aus dem Boden ausbrechen (ohne Bewegung zu verbrauchen) in einen Raum, der eine oder mehrere Kreaturen enthält. Jede Kreatur innerhalb von 3 m muss einen GES-Rettungswurf SG 13 bestehen. Eine Kreatur direkt über dem Drangolin, wenn er auftaucht, hat Nachteil auf diesen Rettungswurf. Bei einem misslungenen Rettungswurf erleidet eine Kreatur 14 (4W6) Wuchtschaden und wird zu Boden geworfen. Bei einem Erfolg erleidet sie nur halben Schaden und wird 1,5 m in einen freien Raum ihrer Wahl gestoßen, anstatt Liegend zu werden." },
      { name: "Abrissbirne (1/Tag)", beschreibung: "Der Drangolin bewegt sich bis zum Doppelten seiner Gehgeschwindigkeit in einer geraden Linie, ohne Gelegenheitsangriffe auszulösen, und kann dabei die Räume Großer oder kleinerer Kreaturen betreten. Betritt er den Raum einer Kreatur, muss diese einen GES-Rettungswurf SG 13 bestehen oder erleidet 7 (2W6) Wuchtschaden plus 7 (2W6) Feuerschaden. Betritt er den Raum einer Struktur oder eines nicht getragenen Objekts, erleidet dieses doppelten Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Aschestoß", beschreibung: "Wenn eine Kreatur, die der Drangolin wahrnehmen kann, sich innerhalb von 1,5 m nähert, versprüht der Drangolin sie mit einer Aschewolke. Das Ziel muss einen GES-Rettungswurf SG 13 bestehen oder ist bis zum Beginn seines nächsten Zuges Geblendet." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Schlachtdämon",
    art: "Unhold",
    unterart: "Dämon",
    groesse: "Riesig",
    gesinnung: "Typischerweise Chaotisch böse",
    cr: 9,
    xp: 5000,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 138,
    tp_wuerfel: "12W12+60",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 22, DEX: 10, CON: 20, INT: 8, WIS: 12, CHA: 10 },
    rettungswuerfe: { STR: 9, GES: 3, KON: 8 },
    fertigkeiten: { "Athletik": 9, "Wahrnehmung": 7 },
    schadensresistenzen: ["Feuer"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Flankiert"],
    sinne: ["Dunkelsicht 18 m", "Seelensicht 9 m"],
    passiveWahrnehmung: 17,
    sprachen: ["Abyssal", "Goblinisch", "Infernal"],
    umgebung: ["Andere Ebenen", "Stadt", "Ruinen"],
    bild: "flee-mortals/schlachtdaemon.png",
    beschreibung: [
      "Wenn böse Hobgoblins, die ihr teuflisches Erbe annehmen, einen Feind von der Karte tilgen müssen, beschwören ihre Kriegsmagier rituell die Hilfe eines Erzteufels, der ihnen einen Grack'tanar – im Gemeinen als Schlachtdämon bekannt – überlässt. Einmal beschworen, windet sich dieser turmhohe, schlangenleibige Dämon mit sechs Klauen Seite an Seite mit den Hobgoblins in den Krieg.",
      "Teufel fingen die Grack'tanars vor Äonen. Gebrochen warten diese Dämonen in den Sieben Städten der Hölle auf den Ruf zum Kampf – hungrig und schäumend. Ihre Erzteufelherren belohnen treue Hobgoblins, indem sie den Sterblichen gestatten, für eine Zeit die Zügel eines Grack'tanar zu halten. Diese Schlachtdämonen brennen darauf zu töten und ihre Herren zu erfreuen, damit man sie erneut aussendet – und wenden sich selten gegen ihre Auftraggeber, es sei denn, sie verfallen der Lethe."
    ],
    besonderheiten: [
      { name: "Lethe", beschreibung: "Sinkt der Seelenvorrat des Dämons auf 0, hat er Vorteil auf Angriffswürfe, Nachteil auf Rettungswürfe, und sein Intelligenzwert sinkt auf 3 (−4). Zudem muss er in jedem seiner Züge seine gesamte Bewegung einsetzen, um sich der nächsten Kreatur zu nähern, die er mit seiner Seelensicht wahrnimmt, und – sofern möglich – seine Aktion verwenden, um diese Kreatur anzugreifen und zu töten. Der Dämon kann keine anderen Absichten verfolgen, bis sein Seelenvorrat um 1 steigt." },
      { name: "Seelenverschlinger", beschreibung: "Der Dämon beginnt einen Kampf mit 2 (1W4) Seelen. Wenn der Dämon eine Kreatur, die kein Konstrukt oder Untoter ist, auf 0 TP reduziert oder einer sterbenden Kreatur Schaden zufügt, muss diese Kreatur einen WEI-Rettungswurf SG 11 bestehen. Bei einem misslungenen Rettungswurf verschlingt der Dämon die Seele der Kreatur und erhöht seinen Seelenvorrat um 1. Eine auf diese Weise verschlungene Kreatur stirbt sofort und kann durch keine Mittel außer einem Wunsch-Zauber wiederbelebt werden." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Dämon führt vier Angriffe mit Schere, Schwert, Wurfspeer oder einer Kombination davon aus. Er kann einen dieser Angriffe durch einen Stachelschwanz-Angriff ersetzen. Der Dämon kann 1 Seele verbrennen, um einen fünften Angriff mit Schere, Schwert oder Wurfspeer auszuführen." },
      { name: "Schere", beschreibung: "Nahkampfwaffenangriff: +9, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W6+6) Wuchtschaden, und das Ziel ist Gepackt (Entkommen SG 17). Während das Ziel Gepackt ist, ist es auch Festgesetzt. Der Dämon hat sechs Scheren, von denen jede ein Ziel packen oder eine Waffe führen kann." },
      { name: "Schwert", beschreibung: "Nahkampfwaffenangriff: +9, Reichweite 3 m, ein Ziel. Treffer: 15 (2W8+6) Hiebschaden." },
      { name: "Wurfspeer", beschreibung: "Nahkampf- oder Distanzwaffenangriff: +9, Reichweite 3 m oder 18/72 m, ein Ziel. Treffer: 13 (2W6+6) Stichschaden." },
      { name: "Stachelschwanz", beschreibung: "Nahkampfwaffenangriff: +9, Reichweite 4,5 m, ein Ziel. Treffer: 11 (1W10+6) Stichschaden, und das Ziel muss einen KON-Rettungswurf SG 16 bestehen oder ist für 1 Minute Vergiftet (Rettungswurf am Ende des Zuges erlaubt)." }
    ],
    bonusaktionen: [
      { name: "Tief tauchen (kostet 1 Seele)", beschreibung: "Der Dämon ergreift die Zurückziehen-Aktion und erhält bis zum Ende seines nächsten Zuges eine Grabungsgeschwindigkeit gleich seiner Gehgeschwindigkeit." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Scyza",
    art: "Monstrosität",
    unterart: null,
    groesse: "Gigantisch",
    gesinnung: "Gesinnungslos",
    cr: 4,
    xp: 1100,
    rk: 14,
    ruestungstyp: "natürliche Rüstung",
    tp: 108,
    tp_wuerfel: "8W20+24",
    bewegung: { "Gehen": "12 m" },
    attribute: { STR: 21, DEX: 9, CON: 17, INT: 5, WIS: 11, CHA: 7 },
    rettungswuerfe: { STR: 7, KON: 5 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Verängstigt"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Grasland", "Wüste", "Gebirge"],
    bild: "flee-mortals/scyza.png",
    beschreibung: ["Scyzas sind gigantische echsenartige Kreaturen, die von Echsenmensch-Stämmen als Kampfreittiere gezähmt werden. Furchtlos angesichts von Gefahr, sind sie wie geschaffen für die vorderste Schlachtreihe. Ihre rüsselartig wuchtigen Beine und Klauen pflügen den Boden auf und wirbeln gewaltige Staubstürme auf. Noch bedrohlicher ist ihr massiver Kopfkamm, der beim Aufprall ein tiefes, knochenerschütterndes Dröhnen aussendet, das Feinde benommen zurücklässt."],
    besonderheiten: [
      { name: "Belagerungsmonster", beschreibung: "Die Scyza verursacht doppelten Schaden an Objekten und Bauwerken." },
      { name: "Kriegsgeschirr", beschreibung: "Solange die Scyza ein Kriegsgeschirr trägt, kann sie bis zu 36 mittelgroße oder kleinere Kreaturen tragen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Scyza führt zwei Klauen-Angriffe aus." },
      { name: "Klaue", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 1,5 m, ein Ziel. Treffer: 12 (2W6+5) Hiebschaden, und das Ziel wird zu Boden geworfen." },
      { name: "Schwanzpeitsche", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 6 m, ein Ziel. Treffer: 14 (2W8+5) Wuchtschaden. Befindet sich das Ziel auf der Scyza, fällt es herunter und landet liegend." },
      { name: "Kopfkamm", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 3 m, ein Ziel. Treffer: 23 (4W8+5) Wuchtschaden, und wenn das Ziel eine Kreatur ist, die hören kann, ist sie bis zum Ende ihres nächsten Zuges durch das tiefe Dröhnen des Kamms benommen." },
      { name: "Klauenwirbel (Aufladung 6)", beschreibung: "Die Scyza kratzt in einem rasenden Ausbruch an den Boden. Jede Kreatur nach Wahl der Scyza innerhalb von 1,5 m muss einen GES-Rettungswurf SG 15 ablegen. Misslungen: 13 (3W8) Hiebschaden, das Ziel wird zu Boden geworfen und ist bis zum Beginn des nächsten Zuges der Scyza durch eine Staubwolke geblendet. Bei Erfolg: halber Schaden, nicht zu Boden geworfen und nicht geblendet." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Servok-Erbauer",
    art: "Konstrukt",
    unterart: "Valok",
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 12,
    xp: 8400,
    rk: 19,
    ruestungstyp: "natürliche Rüstung",
    tp: 216,
    tp_wuerfel: "16W12+112",
    bewegung: { "Gehen": "6 m" },
    attribute: { STR: 25, DEX: 6, CON: 24, INT: 3, WIS: 8, CHA: 1 },
    rettungswuerfe: { STR: 11, KON: 11 },
    fertigkeiten: { "Athletik": 11 },
    schadensresistenzen: ["Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Gift", "Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Erschöpft", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 9,
    sprachen: ["versteht Zwergisch, kann nicht sprechen"],
    umgebung: ["Ruinen", "Unterirdisch", "Stadt"],
    bild: "flee-mortals/servok_erbauer.png",
    beschreibung: ["Die Valok sind uralte Konstrukte einer längst vergessenen zwergischen Zivilisation — in Ruinen und verlassenen Festungen schlummernd, bis jemand ihren Aktivierungscode kennt. Sie kennen weder Ermüdung noch Furcht und folgen Befehlen mit maschineller Präzision.", "Als Baukonstrukt konzipiert, ist der Servok-Erbauer in der Lage, Festungen und Tunnel in kürzester Zeit zu errichten. Im Kampf werden seine Bauwerkzeuge zu tödlichen Waffen: Sein Abrissball zertrümmert Rüstungen, und sein flüssiger Betonlegersystem versiegelt Feinde auf dem Schlachtfeld."],
    besonderheiten: [
      { name: "Unveränderliche Form", beschreibung: "Der Erbauer ist immun gegen Zauber oder Effekte, die seine Form verändern würden." },
      { name: "Belagerungsmonster", beschreibung: "Der Erbauer verursacht doppelten Schaden gegen Objekte und Bauwerke." },
      { name: "Übernatürliche Resistenz", beschreibung: "Der Erbauer hat Resistenz gegen Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Erbauer führt zwei Angriffe aus: Abrissball, Stein oder eine Kombination beider. Er kann einen Angriff durch einen Einsatz von Grundstein legen ersetzen, falls verfügbar." },
      { name: "Abrissball", beschreibung: "Nahkampfwaffenangriff: +11, Reichweite 4,5 m, ein Ziel. Treffer: 26 (3W12+7) Wuchtschaden. Jede Kreatur innerhalb von 1,5 m des Ziels muss einen GES-Rettungswurf SG 19 ablegen. Misslungen: 13 (2W12) Wuchtschaden." },
      { name: "Stein", beschreibung: "Nahkampf- oder Distanzwaffenangriff: +11, Reichweite 3 m oder 18/72 m, ein Ziel. Treffer: 24 (3W10+7) Wuchtschaden. Ist das Ziel Mittelgroß oder kleiner, wird es zu Boden geworfen." },
      { name: "Grundstein legen (Aufladung 6)", beschreibung: "Der Erbauer legt einen nassen Betonsockel auf einem freien 6 m × 6 m großen Bereich innerhalb von 3 m. Der Bereich gilt für 1 Stunde als schwieriges Gelände. Jede Kreatur mit STR 20 oder weniger, die den Bereich betritt oder dort ihren Zug beginnt, muss einen STR(Athletik)-Rettungswurf SG 19 ablegen. Misslungen: Die Kreatur ist Festgesetzt, bis sie die Probe besteht (am Ende ihres Zuges)." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Servok-Kriegsmaschine",
    art: "Konstrukt",
    unterart: "Valok",
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 16,
    xp: 15000,
    rk: 20,
    ruestungstyp: "natürliche Rüstung",
    tp: 270,
    tp_wuerfel: "20W12+140",
    bewegung: { "Gehen": "6 m" },
    attribute: { STR: 29, DEX: 6, CON: 24, INT: 3, WIS: 8, CHA: 1 },
    rettungswuerfe: { STR: 14, KON: 12 },
    fertigkeiten: { "Athletik": 14 },
    schadensresistenzen: ["Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Gift", "Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Erschöpft", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 9,
    sprachen: ["versteht Zwergisch, kann nicht sprechen"],
    umgebung: ["Ruinen", "Unterirdisch", "Stadt"],
    bild: "flee-mortals/servok_kriegsmaschine.png",
    beschreibung: ["Die Valok sind uralte Konstrukte einer längst vergessenen zwergischen Zivilisation — in Ruinen und verlassenen Festungen schlummernd, bis jemand ihren Aktivierungscode kennt. Sie kennen weder Ermüdung noch Furcht und folgen Befehlen mit maschineller Präzision.", "Die mächtigste aller Servok-Varianten. Einst als ultimative Belagerungswaffe erschaffen, verfügt die Servok-Kriegsmaschine über eine integrierte Kraftkanone, Klingenrechen und ein Brennöl-Abwurfsystem. Ihr zerstörerischer Vormarsch pflügt durch Mauern und Feindformationen gleichermaßen."],
    besonderheiten: [
      { name: "Unveränderliche Form", beschreibung: "Die Kriegsmaschine ist immun gegen Zauber oder Effekte, die ihre Form verändern würden." },
      { name: "Belagerungsmonster", beschreibung: "Die Kriegsmaschine verursacht doppelten Schaden gegen Objekte und Bauwerke." },
      { name: "Übernatürliche Resistenz", beschreibung: "Die Kriegsmaschine hat Resistenz gegen Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Kriegsmaschine führt zwei Angriffe aus: Klingenrechen, Kraftkanone oder eine Kombination beider." },
      { name: "Klingenrechen", beschreibung: "Nahkampfwaffenangriff: +14, Reichweite 4,5 m, ein Ziel. Treffer: 35 (4W12+9) Hiebschaden. Ist das Ziel Groß oder kleiner, wird es bis zu 4,5 m auf die Kriegsmaschine zugezogen." },
      { name: "Kraftkanone", beschreibung: "Distanzwaffenangriff: +12, Reichweite 120 m, ein Ziel. Treffer: 33 (6W10) Kraftschaden. Das Ziel ist bis zum Ende seines nächsten Zuges Benommen." },
      { name: "Brennendes Öl (Aufladung 6)", beschreibung: "Die Kriegsmaschine sprüht brennendes Öl in einem 18-m-Kegel. Jede Kreatur im Bereich muss einen GES-Rettungswurf SG 20 ablegen. Misslungen: 52 (15W6) Feuerschaden. Bei Erfolg: halber Schaden. Kreaturen, die den Wurf misslingen, sind mit brennendem Öl bedeckt und erleiden zu Beginn ihres Zuges 10 (3W6) Feuerschaden, bis eine Kreatur eine Aktion aufwendet, das Öl zu löschen." }
    ],
    bonusaktionen: [
      { name: "Zerstörerischer Vormarsch", beschreibung: "Die Kriegsmaschine bewegt sich geradlinig bis zu ihrer Bewegungsweite. Sie kann sich durch Wände und Objekte bewegen, die weniger als 3 m dick sind, und zerstört diese dabei. Sie kann sich durch den Raum anderer Kreaturen bewegen, als wäre er schwieriges Gelände. Jede Kreatur, durch deren Raum sie sich bewegt, muss einen GES-Rettungswurf SG 20 ablegen. Misslungen: 11 (2W10) Wuchtschaden und die Kreatur ist Liegend." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Servok-Schürfer",
    art: "Konstrukt",
    unterart: "Valok",
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 10,
    xp: 5900,
    rk: 18,
    ruestungstyp: "natürliche Rüstung",
    tp: 168,
    tp_wuerfel: "16W10+80",
    bewegung: { "Gehen": "6 m", "Graben": "6 m", "Klettern": "6 m" },
    attribute: { STR: 22, DEX: 6, CON: 20, INT: 3, WIS: 8, CHA: 1 },
    rettungswuerfe: { STR: 10, KON: 9 },
    fertigkeiten: { "Athletik": 10 },
    schadensresistenzen: ["Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen"],
    schadensimmunitaeten: ["Gift", "Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Benommen", "Erschöpft", "Verängstigt", "Gelähmt", "Versteinert", "Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 9,
    sprachen: ["versteht Zwergisch, kann nicht sprechen"],
    umgebung: ["Unterirdisch", "Gebirge", "Ruinen"],
    bild: "flee-mortals/servok_schuerfer.png",
    beschreibung: ["Die Valok sind uralte Konstrukte einer längst vergessenen zwergischen Zivilisation — in Ruinen und verlassenen Festungen schlummernd, bis jemand ihren Aktivierungscode kennt. Sie kennen weder Ermüdung noch Furcht und folgen Befehlen mit maschineller Präzision.", "Entwickelt für die tiefsten Bergwerksschächte, bohrt sich der Servok-Schürfer mit hydraulischen Bohrpressen und Druckluftspitzhacken durch massiven Fels. Im Kampf klemmt er Feinde ein und zerstört ihre Rüstungen Schicht für Schicht."],
    besonderheiten: [
      { name: "Unveränderliche Form", beschreibung: "Der Schürfer ist immun gegen Zauber oder Effekte, die seine Form verändern würden." },
      { name: "Übernatürliche Resistenz", beschreibung: "Der Schürfer hat Resistenz gegen Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen." },
      { name: "Tunnelgräber", beschreibung: "Der Schürfer kann sich durch massiven Fels graben. Dabei bewegt er sich mit halber Grabungsgeschwindigkeit (3 m) und hinterlässt einen 1,5 m breiten Tunnel." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Schürfer führt zwei Angriffe aus: Bohrpresse, Druckluftspitzhacke oder eine Kombination beider." },
      { name: "Bohrpresse", beschreibung: "Nahkampfwaffenangriff: +10, Reichweite 3 m, ein Ziel. Treffer: 15 (2W8+6) Stichschaden, und das Ziel ist Festgesetzt (Befreiungs-SG 18). Zu Beginn jedes Zuges des Ziels, solange es Festgesetzt ist, erleidet es 15 (2W8+6) Stichschaden. Der Schürfer kann keine Bohrpresse mehr ausführen, solange er ein Ziel auf diese Weise festhält." },
      { name: "Druckluftspitzhacke", beschreibung: "Nahkampfwaffenangriff: +10, Reichweite 3 m, ein Ziel. Treffer: 17 (2W10+6) Stichschaden. Trägt das Ziel eine nichtmagische Rüstung, wird deren RK dauerhaft um 1 reduziert (kumulativ). Eine Rüstung, deren RK auf diese Weise auf 10 sinkt, wird zerstört." },
      { name: "Steine entladen (Aufladung 6)", beschreibung: "Der Schürfer schleudert Gesteinsbrocken aus seinen Vorratsbehältern in einem 9-m-Kegel. Jede Kreatur im Bereich muss einen GES-Rettungswurf SG 18 ablegen. Misslungen: 44 (8W10) Wuchtschaden und die Kreatur ist bis zum Ende ihres nächsten Zuges Geblendet. Bei Erfolg: halber Schaden und nicht geblendet." }
    ],
    bonusaktionen: [
      { name: "Boden aufbrechen (Aufladung 6)", beschreibung: "Der Schürfer bohrt blitzschnell in den Boden und reißt einen 9 m langen, 1,5 m breiten und bis zu 9 m tiefen Spalt auf. Jede Mittelgroße oder kleinere Kreatur in der Linie muss einen GES-Rettungswurf SG 18 ablegen. Misslungen: Die Kreatur fällt in den Spalt, erleidet 10 (3W6) Wuchtschaden und ist Liegend." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Steinrücken-Isopode",
    art: "Tier",
    unterart: null,
    groesse: "Mittelgroß",
    gesinnung: "Gesinnungslos",
    cr: 2,
    xp: 450,
    rk: 13,
    ruestungstyp: "natürliche Rüstung",
    tp: 65,
    tp_wuerfel: "10W8+20",
    bewegung: { "Gehen": "9 m", "Klettern": "6 m", "Schwimmen": "6 m" },
    attribute: { STR: 18, DEX: 10, CON: 15, INT: 2, WIS: 10, CHA: 3 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Kälte", "Feuer"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 10,
    sprachen: [],
    umgebung: ["Unterirdisch", "Gewässer", "Stadt"],
    bild: "flee-mortals/steinruecken_isopode.png",
    beschreibung: [
      "Steinrücken-Isopoden suchen normalerweise Waldböden ab, aber in den Tiefen städtischer Abwasserkanäle werden sie weitaus bedrohlicher als ihre ländlichen Gegenstücke. Diese mastiff-großen Käfer suchen dunkle, feuchte Orte auf, um sich von verrottenden Pflanzen, zersetzender Materie oder allem zu ernähren, was langsam genug ist, um gefangen zu werden. Sie lauern in fließendem Wasser, tarnen sich mit den Steinen des Kanals – und wenn eine verlockende Mahlzeit vorbeizieht, schnappt die Isopode mit mächtigen Mundwerkzeugen zu.",
      "Wenn bedroht, schützt sich die Steinrücken-Isopode, indem sie die Falten ihres felsigen Panzers zu einer robusten Defensivkugel zusammenrollt und so bedeutenden Schutz gegen Angreifer erlangt.",
      "Steinrücken-Isopoden legen riesige Eiansammlungen, aus denen vollständig ausgewachsene Bruten schlüpfen. Sie sind selten allein und teilen lieber ertragreiche Futtergebiete, bevor sie als Gruppe abwandern, wenn die Nahrung knapp wird. Ihr Speiseplan aus zersetzender Materie macht sie besonders an Abwasserkanäle und städtisches Leben angepasst."
    ],
    besonderheiten: [
      { name: "Amphibisch", beschreibung: "Die Steinrücken-Isopode kann Luft und Wasser atmen." },
      { name: "Steintarnung", beschreibung: "Die Steinrücken-Isopode hat Vorteil auf GES(Heimlichkeit)-Proben zum Verstecken in felsigem Gelände." }
    ],
    aktionen: [
      { name: "Biss", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 1,5 m, ein Ziel. Treffer: 13 (2W8+4) Stichschaden." },
      { name: "Greifen", beschreibung: "Nahkampfwaffenangriff: +6, Reichweite 1,5 m, eine Mittelgroße oder kleinere Kreatur. Treffer: 7 (1W6+4) Wuchtschaden, und das Ziel ist Gepackt (Entkommen SG 14). Bis dieser Würgegriff endet, kann die Steinrücken-Isopode keinen Greifangriff gegen ein anderes Ziel ausführen." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Einrollen", beschreibung: "Wenn eine Kreatur innerhalb von 1,5 m die Steinrücken-Isopode mit einem Angriff trifft, rollt sie sich defensiv in ihren steinigen Panzer zusammen. Die Steinrücken-Isopode erhält einen +2-Bonus auf die RK gegen den auslösenden Angriff, und der Angreifer muss einen STR-Rettungswurf SG 14 bestehen oder erleidet 4 (1W8) Wuchtschaden und wird 1,5 m in einen unbesetzten Raum nach Wahl der Isopode gestoßen." }
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
    bild: "flee-mortals/stosszahn_daemon.png",
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
    sprachen: ["Aurisch", "Gemeinsprache"],
    umgebung: ["Gebirge", "Küste", "Andere Ebenen"],
    bild: "flee-mortals/sturmessenz.png",
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
    name: "Sumpfdryade",
    art: "Feenwesen",
    unterart: null,
    groesse: "Groß",
    gesinnung: "Typischerweise Chaotisch Neutral",
    cr: 13,
    xp: 10000,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 171, tp_wuerfel: "18W10+72",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 18, DEX: 12, CON: 18, INT: 12, WIS: 21, CHA: 10 },
    rettungswuerfe: { STR: 9, KON: 9, WEI: 10 },
    fertigkeiten: { "Akrobatik": 6, "Tierführung": 10, "Arkanes": 6, "Medizin": 10, "Überleben": 10 },
    schadensresistenzen: ["Säure", "Gift", "Wucht (nichtmagisch)", "Stich (nichtmagisch)", "Hieb (nichtmagisch)"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Vergiftet"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 15,
    sprachen: ["Sylvanisch", "alle Sprachen, die die Dryade vor ihrer Bindung kannte"],
    umgebung: ["Sumpf", "Wald"],
    bild: "flee-mortals/sumpfdryade.png",
    beschreibung: [
      "Sumpfdryaden spiegeln die Bäume wider, an die sie gebunden sind. Einige sind unheimlich groß mit verdrehten, gestreckten Torsi, die leicht mit Baumstämmen verwechselt werden. Andere dehnen sich lateral aus und haben bis zu sechs lange Arme, die mit Moos triefen.",
      "Aus freier Wahl gebunden. Anders als ihre verbreiteteren Verwandten beginnen Sumpfdryaden ihr Leben als Sterbliche, meist als Kräuterkundige und andere Sumpfbewohner, die ihr Leben damit verbracht haben, eins mit ihrer Heimat zu werden. Wer klug, mächtig oder glücklich genug ist, kann auf eine bestehende Sumpfdryade treffen, die ihnen das Geheimnis der Bindung lehrt. Obwohl dieser Prozess beschwerlich und tödlich sein kann, verwandelt eine erfolgreiche Bindung den Sterblichen in ein Feenwesen und verbindet ihn mit seinem gewählten Baum.",
      "Zurückgezogen und territorial. Nach der Bindung lässt die neue Verbindung einer Sumpfdryade mit der Sumpfflora und -fauna wenig Wunsch übrig, mit Menschen zu interagieren. Da sie großer Gefahr ausgesetzt wäre, sollte ihr Baum beschädigt werden, sind Sumpfdryaden äußerst misstrauisch gegenüber Besuchern.",
      "Wertvolle Verbündete. Wenn das Vertrauen einer Sumpfdryade gewonnen wird, kann sie Kenntnisse über den Sumpf und seine Pfade, Zugang zu Heilung und anderer Magie sowie Ratschläge zur Vermeidung oder zum Umgang mit anderen Sumpfbewohnern bieten. Eine Sumpfdryade als Verbündete kann den Unterschied zwischen Leben und Tod in unbekanntem Terrain bedeuten."
    ],
    besonderheiten: [
      { name: "Übernatürliche Resistenz", beschreibung: "Die Dryade hat Vorteil bei Rettungswürfen gegen übernatürliche Effekte." },
      { name: "Sprechen mit Bestien und Pflanzen", beschreibung: "Die Dryade kann mit Bestien und Pflanzen kommunizieren, als würden sie eine Sprache teilen." },
      { name: "Baumlauf (1/Runde)", beschreibung: "Die Dryade kann 3 m ihrer Bewegung verwenden, um in einen lebenden Baum in ihrer Reichweite einzutreten und aus einem zweiten lebenden Baum innerhalb von 18 m des ersten Baumes herauszukommen, erscheinend in einem freien Feld innerhalb von 1,5 m des zweiten Baumes. Beide Bäume müssen Groß oder größer sein." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Dryade führt zwei Schlag-Angriffe durch und verwendet Verstrickende Wurzeln, falls verfügbar." },
      { name: "Schlag", beschreibung: "Nahkampfwaffenangriff: +9 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 13 (2W8+4) Stichschaden, und das Ziel muss einen KON-Rettungswurf SG 18 ablegen. Misslungen: Das Ziel erleidet 14 (4W6) Giftschaden und ist 1 Minute vergiftet. Gelungen: Das Ziel erleidet halb so viel Schaden und ist nicht vergiftet." },
      { name: "Verstrickende Wurzeln (Aufladung 5-6)", beschreibung: "Die Dryade wählt einen Punkt innerhalb von 18 m von sich, den sie sehen kann. Baumwurzeln reißen sich aus dem Boden und greifen in einem 4,5-m-Radius um diesen Punkt an. Befindet sich die Dryade innerhalb von 1,5 m ihres Baumes, verdoppelt sich der Radius auf 9 m. Jede Kreatur in dem Bereich muss einen STR-Rettungswurf SG 18 bestehen oder erleidet 22 (4W10) Wuchtschaden und wird Gepackt (Entkommen SG 14). Eine so gepackte Kreatur ist Festgesetzt und ihr Fleisch beginnt sich zu verhärten und in Holz zu verwandeln. Am Ende des dritten aufeinanderfolgenden Zuges, in dem eine Kreatur auf diese Weise Gepackt ist, wird sie Versteinert und verwandelt sich in eine Hartholzstatue. Der Versteinert-Zustand endet für diese Kreatur, wenn die Dryade eine Aktion aufwendet, um ihn zu beenden, oder wenn die Dryade stirbt." },
      { name: "Feeneinschüchterung", beschreibung: "Die Dryade wählt bis zu fünf Kreaturen, die sie innerhalb von 9 m von sich sehen kann. Jedes Ziel, das die Dryade sehen kann, muss einen WEI-Rettungswurf SG 18 bestehen oder ist vor der Dryade Verängstigt (Rettungswurf am Ende des Zuges). Besteht ein Ziel seinen Rettungswurf oder endet der Effekt für es, ist das Ziel für die nächsten 24 Stunden immun gegen die Feeneinschüchterung der Sumpfdryade." }
    ],
    bonusaktionen: [
      { name: "Sumpfheilkunde (3/Tag)", beschreibung: "Die Dryade berührt eine Kreatur, die 18 (3W8+5) Trefferpunkte zurückgewinnt. Alternativ entfernt die Kreatur eine Krankheit oder neutralisiert ein Gift, das sie befallen hat." }
    ],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Tanzende Dame",
    art: "Pflanze",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Gesinnungslos",
    cr: 9,
    xp: 5000,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 161,
    tp_wuerfel: "14W12+70",
    bewegung: { "Gehen": "9 m" },
    attribute: { STR: 22, DEX: 8, CON: 20, INT: 10, WIS: 16, CHA: 12 },
    rettungswuerfe: { GES: 3, WEI: 7 },
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: ["Feuer"],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Taub", "Flankiert", "Verängstigt", "Liegend"],
    sinne: ["Blindsicht 36 m"],
    passiveWahrnehmung: 13,
    sprachen: ["versteht Druidisch und Sylvanisch, kann aber nicht sprechen"],
    umgebung: ["Wald", "Feenwildnis"],
    bild: "flee-mortals/tanzende_dame.png",
    beschreibung: [
      "Die Tanzende Dame ist eine uralte, riesige Pflanze, die in tiefen Wäldern und Feenwildnissen lebt. Ihr schlanker Stamm und ihre langen, peitschenden Ranken bewegen sich in einem unheimlichen, fast tänzerischen Rhythmus. Die leuchtend gefärbten Blüten, die sie schmücken, verströmen einen betäubenden Duft, der Lebewesen in ihren Bann zieht.",
      "Die Tanzende Dame ist keine bösartige Kreatur im herkömmlichen Sinne – sie reagiert schlicht auf Eindringlinge in ihrem Revier. Druiden, die ihre Sprache verstehen, berichten von einem uralten, traurigen Bewusstsein, das in ihr lebt."
    ],
    besonderheiten: [
      { name: "Tanzende Blüten", beschreibung: "Die Tanzende Dame trägt 3 Blüten an ihren Ranken. Jede Blüte hat RK 16, 5 Trefferpunkte, Verwundbarkeit gegen Feuerschaden und Immunität gegen Psychischschaden. Angriffe gegen die Blüten erfolgen mit Nachteil. Wenn eine Blüte zerstört wird, erleidet die Dame selbst keinen Schaden. Am Ende ihres Zuges wächst eine zerstörte Blüte nach." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Tanzende Dame führt zwei Angriffe mit Schlag aus." },
      { name: "Schlag", beschreibung: "Nahkampfwaffenangriff: +10, Reichweite 3 m, ein Ziel. Treffer: 25 (3W12+6) Wuchtschaden." },
      { name: "Blutroter Walzer", beschreibung: "Für jede ihrer Blüten wählt die Dame eine Kreatur, die sie innerhalb von 18 m sehen kann. Jedes Ziel muss einen STR-Rettungswurf SG 17 ablegen. Misslungen: 18 (4W8) Psychischschaden, und die Dame bewegt das Ziel bis zu 18 m an einen freien Raum ihrer Wahl. Bei Erfolg: halber Schaden, und das Ziel wird nicht bewegt." },
      { name: "Entwaffnender Schnellschritt", beschreibung: "Für jede ihrer Blüten wählt die Dame eine Kreatur, die sie innerhalb von 18 m sehen kann. Jedes Ziel muss einen GES-Rettungswurf SG 17 ablegen. Misslungen: 17 (5W6) Wuchtschaden, und das Ziel ist bis zum Beginn seines nächsten Zuges Benommen. Bei Erfolg: halber Schaden, und das Ziel ist nicht Benommen." },
      { name: "Ballett des Schreckens (1/Tag)", beschreibung: "Die Dame verströmt einen erschreckenden Duft. Jede Kreatur, die sie innerhalb von 36 m riechen kann, muss einen WEI-Rettungswurf SG 17 ablegen. Misslungen: Die Kreatur ist 1 Minute lang Verängstigt. Eine Verängsterte Kreatur kann den Rettungswurf am Ende jedes ihrer Züge wiederholen und beendet den Effekt bei Erfolg." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Düstere Totenklage", beschreibung: "Wenn die Tanzende Dame von einem Angriff getroffen wird, kann sie als Reaktion bestimmen, dass der Angriff stattdessen eine ihrer Blüten trifft." }
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
    sprachen: ["Gemeinsprache", "Infernal"],
    umgebung: ["Andere Ebenen"],
    bild: "flee-mortals/teufelsjurist.png",
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
    sprachen: ["Gemeinsprache", "Infernal"],
    umgebung: ["Andere Ebenen"],
    bild: "flee-mortals/teufelslegat.png",
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
    sprachen: ["Gemeinsprache", "Infernal"],
    umgebung: ["Andere Ebenen"],
    bild: "flee-mortals/teufelsmagistrat.png",
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
    sprachen: ["Gemeinsprache", "Infernal"],
    umgebung: ["Andere Ebenen"],
    bild: "flee-mortals/teufelsnotar.png",
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
    sprachen: ["Gemeinsprache", "Infernal"],
    umgebung: ["Andere Ebenen"],
    bild: "flee-mortals/teufelsrichter.png",
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
    name: "Tiefträumer",
    art: "Pflanze",
    unterart: "Pilz",
    groesse: "Groß",
    gesinnung: "Typischerweise Neutral",
    cr: 13,
    xp: 10000,
    rk: 17, ruestungstyp: "natürliche Rüstung",
    tp: 178, tp_wuerfel: "21W10+63",
    bewegung: { "Fliegen": "6 m (schwebend)" },
    attribute: { STR: 17, DEX: 10, CON: 16, INT: 20, WIS: 12, CHA: 16 },
    rettungswuerfe: { INT: 10 },
    fertigkeiten: { "Täuschung": 8, "Einsicht": 6, "Überzeugung": 8 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Psychisch"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Bezaubert", "Verängstigt", "Niedergeworfen"],
    sinne: ["Dunkelsicht 36 m"],
    passiveWahrnehmung: 11,
    sprachen: ["Tiefensprache", "Dünkelzunge", "Telepathie (36 m)"],
    umgebung: ["Unterirdisch", "Höhle"],
    bild: "flee-mortals/tieftraeumer.png",
    beschreibung: [
      "Ein feines Netzwerk aus stacheligen schwarzen Fäden trägt den Pilzkörper des Tiefträumers, wodurch er einem massiven, unheimlichen Löwenzahn ähnelt. Diese Pflanzen driften durch die Luft auf sanften psionischen Strömungen, angetrieben von den Sporen, die sie ständig freisetzen. Während andere Kreaturen träumen, nutzt der Tiefträumer seine Fäden, um sich von der psychischen Energie dieser Kreaturen zu ernähren. Der Einfluss eines Tiefträumers kann Kreaturen dazu bringen, in ihren Träumen verloren zu gehen und niemals aufzuwachen.",
      "Wandernde Träume. Tiefträumer scheinen perpetuell in ihrer eigenen Träumerei verloren, und Kollisionen mit festen Objekten bleiben oft unbemerkt. Werden sie sich anderer Kreaturen bewusst, nutzen sie ihre Sporen, um ihre seltsamen Träume zu teilen — in der Hoffnung, die Vorstellungskraft anzufachen und angenehme Träume zu erschaffen, von denen sie sich ernähren können.",
      "Unheilvolle Bindungen. Einige Tiefträumer sammeln unwissentlich Kolonien von Kreaturen an, die dauerhaft in Träumen verloren sind. Diese Kreaturen folgen ihren Tiefträumern wohin auch immer sie driften und taumeln in einer Trance hinter dem Pilz her — und springen sogar vor den Tiefträumer, um ihn vor Gefahr zu schützen. Manche dieser Kreaturen begleiten ihren Träumer schon so lange, dass sie dauerhaft an einen seiner Fäden gebunden sind."
    ],
    besonderheiten: [
      { name: "Psionische Hülle", beschreibung: "Der Träumer ist immun gegen Wahrsagezauber und gegen jeden Effekt, der seine Emotionen wahrnehmen oder seine Gedanken lesen würde." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Träumer führt zwei Tentakel-Angriffe aus und verwendet Traumsporen, falls verfügbar." },
      { name: "Tentakel", beschreibung: "Nahkampf-Kraftangriff: +10 zum Treffen, Reichweite 3 m, ein Ziel. Treffer: 12 (2W6+5) Hiebschaden plus 22 (4W10) Psychischer Schaden. Ist das Ziel vom Träumer bezaubert, gewinnt der Träumer Trefferpunkte in Höhe der Hälfte des zugefügten Psychischen Schadens zurück." },
      { name: "Traumsporen (Kraft 5. Ordnung; Aufladung 5-6)", beschreibung: "Der Träumer lässt eine Wolke psionischer Sporen frei. Jede Kreatur innerhalb von 18 m muss einen INT-Rettungswurf SG 18 bestehen oder ist 1 Minute lang vom Träumer bezaubert. Solange eine Kreatur auf diese Weise bezaubert ist, muss sie ihre Bewegung in ihrem Zug nutzen, um sich auf dem sichersten verfügbaren Weg bis auf 3 m Entfernung an den Träumer heranzubewegen. Eine so bezauberte Kreatur kann den Rettungswurf wiederholen, wenn sie Schaden erleidet, und beendet den Effekt bei einem Erfolg für sich selbst." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Träumer wecken", beschreibung: "Wenn eine Kreatur einen Angriff gegen den Träumer ausführt, wählt der Träumer eine vom Träumer bezauberte Kreatur innerhalb der Reichweite des Angriffs, und die bezauberte Kreatur wird stattdessen zum Ziel des Angriffs." }
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
    sprachen: ["Abyssal", "Gemeinsprache", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "flee-mortals/tormenauk.png",
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
    name: "Valochera",
    art: "Pflanze",
    unterart: "Pilz",
    groesse: "Groß",
    gesinnung: "Gesinnungslos",
    cr: 10,
    xp: 5900,
    rk: 17,
    ruestungstyp: "natürliche Rüstung",
    tp: 180,
    tp_wuerfel: "19W10+76",
    bewegung: { "Gehen": "9 m", "Schwimmen": "6 m" },
    attribute: { STR: 20, DEX: 10, CON: 18, INT: 5, WIS: 10, CHA: 5 },
    rettungswuerfe: { STR: 9, GES: 4 },
    fertigkeiten: { "Heimlichkeit": 4, "Wahrnehmung": 4 },
    schadensresistenzen: ["Kälte", "Feuer"],
    schadensimmunitaeten: ["Säure", "Blitz", "Gift"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Taub", "Vergiftet"],
    sinne: ["Blindsicht 18 m (blind darüber hinaus)"],
    passiveWahrnehmung: 14,
    sprachen: [],
    umgebung: ["Unterirdisch", "Stadt"],
    bild: "flee-mortals/valochera.png",
    beschreibung: [
      "Die Valochera wächst im Schmutz und Dreck städtischer Abwassersysteme. Einmal ausgewachsen, kann dieser enorme gelbe Pilz auf seinen wurzelähnlichen Myzelsträngen durch die Kanäle stapfen. Er versprüht ständig eine gefährliche Sporenwolke aus einem gelatinösen Hut, der sich öffnet und einen hungrigen Schlund freigibt, der verflüssigte Beute verschlingt.",
      "Obwohl Valocheras aus jedem organischen Material Nährstoffe gewinnen können, bevorzugen sie Fleisch – nährstoffreich hält es sie tagelang satt. In Abwasserkanälen ernähren sie sich am häufigsten von Ratten und Käfern.",
      "Bevor die Valochera zuschlägt, setzt sie übelriechende Sporen frei, die die Beute krank machen. Zum Abschluss verfügt jede Valochera über Myzel, das Säure absondert, um größere Beute vor dem Verzehr zu verflüssigen."
    ],
    besonderheiten: [
      { name: "Säureabsorption", beschreibung: "Wenn die Valochera Säureschaden erleidet, nimmt sie keinen Schaden und regeneriert stattdessen Trefferpunkte in Höhe des erlittenen Säureschadens." },
      { name: "Unerträglicher Gestank", beschreibung: "Jede Kreatur, die ihren Zug innerhalb von 1,5 m der Valochera beginnt, muss einen KON-Rettungswurf SG 16 bestehen oder ist für 1 Minute Vergiftet (Rettungswurf am Ende des Zuges erlaubt)." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Valochera führt zwei Myzelhieb-Angriffe aus." },
      { name: "Myzelhieb", beschreibung: "Nahkampfwaffenangriff: +9, Reichweite 3 m, ein Ziel. Treffer: 18 (3W8+5) Wuchtschaden. Ist das Ziel Groß oder kleiner, ist es Gepackt (Entkommen SG 15). Bis dieser Würgegriff endet, ist das Ziel Festgesetzt." },
      { name: "Essenszeit", beschreibung: "Die Valochera übergießt eine Kreatur, die sie gepackt hat, mit Säure und beißt anschließend hinein. Das Ziel muss einen GES-Rettungswurf SG 16 ablegen und erleidet 22 (4W10) Säureschaden plus 14 (2W8+5) Stichschaden bei einem misslungenen Rettungswurf, oder halb so viel Schaden bei einem erfolgreichen." },
      { name: "Giftklecks (Aufladung 5–6)", beschreibung: "Die Valochera spuckt einen Klecks giftigen Schlamms auf einen sichtbaren Punkt innerhalb von 9 m. Jede Kreatur in einer 1,5-m-Radius-Sphäre um diesen Punkt muss einen KON-Rettungswurf SG 16 ablegen. Misslungen: 33 (6W10) Giftschaden. Erfolg: halber Schaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
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
    sprachen: ["Gemeinsprache", "Urzeitlich"],
    umgebung: ["Wald", "Dschungel", "Feenwildnis", "Sumpf"],
    bild: "flee-mortals/wachstumsprinzip.png",
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
    name: "Weinende Weide",
    art: "Pflanze",
    unterart: null,
    groesse: "Riesig",
    gesinnung: "Typischerweise Neutral",
    cr: 4,
    xp: 1100,
    rk: 15,
    ruestungstyp: "natürliche Rüstung",
    tp: 84,
    tp_wuerfel: "8W12+32",
    bewegung: { "Gehen": "4,5 m" },
    attribute: { STR: 20, DEX: 8, CON: 18, INT: 10, WIS: 14, CHA: 16 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: ["Wucht", "Stich"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 18 m"],
    passiveWahrnehmung: 12,
    sprachen: ["Gemeinsprache", "Elfisch", "Sylvanisch"],
    umgebung: ["Wald", "Feenwildnis", "Gewässer"],
    bild: "flee-mortals/weinende_weide.png",
    beschreibung: [
      "Wenn eine Dryas sich mit einem Baum verbindet, verleiht die Verbindung dem Baum Unsterblichkeit und ein Maß an Feenmagie. Die Übergriffe der Zivilisation bedrohen jedoch dieses sylvanische Idyll. Viele Dryaden fallen der Axt eines Holzfällers zum Opfer, während andere sich in einen Sterblichen verlieben und freiwillig ihren Baum – und ihre Unsterblichkeit – hinter sich lassen. Ein Baum, der um seine verlorene Dryas trauert, wird zur Weinenden Weide.",
      "Eine Weinende Weide trägt hängende Äste, die den Boden mit den Tränen des Baumes benetzen. Steht sie lange genug an einem Fleck, bildet sich schließlich ein Teich aus Salzwasser – und manchmal spiegeln diese Wasser das Bild einer toten Dryas wider. Kreaturen, die Schutz in dem Bereich einer Weinenden Weide suchen, werden von einer trägen Melancholie überwältigt, und viele Wanderer verhungern lieber, als diese Rast zu unterbrechen.",
      "Obwohl Weinende Weiden von Natur aus nicht böse sind, tragen sie Sterblichen gegenüber Groll, weil diese ihnen ihre Dryaden genommen haben. Sie suchen die Grenzen von Siedlungen heim, locken ihre Beute mit Gesang und sanften Worten oder fangen sie in knorrigen Wurzeln. Weiden flüstern gleichgesinnten Kreaturen Worte der Rache zu und sammeln Verbündete gegen nahegelegene Siedler."
    ],
    besonderheiten: [
      { name: "Falsche Erscheinung", beschreibung: "Solange die Weinende Weide reglos bleibt, ist sie von einem normalen Weidenbaum nicht zu unterscheiden." },
      { name: "Brennbar", beschreibung: "Wenn die Weinende Weide Feuerschaden erleidet, fängt sie Feuer und nimmt 7 (2W6) Feuerschaden zu Beginn jedes ihrer Züge für 1 Minute. Der Effekt endet vorzeitig, wenn die Weide Kälteschaden erleidet oder eine Kreatur eine Aktion nutzt, um die Flammen zu löschen." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Die Weinende Weide führt zwei Angriffe mit Rasender Ast aus." },
      { name: "Rasender Ast", beschreibung: "Nahkampfwaffenangriff: +7, Reichweite 9 m, ein Ziel. Treffer: 12 (2W6+5) Wuchtschaden. Brennt die Weide, verursacht dieser Angriff zusätzlich 3 (1W6) Feuerschaden." },
      { name: "Ziehende Wurzeln", beschreibung: "Wurzeln brechen aus einem Punkt auf dem Boden hervor, den die Weinende Weide innerhalb von 18 m sehen kann. Jede Kreatur in einer 3-m-Sphäre um diesen Punkt muss einen STR-Rettungswurf SG 14 bestehen oder wird Liegend und bis zu 9 m auf die Weide zugezogen. Die Kreatur erleidet 4 (1W8) Wuchtschaden für je 3 m der Bewegung." },
      { name: "Weidenstränen", beschreibung: "Die Weinende Weide beschüttet ihren Bereich mit salzigen Tropfen. Jede Kreatur innerhalb von 4,5 m muss einen WEI-Rettungswurf SG 14 bestehen oder ist von der Weide Bezaubert (Rettungswurf am Ende des Zuges erlaubt). Während sie so Bezaubert ist, kann sich eine Kreatur nicht willentlich mehr als 4,5 m von der Weide entfernen. Erleidet eine Bezauberte Kreatur Schaden, endet der Effekt für sie." }
    ],
    bonusaktionen: [],
    reaktionen: [
      { name: "Baumverwandlung", beschreibung: "Wenn eine Kreatur innerhalb von 1,5 m der Weinenden Weide ihr Hiebschaden zufügt, versucht die Weide, diese Kreatur in einen Baum zu verwandeln. Das Ziel muss einen KON-Rettungswurf SG 14 bestehen oder seine Füße beginnen, sich in Baumwurzeln zu verwandeln, und es ist Festgesetzt. Eine so Festgesetzte Kreatur muss den Rettungswurf am Ende ihres nächsten Zuges wiederholen. Erfolg: Der Effekt endet. Misslungen: Die Kreatur wird in einen hölzernen Baum verwandelt und ist Versteinert. Eine so Versteinerte Kreatur ähnelt einem normalen Baum gleicher Größe, wobei ihr Gesicht in den Stamm gehauen zu sein scheint. Stirbt die Weinende Weide, endet die Versteinerung. Ein Effekt vergleichbar mit Kleineres Wiederherstellen beendet den Effekt ebenfalls." }
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
    sprachen: ["Abyssal", "Gemeinsprache", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen"],
    bild: "flee-mortals/wobalas.png",
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
    bild: "flee-mortals/xaantikorijek.png",
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
    name: "Xogomoc",
    art: "Elementar",
    unterart: "Titan",
    groesse: "Gigantisch",
    gesinnung: "Neutral",
    cr: 30,
    xp: 155000,
    rk: 20,
    ruestungstyp: null,
    tp: 574,
    tp_wuerfel: "28W20+280",
    bewegung: { "Fliegen": "27 m (schwebend)" },
    attribute: { STR: 20, DEX: 30, CON: 30, INT: 22, WIS: 26, CHA: 16 },
    rettungswuerfe: { INT: 15, WEI: 17 },
    fertigkeiten: { "Arkana": 15, "Geschichte": 15, "Wahrnehmung": 17 },
    schadensresistenzen: [],
    schadensimmunitaeten: ["Blitz", "Gift", "Donner", "Wucht-, Stich- und Hiebschaden durch nicht-magische Angriffe"],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Benommen", "Flankiert", "Verängstigt", "Gegriffen", "Vergiftet", "Gelähmt", "Versteinert", "Festgesetzt", "Betäubt"],
    sinne: ["Wahre Sicht 90 m"],
    passiveWahrnehmung: 27,
    sprachen: ["versteht alle Sprachen, kann aber nicht sprechen", "Telepathie 45 m"],
    umgebung: ["Gebirge", "Andere Ebenen"],
    bild: "flee-mortals/xogomoc.png",
    beschreibung: ["Xogomoc ist die entfesselte Essenz Goxomocs — ein gigantischer, schwebender Schreckenssaurier aus lebendigem Blitz, der entsteht, wenn Goxomocs körperliche Form zerstört wird. In dieser Form verliert der Titan seine Erdgebundenheit und entfaltet seine volle Sturmkraft: schier unaufhaltsam, durchdringt er Rüstungen und Körper wie ein Blitzschlag, schleudert Feinde mit rohem Sturmzorn umher und verschluckt sie in seinem elektrischen Leib. Fällt auch Xogomoc, teleportiert er sich an seinen Schlafplatz zurück und wandelt sich in Goxomocs ursprüngliche Form zurück — bereit, in Äonen wieder zu erwachen."],
    besonderheiten: [
      { name: "Formlos", beschreibung: "Xogomoc kann sich durch einen Raum von nur 2,5 cm Breite bewegen, ohne sich zu zwängen." },
      { name: "Auflösung", beschreibung: "Wenn Xogomoc auf 0 TP fällt oder stirbt, enden alle Zustände und anderen Effekte für ihn. Er teleportiert sich an den Ort, an dem er schlummert, verwandelt sich mit allen seinen Trefferpunkten in Goxomoc zurück und fällt bewusstlos." },
      { name: "Störende Resistenz (3/Tag)", beschreibung: "Wenn Xogomoc einen Rettungswurf misslingt, kann er stattdessen bestehen. Seine Blitzaura funktioniert bis zum Ende seines nächsten Zuges nicht." },
      { name: "Blitzaura", beschreibung: "Eine Kreatur, die ihren Zug innerhalb von 18 m von Xogomoc beginnt, muss einen GES-Rettungswurf SG 25 ablegen. Misslungen: 22 (4W10) Blitzschaden. Bei Erfolg: halber Schaden." },
      { name: "Sturmkraft", beschreibung: "Blitz- und Donnerschaden, den Xogomoc verursacht, ignorieren Schadensresistenz." },
      { name: "Belagerungsmonster", beschreibung: "Xogomoc verursacht doppelten Schaden an Objekten und Bauwerken." },
      { name: "Übernatürliche Resistenz", beschreibung: "Xogomoc hat Vorteil auf Rettungswürfe gegen Mächte, Zauber und andere übernatürliche Effekte." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Xogomoc führt zwei Blitzschlag-Angriffe aus." },
      { name: "Blitzschlag", beschreibung: "Nahkampf- oder Distanzwaffenangriff: +19, Reichweite 4,5 m oder 180 m, ein Ziel. Treffer: 29 (3W12+10) Blitzschaden, und ein weiteres Ziel innerhalb von 9 m des ersten muss einen GES-Rettungswurf SG 27 bestehen oder erleidet denselben Schaden." },
      { name: "Energiestrom", beschreibung: "Xogomoc bewegt sich bis zu seiner Bewegungsweite, ohne Gelegenheitsangriffe zu provozieren. Während dieser Bewegung kann er durch die Räume anderer Kreaturen ziehen — das zählt nicht als schwieriges Gelände. Das erste Mal, wenn er in einem Zug durch den Raum einer Kreatur zieht, erleidet diese 22 (4W10) Blitzschaden." },
      { name: "Blitzatem (Aufladung 5-6)", beschreibung: "Xogomoc atmet Blitze in einem 27-m-Kegel. Jede Kreatur in diesem Bereich muss einen GES-Rettungswurf SG 27 ablegen. Misslungen: 71 (11W12) Blitzschaden und die Kreatur kann bis zum Ende ihres nächsten Zuges keine Reaktionen ausführen. Bei Erfolg: halber Schaden ohne weiteren Effekt." }
    ],
    bonusaktionen: [
      { name: "Blitz und weg", beschreibung: "Xogomoc teleportiert sich zusammen mit allen Kreaturen in ihm (siehe In den Sturm) bis zu 9 m in einen freien Raum, den er sehen kann. Jede Kreatur innerhalb von 3 m des verlassenen Raums muss einen KON-Rettungswurf SG 25 ablegen. Misslungen: 22 (4W10) Donnerschaden. Bei Erfolg: halber Schaden." }
    ],
    reaktionen: [
      { name: "Blitzkäfig", beschreibung: "Wenn eine Kreatur, die Xogomoc innerhalb von 9 m sehen kann, ihn mit einem Angriff trifft, umgibt er den Angreifer mit Blitzfäden. Die Kreatur erleidet 22 (4W10) Blitzschaden und ist bis zum Ende ihres nächsten Zuges Festgesetzt." }
    ],
    legendaere_aktionen: [
      { name: "Schurkenaktionen", beschreibung: "Xogomoc verfügt über drei Schurkenaktionen. Er kann jede Aktion einmal pro Begegnung nach dem Zug eines Gegners ausführen. Er kann diese Aktionen in beliebiger Reihenfolge nutzen, jedoch nur eine pro Runde." },
      { name: "Aktion 1: Erschüttert", beschreibung: "Xogomoc beschwört einen ehrfurchtgebietenden Donnerschlag. Jede Kreatur innerhalb von 36 m, die ihn hören kann, muss einen WEI-Rettungswurf SG 25 bestehen oder ist für 1 Minute benommen (Rettungswurf am Ende des Zuges erlaubt)." },
      { name: "Aktion 2: In den Sturm", beschreibung: "Xogomoc entfesselt Sturmwinde, die jeden Feind erschüttern, den er innerhalb von 9 m sehen kann. Jedes Ziel muss einen STR-Rettungswurf SG 25 ablegen. Bei Erfolg: 16 (3W10) Blitzschaden. Misslungen: Die Kreatur wird in Xogomoc hineingezogen. Während sie in Xogomoc ist, ist sie Festgesetzt, bewegt sich mit Xogomoc, hat vollständige Deckung gegen Angriffe und Effekte von außen und erleidet zu Beginn jedes ihrer Züge 16 (3W10) Blitzschaden plus 16 (3W10) Donnerschaden. Eine Kreatur in Xogomoc kann eine Aktion nutzen, um einen STR(Athletik)- oder GES(Akrobatik)-Wurf SG 20 abzulegen und sich bei Erfolg in einen freien Raum ihrer Wahl innerhalb von 1,5 m von Xogomoc herauszubewegen. Erleidet Xogomoc 60 oder mehr Schaden in einem einzigen Zug oder wird auf 0 TP reduziert, wird jede Kreatur in ihm in einen freien Raum ihrer Wahl innerhalb von 1,5 m von Xogomoc herausgeschleudert." },
      { name: "Aktion 3: Seht wahre Macht!", beschreibung: "Xogomoc entfesselt Blitze und Wind in einem chaotischen Sturm. Jeder Feind innerhalb von 36 m muss einen STR-Rettungswurf SG 25 ablegen. Misslungen: 44 (8W10) Blitzschaden und die Kreatur wird bis zu 18 m in eine beliebige Richtung bewegt. Bei Erfolg: halber Schaden und keine Bewegung." }
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
    sprachen: ["Gemeinsprache", "Tiefensprache", "Drakonisch"],
    umgebung: ["Andere Ebenen", "Ozean", "Höhle"],
    bild: "flee-mortals/yserthrax.png",
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
  },
  {
    name: "Yumgrub",
    art: "Tier",
    unterart: null,
    groesse: "Winzig",
    gesinnung: "Gesinnungslos",
    cr: 0,
    xp: 2,
    rk: 9,
    ruestungstyp: null,
    tp: 2,
    tp_wuerfel: null,
    bewegung: { "Gehen": "3 m", "Klettern": "3 m" },
    attribute: { STR: 6, DEX: 9, CON: 5, INT: 4, WIS: 7, CHA: 1 },
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: [],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne: ["Dunkelsicht 9 m"],
    passiveWahrnehmung: 8,
    sprachen: [],
    umgebung: ["Unterirdisch", "Höhle"],
    bild: "flee-mortals/yumgrub.png",
    beschreibung: ["Der Yumgrub sieht aus wie ein klebendes, apfelgroßes Knödel mit hundert winzigen Beinen. Wie ein Knödel birgt er ein köstliches Geheimnis: Sein süßes Fleisch steigert vorübergehend Geschwindigkeit und Stärke des Verzehrenden — doch zu einem Preis: einem tief verstörenden Schrei beim Verschlucken und lähmender Erschöpfung, wenn die Wirkung nachlässt.", "Der Yumgrub ist das Larvenstadium des unscheinbaren Tunnelmotts. Von Unterwohnenden entdeckt und unter Zwergen, Elfen und Goblins gehandelt, wird er wegen seiner bemerkenswerten Wirkung manchmal als Truppenstärker in Schlachten eingesetzt."],
    besonderheiten: [
      { name: "Todesschrei", beschreibung: "Wenn der Yumgrub stirbt, lässt er einen erschütternden Schrei los. Jede Kreatur innerhalb von 4,5 m, die ihn hören kann, erleidet 1 Psychischen Schaden. Yumgrubs und Kreaturen, die in der letzten Minute einen Yumgrub gegessen haben, sind dagegen immun." },
      { name: "Scherge", beschreibung: "Erleidet der Yumgrub Schaden durch einen Angriff oder einen misslungenen Rettungswurf, sinken seine TP sofort auf 0. Erleidet er Schaden durch einen anderen Effekt, stirbt er, wenn der Schaden seinem TP-Maximum entspricht oder es überschreitet; andernfalls erleidet er keinen Schaden." },
      { name: "Spinnenklettern", beschreibung: "Der Yumgrub kann an schwierigen Oberflächen klettern, einschließlich kopfüber an Decken, ohne eine Fertigkeitsprobe abzulegen." },
      { name: "Lecker", beschreibung: "Eine Kleine oder größere Kreatur kann eine Aktion aufwenden, um einen lebenden Yumgrub innerhalb von 1,5 m zu verschlucken. Der Yumgrub stirbt, und für 1 Minute wird die Bewegungsweite der verschlingenden Kreatur verdoppelt, sie erhält +4 auf ihren STR-Wert und +2 auf die RK. Wenn der Effekt endet, erhält die Kreatur zwei Erschöpfungsstufen." }
    ],
    aktionen: [
      { name: "Biss (Gruppenangriff)", beschreibung: "Nahkampfwaffenangriff: -1, Reichweite 1,5 m, ein Ziel. Treffer: 1 Stichschaden." }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  },
  {
    name: "Zeiträuber-Vertex",
    art: "Humanoid",
    unterart: "Zeiträuber",
    groesse: "Groß",
    gesinnung: "Beliebige Gesinnung",
    cr: 8,
    xp: 3900,
    rk: 18,
    ruestungstyp: "psionische Kraftrüstung",
    tp: 153,
    tp_wuerfel: "18W10+54",
    bewegung: { "Fliegen": "9 m (schwebend)" },
    attribute: { STR: 18, DEX: 9, CON: 16, INT: 19, WIS: 16, CHA: 10 },
    rettungswuerfe: { STR: 7, KON: 6, INT: 7 },
    fertigkeiten: { "Athletik": 10, "Wahrnehmung": 9 },
    schadensresistenzen: ["Psychisch"],
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: ["Geblendet", "Bezaubert", "Liegend"],
    sinne: ["Blindsicht 18 m", "Dunkelsicht 36 m"],
    passiveWahrnehmung: 19,
    sprachen: ["Gemeinsprache", "Kuran'zoi", "Telepathie 36 m"],
    umgebung: ["Andere Ebenen", "Ruinen", "Stadt"],
    bild: "flee-mortals/zeitraeuber_vertex.png",
    beschreibung: ["Der Zeiträuber-Vertex ist die mächtigste Kampfeinheit der Zeiträuber — ein schwebender Anführer in psionischer Kraftrüstung, der Raum und Zeit nach Belieben öffnet. Mit seinem kinetischen Verteidigungsfeld schützt er Verbündete in weitem Umkreis vor Schaden, und mit einem einzigen Impuls belebender psionischer Energie ermöglicht er seiner Einheit koordinierte Blitzbewegungen. Die Fähigkeit, Portale zu jedem Ort im Multiversum zu öffnen, macht den Vertex zu einem Kommandeur, der Schlachtpläne einleiten kann, die andere für unmöglich halten."],
    besonderheiten: [
      { name: "Psionische Narbe", beschreibung: "Der Vertex ist immun gegen jeden Effekt, der seine Emotionen erspürt, seine Gedanken liest, aufdeckt, dass er lügt, oder seine Gesinnung oder seinen Standort enthüllt." }
    ],
    aktionen: [
      { name: "Mehrfachangriff", beschreibung: "Der Vertex führt zwei Psionische-Schlag-Angriffe aus." },
      { name: "Psionischer Schlag", beschreibung: "Nahkampfmachtangriff: +7, Reichweite 1,5 m, ein Ziel. Treffer: 11 (2W6+4) Wuchtschaden plus 7 (2W6) Psychischen Schaden, und der nächste Angriffswurf gegen das Ziel vor Beginn des nächsten Zuges des Vertex hat Vorteil." },
      { name: "Raumspalt (2/Tag)", beschreibung: "Der Vertex wählt einen Punkt an einer genauen Position, die er gesehen hat (persönlich oder auf andere Weise), auf einer beliebigen Existenzebene. Ein schimmerndes Portal mit 3 m Durchmesser erscheint in einem freien Raum innerhalb von 1,5 m des Vertex, das zu dieser Position führt. Jede Kreatur, die das Portal berührt, wird sofort in den nächsten freien Raum am gewählten Ort teleportiert. Das Portal besteht, bis der Vertex stirbt, diese Aktion erneut nutzt, das Portal als Aktion auflöst oder selbst durch das Portal transportiert wird." }
    ],
    bonusaktionen: [
      { name: "Belebender Marsch (Macht des 3. Grades)", beschreibung: "Der Vertex strahlt belebende psionische Energie aus. Jeder Zeiträuber innerhalb von 18 m des Vertex kann seine Reaktion nutzen, um sich bis zur Hälfte seiner Bewegungsweite zu bewegen." }
    ],
    reaktionen: [
      { name: "Kinetisches Verteidigungsfeld", beschreibung: "Wenn eine andere mittelgroße oder kleinere Kreatur, die der Vertex innerhalb von 36 m sehen kann, Schaden erleidet, wird dieser Schaden um 15 reduziert." }
    ],
    legendaere_aktionen: null,
    source: "Flee Mortals"
  }
];
