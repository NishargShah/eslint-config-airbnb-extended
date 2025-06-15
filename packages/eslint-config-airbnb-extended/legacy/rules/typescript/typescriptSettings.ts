import { allFiles, tsExtensionsResolver } from '@/utils';

import type { Linter } from 'eslint';

const legacyTypescriptSettingsRules = {
  name: 'airbnb/config/typescript/settings/legacy',
  files: allFiles,
  settings: {
    // Apply special parsing for TypeScript files
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensionsResolver,
    },
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    // Original: ['.mjs', '.js', '.json']
    'import/resolver': {
      node: {
        extensions: [...tsExtensionsResolver, '.json'],
      },
      typescript: true,
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    // Original: ['.js', '.mjs', '.jsx']
    'import/extensions': tsExtensionsResolver,
    // Resolve type definition packages
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
} as Linter.Config;

export default legacyTypescriptSettingsRules;
