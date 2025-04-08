import js from '@eslint/js';
import promise from 'eslint-plugin-promise';
import unicorn from 'eslint-plugin-unicorn';

import { configs } from 'eslint-config-airbnb-extended';

const customJSESLintConfig = [
  // ESLINT RECOMMENDED RULES
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  // AIRBNB CONFIG
  ...configs.base.recommended,
  // PROMISE CONFIG
  promise.configs['flat/recommended'],
  // UNICORN CONFIG
  unicorn.configs.recommended,
  // UNICORN CONFIG RULES
  {
    name: 'unicorn/rules',
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            camelCase: true,
            pascalCase: true,
          },
          multipleFileExtensions: false,
        },
      ],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/consistent-function-scoping': 'off',
    },
  },
  {
    name: 'unicorn/disable-rules',
    files: ['packages/create-airbnb-x-config/**/*.{ts,tsx}'],
    rules: {
      'unicorn/no-process-exit': 'off',
    },
  },
];

export default customJSESLintConfig;
