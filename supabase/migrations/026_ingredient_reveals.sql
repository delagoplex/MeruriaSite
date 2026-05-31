CREATE TABLE public.ingredient_reveals (
  player_id      UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  recipe_id      UUID NOT NULL REFERENCES public.recipes(id) ON DELETE CASCADE,
  kollektikon_id TEXT NOT NULL,
  revealed_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (player_id, recipe_id, kollektikon_id)
);

ALTER TABLE public.ingredient_reveals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert own" ON public.ingredient_reveals
  FOR INSERT WITH CHECK (auth.uid() = player_id);

CREATE POLICY "select own" ON public.ingredient_reveals
  FOR SELECT USING (auth.uid() = player_id OR public.is_dm());

GRANT SELECT, INSERT ON public.ingredient_reveals TO authenticated;
