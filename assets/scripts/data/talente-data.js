// talente-data.js — Meruria Talente-Kompendium
// Erweiterbar: neues Objekt in das Array einfügen, key muss eindeutig sein.

window.TALENTE_DATA = [
  {
    id: "gewoelbeforscher",
    name: "Gewölbeforscher",
    voraussetzung: null,
    kurzbeschreibung: "Meisterschaft im Aufspüren von Fallen und Geheimtüren in Gewölben.",
    beschreibung: [
      "Du bist versiert im Aufspüren von versteckten Fallen und Geheimtüren, die man in vielen Gewölben findet, und genießt folgende Vorzüge:"
    ],
    vorzuege: [
      "Du bist im Vorteil, wenn du Rettungswürfe ablegst, um Fallen auszuweichen oder ihren Effekten zu widerstehen.",
      "Du bist im Vorteil bei Würfen auf Weisheit (Wahrnehmung) und Intelligenz (Nachforschungen), um Geheimtüren zu finden beziehungsweise wahrzunehmen.",
      "Du besitzt eine Resistenz gegen Schaden, der von Fallen verursacht wird.",
      "Wenn du dich mit Reisetempo fortbewegst, leidest du nicht unter dem −5 Abzug auf deinen passiven Weisheitswert (Wahrnehmung)."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "meisterschaft-schwerer-waffen",
    name: "Meisterschaft schwerer Waffen",
    voraussetzung: null,
    kurzbeschreibung: "Nutze das Gewicht deiner Waffe, um verheerende Hiebe zu landen.",
    beschreibung: [
      "Du hast gelernt, das Gewicht von Waffen zu deinem Vorteil zu nutzen, wodurch die Wucht deiner Hiebe verstärkt wird. Du erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Wenn du in deinem Zug einen kritischen Treffer mit einer Nahkampfwaffe erzielst oder eine Kreatur mit einer Nahkampfwaffe auf 0 Trefferpunkte reduzierst, kannst du deine Bonusaktion aufwenden, um einen weiteren Nahkampfangriff durchzuführen.",
      "Bevor du einen Nahkampfangriff mit einer schweren Waffe ausführst, in deren Umgang du geübt bist, kannst du dich dazu entscheiden, einen Malus von −5 auf den Angriffswurf hinzunehmen, um den verursachten Schaden bei einem Treffer um 10 zu erhöhen."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "scharfer-verstand",
    name: "Scharfer Verstand",
    voraussetzung: null,
    kurzbeschreibung: "Außergewöhnliches Gedächtnis für Zeiten, Richtungen und Einzelheiten.",
    beschreibung: [
      "Du bist außergewöhnlich gut darin, dir Zeiten, Richtungen und Einzelheiten einzuprägen, und erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Intelligenz um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du weißt immer, wo Norden ist.",
      "Du weißt immer, wie viele Stunden es zum nächsten Sonnenauf- oder -untergang sind.",
      "Du kannst dich genau an alles erinnern, was du im vergangenen Monat gesehen oder gehört hast."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "aarakocra-elementarmagie",
    name: "Aarakocra-Elementarmagie",
    voraussetzung: "Aarakocra",
    kurzbeschreibung: "Dein Studium der Luft und der Winde hat verborgene magische Kräfte freigesetzt.",
    beschreibung: [
      "Dein Studium der Luft und der Winde hat Kräfte freigesetzt, die nur wenige andere Aarakocra besitzen. Dank deiner Vorfahren kannst du die Luft manipulieren, um verschiedene Effekte zu erzielen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst den Zaubertrick Windbö.",
      "Du hast die Wahl zwischen dem Zauber Dolchwolke, dem Zauber Staubteufel und dem Zauber Schutzwind. Du lernst den gewählten Zauber und kannst ihn einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Intelligenz, Weisheit oder Charisma ist deine Zauberfertigkeit für diese Zaubersprüche. Wähle das Attribut, wenn du dieses Talent wählst.",
      "Wenn du einen Angriffswurf machst und triffst, kannst du einen Windstoß auf das Ziel richten und es zwingen, bis zu 1,5 Meter von dir weggestoßen zu werden. Ein großes oder größeres Wesen oder Objekt ist davon nicht betroffen."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "abgesandter-der-luefte",
    name: "Abgesandter der Lüfte",
    voraussetzung: "Luft-Genasi",
    kurzbeschreibung: "Nutze die Schnelligkeit des Windes, um deine Bewegungen zu lenken.",
    beschreibung: [
      "Du hast erlernt, die Schnelligkeit des Windes zum Lenken deiner Bewegungen zu nutzen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Deine Bewegungsrate erhöht sich um 1,5 m.",
      "Wenn du von einem Angriff getroffen wirst, kannst du deine Reaktion nutzen, um deinen Körper in Wind zu verwandeln und sofort in einem unbesetzten Feld innerhalb von 9 m wieder aufzutauchen, wodurch der Angriff verfehlt. Du kannst diese Fähigkeit nach einer kurzen oder langen Rast wieder einsetzen."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "anfuehrer-des-rudels",
    name: "Anführer des Rudels",
    voraussetzung: "Tabaxi",
    kurzbeschreibung: "Deine anziehende Persönlichkeit lässt katzenartige Kreaturen sich nach dir richten.",
    beschreibung: [
      "Du hast eine anziehende Persönlichkeit, und die Katzen scheinen sich immer nach dir zu richten. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du hast einen Vorteil bei Weisheitswürfen (Umgang mit Tieren) und Charismawürfen, die du mit katzenartigen Kreaturen durchführst.",
      "Du erhältst Übung in einer Fertigkeit oder ein Werkzeug deiner Wahl.",
      "Du erlernst die Zauber Vertrauten finden und Mit Tieren sprechen, und du kannst beide nach Belieben ohne materielle Komponenten wirken. Wenn du die Zauber nicht von einer anderen Quelle erhältst, kannst du nur einen Katzen-Vertrauten erschaffen, und du kannst nur mit Katzen kommunizieren. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "angeborene-wut",
    name: "Angeborene Wut",
    voraussetzung: "Goliaths oder Minotauren",
    kurzbeschreibung: "Die Wut deines Volkes und der wilde Kampfstil haben dich geprägt.",
    beschreibung: [
      "Die Wut deines Volkes und der wilde Kampfstil haben dich geprägt. Als Aktion kannst du während eines Kampfes in einen Wutzustand verfallen. Dieser Zustand dauert 1 Minute und bringt folgende Vorteile mit sich:"
    ],
    vorzuege: [
      "Wenn du einen Angriff mit einer Nahkampfwaffe mit Stärke ausführst, addierst du deinen Übungsbonus zum verursachten Schaden.",
      "Als Reaktion auf Hieb-, Stich- oder Wuchtschaden kannst du diesen Schaden um die Hälfte reduzieren. Du kannst dies nur dreimal tun, dann endet deine Wut.",
      "Deine Bewegungsrate erhöht sich um 1,5 Meter, wenn du keine schwere Rüstung trägst.",
      "Wenn du auf 0 Trefferpunkte fällst, aber nicht sofort stirbst, kannst du stattdessen auf 1 Trefferpunkt fallen. Unabhängig davon, ob du dich entscheidest, auf 1 Trefferpunkt zu fallen oder nicht, endet deine Wut.",
      "Wenn du in der Lage bist, Zauber zu wirken, kannst du sie während deines Zorns weder wirken noch dich darauf konzentrieren."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "animalische-allianz",
    name: "Animalische Allianz",
    voraussetzung: "Wandler",
    kurzbeschreibung: "Deine Verbundenheit zu deinem Erbe lässt die Grenzen zwischen deinem menschlichen und tierischen Ich verschwimmen.",
    beschreibung: [
      "Deine Verbundenheit zu deinem Erbe lässt die Grenzen zwischen deinem menschlichen und tierischen Ich verschwimmen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Weisheit (Mit Tieren umgehen). Wenn du in dieser Fertigkeit bereits geübt bist, erlangst du Expertise.",
      "Du erlernst den Zauber Mit Tieren sprechen und kannst ihn einmal pro kurzer oder langer Rast wirken, ohne einen Zauberplatz zu verbrauchen.",
      "Du kannst dein Merkmal \"Wandeln\" ein zusätzliches Mal einsetzen. Verbrauchte Anwendungen stehen dir nach einer langen Rast wieder zur Verfügung."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "beruehrung-von-sessinek",
    name: "Berührung von Sess'inek",
    voraussetzung: "Echsenmenschen",
    kurzbeschreibung: "Der dämonische Gott der Echsen hat dich mit dämonenhafter Energie ausgestattet.",
    beschreibung: [
      "Der dämonische Gott der Echsen hat dich mit dämonenhafter Energie ausgestattet. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du lernst, Infernalisch zu sprechen, zu lesen und zu schreiben. Wenn du Infernalisch bereits kennst, lernst du eine andere Sprache deiner Wahl.",
      "Du erlangst Immunität gegen den Zustand verängstigt.",
      "Du erhältst Widerstand gegen Feuer- und Giftschaden.",
      "Du erhältst einen Vorteil bei Rettungswürfen gegen Vergiftung."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "beschuetzer-der-natur",
    name: "Beschützer der Natur",
    voraussetzung: "Firbolg",
    kurzbeschreibung: "Du hast viel dabei gelernt, andere daran zu hindern, die von dir geschützten Gebiete zu gefährden.",
    beschreibung: [
      "Du hast viel dabei gelernt, andere daran zu hindern, die von dir geschützten Gebiete zu gefährden. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "In der freien Natur erhältst du 1,5 m zusätzliche Bewegungsrate.",
      "Du erlangst Übung in Charisma (Überzeugen). Wenn du in Überzeugen bereits geübt bist, erlangst du Expertise.",
      "Als Aktion kannst du diejenigen betören, die der Natur schaden wollen. Wähle eine Kreatur im Umkreis von 9 m um dich. Sie muss einen Rettungswurf in Weisheit bestehen (SG 8 + Übungsbonus + dein Charismamodifikator) oder 1 Stunde lang von dir verzaubert werden. Eine Kreatur hat bei diesem Rettungswurf einen Nachteil, wenn sie in der letzten Runde ein Tier oder eine Pflanze verletzt hat. Wenn das Ziel Schaden erleidet, kann es den Rettungswurf wiederholen und den Effekt bei einem Erfolg beenden. Du kannst diesen Wurf einmal machen und erhältst die Fähigkeit, ihn nach einer kurzen oder langen Rast zu wiederholen."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "bindung-der-jahreszeiten",
    name: "Bindung der Jahreszeiten",
    voraussetzung: "Eladrin",
    kurzbeschreibung: "Du hast eine noch bessere Bindung zu den Jahreszeiten als andere deiner Art.",
    beschreibung: [
      "Du hast eine noch bessere Bindung zu den Jahreszeiten als andere deiner Art. Du erhältst die folgenden Vorteile:",
      "Du erhältst außerdem einen Vorteil, der von deiner aktuellen Jahreszeit abhängt — wähle beim Erlernen dieses Talents eine der folgenden Jahreszeiten:"
    ],
    vorzuege: [
      "Du bist in enger Verbindung mit den Kräften der Natur, was dir Übung in Intelligenz (Naturkunde) verleiht.",
      "Herbst: Der Kreislauf des Lebens endet mit dem Herbst, wenn die Pflanzen absterben und die Tiere beginnen, ihre Vorräte für den Winter anzulegen. Diese Vertrautheit mit dem Tod verleiht dir Resistenz gegen nekrotischen Schaden. Du erlernst den Zaubertrick Kalte Hand und den Zauber Verderben, den du auf Stufe 1 einmal pro lange Rast wirken kannst. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma.",
      "Frühling: Die Stürme des Frühlings bringen neues Leben ins Land. Diese Vertrautheit verleiht dir Resistenz gegen Blitzschaden. Du erlernst den Zaubertrick Blitzköder und den Zauber Donnerwoge, den du auf Stufe 1 einmal pro lange Rast wirken kannst. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma.",
      "Sommer: Die Hitze des Sommers ist allgegenwärtig. Diese Vertrautheit verleiht dir Resistenz gegen Feuerschaden. Du erlernst den Zaubertrick Flammen erzeugen und den Zauber Brennende Hände, den du auf Stufe 1 einmal pro lange Rast wirken kannst. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma.",
      "Winter: Du bist mit Kälte und eisigen Temperaturen vertraut. Diese Vertrautheit verleiht dir Resistenz gegen Kälteschaden. Du erlernst den Zaubertrick Kältestrahl und den Zauber Gefrierende Finger, den du auf Stufe 1 einmal pro lange Rast wirken kannst. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "blut-und-gemetzel",
    name: "Blut und Gemetzel",
    voraussetzung: "Minotauren",
    kurzbeschreibung: "Du hast deine Hörner geschärft und gepflegt, um sie zu tödlichen, zerfetzenden Waffen zu machen.",
    beschreibung: [
      "Du hast deine Hörner geschärft und gepflegt, um sie zu tödlichen, zerfetzenden Waffen zu machen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wenn du einen Angriff mit deinen Hörnern ausführst, erhöht sich deine Reichweite für kritische Treffer um 1.",
      "Wenn du eine Kreatur mit deinen Hörnern triffst, kannst du sie aufschlitzen, sodass sie blutet. Das Ziel muss zu Beginn jeder seiner Runden einen Konstitutionsrettungswurf ablegen. Bei einem Fehlschlag erleidet die Kreatur Stichschaden in Höhe deines Übungsbonus. Der Zustand hält so lange an, bis die Kreatur Heilung erhält oder der Rettungswurf dreimal erfolgreich ist. Der Rettungswurf ist gleich 8 + dein Übungsbonus + dein Stärkemodifikator. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht, danach musst du eine lange Rast einlegen, bevor du sie erneut einsetzen kannst. Wenn du einen kritischen Treffer mit den Hörnern landest, erhältst du eine Anwendung dieser Fähigkeit zurück."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "brutale-gewalt",
    name: "Brutale Gewalt",
    voraussetzung: "Grottenschrate",
    kurzbeschreibung: "Deine Stärke auf dem Schlachtfeld ist in ihrer ursprünglichen Wildheit unübertroffen.",
    beschreibung: [
      "Deine Stärke auf dem Schlachtfeld ist in ihrer ursprünglichen Wildheit unübertroffen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Deine Reichweite für kritische Treffer erhöht sich um 1.",
      "Wenn du einen Angriff mit einer Nahkampfwaffe gegen eine Kreatur ausführst, kannst du dich entscheiden, dies mit Vorteil zu tun. Wenn der Angriff trifft, wirfst du einen der Schadenswürfel der Waffe ein weiteres Mal und addierst ihn als zusätzlichen Schaden. Du kannst diese Fähigkeit einmal pro lange Rast einsetzen."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "chamaeleon",
    name: "Chamäleon",
    voraussetzung: "Wechselbälger",
    kurzbeschreibung: "Dein Gestaltwandeln ist so komplex, dass es selbst mit magischen Mitteln schwer zu durchschauen ist.",
    beschreibung: [
      "Dein Gestaltwandeln ist so komplex, dass es selbst mit magischen Mitteln schwer zu durchschauen ist. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du hast einen Vorteil bei allen Rettungswürfen gegen Zauber oder Effekte, die deine wahre Natur enthüllen sollen, einschließlich Wahrsagungszauber.",
      "Wenn du einen Wurf auf Charisma (Täuschen) nicht bestehst, kannst du ihn wiederholen. Der neue Wurf muss akzeptiert werden. Dieses Merkmal kannst du einmal pro kurzer Rast einsetzen.",
      "Du kannst Unauffindbarkeit, auf dich selbst zielend, nach Belieben wirken. Charisma ist dein Attribut für diesen Zauber."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "der-griff-nach-der-erde",
    name: "Der Griff nach der Erde",
    voraussetzung: "Erd-Genasi",
    kurzbeschreibung: "Du nutzt die Macht der Erde, um deine Feinde zu behindern.",
    beschreibung: [
      "Du nutzt die Macht der Erde, um deine Feinde zu behindern. Du erhältst folgende Vorteile:"
    ],
    vorzuege: [
      "Einmal pro Runde kannst du als Teil der Angriffsaktion auf den Boden schlagen, wodurch Erde und Felsen hochgeschleudert werden und eine Kreatur im Umkreis von 9 m umschließen. Diese Kreatur muss einen Stärkerettungswurf ablegen (SG 8 + dein Übungsbonus + dein Stärkemodifikator), oder sie erleidet Schaden in Höhe deiner Stufe und ist bis zum Ende deines nächsten Zuges gefesselt. Bei einem Erfolg erleidet die Kreatur Hiebschaden in Höhe der Hälfte deiner Stufe (abgerundet) und erleidet keinen zusätzlichen Effekt. Wenn sich die Kreatur in Reichweite befindet, kannst du außerdem eine Bonusaktion einsetzen, um nach diesem Angriff einen Nahkampfangriff gegen sie auszuführen. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht, und du erhältst alle Einsätze dieser Fähigkeit zurück, wenn du eine lange Rast beendest."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "der-unersch-tterliche-berg",
    name: "Der unerschütterliche Berg",
    voraussetzung: "Gebirgszwerge oder Felsengnome",
    kurzbeschreibung: "Das Blut der alten Helden macht dich furchtlos im Angesicht von großen Gefahren und Herausforderungen.",
    beschreibung: [
      "Das Blut der alten Helden macht dich furchtlos im Angesicht von großen Gefahren und Herausforderungen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du hast einen Vorteil bei Rettungswürfen gegen Verängstigung.",
      "Wenn du gegen eine Kreatur kämpfst, die größer ist als du, kannst du, wenn dir ein Rettungswurf misslingt, stattdessen entscheiden, dass er gelingt. Nachdem du diese Fähigkeit eingesetzt hast, musst du eine lange Rast einlegen, bevor du sie erneut einsetzen kannst."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "die-ewige-flamme",
    name: "Die Ewige Flamme",
    voraussetzung: "Feuer-Genasi",
    kurzbeschreibung: "Du hast gelernt, die Flamme in dir zu bändigen und als Waffe einzusetzen.",
    beschreibung: [
      "Du hast gelernt, die Flamme in dir zu bändigen. Als Aktion umgibst du dich mit einem Flammenkranz, der eine Minute lang anhält. Solange dieser Kranz aktiv ist, erhältst du die folgenden Vorteile:"
    ],
    vorzuege: [
      "Die Flammen schaden weder dir noch deinem Besitz, und sie verbreiten helles Licht bis zu einer Entfernung von 9 m und schwaches Licht für weitere 9 m.",
      "Jede Kreatur, die dich mit einem Nahkampfangriff aus einem Umkreis von 1,5 m trifft, erleidet Feuerschaden in Höhe deines Übungsbonus.",
      "Wenn du Feuerschaden würfelst, während dieser Kranz aktiv ist, kannst du zusätzlichen Feuerschaden in Höhe deines Übungsbonus verursachen.",
      "Jede Kreatur, die dich im Griff hat oder von dir im Griff gehalten wird, erleidet zu Beginn jeder ihrer Runden Feuerschaden in Höhe deines Übungsbonus.",
      "Als Bonusaktion kannst du in jedem deiner Züge einen Feuerstrahl aus dem Kranz austreten lassen. Führe einen Fernkampf-Zauberangriff gegen ein Ziel in einem Umkreis von 9 m um dich herum aus. Bei einem Treffer erleidet das Ziel 1W8 Feuerschaden. Dein Attributsmodifikator hierfür ist Weisheit, Intelligenz oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst.",
      "Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht, und du erhältst alle verbrauchten Einsätze zurück, wenn du eine lange Rast beendest."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "drachenfurcht",
    name: "Drachenfurcht",
    voraussetzung: "Chromatische Drachenblütige",
    kurzbeschreibung: "Wenn du wütend bist, kannst du Bedrohung ausstrahlen.",
    beschreibung: [
      "Wenn du wütend bist, kannst du Bedrohung ausstrahlen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Charisma (Einschüchtern). Wenn du bereits Übung in Einschüchtern hast, erhältst du Expertise in dieser Fertigkeit.",
      "Immer wenn du einen Einsatz deiner Eigenschaft Atemwaffe verbrauchst, kannst du auch ein Gebrüll ausstoßen, das jede feindliche Kreatur im Umkreis von 9 Metern dazu zwingt, einen Weisheitsrettungswurf abzulegen (SG 8 + dein Übungsbonus + dein Charismamodifikator). Der Rettungswurf gelingt dem Ziel automatisch, wenn es dich nicht hören oder sehen kann. Bei einem misslungenen Rettungswurf wird das Ziel 1 Minute lang vor dir verängstigt. Am Ende jeder Runde des verängstigten Ziels kann es den Rettungswurf wiederholen, wobei der Effekt bei einem Erfolg für das Ziel endet."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "drachengespuer",
    name: "Drachengespür",
    voraussetzung: "Edelstein Drachenblütige",
    kurzbeschreibung: "Deine drakonischen Vorfahren haben dir ein verbessertes Gespür und eine erhöhte Resonanz mit deinem natürlichen Element vererbt.",
    beschreibung: [
      "Deine drakonischen Vorfahren haben dir ein verbessertes Gespür und eine erhöhte Resonanz mit deinem natürlichen Element vererbt. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Intelligenz (Naturkunde). Wenn du bereits in Naturkunde geübt bist, erhältst du Expertise.",
      "Du hast einen Vorteil bei Würfen auf Intelligenz (Naturkunde), wenn du nach Edelsteinvorkommen suchst.",
      "Wenn du Schaden erleidest, der der magischen Affinität deiner Edelstein-Abstammung entspricht, kannst du deine Reaktion verwenden, um die Energie in den Edelsteinen deines Körpers zu speichern und bis zum Ende deines nächsten Zuges immun gegen diese Schadensart zu werden. Wenn du Energie gespeichert hast, kannst du in deinem nächsten Zug einen der folgenden Vorteile erhalten: Du kannst deine Bonusaktion verwenden, um die gespeicherte Energie in Lebenskraft zu verwandeln und temporäre Trefferpunkte in Höhe von 1W6 + deinem Übungsbonus zu erhalten (steigt auf 1W8 auf Stufe 4, 1W10 auf Stufe 8, 1W12 auf Stufe 12). Oder du kannst, wenn du dein Merkmal Odemwaffe einsetzt, die gespeicherte Energie kanalisieren, um die Macht deines Atems zu verstärken — füge dem Schaden 1W10 + deinen Übungsbonus hinzu; bei einem erfolgreichen Rettungswurf erleiden betroffene Kreaturen halb so viel Schaden. Die Häufigkeit, mit der du dieses Merkmal einsetzen kannst, entspricht deinem Übungsbonus. Verbrauchte Anwendungen stehen dir nach einer langen Rast wieder zur Verfügung."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "drachenhaut",
    name: "Drachenhaut",
    voraussetzung: "Drachenblütige",
    kurzbeschreibung: "Du manifestierst besonders harte Schuppen, die an deine drakonischen Vorfahren erinnern.",
    beschreibung: [
      "Du manifestierst besonders harte Schuppen, die an deine drakonischen Vorfahren erinnern. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Deine Schuppen werden härter. Solange du keine Rüstung trägst, kannst du deine Rüstungsklasse als 13 + deinen Geschicklichkeitsmodifikator berechnen. Auch wenn du einen Schild trägst, kannst du diesen Vorteil trotzdem nutzen.",
      "Wenn eine Kreatur einen Angriffswurf gegen dich ausführt, kannst du deine Reaktion verwenden, um diesen mit den gehärteten Schuppen an deinem Schweif zu parieren. Der Angriffswurf der Kreatur schlägt fehl. Du kannst dieses Merkmal einmal pro lange Rast einsetzen."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "drachensegen",
    name: "Drachensegen",
    voraussetzung: "Metallische Drachenblütige",
    kurzbeschreibung: "Deine drakonischen Vorfahren wurden von einem der Drachengötter gesegnet und ihr Blut verleiht dir die Kraft, dich und deine Verbündeten widerstandsfähiger zu machen.",
    beschreibung: [
      "Deine drakonischen Vorfahren wurden von einem der Drachengötter gesegnet und ihr Blut verleiht dir die Kraft, dich und deine Verbündeten widerstandsfähiger zu machen und Erze aufzuspüren. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Intelligenz (Naturkunde). Wenn du bereits in Naturkunde geübt bist, erhältst du Expertise.",
      "Du hast einen Vorteil bei Würfen auf Intelligenz (Naturkunde), wenn du nach Erzvorkommen suchst.",
      "Du kannst deine Aktion verwenden, um mit deinem geweihten Atem einen magischen Orb mit einem Durchmesser von 6 m an deiner Position zu erschaffen. Der Orb fliegt sofort ungehindert durch alle Hindernisse hindurch, bis sein Mittelpunkt 18 m von dir entfernt ist und er sich daraufhin auflöst. Verbündete Kreaturen, die der Orb berührt, erhalten temporäre Trefferpunkte in Höhe von 2W6 + deinem Übungsbonus. Du kannst dieses Merkmal einmal pro lange Rast einsetzen."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "drachensicht",
    name: "Drachensicht",
    voraussetzung: "Drachenblütige",
    kurzbeschreibung: "Deine drakonischen Vorfahren verleihen dir eine verbesserte Sehkraft und ein Auge für Reichtum.",
    beschreibung: [
      "Deine drakonischen Vorfahren verleihen dir eine verbesserte Sehkraft und Erkennung sowie ein Auge für Reichtum. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Weisheit (Wahrnehmung). Wenn du bereits geübt in Wahrnehmung bist, erhältst du Expertise in dieser Fertigkeit.",
      "Du erhältst einen Vorteil bei Intelligenz (Nachforschung), um Münzen und andere wertvolle Gegenstände aufzuspüren, und du erhältst einen Vorteil bei Attributswürfen, um den Wert eines Gegenstandes zu bestimmen.",
      "Du kannst im Dunkeln bis zu einer Reichweite von 20 Metern sehen und bis zu einer Reichweite von 3 Metern blind sehen."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "dunkelelfen-hochmagie",
    name: "Dunkelelfen-Hochmagie",
    voraussetzung: "Dunkelelfen",
    kurzbeschreibung: "Du erlernst mehr von der für Dunkelelfen typischen Magie.",
    beschreibung: [
      "Du erlernst mehr von der für Dunkelelfen typischen Magie. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du lernst den Zauber Magie entdecken und kannst ihn nach Belieben wirken, ohne einen Zauberplatz zu verbrauchen. Du lernst außerdem Schweben und Magie bannen, die du jeweils einmal pro lange Rast wirken kannst, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst.",
      "Wenn einer anderen Kreatur ein Rettungswurf gegen deinen Zauberrettungswurf-SG gelingt, kannst du diese Kreatur zwingen, ihren Rettungswurf zu wiederholen. Sie muss dann den zweiten Wurf akzeptieren. Wenn du diese Fähigkeit einmal benutzt hast, kannst du sie erst wieder einsetzen, wenn du eine kurze oder lange Rast beendet hast."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "ebenenwahrnehmung",
    name: "Ebenenwahrnehmung",
    voraussetzung: "Githzerai",
    kurzbeschreibung: "Deine Sicht ist durch die Ebenenwanderung verändert und anderen deiner Rasse überlegen.",
    beschreibung: [
      "Deine Sicht ist durch die Ebenenwanderung verändert und anderen deiner Rasse überlegen. Du erhältst folgende Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Dunkelheitssicht von 27 m und Blindsicht von 1,5 m.",
      "Du erhältst Übung in Weisheit (Wahrnehmung) oder Intelligenz (Nachforschung).",
      "Schummriges Licht verursacht keinen Nachteil bei Weisheitsproben (Wahrnehmung) oder Intelligenzproben (Nachforschung), die sich auf deine Sicht verlassen."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "einhornmagie",
    name: "Einhornmagie",
    voraussetzung: "Zentauren",
    kurzbeschreibung: "Einst schlafende Einhornmagie fließt durch deine Adern und verleiht dir die für Einhörner typische Zauberkraft.",
    beschreibung: [
      "Deine Familie ist eine der wenigen, die das Glück haben, eine Blutlinie mit einem Einhorn-Vorfahren zu haben. Einst schlafende Magie fließt nun durch deine Adern und verleiht dir die für Einhörner typische Zauberkraft. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du kannst dir ein Einhornhorn auf der Stirn wachsen lassen.",
      "Du erlernst den Zaubertrick Druidenkunst.",
      "Du erlernst den Zauber Gutes und Böses entdecken und kannst ihn nach Belieben wirken.",
      "Du erlernst den Zauber Verstricken und den Zauber Spurloses Gehen. Du kannst jeden Zauber dieser beiden einmal pro langer Rast wirken, ohne einen Zauberplatz zu verbrauchen. Intelligenz, Weisheit oder Charisma sind deine Attributsmodifikatoren für diese Zaubersprüche. Wähle das Attribut, wenn du dieses Talent auswählst."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "elfische-treffsicherheit",
    name: "Elfische Treffsicherheit",
    voraussetzung: "Elfen oder Halbelfen",
    kurzbeschreibung: "Die legendäre Treffsicherheit der Elfen mit Präzisionsangriffen ist nun auch dein.",
    beschreibung: [
      "Die Treffsicherheit der Elfen ist legendär, besonders die der Elfenbogenschützen und Zauberwirker. Sie haben eine unheimliche Treffsicherheit mit Angriffen, die eher auf Präzision als auf roher Gewalt beruhen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Jedes Mal, wenn du mit einem Angriff triffst, der kein kritischer Treffer ist, erhöht sich deine Reichweite für kritische Treffer um 1. Dieser Vorteil ist stapelbar, bis du einen kritischen Treffer landest, einen Angriff verfehlst oder den Kampf betrittst oder verlässt; danach wird er auf deinen Standardwert zurückgesetzt.",
      "Immer wenn du bei einem Angriffswurf einen Vorteil hast, kannst du einen der Schadenswürfel einmal wiederholen. Der zweite Wurf muss akzeptiert werden."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "entwickelte-gliedmassen",
    name: "Entwickelte Gliedmaßen",
    voraussetzung: "Wandler (Zitterkriecher)",
    kurzbeschreibung: "Das arachnidische Erbe wirkt sich in dir stärker aus als bei anderen Angehörigen deiner Rasse.",
    beschreibung: [
      "Das arachnidische Erbe wirkt sich in dir stärker aus, als bei anderen Angehörigen deiner Rasse. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du kannst wann immer du möchtest deine Spinnenbeine wachsen lassen und musst dafür nicht das Merkmal Zitterkriecher einsetzen.",
      "Deine Spinnenbeine sind weiterentwickelt und können komplexere Aufgaben erledigen, wie zum Beispiel Instrumente spielen, kochen und leichte Waffen tragen und werfen (bis zu 1 Pfund pro Bein)."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "erbe-der-drachenschildkroete",
    name: "Erbe der Drachenschildkröte",
    voraussetzung: "Tortels",
    kurzbeschreibung: "Deine Abstammung enthält die Essenz einer Drachenschildkröte, oder du hast den Segen einer solchen erhalten.",
    beschreibung: [
      "Deine Abstammung enthält die Essenz einer Drachenschildkröte, oder du hast den Segen einer solchen erhalten. Infolgedessen erhältst du die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst eine Schwimmgeschwindigkeit, die deiner Schrittgeschwindigkeit entspricht.",
      "Du erhältst Resistenz gegen Feuerschaden.",
      "Wenn du die Angriffsaktion ausführst, kannst du einen deiner Angriffe durch das Ausatmen einer Wolke aus kochendem Dampf in einem Kegel von 7,5 m ersetzen. Jede Kreatur im Bereich muss einen Rettungswurf auf Geschicklichkeit machen (SG 8 + Konstitutionsmodifikator + Übungsbonus). Bei einem Fehlschlag erleidet die Kreatur 2W10 Feuerschaden, bei Erfolg die Hälfte. Unterwasser zu sein gewährt keine Resistenz gegen diesen Schaden. Der Schaden erhöht sich auf 3W10 auf Stufe 5, 4W10 auf Stufe 11 und 5W10 auf Stufe 17. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "extrem-dickes-fell",
    name: "Extrem dickes Fell",
    voraussetzung: "Wandler (Tierfell)",
    kurzbeschreibung: "Dein Fell ist weitaus dicker und robuster als bei anderen Wandlern deiner Art.",
    beschreibung: [
      "Das Blut deines Erbes fließt dicker in deinem Körper, dein Fell ist weitaus dicker und robuster als bei anderen Wandlern deiner Art. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wenn du deine Bonusaktion zum Verwandeln einsetzt, erhöht sich die Anzahl der temporären Trefferpunkte, die du erhältst, um weitere 1W6. Dies erhöht sich mit steigender Stufe: auf 2W6 bei Stufe 4, auf 3W6 bei Stufe 8, auf 4W6 bei Stufe 12, auf 5W6 bei Stufe 16 und auf 6W6 bei Stufe 20.",
      "Der Bonus auf deine Rüstungsklasse während der Verwandlung erhöht sich um die Hälfte deines Übungsbonus (abrunden).",
      "Während du verwandelt bist, erhältst du Resistenz gegen Wucht-, Hieb- und Stichwaffenschaden von nichtmagischen Waffen, die nicht versilbert sind."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "feengeister-magie",
    name: "Feengeister-Magie",
    voraussetzung: "Eladrin",
    kurzbeschreibung: "Du bist mehr als andere deiner Art mit der unbeständigen Magie der Feenwelt vertraut.",
    beschreibung: [
      "Du bist mehr als andere deiner Art mit der unbeständigen Magie der Feenwelt vertraut, was dir erlaubt, deine Form zu verändern. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du lernst, Sylvanisch zu sprechen, zu lesen und zu schreiben. Wenn du bereits Sylvanisch kannst, kannst du eine andere Sprache lernen.",
      "Du lernst den Zauber Selbstverkleidung und kannst ihn nach Belieben wirken. Du erlernst außerdem die Zauber Feenfeuer und Person bezaubern. Du kannst jeden dieser Zauber einmal wirken, ohne einen Zauberplatz zu verbrauchen, und du erlangst die Fähigkeit wieder, dies zu tun, sobald du eine lange Rast beendet hast. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "feenschreiten",
    name: "Feenschreiten",
    voraussetzung: "Hochelfen",
    kurzbeschreibung: "Dein Studium der Hochelfenkunde hat dir Feen-Kräfte verliehen und erlaubt dir, kurzzeitig durch die Feenwelt zu schreiten.",
    beschreibung: [
      "Dein Studium der Hochelfenkunde hat dir Feen-Kräfte verliehen, die nur wenige andere Elfen besitzen, mit Ausnahme deiner Eladrin-Verwandten. Indem du auf deine Feen-Abstammung zurückgreifst, kannst du kurzzeitig durch die Feenwelt schreiten, um deinen Weg von einem Ort zum anderen zu verkürzen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du lernst, Sylvanisch zu sprechen, zu lesen und zu schreiben. Wenn du bereits Sylvanisch kennst, kannst du eine andere Sprache lernen.",
      "Du erlernst einen der folgenden Zaubertricks: Flammen erzeugen, Kältestrahl, Blitzköder oder Kalte Hand. Dein Attributsmodifikator für den Zaubertrick ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst.",
      "Als Bonusaktion kannst du dich magisch bis zu 9 m weit in ein unbesetztes Feld teleportieren, das du sehen kannst. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht, und du erhältst alle verbrauchten Einsätze zurück, wenn du eine lange Rast beendest."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "fledermausflug",
    name: "Fledermausflug",
    voraussetzung: "Dhampire",
    kurzbeschreibung: "Das Vampirblut in dir erlaubt es dir, dich in eine Fledermaus zu verwandeln und blitzschnell anzugreifen.",
    beschreibung: [
      "Das Vampirblut in dir verleiht dir die Möglichkeit, dich in eine Fledermaus zu verwandeln und schnell aus kniffligen Situationen zu entkommen, oder blitzschnell anzugreifen. Du erhältst folgende Vorteile:"
    ],
    vorzuege: [
      "Du erlernst den Zauber Nebelwolke. Du kannst diesen mit diesem Merkmal einmal pro lange Rast benutzen. Dein Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst.",
      "Als Bonusaktion kannst du dich in eine Fledermaus verwandeln, um bis zu 9 m weit in ein unbesetztes Feld zu fliegen, das du sehen kannst. Deine restliche Bewegungsrate nach dem Ankommen beträgt automatisch 0. Wirst du durch diese Bewegung Ziel eines Gelegenheitsangriffs, wird dieser mit Nachteil ausgeführt. Greifst du in dieser Runde einen Gegner mit einem Nahkampfangriff an, erhältst du Vorteil auf deinen Angriffswurf. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer kurzen Rast wieder zur Verfügung."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "fluch-des-alten",
    name: "Fluch des Alten",
    voraussetzung: "Kenku",
    kurzbeschreibung: "Du hast gelernt, die Macht des alten Wesens zu nutzen, der dein Volk verflucht hat.",
    beschreibung: [
      "Du hast gelernt, die Macht des alten Wesens zu nutzen, der dein Volk verflucht hat. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du lernst den Zauber Sprachen verstehen und kannst ihn nach Belieben wirken. Außerdem erlernst du Schattenklinge und Hunger von Hadar, die du jeweils einmal wirken kannst, ohne einen Zauberplatz zu verbrauchen. Du erlangst die Fähigkeit, diese beiden Zauber auf diese Weise zu wirken, wieder, wenn du eine lange Rast beendet hast. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst.",
      "Zusätzlich erhältst du durch die Magie des Alten eine begrenzte Fähigkeit, den Geist von Kreaturen anzuzapfen. Nachdem du dich 1 Minute lang auf eine Kreatur konzentriert hast (wie bei einem Zauber), muss das Ziel einen Weisheitsrettungswurf ablegen (SG 10 + dein Übungsbonus + dein Charismamodifikator). Bei einem Fehlschlag stiehlst du ihre Stimme und kannst sie benutzen, um normal zu sprechen, ohne sie sprechen hören zu müssen. Du kannst eine Anzahl von Stimmen in deinem Geist speichern, die deinem Übungsbonus entspricht."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "fluchtreflex",
    name: "Fluchtreflex",
    voraussetzung: "Harengons",
    kurzbeschreibung: "Du bist besonders flink in Situationen, die dein Leben bedrohen.",
    beschreibung: [
      "Du bist besonders flink in Situationen, die dein Leben bedrohen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wenn du für die Initiative würfelst, ohne eine Nutzung von Hasensprung zu haben, erhältst du einen Einsatz dieser Eigenschaft zurück.",
      "Wenn du die Hälfte deiner maximalen Trefferpunkte oder weniger hast, erhöht sich deine Bewegungsrate um die Hälfte deiner maximalen Bewegungsrate. Wenn sich eine Kreatur in einem Umkreis von 1,5 m um dich bewegt, kannst du deine Reaktion nutzen und einen Einsatz deiner Eigenschaft Hasensprung verwenden, um bis zu einer Anzahl von Metern zu springen, die dem Fünffachen deines Übungsbonus entspricht, ohne Gelegenheitsangriffe zu provozieren. Du kannst diese Eigenschaft nur verwenden, wenn du noch Bewegungsrate übrig hast."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "freudiger-huepfer",
    name: "Freudiger Hüpfer",
    voraussetzung: "Harengons",
    kurzbeschreibung: "Wenn du ungewöhnlich schnell handelst, erhältst du besondere Vorteile.",
    beschreibung: [
      "Wenn du ungewöhnlich schnell handelst, erhältst du die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wenn du die Initiative würfelst, kannst du einen Wurf von 9 oder weniger als 10 behandeln.",
      "Wenn du die Initiative würfelst, darfst du deine Reaktion nutzen, um dich bis zu deiner Schrittgeschwindigkeit zu bewegen und dann eine Aktion oder eine Bonusaktion durchzuführen. Wenn du einen Zauber wirkst, muss es ein Zauber mit einer Wirkzeit von 1 Aktion sein, der nur auf eine Kreatur zielt. Wenn du auf eine feindliche Kreatur zielst, muss das Ziel eine niedrigere Initiative haben als du. Wenn du dich auf diese Weise bewegst, provozierst du keine Gelegenheitsangriffe. Du kannst dies so oft tun, wie es deinem Übungsbonus entspricht; danach musst du eine lange Rast einlegen, bevor du es wieder tun kannst."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "freund-der-welt",
    name: "Freund der Welt",
    voraussetzung: "Halbelfen",
    kurzbeschreibung: "Durch deine menschliche und elfische Abstammung bist du bei den meisten Mitgliedern der Gesellschaft sehr beliebt.",
    beschreibung: [
      "Durch deine menschliche und elfische Abstammung bist du bei den meisten Mitgliedern der Gesellschaft sehr beliebt. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst den Zaubertrick Freundschaft. Charisma ist dein Attributsmodifikator für diesen Zauberspruch.",
      "Du lernst eine Sprache deiner Wahl.",
      "Du erhältst Übung auf Charisma (Täuschen) und Charisma (Überzeugen). Wenn du bereits Übung in diesen Fertigkeiten hast, erhältst du Expertise.",
      "Du erhältst einen Vorteil bei Attributswürfen auf Charisma, mit jedem, der dir gegenüber nicht feindlich gesinnt ist, sich vor dir in Acht nimmt, oder Angst vor dir hat."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "freund-des-waldes",
    name: "Freund des Waldes",
    voraussetzung: "Firbolg oder Waldgnome",
    kurzbeschreibung: "Die Bewohner des Waldes und sogar die Bäume selbst sind dir wohlgesonnen.",
    beschreibung: [
      "Die Bewohner des Waldes und sogar die Bäume selbst sind dir wohlgesonnen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst einen Bonus auf deine Initiative in Höhe deines Übungsbonus.",
      "Wenn du dich in einem Wald aufhältst, erhältst du einen Vorteil auf Weisheitswürfe.",
      "Du lernst die Zauber Mit Tieren sprechen und Mit Pflanzen sprechen und kannst sie nach Belieben wirken, ohne materielle Komponenten zu verbrauchen. Dein Modifikator für diese Zauber ist Weisheit, Intelligenz oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "furchteinflossender-stuermer",
    name: "Furchteinflößender Stürmer",
    voraussetzung: "Zentauren",
    kurzbeschreibung: "Du bist gefährlich für einen nicht berittenen Gegner, und deine einschüchternde Präsenz kann Feinde zur Flucht bringen.",
    beschreibung: [
      "Du bist gefährlich für einen nicht berittenen Gegner, und deine einschüchternde Präsenz kann Feinde dazu bringen, die Reihen zu verlassen und zu fliehen. Du verfolgst einen fliehenden Feind unerbittlich. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Charisma (Einschüchtern). Wenn du bereits in Einschüchtern geübt bist, erhältst du Expertise in dieser Fertigkeit.",
      "Wenn du eine Kreatur kritisch triffst oder auf 0 Trefferpunkte reduzierst, kannst du versuchen, Feinde in der Nähe, die deine Größe haben oder kleiner sind, zu erschrecken. Feindliche Kreaturen, die dich sehen oder hören können und sich im Umkreis von 6 Metern befinden, müssen einen Weisheitsrettungswurf ablegen (SG: Charismamodifikator + Übungsbonus + 8). Bei einem Fehlschlag sind sie 1 Minute lang vor dir verängstigt. Am Ende ihres Zuges kann eine verängstigte Kreatur den Rettungswurf wiederholen, wobei der Effekt bei einem Erfolg beendet wird.",
      "Wenn eine feindliche Kreatur einen Gelegenheitsangriff von dir provoziert oder innerhalb deiner Nahkampfreichweite die Aktion Ausweichen einsetzt, kannst du dich bis zur Hälfte deiner Bewegungsrate nach dem Angriff oder der Bewegung der anderen Kreatur bewegen. Diese Bewegung provoziert keine Gelegenheitsangriffe.",
      "Du hast einen Vorteil bei Angriffswürfen gegen Kreaturen, die kleiner sind als du, wenn sie vor dir verängstigt sind."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "geborener-anfuehrer",
    name: "Geborener Anführer",
    voraussetzung: "Hobgoblins",
    kurzbeschreibung: "Du wurdest von Geburt an dazu ausgebildet, ein Anführer auf dem Schlachtfeld zu sein.",
    beschreibung: [
      "Du wurdest von Geburt an dazu ausgebildet, ein Anführer auf dem Schlachtfeld zu sein. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Einmal pro Runde kannst du einer Kreatur, die du mit einem Waffenangriff angreifst, zusätzlich 1W6 Schaden zufügen, wenn sich diese Kreatur innerhalb von 1,5 m um einen Verbündeten befindet, der nicht außer Gefecht gesetzt ist.",
      "Als Reaktion kannst du einen besonderen Befehl oder eine Warnung aussprechen, wenn ein Verbündeter, den du innerhalb von 9 m sehen kannst, einen Angriffswurf oder einen Rettungswurf macht. Diese Kreatur kann 1W4 zu dem Wurf addieren, vorausgesetzt, sie kann dich hören und verstehen. Eine Kreatur kann immer nur von einem solchen Würfel profitieren. Dieser Würfel erhöht sich mit jeder Stufe: 1W6 auf Stufe 5, 1W8 auf Stufe 11 und 1W10 auf Stufe 17."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "geborener-barde",
    name: "Geborener Barde",
    voraussetzung: "Satyrn",
    kurzbeschreibung: "Du bist ein geborener Barde — da du immer Zeit zum Feiern hast, entfaltest du dein volles musisches Potential.",
    beschreibung: [
      "Du bist ein geborener Barde. Da du immer Zeit zum Feiern hast, erhältst du die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst einen Zauber der 1. Stufe deiner Wahl aus der Liste der Bardenzauber, der nicht zu deiner Anzahl an bekannten/vorbereiteten Zaubern hinzugezählt wird. Du kannst diesen Zauber einmal pro kurzer Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst.",
      "Wenn du bereits Bardische Inspiration als Klassenmerkmal besitzt oder erlangst, gewährt dies mehr Aufladungen von Bardischer Inspiration in Höhe deines Übungsbonus; andernfalls erhältst du Aufladungen von Bardischer Inspiration in Höhe deines Übungsbonus, die W6 sind. Du erhältst verbrauchte Einsätze zurück, wenn du eine lange Rast beendest.",
      "Wähle als Bonusaktion in deinem Zug eine andere Kreatur als dich selbst, die sich im Umkreis von 15 m um dich befindet und dich hören kann. Diese Kreatur erhält einen Würfel für Bardische Inspiration. Einmal innerhalb der nächsten 10 Minuten kann diese Kreatur den Würfel werfen und die gewürfelte Zahl zu einem Attributswurf, einem Angriffswurf oder einem Rettungswurf addieren. Die Kreatur kann warten, bis sie den Würfel geworfen hat, bevor sie sich entscheidet, den bardischen Inspirationswürfel zu benutzen, muss sich aber entscheiden, bevor der DM sagt, ob der Wurf erfolgreich war oder nicht. Sobald der Würfel für die bardische Inspiration gewürfelt wurde, ist er verloren. Eine Kreatur kann immer nur einen Würfel für bardische Inspiration haben."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "gedankenklingen",
    name: "Gedankenklingen",
    voraussetzung: "Githyanki oder Githzerai",
    kurzbeschreibung: "Dein psionisches Geschick ist größer als das deiner Artgenossen.",
    beschreibung: [
      "Dein psionisches Geschick ist größer, als das deiner Artgenossen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wenn du Nahkampfwaffen ohne die Eigenschaft Reichweite führst, kannst du diese mit deiner Psionik schweben lassen. Wenn du in deinem Zug einen Nahkampfangriff ausführst, beträgt deine Reichweite dabei 1,5 m mehr als sonst. Solange du deine Waffe schweben lässt, kannst du deinen Intelligenzmodifikator statt Stärke oder Geschicklichkeit für den Angriffs- und Schadenswurf verwenden.",
      "Wenn du eine Kreatur in deinem Zug mit einem physischen Waffenangriff triffst, kannst du dieses Merkmal verwenden, um dem Ziel zusätzlich 1W6 psychischen Schaden zuzufügen. Dieser Schaden erhöht sich mit jeder Stufe: auf der 6. Stufe auf 1W8, auf der 11. Stufe auf 1W10 und auf der 16. Stufe auf 1W12."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "giftige-rache",
    name: "Giftige Rache",
    voraussetzung: "Wandler (Schuppenflut)",
    kurzbeschreibung: "Dein reptilianisches Erbe verleiht dir robustere Schuppen und die Fähigkeit, einen giftigen Konter zu benutzen.",
    beschreibung: [
      "Dein reptilianisches Erbe verleiht dir noch robustere Schuppen und die Fähigkeit einen giftigen Konter zu benutzen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Während du gewandelt bist, besitzt du eine Resistenz gegen Giftschaden.",
      "Während du gewandelt bist, besitzt du eine Immunität gegen Vergiftung.",
      "Wenn du dein Merkmal \"Harte Schuppen\" einsetzt und der Schaden durch einen Nahkampfwaffenangriff verursacht wurde, kannst du als Teil deiner Reaktion einen Konterangriff durchführen, der Giftschaden dem Würfelergebnis entsprechend verursacht."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "armbrustexperte",
    name: "Armbrustexperte",
    voraussetzung: null,
    kurzbeschreibung: "Meisterschaft im Umgang mit Armbrüsten, auch auf engstem Raum.",
    beschreibung: [
      "Dank ausgiebiger Übung mit der Armbrust kannst du folgende Vorzüge genießen:"
    ],
    vorzuege: [
      "Du ignorierst die Eigenschaft Laden von Armbrüsten, mit denen du geübt bist.",
      "Du erleidest keinen Nachteil auf Fernkampfangriffe, wenn sich eine feindliche Kreatur innerhalb von 1,5 m von dir befindet.",
      "Wenn du die Angriffsaktion ausführst und dabei eine einhändige Waffe verwendest, kannst du deine Bonusaktion nutzen, um mit einer Handarmbrust einen zusätzlichen Angriff durchzuführen."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "astralkonstitution",
    name: "Astralkonstitution",
    voraussetzung: "Githyanki",
    kurzbeschreibung: "Dein Aufenthalt im Astralmeer hat dich abgehärtet und deinen Körper widerstandsfähiger gemacht.",
    beschreibung: [
      "Dein Aufenthalt im Astralmeer hat dich abgehärtet, und dein Körper ist dadurch widerstandsfähiger als der vieler anderer. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du dieses Talent erlangst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt.",
      "Würdest du psychischen Schaden erleiden, kannst du deine Reaktion verwenden, um einen Schadenswurf zu widerstehen. Du erhältst keinen Schaden durch diesen Schadenswurf. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht, und du erhältst alle verbrauchten Einsätze zurück, wenn du eine lange Rast beendest. Diese Eigenschaft kann in bestimmten Situationen, nach Ermessen des Spielleiters, fehlschlagen.",
      "Du erhältst einen Vorteil bei Rettungswürfen gegen Gedankenlesen.",
      "Du wirst immun gegen kritische Treffer. Wenn ein Treffer ein kritischer Treffer sein sollte, wird er stattdessen zu einem normalen Treffer."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "athlet",
    name: "Athlet",
    voraussetzung: null,
    kurzbeschreibung: "Außergewöhnliche körperliche Fähigkeiten für Klettern, Springen und schnelles Aufstehen.",
    beschreibung: [
      "Du hast umfangreiche körperliche Übungen absolviert und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deinen Stärke- oder Geschicklichkeitswert um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Wenn du am Boden liegst, kostet dich das Aufstehen nur noch 1,5 m deiner Bewegung.",
      "Klettern kostet dich keine zusätzliche Bewegung.",
      "Du kannst einen weiten Sprung oder hohen Sprung ausführen, nachdem du dich nur 1,5 m weit fortbewegt hast anstatt der üblichen 3 m."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "athletische-perfektion",
    name: "Athletische Perfektion",
    voraussetzung: "Goliaths",
    kurzbeschreibung: "Der Wettkampf mit Gleichaltrigen hat deinen Körper in einen nahezu perfekten Zustand gebracht.",
    beschreibung: [
      "Die Zeit, die du im Wettkampf mit Gleichaltrigen verbracht hast, hat dazu beigetragen, deinen Körper in einen nahezu perfekten Zustand zu bringen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlangst Expertise in Stärke (Athletik).",
      "Wenn du die Aktion Spurt ausführst, kannst du dich bis zum Dreifachen deiner Bewegungsrate bewegen, anstatt dem Doppelten deiner Bewegungsrate.",
      "Du hast einen Vorteil bei Attributswürfen auf Stärke."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "aetzende-schuppen",
    name: "Ätzende Schuppen",
    voraussetzung: "Yuan-ti",
    kurzbeschreibung: "Du kannst eine saure Substanz aus deinen Poren absondern, die deine Haut überzieht.",
    beschreibung: [
      "Du kannst eine saure Substanz aus deinen Poren absondern, die deine Haut überzieht. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Resistenz gegen Säureschaden.",
      "Als Bonusaktion hüllst du dich in diese schleimige Säure, die eine Minute lang anhält. Während die Säure deine Haut bedeckt, erhältst du folgende Vorteile: Immer wenn du Säureschaden verursachst, kannst du zusätzlichen Schaden in Höhe deines Übungsbonus verursachen. Wenn dich eine Kreatur mit einem Nahkampfangriff trifft, erleidet sie Säureschaden in Höhe deines Übungsbonus. Wenn du eine Kreatur im Griff hast, erleidet diese Kreatur zu Beginn jeder ihrer Runden Säureschaden in Höhe deines Übungsbonus. Du kannst dies einmal tun, danach musst du eine lange Rast einlegen, bevor du es wieder tun kannst."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "aufmerksam",
    name: "Aufmerksam",
    voraussetzung: null,
    kurzbeschreibung: "Gesteigerte Wahrnehmung, Lippenlesen und schärfere passive Sinne.",
    beschreibung: [
      "Du bist stets auf der Hut für Gefahren in deiner Umgebung und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deinen Intelligenz- oder Weisheitswert um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du kannst Lippen lesen und verstehst den Inhalt einer Unterhaltung, die du sehen, aber nicht hören kannst, wenn du die verwendete Sprache kennst und die Sprechenden klar zu sehen sind.",
      "Du erhältst einen Bonus von +5 auf deinen passiven Weisheitswert (Wahrnehmung) und deinen passiven Intelligenzwert (Nachforschungen)."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "auserwhaehlter-von-gruumsh",
    name: "Auserwählter von Gruumsh",
    voraussetzung: "Orks",
    kurzbeschreibung: "Durch deine Taten oder die deiner Vorfahren hast du dir die Gunst von Gruumsh erworben.",
    beschreibung: [
      "Durch deine Taten oder die deiner Vorfahren hast du dir die Gunst von Gruumsh erworben. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst den Zauber Vorahnung und kannst ihn nach Belieben wirken, ohne einen Zauberplatz zu verbrauchen.",
      "Du erlernst den Zauber Segnen und den Zauber Göttliche Gunst. Beide Zauber kannst du einmal wirken, ohne einen Zauberplatz zu verbrauchen. Wenn du auf diese Weise den Segensspruch wirkst, kannst du ihn außerdem als Bonusaktion wirken. Du erlangst die Fähigkeit, diese Zauber zu wirken, wieder, wenn du eine lange Rast beendest. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "ausweichendes-morphen",
    name: "Ausweichendes Morphen",
    voraussetzung: "Wechselbälger",
    kurzbeschreibung: "Du hast gelernt, deine körperliche Fähigkeit zu nutzen, um bestimmten Angriffen besser ausweichen zu können.",
    beschreibung: [
      "Du hast gelernt, deine körperliche Fähigkeit zu nutzen, um bestimmten Angriffen besser ausweichen zu können. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wenn du deine Rüstungsklasse berechnest, kannst du deinen Charismamodifikator anstelle deines Geschicklichkeitsmodifikators verwenden.",
      "Wenn du einem Effekt ausgesetzt bist, der es dir erlaubt, einen Geschicklichkeitsrettungswurf zu machen, um nur die Hälfte des Schadens zu erleiden, kannst du deine Reaktion nutzen, um diesen Schaden um einen Betrag zu reduzieren, der deinem Charismamodifikator multipliziert mit deinem Übungsbonus (mindestens 1) entspricht. Wenn du diese Fähigkeit einsetzt, kann jedes Wesen, das dich sehen kann, erkennen, dass du ein Gestaltwandler bist.",
      "Wenn eine Kreatur im Umkreis von 9 Metern, die du sehen kannst, einen Angriffswurf gegen dich ausführt, kannst du als Reaktion deine Form verändern. Die Kreatur hat nun einen Nachteil bei diesem Angriffswurf. Wenn du diese Fähigkeit einsetzt, zeigt sich deine Gestaltwandlernatur jedem Wesen, das dich sehen kann. Du kannst dies nach einer langen Rast erneut tun."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "baumverkleidung",
    name: "Baumverkleidung",
    voraussetzung: "Waldelfen",
    kurzbeschreibung: "Es gibt nur wenige, die so sehr mit dem Wald im Einklang sind wie du.",
    beschreibung: [
      "Es gibt nur wenige, die so sehr mit dem Wald im Einklang sind, wie du. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du lernst Druidisch, die Geheimsprache der Druiden.",
      "Du lernst den Zauber Rindenhaut und kannst ihn nach Belieben wirken.",
      "Du erlernst die Zauber Verstricken und Dornenwuchs. Du kannst jeden dieser Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut aus, wenn du dieses Talent auswählst."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "bebende-erde",
    name: "Bebende Erde",
    voraussetzung: "Wandler (Tobendes Stampfen)",
    kurzbeschreibung: "Mit deinen kuhähnlichen Fähigkeiten hast du neue Möglichkeiten entdeckt, den Kampf zu beeinflussen.",
    beschreibung: [
      "Mit deinen kuhähnlichen Fähigkeiten hast du neue Möglichkeiten entdeckt, den Kampf zu beeinflussen. Du erhältst folgende Vorteile:"
    ],
    vorzuege: [
      "Wenn eine Kreatur, die du sehen kannst, in einem 1,5m Radius um dich steht und einen Angriff ausführen will, kannst du deine Reaktion verwenden, um diese mit einem gezielten Stampfen aus dem Gleichgewicht zu bringen. Die betroffene Kreatur führt diesen Angriffswurf nun mit Nachteil durch. Die Anzahl der Verwendungen entspricht deinem Übungsbonus und du erhältst verbrauchte Anwendungen nach einer langen Rast zurück."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "begabt",
    name: "Begabt",
    voraussetzung: null,
    kurzbeschreibung: "Erlange Übung in einer beliebigen Kombination aus drei Fertigkeiten und Werkzeugen.",
    beschreibung: [
      "Du bist talentiert und vielseitig ausgebildet. Du erhältst den folgenden Vorzug:"
    ],
    vorzuege: [
      "Du erlangst Übung in einer beliebigen Kombination aus drei Fertigkeiten oder Werkzeugen deiner Wahl."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "belastbar",
    name: "Belastbar",
    voraussetzung: null,
    kurzbeschreibung: "Stärke einen Attributswert und erlange Übung in dem zugehörigen Rettungswurf.",
    beschreibung: [
      "Du bist in einem Bereich besonders widerstandsfähig und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe einen Attributswert deiner Wahl um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du erlangst Übung in Rettungswürfen mit dem gewählten Attribut."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "berittener-kampf",
    name: "Berittener Kampf",
    voraussetzung: null,
    kurzbeschreibung: "Meisterschaft im Kampf zu Pferde, schützend für dein Reittier.",
    beschreibung: [
      "Du bist ein erfahrener Reiter und erhältst im Kampf zu Pferde die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Du bist im Vorteil bei Nahkampfangriffswürfen gegen eine unbewaffnete oder nicht berittene Kreatur, die kleiner als dein Reittier ist.",
      "Wenn ein Angriff, der auf dein Reittier zielt, einen Treffer erzielen würde, kannst du stattdessen dich selbst als Ziel des Angriffs bestimmen.",
      "Wenn dein Reittier einem Effekt unterworfen ist, bei dem ein erfolgreicher Geschicklichkeitsrettungswurf den Schaden halbiert, erleidet es bei einem erfolgreichen Rettungswurf keinen Schaden und bei einem misslungenen Rettungswurf nur den halben Schaden."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "defensiver-duellant",
    name: "Defensiver Duellant",
    voraussetzung: "Geschicklichkeit 13 oder höher",
    kurzbeschreibung: "Nutze deine Reaktion, um deine Verteidigung mit einer Finesse-Waffe zu stärken.",
    beschreibung: [
      "Du bist im Umgang mit Klingen versiert und kannst dich mit ihrer Hilfe verteidigen. Du erhältst den folgenden Vorzug:"
    ],
    vorzuege: [
      "Wenn du eine Waffe mit der Eigenschaft Finesse hältst und mit der du geübt bist, und eine andere Kreatur dich mit einem Nahkampfangriff trifft, kannst du deine Reaktion einsetzen, um deinen Rüstungsklassewert um deinen Übungsbonus zu erhöhen und den auslösenden Angriff möglicherweise verfehlen zu lassen."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "eingeweihter-der-magie",
    name: "Eingeweihter der Magie",
    voraussetzung: null,
    kurzbeschreibung: "Erlerne Zaubertricks und einen Zauber aus einer fremden Klassenliste.",
    beschreibung: [
      "Du hast von einem Mitglied einer magischen Klasse gelernt oder eigene Studien betrieben und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Du erlernst zwei Zaubertricks deiner Wahl aus der Zauberliste einer Klasse deiner Wahl.",
      "Du erlernst außerdem einen Zauber des 1. Grades deiner Wahl aus derselben Klassenliste. Du kannst diesen Zauber einmal einsetzen, ohne einen Zauberplatz dafür aufwenden zu müssen. Nach einer langen Rast steht dir dieser Zauber wieder zur Verfügung.",
      "Dein Zauberattribut für diese Zauber ist Intelligenz, Weisheit oder Charisma — je nachdem welche Klasse du gewählt hast (Zauberer: Intelligenz; Kleriker oder Druide: Weisheit; Barde, Hexenmeister oder Paladin: Charisma)."
    ],
    kategorie: "Magie",
    angeboren: false
  },
  {
    id: "elementarer-adept",
    name: "Elementarer Adept",
    voraussetzung: "Fähigkeit, mindestens einen Zauber zu wirken",
    kurzbeschreibung: "Lass deine Zauber Resistenzen einer gewählten Schadensart ignorieren.",
    beschreibung: [
      "Wähle eine der folgenden Schadensarten: Feuer, Kälte, Blitz, Säure oder Schall. Du erhältst folgende Vorteile:",
      "Dieses Talent kann mehrfach gewählt werden, muss jedoch jedes Mal eine andere Schadensart betreffen."
    ],
    vorzuege: [
      "Deine Zauber ignorieren Resistenzen der gewählten Schadensart.",
      "Bei Zaubern, die die entsprechende Schadensart verursachen, darfst du jede gewürfelte 1 beim Schadenswurf wie eine 2 behandeln."
    ],
    kategorie: "Magie",
    angeboren: false
  },
  {
    id: "glueckspilz",
    name: "Glückspilz",
    voraussetzung: null,
    kurzbeschreibung: "Drei Glückspunkte erlauben es dir, Würfe im richtigen Moment zu beeinflussen.",
    beschreibung: [
      "Du hast ausgesprochenes Glück, und das immer im richtigen Moment. Mit diesem Talent verfügst du über drei Glückspunkte, die nach einer langen Rast wieder aufgefrischt werden."
    ],
    vorzuege: [
      "Immer wenn du einen Angriffs-, Attributs- oder Rettungswurf ablegst, kannst du einen Glückspunkt verbrauchen, um einen zusätzlichen W20 zu würfeln. Suche dir aus, welches Ergebnis der beiden W20 verwendet werden soll. Du kannst den Glückspunkt erst nach dem Würfeln einsetzen, musst es jedoch tun, bevor die Auswirkungen in Kraft treten.",
      "Außerdem kannst du einen Glückspunkt aufwenden, wenn ein Angriffswurf gegen dich ausgeführt wird. Würfle einen W20 und wähle, ob dein Ergebnis oder das des Angreifers für den Angriffswurf verwendet wird.",
      "Wenn mehr als eine Kreatur Glückspunkte einsetzt, um denselben Wurf zu beeinflussen, heben sie sich gegenseitig auf — es wird kein zusätzlicher Würfel geworfen."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "goettliche-gesundheit",
    name: "Göttliche Gesundheit",
    voraussetzung: "Aasimar",
    kurzbeschreibung: "Deine göttliche Verbindung verleiht dir eine bessere Gesundheit und Widerstandsfähigkeit gegen Schaden.",
    beschreibung: [
      "Deine göttliche Verbindung verleiht dir eine bessere Gesundheit und Widerstandsfähigkeit gegen Schaden. Du erhältst die folgenden Effekte:"
    ],
    vorzuege: [
      "Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du dieses Talent erlangst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt.",
      "Du wirst immun gegen Krankheiten.",
      "Du wirst resistent gegen Giftschaden und erhältst einen Vorteil bei Rettungswürfen gegen Vergiftungen."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "goettlicher-gesang",
    name: "Göttlicher Gesang",
    voraussetzung: "Satyrn",
    kurzbeschreibung: "Du besitzt eine außergewöhnliche Fähigkeit, die Magie der Götter in deine Gelagen einzufangen.",
    beschreibung: [
      "Du besitzt eine außergewöhnliche Fähigkeit, die Magie der Götter in deine Gelagen einzufangen. Als Aktion kannst du eine magische Melodie spielen oder verzauberte Worte einweben und einen der folgenden Effekte erzeugen (einmal pro langer Rast je Effekt):"
    ],
    vorzuege: [
      "Verzaubern: Eine Kreatur im Umkreis von 15 m, die dich hören kann, muss einen Weisheitsrettungswurf bestehen (SG 8 + Übungsbonus + Intelligenz-, Weisheits- oder Charismamodifikator) oder 1 Minute lang von dir bezaubert sein. Wenn du oder einer deiner Gefährten der Kreatur Schaden zufügt, kann sie den Rettungswurf wiederholen. Bei Erfolg oder Effektende ist die Kreatur für 24 Stunden immun gegen dieses Merkmal.",
      "Erschrecken: Eine Kreatur im Umkreis von 15 m, die dich hören kann, muss denselben Rettungswurf bestehen oder 1 Minute lang von dir verängstigt sein. Am Ende jeder ihrer Runden kann sie den Rettungswurf wiederholen. Bei Erfolg oder Effektende ist die Kreatur für 24 Stunden immun gegen dieses Merkmal.",
      "Schlaflied: Eine Kreatur innerhalb von 15 m, die dich hören kann, schläft ein und ist 1 Minute lang bewusstlos. Der Effekt endet, wenn die Kreatur Schaden erleidet oder jemand eine Aktion aufwendet, um sie zu wecken. Sobald sie erwacht, ist sie für 24 Stunden immun gegen dieses Merkmal."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "goettlicher-krieger",
    name: "Göttlicher Krieger",
    voraussetzung: "Aasimar",
    kurzbeschreibung: "Deine göttliche Abstammung hat dich mit Zaubern ausgestattet, die für die Starken des Glaubens typisch sind.",
    beschreibung: [
      "Deine göttliche Abstammung hat dich mit Zaubern ausgestattet, die für die Starken des Glaubens typisch sind. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wähle einen Zaubertrick aus der Liste der Klerikerzauber. Du lernst den gewählten Zauber.",
      "Du wählst einen Zauber der ersten Stufe und einen Zauber der zweiten Stufe aus der Liste der Kleriker- oder Paladinzauber. Du lernst die gewählten Zauber und kannst sie einmal pro lange Rast auf ihrer niedrigsten Stufe wirken, ohne einen Zauberplatz zu verbrauchen. Intelligenz, Weisheit oder Charisma sind die Attribute für diese Zauber. Wähle eines aus, wenn du dieses Talent wählst."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "greifende-glieder",
    name: "Greifende Glieder",
    voraussetzung: "Grottenschrate",
    kurzbeschreibung: "Deine Gliedmaßen sind so gebaut, dass sie dir beim Greifen helfen.",
    beschreibung: [
      "Deine Gliedmaßen sind so gebaut, dass sie dir beim Greifen helfen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du hast einen Vorteil, wenn du würfelst, um eine Kreatur zu packen, und Kreaturen haben einen Nachteil, wenn sie würfeln, um deinen Griffen zu entkommen.",
      "Du kannst bis zu zwei Kreaturen auf einmal festhalten. Wenn du versuchst, eine dritte zu greifen, werden die beiden anderen befreit.",
      "Du kannst deinen Übungsbonus zum Schadenswurf gegen jede Kreatur addieren, die du im Griff hast."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "grosser-galopper",
    name: "Großer Galopper",
    voraussetzung: "Zentauren",
    kurzbeschreibung: "Deine Beine sind durch hartes Training noch stärker geworden, und du fühlst dich noch schneller als zuvor.",
    beschreibung: [
      "Deine Beine sind durch hartes Training oder längerem Gebrauch noch stärker geworden, und du fühlst dich noch schneller als zuvor. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du kannst in jedem deiner Züge die Aktion Spurt als Bonusaktion ausführen.",
      "Gegen dich gerichtete Gelegenheitsangriffe werden mit Nachteil ausgeführt.",
      "Der Schaden deiner Hufe erhöht sich auf 1W8 + deinen Stärkemodifikator."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "grosszuegiges-glueck",
    name: "Großzügiges Glück",
    voraussetzung: "Halblinge",
    kurzbeschreibung: "Du hast gelernt, das außergewöhnliche Glück deines Volkes dir und deinen Gefährten zu verleihen.",
    beschreibung: [
      "Dein Volk hat außergewöhnliches Glück, das du gelernt hast, dir und deinen Gefährten auf mystische Weise zu verleihen, wenn du sie schwanken siehst. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du hast einen Vorrat an Glückspunkten, der deinem Übungsbonus entspricht. Jedes Mal, wenn du oder ein Verbündeter in einem Umkreis von 9 m einen Angriffswurf, Attributswurf oder Rettungswurf macht, kannst du einen Glückspunkt ausgeben, um einen zusätzlichen Würfelwurf zu machen. Du kannst wählen, ob du einen Glückspunkt ausgeben möchtest, nachdem du gewürfelt hast, aber bevor das Ergebnis feststeht. Du entscheidest, welcher der beiden Würfel verwendet wird. Wenn du einen Vorteil oder Nachteil hast, führe ihn zuerst aus.",
      "Du erhältst die Hälfte deiner maximalen Glückspunkte (abgerundet) zurück, wenn du eine lange Rast beendest."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "heiler",
    name: "Heiler",
    voraussetzung: null,
    kurzbeschreibung: "Behandle Wunden schnell und halte Verbündete mit deiner Heilerausrüstung kampfbereit.",
    beschreibung: [
      "Du bist ein fähiger Mediziner, was dir erlaubt, Wunden rasch zu behandeln und deine Verbündeten schnell wieder kampfbereit zu machen. Du erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Wenn du eine Heilerausrüstung einsetzt, um eine sterbende Kreatur zu stabilisieren, erhält sie zusätzlich 1 Trefferpunkt zurück.",
      "Als Aktion kannst du eine Anwendung der Heilerausrüstung aufbrauchen, um eine Kreatur zu behandeln und bei ihr 1W6 + 4 Trefferpunkte wiederherzustellen, zuzüglich so vieler Trefferpunkte, wie es ihrer maximalen Anzahl an Trefferwürfeln entspricht. Die Kreatur kann erst erneut mit diesem Talent geheilt werden, nachdem sie eine kurze oder lange Rast beendet hat."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "hochelfenmagie",
    name: "Hochelfenmagie",
    voraussetzung: "Hochelfen",
    kurzbeschreibung: "Dein Studium der hochelfischen Weissagung hat dir magische Kräfte verliehen, die nur wenige andere Elfen besitzen.",
    beschreibung: [
      "Dein Studium der hochelfischen Weissagung hat dir magische Kräfte verliehen, die nur wenige andere Elfen besitzen. Dank deiner angeborenen Zauberei kannst du nach Belieben Zauber wirken, für die andere Macht einsetzen müssten. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst die Zauber Identifizieren und Sprachen verstehen, die du nach Belieben wirken kannst. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst.",
      "Wenn du einen Zauber wirkst, der Schaden verursacht, kannst du deinen Übungsbonus auf den Schaden addieren."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "hockenstaerke",
    name: "Hockenstärke",
    voraussetzung: "Gnome, Goblins, Feen, Halblinge, Harengons, Zwerge oder Kobolde",
    kurzbeschreibung: "Du bist für deine Rasse ungewöhnlich wendig.",
    beschreibung: [
      "Du bist für deine Rasse ungewöhnlich wendig. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Erhöhe deine Bewegungsrate um 1,5 m.",
      "Du erhältst entweder Übung in Geschicklichkeit (Akrobatik) oder Stärke (Athletik) (deine Wahl).",
      "Du hast einen Vorteil bei jedem Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik), mit der du dich aus einer Umklammerung befreien möchtest.",
      "Du kannst in jeder deiner Runden die Aktion Befreien und die Aktion Ausweichen stattdessen als Bonusaktion durchführen."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "hoehere-schlangenart",
    name: "Höhere Schlangenart",
    voraussetzung: "Yuan-ti",
    kurzbeschreibung: "Deine Schuppen verhärten sich und dir wachsen Reißzähne, die denen deiner Schlangenbrüder ähneln.",
    beschreibung: [
      "Deine Schuppen verhärten sich und du bekommst Reißzähne, die denen deiner Schlangenbrüder ähneln. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Deine Schuppen werden härter. Solange du keine Rüstung trägst, kannst du deine RK als 13 + deinen Geschicklichkeitsmodifikator berechnen. Du kannst einen Schild benutzen und diesen Vorteil trotzdem nutzen.",
      "Dir wachsen einziehbare Reißzähne aus deinem Mund. Die Reißzähne sind natürliche Waffen, die du für unbewaffnete Schläge einsetzen kannst. Wenn du mit ihnen triffst, fügst du anstelle des normalen Hiebschadens eines unbewaffneten Schlags 1W4 + deinen Stärke- oder Geschicklichkeitsmodifikator als Stichschaden zu. Wähle das Attribut, wenn du dieses Talent wählst.",
      "Wenn du mit deinen Reißzähnen triffst, kannst du dem Ziel zusätzlich 2W6 Giftschaden zufügen. Du kannst dies so oft tun, wie es deinem Übungsbonus entspricht, und erhältst alle verbrauchten Einsätze nach einer langen Rast zurück."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "hoellenverbundenheit",
    name: "Höllenverbundenheit",
    voraussetzung: "Tieflinge",
    kurzbeschreibung: "Du hast eine besondere Verbundenheit zu der Macht der Hölle.",
    beschreibung: [
      "Du hast eine besondere Verbundenheit zu der Macht der Hölle. Die Schadensart für die folgenden Effekte entspricht der Schadensart, die dem Dämon deiner Blutlinie zugeordnet ist. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wenn du Schaden verursachst, der dieser Schadensart entspricht, kannst du deinen Übungsbonus zum Schaden des Angriffs addieren.",
      "Immer wenn du einen Zauber der 1. Stufe oder höher wirkst, der diese Schadensart verursacht, kannst du bewirken, dass dich eine Minute lang ein elementarer Mantel der Schadensart umhüllt. Der Mantel schadet weder dir noch deinem Besitz und verbreitet helles Licht bis zu 9 m sowie schwaches Licht für weitere 9 m. Solange der Mantel vorhanden ist, erleidet jede Kreatur im Umkreis von 1,5 m, die dich mit einem Nahkampfangriff trifft, Schaden dieser Art in Höhe deines Übungsbonus. Außerdem erleidet jede Kreatur, die dich packt oder von dir gepackt wird, zu Beginn jeder ihrer Runden Schaden dieser Art in Höhe deines Übungsbonus."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "hoellische-bibliothek-des-vezvoriak",
    name: "Höllische Bibliothek des Vezvoriak",
    voraussetzung: "Tieflinge (Abstammung des Vezvoriak)",
    kurzbeschreibung: "Dein Erbe von Vezvoriak verleiht dir Fähigkeiten und die Macht, das Schicksal von Kreaturen zu beeinflussen.",
    beschreibung: [
      "In deiner Blutlinie finden sich mehr Nachweise über deine Abstammung von Vezvoriak, als bei anderen deiner Artgenossen. Dieses Erbe verleiht dir Fähigkeiten, die an deinen dämonischen Vorfahren erinnern. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Resistenz gegen Blitzschaden.",
      "Du erhältst Vorteil bei Rettungswürfen, um den Zustand Gelähmt zu widerstehen.",
      "Du kannst deine Aktion verwenden, um Vezvoriaks unendliche Bibliothek anzurufen und ein Buch zu beschwören, das den Namen einer zufälligen Kreatur in Reichweite von 18 m trägt. Du würfelst auf die Tabelle der Schicksalsomen (1W20), um den Effekt zu bestimmen. Bei einer feindlichen Kreatur werden negative Effekte angewendet. Du kannst diese Eigenschaft einmal pro kurze Rast einsetzen."
    ],
    tabellen: [
      {
        wuerfel: "1W20",
        header: ["W20", "Schicksalsomen"],
        eintraege: [
          [1, "Die ausgewählte Kreatur regeneriert einen zufälligen Zauberslot. Verfügt die betroffene Kreatur nicht über Zauberslots, erhält sie stattdessen 2W10 + ihres Levels an temporären Trefferpunkten."],
          [2, "Im Bereich der betroffenen Kreatur erscheint für eine Minute ein perfektes illusionäres Spiegelbild dieser. Alle Angriffswürfe gegen diese Kreatur werden mit Nachteil ausgeführt. Wird die Kreatur getroffen, endet der Effekt vorzeitig."],
          [3, "In einem Bereich von 9 m Radius um die betroffene Kreatur wird der Boden durchnässt und schlammig. Der betroffene Bereich zählt als schwieriges Terrain und jede Kreatur in diesem Bereich muss 1W4 würfeln — bei einem Ergebnis von 1 sinkt die Kreatur ein und erleidet den Zustand Festgesetzt. Eine so festgesetzte Kreatur muss zu Beginn ihres Zuges einen W20 Wurf mit SG 14 bestehen, um sich zu befreien."],
          [4, "Die betroffene Kreatur wirkt den Zauber Schutz vor Energie auf sich selbst. Die Schadensart, gegen die sie resistent wird, wird zufällig bestimmt. Die Dauer des Effekts beträgt 1W6 Stunden."],
          [5, "Für eine Minute erleidet die betroffene Kreatur eine gefährliche Seuche. Zu Beginn jedes ihrer Züge muss sie einen Konstitutionsrettungswurf mit SG 24 bestehen oder 1W6 nekrotischen Schaden erleiden. Zum Ende jedes ihrer Züge verringert sich der SG um 2."],
          [6, "Die betroffene Kreatur und ein weiterer Verbündeter innerhalb von 4,5 m regenerieren sich magisch. Für eine Minute erhalten beide Kreaturen jeweils 3 Trefferpunkte zu Beginn jeder ihrer Runden zurück."],
          [7, "Die betroffene Kreatur muss alles, was sie in den Händen hält, fallen lassen. Bis zum Ende ihres nächsten Zuges kann sie nur die Aktion waffenloser Angriff verwenden."],
          [8, "Die betroffene Kreatur hört ein unaufhörliches, lautes Klingeln, das aus ihrem eigenen Kopf zu kommen scheint. Sie hat Nachteil bei allen Würfen auf Weisheit (Wahrnehmung), für die das Gehör notwendig ist. Nach 8 Stunden hört das Klingeln auf."],
          [9, "Über der betroffenen Kreatur erscheint eine Sturmwolke. In einem Bereich von 18 m Radius um sie muss jede Kreatur einen Geschicklichkeitsrettungswurf mit SG 15 bestehen oder 2W10 Schaden erleiden (bei Erfolg die Hälfte)."],
          [10, "Die betroffene Kreatur wirkt den Zauber Schlaf auf dem 8. Grad mit sich selbst als Mittelpunkt."],
          [11, "Jede Kreatur in einer Reichweite von 10 m um die betroffene Kreatur erhält den Effekt des Zaubers Göttliche Gunst."],
          [12, "In einem vom DM bestimmten freien Bereich, 24 m von der betroffenen Kreatur entfernt, erscheint für 1W6 Runden ein Erdelementar. Zu Beginn jedes seiner Züge würfelt der DM 1W10: bei 4 oder weniger greift der Erdelementar die betroffene Kreatur oder ihre Verbündeten an, andernfalls handelt er nicht."],
          [13, "Für 24 Stunden verlieren alle Kreaturen im Umkreis von 4,5 m um die betroffene Kreatur eine ihrer bekannten Sprachen. Jede betroffene Kreatur würfelt 1W10 — bei einem Ergebnis von 3 oder weniger wird die Gemeinsprache vergessen."],
          [14, "Die betroffene Kreatur wirkt den Zauber Stinkende Wolke mit sich selbst als Mittelpunkt."],
          [15, "Die betroffene Kreatur wirkt den Zauber Schild auf sich selbst. Diese Version des Zaubers hat eine Dauer von 1W6 Runden."],
          [16, "Die betroffene Kreatur wirkt den Zauber Feuerwand in einem Kreis um sich als Mittelpunkt."],
          [17, "Kleine, laute Feuerwerkskörper werden für 1W6 Stunden ständig über der betroffenen Kreatur gezündet. Sie hat in dieser Zeit Nachteil bei allen Würfen auf Geschicklichkeit (Heimlichkeit)."],
          [18, "In einem Bereich von 6 m um die betroffene Kreatur erleiden alle Kreaturen den Schaden des Zaubertricks Feuerpfeil."],
          [19, "Die betroffene Kreatur und eine weitere zufällig ausgewählte Kreatur innerhalb von 7,5 m werden von einer wahnsinnigen Wut übermannt. Für 1W6 Runden erhalten sie Resistenz gegen alle Schadensarten und +4 auf Nahkampfangriffswürfe, erleiden aber −2 auf ihre Rüstungsklasse und Nachteil auf Weisheits- und Intelligenzrettungswürfe."],
          [20, "Die betroffene Kreatur und jede weitere Kreatur, die sie sehen kann, erhalten 2W4+2 Trefferpunkte zurück."]
        ]
      }
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "hoellische-geschwindigkeit-der-cahbri",
    name: "Höllische Geschwindigkeit der Cahbri",
    voraussetzung: "Tieflinge (Abstammung der Cahbri)",
    kurzbeschreibung: "Dein Erbe von Cahbri verleiht dir übernatürliche Geschwindigkeit und Resistenzen.",
    beschreibung: [
      "In deiner Blutlinie finden sich mehr Nachweise über deine Abstammung von Cahbri, als bei anderen deiner Artgenossen. Dieses Erbe verleiht dir Fähigkeiten, die an deinen dämonischen Vorfahren erinnern. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Resistenz gegen nekrotischen und strahlenden Schaden.",
      "Zu Beginn deines Zuges kannst du als Bonusaktion deine Bewegungsrate aufbrauchen, um dich in magische Nebel einzuhüllen und dich bis zu 9 m weit in ein unbesetztes Feld zu teleportieren, das du sehen kannst. An dieser Stelle kannst du eine deiner verfügbaren Aktionen verwenden, für die keine Bewegungsrate notwendig ist, und dich im Anschluss erneut bis zu 9 m weit in ein unbesetztes Feld zu teleportieren, das du sehen kannst. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "hoellische-konstitution-des-baalbrezan",
    name: "Höllische Konstitution des Baalbrezan",
    voraussetzung: "Tieflinge (Abstammung des Baalbrezan)",
    kurzbeschreibung: "Dein Erbe von Baalbrezan verleiht dir übernatürliche Robustheit und die Fähigkeit, in Wut zu verfallen.",
    beschreibung: [
      "In deiner Blutlinie finden sich mehr Nachweise über deine Abstammung von Baalbrezan, als bei anderen deiner Artgenossen. Dieses Erbe verleiht dir Fähigkeiten, die an deinen dämonischen Vorfahren erinnern. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt.",
      "Du erhältst Resistenz gegen Kälte- und Giftschaden.",
      "Du hast einen Vorteil bei Rettungswürfen gegen Vergiftung.",
      "Als Aktion kannst du während eines Kampfes in einen Wutzustand verfallen, der 1 Minute andauert: Als Reaktion auf eingehenden Hieb-, Stich- oder Wuchtschaden kannst du diesen Schaden um die Hälfte reduzieren (zweimal pro Wut). Wenn du einer Kreatur Hieb-, Stich- oder Wuchtschaden zufügst, fügst du Kälteschaden in Höhe deines Übungsbonus hinzu. Während des Zorns kannst du keine Zauber wirken oder dich auf sie konzentrieren. Du kannst dieses Merkmal einmal pro lange Rast verwenden."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "hoellische-liebe-der-yx-larak",
    name: "Höllische Liebe der Yx'larak",
    voraussetzung: "Tieflinge (Abstammung der Yx'larak)",
    kurzbeschreibung: "Dein Erbe von Yx'larak verleiht dir psychischen Schutz und die Fähigkeit, andere zu bezaubern.",
    beschreibung: [
      "In deiner Blutlinie finden sich mehr Nachweise über deine Abstammung von Yx'larak, als bei anderen deiner Artgenossen. Dieses Erbe verleiht dir Fähigkeiten, die an deinen dämonischen Vorfahren erinnern. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Resistenz gegen psychischen Schaden.",
      "Du hast einen Vorteil bei Rettungswürfen, um den Zustand Bezaubert zu widerstehen.",
      "Du erhältst 3 m Blindsicht.",
      "Du erlernst den Zauber Person bezaubern und kannst ihn mit diesem Merkmal auf der ersten Stufe wirken. Der SG ergibt sich aus 8 + Übungsbonus + einem deiner Attributsmodifikatoren (Wahl beim Erlernen des Talents). Wenn du Person bezaubern mit diesem Merkmal wirkst, würfeln Kreaturen, die gegen dich oder deine Gefährten kämpfen, nicht mit Vorteil bei diesem Rettungswurf. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "hoellische-list-des-kizrovidus",
    name: "Höllische List des Kizrovidus",
    voraussetzung: "Tieflinge (Abstammung des Kizrovidus)",
    kurzbeschreibung: "Dein Erbe von Kizrovidus verleiht dir Resistenzen und die Fähigkeit, Gegner zu entwaffnen.",
    beschreibung: [
      "In deiner Blutlinie finden sich mehr Nachweise über deine Abstammung von Kizrovidus, als bei anderen deiner Artgenossen. Dieses Erbe verleiht dir Fähigkeiten, die an deinen dämonischen Vorfahren erinnern. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Resistenz gegen nekrotischen und Giftschaden.",
      "Dein Wissen über Gifte und deren Anwendung erlaubt es dir, eine Phiole Gift bis zu zwei Mal zu verwenden, bevor sie verbraucht ist.",
      "Du kannst deine Aktion verwenden, um einen Gegner in Nahkampfreichweite zu entwaffnen (höchstens eine Größenkategorie größer als du). Würfle Stärke (Athletik) oder Geschicklichkeit (Akrobatik) gegen den Wurf der Kreatur. Erzielst du das höhere Ergebnis, stößt du ihr die Waffe aus der Hand und kann sie in ihrem nächsten Zug nur noch unbewaffnet angreifen. Du kannst diese Eigenschaft so oft verwenden, wie es deinem Übungsbonus entspricht; alle Aufladungen stehen nach einer langen Rast wieder zur Verfügung. Entwaffnest du die Kreatur erfolgreich, kannst du als Bonusaktion die Waffe mit einer freien Hand auffangen und mit Vorteil einen Nahkampfangriff gegen die Kreatur ausführen. Trägt die Kreatur eine schwere Waffe, musst du zuerst einen Stärke-Wurf mit SG 15 bestehen (mit Vorteil, falls du geübt bist). Der Schaden entspricht dem Basisschaden der Waffe + dem Attributsmodifikator. Danach lässt du die Waffe fallen."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "hoellischer-blutrausch-der-netrosk",
    name: "Höllischer Blutrausch der Netrosk",
    voraussetzung: "Tieflinge (Abstammung der Netrosk)",
    kurzbeschreibung: "Dein Erbe von Netrosk verleiht dir blutgierige Stärke und feurige Flammen im Kampf.",
    beschreibung: [
      "In deiner Blutlinie finden sich mehr Nachweise über deine Abstammung von Netrosk, als bei anderen deiner Artgenossen. Dieses Erbe verleiht dir Fähigkeiten, die an deinen dämonischen Vorfahren erinnern. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Resistenz gegen Stich- und nekrotischen Schaden.",
      "Immer wenn eine Kreatur in deiner Nahkampfreichweite stirbt, darfst du deine Reaktion verwenden, um eine Distanz in Höhe deiner Bewegungsrate in direkter Linie auf eine feindliche Kreatur zuzubewegen. Diese Bewegung provoziert keine Gelegenheitsangriffe, doch kannst du Hindernisse nicht passieren und bleibst stattdessen davor stehen.",
      "Im Kampf kannst du deine Bonusaktion verwenden, um deine Verbundenheit zu Netrosk bis zum Ende deines nächsten Zuges zu stärken und dich in zischende pinkfarbene Flammen zu hüllen. Triffst du eine Kreatur mit einem Nahkampfangriff, erleidet diese 1W4 Feuerschaden zusätzlich. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "hoellischer-wahnsinn-des-grikuuth",
    name: "Höllischer Wahnsinn des Grikuuth",
    voraussetzung: "Tieflinge (Abstammung des Grikuuth)",
    kurzbeschreibung: "Dein Erbe von Grikuuth verleiht dir psychische Angriffe und Säure-Zauberei.",
    beschreibung: [
      "In deiner Blutlinie finden sich mehr Nachweise über deine Abstammung von Grikuuth, als bei anderen deiner Artgenossen. Dieses Erbe verleiht dir Fähigkeiten, die an deinen dämonischen Vorfahren erinnern. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Resistenz gegen Säureschaden.",
      "Du erhältst Übung in Weisheitsrettungswürfen.",
      "Als Aktion kannst du einer Kreatur, die du sehen kannst, telepathisch Visionen deines dämonischen Vorfahren zeigen. Sie muss einen Weisheitsrettungswurf bestehen (SG: 8 + Übungsbonus + ein Attributsmodifikator deiner Wahl) oder erleidet 1W6 psychischen Schaden, hat Nachteil auf ihren nächsten Angriffswurf und muss ihre Bewegungsrate verwenden, um 3 m in eine zufällige Richtung zu laufen.",
      "Du erlernst den Zauber Melfs Säurepfeil und kannst ihn auf dem 2. Grad verwenden. Dein Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen des Talents). Du kannst ihn einmal ohne Zauberplatz wirken; danach benötigst du eine lange Rast. Du kannst ihn auch mit einem verfügbaren Zauberplatz des entsprechenden Grads wirken."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "hoellisches-chaos-der-meleshor",
    name: "Höllisches Chaos der Meleshor",
    voraussetzung: "Tieflinge (Abstammung der Meleshor)",
    kurzbeschreibung: "Dein Erbe von Meleshor verleiht dir Resistenzen und die Fähigkeit, chaotische Wirbelstürme zu entfesseln.",
    beschreibung: [
      "In deiner Blutlinie finden sich mehr Nachweise über deine Abstammung von Meleshor, als bei anderen deiner Artgenossen. Dieses Erbe verleiht dir Fähigkeiten, die an deinen dämonischen Vorfahren erinnern. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Resistenz gegen Schallschaden.",
      "Du bist immun gegen den Zustand Taub.",
      "Als Aktion kannst du einen Spalt zum chaotischen Reich Meleshors öffnen. Portale entlassen zufällige Gegenstände, die bis zu einer Minute in einem Radius von 3 m um dich wirbeln und dir folgen. Feindliche Kreaturen, die beim Entstehen des Wirbels betroffen sind, ihn betreten oder ihren Zug in ihm beginnen oder beenden, müssen einen Geschicklichkeitsrettungswurf bestehen (SG: 8 + Übungsbonus) oder erleiden Wucht-, Hieb- oder Stichschaden (zufällig) in Höhe deines Übungsbonus. Verbündete müssen denselben Wurf bestehen, aber mit SG 5. Du kannst diese Eigenschaft einmal pro kurze Rast verwenden.",
      "Während der Wirbel aktiv ist, kannst du eine Aktion verwenden, um einen weiteren Spalt über dem Kopf einer feindlichen Kreatur in Reichweite von 9 m zu öffnen. Ein zufälliger Gegenstand fällt auf die Kreatur; sie muss einen Geschicklichkeitsrettungswurf (SG: 8 + Übungsbonus) bestehen oder erleidet Schaden und Effekte gemäß der Gegenstandstabelle (DM). Verwendest du dieses Merkmal ein zweites Mal, endet der Wirbel vorzeitig."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "hoellisches-ultimatum-des-nalphimex",
    name: "Höllisches Ultimatum des Nalphimex",
    voraussetzung: "Tieflinge (Abstammung des Nalphimex)",
    kurzbeschreibung: "Dein Erbe von Nalphimex verleiht dir Resistenz und die Fähigkeit, Feinde zu einem Duell zu zwingen.",
    beschreibung: [
      "In deiner Blutlinie finden sich mehr Nachweise über deine Abstammung von Nalphimex, als bei anderen deiner Artgenossen. Dieses Erbe verleiht dir Fähigkeiten, die an deinen dämonischen Vorfahren erinnern. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Resistenz gegen Energieschaden.",
      "Als Bonusaktion kannst du eine feindliche Kreatur zu einem Duell herausfordern. Du und die Kreatur erhalten Vorteil bei Angriffswürfen aufeinander und Nachteil auf Angriffswürfe auf jede andere Kreatur. Außerdem können sich weder du noch die betroffene Kreatur willentlich voneinander wegbewegen. Du kannst dieses Merkmal einmal pro lange Rast verwenden.",
      "Triffst du während des Duells eine Kreatur mit einem Hieb- oder Stichschadens-Angriff, erleidet sie Klaffende Wunden (bis zu dreimal stapelbar). Jeder Stapel bewirkt −1 auf alle Angriffs-, Attributs- und Rettungswürfe. Würde eine Kreatur den 3. Stapel erhalten, wird sie stattdessen von allen Stapeln befreit und erleidet 3W10 Energieschaden."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "inspirierender-anfuehrer",
    name: "Inspirierender Anführer",
    voraussetzung: "Charisma 13 oder höher",
    kurzbeschreibung: "Stärke bis zu sechs Verbündeten durch eine kurze Ansprache den Kampfgeist.",
    beschreibung: [
      "Verbringst du 10 Minuten damit, deine Kameraden zu inspirieren, kannst du ihre Entschlossenheit zu kämpfen stärken. Du erhältst den folgenden Vorzug:"
    ],
    vorzuege: [
      "Wähle bis zu sechs verbündete Kreaturen (du darfst auch dich selbst bestimmen), die sich innerhalb von 9 m befinden, dich hören oder sehen können und dich verstehen. Jede dieser Kreaturen erhält temporäre Trefferpunkte in Höhe deiner Stufe + deines Charismamodifikators. Eine Kreatur kann durch dieses Talent erst wieder temporäre Trefferpunkte erhalten, wenn sie eine kurze oder lange Rast beendet hat."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "kampferprobter-zauberwirker",
    name: "Kampferprobter Zauberwirker",
    voraussetzung: "Fähigkeit, mindestens einen Zauber zu wirken",
    kurzbeschreibung: "Wirke Zauber auch mitten im Kampf ohne Abzüge auf Konzentration oder Bewegungsfreiheit.",
    beschreibung: [
      "Du hast trainiert, Zauber mitten im Kampf zu wirken, wodurch du Techniken erlernt hast, die dir folgende Vorzüge gewähren:"
    ],
    vorzuege: [
      "Du bist bei Konstitutionsrettungswürfen im Vorteil, um beim Erleiden von Schaden nicht die Konzentration auf einen Zauber zu verlieren.",
      "Du kannst die Gestenkomponenten von Zaubern auch dann ausführen, wenn du eine Waffe oder einen Schild in einer oder beiden Händen hältst.",
      "Provoziert die Bewegung einer feindlichen Kreatur einen Gelegenheitsangriff von dir, kannst du als Reaktion einen Zauber auf die Kreatur wirken, anstatt einen Angriff auszuführen. Der Zauber muss einen Zeitaufwand von einer Aktion haben und darf nur diese Kreatur als Ziel haben."
    ],
    kategorie: "Magie",
    angeboren: false
  },
  {
    id: "katzenanmut",
    name: "Katzenanmut",
    voraussetzung: "Tabaxi",
    kurzbeschreibung: "Deine unglaublichen Reflexe und deine Agilität verbessern sich weiter.",
    beschreibung: [
      "Deine unglaublichen Reflexe und deine Agilität verbessern sich weiter. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlangst Übung in Geschicklichkeit (Heimlichkeit).",
      "Du kannst deine Eigenschaft Katzenwendigkeit zweimal einsetzen, bevor du dich in einem deiner Züge 0 m bewegen musst, um die Eigenschaft erneut einzusetzen. Du kannst diese Fähigkeit jedoch nur einmal pro Zug einsetzen, wenn du dich bewegst.",
      "Du erleidest keinen Schaden, wenn du 9 m oder weniger fällst. Wenn du dennoch Sturzschaden erleidest, kannst du ihn um einen Betrag in Höhe deiner halben Stufe reduzieren.",
      "Wenn du deine Bewegung in einem Umkreis von 1,5 m um eine feindliche Kreatur beendest, nachdem du Katzenwendigkeit eingesetzt hast, kannst du dich als Bonusaktion auf sie stürzen. Führe einen unbewaffneten Nahkampfangriff aus; bei einem Treffer wird das Ziel zu Boden geworfen und von dir gepackt."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "kind-der-stroemungen",
    name: "Kind der Strömungen",
    voraussetzung: "Tritons",
    kurzbeschreibung: "Du wurdest im Wasser geboren und hast gelernt, es zu nutzen, um deine Vitalität zu steigern.",
    beschreibung: [
      "Du wurdest im Wasser geboren und hast gelernt, es zu nutzen, um deine Vitalität zu steigern. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erlangst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt.",
      "Würdest du Kälteschaden erleiden, kannst du deine Reaktion verwenden, um einen Schadenswurf zu widerstehen und keinen Schaden durch diesen Schadenswurf zu erleiden. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Diese Eigenschaft kann nach Ermessen des Spielleiters fehlschlagen.",
      "Du erhältst unter Wasser einen Vorteil auf Stärke- und Geschicklichkeitswürfe.",
      "Wenn du eine ganze kurze Rast unter Wasser verbringst, darfst du eine Anzahl von Trefferwürfeln in Höhe deines Konstitutionsmodifikators (mindestens 1) so behandeln, als hättest du ihr Maximum gewürfelt."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "kneipenschlaeger",
    name: "Kneipenschläger",
    voraussetzung: null,
    kurzbeschreibung: "Kämpfe mit improvisierten Waffen und nutze Treffer zum Ringen.",
    beschreibung: [
      "Du bist an Raufereien gewöhnt und fähig, mit allem zu kämpfen, was dir gerade in die Finger kommt. Du erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Stärke oder Konstitution um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du bist geübt im Umgang mit improvisierten Waffen.",
      "Deine waffenlosen Schläge verursachen 1W4 Schaden.",
      "Wenn du eine Kreatur in deinem Zug mit einer improvisierten Waffe oder einem waffenlosen Schlag triffst, kannst du deine Bonusaktion für den Versuch verwenden, mit dem Ziel zu ringen."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "komodo",
    name: "Komodo",
    voraussetzung: "Echsenmenschen",
    kurzbeschreibung: "Du produzierst ein tödliches Gift, das du zur Verstärkung deiner Angriffe einsetzen kannst.",
    beschreibung: [
      "Du produzierst ein tödliches Gift, das du zur Verstärkung deiner Angriffe einsetzen kannst. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Resistenz gegen Giftschaden. Würdest du Giftschaden erleiden, kannst du deine Reaktion verwenden, um einen Schadenswurf zu widerstehen und keinen Schaden durch diesen Schadenswurf zu erleiden. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung. Diese Eigenschaft kann nach Ermessen des Spielleiters fehlschlagen.",
      "Du sonderst ein gefährliches Gift ab. Du besitzt Giftreserven in Höhe deines Übungsbonus, die bei einer langen Rast wieder aufgefüllt werden. Der Schwierigkeitsgrad für dieses Gift ist 8 + Übungsbonus + Konstitutionsmodifikator.",
      "Wenn du deine Eigenschaft Hungriger Kiefer ausführst, kannst du bei einem Treffer eine Giftreserve nutzen, um das Ziel zu einem Konstitutionsrettungswurf zu zwingen. Bei einem Fehlschlag erleidet es 2W6 Giftschaden und ist eine Minute lang vergiftet. Bei einem Erfolg erleidet es nur halben Schaden und wird nicht vergiftet.",
      "Als Aktion kannst du eine Giftreserve verbrauchen und eine Waffe oder bis zu 5 Stück Munition für 1 Minute mit Gift überziehen. Getroffene Kreaturen müssen einen Konstitutionsrettungswurf ablegen oder 1W6 zusätzlichen Giftschaden erleiden (bei Erfolg halb so viel). Der Gifteffekt kann nur 5 Mal auftreten.",
      "Dein Giftschaden erhöht sich mit steigender Stufe: auf der 6. Stufe auf W8, auf der 11. auf W10, auf der 16. auf W12."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "kormorani",
    name: "Kormorani",
    voraussetzung: "Aarakocra",
    kurzbeschreibung: "Du gehörst zu den Kormorani, Aarakocra, die sich an das Leben an den Küsten angepasst haben.",
    beschreibung: [
      "Du gehörst zu den Kormorani, Aarakocra, die sich an das Leben an den Küsten der Welt angepasst haben. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst die Eigenschaft amphibisch — du kannst sowohl in der Luft als auch im Wasser normal atmen.",
      "Du erlernst den Zaubertrick Wasser formen sowie den Zauber Wasser erschaffen oder zerstören. Du kannst Wasser erschaffen oder zerstören einmal ohne Zauberplatz wirken; nach einer langen Rast kannst du dies erneut tun. Intelligenz, Weisheit oder Charisma sind deine Attribute für diese Zaubersprüche (Wahl beim Erlernen des Talents).",
      "Du erhältst eine Schwimmbewegungsrate, die deiner Flugbewegungsrate entspricht."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "koerper-aus-stahl",
    name: "Körper aus Stahl",
    voraussetzung: "Halborks oder Orks",
    kurzbeschreibung: "Deine orkische Blutlinie macht dich widerstandsfähiger als den durchschnittlichen Humanoiden.",
    beschreibung: [
      "Deine orkische Blutlinie macht dich widerstandsfähiger als den durchschnittlichen Humanoiden. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst einen Vorteil bei Konstitutionsrettungswürfen.",
      "Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt.",
      "Wenn ein Angreifer, den du sehen kannst, dich mit einem Angriff trifft, kannst du deine Reaktion nutzen, um den Hieb-, Stich- und Wuchtschaden dieses Angriffs zu halbieren."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "kriegsgeboren",
    name: "Kriegsgeboren",
    voraussetzung: "Goblins, Hobgoblins oder Grottenschrate",
    kurzbeschreibung: "Du wurdest während eines Feldzugs deines Heeres geboren und hast viele Dinge durch das Beobachten gelernt.",
    beschreibung: [
      "Du wurdest während eines Feldzugs deines Heeres geboren. Du hast viele Dinge durch das Beobachten der Sklaven deines Heeres gelernt. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt.",
      "Du erhältst Übung in einer Waffe, einem Werkzeug und lernst eine Sprache deiner Wahl.",
      "Du erhältst einen Vorteil bei Rettungswürfen gegen Verzauberung oder Verängstigung."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "labyrinthbewohner",
    name: "Labyrinthbewohner",
    voraussetzung: "Minotauren",
    kurzbeschreibung: "Deine Vorfahren lebten tief unter der Erde in labyrinthischen Höhlen ohne Licht.",
    beschreibung: [
      "Deine Vorfahren lebten weit unter der Erde und durchstreiften labyrinthische Labyrinthe, in denen es kein Licht gab. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du hast Dunkelsicht bis zu einer Reichweite von 41 m.",
      "Du bist im Vorteil bei allen Würfen, die du machst, um dich in dunklen, unterirdischen Räumen zurechtzufinden.",
      "Du kannst dir selbst die komplexesten Layouts von Labyrinthen, verwirrenden Höhlensystemen, Grundrissen von Gebäuden und ähnlichem genau einprägen. So findest du dich in solchen Umgebungen immer zurecht.",
      "Du lernst den Zauber Weg finden und kannst ihn einmal wirken. Danach musst du eine lange Rast einlegen, bevor du ihn erneut wirken kannst. Intelligenz, Weisheit oder Charisma ist dein Attributsmodifikator für diesen Zauber. Wähle das Attribut, wenn du dieses Talent wählst."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "leichtes-verschwinden",
    name: "Leichtes Verschwinden",
    voraussetzung: "Gnome",
    kurzbeschreibung: "Du hast einen magischen Trick gelernt, um zu verschwinden, wenn du Schaden erleidest.",
    beschreibung: [
      "Dein Volk ist klug und hat ein Händchen für Illusionsmagie. Du hast einen magischen Trick gelernt, um zu verschwinden, wenn du Schaden erleidest. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Geschicklichkeit (Heimlichkeit). Wenn du bereits in Heimlichkeit geübt bist, erhältst du Expertise.",
      "Unmittelbar nachdem du Schaden erlitten hast, kannst du deine Reaktion einsetzen, um bis zum Ende deines nächsten Zugs auf magische Weise unsichtbar zu werden. Du kannst dies so oft tun, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer kurzen oder langen Rast wieder zur Verfügung."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "leichtfuessig",
    name: "Leichtfüßig",
    voraussetzung: null,
    kurzbeschreibung: "Höhere Bewegungsrate und kein Gelegenheitsangriff nach Nahkampfattacken.",
    beschreibung: [
      "Du bist außergewöhnlich schnell und agil, was dir die folgenden Vorzüge verleiht:"
    ],
    vorzuege: [
      "Deine Bewegungsrate erhöht sich um 3 m.",
      "Wenn du die Rennenaktion nutzt, kostet dich schwieriges Gelände in dieser Runde keine zusätzliche Bewegungsrate.",
      "Führst du einen Nahkampfangriff gegen eine Kreatur aus, provozierst du für den Rest des Zuges von dieser keinen Gelegenheitsangriff, ob du triffst oder nicht."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "leicht-geruestet",
    name: "Leicht gerüstet",
    voraussetzung: null,
    kurzbeschreibung: "Erlange Übung im Umgang mit leichten Rüstungen.",
    beschreibung: [
      "Du hast trainiert, in leichten Rüstungen zu kämpfen, und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Stärke oder Geschicklichkeit um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du bist geübt im Umgang mit leichten Rüstungen."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "linguist",
    name: "Linguist",
    voraussetzung: null,
    kurzbeschreibung: "Lerne drei Sprachen und entwirf eigene Geheimschriften.",
    beschreibung: [
      "Du hast Sprachen und Geheimschriften studiert, wodurch du diese Vorzüge erhältst:"
    ],
    vorzuege: [
      "Erhöhe deine Intelligenz um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du erlernst drei Sprachen deiner Wahl.",
      "Du bist in der Lage, Geheimschriften zu entwerfen. Andere können deine Geheimschriften nicht entziffern, bis du es ihnen beigebracht hast, sie einen Intelligenzwurf bestehen (SG = dein Intelligenzwert + dein Übungsbonus) oder Magie anwenden, um die Schrift zu entschlüsseln."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "magie-der-ozeane",
    name: "Magie der Ozeane",
    voraussetzung: "Tritons oder Meereselfen",
    kurzbeschreibung: "Du bist mehr auf die Magie der Elementarebene des Wassers eingestimmt als andere deiner Art.",
    beschreibung: [
      "Du bist mehr auf die Magie der Elementarebene des Wassers eingestimmt als andere deiner Art. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst den Zaubertrick Wasser formen.",
      "Du erlernst die Zauber Wasser erschaffen oder zerstören und Schutzwind. Du kannst jeden Zauber auf seiner niedrigsten Stufe einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst.",
      "Immer wenn du deinen Zug vollständig unter Wasser beginnst, erhältst du vorübergehend Trefferpunkte in Höhe deiner Stufe. Diese temporären Trefferpunkte gehen verloren, wenn du deinen Zug nicht unter Wasser beendest."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "magie-der-schattengeister",
    name: "Magie der Schattengeister",
    voraussetzung: "Schattenfeen",
    kurzbeschreibung: "Du bist mehr mit der Magie des Schattenreichs vertraut als andere deiner Art.",
    beschreibung: [
      "Du bist mehr mit der Magie des Schattenreichs vertraut als andere deiner Art. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Deine Eigenschaft Segen der Rabenkönigin lädt sich jetzt bei einer kurzen oder langen Rast wieder auf. Außerdem kannst du, wenn du keine Nutzung mehr hast, einen Zauberplatz der Stufe 1 oder höher ausgeben, um diese Fähigkeit erneut zu benutzen.",
      "Du erlernst die Zauber Unsichtbarkeit und Verderben. Du kannst jeden dieser Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Modifikator bei diesen Zaubern ist Weisheit, Charisma oder Intelligenz. Wähle das Attribut, wenn du dieses Talent auswählst."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "magiertoeter",
    name: "Magiertöter",
    voraussetzung: null,
    kurzbeschreibung: "Störe und bestrafe Zauberwirker im Nahkampf mit Reaktionsangriffen.",
    beschreibung: [
      "Du hast Techniken erlernt, die im Nahkampf gegen Zauberwirker hilfreich sind, und erhältst dadurch folgende Vorzüge:"
    ],
    vorzuege: [
      "Wenn eine Kreatur innerhalb von 1,50 m einen Zauber wirkt, kannst du deine Reaktion nutzen, um einen Nahkampf-Waffenangriff gegen diese Kreatur auszuführen.",
      "Kreaturen, die sich auf Zauber konzentrieren, sind beim Rettungswurf zum Aufrechterhalten der Konzentration im Nachteil, wenn du ihnen Schaden zufügst.",
      "Du bist im Vorteil bei Rettungswürfen gegen Zaubersprüche, die von Kreaturen innerhalb von 1,50 m gewirkt werden."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "magische-plagiate",
    name: "Magische Plagiate",
    voraussetzung: "Kenku",
    kurzbeschreibung: "Du hast gelernt, die magischen Fähigkeiten von anderen zu imitieren.",
    beschreibung: [
      "Du hast gelernt, die magischen Fähigkeiten von anderen zu imitieren. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst den Zaubertrick Einfache Illusion sowie die Zauber Lautloses Trugbild und Selbstverkleidung. Du kannst jeden Zauber einmal auf der ersten Stufe wirken, ohne einen Zauberplatz zu verbrauchen; nach einer langen Rast kannst du dies erneut tun.",
      "Während einer langen Rast kannst du dir von einem willigen Verbündeten einen seiner vorbereiteten Zauber zeigen lassen. Du lernst den Zauber und kannst ihn mit allen dir zur Verfügung stehenden Zauberplätzen wirken. Die maximale Stufe beträgt ein Drittel deiner Stufe (aufgerundet). Du kannst immer nur einen Zauber gleichzeitig einprägen.",
      "Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "meister-der-feenmagie",
    name: "Meister der Feenmagie",
    voraussetzung: "Feen",
    kurzbeschreibung: "Du besitzt eine besondere Begabung für Feenmagie und kannst besser mit ihr umgehen als andere.",
    beschreibung: [
      "Du besitzt eine besondere Begabung für Feenmagie, wodurch du besser mit ihr umgehen kannst, als andere. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst den Zaubertrick Tanzende Lichter. Du kannst diesen nach Belieben wirken.",
      "Wenn du den Zauber Feenfeuer wirkst, kannst du deine Ziele im Wirkbereich auswählen.",
      "Du erlernst die Zauber Gute Beeren und Wunden heilen. Du kannst diese jeweils einmal pro lange Rast benutzen. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "meister-der-firbolg-magie",
    name: "Meister der Firbolg-Magie",
    voraussetzung: "Firbolg",
    kurzbeschreibung: "Du erlernst die fortgeschrittene druidische Magie, zu der nur wenige deines Volkes Zugang haben.",
    beschreibung: [
      "Du erlernst die fortgeschrittene druidische Magie, zu der nur wenige Mitglieder deines Volkes Zugang haben. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst einen Druiden-Zaubertrick deiner Wahl sowie die Zauber Tierfreundschaft und Feenfeuer, die du jeweils einmal ohne Zauberplatz wirken kannst. Du erlangst diese Fähigkeit nach einer langen Rast erneut. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen).",
      "Du erhältst die Fähigkeit, die Gestalt eines Tieres mit HG 1/4 oder weniger anzunehmen, das du schon gesehen hast (ähnlich der Druideneigenschaft Tiergestalt). Die Bestie kann weder fliegen noch schwimmen. Du bleibst 1 Stunde in der Tiergestalt oder kehrst früher per Bonusaktion zurück. Es gelten alle regulären Regeln für Tiergestalt. Du erhältst einen Einsatz dieser Eigenschaft; besitzt du Tiergestalt bereits, kannst du sie 1 Mal zusätzlich einsetzen (normale Regeln einschließlich Symbiose/Wildfeuergeist). Verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "meister-der-grauzwerg-magie",
    name: "Meister der Grauzwerg-Magie",
    voraussetzung: "Grauzwerge",
    kurzbeschreibung: "Du hast die angeborene Fähigkeit deiner Vorfahren gemeistert.",
    beschreibung: [
      "Du hast die angeborene Fähigkeit deiner Vorfahren gemeistert. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst zusätzliche Anwendungen für dein Merkmal Grauzwerg-Magie. Du kannst Zauber mit diesem Merkmal jeweils so oft wirken, wie es deinem Übungsbonus entspricht, und du erhältst alle verbrauchten Aufladungen beim Beenden einer kurzen Rast zurück.",
      "Zusätzlich lernst du die Zauber Befehl und Zorniges Niederstrecken. Du kannst diese wie deine anderen Zauber des Merkmals Grauzwerg-Magie wirken."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "meister-der-hexmagie",
    name: "Meister der Hexmagie",
    voraussetzung: "Hexblute",
    kurzbeschreibung: "Durch die besonders starke Paktmagie deines Ursprungs hast du ein Talent für potentere Flüche.",
    beschreibung: [
      "Durch die besonders starke Paktmagie, die deinem Ursprung zu Grunde liegt, hast du ein Talent dafür, potentere Flüche zu sprechen als die meisten anderen Hexblute. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst den Zaubertrick Gehässiger Spott. Du kannst diesen nach Belieben wirken.",
      "Du erlernst den Zauber Zone der Wahrheit. Du kannst diesen einmal pro langer Rast mit diesem Merkmal benutzen.",
      "Wenn du den Zauber Verwünschen wirkst, erleidet das Ziel statt 1W6 nekrotischem Schaden 1W4 nekrotischen Schaden jedes Mal, wenn die betroffene Kreatur Schaden durch dich oder einen deiner Mitstreiter erleidet. Wenn du dieses Merkmal einsetzt, hast du für die Dauer des Zaubers Nachteil auf Konstitutionswürfe zur Aufrechterhaltung der Konzentration und kannst keine neue Kreatur verwünschen, wenn das Ziel auf 0 Trefferpunkte fällt. Ab Stufe 8 erhöht sich der Schaden auf 1W6."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "meister-der-hoellenmagie",
    name: "Meister der Höllenmagie",
    voraussetzung: "Tieflinge",
    kurzbeschreibung: "Dein einzigartiges Erbe hat dir eine verstärkte Magie verliehen, die für einen normalen Tiefling untypisch ist.",
    beschreibung: [
      "Dein einzigartiges Erbe hat dir eine verstärkte Magie verliehen, die für einen normalen Tiefling untypisch ist. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst einen Zaubertrick deiner Wahl, der Schaden der deiner Abstammung zugeordneten Schadensart verursacht (siehe Tabelle). Dein Attributsmodifikator ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen).",
      "Du erlernst den Zauber Verwünschen. Du kannst ihn einmal ohne Zauberplatz wirken; danach benötigst du eine lange Rast. Dein Attributsmodifikator ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen).",
      "Du erlernst einen Zauber der 1. Stufe deiner Wahl, der Schaden der deiner Abstammung zugeordneten Schadensart verursacht (siehe Tabelle). Du kannst ihn einmal ohne Zauberplatz wirken; danach benötigst du eine lange Rast. Dein Attributsmodifikator ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen).",
      "Wenn du Schaden der deiner Abstammung zugeordneten Schadensart verursachst, kannst du die betroffene Kreatur zu einem Charismarettungswurf zwingen (SG 8 + Übungsbonus + Attributsmodifikator). Bei einem Fehlschlag wird die Kreatur bis zum Ende deines nächsten Zuges von dir verängstigt oder bezaubert (deine Wahl). Du kannst dies so oft tun, wie es deinem Übungsbonus entspricht; danach benötigst du eine lange Rast."
    ],
    tabellen: [
      {
        wuerfel: "Schadensart",
        header: ["Schadensart", "Zaubertricks"],
        eintraege: [
          ["Blitz", "Blitzköder, Schockgriff"],
          ["Energie", "Schauriger Strahl, Schwertexplosion"],
          ["Feuer", "Flammen erzeugen, Lagerfeuer erschaffen, Feuerpfeil, Grünfeuerklinge"],
          ["Gift", "Befall, Gift versprühen"],
          ["Kälte", "Erfrierung, Kältestrahl"],
          ["Psychisch", "Gedankensplitter, Gehässiger Spott"],
          ["Säure", "Säurespritzer, Urtümliche Wildheit"],
          ["Schall", "Dröhnende Klinge, Donnerschlag"],
          ["Strahlend", "Heilige Flamme, Wort des Strahlens"]
        ]
      },
      {
        wuerfel: "Schadensart",
        header: ["Schadensart", "Zauber (1. Stufe)"],
        eintraege: [
          ["Blitz", "Chromatische Kugel (Blitz), Hexenpfeil"],
          ["Energie", "Chromatische Kugel (Energie), Magisches Geschoss, Zephyrschlag"],
          ["Feuer", "Chromatische Kugel (Feuer), Brennende Hände, Höllischer Tadel, Sengendes Niederstrecken"],
          ["Gift", "Chromatische Kugel (Gift), Strahl der Übelkeit"],
          ["Kälte", "Chromatische Kugel (Kälte), Frostige Finger, Eismesser"],
          ["Psychisch", "Dissonantes Flüstern, Zorniges Niederstrecken"],
          ["Säure", "Chromatische Kugel (Säure), Tashas ätzendes Gebräu"],
          ["Schall", "Donnerndes Niederstrecken, Donnerwoge"],
          ["Strahlend", "Göttliche Gunst, Lenkendes Geschoss"]
        ]
      }
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "meister-der-kampfkunst",
    name: "Meister der Kampfkunst",
    voraussetzung: null,
    kurzbeschreibung: "Lerne zwei Kampfmanöver des Kampfmeisters und erhalte einen Überlegenheitswürfel.",
    beschreibung: [
      "Du hast ein intensives Kampftraining absolviert, das dir erlaubt, spezielle Kampfmanöver auszuführen. Du erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Du lernst zwei Manöver deiner Wahl, die dem Kampfmeister-Archetypen der Kämpferklasse zur Verfügung stehen.",
      "Wenn das Kampfmanöver, das du anwendest, vom Ziel einen Rettungswurf verlangt, um Effekten des Manövers zu widerstehen, ist der SG des Rettungswurfs gleich 8 + deinem Übungsbonus + deinem Stärke- oder Geschicklichkeitsmodifikator (deine Wahl).",
      "Du erhältst einen Überlegenheitswürfel (W6). Besitzt du bereits Überlegenheitswürfel, wird dieser hinzugefügt. Der Würfel gilt nach der Anwendung als verbraucht und steht dir nach einer kurzen oder langen Rast wieder zur Verfügung."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "meister-der-mittelschweren-ruestungen",
    name: "Meister der mittelschweren Rüstungen",
    voraussetzung: "geübt im Umgang mit mittelschweren Rüstungen",
    kurzbeschreibung: "Kämpfe lautlos in mittelschwerer Rüstung und nutze hohe Geschicklichkeit voll aus.",
    beschreibung: [
      "Du hast den Kampf in mittelschweren Rüstungen gemeistert und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Du bist durch das Tragen von mittelschweren Rüstungen bei Würfen auf Geschicklichkeit (Heimlichkeit) nicht im Nachteil.",
      "Wenn du eine mittelschwere Rüstung trägst und eine Geschicklichkeit von 16 oder höher besitzt, darfst du 3 Punkte anstatt 2 auf deine Rüstungsklasse addieren."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "meister-der-nachahmung",
    name: "Meister der Nachahmung",
    voraussetzung: "Kenku",
    kurzbeschreibung: "Du hast so lange andere imitiert, dass es zur zweiten Natur geworden ist.",
    beschreibung: [
      "Du hast so lange damit verbracht, andere zu imitieren, dass es für dich zur zweiten Natur geworden ist. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlangst Übung im Umgang mit dem Fälschungswerkzeug und dem Verkleidungswerkzeug.",
      "Während einer langen Rast kannst du einen willigen Verbündeten beobachten. Dabei kannst du dessen Übung in einer bestimmten Fertigkeit oder einem bestimmten Werkzeug nachahmen und erlangst bis zum Ende deiner nächsten langen Rast oder bis du diese Fähigkeit erneut einsetzt, die Übung in dieser Fertigkeit."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "meister-der-schweren-ruestungen",
    name: "Meister der schweren Rüstungen",
    voraussetzung: "geübt im Umgang mit schweren Rüstungen",
    kurzbeschreibung: "Reduziere physischen Schaden nicht-magischer Waffen beim Tragen schwerer Rüstungen.",
    beschreibung: [
      "Du hast den Kampf in schweren Rüstungen gemeistert und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Stärke um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Solange du schwere Rüstungen trägst, wird der Hieb-, Stich- oder Wuchtschaden nicht-magischer Waffen um 3 Punkte reduziert."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "meister-der-tiefengnom-magie",
    name: "Meister der Tiefengnom-Magie",
    voraussetzung: "Tiefengnome",
    kurzbeschreibung: "Du hast die angeborene Fähigkeit deiner Vorfahren gemeistert.",
    beschreibung: [
      "Du hast die angeborene Fähigkeit deiner Vorfahren gemeistert. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du kannst nach Belieben den Zauber Unauffindbarkeit auf dich wirken, ohne materielle Komponenten zu benötigen. Außerdem kannst du jeden der folgenden Zauber einmal mit dieser Fähigkeit wirken: Blindheit/Taubheit, Verschwimmen und Selbstverkleidung. Du erlangst die Fähigkeit, diese Zauber zu wirken, wieder, wenn du eine lange Rast beendet hast. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "meister-des-hexenkessels",
    name: "Meister des Hexenkessels",
    voraussetzung: "Hexblute",
    kurzbeschreibung: "Die Vettelmagie in deinen Adern stammt von einer besonders Alchemie-interessierten Vettel.",
    beschreibung: [
      "Die Vettelmagie, die deine Adern durchströmt, stammt von einer besonders Alchemie-interessierten Vettel und verleiht dir die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wann immer du willst, kannst du als Aktion einen silbernen Hexenkessel innerhalb von 1,5 m an einem freien Ort beschwören, indem du 1000 Silbermünzen (100 Goldmünzen) aufgibst, um sie zu einem Kessel zu formen. Der Kessel bleibt 10 Stunden bestehen oder bis du ihn per Bonusaktion verschwinden lässt.",
      "Du erhältst Übung in Alchemistenlabor (Bomben), Giftmischerausrüstung (Gifte) oder Kräuterkundeausrüstung (Tränke) — Wahl beim Erlernen. Bist du bereits geübt, erhältst du Expertise. Dein beschworener Hexenkessel gilt für alle alchemistischen Zwecke als eines dieser Werkzeuge.",
      "Wenn du den Hexenkessel beschwörst, beschleunigt sich die Arbeitszeit so, dass du ein Gebräu mit einer Reagenz während einer langen Rast fertigstellen kannst. Dabei bist du aufmerksam und konzentriert und erhältst nur den Effekt einer kurzen Rast. Verfügst du über Zauberplätze, die bei einer langen Rast wiederhergestellt werden, kannst du Zauberplätze zurückerlangen, deren Gesamtgrad der Hälfte deines Charakterlevels (abgerundet) entspricht."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "meister-des-panzers",
    name: "Meister des Panzers",
    voraussetzung: "Tortels",
    kurzbeschreibung: "Du hast den Einsatz deines Panzers im Kampf perfektioniert, um dich vor Angriffen zu schützen.",
    beschreibung: [
      "Du hast den Einsatz deines Panzers im Kampf perfektioniert, um dich vor Angriffen zu schützen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du kannst nun bis zu +2 zu deiner natürlichen Rüstungsklasse hinzufügen, abhängig von deinem Geschicklichkeitsmodifikator.",
      "Wenn du von einem Angriff getroffen wirst, kannst du deine Reaktion nutzen, um deine Eigenschaft Panzerverteidigung zu aktivieren, wodurch der Angriff möglicherweise fehlschlägt. Du kannst Panzerverteidigung auch als Bonusaktion einsetzen. Während du dich zurückziehst, haben Nahkämpfer keinen Vorteil gegen dich wegen der Bodenlage, und du darfst Reaktionen einsetzen — wenn du das tust, kommst du jedoch aus deinem Panzer heraus."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "menschliche-entschlossenheit",
    name: "Menschliche Entschlossenheit",
    voraussetzung: "Menschen",
    kurzbeschreibung: "Du bist von einer Entschlossenheit erfüllt, die das Unerreichbare in deine Reichweite ziehen kann.",
    beschreibung: [
      "Du bist von einer Entschlossenheit erfüllt, die das Unerreichbare in deine Reichweite ziehen kann. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wenn du einen Angriffswurf, einen Attributswurf oder einen Rettungswurf machst, kannst du dies mit Vorteil tun. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung.",
      "Immer wenn du bei einem W20-Wurf eine 20 würfelst, erhältst du eine Aufladung dieser Fähigkeit zurück."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "mittelschwer-geruestet",
    name: "Mittelschwer gerüstet",
    voraussetzung: "geübt im Umgang mit leichten Rüstungen",
    kurzbeschreibung: "Erlange Übung mit mittelschweren Rüstungen und Schilden.",
    beschreibung: [
      "Du hast trainiert, in mittelschweren Rüstungen und mit Schilden zu kämpfen, und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Stärke oder Geschicklichkeit um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du bist im Umgang mit mittelschweren Rüstungen und Schilden geübt."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "morphender-koerper",
    name: "Morphender Körper",
    voraussetzung: "Wechselbälger",
    kurzbeschreibung: "Deine Kontrolle über deinen Körper erlaubt dir Einfluss auf deine inneren Organe und dein Äußeres.",
    beschreibung: [
      "Deine Kontrolle über deinen Körper erlaubt dir eine gewisse Kontrolle über deine inneren Organe und dein äußeres Erscheinungsbild. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Resistenz gegen Giftschaden und einen Vorteil bei Rettungswürfen gegen Vergiftungen.",
      "Wenn du Schaden nimmst, kannst du deine Reaktion nutzen, um bis zum Beginn deines nächsten Zuges eine Resistenz gegen diesen Schadenstyp zu entwickeln.",
      "Wenn du einen kritischen Treffer erleidest, kannst du ihn in einen normalen Treffer umwandeln. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Konstitutionsmodifikator entspricht (mindestens einmal); danach benötigst du eine lange Rast."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "naturmagie-der-tortels",
    name: "Naturmagie der Tortels",
    voraussetzung: "Tortels",
    kurzbeschreibung: "Du bist mehr auf die natürliche Magie der Welt eingestimmt als die typischen Magier deiner Rasse.",
    beschreibung: [
      "Du bist mehr auf die natürliche Magie der Welt eingestimmt als die typischen Magier deiner Rasse. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst den Zaubertrick Druidenkunst und einen weiteren Druidenzaubertrick deiner Wahl.",
      "Du erlernst den Zauber Verstricken und einen weiteren Druidenzauber der 1. Stufe deiner Wahl. Du kannst jeden dieser Zauber einmal wirken, ohne einen Zauberplatz zu verbrauchen; nach einer langen Rast kannst du dies erneut tun. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma (Wahl beim Erlernen).",
      "Wenn du deine Eigenschaft Panzerverteidigung einsetzt, erhältst du Vorteil bei Konstitutionswürfen zur Aufrechterhaltung der Konzentration. Außerdem kannst du während Panzerverteidigung deine Bonusaktion oder Aktion nutzen, um einen aktiven Zauber zu verändern oder aufrechtzuerhalten."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "neun-leben",
    name: "Neun Leben",
    voraussetzung: "Tabaxi",
    kurzbeschreibung: "Dein katzenhaftes Glück erlaubt es dir, Schläge zu überleben, die dich sonst bewusstlos machen würden.",
    beschreibung: [
      "Dein katzenhaftes Glück erlaubt es dir, Schläge zu überleben, die dich sonst bewusstlos machen würden. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du hast einen Vorteil bei Todesrettungswürfen.",
      "Wenn du auf 0 Trefferpunkte reduziert, aber nicht getötet wirst, wirf 1W20. Bei einer 9 oder niedriger fällst du stattdessen auf einen Trefferpunkt und erhältst temporäre Trefferpunkte in Höhe deiner Stufe. Wird durch einen kritischen Treffer auf 0 TP reduziert, funktioniert diese Eigenschaft nicht. Jedes Mal, wenn du sie erfolgreich einsetzt, sinkt der Schwellenwert um 1 (du musst dann eine 8 oder niedriger würfeln, dann eine 7 usw.). Nach einer langen Rast wird der Zähler zurückgesetzt."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "orkische-macht",
    name: "Orkische Macht",
    voraussetzung: "Halborks",
    kurzbeschreibung: "Deine innere Wut brennt unermüdlich.",
    beschreibung: [
      "Deine innere Wut brennt unermüdlich. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wenn du mit einem Angriff mit einer einfachen oder einer Kriegswaffe triffst, kannst du einen der Schadenswürfel der Waffe ein weiteres Mal werfen und ihn als zusätzlichen Schaden hinzufügen. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht; verbrauchte Einsätze stehen nach einer langen Rast wieder zur Verfügung.",
      "Wenn du eine Kreatur mit einem Waffenangriff triffst, erhältst du temporäre Trefferpunkte in Höhe deines Übungsbonus.",
      "Unmittelbar nachdem du deine Eigenschaft Durchhaltevermögen eingesetzt hast, kannst du deine Reaktion nutzen, um einen Waffenangriff durchzuführen."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "pflanzenfreundschaft",
    name: "Pflanzenfreundschaft",
    voraussetzung: "Feen",
    kurzbeschreibung: "Deine ausgeprägte Naturverbundenheit lässt dich noch besser mit den Wäldern und ihren Pflanzen im Einklang leben.",
    beschreibung: [
      "Deine ausgeprägte Naturverbundenheit lässt dich noch besser mit den Wäldern und ihren Pflanzen im Einklang leben. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Intelligenz (Naturkunde). Wenn du bereits in Naturkunde geübt bist, erhältst du Expertise.",
      "Du erlernst den Zauber Mit Pflanzen sprechen. Du kannst diesen einmal pro lange Rast benutzen. Dein Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "rasende-reisszaehne",
    name: "Rasende Reißzähne",
    voraussetzung: "Wandler (Tierfell)",
    kurzbeschreibung: "Du hast mehr von deinem tierischen Erbe in dir — deine Reißzähne sind länger und kräftiger.",
    beschreibung: [
      "Du hast mehr von deinem tierischen Erbe in dir als die meisten deiner Rasse. Deine Reißzähne sind länger und kräftiger. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Während du verwandelt bist, fügen deine verlängerten Reißzähne zusätzlichen Stichschaden in Höhe deines Übungsbonus zu.",
      "Wenn du eine Kreatur mit deinen verlängerten Reißzähnen triffst, erhältst du temporäre Trefferpunkte in Höhe deines Übungsbonus. Diese stapeln sich mit vorhandenen temporären Trefferpunkten, es sei denn, du hast bereits temporäre TP, die deine Stufe übersteigen.",
      "Wenn du mit deinen verlängerten Reißzähnen angreifst, erhöht sich deine Reichweite für kritische Treffer um 1."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "reptilianische-regeneration",
    name: "Reptilianische Regeneration",
    voraussetzung: "Echsenmenschen",
    kurzbeschreibung: "Die feindliche Umgebung, in der du aufgewachsen bist, hat deinen Körper zur Anpassung gezwungen.",
    beschreibung: [
      "Die Umgebung, in der du aufgewachsen bist, ist feindlich; die Schwachen gehen zugrunde, und die Starken überleben. Dein Körper musste sich anpassen und du erhältst dadurch die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst jede Stunde 1 Trefferpunkt zurück, solange du mindestens 1 Trefferpunkt hast oder mit 0 Trefferpunkten stabilisiert bist.",
      "Du kannst verlorene Körperteile nachwachsen lassen. Die benötigte Zeit hängt vom verlorenen Körperteil ab: 1W4 Tage für einen Finger oder Zeh, 1W6 Wochen für einen Arm oder ein Bein.",
      "Als Aktion kannst du 1 Minute lang (oder bis du bewusstlos wirst) einen Regenerationsschub auslösen. Du erhältst zu Beginn jeder deiner Runden Trefferpunkte in Höhe deines Übungsbonus zurück. Nach Einsatz dieser Fähigkeit steht sie erst nach einer langen Rast wieder zur Verfügung."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "ringer",
    name: "Ringer",
    voraussetzung: "Stärke 13 oder höher",
    kurzbeschreibung: "Setze gepackte Gegner fest und greife sie im Vorteil an.",
    beschreibung: [
      "Du hast dir beigebracht, dich im Ringkampf durchzusetzen, wodurch du die folgenden Vorzüge erhältst:"
    ],
    vorzuege: [
      "Du bist bei Angriffswürfen gegen Kreaturen im Vorteil, die du gepackt hast.",
      "Du kannst deine Aktion dazu verwenden, eine Kreatur, die du gepackt hast, festzusetzen. Lege dazu einen zweiten Ringkampfwurf ab. Wenn dieser erfolgreich ist, erhaltet ihr beide den Zustand festgesetzt, bis der Zustand gepackt endet."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "ritualwirker",
    name: "Ritualwirker",
    voraussetzung: "Intelligenz oder Weisheit 13 oder höher",
    kurzbeschreibung: "Wirke Ritualzauber aus einem eigenen Ritualbuch, ohne Zauberplätze aufzuwenden.",
    beschreibung: [
      "Du hast dir eine Reihe von Zaubern angeeignet, die du als Rituale wirken kannst. Diese Zauber werden in einem Ritualbuch niedergeschrieben, das du in der Hand halten musst, während du eines dieser Rituale ausführst."
    ],
    vorzuege: [
      "Wenn du dieses Talent wählst, erhältst du ein Ritualbuch mit zwei Zaubern des 1. Grades deiner Wahl. Entscheide dich für eine Klasse: Barde, Druide, Kleriker, Magier, Hexenmeister oder Zauberer. Die zwei Zauber müssen aus der Spruchliste dieser Klasse stammen und als Ritual gekennzeichnet sein. Die Klasse bestimmt das Zauberattribut: Charisma (Barde, Hexenmeister, Zauberer), Weisheit (Druide, Kleriker) oder Intelligenz (Magier).",
      "Findest du einen als Ritual gekennzeichneten Zauber der gewählten Klassenliste in geschriebener Form, kannst du ihn in dein Ritualbuch übertragen. Sein Grad darf nicht mehr als die Hälfte deiner Stufe (aufgerundet) betragen. Der Vorgang dauert 2 Stunden pro Grad und kostet 50 GM pro Grad (für Materialkomponenten und spezielle Tinte)."
    ],
    kategorie: "Magie",
    angeboren: false
  },
  {
    id: "scharfschuetze",
    name: "Scharfschütze",
    voraussetzung: null,
    kurzbeschreibung: "Ignoriere Deckung und schieße über die normale Reichweite ohne Nachteil.",
    beschreibung: [
      "Du bist ein Meister im Fernkampf und kannst Schüsse ausführen, die anderen unmöglich sind. Du erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Du bist beim Angriffswurf nicht im Nachteil, wenn du ein Ziel angreifst, das sich weiter entfernt befindet als die Grundreichweite deiner Waffe.",
      "Deine Fernkampfangriffe ignorieren Teil- und Dreivierteldeckung.",
      "Bevor du einen Angriff mit einer Fernkampfwaffe ausführst, in deren Umgang du geübt bist, kannst du dich entscheiden, einen Malus von −5 auf den Angriffswurf hinzunehmen, um den verursachten Schaden bei einem Treffer um 10 zu erhöhen."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "schattenblutig",
    name: "Schattenblütig",
    voraussetzung: "Schattenfeen",
    kurzbeschreibung: "Die starke Schattenreichsmagie in dir verleiht dir außergewöhnliche Zähigkeit und Widerstand gegen nekrotischen und Giftschaden.",
    beschreibung: [
      "Die Magie des Schattenreichs in dir ist stark und verleiht dir eine Widerstandsfähigkeit, die größer ist, als die der meisten deiner Art. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt.",
      "Du erhältst Resistenz gegen nekrotischen Schaden. Würdest du Schaden dieser Art erleiden, kannst du deine Reaktion verwenden, um einem Schadenswurf zu widerstehen. Du erhältst keinen Schaden durch diesen Schadenswurf. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht, und du erhältst alle verbrauchten Einsätze zurück, wenn du eine lange Rast beendest. Diese Eigenschaft kann in bestimmten Situationen, nach Ermessen des Spielleiters, fehlschlagen.",
      "Du erhältst Resistenz gegen Giftschaden.",
      "Du hast einen Vorteil bei Rettungswürfen gegen Vergiftung."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "schattenverbundenheit-dunkelelfen",
    name: "Schattenverbundenheit der Dunkelelfen",
    voraussetzung: "Dunkelelfen",
    kurzbeschreibung: "Du lernst, mit den Schatten zu verschmelzen, und erhältst Unsichtbarkeit in totaler Dunkelheit.",
    beschreibung: [
      "Du lernst, mit den Schatten zu verschmelzen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du kannst versuchen, dich zu verstecken, auch wenn du nur leicht verschleiert bist.",
      "Du erlernst den Zauber Dunkelheit und kannst ihn nach Belieben wirken. Dein Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst.",
      "Solange du dich in völliger Dunkelheit befindest, wirst du auf magische Weise unsichtbar. Du bleibst unsichtbar, bis du ins Licht kommst, angreifst oder einen Zauber wirkst; dann wirst du bis zum Beginn deines nächsten Zuges sichtbar."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "schatzhorter",
    name: "Schatzhorter",
    voraussetzung: "Wandler (Himmelflug)",
    kurzbeschreibung: "Das Korviden-Blut in dir verleiht dir Überzeugungskunst, den Zaubertrick Botschaft und Spürsinn für Schätze.",
    beschreibung: [
      "Das Blut der Korviden fließt stärker in dir, als in deinen Artgenossen. Du erhältst folgende Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Charisma (Überzeugen). Wenn du in Überzeugen bereits geübt bist, erlangst du Expertise.",
      "Du erlernst den Zaubertrick Botschaft.",
      "Du hast einen Vorteil bei Würfen auf Intelligenz (Nachforschung), wenn du nach Schätzen suchst."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "schauspieler",
    name: "Schauspieler",
    voraussetzung: null,
    kurzbeschreibung: "Imitiere Stimmen täuschend echt und verkleidet dich mit Vorteil.",
    beschreibung: [
      "Da du äußerst bewandert in den Künsten der Nachahmung und der Darstellung bist, erhältst du die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe dein Charisma um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du bist bei Würfen auf Charisma (Täuschen) und Charisma (Auftreten) im Vorteil, wenn du dich als eine andere Person ausgeben willst.",
      "Du bist in der Lage, die Stimme einer anderen Person oder die Laute einer Kreatur nahezu perfekt nachzuahmen. Dazu musst du dem Ziel mindestens 1 Minute lang zugehört haben. Ein erfolgreicher Weisheitswurf (Motiv erkennen) gegen deinen Wurf auf Charisma (Täuschen) lässt den Zuhörer die Täuschung bemerken."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "schildmeister",
    name: "Schildmeister",
    voraussetzung: null,
    kurzbeschreibung: "Nutze deinen Schild offensiv und defensiv, auch gegen Zaubereffekte.",
    beschreibung: [
      "Du hast gelernt, Schilde nicht nur zur Verteidigung, sondern auch zum Angriff zu nutzen. Du erhältst die folgenden Vorzüge, solange du einen Schild führst:"
    ],
    vorzuege: [
      "Wenn du in deinem Zug die Angriffsaktion wählst, kannst du deine Bonusaktion dazu verwenden, eine Kreatur innerhalb von 1,50 m mit deinem Schild zurückzustoßen.",
      "Solange du nicht kampfunfähig bist, kannst du den Rüstungsklassebonus deines Schildes zu jedem Geschicklichkeitsrettungswurf addieren, den du aufgrund eines Zaubereffekts oder einer anderen schädlichen Quelle ablegen musst, sofern dieser Effekt nur dich betrifft.",
      "Wirst du von einem Effekt betroffen, der dir erlaubt, durch einen erfolgreichen Geschicklichkeitsrettungswurf nur den halben Schaden zu nehmen, kannst du deine Reaktion aufwenden, um bei einem gelungenen Rettungswurf keinen Schaden zu erleiden."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "schlangennest",
    name: "Schlangennest",
    voraussetzung: "Yuan-ti",
    kurzbeschreibung: "Verwandle Stöcke oder Pfeile in einen Schwarm giftiger Schlangen, der dir gehorcht.",
    beschreibung: [
      "Du hast die Rituale der Angehörigen höherer Kasten studiert, die sich den Schlangengöttern widmen, und du hast einiges von ihnen aufgeschnappt. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du hast einen Vorteil bei Weisheitsprüfungen (Umgang mit Tieren) im Umgang mit Schlangen.",
      "Als Aktion kannst du einen Haufen Stöcke, zehn Pfeile oder kleine Holzstücke in einen Schwarm giftiger Schlangen verwandeln. Der Schwarm handelt als dein Verbündeter und gehorcht deinen Befehlen. Diese Verwandlung dauert eine Minute, danach kehrt der Schwarm in seine ursprüngliche Form zurück. Wird der Schwarm vorher getötet, verwandelt er sich vorzeitig in seine ursprüngliche Form zurück. Du kannst dies nur einmal tun und diese Fähigkeit nach einer kurzen oder langen Ruhepause wieder erlangen."
    ],
    statblock: {
      name: "Schwarm aus giftigen Schlangen",
      groesse: "Mittelgroß",
      art: "Tier",
      gesinnung: "Gesinnungslos",
      rk: 14,
      ruestungstyp: null,
      tp: 36,
      tp_wuerfel: "8W8",
      bewegung: { "Gehen": "9 m" },
      attribute: { STR: 8, DEX: 18, CON: 11, INT: 1, WIS: 10, CHA: 3 },
      schadensresistenzen: ["Wuchtschaden", "Stichschaden", "Hiebschaden"],
      zustandsimmunitaeten: ["Verzaubert", "Verängstigt", "Gegriffen", "Paralysiert", "Versteinert", "Liegend", "Betäubt", "Festgesetzt"],
      sinne: ["Blindsicht 3 m"],
      passiveWahrnehmung: 10,
      sprachen: [],
      aktionen: [
        {
          name: "Bisse (mehr als halbe TP)",
          beschreibung: "Nahkampfwaffenangriff: +6 zum Treffen, Reichweite 0 m, ein Ziel. Treffer: 7 (2W6) Stichschaden. Das Ziel muss einen Konstitutionsrettungswurf (SG 10) ablegen. Bei einem Misserfolg erleidet es 14 (4W6) Giftschaden, bei einem Erfolg die Hälfte."
        },
        {
          name: "Bisse (weniger als halbe TP)",
          beschreibung: "Nahkampfwaffenangriff: +6 zum Treffen, Reichweite 0 m, ein Ziel. Treffer: 3 (1W6) Stichschaden. Das Ziel muss einen Konstitutionsrettungswurf (SG 10) ablegen. Bei einem Misserfolg erleidet es 14 (4W6) Giftschaden, bei einem Erfolg die Hälfte."
        }
      ]
    },
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "schleicher",
    name: "Schleicher",
    voraussetzung: "Geschicklichkeit 13 oder höher",
    kurzbeschreibung: "Verstecke dich in dämmrigem Licht und verrate deine Position nicht durch verfehlte Schüsse.",
    beschreibung: [
      "Du bist ein Experte darin, durch die Schatten zu schleichen, und erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Du kannst versuchen, dich zu verstecken, auch wenn du nur leicht verschleiert bist.",
      "Wenn du vor einer Kreatur versteckt bist und mit einem Fernkampfangriff verfehlst, offenbart der Angriff nicht deine Position.",
      "Dämmriges Licht sorgt nicht dafür, dass du bei Würfen auf Weisheit (Wahrnehmung) im Nachteil bist, wenn sie von Sicht abhängen."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "schwer-gepanzert",
    name: "Schwer gepanzert",
    voraussetzung: "geübt im Umgang mit mittelschweren Rüstungen",
    kurzbeschreibung: "Erlange Übung im Umgang mit schweren Rüstungen.",
    beschreibung: [
      "Du hast trainiert, in schweren Rüstungen zu kämpfen, und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Stärke um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du bist geübt im Umgang mit schweren Rüstungen."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "segen-der-berge",
    name: "Segen der Berge",
    voraussetzung: "Goliaths",
    kurzbeschreibung: "Die Zeichen auf deinem Körper zeigen Segen durch einen Berggeist und verleihen dir Gebirgsmagie und magische Widerstandsfähigkeit.",
    beschreibung: [
      "Die Zeichen, die deinen Körper bedecken, dehnen sich aus und zeigen deine Segnung durch einen Berggeist an. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Weisheit (Religion). Wenn du bereits Übung hast, erhältst du Expertise.",
      "Du erlernst den Zaubertrick Erde formen. Du erlernst außerdem den Zauber Erdrütteln. Du kannst diesen Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst.",
      "Wenn du einen Rettungswurf gegen einen magischen Effekt machst, darfst du den Würfelwurf wiederholen. Du kannst dies tun, nachdem du den Wurf gesehen hast, aber bevor du das Ergebnis kennst. Du kannst diese Fähigkeit nach einer langen Rast wieder einsetzen."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "segen-des-drachen",
    name: "Segen des Drachen",
    voraussetzung: "Kobolde",
    kurzbeschreibung: "Ein Drachensegen verleiht dir Blindsicht und je nach Blutlinie Resistenz sowie einen passenden Zaubertrick.",
    beschreibung: [
      "Entweder du oder deine Vorfahren haben einen Segen von einem chromatischen Drachen erhalten, der dir einen Funken seiner Macht verliehen hat. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Blindsicht bis zu einer Reichweite von 3 m.",
      "Wähle eine der folgenden drakonischen Blutlinien. Dein Attributsmodifikator für diese Zaubertricks ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Schwarz: Du erhältst Resistenz gegen Säureschaden und erlernst den Zaubertrick Säurespritzer. Blau: Du erhältst Resistenz gegen Blitzschaden und erlernst den Zaubertrick Schockgriff. Grün: Du erhältst Resistenz gegen Giftschaden und erlernst den Zaubertrick Gift versprühen. Rot: Du erhältst Resistenz gegen Feuerschaden und erlernst den Zaubertrick Flamme erzeugen. Weiß: Du erhältst Resistenz gegen Kälteschaden und erlernst den Zaubertrick Kältestrahl."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "selbsterhaltungstrieb",
    name: "Selbsterhaltungstrieb",
    voraussetzung: "Wandler",
    kurzbeschreibung: "Dein Erbe schärft deinen Überlebensinstinkt: Stehe bei 0 TP mit 1 auf, greife mit Vorteil an und kämpfe umso härter, je knapper deine TP sind.",
    beschreibung: [
      "Dein Erbe gibt dir ein größeres Gespür für Gefahren und hilft dir, wenn du in die Enge getrieben wirst, am Leben zu bleiben. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wenn du auf 0 Trefferpunkte reduziert, aber nicht sofort getötet wirst, kannst du stattdessen auf 1 Trefferpunkt fallen. Außerdem kannst du, wenn der Angreifer in Reichweite ist, deine Reaktion nutzen, um einen Gelegenheitsangriff gegen diese Kreatur mit Vorteil durchzuführen. Nachdem du diese Fähigkeit eingesetzt hast, musst du eine lange Rast einlegen, bevor du sie erneut einsetzen kannst.",
      "Wenn du unter 1/2 deiner gesamten Trefferpunkte bist (aufgerundet), kannst du deinen Übungsbonus zu deinen Schadenswürfen addieren.",
      "Wenn du unter 1/10 deiner gesamten Trefferpunkte bist (aufgerundet), kannst du alle deine Angriffe mit Vorteil ausführen."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "speer-des-ozeans",
    name: "Speer des Ozeans",
    voraussetzung: "Tritons",
    kurzbeschreibung: "Meistere den Dreizack mit Finesse, Bonus-RK, Übungsbonus auf Schaden, Bonusangriff und Vorteil unter Wasser.",
    beschreibung: [
      "Dein Geschick im Umgang mit dem Dreizack ist unübertroffen, die wahre Waffe des Meeres ist in deinen Händen zu Hause. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du hast Übung im Umgang mit dem Dreizack.",
      "Wenn du einen Dreizack ausgerüstet hast, erhältst du einen Bonus von +1 auf deine Rüstungsklasse.",
      "Dreizacke, die du schwingst, erhalten die Eigenschaft Finesse.",
      "Du kannst deinen Übungsbonus auf den Schaden addieren, den du mit Dreizacken verursachst.",
      "Wenn du die Angriffsaktion ausführst und mit einem Dreizack angreifst, kannst du eine Bonusaktion nutzen, um einen weiteren Angriff mit dieser Waffe auszuführen.",
      "Du hast einen Vorteil bei Angriffswürfen, wenn du und das Ziel, das du angreifst, vollständig unter Wasser sind."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "stangenwaffenmeister",
    name: "Stangenwaffenmeister",
    voraussetzung: null,
    kurzbeschreibung: "Führe Bonusangriffe mit dem Waffenende und halte Feinde auf Distanz.",
    beschreibung: [
      "Du bist versiert im Kampf mit Stangenwaffen und erhältst die folgenden Vorzüge:"
    ],
    vorzuege: [
      "Wenn du die Angriffsaktion wählst und nur mit einer Glefe, Hellebarde, einem Kampfstab oder einem Speer angreifst, kannst du deine Bonusaktion aufwenden, um einen weiteren Angriff mit dem anderen Ende der Waffe auszuführen. Dieser Angriff verwendet denselben Attributsmodifikator wie der erste und verursacht 1W4 Wuchtschaden.",
      "Solange du eine Glefe, Hellebarde, Pike, einen Kampfstab oder einen Speer führst, provozieren andere Kreaturen einen Gelegenheitsangriff durch dich, wenn sie sich in Reichweite der Waffe begeben."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "staerke-der-wellen",
    name: "Stärke der Wellen",
    voraussetzung: "Meereselfen",
    kurzbeschreibung: "Kältewiderstand mit Reaktion, Vorteil unter Wasser, Druckresistenz und Spurten als Bonusaktion unter Wasser.",
    beschreibung: [
      "Deine Zeit tief unter den Wellen hat deinen Körper abgehärtet. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Resistenz gegen Kälteschaden. Würdest du Schaden dieser Art erleiden, kannst du deine Reaktion verwenden, um einem Schadenswurf zu widerstehen. Du erhältst keinen Schaden durch diesen Schadenswurf. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht, und du erhältst alle verbrauchten Einsätze zurück, wenn du eine lange Rast beendest. Diese Eigenschaft kann in bestimmten Situationen, nach Ermessen des Spielleiters, fehlschlagen.",
      "Du erhältst einen Vorteil bei Stärke- und Geschicklichkeitswürfen unter Wasser.",
      "Du bist resistent gegen die Auswirkungen von extremem Druck.",
      "Solange du unter Wasser bist, kannst du die Spurten-Aktion als Bonusaktion in deinem Zug ausführen."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "stuermer",
    name: "Stürmer",
    voraussetzung: null,
    kurzbeschreibung: "Nutze die Rennaktion für kraftvolle Bonusangriffe oder Stöße.",
    beschreibung: [
      "Du erhältst den folgenden Vorzug:"
    ],
    vorzuege: [
      "Wenn du deine Aktion verwendest, um zu spurten, kannst du als Bonusaktion einen Nahkampfangriff ausführen oder eine Kreatur wegstoßen. Hast du vor dieser Bonusaktion mindestens 3 m in einer geraden Linie zurückgelegt, erhältst du entweder einen Bonus von +5 auf den Schadenswurf (wenn du den Nahkampfangriff gewählt hast und triffst) oder du stößt das Ziel bis zu 3 m von dir weg (wenn du dich entschieden hast, den Gegner wegzustoßen, und erfolgreich bist)."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "territorialverhalten",
    name: "Territorialverhalten",
    voraussetzung: "Wandler (Trüffelsuche)",
    kurzbeschreibung: "Schütze dein Territorium mit einem skalierenden Reaktionsangriff beim Betreten deiner Reichweite und erhalte Übung in Kochwerkzeugen.",
    beschreibung: [
      "Deine Vorfahren haben besonders hartnäckig ihr Territorium beschützt und waren talentierte Versorger für ihre Freunde und Familien. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Kochwerkzeugen.",
      "Wenn eine feindliche Kreatur, die du sehen kannst, während du gewandelt bist, mit ihrer Bewegung deine Nahkampfreichweite betritt, kannst du deine Reaktion verwenden, um sie mit deinen Hauern oder einem Kopfstoß anzugreifen. Führe einen waffenlosen Gelegenheitsangriff gegen die Kreatur aus; der Schaden beträgt 1W4 + deinem Stärkemodifikator an Wuchtschaden. Bei einem Treffer muss das Ziel einen Stärke- oder Geschicklichkeitsrettungswurf (Wahl des Ziels) bestehen oder wird 3 m zurückgestoßen und erhält den Zustand liegend. Der Schwierigkeitsgrad ergibt sich aus 8 + Übungsbonus + einem deiner Attributsmodifikatoren (Wahl beim Erwerb des Talents). Der Schadenswürfel skaliert: W8 auf Stufe 6, W10 auf Stufe 11, W12 auf Stufe 16. Du kannst dieses Merkmal so oft einsetzen, wie es deinem Übungsbonus entspricht; alle Aufladungen werden bei einer kurzen Rast wiederhergestellt."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "traumfresser",
    name: "Traumfresser",
    voraussetzung: "Dhampire",
    kurzbeschreibung: "Versetze Beute in Schlaf und stiehl ihre Träume als Bonusaktion für temporäre Trefferpunkte.",
    beschreibung: [
      "Dein stark ausgeprägtes Erbe ermöglicht es dir, deine Beute magisch in Schlaf zu versetzen. Du erhältst folgende Vorteile:"
    ],
    vorzuege: [
      "Du erlernst den Zauber Schlaf. Du kannst diesen mit diesem Merkmal auf der ersten Stufe einmal pro lange Rast benutzen. Dein Attributsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst. Wenn du Schlaf mit oder ohne diesem Merkmal wirkst, würfelst du mit so vielen Würfeln, als würdest du den Zauber auf einem Grad höher wirken, um die Gesamtzahl an Trefferpunkten festzustellen, die Kreaturen beeinflussen können.",
      "Du kannst als Bonusaktion auf eine schlafende Kreatur in bis zu 9 m Reichweite zeigen und versuchen, ihre Träume zu stehlen. Die Kreatur muss einen Rettungswurf auf Charisma machen. Bei einem misslungenen Rettungswurf erleidet die Kreatur 2W6 psychischen Schaden und du erhältst temporäre Trefferpunkte in Höhe des Schadens. Dieser Schaden weckt die betroffene Kreatur nicht aus dem Schlaf. Du kannst dieses Merkmal einmal pro lange Rast verwenden. Um dieses Merkmal anzuwenden, musst du ein Dhampir mit Hunger auf Träume oder psychische Energie sein."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "trickster-geist",
    name: "Trickster-Geist",
    voraussetzung: "Goblins",
    kurzbeschreibung: "Geisterspuren verleihen dir Überzeugungstalent, Schadensreduktion per Reaktion und den Zauber Spiegelbild.",
    beschreibung: [
      "Du warst einmal von einem Geist besessen, und obwohl er inzwischen auf einen anderen Wirt übergegangen ist, hat er seine Spuren bei dir hinterlassen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Charisma (Überzeugen) und Charisma (Täuschen).",
      "Wenn du Schaden nimmst, kannst du deine Reaktion nutzen, um einen Trefferwürfel zu werfen und den erlittenen Schaden um den gewürfelten Betrag + deinen Konstitutionsmodifikator zu reduzieren. Wenn du dadurch den erlittenen Schaden auf Null reduzierst, erhältst du eine Anzahl von temporären Trefferpunkten in Höhe deines Konstitutionsmodifikators.",
      "Du erlernst den Zauber Spiegelbild und kannst ihn einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Zauberfähigkeitsmodifikator für diesen Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "ueberlebenskuenstler",
    name: "Überlebenskünstler",
    voraussetzung: "Menschen",
    kurzbeschreibung: "Expertise in Überlebenskunst und Wahl einer Schadensresistenz mit passiven Umgebungsvorteilen.",
    beschreibung: [],
    vorzuege: [
      "Du erhältst Expertise in der Fertigkeit Weisheit (Überlebenskunst).",
      "Du kannst eine der folgenden Schadensarten auswählen, die dir bestimmte Vorteile gewährt. Kälte: Du bist gegen Kälteschaden resistent, wodurch dir extreme Kältebedingungen nichts ausmachen. Bei Schneestürmen erhältst du keinen Nachteil auf Weisheitswürfe (Wahrnehmung), die sich auf das Gehör oder die Sicht beziehen. Feuer: Du bist gegen Feuerschaden resistent, wodurch dir extreme Hitzebedingungen nichts ausmachen. Bei Sandstürmen erhältst du keinen Nachteil auf Weisheitswürfe (Wahrnehmung), die sich auf das Gehör oder die Sicht beziehen. Gift: Du bist gegen Giftschaden resistent und erhältst einen Vorteil bei Rettungswürfen gegen Vergiftungen."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "uebernatuerliche-geschwindigkeit",
    name: "Übernatürliche Geschwindigkeit",
    voraussetzung: "Wandler (Schnellschritt)",
    kurzbeschreibung: "Skalierende Bewegungsrate im Wandelzustand, Gelegenheitsangriff beim Verfolgen und Kletter-/Schwimmgeschwindigkeit.",
    beschreibung: [
      "Du hast mehr von deinem tierischen Erbe in dir als die meisten deiner Rasse. Deine Geschwindigkeit ist nahezu übernatürlich. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Während du gewandelt bist, erhöht sich deine Bewegungsrate um zusätzliche 1,5 m. Mit steigender Stufe erhöht sich diese Bewegung weiter: auf 3 m auf Stufe 5, auf 4,5 m auf Stufe 11 und auf 6 m auf Stufe 17.",
      "Wenn du deine Reaktion einsetzt, um dich zu bewegen, nachdem eine Kreatur ihren Zug in einem Umkreis von 1,5 m von dir beendet hat, kannst du einen Gelegenheitsangriff gegen diese Kreatur ausführen, bevor du dich bewegst. Außerdem kannst du dich während der Verschiebung eine Anzahl von Metern bewegen, die deiner erhöhten Bewegungsrate entspricht, anstatt der üblichen 3 m.",
      "Während du gewandelt bist, erhältst du eine Kletter- und Schwimmgeschwindigkeit, die deiner Schrittgeschwindigkeit entspricht."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "uebernatuerliche-ignoranz",
    name: "Übernatürliche Ignoranz",
    voraussetzung: "Satyrn",
    kurzbeschreibung: "Addiere 1W4 bei Würfen mit Vorteil oder hebe Nachteile auf — jeweils bis zu Übungsbonus-mal pro langer Rast.",
    beschreibung: [
      "Du übernimmst die Tradition deines Volkes, ganz im gegenwärtigen Moment zu leben und eine gewisse Ignoranz für Folgen zu haben. Die seltsame Magie des Feenwild hilft dir dabei. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Wenn du einen Attributswurf, einen Angriffswurf oder einen Rettungswurf machst und bei dem Wurf einen Vorteil hast, kannst du 1W4 zu dem Ergebnis addieren. Du kannst die W4 addieren, nachdem du den Wurf gesehen hast, aber bevor du das Ergebnis kennst. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht; alle verbrauchten Einsätze kehren nach einer langen Rast zurück.",
      "Wenn du einen Attributswurf, einen Angriffswurf oder einen Rettungswurf machst und bei dem Wurf einen Nachteil hast, kannst du den Nachteil für diesen Wurf aufheben. Du kannst diese Fähigkeit so oft einsetzen, wie es deinem Übungsbonus entspricht; alle verbrauchten Einsätze kehren nach einer langen Rast zurück."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "ueberragende-gastfreundschaft",
    name: "Überragende Gastfreundschaft",
    voraussetzung: "Halblinge (Stämmige)",
    kurzbeschreibung: "Kochtalent im Blut: Werkzeug-Übung, +1W4 auf Überzeugen/Kochen/Brauen, Nahrung reinigen nach Belieben und erhöhtes TP-Maximum.",
    beschreibung: [
      "Die Gastfreundschaft liegt dir im Blut, dir fällt es besonders leicht zu kochen und Gewürze auszubalancieren. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Kochwerkzeugen und Brauwerkzeugen.",
      "Wenn du einen Wurf auf Charisma (Überzeugen), Kochwerkzeugen oder Brauwerkzeugen ablegst, darfst du dem Wurf das Ergebnis von 1W4 hinzuaddieren.",
      "Du lernst den Zauber Nahrung und Wasser reinigen. Du kannst diesen Zauber nach Belieben wirken, ohne einen Zauberplatz zu verbrauchen.",
      "Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "unaufhaltsame-wildheit",
    name: "Unaufhaltsame Wildheit",
    voraussetzung: "Orks",
    kurzbeschreibung: "Erweiterte kritische Trefferzone, Bonusangriff bei Krit/K.O. und doppelter Angriff statt Vorteil.",
    beschreibung: [
      "Wenn du jemanden triffst, sollte er besser am Boden bleiben. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Deine Reichweite für kritische Treffer wird um eins erhöht.",
      "Wenn du einen kritischen Treffer landest oder eine Kreatur mit einem Nahkampfwaffenangriff auf 0 Trefferpunkte reduzierst, kannst du einen weiteren Nahkampfwaffenangriff als Bonusaktion ausführen. Wenn dieser Angriff trifft, verursacht er zusätzlichen Schaden in Höhe deines Übungsbonus.",
      "Einmal pro Runde kannst du, wenn du bei einem Angriff im Vorteil bist, auf den Vorteil verzichten und stattdessen im Rahmen derselben Angriffsaktion zweimal angreifen. Du kannst dies so oft tun, wie es deinem Übungsbonus entspricht, und erhältst alle verbrauchten Einsätze nach einer langen Rast zurück."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "urd-kobold",
    name: "Urd-Kobold",
    voraussetzung: "Kobolde",
    kurzbeschreibung: "Ein seltenes drachenähnliches Gen verleiht dir Flügel und eine Flugbewegungsrate gleich deiner Schrittgeschwindigkeit.",
    beschreibung: [
      "Ein seltenes Gen ist bei dir ausgebrochen. Du wurdest mit fast drachenähnlichen Flügeln geboren. Du erhältst folgende Vorteile:"
    ],
    vorzuege: [
      "Deine Flügel ermöglichen dir eine Flugbewegungsrate gleich deiner Bewegungsrate. Du kannst von dieser Bewegungsrate nicht profitieren, wenn du eine schwere Rüstung trägst oder deine Tragfähigkeit überschritten ist."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "urtümliche-instinkte-des-jägers",
    name: "Urtümliche Instinkte des Jägers",
    voraussetzung: "Wandler (Wildjäger)",
    kurzbeschreibung: "Vorteil auf alle Weisheitswürfe im Wandelzustand, Würfelwiederholen bei Vorteilswürfen und verlängerte Wandlungsdauer.",
    beschreibung: [
      "Du hast mehr von deinem tierischen Erbe in dir als die meisten deiner Rasse. Deine Instinkte sind nahezu unnatürlich. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Während du verwandelt bist, erhältst du außerdem einen Vorteil auf alle Weisheitswürfe.",
      "Wenn du während deiner Verwandlung einen Angriff, einen Rettungswurf oder einen Attributswurf mit Vorteil würfelst, kannst du einen der Würfel wiederholen.",
      "Außerdem verlängert sich die Dauer deiner Wandlung um eine Anzahl von Minuten, die deinem Übungsbonus entspricht. Wenn du am Ende der Dauer noch temporäre Trefferpunkte aus deiner Wandlung hast, dauert deine Wandlung so lange, bis du diese temporären Trefferpunkte verlierst. Diese temporären Trefferpunkte gehen nach einer kurzen oder langen Rast verloren."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "vampirisches-charisma",
    name: "Vampirisches Charisma",
    voraussetzung: "Dhampire",
    kurzbeschreibung: "Vampirblut verleiht Täusch-Expertise, verstärkten Person-bezaubern-Zauber ohne Kampfvorteil und Sprachen verstehen.",
    beschreibung: [
      "Dein vampirisches Blut verleiht dir die besondere Gabe, noch charismatischer zu sein als andere Dhampire, und es fällt dir leichter, deine Opfer um den Finger zu wickeln und zu manipulieren. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Charisma (Täuschen). Wenn du bereits in Täuschen geübt bist, erhältst du Expertise.",
      "Du erlernst den Zauber Person bezaubern und kannst ihn mit diesem Merkmal auf der ersten Stufe wirken. Der Schwierigkeitsgrad für den Rettungswurf ergibt sich aus 8 + Übungsbonus + einem deiner Attributsmodifikatoren (Wahl beim Erwerb des Talents). Wenn du den Zauber Person bezaubern mit diesem Merkmal wirkst, würfeln Kreaturen, die gegen dich oder deine Gefährten kämpfen, nicht mit Vorteil, wenn sie den Rettungswurf ablegen. Du kannst diese Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; alle verbrauchten Einsätze kehren nach einer langen Rast zurück.",
      "Du erlernst den Zauber Sprachen verstehen und kannst ihn mit diesem Merkmal einmal pro lange Rast wirken."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "verbesserte-celestische-offenbarung",
    name: "Verbesserte Celestische Offenbarung",
    voraussetzung: "Aasimar",
    kurzbeschreibung: "Zusätzliche Offenbarungsladung, verdoppelter Schaden und je nach Offenbarungsform ein mächtiger Zusatzeffekt.",
    beschreibung: [
      "Dein himmlisches Erbe ist stärker als das anderer deiner Art, was dir mehr Kontrolle über und Nutzen aus deiner Eigenschaft Celestische Offenbarung gewährt. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst eine zusätzliche Nutzung deiner Fähigkeit Celestische Offenbarung, die du nach einer langen Rast wiedererlangst.",
      "Während du dich durch deine Eigenschaft Celestische Offenbarung verwandelst, wird gleißender Schaden oder nekrotischer Schaden, den du mit dieser Eigenschaft verursachst, verdoppelt.",
      "Wenn du deine Eigenschaft Celestische Offenbarung einsetzt, erhältst du je nach gewählter Offenbarung die folgenden Vorteile: Nekrotische Spukgestalt: Deine Eigenschaft Nekrotische Spukgestalt betäubt nun Kreaturen, die den Schutzwurf nicht bestehen, bis zum Ende deines nächsten Zuges. Gleißendes Verzehren: Du kannst wählen, welche Kreaturen am Ende jeder deiner Runden gleißenden Schaden erleiden. Gleißende Seele: Zu Beginn deiner Züge kannst du eine Kreatur im Umkreis von 3 m um Trefferpunkte in Höhe deines Übungsbonus heilen."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "verbesserte-gith-psionik",
    name: "Verbesserte Gith-Psionik",
    voraussetzung: "Githyanki oder Githzerai",
    kurzbeschreibung: "Stärke deine psionischen Kräfte mit Gedankensplitter, Intellektfestung (1/langer Rast) und komponentenfreiem Wirken.",
    beschreibung: [
      "Deine psionische Kraft ist größer als die anderer deiner Art. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst den Zaubertrick Gedankensplitter. Du erlernst außerdem den Zauber Intellektfestung, den du einmal wirken kannst, ohne einen Zauberplatz zu verbrauchen; diese Fähigkeit kehrt nach einer langen Rast zurück. Dein Zauberfähigkeitsmodifikator für diese Zaubersprüche ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst.",
      "Weder diese Zauber noch deine Rassenfähigkeiten benötigen verbale oder somatische Komponenten, und auch keine materiellen Komponenten, es sei denn, sie werden durch den Zauber verbraucht."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "verderbnis-des-abgrunds",
    name: "Verderbnis des Abgrunds",
    voraussetzung: "Genasi",
    kurzbeschreibung: "Abgründische Korruption verleiht Infernalisch, Resistenz gegen Psychoschaden, Furcht-Vorteil und zwei Abgrundzauber.",
    beschreibung: [
      "Dein elementarer Vorfahre wurde von der Macht des Abgrunds verdorben und hat deine Genasi-Form korrumpiert. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du lernst Infernalisch, die Sprache der Kreaturen des Abgrunds. Wenn du Infernalisch bereits kennst, kannst du stattdessen eine andere Sprache deiner Wahl erlernen.",
      "Du erhältst Resistenz gegen psychischen Schaden und einen Vorteil bei Schutzwürfen gegen Furcht.",
      "Du erlernst den Zauber Chaospfeil und den Zauber Tashas fürchterlicher Lachanfall. Du kannst diese Zauber einmal pro lange Rast wirken, ohne einen Zauberplatz zu verbrauchen. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent auswählst."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "vielseitigkeit-der-vetteln",
    name: "Vielseitigkeit der Vetteln",
    voraussetzung: "Hexblute",
    kurzbeschreibung: "Wähle nach jeder kurzen Rast eines von drei körperlichen Vetteln-Merkmalen: Haar-Fesselung, Nagel-Blutung oder Zahn-Furcht.",
    beschreibung: [
      "Dein besonderes Vettelblut verleiht dir die Gabe, dich magisch an Situationen anzupassen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Nach jeder kurzen Rast kannst du dir eines der folgenden Merkmale aussuchen. Du kannst die gewählte Eigenschaft so oft einsetzen, wie es deinem Übungsbonus entspricht; alle verbrauchten Einsätze kehren nach einer langen Rast zurück.",
      "Haare: Du verzauberst deine Haare, um sie sehr lang wachsen zu lassen. Als Aktion kannst du versuchen, eine Kreatur in 1,5 m Reichweite mit deinen Haaren zu fesseln. Die Kreatur muss einen Stärkerettungswurf bestehen (SG = 8 + Übungsbonus + gewählter Attributsmodifikator) oder gilt als festgesetzt, bis der Effekt endet. Eine festgesetzte Kreatur kann ihre Aktion nutzen, um die Haarschlingen anzugreifen (RK 0, trifft automatisch). Der Effekt endet, wenn deine Trefferpunkte oder die der Haarschlingen (= halbes TP-Maximum, abgerundet) auf 0 fallen oder du stirbst.",
      "Fingernägel: Du verzauberst deine Fingernägel, um sie messerscharf werden zu lassen. Als Aktion kannst du einen waffenlosen Angriff mit deinen Fingernägeln ausführen. Bei einem Treffer verursachst du 2W6 Stichschaden und die Kreatur erleidet den Zustand blutend: Sie erleidet zu Beginn jedes ihrer Züge 1W4 Stichschaden und muss am Ende jedes Zuges einen Konstitutionsrettungswurf bestehen (SG = 8 + Übungsbonus + gewählter Attributsmodifikator), um die Blutung zu stillen.",
      "Zähne: Du verzauberst deine Zähne für einen gefährlichen Biss. Deine Zähne sind eine natürliche Zweitwaffe, in deren Umgang du geübt bist. Wenn du in deinem Zug die Angriffsaktion ausführst, kannst du als Bonusaktion mit deinen Zähnen gegen dasselbe Ziel angreifen (Angriffs- und Schadenswürfe + Stärke oder Geschicklichkeitsmodifikator, Wahl beim Erwerb). Bei einem Treffer verursachst du 1W6 Stichschaden, und die betroffene Kreatur muss einen Weisheitsrettungswurf bestehen (SG = 8 + Übungsbonus + gewählter Attributsmodifikator) oder wird verängstigt. Die Anzahl verängstigter Ziele skaliert: auf Stufe 6 ein weiteres Ziel in 3 m, auf Stufe 11 zwei weitere, auf Stufe 16 bis zu 4; alle zusätzlichen Ziele werden zufällig ausgewählt."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "wachsam",
    name: "Wachsam",
    voraussetzung: null,
    kurzbeschreibung: "+5 auf Initiative, kein Überraschungsangriff, keine versteckten Angreifer im Vorteil.",
    beschreibung: [
      "Du hältst immer Ausschau nach Gefahren und erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Du erhältst einen Bonus von +5 auf Initiative.",
      "Du kannst nicht überrascht werden, solange du bei Bewusstsein bist.",
      "Kreaturen, die du nicht sehen kannst, sind nicht im Vorteil bei Angriffswürfen gegen dich."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "waechter",
    name: "Wächter",
    voraussetzung: null,
    kurzbeschreibung: "Stoppe Flüchtige, bestrafe Rückzüge und reagiere auf Angriffe gegen Verbündete.",
    beschreibung: [
      "Du hast die Technik gemeistert, jegliche Lücke in der Verteidigung deines Gegners zu nutzen, und erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Wenn du eine Kreatur mit einem Gelegenheitsangriff triffst, wird die Bewegungsrate der Kreatur für den restlichen Zug auf 0 reduziert.",
      "Kreaturen provozieren Gelegenheitsangriffe durch dich, obwohl sie die Aktion Rückzug gewählt haben, bevor sie deine Reichweite verlassen.",
      "Wenn eine Kreatur innerhalb von 1,50 m ein anderes Ziel als dich angreift (und das Ziel dieses Talent nicht besitzt), kannst du deine Reaktion aufwenden, um einen Nahkampf-Waffenangriff gegen diese Kreatur auszuführen."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "waechter-der-wellen",
    name: "Wächter der Wellen",
    voraussetzung: "Wasser-Genasi",
    kurzbeschreibung: "Nimm als Aktion eine wässrige Form an: temporäre TP, Unsichtbarkeit unter Wasser, Schwimmgeschwindigkeit ×2, Feuerschaden-Resistenz und mehr.",
    beschreibung: [
      "Du bist mit den Ozeanen und den tiefen Orten der Welt verbunden, die dich mit Kräften ausstatten. Als Aktion nimmst du eine wässrige Form an:"
    ],
    vorzuege: [
      "Alle Ausrüstungsgegenstände können entweder mit deiner Form verschmelzen oder weiterhin benutzt werden. Getragene Rüstungen zählen zur Rüstungsklasse; verschmolzene Waffen können nicht benutzt werden.",
      "Du erhältst temporäre Trefferpunkte in Höhe deiner halben Stufe × Übungsbonus. Verlierst du diese temporären Trefferpunkte, endet die wässrige Form vorzeitig.",
      "Du kannst den Raum einer anderen Kreatur durchqueren, aber nicht dort enden. Du kannst durch Lücken von bis zu 2,5 cm Größe schwimmen.",
      "Du erhältst eine Schwimmgeschwindigkeit doppelt so hoch wie deine Schrittgeschwindigkeit. Während du vollständig unter Wasser bist, wirst du unsichtbar (gilt nicht für getragene Ausrüstung).",
      "Du bist resistent gegen Feuer- und Giftschaden und immun gegen die Zustände Gefesselt, Festgesetzt und Vergiftet.",
      "Die wässrige Form dauert eine Minute, bis die temporären Trefferpunkte aufgebraucht sind, oder bis du sie als Bonusaktion beendest. Du kannst sie nach einer langen Rast erneut einsetzen."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "waechter-der-winde",
    name: "Wächter der Winde",
    voraussetzung: "Aarakocra",
    kurzbeschreibung: "Luftkampf-Ausbildung: Wahrnehmungs-Expertise, Waffenübung, Nachteil auf Gelegenheitsangriffe in der Luft und Sturzangriffs-Bonus.",
    beschreibung: [
      "Du bist sowohl für die Erkundung des Himmels als auch für den Luftkampf ausgebildet. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du bist in Weisheit (Wahrnehmung) geübt. Wenn du bereits geübt bist, erhältst du Expertise.",
      "Du bist geübt im Umgang mit Speeren, Wurfspeeren und Netzen.",
      "Gelegenheitsangriffe, die gegen dich in der Luft ausgeführt werden, sind im Nachteil. Hat der Gegner einen Vorteil gegen dich, gleicht sich dies aus und der Angriff wird normal ausgeführt.",
      "Wenn du fliegst und mindestens 3 Meter auf ein Ziel zustürzt (mindestens 3 Meter deiner Bewegungsrate müssen zum Verringern deiner Höhe genutzt werden), bevor du es mit einer Nahkampfwaffe triffst, verursacht der Angriff zusätzlichen Waffenschaden in Höhe deines Übungsbonus."
    ],
    kategorie: "Kampf",
    angeboren: true
  },
  {
    id: "waffenmeister",
    name: "Waffenmeister",
    voraussetzung: null,
    kurzbeschreibung: "Erlange Übung mit vier Waffen deiner Wahl.",
    beschreibung: [
      "Du hast ausgiebig mit einer Vielzahl an Waffen geübt und erhältst folgende Vorzüge:"
    ],
    vorzuege: [
      "Erhöhe deine Stärke oder Geschicklichkeit um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Du bist geübt im Umgang mit vier Waffen deiner Wahl. Jede muss eine einfache Waffe oder eine Kriegswaffe sein."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "waldmagie",
    name: "Waldmagie",
    voraussetzung: "Waldelfen",
    kurzbeschreibung: "Erlerne einen Druidenzaubertrick, Lange Schritte und Spurloses Gehen (1/langer Rast) und verdopple die Dauer positiver Zauber.",
    beschreibung: [
      "Du erlernst die Magie der Urwälder, die von deinem Volk verehrt und geschützt werden. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erlernst einen Zaubertrick der Druiden-Zauberliste deiner Wahl. Du erlernst außerdem die Zauber Lange Schritte und Spurloses Gehen, die du jeweils einmal wirken kannst, ohne einen Zauberplatz zu verbrauchen; diese Fähigkeit kehrt nach einer langen Rast zurück. Dein Attributsmodifikator für diese Zauber ist Intelligenz, Weisheit oder Charisma. Wähle das Attribut, wenn du dieses Talent wählst.",
      "Wenn du einen Zauber sprichst, der einen positiven Effekt auf dein Ziel anwendet und die Dauer des Effekts 1 Minute oder länger beträgt, kannst du die Dauer für diesen Zauber verdoppeln. Nachdem du diese Fähigkeit eingesetzt hast, kannst du sie erst nach einer kurzen oder langen Rast erneut nutzen."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "warmer-wollmantel",
    name: "Warmer Wollmantel",
    voraussetzung: "Wandler (Rammbock)",
    kurzbeschreibung: "Dicke Wolle verleiht Resistenz gegen nicht-magischen Waffenschaden im Wandelzustand, Temperaturausgleich und Vorteil in bergigem Gelände.",
    beschreibung: [
      "Deine Nähe zu deinem tierischen Erbe lässt deine Wolle dicker wachsen, als bei anderen Angehörigen deiner Rasse. Du erhältst folgende Vorteile:"
    ],
    vorzuege: [
      "Während du verwandelt bist, erhältst du Resistenz gegen Wucht-, Hieb- und Stichschaden von nicht-magischen Waffen, die nicht versilbert sind.",
      "Dein Wollmantel ist temperaturausgleichend. Du erleidest keinen Nachteil in extremer Hitze oder extremer Kälte.",
      "Du erleidest keinen Nachteil bei schwierigem Gelände in bergigen oder hügeligen Regionen."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "weit-gereister-freund",
    name: "Weit gereister Freund",
    voraussetzung: "Hügelzwerge",
    kurzbeschreibung: "Weltoffen und umgänglich: Überzeugungstalent, verstärkter Freundschaft-Zaubertrick, Nahrung reinigen nach Belieben und Rückzug/Spurten als Bonusaktion.",
    beschreibung: [
      "Deine Vorfahren waren besonders umgänglich und weltoffen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in Charisma (Überzeugen). Wenn du bereits in Überzeugen geübt bist, erhältst du Expertise.",
      "Du erlernst den Zaubertrick Freundschaft und kannst ihn nach Belieben wirken. Wenn du ihn wirkst, kannst du dieses Merkmal einsetzen, um die betroffene Kreatur zu einem Charismarettungswurf zu zwingen (SG = 8 + Übungsbonus + Charismamodifikator). Schlägt der Rettungswurf fehl, merkt die Kreatur nicht, dass du Magie eingesetzt hast, und wird nicht feindselig. Du kannst Freundschaft auf diese Weise nur einmal pro lange Rast wirken.",
      "Du lernst den Zauber Nahrung und Wasser reinigen und kannst ihn nach Belieben wirken, ohne einen Zauberplatz zu verbrauchen.",
      "Du kannst die Aktionen Rückzug und Spurten als Bonusaktion ausführen. Du kannst dieses Merkmal so oft einsetzen, wie es deinem Konstitutionsmodifikator entspricht; alle verbrauchten Aufladungen kehren nach einer langen Rast zurück."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "widerstand-des-ursprungs",
    name: "Widerstand des Ursprungs",
    voraussetzung: "Genasi",
    kurzbeschreibung: "Ebenare Abstammung stärkt Körper und Geist: erhöhtes TP-Maximum, Giftresistenz und Immunität gegen kritische Treffer.",
    beschreibung: [
      "Als ein von der Ebene berührter Humanoider ist dein Körper widerstandsfähiger als viele andere. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erlangst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt.",
      "Du erhältst Resistenz gegen Giftschaden und einen Vorteil bei Rettungswürfen gegen Vergiftungen.",
      "Du wirst immun gegen kritische Treffer. Wenn ein Treffer ein kritischer Treffer sein sollte, wird er stattdessen zu einem normalen Treffer."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "widerstandsfaehig",
    name: "Widerstandsfähig",
    voraussetzung: null,
    kurzbeschreibung: "Höhere Konstitution und garantierte Mindestheilung beim Einsatz von Trefferwürfeln.",
    beschreibung: [
      "Du bist hartgesotten und standhaft, wodurch du folgende Vorzüge erhältst:"
    ],
    vorzuege: [
      "Erhöhe deine Konstitution um 1 Punkt, bis zu einem maximalen Attributswert von 20.",
      "Wenn du mit einem Trefferwürfel Trefferpunkte regenerierst, erhältst du minimal immer so viele Trefferpunkte, wie es dem Doppelten deines Konstitutionsmodifikators entspricht (mindestens 2)."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "wilder-angreifer",
    name: "Wilder Angreifer",
    voraussetzung: null,
    kurzbeschreibung: "Würfle Nahkampfschaden einmal pro Zug doppelt und nimm das bessere Ergebnis.",
    beschreibung: [
      "Du erhältst den folgenden Vorzug:"
    ],
    vorzuege: [
      "Einmal pro Zug darfst du bei einem erfolgreichen Nahkampf-Waffenangriff den Schaden ein zweites Mal auswürfeln und wählen, welches Ergebnis angewendet wird."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "wunden-lecken",
    name: "Wunden lecken",
    voraussetzung: "Wandler (Tigerkrallen)",
    kurzbeschreibung: "Regeneriere im Wandelzustand als Bonusaktion 1W10 + Stufe TP (1/langer Rast) und erhalte Einschüchtern-Übung oder Expertise.",
    beschreibung: [
      "Dein Erbe der Tiger wirkt sich bei dir stärker aus, als bei deinen Artgenossen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Während du gewandelt bist, kannst du als Bonusaktion 1W10 + deine Stufe an Trefferpunkten regenerieren. Du kannst dieses Merkmal nach einer langen Rast erneut anwenden.",
      "Du erhältst Übung in Charisma (Einschüchtern). Wenn du in Einschüchtern bereits geübt bist, erlangst du Expertise."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "wunderkind",
    name: "Wunderkind",
    voraussetzung: "Halbelfen, Halborks oder Menschen",
    kurzbeschreibung: "Lernbegabung: neue Fertigkeit, Werkzeug und Sprache, Expertise in einer geübten Fertigkeit und 4 magische Einstimmungen.",
    beschreibung: [
      "Du hast eine Begabung dafür, neue Dinge zu lernen. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du erhältst Übung in einer Fertigkeit deiner Wahl, einer Werkzeugfertigkeit deiner Wahl und fließende Kenntnisse in einer Sprache deiner Wahl.",
      "Wähle eine Fertigkeit, in der du geübt bist. Du erlangst Expertise in dieser Fertigkeit.",
      "Du kannst dich auf bis zu 4 magische Gegenstände einstimmen, anstatt der normalen 3."
    ],
    kategorie: "Allgemein",
    angeboren: true
  },
  {
    id: "zaeh",
    name: "Zäh",
    voraussetzung: null,
    kurzbeschreibung: "Erhöhe dein Trefferpunktemaximum sofort und bei jedem weiteren Stufenaufstieg.",
    beschreibung: [
      "Du bist zäh wie Leder. Du erhältst den folgenden Vorzug:"
    ],
    vorzuege: [
      "Mit der Wahl dieses Talents erhöht sich dein Trefferpunktemaximum einmalig um das Doppelte deiner Stufe. Immer wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um weitere 2 Punkte."
    ],
    kategorie: "Allgemein",
    angeboren: false
  },
  {
    id: "zielgenauer-zauberschuetze",
    name: "Zielgenauer Zauberschütze",
    voraussetzung: "Fähigkeit, mindestens einen Zauber zu wirken",
    kurzbeschreibung: "Verdopple Zaubreichweiten, ignoriere Deckung und lerne einen Angriffszaubertrick.",
    beschreibung: [
      "Du hast Techniken gelernt, um die Angriffe mit bestimmten Zaubern zu verbessern, wodurch du die folgenden Vorzüge erhältst:"
    ],
    vorzuege: [
      "Wenn du einen Zauber wirkst, der einen Angriffswurf verlangt, wird dessen Reichweite verdoppelt.",
      "Deine Angriffszauber ignorieren Teil- und Dreivierteldeckung.",
      "Du lernst einen Zaubertrick, der einen Angriffswurf erfordert. Wähle einen Zaubertrick aus der Spruchliste des Barden, Druiden, Klerikers, Magiers, Hexenmeisters oder Zauberers. Dein Zauberattribut hängt von der gewählten Spruchliste ab: Charisma (Barde, Hexenmeister, Zauberer), Weisheit (Druide, Kleriker) oder Intelligenz (Magier)."
    ],
    kategorie: "Magie",
    angeboren: false
  },
  {
    id: "zwei-waffen-kaempfer",
    name: "Zwei-Waffen-Kämpfer",
    voraussetzung: null,
    kurzbeschreibung: "Kämpfe mit zwei nicht-leichten Waffen und erhalte einen Rüstungsklassebonus.",
    beschreibung: [
      "Du hast die Kunst gemeistert, mit zwei Waffen gleichzeitig zu kämpfen, und genießt folgende Vorzüge:"
    ],
    vorzuege: [
      "Du erhältst einen Bonus von +1 auf deine Rüstungsklasse, wenn du in beiden Händen je eine Nahkampfwaffe führst.",
      "Du kannst mit zwei Waffen kämpfen, auch wenn die einhändigen Nahkampfwaffen, die du führst, nicht leicht sind.",
      "Du kannst gleichzeitig zwei einhändige Waffen ziehen beziehungsweise verstauen statt nur einer."
    ],
    kategorie: "Kampf",
    angeboren: false
  },
  {
    id: "zweite-chance",
    name: "Zweite Chance",
    voraussetzung: "Halblinge (Leichtfüße)",
    kurzbeschreibung: "Halblings-Glück in Magie: Silberne Fäden (1/langer Rast, ohne Materialkomponenten) und Segnen als Bonusaktion ohne Konzentration (1/langer Rast).",
    beschreibung: [
      "Das Glück begünstigt eure Rasse, und ihr habt gelernt, euch einiger Magie zu bedienen, um die Waage noch weiter zu euren Gunsten zu lenken:"
    ],
    vorzuege: [
      "Du lernst den Zauber Silberne Fäden. Du kannst ihn einmal wirken, ohne einen Zauberplatz zu verbrauchen; danach musst du eine lange Rast einlegen. Intelligenz, Weisheit oder Charisma ist dein Attributsmodifikator. Du benötigst für diesen Zauber keine materiellen Komponenten.",
      "Du lernst den Zauber Segnen. Du kannst ihn einmal als Bonusaktion wirken, ohne dich zu konzentrieren und ohne einen Zauberplatz zu verbrauchen; danach musst du eine lange Rast einlegen. Intelligenz, Weisheit oder Charisma ist dein Attributsmodifikator. Du benötigst für diesen Zauber keine materiellen Komponenten."
    ],
    kategorie: "Magie",
    angeboren: true
  },
  {
    id: "zwergische-tapferkeit",
    name: "Zwergische Tapferkeit",
    voraussetzung: "Zwerge",
    kurzbeschreibung: "Zwergenhelden-Blut: Vorteil auf Todesrettungswürfe, erhöhtes TP-Maximum und Selbstheilung mit Trefferwürfeln beim Ausweichen.",
    beschreibung: [
      "In deinen Adern fließt das Blut von Zwergenhelden. Du erhältst die folgenden Vorteile:"
    ],
    vorzuege: [
      "Du hast einen Vorteil bei Todesrettungswürfen.",
      "Dein Trefferpunktemaximum erhöht sich um einen Betrag, der deiner Stufe entspricht, wenn du diese Fähigkeit erhältst. Jedes Mal, wenn du danach eine Stufe aufsteigst, erhöht sich dein Trefferpunktemaximum um zusätzlich 1 Trefferpunkt.",
      "Immer wenn du im Kampf die Aktion Ausweichen ausführst, kannst du einen oder mehrere Trefferwürfel benutzen, um dich zu heilen. Wirf den Würfel, addiere deinen Konstitutionsmodifikator und erhalte eine Anzahl von Trefferpunkten zurück, die der Gesamtzahl entsprechen (mindestens 1)."
    ],
    kategorie: "Allgemein",
    angeboren: true
  }
];
