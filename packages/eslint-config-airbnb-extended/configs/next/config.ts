import nextRules from '@/rules/next';

import type { Linter } from 'eslint';

const nextConfig = {
  next: nextRules,
} satisfies Record<string, Linter.Config>;

export default nextConfig;
