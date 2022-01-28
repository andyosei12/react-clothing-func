import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart-selectors";
import StripeCheckoutButton from "../../components/stripe-checkout-button/StripeCheckoutButton";
import "./Checkout.styles.scss";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const cartTotal = useSelector((state) => selectCartTotal(state));
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>total: ${cartTotal}</span>
      </div>
      <div className="text-warning">
        Please use the following test credit card for payments <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};

export default CheckoutPage;
