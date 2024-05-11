// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUPvg80tSouosWnzQpTZ26pVTjOvnZbIs",
  authDomain: "vite-contact-90bfa.firebaseapp.com",
  projectId: "vite-contact-90bfa",
  storageBucket: "vite-contact-90bfa.appspot.com",
  messagingSenderId: "26324811833",
  appId: "1:26324811833:web:aad02495a1e14f73b4cde8",
  measurementId: "G-BKPT3LTQ7P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);