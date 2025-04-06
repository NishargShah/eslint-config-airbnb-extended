import type { InstallPackagesArgs } from '@/helpers/installPackages';
import { packageMangers } from '@/constants';

type GetCommands = (args: InstallPackagesArgs) => string[];

const getCommands: GetCommands = (args) => {
  const { typescript, language, config, packageManager } = args;

  const pmInstallationCommand = {
    [packageMangers.NPM]: 'npm install -D',
    [packageMangers.YARN]: 'yarn add -D',
    [packageMangers.PNPM]: 'pnpm install -D',
    [packageMangers.BUN]: 'bun add',
  };

  const command = pmInstallationCommand[packageManager];

  return [];
};

export default getCommands;
