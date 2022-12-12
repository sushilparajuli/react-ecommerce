import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-detail.styles.scss';

const CategoryDetail = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h1 className="title">
        <Link to={title}> {title} </Link>
      </h1>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryDetail;
