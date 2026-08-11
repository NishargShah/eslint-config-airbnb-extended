import { baseConfig } from '@/configs/base/config';
import { vueConfig } from '@/configs/vue/config';
import { vueRecommendedExtensionsConfig } from '@/extensions/vue/recommended';
import { defineConfigArray, vueFiles } from '@/utils';

import type { ConfigRaw } from '@/types/common.types';

// Apply the base rules to the `<script>` part of `.vue` files too,
// the `vue/*` extension rules only visit the `<template>` body.
const baseConfigForVue: ConfigRaw[] = Object.values(baseConfig).map((config) => ({
  ...config,
  name: `${config.name}/vue`,
  files: vueFiles,
}));

export const vueRecommendedConfig = defineConfigArray([
  ...baseConfigForVue,
  ...Object.values(vueConfig),
  ...vueRecommendedExtensionsConfig,
]);
