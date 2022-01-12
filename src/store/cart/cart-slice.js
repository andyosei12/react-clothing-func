import { createSlice } from "@reduxjs/toolkit";
import { addToCart, removeFromCart } from "./cart-utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartDropdown: false,
    cartItems: [],
  },
  reducers: {
    toggleCartDropdown(state) {
      state.cartDropdown = !state.cartDropdown;
    },
    addItem(state, action) {
      state.cartItems = addToCart(state.cartItems, action.payload);
    },
    removeItem(state, action) {
      state.cartItems = removeFromCart(state.cartItems, action.payload);
    },
    clearCartItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
