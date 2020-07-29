import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyA8-CGdLpWHhVMyvhf_SkFb2UMfqafF9Gc",
    authDomain: "react-redux-firebase-c20a9.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-c20a9.firebaseio.com",
    projectId: "react-redux-firebase-c20a9",
    storageBucket: "react-redux-firebase-c20a9.appspot.com",
    messagingSenderId: "702427762610",
    appId: "1:702427762610:web:ebf892987a084f1d311eab",
    measurementId: "G-3R4DPWF6H8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.firestore();

export default firebase