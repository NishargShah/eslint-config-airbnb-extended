import ESLintConfigPrettier from 'eslint-config-prettier';
import ESLintPluginPrettier from 'eslint-plugin-prettier';

const customPrettierESLintConfig = [
  {
    name: 'prettier/config',
    ...ESLintConfigPrettier,
  },
  {
    name: 'prettier/rules',
    plugins: {
      prettier: ESLintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];

export default customPrettierESLintConfig;
