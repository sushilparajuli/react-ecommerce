import { Fragment } from 'react';
import CategoryDetail from '../../components/category-detail/category-detail.component';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/categories/categories.selector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryDetail key={title} title={title} products={products} />;
      })}
    </Fragment>
  );
};
export default CategoriesPreview;
