import plugin from 'eslint-plugin-vue';

import { defineConfigPlugin, vueFiles } from '@/utils';

export const vuePlugin = defineConfigPlugin({
  name: 'airbnb/config/plugin/vue',
  files: vueFiles,
  plugins: {
    vue: plugin,
  },
});
