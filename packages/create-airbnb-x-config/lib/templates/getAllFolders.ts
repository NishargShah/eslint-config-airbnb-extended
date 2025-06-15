import type { configTypes } from '@/constants';
import type { GetContentParams } from '@/lib/templates/getContent';
import type { ValueOf } from '@/utils/types';

interface FolderMeta {
  configType?: ValueOf<typeof configTypes>;
  language?: GetContentParams['language'];
  languagePreference?: GetContentParams['languagePreference'];
  hasPrettier?: NonNullable<GetContentParams['configurations']>['prettier'];
}

interface Folder {
  meta?: FolderMeta;
  data?: Folders;
}

export type Folders = Record<string, Folder>;

export interface GetFolder {
  path: string;
  meta: FolderMeta;
}

type GetFoldersOutput = GetFolder[];

type GetFolders = (folders: Folders, prefix: string[], meta?: FolderMeta) => GetFoldersOutput;

const getFolders: GetFolders = (folders, prefix, meta = {}) =>
  Object.entries(folders).reduce<GetFoldersOutput>((acc, val) => {
    const [key, value] = val;

    const prefixes = [...prefix, key];
    const values = (() => {
      if (value.data) {
        return Object.entries(value.data).reduce<GetFoldersOutput>((subAcc, subVal) => {
          const [subKey, subValue] = subVal;

          const subFolders = { [subKey]: subValue };
          const subMeta = { ...meta, ...value.meta, ...subValue.meta };

          subAcc.push(...getFolders(subFolders, prefixes, subMeta));

          return subAcc;
        }, []);
      }

      return [
        {
          path: prefixes.join('/'),
          meta,
        },
      ];
    })();

    acc.push(...values);
    return acc;
  }, []);

export default getFolders;
