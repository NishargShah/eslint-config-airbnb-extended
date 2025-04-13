import { configs, languages, packageManagers } from '@/constants';

import type { InstallPackagesArgs } from '@/helpers/installPackages';

type GetCommands = (args: InstallPackagesArgs) => string[];

const getCommands: GetCommands = (args) => {
  const { typescript, language, config, packageManager } = args;

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
    'eslint-plugin-import-x',
  ];

  if (typescript) {
    commands.push('eslint-import-resolver-typescript', 'typescript-eslint');
  }

  if (language === languages.OTHER) {
    if (config.includes(configs.NODE)) {
      commands.push('eslint-plugin-n');
    }

    if (config.includes(configs.REACT) || config.includes(configs.REACT_ROUTER)) {
      commands.push('eslint-plugin-react', 'eslint-plugin-react-hooks', 'eslint-plugin-jsx-a11y');
    }

    if (config.includes(configs.NEXT)) {
      commands.push('@next/eslint-plugin-next');
    }
  } else {
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

  return commands;
};

export default getCommands;
