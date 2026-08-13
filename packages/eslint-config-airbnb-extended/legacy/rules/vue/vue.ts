import globals from 'globals';

import { legacyBestPracticesInternalRules } from '@/legacy/rules/best-practices';
import { legacyErrorsInternalRules } from '@/legacy/rules/errors';
import { legacyEs6InternalRules } from '@/legacy/rules/es6';
import { legacyStyleInternalRules } from '@/legacy/rules/style';
import { defineConfigObject, vueFiles } from '@/utils';

export const legacyVueBaseRules = defineConfigObject({
  name: 'airbnb/config/vue/legacy',
  files: vueFiles,
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
    },
  },
  // View link below for vue rules documentation
  // https://eslint.vuejs.org/rules/
  rules: {
    // Apply the base rules in airbnb to expressions in `<template>` too.
    // The `vue/*` extension rules only visit the `<template>` body,
    // the `<script>` part is covered by the base config applied to `.vue` files.

    // enforce camelcase naming convention
    // https://eslint.vuejs.org/rules/camelcase.html
    'vue/camelcase': legacyStyleInternalRules.camelcase,

    // enforce dot notation whenever possible
    // https://eslint.vuejs.org/rules/dot-notation.html
    'vue/dot-notation': legacyBestPracticesInternalRules['dot-notation'],

    // require the use of === and !==
    // https://eslint.vuejs.org/rules/eqeqeq.html
    'vue/eqeqeq': legacyBestPracticesInternalRules.eqeqeq,

    // disallow constant expressions in conditions
    // https://eslint.vuejs.org/rules/no-constant-condition.html
    'vue/no-constant-condition': legacyErrorsInternalRules['no-constant-condition'],

    // disallow empty destructuring patterns
    // https://eslint.vuejs.org/rules/no-empty-pattern.html
    'vue/no-empty-pattern': legacyBestPracticesInternalRules['no-empty-pattern'],

    // disallow irregular whitespace in `.vue` files
    // Replacement of the core rule, it checks the whole `.vue` file
    // https://eslint.vuejs.org/rules/no-irregular-whitespace.html
    'no-irregular-whitespace': 'off',
    'vue/no-irregular-whitespace': legacyErrorsInternalRules['no-irregular-whitespace'],

    // disallow losing precision in number literals
    // https://eslint.vuejs.org/rules/no-loss-of-precision.html
    'vue/no-loss-of-precision': legacyErrorsInternalRules['no-loss-of-precision'],

    // disallow specified syntax
    // https://eslint.vuejs.org/rules/no-restricted-syntax.html
    'vue/no-restricted-syntax': legacyStyleInternalRules['no-restricted-syntax'],

    // disallow sparse arrays
    // https://eslint.vuejs.org/rules/no-sparse-arrays.html
    'vue/no-sparse-arrays': legacyErrorsInternalRules['no-sparse-arrays'],

    // disallow useless string concatenation
    // https://eslint.vuejs.org/rules/no-useless-concat.html
    'vue/no-useless-concat': legacyBestPracticesInternalRules['no-useless-concat'],

    // require or disallow method and property shorthand syntax for object literals
    // https://eslint.vuejs.org/rules/object-shorthand.html
    'vue/object-shorthand': legacyEs6InternalRules['object-shorthand'],

    // require using template literals instead of string concatenation
    // https://eslint.vuejs.org/rules/prefer-template.html
    'vue/prefer-template': legacyEs6InternalRules['prefer-template'],

    // Apply the stylistic rules in airbnb to expressions in `<template>` too.
    // The `vue/*` extension rules wrap the corresponding base rule implementations.

    // enforce line breaks after opening and before closing array brackets
    // https://eslint.vuejs.org/rules/array-bracket-newline.html
    'vue/array-bracket-newline': legacyStyleInternalRules['array-bracket-newline'],

    // enforce spacing inside array brackets
    // https://eslint.vuejs.org/rules/array-bracket-spacing.html
    'vue/array-bracket-spacing': legacyStyleInternalRules['array-bracket-spacing'],

    // require space before/after arrow function's arrow
    // https://eslint.vuejs.org/rules/arrow-spacing.html
    'vue/arrow-spacing': legacyEs6InternalRules['arrow-spacing'],

    // enforce spacing inside single-line blocks
    // https://eslint.vuejs.org/rules/block-spacing.html
    'vue/block-spacing': legacyStyleInternalRules['block-spacing'],

    // enforce one true brace style
    // https://eslint.vuejs.org/rules/brace-style.html
    'vue/brace-style': legacyStyleInternalRules['brace-style'],

    // require trailing commas in multiline object literals
    // https://eslint.vuejs.org/rules/comma-dangle.html
    'vue/comma-dangle': legacyStyleInternalRules['comma-dangle'],

    // enforce spacing before and after comma
    // https://eslint.vuejs.org/rules/comma-spacing.html
    'vue/comma-spacing': legacyStyleInternalRules['comma-spacing'],

    // enforce one true comma style
    // https://eslint.vuejs.org/rules/comma-style.html
    'vue/comma-style': legacyStyleInternalRules['comma-style'],

    // enforce consistent newline before and after dots
    // https://eslint.vuejs.org/rules/dot-location.html
    'vue/dot-location': legacyBestPracticesInternalRules['dot-location'],

    // require or disallow spacing between function identifiers and their invocations
    // https://eslint.vuejs.org/rules/func-call-spacing.html
    'vue/func-call-spacing': legacyStyleInternalRules['func-call-spacing'],

    // enforce consistent spacing between keys and values in object literal properties
    // https://eslint.vuejs.org/rules/key-spacing.html
    'vue/key-spacing': legacyStyleInternalRules['key-spacing'],

    // enforce consistent spacing before and after keywords
    // https://eslint.vuejs.org/rules/keyword-spacing.html
    'vue/keyword-spacing': legacyStyleInternalRules['keyword-spacing'],

    // disallow parentheses around expressions
    // https://eslint.vuejs.org/rules/no-extra-parens.html
    'vue/no-extra-parens': legacyErrorsInternalRules['no-extra-parens'],

    // enforce consistent line breaks inside braces
    // https://eslint.vuejs.org/rules/object-curly-newline.html
    'vue/object-curly-newline': legacyStyleInternalRules['object-curly-newline'],

    // require padding inside curly braces
    // https://eslint.vuejs.org/rules/object-curly-spacing.html
    'vue/object-curly-spacing': legacyStyleInternalRules['object-curly-spacing'],

    // enforce placing object properties on separate lines
    // https://eslint.vuejs.org/rules/object-property-newline.html
    'vue/object-property-newline': legacyStyleInternalRules['object-property-newline'],

    // enforce consistent linebreak style for operators
    // https://eslint.vuejs.org/rules/operator-linebreak.html
    'vue/operator-linebreak': legacyStyleInternalRules['operator-linebreak'],

    // require quotes around object literal property names
    // https://eslint.vuejs.org/rules/quote-props.html
    'vue/quote-props': legacyStyleInternalRules['quote-props'],

    // require or disallow spaces inside parentheses
    // https://eslint.vuejs.org/rules/space-in-parens.html
    'vue/space-in-parens': legacyStyleInternalRules['space-in-parens'],

    // require spacing around infix operators
    // https://eslint.vuejs.org/rules/space-infix-ops.html
    'vue/space-infix-ops': legacyStyleInternalRules['space-infix-ops'],

    // enforce consistent spacing before or after unary operators
    // https://eslint.vuejs.org/rules/space-unary-ops.html
    'vue/space-unary-ops': legacyStyleInternalRules['space-unary-ops'],

    // require or disallow spacing around embedded expressions of template literals
    // https://eslint.vuejs.org/rules/template-curly-spacing.html
    'vue/template-curly-spacing': legacyEs6InternalRules['template-curly-spacing'],

    // enforce a maximum line length in `.vue` files
    // Replacement of the core rule, it checks the whole `.vue` file
    // https://eslint.vuejs.org/rules/max-len.html
    'max-len': 'off',
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

    // disallow duplicate attributes
    // Adding it here to keep consistency with the JSX rules
    // https://eslint.vuejs.org/rules/no-duplicate-attributes.html
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: true,
        allowCoexistStyle: true,
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

    // disallow target="_blank" attributes without rel="noopener noreferrer"
    // Unlike in the `airbnb-base` ruleset, `allowReferrer` is set to `true`,
    // because neither Vue CLI nor Vite targets IE 11 by default.
    // https://eslint.vuejs.org/rules/no-template-target-blank.html
    'vue/no-template-target-blank': [
      'error',
      {
        allowReferrer: true,
        enforceDynamicLinks: 'always',
      },
    ],

    // disallow element's child contents which would be overwritten by a directive
    // Adding it here to keep consistency with the JSX rules
    // https://eslint.vuejs.org/rules/no-child-content.html
    'vue/no-child-content': 'error',

    // enforce that button elements have an explicit type attribute
    // https://eslint.vuejs.org/rules/html-button-has-type.html
    'vue/html-button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],

    // require a render function to return a value
    // Adding it here to keep consistency with the upstream JSX rules
    // https://eslint.vuejs.org/rules/require-render-return.html
    'vue/require-render-return': 'error',

    // prevent variables used in JSX to be incorrectly marked as unused
    // https://eslint.vuejs.org/rules/jsx-uses-vars.html
    'vue/jsx-uses-vars': 'error',

    // enforce comment directives to be used correctly
    // https://eslint.vuejs.org/rules/comment-directive.html
    'vue/comment-directive': 'error',

    // require default value for props
    // Corresponding to the `react/require-default-props` rule
    // https://eslint.vuejs.org/rules/require-default-prop.html
    'vue/require-default-prop': 'error',

    // disallow a potential typo in component options
    // Corresponding to `react/no-typos` but a little bit different.
    // https://eslint.vuejs.org/rules/no-potential-component-option-typo.html
    'vue/no-potential-component-option-typo': 'error',
  },
});
