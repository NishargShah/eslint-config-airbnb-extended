import { configs, languages, packageManagers } from '@/constants';

import type { NonNullableArgsOutput } from '@/types';

export type GetCommands = (
  args: Omit<NonNullableArgsOutput, 'createESLintFile' | 'skipInstall'>,
) => string[];

const getCommands: GetCommands = (args) => {
  const { config, typescript, prettier, language, packageManager, legacyConfig } = args;

  const pmInstallationCommand = {
    [packageManagers.NPM]: 'install',
    [packageManagers.YARN]: 'add',
    [packageManagers.PNPM]: 'install',
    [packageManagers.BUN]: 'add',
  };

  const commands = [
    packageManager,
    pmInstallationCommand[packageManager],
    '-D',
    'eslint',
    '@eslint/compat',
    '@eslint/js',
    'eslint-config-airbnb-extended',
  ];

  if (typescript) {
    commands.push('eslint-import-resolver-typescript', 'typescript-eslint');
  }

  if (prettier) {
    commands.push('prettier', 'eslint-plugin-prettier', 'eslint-config-prettier');
  }

  if (config === configs.EXTENDED) {
    commands.push('@stylistic/eslint-plugin@^3.1.0', 'eslint-plugin-import-x');

    if (language === languages.REACT || language === languages.NEXT) {
      commands.push('eslint-plugin-react', 'eslint-plugin-react-hooks', 'eslint-plugin-jsx-a11y');
    }

    if (language === languages.NEXT) {
      commands.push('@next/eslint-plugin-next');
    }

    if (language === languages.NODE) {
      commands.push('eslint-plugin-n');
    }
  }

  if (config === configs.LEGACY) {
    commands.push('eslint-plugin-import');

    if (legacyConfig) {
      const { react, reactHooks } = legacyConfig;

      if (react) {
        commands.push('eslint-plugin-react', 'eslint-plugin-jsx-a11y');
      }

      if (reactHooks) {
        commands.push('eslint-plugin-react-hooks');
      }
    }
  }

  return commands;
};

export default getCommands;
