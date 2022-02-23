import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1sN_5-SQMLxqt5_xwX6xZ8Rs_iO7gI94",
  authDomain: "clothingfunc.firebaseapp.com",
  projectId: "clothingfunc",
  storageBucket: "clothingfunc.appspot.com",
  messagingSenderId: "77738594501",
  appId: "1:77738594501:web:088b69176b1f8adfd1e0ac",
};

export const app = initializeApp(firebaseConfig);
//info: instantiating a new GoogleAuthProvider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// info: storing the user details in firestore db
export const createUserProfile = async (authUser, additionalData) => {
  if (!authUser) return;
  // info: Get the document reference
  const userRef = doc(db, `users/${authUser.uid}`);
  // info: Get the document reference snapshot
  const userSnapShot = await getDoc(userRef);

  if (!userSnapShot.exists()) {
    const { displayName, email, uid: id } = authUser;
    try {
      await setDoc(userRef, {
        id,
        displayName,
        email,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  objectsToAdd.forEach((item) => {
    const newDocRef = doc(collection(db, collectionKey));
    batch.set(newDocRef, item);
  });
  return await batch.commit();
};

export const retrieveCollection = async () => {
  const collections = {};

  const querySnapShot = await getDocs(collection(db, "collections"));

  querySnapShot.forEach((doc) => {
    collections[doc.data().title.toLowerCase()] = { ...doc.data(), id: doc.id };
  });

  return collections;
};

export const auth = getAuth();
export const db = getFirestore();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
