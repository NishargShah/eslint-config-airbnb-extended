import nodeBaseRules from '@/rules/node/nodeBase';
import nodeGlobalsRules from '@/rules/node/nodeGlobals';
import nodeNoUnsupportedFeaturesRules from '@/rules/node/nodeNoUnsupportedFeatures';
import nodePromisesRules from '@/rules/node/nodePromises';

import type { Linter } from 'eslint';

const nodeConfig = {
  base: nodeBaseRules,
  globals: nodeGlobalsRules,
  promises: nodePromisesRules,
  noUnsupportedFeatures: nodeNoUnsupportedFeaturesRules,
} satisfies Record<string, Linter.Config>;

export default nodeConfig;
