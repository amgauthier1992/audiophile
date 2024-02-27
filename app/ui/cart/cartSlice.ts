import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { RootState } from '@/app/lib/store';
import { loadCart } from '@/app/lib/utils';

//Define a type for our individual cart items
export type CartItem = {
  id: number;
  type: string; //we need this to differentiate between items that have the same id from different product categories
  name: string;
  price: number;
  image: string;
  quantity: number;
};

// Define a type for the slice state (array of CartItems)
export interface CartState {
  items: CartItem[];
}

//Define initial state
const initialState: CartState = {
  items: [],
};

const persistedCart: CartState | undefined = loadCart();

export const cartSlice = createSlice({
  name: 'cart',
  initialState: persistedCart ? persistedCart : initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItemIndex: number = state.items.findIndex(
        (item) => item.id === newItem.id && item.type === newItem.type,
      );

      // Don't add to cart if quantity is 0
      if (newItem.quantity === 0) {
        return;
      }

      if (existingItemIndex !== -1) {
        // if existing quantity + new quantity is more than 99, don't add to cart
        if (state.items[existingItemIndex].quantity + newItem.quantity > 99) {
          toast.error('Max product limit of 99 reached', {
            toastId: 'maxProduct',
          });
          return;
        } else {
          // Item already exists in cart, update its quantity
          state.items[existingItemIndex].quantity += newItem.quantity;
          toast.success('Item(s) added!', {
            toastId: 'itemAdded',
          });
        }
      } else {
        if (newItem.quantity > 99) {
          toast.error('Max product limit of 99 reached', {
            toastId: 'maxProduct',
          });
          return;
        } else {
          // Item does not exist in cart, add it
          state.items.push(action.payload);
          toast.success('Item(s) added!', {
            toastId: 'itemAdded',
          });
        }
      }
    },
    assignItemQuantityByAmount: (
      state: CartState,
      action: PayloadAction<{ id: number; quantity: number; type: string }>,
    ) => {
      const { id, quantity, type } = action.payload;
      const itemIndex: number = state.items.findIndex(
        (item) => item.id === id && item.type === type,
      );

      if (itemIndex !== -1) {
        if (quantity === 0) {
          state.items.splice(itemIndex, 1); // Remove the item if quantity is 0
          toast.info('Item(s) removed!', {
            toastId: 'itemRemoved',
          });
        } else {
          if (quantity > state.items[itemIndex].quantity) {
            state.items[itemIndex].quantity = quantity;
            toast.success('Item(s) added!', {
              toastId: 'itemAdded',
            });
          } else {
            state.items[itemIndex].quantity = quantity;
            toast.info('Item(s) removed!', {
              toastId: 'itemRemoved',
            });
          }
        }
      }
    },
    clearCart: (state: CartState, action: PayloadAction<boolean>) => {
      const orderCompleted = action.payload;

      if (state.items.length === 0) {
        return;
      } else {
        state.items = [];
        if (!orderCompleted) {
          toast.info('Item(s) removed!', {
            toastId: 'itemRemoved',
          });
        }
      }
    },
    decrementItemQuantity: (
      state: CartState,
      action: PayloadAction<{ id: number; type: string }>,
    ) => {
      const { id, type } = action.payload;
      const itemIndex: number = state.items.findIndex(
        (item) => item.id === id && item.type === type,
      );

      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity === 1) {
          state.items.splice(itemIndex, 1); // Remove the item if quantity is 1 and is being changed to 0
          toast.info('Item(s) removed!', {
            toastId: 'itemRemoved',
          });
        } else {
          state.items[itemIndex].quantity -= 1; // Otherwise, decrement quantity normally
          toast.info('Item(s) removed!', {
            toastId: 'itemRemoved',
          });
        }
      }
    },
    incrementItemQuantity: (
      state: CartState,
      action: PayloadAction<{ id: number; type: string }>,
    ) => {
      const { id, type } = action.payload;
      const item: CartItem | undefined = state.items.find(
        (item) => item.id === id && item.type === type,
      );

      if (item && item.quantity < 99) {
        item.quantity += 1;
        toast.success('Item(s) added!', {
          toastId: 'itemAdded',
        });
      }
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;

export const calculateCartTotal = (state: RootState) => {
  const cartItems = selectCartItems(state);
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const {
  addToCart,
  assignItemQuantityByAmount,
  clearCart,
  decrementItemQuantity,
  incrementItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
