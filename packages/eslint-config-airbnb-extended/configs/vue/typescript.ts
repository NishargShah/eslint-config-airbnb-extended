import { typescriptConfig } from '@/configs/typescript/config';
import { vueTypescriptExtensionsConfig } from '@/extensions/vue/typescript';
import { defineConfigArray, vueFiles } from '@/utils';

import type { ConfigRaw } from '@/types/common.types';

// Apply the TypeScript rules to the `<script lang="ts">` part of `.vue` files too.
const typescriptConfigForVue: ConfigRaw[] = Object.values(typescriptConfig).map((config) => ({
  ...config,
  name: `${config.name}/vue`,
  files: vueFiles,
}));

export const vueTypescriptConfig = defineConfigArray([
  ...typescriptConfigForVue,
  ...vueTypescriptExtensionsConfig,
]);
