import { Command, Option } from 'commander';

import { name, version } from '@/package.json';
import { configs, eslintConfigName, formatters, languages } from '@/constants';

/**
 * Program Command
 * @example: pnpm cli:start --config extended --language typescript --formatter prettier --react --remix --next --node --strict-import-config --strict-react-config --strict-typescript-config --legacy-base-config --legacy-react-config --legacy-react-hooks-config --use-npm --use-yarn --use-pnpm --use-bun --create-eslint-file --skip-install
 */
const program = new Command()
  .name(name)
  .version(version, '-v, --version', 'Output the current version of create-airbnb-x-config.')
  .helpOption('-h, --help', 'Display this help message.')

  // Config
  .addOption(
    new Option('--config <config>', 'Explicitly tell the CLI to use selected config').choices(
      Object.values(configs),
    ),
  )

  // Language
  .addOption(
    new Option(
      '--language <lang>',
      'Generate configuration for a selected language project',
    ).choices(Object.values(languages)),
  )

  // Formatters
  .addOption(
    new Option(
      '--formatter <formatter>',
      'Include selected formatter for specific linting rules',
    ).choices(Object.values(formatters)),
  )

  .option('--react', 'Include React specific linting rules.')
  .option('--remix, --react-router', 'Include Remix/React Router specific linting rules.')
  .option('--next', 'Include Next.js specific linting rules.')
  .option('--node', 'Include Node.js specific linting rules.')
  .option('--strict-import-config', 'Include the strict Import ESLint configuration.')
  .option('--strict-react-config', 'Include the strict React ESLint configuration.')
  .option('--strict-typescript-config', 'Include the strict TypeScript ESLint configuration.')
  .option('--legacy-base-config', 'Include the legacy Base ESLint configuration.')
  .option('--legacy-react-config', 'Include the legacy React ESLint configuration.')
  .option('--legacy-react-hooks-config', 'Include the legacy React Hooks ESLint configuration.')
  .option('--use-npm', 'Explicitly tell the CLI to use npm.')
  .option('--use-yarn', 'Explicitly tell the CLI to use Yarn.')
  .option('--use-pnpm', 'Explicitly tell the CLI to use pnpm.')
  .option('--use-bun', 'Explicitly tell the CLI to use Bun.')
  .option('--create-eslint-file', `Explicitly tell the CLI to create ${eslintConfigName} file.`)
  .option('--skip-install', 'Explicitly tell the CLI to skip installing packages.')
  .parse(process.argv);

export default program;
