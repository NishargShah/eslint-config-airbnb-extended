import pluginVue from 'eslint-plugin-vue';

import { getDevDepsList } from '@/helpers/getDevDepsList';
import { getImportSettings } from '@/helpers/getImportSettings';
import { bestPracticesInternalRules } from '@/rules/best-practices';
import { allFiles, defineConfigArray, jsExtensionsRule, jsFiles, vueFiles } from '@/utils';

const paramReassignRules = bestPracticesInternalRules['no-param-reassign'];

export const vueRecommendedExtensionsConfig = defineConfigArray([
  // Vue essential config (parser, processor and essential rules)
  ...pluginVue.configs['flat/essential'],
  {
    name: 'airbnb/config/vue-configurations',
    files: allFiles,
    rules: {
      // disallow reassignment of function parameters
      // https://eslint.org/docs/latest/rules/no-param-reassign
      'no-param-reassign': [
        paramReassignRules[0],
        {
          ...paramReassignRules[1],
          ignorePropertyModificationsFor: [
            ...paramReassignRules[1].ignorePropertyModificationsFor,
            'state', // for vuex/pinia state
          ],
        },
      ],
    },
  },
  {
    name: 'airbnb/config/vue-import-x',
    files: allFiles,
    rules: {
      // Ensure consistent use of file extension within the import path
      // All future Vue.js core packages would assume explicit `.vue` extension.
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
      'import-x/extensions': ['error', 'ignorePackages', { ...jsExtensionsRule, vue: 'always' }],

      // Forbid the use of extraneous packages
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            ...getDevDepsList('javascript'),
            // Cypress
            '**/cypress.config.{js,cjs,mjs,ts,cts,mts}',
            '**/cypress/support/**',
            '**/*.cy.{js,jsx,ts,tsx}',
            // Playwright
            '**/playwright.config.{js,cjs,mjs,ts,cts,mts}',
          ],
          optionalDependencies: false,
          peerDependencies: true,
          bundledDependencies: true,
        },
      ],
    },
  },
  {
    name: 'airbnb/config/vue-settings-extensions-configurations',
    files: [...jsFiles, ...vueFiles],
    settings: getImportSettings({ javascript: true, typescript: false, jsx: true, vue: true }),
  },
  {
    // Placed after the base config,
    // so that `ecmaVersion` stays `latest` to support top-level await in `<script setup>`
    name: 'airbnb/config/vue-parser-options',
    files: vueFiles,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  },
]);
