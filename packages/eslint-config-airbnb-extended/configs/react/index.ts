import reactRules from '@/rules/react';
import reactHooksRules from '@/rules/react-hooks';
import reactJsxA11yRules from '@/rules/react-jsx-a11y';

import type { Linter } from 'eslint';

const reactConfig = {
  react: reactRules,
  reactJsxA11y: reactJsxA11yRules,
  reactHooks: reactHooksRules,
} satisfies Record<string, Linter.Config>;

export default reactConfig;
