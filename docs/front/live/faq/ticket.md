---
title: 带看门票 ticket 说明
---

## 什么是 ticket

`ticket` 是进入带看房间所必须的通行证。

## 如何获取 ticket

业务前端需要从业务后端获取带看门票。

```js title="示例 getTicket 获取方法"
// 请求带看门票
const getTicket = async ({roomCode, userId, userRole}) => {
	return request('getTicket', { // 这里 request 是一个简单的 fetch 封装，未做额外处理。
		room_id: roomCode,
		user_id: userId,
		user_role: userRole
	})
		.then((data) => {
			return data.ticket
		})
		.catch((error) => {
			throw Error(error.message || '获取带看门票失败')
		})
}
```

## 如何将 ticket 传入 live sdk

业务前端需将获取带看门票的方法完整地传给 `createLive()` 方法，sdk 会在连接带看的时候自行调用用户传入的带看门票获取方法，获取门票进入带看。

```js title="在 live 实例初始化时传入"
import { createLive } from '@realsee/live'

const live = createLive({
  __debug__: true, // 此模式下会在终端打印日志方便调试，开发时建议开启此项。
  url: 'wss://ws-access.realsee.com/***/?=xxx' /* 连接 WebSocket 服务的 URL，从您的的后端获取 */,
    // highlight-start
	getTicket: async  () => {
		return await getTicket({ roomCode, userId, userRole })
	}
	// highlight-end
})
```

```js title="在 connect 连接带看时传入"
import liveInstance from '../liveController/createLiveInstance'

const { useConnect } = liveInstance


const connect = useConnect()

connect({
	force: true,
	url: wsUrl,
    // highlight-start
	getTicket: async () => {
		return await getTicket({ roomCode, userId, userRole })
	}
	// highlight-end
})
```
