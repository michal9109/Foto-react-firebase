import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "fotos-ee149.firebaseapp.com",
  databaseURL: "https://fotos-ee149.firebaseio.com",
  projectId: "fotos-ee149",
  storageBucket: "fotos-ee149.appspot.com",
  messagingSenderId: "16591452150",
  appId: "1:16591452150:web:b062728c5025ead8d879d7",
  measurementId: "G-ME66KG9Y43",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
