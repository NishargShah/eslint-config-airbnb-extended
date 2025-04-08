import type { Linter } from 'eslint';

// @ts-expect-error eslint-plugin-import not working in import
// eslint-disable-next-line @typescript-eslint/no-require-imports,unicorn/prefer-module
const ESLintPluginNext = require('@next/eslint-plugin-next');

const nextRules = {
  name: 'airbnb/config/next',
  rules: {
    ...ESLintPluginNext.configs.recommended.rules,
    ...ESLintPluginNext.configs['core-web-vitals'].rules,
  },
} satisfies Linter.Config;

export default nextRules;
