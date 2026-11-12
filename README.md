# Servin' the Gains

A set-by-set training log with progression coaching. This folder is the whole app, ready for GitHub Pages.

## Put it online (about 5 minutes)
1. On github.com, create a new repository (for example `servin-the-gains`).
2. Click **Add file → Upload files**, drag in everything from this folder (`index.html`, `manifest.webmanifest`, `sw.js`, the `icons` folder, `.nojekyll`), and commit.
3. Open **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch **main**, folder **/ (root)**, and Save.
4. After about a minute your app is at `https://<your-username>.github.io/servin-the-gains/`.

## Install it like an app
- **iPhone:** open the link in Safari, tap Share, then **Add to Home Screen**.
- **Android:** open it in Chrome, then menu → **Install app**.

## Good to know
- Your workouts save on the device. They do not sync to the Claude version. Move them with Settings → Backup (export) and Restore.
- Each phone or browser keeps its own log.
- After the first visit it works offline. When you publish a new `index.html` the app updates itself the next time it is opened with a connection (close and reopen it once if you do not see the change).
- To update: replace `index.html` and `sw.js` in the repository with the new copies and commit.

## Releases
- `RELEASE_NOTES.md` has the title and notes for this version. On GitHub, open **Releases → Draft a new release**, create the tag shown in the notes, use the first line as the release title and paste the rest as the description.
- `CHANGELOG.md` keeps the short history, newest first.
