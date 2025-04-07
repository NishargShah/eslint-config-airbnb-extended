import spawn from 'cross-spawn';

import getCommands from '@/helpers/getCommands';

import type { GetArgsOutput } from '@/helpers/getArgs';

export type InstallPackagesArgs = {
  [K in keyof GetArgsOutput]: NonNullable<GetArgsOutput[K]>;
};

type InstallPackages = (args: InstallPackagesArgs) => Promise<void>;

/**
 * @see https://github.com/vercel/next.js/blob/canary/packages/create-next-app/helpers/install.ts
 */
const install: InstallPackages = async (args) => {
  const { packageManager } = args;
  const commands = getCommands(args).slice(1);

  return new Promise((resolve, reject) => {
    const child = spawn(packageManager, commands, {
      stdio: 'inherit',
      env: {
        ...process.env,
        ADBLOCK: '1',
        // we set NODE_ENV to development as pnpm skips dev
        // dependencies when production
        NODE_ENV: 'development',
        DISABLE_OPENCOLLECTIVE: '1',
      },
    });

    child.on('close', (code) => {
      if (code !== 0) {
        reject({ command: `${packageManager} ${commands.join(' ')}` });
        return;
      }

      resolve();
    });
  });
};

export default install;
