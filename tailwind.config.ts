import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#D87D4A',
      secondary: '#FBAF85',
      black: {
        primary: '#000000',
        secondary: '#101010',
        tertiary: '#1c1c1c',
      },
      white: {
        primary: '#FFFFFF',
        secondary: '#F1F1F1',
        tertiary: '#FAFAFA',
      },
    },
    extend: {
      spacing: {},
    },
    screens: {
      'xs': '0px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

export default config;
