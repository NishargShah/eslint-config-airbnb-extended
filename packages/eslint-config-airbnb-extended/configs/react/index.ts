import reactRecommendedConfig from '@/configs/react/recommended';
import reactTypescriptConfig from '@/configs/react/typescript';

import type { Linter } from 'eslint';

const react = {
  recommended: reactRecommendedConfig,
  typescript: reactTypescriptConfig,
  all: [...reactRecommendedConfig, ...reactTypescriptConfig],
} satisfies Record<string, Linter.Config[]>;

export default react;
