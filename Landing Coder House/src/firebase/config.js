// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwu_uX8F95SoVA8qVTb6a_1pqVvrpYzUI",
  authDomain: "tomas-tissera-coder.firebaseapp.com",
  projectId: "tomas-tissera-coder",
  storageBucket: "tomas-tissera-coder.appspot.com",
  messagingSenderId: "628718740699",
  appId: "1:628718740699:web:d9ad9f05975872cc6d98fe",
  measurementId: "G-6K90R9DJCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;