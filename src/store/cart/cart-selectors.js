import { createSelector } from "reselect";

// info: Input Selectors
const selectCart = (state) => state.cart;

//info: output selectors
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
