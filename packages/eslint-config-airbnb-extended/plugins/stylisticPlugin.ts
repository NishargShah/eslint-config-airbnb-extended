import stylistic from '@stylistic/eslint-plugin';

import type { Linter } from 'eslint';

const stylisticPlugin = {
  name: 'airbnb/config/plugin/stylistic',
  plugins: {
    '@stylistic': stylistic,
  },
} satisfies Linter.Config;

export default stylisticPlugin;
