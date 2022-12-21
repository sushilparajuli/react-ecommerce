import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/utils';
import { CartItem, CART_ACTIONS_TYPE } from './cart.types';
import { CategoryItem } from '../categories/categories.types';

export type SetIsCartOpen = ActionWithPayload<CART_ACTIONS_TYPE.SET_CART_IS_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTIONS_TYPE.SET_CART_ITEMS, CartItem[]>;


export const setIsCartOpen = withMatcher(
  (boolean : boolean) : SetIsCartOpen => 
    createAction(CART_ACTIONS_TYPE.SET_CART_IS_OPEN, boolean)
);

export const setCartItems = withMatcher((cartItems: CartItem[]) : SetCartItems => createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS , cartItems));


const addCardItem = (
  cartItems : CartItem[], 
  productToAdd : CategoryItem
) : CartItem[] => {
  // find if items contains productToAdd
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  // increment count if existingCartItem
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems/ new cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItem[], 
  cartItemToRemove: CartItem
) : CartItem[] => {
  // find the item to remove
  const existingCartItem  = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  // if quantity is equal to 1 , remove it from cart
  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return new cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem) : CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const addItemToCart = (cartItems : CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCardItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};