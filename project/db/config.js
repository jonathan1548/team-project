
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDeh6xVufy4Qz6fOpnX6PzBHoLpNp_BLkQ",
  authDomain: "task1-4ff11.firebaseapp.com",
  databaseURL: "https://task1-4ff11-default-rtdb.firebaseio.com",
  projectId: "task1-4ff11",
  storageBucket: "task1-4ff11.appspot.com",
  messagingSenderId: "552415800796",
  appId: "1:552415800796:web:f11bcf66ed0161ede6b319",
  measurementId: "G-L62PXDWQ0B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
