import unusedImportsPlugin from 'eslint-plugin-unused-imports';

import { rules } from 'eslint-config-airbnb-extended';

const customImportESLintConfig = [
  // STRICT IMPORT CONFIG
  rules.base.importsStrict,
  {
    name: 'x/import-x/disable-extraneous-deps',
    files: ['packages/create-airbnb-x-config/templates/**/eslint.config.mjs'],
    rules: {
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
  {
    name: 'unused-imports/config',
    plugins: {
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
];

export default customImportESLintConfig;
