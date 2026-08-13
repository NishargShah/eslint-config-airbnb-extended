import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

import { legacyBaseRecommendedConfig } from '@/legacy/configs/base/recommended';
import { legacyVueConfig } from '@/legacy/configs/vue/config';
import { legacyBestPracticesInternalRules } from '@/legacy/rules/best-practices';
import { legacyImportsInternalRules } from '@/legacy/rules/imports';
import {
  allFiles,
  defineConfigArray,
  jsExtensionsWithReact,
  jsFiles,
  vueExtensions,
  vueFiles,
} from '@/utils';

const paramReassignRules = legacyBestPracticesInternalRules['no-param-reassign'];
const extensionsRule = legacyImportsInternalRules['import/extensions'];

export const legacyVueRecommendedConfig = defineConfigArray([
  // Base rules applied to the `<script>` block of `.vue` files
  ...legacyBaseRecommendedConfig.map((config) => ({
    ...config,
    name: `${config.name}/vue`,
    files: vueFiles,
  })),
  {
    // Placed after the base config,
    // so that `ecmaVersion` stays `latest` to support top-level await in `<script setup>`
    name: 'airbnb/config/vue-parser/legacy',
    files: vueFiles,
    plugins: {
      vue: pluginVue,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    processor: 'vue/vue',
  },
  ...Object.values(legacyVueConfig),
  {
    name: 'airbnb/config/vue-configurations/legacy',
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
    name: 'airbnb/config/vue-import/legacy',
    files: [...jsFiles, ...vueFiles],
    settings: {
      // Apply special parsing for Vue SFC files
      'import/parsers': {
        'vue-eslint-parser': vueExtensions,
      },
      // Append 'vue' extension to Airbnb 'import/resolver' setting
      'import/resolver': {
        node: {
          extensions: [...jsExtensionsWithReact, ...vueExtensions, '.json'],
        },
      },
      // Append 'vue' extension to Airbnb 'import/extensions' setting
      'import/extensions': [...jsExtensionsWithReact, ...vueExtensions],
    },
    rules: {
      // Append 'vue' to Airbnb 'import/extensions' rule
      // Cannot omit `.vue` extensions.
      // This should be enforced all across the Vue.js ecosystem.
      'import/extensions': [
        extensionsRule[0],
        extensionsRule[1],
        {
          ...extensionsRule[2],
          vue: 'always',
        },
      ],
    },
  },
]);
