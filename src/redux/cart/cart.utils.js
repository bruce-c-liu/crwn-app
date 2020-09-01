export const addItemToCart = (cartItems, newItem) => {
  let entryFound = false;

  let copy = cartItems.map((item) => {
    if (item.id === newItem.id) {
      entryFound = true;
      return { ...item, quantity: item.quantity + 1 };
    } else {
      return item;
    }
  });

  if (!entryFound) {
    copy.push({ ...newItem, quantity: 1 });
  }

  return copy;
};

export const removeItemFromCart = (cartItems, itemToRemove) =>
  cartItems.flatMap((item) => {
    return item.id !== itemToRemove.id
      ? item
      : item.quantity === 1
      ? []
      : { ...item, quantity: item.quantity - 1 };
  });

export const clearItemFromCart = (cartItems, itemToClear) => {
  return cartItems.filter((item) => item.id !== itemToClear.id);
};
