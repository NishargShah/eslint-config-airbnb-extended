import nextRecommendedConfig from '@/configs/next/recommended';
import nextTypescriptConfig from '@/configs/next/typescript';

import type { Linter } from 'eslint';

const next = {
  recommended: nextRecommendedConfig,
  typescript: nextTypescriptConfig,
  all: [...nextRecommendedConfig, ...nextTypescriptConfig],
} satisfies Record<string, Linter.Config[]>;

export default next;
