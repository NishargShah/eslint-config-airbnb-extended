import typescriptConfig from '@/configs/typescript/config';
import typescriptEslintStrictRules from '@/rules/typescript/typescriptEslintStrict';

import type { Linter } from 'eslint';

const typescriptConfigExtended = {
  ...typescriptConfig,
  typescriptEslintStrict: typescriptEslintStrictRules,
} satisfies Record<string, Linter.Config>;

export default typescriptConfigExtended;
