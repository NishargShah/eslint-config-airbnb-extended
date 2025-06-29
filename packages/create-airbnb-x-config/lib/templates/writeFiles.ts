import fsPromise from 'node:fs/promises';

import { eslintConfigName } from '@/helpers/getConfigUrl';
import getContent from '@/lib/templates/getContent';
import getFolders from '@/lib/templates/getFolders';

type WriteFiles = () => Promise<void>;

const writeFiles: WriteFiles = async () => {
  const allFolders = getFolders();

  await Promise.all(
    allFolders.map(async (folder) => {
      const { path, meta } = folder;
      const { configType, language, languagePreference, hasPrettier, strictConfig } = meta;

      if (!configType) return;

      const writePath = [path, eslintConfigName].join('/');
      const data = getContent({
        type: configType,
        language: language as NonNullable<typeof language>,
        languagePreference: languagePreference as NonNullable<typeof languagePreference>,
        configurations: {
          prettier: !!hasPrettier,
        },
        strictConfig: strictConfig ?? [],
      });

      return fsPromise.writeFile(writePath, data, {
        encoding: 'utf8',
      });
    }),
  );
};

export default writeFiles;
