import { Link, NavLink } from "react-router-dom";

import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
