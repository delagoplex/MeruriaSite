-- 013_nscs_seed.sql
-- Seeds the nscs table with all 21 NSCs from the former static JS file.
-- Slugs preserve the original id values for traceability.

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'velira','Velira Thaane','Magistra',
  ARRAY['Velira','Maradith','Thaane','von Arkanheim'],
  'Tieflinge','Weiblich',46,'Erwachsen',
  'Archivarin der Kuratoren','Die Kuratoren','Senior-Archivarin',NULL,
  'WW-S1-K0142','Arkanheim · Hohe Archive','Hydea',
  'Schwarze Hörner mit ziseliertem Silber, das im Lampenlicht klimpert.',
  ARRAY['scharfsinnig','geduldig','zynisch'],
  ARRAY['Lebendig','Verbündet'],
  ARRAY['Arkane Kunde','Nachforschungen','Geschichte','Motiv erkennen'],
  'Glaubt, dass Wahrheit immer Vorrang vor Mitgefühl hat.',
  '[{"zeit":"Vormittags","ort":"Hohe Archive · Lesesaal IV","tat":"Hört Anfragen der Magister an — selten geduldig.","stufe":2},{"zeit":"Mittags","ort":"Refektorium","tat":"Mahl mit zwei Schreibern. Spricht über Wetter, nichts anderes.","stufe":2},{"zeit":"Nachmittags","ort":"Kammer VII (verschlossen)","tat":"Niemand weiß, was sie dort drinnen tut.","stufe":3},{"zeit":"Abends","ort":"Privatbüro","tat":"Studiert Schriftrollen, die nicht im Katalog stehen.","stufe":4},{"zeit":"Nachts","ort":"Unter den Archiven","tat":"Spricht im Schlaf mit dem Lebensspeicher-Fragment in ihrem Horn.","stufe":5}]'::JSONB,
  '[{"name":"Kuratoren-Mantel","beschreibung":"Mit Schreibtinte besprenkelt. Das Wappen ist abgewetzt — sie trägt ihn seit zwanzig Jahren.","stufe":3},{"name":"Schreibgriffel aus Walknochen","beschreibung":"Ein Erbstück. Schreibt selbst auf glühendem Pergament klar.","stufe":3},{"name":"Schlüsselbund mit zwölf Schlüsseln","beschreibung":"Einer summt, wenn man sich Kammer VII nähert.","stufe":4},{"name":"Lebensspeicher-Fragment","beschreibung":"In den Hornsockel eingelassen. Pulsiert in ihrem Schlaf.","stufe":5}]'::JSONB,
  '{"name":"Gleam","art":"Glasäugiger Rabe, der vor der Tür wartet."}'::JSONB,
  ARRAY['Verhindern, dass das Verlorene Kapitel der Walgesänge erneut verschüttet wird.','Den Pakt ihres verstorbenen Bruders mit Cecillia rückgängig machen.'],
  ARRAY['Sie hat seit drei Jahren ein Stück Lebensspeicher in ihrer Hornkrümmung verborgen.','Magister Eilan Vorrh hat sie einmal aus einem Albtraum gerettet — sie schuldet ihm einen Gefallen.','Sie kann die Schrift der ältesten Aufzeichnungen lesen, weil sie sie selbst verfasst hat.'],
  '{"familie":[{"name":"Tiernan Thaane","rolle":"Älterer Bruder","verstorben":true}],"freunde":[{"name":"Magister Eilan Vorrh","rolle":"Studienkollege · Spielercharakter"}],"rivalen":[{"name":"Inquisitor Kalim Veth","rolle":"Behauptet, sie habe Verbotenes archiviert"}]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'brynnen','Brynnen Quellgrund','Mutter',
  ARRAY['Brynnen','Quellgrund'],
  'Menschen','Weiblich',62,'Alt',
  'Hohepriesterin im Lazarett von Sturmwacht','Die Friedenshüter','Hohepriesterin',NULL,
  'WW-S4-K0287','Sturmwacht · Lazarettviertel','Selunara',
  'Eine Stimme, die selbst Sterbende lächeln lässt.',
  ARRAY['warmherzig','unermüdlich','streng'],
  ARRAY['Lebendig'],
  ARRAY['Medizin','Überzeugen','Religion','Motiv erkennen'],
  'Verheimlicht eigene Schmerzen, bis es zu spät ist.',
  '[{"zeit":"Vormittags","ort":"Lazarett · Saal Süd","tat":"Visite bei den Schwerverwundeten.","stufe":2},{"zeit":"Mittags","ort":"Lazarett · Kapelle","tat":"Singt das Quellgebet — manche Patienten erwachen erst dann.","stufe":2},{"zeit":"Nachmittags","ort":"Kräutergarten","tat":"Wechselt Verbände, bricht Heilkraut.","stufe":3},{"zeit":"Abends","ort":"Lazarett · Schreibtisch","tat":"Schreibt Briefe an Angehörige Verstorbener — eigenhändig.","stufe":4},{"zeit":"Nachts","ort":"Privatgemach","tat":"Trinkt Schmerztinktur, die sie offiziell nicht braucht.","stufe":5}]'::JSONB,
  '[{"name":"Heilerstab aus Quellholz","beschreibung":"Vom Lazarettrat verliehen — sie hat ihn nie zurückgegeben.","stufe":3},{"name":"Silbernes Quellsymbol","beschreibung":"Schwer und stumpf. Sie hält es im Gebet zwischen den Händen.","stufe":3},{"name":"Schmerztinkturen","beschreibung":"In der untersten Tasche. Für sich selbst — niemand soll es wissen.","stufe":5}]'::JSONB,
  NULL,
  ARRAY['Niemanden allein sterben lassen.','Die Quellsegnung wieder unter freie Hände bringen — fort vom Tempelrat.'],
  ARRAY['Sie hat im Sturm vor 30 Jahren einen Säugling mit Wandlerblut versteckt — und nie wiedergesehen.','Ihre Heilkraft schwindet schneller, als sie zugibt.'],
  '{"familie":[{"name":"Senna Schwarzdorn","rolle":"Adoptivenkelin"}],"freunde":[{"name":"Bruder Thalmir","rolle":"Mitstreiter im Lazarett"}],"rivalen":[{"name":"Tempelrat von Arkanheim","rolle":"Pocht auf Hierarchie"}]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'hagga','Hagga Steinkrall','Bergungsmeisterin',
  ARRAY['Hagga','Steinkrall'],
  'Zwerge (Gebirge)','Weiblich',118,'Alt',
  'Leitende Bergungsmeisterin','Die Bergungsgarde','Leitende Bergungsmeisterin',NULL,
  'WW-S8-K0421','Tiefenbastion · Werkdock VII','Daramur',
  'Ein rußgeschwärzter Daumen, mit dem sie jeden Fund tätschelt.',
  ARRAY['ruppig','loyal','prinzipientreu'],
  ARRAY['Lebendig','Verbündet'],
  ARRAY['Athletik','Wahrnehmung','Werkzeuge: Schmied','Einschüchtern'],
  'Trinkt zu viel, wenn ein Auftrag misslingt.',
  '[{"zeit":"Vormittags","ort":"Werkdock VII","tat":"Inspiziert Bergungsseile und flucht über schlampige Knoten.","stufe":2},{"zeit":"Mittags","ort":"Kantine \"Eisernes Maß\"","tat":"Karten mit Pfennigwert, kleine Wetten, große Geschichten.","stufe":2},{"zeit":"Nachmittags","ort":"Bergungsschacht-Lift","tat":"Erster offizieller Abstieg des Tages. Niemand begleitet sie.","stufe":3},{"zeit":"Abends","ort":"Memorial der Gefallenen","tat":"Drei Tropfen Wein für Brom Felsfaust.","stufe":4},{"zeit":"Nachts","ort":"Geheimes Lager","tat":"Sortiert nicht-deklarierte Funde, die nie das Werkdock erreichen.","stufe":5}]'::JSONB,
  '[{"name":"Bergungsspitzhacke \"Großmaul\"","beschreibung":"Auf der Klinge eingeritzt: Brom F.","stufe":3},{"name":"Sicherungsgurt mit Karabinerring","beschreibung":"Vierfach geknotet. Vertraut keinem fremden Knoten.","stufe":3},{"name":"Kleiner Walkristall","beschreibung":"Aus einem nicht gemeldeten Fund. Glüht schwach in der Dunkelheit.","stufe":5}]'::JSONB,
  '{"name":"Hammerbein","art":"Dreibeiniger Mastiff aus den Tiefen."}'::JSONB,
  ARRAY['Den Schädelplatten-Fund bergen, bevor die Sturmritter ihn beschlagnahmen.','Brom Felsfaust ein anständiges Grabmal bauen.'],
  ARRAY['Sie weiß, dass ein Pulslinsen-Fragment vor zwei Monaten aus dem Werkdock verschwand.','Sie hat das Steinkrall-Erbe an einen Sturmritter verspielt — Schuld läuft noch.'],
  '{"familie":[{"name":"Brom Felsfaust","rolle":"Cousin","verstorben":true}],"freunde":[{"name":"Quartiermeister Olbric Pfennigwert","rolle":"Tauschpartner"}],"rivalen":[{"name":"Hauptmann Roderick Eisenherz","rolle":"Beansprucht ihre Funde"}]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'olbric','Olbric Pfennigwert','Quartiermeister',
  ARRAY['Olbric','Pfennigwert'],
  'Halblinge (Leichtfüße)','Männlich',51,'Erwachsen',
  'Quartiermeister · Outfitters','Die Outfitters','Quartiermeister 2. Klasse',NULL,
  'WW-S1-K0598','Arkanheim · Zollhof','Melion',
  'Trägt immer drei Hüte. Übereinander.',
  ARRAY['gewieft','großzügig','vorsichtig'],
  ARRAY['Lebendig','Verbündet'],
  ARRAY['Fingerfertigkeit','Täuschen','Werkzeuge: Diebes','Überzeugen'],
  'Vertraut Zahlen mehr als Menschen.',
  '[{"zeit":"Vormittags","ort":"Marktrunde durch Arkanheim","tat":"Sammelt Klatsch und Schulden ein — beides gleichermaßen wertvoll.","stufe":2},{"zeit":"Mittags","ort":"Zollhof zum Goldenen Riemen","tat":"Kontrolliert die Listen der Nachtschicht beim Essen.","stufe":2},{"zeit":"Nachmittags","ort":"Goldener Riemen · Kontor","tat":"Wickelt offizielle Geschäfte ab — und ein, zwei inoffizielle.","stufe":3},{"zeit":"Abends","ort":"Hinterzimmer \"Brennender Hut\"","tat":"Karten mit Hagga. Tauschhandel.","stufe":4},{"zeit":"Nachts","ort":"Versteckte Wohnung","tat":"Schreibt Briefe an seine Tochter — schickt sie nie ab.","stufe":5}]'::JSONB,
  '[{"name":"Drei Hüte (übereinander)","beschreibung":"Im obersten ein Vorrat Tabak, im mittleren ein Versteck, im untersten Brösel.","stufe":3},{"name":"Diebeswerkzeug","beschreibung":"In einem fingerlangen Lederetui am Gürtel.","stufe":3},{"name":"Notizbuch mit Schuldlisten","beschreibung":"Eigene Verschlüsselung. Wer drin steht, weiß nicht, dass er drin steht.","stufe":4}]'::JSONB,
  '{"name":"Brösel","art":"Dachskätzchen — schläft im Hutfutter."}'::JSONB,
  ARRAY['Das Outfitter-Netzwerk vom Sturmritter-Embargo befreien.','Seiner Tochter eine ehrenhafte Lebensgrundlage hinterlassen.'],
  '{}',
  '{"familie":[{"name":"Pip Süßholz","rolle":"Patenkind · Spielercharakter"}],"freunde":[{"name":"Bergungsmeisterin Hagga Steinkrall","rolle":"Stille Tauschpartnerin"}],"rivalen":[{"name":"Wirtin Senna Schwarzdorn","rolle":"Konkurrierender Schwarzmarkt"}]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'thalmir','Thalmir','Bruder',
  ARRAY['Thalmir'],
  'Aasimar','Männlich',34,'Erwachsen',
  'Tempeldiener · Pfleger','Die Friedenshüter','Pfleger 1. Stufe',NULL,
  'WW-S4-K0303','Sturmwacht · Lazarett','Aurelia',
  'Ein silbern leuchtendes Stirnband, das im Schlaf glimmt.',
  ARRAY['leise','geduldig','unerschütterlich'],
  ARRAY['Lebendig'],
  ARRAY['Medizin','Religion','Geschichte','Motiv erkennen'],
  'Kann nicht „nein" sagen, wenn jemand weint.',
  '[{"zeit":"Vormittags","ort":"Pflege im Lazarett","tat":"Assistiert Mutter Brynnen, wo immer er gebraucht wird.","stufe":2},{"zeit":"Mittags","ort":"Lazarett · Kapelle","tat":"Stille Andacht. Sein Stirnband leuchtet dann am hellsten.","stufe":2},{"zeit":"Nachmittags","ort":"Lazarett · Saal Nord","tat":"Macht die Runde bei den ruhigeren Patienten.","stufe":3},{"zeit":"Abends","ort":"Bibliothek der Quellenheiligen","tat":"Studiert alte Schriften über Aasimar-Herkunft.","stufe":4},{"zeit":"Nachts","ort":"Sein Quartier","tat":"Liest die Briefe seiner unbekannten Mutter — immer wieder.","stufe":5}]'::JSONB,
  '[{"name":"Silbernes Stirnband","beschreibung":"Glimmt im Schlaf. Er weiß nicht, woher es kommt.","stufe":3},{"name":"Tasche mit Verbandsstoffen","beschreibung":"Sauber gefaltet, neu gestärkt. Jeden Morgen.","stufe":3},{"name":"Briefbündel","beschreibung":"Briefe seiner unbekannten Mutter — er liest sie nachts.","stufe":4}]'::JSONB,
  NULL,
  ARRAY['Den Ursprung seines Stirnbands ergründen — er ist nicht sicher, dass es himmlisch ist.','Mutter Brynnen zur Ruhe nötigen, bevor sie zusammenbricht.'],
  '{}',
  '{"familie":[{"name":"(unbekannt)","rolle":"Findelkind"}],"freunde":[{"name":"Mutter Brynnen Quellgrund","rolle":"Mentorin"},{"name":"Aetheris Sturmaug","rolle":"Glaubensbruder · Spielercharakter"}],"rivalen":[]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'roderick','Roderick Eisenherz','Hauptmann',
  ARRAY['Roderick','Eisenherz'],
  'Goliaths','Männlich',38,'Erwachsen',
  'Hauptmann der zweiten Lanze','Die Sturmritter','Hauptmann der 2. Lanze',NULL,
  'WW-S2-K0061','Sturmwacht · Lanzenhof','Sienna',
  'Eine Narbe, die sein Lachen schief macht.',
  ARRAY['direkt','laut','ehrlich'],
  ARRAY['Lebendig','Verbündet'],
  ARRAY['Athletik','Einschüchtern','Überlebenskunst','Tierkunde'],
  'Trifft Entscheidungen, bevor er die Frage zu Ende hört.',
  '[{"zeit":"Vormittags","ort":"Lanzenhof","tat":"Drillt die zweite Lanze. Laut.","stufe":2},{"zeit":"Mittags","ort":"Offiziersmesse","tat":"Isst stehend, redet mit allen.","stufe":2},{"zeit":"Nachmittags","ort":"Sturmwacht · Wall West","tat":"Inspiziert die Postenkette, kennt jeden Soldaten beim Namen.","stufe":3},{"zeit":"Abends","ort":"Sturmwacht · Reitplatz","tat":"Reitet mit Spalt eine Runde — angeblich Inspektion.","stufe":4},{"zeit":"Nachts","ort":"Offiziersquartier","tat":"Schläft selten gut — die Schlacht am Roten Pass kommt ihm im Traum nach.","stufe":5}]'::JSONB,
  '[{"name":"Lanze \"Eisenruf\"","beschreibung":"Eingravierter Name seiner Mutter am Schaft.","stufe":3},{"name":"Schmalkettenrüstung","beschreibung":"Drei Reparaturstellen — alle von eigener Hand.","stufe":3}]'::JSONB,
  '{"name":"Spalt","art":"Sturmgreif — beißt nur Befehlsempfänger."}'::JSONB,
  '{}','{}',
  '{"familie":[],"freunde":[],"rivalen":[]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'mira','Mira Vael','Sucherin',
  ARRAY['Mira''el','Shó-yan','Vael'],
  'Elfen (Dunkel)','Weiblich',142,'Erwachsen',
  'Feldforscherin · Quellensucher','Die Quellensucher','Feldforscherin',NULL,
  'WW-S7-K0214','Glutader-Mine · Lager Süd','Daramur',
  'Spricht mit dem Stein, bevor sie ihn anrührt.',
  ARRAY['neugierig','wortkarg','penibel'],
  ARRAY['Lebendig','Neutral'],
  ARRAY['Arkane Kunde','Wahrnehmung','Naturkunde','Heimlichkeit'],
  'Verlässt sich nie auf eine andere Hand.',
  '[{"zeit":"Vormittags","ort":"Lager Süd","tat":"Notizen vom Vortag durchgehen, bevor sie irgendjemand anspricht.","stufe":2},{"zeit":"Mittags","ort":"Glutader-Mine · Stollen IV","tat":"Misst Resonanzpunkte mit dem Kristallstab.","stufe":2},{"zeit":"Nachmittags","ort":"Glutader-Mine · Stollen IX","tat":"Vermisst neue Adern. Spricht laut mit dem Stein.","stufe":3},{"zeit":"Abends","ort":"Lager Süd","tat":"Spricht mit dem Stein, ehe sie ihn katalogisiert.","stufe":4},{"zeit":"Nachts","ort":"Lager Süd · Zelt","tat":"Träumt von Stimmen im Fels. Hält ein Logbuch unter der Pritsche.","stufe":5}]'::JSONB,
  '[{"name":"Kristallstab zur Resonanzmessung","beschreibung":"Eigenbau. Reagiert auf Lebensspeicher-Spuren.","stufe":3},{"name":"Lederbeutel mit Steinproben","beschreibung":"Über fünfzig kleine Splitter, alle beschriftet.","stufe":3}]'::JSONB,
  NULL,
  '{}','{}',
  '{"familie":[],"freunde":[],"rivalen":[]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'senna','Senna Schwarzdorn','Wirtin',
  ARRAY['Senna','Schwarzdorn'],
  'Wandler','Weiblich',29,'Erwachsen',
  'Wirtin · Schmuggelkontakt',NULL,NULL,
  'Schmuggelring der Roten Hand',
  NULL,'Arkanheim · Brennender Hut','Lorelei',
  'Lacht in vier verschiedenen Stimmen, je nach Schicht.',
  ARRAY['charmant','beobachtend','launisch'],
  ARRAY['Lebendig','Neutral'],
  ARRAY['Täuschen','Überzeugen','Auftreten','Motiv erkennen'],
  'Erinnert sich selten daran, welches Gesicht sie gerade trägt.',
  '[{"zeit":"Vormittags","ort":"Brennender Hut · Schankraum","tat":"Öffnet — trägt heute das blonde Gesicht.","stufe":2},{"zeit":"Mittags","ort":"Schankraum","tat":"Hört Gästen zu. Vergisst nie eine Schuld.","stufe":2},{"zeit":"Nachmittags","ort":"Hof hinter dem Gasthaus","tat":"Empfängt Lieferungen — fragt nie nach Herkunft.","stufe":3},{"zeit":"Abends","ort":"Hinterzimmer","tat":"Trifft sich mit Kontakten — Gesicht wechselt vorher.","stufe":4},{"zeit":"Nachts","ort":"Eigene Kammer","tat":"Übt vor dem Spiegel ein neues Gesicht, bis es sich richtig anfühlt.","stufe":5}]'::JSONB,
  '[{"name":"Gesichtsmaske aus Wandlerhaut","beschreibung":"Vier verschiedene Gesichter. Sie erinnert sich nicht immer, welches gerade ihr eigenes ist.","stufe":3},{"name":"Schank-Kassenbuch","beschreibung":"Hat einen doppelten Boden für den Schmuggel.","stufe":3}]'::JSONB,
  '{"name":"Russ","art":"Schwarze Hauskatze — sie behauptet, sie sei stumm."}'::JSONB,
  '{}','{}',
  '{"familie":[],"freunde":[],"rivalen":[]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'kalim','Kalim Veth','Inquisitor',
  ARRAY['Kalim','Veth'],
  'Aasimar','Männlich',41,'Erwachsen',
  'Inquisitor · Innere Wahrung','Die Sentinels','Inquisitor 3. Ranges',NULL,
  'WW-S3-K0044','Arkanheim · Tribunalflügel',NULL,
  'Trägt nie Handschuhe, auch nicht im Winter.',
  ARRAY['kalt','präzise','unbestechlich'],
  ARRAY['Lebendig','Feind'],
  '{}',NULL,
  '[{"zeit":"Vormittags","ort":"Tribunalflügel","tat":"Akten lesen, niemanden anschauen.","stufe":2},{"zeit":"Mittags","ort":"Verhörzimmer III","tat":"Befragungen. Trägt keine Handschuhe.","stufe":2},{"zeit":"Nachmittags","ort":"Aktenkammer","tat":"Sichtet Berichte aus den Außenposten.","stufe":3},{"zeit":"Abends","ort":"Innenhof der Sentinels","tat":"Wandert allein. Spricht mit niemandem.","stufe":4},{"zeit":"Nachts","ort":"Eigenes Quartier","tat":"Schreibt Berichte, die niemand zu sehen bekommt.","stufe":5}]'::JSONB,
  '[]'::JSONB,
  NULL,
  '{}','{}',
  '{"familie":[],"freunde":[],"rivalen":[]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'ystrid','Ystrid Lichtbruch','Späher',
  ARRAY['Ystrid','Lichtbruch'],
  'Halbelfen','Diversität',27,'Jugendlich',
  'Späher · Routenkartograph','Die Pathfinders','Späher · Routenkartograph',NULL,
  'WW-S6-K0512','Sturmwacht · Späherquartier',NULL,
  'Trägt einen Quarzkristall am Ohrring, der bei Magie summt.',
  ARRAY['jung','übereifrig','höflich'],
  ARRAY['Lebendig','Verschollen'],
  '{}',NULL,
  '[{"zeit":"Vormittags","ort":"Sattelweg nach Sturmwacht","tat":"Bricht früh auf, oft vor allen anderen.","stufe":2},{"zeit":"Mittags","ort":"Route Roter Pass","tat":"Kartiert neue Wegpunkte zwischen Sturmwacht und der Steppe.","stufe":2},{"zeit":"Nachmittags","ort":"Höhenkamm","tat":"Skizziert Geländemerkmale. Zeichnet mit Quarzkohle.","stufe":3},{"zeit":"Abends","ort":"Lager im Freien","tat":"Schlägt Lager auf, wenn das Tageslicht schwindet.","stufe":4},{"zeit":"Nachts","ort":"Schlafstelle","tat":"Schläft mit dem Quarzkristall am Ohr — er summt bei Magie in der Nähe.","stufe":5}]'::JSONB,
  '[]'::JSONB,
  NULL,
  '{}','{}',
  '{"familie":[],"freunde":[],"rivalen":[]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'stille-kunde','Der Stille Kunde',NULL,
  '{}',
  'Menschen','Männlich',NULL,'Erwachsen',
  NULL,NULL,NULL,NULL,
  NULL,'Sturmwacht · Hafenviertel',NULL,
  NULL,
  '{}',
  ARRAY['Lebendig','Neutral'],
  '{}',NULL,
  '[{"zeit":"Vormittags","ort":"Hafenkante","tat":"Steht stundenlang am Wasser. Kauft nichts.","stufe":2},{"zeit":"Mittags","ort":"Markt","tat":"Geht zwischen Ständen umher, ohne zu sprechen.","stufe":2},{"zeit":"Nachmittags","ort":"Lagerhausviertel","tat":"Verschwindet zwischen den Speichern. Niemand sah ihn jemals eintreten.","stufe":3},{"zeit":"Abends","ort":"Hafenkneipe","tat":"Trinkt allein. Niemand setzt sich neben ihn.","stufe":4},{"zeit":"Nachts","ort":"Unbekannt","tat":"Niemand hat ihn nachts gesehen.","stufe":5}]'::JSONB,
  '[]'::JSONB,
  NULL,
  '{}','{}',
  '{"familie":[],"freunde":[],"rivalen":[]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'kervan','Kervan Holstein','Wachfeldwebel',
  ARRAY['Kervan','Holstein'],
  'Menschen','Männlich',44,'Erwachsen',
  'Wachfeldwebel · Sturmritter','Die Sturmritter','Wachfeldwebel',NULL,
  'WW-S2-K0179','Sturmwacht · Mannschaftshaus IV','Sienna',
  'Trug bis zuletzt das schiefe Wappen seines Großvaters auf der Schulter.',
  ARRAY['stoisch','treu','grimmig'],
  ARRAY['Gefallen'],
  ARRAY['Athletik','Wahrnehmung','Einschüchtern'],
  'Glaubte, Tapferkeit allein genüge.',
  '[{"zeit":"Vormittags","ort":"Wall West","tat":"Erste Wache. Immer pünktlich, immer rasiert.","stufe":2},{"zeit":"Mittags","ort":"Mannschaftsmesse","tat":"Stilles Essen mit den Jüngsten der Truppe.","stufe":2},{"zeit":"Nachmittags","ort":"Übungsplatz","tat":"Drillt die Rekruten. Geduldig, nie laut.","stufe":3},{"zeit":"Abends","ort":"Memorial","tat":"Eine Münze für seinen gefallenen Sohn.","stufe":4},{"zeit":"Nachts","ort":"Quartier · Schreibpult","tat":"Schreibt Briefe an die Familien, die er noch nicht gefunden hat.","stufe":5}]'::JSONB,
  '[{"name":"Familienschild","beschreibung":"Mit schiefem Wappen — drei Generationen alt.","stufe":3},{"name":"Schwertbruch \"Holstein\"","beschreibung":"Im Sturm der Westklippen zerbrochen. Wurde mit ihm bestattet.","stufe":3},{"name":"Münzkette","beschreibung":"Auf jeder Münze der Name eines Gefallenen seiner Truppe.","stufe":4}]'::JSONB,
  NULL,
  ARRAY['Den Sturm der Westklippen zurückschlagen — egal mit welchem Preis.'],
  '{}',
  '{"familie":[{"name":"Wenna Holstein","rolle":"Witwe"},{"name":"Liren Holstein","rolle":"Sohn","verstorben":true}],"freunde":[{"name":"Hauptmann Roderick Eisenherz","rolle":"Vorgesetzter"}],"rivalen":[]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'ehrn-wurzel','Ehrn-die-Wurzel','Hüter',
  ARRAY['Ehrn-die-Wurzel','Setzling-der-Mondnacht','Träger-der-Sieben-Ringe'],
  'Baumhirte','—',840,'Alt',
  'Hüter des Alten Wachshains',NULL,NULL,
  'Hain der Alten Wachs',
  NULL,'Alter Wachshain · Nordrand','Daramur',
  'Wenn er stillsteht, kann man ihn für eine Eiche halten — bis er den Kopf wendet.',
  ARRAY['bedächtig','urteilsstark','geduldig'],
  ARRAY['Lebendig','Verbündet'],
  ARRAY['Naturkunde','Wahrnehmung','Mit Pflanzen umgehen','Heimlichkeit'],
  'Vertraut Eile niemals — selbst nicht in Notfällen.',
  '[{"zeit":"Vormittags","ort":"Alter Wachshain · Nordrand","tat":"Trinkt Tau aus den Astgabeln, lauscht den jungen Trieben.","stufe":2},{"zeit":"Mittags","ort":"Lichtung am Kreis der Sieben","tat":"Berät Wandernde, die den Hain durchqueren wollen.","stufe":2},{"zeit":"Nachmittags","ort":"Bachlauf","tat":"Versetzt junge Setzlinge an bessere Standorte.","stufe":3},{"zeit":"Abends","ort":"Im Tann","tat":"Spricht mit den Geistern der Gefallenen, die in seinen Wurzeln wohnen.","stufe":4},{"zeit":"Nachts","ort":"Verborgene Quelle","tat":"Trinkt nur einmal pro Jahrzehnt — und niemand weiß, was er dabei sieht.","stufe":5}]'::JSONB,
  '[{"name":"Wachsringe","beschreibung":"Acht Wachsringe sind in seinen Stamm gewachsen — Jahresringe seiner längsten Wachen.","stufe":3},{"name":"Eichelbeutel","beschreibung":"Sammelt seit Jahrhunderten Eicheln seiner gefallenen Kinder.","stufe":4}]'::JSONB,
  '{"name":"Schwarm der Mooshüpfer","art":"Kleine Geister, die in seinem Bart wohnen."}'::JSONB,
  ARRAY['Den Alten Wachshain vor Glutader-Vorstößen schützen.','Einen Setzling finden, dem er sein Wissen vererben kann.'],
  '{}',
  '{"familie":[],"freunde":[{"name":"Sucherin Mira Vael","rolle":"Stille Verbündete"}],"rivalen":[{"name":"Vorarbeiter der Glutader-Mine","rolle":"Drängt ständig auf Rodung"}]}'::JSONB,
  'Kreatur','#4ea36a',true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'glimblix','Glimblix Wiznock','Doktor',
  ARRAY['Glimblix','Eldenoor','Tipparius','Wiznock','von der Quellenburg','der Dritte'],
  'Gnome (Felsen)','Männlich',127,'Erwachsen',
  'Mechanikus & Uhrenmacher',NULL,NULL,
  'Akademie der Klingenden Räder',
  NULL,'Arkanheim · Werkstattgasse 7','Melion',
  'Trägt seine Vergrößerungsbrille auf der Stirn und zwei weitere im Bart.',
  ARRAY['neugierig','geschwätzig','exakt'],
  ARRAY['Lebendig','Verbündet'],
  ARRAY['Werkzeuge: Tüftler','Arkane Kunde','Geschichte','Überzeugen'],
  'Hört nicht auf zu reden, wenn niemand widerspricht.',
  '[{"zeit":"Vormittags","ort":"Werkstatt","tat":"Justiert die Tagesuhren der Hohen Archive.","stufe":2},{"zeit":"Mittags","ort":"Werkstattgasse","tat":"Plaudert mit Lieferanten — vergisst die Mahlzeit.","stufe":2},{"zeit":"Nachmittags","ort":"Werkstatt","tat":"Baut an seinem unfertigen „Resonanzphonographen\".","stufe":3},{"zeit":"Abends","ort":"Akademie der Räder","tat":"Hält Vortrag, wenn ihm jemand zuhört.","stufe":4},{"zeit":"Nachts","ort":"Werkstatt · Keller","tat":"Spricht mit einer Stimme aus einem alten Sprechgerät, das ihm niemand gibt.","stufe":5}]'::JSONB,
  '[{"name":"Vergrößerungs-Brille","beschreibung":"Sechs Linsen, einzeln klappbar.","stufe":3},{"name":"Werkzeuggürtel","beschreibung":"42 Fächer. Er kennt jedes auswendig.","stufe":3},{"name":"Resonanzphonograph","beschreibung":"Ein Apparat, der angeblich Walgesänge wiedergeben kann.","stufe":4}]'::JSONB,
  '{"name":"Tick","art":"Mechanische Maus mit Glasaugen."}'::JSONB,
  ARRAY['Den verlorenen Resonanzphonographen seines Großvaters fertigstellen.','Ein Patent bei der Akademie der Räder eintragen, bevor seine Konkurrenz es tut.'],
  ARRAY['Die fremde Stimme aus dem Sprechgerät behauptet, ein Mechanikus aus der Zeit vor dem Sturz zu sein.'],
  '{"familie":[{"name":"Tipparius Wiznock","rolle":"Großvater","verstorben":true}],"freunde":[{"name":"Magister Eilan Vorrh","rolle":"Studienpartner · Spielercharakter"}],"rivalen":[{"name":"Doktor Nibblestone","rolle":"Konkurrent bei der Akademie"}]}'::JSONB,
  NULL,NULL,true
);

