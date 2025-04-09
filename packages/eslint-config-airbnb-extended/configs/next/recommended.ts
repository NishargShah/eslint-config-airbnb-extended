import nextConfig from '@/configs/next/index';
import reactRecommendedConfig from '@/configs/react/recommended';

import type { Linter } from 'eslint';

const nextRecommendedConfig = [
  ...reactRecommendedConfig,
  ...Object.values(nextConfig),
  {
    name: 'airbnb/config/next-import-x',
    files: ['**/app/**/route.ts', '**/middleware.ts'],
    rules: {
      'import-x/prefer-default-export': 'off',
    },
  },
] satisfies Linter.Config[];

export default nextRecommendedConfig;
