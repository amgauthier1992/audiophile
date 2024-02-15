'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CallbackVoid } from '@/app/lib/definitions';

const MenuMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        toggleMenu();
        hamburgerButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.body.classList.toggle('overflow-y-hidden', isOpen);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const toggleMenu: CallbackVoid = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className='lg:hidden'>
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className='block rounded p-1'
        onClick={toggleMenu}
        ref={hamburgerButtonRef}
      >
        <Image
          src='/assets/shared/tablet/icon-hamburger.svg'
          alt='Navigation menu'
          height={16}
          width={16}
        />
      </button>
      {isOpen && (
        <div
          className='fixed left-0 top-0 z-40 h-screen w-full overflow-y-hidden bg-black-tertiary'
          ref={menuRef}
        >
          <button
            className='absolute ml-5 mt-7 p-1'
            onClick={toggleMenu}
            tabIndex={0}
          >
            <svg
              className='size-6 text-white-primary hover:text-secondary'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <div className='flex h-full flex-col items-center gap-y-10 pt-20 text-2xl'>
            <Link
              href='/headphones'
              className='block px-4 py-2 uppercase text-white-primary hover:text-secondary focus:text-secondary active:text-primary'
              tabIndex={0}
            >
              Headphones
            </Link>
            <Link
              href='/speakers'
              className='block px-4 py-2 uppercase text-white-primary hover:text-secondary focus:text-secondary active:text-primary'
              tabIndex={0}
            >
              Speakers
            </Link>
            <Link
              href='/earphones'
              className='block px-4 py-2 uppercase text-white-primary hover:text-secondary focus:text-secondary active:text-primary'
              tabIndex={0}
            >
              Earphones
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
