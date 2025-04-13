import plugin from 'eslint-plugin-jsx-a11y';

import type { Linter } from 'eslint';

const reactA11yPlugin = {
  name: 'airbnb/config/plugin/react-a11y',
  plugins: {
    'jsx-a11y': plugin,
  },
} as Linter.Config;

export default reactA11yPlugin;
