import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/signin/SignInPage";
import Shop from "./pages/shop/Shop";
import "./App.css";

import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => {
      console.log("cleanup function");
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
