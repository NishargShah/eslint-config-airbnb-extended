import path from 'node:path';

import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { getTsconfig } from 'get-tsconfig';

import type { TypeScriptResolverOptions } from 'eslint-import-resolver-typescript';
import type { TsConfigResult } from 'get-tsconfig';

type NewResolver = ReturnType<typeof createTypeScriptImportResolver>;

export type CreateAutoTypeScriptImportResolver = (
  options?: TypeScriptResolverOptions,
) => NewResolver;

export const createAutoTypeScriptImportResolver: CreateAutoTypeScriptImportResolver = (options) => {
  if (options?.project) {
    return createTypeScriptImportResolver({
      alwaysTryTypes: true,
      ...options,
    });
  }

  const tsconfigCache = new Map<string, TsConfigResult | null>();
  const resolvers = new Map<string, NewResolver>();

  return {
    interfaceVersion: 3,
    name: 'eslint-import-resolver-typescript/auto',
    resolve: (source, file) => {
      const tsconfigPath = getTsconfig(path.dirname(file), 'tsconfig.json', tsconfigCache)?.path;

      const key = tsconfigPath ?? '';

      const resolver =
        resolvers.get(key) ??
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          ...options,
          ...(tsconfigPath ? { project: tsconfigPath } : null),
        });

      resolvers.set(key, resolver);

      return resolver.resolve(source, file);
    },
  };
};
