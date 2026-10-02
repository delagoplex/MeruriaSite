-- Konfigurierbare Rekrutierungspreise pro Rang (1 = höchster, 10 = niedrigster).
-- preis = Hade pro Rangunterschied-Schritt beim Rekrutieren.
CREATE TABLE public.rekrutierung_preise (
  rang   INTEGER PRIMARY KEY CHECK (rang BETWEEN 1 AND 10),
  preis  INTEGER NOT NULL DEFAULT 50 CHECK (preis >= 0)
);

ALTER TABLE public.rekrutierung_preise ENABLE ROW LEVEL SECURITY;
CREATE POLICY "auth read" ON public.rekrutierung_preise FOR SELECT TO authenticated USING (true);
CREATE POLICY "dm write"  ON public.rekrutierung_preise FOR ALL  USING (public.is_dm());

GRANT SELECT                  ON public.rekrutierung_preise TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE  ON public.rekrutierung_preise TO authenticated;

-- Standardwerte: (11 − rang) × 50, d. h. Rang 1 = 500 Hade/Schritt, Rang 10 = 50 Hade/Schritt
INSERT INTO public.rekrutierung_preise (rang, preis) VALUES
  (1, 500), (2, 450), (3, 400), (4, 350), (5, 300),
  (6, 250), (7, 200), (8, 150), (9, 100), (10, 50);
