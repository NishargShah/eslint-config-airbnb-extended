# Legacy Config {#legacy-config}

**Legacy configuration** in `eslint-config-airbnb-extended` is designed for teams who want a **One-To-One/Drop-In Replacement** for the original Airbnb ESLint configs without having to stick with old `.eslintrc` files.

Instead of reinventing the rules, this mode focuses on **parity and smooth migration**. That means if your team was already using `eslint-config-airbnb`, `eslint-config-airbnb-base`, or `eslint-config-airbnb-typescript`, you can switch to `eslint-config-airbnb-extended/legacy` with **minimal diffs** while still being ready for ESLint 9 and Flat Config.

## Usage Examples {#examples}

The `legacy` entrypoint exports configs that map directly to the Airbnb family. Here’s how to use them:

### 1. For [`eslint-config-airbnb-base`](https://www.npmjs.com/package/eslint-config-airbnb-base) {#for-eslint-config-airbnb-base}

::: code-group

```ts [eslint.config.mjs]
import { configs } from 'eslint-config-airbnb-extended/legacy';

// Equivalent to airbnb-base/legacy
export default [...configs.base.legacy];

// Equivalent to airbnb-base
export default [...configs.base.recommended];
```

:::

Use this if you want **only JavaScript base rules** without React or TypeScript.

### 2. For [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) {#for-eslint-config-airbnb}

::: code-group

```ts [eslint.config.mjs]
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

:::

Use this when working with **React**. It provides a one-to-one mapping with all the standard Airbnb React presets, including `hooks`.

### 3. For [`eslint-config-airbnb-typescript`](https://www.npmjs.com/package/eslint-config-airbnb-typescript) {#for-eslint-config-airbnb-typescript}

::: code-group

```ts [eslint.config.mjs]
import { configs } from 'eslint-config-airbnb-extended/legacy';

// Equivalent to airbnb-typescript/base
export default [...configs.base.typescript];

// Equivalent to airbnb-typescript
export default [...configs.react.typescript];
```

:::

Use this if you’re on **TypeScript** and want the Airbnb TypeScript rules, but in **Flat Config format** without breaking compatibility.

## Why Legacy Config Exists {#why-legacy-config-exists}

- ✅ **1:1 replacements** → drop-in equivalents of Airbnb configs.
- ✅ **Flat Config ready** → works with ESLint 9 and beyond.
- ✅ **Migration path** → lets you start simple, then move to `extended` or `strict` configs later.
- ✅ **Less churn** → developers see fewer rule changes when upgrading.

If you’re upgrading a project that **already relies on Airbnb configs**, start with **Legacy Config** to make the transition safe and low-friction. Once you’re stable, you can move on to **Extended** (modernized rules) or even **Strict Mode** for maximum consistency.
