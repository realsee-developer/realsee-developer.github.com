---
title: 性能提升
---

提高播放性能目前有两个策略：降低贴图分辨率和提前预载。

## 降低图片分辨率

您可以通过 `five.imageOptions.size` 设置较低的图片尺寸，以此降低渲染引擎的贴图尺寸，这样贴图的下载速度会变快且内存占用也会降低。 您也可以通过配置 `Vreo` 参数来达到类似的效果：

```ts
const vreoplayer = new Player(five, { imageOptions: { size: 1024 } })
```

## 自动预载

如果网络不稳定，可以设置 `autoPreload` 参数为 `true` ，达到预载静态资源的目的，规避播放过程中的卡顿问题：

```ts
// 全局预载
const vreoplayer = new Player(five, { autoPreload: true })

// 针对某一份剧本数据预载
vreoplayer.load(vreoUnit, 0, true)
```
