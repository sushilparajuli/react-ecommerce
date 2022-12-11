import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <aside className="cart-dropdown-container">
      <nav className="nav-items"></nav>
      <Button> go to checkout </Button>
    </aside>
  );
};

export default CartDropdown;
