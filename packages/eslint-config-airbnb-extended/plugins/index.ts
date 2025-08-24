/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return */

import type { Linter } from 'eslint';

/**
 * as is given due to less size of index.d.ts
 */
const plugins = {
  get stylistic(): Linter.Config {
    return require('@/plugins/stylisticPlugin').default;
  },
  get importX(): Linter.Config {
    return require('@/plugins/importXPlugin').default;
  },
  get node(): Linter.Config {
    return require('@/plugins/nodePlugin').default;
  },
  get react(): Linter.Config {
    return require('@/plugins/reactPlugin').default;
  },
  get reactA11y(): Linter.Config {
    return require('@/plugins/reactA11yPlugin').default;
  },
  get reactHooks(): Linter.Config {
    return require('@/plugins/reactHooksPlugin').default;
  },
  get next(): Linter.Config {
    return require('@/plugins/nextPlugin').default;
  },
  get typescriptEslint(): Linter.Config {
    return require('@/plugins/typescriptEslintPlugin').default;
  },
};

export default plugins;
