/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return, unicorn/prefer-module */

import type { Linter } from 'eslint';

import type base from '@/legacy/configs/base';
import type recommended from '@/legacy/configs/recommended';
import type typescript from '@/legacy/configs/typescript';

/**
 * as is given due to less size of index.d.ts
 */
const configs = {
  get base(): Record<keyof typeof base, Linter.Config[]> {
    return require('@/legacy/configs/base').default;
  },
  get recommended(): Record<keyof typeof recommended, Linter.Config[]> {
    return require('@/legacy/configs/recommended').default;
  },
  get typescript(): Record<keyof typeof typescript, Linter.Config[]> {
    return require('@/legacy/configs/typescript').default;
  },
};

export default configs;
