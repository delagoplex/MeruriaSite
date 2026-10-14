-- Charaktererstellung: „Neuer NSC“ ist für Spieler mit einem Passwort gesperrt (die Spielleitung ist immer frei).
-- Das Passwort liegt nur als bcrypt-Hash in einer Tabelle ohne Lesezugriff; geprüft wird per RPC.
-- Es sperrt nur das NSC-Quiz: NSC speichern darf weiterhin nur die Spielleitung (RLS auf nscs).
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;

CREATE TABLE IF NOT EXISTS public.app_secrets (
  key        TEXT PRIMARY KEY,
  hash       TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE public.app_secrets ENABLE ROW LEVEL SECURITY;   -- keine Policies: niemand liest direkt
REVOKE ALL ON public.app_secrets FROM anon, authenticated;

CREATE OR REPLACE FUNCTION public.check_nsc_quiz_password(p_password TEXT)
RETURNS BOOLEAN LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, extensions, pg_temp AS $$
DECLARE
  h TEXT;
BEGIN
  IF auth.uid() IS NULL THEN RETURN FALSE; END IF;
  IF public.is_dm() THEN RETURN TRUE; END IF;
  SELECT s.hash INTO h FROM public.app_secrets s WHERE s.key = 'nsc_quiz';
  IF h IS NULL OR p_password IS NULL OR h <> crypt(p_password, h) THEN
    PERFORM pg_sleep(0.4);   -- bremst Durchprobieren
    RETURN FALSE;
  END IF;
  RETURN TRUE;
END $$;

CREATE OR REPLACE FUNCTION public.set_nsc_quiz_password(p_password TEXT)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, extensions, pg_temp AS $$
BEGIN
  IF NOT public.is_dm() THEN RAISE EXCEPTION 'Nur die Spielleitung' USING ERRCODE = '42501'; END IF;
  IF length(btrim(COALESCE(p_password, ''))) < 4 THEN RAISE EXCEPTION 'Das Passwort braucht mindestens 4 Zeichen'; END IF;
  INSERT INTO public.app_secrets (key, hash, updated_at)
  VALUES ('nsc_quiz', crypt(p_password, gen_salt('bf')), NOW())
  ON CONFLICT (key) DO UPDATE SET hash = EXCLUDED.hash, updated_at = NOW();
END $$;

REVOKE ALL ON FUNCTION public.check_nsc_quiz_password(TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.set_nsc_quiz_password(TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.check_nsc_quiz_password(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_nsc_quiz_password(TEXT) TO authenticated;

NOTIFY pgrst, 'reload schema';
