import {
  jsExtensionsResolver,
  jsExtensionsWithReact,
  tsExtensions,
  tsExtensionsResolver,
  tsExtensionsRule,
  tsExtensionsWithReactDTS,
} from '@/utils';

import { getDevDepsList } from '@/helpers/getDevDepsList';

import type { Linter } from 'eslint';

export default {
  name: 'airbnb/config/typescript/import-x',
  settings: {
    // Append 'ts' extensions to Airbnb 'import-x/resolver' setting
    'import-x/resolver': {
      node: {
        extensions: [...jsExtensionsResolver, ...tsExtensionsResolver],
      },
    },
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
        devDependencies: getDevDepsList(tsExtensions.join(',')),
        optionalDependencies: false,
        peerDependencies: true,
        bundledDependencies: true,
      },
    ],
  },
} satisfies Linter.Config;
