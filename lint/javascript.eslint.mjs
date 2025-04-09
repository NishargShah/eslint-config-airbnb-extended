import js from '@eslint/js';
import promisePlugin from 'eslint-plugin-promise';
import unicornPlugin from 'eslint-plugin-unicorn';

import { configs } from 'eslint-config-airbnb-extended';

const customJSESLintConfig = [
  // ESLINT RECOMMENDED RULES
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  // AIRBNB BASE CONFIG
  ...configs.base.recommended,
  // PROMISE CONFIG
  promisePlugin.configs['flat/recommended'],
  // UNICORN CONFIG
  unicornPlugin.configs.recommended,
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
