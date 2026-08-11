import { vueBaseRules } from '@/rules/vue/vue';
import { vueA11yRules } from '@/rules/vue/vueA11y';
import { vueJsxRules } from '@/rules/vue/vueJsx';
import { vueStylisticRules } from '@/rules/vue/vueStylistic';

export const vueConfig = {
  base: vueBaseRules,
  jsx: vueJsxRules,
  jsxA11y: vueA11yRules,
  stylistic: vueStylisticRules,
} as const;
