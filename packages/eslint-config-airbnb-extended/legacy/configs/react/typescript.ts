import legacyTypescriptConfig from '@/legacy/configs/typescript/config';
import { tsFiles } from '@/utils';

import type { Linter } from 'eslint';

const legacyReactTypescriptConfig = [
  ...Object.values(legacyTypescriptConfig),
  {
    name: 'airbnb/config/react-configurations/typescript/legacy',
    files: tsFiles,
    settings: {
      // Append 'ts' extensions to Airbnb 'import/resolver' setting
      // Prepend 'mjs' to match shared config
      // Original: ['.js', '.jsx', '.json']
      'import/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
        },
      },
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
