import { parser, plugin } from 'typescript-eslint';

import { tsFiles } from '@/utils';

import type { Linter } from 'eslint';

const typescriptEslintPlugin = {
  name: 'airbnb/config/plugin/typescript-eslint',
  files: tsFiles,
  plugins: {
    '@typescript-eslint': plugin,
  },
  languageOptions: {
    parser,
  },
} as Linter.Config;

export default typescriptEslintPlugin;
