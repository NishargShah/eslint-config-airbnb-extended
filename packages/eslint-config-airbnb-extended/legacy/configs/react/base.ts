import legacyBaseRecommendedConfig from '@/legacy/configs/base/recommended';

import type { Linter } from 'eslint';

const legacyReactBaseConfig = legacyBaseRecommendedConfig satisfies Linter.Config[];

export default legacyReactBaseConfig;
