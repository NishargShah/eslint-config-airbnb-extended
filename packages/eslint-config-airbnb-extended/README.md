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

You can choose whether to **install** or **not install** based on your needs.

- If you choose **installation**, the package will automatically detect your project's package manager and install all the required dependencies.
- If you choose **no installation**, you’ll get the necessary commands to install the dependencies manually.

After completing the steps, you’ll get a **GitHub URL** for the configuration template. Go to the URL, copy the content, and paste it into your `eslint.config.mjs` file. The template provided will depend on your earlier choices.

### Manual Installation (Not Recommended)

While **manual installation** is possible, we strongly recommend using `create-airbnb-x-config` for automatic updates and ease of use.

The configuration may change over time, and `create-airbnb-x-config` will always stay up-to-date with the latest versions. If you're confident in handling manual installations, refer to the [Packages Used](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/eslint-config-airbnb-extended#packages-used) section for more information on the individual packages.

## Packages Used

This configuration relies on the following essential packages:

- **`eslint-import-x`**: A powerful tool for managing and validating imports.
- **`eslint-plugin-react`**: Enforces React-specific linting rules and best practices.
- **`eslint-plugin-react-hooks`**: Ensures proper use of React hooks.
- **`eslint-plugin-jsx-a11y`**: Improves accessibility in JSX code.
- **`typescript-eslint`**: Provides linting support for TypeScript codebases.
- **`eslint-import-resolver-typescript`**: Ensures TypeScript compatibility for import statements.

## FAQs

### How to Configure for a Monorepo?

If you're working in a monorepo setup, it's recommended to run the installation command in the specific sub-folder where you want the configuration. Alternatively, you can choose to skip the package installation, and we'll provide a customized set of commands based on your selection, allowing you to install it according to your preferred method.

### Why did we switch from `import` to `import-x`?

The switch from the `import` ESLint plugin to `import-x` is due to several improvements. `import-x` provides **better TypeScript support**, ensuring more accurate linting for TypeScript projects. It is **actively maintained**, with regular updates and bug fixes, unlike the original plugin. It also has **fewer issues reported on GitHub**, indicating better stability. Additionally, `import-x` offers a **more performant and lightweight version**, reducing linting overhead and improving build performance. These factors make `import-x` a more reliable and efficient choice.
