import ESLintPluginReactRefresh from 'eslint-plugin-react-refresh';

const customReactESLintConfig = [
  // REACT REFRESH CONFIG
  {
    name: 'react-refresh/rules',
    plugins: {
      'react-refresh': ESLintPluginReactRefresh,
    },
    rules: {
      ...ESLintPluginReactRefresh.configs.recommended.rules,
      'react-refresh/only-export-components': ['error'],
    },
  },
];

export default customReactESLintConfig;
