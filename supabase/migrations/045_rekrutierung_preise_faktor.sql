-- Rekrutierungspreise: nur noch Basispreis (Rang 10) und Faktor pro Rang.
-- Der Faktor liegt in Zeile rang 0, in Hundertsteln (150 = x1,5); die Zeilen 1-9 werden nicht mehr gelesen.
ALTER TABLE public.rekrutierung_preise DROP CONSTRAINT IF EXISTS rekrutierung_preise_rang_check;
ALTER TABLE public.rekrutierung_preise ADD CONSTRAINT rekrutierung_preise_rang_check CHECK (rang BETWEEN 0 AND 10);

INSERT INTO public.rekrutierung_preise (division_id, rang, preis)
VALUES ('kuratoren', 0, 150)
ON CONFLICT (division_id, rang) DO NOTHING;
