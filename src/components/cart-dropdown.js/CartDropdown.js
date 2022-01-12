import { useSelector, useDispatch } from "react-redux";
import Cartitems from "../cart-items/CartItems";
import CustomButton from "../custom-button/CustomButton";
import { selectCartItems } from "../../store/cart/cart-selectors";
import { cartActions } from "../../store/cart/cart-slice";

import "./CartDropdown.styles.scss";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => selectCartItems(state));
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <Cartitems key={cartItem.id} items={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout">
        <CustomButton
          onClick={() => dispatch(cartActions.toggleCartDropdown())}
        >
          Go to checkout
        </CustomButton>
      </Link>
    </div>
  );
};

export default CartDropdown;
