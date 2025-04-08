import { parser, plugin } from 'typescript-eslint';

import type { Linter } from 'eslint';

export default {
  name: 'airbnb/config/plugin/typescript-eslint',
  plugins: {
    '@typescript-eslint': plugin,
  },
  languageOptions: {
    parser,
    parserOptions: {
      projectService: true,
    },
  },
} as Linter.Config;
