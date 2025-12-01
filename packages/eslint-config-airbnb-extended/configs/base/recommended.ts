import baseConfig from '@/configs/base/config';
import baseRecommendedExtensionsConfig from '@/extensions/base/recommended';

import type { Linter } from 'eslint';

const baseRecommendedConfig = [
  ...Object.values(baseConfig),
  ...baseRecommendedExtensionsConfig,
] as Linter.Config[];

export default baseRecommendedConfig;
