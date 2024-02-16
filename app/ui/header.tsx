'use client';

import Cart from '@/app/ui/cart';
import Menu from '@/app/ui/menu';
import MenuMobile from '@/app/ui/menu-mobile';
import Logo from '@/app/ui/logo';

const Header: React.FC = () => {
  return (
    <header className='bg-black-tertiary inset-x-0 min-h-[90px] border-b border-[#303030] 2xl:min-h-24'>
      <nav className='3xl:px-60 4xl:px-80 flex justify-between px-6 pt-8 md:px-10 lg:px-20 xl:px-40 2xl:px-56'>
        <MenuMobile />
        <Logo />
        <Menu />
        <Cart />
      </nav>
    </header>
  );
};

export default Header;
