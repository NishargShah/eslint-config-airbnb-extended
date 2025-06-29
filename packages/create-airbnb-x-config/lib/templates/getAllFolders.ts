import type { GetContentParams } from '@/lib/templates/getContent';

interface FolderMeta
  extends Partial<Pick<GetContentParams, 'language' | 'languagePreference' | 'strictConfig'>> {
  configType?: GetContentParams['type'];
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

type GetAllFoldersOutput = GetFolder[];

type GetAllFolders = (folders: Folders, prefix: string[], meta?: FolderMeta) => GetAllFoldersOutput;

const getAllFolders: GetAllFolders = (folders, prefix, meta = {}) =>
  Object.entries(folders).reduce<GetAllFoldersOutput>((acc, val) => {
    const [key, value] = val;

    const prefixes = [...prefix, key];
    const values = (() => {
      if (value.data) {
        return Object.entries(value.data).reduce<GetAllFoldersOutput>((subAcc, subVal) => {
          const [subKey, subValue] = subVal;

          const subFolders = { [subKey]: subValue };
          const subMeta = { ...meta, ...value.meta, ...subValue.meta };

          subAcc.push(...getAllFolders(subFolders, prefixes, subMeta));

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

export default getAllFolders;
