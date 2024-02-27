'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { EARPHONES } from '@/app/lib/data';
import { Product } from '@/app/lib/definitions';
import { useAppDispatch } from '@/app/lib/hooks';
import { formatCurrency } from '@/app/lib/utils';
import { addToCart } from '@/app/ui/cart/cartSlice';
import Button from '@/app/ui/button';
import LinkButton from '@/app/ui/button-link';
import QuantitySelector from '@/app/ui/quantity-selector';

const EarphonesProduct: React.FC<{ params: { productId: string } }> = ({ params }) => {
  const earphones: Product | undefined = EARPHONES.find((e) => e.id === Number(params.productId));
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  const incrementQuantity: () => void = useCallback(() => {
    if (quantity < 99) {
      setQuantity((prevQuantity: number) => prevQuantity + 1);
    }
  }, [quantity]);

  const decrementQuantity: () => void = useCallback(() => {
    if (quantity > 1) {
      setQuantity((prevQuantity: number) => prevQuantity - 1);
    }
  }, [quantity]);

  const handleAddToCart = useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
      item: Product,
    ) => {
      const itemToAdd = {
        id: item.id,
        type: 'EARPHONES',
        name: item.shortName,
        price: item.price,
        image: item.cartImage,
        quantity: quantity,
      };

      dispatch(addToCart(itemToAdd));
    },
    [dispatch, quantity],
  );

  return (
    <>
      <div className='flex h-[50px] w-full items-center px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-56 3xl:px-60 4xl:px-80'>
        <Link
          className='text-[#10101080] hover:text-black-tertiary'
          href='/earphones'
        >
          Go Back
        </Link>
      </div>
      <section
        className={`${earphones?.slug} flex flex-col items-center gap-y-16 px-6 md:gap-y-20 md:px-10 lg:gap-y-32 lg:px-20 xl:px-40 2xl:px-56 3xl:px-60 4xl:px-80`}
      >
        <div className='product-card flex w-full flex-col md:flex-row'>
          <img
            className='product-img md:hidden'
            src={earphones?.image.mobile}
            alt='YX1 Wireless Earphones'
          />
          <img
            className='product-img xs:hidden md:block md:w-[281px] lg:hidden'
            src={earphones?.image.tablet}
            alt='YX1 Wireless Earphones'
          />
          <img
            className='product-img xs:hidden lg:block lg:w-[540px]'
            src={earphones?.image.desktop}
            alt='YX1 Wireless Earphones'
          />
          <div className='product-summary flex flex-col gap-y-4 md:justify-center'>
            {earphones?.new ? (
              <p className='text-sm/[14px] uppercase tracking-[.6250em] text-primary lg:mr-auto'>
                New Product
              </p>
            ) : null}
            <h2 className='text-2xl font-bold uppercase md:text-3xl'>{earphones?.name}</h2>
            <p className='text-[#10101080]'>{earphones?.description}</p>
            <p className='text-[18px] font-bold tracking-[1.29px]'>
              {formatCurrency(Number(earphones?.price))}
            </p>
            <div className='product-controls flex flex-row justify-between sm:justify-start sm:gap-x-6'>
              <QuantitySelector
                quantity={quantity}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                setQuantity={setQuantity}
              />
              <Button
                cta='Add to Cart'
                onClick={(e) => earphones && handleAddToCart(e, earphones)}
                type='button'
                variant='primary'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row'>
          <div className='product-features flex w-full flex-col gap-y-4 md:mt-[-78px]'>
            <h2 className='text-2xl font-bold uppercase'>Features</h2>
            {earphones?.features.split('\n').map((feature, i) => (
              <p
                key={`${feature}-${i}`}
                className='text-[#10101080]'
              >
                {feature}
              </p>
            ))}
          </div>
          <div className='in-the-box flex w-full flex-col gap-y-4 pt-8 md:flex-row md:justify-between md:gap-x-40 lg:mt-[-78px] lg:flex-col lg:items-center lg:justify-start lg:pt-0'>
            <h2 className='text-2xl font-bold uppercase lg:mr-[60px]'>In The Box</h2>
            <div className='mr-auto flex flex-col gap-y-2 lg:mr-0'>
              {earphones?.includes.map((product) => (
                <p
                  key={product.item}
                  className='text-[#10101080]'
                >
                  <span className='mr-4 font-bold text-primary'>{product.quantity}x</span>
                  {product.item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className='product-gallery flex flex-col gap-y-4 3xl:w-full'>
          <img
            className='rounded-md md:hidden'
            src={earphones?.gallery.first.mobile}
            alt='YX1 Wireless Earphones'
          />
          <img
            className='rounded-md md:hidden'
            src={earphones?.gallery.second.mobile}
            alt='YX1 Wireless Earphones'
          />
          <img
            className='rounded-md md:hidden'
            src={earphones?.gallery.third.mobile}
            alt='YX1 Wireless Earphones'
          />
          <div className='flex flex-row gap-x-4'>
            <div className='flex flex-col justify-between'>
              <img
                className='rounded-md xs:hidden md:block lg:hidden'
                src={earphones?.gallery.first.tablet}
                alt='YX1 Wireless Earphones'
              />
              <img
                className='rounded-md xs:hidden md:block lg:hidden'
                src={earphones?.gallery.second.tablet}
                alt='YX1 Wireless Earphones'
              />
            </div>
            <div>
              <img
                className='rounded-md xs:hidden md:block lg:hidden'
                src={earphones?.gallery.third.tablet}
                alt='YX1 Wireless Earphones'
              />
            </div>
          </div>
          <div className='flex w-full flex-row gap-x-4 3xl:mx-auto 3xl:justify-center'>
            <div className='flex flex-col justify-between'>
              <img
                className='w-full rounded-md xs:hidden lg:block'
                src={earphones?.gallery.first.desktop}
                alt='YX1 Wireless Earphones'
              />
              <img
                className='w-full rounded-md xs:hidden lg:block'
                src={earphones?.gallery.second.desktop}
                alt='YX1 Wireless Earphones'
              />
            </div>
            <div>
              <img
                className='w-full rounded-md xs:hidden lg:block'
                src={earphones?.gallery.third.desktop}
                alt='YX1 Wireless Earphones'
              />
            </div>
          </div>
        </div>
        <div className='suggestions flex w-full flex-col items-center gap-y-12'>
          <h2 className='pb-6 text-2xl font-bold uppercase md:pb-0'>You May Also Like</h2>
          <div className='flex flex-col items-center gap-y-12 md:flex-row'>
            {earphones?.others.map((product) => (
              <div
                key={product.name}
                className='flex flex-col items-center gap-y-4'
              >
                <img
                  className='md:hidden'
                  src={product.image.mobile}
                  alt={product.name}
                />
                <img
                  className='xs:hidden md:block lg:hidden'
                  src={product.image.tablet}
                  alt={product.name}
                />
                <img
                  className='xs:hidden lg:block'
                  src={product.image.desktop}
                  alt={product.name}
                />
                <h4 className='text-xl font-bold'>{product.name}</h4>
                <LinkButton
                  cta='View Product'
                  href={`../${product.type}/${product.id}`}
                  variant='primary'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='categories flex w-full flex-col items-center md:flex-row'>
          <div className='category-headphones w-full'>
            <img
              alt='XX99 Mark One Headphones'
              className='mx-auto lg:w-[175px]'
              src='/assets/cart/image-xx99-mark-one-headphones-no-bg.png'
            />
            <div className='flex flex-col items-center gap-y-2'>
              <p className='text-center font-bold uppercase'>Headphones</p>
              <Link
                className='text-[.8125rem] font-bold uppercase text-[#0000008b] hover:text-primary focus:text-primary'
                href='/headphones'
                tabIndex={0}
              >
                Shop
                <Image
                  className='mb-0.5 ml-2 inline'
                  src='/assets/shared/desktop/icon-arrow-right.svg'
                  alt='Arrow Right Icon'
                  width={8}
                  height={8}
                />
              </Link>
            </div>
          </div>
          <div className='category-speakers w-full'>
            <img
              alt='ZX9 Speaker'
              className='mx-auto lg:w-[175px]'
              src='/assets/cart/image-zx9-speaker-no-bg.png'
            />
            <div className='flex flex-col items-center gap-y-2'>
              <p className='text-center font-bold uppercase'>Speakers</p>
              <Link
                className='text-[.8125rem] font-bold uppercase text-[#0000008b] hover:text-primary focus:text-primary'
                href='/speakers'
                tabIndex={0}
              >
                Shop
                <Image
                  className='mb-0.5 ml-2 inline'
                  src='/assets/shared/desktop/icon-arrow-right.svg'
                  alt='Arrow Right Icon'
                  width={8}
                  height={8}
                />
              </Link>
            </div>
          </div>
          <div className='category-earphones w-full'>
            <img
              alt='YX1 Earphones'
              className='mx-auto lg:w-[175px]'
              src='/assets/cart/image-yx1-earphones-no-bg.png'
            />
            <div className='flex flex-col items-center gap-y-2'>
              <p className='text-center font-bold uppercase'>Earphones</p>
              <Link
                className='text-[.8125rem] font-bold uppercase text-[#0000008b] hover:text-primary focus:text-primary'
                href='/earphones'
                tabIndex={0}
              >
                Shop
                <Image
                  className='mb-0.5 ml-2 inline'
                  src='/assets/shared/desktop/icon-arrow-right.svg'
                  alt='Arrow Right Icon'
                  width={8}
                  height={8}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className='about flex flex-col items-center pb-16 lg:pb-32'>
          <div className='flex flex-col gap-y-10 lg:flex-row-reverse lg:gap-x-8 xl:gap-x-20'>
            <img
              className='w-full rounded-md md:hidden'
              src='/assets/shared/mobile/image-best-gear.jpg'
              alt='Man listening to headphones'
            />
            <img
              className='w-full rounded-md xs:hidden md:block lg:hidden'
              src='/assets/shared/tablet/image-best-gear.jpg'
              alt='Man listening to headphones'
            />
            <img
              className='w-full rounded-md xs:hidden lg:block lg:w-[480px] xl:w-[540px]'
              src='/assets/shared/desktop/image-best-gear.jpg'
              alt='Man listening to headphones'
            />
            <div className='flex flex-col gap-y-8 lg:justify-center'>
              <h2 className='text-center text-2xl font-bold uppercase lg:text-left'>
                Bringing You The <span className='text-primary'>Best</span> Audio gear
              </h2>
              <p className='mx-auto text-center text-[#10101080] md:w-9/12 lg:mx-0 lg:w-full lg:text-left'>
                Located at the heart of New York City, Audiophile is the premier store for high end
                headphones, earphones, speakers, and audio accessories. We have a large showroom and
                luxury demonstration rooms available for you to browse and experience a wide range
                of our products. Stop by our store to meet some of the fantastic people who make
                Audiophile the best place to buy your portable audio equipment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EarphonesProduct;
