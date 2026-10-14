-- karte_objectives.monster[] war für Spieler lesbar, sobald ein Ziel freigeschaltet war (select *).
-- Die Monsterliste liegt jetzt in einer reinen DM-Tabelle. Die alte Spalte bleibt (geleert), damit die
-- App-Version vor diesem Deploy nicht bricht; sie wird nicht mehr gelesen.
CREATE TABLE IF NOT EXISTS public.karte_objective_monster (
  objective_id UUID PRIMARY KEY REFERENCES public.karte_objectives(id) ON DELETE CASCADE,
  monster      TEXT[] NOT NULL DEFAULT '{}'
);
ALTER TABLE public.karte_objective_monster ENABLE ROW LEVEL SECURITY;
CREATE POLICY "dm all" ON public.karte_objective_monster FOR ALL
  USING (public.is_dm()) WITH CHECK (public.is_dm());
GRANT SELECT, INSERT, UPDATE, DELETE ON public.karte_objective_monster TO authenticated;

INSERT INTO public.karte_objective_monster (objective_id, monster)
SELECT id, monster FROM public.karte_objectives WHERE cardinality(monster) > 0
ON CONFLICT (objective_id) DO NOTHING;
UPDATE public.karte_objectives SET monster = '{}' WHERE cardinality(monster) > 0;

NOTIFY pgrst, 'reload schema';
