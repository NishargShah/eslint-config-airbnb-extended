import typescriptBase from '@/rules/typescript/typescriptBase';
import typescriptEslint from '@/rules/typescript/typescriptEslint';
import typescriptImports from '@/rules/typescript/typescriptImports';

import type { Linter } from 'eslint';

export default {
  typescript: [typescriptBase, typescriptEslint, typescriptImports],
} satisfies Record<string, Linter.Config[]>;
