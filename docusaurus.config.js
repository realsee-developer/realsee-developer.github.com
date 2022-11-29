// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const DEVELOPER_PLATFORM = "developer";
const env = process.env;
const isDeveloper = env.build_target === DEVELOPER_PLATFORM;

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const VersionsArchived = require("./versionsArchived.json");
const webpackPlugin = require("./docusaurus-plugins/webpack-plugin");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "如视・开发手册",
  url: isDeveloper
    ? "https://open-platform.realsee.com"
    : "https://realsee.js.org",
  baseUrl: isDeveloper ? "/developer/" : "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,
  favicon: "//realsee.com/favicon.ico",
  organizationName: "realsee-developer", // Usually your GitHub org/user name.
  projectName: "realsee-developer.github.com", // Usually your repo name.
  i18n: {
    defaultLocale: "zh-CN",
    // eslint-disable-next-line no-nested-ternary
    locales: ["zh-CN", "en"],
    localeConfigs: {
      "zh-CN": {
        htmlLang: "zh-CN",
      },
      en: {
        htmlLang: "en",
      },
    },
    // locales: ['en', 'zh-CN', 'fr', 'pt-BR', 'ko']
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
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
            "https://github.com/realsee-developer/realsee-developer.github.com",
        },
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "3M8ABTK96K",
        apiKey: "88046e8f423091470680353892de0cde",
        indexName: "realseejs",
        contextualSearch: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // hideableSidebar: true,
      navbar: {
        // title: 'Realsee',
        logo: {
          alt: "如视",
          src: "//vrlab-public.ljcdn.com/common/file/web/ea031fa5-ad82-46b3-86c8-7b20ec1e635a.jpg",
        },
        items: [
          {
            type: "doc",
            label: "三维空间",
            docId: "front/3d-space/intro",
            position: "left",
          },
          {
            type: "doc",
            docId: "front/space-navigation/intro",
            position: "left",
            label: "空间导览",
          },
          {
            type: "doc",
            docId: "front/live/intro",
            position: "left",
            label: "线上带看",
          },
          // {
          //   href: '/examples',
          //   position: 'left',
          //   label: '最佳实践',
          // },
          {
            type: "doc",
            docId: "webview/intro",
            position: "left",
            label: "容器集成",
          },
          {
            type: "doc",
            label: "空间采集",
            docId: "collect/intro",
            position: "left",
          },
          {
            to: "/open/api/",
            position: "left",
            label: "开放 API",
          },
          { to: "/agreement", label: "开发者协议", position: "right" },
          { to: "/blog", label: "博客", position: "right" },
          {
            href: "https://github.com/realsee-developer",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "开发手册",
            items: [
              {
                label: "空间采集",
                to: "/docs/collect/intro",
              },
              {
                label: "三维空间",
                to: "/docs/front/3d-space/intro",
              },
              {
                label: "空间导览",
                to: "/docs/front/space-navigation/intro",
              },
              {
                label: "线上带看",
                to: "/docs/front/live/intro",
              },
              {
                label: "容器集成",
                to: "/docs/webview/intro",
              },
              {
                label: "开放 API",
                to: "/open/api",
              },
            ],
          },
          {
            title: "相关链接",
            items: [
              {
                label: "如视官网",
                to: "https://realsee.com/",
              },
              {
                label: "开放平台开发者协议",
                to: "/agreement",
              },
              // {
              //   label: '技术博客',
              //   to: '/blog',
              // },
              {
                label: "GitHub",
                href: "https://github.com/realsee-developer",
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
          alt: "Realsee open platform Logo",
          src: "//vrlab-public.ljcdn.com/common/file/web/3d1933d3-739a-4c2d-8350-53c0cca6a9e4.png\n",
          href: "https://open-platform.realsee.com/developer/",
          width: 70,
          height: 31,
        },
        copyright: `Copyright © ${new Date().getFullYear()} realsee.com.`,
      },
      prism: {
        // theme: darkCodeTheme,
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "java",
          "groovy",
          "properties",
          "ruby",
          "typescript",
        ],
      },
    }),
  plugins: [webpackPlugin],
};

module.exports = config;
