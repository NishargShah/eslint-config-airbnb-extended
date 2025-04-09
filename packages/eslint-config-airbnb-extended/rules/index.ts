import baseConfig from '@/configs/base';
import nextConfig from '@/configs/next';
import reactConfig from '@/configs/react';
import typescriptConfig from '@/configs/typescript';
import importsStrictRules from '@/rules/importsStrict';
import reactStrictRules from '@/rules/reactStrict';

import type { Linter } from 'eslint';

const baseRules = {
  ...baseConfig,
  importsStrict: importsStrictRules,
  reactStrict: reactStrictRules,
} satisfies Record<string, Linter.Config>;

/**
 * as is given due to less size of index.d.ts
 */
const rules = {
  base: baseRules as Record<keyof typeof baseRules, Linter.Config>,
  react: reactConfig as Record<keyof typeof reactConfig, Linter.Config>,
  next: nextConfig as Record<keyof typeof nextConfig, Linter.Config>,
  typescript: typescriptConfig as Record<keyof typeof typescriptConfig, Linter.Config>,
};

export default rules;
