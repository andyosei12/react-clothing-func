import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/user-slice";
import cartReducer from "./cart/cart-slice";

const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer },
});

export default store;
