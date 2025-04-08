import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const customPrettierESLintConfig = [
  {
    name: 'prettier/config',
    ...prettierConfig,
  },
  {
    name: 'prettier/rules',
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];

export default customPrettierESLintConfig;
