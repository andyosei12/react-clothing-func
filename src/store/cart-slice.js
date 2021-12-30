import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./cart-ustils";

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
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
