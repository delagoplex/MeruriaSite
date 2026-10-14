-- Rekrutierung: höchstens 10 offene Anfragen pro Konto, damit die Liste der Spielleitung nicht geflutet werden kann.
CREATE OR REPLACE FUNCTION public.rekrutierung_anfragen_limit()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public, pg_temp AS $$
BEGIN
  IF NOT public.is_dm() AND (
    SELECT count(*) FROM public.rekrutierung_anfragen a
     WHERE a.requester_id = NEW.requester_id AND a.status = 'offen'
  ) >= 10 THEN
    RAISE EXCEPTION 'Zu viele offene Rekrutierungsanfragen (höchstens 10)' USING ERRCODE = 'P0001';
  END IF;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS rekrutierung_anfragen_limit ON public.rekrutierung_anfragen;
CREATE TRIGGER rekrutierung_anfragen_limit
  BEFORE INSERT ON public.rekrutierung_anfragen
  FOR EACH ROW EXECUTE FUNCTION public.rekrutierung_anfragen_limit();
