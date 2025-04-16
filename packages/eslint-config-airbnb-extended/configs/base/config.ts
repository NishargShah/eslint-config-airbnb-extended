import bestPracticesRules from '@/rules/best-practices';
import errorsRules from '@/rules/errors';
import es6Rules from '@/rules/es6';
import importsRules from '@/rules/imports';
import importsStrictRules from '@/rules/importsStrict';
import reactStrictRules from '@/rules/reactStrict';
import strictRules from '@/rules/strict';
import styleRules from '@/rules/style';
import stylisticRules from '@/rules/stylistic';
import variablesRules from '@/rules/variables';

import type { Linter } from 'eslint';

const baseConfig = {
  bestPractices: bestPracticesRules,
  errors: errorsRules,
  es6: es6Rules,
  imports: importsRules,
  strict: strictRules,
  style: styleRules,
  stylistic: stylisticRules,
  variables: variablesRules,
} satisfies Record<string, Linter.Config>;

export const extendedBaseConfig = {
  ...baseConfig,
  importsStrict: importsStrictRules,
  reactStrict: reactStrictRules,
} satisfies Record<string, Linter.Config>;

export default baseConfig;
