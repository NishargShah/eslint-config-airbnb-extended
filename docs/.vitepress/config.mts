import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ESLint Airbnb Extended',
  description:
    'A powerful ESLint configuration extending the popular Airbnb style guide, with added support for TypeScript.',
  cleanUrls: true,
  rewrites: {},
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Guide',
        link: '/',
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
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
            text: 'Installation',
            link: '/cli/installation',
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
  },
});
