import legacyTypescriptConfig from '@/legacy/configs/typescript/config';
import { tsExtensionsWithReactDTS, tsFiles } from '@/utils';

import type { Linter } from 'eslint';

const legacyReactTypescriptConfig = [
  ...Object.values(legacyTypescriptConfig),
  {
    name: 'airbnb/config/react-configurations/typescript/legacy',
    files: tsFiles,
    settings: {
      // Apply special parsing for TypeScript files
      'import/parsers': {
        '@typescript-eslint/parser': tsExtensionsWithReactDTS,
      },
      // Append 'ts' extensions to Airbnb 'import/resolver' setting
      // Prepend 'mjs' to match shared config
      // Original: ['.js', '.jsx', '.json']
      'import/resolver': {
        node: {
          extensions: [...tsExtensionsWithReactDTS, '.json'],
        },
        typescript: true,
      },
      // Append 'ts' extensions to Airbnb 'import/extensions' setting
      // Original: ['.js', '.mjs', '.jsx']
      'import/extensions': tsExtensionsWithReactDTS,
    },
    rules: {
      // Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
      // Original: ['.jsx']
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
    },
  },
] satisfies Linter.Config[];

export default legacyReactTypescriptConfig;
