import getImportSettings from '@/helpers/getImportSettings';
import legacyBaseConfig from '@/legacy/configs/base/config';
import legacyImportPluginConfig from '@/legacy/plugins/importPlugin';
import { allFiles, jsFileWithoutReact } from '@/utils';

import type { Linter } from 'eslint';

const legacyBaseRecommendedConfig = [
  legacyImportPluginConfig,
  ...Object.values(legacyBaseConfig),
  {
    name: 'airbnb/config/base-configurations/legacy',
    files: allFiles,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
    settings: {
      'import/core-modules': [],
      'import/ignore': ['node_modules', String.raw`\.(coffee|scss|css|less|hbs|svg|json)$`],
    },
  },
  {
    name: 'airbnb/config/base-settings-extensions-configurations/legacy',
    files: jsFileWithoutReact,
    // FIXME BUG
    settings: getImportSettings({ javascript: true, typescript: false, jsx: false }),
  },
] satisfies Linter.Config[];

export default legacyBaseRecommendedConfig;
