type FolderMeta = Record<string, number | string | boolean>;

interface Folder {
  meta?: FolderMeta;
  data: Folders | null;
}

export type Folders = Record<string, Folder>;

type GetFoldersOutput = string[][];

type GetFolders = (folders: Folders, prefix: string[], meta?: FolderMeta) => GetFoldersOutput;

const getFolders: GetFolders = (folders, prefix, meta = {}) =>
  Object.entries(folders).reduce<GetFoldersOutput>((acc, val) => {
    const [key, value] = val;

    const prefixes = [...prefix, key];
    const values = (() => {
      if (value.data) {
        return Object.entries(value.data).reduce<GetFoldersOutput>((subAcc, subVal) => {
          const [subKey, subValue] = subVal;

          subAcc.push(...getFolders({ [subKey]: subValue }, prefixes, meta));

          return subAcc;
        }, []);
      }

      return [prefixes];
    })();

    acc.push(...values);
    return acc;
  }, []);

export default getFolders;
