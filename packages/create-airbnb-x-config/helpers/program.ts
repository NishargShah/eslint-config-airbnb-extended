import { Command } from 'commander';

import { eslintConfigName } from '@/helpers/getConfigUrl';
import { name, version } from '@/package.json';

/**
 * Program Command
 * @example: pnpm cli:start --extended --legacy --ts --js --prettier --react --remix --next --node --strict-import-config --strict-react-config --strict-typescript-config --legacy-base-config --legacy-react-config --legacy-react-hooks-config --use-npm --use-yarn --use-pnpm --use-bun --create-eslint-file --skip-install
 */
const program = new Command()
  .name(name)
  .version(version, '-v, --version', 'Output the current version of create-airbnb-x-config.')
  .helpOption('-h, --help', 'Display this help message.')
  .option('--extended', 'Explicitly tell the CLI to use extended configurations.')
  .option('--legacy', 'Explicitly tell the CLI to use legacy configurations.')
  .option('--ts, --typescript', 'Generate configuration for a TypeScript project.')
  .option('--js, --javascript', 'Generate configuration for a JavaScript project.')
  .option('--prettier', 'Include Prettier specific linting rules.')
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
