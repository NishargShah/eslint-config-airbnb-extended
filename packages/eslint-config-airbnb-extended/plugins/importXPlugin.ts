import plugin from 'eslint-plugin-import-x';

import type { Linter } from 'eslint';

const importXPluginConfig = {
  name: 'airbnb/config/plugin/import-x',
  plugins: {
    'import-x': plugin,
  },
} as unknown as Linter.Config;

export default importXPluginConfig;
