// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFc5IfpUx_9F_cKUAof9V5gm8_DrNVwKM",
  authDomain: "challenge-87aa5.firebaseapp.com",
  projectId: "challenge-87aa5",
  storageBucket: "challenge-87aa5.appspot.com",
  messagingSenderId: "770646250882",
  appId: "1:770646250882:web:12169beca931e8827aeb9b",
  measurementId: "G-D4K073SYJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);