import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '@/app/ui/cart/cartSlice';

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
