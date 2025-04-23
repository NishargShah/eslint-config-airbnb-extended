import plugin from 'eslint-plugin-react-hooks';

import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const reactHooksPlugin = {
  name: 'airbnb/config/plugin/react-hooks',
  files: allFiles,
  plugins: {
    'react-hooks': plugin,
  },
} satisfies Linter.Config;

export default reactHooksPlugin;
