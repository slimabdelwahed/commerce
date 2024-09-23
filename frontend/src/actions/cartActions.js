import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM,
  } from '../constants/cartConstants';
  
  export const addToCart = (product) => (dispatch, getState) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
  
  export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
  
  export const updateCartItem = (id, quantity) => (dispatch, getState) => {
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: { _id: id, quantity },
    });
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };