
import { takeLatest, all, call, put} from 'typed-redux-saga';
import { getCategoriesAndDocuments } from '../../utils/firebase';
import { fetchCategoriesFailed, fetchCategoriesSuccess } from './categories.action';
import { CATEGORIES_ACTIONS_TYPE } from './categories.types';


export function* fetchCategoriesAsync () {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments, 'categories');
    console.table(categoriesArray);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}