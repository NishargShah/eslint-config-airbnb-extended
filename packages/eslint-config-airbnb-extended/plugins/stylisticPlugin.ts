import plugin from '@stylistic/eslint-plugin';

import { allFiles, defineConfigPlugin, vueFiles } from '@/utils';

export const stylisticPlugin = defineConfigPlugin({
  name: 'airbnb/config/plugin/stylistic',
  files: [...allFiles, ...vueFiles],
  plugins: {
    '@stylistic': plugin,
  },
});
