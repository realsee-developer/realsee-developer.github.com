---
title: Miniprogram voice
---

:::tip hint
The integrated file for micromessage applet voice is only for micromessage applet developers.There is no need for additional treatment by developers on other ends and there is natural support for multiple-end audio belts as long as the voices of all sides are secured.
:::

## Environmental requirements

- Microphone App Minimum iOS Requirements：7.0.9
- MIS App Minimum Version Requirements：7.0.8
- Minimum version requirement for applet base：2.10.0
- Since the applet test number is not numerous with `<live-pusher>` and `<live-player>` , you need to apply for the regular applet account for development.
- Since native components (i.e. `<live-pusher>` and `<live-player>` tags) are not supported by the MicroMessage Developer Tool, an operating experience is required on a True Machine.
- Development frameworks such as uniapp are not supported. Please use native applet to develop the environment.

## Development preparation

### Access to authority

:::warning warning
When developing it is necessary to open applet categories with punctuation tabs. If unenabled, they cannot be used properly.
:::

- The applet pull label does not support individual applets but only business class app.
- Small program of push-pull flow temporarily open only to limited access to [ categories ](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html)
- Small programs that meet the requirements of the category need to be in the [wechat public platform] > 【 development 】> 【 Development management 】> The permission of this component can be opened by self-service in Interface Settings, as shown in the following figure:
<!-- !\[check\](../../../../assets/wx/check.png) -->

### Application for SDK access key

Please jump to the [developer console](https://developers.realsee.com/console) request.

### Add a valid domain name

** legal domain name request **: `https://cloud.tencent.com;https://yun.tim.qq.com;https://app-gateway-realsee.ke.com;`

**Legal domain name for socket**: `wss://ws.realsee.cn;wss://ws.realsee.com;`

## SDK Downloads

By [SDK](https://vrlab-static.ljcdn.com/release/web/sdk/vrwebview-miniprogram.3af4ce43.zip) download the SDK resources `rs-wx-vrsdk.zip` file, unzipped after direct reference

## Access Guide

### 1, Create page.wxml

Create Scene WXML file template page.wxml

```html
<!-- introduce wxml template in sdk -->
<include src="path-to/rs-wx-vrsdk/index.wxml" />
```

### 2, Create page.js

```javascript title="page.js"
// import vrPage object from sdk
import vrPage from "path-to/rs-wx-vrsdk/index";
// import the trtc object from the sdk, or import the trtc-wx object you plugged in
import TRTC from "path-to/trtc-wx";

// Mount TRTC on vrPage
vrPage.TRTC = TRTC;

// configure SDK initialization parameters
vrPage.vrOptions = {
  app: {
    key: "your app key",
    secret: "your app secret",
    // gateway endpoint
    gateway: "https://app-gateway-realsee.ke.com", // production
    // sdk startup api
    startup: "/sdk/open/startup/cold.json",
    // voice sign api
    sign: "/sdk/open/live/voice/sign.json",
  },
};

/** Please implement the following interface */

// Get the user ID to see which interface must be implemented
vrPage.getUserIdentifier = async () => "";

// Log in
vrPage.login = async () => " ";

// Communicate with the webview
vrPage.bindMessage = (message) => {
  // message body structure: {id: random message id, data: message data}
  // The data structure of data, please define by both sides of the communication
};

// Exit current applet page
vrPage.exit = () => {};

// Do shared data transfer
vrPage.share = (shareObj) => {};

// Just pass vrPage object to wechat native Page object
Page(vrPage);
```

### Methods of use

```js
// Use vr link as the url parameter for the small size of the applet, note the need to use encodeURIComponent
wx.navigateTo({
  url: `/page?url=encodeURIComponent(${vrUrl})`,
});
```
