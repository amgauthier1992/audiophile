import { CartState } from '@/app/ui/cart/cartSlice';

export const formatCurrency = (amount: number): string => {
  return `$${amount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
};

export const formatDateToLocal = (dateStr: string, locale: string = 'en-US'): string => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const loadCart = (): CartState | undefined => {
  try {
    const serializedCart = localStorage.getItem('cart');
    if (serializedCart === null) {
      return undefined;
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    return undefined;
  }
};

export const saveCart = (cart: CartState): void => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (err) {
    console.log('Error while saving cart to local storage', err);
  }
};
