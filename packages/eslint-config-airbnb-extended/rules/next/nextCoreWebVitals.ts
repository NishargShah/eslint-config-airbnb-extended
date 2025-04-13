import type { Linter } from 'eslint';

const nextCoreWebVitalsRules = {
  name: 'airbnb/config/next/core-web-vitals',
  rules: {
    // Prevent usage of `<a>` elements to navigate to internal Next.js pages.
    '@next/next/no-html-link-for-pages': 'error',

    // Prevent synchronous scripts.
    '@next/next/no-sync-scripts': 'error',
  },
} satisfies Linter.Config;

export default nextCoreWebVitalsRules;
