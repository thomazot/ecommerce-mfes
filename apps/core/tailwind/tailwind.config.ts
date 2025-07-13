import type { Config } from 'tailwindcss';
import path from 'path';

const config: Config = {
  content: [
    path.resolve(__dirname, '../apps/**/*.{ts,tsx,js,jsx,mdx}'),
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