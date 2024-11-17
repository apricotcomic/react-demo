// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO-2jrb8RShJKcGN7L1-1AX06Fg2y38vw",
  authDomain: "cats-e6134.firebaseapp.com",
  projectId: "cats-e6134",
  storageBucket: "cats-e6134.firebasestorage.app",
  messagingSenderId: "830807386496",
  appId: "1:830807386496:web:09b5d592e6e3638625b965",
  measurementId: "G-1VD9CS26G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };