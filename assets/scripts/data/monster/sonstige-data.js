// Sonstige Monster — Sammelort für nicht-zusammenhängende Monster aus
// verschiedensten Quellen, die nicht in einem bestimmten Buch erscheinen.
//
// Neue Einträge:
//   - source: "Sonstige"
//   - bild:   "sonstige/<dateiname>.png"
//   - Schema identisch zu den anderen Monster-Datenquellen
//
// Alphabetisch nach name einsortieren (Deutsch-Sortierung).

window.MONSTER_DATA_SONSTIGE = [
  {
    "name": "Abgrundschlund",
    "art": "Monstrosität",
    "unterart": "Titangeblutet",
    "groesse": "Riesig",
    "gesinnung": "Neutral",
    "cr": 12,
    "xp": 8400,
    "rk": 18,
    "ruestungstyp": "Natürliche Rüstung",
    "tp": 184,
    "tp_wuerfel": "16W12+80",
    "bewegung": {
      "Gehen": "12 m",
      "Klettern": "6 m"
    },
    "attribute": {
      "STR": 22,
      "DEX": 10,
      "CON": 20,
      "INT": 3,
      "WIS": 16,
      "CHA": 6
    },
    "rettungswuerfe": {
      "STR": 10,
      "KON": 9,
      "WEI": 7
    },
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Donner",
      "Hieb"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [
      "Geblendet"
    ],
    "sinne": [
      "Blindsicht 36 m",
      "Erschütterungssinn 18 m"
    ],
    "passiveWahrnehmung": 17,
    "sprachen": [],
    "umgebung": [
      "Gebirge",
      "Wald"
    ],
    "bild": "sonstige/abgrundschlund.png",
    "beschreibung": [
      "Klasse 2 – Titan-Sippe | Region: Südliche Basaltgrate, Hohes Blätterdach",
      "Der Abgrundschlund ist ein geologischer Albtraum, der sich entwickelt hat, um die vertikalen Basaltklippen der Welt zu dominieren. Ohne Augen nimmt er die Welt durch einen hypersensitiven Knochenkamm wahr, der die kleinsten Erschütterungen im Gestein wahrnimmt. Seine Haut ist aus ledrigen Muskeln aufgebaut und mit rohen Basaltablagerungen bedeckt – ein natürlicher Stoff, der Standardklingen bei Aufprall zersplittern lässt und Titangeborene-Waffen zum Kratzen der Oberfläche benötigt.",
      "Diese Titanen beherrschen die Zermürbungsjagd und verfügen über legendäre Ausdauer, um das akustische Echo eines Beutezugs tagelang ohne Rast zu verfolgen. Wenn die Distanz geschlossen ist, zögert der Abgrundschlund nicht – er greift wie eine Zange an und pinnt das Ziel mit erdrückendem Gewicht fest. Dann entfaltet er sein segmentiertes Schweifschlagen, eine Waffe die mit der Geschwindigkeit einer Belagerungskugel schnappt und Rüstung und Knochen erschüttert."
    ],
    "besonderheiten": [
      {
        "name": "Basalt-Haut",
        "beschreibung": "Der Abgrundschlund ist immun gegen den zusätzlichen Schaden eines Kritischen Treffers, wenn der Angriff mit einer Adamantin-, Vorpal- oder Titangeborenen-Waffe durchgeführt wird."
      },
      {
        "name": "Echolokation",
        "beschreibung": "Der Abgrundschlund kann seinen Blindsinn nicht einsetzen, wenn er Taub ist."
      },
      {
        "name": "Unermüdlicher Verfolger",
        "beschreibung": "Vorteil auf Weisheit (Überleben), um Kreaturen zu verfolgen, die er in den letzten 24 Stunden wahrgenommen hat."
      }
    ],
    "aktionen": [
      {
        "name": "Multiattacke",
        "beschreibung": "Der Abgrundschlund führt zwei Kieferbiss-Angriffe durch. Er kann einen davon durch einen Schweifhieb ersetzen (sofern verfügbar)."
      },
      {
        "name": "Kieferbiss",
        "beschreibung": "Nahkampfangriffswurf: +10, Reichweite 3 m. Treffer: 22 (3W10+6) Stichschaden. Das Ziel ist Gepackt (SG 18) und Gefesselt."
      },
      {
        "name": "Schweifhieb (Aufladung 5–6)",
        "beschreibung": "Ausstrahlung 6 m. SG 15 Geschicklichkeitsrettungswurf. Misslungen: 22 (3W10+6) Hiebschaden plus 11 (2W10) Donnerschaden und Liegend. Erfolg: halber Schaden, nicht Liegend."
      }
    ],
    "bonusaktionen": [
      {
        "name": "Mitreißender Stoß",
        "beschreibung": "Nur gegen Gepackte oder Liegende Kreaturen. Nahkampfangriffswurf: +10 (mit Vorteil), Reichweite 6 m. Treffer: 28 (4W10+6) Stichschaden."
      },
      {
        "name": "Sonar-Puls",
        "beschreibung": "Gibt einen Klick ab. Kennt den genauen Ort jeder sich bewegenden oder Geräusche machenden Kreatur innerhalb von 90 m bis zu seinem nächsten Zug (ignoriert Unsichtbar/Versteckt)."
      }
    ],
    "reaktionen": [
      {
        "name": "Schweif-Bollwerk",
        "beschreibung": "Auslöser: Von einem Fernkampfangriff getroffen. Reaktion: Erhält +4 RK für diesen Angriff."
      }
    ],
    "legendaere_aktionen": null,
    "source": "Sonstige"
  },
  {
    "name": "Borgoyle",
    "art": "Monstrosität",
    "unterart": null,
    "groesse": "Mittelgroß",
    "gesinnung": "Chaotisch böse",
    "cr": 4,
    "xp": 1100,
    "rk": 15,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 75,
    "tp_wuerfel": "10W8+30",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 15,
      "DEX": 14,
      "CON": 16,
      "INT": 9,
      "WIS": 12,
      "CHA": 6
    },
    "rettungswuerfe": {
      "STR": 4,
      "KON": 5
    },
    "fertigkeiten": {
      "Wahrnehmung": 3
    },
    "schadensresistenzen": [
      "Nekrotisch",
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 13,
    "sprachen": [
      "Versteht Tiefensprache, kann aber nicht sprechen"
    ],
    "umgebung": [
      "Sumpf"
    ],
    "bild": "sonstige/borgoyle.png",
    "beschreibung": [
      "Verflucht und entstellt, bewahren Borgoyles nur eine schwache Ähnlichkeit mit ihrem früheren menschlichen Selbst. Verändert durch Nissharas Experimente mit den Sumpfgewässern, entwickeln sie innerhalb weniger Tage nach dem Kontakt mit den verseuchten Wassern froschähnliche Haut, eine gezackte Rückenflosse, scharfe Klauen und haifischartige Zähne.",
      "Ihren ursprünglichen Instinkten überlassen, lauern Borgoyles im Sumpf auf ihre Opfer, überwältigen sie und ziehen sie in eben jene verfluchten Gewässer, die sie selbst erschaffen haben."
    ],
    "besonderheiten": [
      {
        "name": "Amphibisch",
        "beschreibung": "Der Borgoyle kann sowohl Luft als auch Wasser atmen."
      },
      {
        "name": "Lauerer",
        "beschreibung": "Solange der Borgoyle reglos und teilweise im Sumpfwasser oder an Felsen klammernd verharrt, ist er von einem moosbedeckten Felsblock nicht zu unterscheiden."
      },
      {
        "name": "Der Ruf der Flut",
        "beschreibung": "Wann immer eine Kreatur innerhalb von 9 m des Borgoyle ihren Zug mit der Hälfte oder weniger ihrer Trefferpunkte beginnt, muss sie einen WEI-Rettungswurf SG 13 bestehen oder hört den ertrinkenden Ruf des toten Gottes. Bei Misserfolg wird ihre Bewegungsgeschwindigkeit zu Beginn ihres nächsten Zuges um 3 m verringert, und sie erleidet 2 (1W4) Nekrotischen Schaden, da spektrale Salzlauge in ihre Lungen sickert."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Der Borgoyle führt zwei Angriffe aus: einen Biss und einen Klauenhieb."
      },
      {
        "name": "Biss",
        "beschreibung": "Nahkampfwaffenangriff: +9, Reichweite 3 m, ein Ziel. Treffer: 11 (2W8+2) Stichschaden, und das Ziel muss einen KON-Rettungswurf SG 13 bestehen oder erleidet 5 (2W4) Nekrotischen Schaden, da Sumpffäule in die Wunde eindringt."
      },
      {
        "name": "Klauen",
        "beschreibung": "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 9 (2W6+2) Hiebschaden."
      },
      {
        "name": "Ertrinkungsschrei (Aufladung 5–6)",
        "beschreibung": "Der Borgoyle stößt einen gurgelnden, blasenden Schrei aus. Jede Kreatur innerhalb von 6 m, die ihn hören kann, muss einen WEI-Rettungswurf SG 13 bestehen oder ist bis zum Ende des nächsten Zuges des Borgoyle Verängstigt."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Sonstige"
  },
  {
    "name": "Düstermaulwurf-Koloss",
    "art": "Monstrosität",
    "unterart": null,
    "groesse": "Groß",
    "gesinnung": "Neutral",
    "cr": 11,
    "xp": 7200,
    "rk": 16,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 207,
    "tp_wuerfel": "18W10+108",
    "bewegung": {
      "Gehen": "12 m",
      "Graben": "15 m",
      "Klettern": "6 m"
    },
    "attribute": {
      "STR": 22,
      "DEX": 12,
      "CON": 22,
      "INT": 4,
      "WIS": 14,
      "CHA": 6
    },
    "rettungswuerfe": {
      "STR": 10,
      "KON": 10,
      "WEI": 6
    },
    "fertigkeiten": {
      "Wahrnehmung": 6,
      "Heimlichkeit": 5
    },
    "schadensresistenzen": [
      "Wucht-, Stich- und Hiebschaden von nichtmagischen Angriffen",
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [
      "Feuer",
      "Strahlend (wenn innerlich erlitten)"
    ],
    "zustandsimmunitaeten": [
      "Vergiftet"
    ],
    "sinne": [
      "Blindsicht 18 m",
      "Erschütterungssinn 36 m"
    ],
    "passiveWahrnehmung": 16,
    "sprachen": [
      "Versteht Untergemein und Tiefensprache, kann aber nicht sprechen"
    ],
    "umgebung": [
      "Unterirdisch",
      "Höhle"
    ],
    "bild": "sonstige/duestermaulwurf-koloss.png",
    "beschreibung": [],
    "besonderheiten": [
      {
        "name": "Feiner Geruchssinn",
        "beschreibung": "Der Koloss hat Vorteil auf WIS(Wahrnehmung)-Würfe, die auf dem Geruchssinn beruhen."
      },
      {
        "name": "Lichtloses Versteck",
        "beschreibung": "Das Fell des Kolosses absorbiert alles Licht innerhalb von 3 m um ihn herum. Helles Licht in diesem Bereich wird zu dämmrigem Licht, und dämmriges Licht wird zu Dunkelheit. Der Koloss kann nicht durch helles Licht geblendet werden."
      },
      {
        "name": "Tunnelbauer",
        "beschreibung": "Der Koloss kann durch massiven Fels graben und hinterlässt dabei einen Tunnel von 4,5 m Durchmesser."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Der Koloss führt zwei Klauenangriffe aus. Treffen beide dasselbe Ziel, kann er als Bonusaktion einen Bissangriff gegen dieses Ziel ausführen."
      },
      {
        "name": "Klauen",
        "beschreibung": "Nahkampfwaffenangriff: +10, Reichweite 3 m, ein Ziel. Treffer: 17 (2W8+6) Hiebschaden. Ist das Ziel eine große oder kleinere Kreatur, wird es Gepackt (Befreiungs-SG 18). Solange das Greifen anhält, ist das Ziel Festgesetzt, und der Koloss kann diese Klaue nicht gegen ein anderes Ziel einsetzen."
      },
      {
        "name": "Biss",
        "beschreibung": "Nahkampfwaffenangriff: +10, Reichweite 1,5 m, ein gepacktes Ziel. Treffer: 19 (2W10+6) Stichschaden plus 7 (2W6) Säureschaden. Reduziert dieser Schaden das Ziel auf 50 Trefferpunkte oder weniger, verschluckt der Koloss es (siehe Verschlucken)."
      },
      {
        "name": "Verschlucken",
        "beschreibung": "Eine vom Koloss verschluckte Kreatur ist Geblendet und Festgesetzt, hat vollständige Deckung gegen Angriffe und Effekte von außerhalb des Kolosses, und erleidet zu Beginn jedes Zuges des Kolosses 21 (6W6) Säureschaden. Erleidet der Koloss in einer einzigen Runde 40 oder mehr Schaden von einer verschluckten Kreatur, oder ist er Ziel des Zaubers Magie auflösen auf seinen Magen, muss er einen KON-Rettungswurf SG 18 bestehen oder erbricht alle verschluckten Kreaturen, die in einem Bereich von 3 m um den Koloss landen. Stirbt der Koloss, ist eine verschluckte Kreatur nicht länger Festgesetzt und kann den Kadaver durch eine Bewegung von 6 m verlassen."
      }
    ],
    "bonusaktionen": [
      {
        "name": "Taschenparty (Aufladung 5–6)",
        "beschreibung": "Als Bonusaktion faltet der Koloss den Raum, um eine extradimensionale Tasche von 3 m Radius zu erschaffen, die von seinem Magen ausgeht. Die Tasche bleibt bis zum Beginn des nächsten Zuges des Kolosses bestehen. Jede Kreatur, die ihren Zug in der Tasche beginnt, muss einen STR-Rettungswurf SG 18 bestehen oder wird verschluckt und kann nicht atmen. Eine verschluckte Kreatur erleidet zu Beginn jedes Zuges des Kolosses 21 (6W6) Säureschaden. Eine Kreatur kann eine Aktion nutzen, um einen STR-Rettungswurf SG 18 abzulegen und sich aus der Tasche herauszudrücken. Die Tasche kann bis zu vier mittelgroße oder kleinere Kreaturen aufnehmen. (Häute, die durch diese Fähigkeit geerntet werden, bilden die Grundlage der Raummagie des Beutels.)"
      }
    ],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Sonstige"
  },
  {
    "name": "Frostfeder-Schnellreiter",
    "art": "Tier",
    "unterart": null,
    "groesse": "Groß",
    "gesinnung": "Neutral",
    "cr": 3,
    "xp": 800,
    "rk": 14,
    "ruestungstyp": null,
    "tp": 59,
    "tp_wuerfel": "7W10+21",
    "bewegung": {
      "Gehen": "12 m",
      "Graben": "7,5 m (Eis)"
    },
    "attribute": {
      "STR": 16,
      "DEX": 14,
      "CON": 16,
      "INT": 4,
      "WIS": 14,
      "CHA": 8
    },
    "rettungswuerfe": {
      "STR": 5,
      "KON": 5,
      "WEI": 4
    },
    "fertigkeiten": {
      "Wahrnehmung": 4,
      "Überleben": 4
    },
    "schadensresistenzen": [
      "Kälte"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Erschütterungssinn 9 m"
    ],
    "passiveWahrnehmung": 14,
    "sprachen": [
      "Versteht die Sprachen seines Reiters, kann aber nicht sprechen"
    ],
    "umgebung": [
      "Arktis"
    ],
    "bild": "sonstige/frostfeder-schnellreiter.png",
    "beschreibung": [],
    "besonderheiten": [
      {
        "name": "Blizzard-Ausdauer",
        "beschreibung": "Der Frostfeder hat Vorteil auf Rettungswürfe, um den Zustand Gefesselt zu vermeiden. Er ist immun gegen den Zustand Erschöpft durch extreme Kälte."
      },
      {
        "name": "Instabile Tunnel",
        "beschreibung": "Ein 1,5-m-Würfel-Raum, durch den der Frostfeder gräbt, wird bis zum Beginn seines nächsten Zuges instabil. Eine Kreatur, die diesen Raum zum ersten Mal in einem Zug betritt oder dort endet, muss einen SG 13 Geschicklichkeitsrettungswurf bestehen oder 7 (2W6) Wuchtschaden erleiden und den Zustand Liegend erhalten."
      },
      {
        "name": "Symbiotisches Reittier",
        "beschreibung": "Solange der Frostfeder von einem willigen Verbündeten geritten wird, gelten folgende Vorteile: Koordinierte Aktion: Der Frostfeder teilt die Initiative des Reiters, handelt jedoch unmittelbar nach ihm. Glaziale Stabilität: Der Reiter hat Resistenz gegen Kälteschaden und Vorteil auf Rettungswürfe, um nicht abgeworfen zu werden oder den Zustand Liegend zu erlangen."
      }
    ],
    "aktionen": [
      {
        "name": "Multiattacke",
        "beschreibung": "Der Frostfeder führt zwei Reißen-Angriffe durch."
      },
      {
        "name": "Reißen",
        "beschreibung": "Nahkampfangriffswurf: +5, Reichweite 3 m. Treffer: 10 (2W6+3) Hiebschaden."
      },
      {
        "name": "Frostdurchbruch",
        "beschreibung": "Wenn der Frostfeder eingegraben ist, taucht er in einem freien Raum auf. Beim Auftauchen erzeugt er eine Schockwelle in einem 1,5-m-Ausstrahlungsbereich. Jede Kreatur in diesem Bereich muss einen SG 13 Stärkerettungswurf bestehen oder 10 (3W6) Wuchtschaden erleiden und den Zustand Liegend erhalten. Bei einem erfolgreichen Wurf erleidet die Kreatur halben Schaden und ist nicht liegend."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [
      {
        "name": "Glazialer Schnapp",
        "beschreibung": "Auslöser: Eine Kreatur innerhalb von 3 m vom Frostfeder erhält den Zustand Liegend. Reaktion: Der Frostfeder führt einen Reißen-Angriff gegen diese Kreatur durch. Trifft der Angriff, kann der Frostfeder sich sofort bis zur Hälfte seiner Bewegungsrate bewegen, ohne Gelegenheitsangriffe auszulösen."
      }
    ],
    "legendaere_aktionen": null,
    "source": "Sonstige"
  },
  {
    "name": "Großer Phantasmalteufel",
    "art": "Unhold",
    "unterart": "Teufel",
    "groesse": "Mittelgroß",
    "gesinnung": "Rechtschaffen böse",
    "cr": 8,
    "xp": 3900,
    "rk": 14,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 97,
    "tp_wuerfel": "13W8+39",
    "bewegung": {
      "Gehen": "12 m"
    },
    "attribute": {
      "STR": 12,
      "DEX": 18,
      "CON": 16,
      "INT": 14,
      "WIS": 15,
      "CHA": 18
    },
    "rettungswuerfe": {},
    "fertigkeiten": {
      "Täuschung": 7,
      "Heimlichkeit": 10
    },
    "schadensresistenzen": [
      "Kälte",
      "Wucht-, Stich- und Hiebschaden von nichtsilbernen Angriffen"
    ],
    "schadensimmunitaeten": [
      "Feuer",
      "Gift"
    ],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [
      "Vergiftet"
    ],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 12,
    "sprachen": [
      "Gemeinsprache",
      "Infernal",
      "Telepathie 36 m"
    ],
    "umgebung": [
      "Andere Ebenen",
      "Stadt"
    ],
    "bild": "sonstige/grosser_phantasmalteufel.png",
    "beschreibung": [
      "Phantasmalteufel sind schwer fassbare Unholde, die die Angst vor dem Unbekannten verkörpern und von der Manipulation der Realität und Wahrnehmung leben. Anders als andere Teufel, die auf rohe Kraft oder List setzen, um ihre Feinde zu unterwerfen, spezialisieren sich diese höllischen Wesen darauf, den Verstand ihrer Opfer zu verzerren und sie daran zweifeln zu lassen, was wirklich ist. Phantasmalteufel werden häufig als Spione, Infiltratoren und Peiniger eingesetzt und agieren als Werkzeuge der psychologischen Kriegsführung. Ihre natürliche Fähigkeit, Illusion mit Realität zu verweben, macht sie ungemein gefährlich, selbst wenn sie körperlich nicht einschüchternd wirken. Diese Teufel treiben häufig in den dunklen Höfen der Höllen ihr Unwesen, dienen Erzteufeln oder mächtigen Adeligen und untergraben die Gemüter von Feinden durch Angst und Verwirrung.",
      "Phantasmalteufel sind schmächtige, fast substanzlose Wesen. Ihre geschmeidigen Körper flackern und verschwimmen wie Hitzeflimmern und wirken niemals vollständig fest. Ihre Gesichter sind merkmallos, abgesehen von schwach glühenden Schlitzen, wo ihre Augen sein sollten, und ihre dunklen, schattenhaften Körper scheinen zu verschwimmen und zu verblassen, als existierten sie nur teilweise in der materiellen Welt. Diese flüchtige Natur macht es Angreifern schwer, einen soliden Treffer zu landen, da die Gestalt des Teufels ständig zwischen Schärfe und Unschärfe wechselt. Legenden berichten von Schlachten, in denen ganze Bataillone in die Knie gezwungen wurden – nicht durch Waffengewalt, sondern durch den schieren, desorientierenden Schrecken, den eine kleine Gruppe von Phantasmalteufeln verbreitete.",
      "Diese Teufel gedeihen in Umgebungen, in denen sich Angst leicht ausbreiten kann, und werden oft in sterbliche Reiche gesandt, um Gesellschaften zu infiltrieren und zu zerrütten, weitreichende Paranoia und Misstrauen zu säen. Sie sind Meister darin, unterzutauchen, und nutzen ihre illusorischen Kräfte, um nahezu unsichtbar zu werden – körperlich wie gesellschaftlich. Es ist nicht ungewöhnlich, dass ein Phantasmalteufel die Rolle eines vertrauenswürdigen Beraters annimmt und sein Ziel langsam durch subtile Manipulationen und illusorische Schrecken in den Wahnsinn treibt.",
      "Wenn Phantasmalteufel an Macht gewinnen, entwickeln sie sich zu Großen Phantasmalteufeln – Teufeln von deutlich höherem Rang und Fähigkeit. Der Große Phantasmalteufel ist eine wirkungsvollere Version seiner kleineren Form und verfügt über größere Kontrolle über die Gedanken anderer. Diese Teufel sind nicht nur geschickt darin, Illusionen zu projizieren, sondern können ihre Feinde auch mit psychischen Schlägen kampfunfähig machen und sie für weiteren Schrecken anfällig lassen."
    ],
    "besonderheiten": [
      {
        "name": "Teufelssicht",
        "beschreibung": "Magische Dunkelheit behindert die Dunkelsicht des Großen Phantasmalteufels nicht."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Der Große Phantasmalteufel hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte."
      },
      {
        "name": "Phantasmalhülle",
        "beschreibung": "Kreaturen haben Nachteil auf Angriffswürfe gegen den Großen Phantasmalteufel, solange er nicht kampfunfähig ist. Erleidet der Teufel Schaden, hört dieser Effekt auf zu wirken bis zum Beginn seines nächsten Zuges."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Der Große Phantasmalteufel führt zwei Klauenangriffe und einen Illusionsschlag aus."
      },
      {
        "name": "Klauen",
        "beschreibung": "Nahkampfwaffenangriff: +7, Reichweite 1,5 m, ein Ziel. Treffer: 8 (1W8+4) Hiebschaden."
      },
      {
        "name": "Illusionsschlag",
        "beschreibung": "Nahkampf- oder Fernkampfzauberangriff: +7, Reichweite 1,5 m oder 18 m, ein Ziel. Treffer: 14 (3W6+4) Psychischer Schaden, und das Ziel muss einen INT-Rettungswurf SG 15 bestehen oder ist bis zum Ende seines nächsten Zuges Kampfunfähig."
      },
      {
        "name": "Massenphantasmaillusion (Aufladung 5–6)",
        "beschreibung": "Der Große Phantasmalteufel projiziert eine Massenillusion in die Köpfe von bis zu drei Kreaturen, die er innerhalb von 18 m sehen kann. Jedes Ziel muss einen INT-Rettungswurf SG 15 bestehen oder ist 1 Min. Verängstigt. Während es so verängstigt ist, ist das Ziel zusätzlich verwirrt (wie durch den Zauber Verwirrung). Eine Kreatur kann den Rettungswurf am Ende jedes Zuges wiederholen; bei Erfolg endet der Effekt."
      }
    ],
    "bonusaktionen": [
      {
        "name": "Phantasmalverschiebung (Aufladung 6)",
        "beschreibung": "Der Große Phantasmalteufel erzeugt Spiegelbilder seiner selbst, wie durch den Zauber Spiegelbild."
      },
      {
        "name": "Phantomsprung",
        "beschreibung": "Der Große Phantasmalteufel teleportiert sich bis zu 9 m zu einem unbesetzten Ort, den er sehen kann."
      }
    ],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Sonstige"
  },
  {
    "name": "Kristallwurm",
    "art": "Monstrosität",
    "unterart": null,
    "groesse": "Gigantisch",
    "gesinnung": "Neutral",
    "cr": 24,
    "xp": 62000,
    "rk": 22,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 333,
    "tp_wuerfel": "18W20+144",
    "bewegung": {
      "Gehen": "15 m",
      "Graben": "12 m"
    },
    "attribute": {
      "STR": 25,
      "DEX": 18,
      "CON": 27,
      "INT": 19,
      "WIS": 18,
      "CHA": 17
    },
    "rettungswuerfe": {
      "STR": 14,
      "KON": 15,
      "WEI": 11,
      "INT": 11
    },
    "fertigkeiten": {
      "Athletik": 14
    },
    "schadensresistenzen": [
      "Hieb, Stich und Wucht von nichtmagischen Angriffen",
      "Feuer",
      "Kälte",
      "Blitz"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [
      "Bezaubert",
      "Verängstigt",
      "Gelähmt",
      "Versteinert",
      "Vergiftet",
      "Liegend"
    ],
    "sinne": [
      "Erschütterungssinn 36 m"
    ],
    "passiveWahrnehmung": 14,
    "sprachen": [
      "Terral",
      "Telepathie 63 m"
    ],
    "umgebung": [
      "Höhle",
      "Unterirdisch"
    ],
    "bild": "sonstige/kristallwurm.png",
    "beschreibung": [
      "Kristallwürmer graben sich tief unter die Erde und legen komplexe Höhlennetzwerke an, die ihnen als Heimstatt dienen. Sämtliche Oberflächen in ihrem Hort sind über Jahre der Besiedlung mit Kristallschichten überzogen. Zum Schutz während ausgedehnter Winterruhen umgeben Kristallwürmer ihre Horte mit gefährlich energiegeladenen Kristallbündeln, rasiermesserscharfen Kristallsplittern und dünnen Kristallfäden, die den Wurm alarmieren, wenn sie von ahnungslosen Eindringlingen zerrissen werden.",
      "Ein Kristallwurm kann für die umliegenden Regionen sehr förderlich sein. Natürliche Kristalle wachsen in der Nähe seiner Heimathöhlen in rasendem Tempo und schaffen großen Reichtum. Kristallwürmer kümmern sich gewöhnlich nicht um humanoide Siedlungen, greifen aber alles an, was sie als Bedrohung empfinden. Sie sind hochintelligent, haben jedoch wenig Interesse an der Herrschaft über andere und sind grundsätzlich damit zufrieden, ihre Horte zu schützen. Andere große Monstren wie Drachen dulden sie nicht – diese jagen und töten sie aktiv.",
      "Während manche Kristallwürmer in relativer Eintracht mit nahegelegenen Siedlungen leben, die sie als Beschützer und Versorger betrachten, gibt es auch jene, die sie jagen. Die kristalline Haut der Würmer ist äußerst wertvoll – eine potente Komponente für Zauberwirkung und ein kostbares Material für die Herstellung zauber-ablativer Rüstung. Nur die fähigsten Jäger können einen Kristallwurm zur Strecke bringen, doch der unfassbare Gewinn aus dieser Tat verleitet jedes Jahr viele."
    ],
    "besonderheiten": [
      {
        "name": "Antimagie-Matrix",
        "beschreibung": "Der Kristallwurm besitzt drei Schichten kristalliner Rüstung. Wird er zum Ziel eines schädlichen Zaubers oder erleidet er Schaden durch einen Zauber, würfelt er einen W6. Ist das Ergebnis gleich oder geringer als die Anzahl der noch verbleibenden Rüstungsschichten, bleibt der Zauber wirkungslos."
      },
      {
        "name": "Kristallopfer",
        "beschreibung": "Misslingt dem Kristallwurm ein Rettungswurf, kann er eine Schicht kristalliner Rüstung verlieren, um stattdessen zu bestehen."
      },
      {
        "name": "Tunnelgräber",
        "beschreibung": "Der Kristallwurm kann sich mit halber Grabgeschwindigkeit durch festen Fels graben und hinterlässt dabei einen Tunnel von 3 m Durchmesser."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Der Kristallwurm setzt seinen Kristallisationsstrahl ein, sofern verfügbar. Anschließend greift er dreimal mit Wuchtschlag oder Splitterspucken an; einen dieser Angriffe kann er durch einen Einsatz seines Brennofen-Mauls ersetzen."
      },
      {
        "name": "Wuchtschlag",
        "beschreibung": "Nahkampfangriffswurf: +14, Reichweite 4,5 m, ein Ziel. Treffer: 29 (4W10+7) Stichschaden. Bei einem Treffer muss das Ziel einen KON-Rettungswurf SG 22 bestehen. Misslungen: Es wird Liegend und bis zum Beginn seines nächsten Zuges Betäubt."
      },
      {
        "name": "Kristallisationsstrahl (Aufladung 4–6)",
        "beschreibung": "Die Augen des Kristallwurms glühen weißheiß auf und entladen einen Strahl kristallisierenden Lichts über das Schlachtfeld. Jede Kreatur in einer 3 m breiten, 18 m langen Linie innerhalb von 36 m muss einen STR-Rettungswurf SG 23 bestehen. Misslungen: 39 (6W12) Stichschaden und Festgesetzt (Befreiungs-SG 23), während Kristalle die Kreatur einschließen. Erfolg: halber Schaden, nicht festgesetzt. Festgesetzte Kreaturen können den Rettungswurf am Ende ihres Zuges wiederholen, um sich zu befreien. Zusätzlich wird der gesamte Boden im Wirkungsbereich des Strahls zu schwierigem Gelände."
      },
      {
        "name": "Brennofen-Maul",
        "beschreibung": "Eine Kreatur innerhalb von 3 m vom Kristallwurm muss einen KON-Rettungswurf SG 23 bestehen. Misslungen: 18 (4W8) Wuchtschaden und 16 (3W10) Feuerschaden, und sie wird Festgesetzt, während ihr Körper beginnt sich in Kristall zu verwandeln. Erfolg: halber Schaden, keine Verwandlung. Am Ende jedes Zuges kann eine festgesetzte Kreatur den Rettungswurf wiederholen; bei Erfolg endet der Effekt. Misslingt der Wurf dreimal, wird die Kreatur in Kristall versteinert."
      },
      {
        "name": "Splitterspucken",
        "beschreibung": "Distanzangriffswurf: +14, Reichweite 24 m, ein Ziel. Treffer: 23 (3W10+7) Wuchtschaden, und das Ziel muss einen STR-Rettungswurf SG 22 bestehen oder wird Liegend."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": [
      {
        "name": "Zermalmende Rolle (Kostet 2 Aktionen)",
        "beschreibung": "Der Kristallwurm rollt sich zu einem riesigen Reifen zusammen und rollt über das Schlachtfeld. Er bewegt sich in einer 3 m breiten Linie bis zu 18 m weit und kann sich durch die Räume anderer Kreaturen bewegen. Jede Kreatur auf seinem Weg muss einen GES-Rettungswurf SG 22 bestehen. Misslungen: 4W12 Wuchtschaden und Liegend. Erfolg: halber Schaden."
      },
      {
        "name": "Graben und Brennen",
        "beschreibung": "Der Kristallwurm gräbt sich bis zu 15 m weit und kann sein Brennofen-Maul einsetzen."
      },
      {
        "name": "Splitter spucken",
        "beschreibung": "Der Kristallwurm setzt seinen Splitterspucken-Angriff zweimal ein."
      }
    ],
    "hortaktionen": {
      "beschreibung": "Bei Initiative 20 (Initiative-Gleichstand verliert) setzt der Kristallwurm eine Hortaktion ein, um einen der folgenden Effekte hervorzurufen:",
      "aktionen": [
        "Kristall-Bombe. Kristalle explodieren in einem 6 × 6 m großen Bodenabschnitt, den der Kristallwurm sehen kann. Kreaturen im Bereich müssen einen GES-Rettungswurf SG 18 bestehen oder erleiden 21 (6W6) Stichschaden. Bei Erfolg halber Schaden. Der Bereich wird zu schwierigem Gelände.",
        "Wand. Kristalle wachsen plötzlich in einem für den Kristallwurm sichtbaren Bereich und bilden eine Wand von bis zu 15 m Länge, 4,5 m Höhe und 1,5 m Dicke. Kreaturen im Bereich werden zu einer vom Kristallwurm gewählten Seite der Wand gedrückt. Jeder 3-m-Abschnitt der Wand hat RK 18 und 40 TP.",
        "Splitterregen. Kristalle stürzen von der Decke und treffen Kreaturen unter einem 6-m-Radius. Kreaturen im Bereich müssen einen GES-Rettungswurf SG 18 bestehen. Misslungen: 22 (5W8) Wuchtschaden und Liegend. Erfolg: halber Schaden, nicht liegend."
      ]
    },
    "regionale_effekte": {
      "beschreibung": "Der Hort eines Kristallwurms verändert die umliegende Region durch folgende Effekte:",
      "effekte": [
        "Natürliche Kristalle sind im Umkreis von 16 km um den Hort des Kristallwurms im Überfluss vorhanden.",
        "Der Kristallwurm bemerkt es, wenn eine Kreatur einen Kristall innerhalb von 1,6 km von seinem Hort berührt.",
        "Lokale Siedlungen verehren Kristallwürmer oft, manchmal werden sie sogar als Götter angebetet; sie sind häufig die erste Verteidigungslinie des Wurms."
      ]
    },
    "source": "Sonstige"
  },
  {
    "name": "Kugellager-Golem",
    "art": "Konstrukt",
    "unterart": null,
    "groesse": "Mittelgroß",
    "gesinnung": "Neutral",
    "cr": 3,
    "xp": 700,
    "rk": 15,
    "ruestungstyp": null,
    "tp": 51,
    "tp_wuerfel": "6W8+24",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 12,
      "DEX": 14,
      "CON": 18,
      "INT": 3,
      "WIS": 10,
      "CHA": 1
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [
      "Gift",
      "Psychisch"
    ],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [
      "Bezaubert",
      "Erschöpfung",
      "Verängstigt",
      "Gelähmt",
      "Versteinert",
      "Vergiftet"
    ],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Versteht Gemein und zwei weitere Sprachen, kann aber nicht sprechen"
    ],
    "umgebung": [
      "Stadt",
      "Ruinen"
    ],
    "bild": "sonstige/kugellager-golem.png",
    "beschreibung": [
      "Kugellager-Golems sind täuschend harmlos wirkende Konstrukte, die aus Tausenden winziger Metallkugeln bestehen und gemeinsam eine vage menschliche Gestalt bilden. Diese Golems können Kugellager als Wurfgeschoss einsetzen oder sich vollständig in einen verstreuten Haufen auflösen, um als gewöhnlicher Abfall zu erscheinen. Wenn sie ausgelöst werden, formen sich die Kugellager rasch wieder zusammen und lassen den Golem neu entstehen, um Eindringlinge zu überwältigen.",
      "Bei Diebesgilden, Spionen und geheimnisvollen Magiern beliebt, werden Kugellager-Golems oft eingesetzt, um Wertgegenstände unauffällig zu bewachen oder als Falle zu dienen, die im unerwarteten Moment zuschlägt. Ihre kompakte Natur und die Fähigkeit, als alltägliche Falle zu erscheinen, machen sie ideal für beengte städtische Räume und Tresore."
    ],
    "besonderheiten": [
      {
        "name": "Falsche Erscheinung",
        "beschreibung": "Solange der Golem verstreut ist, ist er von gewöhnlichen Kugellagern nicht zu unterscheiden – es sei denn, eine Kreatur hat gesehen, wie der Golem sich zerstreut hat."
      },
      {
        "name": "Unveränderliche Form",
        "beschreibung": "Der Golem kann seine Gestalt nicht verändern."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Der Golem hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Der Golem führt drei Angriffe aus, wobei er Schlag und Kugellager-Schuss in beliebiger Kombination einsetzen kann."
      },
      {
        "name": "Schlag",
        "beschreibung": "Nahkampfangriffswurf: +4, Reichweite 1,5 m. Treffer: 6 (1W8+2) Wuchtschaden plus 4 (1W8) Kraftschaden."
      },
      {
        "name": "Kugellager-Schuss",
        "beschreibung": "Fernkampfangriffswurf: +4, Reichweite 27 m. Treffer: 6 (1W12) Wuchtschaden plus 4 (1W8) Kraftschaden."
      },
      {
        "name": "Streuschuss (Aufladung 5–6)",
        "beschreibung": "Geschicklichkeitsrettungswurf SG 13 für alle Kreaturen innerhalb von 4,5 m um den Golem. Misslungen: Die Kreatur erleidet 18 (4W8) Wuchtschaden und erhält den Zustand Liegend. Erfolg: Halber Schaden, nicht liegend."
      }
    ],
    "bonusaktionen": [
      {
        "name": "Zerstreuen/Reformieren",
        "beschreibung": "Der Golem kann sich in Kugellager auflösen, die über eine Fläche von 9 m verstreut werden, oder sich wieder zusammensetzen. Solange er zerstreut ist, kann der Golem keine anderen Aktionen als Zerstreuen/Reformieren ausführen. Während er zerstreut ist, hat der Golem Resistenz gegen allen Schaden."
      }
    ],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Sonstige"
  },
  {
    "name": "Moorwinder-Schrecken",
    "art": "Monstrosität",
    "unterart": "Tausendfüßler",
    "groesse": "Gigantisch",
    "gesinnung": "Gesinnungslos",
    "cr": 17,
    "xp": 18000,
    "rk": 21,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 385,
    "tp_wuerfel": "22W20+154",
    "bewegung": {
      "Gehen": "12 m",
      "Graben": "12 m"
    },
    "attribute": {
      "STR": 28,
      "DEX": 14,
      "CON": 24,
      "INT": 4,
      "WIS": 16,
      "CHA": 6
    },
    "rettungswuerfe": {
      "KON": 13,
      "WEI": 9
    },
    "fertigkeiten": {
      "Wahrnehmung": 9,
      "Heimlichkeit": 8
    },
    "schadensresistenzen": [
      "Gift",
      "Wucht und Stich von nichtmagischen Angriffen"
    ],
    "schadensimmunitaeten": [
      "Säure",
      "Gift"
    ],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [
      "Geblendet",
      "Taub",
      "Vergiftet"
    ],
    "sinne": [
      "Blindsicht 18 m",
      "Erschütterungssinn 36 m",
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 19,
    "sprachen": [],
    "umgebung": [
      "Sumpf"
    ],
    "bild": "sonstige/moorwinder-schrecken.png",
    "beschreibung": [
      "Tief im fauligen Herzen des Schwarzmoors, wo das Wasser zäh wie Teer fließt und die Bäume aufrecht verfaulen, sprechen Legenden vom Moorwinder-Schrecken: einer urtümlichen Abscheulichkeit, geboren, als eine alte Yuan-Ti-Abscheulichkeit aufzusteigen versuchte, indem sie ihre Essenz mit dem Sumpf selbst verschmolz.",
      "Das Ritual schlug spektakulär fehl und verschmolz den Schlangenpriester mit unzähligen ertrunkenen Bestien, Tausendfüßler-Schwärmen und den verrottenden Kadavern längst toter Drachen. Was daraus hervortrat, war keine einzelne Kreatur mehr, sondern eine lebende Lawine segmentierten Grauens – sechs massive, gepanzerte Bein-Auswüchse trugen einen bauchigen, von Ranken erstickten Körper, groß wie ein kleiner Hügel, gekrönt von einem Bündel zuschnappender, giftträufelnder Mäuler.",
      "Die Einheimischen nennen ihn die \"Rache des Sumpfes\". Er jagt nicht nach Nahrung – er formt das Land nach seinem Belieben um, gräbt Tunnel, die zu Schlucklöchern einstürzen, spuckt Säure, die Grundwasser vergiftet, und windet sich um alles, was töricht genug ist, seinen Weg zu kreuzen. Dörfer, die einst auf festem Grund standen, sitzen heute auf wandernder Schlammkruste, ihre Fundamente langsam verschluckt. Überlebende eines Zusammentreffens flüstern, der Schrecken habe einen Schwachpunkt – einen leuchtenden, tumorartigen Kern auf seinem zentralen Kopf –, der mit krankhaft grünem Licht pulsiert, wenn die Bestie verkrüppelt ist. Wer ihn zerstört, mag dem Sumpf endlich Ruhe bringen."
    ],
    "besonderheiten": [
      {
        "name": "Legendäre Resistenz (3/Tag)",
        "beschreibung": "Misslingt dem Schrecken ein Rettungswurf, kann er wählen, stattdessen zu bestehen."
      },
      {
        "name": "Sechsfache Fortbewegung",
        "beschreibung": "Der Schrecken bewegt sich auf sechs massiven, segmentierten Bein-Auswüchsen, die aus Flanken und Unterseite ragen. Jedes Bein hat RK 19, 60 TP und ist immun gegen Gift- und psychischen Schaden. Angriffe gezielt gegen ein Bein (vor dem Wurf angekündigt) richten Schaden nur an diesem Bein an und ziehen nichts vom Trefferpunktepool des Schreckens ab. Pro Bein auf 0 TP verliert der Schrecken 3 m Bewegungsweite (alle Arten) und erleidet Nachteil auf GES-Rettungswürfe. Hat er nur noch 3 oder weniger Beine, wird er Liegend und Festgesetzt (Befreiungs-SG 19). In diesem Zustand kann er keine Grab-, Kletter- oder normale Bewegung mehr nutzen und hat Nachteil auf Trefferwürfe. Zu Beginn seines Zuges wachsen zwei zerstörte Beine nach (je 6 m Bewegung zurück, bis zum Maximum). Das Nachwachsen kann für einen Zug verhindert werden, wenn der Schrecken seit seinem letzten Zug mindestens 30 Feuerschaden erlitten hat."
      },
      {
        "name": "Freiliegender Schwachpunkt",
        "beschreibung": "Solange der Schrecken Liegend und Festgesetzt ist (3 oder weniger Beine), wird ein glühender, pulsierender Schwachpunkt auf seiner zentralen Kopfmasse sichtbar. Der Schwachpunkt hat RK 14 und kann separat anvisiert werden. Treffer am Schwachpunkt richten normalen Schaden am TP-Pool an und sind automatisch kritisch, sofern es sich um einen Nahkampfangriff mit Vorteil handelt (z. B. von oben oder per Reichweite). Erleidet der Schwachpunkt 80 oder mehr Schaden aus einer einzelnen Quelle, muss der Schrecken einen KON-Rettungswurf SG 21 bestehen oder ist bis zum Ende seines nächsten Zuges Betäubt."
      },
      {
        "name": "Sumpftarnung",
        "beschreibung": "Der Schrecken hat Vorteil auf GES(Heimlichkeit)-Proben in sumpfigem oder wässrigem Gelände."
      },
      {
        "name": "Grab-Umformer",
        "beschreibung": "Sooft der Schrecken 6 m oder mehr in gerader Linie durch Erde oder Sumpfboden gräbt, kollabiert der Grabungspfad (3 m breit) zu schwierigem Gelände, durchsetzt von scharfen Wurzeln und Schlucklöchern. Am Ende des Pfads erhebt sich ein 4,5-m-Radius Hügel aus aufgewühlter Erde (Drei-Viertel-Deckung für Kreaturen dahinter). Jede Kreatur, die den Pfad betritt oder ihren Zug auf einem Schluckloch beginnt (zufälliges 3-m-Feld entlang des Pfads), muss einen GES-Rettungswurf SG 17 bestehen oder erleidet 11 (2W10) Stichschaden durch einstürzenden Morast und ist bis zum Ende ihres nächsten Zuges Festgesetzt."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Der Schrecken führt so viele Biss- oder Klauen-Angriffe aus, wie er verbleibende Beine hat (bis zu sechs)."
      },
      {
        "name": "Biss",
        "beschreibung": "Nahkampfangriffswurf: +15, Reichweite 4,5 m, ein Ziel. Treffer: 32 (5W8+9) Stichschaden plus 18 (4W8) Giftschaden. Ist das Ziel eine Kreatur, muss es einen KON-Rettungswurf SG 21 bestehen oder ist 1 Min. Vergiftet. Eine vergiftete Kreatur kann den Wurf am Ende jedes Zuges wiederholen; bei Erfolg endet der Effekt."
      },
      {
        "name": "Klaue",
        "beschreibung": "Nahkampfangriffswurf: +15, Reichweite 6 m, ein Ziel. Treffer: 28 (4W8+9) Hiebschaden. Ist das Ziel Mittelgroß oder kleiner, wird es Gepackt (Befreiungs-SG 19). Solange das Greifen anhält, kann der Schrecken diese Klaue nicht gegen ein anderes Ziel einsetzen."
      },
      {
        "name": "Unterirdischer Angriff (Aufladung 5–6)",
        "beschreibung": "Der Schrecken gräbt sich heftig bis zu 24 m in gerader Linie durch Erde oder Sumpfboden (Gelände umgeformt wie bei Grab-Umformer) und hinterlässt eine sichtbare Spur aus aufgewölbter Erde und Erschütterungen. Er verschwindet untertage bis zum Ende der laufenden Runde (Initiative 0). In diesem Moment bricht er an einem Punkt seiner Wahl entlang oder neben dem Pfad hervor. Jede Kreatur innerhalb von 6 m des Auftauchpunkts muss einen GES-Rettungswurf SG 21 bestehen oder erleidet 66 (12W10) Wuchtschaden und ist Liegend; bei Erfolg halber Schaden, nicht liegend. Kreaturen mit Überleben-Übung haben Vorteil auf diesen Wurf, da sie die Erschütterungen lesen und die Austrittsstelle vorhersehen können."
      },
      {
        "name": "Säurespeien (Aufladung 6)",
        "beschreibung": "Der Schrecken speit einen 18-m-Kegel ätzender Galle. Jede Kreatur im Bereich muss einen GES-Rettungswurf SG 21 bestehen; misslungen: 70 (20W6) Säureschaden; erfolgreich: halber Schaden. Der Bereich wird zu schwierigem Gelände und jede Kreatur, die ihn betritt oder dort ihren Zug beginnt, erleidet 22 (4W10) Säureschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": [
      {
        "name": "Klaue (Kostet 1 Aktion)",
        "beschreibung": "Der Schrecken führt einen Klauen-Angriff aus."
      },
      {
        "name": "Grabungspeitsche (Kostet 2 Aktionen)",
        "beschreibung": "Der Schrecken gräbt sich teilweise 6 m auf eine Kreatur innerhalb von 18 m zu (Gelände umgeformt wie bei Grab-Umformer). Das Ziel muss einen GES-Rettungswurf SG 21 bestehen oder erleidet 36 (6W10+9) Wuchtschaden und wird 6 m zum Schrecken hin gezogen."
      },
      {
        "name": "Regenerationsschub (Kostet 3 Aktionen)",
        "beschreibung": "Der Schrecken lässt sofort zwei zerstörte Beine nachwachsen (keine Feuerschaden-Einschränkung in diesem Zug)."
      }
    ],
    "hortaktionen": {
      "beschreibung": "Bei Initiative 20 setzt der Moorwinder-Schrecken in seinem Hort \"Herz des Schwarzmoors\" – einem 90 m breiten Krater aus schwarzem Wasser und saugendem Schlamm im tiefsten Teil des Schwarzmoors – eine der folgenden Hortaktionen ein. Sicht ist durch ewigen Nebel und Sporenwolken nie weiter als 18 m. Der Boden ist dauerhaft schwieriges Gelände (halbe Bewegung außer bei Fliegen oder Schwimmen), und zufällige 3-m-Felder sind Treibsand (STR-Rettungswurf SG 15 oder versinken und Festgesetzt, Wiederholung pro Zug).",
      "aktionen": [
        "Schlucklocheruption. Ein 6-m-Radius-Bereich innerhalb von 36 m kollabiert. Kreaturen im Bereich GES-RW SG 18 oder stürzen 6 m in den Schlamm (Liegend, Festgesetzt, 2W6 Wuchtschaden). Befreiung: STR(Athletik)-Probe SG 16.",
        "Erschütterungswelle. Der Boden bebt in 18 m Radius um den Schrecken. Kreaturen am Boden STR-RW SG 18 oder Liegend und 14 (4W6) Wuchtschaden.",
        "Gift-Miasma. Toxische Sporen füllen einen 12-m-Radius um den Schrecken bis zur nächsten Hortaktion. Kreaturen, die ihren Zug im Bereich beginnen, erleiden 14 (4W6) Giftschaden und müssen KON-RW SG 18 bestehen oder sind 1 Min. Vergiftet."
      ]
    },
    "source": "Sonstige"
  },
  {
    "name": "Niederträchtiger Aasfresser",
    "art": "Aberration",
    "unterart": null,
    "groesse": "Klein",
    "gesinnung": "Neutral böse",
    "cr": 0.25,
    "xp": 50,
    "rk": 13,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 11,
    "tp_wuerfel": "2W6+4",
    "bewegung": {
      "Gehen": "9 m",
      "Graben": "9 m"
    },
    "attribute": {
      "STR": 6,
      "DEX": 14,
      "CON": 14,
      "INT": 3,
      "WIS": 12,
      "CHA": 5
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [
      "Gift"
    ],
    "verwundbarkeiten": [
      "Feuer"
    ],
    "zustandsimmunitaeten": [
      "Vergiftet"
    ],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 15,
    "sprachen": [],
    "umgebung": [
      "Sumpf",
      "Ruinen"
    ],
    "bild": "sonstige/niedertraechtiger_aasfresser.png",
    "beschreibung": [
      "Der Niederträchtige Aasfresser ähnelt einem grotesken Insekt, angeschwollen durch Verfall – ein Aaskäfer, verformt durch die Berührung der Korruption. Sein chitinöses Panzer ist gerissen und verklebt, trieft von schleimigem, dunklem Eiter, der auf den Boden darunter tropft. Unter seinem schweren Panzer pulsieren durchscheinende Segmente schwach und geben Einblicke in die darin gärende Fäulnis. Seine Mundwerkzeuge sind gezackt und zucken ununterbrochen, mahlen selbst dann, wenn keine Beute in Sicht ist."
    ],
    "besonderheiten": [
      {
        "name": "Aasfresser",
        "beschreibung": "Der Niederträchtige Aasfresser kann jede verstorbene organische Materie verzehren. Zu Beginn seines Zuges, wenn er sich innerhalb von 1,5 m einer Leiche befindet, regeneriert er Trefferpunkte in Höhe des Ergebnisses eines der Trefferwürfel der Leiche. Hat die Leiche keine Trefferwürfel mehr, wird sie vollständig verschlungen und der Aasfresser regeneriert Trefferpunkte in Höhe des Maximalergebnisses eines der höchsten Trefferwürfel der Leiche. Wird eine Leiche auf diese Weise vollständig verschlungen, wird das umliegende Gebiet (3-m-Radius) zu korruptem Schlick-Gelände."
      },
      {
        "name": "Schlickspur",
        "beschreibung": "Wo immer der Niederträchtige Aasfresser den Schlick ausweitet, hinterlässt er in seinem nächsten Zug beim Bewegen eine 1,5 m breite Schlickspur. Bis zum Beginn des nächsten Zuges des Aasfressers müssen Nicht-Schlick-Kreaturen oder verwundete Kreaturen, die die Spur betreten, einen KON-Rettungswurf SG 12 bestehen oder 3 (1W6) Nekrotischen Schaden erleiden."
      },
      {
        "name": "Korruptionsinstinkt",
        "beschreibung": "Der Aasfresser hat Vorteil auf WIS(Wahrnehmung)- und WIS(Überleben)-Würfe zum Aufspüren von Leichen, verwundeten Kreaturen oder korruptem Gelände. Er bewegt sich stets auf den nächsten organischen Geruch zu, sofern er nicht anderweitig befehligt wird."
      }
    ],
    "aktionen": [
      {
        "name": "Biss",
        "beschreibung": "Nahkampfwaffenangriff: +4, Reichweite 1,5 m, ein Ziel. Treffer: 5 (1W6+2) Stichschaden plus 2 (1W4) Giftschaden. Das Ziel muss einen KON-Rettungswurf SG 12 bestehen oder erleidet nach 1W4 Tagen einen zufälligen Effekt aus der Schlick-Korruptionstabelle."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Sonstige"
  },
  {
    "name": "Rasierhornhirschkuh [Erwachsen]",
    "art": "Monstrosität",
    "unterart": "Titan",
    "groesse": "Riesig",
    "gesinnung": "Neutral",
    "cr": 9,
    "xp": 5000,
    "rk": 18,
    "ruestungstyp": null,
    "tp": 173,
    "tp_wuerfel": "15W12+75",
    "bewegung": {
      "Gehen": "15 m"
    },
    "attribute": {
      "STR": 23,
      "DEX": 12,
      "CON": 20,
      "INT": 3,
      "WIS": 14,
      "CHA": 6
    },
    "rettungswuerfe": {
      "STR": 10,
      "KON": 9
    },
    "fertigkeiten": {
      "Athletik": 10,
      "Wahrnehmung": 6
    },
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 16,
    "sprachen": [],
    "umgebung": [
      "Ebene"
    ],
    "bild": "sonstige/rasierhornhirschkuh_erwachsen.png",
    "beschreibung": [
      "Bemerkenswerter Loot: Rasierhornvitae, Blattschuppe, Rubinwildbret, Bernsteinelfenbein, Veldt-Stampferhufe."
    ],
    "besonderheiten": [
      {
        "name": "Wegbahner",
        "beschreibung": "Das Rasierhorn verursacht doppelten Schaden an Objekten und Bauwerken. Außerdem kostet schwieriges Gelände aus nichtmagischen Pflanzen keine zusätzliche Bewegung."
      },
      {
        "name": "Blutresonanz",
        "beschreibung": "Solange das Rasierhorn Blutend ist (86 Trefferpunkte oder weniger), reagieren seine biomineral-Geweihe auf den Anstieg der Titan-Vitae. Seine Nahkampfwaffenangriffe erzielen bei einem W20-Wurf von 19 oder 20 einen kritischen Treffer."
      },
      {
        "name": "Trampelnder Ansturm",
        "beschreibung": "Bewegt sich das Rasierhorn mindestens 6 m geradewegs auf eine Kreatur zu und trifft sie im selben Zug mit einem Hufe-Angriff, muss das Ziel einen STR-Rettungswurf SG 18 bestehen oder wird zu Boden geworfen (Liegend)."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Das Rasierhorn führt zwei Geweihschwung-Angriffe aus. Einen davon kann es durch einen Hufe-Angriff ersetzen."
      },
      {
        "name": "Geweihschwung",
        "beschreibung": "Nahkampfwaffenangriff: +10, Reichweite 3 m, ein Ziel. Treffer: 28 (4W10+6) Hiebschaden. Ist das Ziel eine Kreatur, muss es einen STR-Rettungswurf SG 18 bestehen oder wird bis zu 3 m weggestoßen oder zu Boden geworfen (Liegend)."
      },
      {
        "name": "Hufe",
        "beschreibung": "Nahkampfwaffenangriff: +10, Reichweite 1,5 m, ein Ziel. Treffer: 22 (3W10+6) Wuchtschaden."
      },
      {
        "name": "Mähender Sturmangriff (Aufladung 5–6)",
        "beschreibung": "Das Rasierhorn senkt seinen Kopf und bewegt sich bis zu seiner vollen Bewegungsgeschwindigkeit in einer geraden Linie, ohne Gelegenheitsangriffe auszulösen. Während dieser Bewegung kann es durch die Felder von Kreaturen kleiner als Riesig hindurchbewegen. Jede Kreatur, deren Feld das Rasierhorn zum ersten Mal in einem Zug betritt, muss einen GES-Rettungswurf SG 18 ablegen. Misslungen: 44 (8W10) Hiebschaden und 3 m zur Seite des Weges gestoßen und zu Boden geworfen (Liegend). Erfolg: Halber Schaden und gestoßen, fällt aber nicht hin."
      }
    ],
    "bonusaktionen": [
      {
        "name": "Stampfen",
        "beschreibung": "Das Rasierhorn führt einen Hufe-Angriff gegen eine Liegende Kreatur innerhalb von 1,5 m aus."
      }
    ],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Sonstige"
  },
  {
    "name": "Schwarzherz-Golem",
    "art": "Konstrukt",
    "unterart": null,
    "groesse": "Mittelgroß",
    "gesinnung": "Neutral",
    "cr": 4,
    "xp": 1100,
    "rk": 16,
    "ruestungstyp": null,
    "tp": 85,
    "tp_wuerfel": "10W8+40",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 18,
      "DEX": 12,
      "CON": 18,
      "INT": 6,
      "WIS": 10,
      "CHA": 1
    },
    "rettungswuerfe": {},
    "fertigkeiten": {
      "Heimlichkeit": 5
    },
    "schadensresistenzen": [],
    "schadensimmunitaeten": [
      "Gift",
      "Psychisch"
    ],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [
      "Bezaubert",
      "Erschöpfung",
      "Verängstigt",
      "Gelähmt",
      "Versteinert",
      "Vergiftet"
    ],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Versteht Gemein und zwei weitere Sprachen, kann aber nicht sprechen"
    ],
    "umgebung": [
      "Ruinen"
    ],
    "bild": "sonstige/schwarzherz-golem.png",
    "beschreibung": [
      "Schwarzherz-Golems sind humanoide Konstrukte von etwa 1,80 m Größe, gefertigt aus glattem, glänzendem schwarzem Stein. Ihre Körper sind gesichtslos – ohne Merkmale, Markierungen oder sichtbare Gelenke. Licht scheint auf ihrer Oberfläche zu erlöschen und zu verblassen, was ihnen selbst unter hellen Bedingungen ein schattenhaftes Aussehen verleiht. Wenn sie sich bewegen, tun sie dies mit langsamer, bedächtiger Präzision – ihre Schritte trotz ihres beträchtlichen Gewichts lautlos.",
      "Diese Konstrukte wurden von einer längst untergegangenen Zivilisation erschaffen, die sie als Arbeiter, Wächter und Kriegswaffen einsetzte. Diese Zivilisation war einst durch uralte Pakte an eine Erzfee gebunden und diente ihr, strebte jedoch schließlich danach, sich von ihrem Einfluss zu befreien. Die Golems wurden eigens erschaffen, um den Feenwesen entgegenzuwirken.",
      "Die Energiequelle eines Schwarzherz-Golems ist ein kristallisiertes Menschenherz, das durch ein Opferritual geschwärzt wurde. Humanoide wurden während des Rituals getötet, ihre Herzen in dichte, arkane Kristalle verwandelt und im Kern des Golems versiegelt. Diese Herzen liefern sowohl die belebende Kraft als auch die begrenzte Entscheidungsfähigkeit des Konstrukts und ermöglichen es ihm, komplexe Befehle auszuführen.",
      "Trotz ihres Einsatzes wurde die Zivilisation zerstört – entweder direkt durch die Erzfee oder als Folge der Verwüstungen, die dem Konflikt folgten. Die Golems jedoch überdauerten. Ohne Herren geblieben, verharren sie dort, wo sie zuletzt stationiert waren – in Ruinen, wo sie weiterhin ihre letzten Befehle ausführen, ohne zu hinterfragen, obwohl ihre Aufträge durch die Zeit längst entstellt wurden."
    ],
    "besonderheiten": [
      {
        "name": "Feenbann",
        "beschreibung": "Der Golem hat Vorteil auf Angriffswürfe gegen Feenwesen. Der Golem hat außerdem Vorteil auf Rettungswürfe gegen Effekte, die von Feenwesen verursacht werden."
      },
      {
        "name": "Unveränderliche Form",
        "beschreibung": "Der Golem kann seine Gestalt nicht verändern."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Der Golem hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Der Golem führt zwei Schlagangriffe aus."
      },
      {
        "name": "Schlag",
        "beschreibung": "Nahkampfangriffswurf: +6, Reichweite 1,5 m. Treffer: 8 (1W8+4) Wuchtschaden plus 4 (1W8) Nekrotischer Schaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Sonstige"
  },
  {
    "name": "Sumpf-Golem",
    "art": "Konstrukt",
    "unterart": null,
    "groesse": "Groß",
    "gesinnung": "Neutral",
    "cr": 7,
    "xp": 2900,
    "rk": 16,
    "ruestungstyp": null,
    "tp": 123,
    "tp_wuerfel": "13W10+52",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 20,
      "DEX": 8,
      "CON": 18,
      "INT": 3,
      "WIS": 10,
      "CHA": 1
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [
      "Feuer",
      "Gift",
      "Psychisch"
    ],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [
      "Bezaubert",
      "Erschöpfung",
      "Verängstigt",
      "Gelähmt",
      "Versteinert",
      "Vergiftet"
    ],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Versteht Gemein und zwei weitere Sprachen, kann aber nicht sprechen"
    ],
    "umgebung": [
      "Sumpf"
    ],
    "bild": "sonstige/sumpf-golem.png",
    "beschreibung": [
      "Anders als die meisten Golems sind Sumpf-Golems oft ebenso sehr das Ergebnis natürlicher Kräfte wie bewusster Erschaffung. Geformt aus dem verworrenen Morast aus verwesendem Pflanzenmaterial, Knochen, Schlamm und Ranken, werden diese Golems von Sumpfgeistern oder elementaren Kräften belebt, die an die Feuchtgebiete gebunden sind. Druiden, Hexenzirkel und ursprüngliche Schamanen können solche Wächter erschaffen, um heilige Lichtungen zu schützen oder Eindringlinge von verbotenen Moorruinen fernzuhalten.",
      "Manche Sumpf-Golems entstehen ohne jede Absicht – die verbleibenden Energien des Sumpfes verdichten sich zu massigen Gestalten, die danach trachten, die Wildnis zu bewahren und Eindringlinge zu vernichten. Sie schlurfen durch die Moore, hinterlassen eine Spur aus Fäulnis, Ranken und triefendem Schmutz, schlagen mit wuchtigen Gliedmaßen zu und ziehen Feinde in den Schlamm."
    ],
    "besonderheiten": [
      {
        "name": "Unveränderliche Form",
        "beschreibung": "Der Golem kann seine Gestalt nicht verändern."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Der Golem hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Der Golem führt zwei Angriffe aus, wobei er Schlag und Kraftstoß in beliebiger Kombination einsetzen kann."
      },
      {
        "name": "Schlag",
        "beschreibung": "Nahkampfangriffswurf: +8, Reichweite 1,5 m. Treffer: 14 (2W8+5) Wuchtschaden plus 4 (1W8) Kraftschaden."
      },
      {
        "name": "Kraftstoß",
        "beschreibung": "Fernkampfangriffswurf: +7, Reichweite 27 m. Treffer: 11 (2W10) Kraftschaden."
      },
      {
        "name": "Rankenwelle (Aufladung 5–6)",
        "beschreibung": "Der Golem wirkt den Zauber Rankenwelle, ohne Zauberkomponenten zu benötigen, und verwendet Konstitution als Zauberfähigkeit (Zauber-SG 15). Eine Welle dorniger Ranken ergießt sich in einem 18-m-Kegel über das Gebiet. Jede Kreatur im Bereich muss einen GES-Rettungswurf SG 15 bestehen oder erleidet 8W8 Stichschaden und wird 1 Min. Gepackt (Befreiungs-SG 15). Eine gepackte Kreatur erleidet zu Beginn ihres Zuges 2W4 Stichschaden. Bei Erfolg halber Schaden, nicht gepackt. Konzentration bis zu 10 Min."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Sonstige"
  },
  {
    "name": "Terroregel",
    "art": "Aberration",
    "unterart": null,
    "groesse": "Riesig",
    "gesinnung": "Chaotisch böse",
    "cr": 16,
    "xp": 15000,
    "rk": 18,
    "ruestungstyp": null,
    "tp": 300,
    "tp_wuerfel": "24W12+144",
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "24 m"
    },
    "attribute": {
      "STR": 26,
      "DEX": 16,
      "CON": 22,
      "INT": 14,
      "WIS": 15,
      "CHA": 8
    },
    "rettungswuerfe": {
      "STR": 13,
      "GES": 8,
      "KON": 11,
      "INT": 4,
      "WEI": 7
    },
    "fertigkeiten": {
      "Wahrnehmung": 7
    },
    "schadensresistenzen": [
      "Nekrotisch"
    ],
    "schadensimmunitaeten": [
      "Psychisch"
    ],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [
      "Bezaubert",
      "Verängstigt"
    ],
    "sinne": [
      "Dunkelsicht 72 m"
    ],
    "passiveWahrnehmung": 17,
    "sprachen": [
      "Versteht Tiefensprache, kann aber nicht sprechen",
      "Telepathie 36 m"
    ],
    "umgebung": [
      "Gebirge",
      "Andere Ebenen"
    ],
    "bild": "sonstige/terroregel.png",
    "beschreibung": [
      "Fliegende Aberrationen, die ganze Regionen terrorisieren. Lebensraum: Gebirge, Planar (Ferner Bereich). Schatz: Relikt.",
      "Der Terroregel ist eine gewaltige Kreatur mit zwei Paaren knorriger Flügel, einem langen, sich windenden Körper wie ein Blutegel mit einem blutegelähnlichen Kopf ohne Augen und einer Masse scharfer Zähne. Sein Schwanz ist flach, mit Stacheln bedeckt und mit grausamen Stachelklauen ausgestattet. Die Körper sind schwarz, mit Abschnitten aus blassem, vernarbtem und verbranntem Fleisch. Sie wirken wie ungeschickte Flieger – besitzen aber eine trügerische Schnelligkeit.",
      "Terroregel sind einheimisch im Fernen Bereich, was ihr fremdes und Entsetzen einflößendes Aussehen erklärt. Sie haben sich jedoch in die Materielle Ebene und den Schattenbereich ausgebreitet. Diese Kreaturen verursachen durch ihre bloße Natur Schrecken – sie strahlen eine Aura der Angst aus und ernähren sich vom Terror, den sie erzeugen.",
      "Diese Kreaturen sind intelligent und genießen es, Schrecken und Zerstörung zu verbreiten. Der Terroregel ist in der Lage, die Lebenskraft der Kreaturen um sich herum zu verbrauchen und schöpft Freude daran, die Angst zu konsumieren, die er in anderen auslöst.",
      "Der Terroregel braucht keinen Schlaf – er fliegt endlos über Länder und sucht Beute für seinen Geist und seinen Körper.",
      "Kampftaktiken: Der Terroregel ist ein brutaler Kämpfer, der in den Nahkampf taucht, mit Angriffen zuschlägt und dann durch Davonfliegen am Ende seines Zuges flieht. Er versucht, stets innerhalb von 4,5 m von möglichst vielen feindlichen Kreaturen zu bleiben, um möglichst viele zu Terrorisieren und zu Schreien zu bringen, und bietet so viele Möglichkeiten für Lebensverbrauch und Festmahl der Angst. Der Terroregel nutzt immer seinen Biss-Angriff, wenn eine Kreatur in Reichweite ist. Befinden sich Kreaturen außerhalb der Reichweite, setzt er seinen Klauenangriff ein; er tauscht seinen anderen Angriff gegen Terrorisieren aus, es sei denn, es gibt nur eine Kreatur in Reichweite. Misslingt ein Angriff eines Beutezugs, setzt er Festmahl der Angst gegen diese Kreatur ein. Ist der Terroregel nicht bei vollen Trefferpunkten, setzt er zuerst Lebensverbrauch (Legendäre Aktion), dann Schreien ein, gefolgt von Klauenhieb. Der Terroregel schätzt seine fortwährende Existenz und flieht, wenn er auf 60 Trefferpunkte oder weniger reduziert wird."
    ],
    "besonderheiten": [
      {
        "name": "Legendäre Resistenz (3/Tag)",
        "beschreibung": "Misslingt dem Terroregel ein Rettungswurf, kann er wählen, stattdessen zu bestehen."
      }
    ],
    "aktionen": [
      {
        "name": "Multiattacke",
        "beschreibung": "Der Terroregel führt drei Angriffe durch, von denen nur einer ein Biss sein kann. Er kann einen Angriff durch Terrorisieren ersetzen."
      },
      {
        "name": "Biss",
        "beschreibung": "Nahkampfangriffswurf: +13, Reichweite 1,5 m. Treffer: 21 (2W12+8) Stichschaden plus 9 (2W8) Psychischer Schaden."
      },
      {
        "name": "Klaue",
        "beschreibung": "Nahkampfangriffswurf: +13, Reichweite 4,5 m. Treffer: 17 (2W8+8) Hiebschaden."
      },
      {
        "name": "Terrorisieren",
        "beschreibung": "Weisheitsrettungswurf SG 19: Jede Kreatur in einer 9-m-Emanation, die vom Terroregel ausgeht. Misslungen: 14 (4W6) Psychischer Schaden, und das Ziel hat den Zustand Verängstigt bis zum Ende des nächsten Zuges des Terroregels. Erfolg: Nur halber Schaden."
      }
    ],
    "bonusaktionen": [
      {
        "name": "Festmahl der Angst",
        "beschreibung": "Nahkampfangriffswurf gegen eine Kreatur mit dem Zustand Verängstigt in Reichweite: +13, Reichweite 4,5 m. Treffer: 18 (4W8) Psychischer Schaden."
      }
    ],
    "reaktionen": [],
    "legendaere_aktionen": [
      {
        "name": "Lebensverbrauch",
        "beschreibung": "Konstitutionsrettungswurf SG 19: Eine Kreatur nach Wahl des Terroregels innerhalb von 4,5 m. Misslungen: 18 (2W8) + 9 Nekrotischer Schaden; der Terroregel erhält Trefferpunkte in Höhe des Schadens zurück. Erfolg: Halber Schaden, keine Heilung. Der Terroregel kann diese Aktion nicht erneut einsetzen, bis zu Beginn seines nächsten Zuges."
      },
      {
        "name": "Schreien",
        "beschreibung": "Konstitutionsrettungswurf SG 19: Jede Kreatur in einer 18-m-Emanation. Misslungen: 18 (4W8) Donnerschaden, und das Ziel hat den Zustand Taubheit bis zum Ende des nächsten Zuges des Terroregels. Erfolg: Nur halber Schaden. Der Terroregel kann diese Aktion nicht erneut einsetzen, bis zu Beginn seines nächsten Zuges."
      },
      {
        "name": "Klauenhieb",
        "beschreibung": "Der Terroregel führt einen Klauenhieb-Angriff durch."
      }
    ],
    "source": "Sonstige"
  },
  {
    "name": "Ulmorrak, der Gekrönte Leviathan",
    "art": "Drache",
    "unterart": null,
    "groesse": "Gigantisch",
    "gesinnung": "Chaotisch neutral",
    "cr": 28,
    "xp": 120000,
    "rk": 22,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 700,
    "tp_wuerfel": "34W20+340",
    "bewegung": {
      "Gehen": "18 m",
      "Schwimmen": "36 m"
    },
    "attribute": {
      "STR": 30,
      "DEX": 12,
      "CON": 30,
      "INT": 18,
      "WIS": 22,
      "CHA": 22
    },
    "rettungswuerfe": {
      "STR": 18,
      "KON": 18,
      "WEI": 14
    },
    "fertigkeiten": {
      "Motiv erkennen": 14,
      "Wahrnehmung": 14
    },
    "schadensresistenzen": [
      "Blitz",
      "Hieb, Stich und Wucht von nichtmagischen Angriffen"
    ],
    "schadensimmunitaeten": [
      "Kälte",
      "Gift"
    ],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [
      "Bezaubert",
      "Verängstigt",
      "Vergiftet",
      "Liegend"
    ],
    "sinne": [
      "Wahres Sehen 36 m"
    ],
    "passiveWahrnehmung": 24,
    "sprachen": [
      "Gemeinsprache",
      "Drakonisch",
      "Aqual"
    ],
    "umgebung": [
      "Tiefe See",
      "Küste"
    ],
    "bild": "sonstige/ulmorrak_der_gekroente_leviathan.png",
    "beschreibung": [
      "Wenn Fischer nur noch tote Fische einholen und die See sich trügerisch ruhig zeigt, erwartet jene, die sich aufs offene Wasser hinauswagen, nichts Gutes.",
      "Denn bald darauf werden die Unterwasserströmungen stärker, und aggressive Strudel, die selbst die größten Schiffe in die Tiefe reißen können, beginnen sich zu bilden. Ein gewaltiger Regensturm zieht über die Küste, türmt Wellen so hoch, dass sie den Horizont verschleiern, und macht jedes Hinausfahren oder Heimkehren beinahe unmöglich.",
      "Die Einheimischen sprechen von einer uralten Kreatur, die dafür verantwortlich sei – einem Wesen aus Legenden, das sie nur als den Zorn des Ozeans kennen.",
      "Vielen anderen ist er als Ulmorrak bekannt, ein urzeitlicher Leviathan, der in den Tiefen des Meeres haust, solange sie zurückdenken können. Wo immer er sich bewegt, folgen ihm tobende Meere, die alles verschlingen, was sich in seinen Weg stellt. Er schlummert in den lichtlosen Abgründen der tiefsten Ozeane, und Sichtungen in Küstennähe sind so selten, dass sie meist als bloße Seemannsmärchen abgetan werden."
    ],
    "besonderheiten": [
      {
        "name": "Reichweite des Leviathans",
        "beschreibung": "Ulmorrak beginnt den Kampf mit vier massiven Tentakeln, die jeweils einen Raum innerhalb von 36 m um ihn herum einnehmen. Jeder Tentakel handelt in Ulmorraks Zug und führt einen Tentakelschlag-Angriff aus. Sie teilen seine Schadensresistenzen und -immunitäten, sind immun gegen psychischen Schaden, haben 120 TP und RK 19. Sie können nicht geheilt werden. Ulmorrak erleidet 25 % weniger Schaden pro lebendem Tentakel (Start: 100 %); jeder zerstörte Tentakel senkt die Reduktion entsprechend. Wird ein Tentakel zerstört, entfesselt Ulmorrak zu Beginn seines nächsten Zuges als freie Aktion 'Flut des Abgrunds'. Jede weitere Anwendung steigert die Intensität je nach Zahl zerstörter Tentakel."
      },
      {
        "name": "Zermalmender Druck",
        "beschreibung": "Kreaturen, die ihren Zug Gepackt oder Festgesetzt durch Ulmorrak oder seine Tentakel beginnen, erleiden zu Beginn ihres Zuges automatisch 21 (6W6) Wuchtschaden."
      },
      {
        "name": "Legendäre Resistenz (4/Tag)",
        "beschreibung": "Misslingt Ulmorrak ein Rettungswurf, kann er wählen, stattdessen zu bestehen."
      },
      {
        "name": "Herr der Tiefe",
        "beschreibung": "Ulmorrak kann unter Wasser atmen und ignoriert schwieriges Gelände, das durch Wasser, Korallen, Schlick oder magische Wassereffekte entsteht. Er sendet beunruhigende Sonar-Pulse aus; Kreaturen innerhalb von 18 m haben Nachteil auf Wahrnehmungsproben (Weisheit), die sich aufs Gehör verlassen."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Ulmorrak hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Ulmorrak führt drei Angriffe aus: einen Biss und zwei Tentakelschläge. Jeder seiner vier Tentakel führt in seinem Zug zusätzlich einen Tentakelschlag-Angriff aus."
      },
      {
        "name": "Biss",
        "beschreibung": "Nahkampfangriffswurf: +18, Reichweite 3 m, ein Ziel. Treffer: 32 (4W10+10) Stichschaden plus 10 (3W6) Kälteschaden. Bei Treffer muss das Ziel einen KON-Rettungswurf SG 22 bestehen oder seine Bewegungsweite sinkt auf 0 bis zum Ende seines nächsten Zuges."
      },
      {
        "name": "Tentakelschlag",
        "beschreibung": "Nahkampfangriffswurf: +18, Reichweite 4,5 m, ein Ziel. Treffer: 23 (3W8+10) Wuchtschaden. Ist das Ziel Groß oder kleiner, muss es einen GES-Rettungswurf SG 22 bestehen oder wird Gepackt (Befreiungs-SG 20)."
      },
      {
        "name": "Atemwaffe (Aufladung 5–6)",
        "beschreibung": "Ulmorrak atmet zerstörerische Energie auf eine von zwei Arten aus. Salzflut: 27 m lange, 3 m breite Linie. Jede Kreatur in der Linie muss einen GES-Rettungswurf SG 23 bestehen; misslungen: 60 (12W10) Kälteschaden und Liegend; erfolgreich: halber Schaden, nicht liegend. Abyssaler Schrei: konkussiver Schallpuls in einem 18-m-Kegel. Jede Kreatur muss einen KON-Rettungswurf SG 23 bestehen; misslungen: 45 (10W8) Donnerschaden und 1 Min. Taub (Rettungswurf beendet); erfolgreich: halber Schaden, nicht taub."
      },
      {
        "name": "Zermalmender Sturz",
        "beschreibung": "Ulmorrak windet einen Tentakel um eine gepackte Kreatur und schmettert sie mit monströser Kraft nach unten, bevor er sie beiseite schleudert. Diese Aktion ersetzt den Tentakelschlag-Angriff. Das Ziel muss einen KON-Rettungswurf SG 22 bestehen. Misslungen: 36 (8W8) Wuchtschaden, 1 Min. Betäubt und nicht mehr gepackt. Die Kreatur kann den Wurf am Ende jedes Zuges wiederholen; bei Erfolg endet der Effekt. Erfolg: halber Schaden, Betäubt bis zum Ende des nächsten Zuges und nicht mehr gepackt."
      },
      {
        "name": "Flut des Abgrunds",
        "beschreibung": "Wenn ein Tentakel zerstört wird (sonst nicht einsetzbar), ruft Ulmorrak den Zorn der Tiefe herbei. Zu Beginn seines nächsten Zuges bricht ein Mahlstrom aus schwarzem Wasser und wirbelndem Treibgut in einem 36-m-Radius um ihn aus. Kreaturen im Bereich müssen einen GES-Rettungswurf SG 24 bestehen oder erleiden skalierten Wucht- + Kälteschaden und werden 4,5 m zu ihm gezogen. Der Bereich ist bis zum Ende von Ulmorraks nächstem Zug stark verhüllt. Schaden je nach zerstörten Tentakeln: 1 zerstört → 16 (3W10) Wucht + 16 (3W10) Kälte; 2 zerstört → 27 (5W10) + 27 (5W10); 3 zerstört → 38 (7W10) + 38 (7W10); 4 zerstört → 55 (10W10) + 55 (10W10)."
      }
    ],
    "bonusaktionen": [
      {
        "name": "Abyssales Untertauchen",
        "beschreibung": "Ulmorraks massive Tentakel tauchen unter die Meeresoberfläche und brechen Augenblicke später aus der Tiefe hervor. Jeder aktive Tentakel taucht ab und erscheint an unbesetzten Punkten auf der Wasseroberfläche innerhalb von 18 m seines ursprünglichen Standorts wieder, jedoch nicht weiter als 36 m von Ulmorrak entfernt. Die Bewegung erfolgt durch Wasser und löst keine Gelegenheitsangriffe aus."
      }
    ],
    "reaktionen": [],
    "legendaere_aktionen": [
      {
        "name": "Angriff",
        "beschreibung": "Ulmorrak führt einen Tentakelschlag-Angriff aus."
      },
      {
        "name": "Abyssaler Schwall (Kostet 2 Aktionen)",
        "beschreibung": "Ulmorrak verdrängt Ozeanwasser in einer 9-m-Linie. Jede Kreatur in der Linie muss einen GES-Rettungswurf SG 22 bestehen oder erleidet 27 (6W8) Wuchtschaden, wird Liegend und 6 m zurückgestoßen."
      },
      {
        "name": "Ertränken in Stille (Kostet 3 Aktionen)",
        "beschreibung": "Ulmorrak stößt einen tiefen Sonar-Stoß aus. Eine Kreatur seiner Wahl innerhalb von 18 m muss einen WEI-Rettungswurf SG 22 bestehen oder erleidet 36 (8W8) Psychischer Schaden und ist bis zum Ende ihres nächsten Zuges Taub, Verstummt und Verängstigt."
      }
    ],
    "regionale_effekte": {
      "beschreibung": "Die Region um Ulmorraks Hort wird durch folgende Effekte verändert:",
      "effekte": [
        "Schreckensgezeiten: Meeresströmungen fließen in unnatürlichen Mustern. Schiffe im betroffenen Gebiet haben halbierte Geschwindigkeit, und Überlebenskunde-Proben (Weisheit) zum Navigieren oder Steuern eines Schiffes erfolgen mit Nachteil. Zusätzlich müssen Kreaturen, die länger als 1 Min. unter Wasser sind, einen WEI-Rettungswurf SG 18 bestehen oder erlangen eine Stufe Erschöpfung, während ein urtümliches Grauen sie überkommt.",
        "Ertränkte Küste: Befindet sich Ulmorrak innerhalb von 1,6 km einer Küstenlinie, fluten gewaltige Wellen und unnatürliche Gezeiten bis zu 90 m landeinwärts. Das Gebiet wird durch Nebel leicht verhüllt, nichtmagische Flammen erlöschen und der Boden wird zu schwierigem Gelände. Gebäude ächzen unter dem Druck der ansteigenden Brandung, und Küstenreisen werden gefährlich.",
        "Das Meer hungert: Stirbt eine Kreatur im offenen Wasser innerhalb von 9,6 km um Ulmorrak, reagiert der Ozean heftig. Schwärme räuberischen Meereslebens überfallen den Körper binnen Sekunden und verschlingen ihn. Leichen werden binnen einer einzigen Runde zu unkenntlichen Überresten reduziert. Solche Leichen können nur durch den Zauber Wunsch wiederbelebt werden."
      ]
    },
    "source": "Sonstige"
  },
  {
    "name": "Wurzelvater-Koloss",
    "art": "Pflanze",
    "unterart": null,
    "groesse": "Riesig",
    "gesinnung": "Gesinnungslos",
    "cr": 11,
    "xp": 7200,
    "rk": 17,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 210,
    "tp_wuerfel": "20W12+80",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 22,
      "DEX": 8,
      "CON": 18,
      "INT": 6,
      "WIS": 14,
      "CHA": 10
    },
    "rettungswuerfe": {
      "KON": 9,
      "WEI": 7
    },
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Wucht und Stich von nichtmagischen Angriffen"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [
      "Feuer"
    ],
    "zustandsimmunitaeten": [
      "Geblendet",
      "Bezaubert",
      "Taub",
      "Verängstigt",
      "Liegend"
    ],
    "sinne": [
      "Blindsicht 18 m (darüber hinaus blind)"
    ],
    "passiveWahrnehmung": 12,
    "sprachen": [
      "Versteht Gemein und Sylvanisch, kann aber nicht sprechen"
    ],
    "umgebung": [
      "Wald"
    ],
    "bild": "sonstige/wurzelvater-koloss.png",
    "beschreibung": [],
    "besonderheiten": [
      {
        "name": "Waldschreiter",
        "beschreibung": "Der Koloss ignoriert schwieriges Gelände aus Pflanzen und Unterholz. Pflanzengelände innerhalb von 9 m um ihn herum wird zu schwierigem Gelände."
      },
      {
        "name": "Wurzel-Netzwerk",
        "beschreibung": "Solange der Koloss den Boden berührt, kann er nicht zu Boden geworfen werden und hat Vorteil auf STR-Proben sowie STR-Rettungswürfe."
      },
      {
        "name": "Belagerungsmonster",
        "beschreibung": "Der Koloss verursacht doppelten Schaden an Objekten und Strukturen."
      },
      {
        "name": "Tiefenwurzel-Erneuerung",
        "beschreibung": "Solange sich der Koloss in natürlichem Gelände befindet, zieht er Lebenskraft aus dem Boden und erlangt 20 Trefferpunkte zurück. Erleidet der Koloss Feuerschaden, wirkt dieses Merkmal zu Beginn seines nächsten Zuges nicht. Der Koloss stirbt nur dann, wenn er seinen Zug mit 0 Trefferpunkten beginnt und sich nicht regeneriert."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Der Koloss führt zwei Schlag-Angriffe aus."
      },
      {
        "name": "Schlag",
        "beschreibung": "Nahkampfangriffswurf: +11, Reichweite 4,5 m, ein Ziel. Treffer: 18 (2W10+6) Wuchtschaden plus 7 (2W6) Stichschaden durch splitternde Wurzeln."
      },
      {
        "name": "Greifende Wurzeln (Aufladung 5–6)",
        "beschreibung": "Wurzeln brechen in einem 6-m-Radius um einen Punkt aus dem Boden, den der Koloss innerhalb von 18 m sehen kann. Das Gebiet wird zu schwierigem Gelände. Jede Kreatur im Bereich muss einen STR-Rettungswurf SG 17 bestehen oder wird Festgesetzt. Eine festgesetzte Kreatur kann ihre Aktion einsetzen, um eine STR-Probe SG 17 abzulegen und sich bei Erfolg zu befreien. Die Wurzeln verwelken nach 1 Min. oder wenn der Koloss stirbt."
      },
      {
        "name": "Holzwurf (3/Tag)",
        "beschreibung": "Der Koloss reißt einen massiven Ast los und schleudert ihn. Distanzangriffswurf: +11, Reichweite 18/54 m, ein Ziel. Treffer: 21 (3W10+6) Wuchtschaden. Kreaturen innerhalb von 3 m vom Ziel müssen einen GES-Rettungswurf SG 17 bestehen oder erleiden 10 (3W6) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Sonstige"
  },
  {
    "name": "Zaruun, der Zwillingsschatten des Schleiers (Geistform)",
    "art": "Drache",
    "unterart": null,
    "groesse": "Gigantisch",
    "gesinnung": "Chaotisch neutral",
    "cr": 30,
    "xp": 155000,
    "rk": 23,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 574,
    "tp_wuerfel": "28W20+280",
    "bewegung": {
      "Fliegen": "36 m (schwebend)"
    },
    "attribute": {
      "STR": 29,
      "DEX": 20,
      "CON": 30,
      "INT": 24,
      "WIS": 29,
      "CHA": 26
    },
    "rettungswuerfe": {
      "STR": 18,
      "KON": 19,
      "WEI": 18
    },
    "fertigkeiten": {
      "Motiv erkennen": 18,
      "Wahrnehmung": 18
    },
    "schadensresistenzen": [
      "Kälte",
      "Feuer",
      "Wucht",
      "Blitz"
    ],
    "schadensimmunitaeten": [
      "Gift",
      "Hieb, Stich und Wucht von nichtmagischen Angriffen"
    ],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [
      "Bezaubert",
      "Verängstigt",
      "Gelähmt",
      "Versteinert",
      "Vergiftet"
    ],
    "sinne": [
      "Wahres Sehen 36 m"
    ],
    "passiveWahrnehmung": 28,
    "sprachen": [
      "Alle Sprachen",
      "Telepathie 36 m"
    ],
    "umgebung": [
      "Andere Ebenen"
    ],
    "bild": "sonstige/zaruun_zwillingsschatten_geistform.png",
    "beschreibung": [
      "Zaruun existiert gleichzeitig auf der Materiellen und der Ätherischen Ebene und manifestiert sich in zwei miteinander verbundenen Formen: seiner Materiellen Form und seiner Geistform. Beide Formen handeln unabhängig voneinander und teilen sich keine Initiative. Die Geistform kann nicht direkt mit der Materiellen Form oder deren Ebene interagieren und umgekehrt.",
      "Diese Statblock-Beschreibung repräsentiert ausschließlich die Geistform Zaruuns. Die Materielle Form ist eine eigenständige Kreatur mit eigenem Eintrag."
    ],
    "besonderheiten": [
      {
        "name": "Zwillings-Existenz",
        "beschreibung": "Zaruun kann nicht getötet werden, sofern nicht beide Formen in derselben Runde auf 0 Trefferpunkte reduziert werden. Wird nur eine Form auf 0 TP reduziert und die andere bleibt vor Beginn ihres nächsten Zuges unangetastet, steigen die TP jeder Form zu Beginn ihres Zuges auf 100. Hatte die überlebende Form zu diesem Zeitpunkt bereits mehr als 100 TP, bleiben diese unverändert."
      },
      {
        "name": "Echos des Schleiers",
        "beschreibung": "Zaruuns Doppel-Präsenz erzeugt Echos über beide Ebenen hinweg. Misslingt einer von Zaruuns Formen ein Rettungswurf, erhält die andere Form Vorteil auf denselben Rettungswurf bis zum Ende ihres nächsten Zuges."
      },
      {
        "name": "Legendäre Resistenz (4/Tag)",
        "beschreibung": "Misslingt Zaruun ein Rettungswurf, kann er wählen, stattdessen zu bestehen."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Zaruun hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte."
      },
      {
        "name": "Phasen-Herrschaft",
        "beschreibung": "Einige von Zaruuns Fähigkeiten können eine Kreatur zwischen der Materiellen und der Ätherischen Ebene zwangsweise verschieben. Eine so verschobene Kreatur wird auf die jeweils andere Ebene transportiert. Sie kann nicht mit Kreaturen auf ihrer vorherigen Ebene interagieren oder von diesen ins Visier genommen werden, sofern nicht anders angegeben. Wird eine Kreatur auf eine Ebene verschoben, auf der Zaruuns andere Form präsent ist, kann diese Form normal mit ihr interagieren – ebenso wie die Kreaturen jener Ebene."
      },
      {
        "name": "Schleierriss",
        "beschreibung": "Erleidet eine von Zaruuns Formen in einem einzigen Zug mehr als 20 Schaden, reißt in einem freien Raum innerhalb von 9 m ein Spalt zwischen den Ebenen auf. Der Spalt erscheint als schimmerndes Portal aus violettem und silbernem Licht, verbindet die Materielle und die Ätherische Ebene und ist auf beiden Ebenen sichtbar. Der Spalt hält bis zum Beginn des nächsten Zuges der jeweiligen Form, oder bis er genutzt wird. Eine einzelne Kreatur außer Zaruun kann den Spalt betreten, um auf die andere Ebene verschoben zu werden. Maximal 3 Spalte können gleichzeitig vorhanden sein."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Zaruun führt drei Angriffe aus: einen Biss-Angriff und zwei Klauen-Angriffe."
      },
      {
        "name": "Biss",
        "beschreibung": "Nahkampfangriffswurf: +18, Reichweite 4,5 m, ein Ziel. Treffer: 27 (4W8+9) Stichschaden plus 14 (4W6) Wuchtschaden (Force). Das Ziel muss einen WEI-Rettungswurf SG 26 bestehen oder wird zwangsweise auf die jeweils andere Ebene verschoben (siehe Phasen-Herrschaft)."
      },
      {
        "name": "Klauen",
        "beschreibung": "Nahkampfangriffswurf: +18, Reichweite 3 m, ein Ziel. Treffer: 18 (4W6+9) Hiebschaden plus 14 (4W6) Blitzschaden. Bei Treffer springt ein Blitz vom Ziel zu einer weiteren Kreatur von Zaruuns Wahl innerhalb von 6 m. Diese Kreatur muss einen GES-Rettungswurf SG 22 bestehen oder erleidet 14 (4W6) Blitzschaden (halb bei Erfolg)."
      },
      {
        "name": "Atemwaffe – Essenzriss (Aufladung 5–6)",
        "beschreibung": "Zaruun stößt einen Puls harmonischer Kraft in einem 18-m-Kegel aus. Jede Kreatur im Bereich muss einen WEI-Rettungswurf SG 26 bestehen oder erleidet 66 (12W10) Wuchtschaden (Force) (halb bei Erfolg). Bei misslungenem Wurf wird die Kreatur zusätzlich durch Phasen-Herrschaft betroffen und auf die Materielle Ebene transportiert."
      },
      {
        "name": "Schleiersturm-Zerschmetterung (1/Tag)",
        "beschreibung": "Beide Formen Zaruuns müssen ihre Aktion in derselben Runde einsetzen, um diese Fähigkeit auszulösen. Der Effekt wird unmittelbar nach Aktionsabschluss der zweiten Form entfesselt. Zaruun zerreißt die Grenze zwischen den Ebenen und entfesselt einen Sturm roher planarer Energie; der Himmel über beiden Ebenen splittert wie ein Spiegel, geisterhafte Stürme toben und verzerren Zeit und Raum. Zerschmetternder Stoß: Alle Kreaturen nach Zaruuns Wahl innerhalb von 3,2 km um eine seiner Formen müssen einen GES-RW SG 24 und einen CHA-RW SG 24 ablegen. Misslungener GES-RW: 67 (15W8) Blitzschaden und 1 Min. Geblendet (Wurf am Ende jedes Zuges wiederholbar, Erfolg beendet Effekt); Erfolg: halber Schaden, nicht geblendet. Misslungener CHA-RW: Die Kreatur wird auf die andere Ebene verschoben und ist bis zum Ende ihres nächsten Zuges Betäubt. Ebenen-Überlappung: Für 1 Min. wird die betroffene Region eine Schleiersturm-Zone und beide Ebenen überlappen sich teilweise. Alle Kreaturen werden am Ende jedes Zuges auf die jeweils andere Ebene verschoben. Der Bereich innerhalb von 36 m um eine seiner Formen wird auf beiden Ebenen stark verhüllt und zu schwierigem Gelände. Kann eine Form die Aktion nicht abschließen (z. B. Betäubt oder Kampfunfähig), versagt die Fähigkeit."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [
      {
        "name": "Ätherische Versetzung",
        "beschreibung": "Wird Zaruun von einem Angriff innerhalb von 36 m ins Visier genommen, kann er den Angreifer zwingen, einen CHA-Rettungswurf SG 22 zu bestehen oder sofort auf die jeweils andere Ebene verschoben zu werden (Phasen-Herrschaft gilt). Bei misslungenem Wurf wird der Angriff dabei unterbrochen."
      }
    ],
    "legendaere_aktionen": [
      {
        "name": "Hieb",
        "beschreibung": "Zaruun führt einen Klauen- oder Biss-Angriff aus."
      },
      {
        "name": "Schleiertritt (Kostet 2 Aktionen)",
        "beschreibung": "Zaruun gleitet durch einen Spalt im Schleier. Er teleportiert sich bis zu 36 m weit zu einem freien Raum, den er sehen kann."
      },
      {
        "name": "Riss-Implosion (Kostet 3 Aktionen)",
        "beschreibung": "Zaruun nimmt bis zu zwei Kreaturen innerhalb von 18 m ins Visier, die er sehen kann. Jede muss einen KON-Rettungswurf SG 26 bestehen oder erleidet 36 (8W8) Wuchtschaden (Force) und wird in einen seiner durch Schleierriss erzeugten planaren Spalte gezogen (sofern aktive Spalte vorhanden sind)."
      }
    ],
    "source": "Sonstige"
  },
  {
    "name": "Zaruun, der Zwillingsschatten des Schleiers (Materielle Form)",
    "art": "Drache",
    "unterart": null,
    "groesse": "Gigantisch",
    "gesinnung": "Chaotisch neutral",
    "cr": 30,
    "xp": 155000,
    "rk": 23,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 574,
    "tp_wuerfel": "28W20+280",
    "bewegung": {
      "Fliegen": "36 m (schwebend)"
    },
    "attribute": {
      "STR": 29,
      "DEX": 20,
      "CON": 30,
      "INT": 24,
      "WIS": 29,
      "CHA": 26
    },
    "rettungswuerfe": {
      "STR": 18,
      "KON": 19,
      "WEI": 18
    },
    "fertigkeiten": {
      "Motiv erkennen": 18,
      "Wahrnehmung": 18
    },
    "schadensresistenzen": [
      "Kälte",
      "Feuer",
      "Nekrotisch",
      "Hieb, Stich und Wucht von nichtmagischen Angriffen"
    ],
    "schadensimmunitaeten": [
      "Blitz",
      "Gift"
    ],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [
      "Bezaubert",
      "Verängstigt",
      "Gelähmt",
      "Versteinert",
      "Vergiftet"
    ],
    "sinne": [
      "Wahres Sehen 36 m"
    ],
    "passiveWahrnehmung": 28,
    "sprachen": [
      "Alle Sprachen",
      "Telepathie 36 m"
    ],
    "umgebung": [
      "Andere Ebenen"
    ],
    "bild": "sonstige/zaruun_zwillingsschatten_materiell.png",
    "beschreibung": [
      "Zaruun existiert gleichzeitig auf der Materiellen und der Ätherischen Ebene und manifestiert sich in zwei miteinander verbundenen Formen: seiner Materiellen Form und seiner Geistform. Beide Formen handeln unabhängig voneinander und teilen sich keine Initiative. Die Materielle Form kann nicht direkt mit der Ätherischen Form oder deren Ebene interagieren und umgekehrt.",
      "Diese Statblock-Beschreibung repräsentiert ausschließlich die Materielle Form Zaruuns. Die Geistform ist eine eigenständige Kreatur mit eigenem Eintrag."
    ],
    "besonderheiten": [
      {
        "name": "Zwillings-Existenz",
        "beschreibung": "Zaruun kann nicht getötet werden, sofern nicht beide Formen in derselben Runde auf 0 Trefferpunkte reduziert werden. Wird nur eine Form auf 0 TP reduziert und die andere bleibt vor Beginn ihres nächsten Zuges unangetastet, steigen die TP jeder Form zu Beginn ihres Zuges auf 100. Hatte die überlebende Form zu diesem Zeitpunkt bereits mehr als 100 TP, bleiben diese unverändert."
      },
      {
        "name": "Echos des Schleiers",
        "beschreibung": "Zaruuns Doppel-Präsenz erzeugt Echos über beide Ebenen hinweg. Misslingt einer von Zaruuns Formen ein Rettungswurf, erhält die andere Form Vorteil auf denselben Rettungswurf bis zum Ende ihres nächsten Zuges."
      },
      {
        "name": "Legendäre Resistenz (4/Tag)",
        "beschreibung": "Misslingt Zaruun ein Rettungswurf, kann er wählen, stattdessen zu bestehen."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Zaruun hat Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte."
      },
      {
        "name": "Phasen-Herrschaft",
        "beschreibung": "Einige von Zaruuns Fähigkeiten können eine Kreatur zwischen der Materiellen und der Ätherischen Ebene zwangsweise verschieben. Eine so verschobene Kreatur wird auf die jeweils andere Ebene transportiert. Sie kann nicht mit Kreaturen auf ihrer vorherigen Ebene interagieren oder von diesen ins Visier genommen werden, sofern nicht anders angegeben. Wird eine Kreatur auf eine Ebene verschoben, auf der Zaruuns andere Form präsent ist, kann diese Form normal mit ihr interagieren – ebenso wie die Kreaturen jener Ebene."
      },
      {
        "name": "Schleierriss",
        "beschreibung": "Erleidet eine von Zaruuns Formen in einem einzigen Zug mehr als 20 Schaden, reißt in einem freien Raum innerhalb von 9 m ein Spalt zwischen den Ebenen auf. Der Spalt erscheint als schimmerndes Portal aus violettem und silbernem Licht, verbindet die Materielle und die Ätherische Ebene und ist auf beiden Ebenen sichtbar. Der Spalt hält bis zum Beginn des nächsten Zuges der jeweiligen Form, oder bis er genutzt wird. Eine einzelne Kreatur außer Zaruun kann den Spalt betreten, um auf die andere Ebene verschoben zu werden. Maximal 3 Spalte können gleichzeitig vorhanden sein."
      }
    ],
    "aktionen": [
      {
        "name": "Mehrfachangriff",
        "beschreibung": "Zaruun führt drei Angriffe aus: einen Biss-Angriff und zwei Klauen-Angriffe."
      },
      {
        "name": "Biss",
        "beschreibung": "Nahkampfangriffswurf: +18, Reichweite 4,5 m, ein Ziel. Treffer: 27 (4W8+9) Stichschaden plus 14 (4W6) Nekrotischer Schaden. Das Ziel muss einen WEI-Rettungswurf SG 26 bestehen oder wird zwangsweise auf die jeweils andere Ebene verschoben (siehe Phasen-Herrschaft)."
      },
      {
        "name": "Klauen",
        "beschreibung": "Nahkampfangriffswurf: +18, Reichweite 3 m, ein Ziel. Treffer: 18 (4W6+9) Hiebschaden plus 14 (4W6) Blitzschaden. Bei Treffer springt ein Blitz vom Ziel zu einer weiteren Kreatur von Zaruuns Wahl innerhalb von 6 m. Diese Kreatur muss einen GES-Rettungswurf SG 22 bestehen oder erleidet 14 (4W6) Blitzschaden (halb bei Erfolg)."
      },
      {
        "name": "Atemwaffe – Leerenriss (Aufladung 5–6)",
        "beschreibung": "Zaruun atmet einen Schwall schattenhafter Energie in einem 18-m-Kegel aus. Jede Kreatur im Bereich muss einen KON-Rettungswurf SG 26 bestehen oder erleidet 66 (12W10) Nekrotischer Schaden (halb bei Erfolg). Bei misslungenem Wurf wird die Kreatur zusätzlich durch Phasen-Herrschaft betroffen und auf die Ätherische Ebene transportiert."
      },
      {
        "name": "Schleiersturm-Zerschmetterung (1/Tag)",
        "beschreibung": "Beide Formen Zaruuns müssen ihre Aktion in derselben Runde einsetzen, um diese Fähigkeit auszulösen. Der Effekt wird unmittelbar nach Aktionsabschluss der zweiten Form entfesselt. Zaruun zerreißt die Grenze zwischen den Ebenen und entfesselt einen Sturm roher planarer Energie; der Himmel über beiden Ebenen splittert wie ein Spiegel, geisterhafte Stürme toben und verzerren Zeit und Raum. Zerschmetternder Stoß: Alle Kreaturen nach Zaruuns Wahl innerhalb von 3,2 km um eine seiner Formen müssen einen GES-RW SG 24 und einen CHA-RW SG 24 ablegen. Misslungener GES-RW: 67 (15W8) Blitzschaden und 1 Min. Geblendet (Wurf am Ende jedes Zuges wiederholbar, Erfolg beendet Effekt); Erfolg: halber Schaden, nicht geblendet. Misslungener CHA-RW: Die Kreatur wird auf die andere Ebene verschoben und ist bis zum Ende ihres nächsten Zuges Betäubt. Ebenen-Überlappung: Für 1 Min. wird die betroffene Region eine Schleiersturm-Zone und beide Ebenen überlappen sich teilweise. Alle Kreaturen werden am Ende jedes Zuges auf die jeweils andere Ebene verschoben. Der Bereich innerhalb von 36 m um eine seiner Formen wird auf beiden Ebenen stark verhüllt und zu schwierigem Gelände. Kann eine Form die Aktion nicht abschließen (z. B. Betäubt oder Kampfunfähig), versagt die Fähigkeit."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [
      {
        "name": "Ätherische Versetzung",
        "beschreibung": "Wird Zaruun von einem Angriff innerhalb von 36 m ins Visier genommen, kann er den Angreifer zwingen, einen CHA-Rettungswurf SG 22 zu bestehen oder sofort auf die jeweils andere Ebene verschoben zu werden (Phasen-Herrschaft gilt). Bei misslungenem Wurf wird der Angriff dabei unterbrochen."
      }
    ],
    "legendaere_aktionen": [
      {
        "name": "Hieb",
        "beschreibung": "Zaruun führt einen Klauen- oder Biss-Angriff aus."
      },
      {
        "name": "Schleiertritt (Kostet 2 Aktionen)",
        "beschreibung": "Zaruun gleitet durch einen Spalt im Schleier. Er teleportiert sich bis zu 36 m weit zu einem freien Raum, den er sehen kann."
      },
      {
        "name": "Riss-Implosion (Kostet 3 Aktionen)",
        "beschreibung": "Zaruun nimmt bis zu zwei Kreaturen innerhalb von 18 m ins Visier, die er sehen kann. Jede muss einen KON-Rettungswurf SG 26 bestehen oder erleidet 36 (8W8) Wuchtschaden und wird in einen seiner durch Schleierriss erzeugten planaren Spalte gezogen (sofern aktive Spalte vorhanden sind)."
      }
    ],
    "regionale_effekte": {
      "beschreibung": "Die Region um Zaruuns Präsenz wird durch folgende Effekte verändert:",
      "effekte": [
        "Blutender Schleier: Gelegentlich öffnen sich schimmernde Spalte in der Luft, die Blicke auf die Ätherische Ebene gewähren. Kreaturen, die in der Region eine lange Rast abschließen, müssen einen WEI-Rettungswurf SG 15 bestehen oder erlangen 1 Stufe Erschöpfung, da sie von phantomhaftem Flüstern und flackernden Visionen heimgesucht werden.",
        "Geladene Himmel: Dunkle Wolken hüllen den Himmel beständig ein. Im Kampf in der Region wird am Ende jeder Runde 1W6 gewürfelt. Bei einer 6 wird eine zufällige Kreatur im Freien von ätherischem Blitz getroffen und erleidet 11 (2W10) Blitzschaden."
      ]
    },
    "source": "Sonstige"
  }
];
