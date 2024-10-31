import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf6K3g_9K56J6FfkdlacwwIHNfXz1cjEI",
  authDomain: "golden-stars-17849.firebaseapp.com",
  projectId: "golden-stars-17849",
  storageBucket: "golden-stars-17849.appspot.com",
  messagingSenderId: "277502688382",
  appId: "1:277502688382:web:2c091aefabcf6c20c22c2f",
  measurementId: "G-8H24HSZ2LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const db = getFirestore(app);

export { app, db }; // Export app and db