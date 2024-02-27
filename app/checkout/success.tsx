'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { formatCurrency } from '@/app/lib/utils';
import { calculateCartTotal, clearCart, selectCartItems } from '@/app/ui/cart/cartSlice';
import ButtonLink from '@/app/ui/button-link';

const CheckoutSuccessModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(calculateCartTotal);
  const grandTotal = cartTotal + cartTotal * 0.2 + 50;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClearCart = useCallback(() => {
    dispatch(clearCart(true));
  }, [dispatch]);

  if (!isMounted) {
    return (
      <div className='fixed inset-0 z-50 overflow-auto bg-[#292828d6] bg-opacity-50'>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='size-12 animate-spin rounded-full border-y-4 border-primary'></div>
        </div>
      </div>
    );
  }

  return (
    <div className='fixed inset-0 z-50 overflow-auto bg-[#292828d6] bg-opacity-50'>
      <div className='absolute left-1/2 top-1/2 flex h-[575px] w-full -translate-x-1/2 -translate-y-1/2 flex-col justify-between rounded-lg bg-white-primary px-6 py-8 shadow-lg md:right-8 md:w-[377px] lg:right-20 xl:right-40 2xl:right-56 3xl:right-60 4xl:right-80'>
        <div className='flex flex-col gap-y-4'>
          <Image
            src='/assets/checkout/icon-order-confirmation.svg'
            alt='Success'
            height='64'
            width='64'
          />
          <h2 className='text-2xl font-bold uppercase'>Thank you for your Order!</h2>
          <p className='text-[#10101080]'>You will receive an email confirmation shortly.</p>
        </div>
        <div className='flex flex-col gap-y-6'>
          <div className='flex flex-col gap-y-6'>
            <div>
              {cartItems?.length && (
                <div className='mx-auto flex w-9/12 flex-row items-center'>
                  <Image
                    src={cartItems[0].image}
                    alt={cartItems[0].name}
                    width={64}
                    height={64}
                  />
                  <div className='flex flex-col pl-4'>
                    <p className='font-bold'>{cartItems[0].name}</p>
                    <p className='font-bold text-[#10101080]'>
                      {formatCurrency(cartItems[0].price)}
                    </p>
                  </div>
                  <div className='ml-auto'>
                    <p className='font-bold text-[#10101080]'>x {cartItems[0].quantity}</p>
                  </div>
                </div>
              )}
              {cartItems.length > 1 ? (
                <>
                  <hr className='mx-auto w-9/12 border-[#979797]'></hr>
                  <p className='mt-3 text-center text-sm text-[#10101080]'>{`And ${cartItems.length - 1} other item(s)`}</p>
                </>
              ) : null}
            </div>
            <div className='flex h-[92px] w-full flex-col items-start gap-y-2 rounded-b-lg bg-black-primary p-4'>
              <p className='text-md font-thin uppercase text-white-secondary'>Grand Total</p>
              <p className='text-xl font-bold text-white-primary'>{formatCurrency(grandTotal)}</p>
            </div>
          </div>
          <ButtonLink
            cta='Back To Home'
            href='/'
            onClick={handleClearCart}
            otherClasses='grow w-full block mt-auto'
            variant='primary'
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessModal;
