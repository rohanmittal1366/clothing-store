import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDvvM7W2CLfBEvCWEQjq5nPd04J5hEg9Ag",
  authDomain: "e-commerce-site-5f2ca.firebaseapp.com",
  projectId: "e-commerce-site-5f2ca",
  storageBucket: "e-commerce-site-5f2ca.appspot.com",
  messagingSenderId: "102365553808",
  appId: "1:102365553808:web:886684cf211160aa79e415",
  measurementId: "G-P4G11SZKFY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
