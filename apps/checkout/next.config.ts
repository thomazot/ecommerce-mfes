import path from 'path';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@ecommerce-mfe/shared'],
  assetPrefix: '/checkout',
};

export default nextConfig;
