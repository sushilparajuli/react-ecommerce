import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import  Button, {BUTTON_TYPE_CLASSES } from '../button/button.component';
import {ProductCardContainer, Footer} from './product-card.styles.jsx';

const ProductCart = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;
  const addProductToCart = () => addItemToCart(product);

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
