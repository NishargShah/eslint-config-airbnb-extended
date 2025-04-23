import plugin from 'eslint-plugin-react';

import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const reactPlugin = {
  name: 'airbnb/config/plugin/react',
  files: allFiles,
  plugins: {
    react: plugin,
  },
} satisfies Linter.Config;

export default reactPlugin;
