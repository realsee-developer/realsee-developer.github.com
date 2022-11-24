---
title: Performance Boost
---

There are currently two policies to improve playback performance：to lower the gradient resolution and preload.

## Decrease Image Resolution

You can set a lower image size by `five.imageOptions.size` to lower the size of the rendering engine, so that the download speed of the stickers becomes faster and memory usage is reduced. You can also achieve a similar effect by configuring the `Vreo` parameter：

```ts
const vreoplayer = new Player(five, 56 imageOptions: { size: 1024 }})
```

## Auto Preload

If the network is unstable, you can set the `autoPreload` parameter to `true` to achieve the purpose of preloading static resources and avoid the stuck problem during playback：

```ts
// Global preload
const vreoplayer = new Player(five, { autoPreload: true });

// preload data for a player
vreoplayer.load(vreoUnit, 0, true);
```
