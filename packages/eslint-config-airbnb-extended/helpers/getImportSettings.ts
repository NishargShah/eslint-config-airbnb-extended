import { createNodeResolver } from 'eslint-plugin-import-x';

import { createAutoTypeScriptImportResolver } from '@/helpers/createAutoTypeScriptImportResolver';
import {
  jsExtensions,
  jsExtensionsWithReact,
  tsExtensionsResolver,
  tsExtensionsWithReactDTS,
} from '@/utils';

import type { TypeScriptResolverOptions } from 'eslint-import-resolver-typescript';

import type { ConfigRaw } from '@/types/common.types';

export interface GetImportSettingsParams {
  javascript: boolean;
  typescript: boolean;
  jsx: boolean;
  typescriptResolver?: TypeScriptResolverOptions;
}

type GetImportSettings = (params: GetImportSettingsParams) => ConfigRaw['settings'];

export const getImportSettings: GetImportSettings = (params) => {
  const { javascript, typescript, jsx, typescriptResolver } = params;

  const extensions = (() => {
    if (jsx) {
      if (javascript) return jsExtensionsWithReact;
      if (typescript) return tsExtensionsWithReactDTS;
      return [];
    }

    if (javascript) return jsExtensions;
    if (typescript) return tsExtensionsResolver;
    return [];
  })();

  return {
    'import-x/resolver-next': [
      createNodeResolver({ extensions: [...extensions, '.json'] }),
      ...(typescript ? [createAutoTypeScriptImportResolver(typescriptResolver)] : []),
    ],
    'import-x/extensions': extensions,
    ...(typescript
      ? {
          // Apply special parsing for TypeScript files
          'import-x/parsers': {
            '@typescript-eslint/parser': extensions,
          },
          // Resolve type definition packages
          'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
        }
      : null),
  };
};
