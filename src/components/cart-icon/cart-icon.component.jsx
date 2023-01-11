import { CartIconContainer, ShoppingBag, ItemCount } from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCardOpen, cartCount } = useContext(CartContext);

  const toggle = () => setIsCardOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingBag className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
