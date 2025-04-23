import plugin from '@stylistic/eslint-plugin';

import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const stylisticPlugin = {
  name: 'airbnb/config/plugin/stylistic',
  files: allFiles,
  plugins: {
    '@stylistic': plugin,
  },
} satisfies Linter.Config;

export default stylisticPlugin;
