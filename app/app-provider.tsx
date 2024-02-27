'use client';

import StoreProvider from '@/app/StoreProvider';
import { CartProvider } from '@/app/ui/cart/context';

const AppProvider = ({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element => {
  return (
    <StoreProvider>
      <CartProvider>{children}</CartProvider>
    </StoreProvider>
  );
};

export default AppProvider;
