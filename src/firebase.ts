import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCQMWAeCYgGBkUcSD2MzdqBLk73XYHvb0",
  authDomain: "mingproject-5639d.firebaseapp.com",
  projectId: "mingproject-5639d",
  storageBucket: "mingproject-5639d.appspot.com",
  messagingSenderId: "279720744040",
  appId: "1:279720744040:web:49e96187fe00555bc697dd",
  measurementId: "G-W11ZY4D9QE"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);