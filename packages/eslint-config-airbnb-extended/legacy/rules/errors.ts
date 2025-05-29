import errorsRules from '@/rules/errors';

import type { Linter } from 'eslint';

const legacyErrorsRules = {
  ...errorsRules,
  name: `${errorsRules.name}/legacy`,
  rules: {
    ...errorsRules.rules,

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false,
      },
    ],

    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // Disallow new operators with global non-constructor functions
    // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    'no-new-native-nonconstructor': 'off',

    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    'no-negated-in-lhs': 'off',

    // ensure JSDoc comments are valid
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',
  },
} satisfies Linter.Config;

export default legacyErrorsRules;
