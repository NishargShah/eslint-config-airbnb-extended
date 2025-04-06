import recommended from '@/base/recommended';
import react from '@/react';

import type { Linter } from 'eslint';
import { jsExtensionsWithReact } from '@/utils';

export default [
  ...recommended,
  ...Object.values(react),
  {
    name: 'airbnb/config/react-settings',
    settings: {
      'import-x/resolver': {
        node: {
          extensions: jsExtensionsWithReact,
        },
      },
    },
  },
] satisfies Linter.Config[];
