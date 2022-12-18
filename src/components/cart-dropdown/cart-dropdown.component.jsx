import Button from '../button/button.component';
import './cart-dropdown.styles.jsx';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';
import {BsCart4} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer className="cart-dropdown-container">
      <CartItems className="cart-items">

        {cartItems.length ? (cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))): (<EmptyMessage><BsCart4/> Your Cart is Empty</EmptyMessage>)}
      </CartItems>
      <Button disabled={cartItems.length < 0} onClick={checkoutHandler}> go to checkout </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
