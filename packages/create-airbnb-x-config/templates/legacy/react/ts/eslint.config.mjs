/**
 * THIS FILE WAS AUTO-GENERATED.
 * PLEASE DO NOT EDIT IT MANUALLY.
 * ===============================
 * IF YOU'RE COPYING THIS INTO AN ESLINT CONFIG, REMOVE THIS COMMENT BLOCK.
 */

import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { configs } from 'eslint-config-airbnb-extended/legacy';

export const projectRoot = path.resolve('.');
export const gitignorePath = path.resolve(projectRoot, '.gitignore');

const jsConfig = [
  // ESLint Recommended Rules
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
];

const reactConfig = [
  // Airbnb React Recommended Config
  ...configs.react.recommended,
];

const typescriptConfig = [
  // Airbnb React TypeScript Config
  ...configs.react.typescript,
];

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  // Javascript Config
  ...jsConfig,
  // React Config
  ...reactConfig,
  // TypeScript Config
  ...typescriptConfig,
];
