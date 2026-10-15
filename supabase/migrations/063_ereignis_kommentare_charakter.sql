-- 063: Kommentare zeigen Name und Bild des Charakters. Spieler dürfen fremde, nicht freigeschaltete Charaktere
--      nicht lesen (011); deshalb übernimmt ein Trigger Name und Bild beim Schreiben aus characters
--      (nicht vom Client, damit niemand unter fremdem Namen kommentiert).

ALTER TABLE public.ereignis_kommentare
  ADD COLUMN IF NOT EXISTS char_name TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS char_bild TEXT;

CREATE OR REPLACE FUNCTION public.ereignis_kommentar_charakter() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
BEGIN
  SELECT c.name, c.char_data->>'bild' INTO NEW.char_name, NEW.char_bild
  FROM public.characters c WHERE c.id = NEW.character_id;
  NEW.char_name := COALESCE(NEW.char_name, '');
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS ereignis_kommentar_charakter ON public.ereignis_kommentare;
CREATE TRIGGER ereignis_kommentar_charakter BEFORE INSERT ON public.ereignis_kommentare
  FOR EACH ROW EXECUTE FUNCTION public.ereignis_kommentar_charakter();

NOTIFY pgrst, 'reload schema';
