import reactConfig from '@/configs/react/config';
import styleRules from '@/rules/style';
import { jsExtensionsWithReact } from '@/utils';

import type { Linter } from 'eslint';

const dangleRules = styleRules.rules['no-underscore-dangle'];

const reactRecommendedConfig = [
  ...Object.values(reactConfig),
  {
    name: 'airbnb/config/react-import-x',
    settings: {
      'import-x/resolver': {
        node: {
          extensions: jsExtensionsWithReact,
        },
      },
    },
  },
  {
    name: 'airbnb/config/react-configurations',
    rules: {
      // Allow Redux devtools variable
      'no-underscore-dangle': [
        dangleRules[0],
        {
          ...dangleRules[1],
          allow: [...dangleRules[1].allow, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
        },
      ],

      // Specify whether double or single quotes should be used in JSX attributes
      // https://eslint.org/docs/rules/jsx-quotes
      // @deprecated
      'jsx-quotes': ['error', 'prefer-double'],

      // Class Methods can be used in react
      'class-methods-use-this': [
        'error',
        {
          exceptMethods: [
            'render',
            'getInitialState',
            'getDefaultProps',
            'getChildContext',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
            'componentDidCatch',
            'getSnapshotBeforeUpdate',
          ],
        },
      ],
    },
  },
] satisfies Linter.Config[];

export default reactRecommendedConfig;
