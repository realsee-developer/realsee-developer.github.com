---
title: 剧本结构
---

:::info
如视 3D 空间剧本播放器是对剧本数据的播放与演绎，`VreoUnit` 则是剧本数据结构的最小单元，用以描述音视频、剧本帧序列等信息。
:::

## 结构组成

**VreoUnit** 的基本组成结构如下：

```ts title="剧本结构"
/**
 * 剧本结构
 */
export interface VreoUnit {
  categoryId: string 
  categoryText: string 
  frontRequestId: string
  index: string | number
  keyframes: VreoKeyframe[] // 剧本帧合集
  video: VreoVideo // 虚拟视频角色
}
```

:::caution
视频素材必须是绿幕背景。
:::

:::tip
[点击查看详细的剧本结构文档](https://unpkg.com/@realsee/vreo@0.2.0-alpha.10/docs/interfaces/Player.VreoUnit.html) 。
:::

## 剧本帧

**Vreo** 剧本行为是按照剧本关键帧来执行的，即根据音视频播放的时间序列命中剧本帧后，按照剧本帧的类型执行相机运镜、全景标签、模型特效等动作。

剧本帧需严格遵从剧本帧结构声明，才能被播放器正确识别。

:::info
目前支持十种类型剧本关键帧，后续会不断完善及添加新的剧本关键帧类型以涵盖更多行为。
:::

Vreo 内置了每一个剧本关键帧的 UI 及动作行为，通过 `vreoplayer.on()` 可监听到相应的剧本关键帧的命中时机，并按需添加业务逻辑。


```ts title="剧本帧结构声明"
export interface VreoKeyframe {
  uuid?: string // 剧本帧 `uuid`。
  type: VreoKeyframeEnum // 剧本帧类别枚举
  start: number // 触发时间戳。
  end: number // 结束时间戳
  parsed?: boolean // 解析状态
  data: Record<string, any> // 当前帧类别数据依赖
}
```
:::tip
[点击查看详细的剧本帧文档](https://unpkg.com/@realsee/vreo@0.2.0-alpha.10/docs/interfaces/Player.VreoKeyframe.html) 。
:::

## 示例数据

```json title="VreoUnit数据样例"
{
  "categoryId": "257ac7a8-b00a-4a1b-88b8-76f93362c0dc",
  "categoryText": "讲房源户型",
  "video": {
    "duration": 106278, // 视频长度
    "start": 0, // 开始时间戳
    "end": 106278, // 结束时间戳
    "url": "//url-host/***/xxx.mp4" // 视频地址
  },
  "keyframes": [
    {
      "uuid": "ac70621b-4e00-442e-311c-befb5bd3f87f",
      "type": "PanoTextLabel",
      "start": 27060,
      "end": 42351,
      "parsed": false,
      "data": {
        "text": "戏剧人生",
        "vertex": {
          "x": -0.8879207391906447,
          "y": 0.3829881941156301,
          "z": -1.8068334368800785
        },
        "fontSize": 16
      }
    }]
}
```

:::tip
下一章开始，将为您详细讲解每一种类型剧本帧的效果、作用以及数据结构。
:::
