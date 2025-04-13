import reactConfig from '@/configs/react';
import { jsExtensionsWithReact } from '@/utils';

import type { Linter } from 'eslint';

const reactRecommendedConfig = [
  ...Object.values(reactConfig),
  {
    name: 'airbnb/config/react-settings',
    settings: {
      'import-x/resolver': {
        node: {
          extensions: jsExtensionsWithReact,
        },
      },
    },
  },
] satisfies Linter.Config[];

export default reactRecommendedConfig;
