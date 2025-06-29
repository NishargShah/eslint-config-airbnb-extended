# `create-airbnb-x-config`

The easiest way to get started with `eslint-config-airbnb-extended` is by using the CLI tool `create-airbnb-x-config`. It helps you set up ESLint quickly with all the right settings for your project.

### Interactive Setup

Run this command inside your project folder to launch the interactive setup:

```bash
npx create-airbnb-x-config
```

You’ll be guided through a series of questions to customize your setup. For example:

```bash
✔ Would you like to use TypeScript? … No / Yes
```

### Non-Interactive Setup

Prefer a faster setup? Use command-line options to skip the prompts:

```bash
npx create-airbnb-x-config --ts --react --use-pnpm
```

Here’s a list of available options:

```bash
Usage: create-airbnb-x-config [options]

Options:
  -v, --version

    Output the current version of create-airbnb-x-config.

  --extended

    Explicitly tell the CLI to use extended configurations.

  --legacy

    Explicitly tell the CLI to use legacy configurations.

  --ts, --typescript

    Generate configuration for a TypeScript project.

  --js, --javascript

    Generate configuration for a JavaScript project.

  --prettier

    Include Prettier specific linting rules.

  --react

    Include React specific linting rules.

  --remix, --react-router

    Include Remix/React Router specific linting rules.

  --next

    Include Next.js specific linting rules.

  --node

    Include Node.js specific linting rules.

  --base-config

    Include only the base Airbnb ESLint configuration.

  --node-config

    Include the Node specific ESLint configuration.

  --react-config

    Include the React specific ESLint configuration.

  --next-config

    Include the Next.js specific ESLint configuration.

  --remix-config, --react-router-config

    Include the Remix/React Router specific ESLint configuration.

  --strict-import-config

    Include the strict Import ESLint configuration.

  --strict-react-config

    Include the strict React ESLint configuration.

  --strict-typescript-config

    Include the strict TypeScript ESLint configuration.

  --legacy-base-config

    Include the legacy Base ESLint configuration.

  --legacy-react-config

    Include the legacy React ESLint configuration.

  --legacy-react-hooks-config

    Include the legacy React Hooks ESLint configuration.

  --use-npm

    Explicitly tell the CLI to use npm.

  --use-yarn

    Explicitly tell the CLI to use Yarn.

  --use-pnpm

    Explicitly tell the CLI to use pnpm.

  --use-bun

    Explicitly tell the CLI to use Bun.

  --create-eslint-file

    Explicitly tell the CLI to create eslint.config.mjs file.

  --skip-install

    Explicitly tell the CLI to skip installing packages.

  -h, --help

    Display this help message.
```

## Why use this?

Using `create-airbnb-x-config` simplifies the entire setup process. Instead of manually installing and configuring multiple ESLint plugins, this tool does it all for you.

For more details, see the [manual installation note](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/eslint-config-airbnb-extended#manual-installation-not-recommended).
