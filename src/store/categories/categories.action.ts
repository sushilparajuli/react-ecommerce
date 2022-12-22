import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/utils';
import { CATEGORIES_ACTIONS_TYPE, Category } from './categories.types';


export type FetchCategoriesStart = Action<CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_START>
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>
export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_FAILED, Error>

export type CategoryAction = FetchCategoriesStart | FetchCategoriesFailed | FetchCategoriesSuccess ;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => createAction(CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categoriesArray : Category[]) : FetchCategoriesSuccess => createAction(CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray));

export const fetchCategoriesFailed = withMatcher((error: Error) : FetchCategoriesFailed => createAction(CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_FAILED, error));
