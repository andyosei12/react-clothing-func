import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartDropdown: false,
  },
  reducers: {
    toggleCartDropdown(state) {
      state.cartDropdown = !state.cartDropdown;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
