import plugin from 'eslint-plugin-react';

import type { Linter } from 'eslint';

const reactPlugin = {
  name: 'airbnb/config/plugin/react',
  plugins: {
    react: plugin,
  },
} satisfies Linter.Config;

export default reactPlugin;
