-- Global key-value settings table (DM-writable, all-readable)
CREATE TABLE public.settings (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "auth read" ON public.settings FOR SELECT TO authenticated USING (true);
CREATE POLICY "dm write"  ON public.settings FOR ALL    USING (public.is_dm());

GRANT SELECT                 ON public.settings TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.settings TO authenticated;

-- Seed: default current day (Tag 14 n.d.L.)
INSERT INTO public.settings (key, value) VALUES ('kalender_today', '14');
