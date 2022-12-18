import { createAction } from '../../utils/reducer/utils';
import { CATEGORIES_ACTIONS_TYPE } from './categories.types';

export const setCategories = (categories) => createAction(CATEGORIES_ACTIONS_TYPE.SET_CATEGORIES, categories);
