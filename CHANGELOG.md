## 0.11.3 (2025-04-23)

### 🩹 Fixes

- **eslint-config-airbnb-extended:** Fixed `no-confusing-void-expression` rule for arrow function

## 0.11.2 (2025-04-23)

### 🩹 Fixes

- **eslint-config-airbnb-extended:** Fixed `files` issue in `typescriptEslintStrictRules`
- **eslint-config-airbnb-extended:** Fixed `tsExtensions` spreading issue
- **eslint-config-airbnb-extended:** Added/Removed some of the rules from `typescriptEslintStrictRules`

## 0.11.1 (2025-04-23)

### 🚀 Features

- **eslint-config-airbnb-extended:** Added `typescript-eslint` recommended and stylistic rules in `typescriptEslint` config
- **create-airbnb-x-config:** Added `prettier` functionality
- **create-airbnb-x-config:** Automated `templates` by the script
- **create-airbnb-x-config:** Added `templates` for prettier

## 0.11.0 (2025-04-22)

### 🚨 Breaking Change

- **eslint-config-airbnb-extended:** Changed `typescript-eslint` rules severity

### 🚀 Features

- **eslint-config-airbnb-extended:** Added `disableTypeChecked` config for javascript from `typescript-eslint`
- **eslint-config-airbnb-extended:** Added `typescriptEslintStrict` rules
- **eslint-config-airbnb-extended:** Added `typescript-eslint` function in `Check Updates`

### 🩹 Fixes

- **create-airbnb-x-config:** Changed `templates` configs

## 0.10.2 (2025-04-20)

### 🩹 Fixes

- **create-airbnb-x-config:** Added `tsConfigs` in `TypeScript` config
- **eslint-config-airbnb-extended:** Added `vite` config in dev dependencies allowed list

## 0.10.1 (2025-04-20)

### 🩹 Fixes

- **eslint-config-airbnb-extended:** Fixed `ignoreTypes` issue

## 0.10.0 (2025-04-20)

### 🚨 Breaking Change

- **eslint-config-airbnb-extended:** Changed `rules` keys

### 🚀 Features

- **eslint-config-airbnb-extended:** Added `stylistic` plugin of `javascript`, `typescript`, `jsx` and `plus`
- **eslint-config-airbnb-extended:** Added `stylistic` and `stylistic-plus` in base config
- **eslint-config-airbnb-extended:** Added `stylistic-disable-legacy` config
- **eslint-config-airbnb-extended:** Added `stylistic-react` in React config
- **eslint-config-airbnb-extended:** Added `stylistic-typescript` and `stylistic-typescript-plus` in TypeScript config
- **eslint-config-airbnb-extended:** Added `stylistic` function in `Check Updates`

### 🩹 Fixes

- **eslint-config-airbnb-extended:** moved `reactStrict` rules from `base` config to `react` config
- **create-airbnb-x-config:** Changed `templates` configs

## 0.9.3 (2025-04-17)

### 🩹 Fixes

- **eslint-config-airbnb-extended:** base rules typescript issue fixed

## 0.9.2 (2025-04-17)

### 🩹 Fixes

- **eslint-config-airbnb-extended:** fixed: Error: Cannot find module `<plugin>`

## 0.9.1 (2025-04-14)

### 🚀 Features

- **create-airbnb-x-config:** Added `@eslint/js` package for `eslint` recommended rules

### 🩹 Fixes

- **create-airbnb-x-config:** Added `@eslint/compat` package in commands

## 0.9.0 (2025-04-14)

### 🚨 Breaking Change

- **eslint-config-airbnb-extended:** Removed `next` plugin from next config

### 🚀 Features

- **eslint-config-airbnb-extended:** Added `next` plugin in `plugins`
- **eslint-config-airbnb-extended:** Added `next` rules
- **eslint-config-airbnb-extended:** `next` function added in `Check Updates`

### 🩹 Fixes

- **eslint-config-airbnb-extended:** folder structure changed for `configs`
- **create-airbnb-x-config:** Added `next` plugin in templates

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
