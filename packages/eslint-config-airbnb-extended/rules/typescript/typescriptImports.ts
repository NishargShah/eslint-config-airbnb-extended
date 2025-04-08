import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

import getDevDepsList from '@/helpers/getDevDepsList';
import {
  jsExtensions,
  jsExtensionsResolver,
  jsExtensionsWithReact,
  tsExtensions,
  tsExtensionsResolver,
  tsExtensionsRule,
  tsExtensionsWithReactDTS,
} from '@/utils';

import type { Linter } from 'eslint';

/**
 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/master/src/config/typescript.ts
 */
export default {
  name: 'airbnb/config/typescript/import-x',
  settings: {
    // Apply special parsing for TypeScript files
    'import-x/parsers': {
      '@typescript-eslint/parser': tsExtensionsResolver,
    },
    // Append 'ts' extensions to Airbnb 'import-x/resolver' setting
    'import-x/resolver': {
      node: {
        extensions: [...jsExtensionsResolver, ...tsExtensionsResolver],
      },
    },
    // Import Resolver for import-x package
    'import-x/resolver-next': [
      createTypeScriptImportResolver({
        alwaysTryTypes: true,
      }),
    ],
    // Append 'ts' extensions to Airbnb 'import-x/extensions' setting
    'import-x/extensions': [...jsExtensionsWithReact, ...tsExtensionsWithReactDTS],
    // Resolve type definition packages
    'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  rules: {
    // Append 'ts' and 'tsx' to Airbnb 'import-x/extensions' rule
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
    'import-x/extensions': ['error', 'ignorePackages', tsExtensionsRule],

    // Append 'ts' and 'tsx' extensions to Airbnb 'import-x/no-extraneous-dependencies' rule
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
    'import-x/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: getDevDepsList(
          [...jsExtensions, ...tsExtensions].map((ext) => ext.slice(1)).join(','),
        ),
        optionalDependencies: false,
        peerDependencies: true,
        bundledDependencies: true,
      },
    ],

    // See: https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import

    // TypeScript compilation already ensures that named imports exist in the referenced module
    'import-x/named': 'off',
    // warn on accessing default export property names that are also named exports
    'import-x/no-named-as-default-member': 'off',
  },
} satisfies Linter.Config;
