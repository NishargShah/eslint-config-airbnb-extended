import plugin from 'eslint-plugin-import-x';

import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const importXPluginConfig = {
  name: 'airbnb/config/plugin/import-x',
  files: allFiles,
  plugins: {
    'import-x': plugin,
  },
} as unknown as Linter.Config;

export default importXPluginConfig;
