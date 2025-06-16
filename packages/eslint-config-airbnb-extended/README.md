# `eslint-config-airbnb-extended`

[![NPM Version](https://img.shields.io/npm/v/eslint-config-airbnb-extended)](https://www.npmjs.com/package/eslint-config-airbnb-extended)
[![NPM Downloads](https://img.shields.io/npm/dw/eslint-config-airbnb-extended)](https://www.npmjs.com/package/eslint-config-airbnb-extended)
[![NPM Last Update](https://img.shields.io/npm/last-update/eslint-config-airbnb-extended)](https://www.npmjs.com/package/eslint-config-airbnb-extended)

> [!NOTE]
> This package is designed exclusively for **flat configuration**. Legacy `.eslintrc*` files are not supported. For that, please use older packages. For more details, refer to the [Note](https://github.com/NishargShah/eslint-config-airbnb-extended?tab=readme-ov-file#note).

## Installation

### Automate the setup with `create-airbnb-x-config`

```bash
# Inside your project directory
npx create-airbnb-x-config
```

To learn more about the configuration options available for `create-airbnb-x-config`, check out the [README.md](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/create-airbnb-x-config#create-airbnb-x-config).

### Steps

First, you need to decide whether you want to use the `legacy` config or the `extended` config. If you're not sure about the difference between the two, you can refer to the [Extended vs Legacy Config](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/eslint-config-airbnb-extended#difference-between-extended-vs-legacy-config) for a brief explanation. For more information specifically about the Legacy config, check out the [Legacy Config](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/eslint-config-airbnb-extended#legacy-config). If you decide to use the Extended config, you can proceed with the steps below. Otherwise, feel free to switch to the Legacy config if that better fits your requirements.

Once you've completed the selection steps in `create-airbnb-x-config`, you'll be prompted to choose whether or not to **install dependencies** based on your preferences:

- If you choose **to install**, the tool will automatically detect your project's package manager and install all required dependencies for you.
- If you choose **not to install**, you'll receive the appropriate commands to install the dependencies manually.

After that, you'll be asked whether you want the tool to **generate an `eslint.config.mjs` file** for you:

- If you agree, the file will be created automatically.
- If not, you’ll need to create the file yourself.

At the end of the process, you’ll be given a **GitHub URL** containing your ESLint configuration template. If you chose **not** to auto-generate the config file, simply visit the URL, copy the template, and paste it into your `eslint.config.mjs` file. The content of the template will reflect the options you selected earlier.

### Manual Installation (Not Recommended)

While **manual installation** is possible, we strongly recommend using `create-airbnb-x-config` for automatic updates and ease of use.

The configuration may change over time, and `create-airbnb-x-config` will always stay up-to-date with the latest versions. If you're confident in handling manual installations, refer to the [Packages Used](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/eslint-config-airbnb-extended#packages-used) section for more information on the individual packages.

## Legacy Config

Many people are currently using Airbnb's ESLint configs, like `eslint-config-airbnb`, and they want a way to switch or upgrade without making any changes to their existing config setup.

Right now, the new process for setting up configs is more complex, and not everyone wants to go through it. What developers really need is a simple and direct replacement for the existing Airbnb configs, a solution that keeps everything working the same way as before, with no rule or behavior changes. It should also make sure all packages used are updated to the latest versions.

In short, the goal is:

- No need to learn or adopt new config styles
- No changes in rule behavior or structure
- Easy to migrate by just changing the import path
- All packages should be latest

Here’s the way to use the **Airbnb legacy configurations** with the flat config format under `eslint-config-airbnb-extended/legacy`.

#### For [`eslint-config-airbnb-base`](https://www.npmjs.com/package/eslint-config-airbnb-base)

```ts
import { configs } from 'eslint-config-airbnb-extended/legacy';

// Equivalent to airbnb-base/legacy
export default [...configs.base.legacy];

// Equivalent to airbnb-base
export default [...configs.base.recommended];
```

---

#### For [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb)

```ts
import { configs } from 'eslint-config-airbnb-extended/legacy';

// Equivalent to airbnb/legacy
export default [...configs.react.legacy];

// Equivalent to airbnb/base
export default [...configs.react.base];

// Equivalent to airbnb
export default [...configs.react.recommended];

// Equivalent to airbnb/hooks
export default [...configs.react.hooks];
```

---

#### For [`eslint-config-airbnb-typescript`](https://www.npmjs.com/package/eslint-config-airbnb-typescript)

```ts
import { configs } from 'eslint-config-airbnb-extended/legacy';

// Equivalent to airbnb-typescript/base
export default [...configs.base.typescript];

// Equivalent to airbnb-typescript
export default [...configs.react.typescript];
```

## Packages Used

This configuration relies on the following essential packages:

- **[`@stylistic/eslint-plugin`](https://www.npmjs.com/package/@stylistic/eslint-plugin)**: Ensures fine-tuned styling rules for code formatting.
- **[`eslint-plugin-import-x`](https://www.npmjs.com/package/eslint-plugin-import-x)**: A powerful tool for managing and validating imports.
- **[`eslint-plugin-n`](https://www.npmjs.com/package/eslint-plugin-n)**: Enforces best practices for Node.js.
- **[`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)**: Enforces React-specific linting rules and best practices.
- **[`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)**: Ensures proper use of React hooks.
- **[`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)**: Improves accessibility in JSX code.
- **[`typescript-eslint`](https://www.npmjs.com/package/typescript-eslint)**: Provides linting support for TypeScript codebases.
- **[`eslint-import-resolver-typescript`](https://www.npmjs.com/package/eslint-import-resolver-typescript)**: Ensures TypeScript compatibility for import statements.

## Strict Rules

The `eslint-config-airbnb-extended` package also offers a **strict mode**, which includes a set of stricter ESLint rules for **imports**, **React**, and **TypeScript**. These rules aren’t enabled by default, but if you want to improve the consistency and quality of your code even more, you can turn them on easily.

To enable it, you'll need to import the strict rules from the config like this:

```ts
import { rules } from 'eslint-config-airbnb-extended';️
```

Then, in your ESLint configuration (`eslint.config.mjs`), add these rules:

```js
export default [
  // Your configurations
  rules.base.importsStrict,
  rules.react.strict,
  rules.typescript.typescriptEslintStrict,
];
```

### What do these strict rules include?

**1. Strict Imports**

- Enforces a consistent and clean import order
- Differentiates between type imports and value imports
- and many more...

**2. Strict React**

- Requires `key` props in lists
- Sorts JSX props
- Disables `prop-types` (since TypeScript is the focus)
- and many more...

**3. Strict TypeScript ESLint**

- Disallows `@ts-ignore`, prefers `@ts-expect-error`
- Bans `any`
- Disallows non-null assertions (`!`)
- Encourages using Nullish coalescing operator (`??`) and optional chaining (`?.`)
- and many more...

## FAQs

### Difference between Extended vs Legacy Config

**Legacy Config** – Designed to be a one-to-one replacement of the original Airbnb ESLint configurations using the new flat config format. Its main purpose is to maintain backward compatibility by continuing to use the same packages as the original setup. For more details, see the [Legacy Config](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/eslint-config-airbnb-extended#legacy-config).

**Extended Config** – A modern ESLint configuration based on `eslint-config-airbnb`, built from scratch with updated rules, replacement of deprecated ones using community recommended alternatives, and the adoption of the latest best-practice packages. For more details on the packages used, refer to the [Packages Used](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/eslint-config-airbnb-extended#packages-used) section.

### How to Configure for a Monorepo?

If you're working in a monorepo setup, it's recommended to run the installation command in the specific sub-folder where you want the configuration. Alternatively, you can choose to skip the package installation, and we'll provide a customized set of commands based on your selection, allowing you to install it according to your preferred method.

### Why did we switch from `import` to `import-x`?

The switch from the [`import`](https://www.npmjs.com/package/eslint-plugin-import) ESLint plugin to [`import-x`](https://www.npmjs.com/package/eslint-plugin-import-x) is due to several improvements. `import-x` provides **better TypeScript support**, ensuring more accurate linting for TypeScript projects. It is **actively maintained**, with regular updates and bug fixes, unlike the original plugin. It also has **fewer issues reported on GitHub**, indicating better stability. Additionally, `import-x` offers a **more performant and lightweight version**, reducing linting overhead and improving build performance. These factors make `import-x` a more reliable and efficient choice.

### Why are `plugins` separated from the `config` in this package?

The main reason for separating `plugins` from the config is to avoid a common issue developers face when extending multiple ESLint configurations. Specifically, many run into the error:
`Config "package": Key "plugins": Cannot redefine plugin "key".`
Unfortunately, there's no built-in way to resolve this conflict when plugins are directly included within shared configs.

This package combines multiple ESLint configurations (see [Packages Used](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/eslint-config-airbnb-extended#packages-used)), and based on experience, it's better to keep `plugins` separate. If you'd like to use the recommended plugins, you can import them directly from the `plugins` export provided by the package.

By doing this, you can safely use this package alongside official ESLint configs without running into plugin redefinition issues.
