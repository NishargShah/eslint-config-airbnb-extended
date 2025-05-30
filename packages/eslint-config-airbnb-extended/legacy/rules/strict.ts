import strictRules from '@/rules/strict';

import type { Linter } from 'eslint';

const legacyStrictRules = {
  ...strictRules,
  name: `${strictRules.name}/legacy`,
} satisfies Linter.Config;

export default legacyStrictRules;
