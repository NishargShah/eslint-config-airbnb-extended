import reactTypescriptExtensionsConfig from '@/extensions/react/typescript';

import type { Linter } from 'eslint';

const reactTypescriptConfig = reactTypescriptExtensionsConfig satisfies Linter.Config[];

export default reactTypescriptConfig;
