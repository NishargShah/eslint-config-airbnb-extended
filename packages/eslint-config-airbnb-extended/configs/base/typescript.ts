import typescriptConfig from '@/configs/typescript/config';
import baseTypescriptExtensionsConfig from '@/extensions/base/typescript';

import type { Linter } from 'eslint';

const baseTypescriptConfig = [
  ...Object.values(typescriptConfig),
  ...baseTypescriptExtensionsConfig,
] as Linter.Config[];

export default baseTypescriptConfig;
