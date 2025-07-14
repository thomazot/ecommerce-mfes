
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@ecommerce-mfe/shared'],
  images: {
    domains: ['fakestoreapi.com'],
  },
};

export default nextConfig;