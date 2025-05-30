import legacyBaseRecommendedConfig from '@/legacy/configs/base/recommended';

import type { Linter } from 'eslint';

/**
 * as is given due to less size of index.d.ts
 */
const base = legacyBaseRecommendedConfig as Linter.Config[];

export default base;
