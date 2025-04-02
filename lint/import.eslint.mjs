import ESLintPluginImport from 'eslint-plugin-import';
import ESLintPluginUnusedImports from 'eslint-plugin-unused-imports';

const customImportESLintConfig = [
  // IMPORT CONFIG
  ESLintPluginImport.flatConfigs.recommended,
  // IMPORT TYPESCRIPT CONFIG
  {
    name: 'import/typescript',
    ...ESLintPluginImport.flatConfigs.typescript,
  },
  // IMPORT CONFIG RULES
  {
    name: 'import/rules',
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
      'import/prefer-default-export': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            ['unknown', 'type'],
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          distinctGroup: true,
          pathGroupsExcludedImportTypes: ['type'],
          warnOnUnassignedImports: true,
        },
      ],
      'import/no-unresolved': 'error',
    },
  },
  // RESTRICTED SOME IMPORTS
  {
    name: 'import/rules/ts-only',
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
