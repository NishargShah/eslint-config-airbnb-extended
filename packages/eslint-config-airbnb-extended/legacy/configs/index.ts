/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return */

import type { Linter } from 'eslint';

import type base from '@/legacy/configs/base';
import type react from '@/legacy/configs/react';

/**
 * as is given due to less size of index.d.ts
 */
const configs = {
  get base(): Record<keyof typeof base, Linter.Config[]> {
    return require('@/legacy/configs/base').default;
  },
  get react(): Record<keyof typeof react, Linter.Config[]> {
    return require('@/legacy/configs/react').default;
  },
};

export default configs;