INSERT INTO public.nscs (slug,name,titel,voller_name,rasse,geschlecht,alter_jahre,lebensphase,beruf,division,rang,organisation,kapsel,wohnort,gottheit,unvergesslich,eigenschaften,status,talente,makel,routine,ausruestung,begleiter,motivationen,geheimnisse,kontakte,art,accent,visible) VALUES
(
  'strahd','Strahd von Zarowitsch','Vampirfürst',
  ARRAY['Strahd','von Zarowitsch'],
  'Vampir','Männlich',412,'Alt',
  'Herr der Schwarzen Festung',NULL,NULL,
  'Haus Zarowitsch',
  NULL,'Schwarze Festung · Talsenke','Vindeah',
  'Trägt einen Siegelring, in dem ein gefangener Sonnenstrahl flackert.',
  ARRAY['hochmütig','gebildet','grausam'],
  ARRAY['Lebendig','Feind'],
  ARRAY['Arkane Kunde','Geschichte','Einschüchtern','Auftreten'],
  'Erinnert sich an jeden, der ihn jemals gedemütigt hat — und vergisst nie.',
  '[{"zeit":"Vormittags","ort":"Sarkophag im Burgverlies","tat":"Schläft, von vier blinden Wachen flankiert.","stufe":2},{"zeit":"Mittags","ort":"Sarkophag im Burgverlies","tat":"Schläft weiter — die Sonne kennt seinen Namen nicht.","stufe":2},{"zeit":"Nachmittags","ort":"Bibliothek der Festung","tat":"Studiert alte Verträge mit den Lehensherren der Talsenke.","stufe":3},{"zeit":"Abends","ort":"Speisesaal","tat":"Empfängt Gäste, die er für seine Sammlung auswählt.","stufe":4},{"zeit":"Nachts","ort":"Über der Talsenke","tat":"Reitet in Nebelgestalt aus — sucht nach jenen, die ihm einst trotzten.","stufe":5}]'::JSONB,
  '[{"name":"Klinge des Hochmuts","beschreibung":"Schwarzes Eisen, gehärtet im Blut seiner ersten Braut.","stufe":3},{"name":"Sonnen-Siegelring","beschreibung":"Im Stein gefangenes Sonnenlicht — sein größtes Folterinstrument.","stufe":4},{"name":"Goldenes Diadem","beschreibung":"Trug es schon als Sterblicher. Lässt sich nicht entfernen.","stufe":4}]'::JSONB,
  '{"name":"Beucephalus","art":"Skelettpferd mit brennenden Augen."}'::JSONB,
  ARRAY['Die wiedergeborene Seele seiner ersten Braut zurückgewinnen.','Die Talsenke unter einen permanenten Nebel zwingen.'],
  '{}',
  '{"familie":[{"name":"Sergei von Zarowitsch","rolle":"Bruder","verstorben":true}],"freunde":[],"rivalen":[{"name":"Inquisitor Kalim Veth","rolle":"Hat geschworen, ihn zu enttarnen"}]}'::JSONB,
  'Kreatur','#a01838',true
);

