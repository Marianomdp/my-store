// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAGf_L1G-7XUGkYlf6p0Q2HHQoF2We27Q",
  authDomain: "ola-congelados.firebaseapp.com",
  projectId: "ola-congelados",
  storageBucket: "ola-congelados.appspot.com",
  messagingSenderId: "545885117158",
  appId: "1:545885117158:web:a96c8a7735a69d2ae17927",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
