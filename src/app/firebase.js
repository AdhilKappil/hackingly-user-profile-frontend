// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsDeypOFkSsRgavFDrOvI7HifnS01DcTY",
  authDomain: "hackingly-user-profile.firebaseapp.com",
  projectId: "hackingly-user-profile",
  storageBucket: "hackingly-user-profile.appspot.com",
  messagingSenderId: "1052243900720",
  appId: "1:1052243900720:web:8cba9e98f57331d50a30f5",
  measurementId: "G-SGHYETZQLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);