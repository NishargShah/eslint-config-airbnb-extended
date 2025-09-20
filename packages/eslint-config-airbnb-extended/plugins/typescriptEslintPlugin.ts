import { parser, plugin } from 'typescript-eslint';

import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const typescriptEslintPlugin = {
  name: 'airbnb/config/plugin/typescript-eslint',
  files: allFiles,
  plugins: {
    '@typescript-eslint': plugin,
  },
  languageOptions: {
    parser,
  },
} as Linter.Config;

export default typescriptEslintPlugin;
