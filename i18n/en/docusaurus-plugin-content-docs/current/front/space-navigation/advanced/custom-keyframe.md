---
title: 'Custom keyframe'
---
 
In addition to the default built-in frame,**Vreo** supports custom frames.You can set this frame type to `VreoKeyframe Enum.Custom`and then parse your own action by listening to `vreoplayer.on (VreoKeyframeEnum.Custom, callback)` episodes.

## Integration by Configuration Parameter

You can implement one `React` component, eg:：

```tsx
export function YourCustomKeyframe(props: CustomVreoKeyframeProps) {

  React.useEffect(() => {
    props.subscribe.on(VreoKeyframeEnum.Custom, callback)

    return () => {
      props.subscribe.off(VreoKeyframeEnum.Custom, callback)
    }
  }, [])

  return <>...</>
}
 ```

Then add it through `new Player(five, {customKeyframes: [YourCustomKeyframe]})` configuration parameters.

## React Hooks Integration

```tsx export function YourCustomKeyframe () { // is not very simple useVreoEventCallback (VreoKeyframeEnum.Custom, callback)

  return <>...</> }
