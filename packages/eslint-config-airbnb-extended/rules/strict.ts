import type { Linter } from 'eslint';

const strictRules = {
  name: 'airbnb/config/strict',
  rules: {
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],
  },
} satisfies Linter.Config;

export default strictRules;
