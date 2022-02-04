import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/CartIcon";
import "./Header.styles.scss";
import CartDropdown from "../cart-dropdown.js/CartDropdown";
import { selectCurrentUser } from "../../store/user/user.selectors";
import { selectCartDropdown } from "../../store/cart/cart-selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionNavLink,
} from "./Header.styles";

const Header = () => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const showCartDropdown = useSelector((state) => selectCartDropdown(state));

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionNavLink to="/shop">Shop</OptionNavLink>
        <OptionNavLink to="/shop">Contact</OptionNavLink>
        {currentUser ? (
          <OptionNavLink as="div" onClick={() => auth.signOut()}>
            Sign out
          </OptionNavLink>
        ) : (
          <OptionNavLink to="/signin">Sign in</OptionNavLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {showCartDropdown && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
