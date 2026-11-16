# v29.2: Chart readouts, calendar-style consistency, week start, Shuffle and technique colours

Tag: `v29.2` · 2026-11-15 · covers everything since the last GitHub export (v28.1, 2026-11-14): v28.2, v28.3, v29, v29.1 and v29.2.

## What's new

**Charts you can read with your thumb on them**
- Every chart now has a **readout strip above it**, so nothing floats under your finger. Drag along the chart (or the date axis under it) to scrub, release to keep the point, ✕ to clear.
- **Exercise chart:** date, the set behind the number (weight × reps and estimated 1RM), the change from the previous session, and Past record.
- **Home → Consistency, 6M and 1Y:** tap a week for its workouts, average session length and working sets, with **Open in calendar**.
- **Analyze → Session time:** tap a session for its minutes against your target and its working sets, with **Open report**.
- **Analyze → Workout types:** tap a month for its workouts, average session and the split between types.
- **Analyze → Body trend:** tap a point for the value, the change since the last entry and over 30 days.

**Calendar-style consistency and a choice of week start**
- Home → Consistency (1M and 3M) now reads like a calendar: one row per week, one column per weekday, month names down the side. Tap a day for its report.
- **Settings → Units → Week starts on:** Monday (the default) or Sunday. It applies to the grid, the calendar, This week, streaks, Analyze Week and weekly volume. Block and deload weeks are not affected.

**Built routines**
- The results page now has **Edit answers · Regenerate · Report** on the top row and **Save & fine-tune · Start now** below, with a ← back arrow at the top.
- **Report** shows the routine on its own (muscle radar, front and back body map, sets per muscle, time, rep zones, RIR) and **Against your block**: your current block's week with and without the routine, the extra sets and minutes, and which exercises it shares with your existing routines.

**Logging**
- **Next on a checked set** now walks that set's own boxes (weight → reps → RIR) before moving on.
- The number pad's unit key works on **distance** too: "Use mi" on a km box, "Use yd" on a metre box, and back.
- **Shuffle** for warm-up and cool-down drills, in the routine editor and during a workout. It draws from the best matches for the day's lifts, avoids what you did recently, and keeps drills you've already started. The automatic suggestion stays put until you press it.
- **Technique tags** read MYO, DROP, RP, PART, PAUSE, NEG, MECH, TEMPO and HOLD, each in its own colour, and the sets they apply to show a small coloured initial chip (M, D, R, P, N, T, H) on the set number. Tap a tag to see what it means.

## Fixes
- **Full-screen sheets** (workout report, routine builder and its results, exercise sheet) now share one layout sized to the visible screen, which re-measures after the browser bar or keyboard moves, so footers stay on the bottom edge.

## Update notes
- Your workouts stay on the device. Export a backup from Settings first if you want a copy.
- Existing programs and settings are unchanged. Week start defaults to Monday.
- To update: replace `index.html` and `sw.js` in the repository, commit, then close and reopen the app once with a connection.
- Tested in Chromium (49 automated suites, all passing). Not yet tried on a real iPhone, so the footer fix in particular is worth a look on a phone.
