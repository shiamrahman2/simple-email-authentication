// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Danger Don't Share In Public

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrfl1Mn2D1o0i6srzDk3CMt4tr9KgD9QQ",
  authDomain: "simple-email-authenticat-f336a.firebaseapp.com",
  projectId: "simple-email-authenticat-f336a",
  storageBucket: "simple-email-authenticat-f336a.firebasestorage.app",
  messagingSenderId: "769116518759",
  appId: "1:769116518759:web:9cef338701d9143bdb17c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);