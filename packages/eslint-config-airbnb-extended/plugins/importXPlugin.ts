// eslint-disable-next-line import-x/no-namespace
import * as importXPlugin from 'eslint-plugin-import-x';

import type { Linter } from 'eslint';

const importXPluginConfig = {
  name: 'airbnb/config/plugin/import-x',
  plugins: {
    'import-x': importXPlugin,
  },
} as unknown as Linter.Config;

export default importXPluginConfig;
