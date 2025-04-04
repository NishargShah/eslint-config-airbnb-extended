import recommended from '@/base/recommended';
import react from '@/react';

import type { Linter } from 'eslint';

export default [...recommended, ...Object.values(react)] satisfies Linter.Config[];
