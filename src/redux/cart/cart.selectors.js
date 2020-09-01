import { createSelector } from 'reselect';

// const selectCart = (state) => state.cart;

const selectCartItems = (state) => state.cart.cartItems;

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((sum, item) => sum + item.quantity, 0);
});

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
});
