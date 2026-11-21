# v30.13: New body map, a settings hub, Home cards, new starter programs and reports

Everything since v29.2 (2026-11-15). The app is the same single page; replace `index.html` and `sw.js` in your repository to update.

## Body map and muscles
- **A new body map** in Analyze and the workout report, drawn muscle by muscle. Tap any muscle for its sets and the exercises that worked it. The old flat "Classic" map is gone.
- **21 muscles.** Neck now counts in Traps. **Hip Flexors** is a muscle of its own (the pelvis wedge and the strips down the thighs), so leg raises and knee drives no longer count as Quads.
- **Small muscles count in their main muscle** (rotator cuff in rear delts, serratus in obliques, tibialis in calves). A new **Fine muscles** setting shows them as their own rows and radar axes.
- **A clearer muscle radar:** short labels, coloured group bands (Chest, Shoulders, Back, Legs, Core, Arms) and a caption with the full name and sets when you tap an axis.
- **Analyze opens faster** and the map no longer draws half a figure on first load.

## Settings
- **An iPhone-style Settings hub:** a list of General, Home, Program, Workout, Analyze, Exercises and Data, each with a one-line summary, a sub-page behind it, and a search box. A gear on every tab opens the matching page. Changes show at once and are kept when you tap Apply (Discard puts them back).
- **Heat scale:** choose how many sets a week give full heat (8, 12, 16, 20 or your own number). Each program can have its own.
- **Home cards:** show, hide and reorder the Home cards (drag or arrows), and choose what the Consistency chart opens on.

## Programs
- **Three new starter templates:** Push / Pull / Legs · 3-day, Bro split · 5-day (chest, back, shoulders, legs, arms + core) and a Beginner PPL · 3-day built on machines, cables and dumbbells at an easy 2–3 reps in reserve. The original PPL is now "· 6-day".
- **Avoid list.** A program can keep exercises out of suggestions. The Beginner PPL starts with one (deadlifts, barbell squat and overhead press, behind-the-neck work, upright rows, Olympic lifts and so on). Substitute and the routine builder skip those; if you pick one yourself you get a short note and it still works. Edit it in Block settings.
- **Reports from the Program tab.** A Report item on every program and every routine, and a Report button inside the routine editor (it shows your unsaved changes). The routine report has sets, time, a radar, a body map and every exercise with its targets and your last result. The program report shows each routine, the week on the radar and map, sets per muscle and push / pull / legs balance.

## Analyze
- Where a block has a deload week, the plan on the radar and table is cut by the deload setting so a lighter week doesn't read as behind.

## Fixes
- **Workout report:** tapping a muscle, radar axis or table row no longer jumps to the top.
- **Home block volume** now uses the muscle tag saved with each logged exercise, so renaming a tag or swapping an exercise no longer moves past weeks.
- **Routine builder Time chips:** opening the custom "+" no longer leaves a preset highlighted (same rule for every chip row with a custom entry).

## Update notes
- Your data is untouched. Settings and programs from earlier versions load as before; a custom exercise saved with Neck or Hip Flexors as a fine muscle is converted on load.
- Tested in Chromium, not on a real iPhone. Touch dragging of Home cards has arrow buttons as a fallback.
