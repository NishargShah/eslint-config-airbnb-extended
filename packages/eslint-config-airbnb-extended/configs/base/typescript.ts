import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { configs } from 'typescript-eslint';

import typescriptConfig from '@/configs/typescript/config';
import getStylisticLegacyConfig from '@/helpers/getStylisticLegacyConfig';
import { jsFiles, tsFiles } from '@/utils';

import type { Linter } from 'eslint';

const baseTypescriptConfig = [
  ...Object.values(typescriptConfig),
  {
    name: 'airbnb/config/base-typescript-import-x',
    files: tsFiles,
    settings: {
      // Import Resolver for import-x package
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
        }),
      ],
    },
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
