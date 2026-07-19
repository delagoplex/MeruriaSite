-- ── NSC: Aussehen ────────────────────────────────────────────────────────────
-- Strukturierte Sektion „Aussehen" (nach Biografie) in der NSC-Verwaltung:
-- JSONB-Objekt { groesse, gewicht, hautfarbe, augenfarbe, haarfarbe, merkmale, weiteres }
-- Falls eine frühere Fassung dieser Migration die Spalte als TEXT angelegt hat,
-- wird sie ersetzt (Spalte war zu dem Zeitpunkt noch ungenutzt).
DO $$
BEGIN
  IF (SELECT data_type FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = 'nscs' AND column_name = 'aussehen') = 'text' THEN
    ALTER TABLE public.nscs DROP COLUMN aussehen;
  END IF;
END $$;

ALTER TABLE public.nscs
  ADD COLUMN IF NOT EXISTS aussehen JSONB NOT NULL DEFAULT '{}';
