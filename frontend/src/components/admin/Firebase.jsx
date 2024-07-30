// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKEXiZGJEUjr3_Bib2UsxCT-sZrMQIGak",
  authDomain: "upload-image-152db.firebaseapp.com",
  projectId: "upload-image-152db",
  storageBucket: "upload-image-152db.appspot.com",
  messagingSenderId: "625457071259",
  appId: "1:625457071259:web:42ce232e63441f1fcd723e"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
