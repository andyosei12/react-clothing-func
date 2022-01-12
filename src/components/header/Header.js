import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/CartIcon";
import "./Header.styles.scss";
import CartDropdown from "../cart-dropdown.js/CartDropdown";
import { selectCurrentUser } from "../../store/user/user.selectors";
import { selectCartDropdown } from "../../store/cart/cart-selectors";

const Header = () => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const showCartDropdown = useSelector((state) => selectCartDropdown(state));

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <NavLink className="option" to="/shop">
          Shop
        </NavLink>
        <NavLink className="option" to="/shop">
          Contact
        </NavLink>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <NavLink to="/signin" className="option">
            Sign in
          </NavLink>
        )}
        <CartIcon />
      </div>
      {showCartDropdown && <CartDropdown />}
    </div>
  );
};

export default Header;
