/* eslint-disable @typescript-eslint/no-require-imports, unicorn/prefer-module */

import type { Linter } from 'eslint';

import type base from '@/configs/base';
import type next from '@/configs/next';
import type node from '@/configs/node';
import type react from '@/configs/react';

/**
 * as is given due to less size of index.d.ts
 */
const configs = {
  get base(): Record<keyof typeof base, Linter.Config[]> {
    return require('@/configs/base').default;
  },
  get react(): Record<keyof typeof react, Linter.Config[]> {
    return require('@/configs/react').default;
  },
  get next(): Record<keyof typeof next, Linter.Config[]> {
    return require('@/configs/next').default;
  },
  get node(): Record<keyof typeof node, Linter.Config[]> {
    return require('@/configs/node').default;
  },
};

export default configs;
