import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import {Title, CategoryContainer} from './category.styles.jsx';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

Spinner;

const Category = () => {
  const { category } = useParams();
  const categoriesMap  = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  // Mapping category from params to store categories
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <Title> {category} </Title>
      {
        isLoading  ? (
          <Spinner/>
        )
          : (
            <CategoryContainer>
              {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </CategoryContainer>
          )
      }
      
    </>
  );
};

export default Category;
