-- Rekrutierungsanfragen: Spieler fragen einen NSC (Division + Rang, optional Rasse/Talent/Waffe)
-- für einen ihrer Charaktere an; die SL sieht alle Anfragen, nimmt sie an und legt daraus einen NSC an.
CREATE TABLE public.rekrutierung_anfragen (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  requester_id  UUID NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  character_id  UUID NOT NULL REFERENCES public.characters(id) ON DELETE CASCADE,
  division_id   TEXT NOT NULL,
  rang          INTEGER NOT NULL CHECK (rang BETWEEN 1 AND 10),
  rasse         TEXT,
  linie         TEXT,
  talent        TEXT,
  groesse       TEXT,
  waffe         TEXT,
  tage          INTEGER NOT NULL DEFAULT 1 CHECK (tage BETWEEN 1 AND 365),
  gebuehr       INTEGER NOT NULL DEFAULT 0 CHECK (gebuehr >= 0),  -- Spieler zahlt an den NSC
  honorar       INTEGER NOT NULL DEFAULT 0 CHECK (honorar >= 0),  -- NSC zahlt an den Spieler
  nachricht     TEXT,
  status        TEXT NOT NULL DEFAULT 'offen' CHECK (status IN ('offen', 'angenommen', 'abgelehnt')),
  nsc_id        UUID REFERENCES public.nscs(id) ON DELETE SET NULL,
  bearbeitet_am TIMESTAMPTZ
);

ALTER TABLE public.rekrutierung_anfragen ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own or dm read" ON public.rekrutierung_anfragen FOR SELECT
  USING (requester_id = auth.uid() OR public.is_dm());

-- Spieler dürfen nur offene Anfragen für ihre eigenen Charaktere stellen
CREATE POLICY "own insert" ON public.rekrutierung_anfragen FOR INSERT
  WITH CHECK (
    requester_id = auth.uid() AND status = 'offen' AND nsc_id IS NULL
    AND EXISTS (SELECT 1 FROM public.characters c WHERE c.id = character_id AND c.owner_id = auth.uid())
  );

CREATE POLICY "dm update" ON public.rekrutierung_anfragen FOR UPDATE USING (public.is_dm()) WITH CHECK (public.is_dm());

-- Zurückziehen: eigene, noch offene Anfragen; die SL darf alles löschen
CREATE POLICY "own open or dm delete" ON public.rekrutierung_anfragen FOR DELETE
  USING ((requester_id = auth.uid() AND status = 'offen') OR public.is_dm());

GRANT SELECT, INSERT, DELETE ON public.rekrutierung_anfragen TO authenticated;
GRANT UPDATE (status, nsc_id, bearbeitet_am) ON public.rekrutierung_anfragen TO authenticated;
