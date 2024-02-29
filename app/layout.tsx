import React from 'react';
import type { Metadata } from 'next';

import AppProvider from '@/app/app-provider';
import App from '@/app/app';

export const metadata: Metadata = {
  title: 'Audiophile | E-commerce',
  description:
    'E-commerce website for those who are enthusiastic about high-fidelity sound reproduction',
  openGraph: {
    title: 'Audiophile | E-commerce',
    description:
      'E-commerce website for those who are enthusiastic about high-fidelity sound reproduction',
    images: [
      {
        url: 'https://audiophile-teal.vercel.app/assets/home/mobile/image-header-1.jpg',
        width: 750,
        height: 1200,
        alt: 'XX99 Mark II Headphones',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element => {
  return (
    <AppProvider>
      <App children={children} />
    </AppProvider>
  );
};

export default RootLayout;
