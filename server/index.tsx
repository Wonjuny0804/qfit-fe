// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1vEmaBfDWHKevbTdX5zplOASiDmBP9xc",
  authDomain: "qfit-44758.firebaseapp.com",
  projectId: "qfit-44758",
  storageBucket: "qfit-44758.appspot.com",
  messagingSenderId: "451155528555",
  appId: "1:451155528555:web:ee85ee15fb7aa0ab185a2e",
  measurementId: "G-8G0FPPD2YR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
