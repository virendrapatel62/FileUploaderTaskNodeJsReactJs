// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtik0iFCFcrn5Vl7xolUZF6_yrA0IYE9Y",
  authDomain: "fileuploaderauthproject.firebaseapp.com",
  projectId: "fileuploaderauthproject",
  storageBucket: "fileuploaderauthproject.appspot.com",
  messagingSenderId: "486706294154",
  appId: "1:486706294154:web:d5d3d1e092878979beac73",
  measurementId: "G-N83EYV5V01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log({ app });