-- Stufe-0 Einträge (Mysterien — DM kennt ihre wahre Identität über den slug)

INSERT INTO public.nscs (slug,name,status,routine,visible) VALUES
(
  'onyx','Eintrag #012',
  ARRAY['Verschollen'],
  '[{"zeit":"Vormittags","ort":"Unbekannt","tat":"—","stufe":2},{"zeit":"Mittags","ort":"Unbekannt","tat":"—","stufe":2},{"zeit":"Nachmittags","ort":"Unbekannt","tat":"—","stufe":3},{"zeit":"Abends","ort":"Unbekannt","tat":"—","stufe":4},{"zeit":"Nachts","ort":"Unbekannt","tat":"—","stufe":5}]'::JSONB,
  true
);

INSERT INTO public.nscs (slug,name,status,routine,visible) VALUES
(
  'kapuzenfremder','Eintrag #013',
  ARRAY['Lebendig'],
  '[{"zeit":"Vormittags","ort":"Unbekannt","tat":"—","stufe":2},{"zeit":"Mittags","ort":"Unbekannt","tat":"—","stufe":2},{"zeit":"Nachmittags","ort":"Unbekannt","tat":"—","stufe":3},{"zeit":"Abends","ort":"Unbekannt","tat":"—","stufe":4},{"zeit":"Nachts","ort":"Unbekannt","tat":"—","stufe":5}]'::JSONB,
  true
);

