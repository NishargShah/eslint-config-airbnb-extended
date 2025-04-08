import baseConfig from '@/configs/base/index';

import type { Linter } from 'eslint';

const baseRecommendedConfig = [
  ...Object.values(baseConfig),
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

export default baseRecommendedConfig;
