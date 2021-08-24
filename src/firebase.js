import firebase from 'firebase/app';
import 'firebase/firestore';



var firebaseConfig = {
    apiKey: "AIzaSyCehAJijygZ9H7zBzpNruufp5dzdqVl46M",
    authDomain: "financial-accounting-e84a6.firebaseapp.com",
    databaseURL: "https://financial-accounting-e84a6.firebaseio.com",
    projectId: "financial-accounting-e84a6",
    storageBucket: "financial-accounting-e84a6.appspot.com",
    messagingSenderId: "759977095952",
    appId: "1:759977095952:web:7e3407110a077bb2262b95",
    measurementId: "G-PGQMM1MHW1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
