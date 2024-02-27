import Image from 'next/image';
import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { formatCurrency } from '@/app/lib/utils';
import {
  assignItemQuantityByAmount,
  calculateCartTotal,
  clearCart,
  decrementItemQuantity,
  incrementItemQuantity,
  selectCartItems,
} from '@/app/ui/cart/cartSlice';
import ButtonLink from '../button-link';
import QuantitySelector from '@/app/ui/quantity-selector';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(calculateCartTotal);
  const dispatch = useAppDispatch();

  const handleDecrementQuantity = useCallback(
    (id: number, type: string) => {
      dispatch(decrementItemQuantity({ id, type }));
    },
    [dispatch],
  );

  const handleIncrementQuantity = useCallback(
    (id: number, type: string) => {
      dispatch(incrementItemQuantity({ id, type }));
    },
    [dispatch],
  );

  const handleSetQuantity = useCallback(
    (value: number, id?: number, type?: string) => {
      if (!id || !type) {
        return;
      }
      dispatch(assignItemQuantityByAmount({ id, quantity: value, type }));
    },
    [dispatch],
  );

  const handleClearCart = useCallback(() => {
    dispatch(clearCart(false));
  }, [dispatch]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 overflow-auto bg-[#292828d6] bg-opacity-50'>
      <div className='absolute top-28 flex h-[488px] w-full flex-col justify-between rounded-lg bg-white-primary px-6 py-8 shadow-lg md:right-8 md:w-[377px] lg:right-20 xl:right-40 2xl:right-56 3xl:right-60 4xl:right-80'>
        <div className='flex flex-row items-start justify-between'>
          <h2 className='text-[1.4rem] font-bold leading-[1.55rem]'>{`Cart (${cartItems?.length})`}</h2>
          <button
            type='button'
            onClick={onClose}
            tabIndex={0}
          >
            <Image
              src='/assets/shared/desktop/icon-close.svg'
              alt='Close Cart'
              width={18}
              height={18}
            />
          </button>
        </div>
        <div className='mb-auto flex h-[240px] w-full flex-col gap-y-4 overflow-auto py-12'>
          {cartItems?.map((item) => (
            <div
              key={item.name}
              className='flex w-full flex-row items-center'
            >
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
              />
              <div className='flex flex-col pl-4'>
                <p className='font-bold'>{item.name}</p>
                <p className='font-bold text-[#10101080]'>{formatCurrency(item.price)}</p>
              </div>
              <div className='ml-auto'>
                <QuantitySelector
                  decrementQuantity={() => handleDecrementQuantity(item.id, item.type)}
                  incrementQuantity={() => handleIncrementQuantity(item.id, item.type)}
                  isCartComponent
                  itemId={item.id}
                  itemType={item.type}
                  quantity={item.quantity}
                  setQuantity={handleSetQuantity}
                />
              </div>
            </div>
          ))}
        </div>
        <div className='flex w-full flex-col gap-y-6'>
          <button
            className='w-[80 px] mr-auto text-sm font-semibold text-[#10101080] underline hover:text-black-tertiary'
            onClick={handleClearCart}
          >
            Remove all
          </button>
          <div className='flex flex-row justify-between'>
            <p>Total</p>
            <p className='text-[1.1rem] font-bold'>{formatCurrency(cartTotal)}</p>
          </div>
          <ButtonLink
            cta='Checkout'
            disabled={!cartItems?.length}
            onClick={onClose}
            href='/checkout'
            otherClasses='grow w-full'
            variant='primary'
          />
        </div>
      </div>
    </div>
  );
};

export default CartModal;
