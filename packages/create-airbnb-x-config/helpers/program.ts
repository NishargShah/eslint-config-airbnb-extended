import { Command, Option } from 'commander';

import { name, version } from '@/package.json';
import {
  configs,
  eslintConfigName,
  formatters,
  languages,
  packageManagers,
  runtimes,
} from '@/constants';

/**
 * Program Command
 * @example: pnpm cli:start --config extended --lang typescript --formatter prettier --react --remix --next --node --strict-import-config --strict-react-config --strict-typescript-config --legacy-base-config --legacy-react-config --legacy-react-hooks-config --pm pnpm --create-eslint-file --skip-install
 */
const program = new Command()
  .name(name)
  .version(version, '-v, --version', 'Output the current version of create-airbnb-x-config.')
  .helpOption('-h, --help', 'Display this help message.')

  // Config
  .addOption(
    new Option('--config <config>', 'Explicitly tell the CLI to use selected config.').choices(
      Object.values(configs),
    ),
  )

  // Language
  .addOption(
    new Option(
      '--lang, --language <lang>',
      'Generate configuration for a selected language project.',
    ).choices(Object.values(languages)),
  )

  // Formatters
  .addOption(
    new Option(
      '--formatter <formatter>',
      'Include selected formatter for specific linting rules.',
    ).choices(Object.values(formatters)),
  )

  // Runtimes
  .addOption(
    new Option(
      '--runtime <runtime>',
      'Include selected runtime for specific linting rules.',
    ).choices(Object.values(runtimes)),
  )

  .option('--strict-import-config', 'Include the strict Import ESLint configuration.')
  .option('--strict-react-config', 'Include the strict React ESLint configuration.')
  .option('--strict-typescript-config', 'Include the strict TypeScript ESLint configuration.')
  .option('--legacy-base-config', 'Include the legacy Base ESLint configuration.')
  .option('--legacy-react-config', 'Include the legacy React ESLint configuration.')
  .option('--legacy-react-hooks-config', 'Include the legacy React Hooks ESLint configuration.')

  // Package Manager
  .addOption(
    new Option(
      '--pm, --package-manager <pm>',
      'Explicitly tell the CLI to use selected package manager.',
    ).choices(Object.values(packageManagers)),
  )

  .option('--create-eslint-file', `Explicitly tell the CLI to create ${eslintConfigName} file.`)
  .option('--skip-install', 'Explicitly tell the CLI to skip installing packages.')
  .parse(process.argv);

export default program;
