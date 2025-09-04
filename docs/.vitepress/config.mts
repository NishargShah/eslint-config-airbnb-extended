import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, loadEnv } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

const env = loadEnv('', process.cwd());
const projectRoot = fileURLToPath(new URL('../..', import.meta.url));
const { version } = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));

const githubUrl = 'https://github.com/NishargShah/eslint-config-airbnb-extended';
const npmUrl = 'https://www.npmjs.com/package/eslint-config-airbnb-extended';
const siteUrl = 'https://eslint-airbnb-extended.nishargshah.dev';

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
  sitemap: {
    hostname: siteUrl,
  },
  themeConfig: {
    logo: '/logo.png',
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
            link: `${githubUrl}/releases`,
          },
          {
            text: 'Changelog',
            link: `${githubUrl}/blob/master/CHANGELOG.md`,
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
        link: githubUrl,
      },
      {
        icon: 'npm',
        link: npmUrl,
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-PRESENT <br/> Made with ❤️ by Nisharg Shah',
    },
    editLink: {
      pattern: `${githubUrl}/edit/master/docs/:path`,
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
    search: {
      provider: 'algolia',
      options: {
        appId: env.VITE_ALGOLIA_APP_ID,
        apiKey: env.VITE_ALGOLIA_API_KEY,
        indexName: env.VITE_ALGOLIA_CRAWLER,
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
        content: `${siteUrl}/og-logo.png`,
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
        content: `${siteUrl}/og-logo.png`,
      },
    ],
    [
      'meta',
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
    ],
  ],
});
