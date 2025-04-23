import plugin from 'eslint-plugin-n';

import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const nodePlugin = {
  name: 'airbnb/config/plugin/node',
  files: allFiles,
  plugins: {
    n: plugin,
  },
} satisfies Linter.Config;

export default nodePlugin;
