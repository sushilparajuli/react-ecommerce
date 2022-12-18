import { useDispatch, useSelector} from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import  Button, {BUTTON_TYPE_CLASSES } from '../button/button.component';
import {ProductCardContainer, Footer} from './product-card.styles.jsx';

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price } = product;
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img loading="lazy" src={imageUrl} alt={name} />
      <Footer>
        <h2 className="name">{name}</h2>
        <span className="price">{price}</span>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCart;
