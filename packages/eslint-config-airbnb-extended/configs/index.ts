import baseRecommendedConfig from '@/configs/base/recommended';
import nextRecommendedConfig from '@/configs/next/recommended';
import nodeRecommendedConfig from '@/configs/node/recommended';
import reactRecommendedConfig from '@/configs/react/recommended';
import typescriptRecommendedConfig from '@/configs/typescript/recommended';

import type { Linter } from 'eslint';

const base = {
  recommended: baseRecommendedConfig,
  typescript: typescriptRecommendedConfig.base,
  all: [...baseRecommendedConfig, ...typescriptRecommendedConfig.base],
} satisfies Record<string, Linter.Config[]>;

const react = {
  recommended: reactRecommendedConfig,
  typescript: typescriptRecommendedConfig.react,
  all: [...reactRecommendedConfig, ...typescriptRecommendedConfig.react],
} satisfies Record<string, Linter.Config[]>;

const next = {
  recommended: nextRecommendedConfig,
  typescript: typescriptRecommendedConfig.next,
  all: [...nextRecommendedConfig, ...typescriptRecommendedConfig.next],
} satisfies Record<string, Linter.Config[]>;

const node = {
  recommended: nodeRecommendedConfig,
} satisfies Record<string, Linter.Config[]>;

/**
 * as is given due to less size of index.d.ts
 */
const configs = {
  base: base as Record<keyof typeof base, Linter.Config[]>,
  react: react as Record<keyof typeof react, Linter.Config[]>,
  next: next as Record<keyof typeof next, Linter.Config[]>,
  node: node as Record<keyof typeof node, Linter.Config[]>,
};

export default configs;
