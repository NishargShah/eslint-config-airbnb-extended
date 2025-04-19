import reactConfig from '@/configs/react/config';
import getStylisticLegacyConfig from '@/helpers/getStylisticLegacyConfig';
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
      // disallow dangling underscores in identifiers
      // https://eslint.org/docs/latest/rules/no-underscore-dangle
      // Allow Redux devtools variable
      'no-underscore-dangle': [
        dangleRules[0],
        {
          ...dangleRules[1],
          allow: [...dangleRules[1].allow, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
        },
      ],

      // enforce that class methods use "this"
      // https://eslint.org/docs/rules/class-methods-use-this
      // Class Methods can be used in React
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
  {
    name: 'airbnb/config/react-stylistic',
    rules: {
      // specify whether double or single quotes should be used in JSX attributes
      // https://eslint.style/rules/js/jsx-quotes
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    },
  },
  {
    name: 'airbnb/config/react-disable-legacy-stylistic-react-config',
    ...getStylisticLegacyConfig('react'),
  },
] satisfies Linter.Config[];

export default reactRecommendedConfig;
