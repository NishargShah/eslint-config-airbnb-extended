import base from '@/configs/base';
import next from '@/configs/next';
import node from '@/configs/node';
import react from '@/configs/react';

import type { Linter } from 'eslint';

/**
 * as is given due to less size of index.d.ts
 */
const configs = {
  base: base as Record<keyof typeof base, Linter.Config[]>,
  react: react as Record<keyof typeof react, Linter.Config[]>,
  next: next as Record<keyof typeof next, Linter.Config[]>,
  node: node as Record<keyof typeof node, Linter.Config[]>,
};

export default configs;
