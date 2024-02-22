import Link from 'next/link';
import Image from 'next/image';

import ButtonLink from '@/app/ui/button-link';

const Headphones: React.FC = () => {
  return (
    <>
      <div className='product-header flex h-[75px] flex-col justify-center bg-black-tertiary md:h-[120px]'>
        <h1 className='text-center text-2xl font-medium uppercase text-white-primary'>
          Headphones
        </h1>
      </div>
      <section className='featured-headphones flex flex-col items-center gap-y-10 px-6 pb-12 sm:pb-16 md:p-10 lg:px-20 xl:px-40 2xl:px-56 3xl:px-60 4xl:px-80'>
        <div className='featured-item flex flex-col lg:flex-row'>
          <img
            className='md:hidden'
            src='/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview-no-bg.png'
            alt='XX99 Mark 2 Headphones'
          />
          <img
            className='xs:hidden md:block lg:hidden'
            src='/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview-no-bg.png'
            alt='XX99 Mark 2 Headphones'
          />
          <img
            className='xs:hidden lg:block lg:h-auto lg:w-[480px] xl:w-[540px]'
            src='/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview-no-bg.png'
            alt='XX99 Mark 2 Headphones'
          />
          <div className='flex flex-col items-center gap-y-4 md:gap-y-6 lg:w-[384px] lg:items-start lg:pt-24 xl:w-[445px]'>
            <p className='text-sm/[14px] uppercase tracking-[.6250em] text-primary lg:mr-auto'>
              New Product
            </p>
            <h2 className='text-2xl font-bold uppercase md:text-3xl lg:mr-auto'>
              XX99 Mark II Headphones
            </h2>
            <p className='text-center text-[#10101080] lg:text-left'>
              The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your
              premium headphone experience by reproducing the balanced depth and precision of
              studio-quality sound.
            </p>
            <ButtonLink
              cta='View Product'
              href='/headphones/3'
              variant='primary'
            />
          </div>
        </div>
        <div className='featured-item flex flex-col lg:flex-row-reverse'>
          <img
            className='md:hidden'
            src='/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview-no-bg.png'
            alt='XX99 Mark 1 Headphones'
          />
          <img
            className='xs:hidden md:block lg:hidden'
            src='/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview-no-bg.png'
            alt='XX99 Mark 1 Headphones'
          />
          <img
            className='xs:hidden lg:block lg:h-auto lg:w-[480px] xl:w-[540px]'
            src='/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview-no-bg.png'
            alt='XX99 Mark 1 Headphones'
          />
          <div className='flex flex-col items-center gap-y-4 md:gap-y-6 lg:w-[384px] lg:items-start lg:pt-32 xl:w-[445px]'>
            <h2 className='text-2xl font-bold uppercase md:text-3xl lg:mr-auto'>
              XX99 Mark I Headphones
            </h2>
            <p className='text-center text-[#10101080] lg:text-left'>
              As the gold standard for headphones, the classic XX99 Mark I offers detailed and
              accurate audio reproduction for audiophiles, mixing engineers, and music aficionados
              alike in studios and on the go.
            </p>
            <ButtonLink
              cta='View Product'
              href='/headphones/2'
              variant='primary'
            />
          </div>
        </div>
        <div className='featured-item flex flex-col lg:flex-row'>
          <img
            className='md:hidden'
            src='/assets/product-xx59-headphones/mobile/image-category-page-preview-no-bg.png'
            alt='XX59 Headphones'
          />
          <img
            className='xs:hidden md:block lg:hidden'
            src='/assets/product-xx59-headphones/tablet/image-category-page-preview-no-bg.png'
            alt='XX59 Headphones'
          />
          <img
            className='xs:hidden lg:block lg:h-auto lg:w-[480px] xl:w-[540px]'
            src='/assets/product-xx59-headphones/desktop/image-category-page-preview-no-bg.png'
            alt='XX59 Headphones'
          />
          <div className='flex flex-col items-center gap-y-4 md:gap-y-6 lg:w-[384px] lg:items-start lg:pt-32 xl:w-[445px]'>
            <h2 className='text-2xl font-bold uppercase md:text-3xl lg:mr-auto'>XX59 Headphones</h2>
            <p className='text-center text-[#10101080] lg:text-left'>
              Enjoy your audio almost anywhere and customize it to your specific tastes with the
              XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant
              companion at home or on the move.
            </p>
            <ButtonLink
              cta='View Product'
              href='/headphones/1'
              variant='primary'
            />
          </div>
        </div>
      </section>
      <section className='categories flex flex-col items-center gap-y-10 px-6 py-12 sm:py-16 md:flex-row md:px-10 md:py-24 lg:px-20 xl:px-40 2xl:px-56 3xl:px-60 4xl:px-80'>
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
      </section>
      <section className='about flex flex-col items-center gap-y-10 px-6 py-12 sm:py-16 md:px-10 md:py-24 lg:px-20 xl:px-40 2xl:px-56 3xl:px-60 4xl:px-80'>
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
            <h2 className='text-center text-2xl font-bold uppercase md:text-3xl lg:text-left'>
              Bringing You The <span className='text-primary'>Best</span> Audio gear
            </h2>
            <p className='mx-auto text-center text-[#10101080] md:w-9/12 lg:mx-0 lg:w-full lg:text-left'>
              Located at the heart of New York City, Audiophile is the premier store for high end
              headphones, earphones, speakers, and audio accessories. We have a large showroom and
              luxury demonstration rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic people who make
              Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Headphones;
