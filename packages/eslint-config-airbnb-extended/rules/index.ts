/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return */

import type { Linter } from 'eslint';

import type baseConfigExtended from '@/configs/base/configExtended';
import type nextConfig from '@/configs/next/config';
import type nodeConfig from '@/configs/node/config';
import type reactConfigExtended from '@/configs/react/configExtended';
import type typescriptConfigExtended from '@/configs/typescript/configExtended';

/**
 * as is given due to less size of index.d.ts
 */
const rules = {
  get base(): Record<keyof typeof baseConfigExtended, Linter.Config> {
    return require('@/configs/base/configExtended').default;
  },
  get node(): Record<keyof typeof nodeConfig, Linter.Config> {
    return require('@/configs/node/config').default;
  },
  get react(): Record<keyof typeof reactConfigExtended, Linter.Config> {
    return require('@/configs/react/configExtended').default;
  },
  get next(): Record<keyof typeof nextConfig, Linter.Config> {
    return require('@/configs/next/config').default;
  },
  get typescript(): Record<keyof typeof typescriptConfigExtended, Linter.Config> {
    return require('@/configs/typescript/configExtended').default;
  },
};

export default rules;
