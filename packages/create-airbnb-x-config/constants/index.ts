export const languages = {
  REACT: 'react',
  NEXT: 'next',
  NODE: 'node',
  OTHER: 'other',
} as const;

export const configs = {
  BASE: 'base',
  NODE: 'node',
  REACT: 'react',
  NEXT: 'next',
  REACT_ROUTER: 'reactRouter',
} as const;

export const defaults = {
  typescript: true,
  prettier: true,
  language: 0,
  createESLintFile: true,
  skipInstall: false,
} as const;

export const packageManagers = {
  NPM: 'npm',
  YARN: 'yarn',
  PNPM: 'pnpm',
  BUN: 'bun',
} as const;
