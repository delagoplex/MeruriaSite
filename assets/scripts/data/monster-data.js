// Aggregator — lädt alle Quell-Dateien zusammen.
// Neue Bücher: eigene *-data.js anlegen, Variable hier eintragen.
window.MONSTER_DATA = [
  ...(window.MONSTER_DATA_MONSTERHANDBUCH || []),
].sort((a, b) => a.name.localeCompare(b.name, 'de'));

window.UNTERART_LORE = {
  "Drache": {
    einleitung: "Wahre Drachen sind geflügelte Echsen mit uraltem Stammbaum und schrecklicher Macht. Sie sind für ihre raubtierhafte Gerissenheit und Gier bekannt, wobei die ältesten Drachen zu den mächtigsten Kreaturen in der Welt gehören. Drachen sind außerdem magische Kreaturen, deren angeborene Macht ihre gefürchteten Odemwaffen und andere übernatürliche Fähigkeiten ermöglicht.",
    abschnitte: [
      {
        titel: "Drachenalter-Kategorien",
        tabelle: {
          kopf: ["Kategorie", "Größe", "Altersspanne"],
          zeilen: [
            ["Nestling", "Mittelgroß", "5 Jahre oder weniger"],
            ["Jung", "Groß", "6–100 Jahre"],
            ["Ausgewachsen", "Riesig", "101–800 Jahre"],
            ["Uralt", "Gigantisch", "801 Jahre und mehr"]
          ]
        },
        inhalt: "Wahre Drachen durchlaufen vier verschiedene Lebensphasen, von den niederen Nestlingen bis hin zu den uralten Drachen, die über tausend Jahre alt werden können. In dieser Zeit kann ihre Macht unvergleichbar werden und ihr Hort die Grenzen der Vorstellungskraft sprengen."
      }
    ]
  },
  "Drow": {
    einleitung: "Vor Zehntausenden von Jahren waren die Elfen geteilt. Jene, die ein gutes Gemüt hatten, kämpften gegen jene, die selbstsüchtig und grausam waren. Der Krieg unter den Elfen endete, als die guten Elfen ihre bösartigen Vettern in die unterirdischen Tiefen verbannten. Hier, in den lichtlosen Kavernen und endlosen Bauten aus verschlungenen Stollen, fanden die Dunkelelfen – die Drow – eine Zuflucht. Sie fanden auch Führung in Form der einzigen Elfengottheit, die sie nicht verlassen hatte. Auf ihren Befehl hin errichteten die Dunkelelfen ein Imperium in der Unterwelt.",
    abschnitte: [
      {
        titel: "Kinder von Lolth",
        inhalt: "Die Drow beten zu Lolth, einer Gottheit, die im Abyss residiert. Sie ist als die Spinnenkönigin oder als Dämonenkönigin der Spinnen bekannt, und ist die Gestalt, um die die Dunkelelfen ihre unterirdische Zivilisation aufgebaut haben. Was auch immer sie verlangt, die Drow tun es. Drow sind die bösartigsten unter den Elfen und sind selten an der Oberflächenwelt anzutreffen. Sie sind die berufenen Herrscher der Dunkelheit, und wenn Lolth ihnen befiehlt, sich zu erheben und ihre Vettern an der Oberfläche zu vernichten, dann werden sie es tun."
      },
      {
        titel: "Kreaturen der Dunkelheit",
        inhalt: "Die Drow haben so lange unter der Erde gelebt, dass sie sich an ihre Umgebung angepasst haben und in der Dunkelheit sehen können. Sie können jedoch das Sonnenlicht nicht mehr ertragen. Wenn Sklaven im Unterreich knapp werden, schicken die Drow Überfalltrupps an die Oberfläche, um im Schutze der Dunkelheit Humanoide gefangen zu nehmen und sie in ihre Städte zu schleppen. Dort werden sie gefoltert, bis sie sich unterwerfen."
      },
      {
        titel: "Städte im Unterreich",
        inhalt: "Die Dunkelelfen erbauen großartige Städte in gewaltigen Kavernen, in denen Nahrung und Wasser im Überfluss vorhanden sind. Die Drow höhlen gerne gewaltige Stalagmiten und Stalaktiten aus, wobei sie bevölkerte Türme erschaffen, die sich vom Boden zur Höhlendecke erstrecken. Eine Drow-Stadt ist eine ausladende Metropole, die von hohen Mauern umgeben ist. Die Drow züchten und halten Riesenspinnen, die dabei helfen, ihre Städte gegen Eindringlinge zu schützen und gleichzeitig diese Städte in wunderschöne Netze hüllen – eine hauchzarte Falle für fliegende Gegner, die ansonsten über die Mauern schweben würden."
      },
      {
        titel: "Drow-Magie",
        inhalt: "So wie die Drow sich an das unterirdische Leben angepasst haben, so hat es auch ihre Magie. Nicht nur nutzen sie diese Magie, um ihre Städte aus dem Stein zu schneiden, sie stärken auch ihre Waffen, erschaffen gefährliche neue magische Gegenstände und beschwören Dämonen aus dem Abyss. Drow-Zauberwirker sind außerordentlich arrogant und zögern niemals, ihre Magie auf die grässlichste Art einzusetzen. Drow stellen Waffen aus Adamant her, einem dunklen und übernatürlich harten Metall. Magische Drow-Waffen und -Rüstungen verlieren allerdings ihren Verbesserungsbonus und ihre magischen Eigenschaften, wenn sie dem Sonnenlicht ausgesetzt werden."
      },
      {
        titel: "Mörderische Politik",
        inhalt: "Drow-Politik ist hinterhältig und voller Intrigen. Die Drow-Gesellschaft ist in Adelshäuser aufgeteilt, die jeweils von einer Matrone angeführt werden. Lolth legt über ihre treuen Priesterinnen die Regeln der Drow-Gesellschaft fest. In der Drow-Gesellschaft sind Männer den Frauen unterstellt – ein männlicher Drow kann keine Priester sein und kein Haus anführen."
      },
      {
        titel: "Vorliebe für Gift",
        inhalt: "Gift, das aus Spinnengift und den Pflanzen des Unterreichs destilliert wird, ist unter den Drow weit verbreitet. Drow-Magi brauen ein zähflüssiges Gift, das Gegner bewusstlos werden lässt. Drow-Krieger überziehen ihre Klingen und Armbrustbolzen mit diesem Gift und freuen sich auf die Verhöre und Folterungen, die auf den Kampf folgen."
      }
    ]
  },
  "Chromatischer Drache": {
    einleitung: "Chromatische Drachen sind die bösartigsten und gefährlichsten Drachen der Welt – selbstsüchtige, grausame Wesen, die Menschen und andere schwächere Geschöpfe als Beute oder als Spielzeug ansehen. Fünf Arten von chromatischen Drachen existieren – schwarz, blau, grün, rot und weiß – und jede Art ist mehr oder weniger eine andere Version derselben bösen Natur.",
    abschnitte: [
      {
        titel: "Chromatische Drachen",
        inhalt: "Chromatische Drachen sind durch ihre Arroganz und ihr böses Gemüt vereint. Alle chromatischen Drachen betrachten sich als Wesen der überlegenen Macht und halten die vernunftbegabten Rassen der Welt für nichts anderes als potenzielle Sklaven. Von Zeit zu Zeit suchen chromatische Drachen einander, aber abgesehen von der Paarungszeit und der Aufzucht von Jungen leben diese ungeselligenWesen ein solches Territorium für sich alleine."
      },
      {
        titel: "Getrieben von Gier",
        inhalt: "Chromatische Drachen lieben Gold und Schätze über alles. Ein Drache bewacht seinen Hort mit fanatischer Intensität und ist stets auf der Hut vor Eindringlingen, die seinen Schatz stehlen könnten. Wenn ein Drache einen bestimmten Gegenstand aus einem anderen Hort haben will, überfällt er einfach den anderen Hort und tötet dessen Besitzer. Selten nutzen chromatische Drachen subtilere Methoden – sie bezaubern oder terrorisieren Sterbliche, sodass diese für sie stehlen oder erpressen."
      },
      {
        titel: "Kreaturen aus purem Ego",
        inhalt: "Chromatische Drachen sind absolut egozentrisch. Sie betrachten alles und jeden nur in Bezug darauf, wie es oder er ihnen nützt. Sie schließen keine echten Freundschaften oder Allianzen, sind aber durchaus bereit, Sterbliche vorübergehend zu dulden, wenn diese ihnen etwas bieten, das sie begehren. Chromatische Drachen halten sich für die Krone der Schöpfung, und die Geschichte der Drachenwelt besteht aus einem endlosen Krieg für Territorium und Überlegenheit."
      },
      {
        titel: "Gefährliche Behausungen",
        inhalt: "Chromatische Drachen wählen Horte, die zu ihrem Element und ihrer Natur passen. Sie bevorzugen abgelegene, schwer zugängliche Orte weit entfernt von Zivilisation: tiefe Höhlen, verlassene Ruinen, einsame Gipfel oder versunkene Schiffswracks. Ein Drachenhort ist ein Abbild seiner Persönlichkeit – ein Zeugnis seiner Macht, Ausdauer und Gier über die Jahrhunderte."
      }
    ]
  },
  "Dschinn": {
    einleitung: "Dschinnis sind seltene elementare Wesen aus Geschichten und Legenden. Nur wenige von ihnen trifft man auf der Materiellen Ebene an. Der Rest von ihnen lebt auf den Elementaren Ebenen, wo sie von prachtvollen Palästen aus regieren und von ehrerbietigen Sklaven versorgt werden. Dschinnis sind so brillant, wie sie mächtig sind, so stolz, wie sie majestätisch sind. Sie sind hochmütig und dekadent und haben ein ausgeprägtes Anspruchsdenken, das aus dem Wissen erwächst, dass wenige Wesen außer den Göttern und anderen Dschinnis ihrer Macht gewachsen sind.",
    abschnitte: [
      {
        titel: "Kreaturen der Elemente",
        inhalt: "Ein Dschinn wird geboren, wenn die Seele eines denkenden lebenden Wesens mit der urtümlichen Materie einer Elementarebene verschmilzt. Nur unter seltenen Umständen verdichtet sich solch eine mit den Elementen erfüllte Seele in eine manifestierte Gestalt und wird zu einem Dschinn. Ein Dschinn hat normalerweise keine Verbindung zu der Seele, die ihm eine Gestalt geschenkt hat. Diese Lebenskraft ist ein Baustein, der die Gestalt und das scheinbare Geschlecht des Dschinnis bestimmt, sowie ein oder zwei wichtige Persönlichkeitsmerkmale. Auch wenn sie humanoiden Wesen ähneln, sind Dschinnis doch Elementargeister in körperlicher Gestalt. Sie paaren sich nicht mit anderen Dschinnis und haben keine Nachkommen, da alle neuen Dschinnis aus der gleichen geheimnisvollen Fusion seelischer Energie und elementarer Macht geboren werden. Ein Dschinn mit stärkeren Verbindungen mit seiner sterblichen Seele entscheidet sich vielleicht, ein Kind mit einem Sterblichen zu zeugen, doch sind solche Nachkommen selten. Wenn ein Dschinn stirbt, bleibt nichts zurück außer dem, was er trägt oder in der Hand hält, zusammen mit einer kleinen Spur des Elements, aus dem er besteht: ein Haufen Staub, ein Windstoß, ein Blitz aus Feuer und Rauch oder eine Explosion aus Wasser und Schaum."
      },
      {
        titel: "Beherrschen oder beherrscht werden",
        inhalt: "Sterbliche Sklaven dienen dazu, die Macht und hohe Meinung von sich selbst, die ein Dschinn hat, zu bestätigen. Hundert schmeichelnde Stimmen sind Musik in den Ohren eines Dschinnis, während zweihundert sterbliche Sklaven, die sich zu seinen Füßen auf den Boden werfen, ein Beweis sind, dass er Herr und Gebieter ist. Dschinnis sehen Sklaven als lebendes Eigentum, und ein Dschinn ohne Besitz ist unter seinesgleichen nichts wert. Als Folge schätzen viele Dschinnis ihre Sklaven und behandeln sie wie geehrte Mitglieder ihres Haushalts. Böse Dschinnis haben keine Schwierigkeiten damit, ihre Sklaven zu bedrohen und zu missbrauchen, aber niemals so sehr, dass die Sklaven nicht mehr nützlich sind. Im Gegensatz zu ihrer Liebe zu Sklaven hassen es die meisten Dschinnis, selbst dienen zu müssen. Ein Dschinn gehorcht nur dann dem Willen eines Anderen, wenn er bestochen oder durch Magie gezwungen wird. Alle Dschinnis befehligen die Macht ihres Elements, doch einige wenige haben auch die Macht, Wünsche zu erfüllen. Aus beiden dieser Gründe versuchen sterbliche Magier oft, Dschinnis unter ihre Knute zu zwingen."
      },
      {
        titel: "Dekadenter Adel",
        inhalt: "Adelige Dschinnis sind die seltensten ihrer Art. Sie sind daran gewöhnt, das zu bekommen, was sie wollen, und haben gelernt, ihre Fähigkeit, Wünsche zu erfüllen, gegen Gegenstände zu tauschen, die sie begehren. Dass sie ständig ihren Willen bekommen, hat sie dekadent werden lassen, während ihre große Macht über die Realität sie hochmütig und arrogant macht. Ihre gewaltigen Paläste sind mit Wundern und Sinnesfreuden überladen, die jenseits jeder Vorstellungskraft sind. Adelige Dschinnis kultivieren die Eifersucht und den Neid anderer Dschinnis und zeigen ihre Vorherrschaft bei jeder Gelegenheit. Andere Dschinnis respektieren den Einfluss der adeligen Dschinnis, da sie wissen, wie unklug es ist, sich Kreaturen zu widersetzen, die die Realität willentlich ändern können. Ein Dschinn untersteht allerdings keinem adeligen Dschinn und wird sich manchmal dem Willen des adeligen Dschinnis widersetzen und die Konsequenzen riskieren."
      },
      {
        titel: "Die Macht der Anbetung",
        inhalt: "Dschinnis erkennen Götter als mächtige Wesen an, haben aber keinen Wunsch, sie anzubeten oder zu umwerben. Sie empfinden die Kriecherei und das Wimmern von religiösen Anhängern als ermüdend – wenn es nicht von ihren ehrerbietigen Sklaven an sie gerichtet ist. Ihre wundersamen Fähigkeiten, die Pracht ihrer Domänen und die Anzahl ihrer Sklaven erlauben es Dschinnis manchmal, sich selbst einzureden, sie seien so mächtig wie die Götter. Einige gehen sogar so weit, zu verlangen, dass Sterbliche aus anderen Reichen – sogar ganze Kontinente oder Welten – sich vor ihnen verbeugen."
      }
    ]
  },
  "Elementar": {
    einleitung: "Elementare sind Inkarnationen der Elemente, aus denen das Universum besteht: Erde, Feuer, Luft und Wasser. Auch wenn sie auf ihrer eigenen Existenzebene wenig mehr als belebte Energie sind, können sie doch von Zauberwirkern und mächtigen Wesen gerufen werden, um eine Gestalt anzunehmen und Aufgaben zu erfüllen.",
    abschnitte: [
      {
        titel: "Lebende Elemente",
        inhalt: "Auf ihrer Heimatebene sind Elementare nur körperlose Lebenskraft. Ihr dumpfes Bewusstsein manifestiert nur dann eine physische Gestalt, wenn es durch die Macht der Magie fokussiert wird. Ein wilder Geist der elementaren Macht hat keinen Wunsch, außer sich durch das Element seiner Heimatebene zu bewegen. Wie die Tiere der Materiellen Ebene haben diese Elementargeister keine Gesellschaft oder Kultur und wenig Bewusstsein für ihr Selbst."
      },
      {
        titel: "Von Magie gerufen",
        inhalt: "Bestimmte Zauber und magische Gegenstände können einen Elementar beschwören, indem sie ihn von den Inneren Ebenen auf die Materielle Ebene rufen. Elementare haben eine instinktive Abneigung dagegen, von ihrer Heimatebene gerufen und zum Dienst gezwungen zu werden. Eine Kreatur, die einen Elementar beschwört, muss ihren Willen nutzen, um ihn zu beherrschen."
      },
      {
        titel: "Gebunden und geformt",
        inhalt: "Mächtige Magie kann einen Elementargeist in eine materielle Schablone binden, die eine bestimmte Verwendung und Funktion bestimmt. Unsichtbare Pirscher sind Luftelementare, die in eine bestimmte Gestalt gebunden sind, so wie Wasserelementare in Wassergeister geformt werden können. Golems sind Elementargeister, die in physische Formen gebunden sind, aber schwächere Materialien wie Fleisch und Lehm können die elementare Macht nicht ausreichend binden. Robuste Materialien wie Stein und Eisen erfordern stärkere Magie, die den Elementar aber auch sicherer binden kann."
      },
      {
        titel: "Elementare Natur",
        inhalt: "Ein Elementar braucht keine Luft, Nahrung, Wasser oder Schlaf."
      }
    ]
  },
  "Engel": {
    einleitung: "Ein Engel ist ein himmlischer Diener, der auf die Ebenen geschickt wird, um die Agenda seines Gottes voranzubringen, zum Guten oder zum Schlechten. Seine erhabene Schönheit und Präsenz kann Betrachter voller Ehrfurcht auf die Knie zwingen. Doch sind Engel auch Zerstörer, und ihr Erscheinen ist ebenso oft ein Vorzeichen des Unheils wie der Hoffnung.",
    abschnitte: [
      {
        titel: "Fragmente des Göttlichen",
        inhalt: "Engel werden aus der astralen Essenz wohlwollender Götter geformt und sind somit göttliche Wesen großer Macht und Weitsicht. Engel folgen dem Willen ihres Gottes mit unermüdlicher Hingabe. Selbst chaotisch gute Gottheiten befehligen rechtschaffen gute Engel, da sie wissen, dass die Hingabe der Engel zur Ordnung es ihnen am besten erlaubt, ihre Befehle auszuführen. Ein Engel folgt einem einzigen antreibenden Daseinszweck, den ihm seine Gottheit auferlegt hat. Ein Engel ist aber nicht dazu imstande, Befehlen zu folgen, die ihn vom Pfad des Guten und der Rechtschaffenheit abkommen lassen würden.\n\nEin Engel tötet böse Kreaturen ohne Reue. Da er eine Verkörperung des Guten und der Rechtschaffenheit ist, liegt ein Engel in seiner Einschätzung fast niemals falsch. Diese Eigenschaft kann einen Engel mit einem starken Überlegenheitsgefühl erfüllen, was sich dann deutlich zeigt, wenn die Aufgaben ihn in Konflikt mit den Zielen einer anderen Kreatur bringen. Der Engel wird sich niemals fügen oder nachgeben. Wenn ein Engel geschickt wird, um Sterbliche zu unterstützen, dann wird er geschickt um zu herrschen, nicht um zu dienen. Aus diesem Grund schicken die Götter die Engel nur in den schlimmsten Umständen unter die Sterblichen."
      },
      {
        titel: "Gefallene Engel",
        inhalt: "Der moralische Kompass eines Engels verleiht ihm ein Gefühl der Unfehlbarkeit, das manchmal sein Untergang sein kann. Engel sind normalerweise zu weise, um einfacher Täuschung zum Opfer zu fallen, aber manchmal kann ihr Stolz sie dazu verleiten, eine böse Tat zu begehen. Egal, ob eine solche Handlung absichtlich oder aus Versehen geschieht, sie ist ein dauerhafter Makel, die den Engel zum Ausgestoßenen macht.\n\nGefallene Engel behalten ihre Macht, verlieren aber ihre Verbindung mit den Gottheiten, aus denen sie erschaffen wurden. Die meisten gefallenen Engel nehmen ihre Verbannung persönlich und rebellieren gegen die Mächtigen, denen sie einst dienten. Das tun sie, indem sie die Herrschaft über einen Teil des Abyss anstreben oder einen Platz unter anderen Gefallenen in der Hierarchie der Neun Höllen suchen. Zariel, der Herrscher der ersten Schicht der Neun Höllen, ist eine solche Kreatur. Anstatt zu rebellieren fügen sich manche gefallenen Engel einer isolierten Existenz auf der Materiellen Ebene, wo sie sich als einfache Einsiedler ausgeben. Wenn sie geläutert werden können, können sie zu mächtigen Verbündeten werden, die sich der Gerechtigkeit und dem mitfühlsamen Dienst verschreiben."
      },
      {
        titel: "Unsterbliche Natur",
        inhalt: "Ein Engel braucht weder Nahrung noch Wasser oder Schlaf."
      }
    ]
  },
  "Gith": {
    einleitung: "Die kriegerischen Githyanki und die nachdenklichen Githzerai sind ein zerrissenes Volk — zwei Kulturen, die einander absolut verabscheuen. Ehe sie die Githyanki oder Githzerai waren, waren diese Wesen ein einziges Volk, das von den Gedankenschindern versklavt wurde. Eine große Anführerin namens Gith erhob sich und warf mit ihren Anhängern das Joch ihrer Illithid-Meister ab.",
    abschnitte: [
      {
        titel: "Die Spaltung",
        inhalt: "Nach der Befreiung tauchte ein weiterer Anführer namens Zerthimon auf. Er hinterfragte Giths Motive und behauptete, dass ihre strikt militaristische Führung und ihre Rachsucht wenig mehr als eine weitere Form der Sklaverei bedeuteten. Es kam zu einer Spaltung zwischen Anhängern beider Anführer, und sie wurden schließlich zu den beiden Völkern, deren Feindschaft bis zum heutigen Tage anhält. Ob diese Kreaturen friedlich oder wild, kultiviert oder primitiv waren, ehe die Gedankenschinder sie versklavten, das kann heute niemand mehr sagen. Sogar der ursprüngliche Name ihres Volks ist in den Nebeln der Zeit verschwunden."
      },
      {
        titel: "Githyanki",
        inhalt: "Die Githyanki plündern zahllose Welten von den Decks ihrer astralen Schiffe und von den Rücken roter Drachen aus. Sie sind skrupellose Eroberer unter der Herrschaft der grässlichen Lich-Königin Vlaakith, die das Gebilde Giths nach deren Tod übernahm und die Anbetung aller Wesen außer ihr selbst verbot. In ihrer eigenen Sprache bedeutet Githyanki „Anhänger der Gith\". Von all ihren Feinden hassen die Githyanki ihre ehemaligen Meister, die Gedankenschinder, am meisten."
      },
      {
        titel: "Githzerai",
        inhalt: "Die Githzerai sind fokussierte Philosophen und nüchterne Asketen, die ein Leben strenger Ordnung anstreben. Nach den Lehren Zerthimons konzentrierten die Githzerai ihre geistigen Energien darauf, physische und psychische Barrieren zu erschaffen. Sie leben auf Inseln der Ordnung im großen See des Chaos — der Ebene des Limbus — und zähmen mit der Kraft ihres Geistes die chaotischen Elemente der Ebene. Als besondere Andacht organisieren die Githzerai das Rrakkma, eine Illithid-Jagdgruppe, und kehren erst in ihre Klöster zurück, wenn sie mindestens so viele Illithids erschlagen haben, wie die Gruppe Mitglieder hat."
      }
    ]
  },
  "Metallischer Drache": {
    einleitung: "Metallische Drachen wollen bewahren und beschützen. Sie sehen sich als ein mächtiges Volk unter den zahlreichen Völkern, die einen Platz in der Welt haben.",
    abschnitte: [
      {
        titel: "Edle Neugier",
        inhalt: "Metallische Drachen begehren Schätze wie ihre chromatischen Vettern, doch sind sie nicht so sehr von Gier dominiert. Sie verspüren den Drang nachzuforschen und zu sammeln. Sie nehmen Relikte, auf die niemand Anspruch erhebt, und bewahren sie. Manchmal verstauen sie mächtige magische Gegenstände und böse Artefakte in ihrem Hort, um andere Kreaturen vor gefährlicher Magie zu schützen."
      },
      {
        titel: "Einzelgängerische Gestaltwandler",
        inhalt: "Metallische Drachen erhalten irgendwann die Fähigkeit, die Gestalt von Humanoiden und Tieren anzunehmen. Ältere Drachen lieben es, in menschlicher Gestalt durch Städte zu wandern, die örtliche Kultur und Küche zu genießen und zu beobachten, wie die kleineren Völker leben. Einige ziehen es vor, weit von der Zivilisation weg zu bleiben, um keine Feinde anzulocken."
      },
      {
        titel: "Die Beständigkeit der Erinnerungen",
        inhalt: "Metallische Drachen haben ein langes Gedächtnis und bilden sich ihre Meinung über Humanoide basierend auf früherem Kontakt mit verwandten Personen. Gute Drachen können menschliche Abstammung nach dem Geruch erkennen und erinnern sich an Verwandte, mit denen sie im Lauf der Jahre Kontakt hatten. Dies kann zu überraschenden Vorurteilen führen – ein Drache könnte jemanden verabscheuen, weil ein Vorfahr vor Jahrhunderten aus seinem Hort gestohlen hat."
      },
      {
        titel: "König der Guten Drachen",
        inhalt: "Die Hauptgottheit der metallischen Drachen ist Bahamut, der Platindrache. Er lebt in den Sieben Himmeln von Berg Celestia, streift aber oft durch die Materielle Ebene in der Gestalt eines ehrwürdigen Mannes in bäuerlicher Gewandung – normalerweise begleitet von sieben goldenen Kanarienvögeln, die in Wirklichkeit sieben verwandelte Golddrachen sind. Bahamut mischt sich selten in die Angelegenheiten sterblicher Kreaturen ein, macht aber Ausnahmen, um die Machenschaften von Tiamat und ihrer bösen Brut zu vereiteln."
      }
    ]
  },
  "Schattendrache": {
    einleitung: "Schattendrachen sind wahre Drachen, die entweder im Schattensaum geboren worden sind oder verwandelt wurden, weil sie Jahre in ihm zugebracht haben. Einige genießen die trostlosen Landschaften des Schattensaums, andere wollen auf die Materielle Ebene zurückkehren, um Dunkelheit und Böses zu verbreiten.",
    abschnitte: [
      {
        titel: "Dunkle Portale",
        inhalt: "Portale in den Schattensaum materialisieren sich an abgelegenen Orten und in tiefer unterirdischer Düsternis. Die Drachen, die an solchen Orten hausen, entdecken oft diese Portale und werden in ein neues Reich transportiert. Uralte Drachen, die monate- oder jahrelang schlafen, werden oft hineingesogen, ohne es zu bemerken, da sich das Portal ohne ihr Wissen geformt hat."
      },
      {
        titel: "Im Schatten neu erschaffen",
        inhalt: "Die Verwandlung dauert Jahre. Die Schuppen verlieren ihren Glanz und nehmen die Farbe von Kohle an, die Schwingen werden durchscheinend, die Augen verblassen zu Tümpeln aus schillerndem Grau. Schattendrachen finden das Sonnenlicht abscheulich. Während Monate und Jahre vergehen, wird der Drache sich der Verwandlung bewusst, kann aber nichts tun, um sie zu verhindern."
      },
      {
        titel: "Zurück in der Welt",
        inhalt: "Ein Schattendrache ist so von der Macht des Schattensaums erfüllt, dass selbst eine Rückkehr auf die Materielle Ebene seine Verwandlung nicht aufheben kann. Einige locken Kreaturen in den Schattensaum, um Gesellschaft zu haben – zumindest bis sie die Gäste überdrüssig werden und sie verschlingen. Andere sind froh, den Schattensaum für immer hinter sich zu lassen."
      },
      {
        titel: "Schablone für Schattendrachen",
        inhalt: "Nur ein wahrer Drache kann sich in einen Schattendrachen verwandeln, und nur, wenn er im Schattensaum geboren wird oder dort mehrere Jahre verbringt. Ein Drakolich kann nicht verwandelt werden, da er sein Drachenwesen beim Übergang zum Untoten verliert. Schattendrachen erhalten folgende Anpassungen: Resistenz gegen Nekrotisch; doppelter Übungsbonus für Heimlichkeit; Lebender Schatten (Resistenz gegen nicht-Energie-/gleißenden/psychischen Schaden in schwachem Licht oder Dunkelheit); Heimlicher Schatten (Verstecken als Bonusaktion in schwachem Licht/Dunkelheit); Empfindlichkeit gegenüber Sonnenlicht (Nachteil auf Angriffe und WEI-Wahrnehmung im hellen Licht). Der Biss-Schaden wird zu nekrotisch. Odemwaffen verursachen nekrotischen Schaden – Humanoide, die auf 0 TP reduziert werden, sterben und beschwören einen untoter Schatten unter der Kontrolle des Drachens."
      }
    ]
  },
  "Dinosaurier": {
    einleitung: "Dinosaurier oder Behemoths gehören zu den ältesten Reptilien auf der Welt. Raubsaurier sind wilde, territoriale Jäger. Pflanzenfressende Dinosaurier sind weniger aggressiv, aber könnten angreifen, um ihre Jungen zu verteidigen oder wenn sie erschreckt oder belästigt werden.",
    abschnitte: [
      {
        titel: "Verbreitung",
        inhalt: "Dinosaurier gibt es in vielen Größen und Formen. Größere Varianten haben oft eine einfache Färbung, während kleinere Dinosaurier farbenfroh gezeichnet wie Vögel sind. Dinosaurier streifen durch raue und isolierte Gegenden, die selten von Humanoiden besucht werden, wie abgelegene Gebirgstäler, unerreichbare Plateaus, tropische Inseln und tiefe Sümpfe."
      }
    ]
  },
  "Dämon": {
    einleitung: "Dämonen, die in den Unendlichen Schichten des Abyss erschaffen werden, sind eine Verkörperung des Chaos und des Bösen – Maschinen der Zerstörung, die kaum von einer monströsen Gestalt im Zaum gehalten werden. Sie verfügen über kein Mitleid, kein Einfühlungsvermögen, keine Gnade und existieren nur, um zu zerstören.",
    abschnitte: [
      {
        titel: "Typen von Dämonen",
        inhalt: "Dämonologen organisieren die chaotische Ansammlung von Dämonen in weit gefasste Machtkategorien, die als Typen bekannt sind. Die meisten Dämonen passen in die sechs Hauptarten, wobei die schwächsten Dämonen Typ 1 und die stärksten Typ 6 sind. Dämonen außerhalb der sechs Haupttypen werden als mindere Dämonen und Dämonenfürsten kategorisiert.",
        tabelle: {
          kopf: ["Typ", "Beispiele"],
          zeilen: [
            ["1", "Barlgura, Schattendämon, Vrock"],
            ["2", "Chasme, Hezrou"],
            ["3", "Glabrezu, Yochlol"],
            ["4", "Nalfeshnee"],
            ["5", "Marilith"],
            ["6", "Balor, Goristro"]
          ]
        }
      },
      {
        titel: "Wahre Namen von Dämonen",
        inhalt: "Auch wenn alle Dämonen allgemein bekannte Namen haben, hat jeder Dämonenfürst und jeder Dämon des Typs 1 bis 6 einen wahren Namen, den er geheim hält. Ein Dämon kann gezwungen werden, seinen wahren Namen zu verraten, wenn er bezaubert wird, und es soll uralte Schriftrollen geben, auf denen die wahren Namen der mächtigsten Dämonen verzeichnet sind. Ein Sterblicher, der den wahren Namen eines Dämons in Erfahrung bringt, kann mächtige Beschwörungsmagie nutzen, um den Dämon aus dem Abyss zu rufen und eine gewisse Kontrolle über ihn auszuüben. Allerdings tun die meisten Dämonen, die auf diese Weise auf die Materielle Ebene gebracht werden, alles, was in ihrer Macht steht, um Chaos zu säen oder für Zwietracht und Streit zu sorgen."
      },
      {
        titel: "Brut des Chaos",
        inhalt: "Der Abyss erschafft Dämonen als Erweiterung seiner selbst und formt die Unholde spontan aus Schmutz und Gewalt. Einige sind einzigartige Monstren, andere stellen einheitliche Arten dar, die untereinander fast identisch sind. Andere Dämonen (wie Manen) werden aus sterblichen Seelen erschaffen, die von den Göttern abgelehnt oder verflucht wurden oder die aus anderen Gründen im Abyss gefangen worden sind."
      },
      {
        titel: "Launenhafter Aufstieg",
        inhalt: "Dämonen respektieren einzig und allein Macht. Ein mächtiger Dämon befehligt deshalb kreischende Meuten schwächerer Dämonen, weil er schwächere Dämonen, die seinen Befehlen nicht folgen wollen, einfach zerstören kann. Der Status eines Dämons wächst mit dem Blut, das er vergießt; je mehr Feinde ihm zum Opfer fallen, umso machtvoller wird er. Ein Dämon könnte als Mane in die Welt gebracht werden, dann zu einem Dretch werden und sich schließlich in einen Vrock verwandeln, nachdem er unendlich lange im Abyss gekämpft und überlebt hat. Solche Erhebungen sind allerdings selten, da die meisten Dämonen zerstört werden, ehe sie nennenswerte Macht erlangen können. Die Mächtigsten unter jenen, die überleben, sind die Dämonenfürsten, die drohen, den Abyss mit ihren endlosen Kriegen zu zerfetzen. Indem sie beträchtliche magische Macht aufwenden, können Dämonenfürsten schwächere Dämonen zu mächtigeren machen, doch sind solche Beförderungen niemals die Folge der Taten oder Leistungen des Dämons. Vielmehr verwandelt ein Dämonenfürst vielleicht einen Mane in einen Quasit, wenn er einen unsichtbaren Spion braucht, oder er verwandelt eine Armee von Dretchs in Hezrous, wenn er gegen einen feindlichen Fürsten in die Schlacht zieht. Dämonenfürsten erheben Dämonen nur selten in den höchsten Rang, da sie fürchten, Rivalen um ihre eigene Macht zu erschaffen."
      },
      {
        titel: "Invasion aus dem Abyss",
        inhalt: "Wo auch immer sie durch den Abyss wandern, suchen Dämonen nach Portalen auf andere Ebenen. Sie sehnen sich nach der Gelegenheit, ihrem Heimatreich zu entkommen und ihren dunklen Einfluss im ganzen Multiversum zu verbreiten. Sie wollen die Werke der Götter zunichte machen, Zivilisationen niederreißen und den Kosmos in Verzweiflung und Unheil stürzen. Einige der finstersten Legenden der sterblichen Welt drehen sich um die Zerstörung, die von Dämonen verursacht wird, die in die Welt losgelassen wurden. Und so werden selbst Nationen, die in bittere Auseinandersetzungen verwickelt sind, ihre Meinungsverschiedenheiten beiseite legen, um zu helfen, einen Dämonenausbruch einzudämmen oder Durchbrüche aus dem Abyss zu versiegeln, ehe diese Unholde ausbrechen können."
      },
      {
        titel: "Zeichen der Korruption",
        inhalt: "Dämonen tragen den Makel der Korruption des Abyss in sich. Ihre bloße Anwesenheit macht die Welt zu einem schlechteren Ort. Pflanzen verdorren und sterben in Gegenden, in denen es zu Durchbrüchen aus dem Abyss kommt und wo Dämonen auftauchen. Tiere meiden Orte, an denen Dämonen getötet haben. Die Stätte einer dämonischen Heimsuchung könnte von einem Gestank verdorben sein, der niemals schwindet, von Gegenden bitterer Kälte oder sengender Hitze oder von dauerhaften Schatten, die die Orte kennzeichnen, wo sich die Unholde aufgehalten haben."
      },
      {
        titel: "Ewiges Böse",
        inhalt: "Außerhalb des Abyss ist der Tod nur ein unbedeutendes Ärgernis, das kein Dämon fürchtet. Gewöhnliche Waffen können diese Unholde nicht aufhalten, und viele Dämonen sind resistent gegen die Energie der mächtigsten Zauber. Wenn ein glücklicher Held es schafft, einen Dämon im Kampf niederzustrecken, dann löst sich dieser in faulig stinkendes Blut auf. Er formt sich dann augenblicklich im Abyss neu. Sein Geist und seine Essenz sind intakt und sein Hass entflammt. Die einzige Art, einen Dämon wirklich zu töten, ist es, ihn im Abyss ausfindig zu machen und dort zu töten."
      },
      {
        titel: "Geschützte Essenz",
        inhalt: "Ein mächtiger Dämon kann Schritte einleiten, um seine Lebensessenz zu schützen. Dabei verwendet er geheime Methoden und Metalle aus dem Abyss, um ein Amulett zu erschaffen, in das ein Teil dieser Essenz eingearbeitet wird. Wenn die Gestalt des Dämons im Abyss jemals zerstört wird, erlaubt es ihm das Amulett, sich an einem Ort und einer Zeit seiner Wahl neu zu formen. Ein Dämonenamulett zu erlangen ist ein gefährliches Unterfangen, und es nur zu suchen bringt schon das Risiko, die Aufmerksamkeit des Dämons auf sich zu ziehen, der es erschaffen hat. Eine Kreatur, die ein Dämonenamulett in ihrem Besitz hat, kann dem Dämon, dessen Lebensessenz das Amulett birgt, Gefallen abtrotzen – oder große Schmerzen verursachen, wenn sich der Unhold widersetzt. Wenn das Amulett zerstört wird, ist der Dämon, der es erschaffen hat, für ein Jahr und einen Tag im Abyss gefangen."
      },
      {
        titel: "Dämonenkulte",
        inhalt: "Trotz der dunklen Risiken, die jeder Umgang mit Unholden birgt, ist das sterbliche Reich voller Kreaturen, die sich nach dämonischer Macht sehnen. Dämonenfürsten manipulieren diese sterblichen Diener, sodass sie immer verderbtere Taten ausführen und so die Pläne des Dämonenfürsten vorantreiben. Im Austausch erhalten sie Magie und andere Gaben. Allerdings betrachtet ein Dämon alle Sterblichen, die ihm dienen, als bloße Werkzeuge, die er verwenden und dann auf eine Laune hin wegwerfen kann, was ihre sterbliche Seele dem Abyss übereignet."
      },
      {
        titel: "Dämonenbeschwörung",
        inhalt: "Wenige Taten sind so gefährlich wie die Beschwörung eines Dämons. Selbst Magier, die unverhohlen mit Teufeln verhandeln, fürchten die Unholde des Abyss. Auch wenn Dämonen sich danach sehnen, Chaos auf der Materiellen Ebene zu verbreiten, zeigen sie keine Dankbarkeit, wenn sie dorthin gebracht werden. Sie zürnen gegen ihren Kerker und verlangen, freigelassen zu werden. Wer das Risiko eingeht, einen Dämonen zu beschwören, könnte dies tun, um Informationen von ihm zu erhalten, ihn in seinen Dienst zu zwingen oder ihn auf eine Mission auszuschicken, die nur eine Kreatur des absoluten Bösen vollenden kann. Vorbereitung ist der Schlüssel. Erfahrene Beschwörer wissen, welche Zauber und magischen Gegenstände sie nutzen können, um einen Dämon dazu zu zwingen, sich dem Willen eines anderen zu beugen. Wenn nur ein einzelner Fehler gemacht wird, zeigt ein Dämon, der sich losreißt, keine Gnade und macht seinen Beschwörer zum ersten Opfer seines Zorns."
      },
      {
        titel: "Gebundene Dämonen",
        inhalt: "Das Buch der niederträchtigen Dunkelheit, die Schwarzen Schriftrollen von Ahm und das Demonomicon von Iggwilv sind die wichtigsten Werke zu allen dämonischen Fragen. Diese uralten Schriften beschreiben Techniken, die die Essenz eines Dämons auf der Materiellen Ebene einsperren können, um ihn in eine Waffe, ein Götzenbild oder ein Schmuckstück zu sperren und so seine Rückkehr in den Abyss zu verhindern. Ein Gegenstand, der einen Dämon binden soll, muss speziell mit unheiligen Anrufungen und unschuldigem Blut vorbereitet werden. Er strahlt greifbares Böse aus und lässt die Luft in der Umgebung kühl und übelriechend werden. Eine Kreatur, die einen solchen Gegenstand verwendet, durchlebt verstörende Träume und bösartige Impulse, kann aber den Dämon, dessen Essenz in dem Gegenstand gefangen ist, kontrollieren. Den Gegenstand zu zerstören befreit den Dämon, der sofort Rache gegen den anstrebt, der ihn gebunden hat."
      },
      {
        titel: "Dämonische Besessenheit",
        inhalt: "Egal, wie sicher er gebunden ist, ein mächtiger Dämon findet oft eine Möglichkeit, einem Gegenstand zu entkommen, der ihn birgt. Wenn eine dämonische Essenz ihrem Behältnis entkommt, kann sie einen sterblichen Wirt in Besitz nehmen. Manchmal kann ein solcher Unhold heimlich genug sein, um diese Inbesitznahme zu verbergen. Zu anderen Zeiten entfesselt er die volle Wucht seiner unheiligen Triebe durch seine neue Gestalt. Solange der Dämon seinen Wirt in Besitz hat, ist die Seele des Wirts in Gefahr, mit dem Dämon in den Abyss gerissen zu werden, wenn dieser aus dem Fleisch ausgetrieben wird oder wenn der Wirtskörper stirbt. Wenn ein Dämon eine Kreatur in Besitz nimmt und der Gegenstand, der den Dämon bindet, zerstört wird, dann hält die Besessenheit an, bis mächtige Magie verwendet wird, um den dämonischen Geist aus seinem Wirt zu vertreiben."
      }
    ]
  }
};
