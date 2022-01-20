/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  '三维空间': [
    '3d-space/intro',

    {
      type: 'category',
      label: '开始上手',
      collapsed: false,
      items: [
        "3d-space/getting-started/install", //folder_name/file_name
        "3d-space/getting-started/configure",
        "3d-space/getting-started/experience",
        '3d-space/getting-started/terminology',
        "3d-space/getting-started/playground",
        "3d-space/getting-started/typescript-support",
      ],
    },
    {
      type: 'category',
      label: '开发指南',
      collapsed: false,
      items: [
        // "3d-space/usage/no-framework", //folder_name/file_name
        {
          type: 'category',
          label: '无框架使用',
          collapsed: true,
          items: [
            "3d-space/usage/no-framework/getting-started",
            "3d-space/usage/no-framework/displaying-work",
            "3d-space/usage/no-framework/knowing-state",
            "3d-space/usage/no-framework/recording-state",
            "3d-space/usage/no-framework/points-in-3d",
            "3d-space/usage/no-framework/tagging",
          ]
        },
        {
          type: 'category',
          label: 'React HOC 模式开发',
          collapsed: true,
          items: [
            "3d-space/usage/react-hoc/getting-started",
            "3d-space/usage/react-hoc/displaying-work",
            "3d-space/usage/react-hoc/knowing-state",
            "3d-space/usage/react-hoc/recording-state",
            "3d-space/usage/react-hoc/points-in-3d",
            "3d-space/usage/react-hoc/tagging",
          ]
        },
        {
          type: 'category',
          label: 'React Hooks 模式开发',
          collapsed: true,
          items: [
            "3d-space/usage/react-hooks/getting-started",
            "3d-space/usage/react-hooks/displaying-work",
            "3d-space/usage/react-hooks/knowing-state",
            "3d-space/usage/react-hooks/recording-state",
            "3d-space/usage/react-hooks/points-in-3d",
            "3d-space/usage/react-hooks/tagging",
          ]
        },
      ],
    },
    {
      type: 'category',
      label: '进阶指南',
      collapsed: true,
      items: [
        "3d-space/advanced/dnalogel/PanoFloorplanRadarPlugin", //folder_name/file_name
      ],
    },
    {
      type: 'category',
      label: '应用示例',
      collapsed: true,
      items: [
        "3d-space/examples/vr-house", //folder_name/file_name

      ],
    }
  ],
  '空间导览': [
    'space-navigation/intro',
    {
      type: 'category',
      label: '快速开始',
      collapsed: false,
      items: [
        'space-navigation/getting-started/install',
        'space-navigation/getting-started/experience',
        'space-navigation/getting-started/react-support',
      ],
    },
    'space-navigation/structure',
    {
      type: 'category',
      label: '剧本关键帧',
      collapsed: false,
      items: [
        'space-navigation/keyframes/camera-movement',
        'space-navigation/keyframes/prompter',
      ],
    },
    {
      type: 'category',
      label: '高阶指南',
      collapsed: false,
      items: [
        'space-navigation/advanced/custom-keyframe-action',
        'space-navigation/advanced/custom-keyframe',
      ],
    },
    {
      type: 'category',
      label: '应用示例',
      collapsed: false,
      items: [
        'space-navigation/examples/midea',
      ],
    },
    {
      type: 'category',
      label: '答疑解惑',
      collapsed: false,
      items: [
        'space-navigation/faq/wechat-browser',
      ],
    },
  ]
};
