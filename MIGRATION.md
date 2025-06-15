# Migration Guide

Follow these simple steps to migrate to the new ESLint setup using `eslint-config-airbnb-extended`.

---

### 1. Uninstall Old Packages

Remove the following packages from your `package.json`:

- `eslint-config-airbnb-base`
- `eslint-config-airbnb`
- `eslint-config-airbnb-typescript`

You won’t need them anymore.

---

### 2. Migrate to Flat Config

Switch your ESLint setup to use the new **Flat Config** format.  
Need help with that? Check out this helpful [migration guide](https://eslint.org/docs/latest/use/configure/migration-guide) from the ESLint team.

---

### 3. Install `eslint-config-airbnb-extended`

Follow the [official installation steps](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/eslint-config-airbnb-extended#installation) to add the new config to your project.

---

### 4. Add ESLint Config File

If you choose to not generate `eslint.config.mjs` file for you then copy the config file generated at the end of the `installation steps` from the GitHub repo.

- If you **don’t have** an `eslint.config.mjs` file yet, simply add it to your project root and **paste** the config you received from the installation steps.
- If you **already have** an `eslint.config.mjs` file, insert the new configs **at the beginning** of your config array. This ensures you can still override any rules later if needed.

---

### 5. Update `import` Rules (if extended config)

If you’ve added any custom rules that start with `import/*`, you’ll need to rename them to `import-x/*`.  
Why this change? The explanation is [here](https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/eslint-config-airbnb-extended#why-did-we-switch-from-import-to-import-x).

---

### All Done!

That’s it! Your project is now using the new and improved ESLint setup.
