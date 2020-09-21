import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBE9y3eSHbmTEUXN1_13LLi60afSllkn2Q",
  authDomain: "fb-crud-react-15e68.firebaseapp.com",
  databaseURL: "https://fb-crud-react-15e68.firebaseio.com",
  projectId: "fb-crud-react-15e68",
  storageBucket: "fb-crud-react-15e68.appspot.com",
  messagingSenderId: "374208674305",
  appId: "1:374208674305:web:63b6ef797033de7fdd1e00",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
