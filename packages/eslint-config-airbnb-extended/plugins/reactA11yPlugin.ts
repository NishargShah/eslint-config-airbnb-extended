import type { Linter } from 'eslint';

// @ts-expect-error eslint-plugin-import not working in import
// eslint-disable-next-line @typescript-eslint/no-require-imports,unicorn/prefer-module
const plugin = require('eslint-plugin-jsx-a11y');

const reactA11yPlugin = {
  name: 'airbnb/config/plugin/react-a11y',
  plugins: {
    'jsx-a11y': plugin,
  },
} satisfies Linter.Config;

export default reactA11yPlugin;
