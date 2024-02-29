import React from 'react';
import type { Metadata } from 'next';
import Head from 'next/head';

import AppProvider from '@/app/app-provider';
import App from '@/app/app';

export const metadata: Metadata = {
  title: 'Audiophile | E-commerce',
  description:
    'E-commerce website for those who are enthusiastic about high-fidelity sound reproduction',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element => {
  return (
    <>
      <Head>
        <title>Audiophile | E-commerce</title>
        <meta
          name='description'
          content='E-commerce website for those who are enthusiastic about high-fidelity sound reproduction'
        />
        <meta
          property='og:title'
          content='Audiophile | E-commerce'
        />
        <meta
          property='og:description'
          content='E-commerce website for those who are enthusiastic about high-fidelity sound reproduction'
        />
        <meta
          property='og:image'
          content='/assets/home/mobile/image-header-1.jpg'
        />
      </Head>
      <AppProvider>
        <App children={children} />
      </AppProvider>
    </>
  );
};

export default RootLayout;
