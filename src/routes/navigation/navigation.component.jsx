import { Outlet} from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/images/e-clothing.svg';
import { NavContainer, LogoContainer, NavLinkContainer, NavLink } from './navigation.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  
  const signOutHandler = () => dispatch(signOutStart());
  

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
          {currentUser && <CartIcon />}
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
