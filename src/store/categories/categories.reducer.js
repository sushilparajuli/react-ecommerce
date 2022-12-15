import { CATEGORIES_ACTIONS_TYPE } from './categories.types';

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};


export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case CATEGORIES_ACTIONS_TYPE.SET_CATEGORIES_MAP:
    return {
      ...state,
      categoriesMap: payload
    };

  default:
    return state;
  }

};