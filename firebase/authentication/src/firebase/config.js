// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDvgIzR9qepGvC1EZnDoCNfXgK2y3sRoMQ",
  authDomain: "authentication-60580.firebaseapp.com",
  projectId: "authentication-60580",
  storageBucket: "authentication-60580.appspot.com",
  messagingSenderId: "967589819226",
  appId: "1:967589819226:web:f66b9ed1296e2c611cb963",
  measurementId: "G-7KERBVNKVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app);