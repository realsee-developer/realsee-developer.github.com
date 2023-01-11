---
title: 微信小程序
---

:::tip 提示
本文档面向 **微信小程序开发人员**，后面的描述中我们假设您已经具备前端、微信小程序等开发经历并已安装微信小程序等相关开发环境。
:::

## 环境要求

### 终端要求

- 微信 App iOS 最低版本要求：7.0.9。
- 微信 App Android 最低版本要求：7.0.8。
- 暂未对微信 PC 端（windows/macOS）小程序做适配。
- 小程序基础库最低版本要求：2.10.0。

### 带看功能限定要求（未接入带看可忽略）

:::warning 警告
若使用带看能力，在开发测试时请务必满足以下所有要求
:::

- 带看功能仅支持**微信小程序**。
- 由于小程序测试号不具备 `<live-pusher>` 和 `<live-player>` 的使用权限，需要申请常规小程序账号进行开发。
- 由于微信开发者工具不支持原生组件（即 `<live-pusher>` 和 `<live-player>` 标签），需要在**真机**上进行运行体验。
- 小程序推拉流标签不支持个人小程序，只支持企业类小程序。
- 小程序推拉流使用权限暂时只开放给有限[类目](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html)。
- 符合类目要求的小程序，需要在 **【微信公众平台】**>**【开发】**>**【开发管理】**>**【接口设置】**中自助开通**实时播放音视频流**与**实时录制音视频流**两项权限，如下图所示：

  ![check](https://vrlab-static.ljcdn.com/release/web/wx/check.5d997a77.png)

## 开发准备

### 申请 SDK 接入密钥

:::caution
请向开发者中心申请接入密钥，包含 `app_id` 和 `app_secret`。
:::

### 添加小程序合法域名白名单

- **Request 合法域名**: `https://cloud.tencent.com;https://yun.tim.qq.com;https://app-gateway.realsee.com;`。

- **WebSocket 合法域名**: `wss://ws.realsee.com;`。

### SDK 下载

通过 [SDK 资源](https://github.com/realsee-developer/wechat-miniprogram-quickstart/releases/download/v0.1.1/realsee-vrwebview.0.1.1.tar.gz) 下载 `realsee-vrwebview.0.1.1.tar.gz` 文件，解压后在后续开发中使用。

### SDK 使用

``vrwebview-miniprogram`` 以微信小程序原生自定义组件的方式提供能力接入，理论上只要支持微信小程序的自定义组件的开发框架均可进行开发接入，目前经测试已接入的框架有：

- [微信小程序原生开发](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [Taro 3](https://taro.jd.com/)
- [uni-app](https://uniapp.dcloud.io/)
- [mpvue](http://mpvue.com/)

:::tip 提示
以下使用方法中的代码变量`$PROJECT`标识开发框架的根目录。
:::

#### 微信小程序原生开发使用

1. 将`realsee-vrwebview.0.1.1.tar.gz`解压至`$PROJECT/lib/vrwebview`目录下，目录结构大致如下：

```bash
-$PROJECT
  -pages
    -vr
      -index.js
      -index.json
      -index.wxml
      -index.wxss
  -lib
    -vrwebview
      -index.js
      -index.json
      -index.wxml
      -utils.js
      -TERMS.txt
```

2. 假设你要引入组件的页面目录路径是`$PROJECT/pages/vr`，那么需修改该页面目录的里的配置 json 文件。如下：

```json
{
  "usingComponents": {
    "vr-webview": "$PROJECT/lib/vrwebview"
  }
}
```

3. 在页面目录的模板 wxml 文件加入组件节点。如下：

```html
<vr-webview
  wx:if="{{rsVrProps}}"
  props="{{rsVrProps}}"
>
</vr-webview>
```

4. 在页面 js 文件进行 SDK 的初始化。示例如下：

```javascript
const { rsVrWebviewPropsWrapper } = require("$PROJECT/lib/vrwebview/utils");
Page({
  data: {
    rsVrProps: null,
  },
  onReady() {
    this.initVr();
  },
  initVr() {
    const url = "vr链接";
    const options = {
      app: {
        key: "touristAppKey", // 如视开放平台的appKey
        secret: "touristAppSecret", // 如视开放平台AppSecret
      }
    }

    // 注⼊⾃定义scheme，这⾥是与h5约定的使⽤jsbridge-x进⾏通信的⽅法
    const schemes = {
      customFunction: (callback, type, params) => {
        // ⾃定义⽅法，h5会通过jsbridge-x的 callAndBackfeed 或 callAndListen 的⽅式进⾏调⽤（具体调⽤⽅式由两者协商确定）
        // callAndBackfeed 是⼀次订阅流，可当⼀次函数调⽤，将结构通过callback回调给h5
        // callAndListen 是多次订阅流，与事件订阅类似，把callback注册到某事件的回调⾥，并且在⻚⾯关闭后解除注册
        // 例如：wx.onError(callback) // 持续向h5上报wx的报错
        // 解除：wx.offError(callback)
      },
    }

    // 注⼊VRWebview组件所需的⾏为
    const behaviors = {
      // 进⾏登录
      requestLogin: async () => {
        // 需返回的数据结构
        return {
          userName: "⽤户名",
          userId: "⽤户ID",
          token: "⽤户令牌",
          avatar: "⽤户头像",
        };
      },
      // 获取⽤户信息
      getUserInfo: async () => {
        // 需返回的数据结构
        return {
          userName: "⽤户名",
          userId: "⽤户ID",
          token: "⽤户令牌",
          avatar: "⽤户头像",
        };
      },
      // 进⾏分享
      actionShare: async (params) => {
        // h5中会有分享功能，params是相应的分享配置（由h5与⼩程序之间进⾏协商）
        // 因为⼩程序在webview下⽆法直接调起分享，这⾥的最佳实践是获取params的数据后对⻚⾯的shareConfig数据进⾏缓存，在分享相关的钩⼦函数⾥将缓存的数据返给wx
      },
      // 当VR退出时, _params是与h5协商的退出消息结构
      onExitVr: async (_params) => {
        console.log("onExitVr", _params);
      },
      // 当webview发⽣错误时进⾏处理
      onWebViewError: (e) => {
        console.error("onWebViewError", e);
      },
      // 组件报错时的回调
      onError: (e) => {
        console.error("onError", e);
      },
      // 获取⽤户的token，因为h5使⽤token时可能会因token超时失效，该⽅法要求返回最新的有效token
      getToken: async () => {
        // return 'abc'
      },
    }

    // 把声明好的变量塞给组件
    const rsVrProps = rsVrWebviewPropsWrapper({ 
        url,
        options,
        schemes,
        behaviors
    });

    this.setData({
      rsVrProps
    });
  },
});
```

#### Taro 3 框架接入

1. 将`realsee-vrwebview.0.1.1.tar.gz`解压至`$PROJECT/wxcomponents/vrwebview`目录下，目录结构大致如下：

```bash
-$PROJECT
  -src
    -pages
      -vr
        -index.tsx
        -index.config.js
    -lib
      -vrwebview
        -index.js
        -index.json
        -index.wxml
        -utils.js
        -TERMS.txt
```

2. 假设你要引入组件的页面目录路径是`$PROJECT/src/pages/vr`，那么需修改该页面目录的里的配置 .config.js 文件。如下：

```javascript
export default {
  usingComponents: {
    // 定义需要引入的第三方组件
    // 1. key 值指定第三方组件名字，以小写开头
    // 2. value 值指定第三方组件 js 文件的相对路径
    "vr-webview": "../../wxcomponents/vrwebview/index",
  },
};
```

3. 在页面`index.tsx`中使用组件，如下所示：

```javascript
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { rsVrWebviewPropsWrapper } from "$PROJECT/lib/vrwebview/utils"

export default class Index extends Component {
  this.state = {
    rsVrProps: '',
  }

  onReady () {
    this.initVr()
  }

  initVr() {
    const url = "vr链接";
    const options = {
      app: {
        key: "touristAppKey", // 如视开放平台的appKey
        secret: "touristAppSecret", // 如视开放平台AppSecret
      }
    }

    // 注⼊⾃定义scheme，这⾥是与h5约定的使⽤jsbridge-x进⾏通信的⽅法
    const schemes = {
      customFunction: (callback, type, params) => {
        // ⾃定义⽅法，h5会通过jsbridge-x的 callAndBackfeed 或 callAndListen 的⽅式进⾏调⽤（具体调⽤⽅式由两者协商确定）
        // callAndBackfeed 是⼀次订阅流，可当⼀次函数调⽤，将结构通过callback回调给h5
        // callAndListen 是多次订阅流，与事件订阅类似，把callback注册到某事件的回调⾥，并且在⻚⾯关闭后解除注册
        // 例如：wx.onError(callback) // 持续向h5上报wx的报错
        // 解除：wx.offError(callback)
      },
    }

    // 注⼊VRWebview组件所需的⾏为
    const behaviors = {
      // 进⾏登录
      requestLogin: async () => {
        // 需返回的数据结构
        return {
          userName: "⽤户名",
          userId: "⽤户ID",
          token: "⽤户令牌",
          avatar: "⽤户头像",
        };
      },
      // 获取⽤户信息
      getUserInfo: async () => {
        // 需返回的数据结构
        return {
          userName: "⽤户名",
          userId: "⽤户ID",
          token: "⽤户令牌",
          avatar: "⽤户头像",
        };
      },
      // 进⾏分享
      actionShare: async (params) => {
        // h5中会有分享功能，params是相应的分享配置（由h5与⼩程序之间进⾏协商）
        // 因为⼩程序在webview下⽆法直接调起分享，这⾥的最佳实践是获取params的数据后对⻚⾯的shareConfig数据进⾏缓存，在分享相关的钩⼦函数⾥将缓存的数据返给wx
      },
      // 当VR退出时, _params是与h5协商的退出消息结构
      onExitVr: async (_params) => {
        console.log("onExitVr", _params);
      },
      // 当webview发⽣错误时进⾏处理
      onWebViewError: (e) => {
        console.error("onWebViewError", e);
      },
      // 组件报错时的回调
      onError: (e) => {
        console.error("onError", e);
      },
      // 获取⽤户的token，因为h5使⽤token时可能会因token超时失效，该⽅法要求返回最新的有效token
      getToken: async () => {
        // return 'abc'
      },
    }

    // 把声明好的变量塞给组件
    const rsVrProps = rsVrWebviewPropsWrapper({ 
        url,
        options,
        schemes,
        behaviors
    });

    this.setState({
      rsVrProps
    });
  }

  render () {
    const { rsVrProps } = this.state;
    return (
      <View>
        {rsVrProps && (
          <vr-webview props={rsVrProps}></vr-webview>
        )}
      </View>
    );
  }
}
```

#### uni-app 接入

1. 在 uniapp 项目中新建`wxcomponents`目录，将`realsee-vrwebview.0.1.1.tar.gz`解压至`$PROJECT/wxcomponents/vrwebview`目录下，目录结构大致如下：

```bash
-$PROJECT
  -src
    -pages
      -vr
        -index.vue
    -wxcomponents
      -vrwebview
        -index.js
        -index.json
        -index.wxml
        -utils.js
        -TERMS.txt
```

2. 在项目配置文件`pages.json`为需要引入组件的页面添加声明，例如

```json
{
  "pages": [
    //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
      "path": "pages/index/index",
      "style": {
        "usingComponents": {
          // #ifdef APP-PLUS || MP-WEIXIN || MP-QQ
          "vr-webview": "/wxcomponents/vrwebview/index"
          // #endif
        }
      }
    }
  ]
}
```

3. 在 vue 页面里使用方式如下

```vue
<template>
  <vr-webview v-if="rsVrProps" :props="rsVrProps"></vr-webview>
</template>

<script>
// 引入组件props数据进行封装的工具函数
import { rsVrWebviewPropsWrapper } from "../../wxcomponents/vrwebview/utils.js";

export default {
  data() {
    return {
      // 组件使用的初始化参数
      rsVrProps: "",
    };
  },
  onLoad() {},
  onReady() {
    this.initVr();
  },
  methods: {
    // 进行VR的初始化，在这里对组件的参数进行处理
    initVr() {
      const url = "vr链接";
      const options = {
        app: {
          key: "touristAppKey", // 如视开放平台的appKey
          secret: "touristAppSecret", // 如视开放平台AppSecret
        }
      }

      // 注⼊⾃定义scheme，这⾥是与h5约定的使⽤jsbridge-x进⾏通信的⽅法
      const schemes = {
        customFunction: (callback, type, params) => {
          // ⾃定义⽅法，h5会通过jsbridge-x的 callAndBackfeed 或 callAndListen 的⽅式进⾏调⽤（具体调⽤⽅式由两者协商确定）
          // callAndBackfeed 是⼀次订阅流，可当⼀次函数调⽤，将结构通过callback回调给h5
          // callAndListen 是多次订阅流，与事件订阅类似，把callback注册到某事件的回调⾥，并且在⻚⾯关闭后解除注册
          // 例如：wx.onError(callback) // 持续向h5上报wx的报错
          // 解除：wx.offError(callback)
        },
      }

      // 注⼊VRWebview组件所需的⾏为
      const behaviors = {
        // 进⾏登录
        requestLogin: async () => {
          // 需返回的数据结构
          return {
            userName: "⽤户名",
            userId: "⽤户ID",
            token: "⽤户令牌",
            avatar: "⽤户头像",
          };
        },
        // 获取⽤户信息
        getUserInfo: async () => {
          // 需返回的数据结构
          return {
            userName: "⽤户名",
            userId: "⽤户ID",
            token: "⽤户令牌",
            avatar: "⽤户头像",
          };
        },
        // 进⾏分享
        actionShare: async (params) => {
          // h5中会有分享功能，params是相应的分享配置（由h5与⼩程序之间进⾏协商）
          // 因为⼩程序在webview下⽆法直接调起分享，这⾥的最佳实践是获取params的数据后对⻚⾯的shareConfig数据进⾏缓存，在分享相关的钩⼦函数⾥将缓存的数据返给wx
        },
        // 当VR退出时, _params是与h5协商的退出消息结构
        onExitVr: async (_params) => {
          console.log("onExitVr", _params);
        },
        // 当webview发⽣错误时进⾏处理
        onWebViewError: (e) => {
          console.error("onWebViewError", e);
        },
        // 组件报错时的回调
        onError: (e) => {
          console.error("onError", e);
        },
        // 获取⽤户的token，因为h5使⽤token时可能会因token超时失效，该⽅法要求返回最新的有效token
        getToken: async () => {
          // return 'abc'
        },
      }

      // 把声明好的变量塞给组件
      const rsVrProps = rsVrWebviewPropsWrapper({ 
          url,
          options,
          schemes,
          behaviors
      });

      this.rsVrProps = rsVrProps
    },
  },
};
</script>
```

#### mpvue 接入

1. 在 mpvue 项目中新建`static/vrwebview`目录，将`realsee-vrwebview.0.1.1.tar.gz`解压至`$PROJECT/static/vrwebview`目录下，目录结构大致如下：

```bash
-$PROJECT
  -src
    -pages
      -vr
        -index.vue
  -static
    -vrwebview
      -index.js
      -index.json
      -index.wxml
      -utils.js
      -TERMS.txt
```

2. 在项目引用组件的页面配置文件`main.json`为需要引入的组件添加声明，例如

```json
{
  "usingComponents": {
    "vr-webview": "../../static/vrwebview/index"
  }
}
```

3. 在 vue 页面里使用方式如下

```vue
<template>
  <vr-webview v-if="rsVrProps" :props="rsVrProps"></vr-webview>
</template>

<script>
// 引入组件props数据进行封装的工具函数
import { rsVrWebviewPropsWrapper } from "../../static/vrwebview/utils.js";

export default {
  data() {
    return {
      // 组件使用的初始化参数
      rsVrProps: "",
    };
  },
  onLoad() {},
  onReady() {
    this.initVr();
  },
  methods: {
    // 进行VR的初始化，在这里对组件的参数进行处理
    initVr() {
      const url = "vr链接";
      const options = {
        app: {
          key: "touristAppKey", // 如视开放平台的appKey
          secret: "touristAppSecret", // 如视开放平台AppSecret
        }
      }

      // 注⼊⾃定义scheme，这⾥是与h5约定的使⽤jsbridge-x进⾏通信的⽅法
      const schemes = {
        customFunction: (callback, type, params) => {
          // ⾃定义⽅法，h5会通过jsbridge-x的 callAndBackfeed 或 callAndListen 的⽅式进⾏调⽤（具体调⽤⽅式由两者协商确定）
          // callAndBackfeed 是⼀次订阅流，可当⼀次函数调⽤，将结构通过callback回调给h5
          // callAndListen 是多次订阅流，与事件订阅类似，把callback注册到某事件的回调⾥，并且在⻚⾯关闭后解除注册
          // 例如：wx.onError(callback) // 持续向h5上报wx的报错
          // 解除：wx.offError(callback)
        },
      }

      // 注⼊VRWebview组件所需的⾏为
      const behaviors = {
        // 进⾏登录
        requestLogin: async () => {
          // 需返回的数据结构
          return {
            userName: "⽤户名",
            userId: "⽤户ID",
            token: "⽤户令牌",
            avatar: "⽤户头像",
          };
        },
        // 获取⽤户信息
        getUserInfo: async () => {
          // 需返回的数据结构
          return {
            userName: "⽤户名",
            userId: "⽤户ID",
            token: "⽤户令牌",
            avatar: "⽤户头像",
          };
        },
        // 进⾏分享
        actionShare: async (params) => {
          // h5中会有分享功能，params是相应的分享配置（由h5与⼩程序之间进⾏协商）
          // 因为⼩程序在webview下⽆法直接调起分享，这⾥的最佳实践是获取params的数据后对⻚⾯的shareConfig数据进⾏缓存，在分享相关的钩⼦函数⾥将缓存的数据返给wx
        },
        // 当VR退出时, _params是与h5协商的退出消息结构
        onExitVr: async (_params) => {
          console.log("onExitVr", _params);
        },
        // 当webview发⽣错误时进⾏处理
        onWebViewError: (e) => {
          console.error("onWebViewError", e);
        },
        // 组件报错时的回调
        onError: (e) => {
          console.error("onError", e);
        },
        // 获取⽤户的token，因为h5使⽤token时可能会因token超时失效，该⽅法要求返回最新的有效token
        getToken: async () => {
          // return 'abc'
        },
      }

      // 把声明好的变量塞给组件
      const rsVrProps = rsVrWebviewPropsWrapper({ 
          url,
          options,
          schemes,
          behaviors
      });

      this.rsVrProps = rsVrProps
    },
  },
};
</script>
```
