// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyDGzlupH2x40P117w8wPTyRhOq8dtTkJ_I",
     authDomain: "react-dragon-news-auth-35daf.firebaseapp.com",
     projectId: "react-dragon-news-auth-35daf",
     storageBucket: "react-dragon-news-auth-35daf.appspot.com",
     messagingSenderId: "492797107188",
     appId: "1:492797107188:web:0a5dd02e0c66ffa1f777a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;