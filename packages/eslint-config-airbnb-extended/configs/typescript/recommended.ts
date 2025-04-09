import typescriptConfig from '@/configs/typescript/index';
import { jsExtensionsResolver, tsExtensionsWithReactDTS } from '@/utils';

import type { Linter } from 'eslint';

const typescriptRecommendedConfig = {
  base: Object.values(typescriptConfig),
  react: [
    {
      name: 'airbnb/config/typescript-react',
      rules: {
        // only .jsx and .tsx files may have JSX
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
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
