// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAODfjitacnXPCjigYwvhxS6J-fnVkmrwA",
  authDomain: "find-games-de2cb.firebaseapp.com",
  projectId: "find-games-de2cb",
  storageBucket: "find-games-de2cb.appspot.com",
  messagingSenderId: "416840485971",
  appId: "1:416840485971:web:1bec9939216ed92dfdcaa6",
  measurementId: "G-F4F19KEGLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
