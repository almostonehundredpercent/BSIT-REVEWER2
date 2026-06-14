# BSIT Phase 2 Proficiency Exam Reviewer

An interactive quiz web app for reviewing the **2026 BSIT Proficiency Exam (Phase 2)** material from the Polytechnic Institute of Tabaco. Covers Data Structures & Algorithms, OOP, Web Systems, Information Management (Databases), Computer Graphics, Integrative Programming (PHP), and Computer Networking.

Built with plain HTML, CSS, and JavaScript — no frameworks, no build step. Works offline once loaded.

## Features

- **151 multiple choice questions** across 7 topics, each with an explanation
- **Quiz mode** — go through questions at your own pace with instant feedback
- **Timed challenge** — 60-second sprint, answer as many as you can
- **Flashcards** — flip cards to memorize key concepts
- **Sequential or shuffled** question order
- **Review missed questions** after finishing a quiz
- **High scores** saved locally per topic and mode (localStorage)
- **🌐 Global leaderboard** — everyone's scores shown together (requires a one-time Firebase setup, see below)
- **Dark mode** toggle (also respects system preference)
- Fully responsive — works great on phones

## Live demo

Once deployed to GitHub Pages, your reviewer will be live at:

```
https://<your-username>.github.io/<repo-name>/
```

## Setting up the global leaderboard (optional, ~5 minutes)

By default, high scores are only saved on each person's own device. To make a shared leaderboard where everyone's scores appear together, connect a free Firebase database:

1. Go to **[console.firebase.google.com](https://console.firebase.google.com)** and sign in with any Google account.
2. Click **Add project**, give it any name (e.g. "bsit-reviewer"), and finish creating it. You can skip/disable Google Analytics.
3. In your new project, click the **`</>`** (Web) icon to add a web app. Give it a nickname and click **Register app**.
4. Firebase will show you a `firebaseConfig` object with your keys. Copy it.
5. Open **`firebase-config.js`** in this project and paste your values in, replacing the placeholders (`YOUR_API_KEY`, `YOUR_PROJECT`, etc.).
6. Back in the Firebase console, go to **Build → Realtime Database → Create Database**. Choose any location and start in **Test mode**.
7. (Recommended) In the **Rules** tab of Realtime Database, paste the rules shown in the comments at the bottom of `firebase-config.js` — this lets the leaderboard keep working after the 30-day test mode window without letting people delete others' scores.
8. Push the updated `firebase-config.js` to your GitHub repo. The leaderboard will now work for everyone visiting the site!

If you skip this setup, the site works exactly the same — the "View global leaderboard" button will just show a message that it isn't configured yet, and personal high scores still save locally.

## How to publish to GitHub Pages

1. Create a new repository on GitHub (e.g. `bsit-phase2-reviewer`).
2. Upload all the files in this folder (`index.html`, `style.css`, `app.js`, `questions.js`, `flashcards.js`, `firebase-config.js`) to the repository root.
3. Go to your repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`.
5. Choose the `main` branch and `/ (root)` folder, then click **Save**.
6. Wait a minute or two — GitHub will give you a live URL. Share that link with your classmates!

## Adding more questions

All questions live in `questions.js` and flashcards live in `flashcards.js`. Each question follows this format:

```js
{
  t: 'dsa',                  // topic id: dsa, oop, web, db, gfx, php, net
  q: 'Question text here?',
  c: ['Choice A', 'Choice B', 'Choice C', 'Choice D'],
  a: 2,                       // index of correct answer (0-based)
  e: 'Explanation shown after answering.'
}
```

For questions that show a code snippet, add `code: true` and put the code on new lines after the first line of `q` (separated by `\n`).

## File structure

```
bsit-reviewer/
├── index.html          Main page structure
├── style.css           Styling (light + dark mode)
├── app.js              App logic — quiz, timer, flashcards, scoring, leaderboard
├── questions.js        Question bank (151 questions, 7 topics)
├── flashcards.js       Flashcard data
└── firebase-config.js  Global leaderboard configuration (optional)
```

## License

Free to use and modify for study purposes. Good luck on your exam!
