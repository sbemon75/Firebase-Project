// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASBC8NXDJ5tGnRQjGhc3fetyn6aQQIVoM",
  authDomain: "simple-firebase-af56d.firebaseapp.com",
  projectId: "simple-firebase-af56d",
  storageBucket: "simple-firebase-af56d.firebasestorage.app",
  messagingSenderId: "631054670787",
  appId: "1:631054670787:web:af5748f0c28f944fa47b76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;