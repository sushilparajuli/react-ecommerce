import { useContext } from 'react';
import { Outlet} from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/images/e-clothing.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase';
import { NavContainer, LogoContainer, NavLinkContainer, NavLink } from './navigation.styles.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavContainer className='navigation'>
        <LogoContainer className='logo-container' to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              Sign out
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
