import plugin from 'eslint-plugin-n';

import type { Linter } from 'eslint';

const nodePlugin = {
  name: 'airbnb/config/plugin/node',
  plugins: {
    n: plugin,
  },
} satisfies Linter.Config;

export default nodePlugin;
