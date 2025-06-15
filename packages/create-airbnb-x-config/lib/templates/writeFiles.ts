import fsPromise from 'node:fs/promises';

import { eslintConfigName } from '@/helpers/getConfigUrl';
import { allFolders } from '@/lib/templates/constants';
import getContent from '@/lib/templates/getContent';

type WriteFiles = () => Promise<void>;

const writeFiles: WriteFiles = async () => {
  await Promise.all(
    allFolders.map(async (folder) => {
      const { path, meta } = folder;
      const { configType, language, languagePreference, hasPrettier } = meta;

      if (!configType) return;

      const writePath = [path, eslintConfigName].join('/');
      const data = getContent({
        type: configType,
        language: language as NonNullable<typeof language>,
        languagePreference: languagePreference as NonNullable<typeof languagePreference>,
        configurations: {
          prettier: !!hasPrettier,
        },
      });

      return fsPromise.writeFile(writePath, data, {
        encoding: 'utf8',
      });
    }),
  );
};

export default writeFiles;
