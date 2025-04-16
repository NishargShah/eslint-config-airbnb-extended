import type { Linter } from 'eslint';

// eslint-disable-next-line @typescript-eslint/no-require-imports,unicorn/prefer-module
const plugin = require('@next/eslint-plugin-next');

const nextPlugin = {
  name: 'airbnb/config/plugin/next',
  plugins: {
    '@next/next': plugin,
  },
} satisfies Linter.Config;

export default nextPlugin;
