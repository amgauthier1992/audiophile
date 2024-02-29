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
      </Head>
      <AppProvider>
        <App children={children} />
      </AppProvider>
    </>
  );
};

export default RootLayout;
