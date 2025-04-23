import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const stylisticPlusRules = {
  name: 'airbnb/config/stylistic-plus',
  files: allFiles,
  rules: {
    // A number of style guides require or disallow line breaks inside of block statements and block-like code.
    // https://eslint.style/rules/plus/curly-newline
    '@stylistic/curly-newline': 'off',

    // Indentation for binary operators in multiline expressions
    // https://eslint.style/rules/plus/indent-binary-ops
    '@stylistic/indent-binary-ops': 'off',
  },
} satisfies Linter.Config;

export default stylisticPlusRules;
