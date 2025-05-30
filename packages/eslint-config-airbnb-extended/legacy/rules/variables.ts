import variablesRules from '@/rules/variables';

import type { Linter } from 'eslint';

const legacyVariablesRules = {
  ...variablesRules,
  name: `${variablesRules.name}/legacy`,
  rules: {
    ...variablesRules.rules,

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',

    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
  },
} satisfies Linter.Config;

export default legacyVariablesRules;
