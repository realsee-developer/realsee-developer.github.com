---
title: Invoice ticket description
---

## What is ticket

`ticket` is required for access to a room.

## How to get ticket

The front end of the business needs to get a door ticket from the back end of the operation.

```js title="示例 getTicket 获取方法"
// Request with ticket
const getTicket = async ({roomCode, userId, userRole}) => {
    return request('getTicket', {// here is a simple fetch encapsulation without extra processing.
        room_id: roomCode,
        user_id: userId,
        user_role: userRole
    })
        . then(data => {
            return data.ticket
        })
        atch(error) => {
            anthropogenic Error (error. essage|| 'Failed to fetch door ticket')
        })
}
```

## How to pass the ticket to live sdk

The front end of the business needs to complete the way you get a ticket with a ticket `create()` method, the sdk will use its own way to fetch the ticket with the user inbound while connecting to see it.

```js title="在 live 实例初始化时传入"
import { createLive } from '@realsee/live'

const live = createLive({
  __debug__: true, // This mode will allow debugging in terminal print logs, which is recommended when developing.
  url: 'wss://ws-access.realsee. om/***/? xxx' /* URL to connect to WebSocket services, get */ from your backend */
    // Highlight-start
    getTicket: async () => {
        return await getTicket ({ roomCode, userId, userRole })
    }
    // highlight-end
})
```

```js title="在 connect 连接带看时传入"
import liveInstallation from '... liveController/createLiveInstance'

const { useConnect } = liveInstance


const connit = useConnect()

connect(
    force: true,
    url: wsUrl,
    // Highlight-start
    getTicket: async () => {
        return await getTicket ({ roomCode, userId, userRole })
    }
    // highlight-end
})
```
