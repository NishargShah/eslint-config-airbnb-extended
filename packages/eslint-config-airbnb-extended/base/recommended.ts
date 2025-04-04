import base from '@/base';

import type { Linter } from 'eslint';

export default [
  ...Object.values(base),
  {
    name: 'airbnb/config/language-configurations',
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
    rules: {},
  },
] satisfies Linter.Config[];
