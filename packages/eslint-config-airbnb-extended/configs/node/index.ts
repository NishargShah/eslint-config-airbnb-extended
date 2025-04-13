import nodeRecommendedConfig from '@/configs/node/recommended';

import type { Linter } from 'eslint';

const node = {
  recommended: nodeRecommendedConfig,
} satisfies Record<string, Linter.Config[]>;

export default node;
