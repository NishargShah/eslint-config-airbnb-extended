import type { Linter } from 'eslint';

export default {
  name: 'airbnb/config/strict',
  rules: {
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],
  },
} satisfies Linter.Config;
