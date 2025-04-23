import { tsFiles } from '@/utils';

import type { Linter } from 'eslint';

const typescriptStylisticPlusRules = {
  name: 'airbnb/config/typescript/typescript-stylistic-plus',
  files: tsFiles,
  rules: {
    // enforce consistent spacing inside TypeScript type generics
    // https://eslint.style/rules/plus/type-generic-spacing
    '@stylistic/type-generic-spacing': 'error',

    // Expect space before the type declaration in the named tuple.
    // https://eslint.style/rules/plus/type-named-tuple-spacing
    '@stylistic/type-named-tuple-spacing': 'off',
  },
} satisfies Linter.Config;

export default typescriptStylisticPlusRules;
