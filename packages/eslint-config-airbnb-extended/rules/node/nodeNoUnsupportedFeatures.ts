import type { Linter } from 'eslint';

const nodeNoUnsupportedFeaturesRules = {
  name: 'airbnb/config/node/unsupported-features',
  rules: {
    // Disallow unsupported ECMAScript built-ins on the specified version
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-builtins.md
    'n/no-unsupported-features/es-builtin': 'error',

    // Disallow unsupported ECMAScript syntax on the specified version
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-syntax.md
    'n/no-unsupported-features/es-syntax': 'error',

    // Disallow unsupported Node.js built-in APIs on the specified version
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/node-builtins.md
    'n/no-unsupported-features/node-builtins': 'error',
  },
} satisfies Linter.Config;

export default nodeNoUnsupportedFeaturesRules;
