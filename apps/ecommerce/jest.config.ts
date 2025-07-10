import nextJest from 'next/jest';
const globalJestConfig = require('../../jest.global.config.cjs');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@shared/(.*)$': '<rootDir>/../shared/$1',
  },
  collectCoverage: true,
  // Ignora arquivos estruturais do Next.js e utilitários de teste no coverage
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    '!app/layout.tsx',
    '!app/providers.tsx',
    '!app/page.tsx',
    '!**/test-utils.{ts,tsx}',
    '!**/*.d.ts',
    '!../shared/next.shared.config.cjs',
  ],
  ...globalJestConfig,
};

export default createJestConfig(config); 