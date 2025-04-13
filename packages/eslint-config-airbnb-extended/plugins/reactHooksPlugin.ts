// eslint-disable-next-line import-x/no-namespace
import * as plugin from 'eslint-plugin-react-hooks';

import type { Linter } from 'eslint';

const reactHooksPlugin = {
  name: 'airbnb/config/plugin/react-hooks',
  plugins: {
    'react-hooks': plugin,
  },
} satisfies Linter.Config;

export default reactHooksPlugin;
