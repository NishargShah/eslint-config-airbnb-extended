# Upgrade to v3 {#migration}

WIP

## Config {#config}

WIP

## CLI {#cli}

- **CLI is now ESM-only** - You must run the CLI in an environment that supports **native ES modules**.

- **Node.js v16 support dropped** - v3 requires **Node 18 or higher**.

- **Redesigned CLI options** - Many flags have been renamed or restructured for better consistency.

### CLI Options {#cli-options}

Refer to the table to update your existing scripts or commands.

| Category                   | Old Command                   | New Command              |
| -------------------------- | ----------------------------- | ------------------------ |
| **Config Type**            | `--extended`                  | `--config extended`      |
|                            | `--legacy`                    | `--config legacy`        |
| **Language**               | `--ts`, `--typescript`        | `--lang typescript`      |
|                            | `--js`, `--javascript`        | `--lang javascript`      |
| **Prettier**               | `--prettier`                  | `--formatter prettier`   |
| **Frameworks & Runtimes**  | `--react`                     | `--runtime react`        |
|                            | `--react-router`              | `--runtime react-router` |
|                            | `--remix`                     | `--runtime remix`        |
|                            | `--next`                      | `--runtime next`         |
|                            | `--node`                      | `--runtime node`         |
| **Strict Rules**           | `--strict-import-config`      | `--strict import`        |
|                            | `--strict-react-config`       | `--strict react`         |
|                            | `--strict-typescript-config`  | `--strict typescript`    |
| **Legacy Config Variants** | `--legacy-base-config`        | `--legacy base`          |
|                            | `--legacy-react-config`       | `--legacy react`         |
|                            | `--legacy-react-hooks-config` | `--legacy react-hooks`   |
| **Package Managers**       | `--use-npm`                   | `--pm npm`               |
|                            | `--use-yarn`                  | `--pm yarn`              |
|                            | `--use-pnpm`                  | `--pm pnpm`              |
|                            | `--use-bun`                   | `--pm bun`               |
