import typescriptConfig from '@/configs/typescript/index';
import { jsExtensionsResolver, tsExtensionsWithReactDTS } from '@/utils';

import type { Linter } from 'eslint';

const typescriptRecommendedConfig = {
  base: Object.values(typescriptConfig),
  react: [
    ...Object.values(typescriptConfig),
    {
      name: 'airbnb/config/typescript-react',
      rules: {
        // Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.jsx', '.tsx'],
          },
        ],
      },
    },
    {
      name: 'airbnb/config/typescript-import-x',
      settings: {
        'import-x/resolver': {
          node: {
            extensions: [...jsExtensionsResolver, ...tsExtensionsWithReactDTS],
          },
        },
      },
    },
  ],
} satisfies Record<string, Linter.Config[]>;

export default typescriptRecommendedConfig;
