import recommended from '@/react/recommended';
import react from '@/rules/react';
import reactA11y from '@/rules/react-a11y';
import reactHooks from '@/rules/react-hooks';

import type { Linter } from 'eslint';

export default {
  react,
  reactA11y,
  reactHooks,
  recommended,
} satisfies Record<string, Linter.Config | Linter.Config[]>;
