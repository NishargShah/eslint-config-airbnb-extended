import { createNodeResolver } from 'eslint-plugin-import-x';

import { createAutoTypeScriptImportResolver } from '@/helpers/createAutoTypeScriptImportResolver';
import {
  jsExtensions,
  jsExtensionsWithReact,
  tsExtensionsResolver,
  tsExtensionsWithReactDTS,
  vueExtensions,
} from '@/utils';

import type { TypeScriptResolverOptions } from 'eslint-import-resolver-typescript';

import type { ConfigRaw } from '@/types/common.types';

export interface GetImportSettingsParams {
  javascript: boolean;
  typescript: boolean;
  jsx: boolean;
  vue?: boolean;
  typescriptResolver?: TypeScriptResolverOptions;
}

type GetImportSettings = (params: GetImportSettingsParams) => ConfigRaw['settings'];

export const getImportSettings: GetImportSettings = (params) => {
  const { javascript, typescript, jsx, vue = false, typescriptResolver } = params;

  // Script block extensions, without `.vue` (Vue SFCs are parsed by `vue-eslint-parser`)
  const scriptExtensions = (() => {
    if (jsx) {
      if (javascript) return jsExtensionsWithReact;
      if (typescript) return tsExtensionsWithReactDTS;
      return [];
    }

    if (javascript) return jsExtensions;
    if (typescript) return tsExtensionsResolver;
    return [];
  })();

  const extensions = vue ? [...scriptExtensions, ...vueExtensions] : scriptExtensions;

  return {
    'import-x/resolver-next': [
      createNodeResolver({ extensions: [...extensions, '.json'] }),
      ...(typescript ? [createAutoTypeScriptImportResolver(typescriptResolver)] : []),
    ],
    'import-x/extensions': extensions,
    ...(vue || typescript
      ? {
          // Apply special parsing for Vue SFC and TypeScript files
          'import-x/parsers': {
            ...(vue ? { 'vue-eslint-parser': vueExtensions } : null),
            ...(typescript ? { '@typescript-eslint/parser': scriptExtensions } : null),
          },
        }
      : null),
    ...(typescript
      ? {
          // Resolve type definition packages
          'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
        }
      : null),
  };
};
