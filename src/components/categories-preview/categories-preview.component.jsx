import { Fragment } from 'react';
import CategoryDetail from '../../components/category-detail/category-detail.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import Spinner from '../spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      { isLoading ? (
        <Spinner/>
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryDetail key={title} title={title} products={products} />;
        })
      )}
    </Fragment>
  );
};
export default CategoriesPreview;
