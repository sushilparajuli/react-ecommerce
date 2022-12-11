import "./product-card.styles.scss";

import Button from "../button/button.component";

const ProductCart = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <article className="product-card-container">
      <img loading="lazy" src={imageUrl} alt={name} />
      <footer className="footer">
        <h2 className="name">{name}</h2>
        <span className="price">{price}</span>
      </footer>
      <Button buttonType="inverted">Add to Cart</Button>
    </article>
  );
};

export default ProductCart;
