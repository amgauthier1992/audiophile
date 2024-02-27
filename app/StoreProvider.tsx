'use client';
import React, { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';

import { AppStore, makeStore } from '@/app/lib/store';
import { saveCart } from '@/app/lib/utils';

const StoreProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const storeRef = useRef<AppStore>();

  useEffect(() => {
    if (storeRef.current) {
      // Subscribe to store changes and save cart to local storage
      const unsubscribe = storeRef.current.subscribe(() => {
        const cart = storeRef.current?.getState().cart;
        if (cart) {
          saveCart(cart);
        }
      });

      return () => {
        // Unsubscribe when component unmounts
        unsubscribe();
      };
    }
  }, [storeRef.current]);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
