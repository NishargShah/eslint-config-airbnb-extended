import nextPlugin from '@/plugins/nextPlugin';
import reactA11yPlugin from '@/plugins/reactA11yPlugin';
import reactHooksPlugin from '@/plugins/reactHooksPlugin';
import reactPlugin from '@/plugins/reactPlugin';
import typescriptEslintPlugin from '@/plugins/typescriptEslintPlugin';

import type { Linter } from 'eslint';

/**
 * as is given due to less size of index.d.ts
 */
const plugins = {
  next: nextPlugin as Linter.Config,
  react: reactPlugin as Linter.Config,
  reactA11y: reactA11yPlugin as Linter.Config,
  reactHooks: reactHooksPlugin as Linter.Config,
  typescriptEslint: typescriptEslintPlugin as Linter.Config,
};

export default plugins;
