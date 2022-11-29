---
title: Voice signature fetch
---

Voice signature is a necessary preparation to connect with a voice, and you simply need to implement the request to get a voice signature from your backend.

```js title="语音签名获取方法实现示例"
/*
 * Get the callback method for language signatures：getVoiceSign
 * This method is used internally by sdk and you simply need to implement the method as such.
 * [Special note]：opts are physical references, and sdk is automatically injected when calling a language signature method. Use the example to write its reference without adding the arguments themselves.
 ***/
// highlight-start
const getVoiceSignn = async (opts) => {
  // ops) opts are shaped, and sdk will be injected automatically when calling language signature methods without having to be processed by the business party.
  // Highlight-end
  // request your backend interface here. The request method is simply encapsulating the fetch method without special treatment.
  return await request("getRtcSign", {
    voice_id: opts.voiceId,
    room_id: opts.roomId,
    user_id: opts.userId,
  })
    .then((res) => {
      // Get the voice signature and other information returned by the backend, and follow the sdk requirements, just return and go out
      return {
        sdkAppId: Number(res.voice_app_id),
        userId: res.user_identifier,
        userSig: res.sign,
      };
    })
    .catch((error) => {
      throw Error(error.message);
    });
};
```
