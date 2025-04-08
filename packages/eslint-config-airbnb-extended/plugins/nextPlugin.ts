import type { Linter } from 'eslint';

// @ts-expect-error eslint-plugin-import not working in import
// eslint-disable-next-line @typescript-eslint/no-require-imports,unicorn/prefer-module
const ESLintPluginNext = require('@next/eslint-plugin-next');

export default {
  name: 'airbnb/config/plugin/next',
  plugins: {
    '@next/next': ESLintPluginNext,
  },
} satisfies Linter.Config;
