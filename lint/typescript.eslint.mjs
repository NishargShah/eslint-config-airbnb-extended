import { configs, plugins, rules } from 'eslint-config-airbnb-extended';

const customTSESLintConfig = [
  // Typescript ESLint Plugin
  plugins.typescriptEslint,
  // AIRBNB BASE TYPESCRIPT CONFIG
  ...configs.base.typescript,
  // AIRBNB EXTENDED TYPESCRIPT CONFIG
  rules.typescript.typescriptEslintStrict,
  {
    name: 'x/import-x/disable-extraneous-deps',
    files: ['packages/create-airbnb-x-config/templates/**/eslint.config.mjs'],
    rules: {
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
];

export default customTSESLintConfig;
