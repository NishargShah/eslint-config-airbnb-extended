import reactBaseRules from '@/rules/react/react';
import reactHooksRules from '@/rules/react/reactHooks';
import reactJsxA11yRules from '@/rules/react/reactJsxA11y';
import reactStylisticRules from '@/rules/react/reactStylistic';

import type { Linter } from 'eslint';

const reactConfig = {
  base: reactBaseRules,
  jsxA11y: reactJsxA11yRules,
  hooks: reactHooksRules,
  stylistic: reactStylisticRules,
} satisfies Record<string, Linter.Config>;

export default reactConfig;
