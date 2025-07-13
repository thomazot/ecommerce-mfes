import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import esbuild from 'rollup-plugin-esbuild';

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    esbuild({
      target: 'es2021',
      jsx: 'automatic',
      jsxImportSource: 'react',
      sourceMap: true,
    }),
  ],
};
