import legacyTypescriptBaseRules from '@/legacy/rules/typescript/typescript';
import legacyTypescriptOverridesRules from '@/legacy/rules/typescript/typescriptOverrides';
import legacyTypescriptSettingsRules from '@/legacy/rules/typescript/typescriptSettings';

import type { Linter } from 'eslint';

const legacyTypescriptConfig = {
  base: legacyTypescriptBaseRules,
  overrides: legacyTypescriptOverridesRules,
  settings: legacyTypescriptSettingsRules,
} satisfies Record<string, Linter.Config>;

export default legacyTypescriptConfig;
