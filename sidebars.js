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

const spaceSidebar = {
  '三维空间': [
    'front/3d-space/intro',
    "front/3d-space/preparation",
    "front/3d-space/get-started/rendering-engine",
    "front/3d-space/get-started/install",

    {
      type: 'category',
      label: '快速实践',
      collapsed: false,
      items: [
        "front/3d-space/get-started/usage/00.3d-space",
        "front/3d-space/get-started/usage/five-state",
        "front/3d-space/get-started/usage/event-hooks",
        "front/3d-space/get-started/usage/conversion-coordinates",
        "front/3d-space/get-started/usage/add-three-mesh",
        "front/3d-space/get-started/usage/collision-detection",
   
      ],
    },
    // "front/3d-space/get-started/typescript-support",
    {
      type: 'category',
      label: '手把手教学',
      collapsed: true,
      items: [
        // "3d-space/usage/no-framework", //folder_name/file_name
        {
          type: 'category',
          label: '无框架模式开发',
          collapsed: true,
          items: [
            "front/3d-space/handbook/no-framework/get-started",
            "front/3d-space/handbook/no-framework/displaying-work",
            "front/3d-space/handbook/no-framework/knowing-state",
            "front/3d-space/handbook/no-framework/recording-state",
            "front/3d-space/handbook/no-framework/points-in-3d",
            "front/3d-space/handbook/no-framework/tagging",
          ]
        },
        {
          type: 'category',
          label: 'React HOC 模式开发',
          collapsed: true,
          items: [
            "front/3d-space/handbook/react-hoc/get-started",
            "front/3d-space/handbook/react-hoc/displaying-work",
            "front/3d-space/handbook/react-hoc/knowing-state",
            "front/3d-space/handbook/react-hoc/recording-state",
            "front/3d-space/handbook/react-hoc/points-in-3d",
            "front/3d-space/handbook/react-hoc/tagging",
          ]
        },
        {
          type: 'category',
          label: 'React Hooks 模式开发',
          collapsed: true,
          items: [
            "front/3d-space/handbook/react-hooks/get-started",
            "front/3d-space/handbook/react-hooks/displaying-work",
            "front/3d-space/handbook/react-hooks/knowing-state",
            "front/3d-space/handbook/react-hooks/recording-state",
            "front/3d-space/handbook/react-hooks/points-in-3d",
            "front/3d-space/handbook/react-hooks/tagging",
          ]
        },
      ],
    },
    {
      type: 'category',
      label: '进阶指南',
      collapsed: true,
      items: [
        "front/3d-space/advanced/dnalogel/ModelViewPlugin",
        {
          type: 'category',
          label: '集成户型图🌟',
          collapsed: true,
          items: [
            "front/3d-space/advanced/dnalogel/floorplan/intro", //folder_name/file_name
            "front/3d-space/advanced/dnalogel/floorplan/desc", //folder_name/file_name
            "front/3d-space/advanced/dnalogel/floorplan/getFloorplanData", //folder_name/file_name
            "front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin", //folder_name/file_name
            "front/3d-space/advanced/dnalogel/floorplan/ModelFloorplanPlugin", //folder_name/file_name
            "front/3d-space/advanced/dnalogel/floorplan/TopviewFloorplanPlugin", //folder_name/file_name
          ]
        },
        "front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin"
      ]
    },
    {
      type: 'category',
      label: '容器集成',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: '客户端',
          collapsed: true,
          items: [
            "front/3d-space/container/app/desc",
            "front/3d-space/container/app/download",
            "front/3d-space/container/app/demo",
            // "front/3d-space/container/app/collection-android",
            "front/3d-space/container/app/show-android",
            // "front/3d-space/container/app/collection-ios",
            "front/3d-space/container/app/show-ios",
          ]
        },
        "front/3d-space/container/wx"
      ]
    },
    // {
    //   type: 'category',
    //   label: '应用示例',
    //   collapsed: true,
    //   items: [
    //     "front/3d-space/examples/vr-house", //folder_name/file_name
    //
    //   ],
    // },
    'front/3d-space/get-started/terminology',
    // {
    //   type: 'category',
    //   label: '常见问题',
    //   collapsed: true,
    //   items: [
    //     "front/3d-space/faq/five-state",
    //     "front/3d-space/faq/work"
    //   ]
    // }
  ]
}

const liveSidebar = {
  '如视带看': [
    'front/live/intro',
    'front/live/env-support',
    'front/live/demo/index',
    {
      type: 'category',
      label: '开发准备',
      collapsed: false,
      items: [
        "front/live/preparation/aksk",
        // "front/live/preparation/account",
        "front/live/preparation/terminology",
        "front/live/preparation/live-controller",
      ]
    },
    {
      type: 'category',
      label: '上手开发',
      collapsed: false,
      items: [
        "front/live/get-started/install",
        "front/live/get-started/live-connect",
        "front/live/get-started/live-exit",
        "front/live/get-started/sync-five-state"
      ]
    },
    {
      type: 'category',
      label: '语音集成',
      collapsed: true,
      items: [
        "front/live/function-expansion/rtc/browser",
        {
          type: 'category',
          label: '客户端语音',
          collapsed: false,
          items: [
            "front/live/function-expansion/rtc/android",
            "front/live/function-expansion/rtc/ios"
          ]
        },
        "front/live/function-expansion/rtc/wx",
      ]
    },
    {
      type: 'category',
      label: '常见问题',
      collapsed: true,
      items: [
        "front/live/faq/ticket",
        "front/live/faq/voice-sign"
      ]
    }
  ]
}

const vreoSidebar = {
  '空间导览': [
    'front/space-navigation/intro',
    {
      type: 'category',
      label: '快速开始',
      collapsed: true,
      items: [
        'front/space-navigation/get-started/install',
        'front/space-navigation/get-started/experience',
        'front/space-navigation/get-started/demo',
      ],
    },
    'front/space-navigation/structure',
    {
      type: 'category',
      label: '剧本关键帧',
      collapsed: true,
      items: [
        'front/space-navigation/keyframes/camera-movement',
        'front/space-navigation/keyframes/prompter',
        'front/space-navigation/keyframes/panotext',
        'front/space-navigation/keyframes/infopanel',
        'front/space-navigation/keyframes/panotag',
        'front/space-navigation/keyframes/panoeffect',
        'front/space-navigation/keyframes/updatevr',
        'front/space-navigation/keyframes/model-video',
        'front/space-navigation/keyframes/video-effect',
      ],
    },
    // {
    //   type: 'category',
    //   label: '高阶指南',
    //   collapsed: true,
    //   items: [
    //     'front/space-navigation/advanced/custom-keyframe-action',
    //     'front/space-navigation/advanced/custom-keyframe',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '应用示例',
    //   collapsed: true,
    //   items: [
    //     'front/space-navigation/examples/midea',
    //   ],
    // },
    {
      type: 'category',
      label: '常见问题',
      collapsed: true,
      items: [
        'front/space-navigation/faq/wechat-browser',
      ],
    },
  ]
}

module.exports = {
  ...spaceSidebar,
  ...liveSidebar,
  ...vreoSidebar
};
