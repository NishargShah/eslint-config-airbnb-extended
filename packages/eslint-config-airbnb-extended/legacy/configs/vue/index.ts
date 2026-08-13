import { legacyVueRecommendedConfig } from '@/legacy/configs/vue/recommended';
import { legacyVueTypescriptConfig } from '@/legacy/configs/vue/typescript';

export const legacyVue = {
  recommended: legacyVueRecommendedConfig,
  typescript: legacyVueTypescriptConfig,
} as const;
