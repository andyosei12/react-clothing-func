import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/signin/SignInPage";
import Shop from "./pages/shop/Shop";
import "./App.css";
import { onSnapshot } from "@firebase/firestore";

let unsubscribeFromAuth;
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        try {
          const userRef = await createUserProfile(userAuth);
          onSnapshot(userRef, (snapShot) => {
            const { displayName, id, email } = snapShot.data();
            setCurrentUser({
              id,
              displayName,
              email,
            });
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
