// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDXqa8Yzzd7h4LceiWHq46jgOWJJoqMvDs",
  authDomain: "photo-platform-75616.firebaseapp.com",
  projectId: "photo-platform-75616",
  storageBucket: "photo-platform-75616.firebasestorage.app",
  messagingSenderId: "537807244046",
  appId: "1:537807244046:web:1c9a2aa2619582c8fe655f",
  measurementId: "G-G3433C51DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)