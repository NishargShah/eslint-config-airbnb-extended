import legacyTypescriptConfig from '@/legacy/configs/typescript/config';

import type { Linter } from 'eslint';

const legacyBaseTypescriptConfig: Linter.Config[] = Object.values(legacyTypescriptConfig);

export default legacyBaseTypescriptConfig;
