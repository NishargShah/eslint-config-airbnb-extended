import baseConfig from '@/configs/base/config';
import getStylisticLegacyConfig from '@/helpers/getStylisticLegacyConfig';

import type { Linter } from 'eslint';

const baseRecommendedConfig = [
  ...Object.values(baseConfig),
  {
    name: 'airbnb/config/base-language-configurations',
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
  },
  {
    name: 'airbnb/config/base-disable-legacy-stylistic-js-config',
    ...getStylisticLegacyConfig('javascript'),
  },
] satisfies Linter.Config[];

export default baseRecommendedConfig;
