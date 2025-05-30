// @ts-expect-error Types Error
// eslint-disable-next-line import-x/no-extraneous-dependencies
import plugin from 'eslint-plugin-import';

import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const legacyImportPluginConfig = {
  name: 'airbnb/config/plugin/import/legacy',
  files: allFiles,
  plugins: {
    import: plugin,
  },
} as unknown as Linter.Config;

export default legacyImportPluginConfig;
