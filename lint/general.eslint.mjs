const customGeneralESLintConfig = [
  {
    name: 'general/rules',
    rules: {
      'no-console': 'off',
      'no-void': 'off',
      'consistent-return': 'off',
      'no-array-constructor': 'off',
      'no-underscore-dangle': ['error'],
      'no-restricted-syntax': [
        'error',
        'ForStatement',
        'ContinueStatement',
        'DoWhileStatement',
        'WhileStatement',
        'WithStatement',
        // REACT
        {
          selector: 'MemberExpression[object.name="React"]',
          message: 'Use of React.method is not allowed.',
        },
        // REACT - TYPESCRIPT
        {
          selector: 'TSTypeReference[typeName.left.name="React"]',
          message: 'Use of React.type is not allowed.',
        },
      ],
    },
  },
];

export default customGeneralESLintConfig;
