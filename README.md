# Campus perceived-safety poll

A small live poll for the Campus Road Safety Awareness Session (IIT Kharagpur, 12 October 2026).

- `vote.html` is what the audience opens on their phones (from the QR codes on the slides).
- `index.html` is the presenter page: QR code and live results for each scenario, plus an "All results" table.
- Votes are stored in a Google Sheet through a short Google Apps Script (`apps-script.gs`).

## Setup (about 10 minutes)

### 1. Backend: Google Sheet + Apps Script
1. Create a new Google Sheet (any name, e.g. "Campus poll votes").
2. In the Sheet: **Extensions > Apps Script**. Delete the sample code, paste the whole of `apps-script.gs`, and click **Save**.
3. Click **Deploy > New deployment**. Under "Select type", choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, allow the permissions it asks for, and copy the **Web app URL** (it ends in `/exec`).
5. Check it: open that URL in a browser. You should see `{"ok":true,"service":"campus-poll"}`.

### 2. Front end: GitHub Pages
1. On GitHub, create a new **public** repository named exactly **campus-poll** (the QR codes in the slides point to `https://sesi1397.github.io/campus-poll/`).
2. Upload every file and the `img` folder from this folder (Add file > Upload files, drag them in, Commit).
3. Open `config.js` on GitHub, click the pencil icon, replace `PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE` with the Web app URL from step 1.4, and commit.
4. **Settings > Pages**: Source "Deploy from a branch", Branch **main**, folder **/ (root)**, Save. After about a minute the site is live at `https://sesi1397.github.io/campus-poll/`.

### 3. Test before the session
1. On a phone that is not signed in to anything, scan the QR on slide 4. Answer P1 to P3 and rate S01.
2. Open `https://sesi1397.github.io/campus-poll/` on the laptop, click **Show results**: the vote should appear within about 5 seconds.
3. Delete your test rows from the "votes" tab of the Sheet.

## During the session
- Each scenario slide has its own QR code. After rating, phones show **Next: S02** etc., so most people only scan once.
- Keep the presenter page open in another tab. Results are hidden by default so they do not influence ratings; click **Show results** after the rating time. Arrow keys move between scenarios.
- Each phone keeps an anonymous ID, so a person's daylight and after-dark ratings can be paired. If someone submits twice, only their latest rating counts in the results.

## After the session
All raw ratings are in the Sheet ("votes" tab): timestamp, anonymous respondent ID, item code, rating (1 to 5), gender, role, usual mode. Download it via File > Download > CSV.

## Limits
- Google Apps Script handles about 30 requests at the same moment. Phones retry automatically if the backend is busy; with a few hundred people rating over 30 to 60 seconds this is fine.
- The poll is open to anyone with the link and is meant for a live session, not as a secure survey.
- If you change `apps-script.gs` later, use **Deploy > Manage deployments > Edit > New version**, so the URL stays the same.
