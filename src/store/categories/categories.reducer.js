import { CATEGORIES_ACTIONS_TYPE } from './categories.types';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};


export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case CATEGORIES_ACTIONS_TYPE.SET_CATEGORIES:
    return {
      ...state,
      categories: payload
    };

  default:
    return state;
  }

};