import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@shared'] = path.resolve(__dirname, '../shared');
    return config;
  },
};

export default nextConfig;
