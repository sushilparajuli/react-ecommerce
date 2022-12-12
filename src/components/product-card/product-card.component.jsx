import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCart = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;
  const addProductToCart = () => addItemToCart(product);

  return (
    <article className="product-card-container">
      <img loading="lazy" src={imageUrl} alt={name} />
      <footer className="footer">
        <h2 className="name">{name}</h2>
        <span className="price">{price}</span>
      </footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </article>
  );
};

export default ProductCart;
