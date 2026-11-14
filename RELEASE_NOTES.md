# v27.5.1: Programs you can share, body log and compare, beginner help, and a smarter workout screen

Tag: `v27.5.1` · 2026-11-13 · covers everything since the last GitHub export (v25.5, 2026-11-11): v25.6, v26, v26.1, v26.2, v26.3, v27, v27.1, v27.2, v27.3, v27.4, v27.5 and v27.5.1.

## What's new

**Programs for anyone, not just one block**
- A new program menu: Blank program, Starter templates (Push / Pull / Legs, Upper / Lower, Full body, P7 with no weights, and a Knee-friendly legs program), Build a week for me, or Copy a folder.
- A Block settings page: name, description, length in weeks, start date, weekly schedule and notes. Deloads are opt-in: turn them on and a deload week runs about half the working sets, two reps further from failure, at the same load.
- Share a program as a file (JSON, or a simple CSV with one row per exercise) and import either from Program ▾ → Import a file. Files never carry workouts or start weights. Importing a newer version of a program you already have offers Update my copy, which keeps your own edits. A CSV template and your exercise list can be downloaded for filling in elsewhere.
- First-run screens for new people, with no personal start weights in the public build.
- For time blocks (rounds against a count-up clock with an optional cap; the finishing time is the score) join Circuit, Intervals, EMOM and AMRAP.

**Easier for beginners**
- Small ⓘ buttons next to labels across the app open a short plain-words sheet. Where the label is a choice (Style, Focus, block formats), the sheet shows every option side by side.
- Help & glossary (Settings → Help, or See all terms on any sheet) lists every term with search. Explain as I go adds a one-line hint under each section; it is on for new users and off once you have a few workouts.
- Folders and blocks are explained on the Program tab, with a nudge to set days and a start date.
- Target muscles show their share of sets as you tap them (for example 40 / 25 / 20 / 15%) with an estimate of sets per muscle.
- Exercise styles are grouped into four categories: Weight training, Calisthenics, Cardio & conditioning and Recovery. Each opens a second row (Muscle building, Powerlifting, Olympic, Strongman; Basics, Skills, Explosive, Jumps & throws; Cardio, Conditioning; Warm-up, Stretch, Release, Prehab). Every exercise is in at least one category.
- The Exercises tab puts the ⓘ at the start of the muscle row, and search understands body-part words ("hips", "spine", "wrist", "ankle", "feet").

**A smarter workout screen**
- Substitute for today: swap a lift for one workout only when the equipment is taken, with an equivalent starting weight on other equipment. The routine and the original lift's progression are untouched.
- Intensity techniques (Myo-Reps, Drop Set, Pause and more) show as a quiet tag on the routine list, the start preview and the live card, with a small marker on the set or sets they apply to.
- Number pad: a unit key ("Use kg" in an lb setup, "In kg ✓" when on) types a weight in the other unit, rounded to the exercise's step. Next on the reps box checks the set off (using the plan's numbers if you typed nothing) and moves on to RIR; Settings → Number pad turns this off.
- Cardio, such as an incline treadmill walk, can go in warm-ups and cool-downs, counts as conditioning minutes, and can open every suggested warm-up or cool-down.
- An exercise added mid-workout lands right after the one you're on.
- A Discard button beside Finish, with two confirmations.

**Body log and Compare**
- Log bodyweight, body fat %, waist and age (a Home card, a trend chart in Analyze, included in backup and restore). The newest weight and age feed "How you compare".
- Compare two routines (sets per muscle with a radar overlay and two heat maps, movement patterns, equipment, rep zones, RIR, techniques, exercise differences, your results) or two blocks (the week as written plus what you actually did, with a three-line summary).
- Exercise charts get a Block range with a block picker, block-scoped tiles including the change from first session to last, and markers where each block started on the All view.

**Exercise library (640 shown)**
- Eleven new knees-over-toes movements (Backward Walk, Backward Sled Drag, Patrick Step, Poliquin Step-Up, ATG Split Squat, Slant-Board Squat, FHL Calf Raise, Standing Hip Flexor Raise, Elephant Walk, Pancake Stretch, Jefferson Curl) and Prehab tags on Nordics, Reverse Nordics, Sissy Squat, Peterson Step-Up, Couch Stretch and others. Search "KOT" or "ATG".

## Fixes
- The rest timer stops when the cool-down starts, and no rest starts after the final set of a workout.
- The number pad no longer disappears when the screen redraws around a rest timer or a sync.
- Workout dates and block ends are now correct across the November daylight-saving change.
- Number pad Next now also checks the set when you accepted the plan's numbers (fixed in v27.5.1).

## Update notes
- Your workouts stay on the device. Export a backup from Settings first if you want a copy.
- To update: replace `index.html` and `sw.js` in the repository, commit, then close and reopen the app once with a connection.
- Tested in Chromium (42 automated suites, all passing). Not yet tried on a real iPhone.
