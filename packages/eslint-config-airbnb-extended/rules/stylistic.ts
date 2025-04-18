import type { Linter } from 'eslint';

const stylisticRules = {
  name: 'airbnb/config/stylistic',
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.style/rules/js/array-bracket-newline
    '@stylistic/array-bracket-newline': 'off',

    // enforce spacing inside array brackets
    // https://eslint.style/rules/js/array-bracket-spacing
    '@stylistic/array-bracket-spacing': ['error', 'never'],

    // enforce line breaks between array elements
    // https://eslint.style/rules/js/array-element-newline
    '@stylistic/array-element-newline': 'off',

    // require parens in arrow function arguments
    // https://eslint.style/rules/js/arrow-parens
    '@stylistic/arrow-parens': ['error', 'always'],

    // require space before/after arrow function's arrow
    // https://eslint.style/rules/js/arrow-spacing
    '@stylistic/arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    // enforce spacing inside single-line blocks
    // https://eslint.style/rules/js/block-spacing
    '@stylistic/block-spacing': ['error', 'always'],

    // enforce one true brace style
    // https://eslint.style/rules/js/brace-style
    '@stylistic/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],

    // require trailing commas in multiline object literals
    // https://eslint.style/rules/js/comma-dangle
    '@stylistic/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        importAttributes: 'never',
        dynamicImports: 'never',
      },
    ],

    // enforce spacing before and after comma
    // https://eslint.style/rules/js/comma-spacing
    '@stylistic/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // enforce one true comma style
    // https://eslint.style/rules/js/comma-style
    '@stylistic/comma-style': ['error', 'last'],

    // disallow padding inside computed properties
    // https://eslint.style/rules/js/computed-property-spacing
    '@stylistic/computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true,
      },
    ],

    // enforces consistent newlines before or after dots
    // https://eslint.style/rules/js/dot-location
    '@stylistic/dot-location': ['error', 'property'],

    // enforce newline at the end of file, with no multiple empty lines
    // https://eslint.style/rules/js/eol-last
    '@stylistic/eol-last': ['error', 'always'],

    // enforce line breaks between arguments of a function call.
    // https://eslint.style/rules/js/function-call-argument-newline
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],

    // enforce spacing between functions and their invocations
    // https://eslint.style/rules/js/function-call-spacing
    '@stylistic/function-call-spacing': ['error', 'never'],

    // require line breaks inside function parentheses if there are line breaks between parameters
    // https://eslint.style/rules/js/function-paren-newline
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

    // enforce the spacing around the * in generator functions
    // https://eslint.style/rules/js/generator-star-spacing
    '@stylistic/generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
        anonymous: 'after',
        method: 'after',
      },
    ],

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.style/rules/js/implicit-arrow-linebreak
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

    // this option sets a specific tab width for your code
    // https://eslint.style/rules/js/indent
    '@stylistic/indent': [
      'error',
      2,
      {
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        StaticBlock: {
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        offsetTernaryExpressionsOffsetCallExpressions: true,
        ignoreComments: false,
        tabLength: 2,
      },
    ],

    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.style/rules/js/jsx-quotes
    // Off due to react rule
    '@stylistic/jsx-quotes': 'off',

    // enforces spacing between keys and values in object literal properties
    // https://eslint.style/rules/js/key-spacing
    '@stylistic/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],

    // require a space before & after certain keywords
    // https://eslint.style/rules/js/keyword-spacing
    '@stylistic/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {},
      },
    ],

    // enforce the position of line comments
    // https://eslint.style/rules/js/line-comment-position
    '@stylistic/line-comment-position': 'off',

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // https://eslint.style/rules/js/linebreak-style
    '@stylistic/linebreak-style': ['error', 'unix'],

    // enforces empty lines around comments
    // https://eslint.style/rules/js/lines-around-comment
    '@stylistic/lines-around-comment': 'off',

    // require or disallow an empty line between class members
    // https://eslint.style/rules/js/lines-between-class-members
    '@stylistic/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],

    // specify the maximum length of a line in your program
    // https://eslint.style/rules/js/max-len
    '@stylistic/max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
      },
    ],

    // restrict the number of statements per line
    // https://eslint.style/rules/js/max-statements-per-line
    '@stylistic/max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],

    // enforce a particular style for multiline comments
    // https://eslint.style/rules/js/multiline-comment-style
    '@stylistic/multiline-comment-style': 'off',

    // require multiline ternary
    // https://eslint.style/rules/js/multiline-ternary
    '@stylistic/multiline-ternary': 'off',

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // https://eslint.style/rules/js/new-parens
    '@stylistic/new-parens': 'error',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // https://eslint.style/rules/js/newline-per-chained-call
    '@stylistic/newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4,
      },
    ],

    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.style/rules/js/no-confusing-arrow
    '@stylistic/no-confusing-arrow': [
      'error',
      {
        allowParens: true,
        onlyOneSimpleParam: false,
      },
    ],

    // disallow unnecessary parentheses
    // https://eslint.style/rules/js/no-extra-parens
    '@stylistic/no-extra-parens': 'off',

    // disallow unnecessary semicolons
    // https://eslint.style/rules/js/no-extra-semi
    '@stylistic/no-extra-semi': 'error',

    // disallow the use of leading or trailing decimal points in numeric literals
    // https://eslint.style/rules/js/no-floating-decimal
    '@stylistic/no-floating-decimal': 'error',

    // disallow un-paren'd mixes of different operators
    // https://eslint.style/rules/js/no-mixed-operators
    '@stylistic/no-mixed-operators': [
      'error',
      {
        // the list of arithmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||'],
        ],
        allowSamePrecedence: false,
      },
    ],

    // disallow mixed spaces and tabs for indentation
    // https://eslint.style/rules/js/no-mixed-spaces-and-tabs
    '@stylistic/no-mixed-spaces-and-tabs': 'error',

    // disallow use of multiple spaces
    // https://eslint.style/rules/js/no-multi-spaces
    '@stylistic/no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://eslint.style/rules/js/no-multiple-empty-lines
    '@stylistic/no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],

    // disallow tab characters entirely
    // https://eslint.style/rules/js/no-tabs
    '@stylistic/no-tabs': [
      'error',
      {
        allowIndentationTabs: false,
      },
    ],

    // disallow trailing whitespace at the end of lines
    // https://eslint.style/rules/js/no-trailing-spaces
    '@stylistic/no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    // disallow whitespace before properties
    // https://eslint.style/rules/js/no-whitespace-before-property
    '@stylistic/no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    // https://eslint.style/rules/js/nonblock-statement-body-position
    '@stylistic/nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],

    // enforce line breaks between braces
    // https://eslint.style/rules/js/object-curly-newline
    '@stylistic/object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],

    // require padding inside curly braces
    // https://eslint.style/rules/js/object-curly-spacing
    '@stylistic/object-curly-spacing': ['error', 'always'],

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.style/rules/js/object-property-newline
    '@stylistic/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // require a newline around variable declaration
    // https://eslint.style/rules/js/one-var-declaration-per-line
    '@stylistic/one-var-declaration-per-line': ['error', 'always'],

    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.style/rules/js/operator-linebreak
    '@stylistic/operator-linebreak': [
      'error',
      'before',
      {
        overrides: { '=': 'none' },
      },
    ],

    // disallow padding within blocks
    // https://eslint.style/rules/js/padded-blocks
    '@stylistic/padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],

    // Require or disallow padding lines between statements
    // https://eslint.style/rules/js/padding-line-between-statements
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],

    // require quotes around object literal property names
    // https://eslint.style/rules/js/quote-props
    '@stylistic/quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],

    // specify whether double or single quotes should be used
    // https://eslint.style/rules/js/quotes
    '@stylistic/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],

    // enforce spacing between object rest-spread
    // https://eslint.style/rules/js/rest-spread-spacing
    '@stylistic/rest-spread-spacing': ['error', 'never'],

    // require or disallow use of semicolons instead of ASI
    // https://eslint.style/rules/js/semi
    '@stylistic/semi': ['error', 'always'],

    // enforce spacing before and after semicolons
    // https://eslint.style/rules/js/semi-spacing
    '@stylistic/semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // Enforce location of semicolons
    // https://eslint.style/rules/js/semi-style
    '@stylistic/semi-style': ['error', 'last'],

    // require or disallow space before blocks
    // https://eslint.style/rules/js/space-before-blocks
    '@stylistic/space-before-blocks': 'error',

    // require or disallow space before function opening parenthesis
    // https://eslint.style/rules/js/space-before-function-paren
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // require or disallow spaces inside parentheses
    // https://eslint.style/rules/js/space-in-parens
    '@stylistic/space-in-parens': ['error', 'never'],

    // require spaces around operators
    // https://eslint.style/rules/js/space-infix-ops
    '@stylistic/space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],

    // Require or disallow spaces before/after unary operators
    // https://eslint.style/rules/js/space-unary-ops
    '@stylistic/space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.style/rules/js/spaced-comment
    '@stylistic/spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
          balanced: true,
        },
      },
    ],

    // Enforce spacing around colons of switch statements
    // https://eslint.style/rules/js/switch-colon-spacing
    '@stylistic/switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],

    // enforce usage of spacing in template strings
    // https://eslint.style/rules/js/template-curly-spacing
    '@stylistic/template-curly-spacing': ['error', 'never'],

    // Require or disallow spacing between template tags and their literals
    // https://eslint.style/rules/js/template-tag-spacing
    '@stylistic/template-tag-spacing': ['error', 'never'],

    // require immediate function invocation to be wrapped in parentheses
    // https://eslint.style/rules/js/wrap-iife
    '@stylistic/wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],

    // require regex literals to be wrapped in parentheses
    // https://eslint.style/rules/js/wrap-regex
    '@stylistic/wrap-regex': 'off',

    // enforce spacing around the * in yield* expressions
    // https://eslint.style/rules/js/yield-star-spacing
    '@stylistic/yield-star-spacing': ['error', 'after'],
  },
} satisfies Linter.Config;

export const deprecatedStylisticRules = {
  name: 'airbnb/config/stylistic/deprecated',
  rules: {
    // enforce spacing between functions and their invocations
    // https://eslint.style/rules/js/function-call-spacing
    '@stylistic/func-call-spacing': 'off',
  },
} satisfies Linter.Config;

export default stylisticRules;
