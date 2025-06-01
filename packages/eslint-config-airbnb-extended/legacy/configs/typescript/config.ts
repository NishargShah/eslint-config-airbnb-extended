import legacyTypescriptBaseRules from '@/legacy/rules/typescript/typescript';
import legacyTypescriptOverridesRules from '@/legacy/rules/typescript/typescriptOverrides';

import type { Linter } from 'eslint';

const legacyTypescriptConfig = {
  base: legacyTypescriptBaseRules,
  overrides: legacyTypescriptOverridesRules,
} satisfies Record<string, Linter.Config>;

export default legacyTypescriptConfig;
