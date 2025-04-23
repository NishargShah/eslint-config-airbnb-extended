import { jsExtensionsResolver, tsExtensionsWithReactDTS, tsFiles } from '@/utils';

import type { Linter } from 'eslint';

const reactTypescriptConfig = [
  {
    name: 'airbnb/config/react-typescript-react',
    files: tsFiles,
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
    name: 'airbnb/config/react-typescript-import-x',
    files: tsFiles,
    settings: {
      'import-x/resolver': {
        node: {
          extensions: [...jsExtensionsResolver, ...tsExtensionsWithReactDTS],
        },
      },
    },
  },
] satisfies Linter.Config[];

export default reactTypescriptConfig;
