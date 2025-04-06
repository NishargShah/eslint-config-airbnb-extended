import { Command } from 'commander';

import { name, version } from '@/package.json';

/**
 * Program Command
 * @example: pnpm cli:start --ts --js --react --remix --next --node --base-config --node-config --react-config --remix-config --next-config --use-npm --use-yarn --use-pnpm --use-bun
 */
const program = new Command()
  .name(name)
  .version(version, '-v, --version', 'Output the current version of create-airbnb-x-config.')
  .helpOption('-h, --help', 'Display this help message.')
  .option('--ts, --typescript', 'Generate configuration for a TypeScript project.')
  .option('--js, --javascript', 'Generate configuration for a JavaScript project.')
  .option('--react', 'Include React specific linting rules.')
  .option('--remix, --react-router', 'Include Remix/React Router specific linting rules.')
  .option('--next', 'Include Next.js specific linting rules.')
  .option('--node', 'Include Node.js specific linting rules.')
  .option('--base-config', 'Include only the base Airbnb ESLint configuration.')
  .option('--node-config', 'Include the Node specific ESLint configuration.')
  .option('--react-config', 'Include the React specific ESLint configuration.')
  .option('--next-config', 'Include the Next.js specific ESLint configuration.')
  .option(
    '--remix-config, --react-router-config',
    'Include the Remix/React Router specific ESLint configuration.',
  )
  .option('--use-npm', 'Explicitly tell the CLI to use npm.')
  .option('--use-yarn', 'Explicitly tell the CLI to use Yarn.')
  .option('--use-pnpm', 'Explicitly tell the CLI to use pnpm.')
  .option('--use-bun', 'Explicitly tell the CLI to use Bun.')
  .parse(process.argv);

export default program;
