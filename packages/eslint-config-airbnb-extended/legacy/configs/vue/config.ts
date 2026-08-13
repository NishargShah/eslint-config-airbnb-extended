import { legacyVueBaseRules } from '@/legacy/rules/vue/vue';
import { legacyVueA11yRules } from '@/legacy/rules/vue/vueA11y';
import { legacyVueJsxRules } from '@/legacy/rules/vue/vueJsx';

export const legacyVueConfig = {
  base: legacyVueBaseRules,
  jsx: legacyVueJsxRules,
  jsxA11y: legacyVueA11yRules,
} as const;
