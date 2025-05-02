import fsPromise from 'node:fs/promises';
import path from 'node:path';

import getConfigUrl, { eslintConfigName } from '@/helpers/getConfigUrl';
import { packageRootPath, rootPath } from '@/utils';

import type { InstallPackagesArgs } from '@/helpers/installPackages';

type CreateESLintConfigFile = (args: InstallPackagesArgs) => Promise<void>;

const createESLintConfigFile: CreateESLintConfigFile = async (args) => {
  try {
    const config = getConfigUrl(args);
    if (!config) return;

    const configPath = path.join(packageRootPath, config.path);
    const data = await fsPromise.readFile(configPath, { encoding: 'utf8' });

    await fsPromise.writeFile(`${rootPath}/${eslintConfigName}`, data, {
      encoding: 'utf8',
    });
  } catch (error) {
    console.error(error);
  }
};

export default createESLintConfigFile;
