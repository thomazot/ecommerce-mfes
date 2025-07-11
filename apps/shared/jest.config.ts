import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'schemas/**/*.{ts,tsx}',
    'services/**/*.{ts,tsx}',
    '!**/*.test.{ts,tsx}',
    '!**/index.{ts,tsx}'
  ],
  coverageReporters: ['text', 'lcov'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/__mocks__/svgMock.tsx'
  },
};

export default config; 