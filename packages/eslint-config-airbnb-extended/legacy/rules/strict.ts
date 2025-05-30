import strictRules from '@/rules/strict';

import type { Linter } from 'eslint';

const legacyStrictRules = {
  ...strictRules,
  name: `${strictRules.name}/legacy`,
  rules: {
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],
  },
} satisfies Linter.Config;

export default legacyStrictRules;
