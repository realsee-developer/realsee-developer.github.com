---
title: 浏览器语音
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

:::tip 语音能力需依赖 WebView/Browser 容器，即需要容器端实现 RTC 能力。 为了方便开发者接入，如视开发者中心 VRTC 服务 为主流平台提供 容器 SDK 和 `jsbridge-x` 。 Live 通过
jsbridge-x 与 集成了容器 SDK 的客户端应用或微信小程序应用程序桥接，实现原生能力的调用。这个 jsbridge-x 实例需作为配置参数提供给createLive()。 如果是 iOS/Android App（已接入如视
VRTC 容器 SDK）。**本章将为您介绍如何在浏览器端加入带看语言功能。**
:::

## 安装依赖

:::important 带看语音强依赖 `@realsee/jsbridge-x` 包，开发时请务必安装此包。
:::

```bash npm2yarn
npm install @realsee/jsbridge-x
```

## React 示例

### 初始化 rtc 实例

在带看实例创建文件中增加初始化 rtc 实例的内容。

<Tabs>
<TabItem value="JavaScript">

```jsx
import { BrowserRTC } from "@realsee/live/lib/RTC/BrowserRTC"
import { VRWebViewRTC } from "@realsee/live/lib/RTC/VRWebViewRTC"
/*
* 注意：JSBridgeBrowser 需要用户继承 JSBridgeProtocol 实例自行实现
* import JSBridgeProtocol from '@realsee/jsbridge-x/lib/typings/JSBridgeProtocol'
* */
import { JSBridgeBrowser } from '../utils/browser'
import request from "../utils/request"

/*
* 获取语言签名的回调方法：getVoiceSign
* 此方法由 sdk 内部传参调用，您只需按此形式实现方法即可。
* 【特别说明】：此处的 opts 是形参，sdk 内部在调用语言签名方法时会自动注入，按照示例书写它的引用即可，无需自行注入参数。
* */
// highlight-start
const getVoiceSign = async (opts) => { // 此处的 opts 是形参，sdk 内部在调用语言签名方法时会自动注入，无需业务方处理。
	// highlight-end	
	// 在此处请求您的后端接口，这里的 request 的方法仅简单对 fetch 方法做了封装，未做特殊处理。
	return await request('getRtcSign', {
		voice_id: opts.voiceId,
		room_id: opts.roomId,
		user_id: opts.userId
	}).then((res) => { // 拿到后端返回的语音签名等信息，并按照 sdk 要求，return 出去即可
		return {
			sdkAppId: Number(res.voice_app_id),
			userId: res.user_identifier,
			userSig: res.sign
		}
	}).catch((error) => {
		throw Error(error.message)
	})
}

// 初始化 rtc 实例
let rtcInstance
rtcInstance = new BrowserRTC({ getVoiceSign })

const liveInstance = createLiveReact({
	__debug__: true,
	rtc: rtcInstance
})

export default liveInstance
```

如果您需要同时实现多类语音（浏览器语音、客户端语音、微信小程序语音），您可以按照"桥"协议，实现相应的方法。更多信息请参考： [@realsee/jsbridge-x](https://open-platform.realsee.com/developer/docs/webview/jsbridge/intro/)

**一个简单的 JSBridgeBrowser 实现**

```js title='browser.js'
import request from "./request";

export class JSBridgeBrowser {
	
	closeWebView () {
		return window.history.back()
	}
	
	// way表示新起还是覆盖，先支持新起
	openWebView (url, way) {
		return window.location.href(url)
	}
	
	actionShare (shareConfig) {
		return () => {
		}
	}
	
	async getUserInfo () {
		const res = await request('getUserId')
			.then(data => {
				return data.user_id
			})
			.catch(e => {
				return e.message
			})
		const userInfo = {
			userId: res
		}
		
		return [userInfo,]
	}
	
	async login () {
		const res = await request('getUserId')
			.then(data => {
				return data.user_id
			})
			.catch(e => {
				return e.message
			})
		
		return res
	}
	
	async logout () {
		return {}
	}
	
	async closeLoading () {
		return {}
	}
	
	async getBangsHeight () {
		return 0
	}
}

```

</TabItem>
</Tabs>

### 语音成功加入监听

:::info 通过带看实例提供的 `useRTCEventCallback` hook 监听语音成功加入事件。
:::

```jsx
import LiveReact from './LiveReact'

const { useRTCEventCallback } = LiveReact

useRTCEventCallback("joined", () => {
	console.log('rtc -- joined')
})
```

### 语音错误监听

:::info 通过带看实例提供的 `useRTCEventCallback` hook 监听语音报错信息。
:::

```jsx
import LiveReact from './LiveReact'

const { useRTCEventCallback } = LiveReact

useRTCEventCallback("error", (error) => {
	console.log('rtc -- error: ', error.message)
})
```
