'use client';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/app/ui/logo';

const Footer: React.FC = () => {
  return (
    <footer className='h-[654px] w-full bg-black-tertiary md:h-[400px] xl:h-[365px]'>
      <div className='flex justify-center md:ml-10 md:justify-start lg:ml-20 xl:ml-40 2xl:ml-56 3xl:ml-60 4xl:ml-80'>
        <div className='absolute z-0 w-[101px] border-b-4 border-primary' />
      </div>
      <div className='flex h-full flex-col items-center justify-evenly px-6 md:items-start md:px-10 lg:px-20 xl:px-40 2xl:px-56 3xl:px-60 4xl:px-80'>
        <div className='flex w-full flex-col items-center gap-y-10 md:items-start xl:flex-row xl:items-center xl:justify-between'>
          <Logo />
          <ul className='flex w-full flex-col items-center gap-y-8 md:flex-row md:gap-x-10 xl:w-auto'>
            <li className='text-sm/[13px] font-[600] uppercase'>
              <Link
                className='text-white-primary hover:text-secondary focus:text-secondary active:text-primary'
                href='/headphones'
                tabIndex={0}
              >
                Headphones
              </Link>
            </li>
            <li className='text-sm/[13px] font-[600] uppercase'>
              <Link
                className='text-white-primary hover:text-secondary focus:text-secondary active:text-primary'
                href='/speakers'
                tabIndex={0}
              >
                Speakers
              </Link>
            </li>
            <li className='text-sm/[13px] font-[600] uppercase'>
              <Link
                className='text-white-primary hover:text-secondary focus:text-secondary active:text-primary'
                href='/earphones'
                tabIndex={0}
              >
                Earphones
              </Link>
            </li>
          </ul>
        </div>
        <p className='text-center font-[400] text-white-primary/50 md:text-left lg:w-5/6 xl:w-4/6'>
          {`Audiophile is an all in one stop to fulfill your audio needs. We\'re a small team of music
          lovers and sound specialists who are devoted to helping you get the most out of personal
          audio. Come and visit our demo facility - we\'re open 7 days a week.`}
        </p>
        <div className='flex flex-col gap-y-10 md:w-full md:flex-row md:justify-between'>
          <p className='text-center font-[600] text-white-primary/50'>
            &copy; Copyright 2021. All Rights Reserved
          </p>
          <div className='mx-auto flex w-[104px] justify-between md:ml-auto md:mr-[0]'>
            <Link
              href='/'
              tabIndex={0}
            >
              <Image
                src='/assets/shared/desktop/icon-facebook.svg'
                alt='Facebook'
                width={24}
                height={24}
              />
            </Link>
            <Link
              href='/'
              tabIndex={0}
            >
              <Image
                src='/assets/shared/desktop/icon-twitter.svg'
                alt='Twitter'
                width={24}
                height={20}
              />
            </Link>
            <Link
              href='/'
              tabIndex={0}
            >
              <Image
                src='/assets/shared/desktop/icon-instagram.svg'
                alt='Instagram'
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
