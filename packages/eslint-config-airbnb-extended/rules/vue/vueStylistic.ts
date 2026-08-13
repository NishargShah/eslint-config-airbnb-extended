import { stylisticInternalRules } from '@/rules/stylistic';
import { defineConfigObject, vueFiles } from '@/utils';

export const vueStylisticRules = defineConfigObject({
  name: 'airbnb/config/vue/stylistic',
  files: vueFiles,
  // View link below for vue rules documentation
  // https://eslint.vuejs.org/rules/
  rules: {
    // Apply the stylistic rules in airbnb to expressions in `<template>` too.
    // The `vue/*` extension rules wrap the corresponding base rule implementations.

    // enforce line breaks after opening and before closing array brackets
    // https://eslint.vuejs.org/rules/array-bracket-newline.html
    'vue/array-bracket-newline': stylisticInternalRules['@stylistic/array-bracket-newline'],

    // enforce spacing inside array brackets
    // https://eslint.vuejs.org/rules/array-bracket-spacing.html
    'vue/array-bracket-spacing': stylisticInternalRules['@stylistic/array-bracket-spacing'],

    // require space before/after arrow function's arrow
    // https://eslint.vuejs.org/rules/arrow-spacing.html
    'vue/arrow-spacing': stylisticInternalRules['@stylistic/arrow-spacing'],

    // enforce spacing inside single-line blocks
    // https://eslint.vuejs.org/rules/block-spacing.html
    'vue/block-spacing': stylisticInternalRules['@stylistic/block-spacing'],

    // enforce one true brace style
    // https://eslint.vuejs.org/rules/brace-style.html
    'vue/brace-style': stylisticInternalRules['@stylistic/brace-style'],

    // require trailing commas in multiline object literals
    // https://eslint.vuejs.org/rules/comma-dangle.html
    'vue/comma-dangle': stylisticInternalRules['@stylistic/comma-dangle'],

    // enforce spacing before and after comma
    // https://eslint.vuejs.org/rules/comma-spacing.html
    'vue/comma-spacing': stylisticInternalRules['@stylistic/comma-spacing'],

    // enforce one true comma style
    // https://eslint.vuejs.org/rules/comma-style.html
    'vue/comma-style': stylisticInternalRules['@stylistic/comma-style'],

    // enforce consistent newline before and after dots
    // https://eslint.vuejs.org/rules/dot-location.html
    'vue/dot-location': stylisticInternalRules['@stylistic/dot-location'],

    // require or disallow spacing between function identifiers and their invocations
    // https://eslint.vuejs.org/rules/func-call-spacing.html
    'vue/func-call-spacing': stylisticInternalRules['@stylistic/function-call-spacing'],

    // enforce consistent spacing between keys and values in object literal properties
    // https://eslint.vuejs.org/rules/key-spacing.html
    'vue/key-spacing': stylisticInternalRules['@stylistic/key-spacing'],

    // enforce consistent spacing before and after keywords
    // https://eslint.vuejs.org/rules/keyword-spacing.html
    'vue/keyword-spacing': stylisticInternalRules['@stylistic/keyword-spacing'],

    // disallow parentheses around expressions
    // https://eslint.vuejs.org/rules/no-extra-parens.html
    'vue/no-extra-parens': stylisticInternalRules['@stylistic/no-extra-parens'],

    // enforce consistent line breaks inside braces
    // https://eslint.vuejs.org/rules/object-curly-newline.html
    'vue/object-curly-newline': stylisticInternalRules['@stylistic/object-curly-newline'],

    // require padding inside curly braces
    // https://eslint.vuejs.org/rules/object-curly-spacing.html
    'vue/object-curly-spacing': stylisticInternalRules['@stylistic/object-curly-spacing'],

    // enforce placing object properties on separate lines
    // https://eslint.vuejs.org/rules/object-property-newline.html
    'vue/object-property-newline': stylisticInternalRules['@stylistic/object-property-newline'],

    // enforce consistent linebreak style for operators
    // https://eslint.vuejs.org/rules/operator-linebreak.html
    'vue/operator-linebreak': stylisticInternalRules['@stylistic/operator-linebreak'],

    // require quotes around object literal property names
    // https://eslint.vuejs.org/rules/quote-props.html
    'vue/quote-props': stylisticInternalRules['@stylistic/quote-props'],

    // require or disallow spaces inside parentheses
    // https://eslint.vuejs.org/rules/space-in-parens.html
    'vue/space-in-parens': stylisticInternalRules['@stylistic/space-in-parens'],

    // require spacing around infix operators
    // https://eslint.vuejs.org/rules/space-infix-ops.html
    'vue/space-infix-ops': stylisticInternalRules['@stylistic/space-infix-ops'],

    // enforce consistent spacing before or after unary operators
    // https://eslint.vuejs.org/rules/space-unary-ops.html
    'vue/space-unary-ops': stylisticInternalRules['@stylistic/space-unary-ops'],

    // require or disallow spacing around embedded expressions of template literals
    // https://eslint.vuejs.org/rules/template-curly-spacing.html
    'vue/template-curly-spacing': stylisticInternalRules['@stylistic/template-curly-spacing'],

    // enforce a maximum line length in `.vue` files
    // Replacement of the `@stylistic` rule, it checks the whole `.vue` file
    // https://eslint.vuejs.org/rules/max-len.html
    '@stylistic/max-len': 'off',
    'vue/max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        // SVG `path`s should be ignored
        ignoreHTMLAttributeValues: true,
        // Because spaces in HTML are insignificant,
        // it shouldn't be hard to start a new line for text content
        ignoreHTMLTextContents: false,
      },
    ],

    // Follow similar styles in `<template>` as airbnb requires in JSX
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js

    // enforce consistent indentation in `<template>`
    // https://eslint.vuejs.org/rules/html-indent.html
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
      },
    ],

    // enforce the maximum number of attributes per line
    // Note: this differs from the official style guide a little bit
    // https://vuejs.org/style-guide/rules-strongly-recommended.html#multi-attribute-elements
    // Because Airbnb's JSX style doesn't care about maximum singleline attributes
    // https://eslint.vuejs.org/rules/max-attributes-per-line.html
    'vue/max-attributes-per-line': [
      'error',
      {
        multiline: { max: 1 },
        singleline: { max: 9999 },
      },
    ],

    // enforce self-closing style
    // Prevents extra closing tags for components without children.
    // https://eslint.vuejs.org/rules/html-self-closing.html
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],

    // enforce the location of first attribute
    // https://eslint.vuejs.org/rules/first-attribute-linebreak.html
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],

    // disallow spaces around equal signs in attribute
    // https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',

    // require or disallow a space before tag's closing brackets
    // https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],

    // disallow multiple spaces
    // https://eslint.vuejs.org/rules/no-multi-spaces.html
    'vue/no-multi-spaces': 'error',
  },
});
