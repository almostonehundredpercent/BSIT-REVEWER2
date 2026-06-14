// ===================== FIREBASE CONFIGURATION =====================
//
// 1. Go to https://console.firebase.google.com
// 2. Click "Add project" -> give it any name -> finish creating it
//    (you can disable Google Analytics, you don't need it)
// 3. In your project, click the "</>" (Web) icon to add a web app
//    -> give it a nickname -> click "Register app"
// 4. Firebase will show you a config object that looks like the one
//    below. Copy YOUR values and paste them here, replacing the
//    placeholders.
// 5. In the left sidebar, go to "Build" -> "Realtime Database"
//    -> click "Create Database" -> choose a location -> start in
//    "Test mode" (you can lock it down later, see rules below).
//
// That's it! Once this file has your real config, the leaderboard
// will automatically start working.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK4b4F3jm5ud-Ghf1Dfn_gNxv75aKqSLk",
  authDomain: "nigga--reviewer.firebaseapp.com",
  projectId: "nigga--reviewer",
  storageBucket: "nigga--reviewer.firebasestorage.app",
  messagingSenderId: "969845221972",
  appId: "1:969845221972:web:817d4258caa0ff377f1bc1",
  measurementId: "G-NV5PLBX2CS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ===================== RECOMMENDED DATABASE RULES =====================
//
// By default, "Test mode" allows anyone to read/write anything for 30
// days, then locks everything. For a class reviewer, paste these rules
// into Realtime Database -> Rules tab so the leaderboard works forever
// but people can't wipe the whole list:
//
// {
//   "rules": {
//     "leaderboard": {
//       ".read": true,
//       ".write": true,
//       "$entry": {
//         ".validate": "newData.hasChildren(['name','topic','mode','score','total','pct','date'])"
//       }
//     }
//   }
// }

