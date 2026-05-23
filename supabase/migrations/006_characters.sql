CREATE TABLE public.characters (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id   UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name       TEXT NOT NULL DEFAULT 'Unbenannt',
  race       TEXT,
  class      TEXT,
  division   TEXT,
  char_data  JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-update updated_at on every row change
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END $$;

CREATE TRIGGER characters_updated_at
  BEFORE UPDATE ON public.characters
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Auto-set owner_id to the inserting user so the client never needs to send it
CREATE FUNCTION public.set_char_owner()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN NEW.owner_id = auth.uid(); RETURN NEW; END $$;

CREATE TRIGGER characters_set_owner
  BEFORE INSERT ON public.characters
  FOR EACH ROW EXECUTE FUNCTION public.set_char_owner();

-- Grant table access to authenticated users (required for RLS to evaluate)
GRANT SELECT, INSERT, UPDATE, DELETE ON public.characters TO authenticated;

-- RLS: each user sees and edits only their own characters; DM can read all
ALTER TABLE public.characters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "owner select" ON public.characters FOR SELECT USING      (auth.uid() = owner_id);
CREATE POLICY "owner insert" ON public.characters FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "owner update" ON public.characters FOR UPDATE USING      (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "owner delete" ON public.characters FOR DELETE USING      (auth.uid() = owner_id);
CREATE POLICY "dm reads all" ON public.characters FOR SELECT USING      (public.is_dm());
