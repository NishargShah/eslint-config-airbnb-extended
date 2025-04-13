import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { configs, plugins } from 'eslint-config-airbnb-extended';
import { configs as tsConfigs } from 'typescript-eslint';

export const projectRoot = path.resolve('.');
export const gitignorePath = path.resolve(projectRoot, '.gitignore');

const jsConfig = [
  // ESLINT RECOMMENDED RULES
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
];

const reactConfig = [
  // Import X Plugin
  plugins.importX,
  // React Plugin
  plugins.react,
  // React Hooks Plugin
  plugins.reactHooks,
  // React JSX-A11y Plugin
  plugins.reactA11y,
  // Airbnb React Recommended Config
  ...configs.react.recommended,
];

const typescriptConfig = [
  // Airbnb Base TypeScript Config
  ...configs.base.typescript,
  // Airbnb React TypeScript Config
  ...configs.react.typescript,
  // Typescript Recommended Config
  ...tsConfigs.recommended,
  // Disable TypeScript rules for js files
  {
    files: ['**/*.{js,cjs,mjs}'],
    ...configs.disableTypeChecked,
  },
];

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  // Javascript Config
  ...jsConfig,
  // Airbnb Base Recommended Config
  ...configs.base.recommended,
  // React Config
  ...reactConfig,
  // TypeScript Config
  ...typescriptConfig,
];
