import type { InstallPackagesArgs } from '@/helpers/installPackages';
import { configs, languages, packageManagers } from '@/constants';

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
    'eslint-config-airbnb-extended',
    'eslint-plugin-import-x',
  ];

  if (typescript) {
    commands.push('eslint-import-resolver-typescript', 'typescript-eslint');
  }

  if (language === languages.OTHER) {
    if (config.includes(configs.REACT)) {
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
  }

  return commands;
};

export default getCommands;
