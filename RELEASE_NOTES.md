# v25.5: Conditioning blocks, cardio tracking, mobility and AMRAP

Tag: `v25.5` · 2026-11-11 · covers everything since the last GitHub export (v23, 2026-11-06): v24, v24.1, v24.2, v24.3, v25, v25.1, v25.2, v25.3, v25.3.1, v25.4, v25.4.1, v25.4.2 and v25.5.

## What's new

**Conditioning blocks**
- Group exercises into a block: circuit, intervals, EMOM, AMRAP or steady-state. Each has its own logging card: Round done checks a whole round at the planned numbers, with rest guidance, countdowns and a 10-second warning for AMRAP.
- Blocks are scored (rounds, rounds + reps, time) and the report shows a Blocks card with "better / same / down" against the last time. Coaching compares scores and tells you what to try next, with Apply to routine.
- A routine or workout that is mostly block work reads "Conditioning" with its format, for example "Conditioning · AMRAP".

**Cardio and conditioning tracking**
- Calories is a fourth way to track a set, with sensible defaults for the rower, SkiErg, air bike and BikeErg.
- Cardio sets get a second box (distance, minutes or calories, whichever suits the machine). History shows pace, speed and calories per minute.
- Cardio is no longer a muscle group. A Style row (Cardio, Calisthenics, Strength, Olympic, Strongman, Jumps & Plyo and more, with sub-chips) replaces it, and each cardio movement loads the muscles it really works.
- Analyze has a Lifting / Conditioning / Both switch, a Conditioning card, and a Last 72 h period.
- Sleds, carries, swings and similar tagged lifts count once in Both, as lifting, and also appear under Conditioning.
- Recent load: after heavy cardio the app notes which muscles are tired. A missed target within 48 hours of heavy cardio on that lift's main muscle is not counted towards a stall. This is the one progression rule that changed, and it only ever excuses a miss.

**Warm-up, cool-down and mobility**
- 54 new mobility movements (warm-up drills, stretches, releases) in a Mobility style with Warm-up / Stretch / Release sub-chips and a body-area row.
- Routines can have an optional warm-up and cool-down block, with Settings defaults for new routines.
- Warm up first (in the start window) and Add cool-down (in the finish window) each have their own screen and timer, with suggested drills matched to the muscles you are training. Drills never count towards volume, progression or Analyze, and the cool-down is not part of the session duration.

**Exercise library (629 movements)**
- A clearer About and 3 to 6 steps for every movement, 56 new exercises including cardio and calisthenics progressions, kind and style tags, and seven duplicates folded away with their history kept.

**Routine builder**
- One-page builder: Style (Hypertrophy, Strength, Circuit, Conditioning), Time, Focus, and up to four target muscles. A results page with ⓘ, Swap, Remove, Regenerate, Save to folder, Save & edit and Start now.
- "Go easy on muscles tired from recent cardio" switch.

**Home, History and Analyze**
- Consistency card ranges 1M / 3M / 6M / 1Y and a calendar with a dot per workout coloured by type, with a type filter.
- History: month headers fold, search, and workout-type chips with counts.
- Analyze: radar and heat map share one Muscles card.

**Editing**
- Apply and Save & close in the routine editor; Settings has a footer that is always there ("No changes" / Save & close).
- A routine with an empty warm-up or cool-down offers Fill automatically, Turn off, or keep editing.

## Fixes
- Steadier number pad: it stays open between boxes and no longer jumps the page.
- Headers and footers sit flush with no see-through gap on desktop and phone.
- Fixed a page that grew wider than the phone screen (long split-balance numbers, a long "Add a block" button).

## Update notes
- Your workouts stay on the device. Export a backup from Settings first if you want a copy.
- To update: replace `index.html` and `sw.js` in the repository, commit, then close and reopen the app once with a connection.
- Tested in Chromium (30 automated suites, all passing). Not yet tried on a real iPhone.
