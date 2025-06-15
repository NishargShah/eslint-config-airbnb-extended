import legacyBaseLegacyConfig from '@/legacy/configs/base/legacy';

import type { Linter } from 'eslint';

const legacyReactLegacyConfig = legacyBaseLegacyConfig satisfies Linter.Config[];

export default legacyReactLegacyConfig;
