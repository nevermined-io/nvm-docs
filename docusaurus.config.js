// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nevermined Documentation',
  tagline:
    'Nevermined is an ecosystem development platform. It offers the best of Web3 tech as easy-to-integrate components.',
  url: 'https://docs.nevermined.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  plugins: ['docusaurus-plugin-sass', './src/plugins/http-support'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nevermined-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'G-S70X8HQFLP',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/nevermined-io/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Nevermined blog',
          blogDescription:
            'Here is included the last 10 posts from Nevermined Medium',
          blogSidebarCount: 0,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/nevermined-io/docs/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        style: 'dark',
        title: 'Nevermined Docs',
        logo: {
          alt: 'Nevermined Logo',
          src: 'img/nvm-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/index',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'doc',
            docId: 'architecture/index',
            position: 'left',
            label: 'Architecture',
          },
          {
            type: 'doc',
            docId: 'tutorials/index',
            position: 'left',
            label: 'Tutorials',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/nevermined-io',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/GZju2qScKq',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/index',
              },
              {
                label: 'Architecture',
                to: '/docs/architecture/index',
              },
              {
                label: 'Tutorials',
                to: 'docs/tutorials/index',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/GZju2qScKq',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nevermined_io',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/nevermined-io',
              },
              {
                label: 'Linkedin',
                href: 'https://linkedin.com/company/nevermined',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nevermined-io/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCaDKPgnEk4ekvQo2vO6FIBQ',
              },
              {
                label: 'Email',
                href: 'mailto:info@nevermined.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nevermined AG.`,
      },
      colorMode: {
        disableSwitch: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
