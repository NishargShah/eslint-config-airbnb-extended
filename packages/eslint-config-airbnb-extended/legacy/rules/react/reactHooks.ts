import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const reactHooksRules = {
  name: 'airbnb/config/react-hooks',
  files: allFiles,
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    // Verify the list of the dependencies for Hooks like useEffect and similar
    // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/rules/ExhaustiveDeps.ts
    'react-hooks/exhaustive-deps': 'error',

    // Enforce Rules of Hooks
    // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/rules/RulesOfHooks.ts
    'react-hooks/rules-of-hooks': 'error',
  },
} satisfies Linter.Config;

export default reactHooksRules;
