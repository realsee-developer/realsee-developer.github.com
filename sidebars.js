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
        "front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin",
        "front/3d-space/advanced/dnalogel/PanoRulerPlugin"
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
    {
      type: 'link',
      label: 'Five API 文档',
      href: 'https://unpkg.com/@realsee/five/docs/index.html'
    }
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
    },
    {
      type: 'link',
      label: 'Live API 文档',
      href: 'https://unpkg.com/@realsee/live/docs/index.html'
    }
  ]
}

const vreoSidebar = {
  '空间导览': [
    'front/space-navigation/intro',
    {
      type: 'category',
      label: '快速开始',
      collapsed: false,
      items: [
        'front/space-navigation/get-started/install',
        'front/space-navigation/get-started/quick_start',
        'front/space-navigation/get-started/demo',
        'front/space-navigation/get-started/react-support',
      ],
    },
    'front/space-navigation/structure',
    {
      type: 'category',
      label: '剧本关键帧',
      collapsed: false,
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
    {
      type: 'category',
      label: '进阶指南',
      collapsed: true,
      items: [
        'front/space-navigation/advanced/custom-keyframe-action',
        'front/space-navigation/advanced/custom-keyframe',
      ],
    },
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
        'front/space-navigation/faq/performance-boost',
        'front/space-navigation/faq/wechat-browser',
      ],
    },
    {
      type: 'link',
      label: 'Vreo API 文档',
      href: 'https://realsee.js.org/vreo/index.html'
    }
  ]
}

const webviewSidebar = {
  '容器集成': [
    'webview/intro',
    {
      type: 'category',
      label: '客户端容器',
      collapsed: false,
      items: [
        "webview/app/iOS",
        "webview/app/Android",
        // "webview/app/download",
        // "webview/app/demo",
        // "webview/app/show-android",
        // "webview/app/show-ios",
      ]
    },
    {
      type: 'category',
      label: '小程序容器',
      collapsed: false,
      items: [
        "webview/miniProgram/wechat"
      ]
    },
    {
      type: 'category',
      label: '"桥" 协议',
      collapsed: false,
      items: [
        "webview/jsbridge/intro",
        "webview/jsbridge/built-in",
        "webview/jsbridge/event",
        "webview/jsbridge/custom",
        "webview/jsbridge/react-support",
        "webview/jsbridge/browser-jsbridge",
        {
          type: 'link',
          label: 'jsBridge API 文档',
          href: 'https://unpkg.com/@realsee/jsbridge-x/docs/index.html'
        }
      ]
    },
  ]
}

const openAPISidebar = {
  "如视 API": [
    "end/api/intro",
    "end/api/quick_start",
    "end/api/terminology",
    "end/api/error_handling",
    {
      type: 'category',
      label: '鉴权',
      collapsed: false,
      items: [
        "end/api/auth/why",
        "end/api/auth/access_token",
      ]
    },
    {
      type: 'category',
      label: '核心实体',
      collapsed: true,
      items: [
        "end/api/core/list_data",
        "end/api/core/base_data",
      ]
    },
    {
      type: 'category',
      label: '扩展实体',
      collapsed: true,
      items: [
        "end/api/expand/floorplan",
        "end/api/expand/rooms",
        "end/api/expand/tags",
      ]
    },
    {
      type: 'category',
      label: '直播服务',
      collapsed: true,
      items: [
        "end/api/live/what",
        "end/api/live/error_handling",
        "end/api/live/create",
        "end/api/live/join",
        "end/api/live/signature",
        "end/api/live/detail",
      ]
    },
    {
      type: 'category',
      label: '转存服务',
      collapsed: true,
      items: [
        "end/api/dump/downloadlink",
        "end/api/dump/signature",
      ]
    },
  ]
}

module.exports = {
  ...spaceSidebar,
  ...liveSidebar,
  ...vreoSidebar,
  ...webviewSidebar,
  ...openAPISidebar,
};
