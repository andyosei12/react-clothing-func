import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart/cart-slice";
import { selectCartItemsCount } from "../../store/cart/cart-selectors";
import { ReactComponent as CartBagIcon } from "../../assets/shopping-bag.svg";

import "./CartIcon.styles.scss";

function CartIcon() {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => selectCartItemsCount(state));

  const cartDropdownHandler = () => {
    dispatch(cartActions.toggleCartDropdown());
  };
  return (
    <div className="cart-icon" onClick={cartDropdownHandler}>
      <CartBagIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CartIcon;
