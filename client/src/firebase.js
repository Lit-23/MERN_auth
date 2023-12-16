// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-5b2b4.firebaseapp.com",
  projectId: "mern-auth-5b2b4",
  storageBucket: "mern-auth-5b2b4.appspot.com",
  messagingSenderId: "127942111266",
  appId: "1:127942111266:web:5b19c940e8916269bf1a7b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);