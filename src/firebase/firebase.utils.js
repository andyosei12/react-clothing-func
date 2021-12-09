import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyC1sN_5-SQMLxqt5_xwX6xZ8Rs_iO7gI94",
  authDomain: "clothingfunc.firebaseapp.com",
  projectId: "clothingfunc",
  storageBucket: "clothingfunc.appspot.com",
  messagingSenderId: "77738594501",
  appId: "1:77738594501:web:088b69176b1f8adfd1e0ac",
};

initializeApp(config);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

// info: adding a function to create add the user to database
export const createUser = async (authUser, additionalData) => {
  if (!authUser) return;

  const userRef = doc(db, `users/${authUser.uid}`);
  const userData = await getDoc(userRef);

  if (!userData.exists()) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    await setDoc(userRef, {
      displayName,
      email,
      createdAt,
      ...additionalData,
    });
  }

  return userRef;
};

export const db = getFirestore();
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
