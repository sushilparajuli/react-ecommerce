import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import { getCategoriesAndDocuments } from '../../utils/firebase';
import Category from '../category/category.component';
import { setCategories } from '../../store/categories/categories.action';

const Shop = () => {
  const dispatch = useDispatch();
  // fetching Categories from Firebase
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      console.log(categoriesArray);

      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
