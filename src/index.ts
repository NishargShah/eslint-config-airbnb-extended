import base from '@/base';
import baseRecommended from '@/base/recommended';
import react from '@/react';
import reactRecommended from '@/react/recommended';
import typescript from '@/typescript';
import typescriptRecommended from '@/typescript/recommended';

export const rules = {
  react,
  base,
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
};
