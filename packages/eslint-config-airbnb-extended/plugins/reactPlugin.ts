import EsLintPluginReact from 'eslint-plugin-react';

import type { Linter } from 'eslint';

export default {
  name: 'airbnb/config/plugin/react',
  plugins: {
    react: EsLintPluginReact,
  },
} satisfies Linter.Config;
