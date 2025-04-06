import type { Linter } from 'eslint';
import typescriptBase from '@/rules/typescript/typescriptBase';
import typescriptEslint from '@/rules/typescript/typescriptEslint';
import typescriptImports from '@/rules/typescript/typescriptImports';

export default {
  typescript: [typescriptBase, typescriptEslint, typescriptImports],
} satisfies Record<string, Linter.Config[]>;
