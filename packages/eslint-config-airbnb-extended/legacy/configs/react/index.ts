/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return, unicorn/prefer-module */

import type { Linter } from 'eslint';

/**
 * as is given due to less size of index.d.ts
 */
const react = {
  get recommended(): Linter.Config[] {
    return require('@/legacy/configs/react/recommended').default;
  },
  get hooks(): Linter.Config[] {
    return require('@/legacy/configs/react/hooks').default;
  },
  get typescript(): Linter.Config[] {
    return require('@/legacy/configs/react/typescript').default;
  },
};

export default react;
