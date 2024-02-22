'use client';

import { CallbackVoid } from '@/app/lib/definitions';

interface QuantitySelectorProps {
  quantity: number;
  incrementQuantity: CallbackVoid;
  decrementQuantity: CallbackVoid;
  setQuantity: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className='flex items-center'>
      <button
        aria-label='Decrease quantity'
        className='text-gray-200 focus:border-blue-500 rounded-l-md bg-white-primary px-4 py-1 hover:text-primary focus:border focus:outline-none'
        onClick={decrementQuantity}
        tabIndex={0}
      >
        -
      </button>
      <input
        aria-label='Quantity'
        aria-live='assertive'
        type='number'
        min={1}
        max={99}
        className='focus:border-blue-500 appearance-none px-4 py-1 text-center font-bold text-black-primary hover:border-primary focus:border focus:outline-none'
        value={quantity}
        onChange={handleInputChange}
        style={{
          MozAppearance: 'textfield',
          width: '5ch',
        }}
        tabIndex={0}
      />
      <button
        aria-label='Increase quantity'
        className='text-gray-200 focus:border-blue-500 rounded-r-md bg-white-primary px-4 py-1 hover:text-primary focus:border focus:outline-none'
        onClick={incrementQuantity}
        tabIndex={0}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
