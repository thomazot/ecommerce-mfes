module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './apps/ecommerce/tsconfig.json',
      './apps/checkout/tsconfig.json',
      './apps/shared/tsconfig.eslint.json',
      './apps/core/tsconfig.json',
      './tsconfig.json',
    ],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  ignorePatterns: [
    '**/node_modules/**',
    '**/.next/**',
    '**/dist/**',
    '**/coverage/**',
    '**/*.d.ts',
    '**/*.config.js',
    '**/*.config.cjs',
    '**/*.config.mjs',
    '**/*.config.ts',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.js',
    '**/generate-barrels.js',
  ],
  rules: {
    'next/no-html-link-for-pages': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
};