INSERT INTO public.nscs (slug,name,status,routine,visible) VALUES
(
  'glasaeuger','Eintrag #014',
  ARRAY['Lebendig'],
  '[{"zeit":"Vormittags","ort":"Unbekannt","tat":"—","stufe":2},{"zeit":"Mittags","ort":"Unbekannt","tat":"—","stufe":2},{"zeit":"Nachmittags","ort":"Unbekannt","tat":"—","stufe":3},{"zeit":"Abends","ort":"Unbekannt","tat":"—","stufe":4},{"zeit":"Nachts","ort":"Unbekannt","tat":"—","stufe":5}]'::JSONB,
  true
);

INSERT INTO public.nscs (slug,name,status,routine,visible) VALUES
(
  'narbenhaendlerin','Eintrag #015',
  ARRAY['Lebendig'],
  '[{"zeit":"Vormittags","ort":"Unbekannt","tat":"—","stufe":2},{"zeit":"Mittags","ort":"Unbekannt","tat":"—","stufe":2},{"zeit":"Nachmittags","ort":"Unbekannt","tat":"—","stufe":3},{"zeit":"Abends","ort":"Unbekannt","tat":"—","stufe":4},{"zeit":"Nachts","ort":"Unbekannt","tat":"—","stufe":5}]'::JSONB,
  true
);

