import { config, configs } from 'typescript-eslint';

import { configs as airbnbExtendedConfigs } from 'eslint-config-airbnb-extended';

const customTSESLintConfig = config(
  // AIRBNB TYPESCRIPT BASE CONFIG
  ...airbnbExtendedConfigs.base.typescript,
  // TYPESCRIPT CONFIG
  ...configs.recommended,
  // TYPESCRIPT STYLISTIC CONFIG
  ...configs.stylistic,
  // TYPESCRIPT CONFIG RULES
  {
    name: 'x/typescript-eslint/rules',
    rules: {
      // EXTRA RULES ( NOT IN EXTENDED CONFIG )
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        {
          ignoreArrowShorthand: true,
          ignoreVoidOperator: true,
        },
      ],
      'no-loop-func': 'off',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
      '@typescript-eslint/no-require-imports': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-throw-literal': 'off',
      '@typescript-eslint/only-throw-error': 'error',
      '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-reduce-type-parameter': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/unified-signatures': 'error',

      // OVERRIDING RULES
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    name: 'x/import-x/disable-extraneous-deps',
    files: ['packages/create-airbnb-x-config/templates/**/eslint.config.mjs'],
    rules: {
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
  // DISABLED TYPECHECKING FOR JS FILES
  {
    files: ['**/*.{js,cjs,mjs}'],
    ...configs.disableTypeChecked,
  },
);

export default customTSESLintConfig;
