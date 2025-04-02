import recommended from '@/base/recommended';
import bestPractices from '@/rules/best-practices';
import errors from '@/rules/errors';
import es6 from '@/rules/es6';
import imports from '@/rules/imports';
import node from '@/rules/node';
import strict from '@/rules/strict';
import style from '@/rules/style';
import variables from '@/rules/variables';

import type { Linter } from 'eslint';

export default {
  bestPractices,
  errors,
  es6,
  imports,
  node,
  strict,
  style,
  variables,
  recommended,
} satisfies Record<string, Linter.Config | Linter.Config[]>;
