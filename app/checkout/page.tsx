'use client';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import RadioGroup from '@/app/ui/radio';
import TextField from '@/app/ui/textfield';
import OrderSummary from '@/app/checkout/summary';
import CheckoutSuccessModal from './success';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
  stateCode: string;
  zipCode: string;
  paymentMethod: string;
  eMoneyNumber: string;
  eMoneyPin: string;
}

const Checkout: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormData>();

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateCodeRef = useRef<HTMLInputElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);
  const paymentMethodRef = useRef<HTMLInputElement>(null);
  const eMoneyNumberRef = useRef<HTMLInputElement>(null);
  const eMoneyPinRef = useRef<HTMLInputElement>(null);

  const watchPaymentMethod: string = watch('paymentMethod');

  const [successModalOpen, setSuccessModalOpen] = useState<boolean>(false);

  const onError: SubmitErrorHandler<FormData> = useCallback(
    (errors) => {
      if (errors.firstName) {
        const firstNameElement = firstNameRef.current;
        if (firstNameElement) {
          firstNameElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          firstNameElement.focus();
        }
      } else if (errors.lastName) {
        const lastNameElement = lastNameRef.current;
        if (lastNameElement) {
          lastNameElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          lastNameElement.focus();
        }
      } else if (errors.email) {
        const emailElement = emailRef.current;
        if (emailElement) {
          emailElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          emailElement.focus();
        }
      } else if (errors.phoneNumber) {
        const phoneNumberElement = phoneNumberRef.current;
        if (phoneNumberElement) {
          phoneNumberElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
          phoneNumberElement.focus();
        }
      } else if (errors.address) {
        const phoneNumberElement = phoneNumberRef.current;
        if (phoneNumberElement) {
          phoneNumberElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
          phoneNumberElement.focus();
        }
      } else if (errors.country) {
        const countryElement = countryRef.current;
        if (countryElement) {
          countryElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
          countryElement.focus();
        }
      } else if (errors.city) {
        const cityElement = cityRef.current;
        if (cityElement) {
          cityElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
          cityElement.focus();
        }
      } else if (errors.stateCode) {
        const stateElement = stateCodeRef.current;
        if (stateElement) {
          stateElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
          stateElement.focus();
        }
      } else if (errors.zipCode) {
        const zipCodeElement = zipCodeRef.current;
        if (zipCodeElement) {
          zipCodeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
          zipCodeElement.focus();
        }
      } else if (errors.paymentMethod) {
        const paymentMethodElement = paymentMethodRef.current;
        if (paymentMethodElement) {
          paymentMethodElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
          paymentMethodElement.focus();
        }
      } else if (errors.eMoneyNumber) {
        const eMoneyNumberElement = eMoneyNumberRef.current;
        if (eMoneyNumberElement) {
          eMoneyNumberElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
          eMoneyNumberElement.focus();
        }
      } else if (errors.eMoneyPin) {
        const eMoneyPinElement = eMoneyPinRef.current;
        if (eMoneyPinElement) {
          eMoneyPinElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
          eMoneyPinElement.focus();
        }
      } else {
        //do nothing (?)
      }
    },
    [errors],
  );

  const onSubmit: SubmitHandler<FormData> = useCallback((data, e) => {
    e?.preventDefault();
    setSuccessModalOpen(true);
  }, []);

  return (
    <>
      <div className='flex h-[50px] w-full items-center px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-56 3xl:px-60 4xl:px-80'>
        <Link
          className='text-[#10101080] hover:text-black-tertiary'
          href='/'
        >
          Go Back
        </Link>
      </div>
      <form
        className='flex flex-col gap-y-9 p-6 md:gap-y-12 md:px-10 lg:flex-row lg:gap-x-12 lg:gap-y-16 lg:px-20 xl:gap-x-16 xl:px-40 2xl:gap-x-24 2xl:px-56 3xl:px-60 4xl:px-80'
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <section className='flex w-full flex-col gap-y-12'>
          <h2 className='text-2xl font-bold uppercase md:text-3xl'>Checkout</h2>
          <section className='flex flex-col gap-y-6'>
            <h3
              id='billing'
              className='font-bold uppercase tracking-[0.93px] text-primary'
            >
              Billing Details
            </h3>
            <div className='flex flex-col gap-y-4 md:flex-row md:justify-between md:gap-x-4'>
              <Controller
                control={control}
                name='firstName'
                defaultValue=''
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label='First Name'
                    onChange={onChange}
                    placeholder='John'
                    type='text'
                    value={value}
                    inputRef={firstNameRef}
                    error={error ? error.message : ''}
                  />
                )}
                rules={{
                  required: 'First Name is required',
                }}
              />
              <Controller
                control={control}
                name='lastName'
                defaultValue=''
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label='Last Name'
                    onChange={onChange}
                    placeholder='Doe'
                    type='text'
                    value={value}
                    inputRef={lastNameRef}
                    error={error ? error.message : ''}
                  />
                )}
                rules={{
                  required: 'Last Name is required',
                }}
              />
            </div>
            <div className='flex flex-col gap-y-4 md:flex-row md:justify-between md:gap-x-4'>
              <Controller
                control={control}
                name='email'
                defaultValue=''
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label='Email Address'
                    onChange={onChange}
                    placeholder='jdoe@gmail.com'
                    type='email'
                    value={value}
                    inputRef={emailRef}
                    error={error ? error.message : ''}
                  />
                )}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                }}
              />
              <Controller
                control={control}
                name='phoneNumber'
                defaultValue=''
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label='Phone Number'
                    onChange={onChange}
                    placeholder='+1 (202) 231-1234'
                    type='tel'
                    value={value}
                    inputRef={phoneNumberRef}
                    error={error ? error.message : ''}
                  />
                )}
                rules={{
                  required: 'Phone Number is required',
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'Invalid phone number',
                  },
                }}
              />
            </div>
          </section>
          <section className='flex flex-col gap-y-6'>
            <h3 className='font-bold uppercase tracking-[0.93px] text-primary'>Shipping Info</h3>
            <div className='flex flex-col gap-y-4 md:flex-row md:justify-between md:gap-x-4'>
              <Controller
                control={control}
                name='address'
                defaultValue=''
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label='Address'
                    onChange={onChange}
                    placeholder='16215 Alton Pkwy'
                    type='text'
                    value={value}
                    inputRef={addressRef}
                    error={error ? error.message : ''}
                  />
                )}
                rules={{
                  required: 'Address is required',
                }}
              />
              <Controller
                control={control}
                name='country'
                defaultValue=''
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label='Country'
                    onChange={onChange}
                    placeholder='United States'
                    type='text'
                    value={value}
                    inputRef={countryRef}
                    error={error ? error.message : ''}
                  />
                )}
                rules={{
                  required: 'Country is required',
                }}
              />
            </div>
            <div className='flex flex-col gap-y-4 md:flex-row md:justify-between md:gap-x-4'>
              <Controller
                control={control}
                name='city'
                defaultValue=''
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label='City'
                    onChange={onChange}
                    placeholder='Irvine'
                    type='text'
                    value={value}
                    inputRef={cityRef}
                    error={error ? error.message : ''}
                  />
                )}
                rules={{
                  required: 'City is required',
                }}
              />
              <Controller
                control={control}
                name='stateCode'
                defaultValue=''
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label='State'
                    onChange={onChange}
                    placeholder='California'
                    type='text'
                    value={value}
                    inputRef={stateCodeRef}
                    error={error ? error.message : ''}
                  />
                )}
                rules={{
                  required: 'State is required',
                }}
              />
            </div>
            <Controller
              control={control}
              name='zipCode'
              defaultValue=''
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  label='Zip Code'
                  onChange={onChange}
                  placeholder='92618'
                  type='text'
                  value={value}
                  inputRef={zipCodeRef}
                  error={error ? error.message : ''}
                />
              )}
              rules={{
                required: 'Zip Code is required',
                pattern: {
                  value: /^\d{5}(?:-\d{4})?$/,
                  message: 'Invalid Zip Code',
                },
              }}
            />
          </section>
          <section className='flex flex-col gap-y-6 lg:pb-12'>
            <h3 className='font-bold uppercase tracking-[0.93px] text-primary'>Payment Details</h3>
            <Controller
              control={control}
              name='paymentMethod'
              defaultValue=''
              render={({ field, fieldState: { error } }) => (
                <RadioGroup
                  error={error ? error.message : ''}
                  inputRef={paymentMethodRef}
                  legend='Payment Method'
                  onChange={(value) => field.onChange(value)}
                  options={[
                    {
                      id: 1,
                      label: 'e-Money',
                      value: 'e-money',
                    },
                    {
                      id: 2,
                      label: 'Cash on Delivery',
                      value: 'cash',
                    },
                  ]}
                />
              )}
              rules={{
                required: 'Payment Method is required',
              }}
            />
            {watchPaymentMethod === 'e-money' ? (
              <div className='flex flex-col gap-y-4 py-4 md:flex-row md:gap-x-4'>
                <Controller
                  control={control}
                  name='eMoneyNumber'
                  defaultValue=''
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label='e-Money Number'
                      onChange={onChange}
                      placeholder='238521993'
                      type='text'
                      value={value}
                      inputRef={eMoneyNumberRef}
                      error={error ? error.message : ''}
                    />
                  )}
                  rules={{
                    required: 'e-Money Number is required',
                  }}
                />
                <Controller
                  control={control}
                  name='eMoneyPin'
                  defaultValue=''
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label='e-Money PIN'
                      onChange={onChange}
                      placeholder='1234'
                      type='text'
                      value={value}
                      inputRef={eMoneyPinRef}
                      error={error ? error.message : ''}
                    />
                  )}
                  rules={{
                    required: 'e-Money PIN is required',
                  }}
                />
              </div>
            ) : null}
            {watchPaymentMethod === 'cash' ? (
              <div className='flex flex-row py-6'>
                <Image
                  className='mr-6 h-[48px] w-[48px]'
                  src='/assets/checkout/icon-cash-on-delivery.svg'
                  alt='Cash on delivery'
                  width={48}
                  height={48}
                />
                <p className='text-[#10101080]'>
                  The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
                  arrives at your residence. Just make sure your address is correct so that your
                  order will not be cancelled.
                </p>
              </div>
            ) : null}
          </section>
        </section>
        <OrderSummary />
      </form>
      {successModalOpen && <CheckoutSuccessModal />}
    </>
  );
};

export default Checkout;
