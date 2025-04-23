import baseConfig from '@/configs/base/config';
import getStylisticLegacyConfig from '@/helpers/getStylisticLegacyConfig';
import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const baseRecommendedConfig = [
  ...Object.values(baseConfig),
  {
    name: 'airbnb/config/base-language-configurations',
    files: allFiles,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
  },
  {
    name: 'airbnb/config/base-disable-legacy-stylistic-js-config',
    files: allFiles,
    ...getStylisticLegacyConfig('javascript'),
  },
] satisfies Linter.Config[];

export default baseRecommendedConfig;
