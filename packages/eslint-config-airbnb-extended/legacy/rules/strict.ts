import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const legacyStrictRules = {
  name: 'airbnb/config/strict/legacy',
  files: allFiles,
  rules: {
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],
  },
} satisfies Linter.Config;

export default legacyStrictRules;
