import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { ReactComponent as CartBagIcon } from "../../assets/shopping-bag.svg";

import "./CartIcon.styles.scss";

function CartIcon() {
  const dispatch = useDispatch();

  const cartDropdownHandler = () => {
    dispatch(cartActions.toggleCartDropdown());
  };
  return (
    <div className="cart-icon" onClick={cartDropdownHandler}>
      <CartBagIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
