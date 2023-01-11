import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase-utils";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer className="logo-container" to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
