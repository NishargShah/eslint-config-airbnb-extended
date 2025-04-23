import { configs, plugins, rules } from 'eslint-config-airbnb-extended';

const customTSESLintConfig = [
  // TYPESCRIPT ESLINT PLUGIN
  plugins.typescriptEslint,
  // AIRBNB BASE TYPESCRIPT CONFIG
  ...configs.base.typescript,
  // AIRBNB TYPESCRIPT ESLINT STRICT CONFIG
  rules.typescript.typescriptEslintStrict,
];

export default customTSESLintConfig;
