import legacyBaseRecommendedConfig from '@/legacy/configs/base/recommended';
import legacyReactConfig from '@/legacy/configs/react/config';

import type { Linter } from 'eslint';

const legacyReactRecommendedConfig = [
  ...legacyBaseRecommendedConfig,
  legacyReactConfig.base,
  legacyReactConfig.jsxA11y,
] satisfies Linter.Config[];

export default legacyReactRecommendedConfig;
