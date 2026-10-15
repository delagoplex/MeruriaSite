-- Bucket karte-bilder: Bilder werden weiter über die öffentliche URL ausgeliefert (Bucket bleibt public),
-- aber das Auflisten der Objekte (Pfade verborgener Hexfelder) ist nur noch der Spielleitung möglich.
-- Der DM bekommt außerdem UPDATE, damit Uploads mit upsert funktionieren.
DROP POLICY IF EXISTS "public read" ON storage.objects;
DROP POLICY IF EXISTS "dm read karte-bilder" ON storage.objects;
CREATE POLICY "dm read karte-bilder" ON storage.objects
  FOR SELECT USING (bucket_id = 'karte-bilder' AND public.is_dm());
DROP POLICY IF EXISTS "dm update karte-bilder" ON storage.objects;
CREATE POLICY "dm update karte-bilder" ON storage.objects
  FOR UPDATE USING (bucket_id = 'karte-bilder' AND public.is_dm())
  WITH CHECK (bucket_id = 'karte-bilder' AND public.is_dm());
