import plugin from '@next/eslint-plugin-next';

import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const nextPlugin = {
  name: 'airbnb/config/plugin/next',
  files: allFiles,
  plugins: {
    '@next/next': plugin,
  },
} as unknown as Linter.Config;

export default nextPlugin;
