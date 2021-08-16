import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRK_jYJYWxQQhcCBKfxb178xMdItenIgE",
  authDomain: "facebook-clone-3e4d5.firebaseapp.com",
  projectId: "facebook-clone-3e4d5",
  storageBucket: "facebook-clone-3e4d5.appspot.com",
  messagingSenderId: "417474634056",
  appId: "1:417474634056:web:2d1f75b0fe9564dc82937d",
  measurementId: "G-PBLMWEP50R",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
