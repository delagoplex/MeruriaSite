CREATE TABLE public.recipe_reveals (
  recipe_id  UUID NOT NULL REFERENCES public.recipes(id) ON DELETE CASCADE,
  player_id  UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  revealed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (recipe_id, player_id)
);

ALTER TABLE public.recipe_reveals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert own" ON public.recipe_reveals
  FOR INSERT WITH CHECK (auth.uid() = player_id);

CREATE POLICY "select own or dm" ON public.recipe_reveals
  FOR SELECT USING (auth.uid() = player_id OR public.is_dm());

GRANT SELECT, INSERT ON public.recipe_reveals TO authenticated;