INSERT INTO public.nscs (slug,name,status,routine,visible) VALUES
(
  'derrabenherr','Eintrag #016',
  ARRAY['Feind'],
  '[{"zeit":"Vormittags","ort":"Unbekannt","tat":"—","stufe":2},{"zeit":"Mittags","ort":"Unbekannt","tat":"—","stufe":2},{"zeit":"Nachmittags","ort":"Unbekannt","tat":"—","stufe":3},{"zeit":"Abends","ort":"Unbekannt","tat":"—","stufe":4},{"zeit":"Nachts","ort":"Unbekannt","tat":"—","stufe":5}]'::JSONB,
  true
);

INSERT INTO public.nscs (slug,name,status,routine,visible) VALUES
(
  'sturmkind','Eintrag #017',
  ARRAY['Verschollen'],
  '[{"zeit":"Vormittags","ort":"Unbekannt","tat":"—","stufe":2},{"zeit":"Mittags","ort":"Unbekannt","tat":"—","stufe":2},{"zeit":"Nachmittags","ort":"Unbekannt","tat":"—","stufe":3},{"zeit":"Abends","ort":"Unbekannt","tat":"—","stufe":4},{"zeit":"Nachts","ort":"Unbekannt","tat":"—","stufe":5}]'::JSONB,
  true
);
