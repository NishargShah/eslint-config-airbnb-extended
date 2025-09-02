import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

const projectRoot = fileURLToPath(new URL('../..', import.meta.url));
const { version } = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf-8'));

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
    // https://vitepress.dev/reference/default-theme-config
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
});
