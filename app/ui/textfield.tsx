'use client';

import { Ref, useCallback } from 'react';

interface TextFieldProps {
  error?: string | undefined;
  inputRef?: Ref<HTMLInputElement> | null;
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  type: string;
  value: string;
}

const TextField: React.FC<TextFieldProps> = ({
  error,
  inputRef,
  label,
  onChange,
  placeholder,
  type,
  value,
}) => {
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, []);

  return (
    <div className='flex flex-col gap-y-3 md:w-6/12'>
      <label
        className={`text-sm font-bold ${error ? 'text-error' : ''}`}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className={`focus:primary rounded-md border border-[#cfcfcf] p-3 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${error ? 'hover:border-error border-error focus:ring-error focus:outline-none focus:ring-1' : ''}`}
        name={label}
        onChange={handleInputChange}
        placeholder={placeholder}
        ref={inputRef}
        type={type}
        value={value}
      />
      {error ? <p className='text-sm text-[#CD2C2C]'>{error}</p> : null}
    </div>
  );
};

export default TextField;
