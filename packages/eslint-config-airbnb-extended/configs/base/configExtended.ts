import baseConfig from '@/configs/base/config';
import importsStrictRules from '@/rules/importsStrict';
import reactStrictRules from '@/rules/react/reactStrict';

import type { Linter } from 'eslint';

const baseConfigExtended = {
  ...baseConfig,
  importsStrict: importsStrictRules,
  reactStrict: reactStrictRules,
} satisfies Record<string, Linter.Config>;

export default baseConfigExtended;
