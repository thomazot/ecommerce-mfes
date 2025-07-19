// Plugin para suprimir warnings de 'use client' no Rollup
function suppressUseClientWarning() {
  return {
    name: 'suppress-use-client-warning',
    onwarn(warning, warn) {
      if (
        warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
        warning.message.includes('"use client"')
      ) {
        return; // Suprime o warning
      }
      warn(warning);
    },
  };
}

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import esbuild from 'rollup-plugin-esbuild';
import preserveDirectives from 'rollup-plugin-preserve-directives';

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: isProd ? false : true,
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  plugins: [
    suppressUseClientWarning(),
    resolve(),
    commonjs(),
    json(),
    esbuild({
      target: 'es2021',
      jsx: 'automatic',
      jsxImportSource: 'react',
      sourceMap: true,
    }),
    preserveDirectives(),
  ],
};
