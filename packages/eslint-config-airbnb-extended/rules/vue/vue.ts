import globals from 'globals';

import { bestPracticesInternalRules } from '@/rules/best-practices';
import { errorsInternalRules } from '@/rules/errors';
import { es6InternalRules } from '@/rules/es6';
import { styleInternalRules } from '@/rules/style';
import { defineConfigObject, vueFiles } from '@/utils';

export const vueBaseRules = defineConfigObject({
  name: 'airbnb/config/vue',
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
    'vue/camelcase': styleInternalRules.camelcase,

    // enforce dot notation whenever possible
    // https://eslint.vuejs.org/rules/dot-notation.html
    'vue/dot-notation': bestPracticesInternalRules['dot-notation'],

    // require the use of === and !==
    // https://eslint.vuejs.org/rules/eqeqeq.html
    'vue/eqeqeq': bestPracticesInternalRules.eqeqeq,

    // disallow constant expressions in conditions
    // https://eslint.vuejs.org/rules/no-constant-condition.html
    'vue/no-constant-condition': errorsInternalRules['no-constant-condition'],

    // disallow empty destructuring patterns
    // https://eslint.vuejs.org/rules/no-empty-pattern.html
    'vue/no-empty-pattern': bestPracticesInternalRules['no-empty-pattern'],

    // disallow irregular whitespace in `.vue` files
    // Replacement of the core rule, it checks the whole `.vue` file
    // https://eslint.vuejs.org/rules/no-irregular-whitespace.html
    'no-irregular-whitespace': 'off',
    'vue/no-irregular-whitespace': errorsInternalRules['no-irregular-whitespace'],

    // disallow losing precision in number literals
    // https://eslint.vuejs.org/rules/no-loss-of-precision.html
    'vue/no-loss-of-precision': errorsInternalRules['no-loss-of-precision'],

    // disallow specified syntax
    // https://eslint.vuejs.org/rules/no-restricted-syntax.html
    'vue/no-restricted-syntax': styleInternalRules['no-restricted-syntax'],

    // disallow sparse arrays
    // https://eslint.vuejs.org/rules/no-sparse-arrays.html
    'vue/no-sparse-arrays': errorsInternalRules['no-sparse-arrays'],

    // disallow useless string concatenation
    // https://eslint.vuejs.org/rules/no-useless-concat.html
    'vue/no-useless-concat': bestPracticesInternalRules['no-useless-concat'],

    // require or disallow method and property shorthand syntax for object literals
    // https://eslint.vuejs.org/rules/object-shorthand.html
    'vue/object-shorthand': es6InternalRules['object-shorthand'],

    // require using template literals instead of string concatenation
    // https://eslint.vuejs.org/rules/prefer-template.html
    'vue/prefer-template': es6InternalRules['prefer-template'],

    // Follow similar styles in `<template>` as airbnb requires in JSX
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js

    // disallow duplicate attributes
    // Already in `flat/essential` ruleset.
    // Adding it again here to keep consistency with the JSX rules
    // https://eslint.vuejs.org/rules/no-duplicate-attributes.html
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: true,
        allowCoexistStyle: true,
      },
    ],

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
    // Already in `flat/essential` ruleset.
    // Adding it again here to keep consistency with the JSX rules
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
    // Already in `flat/essential` ruleset.
    // Adding it again here to keep consistency with the upstream JSX rules
    // https://eslint.vuejs.org/rules/require-render-return.html
    'vue/require-render-return': 'error',

    // prevent variables used in JSX to be incorrectly marked as unused
    // Already in `flat/base` ruleset.
    // Adding it again here to keep consistency with the upstream JSX rules
    // https://eslint.vuejs.org/rules/jsx-uses-vars.html
    'vue/jsx-uses-vars': 'error',

    // enforce comment directives to be used correctly
    // Already in `flat/base` ruleset.
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
