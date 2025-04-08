import base from '@/base';
import baseRecommended from '@/base/recommended';
import nextPlugin from '@/plugins/nextPlugin';
import reactA11yPlugin from '@/plugins/reactA11yPlugin';
import reactHooksPlugin from '@/plugins/reactHooksPlugin';
import reactPlugin from '@/plugins/reactPlugin';
import typescriptEslintPlugin from '@/plugins/typescriptEslintPlugin';
import react from '@/react';
import reactRecommended from '@/react/recommended';
import importsStrict from '@/rules/importsStrict';
import next from '@/rules/next';
import typescript from '@/typescript';
import typescriptRecommended from '@/typescript/recommended';

import type { Linter } from 'eslint';

export const rules = {
  base: {
    ...base,
    importsStrict,
  },
  react,
  next,
  typescript,
};

export const configs = {
  base: {
    recommended: baseRecommended,
    typescript: typescriptRecommended.base,
    all: [...baseRecommended, ...typescriptRecommended.base],
  },
  react: {
    recommended: reactRecommended,
    typescript: typescriptRecommended.react,
    all: [...reactRecommended, ...typescriptRecommended.react],
  },
  next: {
    recommended: [...reactRecommended, next],
    typescript: typescriptRecommended.react,
    all: [...reactRecommended, ...typescriptRecommended.react, next],
  },
  node: {
    recommended: baseRecommended,
    typescript: typescriptRecommended.base,
    all: [...baseRecommended, ...typescriptRecommended.base],
  },
} satisfies Record<string, Record<string, Linter.Config[]>>;

export const plugins = {
  next: nextPlugin,
  react: reactPlugin,
  reactA11y: reactA11yPlugin,
  reactHooks: reactHooksPlugin,
  typescriptEslint: typescriptEslintPlugin,
} satisfies Record<string, Linter.Config>;
