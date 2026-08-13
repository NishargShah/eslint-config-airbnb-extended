import { parser as tsParser } from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

import { legacyTypescriptConfig } from '@/legacy/configs/typescript/config';
import { legacyImportsInternalRules } from '@/legacy/rules/imports';
import {
  defineConfigArray,
  tsExtensionsWithReactDTS,
  tsFiles,
  vueExtensions,
  vueFiles,
} from '@/utils';

const extensionsRule = legacyImportsInternalRules['import/extensions'];

export const legacyVueTypescriptConfig = defineConfigArray([
  // TypeScript rules applied to `.vue` files
  ...Object.values(legacyTypescriptConfig).map((config) => ({
    ...config,
    name: `${config.name}/vue`,
    files: vueFiles,
  })),
  {
    // Placed after the TypeScript configs,
    // so that `.vue` files are still parsed by `vue-eslint-parser`,
    // while the `<script>` block is delegated to the TypeScript parser
    name: 'airbnb/config/vue-typescript/legacy',
    files: vueFiles,
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        projectService: true,
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // Only `<script lang="ts">` is allowed in TypeScript projects
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
    name: 'airbnb/config/vue-typescript-import/legacy',
    files: [...tsFiles, ...vueFiles],
    settings: {
      // Apply special parsing for Vue SFC and TypeScript files
      'import/parsers': {
        '@typescript-eslint/parser': tsExtensionsWithReactDTS,
        'vue-eslint-parser': vueExtensions,
      },
      // Append 'ts' and 'vue' extensions to Airbnb 'import/resolver' setting
      'import/resolver': {
        node: {
          extensions: [...tsExtensionsWithReactDTS, ...vueExtensions, '.json'],
        },
        typescript: true,
      },
      // Append 'ts' and 'vue' extensions to Airbnb 'import/extensions' setting
      'import/extensions': [...tsExtensionsWithReactDTS, ...vueExtensions],
      // Resolve type definition packages
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    },
    rules: {
      // Append 'ts' and 'vue' to Airbnb 'import/extensions' rule
      // Cannot omit `.vue` extensions.
      // This should be enforced all across the Vue.js ecosystem.
      'import/extensions': [
        extensionsRule[0],
        extensionsRule[1],
        {
          ...extensionsRule[2],
          ts: 'never',
          tsx: 'never',
          vue: 'always',
        },
      ],
    },
  },
]);
