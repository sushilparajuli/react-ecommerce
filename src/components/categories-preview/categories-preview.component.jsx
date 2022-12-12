import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryDetail from '../../components/category-detail/category-detail.component';
import './categories-preview.styles.scss';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
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
