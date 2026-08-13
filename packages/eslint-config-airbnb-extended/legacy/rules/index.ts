import { legacyBaseConfig } from '@/legacy/configs/base/config';
import { legacyReactConfig } from '@/legacy/configs/react/config';
import { legacyTypescriptConfig } from '@/legacy/configs/typescript/config';
import { legacyVueConfig } from '@/legacy/configs/vue/config';

export const legacyRules = {
  base: legacyBaseConfig,
  react: legacyReactConfig,
  typescript: legacyTypescriptConfig,
  vue: legacyVueConfig,
} as const;
