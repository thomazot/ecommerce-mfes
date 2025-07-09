import nextJest from 'next/jest';
import { globalJestConfig } from '../../jest.global.config';

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