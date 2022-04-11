// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAdEy0LtLXrL_9nWz4leY4Ip_QUreGOaZE",
  authDomain: "food-registration.firebaseapp.com",
  projectId: "food-registration",
  storageBucket: "food-registration.appspot.com",
  messagingSenderId: "947727503223",
  appId: "1:947727503223:web:311a7c71c61f3918f19b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export default db;
export { auth };
