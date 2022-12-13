import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import {CategoryPreviewContainer,Preview} from './category-detail.styles.jsx';

const CategoryDetail = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h1 className="title">
        <Link to={title}> {title} </Link>
      </h1>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryDetail;
