import legacyTypescriptConfig from '@/legacy/configs/typescript/config';

import type { Linter } from 'eslint';

const legacyBaseTypescriptConfig = Object.values(legacyTypescriptConfig) satisfies Linter.Config[];

export default legacyBaseTypescriptConfig;
