import { vueRecommendedExtensionsConfig } from '@/extensions/vue/recommended';
import { vueTypescriptExtensionsConfig } from '@/extensions/vue/typescript';

export const vueExtensions = {
  recommended: vueRecommendedExtensionsConfig,
  typescript: vueTypescriptExtensionsConfig,
} as const;
