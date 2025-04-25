import unusedImportsPlugin from 'eslint-plugin-unused-imports';

import { rules } from 'eslint-config-airbnb-extended';

const customImportESLintConfig = [
  // Strict Import Rules
  rules.base.importsStrict,
  // Unused Import Config
  {
    name: 'unused-imports/config',
    plugins: {
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
  // Disable Dependencies Import Issue for Templates ESLint Files
  {
    name: 'x/import-x/disable-extraneous-deps',
    files: ['packages/create-airbnb-x-config/templates/**/eslint.config.mjs'],
    rules: {
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
];

export default customImportESLintConfig;
