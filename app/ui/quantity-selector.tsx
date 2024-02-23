'use client';

import { CallbackVoid } from '@/app/lib/definitions';

interface QuantitySelectorProps {
  decrementQuantity: CallbackVoid;
  incrementQuantity: CallbackVoid;
  isCartComponent?: boolean;
  itemId?: number | undefined;
  itemType?: string | undefined;
  quantity: number;
  setQuantity: (value: number, itemId?: number, itemType?: string) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  decrementQuantity,
  incrementQuantity,
  isCartComponent,
  itemId,
  itemType,
  quantity,
  setQuantity,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = parseInt(e.target.value);

    if (isCartComponent && itemId && itemType && !isNaN(value) && value <= 99) {
      setQuantity(value, itemId, itemType);
    }

    if (!isCartComponent && !isNaN(value) && value > 0 && value <= 99) {
      setQuantity(value);
    }
  };

  return (
    <div className='flex items-center'>
      <button
        aria-label='Decrease quantity'
        className='text-gray-200 rounded-l-md bg-white-primary px-4 py-1 hover:text-primary focus:border focus:outline-none'
        onClick={decrementQuantity}
        tabIndex={0}
      >
        -
      </button>
      <input
        aria-label='Quantity'
        aria-live='assertive'
        type='number'
        min={isCartComponent ? 0 : 1}
        max={99}
        className='appearance-none px-4 py-1 text-center font-bold text-black-primary hover:border-primary focus:border focus:outline-none'
        value={quantity}
        onChange={handleInputChange}
        style={{
          MozAppearance: 'textfield',
          width: '6ch',
        }}
        tabIndex={0}
      />
      <button
        aria-label='Increase quantity'
        className='text-gray-200 rounded-r-md bg-white-primary px-4 py-1 hover:text-primary focus:border focus:outline-none'
        onClick={incrementQuantity}
        tabIndex={0}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
