'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { useAppSelector } from '@/app/lib/hooks';
import { formatCurrency } from '@/app/lib/utils';
import { calculateCartTotal, selectCartItems } from '@/app/ui/cart/cartSlice';
import Button from '@/app/ui/button';

const OrderSummary: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(calculateCartTotal);
  const grandTotal = cartTotal + cartTotal * 0.2 + 50;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className='order-summary lg:w-2/5'>
        <h3 className='self-start text-xl font-bold uppercase'>Summary</h3>
        <div className='mt-12 flex items-center justify-center'>
          <div className='h-12 w-12 animate-spin rounded-full border-b-4 border-t-4 border-primary'></div>
        </div>
      </section>
    );
  }

  return (
    <section className='order-summary lg:w-2/5'>
      <h3 className='text-xl font-bold uppercase'>Summary</h3>
      <div className='mb-auto flex w-full flex-col gap-y-4 py-6'>
        {cartItems.map((item) => (
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
              <p className='font-bold text-[#10101080]'>x {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex w-full flex-col gap-y-6'>
        <div className='flex flex-col gap-y-1'>
          <div className='flex flex-row justify-between'>
            <p className='uppercase text-[#10101080]'>Total</p>
            <p className='text-[1.1rem] font-bold'>{formatCurrency(cartTotal)}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='uppercase text-[#10101080]'>Shipping</p>
            <p className='text-[1.1rem] font-bold'>{formatCurrency(50)}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='uppercase text-[#10101080]'>VAT (Included)</p>
            <p className='text-[1.1rem] font-bold'>{formatCurrency(cartTotal * 0.2)}</p>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='uppercase text-[#10101080]'>Grand Total</p>
          <p className='text-[1.1rem] font-bold text-primary'>{formatCurrency(grandTotal)}</p>
        </div>
      </div>
      <Button
        cta='Continue & Pay'
        disabled={cartTotal <= 0}
        otherClasses='grow w-full mt-8 mb-12'
        type='submit'
        variant='primary'
      />
    </section>
  );
};

export default OrderSummary;
