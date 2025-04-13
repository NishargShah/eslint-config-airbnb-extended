import baseRecommendedConfig from '@/configs/base/recommended';
import baseTypescriptConfig from '@/configs/base/typescript';

import type { Linter } from 'eslint';

const base = {
  recommended: baseRecommendedConfig,
  typescript: baseTypescriptConfig,
  all: [...baseRecommendedConfig, ...baseTypescriptConfig],
} satisfies Record<string, Linter.Config[]>;

export default base;
