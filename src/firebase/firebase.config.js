// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHaUFduf5Dbyo0ny0s5Qm4nJxk8_NztKI",
  authDomain: "moha-milon-f6a3b.firebaseapp.com",
  projectId: "moha-milon-f6a3b",
  storageBucket: "moha-milon-f6a3b.appspot.com",
  messagingSenderId: "444464814016",
  appId: "1:444464814016:web:a84cba510a98fdf2e65a25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;