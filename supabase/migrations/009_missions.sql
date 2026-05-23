CREATE TABLE public.missions (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL,
  kategorie    TEXT NOT NULL CHECK (kategorie IN ('Suche', 'Gespraech', 'Jagd')),
  sw           INT  NOT NULL DEFAULT 1 CHECK (sw BETWEEN 1 AND 5),
  lv           INT  NOT NULL DEFAULT 1,
  auftraggeber TEXT NOT NULL DEFAULT '',
  region       TEXT NOT NULL DEFAULT '',
  beschreibung TEXT NOT NULL DEFAULT '',
  anweisungen  JSONB NOT NULL DEFAULT '[]',
  rewards      JSONB NOT NULL DEFAULT '{}',
  status       TEXT NOT NULL DEFAULT '' CHECK (status IN ('', 'neu', 'empfohlen', 'archiviert')),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.mission_applications (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mission_id   UUID NOT NULL REFERENCES public.missions(id) ON DELETE CASCADE,
  player_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  character_id UUID NOT NULL REFERENCES public.characters(id) ON DELETE CASCADE,
  app_status   TEXT NOT NULL DEFAULT 'pending' CHECK (app_status IN ('pending', 'accepted', 'rejected')),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (mission_id, player_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.missions TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.mission_applications TO authenticated;

ALTER TABLE public.missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mission_applications ENABLE ROW LEVEL SECURITY;

-- Players see all non-archived; DM sees everything
CREATE POLICY "auth read" ON public.missions
  FOR SELECT TO authenticated
  USING (status != 'archiviert' OR public.is_dm());

CREATE POLICY "dm insert" ON public.missions
  FOR INSERT WITH CHECK (public.is_dm());

CREATE POLICY "dm update" ON public.missions
  FOR UPDATE USING (public.is_dm());

CREATE POLICY "dm delete" ON public.missions
  FOR DELETE USING (public.is_dm());

-- Applications
CREATE POLICY "player or dm select" ON public.mission_applications
  FOR SELECT USING (auth.uid() = player_id OR public.is_dm());

CREATE POLICY "player insert" ON public.mission_applications
  FOR INSERT WITH CHECK (auth.uid() = player_id);

-- Players can only withdraw pending applications
CREATE POLICY "player delete" ON public.mission_applications
  FOR DELETE USING (auth.uid() = player_id AND app_status = 'pending');

CREATE POLICY "dm update" ON public.mission_applications
  FOR UPDATE USING (public.is_dm());
