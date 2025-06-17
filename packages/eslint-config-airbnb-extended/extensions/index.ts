/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return, unicorn/prefer-module */

import type { Linter } from 'eslint';

import type baseExtensions from '@/extensions/base';
import type nextExtensions from '@/extensions/next';
import type nodeExtensions from '@/extensions/node';
import type reactExtensions from '@/extensions/react';

/**
 * as is given due to less size of index.d.ts
 */
const extensions = {
  get base(): Record<keyof typeof baseExtensions, Linter.Config[]> {
    return require('@/extensions/base').default;
  },
  get react(): Record<keyof typeof reactExtensions, Linter.Config[]> {
    return require('@/extensions/react').default;
  },
  get next(): Record<keyof typeof nextExtensions, Linter.Config[]> {
    return require('@/extensions/next').default;
  },
  get node(): Record<keyof typeof nodeExtensions, Linter.Config[]> {
    return require('@/extensions/node').default;
  },
};

export default extensions;
