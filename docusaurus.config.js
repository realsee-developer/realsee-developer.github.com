// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RealSee Development Manual',
  tagline: '如视 Web 开发必读手册，快速了解如视前端开发工具链。',
  url: 'https://realsee.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '//realsee.com/favicon.ico',
  organizationName: 'realsee-developer', // Usually your GitHub org/user name.
  projectName: 'RealSee', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/realsee-developer/realsee-developer.github.com',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/realsee-developer/realsee-developer.github.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        title: '@realsee',
        logo: {
          alt: '如视・如你所视',
          src: '//vrlab-static.ljcdn.com/release/web/460x0w.6905c652.png',
        },
        items: [
          {
            type: 'doc',
            label: '三维空间',
            docId: 'front/3d-space/intro',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'front/space-navigation/intro',
            position: 'left',
            label: '空间导览',
          },
          {
            type: 'doc',
            docId: 'front/live/getting-started',
            position: 'left',
            label: '线上带看',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/realsee-developer',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档中心',
            items: [
              {
                label: '三维空间',
                to: '/docs/front/3d-space/intro',
              },
              {
                label: '空间导览',
                to: '/docs/front/space-navigation/intro',
              },
              {
                label: '线上带看',
                to: '/docs/front/live/getting-started',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     // {
          //     //   label: 'Stack Overflow',
          //     //   href: 'https://stackoverflow.com/questions/tagged/r',
          //     // },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: '如视官网',
                to: 'https://realsee.com/',
              },
              {
                label: '技术博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/realsee-developer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} realsee.com.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
