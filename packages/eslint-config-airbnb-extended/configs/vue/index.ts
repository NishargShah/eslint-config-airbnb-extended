import { vueRecommendedConfig } from '@/configs/vue/recommended';
import { vueTypescriptConfig } from '@/configs/vue/typescript';

export const vue = {
  recommended: vueRecommendedConfig,
  typescript: vueTypescriptConfig,
  all: [...vueRecommendedConfig, ...vueTypescriptConfig],
} as const;
