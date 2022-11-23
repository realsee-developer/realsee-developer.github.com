---
title: Shopping structure
---

:::info
If you view the three-dimensional space play player as a playback and deducting for theatrical data,`VreoUnit` is the smallest unit of theatrical data structure to describe the audio video, theatrical frame sequence, etc.
:::

## Structure composition

**The basic structure of VreoUnit** is as follows：

```ts title="剧本结构"
/**
 * * theater structure
 */
export interface VreoUnit 5
  categoryId: string 
  categoryText: string 
  frontRequestId: string
  index: string | number
  keyframes: Vreo Keyframe[]// Plain frame
  video: VreoVideo / / Virtual Video Role
}
```

:::caution
video clip must be **green screen background**.
:::

:::tip
Detailed theater structure definition： **[Click to view](https://unpkg.com/@realsee/vreo@0.2.0-alpha.10/docs/interfaces/Player.VreoUnit.html)**.
:::

## Playbook Keyframe

**Vreo** The play behavior is performed according to the keyframe of the theatre, i.e. after hitting the frame according to the time series played by the audiovideo, performing the camera mirror, panorama, model effects, etc. according to the type of the drama frames.

Strict compliance with theater frame structure declaration is required in order to be correctly recognized by the player.

:::info
currently supports various types of play keyframes, follow-up work and add new play keyframe types to cover more behavior.
:::

**Vreo** has built-in UI and action behavior for each episode keyframe, by `vreoplayer.on()` can listen to the hits of the corresponding play keyframe and add business logic as needed.


```ts title="剧本帧结构声明"
export interface VreoKeyframe {
  uuid?: string // play frame `uuid`.
  type: VreoKeyframeEnum // Playframe category enum
  start: number // trigger timestamp.
  end: number // End timestamp
  parsed?: boolean // parse status
  data: Record<string, any> // Current frame category data dependence
 } }
```
:::tip
Detailed frame definition： **[Click to view](https://unpkg.com/@realsee/vreo@0.2.0-alpha.10/docs/interfaces/Player.VreoKeyframe.html)**.
:::

## Sample Data

```json title="VreoUnit数据样例"
{
  "categoryId": "257ac7a8-b00a-4a1b-88b8-76f93362c0dc",
  "categoryText": "Talk about the house type",
  "video": {
    "duration": 106278, // video length
    "start ": 0, // start timestamp
    "end": 106278, // end timestamp
    "url": "//url-host/***/xxx.mp4" // video address
  },
  " keyframes": [
    {
      "uuid": "ac70621b-4e00-442e-311c-befb5bd3f87f",
      "type": "PanoTextLabel",
      "start": 27060,
      "end": 42351,
      "parsed" : false,
      "data": {
        "text": "Drama Life",
        "vertex": {
          "x": -0.8879207391906447,
          "y": 0.3829881941156301,
          "z": -1.8068334368800785
        },
        "fontSize": 16
      }
    }
  // ... 
  ]
}
```
