import type { ValueOf } from '@/utils/types';
import { packageManagers } from '@/constants';

export type PackageManager = ValueOf<typeof packageManagers>;

type GetPackageManager = () => PackageManager;

/**
 * @see https://github.com/vercel/next.js/blob/canary/packages/create-next-app/helpers/get-pkg-manager.ts
 */
export const getPackageManager: GetPackageManager = () => {
  const userAgent = process.env.npm_config_user_agent ?? '';

  if (userAgent.startsWith(packageManagers.YARN)) {
    return packageManagers.YARN;
  }

  if (userAgent.startsWith(packageManagers.PNPM)) {
    return packageManagers.PNPM;
  }

  if (userAgent.startsWith(packageManagers.BUN)) {
    return packageManagers.BUN;
  }

  return packageManagers.NPM;
};
