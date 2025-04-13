import nodePlugin from 'eslint-plugin-n';

import nodeConfig from '@/configs/node/config';
import nodeNoUnsupportedFeaturesRules from '@/rules/node/nodeNoUnsupportedFeatures';

import type { Linter } from 'eslint';

const flatNodeConfig = nodePlugin.configs['flat/recommended'];

const nodeRecommendedConfig = [
  ...Object.values(nodeConfig),
  {
    name: 'airbnb/config/node-configurations',
    ...(flatNodeConfig
      ? {
          languageOptions: flatNodeConfig.languageOptions,
          rules: {
            'n/no-unsupported-features/es-syntax':
              flatNodeConfig.rules?.['n/no-unsupported-features/es-syntax'] ??
              nodeNoUnsupportedFeaturesRules.rules['n/no-unsupported-features/es-syntax'],
          },
        }
      : null),
  },
] satisfies Linter.Config[];

export default nodeRecommendedConfig;
