/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return, unicorn/prefer-module */

import type { Linter } from 'eslint';

/**
 * as is given due to less size of index.d.ts
 */
const base = {
  get recommended(): Linter.Config[] {
    return require('@/legacy/configs/base/recommended').default;
  },
  get typescript(): Linter.Config[] {
    return require('@/legacy/configs/base/typescript').default;
  },
};

export default base;
