import React from 'react';
import type { Metadata } from 'next';

import { manrope } from '@/app/ui/fonts';
import '@/app/global.css';

export const metadata: Metadata = {
  title: 'Audiophile | Ecommerce',
  description:
    'E-commerce website for those who are enthusiastic about high-fidelity sound reproduction',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element => {
  return (
    <html lang='en'>
      <body className={`${manrope.className} antialiased`}>
        <header>Header</header>
        <main className='flex min-h-screen flex-col'>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;
