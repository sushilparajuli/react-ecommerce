import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import {Title, CategoryContainer} from './category.styles.jsx';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/categories/categories.selector';

const Category = () => {
  const { category } = useParams();
  const categoriesMap  = useSelector(selectCategories);
  const [products, setProducts] = useState(categoriesMap[category]);

  // Mapping category from params to store categories
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <Title> {category} </Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
