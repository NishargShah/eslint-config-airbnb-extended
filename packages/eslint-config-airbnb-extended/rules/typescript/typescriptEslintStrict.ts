import type { Linter } from 'eslint';

const typescriptEslintStrictRules = {
  name: 'airbnb/config/typescript/typescript-eslint/strict',
  rules: {
    // Require that function overload signatures be consecutive.
    // https://typescript-eslint.io/rules/adjacent-overload-signatures
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Require consistently using either T[] or Array<T> for arrays.
    // https://typescript-eslint.io/rules/array-type
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
        readonly: 'array',
      },
    ],

    // Disallow awaiting a value that is not a Thenable.
    // https://typescript-eslint.io/rules/await-thenable
    '@typescript-eslint/await-thenable': 'error',

    // Disallow @ts-<directive> comments or require descriptions after directives.
    // https://typescript-eslint.io/rules/ban-ts-comment
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        minimumDescriptionLength: 3,
        'ts-check': false,
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
      },
    ],

    // Enforce that literals on classes are exposed in a consistent style.
    // https://typescript-eslint.io/rules/class-literal-property-style
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
    // https://typescript-eslint.io/rules/consistent-generic-constructors
    '@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],

    // Enforce consistent usage of type assertions.
    // https://typescript-eslint.io/rules/consistent-type-assertions
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        arrayLiteralTypeAssertions: 'allow',
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
      },
    ],

    // Enforce consistent usage of type exports.
    // https://typescript-eslint.io/rules/consistent-type-exports
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],

    // Enforce consistent usage of type imports.
    // https://typescript-eslint.io/rules/consistent-type-imports
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
        prefer: 'type-imports',
      },
    ],

    // Require explicit return and argument types on exported functions' and classes' public class methods.
    // https://typescript-eslint.io/rules/explicit-module-boundary-types
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: [],
        allowHigherOrderFunctions: true,
        allowOverloadFunctions: false,
        allowTypedFunctionExpressions: true,
      },
    ],

    // Enforce using a particular method signature syntax.
    // https://typescript-eslint.io/rules/method-signature-style
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    // Disallow using the delete operator on array values.
    // https://typescript-eslint.io/rules/no-array-delete
    '@typescript-eslint/no-array-delete': 'error',

    // Disallow non-null assertion in locations that may be confusing.
    // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // Require expressions of type void to appear in statement position.
    // https://typescript-eslint.io/rules/no-confusing-void-expression
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: false,
        ignoreVoidOperator: true,
        ignoreVoidReturningFunctions: false,
      },
    ],

    // Disallow duplicate constituents of union or intersection types.
    // https://typescript-eslint.io/rules/no-duplicate-type-constituents
    '@typescript-eslint/no-duplicate-type-constituents': [
      'error',
      {
        ignoreIntersections: false,
        ignoreUnions: false,
      },
    ],

    // Disallow accidentally using the "empty object" type.
    // https://typescript-eslint.io/rules/no-empty-object-type
    '@typescript-eslint/no-empty-object-type': [
      'error',
      {
        allowInterfaces: 'never',
        allowObjectTypes: 'never',
      },
    ],

    // Disallow the any type.
    // https://typescript-eslint.io/rules/no-explicit-any
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: false,
        ignoreRestArgs: false,
      },
    ],

    // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
    // https://typescript-eslint.io/rules/no-import-type-side-effects
    '@typescript-eslint/no-import-type-side-effects': 'error',

    // Disallow void type outside of generic or return types.
    // https://typescript-eslint.io/rules/no-invalid-void-type
    '@typescript-eslint/no-invalid-void-type': [
      'error',
      {
        allowAsThisParameter: false,
        allowInGenericTypeArguments: true,
      },
    ],

    // Disallow the void operator except when used to discard a value.
    // https://typescript-eslint.io/rules/no-meaningless-void-operator
    '@typescript-eslint/no-meaningless-void-operator': [
      'error',
      {
        checkNever: false,
      },
    ],

    // Disallow Promises in places not designed to handle them.
    // https://typescript-eslint.io/rules/no-misused-promises
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,
        checksSpreads: true,
        checksVoidReturn: true,
      },
    ],

    // Disallow using the spread operator when it might cause unexpected behavior.
    // https://typescript-eslint.io/rules/no-misused-spread
    '@typescript-eslint/no-misused-spread': [
      'error',
      {
        allow: [],
      },
    ],
  },
} satisfies Linter.Config;

export default typescriptEslintStrictRules;
