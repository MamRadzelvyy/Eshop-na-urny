import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const loadCartFromStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    if (!serializedCart) return undefined;
    return {
      items: JSON.parse(serializedCart),
    };
  } catch (e) {
    console.error('Chyba při načítání z localStorage:', e);
    return undefined;
  }
};

const saveCartToStorage = (cart) => {
  try {
    const serialized = JSON.stringify(cart.items);
    localStorage.setItem('cart', serialized);
  } catch (e) {
    console.error('Nepodařilo se uložit cart:', e);
  }
};

const preloadedState = {
  cart: loadCartFromStorage(),
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveCartToStorage(store.getState().cart);
});

export default store;
