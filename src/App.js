import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import CheckoutPage from "./pages/checkout/Checkout";
import SignInPage from "./pages/signin/SignInPage";
import Shop from "./pages/shop/Shop";
import "./App.css";
import { onSnapshot } from "@firebase/firestore";
import { userActions } from "./store/user/user-slice";
import SignInWrapper from "./components/sign-in/SignInWrapper";
import { selectCurrentUser } from "./store/user/user.selectors";
// import { selectCollectionsForPreview } from "./store/shop/shop.selectors";
// import { addCollectionAndDocuments } from "./firebase/firebase.utils";

let unsubscribeFromAuth;
function App() {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const dispatch = useDispatch();
  // const collections = useSelector((state) =>
  //   selectCollectionsForPreview(state)
  // );

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
        // addCollectionAndDocuments("collections", collections);
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
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shop/*" element={<Shop />} />
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
