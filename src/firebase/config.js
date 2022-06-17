// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTWABJ7zSUwRPx64L7KUY_WTCvp6b30oQ",
  authDomain: "mariano-soto-coderhouse-7c135.firebaseapp.com",
  projectId: "mariano-soto-coderhouse-7c135",
  storageBucket: "mariano-soto-coderhouse-7c135.appspot.com",
  messagingSenderId: "761930738905",
  appId: "1:761930738905:web:0f2a4394a0cb60dea062c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// referencia a la base de datos de firebase
export const db = getFirestore(app)