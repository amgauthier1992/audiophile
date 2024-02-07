import { configureStore } from '@reduxjs/toolkit';

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
export const makeStore = () => {
  return configureStore({
    reducer: {},
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
