import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCardOpen, cartCount } = useContext(CartContext);

  const toggle = () => setIsCardOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
