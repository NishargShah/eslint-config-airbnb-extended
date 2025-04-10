import unusedImportsPlugin from 'eslint-plugin-unused-imports';

import { rules } from 'eslint-config-airbnb-extended';

const customImportESLintConfig = [
  // STRICT IMPORT CONFIG
  rules.base.importsStrict,
  // IMPORT CONFIG RULES
  {
    name: 'x/import-x/rules',
    rules: {
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    },
  },
  // RESTRICTED SOME IMPORTS
  {
    name: 'x/import-x/ts-only',
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['./*', '../*'],
              message: "Please use the absolute path '@/*' instead.",
            },
          ],
        },
      ],
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
