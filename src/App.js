import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/signin/SignInPage";
import Shop from "./pages/shop/Shop";
import "./App.css";
import { onSnapshot } from "@firebase/firestore";
import { userActions } from "./store/user-slice";
import SignInWrapper from "./components/sign-in/SignInWrapper";

let unsubscribeFromAuth;
function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        try {
          const userRef = await createUserProfile(userAuth);
          onSnapshot(userRef, (snapShot) => {
            const { displayName, id, email } = snapShot.data();
            dispatch(
              userActions.setCurrentUser({
                id,
                displayName,
                email,
              })
            );
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        dispatch(userActions.setCurrentUser(userAuth));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/signin"
          element={
            <SignInWrapper currentUser={currentUser}>
              <SignInPage />
            </SignInWrapper>
          }
        />
      </Routes>
    </>
  );
}

export default App;
