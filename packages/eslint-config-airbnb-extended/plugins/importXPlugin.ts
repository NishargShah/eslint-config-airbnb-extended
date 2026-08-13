import plugin from 'eslint-plugin-import-x';

import { allFiles, defineConfigPlugin, vueFiles } from '@/utils';

export const importXPluginConfig = defineConfigPlugin({
  name: 'airbnb/config/plugin/import-x',
  files: [...allFiles, ...vueFiles],
  plugins: {
    'import-x': plugin,
  },
});
