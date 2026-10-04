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
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
  },
  "Alraunen": {
    "kreaturentyp": null,
    "groesse": [
      "Klein"
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
      "WIS": 1
    },
    "pruefen": [
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
    ],
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
  },
  "Bärenvolk": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "bewegung": {
      "Gehen": "9 m",
      "Klettern": "4,5 m"
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
    }
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
        ]
      },
      "Grüne Drachenblütige": {
        "resistenzen": [
          "Gift"
        ]
      },
      "Rote Drachenblütige": {
        "resistenzen": [
          "Feuer"
        ]
      },
      "Schwarze Drachenblütige": {
        "resistenzen": [
          "Säure"
        ]
      },
      "Weiße Drachenblütige": {
        "resistenzen": [
          "Kälte"
        ]
      }
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
  },
  "Cnidaran": {
    "kreaturentyp": null,
    "groesse": [
      "Mittelgroß"
    ],
    "pruefen": [
      "Schwimmen nur als Tag genannt, Geschwindigkeit = Gehbewegung angenommen",
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
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
      "DEX": 1
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
        }
      },
      "Drachengeborenen-Erbe": {
        "attribute": {
          "STR": 2,
          "CON": 1
        }
      },
      "Drow-Erbe": {
        "attribute": {
          "INT": 2,
          "CON": 1
        }
      },
      "Zwerg-Erbe": {
        "attribute": {
          "WIS": 2,
          "CON": 1
        }
      },
      "Elfen/Schattenfe-Erbe": {
        "attribute": {
          "DEX": 2,
          "CON": 1
        }
      },
      "Gnom-Erbe": {
        "attribute": {
          "INT": 2,
          "CON": 1
        }
      },
      "Halbling-Erbe": {
        "attribute": {
          "DEX": 2,
          "CON": 1
        }
      },
      "Mensch/Halbelf-Erbe": {
        "attribute": {
          "CHA": 2,
          "CON": 1
        }
      },
      "Kobold-Erbe": {
        "attribute": {
          "INT": 2,
          "CON": 1
        }
      },
      "Schattengoblin-Erbe": {
        "attribute": {
          "DEX": 2,
          "CON": 1
        }
      },
      "Teuflingsblut-Erbe": {
        "attribute": {
          "CHA": 2,
          "CON": 1
        }
      }
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
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
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
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
        ]
      },
      "Kristall-Drachenblütige": {
        "resistenzen": [
          "Strahlend"
        ]
      },
      "Saphir-Drachenblütige": {
        "resistenzen": [
          "Schall"
        ]
      },
      "Smaragd-Drachenblütige": {
        "resistenzen": [
          "Psychisch"
        ]
      },
      "Topas-Drachenblütige": {
        "resistenzen": [
          "Nekrotisch"
        ]
      }
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
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
      "Frühlings-Eladrin": {},
      "Sommer-Eladrin": {},
      "Herbst-Eladrin": {},
      "Winter-Eladrin": {}
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
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
    }
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
        }
      },
      "Marionette": {
        "attribute": {
          "DEX": 1,
          "STR": 1,
          "CHA": 1
        },
        "resistenzen": [
          "Wucht"
        ]
      },
      "Zerlumpte": {
        "attribute": {
          "DEX": 1,
          "WIS": 1,
          "CHA": 1
        }
      }
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
        }
      },
      "Wilder Gnoll": {
        "attribute": {
          "STR": 2,
          "WIS": 1
        }
      },
      "Wüstengnoll": {
        "attribute": {
          "STR": 2,
          "CHA": 1
        },
        "resistenzen": [
          "Feuer"
        ]
      },
      "Nekropolengnoll": {
        "attribute": {
          "STR": 2,
          "DEX": 1
        },
        "resistenzen": [
          "Nekrotisch"
        ]
      }
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
    }
  },
  "Grung": {
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
    "attribute": {
      "DEX": 2,
      "CON": 1
    },
    "pruefen": [
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
    ],
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
  },
  "Hadozee": {
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
  },
  "Hobgoblins": {
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
      "INT": 1
    },
    "pruefen": [
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
    ],
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
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
      "Sonnenelfen (Goldelfen)": {},
      "Mondelfen (Silberelfen)": {}
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
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
      "Abwehr": {},
      "Drakonische Zauberei": {},
      "Findigkeit": {}
    },
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CON": 2,
      "STR": 1
    },
    "pruefen": [
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
    ],
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "CON": 2,
      "STR": 1
    },
    "pruefen": [
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
    ],
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
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
    }
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
      "DEX": 2,
      "WIS": 1
    },
    "pruefen": [
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
    ],
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
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
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
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
      "Istoraner": {},
      "Meri": {},
      "Solvarin": {},
      "Aurembri": {},
      "Karatay": {},
      "Variemar": {},
      "Lyssaner": {},
      "Chaskaya": {},
      "Kharadun": {},
      "Jinyu": {},
      "Mahrok": {}
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
        ]
      },
      "Goldene Drachenblütige": {
        "resistenzen": [
          "Feuer"
        ]
      },
      "Kupferne Drachenblütige": {
        "resistenzen": [
          "Säure"
        ]
      },
      "Messingfarbige Drachenblütige": {
        "resistenzen": [
          "Feuer"
        ]
      },
      "Silberne Drachenblütige": {
        "resistenzen": [
          "Kälte"
        ]
      }
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
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
    "sinne": [],
    "resistenzen": [],
    "immunitaeten": [],
    "sprachen": null,
    "attribute": {
      "WIS": 2,
      "CON": 1
    },
    "pruefen": [
      "keine Merkmalstexte vorhanden, nur Tags ausgewertet"
    ],
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
        }
      },
      "Tradvakt": {
        "attribute": {
          "DEX": 2,
          "CON": 1
        }
      }
    }
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
    }
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
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
    }
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
        }
      },
      "Die Beschenkten": {
        "attribute": {
          "WIS": 2,
          "CHA": 1
        },
        "resistenzen": [
          "Nekrotisch"
        ]
      }
    }
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
        }
      },
      "Cahbri": {
        "attribute": {
          "INT": 1
        }
      },
      "Grikuuth": {
        "attribute": {
          "INT": 1
        }
      },
      "Kizrovidus": {
        "attribute": {
          "DEX": 1
        }
      },
      "Meleshor": {
        "attribute": {
          "INT": 1
        }
      },
      "Nalphimex": {
        "attribute": {
          "STR": 1
        }
      },
      "Netrosk": {
        "attribute": {
          "DEX": 1
        }
      },
      "Vezvoriak": {
        "attribute": {
          "INT": 1,
          "CHA": 2
        }
      },
      "Yx'larak": {
        "attribute": {
          "WIS": 1
        }
      }
    },
    "attributeQuelle": "offiziell (D&D 5e, bestätigt): CHA+2 Basis, +1 je Blutlinie"
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
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
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
        }
      },
      "Werechsen": {
        "attribute": {
          "INT": 2,
          "CON": 1
        },
        "resistenzen": [
          "Feuer"
        ]
      },
      "Werkühe": {
        "attribute": {
          "CHA": 2,
          "STR": 1
        }
      },
      "Werraben": {
        "attribute": {
          "INT": 2,
          "CHA": 1
        }
      },
      "Werratten": {
        "attribute": {
          "DEX": 2,
          "CHA": 1
        }
      },
      "Werschafe": {
        "attribute": {
          "CON": 2,
          "WIS": 1
        },
        "resistenzen": [
          "Kälte"
        ]
      },
      "Werschweine": {
        "attribute": {
          "WIS": 2,
          "STR": 1
        }
      },
      "Werspinnen": {
        "attribute": {
          "WIS": 2,
          "DEX": 1
        }
      },
      "Wertiger": {
        "attribute": {
          "STR": 2,
          "WIS": 1
        }
      },
      "Werwölfe (hundeartig)": {
        "attribute": {
          "WIS": 2,
          "DEX": 1
        }
      },
      "Werwölfe (wolfsartig)": {
        "attribute": {
          "STR": 2,
          "DEX": 1
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
    "attributeQuelle": "thematisch gewählt (bestätigt)"
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
    "attributeQuelle": "offiziell (D&D 5e, bestätigt)"
  }
};
