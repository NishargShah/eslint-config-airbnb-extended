import { parser, plugin } from 'typescript-eslint';

import { getImportSettings } from '@/helpers/getImportSettings';
import { defineConfigArray, jsExtensionsRule, tsExtensionsRule, tsFiles, vueFiles } from '@/utils';

export const vueTypescriptExtensionsConfig = defineConfigArray([
  {
    name: 'airbnb/config/vue-typescript-configurations',
    files: vueFiles,
    plugins: {
      '@typescript-eslint': plugin,
    },
    languageOptions: {
      parserOptions: {
        // Parse the `<script>` block of `.vue` files with the TypeScript parser
        parser,
        projectService: true,
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      // Only `<script lang="ts">` is allowed in `.vue` files
      // https://eslint.vuejs.org/rules/block-lang.html
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
            allowNoLang: false,
          },
        },
      ],
    },
  },
  {
    name: 'airbnb/config/vue-typescript-import-x',
    files: [...tsFiles, ...vueFiles],
    rules: {
      // Append 'vue' to Airbnb TypeScript 'import-x/extensions' rule
      // Cannot omit `.vue` extensions, this should be enforced all across the Vue.js ecosystem.
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
      'import-x/extensions': [
        'error',
        'ignorePackages',
        { ...jsExtensionsRule, ...tsExtensionsRule, vue: 'always' },
      ],
    },
  },
  {
    name: 'airbnb/config/vue-typescript-settings-extensions-configurations',
    files: [...tsFiles, ...vueFiles],
    settings: getImportSettings({ javascript: false, typescript: true, jsx: true, vue: true }),
  },
]);
