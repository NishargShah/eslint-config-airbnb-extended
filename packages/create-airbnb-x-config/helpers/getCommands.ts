import { configs, runtimes, packageManagers, languages, formatters } from '@/constants';

import type { NonNullableArgsOutput } from '@/types';

export type GetCommands = (
  args: Omit<NonNullableArgsOutput, 'createESLintFile' | 'skipInstall'>,
) => string[];

const getCommands: GetCommands = (args) => {
  const { config, language, formatter, runtime, packageManager, legacyConfig } = args;

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

  if (language === languages.TYPESCRIPT) {
    commands.push('eslint-import-resolver-typescript', 'typescript-eslint');
  }

  if (formatter === formatters.PRETTIER) {
    commands.push('prettier', 'eslint-plugin-prettier', 'eslint-config-prettier');
  }

  if (config === configs.EXTENDED) {
    commands.push('@stylistic/eslint-plugin@^3.1.0', 'eslint-plugin-import-x');

    if (runtime === runtimes.REACT || runtime === runtimes.NEXT) {
      commands.push('eslint-plugin-react', 'eslint-plugin-react-hooks', 'eslint-plugin-jsx-a11y');
    }

    if (runtime === runtimes.NEXT) {
      commands.push('@next/eslint-plugin-next');
    }

    if (runtime === runtimes.NODE) {
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
