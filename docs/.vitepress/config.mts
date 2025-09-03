import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { inject } from '@vercel/analytics';
import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

inject();

const projectRoot = fileURLToPath(new URL('../..', import.meta.url));
const { version } = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ESLint Airbnb Extended',
  description:
    'A powerful ESLint configuration extending the popular Airbnb style guide, with added support for TypeScript.',
  cleanUrls: true,
  lastUpdated: true,
  rewrites: {},
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
  themeConfig: {
    logo: 'logo.png',
    nav: [
      {
        text: 'Guide',
        link: '/',
      },
      {
        text: `v${version}`,
        items: [
          {
            text: `Release Notes`,
            link: 'https://github.com/NishargShah/eslint-config-airbnb-extended/releases',
          },
          {
            text: 'Changelog',
            link: 'https://github.com/NishargShah/eslint-config-airbnb-extended/blob/master/CHANGELOG.md',
          },
          {
            text: `Contributing`,
            link: '/contribute/guide',
          },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          {
            text: 'Getting Started',
            link: '/guide/getting-started',
          },
          {
            text: 'Why',
            link: '/guide/why',
          },
          {
            text: 'Migration',
            link: '/guide/migration',
          },
        ],
      },
      {
        text: 'Config',
        collapsed: false,
        items: [
          {
            text: 'Installation',
            link: '/config/installation',
          },
          {
            text: 'Extended vs Legacy',
            link: '/config/extended-vs-legacy',
          },
          {
            text: 'Legacy Config',
            link: '/config/legacy-config',
          },
          {
            text: 'Packages Used',
            link: '/config/packages-used',
          },
          {
            text: 'FAQ',
            link: '/config/faq',
          },
        ],
      },
      {
        text: 'CLI',
        collapsed: false,
        items: [
          {
            text: 'Guide',
            link: '/cli/guide',
          },
        ],
      },
      {
        text: 'Customization',
        collapsed: false,
        items: [
          {
            text: 'Strict Rules',
            link: '/customization/strict-rules',
          },
        ],
      },
      {
        text: 'Contribute',
        items: [
          {
            text: 'Contributing',
            link: '/contribute/guide',
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/NishargShah/eslint-config-airbnb-extended',
      },
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/package/eslint-config-airbnb-extended',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-PRESENT <br/> Made with ❤️ by Nisharg Shah',
    },
    editLink: {
      pattern:
        'https://github.com/NishargShah/eslint-config-airbnb-extended/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdated: {
      text: 'Last Updated on',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
        hour12: true,
      },
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['meta', { name: 'author', content: 'ESLint Airbnb Extended Team' }],
    ['meta', { property: 'og:title', content: 'ESLint Airbnb Extended' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://eslint-airbnb-extended.nishargshah.dev/og-logo.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'A powerful ESLint configuration extending the popular Airbnb style guide, with added support for TypeScript.',
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://eslint-airbnb-extended.nishargshah.dev/og-logo.png',
      },
    ],
    [
      'meta',
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
    ],
  ],
});
