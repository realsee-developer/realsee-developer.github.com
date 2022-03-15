---
title: 剧本结构
---

**VreoUnit** 是载入播放器的剧本结构，其主要描述了音视频以及关键帧序列等信息。

**VreoUnit** 数据结构部分样例如下：

```json
{
  "categoryId": "257ac7a8-b00a-4a1b-88b8-76f93362c0dc",
  "categoryText": "讲房源户型",
  "video": {
    "duration": 106278,
    "start": 0,
    "end": 106278,
    "url": "//url-host/***/xxx.mp4"
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
**VreoUnit** 的字段说明：

- `categoryId`、`categoryText`: 讲解的类别标识符和描述。
- `video`: 虚拟人物视频素材。

    - `duration`: 视频长度。
    - `start`: 开始时间戳。
    - `end`: 结束时间戳。
    - `url`: 视频 CDN 地址。

:::caution
视频素材必须是绿幕背景。
:::

- `keyframes`：关键帧集合。

    - `uuid`: 关键帧 `uuid`。
    - `type`: 关键帧类别枚举，详见目录 **剧本关键帧** 部分。
    - `start`: 触发时间戳。
    - `end`: 结束时间戳。
    - `parsed`: 解析状态。
    - `data`: 当前关键帧类别数据依赖。

## 关键帧说明

Vreo 剧本行为是按照剧本关键帧来执行的，在内置时间轴进程中，参考每一帧的起止时间确认当前播放帧，后按照关键帧的类型执行相机运镜、全景标签、模型特效等动作。

:::info
目前支持十种类型剧本关键帧，后续会不断完善及添加新的剧本关键帧类型以涵盖更多行为。
:::

Vreo 内置了每一个剧本关键帧的 UI 及动作行为，通过 `vreoplayer.on()` 可监听到相应的剧本关键帧的命中时机，并按需添加业务逻辑。
