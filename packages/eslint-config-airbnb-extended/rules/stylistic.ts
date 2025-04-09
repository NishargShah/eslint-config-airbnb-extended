import type { Linter } from 'eslint';

const stylisticRules = {
  name: 'airbnb/config/stylistic',
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/latest/rules/array-bracket-newline
    // TODO: enable? semver-major
    'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

    // enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // enforce line breaks between array elements
    // https://eslint.org/docs/latest/rules/array-element-newline
    // TODO: enable? semver-major
    'array-element-newline': [
      'off',
      {
        multiline: true,
        minItems: 3,
      },
    ],

    // enforce spacing inside single-line blocks
    // https://eslint.org/docs/latest/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // enforce one true brace style
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

    // require trailing commas in multiline object literals
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],

    // enforce spacing before and after comma
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // enforce one true comma style
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],

    // disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],

    // enforce spacing between functions and their invocations
    // https://eslint.org/docs/latest/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // https://eslint.org/docs/latest/rules/function-call-argument-newline
    'function-call-argument-newline': ['error', 'consistent'],

    // require line breaks inside function parentheses if there are line breaks between parameters
    // https://eslint.org/docs/latest/rules/function-paren-newline
    'function-paren-newline': ['error', 'multiline-arguments'],

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],

    // this option sets a specific tab width for your code
    // https://eslint.org/docs/latest/rules/indent
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
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
        ignoreComments: false,
      },
    ],

    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/latest/rules/jsx-quotes
    'jsx-quotes': ['off', 'prefer-double'],

    // enforces spacing between keys and values in object literal properties
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],

    // require a space before & after certain keywords
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    // enforce position of line comments
    // https://eslint.org/docs/latest/rules/line-comment-position
    // TODO: enable?
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // https://eslint.org/docs/latest/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // enforces empty lines around comments
    'lines-around-comment': 'off',

    // require or disallow newlines around directives
    // https://eslint.org/docs/latest/rules/lines-around-directive
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always',
      },
    ],

    // require or disallow an empty line between class members
    // https://eslint.org/docs/latest/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],

    // specify the maximum length of a line in your program
    // https://eslint.org/docs/latest/rules/max-len
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // restrict the number of statements per line
    // https://eslint.org/docs/latest/rules/max-statements-per-line
    'max-statements-per-line': ['off', { max: 1 }],

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/latest/rules/multiline-comment-style
    'multiline-comment-style': ['off', 'starred-block'],

    // require multiline ternary
    // https://eslint.org/docs/latest/rules/multiline-ternary
    // TODO: enable?
    'multiline-ternary': ['off', 'never'],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/latest/rules/new-parens
    'new-parens': 'error',

    // allow/disallow an empty newline after var statement
    'newline-after-var': 'off',

    // https://eslint.org/docs/latest/rules/newline-before-return
    'newline-before-return': 'off',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // https://eslint.org/docs/latest/rules/newline-per-chained-call
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4,
      },
    ],

    // disallow un-paren'd mixes of different operators
    // https://eslint.org/docs/latest/rules/no-mixed-operators
    'no-mixed-operators': [
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
    'no-mixed-spaces-and-tabs': 'error',

    // disallow use of multiple spaces
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],

    // disallow space between function identifier and application
    // deprecated in favor of func-call-spacing
    'no-spaced-func': 'off',

    // disallow tab characters entirely
    'no-tabs': 'error',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    // disallow whitespace before properties
    // https://eslint.org/docs/latest/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    // https://eslint.org/docs/latest/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],

    // enforce line breaks between braces
    // https://eslint.org/docs/latest/rules/object-curly-newline
    'object-curly-newline': [
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
    'object-curly-spacing': ['error', 'always'],

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.org/docs/latest/rules/object-property-newline
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // require a newline around variable declaration
    // https://eslint.org/docs/latest/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.org/docs/latest/rules/operator-linebreak
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: { '=': 'none' },
      },
    ],

    // disallow padding within blocks
    'padded-blocks': [
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
    // https://eslint.org/docs/latest/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',

    // require quotes around object literal property names
    // https://eslint.org/docs/latest/rules/quote-props.html
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],

    // specify whether double or single quotes should be used
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],

    // require or disallow use of semicolons instead of ASI
    semi: ['error', 'always'],

    // enforce spacing before and after semicolons
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // Enforce location of semicolons
    // https://eslint.org/docs/latest/rules/semi-style
    'semi-style': ['error', 'last'],

    // require or disallow space before blocks
    'space-before-blocks': 'error',

    // require or disallow space before function opening parenthesis
    // https://eslint.org/docs/latest/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],

    // require spaces around operators
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    // https://eslint.org/docs/latest/rules/space-unary-ops
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/latest/rules/spaced-comment
    'spaced-comment': [
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
    // https://eslint.org/docs/latest/rules/switch-colon-spacing
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],

    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/latest/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],

    // require immediate function invocation to be wrapped in parentheses
    // https://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],

    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off',

    // disallow the use of leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // enforces consistent newlines before or after dots
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false,
      },
    ],

    // enforce usage of spacing in template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // enforce spacing around the * in yield* expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],

    // enforce spacing between object rest-spread
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],

    // enforce the spacing around the * in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    // Replace Airbnb 'lines-between-class-members' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    // 'lines-between-class-members': 'off',
    // '@typescript-eslint/lines-between-class-members':
    //   stylisticRules.rules['lines-between-class-members'],
  },
} satisfies Linter.Config;

export default stylisticRules;
