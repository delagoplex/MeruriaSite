-- Rekrutierungspreise jetzt pro Division × Rang (statt nur pro Rang).
DROP TABLE IF EXISTS public.rekrutierung_preise;

CREATE TABLE public.rekrutierung_preise (
  division_id  TEXT    NOT NULL,
  rang         INTEGER NOT NULL CHECK (rang BETWEEN 1 AND 10),
  preis        INTEGER NOT NULL DEFAULT 50 CHECK (preis >= 0),
  PRIMARY KEY (division_id, rang)
);

ALTER TABLE public.rekrutierung_preise ENABLE ROW LEVEL SECURITY;
CREATE POLICY "auth read" ON public.rekrutierung_preise FOR SELECT TO authenticated USING (true);
CREATE POLICY "dm write"  ON public.rekrutierung_preise FOR ALL  USING (public.is_dm());

GRANT SELECT                  ON public.rekrutierung_preise TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE  ON public.rekrutierung_preise TO authenticated;

-- Standardwerte für alle 8 Divisionen: (11 − rang) × 50
INSERT INTO public.rekrutierung_preise (division_id, rang, preis)
SELECT d, r, (11 - r) * 50
FROM unnest(ARRAY['kuratoren','sturmritter','sentinels','friedenshueter',
                  'outfitters','pathfinders','quellensucher','bergungsgarde']) AS d,
     generate_series(1, 10) AS r;
