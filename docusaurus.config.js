// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const VersionsArchived = require('./versionsArchived.json')
const webpackPlugin = require('./docusaurus-plugins/webpack-plugin')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '如视・开发手册',
  tagline: '快速集成丰富多彩的三维空间能力，为您的项目添砖加瓦。', // 制作丰富多彩的三维空间应用
  url: 'https://realsee.js.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '//realsee.com/favicon.ico',
  organizationName: 'realsee-developer', // Usually your GitHub org/user name.
  projectName: 'realsee-developer.github.com', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-CN',
    // eslint-disable-next-line no-nested-ternary
    locales: ['zh-CN']
    // locales: ['en', 'zh-CN', 'fr', 'pt-BR', 'ko']
  },

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
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
          // Please change this to your repo.
          // editUrl: 'https://github.com/realsee-developer/realsee-developer.github.com',
          // lastVersion: 'current',
          // versions: {
          //   current: {
          //     label: 'BETA 📖',
          //   },
          // },
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
        // title: 'Realsee',
        logo: {
          alt: '如视',
          src: '//vrlab-public.ljcdn.com/common/file/web/ea031fa5-ad82-46b3-86c8-7b20ec1e635a.jpg',
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
            docId: 'front/live/intro',
            position: 'left',
            label: '线上带看',
          },
          // {
          //   href: '/examples',
          //   position: 'left',
          //   label: '最佳实践',
          // },
          {
            type: 'doc',
            docId: 'webview/intro',
            position: 'left',
            label: '容器集成',
          },
          {
            to: '/open/api/',
            position: 'left',
            label: '开放 API',
          },
          { to: '/blog', label: '博客', position: 'right' },
          {
            href: 'https://github.com/realsee-developer',
            label: 'GitHub',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '开发手册',
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
              {
                label: '容器集成',
                to: '/docs/webview/intro',
              },
              {
                label: '开放 API',
                to: '/open/api',
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
          src: '//vrlab-public.ljcdn.com/common/file/web/3d1933d3-739a-4c2d-8350-53c0cca6a9e4.png\n',
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
        additionalLanguages: ['java', 'groovy', 'properties', 'ruby', 'typescript']
      },
    }),
  plugins: [
    webpackPlugin,
  ]
};

module.exports = config;
