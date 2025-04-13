import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import { configs, plugins } from 'eslint-config-airbnb-extended';
import { configs as tsConfigs } from 'typescript-eslint';

export const projectRoot = path.resolve('.');
export const gitignorePath = path.resolve(projectRoot, '.gitignore');

const nodeConfig = [
  plugins.node,
  // Airbnb Node Recommended Config
  ...configs.node.recommended,
];

const typescriptConfig = [
  // Airbnb Base TypeScript Config
  ...configs.base.typescript,
  // Airbnb Node TypeScript Config
  ...configs.node.typescript,
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
  // Airbnb Base Recommended Config
  ...configs.base.recommended,
  // Node Config
  ...nodeConfig,
  // TypeScript Config
  ...typescriptConfig,
];
