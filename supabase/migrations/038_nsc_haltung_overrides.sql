-- ── NSC: Haltung-Ausnahmen pro Charakter ─────────────────────────────────────
-- Status ist in der UI in „Zustand" (Lebendig/Verschollen/Verstorben) und
-- „Haltung ggü. Gruppe" (Verbündet/Neutral/Feind) geteilt. Die Haltung gilt
-- als Gruppen-Standard; abweichende Haltungen einzelner Charaktere landen hier:
--   { "<character_id>": "Feind", … }
ALTER TABLE public.nscs
  ADD COLUMN IF NOT EXISTS haltung_overrides JSONB NOT NULL DEFAULT '{}';
