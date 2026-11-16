# Changelog

Newest first. The full engineering log lives in the Claude project; this is the short version.

## v29.2 (2026-11-15)
**Shuffle for warm-ups and cool-downs.** A Shuffle button in the routine editor's warm-up and cool-down blocks, and on the warm-up / cool-down screen during a workout, redraws the drills from the best matches for the lifts (never more than two per body area, leaning away from drills in your last few sessions, and different from the ones showing). Saved blocks never change by themselves, and the automatic suggestion stays the same until you Shuffle. During a workout, drills with sets already done stay. **Technique markers.** Technique tags now read in short caps (MYO, DROP, RP, PART, PAUSE, NEG, MECH, TEMPO, HOLD), each in its own colour, in the workout, the routine list and the Start preview; set rows show a small coloured initial chip (M, D, R, P, N, T, H) on the set number, in the same colour as the tag, on the sets that technique applies to. Myo-reps and mechanical drop (both M) and pause and partials (both P) differ by colour. Tapping a tag explains it. Colours are checked for contrast in light and dark mode.

## v29.1 (2026-11-14)
Small fixes. **Next on a checked set** now walks that set's own boxes (weight → reps → RIR) before moving to the next unchecked set; it used to skip them. The number pad's **unit key works on distance boxes**: "Use mi" on a km box (and the reverse), "Use yd" on a metre box (and the reverse); km and mi convert to two decimals, m and yd to whole numbers. **Full-screen sheets stay on the bottom edge**: the workout report, the routine builder and its results page, the exercise sheet and the rest now share one shell (`fullShell`) that is sized from the visible screen height (`--apph`), re-measured on resize, rotation, coming back to the app and keyboard close, so the footer can no longer be left floating above the edge. New test suite e2e49 checks every full-screen sheet at several screen sizes, including after a stale height.

## v29 (2026-11-14)
One readout strip for every chart. A strip sits above the chart and shows the selected point or bar, so your thumb never covers it. Drag along the chart (or the date axis under it) to scrub, tap to pin, ✕ to clear. **Exercise chart**: date, weight × reps, est. 1RM, change vs the previous session, and "Past record". **Consistency 6M/1Y**: tap a week for its workouts, average session minutes and working sets, with **Open in calendar**. **Analyze → Session time**: the session's minutes against your target and working sets, with **Open report**. **Workout types** (monthly): workouts, average session and the split (top three plus other). **Body trend**: value, change since the previous entry and over 30 days.

## v28.3 (2026-11-14)
Results page footer: top row **Edit answers · Regenerate · Report**, bottom row **Save & fine-tune · Start now** (the ← back arrow stays; the summary line is plain text). Home → Consistency 1M/3M is now a calendar grid: one row per week, one column per weekday, month names down the side. New **Settings → Units → Week starts on** (Monday default, or Sunday); it applies to the grid, the calendar, This week, streaks, Analyze Week and volume. Block and deload weeks are unaffected. New test suite e2e47.

## v28.2 (2026-11-14)
Built-routine results page. "Change answers" is now **Edit answers**, the top button is a plain ← back arrow, and "Save & edit" is **Save & fine-tune** (saves, then opens the routine editor). A **Report** button in the summary line opens a mini report for the routine on screen: radar and front/back body map, sets per muscle group, the basics (time, exercises, working sets, warm-ups, rep zones, RIR), and **Against your block**, which shows your current block's week with and without this routine (working sets, minutes, sets per muscle, radar, body maps) plus the exercises it shares with each routine already in the block. It follows Swap, Remove and Add. New test suite e2e46.

## v28.1 (2026-11-13)
A short tour after the welcome screens: six steps on the real screens (Today, Program, Analyze, History, Exercises, Settings and help), with Back, Skip and Escape. Replay it from Settings → Help → Show the tour. The first workout shows a card on how logging works (boxes, Next checks the set, rest timer, Finish), once.

## v28 (2026-11-13)
Routine builder rework. Pick a split first (Push · Pull · Legs, Upper · Lower, Full body, Arnold split, Body part, or Individual muscles), then the day, then up to two of that day's muscles to emphasise; the day stays the day. Every Build is a fresh draw: Mix and New lean away from the routines it built for you recently, New also from your log and your programs, and Regenerate changes at least half the routine. Calisthenics progressions join the builder. New Add-ons: calisthenics (mixed into the lifts, or a block at the start or end), a core finisher (three-move circuit) and a conditioning finisher (intervals, EMOM, AMRAP or for time, 5–15 min), alongside cardio. A built 6-day week no longer repeats its first Push day as its second.

## v27.6 (2026-11-13)
The GitHub (public) copy starts with an empty program and a "Pick a program" card on Today instead of P7. The P7 template is now "Advanced PPL · 6-day", with no gym or personal names. The builder's Build button and the results page's buttons are a solid footer on the bottom edge. Swap in a built routine has "Choose any exercise…" (the library, opened on that muscle), and the results page has "Add an exercise".

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
