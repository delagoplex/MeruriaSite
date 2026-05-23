CREATE TABLE public.roll_tokens (
  code        TEXT PRIMARY KEY,
  created_by  UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  used_by     UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  used_at     TIMESTAMPTZ,
  note        TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.roll_tokens TO authenticated;
ALTER TABLE public.roll_tokens ENABLE ROW LEVEL SECURITY;

-- DM: full access
CREATE POLICY "dm all" ON public.roll_tokens
  FOR ALL USING (public.is_dm());

-- Players: can see a token only if it's unredeemed or they redeemed it
-- (prevents enumerating all codes — player must know the code to SELECT it)
CREATE POLICY "player select" ON public.roll_tokens
  FOR SELECT TO authenticated
  USING (used_by IS NULL OR used_by = auth.uid());

-- Players: can redeem (UPDATE) an unclaimed token, setting used_by to themselves
CREATE POLICY "player redeem" ON public.roll_tokens
  FOR UPDATE TO authenticated
  USING (used_by IS NULL)
  WITH CHECK (auth.uid() = used_by);
