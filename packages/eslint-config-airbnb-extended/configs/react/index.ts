/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return */

import type { Linter } from 'eslint';

/**
 * as is given due to less size of index.d.ts
 */
const react = {
  get recommended(): Linter.Config[] {
    return require('@/configs/react/recommended').default;
  },
  get typescript(): Linter.Config[] {
    return require('@/configs/react/typescript').default;
  },
  get all(): Linter.Config[] {
    return [...react.recommended, ...react.typescript];
  },
};

export default react;
