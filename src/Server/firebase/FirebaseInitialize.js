import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARqFxhvmcSQOr70NSovCIddtVpJ9iR5aQ",
  authDomain: "a-workspace.firebaseapp.com",
  databaseURL: "http://a-workspace.firebaseio.com",
  projectId: "a-workspace",
  storageBucket: "a-workspace.appspot.com",
  messagingSenderId: "109690768751",
  appId: "1:109690768751:web:552785e5e599ae5c2eec9a",
  measurementId: "G-2LRJ5M6MZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
