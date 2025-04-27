import fsPromise from 'node:fs/promises';
import path from 'node:path';

import getConfigUrl, { eslintConfigName } from '@/helpers/getConfigUrl';

import type { InstallPackagesArgs } from '@/helpers/installPackages';

type CreateESLintConfigFile = (args: InstallPackagesArgs) => Promise<void>;

const createESLintConfigFile: CreateESLintConfigFile = async (args) => {
  try {
    const config = getConfigUrl(args);
    if (!config) return;

    const data = await fsPromise.readFile(config.path, { encoding: 'utf8' });
    const rootPath = path.resolve('.');

    await fsPromise.writeFile(`${rootPath}/${eslintConfigName}`, data, {
      encoding: 'utf8',
    });
  } catch (error) {
    console.error(error);
  }
};

export default createESLintConfigFile;
