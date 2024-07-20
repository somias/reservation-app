// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6oDr4y67dFXHdHCO1BDkWTW8CIXEwK-o",
  authDomain: "vejas-reservation.firebaseapp.com",
  projectId: "vejas-reservation",
  storageBucket: "vejas-reservation.appspot.com",
  messagingSenderId: "199095651860",
  appId: "1:199095651860:web:d0181196a3c86a9b336101",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
