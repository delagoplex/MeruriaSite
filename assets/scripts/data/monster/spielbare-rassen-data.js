// Spielbare Rassen — NSC-Statblöcke je Rasse und angeborenem Talent (Rassenvorlage mit Rassenmerkmalen).
// Generiert von tools/generate-rassen-statblocks.mjs aus assets/scripts/data/rassen/*.js — dort ändern, nicht hier.
// Noch ohne Statblock (Rassen-Datei hat keine statblock-Daten): Alraunen, Cnidaran, Grung, Hadozee, Hobgoblins, Kriegsgeschmiedete, Leonin, Lotol, Myzelier, Opteran, Satarre, Schleimling, Thri-Kreen, Zentauren.

window.MONSTER_DATA_SPIELBARE_RASSEN = [
  {
    "name": "Aarakocra (Rasse: Aarakocra-Elementarmagie)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 12,
      "CON": 10,
      "INT": 10,
      "WIS": 11,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache",
      "eine weitere Sprache nach Wahl"
    ],
    "umgebung": [],
    "bild": "assets/images/races/aarakocra/charaktere.png",
    "beschreibung": [
      "Frühere Aarakocra dienten einst mächtigen Luftwesen. Als Nachkomme weist du noch einen Schatten dieser Macht auf.",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Aarakocra-Elementarmagie."
    ],
    "besonderheiten": [
      {
        "name": "Flug",
        "beschreibung": "Du hast Flügel, daher entspricht deine Flugbewegungsrate deiner Schrittbewegungsrate. Du kannst deine Flugbewegungsrate nicht benutzen, wenn du mittelschwere oder schwere Rüstung trägst."
      },
      {
        "name": "Krallen",
        "beschreibung": "Du hast Krallen, mit denen du waffenlose Angriffe ausführen kannst. Wenn du mit ihnen triffst, bewirkt der Treffer 1W6 + deinen Stärkemodifikator an Hiebschaden statt des üblichen Wuchtschadens."
      },
      {
        "name": "Windrufer",
        "beschreibung": "Ab der 3. Stufe kannst du mit diesem Merkmal den Zauber Windstoß wirken, ohne Materialkomponenten zu benötigen. Wenn du den Zauber mit diesem Merkmal wirkst, kannst du ihn erst nach einer langen Rast erneut wirken. Du kannst den Zauber auch mit einem beliebigen verfügbaren Zauberplatz 2. oder höheren Grades wirken. Dein Attribut zum Wirken von Windstoß ist Intelligenz, Weisheit oder Charisma — wähle das Attribut aus, wenn du dieses Volk auswählst."
      },
      {
        "name": "Angeborenes Talent: Aarakocra-Elementarmagie",
        "beschreibung": "Dein Studium der Luft und der Winde hat verborgene magische Kräfte freigesetzt. Du erlernst den Zaubertrick Windbö. Du hast die Wahl zwischen dem Zauber Dolchwolke, dem Zauber Staubteufel und dem Zauber Schutzwind. Du lernst den gewählten Zauber und kannst ihn einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Intelligenz, Weisheit oder Charisma ist deine Zauberfertigkeit für diese Zaubersprüche. Wähle das Attribut, wenn du dieses Talent wählst. Wenn du einen Angriffswurf machst und triffst, kannst du einen Windstoß auf das Ziel richten und es zwingen, bis zu 1,5 Meter von dir weggestoßen zu werden. Ein großes oder größeres Wesen oder Objekt ist davon nicht betroffen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Aarakocra (Rasse: Kormorani)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 12,
      "CON": 10,
      "INT": 10,
      "WIS": 11,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache",
      "eine weitere Sprache nach Wahl"
    ],
    "umgebung": [],
    "bild": "assets/images/races/aarakocra/charaktere.png",
    "beschreibung": [
      "Frühere Aarakocra dienten einst mächtigen Luftwesen. Als Nachkomme weist du noch einen Schatten dieser Macht auf.",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Kormorani."
    ],
    "besonderheiten": [
      {
        "name": "Flug",
        "beschreibung": "Du hast Flügel, daher entspricht deine Flugbewegungsrate deiner Schrittbewegungsrate. Du kannst deine Flugbewegungsrate nicht benutzen, wenn du mittelschwere oder schwere Rüstung trägst."
      },
      {
        "name": "Krallen",
        "beschreibung": "Du hast Krallen, mit denen du waffenlose Angriffe ausführen kannst. Wenn du mit ihnen triffst, bewirkt der Treffer 1W6 + deinen Stärkemodifikator an Hiebschaden statt des üblichen Wuchtschadens."
      },
      {
        "name": "Windrufer",
        "beschreibung": "Ab der 3. Stufe kannst du mit diesem Merkmal den Zauber Windstoß wirken, ohne Materialkomponenten zu benötigen. Wenn du den Zauber mit diesem Merkmal wirkst, kannst du ihn erst nach einer langen Rast erneut wirken. Du kannst den Zauber auch mit einem beliebigen verfügbaren Zauberplatz 2. oder höheren Grades wirken. Dein Attribut zum Wirken von Windstoß ist Intelligenz, Weisheit oder Charisma — wähle das Attribut aus, wenn du dieses Volk auswählst."
      },
      {
        "name": "Angeborenes Talent: Kormorani",
        "beschreibung": "Du gehörst zu den Kormorani, Aarakocra, die sich an das Leben an den Küsten angepasst haben. Du erhältst die Eigenschaft amphibisch — du kannst sowohl in der Luft als auch im Wasser normal atmen. Du erlernst den Zaubertrick Wasser formen sowie den Zauber Wasser erschaffen oder zerstören. Du kannst Wasser erschaffen oder zerstören einmal ohne Zauberplatz wirken; nach einer langen Rast kannst du dies erneut tun. Intelligenz, Weisheit oder Charisma sind deine Attribute für diese Zaubersprüche (Wahl beim Erlernen des Talents). Du erhältst eine Schwimmbewegungsrate, die deiner Flugbewegungsrate entspricht."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Aarakocra (Rasse: Wächter der Winde)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 12,
      "CON": 10,
      "INT": 10,
      "WIS": 11,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache",
      "eine weitere Sprache nach Wahl"
    ],
    "umgebung": [],
    "bild": "assets/images/races/aarakocra/charaktere.png",
    "beschreibung": [
      "Frühere Aarakocra dienten einst mächtigen Luftwesen. Als Nachkomme weist du noch einen Schatten dieser Macht auf.",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Wächter der Winde."
    ],
    "besonderheiten": [
      {
        "name": "Flug",
        "beschreibung": "Du hast Flügel, daher entspricht deine Flugbewegungsrate deiner Schrittbewegungsrate. Du kannst deine Flugbewegungsrate nicht benutzen, wenn du mittelschwere oder schwere Rüstung trägst."
      },
      {
        "name": "Krallen",
        "beschreibung": "Du hast Krallen, mit denen du waffenlose Angriffe ausführen kannst. Wenn du mit ihnen triffst, bewirkt der Treffer 1W6 + deinen Stärkemodifikator an Hiebschaden statt des üblichen Wuchtschadens."
      },
      {
        "name": "Windrufer",
        "beschreibung": "Ab der 3. Stufe kannst du mit diesem Merkmal den Zauber Windstoß wirken, ohne Materialkomponenten zu benötigen. Wenn du den Zauber mit diesem Merkmal wirkst, kannst du ihn erst nach einer langen Rast erneut wirken. Du kannst den Zauber auch mit einem beliebigen verfügbaren Zauberplatz 2. oder höheren Grades wirken. Dein Attribut zum Wirken von Windstoß ist Intelligenz, Weisheit oder Charisma — wähle das Attribut aus, wenn du dieses Volk auswählst."
      },
      {
        "name": "Angeborenes Talent: Wächter der Winde",
        "beschreibung": "Luftkampf-Ausbildung: Wahrnehmungs-Expertise, Waffenübung, Nachteil auf Gelegenheitsangriffe in der Luft und Sturzangriffs-Bonus. Du bist in Weisheit (Wahrnehmung) geübt. Wenn du bereits geübt bist, erhältst du Expertise. Du bist geübt im Umgang mit Speeren, Wurfspeeren und Netzen. Gelegenheitsangriffe, die gegen dich in der Luft ausgeführt werden, sind im Nachteil. Hat der Gegner einen Vorteil gegen dich, gleicht sich dies aus und der Angriff wird normal ausgeführt. Wenn du fliegst und mindestens 3 Meter auf ein Ziel zustürzt (mindestens 3 Meter deiner Bewegungsrate müssen zum Verringern deiner Höhe genutzt werden), bevor du es mit einer Nahkampfwaffe triffst, verursacht der Angriff zusätzlichen Waffenschaden in Höhe deines Übungsbonus."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Aasimar (Rasse: Göttliche Gesundheit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Nekrotisch",
      "Gleißend"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Kinder des Lichts · Gesandte der Götter",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Göttliche Gesundheit."
    ],
    "besonderheiten": [
      {
        "name": "Celestische Resistenz",
        "beschreibung": "Du bist gegen nekrotischen und gleißenden Schaden resistent."
      },
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 Metern kannst du in dämmrigem Licht wie in hellem Licht sehen."
      },
      {
        "name": "Heilende Hände",
        "beschreibung": "Als Aktion kannst du eine Kreatur berühren und Würfel in Höhe deines Übungsbonus werfen (W4). Die Kreatur gewinnt Trefferpunkte zurück. Einmal pro langer Rast."
      },
      {
        "name": "Lichtträger",
        "beschreibung": "Du kennst den Zaubertrick Licht. Dein Attribut zum Zauberwirken ist Charisma."
      },
      {
        "name": "Celestische Offenbarung (ab Stufe 3)",
        "beschreibung": "Wähle eine Option. Als Bonusaktion entfesselst du die celestische Energie für bis zu 1 Minute."
      },
      {
        "name": "Angeborenes Talent: Göttliche Gesundheit",
        "beschreibung": "Deine göttliche Verbindung verleiht dir eine bessere Gesundheit und Widerstandsfähigkeit gegen Schaden. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du dieses Talent erlangst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Du wirst immun gegen Krankheiten. Du wirst resistent gegen Giftschaden und erhältst einen Vorteil bei Rettungswürfen gegen Vergiftungen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Aasimar (Rasse: Göttlicher Krieger)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Nekrotisch",
      "Gleißend"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Kinder des Lichts · Gesandte der Götter",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Göttlicher Krieger."
    ],
    "besonderheiten": [
      {
        "name": "Celestische Resistenz",
        "beschreibung": "Du bist gegen nekrotischen und gleißenden Schaden resistent."
      },
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 Metern kannst du in dämmrigem Licht wie in hellem Licht sehen."
      },
      {
        "name": "Heilende Hände",
        "beschreibung": "Als Aktion kannst du eine Kreatur berühren und Würfel in Höhe deines Übungsbonus werfen (W4). Die Kreatur gewinnt Trefferpunkte zurück. Einmal pro langer Rast."
      },
      {
        "name": "Lichtträger",
        "beschreibung": "Du kennst den Zaubertrick Licht. Dein Attribut zum Zauberwirken ist Charisma."
      },
      {
        "name": "Celestische Offenbarung (ab Stufe 3)",
        "beschreibung": "Wähle eine Option. Als Bonusaktion entfesselst du die celestische Energie für bis zu 1 Minute."
      },
      {
        "name": "Angeborenes Talent: Göttlicher Krieger",
        "beschreibung": "Deine göttliche Abstammung hat dich mit Zaubern ausgestattet, die für die Starken des Glaubens typisch sind. Wähle einen Zaubertrick aus der Liste der Klerikerzauber. Du lernst den gewählten Zauber. Du wählst einen Zauber der ersten Stufe und einen Zauber der zweiten Stufe aus der Liste der Kleriker- oder Paladinzauber. Du lernst die gewählten Zauber und kannst sie einmal pro lange Rast auf ihrer niedrigsten Stufe wirken, ohne einen Zauberplatz zu verbrauchen. Intelligenz, Weisheit oder Charisma sind die Attribute für diese Zauber. Wähle eines aus, wenn du dieses Talent wählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Aasimar (Rasse: Verbesserte Celestische Offenbarung)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Nekrotisch",
      "Gleißend"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Kinder des Lichts · Gesandte der Götter",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Verbesserte Celestische Offenbarung."
    ],
    "besonderheiten": [
      {
        "name": "Celestische Resistenz",
        "beschreibung": "Du bist gegen nekrotischen und gleißenden Schaden resistent."
      },
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 Metern kannst du in dämmrigem Licht wie in hellem Licht sehen."
      },
      {
        "name": "Heilende Hände",
        "beschreibung": "Als Aktion kannst du eine Kreatur berühren und Würfel in Höhe deines Übungsbonus werfen (W4). Die Kreatur gewinnt Trefferpunkte zurück. Einmal pro langer Rast."
      },
      {
        "name": "Lichtträger",
        "beschreibung": "Du kennst den Zaubertrick Licht. Dein Attribut zum Zauberwirken ist Charisma."
      },
      {
        "name": "Celestische Offenbarung (ab Stufe 3)",
        "beschreibung": "Wähle eine Option. Als Bonusaktion entfesselst du die celestische Energie für bis zu 1 Minute."
      },
      {
        "name": "Angeborenes Talent: Verbesserte Celestische Offenbarung",
        "beschreibung": "Zusätzliche Offenbarungsladung, verdoppelter Schaden und je nach Offenbarungsform ein mächtiger Zusatzeffekt. Du erhältst eine zusätzliche Nutzung deiner Fähigkeit Celestische Offenbarung, die du nach einer langen Rast wiedererlangst. Während du dich durch deine Eigenschaft Celestische Offenbarung verwandelst, wird gleißender Schaden oder nekrotischer Schaden, den du mit dieser Eigenschaft verursachst, verdoppelt. Wenn du deine Eigenschaft Celestische Offenbarung einsetzt, erhältst du je nach gewählter Offenbarung die folgenden Vorteile: Nekrotische Spukgestalt: Deine Eigenschaft Nekrotische Spukgestalt betäubt nun Kreaturen, die den Schutzwurf nicht bestehen, bis zum Ende deines nächsten Zuges. Gleißendes Verzehren: Du kannst wählen, welche Kreaturen am Ende jeder deiner Runden gleißenden Schaden erleiden. Gleißende Seele: Zu Beginn deiner Züge kannst du eine Kreatur im Umkreis von 3 m um Trefferpunkte in Höhe deines Übungsbonus heilen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Autognome (Rasse: Heilungsfabrik)",
    "art": "Konstrukt",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Neutral",
    "cr": 0,
    "xp": 10,
    "rk": 13,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache",
      "Gnomisch",
      "eine weitere Sprache nach Wahl"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Autognome sind mechanische Konstrukte, erschaffen von genialen Fels-Gnomen. Jedes Exemplar ist ein Einzelstück — geformt durch den Willen seines Erschaffers und die Zufälle seines Lebens.",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Heilungsfabrik."
    ],
    "besonderheiten": [
      {
        "name": "Gepanzerte Hülle",
        "beschreibung": "Du bist von dünnem Metall oder einem anderen haltbaren Material umhüllt. Solange du keine Rüstung trägst, beträgt deine Rüstungsklasse 13 + dein Geschicklichkeitsmodifikator."
      },
      {
        "name": "Für den Erfolg gebaut",
        "beschreibung": "Du kannst einem Angriffswurf, Eigenschaftswurf oder Rettungswurf einen W4 hinzufügen, nachdem du den W20-Wurf gesehen hast, aber bevor die Auswirkungen bestimmt werden. Du kannst diese Eigenschaft so oft nutzen, wie dein Übungsbonus beträgt, und erhältst alle verbrauchten Nutzungen nach einer langen Rast zurück."
      },
      {
        "name": "Heilungsmaschine",
        "beschreibung": "Wenn der Zauber Flicken auf dich gewirkt wird, kannst du einen Trefferwürfel ausgeben, ihn würfeln und eine Anzahl von Trefferpunkten gleich dem Ergebnis plus deinem Konstitutionsmodifikator (mindestens 1) zurückgewinnen. Außerdem profitierst du von folgenden Zaubern, die normalerweise keine Konstrukte betreffen: Wunden heilen, Heilendes Wort, Wunden massenheilen, Heilendes Wort der Masse und Sterbende verschonen."
      },
      {
        "name": "Mechanische Natur",
        "beschreibung": "Du hast Resistenz gegen Giftschaden und Immunität gegen Krankheiten, und du hast Vorteil auf Rettungswürfe gegen Lähmung oder Vergiftung. Du musst weder essen noch trinken noch atmen."
      },
      {
        "name": "Ruhender Wächter",
        "beschreibung": "Wenn du eine lange Rast machst, verbringst du mindestens 6 Stunden in einem inaktiven, bewegungslosen Zustand, anstatt zu schlafen. In diesem Zustand wirkst du leblos, bleibst aber bei Bewusstsein."
      },
      {
        "name": "Spezialisiertes Design",
        "beschreibung": "Du erhältst zwei Werkzeugkenntnisse deiner Wahl."
      },
      {
        "name": "Angeborenes Talent: Heilungsfabrik",
        "beschreibung": "Dein Erschaffer hat dich so konzipiert, dass du stärker von lebenserhaltendem Zaubern und Effekten profitierst. Du lernst den Zaubertrick Flicken. Du kannst ihn einmal als Bonusaktion wirken, danach musst du eine kurze Rast beenden, bevor du ihn so erneut wirken kannst. Intelligenz, Weisheit oder Charisma ist deine Zauberfertigkeitscharakteristik für diesen Zauber. Wenn du deinen Rassenzug „Heilungsmaschine“ nutzt, um Trefferwürfel auszugeben und dich zu heilen, wenn der Zaubertrick Flicken auf dich gewirkt wird, kannst du eine Anzahl von Trefferwürfeln gleich deinem Übungsbonus ausgeben, anstatt nur einen. Wenn du Heilung erhältst, kannst du diese Heilung um einen Betrag erhöhen, der deinem Übungsbonus entspricht. Zusätzlich zu den Heilzaubern in deinem Zug „Heilungsmaschine“ wirst du auch von folgenden Zaubern beeinflusst: Heilen, Massenheilen, Machtwort Heilen und Heilungsgebet."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Autognome (Rasse: Hockenstärke)",
    "art": "Konstrukt",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Neutral",
    "cr": 0,
    "xp": 10,
    "rk": 13,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache",
      "Gnomisch",
      "eine weitere Sprache nach Wahl"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Autognome sind mechanische Konstrukte, erschaffen von genialen Fels-Gnomen. Jedes Exemplar ist ein Einzelstück — geformt durch den Willen seines Erschaffers und die Zufälle seines Lebens.",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Gepanzerte Hülle",
        "beschreibung": "Du bist von dünnem Metall oder einem anderen haltbaren Material umhüllt. Solange du keine Rüstung trägst, beträgt deine Rüstungsklasse 13 + dein Geschicklichkeitsmodifikator."
      },
      {
        "name": "Für den Erfolg gebaut",
        "beschreibung": "Du kannst einem Angriffswurf, Eigenschaftswurf oder Rettungswurf einen W4 hinzufügen, nachdem du den W20-Wurf gesehen hast, aber bevor die Auswirkungen bestimmt werden. Du kannst diese Eigenschaft so oft nutzen, wie dein Übungsbonus beträgt, und erhältst alle verbrauchten Nutzungen nach einer langen Rast zurück."
      },
      {
        "name": "Heilungsmaschine",
        "beschreibung": "Wenn der Zauber Flicken auf dich gewirkt wird, kannst du einen Trefferwürfel ausgeben, ihn würfeln und eine Anzahl von Trefferpunkten gleich dem Ergebnis plus deinem Konstitutionsmodifikator (mindestens 1) zurückgewinnen. Außerdem profitierst du von folgenden Zaubern, die normalerweise keine Konstrukte betreffen: Wunden heilen, Heilendes Wort, Wunden massenheilen, Heilendes Wort der Masse und Sterbende verschonen."
      },
      {
        "name": "Mechanische Natur",
        "beschreibung": "Du hast Resistenz gegen Giftschaden und Immunität gegen Krankheiten, und du hast Vorteil auf Rettungswürfe gegen Lähmung oder Vergiftung. Du musst weder essen noch trinken noch atmen."
      },
      {
        "name": "Ruhender Wächter",
        "beschreibung": "Wenn du eine lange Rast machst, verbringst du mindestens 6 Stunden in einem inaktiven, bewegungslosen Zustand, anstatt zu schlafen. In diesem Zustand wirkst du leblos, bleibst aber bei Bewusstsein."
      },
      {
        "name": "Spezialisiertes Design",
        "beschreibung": "Du erhältst zwei Werkzeugkenntnisse deiner Wahl."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Autognome (Rasse: Verbesserte Panzerplatten)",
    "art": "Konstrukt",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Neutral",
    "cr": 0,
    "xp": 10,
    "rk": 13,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache",
      "Gnomisch",
      "eine weitere Sprache nach Wahl"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Autognome sind mechanische Konstrukte, erschaffen von genialen Fels-Gnomen. Jedes Exemplar ist ein Einzelstück — geformt durch den Willen seines Erschaffers und die Zufälle seines Lebens.",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Verbesserte Panzerplatten."
    ],
    "besonderheiten": [
      {
        "name": "Gepanzerte Hülle",
        "beschreibung": "Du bist von dünnem Metall oder einem anderen haltbaren Material umhüllt. Solange du keine Rüstung trägst, beträgt deine Rüstungsklasse 13 + dein Geschicklichkeitsmodifikator."
      },
      {
        "name": "Für den Erfolg gebaut",
        "beschreibung": "Du kannst einem Angriffswurf, Eigenschaftswurf oder Rettungswurf einen W4 hinzufügen, nachdem du den W20-Wurf gesehen hast, aber bevor die Auswirkungen bestimmt werden. Du kannst diese Eigenschaft so oft nutzen, wie dein Übungsbonus beträgt, und erhältst alle verbrauchten Nutzungen nach einer langen Rast zurück."
      },
      {
        "name": "Heilungsmaschine",
        "beschreibung": "Wenn der Zauber Flicken auf dich gewirkt wird, kannst du einen Trefferwürfel ausgeben, ihn würfeln und eine Anzahl von Trefferpunkten gleich dem Ergebnis plus deinem Konstitutionsmodifikator (mindestens 1) zurückgewinnen. Außerdem profitierst du von folgenden Zaubern, die normalerweise keine Konstrukte betreffen: Wunden heilen, Heilendes Wort, Wunden massenheilen, Heilendes Wort der Masse und Sterbende verschonen."
      },
      {
        "name": "Mechanische Natur",
        "beschreibung": "Du hast Resistenz gegen Giftschaden und Immunität gegen Krankheiten, und du hast Vorteil auf Rettungswürfe gegen Lähmung oder Vergiftung. Du musst weder essen noch trinken noch atmen."
      },
      {
        "name": "Ruhender Wächter",
        "beschreibung": "Wenn du eine lange Rast machst, verbringst du mindestens 6 Stunden in einem inaktiven, bewegungslosen Zustand, anstatt zu schlafen. In diesem Zustand wirkst du leblos, bleibst aber bei Bewusstsein."
      },
      {
        "name": "Spezialisiertes Design",
        "beschreibung": "Du erhältst zwei Werkzeugkenntnisse deiner Wahl."
      },
      {
        "name": "Angeborenes Talent: Verbesserte Panzerplatten",
        "beschreibung": "Dein Körper wurde aus untypischem Material gefertigt oder mit Schutzmagie versehen. Wähle eine von drei Verstärkungsoptionen. Adamantinplatten: Dein Körper wurde mit Adamantin verstärkt, was dir größere Widerstandsfähigkeit gegen Angriffe verleiht. Deine Rüstungsklasse erhöht sich um 1 und du wirst immun gegen kritische Treffer. Wenn ein Treffer ein kritischer wäre, wird er stattdessen zu einem normalen Treffer. Eisenholzkörper: Dein Körper besteht aus leichtem, organischem Holz, das so hart wie Stahl ist und dir mehr Beweglichkeit ermöglicht, ohne auf Schutz zu verzichten. Deine Bewegungsgeschwindigkeit erhöht sich um 3 Meter (10 Fuß). Wenn du einen Geschicklichkeitsrettungswurf machst, um Schaden zu vermeiden, kannst du den Schaden, den du nimmst, um die Hälfte reduzieren. Elementarer Schutz: Dein Körper ist mit Magie verzaubert, die gegen die Elemente schützt. Wenn du eine lange Rast beendest, kannst du einen Schadenstyp wählen: Säure, Kälte, Feuer, Blitz oder Donner. Du erhältst Resistenz gegen den gewählten Schadenstyp, bis du deine nächste lange Rast beendest. Außerdem kannst du, wenn du Schaden eines dieser Schadenstypen erleidest, deine Reaktion nutzen und einen Trefferwürfel ausgeben, um Elemente absorbieren zu wirken."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Bärenvolk (Rasse)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Klettern": "4,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Kinder des Waldes · Hüter der Nadelwälder",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 18 Metern so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In der Dunkelheit kannst du keine Farben unterscheiden, nur Grautöne."
      },
      {
        "name": "Feiner Geruchs- und Gehörsinn",
        "beschreibung": "Du hast Vorteil auf Weisheit-(Wahrnehmungs)-Würfe, die auf Schall oder Geruch beruhen."
      },
      {
        "name": "Klauen",
        "beschreibung": "Deine großen Klauen gelten als natürliche Waffen, die als unbewaffnete Angriffe eingesetzt werden können. Bei einem Treffer verursachen sie Hiebschaden in Höhe von 1W6 + deinem Stärkemodifikator."
      },
      {
        "name": "Natürliche Instinkte",
        "beschreibung": "Du hast Übung in den Fertigkeiten Einschüchtern und Überleben."
      },
      {
        "name": "Kraftvolle Statur",
        "beschreibung": "Du giltst als eine Größenkategorie größer, wenn das maximale Gewicht bestimmt wird, das du tragen, schieben, ziehen oder heben kannst."
      },
      {
        "name": "Bärensprache",
        "beschreibung": "Du kannst einfache Ideen mit Bären durch die Bärenvolkssprache, Gesten und Düfte kommunizieren. Die Bärenvolkssprache ist sehr primitiv und besteht aus gutturalem Grunzen und gelegentlichen Ausrufsbrüllen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Chromatische Drachenblütige (Rasse: Drachenfurcht)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/chromatische_drachenblütige/charaktere.png",
    "beschreibung": [
      "Erben der Chromatischen · Kinder des Bösen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Drachenfurcht."
    ],
    "besonderheiten": [
      {
        "name": "Chromatische Abstammung",
        "beschreibung": "Du hast einen chromatischen Drachen im Stammbaum. Wähle eine Abstammung: Blau (Blitz), Grün (Gift), Rot (Feuer), Schwarz (Säure) oder Weiß (Kälte). Sie bestimmt die Schadensart deiner anderen Merkmale."
      },
      {
        "name": "Odemwaffe",
        "beschreibung": "Wenn du die Angreifen-Aktion ausführst, kannst du einen Angriff durch deinen Odem ersetzen: eine 9 m lange, 1,5 m breite Linie magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Drakonische Resistenz",
        "beschreibung": "Du bist gegen die Schadensart resistent, die mit deiner chromatischen Abstammung assoziiert ist."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Chromatischer Schutz (ab Stufe 5)",
        "beschreibung": "Als Aktion kanalisierst du deine drakonische Energie: du bist eine Minute lang gegen die Schadensart deiner Abstammung immun. Einmal pro langer Rast."
      },
      {
        "name": "Angeborenes Talent: Drachenfurcht",
        "beschreibung": "Wenn du wütend bist, kannst du Bedrohung ausstrahlen. Du erhältst Übung in Charisma (Einschüchtern). Wenn du bereits Übung in Einschüchtern hast, erhältst du Expertise in dieser Fertigkeit. Immer wenn du einen Einsatz deiner Eigenschaft Atemwaffe verbrauchst, kannst du auch ein Gebrüll ausstoßen, das jede feindliche Kreatur im Umkreis von 9 Metern dazu zwingt, einen Weisheitsrettungswurf abzulegen (SG 8 + dein Übungsbonus + dein Charismamodifikator). Der Rettungswurf gelingt dem Ziel automatisch, wenn es dich nicht hören oder sehen kann. Bei einem misslungenen Rettungswurf wird das Ziel 1 Minute lang vor dir verängstigt. Am Ende jeder Runde des verängstigten Ziels kann es den Rettungswurf wiederholen, wobei der Effekt bei einem Erfolg für das Ziel endet."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Chromatische Drachenblütige (Rasse: Drachenhaut)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/chromatische_drachenblütige/charaktere.png",
    "beschreibung": [
      "Erben der Chromatischen · Kinder des Bösen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Drachenhaut."
    ],
    "besonderheiten": [
      {
        "name": "Chromatische Abstammung",
        "beschreibung": "Du hast einen chromatischen Drachen im Stammbaum. Wähle eine Abstammung: Blau (Blitz), Grün (Gift), Rot (Feuer), Schwarz (Säure) oder Weiß (Kälte). Sie bestimmt die Schadensart deiner anderen Merkmale."
      },
      {
        "name": "Odemwaffe",
        "beschreibung": "Wenn du die Angreifen-Aktion ausführst, kannst du einen Angriff durch deinen Odem ersetzen: eine 9 m lange, 1,5 m breite Linie magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Drakonische Resistenz",
        "beschreibung": "Du bist gegen die Schadensart resistent, die mit deiner chromatischen Abstammung assoziiert ist."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Chromatischer Schutz (ab Stufe 5)",
        "beschreibung": "Als Aktion kanalisierst du deine drakonische Energie: du bist eine Minute lang gegen die Schadensart deiner Abstammung immun. Einmal pro langer Rast."
      },
      {
        "name": "Angeborenes Talent: Drachenhaut",
        "beschreibung": "Du manifestierst besonders harte Schuppen, die an deine drakonischen Vorfahren erinnern. Deine Schuppen werden härter. Solange du keine Rüstung trägst, kannst du deine Rüstungsklasse als 13 + deinen Geschicklichkeitsmodifikator berechnen. Auch wenn du einen Schild trägst, kannst du diesen Vorteil trotzdem nutzen. Wenn eine Kreatur einen Angriffswurf gegen dich ausführt, kannst du deine Reaktion verwenden, um diesen mit den gehärteten Schuppen an deinem Schweif zu parieren. Der Angriffswurf der Kreatur schlägt fehl. Du kannst dieses Merkmal einmal pro lange Rast einsetzen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Chromatische Drachenblütige (Rasse: Drachensicht)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/chromatische_drachenblütige/charaktere.png",
    "beschreibung": [
      "Erben der Chromatischen · Kinder des Bösen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Drachensicht."
    ],
    "besonderheiten": [
      {
        "name": "Chromatische Abstammung",
        "beschreibung": "Du hast einen chromatischen Drachen im Stammbaum. Wähle eine Abstammung: Blau (Blitz), Grün (Gift), Rot (Feuer), Schwarz (Säure) oder Weiß (Kälte). Sie bestimmt die Schadensart deiner anderen Merkmale."
      },
      {
        "name": "Odemwaffe",
        "beschreibung": "Wenn du die Angreifen-Aktion ausführst, kannst du einen Angriff durch deinen Odem ersetzen: eine 9 m lange, 1,5 m breite Linie magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Drakonische Resistenz",
        "beschreibung": "Du bist gegen die Schadensart resistent, die mit deiner chromatischen Abstammung assoziiert ist."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Chromatischer Schutz (ab Stufe 5)",
        "beschreibung": "Als Aktion kanalisierst du deine drakonische Energie: du bist eine Minute lang gegen die Schadensart deiner Abstammung immun. Einmal pro langer Rast."
      },
      {
        "name": "Angeborenes Talent: Drachensicht",
        "beschreibung": "Deine drakonischen Vorfahren verleihen dir eine verbesserte Sehkraft und ein Auge für Reichtum. Du erhältst Übung in Weisheit (Wahrnehmung). Wenn du bereits geübt in Wahrnehmung bist, erhältst du Expertise in dieser Fertigkeit. Du erhältst einen Vorteil bei Intelligenz (Nachforschung), um Münzen und andere wertvolle Gegenstände aufzuspüren, und du erhältst einen Vorteil bei Attributswürfen, um den Wert eines Gegenstandes zu bestimmen. Du kannst im Dunkeln bis zu einer Reichweite von 20 Metern sehen und bis zu einer Reichweite von 3 Metern blind sehen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Darakhul (Rasse)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meist böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift",
      "Nekrotisch"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Untote mit Bewusstsein · Träger des Dunkels",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen."
    ],
    "besonderheiten": [
      {
        "name": "Unvollkommener Untod",
        "beschreibung": "Obwohl du ein Humanoid bist, bist du anfällig für Effekte, die Untote betreffen — einschließlich Vertreiben durch Kleriker. Spieleffekte die dich zurückbringen erwecken dich als Darakhul. Echter Auferstehungszauber oder Wunsch kann dich als vollständig Lebenden deiner ursprünglichen Rasse zurückbringen."
      },
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 18 Metern so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In der Dunkelheit kannst du keine Farben unterscheiden, nur Grautöne."
      },
      {
        "name": "Hunger nach Fleisch",
        "beschreibung": "Du musst täglich 500 g rohes Fleisch verzehren oder die Auswirkungen des Verhungerns erleiden. Nach 24 Stunden ohne Mahlzeit erhältst du eine Erschöpfungsstufe. Solange du durch diese Eigenschaft Erschöpfung hast, kannst du keine TP zurückgewinnen oder Erschöpfung entfernen, bis du mindestens 1 Stunde damit verbracht hast, 5 kg rohes Fleisch zu verzehren."
      },
      {
        "name": "Kraftvoller Kiefer",
        "beschreibung": "Dein Biss ist eine natürliche Nahkampfwaffe für unbewaffnete Angriffe. Bei einem Treffer verursacht er 1W4 + STR-Mod Stichschaden (statt normalem Wuchtschaden)."
      },
      {
        "name": "Sonnenlichtsensitivität",
        "beschreibung": "Du hast Nachteil auf Angriffswürfe und Weisheit-(Wahrnehmungs)-Würfe, die auf Sicht beruhen, wenn du, dein Ziel oder das Wahrgenommene sich in direktem Sonnenlicht befindet."
      },
      {
        "name": "Untote Widerstandsfähigkeit",
        "beschreibung": "Resistenz gegen nekrotischen Schaden und Giftschaden. Immunität gegen Krankheiten. Vorteil auf Rettungswürfe gegen Bezauberung oder Vergiftung. Bei einer kurzen Rast kannst du eine Erschöpfungsstufe senken, sofern du in den letzten 24 Stunden mindestens 500 g rohes Fleisch zu dir genommen hast."
      },
      {
        "name": "Untote Vitalität",
        "beschreibung": "Du musst nicht atmen und schläfst nicht normal. Stattdessen trittst du täglich für 6 Stunden in einen todesähnlichen Ruhezustand, in dem du halbbewusst bleibst (Nachteil auf Wahrnehmungs-Würfe). Danach erhältst du denselben Vorteil wie ein Mensch nach 8 Stunden Schlaf."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Dhampire (Rasse: Fledermausflug)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Chaotisch-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "12 m",
      "Klettern": "12 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/dhampire/charaktere.png",
    "beschreibung": [
      "Kinder der Dunkelheit · Zwischen Leben und Tod",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Fledermausflug."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 Metern kannst du in dämmrigem Licht wie in hellem Licht sehen."
      },
      {
        "name": "Erbe",
        "beschreibung": "Du behältst alle Fertigkeiten, in denen deine vorherige Rasse geübt ist, und besondere Bewegungsraten."
      },
      {
        "name": "Untote Natur",
        "beschreibung": "Du brauchst nicht zu atmen."
      },
      {
        "name": "Spinnenklettern",
        "beschreibung": "Deine Kletterbewegungsrate ist gleich deiner Schrittbewegungsrate. Ab Stufe 3 kannst du kopfüber an Decken und Wänden klettern."
      },
      {
        "name": "Vampirbiss",
        "beschreibung": "Deine Fangzähne sind eine natürliche Waffe (einfach, Nahkampf). Konstitutionsmodifikator statt Stärke. Treffer: 1W4 Stichschaden. Bei ≤ halben TP: Vorteil auf Angriffswürfe. Trifft du eine lebende Kreatur: gewinne TP oder erhalte Bonus auf nächsten Wurf."
      },
      {
        "name": "Angeborenes Talent: Fledermausflug",
        "beschreibung": "Das Vampirblut in dir erlaubt es dir, dich in eine Fledermaus zu verwandeln und blitzschnell anzugreifen. Du erlernst den Zauber Nebelwolke. Du kannst diesen mit diesem Merkmal einmal pro lange Rast benutzen. Dein Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Als Bonusaktion kannst du dich in eine Fledermaus verwandeln, um bis zu 9 m weit in ein unbesetztes Feld zu fliegen, das du sehen kannst. Deine restliche Bewegungsrate nach dem Ankommen beträgt automatisch 0. Wirst du durch diese Bewegung Ziel eines Gelegenheitsangriffs, wird dieser mit Nachteil ausgeführt. Greifst du in dieser Runde einen Gegner mit einem Nahkampfangriff an, erhältst du Vorteil auf deinen Angriffswurf. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer kurzen Rast wieder zur Verfügung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Dhampire (Rasse: Traumfresser)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Chaotisch-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "12 m",
      "Klettern": "12 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/dhampire/charaktere.png",
    "beschreibung": [
      "Kinder der Dunkelheit · Zwischen Leben und Tod",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Traumfresser."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 Metern kannst du in dämmrigem Licht wie in hellem Licht sehen."
      },
      {
        "name": "Erbe",
        "beschreibung": "Du behältst alle Fertigkeiten, in denen deine vorherige Rasse geübt ist, und besondere Bewegungsraten."
      },
      {
        "name": "Untote Natur",
        "beschreibung": "Du brauchst nicht zu atmen."
      },
      {
        "name": "Spinnenklettern",
        "beschreibung": "Deine Kletterbewegungsrate ist gleich deiner Schrittbewegungsrate. Ab Stufe 3 kannst du kopfüber an Decken und Wänden klettern."
      },
      {
        "name": "Vampirbiss",
        "beschreibung": "Deine Fangzähne sind eine natürliche Waffe (einfach, Nahkampf). Konstitutionsmodifikator statt Stärke. Treffer: 1W4 Stichschaden. Bei ≤ halben TP: Vorteil auf Angriffswürfe. Trifft du eine lebende Kreatur: gewinne TP oder erhalte Bonus auf nächsten Wurf."
      },
      {
        "name": "Angeborenes Talent: Traumfresser",
        "beschreibung": "Versetze Beute in Schlaf und stiehl ihre Träume als Bonusaktion für temporäre Trefferpunkte. Du erlernst den Zauber Schlaf. Du kannst diesen mit diesem Merkmal auf der ersten Stufe einmal pro lange Rast benutzen. Dein Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Wenn du Schlaf mit oder ohne diesem Merkmal wirkst, würfelst du mit so vielen Würfeln, als würdest du den Zauber auf einem Grad höher wirken, um die Gesamtzahl an Trefferpunkten festzustellen, die Kreaturen beeinflussen können. Du kannst als Bonusaktion auf eine schlafende Kreatur in bis zu 9 m Reichweite zeigen und versuchen, ihre Träume zu stehlen. Die Kreatur muss einen Rettungswurf auf Charisma machen. Bei einem misslungenen Rettungswurf erleidet die Kreatur 2W6 psychischen Schaden und du erhältst temporäre Trefferpunkte in Höhe des Schadens. Dieser Schaden weckt die betroffene Kreatur nicht aus dem Schlaf. Du kannst dieses Merkmal einmal pro lange Rast verwenden. Um dieses Merkmal anzuwenden, musst du ein Dhampir mit Hunger auf Träume oder psychische Energie sein."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Dhampire (Rasse: Vampirisches Charisma)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Chaotisch-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "12 m",
      "Klettern": "12 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/dhampire/charaktere.png",
    "beschreibung": [
      "Kinder der Dunkelheit · Zwischen Leben und Tod",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Vampirisches Charisma."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 Metern kannst du in dämmrigem Licht wie in hellem Licht sehen."
      },
      {
        "name": "Erbe",
        "beschreibung": "Du behältst alle Fertigkeiten, in denen deine vorherige Rasse geübt ist, und besondere Bewegungsraten."
      },
      {
        "name": "Untote Natur",
        "beschreibung": "Du brauchst nicht zu atmen."
      },
      {
        "name": "Spinnenklettern",
        "beschreibung": "Deine Kletterbewegungsrate ist gleich deiner Schrittbewegungsrate. Ab Stufe 3 kannst du kopfüber an Decken und Wänden klettern."
      },
      {
        "name": "Vampirbiss",
        "beschreibung": "Deine Fangzähne sind eine natürliche Waffe (einfach, Nahkampf). Konstitutionsmodifikator statt Stärke. Treffer: 1W4 Stichschaden. Bei ≤ halben TP: Vorteil auf Angriffswürfe. Trifft du eine lebende Kreatur: gewinne TP oder erhalte Bonus auf nächsten Wurf."
      },
      {
        "name": "Angeborenes Talent: Vampirisches Charisma",
        "beschreibung": "Vampirblut verleiht Täusch-Expertise, verstärkten Person-bezaubern-Zauber ohne Kampfvorteil und Sprachen verstehen. Du erhältst Übung in Charisma (Täuschen). Wenn du bereits in Täuschen geübt bist, erhältst du Expertise. Du erlernst den Zauber Person bezaubern und kannst ihn mit diesem Merkmal auf der ersten Stufe wirken. Der Schwierigkeitsgrad für den Rettungswurf ergibt sich aus 8 + Übungsbonus + einem deiner Attributsmodifikatoren (Wahl beim Erwerb des Talents). Wenn du den Zauber Person bezaubern mit diesem Merkmal wirkst, würfeln Kreaturen, die gegen dich oder deine Gefährten kämpfen, nicht mit Vorteil, wenn sie den Rettungswurf ablegen. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; alle verbrauchten Einsätze kehren nach einer langen Rast zurück. Du erlernst den Zauber Sprachen verstehen und kannst ihn mit diesem Merkmal einmal pro lange Rast wirken."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Dunkelelfen (Rasse: Dunkelelfen-Hochmagie)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/dunkelelfen/charaktere.png",
    "beschreibung": [
      "Kinder des Unterreichs · Meister von Licht und Finsternis",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Dunkelelfen-Hochmagie."
    ],
    "besonderheiten": [
      {
        "name": "Überlegene Dunkelsicht",
        "beschreibung": "Deine Dunkelsicht hat eine Reichweite von 36 m."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. Stattdessen verbringst du täglich 4 Stunden in tiefer Meditation. Danach erhältst du dieselben Vorteile wie nach 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit einer Waffe oder einem Werkzeug wählen — bis zur nächsten langen Rast."
      },
      {
        "name": "Drow Magie",
        "beschreibung": "Du kennst den Zaubertrick Tanzende Lichter. Ab Stufe 3: Feenfeuer 1×/langer Rast. Ab Stufe 5: Dunkelheit 1×/langer Rast. Zaubermerkmal: Charisma."
      },
      {
        "name": "Drow Waffenvertrautheit",
        "beschreibung": "Du bist geübt im Umgang mit Rapieren, Kurzschwertern und Handarmbrüsten."
      },
      {
        "name": "Angeborenes Talent: Dunkelelfen-Hochmagie",
        "beschreibung": "Du erlernst mehr von der für Dunkelelfen typischen Magie. Du lernst den Zauber Magie entdecken und kannst ihn nach Belieben wirken, ohne einen Zauberplatz zu verbrauchen. Du lernst außerdem Schweben und Magie bannen, die du jeweils einmal pro lange Rast wirken kannst, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Wenn einer anderen Kreatur ein Rettungswurf gegen deinen Zauberrettungswurf-SG gelingt, kannst du diese Kreatur zwingen, ihren Rettungswurf zu wiederholen. Sie muss dann den zweiten Wurf akzeptieren. Wenn du diese Fähigkeit einmal benutzt hast, kannst du sie erst wieder einsetzen, wenn du eine kurze oder lange Rast beendet hast."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Dunkelelfen (Rasse: Elfische Treffsicherheit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/dunkelelfen/charaktere.png",
    "beschreibung": [
      "Kinder des Unterreichs · Meister von Licht und Finsternis",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Elfische Treffsicherheit."
    ],
    "besonderheiten": [
      {
        "name": "Überlegene Dunkelsicht",
        "beschreibung": "Deine Dunkelsicht hat eine Reichweite von 36 m."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. Stattdessen verbringst du täglich 4 Stunden in tiefer Meditation. Danach erhältst du dieselben Vorteile wie nach 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit einer Waffe oder einem Werkzeug wählen — bis zur nächsten langen Rast."
      },
      {
        "name": "Drow Magie",
        "beschreibung": "Du kennst den Zaubertrick Tanzende Lichter. Ab Stufe 3: Feenfeuer 1×/langer Rast. Ab Stufe 5: Dunkelheit 1×/langer Rast. Zaubermerkmal: Charisma."
      },
      {
        "name": "Drow Waffenvertrautheit",
        "beschreibung": "Du bist geübt im Umgang mit Rapieren, Kurzschwertern und Handarmbrüsten."
      },
      {
        "name": "Angeborenes Talent: Elfische Treffsicherheit",
        "beschreibung": "Die legendäre Treffsicherheit der Elfen mit Präzisionsangriffen ist nun auch dein. Jedes Mal, wenn du mit einem Angriff triffst, der kein kritischer Treffer ist, erhöht sich deine Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis du einen kritischen Treffer landest, einen Angriff verfehlst oder den Kampf betrittst oder verlässt; danach wird er auf deinen Standardwert zurückgesetzt. Immer wenn du bei einem Angriffswurf einen Vorteil hast, kannst du einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Dunkelelfen (Rasse: Schattenverbundenheit der Dunkelelfen)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/dunkelelfen/charaktere.png",
    "beschreibung": [
      "Kinder des Unterreichs · Meister von Licht und Finsternis",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Schattenverbundenheit der Dunkelelfen."
    ],
    "besonderheiten": [
      {
        "name": "Überlegene Dunkelsicht",
        "beschreibung": "Deine Dunkelsicht hat eine Reichweite von 36 m."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. Stattdessen verbringst du täglich 4 Stunden in tiefer Meditation. Danach erhältst du dieselben Vorteile wie nach 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit einer Waffe oder einem Werkzeug wählen — bis zur nächsten langen Rast."
      },
      {
        "name": "Drow Magie",
        "beschreibung": "Du kennst den Zaubertrick Tanzende Lichter. Ab Stufe 3: Feenfeuer 1×/langer Rast. Ab Stufe 5: Dunkelheit 1×/langer Rast. Zaubermerkmal: Charisma."
      },
      {
        "name": "Drow Waffenvertrautheit",
        "beschreibung": "Du bist geübt im Umgang mit Rapieren, Kurzschwertern und Handarmbrüsten."
      },
      {
        "name": "Angeborenes Talent: Schattenverbundenheit der Dunkelelfen",
        "beschreibung": "Du lernst, mit den Schatten zu verschmelzen, und erhältst Unsichtbarkeit in totaler Dunkelheit. Du kannst versuchen, dich zu verstecken, auch wenn du nur leicht verschleiert bist. Du erlernst den Zauber Dunkelheit und kannst ihn nach Belieben wirken. Dein Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst. Solange du dich in völliger Dunkelheit befindest, wirst du auf magische Weise unsichtbar. Du bleibst unsichtbar, bis du ins Licht kommst, angreifst oder einen Zauber wirkst; dann wirst du bis zum Beginn deines nächsten Zuges sichtbar."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Echsenmenschen (Rasse: Berührung von Sess'inek)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 13,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/echsenmenschen/charaktere.png",
    "beschreibung": [
      "Erben der Urzeit · Hüter der Natur",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Berührung von Sess'inek."
    ],
    "besonderheiten": [
      {
        "name": "Atem anhalten",
        "beschreibung": "Du kannst bis zu 15 Minuten lang den Atem anhalten."
      },
      {
        "name": "Biss",
        "beschreibung": "Du hast Fangzähne, mit denen du waffenlose Angriffe ausführen kannst. Bei einem Treffer bewirkt der Angriff 1W6 + deinen Stärkemodifikator an Hiebschaden statt des üblichen Wuchtschadens."
      },
      {
        "name": "Hungriger Kiefer",
        "beschreibung": "Als Bonusaktion führst du einen besonderen Bissangriff durch. Bei einem Treffer bewirkt dieser normalen Schaden, und du erhältst temporäre Trefferpunkte in Höhe deines Übungsbonus. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Intuition der Natur",
        "beschreibung": "Du bist in zwei Fertigkeiten deiner Wahl geübt: Heilkunde, Heimlichkeit, Mit Tieren umgehen, Naturkunde, Überlebenskunst oder Wahrnehmung."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Natürliche Rüstung",
        "beschreibung": "Wenn du keine Rüstung trägst, beträgt deine Basis-RK 13 + dein Geschicklichkeitsmodifikator. Nutze diese Rüstung, wenn sie zu einer höheren RK führt als deine getragene Rüstung. Schilde gelten normal."
      },
      {
        "name": "Angeborenes Talent: Berührung von Sess'inek",
        "beschreibung": "Der dämonische Gott der Echsen hat dich mit dämonenhafter Energie ausgestattet. Du lernst, Infernalisch zu sprechen, zu lesen und zu schreiben. Wenn du Infernalisch bereits kennst, lernst du eine andere Sprache deiner Wahl. Du erlangst Immunität gegen den Zustand verängstigt. Du erhältst Widerstand gegen Feuer- und Giftschaden. Du erhältst einen Vorteil bei Rettungswürfen gegen Vergiftung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Echsenmenschen (Rasse: Komodo)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 13,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/echsenmenschen/charaktere.png",
    "beschreibung": [
      "Erben der Urzeit · Hüter der Natur",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Komodo."
    ],
    "besonderheiten": [
      {
        "name": "Atem anhalten",
        "beschreibung": "Du kannst bis zu 15 Minuten lang den Atem anhalten."
      },
      {
        "name": "Biss",
        "beschreibung": "Du hast Fangzähne, mit denen du waffenlose Angriffe ausführen kannst. Bei einem Treffer bewirkt der Angriff 1W6 + deinen Stärkemodifikator an Hiebschaden statt des üblichen Wuchtschadens."
      },
      {
        "name": "Hungriger Kiefer",
        "beschreibung": "Als Bonusaktion führst du einen besonderen Bissangriff durch. Bei einem Treffer bewirkt dieser normalen Schaden, und du erhältst temporäre Trefferpunkte in Höhe deines Übungsbonus. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Intuition der Natur",
        "beschreibung": "Du bist in zwei Fertigkeiten deiner Wahl geübt: Heilkunde, Heimlichkeit, Mit Tieren umgehen, Naturkunde, Überlebenskunst oder Wahrnehmung."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Natürliche Rüstung",
        "beschreibung": "Wenn du keine Rüstung trägst, beträgt deine Basis-RK 13 + dein Geschicklichkeitsmodifikator. Nutze diese Rüstung, wenn sie zu einer höheren RK führt als deine getragene Rüstung. Schilde gelten normal."
      },
      {
        "name": "Angeborenes Talent: Komodo",
        "beschreibung": "Du produzierst ein tödliches Gift, das du zur Verstärkung deiner Angriffe einsetzen kannst. Du erhältst Resistenz gegen Giftschaden. Würdest du Giftschaden erleiden, kannst du deine Reaktion verwenden, um einen Schadenswurf zu widerstehen und keinen Schaden durch diesen Schadenswurf zu erleiden. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Diese Eigenschaft kann nach Ermessen des Spielleiters fehlschlagen. Du sonderst ein gefährliches Gift ab. Du besitzt Giftreserven in Höhe deines Übungsbonus, die bei einer langen Rast wieder aufgefüllt werden. Der Schwierigkeitsgrad für dieses Gift ist 8 + Übungsbonus + Konstitutionsmodifikator. Wenn du deine Eigenschaft Hungriger Kiefer ausführst, kannst du bei einem Treffer eine Giftreserve nutzen, um das Ziel zu einem Konstitutionsrettungswurf zu zwingen. Bei einem Fehlschlag erleidet es 2W6 Giftschaden und ist eine Minute lang vergiftet. Bei einem Erfolg erleidet es nur halben Schaden und wird nicht vergiftet. Als Aktion kannst du eine Giftreserve verbrauchen und eine Waffe oder bis zu 5 Stück Munition für 1 Minute mit Gift überziehen. Getroffene Kreaturen müssen einen Konstitutionsrettungswurf ablegen oder 1W6 zusätzlichen Giftschaden erleiden (bei Erfolg halb so viel). Der Gifteffekt kann nur 5 Mal auftreten. Dein Giftschaden erhöht sich mit steigender Stufe: auf der 6. Stufe auf W8, auf der 11. auf W10, auf der 16. auf W12."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Echsenmenschen (Rasse: Reptilianische Regeneration)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 13,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/echsenmenschen/charaktere.png",
    "beschreibung": [
      "Erben der Urzeit · Hüter der Natur",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Reptilianische Regeneration."
    ],
    "besonderheiten": [
      {
        "name": "Atem anhalten",
        "beschreibung": "Du kannst bis zu 15 Minuten lang den Atem anhalten."
      },
      {
        "name": "Biss",
        "beschreibung": "Du hast Fangzähne, mit denen du waffenlose Angriffe ausführen kannst. Bei einem Treffer bewirkt der Angriff 1W6 + deinen Stärkemodifikator an Hiebschaden statt des üblichen Wuchtschadens."
      },
      {
        "name": "Hungriger Kiefer",
        "beschreibung": "Als Bonusaktion führst du einen besonderen Bissangriff durch. Bei einem Treffer bewirkt dieser normalen Schaden, und du erhältst temporäre Trefferpunkte in Höhe deines Übungsbonus. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Intuition der Natur",
        "beschreibung": "Du bist in zwei Fertigkeiten deiner Wahl geübt: Heilkunde, Heimlichkeit, Mit Tieren umgehen, Naturkunde, Überlebenskunst oder Wahrnehmung."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Natürliche Rüstung",
        "beschreibung": "Wenn du keine Rüstung trägst, beträgt deine Basis-RK 13 + dein Geschicklichkeitsmodifikator. Nutze diese Rüstung, wenn sie zu einer höheren RK führt als deine getragene Rüstung. Schilde gelten normal."
      },
      {
        "name": "Angeborenes Talent: Reptilianische Regeneration",
        "beschreibung": "Die feindliche Umgebung, in der du aufgewachsen bist, hat deinen Körper zur Anpassung gezwungen. Du erhältst jede Stunde 1 Trefferpunkt zurück, solange du mindestens 1 Trefferpunkt hast oder mit 0 Trefferpunkten stabilisiert bist. Du kannst verlorene Körperteile nachwachsen lassen. Die benötigte Zeit hängt vom verlorenen Körperteil ab: 1W4 Tage für einen Finger oder Zeh, 1W6 Wochen für einen Arm oder ein Bein. Als Aktion kannst du 1 Minute lang (oder bis du bewusstlos wirst) einen Regenerationsschub auslösen. Du erhältst zu Beginn jeder deiner Runden Trefferpunkte in Höhe deines Übungsbonus zurück. Nach Einsatz dieser Fähigkeit steht sie erst nach einer langen Rast wieder zur Verfügung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Edelstein Drachenblütige (Rasse: Drachengespür)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/edelstein_drachenblütige/charaktere.png",
    "beschreibung": [
      "Erben Sardiors · Kinder des Geistes",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Drachengespür."
    ],
    "besonderheiten": [
      {
        "name": "Edelstein-Abstammung",
        "beschreibung": "Du hast einen Edelsteindrachen im Stammbaum. Wähle eine Abstammung: Amethyst (Energie), Kristall (Gleißend), Saphir (Schall), Smaragd (Psychisch) oder Topas (Nekrotisch). Sie bestimmt die Schadensart deiner anderen Merkmale."
      },
      {
        "name": "Odemwaffe",
        "beschreibung": "Wenn du die Angreifen-Aktion ausführst, kannst du einen Angriff durch deinen Odem ersetzen: einen 4,5 m langen Kegel magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Drakonische Resistenz",
        "beschreibung": "Du bist gegen die Schadensart resistent, die mit deiner Edelstein-Abstammung assoziiert ist."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Psionischer Geist",
        "beschreibung": "Du kannst allen Kreaturen im Abstand von bis zu neun Metern, die du sehen kannst, telepatisch Botschaften übermitteln. Du musst nicht dieselbe Sprache wie die Kreatur sprechen — sie muss jedoch mindestens eine Sprache beherrschen, um die Botschaft zu verstehen."
      },
      {
        "name": "Edelstein-Flug (ab Stufe 5)",
        "beschreibung": "Als Bonusaktion manifestierst du spektrale Flügel an deinem Körper. Die Flügel bleiben eine Minute lang bestehen; in dieser Zeit hast du eine Flugbewegungsrate in Höhe deiner Schrittbewegungsrate und kannst schweben. Einmal pro langer Rast."
      },
      {
        "name": "Angeborenes Talent: Drachengespür",
        "beschreibung": "Deine drakonischen Vorfahren haben dir ein verbessertes Gespür und eine erhöhte Resonanz mit deinem natürlichen Element vererbt. Du erhältst Übung in Intelligenz (Naturkunde). Wenn du bereits in Naturkunde geübt bist, erhältst du Expertise. Du hast einen Vorteil bei Würfen auf Intelligenz (Naturkunde), wenn du nach Edelsteinvorkommen suchst. Wenn du Schaden erleidest, der der magischen Affinität deiner Edelstein-Abstammung entspricht, kannst du deine Reaktion verwenden, um die Energie in den Edelsteinen deines Körpers zu speichern und bis zum Ende deines nächsten Zuges immun gegen diese Schadensart zu werden. Wenn du Energie gespeichert hast, kannst du in deinem nächsten Zug einen der folgenden Vorteile erhalten: Du kannst deine Bonusaktion verwenden, um die gespeicherte Energie in Lebenskraft zu verwandeln und temporäre Trefferpunkte in Höhe von 1W6 + deinem Übungsbonus zu erhalten (steigt auf 1W8 auf Stufe 4, 1W10 auf Stufe 8, 1W12 auf Stufe 12). Oder du kannst, wenn du dein Merkmal Odemwaffe einsetzt, die gespeicherte Energie kanalisieren, um die Macht deines Atems zu verstärken — füge dem Schaden 1W10 + deinen Übungsbonus hinzu; bei einem erfolgreichen Rettungswurf erleiden betroffene Kreaturen halb so viel Schaden. Die Häufigkeit, mit der du dieses Merkmal einsetzen kannst, entspricht deinem Übungsbonus. Verbrauchte Anwendungen stehen dir nach einer langen Rast wieder zur Verfügung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Edelstein Drachenblütige (Rasse: Drachenhaut)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/edelstein_drachenblütige/charaktere.png",
    "beschreibung": [
      "Erben Sardiors · Kinder des Geistes",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Drachenhaut."
    ],
    "besonderheiten": [
      {
        "name": "Edelstein-Abstammung",
        "beschreibung": "Du hast einen Edelsteindrachen im Stammbaum. Wähle eine Abstammung: Amethyst (Energie), Kristall (Gleißend), Saphir (Schall), Smaragd (Psychisch) oder Topas (Nekrotisch). Sie bestimmt die Schadensart deiner anderen Merkmale."
      },
      {
        "name": "Odemwaffe",
        "beschreibung": "Wenn du die Angreifen-Aktion ausführst, kannst du einen Angriff durch deinen Odem ersetzen: einen 4,5 m langen Kegel magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Drakonische Resistenz",
        "beschreibung": "Du bist gegen die Schadensart resistent, die mit deiner Edelstein-Abstammung assoziiert ist."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Psionischer Geist",
        "beschreibung": "Du kannst allen Kreaturen im Abstand von bis zu neun Metern, die du sehen kannst, telepatisch Botschaften übermitteln. Du musst nicht dieselbe Sprache wie die Kreatur sprechen — sie muss jedoch mindestens eine Sprache beherrschen, um die Botschaft zu verstehen."
      },
      {
        "name": "Edelstein-Flug (ab Stufe 5)",
        "beschreibung": "Als Bonusaktion manifestierst du spektrale Flügel an deinem Körper. Die Flügel bleiben eine Minute lang bestehen; in dieser Zeit hast du eine Flugbewegungsrate in Höhe deiner Schrittbewegungsrate und kannst schweben. Einmal pro langer Rast."
      },
      {
        "name": "Angeborenes Talent: Drachenhaut",
        "beschreibung": "Du manifestierst besonders harte Schuppen, die an deine drakonischen Vorfahren erinnern. Deine Schuppen werden härter. Solange du keine Rüstung trägst, kannst du deine Rüstungsklasse als 13 + deinen Geschicklichkeitsmodifikator berechnen. Auch wenn du einen Schild trägst, kannst du diesen Vorteil trotzdem nutzen. Wenn eine Kreatur einen Angriffswurf gegen dich ausführt, kannst du deine Reaktion verwenden, um diesen mit den gehärteten Schuppen an deinem Schweif zu parieren. Der Angriffswurf der Kreatur schlägt fehl. Du kannst dieses Merkmal einmal pro lange Rast einsetzen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Edelstein Drachenblütige (Rasse: Drachensicht)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/edelstein_drachenblütige/charaktere.png",
    "beschreibung": [
      "Erben Sardiors · Kinder des Geistes",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Drachensicht."
    ],
    "besonderheiten": [
      {
        "name": "Edelstein-Abstammung",
        "beschreibung": "Du hast einen Edelsteindrachen im Stammbaum. Wähle eine Abstammung: Amethyst (Energie), Kristall (Gleißend), Saphir (Schall), Smaragd (Psychisch) oder Topas (Nekrotisch). Sie bestimmt die Schadensart deiner anderen Merkmale."
      },
      {
        "name": "Odemwaffe",
        "beschreibung": "Wenn du die Angreifen-Aktion ausführst, kannst du einen Angriff durch deinen Odem ersetzen: einen 4,5 m langen Kegel magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Drakonische Resistenz",
        "beschreibung": "Du bist gegen die Schadensart resistent, die mit deiner Edelstein-Abstammung assoziiert ist."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Psionischer Geist",
        "beschreibung": "Du kannst allen Kreaturen im Abstand von bis zu neun Metern, die du sehen kannst, telepatisch Botschaften übermitteln. Du musst nicht dieselbe Sprache wie die Kreatur sprechen — sie muss jedoch mindestens eine Sprache beherrschen, um die Botschaft zu verstehen."
      },
      {
        "name": "Edelstein-Flug (ab Stufe 5)",
        "beschreibung": "Als Bonusaktion manifestierst du spektrale Flügel an deinem Körper. Die Flügel bleiben eine Minute lang bestehen; in dieser Zeit hast du eine Flugbewegungsrate in Höhe deiner Schrittbewegungsrate und kannst schweben. Einmal pro langer Rast."
      },
      {
        "name": "Angeborenes Talent: Drachensicht",
        "beschreibung": "Deine drakonischen Vorfahren verleihen dir eine verbesserte Sehkraft und ein Auge für Reichtum. Du erhältst Übung in Weisheit (Wahrnehmung). Wenn du bereits geübt in Wahrnehmung bist, erhältst du Expertise in dieser Fertigkeit. Du erhältst einen Vorteil bei Intelligenz (Nachforschung), um Münzen und andere wertvolle Gegenstände aufzuspüren, und du erhältst einen Vorteil bei Attributswürfen, um den Wert eines Gegenstandes zu bestimmen. Du kannst im Dunkeln bis zu einer Reichweite von 20 Metern sehen und bis zu einer Reichweite von 3 Metern blind sehen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Eladrin (Rasse: Bindung der Jahreszeiten)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Beliebige Gesinnung",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/eladrin/charaktere.png",
    "beschreibung": [
      "Kinder der Feywild · Wesen des ewigen Wandels",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Bindung der Jahreszeiten."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du die Jahreszeit wechseln und zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Feenschritt",
        "beschreibung": "Als Bonusaktion teleportierst du dich bis zu 9 m an eine freie Stelle, die du siehst. Anwendungen pro langer Rast: gleich deinem Übungsbonus. Ab Stufe 3 erhält der Feenschritt einen Zusatzeffekt deiner Jahreszeit (Rettungswurf-SG = 8 + Übungsbonus + INT/WEI/CHA)."
      },
      {
        "name": "Angeborenes Talent: Bindung der Jahreszeiten",
        "beschreibung": "Du hast eine noch bessere Bindung zu den Jahreszeiten als andere deiner Art. Du bist in enger Verbindung mit den Kräften der Natur, was dir Übung in Intelligenz (Naturkunde) verleiht. Herbst: Der Kreislauf des Lebens endet mit dem Herbst, wenn die Pflanzen absterben und die Tiere beginnen, ihre Vorräte für den Winter anzulegen. Diese Vertrautheit mit dem Tod verleiht dir Resistenz gegen nekrotischen Schaden. Du erlernst den Zaubertrick Kalte Hand und den Zauber Verderben, den du auf Stufe 1 einmal pro lange Rast wirken kannst. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Frühling: Die Stürme des Frühlings bringen neues Leben ins Land. Diese Vertrautheit verleiht dir Resistenz gegen Blitzschaden. Du erlernst den Zaubertrick Blitzköder und den Zauber Donnerwoge, den du auf Stufe 1 einmal pro lange Rast wirken kannst. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Sommer: Die Hitze des Sommers ist allgegenwärtig. Diese Vertrautheit verleiht dir Resistenz gegen Feuerschaden. Du erlernst den Zaubertrick Flammen erzeugen und den Zauber Brennende Hände, den du auf Stufe 1 einmal pro lange Rast wirken kannst. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Winter: Du bist mit Kälte und eisigen Temperaturen vertraut. Diese Vertrautheit verleiht dir Resistenz gegen Kälteschaden. Du erlernst den Zaubertrick Kältestrahl und den Zauber Gefrierende Finger, den du auf Stufe 1 einmal pro lange Rast wirken kannst. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Eladrin (Rasse: Elfische Treffsicherheit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Beliebige Gesinnung",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/eladrin/charaktere.png",
    "beschreibung": [
      "Kinder der Feywild · Wesen des ewigen Wandels",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Elfische Treffsicherheit."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du die Jahreszeit wechseln und zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Feenschritt",
        "beschreibung": "Als Bonusaktion teleportierst du dich bis zu 9 m an eine freie Stelle, die du siehst. Anwendungen pro langer Rast: gleich deinem Übungsbonus. Ab Stufe 3 erhält der Feenschritt einen Zusatzeffekt deiner Jahreszeit (Rettungswurf-SG = 8 + Übungsbonus + INT/WEI/CHA)."
      },
      {
        "name": "Angeborenes Talent: Elfische Treffsicherheit",
        "beschreibung": "Die legendäre Treffsicherheit der Elfen mit Präzisionsangriffen ist nun auch dein. Jedes Mal, wenn du mit einem Angriff triffst, der kein kritischer Treffer ist, erhöht sich deine Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis du einen kritischen Treffer landest, einen Angriff verfehlst oder den Kampf betrittst oder verlässt; danach wird er auf deinen Standardwert zurückgesetzt. Immer wenn du bei einem Angriffswurf einen Vorteil hast, kannst du einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Eladrin (Rasse: Feengeister-Magie)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Beliebige Gesinnung",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/eladrin/charaktere.png",
    "beschreibung": [
      "Kinder der Feywild · Wesen des ewigen Wandels",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Feengeister-Magie."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du die Jahreszeit wechseln und zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Feenschritt",
        "beschreibung": "Als Bonusaktion teleportierst du dich bis zu 9 m an eine freie Stelle, die du siehst. Anwendungen pro langer Rast: gleich deinem Übungsbonus. Ab Stufe 3 erhält der Feenschritt einen Zusatzeffekt deiner Jahreszeit (Rettungswurf-SG = 8 + Übungsbonus + INT/WEI/CHA)."
      },
      {
        "name": "Angeborenes Talent: Feengeister-Magie",
        "beschreibung": "Du bist mehr als andere deiner Art mit der unbeständigen Magie der Feenwelt vertraut. Du lernst, Sylvanisch zu sprechen, zu lesen und zu schreiben. Wenn du bereits Sylvanisch kannst, kannst du eine andere Sprache lernen. Du lernst den Zauber Selbstverkleidung und kannst ihn nach Belieben wirken. Du erlernst außerdem die Zauber Feenfeuer und Person bezaubern. Du kannst jeden dieser Zauber einmal wirken, ohne einen Zauberplatz zu verbrauchen, und du erlangst die Fähigkeit wieder, dies zu tun, sobald du eine lange Rast beendet hast. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Erd-Genasi (Rasse: Der Griff nach der Erde)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/erd-genasi/charaktere.png",
    "beschreibung": [
      "Erben der Dao · Kinder des lebendigen Steins",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Der Griff nach der Erde."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Erdschritt",
        "beschreibung": "Du bewegst dich über schwieriges Gelände, ohne zusätzliche Bewegung aufzuwenden, wenn du deine Schrittbewegungsrate auf dem Boden oder einem Fußboden nutzt."
      },
      {
        "name": "Steintarnung",
        "beschreibung": "Du kennst den Zaubertrick Klingenbann und kannst ihn normal oder als Bonusaktion wirken. Anwendungen pro langer Rast: gleich deinem Übungsbonus. Ab Stufe 5: Spurloses Gehen 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Angeborenes Talent: Der Griff nach der Erde",
        "beschreibung": "Du nutzt die Macht der Erde, um deine Feinde zu behindern. Einmal pro Runde kannst du als Teil der Angriffsaktion auf den Boden schlagen, wodurch Erde und Felsen hochgeschleudert werden und eine Kreatur im Umkreis von 9 m umschließen. Diese Kreatur muss einen Stärkerettungswurf ablegen (SG 8 + dein Übungsbonus + dein Stärkemodifikator), oder sie erleidet Schaden in Höhe deiner Stufe und ist bis zum Ende deines nächsten Zuges gefesselt. Bei einem Erfolg erleidet die Kreatur Hiebschaden in Höhe der Hälfte deiner Stufe (abgerundet) und erleidet keinen zusätzlichen Effekt. Wenn sich die Kreatur in Reichweite befindet, kannst du außerdem eine Bonusaktion einsetzen, um nach diesem Angriff einen Nahkampfangriff gegen sie auszuführen. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht, und du erhältst alle Einsätze dieser Fähigkeit zurück, wenn du eine lange Rast beendest."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Erd-Genasi (Rasse: Verderbnis des Abgrunds)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/erd-genasi/charaktere.png",
    "beschreibung": [
      "Erben der Dao · Kinder des lebendigen Steins",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Verderbnis des Abgrunds."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Erdschritt",
        "beschreibung": "Du bewegst dich über schwieriges Gelände, ohne zusätzliche Bewegung aufzuwenden, wenn du deine Schrittbewegungsrate auf dem Boden oder einem Fußboden nutzt."
      },
      {
        "name": "Steintarnung",
        "beschreibung": "Du kennst den Zaubertrick Klingenbann und kannst ihn normal oder als Bonusaktion wirken. Anwendungen pro langer Rast: gleich deinem Übungsbonus. Ab Stufe 5: Spurloses Gehen 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Angeborenes Talent: Verderbnis des Abgrunds",
        "beschreibung": "Abgründische Korruption verleiht Infernalisch, Resistenz gegen Psychoschaden, Furcht-Vorteil und zwei Abgrundzauber. Du lernst Infernalisch, die Sprache der Kreaturen des Abgrunds. Wenn du Infernalisch bereits kennst, kannst du stattdessen eine andere Sprache deiner Wahl erlernen. Du erhältst Resistenz gegen psychischen Schaden und einen Vorteil bei Schutzwürfen gegen Furcht. Du erlernst den Zauber Chaospfeil und den Zauber Tashas fürchterlicher Lachanfall. Du kannst diese Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Erd-Genasi (Rasse: Widerstand des Ursprungs)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/erd-genasi/charaktere.png",
    "beschreibung": [
      "Erben der Dao · Kinder des lebendigen Steins",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Widerstand des Ursprungs."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Erdschritt",
        "beschreibung": "Du bewegst dich über schwieriges Gelände, ohne zusätzliche Bewegung aufzuwenden, wenn du deine Schrittbewegungsrate auf dem Boden oder einem Fußboden nutzt."
      },
      {
        "name": "Steintarnung",
        "beschreibung": "Du kennst den Zaubertrick Klingenbann und kannst ihn normal oder als Bonusaktion wirken. Anwendungen pro langer Rast: gleich deinem Übungsbonus. Ab Stufe 5: Spurloses Gehen 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Angeborenes Talent: Widerstand des Ursprungs",
        "beschreibung": "Ebenare Abstammung stärkt Körper und Geist: erhöhtes TP-Maximum, Giftresistenz und Immunität gegen kritische Treffer. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erlangst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Du erhältst Resistenz gegen Giftschaden und einen Vorteil bei Rettungswürfen gegen Vergiftungen. Du wirst immun gegen kritische Treffer. Wenn ein Treffer ein kritischer Treffer sein sollte, wird er stattdessen zu einem normalen Treffer."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Erina (Rasse)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Neutral gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m",
      "Graben": "6 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Stachelbewehrte Wanderer · Hüter des ersten Hains",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 18 Metern so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In der Dunkelheit kannst du keine Farben unterscheiden, nur Grautöne."
      },
      {
        "name": "Robust",
        "beschreibung": "Vorteil auf Rettungswürfe gegen Gift und Resistenz gegen Giftschaden."
      },
      {
        "name": "Stacheln",
        "beschreibung": "Während du eine Kreatur greifst oder von einer Kreatur gegriffen wirst, erleidet die Kreatur zu Beginn deines Zuges 1W4 Stichschaden."
      },
      {
        "name": "Scharfe Sinne",
        "beschreibung": "Du hast Übung in der Fertigkeit Wahrnehmung."
      },
      {
        "name": "Graben",
        "beschreibung": "Du hast eine Grabgeschwindigkeit von 6 Metern. Du kannst dich nur durch Erde und Sand graben, nicht durch Schlamm, Eis oder Fels."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Eulenleute (Rasse: Sturmgeboren)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Lautlose Jäger der Nacht · Kinder des Feenwild",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Sturmgeboren."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 36 Metern um dich herum so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In Dunkelheit nimmst du Farben nur als Grautöne wahr."
      },
      {
        "name": "Flug",
        "beschreibung": "Dank deiner Flügel hast du eine Fluggeschwindigkeit von 9 Metern. Du kannst diese Fluggeschwindigkeit nicht nutzen, wenn du mittlere oder schwere Rüstung trägst."
      },
      {
        "name": "Lautlose Federn",
        "beschreibung": "Du hast Übung in der Fertigkeit Heimlichkeit."
      },
      {
        "name": "Angeborenes Talent: Sturmgeboren",
        "beschreibung": "Sturmresistenz, Blitzlasso und Donnerschlag als Zaubertricks, und Bonus auf Blitz- und Donnerschaden in Höhe des Übungsbonus. Du erhältst Resistenz gegen Blitzschaden und Donnerschaden. Du lernst die Zaubertricks Blitzlasso und Donnerschlag. Deine Zauberfertigkeitscharakteristik für diese Zaubertricks ist Intelligenz, Weisheit oder Charisma. Wann immer du Blitzschaden oder Donnerschaden verursachst, kannst du diesen Schaden um einen Betrag erhöhen, der deinem Übungsbonus entspricht."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Eulenleute (Rasse: Vogel der Beute)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Lautlose Jäger der Nacht · Kinder des Feenwild",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Vogel der Beute."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 36 Metern um dich herum so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In Dunkelheit nimmst du Farben nur als Grautöne wahr."
      },
      {
        "name": "Flug",
        "beschreibung": "Dank deiner Flügel hast du eine Fluggeschwindigkeit von 9 Metern. Du kannst diese Fluggeschwindigkeit nicht nutzen, wenn du mittlere oder schwere Rüstung trägst."
      },
      {
        "name": "Lautlose Federn",
        "beschreibung": "Du hast Übung in der Fertigkeit Heimlichkeit."
      },
      {
        "name": "Angeborenes Talent: Vogel der Beute",
        "beschreibung": "Blindsicht 3 m, Wahrnehmungs-Expertise, kein Nachteil in schwachem Licht und Vorteil auf sicht- und gehörbasierte Wahrnehmungswürfe. Du erhältst Blindsicht in einem Bereich von 3 Metern (10 Fuß). Du erhältst Übung in der Fertigkeit Weisheit (Wahrnehmung). Wenn du bereits Übung in der Fertigkeit Weisheit (Wahrnehmung) hast, erhältst du stattdessen Expertise darin. Schwaches Licht gibt dir keinen Nachteil auf Weisheit-(Wahrnehmungs)-Würfe, die auf Sicht beruhen. Du erhältst Vorteil auf Weisheit-(Wahrnehmungs)-Würfe, die auf Sicht oder Gehör beruhen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Eulenleute (Rasse: Wächter der Winde)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Lautlose Jäger der Nacht · Kinder des Feenwild",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Wächter der Winde."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 36 Metern um dich herum so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In Dunkelheit nimmst du Farben nur als Grautöne wahr."
      },
      {
        "name": "Flug",
        "beschreibung": "Dank deiner Flügel hast du eine Fluggeschwindigkeit von 9 Metern. Du kannst diese Fluggeschwindigkeit nicht nutzen, wenn du mittlere oder schwere Rüstung trägst."
      },
      {
        "name": "Lautlose Federn",
        "beschreibung": "Du hast Übung in der Fertigkeit Heimlichkeit."
      },
      {
        "name": "Angeborenes Talent: Wächter der Winde",
        "beschreibung": "Luftkampf-Ausbildung: Wahrnehmungs-Expertise, Waffenübung, Nachteil auf Gelegenheitsangriffe in der Luft und Sturzangriffs-Bonus. Du bist in Weisheit (Wahrnehmung) geübt. Wenn du bereits geübt bist, erhältst du Expertise. Du bist geübt im Umgang mit Speeren, Wurfspeeren und Netzen. Gelegenheitsangriffe, die gegen dich in der Luft ausgeführt werden, sind im Nachteil. Hat der Gegner einen Vorteil gegen dich, gleicht sich dies aus und der Angriff wird normal ausgeführt. Wenn du fliegst und mindestens 3 Meter auf ein Ziel zustürzt (mindestens 3 Meter deiner Bewegungsrate müssen zum Verringern deiner Höhe genutzt werden), bevor du es mit einer Nahkampfwaffe triffst, verursacht der Angriff zusätzlichen Waffenschaden in Höhe deines Übungsbonus."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Feen (Rasse: Hockenstärke)",
    "art": "Feenwesen",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens chaotisch-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/feen/charaktere.png",
    "beschreibung": [
      "Kinder des Feenwildes · Geflügelte Zauberwesen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Feenmagie",
        "beschreibung": "Du kennst den Zaubertrick Druidenkunst. Ab Stufe 3: Feenfeuer 1×/langer Rast. Ab Stufe 5: Vergrößern/Verkleinern 1×/langer Rast. Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Charisma oder Weisheit."
      },
      {
        "name": "Feenflug",
        "beschreibung": "Deine Flugbewegungsrate entspricht deiner Schrittbewegungsrate. Du kannst sie nicht nutzen, wenn du mittelschwere oder schwere Rüstung trägst."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Feen (Rasse: Meister der Feenmagie)",
    "art": "Feenwesen",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens chaotisch-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/feen/charaktere.png",
    "beschreibung": [
      "Kinder des Feenwildes · Geflügelte Zauberwesen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Meister der Feenmagie."
    ],
    "besonderheiten": [
      {
        "name": "Feenmagie",
        "beschreibung": "Du kennst den Zaubertrick Druidenkunst. Ab Stufe 3: Feenfeuer 1×/langer Rast. Ab Stufe 5: Vergrößern/Verkleinern 1×/langer Rast. Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Charisma oder Weisheit."
      },
      {
        "name": "Feenflug",
        "beschreibung": "Deine Flugbewegungsrate entspricht deiner Schrittbewegungsrate. Du kannst sie nicht nutzen, wenn du mittelschwere oder schwere Rüstung trägst."
      },
      {
        "name": "Angeborenes Talent: Meister der Feenmagie",
        "beschreibung": "Du besitzt eine besondere Begabung für Feenmagie und kannst besser mit ihr umgehen als andere. Du erlernst den Zaubertrick Tanzende Lichter. Du kannst diesen nach Belieben wirken. Wenn du den Zauber Feenfeuer wirkst, kannst du deine Ziele im Wirkbereich auswählen. Du erlernst die Zauber Gute Beeren und Wunden heilen. Du kannst diese jeweils einmal pro lange Rast benutzen. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Feen (Rasse: Pflanzenfreundschaft)",
    "art": "Feenwesen",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens chaotisch-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Fliegen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/feen/charaktere.png",
    "beschreibung": [
      "Kinder des Feenwildes · Geflügelte Zauberwesen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Pflanzenfreundschaft."
    ],
    "besonderheiten": [
      {
        "name": "Feenmagie",
        "beschreibung": "Du kennst den Zaubertrick Druidenkunst. Ab Stufe 3: Feenfeuer 1×/langer Rast. Ab Stufe 5: Vergrößern/Verkleinern 1×/langer Rast. Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Charisma oder Weisheit."
      },
      {
        "name": "Feenflug",
        "beschreibung": "Deine Flugbewegungsrate entspricht deiner Schrittbewegungsrate. Du kannst sie nicht nutzen, wenn du mittelschwere oder schwere Rüstung trägst."
      },
      {
        "name": "Angeborenes Talent: Pflanzenfreundschaft",
        "beschreibung": "Deine ausgeprägte Naturverbundenheit lässt dich noch besser mit den Wäldern und ihren Pflanzen im Einklang leben. Du erhältst Übung in Intelligenz (Naturkunde). Wenn du bereits in Naturkunde geübt bist, erhältst du Expertise. Du erlernst den Zauber Mit Pflanzen sprechen. Du kannst diesen einmal pro lange Rast benutzen. Dein Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Felsengnome (Rasse: Der unerschütterliche Berg)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens neutral-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/felsengnome/charaktere.png",
    "beschreibung": [
      "Erfindergeister · Meister von Mechanik und Tüftelei",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Der unerschütterliche Berg."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Gnomische Gerissenheit",
        "beschreibung": "Du bist im Vorteil bei allen Rettungswürfen gegen Magie, sofern sie auf Intelligenz, Weisheit oder Charisma basieren."
      },
      {
        "name": "Artefaktkunde",
        "beschreibung": "Bei Intelligenz-(Geschichte)-Würfen, die mit magischen Gegenständen, alchemistischen Objekten oder technischen Geräten zusammenhängen, addierst du deinen doppelten Übungsbonus."
      },
      {
        "name": "Tüftler",
        "beschreibung": "Du bist geübt im Umgang mit Tüftlerwerkzeug. Mit 1 Stunde Arbeit und 10 GM Material baust du ein winziges aufziehbares Gerät (RK 5, TP 1), das nach 24 Stunden aufhört zu funktionieren (außer du hältst es in Betrieb). Bis zu 3 aktive Geräte gleichzeitig. Wählbare Typen: Aufziehspielzeug (bewegt sich 1,5 m/Runde zufällig und macht Tiergeräusche), Anzünder (erzeugt kleine Flamme), Spieluhr (spielt ein Lied)."
      },
      {
        "name": "Angeborenes Talent: Der unerschütterliche Berg",
        "beschreibung": "Das Blut der alten Helden macht dich furchtlos im Angesicht von großen Gefahren und Herausforderungen. Du hast einen Vorteil bei Rettungswürfen gegen Verängstigung. Wenn du gegen eine Kreatur kämpfst, die größer ist als du, kannst du, wenn dir ein Rettungswurf misslingt, stattdessen entscheiden, dass er gelingt. Nachdem du diese Fähigkeit eingesetzt hast, musst du eine lange Rast einlegen, bevor du sie erneut einsetzen kannst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Felsengnome (Rasse: Hockenstärke)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens neutral-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/felsengnome/charaktere.png",
    "beschreibung": [
      "Erfindergeister · Meister von Mechanik und Tüftelei",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Gnomische Gerissenheit",
        "beschreibung": "Du bist im Vorteil bei allen Rettungswürfen gegen Magie, sofern sie auf Intelligenz, Weisheit oder Charisma basieren."
      },
      {
        "name": "Artefaktkunde",
        "beschreibung": "Bei Intelligenz-(Geschichte)-Würfen, die mit magischen Gegenständen, alchemistischen Objekten oder technischen Geräten zusammenhängen, addierst du deinen doppelten Übungsbonus."
      },
      {
        "name": "Tüftler",
        "beschreibung": "Du bist geübt im Umgang mit Tüftlerwerkzeug. Mit 1 Stunde Arbeit und 10 GM Material baust du ein winziges aufziehbares Gerät (RK 5, TP 1), das nach 24 Stunden aufhört zu funktionieren (außer du hältst es in Betrieb). Bis zu 3 aktive Geräte gleichzeitig. Wählbare Typen: Aufziehspielzeug (bewegt sich 1,5 m/Runde zufällig und macht Tiergeräusche), Anzünder (erzeugt kleine Flamme), Spieluhr (spielt ein Lied)."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Felsengnome (Rasse: Leichtes Verschwinden)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens neutral-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/felsengnome/charaktere.png",
    "beschreibung": [
      "Erfindergeister · Meister von Mechanik und Tüftelei",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Leichtes Verschwinden."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Gnomische Gerissenheit",
        "beschreibung": "Du bist im Vorteil bei allen Rettungswürfen gegen Magie, sofern sie auf Intelligenz, Weisheit oder Charisma basieren."
      },
      {
        "name": "Artefaktkunde",
        "beschreibung": "Bei Intelligenz-(Geschichte)-Würfen, die mit magischen Gegenständen, alchemistischen Objekten oder technischen Geräten zusammenhängen, addierst du deinen doppelten Übungsbonus."
      },
      {
        "name": "Tüftler",
        "beschreibung": "Du bist geübt im Umgang mit Tüftlerwerkzeug. Mit 1 Stunde Arbeit und 10 GM Material baust du ein winziges aufziehbares Gerät (RK 5, TP 1), das nach 24 Stunden aufhört zu funktionieren (außer du hältst es in Betrieb). Bis zu 3 aktive Geräte gleichzeitig. Wählbare Typen: Aufziehspielzeug (bewegt sich 1,5 m/Runde zufällig und macht Tiergeräusche), Anzünder (erzeugt kleine Flamme), Spieluhr (spielt ein Lied)."
      },
      {
        "name": "Angeborenes Talent: Leichtes Verschwinden",
        "beschreibung": "Du hast einen magischen Trick gelernt, um zu verschwinden, wenn du Schaden erleidest. Du erhältst Übung in Geschicklichkeit (Heimlichkeit). Wenn du bereits in Heimlichkeit geübt bist, erhältst du Expertise. Unmittelbar nachdem du Schaden erlitten hast, kannst du deine Reaktion einsetzen, um bis zum Ende deines nächsten Zugs auf magische Weise unsichtbar zu werden. Du kannst dies so oft tun, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer kurzen oder langen Rast wieder zur Verfügung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Feuer-Genasi (Rasse: Die Ewige Flamme)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Feuer"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/feuer-genasi/charaktere.png",
    "beschreibung": [
      "Erben der Ifrits · Träger der ewigen Flamme",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Die Ewige Flamme."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Feuerresistenz",
        "beschreibung": "Du bist gegen Feuerschaden resistent."
      },
      {
        "name": "Kondensation",
        "beschreibung": "Du bist von den Effekten von Durst unbetroffen."
      },
      {
        "name": "Heißblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Eine Handvoll Glut",
        "beschreibung": "Du kennst den Zaubertrick Flammen erzeugen. Ab Stufe 3: Brennende Hände 1×/langer Rast. Ab Stufe 5: Flammenklinge 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Angeborenes Talent: Die Ewige Flamme",
        "beschreibung": "Du hast gelernt, die Flamme in dir zu bändigen und als Waffe einzusetzen. Die Flammen schaden weder dir noch deinem Besitz, und sie verbreiten helles Licht bis zu einer Entfernung von 9 m und schwaches Licht für weitere 9 m. Jede Kreatur, die dich mit einem Nahkampfangriff aus einem Umkreis von 1,5 m trifft, erleidet Feuerschaden in Höhe deines Übungsbonus. Wenn du Feuerschaden würfelst, während dieser Kranz aktiv ist, kannst du zusätzlichen Feuerschaden in Höhe deines Übungsbonus verursachen. Jede Kreatur, die dich im Griff hat oder von dir im Griff gehalten wird, erleidet zu Beginn jeder ihrer Runden Feuerschaden in Höhe deines Übungsbonus. Als Bonusaktion kannst du in jedem deiner Züge einen Feuerstrahl aus dem Kranz austreten lassen. Führe einen Fernkampf-Zauberangriff gegen ein Ziel in einem Umkreis von 9 m um dich herum aus. Bei einem Treffer erleidet das Ziel 1W8 Feuerschaden. Dein Attributsmodifikator hierfür ist Weisheit, Intelligenz oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht, und du erhältst alle verbrauchten Einsätze zurück, wenn du eine lange Rast beendest."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Feuer-Genasi (Rasse: Verderbnis des Abgrunds)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Feuer"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/feuer-genasi/charaktere.png",
    "beschreibung": [
      "Erben der Ifrits · Träger der ewigen Flamme",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Verderbnis des Abgrunds."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Feuerresistenz",
        "beschreibung": "Du bist gegen Feuerschaden resistent."
      },
      {
        "name": "Kondensation",
        "beschreibung": "Du bist von den Effekten von Durst unbetroffen."
      },
      {
        "name": "Heißblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Eine Handvoll Glut",
        "beschreibung": "Du kennst den Zaubertrick Flammen erzeugen. Ab Stufe 3: Brennende Hände 1×/langer Rast. Ab Stufe 5: Flammenklinge 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Angeborenes Talent: Verderbnis des Abgrunds",
        "beschreibung": "Abgründische Korruption verleiht Infernalisch, Resistenz gegen Psychoschaden, Furcht-Vorteil und zwei Abgrundzauber. Du lernst Infernalisch, die Sprache der Kreaturen des Abgrunds. Wenn du Infernalisch bereits kennst, kannst du stattdessen eine andere Sprache deiner Wahl erlernen. Du erhältst Resistenz gegen psychischen Schaden und einen Vorteil bei Schutzwürfen gegen Furcht. Du erlernst den Zauber Chaospfeil und den Zauber Tashas fürchterlicher Lachanfall. Du kannst diese Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Feuer-Genasi (Rasse: Widerstand des Ursprungs)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Feuer"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/feuer-genasi/charaktere.png",
    "beschreibung": [
      "Erben der Ifrits · Träger der ewigen Flamme",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Widerstand des Ursprungs."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Feuerresistenz",
        "beschreibung": "Du bist gegen Feuerschaden resistent."
      },
      {
        "name": "Kondensation",
        "beschreibung": "Du bist von den Effekten von Durst unbetroffen."
      },
      {
        "name": "Heißblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Eine Handvoll Glut",
        "beschreibung": "Du kennst den Zaubertrick Flammen erzeugen. Ab Stufe 3: Brennende Hände 1×/langer Rast. Ab Stufe 5: Flammenklinge 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Angeborenes Talent: Widerstand des Ursprungs",
        "beschreibung": "Ebenare Abstammung stärkt Körper und Geist: erhöhtes TP-Maximum, Giftresistenz und Immunität gegen kritische Treffer. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erlangst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Du erhältst Resistenz gegen Giftschaden und einen Vorteil bei Rettungswürfen gegen Vergiftungen. Du wirst immun gegen kritische Treffer. Wenn ein Treffer ein kritischer Treffer sein sollte, wird er stattdessen zu einem normalen Treffer."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Firbolg (Rasse: Beschützer der Natur)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/firbolg/charaktere.png",
    "beschreibung": [
      "Erben der Riesen · Hüter der Urwälder",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Beschützer der Natur."
    ],
    "besonderheiten": [
      {
        "name": "Firbolg-Magie",
        "beschreibung": "Du kannst Magie entdecken und Selbstverkleidung wirken (Selbstverkleidung ermöglicht bis zu 1 m größer/kleiner zu erscheinen). Jeder Zauber 1×/langer Rast, oder mit Zauberplätzen. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Charisma oder Weisheit."
      },
      {
        "name": "Sprache von Tier und Pflanze",
        "beschreibung": "Du kannst mit Tieren, Pflanzen und Vegetation kommunizieren. Sie verstehen dich, du hast jedoch keine Spezialfähigkeit, ihre Antworten zu verstehen. Vorteil auf alle Charismawürfe, um sie zu beeinflussen."
      },
      {
        "name": "Verborgener Schritt",
        "beschreibung": "Als Bonusaktion wirst du bis zum Beginn deines nächsten Zuges unsichtbar. Der Zustand endet frühzeitig, wenn du angreifst, Schaden verursachst oder jemanden zu einem Rettungswurf zwingst. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Angeborenes Talent: Beschützer der Natur",
        "beschreibung": "Du hast viel dabei gelernt, andere daran zu hindern, die von dir geschützten Gebiete zu gefährden. In der freien Natur erhältst du 1,5 m zusätzliche Bewegungsrate. Du erlangst Übung in Charisma (Überzeugen). Wenn du in Überzeugen bereits geübt bist, erlangst du Expertise. Als Aktion kannst du diejenigen betören, die der Natur schaden wollen. Wähle eine Kreatur im Umkreis von 9 m um dich. Sie muss einen Rettungswurf in Weisheit bestehen (SG 8 + Übungsbonus + dein Charismamodifikator) oder 1 Stunde lang von dir verzaubert werden. Eine Kreatur hat bei diesem Rettungswurf einen Nachteil, wenn sie in der letzten Runde ein Tier oder eine Pflanze verletzt hat. Wenn das Ziel Schaden erleidet, kann es den Rettungswurf wiederholen und den Effekt bei einem Erfolg beenden. Du kannst diesen Wurf einmal machen und erhältst die Fähigkeit, ihn nach einer kurzen oder langen Rast zu wiederholen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Firbolg (Rasse: Freund des Waldes)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/firbolg/charaktere.png",
    "beschreibung": [
      "Erben der Riesen · Hüter der Urwälder",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Freund des Waldes."
    ],
    "besonderheiten": [
      {
        "name": "Firbolg-Magie",
        "beschreibung": "Du kannst Magie entdecken und Selbstverkleidung wirken (Selbstverkleidung ermöglicht bis zu 1 m größer/kleiner zu erscheinen). Jeder Zauber 1×/langer Rast, oder mit Zauberplätzen. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Charisma oder Weisheit."
      },
      {
        "name": "Sprache von Tier und Pflanze",
        "beschreibung": "Du kannst mit Tieren, Pflanzen und Vegetation kommunizieren. Sie verstehen dich, du hast jedoch keine Spezialfähigkeit, ihre Antworten zu verstehen. Vorteil auf alle Charismawürfe, um sie zu beeinflussen."
      },
      {
        "name": "Verborgener Schritt",
        "beschreibung": "Als Bonusaktion wirst du bis zum Beginn deines nächsten Zuges unsichtbar. Der Zustand endet frühzeitig, wenn du angreifst, Schaden verursachst oder jemanden zu einem Rettungswurf zwingst. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Angeborenes Talent: Freund des Waldes",
        "beschreibung": "Die Bewohner des Waldes und sogar die Bäume selbst sind dir wohlgesonnen. Du erhältst einen Bonus auf deine Initiative in Höhe deines Übungsbonus. Wenn du dich in einem Wald aufhältst, erhältst du einen Vorteil auf Weisheitswürfe. Du lernst die Zauber Mit Tieren sprechen und Mit Pflanzen sprechen und kannst sie nach Belieben wirken, ohne materielle Komponenten zu verbrauchen. Dein Modifikator für diese Zauber ist Weisheit, Intelligenz oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Firbolg (Rasse: Meister der Firbolg-Magie)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/firbolg/charaktere.png",
    "beschreibung": [
      "Erben der Riesen · Hüter der Urwälder",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Meister der Firbolg-Magie."
    ],
    "besonderheiten": [
      {
        "name": "Firbolg-Magie",
        "beschreibung": "Du kannst Magie entdecken und Selbstverkleidung wirken (Selbstverkleidung ermöglicht bis zu 1 m größer/kleiner zu erscheinen). Jeder Zauber 1×/langer Rast, oder mit Zauberplätzen. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Charisma oder Weisheit."
      },
      {
        "name": "Sprache von Tier und Pflanze",
        "beschreibung": "Du kannst mit Tieren, Pflanzen und Vegetation kommunizieren. Sie verstehen dich, du hast jedoch keine Spezialfähigkeit, ihre Antworten zu verstehen. Vorteil auf alle Charismawürfe, um sie zu beeinflussen."
      },
      {
        "name": "Verborgener Schritt",
        "beschreibung": "Als Bonusaktion wirst du bis zum Beginn deines nächsten Zuges unsichtbar. Der Zustand endet frühzeitig, wenn du angreifst, Schaden verursachst oder jemanden zu einem Rettungswurf zwingst. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Angeborenes Talent: Meister der Firbolg-Magie",
        "beschreibung": "Du erlernst die fortgeschrittene druidische Magie, zu der nur wenige deines Volkes Zugang haben. Du erlernst einen Druiden-Zaubertrick deiner Wahl sowie die Zauber Tierfreundschaft und Feenfeuer, die du jeweils einmal ohne Zauberplatz wirken kannst. Du erlangst diese Fähigkeit nach einer langen Rast erneut. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen). Du erhältst die Fähigkeit, die Gestalt eines Tieres mit HG 1/4 oder weniger anzunehmen, das du schon gesehen hast (ähnlich der Druideneigenschaft Tiergestalt). Die Bestie kann weder fliegen noch schwimmen. Du bleibst 1 Stunde in der Tiergestalt oder kehrst früher per Bonusaktion zurück. Es gelten alle regulären Regeln für Tiergestalt. Du erhältst einen Einsatz dieser Eigenschaft; besitzt du Tiergestalt bereits, kannst du sie 1 Mal zusätzlich einsetzen (normale Regeln einschließlich Symbiose/Wildfeuergeist). Verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Gebirgszwerge (Rasse: Der unerschütterliche Berg)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/gebirgszwerge/charaktere.png",
    "beschreibung": [
      "Krieger des Steins · Hüter der Bergfestungen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Der unerschütterliche Berg."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Zwergische Unverwüstlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen Gifte im Vorteil und besitzt Resistenz gegen Giftschaden."
      },
      {
        "name": "Zwergisches Kampftraining",
        "beschreibung": "Du bist geübt im Umgang mit Streitäxten, Beilen, leichten Hämmern und Kriegshämmern."
      },
      {
        "name": "Handwerkliches Geschick",
        "beschreibung": "Du bist geübt mit dem Werkzeug eines der folgenden Berufe (deine Wahl): Braumeister, Schmied oder Steinmetz."
      },
      {
        "name": "Steingespür",
        "beschreibung": "Bei Intelligenz-(Geschichte)-Würfen zur Herkunft von Steinarbeiten wirst du als geübt angesehen und addierst deinen doppelten Übungsbonus."
      },
      {
        "name": "Zwergische Rüstungsvertrautheit",
        "beschreibung": "Du bist geübt im Umgang mit leichten und mittelschweren Rüstungen."
      },
      {
        "name": "Angeborenes Talent: Der unerschütterliche Berg",
        "beschreibung": "Das Blut der alten Helden macht dich furchtlos im Angesicht von großen Gefahren und Herausforderungen. Du hast einen Vorteil bei Rettungswürfen gegen Verängstigung. Wenn du gegen eine Kreatur kämpfst, die größer ist als du, kannst du, wenn dir ein Rettungswurf misslingt, stattdessen entscheiden, dass er gelingt. Nachdem du diese Fähigkeit eingesetzt hast, musst du eine lange Rast einlegen, bevor du sie erneut einsetzen kannst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Gebirgszwerge (Rasse: Hockenstärke)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/gebirgszwerge/charaktere.png",
    "beschreibung": [
      "Krieger des Steins · Hüter der Bergfestungen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Zwergische Unverwüstlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen Gifte im Vorteil und besitzt Resistenz gegen Giftschaden."
      },
      {
        "name": "Zwergisches Kampftraining",
        "beschreibung": "Du bist geübt im Umgang mit Streitäxten, Beilen, leichten Hämmern und Kriegshämmern."
      },
      {
        "name": "Handwerkliches Geschick",
        "beschreibung": "Du bist geübt mit dem Werkzeug eines der folgenden Berufe (deine Wahl): Braumeister, Schmied oder Steinmetz."
      },
      {
        "name": "Steingespür",
        "beschreibung": "Bei Intelligenz-(Geschichte)-Würfen zur Herkunft von Steinarbeiten wirst du als geübt angesehen und addierst deinen doppelten Übungsbonus."
      },
      {
        "name": "Zwergische Rüstungsvertrautheit",
        "beschreibung": "Du bist geübt im Umgang mit leichten und mittelschweren Rüstungen."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Gebirgszwerge (Rasse: Zwergische Tapferkeit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/gebirgszwerge/charaktere.png",
    "beschreibung": [
      "Krieger des Steins · Hüter der Bergfestungen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Zwergische Tapferkeit."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Zwergische Unverwüstlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen Gifte im Vorteil und besitzt Resistenz gegen Giftschaden."
      },
      {
        "name": "Zwergisches Kampftraining",
        "beschreibung": "Du bist geübt im Umgang mit Streitäxten, Beilen, leichten Hämmern und Kriegshämmern."
      },
      {
        "name": "Handwerkliches Geschick",
        "beschreibung": "Du bist geübt mit dem Werkzeug eines der folgenden Berufe (deine Wahl): Braumeister, Schmied oder Steinmetz."
      },
      {
        "name": "Steingespür",
        "beschreibung": "Bei Intelligenz-(Geschichte)-Würfen zur Herkunft von Steinarbeiten wirst du als geübt angesehen und addierst deinen doppelten Übungsbonus."
      },
      {
        "name": "Zwergische Rüstungsvertrautheit",
        "beschreibung": "Du bist geübt im Umgang mit leichten und mittelschweren Rüstungen."
      },
      {
        "name": "Angeborenes Talent: Zwergische Tapferkeit",
        "beschreibung": "Zwergenhelden-Blut: Vorteil auf Todesrettungswürfe, erhöhtes TP-Maximum und Selbstheilung mit Trefferwürfeln beim Ausweichen. Du hast einen Vorteil bei Todesrettungswürfen. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Immer wenn du im Kampf die Aktion Ausweichen ausführst, kannst du einen oder mehrere Trefferwürfel benutzen, um dich zu heilen. Wirf den Würfel, addiere deinen Konstitutionsmodifikator und erhalte eine Anzahl von Trefferpunkten zurück, die der Gesamtzahl entsprechen (mindestens 1)."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Geppettin (Rasse)",
    "art": "Konstrukt",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Beliebige Gesinnung",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Lebendige Spielzeuge · Kinder des Handwerks und der Magie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 18 Metern so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In der Dunkelheit kannst du keine Farben unterscheiden, nur Grautöne."
      },
      {
        "name": "Konstruktanatomie",
        "beschreibung": "Immun gegen nicht-magische Krankheiten. Du musst weder essen noch atmen (kannst es aber). Statt zu schlafen 4h inaktiver Zustand täglich — du bist dir der Umgebung bewusst und nimmst herannahende Feinde wahr. Schlafauslösende Magie wirkt trotzdem."
      },
      {
        "name": "Harmlos",
        "beschreibung": "Du hast Vorteil auf CHA-(Täuschung)-Würfe, um als gewöhnliches Spielzeug zu erscheinen."
      },
      {
        "name": "— Biskuit: Spiegelglanz",
        "beschreibung": "1×/kurze Rast, wenn ein Täuschungswurf erkannt wird oder ein Angreifer dich für Beute hält: der Angreifer hat Nachteil auf seinen nächsten Angriffswurf gegen dich."
      },
      {
        "name": "— Marionette: Holzrobustheit",
        "beschreibung": "Resistenz gegen Wuchtschaden."
      },
      {
        "name": "— Zerlupfte: Stofffaltung",
        "beschreibung": "Als Aktion kannst du dich auf Winzig-Größe zusammenfalten (Vorteil auf Heimlichkeit). Als Bonusaktion wieder entfalten. Kein Tragen von Ausrüstung im gefalteten Zustand."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Giff (Rasse: Astrale Widerstandsfähigkeit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Hippomorphe Soldaten · Kinder des verlorenen Götterlichts",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Astrale Widerstandsfähigkeit."
    ],
    "besonderheiten": [
      {
        "name": "Astralfunke",
        "beschreibung": "Wenn du ein Ziel mit einer einfachen oder kriegerischen Waffe triffst, kannst du das Ziel zusätzlichen Kraftschaden in Höhe deines Übungsbonus erleiden lassen. Du kannst diesen Zug so oft nutzen, wie dein Übungsbonus beträgt, aber nicht öfter als einmal pro Runde. Du erhältst alle verbrauchten Nutzungen zurück, wenn du eine lange Rast beendest."
      },
      {
        "name": "Waffenmeisterschaft mit Schusswaffen",
        "beschreibung": "Du hast Übung mit allen Schusswaffen und ignorierst die Ladeeigenschaft jeder Schusswaffe. Außerdem erleidest du keinen Nachteil auf deinen Angriffswurf, wenn du mit einer Schusswaffe auf große Entfernungen schießt."
      },
      {
        "name": "Nilpferdstatur",
        "beschreibung": "Du hast Vorteil auf Stärke-basierte Eigenschaftswürfe und Stärkerettungswürfe. Außerdem giltst du für die Bestimmung deiner Tragekapazität und des Gewichts, das du schieben, ziehen oder heben kannst, als eine Größenkategorie größer."
      },
      {
        "name": "Angeborenes Talent: Astrale Widerstandsfähigkeit",
        "beschreibung": "Deine Exposition gegenüber dem Astralmeer hat dich gestählt und deinen Körper robuster gemacht. Dein Trefferpunktmaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du dieses Talent erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktmaximum um zusätzlich 1 Trefferpunkt. Du erhältst Resistenz gegen psychischen Schaden und Kraftschaden. Du erhältst Vorteil auf Konstitutionswürfe und Rettungswürfe."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Giff (Rasse: Funkenteiler)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Hippomorphe Soldaten · Kinder des verlorenen Götterlichts",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Funkenteiler."
    ],
    "besonderheiten": [
      {
        "name": "Astralfunke",
        "beschreibung": "Wenn du ein Ziel mit einer einfachen oder kriegerischen Waffe triffst, kannst du das Ziel zusätzlichen Kraftschaden in Höhe deines Übungsbonus erleiden lassen. Du kannst diesen Zug so oft nutzen, wie dein Übungsbonus beträgt, aber nicht öfter als einmal pro Runde. Du erhältst alle verbrauchten Nutzungen zurück, wenn du eine lange Rast beendest."
      },
      {
        "name": "Waffenmeisterschaft mit Schusswaffen",
        "beschreibung": "Du hast Übung mit allen Schusswaffen und ignorierst die Ladeeigenschaft jeder Schusswaffe. Außerdem erleidest du keinen Nachteil auf deinen Angriffswurf, wenn du mit einer Schusswaffe auf große Entfernungen schießt."
      },
      {
        "name": "Nilpferdstatur",
        "beschreibung": "Du hast Vorteil auf Stärke-basierte Eigenschaftswürfe und Stärkerettungswürfe. Außerdem giltst du für die Bestimmung deiner Tragekapazität und des Gewichts, das du schieben, ziehen oder heben kannst, als eine Größenkategorie größer."
      },
      {
        "name": "Angeborenes Talent: Funkenteiler",
        "beschreibung": "Deine Kampfkunst ermöglicht es dir, deinen Astralfunken zu teilen und kritische Treffer zurückzugewinnen. Dein kritischer Trefferbereich für Angriffe erhöht sich um 1. Wenn du einen kritischen Treffer landest, erhältst du 1 Nutzung deines Zugs „Astralfunke“ zurück. Wenn du einen Angriff machst und deinen Zug „Astralfunke“ verwendest, kannst du eine zweite Kreatur, die sich innerhalb einer Anzahl von Fuß, die deinem Übungsbonus multipliziert mit fünf entspricht, befinden, dazu bringen, Kraftschaden in Höhe der Hälfte des Schadens zu erleiden, den der Angriff verursacht hat."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Giff (Rasse: Nahkampfspezialist)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Hippomorphe Soldaten · Kinder des verlorenen Götterlichts",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Nahkampfspezialist."
    ],
    "besonderheiten": [
      {
        "name": "Astralfunke",
        "beschreibung": "Wenn du ein Ziel mit einer einfachen oder kriegerischen Waffe triffst, kannst du das Ziel zusätzlichen Kraftschaden in Höhe deines Übungsbonus erleiden lassen. Du kannst diesen Zug so oft nutzen, wie dein Übungsbonus beträgt, aber nicht öfter als einmal pro Runde. Du erhältst alle verbrauchten Nutzungen zurück, wenn du eine lange Rast beendest."
      },
      {
        "name": "Waffenmeisterschaft mit Schusswaffen",
        "beschreibung": "Du hast Übung mit allen Schusswaffen und ignorierst die Ladeeigenschaft jeder Schusswaffe. Außerdem erleidest du keinen Nachteil auf deinen Angriffswurf, wenn du mit einer Schusswaffe auf große Entfernungen schießt."
      },
      {
        "name": "Nilpferdstatur",
        "beschreibung": "Du hast Vorteil auf Stärke-basierte Eigenschaftswürfe und Stärkerettungswürfe. Außerdem giltst du für die Bestimmung deiner Tragekapazität und des Gewichts, das du schieben, ziehen oder heben kannst, als eine Größenkategorie größer."
      },
      {
        "name": "Angeborenes Talent: Nahkampfspezialist",
        "beschreibung": "Spezialausbildung im Nahkampf: kein Nachteil für Schusswaffen in Reichweite und Komboangriffe aus Nah- und Fernkampf. Wenn du dich innerhalb von 1,5 Metern (5 Fuß) eines Feindes befindest, erleiden deine Angriffe mit Schusswaffen keinen Nachteil. Wenn du einen Nahkampfwaffenangriff mit einer Waffe machst, die du in einer Hand führst, kannst du eine geladene Schusswaffe in deiner anderen Hand auf dasselbe Ziel abfeuern. Du kannst dies nur einmal pro Runde tun. Wenn du dich in Nahkampfreichweite eines Ziels befindest und mit einem Angriff verfehlst, erhältst du einen kumulativen +1-Bonus auf deine Angriffswürfe. Dieser Bonus stapelt sich, bis du triffst oder den Kampf beginnst oder beendest."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Githyanki (Rasse: Astralkonstitution)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Psychisch"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/githyanki/charaktere.png",
    "beschreibung": [
      "Krieger der Astralebene · Erben des Widerstands",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Astralkonstitution."
    ],
    "besonderheiten": [
      {
        "name": "Psychische Unverwüstlichkeit",
        "beschreibung": "Du bist gegen psychischen Schaden resistent."
      },
      {
        "name": "Githyanki-Psionik",
        "beschreibung": "Du kennst den Zaubertrick Magierhand (die Hand ist unsichtbar). Ab Stufe 3: Springen 1×/langer Rast. Ab Stufe 5: Nebelschritt 1×/langer Rast. Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Astrales Wissen",
        "beschreibung": "Wenn du eine lange Rast beendest, projizierst du dein Bewusstsein kurz in die Astralebene. Du bist bis zum Ende der nächsten langen Rast in einer Fertigkeit sowie mit einer Waffe oder einem Werkzeug deiner Wahl (aus dem Spielerhandbuch) geübt."
      },
      {
        "name": "Angeborenes Talent: Astralkonstitution",
        "beschreibung": "Dein Aufenthalt im Astralmeer hat dich abgehärtet und deinen Körper widerstandsfähiger gemacht. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du dieses Talent erlangst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Würdest du psychischen Schaden erleiden, kannst du deine Reaktion verwenden, um einen Schadenswurf zu widerstehen. Du erhältst keinen Schaden durch diesen Schadenswurf. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht, und du erhältst alle verbrauchten Einsätze zurück, wenn du eine lange Rast beendest. Diese Eigenschaft kann in bestimmten Situationen, nach Ermessen des Spielleiters, fehlschlagen. Du erhältst einen Vorteil bei Rettungswürfen gegen Gedankenlesen. Du wirst immun gegen kritische Treffer. Wenn ein Treffer ein kritischer Treffer sein sollte, wird er stattdessen zu einem normalen Treffer."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Githyanki (Rasse: Gedankenklingen)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Psychisch"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/githyanki/charaktere.png",
    "beschreibung": [
      "Krieger der Astralebene · Erben des Widerstands",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Gedankenklingen."
    ],
    "besonderheiten": [
      {
        "name": "Psychische Unverwüstlichkeit",
        "beschreibung": "Du bist gegen psychischen Schaden resistent."
      },
      {
        "name": "Githyanki-Psionik",
        "beschreibung": "Du kennst den Zaubertrick Magierhand (die Hand ist unsichtbar). Ab Stufe 3: Springen 1×/langer Rast. Ab Stufe 5: Nebelschritt 1×/langer Rast. Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Astrales Wissen",
        "beschreibung": "Wenn du eine lange Rast beendest, projizierst du dein Bewusstsein kurz in die Astralebene. Du bist bis zum Ende der nächsten langen Rast in einer Fertigkeit sowie mit einer Waffe oder einem Werkzeug deiner Wahl (aus dem Spielerhandbuch) geübt."
      },
      {
        "name": "Angeborenes Talent: Gedankenklingen",
        "beschreibung": "Dein psionisches Geschick ist größer als das deiner Artgenossen. Wenn du Nahkampfwaffen ohne die Eigenschaft Reichweite führst, kannst du diese mit deiner Psionik schweben lassen. Wenn du in deinem Zug einen Nahkampfangriff ausführst, beträgt deine Reichweite dabei 1,5 m mehr als sonst. Solange du deine Waffe schweben lässt, kannst du deinen Intelligenzmodifikator statt Stärke oder Geschicklichkeit für den Angriffs- und Schadenswurf verwenden. Wenn du eine Kreatur in deinem Zug mit einem physischen Waffenangriff triffst, kannst du dieses Merkmal verwenden, um dem Ziel zusätzlich 1W6 psychischen Schaden zuzufügen. Dieser Schaden erhöht sich mit jeder Stufe: auf der 6. Stufe auf 1W8, auf der 11. Stufe auf 1W10 und auf der 16. Stufe auf 1W12."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Githyanki (Rasse: Verbesserte Gith-Psionik)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Psychisch"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/githyanki/charaktere.png",
    "beschreibung": [
      "Krieger der Astralebene · Erben des Widerstands",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Verbesserte Gith-Psionik."
    ],
    "besonderheiten": [
      {
        "name": "Psychische Unverwüstlichkeit",
        "beschreibung": "Du bist gegen psychischen Schaden resistent."
      },
      {
        "name": "Githyanki-Psionik",
        "beschreibung": "Du kennst den Zaubertrick Magierhand (die Hand ist unsichtbar). Ab Stufe 3: Springen 1×/langer Rast. Ab Stufe 5: Nebelschritt 1×/langer Rast. Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Astrales Wissen",
        "beschreibung": "Wenn du eine lange Rast beendest, projizierst du dein Bewusstsein kurz in die Astralebene. Du bist bis zum Ende der nächsten langen Rast in einer Fertigkeit sowie mit einer Waffe oder einem Werkzeug deiner Wahl (aus dem Spielerhandbuch) geübt."
      },
      {
        "name": "Angeborenes Talent: Verbesserte Gith-Psionik",
        "beschreibung": "Stärke deine psionischen Kräfte mit Gedankensplitter, Intellektfestung (1/langer Rast) und komponentenfreiem Wirken. Du erlernst den Zaubertrick Gedankensplitter. Du erlernst außerdem den Zauber Intellektfestung, den du einmal wirken kannst, ohne einen Zauberplatz zu verbrauchen; diese Fähigkeit kehrt nach einer langen Rast zurück. Dein Zauberfähigkeitsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Weder diese Zauber noch deine Rassenfähigkeiten benötigen verbale oder somatische Komponenten, und auch keine materiellen Komponenten, es sei denn, sie werden durch den Zauber verbraucht."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Githzerai (Rasse: Ebenenwahrnehmung)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Psychisch"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/githzerai/charaktere.png",
    "beschreibung": [
      "Mönche des Limbus · Meister der inneren Ordnung",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Ebenenwahrnehmung."
    ],
    "besonderheiten": [
      {
        "name": "Psychische Unverwüstlichkeit",
        "beschreibung": "Du bist gegen psychischen Schaden resistent."
      },
      {
        "name": "Githzerai-Psionik",
        "beschreibung": "Du kennst den Zaubertrick Magierhand (die Hand ist unsichtbar). Ab Stufe 3: Schild 1×/langer Rast. Ab Stufe 5: Gedanken wahrnehmen 1×/langer Rast. Beide Zauber können auch mit Zauberplätzen gewirkt werden. Für keinen dieser Zauber sind Materialkomponenten erforderlich, wenn du sie mit diesem Merkmal wirkst. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Mentale Disziplin",
        "beschreibung": "Dank deiner psychischen Abwehrfähigkeit bist du bei Rettungswürfen gegen die Zustände Bezaubert und Verängstigt sowie zu deren Aufhebung bei dir selbst im Vorteil."
      },
      {
        "name": "Angeborenes Talent: Ebenenwahrnehmung",
        "beschreibung": "Deine Sicht ist durch die Ebenenwanderung verändert und anderen deiner Rasse überlegen. Du erhältst Dunkelheitssicht von 27 m und Blindsicht von 1,5 m. Du erhältst Übung in Weisheit (Wahrnehmung) oder Intelligenz (Nachforschung). Schummriges Licht verursacht keinen Nachteil bei Weisheitsproben (Wahrnehmung) oder Intelligenzproben (Nachforschung), die sich auf deine Sicht verlassen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Githzerai (Rasse: Gedankenklingen)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Psychisch"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/githzerai/charaktere.png",
    "beschreibung": [
      "Mönche des Limbus · Meister der inneren Ordnung",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Gedankenklingen."
    ],
    "besonderheiten": [
      {
        "name": "Psychische Unverwüstlichkeit",
        "beschreibung": "Du bist gegen psychischen Schaden resistent."
      },
      {
        "name": "Githzerai-Psionik",
        "beschreibung": "Du kennst den Zaubertrick Magierhand (die Hand ist unsichtbar). Ab Stufe 3: Schild 1×/langer Rast. Ab Stufe 5: Gedanken wahrnehmen 1×/langer Rast. Beide Zauber können auch mit Zauberplätzen gewirkt werden. Für keinen dieser Zauber sind Materialkomponenten erforderlich, wenn du sie mit diesem Merkmal wirkst. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Mentale Disziplin",
        "beschreibung": "Dank deiner psychischen Abwehrfähigkeit bist du bei Rettungswürfen gegen die Zustände Bezaubert und Verängstigt sowie zu deren Aufhebung bei dir selbst im Vorteil."
      },
      {
        "name": "Angeborenes Talent: Gedankenklingen",
        "beschreibung": "Dein psionisches Geschick ist größer als das deiner Artgenossen. Wenn du Nahkampfwaffen ohne die Eigenschaft Reichweite führst, kannst du diese mit deiner Psionik schweben lassen. Wenn du in deinem Zug einen Nahkampfangriff ausführst, beträgt deine Reichweite dabei 1,5 m mehr als sonst. Solange du deine Waffe schweben lässt, kannst du deinen Intelligenzmodifikator statt Stärke oder Geschicklichkeit für den Angriffs- und Schadenswurf verwenden. Wenn du eine Kreatur in deinem Zug mit einem physischen Waffenangriff triffst, kannst du dieses Merkmal verwenden, um dem Ziel zusätzlich 1W6 psychischen Schaden zuzufügen. Dieser Schaden erhöht sich mit jeder Stufe: auf der 6. Stufe auf 1W8, auf der 11. Stufe auf 1W10 und auf der 16. Stufe auf 1W12."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Githzerai (Rasse: Verbesserte Gith-Psionik)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Psychisch"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/githzerai/charaktere.png",
    "beschreibung": [
      "Mönche des Limbus · Meister der inneren Ordnung",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Verbesserte Gith-Psionik."
    ],
    "besonderheiten": [
      {
        "name": "Psychische Unverwüstlichkeit",
        "beschreibung": "Du bist gegen psychischen Schaden resistent."
      },
      {
        "name": "Githzerai-Psionik",
        "beschreibung": "Du kennst den Zaubertrick Magierhand (die Hand ist unsichtbar). Ab Stufe 3: Schild 1×/langer Rast. Ab Stufe 5: Gedanken wahrnehmen 1×/langer Rast. Beide Zauber können auch mit Zauberplätzen gewirkt werden. Für keinen dieser Zauber sind Materialkomponenten erforderlich, wenn du sie mit diesem Merkmal wirkst. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Mentale Disziplin",
        "beschreibung": "Dank deiner psychischen Abwehrfähigkeit bist du bei Rettungswürfen gegen die Zustände Bezaubert und Verängstigt sowie zu deren Aufhebung bei dir selbst im Vorteil."
      },
      {
        "name": "Angeborenes Talent: Verbesserte Gith-Psionik",
        "beschreibung": "Stärke deine psionischen Kräfte mit Gedankensplitter, Intellektfestung (1/langer Rast) und komponentenfreiem Wirken. Du erlernst den Zaubertrick Gedankensplitter. Du erlernst außerdem den Zauber Intellektfestung, den du einmal wirken kannst, ohne einen Zauberplatz zu verbrauchen; diese Fähigkeit kehrt nach einer langen Rast zurück. Dein Zauberfähigkeitsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Weder diese Zauber noch deine Rassenfähigkeiten benötigen verbale oder somatische Komponenten, und auch keine materiellen Komponenten, es sei denn, sie werden durch den Zauber verbraucht."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Gnoll (Rasse)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meist chaotisch böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Kinder der Hyäne · Raubtiere mit Verstand",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 18 Metern so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In der Dunkelheit kannst du keine Farben unterscheiden, nur Grautöne."
      },
      {
        "name": "Geruchssinn",
        "beschreibung": "Du hast Vorteil auf Weisheit-(Wahrnehmungs)-Würfe, die auf Geruch beruhen."
      },
      {
        "name": "Tyrann",
        "beschreibung": "Du hast Nachteil auf Rettungswürfe gegen Furcht. Wenn du einen CHA-(Einschüchterungs)-Wurf gegenüber offensichtlich kleineren oder schwächeren Zielen machst, gilt doppelter Übungsbonus statt normalem."
      },
      {
        "name": "Weiterleben um einen anderen Tag zu kämpfen",
        "beschreibung": "Wenn du die Ausscheren-Aktion ausführst, erhöht sich deine Gehgeschwindigkeit um 3 Meter."
      },
      {
        "name": "Gnoll-Waffenausbildung",
        "beschreibung": "Du hast Übung mit Speer, Kurzbogen, Langbogen, leichter Armbrust und schwerer Armbrust."
      },
      {
        "name": "— Zivilisiert: Unterwürfig",
        "beschreibung": "Bei Überzeugung gegenüber offensichtlich Mächtigeren gilt doppelter Übungsbonus statt normalem."
      },
      {
        "name": "— Wild: Aassuche",
        "beschreibung": "Bei Überleben zum Sammeln von Nahrung oder Auffinden von Wasser gilt doppelter Übungsbonus statt normalem."
      },
      {
        "name": "— Wüste: Hitzetoleranz",
        "beschreibung": "Resistenz gegen Feuerschaden. Du kannst dreimal so lange ohne Wasser auskommen wie die meisten Humanoiden."
      },
      {
        "name": "— Nekropole: Unter den Toten",
        "beschreibung": "Resistenz gegen nekrotischen Schaden."
      },
      {
        "name": "— Nekropole: Fluchtrotzigkeit",
        "beschreibung": "Vorteil auf Rettungswürfe gegen Flüche."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Goblins (Rasse: Hockenstärke)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens neutral-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/goblins/charaktere.png",
    "beschreibung": [
      "Überlebenskünstler · Erben der Feengabe",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du bist bei Rettungswürfen gegen den Bezaubert-Zustand sowie zu dessen Aufhebung bei dir selbst im Vorteil."
      },
      {
        "name": "Behändes Entkommen",
        "beschreibung": "In jedem deiner Züge kannst du Rückzug oder Verstecken als Bonusaktion ausführen."
      },
      {
        "name": "Zorn der kleinen Leute",
        "beschreibung": "Wenn du mit einem Angriff oder Zauber einer Kreatur, die größer ist als du, Schaden zufügst, richtest du zusätzlichen Schaden in Höhe deines Übungsbonus an. Anwendungen pro langer Rast entsprechen deinem Übungsbonus. Maximal einmal pro Runde."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Goblins (Rasse: Kriegsgeboren)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens neutral-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/goblins/charaktere.png",
    "beschreibung": [
      "Überlebenskünstler · Erben der Feengabe",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Kriegsgeboren."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du bist bei Rettungswürfen gegen den Bezaubert-Zustand sowie zu dessen Aufhebung bei dir selbst im Vorteil."
      },
      {
        "name": "Behändes Entkommen",
        "beschreibung": "In jedem deiner Züge kannst du Rückzug oder Verstecken als Bonusaktion ausführen."
      },
      {
        "name": "Zorn der kleinen Leute",
        "beschreibung": "Wenn du mit einem Angriff oder Zauber einer Kreatur, die größer ist als du, Schaden zufügst, richtest du zusätzlichen Schaden in Höhe deines Übungsbonus an. Anwendungen pro langer Rast entsprechen deinem Übungsbonus. Maximal einmal pro Runde."
      },
      {
        "name": "Angeborenes Talent: Kriegsgeboren",
        "beschreibung": "Du wurdest während eines Feldzugs deines Heeres geboren und hast viele Dinge durch das Beobachten gelernt. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Du erhältst Übung in einer Waffe, einem Werkzeug und lernst eine Sprache deiner Wahl. Du erhältst einen Vorteil bei Rettungswürfen gegen Verzauberung oder Verängstigung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Goblins (Rasse: Trickster-Geist)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens neutral-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/goblins/charaktere.png",
    "beschreibung": [
      "Überlebenskünstler · Erben der Feengabe",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Trickster-Geist."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du bist bei Rettungswürfen gegen den Bezaubert-Zustand sowie zu dessen Aufhebung bei dir selbst im Vorteil."
      },
      {
        "name": "Behändes Entkommen",
        "beschreibung": "In jedem deiner Züge kannst du Rückzug oder Verstecken als Bonusaktion ausführen."
      },
      {
        "name": "Zorn der kleinen Leute",
        "beschreibung": "Wenn du mit einem Angriff oder Zauber einer Kreatur, die größer ist als du, Schaden zufügst, richtest du zusätzlichen Schaden in Höhe deines Übungsbonus an. Anwendungen pro langer Rast entsprechen deinem Übungsbonus. Maximal einmal pro Runde."
      },
      {
        "name": "Angeborenes Talent: Trickster-Geist",
        "beschreibung": "Geisterspuren verleihen dir Überzeugungstalent, Schadensreduktion per Reaktion und den Zauber Spiegelbild. Du erhältst Übung in Charisma (Überzeugen) und Charisma (Täuschen). Wenn du Schaden nimmst, kannst du deine Reaktion nutzen, um einen Trefferwürfel zu werfen und den erlittenen Schaden um den gewürfelten Betrag + deinen Konstitutionsmodifikator zu reduzieren. Wenn du dadurch den erlittenen Schaden auf Null reduzierst, erhältst du eine Anzahl von temporären Trefferpunkten in Höhe deines Konstitutionsmodifikators. Du erlernst den Zauber Spiegelbild und kannst ihn einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Zauberfähigkeitsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Goliaths (Rasse: Angeborene Wut)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Kälte"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/goliaths/charaktere.png",
    "beschreibung": [
      "Kinder des Berges · Krieger der Hochlande",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Angeborene Wut."
    ],
    "besonderheiten": [
      {
        "name": "Gebirgsgänger",
        "beschreibung": "Du bist gegen Kälteschaden resistent. Außerdem kannst du dich auf große Höhen einstellen, ohne je dort gewesen zu sein — bis zu 6.000 m Höhe."
      },
      {
        "name": "Kleiner Riese",
        "beschreibung": "Du bist in Athletik geübt und zählst eine Größenkategorie größer, wenn deine Traglast sowie das Gewicht bestimmt wird, das du schieben, ziehen oder anheben kannst."
      },
      {
        "name": "Steinhärte",
        "beschreibung": "Wenn du Schaden erleidest, kannst du als Reaktion einen W12 werfen. Füge deinen Konstitutionsmodifikator hinzu und ziehe die Summe vom erlittenen Schaden ab. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Angeborenes Talent: Angeborene Wut",
        "beschreibung": "Die Wut deines Volkes und der wilde Kampfstil haben dich geprägt. Wenn du einen Angriff mit einer Nahkampfwaffe mit Stärke ausführst, addierst du deinen Übungsbonus zum verursachten Schaden. Als Reaktion auf Hieb-, Stich- oder Wuchtschaden kannst du diesen Schaden um die Hälfte reduzieren. Du kannst dies nur dreimal tun, dann endet deine Wut. Deine Bewegungsrate erhöht sich um 1,5 Meter, wenn du keine schwere Rüstung trägst. Wenn du auf 0 Trefferpunkte fällst, aber nicht sofort stirbst, kannst du stattdessen auf 1 Trefferpunkt fallen. Unabhängig davon, ob du dich entscheidest, auf 1 Trefferpunkt zu fallen oder nicht, endet deine Wut. Wenn du in der Lage bist, Zauber zu wirken, kannst du sie während deines Zorns weder wirken noch dich darauf konzentrieren."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Goliaths (Rasse: Athletische Perfektion)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Kälte"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/goliaths/charaktere.png",
    "beschreibung": [
      "Kinder des Berges · Krieger der Hochlande",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Athletische Perfektion."
    ],
    "besonderheiten": [
      {
        "name": "Gebirgsgänger",
        "beschreibung": "Du bist gegen Kälteschaden resistent. Außerdem kannst du dich auf große Höhen einstellen, ohne je dort gewesen zu sein — bis zu 6.000 m Höhe."
      },
      {
        "name": "Kleiner Riese",
        "beschreibung": "Du bist in Athletik geübt und zählst eine Größenkategorie größer, wenn deine Traglast sowie das Gewicht bestimmt wird, das du schieben, ziehen oder anheben kannst."
      },
      {
        "name": "Steinhärte",
        "beschreibung": "Wenn du Schaden erleidest, kannst du als Reaktion einen W12 werfen. Füge deinen Konstitutionsmodifikator hinzu und ziehe die Summe vom erlittenen Schaden ab. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Angeborenes Talent: Athletische Perfektion",
        "beschreibung": "Der Wettkampf mit Gleichaltrigen hat deinen Körper in einen nahezu perfekten Zustand gebracht. Du erlangst Expertise in Stärke (Athletik). Wenn du die Aktion Spurt ausführst, kannst du dich bis zum Dreifachen deiner Bewegungsrate bewegen, anstatt dem Doppelten deiner Bewegungsrate. Du hast einen Vorteil bei Attributswürfen auf Stärke."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Goliaths (Rasse: Segen der Berge)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Kälte"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/goliaths/charaktere.png",
    "beschreibung": [
      "Kinder des Berges · Krieger der Hochlande",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Segen der Berge."
    ],
    "besonderheiten": [
      {
        "name": "Gebirgsgänger",
        "beschreibung": "Du bist gegen Kälteschaden resistent. Außerdem kannst du dich auf große Höhen einstellen, ohne je dort gewesen zu sein — bis zu 6.000 m Höhe."
      },
      {
        "name": "Kleiner Riese",
        "beschreibung": "Du bist in Athletik geübt und zählst eine Größenkategorie größer, wenn deine Traglast sowie das Gewicht bestimmt wird, das du schieben, ziehen oder anheben kannst."
      },
      {
        "name": "Steinhärte",
        "beschreibung": "Wenn du Schaden erleidest, kannst du als Reaktion einen W12 werfen. Füge deinen Konstitutionsmodifikator hinzu und ziehe die Summe vom erlittenen Schaden ab. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Angeborenes Talent: Segen der Berge",
        "beschreibung": "Die Zeichen auf deinem Körper zeigen Segen durch einen Berggeist und verleihen dir Gebirgsmagie und magische Widerstandsfähigkeit. Du erhältst Übung in Weisheit (Religion). Wenn du bereits Übung hast, erhältst du Expertise. Du erlernst den Zaubertrick Erde formen. Du erlernst außerdem den Zauber Erdrütteln. Du kannst diesen Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Wenn du einen Rettungswurf gegen einen magischen Effekt machst, darfst du den Würfelwurf wiederholen. Du kannst dies tun, nachdem du den Wurf gesehen hast, aber bevor du das Ergebnis kennst. Du kannst diese Fähigkeit nach einer langen Rast wieder einsetzen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Grauzwerge (Rasse: Hockenstärke)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/grauzwerge/charaktere.png",
    "beschreibung": [
      "Psionische Unterreichzwerge · Befreite der Aberrationen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 36 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Zwergische Unverwüstlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen Gifte im Vorteil und besitzt Resistenz gegen Giftschaden."
      },
      {
        "name": "Zwergisches Kampftraining",
        "beschreibung": "Du bist geübt im Umgang mit Streitäxten, Beilen, leichten Hämmern und Kriegshämmern."
      },
      {
        "name": "Handwerkliches Geschick",
        "beschreibung": "Du bist geübt mit dem Werkzeug eines der folgenden Berufe (deine Wahl): Braumeister, Schmied oder Steinmetz."
      },
      {
        "name": "Steingespür",
        "beschreibung": "Bei Intelligenz-(Geschichte)-Würfen zur Herkunft von Steinarbeiten wirst du als geübt angesehen und addierst deinen doppelten Übungsbonus."
      },
      {
        "name": "Grauzwerg-Magie",
        "beschreibung": "Stufe 3: Vergrößern/Verkleinern auf dich selbst 1×/langer Rast (keine Materialkomponenten, oder mit Zauberplatz). Stufe 5: Unsichtbarkeit auf dich selbst 1×/langer Rast. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Psionische Ausdauer",
        "beschreibung": "Du bist bei Rettungswürfen gegen die Zustände Bezaubert und Betäubt sowie zu deren Aufhebung bei dir selbst im Vorteil."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Grauzwerge (Rasse: Meister der Grauzwerg-Magie)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/grauzwerge/charaktere.png",
    "beschreibung": [
      "Psionische Unterreichzwerge · Befreite der Aberrationen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Meister der Grauzwerg-Magie."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 36 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Zwergische Unverwüstlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen Gifte im Vorteil und besitzt Resistenz gegen Giftschaden."
      },
      {
        "name": "Zwergisches Kampftraining",
        "beschreibung": "Du bist geübt im Umgang mit Streitäxten, Beilen, leichten Hämmern und Kriegshämmern."
      },
      {
        "name": "Handwerkliches Geschick",
        "beschreibung": "Du bist geübt mit dem Werkzeug eines der folgenden Berufe (deine Wahl): Braumeister, Schmied oder Steinmetz."
      },
      {
        "name": "Steingespür",
        "beschreibung": "Bei Intelligenz-(Geschichte)-Würfen zur Herkunft von Steinarbeiten wirst du als geübt angesehen und addierst deinen doppelten Übungsbonus."
      },
      {
        "name": "Grauzwerg-Magie",
        "beschreibung": "Stufe 3: Vergrößern/Verkleinern auf dich selbst 1×/langer Rast (keine Materialkomponenten, oder mit Zauberplatz). Stufe 5: Unsichtbarkeit auf dich selbst 1×/langer Rast. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Psionische Ausdauer",
        "beschreibung": "Du bist bei Rettungswürfen gegen die Zustände Bezaubert und Betäubt sowie zu deren Aufhebung bei dir selbst im Vorteil."
      },
      {
        "name": "Angeborenes Talent: Meister der Grauzwerg-Magie",
        "beschreibung": "Du hast die angeborene Fähigkeit deiner Vorfahren gemeistert. Du erhältst zusätzliche Anwendungen für dein Merkmal Grauzwerg-Magie. Du kannst Zauber mit diesem Merkmal jeweils so oft wirken, wie es deinem Übungsbonus entspricht, und du erhältst alle verbrauchten Aufladungen beim Beenden einer kurzen Rast zurück. Zusätzlich lernst du die Zauber Befehl und Zorniges Niederstrecken. Du kannst diese wie deine anderen Zauber des Merkmals Grauzwerg-Magie wirken."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Grauzwerge (Rasse: Zwergische Tapferkeit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/grauzwerge/charaktere.png",
    "beschreibung": [
      "Psionische Unterreichzwerge · Befreite der Aberrationen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Zwergische Tapferkeit."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 36 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Zwergische Unverwüstlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen Gifte im Vorteil und besitzt Resistenz gegen Giftschaden."
      },
      {
        "name": "Zwergisches Kampftraining",
        "beschreibung": "Du bist geübt im Umgang mit Streitäxten, Beilen, leichten Hämmern und Kriegshämmern."
      },
      {
        "name": "Handwerkliches Geschick",
        "beschreibung": "Du bist geübt mit dem Werkzeug eines der folgenden Berufe (deine Wahl): Braumeister, Schmied oder Steinmetz."
      },
      {
        "name": "Steingespür",
        "beschreibung": "Bei Intelligenz-(Geschichte)-Würfen zur Herkunft von Steinarbeiten wirst du als geübt angesehen und addierst deinen doppelten Übungsbonus."
      },
      {
        "name": "Grauzwerg-Magie",
        "beschreibung": "Stufe 3: Vergrößern/Verkleinern auf dich selbst 1×/langer Rast (keine Materialkomponenten, oder mit Zauberplatz). Stufe 5: Unsichtbarkeit auf dich selbst 1×/langer Rast. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Psionische Ausdauer",
        "beschreibung": "Du bist bei Rettungswürfen gegen die Zustände Bezaubert und Betäubt sowie zu deren Aufhebung bei dir selbst im Vorteil."
      },
      {
        "name": "Angeborenes Talent: Zwergische Tapferkeit",
        "beschreibung": "Zwergenhelden-Blut: Vorteil auf Todesrettungswürfe, erhöhtes TP-Maximum und Selbstheilung mit Trefferwürfeln beim Ausweichen. Du hast einen Vorteil bei Todesrettungswürfen. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Immer wenn du im Kampf die Aktion Ausweichen ausführst, kannst du einen oder mehrere Trefferwürfel benutzen, um dich zu heilen. Wirf den Würfel, addiere deinen Konstitutionsmodifikator und erhalte eine Anzahl von Trefferpunkten zurück, die der Gesamtzahl entsprechen (mindestens 1)."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Grottenschrate (Rasse: Brutale Gewalt)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/grottenschrate/charaktere.png",
    "beschreibung": [
      "Riesen der Schatten · Erben des Feenwild",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Brutale Gewalt."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du bist bei Rettungswürfen gegen den Bezaubert-Zustand sowie zu dessen Aufhebung bei dir selbst im Vorteil."
      },
      {
        "name": "Lange Gliedmaßen",
        "beschreibung": "Wenn du in einem Zug einen Nahkampfangriff ausführst, beträgt deine Reichweite dabei 1,5 m mehr als sonst."
      },
      {
        "name": "Starker Körperbau",
        "beschreibung": "Du zählst als eine Größenkategorie größer für die Bestimmung deiner Traglast sowie des Gewichts, das du schieben, ziehen oder anheben kannst."
      },
      {
        "name": "Unauffällig",
        "beschreibung": "Du bist in der Heimlichkeits-Fertigkeit geübt. Außerdem kannst du dich durch Bereiche bewegen und in ihnen aufhalten, in die eigentlich höchstens eine kleine Kreatur passt, ohne quetschen zu müssen."
      },
      {
        "name": "Überraschungsangriff",
        "beschreibung": "Wenn du eine Kreatur mit einem Angriffswurf triffst, die im aktuellen Kampf noch nicht am Zug war, erleidet sie zusätzlich 2W6 Schaden."
      },
      {
        "name": "Angeborenes Talent: Brutale Gewalt",
        "beschreibung": "Deine Stärke auf dem Schlachtfeld ist in ihrer ursprünglichen Wildheit unübertroffen. Deine Reichweite für kritische Treffer erhöht sich um 1. Wenn du einen Angriff mit einer Nahkampfwaffe gegen eine Kreatur ausführst, kannst du dich entscheiden, dies mit Vorteil zu tun. Wenn der Angriff trifft, wirfst du einen der Schadenswürfel der Waffe ein weiteres Mal und addierst ihn als zusätzlichen Schaden. Du kannst diese Fähigkeit einmal pro lange Rast einsetzen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Grottenschrate (Rasse: Greifende Glieder)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/grottenschrate/charaktere.png",
    "beschreibung": [
      "Riesen der Schatten · Erben des Feenwild",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Greifende Glieder."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du bist bei Rettungswürfen gegen den Bezaubert-Zustand sowie zu dessen Aufhebung bei dir selbst im Vorteil."
      },
      {
        "name": "Lange Gliedmaßen",
        "beschreibung": "Wenn du in einem Zug einen Nahkampfangriff ausführst, beträgt deine Reichweite dabei 1,5 m mehr als sonst."
      },
      {
        "name": "Starker Körperbau",
        "beschreibung": "Du zählst als eine Größenkategorie größer für die Bestimmung deiner Traglast sowie des Gewichts, das du schieben, ziehen oder anheben kannst."
      },
      {
        "name": "Unauffällig",
        "beschreibung": "Du bist in der Heimlichkeits-Fertigkeit geübt. Außerdem kannst du dich durch Bereiche bewegen und in ihnen aufhalten, in die eigentlich höchstens eine kleine Kreatur passt, ohne quetschen zu müssen."
      },
      {
        "name": "Überraschungsangriff",
        "beschreibung": "Wenn du eine Kreatur mit einem Angriffswurf triffst, die im aktuellen Kampf noch nicht am Zug war, erleidet sie zusätzlich 2W6 Schaden."
      },
      {
        "name": "Angeborenes Talent: Greifende Glieder",
        "beschreibung": "Deine Gliedmaßen sind so gebaut, dass sie dir beim Greifen helfen. Du hast einen Vorteil, wenn du würfelst, um eine Kreatur zu packen, und Kreaturen haben einen Nachteil, wenn sie würfeln, um deinen Griffen zu entkommen. Du kannst bis zu zwei Kreaturen auf einmal festhalten. Wenn du versuchst, eine dritte zu greifen, werden die beiden anderen befreit. Du kannst deinen Übungsbonus zum Schadenswurf gegen jede Kreatur addieren, die du im Griff hast."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Grottenschrate (Rasse: Kriegsgeboren)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/grottenschrate/charaktere.png",
    "beschreibung": [
      "Riesen der Schatten · Erben des Feenwild",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Kriegsgeboren."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du bist bei Rettungswürfen gegen den Bezaubert-Zustand sowie zu dessen Aufhebung bei dir selbst im Vorteil."
      },
      {
        "name": "Lange Gliedmaßen",
        "beschreibung": "Wenn du in einem Zug einen Nahkampfangriff ausführst, beträgt deine Reichweite dabei 1,5 m mehr als sonst."
      },
      {
        "name": "Starker Körperbau",
        "beschreibung": "Du zählst als eine Größenkategorie größer für die Bestimmung deiner Traglast sowie des Gewichts, das du schieben, ziehen oder anheben kannst."
      },
      {
        "name": "Unauffällig",
        "beschreibung": "Du bist in der Heimlichkeits-Fertigkeit geübt. Außerdem kannst du dich durch Bereiche bewegen und in ihnen aufhalten, in die eigentlich höchstens eine kleine Kreatur passt, ohne quetschen zu müssen."
      },
      {
        "name": "Überraschungsangriff",
        "beschreibung": "Wenn du eine Kreatur mit einem Angriffswurf triffst, die im aktuellen Kampf noch nicht am Zug war, erleidet sie zusätzlich 2W6 Schaden."
      },
      {
        "name": "Angeborenes Talent: Kriegsgeboren",
        "beschreibung": "Du wurdest während eines Feldzugs deines Heeres geboren und hast viele Dinge durch das Beobachten gelernt. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Du erhältst Übung in einer Waffe, einem Werkzeug und lernst eine Sprache deiner Wahl. Du erhältst einen Vorteil bei Rettungswürfen gegen Verzauberung oder Verängstigung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Halbelfen (Rasse: Elfische Treffsicherheit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/halbelfen/charaktere.png",
    "beschreibung": [
      "Zwischen den Welten · Diplomaten zweier Erbe",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Elfische Treffsicherheit."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du bist bei Rettungswürfen gegen Bezauberungen im Vorteil und immun gegen magischen Schlaf."
      },
      {
        "name": "Vielseitigkeit",
        "beschreibung": "Du bist in 2 Fertigkeiten deiner Wahl geübt."
      },
      {
        "name": "Angeborenes Talent: Elfische Treffsicherheit",
        "beschreibung": "Die legendäre Treffsicherheit der Elfen mit Präzisionsangriffen ist nun auch dein. Jedes Mal, wenn du mit einem Angriff triffst, der kein kritischer Treffer ist, erhöht sich deine Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis du einen kritischen Treffer landest, einen Angriff verfehlst oder den Kampf betrittst oder verlässt; danach wird er auf deinen Standardwert zurückgesetzt. Immer wenn du bei einem Angriffswurf einen Vorteil hast, kannst du einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Halbelfen (Rasse: Freund der Welt)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/halbelfen/charaktere.png",
    "beschreibung": [
      "Zwischen den Welten · Diplomaten zweier Erbe",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Freund der Welt."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du bist bei Rettungswürfen gegen Bezauberungen im Vorteil und immun gegen magischen Schlaf."
      },
      {
        "name": "Vielseitigkeit",
        "beschreibung": "Du bist in 2 Fertigkeiten deiner Wahl geübt."
      },
      {
        "name": "Angeborenes Talent: Freund der Welt",
        "beschreibung": "Durch deine menschliche und elfische Abstammung bist du bei den meisten Mitgliedern der Gesellschaft sehr beliebt. Du erlernst den Zaubertrick Freundschaft. Charisma ist dein Attributsmodifikator für diesen Zauberspruch. Du lernst eine Sprache deiner Wahl. Du erhältst Übung auf Charisma (Täuschen) und Charisma (Überzeugen). Wenn du bereits Übung in diesen Fertigkeiten hast, erhältst du Expertise. Du erhältst einen Vorteil bei Attributswürfen auf Charisma, mit jedem, der dir gegenüber nicht feindlich gesinnt ist, sich vor dir in Acht nimmt, oder Angst vor dir hat."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Halbelfen (Rasse: Wunderkind)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/halbelfen/charaktere.png",
    "beschreibung": [
      "Zwischen den Welten · Diplomaten zweier Erbe",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Wunderkind."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du bist bei Rettungswürfen gegen Bezauberungen im Vorteil und immun gegen magischen Schlaf."
      },
      {
        "name": "Vielseitigkeit",
        "beschreibung": "Du bist in 2 Fertigkeiten deiner Wahl geübt."
      },
      {
        "name": "Angeborenes Talent: Wunderkind",
        "beschreibung": "Lernbegabung: neue Fertigkeit, Werkzeug und Sprache, Expertise in einer geübten Fertigkeit und 4 magische Einstimmungen. Du erhältst Übung in einer Fertigkeit deiner Wahl, einer Werkzeugfertigkeit deiner Wahl und fließende Kenntnisse in einer Sprache deiner Wahl. Wähle eine Fertigkeit, in der du geübt bist. Du erlangst Expertise in dieser Fertigkeit. Du kannst dich auf bis zu 4 magische Gegenstände einstimmen, anstatt der normalen 3."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Halborks (Rasse: Körper aus Stahl)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/halborks/charaktere.png",
    "beschreibung": [
      "Gezeichnete des Blutes · Stärke zweier Erbe",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Körper aus Stahl."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Bedrohlich",
        "beschreibung": "Du bist in der Fertigkeit Einschüchtern geübt."
      },
      {
        "name": "Durchhaltevermögen",
        "beschreibung": "Wenn deine Trefferpunkte auf 0 fallen und du nicht stirbst, kannst du sie auf 1 setzen. 1×/langer Rast."
      },
      {
        "name": "Wilde Angriffe",
        "beschreibung": "Erzielst du einen kritischen Treffer mit einer Nahkampfwaffe, kannst du einen der Schadenswürfel der Waffe erneut würfeln und das Ergebnis zum Zusatzschaden des kritischen Treffers addieren."
      },
      {
        "name": "Angeborenes Talent: Körper aus Stahl",
        "beschreibung": "Deine orkische Blutlinie macht dich widerstandsfähiger als den durchschnittlichen Humanoiden. Du erhältst einen Vorteil bei Konstitutionsrettungswürfen. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Wenn ein Angreifer, den du sehen kannst, dich mit einem Angriff trifft, kannst du deine Reaktion nutzen, um den Hieb-, Stich- und Wuchtschaden dieses Angriffs zu halbieren."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Halborks (Rasse: Orkische Macht)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/halborks/charaktere.png",
    "beschreibung": [
      "Gezeichnete des Blutes · Stärke zweier Erbe",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Orkische Macht."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Bedrohlich",
        "beschreibung": "Du bist in der Fertigkeit Einschüchtern geübt."
      },
      {
        "name": "Durchhaltevermögen",
        "beschreibung": "Wenn deine Trefferpunkte auf 0 fallen und du nicht stirbst, kannst du sie auf 1 setzen. 1×/langer Rast."
      },
      {
        "name": "Wilde Angriffe",
        "beschreibung": "Erzielst du einen kritischen Treffer mit einer Nahkampfwaffe, kannst du einen der Schadenswürfel der Waffe erneut würfeln und das Ergebnis zum Zusatzschaden des kritischen Treffers addieren."
      },
      {
        "name": "Angeborenes Talent: Orkische Macht",
        "beschreibung": "Deine innere Wut brennt unermüdlich. Wenn du mit einem Angriff mit einer einfachen oder einer Kriegswaffe triffst, kannst du einen der Schadenswürfel der Waffe ein weiteres Mal werfen und ihn als zusätzlichen Schaden hinzufügen. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Wenn du eine Kreatur mit einem Waffenangriff triffst, erhältst du temporäre Trefferpunkte in Höhe deines Übungsbonus. Unmittelbar nachdem du deine Eigenschaft Durchhaltevermögen eingesetzt hast, kannst du deine Reaktion nutzen, um einen Waffenangriff durchzuführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Halborks (Rasse: Wunderkind)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/halborks/charaktere.png",
    "beschreibung": [
      "Gezeichnete des Blutes · Stärke zweier Erbe",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Wunderkind."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Bedrohlich",
        "beschreibung": "Du bist in der Fertigkeit Einschüchtern geübt."
      },
      {
        "name": "Durchhaltevermögen",
        "beschreibung": "Wenn deine Trefferpunkte auf 0 fallen und du nicht stirbst, kannst du sie auf 1 setzen. 1×/langer Rast."
      },
      {
        "name": "Wilde Angriffe",
        "beschreibung": "Erzielst du einen kritischen Treffer mit einer Nahkampfwaffe, kannst du einen der Schadenswürfel der Waffe erneut würfeln und das Ergebnis zum Zusatzschaden des kritischen Treffers addieren."
      },
      {
        "name": "Angeborenes Talent: Wunderkind",
        "beschreibung": "Lernbegabung: neue Fertigkeit, Werkzeug und Sprache, Expertise in einer geübten Fertigkeit und 4 magische Einstimmungen. Du erhältst Übung in einer Fertigkeit deiner Wahl, einer Werkzeugfertigkeit deiner Wahl und fließende Kenntnisse in einer Sprache deiner Wahl. Wähle eine Fertigkeit, in der du geübt bist. Du erlangst Expertise in dieser Fertigkeit. Du kannst dich auf bis zu 4 magische Gegenstände einstimmen, anstatt der normalen 3."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Harengons (Rasse: Fluchtreflex)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Beliebige Gesinnung",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/harengons/charaktere.png",
    "beschreibung": [
      "Hasenartige Wanderer · Flinke Glücksbringer",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Fluchtreflex."
    ],
    "besonderheiten": [
      {
        "name": "Gute Beinarbeit",
        "beschreibung": "Wenn du bei einem Geschicklichkeitsrettungswurf scheiterst, kannst du als Reaktion 1W4 würfeln und das Ergebnis zum Rettungswurf addieren. Nicht einsetzbar wenn du liegst oder deine Bewegungsrate 0 ist."
      },
      {
        "name": "Hasenelan",
        "beschreibung": "Du kannst deinen Initiativewürfen deinen Übungsbonus hinzufügen."
      },
      {
        "name": "Hasensinne",
        "beschreibung": "Du bist in der Wahrnehmungs-Fertigkeit geübt."
      },
      {
        "name": "Hasensprung",
        "beschreibung": "Als Bonusaktion springst du Übungsbonus × 1,5 m, ohne Gelegenheitsangriffe zu provozieren. Anwendungen pro langer Rast entsprechen deinem Übungsbonus. Nur einsetzbar wenn Bewegungsrate > 0."
      },
      {
        "name": "Angeborenes Talent: Fluchtreflex",
        "beschreibung": "Du bist besonders flink in Situationen, die dein Leben bedrohen. Wenn du für die Initiative würfelst, ohne eine Nutzung von Hasensprung zu haben, erhältst du einen Einsatz dieser Eigenschaft zurück. Wenn du die Hälfte deiner maximalen Trefferpunkte oder weniger hast, erhöht sich deine Bewegungsrate um die Hälfte deiner maximalen Bewegungsrate. Wenn sich eine Kreatur in einem Umkreis von 1,5 m um dich bewegt, kannst du deine Reaktion nutzen und einen Einsatz deiner Eigenschaft Hasensprung verwenden, um bis zu einer Anzahl von Metern zu springen, die dem Fünffachen deines Übungsbonus entspricht, ohne Gelegenheitsangriffe zu provozieren. Du kannst diese Eigenschaft nur verwenden, wenn du noch Bewegungsrate übrig hast."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Harengons (Rasse: Freudiger Hüpfer)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Beliebige Gesinnung",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/harengons/charaktere.png",
    "beschreibung": [
      "Hasenartige Wanderer · Flinke Glücksbringer",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Freudiger Hüpfer."
    ],
    "besonderheiten": [
      {
        "name": "Gute Beinarbeit",
        "beschreibung": "Wenn du bei einem Geschicklichkeitsrettungswurf scheiterst, kannst du als Reaktion 1W4 würfeln und das Ergebnis zum Rettungswurf addieren. Nicht einsetzbar wenn du liegst oder deine Bewegungsrate 0 ist."
      },
      {
        "name": "Hasenelan",
        "beschreibung": "Du kannst deinen Initiativewürfen deinen Übungsbonus hinzufügen."
      },
      {
        "name": "Hasensinne",
        "beschreibung": "Du bist in der Wahrnehmungs-Fertigkeit geübt."
      },
      {
        "name": "Hasensprung",
        "beschreibung": "Als Bonusaktion springst du Übungsbonus × 1,5 m, ohne Gelegenheitsangriffe zu provozieren. Anwendungen pro langer Rast entsprechen deinem Übungsbonus. Nur einsetzbar wenn Bewegungsrate > 0."
      },
      {
        "name": "Angeborenes Talent: Freudiger Hüpfer",
        "beschreibung": "Wenn du ungewöhnlich schnell handelst, erhältst du besondere Vorteile. Wenn du die Initiative würfelst, kannst du einen Wurf von 9 oder weniger als 10 behandeln. Wenn du die Initiative würfelst, darfst du deine Reaktion nutzen, um dich bis zu deiner Schrittgeschwindigkeit zu bewegen und dann eine Aktion oder eine Bonusaktion durchzuführen. Wenn du einen Zauber wirkst, muss es ein Zauber mit einer Wirkzeit von 1 Aktion sein, der nur auf eine Kreatur zielt. Wenn du auf eine feindliche Kreatur zielst, muss das Ziel eine niedrigere Initiative haben als du. Wenn du dich auf diese Weise bewegst, provozierst du keine Gelegenheitsangriffe. Du kannst dies so oft tun, wie es deinem Übungsbonus entspricht; danach musst du eine lange Rast einlegen, bevor du es wieder tun kannst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Harengons (Rasse: Hockenstärke)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Beliebige Gesinnung",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/harengons/charaktere.png",
    "beschreibung": [
      "Hasenartige Wanderer · Flinke Glücksbringer",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Gute Beinarbeit",
        "beschreibung": "Wenn du bei einem Geschicklichkeitsrettungswurf scheiterst, kannst du als Reaktion 1W4 würfeln und das Ergebnis zum Rettungswurf addieren. Nicht einsetzbar wenn du liegst oder deine Bewegungsrate 0 ist."
      },
      {
        "name": "Hasenelan",
        "beschreibung": "Du kannst deinen Initiativewürfen deinen Übungsbonus hinzufügen."
      },
      {
        "name": "Hasensinne",
        "beschreibung": "Du bist in der Wahrnehmungs-Fertigkeit geübt."
      },
      {
        "name": "Hasensprung",
        "beschreibung": "Als Bonusaktion springst du Übungsbonus × 1,5 m, ohne Gelegenheitsangriffe zu provozieren. Anwendungen pro langer Rast entsprechen deinem Übungsbonus. Nur einsetzbar wenn Bewegungsrate > 0."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Hexblute (Rasse: Meister der Hexmagie)",
    "art": "Feenwesen",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/hexblute/charaktere.png",
    "beschreibung": [
      "Träger des Pakts · Erben der Vettelmagie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Meister der Hexmagie."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Erbe",
        "beschreibung": "Du behältst alle Fertigkeiten, in denen deine vorherige Rasse geübt ist, sowie besondere Bewegungsraten (Klettern, Fliegen, Schwimmen)."
      },
      {
        "name": "Untote Natur",
        "beschreibung": "Du brauchst nicht zu atmen."
      },
      {
        "name": "Gruselzeichen",
        "beschreibung": "Als Bonusaktion entfernst du dir schmerzlos eine Haarsträhne, einen Fingernagel oder einen Zahn. Das Zeichen ist bis zur nächsten langen Rast magisch aufgeladen. Trägerin des Zeichens kann Folgendes empfangen: Telepathische Botschaft (bis 25 Wörter, bis 16 km) und Fernsicht (1 Minute Trance, Hören/Sehen am Ort des Zeichens bis 16 km). Nach der Fernsicht wird das Zeichen zerstört. 1×/langer Rast."
      },
      {
        "name": "Hex-Magie",
        "beschreibung": "Du kannst Selbstverkleidung und Verwünschen wirken — je 1×/langer Rast mit diesem Merkmal, oder mit Zauberplätzen. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Angeborenes Talent: Meister der Hexmagie",
        "beschreibung": "Durch die besonders starke Paktmagie deines Ursprungs hast du ein Talent für potentere Flüche. Du erhältst den Zaubertrick Gehässiger Spott. Du kannst diesen nach Belieben wirken. Du erlernst den Zauber Zone der Wahrheit. Du kannst diesen einmal pro langer Rast mit diesem Merkmal benutzen. Wenn du den Zauber Verwünschen wirkst, erleidet das Ziel statt 1W6 nekrotischem Schaden 1W4 nekrotischen Schaden jedes Mal, wenn die betroffene Kreatur Schaden durch dich oder einen deiner Mitstreiter erleidet. Wenn du dieses Merkmal einsetzt, hast du für die Dauer des Zaubers Nachteil auf Konstitutionswürfe zur Aufrechterhaltung der Konzentration und kannst keine neue Kreatur verwünschen, wenn das Ziel auf 0 Trefferpunkte fällt. Ab Stufe 8 erhöht sich der Schaden auf 1W6."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Hexblute (Rasse: Meister des Hexenkessels)",
    "art": "Feenwesen",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/hexblute/charaktere.png",
    "beschreibung": [
      "Träger des Pakts · Erben der Vettelmagie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Meister des Hexenkessels."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Erbe",
        "beschreibung": "Du behältst alle Fertigkeiten, in denen deine vorherige Rasse geübt ist, sowie besondere Bewegungsraten (Klettern, Fliegen, Schwimmen)."
      },
      {
        "name": "Untote Natur",
        "beschreibung": "Du brauchst nicht zu atmen."
      },
      {
        "name": "Gruselzeichen",
        "beschreibung": "Als Bonusaktion entfernst du dir schmerzlos eine Haarsträhne, einen Fingernagel oder einen Zahn. Das Zeichen ist bis zur nächsten langen Rast magisch aufgeladen. Trägerin des Zeichens kann Folgendes empfangen: Telepathische Botschaft (bis 25 Wörter, bis 16 km) und Fernsicht (1 Minute Trance, Hören/Sehen am Ort des Zeichens bis 16 km). Nach der Fernsicht wird das Zeichen zerstört. 1×/langer Rast."
      },
      {
        "name": "Hex-Magie",
        "beschreibung": "Du kannst Selbstverkleidung und Verwünschen wirken — je 1×/langer Rast mit diesem Merkmal, oder mit Zauberplätzen. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Angeborenes Talent: Meister des Hexenkessels",
        "beschreibung": "Die Vettelmagie in deinen Adern stammt von einer besonders Alchemie-interessierten Vettel. Wann immer du willst, kannst du als Aktion einen silbernen Hexenkessel innerhalb von 1,5 m an einem freien Ort beschwören, indem du 1000 Silbermünzen (100 Goldmünzen) aufgibst, um sie zu einem Kessel zu formen. Der Kessel bleibt 10 Stunden bestehen oder bis du ihn per Bonusaktion verschwinden lässt. Du erhältst Übung in Alchemistenlabor (Bomben), Giftmischerausrüstung (Gifte) oder Kräuterkundeausrüstung (Tränke) — Wahl beim Erlernen. Bist du bereits geübt, erhältst du Expertise. Dein beschworener Hexenkessel gilt für alle alchemistischen Zwecke als eines dieser Werkzeuge. Wenn du den Hexenkessel beschwörst, beschleunigt sich die Arbeitszeit so, dass du ein Gebräu mit einer Reagenz während einer langen Rast fertigstellen kannst. Dabei bist du aufmerksam und konzentriert und erhältst nur den Effekt einer kurzen Rast. Verfügst du über Zauberplätze, die bei einer langen Rast wiederhergestellt werden, kannst du Zauberplätze zurückerlangen, deren Gesamtgrad der Hälfte deines Charakterlevels (abgerundet) entspricht."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Hexblute (Rasse: Vielseitigkeit der Vetteln)",
    "art": "Feenwesen",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/hexblute/charaktere.png",
    "beschreibung": [
      "Träger des Pakts · Erben der Vettelmagie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Vielseitigkeit der Vetteln."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Erbe",
        "beschreibung": "Du behältst alle Fertigkeiten, in denen deine vorherige Rasse geübt ist, sowie besondere Bewegungsraten (Klettern, Fliegen, Schwimmen)."
      },
      {
        "name": "Untote Natur",
        "beschreibung": "Du brauchst nicht zu atmen."
      },
      {
        "name": "Gruselzeichen",
        "beschreibung": "Als Bonusaktion entfernst du dir schmerzlos eine Haarsträhne, einen Fingernagel oder einen Zahn. Das Zeichen ist bis zur nächsten langen Rast magisch aufgeladen. Trägerin des Zeichens kann Folgendes empfangen: Telepathische Botschaft (bis 25 Wörter, bis 16 km) und Fernsicht (1 Minute Trance, Hören/Sehen am Ort des Zeichens bis 16 km). Nach der Fernsicht wird das Zeichen zerstört. 1×/langer Rast."
      },
      {
        "name": "Hex-Magie",
        "beschreibung": "Du kannst Selbstverkleidung und Verwünschen wirken — je 1×/langer Rast mit diesem Merkmal, oder mit Zauberplätzen. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Angeborenes Talent: Vielseitigkeit der Vetteln",
        "beschreibung": "Wähle nach jeder kurzen Rast eines von drei körperlichen Vetteln-Merkmalen: Haar-Fesselung, Nagel-Blutung oder Zahn-Furcht. Nach jeder kurzen Rast kannst du dir eines der folgenden Merkmale aussuchen. Du kannst die gewählte Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; alle verbrauchten Einsätze kehren nach einer langen Rast zurück. Haare: Du verzauberst deine Haare, um sie sehr lang wachsen zu lassen. Als Aktion kannst du versuchen, eine Kreatur in 1,5 m Reichweite mit deinen Haaren zu fesseln. Die Kreatur muss einen Stärkerettungswurf bestehen (SG = 8 + Übungsbonus + gewählter Attributsmodifikator) oder gilt als festgesetzt, bis der Effekt endet. Eine festgesetzte Kreatur kann ihre Aktion nutzen, um die Haarschlingen anzugreifen (RK 0, trifft automatisch). Der Effekt endet, wenn deine Trefferpunkte oder die der Haarschlingen (= halbes TP-Maximum, abgerundet) auf 0 fallen oder du stirbst. Fingernägel: Du verzauberst deine Fingernägel, um sie messerscharf werden zu lassen. Als Aktion kannst du einen waffenlosen Angriff mit deinen Fingernägeln ausführen. Bei einem Treffer verursachst du 2W6 Stichschaden und die Kreatur erleidet den Zustand blutend: Sie erleidet zu Beginn jedes ihrer Züge 1W4 Stichschaden und muss am Ende jedes Zuges einen Konstitutionsrettungswurf bestehen (SG = 8 + Übungsbonus + gewählter Attributsmodifikator), um die Blutung zu stillen. Zähne: Du verzauberst deine Zähne für einen gefährlichen Biss. Deine Zähne sind eine natürliche Zweitwaffe, in deren Umgang du geübt bist. Wenn du in deinem Zug die Angriffsaktion ausführst, kannst du als Bonusaktion mit deinen Zähnen gegen dasselbe Ziel angreifen (Angriffs- und Schadenswürfe + Stärke oder Geschicklichkeitsmodifikator, Wahl beim Erwerb). Bei einem Treffer verursachst du 1W6 Stichschaden, und die betroffene Kreatur muss einen Weisheitsrettungswurf bestehen (SG = 8 + Übungsbonus + gewählter Attributsmodifikator) oder wird verängstigt. Die Anzahl verängstigter Ziele skaliert: auf Stufe 6 ein weiteres Ziel in 3 m, auf Stufe 11 zwei weitere, auf Stufe 16 bis zu 4; alle zusätzlichen Ziele werden zufällig ausgewählt."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Hochelfen (Rasse: Elfische Treffsicherheit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/hochelfen/charaktere.png",
    "beschreibung": [
      "Hüter alten Wissens · Meister der Arkankunst",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Elfische Treffsicherheit."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Elfische Waffenvertrautheit",
        "beschreibung": "Du bist geübt im Umgang mit Langschwertern, Kurzschwertern, Langbögen und Kurzbögen."
      },
      {
        "name": "Zaubertrick",
        "beschreibung": "Du beherrschst einen Zaubertrick deiner Wahl aus der Zauberliste des Magiers. Zaubermerkmal: Intelligenz."
      },
      {
        "name": "Angeborenes Talent: Elfische Treffsicherheit",
        "beschreibung": "Die legendäre Treffsicherheit der Elfen mit Präzisionsangriffen ist nun auch dein. Jedes Mal, wenn du mit einem Angriff triffst, der kein kritischer Treffer ist, erhöht sich deine Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis du einen kritischen Treffer landest, einen Angriff verfehlst oder den Kampf betrittst oder verlässt; danach wird er auf deinen Standardwert zurückgesetzt. Immer wenn du bei einem Angriffswurf einen Vorteil hast, kannst du einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Hochelfen (Rasse: Feenschreiten)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/hochelfen/charaktere.png",
    "beschreibung": [
      "Hüter alten Wissens · Meister der Arkankunst",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Feenschreiten."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Elfische Waffenvertrautheit",
        "beschreibung": "Du bist geübt im Umgang mit Langschwertern, Kurzschwertern, Langbögen und Kurzbögen."
      },
      {
        "name": "Zaubertrick",
        "beschreibung": "Du beherrschst einen Zaubertrick deiner Wahl aus der Zauberliste des Magiers. Zaubermerkmal: Intelligenz."
      },
      {
        "name": "Angeborenes Talent: Feenschreiten",
        "beschreibung": "Dein Studium der Hochelfenkunde hat dir Feen-Kräfte verliehen und erlaubt dir, kurzzeitig durch die Feenwelt zu schreiten. Du lernst, Sylvanisch zu sprechen, zu lesen und zu schreiben. Wenn du bereits Sylvanisch kennst, kannst du eine andere Sprache lernen. Du erlernst einen der folgenden Zaubertricks: Flammen erzeugen, Kältestrahl, Blitzköder oder Kalte Hand. Dein Attributsmodifikator für den Zaubertrick ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst. Als Bonusaktion kannst du dich magisch bis zu 9 m weit in ein unbesetztes Feld teleportieren, das du sehen kannst. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht, und du erhältst alle verbrauchten Einsätze zurück, wenn du eine lange Rast beendest."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Hochelfen (Rasse: Hochelfenmagie)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/hochelfen/charaktere.png",
    "beschreibung": [
      "Hüter alten Wissens · Meister der Arkankunst",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hochelfenmagie."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Elfische Waffenvertrautheit",
        "beschreibung": "Du bist geübt im Umgang mit Langschwertern, Kurzschwertern, Langbögen und Kurzbögen."
      },
      {
        "name": "Zaubertrick",
        "beschreibung": "Du beherrschst einen Zaubertrick deiner Wahl aus der Zauberliste des Magiers. Zaubermerkmal: Intelligenz."
      },
      {
        "name": "Angeborenes Talent: Hochelfenmagie",
        "beschreibung": "Dein Studium der hochelfischen Weissagung hat dir magische Kräfte verliehen, die nur wenige andere Elfen besitzen. Du erlernst die Zauber Identifizieren und Sprachen verstehen, die du nach Belieben wirken kannst. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Wenn du einen Zauber wirkst, der Schaden verursacht, kannst du deinen Übungsbonus auf den Schaden addieren."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Hügelzwerge (Rasse: Hockenstärke)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/hügelzwerge/charaktere.png",
    "beschreibung": [
      "Gütige Handwerker · Hüter des Heilwissens",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Zwergische Unverwüstlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen Gifte im Vorteil und besitzt Resistenz gegen Giftschaden."
      },
      {
        "name": "Zwergisches Kampftraining",
        "beschreibung": "Du bist geübt im Umgang mit Streitäxten, Beilen, leichten Hämmern und Kriegshämmern."
      },
      {
        "name": "Handwerkliches Geschick",
        "beschreibung": "Du bist geübt mit dem Werkzeug eines der folgenden Berufe (deine Wahl): Braumeister, Schmied oder Steinmetz."
      },
      {
        "name": "Steingespür",
        "beschreibung": "Bei Intelligenz-(Geschichte)-Würfen zur Herkunft von Steinarbeiten wirst du als geübt angesehen und addierst deinen doppelten Übungsbonus."
      },
      {
        "name": "Zwergische Zähigkeit",
        "beschreibung": "Dein Trefferpunktemaximum erhöht sich um 1 Punkt. Es erhöht sich um 1 weiteren Punkt jedes Mal, wenn du eine Stufe aufsteigst."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Hügelzwerge (Rasse: Weit gereister Freund)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/hügelzwerge/charaktere.png",
    "beschreibung": [
      "Gütige Handwerker · Hüter des Heilwissens",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Weit gereister Freund."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Zwergische Unverwüstlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen Gifte im Vorteil und besitzt Resistenz gegen Giftschaden."
      },
      {
        "name": "Zwergisches Kampftraining",
        "beschreibung": "Du bist geübt im Umgang mit Streitäxten, Beilen, leichten Hämmern und Kriegshämmern."
      },
      {
        "name": "Handwerkliches Geschick",
        "beschreibung": "Du bist geübt mit dem Werkzeug eines der folgenden Berufe (deine Wahl): Braumeister, Schmied oder Steinmetz."
      },
      {
        "name": "Steingespür",
        "beschreibung": "Bei Intelligenz-(Geschichte)-Würfen zur Herkunft von Steinarbeiten wirst du als geübt angesehen und addierst deinen doppelten Übungsbonus."
      },
      {
        "name": "Zwergische Zähigkeit",
        "beschreibung": "Dein Trefferpunktemaximum erhöht sich um 1 Punkt. Es erhöht sich um 1 weiteren Punkt jedes Mal, wenn du eine Stufe aufsteigst."
      },
      {
        "name": "Angeborenes Talent: Weit gereister Freund",
        "beschreibung": "Weltoffen und umgänglich: Überzeugungstalent, verstärkter Freundschaft-Zaubertrick, Nahrung reinigen nach Belieben und Rückzug/Spurten als Bonusaktion. Du erhältst Übung in Charisma (Überzeugen). Wenn du bereits in Überzeugen geübt bist, erhältst du Expertise. Du erlernst den Zaubertrick Freundschaft und kannst ihn nach Belieben wirken. Wenn du ihn wirkst, kannst du dieses Merkmal einsetzen, um die betroffene Kreatur zu einem Charismarettungswurf zu zwingen (SG = 8 + Übungsbonus + Charismamodifikator). Schlägt der Rettungswurf fehl, merkt die Kreatur nicht, dass du Magie eingesetzt hast, und wird nicht feindselig. Du kannst Freundschaft auf diese Weise nur einmal pro lange Rast wirken. Du lernst den Zauber Nahrung und Wasser reinigen und kannst ihn nach Belieben wirken, ohne einen Zauberplatz zu verbrauchen. Du kannst die Aktionen Rückzug und Spurten als Bonusaktion ausführen. Du kannst dieses Merkmal so oft einsetzen, wie es deinem Konstitutionsmodifikator entspricht; alle verbrauchten Aufladungen kehren nach einer langen Rast zurück."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Hügelzwerge (Rasse: Zwergische Tapferkeit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/hügelzwerge/charaktere.png",
    "beschreibung": [
      "Gütige Handwerker · Hüter des Heilwissens",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Zwergische Tapferkeit."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Zwergische Unverwüstlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen Gifte im Vorteil und besitzt Resistenz gegen Giftschaden."
      },
      {
        "name": "Zwergisches Kampftraining",
        "beschreibung": "Du bist geübt im Umgang mit Streitäxten, Beilen, leichten Hämmern und Kriegshämmern."
      },
      {
        "name": "Handwerkliches Geschick",
        "beschreibung": "Du bist geübt mit dem Werkzeug eines der folgenden Berufe (deine Wahl): Braumeister, Schmied oder Steinmetz."
      },
      {
        "name": "Steingespür",
        "beschreibung": "Bei Intelligenz-(Geschichte)-Würfen zur Herkunft von Steinarbeiten wirst du als geübt angesehen und addierst deinen doppelten Übungsbonus."
      },
      {
        "name": "Zwergische Zähigkeit",
        "beschreibung": "Dein Trefferpunktemaximum erhöht sich um 1 Punkt. Es erhöht sich um 1 weiteren Punkt jedes Mal, wenn du eine Stufe aufsteigst."
      },
      {
        "name": "Angeborenes Talent: Zwergische Tapferkeit",
        "beschreibung": "Zwergenhelden-Blut: Vorteil auf Todesrettungswürfe, erhöhtes TP-Maximum und Selbstheilung mit Trefferwürfeln beim Ausweichen. Du hast einen Vorteil bei Todesrettungswürfen. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Immer wenn du im Kampf die Aktion Ausweichen ausführst, kannst du einen oder mehrere Trefferwürfel benutzen, um dich zu heilen. Wirf den Würfel, addiere deinen Konstitutionsmodifikator und erhalte eine Anzahl von Trefferpunkten zurück, die der Gesamtzahl entsprechen (mindestens 1)."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Kenku (Rasse: Fluch des Alten)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/kenku/charaktere.png",
    "beschreibung": [
      "Gedächtnismeister · Vogelwesen ohne Flug",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Fluch des Alten."
    ],
    "besonderheiten": [
      {
        "name": "Expertenduplikation",
        "beschreibung": "Wenn du Schriften oder Kunstwerke kopierst, bist du bei allen Attributswürfen für ein exaktes Duplikat im Vorteil."
      },
      {
        "name": "Kenku-Gedächtnis",
        "beschreibung": "Du bist in 2 Fertigkeiten deiner Wahl geübt. Außerdem kannst du dir bei Attributswürfen mit geübten Fertigkeiten vor dem W20-Wurf einen Vorteil verschaffen. Anwendungen pro langer Rast entsprechen deinem Übungsbonus."
      },
      {
        "name": "Stimmen nachahmen",
        "beschreibung": "Du kannst Geräusche und Stimmen, die du gehört hast, präzise wiedergeben. Erkennung als Imitation: WEI-(Einsicht)-Rettungswurf gegen SG 8 + Übungsbonus + CHA-Modifikator."
      },
      {
        "name": "Angeborenes Talent: Fluch des Alten",
        "beschreibung": "Du hast gelernt, die Macht des alten Wesens zu nutzen, der dein Volk verflucht hat. Du lernst den Zauber Sprachen verstehen und kannst ihn nach Belieben wirken. Außerdem erlernst du Schattenklinge und Hunger von Hadar, die du jeweils einmal wirken kannst, ohne einen Zauberplatz zu verbrauchen. Du erlangst die Fähigkeit, diese beiden Zauber auf diese Weise zu wirken, wieder, wenn du eine lange Rast beendet hast. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst. Zusätzlich erhältst du durch die Magie des Alten eine begrenzte Fähigkeit, den Geist von Kreaturen anzuzapfen. Nachdem du dich 1 Minute lang auf eine Kreatur konzentriert hast (wie bei einem Zauber), muss das Ziel einen Weisheitsrettungswurf ablegen (SG 10 + dein Übungsbonus + dein Charismamodifikator). Bei einem Fehlschlag stiehlst du ihre Stimme und kannst sie benutzen, um normal zu sprechen, ohne sie sprechen hören zu müssen. Du kannst eine Anzahl von Stimmen in deinem Geist speichern, die deinem Übungsbonus entspricht."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Kenku (Rasse: Magische Plagiate)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/kenku/charaktere.png",
    "beschreibung": [
      "Gedächtnismeister · Vogelwesen ohne Flug",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Magische Plagiate."
    ],
    "besonderheiten": [
      {
        "name": "Expertenduplikation",
        "beschreibung": "Wenn du Schriften oder Kunstwerke kopierst, bist du bei allen Attributswürfen für ein exaktes Duplikat im Vorteil."
      },
      {
        "name": "Kenku-Gedächtnis",
        "beschreibung": "Du bist in 2 Fertigkeiten deiner Wahl geübt. Außerdem kannst du dir bei Attributswürfen mit geübten Fertigkeiten vor dem W20-Wurf einen Vorteil verschaffen. Anwendungen pro langer Rast entsprechen deinem Übungsbonus."
      },
      {
        "name": "Stimmen nachahmen",
        "beschreibung": "Du kannst Geräusche und Stimmen, die du gehört hast, präzise wiedergeben. Erkennung als Imitation: WEI-(Einsicht)-Rettungswurf gegen SG 8 + Übungsbonus + CHA-Modifikator."
      },
      {
        "name": "Angeborenes Talent: Magische Plagiate",
        "beschreibung": "Du hast gelernt, die magischen Fähigkeiten von anderen zu imitieren. Du erlernst den Zaubertrick Einfache Illusion sowie die Zauber Lautloses Trugbild und Selbstverkleidung. Du kannst jeden Zauber einmal auf der ersten Stufe wirken, ohne einen Zauberplatz zu verbrauchen; nach einer langen Rast kannst du dies erneut tun. Während einer langen Rast kannst du dir von einem willigen Verbündeten einen seiner vorbereiteten Zauber zeigen lassen. Du lernst den Zauber und kannst ihn mit allen dir zur Verfügung stehenden Zauberplätzen wirken. Die maximale Stufe beträgt ein Drittel deiner Stufe (aufgerundet). Du kannst immer nur einen Zauber gleichzeitig einprägen. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Kenku (Rasse: Meister der Nachahmung)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/kenku/charaktere.png",
    "beschreibung": [
      "Gedächtnismeister · Vogelwesen ohne Flug",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Meister der Nachahmung."
    ],
    "besonderheiten": [
      {
        "name": "Expertenduplikation",
        "beschreibung": "Wenn du Schriften oder Kunstwerke kopierst, bist du bei allen Attributswürfen für ein exaktes Duplikat im Vorteil."
      },
      {
        "name": "Kenku-Gedächtnis",
        "beschreibung": "Du bist in 2 Fertigkeiten deiner Wahl geübt. Außerdem kannst du dir bei Attributswürfen mit geübten Fertigkeiten vor dem W20-Wurf einen Vorteil verschaffen. Anwendungen pro langer Rast entsprechen deinem Übungsbonus."
      },
      {
        "name": "Stimmen nachahmen",
        "beschreibung": "Du kannst Geräusche und Stimmen, die du gehört hast, präzise wiedergeben. Erkennung als Imitation: WEI-(Einsicht)-Rettungswurf gegen SG 8 + Übungsbonus + CHA-Modifikator."
      },
      {
        "name": "Angeborenes Talent: Meister der Nachahmung",
        "beschreibung": "Du hast so lange andere imitiert, dass es zur zweiten Natur geworden ist. Du erlangst Übung im Umgang mit dem Fälschungswerkzeug und dem Verkleidungswerkzeug. Während einer langen Rast kannst du einen willigen Verbündeten beobachten. Dabei kannst du dessen Übung in einer bestimmten Fertigkeit oder einem bestimmten Werkzeug nachahmen und erlangst bis zum Ende deiner nächsten langen Rast oder bis du diese Fähigkeit erneut einsetzt, die Übung in dieser Fertigkeit."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Kobolde (Rasse: Hockenstärke)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens rechtschaffen-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/kobolde/charaktere.png",
    "beschreibung": [
      "Kinder des Drachens · Hüter der Tunnel",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Drakonischer Schrei",
        "beschreibung": "Als Bonusaktion entfesselst du einen Schrei auf Gegner innerhalb von 3 m. Bis zum Beginn deines nächsten Zuges haben du und deine Verbündeten Vorteil bei Angriffswürfen gegen diese Gegner. Anwendungen pro langer Rast entsprechen deinem Übungsbonus."
      },
      {
        "name": "Kobold-Vermächtnis",
        "beschreibung": "Wähle eine Option: Abwehr (Vorteil gegen Verängstigt), Drakonische Zauberei (ein Zaubertrick aus der Zauberer-Liste, Merkmal wählbar), oder Findigkeit (geübt in einer von: Arkane Kunde, Fingerfertigkeit, Heilkunde, Nachforschungen, Überlebenskunst)."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Kobolde (Rasse: Segen des Drachen)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens rechtschaffen-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/kobolde/charaktere.png",
    "beschreibung": [
      "Kinder des Drachens · Hüter der Tunnel",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Segen des Drachen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Drakonischer Schrei",
        "beschreibung": "Als Bonusaktion entfesselst du einen Schrei auf Gegner innerhalb von 3 m. Bis zum Beginn deines nächsten Zuges haben du und deine Verbündeten Vorteil bei Angriffswürfen gegen diese Gegner. Anwendungen pro langer Rast entsprechen deinem Übungsbonus."
      },
      {
        "name": "Kobold-Vermächtnis",
        "beschreibung": "Wähle eine Option: Abwehr (Vorteil gegen Verängstigt), Drakonische Zauberei (ein Zaubertrick aus der Zauberer-Liste, Merkmal wählbar), oder Findigkeit (geübt in einer von: Arkane Kunde, Fingerfertigkeit, Heilkunde, Nachforschungen, Überlebenskunst)."
      },
      {
        "name": "Angeborenes Talent: Segen des Drachen",
        "beschreibung": "Ein Drachensegen verleiht dir Blindsicht und je nach Blutlinie Resistenz sowie einen passenden Zaubertrick. Du erhältst Blindsicht bis zu einer Reichweite von 3 m. Wähle eine der folgenden drakonischen Blutlinien. Dein Attributsmodifikator für diese Zaubertricks ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Schwarz: Du erhältst Resistenz gegen Säureschaden und erlernst den Zaubertrick Säurespritzer. Blau: Du erhältst Resistenz gegen Blitzschaden und erlernst den Zaubertrick Schockgriff. Grün: Du erhältst Resistenz gegen Giftschaden und erlernst den Zaubertrick Gift versprühen. Rot: Du erhältst Resistenz gegen Feuerschaden und erlernst den Zaubertrick Flamme erzeugen. Weiß: Du erhältst Resistenz gegen Kälteschaden und erlernst den Zaubertrick Kältestrahl."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Kobolde (Rasse: Urd-Kobold)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens rechtschaffen-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/kobolde/charaktere.png",
    "beschreibung": [
      "Kinder des Drachens · Hüter der Tunnel",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Urd-Kobold."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Drakonischer Schrei",
        "beschreibung": "Als Bonusaktion entfesselst du einen Schrei auf Gegner innerhalb von 3 m. Bis zum Beginn deines nächsten Zuges haben du und deine Verbündeten Vorteil bei Angriffswürfen gegen diese Gegner. Anwendungen pro langer Rast entsprechen deinem Übungsbonus."
      },
      {
        "name": "Kobold-Vermächtnis",
        "beschreibung": "Wähle eine Option: Abwehr (Vorteil gegen Verängstigt), Drakonische Zauberei (ein Zaubertrick aus der Zauberer-Liste, Merkmal wählbar), oder Findigkeit (geübt in einer von: Arkane Kunde, Fingerfertigkeit, Heilkunde, Nachforschungen, Überlebenskunst)."
      },
      {
        "name": "Angeborenes Talent: Urd-Kobold",
        "beschreibung": "Ein seltenes drachenähnliches Gen verleiht dir Flügel und eine Flugbewegungsrate gleich deiner Schrittgeschwindigkeit. Deine Flügel ermöglichen dir eine Flugbewegungsrate gleich deiner Bewegungsrate. Du kannst von dieser Bewegungsrate nicht profitieren, wenn du eine schwere Rüstung trägst oder deine Tragfähigkeit überschritten ist."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Leichtfüße (Rasse: Großzügiges Glück)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/leichtfüße/charaktere.png",
    "beschreibung": [
      "Wandervolk der Straßen · Meister des Versteckens",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Großzügiges Glück."
    ],
    "besonderheiten": [
      {
        "name": "Halblingsglück",
        "beschreibung": "Würfelst du bei einem Angriffs-, Attributs- oder Rettungswurf eine 1, darfst du den Wurf wiederholen und musst das zweite Ergebnis verwenden."
      },
      {
        "name": "Tapferkeit",
        "beschreibung": "Du bist im Vorteil bei Rettungswürfen, um den Zustand Verängstigt zu vermeiden."
      },
      {
        "name": "Halblingsgewandheit",
        "beschreibung": "Du kannst dich durch Bereiche bewegen, die von Kreaturen eingenommen werden, die eine Größenkategorie größer sind als du."
      },
      {
        "name": "Angeborene Verstohlenheit",
        "beschreibung": "Du kannst versuchen, dich zu verstecken, wenn du von einer Kreatur verschleiert wirst, die nur eine Größenkategorie größer ist als du."
      },
      {
        "name": "Angeborenes Talent: Großzügiges Glück",
        "beschreibung": "Du hast gelernt, das außergewöhnliche Glück deines Volkes dir und deinen Gefährten zu verleihen. Du hast einen Vorrat an Glückspunkten, der deinem Übungsbonus entspricht. Jedes Mal, wenn du oder ein Verbündeter in einem Umkreis von 9 m einen Angriffswurf, Attributswurf oder Rettungswurf macht, kannst du einen Glückspunkt ausgeben, um einen zusätzlichen Würfelwurf zu machen. Du kannst wählen, ob du einen Glückspunkt ausgeben möchtest, nachdem du gewürfelt hast, aber bevor das Ergebnis feststeht. Du entscheidest, welcher der beiden Würfel verwendet wird. Wenn du einen Vorteil oder Nachteil hast, führe ihn zuerst aus. Du erhältst die Hälfte deiner maximalen Glückspunkte (abgerundet) zurück, wenn du eine lange Rast beendest."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Leichtfüße (Rasse: Hockenstärke)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/leichtfüße/charaktere.png",
    "beschreibung": [
      "Wandervolk der Straßen · Meister des Versteckens",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Halblingsglück",
        "beschreibung": "Würfelst du bei einem Angriffs-, Attributs- oder Rettungswurf eine 1, darfst du den Wurf wiederholen und musst das zweite Ergebnis verwenden."
      },
      {
        "name": "Tapferkeit",
        "beschreibung": "Du bist im Vorteil bei Rettungswürfen, um den Zustand Verängstigt zu vermeiden."
      },
      {
        "name": "Halblingsgewandheit",
        "beschreibung": "Du kannst dich durch Bereiche bewegen, die von Kreaturen eingenommen werden, die eine Größenkategorie größer sind als du."
      },
      {
        "name": "Angeborene Verstohlenheit",
        "beschreibung": "Du kannst versuchen, dich zu verstecken, wenn du von einer Kreatur verschleiert wirst, die nur eine Größenkategorie größer ist als du."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Leichtfüße (Rasse: Zweite Chance)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/leichtfüße/charaktere.png",
    "beschreibung": [
      "Wandervolk der Straßen · Meister des Versteckens",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Zweite Chance."
    ],
    "besonderheiten": [
      {
        "name": "Halblingsglück",
        "beschreibung": "Würfelst du bei einem Angriffs-, Attributs- oder Rettungswurf eine 1, darfst du den Wurf wiederholen und musst das zweite Ergebnis verwenden."
      },
      {
        "name": "Tapferkeit",
        "beschreibung": "Du bist im Vorteil bei Rettungswürfen, um den Zustand Verängstigt zu vermeiden."
      },
      {
        "name": "Halblingsgewandheit",
        "beschreibung": "Du kannst dich durch Bereiche bewegen, die von Kreaturen eingenommen werden, die eine Größenkategorie größer sind als du."
      },
      {
        "name": "Angeborene Verstohlenheit",
        "beschreibung": "Du kannst versuchen, dich zu verstecken, wenn du von einer Kreatur verschleiert wirst, die nur eine Größenkategorie größer ist als du."
      },
      {
        "name": "Angeborenes Talent: Zweite Chance",
        "beschreibung": "Halblings-Glück in Magie: Silberne Fäden (1/langer Rast, ohne Materialkomponenten) und Segnen als Bonusaktion ohne Konzentration (1/langer Rast). Du lernst den Zauber Silberne Fäden. Du kannst ihn einmal wirken, ohne einen Zauberplatz zu verbrauchen; danach musst du eine lange Rast einlegen. Intelligenz, Weisheit oder Charisma ist dein Attributsmodifikator. Du benötigst für diesen Zauber keine materiellen Komponenten. Du lernst den Zauber Segnen. Du kannst ihn einmal als Bonusaktion wirken, ohne dich zu konzentrieren und ohne einen Zauberplatz zu verbrauchen; danach musst du eine lange Rast einlegen. Intelligenz, Weisheit oder Charisma ist dein Attributsmodifikator. Du benötigst für diesen Zauber keine materiellen Komponenten."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Locathah (Rasse)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 12,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Überlebende der Tiefe · Krieger der Strömungen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen."
    ],
    "besonderheiten": [
      {
        "name": "Natürliche Rüstung",
        "beschreibung": "Du hast zähe, schuppige Haut. Wenn du keine Rüstung trägst, beträgt deine Rüstungsklasse 12 + dein Geschicklichkeitsmodifikator. Du kannst deine natürliche Rüstung verwenden, wenn die Rüstung, die du trägst, dir eine niedrigere RK geben würde. Schilde gelten wie gewohnt."
      },
      {
        "name": "Aufmerksam und athletisch",
        "beschreibung": "Du bist in den Fertigkeiten Athletik und Wahrnehmung geübt."
      },
      {
        "name": "Leviathan-Wille",
        "beschreibung": "Du hast Vorteil auf Rettungswürfe gegen Bezauberung, Furcht, Lähmung, Vergiftung, Betäubung und Einschläferung."
      },
      {
        "name": "Begrenzte Amphibienfähigkeit",
        "beschreibung": "Du kannst sowohl Luft als auch Wasser atmen. Du musst jedoch mindestens alle 4 Stunden untergetaucht sein — andernfalls beginnst du zu ersticken."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Loxodon (Rasse: Geschicklicher Rüssel)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 12,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Weisheitshüter mit Rüssel · Gedächtnisträger der Ewigkeit",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Geschicklicher Rüssel."
    ],
    "besonderheiten": [
      {
        "name": "Kraftvolle Statur",
        "beschreibung": "Du giltst für die Bestimmung deiner Tragekapazität und des Gewichts, das du schieben, ziehen oder heben kannst, als eine Größenkategorie größer."
      },
      {
        "name": "Loxodon-Gelassenheit",
        "beschreibung": "Du hast Vorteil auf Würfe gegen Bezauberung oder Furcht."
      },
      {
        "name": "Natürliche Rüstung",
        "beschreibung": "Du hast dicke, ledrige Haut. Wenn du keine Rüstung trägst, beträgt deine Rüstungsklasse 12 + dein Konstitutionsmodifikator. Du kannst deine natürliche Rüstung verwenden, um deine Rüstungsklasse zu bestimmen, wenn die Rüstung, die du trägst, dir eine niedrigere Rüstungsklasse geben würde. Die Vorteile eines Schildes gelten wie gewohnt, während du deine natürliche Rüstung verwendest."
      },
      {
        "name": "Rüssel",
        "beschreibung": "Du kannst Dinge mit deinem Rüssel greifen und ihn als Schnorchel verwenden. Er hat eine Reichweite von 1,5 Metern und kann eine Anzahl von Kilogramm heben, die dem Fünffachen deines Stärkewertes entspricht. Du kannst ihn verwenden, um folgende einfache Aufgaben auszuführen: einen Gegenstand oder eine Kreatur heben, fallen lassen, halten, schieben oder ziehen; eine Tür oder einen Behälter öffnen oder schließen; jemanden greifen; oder einen unbewaffneten Angriff machen. Er kann keine Waffen oder Schilde führen oder etwas tun, das manuelle Präzision erfordert, wie das Verwenden von Werkzeugen oder magischen Gegenständen oder das Ausführen der somatischen Komponenten eines Zaubers."
      },
      {
        "name": "Feiner Geruchssinn",
        "beschreibung": "Dank deines empfindlichen Rüssels hast du Vorteil auf Weisheit-(Wahrnehmungs)-, Weisheit-(Überleben)- und Intelligenz-(Nachforschungs)-Würfe, die Geruch beinhalten."
      },
      {
        "name": "Angeborenes Talent: Geschicklicher Rüssel",
        "beschreibung": "Du hast es gemeistert, deinen Rüssel ähnlich wie eine Hand für komplizierte Aufgaben einzusetzen. Du kannst jede Aktion mit deinem Rüssel ausführen, die du mit einem Arm ausführen könntest. Dein Rüssel kann einhändige Waffen, Schilde und Werkzeuge führen sowie magische Gegenstände aktivieren. Wenn du mit einer Waffe angreifst, die du mit deinem Rüssel führst, erhöht sich deine Reichweite um 1,5 Meter (5 Fuß)."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Loxodon (Rasse: Loxodon-Unbeugsamkeit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 12,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Weisheitshüter mit Rüssel · Gedächtnisträger der Ewigkeit",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Loxodon-Unbeugsamkeit."
    ],
    "besonderheiten": [
      {
        "name": "Kraftvolle Statur",
        "beschreibung": "Du giltst für die Bestimmung deiner Tragekapazität und des Gewichts, das du schieben, ziehen oder heben kannst, als eine Größenkategorie größer."
      },
      {
        "name": "Loxodon-Gelassenheit",
        "beschreibung": "Du hast Vorteil auf Würfe gegen Bezauberung oder Furcht."
      },
      {
        "name": "Natürliche Rüstung",
        "beschreibung": "Du hast dicke, ledrige Haut. Wenn du keine Rüstung trägst, beträgt deine Rüstungsklasse 12 + dein Konstitutionsmodifikator. Du kannst deine natürliche Rüstung verwenden, um deine Rüstungsklasse zu bestimmen, wenn die Rüstung, die du trägst, dir eine niedrigere Rüstungsklasse geben würde. Die Vorteile eines Schildes gelten wie gewohnt, während du deine natürliche Rüstung verwendest."
      },
      {
        "name": "Rüssel",
        "beschreibung": "Du kannst Dinge mit deinem Rüssel greifen und ihn als Schnorchel verwenden. Er hat eine Reichweite von 1,5 Metern und kann eine Anzahl von Kilogramm heben, die dem Fünffachen deines Stärkewertes entspricht. Du kannst ihn verwenden, um folgende einfache Aufgaben auszuführen: einen Gegenstand oder eine Kreatur heben, fallen lassen, halten, schieben oder ziehen; eine Tür oder einen Behälter öffnen oder schließen; jemanden greifen; oder einen unbewaffneten Angriff machen. Er kann keine Waffen oder Schilde führen oder etwas tun, das manuelle Präzision erfordert, wie das Verwenden von Werkzeugen oder magischen Gegenständen oder das Ausführen der somatischen Komponenten eines Zaubers."
      },
      {
        "name": "Feiner Geruchssinn",
        "beschreibung": "Dank deines empfindlichen Rüssels hast du Vorteil auf Weisheit-(Wahrnehmungs)-, Weisheit-(Überleben)- und Intelligenz-(Nachforschungs)-Würfe, die Geruch beinhalten."
      },
      {
        "name": "Angeborenes Talent: Loxodon-Unbeugsamkeit",
        "beschreibung": "Deine natürliche Statur und Stärke hat dich widerstandsfähiger und robuster gemacht als viele andere. Deine natürliche Rüstung erhöht sich auf 13 + deinen Konstitutionsmodifikator, anstatt 12 + deinen Konstitutionsmodifikator. Dein Trefferpunktmaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du dieses Talent erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktmaximum um zusätzlich 1 Trefferpunkt. Du erhältst Resistenz gegen Wucht-, Stich- und Hiebschaden durch nichtmagische Angriffe."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Loxodon (Rasse: Stoßzähner)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 12,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Weisheitshüter mit Rüssel · Gedächtnisträger der Ewigkeit",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Stoßzähner."
    ],
    "besonderheiten": [
      {
        "name": "Kraftvolle Statur",
        "beschreibung": "Du giltst für die Bestimmung deiner Tragekapazität und des Gewichts, das du schieben, ziehen oder heben kannst, als eine Größenkategorie größer."
      },
      {
        "name": "Loxodon-Gelassenheit",
        "beschreibung": "Du hast Vorteil auf Würfe gegen Bezauberung oder Furcht."
      },
      {
        "name": "Natürliche Rüstung",
        "beschreibung": "Du hast dicke, ledrige Haut. Wenn du keine Rüstung trägst, beträgt deine Rüstungsklasse 12 + dein Konstitutionsmodifikator. Du kannst deine natürliche Rüstung verwenden, um deine Rüstungsklasse zu bestimmen, wenn die Rüstung, die du trägst, dir eine niedrigere Rüstungsklasse geben würde. Die Vorteile eines Schildes gelten wie gewohnt, während du deine natürliche Rüstung verwendest."
      },
      {
        "name": "Rüssel",
        "beschreibung": "Du kannst Dinge mit deinem Rüssel greifen und ihn als Schnorchel verwenden. Er hat eine Reichweite von 1,5 Metern und kann eine Anzahl von Kilogramm heben, die dem Fünffachen deines Stärkewertes entspricht. Du kannst ihn verwenden, um folgende einfache Aufgaben auszuführen: einen Gegenstand oder eine Kreatur heben, fallen lassen, halten, schieben oder ziehen; eine Tür oder einen Behälter öffnen oder schließen; jemanden greifen; oder einen unbewaffneten Angriff machen. Er kann keine Waffen oder Schilde führen oder etwas tun, das manuelle Präzision erfordert, wie das Verwenden von Werkzeugen oder magischen Gegenständen oder das Ausführen der somatischen Komponenten eines Zaubers."
      },
      {
        "name": "Feiner Geruchssinn",
        "beschreibung": "Dank deines empfindlichen Rüssels hast du Vorteil auf Weisheit-(Wahrnehmungs)-, Weisheit-(Überleben)- und Intelligenz-(Nachforschungs)-Würfe, die Geruch beinhalten."
      },
      {
        "name": "Angeborenes Talent: Stoßzähner",
        "beschreibung": "Du hast gelernt, deine Stoßzähne als gefährliche Waffen einzusetzen. Deine Stoßzähne werden zu natürlichen Waffen. Sie verursachen 1W6 + deinen Stärkemodifikator Stichschaden. Wenn du mit deinen Stoßzähnen angreifst, erhöht sich dein kritischer Trefferbereich um 1. Wenn du dich mindestens 3 Meter (10 Fuß) in einer geraden Linie auf ein Ziel zubewegst, kannst du als Bonusaktion einen rammenden Angriff mit deinen Stoßzähnen durchführen. Wenn der Angriff trifft, wird das Ziel zudem zu Boden geworfen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Luft-Genasi (Rasse: Abgesandter der Lüfte)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Blitz"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/luft-genasi/charaktere.png",
    "beschreibung": [
      "Erben der Dschinns · Kinder der freien Lüfte",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Abgesandter der Lüfte."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Blitzresistent",
        "beschreibung": "Du bist gegen Blitzschaden resistent."
      },
      {
        "name": "Spiel mit dem Wind",
        "beschreibung": "Du kennst den Zaubertrick Schockgriff. Ab Stufe 3: Federfall 1×/langer Rast (ohne Materialkomponenten). Ab Stufe 5: Schweben 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Unendlicher Atem",
        "beschreibung": "Du kannst den Atem unbegrenzt lange anhalten, solange du nicht kampfunfähig bist."
      },
      {
        "name": "Angeborenes Talent: Abgesandter der Lüfte",
        "beschreibung": "Nutze die Schnelligkeit des Windes, um deine Bewegungen zu lenken. Deine Bewegungsrate erhöht sich um 1,5 m. Wenn du von einem Angriff getroffen wirst, kannst du deine Reaktion nutzen, um deinen Körper in Wind zu verwandeln und sofort in einem unbesetzten Feld innerhalb von 9 m wieder aufzutauchen, wodurch der Angriff verfehlt. Du kannst diese Fähigkeit nach einer kurzen oder langen Rast wieder einsetzen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Luft-Genasi (Rasse: Verderbnis des Abgrunds)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Blitz"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/luft-genasi/charaktere.png",
    "beschreibung": [
      "Erben der Dschinns · Kinder der freien Lüfte",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Verderbnis des Abgrunds."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Blitzresistent",
        "beschreibung": "Du bist gegen Blitzschaden resistent."
      },
      {
        "name": "Spiel mit dem Wind",
        "beschreibung": "Du kennst den Zaubertrick Schockgriff. Ab Stufe 3: Federfall 1×/langer Rast (ohne Materialkomponenten). Ab Stufe 5: Schweben 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Unendlicher Atem",
        "beschreibung": "Du kannst den Atem unbegrenzt lange anhalten, solange du nicht kampfunfähig bist."
      },
      {
        "name": "Angeborenes Talent: Verderbnis des Abgrunds",
        "beschreibung": "Abgründische Korruption verleiht Infernalisch, Resistenz gegen Psychoschaden, Furcht-Vorteil und zwei Abgrundzauber. Du lernst Infernalisch, die Sprache der Kreaturen des Abgrunds. Wenn du Infernalisch bereits kennst, kannst du stattdessen eine andere Sprache deiner Wahl erlernen. Du erhältst Resistenz gegen psychischen Schaden und einen Vorteil bei Schutzwürfen gegen Furcht. Du erlernst den Zauber Chaospfeil und den Zauber Tashas fürchterlicher Lachanfall. Du kannst diese Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Luft-Genasi (Rasse: Widerstand des Ursprungs)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Blitz"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/luft-genasi/charaktere.png",
    "beschreibung": [
      "Erben der Dschinns · Kinder der freien Lüfte",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Widerstand des Ursprungs."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Blitzresistent",
        "beschreibung": "Du bist gegen Blitzschaden resistent."
      },
      {
        "name": "Spiel mit dem Wind",
        "beschreibung": "Du kennst den Zaubertrick Schockgriff. Ab Stufe 3: Federfall 1×/langer Rast (ohne Materialkomponenten). Ab Stufe 5: Schweben 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Unendlicher Atem",
        "beschreibung": "Du kannst den Atem unbegrenzt lange anhalten, solange du nicht kampfunfähig bist."
      },
      {
        "name": "Angeborenes Talent: Widerstand des Ursprungs",
        "beschreibung": "Ebenare Abstammung stärkt Körper und Geist: erhöhtes TP-Maximum, Giftresistenz und Immunität gegen kritische Treffer. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erlangst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Du erhältst Resistenz gegen Giftschaden und einen Vorteil bei Rettungswürfen gegen Vergiftungen. Du wirst immun gegen kritische Treffer. Wenn ein Treffer ein kritischer Treffer sein sollte, wird er stattdessen zu einem normalen Treffer."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Meereselfen (Rasse: Elfische Treffsicherheit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Kälte"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/meereselfen/charaktere.png",
    "beschreibung": [
      "Kinder des Ozeans · Navigatoren der Gezeiten",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Elfische Treffsicherheit."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Freund des Meeres",
        "beschreibung": "Wasserlebewesen fühlen sich mit dir verbunden. Du kannst einfache Ideen an alle Tiere mit Schwimmbewegungsrate vermitteln — sie verstehen dich, du verfügst jedoch über keine Spezialfähigkeit, um sie zu verstehen."
      },
      {
        "name": "Kind des Ozeans",
        "beschreibung": "Du kannst Luft und Wasser atmen. Du bist gegen Kälteschaden resistent."
      },
      {
        "name": "Angeborenes Talent: Elfische Treffsicherheit",
        "beschreibung": "Die legendäre Treffsicherheit der Elfen mit Präzisionsangriffen ist nun auch dein. Jedes Mal, wenn du mit einem Angriff triffst, der kein kritischer Treffer ist, erhöht sich deine Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis du einen kritischen Treffer landest, einen Angriff verfehlst oder den Kampf betrittst oder verlässt; danach wird er auf deinen Standardwert zurückgesetzt. Immer wenn du bei einem Angriffswurf einen Vorteil hast, kannst du einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Meereselfen (Rasse: Magie der Ozeane)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Kälte"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/meereselfen/charaktere.png",
    "beschreibung": [
      "Kinder des Ozeans · Navigatoren der Gezeiten",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Magie der Ozeane."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Freund des Meeres",
        "beschreibung": "Wasserlebewesen fühlen sich mit dir verbunden. Du kannst einfache Ideen an alle Tiere mit Schwimmbewegungsrate vermitteln — sie verstehen dich, du verfügst jedoch über keine Spezialfähigkeit, um sie zu verstehen."
      },
      {
        "name": "Kind des Ozeans",
        "beschreibung": "Du kannst Luft und Wasser atmen. Du bist gegen Kälteschaden resistent."
      },
      {
        "name": "Angeborenes Talent: Magie der Ozeane",
        "beschreibung": "Du bist mehr auf die Magie der Elementarebene des Wassers eingestimmt als andere deiner Art. Du erlernst den Zaubertrick Wasser formen. Du erlernst die Zauber Wasser erschaffen oder zerstören und Schutzwind. Du kannst jeden Zauber auf seiner niedrigsten Stufe einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Immer wenn du deinen Zug vollständig unter Wasser beginnst, erhältst du vorübergehend Trefferpunkte in Höhe deiner Stufe. Diese temporären Trefferpunkte gehen verloren, wenn du deinen Zug nicht unter Wasser beendest."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Meereselfen (Rasse: Stärke der Wellen)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Kälte"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/meereselfen/charaktere.png",
    "beschreibung": [
      "Kinder des Ozeans · Navigatoren der Gezeiten",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Stärke der Wellen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Freund des Meeres",
        "beschreibung": "Wasserlebewesen fühlen sich mit dir verbunden. Du kannst einfache Ideen an alle Tiere mit Schwimmbewegungsrate vermitteln — sie verstehen dich, du verfügst jedoch über keine Spezialfähigkeit, um sie zu verstehen."
      },
      {
        "name": "Kind des Ozeans",
        "beschreibung": "Du kannst Luft und Wasser atmen. Du bist gegen Kälteschaden resistent."
      },
      {
        "name": "Angeborenes Talent: Stärke der Wellen",
        "beschreibung": "Kältewiderstand mit Reaktion, Vorteil unter Wasser, Druckresistenz und Spurten als Bonusaktion unter Wasser. Du erhältst Resistenz gegen Kälteschaden. Würdest du Schaden dieser Art erleiden, kannst du deine Reaktion verwenden, um einem Schadenswurf zu widerstehen. Du erhältst keinen Schaden durch diesen Schadenswurf. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht, und du erhältst alle verbrauchten Einsätze zurück, wenn du eine lange Rast beendest. Diese Eigenschaft kann in bestimmten Situationen, nach Ermessen des Spielleiters, fehlschlagen. Du erhältst einen Vorteil bei Stärke- und Geschicklichkeitswürfen unter Wasser. Du bist resistent gegen die Auswirkungen von extremem Druck. Solange du unter Wasser bist, kannst du die Spurten-Aktion als Bonusaktion in deinem Zug ausführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Menschen (Rasse: Menschliche Entschlossenheit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Beliebige Gesinnung",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 11,
      "DEX": 11,
      "CON": 11,
      "INT": 11,
      "WIS": 11,
      "CHA": 11
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/menschen/charaktere.png",
    "beschreibung": [
      "Anpassungsfähige Pioniere · Erbauer von Imperien",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Menschliche Entschlossenheit."
    ],
    "besonderheiten": [
      {
        "name": "Alle Attribute +1",
        "beschreibung": "Jeder einzelne Attributswert wird um 1 Punkt erhöht."
      },
      {
        "name": "Variante (optional)",
        "beschreibung": "Ersetzt Alle Attribute +1: Zwei Attributswerte um je 1 erhöhen, plus eine Fertigkeit nach Wahl, plus ein Talent nach Wahl."
      },
      {
        "name": "Angeborenes Talent: Menschliche Entschlossenheit",
        "beschreibung": "Du bist von einer Entschlossenheit erfüllt, die das Unerreichbare in deine Reichweite ziehen kann. Wenn du einen Angriffswurf, einen Attributswurf oder einen Rettungswurf machst, kannst du dies mit Vorteil tun. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Immer wenn du bei einem W20-Wurf eine 20 würfelst, erhältst du eine Aufladung dieser Fähigkeit zurück."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Menschen (Rasse: Überlebenskünstler)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Beliebige Gesinnung",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 11,
      "DEX": 11,
      "CON": 11,
      "INT": 11,
      "WIS": 11,
      "CHA": 11
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/menschen/charaktere.png",
    "beschreibung": [
      "Anpassungsfähige Pioniere · Erbauer von Imperien",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Überlebenskünstler."
    ],
    "besonderheiten": [
      {
        "name": "Alle Attribute +1",
        "beschreibung": "Jeder einzelne Attributswert wird um 1 Punkt erhöht."
      },
      {
        "name": "Variante (optional)",
        "beschreibung": "Ersetzt Alle Attribute +1: Zwei Attributswerte um je 1 erhöhen, plus eine Fertigkeit nach Wahl, plus ein Talent nach Wahl."
      },
      {
        "name": "Angeborenes Talent: Überlebenskünstler",
        "beschreibung": "Expertise in Überlebenskunst und Wahl einer Schadensresistenz mit passiven Umgebungsvorteilen. Du erhältst Expertise in der Fertigkeit Weisheit (Überlebenskunst). Du kannst eine der folgenden Schadensarten auswählen, die dir bestimmte Vorteile gewährt. Kälte: Du bist gegen Kälteschaden resistent, wodurch dir extreme Kältebedingungen nichts ausmachen. Bei Schneestürmen erhältst du keinen Nachteil auf Weisheitswürfe (Wahrnehmung), die sich auf das Gehör oder die Sicht beziehen. Feuer: Du bist gegen Feuerschaden resistent, wodurch dir extreme Hitzebedingungen nichts ausmachen. Bei Sandstürmen erhältst du keinen Nachteil auf Weisheitswürfe (Wahrnehmung), die sich auf das Gehör oder die Sicht beziehen. Gift: Du bist gegen Giftschaden resistent und erhältst einen Vorteil bei Rettungswürfen gegen Vergiftungen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Menschen (Rasse: Wunderkind)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Beliebige Gesinnung",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 11,
      "DEX": 11,
      "CON": 11,
      "INT": 11,
      "WIS": 11,
      "CHA": 11
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/menschen/charaktere.png",
    "beschreibung": [
      "Anpassungsfähige Pioniere · Erbauer von Imperien",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Wunderkind."
    ],
    "besonderheiten": [
      {
        "name": "Alle Attribute +1",
        "beschreibung": "Jeder einzelne Attributswert wird um 1 Punkt erhöht."
      },
      {
        "name": "Variante (optional)",
        "beschreibung": "Ersetzt Alle Attribute +1: Zwei Attributswerte um je 1 erhöhen, plus eine Fertigkeit nach Wahl, plus ein Talent nach Wahl."
      },
      {
        "name": "Angeborenes Talent: Wunderkind",
        "beschreibung": "Lernbegabung: neue Fertigkeit, Werkzeug und Sprache, Expertise in einer geübten Fertigkeit und 4 magische Einstimmungen. Du erhältst Übung in einer Fertigkeit deiner Wahl, einer Werkzeugfertigkeit deiner Wahl und fließende Kenntnisse in einer Sprache deiner Wahl. Wähle eine Fertigkeit, in der du geübt bist. Du erlangst Expertise in dieser Fertigkeit. Du kannst dich auf bis zu 4 magische Gegenstände einstimmen, anstatt der normalen 3."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Metallische Drachenblütige (Rasse: Drachenhaut)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/metallische_drachenblütige/charaktere.png",
    "beschreibung": [
      "Erben der Metallischen · Kinder des Guten",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Drachenhaut."
    ],
    "besonderheiten": [
      {
        "name": "Metallische Abstammung",
        "beschreibung": "Du hast einen metallischen Drachenvorfahren. Wähle eine Abstammung: Bronze (Blitz), Gold (Feuer), Kupfer (Säure), Messing (Feuer) oder Silber (Kälte). Sie bestimmt die Schadensart deiner anderen Merkmale."
      },
      {
        "name": "Odemwaffe",
        "beschreibung": "Wenn du die Angreifen-Aktion ausführst, kannst du einen Angriff durch deinen Odem ersetzen: einen 4,5 m langen Kegel magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Drakonische Resistenz",
        "beschreibung": "Du bist gegen die Schadensart resistent, die mit deiner metallischen Abstammung assoziiert ist."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Metallische Odemwaffe (ab Stufe 5)",
        "beschreibung": "Als Bonusaktion atmest du magische Energie in einem 4,5 m langen Kegel aus (SG = 8 + KON-Mod + Übungsbonus). Wähle einen der beiden Effekte. Einmal pro langer Rast."
      },
      {
        "name": "Angeborenes Talent: Drachenhaut",
        "beschreibung": "Du manifestierst besonders harte Schuppen, die an deine drakonischen Vorfahren erinnern. Deine Schuppen werden härter. Solange du keine Rüstung trägst, kannst du deine Rüstungsklasse als 13 + deinen Geschicklichkeitsmodifikator berechnen. Auch wenn du einen Schild trägst, kannst du diesen Vorteil trotzdem nutzen. Wenn eine Kreatur einen Angriffswurf gegen dich ausführt, kannst du deine Reaktion verwenden, um diesen mit den gehärteten Schuppen an deinem Schweif zu parieren. Der Angriffswurf der Kreatur schlägt fehl. Du kannst dieses Merkmal einmal pro lange Rast einsetzen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Metallische Drachenblütige (Rasse: Drachensegen)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/metallische_drachenblütige/charaktere.png",
    "beschreibung": [
      "Erben der Metallischen · Kinder des Guten",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Drachensegen."
    ],
    "besonderheiten": [
      {
        "name": "Metallische Abstammung",
        "beschreibung": "Du hast einen metallischen Drachenvorfahren. Wähle eine Abstammung: Bronze (Blitz), Gold (Feuer), Kupfer (Säure), Messing (Feuer) oder Silber (Kälte). Sie bestimmt die Schadensart deiner anderen Merkmale."
      },
      {
        "name": "Odemwaffe",
        "beschreibung": "Wenn du die Angreifen-Aktion ausführst, kannst du einen Angriff durch deinen Odem ersetzen: einen 4,5 m langen Kegel magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Drakonische Resistenz",
        "beschreibung": "Du bist gegen die Schadensart resistent, die mit deiner metallischen Abstammung assoziiert ist."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Metallische Odemwaffe (ab Stufe 5)",
        "beschreibung": "Als Bonusaktion atmest du magische Energie in einem 4,5 m langen Kegel aus (SG = 8 + KON-Mod + Übungsbonus). Wähle einen der beiden Effekte. Einmal pro langer Rast."
      },
      {
        "name": "Angeborenes Talent: Drachensegen",
        "beschreibung": "Deine drakonischen Vorfahren wurden von einem der Drachengötter gesegnet und ihr Blut verleiht dir die Kraft, dich und deine Verbündeten widerstandsfähiger zu machen. Du erhältst Übung in Intelligenz (Naturkunde). Wenn du bereits in Naturkunde geübt bist, erhältst du Expertise. Du hast einen Vorteil bei Würfen auf Intelligenz (Naturkunde), wenn du nach Erzvorkommen suchst. Du kannst deine Aktion verwenden, um mit deinem geweihten Atem einen magischen Orb mit einem Durchmesser von 6 m an deiner Position zu erschaffen. Der Orb fliegt sofort ungehindert durch alle Hindernisse hindurch, bis sein Mittelpunkt 18 m von dir entfernt ist und er sich daraufhin auflöst. Verbündete Kreaturen, die der Orb berührt, erhalten temporäre Trefferpunkte in Höhe von 2W6 + deinem Übungsbonus. Du kannst dieses Merkmal einmal pro lange Rast einsetzen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Metallische Drachenblütige (Rasse: Drachensicht)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/metallische_drachenblütige/charaktere.png",
    "beschreibung": [
      "Erben der Metallischen · Kinder des Guten",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Drachensicht."
    ],
    "besonderheiten": [
      {
        "name": "Metallische Abstammung",
        "beschreibung": "Du hast einen metallischen Drachenvorfahren. Wähle eine Abstammung: Bronze (Blitz), Gold (Feuer), Kupfer (Säure), Messing (Feuer) oder Silber (Kälte). Sie bestimmt die Schadensart deiner anderen Merkmale."
      },
      {
        "name": "Odemwaffe",
        "beschreibung": "Wenn du die Angreifen-Aktion ausführst, kannst du einen Angriff durch deinen Odem ersetzen: einen 4,5 m langen Kegel magischer Energie. Betroffene Kreaturen müssen einen Geschicklichkeitsrettungswurf ablegen (SG = 8 + KON-Mod + Übungsbonus). Misserfolg: 1W10 Schaden der Abstammungsart; Erfolg: halber Schaden. Steigt um 1W10 auf Stufe 5, 11 und 17. Anwendungen pro langer Rast: gleich deinem Übungsbonus."
      },
      {
        "name": "Drakonische Resistenz",
        "beschreibung": "Du bist gegen die Schadensart resistent, die mit deiner metallischen Abstammung assoziiert ist."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Metallische Odemwaffe (ab Stufe 5)",
        "beschreibung": "Als Bonusaktion atmest du magische Energie in einem 4,5 m langen Kegel aus (SG = 8 + KON-Mod + Übungsbonus). Wähle einen der beiden Effekte. Einmal pro langer Rast."
      },
      {
        "name": "Angeborenes Talent: Drachensicht",
        "beschreibung": "Deine drakonischen Vorfahren verleihen dir eine verbesserte Sehkraft und ein Auge für Reichtum. Du erhältst Übung in Weisheit (Wahrnehmung). Wenn du bereits geübt in Wahrnehmung bist, erhältst du Expertise in dieser Fertigkeit. Du erhältst einen Vorteil bei Intelligenz (Nachforschung), um Münzen und andere wertvolle Gegenstände aufzuspüren, und du erhältst einen Vorteil bei Attributswürfen, um den Wert eines Gegenstandes zu bestimmen. Du kannst im Dunkeln bis zu einer Reichweite von 20 Metern sehen und bis zu einer Reichweite von 3 Metern blind sehen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Minotauren (Rasse: Angeborene Wut)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/minotauren/charaktere.png",
    "beschreibung": [
      "Kinder des Labyrinths · Unaufhaltsame Krieger",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Angeborene Wut."
    ],
    "besonderheiten": [
      {
        "name": "Blutiger Ansturm",
        "beschreibung": "Nachdem du in deinem Zug die Spurt-Aktion ausgeführt und mindestens 6 m zurückgelegt hast, kannst du als Bonusaktion einen Nahkampfangriff mit deinen Hörnern ausführen."
      },
      {
        "name": "Erinnerung des Labyrinths",
        "beschreibung": "Du weißt immer, wo Norden ist. Du bist bei Weisheit-(Überlebenskunst)-Würfen zum Navigieren oder Spurenfolgen im Vorteil."
      },
      {
        "name": "Hämmernde Hörner",
        "beschreibung": "Nachdem du bei der Angreifen-Aktion eine Kreatur mit einem Nahkampfangriff getroffen hast, kannst du als Bonusaktion versuchen, sie mit deinen Hörnern zu stoßen (max. 1 Größenstufe größer als du, innerhalb 1,5 m). STR-Rettungswurf gegen SG 8 + Übungsbonus + STR-Mod. oder Rückstoß bis 3 m."
      },
      {
        "name": "Hörner",
        "beschreibung": "Waffenlose Angriffe mit Hörnern: 1W6 + STR-Mod. Stichschaden."
      },
      {
        "name": "Angeborenes Talent: Angeborene Wut",
        "beschreibung": "Die Wut deines Volkes und der wilde Kampfstil haben dich geprägt. Wenn du einen Angriff mit einer Nahkampfwaffe mit Stärke ausführst, addierst du deinen Übungsbonus zum verursachten Schaden. Als Reaktion auf Hieb-, Stich- oder Wuchtschaden kannst du diesen Schaden um die Hälfte reduzieren. Du kannst dies nur dreimal tun, dann endet deine Wut. Deine Bewegungsrate erhöht sich um 1,5 Meter, wenn du keine schwere Rüstung trägst. Wenn du auf 0 Trefferpunkte fällst, aber nicht sofort stirbst, kannst du stattdessen auf 1 Trefferpunkt fallen. Unabhängig davon, ob du dich entscheidest, auf 1 Trefferpunkt zu fallen oder nicht, endet deine Wut. Wenn du in der Lage bist, Zauber zu wirken, kannst du sie während deines Zorns weder wirken noch dich darauf konzentrieren."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Minotauren (Rasse: Blut und Gemetzel)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/minotauren/charaktere.png",
    "beschreibung": [
      "Kinder des Labyrinths · Unaufhaltsame Krieger",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Blut und Gemetzel."
    ],
    "besonderheiten": [
      {
        "name": "Blutiger Ansturm",
        "beschreibung": "Nachdem du in deinem Zug die Spurt-Aktion ausgeführt und mindestens 6 m zurückgelegt hast, kannst du als Bonusaktion einen Nahkampfangriff mit deinen Hörnern ausführen."
      },
      {
        "name": "Erinnerung des Labyrinths",
        "beschreibung": "Du weißt immer, wo Norden ist. Du bist bei Weisheit-(Überlebenskunst)-Würfen zum Navigieren oder Spurenfolgen im Vorteil."
      },
      {
        "name": "Hämmernde Hörner",
        "beschreibung": "Nachdem du bei der Angreifen-Aktion eine Kreatur mit einem Nahkampfangriff getroffen hast, kannst du als Bonusaktion versuchen, sie mit deinen Hörnern zu stoßen (max. 1 Größenstufe größer als du, innerhalb 1,5 m). STR-Rettungswurf gegen SG 8 + Übungsbonus + STR-Mod. oder Rückstoß bis 3 m."
      },
      {
        "name": "Hörner",
        "beschreibung": "Waffenlose Angriffe mit Hörnern: 1W6 + STR-Mod. Stichschaden."
      },
      {
        "name": "Angeborenes Talent: Blut und Gemetzel",
        "beschreibung": "Du hast deine Hörner geschärft und gepflegt, um sie zu tödlichen, zerfetzenden Waffen zu machen. Wenn du einen Angriff mit deinen Hörnern ausführst, erhöht sich deine Reichweite für kritische Treffer um 1. Wenn du eine Kreatur mit deinen Hörnern triffst, kannst du sie aufschlitzen, sodass sie blutet. Das Ziel muss zu Beginn jeder seiner Runden einen Konstitutionsrettungswurf ablegen. Bei einem Fehlschlag erleidet die Kreatur Stichschaden in Höhe deines Übungsbonus. Der Zustand hält so lange an, bis die Kreatur Heilung erhält oder der Rettungswurf dreimal erfolgreich ist. Der Rettungswurf ist gleich 8 + dein Übungsbonus + dein Stärkemodifikator. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht, danach musst du eine lange Rast einlegen, bevor du sie erneut einsetzen kannst. Wenn du einen kritischen Treffer mit den Hörnern landest, erhältst du eine Anwendung dieser Fähigkeit zurück."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Minotauren (Rasse: Labyrinthbewohner)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/minotauren/charaktere.png",
    "beschreibung": [
      "Kinder des Labyrinths · Unaufhaltsame Krieger",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Labyrinthbewohner."
    ],
    "besonderheiten": [
      {
        "name": "Blutiger Ansturm",
        "beschreibung": "Nachdem du in deinem Zug die Spurt-Aktion ausgeführt und mindestens 6 m zurückgelegt hast, kannst du als Bonusaktion einen Nahkampfangriff mit deinen Hörnern ausführen."
      },
      {
        "name": "Erinnerung des Labyrinths",
        "beschreibung": "Du weißt immer, wo Norden ist. Du bist bei Weisheit-(Überlebenskunst)-Würfen zum Navigieren oder Spurenfolgen im Vorteil."
      },
      {
        "name": "Hämmernde Hörner",
        "beschreibung": "Nachdem du bei der Angreifen-Aktion eine Kreatur mit einem Nahkampfangriff getroffen hast, kannst du als Bonusaktion versuchen, sie mit deinen Hörnern zu stoßen (max. 1 Größenstufe größer als du, innerhalb 1,5 m). STR-Rettungswurf gegen SG 8 + Übungsbonus + STR-Mod. oder Rückstoß bis 3 m."
      },
      {
        "name": "Hörner",
        "beschreibung": "Waffenlose Angriffe mit Hörnern: 1W6 + STR-Mod. Stichschaden."
      },
      {
        "name": "Angeborenes Talent: Labyrinthbewohner",
        "beschreibung": "Deine Vorfahren lebten tief unter der Erde in labyrinthischen Höhlen ohne Licht. Du hast Dunkelsicht bis zu einer Reichweite von 41 m. Du bist im Vorteil bei allen Würfen, die du machst, um dich in dunklen, unterirdischen Räumen zurechtzufinden. Du kannst dir selbst die komplexesten Layouts von Labyrinthen, verwirrenden Höhlensystemen, Grundrissen von Gebäuden und ähnlichem genau einprägen. So findest du dich in solchen Umgebungen immer zurecht. Du lernst den Zauber Weg finden und kannst ihn einmal wirken. Danach musst du eine lange Rast einlegen, bevor du ihn erneut wirken kannst. Intelligenz, Weisheit oder Charisma ist dein Attributsmodifikator für diesen Zauber. Wähle das Attribut, wenn du dieses Talent wählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Orks (Rasse: Auserwählter von Gruumsh)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/orks/charaktere.png",
    "beschreibung": [
      "Kinder Gruumshs · Wächter und Krieger",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Auserwählter von Gruumsh."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Adrenalinrausch",
        "beschreibung": "Als Bonusaktion Spurt-Aktion ausführen + temporäre TP in Höhe des Übungsbonus erhalten. Anwendungen pro langer Rast entsprechen dem Übungsbonus."
      },
      {
        "name": "Starker Körperbau",
        "beschreibung": "Du zählst als eine Größenkategorie größer für Traglast sowie Schieben, Ziehen und Anheben."
      },
      {
        "name": "Unermüdliches Durchhaltevermögen",
        "beschreibung": "Wenn deine TP auf 0 sinken und du nicht direkt stirbst, behältst du stattdessen 1 TP. 1×/langer Rast."
      },
      {
        "name": "Angeborenes Talent: Auserwählter von Gruumsh",
        "beschreibung": "Durch deine Taten oder die deiner Vorfahren hast du dir die Gunst von Gruumsh erworben. Du erlernst den Zauber Vorahnung und kannst ihn nach Belieben wirken, ohne einen Zauberplatz zu verbrauchen. Du erlernst den Zauber Segnen und den Zauber Göttliche Gunst. Beide Zauber kannst du einmal wirken, ohne einen Zauberplatz zu verbrauchen. Wenn du auf diese Weise den Segensspruch wirkst, kannst du ihn außerdem als Bonusaktion wirken. Du erlangst die Fähigkeit, diese Zauber zu wirken, wieder, wenn du eine lange Rast beendest. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Orks (Rasse: Körper aus Stahl)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/orks/charaktere.png",
    "beschreibung": [
      "Kinder Gruumshs · Wächter und Krieger",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Körper aus Stahl."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Adrenalinrausch",
        "beschreibung": "Als Bonusaktion Spurt-Aktion ausführen + temporäre TP in Höhe des Übungsbonus erhalten. Anwendungen pro langer Rast entsprechen dem Übungsbonus."
      },
      {
        "name": "Starker Körperbau",
        "beschreibung": "Du zählst als eine Größenkategorie größer für Traglast sowie Schieben, Ziehen und Anheben."
      },
      {
        "name": "Unermüdliches Durchhaltevermögen",
        "beschreibung": "Wenn deine TP auf 0 sinken und du nicht direkt stirbst, behältst du stattdessen 1 TP. 1×/langer Rast."
      },
      {
        "name": "Angeborenes Talent: Körper aus Stahl",
        "beschreibung": "Deine orkische Blutlinie macht dich widerstandsfähiger als den durchschnittlichen Humanoiden. Du erhältst einen Vorteil bei Konstitutionsrettungswürfen. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Wenn ein Angreifer, den du sehen kannst, dich mit einem Angriff trifft, kannst du deine Reaktion nutzen, um den Hieb-, Stich- und Wuchtschaden dieses Angriffs zu halbieren."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Orks (Rasse: Unaufhaltsame Wildheit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/orks/charaktere.png",
    "beschreibung": [
      "Kinder Gruumshs · Wächter und Krieger",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Unaufhaltsame Wildheit."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Adrenalinrausch",
        "beschreibung": "Als Bonusaktion Spurt-Aktion ausführen + temporäre TP in Höhe des Übungsbonus erhalten. Anwendungen pro langer Rast entsprechen dem Übungsbonus."
      },
      {
        "name": "Starker Körperbau",
        "beschreibung": "Du zählst als eine Größenkategorie größer für Traglast sowie Schieben, Ziehen und Anheben."
      },
      {
        "name": "Unermüdliches Durchhaltevermögen",
        "beschreibung": "Wenn deine TP auf 0 sinken und du nicht direkt stirbst, behältst du stattdessen 1 TP. 1×/langer Rast."
      },
      {
        "name": "Angeborenes Talent: Unaufhaltsame Wildheit",
        "beschreibung": "Erweiterte kritische Trefferzone, Bonusangriff bei Krit/K.O. und doppelter Angriff statt Vorteil. Deine Reichweite für kritische Treffer wird um eins erhöht. Wenn du einen kritischen Treffer landest oder eine Kreatur mit einem Nahkampfwaffenangriff auf 0 Trefferpunkte reduzierst, kannst du einen weiteren Nahkampfwaffenangriff als Bonusaktion ausführen. Wenn dieser Angriff trifft, verursacht er zusätzlichen Schaden in Höhe deines Übungsbonus. Einmal pro Runde kannst du, wenn du bei einem Angriff im Vorteil bist, auf den Vorteil verzichten und stattdessen im Rahmen derselben Angriffsaktion zweimal angreifen. Du kannst dies so oft tun, wie es deinem Übungsbonus entspricht, und erhältst alle verbrauchten Einsätze nach einer langen Rast zurück."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Plasmoid (Rasse: Astrale Widerstandsfähigkeit)",
    "art": "Schlick",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift",
      "Säure"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Gestaltloser Wandler · Wesen ohne feste Form",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Astrale Widerstandsfähigkeit."
    ],
    "besonderheiten": [
      {
        "name": "Amorph",
        "beschreibung": "Du kannst dich durch einen Spalt quetschen, der nur 2,5 Zentimeter breit ist, sofern du nichts trägst oder bei dir hast. Außerdem hast du Vorteil auf Eigenschaftswürfe, die du machst, um einen Griff einzuleiten oder zu entkommen."
      },
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 18 Metern so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In dieser Dunkelheit nimmst du Farben nur als Grautöne wahr."
      },
      {
        "name": "Atem anhalten",
        "beschreibung": "Du kannst deinen Atem für 1 Stunde anhalten."
      },
      {
        "name": "Natürliche Widerstandsfähigkeit",
        "beschreibung": "Du hast Resistenz gegen Säure- und Giftschaden und hast Vorteil auf Rettungswürfe gegen Vergiftung."
      },
      {
        "name": "Selbst formen",
        "beschreibung": "Als Aktion kannst du deinen Körper umformen, um dir einen Kopf, einen oder zwei Arme, ein oder zwei Beine sowie behelfsmäßige Hände und Füße zu geben, oder du kannst zu einem gliederlosen Klumpen zurückkehren. Solange du eine menschenähnliche Form hast, kannst du Kleidung und Rüstung tragen, die für einen Humanoiden deiner Größe gemacht sind. Als Bonusaktion kannst du einen Pseudopod herausstrecken, der bis zu 15 Zentimeter breit und 3 Meter lang ist, oder ihn wieder einziehen. Als Teil dieser Bonusaktion kannst du damit einen Gegenstand handhaben, eine Tür oder einen Behälter öffnen oder schließen oder einen winzigen Gegenstand aufheben oder ablegen. Der Pseudopod kann nicht angreifen, magische Gegenstände aktivieren oder mehr als 4,5 Kilogramm heben."
      },
      {
        "name": "Angeborenes Talent: Astrale Widerstandsfähigkeit",
        "beschreibung": "Deine Exposition gegenüber dem Astralmeer hat dich gestählt und deinen Körper robuster gemacht. Dein Trefferpunktmaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du dieses Talent erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktmaximum um zusätzlich 1 Trefferpunkt. Du erhältst Resistenz gegen psychischen Schaden und Kraftschaden. Du erhältst Vorteil auf Konstitutionswürfe und Rettungswürfe."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Plasmoid (Rasse: Ausweichendes Formen)",
    "art": "Schlick",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift",
      "Säure"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Gestaltloser Wandler · Wesen ohne feste Form",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Ausweichendes Formen."
    ],
    "besonderheiten": [
      {
        "name": "Amorph",
        "beschreibung": "Du kannst dich durch einen Spalt quetschen, der nur 2,5 Zentimeter breit ist, sofern du nichts trägst oder bei dir hast. Außerdem hast du Vorteil auf Eigenschaftswürfe, die du machst, um einen Griff einzuleiten oder zu entkommen."
      },
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 18 Metern so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In dieser Dunkelheit nimmst du Farben nur als Grautöne wahr."
      },
      {
        "name": "Atem anhalten",
        "beschreibung": "Du kannst deinen Atem für 1 Stunde anhalten."
      },
      {
        "name": "Natürliche Widerstandsfähigkeit",
        "beschreibung": "Du hast Resistenz gegen Säure- und Giftschaden und hast Vorteil auf Rettungswürfe gegen Vergiftung."
      },
      {
        "name": "Selbst formen",
        "beschreibung": "Als Aktion kannst du deinen Körper umformen, um dir einen Kopf, einen oder zwei Arme, ein oder zwei Beine sowie behelfsmäßige Hände und Füße zu geben, oder du kannst zu einem gliederlosen Klumpen zurückkehren. Solange du eine menschenähnliche Form hast, kannst du Kleidung und Rüstung tragen, die für einen Humanoiden deiner Größe gemacht sind. Als Bonusaktion kannst du einen Pseudopod herausstrecken, der bis zu 15 Zentimeter breit und 3 Meter lang ist, oder ihn wieder einziehen. Als Teil dieser Bonusaktion kannst du damit einen Gegenstand handhaben, eine Tür oder einen Behälter öffnen oder schließen oder einen winzigen Gegenstand aufheben oder ablegen. Der Pseudopod kann nicht angreifen, magische Gegenstände aktivieren oder mehr als 4,5 Kilogramm heben."
      },
      {
        "name": "Angeborenes Talent: Ausweichendes Formen",
        "beschreibung": "Du hast gelernt, deinen Körper in Gefahrensituationen umzuformen, um Schaden besser zu vermeiden. Solange du keine Rüstung trägst, kannst du deine Rüstungsklasse als 13 + deinen Geschicklichkeitsmodifikator berechnen. Du kannst einen Schild verwenden und trotzdem von diesem Vorteil profitieren. Wenn eine Kreatur einen Angriffswurf gegen dich macht und dabei genau deine Rüstungsklasse würfelt, erleidest du nur halb so viel Schaden durch den Angriff. Wenn du einem Effekt ausgesetzt bist, der dir erlaubt, einen Geschicklichkeitsrettungswurf zu machen, um nur halb so viel Schaden zu erleiden, nimmst du nur halb so viel Schaden wie du sonst nehmen würdest. Wenn du Schaden erleidest, kannst du deine Reaktion verwenden, um dich bis zur Hälfte deiner Bewegungsgeschwindigkeit zu bewegen. Diese Bewegung provoziert keine Gelegenheitsangriffe."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Plasmoid (Rasse: Pseudopod-Krieger)",
    "art": "Schlick",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift",
      "Säure"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Gestaltloser Wandler · Wesen ohne feste Form",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Pseudopod-Krieger."
    ],
    "besonderheiten": [
      {
        "name": "Amorph",
        "beschreibung": "Du kannst dich durch einen Spalt quetschen, der nur 2,5 Zentimeter breit ist, sofern du nichts trägst oder bei dir hast. Außerdem hast du Vorteil auf Eigenschaftswürfe, die du machst, um einen Griff einzuleiten oder zu entkommen."
      },
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 18 Metern so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In dieser Dunkelheit nimmst du Farben nur als Grautöne wahr."
      },
      {
        "name": "Atem anhalten",
        "beschreibung": "Du kannst deinen Atem für 1 Stunde anhalten."
      },
      {
        "name": "Natürliche Widerstandsfähigkeit",
        "beschreibung": "Du hast Resistenz gegen Säure- und Giftschaden und hast Vorteil auf Rettungswürfe gegen Vergiftung."
      },
      {
        "name": "Selbst formen",
        "beschreibung": "Als Aktion kannst du deinen Körper umformen, um dir einen Kopf, einen oder zwei Arme, ein oder zwei Beine sowie behelfsmäßige Hände und Füße zu geben, oder du kannst zu einem gliederlosen Klumpen zurückkehren. Solange du eine menschenähnliche Form hast, kannst du Kleidung und Rüstung tragen, die für einen Humanoiden deiner Größe gemacht sind. Als Bonusaktion kannst du einen Pseudopod herausstrecken, der bis zu 15 Zentimeter breit und 3 Meter lang ist, oder ihn wieder einziehen. Als Teil dieser Bonusaktion kannst du damit einen Gegenstand handhaben, eine Tür oder einen Behälter öffnen oder schließen oder einen winzigen Gegenstand aufheben oder ablegen. Der Pseudopod kann nicht angreifen, magische Gegenstände aktivieren oder mehr als 4,5 Kilogramm heben."
      },
      {
        "name": "Angeborenes Talent: Pseudopod-Krieger",
        "beschreibung": "Du hast dich daran gewöhnt, deinen Pseudopod im Kampf einzusetzen, und verfügst damit über Fähigkeiten, die für andere deiner Rasse untypisch sind. Mit deinem Rassenzug „Selbst formen“ kannst du deine Bonusaktion verwenden, um bis zu 2 Pseudopoden zu erschaffen, anstatt nur einen. Du kannst dieselbe Bonusaktion verwenden, um beide gleichzeitig zu steuern. Du kannst deine Pseudopoden für jede Aktion verwenden, nicht nur für die in deinem Zug „Selbst formen“ aufgeführten, einschließlich Angriffe mit einer Waffe, die sie halten. Wenn du mit dem Pseudopod angreifst, hast du eine Reichweite von 3 Metern. Deine Pseudopoden fungieren als natürliche Waffen. Sie haben eine Reichweite von 3 Metern und verwenden deinen Stärke- oder Geschicklichkeitsmodifikator und verursachen bei einem Treffer 1W4 Wuchtschaden plus deinen Stärke- oder Geschicklichkeitsmodifikator."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Ratatosk (Rasse)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens chaotisch gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m",
      "Klettern": "3 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Kosmische Trickster · Klatschboten der Weltebenen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen."
    ],
    "besonderheiten": [
      {
        "name": "Geertes Himmelswesen",
        "beschreibung": "Du stammst von Himmelswesen ab, bist aber stark mit der sterblichen Welt verbunden. Obwohl du ein Humanoid bist, bist du dennoch anfällig für Effekte, die Himmelswesen betreffen."
      },
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 18 Metern so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In der Dunkelheit kannst du keine Farben unterscheiden, nur Grautöne."
      },
      {
        "name": "Scharfe Stoßzähne",
        "beschreibung": "Deine scharfen Stoßzähne sind natürliche Waffen für unbewaffnete Angriffe. Bei einem Treffer verursachen sie 1 Stichschaden + 1W4 psychischen Schaden."
      },
      {
        "name": "Telepathisch",
        "beschreibung": "Du kannst telepathisch mit jeder Kreatur sprechen, die du sehen kannst und die sich innerhalb einer Anzahl von Fuß befindet, die dem Zehnfachen deiner Stufe entspricht. Du musst keine gemeinsame Sprache teilen, aber die Kreatur muss mindestens eine Sprache verstehen."
      },
      {
        "name": "— Ekorre: Segen von Yggdrasil",
        "beschreibung": "Du kennst die Zaubertricks Nachricht und Boshafter Spott. Ab Stufe 5: Spiegelbild einmal pro langer Rast. Charisma ist deine Zaubermerkmalcharakteristik."
      },
      {
        "name": "— Ekorre: Winzige Waffen",
        "beschreibung": "Du kannst Waffen mit der Leicht- oder Finesse-Eigenschaft normal führen. Andere Waffen werden als zweihändig behandelt und du hast Nachteil auf Angriffe damit. Schwere Waffen kannst du nicht verwenden."
      },
      {
        "name": "— Tradvakt: Kriegsgeplapper",
        "beschreibung": "Als Bonusaktion muss eine Nicht-Ratatosk-Kreatur innerhalb von 9 Metern, die dich hören kann, einen Charisma-Rettungswurf (SG 8 + Übungsbonus + KON-Mod) bestehen oder bis zum Beginn deines nächsten Zuges Nachteil auf Angriffswürfe haben. Einmal pro kurzer oder langer Rast."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Sahuagin (Rasse)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Rechtschaffen böse",
    "cr": 0,
    "xp": 10,
    "rk": 12,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "12 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Teufel der Tiefsee · Herrschaft unter den Wellen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen."
    ],
    "besonderheiten": [
      {
        "name": "Überlegene Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 36 Metern so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In der Dunkelheit kannst du keine Farben unterscheiden, nur Grautöne."
      },
      {
        "name": "Blutrausch",
        "beschreibung": "Als Bonusaktion verfällst du bis zum Ende deines Zuges in einen Blutrausch. Dabei hast du Vorteil auf Nahkampfangriffswürfe gegen jede Kreatur, die nicht alle TP hat. KON-Mod Nutzungen pro langer Rast (mind. 1)."
      },
      {
        "name": "Begrenzte Amphibienfähigkeit",
        "beschreibung": "Du kannst Luft und Wasser atmen, musst jedoch mindestens alle 4 Stunden untergetaucht sein — sonst beginnst du zu ersticken."
      },
      {
        "name": "Natürliche Rüstung",
        "beschreibung": "Deine RK beträgt 12 + GES-Mod (wenn du keine Rüstung trägst)."
      },
      {
        "name": "Natürliche Angriffe",
        "beschreibung": "Du hast Übung mit deinen Klauen (1W4 Hiebschaden) und deinem Biss (1W4 Stichschaden)."
      },
      {
        "name": "Haitelempathie",
        "beschreibung": "Du kannst einem Hai innerhalb von 36 Metern magisch durch begrenzte Telepathie einfache Befehle übermitteln (z. B. „komm her\", „verteidige mich\", „greif an\")."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Satyrn (Rasse: Geborener Barde)",
    "art": "Feenwesen",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "13,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/satyrn/charaktere.png",
    "beschreibung": [
      "Verkörperung der Ausgelassenheit · Wanderer aus dem Feenwild",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Geborener Barde."
    ],
    "besonderheiten": [
      {
        "name": "Heitere Sprünge",
        "beschreibung": "Bei Hoch- oder Weitsprüngen (auch aus dem Stand) würfelst du 1W8 und addierst Ergebnis × 0,3 zur gesprungenen Distanz. Die Zusatzdistanz kostet keine Bewegung."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Du bist bei Rettungswürfen gegen Zaubern im Vorteil."
      },
      {
        "name": "Wiederkäuer",
        "beschreibung": "Du kannst mit einer Ration Nahrung dreimal so lange auskommen."
      },
      {
        "name": "Rammbock",
        "beschreibung": "Waffenlose Angriffe mit spektralen Hörnern: 1W6 + STR-Mod. Wuchtschaden."
      },
      {
        "name": "Unterhalter",
        "beschreibung": "Du bist in den Fertigkeiten Auftreten und Überzeugen sowie im Umgang mit einem Musikinstrument deiner Wahl geübt."
      },
      {
        "name": "Angeborenes Talent: Geborener Barde",
        "beschreibung": "Du bist ein geborener Barde — da du immer Zeit zum Feiern hast, entfaltest du dein volles musisches Potential. Du erlernst einen Zauber der 1. Stufe deiner Wahl aus der Liste der Bardenzauber, der nicht zu deiner Anzahl an bekannten/vorbereiteten Zaubern hinzugezählt wird. Du kannst diesen Zauber einmal pro kurzer Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Wenn du bereits Bardische Inspiration als Klassenmerkmal besitzt oder erlangst, gewährt dies mehr Aufladungen von Bardischer Inspiration in Höhe deines Übungsbonus; andernfalls erhältst du Aufladungen von Bardischer Inspiration in Höhe deines Übungsbonus, die W6 sind. Du erhältst verbrauchte Einsätze zurück, wenn du eine lange Rast beendest. Wähle als Bonusaktion in deinem Zug eine andere Kreatur als dich selbst, die sich im Umkreis von 15 m um dich befindet und dich hören kann. Diese Kreatur erhält einen Würfel für Bardische Inspiration. Einmal innerhalb der nächsten 10 Minuten kann diese Kreatur den Würfel werfen und die gewürfelte Zahl zu einem Attributswurf, einem Angriffswurf oder einem Rettungswurf addieren. Die Kreatur kann warten, bis sie den Würfel geworfen hat, bevor sie sich entscheidet, den bardischen Inspirationswürfel zu benutzen, muss sich aber entscheiden, bevor der DM sagt, ob der Wurf erfolgreich war oder nicht. Sobald der Würfel für die bardische Inspiration gewürfelt wurde, ist er verloren. Eine Kreatur kann immer nur einen Würfel für bardische Inspiration haben."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Satyrn (Rasse: Göttlicher Gesang)",
    "art": "Feenwesen",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "13,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/satyrn/charaktere.png",
    "beschreibung": [
      "Verkörperung der Ausgelassenheit · Wanderer aus dem Feenwild",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Göttlicher Gesang."
    ],
    "besonderheiten": [
      {
        "name": "Heitere Sprünge",
        "beschreibung": "Bei Hoch- oder Weitsprüngen (auch aus dem Stand) würfelst du 1W8 und addierst Ergebnis × 0,3 zur gesprungenen Distanz. Die Zusatzdistanz kostet keine Bewegung."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Du bist bei Rettungswürfen gegen Zaubern im Vorteil."
      },
      {
        "name": "Wiederkäuer",
        "beschreibung": "Du kannst mit einer Ration Nahrung dreimal so lange auskommen."
      },
      {
        "name": "Rammbock",
        "beschreibung": "Waffenlose Angriffe mit spektralen Hörnern: 1W6 + STR-Mod. Wuchtschaden."
      },
      {
        "name": "Unterhalter",
        "beschreibung": "Du bist in den Fertigkeiten Auftreten und Überzeugen sowie im Umgang mit einem Musikinstrument deiner Wahl geübt."
      },
      {
        "name": "Angeborenes Talent: Göttlicher Gesang",
        "beschreibung": "Du besitzt eine außergewöhnliche Fähigkeit, die Magie der Götter in deine Gelagen einzufangen. Verzaubern: Eine Kreatur im Umkreis von 15 m, die dich hören kann, muss einen Weisheitsrettungswurf bestehen (SG 8 + Übungsbonus + Intelligenz-, Weisheits- oder Charismamodifikator) oder 1 Minute lang von dir bezaubert sein. Wenn du oder einer deiner Gefährten der Kreatur Schaden zufügt, kann sie den Rettungswurf wiederholen. Bei Erfolg oder Effektende ist die Kreatur für 24 Stunden immun gegen dieses Merkmal. Erschrecken: Eine Kreatur im Umkreis von 15 m, die dich hören kann, muss denselben Rettungswurf bestehen oder 1 Minute lang von dir verängstigt sein. Am Ende jeder ihrer Runden kann sie den Rettungswurf wiederholen. Bei Erfolg oder Effektende ist die Kreatur für 24 Stunden immun gegen dieses Merkmal. Schlaflied: Eine Kreatur innerhalb von 15 m, die dich hören kann, schläft ein und ist 1 Minute lang bewusstlos. Der Effekt endet, wenn die Kreatur Schaden erleidet oder jemand eine Aktion aufwendet, um sie zu wecken. Sobald sie erwacht, ist sie für 24 Stunden immun gegen dieses Merkmal."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Satyrn (Rasse: Übernatürliche Ignoranz)",
    "art": "Feenwesen",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "13,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/satyrn/charaktere.png",
    "beschreibung": [
      "Verkörperung der Ausgelassenheit · Wanderer aus dem Feenwild",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Übernatürliche Ignoranz."
    ],
    "besonderheiten": [
      {
        "name": "Heitere Sprünge",
        "beschreibung": "Bei Hoch- oder Weitsprüngen (auch aus dem Stand) würfelst du 1W8 und addierst Ergebnis × 0,3 zur gesprungenen Distanz. Die Zusatzdistanz kostet keine Bewegung."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Du bist bei Rettungswürfen gegen Zaubern im Vorteil."
      },
      {
        "name": "Wiederkäuer",
        "beschreibung": "Du kannst mit einer Ration Nahrung dreimal so lange auskommen."
      },
      {
        "name": "Rammbock",
        "beschreibung": "Waffenlose Angriffe mit spektralen Hörnern: 1W6 + STR-Mod. Wuchtschaden."
      },
      {
        "name": "Unterhalter",
        "beschreibung": "Du bist in den Fertigkeiten Auftreten und Überzeugen sowie im Umgang mit einem Musikinstrument deiner Wahl geübt."
      },
      {
        "name": "Angeborenes Talent: Übernatürliche Ignoranz",
        "beschreibung": "Addiere 1W4 bei Würfen mit Vorteil oder hebe Nachteile auf — jeweils bis zu Übungsbonus-mal pro langer Rast. Wenn du einen Attributswurf, einen Angriffswurf oder einen Rettungswurf machst und bei dem Wurf einen Vorteil hast, kannst du 1W4 zu dem Ergebnis addieren. Du kannst die W4 addieren, nachdem du den Wurf gesehen hast, aber bevor du das Ergebnis kennst. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht; alle verbrauchten Einsätze kehren nach einer langen Rast zurück. Wenn du einen Attributswurf, einen Angriffswurf oder einen Rettungswurf machst und bei dem Wurf einen Nachteil hast, kannst du den Nachteil für diesen Wurf aufheben. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht; alle verbrauchten Einsätze kehren nach einer langen Rast zurück."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Schattenfeen (Rasse: Elfische Treffsicherheit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Nekrotisch"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/schattenfeen/charaktere.png",
    "beschreibung": [
      "Zwischen Leben und Tod · Diener der Rabenkönigin",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Elfische Treffsicherheit."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Nekrotische Resistenz",
        "beschreibung": "Du bist gegen nekrotischen Schaden resistent."
      },
      {
        "name": "Segen der Rabenkönigin",
        "beschreibung": "Als Bonusaktion teleportierst du dich bis zu 9 m an eine freie Stelle, die du siehst. Anwendungen pro langer Rast: gleich deinem Übungsbonus. Ab Stufe 3: Du erhältst bis zum Beginn deines nächsten Zuges Resistenz gegen alle Schadensarten. Während dieser Zeit erscheinst du geisterhaft und durchsichtig."
      },
      {
        "name": "Angeborenes Talent: Elfische Treffsicherheit",
        "beschreibung": "Die legendäre Treffsicherheit der Elfen mit Präzisionsangriffen ist nun auch dein. Jedes Mal, wenn du mit einem Angriff triffst, der kein kritischer Treffer ist, erhöht sich deine Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis du einen kritischen Treffer landest, einen Angriff verfehlst oder den Kampf betrittst oder verlässt; danach wird er auf deinen Standardwert zurückgesetzt. Immer wenn du bei einem Angriffswurf einen Vorteil hast, kannst du einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Schattenfeen (Rasse: Magie der Schattengeister)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Nekrotisch"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/schattenfeen/charaktere.png",
    "beschreibung": [
      "Zwischen Leben und Tod · Diener der Rabenkönigin",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Magie der Schattengeister."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Nekrotische Resistenz",
        "beschreibung": "Du bist gegen nekrotischen Schaden resistent."
      },
      {
        "name": "Segen der Rabenkönigin",
        "beschreibung": "Als Bonusaktion teleportierst du dich bis zu 9 m an eine freie Stelle, die du siehst. Anwendungen pro langer Rast: gleich deinem Übungsbonus. Ab Stufe 3: Du erhältst bis zum Beginn deines nächsten Zuges Resistenz gegen alle Schadensarten. Während dieser Zeit erscheinst du geisterhaft und durchsichtig."
      },
      {
        "name": "Angeborenes Talent: Magie der Schattengeister",
        "beschreibung": "Du bist mehr mit der Magie des Schattenreichs vertraut als andere deiner Art. Deine Eigenschaft Segen der Rabenkönigin lädt sich jetzt bei einer kurzen oder langen Rast wieder auf. Außerdem kannst du, wenn du keine Nutzung mehr hast, einen Zauberplatz der Stufe 1 oder höher ausgeben, um diese Fähigkeit erneut zu benutzen. Du erlernst die Zauber Unsichtbarkeit und Verderben. Du kannst jeden dieser Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Modifikator bei diesen Zaubern ist Weisheit, Charisma oder Intelligenz. Wähle das Attribut, wenn du dieses Talent auswählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Schattenfeen (Rasse: Schattenblütig)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Nekrotisch"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/schattenfeen/charaktere.png",
    "beschreibung": [
      "Zwischen Leben und Tod · Diener der Rabenkönigin",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Schattenblütig."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Nekrotische Resistenz",
        "beschreibung": "Du bist gegen nekrotischen Schaden resistent."
      },
      {
        "name": "Segen der Rabenkönigin",
        "beschreibung": "Als Bonusaktion teleportierst du dich bis zu 9 m an eine freie Stelle, die du siehst. Anwendungen pro langer Rast: gleich deinem Übungsbonus. Ab Stufe 3: Du erhältst bis zum Beginn deines nächsten Zuges Resistenz gegen alle Schadensarten. Während dieser Zeit erscheinst du geisterhaft und durchsichtig."
      },
      {
        "name": "Angeborenes Talent: Schattenblütig",
        "beschreibung": "Die starke Schattenreichsmagie in dir verleiht dir außergewöhnliche Zähigkeit und Widerstand gegen nekrotischen und Giftschaden. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Du erhältst Resistenz gegen nekrotischen Schaden. Würdest du Schaden dieser Art erleiden, kannst du deine Reaktion verwenden, um einem Schadenswurf zu widerstehen. Du erhältst keinen Schaden durch diesen Schadenswurf. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht, und du erhältst alle verbrauchten Einsätze zurück, wenn du eine lange Rast beendest. Diese Eigenschaft kann in bestimmten Situationen, nach Ermessen des Spielleiters, fehlschlagen. Du erhältst Resistenz gegen Giftschaden. Du hast einen Vorteil bei Rettungswürfen gegen Vergiftung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Schattengoblin (Rasse)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Neutral bis gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Kinder der Schattenfe · Listige Täuscher des Zwielichts",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 18 Metern so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In der Dunkelheit kannst du keine Farben unterscheiden, nur Grautöne."
      },
      {
        "name": "Scharfer Verstand",
        "beschreibung": "Du hast Übung in den Fertigkeiten Täuschung und Menschenkenntnis."
      },
      {
        "name": "Schattentarnung",
        "beschreibung": "Du hast Vorteil auf Geschicklichkeit-(Heimlichkeit)-Würfe, die darauf abzielen, dich in schwachem Licht oder Dunkelheit zu verstecken."
      },
      {
        "name": "Böser Blick",
        "beschreibung": "Als Aktion führst du eine Kombination aus unhöflichen Gesten und Geräuschen aus. Eine Kreatur in 9 m, die dich hören und sehen kann, muss einen CHA-Rettungswurf (SG 8 + CHA-Mod + Übungsbonus) bestehen oder hat Nachteil auf den nächsten Eigenschaftswurf, Angriffswurf oder Rettungswurf vor Beginn deines nächsten Zuges."
      },
      {
        "name": "Sonnenlichtsensitivität",
        "beschreibung": "Du hast Nachteil auf Angriffswürfe und Weisheit-(Wahrnehmungs)-Würfe, die auf Sicht beruhen, wenn du, dein Ziel oder das Wahrgenommene sich in direktem Sonnenlicht befindet."
      },
      {
        "name": "Unholdsegen",
        "beschreibung": "Du hast Vorteil auf Rettungswürfe gegen Bezauberung und Magie kann dich nicht einschläfern."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Schattenmenschen (Rasse)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Neutral bis chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Kälte"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": null,
    "beschreibung": [
      "Umbralfüllte Menschen · Wechselbälger des Schattens",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Du kannst in schwachem Licht innerhalb von 18 Metern so sehen, als wäre es helles Licht, und in Dunkelheit so, als wäre es schwaches Licht. In der Dunkelheit kannst du keine Farben unterscheiden, nur Grautöne."
      },
      {
        "name": "Dunkle Infusion",
        "beschreibung": "Du hast Resistenz gegen Kälteschaden."
      },
      {
        "name": "Verblassen",
        "beschreibung": "Während du vollkommen still stehst, kannst du eine Aktion nutzen, um unsichtbar zu werden. Du wirst wieder sichtbar, wenn du dich bewegst oder eine Aktion ausführst. Du kannst diese Fähigkeit so oft pro Tag nutzen, wie dein Übungsbonus beträgt."
      },
      {
        "name": "— Beschenkte: Verfluchte Infusion",
        "beschreibung": "Zusätzlich zu Dunkler Infusion hast du Resistenz gegen nekrotischen Schaden."
      },
      {
        "name": "— Beschenkte: Schattengeschenk",
        "beschreibung": "Du hast einen Handel mit einer Schattenfe abgeschlossen. Wähle eine Option: (1) Übung+Vorteil in einer Fertigkeit, Nachteil in einer anderen. (2) Kein Essen/Atmen nötig, 4h für lange Rast, aber eine permanente Erschöpfungsstufe. (3) Halbe Bewegungsrate, dafür Flug-/Schwimm-/Klettergeschwindigkeit gleich halber Basis. (4) +6 auf einen Attributwert (max 20), -2 auf zwei andere. (5) TP = KON-Wert bei Dämmerung täglich, aber keine Trefferwürfel in kurzen Rasten."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Stämmige (Rasse: Großzügiges Glück)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/stämmige/charaktere.png",
    "beschreibung": [
      "Robuste Hüter · Starkherzen des Südens",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Großzügiges Glück."
    ],
    "besonderheiten": [
      {
        "name": "Halblingsglück",
        "beschreibung": "Würfelst du bei einem Angriffs-, Attributs- oder Rettungswurf eine 1, darfst du den Wurf wiederholen und musst das zweite Ergebnis verwenden."
      },
      {
        "name": "Tapferkeit",
        "beschreibung": "Du bist im Vorteil bei Rettungswürfen, um den Zustand Verängstigt zu vermeiden."
      },
      {
        "name": "Halblingsgewandheit",
        "beschreibung": "Du kannst dich durch Bereiche bewegen, die von Kreaturen eingenommen werden, die eine Größenkategorie größer sind als du."
      },
      {
        "name": "Unempfindlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen Gift im Vorteil und besitzt eine Resistenz gegen Schaden durch Gifte."
      },
      {
        "name": "Angeborenes Talent: Großzügiges Glück",
        "beschreibung": "Du hast gelernt, das außergewöhnliche Glück deines Volkes dir und deinen Gefährten zu verleihen. Du hast einen Vorrat an Glückspunkten, der deinem Übungsbonus entspricht. Jedes Mal, wenn du oder ein Verbündeter in einem Umkreis von 9 m einen Angriffswurf, Attributswurf oder Rettungswurf macht, kannst du einen Glückspunkt ausgeben, um einen zusätzlichen Würfelwurf zu machen. Du kannst wählen, ob du einen Glückspunkt ausgeben möchtest, nachdem du gewürfelt hast, aber bevor das Ergebnis feststeht. Du entscheidest, welcher der beiden Würfel verwendet wird. Wenn du einen Vorteil oder Nachteil hast, führe ihn zuerst aus. Du erhältst die Hälfte deiner maximalen Glückspunkte (abgerundet) zurück, wenn du eine lange Rast beendest."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Stämmige (Rasse: Hockenstärke)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/stämmige/charaktere.png",
    "beschreibung": [
      "Robuste Hüter · Starkherzen des Südens",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Halblingsglück",
        "beschreibung": "Würfelst du bei einem Angriffs-, Attributs- oder Rettungswurf eine 1, darfst du den Wurf wiederholen und musst das zweite Ergebnis verwenden."
      },
      {
        "name": "Tapferkeit",
        "beschreibung": "Du bist im Vorteil bei Rettungswürfen, um den Zustand Verängstigt zu vermeiden."
      },
      {
        "name": "Halblingsgewandheit",
        "beschreibung": "Du kannst dich durch Bereiche bewegen, die von Kreaturen eingenommen werden, die eine Größenkategorie größer sind als du."
      },
      {
        "name": "Unempfindlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen Gift im Vorteil und besitzt eine Resistenz gegen Schaden durch Gifte."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Stämmige (Rasse: Überragende Gastfreundschaft)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/stämmige/charaktere.png",
    "beschreibung": [
      "Robuste Hüter · Starkherzen des Südens",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Überragende Gastfreundschaft."
    ],
    "besonderheiten": [
      {
        "name": "Halblingsglück",
        "beschreibung": "Würfelst du bei einem Angriffs-, Attributs- oder Rettungswurf eine 1, darfst du den Wurf wiederholen und musst das zweite Ergebnis verwenden."
      },
      {
        "name": "Tapferkeit",
        "beschreibung": "Du bist im Vorteil bei Rettungswürfen, um den Zustand Verängstigt zu vermeiden."
      },
      {
        "name": "Halblingsgewandheit",
        "beschreibung": "Du kannst dich durch Bereiche bewegen, die von Kreaturen eingenommen werden, die eine Größenkategorie größer sind als du."
      },
      {
        "name": "Unempfindlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen Gift im Vorteil und besitzt eine Resistenz gegen Schaden durch Gifte."
      },
      {
        "name": "Angeborenes Talent: Überragende Gastfreundschaft",
        "beschreibung": "Kochtalent im Blut: Werkzeug-Übung, +1W4 auf Überzeugen/Kochen/Brauen, Nahrung reinigen nach Belieben und erhöhtes TP-Maximum. Du erhältst Übung in Kochwerkzeugen und Brauwerkzeugen. Wenn du einen Wurf auf Charisma (Überzeugen), Kochwerkzeugen oder Brauwerkzeugen ablegst, darfst du dem Wurf das Ergebnis von 1W4 hinzuaddieren. Du lernst den Zauber Nahrung und Wasser reinigen. Du kannst diesen Zauber nach Belieben wirken, ohne einen Zauberplatz zu verbrauchen. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tabaxi (Rasse: Anführer des Rudels)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Klettern": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tabaxi/charaktere.png",
    "beschreibung": [
      "Kinder des Katzenfürsten · Hüter des Sternenklans",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Anführer des Rudels."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Katzenkrallen",
        "beschreibung": "Waffenlose Angriffe mit Klauen: 1W6 + STR-Mod. Hiebschaden. Kletterbewegung entspricht der Schrittbewegung."
      },
      {
        "name": "Katzentalent",
        "beschreibung": "Du bist in Wahrnehmung und Heimlichkeit geübt."
      },
      {
        "name": "Katzenwendigkeit",
        "beschreibung": "Wenn du dich im Kampf in deinem Zug bewegst, kannst du deine Bewegungsrate bis zum Ende des Zuges verdoppeln. Du kannst dies erst erneut nutzen, wenn du dich in einem Zug nicht bewegt hast."
      },
      {
        "name": "Angeborenes Talent: Anführer des Rudels",
        "beschreibung": "Deine anziehende Persönlichkeit lässt katzenartige Kreaturen sich nach dir richten. Du hast einen Vorteil bei Weisheitswürfen (Umgang mit Tieren) und Charismawürfen, die du mit katzenartigen Kreaturen durchführst. Du erhältst Übung in einer Fertigkeit oder ein Werkzeug deiner Wahl. Du erlernst die Zauber Vertrauten finden und Mit Tieren sprechen, und du kannst beide nach Belieben ohne materielle Komponenten wirken. Wenn du die Zauber nicht von einer anderen Quelle erhältst, kannst du nur einen Katzen-Vertrauten erschaffen, und du kannst nur mit Katzen kommunizieren. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tabaxi (Rasse: Katzenanmut)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Klettern": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tabaxi/charaktere.png",
    "beschreibung": [
      "Kinder des Katzenfürsten · Hüter des Sternenklans",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Katzenanmut."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Katzenkrallen",
        "beschreibung": "Waffenlose Angriffe mit Klauen: 1W6 + STR-Mod. Hiebschaden. Kletterbewegung entspricht der Schrittbewegung."
      },
      {
        "name": "Katzentalent",
        "beschreibung": "Du bist in Wahrnehmung und Heimlichkeit geübt."
      },
      {
        "name": "Katzenwendigkeit",
        "beschreibung": "Wenn du dich im Kampf in deinem Zug bewegst, kannst du deine Bewegungsrate bis zum Ende des Zuges verdoppeln. Du kannst dies erst erneut nutzen, wenn du dich in einem Zug nicht bewegt hast."
      },
      {
        "name": "Angeborenes Talent: Katzenanmut",
        "beschreibung": "Deine unglaublichen Reflexe und deine Agilität verbessern sich weiter. Du erlangst Übung in Geschicklichkeit (Heimlichkeit). Du kannst deine Eigenschaft Katzenwendigkeit zweimal einsetzen, bevor du dich in einem deiner Züge 0 m bewegen musst, um die Eigenschaft erneut einzusetzen. Du kannst diese Fähigkeit jedoch nur einmal pro Zug einsetzen, wenn du dich bewegst. Du erleidest keinen Schaden, wenn du 9 m oder weniger fällst. Wenn du dennoch Sturzschaden erleidest, kannst du ihn um einen Betrag in Höhe deiner halben Stufe reduzieren. Wenn du deine Bewegung in einem Umkreis von 1,5 m um eine feindliche Kreatur beendest, nachdem du Katzenwendigkeit eingesetzt hast, kannst du dich als Bonusaktion auf sie stürzen. Führe einen unbewaffneten Nahkampfangriff aus; bei einem Treffer wird das Ziel zu Boden geworfen und von dir gepackt."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tabaxi (Rasse: Neun Leben)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Klettern": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tabaxi/charaktere.png",
    "beschreibung": [
      "Kinder des Katzenfürsten · Hüter des Sternenklans",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Neun Leben."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Katzenkrallen",
        "beschreibung": "Waffenlose Angriffe mit Klauen: 1W6 + STR-Mod. Hiebschaden. Kletterbewegung entspricht der Schrittbewegung."
      },
      {
        "name": "Katzentalent",
        "beschreibung": "Du bist in Wahrnehmung und Heimlichkeit geübt."
      },
      {
        "name": "Katzenwendigkeit",
        "beschreibung": "Wenn du dich im Kampf in deinem Zug bewegst, kannst du deine Bewegungsrate bis zum Ende des Zuges verdoppeln. Du kannst dies erst erneut nutzen, wenn du dich in einem Zug nicht bewegt hast."
      },
      {
        "name": "Angeborenes Talent: Neun Leben",
        "beschreibung": "Dein katzenhaftes Glück erlaubt es dir, Schläge zu überleben, die dich sonst bewusstlos machen würden. Du hast einen Vorteil bei Todesrettungswürfen. Wenn du auf 0 Trefferpunkte reduziert, aber nicht getötet wirst, wirf 1W20. Bei einer 9 oder niedriger fällst du stattdessen auf einen Trefferpunkt und erhältst temporäre Trefferpunkte in Höhe deiner Stufe. Wird durch einen kritischen Treffer auf 0 TP reduziert, funktioniert diese Eigenschaft nicht. Jedes Mal, wenn du sie erfolgreich einsetzt, sinkt der Schwellenwert um 1 (du musst dann eine 8 oder niedriger würfeln, dann eine 7 usw.). Nach einer langen Rast wird der Zähler zurückgesetzt."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tiefengnome (Rasse: Hockenstärke)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tiefengnome/charaktere.png",
    "beschreibung": [
      "Graue Gnome · Kinder der tiefen Erde",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 36 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Gnomische Gerissenheit",
        "beschreibung": "Du bist im Vorteil bei allen Rettungswürfen gegen Magie, sofern sie auf Intelligenz, Weisheit oder Charisma basieren."
      },
      {
        "name": "Gabe der Tiefengnome",
        "beschreibung": "Ab Stufe 3: Selbstverkleidung 1×/langer Rast. Ab Stufe 5: Unauffindbarkeit 1×/langer Rast (keine Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden."
      },
      {
        "name": "Tiefengnom-Tarnung",
        "beschreibung": "Du bist bei Geschicklichkeit-(Heimlichkeit)-Würfen im Vorteil. Anwendungen pro langer Rast entsprechen deinem Übungsbonus."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tiefengnome (Rasse: Leichtes Verschwinden)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tiefengnome/charaktere.png",
    "beschreibung": [
      "Graue Gnome · Kinder der tiefen Erde",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Leichtes Verschwinden."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 36 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Gnomische Gerissenheit",
        "beschreibung": "Du bist im Vorteil bei allen Rettungswürfen gegen Magie, sofern sie auf Intelligenz, Weisheit oder Charisma basieren."
      },
      {
        "name": "Gabe der Tiefengnome",
        "beschreibung": "Ab Stufe 3: Selbstverkleidung 1×/langer Rast. Ab Stufe 5: Unauffindbarkeit 1×/langer Rast (keine Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden."
      },
      {
        "name": "Tiefengnom-Tarnung",
        "beschreibung": "Du bist bei Geschicklichkeit-(Heimlichkeit)-Würfen im Vorteil. Anwendungen pro langer Rast entsprechen deinem Übungsbonus."
      },
      {
        "name": "Angeborenes Talent: Leichtes Verschwinden",
        "beschreibung": "Du hast einen magischen Trick gelernt, um zu verschwinden, wenn du Schaden erleidest. Du erhältst Übung in Geschicklichkeit (Heimlichkeit). Wenn du bereits in Heimlichkeit geübt bist, erhältst du Expertise. Unmittelbar nachdem du Schaden erlitten hast, kannst du deine Reaktion einsetzen, um bis zum Ende deines nächsten Zugs auf magische Weise unsichtbar zu werden. Du kannst dies so oft tun, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer kurzen oder langen Rast wieder zur Verfügung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tiefengnome (Rasse: Meister der Tiefengnom-Magie)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 36 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tiefengnome/charaktere.png",
    "beschreibung": [
      "Graue Gnome · Kinder der tiefen Erde",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Meister der Tiefengnom-Magie."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 36 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Gnomische Gerissenheit",
        "beschreibung": "Du bist im Vorteil bei allen Rettungswürfen gegen Magie, sofern sie auf Intelligenz, Weisheit oder Charisma basieren."
      },
      {
        "name": "Gabe der Tiefengnome",
        "beschreibung": "Ab Stufe 3: Selbstverkleidung 1×/langer Rast. Ab Stufe 5: Unauffindbarkeit 1×/langer Rast (keine Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden."
      },
      {
        "name": "Tiefengnom-Tarnung",
        "beschreibung": "Du bist bei Geschicklichkeit-(Heimlichkeit)-Würfen im Vorteil. Anwendungen pro langer Rast entsprechen deinem Übungsbonus."
      },
      {
        "name": "Angeborenes Talent: Meister der Tiefengnom-Magie",
        "beschreibung": "Du hast die angeborene Fähigkeit deiner Vorfahren gemeistert. Du kannst nach Belieben den Zauber Unauffindbarkeit auf dich wirken, ohne materielle Komponenten zu benötigen. Außerdem kannst du jeden der folgenden Zauber einmal mit dieser Fähigkeit wirken: Blindheit/Taubheit, Verschwimmen und Selbstverkleidung. Du erlangst die Fähigkeit, diese Zauber zu wirken, wieder, wenn du eine lange Rast beendet hast. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tieflinge (Rasse: Höllenverbundenheit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Feuer"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tieflinge/charaktere.png",
    "beschreibung": [
      "Träger einer uralten Schuld · Erben des infernalischen Blutes",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Höllenverbundenheit."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Höllische Resistenz",
        "beschreibung": "Du besitzt eine Resistenz gegen Feuerschaden."
      },
      {
        "name": "Infernalisches Erbe",
        "beschreibung": "Du erhältst Zauber und eine Attributserhöhung je nach Blutlinie. Zaubermerkmal: Charisma. Stufenplan: Zaubertrick (1), Stufe-2-Zauber (3), weiterer Zauber (5) — je 1×/langer Rast oder mit Zauberplätzen."
      },
      {
        "name": "Blutlinien-Talente",
        "beschreibung": "Je nach gewählter Blutlinie steht dir eines dieser Talente zur Verfügung:"
      },
      {
        "name": "Angeborenes Talent: Höllenverbundenheit",
        "beschreibung": "Du hast eine besondere Verbundenheit zu der Macht der Hölle. Wenn du Schaden verursachst, der dieser Schadensart entspricht, kannst du deinen Übungsbonus zum Schaden des Angriffs addieren. Immer wenn du einen Zauber der 1. Stufe oder höher wirkst, der diese Schadensart verursacht, kannst du bewirken, dass dich eine Minute lang ein elementarer Mantel der Schadensart umhüllt. Der Mantel schadet weder dir noch deinem Besitz und verbreitet helles Licht bis zu 9 m sowie schwaches Licht für weitere 9 m. Solange der Mantel vorhanden ist, erleidet jede Kreatur im Umkreis von 1,5 m, die dich mit einem Nahkampfangriff trifft, Schaden dieser Art in Höhe deines Übungsbonus. Außerdem erleidet jede Kreatur, die dich packt oder von dir gepackt wird, zu Beginn jeder ihrer Runden Schaden dieser Art in Höhe deines Übungsbonus."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tieflinge (Rasse: Meister der Höllenmagie)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens chaotisch-böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Feuer"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tieflinge/charaktere.png",
    "beschreibung": [
      "Träger einer uralten Schuld · Erben des infernalischen Blutes",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Meister der Höllenmagie."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Höllische Resistenz",
        "beschreibung": "Du besitzt eine Resistenz gegen Feuerschaden."
      },
      {
        "name": "Infernalisches Erbe",
        "beschreibung": "Du erhältst Zauber und eine Attributserhöhung je nach Blutlinie. Zaubermerkmal: Charisma. Stufenplan: Zaubertrick (1), Stufe-2-Zauber (3), weiterer Zauber (5) — je 1×/langer Rast oder mit Zauberplätzen."
      },
      {
        "name": "Blutlinien-Talente",
        "beschreibung": "Je nach gewählter Blutlinie steht dir eines dieser Talente zur Verfügung:"
      },
      {
        "name": "Angeborenes Talent: Meister der Höllenmagie",
        "beschreibung": "Dein einzigartiges Erbe hat dir eine verstärkte Magie verliehen, die für einen normalen Tiefling untypisch ist. Du erlernst einen Zaubertrick deiner Wahl, der Schaden der deiner Abstammung zugeordneten Schadensart verursacht (siehe Tabelle). Dein Attributsmodifikator ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen). Du erlernst den Zauber Verwünschen. Du kannst ihn einmal ohne Zauberplatz wirken; danach benötigst du eine lange Rast. Dein Attributsmodifikator ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen). Du erlernst einen Zauber der 1. Stufe deiner Wahl, der Schaden der deiner Abstammung zugeordneten Schadensart verursacht (siehe Tabelle). Du kannst ihn einmal ohne Zauberplatz wirken; danach benötigst du eine lange Rast. Dein Attributsmodifikator ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen). Wenn du Schaden der deiner Abstammung zugeordneten Schadensart verursachst, kannst du die betroffene Kreatur zu einem Charismarettungswurf zwingen (SG 8 + Übungsbonus + Attributsmodifikator). Bei einem Fehlschlag wird die Kreatur bis zum Ende deines nächsten Zuges von dir verängstigt oder bezaubert (deine Wahl). Du kannst dies so oft tun, wie es deinem Übungsbonus entspricht; danach benötigst du eine lange Rast."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tortels (Rasse: Erbe der Drachenschildkröte)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 17,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tortels/charaktere.png",
    "beschreibung": [
      "Panzerträger der Welt · Wanderer mit Haus auf dem Rücken",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Erbe der Drachenschildkröte."
    ],
    "besonderheiten": [
      {
        "name": "Atem anhalten",
        "beschreibung": "Du kannst bis zu eine Stunde lang den Atem anhalten."
      },
      {
        "name": "Intuition der Natur",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Heilkunde, Heimlichkeit, Mit Tieren umgehen, Naturkunde, Überlebenskunst oder Wahrnehmung."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Klauen",
        "beschreibung": "Waffenlose Angriffe mit Klauen: 1W6 + STR-Mod. Hiebschaden."
      },
      {
        "name": "Natürliche Rüstung",
        "beschreibung": "Basis-RK 17 (kein GES-Mod). Du kannst keine leichten, mittelschweren oder schweren Rüstungen tragen. Schild-Boni gelten normal."
      },
      {
        "name": "Panzerverteidigung",
        "beschreibung": "Als Aktion in den Panzer zurückziehen: +4 RK, Vorteil bei STR- und KON-Rettungswürfen. Im Panzer: Zustand Liegend, Bewegung 0, Nachteil auf GES-Rettungswürfe, keine Reaktionen, einzige Aktion = Bonusaktion zum Herauskommen."
      },
      {
        "name": "Angeborenes Talent: Erbe der Drachenschildkröte",
        "beschreibung": "Deine Abstammung enthält die Essenz einer Drachenschildkröte, oder du hast den Segen einer solchen erhalten. Du erhältst eine Schwimmgeschwindigkeit, die deiner Schrittgeschwindigkeit entspricht. Du erhältst Resistenz gegen Feuerschaden. Wenn du die Angriffsaktion ausführst, kannst du einen deiner Angriffe durch das Ausatmen einer Wolke aus kochendem Dampf in einem Kegel von 7,5 m ersetzen. Jede Kreatur im Bereich muss einen Rettungswurf auf Geschicklichkeit machen (SG 8 + Konstitutionsmodifikator + Übungsbonus). Bei einem Fehlschlag erleidet die Kreatur 2W10 Feuerschaden, bei Erfolg die Hälfte. Unterwasser zu sein gewährt keine Resistenz gegen diesen Schaden. Der Schaden erhöht sich auf 3W10 auf Stufe 5, 4W10 auf Stufe 11 und 5W10 auf Stufe 17. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tortels (Rasse: Meister des Panzers)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 17,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tortels/charaktere.png",
    "beschreibung": [
      "Panzerträger der Welt · Wanderer mit Haus auf dem Rücken",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Meister des Panzers."
    ],
    "besonderheiten": [
      {
        "name": "Atem anhalten",
        "beschreibung": "Du kannst bis zu eine Stunde lang den Atem anhalten."
      },
      {
        "name": "Intuition der Natur",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Heilkunde, Heimlichkeit, Mit Tieren umgehen, Naturkunde, Überlebenskunst oder Wahrnehmung."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Klauen",
        "beschreibung": "Waffenlose Angriffe mit Klauen: 1W6 + STR-Mod. Hiebschaden."
      },
      {
        "name": "Natürliche Rüstung",
        "beschreibung": "Basis-RK 17 (kein GES-Mod). Du kannst keine leichten, mittelschweren oder schweren Rüstungen tragen. Schild-Boni gelten normal."
      },
      {
        "name": "Panzerverteidigung",
        "beschreibung": "Als Aktion in den Panzer zurückziehen: +4 RK, Vorteil bei STR- und KON-Rettungswürfen. Im Panzer: Zustand Liegend, Bewegung 0, Nachteil auf GES-Rettungswürfe, keine Reaktionen, einzige Aktion = Bonusaktion zum Herauskommen."
      },
      {
        "name": "Angeborenes Talent: Meister des Panzers",
        "beschreibung": "Du hast den Einsatz deines Panzers im Kampf perfektioniert, um dich vor Angriffen zu schützen. Du kannst nun bis zu +2 zu deiner natürlichen Rüstungsklasse hinzufügen, abhängig von deinem Geschicklichkeitsmodifikator. Wenn du von einem Angriff getroffen wirst, kannst du deine Reaktion nutzen, um deine Eigenschaft Panzerverteidigung zu aktivieren, wodurch der Angriff möglicherweise fehlschlägt. Du kannst Panzerverteidigung auch als Bonusaktion einsetzen. Während du dich zurückziehst, haben Nahkämpfer keinen Vorteil gegen dich wegen der Bodenlage, und du darfst Reaktionen einsetzen — wenn du das tust, kommst du jedoch aus deinem Panzer heraus."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tortels (Rasse: Naturmagie der Tortels)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 17,
    "ruestungstyp": "natürliche Rüstung",
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tortels/charaktere.png",
    "beschreibung": [
      "Panzerträger der Welt · Wanderer mit Haus auf dem Rücken",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Naturmagie der Tortels."
    ],
    "besonderheiten": [
      {
        "name": "Atem anhalten",
        "beschreibung": "Du kannst bis zu eine Stunde lang den Atem anhalten."
      },
      {
        "name": "Intuition der Natur",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Heilkunde, Heimlichkeit, Mit Tieren umgehen, Naturkunde, Überlebenskunst oder Wahrnehmung."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Klauen",
        "beschreibung": "Waffenlose Angriffe mit Klauen: 1W6 + STR-Mod. Hiebschaden."
      },
      {
        "name": "Natürliche Rüstung",
        "beschreibung": "Basis-RK 17 (kein GES-Mod). Du kannst keine leichten, mittelschweren oder schweren Rüstungen tragen. Schild-Boni gelten normal."
      },
      {
        "name": "Panzerverteidigung",
        "beschreibung": "Als Aktion in den Panzer zurückziehen: +4 RK, Vorteil bei STR- und KON-Rettungswürfen. Im Panzer: Zustand Liegend, Bewegung 0, Nachteil auf GES-Rettungswürfe, keine Reaktionen, einzige Aktion = Bonusaktion zum Herauskommen."
      },
      {
        "name": "Angeborenes Talent: Naturmagie der Tortels",
        "beschreibung": "Du bist mehr auf die natürliche Magie der Welt eingestimmt als die typischen Magier deiner Rasse. Du erlernst den Zaubertrick Druidenkunst und einen weiteren Druidenzaubertrick deiner Wahl. Du erlernst den Zauber Verstricken und einen weiteren Druidenzauber der 1. Stufe deiner Wahl. Du kannst jeden dieser Zauber einmal wirken, ohne einen Zauberplatz zu verbrauchen; nach einer langen Rast kannst du dies erneut tun. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen). Wenn du deine Eigenschaft Panzerverteidigung einsetzt, erhältst du Vorteil bei Konstitutionswürfen zur Aufrechterhaltung der Konzentration. Außerdem kannst du während Panzerverteidigung deine Bonusaktion oder Aktion nutzen, um einen aktiven Zauber zu verändern oder aufrechtzuerhalten."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tritons (Rasse: Kind der Strömungen)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Kälte"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tritons/charaktere.png",
    "beschreibung": [
      "Wächter der Tiefen · Hüter der Wasseroberfläche",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Kind der Strömungen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Amphibisch",
        "beschreibung": "Du kannst Luft und Wasser atmen."
      },
      {
        "name": "Gesandter des Meeres",
        "beschreibung": "Du kannst einfache Ideen an alle Tiere, Elementare und Monstrositäten mit Schwimmbewegungsrate vermitteln. Sie können dich verstehen — du sie jedoch nicht automatisch."
      },
      {
        "name": "Luft und Wasser kontrollieren",
        "beschreibung": "Zaubertrick: Nebelwolke. Stufe 3: Windstoß (1×/langer Rast oder mit Zauberplatz). Stufe 5: Auf Wasser gehen (1×/langer Rast oder mit Zauberplatz). Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Wächter der Tiefen",
        "beschreibung": "Du bist gegen Kälteschaden resistent."
      },
      {
        "name": "Angeborenes Talent: Kind der Strömungen",
        "beschreibung": "Du wurdest im Wasser geboren und hast gelernt, es zu nutzen, um deine Vitalität zu steigern. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erlangst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Würdest du Kälteschaden erleiden, kannst du deine Reaktion verwenden, um einen Schadenswurf zu widerstehen und keinen Schaden durch diesen Schadenswurf zu erleiden. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Diese Eigenschaft kann nach Ermessen des Spielleiters fehlschlagen. Du erhältst unter Wasser einen Vorteil auf Stärke- und Geschicklichkeitswürfe. Wenn du eine ganze kurze Rast unter Wasser verbringst, darfst du eine Anzahl von Trefferwürfeln in Höhe deines Konstitutionsmodifikators (mindestens 1) so behandeln, als hättest du ihr Maximum gewürfelt."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tritons (Rasse: Magie der Ozeane)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Kälte"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tritons/charaktere.png",
    "beschreibung": [
      "Wächter der Tiefen · Hüter der Wasseroberfläche",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Magie der Ozeane."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Amphibisch",
        "beschreibung": "Du kannst Luft und Wasser atmen."
      },
      {
        "name": "Gesandter des Meeres",
        "beschreibung": "Du kannst einfache Ideen an alle Tiere, Elementare und Monstrositäten mit Schwimmbewegungsrate vermitteln. Sie können dich verstehen — du sie jedoch nicht automatisch."
      },
      {
        "name": "Luft und Wasser kontrollieren",
        "beschreibung": "Zaubertrick: Nebelwolke. Stufe 3: Windstoß (1×/langer Rast oder mit Zauberplatz). Stufe 5: Auf Wasser gehen (1×/langer Rast oder mit Zauberplatz). Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Wächter der Tiefen",
        "beschreibung": "Du bist gegen Kälteschaden resistent."
      },
      {
        "name": "Angeborenes Talent: Magie der Ozeane",
        "beschreibung": "Du bist mehr auf die Magie der Elementarebene des Wassers eingestimmt als andere deiner Art. Du erlernst den Zaubertrick Wasser formen. Du erlernst die Zauber Wasser erschaffen oder zerstören und Schutzwind. Du kannst jeden Zauber auf seiner niedrigsten Stufe einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Immer wenn du deinen Zug vollständig unter Wasser beginnst, erhältst du vorübergehend Trefferpunkte in Höhe deiner Stufe. Diese temporären Trefferpunkte gehen verloren, wenn du deinen Zug nicht unter Wasser beendest."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Tritons (Rasse: Speer des Ozeans)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens rechtschaffen-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m",
      "Schwimmen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Kälte"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/tritons/charaktere.png",
    "beschreibung": [
      "Wächter der Tiefen · Hüter der Wasseroberfläche",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Speer des Ozeans."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Amphibisch",
        "beschreibung": "Du kannst Luft und Wasser atmen."
      },
      {
        "name": "Gesandter des Meeres",
        "beschreibung": "Du kannst einfache Ideen an alle Tiere, Elementare und Monstrositäten mit Schwimmbewegungsrate vermitteln. Sie können dich verstehen — du sie jedoch nicht automatisch."
      },
      {
        "name": "Luft und Wasser kontrollieren",
        "beschreibung": "Zaubertrick: Nebelwolke. Stufe 3: Windstoß (1×/langer Rast oder mit Zauberplatz). Stufe 5: Auf Wasser gehen (1×/langer Rast oder mit Zauberplatz). Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Wächter der Tiefen",
        "beschreibung": "Du bist gegen Kälteschaden resistent."
      },
      {
        "name": "Angeborenes Talent: Speer des Ozeans",
        "beschreibung": "Meistere den Dreizack mit Finesse, Bonus-RK, Übungsbonus auf Schaden, Bonusangriff und Vorteil unter Wasser. Du hast Übung im Umgang mit dem Dreizack. Wenn du einen Dreizack ausgerüstet hast, erhältst du einen Bonus von +1 auf deine Rüstungsklasse. Dreizacke, die du schwingst, erhalten die Eigenschaft Finesse. Du kannst deinen Übungsbonus auf den Schaden addieren, den du mit Dreizacken verursachst. Wenn du die Angriffsaktion ausführst und mit einem Dreizack angreifst, kannst du eine Bonusaktion nutzen, um einen weiteren Angriff mit dieser Waffe auszuführen. Du hast einen Vorteil bei Angriffswürfen, wenn du und das Ziel, das du angreifst, vollständig unter Wasser sind."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Waldelfen (Rasse: Baumverkleidung)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "10,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/waldelfen/charaktere.png",
    "beschreibung": [
      "Kinder des Waldes · Hüter der grünen Wildnis",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Baumverkleidung."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Elfische Waffenvertrautheit",
        "beschreibung": "Du bist geübt im Umgang mit Langschwertern, Kurzschwertern, Langbögen und Kurzbögen."
      },
      {
        "name": "Deckmantel der Wildnis",
        "beschreibung": "Du kannst versuchen, dich zu verstecken, wenn du nur von Blattwerk, starkem Regen, fallendem Schnee, Nebel oder anderen natürlichen Phänomenen leicht verschleiert wirst."
      },
      {
        "name": "Angeborenes Talent: Baumverkleidung",
        "beschreibung": "Es gibt nur wenige, die so sehr mit dem Wald im Einklang sind wie du. Du lernst Druidisch, die Geheimsprache der Druiden. Du lernst den Zauber Rindenhaut und kannst ihn nach Belieben wirken. Du erlernst die Zauber Verstricken und Dornenwuchs. Du kannst jeden dieser Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut aus, wenn du dieses Talent auswählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Waldelfen (Rasse: Elfische Treffsicherheit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "10,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/waldelfen/charaktere.png",
    "beschreibung": [
      "Kinder des Waldes · Hüter der grünen Wildnis",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Elfische Treffsicherheit."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Elfische Waffenvertrautheit",
        "beschreibung": "Du bist geübt im Umgang mit Langschwertern, Kurzschwertern, Langbögen und Kurzbögen."
      },
      {
        "name": "Deckmantel der Wildnis",
        "beschreibung": "Du kannst versuchen, dich zu verstecken, wenn du nur von Blattwerk, starkem Regen, fallendem Schnee, Nebel oder anderen natürlichen Phänomenen leicht verschleiert wirst."
      },
      {
        "name": "Angeborenes Talent: Elfische Treffsicherheit",
        "beschreibung": "Die legendäre Treffsicherheit der Elfen mit Präzisionsangriffen ist nun auch dein. Jedes Mal, wenn du mit einem Angriff triffst, der kein kritischer Treffer ist, erhöht sich deine Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis du einen kritischen Treffer landest, einen Angriff verfehlst oder den Kampf betrittst oder verlässt; danach wird er auf deinen Standardwert zurückgesetzt. Immer wenn du bei einem Angriffswurf einen Vorteil hast, kannst du einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Waldelfen (Rasse: Waldmagie)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "10,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/waldelfen/charaktere.png",
    "beschreibung": [
      "Kinder des Waldes · Hüter der grünen Wildnis",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Waldmagie."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Geschärfte Sinne",
        "beschreibung": "Du bist in der Fertigkeit Wahrnehmung geübt."
      },
      {
        "name": "Feenblut",
        "beschreibung": "Du hast Vorteil bei Rettungswürfen gegen Bezauberungen und bist immun gegen Schlafzauber."
      },
      {
        "name": "Trance",
        "beschreibung": "Du musst nicht schlafen. 4 Stunden Meditation ersetzen 8 Stunden Schlaf. Beim Beenden der Trance kannst du zwei neue Geübtheiten mit Waffe oder Werkzeug wählen (bis zur nächsten langen Rast)."
      },
      {
        "name": "Elfische Waffenvertrautheit",
        "beschreibung": "Du bist geübt im Umgang mit Langschwertern, Kurzschwertern, Langbögen und Kurzbögen."
      },
      {
        "name": "Deckmantel der Wildnis",
        "beschreibung": "Du kannst versuchen, dich zu verstecken, wenn du nur von Blattwerk, starkem Regen, fallendem Schnee, Nebel oder anderen natürlichen Phänomenen leicht verschleiert wirst."
      },
      {
        "name": "Angeborenes Talent: Waldmagie",
        "beschreibung": "Erlerne einen Druidenzaubertrick, Lange Schritte und Spurloses Gehen (1/langer Rast) und verdopple die Dauer positiver Zauber. Du erlernst einen Zaubertrick der Druiden-Zauberliste deiner Wahl. Du erlernst außerdem die Zauber Lange Schritte und Spurloses Gehen, die du jeweils einmal wirken kannst, ohne einen Zauberplatz zu verbrauchen; diese Fähigkeit kehrt nach einer langen Rast zurück. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Wenn du einen Zauber sprichst, der einen positiven Effekt auf dein Ziel anwendet und die Dauer des Effekts 1 Minute oder länger beträgt, kannst du die Dauer für diesen Zauber verdoppeln. Nachdem du diese Fähigkeit eingesetzt hast, kannst du sie erst nach einer kurzen oder langen Rast erneut nutzen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Waldgnome (Rasse: Freund des Waldes)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens neutral-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/waldgnome/charaktere.png",
    "beschreibung": [
      "Kinder des Waldes · Freunde der kleinen Tiere",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Freund des Waldes."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Gnomische Gerissenheit",
        "beschreibung": "Du bist im Vorteil bei allen Rettungswürfen gegen Magie, sofern sie auf Intelligenz, Weisheit oder Charisma basieren."
      },
      {
        "name": "Geborene Illusionisten",
        "beschreibung": "Du beherrschst den Zaubertrick Einfache Illusion. Das Zaubermerkmal dafür ist Intelligenz."
      },
      {
        "name": "Tierflüsterer",
        "beschreibung": "Durch Laute und Gesten kannst du einfache Gedanken mit kleinen oder winzigen Tieren austauschen."
      },
      {
        "name": "Angeborenes Talent: Freund des Waldes",
        "beschreibung": "Die Bewohner des Waldes und sogar die Bäume selbst sind dir wohlgesonnen. Du erhältst einen Bonus auf deine Initiative in Höhe deines Übungsbonus. Wenn du dich in einem Wald aufhältst, erhältst du einen Vorteil auf Weisheitswürfe. Du lernst die Zauber Mit Tieren sprechen und Mit Pflanzen sprechen und kannst sie nach Belieben wirken, ohne materielle Komponenten zu verbrauchen. Dein Modifikator für diese Zauber ist Weisheit, Intelligenz oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Waldgnome (Rasse: Hockenstärke)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens neutral-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/waldgnome/charaktere.png",
    "beschreibung": [
      "Kinder des Waldes · Freunde der kleinen Tiere",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Hockenstärke."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Gnomische Gerissenheit",
        "beschreibung": "Du bist im Vorteil bei allen Rettungswürfen gegen Magie, sofern sie auf Intelligenz, Weisheit oder Charisma basieren."
      },
      {
        "name": "Geborene Illusionisten",
        "beschreibung": "Du beherrschst den Zaubertrick Einfache Illusion. Das Zaubermerkmal dafür ist Intelligenz."
      },
      {
        "name": "Tierflüsterer",
        "beschreibung": "Durch Laute und Gesten kannst du einfache Gedanken mit kleinen oder winzigen Tieren austauschen."
      },
      {
        "name": "Angeborenes Talent: Hockenstärke",
        "beschreibung": "Du bist für deine Rasse ungewöhnlich wendig. Erhöhe deine Bewegungsrate um 1,5 m. Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl). Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest. Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Waldgnome (Rasse: Leichtes Verschwinden)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Klein",
    "gesinnung": "Meistens neutral-gut",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "7,5 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/waldgnome/charaktere.png",
    "beschreibung": [
      "Kinder des Waldes · Freunde der kleinen Tiere",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Leichtes Verschwinden."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Gnomische Gerissenheit",
        "beschreibung": "Du bist im Vorteil bei allen Rettungswürfen gegen Magie, sofern sie auf Intelligenz, Weisheit oder Charisma basieren."
      },
      {
        "name": "Geborene Illusionisten",
        "beschreibung": "Du beherrschst den Zaubertrick Einfache Illusion. Das Zaubermerkmal dafür ist Intelligenz."
      },
      {
        "name": "Tierflüsterer",
        "beschreibung": "Durch Laute und Gesten kannst du einfache Gedanken mit kleinen oder winzigen Tieren austauschen."
      },
      {
        "name": "Angeborenes Talent: Leichtes Verschwinden",
        "beschreibung": "Du hast einen magischen Trick gelernt, um zu verschwinden, wenn du Schaden erleidest. Du erhältst Übung in Geschicklichkeit (Heimlichkeit). Wenn du bereits in Heimlichkeit geübt bist, erhältst du Expertise. Unmittelbar nachdem du Schaden erlitten hast, kannst du deine Reaktion einsetzen, um bis zum Ende deines nächsten Zugs auf magische Weise unsichtbar zu werden. Du kannst dies so oft tun, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer kurzen oder langen Rast wieder zur Verfügung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Animalische Allianz)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Animalische Allianz."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Animalische Allianz",
        "beschreibung": "Deine Verbundenheit zu deinem Erbe lässt die Grenzen zwischen deinem menschlichen und tierischen Ich verschwimmen. Du erhältst Übung in Weisheit (Mit Tieren umgehen). Wenn du in dieser Fertigkeit bereits geübt bist, erlangst du Expertise. Du erlernst den Zauber Mit Tieren sprechen und kannst ihn einmal pro kurzer oder langer Rast wirken, ohne einen Zauberplatz zu verbrauchen. Du kannst dein Merkmal \"Wandeln\" ein zusätzliches Mal einsetzen. Verbrauchte Anwendungen stehen dir nach einer langen Rast wieder zur Verfügung."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Bebende Erde)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Bebende Erde."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Bebende Erde",
        "beschreibung": "Mit deinen kuhähnlichen Fähigkeiten hast du neue Möglichkeiten entdeckt, den Kampf zu beeinflussen. Wenn eine Kreatur, die du sehen kannst, in einem 1,5m Radius um dich steht und einen Angriff ausführen will, kannst du deine Reaktion verwenden, um diese mit einem gezielten Stampfen aus dem Gleichgewicht zu bringen. Die betroffene Kreatur führt diesen Angriffswurf nun mit Nachteil durch. Die Anzahl der Verwendungen entspricht deinem Übungsbonus und du erhältst verbrauchte Anwendungen nach einer langen Rast zurück."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Entwickelte Gliedmaßen)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Entwickelte Gliedmaßen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Entwickelte Gliedmaßen",
        "beschreibung": "Das arachnidische Erbe wirkt sich in dir stärker aus als bei anderen Angehörigen deiner Rasse. Du kannst wann immer du möchtest deine Spinnenbeine wachsen lassen und musst dafür nicht das Merkmal Zitterkriecher einsetzen. Deine Spinnenbeine sind weiterentwickelt und können komplexere Aufgaben erledigen, wie zum Beispiel Instrumente spielen, kochen und leichte Waffen tragen und werfen (bis zu 1 Pfund pro Bein)."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Extrem dickes Fell)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Extrem dickes Fell."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Extrem dickes Fell",
        "beschreibung": "Dein Fell ist weitaus dicker und robuster als bei anderen Wandlern deiner Art. Wenn du deine Bonusaktion zum Verwandeln einsetzt, erhöht sich die Anzahl der temporären Trefferpunkte, die du erhältst, um weitere 1W6. Dies erhöht sich mit steigender Stufe: auf 2W6 bei Stufe 4, auf 3W6 bei Stufe 8, auf 4W6 bei Stufe 12, auf 5W6 bei Stufe 16 und auf 6W6 bei Stufe 20. Der Bonus auf deine Rüstungsklasse während der Verwandlung erhöht sich um die Hälfte deines Übungsbonus (abrunden). Während du verwandelt bist, erhältst du Resistenz gegen Wucht-, Hieb- und Stichwaffenschaden von nichtmagischen Waffen, die nicht versilbert sind."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Giftige Rache)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Giftige Rache."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Giftige Rache",
        "beschreibung": "Dein reptilianisches Erbe verleiht dir robustere Schuppen und die Fähigkeit, einen giftigen Konter zu benutzen. Während du gewandelt bist, besitzt du eine Resistenz gegen Giftschaden. Während du gewandelt bist, besitzt du eine Immunität gegen Vergiftung. Wenn du dein Merkmal \"Harte Schuppen\" einsetzt und der Schaden durch einen Nahkampfwaffenangriff verursacht wurde, kannst du als Teil deiner Reaktion einen Konterangriff durchführen, der Giftschaden dem Würfelergebnis entsprechend verursacht."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Rasende Reißzähne)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Rasende Reißzähne."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Rasende Reißzähne",
        "beschreibung": "Du hast mehr von deinem tierischen Erbe in dir — deine Reißzähne sind länger und kräftiger. Während du verwandelt bist, fügen deine verlängerten Reißzähne zusätzlichen Stichschaden in Höhe deines Übungsbonus zu. Wenn du eine Kreatur mit deinen verlängerten Reißzähnen triffst, erhältst du temporäre Trefferpunkte in Höhe deines Übungsbonus. Diese stapeln sich mit vorhandenen temporären Trefferpunkten, es sei denn, du hast bereits temporäre TP, die deine Stufe übersteigen. Wenn du mit deinen verlängerten Reißzähnen angreifst, erhöht sich deine Reichweite für kritische Treffer um 1."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Schatzhorter)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Schatzhorter."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Schatzhorter",
        "beschreibung": "Das Korviden-Blut in dir verleiht dir Überzeugungskunst, den Zaubertrick Botschaft und Spürsinn für Schätze. Du erhältst Übung in Charisma (Überzeugen). Wenn du in Überzeugen bereits geübt bist, erlangst du Expertise. Du erlernst den Zaubertrick Botschaft. Du hast einen Vorteil bei Würfen auf Intelligenz (Nachforschung), wenn du nach Schätzen suchst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Selbsterhaltungstrieb)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Selbsterhaltungstrieb."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Selbsterhaltungstrieb",
        "beschreibung": "Dein Erbe schärft deinen Überlebensinstinkt: Stehe bei 0 TP mit 1 auf, greife mit Vorteil an und kämpfe umso härter, je knapper deine TP sind. Wenn du auf 0 Trefferpunkte reduziert, aber nicht sofort getötet wirst, kannst du stattdessen auf 1 Trefferpunkt fallen. Außerdem kannst du, wenn der Angreifer in Reichweite ist, deine Reaktion nutzen, um einen Gelegenheitsangriff gegen diese Kreatur mit Vorteil durchzuführen. Nachdem du diese Fähigkeit eingesetzt hast, musst du eine lange Rast einlegen, bevor du sie erneut einsetzen kannst. Wenn du unter 1/2 deiner gesamten Trefferpunkte bist (aufgerundet), kannst du deinen Übungsbonus zu deinen Schadenswürfen addieren. Wenn du unter 1/10 deiner gesamten Trefferpunkte bist (aufgerundet), kannst du alle deine Angriffe mit Vorteil ausführen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Territorialverhalten)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Territorialverhalten."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Territorialverhalten",
        "beschreibung": "Schütze dein Territorium mit einem skalierenden Reaktionsangriff beim Betreten deiner Reichweite und erhalte Übung in Kochwerkzeugen. Du erhältst Übung in Kochwerkzeugen. Wenn eine feindliche Kreatur, die du sehen kannst, während du gewandelt bist, mit ihrer Bewegung deine Nahkampfreichweite betritt, kannst du deine Reaktion verwenden, um sie mit deinen Hauern oder einem Kopfstoß anzugreifen. Führe einen waffenlosen Gelegenheitsangriff gegen die Kreatur aus; der Schaden beträgt 1W4 + deinem Stärkemodifikator an Wuchtschaden. Bei einem Treffer muss das Ziel einen Stärke- oder Geschicklichkeitsrettungswurf (Wahl des Ziels) bestehen oder wird 3 m zurückgestoßen und erhält den Zustand liegend. Der Schwierigkeitsgrad ergibt sich aus 8 + Übungsbonus + einem deiner Attributsmodifikatoren (Wahl beim Erwerb des Talents). Der Schadenswürfel skaliert: W8 auf Stufe 6, W10 auf Stufe 11, W12 auf Stufe 16. Du kannst dieses Merkmal so oft einsetzen, wie es deinem Übungsbonus entspricht; alle Aufladungen werden bei einer kurzen Rast wiederhergestellt."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Übernatürliche Geschwindigkeit)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Übernatürliche Geschwindigkeit."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Übernatürliche Geschwindigkeit",
        "beschreibung": "Skalierende Bewegungsrate im Wandelzustand, Gelegenheitsangriff beim Verfolgen und Kletter-/Schwimmgeschwindigkeit. Während du gewandelt bist, erhöht sich deine Bewegungsrate um zusätzliche 1,5 m. Mit steigender Stufe erhöht sich diese Bewegung weiter: auf 3 m auf Stufe 5, auf 4,5 m auf Stufe 11 und auf 6 m auf Stufe 17. Wenn du deine Reaktion einsetzt, um dich zu bewegen, nachdem eine Kreatur ihren Zug in einem Umkreis von 1,5 m von dir beendet hat, kannst du einen Gelegenheitsangriff gegen diese Kreatur ausführen, bevor du dich bewegst. Außerdem kannst du dich während der Verschiebung eine Anzahl von Metern bewegen, die deiner erhöhten Bewegungsrate entspricht, anstatt der üblichen 3 m. Während du gewandelt bist, erhältst du eine Kletter- und Schwimmgeschwindigkeit, die deiner Schrittgeschwindigkeit entspricht."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Urtümliche Instinkte des Jägers)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Urtümliche Instinkte des Jägers."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Urtümliche Instinkte des Jägers",
        "beschreibung": "Vorteil auf alle Weisheitswürfe im Wandelzustand, Würfelwiederholen bei Vorteilswürfen und verlängerte Wandlungsdauer. Während du verwandelt bist, erhältst du außerdem einen Vorteil auf alle Weisheitswürfe. Wenn du während deiner Verwandlung einen Angriff, einen Rettungswurf oder einen Attributswurf mit Vorteil würfelst, kannst du einen der Würfel wiederholen. Außerdem verlängert sich die Dauer deiner Wandlung um eine Anzahl von Minuten, die deinem Übungsbonus entspricht. Wenn du am Ende der Dauer noch temporäre Trefferpunkte aus deiner Wandlung hast, dauert deine Wandlung so lange, bis du diese temporären Trefferpunkte verlierst. Diese temporären Trefferpunkte gehen nach einer kurzen oder langen Rast verloren."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Warmer Wollmantel)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Warmer Wollmantel."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Warmer Wollmantel",
        "beschreibung": "Dicke Wolle verleiht Resistenz gegen nicht-magischen Waffenschaden im Wandelzustand, Temperaturausgleich und Vorteil in bergigem Gelände. Während du verwandelt bist, erhältst du Resistenz gegen Wucht-, Hieb- und Stichschaden von nicht-magischen Waffen, die nicht versilbert sind. Dein Wollmantel ist temperaturausgleichend. Du erleidest keinen Nachteil in extremer Hitze oder extremer Kälte. Du erleidest keinen Nachteil bei schwierigem Gelände in bergigen oder hügeligen Regionen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wandler (Rasse: Wunden lecken)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wandler/charaktere.png",
    "beschreibung": [
      "Werberührte · Erben der Lykanthropie",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Wunden lecken."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Tierische Instinkte",
        "beschreibung": "Du bist in einer Fertigkeit deiner Wahl geübt: Akrobatik, Athletik, Einschüchtern oder Überlebenskunst."
      },
      {
        "name": "Wandeln",
        "beschreibung": "Als Bonusaktion das tierischere Erscheinungsbild annehmen. Dauer: 1 Minute, bis du stirbst oder mit Bonusaktion abbrichst. Beim Wandeln: temporäre TP = 2× Übungsbonus. Anwendungen = Übungsbonus, alle nach langer Rast. Beim Wandeln erhältst du den Linie-spezifischen Vorzug (siehe Ahnen-Linie)."
      },
      {
        "name": "Ahnen-Attribute",
        "beschreibung": "Attributserhöhungen je nach Linie — siehe Tabelle der Ahnen-Linien."
      },
      {
        "name": "Angeborenes Talent: Wunden lecken",
        "beschreibung": "Regeneriere im Wandelzustand als Bonusaktion 1W10 + Stufe TP (1/langer Rast) und erhalte Einschüchtern-Übung oder Expertise. Während du gewandelt bist, kannst du als Bonusaktion 1W10 + deine Stufe an Trefferpunkten regenerieren. Du kannst dieses Merkmal nach einer langen Rast erneut anwenden. Du erhältst Übung in Charisma (Einschüchtern). Wenn du in Einschüchtern bereits geübt bist, erlangst du Expertise."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wasser-Genasi (Rasse: Verderbnis des Abgrunds)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Säure"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wasser-genasi/charaktere.png",
    "beschreibung": [
      "Erben der Mariden · Kinder der ewigen Wellen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Verderbnis des Abgrunds."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Säuresistenz",
        "beschreibung": "Du bist gegen Säureschaden resistent."
      },
      {
        "name": "Ruf der Welle",
        "beschreibung": "Du kennst den Zaubertrick Säurespritzer. Ab Stufe 3: Wasser erschaffen oder zerstören 1×/langer Rast. Ab Stufe 5: Auf Wasser gehen 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Amphibisch",
        "beschreibung": "Du kannst Luft und Wasser atmen."
      },
      {
        "name": "Angeborenes Talent: Verderbnis des Abgrunds",
        "beschreibung": "Abgründische Korruption verleiht Infernalisch, Resistenz gegen Psychoschaden, Furcht-Vorteil und zwei Abgrundzauber. Du lernst Infernalisch, die Sprache der Kreaturen des Abgrunds. Wenn du Infernalisch bereits kennst, kannst du stattdessen eine andere Sprache deiner Wahl erlernen. Du erhältst Resistenz gegen psychischen Schaden und einen Vorteil bei Schutzwürfen gegen Furcht. Du erlernst den Zauber Chaospfeil und den Zauber Tashas fürchterlicher Lachanfall. Du kannst diese Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wasser-Genasi (Rasse: Wächter der Wellen)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Säure"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wasser-genasi/charaktere.png",
    "beschreibung": [
      "Erben der Mariden · Kinder der ewigen Wellen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Wächter der Wellen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Säuresistenz",
        "beschreibung": "Du bist gegen Säureschaden resistent."
      },
      {
        "name": "Ruf der Welle",
        "beschreibung": "Du kennst den Zaubertrick Säurespritzer. Ab Stufe 3: Wasser erschaffen oder zerstören 1×/langer Rast. Ab Stufe 5: Auf Wasser gehen 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Amphibisch",
        "beschreibung": "Du kannst Luft und Wasser atmen."
      },
      {
        "name": "Angeborenes Talent: Wächter der Wellen",
        "beschreibung": "Nimm als Aktion eine wässrige Form an: temporäre TP, Unsichtbarkeit unter Wasser, Schwimmgeschwindigkeit ×2, Feuerschaden-Resistenz und mehr. Alle Ausrüstungsgegenstände können entweder mit deiner Form verschmelzen oder weiterhin benutzt werden. Getragene Rüstungen zählen zur Rüstungsklasse; verschmolzene Waffen können nicht benutzt werden. Du erhältst temporäre Trefferpunkte in Höhe deiner halben Stufe × Übungsbonus. Verlierst du diese temporären Trefferpunkte, endet die wässrige Form vorzeitig. Du kannst den Raum einer anderen Kreatur durchqueren, aber nicht dort enden. Du kannst durch Lücken von bis zu 2,5 cm Größe schwimmen. Du erhältst eine Schwimmgeschwindigkeit doppelt so hoch wie deine Schrittgeschwindigkeit. Während du vollständig unter Wasser bist, wirst du unsichtbar (gilt nicht für getragene Ausrüstung). Du bist resistent gegen Feuer- und Giftschaden und immun gegen die Zustände Gefesselt, Festgesetzt und Vergiftet. Die wässrige Form dauert eine Minute, bis die temporären Trefferpunkte aufgebraucht sind, oder bis du sie als Bonusaktion beendest. Du kannst sie nach einer langen Rast erneut einsetzen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wasser-Genasi (Rasse: Widerstand des Ursprungs)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Säure"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wasser-genasi/charaktere.png",
    "beschreibung": [
      "Erben der Mariden · Kinder der ewigen Wellen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Widerstand des Ursprungs."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Radius von 18 m kannst du in dämmrigem Licht wie in hellem Licht sehen, in Dunkelheit wie in dämmrigem Licht. Im Dunkeln erkennst du nur Graustufen."
      },
      {
        "name": "Säuresistenz",
        "beschreibung": "Du bist gegen Säureschaden resistent."
      },
      {
        "name": "Ruf der Welle",
        "beschreibung": "Du kennst den Zaubertrick Säurespritzer. Ab Stufe 3: Wasser erschaffen oder zerstören 1×/langer Rast. Ab Stufe 5: Auf Wasser gehen 1×/langer Rast (ohne Materialkomponenten). Beide Zauber können auch mit Zauberplätzen gewirkt werden. Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Amphibisch",
        "beschreibung": "Du kannst Luft und Wasser atmen."
      },
      {
        "name": "Angeborenes Talent: Widerstand des Ursprungs",
        "beschreibung": "Ebenare Abstammung stärkt Körper und Geist: erhöhtes TP-Maximum, Giftresistenz und Immunität gegen kritische Treffer. Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erlangst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt. Du erhältst Resistenz gegen Giftschaden und einen Vorteil bei Rettungswürfen gegen Vergiftungen. Du wirst immun gegen kritische Treffer. Wenn ein Treffer ein kritischer Treffer sein sollte, wird er stattdessen zu einem normalen Treffer."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wechselbälger (Rasse: Ausweichendes Morphen)",
    "art": "Feenwesen",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wechselbälger/charaktere.png",
    "beschreibung": [
      "Gestaltwandler des Feenwild · Lebende Masken",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Ausweichendes Morphen."
    ],
    "besonderheiten": [
      {
        "name": "Gestaltwandler",
        "beschreibung": "Als Aktion Erscheinungsbild und Stimme ändern: Haut, Haare, Frisur, Geschlecht, Größe (Klein↔Mittelgroß), Gewicht, anderes Volk (Spielwerte unverändert). Nicht: Personen, die du nie gesehen hast; Kreaturen mit grundlegend anderer Gliedmaßen-Anordnung. Kleidung/Ausrüstung unverändert. Gestalt hält an bis du sie als Aktion änderst oder stirbst."
      },
      {
        "name": "Wechselbalg-Instinkte",
        "beschreibung": "Du bist in 2 Fertigkeiten deiner Wahl geübt: Auftreten, Einschüchtern, Motiv erkennen, Täuschen oder Überzeugen."
      },
      {
        "name": "Angeborenes Talent: Ausweichendes Morphen",
        "beschreibung": "Du hast gelernt, deine körperliche Fähigkeit zu nutzen, um bestimmten Angriffen besser ausweichen zu können. Wenn du deine Rüstungsklasse berechnest, kannst du deinen Charismamodifikator anstelle deines Geschicklichkeitsmodifikators verwenden. Wenn du einem Effekt ausgesetzt bist, der es dir erlaubt, einen Geschicklichkeitsrettungswurf zu machen, um nur die Hälfte des Schadens zu erleiden, kannst du deine Reaktion nutzen, um diesen Schaden um einen Betrag zu reduzieren, der deinem Charismamodifikator multipliziert mit deinem Übungsbonus (mindestens 1) entspricht. Wenn du diese Fähigkeit einsetzt, kann jedes Wesen, das dich sehen kann, erkennen, dass du ein Gestaltwandler bist. Wenn eine Kreatur im Umkreis von 9 Metern, die du sehen kannst, einen Angriffswurf gegen dich ausführt, kannst du als Reaktion deine Form verändern. Die Kreatur hat nun einen Nachteil bei diesem Angriffswurf. Wenn du diese Fähigkeit einsetzt, zeigt sich deine Gestaltwandlernatur jedem Wesen, das dich sehen kann. Du kannst dies nach einer langen Rast erneut tun."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wechselbälger (Rasse: Chamäleon)",
    "art": "Feenwesen",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wechselbälger/charaktere.png",
    "beschreibung": [
      "Gestaltwandler des Feenwild · Lebende Masken",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Chamäleon."
    ],
    "besonderheiten": [
      {
        "name": "Gestaltwandler",
        "beschreibung": "Als Aktion Erscheinungsbild und Stimme ändern: Haut, Haare, Frisur, Geschlecht, Größe (Klein↔Mittelgroß), Gewicht, anderes Volk (Spielwerte unverändert). Nicht: Personen, die du nie gesehen hast; Kreaturen mit grundlegend anderer Gliedmaßen-Anordnung. Kleidung/Ausrüstung unverändert. Gestalt hält an bis du sie als Aktion änderst oder stirbst."
      },
      {
        "name": "Wechselbalg-Instinkte",
        "beschreibung": "Du bist in 2 Fertigkeiten deiner Wahl geübt: Auftreten, Einschüchtern, Motiv erkennen, Täuschen oder Überzeugen."
      },
      {
        "name": "Angeborenes Talent: Chamäleon",
        "beschreibung": "Dein Gestaltwandeln ist so komplex, dass es selbst mit magischen Mitteln schwer zu durchschauen ist. Du hast einen Vorteil bei allen Rettungswürfen gegen Zauber oder Effekte, die deine wahre Natur enthüllen sollen, einschließlich Wahrsagungszauber. Wenn du einen Wurf auf Charisma (Täuschen) nicht bestehst, kannst du ihn wiederholen. Der neue Wurf muss akzeptiert werden. Dieses Merkmal kannst du einmal pro kurzer Rast einsetzen. Du kannst Unauffindbarkeit, auf dich selbst zielend, nach Belieben wirken. Charisma ist dein Attribut für diesen Zauber."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wechselbälger (Rasse: Morphender Körper)",
    "art": "Feenwesen",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens neutral",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wechselbälger/charaktere.png",
    "beschreibung": [
      "Gestaltwandler des Feenwild · Lebende Masken",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Morphender Körper."
    ],
    "besonderheiten": [
      {
        "name": "Gestaltwandler",
        "beschreibung": "Als Aktion Erscheinungsbild und Stimme ändern: Haut, Haare, Frisur, Geschlecht, Größe (Klein↔Mittelgroß), Gewicht, anderes Volk (Spielwerte unverändert). Nicht: Personen, die du nie gesehen hast; Kreaturen mit grundlegend anderer Gliedmaßen-Anordnung. Kleidung/Ausrüstung unverändert. Gestalt hält an bis du sie als Aktion änderst oder stirbst."
      },
      {
        "name": "Wechselbalg-Instinkte",
        "beschreibung": "Du bist in 2 Fertigkeiten deiner Wahl geübt: Auftreten, Einschüchtern, Motiv erkennen, Täuschen oder Überzeugen."
      },
      {
        "name": "Angeborenes Talent: Morphender Körper",
        "beschreibung": "Deine Kontrolle über deinen Körper erlaubt dir Einfluss auf deine inneren Organe und dein Äußeres. Du erhältst Resistenz gegen Giftschaden und einen Vorteil bei Rettungswürfen gegen Vergiftungen. Wenn du Schaden nimmst, kannst du deine Reaktion nutzen, um bis zum Beginn deines nächsten Zuges eine Resistenz gegen diesen Schadenstyp zu entwickeln. Wenn du einen kritischen Treffer erleidest, kannst du ihn in einen normalen Treffer umwandeln. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Konstitutionsmodifikator entspricht (mindestens einmal); danach benötigst du eine lange Rast."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Wiedergeborene (Rasse)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Beliebige Gesinnung",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/wiedergeborene/charaktere.png",
    "beschreibung": [
      "Rückkehrer vom Tod · Träger verblasster Erinnerungen",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Erbe",
        "beschreibung": "Du behältst alle Fertigkeiten, in denen deine vorherige Rasse geübt ist, sowie Klettern-, Fliegen- oder Schwimmbewegungsraten."
      },
      {
        "name": "Untote Natur",
        "beschreibung": "Vorteil auf Rettungswürfe gegen Krankheit und Vergiftung + Resistenz gegen Giftschaden · Vorteil auf Todesrettungswürfe · Kein Essen, Trinken oder Atmen nötig · Kein Schlaf, kein magischer Schlaf möglich; lange Rast in 4 Stunden inaktiv/bewegungslos, bei Bewusstsein."
      },
      {
        "name": "Wissen um ein vergangenes Leben",
        "beschreibung": "Wenn du einen Attributswurf mit Fertigkeit ausführst, kannst du sofort nach dem Sehen des W20-Ergebnisses 1W6 würfeln und das Ergebnis addieren. Anwendungen = Übungsbonus, alle nach langer Rast."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Yuan-ti (Rasse: Ätzende Schuppen)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/yuan-ti/charaktere.png",
    "beschreibung": [
      "Schlangengeborene · Erben uralter Rituale",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Ätzende Schuppen."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Giftunempfindlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen den Vergiftet-Zustand sowie zu dessen Aufhebung bei dir selbst im Vorteil. Außerdem bist du gegen Giftschaden resistent."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Du bist bei Rettungswürfen gegen Zauber im Vorteil."
      },
      {
        "name": "Schlangenzauber",
        "beschreibung": "Zaubertrick: Gift versprühen. Tierfreundschaft auf Schlangen unbegrenzt. Stufe 3: Einflüsterung 1×/langer Rast (oder mit Zauberplatz 2.+ Grad). Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Angeborenes Talent: Ätzende Schuppen",
        "beschreibung": "Du kannst eine saure Substanz aus deinen Poren absondern, die deine Haut überzieht. Du erhältst Resistenz gegen Säureschaden. Als Bonusaktion hüllst du dich in diese schleimige Säure, die eine Minute lang anhält. Während die Säure deine Haut bedeckt, erhältst du folgende Vorteile: Immer wenn du Säureschaden verursachst, kannst du zusätzlichen Schaden in Höhe deines Übungsbonus verursachen. Wenn dich eine Kreatur mit einem Nahkampfangriff trifft, erleidet sie Säureschaden in Höhe deines Übungsbonus. Wenn du eine Kreatur im Griff hast, erleidet diese Kreatur zu Beginn jeder ihrer Runden Säureschaden in Höhe deines Übungsbonus. Du kannst dies einmal tun, danach musst du eine lange Rast einlegen, bevor du es wieder tun kannst."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Yuan-ti (Rasse: Höhere Schlangenart)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/yuan-ti/charaktere.png",
    "beschreibung": [
      "Schlangengeborene · Erben uralter Rituale",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Höhere Schlangenart."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Giftunempfindlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen den Vergiftet-Zustand sowie zu dessen Aufhebung bei dir selbst im Vorteil. Außerdem bist du gegen Giftschaden resistent."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Du bist bei Rettungswürfen gegen Zauber im Vorteil."
      },
      {
        "name": "Schlangenzauber",
        "beschreibung": "Zaubertrick: Gift versprühen. Tierfreundschaft auf Schlangen unbegrenzt. Stufe 3: Einflüsterung 1×/langer Rast (oder mit Zauberplatz 2.+ Grad). Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Angeborenes Talent: Höhere Schlangenart",
        "beschreibung": "Deine Schuppen verhärten sich und dir wachsen Reißzähne, die denen deiner Schlangenbrüder ähneln. Deine Schuppen werden härter. Solange du keine Rüstung trägst, kannst du deine RK als 13 + deinen Geschicklichkeitsmodifikator berechnen. Du kannst einen Schild benutzen und diesen Vorteil trotzdem nutzen. Dir wachsen einziehbare Reißzähne aus deinem Mund. Die Reißzähne sind natürliche Waffen, die du für unbewaffnete Schläge einsetzen kannst. Wenn du mit ihnen triffst, fügst du anstelle des normalen Hiebschadens eines unbewaffneten Schlags 1W4 + deinen Stärke- oder Geschicklichkeitsmodifikator als Stichschaden zu. Wähle das Attribut, wenn du dieses Talent wählst. Wenn du mit deinen Reißzähnen triffst, kannst du dem Ziel zusätzlich 2W6 Giftschaden zufügen. Du kannst dies so oft tun, wie es deinem Übungsbonus entspricht, und erhältst alle verbrauchten Einsätze nach einer langen Rast zurück."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  },
  {
    "name": "Yuan-ti (Rasse: Schlangennest)",
    "art": "Humanoid",
    "unterart": "Rasse",
    "groesse": "Mittelgroß",
    "gesinnung": "Meistens böse",
    "cr": 0,
    "xp": 10,
    "rk": 10,
    "ruestungstyp": null,
    "tp": 4,
    "tp_wuerfel": "1W8",
    "bewegung": {
      "Gehen": "9 m"
    },
    "attribute": {
      "STR": 10,
      "DEX": 10,
      "CON": 10,
      "INT": 10,
      "WIS": 10,
      "CHA": 10
    },
    "rettungswuerfe": {},
    "fertigkeiten": {},
    "schadensresistenzen": [
      "Gift"
    ],
    "schadensimmunitaeten": [],
    "verwundbarkeiten": [],
    "zustandsimmunitaeten": [],
    "sinne": [
      "Dunkelsicht 18 m"
    ],
    "passiveWahrnehmung": 10,
    "sprachen": [
      "Gemeinsprache"
    ],
    "umgebung": [],
    "bild": "assets/images/races/yuan-ti/charaktere.png",
    "beschreibung": [
      "Schlangengeborene · Erben uralter Rituale",
      "Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen. Angeborenes Talent: Schlangennest."
    ],
    "besonderheiten": [
      {
        "name": "Dunkelsicht",
        "beschreibung": "Im Umkreis von 18 m wird dämmriges Licht wie helles Licht und Dunkelheit wie dämmriges Licht behandelt. Im Dunkeln siehst du nur Graustufen."
      },
      {
        "name": "Giftunempfindlichkeit",
        "beschreibung": "Du bist bei Rettungswürfen gegen den Vergiftet-Zustand sowie zu dessen Aufhebung bei dir selbst im Vorteil. Außerdem bist du gegen Giftschaden resistent."
      },
      {
        "name": "Kaltblütig",
        "beschreibung": "Du bist immun gegen die Auswirkungen von heißen Temperaturen."
      },
      {
        "name": "Magieresistenz",
        "beschreibung": "Du bist bei Rettungswürfen gegen Zauber im Vorteil."
      },
      {
        "name": "Schlangenzauber",
        "beschreibung": "Zaubertrick: Gift versprühen. Tierfreundschaft auf Schlangen unbegrenzt. Stufe 3: Einflüsterung 1×/langer Rast (oder mit Zauberplatz 2.+ Grad). Zaubermerkmal (wähle bei Rassenauswahl): Intelligenz, Weisheit oder Charisma."
      },
      {
        "name": "Angeborenes Talent: Schlangennest",
        "beschreibung": "Verwandle Stöcke oder Pfeile in einen Schwarm giftiger Schlangen, der dir gehorcht. Du hast einen Vorteil bei Weisheitsprüfungen (Umgang mit Tieren) im Umgang mit Schlangen. Als Aktion kannst du einen Haufen Stöcke, zehn Pfeile oder kleine Holzstücke in einen Schwarm giftiger Schlangen verwandeln. Der Schwarm handelt als dein Verbündeter und gehorcht deinen Befehlen. Diese Verwandlung dauert eine Minute, danach kehrt der Schwarm in seine ursprüngliche Form zurück. Wird der Schwarm vorher getötet, verwandelt er sich vorzeitig in seine ursprüngliche Form zurück. Du kannst dies nur einmal tun und diese Fähigkeit nach einer kurzen oder langen Ruhepause wieder erlangen."
      }
    ],
    "aktionen": [
      {
        "name": "Keule",
        "beschreibung": "Nahkampfwaffenangriff: +2 auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: 2 (1W4) Wuchtschaden."
      }
    ],
    "bonusaktionen": [],
    "reaktionen": [],
    "legendaere_aktionen": null,
    "source": "Spielbare Rassen"
  }
];
