import bestPracticesRules from '@/rules/best-practices';
import errorsRules from '@/rules/errors';
import es6Rules from '@/rules/es6';
import importsRules from '@/rules/imports';
import nodeRules from '@/rules/node';
import strictRules from '@/rules/strict';
import styleRules from '@/rules/style';
import variablesRules from '@/rules/variables';

import type { Linter } from 'eslint';

const baseConfig = {
  bestPractices: bestPracticesRules,
  errors: errorsRules,
  es6: es6Rules,
  imports: importsRules,
  node: nodeRules,
  strict: strictRules,
  style: styleRules,
  variables: variablesRules,
} satisfies Record<string, Linter.Config>;

export default baseConfig;
