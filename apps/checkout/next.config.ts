const sharedConfig = require('../shared/next.shared.config.cjs');
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  ...sharedConfig,
  // Adicione aqui configurações específicas do checkout, se necessário
};

export default nextConfig;
