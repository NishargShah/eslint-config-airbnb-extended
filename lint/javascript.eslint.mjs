import js from '@eslint/js';
import ESLintPluginPromise from 'eslint-plugin-promise';
import ESLintPluginUnicorn from 'eslint-plugin-unicorn';

const customJSESLintConfig = [
  // ESLINT RECOMMENDED RULES
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  // PROMISE CONFIG
  ESLintPluginPromise.configs['flat/recommended'],
  // UNICORN CONFIG
  ESLintPluginUnicorn.configs['flat/recommended'],
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
];

export default customJSESLintConfig;
