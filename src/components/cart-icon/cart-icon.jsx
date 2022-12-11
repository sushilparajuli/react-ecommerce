import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container">
      <FaShoppingCart className="shopping-icon" onClick={toggleCartOpen} />
      <span>0</span>
    </div>
  );
};

export default CartIcon;
