// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import firestore config
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB36swqfWKEklmrUBCPKIypgtW9lF39HOE',
  authDomain: 'react-clothing-170b8.firebaseapp.com',
  projectId: 'react-clothing-170b8',
  storageBucket: 'react-clothing-170b8.appspot.com',
  messagingSenderId: '684499636074',
  appId: '1:684499636074:web:cd5b3f270eca9dbdf19f13',
  // measurementId: "G-EYT6GLS485",
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// initalizing the provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const db = getFirestore();

// add Collection and documents
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // collection reference
  const collectionRef = collection(db, collectionKey);

  // writing data in datastore
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  // commit all documents
  await batch.commit();
  console.log('uploaded to firestore');
};

// sign in providers
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// for Redirect
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// creating user
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalFields = {}
) => {
  // check for the reference
  const userDocRef = doc(db, 'users', userAuth.uid);

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
        ...additionalFields,
      });
    } catch (err) {
      console.error('Error creating user', err);
    }
  }
  return userSnapshot;
};

// getting collection and docs from firestore
export const getCategoriesAndDocuments = async (key) => {
  const collectionRef = collection(db, key);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return  querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
  // .reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});
  // return categoryMap;

};

// create auth user with email, password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};