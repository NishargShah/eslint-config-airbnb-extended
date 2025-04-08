import reactRules from '@/rules/react';
import reactA11yRules from '@/rules/react-a11y';
import reactHooksRules from '@/rules/react-hooks';

import type { Linter } from 'eslint';

const reactConfig = {
  react: reactRules,
  reactA11y: reactA11yRules,
  reactHooks: reactHooksRules,
} satisfies Record<string, Linter.Config>;

export default reactConfig;
