import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

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

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
