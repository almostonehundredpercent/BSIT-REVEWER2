import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAK4b4F3jm5ud-Ghf1Dfn_gNxv75aKqSLk",
  authDomain: "nigga--reviewer.firebaseapp.com",
  projectId: "nigga--reviewer",
  storageBucket: "nigga--reviewer.firebasestorage.app",
  messagingSenderId: "969845221972",
  appId: "1:969845221972:web:817d4258caa0ff377f1bc1",
  measurementId: "G-NV5PLBX2CS"
};

export const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export const auth = getAuth(app);
export const db = getFirestore(app);

/* Auto login */
export async function initAuth() {
  if (!auth.currentUser) {
    await signInAnonymously(auth);
  }
}

window.firebaseAuth = auth;
window.firebaseDb = db;
window.initAuth = initAuth;