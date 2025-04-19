import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

import typescriptConfig from '@/configs/typescript/config';
import getStylisticLegacyConfig from '@/helpers/getStylisticLegacyConfig';

import type { Linter } from 'eslint';

const baseTypescriptConfig = [
  ...Object.values(typescriptConfig),
  {
    name: 'airbnb/config/base-typescript-import-x',
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
    ...getStylisticLegacyConfig('typescript'),
  },
] satisfies Linter.Config[];

export default baseTypescriptConfig;
