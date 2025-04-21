import { configs, plugins, rules } from 'eslint-config-airbnb-extended';

const customTSESLintConfig = [
  plugins.typescriptEslint,
  // AIRBNB BASE TYPESCRIPT CONFIG
  ...configs.base.typescript,
  // AIRBNB EXTENDED TYPESCRIPT CONFIG
  rules.typescript.typescriptEslintStrict,
  // TYPESCRIPT CONFIG RULES
  {
    name: 'x/typescript-eslint/rules',
    rules: {
      '@typescript-eslint/unified-signatures': 'error',
    },
  },
  {
    name: 'x/import-x/disable-extraneous-deps',
    files: ['packages/create-airbnb-x-config/templates/**/eslint.config.mjs'],
    rules: {
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
];

export default customTSESLintConfig;
