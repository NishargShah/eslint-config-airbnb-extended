import type { InstallPackagesArgs } from '@/helpers/installPackages';
import { packageManagers } from '@/constants';

type GetCommands = (args: InstallPackagesArgs) => string[];

const getCommands: GetCommands = (args) => {
  const { typescript, language, config, packageManager } = args;

  const pmInstallationCommand = {
    [packageManagers.NPM]: 'npm install -D',
    [packageManagers.YARN]: 'yarn add -D',
    [packageManagers.PNPM]: 'pnpm install -D',
    [packageManagers.BUN]: 'bun add',
  };

  const command = pmInstallationCommand[packageManager];

  return [];
};

export default getCommands;
