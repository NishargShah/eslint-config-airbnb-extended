import stylisticRules from '@/rules/stylistic';

import type { Linter } from 'eslint';

const typescriptStylisticRules = {
  name: 'airbnb/config/typescript/typescript-stylistic',
  rules: {
    // enforce spacing inside single-line blocks
    // https://eslint.style/rules/ts/block-spacing
    '@stylistic/block-spacing': stylisticRules.rules['@stylistic/block-spacing'],

    // enforce one true brace style
    // https://eslint.style/rules/ts/brace-style
    '@stylistic/brace-style': stylisticRules.rules['@stylistic/brace-style'],

    // require trailing commas in multiline object literals
    // https://eslint.style/rules/ts/comma-dangle
    '@stylistic/comma-dangle': [
      stylisticRules.rules['@stylistic/comma-dangle'][0],
      {
        ...stylisticRules.rules['@stylistic/comma-dangle'][1],
        enums: stylisticRules.rules['@stylistic/comma-dangle'][1].arrays,
        generics: stylisticRules.rules['@stylistic/comma-dangle'][1].arrays,
        tuples: stylisticRules.rules['@stylistic/comma-dangle'][1].arrays,
      },
    ],

    // enforce spacing before and after comma
    // https://eslint.style/rules/ts/comma-spacing
    '@stylistic/comma-spacing': stylisticRules.rules['@stylistic/comma-spacing'],

    // enforce spacing between functions and their invocations
    // https://eslint.style/rules/ts/function-call-spacing
    '@stylistic/function-call-spacing': stylisticRules.rules['@stylistic/function-call-spacing'],

    // this option sets a specific tab width for your code
    // https://eslint.style/rules/ts/indent
    '@stylistic/indent': stylisticRules.rules['@stylistic/indent'],

    // enforces spacing between keys and values in object literal properties
    // https://eslint.style/rules/ts/key-spacing
    '@stylistic/key-spacing': stylisticRules.rules['@stylistic/key-spacing'],

    // require a space before & after certain keywords
    // https://eslint.style/rules/ts/keyword-spacing
    '@stylistic/keyword-spacing': stylisticRules.rules['@stylistic/keyword-spacing'],

    // enforces empty lines around comments
    // https://eslint.style/rules/ts/lines-around-comment
    '@stylistic/lines-around-comment': stylisticRules.rules['@stylistic/lines-around-comment'],

    // require or disallow an empty line between class members
    // https://eslint.style/rules/ts/lines-between-class-members
    '@stylistic/lines-between-class-members':
      stylisticRules.rules['@stylistic/lines-between-class-members'],

    // enforce consistent member delimiter style
    // https://eslint.style/rules/ts/member-delimiter-style
    '@stylistic/member-delimiter-style': 'error',

    // disallow unnecessary parentheses
    // https://eslint.style/rules/ts/no-extra-parens
    '@stylistic/no-extra-parens': stylisticRules.rules['@stylistic/no-extra-parens'],

    // disallow unnecessary semicolons
    // https://eslint.style/rules/ts/no-extra-semi
    '@stylistic/no-extra-semi': stylisticRules.rules['@stylistic/no-extra-semi'],

    // enforce line breaks between braces
    // https://eslint.style/rules/ts/object-curly-newline
    '@stylistic/object-curly-newline': stylisticRules.rules['@stylistic/object-curly-newline'],

    // require padding inside curly braces
    // https://eslint.style/rules/ts/object-curly-spacing
    '@stylistic/object-curly-spacing': stylisticRules.rules['@stylistic/object-curly-spacing'],

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.style/rules/ts/object-property-newline
    '@stylistic/object-property-newline':
      stylisticRules.rules['@stylistic/object-property-newline'],

    // Require or disallow padding lines between statements
    // https://eslint.style/rules/ts/padding-line-between-statements
    '@stylistic/padding-line-between-statements':
      stylisticRules.rules['@stylistic/padding-line-between-statements'],

    // require quotes around object literal property names
    // https://eslint.style/rules/ts/quote-props
    '@stylistic/quote-props': stylisticRules.rules['@stylistic/quote-props'],

    // specify whether double or single quotes should be used
    // https://eslint.style/rules/ts/quotes
    '@stylistic/quotes': stylisticRules.rules['@stylistic/quotes'],

    // require or disallow use of semicolons instead of ASI
    // https://eslint.style/rules/ts/semi
    '@stylistic/semi': stylisticRules.rules['@stylistic/semi'],

    // enforce spacing before and after semicolons
    // https://eslint.style/rules/ts/semi-spacing
    '@stylistic/semi-spacing': stylisticRules.rules['@stylistic/semi-spacing'],

    // require or disallow space before blocks
    // https://eslint.style/rules/ts/space-before-blocks
    '@stylistic/space-before-blocks': stylisticRules.rules['@stylistic/space-before-blocks'],

    // require or disallow space before function opening parenthesis
    // https://eslint.style/rules/ts/space-before-function-paren
    '@stylistic/space-before-function-paren':
      stylisticRules.rules['@stylistic/space-before-function-paren'],

    // require spaces around operators
    // https://eslint.style/rules/ts/space-infix-ops
    '@stylistic/space-infix-ops': [
      stylisticRules.rules['@stylistic/space-infix-ops'][0],
      {
        ...stylisticRules.rules['@stylistic/space-infix-ops'][1],
        ignoreTypes: false,
      },
    ],

    // enforce consistent spacing in type annotation
    // https://eslint.style/rules/ts/type-annotation-spacing
    '@stylistic/type-annotation-spacing': [
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
    '@stylistic/type-generic-spacing': 'error',
  },
} satisfies Linter.Config;

export default typescriptStylisticRules;
