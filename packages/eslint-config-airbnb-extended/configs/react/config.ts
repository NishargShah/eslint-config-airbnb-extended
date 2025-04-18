import reactRules from '@/rules/react/react';
import reactHooksRules from '@/rules/react/reactHooks';
import reactJsxA11yRules from '@/rules/react/reactJsxA11y';

import type { Linter } from 'eslint';

const reactConfig = {
  react: reactRules,
  reactJsxA11y: reactJsxA11yRules,
  reactHooks: reactHooksRules,
} satisfies Record<string, Linter.Config>;

export default reactConfig;
