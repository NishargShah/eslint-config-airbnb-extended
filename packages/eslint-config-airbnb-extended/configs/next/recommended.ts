import nextConfig from '@/configs/next/config';
import reactRecommendedConfig from '@/configs/react/recommended';
import nextRecommendedExtensionsConfig from '@/extensions/next/recommended';

import type { Linter } from 'eslint';

const nextRecommendedConfig = [
  ...reactRecommendedConfig,
  ...Object.values(nextConfig),
  ...nextRecommendedExtensionsConfig,
] satisfies Linter.Config[];

export default nextRecommendedConfig;
