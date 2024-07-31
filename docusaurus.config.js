// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Singularité',
  tagline: 'Guide de jeu',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'singularite', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Singularité',
        logo: {
          alt: 'Singularité logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'preambule/reglement',
            sidebarid: 'preambuleSidebar',
            position: 'left',
            label: 'Préambule',
          },
          {
            type: 'doc',
            docId: 'administratif/listings/faceclaim',
            sidebarid: 'administratifSidebar',
            position: 'left',
            label: 'Administratif',
          },
          {
            type: 'doc',
            docId: 'univers/contexte',
            sidebarid: 'universSidebar',
            position: 'left',
            label: 'Univers',
          },
          {
            type: 'doc',
            docId: 'mecaniques/humeurs',
            sidebarid: 'mecaniquesSidebar',
            position: 'left',
            label: 'Mécaniques',
          },
          {
            type: 'doc',
            docId: 'intrigues/chronologie',
            sidebarid: 'intriguesSidebar',
            position: 'left',
            label: 'Intrigues',
          },
          {
            href: 'https://singularite.forumactif.com/',
            label: 'Retourner au forum',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Singularité',
            items: [
              {
                label: 'Forum',
                href: '/',
              },
              {
                label: 'Discord',
                href: '/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Singularité`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      scripts: [
        {
          src: './src/scripts/custom.js',
          async: true,
        },
      ],
    }),
};

export default config;
