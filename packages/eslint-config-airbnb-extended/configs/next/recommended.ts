import nextConfig from '@/configs/next';
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
  {
    name: 'airbnb/config/next-react-jsx-runtime',
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
] satisfies Linter.Config[];

export default nextRecommendedConfig;
