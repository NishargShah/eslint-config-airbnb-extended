import typescript, { importResolverExtensions } from '@/rules/typescript';

import type { Linter } from 'eslint';

export default {
  base: typescript,
  react: [
    ...typescript,
    {
      name: 'airbnb/config/typescript-react',
      settings: {
        // Append 'tsx' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
          node: {
            extensions: [...importResolverExtensions, '.tsx'],
          },
        },
      },
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
  ],
} satisfies Record<string, Linter.Config[]>;
