import getDevDepsList from '@/helpers/getDevDepsList';
import { jsExtensions, tsExtensions, tsExtensionsRule, tsFiles } from '@/utils';

import type { Linter } from 'eslint';

/**
 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/master/src/config/typescript.ts
 */
const typescriptImportsRules = {
  name: 'airbnb/config/typescript/import-x',
  files: tsFiles,
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

export default typescriptImportsRules;
