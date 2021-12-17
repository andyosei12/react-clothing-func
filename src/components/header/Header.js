import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

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
      </div>
    </div>
  );
};

export default Header;
