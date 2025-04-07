import typescript from '@/typescript';
import { jsExtensionsResolver, tsExtensionsWithReactDTS } from '@/utils';

import type { Linter } from 'eslint';

export default {
  base: typescript.typescript,
  react: [
    ...typescript.typescript,
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
