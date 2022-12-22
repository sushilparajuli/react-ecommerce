import {CategoryItem} from '../categories/categories.types';

export enum CART_ACTIONS_TYPE {
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
  SET_CART_IS_OPEN = 'cart/SET_CART_IS_OPEN',
  SET_CART_TOTAL = 'cart/SET_CART_TOTAL',
  SET_CART_COUNT = 'cart/SET_CART_COUNT',
}

export type CartItem = CategoryItem & {
  quantity: number;
}