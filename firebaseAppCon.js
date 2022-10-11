// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-BYINZLygMMdMr4cNgu2xj2ziPte0tJ8",
  authDomain: "web-scraper-178cb.firebaseapp.com",
  projectId: "web-scraper-178cb",
  storageBucket: "web-scraper-178cb.appspot.com",
  messagingSenderId: "667376932808",
  appId: "1:667376932808:web:a885029ec9fa08496e92fd",
  measurementId: "G-CJTSGP13HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);