// Strukturierte Rassenwerte für NSC-Statblöcke (Größe, Bewegung, Sinne, Resistenzen, Sprachen, Attributsboni).
// Einmalig aus den Rassentexten (rassen/*.js) gezogen und danach von Hand gepflegt – Quelle der Wahrheit für "Rasse anwenden".
// attribute: { STR|DEX|CON|INT|WIS|CHA: Zahl } oder { ALLE: Zahl }; varianten = Blutlinien/Ahnenlinien mit eigenen Boni.
// varianten[x].resistenzen/attribute gelten zusätzlich zu den Werten der Rasse.
// sprachen: null = nicht hinterlegt (Standard: Gemeinsprache). pruefen: Hinweise für die Durchsicht.
window.RASSEN_STRUKTUR = {
  "Aarakocra": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": [
      "Gemeinsprache",
      "eine weitere Sprache nach Wahl"
    ],
    "attribute": {
      "DEX": 2,
      "WIS": 1
    },
    "merkmale": [
      {
        "name": "Flug",
        "text": "Die Kreatur hat Flügel, daher entspricht ihre Flugbewegungsrate ihrer Schrittbewegungsrate. Die Kreatur kann ihre Flugbewegungsrate nicht benutzen, wenn sie mittelschwere oder schwere Rüstung trägt."
      },
      {
        "name": "Krallen",
        "text": "Die Kreatur hat Krallen, mit denen sie waffenlose Angriffe ausführen kann. Wenn sie mit ihnen trifft, bewirkt der Treffer 1W6 + ihren Stärkemodifikator an Hiebschaden statt des üblichen Wuchtschadens."
      },
      {
        "name": "Windrufer",
        "text": "Ab der 3. Stufe kann sie mit diesem Merkmal den Zauber Windstoß wirken, ohne Materialkomponenten zu benötigen. Wenn sie den Zauber mit diesem Merkmal wirkt, kann sie ihn erst nach einer langen Rast erneut wirken. Die Kreatur kann den Zauber auch mit einem beliebigen verfügbaren Zauberplatz 2. oder höheren Grades wirken. Ihr Attribut zum Wirken von Windstoß ist Intelligenz, Weisheit oder Charisma — wähle das Attribut aus, wenn sie dieses Volk auswählt."
      }
    ],
    "talente": [
      "Wächter der Winde",
      "Aarakocra-Elementarmagie",
      "Kormorani"
    ],
    "talentTexte": {
      "Wächter der Winde": {
        "text": "Die Kreatur ist in Weisheit (Wahrnehmung) geübt. Wenn sie bereits geübt ist, erhält sie Expertise. Die Kreatur ist geübt im Umgang mit Speeren, Wurfspeeren und Netzen. Gelegenheitsangriffe, die gegen sie in der Luft ausgeführt werden, sind im Nachteil. Hat der Gegner einen Vorteil gegen sie, gleicht sich dies aus und der Angriff wird normal ausgeführt. Wenn sie fliegt und mindestens 3 Meter auf ein Ziel zustürzt (mindestens 3 Meter ihrer Bewegungsrate müssen zum Verringern ihrer Höhe genutzt werden), bevor sie es mit einer Nahkampfwaffe trifft, verursacht der Angriff zusätzlichen Waffenschaden in Höhe ihres Übungsbonus."
      },
      "Aarakocra-Elementarmagie": {
        "text": "Die Kreatur erlernt den Zaubertrick Windbö. Die Kreatur hat die Wahl zwischen dem Zauber Dolchwolke, dem Zauber Staubteufel und dem Zauber Schutzwind. Die Kreatur lernt den gewählten Zauber und kann ihn einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Intelligenz, Weisheit oder Charisma ist ihre Zauberfertigkeit für diese Zaubersprüche. Wähle das Attribut, wenn sie dieses Talent wählt. Wenn sie einen Angriffswurf macht und trifft, kann sie einen Windstoß auf das Ziel richten und es zwingen, bis zu 1,5 Meter von sich weggestoßen zu werden. Ein großes oder größeres Wesen oder Objekt ist davon nicht betroffen."
      },
      "Kormorani": {
        "text": "Die Kreatur erhält die Eigenschaft amphibisch — sie kann sowohl in der Luft als auch im Wasser normal atmen. Die Kreatur erlernt den Zaubertrick Wasser formen sowie den Zauber Wasser erschaffen oder zerstören. Die Kreatur kann Wasser erschaffen oder zerstören einmal ohne Zauberplatz wirken; nach einer langen Rast kann sie dies erneut tun. Intelligenz, Weisheit oder Charisma sind ihre Attribute für diese Zaubersprüche (Wahl beim Erlernen des Talents). Die Kreatur erhält eine Schwimmbewegungsrate, die ihrer Flugbewegungsrate entspricht."
      }
    }
  },
  "Aasimar": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Nekrotisch",
      "Strahlend"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CHA": 2,
      "WIS": 1
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Celestische Resistenz",
        "text": "Die Kreatur ist gegen nekrotischen und gleißenden Schaden resistent."
      },
      {
        "name": "Heilende Hände",
        "text": "Als Aktion kann sie eine Kreatur berühren und Würfel in Höhe ihres Übungsbonus werfen (W4). Die Kreatur gewinnt Trefferpunkte zurück. Einmal pro langer Rast."
      },
      {
        "name": "Lichtträger",
        "text": "Die Kreatur kennt den Zaubertrick Licht. Ihr Attribut zum Zauberwirken ist Charisma."
      },
      {
        "name": "Celestische Offenbarung",
        "text": "Wähle eine Option. Als Bonusaktion entfesselt sie die celestische Energie für bis zu 1 Minute. Gleißende Seele: Geisterflügel wachsen ihr. Die Kreatur erhält Flugbewegungsrate und kann einmal pro Zug zusätzlich gleißenden Schaden (= Übungsbonus) wirken. Gleißendes Verzehren: Intensives Licht aus Augen und Mund. Erhellt 3 m. Kreaturen in 3 m erleiden am Ende jedes ihrer Züge gleißenden Schaden (= Übungsbonus). Nekrotische Spukgestalt: Augen werden zu Tümpeln der Finsternis. Nahe Feinde müssen Charismarettungswurf bestehen oder sind verängstigt. Zusätzlich nekrotischer Schaden (= Übungsbonus).",
        "stufe": 3
      }
    ],
    "talente": [
      "Göttlicher Krieger",
      "Verbesserte Celestische Offenbarung",
      "Göttliche Gesundheit"
    ],
    "talentTexte": {
      "Göttlicher Krieger": {
        "text": "Wähle einen Zaubertrick aus der Liste der Klerikerzauber. Die Kreatur lernt den gewählten Zauber. Die Kreatur wählt einen Zauber der ersten Stufe und einen Zauber der zweiten Stufe aus der Liste der Kleriker- oder Paladinzauber. Die Kreatur lernt die gewählten Zauber und kann sie einmal pro lange Rast auf ihrer niedrigsten Stufe wirken, ohne einen Zauberplatz zu verbrauchen. Intelligenz, Weisheit oder Charisma sind die Attribute für diese Zauber. Wähle eines aus, wenn sie dieses Talent wählt."
      },
      "Verbesserte Celestische Offenbarung": {
        "text": "Die Kreatur erhält eine zusätzliche Nutzung ihrer Fähigkeit Celestische Offenbarung, die sie nach einer langen Rast wiedererlangt. Während sie sich durch ihre Eigenschaft Celestische Offenbarung verwandelt, wird gleißender Schaden oder nekrotischer Schaden, den sie mit dieser Eigenschaft verursacht, verdoppelt. Wenn sie ihre Eigenschaft Celestische Offenbarung einsetzt, erhält sie je nach gewählter Offenbarung die folgenden Vorteile: Nekrotische Spukgestalt: Ihre Eigenschaft Nekrotische Spukgestalt betäubt nun Kreaturen, die den Schutzwurf nicht bestehen, bis zum Ende ihres nächsten Zuges. Gleißendes Verzehren: Sie kann wählen, welche Kreaturen am Ende jeder ihrer Runden gleißenden Schaden erleiden. Gleißende Seele: Zu Beginn ihrer Züge kann sie eine Kreatur im Umkreis von 3 m um Trefferpunkte in Höhe ihres Übungsbonus heilen."
      },
      "Göttliche Gesundheit": {
        "text": "Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie dieses Talent erlangt. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Die Kreatur wird immun gegen Krankheiten. Die Kreatur wird resistent gegen Giftschaden und erhält einen Vorteil bei Rettungswürfen gegen Vergiftungen.",
        "wirkung": {
          "tpProTW": 1
        }
      }
    }
  },
  "Alraunen": {
    "kreaturentyp": null,
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Blindsicht 9 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CON": 2,
      "WIS": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Heilende Präsenz",
        "text": "Verbündete in 9 m um die Kreatur erhalten bei einer kurzen Rast für jeden ausgegebenen Trefferwurf zusätzlich 1W4 Trefferpunkte. Bei einer langen Rast erhalten sie drei Viertel statt der Hälfte ihrer Trefferwürfel zurück. Auf diese Wirkung kann die Kreatur verzichten, um stattdessen eine Krankheit oder den Zustand Vergiftet bei einer Kreatur in 9 m zu beenden."
      },
      {
        "name": "Pflanzenerbe",
        "text": "Die Kreatur ist humanoid, gilt aber als Pflanze, wenn dies für sie von Nachteil ist."
      },
      {
        "name": "Pflanzenschlaf",
        "text": "Die Kreatur kann sich in einer Minute, in der sie festgesetzt ist, in die Erde pflanzen und dort schlafen. Im Schlaf gilt sie als versteinert, altert aber nur ein Zehntel so schnell. Das Aufwachen dauert eine Minute."
      },
      {
        "name": "Schweben",
        "text": "Die Kreatur fällt nur 18 m pro Runde und kann sich beim Fallen waagerecht bewegen. Das begrenzt den Sturzschaden."
      },
      {
        "name": "Samen spucken",
        "text": "Die Kreatur ist im Umgang mit einer natürlichen Fernkampfwaffe geübt: Sie spuckt Samen wie eine Schleuder (Reichweite 9/36 m, 1W4 + GES-Mod. Wuchtschaden) und braucht keine Munition."
      },
      {
        "name": "Blindsicht",
        "text": "Die Kreatur hat Blindsicht in 9 m."
      }
    ],
    "talente": [
      "Alraunenschrei",
      "Wurzelschlag",
      "Sonnenkind"
    ],
    "talentTexte": {
      "Alraunenschrei": {
        "text": "Die Kreatur kann als Aktion einen gellenden Ruf ausstoßen. Jede Kreatur in 9 m, die sie hören kann, muss einen Konstitutionsrettungswurf ablegen (SG = 8 + Übungsbonus + Konstitutionsmodifikator der Kreatur). Bei einem Misserfolg hat das Ziel bis zum Ende seines nächsten Zuges Nachteil auf Angriffswürfe und kann keine Reaktionen verwenden. Misslingt der Rettungswurf um 5 oder mehr, ist das Ziel zusätzlich bis zum Ende seines nächsten Zuges betäubt. Die Kreatur kann diese Fähigkeit so oft einsetzen, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Nach dem Ruf ist sie selbst bis zum Ende ihres nächsten Zuges taub."
      },
      "Wurzelschlag": {
        "text": "Die Kreatur kann als Bonusaktion Wurzeln in natürlichen Boden schlagen. Solange sie verwurzelt ist, beträgt ihre Bewegungsrate 0 m, und sie hat Vorteil auf Rettungswürfe gegen Umgeworfen und Wegstoßen. Zu Beginn jedes ihrer Züge erhält sie Trefferpunkte in Höhe ihres Konstitutionsmodifikators zurück (mindestens 1), solange sie mindestens 1 Trefferpunkt hat. Als Bonusaktion kann sie die Wurzeln wieder lösen."
      },
      "Sonnenkind": {
        "text": "Eine Stunde in direktem Sonnenlicht ersetzt für die Kreatur die Nahrung und das Wasser eines Tages. Bei Tageslicht hat sie Vorteil auf Rettungswürfe gegen Gift und Krankheiten. Verbringt sie mehr als 24 Stunden ohne Sonnenlicht, erhält sie 1 Stufe Erschöpfung."
      }
    },
    "quelle": "Merkmale: Tales of Arcana 5E Race Guide (Mandrake); Betäubungsruf: Creature Codex (Mandrake)"
  },
  "Autognome": {
    "kreaturentyp": null,
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [
      "Gift"
    ],
    "immunitaeten": [
      "Gift"
    ],
    "sprachen": [
      "Gemeinsprache",
      "Gnomisch",
      "eine weitere Sprache nach Wahl"
    ],
    "attribute": {
      "INT": 2,
      "CON": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Gepanzerte Hülle",
        "text": "Die Kreatur ist von dünnem Metall oder einem anderen haltbaren Material umhüllt. Solange sie keine Rüstung trägt, beträgt ihre Rüstungsklasse 13 + ihr Geschicklichkeitsmodifikator."
      },
      {
        "name": "Für den Erfolg gebaut",
        "text": "Die Kreatur kann einem Angriffswurf, Eigenschaftswurf oder Rettungswurf einen W4 hinzufügen, nachdem sie den W20-Wurf gesehen hat, aber bevor die Auswirkungen bestimmt werden. Die Kreatur kann diese Eigenschaft so oft nutzen, wie ihr Übungsbonus beträgt, und erhält alle verbrauchten Nutzungen nach einer langen Rast zurück."
      },
      {
        "name": "Heilungsmaschine",
        "text": "Wenn der Zauber Flicken auf sich gewirkt wird, kann sie einen Trefferwürfel ausgeben, ihn würfeln und eine Anzahl von Trefferpunkten gleich dem Ergebnis plus ihrem Konstitutionsmodifikator (mindestens 1) zurückgewinnen. Außerdem profitiert sie von folgenden Zaubern, die normalerweise keine Konstrukte betreffen: Wunden heilen, Heilendes Wort, Wunden massenheilen, Heilendes Wort der Masse und Sterbende verschonen."
      },
      {
        "name": "Mechanische Natur",
        "text": "Die Kreatur hat Resistenz gegen Giftschaden und Immunität gegen Krankheiten, und sie hat Vorteil auf Rettungswürfe gegen Lähmung oder Vergiftung. Die Kreatur muss weder essen noch trinken noch atmen."
      },
      {
        "name": "Ruhender Wächter",
        "text": "Wenn sie eine lange Rast macht, verbringt sie mindestens 6 Stunden in einem inaktiven, bewegungslosen Zustand, anstatt zu schlafen. In diesem Zustand wirkt sie leblos, bleibt aber bei Bewusstsein."
      },
      {
        "name": "Spezialisiertes Design",
        "text": "Die Kreatur erhält zwei Werkzeugkenntnisse ihrer Wahl."
      }
    ],
    "talente": [
      "Heilungsfabrik",
      "Hockenstärke",
      "Verbesserte Panzerplatten"
    ],
    "talentTexte": {
      "Heilungsfabrik": {
        "text": "Die Kreatur lernt den Zaubertrick Flicken. Die Kreatur kann ihn einmal als Bonusaktion wirken, danach muss sie eine kurze Rast beenden, bevor sie ihn so erneut wirken kann. Intelligenz, Weisheit oder Charisma ist ihre Zauberfertigkeitscharakteristik für diesen Zauber. Wenn sie ihren Rassenzug „Heilungsmaschine“ nutzt, um Trefferwürfel auszugeben und sich zu heilen, wenn der Zaubertrick Flicken auf sich gewirkt wird, kann sie eine Anzahl von Trefferwürfeln gleich ihrem Übungsbonus ausgeben, anstatt nur einen. Wenn sie Heilung erhält, kann sie diese Heilung um einen Betrag erhöhen, der ihrem Übungsbonus entspricht. Zusätzlich zu den Heilzaubern in ihrem Zug „Heilungsmaschine“ wird sie auch von folgenden Zaubern beeinflust: Heilen, Massenheilen, Machtwort Heilen und Heilungsgebet."
      },
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Verbesserte Panzerplatten": {
        "text": "Adamantinplatten: Ihr Körper wurde mit Adamantin verstärkt, was ihr größere Widerstandsfähigkeit gegen Angriffe verleiht. Ihre Rüstungsklasse erhöht sich um 1 und sie wird immun gegen kritische Treffer. Wenn ein Treffer ein kritischer wäre, wird er stattdessen zu einem normalen Treffer. Eisenholzkörper: Ihr Körper besteht aus leichtem, organischem Holz, das so hart wie Stahl ist und ihr mehr Beweglichkeit ermöglicht, ohne auf Schutz zu verzichten. Ihre Bewegungsgeschwindigkeit erhöht sich um 3 Meter (10 Fuß). Wenn sie einen Geschicklichkeitsrettungswurf macht, um Schaden zu vermeiden, kann sie den Schaden, den sie nimmt, um die Hälfte reduzieren. Elementarer Schutz: Ihr Körper ist mit Magie verzaubert, die gegen die Elemente schützt. Wenn sie eine lange Rast beendet, kann sie einen Schadenstyp wählen: Säure, Kälte, Feuer, Blitz oder Donner. Die Kreatur erhält Resistenz gegen den gewählten Schadenstyp, bis sie ihre nächste lange Rast beendet. Außerdem kann sie, wenn sie Schaden eines dieser Schadenstypen erleidet, ihre Reaktion nutzen und einen Trefferwürfel ausgeben, um Elemente absorbieren zu wirken."
      }
    }
  },
  "Bärenvolk": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m",
      "Klettern": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "STR": 2,
      "CON": 1
    },
    "merkmale": [
      {
        "name": "Feiner Geruchs- und Gehörsinn",
        "text": "Die Kreatur hat Vorteil auf Weisheit-(Wahrnehmungs)-Würfe, die auf Schall oder Geruch beruhen."
      },
      {
        "name": "Klimmkrallen",
        "text": "Die Kreatur hat eine Kletterbewegungsrate, die ihrer Schrittbewegungsrate entspricht."
      },
      {
        "name": "Klauen",
        "text": "Ihre großen Klauen gelten als natürliche Waffen, die als unbewaffnete Angriffe eingesetzt werden können. Bei einem Treffer verursachen sie Hiebschaden in Höhe von 1W6 + ihrem Stärkemodifikator."
      },
      {
        "name": "Natürliche Instinkte",
        "text": "Die Kreatur hat Übung in den Fertigkeiten Einschüchtern und Überleben."
      },
      {
        "name": "Kraftvolle Statur",
        "text": "Die Kreatur gilt als eine Größenkategorie größer, wenn das maximale Gewicht bestimmt wird, das sie tragen, schieben, ziehen oder heben kann."
      },
      {
        "name": "Bärensprache",
        "text": "Die Kreatur kann einfache Ideen mit Bären durch die Bärenvolkssprache, Gesten und Düfte kommunizieren. Die Bärenvolkssprache ist sehr primitiv und besteht aus gutturalem Grunzen und gelegentlichen Ausrufsbrüllen."
      }
    ],
    "talente": [
      "Wintervorrat",
      "Bärenumarmung",
      "Hüter des Baus"
    ],
    "talentTexte": {
      "Wintervorrat": {
        "text": "Hat die Kreatur zu Beginn einer langen Rast eine volle Mahlzeit gegessen, erhält sie am Ende der Rast temporäre Trefferpunkte in Höhe ihrer Stufe + ihres Konstitutionsmodifikators. Sie kommt doppelt so lange ohne Nahrung aus, bevor Mangel ihr Erschöpfung bringt. Honig oder anderes Süßes als Gabe gibt ihr Vorteil auf Charismawürfe gegenüber Bären und bärenartigen Tieren."
      },
      "Bärenumarmung": {
        "text": "Trifft die Kreatur mit ihren Klauen eine Kreatur, die höchstens eine Größe größer ist als sie, kann sie sie als Bonusaktion packen (Athletik gegen deren Athletik oder Akrobatik). Solange sie packt, erleidet das Ziel zu Beginn ihres Zuges Wuchtschaden in Höhe ihres Stärkemodifikators (mindestens 1). Hält sie jemanden gepackt, kann sie mit ihren Klauen keine anderen Ziele angreifen."
      },
      "Hüter des Baus": {
        "text": "Wird ein Verbündeter in 1,5 m der Kreatur getroffen, kann sie als Reaktion dazwischengehen: Der Schaden halbiert sich, und sie bewegt sich bis zu 1,5 m. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Fällt ein Verbündeter in 9 m auf 0 Trefferpunkte, hat die Kreatur bis zum Ende ihres nächsten Zuges Vorteil auf Angriffswürfe."
      }
    },
    "quelle": "Basis: More Ancestries & Cultures (Arcanist Press, Bear Folk); nur die Klettergeschwindigkeit wurde übernommen, die übrigen Merkmale blieben"
  },
  "Chromatische Drachenblütige": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "STR": 2,
      "CHA": 1
    },
    "varianten": {
      "Blaue Drachenblütige": {
        "resistenzen": [
          "Blitz"
        ],
        "merkmale": [
          {
            "name": "Blaue Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein furchteinflößender Sturm aus elektrischer Energie, mit der sie Blitzschaden verursacht."
          }
        ]
      },
      "Grüne Drachenblütige": {
        "resistenzen": [
          "Gift"
        ],
        "merkmale": [
          {
            "name": "Grüne Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein Strahl aus giftigen Dämpfen, mit der sie Giftschaden verursacht."
          }
        ]
      },
      "Rote Drachenblütige": {
        "resistenzen": [
          "Feuer"
        ],
        "merkmale": [
          {
            "name": "Rote Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein flammendes Inferno, mit der sie Feuerschaden verursacht."
          }
        ]
      },
      "Schwarze Drachenblütige": {
        "resistenzen": [
          "Säure"
        ],
        "merkmale": [
          {
            "name": "Schwarze Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein Schwall aus ätzender Säure, mit der sie Säureschaden verursacht."
          }
        ]
      },
      "Weiße Drachenblütige": {
        "resistenzen": [
          "Kälte"
        ],
        "merkmale": [
          {
            "name": "Weiße Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein eisiger Atem, mit der sie Kälteschaden verursacht."
          }
        ]
      }
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Chromatische Abstammung",
        "text": "Die Kreatur hat einen chromatischen Drachen im Stammbaum. Wähle eine Abstammung: Blau (Blitz), Grün (Gift), Rot (Feuer), Schwarz (Säure) oder Weiß (Kälte). Sie bestimmt die Schadensart ihrer anderen Merkmale."
      },
      {
        "name": "Odemwaffe",
        "text": "Wenn sie die Angreifen-Aktion ausführt, kann sie einen Angriff durch ihren Odem ersetzen: eine 9 m lange, 1,5 m breite Linie magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich ihrem Übungsbonus."
      },
      {
        "name": "Drakonische Resistenz",
        "text": "Die Kreatur ist gegen die Schadensart resistent, die mit ihrer chromatischen Abstammung assoziiert ist."
      },
      {
        "name": "Kaltblütig",
        "text": "Die Kreatur ist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Chromatischer Schutz",
        "text": "Als Aktion kanalisiert sie ihre drakonische Energie: sie ist eine Minute lang gegen die Schadensart ihrer Abstammung immun. Einmal pro langer Rast.",
        "stufe": 5
      }
    ],
    "talente": [
      "Drachenhaut",
      "Drachensicht",
      "Drachenfurcht"
    ],
    "talentTexte": {
      "Drachenhaut": {
        "text": "Ihre Schuppen werden härter. Solange sie keine Rüstung trägt, kann sie ihre Rüstungsklasse als 13 + ihren Geschicklichkeitsmodifikator berechnen. Auch wenn sie einen Schild trägt, kann sie diesen Vorteil trotzdem nutzen. Wenn eine Kreatur einen Angriffswurf gegen sich ausführt, kann sie ihre Reaktion verwenden, um diesen mit den gehärteten Schuppen an ihrem Schweif zu parieren. Der Angriffswurf der Kreatur schlägt fehl. Die Kreatur kann dieses Merkmal einmal pro lange Rast einsetzen.",
        "wirkung": {
          "rkBasis": 13
        }
      },
      "Drachensicht": {
        "text": "Die Kreatur erhält Übung in Weisheit (Wahrnehmung). Wenn sie bereits geübt in Wahrnehmung ist, erhält sie Expertise in dieser Fertigkeit. Die Kreatur erhält einen Vorteil bei Intelligenz (Nachforschung), um Münzen und andere wertvolle Gegenstände aufzuspüren, und sie erhält einen Vorteil bei Attributswürfen, um den Wert eines Gegenstandes zu bestimmen. Die Kreatur kann im Dunkeln bis zu einer Reichweite von 20 Metern sehen und bis zu einer Reichweite von 3 Metern blind sehen.",
        "wirkung": {
          "fertigkeiten": [
            "Wahrnehmung"
          ]
        }
      },
      "Drachenfurcht": {
        "text": "Die Kreatur erhält Übung in Charisma (Einschüchtern). Wenn sie bereits Übung in Einschüchtern hat, erhält sie Expertise in dieser Fertigkeit. Immer wenn sie einen Einsatz ihrer Eigenschaft Atemwaffe verbraucht, kann sie auch ein Gebrüll ausstoßen, das jede feindliche Kreatur im Umkreis von 9 Metern dazu zwingt, einen Weisheitsrettungswurf abzulegen (SG 8 + ihr Übungsbonus + ihr Charismamodifikator). Der Rettungswurf gelingt dem Ziel automatisch, wenn es sie nicht hören oder sehen kann. Bei einem misslungenen Rettungswurf wird das Ziel 1 Minute lang vor ihr verängstigt. Am Ende jeder Runde des verängstigten Ziels kann es den Rettungswurf wiederholen, wobei der Effekt bei einem Erfolg für das Ziel endet.",
        "wirkung": {
          "fertigkeiten": [
            "Einschüchtern"
          ]
        }
      }
    }
  },
  "Cnidaran": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "sinne": [
      "Blindsicht 9 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CON": 2,
      "DEX": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Amphibisch",
        "text": "Die Kreatur kann Luft und Wasser atmen."
      },
      {
        "name": "Blindsicht",
        "text": "Die Kreatur hat Blindsicht in 9 m."
      }
    ],
    "talente": [
      "Tiefenwanderer"
    ],
    "talentTexte": {
      "Tiefenwanderer": {
        "text": "Die Kreatur erhält Dunkelsicht 18 m und hat Vorteil auf Rettungswürfe gegen Kälte. Unter Wasser ist sie nie verloren: Sie weiß stets, wo oben ist und in welcher Richtung die nächste Küste liegt.",
        "wirkung": {
          "sinne": [
            "Dunkelsicht 18 m"
          ]
        }
      },
      "Giftgeißel": {
        "text": "Trifft der Stachelfortsatz der Kreatur, muss das Ziel einen Konstitutionsrettungswurf ablegen (SG = 8 + Übungsbonus + Konstitutionsmodifikator der Kreatur). Bei einem Misserfolg ist es bis zum Beginn seines nächsten Zuges vergiftet. Zu Beginn seines nächsten Zuges wiederholt das Ziel den Rettungswurf; misslingt auch dieser, ist es bis zum Ende dieses Zuges gelähmt. Danach muss der Stachel bis zur nächsten kurzen Rast regenerieren."
      },
      "Peitschender Fortsatz": {
        "text": "Der Stachelfortsatz der Kreatur hat eine Reichweite von 3 m. Statt Schaden zu verursachen, kann sie mit ihm ein Ziel in Reichweite packen und bis zu 3 m zu sich heranziehen. Bewegt sich eine Kreatur in ihrer Reichweite auf sie zu, kann sie ihr als Reaktion einen Angriff mit dem Stachel geben. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      },
      "Leuchtendes Gespinst": {
        "text": "Als Aktion lässt die Kreatur farbige Muster über ihren Körper wandern. Ein Ziel in 9 m, das sie sehen kann, muss einen Weisheitsrettungswurf ablegen (SG = 8 + Übungsbonus + Charismamodifikator der Kreatur). Bei einem Misserfolg ist es bis zum Ende seines nächsten Zuges gebannt und greift niemanden an, es sei denn, es wird bedroht oder verletzt. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      },
      "Schillernder Unterhändler": {
        "text": "Die Kreatur erhält Expertise in Charisma (Überzeugen); hat sie darin noch keine Übung, erhält sie stattdessen Übung. Einmal pro lange Rast kann sie nach einem Gespräch erkennen, was ihr Gegenüber wirklich begehrt: Sie hat Vorteil auf einen Wurf auf Weisheit (Motiv erkennen). Solange sie spricht, verbessert ihr Muster die Stimmung neutraler Kreaturen um eine Stufe.",
        "wirkung": {
          "fertigkeiten": [
            "Überzeugen"
          ]
        }
      }
    },
    "quelle": "Heliana's Guide to Monster Hunting (Cnidaran); Linienmerkmale nach Zusammenfassung, Wortlaut prüfen",
    "varianten": {
      "Nematocyst": {
        "wahl": true,
        "merkmale": [
          {
            "name": "Nematocyst: Stachelfortsatz",
            "text": "Der lange Fortsatz mit Widerhaken gilt als natürliche Waffe. Waffenlose Angriffe damit verursachen Stichschaden in Höhe von 1W4 + Stärke- oder Geschicklichkeitsmodifikator."
          },
          {
            "name": "Nematocyst: Nervengift",
            "text": "Als Bonusaktion kann die Kreatur ein Nervengift auf eine Waffe oder Munition auftragen. Der erste Treffer damit zwingt das Ziel zu einem Konstitutionsrettungswurf (SG = 8 + Übungsbonus + Konstitutionsmodifikator); bei einem Misserfolg ist es bis zum Beginn seines nächsten Zuges gelähmt. Das geht so oft, wie es dem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
          }
        ]
      },
      "Shimmerskin": {
        "wahl": true,
        "merkmale": [
          {
            "name": "Shimmerskin: Schimmer",
            "text": "Als Bonusaktion lässt die Kreatur ihre Haut schimmern und hat 10 Minuten lang Vorteil auf Charismawürfe. Das geht so oft, wie es dem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
          },
          {
            "name": "Shimmerskin: Hypnotische Phosphoreszenz",
            "text": "Zaubertrick Kleine Illusion; mit steigender Stufe lernt die Kreatur weitere Illusions- und Verzauberungszauber bis hin zu Einflüsterung. Zauberattribut: Charisma."
          }
        ]
      }
    },
    "linienTalente": {
      "Nematocyst": [
        "Giftgeißel",
        "Peitschender Fortsatz"
      ],
      "Shimmerskin": [
        "Leuchtendes Gespinst",
        "Schillernder Unterhändler"
      ]
    }
  },
  "Darakhul": {
    "kreaturentyp": null,
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "18 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Gift",
      "Nekrotisch"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": null,
    "varianten": {
      "Bärenvolk-Erbe": {
        "attribute": {
          "STR": 2,
          "CON": 1
        },
        "groesse": [
          "Mittelgroß"
        ],
        "bewegung": {
          "Gehen": "9 m"
        },
        "merkmale": [
          {
            "name": "Bärenvolk-Erbe",
            "text": "Kiefer des Todes: Biss verursacht 1W6+STR Stich · Untote Standhaftigkeit: 1×/langer Rast auf 1 TP statt 0 fallen"
          }
        ]
      },
      "Drachengeborenen-Erbe": {
        "attribute": {
          "STR": 2,
          "CON": 1
        },
        "groesse": [
          "Mittelgroß"
        ],
        "bewegung": {
          "Gehen": "7,5 m"
        },
        "merkmale": [
          {
            "name": "Drachengeborenen-Erbe",
            "text": "Korrumpierter Biss: Bonusaktion, bei Treffer +Stufe nekrotischer Schaden, 1×/langer Rast"
          }
        ]
      },
      "Drow-Erbe": {
        "attribute": {
          "INT": 2,
          "CON": 1
        },
        "groesse": [
          "Mittelgroß"
        ],
        "bewegung": {
          "Gehen": "9 m"
        },
        "merkmale": [
          {
            "name": "Drow-Erbe",
            "text": "Giftiger Biss: bei Treffer +1W6 Gift (steigt auf 3W6 auf Stufe 11), 1×/kurze oder lange Rast"
          }
        ]
      },
      "Zwerg-Erbe": {
        "attribute": {
          "WIS": 2,
          "CON": 1
        },
        "groesse": [
          "Mittelgroß"
        ],
        "bewegung": {
          "Gehen": "7,5 m"
        },
        "merkmale": [
          {
            "name": "Zwerg-Erbe",
            "text": "Zwergische Robustheit: +1 TP max beim Erhalt dieses Talents und bei jedem Stufenaufstieg"
          }
        ]
      },
      "Elfen/Schattenfe-Erbe": {
        "attribute": {
          "DEX": 2,
          "CON": 1
        },
        "groesse": [
          "Mittelgroß"
        ],
        "bewegung": {
          "Gehen": "9 m"
        },
        "merkmale": [
          {
            "name": "Elfen/Schattenfe-Erbe",
            "text": "Übernatürliche Sinne: Wahrnehmung geübt + Vorteil auf Wahrnehmungs-Würfe, um Kreaturen in 9 m zu bemerken, die nicht alle TP haben"
          }
        ]
      },
      "Gnom-Erbe": {
        "attribute": {
          "INT": 2,
          "CON": 1
        },
        "groesse": [
          "Klein"
        ],
        "bewegung": {
          "Gehen": "7,5 m"
        },
        "merkmale": [
          {
            "name": "Gnom-Erbe",
            "text": "Magischer Hunger: Reaktion wenn eine Kreatur in 9 m einen Zauber wirkt — konsumiere verbleibende Magie für temporäre TP (min. 1, Höhe = KON-Mod), 1×/kurze oder lange Rast"
          }
        ]
      },
      "Halbling-Erbe": {
        "attribute": {
          "DEX": 2,
          "CON": 1
        },
        "groesse": [
          "Klein"
        ],
        "bewegung": {
          "Gehen": "7,5 m"
        },
        "merkmale": [
          {
            "name": "Halbling-Erbe",
            "text": "Unheil: Wenn ein Angreifer eine 20 auf dem W20 würfelt, muss er neu würfeln. Verfehlt der zweite Wurf, erleidet er nekrotischen Schaden = 2× KON-Mod (mind. 2)"
          }
        ]
      },
      "Mensch/Halbelf-Erbe": {
        "attribute": {
          "CHA": 2,
          "CON": 1
        },
        "groesse": [
          "Mittelgroß"
        ],
        "bewegung": {
          "Gehen": "9 m"
        },
        "merkmale": [
          {
            "name": "Mensch/Halbelf-Erbe",
            "text": "Vielseitigkeit: Übung in 2 Fertigkeiten und 1 Werkzeug der Wahl"
          }
        ]
      },
      "Kobold-Erbe": {
        "attribute": {
          "INT": 2,
          "CON": 1
        },
        "groesse": [
          "Klein"
        ],
        "bewegung": {
          "Gehen": "9 m"
        },
        "merkmale": [
          {
            "name": "Kobold-Erbe",
            "text": "Hinterhältiger Biss: Wenn sie Vorteil auf den Bissangriff hat, verursacht sie +1W4 Stich zusätzlich"
          }
        ]
      },
      "Schattengoblin-Erbe": {
        "attribute": {
          "DEX": 2,
          "CON": 1
        },
        "groesse": [
          "Klein"
        ],
        "bewegung": {
          "Gehen": "9 m"
        },
        "merkmale": [
          {
            "name": "Schattengoblin-Erbe",
            "text": "Dunkle Tat: Aktion, Kreatur in 9 m muss WEI-RW (SG 10 + CHA-Mod) oder ist bis Ende ihres Zuges verängstigt"
          }
        ]
      },
      "Teuflingsblut-Erbe": {
        "attribute": {
          "CHA": 2,
          "CON": 1
        },
        "groesse": [
          "Mittelgroß"
        ],
        "bewegung": {
          "Gehen": "9 m"
        },
        "merkmale": [
          {
            "name": "Teuflingsblut-Erbe",
            "text": "Nekrotische Vergeltung: Reaktion wenn getroffen — Angreifer erleidet nekrotischen Schaden = CHA-Mod (min. 1) und hat Nachteil auf Angriffe bis Ende seines nächsten Zuges, 1×/langer Rast"
          }
        ]
      }
    },
    "merkmale": [
      {
        "name": "Unvollkommener Untod",
        "text": "Obwohl sie ein Humanoid ist, ist sie anfällig für Effekte, die Untote betreffen — einschließlich Vertreiben durch Kleriker. Spieleffekte die sie zurückbringen erwecken sie als Darakhul. Echter Auferstehungszauber oder Wunsch kann sie als vollständig Lebenden ihrer ursprünglichen Rasse zurückbringen."
      },
      {
        "name": "Hunger nach Fleisch",
        "text": "Die Kreatur muss täglich 500 g rohes Fleisch verzehren oder die Auswirkungen des Verhungerns erleiden. Nach 24 Stunden ohne Mahlzeit erhält sie eine Erschöpfungsstufe. Solange sie durch diese Eigenschaft Erschöpfung hat, kann sie keine TP zurückgewinnen oder Erschöpfung entfernen, bis sie mindestens 1 Stunde damit verbracht hat, 5 kg rohes Fleisch zu verzehren."
      },
      {
        "name": "Kraftvoller Kiefer",
        "text": "Ihr Biss ist eine natürliche Nahkampfwaffe für unbewaffnete Angriffe. Bei einem Treffer verursacht er 1W4 + STR-Mod Stichschaden (statt normalem Wuchtschaden)."
      },
      {
        "name": "Sonnenlichtsensitivität",
        "text": "Die Kreatur hat Nachteil auf Angriffswürfe und Weisheit-(Wahrnehmungs)-Würfe, die auf Sicht beruhen, wenn sie, ihr Ziel oder das Wahrgenommene sich in direktem Sonnenlicht befindet."
      },
      {
        "name": "Untote Widerstandsfähigkeit",
        "text": "Resistenz gegen nekrotischen Schaden und Giftschaden. Immunität gegen Krankheiten. Vorteil auf Rettungswürfe gegen Bezauberung oder Vergiftung. Bei einer kurzen Rast kann sie eine Erschöpfungsstufe senken, sofern sie in den letzten 24 Stunden mindestens 500 g rohes Fleisch zu sich genommen hat."
      },
      {
        "name": "Untote Vitalität",
        "text": "Die Kreatur muss nicht atmen und schläft nicht normal. Stattdessen tritt sie täglich für 6 Stunden in einen todesähnlichen Ruhezustand, in dem sie halbbewusst bleibt (Nachteil auf Wahrnehmungs-Würfe). Danach erhält sie denselben Vorteil wie ein Mensch nach 8 Stunden Schlaf."
      }
    ],
    "talente": [
      "Gezähmter Hunger",
      "Mantel der Nacht"
    ],
    "talentTexte": {
      "Gezähmter Hunger": {
        "text": "Bringt die Kreatur mit ihrem Biss eine Kreatur auf 0 Trefferpunkte, erhält sie Trefferpunkte in Höhe ihrer Stufe + ihres Konstitutionsmodifikators. Ein frisch erlegter Humanoide zählt als ihre Fleischmahlzeit des Tages. Danach muss sie einen Weisheitsrettungswurf (SG 10) bestehen, sonst muss sie als Bonusaktion den Leichnam anfressen und kann bis zum Ende ihres Zuges nur noch laufen."
      },
      "Mantel der Nacht": {
        "text": "Trägt die Kreatur einen Mantel mit Kapuze, gilt ihre Sonnenlichtsensitivität nur, wenn sie direktem Sonnenlicht ungeschützt ausgesetzt ist. Verbringt sie mehr als eine Stunde am Tag in direktem Sonnenlicht, erhält sie 1 Stufe Erschöpfung."
      },
      "Würgegriff der Gruft": {
        "text": "Trifft die Kreatur mit ihrem Biss eine Kreatur, die höchstens eine Größe größer ist als sie, kann sie sie als Bonusaktion packen (Athletik gegen deren Athletik oder Akrobatik). Solange sie packt, kann das Ziel nicht sprechen und keine Zauber mit verbalen Komponenten wirken. Hält sie jemanden gepackt, kann sie mit ihrem Biss keine anderen Ziele angreifen."
      },
      "Aschenatem": {
        "text": "Einmal pro kurze oder lange Rast kann die Kreatur als Aktion einen 4,5-m-Kegel aus kalter Asche ausatmen. Jede Kreatur darin muss einen Konstitutionsrettungswurf ablegen (SG = 8 + Übungsbonus + Konstitutionsmodifikator der Kreatur) und erleidet 2W6 nekrotischen Schaden, bei Erfolg halb so viel. Der Schaden steigt auf 3W6 auf Stufe 5, auf 4W6 auf Stufe 11 und auf 5W6 auf Stufe 17."
      },
      "Schwarze Fäden": {
        "text": "Als Bonusaktion schleudert die Kreatur klebrige Fäden auf ein Ziel in 9 m. Es muss einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + Übungsbonus + Konstitutionsmodifikator der Kreatur), sonst beträgt seine Bewegungsrate bis zum Beginn seines nächsten Zuges 0 m. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      },
      "Zittern im Stein": {
        "text": "Solange die Kreatur Stein oder Erde berührt, hat sie Zittersinn 9 m. Sie hat Vorteil auf Würfe auf Intelligenz (Nachforschungen) und Weisheit (Wahrnehmung), die Steinarbeit, Gänge oder Fundamente betreffen."
      },
      "Echo der Toten": {
        "text": "Einmal pro lange Rast kann die Kreatur eine Leiche oder einen Ort berühren, an dem in den letzten 7 Tagen jemand gestorben ist. Sie erfährt die letzten Sekunden dieses Todes: was die Person sah, hörte und sagte. Ihr Eindruck ist verschwommen und kann nach Ermessen der Spielleitung falsche Einzelheiten enthalten."
      },
      "Magische Verdauung": {
        "text": "Die Kreatur hat Vorteil auf Rettungswürfe gegen Zauber. Besteht sie einen Rettungswurf gegen einen Zauber, erhält sie temporäre Trefferpunkte in Höhe des Zaubergrades (mindestens 1)."
      },
      "Gestohlenes Glück": {
        "text": "Würfelt die Kreatur bei einem W20-Wurf eine 1, darf sie neu würfeln und muss das neue Ergebnis verwenden. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Jedes Mal bestimmt die Spielleitung zufällig einen Verbündeten in 9 m: Er hat bei seinem nächsten W20-Wurf Nachteil."
      },
      "Maske des Lebens": {
        "text": "Einmal pro lange Rast kann die Kreatur als Aktion bis zu 8 Stunden wie ein Lebender aussehen: Haut, Augen und Zähne wirken gesund. Sie hat Vorteil auf Charismawürfe (Täuschen), um als Lebender durchzugehen. An dem Tag, an dem sie die Maske nutzt, verdoppelt sich ihr Bedarf an rohem Fleisch."
      },
      "Rudeltaktik der Toten": {
        "text": "Die Kreatur hat Vorteil auf Angriffswürfe mit ihrem Biss gegen eine Kreatur, wenn mindestens ein Verbündeter in 1,5 m von ihr steht und nicht handlungsunfähig ist."
      },
      "Huschen im Dunkel": {
        "text": "Als Bonusaktion kann die Kreatur die Aktion Rückzug oder Verstecken ausführen. Steht sie in dämmrigem oder dunklem Licht, kann sie sich stattdessen bis zu 9 m weit zu einem Punkt teleportieren, den sie sehen kann und der ebenfalls in dämmrigem oder dunklem Licht liegt. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      },
      "Brennender Abgang": {
        "text": "Fällt die Kreatur auf 0 Trefferpunkte, entlädt sich das Feuer in ihr: Jede Kreatur in 3 m muss einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + Übungsbonus + Konstitutionsmodifikator der Kreatur) und erleidet 2W6 Feuerschaden, bei Erfolg halb so viel. Einmal pro lange Rast."
      }
    },
    "linienTalente": {
      "Bärenvolk-Erbe": [
        "Würgegriff der Gruft"
      ],
      "Drachengeborenen-Erbe": [
        "Aschenatem"
      ],
      "Drow-Erbe": [
        "Schwarze Fäden"
      ],
      "Zwerg-Erbe": [
        "Zittern im Stein"
      ],
      "Elfen/Schattenfe-Erbe": [
        "Echo der Toten"
      ],
      "Gnom-Erbe": [
        "Magische Verdauung"
      ],
      "Halbling-Erbe": [
        "Gestohlenes Glück"
      ],
      "Mensch/Halbelf-Erbe": [
        "Maske des Lebens"
      ],
      "Kobold-Erbe": [
        "Rudeltaktik der Toten"
      ],
      "Schattengoblin-Erbe": [
        "Huschen im Dunkel"
      ],
      "Teuflingsblut-Erbe": [
        "Brennender Abgang"
      ]
    }
  },
  "Dhampire": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "12 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "CHA": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Erbe",
        "text": "Die Kreatur behält alle Fertigkeiten, in denen ihre vorherige Rasse geübt ist, und besondere Bewegungsraten."
      },
      {
        "name": "Untote Natur",
        "text": "Die Kreatur braucht nicht zu atmen."
      },
      {
        "name": "Spinnenklettern",
        "text": "Ihre Kletterbewegungsrate ist gleich ihrer Schrittbewegungsrate. Ab Stufe 3 kann sie kopfüber an Decken und Wänden klettern."
      },
      {
        "name": "Vampirbiss",
        "text": "Ihre Fangzähne sind eine natürliche Waffe (einfach, Nahkampf). Konstitutionsmodifikator statt Stärke. Treffer: 1W4 Stichschaden. Bei ≤ halben TP: Vorteil auf Angriffswürfe. Trifft sie eine lebende Kreatur: gewinne TP oder erhalte Bonus auf nächsten Wurf."
      }
    ],
    "talente": [
      "Fledermausflug",
      "Traumfresser",
      "Vampirisches Charisma"
    ],
    "talentTexte": {
      "Fledermausflug": {
        "text": "Die Kreatur erlernt den Zauber Nebelwolke. Die Kreatur kann diesen mit diesem Merkmal einmal pro lange Rast benutzen. Ihr Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Als Bonusaktion kann sie sich in eine Fledermaus verwandeln, um bis zu 9 m weit in ein unbesetztes Feld zu fliegen, das sie sehen kann. Ihre restliche Bewegungsrate nach dem Ankommen beträgt automatisch 0. Wird sie durch diese Bewegung Ziel eines Gelegenheitsangriffs, wird dieser mit Nachteil ausgeführt. Greift sie in dieser Runde einen Gegner mit einem Nahkampfangriff an, erhält sie Vorteil auf ihren Angriffswurf. Die Kreatur kann diese Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer kurzen Rast wieder zur Verfügung."
      },
      "Traumfresser": {
        "text": "Die Kreatur erlernt den Zauber Schlaf. Die Kreatur kann diesen mit diesem Merkmal auf der ersten Stufe einmal pro lange Rast benutzen. Ihr Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Wenn sie Schlaf mit oder ohne diesem Merkmal wirkt, würfelt sie mit so vielen Würfeln, als würde sie den Zauber auf einem Grad höher wirken, um die Gesamtzahl an Trefferpunkten festzustellen, die Kreaturen beeinflussen können. Die Kreatur kann als Bonusaktion auf eine schlafende Kreatur in bis zu 9 m Reichweite zeigen und versuchen, ihre Träume zu stehlen. Die Kreatur muss einen Rettungswurf auf Charisma machen. Bei einem misslungenen Rettungswurf erleidet die Kreatur 2W6 psychischen Schaden und sie erhält temporäre Trefferpunkte in Höhe des Schadens. Dieser Schaden weckt die betroffene Kreatur nicht aus dem Schlaf. Die Kreatur kann dieses Merkmal einmal pro lange Rast verwenden. Um dieses Merkmal anzuwenden, muss sie ein Dhampir mit Hunger auf Träume oder psychische Energie sein."
      },
      "Vampirisches Charisma": {
        "text": "Die Kreatur erhält Übung in Charisma (Täuschen). Wenn sie bereits in Täuschen geübt ist, erhält sie Expertise. Die Kreatur erlernt den Zauber Person bezaubern und kann ihn mit diesem Merkmal auf der ersten Stufe wirken. Der Schwierigkeitsgrad für den Rettungswurf ergibt sich aus 8 + Übungsbonus + einem ihrer Attributsmodifikatoren (Wahl beim Erwerb des Talents). Wenn sie den Zauber Person bezaubern mit diesem Merkmal wirkt, würfeln Kreaturen, die gegen sich oder ihre Gefährten kämpfen, nicht mit Vorteil, wenn sie den Rettungswurf ablegen. Die Kreatur kann diese Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht; alle verbrauchten Einsätze kehren nach einer langen Rast zurück. Die Kreatur erlernt den Zauber Sprachen verstehen und kann ihn mit diesem Merkmal einmal pro lange Rast wirken.",
        "wirkung": {
          "fertigkeiten": [
            "Täuschen"
          ]
        }
      }
    }
  },
  "Dunkelelfen": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "CHA": 1
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Geschärfte Sinne",
        "text": "Die Kreatur ist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "text": "Die Kreatur hat Vorteil bei Rettungswürfen gegen Bezauberungen und ist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "text": "Die Kreatur muss nicht schlafen. Stattdessen verbringt sie täglich 4 Stunden in tiefer Meditation. Danach erhält sie dieselben Vorteile wie nach 8 Stunden Schlaf. Beim Beenden der Trance kann sie zwei neue Geübtheiten mit einer Waffe oder einem Werkzeug wählen — bis zur nächsten langen Rast."
      },
      {
        "name": "Drow Magie",
        "text": "Die Kreatur kennt den Zaubertrick Tanzende Lichter. Ab Stufe 3: Feenfeuer 1×/langer Rast. Ab Stufe 5: Dunkelheit 1×/langer Rast. Zaubermerkmal: Charisma."
      },
      {
        "name": "Drow Waffenvertrautheit",
        "text": "Die Kreatur ist geübt im Umgang mit Rapieren, Kurzschwertern und Handarmbrüsten."
      }
    ],
    "talente": [
      "Elfische Treffsicherheit",
      "Schattenverbundenheit der Dunkelelfen",
      "Dunkelelfen-Hochmagie"
    ],
    "talentTexte": {
      "Elfische Treffsicherheit": {
        "text": "Jedes Mal, wenn sie mit einem Angriff trifft, der kein kritischer Treffer ist, erhöht sich ihre Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis sie einen kritischen Treffer landet, einen Angriff verfehlt oder den Kampf betritt oder verläst; danach wird er auf ihren Standardwert zurückgesetzt. Immer wenn sie bei einem Angriffswurf einen Vorteil hat, kann sie einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      },
      "Schattenverbundenheit der Dunkelelfen": {
        "text": "Die Kreatur kann versuchen, sich zu verstecken, auch wenn sie nur leicht verschleiert ist. Die Kreatur erlernt den Zauber Dunkelheit und kann ihn nach Belieben wirken. Ihr Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent auswählt. Solange sie sich in völliger Dunkelheit befindet, wird sie auf magische Weise unsichtbar. Die Kreatur bleibt unsichtbar, bis sie ins Licht kommt, angreift oder einen Zauber wirkt; dann wird sie bis zum Beginn ihres nächsten Zuges sichtbar."
      },
      "Dunkelelfen-Hochmagie": {
        "text": "Die Kreatur lernt den Zauber Magie entdecken und kann ihn nach Belieben wirken, ohne einen Zauberplatz zu verbrauchen. Die Kreatur lernt außerdem Schweben und Magie bannen, die sie jeweils einmal pro lange Rast wirken kann, ohne einen Zauberplatz zu verbrauchen. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Wenn einer anderen Kreatur ein Rettungswurf gegen ihren Zauberrettungswurf-SG gelingt, kann sie diese Kreatur zwingen, ihren Rettungswurf zu wiederholen. Sie muss dann den zweiten Wurf akzeptieren. Wenn sie diese Fähigkeit einmal benutzt hat, kann sie sie erst wieder einsetzen, wenn sie eine kurze oder lange Rast beendet hat."
      }
    }
  },
  "Echsenmenschen": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "pruefen": [
      "Schwimmen nur als Tag genannt, Geschwindigkeit = Gehbewegung angenommen"
    ],
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CON": 2,
      "WIS": 1
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Atem anhalten",
        "text": "Die Kreatur kann bis zu 15 Minuten lang den Atem anhalten."
      },
      {
        "name": "Biss",
        "text": "Die Kreatur hat Fangzähne, mit denen sie waffenlose Angriffe ausführen kann. Bei einem Treffer bewirkt der Angriff 1W6 + ihren Stärkemodifikator an Hiebschaden statt des üblichen Wuchtschadens."
      },
      {
        "name": "Hungriger Kiefer",
        "text": "Als Bonusaktion führt sie einen besonderen Bissangriff durch. Bei einem Treffer bewirkt dieser normalen Schaden, und sie erhält temporäre Trefferpunkte in Höhe ihres Übungsbonus. Anwendungen pro langer Rast: gleich ihrem Übungsbonus."
      },
      {
        "name": "Intuition der Natur",
        "text": "Die Kreatur ist in zwei Fertigkeiten ihrer Wahl geübt: Heilkunde, Heimlichkeit, Mit Tieren umgehen, Naturkunde, Überlebenskunst oder Wahrnehmung."
      },
      {
        "name": "Kaltblütig",
        "text": "Die Kreatur ist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Natürliche Rüstung",
        "text": "Wenn sie keine Rüstung trägt, beträgt ihre Basis-RK 13 + ihr Geschicklichkeitsmodifikator. Nutze diese Rüstung, wenn sie zu einer höheren RK führt als ihre getragene Rüstung. Schilde gelten normal."
      }
    ],
    "talente": [
      "Reptilianische Regeneration",
      "Berührung von Sess'inek",
      "Komodo"
    ],
    "talentTexte": {
      "Reptilianische Regeneration": {
        "text": "Die Kreatur erhält jede Stunde 1 Trefferpunkt zurück, solange sie mindestens 1 Trefferpunkt hat oder mit 0 Trefferpunkten stabilisiert ist. Die Kreatur kann verlorene Körperteile nachwachsen lassen. Die benötigte Zeit hängt vom verlorenen Körperteil ab: 1W4 Tage für einen Finger oder Zeh, 1W6 Wochen für einen Arm oder ein Bein. Als Aktion kann sie 1 Minute lang (oder bis sie bewusstlos wird) einen Regenerationsschub auslösen. Die Kreatur erhält zu Beginn jeder ihrer Runden Trefferpunkte in Höhe ihres Übungsbonus zurück. Nach Einsatz dieser Fähigkeit steht sie erst nach einer langen Rast wieder zur Verfügung."
      },
      "Berührung von Sess'inek": {
        "text": "Die Kreatur lernt, Infernalisch zu sprechen, zu lesen und zu schreiben. Wenn sie Infernalisch bereits kennt, lernt sie eine andere Sprache ihrer Wahl. Die Kreatur erlangt Immunität gegen den Zustand verängstigt. Die Kreatur erhält Widerstand gegen Feuer- und Giftschaden. Die Kreatur erhält einen Vorteil bei Rettungswürfen gegen Vergiftung.",
        "wirkung": {
          "zustandsimmunitaeten": [
            "Verängstigt"
          ],
          "resistenzen": [
            "Feuer",
            "Gift"
          ]
        }
      },
      "Komodo": {
        "text": "Die Kreatur erhält Resistenz gegen Giftschaden. Würde sie Giftschaden erleiden, kann sie ihre Reaktion verwenden, um einen Schadenswurf zu widerstehen und keinen Schaden durch diesen Schadenswurf zu erleiden. Die Kreatur kann diese Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Diese Eigenschaft kann nach Ermessen des Spielleiters fehlschlagen. Die Kreatur sondert ein gefährliches Gift ab. Die Kreatur besitzt Giftreserven in Höhe ihres Übungsbonus, die bei einer langen Rast wieder aufgefüllt werden. Der Schwierigkeitsgrad für dieses Gift ist 8 + Übungsbonus + Konstitutionsmodifikator. Wenn sie ihre Eigenschaft Hungriger Kiefer ausführt, kann sie bei einem Treffer eine Giftreserve nutzen, um das Ziel zu einem Konstitutionsrettungswurf zu zwingen. Bei einem Fehlschlag erleidet es 2W6 Giftschaden und ist eine Minute lang vergiftet. Bei einem Erfolg erleidet es nur halben Schaden und wird nicht vergiftet. Als Aktion kann sie eine Giftreserve verbrauchen und eine Waffe oder bis zu 5 Stück Munition für 1 Minute mit Gift überziehen. Getroffene Kreaturen müssen einen Konstitutionsrettungswurf ablegen oder 1W6 zusätzlichen Giftschaden erleiden (bei Erfolg halb so viel). Der Gifteffekt kann nur 5 Mal auftreten. Ihr Giftschaden erhöht sich mit steigender Stufe: auf der 6. Stufe auf W8, auf der 11. auf W10, auf der 16. auf W12.",
        "wirkung": {
          "resistenzen": [
            "Gift"
          ]
        }
      }
    }
  },
  "Edelstein Drachenblütige": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "STR": 2,
      "CHA": 1
    },
    "varianten": {
      "Amethyst-Drachenblütige": {
        "resistenzen": [
          "Energie"
        ],
        "merkmale": [
          {
            "name": "Amethyst-Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein imposanter Ausbruch aus purer Energie, mit der sie Energieschaden verursacht."
          }
        ]
      },
      "Kristall-Drachenblütige": {
        "resistenzen": [
          "Strahlend"
        ],
        "merkmale": [
          {
            "name": "Kristall-Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein gleißender Strahl aus Licht, mit der sie gleißenden Schaden verursacht."
          }
        ]
      },
      "Saphir-Drachenblütige": {
        "resistenzen": [
          "Schall"
        ],
        "merkmale": [
          {
            "name": "Saphir-Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein donnernder Schallstoß, mit der sie Schallschaden verursacht."
          }
        ]
      },
      "Smaragd-Drachenblütige": {
        "resistenzen": [
          "Psychisch"
        ],
        "merkmale": [
          {
            "name": "Smaragd-Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein psychischer Strom aus mentaler Energie, mit der sie psychischen Schaden verursacht."
          }
        ]
      },
      "Topas-Drachenblütige": {
        "resistenzen": [
          "Nekrotisch"
        ],
        "merkmale": [
          {
            "name": "Topas-Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein nekrotischer Hauch aus negativer Energie, mit der sie nekrotischen Schaden verursacht."
          }
        ]
      }
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Edelstein-Abstammung",
        "text": "Die Kreatur hat einen Edelsteindrachen im Stammbaum. Wähle eine Abstammung: Amethyst (Energie), Kristall (Gleißend), Saphir (Schall), Smaragd (Psychisch) oder Topas (Nekrotisch). Sie bestimmt die Schadensart ihrer anderen Merkmale."
      },
      {
        "name": "Odemwaffe",
        "text": "Wenn sie die Angreifen-Aktion ausführt, kann sie einen Angriff durch ihren Odem ersetzen: einen 4,5 m langen Kegel magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich ihrem Übungsbonus."
      },
      {
        "name": "Drakonische Resistenz",
        "text": "Die Kreatur ist gegen die Schadensart resistent, die mit ihrer Edelstein-Abstammung assoziiert ist."
      },
      {
        "name": "Kaltblütig",
        "text": "Die Kreatur ist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Psionischer Geist",
        "text": "Die Kreatur kann allen Kreaturen im Abstand von bis zu neun Metern, die sie sehen kann, telepatisch Botschaften übermitteln. Die Kreatur muss nicht dieselbe Sprache wie die Kreatur sprechen — sie muss jedoch mindestens eine Sprache beherrschen, um die Botschaft zu verstehen."
      },
      {
        "name": "Edelstein-Flug",
        "text": "Als Bonusaktion manifestiert sie spektrale Flügel an ihrem Körper. Die Flügel bleiben eine Minute lang bestehen; in dieser Zeit hat sie eine Flugbewegungsrate in Höhe ihrer Schrittbewegungsrate und kann schweben. Einmal pro langer Rast.",
        "stufe": 5
      }
    ],
    "talente": [
      "Drachenhaut",
      "Drachensicht",
      "Drachengespür"
    ],
    "talentTexte": {
      "Drachenhaut": {
        "text": "Ihre Schuppen werden härter. Solange sie keine Rüstung trägt, kann sie ihre Rüstungsklasse als 13 + ihren Geschicklichkeitsmodifikator berechnen. Auch wenn sie einen Schild trägt, kann sie diesen Vorteil trotzdem nutzen. Wenn eine Kreatur einen Angriffswurf gegen sich ausführt, kann sie ihre Reaktion verwenden, um diesen mit den gehärteten Schuppen an ihrem Schweif zu parieren. Der Angriffswurf der Kreatur schlägt fehl. Die Kreatur kann dieses Merkmal einmal pro lange Rast einsetzen.",
        "wirkung": {
          "rkBasis": 13
        }
      },
      "Drachensicht": {
        "text": "Die Kreatur erhält Übung in Weisheit (Wahrnehmung). Wenn sie bereits geübt in Wahrnehmung ist, erhält sie Expertise in dieser Fertigkeit. Die Kreatur erhält einen Vorteil bei Intelligenz (Nachforschung), um Münzen und andere wertvolle Gegenstände aufzuspüren, und sie erhält einen Vorteil bei Attributswürfen, um den Wert eines Gegenstandes zu bestimmen. Die Kreatur kann im Dunkeln bis zu einer Reichweite von 20 Metern sehen und bis zu einer Reichweite von 3 Metern blind sehen.",
        "wirkung": {
          "fertigkeiten": [
            "Wahrnehmung"
          ]
        }
      },
      "Drachengespür": {
        "text": "Die Kreatur erhält Übung in Intelligenz (Naturkunde). Wenn sie bereits in Naturkunde geübt ist, erhält sie Expertise. Die Kreatur hat einen Vorteil bei Würfen auf Intelligenz (Naturkunde), wenn sie nach Edelsteinvorkommen sucht. Wenn sie Schaden erleidet, der der magischen Affinität ihrer Edelstein-Abstammung entspricht, kann sie ihre Reaktion verwenden, um die Energie in den Edelsteinen ihres Körpers zu speichern und bis zum Ende ihres nächsten Zuges immun gegen diese Schadensart zu werden. Wenn sie Energie gespeichert hat, kann sie in ihrem nächsten Zug einen der folgenden Vorteile erhalten: Sie kann ihre Bonusaktion verwenden, um die gespeicherte Energie in Lebenskraft zu verwandeln und temporäre Trefferpunkte in Höhe von 1W6 + ihrem Übungsbonus zu erhalten (steigt auf 1W8 auf Stufe 4, 1W10 auf Stufe 8, 1W12 auf Stufe 12). Oder sie kann, wenn sie ihr Merkmal Odemwaffe einsetzt, die gespeicherte Energie kanalisieren, um die Macht ihres Atems zu verstärken — füge dem Schaden 1W10 + ihren Übungsbonus hinzu; bei einem erfolgreichen Rettungswurf erleiden betroffene Kreaturen halb so viel Schaden. Die Häufigkeit, mit der sie dieses Merkmal einsetzen kann, entspricht ihrem Übungsbonus. Verbrauchte Anwendungen stehen ihr nach einer langen Rast wieder zur Verfügung.",
        "wirkung": {
          "fertigkeiten": [
            "Naturkunde"
          ]
        }
      }
    }
  },
  "Eladrin": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "CHA": 1
    },
    "varianten": {
      "Frühlings-Eladrin": {
        "merkmale": [
          {
            "name": "Frühlings-Eladrin",
            "text": "Wenn sie ihren Feenschritt einsetzt, kann sie eine bereitwillige Kreatur innerhalb von 1,5 m berühren. Diese Kreatur wird statt ihr teleportiert und erscheint an einem freien Platz ihrer Wahl im Umkreis von 9 m."
          }
        ]
      },
      "Sommer-Eladrin": {
        "merkmale": [
          {
            "name": "Sommer-Eladrin",
            "text": "Sofort nach Einsatz ihres Feenschritts erleidet jede Kreatur ihrer Wahl innerhalb von 1,5 m, die sie sehen kann, Feuerschaden in Höhe ihres Übungsbonus."
          }
        ]
      },
      "Herbst-Eladrin": {
        "merkmale": [
          {
            "name": "Herbst-Eladrin",
            "text": "Sofort nach Einsatz ihres Feenschritts müssen bis zu zwei Kreaturen ihrer Wahl innerhalb von 3 m einen Weisheitsrettungswurf bestehen oder sind für bis zu 1 Minute von ihr bezaubert (endet bei Schaden durch sie oder Begleiter)."
          }
        ]
      },
      "Winter-Eladrin": {
        "merkmale": [
          {
            "name": "Winter-Eladrin",
            "text": "Wenn sie ihren Feenschritt einsetzt, muss eine Kreatur ihrer Wahl innerhalb von 1,5 m einen Weisheitsrettungswurf bestehen oder ist bis zum Ende ihres nächsten Zuges von sich verängstigt."
          }
        ]
      }
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Geschärfte Sinne",
        "text": "Die Kreatur ist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "text": "Die Kreatur hat Vorteil bei Rettungswürfen gegen Bezauberungen und ist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "text": "Die Kreatur muss nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kann sie die Jahreszeit wechseln und zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Feenschritt",
        "text": "Als Bonusaktion teleportiert sie sich bis zu 9 m an eine freie Stelle, die sie sieht. Anwendungen pro langer Rast: gleich ihrem Übungsbonus. Ab Stufe 3 erhält der Feenschritt einen Zusatzeffekt ihrer Jahreszeit (Rettungswurf-SG = 8 + Übungsbonus + INT/WEI/CHA). Frühling: Eine bereitwillige Kreatur innerhalb 1,5 m wird statt ihr teleportiert (freie Stelle innerhalb 9 m). Sommer: Jede Kreatur ihrer Wahl innerhalb 1,5 m erleidet Feuerschaden = Übungsbonus. Herbst: Bis zu 2 Kreaturen innerhalb 3 m müssen WEI-Rettungswurf bestehen oder sind 1 Minute bezaubert (endet bei Schaden). Winter: Eine Kreatur innerhalb 1,5 m muss WEI-Rettungswurf bestehen oder ist bis Ende ihres nächsten Zuges verängstigt."
      }
    ],
    "talente": [
      "Elfische Treffsicherheit",
      "Bindung der Jahreszeiten",
      "Feengeister-Magie"
    ],
    "talentTexte": {
      "Elfische Treffsicherheit": {
        "text": "Jedes Mal, wenn sie mit einem Angriff trifft, der kein kritischer Treffer ist, erhöht sich ihre Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis sie einen kritischen Treffer landet, einen Angriff verfehlt oder den Kampf betritt oder verläst; danach wird er auf ihren Standardwert zurückgesetzt. Immer wenn sie bei einem Angriffswurf einen Vorteil hat, kann sie einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      },
      "Bindung der Jahreszeiten": {
        "text": "Die Kreatur ist in enger Verbindung mit den Kräften der Natur, was sich Übung in Intelligenz (Naturkunde) verleiht. Herbst: Der Kreislauf des Lebens endet mit dem Herbst, wenn die Pflanzen absterben und die Tiere beginnen, ihre Vorräte für den Winter anzulegen. Diese Vertrautheit mit dem Tod verleiht ihr Resistenz gegen nekrotischen Schaden. Die Kreatur erlernt den Zaubertrick Kalte Hand und den Zauber Verderben, den sie auf Stufe 1 einmal pro lange Rast wirken kann. Ihr Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Frühling: Die Stürme des Frühlings bringen neues Leben ins Land. Diese Vertrautheit verleiht ihr Resistenz gegen Blitzschaden. Die Kreatur erlernt den Zaubertrick Blitzköder und den Zauber Donnerwoge, den sie auf Stufe 1 einmal pro lange Rast wirken kann. Ihr Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Sommer: Die Hitze des Sommers ist allgegenwärtig. Diese Vertrautheit verleiht ihr Resistenz gegen Feuerschaden. Die Kreatur erlernt den Zaubertrick Flammen erzeugen und den Zauber Brennende Hände, den sie auf Stufe 1 einmal pro lange Rast wirken kann. Ihr Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Winter: Sie ist mit Kälte und eisigen Temperaturen vertraut. Diese Vertrautheit verleiht ihr Resistenz gegen Kälteschaden. Die Kreatur erlernt den Zaubertrick Kältestrahl und den Zauber Gefrierende Finger, den sie auf Stufe 1 einmal pro lange Rast wirken kann. Ihr Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma.",
        "wirkung": {
          "fertigkeiten": [
            "Naturkunde"
          ]
        }
      },
      "Feengeister-Magie": {
        "text": "Die Kreatur lernt, Sylvanisch zu sprechen, zu lesen und zu schreiben. Wenn sie bereits Sylvanisch kann, kann sie eine andere Sprache lernen. Die Kreatur lernt den Zauber Selbstverkleidung und kann ihn nach Belieben wirken. Die Kreatur erlernt außerdem die Zauber Feenfeuer und Person bezaubern. Die Kreatur kann jeden dieser Zauber einmal wirken, ohne einen Zauberplatz zu verbrauchen, und sie erlangt die Fähigkeit wieder, dies zu tun, sobald sie eine lange Rast beendet hat. Ihr Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent auswählt."
      }
    }
  },
  "Erd-Genasi": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "CON": 2,
      "STR": 1
    },
    "merkmale": [
      {
        "name": "Erdschritt",
        "text": "Die Kreatur bewegt sich über schwieriges Gelände, ohne zusätzliche Bewegung aufzuwenden, wenn sie ihre Schrittbewegungsrate auf dem Boden oder einem Fußboden nutzt."
      },
      {
        "name": "Steintarnung",
        "text": "Die Kreatur kennt den Zaubertrick Klingenbann und kann ihn normal oder als Bonusaktion wirken. Anwendungen pro langer Rast: gleich ihrem Übungsbonus. Ab Stufe 5: Spurloses Gehen 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      }
    ],
    "talente": [
      "Widerstand des Ursprungs",
      "Verderbnis des Abgrunds",
      "Der Griff nach der Erde"
    ],
    "talentTexte": {
      "Widerstand des Ursprungs": {
        "text": "Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erlangt. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Die Kreatur erhält Resistenz gegen Giftschaden und einen Vorteil bei Rettungswürfen gegen Vergiftungen. Die Kreatur wird immun gegen kritische Treffer. Wenn ein Treffer ein kritischer Treffer sein sollte, wird er stattdessen zu einem normalen Treffer.",
        "wirkung": {
          "tpProTW": 1
        }
      },
      "Verderbnis des Abgrunds": {
        "text": "Die Kreatur lernt Infernalisch, die Sprache der Kreaturen des Abgrunds. Wenn sie Infernalisch bereits kennt, kann sie stattdessen eine andere Sprache ihrer Wahl erlernen. Die Kreatur erhält Resistenz gegen psychischen Schaden und einen Vorteil bei Schutzwürfen gegen Furcht. Die Kreatur erlernt den Zauber Chaospfeil und den Zauber Tashas fürchterlicher Lachanfall. Die Kreatur kann diese Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent auswählt.",
        "wirkung": {
          "resistenzen": [
            "Psychisch"
          ]
        }
      },
      "Der Griff nach der Erde": {
        "text": "Einmal pro Runde kann sie als Teil der Angriffsaktion auf den Boden schlagen, wodurch Erde und Felsen hochgeschleudert werden und eine Kreatur im Umkreis von 9 m umschließen. Diese Kreatur muss einen Stärkerettungswurf ablegen (SG 8 + ihr Übungsbonus + ihr Stärkemodifikator), oder sie erleidet Schaden in Höhe ihrer Stufe und ist bis zum Ende ihres nächsten Zuges gefesselt. Bei einem Erfolg erleidet die Kreatur Hiebschaden in Höhe der Hälfte ihrer Stufe (abgerundet) und erleidet keinen zusätzlichen Effekt. Wenn sich die Kreatur in Reichweite befindet, kann sie außerdem eine Bonusaktion einsetzen, um nach diesem Angriff einen Nahkampfangriff gegen sie auszuführen. Die Kreatur kann diese Fähigkeit so oft einsetzen, wie es ihrem Übungsbonus entspricht, und sie erhält alle Einsätze dieser Fähigkeit zurück, wenn sie eine lange Rast beendet."
      }
    }
  },
  "Erina": {
    "kreaturentyp": null,
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "7,5 m",
      "Graben": "6 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Gift"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "attribute": {
      "DEX": 2,
      "WIS": 1
    },
    "merkmale": [
      {
        "name": "Robust",
        "text": "Vorteil auf Rettungswürfe gegen Gift und Resistenz gegen Giftschaden."
      },
      {
        "name": "Stacheln",
        "text": "Während sie eine Kreatur greift oder von einer Kreatur gegriffen wird, erleidet die Kreatur zu Beginn ihres Zuges 1W4 Stichschaden."
      },
      {
        "name": "Scharfe Sinne",
        "text": "Die Kreatur hat Übung in der Fertigkeit Wahrnehmung."
      },
      {
        "name": "Graben",
        "text": "Die Kreatur hat eine Grabgeschwindigkeit von 6 Metern. Die Kreatur kann sich nur durch Erde und Sand graben, nicht durch Schlamm, Eis oder Fels."
      }
    ],
    "talente": [
      "Igelkugel",
      "Heilkräuterkundige",
      "Wurfstacheln"
    ],
    "talentTexte": {
      "Igelkugel": {
        "text": "Als Bonusaktion kann die Kreatur sich einrollen. Bis zum Beginn ihres nächsten Zuges hat sie Resistenz gegen Wucht-, Stich- und Hiebschaden, und ihre Bewegungsrate beträgt 0 m. Jede Kreatur, die sie in dieser Zeit im Nahkampf trifft, erleidet 1W4 Stichschaden. Solange sie eingerollt ist, hat sie Nachteil auf Würfe auf Wahrnehmung."
      },
      "Heilkräuterkundige": {
        "text": "Die Kreatur hat Vorteil auf Würfe auf Naturkunde und Medizin, die Kräuter betreffen. Sammelt sie während einer kurzen Rast Kräuter (Wurf auf Naturkunde oder Überleben, SG 12), heilen bis zu so viele Verbündete wie ihr Weisheitsmodifikator (mindestens 1) zusätzlich 1W6 Trefferpunkte."
      },
      "Wurfstacheln": {
        "text": "Als Aktion kann die Kreatur Stacheln auf ein Ziel in 6/18 m schleudern (Fernkampfangriff mit ihrem Übungsbonus, 1W4 + Geschicklichkeitsmodifikator Stichschaden). Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung, weil die Stacheln nachwachsen."
      }
    },
    "quelle": "Margreve Player's Guide (Kobold Press); Merkmale und Boni nicht gegen das Buch geprüft"
  },
  "Eulenleute": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "WIS": 2,
      "DEX": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Flug",
        "text": "Dank ihrer Flügel hat sie eine Fluggeschwindigkeit von 9 Metern. Die Kreatur kann diese Fluggeschwindigkeit nicht nutzen, wenn sie mittlere oder schwere Rüstung trägt."
      },
      {
        "name": "Lautlose Federn",
        "text": "Die Kreatur hat Übung in der Fertigkeit Heimlichkeit."
      }
    ],
    "talente": [
      "Sturmgeboren",
      "Vogel der Beute",
      "Wächter der Winde"
    ],
    "talentTexte": {
      "Sturmgeboren": {
        "text": "Die Kreatur erhält Resistenz gegen Blitzschaden und Donnerschaden. Die Kreatur lernt die Zaubertricks Blitzlasso und Donnerschlag. Ihre Zauberfertigkeitscharakteristik für diese Zaubertricks ist Intelligenz, Weisheit oder Charisma. Wann immer sie Blitzschaden oder Donnerschaden verursacht, kann sie diesen Schaden um einen Betrag erhöhen, der ihrem Übungsbonus entspricht.",
        "wirkung": {
          "resistenzen": [
            "Blitz",
            "Schall"
          ]
        }
      },
      "Vogel der Beute": {
        "text": "Die Kreatur erhält Blindsicht in einem Bereich von 3 Metern (10 Fuß). Die Kreatur erhält Übung in der Fertigkeit Weisheit (Wahrnehmung). Wenn sie bereits Übung in der Fertigkeit Weisheit (Wahrnehmung) hat, erhält sie stattdessen Expertise darin. Schwaches Licht gibt ihr keinen Nachteil auf Weisheit-(Wahrnehmungs)-Würfe, die auf Sicht beruhen. Die Kreatur erhält Vorteil auf Weisheit-(Wahrnehmungs)-Würfe, die auf Sicht oder Gehör beruhen.",
        "wirkung": {
          "fertigkeiten": [
            "Wahrnehmung"
          ]
        }
      },
      "Wächter der Winde": {
        "text": "Die Kreatur ist in Weisheit (Wahrnehmung) geübt. Wenn sie bereits geübt ist, erhält sie Expertise. Die Kreatur ist geübt im Umgang mit Speeren, Wurfspeeren und Netzen. Gelegenheitsangriffe, die gegen sie in der Luft ausgeführt werden, sind im Nachteil. Hat der Gegner einen Vorteil gegen sie, gleicht sich dies aus und der Angriff wird normal ausgeführt. Wenn sie fliegt und mindestens 3 Meter auf ein Ziel zustürzt (mindestens 3 Meter ihrer Bewegungsrate müssen zum Verringern ihrer Höhe genutzt werden), bevor sie es mit einer Nahkampfwaffe trifft, verursacht der Angriff zusätzlichen Waffenschaden in Höhe ihres Übungsbonus."
      }
    }
  },
  "Feen": {
    "kreaturentyp": "Feenwesen",
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CHA": 2,
      "DEX": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Feenmagie",
        "text": "Die Kreatur kennt den Zaubertrick Druidenkunst. Ab Stufe 3: Feenfeuer 1×/langer Rast. Ab Stufe 5: Vergrößern/Verkleinern 1×/langer Rast. Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Charisma oder Weisheit."
      },
      {
        "name": "Feenflug",
        "text": "Ihre Flugbewegungsrate entspricht ihrer Schrittbewegungsrate. Die Kreatur kann sie nicht nutzen, wenn sie mittelschwere oder schwere Rüstung trägt."
      }
    ],
    "talente": [
      "Hockenstärke",
      "Meister der Feenmagie",
      "Pflanzenfreundschaft"
    ],
    "talentTexte": {
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Meister der Feenmagie": {
        "text": "Die Kreatur erlernt den Zaubertrick Tanzende Lichter. Die Kreatur kann diesen nach Belieben wirken. Wenn sie den Zauber Feenfeuer wirkt, kann sie ihre Ziele im Wirkbereich auswählen. Die Kreatur erlernt die Zauber Gute Beeren und Wunden heilen. Die Kreatur kann diese jeweils einmal pro lange Rast benutzen. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt."
      },
      "Pflanzenfreundschaft": {
        "text": "Die Kreatur erhält Übung in Intelligenz (Naturkunde). Wenn sie bereits in Naturkunde geübt ist, erhält sie Expertise. Die Kreatur erlernt den Zauber Mit Pflanzen sprechen. Die Kreatur kann diesen einmal pro lange Rast benutzen. Ihr Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt.",
        "wirkung": {
          "fertigkeiten": [
            "Naturkunde"
          ]
        }
      }
    }
  },
  "Felsengnome": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "INT": 2,
      "CON": 1
    },
    "merkmale": [
      {
        "name": "Gnomische Gerissenheit",
        "text": "Die Kreatur ist im Vorteil bei allen Rettungswürfen gegen Magie, sofern sie auf Intelligenz, Weisheit oder Charisma basieren."
      },
      {
        "name": "Artefaktkunde",
        "text": "Bei Intelligenz-(Geschichte)-Würfen, die mit magischen Gegenständen, alchemistischen Objekten oder technischen Geräten zusammenhängen, addiert sie ihren doppelten Übungsbonus."
      },
      {
        "name": "Tüftler",
        "text": "Die Kreatur ist geübt im Umgang mit Tüftlerwerkzeug. Mit 1 Stunde Arbeit und 10 GM Material baut sie ein winziges aufziehbares Gerät (RK 5, TP 1), das nach 24 Stunden aufhört zu funktionieren (außer sie hält es in Betrieb). Bis zu 3 aktive Geräte gleichzeitig. Wählbare Typen: Aufziehspielzeug (bewegt sich 1,5 m/Runde zufällig und macht Tiergeräusche), Anzünder (erzeugt kleine Flamme), Spieluhr (spielt ein Lied)."
      }
    ],
    "talente": [
      "Leichtes Verschwinden",
      "Hockenstärke",
      "Der unerschütterliche Berg"
    ],
    "talentTexte": {
      "Leichtes Verschwinden": {
        "text": "Die Kreatur erhält Übung in Geschicklichkeit (Heimlichkeit). Wenn sie bereits in Heimlichkeit geübt ist, erhält sie Expertise. Unmittelbar nachdem sie Schaden erlitten hat, kann sie ihre Reaktion einsetzen, um bis zum Ende ihres nächsten Zugs auf magische Weise unsichtbar zu werden. Die Kreatur kann dies so oft tun, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer kurzen oder langen Rast wieder zur Verfügung.",
        "wirkung": {
          "fertigkeiten": [
            "Heimlichkeit"
          ]
        }
      },
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Der unerschütterliche Berg": {
        "text": "Die Kreatur hat einen Vorteil bei Rettungswürfen gegen Verängstigung. Wenn sie gegen eine Kreatur kämpft, die größer ist als sie, kann sie, wenn sich ein Rettungswurf misslingt, stattdessen entscheiden, dass er gelingt. Nachdem sie diese Fähigkeit eingesetzt hat, muss sie eine lange Rast einlegen, bevor sie sie erneut einsetzen kann."
      }
    }
  },
  "Feuer-Genasi": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Feuer"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "CON": 2,
      "INT": 1
    },
    "merkmale": [
      {
        "name": "Feuerresistenz",
        "text": "Die Kreatur ist gegen Feuerschaden resistent."
      },
      {
        "name": "Kondensation",
        "text": "Die Kreatur ist von den Effekten von Durst unbetroffen."
      },
      {
        "name": "Heißblütig",
        "text": "Die Kreatur ist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Eine Handvoll Glut",
        "text": "Die Kreatur kennt den Zaubertrick Flammen erzeugen. Ab Stufe 3: Brennende Hände 1×/langer Rast. Ab Stufe 5: Flammenklinge 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      }
    ],
    "talente": [
      "Widerstand des Ursprungs",
      "Verderbnis des Abgrunds",
      "Die Ewige Flamme"
    ],
    "talentTexte": {
      "Widerstand des Ursprungs": {
        "text": "Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erlangt. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Die Kreatur erhält Resistenz gegen Giftschaden und einen Vorteil bei Rettungswürfen gegen Vergiftungen. Die Kreatur wird immun gegen kritische Treffer. Wenn ein Treffer ein kritischer Treffer sein sollte, wird er stattdessen zu einem normalen Treffer.",
        "wirkung": {
          "tpProTW": 1
        }
      },
      "Verderbnis des Abgrunds": {
        "text": "Die Kreatur lernt Infernalisch, die Sprache der Kreaturen des Abgrunds. Wenn sie Infernalisch bereits kennt, kann sie stattdessen eine andere Sprache ihrer Wahl erlernen. Die Kreatur erhält Resistenz gegen psychischen Schaden und einen Vorteil bei Schutzwürfen gegen Furcht. Die Kreatur erlernt den Zauber Chaospfeil und den Zauber Tashas fürchterlicher Lachanfall. Die Kreatur kann diese Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent auswählt.",
        "wirkung": {
          "resistenzen": [
            "Psychisch"
          ]
        }
      },
      "Die Ewige Flamme": {
        "text": "Die Flammen schaden weder ihr noch ihrem Besitz, und sie verbreiten helles Licht bis zu einer Entfernung von 9 m und schwaches Licht für weitere 9 m. Jede Kreatur, die sie mit einem Nahkampfangriff aus einem Umkreis von 1,5 m trifft, erleidet Feuerschaden in Höhe ihres Übungsbonus. Wenn sie Feuerschaden würfelt, während dieser Kranz aktiv ist, kann sie zusätzlichen Feuerschaden in Höhe ihres Übungsbonus verursachen. Jede Kreatur, die sie im Griff hat oder von ihr im Griff gehalten wird, erleidet zu Beginn jeder ihrer Runden Feuerschaden in Höhe ihres Übungsbonus. Als Bonusaktion kann sie in jedem ihrer Züge einen Feuerstrahl aus dem Kranz austreten lassen. Führe einen Fernkampf-Zauberangriff gegen ein Ziel in einem Umkreis von 9 m um sie herum aus. Bei einem Treffer erleidet das Ziel 1W8 Feuerschaden. Ihr Attributsmodifikator hierfür ist Weisheit, Intelligenz oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Die Kreatur kann diese Fähigkeit so oft einsetzen, wie es ihrem Übungsbonus entspricht, und sie erhält alle verbrauchten Einsätze zurück, wenn sie eine lange Rast beendet."
      }
    }
  },
  "Firbolg": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "WIS": 2,
      "STR": 1
    },
    "merkmale": [
      {
        "name": "Firbolg-Magie",
        "text": "Die Kreatur kann Magie entdecken und Selbstverkleidung wirken (Selbstverkleidung ermöglicht bis zu 1 m größer/kleiner zu erscheinen). Jeder Zauber 1×/langer Rast, oder mit Zauberplätzen. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Charisma oder Weisheit."
      },
      {
        "name": "Sprache von Tier und Pflanze",
        "text": "Die Kreatur kann mit Tieren, Pflanzen und Vegetation kommunizieren. Sie verstehen sich, sie hat jedoch keine Spezialfähigkeit, ihre Antworten zu verstehen. Vorteil auf alle Charismawürfe, um sie zu beeinflussen."
      },
      {
        "name": "Verborgener Schritt",
        "text": "Als Bonusaktion wird sie bis zum Beginn ihres nächsten Zuges unsichtbar. Der Zustand endet frühzeitig, wenn sie angreift, Schaden verursacht oder jemanden zu einem Rettungswurf zwingt. Anwendungen pro langer Rast: gleich ihrem Übungsbonus."
      }
    ],
    "talente": [
      "Meister der Firbolg-Magie",
      "Beschützer der Natur",
      "Freund des Waldes"
    ],
    "talentTexte": {
      "Meister der Firbolg-Magie": {
        "text": "Die Kreatur erlernt einen Druiden-Zaubertrick ihrer Wahl sowie die Zauber Tierfreundschaft und Feenfeuer, die sie jeweils einmal ohne Zauberplatz wirken kann. Die Kreatur erlangt diese Fähigkeit nach einer langen Rast erneut. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen). Die Kreatur erhält die Fähigkeit, die Gestalt eines Tieres mit HG 1/4 oder weniger anzunehmen, das sie schon gesehen hat (ähnlich der Druideneigenschaft Tiergestalt). Die Bestie kann weder fliegen noch schwimmen. Die Kreatur bleibt 1 Stunde in der Tiergestalt oder kehrt früher per Bonusaktion zurück. Es gelten alle regulären Regeln für Tiergestalt. Die Kreatur erhält einen Einsatz dieser Eigenschaft; besitzt sie Tiergestalt bereits, kann sie sie 1 Mal zusätzlich einsetzen (normale Regeln einschließlich Symbiose/Wildfeuergeist). Verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      },
      "Beschützer der Natur": {
        "text": "In der freien Natur erhält sie 1,5 m zusätzliche Bewegungsrate. Die Kreatur erlangt Übung in Charisma (Überzeugen). Wenn sie in Überzeugen bereits geübt ist, erlangt sie Expertise. Als Aktion kann sie diejenigen betören, die der Natur schaden wollen. Wähle eine Kreatur im Umkreis von 9 m um sie. Sie muss einen Rettungswurf in Weisheit bestehen (SG 8 + Übungsbonus + ihr Charismamodifikator) oder 1 Stunde lang von ihr verzaubert werden. Eine Kreatur hat bei diesem Rettungswurf einen Nachteil, wenn sie in der letzten Runde ein Tier oder eine Pflanze verletzt hat. Wenn das Ziel Schaden erleidet, kann es den Rettungswurf wiederholen und den Effekt bei einem Erfolg beenden. Die Kreatur kann diesen Wurf einmal machen und erhält die Fähigkeit, ihn nach einer kurzen oder langen Rast zu wiederholen.",
        "wirkung": {
          "fertigkeiten": [
            "Überzeugen"
          ]
        }
      },
      "Freund des Waldes": {
        "text": "Die Kreatur erhält einen Bonus auf ihre Initiative in Höhe ihres Übungsbonus. Wenn sie sich in einem Wald aufhält, erhält sie einen Vorteil auf Weisheitswürfe. Die Kreatur lernt die Zauber Mit Tieren sprechen und Mit Pflanzen sprechen und kann sie nach Belieben wirken, ohne materielle Komponenten zu verbrauchen. Ihr Modifikator für diese Zauber ist Weisheit, Intelligenz oder Charisma. Wähle das Attribut, wenn sie dieses Talent auswählt."
      }
    }
  },
  "Gebirgszwerge": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Gift"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "attribute": {
      "STR": 2,
      "CON": 1
    },
    "merkmale": [
      {
        "name": "Zwergische Unverwüstlichkeit",
        "text": "Die Kreatur ist bei Rettungswürfen gegen Gifte im Vorteil und besitzt Resistenz gegen Giftschaden."
      },
      {
        "name": "Zwergisches Kampftraining",
        "text": "Die Kreatur ist geübt im Umgang mit Streitäxten, Beilen, leichten Hämmern und Kriegshämmern."
      },
      {
        "name": "Handwerkliches Geschick",
        "text": "Die Kreatur ist geübt mit dem Werkzeug eines der folgenden Berufe (ihre Wahl): Braumeister, Schmied oder Steinmetz."
      },
      {
        "name": "Steingespür",
        "text": "Bei Intelligenz-(Geschichte)-Würfen zur Herkunft von Steinarbeiten wird sie als geübt angesehen und addiert ihren doppelten Übungsbonus."
      },
      {
        "name": "Zwergische Rüstungsvertrautheit",
        "text": "Die Kreatur ist geübt im Umgang mit leichten und mittelschweren Rüstungen."
      }
    ],
    "talente": [
      "Zwergische Tapferkeit",
      "Hockenstärke",
      "Der unerschütterliche Berg"
    ],
    "talentTexte": {
      "Zwergische Tapferkeit": {
        "text": "Die Kreatur hat einen Vorteil bei Todesrettungswürfen. Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Immer wenn sie im Kampf die Aktion Ausweichen ausführt, kann sie einen oder mehrere Trefferwürfel benutzen, um sich zu heilen. Wirf den Würfel, addiere ihren Konstitutionsmodifikator und erhalte eine Anzahl von Trefferpunkten zurück, die der Gesamtzahl entsprechen (mindestens 1).",
        "wirkung": {
          "tpProTW": 1
        }
      },
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Der unerschütterliche Berg": {
        "text": "Die Kreatur hat einen Vorteil bei Rettungswürfen gegen Verängstigung. Wenn sie gegen eine Kreatur kämpft, die größer ist als sie, kann sie, wenn sich ein Rettungswurf misslingt, stattdessen entscheiden, dass er gelingt. Nachdem sie diese Fähigkeit eingesetzt hat, muss sie eine lange Rast einlegen, bevor sie sie erneut einsetzen kann."
      }
    }
  },
  "Geppettin": {
    "kreaturentyp": null,
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": null,
    "varianten": {
      "Biskuit": {
        "attribute": {
          "DEX": 1,
          "CHA": 2
        },
        "groesse": [
          "Klein"
        ],
        "bewegung": {
          "Gehen": "7,5 m"
        },
        "merkmale": [
          {
            "name": "Spiegelglanz",
            "text": "1×/kurze Rast, wenn ein Täuschungswurf erkannt wird oder ein Angreifer sie für Beute hält: der Angreifer hat Nachteil auf seinen nächsten Angriffswurf gegen sie."
          }
        ]
      },
      "Marionette": {
        "attribute": {
          "DEX": 1,
          "STR": 1,
          "CHA": 1
        },
        "resistenzen": [
          "Wucht"
        ],
        "groesse": [
          "Klein"
        ],
        "bewegung": {
          "Gehen": "7,5 m"
        },
        "merkmale": [
          {
            "name": "Holzrobustheit",
            "text": "Resistenz gegen Wuchtschaden."
          }
        ]
      },
      "Zerlumpte": {
        "attribute": {
          "DEX": 1,
          "WIS": 1,
          "CHA": 1
        },
        "groesse": [
          "Klein"
        ],
        "bewegung": {
          "Gehen": "7,5 m"
        },
        "merkmale": [
          {
            "name": "Stofffaltung",
            "text": "Als Aktion kann sie sich auf Winzig-Größe zusammenfalten (Vorteil auf Heimlichkeit). Als Bonusaktion wieder entfalten. Kein Tragen von Ausrüstung im gefalteten Zustand."
          }
        ]
      }
    },
    "merkmale": [
      {
        "name": "Konstruktanatomie",
        "text": "Immun gegen nicht-magische Krankheiten. Die Kreatur muss weder essen noch atmen (kann es aber). Statt zu schlafen 4h inaktiver Zustand täglich — sie ist sich der Umgebung bewusst und nimmt herannahende Feinde wahr. Schlafauslösende Magie wirkt trotzdem."
      },
      {
        "name": "Harmlos",
        "text": "Die Kreatur hat Vorteil auf CHA-(Täuschung)-Würfe, um als gewöhnliches Spielzeug zu erscheinen."
      }
    ],
    "talente": [
      "Aufziehherz",
      "Starre Pose"
    ],
    "talentTexte": {
      "Aufziehherz": {
        "text": "Die Kreatur erhält Übung mit einem Handwerkszeug ihrer Wahl (die Spur ihres Schöpfers). Mit diesem Werkzeug kann sie sich als Aktion flicken: Sie heilt 1W8 + ihren Übungsbonus an Trefferpunkten. Das geht einmal pro kurze Rast."
      },
      "Starre Pose": {
        "text": "Als Bonusaktion kann die Kreatur in einer Pose erstarren. Solange sie sich nicht bewegt, erkennt niemand, dass sie lebt, es sei denn, er besteht einen Wurf auf Weisheit (Motiv erkennen) oder Intelligenz (Nachforschungen) gegen SG = 8 + Übungsbonus + Charismamodifikator der Kreatur. Sie bleibt sich bewusst, was um sie geschieht, und kann die Pose als Bonusaktion lösen."
      },
      "Teure Puppe": {
        "text": "Wer die Kreatur zum ersten Mal in einem Kampf angreift, muss einen Weisheitsrettungswurf (SG = 8 + Übungsbonus + Charismamodifikator der Kreatur) bestehen, sonst hat er Nachteil auf diesen Angriff. Das gilt einmal pro Kampf für jeden Angreifer."
      },
      "Fadenspiel": {
        "text": "Als Reaktion kann die Kreatur an ihren Fäden ziehen: Ein Verbündeter in 9 m, der angegriffen wird, wird bis zu 3 m weggezogen, ohne Gelegenheitsangriffe auszulösen. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      },
      "Füllung und Faden": {
        "text": "Die Kreatur erleidet nie Sturzschaden. Bei einer kurzen Rast mit Nähzeug heilen sie und ein weiterer Konstrukt je 1W6 zusätzliche Trefferpunkte."
      }
    },
    "quelle": "Valda's Spire of Secrets (Mage Hand Press); Wortlaut nicht gegen das Buch geprüft",
    "linienTalente": {
      "Biskuit": [
        "Teure Puppe"
      ],
      "Marionette": [
        "Fadenspiel"
      ],
      "Zerlumpte": [
        "Füllung und Faden"
      ]
    }
  },
  "Giff": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "STR": 2,
      "CON": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Astralfunke",
        "text": "Wenn sie ein Ziel mit einer einfachen oder kriegerischen Waffe trifft, kann sie das Ziel zusätzlichen Kraftschaden in Höhe ihres Übungsbonus erleiden lassen. Die Kreatur kann diesen Zug so oft nutzen, wie ihr Übungsbonus beträgt, aber nicht öfter als einmal pro Runde. Die Kreatur erhält alle verbrauchten Nutzungen zurück, wenn sie eine lange Rast beendet."
      },
      {
        "name": "Waffenmeisterschaft mit Schusswaffen",
        "text": "Die Kreatur hat Übung mit allen Schusswaffen und ignoriert die Ladeeigenschaft jeder Schusswaffe. Außerdem erleidet sie keinen Nachteil auf ihren Angriffswurf, wenn sie mit einer Schusswaffe auf große Entfernungen schießt."
      },
      {
        "name": "Nilpferdstatur",
        "text": "Die Kreatur hat Vorteil auf Stärke-basierte Eigenschaftswürfe und Stärkerettungswürfe. Außerdem gilt sie für die Bestimmung ihrer Tragekapazität und des Gewichts, das sie schieben, ziehen oder heben kann, als eine Größenkategorie größer."
      }
    ],
    "talente": [
      "Astrale Widerstandsfähigkeit",
      "Funkenteiler",
      "Nahkampfspezialist"
    ],
    "talentTexte": {
      "Astrale Widerstandsfähigkeit": {
        "text": "Ihr Trefferpunktmaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie dieses Talent erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktmaximum um zusätzlich 1 Trefferpunkt. Die Kreatur erhält Resistenz gegen psychischen Schaden und Kraftschaden. Die Kreatur erhält Vorteil auf Konstitutionswürfe und Rettungswürfe.",
        "wirkung": {
          "resistenzen": [
            "Psychisch"
          ]
        }
      },
      "Funkenteiler": {
        "text": "Ihr kritischer Trefferbereich für Angriffe erhöht sich um 1. Wenn sie einen kritischen Treffer landet, erhält sie 1 Nutzung ihres Zugs „Astralfunke“ zurück. Wenn sie einen Angriff macht und ihren Zug „Astralfunke“ verwendet, kann sie eine zweite Kreatur, die sich innerhalb einer Anzahl von Fuß, die ihrem Übungsbonus multipliziert mit fünf entspricht, befinden, dazu bringen, Kraftschaden in Höhe der Hälfte des Schadens zu erleiden, den der Angriff verursacht hat."
      },
      "Nahkampfspezialist": {
        "text": "Wenn sie sich innerhalb von 1,5 Metern (5 Fuß) eines Feindes befindet, erleiden ihre Angriffe mit Schusswaffen keinen Nachteil. Wenn sie einen Nahkampfwaffenangriff mit einer Waffe macht, die sie in einer Hand führt, kann sie eine geladene Schusswaffe in ihrer anderen Hand auf dasselbe Ziel abfeuern. Die Kreatur kann dies nur einmal pro Runde tun. Wenn sie sich in Nahkampfreichweite eines Ziels befindet und mit einem Angriff verfehlt, erhält sie einen kumulativen +1-Bonus auf ihre Angriffswürfe. Dieser Bonus stapelt sich, bis sie trifft oder den Kampf beginnt oder beendet."
      }
    }
  },
  "Githyanki": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [
      "Psychisch"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "STR": 2,
      "INT": 1
    },
    "merkmale": [
      {
        "name": "Psychische Unverwüstlichkeit",
        "text": "Die Kreatur ist gegen psychischen Schaden resistent."
      },
      {
        "name": "Githyanki-Psionik",
        "text": "Die Kreatur kennt den Zaubertrick Magierhand (die Hand ist unsichtbar). Ab Stufe 3: Springen 1×/langer Rast. Ab Stufe 5: Nebelschritt 1×/langer Rast. Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Astrales Wissen",
        "text": "Wenn sie eine lange Rast beendet, projiziert sie ihr Bewusstsein kurz in die Astralebene. Die Kreatur ist bis zum Ende der nächsten langen Rast in einer Fertigkeit sowie mit einer Waffe oder einem Werkzeug ihrer Wahl (aus dem Spielerhandbuch) geübt."
      }
    ],
    "talente": [
      "Verbesserte Gith-Psionik",
      "Gedankenklingen",
      "Astralkonstitution"
    ],
    "talentTexte": {
      "Verbesserte Gith-Psionik": {
        "text": "Die Kreatur erlernt den Zaubertrick Gedankensplitter. Die Kreatur erlernt außerdem den Zauber Intellektfestung, den sie einmal wirken kann, ohne einen Zauberplatz zu verbrauchen; diese Fähigkeit kehrt nach einer langen Rast zurück. Ihr Zauberfähigkeitsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Weder diese Zauber noch ihre Rassenfähigkeiten benötigen verbale oder somatische Komponenten, und auch keine materiellen Komponenten, es sei denn, sie werden durch den Zauber verbraucht."
      },
      "Gedankenklingen": {
        "text": "Wenn sie Nahkampfwaffen ohne die Eigenschaft Reichweite führt, kann sie diese mit ihrer Psionik schweben lassen. Wenn sie in ihrem Zug einen Nahkampfangriff ausführt, beträgt ihre Reichweite dabei 1,5 m mehr als sonst. Solange sie ihre Waffe schweben lässt, kann sie ihren Intelligenzmodifikator statt Stärke oder Geschicklichkeit für den Angriffs- und Schadenswurf verwenden. Wenn sie eine Kreatur in ihrem Zug mit einem physischen Waffenangriff trifft, kann sie dieses Merkmal verwenden, um dem Ziel zusätzlich 1W6 psychischen Schaden zuzufügen. Dieser Schaden erhöht sich mit jeder Stufe: auf der 6. Stufe auf 1W8, auf der 11. Stufe auf 1W10 und auf der 16. Stufe auf 1W12."
      },
      "Astralkonstitution": {
        "text": "Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie dieses Talent erlangt. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Würde sie psychischen Schaden erleiden, kann sie ihre Reaktion verwenden, um einen Schadenswurf zu widerstehen. Die Kreatur erhält keinen Schaden durch diesen Schadenswurf. Die Kreatur kann diese Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht, und sie erhält alle verbrauchten Einsätze zurück, wenn sie eine lange Rast beendet. Diese Eigenschaft kann in bestimmten Situationen, nach Ermessen des Spielleiters, fehlschlagen. Die Kreatur erhält einen Vorteil bei Rettungswürfen gegen Gedankenlesen. Die Kreatur wird immun gegen kritische Treffer. Wenn ein Treffer ein kritischer Treffer sein sollte, wird er stattdessen zu einem normalen Treffer.",
        "wirkung": {
          "tpProTW": 1
        }
      }
    }
  },
  "Githzerai": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [
      "Psychisch"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "WIS": 2,
      "INT": 1
    },
    "merkmale": [
      {
        "name": "Psychische Unverwüstlichkeit",
        "text": "Die Kreatur ist gegen psychischen Schaden resistent."
      },
      {
        "name": "Githzerai-Psionik",
        "text": "Die Kreatur kennt den Zaubertrick Magierhand (die Hand ist unsichtbar). Ab Stufe 3: Schild 1×/langer Rast. Ab Stufe 5: Gedanken wahrnehmen 1×/langer Rast. Beide Zauber können auch mit Zauberplätzen gewirkt werden. Für keinen dieser Zauber sind Materialkomponenten erforderlich, wenn sie sie mit diesem Merkmal wirkt. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Mentale Disziplin",
        "text": "Dank ihrer psychischen Abwehrfähigkeit ist sie bei Rettungswürfen gegen die Zustände Bezaubert und Verängstigt sowie zu deren Aufhebung bei sich selbst im Vorteil."
      }
    ],
    "talente": [
      "Verbesserte Gith-Psionik",
      "Gedankenklingen",
      "Ebenenwahrnehmung"
    ],
    "talentTexte": {
      "Verbesserte Gith-Psionik": {
        "text": "Die Kreatur erlernt den Zaubertrick Gedankensplitter. Die Kreatur erlernt außerdem den Zauber Intellektfestung, den sie einmal wirken kann, ohne einen Zauberplatz zu verbrauchen; diese Fähigkeit kehrt nach einer langen Rast zurück. Ihr Zauberfähigkeitsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Weder diese Zauber noch ihre Rassenfähigkeiten benötigen verbale oder somatische Komponenten, und auch keine materiellen Komponenten, es sei denn, sie werden durch den Zauber verbraucht."
      },
      "Gedankenklingen": {
        "text": "Wenn sie Nahkampfwaffen ohne die Eigenschaft Reichweite führt, kann sie diese mit ihrer Psionik schweben lassen. Wenn sie in ihrem Zug einen Nahkampfangriff ausführt, beträgt ihre Reichweite dabei 1,5 m mehr als sonst. Solange sie ihre Waffe schweben lässt, kann sie ihren Intelligenzmodifikator statt Stärke oder Geschicklichkeit für den Angriffs- und Schadenswurf verwenden. Wenn sie eine Kreatur in ihrem Zug mit einem physischen Waffenangriff trifft, kann sie dieses Merkmal verwenden, um dem Ziel zusätzlich 1W6 psychischen Schaden zuzufügen. Dieser Schaden erhöht sich mit jeder Stufe: auf der 6. Stufe auf 1W8, auf der 11. Stufe auf 1W10 und auf der 16. Stufe auf 1W12."
      },
      "Ebenenwahrnehmung": {
        "text": "Die Kreatur erhält Dunkelheitssicht von 27 m und Blindsicht von 1,5 m. Die Kreatur erhält Übung in Weisheit (Wahrnehmung) oder Intelligenz (Nachforschung). Schummriges Licht verursacht keinen Nachteil bei Weisheitsproben (Wahrnehmung) oder Intelligenzproben (Nachforschung), die sich auf ihre Sicht verlassen."
      }
    }
  },
  "Gnoll": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": null,
    "varianten": {
      "Zivilisierter Gnoll": {
        "attribute": {
          "STR": 2,
          "CON": 1
        },
        "groesse": [
          "Mittelgroß"
        ],
        "bewegung": {
          "Gehen": "9 m"
        },
        "merkmale": [
          {
            "name": "Unterwürfig",
            "text": "Bei Überzeugung gegenüber offensichtlich Mächtigeren gilt doppelter Übungsbonus statt normalem."
          }
        ]
      },
      "Wilder Gnoll": {
        "attribute": {
          "STR": 2,
          "WIS": 1
        },
        "groesse": [
          "Mittelgroß"
        ],
        "bewegung": {
          "Gehen": "9 m"
        },
        "merkmale": [
          {
            "name": "Aassuche",
            "text": "Bei Überleben zum Sammeln von Nahrung oder Auffinden von Wasser gilt doppelter Übungsbonus statt normalem."
          }
        ]
      },
      "Wüstengnoll": {
        "attribute": {
          "STR": 2,
          "CHA": 1
        },
        "resistenzen": [
          "Feuer"
        ],
        "groesse": [
          "Mittelgroß"
        ],
        "bewegung": {
          "Gehen": "9 m"
        },
        "merkmale": [
          {
            "name": "Hitzetoleranz",
            "text": "Resistenz gegen Feuerschaden. Die Kreatur kann dreimal so lange ohne Wasser auskommen wie die meisten Humanoiden."
          }
        ]
      },
      "Nekropolengnoll": {
        "attribute": {
          "STR": 2,
          "DEX": 1
        },
        "resistenzen": [
          "Nekrotisch"
        ],
        "groesse": [
          "Mittelgroß"
        ],
        "bewegung": {
          "Gehen": "9 m"
        },
        "merkmale": [
          {
            "name": "Unter den Toten",
            "text": "Resistenz gegen nekrotischen Schaden."
          },
          {
            "name": "Fluchtrotzigkeit",
            "text": "Vorteil auf Rettungswürfe gegen Flüche."
          }
        ]
      }
    },
    "merkmale": [
      {
        "name": "Geruchssinn",
        "text": "Die Kreatur hat Vorteil auf Weisheit-(Wahrnehmungs)-Würfe, die auf Geruch beruhen."
      },
      {
        "name": "Tyrann",
        "text": "Die Kreatur hat Nachteil auf Rettungswürfe gegen Furcht. Wenn sie einen CHA-(Einschüchterungs)-Wurf gegenüber offensichtlich kleineren oder schwächeren Zielen macht, gilt doppelter Übungsbonus statt normalem."
      },
      {
        "name": "Weiterleben um einen anderen Tag zu kämpfen",
        "text": "Wenn sie die Ausscheren-Aktion ausführt, erhöht sich ihre Gehgeschwindigkeit um 3 Meter."
      },
      {
        "name": "Gnoll-Waffenausbildung",
        "text": "Die Kreatur hat Übung mit Speer, Kurzbogen, Langbogen, leichter Armbrust und schwerer Armbrust."
      }
    ],
    "talente": [
      "Lachen der Hyäne",
      "Aasmagen"
    ],
    "talentTexte": {
      "Lachen der Hyäne": {
        "text": "Als Aktion kann die Kreatur ein gellendes Lachen ausstoßen. Jede Kreatur in 9 m, die sie hören kann, muss einen Weisheitsrettungswurf ablegen (SG = 8 + Übungsbonus + Charismamodifikator der Kreatur), sonst ist sie bis zum Ende ihres nächsten Zuges verängstigt. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      },
      "Aasmagen": {
        "text": "Die Kreatur hat Vorteil auf Rettungswürfe gegen Gift und Krankheiten, die durch Nahrung oder Getränke übertragen werden. Verdorbenes Fleisch zählt für sie als volle Mahlzeit. Frisst sie bei einer kurzen Rast mindestens 500 g Fleisch, erhält sie 1W6 Trefferpunkte zurück."
      },
      "Weltgewandt": {
        "text": "Die Kreatur lernt zwei zusätzliche Sprachen ihrer Wahl und erhält Übung in Charisma (Auftreten) oder Intelligenz (Geschichte); hat sie beides schon, erhält sie Expertise in einer davon. Sie erkennt an Kleidung, Haltung und Wortwahl Rang und Stellung einer Person und hat Vorteil auf Würfe auf Weisheit (Motiv erkennen) gegen Mächtigere."
      },
      "Blutrausch": {
        "text": "Bringt die Kreatur eine Kreatur auf 0 Trefferpunkte, kann sie als Bonusaktion bis zur Hälfte ihrer Bewegungsrate laufen und einen Angriff mit ihrem Biss machen. Das geht einmal pro Zug."
      },
      "Sandwitterung": {
        "text": "Die Kreatur spürt Wasser unter Sand und Erde in 9 m Umkreis. Sie hat Vorteil auf Würfe auf Weisheit (Überleben) in Wüsten und trockenen Gebieten, und Sand und Staub in der Luft verursachen bei ihr keinen Nachteil auf Würfe auf Wahrnehmung."
      },
      "Gräberräubersinn": {
        "text": "Die Kreatur spürt Untote und Grabstätten in 18 m Umkreis, auch durch Wände. Sie hat Vorteil auf Würfe auf Wahrnehmung und Nachforschungen in Gräbern, Gruften und Katakomben sowie auf Rettungswürfe gegen Furcht, die von Untoten ausgelöst wird."
      }
    },
    "quelle": "keine Quelle gefunden; eigene Fassung",
    "linienTalente": {
      "Zivilisierter Gnoll": [
        "Weltgewandt"
      ],
      "Wilder Gnoll": [
        "Blutrausch"
      ],
      "Wüstengnoll": [
        "Sandwitterung"
      ],
      "Nekropolengnoll": [
        "Gräberräubersinn"
      ]
    }
  },
  "Goblins": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "DEX": 2,
      "CON": 1
    },
    "merkmale": [
      {
        "name": "Feenblut",
        "text": "Die Kreatur ist bei Rettungswürfen gegen den Bezaubert-Zustand sowie zu dessen Aufhebung bei sich selbst im Vorteil."
      },
      {
        "name": "Behändes Entkommen",
        "text": "In jedem ihrer Züge kann sie Rückzug oder Verstecken als Bonusaktion ausführen."
      },
      {
        "name": "Zorn der kleinen Leute",
        "text": "Wenn sie mit einem Angriff oder Zauber einer Kreatur, die größer ist als sie, Schaden zufügt, richtet sie zusätzlichen Schaden in Höhe ihres Übungsbonus an. Anwendungen pro langer Rast entsprechen ihrem Übungsbonus. Maximal einmal pro Runde."
      }
    ],
    "talente": [
      "Hockenstärke",
      "Kriegsgeboren",
      "Trickster-Geist"
    ],
    "talentTexte": {
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Kriegsgeboren": {
        "text": "Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Die Kreatur erhält Übung in einer Waffe, einem Werkzeug und lernt eine Sprache ihrer Wahl. Die Kreatur erhält einen Vorteil bei Rettungswürfen gegen Verzauberung oder Verängstigung.",
        "wirkung": {
          "tpProTW": 1
        }
      },
      "Trickster-Geist": {
        "text": "Die Kreatur erhält Übung in Charisma (Überzeugen) und Charisma (Täuschen). Wenn sie Schaden nimmt, kann sie ihre Reaktion nutzen, um einen Trefferwürfel zu werfen und den erlittenen Schaden um den gewürfelten Betrag + ihren Konstitutionsmodifikator zu reduzieren. Wenn sie dadurch den erlittenen Schaden auf Null reduziert, erhält sie eine Anzahl von temporären Trefferpunkten in Höhe ihres Konstitutionsmodifikators. Die Kreatur erlernt den Zauber Spiegelbild und kann ihn einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Ihr Zauberfähigkeitsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt.",
        "wirkung": {
          "fertigkeiten": [
            "Täuschen",
            "Überzeugen"
          ]
        }
      }
    }
  },
  "Goliaths": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [
      "Kälte"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "STR": 2,
      "CON": 1
    },
    "merkmale": [
      {
        "name": "Gebirgsgänger",
        "text": "Die Kreatur ist gegen Kälteschaden resistent. Außerdem kann sie sich auf große Höhen einstellen, ohne je dort gewesen zu sein — bis zu 6.000 m Höhe."
      },
      {
        "name": "Kleiner Riese",
        "text": "Die Kreatur ist in Athletik geübt und zählt eine Größenkategorie größer, wenn ihre Traglast sowie das Gewicht bestimmt wird, das sie schieben, ziehen oder anheben kann."
      },
      {
        "name": "Steinhärte",
        "text": "Wenn sie Schaden erleidet, kann sie als Reaktion einen W12 werfen. Füge ihren Konstitutionsmodifikator hinzu und ziehe die Summe vom erlittenen Schaden ab. Anwendungen pro langer Rast: gleich ihrem Übungsbonus."
      }
    ],
    "talente": [
      "Athletische Perfektion",
      "Angeborene Wut",
      "Segen der Berge"
    ],
    "talentTexte": {
      "Athletische Perfektion": {
        "text": "Die Kreatur erlangt Expertise in Stärke (Athletik). Wenn sie die Aktion Spurt ausführt, kann sie sich bis zum Dreifachen ihrer Bewegungsrate bewegen, anstatt dem Doppelten ihrer Bewegungsrate. Die Kreatur hat einen Vorteil bei Attributswürfen auf Stärke."
      },
      "Angeborene Wut": {
        "text": "Wenn sie einen Angriff mit einer Nahkampfwaffe mit Stärke ausführt, addiert sie ihren Übungsbonus zum verursachten Schaden. Als Reaktion auf Hieb-, Stich- oder Wuchtschaden kann sie diesen Schaden um die Hälfte reduzieren. Die Kreatur kann dies nur dreimal tun, dann endet ihre Wut. Ihre Bewegungsrate erhöht sich um 1,5 Meter, wenn sie keine schwere Rüstung trägt. Wenn sie auf 0 Trefferpunkte fällt, aber nicht sofort stirbt, kann sie stattdessen auf 1 Trefferpunkt fallen. Unabhängig davon, ob sie sich entscheidet, auf 1 Trefferpunkt zu fallen oder nicht, endet ihre Wut. Wenn sie in der Lage ist, Zauber zu wirken, kann sie sie während ihres Zorns weder wirken noch sich darauf konzentrieren.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Segen der Berge": {
        "text": "Die Kreatur erhält Übung in Weisheit (Religion). Wenn sie bereits Übung hat, erhält sie Expertise. Die Kreatur erlernt den Zaubertrick Erde formen. Die Kreatur erlernt außerdem den Zauber Erdrütteln. Die Kreatur kann diesen Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Ihr Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Wenn sie einen Rettungswurf gegen einen magischen Effekt macht, darf sie den Würfelwurf wiederholen. Die Kreatur kann dies tun, nachdem sie den Wurf gesehen hat, aber bevor sie das Ergebnis kennt. Die Kreatur kann diese Fähigkeit nach einer langen Rast wieder einsetzen.",
        "wirkung": {
          "fertigkeiten": [
            "Religion"
          ]
        }
      }
    }
  },
  "Grauzwerge": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "resistenzen": [
      "Gift"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "STR": 1,
      "CON": 2
    },
    "merkmale": [
      {
        "name": "Zwergische Unverwüstlichkeit",
        "text": "Die Kreatur ist bei Rettungswürfen gegen Gifte im Vorteil und besitzt Resistenz gegen Giftschaden."
      },
      {
        "name": "Zwergisches Kampftraining",
        "text": "Die Kreatur ist geübt im Umgang mit Streitäxten, Beilen, leichten Hämmern und Kriegshämmern."
      },
      {
        "name": "Handwerkliches Geschick",
        "text": "Die Kreatur ist geübt mit dem Werkzeug eines der folgenden Berufe (ihre Wahl): Braumeister, Schmied oder Steinmetz."
      },
      {
        "name": "Steingespür",
        "text": "Bei Intelligenz-(Geschichte)-Würfen zur Herkunft von Steinarbeiten wird sie als geübt angesehen und addiert ihren doppelten Übungsbonus."
      },
      {
        "name": "Grauzwerg-Magie",
        "text": "Stufe 3: Vergrößern/Verkleinern auf sie selbst 1×/langer Rast (keine Materialkomponenten, oder mit Zauberplatz). Stufe 5: Unsichtbarkeit auf sie selbst 1×/langer Rast. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Psionische Ausdauer",
        "text": "Die Kreatur ist bei Rettungswürfen gegen die Zustände Bezaubert und Betäubt sowie zu deren Aufhebung bei sich selbst im Vorteil."
      }
    ],
    "talente": [
      "Zwergische Tapferkeit",
      "Hockenstärke",
      "Meister der Grauzwerg-Magie"
    ],
    "talentTexte": {
      "Zwergische Tapferkeit": {
        "text": "Die Kreatur hat einen Vorteil bei Todesrettungswürfen. Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Immer wenn sie im Kampf die Aktion Ausweichen ausführt, kann sie einen oder mehrere Trefferwürfel benutzen, um sich zu heilen. Wirf den Würfel, addiere ihren Konstitutionsmodifikator und erhalte eine Anzahl von Trefferpunkten zurück, die der Gesamtzahl entsprechen (mindestens 1).",
        "wirkung": {
          "tpProTW": 1
        }
      },
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Meister der Grauzwerg-Magie": {
        "text": "Die Kreatur erhält zusätzliche Anwendungen für ihr Merkmal Grauzwerg-Magie. Die Kreatur kann Zauber mit diesem Merkmal jeweils so oft wirken, wie es ihrem Übungsbonus entspricht, und sie erhält alle verbrauchten Aufladungen beim Beenden einer kurzen Rast zurück. Zusätzlich lernt sie die Zauber Befehl und Zorniges Niederstrecken. Die Kreatur kann diese wie ihre anderen Zauber des Merkmals Grauzwerg-Magie wirken."
      }
    }
  },
  "Grottenschrate": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "STR": 2,
      "DEX": 1
    },
    "merkmale": [
      {
        "name": "Feenblut",
        "text": "Die Kreatur ist bei Rettungswürfen gegen den Bezaubert-Zustand sowie zu dessen Aufhebung bei sich selbst im Vorteil."
      },
      {
        "name": "Lange Gliedmaßen",
        "text": "Wenn sie in einem Zug einen Nahkampfangriff ausführt, beträgt ihre Reichweite dabei 1,5 m mehr als sonst."
      },
      {
        "name": "Starker Körperbau",
        "text": "Die Kreatur zählt als eine Größenkategorie größer für die Bestimmung ihrer Traglast sowie des Gewichts, das sie schieben, ziehen oder anheben kann."
      },
      {
        "name": "Unauffällig",
        "text": "Die Kreatur ist in der Heimlichkeits-Fertigkeit geübt. Außerdem kann sie sich durch Bereiche bewegen und in ihnen aufhalten, in die eigentlich höchstens eine kleine Kreatur passt, ohne quetschen zu müssen."
      },
      {
        "name": "Überraschungsangriff",
        "text": "Wenn sie eine Kreatur mit einem Angriffswurf trifft, die im aktuellen Kampf noch nicht am Zug war, erleidet sie zusätzlich 2W6 Schaden."
      }
    ],
    "talente": [
      "Kriegsgeboren",
      "Greifende Glieder",
      "Brutale Gewalt"
    ],
    "talentTexte": {
      "Kriegsgeboren": {
        "text": "Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Die Kreatur erhält Übung in einer Waffe, einem Werkzeug und lernt eine Sprache ihrer Wahl. Die Kreatur erhält einen Vorteil bei Rettungswürfen gegen Verzauberung oder Verängstigung.",
        "wirkung": {
          "tpProTW": 1
        }
      },
      "Greifende Glieder": {
        "text": "Die Kreatur hat einen Vorteil, wenn sie würfelt, um eine Kreatur zu packen, und Kreaturen haben einen Nachteil, wenn sie würfeln, um ihren Griffen zu entkommen. Die Kreatur kann bis zu zwei Kreaturen auf einmal festhalten. Wenn sie versucht, eine dritte zu greifen, werden die beiden anderen befreit. Die Kreatur kann ihren Übungsbonus zum Schadenswurf gegen jede Kreatur addieren, die sie im Griff hat."
      },
      "Brutale Gewalt": {
        "text": "Ihre Reichweite für kritische Treffer erhöht sich um 1. Wenn sie einen Angriff mit einer Nahkampfwaffe gegen eine Kreatur ausführt, kann sie sich entscheiden, dies mit Vorteil zu tun. Wenn der Angriff trifft, wirft sie einen der Schadenswürfel der Waffe ein weiteres Mal und addiert ihn als zusätzlichen Schaden. Die Kreatur kann diese Fähigkeit einmal pro lange Rast einsetzen."
      }
    }
  },
  "Grung": {
    "kreaturentyp": null,
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "7,5 m",
      "Klettern": "7,5 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [
      "Gift"
    ],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "CON": 1
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Amphibisch",
        "text": "Die Kreatur kann Luft und Wasser atmen."
      },
      {
        "name": "Arboreale Wachsamkeit",
        "text": "Die Kreatur hat Übung in der Fertigkeit Wahrnehmung."
      },
      {
        "name": "Giftimmunität",
        "text": "Die Kreatur ist immun gegen Giftschaden und den Zustand Vergiftet."
      },
      {
        "name": "Giftige Haut",
        "text": "Jede Kreatur, die die Kreatur packt oder ihre Haut direkt berührt, muss einen Konstitutionsrettungswurf bestehen (SG = 8 + Übungsbonus + Konstitutionsmodifikator der Kreatur), sonst ist sie 1 Minute lang vergiftet. Eine vergiftete Kreatur ohne Hautkontakt wiederholt den Wurf am Ende ihrer Züge und beendet den Effekt bei einem Erfolg."
      },
      {
        "name": "Standsprung",
        "text": "Der Weitsprung der Kreatur beträgt bis zu 7,5 m, der Hochsprung bis zu 4,5 m, auch ohne Anlauf."
      },
      {
        "name": "Wasserabhängigkeit",
        "text": "Verbringt die Kreatur an einem Tag nicht mindestens eine Stunde im Wasser, erhält sie am Ende des Tages 1 Stufe Erschöpfung."
      },
      {
        "name": "Klettern",
        "text": "Die Kreatur hat eine Kletterbewegungsrate von 7,5 m."
      }
    ],
    "talente": [
      "Froschsprung",
      "Warnfarbe",
      "Feuchte Haut"
    ],
    "talentTexte": {
      "Froschsprung": {
        "text": "Als Bonusaktion kann die Kreatur bis zu 6 m auf eine Kreatur zuspringen, die sie sehen kann. Ihr nächster Nahkampfangriff in diesem Zug hat Vorteil. Ist das Ziel höchstens mittelgroß, muss es einen Stärkerettungswurf ablegen (SG = 8 + Übungsbonus + Konstitutionsmodifikator der Kreatur), sonst wird es umgeworfen. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      },
      "Warnfarbe": {
        "text": "Greift eine Kreatur die Kreatur an, kann sie als Reaktion ihre Haut aufleuchten lassen. Das Ziel muss einen Weisheitsrettungswurf ablegen (SG = 8 + Übungsbonus + Konstitutionsmodifikator der Kreatur), sonst hat es Nachteil auf diesen Angriff. Das geht einmal pro kurze Rast."
      },
      "Feuchte Haut": {
        "text": "Regen, Nebel und Gischt zählen für die Wasserabhängigkeit der Kreatur voll als Eintauchen. Sie hat Vorteil auf Würfe auf Heimlichkeit in Regen, Nebel oder an feuchten Orten."
      }
    },
    "quelle": "One Grung Above (Wizards of the Coast, 2017); Wortlaut der Merkmale nicht gegen das Dokument geprüft, Giftige Haut als Berührungsversion"
  },
  "Hadozee": {
    "kreaturentyp": null,
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m",
      "Klettern": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "WIS": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Greiffüße",
        "text": "Als Bonusaktion kann die Kreatur mit den Füßen einen Gegenstand handhaben, eine Tür oder einen Behälter öffnen oder schließen oder einen winzigen Gegenstand aufheben oder ablegen."
      },
      {
        "name": "Gleiten",
        "text": "Fällt die Kreatur und ist nicht handlungsunfähig, kann sie als Reaktion gleiten: Sie erleidet keinen Sturzschaden und kann sich pro 1 m Fall bis zu 1,5 m waagerecht bewegen. In mittlerer oder schwerer Rüstung kann sie nicht gleiten."
      },
      {
        "name": "Hadozee-Ausweichen",
        "text": "Erleidet die Kreatur Schaden, kann sie als Reaktion 1W6 würfeln und den Schaden um das Ergebnis + ihren Übungsbonus senken. Das geht so oft, wie es dem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      }
    ],
    "talente": [
      "Sturzflug",
      "Fußfänger",
      "Federbeine"
    ],
    "talentTexte": {
      "Sturzflug": {
        "text": "Ist die Kreatur mindestens 3 m gefallen oder geglitten und trifft sie danach mit einem Nahkampfangriff, richtet sie zusätzlich 1W6 Wuchtschaden an. Dieser Angriff gilt als Teil ihrer Bewegung des Gleitens und kostet keine Aktion (einmal pro Zug)."
      },
      "Fußfänger": {
        "text": "Wird die Kreatur von einem Fernkampfangriff getroffen, kann sie als Reaktion das Geschoss mit den Füßen fangen und den Schaden um 1W10 + ihren Geschicklichkeitsmodifikator senken. Fällt der Schaden dadurch auf 0, kann sie das Geschoss als Teil der Reaktion zurückwerfen (Fernkampfangriff)."
      },
      "Federbeine": {
        "text": "Der Weitsprung der Kreatur ist um 3 m länger, auch ohne Anlauf. Als Bonusaktion kann sie sich bis zu 4,5 m weit in einem Sprung bewegen, ohne Gelegenheitsangriffe auszulösen. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      }
    },
    "quelle": "Spelljammer: Adventures in Space (Wizards of the Coast, 2022); Wortlaut nicht gegen das Buch geprüft"
  },
  "Halbelfen": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "attribute": {
      "CHA": 2,
      "DEX": 1
    },
    "merkmale": [
      {
        "name": "Feenblut",
        "text": "Die Kreatur ist bei Rettungswürfen gegen Bezauberungen im Vorteil und immun gegen magischen Schlaf."
      },
      {
        "name": "Vielseitigkeit",
        "text": "Die Kreatur ist in 2 Fertigkeiten ihrer Wahl geübt."
      }
    ],
    "talente": [
      "Wunderkind",
      "Elfische Treffsicherheit",
      "Freund der Welt"
    ],
    "talentTexte": {
      "Wunderkind": {
        "text": "Die Kreatur erhält Übung in einer Fertigkeit ihrer Wahl, einer Werkzeugfertigkeit ihrer Wahl und fließende Kenntnisse in einer Sprache ihrer Wahl. Wähle eine Fertigkeit, in der sie geübt ist. Die Kreatur erlangt Expertise in dieser Fertigkeit. Die Kreatur kann sich auf bis zu 4 magische Gegenstände einstimmen, anstatt der normalen 3."
      },
      "Elfische Treffsicherheit": {
        "text": "Jedes Mal, wenn sie mit einem Angriff trifft, der kein kritischer Treffer ist, erhöht sich ihre Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis sie einen kritischen Treffer landet, einen Angriff verfehlt oder den Kampf betritt oder verläst; danach wird er auf ihren Standardwert zurückgesetzt. Immer wenn sie bei einem Angriffswurf einen Vorteil hat, kann sie einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      },
      "Freund der Welt": {
        "text": "Die Kreatur erlernt den Zaubertrick Freundschaft. Charisma ist ihr Attributsmodifikator für diesen Zauberspruch. Die Kreatur lernt eine Sprache ihrer Wahl. Die Kreatur erhält Übung auf Charisma (Täuschen) und Charisma (Überzeugen). Wenn sie bereits Übung in diesen Fertigkeiten hat, erhält sie Expertise. Die Kreatur erhält einen Vorteil bei Attributswürfen auf Charisma, mit jedem, der sich gegenüber nicht feindlich gesinnt ist, sich vor sich in Acht nimmt, oder Angst vor sich hat."
      }
    }
  },
  "Halborks": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "STR": 2,
      "CON": 1
    },
    "merkmale": [
      {
        "name": "Bedrohlich",
        "text": "Die Kreatur ist in der Fertigkeit Einschüchtern geübt."
      },
      {
        "name": "Durchhaltevermögen",
        "text": "Wenn ihre Trefferpunkte auf 0 fallen und sie nicht stirbt, kann sie sie auf 1 setzen. 1×/langer Rast."
      },
      {
        "name": "Wilde Angriffe",
        "text": "Erzielt sie einen kritischen Treffer mit einer Nahkampfwaffe, kann sie einen der Schadenswürfel der Waffe erneut würfeln und das Ergebnis zum Zusatzschaden des kritischen Treffers addieren."
      }
    ],
    "talente": [
      "Wunderkind",
      "Orkische Macht",
      "Körper aus Stahl"
    ],
    "talentTexte": {
      "Wunderkind": {
        "text": "Die Kreatur erhält Übung in einer Fertigkeit ihrer Wahl, einer Werkzeugfertigkeit ihrer Wahl und fließende Kenntnisse in einer Sprache ihrer Wahl. Wähle eine Fertigkeit, in der sie geübt ist. Die Kreatur erlangt Expertise in dieser Fertigkeit. Die Kreatur kann sich auf bis zu 4 magische Gegenstände einstimmen, anstatt der normalen 3."
      },
      "Orkische Macht": {
        "text": "Wenn sie mit einem Angriff mit einer einfachen oder einer Kriegswaffe trifft, kann sie einen der Schadenswürfel der Waffe ein weiteres Mal werfen und ihn als zusätzlichen Schaden hinzufügen. Die Kreatur kann diese Fähigkeit so oft einsetzen, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Wenn sie eine Kreatur mit einem Waffenangriff trifft, erhält sie temporäre Trefferpunkte in Höhe ihres Übungsbonus. Unmittelbar nachdem sie ihre Eigenschaft Durchhaltevermögen eingesetzt hat, kann sie ihre Reaktion nutzen, um einen Waffenangriff durchzuführen."
      },
      "Körper aus Stahl": {
        "text": "Die Kreatur erhält einen Vorteil bei Konstitutionsrettungswürfen. Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Wenn ein Angreifer, den sie sehen kann, sich mit einem Angriff trifft, kann sie ihre Reaktion nutzen, um den Hieb-, Stich- und Wuchtschaden dieses Angriffs zu halbieren.",
        "wirkung": {
          "tpProTW": 1
        }
      }
    }
  },
  "Harengons": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "DEX": 2,
      "CHA": 1
    },
    "merkmale": [
      {
        "name": "Gute Beinarbeit",
        "text": "Wenn sie bei einem Geschicklichkeitsrettungswurf scheitert, kann sie als Reaktion 1W4 würfeln und das Ergebnis zum Rettungswurf addieren. Nicht einsetzbar wenn sie liegt oder ihre Bewegungsrate 0 ist."
      },
      {
        "name": "Hasenelan",
        "text": "Die Kreatur kann ihren Initiativewürfen ihren Übungsbonus hinzufügen."
      },
      {
        "name": "Hasensinne",
        "text": "Die Kreatur ist in der Wahrnehmungs-Fertigkeit geübt."
      },
      {
        "name": "Hasensprung",
        "text": "Als Bonusaktion springt sie Übungsbonus × 1,5 m, ohne Gelegenheitsangriffe zu provozieren. Anwendungen pro langer Rast entsprechen ihrem Übungsbonus. Nur einsetzbar wenn Bewegungsrate > 0."
      }
    ],
    "talente": [
      "Freudiger Hüpfer",
      "Fluchtreflex",
      "Hockenstärke"
    ],
    "talentTexte": {
      "Freudiger Hüpfer": {
        "text": "Wenn sie die Initiative würfelt, kann sie einen Wurf von 9 oder weniger als 10 behandeln. Wenn sie die Initiative würfelt, darf sie ihre Reaktion nutzen, um sich bis zu ihrer Schrittgeschwindigkeit zu bewegen und dann eine Aktion oder eine Bonusaktion durchzuführen. Wenn sie einen Zauber wirkt, muss es ein Zauber mit einer Wirkzeit von 1 Aktion sein, der nur auf eine Kreatur zielt. Wenn sie auf eine feindliche Kreatur zielt, muss das Ziel eine niedrigere Initiative haben als sie. Wenn sie sich auf diese Weise bewegt, provoziert sie keine Gelegenheitsangriffe. Die Kreatur kann dies so oft tun, wie es ihrem Übungsbonus entspricht; danach muss sie eine lange Rast einlegen, bevor sie es wieder tun kann."
      },
      "Fluchtreflex": {
        "text": "Wenn sie für die Initiative würfelt, ohne eine Nutzung von Hasensprung zu haben, erhält sie einen Einsatz dieser Eigenschaft zurück. Wenn sie die Hälfte ihrer maximalen Trefferpunkte oder weniger hat, erhöht sich ihre Bewegungsrate um die Hälfte ihrer maximalen Bewegungsrate. Wenn sich eine Kreatur in einem Umkreis von 1,5 m um sich bewegt, kann sie ihre Reaktion nutzen und einen Einsatz ihrer Eigenschaft Hasensprung verwenden, um bis zu einer Anzahl von Metern zu springen, die dem Fünffachen ihres Übungsbonus entspricht, ohne Gelegenheitsangriffe zu provozieren. Die Kreatur kann diese Eigenschaft nur verwenden, wenn sie noch Bewegungsrate übrig hat."
      },
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      }
    }
  },
  "Hexblute": {
    "kreaturentyp": "Feenwesen",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CHA": 2,
      "CON": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Erbe",
        "text": "Die Kreatur behält alle Fertigkeiten, in denen ihre vorherige Rasse geübt ist, sowie besondere Bewegungsraten (Klettern, Fliegen, Schwimmen)."
      },
      {
        "name": "Untote Natur",
        "text": "Die Kreatur braucht nicht zu atmen."
      },
      {
        "name": "Gruselzeichen",
        "text": "Als Bonusaktion entfernt sie sich schmerzlos eine Haarsträhne, einen Fingernagel oder einen Zahn. Das Zeichen ist bis zur nächsten langen Rast magisch aufgeladen. Trägerin des Zeichens kann Folgendes empfangen: Telepathische Botschaft (bis 25 Wörter, bis 16 km) und Fernsicht (1 Minute Trance, Hören/Sehen am Ort des Zeichens bis 16 km). Nach der Fernsicht wird das Zeichen zerstört. 1×/langer Rast."
      },
      {
        "name": "Hex-Magie",
        "text": "Die Kreatur kann Selbstverkleidung und Verwünschen wirken — je 1×/langer Rast mit diesem Merkmal, oder mit Zauberplätzen. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      }
    ],
    "talente": [
      "Meister des Hexenkessels",
      "Meister der Hexmagie",
      "Vielseitigkeit der Vetteln"
    ],
    "talentTexte": {
      "Meister des Hexenkessels": {
        "text": "Wann immer sie will, kann sie als Aktion einen silbernen Hexenkessel innerhalb von 1,5 m an einem freien Ort beschwören, indem sie 1000 Silbermünzen (100 Goldmünzen) aufgibt, um sie zu einem Kessel zu formen. Der Kessel bleibt 10 Stunden bestehen oder bis sie ihn per Bonusaktion verschwinden lässt. Die Kreatur erhält Übung in Alchemistenlabor (Bomben), Giftmischerausrüstung (Gifte) oder Kräuterkundeausrüstung (Tränke) — Wahl beim Erlernen. Ist sie bereits geübt, erhält sie Expertise. Ihr beschworener Hexenkessel gilt für alle alchemistischen Zwecke als eines dieser Werkzeuge. Wenn sie den Hexenkessel beschwört, beschleunigt sich die Arbeitszeit so, dass sie ein Gebräu mit einer Reagenz während einer langen Rast fertigstellen kann. Dabei ist sie aufmerksam und konzentriert und erhält nur den Effekt einer kurzen Rast. Verfügt sie über Zauberplätze, die bei einer langen Rast wiederhergestellt werden, kann sie Zauberplätze zurückerlangen, deren Gesamtgrad der Hälfte ihres Charakterlevels (abgerundet) entspricht."
      },
      "Meister der Hexmagie": {
        "text": "Die Kreatur erhält den Zaubertrick Gehässiger Spott. Die Kreatur kann diesen nach Belieben wirken. Die Kreatur erlernt den Zauber Zone der Wahrheit. Die Kreatur kann diesen einmal pro langer Rast mit diesem Merkmal benutzen. Wenn sie den Zauber Verwünschen wirkt, erleidet das Ziel statt 1W6 nekrotischem Schaden 1W4 nekrotischen Schaden jedes Mal, wenn die betroffene Kreatur Schaden durch sich oder einen ihrer Mitstreiter erleidet. Wenn sie dieses Merkmal einsetzt, hat sie für die Dauer des Zaubers Nachteil auf Konstitutionswürfe zur Aufrechterhaltung der Konzentration und kann keine neue Kreatur verwünschen, wenn das Ziel auf 0 Trefferpunkte fällt. Ab Stufe 8 erhöht sich der Schaden auf 1W6."
      },
      "Vielseitigkeit der Vetteln": {
        "text": "Nach jeder kurzen Rast kann sie sich eines der folgenden Merkmale aussuchen. Die Kreatur kann die gewählte Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht; alle verbrauchten Einsätze kehren nach einer langen Rast zurück. Haare: Sie verzaubert ihre Haare, um sie sehr lang wachsen zu lassen. Als Aktion kann sie versuchen, eine Kreatur in 1,5 m Reichweite mit ihren Haaren zu fesseln. Die Kreatur muss einen Stärkerettungswurf bestehen (SG = 8 + Übungsbonus + gewählter Attributsmodifikator) oder gilt als festgesetzt, bis der Effekt endet. Eine festgesetzte Kreatur kann ihre Aktion nutzen, um die Haarschlingen anzugreifen (RK 0, trifft automatisch). Der Effekt endet, wenn ihre Trefferpunkte oder die der Haarschlingen (= halbes TP-Maximum, abgerundet) auf 0 fallen oder sie stirbt. Fingernägel: Sie verzaubert ihre Fingernägel, um sie messerscharf werden zu lassen. Als Aktion kann sie einen waffenlosen Angriff mit ihren Fingernägeln ausführen. Bei einem Treffer verursacht sie 2W6 Stichschaden und die Kreatur erleidet den Zustand blutend: Sie erleidet zu Beginn jedes ihrer Züge 1W4 Stichschaden und muss am Ende jedes Zuges einen Konstitutionsrettungswurf bestehen (SG = 8 + Übungsbonus + gewählter Attributsmodifikator), um die Blutung zu stillen. Zähne: Sie verzaubert ihre Zähne für einen gefährlichen Biss. Ihre Zähne sind eine natürliche Zweitwaffe, in deren Umgang sie geübt ist. Wenn sie in ihrem Zug die Angriffsaktion ausführt, kann sie als Bonusaktion mit ihren Zähnen gegen dasselbe Ziel angreifen (Angriffs- und Schadenswürfe + Stärke oder Geschicklichkeitsmodifikator, Wahl beim Erwerb). Bei einem Treffer verursacht sie 1W6 Stichschaden, und die betroffene Kreatur muss einen Weisheitsrettungswurf bestehen (SG = 8 + Übungsbonus + gewählter Attributsmodifikator) oder wird verängstigt. Die Anzahl verängstigter Ziele skaliert: auf Stufe 6 ein weiteres Ziel in 3 m, auf Stufe 11 zwei weitere, auf Stufe 16 bis zu 4; alle zusätzlichen Ziele werden zufällig ausgewählt."
      }
    }
  },
  "Hobgoblins": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CON": 2,
      "INT": 1
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Kampftraining",
        "text": "Die Kreatur hat Übung mit zwei Kriegswaffen ihrer Wahl und mit leichter Rüstung."
      },
      {
        "name": "Gesicht wahren",
        "text": "Verfehlt die Kreatur einen Angriffswurf oder misslingt ihr ein Attributs- oder Rettungswurf, kann sie einen Bonus in Höhe der Zahl ihrer Verbündeten in 9 m addieren (höchstens +5). Einmal pro kurze oder lange Rast."
      }
    ],
    "talente": [
      "Hornhaut",
      "Feenschritt",
      "Feldherrenblick"
    ],
    "talentTexte": {
      "Hornhaut": {
        "text": "Trägt die Kreatur keine Rüstung, beträgt ihre Rüstungsklasse 13 + ihr Geschicklichkeitsmodifikator. Einen Schild darf sie dabei weiter benutzen. Sie hat Vorteil auf Rettungswürfe gegen Entwaffnet und gegen Schaden durch Hitze oder Reibung (Brand, Feuerblasen).",
        "wirkung": {
          "rkBasis": 13
        }
      },
      "Feenschritt": {
        "text": "Als Bonusaktion kann die Kreatur sich bis zu 9 m weit zu einem Punkt teleportieren, den sie sehen kann. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Danach hat sie bis zum Beginn ihres nächsten Zuges Vorteil auf Rettungswürfe gegen Zauber."
      },
      "Feldherrenblick": {
        "text": "Einmal pro Kampf kann die Kreatur als Aktion einen Gegner in 18 m studieren, den sie sehen kann. Die Spielleitung nennt ihr eine seiner Resistenzen, Immunitäten oder Verwundbarkeiten und einen seiner Rettungswürfe, in dem er schwach ist. Die Kreatur merkt sich jede Karte, Aufstellung oder Anordnung, die sie eine Minute lang studiert hat, vollständig."
      }
    },
    "quelle": "Volo's Guide to Monsters (Wizards of the Coast, 2016); Wortlaut nicht gegen das Buch geprüft"
  },
  "Hochelfen": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "INT": 1
    },
    "varianten": {
      "Sonnenelfen (Goldelfen)": {
        "merkmale": [
          {
            "name": "Sonnenelfen (Goldelfen)",
            "text": "Sonnenelfen (Goldelfen) gelten als hochnäsig und einsiedlerisch — sie betrachten sich anderen Völkern gegenüber als überlegen. In Faerûn auch als Goldelfen bekannt."
          }
        ]
      },
      "Mondelfen (Silberelfen)": {
        "merkmale": [
          {
            "name": "Mondelfen (Silberelfen)",
            "text": "Mondelfen (Silber- oder Grauelfen) sind verbreiteter und offener — man trifft sie oft unter Menschen und anderen Völkern an. In Faerûn auch als Silberelfen bekannt."
          }
        ]
      }
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Geschärfte Sinne",
        "text": "Die Kreatur ist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "text": "Die Kreatur hat Vorteil bei Rettungswürfen gegen Bezauberungen und ist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "text": "Die Kreatur muss nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kann sie zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Elfische Waffenvertrautheit",
        "text": "Die Kreatur ist geübt im Umgang mit Langschwertern, Kurzschwertern, Langbögen und Kurzbögen."
      },
      {
        "name": "Zaubertrick",
        "text": "Die Kreatur beherrscht einen Zaubertrick ihrer Wahl aus der Zauberliste des Magiers. Zaubermerkmal: Intelligenz."
      }
    ],
    "talente": [
      "Elfische Treffsicherheit",
      "Hochelfenmagie",
      "Feenschreiten"
    ],
    "talentTexte": {
      "Elfische Treffsicherheit": {
        "text": "Jedes Mal, wenn sie mit einem Angriff trifft, der kein kritischer Treffer ist, erhöht sich ihre Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis sie einen kritischen Treffer landet, einen Angriff verfehlt oder den Kampf betritt oder verläst; danach wird er auf ihren Standardwert zurückgesetzt. Immer wenn sie bei einem Angriffswurf einen Vorteil hat, kann sie einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      },
      "Hochelfenmagie": {
        "text": "Die Kreatur erlernt die Zauber Identifizieren und Sprachen verstehen, die sie nach Belieben wirken kann. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Wenn sie einen Zauber wirkt, der Schaden verursacht, kann sie ihren Übungsbonus auf den Schaden addieren."
      },
      "Feenschreiten": {
        "text": "Die Kreatur lernt, Sylvanisch zu sprechen, zu lesen und zu schreiben. Wenn sie bereits Sylvanisch kennt, kann sie eine andere Sprache lernen. Die Kreatur erlernt einen der folgenden Zaubertricks: Flammen erzeugen, Kältestrahl, Blitzköder oder Kalte Hand. Ihr Attributsmodifikator für den Zaubertrick ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent auswählt. Als Bonusaktion kann sie sich magisch bis zu 9 m weit in ein unbesetztes Feld teleportieren, das sie sehen kann. Die Kreatur kann diese Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht, und sie erhält alle verbrauchten Einsätze zurück, wenn sie eine lange Rast beendet."
      }
    }
  },
  "Hügelzwerge": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Gift"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "CON": 2,
      "WIS": 1
    },
    "merkmale": [
      {
        "name": "Zwergische Unverwüstlichkeit",
        "text": "Die Kreatur ist bei Rettungswürfen gegen Gifte im Vorteil und besitzt Resistenz gegen Giftschaden."
      },
      {
        "name": "Zwergisches Kampftraining",
        "text": "Die Kreatur ist geübt im Umgang mit Streitäxten, Beilen, leichten Hämmern und Kriegshämmern."
      },
      {
        "name": "Handwerkliches Geschick",
        "text": "Die Kreatur ist geübt mit dem Werkzeug eines der folgenden Berufe (ihre Wahl): Braumeister, Schmied oder Steinmetz."
      },
      {
        "name": "Steingespür",
        "text": "Bei Intelligenz-(Geschichte)-Würfen zur Herkunft von Steinarbeiten wird sie als geübt angesehen und addiert ihren doppelten Übungsbonus."
      },
      {
        "name": "Zwergische Zähigkeit",
        "text": "Ihr Trefferpunktemaximum erhöht sich um 1 Punkt. Es erhöht sich um 1 weiteren Punkt jedes Mal, wenn sie eine Stufe aufsteigt."
      }
    ],
    "talente": [
      "Zwergische Tapferkeit",
      "Hockenstärke",
      "Weit gereister Freund"
    ],
    "talentTexte": {
      "Zwergische Tapferkeit": {
        "text": "Die Kreatur hat einen Vorteil bei Todesrettungswürfen. Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Immer wenn sie im Kampf die Aktion Ausweichen ausführt, kann sie einen oder mehrere Trefferwürfel benutzen, um sich zu heilen. Wirf den Würfel, addiere ihren Konstitutionsmodifikator und erhalte eine Anzahl von Trefferpunkten zurück, die der Gesamtzahl entsprechen (mindestens 1).",
        "wirkung": {
          "tpProTW": 1
        }
      },
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Weit gereister Freund": {
        "text": "Die Kreatur erhält Übung in Charisma (Überzeugen). Wenn sie bereits in Überzeugen geübt ist, erhält sie Expertise. Die Kreatur erlernt den Zaubertrick Freundschaft und kann ihn nach Belieben wirken. Wenn sie ihn wirkt, kann sie dieses Merkmal einsetzen, um die betroffene Kreatur zu einem Charismarettungswurf zu zwingen (SG = 8 + Übungsbonus + Charismamodifikator). Schlägt der Rettungswurf fehl, merkt die Kreatur nicht, dass sie Magie eingesetzt hat, und wird nicht feindselig. Die Kreatur kann Freundschaft auf diese Weise nur einmal pro lange Rast wirken. Die Kreatur lernt den Zauber Nahrung und Wasser reinigen und kann ihn nach Belieben wirken, ohne einen Zauberplatz zu verbrauchen. Die Kreatur kann die Aktionen Rückzug und Spurten als Bonusaktion ausführen. Die Kreatur kann dieses Merkmal so oft einsetzen, wie es ihrem Konstitutionsmodifikator entspricht; alle verbrauchten Aufladungen kehren nach einer langen Rast zurück.",
        "wirkung": {
          "fertigkeiten": [
            "Überzeugen"
          ]
        }
      }
    }
  },
  "Kenku": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "DEX": 2,
      "WIS": 1
    },
    "merkmale": [
      {
        "name": "Expertenduplikation",
        "text": "Wenn sie Schriften oder Kunstwerke kopiert, ist sie bei allen Attributswürfen für ein exaktes Duplikat im Vorteil."
      },
      {
        "name": "Kenku-Gedächtnis",
        "text": "Die Kreatur ist in 2 Fertigkeiten ihrer Wahl geübt. Außerdem kann sie sich bei Attributswürfen mit geübten Fertigkeiten vor dem W20-Wurf einen Vorteil verschaffen. Anwendungen pro langer Rast entsprechen ihrem Übungsbonus."
      },
      {
        "name": "Stimmen nachahmen",
        "text": "Die Kreatur kann Geräusche und Stimmen, die sie gehört hat, präzise wiedergeben. Erkennung als Imitation: WEI-(Einsicht)-Rettungswurf gegen SG 8 + Übungsbonus + CHA-Modifikator."
      }
    ],
    "talente": [
      "Fluch des Alten",
      "Meister der Nachahmung",
      "Magische Plagiate"
    ],
    "talentTexte": {
      "Fluch des Alten": {
        "text": "Die Kreatur lernt den Zauber Sprachen verstehen und kann ihn nach Belieben wirken. Außerdem erlernt sie Schattenklinge und Hunger von Hadar, die sie jeweils einmal wirken kann, ohne einen Zauberplatz zu verbrauchen. Die Kreatur erlangt die Fähigkeit, diese beiden Zauber auf diese Weise zu wirken, wieder, wenn sie eine lange Rast beendet hat. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent auswählt. Zusätzlich erhält sie durch die Magie des Alten eine begrenzte Fähigkeit, den Geist von Kreaturen anzuzapfen. Nachdem sie sich 1 Minute lang auf eine Kreatur konzentriert hat (wie bei einem Zauber), muss das Ziel einen Weisheitsrettungswurf ablegen (SG 10 + ihr Übungsbonus + ihr Charismamodifikator). Bei einem Fehlschlag stiehlt sie ihre Stimme und kann sie benutzen, um normal zu sprechen, ohne sie sprechen hören zu müssen. Die Kreatur kann eine Anzahl von Stimmen in ihrem Geist speichern, die ihrem Übungsbonus entspricht."
      },
      "Meister der Nachahmung": {
        "text": "Die Kreatur erlangt Übung im Umgang mit dem Fälschungswerkzeug und dem Verkleidungswerkzeug. Während einer langen Rast kann sie einen willigen Verbündeten beobachten. Dabei kann sie dessen Übung in einer bestimmten Fertigkeit oder einem bestimmten Werkzeug nachahmen und erlangt bis zum Ende ihrer nächsten langen Rast oder bis sie diese Fähigkeit erneut einsetzt, die Übung in dieser Fertigkeit."
      },
      "Magische Plagiate": {
        "text": "Die Kreatur erlernt den Zaubertrick Einfache Illusion sowie die Zauber Lautloses Trugbild und Selbstverkleidung. Die Kreatur kann jeden Zauber einmal auf der ersten Stufe wirken, ohne einen Zauberplatz zu verbrauchen; nach einer langen Rast kann sie dies erneut tun. Während einer langen Rast kann sie sich von einem willigen Verbündeten einen seiner vorbereiteten Zauber zeigen lassen. Die Kreatur lernt den Zauber und kann ihn mit allen sich zur Verfügung stehenden Zauberplätzen wirken. Die maximale Stufe beträgt ein Drittel ihrer Stufe (aufgerundet). Die Kreatur kann immer nur einen Zauber gleichzeitig einprägen. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent auswählt."
      }
    }
  },
  "Kobolde": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "CON": 1
    },
    "varianten": {
      "Abwehr": {
        "merkmale": [
          {
            "name": "Abwehr",
            "text": "Die Kreatur ist bei Rettungswürfen gegen den Verängstigt-Zustand sowie zu dessen Aufhebung bei sich selbst im Vorteil."
          }
        ]
      },
      "Drakonische Zauberei": {
        "merkmale": [
          {
            "name": "Drakonische Zauberei",
            "text": "Die Kreatur beherrscht einen Zaubertrick ihrer Wahl aus der Zauberliste des Zauberers. Zaubermerkmal: Intelligenz, Weisheit oder Charisma (Wahl bei Rassenauswahl)."
          }
        ]
      },
      "Findigkeit": {
        "merkmale": [
          {
            "name": "Findigkeit",
            "text": "Die Kreatur ist in einer Fertigkeit ihrer Wahl geübt: Arkane Kunde, Fingerfertigkeit, Heilkunde, Nachforschungen oder Überlebenskunst."
          }
        ]
      }
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Kaltblütig",
        "text": "Die Kreatur ist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Drakonischer Schrei",
        "text": "Als Bonusaktion entfesselt sie einen Schrei auf Gegner innerhalb von 3 m. Bis zum Beginn ihres nächsten Zuges haben sie und ihre Verbündeten Vorteil bei Angriffswürfen gegen diese Gegner. Anwendungen pro langer Rast entsprechen ihrem Übungsbonus."
      },
      {
        "name": "Kobold-Vermächtnis",
        "text": "Wähle eine Option: Abwehr (Vorteil gegen Verängstigt), Drakonische Zauberei (ein Zaubertrick aus der Zauberer-Liste, Merkmal wählbar), oder Findigkeit (geübt in einer von: Arkane Kunde, Fingerfertigkeit, Heilkunde, Nachforschungen, Überlebenskunst)."
      }
    ],
    "talente": [
      "Segen des Drachen",
      "Hockenstärke",
      "Urd-Kobold"
    ],
    "talentTexte": {
      "Segen des Drachen": {
        "text": "Die Kreatur erhält Blindsicht bis zu einer Reichweite von 3 m. Wähle eine der folgenden drakonischen Blutlinien. Ihr Attributsmodifikator für diese Zaubertricks ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Schwarz: Sie erhält Resistenz gegen Säureschaden und erlernt den Zaubertrick Säurespritzer. Blau: Sie erhält Resistenz gegen Blitzschaden und erlernt den Zaubertrick Schockgriff. Grün: Sie erhält Resistenz gegen Giftschaden und erlernt den Zaubertrick Gift versprühen. Rot: Sie erhält Resistenz gegen Feuerschaden und erlernt den Zaubertrick Flamme erzeugen. Weiß: Sie erhält Resistenz gegen Kälteschaden und erlernt den Zaubertrick Kältestrahl."
      },
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Urd-Kobold": {
        "text": "Ihre Flügel ermöglichen ihr eine Flugbewegungsrate gleich ihrer Bewegungsrate. Die Kreatur kann von dieser Bewegungsrate nicht profitieren, wenn sie eine schwere Rüstung trägt oder ihre Tragfähigkeit überschritten ist."
      }
    }
  },
  "Kriegsgeschmiedete": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [
      "Gift"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CON": 2,
      "STR": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Konstruktresistenz",
        "text": "Die Kreatur hat Vorteil auf Rettungswürfe gegen den Zustand Vergiftet und Resistenz gegen Giftschaden. Sie ist immun gegen Krankheiten, und Magie kann sie nicht in Schlaf versetzen. Sie braucht weder Nahrung noch Wasser, Atemluft oder Schlaf."
      },
      {
        "name": "Wächterruhe",
        "text": "Statt zu schlafen, verharrt die Kreatur 6 Stunden lang regungslos und halbbewusst und nimmt dabei ihre Umgebung wahr. Danach hat sie den Vorteil von 8 Stunden Schlaf."
      },
      {
        "name": "Integrierter Schutz",
        "text": "Der Körper der Kreatur ist gepanzert: Sie hat +1 auf die Rüstungsklasse. Eine Rüstung wird Teil ihres Körpers: Das An- und Ablegen dauert eine Stunde, und sie kann ihr nicht gegen ihren Willen abgenommen werden."
      },
      {
        "name": "Spezialisierte Bauweise",
        "text": "Die Kreatur hat Übung in einer Fertigkeit und einem Werkzeug ihrer Wahl."
      }
    ],
    "talente": [
      "Adamantinrumpf",
      "Unterarmklinge",
      "Modulare Platten"
    ],
    "talentTexte": {
      "Adamantinrumpf": {
        "text": "Einmal pro kurze Rast wird ein kritischer Treffer gegen die Kreatur zu einem normalen Treffer. Gegen Schaden durch Sturz, einstürzende Trümmer und Explosionen hat sie Resistenz."
      },
      "Unterarmklinge": {
        "text": "Als Bonusaktion kann die Kreatur die Klinge in ihrem Unterarm aus- oder einfahren. Ausgefahren ist sie eine Nahkampfwaffe (1W8 Hieb, Finesse, die Kreatur ist geübt), die ihr nicht entwaffnet werden kann. Trifft sie mit ihr, kann sie als Bonusaktion einmal pro Zug einen weiteren Angriff mit ihr ausführen (wie Zweiwaffenkampf, aber ohne Attributsmodifikator auf den Schaden)."
      },
      "Modulare Platten": {
        "text": "Mit Schmiedewerkzeug und 10 Minuten Arbeit kann die Kreatur bis zur nächsten langen Rast Resistenz gegen eine von vier Schadensarten einstellen: Feuer, Kälte, Blitz oder Säure. Sie hat Vorteil auf Würfe mit Schmiedewerkzeug, um sich oder einen anderen Konstrukt zu reparieren."
      }
    },
    "quelle": "Eberron: Rising from the Last War (Wizards of the Coast, 2019); Wortlaut nicht gegen das Buch geprüft"
  },
  "Leichtfüße": {
    "kreaturentyp": null,
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "DEX": 2,
      "CHA": 1
    },
    "merkmale": [
      {
        "name": "Halblingsglück",
        "text": "Würfelt sie bei einem Angriffs-, Attributs- oder Rettungswurf eine 1, darf sie den Wurf wiederholen und muss das zweite Ergebnis verwenden."
      },
      {
        "name": "Tapferkeit",
        "text": "Die Kreatur ist im Vorteil bei Rettungswürfen, um den Zustand Verängstigt zu vermeiden."
      },
      {
        "name": "Halblingsgewandheit",
        "text": "Die Kreatur kann sich durch Bereiche bewegen, die von Kreaturen eingenommen werden, die eine Größenkategorie größer sind als sie."
      },
      {
        "name": "Angeborene Verstohlenheit",
        "text": "Die Kreatur kann versuchen, sich zu verstecken, wenn sie von einer Kreatur verschleiert wird, die nur eine Größenkategorie größer ist als sie."
      }
    ],
    "talente": [
      "Großzügiges Glück",
      "Hockenstärke",
      "Zweite Chance"
    ],
    "talentTexte": {
      "Großzügiges Glück": {
        "text": "Die Kreatur hat einen Vorrat an Glückspunkten, der ihrem Übungsbonus entspricht. Jedes Mal, wenn sie oder ein Verbündeter in einem Umkreis von 9 m einen Angriffswurf, Attributswurf oder Rettungswurf macht, kann sie einen Glückspunkt ausgeben, um einen zusätzlichen Würfelwurf zu machen. Die Kreatur kann wählen, ob sie einen Glückspunkt ausgeben möchtet, nachdem sie gewürfelt hat, aber bevor das Ergebnis feststeht. Die Kreatur entscheidet, welcher der beiden Würfel verwendet wird. Wenn sie einen Vorteil oder Nachteil hat, führe ihn zuerst aus. Die Kreatur erhält die Hälfte ihrer maximalen Glückspunkte (abgerundet) zurück, wenn sie eine lange Rast beendet."
      },
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Zweite Chance": {
        "text": "Die Kreatur lernt den Zauber Silberne Fäden. Die Kreatur kann ihn einmal wirken, ohne einen Zauberplatz zu verbrauchen; danach muss sie eine lange Rast einlegen. Intelligenz, Weisheit oder Charisma ist ihr Attributsmodifikator. Die Kreatur benötigt für diesen Zauber keine materiellen Komponenten. Die Kreatur lernt den Zauber Segnen. Die Kreatur kann ihn einmal als Bonusaktion wirken, ohne sich zu konzentrieren und ohne einen Zauberplatz zu verbrauchen; danach muss sie eine lange Rast einlegen. Intelligenz, Weisheit oder Charisma ist ihr Attributsmodifikator. Die Kreatur benötigt für diesen Zauber keine materiellen Komponenten."
      }
    }
  },
  "Leonin": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9,5 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CON": 2,
      "STR": 1
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Klauen",
        "text": "Die Klauen der Kreatur gelten als natürliche Waffen, die als unbewaffnete Angriffe eingesetzt werden können. Bei einem Treffer verursachen sie Hiebschaden in Höhe von 1W4 + Stärkemodifikator."
      },
      {
        "name": "Jägerinstinkt",
        "text": "Die Kreatur hat Übung in einer Fertigkeit aus Athletik, Einschüchtern, Wahrnehmung oder Überleben."
      },
      {
        "name": "Einschüchterndes Gebrüll",
        "text": "Als Bonusaktion kann die Kreatur brüllen. Jede Kreatur in 3 m, die sie hören kann, muss einen Weisheitsrettungswurf bestehen (SG = 8 + Übungsbonus + Konstitutionsmodifikator der Kreatur), sonst ist sie bis zum Ende ihres nächsten Zuges verängstigt. Einmal pro kurze oder lange Rast."
      }
    ],
    "talente": [
      "Mähne des Rudelführers",
      "Anspringen",
      "Rudelgebrüll"
    ],
    "talentTexte": {
      "Mähne des Rudelführers": {
        "text": "Die Kreatur hat Vorteil auf Würfe auf Einschüchtern und Auftreten gegenüber Kreaturen, die sie zum ersten Mal sehen. Verbündete in 3 m von ihr haben Vorteil auf Rettungswürfe gegen Furcht. Gegen Würgegriffe und Griffe in den Nacken hat sie Vorteil auf Rettungs- und Befreiungswürfe."
      },
      "Anspringen": {
        "text": "Bewegt die Kreatur sich in ihrem Zug mindestens 6 m geradlinig auf eine Kreatur zu und trifft sie mit ihren Klauen, muss das Ziel einen Stärkerettungswurf bestehen (SG = 8 + Übungsbonus + Stärkemodifikator der Kreatur), sonst wird es umgeworfen. Ist das Ziel umgeworfen, kann die Kreatur als Bonusaktion einen weiteren Klauenangriff gegen es ausführen."
      },
      "Rudelgebrüll": {
        "text": "Als Bonusaktion kann die Kreatur brüllen: Verbündete in 9 m, die sie hören können, erhalten temporäre Trefferpunkte in Höhe ihres Übungsbonus + ihres Konstitutionsmodifikators. Feinde in 3 m müssen zusätzlich einen Weisheitsrettungswurf bestehen (SG = 8 + Übungsbonus + Konstitutionsmodifikator der Kreatur), sonst sind sie bis zum Beginn ihres nächsten Zuges verängstigt. Das geht einmal pro kurze oder lange Rast."
      }
    },
    "quelle": "Mythic Odysseys of Theros (Wizards of the Coast, 2020); Wortlaut nicht gegen das Buch geprüft"
  },
  "Locathah": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "STR": 2,
      "DEX": 1
    },
    "merkmale": [
      {
        "name": "Natürliche Rüstung",
        "text": "Die Kreatur hat zähe, schuppige Haut. Wenn sie keine Rüstung trägt, beträgt ihre Rüstungsklasse 12 + ihr Geschicklichkeitsmodifikator. Die Kreatur kann ihre natürliche Rüstung verwenden, wenn die Rüstung, die sie trägt, sich eine niedrigere RK geben würde. Schilde gelten wie gewohnt."
      },
      {
        "name": "Aufmerksam und athletisch",
        "text": "Die Kreatur ist in den Fertigkeiten Athletik und Wahrnehmung geübt."
      },
      {
        "name": "Leviathan-Wille",
        "text": "Die Kreatur hat Vorteil auf Rettungswürfe gegen Bezauberung, Furcht, Lähmung, Vergiftung, Betäubung und Einschläferung."
      },
      {
        "name": "Begrenzte Amphibienfähigkeit",
        "text": "Die Kreatur kann sowohl Luft als auch Wasser atmen. Die Kreatur muss jedoch mindestens alle 4 Stunden untergetaucht sein — andernfalls beginnt sie zu ersticken."
      }
    ],
    "talente": [
      "Schuppenschild",
      "Seitenlinie",
      "Strömungsreiter"
    ],
    "talentTexte": {
      "Schuppenschild": {
        "text": "Wird die Kreatur von einem Angriff getroffen, den sie sehen kann, kann sie als Reaktion ihre Schuppen aufstellen: Ihre Rüstungsklasse steigt um 3 gegen diesen Angriff, und er kann dadurch verfehlen. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      },
      "Seitenlinie": {
        "text": "Unter Wasser hat die Kreatur Blindsicht in einem Umkreis von 9 m. Sie kann Strömungen, Wirbel und Bewegungen großer Kreaturen im Wasser in 18 m Umkreis spüren. An Land hat sie Vorteil auf Würfe auf Wahrnehmung, die auf Erschütterungen oder Luftbewegungen beruhen."
      },
      "Strömungsreiter": {
        "text": "Die Schwimmgeschwindigkeit der Kreatur erhöht sich um 3 m. Unter Wasser kann sie als Bonusaktion die Aktion Spurt ausführen und hat Vorteil auf Würfe auf Athletik, um gegen Strömungen und in Strudeln zu schwimmen.",
        "wirkung": {
          "bewegung": {
            "Schwimmen": "12 m"
          }
        }
      }
    },
    "quelle": "Locathah Rising (Wizards of the Coast, 2020)"
  },
  "Lotol": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "WIS": 2,
      "CON": 1
    },
    "attributeQuelle": "Heliana's Guide to Monster Hunting (bestätigt)",
    "merkmale": [
      {
        "name": "Unbedarft",
        "text": "Die Kreatur hat Vorteil auf Weisheitsrettungswürfe gegen Furcht und Bezauberung."
      },
      {
        "name": "Schlüpfrige Haut",
        "text": "Die Kreatur hat Vorteil auf Attributswürfe und Rettungswürfe, um dem Zustand Gepackt oder Festgesetzt zu entkommen oder ihn zu beenden."
      },
      {
        "name": "Adaptive Polymorphie",
        "text": "Die Kreatur wählt zwei der folgenden Anpassungen und kann bei einem Stufenaufstieg nach der nächsten langen Rast eine davon ersetzen: Dunkelsicht 18 m, Schwimmgeschwindigkeit 9 m, Zaubertrick Schockgriff (Zauberattribut Weisheit), Haftzehen (Kletterbewegung 9 m), Hautatmung (eine Stunde Atem anhalten und Vorteil gegen Hitze und Austrocknung)."
      }
    ],
    "talente": [
      "Gliedmaßenregeneration",
      "Farbwechselhaut",
      "Giftdrüsen"
    ],
    "talentTexte": {
      "Gliedmaßenregeneration": {
        "text": "Als Bonusaktion kann die Kreatur Trefferpunkte in Höhe von 1W8 + ihrem Konstitutionsmodifikator heilen. Das geht so oft, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Verlorene Gliedmaßen wachsen ihr innerhalb von 1W4 Tagen ohne Magie nach."
      },
      "Farbwechselhaut": {
        "text": "Die Kreatur hat Vorteil auf Würfe auf Heimlichkeit in Sümpfen, an Ufern, in Wäldern und im Wasser. Als Aktion kann sie ihre Haut für 1 Stunde an eine Umgebung anpassen und gilt dann für einfache Beobachtung als Teil der Umgebung, solange sie sich nicht bewegt."
      },
      "Giftdrüsen": {
        "text": "Jede Kreatur, die die Kreatur im Nahkampf angreift, muss nach ihrem ersten Angriff in einem Zug einen Konstitutionsrettungswurf bestehen (SG = 8 + Übungsbonus + Konstitutionsmodifikator der Kreatur), sonst ist sie bis zum Ende ihres nächsten Zuges vergiftet. Die Kreatur ist immun gegen ihre eigenen Gifte."
      }
    },
    "quelle": "Heliana's Guide to Monster Hunting (Lotol); Wortlaut nicht gegen das Buch geprüft; Haftzehen und Hautatmung sind eigene Ergänzungen"
  },
  "Loxodon": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "CON": 2,
      "WIS": 1
    },
    "merkmale": [
      {
        "name": "Kraftvolle Statur",
        "text": "Die Kreatur gilt für die Bestimmung ihrer Tragekapazität und des Gewichts, das sie schieben, ziehen oder heben kann, als eine Größenkategorie größer."
      },
      {
        "name": "Loxodon-Gelassenheit",
        "text": "Die Kreatur hat Vorteil auf Würfe gegen Bezauberung oder Furcht."
      },
      {
        "name": "Natürliche Rüstung",
        "text": "Die Kreatur hat dicke, ledrige Haut. Wenn sie keine Rüstung trägt, beträgt ihre Rüstungsklasse 12 + ihr Konstitutionsmodifikator. Die Kreatur kann ihre natürliche Rüstung verwenden, um ihre Rüstungsklasse zu bestimmen, wenn die Rüstung, die sie trägt, sich eine niedrigere Rüstungsklasse geben würde. Die Vorteile eines Schildes gelten wie gewohnt, während sie ihre natürliche Rüstung verwendet."
      },
      {
        "name": "Rüssel",
        "text": "Die Kreatur kann Dinge mit ihrem Rüssel greifen und ihn als Schnorchel verwenden. Er hat eine Reichweite von 1,5 Metern und kann eine Anzahl von Kilogramm heben, die dem Fünffachen ihres Stärkewertes entspricht. Die Kreatur kann ihn verwenden, um folgende einfache Aufgaben auszuführen: einen Gegenstand oder eine Kreatur heben, fallen lassen, halten, schieben oder ziehen; eine Tür oder einen Behälter öffnen oder schließen; jemanden greifen; oder einen unbewaffneten Angriff machen. Er kann keine Waffen oder Schilde führen oder etwas tun, das manuelle Präzision erfordert, wie das Verwenden von Werkzeugen oder magischen Gegenständen oder das Ausführen der somatischen Komponenten eines Zaubers."
      },
      {
        "name": "Feiner Geruchssinn",
        "text": "Dank ihres empfindlichen Rüssels hat sie Vorteil auf Weisheit-(Wahrnehmungs)-, Weisheit-(Überleben)- und Intelligenz-(Nachforschungs)-Würfe, die Geruch beinhalten."
      }
    ],
    "talente": [
      "Geschicklicher Rüssel",
      "Loxodon-Unbeugsamkeit",
      "Stoßzähner"
    ],
    "talentTexte": {
      "Geschicklicher Rüssel": {
        "text": "Die Kreatur kann jede Aktion mit ihrem Rüssel ausführen, die sie mit einem Arm ausführen könnte. Ihr Rüssel kann einhändige Waffen, Schilde und Werkzeuge führen sowie magische Gegenstände aktivieren. Wenn sie mit einer Waffe angreift, die sie mit ihrem Rüssel führt, erhöht sich ihre Reichweite um 1,5 Meter (5 Fuß)."
      },
      "Loxodon-Unbeugsamkeit": {
        "text": "Ihre natürliche Rüstung erhöht sich auf 13 + ihren Konstitutionsmodifikator, anstatt 12 + ihren Konstitutionsmodifikator. Ihr Trefferpunktmaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie dieses Talent erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktmaximum um zusätzlich 1 Trefferpunkt. Die Kreatur erhält Resistenz gegen Wucht-, Stich- und Hiebschaden durch nichtmagische Angriffe.",
        "wirkung": {
          "resistenzen": [
            "Wucht (nichtmagisch)",
            "Stich (nichtmagisch)",
            "Hieb (nichtmagisch)"
          ]
        }
      },
      "Stoßzähner": {
        "text": "Ihre Stoßzähne werden zu natürlichen Waffen. Sie verursachen 1W6 + ihren Stärkemodifikator Stichschaden. Wenn sie mit ihren Stoßzähnen angreift, erhöht sich ihr kritischer Trefferbereich um 1. Wenn sie sich mindestens 3 Meter (10 Fuß) in einer geraden Linie auf ein Ziel zubewegt, kann sie als Bonusaktion einen rammenden Angriff mit ihren Stoßzähnen durchführen. Wenn der Angriff trifft, wird das Ziel zudem zu Boden geworfen."
      }
    }
  },
  "Luft-Genasi": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Blitz"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CON": 2,
      "DEX": 1
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Blitzresistent",
        "text": "Die Kreatur ist gegen Blitzschaden resistent."
      },
      {
        "name": "Spiel mit dem Wind",
        "text": "Die Kreatur kennt den Zaubertrick Schockgriff. Ab Stufe 3: Federfall 1×/langer Rast (ohne Materialkomponenten). Ab Stufe 5: Schweben 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Unendlicher Atem",
        "text": "Die Kreatur kann den Atem unbegrenzt lange anhalten, solange sie nicht kampfunfähig ist."
      }
    ],
    "talente": [
      "Widerstand des Ursprungs",
      "Verderbnis des Abgrunds",
      "Abgesandter der Lüfte"
    ],
    "talentTexte": {
      "Widerstand des Ursprungs": {
        "text": "Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erlangt. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Die Kreatur erhält Resistenz gegen Giftschaden und einen Vorteil bei Rettungswürfen gegen Vergiftungen. Die Kreatur wird immun gegen kritische Treffer. Wenn ein Treffer ein kritischer Treffer sein sollte, wird er stattdessen zu einem normalen Treffer.",
        "wirkung": {
          "tpProTW": 1
        }
      },
      "Verderbnis des Abgrunds": {
        "text": "Die Kreatur lernt Infernalisch, die Sprache der Kreaturen des Abgrunds. Wenn sie Infernalisch bereits kennt, kann sie stattdessen eine andere Sprache ihrer Wahl erlernen. Die Kreatur erhält Resistenz gegen psychischen Schaden und einen Vorteil bei Schutzwürfen gegen Furcht. Die Kreatur erlernt den Zauber Chaospfeil und den Zauber Tashas fürchterlicher Lachanfall. Die Kreatur kann diese Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent auswählt.",
        "wirkung": {
          "resistenzen": [
            "Psychisch"
          ]
        }
      },
      "Abgesandter der Lüfte": {
        "text": "Ihre Bewegungsrate erhöht sich um 1,5 m. Wenn sie von einem Angriff getroffen wird, kann sie ihre Reaktion nutzen, um ihren Körper in Wind zu verwandeln und sofort in einem unbesetzten Feld innerhalb von 9 m wieder aufzutauchen, wodurch der Angriff verfehlt. Die Kreatur kann diese Fähigkeit nach einer kurzen oder langen Rast wieder einsetzen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      }
    }
  },
  "Meereselfen": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Kälte"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "CON": 1
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Geschärfte Sinne",
        "text": "Die Kreatur ist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "text": "Die Kreatur hat Vorteil bei Rettungswürfen gegen Bezauberungen und ist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "text": "Die Kreatur muss nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kann sie zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Freund des Meeres",
        "text": "Wasserlebewesen fühlen sich mit ihr verbunden. Die Kreatur kann einfache Ideen an alle Tiere mit Schwimmbewegungsrate vermitteln — sie verstehen sich, sie verfügt jedoch über keine Spezialfähigkeit, um sie zu verstehen."
      },
      {
        "name": "Kind des Ozeans",
        "text": "Die Kreatur kann Luft und Wasser atmen. Die Kreatur ist gegen Kälteschaden resistent."
      }
    ],
    "talente": [
      "Elfische Treffsicherheit",
      "Magie der Ozeane",
      "Stärke der Wellen"
    ],
    "talentTexte": {
      "Elfische Treffsicherheit": {
        "text": "Jedes Mal, wenn sie mit einem Angriff trifft, der kein kritischer Treffer ist, erhöht sich ihre Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis sie einen kritischen Treffer landet, einen Angriff verfehlt oder den Kampf betritt oder verläst; danach wird er auf ihren Standardwert zurückgesetzt. Immer wenn sie bei einem Angriffswurf einen Vorteil hat, kann sie einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      },
      "Magie der Ozeane": {
        "text": "Die Kreatur erlernt den Zaubertrick Wasser formen. Die Kreatur erlernt die Zauber Wasser erschaffen oder zerstören und Schutzwind. Die Kreatur kann jeden Zauber auf seiner niedrigsten Stufe einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Ihr Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Immer wenn sie ihren Zug vollständig unter Wasser beginnt, erhält sie vorübergehend Trefferpunkte in Höhe ihrer Stufe. Diese temporären Trefferpunkte gehen verloren, wenn sie ihren Zug nicht unter Wasser beendet."
      },
      "Stärke der Wellen": {
        "text": "Die Kreatur erhält Resistenz gegen Kälteschaden. Würde sie Schaden dieser Art erleiden, kann sie ihre Reaktion verwenden, um einem Schadenswurf zu widerstehen. Die Kreatur erhält keinen Schaden durch diesen Schadenswurf. Die Kreatur kann diese Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht, und sie erhält alle verbrauchten Einsätze zurück, wenn sie eine lange Rast beendet. Diese Eigenschaft kann in bestimmten Situationen, nach Ermessen des Spielleiters, fehlschlagen. Die Kreatur erhält einen Vorteil bei Stärke- und Geschicklichkeitswürfen unter Wasser. Die Kreatur ist resistent gegen die Auswirkungen von extremem Druck. Solange sie unter Wasser ist, kann sie die Spurten-Aktion als Bonusaktion in ihrem Zug ausführen.",
        "wirkung": {
          "resistenzen": [
            "Kälte"
          ]
        }
      }
    }
  },
  "Menschen": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "ALLE": 1
    },
    "varianten": {
      "Istoraner": {
        "merkmale": [
          {
            "name": "Istoraner",
            "text": "Nordlinwick, Südlinwick, Elkenless. Teilen sich gerne Siedlungsraum mit Meri. Mittlere Größe, Haut heller im Norden."
          }
        ]
      },
      "Meri": {
        "merkmale": [
          {
            "name": "Meri",
            "text": "Gemäßigte Wälder im Westen Astorils, weniger in Elkenless. Leben gerne mit Istoranern zusammen. Kleiner und schmaler als andere Menschen."
          }
        ]
      },
      "Solvarin": {
        "merkmale": [
          {
            "name": "Solvarin",
            "text": "Heißere Gebiete: Süden Xandors, Westen Ombrios. Eher kleine Körpergröße. Flechten ihr Haar charakteristisch."
          }
        ]
      },
      "Aurembri": {
        "merkmale": [
          {
            "name": "Aurembri",
            "text": "Wälder Slitherlocks und Astorils, weniger in Elkenless. Schlanker Menschenschlag, meist groß."
          }
        ]
      },
      "Karatay": {
        "merkmale": [
          {
            "name": "Karatay",
            "text": "Graslandschaften Laverneas. Mittlere Größe und Statur, variable Augenfarbe."
          }
        ]
      },
      "Variemar": {
        "merkmale": [
          {
            "name": "Variemar",
            "text": "Kalte Gebiete im Süden Astorils, kältere Nationen Laverneas. Einzigartiges Erkennungsmerkmal: weißes/graues Haar ab Geburt."
          }
        ]
      },
      "Lyssaner": {
        "merkmale": [
          {
            "name": "Lyssaner",
            "text": "Kältere Regionen Laverneas, gerne mit Variemar zusammenlebend. Großes, hellhäutiges Volk."
          }
        ]
      },
      "Chaskaya": {
        "merkmale": [
          {
            "name": "Chaskaya",
            "text": "Dschungel, Steppen und Wüsten Ombrios. Schlank und großgewachsen. Adelige tragen kahlrasierte Köpfe."
          }
        ]
      },
      "Kharadun": {
        "merkmale": [
          {
            "name": "Kharadun",
            "text": "Norden Zephirias und Norden Xandors. Kleiner, stämmiger und muskulöser Körperbau. Eisige Regionen."
          }
        ]
      },
      "Jinyu": {
        "merkmale": [
          {
            "name": "Jinyu",
            "text": "Graslandschaften und gemäßigte Wälder Astorils. Nachnamen werden vor Vornamen genannt."
          }
        ]
      },
      "Mahrok": {
        "merkmale": [
          {
            "name": "Mahrok",
            "text": "Dschungel Slitherlocks, weniger in Elkenless. Groß und kräftig gebaut."
          }
        ]
      }
    },
    "merkmale": [],
    "talente": [
      "Wunderkind",
      "Menschliche Entschlossenheit",
      "Überlebenskünstler"
    ],
    "talentTexte": {
      "Wunderkind": {
        "text": "Die Kreatur erhält Übung in einer Fertigkeit ihrer Wahl, einer Werkzeugfertigkeit ihrer Wahl und fließende Kenntnisse in einer Sprache ihrer Wahl. Wähle eine Fertigkeit, in der sie geübt ist. Die Kreatur erlangt Expertise in dieser Fertigkeit. Die Kreatur kann sich auf bis zu 4 magische Gegenstände einstimmen, anstatt der normalen 3."
      },
      "Menschliche Entschlossenheit": {
        "text": "Wenn sie einen Angriffswurf, einen Attributswurf oder einen Rettungswurf macht, kann sie dies mit Vorteil tun. Die Kreatur kann diese Fähigkeit so oft einsetzen, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Immer wenn sie bei einem W20-Wurf eine 20 würfelt, erhält sie eine Aufladung dieser Fähigkeit zurück."
      },
      "Überlebenskünstler": {
        "text": "Die Kreatur erhält Expertise in der Fertigkeit Weisheit (Überlebenskunst). Die Kreatur kann eine der folgenden Schadensarten auswählen, die sich bestimmte Vorteile gewährt. Kälte: Sie ist gegen Kälteschaden resistent, wodurch sich extreme Kältebedingungen nichts ausmachen. Bei Schneestürmen erhält sie keinen Nachteil auf Weisheitswürfe (Wahrnehmung), die sich auf das Gehör oder die Sicht beziehen. Feuer: Sie ist gegen Feuerschaden resistent, wodurch sich extreme Hitzebedingungen nichts ausmachen. Bei Sandstürmen erhält sie keinen Nachteil auf Weisheitswürfe (Wahrnehmung), die sich auf das Gehör oder die Sicht beziehen. Gift: Sie ist gegen Giftschaden resistent und erhält einen Vorteil bei Rettungswürfen gegen Vergiftungen."
      }
    }
  },
  "Metallische Drachenblütige": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "STR": 2,
      "CHA": 1
    },
    "varianten": {
      "Bronzene Drachenblütige": {
        "resistenzen": [
          "Blitz"
        ],
        "merkmale": [
          {
            "name": "Bronzene Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein furchteinflößender Sturm aus elektrischer Energie, mit der sie Blitzschaden verursacht."
          }
        ]
      },
      "Goldene Drachenblütige": {
        "resistenzen": [
          "Feuer"
        ],
        "merkmale": [
          {
            "name": "Goldene Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein flammendes Inferno, mit der sie Feuerschaden verursacht."
          }
        ]
      },
      "Kupferne Drachenblütige": {
        "resistenzen": [
          "Säure"
        ],
        "merkmale": [
          {
            "name": "Kupferne Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein Schwall aus ätzender Säure, mit der sie Säureschaden verursacht."
          }
        ]
      },
      "Messingfarbige Drachenblütige": {
        "resistenzen": [
          "Feuer"
        ],
        "merkmale": [
          {
            "name": "Messingfarbige Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein Strahl aus Flammen, mit der sie Feuerschaden verursacht."
          }
        ]
      },
      "Silberne Drachenblütige": {
        "resistenzen": [
          "Kälte"
        ],
        "merkmale": [
          {
            "name": "Silberne Drachenblütige: Odemwaffe",
            "text": "Ihre Odemwaffe ist ein eisiger Atem, mit der sie Kälteschaden verursacht."
          }
        ]
      }
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Metallische Abstammung",
        "text": "Die Kreatur hat einen metallischen Drachenvorfahren. Wähle eine Abstammung: Bronze (Blitz), Gold (Feuer), Kupfer (Säure), Messing (Feuer) oder Silber (Kälte). Sie bestimmt die Schadensart ihrer anderen Merkmale."
      },
      {
        "name": "Odemwaffe",
        "text": "Wenn sie die Angreifen-Aktion ausführt, kann sie einen Angriff durch ihren Odem ersetzen: einen 4,5 m langen Kegel magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich ihrem Übungsbonus."
      },
      {
        "name": "Drakonische Resistenz",
        "text": "Die Kreatur ist gegen die Schadensart resistent, die mit ihrer metallischen Abstammung assoziiert ist."
      },
      {
        "name": "Kaltblütig",
        "text": "Die Kreatur ist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Metallische Odemwaffe",
        "text": "Als Bonusaktion atmet sie magische Energie in einem 4,5 m langen Kegel aus (SG = 8 + KON-Mod + Übungsbonus). Wähle einen der beiden Effekte. Einmal pro langer Rast. Entkräftender Odem: Jede Kreatur im Kegel muss einen Konstitutionsrettungswurf bestehen oder ist bis zum Beginn ihres nächsten Zuges kampfesunfähig. Odem der Abstoßung: Jede Kreatur im Kegel muss einen Stärkerettungswurf bestehen oder wird bis zu 6 m von ihr weggestoßen und umgeworfen.",
        "stufe": 5
      }
    ],
    "talente": [
      "Drachenhaut",
      "Drachensicht",
      "Drachensegen"
    ],
    "talentTexte": {
      "Drachenhaut": {
        "text": "Ihre Schuppen werden härter. Solange sie keine Rüstung trägt, kann sie ihre Rüstungsklasse als 13 + ihren Geschicklichkeitsmodifikator berechnen. Auch wenn sie einen Schild trägt, kann sie diesen Vorteil trotzdem nutzen. Wenn eine Kreatur einen Angriffswurf gegen sich ausführt, kann sie ihre Reaktion verwenden, um diesen mit den gehärteten Schuppen an ihrem Schweif zu parieren. Der Angriffswurf der Kreatur schlägt fehl. Die Kreatur kann dieses Merkmal einmal pro lange Rast einsetzen.",
        "wirkung": {
          "rkBasis": 13
        }
      },
      "Drachensicht": {
        "text": "Die Kreatur erhält Übung in Weisheit (Wahrnehmung). Wenn sie bereits geübt in Wahrnehmung ist, erhält sie Expertise in dieser Fertigkeit. Die Kreatur erhält einen Vorteil bei Intelligenz (Nachforschung), um Münzen und andere wertvolle Gegenstände aufzuspüren, und sie erhält einen Vorteil bei Attributswürfen, um den Wert eines Gegenstandes zu bestimmen. Die Kreatur kann im Dunkeln bis zu einer Reichweite von 20 Metern sehen und bis zu einer Reichweite von 3 Metern blind sehen.",
        "wirkung": {
          "fertigkeiten": [
            "Wahrnehmung"
          ]
        }
      },
      "Drachensegen": {
        "text": "Die Kreatur erhält Übung in Intelligenz (Naturkunde). Wenn sie bereits in Naturkunde geübt ist, erhält sie Expertise. Die Kreatur hat einen Vorteil bei Würfen auf Intelligenz (Naturkunde), wenn sie nach Erzvorkommen sucht. Die Kreatur kann ihre Aktion verwenden, um mit ihrem geweihten Atem einen magischen Orb mit einem Durchmesser von 6 m an ihrer Position zu erschaffen. Der Orb fliegt sofort ungehindert durch alle Hindernisse hindurch, bis sein Mittelpunkt 18 m von ihr entfernt ist und er sich daraufhin auflöst. Verbündete Kreaturen, die der Orb berührt, erhalten temporäre Trefferpunkte in Höhe von 2W6 + ihrem Übungsbonus. Die Kreatur kann dieses Merkmal einmal pro lange Rast einsetzen.",
        "wirkung": {
          "fertigkeiten": [
            "Naturkunde"
          ]
        }
      }
    }
  },
  "Minotauren": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "STR": 2,
      "CON": 1
    },
    "merkmale": [
      {
        "name": "Blutiger Ansturm",
        "text": "Nachdem sie in ihrem Zug die Spurt-Aktion ausgeführt und mindestens 6 m zurückgelegt hat, kann sie als Bonusaktion einen Nahkampfangriff mit ihren Hörnern ausführen."
      },
      {
        "name": "Erinnerung des Labyrinths",
        "text": "Die Kreatur weißt immer, wo Norden ist. Die Kreatur ist bei Weisheit-(Überlebenskunst)-Würfen zum Navigieren oder Spurenfolgen im Vorteil."
      },
      {
        "name": "Hämmernde Hörner",
        "text": "Nachdem sie bei der Angreifen-Aktion eine Kreatur mit einem Nahkampfangriff getroffen hat, kann sie als Bonusaktion versuchen, sie mit ihren Hörnern zu stoßen (max. 1 Größenstufe größer als sie, innerhalb 1,5 m). STR-Rettungswurf gegen SG 8 + Übungsbonus + STR-Mod. oder Rückstoß bis 3 m."
      },
      {
        "name": "Hörner",
        "text": "Waffenlose Angriffe mit Hörnern: 1W6 + STR-Mod. Stichschaden."
      }
    ],
    "talente": [
      "Angeborene Wut",
      "Blut und Gemetzel",
      "Labyrinthbewohner"
    ],
    "talentTexte": {
      "Angeborene Wut": {
        "text": "Wenn sie einen Angriff mit einer Nahkampfwaffe mit Stärke ausführt, addiert sie ihren Übungsbonus zum verursachten Schaden. Als Reaktion auf Hieb-, Stich- oder Wuchtschaden kann sie diesen Schaden um die Hälfte reduzieren. Die Kreatur kann dies nur dreimal tun, dann endet ihre Wut. Ihre Bewegungsrate erhöht sich um 1,5 Meter, wenn sie keine schwere Rüstung trägt. Wenn sie auf 0 Trefferpunkte fällt, aber nicht sofort stirbt, kann sie stattdessen auf 1 Trefferpunkt fallen. Unabhängig davon, ob sie sich entscheidet, auf 1 Trefferpunkt zu fallen oder nicht, endet ihre Wut. Wenn sie in der Lage ist, Zauber zu wirken, kann sie sie während ihres Zorns weder wirken noch sich darauf konzentrieren.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Blut und Gemetzel": {
        "text": "Wenn sie einen Angriff mit ihren Hörnern ausführt, erhöht sich ihre Reichweite für kritische Treffer um 1. Wenn sie eine Kreatur mit ihren Hörnern trifft, kann sie sie aufschlitzen, sodass sie blutet. Das Ziel muss zu Beginn jeder seiner Runden einen Konstitutionsrettungswurf ablegen. Bei einem Fehlschlag erleidet die Kreatur Stichschaden in Höhe ihres Übungsbonus. Der Zustand hält so lange an, bis die Kreatur Heilung erhält oder der Rettungswurf dreimal erfolgreich ist. Der Rettungswurf ist gleich 8 + ihr Übungsbonus + ihr Stärkemodifikator. Die Kreatur kann diese Fähigkeit so oft einsetzen, wie es ihrem Übungsbonus entspricht, danach muss sie eine lange Rast einlegen, bevor sie sie erneut einsetzen kann. Wenn sie einen kritischen Treffer mit den Hörnern landet, erhält sie eine Anwendung dieser Fähigkeit zurück."
      },
      "Labyrinthbewohner": {
        "text": "Die Kreatur hat Dunkelsicht bis zu einer Reichweite von 41 m. Die Kreatur ist im Vorteil bei allen Würfen, die sie macht, um sich in dunklen, unterirdischen Räumen zurechtzufinden. Die Kreatur kann sich selbst die komplexesten Layouts von Labyrinthen, verwirrenden Höhlensystemen, Grundrissen von Gebäuden und ähnlichem genau einprägen. So findet sie sich in solchen Umgebungen immer zurecht. Die Kreatur lernt den Zauber Weg finden und kann ihn einmal wirken. Danach muss sie eine lange Rast einlegen, bevor sie ihn erneut wirken kann. Intelligenz, Weisheit oder Charisma ist ihr Attributsmodifikator für diesen Zauber. Wähle das Attribut, wenn sie dieses Talent wählt.",
        "wirkung": {
          "sinne": [
            "Dunkelsicht 41 m"
          ]
        }
      }
    }
  },
  "Myzelier": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Zittersinn 9 m"
    ],
    "resistenzen": [
      "Gift"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "WIS": 2,
      "CON": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Pilzwesen",
        "text": "Die Kreatur ist ein Humanoider, gilt aber als Pflanze, wenn dies für sie von Nachteil ist. Sie hat Resistenz gegen Giftschaden."
      },
      {
        "name": "Zittersinn",
        "text": "Die Kreatur hat Zittersinn in 9 m."
      },
      {
        "name": "Pilznetz",
        "text": "Mit anderen Myzeliern und Pilzen in 1,5 km Umkreis kann die Kreatur kurze Gedanken austauschen."
      },
      {
        "name": "Sporenwirt",
        "text": "Die Kreatur braucht keinen Schlaf. Sie ruht in 4 Stunden, während sie Wurzelfäden in Erde oder Holz schlägt, und hat danach den Vorteil von 8 Stunden Schlaf."
      }
    ],
    "talente": [
      "Sporenwolke",
      "Fruchtkörper",
      "Myzelnetz"
    ],
    "talentTexte": {
      "Sporenwolke": {
        "text": "Als Aktion kann die Kreatur eine Sporenwolke in 3 m Umkreis aufsteigen lassen. Kreaturen darin müssen einen Konstitutionsrettungswurf bestehen (SG = 8 + Übungsbonus + Konstitutionsmodifikator der Kreatur), sonst sind sie bis zum Ende ihres nächsten Zuges vergiftet. Das geht einmal pro kurze oder lange Rast."
      },
      "Fruchtkörper": {
        "text": "Als Bonusaktion kann die Kreatur einen Fruchtkörper ernten: Eine Kreatur, die ihn isst, erhält temporäre Trefferpunkte in Höhe der Stufe + des Konstitutionsmodifikators der Kreatur. Das geht so oft, wie es ihrem Übungsbonus entspricht; die Fruchtkörper wachsen nach einer langen Rast nach."
      },
      "Myzelnetz": {
        "text": "Solange die Kreatur Erde oder Holz berührt, spürt sie Pilze, Pflanzenwurzeln und Gänge im Boden in 18 m Umkreis. Sie hat Vorteil auf Würfe auf Naturkunde und Überleben, die Pilze, Wurzeln und Waldböden betreffen."
      }
    },
    "quelle": "Tales of Arcana 5E Race Guide (Arcanomicon, 2021; Mycelian), Merkmale eigene Fassung nach Lore und Schlagworten"
  },
  "Opteran": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "STR": 1
    },
    "pruefen": [
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
    ],
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [],
    "talente": [],
    "talentTexte": {}
  },
  "Orks": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "STR": 2,
      "CON": 1
    },
    "merkmale": [
      {
        "name": "Adrenalinrausch",
        "text": "Als Bonusaktion Spurt-Aktion ausführen + temporäre TP in Höhe des Übungsbonus erhalten. Anwendungen pro langer Rast entsprechen dem Übungsbonus."
      },
      {
        "name": "Starker Körperbau",
        "text": "Die Kreatur zählt als eine Größenkategorie größer für Traglast sowie Schieben, Ziehen und Anheben."
      },
      {
        "name": "Unermüdliches Durchhaltevermögen",
        "text": "Wenn ihre TP auf 0 sinken und sie nicht direkt stirbt, behält sie stattdessen 1 TP. 1×/langer Rast."
      }
    ],
    "talente": [
      "Auserwählter von Gruumsh",
      "Unaufhaltsame Wildheit",
      "Körper aus Stahl"
    ],
    "talentTexte": {
      "Auserwählter von Gruumsh": {
        "text": "Die Kreatur erlernt den Zauber Vorahnung und kann ihn nach Belieben wirken, ohne einen Zauberplatz zu verbrauchen. Die Kreatur erlernt den Zauber Segnen und den Zauber Göttliche Gunst. Beide Zauber kann sie einmal wirken, ohne einen Zauberplatz zu verbrauchen. Wenn sie auf diese Weise den Segensspruch wirkt, kann sie ihn außerdem als Bonusaktion wirken. Die Kreatur erlangt die Fähigkeit, diese Zauber zu wirken, wieder, wenn sie eine lange Rast beendet. Ihr Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt."
      },
      "Unaufhaltsame Wildheit": {
        "text": "Ihre Reichweite für kritische Treffer wird um eins erhöht. Wenn sie einen kritischen Treffer landet oder eine Kreatur mit einem Nahkampfwaffenangriff auf 0 Trefferpunkte reduziert, kann sie einen weiteren Nahkampfwaffenangriff als Bonusaktion ausführen. Wenn dieser Angriff trifft, verursacht er zusätzlichen Schaden in Höhe ihres Übungsbonus. Einmal pro Runde kann sie, wenn sie bei einem Angriff im Vorteil ist, auf den Vorteil verzichten und stattdessen im Rahmen derselben Angriffsaktion zweimal angreifen. Die Kreatur kann dies so oft tun, wie es ihrem Übungsbonus entspricht, und erhält alle verbrauchten Einsätze nach einer langen Rast zurück."
      },
      "Körper aus Stahl": {
        "text": "Die Kreatur erhält einen Vorteil bei Konstitutionsrettungswürfen. Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Wenn ein Angreifer, den sie sehen kann, sich mit einem Angriff trifft, kann sie ihre Reaktion nutzen, um den Hieb-, Stich- und Wuchtschaden dieses Angriffs zu halbieren.",
        "wirkung": {
          "tpProTW": 1
        }
      }
    }
  },
  "Plasmoid": {
    "kreaturentyp": null,
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Gift",
      "Säure"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CON": 2,
      "DEX": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Amorph",
        "text": "Die Kreatur kann sich durch einen Spalt quetschen, der nur 2,5 Zentimeter breit ist, sofern sie nichts trägt oder bei sich hat. Außerdem hat sie Vorteil auf Eigenschaftswürfe, die sie macht, um einen Griff einzuleiten oder zu entkommen."
      },
      {
        "name": "Atem anhalten",
        "text": "Die Kreatur kann ihren Atem für 1 Stunde anhalten."
      },
      {
        "name": "Natürliche Widerstandsfähigkeit",
        "text": "Die Kreatur hat Resistenz gegen Säure- und Giftschaden und hat Vorteil auf Rettungswürfe gegen Vergiftung."
      },
      {
        "name": "Selbst formen",
        "text": "Als Aktion kann sie ihren Körper umformen, um sich einen Kopf, einen oder zwei Arme, ein oder zwei Beine sowie behelfsmäßige Hände und Füße zu geben, oder sie kann zu einem gliederlosen Klumpen zurückkehren. Solange sie eine menschenähnliche Form hat, kann sie Kleidung und Rüstung tragen, die für einen Humanoiden ihrer Größe gemacht sind. Als Bonusaktion kann sie einen Pseudopod herausstrecken, der bis zu 15 Zentimeter breit und 3 Meter lang ist, oder ihn wieder einziehen. Als Teil dieser Bonusaktion kann sie damit einen Gegenstand handhaben, eine Tür oder einen Behälter öffnen oder schließen oder einen winzigen Gegenstand aufheben oder ablegen. Der Pseudopod kann nicht angreifen, magische Gegenstände aktivieren oder mehr als 4,5 Kilogramm heben."
      }
    ],
    "talente": [
      "Astrale Widerstandsfähigkeit",
      "Pseudopod-Krieger",
      "Ausweichendes Formen"
    ],
    "talentTexte": {
      "Astrale Widerstandsfähigkeit": {
        "text": "Ihr Trefferpunktmaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie dieses Talent erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktmaximum um zusätzlich 1 Trefferpunkt. Die Kreatur erhält Resistenz gegen psychischen Schaden und Kraftschaden. Die Kreatur erhält Vorteil auf Konstitutionswürfe und Rettungswürfe.",
        "wirkung": {
          "resistenzen": [
            "Psychisch"
          ]
        }
      },
      "Pseudopod-Krieger": {
        "text": "Mit ihrem Rassenzug „Selbst formen“ kann sie ihre Bonusaktion verwenden, um bis zu 2 Pseudopoden zu erschaffen, anstatt nur einen. Die Kreatur kann dieselbe Bonusaktion verwenden, um beide gleichzeitig zu steuern. Die Kreatur kann ihre Pseudopoden für jede Aktion verwenden, nicht nur für die in ihrem Zug „Selbst formen“ aufgeführten, einschließlich Angriffe mit einer Waffe, die sie halten. Wenn sie mit dem Pseudopod angreift, hat sie eine Reichweite von 3 Metern. Ihre Pseudopoden fungieren als natürliche Waffen. Sie haben eine Reichweite von 3 Metern und verwenden ihren Stärke- oder Geschicklichkeitsmodifikator und verursachen bei einem Treffer 1W4 Wuchtschaden plus ihren Stärke- oder Geschicklichkeitsmodifikator."
      },
      "Ausweichendes Formen": {
        "text": "Solange sie keine Rüstung trägt, kann sie ihre Rüstungsklasse als 13 + ihren Geschicklichkeitsmodifikator berechnen. Die Kreatur kann einen Schild verwenden und trotzdem von diesem Vorteil profitieren. Wenn eine Kreatur einen Angriffswurf gegen sich macht und dabei genau ihre Rüstungsklasse würfelt, erleidet sie nur halb so viel Schaden durch den Angriff. Wenn sie einem Effekt ausgesetzt ist, der sich erlaubt, einen Geschicklichkeitsrettungswurf zu machen, um nur halb so viel Schaden zu erleiden, nimmt sie nur halb so viel Schaden wie sie sonst nehmen würde. Wenn sie Schaden erleidet, kann sie ihre Reaktion verwenden, um sich bis zur Hälfte ihrer Bewegungsgeschwindigkeit zu bewegen. Diese Bewegung provoziert keine Gelegenheitsangriffe.",
        "wirkung": {
          "rkBasis": 13
        }
      }
    }
  },
  "Ratatosk": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": null,
    "varianten": {
      "Ekorre": {
        "attribute": {
          "DEX": 2,
          "CHA": 1
        },
        "groesse": [
          "Winzig"
        ],
        "merkmale": [
          {
            "name": "Segen von Yggdrasil",
            "text": "Die Kreatur kennt die Zaubertricks Nachricht und Boshafter Spott. Ab Stufe 5: Spiegelbild einmal pro langer Rast. Charisma ist ihre Zaubermerkmalcharakteristik."
          },
          {
            "name": "Winzige Waffen",
            "text": "Die Kreatur kann Waffen mit der Leicht- oder Finesse-Eigenschaft normal führen. Andere Waffen werden als zweihändig behandelt und sie hat Nachteil auf Angriffe damit. Schwere Waffen kann sie nicht verwenden."
          }
        ]
      },
      "Tradvakt": {
        "attribute": {
          "DEX": 2,
          "CON": 1
        },
        "groesse": [
          "Klein"
        ],
        "merkmale": [
          {
            "name": "Kriegsgeplapper",
            "text": "Als Bonusaktion muss eine Nicht-Ratatosk-Kreatur innerhalb von 9 Metern, die sie hören kann, einen Charisma-Rettungswurf (SG 8 + Übungsbonus + KON-Mod) bestehen oder bis zum Beginn ihres nächsten Zuges Nachteil auf Angriffswürfe haben. Einmal pro kurzer oder langer Rast."
          }
        ]
      }
    },
    "merkmale": [
      {
        "name": "Geertes Himmelswesen",
        "text": "Die Kreatur stammt von Himmelswesen ab, ist aber stark mit der sterblichen Welt verbunden. Obwohl sie ein Humanoid ist, ist sie dennoch anfällig für Effekte, die Himmelswesen betreffen."
      },
      {
        "name": "Scharfe Stoßzähne",
        "text": "Ihre scharfen Stoßzähne sind natürliche Waffen für unbewaffnete Angriffe. Bei einem Treffer verursachen sie 1 Stichschaden + 1W4 psychischen Schaden."
      },
      {
        "name": "Telepathisch",
        "text": "Die Kreatur kann telepathisch mit jeder Kreatur sprechen, die sie sehen kann und die sich innerhalb einer Anzahl von Fuß befindet, die dem Zehnfachen ihrer Stufe entspricht. Die Kreatur muss keine gemeinsame Sprache teilen, aber die Kreatur muss mindestens eine Sprache verstehen."
      }
    ],
    "talente": [],
    "talentTexte": {}
  },
  "Sahuagin": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "12 m"
    },
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "STR": 2,
      "WIS": 1
    },
    "merkmale": [
      {
        "name": "Blutrausch",
        "text": "Als Bonusaktion verfällt sie bis zum Ende ihres Zuges in einen Blutrausch. Dabei hat sie Vorteil auf Nahkampfangriffswürfe gegen jede Kreatur, die nicht alle TP hat. KON-Mod Nutzungen pro langer Rast (mind. 1)."
      },
      {
        "name": "Begrenzte Amphibienfähigkeit",
        "text": "Die Kreatur kann Luft und Wasser atmen, muss jedoch mindestens alle 4 Stunden untergetaucht sein — sonst beginnt sie zu ersticken."
      },
      {
        "name": "Natürliche Rüstung",
        "text": "Ihre RK beträgt 12 + GES-Mod (wenn sie keine Rüstung trägt)."
      },
      {
        "name": "Natürliche Angriffe",
        "text": "Die Kreatur hat Übung mit ihren Klauen (1W4 Hiebschaden) und ihrem Biss (1W4 Stichschaden)."
      },
      {
        "name": "Haitelempathie",
        "text": "Die Kreatur kann einem Hai innerhalb von 36 Metern magisch durch begrenzte Telepathie einfache Befehle übermitteln (z. B. „komm her\", „verteidige mich\", „greif an\")."
      }
    ],
    "talente": [],
    "talentTexte": {}
  },
  "Satarre": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "INT": 1
    },
    "pruefen": [
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
    ],
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [],
    "talente": [],
    "talentTexte": {}
  },
  "Satyrn": {
    "kreaturentyp": "Feenwesen",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "13,5 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "CHA": 2,
      "DEX": 1
    },
    "merkmale": [
      {
        "name": "Heitere Sprünge",
        "text": "Bei Hoch- oder Weitsprüngen (auch aus dem Stand) würfelt sie 1W8 und addiert Ergebnis × 0,3 zur gesprungenen Distanz. Die Zusatzdistanz kostet keine Bewegung."
      },
      {
        "name": "Magieresistenz",
        "text": "Die Kreatur ist bei Rettungswürfen gegen Zaubern im Vorteil."
      },
      {
        "name": "Wiederkäuer",
        "text": "Die Kreatur kann mit einer Ration Nahrung dreimal so lange auskommen."
      },
      {
        "name": "Rammbock",
        "text": "Waffenlose Angriffe mit spektralen Hörnern: 1W6 + STR-Mod. Wuchtschaden."
      },
      {
        "name": "Unterhalter",
        "text": "Die Kreatur ist in den Fertigkeiten Auftreten und Überzeugen sowie im Umgang mit einem Musikinstrument ihrer Wahl geübt."
      }
    ],
    "talente": [
      "Geborener Barde",
      "Göttlicher Gesang",
      "Übernatürliche Ignoranz"
    ],
    "talentTexte": {
      "Geborener Barde": {
        "text": "Die Kreatur erlernt einen Zauber der 1. Stufe ihrer Wahl aus der Liste der Bardenzauber, der nicht zu ihrer Anzahl an bekannten/vorbereiteten Zaubern hinzugezählt wird. Die Kreatur kann diesen Zauber einmal pro kurzer Rast wirken, ohne einen Zauberplatz zu verbrauchen. Ihr Attributsmodifikator ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Wenn sie bereits Bardische Inspiration als Klassenmerkmal besitzt oder erlangt, gewährt dies mehr Aufladungen von Bardischer Inspiration in Höhe ihres Übungsbonus; andernfalls erhält sie Aufladungen von Bardischer Inspiration in Höhe ihres Übungsbonus, die W6 sind. Die Kreatur erhält verbrauchte Einsätze zurück, wenn sie eine lange Rast beendet. Wähle als Bonusaktion in ihrem Zug eine andere Kreatur als sie selbst, die sich im Umkreis von 15 m um sie befindet und sie hören kann. Diese Kreatur erhält einen Würfel für Bardische Inspiration. Einmal innerhalb der nächsten 10 Minuten kann diese Kreatur den Würfel werfen und die gewürfelte Zahl zu einem Attributswurf, einem Angriffswurf oder einem Rettungswurf addieren. Die Kreatur kann warten, bis sie den Würfel geworfen hat, bevor sie sich entscheidet, den bardischen Inspirationswürfel zu benutzen, muss sich aber entscheiden, bevor der DM sagt, ob der Wurf erfolgreich war oder nicht. Sobald der Würfel für die bardische Inspiration gewürfelt wurde, ist er verloren. Eine Kreatur kann immer nur einen Würfel für bardische Inspiration haben."
      },
      "Göttlicher Gesang": {
        "text": "Verzaubern: Eine Kreatur im Umkreis von 15 m, die sie hören kann, muss einen Weisheitsrettungswurf bestehen (SG 8 + Übungsbonus + Intelligenz-, Weisheits- oder Charismamodifikator) oder 1 Minute lang von ihr bezaubert sein. Wenn sie oder einer ihrer Gefährten der Kreatur Schaden zufügt, kann sie den Rettungswurf wiederholen. Bei Erfolg oder Effektende ist die Kreatur für 24 Stunden immun gegen dieses Merkmal. Erschrecken: Eine Kreatur im Umkreis von 15 m, die sie hören kann, muss denselben Rettungswurf bestehen oder 1 Minute lang von ihr verängstigt sein. Am Ende jeder ihrer Runden kann sie den Rettungswurf wiederholen. Bei Erfolg oder Effektende ist die Kreatur für 24 Stunden immun gegen dieses Merkmal. Schlaflied: Eine Kreatur innerhalb von 15 m, die sie hören kann, schläft ein und ist 1 Minute lang bewusstlos. Der Effekt endet, wenn die Kreatur Schaden erleidet oder jemand eine Aktion aufwendet, um sie zu wecken. Sobald sie erwacht, ist sie für 24 Stunden immun gegen dieses Merkmal."
      },
      "Übernatürliche Ignoranz": {
        "text": "Wenn sie einen Attributswurf, einen Angriffswurf oder einen Rettungswurf macht und bei dem Wurf einen Vorteil hat, kann sie 1W4 zu dem Ergebnis addieren. Die Kreatur kann die W4 addieren, nachdem sie den Wurf gesehen hat, aber bevor sie das Ergebnis kennt. Die Kreatur kann diese Fähigkeit so oft einsetzen, wie es ihrem Übungsbonus entspricht; alle verbrauchten Einsätze kehren nach einer langen Rast zurück. Wenn sie einen Attributswurf, einen Angriffswurf oder einen Rettungswurf macht und bei dem Wurf einen Nachteil hat, kann sie den Nachteil für diesen Wurf aufheben. Die Kreatur kann diese Fähigkeit so oft einsetzen, wie es ihrem Übungsbonus entspricht; alle verbrauchten Einsätze kehren nach einer langen Rast zurück."
      }
    }
  },
  "Schattenfeen": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Nekrotisch"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "CON": 1
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Geschärfte Sinne",
        "text": "Die Kreatur ist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "text": "Die Kreatur hat Vorteil bei Rettungswürfen gegen Bezauberungen und ist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "text": "Die Kreatur muss nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kann sie zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Nekrotische Resistenz",
        "text": "Die Kreatur ist gegen nekrotischen Schaden resistent."
      },
      {
        "name": "Segen der Rabenkönigin",
        "text": "Als Bonusaktion teleportiert sie sich bis zu 9 m an eine freie Stelle, die sie sieht. Anwendungen pro langer Rast: gleich ihrem Übungsbonus. Ab Stufe 3: Sie erhält bis zum Beginn ihres nächsten Zuges Resistenz gegen alle Schadensarten. Während dieser Zeit erscheint sie geisterhaft und durchsichtig."
      }
    ],
    "talente": [
      "Elfische Treffsicherheit",
      "Schattenblütig",
      "Magie der Schattengeister"
    ],
    "talentTexte": {
      "Elfische Treffsicherheit": {
        "text": "Jedes Mal, wenn sie mit einem Angriff trifft, der kein kritischer Treffer ist, erhöht sich ihre Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis sie einen kritischen Treffer landet, einen Angriff verfehlt oder den Kampf betritt oder verläst; danach wird er auf ihren Standardwert zurückgesetzt. Immer wenn sie bei einem Angriffswurf einen Vorteil hat, kann sie einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      },
      "Schattenblütig": {
        "text": "Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Die Kreatur erhält Resistenz gegen nekrotischen Schaden. Würde sie Schaden dieser Art erleiden, kann sie ihre Reaktion verwenden, um einem Schadenswurf zu widerstehen. Die Kreatur erhält keinen Schaden durch diesen Schadenswurf. Die Kreatur kann diese Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht, und sie erhält alle verbrauchten Einsätze zurück, wenn sie eine lange Rast beendet. Diese Eigenschaft kann in bestimmten Situationen, nach Ermessen des Spielleiters, fehlschlagen. Die Kreatur erhält Resistenz gegen Giftschaden. Die Kreatur hat einen Vorteil bei Rettungswürfen gegen Vergiftung.",
        "wirkung": {
          "tpProTW": 1,
          "resistenzen": [
            "Nekrotisch",
            "Gift"
          ]
        }
      },
      "Magie der Schattengeister": {
        "text": "Ihre Eigenschaft Segen der Rabenkönigin lädt sich jetzt bei einer kurzen oder langen Rast wieder auf. Außerdem kann sie, wenn sie keine Nutzung mehr hat, einen Zauberplatz der Stufe 1 oder höher ausgeben, um diese Fähigkeit erneut zu benutzen. Die Kreatur erlernt die Zauber Unsichtbarkeit und Verderben. Die Kreatur kann jeden dieser Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Ihr Modifikator bei diesen Zaubern ist Weisheit, Charisma oder Intelligenz. Wähle das Attribut, wenn sie dieses Talent auswählt."
      }
    }
  },
  "Schattengoblin": {
    "kreaturentyp": null,
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "DEX": 2,
      "CHA": 1
    },
    "merkmale": [
      {
        "name": "Scharfer Verstand",
        "text": "Die Kreatur hat Übung in den Fertigkeiten Täuschung und Menschenkenntnis."
      },
      {
        "name": "Schattentarnung",
        "text": "Die Kreatur hat Vorteil auf Geschicklichkeit-(Heimlichkeit)-Würfe, die darauf abzielen, sich in schwachem Licht oder Dunkelheit zu verstecken."
      },
      {
        "name": "Böser Blick",
        "text": "Als Aktion führt sie eine Kombination aus unhöflichen Gesten und Geräuschen aus. Eine Kreatur in 9 m, die sie hören und sehen kann, muss einen CHA-Rettungswurf (SG 8 + CHA-Mod + Übungsbonus) bestehen oder hat Nachteil auf den nächsten Eigenschaftswurf, Angriffswurf oder Rettungswurf vor Beginn ihres nächsten Zuges."
      },
      {
        "name": "Sonnenlichtsensitivität",
        "text": "Die Kreatur hat Nachteil auf Angriffswürfe und Weisheit-(Wahrnehmungs)-Würfe, die auf Sicht beruhen, wenn sie, ihr Ziel oder das Wahrgenommene sich in direktem Sonnenlicht befindet."
      },
      {
        "name": "Unholdsegen",
        "text": "Die Kreatur hat Vorteil auf Rettungswürfe gegen Bezauberung und Magie kann sich nicht einschläfern."
      }
    ],
    "talente": [],
    "talentTexte": {}
  },
  "Schattenmenschen": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Kälte"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "attribute": null,
    "varianten": {
      "Umbraler Mensch": {
        "attribute": {
          "DEX": 2,
          "CHA": 1
        },
        "groesse": [
          "Mittelgroß"
        ],
        "bewegung": {
          "Gehen": "9 m"
        },
        "merkmale": [
          {
            "name": "Umbraler Mensch",
            "text": "Dunkle Infusion: Resistenz gegen Kälteschaden · Verblassen: Aktion, werde unsichtbar bis zur Bewegung oder Aktion; Übungsbonus×/Tag"
          }
        ]
      },
      "Die Beschenkten": {
        "attribute": {
          "WIS": 2,
          "CHA": 1
        },
        "resistenzen": [
          "Nekrotisch"
        ],
        "merkmale": [
          {
            "name": "Verfluchte Infusion",
            "text": "Zusätzlich zu Dunkler Infusion hat sie Resistenz gegen nekrotischen Schaden."
          },
          {
            "name": "Schattengeschenk",
            "text": "Die Kreatur hat einen Handel mit einer Schattenfe abgeschlossen. Wähle eine Option: (1) Übung+Vorteil in einer Fertigkeit, Nachteil in einer anderen. (2) Kein Essen/Atmen nötig, 4h für lange Rast, aber eine permanente Erschöpfungsstufe. (3) Halbe Bewegungsrate, dafür Flug-/Schwimm-/Klettergeschwindigkeit gleich halber Basis. (4) +6 auf einen Attributwert (max 20), -2 auf zwei andere. (5) TP = KON-Wert bei Dämmerung täglich, aber keine Trefferwürfel in kurzen Rasten."
          }
        ]
      }
    },
    "merkmale": [
      {
        "name": "Dunkle Infusion",
        "text": "Die Kreatur hat Resistenz gegen Kälteschaden."
      },
      {
        "name": "Verblassen",
        "text": "Während sie vollkommen still steht, kann sie eine Aktion nutzen, um unsichtbar zu werden. Die Kreatur wird wieder sichtbar, wenn sie sich bewegt oder eine Aktion ausführt. Die Kreatur kann diese Fähigkeit so oft pro Tag nutzen, wie ihr Übungsbonus beträgt."
      }
    ],
    "talente": [],
    "talentTexte": {}
  },
  "Schleimling": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CON": 2,
      "DEX": 1
    },
    "pruefen": [
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
    ],
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [],
    "talente": [],
    "talentTexte": {}
  },
  "Stämmige": {
    "kreaturentyp": null,
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "sinne": [],
    "resistenzen": [
      "Gift"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "DEX": 2,
      "CON": 1
    },
    "merkmale": [
      {
        "name": "Halblingsglück",
        "text": "Würfelt sie bei einem Angriffs-, Attributs- oder Rettungswurf eine 1, darf sie den Wurf wiederholen und muss das zweite Ergebnis verwenden."
      },
      {
        "name": "Tapferkeit",
        "text": "Die Kreatur ist im Vorteil bei Rettungswürfen, um den Zustand Verängstigt zu vermeiden."
      },
      {
        "name": "Halblingsgewandheit",
        "text": "Die Kreatur kann sich durch Bereiche bewegen, die von Kreaturen eingenommen werden, die eine Größenkategorie größer sind als sie."
      },
      {
        "name": "Unempfindlichkeit",
        "text": "Die Kreatur ist bei Rettungswürfen gegen Gift im Vorteil und besitzt eine Resistenz gegen Schaden durch Gifte."
      }
    ],
    "talente": [
      "Großzügiges Glück",
      "Hockenstärke",
      "Überragende Gastfreundschaft"
    ],
    "talentTexte": {
      "Großzügiges Glück": {
        "text": "Die Kreatur hat einen Vorrat an Glückspunkten, der ihrem Übungsbonus entspricht. Jedes Mal, wenn sie oder ein Verbündeter in einem Umkreis von 9 m einen Angriffswurf, Attributswurf oder Rettungswurf macht, kann sie einen Glückspunkt ausgeben, um einen zusätzlichen Würfelwurf zu machen. Die Kreatur kann wählen, ob sie einen Glückspunkt ausgeben möchtet, nachdem sie gewürfelt hat, aber bevor das Ergebnis feststeht. Die Kreatur entscheidet, welcher der beiden Würfel verwendet wird. Wenn sie einen Vorteil oder Nachteil hat, führe ihn zuerst aus. Die Kreatur erhält die Hälfte ihrer maximalen Glückspunkte (abgerundet) zurück, wenn sie eine lange Rast beendet."
      },
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Überragende Gastfreundschaft": {
        "text": "Die Kreatur erhält Übung in Kochwerkzeugen und Brauwerkzeugen. Wenn sie einen Wurf auf Charisma (Überzeugen), Kochwerkzeugen oder Brauwerkzeugen ablegt, darf sie dem Wurf das Ergebnis von 1W4 hinzuaddieren. Die Kreatur lernt den Zauber Nahrung und Wasser reinigen. Die Kreatur kann diesen Zauber nach Belieben wirken, ohne einen Zauberplatz zu verbrauchen. Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt.",
        "wirkung": {
          "tpProTW": 1
        }
      }
    }
  },
  "Tabaxi": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "DEX": 2,
      "CHA": 1
    },
    "merkmale": [
      {
        "name": "Katzenkrallen",
        "text": "Waffenlose Angriffe mit Klauen: 1W6 + STR-Mod. Hiebschaden. Kletterbewegung entspricht der Schrittbewegung."
      },
      {
        "name": "Katzentalent",
        "text": "Die Kreatur ist in Wahrnehmung und Heimlichkeit geübt."
      },
      {
        "name": "Katzenwendigkeit",
        "text": "Wenn sie sich im Kampf in ihrem Zug bewegt, kann sie ihre Bewegungsrate bis zum Ende des Zuges verdoppeln. Die Kreatur kann dies erst erneut nutzen, wenn sie sich in einem Zug nicht bewegt hat."
      }
    ],
    "talente": [
      "Katzenanmut",
      "Anführer des Rudels",
      "Neun Leben"
    ],
    "talentTexte": {
      "Katzenanmut": {
        "text": "Die Kreatur erlangt Übung in Geschicklichkeit (Heimlichkeit). Die Kreatur kann ihre Eigenschaft Katzenwendigkeit zweimal einsetzen, bevor sie sich in einem ihrer Züge 0 m bewegen muss, um die Eigenschaft erneut einzusetzen. Die Kreatur kann diese Fähigkeit jedoch nur einmal pro Zug einsetzen, wenn sie sich bewegt. Die Kreatur erleidet keinen Schaden, wenn sie 9 m oder weniger fällt. Wenn sie dennoch Sturzschaden erleidet, kann sie ihn um einen Betrag in Höhe ihrer halben Stufe reduzieren. Wenn sie ihre Bewegung in einem Umkreis von 1,5 m um eine feindliche Kreatur beendet, nachdem sie Katzenwendigkeit eingesetzt hat, kann sie sich als Bonusaktion auf sie stürzen. Führe einen unbewaffneten Nahkampfangriff aus; bei einem Treffer wird das Ziel zu Boden geworfen und von ihr gepackt.",
        "wirkung": {
          "fertigkeiten": [
            "Heimlichkeit"
          ]
        }
      },
      "Anführer des Rudels": {
        "text": "Die Kreatur hat einen Vorteil bei Weisheitswürfen (Umgang mit Tieren) und Charismawürfen, die sie mit katzenartigen Kreaturen durchführt. Die Kreatur erhält Übung in einer Fertigkeit oder ein Werkzeug ihrer Wahl. Die Kreatur erlernt die Zauber Vertrauten finden und Mit Tieren sprechen, und sie kann beide nach Belieben ohne materielle Komponenten wirken. Wenn sie die Zauber nicht von einer anderen Quelle erhält, kann sie nur einen Katzen-Vertrauten erschaffen, und sie kann nur mit Katzen kommunizieren. Ihr Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt."
      },
      "Neun Leben": {
        "text": "Die Kreatur hat einen Vorteil bei Todesrettungswürfen. Wenn sie auf 0 Trefferpunkte reduziert, aber nicht getötet wird, wirf 1W20. Bei einer 9 oder niedriger fällt sie stattdessen auf einen Trefferpunkt und erhält temporäre Trefferpunkte in Höhe ihrer Stufe. Wird durch einen kritischen Treffer auf 0 TP reduziert, funktioniert diese Eigenschaft nicht. Jedes Mal, wenn sie sie erfolgreich einsetzt, sinkt der Schwellenwert um 1 (sie muss dann eine 8 oder niedriger würfeln, dann eine 7 usw.). Nach einer langen Rast wird der Zähler zurückgesetzt."
      }
    }
  },
  "Thri-Kreen": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "WIS": 1
    },
    "pruefen": [
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
    ],
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [],
    "talente": [],
    "talentTexte": {}
  },
  "Tiefengnome": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "INT": 2,
      "DEX": 1
    },
    "merkmale": [
      {
        "name": "Gnomische Gerissenheit",
        "text": "Die Kreatur ist im Vorteil bei allen Rettungswürfen gegen Magie, sofern sie auf Intelligenz, Weisheit oder Charisma basieren."
      },
      {
        "name": "Gabe der Tiefengnome",
        "text": "Ab Stufe 3: Selbstverkleidung 1×/langer Rast. Ab Stufe 5: Unauffindbarkeit 1×/langer Rast (keine Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden."
      },
      {
        "name": "Tiefengnom-Tarnung",
        "text": "Die Kreatur ist bei Geschicklichkeit-(Heimlichkeit)-Würfen im Vorteil. Anwendungen pro langer Rast entsprechen ihrem Übungsbonus."
      }
    ],
    "talente": [
      "Leichtes Verschwinden",
      "Hockenstärke",
      "Meister der Tiefengnom-Magie"
    ],
    "talentTexte": {
      "Leichtes Verschwinden": {
        "text": "Die Kreatur erhält Übung in Geschicklichkeit (Heimlichkeit). Wenn sie bereits in Heimlichkeit geübt ist, erhält sie Expertise. Unmittelbar nachdem sie Schaden erlitten hat, kann sie ihre Reaktion einsetzen, um bis zum Ende ihres nächsten Zugs auf magische Weise unsichtbar zu werden. Die Kreatur kann dies so oft tun, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer kurzen oder langen Rast wieder zur Verfügung.",
        "wirkung": {
          "fertigkeiten": [
            "Heimlichkeit"
          ]
        }
      },
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Meister der Tiefengnom-Magie": {
        "text": "Die Kreatur kann nach Belieben den Zauber Unauffindbarkeit auf sich wirken, ohne materielle Komponenten zu benötigen. Außerdem kann sie jeden der folgenden Zauber einmal mit dieser Fähigkeit wirken: Blindheit/Taubheit, Verschwimmen und Selbstverkleidung. Die Kreatur erlangt die Fähigkeit, diese Zauber zu wirken, wieder, wenn sie eine lange Rast beendet hat. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent auswählt."
      }
    }
  },
  "Tieflinge": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Feuer"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CHA": 2
    },
    "varianten": {
      "Baalbrezan": {
        "attribute": {
          "CON": 1
        },
        "merkmale": [
          {
            "name": "Baalbrezan",
            "text": "Zaubertrick: Kältestrahl · Stufe 3: Rüstung von Agathys (2. Grad) · Stufe 5: Dunkelheit"
          }
        ]
      },
      "Cahbri": {
        "attribute": {
          "INT": 1
        },
        "merkmale": [
          {
            "name": "Cahbri",
            "text": "Zaubertrick: Thaumaturgie · Stufe 3: Höllischer Tadel (2. Grad) · Stufe 5: Dunkelheit"
          }
        ]
      },
      "Grikuuth": {
        "attribute": {
          "INT": 1
        },
        "merkmale": [
          {
            "name": "Grikuuth",
            "text": "Zaubertrick: Thaumaturgie · Stufe 3: Strahl der Übelkeit (2. Grad) · Stufe 5: Krone des Wahnsinns"
          }
        ]
      },
      "Kizrovidus": {
        "attribute": {
          "DEX": 1
        },
        "merkmale": [
          {
            "name": "Kizrovidus",
            "text": "Zaubertrick: Thaumaturgie · Stufe 3: Selbstverkleidung (2. Grad) · Stufe 5: Gedanken wahrnehmen"
          }
        ]
      },
      "Meleshor": {
        "attribute": {
          "INT": 1
        },
        "merkmale": [
          {
            "name": "Meleshor",
            "text": "Zaubertrick: Magierhand · Stufe 3: Tensers Schwebende Scheibe (2. Grad) · Stufe 5: Arkanes Schloss"
          }
        ]
      },
      "Nalphimex": {
        "attribute": {
          "STR": 1
        },
        "merkmale": [
          {
            "name": "Nalphimex",
            "text": "Zaubertrick: Thaumaturgie · Stufe 3: Sengendes Niederstrecken (2. Grad) · Stufe 5: Brandmarkendes Niederstrecken"
          }
        ]
      },
      "Netrosk": {
        "attribute": {
          "DEX": 1
        },
        "merkmale": [
          {
            "name": "Netrosk",
            "text": "Zaubertrick: Einfache Illusion · Stufe 3: Selbstverkleidung (2. Grad) · Stufe 5: Unsichtbarkeit"
          }
        ]
      },
      "Vezvoriak": {
        "attribute": {
          "INT": 1,
          "CHA": 2
        },
        "merkmale": [
          {
            "name": "Vezvoriak",
            "text": "Zaubertrick: Magierhand · Stufe 3: Brennende Hände (2. Grad) · Stufe 5: Flammenklinge"
          }
        ]
      },
      "Yx'larak": {
        "attribute": {
          "WIS": 1
        },
        "merkmale": [
          {
            "name": "Yx'larak",
            "text": "Zaubertrick: Freundschaft · Stufe 3: Person bezaubern (2. Grad) · Stufe 5: Einflüsterung"
          }
        ]
      }
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt): CHA+2 Basis, +1 je Blutlinie",
    "merkmale": [
      {
        "name": "Höllische Resistenz",
        "text": "Die Kreatur besitzt eine Resistenz gegen Feuerschaden."
      },
      {
        "name": "Infernalisches Erbe",
        "text": "Die Kreatur erhält Zauber und eine Attributserhöhung je nach Blutlinie. Zaubermerkmal: Charisma. Stufenplan: Zaubertrick (1), Stufe-2-Zauber (3), weiterer Zauber (5) — je 1×/langer Rast oder mit Zauberplätzen."
      }
    ],
    "talente": [
      "Meister der Höllenmagie",
      "Höllenverbundenheit"
    ],
    "linienTalente": [
      "Höllische Konstitution des Baalbrezan",
      "Höllische Geschwindigkeit der Cahbri",
      "Höllischer Wahnsinn des Grikuuth",
      "Höllische List des Kizrovidus",
      "Höllisches Chaos der Meleshor",
      "Höllisches Ultimatum des Nalphimex",
      "Höllischer Blutrausch der Netrosk",
      "Höllische Bibliothek des Vezvoriak",
      "Höllische Liebe der Yx'larak"
    ],
    "talentTexte": {
      "Meister der Höllenmagie": {
        "text": "Die Kreatur erlernt einen Zaubertrick ihrer Wahl, der Schaden der ihrer Abstammung zugeordneten Schadensart verursacht (siehe Tabelle). Ihr Attributsmodifikator ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen). Die Kreatur erlernt den Zauber Verwünschen. Die Kreatur kann ihn einmal ohne Zauberplatz wirken; danach benötigt sie eine lange Rast. Ihr Attributsmodifikator ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen). Die Kreatur erlernt einen Zauber der 1. Stufe ihrer Wahl, der Schaden der ihrer Abstammung zugeordneten Schadensart verursacht (siehe Tabelle). Die Kreatur kann ihn einmal ohne Zauberplatz wirken; danach benötigt sie eine lange Rast. Ihr Attributsmodifikator ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen). Wenn sie Schaden der ihrer Abstammung zugeordneten Schadensart verursacht, kann sie die betroffene Kreatur zu einem Charismarettungswurf zwingen (SG 8 + Übungsbonus + Attributsmodifikator). Bei einem Fehlschlag wird die Kreatur bis zum Ende ihres nächsten Zuges von ihr verängstigt oder bezaubert (ihre Wahl). Die Kreatur kann dies so oft tun, wie es ihrem Übungsbonus entspricht; danach benötigt sie eine lange Rast."
      },
      "Höllenverbundenheit": {
        "text": "Wenn sie Schaden verursacht, der dieser Schadensart entspricht, kann sie ihren Übungsbonus zum Schaden des Angriffs addieren. Immer wenn sie einen Zauber der 1. Stufe oder höher wirkt, der diese Schadensart verursacht, kann sie bewirken, dass sich eine Minute lang ein elementarer Mantel der Schadensart umhüllt. Der Mantel schadet weder ihr noch ihrem Besitz und verbreitet helles Licht bis zu 9 m sowie schwaches Licht für weitere 9 m. Solange der Mantel vorhanden ist, erleidet jede Kreatur im Umkreis von 1,5 m, die sie mit einem Nahkampfangriff trifft, Schaden dieser Art in Höhe ihres Übungsbonus. Außerdem erleidet jede Kreatur, die sie packt oder von ihr gepackt wird, zu Beginn jeder ihrer Runden Schaden dieser Art in Höhe ihres Übungsbonus."
      },
      "Höllische Konstitution des Baalbrezan": {
        "text": "Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erhält. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Die Kreatur erhält Resistenz gegen Kälte- und Giftschaden. Die Kreatur hat einen Vorteil bei Rettungswürfen gegen Vergiftung. Als Aktion kann sie während eines Kampfes in einen Wutzustand verfallen, der 1 Minute andauert: Als Reaktion auf eingehenden Hieb-, Stich- oder Wuchtschaden kann sie diesen Schaden um die Hälfte reduzieren (zweimal pro Wut). Wenn sie einer Kreatur Hieb-, Stich- oder Wuchtschaden zufügt, fügt sie Kälteschaden in Höhe ihres Übungsbonus hinzu. Während des Zorns kann sie keine Zauber wirken oder sich auf sie konzentrieren. Die Kreatur kann dieses Merkmal einmal pro lange Rast verwenden.",
        "wirkung": {
          "tpProTW": 1,
          "resistenzen": [
            "Kälte",
            "Gift"
          ]
        }
      },
      "Höllische Geschwindigkeit der Cahbri": {
        "text": "Die Kreatur erhält Resistenz gegen nekrotischen und strahlenden Schaden. Zu Beginn ihres Zuges kann sie als Bonusaktion ihre Bewegungsrate aufbrauchen, um sich in magische Nebel einzuhüllen und sich bis zu 9 m weit in ein unbesetztes Feld zu teleportieren, das sie sehen kann. An dieser Stelle kann sie eine ihrer verfügbaren Aktionen verwenden, für die keine Bewegungsrate notwendig ist, und sich im Anschluss erneut bis zu 9 m weit in ein unbesetztes Feld zu teleportieren, das sie sehen kann. Die Kreatur kann diese Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung.",
        "wirkung": {
          "resistenzen": [
            "Nekrotisch",
            "Strahlend"
          ]
        }
      },
      "Höllischer Wahnsinn des Grikuuth": {
        "text": "Die Kreatur erhält Resistenz gegen Säureschaden. Die Kreatur erhält Übung in Weisheitsrettungswürfen. Als Aktion kann sie einer Kreatur, die sie sehen kann, telepathisch Visionen ihres dämonischen Vorfahren zeigen. Sie muss einen Weisheitsrettungswurf bestehen (SG: 8 + Übungsbonus + ein Attributsmodifikator ihrer Wahl) oder erleidet 1W6 psychischen Schaden, hat Nachteil auf ihren nächsten Angriffswurf und muss ihre Bewegungsrate verwenden, um 3 m in eine zufällige Richtung zu laufen. Die Kreatur erlernt den Zauber Melfs Säurepfeil und kann ihn auf dem 2. Grad verwenden. Ihr Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen des Talents). Die Kreatur kann ihn einmal ohne Zauberplatz wirken; danach benötigt sie eine lange Rast. Die Kreatur kann ihn auch mit einem verfügbaren Zauberplatz des entsprechenden Grads wirken.",
        "wirkung": {
          "resistenzen": [
            "Säure"
          ]
        }
      },
      "Höllische List des Kizrovidus": {
        "text": "Die Kreatur erhält Resistenz gegen nekrotischen und Giftschaden. Ihr Wissen über Gifte und deren Anwendung erlaubt es ihr, eine Phiole Gift bis zu zwei Mal zu verwenden, bevor sie verbraucht ist. Die Kreatur kann ihre Aktion verwenden, um einen Gegner in Nahkampfreichweite zu entwaffnen (höchstens eine Größenkategorie größer als sie). Würfle Stärke (Athletik) oder Geschicklichkeit (Akrobatik) gegen den Wurf der Kreatur. Erzielt sie das höhere Ergebnis, stößt sie ihr die Waffe aus der Hand und kann sie in ihrem nächsten Zug nur noch unbewaffnet angreifen. Die Kreatur kann diese Eigenschaft so oft verwenden, wie es ihrem Übungsbonus entspricht; alle Aufladungen stehen nach einer langen Rast wieder zur Verfügung. Entwaffnet sie die Kreatur erfolgreich, kann sie als Bonusaktion die Waffe mit einer freien Hand auffangen und mit Vorteil einen Nahkampfangriff gegen die Kreatur ausführen. Trägt die Kreatur eine schwere Waffe, muss sie zuerst einen Stärke-Wurf mit SG 15 bestehen (mit Vorteil, falls sie geübt ist). Der Schaden entspricht dem Basisschaden der Waffe + dem Attributsmodifikator. Danach lässt sie die Waffe fallen.",
        "wirkung": {
          "resistenzen": [
            "Gift",
            "Nekrotisch"
          ]
        }
      },
      "Höllisches Chaos der Meleshor": {
        "text": "Die Kreatur erhält Resistenz gegen Schallschaden. Die Kreatur ist immun gegen den Zustand Taub. Als Aktion kann sie einen Spalt zum chaotischen Reich Meleshors öffnen. Portale entlassen zufällige Gegenstände, die bis zu einer Minute in einem Radius von 3 m um sie wirbeln und ihr folgen. Feindliche Kreaturen, die beim Entstehen des Wirbels betroffen sind, ihn betreten oder ihren Zug in ihm beginnen oder beenden, müssen einen Geschicklichkeitsrettungswurf bestehen (SG: 8 + Übungsbonus) oder erleiden Wucht-, Hieb- oder Stichschaden (zufällig) in Höhe ihres Übungsbonus. Verbündete müssen denselben Wurf bestehen, aber mit SG 5. Die Kreatur kann diese Eigenschaft einmal pro kurze Rast verwenden. Während der Wirbel aktiv ist, kann sie eine Aktion verwenden, um einen weiteren Spalt über dem Kopf einer feindlichen Kreatur in Reichweite von 9 m zu öffnen. Ein zufälliger Gegenstand fällt auf die Kreatur; sie muss einen Geschicklichkeitsrettungswurf (SG: 8 + Übungsbonus) bestehen oder erleidet Schaden und Effekte gemäß der Gegenstandstabelle (DM). Verwendet sie dieses Merkmal ein zweites Mal, endet der Wirbel vorzeitig.",
        "wirkung": {
          "resistenzen": [
            "Schall"
          ],
          "zustandsimmunitaeten": [
            "Taub"
          ]
        }
      },
      "Höllisches Ultimatum des Nalphimex": {
        "text": "Die Kreatur erhält Resistenz gegen Energieschaden. Als Bonusaktion kann sie eine feindliche Kreatur zu einem Duell herausfordern. Die Kreatur und die Kreatur erhalten Vorteil bei Angriffswürfen aufeinander und Nachteil auf Angriffswürfe auf jede andere Kreatur. Außerdem können sich weder sie noch die betroffene Kreatur willentlich voneinander wegbewegen. Die Kreatur kann dieses Merkmal einmal pro lange Rast verwenden. Trifft sie während des Duells eine Kreatur mit einem Hieb- oder Stichschadens-Angriff, erleidet sie Klaffende Wunden (bis zu dreimal stapelbar). Jeder Stapel bewirkt −1 auf alle Angriffs-, Attributs- und Rettungswürfe. Würde eine Kreatur den 3. Stapel erhalten, wird sie stattdessen von allen Stapeln befreit und erleidet 3W10 Energieschaden.",
        "wirkung": {
          "resistenzen": [
            "Energie"
          ]
        }
      },
      "Höllischer Blutrausch der Netrosk": {
        "text": "Die Kreatur erhält Resistenz gegen Stich- und nekrotischen Schaden. Immer wenn eine Kreatur in ihrer Nahkampfreichweite stirbt, darf sie ihre Reaktion verwenden, um eine Distanz in Höhe ihrer Bewegungsrate in direkter Linie auf eine feindliche Kreatur zuzubewegen. Diese Bewegung provoziert keine Gelegenheitsangriffe, doch kann sie Hindernisse nicht passieren und bleibt stattdessen davor stehen. Im Kampf kann sie ihre Bonusaktion verwenden, um ihre Verbundenheit zu Netrosk bis zum Ende ihres nächsten Zuges zu stärken und sich in zischende pinkfarbene Flammen zu hüllen. Trifft sie eine Kreatur mit einem Nahkampfangriff, erleidet diese 1W4 Feuerschaden zusätzlich. Die Kreatur kann diese Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung.",
        "wirkung": {
          "resistenzen": [
            "Nekrotisch",
            "Stich"
          ]
        }
      },
      "Höllische Bibliothek des Vezvoriak": {
        "text": "Die Kreatur erhält Resistenz gegen Blitzschaden. Die Kreatur erhält Vorteil bei Rettungswürfen, um den Zustand Gelähmt zu widerstehen. Die Kreatur kann ihre Aktion verwenden, um Vezvoriaks unendliche Bibliothek anzurufen und ein Buch zu beschwören, das den Namen einer zufälligen Kreatur in Reichweite von 18 m trägt. Die Kreatur würfelt auf die Tabelle der Schicksalsomen (1W20), um den Effekt zu bestimmen. Bei einer feindlichen Kreatur werden negative Effekte angewendet. Die Kreatur kann diese Eigenschaft einmal pro kurze Rast einsetzen.",
        "wirkung": {
          "resistenzen": [
            "Blitz"
          ]
        }
      },
      "Höllische Liebe der Yx'larak": {
        "text": "Die Kreatur erhält Resistenz gegen psychischen Schaden. Die Kreatur hat einen Vorteil bei Rettungswürfen, um den Zustand Bezaubert zu widerstehen. Die Kreatur erhält 3 m Blindsicht. Die Kreatur erlernt den Zauber Person bezaubern und kann ihn mit diesem Merkmal auf der ersten Stufe wirken. Der SG ergibt sich aus 8 + Übungsbonus + einem ihrer Attributsmodifikatoren (Wahl beim Erlernen des Talents). Wenn sie Person bezaubern mit diesem Merkmal wirkt, würfeln Kreaturen, die gegen sich oder ihre Gefährten kämpfen, nicht mit Vorteil bei diesem Rettungswurf. Die Kreatur kann diese Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung.",
        "wirkung": {
          "resistenzen": [
            "Psychisch"
          ]
        }
      }
    }
  },
  "Tortels": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "STR": 2,
      "WIS": 1
    },
    "merkmale": [
      {
        "name": "Atem anhalten",
        "text": "Die Kreatur kann bis zu eine Stunde lang den Atem anhalten."
      },
      {
        "name": "Intuition der Natur",
        "text": "Die Kreatur ist in einer Fertigkeit ihrer Wahl geübt: Heilkunde, Heimlichkeit, Mit Tieren umgehen, Naturkunde, Überlebenskunst oder Wahrnehmung."
      },
      {
        "name": "Kaltblütig",
        "text": "Die Kreatur ist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Klauen",
        "text": "Waffenlose Angriffe mit Klauen: 1W6 + STR-Mod. Hiebschaden."
      },
      {
        "name": "Natürliche Rüstung",
        "text": "Basis-RK 17 (kein GES-Mod). Die Kreatur kann keine leichten, mittelschweren oder schweren Rüstungen tragen. Schild-Boni gelten normal."
      },
      {
        "name": "Panzerverteidigung",
        "text": "Als Aktion in den Panzer zurückziehen: +4 RK, Vorteil bei STR- und KON-Rettungswürfen. Im Panzer: Zustand Liegend, Bewegung 0, Nachteil auf GES-Rettungswürfe, keine Reaktionen, einzige Aktion = Bonusaktion zum Herauskommen."
      }
    ],
    "talente": [
      "Erbe der Drachenschildkröte",
      "Meister des Panzers",
      "Naturmagie der Tortels"
    ],
    "talentTexte": {
      "Erbe der Drachenschildkröte": {
        "text": "Die Kreatur erhält eine Schwimmgeschwindigkeit, die ihrer Schrittgeschwindigkeit entspricht. Die Kreatur erhält Resistenz gegen Feuerschaden. Wenn sie die Angriffsaktion ausführt, kann sie einen ihrer Angriffe durch das Ausatmen einer Wolke aus kochendem Dampf in einem Kegel von 7,5 m ersetzen. Jede Kreatur im Bereich muss einen Rettungswurf auf Geschicklichkeit machen (SG 8 + Konstitutionsmodifikator + Übungsbonus). Bei einem Fehlschlag erleidet die Kreatur 2W10 Feuerschaden, bei Erfolg die Hälfte. Unterwasser zu sein gewährt keine Resistenz gegen diesen Schaden. Der Schaden erhöht sich auf 3W10 auf Stufe 5, 4W10 auf Stufe 11 und 5W10 auf Stufe 17. Die Kreatur kann diese Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung.",
        "wirkung": {
          "resistenzen": [
            "Feuer"
          ]
        }
      },
      "Meister des Panzers": {
        "text": "Die Kreatur kann nun bis zu +2 zu ihrer natürlichen Rüstungsklasse hinzufügen, abhängig von ihrem Geschicklichkeitsmodifikator. Wenn sie von einem Angriff getroffen wird, kann sie ihre Reaktion nutzen, um ihre Eigenschaft Panzerverteidigung zu aktivieren, wodurch der Angriff möglicherweise fehlschlägt. Die Kreatur kann Panzerverteidigung auch als Bonusaktion einsetzen. Während sie sich zurückzieht, haben Nahkämpfer keinen Vorteil gegen sich wegen der Bodenlage, und sie darf Reaktionen einsetzen — wenn sie das tut, kommt sie jedoch aus ihrem Panzer heraus."
      },
      "Naturmagie der Tortels": {
        "text": "Die Kreatur erlernt den Zaubertrick Druidenkunst und einen weiteren Druidenzaubertrick ihrer Wahl. Die Kreatur erlernt den Zauber Verstricken und einen weiteren Druidenzauber der 1. Stufe ihrer Wahl. Die Kreatur kann jeden dieser Zauber einmal wirken, ohne einen Zauberplatz zu verbrauchen; nach einer langen Rast kann sie dies erneut tun. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen). Wenn sie ihre Eigenschaft Panzerverteidigung einsetzt, erhält sie Vorteil bei Konstitutionswürfen zur Aufrechterhaltung der Konzentration. Außerdem kann sie während Panzerverteidigung ihre Bonusaktion oder Aktion nutzen, um einen aktiven Zauber zu verändern oder aufrechtzuerhalten."
      }
    }
  },
  "Tritons": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Kälte"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "STR": 1,
      "CON": 1,
      "CHA": 1
    },
    "merkmale": [
      {
        "name": "Amphibisch",
        "text": "Die Kreatur kann Luft und Wasser atmen."
      },
      {
        "name": "Gesandter des Meeres",
        "text": "Die Kreatur kann einfache Ideen an alle Tiere, Elementare und Monstrositäten mit Schwimmbewegungsrate vermitteln. Sie können sich verstehen — sie sie jedoch nicht automatisch."
      },
      {
        "name": "Luft und Wasser kontrollieren",
        "text": "Zaubertrick: Nebelwolke. Stufe 3: Windstoß (1×/langer Rast oder mit Zauberplatz). Stufe 5: Auf Wasser gehen (1×/langer Rast oder mit Zauberplatz). Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Wächter der Tiefen",
        "text": "Die Kreatur ist gegen Kälteschaden resistent."
      }
    ],
    "talente": [
      "Speer des Ozeans",
      "Magie der Ozeane",
      "Kind der Strömungen"
    ],
    "talentTexte": {
      "Speer des Ozeans": {
        "text": "Die Kreatur hat Übung im Umgang mit dem Dreizack. Wenn sie einen Dreizack ausgerüstet hat, erhält sie einen Bonus von +1 auf ihre Rüstungsklasse. Dreizacke, die sie schwingt, erhalten die Eigenschaft Finesse. Die Kreatur kann ihren Übungsbonus auf den Schaden addieren, den sie mit Dreizacken verursacht. Wenn sie die Angriffsaktion ausführt und mit einem Dreizack angreift, kann sie eine Bonusaktion nutzen, um einen weiteren Angriff mit dieser Waffe auszuführen. Die Kreatur hat einen Vorteil bei Angriffswürfen, wenn sie und das Ziel, das sie angreift, vollständig unter Wasser sind."
      },
      "Magie der Ozeane": {
        "text": "Die Kreatur erlernt den Zaubertrick Wasser formen. Die Kreatur erlernt die Zauber Wasser erschaffen oder zerstören und Schutzwind. Die Kreatur kann jeden Zauber auf seiner niedrigsten Stufe einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Ihr Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Immer wenn sie ihren Zug vollständig unter Wasser beginnt, erhält sie vorübergehend Trefferpunkte in Höhe ihrer Stufe. Diese temporären Trefferpunkte gehen verloren, wenn sie ihren Zug nicht unter Wasser beendet."
      },
      "Kind der Strömungen": {
        "text": "Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erlangt. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Würde sie Kälteschaden erleiden, kann sie ihre Reaktion verwenden, um einen Schadenswurf zu widerstehen und keinen Schaden durch diesen Schadenswurf zu erleiden. Die Kreatur kann diese Eigenschaft so oft einsetzen, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Diese Eigenschaft kann nach Ermessen des Spielleiters fehlschlagen. Die Kreatur erhält unter Wasser einen Vorteil auf Stärke- und Geschicklichkeitswürfe. Wenn sie eine ganze kurze Rast unter Wasser verbringt, darf sie eine Anzahl von Trefferwürfeln in Höhe ihres Konstitutionsmodifikators (mindestens 1) so behandeln, als hätte sie ihr Maximum gewürfelt.",
        "wirkung": {
          "tpProTW": 1
        }
      }
    }
  },
  "Waldelfen": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "10,5 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "DEX": 2,
      "WIS": 1
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [
      {
        "name": "Geschärfte Sinne",
        "text": "Die Kreatur ist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "text": "Die Kreatur hat Vorteil bei Rettungswürfen gegen Bezauberungen und ist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "text": "Die Kreatur muss nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kann sie zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Elfische Waffenvertrautheit",
        "text": "Die Kreatur ist geübt im Umgang mit Langschwertern, Kurzschwertern, Langbögen und Kurzbögen."
      },
      {
        "name": "Deckmantel der Wildnis",
        "text": "Die Kreatur kann versuchen, sich zu verstecken, wenn sie nur von Blattwerk, starkem Regen, fallendem Schnee, Nebel oder anderen natürlichen Phänomenen leicht verschleiert wird."
      }
    ],
    "talente": [
      "Elfische Treffsicherheit",
      "Baumverkleidung",
      "Waldmagie"
    ],
    "talentTexte": {
      "Elfische Treffsicherheit": {
        "text": "Jedes Mal, wenn sie mit einem Angriff trifft, der kein kritischer Treffer ist, erhöht sich ihre Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis sie einen kritischen Treffer landet, einen Angriff verfehlt oder den Kampf betritt oder verläst; danach wird er auf ihren Standardwert zurückgesetzt. Immer wenn sie bei einem Angriffswurf einen Vorteil hat, kann sie einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      },
      "Baumverkleidung": {
        "text": "Die Kreatur lernt Druidisch, die Geheimsprache der Druiden. Die Kreatur lernt den Zauber Rindenhaut und kann ihn nach Belieben wirken. Die Kreatur erlernt die Zauber Verstricken und Dornenwuchs. Die Kreatur kann jeden dieser Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Ihr Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut aus, wenn sie dieses Talent auswählt."
      },
      "Waldmagie": {
        "text": "Die Kreatur erlernt einen Zaubertrick der Druiden-Zauberliste ihrer Wahl. Die Kreatur erlernt außerdem die Zauber Lange Schritte und Spurloses Gehen, die sie jeweils einmal wirken kann, ohne einen Zauberplatz zu verbrauchen; diese Fähigkeit kehrt nach einer langen Rast zurück. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent wählt. Wenn sie einen Zauber spricht, der einen positiven Effekt auf ihr Ziel anwendet und die Dauer des Effekts 1 Minute oder länger beträgt, kann sie die Dauer für diesen Zauber verdoppeln. Nachdem sie diese Fähigkeit eingesetzt hat, kann sie sie erst nach einer kurzen oder langen Rast erneut nutzen."
      }
    }
  },
  "Waldgnome": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein"
    ],
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "INT": 2,
      "DEX": 1
    },
    "merkmale": [
      {
        "name": "Gnomische Gerissenheit",
        "text": "Die Kreatur ist im Vorteil bei allen Rettungswürfen gegen Magie, sofern sie auf Intelligenz, Weisheit oder Charisma basieren."
      },
      {
        "name": "Geborene Illusionisten",
        "text": "Die Kreatur beherrscht den Zaubertrick Einfache Illusion. Das Zaubermerkmal dafür ist Intelligenz."
      },
      {
        "name": "Tierflüsterer",
        "text": "Durch Laute und Gesten kann sie einfache Gedanken mit kleinen oder winzigen Tieren austauschen."
      }
    ],
    "talente": [
      "Leichtes Verschwinden",
      "Hockenstärke",
      "Freund des Waldes"
    ],
    "talentTexte": {
      "Leichtes Verschwinden": {
        "text": "Die Kreatur erhält Übung in Geschicklichkeit (Heimlichkeit). Wenn sie bereits in Heimlichkeit geübt ist, erhält sie Expertise. Unmittelbar nachdem sie Schaden erlitten hat, kann sie ihre Reaktion einsetzen, um bis zum Ende ihres nächsten Zugs auf magische Weise unsichtbar zu werden. Die Kreatur kann dies so oft tun, wie es ihrem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer kurzen oder langen Rast wieder zur Verfügung.",
        "wirkung": {
          "fertigkeiten": [
            "Heimlichkeit"
          ]
        }
      },
      "Hockenstärke": {
        "text": "Erhöhe ihre Bewegungsrate um 1,5 m. Die Kreatur erhält entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (ihre Wahl). Die Kreatur hat einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der sie sich aus einer Umklammerung befreien möchtet. Die Kreatur kann in jeder ihrer Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen.",
        "wirkung": {
          "bewegungPlus": 1.5
        }
      },
      "Freund des Waldes": {
        "text": "Die Kreatur erhält einen Bonus auf ihre Initiative in Höhe ihres Übungsbonus. Wenn sie sich in einem Wald aufhält, erhält sie einen Vorteil auf Weisheitswürfe. Die Kreatur lernt die Zauber Mit Tieren sprechen und Mit Pflanzen sprechen und kann sie nach Belieben wirken, ohne materielle Komponenten zu verbrauchen. Ihr Modifikator für diese Zauber ist Weisheit, Intelligenz oder Charisma. Wähle das Attribut, wenn sie dieses Talent auswählt."
      }
    }
  },
  "Wandler": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": null,
    "varianten": {
      "Werbären": {
        "attribute": {
          "CON": 2,
          "STR": 1
        },
        "merkmale": [
          {
            "name": "Werbären",
            "text": "Tierfell: 1W6 temporäre TP beim Wandeln + +1 RK im gewandelten Zustand"
          }
        ]
      },
      "Werechsen": {
        "attribute": {
          "INT": 2,
          "CON": 1
        },
        "resistenzen": [
          "Feuer"
        ],
        "merkmale": [
          {
            "name": "Werechsen",
            "text": "Feuerresistenz + Kaltblütig + Schuppenflut (Schwimmen + Unterwasseratmen) + Harte Schuppen (skalierend 1W4→1W10)"
          }
        ]
      },
      "Werkühe": {
        "attribute": {
          "CHA": 2,
          "STR": 1
        },
        "merkmale": [
          {
            "name": "Werkühe",
            "text": "Wiederkäuer + Tobendes Stampfen (Bonusaktion: alle Kreaturen in 4,5 m, STR-SG, liegend + 1W4 Schaden, 1×/kurze Rast)"
          }
        ]
      },
      "Werraben": {
        "attribute": {
          "INT": 2,
          "CHA": 1
        },
        "merkmale": [
          {
            "name": "Werraben",
            "text": "Dunkelsicht 18 m + Täuschen geübt + Himmelsflug (Fluggeschwindigkeit = Schrittbewegung im gewandelten Zustand, keine Rüstung)"
          }
        ]
      },
      "Werratten": {
        "attribute": {
          "DEX": 2,
          "CHA": 1
        },
        "merkmale": [
          {
            "name": "Werratten",
            "text": "Wahrnehmung geübt + Schnellschritt (+3 m Bewegung gewandelt + Reaktions-Ausweichen 3 m ohne Gelegenheitsangriff)"
          }
        ]
      },
      "Werschafe": {
        "attribute": {
          "CON": 2,
          "WIS": 1
        },
        "resistenzen": [
          "Kälte"
        ],
        "merkmale": [
          {
            "name": "Werschafe",
            "text": "Kälteresistenz + Wiederkäuer + Rammbock (nach 6 m Anlauf: Bonusaktion, STR-SG, 1W8 + Rückstoß 4,5 m, Übungsbonus Nutzungen)"
          }
        ]
      },
      "Werschweine": {
        "attribute": {
          "WIS": 2,
          "STR": 1
        },
        "merkmale": [
          {
            "name": "Werschweine",
            "text": "Kann nicht von Geruch-verströmenden Kreaturen überrascht werden + Wahrnehmung geübt + Vorteil auf Nahrungssuche-Würfe"
          }
        ]
      },
      "Werspinnen": {
        "attribute": {
          "WIS": 2,
          "DEX": 1
        },
        "merkmale": [
          {
            "name": "Werspinnen",
            "text": "Dunkelsicht 18 m + Wahrnehmung geübt + Spinnennetz 1×/langer Rast + Klettern = Schrittbewegung + Decken-Klettern ab Stufe 3 + Zitterkriecher (Spinnenbeine + Erschütterungssinn 3 m im gewandelten Zustand)"
          }
        ]
      },
      "Wertiger": {
        "attribute": {
          "STR": 2,
          "WIS": 1
        },
        "merkmale": [
          {
            "name": "Wertiger",
            "text": "Dunkelsicht 18 m + Tigerkrallen (gewandelt: +1W4 Hieb auf waffenlose Angriffe + Bonusaktion-Angriff in derselben Runde)"
          }
        ]
      },
      "Werwölfe (hundeartig)": {
        "attribute": {
          "WIS": 2,
          "DEX": 1
        },
        "merkmale": [
          {
            "name": "Werwölfe (hundeartig)",
            "text": "Wildjäger (gewandelt: Vorteil auf WEI-Rettungswürfe + kein Angreifer in 9 m erhält Vorteil gegen sie, sofern nicht kampfunfähig)"
          }
        ]
      },
      "Werwölfe (wolfsartig)": {
        "attribute": {
          "STR": 2,
          "DEX": 1
        },
        "merkmale": [
          {
            "name": "Werwölfe (wolfsartig)",
            "text": "Dunkelsicht 18 m + Langzahn (gewandelt: Bonusaktion-Biss 1W6+STR Stich, in jedem gewandelten Zug wiederholbar)"
          }
        ]
      }
    },
    "merkmale": [
      {
        "name": "Tierische Instinkte",
        "text": "Die Kreatur ist in einer Fertigkeit ihrer Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "text": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis sie stirbt oder mit Bonusaktion abbricht. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhält sie den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      }
    ],
    "talente": [
      "Selbsterhaltungstrieb",
      "Animalische Allianz",
      "Extrem dickes Fell",
      "Rasende Reißzähne",
      "Übernatürliche Geschwindigkeit",
      "Urtümliche Instinkte des Jägers",
      "Giftige Rache",
      "Bebende Erde",
      "Entwickelte Gliedmaßen",
      "Schatzhorter",
      "Territorialverhalten",
      "Warmer Wollmantel",
      "Wunden lecken"
    ],
    "talentTexte": {
      "Selbsterhaltungstrieb": {
        "text": "Wenn sie auf 0 Trefferpunkte reduziert, aber nicht sofort getötet wird, kann sie stattdessen auf 1 Trefferpunkt fallen. Außerdem kann sie, wenn der Angreifer in Reichweite ist, ihre Reaktion nutzen, um einen Gelegenheitsangriff gegen diese Kreatur mit Vorteil durchzuführen. Nachdem sie diese Fähigkeit eingesetzt hat, muss sie eine lange Rast einlegen, bevor sie sie erneut einsetzen kann. Wenn sie unter 1/2 ihrer gesamten Trefferpunkte ist (aufgerundet), kann sie ihren Übungsbonus zu ihren Schadenswürfen addieren. Wenn sie unter 1/10 ihrer gesamten Trefferpunkte ist (aufgerundet), kann sie alle ihre Angriffe mit Vorteil ausführen."
      },
      "Animalische Allianz": {
        "text": "Die Kreatur erhält Übung in Weisheit (Mit Tieren umgehen). Wenn sie in dieser Fertigkeit bereits geübt ist, erlangt sie Expertise. Die Kreatur erlernt den Zauber Mit Tieren sprechen und kann ihn einmal pro kurzer oder langer Rast wirken, ohne einen Zauberplatz zu verbrauchen. Die Kreatur kann ihr Merkmal \"Wandeln\" ein zusätzliches Mal einsetzen. Verbrauchte Anwendungen stehen ihr nach einer langen Rast wieder zur Verfügung.",
        "wirkung": {
          "fertigkeiten": [
            "Mit Tieren umgehen"
          ]
        }
      },
      "Extrem dickes Fell": {
        "text": "Wenn sie ihre Bonusaktion zum Verwandeln einsetzt, erhöht sich die Anzahl der temporären Trefferpunkte, die sie erhält, um weitere 1W6. Dies erhöht sich mit steigender Stufe: auf 2W6 bei Stufe 4, auf 3W6 bei Stufe 8, auf 4W6 bei Stufe 12, auf 5W6 bei Stufe 16 und auf 6W6 bei Stufe 20. Der Bonus auf ihre Rüstungsklasse während der Verwandlung erhöht sich um die Hälfte ihres Übungsbonus (abrunden). Während sie verwandelt ist, erhält sie Resistenz gegen Wucht-, Hieb- und Stichwaffenschaden von nichtmagischen Waffen, die nicht versilbert sind."
      },
      "Rasende Reißzähne": {
        "text": "Während sie verwandelt ist, fügen ihre verlängerten Reißzähne zusätzlichen Stichschaden in Höhe ihres Übungsbonus zu. Wenn sie eine Kreatur mit ihren verlängerten Reißzähnen trifft, erhält sie temporäre Trefferpunkte in Höhe ihres Übungsbonus. Diese stapeln sich mit vorhandenen temporären Trefferpunkten, es sei denn, sie hat bereits temporäre TP, die ihre Stufe übersteigen. Wenn sie mit ihren verlängerten Reißzähnen angreift, erhöht sich ihre Reichweite für kritische Treffer um 1."
      },
      "Übernatürliche Geschwindigkeit": {
        "text": "Während sie gewandelt ist, erhöht sich ihre Bewegungsrate um zusätzliche 1,5 m. Mit steigender Stufe erhöht sich diese Bewegung weiter: auf 3 m auf Stufe 5, auf 4,5 m auf Stufe 11 und auf 6 m auf Stufe 17. Wenn sie ihre Reaktion einsetzt, um sich zu bewegen, nachdem eine Kreatur ihren Zug in einem Umkreis von 1,5 m von sich beendet hat, kann sie einen Gelegenheitsangriff gegen diese Kreatur ausführen, bevor sie sich bewegt. Außerdem kann sie sich während der Verschiebung eine Anzahl von Metern bewegen, die ihrer erhöhten Bewegungsrate entspricht, anstatt der üblichen 3 m. Während sie gewandelt ist, erhält sie eine Kletter- und Schwimmgeschwindigkeit, die ihrer Schrittgeschwindigkeit entspricht."
      },
      "Urtümliche Instinkte des Jägers": {
        "text": "Während sie verwandelt ist, erhält sie außerdem einen Vorteil auf alle Weisheitswürfe. Wenn sie während ihrer Verwandlung einen Angriff, einen Rettungswurf oder einen Attributswurf mit Vorteil würfelt, kann sie einen der Würfel wiederholen. Außerdem verlängert sich die Dauer ihrer Wandlung um eine Anzahl von Minuten, die ihrem Übungsbonus entspricht. Wenn sie am Ende der Dauer noch temporäre Trefferpunkte aus ihrer Wandlung hat, dauert ihre Wandlung so lange, bis sie diese temporären Trefferpunkte verliert. Diese temporären Trefferpunkte gehen nach einer kurzen oder langen Rast verloren."
      },
      "Giftige Rache": {
        "text": "Während sie gewandelt ist, besitzt sie eine Resistenz gegen Giftschaden. Während sie gewandelt ist, besitzt sie eine Immunität gegen Vergiftung. Wenn sie ihr Merkmal \"Harte Schuppen\" einsetzt und der Schaden durch einen Nahkampfwaffenangriff verursacht wurde, kann sie als Teil ihrer Reaktion einen Konterangriff durchführen, der Giftschaden dem Würfelergebnis entsprechend verursacht."
      },
      "Bebende Erde": {
        "text": "Wenn eine Kreatur, die sie sehen kann, in einem 1,5m Radius um sich steht und einen Angriff ausführen will, kann sie ihre Reaktion verwenden, um diese mit einem gezielten Stampfen aus dem Gleichgewicht zu bringen. Die betroffene Kreatur führt diesen Angriffswurf nun mit Nachteil durch. Die Anzahl der Verwendungen entspricht ihrem Übungsbonus und sie erhält verbrauchte Anwendungen nach einer langen Rast zurück."
      },
      "Entwickelte Gliedmaßen": {
        "text": "Die Kreatur kann wann immer sie möchtet ihre Spinnenbeine wachsen lassen und muss dafür nicht das Merkmal Zitterkriecher einsetzen. Ihre Spinnenbeine sind weiterentwickelt und können komplexere Aufgaben erledigen, wie zum Beispiel Instrumente spielen, kochen und leichte Waffen tragen und werfen (bis zu 1 Pfund pro Bein)."
      },
      "Schatzhorter": {
        "text": "Die Kreatur erhält Übung in Charisma (Überzeugen). Wenn sie in Überzeugen bereits geübt ist, erlangt sie Expertise. Die Kreatur erlernt den Zaubertrick Botschaft. Die Kreatur hat einen Vorteil bei Würfen auf Intelligenz (Nachforschung), wenn sie nach Schätzen sucht.",
        "wirkung": {
          "fertigkeiten": [
            "Überzeugen"
          ]
        }
      },
      "Territorialverhalten": {
        "text": "Die Kreatur erhält Übung in Kochwerkzeugen. Wenn eine feindliche Kreatur, die sie sehen kann, während sie gewandelt ist, mit ihrer Bewegung ihre Nahkampfreichweite betritt, kann sie ihre Reaktion verwenden, um sie mit ihren Hauern oder einem Kopfstoß anzugreifen. Führe einen waffenlosen Gelegenheitsangriff gegen die Kreatur aus; der Schaden beträgt 1W4 + ihrem Stärkemodifikator an Wuchtschaden. Bei einem Treffer muss das Ziel einen Stärke- oder Geschicklichkeitsrettungswurf (Wahl des Ziels) bestehen oder wird 3 m zurückgestoßen und erhält den Zustand liegend. Der Schwierigkeitsgrad ergibt sich aus 8 + Übungsbonus + einem ihrer Attributsmodifikatoren (Wahl beim Erwerb des Talents). Der Schadenswürfel skaliert: W8 auf Stufe 6, W10 auf Stufe 11, W12 auf Stufe 16. Die Kreatur kann dieses Merkmal so oft einsetzen, wie es ihrem Übungsbonus entspricht; alle Aufladungen werden bei einer kurzen Rast wiederhergestellt."
      },
      "Warmer Wollmantel": {
        "text": "Während sie verwandelt ist, erhält sie Resistenz gegen Wucht-, Hieb- und Stichschaden von nicht-magischen Waffen, die nicht versilbert sind. Ihr Wollmantel ist temperaturausgleichend. Die Kreatur erleidet keinen Nachteil in extremer Hitze oder extremer Kälte. Die Kreatur erleidet keinen Nachteil bei schwierigem Gelände in bergigen oder hügeligen Regionen."
      },
      "Wunden lecken": {
        "text": "Während sie gewandelt ist, kann sie als Bonusaktion 1W10 + ihre Stufe an Trefferpunkten regenerieren. Die Kreatur kann dieses Merkmal nach einer langen Rast erneut anwenden. Die Kreatur erhält Übung in Charisma (Einschüchtern). Wenn sie in Einschüchtern bereits geübt ist, erlangt sie Expertise.",
        "wirkung": {
          "fertigkeiten": [
            "Einschüchtern"
          ]
        }
      }
    }
  },
  "Wasser-Genasi": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Säure"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "CON": 2,
      "WIS": 1
    },
    "merkmale": [
      {
        "name": "Säuresistenz",
        "text": "Die Kreatur ist gegen Säureschaden resistent."
      },
      {
        "name": "Ruf der Welle",
        "text": "Die Kreatur kennt den Zaubertrick Säurespritzer. Ab Stufe 3: Wasser erschaffen oder zerstören 1×/langer Rast. Ab Stufe 5: Auf Wasser gehen 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Amphibisch",
        "text": "Die Kreatur kann Luft und Wasser atmen."
      }
    ],
    "talente": [
      "Widerstand des Ursprungs",
      "Verderbnis des Abgrunds",
      "Wächter der Wellen"
    ],
    "talentTexte": {
      "Widerstand des Ursprungs": {
        "text": "Ihr Trefferpunktemaximum erhöht sich um einen Betrag, der ihrer Stufe entspricht, wenn sie diese Fähigkeit erlangt. Jedes Mal, wenn sie danach eine Stufe aufsteigt, erhöht sich ihr Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Die Kreatur erhält Resistenz gegen Giftschaden und einen Vorteil bei Rettungswürfen gegen Vergiftungen. Die Kreatur wird immun gegen kritische Treffer. Wenn ein Treffer ein kritischer Treffer sein sollte, wird er stattdessen zu einem normalen Treffer.",
        "wirkung": {
          "tpProTW": 1
        }
      },
      "Verderbnis des Abgrunds": {
        "text": "Die Kreatur lernt Infernalisch, die Sprache der Kreaturen des Abgrunds. Wenn sie Infernalisch bereits kennt, kann sie stattdessen eine andere Sprache ihrer Wahl erlernen. Die Kreatur erhält Resistenz gegen psychischen Schaden und einen Vorteil bei Schutzwürfen gegen Furcht. Die Kreatur erlernt den Zauber Chaospfeil und den Zauber Tashas fürchterlicher Lachanfall. Die Kreatur kann diese Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Ihr Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn sie dieses Talent auswählt.",
        "wirkung": {
          "resistenzen": [
            "Psychisch"
          ]
        }
      },
      "Wächter der Wellen": {
        "text": "Alle Ausrüstungsgegenstände können entweder mit ihrer Form verschmelzen oder weiterhin benutzt werden. Getragene Rüstungen zählen zur Rüstungsklasse; verschmolzene Waffen können nicht benutzt werden. Die Kreatur erhält temporäre Trefferpunkte in Höhe ihrer halben Stufe × Übungsbonus. Verliert sie diese temporären Trefferpunkte, endet die wässrige Form vorzeitig. Die Kreatur kann den Raum einer anderen Kreatur durchqueren, aber nicht dort enden. Die Kreatur kann durch Lücken von bis zu 2,5 cm Größe schwimmen. Die Kreatur erhält eine Schwimmgeschwindigkeit doppelt so hoch wie ihre Schrittgeschwindigkeit. Während sie vollständig unter Wasser ist, wird sie unsichtbar (gilt nicht für getragene Ausrüstung). Die Kreatur ist resistent gegen Feuer- und Giftschaden und immun gegen die Zustände Gefesselt, Festgesetzt und Vergiftet. Die wässrige Form dauert eine Minute, bis die temporären Trefferpunkte aufgebraucht sind, oder bis sie sie als Bonusaktion beendet. Die Kreatur kann sie nach einer langen Rast erneut einsetzen.",
        "wirkung": {
          "resistenzen": [
            "Feuer",
            "Gift"
          ],
          "zustandsimmunitaeten": [
            "Festgesetzt",
            "Gefesselt",
            "Vergiftet"
          ]
        }
      }
    }
  },
  "Wechselbälger": {
    "kreaturentyp": "Feenwesen",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "attribute": {
      "CHA": 2,
      "DEX": 1
    },
    "merkmale": [
      {
        "name": "Gestaltwandler",
        "text": "Als Aktion Erscheinungsbild und Stimme ändern: Haut, Haare, Frisur, Geschlecht, Größe (Klein↔Mittelgroß), Gewicht, anderes Volk (Spielwerte unverändert). Nicht: Personen, die sie nie gesehen hat; Kreaturen mit grundlegend anderer Gliedmaßen-Anordnung. Kleidung/Ausrüstung unverändert. Gestalt hält an bis sie sie als Aktion ändert oder stirbt."
      },
      {
        "name": "Wechselbalg-Instinkte",
        "text": "Die Kreatur ist in 2 Fertigkeiten ihrer Wahl geübt: Auftreten, Einschüchtern, Motiv erkennen, Täuschen oder Überzeugen."
      }
    ],
    "talente": [
      "Chamäleon",
      "Morphender Körper",
      "Ausweichendes Morphen"
    ],
    "talentTexte": {
      "Chamäleon": {
        "text": "Die Kreatur hat einen Vorteil bei allen Rettungswürfen gegen Zauber oder Effekte, die ihre wahre Natur enthüllen sollen, einschließlich Wahrsagungszauber. Wenn sie einen Wurf auf Charisma (Täuschen) nicht besteht, kann sie ihn wiederholen. Der neue Wurf muss akzeptiert werden. Dieses Merkmal kann sie einmal pro kurzer Rast einsetzen. Die Kreatur kann Unauffindbarkeit, auf sich selbst zielend, nach Belieben wirken. Charisma ist ihr Attribut für diesen Zauber."
      },
      "Morphender Körper": {
        "text": "Die Kreatur erhält Resistenz gegen Giftschaden und einen Vorteil bei Rettungswürfen gegen Vergiftungen. Wenn sie Schaden nimmt, kann sie ihre Reaktion nutzen, um bis zum Beginn ihres nächsten Zuges eine Resistenz gegen diesen Schadenstyp zu entwickeln. Wenn sie einen kritischen Treffer erleidet, kann sie ihn in einen normalen Treffer umwandeln. Die Kreatur kann diese Fähigkeit so oft einsetzen, wie es ihrem Konstitutionsmodifikator entspricht (mindestens einmal); danach benötigt sie eine lange Rast."
      },
      "Ausweichendes Morphen": {
        "text": "Wenn sie ihre Rüstungsklasse berechnet, kann sie ihren Charismamodifikator anstelle ihres Geschicklichkeitsmodifikators verwenden. Wenn sie einem Effekt ausgesetzt ist, der es sich erlaubt, einen Geschicklichkeitsrettungswurf zu machen, um nur die Hälfte des Schadens zu erleiden, kann sie ihre Reaktion nutzen, um diesen Schaden um einen Betrag zu reduzieren, der ihrem Charismamodifikator multipliziert mit ihrem Übungsbonus (mindestens 1) entspricht. Wenn sie diese Fähigkeit einsetzt, kann jedes Wesen, das sich sehen kann, erkennen, dass sie ein Gestaltwandler ist. Wenn eine Kreatur im Umkreis von 9 Metern, die sie sehen kann, einen Angriffswurf gegen sich ausführt, kann sie als Reaktion ihre Form verändern. Die Kreatur hat nun einen Nachteil bei diesem Angriffswurf. Wenn sie diese Fähigkeit einsetzt, zeigt sich ihre Gestaltwandlernatur jedem Wesen, das sich sehen kann. Die Kreatur kann dies nach einer langen Rast erneut tun."
      }
    }
  },
  "Wiedergeborene": {
    "kreaturentyp": "Humanoid",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Gift"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CON": 2,
      "WIS": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)",
    "merkmale": [
      {
        "name": "Erbe",
        "text": "Die Kreatur behält alle Fertigkeiten, in denen ihre vorherige Rasse geübt ist, sowie Klettern-, Fliegen- oder Schwimmbewegungsraten."
      },
      {
        "name": "Untote Natur",
        "text": "Vorteil auf Rettungswürfe gegen Krankheit und Vergiftung + Resistenz gegen Giftschaden · Vorteil auf Todesrettungswürfe · Kein Essen, Trinken oder Atmen nötig · Kein Schlaf, kein magischer Schlaf möglich; lange Rast in 4 Stunden inaktiv/bewegungslos, bei Bewusstsein."
      },
      {
        "name": "Wissen um ein vergangenes Leben",
        "text": "Wenn sie einen Attributswurf mit Fertigkeit ausführt, kann sie sofort nach dem Sehen des W20-Ergebnisses 1W6 würfeln und das Ergebnis addieren. Anwendungen = Übungsbonus, alle nach langer Rast."
      }
    ],
    "talente": [],
    "talentTexte": {}
  },
  "Yuan-ti": {
    "kreaturentyp": "Humanoider",
    "groesse": [
      "Klein",
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m"
    },
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "resistenzen": [
      "Gift"
    ],
    "immunitaeten": [],
    "sprachen": null,
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "attribute": {
      "DEX": 2,
      "INT": 1
    },
    "merkmale": [
      {
        "name": "Giftunempfindlichkeit",
        "text": "Die Kreatur ist bei Rettungswürfen gegen den Vergiftet-Zustand sowie zu dessen Aufhebung bei sich selbst im Vorteil. Außerdem ist sie gegen Giftschaden resistent."
      },
      {
        "name": "Kaltblütig",
        "text": "Die Kreatur ist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Magieresistenz",
        "text": "Die Kreatur ist bei Rettungswürfen gegen Zauber im Vorteil."
      },
      {
        "name": "Schlangenzauber",
        "text": "Zaubertrick: Gift versprühen. Tierfreundschaft auf Schlangen unbegrenzt. Stufe 3: Einflüsterung 1×/langer Rast (oder mit Zauberplatz 2.+ Grad). Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      }
    ],
    "talente": [
      "Schlangennest",
      "Höhere Schlangenart",
      "Ätzende Schuppen"
    ],
    "talentTexte": {
      "Schlangennest": {
        "text": "Die Kreatur hat einen Vorteil bei Weisheitsprüfungen (Umgang mit Tieren) im Umgang mit Schlangen. Als Aktion kann sie einen Haufen Stöcke, zehn Pfeile oder kleine Holzstücke in einen Schwarm giftiger Schlangen verwandeln. Der Schwarm handelt als ihr Verbündeter und gehorcht ihren Befehlen. Diese Verwandlung dauert eine Minute, danach kehrt der Schwarm in seine ursprüngliche Form zurück. Wird der Schwarm vorher getötet, verwandelt er sich vorzeitig in seine ursprüngliche Form zurück. Die Kreatur kann dies nur einmal tun und diese Fähigkeit nach einer kurzen oder langen Ruhepause wieder erlangen."
      },
      "Höhere Schlangenart": {
        "text": "Ihre Schuppen werden härter. Solange sie keine Rüstung trägt, kann sie ihre RK als 13 + ihren Geschicklichkeitsmodifikator berechnen. Die Kreatur kann einen Schild benutzen und diesen Vorteil trotzdem nutzen. Dir wachsen einziehbare Reißzähne aus ihrem Mund. Die Reißzähne sind natürliche Waffen, die sie für unbewaffnete Schläge einsetzen kann. Wenn sie mit ihnen trifft, fügt sie anstelle des normalen Hiebschadens eines unbewaffneten Schlags 1W4 + ihren Stärke- oder Geschicklichkeitsmodifikator als Stichschaden zu. Wähle das Attribut, wenn sie dieses Talent wählt. Wenn sie mit ihren Reißzähnen trifft, kann sie dem Ziel zusätzlich 2W6 Giftschaden zufügen. Die Kreatur kann dies so oft tun, wie es ihrem Übungsbonus entspricht, und erhält alle verbrauchten Einsätze nach einer langen Rast zurück."
      },
      "Ätzende Schuppen": {
        "text": "Die Kreatur erhält Resistenz gegen Säureschaden. Als Bonusaktion hüllt sie sich in diese schleimige Säure, die eine Minute lang anhält. Während die Säure ihre Haut bedeckt, erhält sie folgende Vorteile: Immer wenn sie Säureschaden verursacht, kann sie zusätzlichen Schaden in Höhe ihres Übungsbonus verursachen. Wenn sie eine Kreatur mit einem Nahkampfangriff trifft, erleidet sie Säureschaden in Höhe ihres Übungsbonus. Wenn sie eine Kreatur im Griff hat, erleidet diese Kreatur zu Beginn jeder ihrer Runden Säureschaden in Höhe ihres Übungsbonus. Die Kreatur kann dies einmal tun, danach muss sie eine lange Rast einlegen, bevor sie es wieder tun kann.",
        "wirkung": {
          "resistenzen": [
            "Säure"
          ]
        }
      }
    }
  },
  "Zentauren": {
    "kreaturentyp": null,
    "groesse": [
      "Groß"
    ],
    "bewegung": {
      "Gehen": "12 m"
    },
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "STR": 2,
      "WIS": 1
    },
    "pruefen": [
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
    ],
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)",
    "merkmale": [],
    "talente": [],
    "talentTexte": {}
  }
};
