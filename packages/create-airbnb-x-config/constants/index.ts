export const languages = {
  REACT: 'react',
  NEXT: 'next',
  NODE: 'node',
} as const;

export const strictConfigs = {
  IMPORT: 'import',
  REACT: 'react',
  TYPESCRIPT: 'typescript',
} as const;

export const configTypes = {
  EXTENDED: 'extended',
  LEGACY: 'legacy',
} as const;

export const defaults = {
  configType: configTypes.EXTENDED,
  typescript: true,
  prettier: true,
  strictConfig: false,
  legacyReactHooks: true,
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
  BASE: 'base',
  REACT: 'react',
} as const;

export const legacyLanguages = {
  BASE: 'base',
  REACT: 'react',
  REACT_HOOKS: 'react-hooks',
} as const;

// This constant is based on /apps/templates/lib/constants.ts
export const subFolders = {
  DEFAULT: 'default',
  STRICT: 'strict',
};

export const eslintConfigName = 'eslint.config.mjs';

export const baseGithubUrl =
  'https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/apps/build-templates/templates';
