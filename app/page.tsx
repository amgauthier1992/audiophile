import Link from 'next/link';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <>
      <div className='hero-container relative'>
        <img
          alt='XX99 Mark Two Headphones'
          className='sm:hidden'
          src='/assets/home/mobile/image-header-1.jpg'
        />
        <img
          alt='XX99 Mark Two Headphones'
          className='xs:hidden sm:block lg:hidden'
          src='/assets/home/tablet/image-header-tablet.jpg'
        />
        <img
          alt='XX99 Mark Two Headphones'
          className='xs:hidden lg:block'
          src='/assets/home/desktop/image-hero-desktop.jpg'
        />
        <div className='hero-content 3xl:px-60 4xl:px-80 absolute inset-0 flex flex-col items-center justify-center gap-y-6 px-4 sm:px-16 md:px-32 lg:items-start lg:px-20 xl:px-40 2xl:px-56'>
          <p className='text-center text-[.875rem] uppercase tracking-[.625em] text-[#fafafa80]'>
            New Product
          </p>
          <h1 className='text-white-primary text-center text-[2.25rem] font-bold uppercase lg:w-[400px] lg:text-left'>
            XX99 Mark II Headphones
          </h1>
          <p className='text-center text-[.9375rem] font-[400] text-[#fafafa80] lg:w-[400px] lg:text-left'>
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </p>
          <Link
            href='/headphones/#'
            tabIndex={0}
          >
            <button className='text-white-primary hover:bg-secondary bg-primary h-[48px] w-[160px] text-[.8125rem] font-bold uppercase'>
              View Product
            </button>
          </Link>
        </div>
      </div>
      <section className='categories 3xl:px-60 4xl:px-80 flex flex-col items-center gap-y-10 px-6 py-12 sm:py-16 md:flex-row md:px-10 md:py-24 lg:px-20 xl:px-40 2xl:px-56'>
        <div className='category-headphones w-full'>
          <img
            alt='XX99 Mark One Headphones'
            className='mx-auto'
            src='/assets/cart/image-xx99-mark-one-headphones.jpg'
          />
          <div className='flex flex-col items-center gap-y-2'>
            <p className='text-center font-bold uppercase'>Headphones</p>
            <Link
              className='hover:text-primary focus:text-primary text-[.8125rem] font-bold uppercase text-[#0000008b]'
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
            className='mx-auto'
            src='/assets/cart/image-zx9-speaker.jpg'
          />
          <div className='flex flex-col items-center gap-y-2'>
            <p className='text-center font-bold uppercase'>Speakers</p>
            <Link
              className='hover:text-primary focus:text-primary text-[.8125rem] font-bold uppercase text-[#0000008b]'
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
            className='mx-auto'
            src='/assets/cart/image-yx1-earphones.jpg'
          />
          <div className='flex flex-col items-center gap-y-2'>
            <p className='text-center font-bold uppercase'>Earphones</p>
            <Link
              className='hover:text-primary focus:text-primary text-[.8125rem] font-bold uppercase text-[#0000008b]'
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
      <section className='featured 3xl:px-60 4xl:px-80 flex flex-col items-center gap-y-8 px-6 py-12 sm:py-16 md:gap-y-12 md:px-10 md:py-6 lg:px-20 xl:px-40 2xl:px-56'>
        <div className='bg-primary pattern-background h-[575px] w-full rounded-md bg-cover bg-center bg-no-repeat px-6 py-14 lg:hidden'>
          <img
            className='mx-auto mb-8 h-[208px] w-[172px]'
            src='/assets/home/mobile/image-speaker-zx9.png'
            alt='ZX9 Speaker'
          />
          <div className='flex flex-col gap-y-6'>
            <h2 className='text-white-primary text-center text-[1.75rem] font-bold uppercase'>
              ZX9 Speaker
            </h2>
            <p className='text-center text-[#fafafa80]'>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
              sound.
            </p>
            <Link
              className='mx-auto text-center'
              href='/speakers/#'
              tabIndex={0}
            >
              <button className='text-black-primary bg-white-primary hover:text-white-primary hover:bg-black-primary h-[48px] w-[160px] text-[.8125rem] font-bold uppercase'>
                View Product
              </button>
            </Link>
          </div>
        </div>
        <div className='xs:hidden bg-primary pattern-background-lg grid-cols-[(1fr, 1fr)] relative h-[575px] w-full rounded-md bg-cover bg-no-repeat px-28 lg:grid'>
          <img
            className='absolute bottom-0 left-32 w-[340px]'
            src='/assets/home/desktop/image-speaker-zx9.png'
            alt='ZX9 Speaker'
          />
          <div className='4xl:right-32 3xl:right-24 absolute w-[300px] lg:right-4 xl:right-12'>
            <h2 className='text-white-primary text-[2.25rem] font-bold uppercase'>ZX9 Speaker</h2>
            <p className='text-white-primary my-6'>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
              sound.
            </p>
            <Link
              className='mr-auto block w-[160px]'
              href='/speakers/#'
              tabIndex={0}
            >
              <button className='text-black-primary bg-white-primary hover:text-white-primary hover:bg-black-primary h-[48px] w-[160px] text-[.8125rem] font-bold uppercase'>
                View Product
              </button>
            </Link>
          </div>
        </div>
        <div className='speaker-background-mobile speaker-background-tablet speaker-background-desktop flex w-full flex-col gap-y-4 rounded-md bg-cover bg-no-repeat px-6 py-[101px] md:px-10'>
          <h2 className='text-[1.75rem] font-bold uppercase'>ZX7 Speaker</h2>
          <Link
            className='mr-auto block w-[160px]'
            href='/speakers/#'
            tabIndex={0}
          >
            <button className='text-black-primary bg-white-primary hover:text-white-primary hover:bg-black-primary h-[48px] w-[160px] border-2 text-[.8125rem] font-bold uppercase'>
              View Product
            </button>
          </Link>
        </div>
        <div className='flex w-full flex-col gap-y-6 md:flex-row md:items-center md:rounded-md md:bg-[#f1f1f1]'>
          <img
            className='w-full rounded-md'
            src='/assets/home/mobile/image-earphones-yx1.jpg'
            alt='YX1 Earphones'
          />
          <div className='flex flex-col items-center gap-y-4 md:w-9/12'>
            <h2 className='text-[1.75rem] font-bold uppercase'>YX1 Earphones</h2>
            <Link
              href='/earphones/#'
              tabIndex={0}
            >
              <button className='text-black-primary bg-white-primary hover:text-white-primary hover:bg-black-primary h-[48px] w-[160px] border-2 text-[.8125rem] font-bold uppercase'>
                View Product
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className='summary 3xl:px-60 4xl:px-80 flex flex-col items-center gap-y-10 px-6 py-12 sm:py-16 md:px-10 md:py-24 lg:px-20 xl:px-40 2xl:px-56'>
        <div className='flex flex-col gap-y-6 lg:flex-row-reverse lg:gap-x-8 xl:gap-x-20'>
          <img
            className='w-full rounded-md md:hidden'
            src='/assets/shared/mobile/image-best-gear.jpg'
            alt='Man listening to headphones'
          />
          <img
            className='xs:hidden w-full rounded-md md:block lg:hidden'
            src='/assets/shared/tablet/image-best-gear.jpg'
            alt='Man listening to headphones'
          />
          <img
            className='xs:hidden w-full rounded-md lg:block lg:w-[480px] xl:w-[540px]'
            src='/assets/shared/desktop/image-best-gear.jpg'
            alt='Man listening to headphones'
          />
          <div className='flex flex-col gap-y-8 lg:justify-center'>
            <h2 className='text-center text-[1.75rem] font-bold uppercase lg:text-left'>
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

export default Home;
