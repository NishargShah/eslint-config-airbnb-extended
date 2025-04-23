import { configs } from 'typescript-eslint';

import typescriptConfig from '@/configs/typescript/config';
import getImportSettings from '@/helpers/getImportSettings';
import getStylisticLegacyConfig from '@/helpers/getStylisticLegacyConfig';
import { jsFiles, tsFiles, tsFileWithoutReact } from '@/utils';

import type { Linter } from 'eslint';

const baseTypescriptConfig = [
  ...Object.values(typescriptConfig),
  {
    name: 'airbnb/config/base-typescript-settings-extensions-configurations',
    files: tsFileWithoutReact,
    settings: getImportSettings({ javascript: false, typescript: true, jsx: false }),
  },
  {
    name: 'airbnb/config/base-typescript-disable-legacy-stylistic-ts-config',
    files: tsFiles,
    ...getStylisticLegacyConfig('typescript'),
  },
  {
    ...configs.disableTypeChecked,
    name: 'airbnb/config/base-typescript-disable-type-checked',
    files: jsFiles,
  },
] as Linter.Config[];

export default baseTypescriptConfig;
