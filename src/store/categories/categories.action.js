import { getCategoriesAndDocuments } from '../../utils/firebase';
import { createAction } from '../../utils/reducer/utils';
import { CATEGORIES_ACTIONS_TYPE } from './categories.types';

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_FAILED, error);


export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
 