---
title: 自定义 "桥" 协议
---

:::info
`jsBridge` 提供的内置接口基本满足大部分 `js` 环境与客户端双向通信的需求。当然，对于某些没内置接口没有兼顾到的特殊定制类需求，可通过如下两个原子方法实现 "桥" 与客户端的双向通信。
:::

### callAndBackfeed

- `callAndBackfeed: <T>(scheme: string) => Promise<JSBridgeReturnType<T | false>>`

```ts title="示例"
const success = await jsBridge.callAndBackfeed<boolean>(
  "/PlayVoiceMsg?msg={待播放语音文本}"
); // 返回是否播放成功
```

> 发送 `scheme` 信息给客户端，客户端收到信息后会立即返回给前端。

### callAndListen

- `callAndListen: <T>(scheme: string, callback: (data: T) => void) => Promise<JSBridgeReturnType<false | (() => void)>>`

> 发送 `scheme` 信息给客户端，客户端会监听相关状态的变化，当相关状态发生变化后会立即通过回调的方式反馈给前端。与`callAndBackfeed` 的区别是：`callAndBackfeed()` 是一次性行为，`callAndListen()` 是监听行为。

:::info
更多详细信息说明请参考 **[iOS 自定义协议](../app/iOS.md#callandbackfeed)** 或 **[Android 自定义协议](../app/Android.md#callandbackfeed)** 文档说明。
:::
