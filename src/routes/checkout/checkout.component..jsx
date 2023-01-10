import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span className="products">Product</span>
        </div>
        <div className="header-block">
          <span className="products">Description</span>
        </div>
        <div className="header-block">
          <span className="products">Quantity</span>
        </div>
        <div className="header-block">
          <span className="products">Price</span>
        </div>
        <div className="header-block">
          <span className="products">Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total:${cartTotal}</span>
    </div>
  );
};

export default Checkout;
