import baseConfig from '@/configs/base/config';

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
  },
] satisfies Linter.Config[];

export default baseRecommendedConfig;
