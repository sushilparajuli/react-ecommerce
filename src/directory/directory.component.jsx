import './directory.styles.scss';
import CategoryItem from '../components/category-item.component';
import { object } from 'prop-types';

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem category={category} key={category.id} />
            ))}
        </div>
    );
};

Directory.propTypes = {
    categories:  object,
};

export default Directory;
