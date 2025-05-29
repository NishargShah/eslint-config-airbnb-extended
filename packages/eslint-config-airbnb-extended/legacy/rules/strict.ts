import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const strictRules = {
  name: 'airbnb/config/strict',
  files: allFiles,
  rules: {
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],
  },
} satisfies Linter.Config;

export default strictRules;
