## 0.8.1 (2025-04-14)

### 🩹 Fixes

- **eslint-config-airbnb-extended:** folder structure changed for `configs`

## 0.8.0 (2025-04-14)

### 🚨 Breaking Change

- **eslint-config-airbnb-extended:** renamed `reactA11y` rule to `reactJsxA11y`
- **eslint-config-airbnb-extended:** moved `React` eslint rules (not the package rules) to `react/recommanded` config
- **eslint-config-airbnb-extended:** Removed `import-x` plugin from base config

### 🚀 Features

- **eslint-config-airbnb-extended:** Added `node` plugin in `plugins`
- **eslint-config-airbnb-extended:** Added `import-x` plugin in `plugins`
- **eslint-config-airbnb-extended:** `Check Updates` functionality added so in future if some new rule comes up then script can automatically check
- **eslint-config-airbnb-extended:** Added `eslint-inspector.config.mjs` for checking rules status

### 🩹 Fixes

- **eslint-config-airbnb-extended:** differentiate `deprecated` rules from all rules
- **eslint-config-airbnb-extended:** `node` config typo fixed (`n/no-unsupported-features/es-builtin` => `n/no-unsupported-features/es-builtins`)
- **create-airbnb-x-config:** Added `import-x` plugin in templates

## 0.7.0 (2025-04-13)

### 🚨 Breaking Change

- **eslint-config-airbnb-extended:** `node` config no longer extends `base` config

### 🚀 Features

- **eslint-config-airbnb-extended:** Added `eslint-plugin-n` for `node` config
- **create-airbnb-x-config:** Added `node` package name in commands list

### 🩹 Fixes

- **create-airbnb-x-config:** Removed `node` typescript config from `templates` folder as it not needed

## 0.6.0 (2025-04-13)

### 🚀 Features

- **create-airbnb-x-config:** Added `templates` folder.
- **create-airbnb-x-config:** Added `getConfigUrl` function to get the url for GitHub for selected config.

## 0.5.2 (2025-04-11)

### 🩹 Fixes

- **eslint-config-airbnb-extended:** Added `react-jsx-runtime` rules in next.js as it is not required those rules.
- **eslint-config-airbnb-extended:** Changed `react/require-default-props` rule and set `defaultProps` (default) in `functions`.
- **eslint-config-airbnb-extended:** Removed `boolean-prop-naming` from `reactStrict` config as it is very hard to maintain in live projects.

## 0.5.1 (2025-04-10)

### 🚀 Features

- **eslint-config-airbnb-extended:** Added `next` config

## 0.5.0 (2025-04-10)

### 🚨 Breaking Change

- **eslint-config-airbnb-extended:** `react` config no longer extends `base` config in `all` and `typescript`

### 🚀 Features

- **eslint-config-airbnb-extended:** Added `reactStricts` rules

### 🩹 Fixes

- **eslint-config-airbnb-extended:** Sorted all the rules alphabetically to match docs
- **eslint-config-airbnb-extended:** `typescript-eslint` rule deprecation issue fixed

## 0.4.0 (2025-04-09)

### 🚨 Breaking Change

- **eslint-config-airbnb-extended:** `react` config no longer extends `base` config
- **eslint-config-airbnb-extended:** Reduce package size from 1.34mb to 200kb around

### 🚀 Features

- **eslint-config-airbnb-extended:** Did 50% Code rewrite due to size issues but no breaking change
- **eslint-config-airbnb-extended:** Added `eslint-config-airbnb-extended` config for project linting
- **eslint-config-airbnb-extended:** Separate plugins from configs, Check FAQ section for why.

### 🩹 Fixes

- **eslint-config-airbnb-extended:** Added `-b` flag in `tsc` command
- **eslint-config-airbnb-extended:** Eslint issues resolved by adding `references` and `composite` options in tsconfig

## 0.3.1 (2025-04-08)

### 🩹 Fixes

- **eslint-config-airbnb-extended:** Resolved `npx` issue by adding `shebang` line

## 0.3.0 (2025-04-08)

### 🚨 Breaking Change

- **eslint-config-airbnb-extended:** Renamed `typescript-only` config to `typescript`
- **eslint-config-airbnb-extended:** Renamed `typescript` config to `all`

### 🚀 Features

- **eslint-config-airbnb-extended:** Added `node` config
- **eslint-config-airbnb-extended:** Added README.md
- **eslint-config-airbnb-extended:** Added MIGRATION.md
- **create-airbnb-x-config:** Added README.md

### ❤️ Thank You

- (docs) Thanks to ChatGPT :)

## 0.2.1 (2025-04-07)

### 🩹 Fixes

- **create-airbnb-x-config:** Resolved package manager issue

## 0.2.0 (2025-04-07)

### 🚀 Features

- **eslint-config-airbnb-extended:** Airbnb Setup added
- **eslint-config-airbnb-extended:** Next.js config added
- **create-airbnb-x-config:** CLI POC Completed

### 🩹 Fixes

- **eslint-config-airbnb-extended:** Removed changeset CLI
- **create-airbnb-x-config:** Removed changeset CLI

## 0.1.0 (2025-04-05)

### 🚀 Features

- **eslint-config-airbnb-extended:** Monorepo setup added
- **create-airbnb-x-config:** Monorepo setup added

### ❤️ Thank You

- Nisharg Shah @nishargshah
