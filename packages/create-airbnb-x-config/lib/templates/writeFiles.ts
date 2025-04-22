import fsPromise from 'node:fs/promises';

import { allFolders, subFolders } from '@/lib/templates/constants';
import getContent from '@/lib/templates/getContent';

import type { GetContentParams } from '@/lib/templates/getContent';

type WriteFiles = () => Promise<void>;

const writeFiles: WriteFiles = async () => {
  await Promise.all(
    allFolders.map(async (folder) => {
      const [, language, subFolder, prettierLanguagePreference] = folder.split('/');
      const hasPrettier = subFolder === subFolders.PRETTIER;

      const languagePreference = (
        hasPrettier ? prettierLanguagePreference : subFolder
      ) as GetContentParams['languagePreference'];

      const data = getContent({
        language: language as GetContentParams['language'],
        languagePreference,
        configurations: {
          prettier: hasPrettier,
        },
      });

      return fsPromise.writeFile(`${folder}/eslint.config.mjs`, data, {
        encoding: 'utf8',
      });
    }),
  );
};

export default writeFiles;
