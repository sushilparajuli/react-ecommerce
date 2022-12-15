import { createAction } from '../../utils/reducer/utils';
import { CATEGORIES_ACTIONS_TYPE } from './categories.types';

export const setCategoriesMap = (categoryMap) => createAction(CATEGORIES_ACTIONS_TYPE.SET_CATEGORIES_MAP, categoryMap);
