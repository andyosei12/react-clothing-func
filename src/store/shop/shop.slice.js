import { createSlice } from "@reduxjs/toolkit";
import shopData from "./shop-data.js";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shopData,
  },
  reducer: {},
});

export default shopSlice.reducer;
