---
title: 语音签名获取
---

语音签名是连接带看语音的必要准备，您仅需实现向您的后端获取语音签名的请求方法即可。

```js title="语音签名获取方法实现示例"
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

```
