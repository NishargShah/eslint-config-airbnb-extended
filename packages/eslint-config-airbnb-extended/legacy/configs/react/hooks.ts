import legacyReactConfig from '@/legacy/configs/react/config';

import type { Linter } from 'eslint';

const legacyReactHooksConfig = [legacyReactConfig.hooks] satisfies Linter.Config[];

export default legacyReactHooksConfig;
