import typescriptConfig from '@/configs/typescript/config';

import type { Linter } from 'eslint';

const baseTypescriptConfig = Object.values(typescriptConfig) satisfies Linter.Config[];

export default baseTypescriptConfig;
