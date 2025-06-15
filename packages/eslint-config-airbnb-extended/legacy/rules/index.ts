/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return, unicorn/prefer-module */

import type { Linter } from 'eslint';

import type legacyBaseConfig from '@/legacy/configs/base/config';
import type legacyReactConfig from '@/legacy/configs/react/config';
import type legacyTypescriptConfig from '@/legacy/configs/typescript/config';

/**
 * as is given due to less size of index.d.ts
 */
const rules = {
  get base(): Record<keyof typeof legacyBaseConfig, Linter.Config> {
    return require('@/legacy/configs/base/config').default;
  },
  get react(): Record<keyof typeof legacyReactConfig, Linter.Config> {
    return require('@/legacy/configs/react/config').default;
  },
  get typescript(): Record<keyof typeof legacyTypescriptConfig, Linter.Config> {
    return require('@/legacy/configs/typescript/config').default;
  },
};

export default rules;
