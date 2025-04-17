import bestPracticesRules from '@/rules/best-practices';
import es6Rules from '@/rules/es6';
import styleRules from '@/rules/style';
import variablesRules from '@/rules/variables';

import type { Linter } from 'eslint';

const typescriptEslintRules = {
  name: 'airbnb/config/typescript/typescript-eslint',
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
  rules: {
    // Replace Airbnb 'camelcase' rule with '@typescript-eslint/naming-convention'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    camelcase: 'off',
    // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
    '@typescript-eslint/naming-convention': [
      'error',
      // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      // Allow camelCase functions (23.2), and PascalCase functions (23.8)
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    // Replace Airbnb 'default-param-last' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/default-param-last.md
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': bestPracticesRules.rules['default-param-last'],

    // Replace Airbnb 'dot-notation' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': bestPracticesRules.rules['dot-notation'],

    // Replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': styleRules.rules['no-array-constructor'],

    // Replace Airbnb 'no-dupe-class-members' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': es6Rules.rules['no-dupe-class-members'],

    // Replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': bestPracticesRules.rules['no-empty-function'],

    // Replace Airbnb 'no-implied-eval' and 'no-new-func' rules with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    'no-implied-eval': 'off',
    'no-new-func': 'off',
    '@typescript-eslint/no-implied-eval': bestPracticesRules.rules['no-implied-eval'],

    // Replace Airbnb 'no-loop-func' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': bestPracticesRules.rules['no-loop-func'],

    // Replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': bestPracticesRules.rules['no-magic-numbers'],

    // Replace Airbnb 'no-redeclare' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': bestPracticesRules.rules['no-redeclare'],

    // Replace Airbnb 'no-shadow' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': variablesRules.rules['no-shadow'],

    // Replace Airbnb 'no-throw-literal' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    'no-throw-literal': 'off',
    '@typescript-eslint/only-throw-error': bestPracticesRules.rules['no-throw-literal'],

    // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': bestPracticesRules.rules['no-unused-expressions'],

    // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': variablesRules.rules['no-unused-vars'],

    // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': variablesRules.rules['no-use-before-define'],

    // Replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': es6Rules.rules['no-useless-constructor'],

    // Replace Airbnb 'require-await' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    'require-await': 'off',
    '@typescript-eslint/require-await': bestPracticesRules.rules['require-await'],

    // Replace Airbnb 'no-return-await' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    // Its Base rule is deprecated
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
  },
} satisfies Linter.Config;

export default typescriptEslintRules;
