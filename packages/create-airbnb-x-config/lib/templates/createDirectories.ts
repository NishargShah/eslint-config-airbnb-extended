import fs from 'node:fs';
import fsPromise from 'node:fs/promises';

import { allFolders, templateConstants } from '@/lib/templates/constants';

const { FOLDER_NAME } = templateConstants;

type CreateDirectories = () => Promise<void>;

const createDirectories: CreateDirectories = async () => {
  if (fs.existsSync(FOLDER_NAME)) {
    await fsPromise.rm(FOLDER_NAME, { recursive: true });
  }

  await Promise.all(
    allFolders.map(async (folder) =>
      fsPromise.mkdir(folder, {
        recursive: true,
      }),
    ),
  );
};

export default createDirectories;
