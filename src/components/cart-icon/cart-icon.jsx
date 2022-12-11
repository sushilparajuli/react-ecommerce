import "./cart-icon.styles.scss";

import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <FaShoppingCart className="shopping-icon" />
      <span>0</span>
    </div>
  );
};

export default CartIcon;
