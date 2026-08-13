import { legacyBase } from '@/legacy/configs/base';
import { legacyReact } from '@/legacy/configs/react';
import { legacyVue } from '@/legacy/configs/vue';

export const legacyConfigs = {
  base: legacyBase,
  react: legacyReact,
  vue: legacyVue,
} as const;
