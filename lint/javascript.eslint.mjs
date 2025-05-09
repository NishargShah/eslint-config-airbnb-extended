import js from '@eslint/js';
import promisePlugin from 'eslint-plugin-promise';
import unicornPlugin from 'eslint-plugin-unicorn';

import { configs, plugins } from 'eslint-config-airbnb-extended';

const customJSESLintConfig = [
  // ESLint Recommended Rules
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  // Stylistic Plugin
  plugins.stylistic,
  // Import X Plugin
  plugins.importX,
  // Airbnb Base Recommended Config
  ...configs.base.recommended,
  // Promise Config
  promisePlugin.configs['flat/recommended'],
  // Unicorn Config
  unicornPlugin.configs.recommended,
  // Unicorn Config Rules
  {
    name: 'x/unicorn/rules',
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
  // Disable process.exit() rule for CLI
  {
    name: 'x/unicorn/disable-process-exit-rule-for-cli',
    files: ['packages/create-airbnb-x-config/**/*.{ts,tsx}'],
    rules: {
      'unicorn/no-process-exit': 'off',
    },
  },
];

export default customJSESLintConfig;
