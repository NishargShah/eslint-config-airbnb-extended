type Folder = string | Record<string, Folder[]>;

type GetFoldersOutput = string[][];

type GetFolders = (folders: Record<string, Folder[]>, prefix: string[]) => GetFoldersOutput;

const getFolders: GetFolders = (folders, prefix) =>
  Object.entries(folders).reduce<GetFoldersOutput>((acc, val) => {
    const [key, value] = val;

    const prefixes = [...prefix, key];
    const values = (() => {
      if (value.length > 0) {
        return value.reduce<GetFoldersOutput>((subAcc, item) => {
          if (typeof item === 'string') {
            subAcc.push([...prefixes, item]);
          } else {
            subAcc.push(...getFolders(item, prefixes));
          }

          return subAcc;
        }, []);
      }

      return [prefixes];
    })();

    acc.push(...values);
    return acc;
  }, []);

export default getFolders;
