import reactTypescriptConfig from '@/configs/react/typescript';

import type { Linter } from 'eslint';

const nextTypescriptConfig = reactTypescriptConfig satisfies Linter.Config[];

export default nextTypescriptConfig;
