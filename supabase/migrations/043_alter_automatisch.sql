-- Ages follow the in-world calendar.
-- Characters keep `age`, `age_ref_abs` and `geburtstag_jahr` inside char_data (JSON); NSCs get
-- columns for the birth year and for the calendar day their stored age was valid. Rows without a
-- birth year or reference day use settings.alter_basis_abs, which is set to the calendar day that
-- is current when this migration runs.
ALTER TABLE public.nscs
  ADD COLUMN IF NOT EXISTS geburtstag_jahr INTEGER,
  ADD COLUMN IF NOT EXISTS alter_ref_abs   INTEGER;

INSERT INTO public.settings (key, value)
VALUES ('alter_basis_abs', COALESCE((SELECT value FROM public.settings WHERE key = 'kalender_today'), '14'))
ON CONFLICT (key) DO NOTHING;
