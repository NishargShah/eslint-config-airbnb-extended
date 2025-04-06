import base from '@/base';
import baseRecommended from '@/base/recommended';
import react from '@/react';
import reactRecommended from '@/react/recommended';
import typescript from '@/typescript';
import typescriptRecommended from '@/typescript/recommended';
import importsStrict from '@/rules/importsStrict';
import next from '@/rules/next';
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
    'typescript-only': typescriptRecommended.base,
    typescript: [...baseRecommended, ...typescriptRecommended.base],
  },
  react: {
    recommended: reactRecommended,
    'typescript-only': typescriptRecommended.react,
    typescript: [...reactRecommended, ...typescriptRecommended.react],
  },
  next: {
    recommended: [...reactRecommended, next],
    'typescript-only': typescriptRecommended.react,
    typescript: [...reactRecommended, ...typescriptRecommended.react, next],
  },
} satisfies Record<string, Record<string, Linter.Config[]>>;
