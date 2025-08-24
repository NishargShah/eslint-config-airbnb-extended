/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return */

import type { Linter } from 'eslint';

/**
 * as is given due to less size of index.d.ts
 */
const node = {
  get recommended(): Linter.Config[] {
    return require('@/configs/node/recommended').default;
  },
};

export default node;
