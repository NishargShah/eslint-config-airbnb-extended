import typescript from '@/rules/typescript';

import type { Linter } from 'eslint';

export default {
  typescript,
} satisfies Record<string, Linter.Config[]>;
