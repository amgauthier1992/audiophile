import React, { createContext, useCallback, useContext, useState } from 'react';

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextType {
  isCartOpen: boolean;
  toggleCart: () => void;
}

const initialCartContext: CartContextType = {
  isCartOpen: false,
  toggleCart: () => {},
};

const CartContext = createContext<CartContextType>(initialCartContext);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const toggleCart = useCallback(() => {
    setIsCartOpen((prevState) => !prevState);
  }, []);

  const cartContextValue: CartContextType = {
    isCartOpen,
    toggleCart,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
