import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';

export const projectRoot = path.resolve('.');
export const gitignorePath = path.resolve(projectRoot, '.gitignore');

export const gitIgnoreFile = includeIgnoreFile(gitignorePath);
