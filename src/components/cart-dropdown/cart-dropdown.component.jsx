import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <aside className="cart-dropdown-container">
            <nav className="cart-items">
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </nav>
            <Button onClick={checkoutHandler}> go to checkout </Button>
        </aside>
    );
};

export default CartDropdown;
