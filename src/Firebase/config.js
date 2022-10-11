// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqjdutNnpeWIMBzTEPLgTfogi7Ddq4gBI",
  authDomain: "travel-blog-757dc.firebaseapp.com",
  projectId: "travel-blog-757dc",
  storageBucket: "travel-blog-757dc.appspot.com",
  messagingSenderId: "58285381947",
  appId: "1:58285381947:web:bec4a3aa2de48776323f1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)