import nodeConfig from '@/configs/node/config';
import nodeRecommendedExtensionsConfig from '@/extensions/node/recommended';

import type { Linter } from 'eslint';

const nodeRecommendedConfig = [
  ...Object.values(nodeConfig),
  ...nodeRecommendedExtensionsConfig,
] as Linter.Config[];

export default nodeRecommendedConfig;
