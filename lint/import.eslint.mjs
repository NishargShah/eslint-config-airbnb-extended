import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { flatConfigs } from 'eslint-plugin-import-x';
import ESLintPluginUnusedImports from 'eslint-plugin-unused-imports';

const customImportESLintConfig = [
  // IMPORT CONFIG
  flatConfigs.recommended,
  // IMPORT TYPESCRIPT CONFIG
  flatConfigs.typescript,
  // IMPORT CONFIG RULES
  {
    name: 'import-x/rules',
    settings: {
      'import-x/resolver': {
        node: true,
      },
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: ['tsconfig.json', 'packages/*/tsconfig.json'],
        }),
      ],
    },
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
    name: 'import-x/rules/ts-only',
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
    name: 'unused-imports/rules',
    plugins: {
      'unused-imports': ESLintPluginUnusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
];

export default customImportESLintConfig;
