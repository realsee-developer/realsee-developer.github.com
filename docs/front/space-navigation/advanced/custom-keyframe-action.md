---
title: '自定义关键帧行为'
---

**Vreo** 中的剧本帧行为是内置的，但如果您有强烈的诸如统一 UI 风格类的诉求，不想使用内置剧本逻辑，也可以通过 `new Player(five, {keyframeMap: {PanoTag: false}})` 来禁用内置剧本帧解析，然后通过监听剧本帧触发事件来补充您自己的剧本 UI 行为。

比如，禁用全景标签的解析：

```ts
const vreoplayer = new Player(five, {
  keyframeMap: {
    PanoTag: false /* 禁用了全景标签的解析 */,
  },
})

const callback = (keyframe: VreoKeyframe) => {
  /* 您自己的业务逻辑：全景标签的模块 */
}
// 添加监听
vreoplayer.on(VreoKeyframeEnum.PanoTag, callback)
// 关闭监听
vreoplayer.off(VreoKeyframeEnum.PanoTag, callback)
```

目前仅 DOM 相关的剧本关键帧支持自定义，与三维空间模型相关的内容（如：运镜、特效等）尚不支持用户自定义，请采用内置方案。
