'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';

import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import { manrope } from '@/app/ui/fonts';
import { useCart } from './ui/cart/context';

import '@/app/global.css';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element => {
  const { isCartOpen } = useCart();

  return (
    <html lang='en'>
      <body
        className={`${manrope.className} ${isCartOpen ? 'overflow-y-hidden' : ''} relative flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className='flex-1 flex-col'>{children}</main>
        <Footer />
        <ToastContainer
          autoClose={500}
          closeOnClick
          limit={1}
          pauseOnHover={false}
          draggable={false}
        />
      </body>
    </html>
  );
};

export default App;
