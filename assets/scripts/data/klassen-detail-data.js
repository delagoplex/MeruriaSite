window.KLASSEN_DETAIL = {

  "barbar": {
    id: "barbar",
    trefferwuerfel: "1W12",
    startVermoegen: "2W4 × 1.000 Hade",
    ruestungsUebung: "Leichte Rüstungen, Mittelschwere Rüstungen, Schilde",
    waffenUebung: "Einfache Waffen, Kriegswaffen",
    werkzeugUebung: null,
    rettungswurfUebung: ["Stärke", "Konstitution"],
    fertigkeiten: {
      anzahl: 2,
      auswahl: ["Athletik", "Einschüchtern", "Mit Tieren umgehen", "Naturkunde", "Überlebenskunst", "Wahrnehmung"]
    },
    stufentabelle: {
      extraSpalten: ["Kampfräusche", "Kampfrausch-Schaden"],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["barbar_kampfrausch", "barbar_ungeruestete_verteidigung"], extra: [2, "+2"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["barbar_ruecksichtsloser_angriff", "barbar_gefahrengespuer"], extra: [2, "+2"] },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: ["barbar_urtuemlicher_pfad", "barbar_urwissen"], extra: [3, "+2"] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [3, "+2"] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: ["barbar_zusaetzlicher_angriff", "barbar_schnelle_bewegung"], extra: [3, "+2"] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["barbar_pfadmerkmal"], extra: [4, "+2"] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: ["barbar_wilder_instinkt", "barbar_instinktiver_sprung"], extra: [4, "+2"] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [4, "+2"] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: ["barbar_brutale_kritische_treffer"], note: "1 Würfel", extra: [4, "+3"] },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["barbar_pfadmerkmal"], extra: [4, "+3"] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: ["barbar_unerbittlicher_kampfrausch"], extra: [4, "+3"] },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [5, "+3"] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: ["barbar_brutale_kritische_treffer"], note: "2 Würfel", extra: [5, "+3"] },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["barbar_pfadmerkmal"], extra: [5, "+3"] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: ["barbar_anhaltender_kampfrausch"], extra: [5, "+3"] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [5, "+4"] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: ["barbar_brutale_kritische_treffer"], note: "3 Würfel", extra: [6, "+4"] },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: ["barbar_unbaendige_staerke"], extra: [6, "+4"] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [6, "+4"] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["barbar_meister_der_wildnis"], extra: ["unbegrenzt", "+4"] }
      ]
    },
    merkmaleIds: [
      "barbar_kampfrausch",
      "barbar_ungeruestete_verteidigung",
      "barbar_ruecksichtsloser_angriff",
      "barbar_gefahrengespuer",
      "barbar_urtuemlicher_pfad",
      "barbar_urwissen",
      "allgemein_attributswerterhöhung",
      "barbar_zusaetzlicher_angriff",
      "barbar_schnelle_bewegung",
      "barbar_pfadmerkmal",
      "barbar_wilder_instinkt",
      "barbar_instinktiver_sprung",
      "barbar_brutale_kritische_treffer",
      "barbar_unerbittlicher_kampfrausch",
      "barbar_anhaltender_kampfrausch",
      "barbar_unbaendige_staerke",
      "barbar_meister_der_wildnis"
    ],
    unterklassen: [
      {
        id: "barbar_pfad_des_ahnenwaechters",
        name: "Pfad des Ahnenwächters",
        beschreibung: "Einige Barbaren stammen aus Kulturen, die ihre Ahnen verehren. Wenn ein Barbar, der diesem Pfad folgt, in Kampfrausch verfällt, nimmt er Kontakt mit der Geisterwelt auf und ruft seine Schutzgeister an. Die Bindung zu den Vorfahren zeigt sich oft in mysteriös auftauchenden Tätowierungen, die die Heldentaten der Ahnen preisen.",
        merkmaleIds: [
          "barbar_ahnen_ahnenbeschuetzer",
          "barbar_ahnen_geisterschild",
          "barbar_ahnen_zwiesprache_mit_den_geistern",
          "barbar_ahnen_rachsuechtige_ahnen"
        ]
      },
      {
        id: "barbar_pfad_des_berserkers",
        name: "Pfad des Berserkers",
        beschreibung: "Manche Barbaren zieht der Kampfrausch in einen Strudel der Gewalt, der nur ein Ende kennt: einen blutigen, glorreichen Tod. Der Pfad des Berserkers ist der Pfad ungezügelter Wut. Sobald du in den Kampfrausch verfällst, bist du so begeistert vom Chaos der Schlacht, dass du keine Rücksicht mehr auf deine Gesundheit nimmst.",
        merkmaleIds: [
          "barbar_berserker_raserei",
          "barbar_berserker_geistloser_kampfrausch",
          "barbar_berserker_einschuechternde_praesenz",
          "barbar_berserker_vergeltung"
        ]
      },
      {
        id: "barbar_pfad_der_bestie",
        name: "Pfad der Bestie",
        beschreibung: "Barbaren auf dem Pfad der Bestie gewinnen ihren Kampfrausch aus einem bestialischen Funken in ihrer Seele. Diese Bestie bricht sich im Kampfrausch Bahn und verwandelt den Barbaren körperlich. Möglicherweise sind solche Barbaren von Urgeistern besetzt oder Nachfahren von Gestaltwandlern.",
        merkmaleIds: [
          "barbar_bestie_form_der_bestie",
          "barbar_bestie_seele_der_bestie",
          "barbar_bestie_ansteckende_raserei",
          "barbar_bestie_jagdruf"
        ]
      },
      {
        id: "barbar_pfad_des_schlachtenwueters",
        name: "Pfad des Schlachtenwüters",
        beschreibung: 'Schlachtenwüter (Kuldjargh auf Zwergisch – wörtlich “Axt-Idiot”) sind Anhänger der zwergischen Kriegsgötter. Sie spezialisieren sich darauf, sich in wuchtiger, stachelbewehrter Rüstung in den Kampf zu werfen und schlagen mit dem ganzen Körper zu.',
        merkmaleIds: [
          "barbar_schlachtenwueter_ruestung",
          "barbar_schlachtenwueter_ruecksichtslose_ungezuegelheit",
          "barbar_schlachtenwueter_sturmangriff",
          "barbar_schlachtenwueter_stachelige_vergeltung"
        ]
      },
      {
        id: "barbar_pfad_des_sturmherolds",
        name: "Pfad des Sturmherolds",
        beschreibung: "Barbaren, die dem Pfad des Sturmherolds folgen, lernen, ihre Wut in einen Mantel urtümlicher Energie umzuwandeln, der sie umhüllt. Während des Kampfrausches machen sie sich die Mächte der Natur – Wüste, Meer oder Tundra – zunutze, um mächtige magische Effekte zu entfesseln.",
        merkmaleIds: [
          "barbar_sturmherold_sturmaura",
          "barbar_sturmherold_sturmseele",
          "barbar_sturmherold_schuetzender_sturm",
          "barbar_sturmherold_tobender_sturm"
        ]
      },
      {
        id: "barbar_pfad_des_totemkriegers",
        name: "Pfad des Totemkriegers",
        beschreibung: "Der Pfad des Totemkriegers stellt eine spirituelle Reise dar, zu deren Beginn der Barbar einen Tiergeist als Führer und Beschützer erwählt. Im Kampf erfüllt das Totem den Barbaren mit übernatürlicher Kraft und befeuert auf magische Weise seinen Kampfrausch. Als Totemtiere stehen Bär, Adler und Wolf zur Wahl.",
        merkmaleIds: [
          "barbar_totem_geistersucher",
          "barbar_totem_totemgeist",
          "barbar_totem_tieraspekt",
          "barbar_totem_geistwandler",
          "barbar_totem_einklang_mit_dem_totem"
        ]
      },
      {
        id: "barbar_pfad_der_wilden_magie",
        name: "Pfad der Wilden Magie",
        beschreibung: "Viele Orte im Multiversum sind voller wilder Magie. Barbaren mit ihrer Gefühlstiefe sind anfällig für diese Einflüsse und können von der Magie verwandelt werden. Unter Elfen, Tieflingen, Aasimars und Genasi finden sich viele Barbaren, die diesen Weg wählen, um die außerweltliche Magie ihrer Ahnen zu manifestieren.",
        merkmaleIds: [
          "barbar_wildmagie_magische_wahrnehmung",
          "barbar_wildmagie_wilder_drang",
          "barbar_wildmagie_staerkende_magie",
          "barbar_wildmagie_instabile_rache",
          "barbar_wildmagie_kontrollierter_drang"
        ]
      },
      {
        id: "barbar_pfad_des_zeloten",
        name: "Pfad des Zeloten",
        beschreibung: "Einige Götter inspirieren ihre Anhänger dazu, in eine wilde Kampfraserei zu verfallen. Bei diesen Barbaren handelt es sich um Zeloten – Krieger, die durch ihren Zorn über mächtige, göttliche Macht gebieten. Typischerweise sind es Götter des Krieges, der Zerstörung und der Gewalt, die Zeloten in ihren Dienst rufen.",
        merkmaleIds: [
          "barbar_zelot_goettlicher_zorn",
          "barbar_zelot_krieger_der_goetter",
          "barbar_zelot_fanatischer_fokus",
          "barbar_zelot_hingebungsvolle_praesenz",
          "barbar_zelot_kampfrausch_ueber_den_tod_hinaus"
        ]
      }
    ]
  },

  "barde": {
    id: "barde",
    trefferwuerfel: "1W8",
    startVermoegen: "5W4 × 1.000 Hade",
    ruestungsUebung: "Leichte Rüstungen",
    waffenUebung: "Einfache Waffen, Handarmbrüste, Langschwerter, Rapiere, Kurzschwerter",
    werkzeugUebung: "Drei Musikinstrumente deiner Wahl",
    rettungswurfUebung: ["Geschicklichkeit", "Charisma"],
    fertigkeiten: {
      anzahl: 3,
      auswahl: ["Akrobatik", "Athletik", "Auftreten", "Einschüchtern", "Fingerfertigkeit", "Geschichte", "Heimlichkeit", "Heilkunde", "Magie", "Mit Tieren umgehen", "Motiv erkennen", "Naturkunde", "Religionskunde", "Täuschen", "Überlebenskunst", "Überzeugen", "Wahrnehmung"]
    },
    stufentabelle: {
      extraSpalten: ["Zaubertricks", "Bekannte Zauber", "1. Grad", "2. Grad", "3. Grad", "4. Grad", "5. Grad", "6. Grad", "7. Grad", "8. Grad", "9. Grad"],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["barde_zauberwirken", "barde_bardische_inspiration"], note: "W6",  extra: [2,  4,  2, "-", "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["barde_alleskonner", "barde_lied_der_erholung", "barde_magische_inspiration"], note: "W6",  extra: [2,  5,  3, "-", "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: ["barde_bardenschule", "barde_expertise"],                                               extra: [2,  6,  4,  2, "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["allgemein_attributswerterhöhung", "barde_bardische_vielseitigkeit"],                    extra: [3,  7,  4,  3, "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: ["barde_bardische_inspiration", "barde_quelle_der_inspiration"], note: "W8",              extra: [3,  8,  4,  3,  2, "-", "-", "-", "-", "-", "-"] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["barde_bannlied", "barde_schulemerkmal"],                                               extra: [3,  9,  4,  3,  3, "-", "-", "-", "-", "-", "-"] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: [],                                                                                       extra: [3, 10,  4,  3,  3,  1, "-", "-", "-", "-", "-"] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                       extra: [3, 11,  4,  3,  3,  2, "-", "-", "-", "-", "-"] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: ["barde_lied_der_erholung"], note: "W8",                                                  extra: [3, 12,  4,  3,  3,  3,  1, "-", "-", "-", "-"] },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["barde_bardische_inspiration", "barde_expertise", "barde_magische_geheimnisse"], note: "W10", extra: [4, 14,  4,  3,  3,  3,  2, "-", "-", "-", "-"] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: [],                                                                                       extra: [4, 15,  4,  3,  3,  3,  2,  1, "-", "-", "-"] },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                       extra: [4, 15,  4,  3,  3,  3,  2,  1, "-", "-", "-"] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: ["barde_lied_der_erholung"], note: "W10",                                                 extra: [4, 16,  4,  3,  3,  3,  2,  1,  1, "-", "-"] },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["barde_magische_geheimnisse", "barde_schulemerkmal"],                                    extra: [4, 18,  4,  3,  3,  3,  2,  1,  1, "-", "-"] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: ["barde_bardische_inspiration"], note: "W12",                                             extra: [4, 19,  4,  3,  3,  3,  2,  1,  1,  1, "-"] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                       extra: [4, 19,  4,  3,  3,  3,  2,  1,  1,  1, "-"] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: ["barde_lied_der_erholung"], note: "W12",                                                 extra: [4, 20,  4,  3,  3,  3,  2,  1,  1,  1,  1] },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: ["barde_magische_geheimnisse"],                                                           extra: [4, 22,  4,  3,  3,  3,  3,  1,  1,  1,  1] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                       extra: [4, 22,  4,  3,  3,  3,  3,  2,  1,  1,  1] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["barde_ueberlegene_inspiration"],                                                         extra: [4, 22,  4,  3,  3,  3,  3,  2,  2,  1,  1] }
      ]
    },
    merkmaleIds: [
      "barde_zauberwirken",
      "barde_bardische_inspiration",
      "barde_alleskonner",
      "barde_lied_der_erholung",
      "barde_magische_inspiration",
      "barde_bardenschule",
      "barde_expertise",
      "allgemein_attributswerterhöhung",
      "barde_bardische_vielseitigkeit",
      "barde_quelle_der_inspiration",
      "barde_bannlied",
      "barde_schulemerkmal",
      "barde_magische_geheimnisse",
      "barde_ueberlegene_inspiration"
    ],
    unterklassen: [
      {
        id: "barde_schule_der_eloquenz",
        name: "Schule der Eloquenz",
        beschreibung: "Anhänger der Schule der Eloquenz meistern die Kunst der Rede. Diese Barden kombinieren Logik mit schauspielerischem Wortspiel, gewinnen Skeptiker und Störer mit logischen Argumenten und gehen dennoch zu Herzen, um die Emotionen des Publikums anzusprechen.",
        merkmaleIds: [
          "barde_eloquenz_silberzunge",
          "barde_eloquenz_versoerende_worte",
          "barde_eloquenz_unfehlbare_inspiration",
          "barde_eloquenz_universelle_sprache",
          "barde_eloquenz_ansteckende_inspiration"
        ]
      },
      {
        id: "barde_schule_des_fluesterns",
        name: "Schule des Flüsterns",
        beschreibung: "Die Schule des Flüsterns lehrt ihre Schüler, dass sie Wölfe unter Schafen sind. Diese Barden nutzen ihre Kenntnisse und ihre Magie, um Geheimnisse zu entdecken und andere zu erpressen und zu bedrohen – ihr wahres Wirken verbirgt sich stets hinter dem Deckmantel des harmlosen Barden.",
        merkmaleIds: [
          "barde_fluestern_psychische_klingen",
          "barde_fluestern_worte_des_grauens",
          "barde_fluestern_mantel_des_fluesterns",
          "barde_fluestern_schattenkunde"
        ]
      },
      {
        id: "barde_schule_der_schoepfung",
        name: "Schule der Schöpfung",
        beschreibung: "Barden glauben an den Kosmos als Kunstwerk – als Schöpfung der ersten Drachen und Götter. Die Barden der Schule der Schöpfung nutzen die urtümlichen Harmonien des Lieds der Schöpfung für Musik, Tanz und Dichtkunst, um Materie aus dem Nichts zu erschaffen.",
        merkmaleIds: [
          "barde_schoepfung_partikel_des_potenzials",
          "barde_schoepfung_schoepfende_macht",
          "barde_schoepfung_belebende_macht",
          "barde_schoepfung_kreatives_crescendo"
        ]
      },
      {
        id: "barde_schule_der_schwerter",
        name: "Schule der Schwerter",
        beschreibung: "Barden der Schule der Schwerter werden Klingen genannt und unterhalten das Publikum durch waghalsige Demonstrationen ihrer Waffenkunst. Obwohl sie ihre Waffen zum Vergnügen anderer nutzen, sind sie dennoch geübte Krieger, die ein Doppelleben führen.",
        merkmaleIds: [
          "barde_schwerter_zusaetzliche_uebung",
          "barde_schwerter_kampfstil",
          "barde_schwerter_klingenhieb",
          "barde_schwerter_zusaetzlicher_angriff",
          "barde_schwerter_meisterlicher_hieb"
        ]
      },
      {
        id: "barde_schule_des_wagemutes",
        name: "Schule des Wagemutes",
        beschreibung: "Barden der Schule des Wagemutes sind verwegene Skalden, deren Erzählungen die Erinnerung an die größten Helden der Vergangenheit lebendig halten. Sie bereisen die Lande, um Zeuge großer Ereignisse zu werden und sicherzustellen, dass diese Geschehnisse nicht vergessen werden.",
        merkmaleIds: [
          "barde_wagemut_zusaetzliche_uebung",
          "barde_wagemut_kampfinspiration",
          "barde_wagemut_zusaetzlicher_angriff",
          "barde_wagemut_kampfmagie"
        ]
      },
      {
        id: "barde_schule_des_wissens",
        name: "Schule des Wissens",
        beschreibung: "Barden, die sich dem Studium des Wissens widmen, verfügen über mannigfaltige Kenntnisse aus der ganzen Welt. Die Treue des Barden gilt weder einer Krone noch den Lehren einer Gottheit, sie gilt allein der Beschäftigung mit dem Schönen und Wahren.",
        merkmaleIds: [
          "barde_wissen_zusaetzliche_uebung",
          "barde_wissen_schneidende_worte",
          "barde_wissen_zusaetzliche_magische_geheimnisse",
          "barde_wissen_grenzenlose_begabung"
        ]
      },
      {
        id: "barde_schule_des_zauberbanns",
        name: "Schule des Zauberbanns",
        beschreibung: "In der Schule des Zauberbanns finden sich Barden, die ihre Kunst im Reich des Feywild erlernt haben. Unter der Anleitung von Satyren, Eladrin und anderen Feenwesen wurden sie darin geschult, mithilfe ihrer Magie andere zu unterhalten und in ihren Bann zu schlagen.",
        merkmaleIds: [
          "barde_zauberbann_mantel_der_inspiration",
          "barde_zauberbann_fesselnde_auffuehrung",
          "barde_zauberbann_mantel_der_erhabenheit",
          "barde_zauberbann_stete_erhabenheit"
        ]
      },
      {
        id: "barde_schule_der_geister",
        name: "Schule der Geister",
        beschreibung: "Barden von der Schule der Geister lieben Geschichten mit innewohnender Macht. Mithilfe okkulter Praktiken beschwören diese Barden geisterhafte Verkörperungen mächtiger Kräfte, um die Welt ein weiteres Mal zu ändern. Solche Geister sind allerdings launisch.",
        merkmaleIds: [
          "barde_geister_fuehrendes_fluestern",
          "barde_geister_spiritueller_fokus",
          "barde_geister_geschichten_aus_dem_jenseits",
          "barde_geister_spiritistische_sitzung",
          "barde_geister_mystische_verbindung"
        ]
      }
    ]
  },

  "druide": {
    id: "druide",
    trefferwuerfel: "1W8",
    startVermoegen: "2W4 × 1.000 Hade",
    ruestungsUebung: "Leichte Rüstungen, Mittelschwere Rüstungen, Schilde (kein Metall)",
    waffenUebung: "Knüppel, Dolche, Wurfpfeile, Wurfspeere, Streitkolben, Kampfstäbe, Krummsäbel, Sicheln, Schleudern, Speere",
    werkzeugUebung: "Kräuterkunde-Ausrüstung",
    rettungswurfUebung: ["Intelligenz", "Weisheit"],
    fertigkeiten: {
      anzahl: 2,
      auswahl: ["Arkane Kunde", "Heilkunde", "Mit Tieren umgehen", "Motiv erkennen", "Naturkunde", "Religion", "Überlebenskunst", "Wahrnehmung"]
    },
    stufentabelle: {
      extraSpalten: ["Zaubertricks", "1. Grad", "2. Grad", "3. Grad", "4. Grad", "5. Grad", "6. Grad", "7. Grad", "8. Grad", "9. Grad"],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["druide_druidisch", "druide_zauberwirken"],                                                                         extra: [2,  2, "-", "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["druide_tiergestalt", "druide_druidenzirkel", "druide_wilder_gefaehrte"],                                            extra: [2,  3, "-", "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: [],                                                                                                                   extra: [2,  4,  2, "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["druide_tiergestalt", "allgemein_attributswerterhöhung", "druide_vielseitige_zaubertricks"], note: "Verbesserung",    extra: [3,  4,  3, "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: [],                                                                                                                   extra: [3,  4,  3,  2, "-", "-", "-", "-", "-", "-"] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["druide_zirkelsmerkmal"],                                                                                            extra: [3,  4,  3,  3, "-", "-", "-", "-", "-", "-"] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: [],                                                                                                                   extra: [3,  4,  3,  3,  1, "-", "-", "-", "-", "-"] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["druide_tiergestalt", "allgemein_attributswerterhöhung"], note: "Verbesserung",                                      extra: [3,  4,  3,  3,  2, "-", "-", "-", "-", "-"] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: [],                                                                                                                   extra: [3,  4,  3,  3,  3,  1, "-", "-", "-", "-"] },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["druide_zirkelsmerkmal"],                                                                                            extra: [4,  4,  3,  3,  3,  2, "-", "-", "-", "-"] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: [],                                                                                                                   extra: [4,  4,  3,  3,  3,  2,  1, "-", "-", "-"] },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                                  extra: [4,  4,  3,  3,  3,  2,  1, "-", "-", "-"] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: [],                                                                                                                   extra: [4,  4,  3,  3,  3,  2,  1,  1, "-", "-"] },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["druide_zirkelsmerkmal"],                                                                                            extra: [4,  4,  3,  3,  3,  2,  1,  1, "-", "-"] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: [],                                                                                                                   extra: [4,  4,  3,  3,  3,  2,  1,  1, "-", "-"] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                                  extra: [4,  4,  3,  3,  3,  2,  1,  1,  1, "-"] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: [],                                                                                                                   extra: [4,  4,  3,  3,  3,  2,  1,  1,  1,  1] },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: ["druide_zeitloser_koerper", "druide_in_tiergestalt_zaubern"],                                                        extra: [4,  4,  3,  3,  3,  3,  1,  1,  1,  1] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                                  extra: [4,  4,  3,  3,  3,  3,  2,  1,  1,  1] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["druide_erzdruide"],                                                                                                 extra: [4,  4,  3,  3,  3,  3,  2,  2,  1,  1] }
      ]
    },
    merkmaleIds: [
      "druide_druidisch",
      "druide_zauberwirken",
      "druide_tiergestalt",
      "druide_druidenzirkel",
      "druide_wilder_gefaehrte",
      "allgemein_attributswerterhöhung",
      "druide_vielseitige_zaubertricks",
      "druide_zirkelsmerkmal",
      "druide_zeitloser_koerper",
      "druide_in_tiergestalt_zaubern",
      "druide_erzdruide"
    ],
    unterklassen: [
      {
        id: "druide_zirkel_des_hirten",
        name: "Zirkel des Hirten",
        beschreibung: "Druiden vom Zirkel des Hirten halten Zwiesprache mit Naturgeistern und rufen diese um Hilfe an. Sie widmen sich hauptsächlich dem Schutz von Tieren und Feenwesen, die sich selbst nur schwer verteidigen können.",
        merkmaleIds: [
          "druide_hirte_sprache_des_waldes",
          "druide_hirte_geistertotem",
          "druide_hirte_maechtiger_beschwoerer",
          "druide_hirte_schutzgeist",
          "druide_hirte_loyale_tiergeister"
        ]
      },
      {
        id: "druide_zirkel_des_landes",
        name: "Zirkel des Landes",
        beschreibung: "Der Zirkel des Landes besteht aus Mystikern und Weisen, die uraltes Wissen durch mündliche Überlieferung erhalten. Als Mitglied wird deine Magie von dem Land selbst beeinflusst, in dem du in die mystischen Rituale des Zirkels eingeführt wurdest.",
        merkmaleIds: [
          "druide_land_zusaetzlicher_zaubertrick",
          "druide_land_natuerliche_erholung",
          "druide_land_zauber_des_zirkels",
          "druide_land_sicherer_schritt",
          "druide_land_schutz_der_natur",
          "druide_land_heiligtum_der_natur"
        ]
      },
      {
        id: "druide_zirkel_des_mondes",
        name: "Zirkel des Mondes",
        beschreibung: "Druiden des Zirkels des Mondes sind entschlossene Beschützer der ungezähmten Natur. Veränderlich wie der Mond, können sie viele Gestalten annehmen – die Wildheit liegt ihnen im Blut.",
        merkmaleIds: [
          "druide_mond_instinktive_tiergestalt",
          "druide_mond_tiergestalten_des_zirkels",
          "druide_mond_urschlag",
          "druide_mond_elementargestalt",
          "druide_mond_tausend_gestalten"
        ]
      },
      {
        id: "druide_zirkel_der_sporen",
        name: "Zirkel der Sporen",
        beschreibung: "Druiden dieses Zirkels sehen Schönheit in der Verwesung. Sie begreifen, dass Schimmel und Pilze die Fähigkeit haben, leblose Materie zu reichem Leben zu erwecken. Tod und Leben sind Teil eines ewigen Kreislaufs.",
        merkmaleIds: [
          "druide_sporen_zauber_des_zirkels",
          "druide_sporen_sporennimbus",
          "druide_sporen_symbiotische_einheit",
          "druide_sporen_pilzbefall",
          "druide_sporen_sporenausbreitung",
          "druide_sporen_pilzkoerper"
        ]
      },
      {
        id: "druide_zirkel_der_sterne",
        name: "Zirkel der Sterne",
        beschreibung: "Die Druiden des Zirkels der Sterne ziehen Kraft aus dem Sternenlicht. Seit undenklichen Zeiten haben sie die Sternenmuster beobachtet und in den Konstellationen versteckte Geheimnisse entdeckt.",
        merkmaleIds: [
          "druide_sterne_sternenkarte",
          "druide_sterne_sterngestalt",
          "druide_sterne_kosmisches_omen",
          "druide_sterne_funkelnde_sternbilder",
          "druide_sterne_voller_sterne"
        ]
      },
      {
        id: "druide_zirkel_der_traeume",
        name: "Zirkel der Träume",
        beschreibung: "Druiden dieses Zirkels stammen aus Regionen mit starker Bindung zum Feywild. Ihre Magie heilt Wunden und heitert Gemüter auf, und die Reiche, die sie behüten, sind Orte, wo die Grenze zwischen Traum und Realität verschwimmt.",
        merkmaleIds: [
          "druide_traeume_balsam_des_sommerhofes",
          "druide_traeume_heim_aus_mondlicht_und_schatten",
          "druide_traeume_verborgene_pfade",
          "druide_traeume_traumwandler"
        ]
      },
      {
        id: "druide_zirkel_des_wildfeuers",
        name: "Zirkel des Wildfeuers",
        beschreibung: "Druiden dieses Zirkels verstehen Zerstörung als Vorstufe neuer Schöpfung. Sie verbinden sich mit einem Urgeist, der sowohl zerstörerische als auch schaffende Kräfte birgt – ein Waldbrand bereitet den Boden für frisches Wachstum.",
        merkmaleIds: [
          "druide_wildfeuer_zauber_des_zirkels",
          "druide_wildfeuer_wildfeuergeist_beschwoeren",
          "druide_wildfeuer_verbesserte_verbindung",
          "druide_wildfeuer_reinigende_flammen",
          "druide_wildfeuer_feurige_wiedergeburt"
        ]
      }
    ]
  },

  "hexenmeister": {
    id: "hexenmeister",
    trefferwuerfel: "1W8",
    startVermoegen: "4W4 × 1.000 Hade",
    ruestungsUebung: "Leichte Rüstungen",
    waffenUebung: "Einfache Waffen",
    werkzeugUebung: null,
    rettungswurfUebung: ["Weisheit", "Charisma"],
    fertigkeiten: {
      anzahl: 2,
      auswahl: ["Arkane Kunde", "Einschüchtern", "Geschichte", "Nachforschungen", "Naturkunde", "Religion", "Täuschen"]
    },
    stufentabelle: {
      extraSpalten: ["Zaubertricks", "Bekannte Zauber", "Zauberplätze", "Grad der Plätze", "Bekannte Anrufungen"],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["hexenmeister_anderweltlicher_schutzherr", "hexenmeister_paktmagie"],                                               extra: [2,  2, 1, "1.", "-"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["hexenmeister_schauerliche_anrufungen"],                                                                             extra: [2,  3, 2, "1.",  2] },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: ["hexenmeister_segen_des_pakts"],                                                                                     extra: [2,  4, 2, "2.",  2] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["allgemein_attributswerterhöhung", "hexenmeister_schauerliche_vielseitigkeit"],                                      extra: [3,  5, 2, "2.",  2] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: [],                                                                                                                   extra: [3,  6, 2, "3.",  3] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["hexenmeister_schutzhermerkmal"],                                                                                    extra: [3,  7, 2, "3.",  3] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: [],                                                                                                                   extra: [3,  8, 2, "4.",  4] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                                  extra: [3,  9, 2, "4.",  4] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: [],                                                                                                                   extra: [3, 10, 2, "5.",  5] },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["hexenmeister_schutzhermerkmal"],                                                                                    extra: [4, 10, 2, "5.",  5] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: ["hexenmeister_mystisches_arkanum"], note: "6. Grad",                                                                 extra: [4, 11, 3, "5.",  6] },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                                  extra: [4, 11, 3, "5.",  6] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: ["hexenmeister_mystisches_arkanum"], note: "7. Grad",                                                                 extra: [4, 12, 3, "5.",  6] },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["hexenmeister_schutzhermerkmal"],                                                                                    extra: [4, 12, 3, "5.",  6] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: ["hexenmeister_mystisches_arkanum"], note: "8. Grad",                                                                 extra: [4, 13, 3, "5.",  7] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                                  extra: [4, 13, 3, "5.",  7] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: ["hexenmeister_mystisches_arkanum"], note: "9. Grad",                                                                 extra: [4, 14, 4, "5.",  7] },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: [],                                                                                                                   extra: [4, 14, 4, "5.",  8] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                                  extra: [4, 15, 4, "5.",  8] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["hexenmeister_mystischer_meister"],                                                                                  extra: [4, 15, 4, "5.",  8] }
      ]
    },
    merkmaleIds: [
      "hexenmeister_anderweltlicher_schutzherr",
      "hexenmeister_paktmagie",
      "hexenmeister_schauerliche_anrufungen",
      "hexenmeister_segen_des_pakts",
      "hexenmeister_pakt_des_buches",
      "hexenmeister_pakt_der_kette",
      "hexenmeister_pakt_der_klinge",
      "hexenmeister_pakt_des_talismans",
      "allgemein_attributswerterhöhung",
      "hexenmeister_schauerliche_vielseitigkeit",
      "hexenmeister_schutzhermerkmal",
      "hexenmeister_mystisches_arkanum",
      "hexenmeister_mystischer_meister",
      "hexenmeister_anrufung_anderweltlicher_sprung",
      "hexenmeister_anrufung_aspekt_des_mondes",
      "hexenmeister_anrufung_aufsteigender_schritt",
      "hexenmeister_anrufung_auge_des_runenwaechters",
      "hexenmeister_anrufung_band_des_talismans",
      "hexenmeister_anrufung_buch_der_uralten_geheimnisse",
      "hexenmeister_anrufung_dieb_der_fuenften_schicksale",
      "hexenmeister_anrufung_duerstende_klinge",
      "hexenmeister_anrufung_ewige_knechtschaft",
      "hexenmeister_anrufung_fernschreiber",
      "hexenmeister_anrufung_fleischbildhauer",
      "hexenmeister_anrufung_fuerchterliches_wort",
      "hexenmeister_anrufung_gabe_der_immerwaehrenden",
      "hexenmeister_anrufung_gabe_der_tiefen",
      "hexenmeister_anrufung_gabe_der_beschuetzer",
      "hexenmeister_anrufung_gabe_des_kettenmeisters",
      "hexenmeister_anrufung_gedankenblick",
      "hexenmeister_anrufung_geisterhafter_blick",
      "hexenmeister_anrufung_grab_des_levistus",
      "hexenmeister_anrufung_grabesfluesstern",
      "hexenmeister_anrufung_hadars_griff",
      "hexenmeister_anrufung_hexensicht",
      "hexenmeister_anrufung_ketten_von_carceri",
      "hexenmeister_anrufung_lanze_der_lethargie",
      "hexenmeister_anrufung_lebenstrinker",
      "hexenmeister_anrufung_listige_flucht",
      "hexenmeister_anrufung_mantel_aus_fliegen",
      "hexenmeister_anrufung_maske_der_vielen_gesichter",
      "hexenmeister_anrufung_meister_der_myriaden_formen",
      "hexenmeister_anrufung_mit_den_schatten_verschmelzen",
      "hexenmeister_anrufung_neblige_visionen",
      "hexenmeister_anrufung_qualvoller_strahl",
      "hexenmeister_anrufung_schattenschleier",
      "hexenmeister_anrufung_schattenruestung",
      "hexenmeister_anrufung_schauerlicher_verstand",
      "hexenmeister_anrufung_schauerliches_niederstrecken",
      "hexenmeister_anrufung_stimme_des_kettenmeisters",
      "hexenmeister_anrufung_schutz_des_talismans",
      "hexenmeister_anrufung_tadel_des_talismans",
      "hexenmeister_anrufung_teufelssicht",
      "hexenmeister_anrufung_tiersprache",
      "hexenmeister_anrufung_unerbittliche_verwuenschung",
      "hexenmeister_anrufung_unheimliche_sicht",
      "hexenmeister_anrufung_unheimlicher_speer",
      "hexenmeister_anrufung_untergebene_des_chaos",
      "hexenmeister_anrufung_verfuehrerischer_einfluss",
      "hexenmeister_anrufung_verhexendes_fluestern",
      "hexenmeister_anrufung_verstaerkte_paktwaffe",
      "hexenmeister_anrufung_versumpfen_lassen",
      "hexenmeister_anrufung_verwuenschung_des_irrsinns",
      "hexenmeister_anrufung_visionen_von_fernen_gefilden",
      "hexenmeister_anrufung_vitalitaet_des_unholds",
      "hexenmeister_anrufung_zeichen_des_schlechten_omens",
      "hexenmeister_anrufung_zurueckdraengender_strahl"
    ],
    unterklassen: [
      {
        id: "hexenmeister_der_abgruendig",
        name: "Der Abgründige",
        beschreibung: "Dein Pakt verbindet dich mit einem Wesen aus den unergründlichen Tiefen des Ozeans oder einer fremden, abgründigen Dimension. Dein Schutzherr ist eine tentakelartige Macht aus den ewigen Dunkelheiten jenseits des Lichts, deren Natur sich menschlichem Verstand entzieht.",
        merkmaleIds: [
          "hexenmeister_abgruendig_erweiterte_zauberliste",
          "hexenmeister_abgruendig_tentakel_der_tiefen",
          "hexenmeister_abgruendig_gabe_der_see",
          "hexenmeister_abgruendig_seele_des_ozeans",
          "hexenmeister_abgruendig_waechtertentakel",
          "hexenmeister_abgruendig_greifende_tentakel",
          "hexenmeister_abgruendig_sprung_in_die_tiefen"
        ]
      },
      {
        id: "hexenmeister_der_dschinn",
        name: "Der Dschinn",
        beschreibung: "Du hast einen Pakt mit einem der edlen Dschinns der Inneren Ebenen geschlossen. Dein Schutzherr ist einer der mächtigen Herrscher der Elementarebene – ein Dao, Dschinni, Ifriti oder Marid – und verleiht dir Zugang zu elementarer Magie und einem magischen Gefäß als Zuflucht.",
        merkmaleIds: [
          "hexenmeister_dschinn_erweiterte_zauberliste",
          "hexenmeister_dschinn_gefaess",
          "hexenmeister_dschinn_elementare_gabe",
          "hexenmeister_dschinn_gefaess_der_zuflucht",
          "hexenmeister_dschinn_begrenzter_wunsch"
        ]
      },
      {
        id: "hexenmeister_die_erzfee",
        name: "Die Erzfee",
        beschreibung: "Dein Pakt verbindet dich mit einer mächtigen Erzfee des Feywild – einem alten Wesen von verführerischer Schönheit und tückischer Macht. Solche Mächte sind launisch und romantisieren die Sterblichen, doch ihre Zuneigung kann sich schnell in Grausamkeit verwandeln.",
        merkmaleIds: [
          "hexenmeister_erzfee_erweiterte_zauberliste",
          "hexenmeister_erzfee_feenaustrahlung",
          "hexenmeister_erzfee_neblige_flucht",
          "hexenmeister_erzfee_betoerende_abwehr",
          "hexenmeister_erzfee_dunkles_delirium"
        ]
      },
      {
        id: "hexenmeister_die_fluchklinge",
        name: "Die Fluchklinge",
        beschreibung: "Du hast einen Pakt mit einem Geist geschlossen, der in einer sagenumwobenen Waffe wohnt. Diese Klingen suchen sich neue Träger, wenn der alte stirbt, und verleihen ihnen tödliche Macht – doch sie fordern stets einen Preis.",
        merkmaleIds: [
          "hexenmeister_fluchklinge_erweiterte_zauberliste",
          "hexenmeister_fluchklinge_verwuenschung",
          "hexenmeister_fluchklinge_fluchkrieger",
          "hexenmeister_fluchklinge_verfluchtes_schreckgespenst",
          "hexenmeister_fluchklinge_verwunschene_ruestung",
          "hexenmeister_fluchklinge_meister_der_verschwoerung"
        ]
      },
      {
        id: "hexenmeister_der_grosse_alte",
        name: "Der Große Alte",
        beschreibung: "Dein Schutzherr ist ein Wesen von unermesslichem Wissen und fremdartigem Verstand. Solche Wesen existieren jenseits der normalen Realität und berühren Geister, die nach ihrer Aufmerksamkeit suchen. Viele Große Alte schlafen oder sind gefangen, übermitteln ihre Macht aber trotzdem durch Träume und Flüstern.",
        merkmaleIds: [
          "hexenmeister_grosser_alter_erweiterte_zauberliste",
          "hexenmeister_grosser_alter_erwachter_geist",
          "hexenmeister_grosser_alter_entropischer_schutz",
          "hexenmeister_grosser_alter_gedankenschild",
          "hexenmeister_grosser_alter_diener_erschaffen"
        ]
      },
      {
        id: "hexenmeister_der_himmlische",
        name: "Der Himmlische",
        beschreibung: "Du hast einen Pakt mit einem mächtigen Wesen der Oberen Ebenen geschlossen. Diese Verbindung erlaubt dir, heilige Magie zu kanalisieren, die du normalerweise nicht beherrschen würdest. Als Beweis deines Paktes können einige deiner Unheil-Merkmale Leben retten und andere schützen.",
        merkmaleIds: [
          "hexenmeister_himmlisch_erweiterte_zauberliste",
          "hexenmeister_himmlisch_zusaetzliche_zaubertricks",
          "hexenmeister_himmlisch_heilendes_licht",
          "hexenmeister_himmlisch_gleissende_seele",
          "hexenmeister_himmlisch_himmlische_widerstandskraft",
          "hexenmeister_himmlisch_sengende_rache"
        ]
      },
      {
        id: "hexenmeister_der_unhold",
        name: "Der Unhold",
        beschreibung: "Du hast einen Pakt mit einem mächtigen Unhold der Unteren Ebenen geschlossen – einem Teufel, Dämon oder einem anderen Bösen dieser finsteren Reiche. Solche Wesen begehren Seelen, Diener und Einfluss auf der Sterblichkeitsebene, und dein Pakt ist ein Tauschgeschäft, von dem beide Seiten profitieren.",
        merkmaleIds: [
          "hexenmeister_unhold_erweiterte_zauberliste",
          "hexenmeister_unhold_segen_des_dunklen_meisters",
          "hexenmeister_unhold_schicksal_des_dunklen_meisters",
          "hexenmeister_unhold_widerstandskraft_des_unholds",
          "hexenmeister_unhold_schlund_des_wahnsinns"
        ]
      },
      {
        id: "hexenmeister_der_untote",
        name: "Der Untote",
        beschreibung: "Du hast einen Pakt mit einem unsterblichen Wesen geschlossen, das dem Tod selbst trotzt – einem Lich, einem vampirischen Fürsten oder einem anderen mächtigen Untotem. Diese Schutzherren teilen Geheimnisse der Unsterblichkeit und verleihen dir Züge des Todes selbst.",
        merkmaleIds: [
          "hexenmeister_untote_erweiterte_zauberliste",
          "hexenmeister_untote_form_des_schreckens",
          "hexenmeister_untote_vom_grab_beruehrt",
          "hexenmeister_untote_nekrotische_huelle",
          "hexenmeister_untote_geistprojektion"
        ]
      }
    ]
  },

  "kaempfer": {
    id: "kaempfer",
    trefferwuerfel: "1W10",
    startVermoegen: "5W4 × 1.000 Hade",
    ruestungsUebung: "Alle Rüstungen, Schilde",
    waffenUebung: "Einfache Waffen, Kriegswaffen",
    werkzeugUebung: null,
    rettungswurfUebung: ["Stärke", "Konstitution"],
    fertigkeiten: {
      anzahl: 2,
      auswahl: ["Akrobatik", "Mit Tieren umgehen", "Athletik", "Geschichte", "Motiv erkennen", "Einschüchtern", "Wahrnehmung", "Überlebenskunst"]
    },
    stufentabelle: {
      extraSpalten: [],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["kaempfer_kampfstil", "kaempfer_durchschnaufen"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["kaempfer_tatendrang"], note: "1 Anwendung" },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: ["kaempfer_kampfarchetyp"] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["allgemein_attributswerterhöhung", "kaempfer_kriegerische_vielseitigkeit"] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: ["kaempfer_zusaetzlicher_angriff"] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung"] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: ["kaempfer_archetypenmerkmal"] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung"] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: ["kaempfer_unbeugsamkeit"], note: "1 Anwendung" },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["kaempfer_archetypenmerkmal"] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: ["kaempfer_zusaetzlicher_angriff"], note: "2 (3 Angriffe)" },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: ["kaempfer_unbeugsamkeit"], note: "2 Anwendungen" },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: ["kaempfer_archetypenmerkmal"] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: ["kaempfer_tatendrang", "kaempfer_unbeugsamkeit"], note: "2/3 Anwendungen" },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: ["kaempfer_archetypenmerkmal"] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["kaempfer_zusaetzlicher_angriff"], note: "3 (4 Angriffe)" }
      ]
    },
    merkmaleIds: [
      "kaempfer_kampfstil",
      "kaempfer_durchschnaufen",
      "kaempfer_tatendrang",
      "kaempfer_kampfarchetyp",
      "kaempfer_archetypenmerkmal",
      "allgemein_attributswerterhöhung",
      "kaempfer_kriegerische_vielseitigkeit",
      "kaempfer_zusaetzlicher_angriff",
      "kaempfer_unbeugsamkeit",
      "kaempfer_kampfstil_abfangen",
      "kaempfer_kampfstil_blinder_kampf",
      "kaempfer_kampfstil_bogenschiessen",
      "kaempfer_kampfstil_duellieren",
      "kaempfer_kampfstil_kampf_mit_grossen_waffen",
      "kaempfer_kampfstil_kampf_mit_zwei_waffen",
      "kaempfer_kampfstil_leibwache",
      "kaempfer_kampfstil_ueberlegene_technik",
      "kaempfer_kampfstil_unbewaffneter_kampf",
      "kaempfer_kampfstil_verteidigung",
      "kaempfer_kampfstil_wurfwaffenkampf",
      "kaempfer_schussart_bannpfeil",
      "kaempfer_schussart_betoernder_pfeil",
      "kaempfer_schussart_durchdringender_pfeil",
      "kaempfer_schussart_explosionspfeil",
      "kaempfer_schussart_schattenpfeil",
      "kaempfer_schussart_schlingenpfeil",
      "kaempfer_schussart_schwaechender_pfeil",
      "kaempfer_schussart_suchender_pfeil",
      "kaempfer_manoeuvre_ablenkender_schlag",
      "kaempfer_manoeuvre_ausfallschritt",
      "kaempfer_manoeuvre_bedrohlicher_angriff",
      "kaempfer_manoeuvre_doppelschlag",
      "kaempfer_manoeuvre_entwaffnender_angriff",
      "kaempfer_manoeuvre_faellender_angriff",
      "kaempfer_manoeuvre_finte",
      "kaempfer_manoeuvre_gebieterische_erscheinung",
      "kaempfer_manoeuvre_hinterhalt",
      "kaempfer_manoeuvre_lockvogeltaktik",
      "kaempfer_manoeuvre_manoevrierender_angriff",
      "kaempfer_manoeuvre_parieren",
      "kaempfer_manoeuvre_praezisionsangriff",
      "kaempfer_manoeuvre_provozierender_angriff",
      "kaempfer_manoeuvre_riposte",
      "kaempfer_manoeuvre_sammeln",
      "kaempfer_manoeuvre_schlag_des_befehlshabers",
      "kaempfer_manoeuvre_schlagfertig",
      "kaempfer_manoeuvre_schneller_wurf",
      "kaempfer_manoeuvre_stossangriff",
      "kaempfer_manoeuvre_schwitzkasten",
      "kaempfer_manoeuvre_taktisches_abschaetzen",
      "kaempfer_manoeuvre_taenzelnde_beinarbeit",
      "kaempfer_rune_feuer",
      "kaempfer_rune_frost",
      "kaempfer_rune_stein",
      "kaempfer_rune_wolke",
      "kaempfer_rune_huegel",
      "kaempfer_rune_sturm"
    ],
    unterklassen: [
      {
        id: "kaempfer_arkaner_bogenschuetze",
        name: "Arkaner Bogenschütze",
        beschreibung: "Arkane Bogenschützen studieren eine einzigartige, elfische Kunst des Bogenschießens, bei der Angriffe mit Magie verwoben werden. Sie gehören zu den auserlesensten Kriegern unter den Elfen und verwenden magische Pfeile, um Monster und Angreifer auszuschalten.",
        merkmaleIds: [
          "kaempfer_arkaner_bogenschuetzenwissen",
          "kaempfer_arkaner_arkaner_schuss",
          "kaempfer_arkaner_magischer_pfeil",
          "kaempfer_arkaner_kurvenschuss",
          "kaempfer_arkaner_stets_bereiter_schuss"
        ]
      },
      {
        id: "kaempfer_champion",
        name: "Champion",
        beschreibung: "Der archetypische Champion konzentriert sich auf die Entwicklung seiner rohen körperlichen Kraft bis hin zur tödlichen Perfektion, um im Kampf vernichtende Schläge auszuteilen.",
        merkmaleIds: [
          "kaempfer_champion_verbesserte_kritische_treffer",
          "kaempfer_champion_bemerkenswerter_athlet",
          "kaempfer_champion_weiterer_kampfstil",
          "kaempfer_champion_ueberlegener_kritischer_treffer",
          "kaempfer_champion_der_ueberlebende"
        ]
      },
      {
        id: "kaempfer_kampfmeister",
        name: "Kampfmeister",
        beschreibung: "Die gelehrten Krieger des Kampfmeisters wenden im Gefecht Techniken an, die über Generationen weitergegeben wurden. Für einen Kampfmeister stellt die Schlacht einen Bereich akademischer Lehre dar.",
        merkmaleIds: [
          "kaempfer_kampfmeister_kampfueberlegenheit",
          "kaempfer_kampfmeister_schueler_des_krieges",
          "kaempfer_kampfmeister_kenne_deinen_feind",
          "kaempfer_kampfmeister_verbesserte_kampfueberlegenheit",
          "kaempfer_kampfmeister_unermuedlich"
        ]
      },
      {
        id: "kaempfer_kavalier",
        name: "Kavalier",
        beschreibung: "Der archetypische Kavalier ist ein Meister des berittenen Kampfes. Von adliger Herkunft und am Hofe erzogen, ist er fähig einen Kavallerieangriff anzuführen wie auch schlagfertige Wortwechsel bei Staatsbanketten zu liefern.",
        merkmaleIds: [
          "kaempfer_kavalier_zusaetzliche_uebung",
          "kaempfer_kavalier_im_sattel_geboren",
          "kaempfer_kavalier_bestaendiges_zeichen",
          "kaempfer_kavalier_defensives_manoeuvre",
          "kaempfer_kavalier_die_stellung_halten",
          "kaempfer_kavalier_wilder_ansturm",
          "kaempfer_kavalier_wachsamer_verteidiger"
        ]
      },
      {
        id: "kaempfer_mystischer_ritter",
        name: "Mystischer Ritter",
        beschreibung: "Der archetypische Mystische Ritter kombiniert meisterhafte Kriegskunst mit einem sorgfältigen Studium der Magie – spezialisiert auf Bannmagie und Hervorrufungen.",
        merkmaleIds: [
          "kaempfer_mystischer_ritter_zauberwirken",
          "kaempfer_mystischer_ritter_waffenbindung",
          "kaempfer_mystischer_ritter_kriegsmagie",
          "kaempfer_mystischer_ritter_mystischer_schlag",
          "kaempfer_mystischer_ritter_arkaner_sturmangriff",
          "kaempfer_mystischer_ritter_verbesserte_kriegsmagie"
        ]
      },
      {
        id: "kaempfer_psi_krieger",
        name: "Psi-Krieger",
        beschreibung: "Ein Psi-Krieger hat es geschafft, seine physischen Angriffe um psionische Waffenhiebe, telekinetische Schläge und Barrieren aus Gedankenkraft zu erweitern.",
        merkmaleIds: [
          "kaempfer_psi_krieger_psionische_kraft",
          "kaempfer_psi_krieger_adept_der_telekinese",
          "kaempfer_psi_krieger_bewachter_wille",
          "kaempfer_psi_krieger_mentaler_schutzwall",
          "kaempfer_psi_krieger_meister_der_telekinese"
        ]
      },
      {
        id: "kaempfer_purpurdrachenritter",
        name: "Purpurdrachenritter",
        beschreibung: "Purpurdrachenritter sind Krieger, die geschworen haben, die Krone Cormyrs zu beschützen. Sie inspirieren andere zur Größe, indem sie in der Schlacht tapfere Taten vollbringen.",
        merkmaleIds: [
          "kaempfer_purpur_schlachtenruf",
          "kaempfer_purpur_koeniglicher_gesandter",
          "kaempfer_purpur_inspirierender_tatendrang",
          "kaempfer_purpur_bollwerk"
        ]
      },
      {
        id: "kaempfer_runenritter",
        name: "Runenritter",
        beschreibung: "Runenritter bereichern ihr kriegerisches Können durch übernatürliche Runen – eine Tradition, die ursprünglich von den Riesen ersonnen wurde.",
        merkmaleIds: [
          "kaempfer_runenritter_zusaetzliches_wissen",
          "kaempfer_runenritter_runenschnitzer",
          "kaempfer_runenritter_die_macht_des_riesen",
          "kaempfer_runenritter_runenschild",
          "kaempfer_runenritter_standbild",
          "kaempfer_runenritter_meister_der_runen",
          "kaempfer_runenritter_moloch_der_runen"
        ]
      },
      {
        id: "kaempfer_samurai",
        name: "Samurai",
        beschreibung: "Der Samurai ist ein Kämpfer, der seine Feinde mit unbändigem Kampfgeist bezwingt. Sein Wille ist nahezu unerschütterlich – Feinde haben nur zwei Optionen: Sich ergeben oder im Kampf sterben.",
        merkmaleIds: [
          "kaempfer_samurai_zusaetzliche_uebung",
          "kaempfer_samurai_kampfgeist",
          "kaempfer_samurai_eleganter_hoefling",
          "kaempfer_samurai_unermuedlicher_wille",
          "kaempfer_samurai_rascher_angriff",
          "kaempfer_samurai_mit_letzter_staerke"
        ]
      },
      {
        id: "kaempfer_echoritter",
        name: "Echoritter",
        beschreibung: "(Folgt – wird zu einem späteren Zeitpunkt ergänzt.)",
        merkmaleIds: [
          "kaempfer_echoritter_placeholder"
        ]
      }
    ]
  },

  "kleriker": {
    id: "kleriker",
    trefferwuerfel: "1W8",
    startVermoegen: "5W4 × 1.000 Hade",
    ruestungsUebung: "Leichte Rüstungen, mittelschwere Rüstungen, Schilde",
    waffenUebung: "Einfache Waffen",
    werkzeugUebung: null,
    rettungswurfUebung: ["Weisheit", "Charisma"],
    fertigkeiten: {
      anzahl: 2,
      auswahl: ["Geschichte", "Heilkunde", "Motiv erkennen", "Religion", "Überzeugen"]
    },
    stufentabelle: {
      extraSpalten: ["Zaubertricks", "1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9."],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["kleriker_zauberwirken", "kleriker_goettliche_domaene"],                                                       extra: [3,  2, "-", "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["kleriker_goettliche_macht_fokussieren", "kleriker_domaenenmerkmal"], note: "1/Rast",                            extra: [3,  3, "-", "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: [],                                                                                                             extra: [3,  4,  2, "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["allgemein_attributswerterhöhung", "kleriker_vielseitige_zaubertricks"],                                         extra: [4,  4,  3, "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: ["kleriker_untote_zerstoeren"], note: "HG ½",                                                                    extra: [4,  4,  3,  2, "-", "-", "-", "-", "-", "-"] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["kleriker_goettliche_macht_fokussieren", "kleriker_domaenenmerkmal"], note: "2/Rast",                            extra: [4,  4,  3,  3, "-", "-", "-", "-", "-", "-"] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: [],                                                                                                             extra: [4,  4,  3,  3,  1, "-", "-", "-", "-", "-"] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung", "kleriker_untote_zerstoeren", "kleriker_domaenenmerkmal"], note: "HG 1",      extra: [4,  4,  3,  3,  2, "-", "-", "-", "-", "-"] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: [],                                                                                                             extra: [4,  4,  3,  3,  3,  1, "-", "-", "-", "-"] },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["kleriker_goettliche_intervention"],                                                                             extra: [5,  4,  3,  3,  3,  2, "-", "-", "-", "-"] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: ["kleriker_untote_zerstoeren"], note: "HG 2",                                                                    extra: [5,  4,  3,  3,  3,  2,  1, "-", "-", "-"] },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                              extra: [5,  4,  3,  3,  3,  2,  1, "-", "-", "-"] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: [],                                                                                                             extra: [5,  4,  3,  3,  3,  2,  1,  1, "-", "-"] },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["kleriker_untote_zerstoeren"], note: "HG 3",                                                                    extra: [5,  4,  3,  3,  3,  2,  1,  1, "-", "-"] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: [],                                                                                                             extra: [5,  4,  3,  3,  3,  2,  1,  1,  1, "-"] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                              extra: [5,  4,  3,  3,  3,  2,  1,  1,  1, "-"] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: ["kleriker_untote_zerstoeren", "kleriker_domaenenmerkmal"], note: "HG 4",                                         extra: [5,  4,  3,  3,  3,  2,  1,  1,  1,  1] },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: ["kleriker_goettliche_macht_fokussieren"], note: "3/Rast",                                                       extra: [5,  4,  3,  3,  3,  3,  1,  1,  1,  1] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                              extra: [5,  4,  3,  3,  3,  3,  2,  1,  1,  1] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["kleriker_verbesserte_goettliche_intervention"],                                                                 extra: [5,  4,  3,  3,  3,  3,  2,  2,  1,  1] }
      ]
    },
    merkmaleIds: [
      "kleriker_zauberwirken",
      "kleriker_goettliche_domaene",
      "kleriker_goettliche_macht_fokussieren",
      "kleriker_untote_vertreiben",
      "kleriker_goettliche_macht_kanalisieren",
      "allgemein_attributswerterhöhung",
      "kleriker_vielseitige_zaubertricks",
      "kleriker_untote_zerstoeren",
      "kleriker_domaenenmerkmal",
      "kleriker_goettliche_intervention",
      "kleriker_gesegnete_schlaege",
      "kleriker_verbesserte_goettliche_intervention"
    ],
    unterklassen: [
      {
        id: "kleriker_domaene_arkana",
        name: "Domäne der Arkana",
        beschreibung: "Götter der Arkana kennen die Geheimnisse der Magie. Kleriker dieser Domäne werden zu Brücken zwischen göttlicher und arkaner Kraft und erhalten Zugang zur Magierliste.",
        merkmaleIds: [
          "kleriker_arkana_arkaner_initiierter",
          "kleriker_arkana_arkane_bannmagie",
          "kleriker_arkana_zauberbrecher",
          "kleriker_arkana_verstaerktes_zauberwirken",
          "kleriker_arkana_arkane_meisterschaft"
        ]
      },
      {
        id: "kleriker_domaene_daemmerung",
        name: "Domäne der Dämmerung",
        beschreibung: "Die Götter der Dämmerung wachen gegen die Schrecken der Nacht und trösten die Rastlosen. Kleriker dieser Domäne sehen in der Finsternis und schützen ihre Gefährten mit beruhigendem Zwielicht.",
        merkmaleIds: [
          "kleriker_daemmerung_zusaetzliches_wissen",
          "kleriker_daemmerung_augen_der_nacht",
          "kleriker_daemmerung_wachsamer_segen",
          "kleriker_daemmerung_heiligtum_der_daemmerung",
          "kleriker_daemmerung_schritte_der_nacht",
          "kleriker_daemmerung_goettlicher_schlag",
          "kleriker_daemmerung_schleier_der_daemmerung"
        ]
      },
      {
        id: "kleriker_domaene_frieden",
        name: "Domäne des Friedens",
        beschreibung: "Die Götter des Friedens inspirieren zur Lösung von Konflikten. Kleriker dieser Domäne schmieden Bande zwischen Verbündeten und helfen ihnen, Bürden gemeinsam zu tragen.",
        merkmaleIds: [
          "kleriker_frieden_angewandter_frieden",
          "kleriker_frieden_ermutigendes_band",
          "kleriker_frieden_balsam_des_friedens",
          "kleriker_frieden_schuetzendes_band",
          "kleriker_frieden_verstaerkte_zaubertricks",
          "kleriker_frieden_erweitertes_band"
        ]
      },
      {
        id: "kleriker_domaene_grab",
        name: "Domäne des Grabes",
        beschreibung: "Die Götter des Grabes wachen über die Schwelle zwischen Leben und Tod. Ihre Kleriker erlösen ruhelose Geister, vernichten Untote und lindern das Leiden von Sterbenden.",
        merkmaleIds: [
          "kleriker_grab_kreis_der_sterblichkeit",
          "kleriker_grab_grabesblick",
          "kleriker_grab_pfad_zum_grab",
          "kleriker_grab_waechter_an_der_pforte",
          "kleriker_grab_verstaerkte_zaubertricks",
          "kleriker_grab_hueter_der_seelen"
        ]
      },
      {
        id: "kleriker_domaene_krieg",
        name: "Domäne des Krieges",
        beschreibung: "Götter des Krieges belohnen jene, die in ihrem Namen kämpfen. Kleriker dieser Domäne tun sich im Kampf hervor und inspirieren andere zu wagemutigen Angriffen.",
        merkmaleIds: [
          "kleriker_krieg_zusaetzliche_uebung",
          "kleriker_krieg_kriegspriester",
          "kleriker_krieg_gefuehrter_schlag",
          "kleriker_krieg_segen_des_kriegsgottes",
          "kleriker_krieg_goettlicher_schlag",
          "kleriker_krieg_verkoerperung_der_schlacht"
        ]
      },
      {
        id: "kleriker_domaene_leben",
        name: "Domäne des Lebens",
        beschreibung: "Die Götter des Lebens fördern Vitalität und Gesundheit. Kleriker dieser Domäne sind die mächtigsten Heiler aller Klassen.",
        merkmaleIds: [
          "kleriker_leben_zusaetzliche_uebung",
          "kleriker_leben_juenger_des_lebens",
          "kleriker_leben_leben_erhalten",
          "kleriker_leben_gesegneter_heiler",
          "kleriker_leben_goettlicher_schlag",
          "kleriker_leben_ueberlegene_heilung"
        ]
      },
      {
        id: "kleriker_domaene_licht",
        name: "Domäne des Lichts",
        beschreibung: "Götter des Lichts verkörpern Wiedergeburt, Wahrheit und Wachsamkeit. Kleriker des Lichts sind beauftragt, Lügen aufzudecken und Dunkelheit mit leuchtender Flamme zu vertreiben.",
        merkmaleIds: [
          "kleriker_licht_zusaetzlicher_zaubertrick",
          "kleriker_licht_schuetzendes_flackern",
          "kleriker_licht_strahlen_des_sonnenaufgangs",
          "kleriker_licht_verbessertes_flackern",
          "kleriker_licht_verstaerkte_zaubertricks",
          "kleriker_licht_korona_des_lichts"
        ]
      },
      {
        id: "kleriker_domaene_list",
        name: "Domäne der List",
        beschreibung: "Götter der List sind Schutzherren der Diebe, Spieler und Rebellen. Ihre Kleriker bevorzugen List und Täuschung über direkte Konfrontation.",
        merkmaleIds: [
          "kleriker_list_segen_der_list",
          "kleriker_list_abbild_beschworen",
          "kleriker_list_schattenmantel",
          "kleriker_list_goettlicher_schlag",
          "kleriker_list_verbessertes_abbild"
        ]
      },
      {
        id: "kleriker_domaene_natur",
        name: "Domäne der Natur",
        beschreibung: "Die Gottheiten der Natur sind so vielfältig wie die Welt selbst. Ihre Kleriker jagen böse Monstrositäten, segnen Ernten und schützen die Wildnis.",
        merkmaleIds: [
          "kleriker_natur_gefolgsmann_der_natur",
          "kleriker_natur_zusaetzliche_uebung",
          "kleriker_natur_tiere_und_pflanzen_bezaubern",
          "kleriker_natur_elementarkraefte_maessigen",
          "kleriker_natur_goettlicher_schlag",
          "kleriker_natur_herr_der_natur"
        ]
      },
      {
        id: "kleriker_domaene_ordnung",
        name: "Domäne der Ordnung",
        beschreibung: "Die Domäne der Ordnung steht für Disziplin und Gesetzestreue. Kleriker der Ordnung glauben, dass das Gesetz im chaotischen Multiversum Ordnung und Sicherheit schafft.",
        merkmaleIds: [
          "kleriker_ordnung_zusaetzliches_wissen",
          "kleriker_ordnung_stimme_der_autoritaet",
          "kleriker_ordnung_wille_der_ordnung",
          "kleriker_ordnung_verkoerperung_des_gesetzes",
          "kleriker_ordnung_goettlicher_schlag",
          "kleriker_ordnung_zorn_der_ordnung"
        ]
      },
      {
        id: "kleriker_domaene_schmiede",
        name: "Domäne der Schmiede",
        beschreibung: "Die Götter der Schmiede sind Schutzherren der Handwerker, die mit Metall arbeiten. Ihre Kleriker stellen mächtige Rüstungen her und spüren magische Materialien auf.",
        merkmaleIds: [
          "kleriker_schmiede_zusaetzliche_uebung",
          "kleriker_schmiede_segen_der_schmiede",
          "kleriker_schmiede_segen_des_handwerkers",
          "kleriker_schmiede_seele_der_schmiede",
          "kleriker_schmiede_goettlicher_schlag",
          "kleriker_schmiede_heiliger_der_schmiede"
        ]
      },
      {
        id: "kleriker_domaene_sturm",
        name: "Domäne des Sturms",
        beschreibung: "Götter des Sturms herrschen über Gewitter, das Meer und den Himmel. Ihre Kleriker führen die Macht von Blitz und Donner als Waffe.",
        merkmaleIds: [
          "kleriker_sturm_zusaetzliche_uebung",
          "kleriker_sturm_zorn_des_sturms",
          "kleriker_sturm_vernichtender_zorn",
          "kleriker_sturm_blitzschlag",
          "kleriker_sturm_goettlicher_schlag",
          "kleriker_sturm_sturmgeboren"
        ]
      },
      {
        id: "kleriker_domaene_wissen",
        name: "Domäne des Wissens",
        beschreibung: "Die Götter des Wissens schätzen Gelehrsamkeit und Verstand. Ihre Kleriker studieren geheimes Wissen und stoßen an die verborgenen Orte der Welt vor.",
        merkmaleIds: [
          "kleriker_wissen_segen_des_wissens",
          "kleriker_wissen_wissen_der_zeitalter",
          "kleriker_wissen_gedanken_lesen",
          "kleriker_wissen_verstaerkte_zaubertricks",
          "kleriker_wissen_visionen_der_vergangenheit"
        ]
      }
    ]
  },

  "magieschmied": {
    id: "magieschmied",
    trefferwuerfel: "1W8",
    startVermoegen: "5W4 × 1.000 Hade",
    ruestungsUebung: "Leichte Rüstungen, mittelschwere Rüstungen, Schilde",
    waffenUebung: "Einfache Waffen",
    werkzeugUebung: "Diebeswerkzeug, Tüftlerwerkzeug, ein Handwerkszeug deiner Wahl",
    rettungswurfUebung: ["Intelligenz", "Konstitution"],
    fertigkeiten: {
      anzahl: 2,
      auswahl: ["Arkane Kunde", "Fingerfertigkeit", "Geschichte", "Nachforschungen", "Wahrnehmung"]
    },
    stufentabelle: {
      extraSpalten: ["Bk. Durchdringungen", "Durchdr. Gegenstände", "Zaubertricks", "1.", "2.", "3.", "4.", "5."],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["magieschmied_magisches_tuefteln", "magieschmied_zauberwirken", "magieschmied_schusswaffen_geuebheit"],  extra: ["-",  "-",  2,  2, "-", "-", "-", "-"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["magieschmied_gegenstand_durchdringen"],                                                                 extra: [4,    2,   2,  2, "-", "-", "-", "-"] },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: ["magieschmied_spezialist", "magieschmied_das_richtige_werkzeug"],                                        extra: [4,    2,   2,  3, "-", "-", "-", "-"] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                       extra: [4,    2,   2,  3, "-", "-", "-", "-"] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: ["magieschmied_spezialistenmerkmal"],                                                                      extra: [4,    2,   2,  4,  2, "-", "-", "-"] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["magieschmied_werkzeug_expertise"],                                                                       extra: [6,    3,   2,  4,  2, "-", "-", "-"] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: ["magieschmied_geistesblitz"],                                                                             extra: [6,    3,   2,  4,  3, "-", "-", "-"] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                       extra: [6,    3,   2,  4,  3, "-", "-", "-"] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: ["magieschmied_spezialistenmerkmal"],                                                                      extra: [6,    3,   2,  4,  3,  2, "-", "-"] },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["magieschmied_eingeweihter_magischer_gegenstaende"],                                                      extra: [8,    4,   3,  4,  3,  2, "-", "-"] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: ["magieschmied_zauberspeicher"],                                                                           extra: [8,    4,   3,  4,  3,  3, "-", "-"] },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                       extra: [8,    4,   3,  4,  3,  3, "-", "-"] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: [],                                                                                                        extra: [8,    4,   3,  4,  3,  3,  1, "-"] },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["magieschmied_gelehrter_magischer_gegenstaende"],                                                         extra: [10,   5,   4,  4,  3,  3,  1, "-"] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: ["magieschmied_spezialistenmerkmal"],                                                                      extra: [10,   5,   4,  4,  3,  3,  2, "-"] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                       extra: [10,   5,   4,  4,  3,  3,  2, "-"] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: [],                                                                                                        extra: [10,   5,   4,  4,  3,  3,  3,  1] },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: ["magieschmied_meister_magischer_gegenstaende"],                                                           extra: [12,   6,   4,  4,  3,  3,  3,  1] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                                       extra: [12,   6,   4,  4,  3,  3,  3,  2] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["magieschmied_seele_des_magieschmieds"],                                                                  extra: [12,   6,   4,  4,  3,  3,  3,  2] }
      ]
    },
    merkmaleIds: [
      "magieschmied_magisches_tuefteln",
      "magieschmied_zauberwirken",
      "magieschmied_schusswaffen_geuebheit",
      "magieschmied_gegenstand_durchdringen",
      "magieschmied_spezialist",
      "magieschmied_das_richtige_werkzeug",
      "allgemein_attributswerterhöhung",
      "magieschmied_spezialistenmerkmal",
      "magieschmied_werkzeug_expertise",
      "magieschmied_geistesblitz",
      "magieschmied_eingeweihter_magischer_gegenstaende",
      "magieschmied_zauberspeicher",
      "magieschmied_gelehrter_magischer_gegenstaende",
      "magieschmied_meister_magischer_gegenstaende",
      "magieschmied_seele_des_magieschmieds",
      "magieschmied_durchdringung_arkane_antriebsruestung",
      "magieschmied_durchdringung_gedankenschaerfer",
      "magieschmied_durchdringung_gleissende_waffe",
      "magieschmied_durchdringung_helm_der_wahrnehmung",
      "magieschmied_durchdringung_homunkulusdiener",
      "magieschmied_durchdringung_magischen_gegenstand_replizieren",
      "magieschmied_durchdringung_repetierschuss",
      "magieschmied_durchdringung_resistent_ruestung",
      "magieschmied_durchdringung_ring_der_zauberauffuellung",
      "magieschmied_durchdringung_ruestung_der_magischen_staerke",
      "magieschmied_durchdringung_schild_der_abstossung",
      "magieschmied_durchdringung_stiefel_des_gewundenen_pfads",
      "magieschmied_durchdringung_verbesserte_verteidigung",
      "magieschmied_durchdringung_verbesserte_waffe",
      "magieschmied_durchdringung_verbesserter_arkaner_fokus",
      "magieschmied_durchdringung_zurueckkehrende_waffe"
    ],
    unterklassen: [
      {
        id: "magieschmied_alchemist",
        name: "Alchemist",
        beschreibung: "Alchemisten kombinieren Reagenzien, um mystische Effekte zu bewirken. Alchemie ist die älteste Magieschmied-Tradition – ihre Vielseitigkeit wird sowohl in Kriegs- als auch Friedenszeiten geschätzt.",
        merkmaleIds: [
          "magieschmied_alchemist_handwerkliches_geschick",
          "magieschmied_alchemist_experimentelles_elixier",
          "magieschmied_alchemist_gelehrter_der_alchemie",
          "magieschmied_alchemist_staerkende_reagenzien",
          "magieschmied_alchemist_meister_der_alchemie"
        ]
      },
      {
        id: "magieschmied_artillerist",
        name: "Artillerist",
        beschreibung: "Artilleristen schleudern magische Energie und Explosionen auf das Schlachtfeld. Sie erschaffen mystische Kanonen und verstehen die volle Macht destruktiver Magie.",
        merkmaleIds: [
          "magieschmied_artillerist_handwerkliches_geschick",
          "magieschmied_artillerist_mystische_kanone",
          "magieschmied_artillerist_arkane_feuerwaffe",
          "magieschmied_artillerist_explosive_kanone",
          "magieschmied_artillerist_verstaerkte_stellung"
        ]
      },
      {
        id: "magieschmied_kampfschmied",
        name: "Kampfschmied",
        beschreibung: "Kampfschmiede mischen Verteidigungsexpertise, Reparaturkenntnisse und Heilfähigkeiten. Ihr selbst erschaffener Stahlverteidiger begleitet sie in den Kampf.",
        merkmaleIds: [
          "magieschmied_kampfschmied_handwerkliches_geschick",
          "magieschmied_kampfschmied_kampfbereitschaft",
          "magieschmied_kampfschmied_stahlverteidiger",
          "magieschmied_kampfschmied_zusaetzlicher_angriff",
          "magieschmied_kampfschmied_arkaner_stoss",
          "magieschmied_kampfschmied_verbesserter_verteidiger"
        ]
      },
      {
        id: "magieschmied_ruestungsschmied",
        name: "Rüstungsschmied",
        beschreibung: "Rüstungsschmiede modifizieren ihre Rüstung zu einer zweiten Haut. Sie gehen eine tiefe Verbindung mit ihrer arkanen Rüstung ein und werden praktisch eins mit ihr.",
        merkmaleIds: [
          "magieschmied_ruestungsschmied_handwerkszeug",
          "magieschmied_ruestungsschmied_arkane_ruestung",
          "magieschmied_ruestungsschmied_ruestungsmodell",
          "magieschmied_ruestungsschmied_zusaetzlicher_angriff",
          "magieschmied_ruestungsschmied_ruestungsmodifikationen",
          "magieschmied_ruestungsschmied_perfektionierte_ruestung"
        ]
      }
    ]
  },

  "magier": {
    id: "magier",
    trefferwuerfel: "1W6",
    startVermoegen: "4W4 × 1.000 Hade",
    ruestungsUebung: "Keine",
    waffenUebung: "Dolche, Wurfpfeile, Schleudern, Kampfstäbe, Leichte Armbrüste",
    werkzeugUebung: null,
    rettungswurfUebung: ["Intelligenz", "Weisheit"],
    fertigkeiten: {
      anzahl: 2,
      auswahl: ["Arkane Kunde", "Geschichte", "Heilkunde", "Motiv erkennen", "Nachforschungen", "Religion"]
    },
    stufentabelle: {
      extraSpalten: ["Zaubertricks", "1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9."],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["magier_zauberwirken", "magier_arkane_erholung"],                                            extra: [3,  2, "-", "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["magier_arkane_tradition"],                                                                   extra: [3,  3, "-", "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: ["magier_zaubertrickformeln"],                                                                 extra: [3,  4,  2, "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                           extra: [4,  4,  3, "-", "-", "-", "-", "-", "-", "-"] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: [],                                                                                           extra: [4,  4,  3,  2, "-", "-", "-", "-", "-", "-"] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["magier_traditionsmerkmal"],                                                                  extra: [4,  4,  3,  3, "-", "-", "-", "-", "-", "-"] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: [],                                                                                           extra: [4,  4,  3,  3,  1, "-", "-", "-", "-", "-"] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                           extra: [4,  4,  3,  3,  2, "-", "-", "-", "-", "-"] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: [],                                                                                           extra: [4,  4,  3,  3,  3,  1, "-", "-", "-", "-"] },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["magier_traditionsmerkmal"],                                                                  extra: [5,  4,  3,  3,  3,  2, "-", "-", "-", "-"] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: [],                                                                                           extra: [5,  4,  3,  3,  3,  2,  1, "-", "-", "-"] },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                           extra: [5,  4,  3,  3,  3,  2,  1, "-", "-", "-"] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: [],                                                                                           extra: [5,  4,  3,  3,  3,  2,  1,  1, "-", "-"] },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["magier_traditionsmerkmal"],                                                                  extra: [5,  4,  3,  3,  3,  2,  1,  1, "-", "-"] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: [],                                                                                           extra: [5,  4,  3,  3,  3,  2,  1,  1,  1, "-"] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                           extra: [5,  4,  3,  3,  3,  2,  1,  1,  1, "-"] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: [],                                                                                           extra: [5,  4,  3,  3,  3,  2,  1,  1,  1,  1] },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: ["magier_zaubermeisterschaft"],                                                                extra: [5,  4,  3,  3,  3,  3,  1,  1,  1,  1] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"],                                                           extra: [5,  4,  3,  3,  3,  3,  2,  1,  1,  1] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["magier_lieblingszauber"],                                                                    extra: [5,  4,  3,  3,  3,  3,  2,  2,  1,  1] }
      ]
    },
    merkmaleIds: [
      "magier_zauberwirken",
      "magier_arkane_erholung",
      "magier_arkane_tradition",
      "allgemein_attributswerterhöhung",
      "magier_zaubertrickformeln",
      "magier_traditionsmerkmal",
      "magier_zaubermeisterschaft",
      "magier_lieblingszauber"
    ],
    unterklassen: [
      {
        id: "magier_schule_bannmagie",
        name: "Schule der Bannmagie",
        beschreibung: "Bannmagier werden gerufen, um böse Geister auszutreiben, Orte gegen Spionage zu schützen und Portale in andere Existenzebenen zu schließen. Ihre Magie steht für Verweigerung und Schutz.",
        merkmaleIds: [
          "magier_bannmagie_gelehrter",
          "magier_bannmagie_arkaner_schutz",
          "magier_bannmagie_projizierter_schutz",
          "magier_bannmagie_verbesserte_bannmagie",
          "magier_bannmagie_zauberresistenz"
        ]
      },
      {
        id: "magier_schule_beschwoerung",
        name: "Schule der Beschwörung",
        beschreibung: "Beschwörer rufen Kreaturen und Gegenstände aus anderen Ebenen herbei. Mit wachsender Meisterschaft beherrschen sie Teleportation und können sich in einem Augenblick über weite Strecken fortbewegen.",
        merkmaleIds: [
          "magier_beschwoerung_gelehrter",
          "magier_beschwoerung_schwaechere_beschwoerung",
          "magier_beschwoerung_wohlwollende_transposition",
          "magier_beschwoerung_konzentrierte_beschwoerung",
          "magier_beschwoerung_widerstandsfaehige_beschwoerung"
        ]
      },
      {
        id: "magier_schule_erkenntnismagie",
        name: "Schule der Erkenntnismagie",
        beschreibung: "Seher streben danach, die Schleier von Zeit, Raum und Bewusstsein zu lüften. Sie meistern Fernwahrnehmung, übersinnliche Erkenntnis und Voraussicht.",
        merkmaleIds: [
          "magier_erkenntnismagie_gelehrter",
          "magier_erkenntnismagie_omen",
          "magier_erkenntnismagie_ausgezeichnete_erkenntnismagie",
          "magier_erkenntnismagie_drittes_auge",
          "magier_erkenntnismagie_maechtige_omen"
        ]
      },
      {
        id: "magier_schule_hervorrufung",
        name: "Schule der Hervorrufung",
        beschreibung: "Hervorrufer konzentrieren sich auf elementare Schadenseffekte wie Feuer, Eis und Blitze. Sie lernen, Verbündete im Auge des Sturms sicher zu halten, während ihre Feinde zerstört werden.",
        merkmaleIds: [
          "magier_hervorrufung_gelehrter",
          "magier_hervorrufung_zauber_formen",
          "magier_hervorrufung_kraftvolle_zaubertricks",
          "magier_hervorrufung_maechtige_hervorrufung",
          "magier_hervorrufung_ueberladen"
        ]
      },
      {
        id: "magier_schule_illusion",
        name: "Schule der Illusion",
        beschreibung: "Illusionisten erschaffen Täuschungen, die selbst die Weisesten hinters Licht führen. Ihre subtile Magie lässt das Unmögliche real erscheinen.",
        merkmaleIds: [
          "magier_illusion_gelehrter",
          "magier_illusion_verbesserte_einfache_illusion",
          "magier_illusion_formbare_illusion",
          "magier_illusion_illusorisches_selbst",
          "magier_illusion_illusorische_realitaet"
        ]
      },
      {
        id: "magier_schule_klingengesang",
        name: "Schule des Klingengesangs",
        beschreibung: "Klingensänger vereinen Schwertkampf, Tanz und Magie in einer eleganten Kampfkunst. Ihre fließenden Bewegungen wehren Schaden ab und ermöglichen verheerende Angriffe.",
        merkmaleIds: [
          "magier_klingengesang_geuebt_in_kampf_und_lied",
          "magier_klingengesang_klingenlied",
          "magier_klingengesang_zusaetzlicher_angriff",
          "magier_klingengesang_lieder_der_verteidigung",
          "magier_klingengesang_lied_des_sieges"
        ]
      },
      {
        id: "magier_schule_kriegsmagie",
        name: "Schule der Kriegsmagie",
        beschreibung: "Kriegsmagier kombinieren Hervorrufer- und Bannmagiertechniken. Sie sehen Magie als Waffe und Rüstung, handeln rasch und können die Energie feindlicher Zauberwirker gegen sie selbst wenden.",
        merkmaleIds: [
          "magier_kriegsmagie_arkane_abwehr",
          "magier_kriegsmagie_taktische_finesse",
          "magier_kriegsmagie_magieschub",
          "magier_kriegsmagie_bestaendige_magie",
          "magier_kriegsmagie_abwehrender_schleier"
        ]
      },
      {
        id: "magier_schule_nekromantie",
        name: "Schule der Nekromantie",
        beschreibung: "Nekromanten erforschen die kosmischen Kräfte des Lebens, des Todes und des Untodes. Sie zapfen die Lebenskraft ihrer Opfer an und erwecken Tote als willenlose Diener.",
        merkmaleIds: [
          "magier_nekromantie_gelehrter",
          "magier_nekromantie_grausame_ernte",
          "magier_nekromantie_untoter_diener",
          "magier_nekromantie_unempfindlich_gegen_untotes",
          "magier_nekromantie_untote_befehlen"
        ]
      },
      {
        id: "magier_schule_schreiber",
        name: "Schule der Schreiber",
        beschreibung: "Der Orden der Schreiber widmet sich dem Aufzeichnen magischer Entdeckungen. Seine Magier erwecken ihr Zauberbuch zu einem Gefährten mit eigenem Bewusstsein.",
        merkmaleIds: [
          "magier_schreiber_schreibfeder",
          "magier_schreiber_erwecktes_zauberbuch",
          "magier_schreiber_verstand_manifestieren",
          "magier_schreiber_meisterschreiber",
          "magier_schreiber_eins_mit_dem_wort"
        ]
      },
      {
        id: "magier_schule_verwandlung",
        name: "Schule der Verwandlung",
        beschreibung: "Verwandlungsmagier formen Materie und Geist. Für sie ist die Welt ausgesprochen wandelbar, und sie genießen es, ein Element dieser Veränderung zu sein.",
        merkmaleIds: [
          "magier_verwandlung_gelehrter",
          "magier_verwandlung_einfache_alchemie",
          "magier_verwandlung_stein_des_wandlers",
          "magier_verwandlung_gestaltwandler",
          "magier_verwandlung_meisterwandler"
        ]
      },
      {
        id: "magier_schule_verzauberung",
        name: "Schule der Verzauberung",
        beschreibung: "Verzauberungsmagier bezaubern und betören andere Kreaturen. Sie sind entweder Friedensstifter oder Tyrannen – stets in der Lage, den Unwilligen ihren Willen aufzuzwingen.",
        merkmaleIds: [
          "magier_verzauberung_gelehrter",
          "magier_verzauberung_hypnotischer_blick",
          "magier_verzauberung_instinktive_bezauberung",
          "magier_verzauberung_verzauberung_aufteilen",
          "magier_verzauberung_erinnerungen_veraendern"
        ]
      },
      {
        id: "magier_graviturgy",
        name: "Graviturgy",
        beschreibung: "(Folgt – wird zu einem späteren Zeitpunkt ergänzt.)",
        merkmaleIds: ["magier_graviturgy_placeholder"]
      },
      {
        id: "magier_chronurgy",
        name: "Chronurgy",
        beschreibung: "(Folgt – wird zu einem späteren Zeitpunkt ergänzt.)",
        merkmaleIds: ["magier_chronurgy_placeholder"]
      }
    ]
  },

  "moench": {
    id: "moench",
    trefferwuerfel: "1W8",
    startVermoegen: "5W4 × 100 Hade",
    ruestungsUebung: "keine",
    waffenUebung: "Einfache Waffen, Kurzschwerter",
    werkzeugUebung: "Ein Handwerkszeug oder Musikinstrument nach Wahl",
    rettungswurfUebung: ["Stärke", "Geschicklichkeit"],
    fertigkeiten: {
      anzahl: 2,
      auswahl: ["Akrobatik", "Athletik", "Geschichte", "Motiv erkennen", "Religion", "Heimlichkeit"]
    },
    stufentabelle: {
      extraSpalten: ["Kampfkünste", "Ki-Punkte", "Ung. Bewegung"],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["moench_ungeruestete_verteidigung", "moench_kampfkuenste"], extra: ["1W4", "—", "—"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["moench_ki", "moench_ungeruestete_bewegung", "moench_geweihte_waffe"], extra: ["1W4", "2", "+3 m"] },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: ["moench_klostertradition", "moench_geschosse_abwehren", "moench_ki_getriebener_angriff"], extra: ["1W4", "3", "+3 m"] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["allgemein_attributswerterhöhung", "moench_sturz_abfedern", "moench_beschleunigte_heilung"], extra: ["1W4", "4", "+3 m"] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: ["moench_zusaetzlicher_angriff", "moench_betaeubender_schlag", "moench_zielgenauigkeit"], extra: ["1W6", "5", "+3 m"] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["moench_ki_schlaege", "moench_klostertradition_merkmal"], extra: ["1W6", "6", "+4,5 m"] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: ["moench_entrinnen", "moench_ruhiger_geist"], extra: ["1W6", "7", "+4,5 m"] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: ["1W6", "8", "+4,5 m"] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: ["moench_verbesserte_ungeruestete_bewegung"], extra: ["1W6", "9", "+4,5 m"] },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["moench_reinheit_des_koerpers"], extra: ["1W6", "10", "+6 m"] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: ["moench_klostertradition_merkmal"], extra: ["1W8", "11", "+6 m"] },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: ["1W8", "12", "+6 m"] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: ["moench_sprache_von_sonne_und_mond"], extra: ["1W8", "13", "+6 m"] },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["moench_diamantseele"], extra: ["1W8", "14", "+7,5 m"] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: ["moench_zeitloser_koerper"], extra: ["1W8", "15", "+7,5 m"] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: ["1W8", "16", "+7,5 m"] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: ["moench_klostertradition_merkmal"], extra: ["1W10", "17", "+7,5 m"] },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: ["moench_geist_ueber_koerper"], extra: ["1W10", "18", "+9 m"] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: ["1W10", "19", "+9 m"] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["moench_perfektes_selbst"], extra: ["1W10", "20", "+9 m"] }
      ]
    },
    merkmaleIds: [
      "moench_ungeruestete_verteidigung",
      "moench_kampfkuenste",
      "moench_ki",
      "moench_ungeruestete_bewegung",
      "moench_geweihte_waffe",
      "moench_klostertradition",
      "moench_geschosse_abwehren",
      "moench_ki_getriebener_angriff",
      "allgemein_attributswerterhöhung",
      "moench_sturz_abfedern",
      "moench_beschleunigte_heilung",
      "moench_zusaetzlicher_angriff",
      "moench_betaeubender_schlag",
      "moench_zielgenauigkeit",
      "moench_ki_schlaege",
      "moench_klostertradition_merkmal",
      "moench_entrinnen",
      "moench_ruhiger_geist",
      "moench_verbesserte_ungeruestete_bewegung",
      "moench_reinheit_des_koerpers",
      "moench_sprache_von_sonne_und_mond",
      "moench_diamantseele",
      "moench_zeitloser_koerper",
      "moench_geist_ueber_koerper",
      "moench_perfektes_selbst"
    ],
    unterklassen: [
      {
        id: "moench_weg_des_astralen_selbst",
        name: "Weg des Astralen Selbst",
        beschreibung: "Mönche, die dem Weg des Astralen Selbst folgen, glauben, dass ihr Körper nur eine Illusion ist. Ihr Ki repräsentiert ihre wahre Form: ein astrales Selbst. Das astrale Selbst kann als Macht der Ordnung oder des Chaos wirken.",
        merkmaleIds: [
          "moench_astral_arme_des_astralen_selbst",
          "moench_astral_antlitz_des_astralen_selbst",
          "moench_astral_koerper_des_astralen_selbst",
          "moench_astral_erwecktes_astrales_selbst"
        ]
      },
      {
        id: "moench_weg_der_barmherzigkeit",
        name: "Weg der Barmherzigkeit",
        beschreibung: "Mönche, die dem Weg der Barmherzigkeit folgen, lernen die Lebenskraft anderer zu manipulieren und stehen so Bedürftigen zur Seite. Sie sind wandelnde Heiler und tragen gewöhnlich Roben mit großen Kapuzen und häufig maskierten Gesichtern.",
        merkmaleIds: [
          "moench_barm_angewandte_barmherzigkeit",
          "moench_barm_heilende_hand",
          "moench_barm_verletzende_hand",
          "moench_barm_medizinische_beruehrung",
          "moench_barm_schlaege_voll_heilung_und_leid",
          "moench_barm_hand_der_hohen_barmherzigkeit"
        ]
      },
      {
        id: "moench_weg_des_betrunkenen_meisters",
        name: "Weg des Betrunkenen Meisters",
        beschreibung: "Der Weg des Betrunkenen Meisters lehrt seine Schüler, sich mit den abgehackten, unberechenbaren Bewegungen eines Trunkenboldes zu bewegen. Hinter dem unbeholfenen Herumgestolpere verbirgt sich ein kontrollierter Tanz aus Verteidigungsmanövern, Paraden und Angriffen.",
        merkmaleIds: [
          "moench_betrunken_zusaetzliche_uebung",
          "moench_betrunken_trunkene_technik",
          "moench_betrunken_betrunkenes_taumeln",
          "moench_betrunken_glueck_des_trunkenboldes",
          "moench_betrunken_betrunkene_raserei"
        ]
      },
      {
        id: "moench_weg_des_drachenahnen",
        name: "Weg des Drachenahnen",
        beschreibung: "Der Legende nach gründete der Drachengott in Gestalt eines jungen Mönchs das erste Kloster des Wegs des Drachenahnen. Die fundamentale Lehre besagt, dass das Nachahmen von Drachen eine tiefere Integration mit der Welt und ihrer Magie bedeutet.",
        merkmaleIds: [
          "moench_drache_drakonischer_juenger",
          "moench_drache_odem_des_drachen",
          "moench_drache_ausgebreitete_fluegel",
          "moench_drache_aspekt_des_wyrms",
          "moench_drache_aspekt_des_ahnen"
        ]
      },
      {
        id: "moench_weg_des_kensei",
        name: "Weg des Kensei",
        beschreibung: "Mönche des Wegs des Kensei trainieren unermüdlich mit ihren Waffen, sodass diese schließlich Verlängerungen ihrer selbst werden. Ein Kensei sieht eine Waffe, wie ein Kalligraph oder ein Maler einen Stift oder einen Pinsel sieht.",
        merkmaleIds: [
          "moench_kensei_pfad_des_kensei",
          "moench_kensei_eins_mit_der_klinge",
          "moench_kensei_die_klinge_schaerfen",
          "moench_kensei_unfehlbare_treffsicherheit"
        ]
      },
      {
        id: "moench_weg_des_langen_todes",
        name: "Weg des Langen Todes",
        beschreibung: "Mönche, die dem Weg des Langen Todes folgen, sind besessen von der Bedeutung und dem Prozess des Sterbens. Sie fangen Kreaturen ein und bereiten aufwendige Experimente vor, um den Moment ihres Todes aufzuzeichnen und zu verstehen.",
        merkmaleIds: [
          "moench_tod_beruehrung_des_todes",
          "moench_tod_stunde_der_ernte",
          "moench_tod_meisterschaft_des_todes",
          "moench_tod_beruehrung_des_langen_todes"
        ]
      },
      {
        id: "moench_weg_der_offenen_hand",
        name: "Weg der Offenen Hand",
        beschreibung: "Mönche des Weges der Offenen Hand sind die unangefochtenen Meister der Kampfkünste, sei es bewaffnet oder unbewaffnet. Sie erlernen Techniken, um ihre Gegner zu Fall zu bringen, manipulieren Ki, um ihre Verletzungen zu heilen, und üben sich in fortgeschrittener Meditation.",
        merkmaleIds: [
          "moench_offen_technik_der_offenen_hand",
          "moench_offen_unversehrtheit_des_koerpers",
          "moench_offen_innere_ruhe",
          "moench_offen_vibrierende_handflaeche"
        ]
      },
      {
        id: "moench_weg_des_schattens",
        name: "Weg des Schattens",
        beschreibung: "Mönche des Weges des Schattens gehen einer Tradition nach, die Heimlichkeit und List schätzt. Diese Mönche werden auch Ninjas oder Schattentänzer genannt und dienen als Spione oder Assassinen.",
        merkmaleIds: [
          "moench_schatten_schattenkuenste",
          "moench_schatten_schattenschritt",
          "moench_schatten_mantel_aus_schatten",
          "moench_schatten_opportunist"
        ]
      },
      {
        id: "moench_weg_der_sonnenseele",
        name: "Weg der Sonnenseele",
        beschreibung: "Mönche des Weges der Sonnenseele lernen, ihre Lebensenergie in gleißende Lichtblitze umzuwandeln. Sie vertreten die Überzeugung, dass Meditation das ewige Licht entfesseln kann, das die Seele jedes lebenden Wesens ausstrahlt.",
        merkmaleIds: [
          "moench_sonne_strahlendes_sonnengeschoss",
          "moench_sonne_versengender_lichtbogenschlag",
          "moench_sonne_versengende_sonnenexplosion",
          "moench_sonne_sonnenschild"
        ]
      },
      {
        id: "moench_weg_der_vier_elemente",
        name: "Weg der Vier Elemente",
        beschreibung: "Du folgst einer Klostertradition, die dich lehrt, dir die Kraft der Elemente nutzbar zu machen. Wenn du dein Ki bündelst, kannst du dich mit den rohen Energien der Schöpfung verbinden und die vier Elemente nach deinem Willen formen.",
        merkmaleIds: [
          "moench_element_schueler_der_elemente"
        ]
      }
    ]
  },

  "paladin": {
    id: "paladin",
    trefferwuerfel: "1W10",
    startVermoegen: "5W4 × 1.000 Hade",
    ruestungsUebung: "Alle Rüstungen, Schilde",
    waffenUebung: "Einfache Waffen, Kriegswaffen",
    werkzeugUebung: "keine",
    rettungswurfUebung: ["Weisheit", "Charisma"],
    fertigkeiten: {
      anzahl: 2,
      auswahl: ["Athletik", "Einschüchtern", "Heilkunde", "Motiv erkennen", "Überzeugen", "Religion"]
    },
    stufentabelle: {
      extraSpalten: ["1. Grad", "2. Grad", "3. Grad", "4. Grad", "5. Grad"],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["paladin_goettliches_gespuer", "paladin_handauflegen"], extra: ["—", "—", "—", "—", "—"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["paladin_kampfstil", "paladin_zauberwirken", "paladin_goettliches_niederstrecken"], extra: [2, "—", "—", "—", "—"] },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: ["paladin_goettliche_gesundheit", "paladin_heiliger_schwur", "paladin_goettliche_macht_kanalisation"], extra: [3, "—", "—", "—", "—"] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["allgemein_attributswerterhöhung", "paladin_kriegerische_vielseitigkeit"], extra: [3, "—", "—", "—", "—"] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: ["paladin_zusaetzlicher_angriff"], extra: [4, 2, "—", "—", "—"] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["paladin_aura_des_schutzes"], extra: [4, 2, "—", "—", "—"] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: ["paladin_heiliger_schwur_merkmal"], extra: [4, 3, "—", "—", "—"] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [4, 3, "—", "—", "—"] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: [], extra: [4, 3, 2, "—", "—"] },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["paladin_aura_der_tapferkeit"], extra: [4, 3, 2, "—", "—"] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: ["paladin_verbessertes_goettliches_niederstrecken"], extra: [4, 3, 3, "—", "—"] },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [4, 3, 3, "—", "—"] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: [], extra: [4, 3, 3, 1, "—"] },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["paladin_reinigende_beruehrung"], extra: [4, 3, 3, 1, "—"] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: ["paladin_heiliger_schwur_merkmal"], extra: [4, 3, 3, 2, "—"] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [4, 3, 3, 2, "—"] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: [], extra: [4, 3, 3, 3, 1] },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: ["paladin_auraverbesserungen"], extra: [4, 3, 3, 3, 1] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [4, 3, 3, 3, 2] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["paladin_heiliger_schwur_merkmal"], extra: [4, 3, 3, 3, 2] }
      ]
    },
    merkmaleIds: [
      "paladin_goettliches_gespuer",
      "paladin_handauflegen",
      "paladin_kampfstil",
      "paladin_kampfstil_abfangen",
      "paladin_kampfstil_blinder_kampf",
      "paladin_kampfstil_duellieren",
      "paladin_kampfstil_gesegneter_krieger",
      "paladin_kampfstil_kampf_mit_grossen_waffen",
      "paladin_kampfstil_leibwache",
      "paladin_kampfstil_verteidigung",
      "paladin_zauberwirken",
      "paladin_goettliches_niederstrecken",
      "paladin_goettliche_gesundheit",
      "paladin_heiliger_schwur",
      "paladin_heiliger_schwur_merkmal",
      "paladin_goettliche_macht_kanalisation",
      "allgemein_attributswerterhöhung",
      "paladin_kriegerische_vielseitigkeit",
      "paladin_zusaetzlicher_angriff",
      "paladin_aura_des_schutzes",
      "paladin_aura_der_tapferkeit",
      "paladin_verbessertes_goettliches_niederstrecken",
      "paladin_reinigende_beruehrung",
      "paladin_auraverbesserungen"
    ],
    unterklassen: [
      {
        id: "paladin_eidbrecher",
        name: "Eidbrecher",
        beschreibung: "Ein Eidbrecher ist ein Paladin, der seinen heiligen Schwur gebrochen hat, um finstere Pläne zu verfolgen oder einer dunklen Macht zu dienen. Welches Licht auch im Herzen des Paladins gebrannt hat, es ist längst erloschen.",
        merkmaleIds: [
          "paladin_eidbrecher_goettliche_macht_fokussieren",
          "paladin_eidbrecher_aura_des_hasses",
          "paladin_eidbrecher_uebernatuerliche_resistenz",
          "paladin_eidbrecher_schreckensfuerst"
        ]
      },
      {
        id: "paladin_schwur_der_alten",
        name: "Schwur der Alten",
        beschreibung: "Der Schwur der Alten stammt aus längst vergangenen Zeiten. Paladine, die diesen Schwur leisten, werden manchmal Feenritter, grüne Ritter oder gehörnte Ritter genannt und schließen sich der Seite des Lichts im kosmischen Kampf gegen die Dunkelheit an.",
        merkmaleIds: [
          "paladin_alten_goettliche_macht_fokussieren",
          "paladin_alten_aura_der_abwehr",
          "paladin_alten_unsterblicher_waechter",
          "paladin_alten_champion_der_uralten"
        ]
      },
      {
        id: "paladin_schwur_der_eroberung",
        name: "Schwur der Eroberung",
        beschreibung: "Der Schwur der Eroberung ist die Bestimmung jener Paladine, die nach Ruhm im Kampf und der Unterwerfung ihrer Feinde streben. Manchmal auch Tyrannenritter oder Eisenhändler genannt, sind sie in strengen Orden organisiert.",
        merkmaleIds: [
          "paladin_eroberung_goettliche_macht_fokussieren",
          "paladin_eroberung_aura_der_eroberung",
          "paladin_eroberung_scharfer_tadel",
          "paladin_eroberung_unbezwingbarer_eroberer"
        ]
      },
      {
        id: "paladin_schwur_der_hingabe",
        name: "Schwur der Hingabe",
        beschreibung: "Der Schwur der Hingabe bindet einen Paladin an die höchsten Ideale der Gerechtigkeit, der Tugend und der Ordnung. Diese Paladine werden manchmal Kavaliere, weiße Ritter oder heilige Krieger genannt.",
        merkmaleIds: [
          "paladin_hingabe_goettliche_macht_fokussieren",
          "paladin_hingabe_aura_der_hingabe",
          "paladin_hingabe_reinheit_des_geistes",
          "paladin_hingabe_heiliger_nimbus"
        ]
      },
      {
        id: "paladin_schwur_der_krone",
        name: "Schwur der Krone",
        beschreibung: "Der Schwur der Krone hat sich den Idealen der Zivilisation verschrieben. Diese Paladine verschreiben sich der Aufgabe, der Gesellschaft zu dienen und besonders den gerechten Gesetzen, die die Gesellschaft zusammenhalten.",
        merkmaleIds: [
          "paladin_krone_goettliche_macht_fokussieren",
          "paladin_krone_goettliches_buendnis",
          "paladin_krone_standhafte_seele",
          "paladin_krone_erhabener_recke"
        ]
      },
      {
        id: "paladin_schwur_der_laeuterung",
        name: "Schwur der Läuterung",
        beschreibung: "Mit dem Schwur der Läuterung schlagen Paladine einen mühsamen Weg ein, der erfordert, dass ein heiliger Krieger nur als letztes Mittel zur Gewalt greift. Diese Paladine glauben, dass jede Person errettet werden kann.",
        merkmaleIds: [
          "paladin_laeuterung_goettliche_macht_fokussieren",
          "paladin_laeuterung_aura_des_waechters",
          "paladin_laeuterung_schuetzender_geist",
          "paladin_laeuterung_gesandter_der_laeuterung"
        ]
      },
      {
        id: "paladin_schwur_des_ruhmes",
        name: "Schwur des Ruhmes",
        beschreibung: "Paladine, die den Schwur des Ruhmes leisten, glauben, dass es ihr Schicksal und das ihrer Gefährten ist, es durch heldenhafte Taten zu Ruhm und Ehre zu bringen. Sie trainieren gewissenhaft und ermutigen ihre Gefährten, es ihnen gleichzutun.",
        merkmaleIds: [
          "paladin_ruhm_goettliche_macht_fokussieren",
          "paladin_ruhm_aura_des_eifers",
          "paladin_ruhm_glorreiche_verteidigung",
          "paladin_ruhm_lebende_legende"
        ]
      },
      {
        id: "paladin_schwur_der_wachsamen",
        name: "Schwur der Wachsamen",
        beschreibung: "Der Schwur der Wachsamen verpflichtet Paladine, die materielle Ebene vor verheerenden Angriffen durch Kreaturen anderer Ebenen zu beschützen. Für einen Wachsamen sind ein gesundes Misstrauen und genaues Beobachten der Umgebung selbstverständlich.",
        merkmaleIds: [
          "paladin_wachsamen_goettliche_macht_fokussieren",
          "paladin_wachsamen_aura_des_waechters",
          "paladin_wachsamen_wachsamer_rueffel",
          "paladin_wachsamen_sterbliche_bastion"
        ]
      }
    ]
  },

  "waldlaeufer": {
    id: "waldlaeufer",
    trefferwuerfel: "1W10",
    startVermoegen: "5W4 × 1.000 Hade",
    ruestungsUebung: "Leichte Rüstungen, Mittelschwere Rüstungen, Schilde",
    waffenUebung: "Einfache Waffen, Kriegswaffen",
    werkzeugUebung: "keine",
    rettungswurfUebung: ["Stärke", "Geschicklichkeit"],
    fertigkeiten: {
      anzahl: 3,
      auswahl: ["Athletik", "Heimlichkeit", "Mit Tieren umgehen", "Motiv erkennen", "Nachforschungen", "Naturkunde", "Überlebenskunst", "Wahrnehmung"]
    },
    stufentabelle: {
      extraSpalten: ["Bek. Zauber", "1. Grad", "2. Grad", "3. Grad", "4. Grad", "5. Grad"],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["waldlaeufer_erzfeind", "waldlaeufer_bevorzugtes_gelande", "waldlaeufer_gebliebter_feind", "waldlaeufer_geschickte_erkundung"], extra: [0, 0, "—", "—", "—", "—"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["waldlaeufer_kampfstil", "waldlaeufer_zauberwirken", "waldlaeufer_zauberfokus"], extra: [2, 2, "—", "—", "—", "—"] },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: ["waldlaeufer_waldlaeuferarchetyp", "waldlaeufer_urtuemliche_wahrnehmung", "waldlaeufer_urbewusstsein"], extra: [3, 3, "—", "—", "—", "—"] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["allgemein_attributswerterhöhung", "waldlaeufer_kriegerische_vielseitigkeit"], extra: [3, 3, "—", "—", "—", "—"] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: ["waldlaeufer_zusaetzlicher_angriff"], extra: [4, 4, 2, "—", "—", "—"] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["waldlaeufer_erzfeind_verbesserung", "waldlaeufer_bevorzugtes_gelande_verbesserung"], extra: [4, 4, 2, "—", "—", "—"] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: ["waldlaeufer_waldlaeuferarchetyp_merkmal"], extra: [5, 4, 3, "—", "—", "—"] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung", "waldlaeufer_sicherer_schritt"], extra: [5, 4, 3, "—", "—", "—"] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: [], extra: [6, 4, 3, 2, "—", "—"] },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["waldlaeufer_bevorzugtes_gelande_verbesserung", "waldlaeufer_tarnung", "waldlaeufer_naturschleier"], extra: [6, 4, 3, 2, "—", "—"] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: ["waldlaeufer_waldlaeuferarchetyp_merkmal"], extra: [7, 4, 3, 3, "—", "—"] },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [7, 4, 3, 3, "—", "—"] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: [], extra: [8, 4, 3, 3, 1, "—"] },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["waldlaeufer_erzfeind_verbesserung", "waldlaeufer_verschwinden"], extra: [8, 4, 3, 3, 1, "—"] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: ["waldlaeufer_waldlaeuferarchetyp_merkmal"], extra: [9, 4, 3, 3, 2, "—"] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [9, 4, 3, 3, 2, "—"] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: [], extra: [10, 4, 3, 3, 3, 1] },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: ["waldlaeufer_wilde_sinne"], extra: [10, 4, 3, 3, 3, 1] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [11, 4, 3, 3, 3, 2] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["waldlaeufer_feindestoeter"], extra: [11, 4, 3, 3, 3, 2] }
      ]
    },
    merkmaleIds: [
      "waldlaeufer_erzfeind",
      "waldlaeufer_erzfeind_verbesserung",
      "waldlaeufer_bevorzugtes_gelande",
      "waldlaeufer_bevorzugtes_gelande_verbesserung",
      "waldlaeufer_gebliebter_feind",
      "waldlaeufer_geschickte_erkundung",
      "waldlaeufer_kampfstil",
      "waldlaeufer_kampfstil_blinder_kampf",
      "waldlaeufer_kampfstil_bogenschiessen",
      "waldlaeufer_kampfstil_druidischer_krieger",
      "waldlaeufer_kampfstil_duellieren",
      "waldlaeufer_kampfstil_kampf_mit_zwei_waffen",
      "waldlaeufer_kampfstil_verteidigung",
      "waldlaeufer_kampfstil_wurfwaffenkampf",
      "waldlaeufer_zauberwirken",
      "waldlaeufer_zauberfokus",
      "waldlaeufer_waldlaeuferarchetyp",
      "waldlaeufer_waldlaeuferarchetyp_merkmal",
      "waldlaeufer_urtuemliche_wahrnehmung",
      "waldlaeufer_urbewusstsein",
      "waldlaeufer_kriegerische_vielseitigkeit",
      "allgemein_attributswerterhöhung",
      "waldlaeufer_zusaetzlicher_angriff",
      "waldlaeufer_sicherer_schritt",
      "waldlaeufer_tarnung",
      "waldlaeufer_naturschleier",
      "waldlaeufer_verschwinden",
      "waldlaeufer_wilde_sinne",
      "waldlaeufer_feindestoeter"
    ],
    unterklassen: [
      {
        id: "waldlaeufer_drachlingwaechter",
        name: "Drachlingwächter",
        beschreibung: "Deine Verbindung zur natürlichen Welt nimmt die Form eines drakonischen Geists an, der sich als Drachling manifestieren kann. Wenn deine Kräfte wachsen, wächst auch dein Drachling und entwickelt sich zu einer majestätischen geflügelten Kreatur.",
        merkmaleIds: [
          "waldlaeufer_drach_drakonische_gabe",
          "waldlaeufer_drach_drachlinggefaehrte",
          "waldlaeufer_drach_band_von_reisszahn_und_schuppe",
          "waldlaeufer_drach_drachlingodem",
          "waldlaeufer_drach_perfektioniertes_band"
        ]
      },
      {
        id: "waldlaeufer_duesterpirscher",
        name: "Düsterpirscher",
        beschreibung: "Düsterpirscher sind an den finstersten Orten ganz in ihrem Element: tief unter der Erde, in düsteren Gassen, urtümlichen Wäldern und an jedem anderen Ort, an dem nur Dämmerlicht herrscht. Sie wagen sich ohne zu zögern in die Dunkelheit vor.",
        merkmaleIds: [
          "waldlaeufer_duest_magie",
          "waldlaeufer_duest_schrecklicher_hinterhalt",
          "waldlaeufer_duest_duestersicht",
          "waldlaeufer_duest_unbeugsamer_verstand",
          "waldlaeufer_duest_wirbelangriff",
          "waldlaeufer_duest_schattenfinte"
        ]
      },
      {
        id: "waldlaeufer_feenwanderer",
        name: "Feenwanderer",
        beschreibung: "Durch ein verheißungsvolles Ereignis umgibt dich ein mystischer Feenglanz. Du bist ein Waldläufer, der sowohl die materielle Ebene als auch die der Feenwesen verkörpert. So herrlich wie der Frohsinn der Feen, so schrecklich ist ihr Zorn.",
        merkmaleIds: [
          "waldlaeufer_feen_graessliche_schlaege",
          "waldlaeufer_feen_magie",
          "waldlaeufer_feen_ausserweltlicher_glanz",
          "waldlaeufer_feen_betoerende_verdrehung",
          "waldlaeufer_feen_feenverstaerkung",
          "waldlaeufer_feen_nebelwanderer"
        ]
      },
      {
        id: "waldlaeufer_herr_der_tiere",
        name: "Herr der Tiere",
        beschreibung: "Dieser Archetyp verkörpert die Freundschaft zwischen den zivilisierten Völkern und den Tieren der Wildnis. Tiere und Waldläufer sind in ihrem Bestreben vereint, die Monster zu bekämpfen, die sowohl die Wildnis als auch die Zivilisation bedrohen.",
        merkmaleIds: [
          "waldlaeufer_herr_begleiter",
          "waldlaeufer_herr_urbegleiter",
          "waldlaeufer_herr_aussergewoehnliches_training",
          "waldlaeufer_herr_tierische_wut",
          "waldlaeufer_herr_zauber_teilen"
        ]
      },
      {
        id: "waldlaeufer_horizontwanderer",
        name: "Horizontwanderer",
        beschreibung: "Horizontwanderer beschützen die Welt vor Bedrohungen, die von anderen Ebenen ausgehen. Sie spüren Ebenenportale auf und bewachen sie, wobei sie zwischen den Inneren und Äußeren Ebenen hin- und herreisen.",
        merkmaleIds: [
          "waldlaeufer_horiz_magie",
          "waldlaeufer_horiz_portal_entdecken",
          "waldlaeufer_horiz_krieger_der_ebenen",
          "waldlaeufer_horiz_aetherschritt",
          "waldlaeufer_horiz_distanzschlag",
          "waldlaeufer_horiz_spektrale_verteidigung"
        ]
      },
      {
        id: "waldlaeufer_hueter_des_schwarms",
        name: "Hüter des Schwarms",
        beschreibung: "Manche Waldläufer fühlen eine tiefe Verbundenheit mit ihrer Umwelt und nutzen ihre Magie, um sich mit einem Schwarm von Naturgeistern zusammenzuschließen. Der Schwarm entwickelt eine beachtliche Kampfkraft und zeigt sich als hilfreicher Begleiter.",
        merkmaleIds: [
          "waldlaeufer_schwarm_versammelter_schwarm",
          "waldlaeufer_schwarm_magie",
          "waldlaeufer_schwarm_wimmelnde_woge",
          "waldlaeufer_schwarm_maechtiger_schwarm",
          "waldlaeufer_schwarm_schwarmaufloesung"
        ]
      },
      {
        id: "waldlaeufer_jaeger",
        name: "Jäger",
        beschreibung: "Den Archetypen des Jägers zu verkörpern bedeutet, deinen Platz als Bollwerk zwischen der Zivilisation und den Schrecken der Wildnis zu akzeptieren. Du lernst spezialisierte Techniken, um sämtliche Gefahren auszuschalten.",
        merkmaleIds: [
          "waldlaeufer_jaeger_beute",
          "waldlaeufer_jaeger_defensive_taktiken",
          "waldlaeufer_jaeger_mehrfachangriff",
          "waldlaeufer_jaeger_ausserordentliche_verteidigung"
        ]
      },
      {
        id: "waldlaeufer_monsterjaeger",
        name: "Monsterjäger",
        beschreibung: "Du widmest dich mit Inbrunst der Jagd auf die Kreaturen der Nacht und finstere Magieanwender. Ein Monsterjäger macht Vampire, Drachen, böse Feenwesen, Unholde und andere magische Bedrohungen ausfindig.",
        merkmaleIds: [
          "waldlaeufer_monster_magie",
          "waldlaeufer_monster_jaegersinne",
          "waldlaeufer_monster_jagdbeute",
          "waldlaeufer_monster_uebernatuerliche_verteidigung",
          "waldlaeufer_monster_todfeind_aller_magieanwender",
          "waldlaeufer_monster_gegenangriff"
        ]
      }
    ]
  },

  "zauberer": {
    id: "zauberer",
    trefferwuerfel: "1W6",
    startVermoegen: "3W4 × 1.000 Hade",
    ruestungsUebung: "keine",
    waffenUebung: "Dolche, Wurfpfeile, Schleudern, Kampfstäbe, Leichte Armbrüste",
    werkzeugUebung: "keine",
    rettungswurfUebung: ["Charisma", "Konstitution"],
    fertigkeiten: {
      anzahl: 2,
      auswahl: ["Arkane Kunde", "Einschüchtern", "Motiv erkennen", "Religion", "Täuschen", "Überzeugen"]
    },
    stufentabelle: {
      extraSpalten: ["Zauber-punkte", "Tricks", "Bek. Zauber", "1. Gr.", "2. Gr.", "3. Gr.", "4. Gr.", "5. Gr.", "6. Gr.", "7. Gr.", "8. Gr.", "9. Gr."],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["zauberer_zauberwirken", "zauberer_ursprung_der_zauberei"], extra: [1,  4,  2,  2, "—", "—", "—", "—", "—", "—", "—", "—"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["zauberer_quelle_der_magie"], extra: [2,  4,  3,  3, "—", "—", "—", "—", "—", "—", "—", "—"] },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: ["zauberer_metamagie"], extra: [3,  4,  4,  4,  2, "—", "—", "—", "—", "—", "—", "—"] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["allgemein_attributswerterhöhung", "zauberer_magische_vielseitigkeit"], extra: [4,  5,  5,  4,  3, "—", "—", "—", "—", "—", "—", "—"] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: ["zauberer_magische_fuehrung"], extra: [5,  5,  6,  4,  3,  2, "—", "—", "—", "—", "—", "—"] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["zauberer_ursprung_merkmal"], extra: [6,  5,  7,  4,  3,  3, "—", "—", "—", "—", "—", "—"] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: [], extra: [7,  5,  8,  4,  3,  3,  1, "—", "—", "—", "—", "—"] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [8,  5,  9,  4,  3,  3,  2, "—", "—", "—", "—", "—"] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: [], extra: [9,  5, 10,  4,  3,  3,  3,  1, "—", "—", "—", "—"] },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["zauberer_metamagie"], extra: [10,  6, 11,  4,  3,  3,  3,  2, "—", "—", "—", "—"] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: [], extra: [11,  6, 12,  4,  3,  3,  3,  2,  1, "—", "—", "—"] },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [12,  6, 12,  4,  3,  3,  3,  2,  1, "—", "—", "—"] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: [], extra: [13,  6, 13,  4,  3,  3,  3,  2,  1,  1, "—", "—"] },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["zauberer_ursprung_merkmal"], extra: [14,  6, 13,  4,  3,  3,  3,  2,  1,  1, "—", "—"] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: [], extra: [15,  6, 14,  4,  3,  3,  3,  2,  1,  1,  1, "—"] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [16,  6, 14,  4,  3,  3,  3,  2,  1,  1,  1, "—"] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: ["zauberer_metamagie"], extra: [17,  6, 15,  4,  3,  3,  3,  2,  1,  1,  1,  1] },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: ["zauberer_ursprung_merkmal"], extra: [18,  6, 15,  4,  3,  3,  3,  3,  1,  1,  1,  1] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: [19,  6, 15,  4,  3,  3,  3,  3,  2,  1,  1,  1] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["zauberer_zaubereiauffrischung"], extra: [20,  6, 15,  4,  3,  3,  3,  3,  2,  2,  1,  1] }
      ]
    },
    merkmaleIds: [
      "zauberer_zauberwirken",
      "zauberer_ursprung_der_zauberei",
      "zauberer_ursprung_merkmal",
      "zauberer_quelle_der_magie",
      "zauberer_metamagie",
      "zauberer_metamagie_bedachter_zauber",
      "zauberer_metamagie_beschleunigter_zauber",
      "zauberer_metamagie_gespiegelter_zauber",
      "zauberer_metamagie_konzentrierter_zauber",
      "zauberer_metamagie_maechtiger_zauber",
      "zauberer_metamagie_subtiler_zauber",
      "zauberer_metamagie_verlaengerter_zauber",
      "zauberer_metamagie_verwandelter_zauber",
      "zauberer_metamagie_weitreichender_zauber",
      "zauberer_metamagie_zielsuchzauber",
      "allgemein_attributswerterhöhung",
      "zauberer_magische_vielseitigkeit",
      "zauberer_magische_fuehrung",
      "zauberer_zaubereiauffrischung"
    ],
    unterklassen: [
      {
        id: "zauberer_drachenblutlinie",
        name: "Drachenblutlinie",
        beschreibung: "Die Quelle der dir innewohnenden Magie ist eine Vermischung deines Blutes oder das deiner Vorfahren mit drakonischer Zauberkraft. Viele dieser Zauberer führen ihre Ahnenlinie bis zu einem mächtigen Zauberer zurück, der ein Abkommen mit einem Drachen schloss.",
        merkmaleIds: [
          "zauberer_drachen_drachenvorfahre",
          "zauberer_drachen_drakonische_widerstandskraft",
          "zauberer_drachen_elementare_affinitaet",
          "zauberer_drachen_drachenfluegel",
          "zauberer_drachen_drakonische_praesenz"
        ]
      },
      {
        id: "zauberer_goettliche_seele",
        name: "Göttliche Seele",
        beschreibung: "Manchmal stammt der Funken der Magie aus einer göttlichen Quelle, die im Inneren deiner Seele schimmert. Dies ist ein Zeichen dafür, dass die dir angeborene Magie auf eine verwandtschaftliche Verbindung zu einem göttlichen Wesen zurückzuführen ist.",
        merkmaleIds: [
          "zauberer_goett_goettliche_magie",
          "zauberer_goett_guenstling_der_goetter",
          "zauberer_goett_verstaerkte_heilung",
          "zauberer_goett_uebernatuerliche_schwingen",
          "zauberer_goett_ueberirdische_erholungskraft"
        ]
      },
      {
        id: "zauberer_schattenmagie",
        name: "Schattenmagie",
        beschreibung: "Du bist eine Kreatur der Schatten, denn die dir innewohnende Magie stammt aus dem Shadowfell selbst. Die Macht der Schattenmagie verleiht deiner physischen Erscheinung etwas überaus Befremdliches.",
        merkmaleIds: [
          "zauberer_schatten_dunkelaugen",
          "zauberer_schatten_grabes_staerke",
          "zauberer_schatten_hund_des_unheils",
          "zauberer_schatten_schattenwandeln",
          "zauberer_schatten_schattenform"
        ]
      },
      {
        id: "zauberer_sturmzauberei",
        name: "Sturmzauberei",
        beschreibung: "Die dir innewohnende Magie rührt von der elementaren Macht der Luft her. Vielleicht wurdest du während eines tosenden Sturmes geboren oder befindet sich unter deinen Vorfahren ein mächtiges Luftwesen wie ein Djinn.",
        merkmaleIds: [
          "zauberer_sturm_windsprecher",
          "zauberer_sturm_stuermische_magie",
          "zauberer_sturm_herz_des_sturms",
          "zauberer_sturm_sturmlenker",
          "zauberer_sturm_wut_des_sturms",
          "zauberer_sturm_windseele"
        ]
      },
      {
        id: "zauberer_uhrwerkseele",
        name: "Uhrwerkseele",
        beschreibung: "Die kosmische Kraft der Ordnung hat dich mit Magie erfüllt. Diese Kraft stammt aus Mechanus oder einem ähnlichen Reich — einer Existenzebene, die vollständig von der Effizienz des Uhrwerks geprägt ist.",
        merkmaleIds: [
          "zauberer_uhrwerk_uhrwerkmagie",
          "zauberer_uhrwerk_gleichgewicht_wiederherstellen",
          "zauberer_uhrwerk_bastion_des_gesetzes",
          "zauberer_uhrwerk_trance_der_ordnung",
          "zauberer_uhrwerk_uhrwerkkavalkade"
        ]
      },
      {
        id: "zauberer_ungewoehnlicher_verstand",
        name: "Ungewöhnlicher Verstand",
        beschreibung: "Ein fremdweltiger Einfluss hat sich in deinen Gedanken verstrickt und dir psionische Kräfte verliehen. Du kannst den Geist anderer mit dieser Kraft berühren und die Welt um dich herum verändern.",
        merkmaleIds: [
          "zauberer_verstand_psionische_zauber",
          "zauberer_verstand_telepathische_sprache",
          "zauberer_verstand_psionische_zauberei",
          "zauberer_verstand_psychische_verteidigung",
          "zauberer_verstand_offenbarung_in_fleisch",
          "zauberer_verstand_verzerrende_implosion"
        ]
      },
      {
        id: "zauberer_wilde_magie",
        name: "Wilde Magie",
        beschreibung: "Die dir innewohnende Magie entspringt den Kräften des Chaos, die der gesamten Schöpfung zugrunde liegen. Wie auch immer du zu deinen magischen Kräften gekommen bist, sie brodeln in dir und warten darauf auszubrechen.",
        merkmaleIds: [
          "zauberer_wild_woge_der_wilden_magie",
          "zauberer_wild_gezeiten_des_chaos",
          "zauberer_wild_schicksal_zurechtbiegen",
          "zauberer_wild_kontrolliertes_chaos",
          "zauberer_wild_zauberbombardement"
        ]
      }
    ]
  },

  "schurke": {
    id: "schurke",
    trefferwuerfel: "1W8",
    startVermoegen: "4W4 × 1.000 Hade",
    ruestungsUebung: "Leichte Rüstungen",
    waffenUebung: "Einfache Waffen, Handarmbrüste, Langschwerter, Rapiere, Kurzschwerter",
    werkzeugUebung: "Diebeswerkzeug",
    rettungswurfUebung: ["Geschicklichkeit", "Intelligenz"],
    fertigkeiten: {
      anzahl: 4,
      auswahl: ["Akrobatik", "Athletik", "Auftreten", "Motiv erkennen", "Einschüchtern", "Fingerfertigkeit", "Heimlichkeit", "Überzeugen", "Nachforschungen", "Täuschen", "Wahrnehmung"]
    },
    stufentabelle: {
      extraSpalten: ["Hint. Angriff"],
      zeilen: [
        { stufe: 1,  uebungsbonus: 2, merkmaleIds: ["schurke_expertise", "schurke_hinterhaeltiger_angriff", "schurke_diebessprache"], extra: ["1W6"] },
        { stufe: 2,  uebungsbonus: 2, merkmaleIds: ["schurke_raffinierte_aktion"], extra: ["1W6"] },
        { stufe: 3,  uebungsbonus: 2, merkmaleIds: ["schurke_schurkenarchetyp", "schurke_zielsicher"], extra: ["2W6"] },
        { stufe: 4,  uebungsbonus: 2, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: ["2W6"] },
        { stufe: 5,  uebungsbonus: 3, merkmaleIds: ["schurke_unglaubliches_ausweichen"], extra: ["3W6"] },
        { stufe: 6,  uebungsbonus: 3, merkmaleIds: ["schurke_expertise"], extra: ["3W6"] },
        { stufe: 7,  uebungsbonus: 3, merkmaleIds: ["schurke_entrinnen"], extra: ["4W6"] },
        { stufe: 8,  uebungsbonus: 3, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: ["4W6"] },
        { stufe: 9,  uebungsbonus: 4, merkmaleIds: ["schurke_schurkenarchetyp_merkmal"], extra: ["5W6"] },
        { stufe: 10, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: ["5W6"] },
        { stufe: 11, uebungsbonus: 4, merkmaleIds: ["schurke_verlaessliches_talent"], extra: ["6W6"] },
        { stufe: 12, uebungsbonus: 4, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: ["6W6"] },
        { stufe: 13, uebungsbonus: 5, merkmaleIds: ["schurke_schurkenarchetyp_merkmal"], extra: ["7W6"] },
        { stufe: 14, uebungsbonus: 5, merkmaleIds: ["schurke_blindgespuer"], extra: ["7W6"] },
        { stufe: 15, uebungsbonus: 5, merkmaleIds: ["schurke_entschluepfender_geist"], extra: ["8W6"] },
        { stufe: 16, uebungsbonus: 5, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: ["8W6"] },
        { stufe: 17, uebungsbonus: 6, merkmaleIds: ["schurke_schurkenarchetyp_merkmal"], extra: ["9W6"] },
        { stufe: 18, uebungsbonus: 6, merkmaleIds: ["schurke_schwer_zu_fassen"], extra: ["9W6"] },
        { stufe: 19, uebungsbonus: 6, merkmaleIds: ["allgemein_attributswerterhöhung"], extra: ["10W6"] },
        { stufe: 20, uebungsbonus: 6, merkmaleIds: ["schurke_glueckstreffer"], extra: ["10W6"] }
      ]
    },
    merkmaleIds: [
      "schurke_expertise",
      "schurke_hinterhaeltiger_angriff",
      "schurke_diebessprache",
      "schurke_raffinierte_aktion",
      "schurke_schurkenarchetyp",
      "schurke_schurkenarchetyp_merkmal",
      "schurke_zielsicher",
      "allgemein_attributswerterhöhung",
      "schurke_unglaubliches_ausweichen",
      "schurke_entrinnen",
      "schurke_verlaessliches_talent",
      "schurke_blindgespuer",
      "schurke_entschluepfender_geist",
      "schurke_schwer_zu_fassen",
      "schurke_glueckstreffer"
    ],
    unterklassen: [
      {
        id: "schurke_arkaner_betrueger",
        name: "Arkaner Betrüger",
        beschreibung: "Manche Schurken verbessern ihre hervorragenden Fertigkeiten der Heimlichkeit und der Beweglichkeit mit Magie und erlernen Verzauberungstricks und Illusionen. Unter diesen Schurken gibt es Taschendiebe und Einbrecher, aber auch Unruhestifter und Abenteuerer.",
        merkmaleIds: [
          "schurke_betrueger_zauberwirken",
          "schurke_betrueger_magierhand_kniff",
          "schurke_betrueger_magischer_hinterhalt",
          "schurke_betrueger_vielseitiger_trickser",
          "schurke_betrueger_zauberdieb"
        ]
      },
      {
        id: "schurke_assassine",
        name: "Assassine",
        beschreibung: "Du konzentrierst dein Training auf die grausame Kunst des Tötens. Auftragsmörder, Spione, Kopfgeldjäger und speziell ausgebildete Priester gehören diesem Archetyp an. Heimlichkeit, Gift und Verkleidung helfen dir, deine Gegner zu eliminieren.",
        merkmaleIds: [
          "schurke_assassin_zusaetzliche_uebung",
          "schurke_assassin_attentat",
          "schurke_assassin_infiltrationsexperte",
          "schurke_assassin_imitator",
          "schurke_assassin_todesstoss"
        ]
      },
      {
        id: "schurke_dieb",
        name: "Dieb",
        beschreibung: "Du verfeinerst deine Fertigkeiten in den Diebeskünsten. Einbrecher, Banditen, Beutelschneider, Schatzsucher und Grabräuber folgen in der Regel diesem Archetyp. Du verbesserst nicht nur deine Beweglichkeit, sondern lernst auch hilfreiche Fertigkeiten für uralte Ruinen und magische Gegenstände.",
        merkmaleIds: [
          "schurke_dieb_flinke_finger",
          "schurke_dieb_kletteraffe",
          "schurke_dieb_ausserordentliches_schleichen",
          "schurke_dieb_magischen_gegenstand_benutzen",
          "schurke_dieb_reflexe_des_diebes"
        ]
      },
      {
        id: "schurke_draufgaenger",
        name: "Draufgänger",
        beschreibung: "Du konzentrierst deine Ausbildung auf die Kunst des Schwertkampfes und setzt dabei auf eine Mischung aus Geschwindigkeit, Eleganz und Charme. Duellanten und Piraten sind Vertreter dieses Archetyps.",
        merkmaleIds: [
          "schurke_drauf_komplexe_beinarbeit",
          "schurke_drauf_verwegene_dreistigkeit",
          "schurke_drauf_verve",
          "schurke_drauf_elegantes_manoever",
          "schurke_drauf_meisterduellant"
        ]
      },
      {
        id: "schurke_ermittler",
        name: "Ermittler",
        beschreibung: "Als archetypischer Ermittler bist du exzellent darin, Geheimnisse aufzuspüren und Mysterien aufzuklären. Dank deines gewaltigen Wissens und deiner messerscharfen Schlussfolgerungen findest du verborgene Bedrohungen und bereitest ihnen ein Ende.",
        merkmaleIds: [
          "schurke_ermittler_luegen_raushoeren",
          "schurke_ermittler_auge_fuers_detail",
          "schurke_ermittler_gewiefte_kampfweise",
          "schurke_ermittler_unbeirrter_blick",
          "schurke_ermittler_unfehlbarer_blick",
          "schurke_ermittler_schwaechenkennen"
        ]
      },
      {
        id: "schurke_phantom",
        name: "Phantom",
        beschreibung: "Bei ihren Gratwanderungen zwischen Leben und Tod entdecken einige Schurken eine geheimnisvolle Verbundenheit mit dem Tod. Sie entnehmen den Toten Erkenntnisse, tauchen immer tiefer in negative Kräfte ein und gleichen zuletzt selbst Geistern.",
        merkmaleIds: [
          "schurke_phantom_gefluster_der_toten",
          "schurke_phantom_wehklagen_der_toten",
          "schurke_phantom_zeichen_der_verstorbenen",
          "schurke_phantom_spektralgestalt",
          "schurke_phantom_freund_des_todes"
        ]
      },
      {
        id: "schurke_seelenmesser",
        name: "Seelenmesser",
        beschreibung: "Seelenmesser dringen in den Verstand anderer ein und schlagen dort zu. Sie haben psionische Kraft in sich entdeckt und nutzen sie für ihr schurkisches Handwerk. Sie durchbrechen sowohl physische als auch psychische Barrieren.",
        merkmaleIds: [
          "schurke_seele_psionische_kraft",
          "schurke_seele_psychische_klingen",
          "schurke_seele_seelenklingen",
          "schurke_seele_psychischer_schleier",
          "schurke_seele_geist_zerfetzen"
        ]
      },
      {
        id: "schurke_spaeer",
        name: "Späher",
        beschreibung: "Du bist geschickt im Schleichen und im Überleben fernab der Straßen der Stadt, sodass du während Expeditionen die Gegend vor deinen Gefährten auskundschaften kannst. Jäger, Spione und Kopfgeldjäger gehören zu diesem Archetyp.",
        merkmaleIds: [
          "schurke_spaeer_plaenkler",
          "schurke_spaeer_ueberlebenskuenstler",
          "schurke_spaeer_ausserordentliche_beweglichkeit",
          "schurke_spaeer_meister_des_hinterhalts",
          "schurke_spaeer_ploetzlicher_schlag"
        ]
      },
      {
        id: "schurke_strippenzieher",
        name: "Strippenzieher",
        beschreibung: "Dein Fokus richtet sich auf Personen und auf den Einfluss und die Geheimnisse, über die sie verfügen. Viele Spione, Höflinge und Intriganten entscheiden sich für diesen Archetyp. Du nutzt Worte so oft als Waffen wie Messer oder Gift.",
        merkmaleIds: [
          "schurke_strippen_meister_der_intrige",
          "schurke_strippen_meister_der_taktik",
          "schurke_strippen_erkenntnisreicher_manipulator",
          "schurke_strippen_ablenken",
          "schurke_strippen_seele_der_taeuschung"
        ]
      }
    ]
  }

};
