import bestPractices from '@/rules/best-practices';
import errors from '@/rules/errors';
import es6 from '@/rules/es6';
import imports from '@/rules/imports';
import node from '@/rules/node';
import strict from '@/rules/strict';
import style from '@/rules/style';
import variables from '@/rules/variables';

export default {
  base: [
    bestPractices,
    errors,
    es6,
    imports,
    node,
    strict,
    style,
    variables,
    {
      name: 'airbnb/config/language-configurations',
      languageOptions: {
        parserOptions: {
          ecmaVersion: 2018,
          sourceType: 'module',
        },
      },
      rules: {},
    },
  ],
};
