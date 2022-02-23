import { createSlice } from "@reduxjs/toolkit";
// import shopData from "./shop-data.js";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shopData: {},
  },
  reducers: {
    setShopData(state, action) {
      state.shopData = action.payload;
    },
  },
});

export const shopActions = shopSlice.actions;
export default shopSlice.reducer;
