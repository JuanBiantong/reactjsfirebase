import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBKtmN3ruGWyvUlDazWJVNe7ESJXIxmY4Q",
    authDomain: "todolist-firebase-19d30.firebaseapp.com",
    databaseURL: "https://todolist-firebase-19d30.firebaseio.com",
    projectId: "todolist-firebase-19d30",
    storageBucket: "todolist-firebase-19d30.appspot.com",
    messagingSenderId: "956943966272",
    appId: "1:956943966272:web:333d2140b3154056ea7fa5",
    measurementId: "G-6P9X7M17QQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;