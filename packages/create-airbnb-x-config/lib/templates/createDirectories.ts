import fs from 'node:fs';
import fsPromise from 'node:fs/promises';

import { templateConstants } from '@/lib/templates/constants';
import getFolders from '@/lib/templates/getFolders';

const { FOLDER_NAME } = templateConstants;

type CreateDirectories = () => Promise<void>;

const createDirectories: CreateDirectories = async () => {
  if (fs.existsSync(FOLDER_NAME)) {
    await fsPromise.rm(FOLDER_NAME, { recursive: true });
  }

  const allFolders = getFolders();
  await Promise.all(
    allFolders.map(async (folder) =>
      fsPromise.mkdir(folder.path, {
        recursive: true,
      }),
    ),
  );
};

export default createDirectories;
