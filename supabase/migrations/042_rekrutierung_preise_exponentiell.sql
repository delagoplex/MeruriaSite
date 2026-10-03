-- Rekrutierungspreise wachsen exponentiell mit dem Rang (Faktor ~1,5 pro Rang, Rang 1 = höchster).
-- Nur Zeilen, die noch den alten linearen Standardwert (11 - rang) * 50 haben, werden angepasst;
-- vom DM manuell gesetzte Preise bleiben unberührt.
UPDATE public.rekrutierung_preise
SET preis = CASE rang
  WHEN 1  THEN 1920
  WHEN 2  THEN 1280
  WHEN 3  THEN 855
  WHEN 4  THEN 570
  WHEN 5  THEN 380
  WHEN 6  THEN 255
  WHEN 7  THEN 170
  WHEN 8  THEN 115
  WHEN 9  THEN 75
  WHEN 10 THEN 50
END
WHERE preis = (11 - rang) * 50;
