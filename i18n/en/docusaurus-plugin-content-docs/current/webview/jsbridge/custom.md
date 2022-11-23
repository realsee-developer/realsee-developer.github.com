---
title: Custom "bridge" protocol
---

:::info
`jsBridge` The built-in interface provided basically meets most of the requirements of `js` two-way communications between the environment and the client.Of course, for certain special customization needs that are not covered by built-in interfaces, two-way communications with clients can be implemented through the following two atomic methods.
:::

### callAndBackfeed
- `callBackfeed: <T>(schedume: string) => Promis<JSBridgeReturnType<T | false>>`

```ts title="示例"
const success = await jsBridge.callAndBackfeed<boolean>('/PlayVoiceMsg?msg={待播放语音文本}') // Return successful
```

> Send `scheme` information to the client, who will return to the frontend as soon as they receive it.

### callAndListen
- `callAndListen: <T>(scheme: string, callback: (data: T) => void) => Promis<JSBridgeReturnType<false | (() => void)>>`

> Send `scheme` information to client, client listens to changes in the status and feeds back to the frontend as soon as the status changes occur.The difference with`callBackfeed` is：`callBackfeed()` is a one-time behavior,`callAndListen()` is listening.


:::info
For more information, refer to **[iOS Custom Protocol](../app/iOS.md#callandbackfeed)** or **[Android Custom Protocol](../app/Android.md#callandbackfeed)** Documents description.
:::
