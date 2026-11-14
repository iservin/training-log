# Changelog

Newest first. The full engineering log lives in the Claude project; this is the short version.

## v27.5.1 (2026-11-13)
Fix: Next on the reps box now also checks the set when you typed nothing and accepted the plan's numbers (the grey suggestion); it uses the planned weight and reps, as the tick does. In v27.5 it only worked when reps had been typed.

## v27.5 (2026-11-13)
Number pad. The unit key is clearer: "Use kg" in grey while off (it was "kg→lb", which read like a setting that was already switching) and a highlighted "In kg ✓" while on. Pressing Next on the reps (or time or distance) box now also checks the set off, as the tick would, and moves on to RIR so you can still add it; Settings → Number pad → "Next checks the set" turns it off.

## v27.4 (2026-11-13)
Exercises tab tidy-up. The ⓘ for Muscle group / Push · Pull · Legs now sits at the start of the muscle chip row (before All), next to the row it explains. The Recovery "Any area" row is gone: the muscle chips already find every drill, so Recovery works like the other categories. Search understands body-part words: "hips", "spine", "wrist", "ankle" and "feet" find the drills tagged with that area and the lifts whose main muscle is there (glutes, adductors, lower back, forearms, calves). Same in the exercise picker.

## v27.3 (2026-11-13)
Number pad unit key: type a weight in kg in an lb setup (or the reverse); it is entered in your unit, rounded to the exercise's step (20 kg → 45 lb). Eleven knee-friendly ("knees over toes") movements: Backward Walk, Backward Sled Drag, Patrick Step, Poliquin Step-Up, ATG Split Squat, Slant-Board Squat, FHL Calf Raise, Standing Hip Flexor Raise, Elephant Walk, Pancake Stretch and Jefferson Curl, plus Prehab tags on Nordics, Reverse Nordics, Sissy Squat, Peterson Step-Up, Seated Good Morning, Reverse Hyperextension, L-Sit, Couch Stretch and Tibialis Raise; search "KOT", "ATG" or "knees over toes". New starter: Knee-friendly legs (2 days, warm-up and cool-down included). ⓘ on Settings groups, the workout report, Finish, Substitute for today, the body log form and Compare; 13 new glossary terms; the welcome screens offer Explain as I go.

## v27.2 (2026-11-13)
Workout fixes and technique tags. The rest timer stops when the cool-down starts and doesn't start after the final set of a workout ("Last set done · Cool down or Finish"). The number pad no longer disappears when the screen redraws, for example when sync arrives around a rest timer. An exercise added mid-workout lands right after the one you're on, and the page scrolls to it. Intensity techniques show as a quiet tag on the Program list, the Start preview and the live card, with a small marker ("Myo", "Pause"…) on the set(s) they apply to; each technique can be set to the last set, the last 2 sets or every set. Cardio pieces such as an incline treadmill walk can go in warm-ups and cool-downs (in minutes, with an optional target), count as conditioning minutes, and can open every suggested warm-up or cool-down from Settings.

## v27.1 (2026-11-12)
Exercise styles in four categories. The style row is now Weight training, Calisthenics, Cardio & conditioning and Recovery; each opens a second row (Muscle building · Powerlifting · Olympic · Strongman; Basics · Skills · Explosive · Jumps & throws; Cardio · Conditioning; Warm-up · Stretch · Release · Prehab), and Powerlifting, Olympic and Strongman open a third with their lifts. The everyday dumbbell, cable and machine lifts, which had no style before, now sit under Muscle building, and every exercise is in at least one category. Same in the exercise picker.

## v27 (2026-11-12)
Easier for beginners. Small ⓘ buttons next to labels across the app (builder, Build a week, Program tab, Block settings, workout type, routine editor, exercise settings, Exercises tab, Analyze and Home cards, Coaching) open a short sheet in plain words; choices like Style, Focus and block formats show every option side by side. Help & glossary lists every term with search (Settings → Help, the Program tab, or See all terms on any sheet). Explain as I go adds a one-line hint under each section (on for new users, off once you have workouts; Settings → Help). Target muscles show their share of sets on the chips (40 / 25 / 20 / 15%) and an estimate of sets per muscle. The Program tab explains folders and blocks and nudges you to set days and dates. Exercise charts get a Block range (opens on it when the current block has 2+ sessions) with a block picker, block-scoped tiles including the change first to last, and markers where each block started on the All view.

