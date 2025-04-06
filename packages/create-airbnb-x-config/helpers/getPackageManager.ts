import type { ValueOf } from '@/utils/types';
import { packageMangers } from '@/constants';

export type PackageManager = ValueOf<typeof packageMangers>;

type GetPackageManager = () => PackageManager;

/**
 * @see https://github.com/vercel/next.js/blob/canary/packages/create-next-app/helpers/get-pkg-manager.ts
 */
export const getPackageManager: GetPackageManager = () => {
  const userAgent = process.env.npm_config_user_agent ?? '';

  if (userAgent.startsWith(packageMangers.YARN)) {
    return packageMangers.YARN;
  }

  if (userAgent.startsWith(packageMangers.PNPM)) {
    return packageMangers.PNPM;
  }

  if (userAgent.startsWith(packageMangers.BUN)) {
    return packageMangers.BUN;
  }

  return packageMangers.NPM;
};
