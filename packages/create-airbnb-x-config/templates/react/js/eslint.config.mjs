import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import { configs, plugins } from 'eslint-config-airbnb-extended';

export const projectRoot = path.resolve('.');
export const gitignorePath = path.resolve(projectRoot, '.gitignore');

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

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  // Airbnb Base Recommended Config
  ...configs.base.recommended,
  // React Config
  ...reactConfig,
];
