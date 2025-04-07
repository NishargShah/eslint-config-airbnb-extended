# `eslint-config-airbnb-extended`

[![GitHub package.json version](https://img.shields.io/github/package-json/v/NishargShah/eslint-config-airbnb-extended?label=github%20version)](https://github.com/NishargShah/eslint-config-airbnb-extended)
[![GitHub License](https://img.shields.io/github/license/NishargShah/eslint-config-airbnb-extended)](https://github.com/NishargShah/eslint-config-airbnb-extended/blob/master/LICENSE.txt)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/NishargShah/eslint-config-airbnb-extended/pulls)

> [!NOTE]
> This package is designed exclusively for **flat configuration**. Legacy `.eslintrc*` files are not supported. For that, please use older packages. For more details, refer to the [Note](https://github.com/NishargShah/eslint-config-airbnb-extended?tab=readme-ov-file#note).

---

A powerful ESLint configuration extending the popular Airbnb style guide, with added support for TypeScript. This monorepo houses two main packages:

- **`eslint-config-airbnb-extended`**: Extends Airbnb's ESLint config to support TypeScript and custom rules.
- **`create-airbnb-x-config`**: A CLI tool to quickly set up and customize your ESLint configuration with the Airbnb Extended setup.

## Features

- **Airbnb Base Configuration**: Built on top of Airbnb's highly opinionated ESLint config.
- **TypeScript Support**: Out-of-the-box TypeScript support for all your code.
- **Customizable**: Easily extend or modify settings to match your project's coding style.
- **Pre-configured Rules**: Ready-to-go rules that enforce consistent coding practices.
- **Monorepo Structure**: Includes both the core ESLint configuration and a CLI utility for quick setup.

## Packages

### `eslint-config-airbnb-extended`

[![NPM Version](https://img.shields.io/npm/v/eslint-config-airbnb-extended)](https://www.npmjs.com/package/eslint-config-airbnb-extended)
[![NPM Downloads](https://img.shields.io/npm/dw/eslint-config-airbnb-extended)](https://www.npmjs.com/package/eslint-config-airbnb-extended)
[![NPM Last Update](https://img.shields.io/npm/last-update/eslint-config-airbnb-extended)](https://www.npmjs.com/package/eslint-config-airbnb-extended)

This package extends the official Airbnb ESLint configuration to fully support TypeScript, allowing you to enforce consistent coding standards across both JavaScript and TypeScript files.

For detailed installation and configuration instructions, please check the [README.md](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/eslint-config-airbnb-extended#eslint-config-airbnb-extended).

### `create-airbnb-x-config`

[![NPM Version](https://img.shields.io/npm/v/create-airbnb-x-config)](https://www.npmjs.com/package/create-airbnb-x-config)
[![NPM Downloads](https://img.shields.io/npm/dw/create-airbnb-x-config)](https://www.npmjs.com/package/create-airbnb-x-config)
[![NPM Last Update](https://img.shields.io/npm/last-update/create-airbnb-x-config)](https://www.npmjs.com/package/create-airbnb-x-config)

`create-airbnb-x-config` is a setup tool that allows you to quickly create an ESLint configuration tailored to your project with a few simple commands. It automates the setup of the `eslint-config-airbnb-extended` configuration package and ensuring that your ESLint rules are applied correctly across JavaScript and TypeScript code.

For further details on how to use the tool, please check the [README.md](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/create-airbnb-x-config#create-airbnb-x-config).

## Note

This package was created by taking reference from the following ESLint configuration packages:

- `eslint-config-airbnb-base`
- `eslint-config-airbnb`
- `eslint-config-airbnb-typescript`

These packages are no longer maintained. To ensure continued compatibility and keep up-to-date with the latest versions of dependencies, I have updated the dependencies and extended their functionality, resulting in the creation of the `eslint-config-airbnb-extended` package, which is actively maintained and fully supports TypeScript.

## Community & Support

Feel free to open issues, contribute to the repository, or simply discuss ideas via GitHub discussions or the Issues tab. Pull requests are welcome to improve and extend the configuration.

## Changelog

For detailed information on all the changes made to the package, please refer to the [CHANGELOG.md](https://github.com/NishargShah/eslint-config-airbnb-extended/blob/master/CHANGELOG.md).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/mit-license.php).
