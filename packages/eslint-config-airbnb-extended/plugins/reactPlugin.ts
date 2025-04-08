import EsLintPluginReact from 'eslint-plugin-react';

import type { Linter } from 'eslint';

const reactPlugin = {
  name: 'airbnb/config/plugin/react',
  plugins: {
    react: EsLintPluginReact,
  },
} satisfies Linter.Config;

export default reactPlugin;
