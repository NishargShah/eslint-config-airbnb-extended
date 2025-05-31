import legacyReactRecommendedConfig from '@/legacy/configs/react/recommended';

import type { Linter } from 'eslint';

/**
 * as is given due to less size of index.d.ts
 */
const react = legacyReactRecommendedConfig as Linter.Config[];

export default react;
