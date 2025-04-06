import type { Linter } from 'eslint';

export default {
  name: 'airbnb/config/imports-strict',
  rules: {
    // Reports when named exports are not grouped together in a single export declaration
    // or when multiple assignments to CommonJS module.exports or exports object are present
    // in a single file.
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/group-exports.md
    'import-x/group-exports': 'error',

    // Reports if a module's default export is unnamed
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-anonymous-default-export.md
    'import-x/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowObject: true,
      },
    ],

    // disallow namespace imports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-namespace.md
    'import-x/no-namespace': 'error',

    // Reports modules without any exports, or with unused exports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md
    'import-x/no-unused-modules': [
      'warn',
      {
        missingExports: true,
        unusedExports: true,
      },
    ],

    // ensure absolute imports are above relative imports and that unassigned imports are ignored
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
    'import-x/order': [
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
        pathGroupsExcludedImportTypes: ['type'],
        distinctGroup: true,
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
          caseInsensitive: true,
        },
        named: {
          enabled: true,
          import: true,
          export: true,
          require: true,
          cjsExports: true,
          types: 'types-last',
        },
        warnOnUnassignedImports: true,
        sortTypesGroup: true,
        'newlines-between-types': 'always',
      },
    ],
  },
} satisfies Linter.Config;
