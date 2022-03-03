// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const VersionsArchived = require('./versionsArchived.json')

const ArchivedVersionsDropdownItems = Object.entries(VersionsArchived).splice(
    0,
    5,
);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Realsee JavaScript Manual',
  tagline: '如视开发者中心前端技术手册',
  url: 'https://realsee.js.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '//realsee.com/favicon.ico',
  organizationName: 'realsee-developer', // Usually your GitHub org/user name.
  projectName: 'realsee-developer.github.com', // Usually your repo name.
  // i18n: {
  //   defaultLocale: 'zh-CN',
  //   // eslint-disable-next-line no-nested-ternary
  //   locales: ['zh-CN']
  //   // locales: ['en', 'zh-CN', 'fr', 'pt-BR', 'ko']
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
          // Please change this to your repo.
          editUrl: 'https://github.com/realsee-developer/realsee-developer.github.com',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'BETA 📖',
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/realsee-developer/realsee-developer.github.com',
        },
        pages: {
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
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
      // TODO 需要申请我们自己的 ID 和 Key
      // algolia: {
      //   appId: 'X1Z85QJPUV',
      //   apiKey: 'bf7211c161e8205da2f933a02534105a',
      //   indexName: 'docusaurus-2',
      //   contextualSearch: true,
      // },
      hideableSidebar: true,
      navbar: {
        // title: '@realsee',
        logo: {
          alt: '如视・如你所视',
          src: '//vrlab-public.ljcdn.com/common/file/web/964553a2-142f-4514-a8d1-301bf1640764.png\n',
        },
        items: [
          {
            type: 'doc',
            label: '三维空间',
            docId: 'front/3d-space/intro',
            position: 'left',
          },
          // {
          //   type: 'doc',
          //   docId: 'front/space-navigation/intro',
          //   position: 'left',
          //   label: '空间导览',
          // },
          {
            type: 'doc',
            docId: 'front/live/intro',
            position: 'left',
            label: '线上带看',
          },
          // { to: '/blog', label: '博客', position: 'right' },
          // {
          //   href: '/examples',
          //   position: 'left',
          //   label: '最佳实践',
          // },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            // dropdownItemsAfter: [
            //   ...ArchivedVersionsDropdownItems.map(
            //       ([versionName, versionUrl]) => ({
            //         label: versionName,
            //         href: versionUrl,
            //       }),
            //   ),
              // {
              //   href: 'https://v0.0.0-beta.1.realsee.js.org',
              //   label: 'beta',
              // },
              // {
              //   to: '/versions',
              //   label: 'All versions',
              // },
            // ],
          },
          {
            href: 'https://github.com/realsee-developer',
            label: 'GitHub',
            position: 'right'
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right'
          // }
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
              // {
              //   label: '空间导览',
              //   to: '/docs/front/space-navigation/intro',
              // },
              {
                label: '线上带看',
                to: '/docs/front/live/intro',
              },
            ],
          },
          {
            title: '相关链接',
            items: [
              {
                label: '如视官网',
                to: 'https://realsee.com/',
              },
              // {
              //   label: '技术博客',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/realsee-developer',
              },
            ],
          },
          // {
          //   title: '条款',
          //   // Please do not remove the privacy and terms, it's a legal requirement.
          //   items: [
          //     {
          //       label: '隐私政策',
          //       to: '/docs/legal/privacy_v1.0.0',
          //     }
          //   ],
          // },
        ],
        logo: {
          alt: 'Realsee open platform Logo',
          src: '/img/logo.png',
          href: 'https://realsee.js.org',
          width: 70,
          height: 31,
        },
        copyright: `Copyright © ${new Date().getFullYear()} realsee.com.`,
      },
      prism: {
        // theme: darkCodeTheme,
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'groovy', 'properties', 'ruby']
      },
    }),
  
};

module.exports = config;
