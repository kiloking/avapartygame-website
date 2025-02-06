import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCZ9LiQS13FlxZfYNN1cI02GxGxOELdCHE",
  authDomain: "avapartygame.firebaseapp.com",
  databaseURL:
    "https://avapartygame-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "avapartygame",
  storageBucket: "avapartygame.firebasestorage.app",
  messagingSenderId: "972538235681",
  appId: "1:972538235681:web:801c943a726e9260004c60",
  measurementId: "G-P3GE9G8QZ9",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue };
