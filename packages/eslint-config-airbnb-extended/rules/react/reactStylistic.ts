import type { Linter } from 'eslint';

const reactStylisticRules = {
  name: 'airbnb/config/react/stylistic',
  rules: {
    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    // https://eslint.style/rules/jsx/jsx-child-element-spacing
    '@stylistic/jsx-child-element-spacing': 'off',

    // Enforce the closing bracket location for JSX multiline elements.
    // https://eslint.style/rules/jsx/jsx-closing-bracket-location
    '@stylistic/jsx-closing-bracket-location': 'off',

    // Enforce the closing tag location for multiline JSX elements.
    // https://eslint.style/rules/jsx/jsx-closing-tag-location
    '@stylistic/jsx-closing-tag-location': 'off',

    // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
    // https://eslint.style/rules/jsx/jsx-curly-brace-presence
    '@stylistic/jsx-curly-brace-presence': 'off',

    // Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
    // https://eslint.style/rules/jsx/jsx-curly-newline
    '@stylistic/jsx-curly-newline': 'off',

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    // https://eslint.style/rules/jsx/jsx-curly-spacing
    '@stylistic/jsx-curly-spacing': 'off',

    // Enforce or disallow spaces around equal signs in JSX attributes.
    // https://eslint.style/rules/jsx/jsx-equals-spacing
    '@stylistic/jsx-equals-spacing': 'off',

    // Enforce proper position of the first property in JSX.
    // https://eslint.style/rules/jsx/jsx-first-prop-new-line
    '@stylistic/jsx-first-prop-new-line': 'off',

    // Enforce line breaks before and after JSX elements when they are used as arguments to a function.
    // https://eslint.style/rules/jsx/jsx-function-call-newline
    '@stylistic/jsx-function-call-newline': 'off',

    // Enforce props indentation in JSX.
    // https://eslint.style/rules/jsx/jsx-indent-props
    '@stylistic/jsx-indent-props': 'off',

    // Enforce maximum of props on a single line in JSX.
    // https://eslint.style/rules/jsx/jsx-max-props-per-line
    '@stylistic/jsx-max-props-per-line': 'off',

    // Require or prevent a new line after jsx elements and expressions
    // https://eslint.style/rules/jsx/jsx-newline
    '@stylistic/jsx-newline': 'off',

    // Require one JSX element per line.
    // https://eslint.style/rules/jsx/jsx-one-expression-per-line
    '@stylistic/jsx-one-expression-per-line': 'off',

    // Enforces coding style that user-defined JSX components are defined and referenced in PascalCase.
    // https://eslint.style/rules/jsx/jsx-pascal-case
    '@stylistic/jsx-pascal-case': 'off',

    // Disallow multiple spaces between inline JSX props.
    // https://eslint.style/rules/jsx/jsx-props-no-multi-spaces
    '@stylistic/jsx-props-no-multi-spaces': 'off',

    // Disallow extra closing tags for components without children.
    // https://eslint.style/rules/jsx/jsx-self-closing-comp
    '@stylistic/jsx-self-closing-comp': 'off',

    // Enforce props alphabetical sorting.
    // https://eslint.style/rules/jsx/jsx-sort-props
    '@stylistic/jsx-sort-props': 'off',

    // Enforce whitespace in and around the JSX opening and closing brackets.
    // https://eslint.style/rules/jsx/jsx-tag-spacing
    '@stylistic/jsx-tag-spacing': 'off',

    // Disallow missing parentheses around multiline JSX.
    // https://eslint.style/rules/jsx/jsx-wrap-multilines
    '@stylistic/jsx-wrap-multilines': 'off',
  },
} satisfies Linter.Config;

export const deprecatedReactStylisticPlusRules = {
  name: 'airbnb/config/react/stylistic/deprecated',
  rules: {
    // Enforce JSX indentation.
    // https://eslint.style/rules/jsx/jsx-indent
    '@stylistic/jsx-indent': 'off',
  },
} satisfies Linter.Config;

export default reactStylisticRules;
