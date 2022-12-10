// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import firestore config
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB36swqfWKEklmrUBCPKIypgtW9lF39HOE",
  authDomain: "react-clothing-170b8.firebaseapp.com",
  projectId: "react-clothing-170b8",
  storageBucket: "react-clothing-170b8.appspot.com",
  messagingSenderId: "684499636074",
  appId: "1:684499636074:web:cd5b3f270eca9dbdf19f13",
  // measurementId: "G-EYT6GLS485",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// initalizing the provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // check for the reference
  const userDocRef = doc(db, "users", userAuth.uid);

  // check for the snapshot in db
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.error("Error creating user", err);
    }
  }
  return userDocRef;
};

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
