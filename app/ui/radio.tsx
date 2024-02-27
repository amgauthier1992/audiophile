'use client';

import { Ref, useCallback, useState } from 'react';

interface RadioOption {
  id: number;
  label: string;
  value: string;
}

interface RadioGroupProps {
  error?: string | undefined;
  inputRef?: Ref<HTMLInputElement> | null;
  legend: string;
  onChange: (value: string) => void;
  options: RadioOption[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ error, inputRef, legend, onChange, options }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setSelectedOption(newValue);
      onChange(newValue);
    },
    [onChange],
  );

  return (
    <fieldset>
      <div className='flex flex-col md:flex-row'>
        <legend className='mb-4 font-bold tracking-[0.93px]'>{legend}</legend>
        <div className='flex flex-col gap-y-4 md:ml-auto'>
          {options.map((option) => (
            <div
              key={option.id}
              className={`rounded-md border p-3 hover:border-primary ${selectedOption === option.value ? 'border-primary' : 'border-[#cfcfcf]'} ${error ? 'border-error' : 'border-[#cfcfcf]'} md:w-[336px] lg:w-[283px] xl:w-[314px] 2xl:w-[312px] 3xl:w-[334px] 4xl:w-[414px]`}
            >
              <input
                id={option.label}
                className='accent-primary'
                name={legend}
                onChange={handleInputChange}
                ref={inputRef}
                type='radio'
                value={option.value}
              />
              <label
                className='ml-4 w-full font-bold'
                htmlFor={option.label}
              >
                {option.label}
              </label>
            </div>
          ))}
          {error ? <p className='text-sm text-error'>{error}</p> : null}
        </div>
      </div>
    </fieldset>
  );
};

export default RadioGroup;