## v26.3 (2026-11-12)
Body log and Compare. Log bodyweight, body fat %, waist and age as dated entries (Home Body card, trend chart in Analyze, backup and restore; the newest weight and age feed "How you compare"). Compare two routines (routine ⋯ → Compare with…): sets per muscle with a radar overlay and two heat maps, movement patterns, equipment, rep zones, RIR, techniques, exercise differences and your results. Compare two blocks (folder ⋯ → Compare with…): the week as written plus what you actually did (sessions done vs planned, volume, PRs, estimated 1RM change, average time and quality, body change start to end) and a three-line summary in plain words.

## v26.2 (2026-11-12)
Substitute for today: from an exercise's ⋯ menu, swap a lift for one workout only when the equipment is taken or you are working around something. Suggestions show same exercise on other equipment (with an equivalent starting weight for barbell, dumbbell and Smith), program alternatives and similar lifts, each with last time's numbers and the rep target. The routine is never changed and the original lift's progression does not see the session. Optional: remember that a gym doesn't have a type of equipment, and use the substitute next time too. History says "instead of …". Also: a Discard button beside Finish with two confirmations; the P7 starter now shows its real 6 days; the Exercises tab keeps both chip rows where you scrolled them when you pick a style or muscle.

## v26.1 (2026-11-12)
Programs as files. Share a program as a JSON file (folder ⋯ → Share as file) or a simple CSV with one row per exercise; import either from Program ▾ → Import a file or Settings → Your data. Files never carry workouts, start weights or prior-block numbers. A CSV template and your exercise list can be downloaded for filling in elsewhere. The import preview lists problems row by row and lets you match, create or leave out names that are not in the library. Importing a newer version of a program file you already have offers Update my copy, which brings in the author's changes and keeps your own edits.

## v26 (2026-11-11)
Block settings page (name, description, length in weeks, start date, weekly schedule, program notes). Deload as an opt-in block setting: off by default; when on, a deload week runs about half the working sets at +2 reps in reserve with the same load and no intensity techniques, and is left out of progression. New program menu: Blank program, Starter templates (Push / Pull / Legs, Upper / Lower, Full body, P7 with no weights), Build a week for me, Copy a folder. First-run screens for new people. The public build ships no personal start weights.

## v25.6 (2026-11-11)
For time blocks (rounds against a count-up clock, optional time cap, finishing time as the score, coaching that compares times). AMRAP and For time are now formats in Build one for me.

## v25.5 (2026-11-11)
AMRAP blocks (countdown, Round done, score as rounds + reps, coaching by comparing scores). Sticky headers and footers sit flush with no see-through gap. Settings footer always shown with Close.

## v25.4.2 (2026-11-11)
Warm up first button in the start window and Add cool-down in the finish window, each a separate screen with its own timer. Times are saved on the workout and shown in History.

## v25.4.1 (2026-11-11)
Apply / Save & close in the routine editor and an Apply bar in Settings. Empty warm-up or cool-down prompts to fill automatically, turn off, or keep editing. Suggested drills. Desktop style chip rows wrap.

## v25.4 (2026-11-11)
Mobility: 54 warm-up drills, stretches and releases. Optional warm-up and cool-down blocks per routine with Settings defaults. Drills stay out of volume, progression and Analyze.

## v25.3.1 (2026-11-10)
Hybrid conditioning: tagged lifts such as sleds, carries and swings count in Lifting and also appear under Conditioning.

## v25.3 (2026-11-10)
Recent load: cardio fatigue notes, a stall exception after heavy cardio, a generator switch for tired muscles, Analyze Last 72 h.

## v25.2 (2026-11-10)
Cardio is no longer a muscle group. Style row with sub-chips, cardio muscles from the library, second box on cardio sets, pace and calories per minute history.

## v25.1 (2026-11-09)
Exercise library v6: new About and steps for every movement, 56 new exercises, kind and style tags, duplicates hidden.

## v25 (2026-11-09)
Calories as a tracking metric, Conditioning tag and seven new conditioning movements, Cardio / Conditioning filters, cardio history (pace, calories), Analyze Lifting / Conditioning / Both, generator styles Circuit and Conditioning, block coaching.

## v24.3 (2026-11-09)
Home consistency ranges (1M, 3M, 6M, 1Y) and a calendar with type colours and filter.

## v24.2 (2026-11-09)
Steadier number pad, one Muscles card in Analyze, History month folding, search and type chips.

## v24.1 (2026-11-08)
One-page routine builder, up to four target muscles, results page with exercise info.

## v24 (2026-11-06)
Blocks: circuit, intervals, EMOM and steady-state, with scores in the report.

Earlier versions (v23 and before): see the build log in the Claude project.
