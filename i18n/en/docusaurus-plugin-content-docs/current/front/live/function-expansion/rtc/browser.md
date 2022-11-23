---
title: Browser Voice
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

:::tip Voice capacity depends on WebView/Browser container, which requires the container endside to implement RTC capability. In order to facilitate developers' access, the VRTC service of Realsee Developer Center provides container SDK and `jsbridge-x` for mainstream platforms. Live implements native capacity calls via
jsbridge-x bridge with client or micromessage applet applications with a container SDK.This jsbridge-x instance needs to be provided as a configuration parameter to createLive(). If iOS/Android App (accessed for VRTC container SDK).**This chapter will show you how to add language features to your browser.**
:::

## Install Dependencies

:::important voice dependency `@realsee/jsbridge-x` pack. Make sure to install this package when developing.
:::

```bash npm2yarn
npm install @realsee/jsbridge-x
```

## React Example

### Initialize rtc instances

Add the content of the initialization rtc instance to the creation file with the seeds.

<Tabs>
<TabItem value="JavaScript">

```jsx
import { BrowserRTC } from "@realsee/live/lib/RTC/BrowserRTC"
import { VRWebViewRTC } from "@realsee/live/lib/RTC/VRWebViewRTC"
/*
* Note：JSBridgeBrowser needs users to inherit JSBridgeProtocol examples self-implement
* * import JSBridgeProtocol from '@realsee/jsbridge-x/lib/typeings/JSBridgeProtocol'
* **/
import { JSBridgeBrowser } from '. /utils/browser'
import request from "../utils/request"

/*
* method of callback for language signature：getVoiceSign
* This method is used internally by sdk and you simply need to implement it as such.
* [Special note]：opts are physical references, and sdk is automatically injected when calling a language signature method. Use the example to write its reference without adding the arguments themselves.
***/
// highlight-start
const getVoiceSignn = async (opts) ==> {// opts are physical references, and sdk will be injected automatically when calling the language signature method without having to be processed by the business party.
    // Highlight-end
    // request your backend interface here. The request method is simply encapsulating the fetch method without special treatment.
    return await request ('getRtcSign', {
        voice_id: opts.voiceId,
        room_id: opts.roomId,
        user_id: opts.userId
    }). hen(res) ==> Flag back from back voice signature etc. and as required by sdk, eturn out enough of
        return {
            sdkAppId: Number(res). oice_app_id),
            userId: re. ser_identifier,
            userSign: res. Design
        }
    }). atch(error) ==> {
        Anthropology Error(error. essenti)
    })
}

// Initialize rtc instance
let rtcInstallation
rtcInstallation = new BrowserRTC ({ getVoiceSign })

const liveInstance = createLiveReact ({
    __debug__: true,
    rtc: rtcInstance
})

export default liveInstance
```

if you need to implement multiple speech simultaneously (browser voice, client voice, micromessage), The method can be implemented under the "bridge" protocol.For more information, please refer to： [@realsee/jsbridge-x](https://open-platform.realsee.com/developer/docs/webview/jsbridge/intro/)

**A simple implementation of JSBridgeBrowser**

```js title='browser.js'
import request from "./request";

export class JSBridgeBrowser {

    closeWebView () {
        return window.history.back()
    }

    // way means new Or cover, first support new
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

### Voice successfully added listener

::info successfully joined the event with `useRTCEventCallback` hook for voice.
:::

```jsx
import LiveReact from './LiveReact'

const { useRTCEventCallback } = LiveReact

useRTCEventCallback("joined", () => {
    console.log('rtc --joined')
})
```

### Voice error listening

::info listen to voice misinformation by `useRTCEventCallback` by taking an instance.  
:::

```jsx
import LiveReact from './LiveReact'

const { useRTCEventCallback } = LiveReact

useRTCEventCallback("error", (error) =>
    console.log('rtc --error: ', error.message)
})
```
