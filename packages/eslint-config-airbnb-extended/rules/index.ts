import { baseConfigExtended } from '@/configs/base/configExtended';
import { nextConfig } from '@/configs/next/config';
import { nodeConfig } from '@/configs/node/config';
import { reactConfigExtended } from '@/configs/react/configExtended';
import { typescriptConfigExtended } from '@/configs/typescript/configExtended';
import { vueConfig } from '@/configs/vue/config';

export const rules = {
  base: baseConfigExtended,
  node: nodeConfig,
  react: reactConfigExtended,
  next: nextConfig,
  typescript: typescriptConfigExtended,
  vue: vueConfig,
} as const;
