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

export const configTypes = {
  EXTENDED: 'extended',
  LEGACY: 'legacy',
} as const;

export const defaults = {
  configType: configTypes.EXTENDED,
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

export const legacyConfigs = {
  BASE_LEGACY: 'base_legacy',
  BASE_RECOMMENDED: 'base_recommended',
  BASE_TYPESCRIPT: 'base_typescript',
  REACT_LEGACY: 'react_legacy',
  REACT_BASE: 'react_base',
  REACT_RECOMMENDED: 'react_recommended',
  REACT_HOOKS: 'react_hooks',
  REACT_TYPESCRIPT: 'react_typescript',
} as const;
