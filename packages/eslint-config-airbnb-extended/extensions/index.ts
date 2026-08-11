import { baseExtensions } from '@/extensions/base';
import { nextExtensions } from '@/extensions/next';
import { nodeExtensions } from '@/extensions/node';
import { reactExtensions } from '@/extensions/react';
import { vueExtensions } from '@/extensions/vue';

export const extensions = {
  base: baseExtensions,
  react: reactExtensions,
  next: nextExtensions,
  node: nodeExtensions,
  vue: vueExtensions,
} as const;
