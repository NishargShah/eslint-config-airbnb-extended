import baseRecommendedConfig from '@/configs/base/recommended';
import reactRecommendedConfig from '@/configs/react/recommended';
import typescriptRecommendedConfig from '@/configs/typescript/recommended';
import nextRules from '@/rules/next';

import type { Linter } from 'eslint';

const base = {
  recommended: baseRecommendedConfig,
  typescript: typescriptRecommendedConfig.base,
  all: [...baseRecommendedConfig, ...typescriptRecommendedConfig.base],
} satisfies Record<string, Linter.Config[]>;

const react = {
  recommended: reactRecommendedConfig,
  typescript: typescriptRecommendedConfig.react,
  all: [...baseRecommendedConfig, ...reactRecommendedConfig, ...typescriptRecommendedConfig.react],
} satisfies Record<string, Linter.Config[]>;

const next = {
  recommended: [...react.recommended, nextRules],
  typescript: react.typescript,
  all: [...react.all, nextRules],
} satisfies Record<string, Linter.Config[]>;

/**
 * as is given due to less size of index.d.ts
 */
const configs = {
  base: base as Record<keyof typeof base, Linter.Config[]>,
  react: react as Record<keyof typeof react, Linter.Config[]>,
  next: next as Record<keyof typeof next, Linter.Config[]>,
  node: base as Record<keyof typeof base, Linter.Config[]>,
};

export default configs;
