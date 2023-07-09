// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHmKoGRQ-i3nk4LBqxfBN0baG2jbU97Us",
  authDomain: "restaurant-a0a27.firebaseapp.com",
  projectId: "restaurant-a0a27",
  storageBucket: "restaurant-a0a27.appspot.com",
  messagingSenderId: "726857983333",
  appId: "1:726857983333:web:d58b205fe6e9b03bd9ad8c",
  measurementId: "G-7YYF7R18V9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
