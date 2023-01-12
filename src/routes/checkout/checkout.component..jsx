import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
        console.log("cartitem--->", cartItem);
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total:${cartTotal}</span>
    </div>
  );
};

export default Checkout;
