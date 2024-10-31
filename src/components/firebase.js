// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// const API_Key= process.env.REACT_APP_FIREBASE_API_KEY

const API_Key = import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_Key,
  authDomain: "golden-stars-17849.firebaseapp.com",
  projectId: "golden-stars-17849",
  storageBucket: "golden-stars-17849.appspot.com",
  messagingSenderId: "277502688382",
  appId: "1:277502688382:web:2c091aefabcf6c20c22c2f",
  measurementId: "G-8H24HSZ2LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getFirestore(app);

const fetchData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "golden"));
    const dataObject = {};
    querySnapshot.forEach((doc) => {
      dataObject[doc.id] = doc.data();
    });

    if (Object.keys(dataObject).length > 0) {
      console.log("Data available:", dataObject);
    } else {
      console.log("No data available");
    }

    return dataObject;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return {};
  }
};

export { db, fetchData };