import plugin from 'eslint-plugin-vuejs-accessibility';

import { defineConfigPlugin, vueFiles } from '@/utils';

export const vueA11yPlugin = defineConfigPlugin({
  name: 'airbnb/config/plugin/vuejs-accessibility',
  files: vueFiles,
  plugins: {
    'vuejs-accessibility': plugin,
  },
});
