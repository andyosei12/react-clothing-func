import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//info: reducers
import userReducer from "./user/user-slice";
import cartReducer from "./cart/cart-slice";
import directoryReducer from "./directory/directory.slice";
import shopReducer from "./shop/shop.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
