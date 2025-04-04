import react from '@/rules/react';
import reactA11y from '@/rules/react-a11y';
import reactHooks from '@/rules/react-hooks';

import type { Linter } from 'eslint';

export default {
  react,
  reactA11y,
  reactHooks,
} satisfies Record<string, Linter.Config>;
