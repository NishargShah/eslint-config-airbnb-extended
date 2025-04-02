import recommended from '@/base/recommended';
import react from '@/rules/react';
import reactA11y from '@/rules/react-a11y';
import reactHooks from '@/rules/react-hooks';

import type { Linter } from 'eslint';

export default [...recommended, react, reactA11y, reactHooks] satisfies Linter.Config[];
