import type { Config } from 'tailwindcss';
import path from 'path';

const config: Config = {
  content: [
    path.relative(__dirname, './../shared/src/**/*.{ts,tsx,js,jsx,mdx}'),
    path.relative(__dirname, './../ecommerce/src/**/*.{ts,tsx,js,jsx,mdx}'),
    path.relative(__dirname, './../checkout/src/**/*.{ts,tsx,js,jsx,mdx}'),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af'
      },
      borderRadius: {
        xl: '1.25rem'
      }
    }
  },
  plugins: []
};

export default config;