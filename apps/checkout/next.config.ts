import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@ecommerce-mfe/shared'],
  assetPrefix: '/checkout',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/img/**',
      },
    ],
  },
};

export default nextConfig;
