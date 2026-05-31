-- Unlock thresholds per category × rarity — cumulative units needed to reach each stage.
-- Stage 1 is reached at count >= 1 (first delivery, no threshold needed).
-- Values derived from XP table (per-stage costs summed cumulatively, starting from 1).
--
-- Current 4 rarities map to JSON XP tiers:
--   gewoehnlich → gewoehnlich  (150/250/600/1500/3500/8000/18100 per stage)
--   selten      → ungewoehnlich(  60/150/360/ 930/2100/4800/10900 per stage)
--   sehrselten  → selten       (  24/ 66/140/ 360/ 840/1920/ 4650 per stage)
--   einzigartig → sehr_selten  (   4/ 10/ 26/  60/ 140/ 320/  940 per stage)
-- (legendaer tier reserved for future 5th rarity)

CREATE TABLE public.kollektikon_thresholds (
  cat      TEXT NOT NULL,
  rarity   TEXT NOT NULL,  -- 'gewoehnlich' | 'selten' | 'sehrselten' | 'einzigartig'
  stufe_2  INTEGER NOT NULL DEFAULT 61,
  stufe_3  INTEGER NOT NULL DEFAULT 211,
  stufe_4  INTEGER NOT NULL DEFAULT 571,
  stufe_5  INTEGER NOT NULL DEFAULT 1501,
  stufe_6  INTEGER NOT NULL DEFAULT 3601,
  stufe_7  INTEGER NOT NULL DEFAULT 8401,
  stufe_8  INTEGER NOT NULL DEFAULT 19301,
  PRIMARY KEY (cat, rarity)
);

ALTER TABLE public.kollektikon_thresholds ENABLE ROW LEVEL SECURITY;
CREATE POLICY "auth read" ON public.kollektikon_thresholds FOR SELECT TO authenticated USING (true);
CREATE POLICY "dm write"  ON public.kollektikon_thresholds FOR ALL  USING (public.is_dm());

GRANT SELECT                        ON public.kollektikon_thresholds TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE        ON public.kollektikon_thresholds TO authenticated;

-- Seed default thresholds for all 5 categories × 4 rarities
INSERT INTO public.kollektikon_thresholds (cat, rarity, stufe_2, stufe_3, stufe_4, stufe_5, stufe_6, stufe_7, stufe_8) VALUES
  ('fische',     'gewoehnlich',    151,   401,  1001,  2501,  6001, 14001, 32101),
  ('fische',     'selten',          61,   211,   571,  1501,  3601,  8401, 19301),
  ('fische',     'sehrselten',      25,    91,   231,   591,  1431,  3351,  8001),
  ('fische',     'einzigartig',      5,    15,    41,   101,   241,   561,  1501),

  ('insekten',   'gewoehnlich',    151,   401,  1001,  2501,  6001, 14001, 32101),
  ('insekten',   'selten',          61,   211,   571,  1501,  3601,  8401, 19301),
  ('insekten',   'sehrselten',      25,    91,   231,   591,  1431,  3351,  8001),
  ('insekten',   'einzigartig',      5,    15,    41,   101,   241,   561,  1501),

  ('pflanzen',   'gewoehnlich',    151,   401,  1001,  2501,  6001, 14001, 32101),
  ('pflanzen',   'selten',          61,   211,   571,  1501,  3601,  8401, 19301),
  ('pflanzen',   'sehrselten',      25,    91,   231,   591,  1431,  3351,  8001),
  ('pflanzen',   'einzigartig',      5,    15,    41,   101,   241,   561,  1501),

  ('mineralien', 'gewoehnlich',    151,   401,  1001,  2501,  6001, 14001, 32101),
  ('mineralien', 'selten',          61,   211,   571,  1501,  3601,  8401, 19301),
  ('mineralien', 'sehrselten',      25,    91,   231,   591,  1431,  3351,  8001),
  ('mineralien', 'einzigartig',      5,    15,    41,   101,   241,   561,  1501),

  ('kreaturen',  'gewoehnlich',    151,   401,  1001,  2501,  6001, 14001, 32101),
  ('kreaturen',  'selten',          61,   211,   571,  1501,  3601,  8401, 19301),
  ('kreaturen',  'sehrselten',      25,    91,   231,   591,  1431,  3351,  8001),
  ('kreaturen',  'einzigartig',      5,    15,    41,   101,   241,   561,  1501);
