---
title: 'Customize keyframe behavior'
---

**The script frame behavior in Vreo** is built-in, but if you have a strong appeal such as a unified UI style and do not want to use the built-in script logic, you can also disable it through `new Player(five, {keyframeMap: {PanoTag: false}})` Built-in script frame parsing, then supplement your own script UI behavior by listening for script frame fired events.

For example, to disable parsing of panorama tags：

```ts
const vreoplayer = new Player(five, {
  keyframeMap: {
    PanoTag: false /* parsing */,
  },
})

const callback = (keyframe: VreoKeyframe) => {
  /* Your own business logic：Panorama Label module */
}
// Listen for
vreoplayer. n(VreoKeyframeEnum.PanoTag, callback)
// Close list
vreoplayer.off (VreoKeyframeEnum.PanoTag, callback)
```

Custom is currently supported only by the DOM related play keyframes. Content related to the three-dimensional spatial model (e.g.：mirrors, effects, etc.) is not supported by user customization. Please use the built-in option.
