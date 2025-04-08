import typescriptBaseRules from '@/rules/typescript/typescriptBase';
import typescriptEslintRules from '@/rules/typescript/typescriptEslint';
import typescriptImportsRules from '@/rules/typescript/typescriptImports';

import type { Linter } from 'eslint';

const typescriptConfig = {
  base: typescriptBaseRules,
  typescriptEslint: typescriptEslintRules,
  imports: typescriptImportsRules,
} satisfies Record<string, Linter.Config>;

export default typescriptConfig;
