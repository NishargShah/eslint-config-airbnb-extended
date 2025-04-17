import stylisticRules from '@/rules/stylistic';

import type { Linter } from 'eslint';

const typescriptStylisticRules = {
  name: 'airbnb/config/typescript/typescript-stylistic',
  rules: {
    // enforce spacing inside single-line blocks
    // https://eslint.style/rules/ts/block-spacing
    '@stylistic/ts/block-spacing': stylisticRules.rules['@stylistic/js/block-spacing'],

    // enforce one true brace style
    // https://eslint.style/rules/ts/brace-style
    '@stylistic/ts/brace-style': stylisticRules.rules['@stylistic/js/brace-style'],

    // require trailing commas in multiline object literals
    // https://eslint.style/rules/ts/comma-dangle
    '@stylistic/ts/comma-dangle': [
      stylisticRules.rules['@stylistic/js/comma-dangle'][0],
      {
        ...stylisticRules.rules['@stylistic/js/comma-dangle'][1],
        enums: stylisticRules.rules['@stylistic/js/comma-dangle'][1].arrays,
        generics: stylisticRules.rules['@stylistic/js/comma-dangle'][1].arrays,
        tuples: stylisticRules.rules['@stylistic/js/comma-dangle'][1].arrays,
      },
    ],

    // enforce spacing before and after comma
    // https://eslint.style/rules/ts/comma-spacing
    '@stylistic/ts/comma-spacing': stylisticRules.rules['@stylistic/js/comma-spacing'],

    // enforce spacing between functions and their invocations
    // https://eslint.style/rules/ts/function-call-spacing
    '@stylistic/ts/function-call-spacing':
      stylisticRules.rules['@stylistic/js/function-call-spacing'],

    // this option sets a specific tab width for your code
    // https://eslint.style/rules/ts/indent
    '@stylistic/ts/indent': stylisticRules.rules['@stylistic/js/indent'],

    // enforces spacing between keys and values in object literal properties
    // https://eslint.style/rules/ts/key-spacing
    '@stylistic/ts/key-spacing': stylisticRules.rules['@stylistic/js/key-spacing'],

    // require a space before & after certain keywords
    // https://eslint.style/rules/ts/keyword-spacing
    '@stylistic/ts/keyword-spacing': stylisticRules.rules['@stylistic/js/keyword-spacing'],

    // enforces empty lines around comments
    // https://eslint.style/rules/ts/lines-around-comment
    '@stylistic/ts/lines-around-comment':
      stylisticRules.rules['@stylistic/js/lines-around-comment'],

    // require or disallow an empty line between class members
    // https://eslint.style/rules/ts/lines-between-class-members
    '@stylistic/ts/lines-between-class-members':
      stylisticRules.rules['@stylistic/js/lines-between-class-members'],

    // enforce consistent member delimiter style
    // https://eslint.style/rules/ts/member-delimiter-style
    '@stylistic/ts/member-delimiter-style': 'error',

    // disallow unnecessary parentheses
    // https://eslint.style/rules/ts/no-extra-parens
    '@stylistic/ts/no-extra-parens': stylisticRules.rules['@stylistic/js/no-extra-parens'],

    // disallow unnecessary semicolons
    // https://eslint.style/rules/ts/no-extra-semi
    '@stylistic/ts/no-extra-semi': stylisticRules.rules['@stylistic/js/no-extra-semi'],

    // enforce line breaks between braces
    // https://eslint.style/rules/ts/object-curly-newline
    '@stylistic/ts/object-curly-newline':
      stylisticRules.rules['@stylistic/js/object-curly-newline'],

    // require padding inside curly braces
    // https://eslint.style/rules/ts/object-curly-spacing
    '@stylistic/ts/object-curly-spacing':
      stylisticRules.rules['@stylistic/js/object-curly-spacing'],

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.style/rules/ts/object-property-newline
    '@stylistic/ts/object-property-newline':
      stylisticRules.rules['@stylistic/js/object-property-newline'],

    // Require or disallow padding lines between statements
    // https://eslint.style/rules/ts/padding-line-between-statements
    '@stylistic/ts/padding-line-between-statements':
      stylisticRules.rules['@stylistic/js/padding-line-between-statements'],

    // require quotes around object literal property names
    // https://eslint.style/rules/ts/quote-props
    '@stylistic/ts/quote-props': stylisticRules.rules['@stylistic/js/quote-props'],

    // specify whether double or single quotes should be used
    // https://eslint.style/rules/ts/quotes
    '@stylistic/ts/quotes': stylisticRules.rules['@stylistic/js/quotes'],

    // require or disallow use of semicolons instead of ASI
    // https://eslint.style/rules/ts/semi
    '@stylistic/ts/semi': stylisticRules.rules['@stylistic/js/semi'],

    // enforce spacing before and after semicolons
    // https://eslint.style/rules/ts/semi-spacing
    '@stylistic/ts/semi-spacing': stylisticRules.rules['@stylistic/js/semi-spacing'],

    // require or disallow space before blocks
    // https://eslint.style/rules/ts/space-before-blocks
    '@stylistic/ts/space-before-blocks': stylisticRules.rules['@stylistic/js/space-before-blocks'],

    // require or disallow space before function opening parenthesis
    // https://eslint.style/rules/ts/space-before-function-paren
    '@stylistic/ts/space-before-function-paren':
      stylisticRules.rules['@stylistic/js/space-before-function-paren'],

    // require spaces around operators
    // https://eslint.style/rules/ts/space-infix-ops
    '@stylistic/ts/space-infix-ops': [
      stylisticRules.rules['@stylistic/js/space-infix-ops'][0],
      {
        ...stylisticRules.rules['@stylistic/js/space-infix-ops'][1],
        ignoreTypes: false,
      },
    ],

    // enforce consistent spacing in type annotation
    // https://eslint.style/rules/ts/type-annotation-spacing
    '@stylistic/ts/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true,
          },
        },
      },
    ],

    // enforce consistent spacing inside TypeScript type generics
    // https://eslint.style/rules/plus/type-generic-spacing
    '@stylistic/plus/type-generic-spacing': 'error',
  },
} satisfies Linter.Config;

export default typescriptStylisticRules;
