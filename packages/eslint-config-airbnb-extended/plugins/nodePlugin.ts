import nodePlugin from 'eslint-plugin-n';

import type { Linter } from 'eslint';

const reactPlugin = {
  name: 'airbnb/config/plugin/node',
  plugins: {
    n: nodePlugin,
  },
} satisfies Linter.Config;

export default reactPlugin;
