'use client';

import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <div className='xs:hidden lg:flex'>
      <ul className='flex flex-row gap-x-8'>
        <li className='text-sm/[13px] font-[600] uppercase leading-6'>
          <Link
            className='text-white-primary hover:text-secondary focus:text-secondary active:text-primary'
            href='/'
            tabIndex={0}
          >
            Home
          </Link>
        </li>
        <li className='text-sm/[13px] font-[600] uppercase leading-6'>
          <Link
            className='text-white-primary hover:text-secondary focus:text-secondary active:text-primary'
            href='/headphones'
            tabIndex={0}
          >
            Headphones
          </Link>
        </li>
        <li className='text-sm/[13px] font-[600] uppercase leading-6'>
          <Link
            className='text-white-primary hover:text-secondary focus:text-secondary active:text-primary'
            href='/speakers'
            tabIndex={0}
          >
            Speakers
          </Link>
        </li>
        <li className='text-sm/[13px] font-[600] uppercase leading-6'>
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
  );
};

export default Menu;
