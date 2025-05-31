import reactConfig from '@/configs/react/config';

import type { Linter } from 'eslint';

const legacyReactRecommendedConfig = Object.values(reactConfig) satisfies Linter.Config[];

export default legacyReactRecommendedConfig;
