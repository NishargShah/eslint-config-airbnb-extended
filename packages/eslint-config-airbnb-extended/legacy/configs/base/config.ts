import legacyBestPracticesRules from '@/legacy/rules/best-practices';
import legacyErrorsRules from '@/legacy/rules/errors';
import legacyEs6Rules from '@/legacy/rules/es6';
import legacyImportsRules from '@/legacy/rules/imports';
import legacyNodeRules from '@/legacy/rules/node';
import legacyStrictRules from '@/legacy/rules/strict';
import legacyStyleRules from '@/legacy/rules/style';
import legacyVariablesRules from '@/legacy/rules/variables';

import type { Linter } from 'eslint';

const legacyBaseConfig = {
  bestPractices: legacyBestPracticesRules,
  errors: legacyErrorsRules,
  es6: legacyEs6Rules,
  imports: legacyImportsRules,
  node: legacyNodeRules,
  strict: legacyStrictRules,
  style: legacyStyleRules,
  variables: legacyVariablesRules,
} satisfies Record<string, Linter.Config>;

export default legacyBaseConfig;
