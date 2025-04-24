import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const nodeNoUnsupportedFeaturesRules = {
  name: 'airbnb/config/node/unsupported-features',
  files: allFiles,
  rules: {
    // Disallow unsupported ECMAScript built-ins on the specified version
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-builtins.md
    'n/no-unsupported-features/es-builtins': 'error',

    // Disallow unsupported ECMAScript syntax on the specified version
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-syntax.md
    'n/no-unsupported-features/es-syntax': 'off',

    // Disallow unsupported Node.js built-in APIs on the specified version
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/node-builtins.md
    'n/no-unsupported-features/node-builtins': 'error',
  },
} satisfies Linter.Config;

export default nodeNoUnsupportedFeaturesRules;
