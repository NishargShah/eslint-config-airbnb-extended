/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return, unicorn/prefer-module */

import type { Linter } from 'eslint';

/**
 * as is given due to less size of index.d.ts
 */
const next = {
  get recommended(): Linter.Config[] {
    return require('@/configs/next/recommended').default;
  },
  get typescript(): Linter.Config[] {
    return require('@/configs/next/typescript').default;
  },
  get all(): Linter.Config[] {
    return [...next.recommended, ...next.typescript];
  },
};

export default next;
