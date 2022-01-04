import { useSelector } from "react-redux";
import Cartitems from "../cart-items/CartItems";
import CustomButton from "../custom-button/CustomButton";
import { selectCartItems } from "../../store/cart/cart-selectors";

import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <Cartitems key={cartItem.id} items={cartItem} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
