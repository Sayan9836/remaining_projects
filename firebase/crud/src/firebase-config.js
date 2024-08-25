// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBDc421Y6cuohByQVYmNM6M61f70FnLD68",
  authDomain: "first-89866.firebaseapp.com",
  projectId: "first-89866",
  storageBucket: "first-89866.appspot.com",
  messagingSenderId: "752521169257",
  appId: "1:752521169257:web:37acbb6ce5a092cbb315f8",
  measurementId: "G-TMGCLTRLQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);