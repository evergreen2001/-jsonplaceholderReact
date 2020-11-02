import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCuPXHjXbIrxHHJxOCOYgo5xnqeThRRDFk",
  authDomain: "firegal-be39a.firebaseapp.com",
  databaseURL: "https://firegal-be39a.firebaseio.com",
  projectId: "firegal-be39a",
  storageBucket: "firegal-be39a.appspot.com",
  messagingSenderId: "526376722562",
  appId: "1:526376722562:web:df144aa10dbc8d7fbf549b",
  measurementId: "G-RHLJ1QW8PK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, firestore };
