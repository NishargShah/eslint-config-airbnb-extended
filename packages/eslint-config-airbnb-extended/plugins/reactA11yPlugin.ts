import type { Linter } from 'eslint';

// @ts-expect-error eslint-plugin-import not working in import
// eslint-disable-next-line @typescript-eslint/no-require-imports,unicorn/prefer-module
const EsLintPluginJSXA11y = require('eslint-plugin-jsx-a11y');

export default {
  name: 'airbnb/config/plugin/react-a11y',
  plugins: {
    'jsx-a11y': EsLintPluginJSXA11y,
  },
} satisfies Linter.Config;
