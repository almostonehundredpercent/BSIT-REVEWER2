// ===================== FIREBASE =====================
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  get,
  query,
  limitToLast
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAK4b4F3jm5ud-Ghf1Dfn_gNxv75aKqSLk",
  authDomain: "nigga--reviewer.firebaseapp.com",
  projectId: "nigga--reviewer",
  storageBucket: "nigga--reviewer.firebasestorage.app",
  messagingSenderId: "969845221972",
  appId: "1:969845221972:web:817d4258caa0ff377f1bc1",
  measurementId: "G-NV5PLBX2CS"
};

const app = initializeApp(firebaseConfig);
const fbDb = getDatabase(app);

let fbAvailable = true;

function submitToGlobalLeaderboard(entry) {
  try {
    push(ref(fbDb, "leaderboard"), entry);
  } catch (e) {
    console.error("Could not submit score", e);
  }
}

async function loadGlobalLeaderboard(topic, callback) {
  try {
    const snapshot = await get(
      query(ref(fbDb, "leaderboard"), limitToLast(500))
    );

    const entries = [];

    snapshot.forEach(child => {
      entries.push(child.val());
    });

    let filtered =
      topic === "all"
        ? entries
        : entries.filter(e => e.topic === topic);

    const best = {};

    filtered.forEach(e => {
      const key = `${e.name}_${e.topic}_${e.mode}`;

      if (
        !best[key] ||
        e.pct > best[key].pct ||
        (e.pct === best[key].pct &&
          e.score > best[key].score)
      ) {
        best[key] = e;
      }
    });

    const result = Object.values(best).sort(
      (a, b) => b.pct - a.pct || b.score - a.score
    );

    callback(result);
  } catch (err) {
    console.error(err);
    callback(null);
  }
}

