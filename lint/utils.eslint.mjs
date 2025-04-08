import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';

export const ESLintDirectoryName = path.resolve('.');
export const gitignorePath = path.resolve(ESLintDirectoryName, '.gitignore');

export const gitIgnoreFile = includeIgnoreFile(gitignorePath);
