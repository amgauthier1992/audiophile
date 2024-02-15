import React from 'react';
import type { Metadata } from 'next';

import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import { manrope } from '@/app/ui/fonts';
import '@/app/global.css';

export const metadata: Metadata = {
  title: 'Audiophile | E-commerce',
  description:
    'E-commerce website for those who are enthusiastic about high-fidelity sound reproduction',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element => {
  return (
    <html lang='en'>
      <body className={`${manrope.className} relative flex min-h-screen flex-col antialiased`}>
        <Header />
        <main className='flex-1 flex-col'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
