import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { configs, plugins } from 'eslint-config-airbnb-extended';

export const projectRoot = path.resolve('.');
export const gitignorePath = path.resolve(projectRoot, '.gitignore');

const jsConfig = [
  // ESLINT RECOMMENDED RULES
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  // Stylistic Plugin
  plugins.stylistic,
  // Import X Plugin
  plugins.importX,
  // Airbnb Base Recommended Config
  ...configs.base.recommended,
];

const nextConfig = [
  // React Plugin
  plugins.react,
  // React Hooks Plugin
  plugins.reactHooks,
  // React JSX-A11y Plugin
  plugins.reactA11y,
  // Next Plugin
  plugins.next,
  // Airbnb Next Recommended Config
  ...configs.next.recommended,
];

const typescriptConfig = [
  // Airbnb Base TypeScript Config
  ...configs.base.typescript,
  // Airbnb Next TypeScript Config
  ...configs.next.typescript,
];

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  // Javascript Config
  ...jsConfig,
  // Next Config
  ...nextConfig,
  // TypeScript Config
  ...typescriptConfig,
];
