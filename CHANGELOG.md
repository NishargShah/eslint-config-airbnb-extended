## 0.5.2 (2025-04-11)

### 🩹 Fixes

- **eslint-config-airbnb-extended:** Added `react-jsx-runtime` rules in next.js as it is not required those rules.
- **eslint-config-airbnb-extended:** Changed `react/require-default-props` rule and set `defaultProps` (default) in `functions`.
- **eslint-config-airbnb-extended:** Removed `boolean-prop-naming` from `reactStrict` config as it is very hard to maintain in live projects.

## 0.5.1 (2025-04-10)

### 🚀 Features

- **eslint-config-airbnb-extended:** Added `next` config

## 0.5.0 (2025-04-10)

### 🚨Breaking Change

- **eslint-config-airbnb-extended:** `react` config no longer extends `base` config in `all` and `typescript`

### 🚀 Features

- **eslint-config-airbnb-extended:** Added `reactStricts` rules

### 🩹 Fixes

- **eslint-config-airbnb-extended:** Sorted all the rules alphabetically to match docs
- **eslint-config-airbnb-extended:** `typescript-eslint` rule deprecation issue fixed

## 0.4.0 (2025-04-09)

### 🚨Breaking Change

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

### 🚨Breaking Change

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
