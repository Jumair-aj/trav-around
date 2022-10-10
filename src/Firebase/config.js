import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDqjdutNnpeWIMBzTEPLgTfogi7Ddq4gBI",
    authDomain: "travel-blog-757dc.firebaseapp.com",
    projectId: "travel-blog-757dc",
    storageBucket: "travel-blog-757dc.appspot.com",
    messagingSenderId: "58285381947",
    appId: "1:58285381947:web:bec4a3aa2de48776323f1e"
};


export default firebase.initializeApp(firebaseConfig);
