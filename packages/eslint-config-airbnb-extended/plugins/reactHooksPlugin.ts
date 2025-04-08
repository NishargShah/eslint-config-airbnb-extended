// eslint-disable-next-line import-x/no-namespace
import * as EsLintPluginReactHooks from 'eslint-plugin-react-hooks';

import type { Linter } from 'eslint';

export default {
  name: 'airbnb/config/plugin/react-hooks',
  plugins: {
    'react-hooks': EsLintPluginReactHooks,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
} satisfies Linter.Config;
