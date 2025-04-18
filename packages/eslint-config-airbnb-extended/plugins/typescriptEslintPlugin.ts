import { parser, plugin } from 'typescript-eslint';

import type { Linter } from 'eslint';

const typescriptEslintPlugin = {
  name: 'airbnb/config/plugin/typescript-eslint',
  plugins: {
    '@typescript-eslint': plugin,
  },
  languageOptions: {
    parser,
  },
} as Linter.Config;

export default typescriptEslintPlugin;
