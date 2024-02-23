'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';

import CartModal from '@/app/ui/cart/modal';
import { CallbackVoid } from '@/app/lib/definitions';

const Cart: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const toggleCart: CallbackVoid = useCallback(() => {
    setIsCartOpen(!isCartOpen);
  }, [isCartOpen]);

  return (
    <div className='relative'>
      <div className='flex flex-col justify-center'>
        <button onClick={toggleCart}>
          <Image
            src='/assets/shared/desktop/icon-cart.svg'
            alt='Cart'
            height={20}
            width={23}
          />
        </button>
      </div>
      <CartModal
        isOpen={isCartOpen}
        onClose={toggleCart}
      />
    </div>
  );
};

export default Cart;
