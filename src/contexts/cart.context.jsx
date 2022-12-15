import { createContext, useReducer } from 'react';
const addCardItem = (cartItems, productToAdd) => {
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

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the item to remove
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  // if quantity is equal to 1 , remove it from cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return new cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null, 
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  cartCount: 0,
  cartTotal:0,
});

export const CART_ACTIONS_TYPE = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_IS_OPEN: 'SET_CART_IS_OPEN',
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) { 
  case CART_ACTIONS_TYPE.SET_CART_ITEMS:
    return {
      ...state,
      ...payload,
    };
  case CART_ACTIONS_TYPE.SET_CART_IS_OPEN:
    return {
      ...state,
      isCartOpen : payload,
    };  
  default:
    throw new Error(`Invalid action ${action} in UserReducer`);
      
  }
};

export const CartProvider = ({ children }) => {

  const [{cartItems, cartCount,cartTotal, isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {

    // generate new cart count
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);


    // generate new cart total
    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);


    // dispatch actions with newCartItem, total and count
    dispatch({
      type: CART_ACTIONS_TYPE.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      }
    });
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: CART_ACTIONS_TYPE.SET_CART_IS_OPEN, payload: bool });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCardItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };
  

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};